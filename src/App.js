import React from 'react';
//importing components from component profile
import Navigation from "./component/Profile/Navigation";
import Content from "./component/Profile/Content";
import About from "./component/Profile/About";
import Contact from "./component/Profile/Contact";
//importing style 
import './styles/Navigation.css';
import './styles/contact.css';
import './styles/content.css';
import './styles/About.css';
function App() {
  return (
    <div className="App">  
      <Navigation />{/*FullName.js*/}
      <Content />{/*ProfilePhoto.js*/}
      <About />{/*aboutsection.js*/}
      <Contact />{/*adress.js*/}
    </div>
  );
}

export default App;
