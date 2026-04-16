import { describe, expect, test } from "vitest";
import { gihpyApi } from "./gihpy.api";

describe('gihpyApi', () => {
  test('should be configured correctly', () => {
    const params = gihpyApi.defaults.params;

    expect(gihpyApi.defaults.baseURL).toBe('https://api.giphy.com/v1/gifs')
    expect(params.lang).toBe('en');
    expect(params.api_key).toBe(import.meta.env.VITE_GIPHY_API_KEY);

    expect(params).toStrictEqual({
      lang: 'en',
      api_key: import.meta.env.VITE_GIPHY_API_KEY,
    });
  });
});