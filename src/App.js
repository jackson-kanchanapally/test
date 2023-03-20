import { useState } from 'react';
import Header from './componets/Header'
import Footer from './componets/Footer'
import Facts from './componets/Facts';
import UseE from './componets/UseE';
import Tasks from './componets/Task';
import Projects from './componets/Projects';
import Ap from './Ap';
function App(props) {
  const state=0
  return (
    
    <div className="App">
    {/* <h1>heading </h1>
    <Header title="Hello "></Header>
    <Footer/> */}
    {/* <UseE/> */}
    {/* <Projects/> */}
    <Ap/>
    {/* <Tasks ups={state}/> */}
    </div>
  );
}

export default App;
