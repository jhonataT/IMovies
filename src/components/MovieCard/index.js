import { Image, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"

export const MovieCard = ({ title, img, score, handleClick }) => {
    return <TouchableOpacity style={styles.container} onPress={handleClick}>
        <Image
            style={styles.banner}
            source={{ uri: img }}
        />
        <View style={styles.content}>
            <Text style={styles.title}>{title}</Text>
            {!Number.isNaN(score) && 
                <View style={styles.scoreContainer}>
                    <Text style={[styles.title, styles.score]}>
                        {score}%
                    </Text>
                </View>
            }
        </View>
    </TouchableOpacity>
}