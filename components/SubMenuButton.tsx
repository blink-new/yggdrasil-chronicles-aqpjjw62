import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { ChevronRight } from 'lucide-react-native';

interface SubMenuButtonProps {
  title: string;
  onPress: () => void;
}

export function SubMenuButton({ title, onPress }: SubMenuButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
      <ChevronRight color="#3C3C43" size={20} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '500',
    color: '#1C1C1E',
  },
});
