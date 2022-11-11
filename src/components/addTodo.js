import React from "react";

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddButtonClick = this.handleAddButtonClick.bind(this);
    }

    handleAddButtonClick() {
        const text = document.getElementById('todoInput').value;
        document.getElementById('todoInput').value = '';
        this.props.onAddButtonClick(text);
    }

    render() {
        return (
            <div style={{width: '575px'}}>
                <input type="text" 
                    id="todoInput" 
                    placeholder="Title..."
                    style={{width: '400px'}}>
                </input>

                <button id="addButton" 
                    onClick={this.handleAddButtonClick}
                    style={{width: '100px',height: '40px'}}>
                    Add
                </button>
            </div>
        )
    }
}

export default AddTodo;
