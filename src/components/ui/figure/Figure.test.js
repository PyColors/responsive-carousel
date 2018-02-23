import React from 'react';
import { shallow } from 'enzyme';
import Figure from './Figure';

describe('<Figure />', () => {
    it('should render an <div> tag', () => {
        const renderedComponent = shallow(<Figure />);
        expect(renderedComponent.type()).toEqual('figure');
    });

    it('should have a className attribute', () => {
        const renderedComponent = shallow(<Figure />);
        expect(renderedComponent.prop('className')).toBeDefined();
    }); 
});
