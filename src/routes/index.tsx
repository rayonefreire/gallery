import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { ImageView } from "../screens/ImageView";
import { SignIn } from "../screens/SignIn";

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={SignIn} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ImageView" component={ImageView} />
    </Stack.Navigator>
  );
}