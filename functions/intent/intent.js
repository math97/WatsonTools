const { assistant } = require('../../authentication/authentication')
const { Sust_Homol } = require('../../authentication/credentials')

//if(authentication) console.log(`Logado com Sucesso `);

module.exports = {
  getIntent: intent => {
    const params = {
      workspace_id: Sust_Homol.workspace_id,
      intent: intent
    }

    assistant.getIntent(params, function(err, response) {
      if (err) {
        console.error(err)
      } else {
        console.log(JSON.stringify(response, null, 2))
      }
    })
  },

  createIntent: (intent, examples) => {
    const params = {
      workspace_id: Sust_Homol.workspace_id,
      intent: intent,
      examples: examples
    }

    assistant
      .createIntent(params)
      .then(res => {
        console.log(JSON.stringify(res, null, 2))
      })
      .catch(err => {
        console.log(err)
      })
  },

  deleteIntent: intent => {
    const params = {
      workspace_id: Sust_Homol.workspace_id,
      intent: intent
    }

    assistant
      .deleteIntent(params)
      .then(res => {
        console.log(JSON.stringify(res, null, 2))
      })
      .catch(err => {
        console.log(err)
      })
  },

  updateIntent: (intent, new_examples, new_description) => {
    const params = {
      workspace_id: Sust_Homol.workspace_id,
      intent: intent,
      new_examples: new_examples,
      new_description: new_description
    }

    assistant
      .updateIntent(params)
      .then(res => {
        console.log(JSON.stringify(res, null, 2))
      })
      .catch(err => {
        console.log(err)
      })
  },

  listIntent: () => {
    const params = {
      workspace_id: Sust_Homol.workspace_id
    }

    assistant
      .listIntents(params)
      .then(res => {
        console.log(JSON.stringify(res, null, 2))
      })
      .catch(err => {
        console.log(err)
      })
  }
}
