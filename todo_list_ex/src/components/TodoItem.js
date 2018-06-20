import React, {Component} from 'react';
import '../style/TodoItem.css';

class TodoItem extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todos !== nextProps.todos;
    }
    
    render() {
        const {text, checked, id, onToggle, onRemove, color} = this.props;

        return (
            <div className = 'todo-item' onClick = {() =>onToggle(id)}>
                <div className='remove' onClick={(e)=> {
                    e.stopPropagation();
                    onRemove(id)
                }}>&times;
                </div>
                <div className={`todo-text ${checked && 'checked'}`} style={{color}}>
                    <div>{text}</div>
                </div>
                {
                    checked && (<div className=''>✓</div>)
                }
            </div>
        )
    }
}

export default TodoItem;