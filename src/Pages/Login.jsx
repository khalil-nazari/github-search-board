import React from 'react'
import styled from 'styled-components'
import user_login from '../Images/SVG/user_login.svg'; 
function Login() {
    return (
        <div className="container">
            <div className="text-center pt-5">
                <img src={user_login} className="w-50" alt=""/>
                <h1>Github User</h1>
                <button className="btn btn-primary">Login</button>
            </div>
        </div>
    )
}
const Wrapper = styled.div`

    button {
        margin: 0 auto; 
    }
`;
export default Login
// https://youtu.be/dR_Fol8nAzo?list=PLnHJACx3NwAe5XQDk9xLgym7FF8Q4FYW7&t=2011