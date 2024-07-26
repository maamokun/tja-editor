"use client";
import {
    Box,
    Flex,
    Heading,
    Text,
    Center,
    Card,
    CardBody,
    CardHeader,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from "@chakra-ui/react";
import AudioPlayer from "react-h5-audio-player";
import React, { useState } from "react";

export function Header() {
    const [file, setFile] = useState<File | null>();
    const [fileName, setFileName] = useState<string>("");

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setFile(file);
        setFileName(file.name);
    };
    
    return (
        <main>
            <Heading
                as="h1"
                size="2xl"
                className="text-center text-white mt-10"
            >
                TJAEditor
            </Heading>
            <Heading as="h1" size="md" className="text-center text-white mt-2">
                by MikanDev
            </Heading>
            <Card width={{ base: "90%" }} height={100} mx="auto" mt="5">
                <CardBody
                    display="flex"
                    justifyContent="center"
                >
                    <Flex justifyContent="space-between" alignItems="center">
                        <Button colorScheme="blue" className="mr-1">
                            .tjaファイルを読み込む
                        </Button>
                        <Button colorScheme="green" className="ml-1 mr-1">
                            新規作成
                        </Button>
                    </Flex>
                    </CardBody>
            </Card>
        </main>
    );
}
