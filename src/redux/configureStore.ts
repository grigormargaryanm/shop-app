import { createStore, combineReducers, Store, Reducer } from 'redux';
import { persistStore, persistReducer, Persistor } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authReducers from './auth/reducer';
import productReducers from './product/reducer';
import {AuthStore} from './auth/types';
import {ProductStore} from './product/types';

interface RootState {
    auth: AuthStore;
    product: ProductStore;
}

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['auth'],
};

const rootReducer: Reducer<RootState> = combineReducers({
    auth: authReducers,
    product: productReducers,
});

const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);

interface ConfigureStoreResult {
    store: Store<RootState>;
    persistor: Persistor;
}

const configureStore = (initialState:any = {}): ConfigureStoreResult => {
    const store: Store<RootState> = createStore(persistedReducer, initialState);
    const persistor: Persistor = persistStore(store);

    return { store, persistor };
};

export default configureStore;
