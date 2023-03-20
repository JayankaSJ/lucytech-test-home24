import React, { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "store";
import styled from "styled-components";
import {
    getArticles,
    getIsArticlesLoading,
} from "selectors/articles.selectors";
import {
    getArticleCount,
    getCategoryName,
} from "selectors/categories.selectors";
import { fetchCategory } from "reducers/thunks/categories.thunk";
import Loading from "components/Loading";
import ArticleCard from "./articleCard";

const ArticlesContainer = styled.div`
    display: grid;
    grid-gap: 26px;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`;

type ProductsProps = object;

const Products: FC<ProductsProps> = () => {
    const dispatch = useAppDispatch();

    const articles = useSelector<RootState, Article[]>(getArticles);
    const isLoading = useSelector<RootState, boolean>(getIsArticlesLoading);
    const categoryName = useSelector<RootState, string>(getCategoryName);
    const articleCount = useSelector<RootState, number>(getArticleCount);

    useEffect(() => {
        dispatch(fetchCategory());
    }, [dispatch]);

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <h1 data-testid="category-name">
                    {categoryName}
                    <small data-testid="category-article-count">
                        {" "}
                        ({articleCount})
                    </small>
                </h1>
            )}
            <ArticlesContainer>
                {articles.map((article, index: React.Key) => {
                    return (
                        <ArticleCard
                            key={index}
                            article={article}
                            dataTest={`article-${index}`}
                        />
                    );
                })}
            </ArticlesContainer>
        </>
    );
};

export default Products;
