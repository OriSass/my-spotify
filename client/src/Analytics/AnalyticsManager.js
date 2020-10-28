var mixpanel = require('mixpanel-browser');

mixpanel.init("9bff33567c59792a4b5aa811850025ee");

const actions = { track: (eventName, props) => {
    mixpanel.track(eventName, props);
}}
export let Mixpanel = actions;