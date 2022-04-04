import {render} from "@testing-library/react";
import Counter from "./Counter";

it('Description=  defaultCount=0', () => {
    const {getByText} = render(<Counter description='My Component' defaultCount={0}/>);
    expect(getByText('Current Count: 0')).toBeInTheDocument();
    expect(getByText(/My Component/i)).toBeInTheDocument();
});
