import styled from "styled-components";

export const FilterStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 30%;

    p {
        font-family: "Lexend";
        font-weight: 600;
        font-size: 28px;
    }

    ul {
        li {
            cursor: pointer;
        }
    }
`;
