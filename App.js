import About from './About';
import   './App.css';
import Navbar from './Navbar';
import Text from './Text';
import React, { useState } from 'react';
import Alert from './Alert';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {


  const [alert, setAlert] = useState(null);

  const showAlert=(Message,type)=>{
    setAlert({
      msg:Message,
      type:type
  
    })
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  }

  const [mode, setModehai] = useState('light');

  const toggleMode=()=>{
if(mode==='dark'){
  setModehai('light');
  document.body.style.backgroundColor='white';
  showAlert("Light  Mode has been Enabled","Success")
  document.title="Light Mode Enabled"
  setInterval(() => {
    document.title="TextUtil is Amazing"
  }, 2000);
  setInterval(() => {
    document.title="Install TextUtil Now "
  }, 4000);
}
else{
setModehai('dark')
document.body.style.backgroundColor='#042743';
showAlert("Dark Mode has been Enabled","Success")
document.title="Dark Mode Enabled"

}
  }
  return (
    <>
       <Router>
        <Navbar   mode={mode} title="Textutils" About="AboutUs" toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3" >
        <Routes>
          <Route exact path='/about' element={ <About />}>
            </Route>
          <Route exact path='/text' element={<Text showAlert={showAlert} heading="Enter the text to analyze below-"  mode={mode}/>}> 

          </Route>
          
        </Routes>
        </div>
      </Router> 
{/* <div className='container'>
<Navbar  title="Textutils" About="AboutUs" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} /> 
    <BrowserRouter>
<Routes>
          <Route path="/about" element={<about />} />
          
          < Route path="/"
            element= {<Text heading="Enter the text to analyse: " mode={mode}/>} /> 
          </Routes>
          </BrowserRouter>
          
    </div> */}
     {/* <Text showAlert={showAlert} Heading="Enter Text Here" mode={mode} /> */}
     {/* <About/> */}
     

  </>

  );
}

export default App;
