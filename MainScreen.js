import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AddScreen from "./AddScreen";


export default class MainScreen extends React.Component {
    render() {
        const { navigation } = this.props;

        return (
            <View style={styles.container}>
                <Text>this is Test</Text>
                <TouchableOpacity
                    onPress={() => {navigation.push('add')}}
                >
                    <Text>추가하기 버튼</Text>
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