const authentication = require('../../authentication/authentication')
const credentials = require('../../authentication/credentials')
const components = require('../../components/messageParameters')

function getMessage() {
  const params = {
    workspace_id: credentials.Sust_Homol.workspace_id,
    input: components.text
  }

  authentication.assistant
    .message(params)
    .then(res => {
      console.log(JSON.stringify(res, null, 2))
    })
    .catch(err => {
      console.log(err)
    })
}
