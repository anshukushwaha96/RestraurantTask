import { ImSpoonKnife } from "react-icons/im";
import { useNavigate} from 'react-router-dom';
const Screen1 = () => {
     const navigate = useNavigate();
    const menu = () => {
    
    navigate("/Screen2"); 
  };
    return (
        
        <>
            <div className="navbar1">
                <li style={{ marginRight: "-20px" }}><ImSpoonKnife /></li>
                <li>Food's Restaurant</li>

            </div>
            <div className="navcontent">
                <div>
                    <h1>Welcome to Food's <br />Kitchen</h1>
                    <button onClick={menu}> GO TO MENU</button>
                    
                </div>
            </div>
        </>
    )
}
export default Screen1