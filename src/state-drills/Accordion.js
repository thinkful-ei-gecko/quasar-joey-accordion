import React from 'react';

export default class Accordion extends React.Component{
state ={
    buttonIndex: 0
}
static defaultProps = {
     sections: [
        {
          title: 'Section 1',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
        {
          title: 'Section 2',
          content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
        },
        {
          title: 'Section 3',
          content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
        },
      ]
    }
handleButtonClick(index){
    this.setState({buttonIndex: index})

}
render(){
    
    let sections = this.props.sections.map( (section, index) => {
        return(
            <li><button onClick={()=>{
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
