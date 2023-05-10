import {
    Button,
    FormControl,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Textarea,
    useDisclosure
} from "@chakra-ui/react"
import { useCommentContext } from "../../../providers/CommentContext"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { commentSchema } from "../../../schemas/comment.schema"
import { ICommentRequest } from "../../../interfaces/comment"


export function ModalEditComment() {

    const { onClose } = useDisclosure()
    const { patchComment, setLoadingComment } = useCommentContext()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ICommentRequest>({ resolver: yupResolver(commentSchema) })

    return (
        <>

            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Editar Comentário</ModalHeader>
                <ModalCloseButton />
                <FormControl
                    as="form"
                    onSubmit={handleSubmit(patchComment)}
                >
                    <ModalBody>
                        <Textarea
                            placeholder="Digite seu comentário" size="lg"
                            {...register("description")}
                            h={"10rem"}
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            bg={"#4529E6"}
                            color={"#FFFFFF"}
                            mr={3}
                            type="submit"
                            onClick={() => {
                                setLoadingComment("update")
                            }}
                        >
                            Comentar
                        </Button>
                    </ModalFooter>
                </FormControl>
            </ModalContent>
        </>
    )
}