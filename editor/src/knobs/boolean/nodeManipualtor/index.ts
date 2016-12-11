/**
 * AST node manipulator for text
 */

import BooleanKnobModel from '../model';
import { addOrUpdatePropertyOfReactComponent } from '../../../services/astHelper';
import componentPropType from '../../../services/componentPropType';

export default function(model: BooleanKnobModel, node) {
    node.value.expression.value = model.isTrue;
}

export function getInitialValue(node) {
    return node.value;
}

export function update(propName: string, value: any, node: any) {
    addOrUpdatePropertyOfReactComponent(node, propName, value, componentPropType.boolean);
}
