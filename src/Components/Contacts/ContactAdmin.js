import del from '../../Assets/delete.png';
import answer from '../../Assets/answer.png'
import axios  from 'axios';
import { useEffect,useState } from 'react';


function ContactAdmin(){

  const[data, setData] = useState([])

  useEffect(()=>{
          axios.get("http://localhost:5000/Contacts/GetAllContact")
          .then(res=>{
                //  console.log(res.data)
                  setData(res.data)
                 
               }
          )
          .catch(err=>console.log(err))
      },[]
  )

console.log(data);
function onDelete(Contact_id){
  axios.delete(`http://localhost:5000/Contacts/DeleteContact/${Contact_id}`, 
  { headers:{
    "x-access-token": localStorage.getItem("token")
  }})
  .then(res => {
      console.log(res);
      console.log(res.data);
    })
    window.location.reload();
}

  const listContact= data.map((data)=>{
    return(
      <tbody>
        <tr>
          
          <td>{data.username}</td>
          <td>{data.email}</td>
          <td>{data.subject}</td>
          <td><img id="img"src= {answer} alt="answer"/></td>
          <td><img id="img" src={del}alt="delete" onClick={() => onDelete(data.id)}/></td>
        </tr>
   

    </tbody>
    )
})

    return(
       
    
    <div class="container__table">
      <h3>Contact Manegment</h3>
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Subject</th>
                <th scope="col">Answer</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
                {listContact}
          </table>
         
    </div>
    

    )
}
export default ContactAdmin;
