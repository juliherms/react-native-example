import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';

//quando voce remove o export default isso faz com que no import do componente voce tenha que envolver com {} o componente que voce quer
//exportacao nomeada

export function Home() {

    const participants = ['Juliherms Vasconcelos', 'Cybelle Vasconcelos','Sergio Vasconcelos', 'Fred Vasconcelos', 'Luna Vasconcelos','Silvio Vasconcelos','Joveci Vasconcelos','Tuilo Vasconcelos','Julio Vasconcelos']

    function handleParticipantAdd() {
        if (participants.includes("Juliherms Vasconcelos")) {
            return Alert.alert("Participante existe","Já existe um participante na lista com esse nome.");
        }
    }

    function handleParticipantRemove(name: string){
        Alert.alert('Remover',`Remover o participante ${name}?`, [
            {
                text: 'Sim',
                onPress: () => Alert.alert('Deletado!')
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ]);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Nome do Evento
            </Text>

            <Text style={styles.eventDate}>
                Segunda, 17 de Julho de 2023.
            </Text>

            <View style={styles.form}>
                <TextInput 
                    style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor="#6B6B6B"
                />

                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={participants}
                keyExtractor={item => item}
                renderItem={({ item }) =>(
                    <Participant
                            key={item} 
                            name={item}
                            onRemove={() => handleParticipantRemove(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
                    </Text>
                )}
            />
            
        </View>
    );
}