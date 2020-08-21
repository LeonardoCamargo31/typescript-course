// method decorator


function delay(ms:number){
  return (target:any, key: string, descriptor: PropertyDescriptor)=> {
    console.log(target) // Greeter { greet: [Function] }
    console.log(key) // greet
    console.log(descriptor) // { value: [Function], writable: true, enumerable: true, configurable: true }
  
    // minha função greet
    const originalMethod = descriptor.value
    descriptor.value = function (...args){
      console.log(`Esperando ${ms}...`)
      setTimeout(()=>{
        console.log('args',args) // []
        console.log(this) // Greeter { greeting: 'pessoa' }
        originalMethod.apply(this,args)
      },ms)

      return descriptor
    }
  }
}

class Greeter { 
  greeting: string
  
  constructor(g: string){
    this.greeting = g
  }

  // esperar um tempo, e ai sim rodar o método
  @delay(1000)
  greet(){
    console.log(`Hello! ${this.greeting}`)
  }
}

const person = new Greeter("pessoa")
person.greet()