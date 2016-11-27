/**
 * Component meta
 */

import { observable } from 'mobx';

export default class ComponentMeta {
    @observable public name: string;
    @observable public description: string;
    @observable public props: any;
    @observable public importStatement: string;
    @observable public code: string;
    @observable public children?: ComponentMeta[];
}
