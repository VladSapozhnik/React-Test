import React, {useState} from "react";
import TodoList from "./Todo/TodoList";
import Context from "./context";
import AddTodo from "./Todo/AddTodo";
import FormValidate from "./Todo/FormValidate";

function App() {
    let [todos, setTodos] = React.useState([
        {id: 1, completed: false, title: 'Купить Хлеб'},
        {id: 2, completed: true, title: 'Купить Масло'},
        {id: 3, completed: false, title: 'Купить Молоко'}
    ])

    function toggleToto(id) {
        setTodos(
            todos = todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            }))
    }

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    function addTodo(title) {
        setTodos(todos.concat([{
            title: title,
            id: Date.now(),
            completed: false
        }]))
    }

    return (
        <Context.Provider value={{removeTodo}}>
            <FormValidate/>
            <div className="wrapper">
                <h1>React</h1>
                <AddTodo onCreate={addTodo}/>
                {todos.length ? <TodoList todos={todos} onToggle={toggleToto}/> : 'No todos' }
            </div>
        </Context.Provider>
    );
}

export default App;
