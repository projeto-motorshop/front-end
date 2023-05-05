import {
    Avatar,
    Box,
    Button,
    Center,
    Flex,
    FormControl,
    Image,
    Input,
    Text,
    Textarea,
} from "@chakra-ui/react";
import { useCarContext } from "../../../providers/CarContext";
import { useCommentContext } from "../../../providers/CommentContext";
import { ICommentRequest } from "../../../interfaces/comment";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { commentSchema } from "../../../schemas/comment.schema";
import { useUserContext } from "../../../providers/UserContext";

export function CreateComment() {
    const { car } = useCarContext();
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
                {user ? (
                    <>
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
                            />
                            <Button
                                w="7rem"
                                h="3rem"
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
                            >
                                Comentar
                            </Button>
                        </FormControl>
                    </>
                ) : (
                    <>
                        <Flex
                            alignItems={"center"}
                            justifyContent={"center"}
                            h={"100%"}
                        >
                            <Text fontWeight={"bold"} fontSize={"1.5rem"}>
                                para comentar tem que estar logado
                            </Text>
                        </Flex>
                    </>
                )}
            </Flex>
        </>
    );
}
