
import React , {useState, useEffect, useRef} from 'react';
import './App.css';
// import RefsDemoClass from './components/RefsDemoClass';
// import RefsDemoClassLegacy from './components/RefsDemoClassLegacy';


// refs allow access of DOM nodes directly
// refs persist betwen renders, like state

// refs DO NOT cause component to re-update when it changes
// ref is just an obj with a current property


export default function App () {

    const[name, setName] = useState('')
    const renderCount = useRef(1)

    useEffect( () => {
        renderCount.current = renderCount.current + 1    })


    return (
        <div>
            <input value = {name} onChange = {e => setName(e.target.value)}/>
            <p> Name is : {name}</p>
            <div> render count : {renderCount.current} </div>
        
        
        </div>
    
    )

}

