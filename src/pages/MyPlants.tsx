import React, {useEffect, useState} from "react";
import {View, StyleSheet, Image, Text, FlatList} from "react-native";
import {formatDistance} from 'date-fns';
import {pt} from 'date-fns/locale';

import {Header} from "../components/Header";
import colors from "../../styles/colors";
import ImgWater from '../assets/waterdrop.png';
import {loadPlants, PlantProps} from "../libs/storage";
import fonts from "../../styles/fonts";
import {PlantCardSecundary} from "../components/PlantCardSecundary";


export function MyPlants() {
    const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [nextWaterd, setNextWaterd] = useState<string>();

    useEffect(() => {
        async function loadStorageData() {
            const plantnsStoraged = await loadPlants();

            const nextTime = formatDistance(
                new Date(plantnsStoraged[0].dateTimeNotification).getTime(),
                new Date().getTime(),
                {locale: pt}
            )

            setNextWaterd(
                `Não esqueça de regar a ${plantnsStoraged[0].name} á ${nextTime} horas.`
            )

            setMyPlants(plantnsStoraged);
            setLoading(false);
        }

        loadStorageData();
    }, []);

    return (
        <View style={styles.container}>
            <Header/>

            <View style={styles.spotlight}>
                <Image
                    source={ImgWater}
                    style={styles.spotlightImage}
                />
                <Text style={styles.spotlightText}>
                    {nextWaterd}
                </Text>
            </View>

            <View style={styles.plants}>
                <Text style={styles.plantsTitle}>
                    Próximas regadas
                </Text>

                <FlatList
                    data={myPlants}
                    keyExtractor={(item => String(item.id))}
                    renderItem={({item}) => (
                        <PlantCardSecundary data={item}/>
                    )}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{flex: 1}}
                />

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        paddingTop: 50,
        backgroundColor: colors.background
    },
    spotlight: {
        backgroundColor: colors.blue_light,
        paddingHorizontal: 20,
        borderRadius: 20,
        height: 110,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    spotlightImage: {
        width: 60,
        height: 60
    },
    spotlightText: {
        flex: 1,
        color: colors.blue,
        paddingHorizontal: 20
    },
    plants: {
        flex: 1,
        width: '100%'
    },
    plantsTitle: {
        fontSize: 24,
        fontFamily: fonts.heading,
        color: colors.heading,
        marginVertical: 20
    }
})
