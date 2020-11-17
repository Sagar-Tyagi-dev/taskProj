import React from 'react'
import { FlatList } from 'react-native';
import { Card, CardItem, Text, Button, Left, Body, Right } from 'native-base';

import styles from './styles';

const Post = ({ title, text, checkAuthor, getComments }) => {
    return (
        <Card style={[styles.card]}>
            <CardItem >
                <Body >
                    <Text style={styles.title}>{title}</Text>
                </Body>
            </CardItem >
            <CardItem>
                <Left>

                    <Text >
                        {text}
                    </Text>
                </Left>
            </CardItem>
            <CardItem>
                <Left>
                    <Button transparent textStyle={styles.btn} onPress={checkAuthor}>
                        <Text>{'Check Author'}</Text>
                    </Button>
                </Left>
                <Right>
                    <Button transparent textStyle={styles.btn} onPress={getComments}>
                        <Text>{'Comments'}</Text>
                    </Button>
                </Right>
            </CardItem>
        </Card>
    )
}

export default Post
