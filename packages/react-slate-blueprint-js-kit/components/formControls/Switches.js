module.exports = {
    id: 'switch',
    name: 'Switch',
    description: 'Switch Component',
    documentationUrl: 'http://blueprintjs.com/docs/#components.forms.switch.js',
    props: [{
        name: 'checked',
        propType: 'boolean',
        description: 'Whether the control is checked'
    }, {
        name: 'className',
        propType: 'string',
        description: 'A space-delimited list of class names to pass along to a child element'
    }, {
        name: 'defaultChecked',
        propType: 'boolean',
        description: 'Whether the control is initially checked (uncontrolled)'
    }, {
        name: 'label',
        propType: 'string',
        description: 'Text label for control'
    }, {
        name: 'onChange',
        propType: 'function',
        description: 'Event handler invoked when input value is changed'
    }, {
        name: 'disabled',
        propType: 'boolean',
        description: 'Whether the control is non-interactive.'
    }, {
        name: 'inputRef',
        propType: 'function',
        description: 'Ref handler that receives HTML <input> element backing this component.'
    }],
    exported: {
        exportType: 'named',
        identifier: 'Switch',
        moduleName: '@blueprintjs/core'
    }
}
