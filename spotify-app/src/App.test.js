import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import App, { Home } from './App';
//import Home from './home/home';
import Adapter from 'enzyme-adapter-react-16';
import {
  Route,
  BrowserRouter,
  Link,
} from 'react-router-dom';

configure({ adapter: new Adapter() });


describe('Spotify App', () => {

  it('check browser router', () => {
    const wrapper = shallow(<App />);
    const browserR = wrapper.find(BrowserRouter);

    const actual = browserR.length;
    const expected = 1;

    expect(actual).toEqual(expected);
  });

  it('check Route', () => {
    const wrapper = shallow(<App />);
    const browserR = wrapper.find(BrowserRouter);
    const routes = browserR.find(Route);

    const actual = routes.length;
    const expected = 3;

    expect(actual).toEqual(expected);
  });
});
