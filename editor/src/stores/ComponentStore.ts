/**
 * Stores component meta
 */

import { observable } from 'mobx';
import ComponentsKit from './ComponentsKit';

export class ComponentStore {
    @observable public componentsKit: ComponentsKit;

    constructor() {
        this.componentsKit = new ComponentsKit();
    }
}

export default new ComponentStore();
