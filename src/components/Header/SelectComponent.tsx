import React from 'react'
import './index.scss'

const SelectComponent = () => {

  return (
    <div className="selectdiv">
      <label>
        <select>
          <option value={"select box"}> Select Box </option>
          <option value={"option1"}>Option 1</option>
          <option value={"option2"}>Option 2</option>
          <option value={"option3"}>Last long option</option>
        </select>
      </label>
    </div>
  )
}

export default SelectComponent