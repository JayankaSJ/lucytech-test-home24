import React, { FC, memo } from "react";
import { Outlet } from "react-router";
import {
    Box,
    Drawer,
    DrawerContent,
    VStack,
    useDisclosure,
} from "@chakra-ui/react";

import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";

type IndexLayoutProps = object;

const SIDE_BAR_WIDTH = 60;

const IndexLayout: FC<IndexLayoutProps> = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Box minH="100vh" bg="gray.100">
            <Sidebar
                onClose={() => onClose}
                display={{ base: "none", md: "block" }}
                sideBarWidth={SIDE_BAR_WIDTH}
            />
            <Drawer
                autoFocus={false}
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full"
            >
                <DrawerContent>
                    <Sidebar onClose={onClose} sideBarWidth={SIDE_BAR_WIDTH} />
                </DrawerContent>
            </Drawer>

            <Header onOpen={onOpen} />
            <VStack ml={{ base: 0, md: SIDE_BAR_WIDTH }} spacing="24px">
                <Box w="100%">
                    <Box w="100%" p="4">
                        <Outlet />
                    </Box>
                    <Footer />
                </Box>
            </VStack>
        </Box>
    );
};

export default memo(IndexLayout);
