import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ( {setCategories} ) => {

  const [inputValue, setInputValue] = useState('');

  const addHandler = (e) => {
    setInputValue(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    
    if(inputValue.trim().length > 2){
      setCategories(categories => [inputValue, ...categories]);
      setInputValue('');
    }
    console.log('Submit hecho');
  }

  return (
    <form onSubmit={ submitHandler }>
      <input
        type="text"
        value={ inputValue }
        onChange={ addHandler }
      />
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}