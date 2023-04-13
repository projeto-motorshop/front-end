import {
    Avatar,
    Box,
    Center,
    Container,
    Flex,
    Image,
    Text,
    Wrap,
    WrapItem,
} from "@chakra-ui/react";
import cars from "../../../components-moks";

export function CardCar() {
    const elem = {
        brand: "Ford",
        model: "Mustang",
        year: 1969,
        color: "red",
        price: 10000,
        fuel: "gasoline",
        description:
            "The Ford Mustang is an American car manufactured by Ford. It was originally based on the platform of the second generation North American Ford Falcon, a compact car. The original 1962 Ford Mustang I two-seater concept car had evolved into the 1963 Mustang II four-seater concept car which Ford used to pretest how the public would take interest in the first production Mustang. The 1963 Mustang II concept car was designed with a variation of the production model's front and rear ends with a roof that was 2.7 inches shorter. Introduced early on April 17, 1964, and thus dubbed as a 1964½ by Mustang fans, the 1965 Mustang was the automaker's most successful launch since the Model A.",
        km: 10000,
        Image: "https://garagem360.com.br/wp-content/uploads/2021/12/ferrari_roma_56.jpeg",
        boaCompra: true,
        user: {
            name: "victor henrique",
        },
    };
    return (
        <Wrap spacing="16px" align="center" w={"100%"}>
            <WrapItem>
                <Box bg={"red"} w={"100%"} p={3}>
                    <Image src={elem.Image} alt={elem.model} />
                    <Box>
                        <Text>{elem.model}</Text>
                        <Box
                            mt="1"
                            fontWeight="semibold"
                            as="h4"
                            lineHeight="tight"
                            noOfLines={2}
                        >
                            {elem.description}
                        </Box>
                    </Box>
                </Box>
            </WrapItem>
        </Wrap>
    );
}
