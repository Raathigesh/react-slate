module.exports = {
    id: 'editableText',
    name: 'EditableText',
    description: 'EditableText looks like normal UI text, but transforms into a text input field when the user focuses it.',
    documentationUrl: 'http://blueprintjs.com/docs/#components.editable',
    props: [{
        name: 'className',
        propType: 'string',
        description: 'A space-delimited list of class names to pass along to a child element.'
    }, {
        name: 'defaultValue',
        propType: 'string',
        description: 'Default text value of uncontrolled input.'
    }, {
        name: 'disabled',
        propType: 'boolean',
        description: 'Whether the text can be edited.'
    }, {
        name: 'intent',
        description: 'Visual intent color to apply to element.',
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
        name: 'isEditing',
        propType: 'boolean',
        description: 'Whether the component is currently being edited.'
    }, {
        name: 'maxLines',
        propType: 'number',
        description: 'Maximum number of lines before scrolling begins, when multiline.'
    }, {
        name: 'minLines',
        propType: 'number',
        description: 'Minimum number of lines (essentially minimum height), when multiline.'
    }, {
        name: 'minWidth',
        propType: 'number',
        description: 'Minimum width in pixels of the input, when not multiline.'
    }, {
        name: 'multiline',
        propType: 'boolean',
        description: 'Whether the component supports multiple lines of text. This prop should not be changed during the component\'s lifetime.'
    }, {
        name: 'placeholder',
        propType: 'string',
        description: 'Placeholder text when there is no value.'
    }, {
        name: 'selectAllOnFocus',
        propType: 'boolean',
        description: 'Whether the entire text field should be selected on focus. If false, the cursor is placed at the end of the text.'
    }, {
        name: 'value',
        propType: 'string',
        description: 'Text value of controlled input.'
    }, {
        name: 'onCancel',
        propType: 'function',
        description: 'Callback invoked when user cancels input with the esc key. Receives last confirmed value.'
    }, {
        name: 'onChange',
        propType: 'function',
        description: 'Callback invoked when user changes input in any way.'
    }, {
        name: 'onConfirm',
        propType: 'function',
        description: 'Callback invoked when user confirms value with enter key or by blurring input.'
    }, {
        name: 'onEdit',
        propType: 'function',
        description: 'Callback invoked after the user enters edit mode.'
    }],
    exported: {
        exportType: 'named',
        identifier: 'EditableText',
        moduleName: '@blueprintjs/core'
    }
}
