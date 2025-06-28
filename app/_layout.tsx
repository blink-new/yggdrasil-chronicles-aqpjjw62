import { useEffect } from 'react';
import { Tabs, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFrameworkReady } from '@/hooks/useFrameworkReady';
import { Home, User, MenuSquare } from 'lucide-react-native';

function TabsLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#007AFF',
    }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => <Home color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="character"
        options={{
          title: 'Character',
          tabBarIcon: ({ color, size }) => <User color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: 'Menu',
          tabBarIcon: ({ color, size }) => <MenuSquare color={color} size={size} />,
        }}
      />
    </Tabs>
  );
}

export default function AppLayout() {
  useFrameworkReady();

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="tabs">
        <TabsLayout />
      </Stack.Screen>
      <Stack.Screen name="inventory" />
      <Stack.Screen name="quests" />
      <Stack.Screen name="settings" />
    </Stack>
    <StatusBar style="auto" />
  );
}