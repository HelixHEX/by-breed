import { View, Text } from "react-native";

interface Props {
  title: string;
}

const Item = ({title}: Props) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default Item;
