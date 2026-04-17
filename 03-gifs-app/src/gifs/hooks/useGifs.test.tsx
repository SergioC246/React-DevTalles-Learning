import { renderHook, act } from "@testing-library/react";
import { describe, expect, test, vi, beforeEach } from "vitest";
import { useGifs } from "./useGifs";
import * as gifActions from "../actions/get-gifs-by-query.actions";
import type { Gif } from "../interfaces/gif.interface";

const mockGifs: Gif[] = Array.from({ length: 10 }, (_, i) => ({
  id: `gif-${i}`,
  url: `https://example.com/gif-${i}`,
  width: 480,
  height: 270,
  title: `Goku gif ${i}`,
  images: { original: { url: `https://example.com/gif-${i}.gif` } },
}));

describe("useGifs", () => {
  beforeEach(() => {
    // Reset any previous mocks
    vi.resetAllMocks();
  });

  test("should return default values and methods", () => {
    const { result } = renderHook(() => useGifs());

    expect(result.current.gifs.length).toBe(0);
    expect(result.current.previousTerms.length).toBe(0);
    expect(result.current.handleSearch).toBeDefined();
    expect(result.current.handleTermClicked).toBeDefined();
  });

  test("should return a list of gifs", async () => {
    vi.spyOn(gifActions, "getGifsByQuery").mockResolvedValue(mockGifs);

    const { result } = renderHook(() => useGifs());

    await act(async () => {
      await result.current.handleSearch("goku");
    });

    expect(result.current.gifs.length).toBe(10);
  });

  test("should return a list of gifs when handleTermClicked is called", async () => {
    vi.spyOn(gifActions, "getGifsByQuery").mockResolvedValue(mockGifs);

    const { result } = renderHook(() => useGifs());

    await act(async () => {
      await result.current.handleTermClicked("goku");
    });

    expect(result.current.gifs.length).toBe(10);
  });

  test("should return a list of gifs from cache", async () => {
    vi.spyOn(gifActions, "getGifsByQuery").mockResolvedValue(mockGifs);

    const { result } = renderHook(() => useGifs());

    // First call - populates cache
    await act(async () => {
      await result.current.handleTermClicked("goku");
    });
    expect(result.current.gifs.length).toBe(10);

    // Second call - force real function to fail (should use cache)
    vi.spyOn(gifActions, "getGifsByQuery").mockRejectedValue(
      new Error("This is my custom error")
    );

    await act(async () => {
      await result.current.handleTermClicked("goku");
    });

    expect(result.current.gifs.length).toBe(10); // still from cache
  });

  test("should return no more than 8 previous terms", async () => {
    vi.spyOn(gifActions, "getGifsByQuery").mockResolvedValue([]); // empty is fine here

    const { result } = renderHook(() => useGifs());

    for (let i = 1; i <= 9; i++) {
      await act(async () => {
        await result.current.handleSearch(`goku${i}`);
      });
    }

    expect(result.current.previousTerms.length).toBe(8);
  });
});