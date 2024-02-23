import { useState } from 'react';
import './Layout.css'
import { data } from './disease'



export const Layout=()=>{


    const [searchValue, setSearchValue] = useState('DISEASE NAME');
    const [desc, setDesc] = useState('');


    const fetchData= ()=>{
        const info = document.querySelector('.search').value;
        data.map((disease)=>{
            if(disease.name === info){
                setSearchValue(disease.name);
                setDesc(disease.description);
            }
        })
    }



   return (
    <>
        <div className='container'>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
            <input type='text' placeholder='&#x1F50E;' className='search'></input>
            <button type='button' className='btn' onClick={fetchData}>SEARCH</button>
            <h1 className='title'> {searchValue}</h1>
            <p>{desc}</p>
        </div>
    </>
   ); 
}