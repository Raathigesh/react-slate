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
    onStarterTemplate,
    changeKit,
    installModule,
    onPackageInfo,
    onMessage,
    uninstallModule,
    onComponentKitInfo,
    installComponentKit,
    uninstallComponentKit
} = require('../../../../lib/middleMan/client');
import editorSessionStore from '../EditorSessionStore';

interface INotification {
    notificationType: 'success' | 'error';
    message: string;
}

export class ConfigStore {
    @observable public installedComponentKits: ComponentKitConfig[];
    @observable public activeComponentKit: ComponentKitConfig;
    @observable public notification: INotification;
    @observable public isInProgress: boolean;
    @observable public componentKitInfo: {
        installedKits: {
            name: string;
            label: string;
            version: string;
        }[],
        uninstalledKits: {
            name: string;
            label: string;
        }[]
    };

    constructor() {
        this.installedComponentKits = observable([]);
        this.activeComponentKit = new ComponentKitConfig('', '', '');
        this.isInProgress = false;
        this.notification = {
            notificationType: 'success',
            message: ''
        };
        this.componentKitInfo = {
            installedKits: [],
            uninstalledKits: []
        };
        initialize('http://localhost:3000');
        onInitialConfig((data) => {
           for (const kit of data.installedComponentKits) {
               this.installedComponentKits.push(new ComponentKitConfig(kit.name, kit.label, kit.version));
           }
           this.activeComponentKit = this.getComponentKitByKey(data.activeComponentKit);
           //createProject(this.activeComponentKit);
        });

        onComponentKit((data) => {
            editorSessionStore.componentKit.setComponentKit(data);
        });

        onStarterTemplate((code) => {
            editorSessionStore.updateCode(code);
        });

        onMessage((message) => {
            this.isInProgress = false;
            this.notification.message = message.message;
            this.notification.notificationType = message.messageType;
        });

        onPackageInfo((dependencies) => {
            if (dependencies === null) {
                return null;
            }

            const deps = [];
            Object.keys(dependencies.dependencies).forEach((key) => {
                deps.push({
                    name: key,
                    version: dependencies.dependencies[key]
                });
            });

            const devDeps = [];
            Object.keys(dependencies.devDependencies).forEach((key) => {
                deps.push({
                    name: key,
                    version: dependencies.devDependencies[key]
                });
            });

            editorSessionStore.setDependencies(deps, devDeps);
        });

        onComponentKitInfo((data) => {
            this.componentKitInfo.installedKits = data.installedKits;
            this.componentKitInfo.uninstalledKits = data.uninstalledKits;
        });
    }

    @action
    public setActiveComponentKit = (componentKitKey: string) => {
        this.activeComponentKit = this.getComponentKitByKey(componentKitKey);
        changeKit(componentKitKey);
    }

    @action
    public writeCode = (content: string) => {
        writeCode(content);
    }

    @action
    public installModule = (name: string) => {
        this.isInProgress = true;
        installModule(name);
    }

    @action
    public uninstallModule = (name: string) => {
        this.isInProgress = true;
        uninstallModule(name);
    }

    @action
    public installComponentKit = (name: string) => {
        this.isInProgress = true;
        installComponentKit(name);
    }

    @action
    public uninstallComponentKit = (name: string) => {
        this.isInProgress = true;
        uninstallComponentKit(name);
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
