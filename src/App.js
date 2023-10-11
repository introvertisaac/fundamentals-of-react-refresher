
import './App.css';
import Lists from './Lists';
import Conditionals from './conditionals';
import States from './states';


 
const Job = (props) => {
  return(
    <>
    <h1>{props.salary}</h1>
    <h1>{props.position}</h1>
    <h1>{props.company}</h1>
    
    </>
    
  );
    
}

function App() {
  return (

    <>
    
    <div className="App">
     
     <Job salary={1000} position="senior dev" company="amazon" />
     <Job salary={252362} position=" dev" company="rubytech" />
     <Job salary={3754} position="swe" company="google" />
     <Job />
  
    </div>

  <Conditionals />
  <Lists />
  <States />
    
    </>
   


  );

  
}

export default App;
