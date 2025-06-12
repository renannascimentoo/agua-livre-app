import { View, Text, StyleSheet, ScrollView, Image, Dimensions, TextInput } from 'react-native';
import FooterNav from '../components/FooterNav';

const denunciasMock = [
  {
    id: '1',
    status: 'Recebida',
    titulo: 'Descarga de esgoto',
    descricao: 'Esgoto sendo despejado no rio.',
    local: 'Rio Tietê',
    data: '10/06/2024',
    imagem: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: '2',
    status: 'Em análise',
    titulo: 'Espuma branca',
    descricao: 'Espuma suspeita na superfície.',
    local: 'Praia Grande',
    data: '05/06/2024',
    imagem: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: '3',
    status: 'Resolvida',
    titulo: 'Água turva',
    descricao: 'Água com cor escura e odor forte.',
    local: 'Lago Azul',
    data: '01/06/2024',
    imagem: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: '4',
    status: 'Recebida',
    titulo: 'Lixo acumulado',
    descricao: 'Grande quantidade de lixo na margem.',
    local: 'Represa Verde',
    data: '28/05/2024',
    imagem: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
  },
];

function FloatingHeader() {
  return (
    <View style={styles.floatingHeader}>
      <View style={styles.headerIconCircle}>
        <svg width="22" height="22" viewBox="0 0 22 22"><circle cx="11" cy="11" r="11" fill="#fff"/><path d="M11 11a3 3 0 100-6 3 3 0 000 6zm0 2c-2.67 0-8 1.34-8 4v1h16v-1c0-2.66-5.33-4-8-4z" fill="#2196F3"/></svg>
      </View>
      <Text style={styles.headerTitleFloat}>Minhas Denúncias</Text>
      <View style={styles.headerRightIcons}>
        <View style={styles.headerIconCircle}>
          <svg width="18" height="18" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="#fff"/><path d="M12 7v5l4 2" stroke="#2196F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
        </View>
        <View style={styles.headerIconCircle}>
          <svg width="18" height="18" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="#fff"/><path d="M12 8a4 4 0 100 8 4 4 0 000-8z" stroke="#2196F3" strokeWidth="2" fill="none"/></svg>
        </View>
      </View>
    </View>
  );
}

export default function MinhasDenunciasScreen() {
  return (
    <View style={styles.bg}>
      <ScrollView contentContainerStyle={{ alignItems: 'center', paddingBottom: 32 }}>
        <View style={styles.grid}>
          {denunciasMock.map((item) => (
            <View key={item.id} style={styles.card}>
              <Image source={{ uri: item.imagem }} style={styles.cardImage} />
              <View style={styles.cardInfo}>
                <Text style={styles.cardTitulo}>{item.titulo}</Text>
                <Text style={styles.cardDescricao}>{item.descricao}</Text>
                <View style={styles.cardStatusRow}>
                  <Text style={[styles.status, item.status === 'Recebida' ? styles.statusRecebida : item.status === 'Em análise' ? styles.statusAnalise : styles.statusResolvida]}>{item.status}</Text>
                  <Text style={styles.cardData}>{item.data}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
        <View style={styles.cardDetalhe}>
          <Text style={styles.detalheTitulo}>Photo Description</Text>
          <Text style={styles.detalheTexto}>Exemplo de detalhe da denúncia selecionada.</Text>
          <View style={styles.detalheLinha} />
          <Text style={styles.detalheAcompanhar}>Ver mais detalhes</Text>
        </View>
      </ScrollView>
      <FooterNav />
      <FloatingHeader />
    </View>
  );
}

const CARD_WIDTH = (Dimensions.get('window').width - 64) / 2;
const MAX_WIDTH = 500;
const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: '#E6F4FA',
  },
  header: {
    backgroundColor: '#2196F3',
    paddingTop: 36,
    paddingBottom: 16,
    alignItems: 'center',
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    marginBottom: 8,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  searchBox: {
    width: '90%',
    maxWidth: MAX_WIDTH,
    backgroundColor: '#fff',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 4,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 1,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#222',
    paddingVertical: 8,
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '96%',
    maxWidth: MAX_WIDTH + 32,
    marginTop: 18,
    marginBottom: 18,
  },
  card: {
    width: CARD_WIDTH,
    backgroundColor: '#fff',
    borderRadius: 16,
    margin: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.10,
    shadowRadius: 6,
    elevation: 2,
  },
  cardImage: {
    width: '100%',
    height: 90,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  cardInfo: {
    padding: 10,
  },
  cardTitulo: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 2,
  },
  cardDescricao: {
    fontSize: 13,
    color: '#444',
    marginBottom: 6,
  },
  cardStatusRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  status: {
    fontSize: 12,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
    overflow: 'hidden',
    color: '#fff',
  },
  statusRecebida: {
    backgroundColor: '#4CAF50',
  },
  statusAnalise: {
    backgroundColor: '#FFC107',
    color: '#333',
  },
  statusResolvida: {
    backgroundColor: '#2196F3',
  },
  cardData: {
    fontSize: 11,
    color: '#888',
    marginLeft: 6,
  },
  cardDetalhe: {
    width: '90%',
    maxWidth: MAX_WIDTH,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginTop: 8,
    shadowColor: '#000',
    shadowOpacity: 0.10,
    shadowRadius: 6,
    elevation: 2,
  },
  detalheTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2196F3',
    marginBottom: 8,
  },
  detalheTexto: {
    fontSize: 13,
    color: '#444',
    marginBottom: 10,
  },
  detalheLinha: {
    height: 2,
    backgroundColor: '#E6F4FA',
    marginVertical: 8,
    borderRadius: 2,
  },
  detalheAcompanhar: {
    fontSize: 13,
    color: '#2196F3',
    fontWeight: 'bold',
    textAlign: 'right',
  },
  floatingHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E6F4FA',
  },
  headerIconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E6F4FA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitleFloat: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2196F3',
    marginLeft: 16,
  },
  headerRightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
}); 