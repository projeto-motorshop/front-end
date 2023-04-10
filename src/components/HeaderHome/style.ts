import styled from "styled-components";

export const HeaderStyle = styled.div`
    width: 100%;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid var(--grey6);
    padding: 0 4.5rem;

    .logo {
        display: flex;
        height: 50%;
        align-items: flex-end;
        gap: 0.3rem;
        background: linear-gradient(90deg, #0b0d0d -1.61%, #4529e6 100.99%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        color: black;

        h1 {
            font-size: 2rem;
        }
        h3 {
            padding: 0.1rem;
            font-size: 1.4rem;
        }
    }

    .btnUser {
        border-left: 2px solid var(--grey6);
        display: flex;
        width: 30%;
        align-items: center;
        justify-content: space-between;
        padding: 0 2rem;
        height: 100%;
        button {
            width: 40%;
            padding: 0.6rem 1.2rem;
            background-color: transparent;
            border: none;
            color: var(--grey0);
            transition-duration: 0.5s;
            border-radius: 0.3rem;
        }

        .btnCadastro {
            border: 2px solid var(--grey6);
        }

        button:hover {
            background-color: var(--grey1);
            color: var(--whiteFixed);
            text-decoration-line: underline;
            text-decoration-color: var(--whiteFixed);
        }
    }
`;
