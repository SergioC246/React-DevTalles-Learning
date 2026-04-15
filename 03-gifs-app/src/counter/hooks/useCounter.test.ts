import { describe, expect, test } from "vitest";
import { useCounter } from "./useCounter";
import { renderHook } from "@testing-library/react";

describe('useCounter', () => {
  test('should initialize with default value of 10', () =>{
    const { result } = renderHook(()=> useCounter());

    expect(result.current.counter).toBe(10);
  });

  test('should increment counter when handleAdd is called', () => {

    const { result } = renderHook(()=> useCounter());

    result.current.handleAdd();

    expect(result.current.counter).toBe(11);
  })
});