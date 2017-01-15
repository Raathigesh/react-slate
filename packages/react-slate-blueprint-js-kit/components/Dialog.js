module.exports = {
    id: 'dialog',
    name: 'Dialog',
    description: 'Dialogs present content overlaid over other parts of the UI.',
    documentationUrl: 'http://blueprintjs.com/docs/#components.dialog',
    props: [{
        name: 'autoFocus',
        propType: 'boolean',
        description: 'Whether the overlay should acquire application focus when it first opens.'
    }, {
        name: 'backdropClassName',
        propType: 'string',
        description: 'CSS class names to apply to backdrop element.'
    }, {
        name: 'backdropProps',
        propType: 'object',
        description: 'HTML props for the backdrop element.'
    }, {
        name: 'canEscapeKeyClose',
        propType: 'boolean',
        description: 'Whether pressing the esc key should invoke onClose.'
    }, {
        name: 'canOutsideClickClose',
        propType: 'boolean',
        description: 'Whether clicking outside the overlay element (either on backdrop when present or on document) should invoke onClose.'
    }, {
        name: 'className',
        propType: 'string',
        description: 'A space-delimited list of class names to pass along to a child element.'
    }, {
        name: 'enforceFocus',
        propType: 'boolean',
        description: 'Whether the overlay should prevent focus from leaving itself. That is, if the user attempts to focus an element outside the overlay and this prop is enabled, then the overlay will immediately bring focus back to itself. If you are nesting overlay components, either disable this prop on the "outermost" overlays or mark the nested ones inline={true}.'
    }, {
        name: 'hasBackdrop',
        propType: 'boolean',
        description: 'Whether a container-spanning backdrop element should be rendered behind the contents.'
    }, {
        name: 'iconName',
        propType: 'string',
        description: 'Name of icon (the part after pt-icon-) to appear in the dialog\'s header. Note that the header will only be rendered if title is provided.'
    }, {
        name: 'inline',
        propType: 'boolean',
        description: 'Whether the overlay should be rendered inline or into a new element on document.body. This prop essentially determines which element is covered by the backdrop: if true, then only its parent is covered; otherwise, the entire application is covered. Set this prop to true when this component is used inside an Overlay (such as Dialog or Popover) to ensure that this component is rendered above its parent.'
    }, {
        name: 'isCloseButtonShown',
        propType: 'boolean',
        description: 'Whether to show the close "X" button in the dialog\'s header. Note that the header will only be rendered if title is provided.'
    }, {
        name: 'isOpen',
        propType: 'boolean',
        description: 'Toggles the visibility of the overlay and its children. This prop is required because the component is controlled.'
    }, {
        name: 'lazy',
        propType: 'boolean',
        description: 'If true and not inline, the Portal containing the children is created and attached to the DOM when the overlay is opened for the first time; otherwise this happens when the component mounts. Lazy mounting provides noticeable performance improvements if you have lots of overlays at once, such as on each row of a table.'
    }, {
        name: 'onClose',
        propType: 'function',
        description: 'A callback that is invoked when user interaction causes the overlay to close, such as clicking on the overlay or pressing the esc key (if enabled). Receives the event from the user\'s interaction, if there was an event (generally either a mouse or key event). Note that, since this component is controlled by the isOpen prop, it will not actually close itself until that prop becomes false.'
    }, {
        name: 'style',
        propType: 'object',
        description: 'CSS Styles to apply to the .pt-dialog element.'
    }, {
        name: 'title',
        propType: 'string',
        description: 'Title of dialog. If provided, a .pt-dialog-header element will be rendered inside the dialog before any children elements. In the next major version, this prop will be required.'
    }, {
        name: 'transitionDuration',
        propType: 'number',
        description: 'ndicates how long (in milliseconds) the overlay\'s enter/leave transition takes. This is used by React CSSTransitionGroup to know when a transition completes and must match the duration of the animation in CSS. Only set this prop if you override Blueprint\'s default transitions with new transitions of a different length.'
    }],
    exported: {
        exportType: 'named',
        identifier: 'Dialog',
        moduleName: '@blueprintjs/core'
    }
}
