import React, {useEffect, useState} from "react";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import LifeStatus from "../../Components/Common/LifeStatus";
import StatusBar from "../../Components/Home/StatusBar";
import CreateHabit from "../../Components/Home/CreateHabit";

export default function Home() {

    const navigation = useNavigation();

    const [mindHabit, setMindHabit] = useState();
    const [moneyHabit, setMoneyHabit] = useState();
    const [bodyHabit, setBodyHabit] = useState();
    const [funHabit, setFunHabit] = useState();

    function handleNavAppExplanation(){
        navigation.navigate("AppExplanation");
    }

    return(

        <View style={styles.container}>
            <ScrollView>
                <View style={{alignItems: "center"}}>
                    <Text style={styles.dailyChecks}>
                    ❤️ 20 dias - ✔️ 80 checks
                    </Text> 
                    <LifeStatus/>
                    <StatusBar/>
                    <CreateHabit habitArea="Mente" borderColor="#30B7F3"/>
                </View>
                <Text style={styles.explanationText}
                    onPress = {() => {
                        handleNavAppExplanation();
                    }} >
                    Ver explicação novamente   
                </Text>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(21, 21, 21, 0.98)",
    },
    dailyChecks: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18,
        marginTop: 80,
    },
    explanationText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        paddingTop: 15,
        paddingBottom: 25, 
    },

});