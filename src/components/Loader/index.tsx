import { Skeleton, Stack } from "@chakra-ui/react";

const Loading = () => {
    return (
        <>
            <Stack h={"50vh"} w={"80%"} mb={"2rem"}>
                <Skeleton
                    startColor="grey.3"
                    endColor="grey.6"
                    speed={2}
                    height="15rem"
                    borderRadius={"5px"}
                />
                <Skeleton
                    startColor="grey.3"
                    endColor="grey.6"
                    speed={2}
                    height="15rem"
                    borderRadius={"5px"}
                />
                <Skeleton
                    startColor="grey.3"
                    endColor="grey.6"
                    speed={2}
                    height="15rem"
                    borderRadius={"5px"}
                />
                <Skeleton
                    startColor="grey.3"
                    endColor="grey.6"
                    speed={2}
                    height="15rem"
                    borderRadius={"5px"}
                />
                <Skeleton
                    startColor="grey.3"
                    endColor="grey.6"
                    speed={2}
                    height="15rem"
                    borderRadius={"5px"}
                />
                <Skeleton
                    startColor="grey.3"
                    endColor="grey.6"
                    speed={2}
                    height="15rem"
                    borderRadius={"5px"}
                />
            </Stack>
        </>
    );
};

export default Loading;
