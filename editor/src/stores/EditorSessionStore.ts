/**
 * Editor session
 */

import { observable, action } from 'mobx';
// tslint:disable-next-line:no-require-imports no-var-requires no-require-imports
const recast = require('recast');
// tslint:disable-next-line:no-require-imports no-var-requires no-require-imports
const traverse = require('ast-traverse');
import Knob from './Knob';
import ComponentsKit from './ComponentsKit';
import ComponentMeta, { IComponentExport, IComponentProp } from './ComponentMeta';
import startSnippet from './startSnippet';


export class EditorSession {
    @observable public code: string;
    @observable public ast: any;
    @observable public highlightedNode: any;
    @observable public highlightedNodeParent: any;
    @observable public knob: Knob;
    @observable public componentKit: ComponentsKit;
    public importDeclarations: any[];

    constructor() {
        this.componentKit = new ComponentsKit();
        this.code = startSnippet;
        this.importDeclarations = [];
        this.highlightedNode = null;
        this.knob = new Knob(() => {
             this.regenerateCode();
        });
    }

    @action
    public setCode = (code: string) => {
        this.code = code;
        this.ast = recast.parse(this.code, {
            tolerant: true, jsx: true, range: true
        });
    }

    @action
    public addComponent = (id: string) => {
        const component = this.componentKit.getComponentById(id);
        this.addImport(component.exported);
    }

    @action
    public addImport = (componentExport: IComponentExport) => {
        this.ast = recast.parse(this.code, {
            tolerant: true, jsx: true, range: true
        });
        const importString = this.getImportStatement(componentExport);
        const nodes = recast.parse(importString);
        this.ast.program.body.unshift(nodes.program.body[0]);
        this.code = recast.prettyPrint(this.ast, { tabWidth: 2 }).code;
    }

    public getImportStatement = (compoentExport: IComponentExport) => {
        if (compoentExport.exportType === 'default') {
            return `import ${compoentExport.identifier} from '${this.componentKit.name}';`;
        } else if (compoentExport.exportType === 'named') {
            return `import { ${compoentExport.identifier} } from '${this.componentKit.name}';`;
        }
    }

    public getComponentSnippet = (componentMeta: ComponentMeta) => {
        return `<${componentMeta.name} />`;
    }

    public addProp = (props: IComponentProp) => {

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
         this.code = recast.prettyPrint(this.ast, { tabWidth: 2 }).code;
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
