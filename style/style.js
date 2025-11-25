import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },

    scrollContent: {
        padding: 16,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    header: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 16,
    },

    usuarioBox: {
        width: '100%',
        maxWidth: 700,
        alignSelf: 'center',
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 8,
    },
  


    cartao: {
        backgroundColor: '#e1f7f7',
        padding: 12,
        marginTop: 0,
        borderRadius: 10,
        alignItems: 'flex-start',
        flex: 1,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 5,
    },
    foto: { width: 80, height: 80, borderRadius: 40, marginRight: 12 },
    nome: { fontSize: 18, fontWeight: 'bold' },
    descricao: { fontSize: 14, color: '#555', textAlign: 'left' },
});

export default estilos;