import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Chat } from "./screens/Chat";


const Stack = createNativeStackNavigator()

const App = () => {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="chat" component={Chat} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
};

export default App;
