import React, {Component} from 'react';
import './User.css';
class UserOutput extends Component{

    render(props){
        return (
            <div>
                <p>Hi this is one text {this.props.username}</p>
                <p>
                    Hi this is another text {this.props.username}
                </p>
            </div>
        );
    }
}

export default UserOutput;