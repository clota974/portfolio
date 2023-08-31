import { Flex } from "@chakra-ui/react";
import { Logo } from "../Logo";
import MobileDrawer from "./MobileDrawer";
import { useState } from "react";

export default function MobileHeader() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (<header>
        <Flex p={20} direction='row' justifyContent='space-between' alignItems='flex-start'>
            <Logo />
            <MobileDrawer isOpen={isOpen} toggle={toggle} />
        </Flex>
    </header>)
}