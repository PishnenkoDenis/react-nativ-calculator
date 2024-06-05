import { FlatList, StyleSheet, Text, View } from "react-native";

export const History = ({ route }: any) => {
  const { history } = route.params;
  return (
    <View style={styles.wrapper}>
      <FlatList
        data={history}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
});
