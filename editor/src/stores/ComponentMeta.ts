/**
 * Component meta
 */

import { observable } from 'mobx';

export interface ComponentExport {
    exportType: string;
    identifier: string;
}

export interface ComponentProp {
    name: string;
    propType: string;
    defaultValue: string;
}

export default class ComponentMeta {
    @observable public id: string;
    @observable public name: string;
    @observable public description: string;
    @observable public props: ComponentProp[];
    @observable public exported: ComponentExport;
    @observable public children?: ComponentMeta[];
}
