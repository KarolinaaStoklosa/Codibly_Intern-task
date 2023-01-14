import { fireEvent, render, screen, getByTestId } from '@testing-library/react';
import ItemTable from '../ItemTable';

const itemValues = {
    id: 1, 
    name: 'red', 
    year: 2022, 
    color: '#FF0000', 
    pantone_value: '032 C'
}

describe("ItemTableTests", () => {
    it ("Table row shows correct values", () => {
        const { container } = render(
            <ItemTable 
                item={itemValues} key={1}
            />
        );
        expect(container).toMatchSnapshot();
    
    })

    it('clicking on row shows a modal', ()=> {
        const { getByTestId } = render(
            <ItemTable 
                item={itemValues} key={1}
            />
        );
        fireEvent.click(screen.getByTestId('table-row'))
        const elementAfterClick = screen.getByTestId('modal')
        expect(elementAfterClick).toBeInTheDocument();

    })
    it('modal contains pantone value', ()=> {
        const { getByTestId } = render(
            <ItemTable 
                item={itemValues} key={1}
            />
        );
        fireEvent.click(screen.getByTestId('table-row'))
        const elementAfterClick = screen.getByTestId('modal')
        expect(elementAfterClick).toHaveTextContent(/pantone value/i)
    })

})


