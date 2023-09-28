import { SafeAreaView, StyleSheet } from "react-native";
import { Text, Avatar } from "react-native-paper";
import { useAppContext } from "../../context/useContext";

const Registro = () => {
  const { data, apiResponse } = useAppContext();
  const creado = apiResponse.creado ? true : false;
  const text = creado
    ? "Codigo de barra creado éxitosamente"
    : "El codigo de barra ya existe en el sistema";
  return (
    <SafeAreaView style={styles.container}>
      <Avatar.Icon size={64} icon={`comment-${creado ? "check" : "alert"}`} />
      <Text variant="titleMedium" style={styles.text}>
        {text}
      </Text>
      <Text variant="labelMedium">{data.data}</Text>
    </SafeAreaView>
  );
};

export default Registro;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    marginBottom: 15,
    marginTop: 5,
  },
});
