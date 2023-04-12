import styled from "styled-components";

export const CardStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 80%;
    overflow: hidden;
    gap: 1rem;
    margin-left: 1rem;

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: calc((100% - 10rem) / 3);
        padding: 0 1rem;
        gap: 1rem;
    }

    .capaImg {
        width: 100%;
        object-fit: cover;

        img {
            width: 100%;
            height: 100%;
        }
    }

    .divInfo {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        p:nth-child(1) {
            color: var(--grey1);
            font-weight: 600;
        }

        p:nth-child(2) {
            color: var(--grey2);
            font-weight: 500;
            /* width: 100%; */
            /* white-space: nowrap; */
            /* background-color: red; */
        }
    }

    .divInfoUser {
        display: flex;
        align-items: center;
        gap: 1rem;
        width: 100%;
        object-fit: cover;

        p {
            font-family: "Inter";
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 24px;
        }

        img {
            border-radius: 50%;
            width: 15%;
            height: 100%;
        }
    }

    .divInfoFooter {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .divInfoSpan {
            display: flex;
            gap: 0.5rem;
            span {
                border-radius: 4px;
                padding: 0.5rem;
                background-color: var(--brand4);
                color: var(--brand1);
            }
        }

        span {
            color: var(--grey1);
            font-weight: 500;
        }
    }
`;
