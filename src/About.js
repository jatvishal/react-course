import React from 'react';


class About extends React.Component{//class component
    
    constructor()
    {
        super();
        
    }

    componentDidMount()
    {
        console.warn("props" ,this.props.name)
        // console.warn("did Warn");
    }

    componentDidUpdate()
    {
        console.warn("props in update" ,this.props.name)
        // alert("data name updated");
    }
    render()
    {
        // console.warn("render");
        return (<div>
            <h1>About Us Page</h1>
            <h2>{this.props.name}</h2>
        </div>)
    }
}


export default About;



// constructor(){

// }

// ComponentDidMount(){

// }

// ComponentDidUpdate(){

// }

// ComponentWillUnmount(){

// }
