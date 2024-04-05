import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import configureStore from './src/redux/configureStore';
import Router from "./src/components/Router";

const {store, persistor} = configureStore();
export default function App() {

    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <NavigationContainer>
                    <Router/>
                </NavigationContainer>
            </PersistGate>
        </Provider>
    )
}