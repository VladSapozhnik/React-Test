import React from "react";
import PropTypes from 'prop-types'
import TodoItem from "./TodoItem";

const styles = {
    ul: {
        listStyleType: "none",
        margin: 0,
        padding: 0
    }
}

function TodoList(props) {
    return (
        <ul style={styles.ul}>
            {props.todos.map((todo, index) => {
                return <TodoItem todo={todo} index={index} onChange={props.onToggle} key={todo.id}/>
            })}
        </ul>
    )
}

TodoList.propTypes = {
    todo: PropTypes.arrayOf(PropTypes.object),
    onToggle: PropTypes.func.isRequired,
}

export default TodoList

