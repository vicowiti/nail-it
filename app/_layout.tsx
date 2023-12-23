import "react-native-gesture-handler"
import { Drawer } from "expo-router/drawer"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons"
import { SafeAreaView } from "react-native-safe-area-context"
import CustomDrawer from "../components/CustomDrawer"



const _layout = () => {

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer initialRouteName="index" drawerContent={CustomDrawer} screenOptions={{
                drawerActiveTintColor: "#111",
                drawerActiveBackgroundColor: "#FBE2BA",
                drawerLabelStyle:{marginLeft: -20 }
            }}>
                <Drawer.Screen name="index" options={{
                    drawerLabel: "Home",
                    headerTitle: "Home",
                    drawerIcon: ({ size, color }) => (<Ionicons name="home-outline" size={size} color={color} />)
                }} />

                <Drawer.Screen name="daily" options={{
                    drawerLabel: "Daily Goals",
                    headerTitle: "Daily Goals",
                    drawerIcon: ({ size, color }) => (<Ionicons name="today" size={size} color={color} />)
                }} />

                <Drawer.Screen name="weekly" options={{
                    drawerLabel: "Weekly Stats",
                    headerTitle: "Weekly Stats",
                    drawerIcon: ({ size, color }) => (<Ionicons name="home-outline" size={size} color={color} />)
                }} />



                <Drawer.Screen name="monthly" options={{
                    drawerLabel: "Monthly Stats",
                    headerTitle: "Monthly Stats",
                    drawerIcon: ({ size, color }) => (<MaterialIcons name="replay-30" size={size} color={color} />)
                }} />

                <Drawer.Screen name="yearly" options={{
                    drawerLabel: "Yearly Stats",
                    headerTitle: "Yearly Stats",
                    drawerIcon: ({ size, color }) => (<Entypo name="progress-full" size={size} color={color} />)
                }} />

            </Drawer>
        </GestureHandlerRootView>

    )
}

export default _layout