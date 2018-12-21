import {
  createStackNavigator,
} from 'react-navigation';
import ListAccount from './listAccount/listAccount';
import CreateAccount from './createAccount/createAccount';
import ViewDetail from './viewDetail/viewDetail';
import EditAccount from './editAccount/editAccount';

const NavigatingAccount = createStackNavigator(
  {
    ListAccount: { screen: ListAccount },
    CreateAccount: { screen: CreateAccount },
    ViewDetail: { screen: ViewDetail },
    EditAccount: { screen: EditAccount }
  },
  {
    initialRouteName: "ListAccount",
    headerMode: "none"
  }
);

export default NavigatingAccount;
