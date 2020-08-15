// union para dizer que pode ter dois tipos
function logDetails(uid:number | string,item:string){
  console.log(`A product with ${uid} has a title as ${item}.`)
}

logDetails(123,"sapato")
logDetails("123","sapato")


// posso criar um type alias para reutilizar
type Uid = number | string

function logInfo(uid:Uid, user:string){
  console.log(`A user with ${uid} has a name as ${user}.`)
}

logDetails(123,"Leonardo")
logDetails("123","Leonardo")

type Platform = 'Windows' | 'Linux' | 'Mac Os'

function renderPlatform(platform:Platform){
  console.log(`Platform is ${platform}.`)
}

// renderPlatform('ios')// don't work
renderPlatform('Windows')