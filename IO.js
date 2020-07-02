import React from "react";
import { View, Text } from "react-native";

export default class IO extends React.Component {

    static input = (JSONdata) => {
        //key.DB = JSONdata; //input this JSON
        console.log("complete input"); //return complete-signal
        console.log(JSONdata);
    };
    static delete = (key) => {
        //key.DB = null; // delete file
        console.log("complete delete"); //return complete-signal
    };
    static tag = (tagJSON) => {
        console.log("JSONdatas"); // return JSON in tagging datas 
    };
    static edit = (key) => {
        console.log("keyJSON"); // return this JSON
    };
    static All = () => {
        consol.log("DBJSON"); //return JSON in All datas
    };

    render() {
        return (
            {
                title: "title body",
                body: "body body"
            }
        )
    };
}
