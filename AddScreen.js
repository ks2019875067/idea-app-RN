import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import IO from "./IO";

export default class AddScreen extends React.Component {
    state = {
        title: "이것은 타이틀입니다",
        body: "이것은 body입니다"
    };

    _saveButtonClicked = () => {
        IO.input(this.state);
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>this is AddScreen!!</Text>
                <TouchableOpacity
                    onPress={this._saveButtonClicked}
                >
                    <Text>저장하기 버튼</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 50
    },
})