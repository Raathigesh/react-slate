var RadioGroup = {
    id: 'radioGroup',
    name: 'RadioGroup',
    description: 'RadioGroup component',
    documentationUrl: 'http://blueprintjs.com/docs/#components.forms.radio.js',
    props: [{
        name: 'label',
        propType: 'string',
        description: 'Text label for control'
    }, {
        name: 'onChange',
        propType: 'function',
        description: 'Event handler invoked when input value is changed'
    }, {
        name: 'selectedValue',
        propType: 'string'
    }],
    exported: {
        exportType: 'named',
        identifier: 'RadioGroup',
        moduleName: '@blueprintjs/core'
    },
    isVisibleInComponentPanel: false
}

var Radio = {
    id: 'radio',
    name: 'Radio',
    description: 'Radio component',
    documentationUrl: 'http://blueprintjs.com/docs/#components.forms.radio.js',
    props: [{
        name: 'checked',
        propType: 'boolean',
        description: 'Whether the control is checked.'
    }, {
        name: 'className',
        propType: 'string',
        description: 'A space-delimited list of class names to pass along to a child element.'
    }, {
        name: 'defaultChecked',
        propType: 'boolean',
        description: 'Whether the control is initially checked (uncontrolled)'
    }, {
        name: 'disabled',
        propType: 'boolean',
        description: 'Whether the control is non-interactive.'
    }, {
        name: 'inputRef',
        propType: 'function',
        description: 'Ref handler that receives HTML <input> element backing this component.'
    }, {
        name: 'label',
        propType: 'string',
        description: 'Text label for control.'
    }, {
        name: 'value',
        propType: 'string',
        description: 'Value of the radio button'
    }],
    exported: {
        exportType: 'named',
        identifier: 'Radio',
        moduleName: '@blueprintjs/core'
    },
    isVisibleInComponentPanel: true
}

var RadioGroupSnippet = {
    id: 'radioGroupSnippet',
    name: 'RadioGroup',
    description: 'RadioGroup snippet',
    documentationUrl: 'http://blueprintjs.com/docs/#components.forms.radio.js',
    props: [{

    }],
    snippet: `<RadioGroup
    label="Meal Choice"
    onChange={() => {}}
    selectedValue="one"
>
    <Radio label="Soup" value="one" />
    <Radio label="Salad" value="two" />
    <Radio label="Sandwich" value="three" />
</RadioGroup>`,
    exported: [{
        exportType: 'named',
        identifier: 'RadioGroup',
        moduleName: '@blueprintjs/core'
    }, {
        exportType: 'named',
        identifier: 'Radio',
        moduleName: '@blueprintjs/core'
    }]
}

module.exports = {
    RadioGroup: RadioGroup,
    Radio: Radio,
    RadioGroupSnippet: RadioGroupSnippet
}
