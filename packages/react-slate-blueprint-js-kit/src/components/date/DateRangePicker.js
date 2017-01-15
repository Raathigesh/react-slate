module.exports = {
    id: 'dateRangePicker',
    name: 'DateRangePicker',
    description: 'A DateRangePicker shows two sequential month calendars and lets the user select a single range of days.',
    documentationUrl: 'http://blueprintjs.com/docs/#components.datetime.daterangepicker',
    props: [{
        name: 'allowSingleDayRange',
        propType: 'boolean',
        description: 'Whether the start and end dates of the range can be the same day. If true, clicking a selected date will create a one-day range. If false, clicking a selected date will clear the selection.'
    }, {
        name: 'className',
        propType: 'string',
        description: 'A space-delimited list of class names to pass along to a child element.'
    }, {
        name: 'defaultValue',
        propType: 'dateRange',
        description: 'Initial DateRange the calendar will display as selected. This should not be set if value is set.'
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
        name: 'shortcuts',
        propType: 'boolean',
        description: 'Whether shortcuts to quickly select a range of dates are displayed or not. If true, preset shortcuts will be displayed. If false, no shortcuts will be displayed. If an array, the custom shortcuts provided will be displayed.'
    }, {
        name: 'value',
        propType: 'dateRange',
        description: 'The currently selected DateRange. If this prop is present, the component acts in a controlled manner.'
    }],
    exported: {
        exportType: 'named',
        identifier: 'DateRangePicker',
        moduleName: '@blueprintjs/datetime'
    }
}
