import React, {useState, useEffect } from 'react'; 
import mockUser from './mockData.js/mockUser'; 
import mockRepose from './mockData.js/mockRepos'; 
import mockFollowers from './mockData.js/mockFollowers'; 
// import axios from 'axios'; 


const rootUrl = 'https://api.github.com';


// Provider, Consumer - GithubContext.Provider 
const GithubContext = React.createContext(); 

const GithubProvider = ({ children }) => {

    const [githubUsers, setGethuUsers] = useState(mockUser);
    const [repose, setRepose] = useState(mockRepose);
    const [followers, setFollowers] = useState(mockFollowers);
    

    return (
        <GithubContext.Provider value={{githubUsers, repose, followers}}>{children}</GithubContext.Provider>
    );
}; 


export {
    GithubProvider, 
    GithubContext
}