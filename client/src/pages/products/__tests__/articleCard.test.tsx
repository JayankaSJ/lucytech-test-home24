import React from "react";
import { screen, render } from "@testing-library/react";
import ArticleCard from "pages/products/articleCard";

describe("ArticleCard", () => {
    test("validate render", async () => {
        const article = {
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
        } as Article;
        render(<ArticleCard article={article} />);

        expect(screen.getByTestId("article")).toBeInTheDocument();

        const name = screen.getByTestId<HTMLElement>("article-name");
        expect(name).toHaveTextContent(article.name);

        const image = screen.getByTestId<HTMLImageElement>("article-image");
        expect(image.src).toContain(article.images[0].path);

        const price = screen.getByTestId<HTMLElement>("article-price");
        expect(price).toHaveTextContent("659,00 €");
    });
});
