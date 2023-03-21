import React, { FC, memo } from "react";
import {
    Box,
    CloseButton,
    Divider,
    Flex,
    Heading,
    ResponsiveValue,
    Text,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import {
    getChildrenCategories,
    getIsCategoriesLoading,
} from "selectors/categories.selectors";
import { RootState } from "store";
import NavLink from "components/navLink";
import Loading from "components/Loading";

type SidebarProps = {
    onClose?: () => void;
    // disabled due to chakra ambiguous typings
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    display?: ResponsiveValue<any>;
    sideBarWidth?: number;
};

const Sidebar: FC<SidebarProps> = ({ onClose, sideBarWidth, ...rest }) => {
    const categories = useSelector<RootState, ChildCategory[]>(
        getChildrenCategories
    );
    const isLoading = useSelector<RootState, boolean>(getIsCategoriesLoading);

    return (
        <Box
            transition="3s ease"
            bg="white"
            borderRight="1px"
            borderRightColor="gray.200"
            w={{ base: "full", md: sideBarWidth || 60 }}
            pos="fixed"
            h="full"
            {...rest}
        >
            <Flex
                h="20"
                alignItems="center"
                mx="8"
                justifyContent="space-between"
            >
                <Text
                    fontSize="2xl"
                    fontFamily="monospace"
                    fontWeight="bold"
                    data-testid="title"
                >
                    home24
                </Text>
                <CloseButton
                    display={{ base: "flex", md: "none" }}
                    onClick={onClose}
                />
            </Flex>
            <Divider />
            <Box textAlign="left" p="5">
                <Heading as="h4" size="md">
                    Kategorien
                </Heading>
            </Box>
            <Divider />
            {isLoading && <Loading />}
            <Box
                w="100%"
                display="block"
                overflowY="scroll"
                h="full"
                pb={100}
                data-testid="categories"
            >
                {categories.map(({ name, urlPath }, index: React.Key) => {
                    return (
                        <NavLink
                            data-testid={`category-${index}`}
                            key={index}
                            link={urlPath}
                            name={name}
                        />
                    );
                })}
            </Box>
        </Box>
    );
};

export default memo(Sidebar);
