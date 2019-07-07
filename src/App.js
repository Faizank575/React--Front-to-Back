import './App.css';
import React,{Component} from 'react';
import Contact from './components/Contact';
import Header from './components/header';

class App extends Component{
render(){
  return(
    <div class="App">
      <Header branding="Contact Manger"/>
      <Contact name="Faizan Khan" email="faizank575@gmail.com" phoneNo="+923015891918"/>
      <Contact name="Hanzla Khan" email="hanzlak575@gmail.com" phoneNo="+923015891918"/>
    </div>
  )
}
}

export default App;
