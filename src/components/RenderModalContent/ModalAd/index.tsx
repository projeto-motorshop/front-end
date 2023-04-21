import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Select,
    Textarea
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { ICarsRequest } from "../../../interfaces/car";
import { reqCarSchema } from "../../../schemas/car.schema";
import api from "../../../service/api";




export function CreateAdModal({ isOpen, onClose }: any) {
    const [priceFipe, setPriceFipe] = useState(0);
    const [dados, setDados] = useState({});

    const formSubmit = (data: any) => {
        setDados(data);

        // onClose();
    };

    useEffect(() => {
        const isGoodDeal = async (data: any) => {
            const fipeData = await api.get(
                `https://kenzie-kars.herokuapp.com/cars/unique?brand=${data.brand}&name=${data.model}&year=${data.year}&fuel=${data.fuel}`
            );

            setPriceFipe(fipeData.data.value);
        };
        isGoodDeal(dados);
    }, []);









    // const isGoodDeal = async (data: any) => {
    //     useEffect(() => { }, [])
    //     try {
    //         const fipeData = await api.get(`https://kenzie-kars.herokuapp.com/cars/unique?brand=${data.brand}&name=${data.model}&year=${data.year}&fuel=${data.fuel}`)
    //         console.log(fipeData);
    //         setPriceFipe(fipeData.data.value)
    //         console.log(priceFipe);
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // const formSubmit = (data: any) => {
    //     // console.log(data);
    //     isGoodDeal(data);

    //     // onClose();
    // };



    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<ICarsRequest>({
        defaultValues: {
            images: [{ urlImg: "" }],
        },
        resolver: yupResolver(reqCarSchema),
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "images",
    });
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Criar Anúncio</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <FormControl
                        display={"flex"}
                        flexDir={"column"}
                        gap={"1rem"}
                        as={"form"}

                        onSubmit={handleSubmit(formSubmit)}
                    >
                        <FormLabel>Marca</FormLabel>
                        <Input placeholder="Marca" {...register("brand")} />
                        {errors.brand?.message}
                        <FormLabel>Modelo</FormLabel>
                        <Input placeholder="Modelo" {...register("model")} />
                        {errors.model?.message}
                        <Flex gap={"2rem"}>
                            <Flex flexDir={"column"}>
                                <FormLabel>Ano</FormLabel>
                                <Input
                                    type="number"
                                    placeholder="Ano"
                                    {...register("year")}
                                />
                                {errors.year?.message}
                            </Flex>
                            <Flex flexDir={"column"}>
                                <FormLabel>Combustível</FormLabel>
                                <Select
                                    placeholder="Tipo de Combustível"
                                    {...register("fuel")}
                                >
                                    <option value="1">Flex</option>
                                    <option value="2">Híbrido</option>
                                    <option value="3">Elétrico</option>
                                </Select>
                                {errors.fuel?.message}
                            </Flex>
                        </Flex>
                        <Flex gap={"2rem"}>
                            <Flex flexDir={"column"}>
                                <FormLabel>Quilometragem</FormLabel>
                                <Input
                                    placeholder="Quilometragem"
                                    {...register("mileage")}
                                />
                                {errors.mileage?.message}
                            </Flex>
                            <Flex flexDir={"column"}>
                                <FormLabel>Cor</FormLabel>
                                <Input
                                    placeholder="Cor"
                                    {...register("color")}
                                />
                                {errors.color?.message}
                            </Flex>
                        </Flex>
                        <Flex gap={"2rem"}>
                            <Flex flexDir={"column"}>
                                <FormLabel>Preço tabela Fipe</FormLabel>
                                <Input
                                    placeholder="Preço tabela FIPE"
                                    value={priceFipe}
                                    {...register("priceFipe")}
                                />
                                {errors.priceFipe?.message}
                            </Flex>
                            <Flex flexDir={"column"}>
                                <FormLabel>Preço</FormLabel>
                                <Input
                                    placeholder="Preço"
                                    {...register("price")}
                                />
                                {errors.price?.message}
                            </Flex>
                        </Flex>
                        <FormLabel>Descrição</FormLabel>
                        <Textarea
                            placeholder="Descrição"
                            {...register("description")}
                        />
                        {errors.description?.message}
                        <FormLabel>Imagem de Capa</FormLabel>
                        <Input
                            placeholder="https://image.com"
                            {...register("frontImg")}
                        />
                        {errors.frontImg?.message}
                        <Flex flexDir={"column"} gap={"1rem"}>
                            {fields.map((item, index) => (
                                <>
                                    <Flex
                                        key={item.id}
                                        alignItems={"flex-end"}
                                        gap={"2rem"}
                                    >
                                        <Flex flexDir={"column"} w={"100%"}>
                                            <FormLabel>
                                                {index + 1}° Imagem da galeria
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
                            ))}
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
                        <ModalFooter>
                            <Button
                                _hover={{ bg: "grey.5" }}
                                mr={3}
                                onClick={onClose}
                            >
                                Cancelar
                            </Button>
                            <Button
                                bg={"brand.3"}
                                color={"white"}
                                _hover={{ bg: "brand.2" }}
                                type="submit"

                            >
                                Criar anúncio
                            </Button>
                        </ModalFooter>
                    </FormControl>
                </ModalBody>
            </ModalContent>
        </Modal >
    );
}
function isGoodDeal(data: any) {
    throw new Error("Function not implemented.");
}

