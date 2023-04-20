import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Filter from "./components/Filter";
import Breeds from "./components/Breeds";
import { useState } from "react";
import { filters } from "./libs/filters";

export default function App() {
  const [filter, setFilter] = useState<string>(filters[0].id);

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.heading}>
        <Text style={styles.header}>Category</Text>
      </View>
      <Filter filter={filter} setFilter={setFilter} />
      <Breeds filter={filter} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6F6",
    paddingTop: 80,
  },
  heading: {
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
