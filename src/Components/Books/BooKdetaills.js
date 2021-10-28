import { useEffect } from 'react';
import { useParams} from 'react-router';
// import { useHistory } from 'react-router';
import { useState } from 'react';
import { responsivePropType } from 'react-bootstrap/esm/createUtilityClasses';
import './BookDetails.css'


const BooKdetaills =()=> {
    const {id}=useParams();
    console.log(id)
    const[data, setData] = useState([])
    // const history = useHistory();

useEffect(() => {
        fetch("http://localhost:5000/Books/GetById/"+id,{
            method:"GET",
            headers: {"content-Type":"application/json"},
            }).then((res)=>{
                if(!res){
                    throw Error ("Could not fetch the Data")
                }
                return res.json()
            }).then((res)=>{
                console.log(res)
            setData(res[0])
            })
},[])
return (
     <div className="detailes__container">
           <div className="row">
               <div className="col">
                <div className="imgcont">
                 <img className="img" src={data.image} alt="nanana"/>
                </div>
                
               </div>
               
                 <div className="col" id="container_col">
                    <h2> {data.title}</h2>
                    <h3>{data.author}</h3>
                    <p> {data.description}</p>
                    <button id="btn" className="btn btn-success" >{data.price}$</button>
                </div>
           </div>
     </div>
)
}

export default BooKdetaills
