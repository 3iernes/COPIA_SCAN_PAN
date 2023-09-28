import { StyleSheet } from "react-native";
import { Modal } from "react-native-paper";
import { useAppContext } from "../context/useContext";
//Templates
import Error from "./templates/error";
import Registro from "./templates/registro";
import Fichada from "./templates/fichada";
import Estado from "./templates/estado";

const ModalContainer = ({ visible, setVisible, type }) => {
  const { setModal } = useAppContext();
  const hide = () => {
    setVisible(false);
    setModal(false);
  };
  const TEMPLATE_TYPE = {
    registro: <Registro />,
    fichada: <Fichada />,
    estado: <Estado />,
    error: <Error />,
  };
  const RENDER_TYPE = TEMPLATE_TYPE[type] ? TEMPLATE_TYPE[type] : "error";
  return (
    <Modal
      visible={visible}
      onDismiss={hide}
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      {RENDER_TYPE}
    </Modal>
  );
};

export default ModalContainer;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  content: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 5,
  },
});
