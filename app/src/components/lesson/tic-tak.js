import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

const TicTac = () => {
  const [boxes, setBoxes] = useState(["", "", "", "", "", "", "", "", ""]);

  const [lastClick, setLastClick] = useState("");
  const [winner, setWinner] = useState("");
  const checkWinner = (boxes) => {
    console.log("boxes", boxes);
    // 1. Хэвтээ шалгалт
    if (boxes[0] === boxes[1] && boxes[0] === boxes[2]) {
      console.log("Winner1", boxes[0]);
      setWinner(boxes[0]);
    } else if (boxes[3] === boxes[4] && boxes[3] === boxes[5]) {
      console.log("Winner2", boxes[3]);
      setWinner(boxes[3]);
    }
    // 2. Босоо шалгалт
    if (boxes[0] !== "" && boxes[0] === boxes[3] && boxes[0] === boxes[6]) {
      console.log("Winner3", boxes[0]);
      setWinner(boxes[0]);
    } else if (
      boxes[1] !== "" &&
      boxes[1] === boxes[4] &&
      boxes[1] === boxes[7]
    ) {
      console.log("Winner4", boxes[1]);
      setWinner(boxes[1]);
    } else if (boxes[2] === boxes[5] && boxes[2] === boxes[8]) {
      console.log("Winner5", boxes[2]);
      setWinner(boxes[2]);
    }
    // 3. Ташуу шалгалт
  };
  const handleClick = (i) => {
    if (boxes[i] === "") {
      let newValue = lastClick === "X" ? "O" : "X";
      boxes[i] = newValue;
      setBoxes([...boxes]);
      setLastClick(newValue);
      // Check winner
      checkWinner(boxes);
    }
  };
  const handleRestart = () => {
    setBoxes(["", "", "", "", "", "", "", "", ""]);
    setWinner("");
    setLastClick("");
  };
  return (
    <View style={styles.container}>
      {winner !== "" && <Text style={styles.winner}>Winner: {winner}</Text>}
      {winner !== "" && (
        <TouchableOpacity onPress={handleRestart} style={styles.restart}>
          <Text style={styles.winner}>Restart</Text>
        </TouchableOpacity>
      )}

      <View style={[styles.tictac, styles.shadow]}>
        {boxes.map((box, i) => (
          <TouchableOpacity onPress={() => handleClick(i)} style={styles.box}>
            <Text style={styles.text}> {box}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default TicTac;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "pink",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tictac: {
    height: 300,
    width: 300,
    backgroundColor: "white",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: 5,
    flexWrap: "wrap",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.55,
    shadowRadius: 14.78,

    elevation: 22,
  },
  box: {
    width: 90,
    height: 90,
    backgroundColor: "pink",
    borderRadius: 15,
    marginTop: 5,
    justifyContent: "center",
  },
  text: {
    fontSize: 50,
  },
  winner: {
    fontSize: 50,
    color: "green",
  },
  restart: {
    backgroundColor: "white",
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 20,
    marginBottom: 5,
  },
});
