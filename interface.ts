interface Game {
  title:string
  description: string
  readonly genre: string
  platform?: string[] // optional
  // assinatura do método
  getSimilars?: (title:string)=>void
}

const myGame : Game = {
  title:'The last of us',
  description: 'The best game in the world',
  genre: 'Action',
  platform: ['ps3','ps4'],
  getSimilars: (title:string) => {
    console.log(`Similar games to ${title}: Uncharted, A plague tale, Metro`)
  }
}
console.log(myGame.genre) // not cant myGame.genre="other"
// como ele é opcional, preciso garantir que exista o método
if(myGame.getSimilars){
  myGame.getSimilars(myGame.title)
}

interface DLC extends Game {
  originalGame:Game,
  newContent: string []
}

const leftBehind : DLC = {
  title:'The last of us - left behind',
  description: 'The best game in the world',
  genre: 'Action',
  platform: ['ps4'],
  originalGame: myGame,
  newContent: ["3 hours story"]
}

// implementar classe baseada em uma interface
class CreateGame implements Game{
  title:string
  description: string
  genre: string

  constructor(t:string, d:string, g:string){
    this.title= t
    this.description= d
    this.genre= g
  }

}

const newGame = new CreateGame('Left 4 dead','The best game in the world','Action')
console.log(newGame)