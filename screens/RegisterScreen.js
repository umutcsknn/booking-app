import { StyleSheet, Text, View ,SafeAreaView,KeyboardAvoidingView,Pressable,TextInput, Alert} from 'react-native'
import React ,{useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase';
import { setDoc,doc } from 'firebase/firestore';



const RegisterScreen = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [phone,setPhone] = useState("");
    const navigation = useNavigation();
    const register = () => {
        if(email === "" || password === "" || phone === "" ){
            Alert.alert(
                "Yanlış Bilgi",
                "Lütfen Tüm Bilgileri Giriniz",
                [
                  {
                    text: "İptal",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                  },
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ],
                { cancelable: false }
              );
        }
        createUserWithEmailAndPassword(auth,email,password).then((userCredentials) => {
           
            const user = userCredentials._tokenResponse.email;
            const uid = auth.currentUser.uid;

             setDoc(doc(db,"users",`${uid}`),{
                 email:user,
                 phone:phone
             })
        })
    }
  return (
    <SafeAreaView  style={{
        flex: 1,
        backgroundColor: "white",
        padding: 10,
        alignItems: "center",
      }}>
    <KeyboardAvoidingView>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 100,
          }}
        >
          <Text style={{ color: "#003580", fontSize: 17, fontWeight: "700" }}>
            Kayıt Ol
          </Text>

          <Text style={{ marginTop: 15, fontSize: 18, fontWeight: "500" }}>
           Hesap Oluştur
          </Text>
        </View>

        <View style={{ marginTop: 50 }}>
          <View>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>
              E-mail
            </Text>

            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="Lütfen E-Mail Adresinizi Giriniz"
              placeholderTextColor={"black"}
              style={{
                fontSize: email ? 18 : 18,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,
              }}
            />
          </View>

          <View style={{ marginTop: 15 }}>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>
              Şifre
            </Text>

            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              placeholder="Lütfen Şifrenizi Giriniz"
              placeholderTextColor={"black"}
              style={{
                fontSize: password ? 18 : 18,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,
              }}
            />
          </View>

          <View style={{ marginTop: 15 }}>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>
              Telefon
            </Text>

            <TextInput
              value={phone}
              onChangeText={(text) => setPhone(text)}
              placeholder="Lütfen Telefon Numaranızı Giriniz"
              placeholderTextColor={"black"}
              style={{
                fontSize: password ? 18 : 18,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,
              }}
            />
          </View>
        </View>

        <Pressable
        onPress={register}
          style={{
            width: 200,
            backgroundColor: "#003580",
            padding: 15,
            borderRadius: 7,
            marginTop: 50,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Text style={{textAlign:"center",color:"white",fontSize:17,fontWeight:"bold"}}>Kayıt Ol</Text>
        </Pressable>

        <Pressable onPress={() => navigation.goBack()} style={{marginTop:20}}>
            <Text style={{textAlign:"center",color:"gray",fontSize:17}}>Hesabınız Var Mı? Giriş Yap</Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({})