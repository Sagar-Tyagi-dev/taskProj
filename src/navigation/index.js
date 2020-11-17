import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import {
    Posts,
    Albums,
    Photos,
    Comments
} from '../containers';

const Stack = createStackNavigator();

function AppContainer() {
    return (
        <NavigationContainer >
            <Stack.Navigator >
                <Stack.Screen
                    name="Posts"
                    component={Posts}
                    options={{ headerTitleAlign: 'center' }}
                />
                <Stack.Screen
                    name="Albums"
                    component={Albums}
                />
                <Stack.Screen
                    name="Photos"
                    component={Photos}
                />
                <Stack.Screen
                    name="Comments"
                    component={Comments}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}



export default AppContainer;
