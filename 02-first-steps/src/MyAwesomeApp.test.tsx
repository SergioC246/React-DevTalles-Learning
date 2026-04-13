import { describe, expect, test } from "vitest";
import { render, screen } from '@testing-library/react';

import { MyAwesomeApp } from "./MyAwesomeApp";

describe('MyAwesomeApp', () => {
  test('should render firstName and lastName', () => {
    const { container } = render(<MyAwesomeApp />);
    screen.debug();
    // console.log(container.innerHTML);

    const h1 = container.querySelector('h1');
    expect(h1?.innerHTML).toContain('Sergio');
  });
});