import { HeaderStyle } from "./style";

export function HeaderHome() {
    return (
        <HeaderStyle>
            <div className="logo">
                <h1>Motors</h1>
                <h3>shop</h3>
            </div>
            <div className="btnUser">
                <button>Fazer Login</button>
                <button className="btnCadastro">Cadastrar</button>
            </div>
        </HeaderStyle>
    );
}
