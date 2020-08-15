// classe abstrata não conseguimos criar obj a partir dela
// não posso const person = new UserAccount('Leo',24)
// mas posso estende-la
// ela vai ser um modelo para outras classes
abstract class UserAccount{
  // modifiers = [public, protected, private e readonly] 
  // pode ler, editar, fazer tudo
  public name: string;
  // consegue chamar a propriedade dentro da classe ou classe que estende
  // mas não consegue chamar fora da classe
  protected age: number;

  constructor(name:string, age:number){
    this.name = name
    this.age = age
  }

  logDetails():void {
    console.log(`This player ${this.name} is ${this.age} years old.`)
  }
}


class CharAccount extends UserAccount{
  // não pode alterar ou lido fora da classe CharAccount ex john.nickName='Teste'
  private nickName: string; 
  // pode ser lido, porem não editado ex john.level = 99
  readonly level: number
  city:string

  // accessors = get e set
  get getCity(){
    return this.city
  }

  set setCity(city:string){
    this.city = city
  }

  constructor(name:string, age:number, nickName: string, level: number, city: string){
    super(name, age)

    this.nickName = nickName
    this.level = level
    this.city = city
  }

  logCharDetails():void {
    console.log(`The player ${this.name} has the char ${this.nickName} at level ${this.level}`)
  }
}

const john = new CharAccount('John',33,'nicksasd',33,'Presidente Prudente')
console.log(john.level)
john.logCharDetails()
console.log(john.getCity)
john.setCity= "São Paulo"
console.log(john.getCity)



