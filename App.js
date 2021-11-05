import React from "react";
import Header from './components/header';
import H2 from './components/body2';
import Covid from './components/covid';

function App() {
  return (
    <div className="App">
    { <Header></Header> }
   
    { <H2></H2> }
    { <Covid></Covid> }
   

  </div>
    
  )
}

export default App;