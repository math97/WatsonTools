const autentication = require('./autentication')
const { credentials } = require('./credentials')

const listDialog = () => {
  const params = {
    workspace_id: credentials.Sust_Homol.workspace_id
  }
  console.log('Dialog')

  autentication
    .listDialogNodes(params)
    .then(res => {
      console.log(JSON.stringify(res, null, 2))
    })
    .catch(err => {
      console.log(err)
    })
}
