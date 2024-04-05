import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_URL = 'https://dummyjson.com/auth';

export const AuthService = {
    async login(username: string, password: string) {
        try {
            const response = await axios.post(`${BASE_URL}/login`, { username, password });
            const { token, ...user } = response.data;
            await AsyncStorage.setItem('accessToken', token);
            return user
        } catch (error) {
            throw new Error('Invalid email or password');
        }
    },

};
