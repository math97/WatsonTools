const authentication = require('../authentication')
const credentials = require('../../authentication/credentials')

function listDialogNodes() {
  const params = {
    workspace_id: credentials.Sust_Homol.workspace_id
  }

  if (authentication.assistant) console.log(`Logado com Sucesso `)

  authentication.assistant
    .listDialogNodes(params)
    .then(res => {
      console.log(JSON.stringify(res, null, 2))
      if (res.pagination.next_cursor) {
        params.cursor = res.pagination.next_cursor
      }
    })
    .catch(err => {
      console.log(err)
    })
}

listDialogNodes()
