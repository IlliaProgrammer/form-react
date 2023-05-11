import React from 'react';
import { Link } from 'react-router-dom';
import { HOME_ROUTE, LOGIN_ROUTE } from '../utils/consts';

const NavBar = () => {
    return (
        <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
            <a href="" class="flex items-center">
                <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">WebPage</span>
            </a>
            <div class="flex items-center">
                <Link to={HOME_ROUTE} class="mr-6 text-sm  text-gray-500 dark:text-white hover:underline">Home</Link>
                <Link to={LOGIN_ROUTE} class="mr-6 text-sm  text-gray-500 dark:text-white hover:underline">Login</Link>

            </div>
        </div>
    </nav>
    );
};

export default NavBar;