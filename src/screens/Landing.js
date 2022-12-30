import React from 'react'
import { StyleSheet, View, SafeAreaView, ScrollView, Image, Text, TouchableOpacity, StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import HorizontalCarousel from '../components/HorizontalCarousel';

const Landing = () => {
    const [loaded] = useFonts({
        "Inter-bold": require('../../assets/fonts/Inter/Inter-Bold.ttf'),
        "Inter-regular": require('../../assets/fonts/Inter/Inter-Regular.ttf'),
        "Inter-medium": require('../../assets/fonts/Inter/Inter-Medium.ttf'),
    });
    if (!loaded) {
        return null;
    }
    return (
        <SafeAreaView style={{ backgroundColor: 'white' }}>
            <ScrollView >
                <StatusBar style={{ backgroundColor: "black" }} />
                <View style={styles.navbar}>
                    <View>
                        <Image source={require('../../assets/menu.png')} style={styles.menuBtn} />
                    </View>
                    <View>
                        <Image source={require('../../assets/studio-logo.png')} style={styles.navbarlogo} />
                    </View>
                    <View style={styles.rightOptions}>
                        <View style={styles.rightOption}>
                            <Image source={require('../../assets/shopping-bag.png')} style={styles.rightOption} />
                        </View>
                        <View style={styles.rightOption}>
                            <Image source={require('../../assets/search.png')} />
                        </View>
                    </View>
                </View>
                <View style={styles.poster}>
                    <Image source={{ uri: 'https://strapiproduction-16636.kxcdn.com/uploads/Flash_Kit_Bag_Responsive_Banner_Christmas_e8c32cfa6a/Flash_Kit_Bag_Responsive_Banner_Christmas_e8c32cfa6a.jpg?width=1920&quality=82' }} style={{ width: '100%', height: 500 }}></Image>
                </View>
                <View style={styles.sectionMargin}>
                    <Text style={{ fontFamily: 'Inter-bold', fontSize: 25, textAlign: 'center' }}>UNWRAP THE NEW YOU</Text>
                    <Text style={{ fontFamily: 'Inter-medium', padding: 15, textAlign: 'center' }}>Step up your training wih holiday season savings on new equipment </Text>
                    <TouchableOpacity
                        style={{ backgroundColor: 'white', borderWidth: 3, color: 'black', height: 50, width: 120, display: 'flex', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                        <Text style={{ fontFamily: 'Inter-bold' }}>Shop Now</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.paraPadding}>
                    <Text style={{ marginBottom: 15, fontFamily: 'Inter-bold' }}>FEATURED PRODUCTS</Text>
                    <HorizontalCarousel />
                </View>
                {/* second section */}
                <View style={styles.poster}>
                    <Image source={{ uri: 'https://strapiproduction-16636.kxcdn.com/uploads/Shoe_Homepage_Responsive_Banner_f0fc347738/Shoe_Homepage_Responsive_Banner_f0fc347738.jpg?width=1920&quality=82' }} style={{ width: '100%', height: 500 }}></Image>
                </View>
                <View style={styles.sectionMargin}>
                    <Text style={{ fontFamily: 'Inter-bold', fontSize: 25, textAlign: 'center' }}>GO ALL IN WITH THE NEW {'\n'} CHAPTER</Text>
                    <Text style={{ fontFamily: 'Inter-medium', padding: 15, textAlign: 'center' }}>Step up to the new challenge with the latest {'\n'} releases </Text>
                    <TouchableOpacity
                        style={{ backgroundColor: 'white', borderWidth: 3, color: 'black', height: 50, width: 185, display: 'flex', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                        <Text style={{ fontFamily: 'Inter-bold' }}>EXPLORE NEW SHOES</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.paraPadding}>
                    <Text style={{ marginBottom: 15, fontFamily: 'Inter-bold' }}>NEW ARRIVALS</Text>
                    <HorizontalCarousel />
                </View>

                {/* sale section  */}

                <View style={{ ...styles.poster, ...styles.sale_section }}>
                    <Image source={{ uri: 'https://strapiproduction-16636.kxcdn.com/uploads/Responsive_Banner_02_1d32a061c4/Responsive_Banner_02_1d32a061c4.jpg?width=1920&quality=82' }} style={{ width: '100%', height: 500 }}></Image>
                </View>
                <View style={styles.sectionMargin}>
                    <Text style={{ fontFamily: 'Inter-bold', fontSize: 25, textAlign: 'center' }}>AMAZE-APPAREL OFFER!</Text>
                    <Text style={{ fontFamily: 'Inter-medium', padding: 15, textAlign: 'center' }}>Enjoy these exclusive year-ends deals and get cool {'\n'} new court apparel!</Text>
                    <TouchableOpacity
                        style={{ backgroundColor: 'white', borderWidth: 3, color: 'black', height: 50, width: 185, display: 'flex', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                        <Text style={{ fontFamily: 'Inter-bold' }}>VIEW COLLECTION</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.paraPadding}>
                    <Text style={{ marginBottom: 15, fontFamily: 'Inter-bold' }}>OUR BEST T-SHIRTS</Text>
                    <HorizontalCarousel />
                </View>
            </ScrollView >
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    sale_section: {
        paddingTop: 50
    },
    font: {
        fontFamily: 'Inter',
    },
    featuredHeading: {
        fontFamily: 'Inter-bold',
        fontWeight: 'bold',
        marginBottom: 15
    },

    paraPadding: {
        padding: 15,
        textAlign: 'center'
    },
    sectionMargin: {
        paddingTop: 30,
        paddingBottom: 20
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
        fontFamily: 'Inter'
    },
    rightOption: {
        width: 30,
        height: 30,

    },
    rightOptions: {
        width: 100,
        marginLeft: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly'


    },
    menuBtn: {
        width: 25,
        height: 25

    },
    navbarlogo: {
        width: 70,
        height: 35,
        alignSelf: 'center',
        marginLeft: 70
    },
    navbar: {
        padding: 20,
        flexDirection: 'row',
        backgroundColor: "transparent",
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'space-between',
        height: 55
    },
    navbarElements: {
        color: 'black'
    }
});




export default Landing;