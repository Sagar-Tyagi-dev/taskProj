import React from 'react'
import { Card, CardItem, Text, Body } from 'native-base';

import styles from './styles';

const Album = ({ title }) => {
    return (
        <Card style={styles.card}>
            <CardItem>
                <Body>
                    <Text style={styles.title}>{title}</Text>
                </Body>
            </CardItem>


        </Card>
    )
}

export default Album
