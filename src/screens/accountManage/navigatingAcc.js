import {
  createStackNavigator,
} from 'react-navigation';
import ListAccount from './listAccount/listAccount';
import CreateAccount from './createAccount/createAccount';
import ViewDetail from './viewDetail/viewDetail';

const NavigatingAccount = createStackNavigator(
  {
    ListAccount: { screen: ListAccount },
    CreateAccount: { screen: CreateAccount },
    ViewDetail: { screen: ViewDetail },
  },
  {
    initialRouteName: "ListAccount",
    headerMode: "none"
  }
);

export default NavigatingAccount;
