/**
 * AST node manipulator for text
 */

import TextKnobModel from '../model';
import { addOrUpdatePropertyOfReactComponent } from '../../../services/astHelper';
import componentPropType from '../../../services/componentPropType';

export default function(model: TextKnobModel, node) {
    node.value = model.text;
}

export function getInitialValue(node) {
    return node.value;
}

export function update(propName: string, value: string, node: any) {
    addOrUpdatePropertyOfReactComponent(node, propName, value, componentPropType.string);
}
