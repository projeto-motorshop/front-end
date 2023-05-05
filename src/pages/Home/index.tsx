import { HeaderHome } from "../../components/HeaderHome";
import { BannerHome } from "./BannerHome";
import { Dashboard } from "./Dashboard";
import { FooterHome } from "../../components/FooterHome";
import { Flex } from "@chakra-ui/react";

export function Home() {
    return (
        <Flex flexDirection={"column"} alignItems={"center"}>
            {/* <HeaderHome /> */}
            <BannerHome />
            <Dashboard />
            <FooterHome />
        </Flex>
    );
}
