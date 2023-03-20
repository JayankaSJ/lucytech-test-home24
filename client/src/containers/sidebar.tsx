import React, { FC, memo } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import {
    getChildrenCategories,
    getIsCategoriesLoading,
} from "selectors/categories.selectors";
import { RootState } from "store";
import Loading from "components/Loading";

const SidebarContainer = styled.div`
    grid-area: sidebar;
    background-color: lavender;

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;

        li {
            margin: 0 0 0 8px;
            padding: 8px 0;
        }
    }
`;

type SidebarProps = object;

const Sidebar: FC<SidebarProps> = () => {
    const categories = useSelector<RootState, ChildCategory[]>(
        getChildrenCategories
    );
    const isLoading = useSelector<RootState, boolean>(getIsCategoriesLoading);

    return (
        <SidebarContainer>
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
        </SidebarContainer>
    );
};

export default memo(Sidebar);
