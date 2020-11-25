require('dotenv').config();
var mixpanel = require('mixpanel-browser');

mixpanel.init(process.env.MIXPANEL_ID);

const actions = { track: (eventName, props) => {
    //mixpanel.track(eventName, props);
}}
export let Mixpanel = actions;