import React from "react";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "tests/test-utils";
import Sidebar from "containers/sidebar";
import { CategorySliceState } from "reducers/categories.reducer";
import { cloneDeep } from "lodash";

const initialState = {
    name: "test category",
    articleCount: 10,
    childrenCategories: [
        {
            name: "test-name",
            urlPath: "path",
        },
    ] as never[],
    isLoading: false,
} as CategorySliceState;

describe("Sidebar", () => {
    test("sidebar title", async () => {
        renderWithProviders(<Sidebar />);
        expect(screen.queryByText<HTMLElement>("home24")).toBeInTheDocument();
    });

    test("sidebar loading", async () => {
        const loadingState = cloneDeep(initialState);
        loadingState.isLoading = true;
        renderWithProviders(<Sidebar />, {
            preloadedState: {
                categories: loadingState,
            },
        });
        expect(screen.queryByText<HTMLElement>(/Loading/i)).toBeInTheDocument();
    });

    test("sidebar with data", async () => {
        renderWithProviders(<Sidebar />, {
            preloadedState: {
                categories: initialState,
            },
        });
        // should show categories
        const categories = screen.getByTestId<HTMLElement>("categories");
        const category0 = screen.getByTestId<HTMLElement>("category-0");

        expect(categories).toBeInTheDocument();
        expect(category0).toBeInTheDocument();
        expect(categories).toContainElement(category0);
    });
});
