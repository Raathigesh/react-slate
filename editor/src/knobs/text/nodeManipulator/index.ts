/**
 * AST node manipulator for text
 */

import TextKnobModel from '../model';

export default function(model: TextKnobModel, node) {
    node.value = model.text;
}

export function getInitialValue(node) {
    return node.value;
}
