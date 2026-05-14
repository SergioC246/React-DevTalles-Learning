import { createBrowserRouter, Navigate } from "react-router";

import { AdminLayout } from "@/admin/layout/AdminLayout";
import { AdminPages } from "@/admin/pages/AdminPages";
import { HeroesLayout } from "@/heroes/layouts/HeroesLayout";
import { HomePage } from "@/heroes/pages/home/HomePage";
import { HeroPage } from "@/heroes/pages/hero/HeroPage";
import { SearchPage } from "@/heroes/pages/search/SearchPage";

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <HeroesLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'heroes/:idSlug',
        element: <HeroPage />
      },
      {
        path: 'search',
        element: <SearchPage />
      },
      {
        path: '*',
        element: <Navigate to='/' />,
      }
    ]
  },

  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminPages />
      },
    ],
  },
]);