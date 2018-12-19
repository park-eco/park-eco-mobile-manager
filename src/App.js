import React from "react";
import { Root } from "native-base";
import { StackNavigator, DrawerNavigator } from "react-navigation";

import SideBar from "./screens/sidebar";
import Login from "./screens/login";
import LiveTracking from "./screens/liveTracking";
import NavigatingAcc from "./screens/accountManage/navigatingAcc";
import TheParking from "./screens/theParking";
import Revenue from "./screens/revenue";
import Report from "./screens/report";


// init DrawerNavigator
const Drawer = DrawerNavigator(
    {
        LiveTracking: { screen: LiveTracking },
        HumanResource: { screen: NavigatingAcc },
        TheParking: { screen: TheParking },
        Revenue: { screen: Revenue },
        Report: { screen: Report },
    },
    {
        initialRouteName: "LiveTracking",
        contentOptions: {
            activeTintColor: "e91e63"
        },
        contentComponent: props => <SideBar {...props} />
    }
);

// init StackNavigator
const AppNavigator = StackNavigator(
    {
        Drawer: { screen: Drawer },
        Login: { screen: Login },
    },
    {
        initialRouteName: "Login",
        headerMode: "none"
    }
);


export default () =>
    <Root>
        <AppNavigator />
    </Root>;
