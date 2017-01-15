module.exports = {
    id: 'tooltip',
    name: 'Spinner',
    description: 'Tooltips display a small string of text next to a target element.',
    documentationUrl: 'http://blueprintjs.com/docs/#components.tooltip.js',
    props: [{
        name: 'className',
        propType: 'string',
        description: 'A space-delimited list of class names to pass along to a child element.'
    }, {
        name: 'constraints',
        propType: 'assembler',
        description: 'Constraints for the underlying Tether instance.'
    }, {
        name: 'content',
        propType: 'string',
        description: 'The content that will be displayed inside of the tooltip.'
    }, {
        name: 'defaultIsOpen',
        propType: 'boolean',
        description: 'Whether the tooltip is initially open.'
    }, {
        name: 'hoverCloseDelay',
        propType: 'number',
        description: 'The amount of time in milliseconds the tooltip should remain open after the user hovers off the trigger. The timer is canceled if the user mouses over the target before it expires.'
    }, {
        name: 'hoverOpenDelay',
        propType: 'number',
        description: 'The amount of time in milliseconds the tooltip should wait before opening after the user hovers over the trigger. The timer is canceled if the user mouses away from the target before it expires.'
    }, {
        name: 'inline',
        propType: 'boolean',
        description: 'Whether the tooltip is rendered inline (as a sibling of the target element). If false, it is attached to a new element appended to <body>.'
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
        name: 'isDisabled',
        propType: 'boolean',
        description: 'Prevents the tooltip from appearing when true.'
    }, {
        name: 'isOpen',
        propType: 'boolean',
        description: 'Whether or not the tooltip is visible. Passing this property will put the tooltip in controlled mode, where the only way to change visibility is by updating this property.'
    }, {
        name: 'onInteraction',
        propType: 'function',
        description: 'Callback invoked in controlled mode when the tooltip open state would change due to user interaction.'
    }, {
        name: 'portalClassName',
        propType: 'string',
        description: 'Space-delimited string of class names applied to the portal which holds the tooltip if inline = false.'
    }, {
        name: 'position',
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
        description: 'The position (relative to the target) at which the tooltip should appear.'
    }, {
        name: 'rootElementTag',
        propType: 'string',
        description: 'The name of the HTML tag to use when rendering the tooltip target wrapper element.'
    }, {
        name: 'tooltipClassName',
        propType: 'string',
        description: 'A space-delimited string of class names that are applied to the tooltip (but not the target).'
    }, {
        name: 'transitionDuration',
        propType: 'number',
        description: 'Indicates how long (in milliseconds) the tooltip\'s appear/disappear transition takes. This is used by React CSSTransitionGroup to know when a transition completes and must match the duration of the animation in CSS. Only set this prop if you override Blueprint\'s default transitions with new transitions of a different length.'
    }, {
        name: 'useSmartArrowPositioning',
        propType: 'boolean',
        description: 'Whether the arrow\'s offset should be computed such that it always points at the center of the target. If false, arrow position is hardcoded via CSS, which expects a 30px target.'
    }, {
        name: 'useSmartPositioning',
        propType: 'boolean',
        description: 'Whether the tooltip will try to reposition itself if there isn\'t room for it in its current position.'
    }],
    exported: {
        exportType: 'named',
        identifier: 'Tooltip',
        moduleName: '@blueprintjs/core'
    }
}