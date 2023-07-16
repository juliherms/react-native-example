import { Text, View, TextInput } from 'react-native';
import { styles } from './styles';

//quando voce remove o export default isso faz com que no import do componente voce tenha que envolver com {} o componente que voce quer
//exportacao nomeada

export function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Nome do Evento
            </Text>

            <Text style={styles.eventDate}>
                Sexta, 4 de Novembro de 2022.
            </Text>

            <TextInput 
                style={styles.input}
                placeholder="Nome do participante"
                placeholderTextColor="#6B6B6B"
             />
        </View>
    );
}