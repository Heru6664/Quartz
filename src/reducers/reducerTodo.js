import { ADD_TODO, DEL_TODO } from "../action/actionTodo";

const initialState = {
  todo: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todo: [
          ...state.todo,
          { id: state.todo.length + 1, message: action.payload.data.message }
        ]
      };
    case DEL_TODO:
      const index = state.todo.findIndex(data => {
        return data.id === action.payload.data.id;
      });
      if (index !== -1) {
        return {
          ...state,
          todo: [...state.todo.slice(0, index), ...state.todo.slice(index + 1)]
        };
      }
    default:
      return state;
  }
};
