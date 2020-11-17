import React from 'react'
import { SafeAreaView, LogBox } from 'react-native'
import Loading from './src/components/loading';
import { StoreProvider } from './src/context/store';
import AppContainer from './src/navigation';

LogBox.ignoreLogs(['Warning: ...']);

const App = () => {
  return (
    <StoreProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <AppContainer />
        <Loading />
      </SafeAreaView >
    </StoreProvider>
  )
}

export default App
