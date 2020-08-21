function setAPIVersion(apiVersion: string){
  return (constructor) => {
    return class extends constructor{
      version = apiVersion
    }
  }
}

// decorator - anotar a versão da API
@setAPIVersion("1.0.0")
class API {}

console.log(new API())// class_1 { version: '1.0.0' }