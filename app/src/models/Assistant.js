//const AssistantV1 = require('ibm-watson/assistant/v1');
import AssistantV1 from 'ibm-watson/assistant/v1'
import {IamAuthenticator} from 'ibm-watson/auth'
require('dotenv/config')

export default new AssistantV1({
    username: process.env.SUST_USERNAME || '<assistant_username>',
    password: process.env.SUST_PASSWORD || '<assistant_password>',
    version: process.env.SUST_VERSION   
    //version: process.env.SUST_VERSION,
    //authenticator:new IamAuthenticator({apikey: process.env.SUST_APIKEY,}),
    //url : process.env.SUST_URL  , 
});