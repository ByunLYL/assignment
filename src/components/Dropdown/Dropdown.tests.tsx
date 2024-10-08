import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Dropdown from './Dropdown';

test('renders the dropdown component', () => {
  const options = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
  ];
  render(<Dropdown options={options} onSelect={() => {}} />);
  const dropdownElement = screen.getByText(/Option 1/i);
  expect(dropdownElement).toBeInTheDocument();
});

test('selects an option', () => {
  const options = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
  ];
  const mockSelect = jest.fn();
  render(<Dropdown options={options} onSelect={mockSelect} />);

  const selectElement = screen.getByText(/Option 1/i);
  userEvent.selectOptions(selectElement, '2');
  expect(mockSelect).toHaveBeenCalledWith('2');
});