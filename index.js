const intent=require('./functions/intent')

async function main(){
    var i= await intent.getIntent('teste');
    console.log(`intent ${i}`)
}
//main()
intent.getIntent('teste')