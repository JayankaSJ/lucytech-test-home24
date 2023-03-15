import React from "react";
import { useRoutes } from "react-router-dom";

import IndexLayout from "containers/indexLayout";

const Products = React.lazy(() => import("../pages/products/products"));

export default function ApplicationRouter() {
  const routes = useRoutes([
    {
      element: <IndexLayout />,
      children: [
        {
          path: "/",
          element: <Products />,
        },
      ],
    },
  ]);
  return routes;
}
