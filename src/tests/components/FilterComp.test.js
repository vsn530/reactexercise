import React from 'react';
import {render,screen} from '@testing-library/react';
import FilterComp from '../../components/FilterComp';

test("should render Filter comp",()=>{
    render(<FilterComp  />)
    expect(screen.getByText(/Filter/i)).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
})