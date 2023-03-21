import React, { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "store";
import {
    getDashboardArticles,
    getIsArticlesLoading,
} from "selectors/articles.selectors";
import {
    getArticleCount,
    getCategoryName,
} from "selectors/categories.selectors";
import { fetchCategory } from "reducers/thunks/categories.thunk";
import Loading from "components/Loading";
import ArticleCard from "./articleCard";
import { Box, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";

type ProductsProps = object;

const Products: FC<ProductsProps> = () => {
    const dispatch = useAppDispatch();

    const articles = useSelector<RootState, Article[]>(getDashboardArticles);
    const isLoading = useSelector<RootState, boolean>(getIsArticlesLoading);
    const categoryName = useSelector<RootState, string>(getCategoryName);
    const articleCount = useSelector<RootState, number>(getArticleCount);

    useEffect(() => {
        dispatch(fetchCategory());
    }, [dispatch]);

    return (
        <VStack
            w="full"
            h="full"
            bg="white"
            borderWidth="1px"
            minH={"calc(100vh - 60px)"}
        >
            {isLoading && <Loading />}
            <Box w="full" p={10}>
                <Heading mb={2} data-testid="category-name">
                    {categoryName}
                </Heading>
                <Text fontSize="xl" data-testid="category-article-count">
                    {articleCount > 0
                        ? `(${articleCount})`
                        : "No items for category"}
                </Text>
            </Box>

            {articles?.length === 0 && <Text fontSize="3xl">No articles</Text>}
            <SimpleGrid
                minChildWidth="200px"
                spacing="10px"
                w="full"
                p={10}
                pt={0}
                data-testid="categories"
            >
                {articles?.map((article, index: React.Key) => {
                    return (
                        <ArticleCard
                            key={index}
                            article={article}
                            dataTest={`article-${index}`}
                        />
                    );
                })}
            </SimpleGrid>
        </VStack>
    );
};

export default Products;
