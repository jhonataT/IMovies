import { TouchableOpacity, View } from "react-native"
import Modal from "react-native-modal";
import { styles } from "./styles"
import { Ionicons } from "@expo/vector-icons";

export const CustomModal = ({
    isModalOpen,
    handleCloseModal,
    children
}) => {
    return <Modal
        isVisible={isModalOpen}
    >
        <View style={styles.container}>
            <TouchableOpacity
                onPress={handleCloseModal}
                style={styles.closeButton}
            >
                <Ionicons
                    name='md-close-circle'
                    size={32}
                    color='red'
                />
            </TouchableOpacity>
            <View style={styles.content}>
                {children}
            </View>
        </View>
    </Modal>
}