/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';
const Alexa = require('alexa-sdk');

//=========================================================================================================================================
// Global const variables
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this: const APP_ID = 'amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1';
const APP_ID = 'amzn1.ask.skill.123456-ab6g-4804-981a-606a400d1234';

const SKILL_NAME = 'Tamil Facts';
const GET_FACT_MESSAGE = "Here's your fact: ";
const HELP_MESSAGE = 'You can say tell me a Tamil fact, or, you can say exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';
const NEXTFACT = ' Do you want to know another fact?';

//=========================================================================================================================================
// Data array declaration, that will be used to display as facts. Modify this section with your own input to display as facts
//=========================================================================================================================================
const data = ['Tamil is one of the longest-surviving classical languages in the World. ',
'Tamil would be considered one of the world\'s oldest language, by order of appearance, as it is over 5,000 years old, having made its first appearance in 300 BC.',
'Tamil being one of 7 classical languages in the World, still it is used as spoken language by Tamil native speakers and Tamil diaspora around the World.',            
];

//=========================================================================================================================================
// Handler functions are used make the invocation to Skill intents, created in the alexa skill kit.
// In this example skill, I've used my intent name "tamilfacts" and declarared a function to display the facts
//=========================================================================================================================================

const handlers = {
    'LaunchRequest': function () {
        this.emit('tamilfacts');
    },
    'tamilfacts': function () {
        const factArr = data;
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];
        const speechOutput = GET_FACT_MESSAGE + randomFact;

        this.response.cardRenderer(SKILL_NAME, randomFact);
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
};

//=========================================================================================================================================
// In this section, the handlers are exported and this serves the purpose for main function in the slexa skill
//=========================================================================================================================================

exports.handler = function (event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
