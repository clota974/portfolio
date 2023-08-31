import { Hide, Show } from "@chakra-ui/react";
import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";

export default function Header() {
    return <>
      <Hide above="md">
        <MobileHeader />
      </Hide>
      <Show above="md">
        <DesktopHeader />
      </Show>
    </>
}