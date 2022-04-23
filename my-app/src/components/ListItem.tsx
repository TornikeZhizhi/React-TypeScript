import React from 'react';


interface Task {
    name:string,
    age:number
}
interface Props {
    item:Task
}


const ListItem = ({item}:Props) => {
    return (
        <div>
            {item.name} - {item.age}
        </div>
    );
};

export default ListItem;