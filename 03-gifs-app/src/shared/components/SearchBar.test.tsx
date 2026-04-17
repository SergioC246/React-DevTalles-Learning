import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { SearchBar } from "./SearchBar";


describe('SearchBar', () => {

  test('should render searchbar correctly', () => {
    const { container } = render(
      <SearchBar
        placeholder="Buscar"
        onQuery={() => { }}
      />
    );

    expect(container).toMatchSnapshot();
    expect(screen.getByRole('textbox')).toBeDefined();
    expect(screen.getByRole('button')).toBeDefined();
  });

  test('should call onQuery with the correct value after 700ms', async () => {
    const onQuery = vi.fn();
    render(<SearchBar placeholder="Buscar" onQuery={onQuery} />)

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test' } });

    await waitFor(() => {
      expect(onQuery).toHaveBeenCalled()
      expect(onQuery).toHaveBeenCalledWith('test');
    });
  });

  test('should call only once with the last value (debounce)', async () => {
    const onQuery = vi.fn();
    render(<SearchBar placeholder="Buscar" onQuery={onQuery} />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 't' } });

    await waitFor(() => {
      expect(onQuery).toHaveBeenCalledWith('t');
      expect(onQuery).toHaveBeenCalledTimes(1);
    });
  });

  test('should call onQueary when button clicked with the input value', () => {
    const onQuery = vi.fn();
    render(<SearchBar placeholder="Buscar" onQuery={onQuery} />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 't' } });

    const button = screen.getByRole('textbox');
    fireEvent.click(button)

    expect(onQuery).toHaveBeenCalledTimes(1);
    expect(onQuery).toHaveBeenCalledWith('t');
  });

  test('should the input has the correct placeholder value', () => {
    const value = 'Buscar gif';
    render(<SearchBar onQuery={() => { }} placeholder={value} />);

    expect(screen.getByPlaceholderText(value)).toBeDefined();
  });
});