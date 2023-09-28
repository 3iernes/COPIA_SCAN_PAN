import { SafeAreaView, StyleSheet, View } from "react-native";
import { Text, Avatar, IconButton, useTheme } from "react-native-paper";
import { useAppContext } from "../../context/useContext";

const Fichada = () => {
  const { data, apiResponse } = useAppContext();
  const theme = useTheme();
  const active = apiResponse.activo;
  const error = apiResponse.error;
  const text = error
    ? "El codigo no esta registrado en el sistema"
    : active
    ? "El estado a cambiado a ACTIVO"
    : "El estado a cambiado a DESACTIVO";
  return (
    <SafeAreaView style={styles.container}>
      {error ? (
        <Avatar.Icon
          size={54}
          icon={"comment-remove"}
          style={{ backgroundColor: theme.colors.error }}
        />
      ) : (
        <View style={styles.icons}>
          <Avatar.Icon
            size={34}
            icon={active ? "smart-card-off" : "smart-card"}
            style={{
              backgroundColor: active
                ? theme.colors.error
                : theme.colors.primary,
            }}
          />
          <IconButton icon="arrow-right-thick" size={20} />
          <Avatar.Icon
            size={54}
            icon={!active ? "smart-card-off" : "smart-card"}
            style={{
              backgroundColor: !active
                ? theme.colors.error
                : theme.colors.primary,
            }}
          />
        </View>
      )}
      <Text variant="titleMedium" style={styles.text}>
        {text}
      </Text>
      <Text variant="labelMedium">{data.data}</Text>
    </SafeAreaView>
  );
};

export default Fichada;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    marginBottom: 15,
    marginTop: 5,
  },
  icons: {
    flexDirection: "row",
    alignItems: "center",
  },
});
