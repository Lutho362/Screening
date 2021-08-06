import React, {useState} from 'react'

function Form(props) {

  const [newDetails, setNewDetails] = useState([{
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
  const Adding = values =>{
    props.Add(values)
    setNewDetails({name:'',
    surname:'',
    id:'',
    temperature:'',
    cough: {checked:false},
    soreThroat:false,
    breath:false,
    fever:false,
    contact:false});
  }
  return(
  <form onSubmit= {e=>e.preventDefault()}>
      <h1><span style={{color:'red'}}>Covid-19</span> Screening form</h1>
      <p id="para">Please fill in your personal details </p>
      <label>
        name:<br/>
        <input type='text'
          className='inp'
          placeholder='Your name'
          name='name'
          value= {newDetails.name}
          onChange= { e => setNewDetails({...newDetails, name: e.target.value})}
        /><br />  
      </label><br />

      <label>
        Surname:<br/>
        <input type='text'
          className='inp'
          placeholder='Your surname'
          value= {newDetails.surname}
          onChange= {e=> setNewDetails({...newDetails, surname: e.target.value})}
        /><br />  
      </label><br />

      <label>
        Identity Number:<br/>
        <input type='text'
          className='inp'
          placeholder='Your ID number'
          value= {newDetails.id}
          onChange= {e=> setNewDetails({...newDetails, id: e.target.value})}
        /><br />  
      </label><br />

      <label>
        Temperature:<br/>
        <input type='text'
          className='inp'
          placeholder='Temperature'
          value= {newDetails.temperature}
          onChange= {e=> setNewDetails({...newDetails, temperature: e.target.value})}
        /><br />  
      </label><br />


      <h2>Welcome {newDetails.name} {newDetails.surname}</h2>
      <h3 id='hed3'>Please fill in the following questionnaire</h3>
      <h4>Have you experienced any of the following in the past fourteen days:</h4>
      <label>cough? <br />
        <input 
            type="radio" 
            name="cough"
            value={newDetails.cough}
            onClick={ e => setNewDetails({...newDetails, cough:'Yes'})}
            
            
        /> Yes
      </label><br />
      <label>
        <input 
            type="radio" 
            name="cough"
            value={newDetails.cough}
            onClick={ e => setNewDetails({...newDetails, cough:'No'})}
        /> No
      </label><br /><br />
    
      <label>Sore Throat? <br />
        <input 
            type="radio" 
            name="soreThroat"
            value={newDetails.soreThroat}
            onClick={ e => setNewDetails({...newDetails, soreThroat:'Yes'})}
        /> Yes
      </label><br />
      <label>
        <input 
            type="radio" 
            name="soreThroat"
            value={newDetails.soreThroat}
            onClick={ e => setNewDetails({...newDetails, soreThroat:'No'})}
        /> No
      </label><br /><br />

      <label>New Shortness in breath? <br />
        <input 
            type="radio" 
            name="breath"
            value={newDetails.breath}
            onClick={ e => setNewDetails({...newDetails, breath:'Yes'})}
            
        /> Yes
      </label><br />
      <label>
        <input 
            type="radio" 
            name="breath"
            value={newDetails.breath}
            onClick={ e => setNewDetails({...newDetails, breath:'No'})}
        /> No
      </label><br /><br />

      <label>Fever? <br />
        <input 
            type="radio" 
            name="fever"
            value={newDetails.fever}
            onClick={ e => setNewDetails({...newDetails, fever:'Yes'})}
        /> Yes
      </label><br />
      <label>
        <input 
            type="radio" 
            name="fever"
            value={newDetails.fever}
            onClick={ e => setNewDetails({...newDetails, fever:'No'})}
        /> No
      </label><br /><br />

      <label>Contact with anyone diagnosed with, or being evaluated for COVID-19 <br />
        <input 
            type="radio" 
            name="contact"
            value={newDetails.contact}
            onClick={ e => setNewDetails({...newDetails, contact:'Yes'})}
        /> Yes
      </label><br />
      <label>
        <input 
            type="radio" 
            name="contact"
            value={newDetails.contact}
            onClick={ e => setNewDetails({...newDetails, contact:'No'})}
        /> No
      </label><br /><br />
      
        
      <br /><br />
      <button onClick={()=> {Adding(newDetails)}}>Submit</button>
    </form> 



  )


}
export default Form