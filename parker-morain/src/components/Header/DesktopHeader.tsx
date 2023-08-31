import { Box, Flex, Grid, Link } from "@chakra-ui/react";
import { Logo } from "../Logo";
import Footer from "../Footer";

export default function DesktopHeader() {
  return <Flex direction='column' >
    <Box>
      <Logo />
      <header>
        <nav>
          <Link href="#">projects</Link>
          <Link href="#">about</Link>
        </nav>
      </header>
    </Box>
    <Footer />
  </Flex>
}