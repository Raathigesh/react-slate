module.exports = {
    id: 'progressBar',
    name: 'ProgressBar',
    description: 'Blueprint provides two ways to indicate progress: a horizontal progress bar and a circular spinner.',
    documentationUrl: 'http://blueprintjs.com/docs/#components.progress.bar.js',
    props: [{
        name: 'className',
        propType: 'string'
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
        }]
    }, {
        name: 'value',
        propType: 'number'
    }],
    exported: {
        exportType: 'named',
        identifier: 'ProgressBar',
        moduleName: '@blueprintjs/core'
    }
}