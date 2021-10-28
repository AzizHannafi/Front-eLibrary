import edit from '../../Assets/edit.png';
import del from '../../Assets/delete.png';
import './BooksAdmin.css'
import axios  from 'axios';
import { useEffect,useState } from 'react';
import { NavLink } from "react-router-dom";
import BooksFormUpdate from './BooksFormUpdate';

function BooksAdmin(){
  const[data, setData] = useState([])

  useEffect(()=>{
          axios.get("http://localhost:5000/Books/GetAllBooks/",{
                    headers:{
                        "x-access-token": localStorage.getItem("token")
                    }
                })
          .then(res=>{
                //  console.log(res.data)
                  setData(res.data)
                 
               }
          )
          .catch(err=>console.log(err))
      },[]
  )

  function onDelete(Contact_id){
    axios.delete(`http://localhost:5000/Books/DeleteBook/${Contact_id}`, 
        { headers:{
          "x-access-token": localStorage.getItem("token")
         }})
    .then(res => {
        console.log(res);
        console.log(res.data);
      })
      window.location.reload();
  }
  
function updateBook(id){
  return(
    <BooksFormUpdate id={id}/>
  )
}


  const listBooks= data.map((data)=>{
    return(
      <tbody>
      <tr>
        <td>{data.title}</td>
        <td>{data.author}</td>
        <td>{data.price}$</td>
        <td>
            <NavLink exact  to={"/Admin/EditBook/"+data.id}>
              <img id="img" src={edit} alt="edit" />
            </NavLink>
        </td>
        <td><img id="img" src={del}alt="delete"  onClick={() => onDelete(data.id)}/></td>
      </tr>
    </tbody>
    )
  })

    return(
        <div className="table-responsive">
         
          <div className="container__table">
          <h3>Books Manegment</h3>
              <table className="table">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Title</th>
                      <th scope="col">Author</th>
                      <th scope="col">Price</th>
                      <th scope="col">Edit</th>
                      <th scope="col">Delete</th>
                    </tr>
                  </thead>
                    {listBooks}
                </table>
                <div className="text-center">
                  <button type="submit" id="btnSubmit" class="btn btn-start-order"  >
                  
                    <NavLink id="linkAdd" exact activeClassName="active" to="/Admin/AddBook">Add Books</NavLink>
                  </button>
              </div>
          </div>
      </div>
    )
}
export default BooksAdmin;