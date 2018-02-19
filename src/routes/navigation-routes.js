import { StackNavigator } from 'react-navigation';
import { HomeScreen, DetailsScreen, LoginScreen } from './../containers';

export const NavigationRoutes = StackNavigator(
    {
        LogIn: {
            screen: LoginScreen
        },
        Home: {
            screen: HomeScreen
        },
        Details: {
            screen: DetailsScreen
        }
    },
    {
        initialRouteName: 'LogIn',
        navigationOptions: { // Common configuration to be stored here
            headerStyle: {
                backgroundColor: '#0e7d8c',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
                color: '#fff'
            }
        }
    }
);