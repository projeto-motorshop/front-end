import styled from "styled-components";
import bannerImg from "../../../assets/bannerCar.svg";

export const BannerStyle = styled.div`
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    bottom: 0;
    -webkit-mask-image: linear-gradient(black, transparent);
    mask-image: linear-gradient(black, transparent);
`;
