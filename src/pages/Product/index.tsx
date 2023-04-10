import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { CardCar } from "./CardCar";
import { CardPictures } from "./CardPictures";
import { CardUser } from "./CardUser";
import { CreateComment } from "./CreateComments";
import { Description } from "./Description";
import { ListComment } from "./ListComments";
import { ContainerCenterPage, ContainerSidePage, Page } from "./style";


export function Product () {
    return (
        <>
            <Header />
            <Page>
                <ContainerCenterPage>
                    <CardCar />
                    <Description />
                    <ListComment />
                    <CreateComment />
                </ContainerCenterPage>
                <ContainerSidePage>
                    <CardPictures />
                    <CardUser />
                </ContainerSidePage>
            </Page>
            <Footer />
        </>
    )
}