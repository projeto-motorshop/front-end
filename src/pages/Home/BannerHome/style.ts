import styled from "styled-components";
import bannerImg from "../../../assets/bannerCar.svg";

export const BannerStyle = styled.div`
    height: 33.5rem;
    width: 100%;
    overflow: hidden;
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 1) 40%,
        rgba(253, 253, 255, 1) 100%
    );
    position: relative;
    z-index: 15;
    margin-bottom: 2rem;

    .banner {
        position: absolute;
        z-index: 1;
        bottom: 0;
        -webkit-mask-image: linear-gradient(black, transparent);
        mask-image: linear-gradient(black, transparent);
    }

    .descriptionBanner {
        position: absolute;
        z-index: 10;
        width: 100%;
        height: 100%;
        justify-content: space-evenly;
        display: flex;
        align-items: center;
        flex-direction: column;

        p,
        span {
            color: var(--grey10);
            font-weight: 700;
            font-size: 44px;
        }
    }
`;
