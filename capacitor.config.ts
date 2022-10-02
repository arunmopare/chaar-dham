import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'Char Dham',
  webDir: 'dist/chaar-dham',
  bundledWebRuntime: false,
  server: {
    url: 'http://192.168.0.106:4200',
    cleartext: true
  }
};

export default config;
