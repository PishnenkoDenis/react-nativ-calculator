import { FC } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export interface INumberButtonProps {
  value: number;
  onPress: (value: number) => void;
}

export const NumberButton: FC<INumberButtonProps> = ({ value, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => onPress(value)}>
      <Text style={styles.text}>{value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "blue",
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
