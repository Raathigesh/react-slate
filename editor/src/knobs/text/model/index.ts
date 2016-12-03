/**
 * Text knob model
 */

import { observable, action } from 'mobx';
import { getInitialValue } from '../nodeManipulator';

export default class TextKonb {
    @observable public text: string;

    constructor(node) {
        this.text = getInitialValue(node);
    }

    @action
    public setText = (text: string) => {
        this.text = text;
    }
}
