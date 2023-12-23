import { MaterialIcons } from "@expo/vector-icons"
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer"
import { Text, View } from "react-native"



const CustomDrawer = (props: any) => {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props} scrollEnabled={true}>
                <View style={{
                    padding: 20,
                    borderRadius: 10,
                    backgroundColor: "blue",
                    height: 100,
                    margin:10

                }}>
<Text>Meme</Text>
                </View>
                <DrawerItemList {...props} />
                <DrawerItem icon={({ size, color }) => (<MaterialIcons name="logout" size={size} color={color} />)} label="Logout" onPress={() => console.log("logout")} />
            </DrawerContentScrollView>
        </View>
    )
}

export default CustomDrawer