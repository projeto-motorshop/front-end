import { Avatar, Box, Flex, Image, Text } from "@chakra-ui/react";
import { useCarContext } from "../../../../providers/CarContext";

export function CardComment() {
    const { car } = useCarContext();

    function convertMS(ms: number | string) {
        ms = Date.now() - new Date(ms).getTime();

        let months, weeks, days, hours, minutes, seconds;
        seconds = Math.floor(ms / 1000);
        minutes = Math.floor(seconds / 60);
        seconds = seconds % 60;
        hours = Math.floor(minutes / 60);
        minutes = minutes % 60;
        days = Math.floor(hours / 24);
        hours = hours % 24;
        weeks = Math.floor(days / 7);
        days = days % 7;
        months = Math.floor(days / 30);

        if (months) return ` há ${months} meses`;
        if (weeks) return ` há ${weeks} semanas`;
        if (days) return ` há ${days} dias`;
        if (hours) return ` há ${hours} horas`;
        if (minutes) return ` há ${minutes} minutos`;
        if (seconds) return ` há ${seconds} segundos`;

        return "agora mesmo";
    }

    return (
        <>
            {car?.comments.map((elem) => {
                return (
                    <>
                        <Flex flexDir="column" mb="2.5rem">
                            <Flex
                                w="19rem"
                                alignItems={"center"}
                                gap={"2.5rem"}
                            >
                                <Flex alignItems={"center"} gap={"1rem"}>
                                    <Avatar
                                        src={elem.user.urlImg}
                                        name={elem.user.name}
                                    />
                                    <Text fontSize={14}>{elem.user.name}</Text>
                                </Flex>
                                <Text fontSize={14}>
                                    {convertMS(elem.createdAt)}
                                </Text>
                            </Flex>

                            <Text fontSize={14} pt={"0.5rem"}>
                                {elem.description}
                            </Text>
                        </Flex>
                    </>
                );
            })}
        </>
    );
}
