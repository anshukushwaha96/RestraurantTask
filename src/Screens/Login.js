import { useNavigate,Link} from 'react-router-dom';
import Navbar from './navbar';
const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    
    navigate("/Screen1"); 
  };
  return (

    <>
    <Navbar/>
         <div className="login">
            <h2>Login</h2><br />
           <span>Email Address </span> <br />
            <input type="email" placeholder="enter mail"/><br /><br />
            <span>Password</span> <br />
            <input type="password" placeholder="enter password"/>
              <button onClick={handleLogin}>Login</button>
              <div>
       
        <Link to="/registration"> If not registered, please Register</Link>
      </div>
    </div>
    </>
  )
}

export default Login