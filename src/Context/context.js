import React, {useState } from 'react'; 
import mockUser from './mockData.js/mockUser'; 
import mockRepose from './mockData.js/mockRepos'; 
import mockFollowers from './mockData.js/mockFollowers'; 
// import axios from 'axios'; 


// const rootUrl = 'https://api.github.com';


// Provider, Consumer - GithubContext.Provider 
const GithubContext = React.createContext(); 

const GithubProvider = ({ children }) => {

    const [githubUsers, setGethuUsers] = useState(mockUser);
    const [repos, setRepos] = useState(mockRepose);
    const [followers, setFollowers] = useState(mockFollowers);
    

    return (
        <GithubContext.Provider value={{githubUsers, repos, followers}}>{children}</GithubContext.Provider>
    );
}; 


export {
    GithubProvider, 
    GithubContext
}