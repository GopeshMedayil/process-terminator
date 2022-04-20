import { render, screen } from '@testing-library/react';
import TerminateForm from './TerminateForm';

describe("TerminateForm", () => {

    test('renders input field in Terminate form', async () => {

        render(<TerminateForm />);
        const inputElement = await screen.findByPlaceholderText('Enter the port');
        expect(inputElement).toBeInTheDocument();
    });

    test('renders submit button in Terminate form', async () => {
        render(<TerminateForm />);
        const buttonElement = await screen.findByText('Terminate');
        expect(buttonElement).toBeInTheDocument();

    });
    test('should terminate the port', async () => {
        render(<TerminateForm />);
        let setResult = jest.fn();
        const inputElement = await screen.findByPlaceholderText('Enter the port');
        const buttonElement = await screen.findByText('Terminate');
        inputElement.value = '8080';
        buttonElement.click();
        expect(inputElement.value).toBe('8080');
    });
});