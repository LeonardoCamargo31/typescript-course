// accountInfo
// charInfo
// playerInfo

type AccountInfo = {
  id: number,
  name: string,
  email?: string //opcional string | undefined
}

const account: AccountInfo = {
  id: 123,
  name: "leonardo",
  email: "leonardo@gmail.com"
}

type CharInfo = {
  nickName: string,
  level: number
}

const char : CharInfo = {
  nickName: "Leo",
  level: 33
}

// union = string | undefined
// intersection = AccountInfo & CharInfo

// estendendo type aliases com intersection 
type PlayerInfo = AccountInfo & CharInfo

const playerInfo = {
  id: 1234,
  name: "leonardo",
  nickName: "Leo131",
  level: 50
}