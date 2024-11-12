import React, { useState } from 'react';
import { SafeAreaView, Switch, StyleSheet } from 'react-native';
import { PaperProvider, Appbar, Text } from 'react-native-paper';
import { MD3DarkTheme as darkTheme, MD3LightTheme as lightTheme } from 'react-native-paper';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle theme between dark and light
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <PaperProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <SafeAreaView style={styles.container}>
  
        <Appbar.Header>
          <Appbar.Content title="Dark Mode Toggle" />
        </Appbar.Header>

        <Text style={styles.toggleText}>Toggle Dark Mode:</Text>
        <Switch
          value={isDarkMode}
          onValueChange={toggleTheme}
          style={styles.switch}
        />

       
        <Text style={styles.helloText}>Hello, World!</Text>
      </SafeAreaView>
    </PaperProvider>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  toggleText: {
    marginTop: 20,
    paddingLeft: 20,
    fontSize: 18,
  },
  switch: {
    marginTop: 20,
    alignSelf: 'center',
  },
  helloText: {
    marginTop: 50,
    paddingLeft: 20,
    fontSize: 22,
  },
});

export default App;
