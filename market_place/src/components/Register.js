import React from 'react'

function Register () {
    function handleSubmit (e) {
        e.preventDefault();
    }

  return (
      <div>
          <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Enter name..." />
              <input type="text" placeholder="Enter location..." />
              <input type="number" placeholder="Enter phone..." />
          </form>
    </div>
  )
}

export default Register