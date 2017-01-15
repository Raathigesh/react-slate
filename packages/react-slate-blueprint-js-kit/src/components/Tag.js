module.exports = {
    id: 'tag',
    name: 'Tag',
    description: 'Tags are great for lists of strings.',
    documentationUrl: 'http://blueprintjs.com/docs/#components.tag.js',
    props: [{
        name: 'className',
        propType: 'string',
        description: 'A space-delimited list of class names to pass along to a child element.'
    }, {
        name: 'intent',
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
        }],
        description: 'Visual intent color to apply to element.'
    }, {
        name: 'onRemove',
        propType: 'function',
        description: 'Click handler for remove button. Button will only be rendered if this prop is defined.'
    }],
    exported: {
        exportType: 'named',
        identifier: 'Tag',
        moduleName: '@blueprintjs/core'
    }
}