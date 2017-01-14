/**
 * AST node manipulator for text
 */

import BooleanKnobModel from '../model';
import { addOrUpdatePropertyOfReactComponent, getReactComponentAttributeValue } from '../../../services/astHelper';
import componentPropType from '../../../services/componentPropType';

export default function(model: BooleanKnobModel, node) {
    node.value.expression.value = model.selectedOption;
}

export function getInitialValue(node, propName) {
    return getReactComponentAttributeValue(node, propName, componentPropType.string);
}

export function update(propName: string, value: any, node: any) {
    addOrUpdatePropertyOfReactComponent(node, propName, value, componentPropType.string);
}
