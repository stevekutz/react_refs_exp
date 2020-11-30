
import React from 'react';
import './App.css';
import RefsDemoClass from './components/RefsDemoClass';

// refs allow access of DOM nodes directly

class App extends React.Component {



    render () {
        return (
        

            // 2) attach ref to element    
            <div className  = "App">
                <RefsDemoClass />
            
            </div>
        
        )
    
    }

}

export default App;
