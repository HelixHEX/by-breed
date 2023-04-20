import { useState } from "react";
import { View, TouchableOpacity, Image, StyleSheet, Text } from "react-native";
import {filters} from "../libs/filters";

interface Props {
  filter: string
  setFilter: React.Dispatch<React.SetStateAction<string>>
}
const Filter = ({filter, setFilter}: Props) => {

  return (
    <View style={filterStyles.container}>
      {filters.map((filterItem, index) => (
        <TouchableOpacity
          style={[
            { backgroundColor: filter === filterItem.id ? "#5CC8FF" : "#fff" },
            filterStyles.body,
          ]}
          key={index}
          onPress={() => setFilter(filterItem.id)}
        >
          <View
            style={[
              filterStyles.imgContainer,
              { backgroundColor: filter === filterItem.id ? "#34A1D7" : "#fff" },
            ]}
          >
            <Image style={filterStyles.img} source={filterItem.img} />
          </View>
          <Text style={filterStyles.label}>{filterItem.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const filterStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 20,
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  body: {
    width: 150,
    height: 50,
    paddingVertical: 10,
    borderRadius: 100,
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 4,
  },
  imgContainer: {
    width: 40,
    height: 40,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 30,
    height: 30,
  },
  label: {
    marginLeft: 4,
  },
});

export default Filter;
