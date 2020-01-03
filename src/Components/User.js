import React from 'react';
import { Link } from 'react-router-dom';

export default class User extends React.Component{

    render() {
        return (
            <p class="container border rounded p-3 mb-2 bg-white text-dark lead" >
                <Link to={`/users/${this.props.user.id}`}> {this.props.user.name} </Link>
            </p>
        )
    }

}