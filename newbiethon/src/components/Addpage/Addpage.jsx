import React from 'react'
import './Addpage.css'

export const Addpage = () => {
  return (
    <>
            <div className='container'>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
                <h1>ADD PRESCRIPTION</h1>
                <div className='details'>
                    <Detail name ={"Prescription name"} type = {"text"}/>
                    <Detail name = {"For illness"} type={"text"}/>
                    <Detail name = {"No of doses"} type={"number"} />
                </div>
                <button type="submit" className='btn'>ADD PRESCRIPTION</button>
            </div>
            
    </>
  )
}

const Detail = (props)=>{
    return(<>
                <div className='detail'>
                    <p>{props.name}</p>
                    <input type={props.type} />
                </div>
            </>);
}


