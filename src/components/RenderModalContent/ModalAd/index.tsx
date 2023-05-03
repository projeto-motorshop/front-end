import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Select,
    Textarea,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { ICarsRequest } from "../../../interfaces/car";
import { reqCarSchema } from "../../../schemas/car.schema";
import api from "../../../service/api";
import { useUserContext } from "../../../providers/UserContext";
import { useCarContext } from "../../../providers/CarContext";

export function CreateAdModal() {
    const { onClose } = useUserContext();
    const { createCarFunc, priceFipe, setPriceFipe, typesFuel } =
        useCarContext();
    const [optionsCarsFiltered, setOptionsCarsFiltered] = useState([]);
    const [optionsBrand, setOptionsBrand] = useState("");
    const [optionsModel, setOptionsModel] = useState("");
    const [optionsYear, setOptionsYear] = useState("");
    const [optionsFuel, setOptionsFuel] = useState("");

    useEffect(() => {
        async function fetchData() {
            try {
                const { data } = await api.get(
                    `https://kenzie-kars.herokuapp.com/cars?brand=${optionsBrand}`
                );
                setOptionsCarsFiltered(data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, [optionsBrand]);

    useEffect(() => {
        const priceFipeFunc = async () => {
            const fipeData = await api.get(
                `https://kenzie-kars.herokuapp.com/cars/unique?brand=${optionsBrand}&name=${encodeURIComponent(
                    optionsModel
                )}&year=${optionsYear}&fuel=${optionsFuel}`
            );
            setPriceFipe(fipeData.data.value);
        };
        priceFipeFunc();
    }, [optionsFuel, optionsModel, optionsYear]);

    const names = Array.isArray(optionsCarsFiltered) && [
        ...new Set(optionsCarsFiltered?.map((car: any) => car.name)),
    ];

    const filteredCars =
        Array.isArray(optionsCarsFiltered) &&
        optionsCarsFiltered &&
        optionsCarsFiltered?.filter((car: any) => car.name === optionsModel);

    const years = Array.isArray(filteredCars) && [
        ...new Set(filteredCars?.map((car: any) => car.year)),
    ];
    const fuels = Array.isArray(filteredCars) && [
        ...new Set(filteredCars?.map((car: any) => car.fuel)),
    ];

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
        <>
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
                        onSubmit={handleSubmit(createCarFunc)}
                    >
                        <FormLabel>Marca</FormLabel>
                        <Select
                            {...register("brand")}
                            onChange={(e) => setOptionsBrand(e.target.value)}
                        >
                            <option value="" selected disabled hidden>
                                Marca
                            </option>
                            <option defaultValue="chevrolet">chevrolet</option>
                            <option defaultValue="citroën">citroën</option>
                            <option defaultValue="fiat">fiat</option>
                            <option defaultValue="ford">ford</option>
                            <option defaultValue="honda">honda</option>
                            <option defaultValue="hyundai">hyundai</option>
                            <option defaultValue="nissan">nissan</option>
                            <option defaultValue="peugeot">peugeot</option>
                            <option defaultValue="renault">renault</option>
                            <option defaultValue="toyota">toyota</option>
                            <option defaultValue="volkswagen">
                                volkswagen
                            </option>
                        </Select>
                        <FormLabel>Modelo</FormLabel>
                        <Select
                            {...register("model")}
                            onChange={(e) => setOptionsModel(e.target.value)}
                            disabled={!optionsBrand}
                        >
                            <option value="" selected disabled hidden>
                                Modelo
                            </option>
                            {names &&
                                names?.map((elem) => {
                                    return (
                                        <>
                                            <option key={elem} value={elem}>
                                                {elem}
                                            </option>
                                        </>
                                    );
                                })}
                        </Select>
                        <Flex gap={"2rem"}>
                            <Flex flexDir={"column"} w={"50%"}>
                                <FormLabel>Ano</FormLabel>
                                <Select
                                    {...register("year")}
                                    onChange={(e) =>
                                        setOptionsYear(e.target.value)
                                    }
                                    disabled={!optionsModel}
                                >
                                    <option value="" selected>
                                        Ano
                                    </option>
                                    {years &&
                                        years?.map((elem) => {
                                            return (
                                                <>
                                                    <option
                                                        key={elem}
                                                        value={elem}
                                                    >
                                                        {elem}
                                                    </option>
                                                </>
                                            );
                                        })}
                                </Select>
                            </Flex>
                            <Flex flexDir={"column"} w={"50%"}>
                                <FormLabel>Combustível</FormLabel>
                                <Select
                                    {...register("fuel")}
                                    onChange={(e) =>
                                        setOptionsFuel(
                                            e.target.selectedOptions[0].value
                                        )
                                    }
                                    disabled={!optionsYear}
                                >
                                    <option value="" selected>
                                        Combustível
                                    </option>
                                    {fuels &&
                                        fuels?.map((elem) => {
                                            return (
                                                <>
                                                    <option
                                                        key={elem}
                                                        value={elem}
                                                    >
                                                        {typesFuel(elem)}
                                                    </option>
                                                </>
                                            );
                                        })}
                                </Select>
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
                            resize={"none"}
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
                                bg={"brand.2"}
                                color={"white"}
                                _hover={{ bg: "brand.3" }}
                                type="submit"
                            >
                                Criar anúncio
                            </Button>
                        </ModalFooter>
                    </FormControl>
                </ModalBody>
            </ModalContent>
        </>
    );
}
function isGoodDeal(data: any) {
    throw new Error("Function not implemented.");
}
