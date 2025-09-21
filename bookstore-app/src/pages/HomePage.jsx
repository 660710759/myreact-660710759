import React from 'react';
import {Link} from 'react-router-dom';

import './styles/HomePage.css';

const HomePage = () =>{
    return(
        <div>
            <h1>Welcome to Bookstore</h1>
            <p>This is the home page of the bookstore application</p>
            <p>Explore our collection of books and find your next read!</p>
            <Link to= "/books">Go To Book List</Link>
        </div>
    );
}
export default HomePage;