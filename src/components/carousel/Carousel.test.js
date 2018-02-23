import React from 'react';
import { shallow } from 'enzyme';
import Carousel from './Carousel';

describe('<Carousel />', () => {
    it('should render an <div> tag', () => {
        const renderedComponent = shallow(<Carousel />);
        expect(renderedComponent.type()).toEqual('section');
    });
});
