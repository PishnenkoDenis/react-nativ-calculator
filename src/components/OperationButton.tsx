import { FC } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Operations } from "../types";

export interface IOperateButtonProps {
  value: Operations;
  onPress: (value: Operations) => void;
}

export const OperationButton: FC<IOperateButtonProps> = ({
  value,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => onPress(value)}>
      <Text style={styles.text}>{value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "orange",
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
