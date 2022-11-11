import React from 'react';
import Todo from './todo';

class TodoList extends React.Component {
    render()  {
        const rows = [];
        this.props.todoList.forEach((todo, index) => {
            rows.push(
                <Todo value={todo} key={index} 
                onDeleteButtonClick={this.props.onDeleteButtonClick}/>
            );
        }); 
        return (
            <ul>{rows}</ul>
        )
    }   
}

export default TodoList;