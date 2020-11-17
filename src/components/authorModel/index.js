import React from 'react';
import { Body, Card, CardItem, Button, Text } from 'native-base';
import { Modal, View, TouchableOpacity, Linking } from 'react-native';
import Zocial from 'react-native-vector-icons/Zocial'
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
const AuthorModel = ({
    visible,
    onRequestClose,
    author,
    checkAlbums
}) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={() => onRequestClose()}
        >
            <View style={styles.container}>
                <View style={styles.content}>

                    <TouchableOpacity onPress={onRequestClose}>
                        <Text style={styles.close}>Close</Text>
                    </TouchableOpacity>
                    <Card style={styles.card}>
                        <CardItem>
                            <Body>
                                <Text style={styles.name}> Name : {author.name}</Text>
                                <TouchableOpacity style={styles.touchable} onPress={() => Linking.openURL(`mailto:${author.email}`)}
                                >
                                    <Zocial name="email" size={24} />
                                    <Text >  {author.email}</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.touchable} onPress={() => Linking.openURL(`tel:${author.phone}`)}>
                                    <Ionicons name="md-call" size={25} />
                                    <Text >  {author.phone}</Text>
                                </TouchableOpacity>


                            </Body>
                        </CardItem>
                    </Card>

                    <Button info style={styles.btn} onPress={checkAlbums}><Text style={styles.btnTxt}> Check Albums </Text></Button>
                </View>

            </View>

        </Modal>
    );
};
export default AuthorModel;
