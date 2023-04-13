import styled from "styled-components";

export const FilterStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 30%;

    .divFilter {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        p {
            font-weight: 600;
            font-size: 1.5rem;
        }

        ul {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;

            li {
                cursor: pointer;
                color: var(--grey3);
                padding: 0 1rem;
                font-weight: 500;
            }
        }
    }
`;
