import React, { FC } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

type NavLinkProps = {
    link: string;
    name: string;
};

const NavLink: FC<NavLinkProps> = ({ link, name, ...rest }) => {
    return (
        <Box w="100%" display="block" height={12}>
            <a href={link}>
                <Flex
                    align="center"
                    p="2"
                    mx="4"
                    borderRadius="lg"
                    role="group"
                    cursor="pointer"
                    _hover={{
                        bg: "cyan.400",
                        color: "white",
                    }}
                    {...rest}
                >
                    <Text fontSize="1.2rem">{name}</Text>
                </Flex>
            </a>
        </Box>
    );
};

export default NavLink;
