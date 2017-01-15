module.exports = {
    id: 'singleSlider',
    name: 'SingleSlider',
    description: 'A slider is a numeric input for choosing one or two numbers between lower and upper bounds.',
    documentationUrl: 'http://blueprintjs.com/docs/#components.slider.single',
    props: [{
        name: 'className',
        propType: 'string',
        description: 'A space-delimited list of class names to pass along to a child element.'
    }, {
        name: 'disabled',
        propType: 'boolean',
        description: 'Whether the slider is non-interactive.'
    }, {
        name: 'initialValue',
        propType: 'number',
        description: 'Initial value of the slider, determines where the fill starts from.'
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
        propType: 'number',
        description: 'Value of slider.'
    }],
    exported: {
        exportType: 'named',
        identifier: 'SingleSlider',
        moduleName: '@blueprintjs/core'
    }
}
