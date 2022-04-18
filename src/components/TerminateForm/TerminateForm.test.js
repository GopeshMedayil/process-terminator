import { render, screen } from '@testing-library/react';
import TerminateForm from './TerminateForm';
test('renders input field in Terminate form', async () => {

    render(<TerminateForm />);
    const inputElement = await screen.findByPlaceholderText('Enter the port');
    expect(inputElement).toBeInTheDocument();
});
