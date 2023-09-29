import { Text } from "react-native-paper";
import { useAppContext } from "../../context/useContext";

const Error = () => {
  const {data} = useAppContext()
  return <Text>{data ? data.message : "Error"}</Text>;
};

export default Error;
