const intent = require('./functions/intent')

async function main() {
  var i = await intent.createIntent('Teste_Utilizacao_Codigote')
  console.log(`intent ${i}`)
}
main()
// intent.getIntent('Teste_Utilizacao_Codigo')
