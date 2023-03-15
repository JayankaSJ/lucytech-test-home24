import React from "react";
import { act, screen, waitFor } from "@testing-library/react";
import { renderWithProviders } from "tests/test-utils";
import { cloneDeep } from "lodash";
import { CategorySliceState } from "reducers/categories.reducer";
import Products from "pages/products/products";
import { ArticlesSliceState } from "reducers/articles.reducer";
import { RootState } from "store";

const categoryInitialState = {
  name: "test category",
  articleCount: 10,
  childrenCategories: [
    {
      name: "test-name",
      urlPath: "path",
    },
  ],
  isLoading: false,
} as CategorySliceState;

const articlesInitialState = {
  items: [
    {
      name: "Topper Dream Star",
      variantName: "180 x 200cm",
      prices: {
        currency: "EUR",
        regular: {
          value: 65900,
        },
      },
      images: [
        {
          path: "https://cdn1.home24.net/images/media/catalog/product/200x200/png/-/1/-1000347266-220428-010-IMAGE-P000000001000347266.webp",
        },
      ],
    },
  ],
  isLoading: false,
} as ArticlesSliceState;

jest.mock("axios", () => jest.fn(() => Promise.resolve({})));

describe("Products", () => {
  let state = {} as { preloadedState: RootState };

  beforeEach(() => {
    state = {
      preloadedState: {
        categories: categoryInitialState,
        articles: articlesInitialState,
      },
    };
  });

  test("products loading", async () => {
    const clonedInitialState = cloneDeep(state);
    clonedInitialState.preloadedState.articles.isLoading = true;

    act(() => {
      renderWithProviders(<Products />, clonedInitialState);
    });
    await waitFor(async () => {
      expect(screen.queryByText<HTMLElement>(/Loading/i)).toBeInTheDocument();
    });
  });

  test("products title, count data", async () => {
    act(() => {
      renderWithProviders(<Products />, state);
    });

    await waitFor(async () => {
      // should show name
      const name = await screen.getByTestId<HTMLElement>("category-name");
      expect(name).toBeInTheDocument();
      expect(name).toHaveTextContent(categoryInitialState.name);

      // should show count
      const count = await screen.getByTestId<HTMLElement>(
        "category-article-count"
      );
      expect(count).toBeInTheDocument();
      expect(count).toHaveTextContent(`${categoryInitialState.articleCount}`);
    });
  });
});
