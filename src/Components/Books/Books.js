import BooksCard from './BookCrad'
import './Books.css'
import axios  from 'axios';
import { useEffect,useState } from 'react';
import { NavLink } from "react-router-dom";



function Books(){
    const[data, setData] = useState([])
    useEffect(()=>{
            axios.get("http://localhost:5000/Books/GetAllBooks/")
            .then(res=>{
                  //  console.log(res.data)
                    setData(res.data)
                 }
            )
            .catch(err=>console.log(err))
        },[]
    )

const listBooks= data.map((data)=>{
    return(
        <BooksCard object={data}/>

    )
})

    return(
        <div className="Books">
           {listBooks}
        </div>
    )
}

export default Books;