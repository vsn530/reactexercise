import React from 'react';
import {render,screen} from '@testing-library/react';
import Header from '../../components/Header';


test("should render header component",()=>{
    render(<Header />)
    expect(screen.getByRole('heading')).toHaveTextContent('Users');
})