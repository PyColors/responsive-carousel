import React from 'react';
import { shallow } from 'enzyme';
import Loader from './Loader';

describe('<Loader />', () => {
    it('should render an <div> tag', () => {
        const renderedComponent = shallow(<Loader />);
        expect(renderedComponent.type()).toEqual('div');
    });

    it('should have a className attribute', () => {
        const renderedComponent = shallow(<Loader />);
        expect(renderedComponent.prop('className')).toBeDefined();
    }); 
});
