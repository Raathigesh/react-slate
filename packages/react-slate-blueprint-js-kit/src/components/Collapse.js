module.exports = {
    id: 'collapse',
    name: 'Collapse',
    description: 'The Collapse element shows and hides content with a built-in slide in/out animation.',
    documentationUrl: 'http://blueprintjs.com/docs/#components.collapse',
    props: [{
        name: 'className',
        propType: 'string',
        description: 'A space-delimited list of class names to pass along to a child element.'
    }, {
        name: 'component',
        propType: 'string',
        description: 'Component to render as the root element. Useful when rendering a Collapse inside a <table>, for instance.'
    }, {
        name: 'isOpen',
        propType: 'boolean',
        description: 'Whether the component is open or closed.'
    }, {
        name: 'transitionDuration',
        propType: 'number',
        description: 'The length of time the transition takes, in ms. This must match the duration of the animation in CSS. Only set this prop if you override Blueprint\'s default transitions with new transitions of a different length.'
    }],
    exported: {
        exportType: 'named',
        identifier: 'Collapse',
        moduleName: '@blueprintjs/core'
    }
}
