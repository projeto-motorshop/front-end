import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    fonts: {
        heading: `'Lexend', sans-serif`,
        body: `'Lexend', sans-serif`,
    },

    colors: {
        whiteFixed: "#FFFFFF",

        brand: {
            1: "#4529E6",
            2: "#5126EA",
            3: "#B0A6F0",
            4: "#EDEAFD",
        },

        grey: {
            1: "#0B0D0D",
            2: "#212529",
            3: "#495057",
            4: "#868E96",
            5: "#ADB5BD",
            6: "#CED4DA",
            7: "#DEE2E6",
            8: "#E9ECEF",
            9: "#F1F3F5",
            10: "#F8F9FA",
            11: "#FDFDFD",
        },

        alert: {
            1: "#CD2B31",
            2: "#FDD8D8",
            3: "#FFE5E5",
        },

        sucess: {
            1: "#18794E",
            2: "#CCEBD7",
            3: "#DDF3E4",
        },

        random: {
            1: "#E34D8C",
            2: "#C04277",
            3: "#7D2A4D",
            4: "#7000FF",
            5: "#6200E3",
            6: "#36007D",
            7: "#349974",
            8: "#2A7D5F",
            9: "#153D2E",
            10: "#6100FF",
            11: "#5700E3",
            12: "#30007D",
        },
    },
});
