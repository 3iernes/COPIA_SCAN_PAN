import { StatusBar } from "expo-status-bar";
import { useState,useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
//Context
import { useAppContext } from "../context/useContext";
//Axios
import axios from "axios";
//Camara
//import { Camera } from "expo-camera";
import {BarCodeScanner} from "expo-barcode-scanner"

const Scanner = ({ navigation }) => {
  const { point, setModal, setData, setApiResponse } = useAppContext();
  const [scanned, setScanned] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);
  
  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

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
      setModal(error);
      navigation.navigate("home");
    }
  };

  if (hasPermission === null) {
    return <Text>Solicitando permiso para acceder a la camara</Text>;
  }
  if (hasPermission === false) {
    return <Text>Sin acceso a la camara</Text>;
  }

  return (
    <>
      <StatusBar style="light" />
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleScanned}
        style={StyleSheet.absoluteFillObject}
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
