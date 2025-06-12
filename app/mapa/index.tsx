import { View, Text, StyleSheet, Dimensions, TextInput, ScrollView } from 'react-native';
import { useRef, useEffect } from 'react';
import FooterNav from '../../components/FooterNav';

const ocorrenciasMock = [
  {
    id: 1,
    titulo: 'Mancha na água',
    status: 'Recebida',
    descricao: 'Mancha escura próxima à margem.',
    data: '12/06/2024',
  },
  {
    id: 2,
    titulo: 'Espuma no rio',
    status: 'Em análise',
    descricao: 'Espuma branca em grande quantidade.',
    data: '10/06/2024',
  },
];

function FloatingHeader() {
  return (
    <View style={styles.floatingHeader}>
      <View style={styles.headerIconCircle}>
        <svg width="22" height="22" viewBox="0 0 22 22"><circle cx="11" cy="11" r="11" fill="#fff"/><path d="M11 11a3 3 0 100-6 3 3 0 000 6zm0 2c-2.67 0-8 1.34-8 4v1h16v-1c0-2.66-5.33-4-8-4z" fill="#2196F3"/></svg>
      </View>
      <Text style={styles.headerTitleFloat}>Mapa de Ocorrências</Text>
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

export default function MapaScreen() {
  const iframeRef = useRef(null);
  useEffect(() => {}, []);

  return (
    <View style={styles.bg}>
      <ScrollView contentContainerStyle={{ alignItems: 'center', paddingBottom: 32 }}>
        <View style={styles.cardMapa}>
          <iframe
            ref={iframeRef}
            title="Mapa de Ocorrências"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14632.61585832213!2d-46.6333!3d-23.5505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1718130000000!5m2!1spt-BR!2sbr"
            width="100%"
            height="250"
            style={{ border: 0, borderRadius: 16 }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </View>
        <View style={styles.cardLista}>
          <Text style={styles.listaTitulo}>Ocorrências Recentes</Text>
          {ocorrenciasMock.map((item) => (
            <View key={item.id} style={styles.itemOcorrencia}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={styles.itemTitulo}>{item.titulo}</Text>
                <Text style={[styles.status, item.status === 'Recebida' ? styles.statusRecebida : styles.statusAnalise]}>{item.status}</Text>
              </View>
              <Text style={styles.itemDescricao}>{item.descricao}</Text>
              <Text style={styles.itemData}>{item.data}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
      <FooterNav />
      <FloatingHeader />
    </View>
  );
}

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
  cardMapa: {
    width: '90%',
    maxWidth: MAX_WIDTH,
    backgroundColor: '#fff',
    borderRadius: 16,
    marginTop: 18,
    marginBottom: 18,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.10,
    shadowRadius: 6,
    elevation: 2,
  },
  cardLista: {
    width: '90%',
    maxWidth: MAX_WIDTH,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.10,
    shadowRadius: 6,
    elevation: 2,
  },
  listaTitulo: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#2196F3',
    marginBottom: 10,
  },
  itemOcorrencia: {
    backgroundColor: '#F4F8FB',
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
  },
  itemTitulo: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#222',
  },
  status: {
    fontSize: 13,
    fontWeight: 'bold',
    paddingHorizontal: 10,
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
  itemDescricao: {
    fontSize: 14,
    color: '#444',
    marginTop: 4,
  },
  itemData: {
    fontSize: 12,
    color: '#888',
    marginTop: 2,
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
    borderBottomColor: '#ddd',
  },
  headerIconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
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