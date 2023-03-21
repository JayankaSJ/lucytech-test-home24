import React, { FC } from "react";
import { IconButton, Flex, Text } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import Cart from "components/cart";
import GlobalSearchInput from "components/globalSearchInput";

type HeaderProps = {
    onOpen?: () => void;
};

const Header: FC<HeaderProps> = ({ onOpen, ...rest }) => {
    return (
        <Flex
            ml={{ base: 0, md: 60 }}
            px="4"
            position="sticky"
            top="0"
            height="20"
            zIndex="1"
            alignItems="center"
            bg="white"
            borderBottomWidth="1px"
            borderBottomColor="gray.200"
            justifyContent={{ base: "space-between", md: "flex-end" }}
            {...rest}
        >
            <IconButton
                display={{ base: "flex", md: "none" }}
                onClick={onOpen}
                variant="outline"
                aria-label="open menu"
                icon={<FiMenu />}
            />

            <Text
                display={{ base: "flex", md: "none" }}
                fontSize="2xl"
                fontFamily="monospace"
                fontWeight="bold"
                data-testid={"title"}
            >
                home24
            </Text>

            <GlobalSearchInput />
            <Cart />
        </Flex>
    );
};

export default Header;
