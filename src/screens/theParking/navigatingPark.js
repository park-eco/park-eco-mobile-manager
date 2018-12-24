import {
  createStackNavigator,
} from 'react-navigation';
import ListPark from './listPark/listPark';
import AddPark from './addPark/addPark';

const NavigatingPark = createStackNavigator(
  {
    ListPark: { screen: ListPark },
    AddPark: { screen: AddPark },
  },
  {
    initialRouteName: "ListPark",
    headerMode: "none"
  }
);

export default NavigatingPark;
