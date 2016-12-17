/**
 * Stores config meta
 */

import { observable, action } from 'mobx';
import ComponentKitConfig from './ComponentKitConfig';
const {
    initialize,
    onInitialConfig,
    onComponentKit,
    createProject,
    writeCode,
    onStarterTemplate
} = require('../../../../lib/middleMan/client');
import editorSessionStore from '../EditorSessionStore';

export class ConfigStore {
    @observable public installedComponentKits: ComponentKitConfig[];
    @observable public activeComponentKit: ComponentKitConfig;

    constructor() {
        this.installedComponentKits = observable([]);
        this.activeComponentKit = new ComponentKitConfig('', '', '');
        initialize('http://localhost:3000');
        onInitialConfig((data) => {
           for (const kit of data.installedComponentKits) {
               this.installedComponentKits.push(new ComponentKitConfig(kit.name, kit.label, kit.version));
           }
           this.activeComponentKit = this.getComponentKitByKey(data.activeComponentKit);
           createProject(this.activeComponentKit);
        });

        onComponentKit((data) => {
            editorSessionStore.componentKit.setComponentKit(data);
        });

        onStarterTemplate((code) => {
            editorSessionStore.updateCode(code);
        })
    }

    @action
    public setActiveComponentKit = (componentKitKey: string) => {
        this.activeComponentKit = this.getComponentKitByKey(componentKitKey);
    }

    @action
    public writeCode = (content: string) => {
        writeCode(content);
    }

    @action
    private getComponentKitByKey = (componentKey: string) => {
         for (const kit of this.installedComponentKits) {
             if (kit.name === componentKey) {
                 return kit;
             }
         }
    }
}

export default new ConfigStore();
