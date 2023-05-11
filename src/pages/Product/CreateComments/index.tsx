import {
    Avatar,
    Box,
    Button,
    Flex,
    FormControl,
    Text,
    Textarea,
    Tooltip,
} from "@chakra-ui/react";
import { useCommentContext } from "../../../providers/CommentContext";
import { ICommentRequest } from "../../../interfaces/comment";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { commentSchema } from "../../../schemas/comment.schema";
import { useUserContext } from "../../../providers/UserContext";

export function CreateComment() {
    const { user } = useUserContext();
    const { createComment, comment, setComment } = useCommentContext();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ICommentRequest>({
        resolver: yupResolver(commentSchema),
    });

    return (
        <>
            <Flex
                flexDir="column"
                w="100%"
                h="18rem"
                p="2.5rem"
                bg="#FDFDFD"
                borderRadius={4}
                mt="1.5rem"
                mb="2.5rem"
            >
                <Flex mb="2%" alignItems={"center"} gap={"1rem"}>
                    <Box>
                        <Avatar src={user?.urlImg} name={user?.name} />
                    </Box>
                    <Text>{user?.name}</Text>
                </Flex>
                <FormControl
                    as={"form"}
                    pos="relative"
                    onSubmit={handleSubmit(createComment)}
                >
                    <Textarea
                        w="100%"
                        h="8rem"
                        pos="absolute"
                        resize="none"
                        value={comment}
                        {...register("description")}
                        onChange={(e) => setComment(e.target.value)}
                        disabled={user ? false : true}
                    />
                    {user ? (
                        <>
                            <Button
                                w="7rem"
                                h="3rem"
                                cursor="pointer"
                                bg="#4529E6"
                                color="#fff"
                                fontSize={16}
                                border="none"
                                borderRadius={4}
                                pos="absolute"
                                bottom="-7rem"
                                right="1rem"
                                _hover={{ bg: "brand.3", color: "brand.1" }}
                                type="submit"
                                disabled={user ? false : true}
                            >
                                Comentar
                            </Button>
                        </>
                    ) : (
                        <>
                            <Tooltip
                                label="precisa estar logado"
                                aria-label="A tooltip"
                            >
                                <Button
                                    w="7rem"
                                    h="3rem"
                                    cursor="pointer"
                                    bg="#4529E6"
                                    color="#fff"
                                    fontSize={16}
                                    border="none"
                                    borderRadius={4}
                                    pos="absolute"
                                    bottom="-7rem"
                                    right="1rem"
                                    _hover={{ bg: "brand.3", color: "brand.1" }}
                                    type="submit"
                                    disabled={user ? false : true}
                                >
                                    Comentar
                                </Button>
                            </Tooltip>
                        </>
                    )}
                </FormControl>
            </Flex>
        </>
    );
}
