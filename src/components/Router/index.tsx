import {FC} from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {useSelector} from "react-redux";
import {AuthSelectors} from "../../redux";
import {Index, Home, Profile, Wishlist, CategoryProducts, Login} from "../../screens";
import {COLORS} from "../../constants/colors";
import HomeIcon from "../../../assets/icons/home.svg";
import CategoriesIcon from "../../../assets/icons/categories.svg";
import WishlistIcon from "../../../assets/icons/favorite.svg";
import ProfileIcon from "../../../assets/icons/profile.svg";
import Header from "../header";

const tabList = [
    {
        name: 'Home', component: Home, TabIcon: (color: string) => <HomeIcon
            color={color}/>, showSearch: true, back: false
    },
    {
        name: 'Categories', component: Index, TabIcon: (color: string) => <CategoriesIcon
            color={color}/>, showSearch: true, back: true
    },
    {
        name: 'Wishlist', component: Wishlist, TabIcon: (color: string) => <WishlistIcon
            color={color}/>, showSearch: true, back: true
    },
    {
        name: 'Profile', component: Profile, TabIcon: (color: string) => <ProfileIcon
            color={color}/>, showSearch: false, back: false
    },
]

const Tab = createBottomTabNavigator();

const screenOptions = {
    headerShown: true,
    tabBarActiveTintColor: COLORS.purple,
    tabBarInactiveTintColor: COLORS.gray
}

const Stack = createNativeStackNavigator();
const Router: FC = () => {
    const isAuthenticated = useSelector(AuthSelectors.isAuthenticated)


    return (
        isAuthenticated ? (
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={{
                    ...screenOptions,
                    header: (props: any) => (
                        <Header
                            title={props.route.params?.title}
                            showSearch={props.route.params?.showSearch}
                            back={props.route.params?.back}
                        />
                    ),
                }}
            >
                {
                    tabList.map(({TabIcon, name, component, showSearch, back}) => (
                        <Tab.Screen
                            key={name}
                            name={name}
                            component={component}
                            initialParams={{title: name, showSearch, back}}
                            options={{
                                tabBarIcon: ({color}) => TabIcon(color)
                            }}
                        />
                    ))
                }
                <Stack.Screen name="Category" component={CategoryProducts}/>
            </Tab.Navigator>
        ) : (
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Login" component={Login}/>
            </Stack.Navigator>
        )

    );
};

export default Router;