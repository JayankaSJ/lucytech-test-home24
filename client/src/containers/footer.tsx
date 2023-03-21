import React, { FC } from "react";
import { Flex, Stack, Text } from "@chakra-ui/react";

type FooterProps = object;

const Footer: FC<FooterProps> = () => {
    return (
        <Flex
            ml={{ base: 0 }}
            px="4"
            position="sticky"
            bottom="0"
            height="20"
            zIndex="1"
            bg="white"
            borderBottomWidth="1px"
            borderBottomColor="gray.200"
            justifyContent={{ base: "space-between", md: "flex-end" }}
        >
            <Stack
                pt="8"
                pb="12"
                justify="space-between"
                direction={{ base: "column-reverse", md: "row" }}
                align="center"
            >
                <Text fontSize="sm" color="subtle">
                    Alle Preise sind in Euro (€) inkl. gesetzlicher Umsatzsteuer
                    und Versandkosten.
                </Text>
            </Stack>
        </Flex>
    );
};

export default Footer;
