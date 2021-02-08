import React from 'react';
import Nav from '../Nav';
import Banner from '../Banner';
import './HomeScreen.css';
import Row from '../Row';
import requests from '../Request';

export default function HomeScreen() {
    return (
        <div className='homescreen'>
           <Nav /> 
            
           <Banner />

           <Row
             title= 'NETFLIX ORIGINALS'
             fetchUrl= {requests.fetchNetflixOriginals}
             isLargeRow
           />
           <Row
             title= 'Trending Now'
             fetchUrl= {requests.fetchTrending}
           />
           <Row
             title= 'Top Rated'
             fetchUrl= {requests.fetchTopRated}
           />
           <Row
             title= 'Action Movies'
             fetchUrl= {requests.fetchActionMovies}
           />
           <Row
             title= 'Comedy Movies'
             fetchUrl= {requests.fetchComedyMovies}
           />
           <Row
             title= 'Horror Movies'
             fetchUrl= {requests.fetchHorrorMovies}
           />
           <Row
             title= 'Romantic Movies'
             fetchUrl= {requests.fetchRomanceMovies}
           />
           <Row
             title= 'Documentaries'
             fetchUrl= {requests.fetchDocumentaries}
           />

        </div>
    )
}
