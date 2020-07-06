import React from 'react'
import PropTypes from 'prop-types'

const login = (props) => {

    const user = props.user
    const setUser = props.setUser



    return (
        <div>

            <h2>{user.username} logged in</h2>
            <button onClick={() => {
                window.localStorage.removeItem('user');
                setUser(null)

            }} >Logout</button>
        </div>

    )
}

login.propTypes = {

    user: PropTypes.object.isRequired


}


export default login
