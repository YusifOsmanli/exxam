import React from 'react'
import { Helmet } from "react-helmet";
import Cards from '../components/Cards/Cards';

const Home = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Yuska</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div>
                <Cards/>
            </div>

        </>
    )
}

export default Home