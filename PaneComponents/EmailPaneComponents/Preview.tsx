import React, { useState, useEffect, FC } from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { Email_Data } from '../../Database/Email';
import { Modal, Pressable, Button } from 'react-native';

import { Expanded } from './Expanded';
type PreviewProps = {
    item: Email_Data
}

export const Preview: FC<PreviewProps> = ({item}) => {
    const [visible, setVisible] = useState<boolean>(false)

    return(
        <View style={styles.container}>
            <Pressable onPress = {() => {
                console.log(item.Subject)
                setVisible(!visible)
            }}>
                <View style={styles.topTextContainer}>
                    <Text style={{alignSelf:'stretch', fontSize: 20}}>{item.Sender_Email}</Text>
                </View>
                <Text style={styles.subjectText}>{item.Subject}</Text>
                <Text style={styles.bodyText}>{item.Body}</Text>
            </Pressable>    
            <Modal
                visible = {visible}
                animationType="slide">

                <Expanded item ={item} visible={visible} setVisible = {setVisible}></Expanded>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { 
        width: '100%', 
        height: 100, 
        backgroundColor: 'white',
        flexDirection: 'column',
        alignItems: 'stretch',
        borderBottomColor: '#D3D3D3',
        borderBottomWidth: 2
    },
    topTextContainer: {
        height: '30%',
        width: '100%',
        //backgroundColor: 'red',
        alignContent: 'center'
    },
    subjectText: {
        height: '20%',
        width: '100%',
        //backgroundColor: 'green',
        alignContent: 'center',
        fontSize: 19
    },
    bodyText: {
        height: '50%',
        width: '100%',
        //backgroundColor: 'blue',
        fontSize: 15
    }
});