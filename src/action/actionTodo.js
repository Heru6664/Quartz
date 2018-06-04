export const ADD_TODO = "ADD_TODO";
export const DEL_TODO = "DEL_TODO";

export const AddTodo = data => ({
  type: ADD_TODO,
  payload: {
    data
  }
});

export const delTodo = data => ({
  type: DEL_TODO,
  payload: {
    data
  }
});
