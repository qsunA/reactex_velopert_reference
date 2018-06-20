import React, { Component } from 'react';
import '../style/TodoListTemplate.css';

const TodoListTemplate = ({form, children,palette}) =>{
    return (
        <main className='todo-list-template'>
            <div className='title'>
                오늘 할 일
            </div>
            <section>
                {palette}
            </section>
            <section className='form-wrapper'>
                {form}
            </section>
            <section className='todos-wrapper'>
                {children}
            </section>
        </main>
    );
}

export default TodoListTemplate;