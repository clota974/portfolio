import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Flex, Icon, Text, VStack } from "@chakra-ui/react";
import { motion, stagger } from 'framer-motion';

export interface MenuDrawerProps {
    isOpen: boolean;
    toggle: () => void;
    lightTheme?: boolean;
}
const variants = {
    open: { opacity: 1, y: 0, display: 'block', transition: { staggerChildren: 0.07, type: 'tween' } },
    closed: { opacity: 0, y: -20, display: 'none', transition: { staggerChildren: 0 } },
};

const Link = ({ children, href }: { children: React.ReactNode; href: string; }) => (
    <motion.a href={href} variants={variants}>
        <Text color="white" fontSize={36}>{children}</Text>
    </motion.a>
)

export default function MenuDrawer({ isOpen, toggle, lightTheme = false }: MenuDrawerProps) {
    const MotionVStack = motion(VStack);
    

    return (
        <>
            <Box pos='fixed' height='100vh' width='100vw' top={0} left={0} bg='#0007' display={isOpen ? 'flex' : 'none'} zIndex={-1} />
            <Flex direction="column" pos="relative" zIndex={10} alignItems='flex-end' justifyItems='center'>
                <Icon as={HamburgerIcon} onClick={toggle} textColor={lightTheme ? '#000' : '#FFF'} boxSize={21} justifyItems='center' role="button"/>
                <MotionVStack mt={20} variants={variants} initial="closed" animate={isOpen ? 'open' : 'closed'} spacing={1} display={'flex'} alignItems='flex-end' transition={{ delayChildren: 3 }}>
                        <Link href="#">projects</Link>
                        <Link href="#">about</Link>
                </MotionVStack>
            </Flex>
        </>
    )
}