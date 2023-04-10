import { BannerStyle } from "./style";
import banner from "../../../assets/bannerCar.svg";

export function BannerHome() {
    return (
        <BannerStyle>
            <div className="banner">
                <img src={banner} alt="" />
            </div>
            <div className="descriptionBanner">
                <p>Motors Shop</p>
                <span>A melhor plataforma de anúncios de carros do país</span>
            </div>
        </BannerStyle>
    );
}
