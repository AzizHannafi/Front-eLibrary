import './BookCard.css'
import BooKdetaills from './BooKdetaills'
import { NavLink } from "react-router-dom";


function BookCard(props){
    console.log(props.object)

    return(

                <div className="books__container" >
                    <div className="card" >
                        <img className="card-img-top" id="imgCard" src={props.object.image} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 class="card-title">{props.object.title}</h5>
                            <NavLink exact  to={"/BookDetails/"+props.object.id}>
                            <button type="submit" id="btn" className="btn btn-primary">
                                {props.object.price}$  
                             </button>
                          </NavLink>
                          

                        </div>
                    </div>
                </div>
            
        
    )
}
export default BookCard;