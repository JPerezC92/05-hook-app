const AGREGAR = "AGREGAR";
const initialState = [{ id: 1, todo: "Comprar pan", done: false }];

const todoReducer = (state = initialState, action) => {
  switch (action?.type) {
    case AGREGAR:
      return (state = [...state, action.payload]);
    default:
      return state;
  }
};

let todos = todoReducer();

const newTodo = { id: 2, todo: "Comprar leche", done: false };

const agregarTodoAction = {
  type: AGREGAR,
  payload: newTodo,
};

todos = todoReducer(todos, agregarTodoAction);

console.log(todos);
