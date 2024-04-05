import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {useAuthActions} from "../../redux"
import {AuthService} from '../../api/AuthService';

const Login: React.FC = () => {
    const {setIsAuthenticated, setAuthUser} = useAuthActions();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = async () => {
        setError('');
        setLoading(true);
        try {
            const user = await AuthService.login(userName, password);
            setIsAuthenticated(true)
            setAuthUser(user)
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>LOG IN</Text>
            <Image source={require('../../../assets/icons/logo.png')} style={styles.logo}/>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Username*</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={userName}
                    onChangeText={setUserName}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Password*</Text>
                <TextInput
                    style={styles.input}
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleLogin}
                    disabled={loading}
                >
                    <Text style={styles.buttonText}>{loading ? "Logging in..." : "Login"}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        color: '#1E1D1D',
        fontWeight: '500'
    },
    inputContainer: {
        marginBottom: 10,
        width: '100%',
    },
    label: {
        marginBottom: 5,
        fontWeight: 'bold',
    },
    input: {
        width: '100%',
        height: 52,
        borderColor: '#E6E6E6',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    buttonContainer: {
        width: '100%',
        marginTop: 60,
    },
    button: {
        width: '100%',
        backgroundColor: '#7867BE',
        borderRadius: 10,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 14,
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
    },
});

export default Login;
