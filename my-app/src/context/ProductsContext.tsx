
import React, {Component, createContext, useEffect, useState} from "react";
import axios from "axios";

export const ProductsTheme = createContext<any>([]);

interface ThemeProps  {
    children:React.ReactNode;
}

interface PostsProps  {
    userId:number;
    id:number;
    title:string;
}


const ProductsContext = (props:ThemeProps)=> {

    const [posts, setPosts] = useState<PostsProps[]>([]);
    const [isLoading,setIsLoading] = useState<boolean>(true);

    useEffect(()=>{

        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
        
            setPosts(response.data.slice(0,15))
            setIsLoading(false)
        })

    },[])

return(
    <ProductsTheme.Provider value={{posts:posts,isLoading:isLoading}}>
        {props.children}
    </ProductsTheme.Provider>
    )
    
}
export default ProductsContext;



