import React, { useState } from 'react';
import TodoModel from '../../models/ModelTodo';
import ListTodo from './ListTodo';
import NewTodo from './NewTodo';

const Todo:React.FC<{items:TodoModel[]}> = (props) => {


    const [todos, setTodo] = useState<TodoModel[]>([])

    const onAddTodo = (text:string) => {
        const newTodo = new TodoModel(text)
        setTodo((prev)=>{

            return prev.concat(newTodo)
        });
        
        console.log(todos)
        
    }


    return (

        <div>
            <NewTodo onAddTodo={onAddTodo}/>
            {props.items.map(item=>
               <ListTodo text={item.text} key={item.text}/>
                )}
        </div>
    );
};

export default Todo;