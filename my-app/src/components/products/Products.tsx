import React ,{useContext} from 'react';
import  {ProductsTheme} from '../../context/ProductsContext';


 interface IProducts {
    title:string;
    id:number

 }   

 let point:{name:string, age:string} = {

    name:"dsads",
    age:"ds"
 }

const Products = () => {
    const {posts,isLoading} = useContext(ProductsTheme);

    console.log(posts)

    if(isLoading){

        return <p>Loading...</p>
    }

    return (
        <div>
            
            {posts.map((item:IProducts)=>
            
            <li key={item.id}>{item.title}</li>
            
            )}
            
        </div>
    );
};

export default Products;