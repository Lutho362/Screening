import React from 'react'
function Display (props){

  const handleDelete = value =>{
    props.delete(value)
  }
  
  const display = props.pand.filter( det =>{
    if (props.search==""){
      return det
    }else if( det.id.toLowerCase().includes(props.search.toLowerCase())){
      return det
    }}
    ).map((det, index)=>{
   
    if (index >= 1){
      return(
      <div >
        <div className='diply'>
          <h1>{det.name} {det.surname} Details</h1>
          <h3>Screening results</h3>
          <table>
            <tr>
              <td>
                Cough:
              </td> 
              <td>
                {det.cough}
                </td>
            </tr>
            <tr>
              <td>
                Sore Throat:
              </td> 
              <td>
                {det.soreThroat}
                </td>
            </tr>
            <tr>
              <td>
                Shortness in breath:
              </td> 
              <td>
                {det.breath}
                </td>
            </tr>
            <tr>
              <td>
                Fever:
              </td> 
              <td>
                {det.fever}
                </td>
            </tr>
            <tr>
              <td>
                Contact with anyone who might be infected :
              </td> 
              <td>
                {det.contact}
                </td>
            </tr>
            <tr>
              <td>
                Temperature: 
              </td> 
              <td>
                {det.temperature}
                </td>
            </tr>
          </table> 
          <button onClick={()=> {handleDelete(det.id)}}>Delete</button> 
        </div><br /> 
      </div>)
    }
  })
  return(
    <div>
       {display}
    </div>
  )
}
export default Display