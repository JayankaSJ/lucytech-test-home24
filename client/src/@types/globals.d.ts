declare global {
    export type Category = {
        name: string;
        categoryArticles: CategoryArticle;
        articleCount: number;
        childrenCategories: ChildCategory;
    };

    export type Article = {
        name: string;
        variantName: string;
        prices: Prices;
        images: Image[];
    };

    export type CartItem = {
        count: number;
        article: Article;
    };

    export type ChildCategory = {
        name: string;
        urlPath: string;
    };

    export type Prices = {
        currency: string;
        regular: {
            value: number;
        };
    };

    export type Image = {
        path: string;
    };

    export type CategoryArticle = {
        articles: Article[];
    };
}

export {};
