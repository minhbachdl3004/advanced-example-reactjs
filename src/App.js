import './App.css';
import { NavLink, Outlet, Link } from "react-router-dom";


function App() {
const hooks = ['useCallback', 'useReducer', 'useRef', 'useContext', 'useFetch']


  return (
    <div className="App">
      <h2>Advanced example in React</h2>
      <div className='content-section'>
      <div className='lef-col'>
      {hooks.map((cipher, index)=> (
        <NavLink key={index} to={`/hooks/${cipher}`} style={{textDecoration:'none'}}>
        <h4>{cipher}</h4>
      </NavLink>
      )) 
      }
      </div>
      
 
      <Outlet />
      </div>
      
    </div>
  );
}

export default App;
