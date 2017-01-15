module.exports = {
    id: 'rangeSlider',
    name: 'RangeSlider',
    description: 'RangeSlider allows the user to choose a range between upper and lower bounds.',
    documentationUrl: 'http://blueprintjs.com/docs/#components.slider.range',
    props: [{
        name: 'className',
        propType: 'string',
        description: 'A space-delimited list of class names to pass along to a child element.'
    }, {
        name: 'disabled',
        propType: 'boolean',
        description: 'Whether the slider is non-interactive.'
    }, {
        name: 'labelStepSize',
        propType: 'number',
        description: 'Increment between successive labels.'
    }, {
        name: 'max',
        propType: 'number',
        description: 'Maximum value of the slider.'
    }, {
        name: 'min',
        propType: 'number',
        description: 'Minimum value of the slider.'
    }, {
        name: 'onChange',
        propType: 'function',
        description: '(value: number) => void. Callback invoked when the value changes.'
    }, {
        name: 'onRelease',
        propType: 'function',
        description: 'Callback invoked when the handle is released.'
    }, {
        name: 'renderLabel',
        propType: 'boolean',
        description: 'Callback to render a single label. Useful for formatting numbers as currency or percentages. If true, labels will use number value. If false, labels will not be shown.'
    }, {
        name: 'showTrackFill',
        propType: 'boolean',
        description: 'Whether a solid bar should be rendered on the track between current and initial values, or between handles for RangeSlider.'
    }, {
        name: 'stepSize',
        propType: 'number',
        description: 'Increment between successive values; amount by which the handle moves.'
    }, {
        name: 'value',
        propType: 'array',
        description: 'Range value of slider. Handles will be rendered at each position in the range. [number, number]'
    }],
    exported: {
        exportType: 'named',
        identifier: 'RangeSlider',
        moduleName: '@blueprintjs/core'
    }
}
