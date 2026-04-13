import { useState } from "react";
import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";


export const GifsApp = () => {
  const [previousTerms, setPreviousTerms] = useState(['dragon ball z'])


  return (
    <>
      {/* Header */}
      <CustomHeader
        title="Buscador de Gifs"
        description="Descubre y comparte el Gif perfecto"
      />

      {/* Search */}
      <SearchBar placeholder="Busca lo que quieras" />

      {/* Bíusquedas previas */}
      <PreviousSearches searches={previousTerms} />

      {/* Gifs */}
      <GifList gifs={mockGifs} />
    </>
  );
};
