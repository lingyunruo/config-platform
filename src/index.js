import React from 'react';
import {start} from '../frame';

import model from './model';

import HomePage from './component/HomePage';

start({
    root: document.getElementById('root'),
    component: <HomePage />,
    model: model
});