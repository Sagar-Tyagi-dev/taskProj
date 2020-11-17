import React, { useReducer } from 'react';
import {
    loader,
} from '../reducer';

export const Store = React.createContext();

const dispatch = {};

export function StoreProvider(props) {

    // * ALL REDUCERS
    const [mapLoaderState, dispatchLoaderAction] = useReducer(loader, dispatch);

    // * VALUES OF ALL REDUCERS
    const loaderValue = { mapLoaderState, dispatchLoaderAction };

    // * COMBINE ALL VALUES IN A SINGLE VARIABLE
    const value = {
        ...loaderValue
    };

    // * STORE
    return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
