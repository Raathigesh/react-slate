/**
 * Components kit
 */

import { observable, IObservableArray } from 'mobx';
import ComponentMeta from './ComponentMeta';

export default class ComponentsKit {
    @observable public name: string;
    @observable public components: IObservableArray<ComponentMeta>;

    constructor() {
        this.components = observable([{
            name: 'Button',
            description: 'A Button component',
            props: '',
            importStatement: 'import { Button } from \'react-roolbox\'',
            code: '<Button />'
        }, {
            name: 'Header',
            description: 'A Button component',
            props: '',
            importStatement: 'import { Button } from \'react-roolbox\'',
            code: '<Button />'
        }, {
            name: 'Footer',
            description: 'A Button component',
            props: '',
            importStatement: 'import { Button } from \'react-roolbox\'',
            code: '<Button />'
        }, {
            name: 'Modal',
            description: 'A Button component',
            props: '',
            importStatement: 'import { Button } from \'react-roolbox\'',
            code: '<Button />'
        }]);
    }
}
