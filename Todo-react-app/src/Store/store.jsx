import todoSliceReducer from "./todoStateManager";

const store=configureStore({ reducer: todoSliceReducer })
export default store