module.exports = {
    id: 'alert',
    name: 'Alert',
    description: 'Alerts notify users of important information and force them to acknowledge the alert content before continuing.',
    documentationUrl: 'http://blueprintjs.com/docs/#components.alert',
    props: [{
        name: 'cancelButtonText',
        propType: 'string',
        description: 'The text for the cancel button.'
    }, {
        name: 'className',
        propType: 'string',
        description: 'A space-delimited list of class names to pass along to a child element.'
    }, {
        name: 'confirmButtonText',
        propType: 'string',
        description: 'The text for the confirm (right-most) button.'
    }, {
        name: 'iconName',
        propType: 'string',
        description: 'Name of optional icon to display next to alert message.'
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
        name: 'isOpen',
        propType: 'boolean'
    }, {
        name: 'onCancel',
        propType: 'function',
        description: 'Handler invoked when the cancel button is clicked.'
    }, {
        name: 'onConfirm',
        propType: 'function',
        description: 'Handler invoked when the confirm button is clicked.'
    }, {
        name: 'style',
        propType: 'object',
        description: 'CSS Styles to apply to the .pt-alert element.'
    }],
    exported: {
        exportType: 'named',
        identifier: 'Alert',
        moduleName: '@blueprintjs/core'
    }
}
