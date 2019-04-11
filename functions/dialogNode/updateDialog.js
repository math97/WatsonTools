const authentication = require('../../authentication/authentication')
const credentials = require('../../authentication/credentials')
const components = require('../../components/dialogParameters')

function updateDialog() {
  const params = {
    workspace_id: credentials.Sust_Homol.workspace_id,
    dialog_node: components.dialogNode.dialog_node,
    update: components.update
  }

  authentication.assistant
    .updateDialogNode(params)
    .then(res => {
      console.log(JSON.stringify(res, null, 2))
    })
    .catch(err => {
      console.log(err)
    })
}
