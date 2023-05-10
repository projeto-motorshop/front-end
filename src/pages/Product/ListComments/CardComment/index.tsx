import { Avatar, Box, Button, Flex, Image, Modal, Text } from "@chakra-ui/react";
import { useCarContext } from "../../../../providers/CarContext";
import { DeleteIcon } from "@chakra-ui/icons";
import { ModalEditComment } from "../../../../components/RenderModalContent/ModalEditComment";
import { useCommentContext } from "../../../../providers/CommentContext";
import { useUserContext } from "../../../../providers/UserContext";
import { RiEdit2Fill } from "react-icons/ri";
import { useForm } from "react-hook-form";

export function CardComment() {
    const { car } = useCarContext();
    const { deleteComment, setCommentId, setIsDeleteComment } = useCommentContext()
    const { overlay, setOverlay, onOpen, isOpen, onClose } = useUserContext()

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
                        <Flex
                            flexDir="column"
                            mb="2.5rem"
                        >
                            <Flex
                                justifyContent={"space-between"}
                            >
                                <Flex
                                    w="19rem"
                                    alignItems={"center"}
                                    gap={"2.5rem"}
                                >
                                    <Flex
                                        alignItems={"center"}
                                        gap={"1rem"}
                                    >
                                        <Avatar
                                            src={elem?.user?.urlImg}
                                            name={elem?.user?.name}
                                        />
                                        <Text fontSize={14}>
                                            {elem?.user?.name}
                                        </Text>
                                    </Flex>
                                    <Text fontSize={14}>
                                        {convertMS(elem?.updatedAt)}
                                    </Text>
                                </Flex>
                                <Flex
                                    justifyContent={"space-between"}
                                >
                                    
                                    <RiEdit2Fill
                                        cursor={"pointer"}
                                        fontSize={25}
                                        onClick={() => {
                                            setCommentId(elem.id)
                                            setOverlay(<ModalEditComment />);
                                            onOpen();
                                        }}
                                    />

                                    <DeleteIcon
                                        cursor={"pointer"}
                                        onClick={() => {
                                            setCommentId(elem.id)
                                            deleteComment()
                                            setIsDeleteComment("delete")
                                        }}
                                        fontSize={23}
                                        ml={5}
                                    />
                                </Flex>
                            </Flex>
                            <Text fontSize={14} pt={"0.5rem"}>
                                {elem.description}
                            </Text>
                        </Flex>
                        <Modal isOpen={isOpen} onClose={onClose}>
                            {overlay}
                        </Modal>
                    </>
                );
            })}
        </>
    );
}
