import React from 'react';

interface ChildProps {

    color:string;
    age:number;
    clickHandler:()=>void;
    // children:any

}

export const Child = ({color,age,clickHandler}:ChildProps) => {
    return (
        <div>
         i am a {color} color
         <br/>
         i am a {age} age

        <button onClick={clickHandler}>Click me</button>

        </div>
    );
};


export const ChildAsFC:React.FC<ChildProps> = ({color, age,clickHandler,}) => {
    return (
        <div>
         i am a {color} color
         <br/>
         i am a {age} age
        
         <button onClick={clickHandler}>Click me</button>
        </div>
    );
};


// export default Child;