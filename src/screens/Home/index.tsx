import React, { useState } from 'react';

import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';

//quando voce remove o export default isso faz com que no import do componente voce tenha que envolver com {} o componente que voce quer
//exportacao nomeada

export function Home() {

    //gerencia a variavel com useState
    const [participants, setParticipants] = useState<string[]>([]);
    const [participantName, setParticipantName] = useState('');


    // adiciona um participante
    function handleParticipantAdd() {
        if (participants.includes(participantName)) {
            return Alert.alert("Participante existe","Já existe um participante na lista com esse nome.");
        }

        //adiciona um participante
        setParticipants( prevState => [...prevState, participantName]);
        setParticipantName(''); // limpa o input
    }

    // remove um participante
    function handleParticipantRemove(name: string){
        
        // return console.log(name) -> uma forma de debugar

        // adiciona uma tomada de decisão no alerta
        Alert.alert('Remover',`Remover o participante ${name}?`, [
            {
                text: 'Sim',
                //atualizar a lista retirando o nome informado como parametro
                //retorna todos os participantes menos o que não tem o name
                onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
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
                Domingo, 22 de Setembro de 2024.
            </Text>

            <View style={styles.form}>
                <TextInput 
                    style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor="#6B6B6B"
                    onChangeText={setParticipantName}
                    value={participantName}
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
                renderItem={({ item }) => (
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