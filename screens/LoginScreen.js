import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginScreen = () => {

    const [email,setEmail] =useState("");
    const[password, setPassword]= useState("");
    const navigation = useNavigation();

    const login = () => {
      signInWithEmailAndPassword(auth,email,password).then((userCredential) => {
         console.log("user credential", userCredential);
         const user = userCredential.user;
         console.log("user details", user);
      })
  }
 
    useEffect(() => {
        try {
          const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
              navigation.replace("Main");
            }
          });
    
          return unsubscribe;
        } catch (e) {
          console.log(e);
        }
      }, []);
  return (
    <SafeAreaView>
        <KeyboardAvoidingView>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 100,
          }}
        >
          <Text style={{ color: "#003580", fontSize: 17, fontWeight: "700" }}>
            Giriş Yapınız
          </Text>

          <Text style={{ marginTop: 15, fontSize: 18, fontWeight: "500" }}>
            Hesabınıza Girin
          </Text>
        </View>

        <View style={{ marginTop: 50 }}>
          <View>
          <Text style={{ marginLeft:95, fontSize: 18, fontWeight: "600", color: "gray" }}>
              E-Mail
            </Text>

            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="Mail  Adresinizi Giriniz..."
              placeholderTextColor={"black"}
              style={{
                fontSize: email ? 18 : 18,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,
                marginLeft: 'auto',
              }}
            />
          </View>

          <View style={{ marginTop: 15 }}>
            <Text style={{marginLeft:95, fontSize: 18, fontWeight: "600", color: "gray" }}>
              Şifre
            </Text>

            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              placeholder="Şifrenizi Giriniz..."
              placeholderTextColor={"black"}
              style={{
                fontSize: password ? 18 : 18,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,
                marginLeft: 'auto',
              }}
            />
          </View>
        </View>

        <Pressable
        onPress={login}
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
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 17,
              fontWeight: "bold",
            }}
          >
            Giriş Yap
          </Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate("Register")}
          style={{ marginTop: 20 }}
        >
          <Text style={{ textAlign: "center", color: "gray", fontSize: 17 }}>
            Hesabınız Yok Mu? Üye Ol
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})