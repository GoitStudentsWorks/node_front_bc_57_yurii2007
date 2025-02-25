import { useModal } from "../../context/ModalContext/ModalContextProvider";

import SettingModal from "../SettingModal/SettingModal";
import LogoutModal from "../LogOut/LogOut";
import {
  LogOut,
  Setting,
  Container,
  Button,
  Text,
  ContainerWidth,
} from "./LogoModal.styled";

export const LogoModal = () => {
  const toggleModal = useModal();

  return (
    <ContainerWidth onClick={() => toggleModal()}>
      <Container onClick={(e) => e.stopPropagation()}>
        <Button
          type="button"
          onClick={() =>
            toggleModal(<SettingModal size={"big"} title={"Setting"} />)
          }
        >
          <Setting />
          <Text>Setting</Text>
        </Button>
        <Button
          type="button"
          onClick={() =>
            toggleModal(<LogoutModal size="small" title="Log out" />)
          }
        >
          <LogOut />
          <Text>Log out</Text>
        </Button>
      </Container>
    </ContainerWidth>
  );
};
