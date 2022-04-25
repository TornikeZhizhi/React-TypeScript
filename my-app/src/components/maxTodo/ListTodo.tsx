import React from 'react';
import TodoModel from '../../models/ModelTodo';

const ListTodo:React.FC<{text:string}> = (props) => {
    return (
        <div>
            {props.text}
        </div>
    );
};

export default ListTodo;