import { StatusBar } from "expo-status-bar";
import React from "react";
import Expo from "expo";
import {
    NativeBaseProvider,
    List,
    Modal,
    Input,
    Button,
    Fab,
    Text,
    View,
    VStack,
    IconButton,
    Icon,
    HStack,
} from "native-base";
import { StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import * as SQLite from "expo-sqlite";
import * as FileSystem from "expo-file-system";
import { Asset } from "expo-asset";

function Screen1() {
    const db = SQLite.openDatabase("db.testDb");
    const [items, setItems] = React.useState([]);

    React.useEffect(() => {
        db.transaction((tx) => {
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, description TEXT)"
            );
        });
    }, [db]);

    const addItem = ({ name, description }) => {
        db.transaction((tx) => {
            tx.executeSql(
                "insert into items (name, description) values (?, ?)",
                [name, description],
                (obj, res) => {
                    setItems((state) =>
                        state.concat({
                            id: res.insertId,
                            name,
                            description,
                        })
                    );
                }
            );
        });
    };
    const handlePress = () => {
        addItem({ name: "item", description: "komentarz" });
    };
    return (
        <React.Fragment>
            <View style={styles.container}>
                <ScrollView>
                    <List w={"100%"} borderWidth={0}>
                        {items.map((item) => (
                            <List.Item p={5} fontSize={40} w={"100%"}>
                                <VStack spacing={2} flexGrow={1}>
                                    <Text bold fontSize={18}>
                                        {item.name}
                                    </Text>
                                    <Text>{item.description}</Text>
                                </VStack>
                            </List.Item>
                        ))}
                    </List>
                </ScrollView>
                <Fab
                    bg="teal.200"
                    onPress={handlePress}
                    icon={<Icon name="plus" type="AntDesign" size={10} />}
                />
            </View>
        </React.Fragment>
    );
}

function Screen2() {
    FileSystem.downloadAsync(
        Asset.fromModule(require("./assets/moje.db")).uri,
        `${FileSystem.documentDirectory}SQLite/baza.db`
    );
    const db = SQLite.openDatabase("baza.db");
    const [items, setItems] = React.useState([]);

    React.useEffect(() => {
        db.transaction((tx) => {
            tx.executeSql(
                "SELECT * FROM items",
                null,
                (txObj, { rows: { _array } }) => setItems(_array)
            );
        });
    }, []);

    const addItem = ({ name, description }) => {
        console.log("bla");
        db.transaction((tx) => {
            tx.executeSql(
                "insert into items (name, description) values (?, ?)",
                [name, description],
                (obj, res) => {
                    console.log("bla2");
                    setItems((state) =>
                        state.concat({
                            id: res.insertId,
                            name,
                            description,
                        })
                    );
                },
                (txObj, error) => console.log("Error ", error)
            );
        });
    };
    const handlePress = () => {
        addItem({ name: "item", description: "komentarz" });
    };
    return (
        <React.Fragment>
            <View style={styles.container}>
                <ScrollView>
                    <List w={"100%"} borderWidth={0}>
                        {items.map((item) => (
                            <List.Item p={5} fontSize={40} w={"100%"}>
                                <VStack spacing={2} flexGrow={1}>
                                    <Text bold fontSize={18}>
                                        {item.name}
                                    </Text>
                                    <Text>{item.description}</Text>
                                </VStack>
                            </List.Item>
                        ))}
                    </List>
                </ScrollView>
                <Fab
                    bg="teal.200"
                    onPress={handlePress}
                    icon={<Icon name="plus" type="AntDesign" size={10} />}
                />
            </View>
        </React.Fragment>
    );
}

export default function App() {
    return (
        <NativeBaseProvider>
            <Screen2 />
        </NativeBaseProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
