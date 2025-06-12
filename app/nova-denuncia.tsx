import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useState, useRef } from 'react';
import FooterNav from '../components/FooterNav';

function FloatingHeader() {
  const [dragging, setDragging] = useState(false);
  const [pos, setPos] = useState({ x: window.innerWidth * 0.5 - 250, y: 30 });
  const offset = useRef({ x: 0, y: 0 });

  function onMouseDown(e: any) {
    setDragging(true);
    offset.current = {
      x: e.clientX - pos.x,
      y: e.clientY - pos.y,
    };
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  }
  function onMouseMove(e: any) {
    if (!dragging) return;
    setPos({ x: e.clientX - offset.current.x, y: e.clientY - offset.current.y });
  }
  function onMouseUp() {
    setDragging(false);
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  }

  return (
    <div
      style={{
        position: 'absolute',
        left: pos.x,
        top: pos.y,
        zIndex: 100,
        cursor: dragging ? 'grabbing' : 'grab',
        width: 500,
        maxWidth: '92vw',
        transition: dragging ? 'none' : 'box-shadow 0.2s',
        boxShadow: dragging ? '0 4px 24px #2196F355' : '0 2px 12px #2196F355',
        background: '#2196F3',
        borderRadius: 30,
        display: 'flex',
        alignItems: 'center',
        padding: '10px 18px',
        gap: 12,
      }}
      onMouseDown={onMouseDown}
    >
      <div style={{ width: 36, height: 36, borderRadius: 18, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 8, boxShadow: '0 1px 4px #0002' }}>
        <svg width="22" height="22" viewBox="0 0 22 22"><circle cx="11" cy="11" r="11" fill="#fff"/><path d="M11 11a3 3 0 100-6 3 3 0 000 6zm0 2c-2.67 0-8 1.34-8 4v1h16v-1c0-2.66-5.33-4-8-4z" fill="#2196F3"/></svg>
      </div>
      <span style={{ flex: 1, color: '#fff', fontWeight: 'bold', fontSize: 18, textAlign: 'center', letterSpacing: 1 }}>Nova Denúncia</span>
      <div style={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
        <div style={{ width: 36, height: 36, borderRadius: 18, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 1px 4px #0002' }}>
          <svg width="18" height="18" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="#fff"/><path d="M12 7v5l4 2" stroke="#2196F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
        </div>
        <div style={{ width: 36, height: 36, borderRadius: 18, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 1px 4px #0002' }}>
          <svg width="18" height="18" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="#fff"/><path d="M12 8a4 4 0 100 8 4 4 0 000-8z" stroke="#2196F3" strokeWidth="2" fill="none"/></svg>
        </div>
      </div>
    </div>
  );
}

export default function NovaDenunciaScreen() {
  const [descricao, setDescricao] = useState('');
  const router = useRouter();
  const iframeRef = useRef(null);
  const localizacao = 'Arraste o mapa para marcar o local';

  return (
    <View style={styles.bg}>
      <View style={styles.cardMapa}>
        <div style={{ position: 'relative', width: '100%', height: 260 }}>
          <iframe
            ref={iframeRef}
            title="Selecione o local no mapa"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14632.61585832213!2d-46.6333!3d-23.5505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1718130000000!5m2!1spt-BR!2sbr"
            width="100%"
            height="260"
            style={{ border: 0, borderRadius: 18 }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
          {/* Mock do marcador central */}
          <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -100%)', pointerEvents: 'none' }}>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="18" cy="18" r="18" fill="#2196F3" fillOpacity="0.2" />
              <path d="M18 8C14.13 8 11 11.13 11 15C11 20.25 18 28 18 28C18 28 25 20.25 25 15C25 11.13 21.87 8 18 8ZM18 17.5C16.62 17.5 15.5 16.38 15.5 15C15.5 13.62 16.62 12.5 18 12.5C19.38 12.5 20.5 13.62 20.5 15C20.5 16.38 19.38 17.5 18 17.5Z" fill="#2196F3"/>
            </svg>
          </div>
        </div>
      </View>
      <View style={styles.cardForm}>
        <Text style={styles.label}>Localização: <Text style={{ color: '#2196F3' }}>{localizacao}</Text></Text>
        <TextInput
          placeholder="Descreva o ocorrido"
          style={styles.input}
          value={descricao}
          onChangeText={setDescricao}
          multiline
        />
        <View style={{ marginTop: 12 }}>
          <Button title="Enviar Denúncia" onPress={() => router.back()} color="#2196F3" />
        </View>
      </View>
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
    alignItems: 'center',
  },
  floatingHeader: {
    position: 'fixed',
    top: 18,
    left: '50%',
    transform: [{ translateX: -0.5 }],
    width: '92%',
    maxWidth: MAX_WIDTH,
    backgroundColor: '#2196F3',
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 18,
    boxShadow: '0 2px 12px #0003',
    zIndex: 100,
    gap: 12,
  },
  headerIconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
    boxShadow: '0 1px 4px #0002',
    display: 'flex',
  },
  headerTitleFloat: {
    flex: 1,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    letterSpacing: 1,
  },
  headerRightIcons: {
    flexDirection: 'row',
    gap: 8,
    display: 'flex',
  },
  cardMapa: {
    width: '92%',
    maxWidth: MAX_WIDTH,
    backgroundColor: '#fff',
    borderRadius: 18,
    marginTop: 18,
    marginBottom: 18,
    overflow: 'hidden',
    boxShadow: '0 2px 12px #0002',
  },
  cardForm: {
    width: '92%',
    maxWidth: MAX_WIDTH,
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 18,
    marginBottom: 18,
    boxShadow: '0 2px 12px #0002',
  },
  label: {
    fontSize: 15,
    marginBottom: 8,
    color: '#222',
  },
  input: {
    width: '100%',
    minHeight: 70,
    backgroundColor: '#F4F8FB',
    borderRadius: 10,
    padding: 10,
    marginBottom: 8,
    textAlignVertical: 'top',
    fontSize: 15,
    color: '#222',
  },
}); 