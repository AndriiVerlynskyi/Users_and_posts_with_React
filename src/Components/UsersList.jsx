import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {fetchUsers} from '../Redux/actions/fetchUsers'
import LoadingBlock from './LoadingBlock';
import UserCard from './UserCard';

const UsersList = ({ usersData, fetchUsers }) => {
    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <div className="all-users-container">
            { usersData.isLoading ? (<LoadingBlock/>):
                !!usersData.error ? (<h1>{usersData.error}</h1>):
                usersData.users.map(user => {
                            return <UserCard user={user} key={user.id}/>
                })
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        usersData: state.usersData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersList)