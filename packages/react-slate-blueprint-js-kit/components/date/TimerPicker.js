module.exports = {
    id: 'timePicker',
    name: 'TimePicker',
    description: 'A TimePicker allows the user to specify a time.',
    documentationUrl: 'http://blueprintjs.com/docs/#components.datetime.timepicker',
    props: [{
        name: 'className',
        propType: 'string',
        description: 'A space-delimited list of class names to pass along to a child element.'
    }, {
        name: 'defaultValue',
        propType: 'date',
        description: 'Initial time the TimePicker will display. This should not be set if value is set.'
    }, {
        name: 'onChange	',
        propType: 'date',
        description: 'Callback invoked when the user changes the time.'
    }, {
        name: 'precision',
        propType: 'options',
        options: [{
            label: 'MINUTE',
            value: '0'
        }, {
            label: 'SECOND',
            value: '1'
        }, {
            label: 'MILLISECOND',
            value: '2'
        }],
        description: 'The precision of time the user can set.'
    }, {
        name: 'showArrowButtons',
        propType: 'boolean',
        description: 'Whether to show arrows buttons for changing the time.'
    }, {
        name: 'value',
        propType: 'date',
        description: 'The currently set time. If this prop is present, the component acts in a controlled manner.'
    }],
    exported: {
        exportType: 'named',
        identifier: 'TimePicker',
        moduleName: '@blueprintjs/datetime'
    }
}
