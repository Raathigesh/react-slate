module.exports = {
    id: 'inputGroup',
    name: 'InputGroup',
    description: 'InputGroup Component',
    documentationUrl: 'http://blueprintjs.com/docs/#components.forms.input-group',
    props: [{
        name: 'className',
        propType: 'string',
        description: 'A space-delimited list of class names to pass along to a child element'
    }, {
        name: 'defaultValue',
        propType: 'string',
        description: 'Initial value of the input, for uncontrolled usage'
    }, {
        name: 'disabled',
        propType: 'boolean',
        description: 'Whether the input is non-interactive. Note that rightElement must be disabled separately; this prop will not affect it'
    }, {
        name: 'intent',
        propType: 'string',
        description: 'Visual intent color to apply to element'
    }, {
        name: 'leftIconName',
        propType: 'string',
        description: 'Name of icon (the part after pt-icon-) to render on left side of input.'
    }, {
        name: 'onChange',
        propType: 'function',
        description: 'Change event handler. Use event.target.value for new value.'
    }, {
        name: 'placeholder',
        propType: 'string',
        description: 'Placeholder text in the absence of any value.'
    }, {
        name: 'rightElement',
        propType: 'JsxElement',
        description: 'Element to render on right side of input. For best results, use a minimal button or a tag.'
    }, {
        name: 'type',
        propType: 'string',
        description: 'HTML input type attribute.'
    }, {
        name: 'value',
        propType: 'string',
        description: 'Form value of the input, for controlled usage.'
    }, {
        name: 'inputRef',
        propType: 'function',
        description: 'Ref handler that receives HTML <input> element backing this component.'
    }],
    exported: {
        exportType: 'named',
        identifier: 'InputGroup',
        moduleName: '@blueprintjs/core'
    }
}
