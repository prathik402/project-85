import React,{Component} from "react";
import {Text,View} from "react-native";

export default class LoginScreen extends Component {
   signInWithGoogleAsync = async () =>{
    try{
        const result = await Google.loginAsync({
            behaviour:"web",
            androidClientId:"503474086717-bpgb0t8oavb6uaks3clsqv4lhj81qm46.apps.googleusercontent.com",
            iosClientId:"503474086717-k158m7pfjj10ido7rn997nip0c8kqh5r.apps.googleusercontent.com",
            scopes:['profile','email'],
        });
    }
}
}