import React, {FC} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image,} from 'react-native';
import {useSelector} from 'react-redux';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {AuthSelectors, useAuthActions} from "../../redux"
import LogOutIcon from "../../../assets/icons/logout.svg"

const Profile: FC = () => {

    const user = useSelector(AuthSelectors.authUser);
    const {logOut} = useAuthActions();

    const handleLogout = async () => {
        await AsyncStorage.setItem('accessToken', '');
        logOut()
    }

    return (
        <View style={styles.container}>
            <View style={styles.profileHeader}>
                <Image
                    source={{uri:user.image}}
                    style={styles.profileImage}
                />
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>{user.firstName} {user.lastName}</Text>
                    <View style={styles.genderContainer}>
                        <Text style={styles.genderText}>{user.gender}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.content}></View>
            <View style={styles.logoutContainer}>
                <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                    <LogOutIcon/>
                    <Text style={styles.logoutText}>Log Out</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        paddingTop: 24,
    },
    profileHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        paddingBottom: 20,
    },
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    profileInfo: {
        marginLeft: 20,
    },
    name: {
        fontSize: 16,
        color: '#1E1D1D'
    },
    genderContainer: {
        borderRadius: 10,
        paddingVertical: 5,
    },
    genderText: {
        fontSize: 16,
        color: '#ADADAD'
    },
    logoutContainer: {
        marginBottom: 20,
        marginTop: 20
    },
    content: {
        flex: 1,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderBottomColor: '#E6E6E6',
        borderTopColor: '#E6E6E6',
    },
    logoutButton: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
    },
    logoutText: {
        marginLeft: 10,
        fontSize: 14,
        fontWeight: '300',
        color: '#1E1D1D',
    },
});

export default Profile;
