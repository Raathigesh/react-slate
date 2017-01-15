var Button = require('./Button');
var AnchorButton = require('./AnchorButton');
var Alert = require('./Alert');
var ButtonGroup = require('./ButtonGroup');
var Callout = require('./Callout');
var Card = require('./Card');
var Collapse = require('./Collapse');
var TabComponents = require('./Tabs');
var ProgressBar = require('./ProgressBar');
var Spinner = require('./Spinner');
var Label = require('./formControls/Label');
var Checkbox = require('./formControls/Checkbox');
var Radios = require('./formControls/Radios');
var Switches = require('./formControls/Switches');
var TextInputGroups = require('./formControls/TextInputGroups');
var Select = require('./formControls/Select');
var FileUpload = require('./formControls/FileUpload');
var CollapsibleList = require('./CollapsibleList');
var DatePicker = require('./date/DatePicker');
var DateRangePicker = require('./date/DateRangePicker');
var TimePicker = require('./date/TimerPicker');
var DateTimePicker = require('./date/DateTimePicker');
var DateInput = require('./date/DateInput');
var Dialog = require('./Dialog');
var TextInput = require('./formControls/TextInput');
var Tooltip = require('./Tooltip');
var Tag = require('./Tag');
var HtmlTable = require('./HtmlTable');
var SingleSlider = require('./SingleSlider');
var RangeSlider = require('./RangeSlider');
var FileUpload = require('./FileUpload');
var NonIdeaState = require('./NonIdealState');
var NavBar = require('./NavBar');
var EditableText = require('./EditableText');

module.exports = {
    name: 'Blueprint JS',
    components: [
        Button,
        AnchorButton,
        Alert,
        ButtonGroup,
        Callout,
        Card,
        Collapse,
        TabComponents.Tab,
        TabComponents.TabList,
        TabComponents.TabPanel,
        TabComponents.Tabs,
        TabComponents.TabsPanel,
        ProgressBar,
        Spinner,
        Label,
        Checkbox,
        Radios.Radio,
        Radios.RadioGroup,
        Radios.RadioGroupSnippet,
        Switches,
        TextInputGroups,
        Select,
        CollapsibleList,
        DatePicker,
        DateRangePicker,
        TimePicker,
        DateTimePicker,
        DateInput,
        Dialog,
        TextInput,
        Tooltip,
        HtmlTable,
        SingleSlider,
        RangeSlider,
        FileUpload,
        NonIdeaState,
        NavBar,
        EditableText
    ]
}