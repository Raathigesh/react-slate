module.exports = {
    id: 'checkbox',
    name: 'Checkbox',
    description: 'Checkbox component',
    documentationUrl: 'http://blueprintjs.com/docs/#components.forms.checkbox.js',
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
        name: 'defaultIndeterminate',
        propType: 'boolean',
        description: 'Whether this checkbox is initially indeterminate (uncontrolled)'
    }, {
        name: 'indeterminate',
        propType: 'boolean',
        description: 'Whether this checkbox is indeterminate'
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
        identifier: 'Checkbox',
        moduleName: '@blueprintjs/core'
    }
}
