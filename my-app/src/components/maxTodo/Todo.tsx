import React from 'react';
import TodoModel from '../../models/ModelTodo';
import ListTodo from './ListTodo';

const Todo:React.FC<{items:TodoModel[]}> = (props) => {
    return (
        <div>
            {props.items.map(item=>
                
               <ListTodo text={item.text} key={item.id  }/>
                )}
        </div>
    );
};

export default Todo;