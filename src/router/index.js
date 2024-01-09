import { createStackNavigator } from '@react-navigation/stack';
import { Splashscreen } from '../pages';
import Home from '../pages/Home';
import FormMagang from '../pages/Formulir';
import AddData from '../pages/Formulir';
import CrudTable from '../pages/Tabel';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Splashscreen' component={Splashscreen} />
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name="FormMagang" component={FormMagang} />
      <Stack.Screen name="AddData" component={AddData} />
      <Stack.Screen name="CrudTable" component={CrudTable} />
    </Stack.Navigator>
  );
};

export default Router;