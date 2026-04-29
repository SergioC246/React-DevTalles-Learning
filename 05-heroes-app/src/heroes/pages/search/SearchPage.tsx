import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import { CustomBreadcrums } from "@/components/custom/CustomBreadcrums";

export const SearchPage = () => {
  return (
    <>
      <CustomJumbotron
        title="Búsqueda de SuperHéroes"
        description="Descubre, explora y administra super héroes y villanos"
      />

      <CustomBreadcrums currentPage="Buscador de héroes"
        // breacrumbs={
        //   [
        //     { label: 'Home1', to: "/" },
        //     { label: 'Home2', to: "/" },
        //     { label: 'Home3', to: "/" },
        //   ]
        // }
      />

      {/* Stats Dashboard */}
      <HeroStats />

      <SearchControls />
    </>
  );
};
