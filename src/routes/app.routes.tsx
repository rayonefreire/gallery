import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { ImageView } from "../screens/ImageView";

const Stack = createNativeStackNavigator();

export function HomeRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ImageView" component={ImageView} />
    </Stack.Navigator>
  );
}