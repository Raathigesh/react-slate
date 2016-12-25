/**
 * Workspace store
 */

import { observable, action, computed } from 'mobx';

export class WorkspaceStore {
    @observable public files: string[];
    @observable public activeFile: string;
    @observable public mode: string;
    @observable public entryFile: string;

    constructor() {
        this.files = observable([]);
        this.mode = 'jsx';
        this.activeFile = '';
        this.entryFile = '';
    }

    @action
    public setFiles = (files: string[]) => {
        this.files = observable(files);
    }

    @computed
    public get editorMode() {
        const extension = this.getFileExtension(this.activeFile);
        if (extension === 'jsx') {
            return 'jsx';
        } else {
            return 'javascript';
        }
    }

    @action
    public setActiveFile = (file: string) => {
        this.activeFile = file;
    }

    @action
    public setEntryFile = (file: string) => {
        this.entryFile = file;
    }

    private getFileExtension(fileName: string) {
        if (fileName.split('.').length > 1) {
            return fileName.split('.')[1];
        }

        return null;
    }
}

export default new WorkspaceStore();

