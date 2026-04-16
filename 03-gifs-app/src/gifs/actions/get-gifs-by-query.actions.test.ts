import { beforeEach, describe, expect, test, vi } from "vitest";
import AxiosMockAdapter from 'axios-mock-adapter';

import { getGifsByQuery } from "./get-gifs-by-query.actions";
import { gihpyApi } from "../api/gihpy.api";

import { giphySearchResponseMock } from './../../../test/mocks/giphy.response.data';

describe('getGifsByQuery', () => {
  let mock = new AxiosMockAdapter(gihpyApi);

  beforeEach(() => {
    mock.reset();
    mock = new AxiosMockAdapter(gihpyApi);
  });

  // test('should return a list of gifs', async() => {
  //   const gifs = await getGifsByQuery('goku');
  //   const [gif1] = gifs;

  //   expect(gifs.length).toBe(10);

  //   expect(gif1).toStrictEqual({
  //     id: expect.any(String),
  //     height: expect.any(Number),
  //     width: expect.any(Number),
  //     title: expect.any(String),
  //     url: expect.any(String),
  //   });  
  // });

  test('should return a list of gifs', async () => {
    mock.onGet('/search').reply(200, giphySearchResponseMock);

    const gifs = await getGifsByQuery('goku');

    expect(gifs.length).toBe(10);

    gifs.forEach((gif) => {
      expect( typeof gif.id ).toBe('string');
      expect( typeof gif.title ).toBe('string');
      expect( typeof gif.url ).toBe('string');
      expect( typeof gif.width ).toBe('number');
      expect( typeof gif.height ).toBe('number');
    });
  });

  test('should return an empty list of gifs if query is empty', async () => {
    mock.restore();

    const gifs = await getGifsByQuery('');

    expect(gifs.length).toBe(0);
  });

  test('should handle error when the API return an error', async () => {
    const consoleErrorSpy = vi
      .spyOn(console, 'error')
      .mockImplementation( () => {});

    mock.onGet('/search').reply(400, {
      data: {
        message: 'Bad Request',
      },
    });

    const gifs = await getGifsByQuery('goku');

    expect(gifs.length).toBe(0);
    expect(consoleErrorSpy).toHaveBeenCalled();
    expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
  });
});