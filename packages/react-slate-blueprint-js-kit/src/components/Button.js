module.exports = {
    id: 'button',
    name: 'Button',
    description: 'Button components render buttons with Blueprint classes and attributes.',
    documentationUrl: 'http://blueprintjs.com/docs/#components.button',
    props: [{
        name: 'className',
        propType: 'string',
        description: 'A space-delimited list of class names to pass along to a child element.'
    }, {
        name: 'disabled',
        propType: 'boolean',
        description: 'Whether this action is non-interactive.'
    }, {
        name: 'elementRef',
        propType: 'function',
        description: 'A ref handler that receives the native HTML element backing this component.'
    }, {
        name: 'iconName',
        propType: 'string',
        description: 'Name of icon (the part after pt-icon-) to add to button.'
    }, {
        name: 'intent',
        description: 'The intent to be applied to the confirm (right-most) button.',
        propType: 'options',
        options: [{
            label: 'PRIMARY',
            value: '0'
        }, {
            label: 'SUCCESS',
            value: '1'
        }, {
            label: 'WARNING',
            value: '2'
        }, {
            label: 'DANGER',
            value: '3'
        }]
    }, {
        name: 'onClick',
        propType: 'function',
        description: 'Click event handler.'
    }, {
        name: 'rightIconName',
        propType: 'string',
        description: 'Name of icon (the part after pt-icon-) to add to button.'
    }, {
        name: 'text',
        propType: 'string',
        description: 'Action text, required for usability.'
    }],
    exported: {
        exportType: 'named',
        identifier: 'Button',
        moduleName: '@blueprintjs/core'
    }
}
