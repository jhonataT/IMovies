import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from "./styles"

export const Header = ({ title, hasBackIcon }) => {
  return <View style={styles.container}>
    {hasBackIcon &&
      <TouchableOpacity>
        <Ionicons
          name="arrow-back"
          size={32}
          color='#fff'
        />
      </TouchableOpacity>
    }
    <Text style={styles.title}>
      {title}
    </Text>
  </View>
}