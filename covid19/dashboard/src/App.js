import SideBar from './Components/SideBar';
import './App.css';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Historique from './Pages/Historique';
import { useCookies } from "react-cookie";
import Login from './Pages/Login';

function App() {
  const [cookies, setCookie] = useCookies();
  const [path, setPath] = useState({ url: 'dashboard' });
  useEffect(() => {
    if( window.location.pathname === '/Admin'  || window.location.pathname === '/Responsable'  ){
      setPath({ url: window.location.pathname })
    }
  }, [])
  
  console.log(cookies.role);

  return (
    <div>
      <Router>
          {path?.url === '/Admin' && <Route exact path="/Admin"  component={Login} />}
          {path?.url === '/Responsable' && <Route exact path="/Responsable"  component={Login} />}
      </Router>
      {cookies?.role === 'Admin' && (
          <Router>
           <div className="App">
                <div className="d-flex align-items-stretch">
                {path?.url === 'dashboard'  && <SideBar /> }
                  <div className="page-holder bg-gray-100">
                    <Route exact path="/" component={Home} />
                    <Route exact path="/manager" component={Manager} />
                    <Route exact path="/commande" component={Commande} />
                    <Route exact path="/vehicule" component={Vehicule} />
                    <Route exact path="/livreur" component={Livreur} />
                    <Route exact path="/reslivraison" component={ResLivraison} />
                    <Route exact path="/historique" component={Historique} />
                    <Route exact path="/prime" component={Prime} /> 
                  </div>
                </div> 
            </div>
          </Router>
      )}


      {cookies?.role === 'Responsable' && (
          <Router>
           <div className="App">
                <div className="d-flex align-items-stretch">
                {path?.url === 'dashboard'  && <SideBar /> }
                  <div className="page-holder bg-gray-100">
                    <Route exact path="/commande" component={Commande} />
                    <Route exact path="/vehicule" component={Vehicule} />
                    <Route exact path="/livreur" component={Livreur} />
                    <Route exact path="/prime" component={Prime} /> 
                  </div>
                </div> 
            </div>
          </Router>
      )}

    </div>
  );
}

export default App;
