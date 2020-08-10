import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';

import './User.css'
const login = (props) => {

    const user = props.user
    const setUser = props.setUser



    return (

        <div id = "user-info-container">

            <h3 id = "user-name">{user.username} logged in</h3>
            <Button id = "logout-btn" variant="contained" color ="primary" onClick={() => {
                window.localStorage.removeItem('user');
                setUser(null)

            }} >Logout</Button>

        </div>

    )
}

login.propTypes = {

    user: PropTypes.object.isRequired


}


export default login
