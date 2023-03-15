import React, { FC } from "react";
import NumberFormatProvider from "providers/numberFormatProvider";

type ArticleCardProps = {
  article: Article;
  dataTest?: string;
};

const ArticleCard: FC<ArticleCardProps> = ({ article, dataTest }) => {
  const testPrefix = dataTest || "article";
  return (
    <div className={"article"} data-testid={testPrefix}>
      <img
        data-testid={`${testPrefix}-image`}
        src={article.images[0].path}
        alt={article.name}
      />
      <div data-testid={`${testPrefix}-name`}>{article.name}</div>
      <div data-testid={`${testPrefix}-price`}>
        {NumberFormatProvider.format(article.prices.regular.value / 100)}
      </div>
      <section role="button">Add to cart</section>
    </div>
  );
};

export default ArticleCard;
