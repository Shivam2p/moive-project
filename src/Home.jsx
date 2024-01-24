import React, { useEffect, useState ,useContext } from 'react'
import Banner from './Banner'
import MovieCard from './MovieCard'
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom'
import { SearchContext } from './Search'


const Home = () => {
    let {q,o } = useContext(SearchContext);
    let {setOgData ,ogData} = o ;
    let [movieData, setMovieData] = useState(ogData);
    let [displayData , setDisplayData] = useState([]);
   
    let {query } = q;
    


    // console.log("query from home " , query)

    useEffect(()=>{
        let filteredArray = movieData.filter((obj)=>{
            return obj.title.toLowerCase().includes(query.toLowerCase())
        })
        setDisplayData(filteredArray);
        console.log(filteredArray)
       
    },[query])

    let getData = () => {


        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MzFiYzRhZTQ5YzMwOGFkMDY5OTI3YWJhNDM2MGE1ZiIsInN1YiI6IjY1OWU4NTYxNzEzZWQ0MDE0OGJmNGVkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3EZZZ_ddDRqBKDxzRbW4Tt55z-guDMNMnszBceowQmg'
            }
        };

        fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=4&sort_by=popularity.desc', options)
            .then(response => response.json())
            .then((response)=>{
              
                setMovieData(response.results)
                setDisplayData(response.results)
                setOgData(response.results);
            }).catch(err => console.error(err));
    };

    useEffect(() => {
        getData();
    }, [])

    let myfilter = (logicFunction)=>{
        let filteredArray = movieData.filter(logicFunction)
        setDisplayData(filteredArray);
    }

    let findTopRated = ()=>{
        function abc(obj){
            return obj.vote_average>8;
        }

        myfilter(abc);
    }

    let findLowrated = ()=>{
        function abc(obj){
            return obj.vote_average<6;
        }

        myfilter(abc);
    }

    let findPopular = ()=>{
        function abc(obj){
            return obj.popularity>1000;
        }

        myfilter(abc);
    }

    let findVote = ()=>{
        function abc(obj){
            return obj.vote_count>700;
        }

        myfilter(abc);
    }

    if (movieData.length == 0) {
        return <Shimmer></Shimmer>
    }

    return (
        <div >
            <div className="banner min-h-screen-1/2">
                <Banner></Banner>
            </div>

            <div className="badges my-10 flex flex-row justify-around">
            <button className="btn btn-wide text-4xl h-20" onClick={()=>{setDisplayData(movieData)}}>All</button>
            <button className="btn btn-wide text-4xl h-20"onClick={findTopRated}>Top Rated </button>
            <button className="btn btn-wide text-4xl h-20" onClick={findLowrated}>Low Rated </button>
            <button className="btn btn-wide text-4xl h-20" onClick={findPopular}> Popular</button>
            <button className="btn btn-wide text-4xl h-20" onClick={findVote}>Vote </button>
           
            </div>

            <div className="flex  justify-around flex-wrap min-h-screen-1/2">
                {
                    displayData.map((obj) => {
                        return <MovieCard  key={obj.id} obj={obj}></MovieCard>
                    })

                }
            </div>



        </div>
    )
}

export default Home