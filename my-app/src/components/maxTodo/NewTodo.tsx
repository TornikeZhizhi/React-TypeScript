import React,{ useRef } from 'react';


const NewTodo:React.FC<{onAddTodo:(text:string)=>void}> = (props:any) => {

const  inputRef = useRef<HTMLInputElement>(null);


const submitHandler = (event: React.FormEvent) => {
    event.preventDefault() ;
    const enteredText = inputRef.current!.value
    console.log(enteredText)
    if(enteredText.trim().length ===0){

        return;
    } 

    props.onAddTodo(enteredText)
}


    return (
        <form onSubmit={submitHandler}>
            <label>todo text</label>
            <input type="text" ref={inputRef} />
            <button type='submit'>Add Todo</button>
        </form>
    );
};

export default NewTodo;