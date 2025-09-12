import { useNavigate,Link} from 'react-router-dom';
import Navbar from './navbar';
const Registration = () => {
  const navigate = useNavigate();

  const handleregister = () => {
    
    navigate("/Login"); 
  };
  return (

    <>
    <Navbar/>
         <div className="register">
            <h2>Register</h2><br />
            <span>Full name </span> <br />
            <input type="text" placeholder="enter Name"/><br /><br />
           <span>Email Address</span> <br />
            <input type="email" placeholder="enter mail"/><br /><br />
            <span>Password</span> <br />
            <input type="password" placeholder="enter password"/>
              <button onClick={handleregister}>register</button>
              <div>
       
        <Link to="/"> Already register Login</Link>
      </div>
    </div>
    </>
  )

}
export default Registration