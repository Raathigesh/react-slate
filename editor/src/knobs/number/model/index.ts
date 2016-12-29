/**
 * Text knob model
 */

import { observable, action } from 'mobx';
import { getInitialValue, update } from '../nodeManipulator';
import componentPropType from '../../../services/componentPropType';

export default class TextKonb {
    @observable public value: number;
    public node: any;
    public propName: string;

    constructor(propName, node) {
        this.value = getInitialValue(node, propName);
        this.propName = propName;
        this.node = node;
    }

    @action
    public setText = (text: number) => {
        this.value = text;
        update(this.propName, this.value, this.node);
    }

    @action
    public setValue = (value: any) => {
        this.value = value;
    }
}
