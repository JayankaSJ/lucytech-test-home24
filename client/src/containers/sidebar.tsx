import React, { FC, memo } from "react";
import { useSelector } from "react-redux";
import {
  getChildrenCategories,
  getIsCategoriesLoading,
} from "selectors/categories.selectors";
import { RootState } from "store";
import Loading from "components/Loading";

import "./sidebar.css";

type SidebarProps = object;

const Sidebar: FC<SidebarProps> = () => {
  const categories = useSelector<RootState, ChildCategory[]>(
    getChildrenCategories
  );
  const isLoading = useSelector<RootState, boolean>(getIsCategoriesLoading);

  return (
    <div className={"sidebar"}>
      <h3 data-testid="title">Kategorien</h3>
      {isLoading ? (
        <Loading />
      ) : (
        <ul data-testid="categories">
          {categories.map(({ name, urlPath }, index: React.Key) => {
            return (
              <li data-testid={`category-${index}`} key={index}>
                <a href={`/${urlPath}`}>{name}</a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default memo(Sidebar);
