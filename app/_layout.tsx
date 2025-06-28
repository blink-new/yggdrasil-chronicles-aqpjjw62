import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFrameworkReady } from '@/hooks/useFrameworkReady';

export default function RootLayout() {
  useFrameworkReady();

  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        {/* The (tabs) layout handles bottom tab navigation */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        {/* Additional stack screens */}
        <Stack.Screen name="inventory" />
        <Stack.Screen name="quests" />
        <Stack.Screen name="settings" />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}