import AsyncStorage from '@react-native-async-storage/async-storage';
import { Property } from "../constants/index";
const Client = {
    register: async (email, name, password) => {
        await AsyncStorage.setItem('email', email);
        await AsyncStorage.setItem('name', name);
        await AsyncStorage.setItem('password', password);
        return true
    },
    login: async (email, password) => {
        var u_email, u_password;
        AsyncStorage.getItem(`${Property.email}`).then((value) => {
            u_email = value
            AsyncStorage.getItem(`${Property.password}`).then((value1) => {
                u_password = value1
                if (u_email == u_password && password == u_password) {
                    AsyncStorage.setItem(`${Property.islogin}`, "true");
                    return true
                } else {
                    return false
                }
            });
        });
    },
    logout: async () => {
        try {
            await AsyncStorage.removeItem("islogin");
            return true;
        }
        catch (exception) {
            return false;
        }
    },
    get: async () => {
        try {
            var islogin;
            AsyncStorage.getItem(`${Property.islogin}`).then((value) =>
                islogin = value
            );
            return islogin;
        }
        catch (exception) {
            return "false";
        }
    },

}
export default Client;