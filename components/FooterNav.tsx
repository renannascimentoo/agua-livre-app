import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter, usePathname } from 'expo-router';

export default function FooterNav() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.footerItem} onPress={() => router.push('/')}>
        <Text style={[styles.footerText, pathname === '/' ? styles.active : null]}>Menu</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerItem} onPress={() => router.push('/mapa')}>
        <Text style={[styles.footerText, pathname.startsWith('/mapa') ? styles.active : null]}>Mapa</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerItem} onPress={() => router.push('/minhas-denuncias')}>
        <Text style={[styles.footerText, pathname.startsWith('/minhas-denuncias') ? styles.active : null]}>Denúncias</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#1A3A4A',
    paddingVertical: 10,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
  },
  footerItem: {
    alignItems: 'center',
    flex: 1,
  },
  footerText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  active: {
    textDecorationLine: 'underline',
    color: '#4FC3F7',
  },
}); 