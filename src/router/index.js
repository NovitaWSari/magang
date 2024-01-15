import { createStackNavigator } from '@react-navigation/stack';
import { Splashscreen } from '../pages';
import Home from '../pages/Home';
import FormMagang from '../pages/Formulir';
import AddData from '../pages/Formulir';
import CrudTable from '../pages/Tabel';
import Aksi from '../pages/Aksi';
import formLogbook from '../pages/LogBook';
import formLaporan from '../pages/Laporan';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Splashscreen' component={Splashscreen} />
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name="FormMagang" component={FormMagang} />
      <Stack.Screen name="AddData" component={AddData} />
      <Stack.Screen name="CrudTable" component={CrudTable} />
      <Stack.Screen name="Aksi" component={Aksi} />
      <Stack.Screen name="formLogbook" component={formLogbook} />
      <Stack.Screen name="formLaporan" component={formLaporan} />
    </Stack.Navigator>
  );
};

export default Router;