import { View } from "react-native";
import { Header } from "../../components/Header";
import { styles } from "./styles";

export const HomeScreen = () => {
  return <View style={styles.container}>
    <Header title="Filmes"/>
  </View>
}