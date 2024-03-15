
const allTodo = [
    {
        id: 0,
        title: "Buy groceries",
        description: "Milk, eggs, bread, and fruits",
        date: "",
        completed: false,
    },
    {
        id: 1,
        title: "Finish report",
        description:
            "Complete the sales report for Q1 Complete the sales report for Q1 Complete the sales report for Q1",
        date: "",
        completed: false,
    },
    {
        id: 2,
        title: "Call mom",
        description: "Wish her a happy birthday",
        date: "",
        completed: false,
    },
    {
        id: 3,
        title: "Go to the gym",
        description: "Do cardio and strength training",
        date: "",
        completed: false,
    },
];

const todoSlice = createSlice({
    name: "todo state",
    initialState: allTodo,
    reducers: {
        addTodo(state, action) {
            state = [...state, action.payload];
        },
        deleteTodo(state, action) {

        }
    }
})

export const todoSliceActions=todoSlice.actions
const todoSliceReducer=todoSlice.reducer
export default todoSliceReducer