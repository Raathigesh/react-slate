module.exports = {
    id: 'anchorButton',
    name: 'Anchor Button',
    description: 'An anchor button component',
    documentationUrl: 'http://blueprintjs.com/docs/#components.button.js.anchor-button',
    props: [{
        name: 'className',
        propType: 'string',
        defaultValue: 'Hello World',
        required: false
    }, {
        name: 'disabled',
        propType: 'boolean',
        defaultValue: false
    }, {
        name: 'iconName',
        propType: 'string'
    }, {
        name: 'intent',
        propType: 'string'
    }, {
        name: 'rightIconName',
        propType: 'string'
    }, {
        name: 'text',
        propType: 'string'
    }],
    exported: {
        exportType: 'named',
        identifier: 'Button',
        moduleName: '@blueprintjs/core'
    }
}
