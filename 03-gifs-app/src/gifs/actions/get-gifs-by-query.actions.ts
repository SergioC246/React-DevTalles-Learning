import type { GihpyResponse } from '../interfaces/giphy.respose';
import type { Gif } from '../interfaces/gif.interface';
import { gihpyApi } from '../api/gihpy.api';

export const getGifsByQuery = async(query: string): Promise<Gif[]> => {
  if(query.trim().length === 0) {
    return [];
  }

  try {
    const response = await gihpyApi<GihpyResponse>('/search', {
      params: {
        q:query,
        limit:10,         
      },
    });
  
    return response.data.data.map((gif) => ({
      id: gif.id,
      title: gif.title,
      url: gif.images.original.url,
      width: Number(gif.images.original.width),
      height: Number(gif.images.original.height),
    }));    
  } catch (error) {
    console.error(error);
    return [];    
  }
};