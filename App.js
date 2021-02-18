import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';
import { SafeAreaView } from 'react-native-safe-area-context';

function LoadingIndicatorView() {
  return <ActivityIndicator color='#009b88' size='large' />
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        originWhitelist={['*']}
        source={{ uri: 'https://systemo.app/' }}
        renderLoading={LoadingIndicatorView}
        startInLoadingState={true}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
