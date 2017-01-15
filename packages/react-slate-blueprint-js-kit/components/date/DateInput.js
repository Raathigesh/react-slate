module.exports = {
    id: 'dateInput',
    name: 'DateInput',
    description: 'The DateInput component is an input group with a calendar button that shows a DatePicker in a Popover.',
    documentationUrl: 'http://blueprintjs.com/docs/#components.datetime.dateinput',
    props: [{
        name: 'canClearSelection',
        propType: 'boolean',
        description: 'Allows the user to clear the selection by clicking the currently selected day. Passed to DatePicker component.'
    }, {
        name: 'className',
        propType: 'string',
        description: 'A space-delimited list of class names to pass along to a child element.'
    }, {
        name: 'closeOnSelection',
        propType: 'boolean',
        description: 'Whether the calendar popover should close when a date is selected.'
    }, {
        name: 'defaultValue',
        propType: 'date',
        description: 'The default date to be used in the component when uncontrolled.'
    }, {
        name: 'disabled',
        propType: 'boolean',
        description: 'Whether the component should be enabled or disabled.'
    }, {
        name: 'format',
        propType: 'string',
        description: 'The format of the date. See options here: http://momentjs.com/docs/#/displaying/format/.'
    }, {
        name: 'initialMonth',
        propType: 'date',
        description: 'The initial month the calendar displays.'
    }, {
        name: 'invalidDateMessage',
        propType: 'string',
        description: 'The error message to display when the date selected invalid.'
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
        name: 'onError',
        propType: 'function',
        description: 'Called when the user finishes typing in a new date and the date causes an error state. If the date is invalid, new Date(undefined) will be returned. If the date is out of range, the out of range date will be returned (onChange is not called in this case).'
    }, {
        name: 'openOnFocus',
        propType: 'boolean',
        description: 'If true, the Popover will open when the user clicks on the input. If false, the Popover will only open when the calendar icon is clicked.'
    }, {
        name: 'outOfRangeMessage',
        propType: 'string',
        description: 'The error message to display when the date selected is out of range.'
    }, {
        name: 'popoverPosition',
        propType: 'options',
        options: [{
            label: 'TOP_LEFT',
            value: '0'
        }, {
            label: 'TOP',
            value: '1'
        }, {
            label: 'TOP_RIGHT',
            value: '2'
        }, {
            label: 'RIGHT_TOP',
            value: '3'
        }, {
            label: 'RIGHT',
            value: '4'
        }, {
            label: 'RIGHT_BOTTOM',
            value: '5'
        }, {
            label: 'BOTTOM_RIGHT',
            value: '6'
        }, {
            label: 'BOTTOM',
            value: '7'
        }, {
            label: 'BOTTOM_LEFT',
            value: '8'
        }, {
            label: 'LEFT_BOTTOM',
            value: '9'
        }, {
            label: 'LEFT',
            value: '10'
        }, {
            label: 'LEFT_TOP',
            value: '11'
        }],
        description: 'The position the date popover should appear in relative to the input box.'
    }, {
        name: 'value',
        propType: 'date',
        description: 'The currently selected day. If this prop is present, the component acts in a controlled manner. To display no date in the input field, pass null to the value prop. To display an invalid date error in the input field, pass new Date(undefined) to the value prop.'
    }],
    exported: {
        exportType: 'named',
        identifier: 'DateInput',
        moduleName: '@blueprintjs/datetime'
    }
}
