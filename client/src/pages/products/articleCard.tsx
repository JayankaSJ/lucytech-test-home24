import React, { FC } from "react";
import styled from "styled-components";
import NumberFormatProvider from "providers/numberFormatProvider";

type ArticleCardProps = {
    article: Article;
    dataTest?: string;
};

const ArticleContainer = styled.div`
    border: 1px solid lavenderblush;
    padding: 10px;

    > * {
        display: inline-block;
        padding: 4px 0;
        margin: 4px 0;
        width: 100%;
    }

    > section[role="button"] {
        padding: 0.2em;
        background-color: lightgoldenrodyellow;
        border: 1px solid lightgray;
        cursor: pointer;
        text-align: center;
    }
`;

const ArticleCard: FC<ArticleCardProps> = ({ article, dataTest }) => {
    const testPrefix = dataTest || "article";
    return (
        <ArticleContainer data-testid={testPrefix}>
            <img
                data-testid={`${testPrefix}-image`}
                src={article.images[0].path}
                alt={article.name}
            />
            <div data-testid={`${testPrefix}-name`}>{article.name}</div>
            <div data-testid={`${testPrefix}-price`}>
                {NumberFormatProvider.format(
                    article.prices.regular.value / 100
                )}
            </div>
            <section role="button">Add to cart</section>
        </ArticleContainer>
    );
};

export default ArticleCard;
