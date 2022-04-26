import React from 'react';

interface ChildProps {

    color:string;
    age:number;    

}

export const Child = ({color,age}:ChildProps) => {
    return (
        <div>
         i am a {color} color
         <br/>
         i am a {age} age
        </div>
    );
};


export const ChildAsFC:React.FC<ChildProps> = ({color}) => {
    return (
        <div>
         i am a {color} color
        </div>
    );
};


// export default Child;