/**
 * Text knob model
 */

import { observable, action } from 'mobx';
import { getInitialValue, update } from '../nodeManipulator';
import componentPropType from '../../../services/componentPropType';

export default class TextKonb {
    @observable public text: string;
    public node: any;
    public propName: string;

    constructor(propName, node) {
        this.text = getInitialValue(node);
        this.propName = propName;
        this.node = node;
    }

    @action
    public setText = (text: string) => {
        this.text = text;
        update(this.propName, this.text, this.node);
    }

    @action
    public setValue = (value: any) => {
        this.text = value;
    }
}
