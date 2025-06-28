import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { SubMenuButton } from '@/components/SubMenuButton';

export default function Menu() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <SubMenuButton title="Inventory" onPress={() => router.push('/inventory')} />
        <SubMenuButton title="Quests" onPress={() => router.push('/quests')} />
        <SubMenuButton title="Settings" onPress={() => router.push('/settings')} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F7',
    paddingTop: 60,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#1C1C1E',
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  scrollContainer: {
    paddingHorizontal: 16,
  },
});
