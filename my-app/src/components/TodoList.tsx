import React, { ChangeEvent, useState } from 'react';
import ListItem from './ListItem';


const DUMMY_LIST = [

    {name:"toka",age:"33"},
    {name:"ani",age:"22"},
    {name:"nika",age:"11"},
    {name:"sofo",age:"32"},
    {name:"irakli",age:"55"},

]

interface Task {
    name:string,
    age:number
}

const TodoList = () => {
const [name, setName] = useState<string>("");
const [age, setAge] = useState<number>(0);
const [todo, setTodo] = useState<Task[]>([])

const nameHandler = (event:ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
}
const ageHandler = (event:ChangeEvent<HTMLInputElement>) => {
    setAge(Number(event.target.value))
}



const addList = ():void=>{

    const newList = {name:name,age:age}
    setTodo([...todo,newList])
    setName("")
    setAge(0)

    console.log(todo)
}

    return (
        <div>
            <input type="text" placeholder='name' onChange={nameHandler}/>
            <input type="number" placeholder='age'  onChange={ageHandler} />
            <button onClick={addList}>Add Task</button>
            <div className='listData'>
            {todo.map( (item:Task, key:number)=>{

               return  <ListItem item={item} key={key} />
               
             })} 
            </div>
           
        
        </div>
    );
};

export default TodoList;