/**
 * Editor session
 */

import { observable, action, when, asReference } from 'mobx';
// tslint:disable-next-line:no-require-imports no-var-requires no-require-imports
const recast = require('recast');
// tslint:disable-next-line:no-require-imports no-var-requires no-require-imports
const traverse = require("ast-traverse");
import Knob from './Knob';

export class EditorSession {
    @observable public code: string;
    @observable public ast: any;
    @observable public highlightedNode: any;
    @observable public highlightedNodeParent: any;
    @observable public knob: Knob;
    public importDeclarations: any[];

    constructor() {
        this.code = `
import React, { Component } from 'react';

class HelloWorld extends Component {
    render() {
        return <div>
            <Button
                name="hello" 
            />
        </div>;
    }
}
`;
        this.importDeclarations = [];
        this.highlightedNode = null;
        this.knob = new Knob(() => {
             this.regenerateCode();
        });
        this.addImport();
    }

    @action
    public setCode = (code: string) => {
        this.code = code;
    }

    @action
    public addImport = () => {
        this.ast = recast.parse(this.code, {
            tolerant: true, jsx: true, range: true
        });
        const nodes = recast.parse(`import { Button } from 'react-toolbox';`);
        this.ast.program.body.unshift(nodes.program.body[0]);
        this.code = recast.print(this.ast).code;
    }

    @action
    public findNode = (position: { row: number, column: number }) => {
        let foundNode = null;
        this.importDeclarations = [];
        traverse(this.ast, {
            pre: (node, parent, prop, idx) => {
                if (node.type === 'ImportDeclaration') {
                    this.importDeclarations.push(node);
                }

                if (node.loc && node.loc.start.line === position.row) {
                    if (node.loc.start.column <= position.column && node.loc.end.column >= position.column) {
                        if (foundNode) {
                            if (node.loc.start.column >= foundNode.loc.start.column &&
                                node.loc.end.column <= foundNode.loc.end.column) {
                                foundNode = node;
                                this.highlightedNodeParent = parent;
                            }
                        } else {
                            foundNode = node;
                            this.highlightedNodeParent = parent;
                        }
                    }
                }
            }
        });
        this.highlightedNode = foundNode;
        this.knob.setNode(foundNode);
        console.log(foundNode);
        this.findComponentsImport();
    }

    @action
    public regenerateCode = () => {
         this.code = recast.print(this.ast).code;
    }

    @action
    public findComponentsImport = () => {
        let declarion = '';
        if (this.highlightedNodeParent.type === 'JSXOpeningElement') {
            const name = this.highlightedNode.name;
            for (const importDeclation of this.importDeclarations) {
                for (const specifier of importDeclation.specifiers) {
                    if (specifier.local.name === name) {
                        declarion = importDeclation.source.value;
                    }
                }
            }
        }

        console.log(declarion);
    }
}

export default new EditorSession();
