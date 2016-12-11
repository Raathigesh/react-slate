/**
 * Helper service which allows to work with the AST
 */

// tslint:disable-next-line:no-require-imports no-var-requires no-require-imports
const traverse = require('ast-traverse');
// tslint:disable-next-line:no-require-imports no-var-requires no-require-imports
const recast = require('recast');
import { IComponentExport } from './../stores/ComponentMeta';

/**
 * Finds the node that is in the given editor position
 * 
 * @export
 * @param {{ row: number, column: number }} position
 * @param {*} ast
 * @returns
 */
export function findNodeInEditorPosition(position: { row: number, column: number }, ast: any) {
    let foundNode = null;
    let parentNode = null;
    let jsxComponentElement = null;

    position.row = position.row + 1;

    traverse(ast, {
        pre: (node, parent, prop, idx) => {
            if (node.loc && node.loc.start.line === position.row) {
                if (node.loc.start.column <= position.column && node.loc.end.column >= position.column) {
                    if (foundNode) {
                        if (node.loc.start.column >= foundNode.loc.start.column &&
                            node.loc.end.column <= foundNode.loc.end.column) {
                            foundNode = node;
                            parentNode = parent;

                            if (node.type === 'JSXElement') {
                                jsxComponentElement = node;
                            }
                        }
                    } else {
                        foundNode = node;
                        parentNode = parent;

                        if (node.type === 'JSXElement') {
                            jsxComponentElement = node;
                        }
                    }
                }
            }
        }
    });

    console.log(jsxComponentElement);
    console.log(position)
    return {
        node: foundNode,
        parentNode,
        componentNode: jsxComponentElement
    };
}

/**
 * 
 * Finds all the import statements in the AST 
 * @export
 * @param {*} ast
 * @returns
 */
export function getAllImportDeclarations(ast: any) {
    const importDeclarations = [];
    traverse(ast, {
        pre: (node, parent, prop, idx) => {
            if (node.type === 'ImportDeclaration') {
                importDeclarations.push(node);
            }
        }
    });

    return importDeclarations;
}

export interface IImportStatement {
    moduleSource: string;
    componentName: string;
    isDefault: boolean;
}

/**
 * 
 * Finds the import declaration of a component 
 * @export
 * @param {*} componentNode
 * @param {*} parentNode
 * @param {any[]} importDeclarations
 * @returns
 */
export function findImportDeclartionOfComponent(componentNode: any, parentNode: any, importDeclarations: any[]) {
    let declaration: IImportStatement = null;
    if (parentNode.type === 'JSXOpeningElement') {
        const name = componentNode.name;
        for (const importDeclation of importDeclarations) {
            for (const specifier of importDeclation.specifiers) {
                if (specifier.local.name === name) {
                    declaration = {
                        moduleSource: importDeclation.source.value,
                        componentName: specifier.local.name,
                        isDefault: specifier.type === 'ImportDefaultSpecifier'
                    };
                }
            }
        }
    }
    return declaration;
}

/**
 * Adds import statement for a newly added component
 * 
 * @export
 * @param {IComponentExport} componentExport
 * @param {string} moduleName
 * @param {*} ast
 */
export function addImportStatementForComponent(componentExport: IComponentExport, moduleName: string, ast: any) {
    const importString = getImportStatementForComponent(componentExport, moduleName);
    const nodes = recast.parse(importString);
    ast.program.body.unshift(nodes.program.body[0]);
}

/**
 * Construct the import statement depending on default or named export
 * 
 * @param {IComponentExport} componentExport
 * @param {any} moduleName
 * @returns
 */
function getImportStatementForComponent(componentExport: IComponentExport, moduleName) {
    if (componentExport.exportType === 'default') {
        return `import ${componentExport.identifier} from '${moduleName}';`;
    } else if (componentExport.exportType === 'named') {
        return `import { ${componentExport.identifier} } from '${moduleName}';`;
    }
}

export function extractPropsFromComponent(reactComponentNode: any) {
    const props = {};

    if (reactComponentNode) {
        for (const attribute of reactComponentNode.openingElement.attributes) {
            if (attribute.value.type === 'Literal') {
                props[attribute.name.name] = attribute.value.value;
            }
        }
    }

    return props;
}

/**
 * 
 * Updates or adds an attribute value of a react component
 * 
 * @export
 * @param {*} componentNode
 * @param {string} propertyName
 * @param {*} value
 * @returns
 */
export function addOrUpdatePropertyOfReactComponent(componentNode: any, propertyName: string, value: any) {
    for (const attribute of componentNode.openingElement.attributes) {
        if (attribute.name.name === propertyName) {
            attribute.value.value = value;
            attribute.value.raw = value;

            return;
        }
    }

    componentNode.openingElement.attributes.push({
        type: 'JSXAttribute',
        name: {
            type: 'JSXIdentifier',
            name: propertyName
        },
        value: {
            type: 'Literal',
            value,
            raw: value
        }
    });
}
