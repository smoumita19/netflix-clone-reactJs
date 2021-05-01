import React from 'react';
import Nav from '../NavComponent/Nav';
import Banner from '../BannerComponent/Banner';
import requests from '../../Requests';
import Row from '../RowComponent/Row';

function HomeScreen() {
    return (
        <div>
            {/* Nav */}
            <Nav />

            {/* Banner */}
            <Banner />

            {/* Row */}
            <Row title="Netflix Originals"
                 fetchUrl={requests.fetchNetflixOriginals}
                 isLargeRow
            />
            <Row title="Trending"
                 fetchUrl={requests.fetchTrending}
            />
            <Row title="Top Rated"
                 fetchUrl={requests.fetchTrending}
            />
            <Row title="Action Movies"
                 fetchUrl={requests.fetchActionMovies}
            />
            <Row title="Comedy Movies"
                 fetchUrl={requests.fetchComedyMovies}
            />
            <Row title="Horror Movie"
                 fetchUrl={requests.fetchHorrorMovies}
            />
            <Row title="Romance Movie"
                 fetchUrl={requests.fetchRomanceMovies}
            />
            <Row title="Documentaries"
                 fetchUrl={requests.fetchDocumentaries}
            />


        </div>
    )
}

export default HomeScreen;
