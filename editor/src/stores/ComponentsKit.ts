/**
 * Components kit
 */

import { observable, IObservableArray, action } from 'mobx';
import ComponentMeta, { IComponentExport } from './ComponentMeta';

export default class ComponentsKit {
    @observable public name: string;
    @observable public components: IObservableArray<ComponentMeta>;

    constructor() {
        this.name = 'react-toolbox';
        this.components = observable([{
            id: 'button',
            name: 'Button',
            description: 'A Button component',
            props: [{
                name: 'name',
                propType: 'string',
                defaultValue: 'Hello World',
                required: true
            }, {
                name: 'isPrimary',
                propType: 'boolean',
                defaultValue: false
            }, {
                name: 'theme',
                propType: 'boolean',
                defaultValue: false
            }, {
                name: 'type',
                propType: 'multiOptions',
                options: ['left', 'right', 'center'],
                defaultValue: 'right'
            }],
            exported:  {
                exportType: 'named',
                identifier: 'Button'
            }
        }]);
    }

    @action
    public getComponentById = (id: string) => {
        for (const component of this.components) {
            if (component.id === id) {
                return component;
            }
        }
    }
}
