import { useEffect } from "react";
import { cats, dogs } from "../libs/breed";
import { FlatList } from "react-native";
import Card from "./Card";

interface Props {
  filter: string;
}

const Breeds = ({ filter }: Props) => {
  const data = filter === "cat" ? cats : dogs;

  return (
    <FlatList
      style={{ marginTop: 20, paddingHorizontal: 20 }}
      data={data}
      keyExtractor={(_item, index) => `${index}`}
      renderItem={({ item }) => <Card item={item} />}
    />
  );
};

export default Breeds;
