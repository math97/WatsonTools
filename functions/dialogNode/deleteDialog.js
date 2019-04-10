const authentication = require('../authentication')
const credentials = require('../credentials')
const parameters = require('./dialogParameters')

function deleteDialog() {
  const params = {
    workspace_id: credentials.Sust_Homol.workspace_id,
    dialog_node: parameters.dialogNode.dialog_node
  }

  authentication.assistant
    .deleteDialogNode(param)
    .then(res => {
      console.log(JSON.stringify(res, null, 2))
    })
    .catch(err => {
      console.log(err)
    })
}
