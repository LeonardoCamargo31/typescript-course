type Todo = {
  title: string
  description: string
  completed: boolean
}

// todas as props viram readonly
const todo: Readonly<Todo> = {
  title: "Assistir curso",
  description: "Relembrar os detalhes",
  completed: false
}

// alterando diretamente o obj, isso pode ser um problema
// e não queremos que o obj seja alterado, quase como um freeze
// para isso vamos criar uma função updateTodo, para copiar e alterar os valores
// isso segue o principio de imutabilidade
// todo.completed = true

/// Partial
// fieldsToUpdate só props do todo
// ex passar uma prop diferente
// mas preciso passar o objeto inteiro, nada é opcional

// para isso uso o partial em fieldsToUpdate:Todo
// deixa todas as props opcionais para fieldsToUpdate
function updateTodo(todo:Todo, fieldsToUpdate: Partial<Todo>){
  return {...todo,...fieldsToUpdate}
}

const todo2: Todo = updateTodo(todo, { completed: true })
console.log(todo)


/// Pick
// quero que ele pegue do Todo o title e description
// type TodoPreview = {
//  title: string;
//  completed: boolean;
//}
type TodoPreview = Pick<Todo, "title"| "completed">

const todo3 : TodoPreview = {
  title: "Assistir de inglês",
  completed: true,
}

/// Omit
// quero omitir o description
// type TodoPreview2 = {
//  title: string;
//  completed: boolean;
//}
type TodoPreview2 = Omit<Todo, "description">

const todo4 : TodoPreview = {
  title: "Assistir de inglês",
  completed: true,
}
