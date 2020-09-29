import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { IMAGE } from "./constants/image";

export class CustomHeader extends Component {
  render() {
    let { navigation, title, isHome } = this.props;
    return (
      <View style={{ flexDirection: "row", height: 50 }}>
        <View style={{ flex: 1, justifyContent: "center" }}>
          {isHome ? (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <Image
                style={{ width: 30, height: 30, marginLeft: 5 }}
                source={IMAGE.HEADER_MENU}
                resizeMode="contain"
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={{ flexDirection: "row", alignItems: "center" }}
              onPress={() => navigation.goBack()}
            >
              <Image
                style={{ width: 22, height: 20, arginLeft: 5 }}
                source={IMAGE.HEADER_BACK}
                resizeMode="contain"
              />
              <Text>Back</Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={{ flex: 1.5, justifyContent: "center" }}>
          <Text style={{ textAlign: "center" }}>{title}</Text>
        </View>
        <View style={{ flex: 1 }}></View>
      </View>
    );
  }
}
