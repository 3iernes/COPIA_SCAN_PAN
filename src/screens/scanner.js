import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
//Context
import { useAppContext } from "../context/useContext";
//Axios
import axios from "axios";
//Camara
import { Camera } from "expo-camera";

const Scanner = ({ navigation }) => {
  const { point, setModal, setData, setApiResponse } = useAppContext();
  const [scanned, setScanned] = useState(false);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const handleScanned = async (data) => {
    setScanned(true);
    try {
      const values = {
        CB: data.data,
        Token: "fedeAcostaHizoEsto",
      };
      let api_response;
      if (point === "fichada") {
        api_response = await axios.post(
          "http://logiports.duckdns.org:5555/codigo-barra",
          values
        );
      } else {
        api_response = await axios.put(
          "http://logiports.duckdns.org:5555/codigo-barra",
          values
        );
      }
      setData(data);
      setApiResponse(api_response.data);
      setModal(point);
      navigation.navigate("home");
    } catch (error) {
      setModal("error");
      navigation.navigate("home");
    }
  };
  if (!permission) {
    return <View />;
  }
  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>Se necesitan permisos para activar la camara</Text>
        <Button onPress={requestPermission} title="Aceptar permisos" />
      </View>
    );
  }
  return (
    <>
      <StatusBar style="light" />
      <Camera
        onBarCodeScanned={scanned ? undefined : handleScanned}
        style={styles.scanner}
      />
    </>
  );
};

export default Scanner;

const styles = StyleSheet.create({
  scanner: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
});
