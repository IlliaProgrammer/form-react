import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { RoutesArr } from '../routes';

const AppRouter = () => {
    return (
    <div>
        <Routes>
            {RoutesArr.map(({path, Component}) =>
                    <Route key={path} path={path} element={Component}/>
            )}
        </Routes>
    </div>
    
    );
};

export default AppRouter;