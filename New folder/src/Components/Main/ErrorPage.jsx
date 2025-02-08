import React from 'react'
import { Link } from 'react-router-dom'
export default function ErrorPage() {
  return (
    <div className='ErrorPage'>
      <h1>ErrorPage 404 Not Found</h1>

      <img src="https://img.freepik.com/premium-vector/concept-404-error-page-flat-cartoon-style-vector-illustration_501813-53.jpg" alt="" />
      <button className='btn btn-outline-info'><Link to="/">Go back</Link></button>

    </div>
  )
}
