import React from "react";
import AddTodo from "./addTodo";
import TodoList from "./todoList";

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: []
        }
    
        this.handleAddButtonClick = this.handleAddButtonClick.bind(this);
        this.handleDeleteButtonClick = this.handleDeleteButtonClick.bind(this);
    }

    handleAddButtonClick(todoText) {
        if(this.state.todoList.includes(todoText)) {
            alert(todoText + " is already in To Do list");
            return;
        }
        const todoList = this.state.todoList.concat(todoText);
        this.setState({
            todoList: todoList
        });
    }

    handleDeleteButtonClick(todoText) {
        const todoList = this.state.todoList;
        todoList.splice(todoList.indexOf(todoText), 1);
        this.setState({
            todoList: todoList
        });
    }

    render() {
        return (
            <div>      
                <p>
                    To Do List
                </p> 
                <AddTodo
                    onAddButtonClick={this.handleAddButtonClick}
                />

                <TodoList todoList={this.state.todoList}
                    onDeleteButtonClick={this.handleDeleteButtonClick}
                />
            </div>
        )
    }  
}

export default TodoApp;