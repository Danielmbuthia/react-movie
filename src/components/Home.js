import React from "react";
// config
import { POSTER_SIZE,BACKDROP_SIZE,IMAGE_BASE_URL} from "../config";
/// components
import HeroImage from "./HeroImage";
import Grid from "./Grid";
import Thumb from "./Thumb";
import Spinner from "./Spinner";

///hooks
import {useHomeFetch} from "../hooks/useHomeFetch";  /// custom hook
// images
import NoImage from '../images/no_image.jpg';
import SearchBar from "./SearchBar";
import Button from "./Button";


const Home = () =>{
  const {state,loading,error,setSearchTerm,searchTerm,setIsLoadingMore}=useHomeFetch();
  let first_movie = state?.results[0];

    if(error) return <div>Something went wrong.....</div>
 return (
     <>
         {!searchTerm && state?.results[0] ?
            <HeroImage
                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${first_movie?.backdrop_path}`}
                title={first_movie?.original_title}
                text={first_movie?.overview}/> :
             null
         }
         <SearchBar setSearchTerm={setSearchTerm}/>
         <Grid header={searchTerm ? 'Search Result':'Popular Movies'}>
             {state?.results.map(movie =>(
                 <Thumb
                     key={movie?.id}
                     clickable
                     image={movie?.poster_path
                       ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie?.poster_path}`
                         : NoImage
                     }
                     movieId={movie?.id}
                 />
             ))}
         </Grid>
         {loading && <Spinner/>}
         {!loading && state?.page < state?.total_pages && (
             <Button text="Load more " callback={()=>setIsLoadingMore(true)}/>
         )}
     </>
 )
}

export default Home;
