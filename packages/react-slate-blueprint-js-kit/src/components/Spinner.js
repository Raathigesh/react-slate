module.exports = {
    id: 'spinner',
    name: 'Spinner',
    description: 'Spinners indicate indeterminate progress.',
    documentationUrl: 'http://blueprintjs.com/docs/#components.progress.spinner',
    props: [{
        name: 'className',
        propType: 'options',
        options: [{
            label: 'pt-small',
            value: 'pt-small'
        }, {
            label: 'pt-large',
            value: 'pt-large'
        }]
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
        identifier: 'Spinner',
        moduleName: '@blueprintjs/core'
    }
}