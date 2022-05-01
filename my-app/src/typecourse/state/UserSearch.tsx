import React, { DragEvent, useState } from 'react';


const users = [
    {name:"sarah",age:20},
    {name:"alex",age:21},
    {name:"nick",age:26},
]


interface Iusers {

    name:string;
    age:number
}


const UserSearch:React.FC = () => {
    const [name,setName] = useState<string>("");
    const [user,setUser] = useState<Iusers>();





    

    const searchHandler = () => {

        const foundUser = users.find((user)=>{
           return user.name === name; 
        });

        setUser(foundUser)
        console.log(user)
        // console.log(foundUser)
    }

   

    return (
        <div>
            <label>Guest Search</label>
            <div>
                {user && user.name}
                {user && user.age}

            </div>
            <br/>
            <input type="text"  value={name} onChange={(e)=>setName(e.target.value)}/>
            <button onClick={searchHandler}>Search Guest</button>

           
        </div>
    );
};

export default UserSearch;