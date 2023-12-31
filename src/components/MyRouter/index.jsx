import React from 'react';
import { useRoutes } from 'react-router-dom';
import ROUTES from './routes';
import Navbar from '../Navbar';
import Footer from '../Footer';

function MyRouter(props) {
    const router = useRoutes(ROUTES)
    return (
        <div>
            <Navbar/>
            {router}
            <Footer/>
        </div>
    );
}

export default MyRouter;