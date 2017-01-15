var Tabs = {
    id: 'tabs',
    name: 'Tabs',
    description: 'Tabs panel',
    documentationUrl: 'http://blueprintjs.com/docs/#components.tabs',
    props: [{
        name: 'className',
        propType: 'string'
    }, {
        name: 'initialSelectedTabIndex',
        propType: 'number'
    }, {
        name: 'onChange',
        propType: 'boolean'
    }, {
        name: 'selectedTabIndex',
        propType: 'number'
    }],
    exported: {
        exportType: 'named',
        identifier: 'Tabs',
        moduleName: '@blueprintjs/core'
    },
    isVisibleInComponentPanel: false
}

var TabList = {
    id: 'tabList',
    name: 'Tabs list',
    description: 'Tabs list',
    documentationUrl: 'http://blueprintjs.com/docs/#components.tabs.js',
    props: [{

    }],
    exported: {
        exportType: 'named',
        identifier: 'TabList',
        moduleName: '@blueprintjs/core'
    },
    isVisibleInComponentPanel: false
}

var TabPanel = {
    id: 'tabPanel',
    name: 'Tab Panel',
    description: 'Tabs list',
    documentationUrl: 'http://blueprintjs.com/docs/#components.tabs.js',
    props: [{

    }],
    exported: {
        exportType: 'named',
        identifier: 'TabPanel',
        moduleName: '@blueprintjs/core'
    },
    isVisibleInComponentPanel: false
}

var Tab = {
    id: 'tab',
    name: 'Tab',
    description: 'Tab',
    documentationUrl: 'http://blueprintjs.com/docs/#components.tabs.js',
    props: [{
        name: 'className',
        propType: 'string'
    }, {
        name: 'isDisabled',
        propType: 'boolean'
    }],
    exported: {
        exportType: 'named',
        identifier: 'Tab',
        moduleName: '@blueprintjs/core'
    },
    isVisibleInComponentPanel: false
}

var TabsPanel = {
    id: 'tabPanel',
    name: 'Tabs Panel',
    description: 'Tabs panel',
    documentationUrl: 'http://blueprintjs.com/docs/#components.tabs.js',
    props: [{

    }],
    snippet: `<Tabs>
    <TabList>
        <Tab>First tab</Tab>
        <Tab>Second tab</Tab>
        <Tab>Third tab</Tab>
        <Tab isDisabled={true}>Fourth tab</Tab>
    </TabList>
    <TabPanel>
        First panel
    </TabPanel>
    <TabPanel>
        Second panel
    </TabPanel>
    <TabPanel>
        Third panel
    </TabPanel>
    <TabPanel>
        Fourth panel
    </TabPanel>
</Tabs>`,
    exported: [{
        exportType: 'named',
        identifier: 'Tabs',
        moduleName: '@blueprintjs/core'
    }, {
        exportType: 'named',
        identifier: 'TabList',
        moduleName: '@blueprintjs/core'
    }, {
        exportType: 'named',
        identifier: 'Tab',
        moduleName: '@blueprintjs/core'
    } , {
        exportType: 'named',
        identifier: 'TabPanel',
        moduleName: '@blueprintjs/core'
    }]
}

module.exports = {
    Tabs: Tabs,
    TabList: TabList,
    TabPanel: TabPanel,
    Tab: Tab,
    TabsPanel: TabsPanel
}
