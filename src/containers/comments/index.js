import React, { useState, useEffect, useContext } from 'react'
import { Card, CardItem, Text, Body } from 'native-base';
import { FlatList } from 'react-native';
import { Store } from '../../context/store'
import { sendGetRequest } from '../../network'
import apiConstant from '../../network/Endpoint'
import { LOADING_START } from '../../context/action/type'


import styles from './styles';

const Comments = ({ route }) => {


    const globalState = useContext(Store);
    const {
        dispatchLoaderAction,
    } = globalState;

    const [comments, setComments] = useState([]);


    useEffect(() => {
        const { params } = route;
        dispatchLoaderAction({ type: LOADING_START });
        async function getPostComments() {
            const postComments = await sendGetRequest(`${apiConstant.allPosts}/${params.id}/comments`, {}, dispatchLoaderAction);
            setComments(postComments);
        }
        getPostComments();
    }, []);

    return (
        <FlatList
            data={comments}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => (
                <Card >
                    <CardItem>
                        <Body>
                            <Text >{item.body}</Text>
                            <Text style={styles.author}>{`By : ${item.email}`}</Text>
                        </Body>
                    </CardItem>


                </Card>
            )
            }
        />
    )
}

export default Comments
