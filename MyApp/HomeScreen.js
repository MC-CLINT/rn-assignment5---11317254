
import { View,Text, StyleSheet, Image, FlatList } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from './Components/ThemeContext';



export default function HomeScreen() {

    const { theme } = useTheme();
const backgroundColor = theme === 'dark' ? 'black' : 'white';
const textColor = theme === 'dark' ? 'white' : 'black';


const styles = getStyles(theme);




const TransactionData =[
    {
        Id: 1,
        Company: 'Apple',
        Field:'Entertainment',
        NegAmount: '-$5,99',
        icon: require('../MyApp/assets/apple.png'),
        isBlack: true
    },
    {
        Id: 2,
        Company: 'Spotify',
        Field:'Music',
        NegAmount: '-$12,99',
        icon: require('../MyApp/assets/spotify.png'),
        isBlack: false
    },
    {
        Id: 3,
        Company: 'Money Transfer',
        Field:'Transaction',
        PosAmount: '$300',
        icon: require('../MyApp/assets/moneyTransfer.png'),
        isBlack: true 
    },
    {
        Id: 5,
        Company: 'Grocery',
        Field:'Food',
        NegAmount: '-$88',
        icon: require('../MyApp/assets/grocery.png'),
        isBlack: false
    },
];

return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
        <View style={styles.ProfileBox}>
            <View style={styles.DP}>
                <Image source={require('../MyApp/assets/profile.png')} style={{ width: 70, height: 70, top: 8 }} />
            </View>
            <View style={[styles.ProfileInfo, { backgroundColor: backgroundColor }]}>
                <Text style={[styles.Welcome, { color: textColor }]}>Welcome back,</Text>
                <Text style={[styles.Name, { color: textColor }]}>Eric Atsu</Text>
            </View>
            <View style={styles.SearchContainer}>
                <Icon name="search" size={30} color={textColor} style={{ top: 10, left: 10 }} />
            </View>
            
        </View>

        <Image require source={require('../MyApp/assets/Card.png')} size={150} style={{ top: 10, left: 25 }} />

        <View style={styles.actionsbox}>
            <View style={styles.action}>
                <Icon name="arrow-up" size={40} color={textColor} style={{ top: 15, left: -1 }} />
                <Text style={[styles.actiontext, { color: textColor }]}>Sent</Text>
            </View>

            <View style={styles.action}>
                <Icon name="arrow-down" size={40} color={textColor} style={{ top: 15, left: -1 }} />
                <Text style={[styles.actiontext, { color: textColor }]}>Receive</Text>
            </View>

            <View style={styles.action}>
                <Icon name="cash" size={40} color={textColor} style={{ top: 15, left: -1 }} />
                <Text style={[styles.actiontext, { color: textColor }]}>Loan</Text>
            </View>

            <View style={styles.action}>
                <Icon name="push" size={40} color={textColor} style={{ top: 15, left: -1 }} />
                <Text style={[styles.actiontext, { color: textColor }]}>TopUp</Text>
            </View>
            
        </View>

        <Text style={[styles.HeaderTran, { color: textColor }]}>Transactions</Text>
        <Text style={styles.SeeAll}>See all</Text>

        <FlatList
            data={TransactionData}
            keyExtractor={(item) => item.Id}
            renderItem={({ item, isBlack }) => (
                <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 20, marginBottom: 20, width: 350, height: 45, borderRadius: 10 }}>
                    <View style={styles.ImgCont}>
                        <Image source={item.icon} size={60} style={{ height: 30, width: 30, left: 15, top: 15, tintColor: item.isBlack && theme ==='dark' ? 'white' : null }} />
                    </View>
                    <View style={{ marginLeft: 20 }}>
                        <Text style={{ fontSize: 25, height: 35, fontWeight: '500', color: textColor }}>{item.Company}</Text>
                        <Text style={{ fontSize: 15, color: textColor, opacity: 0.6 }}>{item.Field}</Text>
                    </View>
                    <View>
                        {item.PosAmount && (
                            <Text style={{ fontSize: 20, color: 'blue', top: 15, left: 80 }}>
                                {item.PosAmount}
                            </Text>
                        )}
                        <Text style={{ fontSize: 20, color: textColor, top: 10, left: 145 }}>{item.NegAmount}</Text>
                    </View>
                </View>
            )}
        />
    </View>
);

   
        
}

    function getStyles(theme) {
        return StyleSheet.create({
        container: {
        flex: 1,
        height: '100%',
        backgroundColor: 'white',
        },

        ProfileBox: {
        flexDirection: 'row',
        marginTop: 50,
        marginLeft: 0,
        height: 100,
        width: 370,
        padding: 5
        },
        ProfileInfo: {
        marginLeft: 10,
        width: 150,
        },
        Welcome: {
        fontSize: 26,
        color: 'black',
        opacity: 0.6,
        height: 40,
        paddingTop: 10,
        },
        Name: {
        fontSize: 25,
        fontWeight: '500',
        },
        SearchContainer: {
        backgroundColor: theme === 'dark' ? '#1E1E2D' : 'lightgrey',
        marginLeft: 80,
        top: 15,
        width: 50,
        height: 50,
        borderRadius: 50,
        },
        actionsbox: 
        {
        flexDirection: 'row',
        marginTop: 25,
        marginLeft: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 350,
        height: 109,
        },
        
        action: {
        backgroundColor: theme === 'dark' ? '#1E1E2D' : 'lightgrey',
        opacity: 1,
        height: 70,
        width: 70,
        alignContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        },
        actiontext: {   
        fontSize: 20,
        color: 'black',
        top: 30,
        },
        HeaderTran: {
        fontSize: 25,
        marginTop: 15,
        marginLeft: 20,
        top: 15,
        color: 'black',
        fontWeight: '500',
        },

        SeeAll: {
        fontSize: 15,
        color: 'blue',
        top: -5,
        left: 320,
        },
        ImgCont: {
            backgroundColor: theme === 'dark' ? '#1E1E2D' : 'lightgrey',
            width: 60,
            height: 60,
            borderRadius: 50,
            },

        });

    }