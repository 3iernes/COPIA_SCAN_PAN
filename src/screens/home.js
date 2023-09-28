import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, Image } from "react-native";
import { Text, Card } from "react-native-paper";
import ModalContainer from "../components/modalContainer";
import { useAppContext } from "../context/useContext";

const Home = ({ navigation }) => {
  const { setPoint, modal } = useAppContext();
  const [visible, setVisible] = useState(false);
  const [type, setType] = useState(null);
  const scannerNav = (point) => {
    setPoint(point);
    navigation.navigate("scanner");
  };
  const cardsData = [
    {
      point: "registro",
      title: "Registro Codigo de Barra",
      desc: "Registrar un nuevo codigo de barra o revisar si esta cargado en el sistema.",
    },
    {
      point: "fichada",
      title: "Fichada por Codigo de Barra",
      desc: "Cambiar el estado de un codigo de barra.",
    },
    {
      point: "estado",
      title: "Estado por Codigo de Barra",
      desc: "Revisar el estado actual de un codigo de barra.",
    },
  ];
  const Cards = () => {
    return cardsData.map((d, i) => (
      <Card key={i} style={styles.cards} onPress={() => scannerNav(d.point)}>
        <Card.Content>
          <Text variant="titleMedium">{d.title}</Text>
          <Text variant="bodyMedium">{d.desc}</Text>
        </Card.Content>
      </Card>
    ));
  };
  useEffect(() => {
    if (modal) {
      setType(modal);
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [modal]);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <Image
        style={styles.logo}
        source={require("../assets/logiports_logo.png")}
      />
      <Cards />
      <ModalContainer visible={visible} setVisible={setVisible} type={type} />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 10,
  },
  cards: {
    width: "95%",
    marginVertical: 5,
  },
  logo: {
    width: "80%",
    height: 180,
    marginBottom: 100,
  },
});
