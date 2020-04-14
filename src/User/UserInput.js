import React,{Component} from 'react';

class UserInput extends Component{
    inputStyle = {
        boxShadow : '0 2px 3px green'
    }
    
    render(props){
        
        return (
            <div>
                <input style={this.inputStyle} type="text" onChange={this.props.onChange} value={this.props.username}/>
            </div>
            
        
        )
    }
}

export default UserInput;

