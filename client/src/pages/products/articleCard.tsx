import React, { FC } from "react";
import NumberFormatProvider from "providers/numberFormatProvider";
import { Box, Image, Center, Button } from "@chakra-ui/react";
import { MdAddShoppingCart } from "react-icons/md";
import { useAppDispatch } from "store";
import { addToCart } from "reducers/cart.reducer";

type ArticleCardProps = {
    article: Article;
    dataTest?: string;
};

const ArticleCard: FC<ArticleCardProps> = ({ article, dataTest }) => {
    const dispatch = useAppDispatch();
    const testPrefix = dataTest || "article";

    function handleAddToCart() {
        dispatch(addToCart(article));
    }

    return (
        <Box
            w="200px"
            h="350px"
            alignItems="center"
            justifyContent="center"
            cursor="pointer"
            bg="white"
            rounded="xl"
            shadow="lg"
            borderWidth="1px"
            p={[10, 4]}
            data-testid={testPrefix}
        >
            <Box w="full" position="relative" overflow="hidden" roundedTop="lg">
                <Center color="white" w="160" h="160">
                    <Image
                        data-testid={`${testPrefix}-image`}
                        src={article.images[0].path}
                        objectFit="cover"
                        alt={article.name}
                        borderRadius="full"
                    />
                </Center>
            </Box>
            <Box p="6">
                <Box
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                    data-testid={`${testPrefix}-name`}
                >
                    {article.name}
                </Box>
                <Box data-testid={`${testPrefix}-price`}>
                    {NumberFormatProvider.format(
                        article.prices.regular.value / 100
                    )}
                </Box>
                <Center color="white" w="160" mt={5}>
                    <Button
                        rightIcon={<MdAddShoppingCart />}
                        colorScheme="teal"
                        variant="outline"
                        w="full"
                        onClick={() => handleAddToCart()}
                    >
                        Add to cart
                    </Button>
                </Center>
            </Box>
        </Box>
    );
};

export default ArticleCard;
