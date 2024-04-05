import { useNavigation } from '@react-navigation/native';

import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseURL = 'https://dummyjson.com'; // Your API base URL

// Axios instance with base URL and middleware
const axiosInstance = axios.create({
    baseURL,
});

axiosInstance.interceptors.request.use(async (config: AxiosRequestConfig): Promise<any> => {
    const accessToken = await AsyncStorage.getItem('accessToken');
    if (accessToken) {
        config.headers = {
            ...config.headers,
            Authorization: `Bearer ${accessToken}`,
        };
    }
    return config;
}, (error: AxiosError) => {
    return Promise.reject(error);
});

// Response interceptor middleware to handle token expiration and refresh
axiosInstance.interceptors.response.use(async (response: AxiosResponse): Promise<AxiosResponse> => {
    return response;
}, async (error: AxiosError) => {
    if (error.response?.status === 401) {
        // Token expired, attempt refresh
        const refreshToken = await AsyncStorage.getItem('refreshToken');
        if (refreshToken) {
            try {
                const refreshResponse = await axios.post(`${baseURL}/refresh`, { refreshToken });
                const newAccessToken = refreshResponse.data.accessToken;
                await AsyncStorage.setItem('accessToken', newAccessToken);
                return axiosInstance.request(error.config as any); // Use request method to preserve method, data, etc.
            } catch (refreshError) {
                // redirect to login page
            }
        } else {
            // No refresh token available, redirect to login screen
            // Example: navigation.navigate('Login');
        }
    }
    return Promise.reject(error);
});

export default axiosInstance;
