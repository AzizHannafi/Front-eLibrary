import React from 'react'
import { useParams} from 'react-router';
import { useState } from 'react';
import { useEffect } from 'react';


const  BooksFormUpdate =()=> {
  const {id}=useParams();
  console.log(id)
  const[data, setData] = useState([])

  
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
},[]);


  

    return (
      <div className="form__container">
      <div className="col">
              <div className="text-center">                        
                  <h2>UPDATE BOOK</h2>
              </div>
      </div>
    <form>
        <div className="row">
          <div className="col">
          <input type="text" id="inpute" className="form-control" placeholder="Title"  name="title" value={data.title}     required/>
          </div>
          <div className="col">
          <input type="text"  id="inpute" className="form-control" placeholder="Image URL" name="image" value={data.image}  required/>
          </div>
      </div>
      <div className="row">
          <div className="col">
          <input type="text" id="inpute" className="form-control" placeholder="Author" name="author"  value={data.author}  required/>
          </div>
          <div className="col">
          <input type="text" id="inpute" type="number"  min="0" className="form-control" placeholder="Price"  name="price"  value={data.price}  required/>
          </div>
      </div>
      <div className="row">
          <div className="col">
          <textarea type="text" id="inpute" className="form-control" placeholder="Description" name="description" value={data.description}  required/>
          </div>
          
      </div>

      <div className="row">
          <div className="col">
          <button type="submit" id="btn" className="btn btn-success" >Update</button>
          </div>
          <div className="col">
          <button type="reset" id="btn" className="btn btn-danger">Cancel</button>
          </div>
      </div>
     </form>
     </div>
  
    )
}

export default BooksFormUpdate
