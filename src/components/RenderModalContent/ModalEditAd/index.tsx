import { useEffect, useMemo, useState } from "react";
import {
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Button,
    FormControl,
    FormLabel,
    Input,
    Select,
    Textarea,
    Text,
    Flex,
    Box,
    useRadioGroup,
    HStack,
    ModalCloseButton,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useFieldArray, useForm } from "react-hook-form";
import { ICarsUpdate } from "../../../interfaces/car";
import { updateCarSchema } from "../../../schemas/car.schema";
import { RadioCard } from "../../../pages/Register/RadioCard";
import { useCarContext } from "../../../providers/CarContext";
import api from "../../../service/api";
import { useUserContext } from "../../../providers/UserContext";

export const EditAdModal = () => {
    const { carId, deleteCar } = useCarContext();
    const { onClose, setUserCar, userCar } = useUserContext();
    const options = ["Sim", "Não"];
    const [published, setPublished] = useState({});
    const [carCard, setCarCard] = useState<ICarsUpdate>();

    useMemo(() => {
        const infoCarCard = async () => {
            const { data } = await api.get(`/cars/${carId}`);
            setCarCard(data);
            const img = data?.images;

            return img?.forEach((image: any) => {
                append({
                    urlImg: image.urlImg,
                });
            });
        };
        infoCarCard();
    }, [carId]);

    const token = localStorage.getItem("@token");

    const valueRadio = (value: string) => {
        setPublished(value);
    };

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: "framework",
        defaultValue: "Não",
        onChange: valueRadio,
    });

    const group = getRootProps();

    const formSubmit = async (formData: ICarsUpdate) => {
        let variant = {};

        if (published === "Sim") {
            variant = { isPublished: true };
        } else {
            variant = { isPublished: false };
        }

        const dataForm = {
            ...formData,
            ...variant,
        };
        const newData = Object.fromEntries(
            Object.entries(dataForm).filter(([_, v]) => v != "")
        );

        const teste = {
            ...newData,
            ...variant,
        };

        const { data } = await api.patch(`/cars/${carId}`, teste, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        await api.patch(`/cars/images/${carId}`, teste, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        setUserCar(userCar.map((e: any) => (e.id === data.id ? data : e)));

        onClose();
    };

    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<ICarsUpdate>({
        defaultValues: {
            // images: [{ urlImg: "" }],
            // images: carCard?.images?.length == 0 ? [{ urlImg: "" }] : "",
        },
        resolver: yupResolver(updateCarSchema),
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "images",
    });

    // useEffect(() => {
    //     (async () => {
    //         const { data } = await api.get(`/cars/${carId}`);
    //         setCarCard(data);
    //         const img = carCard?.images;
    //         return img?.forEach((image: any) => {
    //             append({
    //                 urlImg: image.urlImg,
    //             });
    //         });
    //     })();
    // }, [carId]);

    const img = () => {};

    return (
        <>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Editar Anúncio</ModalHeader>
                <ModalCloseButton />
                <FormControl
                    display={"flex"}
                    flexDir={"column"}
                    gap={"1rem"}
                    as={"form"}
                    onSubmit={handleSubmit(formSubmit)}
                >
                    <ModalBody>
                        <Flex flexDir={"column"} gap={"1rem"}>
                            <Text>Infomações do veículo</Text>
                            <Box>
                                <FormLabel>Marca</FormLabel>
                                <Input
                                    defaultValue={carCard?.brand}
                                    placeholder="Mercedes Benz"
                                    {...register("brand")}
                                />
                                {errors.brand?.message}
                            </Box>
                            <Box>
                                <FormLabel>Modelo</FormLabel>
                                <Input
                                    defaultValue={carCard?.model}
                                    placeholder="A 200 CGI ADVANCE SEDAN"
                                    {...register("model")}
                                />
                                {errors.model?.message}
                            </Box>
                            <Flex gap={"2rem"}>
                                <Box w={"50%"}>
                                    <FormLabel>Ano</FormLabel>
                                    <Input
                                        defaultValue={carCard?.year}
                                        type="number"
                                        placeholder="2018"
                                        {...register("year")}
                                    />
                                    {errors.year?.message}
                                </Box>
                                <Box w={"50%"}>
                                    <FormLabel>Combustível</FormLabel>
                                    <Select>
                                        <option defaultValue="1">flex</option>
                                        <option defaultValue="2">
                                            Híbrido
                                        </option>
                                        <option defaultValue="3">
                                            Elétrico
                                        </option>
                                    </Select>
                                    {errors.fuel?.message}
                                </Box>
                            </Flex>
                            <Flex gap={"2rem"}>
                                <Box>
                                    <FormLabel>Quilometragem</FormLabel>
                                    <Input
                                        placeholder="30.000"
                                        defaultValue={carCard?.mileage}
                                        {...register("mileage")}
                                    />
                                    {errors.mileage?.message}
                                </Box>
                                <Box>
                                    <FormLabel>Cor</FormLabel>
                                    <Input
                                        defaultValue={carCard?.color}
                                        placeholder="Cor"
                                        {...register("color")}
                                    />
                                    {errors.color?.message}
                                </Box>
                            </Flex>
                            <Flex gap={"2rem"}>
                                <Box w={"50%"}>
                                    <FormLabel>Preço Tabela Fipe</FormLabel>
                                    <Input
                                        defaultValue={carCard?.priceFipe}
                                        placeholder="R$ 48.000,00"
                                        {...register("priceFipe")}
                                    />
                                    {errors.priceFipe?.message}
                                </Box>
                                <Box w={"50%"}>
                                    <FormLabel>Preço</FormLabel>
                                    <Input
                                        placeholder="R$ 50.000,00"
                                        defaultValue={carCard?.price}
                                        {...register("price")}
                                    />
                                    {errors.price?.message}
                                </Box>
                            </Flex>
                            <Box>
                                <FormLabel>Descrição</FormLabel>
                                <Textarea
                                    defaultValue={carCard?.description}
                                    resize={"none"}
                                    {...register("description")}
                                />
                                {errors.description?.message}
                            </Box>
                            <Box>
                                <FormLabel>Publicado?</FormLabel>
                                <HStack
                                    display={"flex"}
                                    alignItems={"center"}
                                    justifyContent={"space-around"}
                                    {...group}
                                >
                                    {options.map((value) => {
                                        const radio = getRadioProps({ value });

                                        return (
                                            <>
                                                <Input
                                                    w={"50%"}
                                                    display={"none"}
                                                    defaultValue={"true"}
                                                />
                                                <RadioCard
                                                    key={value}
                                                    {...radio}
                                                >
                                                    {value}
                                                </RadioCard>
                                            </>
                                        );
                                    })}
                                </HStack>
                            </Box>
                            <Box>
                                <FormLabel>Imagem da Capa</FormLabel>
                                <Input
                                    defaultValue={carCard?.frontImg}
                                    placeholder="https://image.com"
                                    {...register("frontImg")}
                                />
                                {errors.frontImg?.message}
                            </Box>
                            <Flex flexDir={"column"} gap={"1rem"}>
                                {fields.map((item, index) => {
                                    return (
                                        <>
                                            <Flex
                                                key={item.id}
                                                alignItems={"flex-end"}
                                                gap={"2rem"}
                                            >
                                                <Flex
                                                    flexDir={"column"}
                                                    w={"100%"}
                                                >
                                                    <FormLabel>
                                                        {index + 1}° Imagem da
                                                        galeria
                                                    </FormLabel>
                                                    <Input
                                                        placeholder="https://image.com"
                                                        {...register(
                                                            `images.${index}.urlImg`
                                                        )}
                                                    />
                                                    {errors.images?.message}
                                                </Flex>
                                                {index > 0 && (
                                                    <Button
                                                        onClick={() => {
                                                            remove(index);
                                                        }}
                                                    >
                                                        X
                                                    </Button>
                                                )}
                                            </Flex>
                                        </>
                                    );
                                })}
                                <Button
                                    bg={"brand.4"}
                                    color={"brand.1"}
                                    fontSize={"12px"}
                                    _hover={{ bg: "brand.2", color: "white" }}
                                    onClick={() => append({ urlImg: "" })}
                                >
                                    Adicionar campo para imagem da galeria
                                </Button>
                            </Flex>
                        </Flex>
                    </ModalBody>
                    <ModalFooter justifyContent={"space-around"}>
                        <Button
                            _hover={{ bg: "grey.5" }}
                            mr={3}
                            onClick={deleteCar}
                        >
                            Excluir anúncio
                        </Button>
                        <Button
                            bg={"brand.2"}
                            color={"white"}
                            _hover={{ bg: "brand.3" }}
                            type="submit"
                        >
                            Salvar alterações
                        </Button>
                    </ModalFooter>
                </FormControl>
            </ModalContent>
        </>
    );
};
