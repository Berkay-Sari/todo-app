import React from 'react';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeletButtonClick = this.handleDeletButtonClick.bind(this)
    }

    handleDeletButtonClick() {
        this.props.onDeleteButtonClick(this.props.value);
    }
    
    render() {
        return (
            <li>
                {this.props.value}
                <span>
                        &emsp;
                </span>
                <button id="deleteButton" onClick={this.handleDeletButtonClick}> Delete
                </button>
            </li>
        );
    }    
}

export default Todo;