import { useState } from "react";
import { TouchableOpacity, StyleSheet, Text, Modal, View } from "react-native";

interface Props {
  item: {
    [attribute: string]: number | string;
  };
}

const Card = ({ item }: Props) => {
  const [modalVisible, setModalVisible] = useState(false);
  let itemOptions = Object.keys(item).map((key, index) => {
    if (key !== "breed") {
      return (
        <Text style={modalStyles.itemOption} key={index}>
          - <Text style={modalStyles.itemOptionHeader}>{key}</Text>: {item[key]}
        </Text>
      );
    }
  });
  return (
    <>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.container}
      >
        <Text style={styles.label}>{item.breed}</Text>
      </TouchableOpacity>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={modalStyles.container}>
          <View style={modalStyles.heading}>
            
            <Text style={modalStyles.header}>{item.breed}</Text>
            <TouchableOpacity onPress={() =>setModalVisible(false)} style={modalStyles.closeBtn}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
          {itemOptions}
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: 20,
    height: 50,
    backgroundColor: "#fff",
    width: "100%",
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },

  imgContainer: {
    width: 60,
    height: "100%",
    borderRadius: 10,
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 10,
  },
});

const modalStyles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    marginTop: "70%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    // alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  heading: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  closeBtn: {
    alignSelf: "center",
  },
  header: {
    fontWeight: "bold",
    fontSize: 25,
  },
  itemOption: {
    marginTop: 10,
  },
  itemOptionHeader: {
    fontWeight: "bold",
  },
});

export default Card;
