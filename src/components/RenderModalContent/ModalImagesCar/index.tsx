import {
    Button,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalOverlay,
    UseDisclosureProps,
} from "@chakra-ui/react";
import { useCarContext } from "../../../providers/CarContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Pagination, Navigation } from "swiper";

export function ModalImagesCar({ onClose }: UseDisclosureProps) {
    const { car } = useCarContext();

    return (
        <>
            <ModalOverlay />
            <ModalContent maxWidth={"60rem"}>
                <ModalBody>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {car?.images.map((elem) => {
                            return (
                                <SwiperSlide>
                                    <img src={elem.urlImg} alt={elem.urlImg} />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </>
    );
}
