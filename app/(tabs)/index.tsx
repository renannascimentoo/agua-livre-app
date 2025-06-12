import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';
import FooterNav from '../../components/FooterNav';

export default function HomeScreen() {
  const router = useRouter();
  return (
    <View style={styles.bg}>
      <View style={styles.headerBox}>
        <Image source={require('@/assets/images/image.png')} style={styles.logoHeader} />
        <Text style={styles.headerTitle}>Painel de denúncias de poluição hídrica</Text>
      </View>
      <TouchableOpacity style={styles.bigButton} onPress={() => router.push('/nova-denuncia')}>
        <Text style={styles.bigButtonText}>Iniciar Denúncia</Text>
      </TouchableOpacity>
      <Text style={styles.subTitle}>Ações rápidas</Text>
      <View style={styles.quickActions}>
        <TouchableOpacity style={styles.actionCard} onPress={() => router.push('/mapa')}>
          <Image source={require('@/assets/images/image (2).png')} style={styles.actionIcon} />
          <Text style={styles.actionText}>Mapa de Ocorrências</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionCard} onPress={() => router.push('/minhas-denuncias')}>
          <Image source={require('@/assets/images/image (3).png')} style={styles.actionIcon} />
          <Text style={styles.actionText}>Minhas Denúncias</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.sectionBox}>
        <Text style={styles.sectionTitle}>Outros atalhos</Text>
        <View style={styles.sectionIcons}>
          <Image source={require('@/assets/images/image.png')} style={styles.sectionIcon} />
          <Image source={require('@/assets/images/image (1).png')} style={styles.sectionIcon} />
          <Image source={require('@/assets/images/image (2).png')} style={styles.sectionIcon} />
          <Image source={require('@/assets/images/image (3).png')} style={styles.sectionIcon} />
        </View>
      </View>
      <FooterNav />
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: '#E6F4FA',
    alignItems: 'center',
    paddingTop: 24,
    paddingBottom: 70,
  },
  headerBox: {
    width: '92%',
    backgroundColor: '#fff',
    borderRadius: 18,
    alignItems: 'center',
    padding: 18,
    marginBottom: 18,
    shadowColor: '#000',
    shadowOpacity: 0.10,
    shadowRadius: 6,
    elevation: 2,
  },
  logoHeader: {
    width: 60,
    height: 60,
    marginBottom: 8,
    resizeMode: 'contain',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2196F3',
    textAlign: 'center',
  },
  bigButton: {
    width: '92%',
    backgroundColor: '#0099cc',
    borderRadius: 16,
    paddingVertical: 18,
    alignItems: 'center',
    marginBottom: 18,
    shadowColor: '#0099cc',
    shadowOpacity: 0.18,
    shadowRadius: 8,
    elevation: 3,
  },
  bigButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    letterSpacing: 1,
  },
  subTitle: {
    width: '92%',
    fontSize: 15,
    color: '#2196F3',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  quickActions: {
    flexDirection: 'row',
    width: '92%',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  actionCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 14,
    alignItems: 'center',
    padding: 14,
    marginHorizontal: 6,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 1,
  },
  actionIcon: {
    width: 32,
    height: 32,
    marginBottom: 6,
    resizeMode: 'contain',
  },
  actionText: {
    fontSize: 13,
    color: '#222',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  sectionBox: {
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    paddingVertical: 18,
    alignItems: 'center',
    marginTop: 8,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 1,
  },
  sectionTitle: {
    fontSize: 15,
    color: '#2196F3',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionIcons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '90%',
  },
  sectionIcon: {
    width: 36,
    height: 36,
    marginHorizontal: 8,
    resizeMode: 'contain',
  },
});
