import { Link } from "react-router-dom";
import'./Front.css';

function Front(){

return(

    
<div className="home">

    <h1 className="pri"><i>👋 Please Sign Up My Quiz App</i></h1>

<div className="button-container">

<Link to='/home'>
<button className="home-button"><strong>Sign up</strong></button>
</Link>

        </div>
        </div>
    )
}
export default Front;