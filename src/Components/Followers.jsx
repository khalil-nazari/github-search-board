import React,{useContext} from 'react'
import styled from 'styled-components'
import {GithubContext} from '../Context/context'

const Followers = () => {
    const {followers} = useContext(GithubContext)
   
    return (
        <Wrapper className="p-2 followers_12">
            {followers.map((follower, index) => {
                const { avatar_url: img, html_url, login } = follower; 
                return (
                    <article key={index} className="d-flex mb-3">
                        <img src={img} alt={login} className="avatar_img mr-3"/>
                        <div>
                            <h5>{login}</h5>
                            <a href={html_url} className="text-secondary">{html_url}</a>
                        </div>
                        
                    </article>
                )
            })}
        </Wrapper>
    )
}


// Styled component
const Wrapper = styled.div`
    background-color:white; 
    height: 300px;
    overflow: auto;  

    .avatar_img {
        width:60px; 
        height: 60px; 
    }
`;
export default Followers
