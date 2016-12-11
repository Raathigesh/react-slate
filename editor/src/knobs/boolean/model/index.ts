/**
 * Boolean prop model
 */

import { observable, action } from 'mobx';
import { getInitialValue, update } from '../nodeManipualtor';

export default class BooleanKonb {
    @observable public isTrue: boolean;
    public node: any;
    public propName: string;

    constructor(propName, node) {
        this.isTrue = getInitialValue(node);
        this.propName = propName;
        this.node = node;
    }

    @action
    public setValue = (value: any) => {
        this.isTrue = value;
        update(this.propName, this.isTrue, this.node);
    }
}