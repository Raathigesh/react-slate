module.exports = {
    id: 'collapsibleList',
    name: 'Collapsible List',
    description: 'The Collapse element shows and hides content with a built-in slide in/out animation.',
    documentationUrl: 'http://blueprintjs.com/docs/#components.collapse',
    props: [{
        name: 'className',
        propType: 'string',
        description: 'A space-delimited list of class names to pass along to a child element.'
    }, {
        name: 'collapseFrom',
        propType: 'options',
        options: [{
            label: 'START',
            value: '0'
        }, {
            label: 'END',
            value: '1'
        }],
        description: 'Which direction the items should collapse from: start or end of the children.'
    }, {
        name: 'dropdownProps',
        propType: 'object',
        description: 'Props to pass to the dropdown popover.'
    }, {
        name: 'dropdownTarget',
        propType: 'JSX.Element',
        description: 'Element to render as dropdown target with CLICK interaction to show collapsed menu.'
    }, {
        name: 'renderVisibleItem',
        propType: 'function',
        description: 'Callback invoked to render each visible item. The item will be wrapped in an li with the optional visibleItemClassName prop.'
    }, {
        name: 'visibleItemClassName',
        propType: 'string',
        description: 'CSS class names to add to <li> tags containing each visible item and the dropdown.'
    }, {
        name: 'visibleItemCount',
        propType: 'number',
        description: 'Exact number of visible items.'
    }],
    exported: {
        exportType: 'named',
        identifier: 'CollapsibleList',
        moduleName: '@blueprintjs/core'
    }
}
