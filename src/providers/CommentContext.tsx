import { Dispatch, createContext, useContext, useState } from "react";
import { IUserProviderProps, useUserContext } from "./UserContext";
import api from "../service/api";
import { toast } from "react-toastify";
import { ICommentRequest } from "../interfaces/comment";
import { useCarContext } from "./CarContext";

interface ICommentContext {
    createComment: (formData: ICommentRequest) => void;
    commentId: string;
    setCommentId: Dispatch<string>;
    comment: string;
    setComment: Dispatch<string>;
    deleteComment: (deleteId: string) => void;
    patchComment: (formData: ICommentRequest) => void;
}
export const CommentContext = createContext<ICommentContext>(
    {} as ICommentContext
);

export const CommentProvider = ({ children }: IUserProviderProps) => {
    const { car, loadProduct } = useCarContext();
    const { onClose } = useUserContext();
    const [commentId, setCommentId] = useState("");
    const [comment, setComment] = useState("");

    const token = localStorage.getItem("@token");

    const createComment = async (formData: ICommentRequest) => {
        try {
            await api.post(`/comments/cars/${car?.id}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setComment("");
            toast.success("comentario criado com sucesso");
        } catch (error) {
            toast.error("ops, ocorreu um erro ");
        }
    };

    const patchComment = async (formData: ICommentRequest) => {
        try {
            await api.patch(`/comments/${commentId}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            onClose();
            loadProduct();
            toast.success("comentário atualizado com sucesso");
        } catch (error) {
            console.log(error);
        }
    };

    const deleteComment = async (deleteId: string) => {
        try {
            await api.delete(`/comments/${deleteId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            loadProduct();
            toast.success("comentário deletado");
        } catch (error) {
            toast.error("algo deu errado");
        }
    };

    return (
        <CommentContext.Provider
            value={{
                createComment,
                commentId,
                setCommentId,
                comment,
                setComment,
                deleteComment,
                patchComment,
            }}
        >
            {children}
        </CommentContext.Provider>
    );
};

export const useCommentContext = (): ICommentContext => {
    const context = useContext(CommentContext);

    return context;
};
