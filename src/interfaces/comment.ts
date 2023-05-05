export interface ICommentRequest {
    description: string;
}
export interface IComment {
    id: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    user: {
        id: string;
        name: string;
        urlImg: string;
    };
}
