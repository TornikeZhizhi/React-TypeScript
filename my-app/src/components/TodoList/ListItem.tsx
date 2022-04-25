import React from 'react';
import { ITask } from '../../interfaces/Interface';

// interface Task {
//     name:string,
//     age:number
// }


let age : {

    name:string,
    age:number
};

age = {
  
    name:"24fsdf",
    age:3,
  
}
let name:string | number;

name = 232;



// type allias

type Person = {
    name:string,
    age:number
}

let person : Person

person = {
    name:"da",
    age:2
}





interface Props {
    item:ITask,
    deleteList(listName:string):void,
}
// interface Props {
//     item:{name:string,age:number}
// }


const ListItem = ({item, deleteList}:Props) => {
    return (
        <>
        <div>
            
            {item.name} - {item.age}
        </div>
        <div>
            <button onClick={()=>deleteList(item.name)}>X</button>
        </div>
        </>
    );
};

export default ListItem;