import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas en <GifExpertApp />', () => {

    // test('Debe hacer match con el snapshot', () => {
    //     const { container } = render( <GifExpertApp /> );

    //     expect( container ).toMatchSnapshot();
    // });

    test('Debe comprobar que no se esta creando una categoria repetida', () => {
        render( <GifExpertApp /> );

        const category = 'One Punch';
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: category } } );
        fireEvent.submit( form );

        expect( screen.getAllByText(category).length ).toBe(1);
    });

});