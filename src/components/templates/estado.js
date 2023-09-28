import { SafeAreaView, StyleSheet } from "react-native";
import { Text, Avatar, useTheme } from "react-native-paper";
import { useAppContext } from "../../context/useContext";

const Estado = () => {
  const { data, apiResponse } = useAppContext();
  const theme = useTheme();
  const active = apiResponse.activo;
  const text = active ? "Estado actual ACTIVO" : "Estado actual DESACTIVO";
  return (
    <SafeAreaView style={styles.container}>
      <Avatar.Icon
        size={54}
        icon={!active ? "smart-card-off" : "smart-card"}
        style={{
          backgroundColor: !active ? theme.colors.error : theme.colors.primary,
        }}
      />
      <Text variant="titleMedium" style={styles.text}>
        {text}
      </Text>
      <Text variant="labelMedium">{data.data}</Text>
    </SafeAreaView>
  );
};

export default Estado;

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
