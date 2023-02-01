import React, { useState } from 'react';


const Form = (props) => {
    
    const [location,setLocation] = useState({
        lat : '',
        long: ''
      })
    
  

  const formSubmitHandler = (e) => {
        e.preventDefault();
        props.showMap(location);
    
  }

  const latInputChangeHandler = (e) => {
    setLocation({
        ...location,lat:e.target.value
        
    })
    console.log(location)
  }

  const longInputChangeHandler = (e) => {
    setLocation({
        ...location,long:e.target.value
    })
    console.log(location)
  }

    return (
     <form>
        <input type="number" onChange = {latInputChangeHandler} value = {location.lat} name="lat"/>
        <input type="number" onChange = {longInputChangeHandler} value = {location.long} name="long"/>
        <button onClick={formSubmitHandler}> show map </button>
     </form>
    );
  }

export default Form;