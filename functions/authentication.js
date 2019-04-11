const credentials = require('../credentials')
const AssistantV1 = require('watson-developer-cloud/assistant/v1')
//const AssistantV2 = require('watson-developer-cloud/assistant/v2')

module.exports = {
  assistant: new AssistantV1({
    version: credentials.Sust_Homol.version,
    iam_apikey: credentials.Sust_Homol.api_key,
    url: credentials.Sust_Homol.url
  }),
 // assistantv2: new AssistantV2({
    
  //})
}
