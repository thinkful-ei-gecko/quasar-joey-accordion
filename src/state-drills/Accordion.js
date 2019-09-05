import React from 'react';

export default class Accordion extends React.Component{
state ={
    buttonIndex: null
}
static defaultProps = {
     sections: []
    }
handleButtonClick(index){
    this.setState({buttonIndex: index})

}
render(){
    
    let sections = this.props.sections.map( (section, index) => {
        return(
            <li key={index}><button onClick={()=>{
                this.handleButtonClick(index)}}>{section.title}</button>
                {this.state.buttonIndex === index ? (<p>{section.content}</p>):''}
            </li>
        )
    })
    return(<ul>
       {sections}
    </ul> 
    )
}

}
