;(() => {
  const AssistantV2 = require('watson-developer-cloud/assistant/v2')
  const { credentials } = require('./credentials')

  const assistant = new AssistantV2({
    version: credentials.Sust_Homol.version,
    iam_apikey: credentials.Sust_Homol.api_key,
    url: credentials.Sust_Homol.url
  })

  if (assistant) console.log(`Logado com Sucesso `)
  module.exports = assistant
})()
