module.exports = {
    id: 'nonIdealState',
    name: 'NonIdealState',
    description: 'Non-ideal UI states inform the user that some content is unavailable.',
    documentationUrl: 'http://blueprintjs.com/docs/#components.nonidealstate',
    props: [{
        name: 'action',
        propType: 'jsx',
        description: ''
    }, {
        name: 'className',
        propType: 'string',
        description: 'space-delimited list of class names to pass along to a child element.'
    }, {
        name: 'description',
        propType: 'string',
        description: 'A longer description of the current non-ideal state.'
    }, {
        name: 'title',
        propType: 'string',
        description: 'The title of the current non-ideal state.'
    }, {
        name: 'visual',
        propType: 'string',
        description: 'A name of a Blueprint icon to display or a JSX Element (such as <Spinner/>).'
    }],
    exported: {
        exportType: 'named',
        identifier: 'NonIdealState',
        moduleName: '@blueprintjs/core'
    }
}
