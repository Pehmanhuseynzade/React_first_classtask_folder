import React from 'react'

function index() {
  return (
    <header style = {{ backgroundColor:"green",width:"100%",height:"100px"}}>
     <form className='d-flex' style={{padding:"35px 45px",gap:"25px"}} >
          <input  type="search"/>
          <button className='btn btn-primary'>Search</button>
     </form>
    </header>
  )
}

export default index
