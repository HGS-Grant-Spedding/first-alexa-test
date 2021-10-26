let express = require('express'),
    bodyParser = require('body-parser'),
    port = process.env.PORT || 3000,
    app = express();
let alexaVerifier = require('alexa-verifier');
const SKILL_NAME = 'TestAlexa1';
const GET_HERO_MESSAGE = 'I guess I can change this';
const HELP_MESSAGE = 'This is a test. Why would there be help';
const HELP_REPROMPT = 'Well. Do something';
const STOP_MESSAGE = 'Right, Im having a nap';
const PAUSE = '<break time="0.3s" />'
const WHISPER = '<amazon:effect name="whispered"/>'

const data = [
    'test1',
    'test2',
    'test3',
    'test4',
    'test5',
    'test6',
    'test7',
    'test8',
    'test9',
    'test0',
];

app.use(bodyParser.json({
    
})
    
    
    )