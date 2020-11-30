import React from 'react';

class RefsDemoClassLegacy extends React.Component {
    // older way to create refs
    constructor (props){
        super(props)
        this.textAreaRefTwo = React.createRef();  // 1) Create ref
        this.callbackRef = null;                 // 2) assign calback variable to null  & create callback function 

        this.setCallBackRef = (elem) => {
            this.callbackRef = elem
        
        }
    
    }


    componentDidMount () {
        if (this.callbackRef) {
            console.log(this.textAreaRefTwo.current)
            this.callbackRef.focus()
        
        
        
        }
        
    

    }

    render() {
    
        return (
            <div>
                        {/* the textareea element is implicitly passed as a parameter to callbackRef  */}
                <textarea ref = {this.setCallBackRef} type ="text" placeholder = "Older way to use refs to create focus" />
            
            </div>
        )
    }
}

export default RefsDemoClassLegacy;