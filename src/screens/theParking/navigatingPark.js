import {
  createStackNavigator,
} from 'react-navigation';
import ListPark from './listPark/listPark';
import AddPark from './addPark/addPark';
import ViewDetail from './viewDetail/viewDetail';
import EditPark from './editPark/editPark';

const NavigatingPark = createStackNavigator(
  {
    ListPark: { screen: ListPark },
    AddPark: { screen: AddPark },
    ViewDetail: { screen: ViewDetail },
    EditPark: { screen: EditPark },
  },
  {
    initialRouteName: "ListPark",
    headerMode: "none"
  }
);

export default NavigatingPark;
