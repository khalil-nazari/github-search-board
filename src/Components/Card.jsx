import React, {useContext} from 'react'
import {GithubContext} from '../Context/context'
import styled from 'styled-components'
import {MdBusiness, MdLocationOn, MdLink} from 'react-icons/md'
import Followers from './Followers'; 


// Main function
const Card = () => {

    // Context API Hook
    const {githubUsers} = useContext(GithubContext);
    
    // Githuh User profile information
    const {
        avatar_url, 
        html_url, 
        name, 
        bio, 
        company, 
        blog, 
        location, 
        twitter_username 
    } = githubUsers; 


    //JSX
    return (
        <Wrapper className="container mt-5">
            <div className="row">
                <div className="col-sm-12 col-md-6 p-2 bg-white">
                    <header className="d-flex justify-content-between align-items-center">
                        <img src={avatar_url} className="rounded_image avatar_url" alt=""/>
                        <div>
                            <h4>{name}</h4>
                            <p>@{twitter_username}</p>
                        </div>
                        <div >
                            <a href={html_url} className="outlined_pill_btn">Follow</a>
                        </div>
                    </header>
                    <p>{bio}</p>
                    <div>
                        <p><MdBusiness className="mr-1" /> {company}</p>
                        <p><MdLocationOn className="mr-1" /> {location}</p>
                        <a href={`https://${blog}`} className="text-info"><MdLink className="mr-1 text-primary" />{blog}</a>
                    </div>

                    
                </div>

                <div className="col-sm-12 col-md-6">
                    <Followers />
                </div>
            </div>
        </Wrapper>
    )
}

// Styles of the component 
const Wrapper = styled.section `
    .avatar_url {
        width: 50px; 
        height: 50px; 
    }

    a{
        text-decoration:none;
    }
`; 


// export component 
export default Card
