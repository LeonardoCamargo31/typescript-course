function minLength(length: number){
  // target é minha classe, key minha propriedade title
  return (target:any, key: string) => {
    console.log(target)// Movie {}
    console.log(key)// title

    // movie.title
    let val = target[key]

    // get e set
    const getter = () => val
    const setter = (value: string) => {
      if(value.length<length){// definido no decorator @minLength(5)
        console.log(`Error: Não pode criar ${key} com tamanho menor que ${length}.`)
      }
      else{ 
        val = value
      }
    }

    // precisa definir no nosso objeto
    Object.defineProperty(target,key,{
      get: getter,
      set: setter
    })
  }
}

class Movie {
  // fazer uma validação - menor que 5 não pode
  @minLength(5)
  title: string

  constructor(t:string){
    this.title = t
  }
}

const movie = new Movie("Foo")
//Error: Não pode criar title com tamanho menor que 5.
console.log(movie.title)// undefined