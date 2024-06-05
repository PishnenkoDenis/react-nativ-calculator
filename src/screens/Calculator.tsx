import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NumberButton } from "../components/NumberButton";
import { OperationButton } from "../components/OperationButton";
import { Operations } from "../types";
import { CleanButton } from "../components/CleanButton";
import { useState } from "react";

export const Calculator = ({ navigation }: any) => {
  const [result, setResult] = useState<number | undefined>();
  const [operation, setOperation] = useState<Operations>();
  const [history, setHistory] = useState<string[]>([]);

  const navigateHistory = () => {
    navigation.navigate("History", { history });
  };

  const cleanUp = () => {
    setResult(undefined);
    setOperation(undefined);
  };

  const operate = (value: number) => {
    if (!result) {
      setResult(value);
      return;
    }

    switch (operation) {
      case Operations.PLUS:
        setHistory((prev) => [
          ...prev,
          `${result} + ${value} = ${result + value}`,
        ]);
        setResult(result + value);
        setOperation(undefined);
        break;
      case Operations.MINUS:
        setHistory((prev) => [
          ...prev,
          `${result} - ${value} = ${result - value}`,
        ]);
        setResult(result - value);
        setOperation(undefined);
        break;
      case Operations.MULTIPLY:
        setHistory((prev) => [
          ...prev,
          `${result} * ${value} = ${result * value}`,
        ]);
        setResult(result * value);
        setOperation(undefined);
        break;
      case Operations.DIVIDE:
        setHistory((prev) => [
          ...prev,
          `${result} / ${value} = ${result / value}`,
        ]);
        setResult(result / value);
        setOperation(undefined);
        break;
    }
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.result}>{result}</Text>
      <View style={styles.container}>
        <NumberButton value={0} onPress={operate} />
        <NumberButton value={1} onPress={operate} />
        <NumberButton value={2} onPress={operate} />
        <NumberButton value={3} onPress={operate} />
        <OperationButton value={Operations.PLUS} onPress={setOperation} />
      </View>
      <View style={styles.container}>
        <NumberButton value={4} onPress={operate} />
        <NumberButton value={5} onPress={operate} />
        <NumberButton value={6} onPress={operate} />
        <NumberButton value={7} onPress={operate} />
        <OperationButton value={Operations.MINUS} onPress={setOperation} />
      </View>
      <View style={styles.container}>
        <NumberButton value={8} onPress={operate} />
        <NumberButton value={9} onPress={operate} />
        <OperationButton value={Operations.MULTIPLY} onPress={setOperation} />
        <OperationButton value={Operations.DIVIDE} onPress={setOperation} />
        <CleanButton value="C" onPress={cleanUp} />
      </View>
      <TouchableOpacity onPress={navigateHistory}>
        <Text style={styles.history}>Go to history</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
  result: {
    color: "black",
    fontWeight: "bold",
    fontSize: 30,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  history: {
    fontWeight: "bold",
    fontSize: 20,
    padding: 10,
  },
});
