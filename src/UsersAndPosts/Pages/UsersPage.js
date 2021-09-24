import React from 'react';
import CreateUsersList from '../UserComponents/UsersList.js';
import getUsers from '../models/UsersModel.js'

class UsersPageComponent extends React.Component {
    constructor () {
        super();
        this.state = {
            error: null,
            isLoaded: false,
            users:[]
        }
    }
    async componentDidMount() { 
        this.setState({
            users: await getUsers()
        })
    }

    render () {
        return (
            <CreateUsersList users={this.state.users}/>
        )
    }
}


export default UsersPageComponent;