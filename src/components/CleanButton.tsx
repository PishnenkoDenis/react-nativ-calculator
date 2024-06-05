import { FC } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export interface ICleanButtonProps {
  value: string;
  onPress: () => void;
}

export const CleanButton: FC<ICleanButtonProps> = ({ value, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => onPress()}>
      <Text style={styles.text}>{value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "gray",
    padding: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});
