import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', alignItems: 'center', justifyContent: 'center' },

    content: { flex: 0.5, backgroundColor: '#fff', width: '90%', padding: 5 },
    close: { alignSelf: 'flex-end', color: 'blue', padding: 5 },
    card: { marginBottom: 10 },
    btn: { padding: 2 },
    btnTxt: { color: '#fff' },
    name: { paddingBottom: 5 },
    touchable: { flexDirection: 'row', alignItems: 'center', marginVertical: 5, padding: 5 }
});
