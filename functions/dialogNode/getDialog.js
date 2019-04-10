const authentication = require('../authentication')
const credentials = require('../credentials')
const parameters = require('./dialogParameters')

function getDialog() {
  const params = {
    workspace_id: credentials.Sust_Homol.workspace_id,
    dialog_node: parameters.dialogNode.dialog_node
  }

  authentication.assistant
    .getDialogNode(param)
    .then(res => {
      console.log(JSON.stringify(res, null, 2))
    })
    .catch(err => {
      console.log(err)
    })
}
