import React from 'react';
import {Child} from './Child';

const onClickHandler = () =>{

    alert("s")
}

const Parent = () => {
    return (
        <div>

           <Child color="red" clickHandler={onClickHandler} age={3}></Child>
        </div>
    );
};

export default Parent;