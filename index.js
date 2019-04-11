const intent = require('./functions/intent/intent')

async function main() {
  var i = await intent.createIntent('Matheus_teste')
  console.log(`intent ${i}`)
}
main()
// intent.getIntent('teste')
