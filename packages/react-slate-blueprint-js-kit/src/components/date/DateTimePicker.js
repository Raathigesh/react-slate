module.exports = {
    id: 'dateTimePicker',
    name: 'DateTimePicker',
    description: 'A combined component consisting of a DatePicker and a TimePicker.',
    documentationUrl: 'http://blueprintjs.com/docs/#components.datetime.datetimepicker',
    props: [{
        name: 'className',
        propType: 'string',
        description: 'A space-delimited list of class names to pass along to a child element.'
    }, {
        name: 'datePickerProps',
        propType: 'object',
        description: 'Any props to be passed on to the DatePicker other than the value and onChange props as they come directly from the DateTimePicker props.'
    }, {
        name: 'defaultValue	',
        propType: 'date',
        description: 'The initial date and time value that will be set. This will be ignored if value is set.'
    }, {
        name: 'onChange',
        propType: 'function',
        description: 'Callback invoked when the user changes the date or time.'
    }, {
        name: 'timePickerProps',
        propType: 'object',
        description: 'Any props to be passed on to the TimePicker other than the value and onChange props as they come directly from the DateTimePicker props.'
    }, {
        name: 'value',
        propType: 'date',
        description: 'The currently set date and time. If this prop is present, the component acts in a controlled manner.'
    }],
    exported: {
        exportType: 'named',
        identifier: 'DateTimePicker',
        moduleName: '@blueprintjs/datetime'
    }
}
