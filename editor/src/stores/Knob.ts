/**
 * Store which deals with editor knobs
 */

import { observable, when, action } from 'mobx';

import TextKnobComponent from '../knobs/text/component';
import TextKnobModel from '../knobs/text/model';
import textKnowMutation from '../knobs/text/nodeManipulator';

export default class KnobStore {
    @observable public currentKnobType: 'text';
    @observable public knobModel: any;
    @observable public knob: any;
    @observable public astMutator: any;
    @observable public node: any;
    public modelChangeCallback: any;

    constructor(callback) {
        this.modelChangeCallback = callback;
    }

    @action
    public getKnob = () => {
        if (this.node && this.node.type === 'JSXText') {
            this.knobModel = new TextKnobModel(this.node);
            this.astMutator = textKnowMutation;
            this.knob = TextKnobComponent;
        } else {
            this.knob = null;
        }

    }

    @action
    public onKnobChange = (model: any) => {
        this.astMutator(model, this.node);
        this.modelChangeCallback();
    }

    @action
    public setNode = (node: any) => {
        this.node = node;
        this.getKnob();
    }
}
