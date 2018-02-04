import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import Home, {Artists} from './home';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });


describe('Spotify App', () => {

  it('check home', () => {
    const wrapper = shallow(<Home />);
    const browserR = wrapper.find('.container');

    const actual = browserR.length;
    const expected = 1;

    expect(actual).toEqual(expected);
  });

});
