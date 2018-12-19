import {
  createStackNavigator,
} from 'react-navigation';
import ListAccount from './listAccount/listAccount';
import CreateAccount from './createAccount/createAccount';
import ViewDetail from './viewDetail/viewDetail';

const NavigatingAcc = createStackNavigator(
  {
    ListAcc: { screen: ListAccount },
    CreateAcc: { screen: CreateAccount },
    ViewDetail: { screen: ViewDetail },
  },
  {
    initialRouteName: "ListAcc",
    headerMode: "none"
  }
);

export default NavigatingAcc;
