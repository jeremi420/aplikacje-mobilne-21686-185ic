import React from "react";
// 1. import `NativeBaseProvider` component
import {
    NativeBaseProvider,
    Text,
    View,
    Image,
    Box,
    Spinner,
    Center,
} from "native-base";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Alert } from "react-native";
import Slider from "@react-native-community/slider";
import NetInfo from "@react-native-community/netinfo";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Screen1() {
    return (
        <View style={styles.container}>
            {/* <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" /> */}
            <Image
                style={{ height: 200, width: 200 }}
                source={require("./assets/favicon.png")}
            />
            <Image
                style={{ height: 200, width: 200, marginTop: 20 }}
                source={{
                    uri: "https://i1.sndcdn.com/artworks-000613657397-a1asdx-t500x500.jpg",
                }}
            />
        </View>
    );
}

function Screen2() {
    const [value, setValue] = React.useState(100);
    return (
        <View style={styles.container}>
            <Slider
                style={{ width: 200, height: 40 }}
                minimumValue={100}
                maximumValue={200}
                onValueChange={(v) => setValue(v)}
                value={value}
                minimumTrackTintColor="#000000"
                maximumTrackTintColor="#000000"
            />
            <Image
                w={value}
                h={value}
                mt={20}
                source={{
                    uri: "https://i1.sndcdn.com/artworks-000613657397-a1asdx-t500x500.jpg",
                }}
            />
        </View>
    );
}

function Screen3() {
    const [loading, setLoading] = React.useState(false);
    return (
        <View style={styles.container}>
            <Box w={200} h={200}>
                <Image
                    w={"100%"}
                    h={"100%"}
                    mt={20}
                    onLoadStart={() => setLoading(true)}
                    onLoadEnd={() => setLoading(false)}
                    source={{
                        uri: "https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg",
                    }}
                />
                {loading && (
                    <Center
                        flex={1}
                        pos="absolute"
                        h={"100%"}
                        w={"100%"}
                        top={0}
                        bottom={0}
                    >
                        <Spinner />
                    </Center>
                )}
            </Box>
        </View>
    );
}

function Screen4() {
    React.useEffect(() => {
        const handleNetStatusChange = (state) => {
            Alert.alert(state.type);
        };
        const unsubscribe = NetInfo.addEventListener(handleNetStatusChange);
        return function cleanup() {
            unsubscribe();
        };
    }, []);
    return <View style={styles.container}></View>;
}

function Screen5() {
    React.useEffect(() => {
        async function effect() {
            const value = 5;
            await AsyncStorage.setItem("@storage_Key", value.toString());
            const retrived = await AsyncStorage.getItem("@storage_Key");
            Alert.alert(
                "zapisano oraz otrzymano z async storage wartość: " + retrived
            );
        }
        effect();
    }, []);
    return <View style={styles.container}></View>;
}

export default function App() {
    // 2. Use at the root of your app
    return (
        <NativeBaseProvider>
            <Screen5 />
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
