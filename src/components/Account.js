import {Link} from 'react-router-dom';

function Account(){
    return(
        <div>
            <p>Account Page</p>
            <Link to="/products">Go to the products page</Link>
        </div>
    )
}

export default Account