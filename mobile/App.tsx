import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Landing from './src/pages/Landing';

import { AppLoading } from 'expo'; //componente de carregamento
import { Archivo_400Regular, Archivo_700Bold, useFonts } from '@expo-google-fonts/archivo';
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import AppStack from './src/routes/AppStack';

//**useFonts precisa ser importado de uma das fontes! **

export default function App() {
  let [fontsLoaded] = useFonts({ /*fontesLoaded troca para true assim que as fontes forem     carregadas*/
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <AppStack/>
        <StatusBar style="light" />
      </>
    );
  }
};


