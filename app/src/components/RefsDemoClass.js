import React, { Component } from 'react'


class RefsDemoClass extends Component {


    constructor (props) {
        super(props)
        this.textAreaRef = React.createRef(); // 1) Define ref in constructor
    
    }

    submitHandler = () => {
        
        // this demonstrates how to capture the textarea value typed in
        alert(this.textAreaRef.current.value)
    
    }


    componentDidMount () {
        
        // this will display the current property which points to the textarea component
        console.log(this.textAreaRef)

        // 3) Call the focus method
        this.textAreaRef.current.focus()
    
    }


    render() {
        return (
            <div>    {/* 2) Attach ref to textarea element */}
                <textarea type = "text"  ref = {this.textAreaRef}   placeholder = "we want focus here on page load"/>
                <button onClick = {this.submitHandler}>Submit</button>
            </div>



        )
    }
}

export default RefsDemoClass
