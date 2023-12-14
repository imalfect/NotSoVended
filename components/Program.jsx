import { useState } from "react";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
export default function Program() {
  const [text, setText] = useState("");
  return (
    <View>
      <Text variant="titleLarge">Enter the package name</Text>
      <TextInput
        onChangeText={(text) => setText(text)}
        label="Package Name"
        placeholder="com.imalfect.cheese"
      />
      <Button mode="contained" onPress={() => console.log("Pressed")}>
        Change the package installer
      </Button>
    </View>
  );
}
