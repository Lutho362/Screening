import React, {useState} from "react";
import "./style.css";
import Display from './Components/Display'
import Form from './Components/Form'


function App() {
  const [details, setDetails] = useState([{
    name:'',
    surname:'',
    id:'',
    temperature:'',
    cough: false,
    soreThroat:false,
    breath:false,
    fever:false,
    contact:false
  }])
  const [search, setSearch] = useState('')
  const Adding = load =>{  
    let newArr = [...details , load];
    setDetails(newArr);
  } 

  const handleDelete = ind => {
    setDetails(details.filter(item => item.id !== ind))
    console.log(ind)
  }

  
  return (
    <div className='big'>
      <div className='first'>
        <Form Add={Adding}/>
      </div>

      <div className='second'>
        <input type = 'text' placeholder='Search...' name='search' value= {search} onChange={e => setSearch(e.target.value)} />
        <div className="zekethe">
        <h2>Your details will be shown here</h2>
          <Display pand={details} delete={handleDelete} search={search}  />     
        </div>    
      </div>
    </div>

    
  );
}
export default App
