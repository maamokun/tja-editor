"use client";
import { Card, CardBody, Flex, Input } from "@chakra-ui/react";
import React from "react";

export default function Home() {
    const [value, setValue] = React.useState("");
    return (
        <main className="h-screen w-screen">
            <Flex className="h-full w-full p-10">
                <Card flex={1} m={2}>
                    <CardBody>Editor</CardBody>
                </Card>
                <Card flex={1} m={2}>
                    <CardBody>{value}</CardBody>
                </Card>
            </Flex>
        </main>
    );
}
