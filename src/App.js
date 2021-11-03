import Crud from "./Components/Crud";
import Register from "./Components/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Components/Home";
import { useEffect } from "react";
import Dashboard from "./Components/Dashboard";
import { useState } from "react";
import { confirm } from "react-confirm-box";
 
function App() {
  const [statuscomponent, setstatuscomponent] = useState(<Home />)
  const [loginlogout, setloginlogout] = useState( <Link to="/login"  style={{color:"white",textDecoration:"none",fontSize:"26px"}}>Login</Link>)
  const logout=async()=>{
    const status=await confirm("Sure want to logout")
    if (status) {
      
      localStorage.removeItem("user");
    window.location.replace('/');
    } 
    
  }
  useEffect(() => {
    if(localStorage.getItem("user")==undefined){
      setstatuscomponent(<Home />)
      setloginlogout( <Link to="/login"  style={{color:"white",textDecoration:"none",fontSize:"26px"}}>Login</Link>)
    }
    else{
      setstatuscomponent(<Dashboard />)
      setloginlogout( <a    style={{color:"white",textDecoration:"none",fontSize:"26px",cursor:"pointer"}} onClick={()=>logout() }>Logout</a>)
    }
  }, [])
  return (
    <div className="App">

     <Router>
      <div>
        
          <div style={{direction:"flex",justifyContent:"center",padding:"20px",backgroundColor:"blue",color:"white"}}>
            
              <Link to="/"  style={{color:"white",textDecoration:"none",fontSize:"26px"}}>Home</Link>
             {loginlogout}
              <Link to="/register" style={{color:"white",textDecoration:"none",fontSize:"26px"}}>Register</Link>
                     </div>
        

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Crud />
          </Route>
          <Route path="/">
            {statuscomponent}
          </Route>
        </Switch>
      </div>
    </Router>
     </div>
  );
}

export default App;
