import React from 'react'
import './Addpage.css'
import Navbar from '../Navbar'
export const Addpage = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <h1>ADD PRESCRIPTION</h1>
        <div className="details">
          <Detail id={1} name={'Prescription name'} type={'text'} />
          <Detail id={2} name={'For illness'} type={'text'} />
          <Detail id={3} name={'No of doses'} type={'number'} />
        </div>
        <a style={{ marginTop: '2rem' }} href="/medi/dashboard">
          <button type="submit" className="btn">
            ADD PRESCRIPTION
          </button>
        </a>
      </div>
    </>
  )
}

const Detail = (props) => {
  return (
    <>
      <div className="detail">
        <p>{props.name}</p>
        <input id={'input' + props.id} type={props.type} />
      </div>
    </>
  )
}
