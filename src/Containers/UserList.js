import React from 'react';
import User from "../Components/User.js";

export default class UserList extends React.Component { 

    render() {
        return(
            <div>
                <ul>
                    {this.props.users.map(user => <User key={user.id} user={user} />)}
                </ul>
            </div>
        )
    }

}