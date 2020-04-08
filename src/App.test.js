import React from 'react';
import { render } from '@testing-library/react';
import {shallow} from 'enzyme';
import App from './App';

it('renders app', () => {
    console.log(shallow(<App/>))
});
