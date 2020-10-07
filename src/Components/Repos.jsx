import React, {useContext} from 'react'
import { GithubContext } from '../Context/context'
import ExampleChart from '../Components/Charts/ExampleChart'

import {Bar, Column, Doughnut, Pie} from '../Components/Charts'

function Repos() {
    const {repos} = useContext(GithubContext); 
    
    const languages = repos.reduce((total, item) => {
        const {language, stargazers_count} = item; 
        if(!language) return total; 
        
        if(!total[language]) {
            total[language] = {label:language, value:1, stars:stargazers_count}
        } else {
            total[language] = {
                ...total[language], 
                value: total[language].value +1, 
                stars: total[language].stars + stargazers_count, 
            }
        }

        return total; 
    }, {}); 

    const mostUsed = Object.values(languages)
    .sort((a, b) => {
        return b.value - a.value;
    })
    .slice(0,5); 

    // Most stars per language 
    const mostPopular = Object.values(languages)
    .sort((a, b) => {
        return b.starts - a.starts;
    })
    .map((item) => {
        return {...item, value:item.stars}
    }).slice(0.5)


    // stars & forks 
    let {stars, forks} = repos.reduce((total, item) => {
        const {stargazers_count, name, forks} = item; 

        total.stars[stargazers_count] = {label: name, value: stargazers_count }
        total.forks[forks] = {label:name, value:forks}
        return total; 
    }, {
        stars: {}, 
        forks: {}
    })

    stars = Object.values(stars).slice(-5).reverse();
    forks = Object.values(forks).slice(-5).reverse();
    console.log(forks)


    return (
        <div className="container  mt-4">
            <div className="row">
                <div className="col-md-12 col-lg-4">
                    <div className="mb-2">
                        <Pie data={mostUsed}/>
                    </div>
                    <div className="mb-2">
                        <Doughnut data={mostPopular}/>
                    </div>
                </div>
                <div className="col-md-12 col-lg-8">
                    <div className="mb-2">
                        <Column data={stars}/>
                    </div>
                    <div className="mb-2">
                        <Bar data={forks}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Repos
