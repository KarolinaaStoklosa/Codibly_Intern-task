import { render } from '@testing-library/react';
import HomePage from '../HomePage';


describe("HomePageTests", () => {
    it ("Table contains year and doesn't contain pantone", () => {
        const { container } = render(
            <HomePage />
        );
        expect(container).toHaveTextContent(/year/i);
        expect(container).not.toHaveTextContent(/pantone/i);
    })


})


