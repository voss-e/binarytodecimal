import React, { useState } from 'react'

function Converter() {


    const [binary, setBinary] = useState('')
    const [decimal, setDecimal] = useState('')
    const [error, setError] = useState('')


    const onSubmit = (e) => {
      e.preventDefault()

      if(binary.match(/^[0-1]+$/g) === null) {
        setError('Enter 0 or 1')
        return
      }
      setError('')

      const result = () => {
        return parseInt(binary, 2)
      }
      setDecimal(result)
    }

    return (
      <div className="container">
        <h1 className="header">Binary To Decimal</h1>
        <div className="card">
          <div className="form-container">
            <form onClick={onSubmit}>
              <input className="binary-input" type="text" name="binary" placeholder="0 1" value={binary} onChange={(e) => setBinary(e.target.value)} autocomplete="off"/>
              <button type="submit" className="submit-button">Convert</button>
              <input className="decimal-input" type="text" name="decimal" disabled value={decimal}/>
            </form>
          </div>
        </div>
      </div>
    )
  }

export default Converter
