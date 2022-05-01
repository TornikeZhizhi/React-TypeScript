import React, { ChangeEvent, useState } from 'react';
import UserSearch from './UserSearch';



interface Iguest {

    name:string[]
}


const GuestList:React.FC = () => {

    const [name, setName] = useState("");
    const [guest, setGuest] = useState<string[]>([]);


    const guestAddHandler = () => {

        setName("");
        setGuest([...guest,name])

    }


    const guestInputHandler = (e:ChangeEvent<HTMLInputElement>) => {

        console.log(e.target.value)
        setName(e.target.value)
    }

    return (
        <div>
            <UserSearch/>
           <ul style={{maxWidth:"300px",margin:"0 auto"}}> 
            {guest.map((item)=>
                <li key={Math.random()}>
                    {item}
                </li>
             )}
           </ul>

            <input value={name} onChange={guestInputHandler} type="text"/>
            <button onClick={guestAddHandler}>Add Guest</button>
        </div>
        
    );
};

export default GuestList;