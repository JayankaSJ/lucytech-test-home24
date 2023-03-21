import React, { FC, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import {
    IconButton,
    Flex,
    HStack,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    Text,
    Stack,
    CloseButton,
    Heading,
    Box,
} from "@chakra-ui/react";
import { MdShoppingCart } from "react-icons/md";
import { RootState, useAppDispatch } from "store";
import { getCartItems, getCartItemsCount } from "selectors/cart.selectors";
import { clearCart, removeCartItem } from "reducers/cart.reducer";

type CartProps = object;

const CartItemsCountContainer = styled.span`
    font-size: 12px;
    background-color: red;
    width: 16px;
    line-height: 16px;
    text-align: center;
    color: #fff;
    z-index: 2;
    border-radius: 3px;
    position: absolute;
    right: 32px;
    top: 10px;
`;

const Cart: FC<CartProps> = () => {
    const dispatch = useAppDispatch();
    const cartItems = useSelector<RootState, CartItem[]>(getCartItems);
    const cartItemsCount = useSelector<RootState, number>(getCartItemsCount);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const haveAny = cartItems.length > 0;

    function handleRemoveItem(item: CartItem) {
        dispatch(removeCartItem(item));
    }

    function handleClearCart() {
        dispatch(clearCart());
    }

    return (
        <HStack spacing={{ base: "0", md: "6" }}>
            <Box>
                <IconButton
                    size="lg"
                    variant="outline"
                    aria-label="open menu"
                    icon={<MdShoppingCart />}
                    onClick={() => setIsMenuOpen((v) => !v)}
                />
                {cartItemsCount > 0 && (
                    <CartItemsCountContainer>
                        {cartItemsCount}
                    </CartItemsCountContainer>
                )}
            </Box>
            <Flex alignItems="center">
                <Menu isOpen={isMenuOpen}>
                    <MenuButton
                        py={2}
                        transition="all 0.3s"
                        _focus={{ boxShadow: "none" }}
                    ></MenuButton>
                    <MenuList fontSize="lg" bg="white" borderColor="gray.200">
                        {haveAny ? (
                            <>
                                {cartItems.map((item, index: React.Key) => {
                                    return (
                                        <MenuItem as={"span"} key={index}>
                                            <Stack direction="row" spacing={2}>
                                                <Text>{item.article.name}</Text>
                                                <Heading as="h6" size="xs">
                                                    {item.count}
                                                </Heading>
                                                <CloseButton
                                                    size="md"
                                                    onClick={() =>
                                                        handleRemoveItem(item)
                                                    }
                                                />
                                            </Stack>
                                        </MenuItem>
                                    );
                                })}
                                <MenuDivider />
                                <MenuItem onClick={() => handleClearCart()}>
                                    Remove all
                                </MenuItem>
                            </>
                        ) : (
                            <MenuItem>
                                <Text fontSize="2xl">Cart is empty</Text>
                            </MenuItem>
                        )}
                    </MenuList>
                </Menu>
            </Flex>
        </HStack>
    );
};

export default Cart;
