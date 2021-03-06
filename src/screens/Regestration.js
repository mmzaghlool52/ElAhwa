import React, { Component, useState, Fragment } from "react";
import {
    View,
    Text,
    ScrollView,
    Dimensions,
    TouchableOpacity,
    ImageBackground,
    Image,
    TextInput,
} from "react-native";
import { Input, ButtonGroup } from "react-native-elements";
import { Snackbar, Toolbar, COLOR } from 'react-native-material-ui';
import { MAIN_COLOR } from "../common/Constants"
// import { Button } from "../components/Button";

const { width, height } = Dimensions.get('window')

export default Regestration = (props) => {
    return(
        <Fragment>
            <Toolbar
                rightElement="arrow-forward"
                onRightElementPress={() => props.navigation.pop()}
                centerElement={'تسجيل حساب'}
            />
            <ScrollView>
                <View style={{
                    width: width,
                    height: height - 75,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    {/* Name */}
                    <View style={{
                        width: '80%',
                        borderBottomWidth: 1,
                    }}>
                        <TextInput
                            placeholder={'الاسم'}
                            autoCapitalize={'words'}
                        />
                    </View>
                    {/* Phone number */}
                    <View style={{
                        width: '80%',
                        borderBottomWidth: 1,
                    }}>
                        <TextInput
                            placeholder={'رقم الهاتف'}
                            keyboardType={'numeric'}
                        />
                    </View>
                    {/* Email */}
                    <View style={{
                        width: '80%',
                        borderBottomWidth: 1,
                    }}>
                        <TextInput
                            placeholder={'البريد الاليكترونى'}
                            keyboardType={'email-address'}
                        />
                    </View>
                    {/* Password */}
                    <View style={{
                        width: '80%',
                        borderBottomWidth: 1,
                    }}>
                        <TextInput
                            placeholder={'كلمة السر'}
                            secureTextEntry={true}
                        />
                    </View>
                    {/* Address */}
                    <View style={{
                        width: '80%',
                        borderBottomWidth: 1,
                    }}>
                        <TextInput
                            placeholder={'العنوان'}
                            autoCapitalize={'sentences'}
                        />
                    </View>
                    <Button text={'تسجيل الحساب'} onPress={() => {}} />
                </View>
            </ScrollView>
        </Fragment>
    );
}

const Button = props => {
    return(
        <TouchableOpacity style={{
            width: '80%',
            height: 40,
            elevation: 5,
            backgroundColor: MAIN_COLOR,
            marginTop: 30,
            alignItems:'center',
            justifyContent: 'center',
            borderRadius: 5,
        }}
            onPress={props.onPress}
        >
            <Text style={{
                color: 'white',
                fontSize: 20,
            }}>{props.text}</Text>
        </TouchableOpacity>
    );
}