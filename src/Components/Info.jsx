import React, {useContext} from 'react'
import {GithubContext} from '../Context/context'

import {GoRepo, GoGist} from 'react-icons/go'; 
import {FiUser, FiUserPlus} from 'react-icons/fi'
import {AiFillBug} from 'react-icons/ai'
import styled from 'styled-components'

function Info() {
    const { githubUsers } = useContext(GithubContext);
    const { public_repos, followers, following, public_gists } = githubUsers; 

    const items = [
        {
            id: 1,
            value: public_repos, 
            label: 'repos', 
            color: 'green',
            icon : <GoRepo className="icon" />
        }, 
        {
            id: 2,
            value: followers,
            label: 'followers', 
            color: 'red',
            icon: <FiUser className="icon" />
        }, 
        {
            id: 3, 
            value: following, 
            label : 'following', 
            color: 'yellow',
            icon: <FiUserPlus  className="icon"/>
        }, 
        {
            id: 4, 
            value: public_gists, 
            label : 'gists', 
            color: 'pink',
            icon : <GoGist  className="icon"/>
        }
    ]



    return (
        <div className="container mt-4">
            <div className="d-sm-flex justify-content-between align-item-center">
                {items.map(item => {
                    return (
                        <Item key={item.id} {...item}/>
                    )
                })}
            </div>
        </div>
    )
}

const Item = ({id, value, color, label, icon}) => {
    return (
        <ItemInner className="bg-white d-flex align-items-center justify-content-around">
            <span className={`${color}`}>{icon}</span>
            <div className="px-4">
                <h4>{value}</h4>
                <span>{label}</span>
            </div>
        </ItemInner>
    )
}

const ItemInner = styled.div`
    .icon {
        font-size: 2rem;
    }


    .red {
        color: red; 
        background-color: #ffbaba; 
        border-radius: 50%; 
        padding: 5px;
    }

    .green {
        color: green; 
        background-color: #c2ffcb; 
        border-radius: 50%; 
        padding: 5px;
    }


    .pink {
        color: #b500b0; 
        background-color:#ffd9fe;
        border-radius: 50%; 
        padding: 5px;
    }


    .yellow {
        color: #ffea00; 
        background-color: #fff9ba; 
        border-radius: 50%; 
        padding: 5px;
    }
`; 


export default Info
