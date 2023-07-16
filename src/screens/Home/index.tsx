import { Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';

//quando voce remove o export default isso faz com que no import do componente voce tenha que envolver com {} o componente que voce quer
//exportacao nomeada

export function Home() {

    const participants = ['Juliherms Vasconcelos', 'Cybelle Vasconcelos','Sergio Vasconcelos', 'Fred Vasconcelos', 'Luna Vasconcelos','Silvio Vasconcelos','Joveci Vasconcelos','Tuilo Vasconcelos','Julio Vasconcelos']

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

            <ScrollView showsVerticalScrollIndicator={false}>
                {
                    participants.map(participant => (
                        <Participant
                            key={participant} 
                            name={participant}
                            onRemove={() => handleParticipantRemove("Cybelle Vasconcelos")}
                        />
                    ))
                }
            </ScrollView>
            
        </View>
    );
}