/**
 * Component meta
 */

import { observable } from 'mobx';

export interface IComponentExport {
    exportType: string;
    identifier: string;
}

export interface IComponentProp {
    name: string;
    propType: string;
    defaultValue: string | boolean;
    required?: boolean;
}

export default class ComponentMeta {
    @observable public id: string;
    @observable public name: string;
    @observable public description: string;
    @observable public props: IComponentProp[];
    @observable public exported: IComponentExport;
    @observable public children?: ComponentMeta[];
}
