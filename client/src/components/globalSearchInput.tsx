import React, { FC, useState } from "react";
import {
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
} from "@chakra-ui/react";
import { useAppDispatch } from "store";
import { CloseIcon, SearchIcon } from "@chakra-ui/icons";
import useDebouncedEffect from "hooks/useDebouncedEffect";
import { filterArticles } from "reducers/articles.reducer";

type GlobalSearchInputProps = object;

const GlobalSearchInput: FC<GlobalSearchInputProps> = () => {
    const dispatch = useAppDispatch();
    const [searchKey, setSearchKey] = useState<string>("");
    useDebouncedEffect(
        () => {
            dispatch(filterArticles(searchKey));
        },
        [searchKey],
        500
    );

    return (
        <InputGroup w={350} mr={5}>
            <InputLeftElement
                className="InputLeft"
                pointerEvents="none"
                children={<SearchIcon color="gray.300" />}
            />
            <Input
                placeholder="Search"
                onChange={(e: {
                    target: { value: React.SetStateAction<string> };
                }) => setSearchKey(e.target.value)}
                value={searchKey}
            />
            {searchKey && (
                <InputRightElement
                    className="InputRight"
                    pointerEvents="visiblePainted"
                    children={<CloseIcon color="gray.300" />}
                    h="full"
                    cursor="pointer"
                    onClick={() => setSearchKey("")}
                />
            )}
        </InputGroup>
    );
};

export default GlobalSearchInput;
