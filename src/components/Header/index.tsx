import { HeaderStyle } from "../HeaderHome/style";



export function Header() {
    return(
        <HeaderStyle>
            <div className="logo">
                <h1>Motors</h1>
                <h3>shop</h3>
            </div>
            <div className="data_user">
                <img src="" alt="img" />
                <p>User Name</p>
            </div>
        </HeaderStyle>
    )
}