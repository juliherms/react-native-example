import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';

//quando voce remove o export default isso faz com que no import do componente voce tenha que envolver com {} o componente que voce quer
//exportacao nomeada

export function Home() {

    function handleParticipantAdd() {
        console.log("Você clicou no botão de Adicionar!");
    }

    function handleParticipantRemove(name: string){
        console.log(`Você clicou no botão de removar o participante! ${name}`);

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

            <Participant name="Cybelle Vasconcelos" onRemove={() => handleParticipantRemove("Cybelle Vasconcelos")} />
            <Participant name="Fred Vasconcelos" onRemove={() => handleParticipantRemove("Fred Vasconcelos")}  />
            <Participant name="Luna Vasconcelos"  onRemove={() => handleParticipantRemove("Luna Vasconcelos")}  />
            
        </View>
    );
}