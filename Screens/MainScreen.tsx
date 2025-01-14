import React, { useState } from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {MenuView} from '@react-native-menu/menu';
import { MultipleSelectList, SelectList } from 'react-native-dropdown-select-list';
import {StatusBar} from 'expo-status-bar';

import CalendarPane from '../Panes/CalendarPane';
import ClassesPane from '../Panes/ClassesPane';
import EmailPane from '../Panes/EmailPane';
import MapPane from '../Panes/MapPane';
import UserPane from '../Panes/UserPane';
import GuestPane from '../Panes/GuestPane';

import {styles, TU_BLUE} from '../Panes/PaneStyles';

const USER_STATE = 0
const CLASSES_STATE = 1
const MAP_STATE = 2
const CALENDER_STATE = 3
const EMAIL_STATE = 4
const LOGIN_STATE = 5
const USER_PASSWORD = "password"


interface MainScreenInterface {
    navigation: any;
}

const MainPage = (screenInterface: MainScreenInterface, route: any) => {

    const[paneState, setPaneState] = useState(MAP_STATE);

    const dropdownData = [
      {key: '1', value: 'loginReturn'}
    ]

    route = useRoute();
    const loginState = route.params.paramKey;

    const loginReturn = () => {
      screenInterface.navigation.navigate("login");
    }

    
    return (
        <View style={{flex: 1, backgroundColor: TU_BLUE}}>
          <View style={{paddingTop:20, padding: 5}}></View>
          <View style={{flex: 1}}>
            <StatusBar style="light"/>
            <View style={{paddingTop:20, padding: 5}}>
              <TouchableOpacity
                style = {styles.settingIcon}
                activeOpacity = {1}
                onPress = {loginReturn}>
                <Image
                  style={{width: 50, height: 50}}
                  source={require('../assets/TUlogonormal.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={{flex: 1}}>
              <StatusBar style="light"/>
              {loginState != 1 && paneState == USER_STATE && <UserPane></UserPane>}
              {loginState == 1 && paneState == USER_STATE && <GuestPane></GuestPane>}
              {loginState != 1&& paneState == CLASSES_STATE && <ClassesPane></ClassesPane>}
              {loginState == 1 && paneState == CLASSES_STATE && <GuestPane></GuestPane>}
              {paneState == MAP_STATE && <MapPane></MapPane>}
              {paneState == CALENDER_STATE && <CalendarPane></CalendarPane>}
              {loginState != 1 && paneState == EMAIL_STATE && <EmailPane></EmailPane>}
              {loginState == 1 && paneState == EMAIL_STATE && <GuestPane></GuestPane>}
              <BottomButtons state={paneState} changeState={setPaneState}></BottomButtons>
            </View>
          </View>
        </View>
      );
}


const BottomButtons = ({state, changeState}: any) => (
    <View style={styles.bottomButtonRow}>
      <TouchableOpacity onPress={() => changeState(0)} activeOpacity = {1} style={styles.bottomButton}>
        {state == USER_STATE && <Image style={styles.icon} source={require('../assets/TUuserinv.png')} />}
        {state != USER_STATE && <Image style={styles.icon} source={require('../assets/TUuser.png')} />}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => changeState(1)} activeOpacity = {1} style={styles.bottomButton}>
        {state == CLASSES_STATE && <Image style={styles.icon} source={require('../assets/TUclassesinv.png')} />}
        {state != CLASSES_STATE && <Image style={styles.icon} source={require('../assets/TUclasses.png')} />}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => changeState(2)} activeOpacity = {1} style={styles.bottomButton}>
        {state == MAP_STATE && <Image style={styles.icon} source={require('../assets/TUmapinv.png')} />}
        {state != MAP_STATE && <Image style={styles.icon} source={require('../assets/TUmap.png')} />}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => changeState(3)} activeOpacity = {1} style={styles.bottomButton}>
        {state == CALENDER_STATE && <Image style={styles.icon} source={require('../assets/TUcalenderinv.png')} />}
        {state != CALENDER_STATE && <Image style={styles.icon} source={require('../assets/TUcalender.png')} />}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => changeState(4)} activeOpacity = {1} style={styles.bottomButton}>
        {state == EMAIL_STATE && <Image style={styles.icon} source={require('../assets/TUemailinv.png')} />}
        {state != EMAIL_STATE && <Image style={styles.icon} source={require('../assets/TUemail.png')} />}
      </TouchableOpacity>
        
    </View>
  );

const DropdownMenu = () => {
  <View>
    <MenuView
      title = "Dropdown Menu"
      actions = {[
        {
          id: 'settings',
          title: 'Settings',
        }
        
      ]}
      
    >
    </MenuView>
  </View>
}

export default MainPage;