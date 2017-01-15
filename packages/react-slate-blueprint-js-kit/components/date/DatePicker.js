module.exports = {
    id: 'datePicker',
    name: 'DatePicker',
    description: 'A DatePicker shows a monthly calendar and allows the user to choose a single date.',
    documentationUrl: 'http://blueprintjs.com/docs/#components.datetime.datepicker',
    props: [{
        name: 'canClearSelection',
        propType: 'boolean',
        description: 'Allows the user to clear the selection by clicking the currently selected day.'
    }, {
        name: 'className',
        propType: 'string',
        description: 'A space-delimited list of class names to pass along to a child element.'
    }, {
        name: 'defaultValue',
        propType: 'date',
        description: 'Initial day the calendar will display as selected. This should not be set if value is set.'
    }, {
        name: 'initialMonth',
        propType: 'date',
        description: 'The initial month the calendar displays.'
    }, {
        name: 'locale',
        propType: 'string',
        description: 'The locale that gets passed to the functions in localeUtils.'
    }, {
        name: 'localeUtils',
        propType: 'function',
        description: 'Collection of functions that provide internationalization support.'
    }, {
        name: 'maxDate',
        propType: 'date',
        description: 'The latest date the user can select.'
    }, {
        name: 'minDate',
        propType: 'date',
        description: 'The earliest date the user can select.'
    }, {
        name: 'modifiers',
        propType: 'object',
        description: 'Collection of functions that determine which modifier classes get applied to which days. Each function should accept a Date and return a boolean. See the react-day-picker documentation to learn more.'
    }, {
        name: 'onChange',
        propType: 'function'
    }, {
        name: 'showActionsBar',
        propType: 'boolean',
        description: 'Whether the bottom bar displaying \'Today\' and \'Clear\' buttons should be shown.'
    }, {
        name: 'value',
        propType: 'date',
        description: 'The currently selected day. If this prop is present, the component acts in a controlled manner.'
    }],
    exported: {
        exportType: 'named',
        identifier: 'DatePicker',
        moduleName: '@blueprintjs/datetime'
    }
}
