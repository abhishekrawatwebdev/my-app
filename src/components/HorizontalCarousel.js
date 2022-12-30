import React from 'react'
import { View, ScrollView, Image, Text, StyleSheet } from 'react-native'


const HorizontalCarousel = () => {

    const featuredProducts = [
        {
            image: 'https://strapiproduction-16636.kxcdn.com/uploads/template_01_12_30_205a91b3d9/template_01_12_30_205a91b3d9.jpg?width=640&quality=83',
            name: 'Wind Lite Stealth - 79 grams',
            price: '₹3,640.00',
            productName: 'Badminton Racket / 2 Colors'
        },
        {
            image: 'https://strapiproduction-16636.kxcdn.com/uploads/Template_01_691015075b/Template_01_691015075b.jpg?width=640&quality=83',
            name: 'Energy 10',
            price: '₹4,340.00',
            productName: 'Badminton Shoes'
        },
        {
            image: 'https://strapiproduction-16636.kxcdn.com/uploads/Template_01_5b5d038d07/Template_01_5b5d038d07.jpg?width=640&quality=83',
            name: 'LT Lite',
            price: '₹4,840.00',
            productName: 'Badminton Shoes'
        },
        {
            image: 'https://strapiproduction-16636.kxcdn.com/uploads/1_01_17_965c489534/1_01_17_965c489534.jpg?width=1080&quality=83',
            name: 'Air-Force G2 - 78 grams',
            price: '₹2,890.00',
            productName: 'Badminton Racket / 3 Colors'
        },
        {
            image: 'https://strapiproduction-16636.kxcdn.com/uploads/abds687_3_01_1_0c33cddc07/abds687_3_01_1_0c33cddc07.jpg?width=1080&quality=83',
            name: 'Flash Badminton Kitbag',
            price: '₹1,540.00',
            productName: 'Badminton Bag'
        },
        {
            image: 'https://strapiproduction-16636.kxcdn.com/uploads/Template_01_6cebe5c614/Template_01_6cebe5c614.jpg?width=1080&quality=83',
            name: 'Energy 10',
            price: '₹4,340.00',
            productName: 'Badminton Shoes'
        },
        {
            image: 'https://strapiproduction-16636.kxcdn.com/uploads/Template_01_ebea75febd/Template_01_ebea75febd.jpg?width=1080&quality=83',
            name: 'LT Lite',
            price: '₹4,840.00',
            productName: 'Badminton Shoes'
        },
        {
            image: 'https://strapiproduction-16636.kxcdn.com/uploads/1_01_16_f3fce7ea6c/1_01_16_f3fce7ea6c.jpg?width=1080&quality=83',
            name: 'Air-Force G2 - 78 grams',
            price: '₹2,890.00',
            productName: 'Badminton Racket / 3 Colors'
        },
        {
            image: 'https://strapiproduction-16636.kxcdn.com/uploads/AYTS_087_1_01_26cbc29437/AYTS_087_1_01_26cbc29437.jpg?width=1080&quality=83',
            name: 'Saga Lite VI',
            price: '₹4,290.00',
            productName: 'Badminton Shoes'
        },
        {
            image: 'https://strapiproduction-16636.kxcdn.com/uploads/AYTS_075_1_01_7bf36ec843/AYTS_075_1_01_7bf36ec843.jpg?width=1080&quality=83',
            name: 'Ranger Lite Z1',
            price: '₹4,790.00',
            productName: 'Badminton Shoes'
        },
        {
            image: 'https://strapiproduction-16636.kxcdn.com/uploads/AYPS_209_4_01_78a5132be3/AYPS_209_4_01_78a5132be3.jpg?width=1080&quality=83',
            name: 'BladeX 200R',
            price: '₹3,990.00',
            productName: 'Badminton Racket / 4 Colors'
        },
        {
            image: 'https://strapiproduction-16636.kxcdn.com/uploads/template_01_60_21_341c0c12ec/template_01_60_21_341c0c12ec.jpg?width=640&quality=83',
            name: 'Halberd 3 Lite',
            price: '₹6,990.00',
            productName: 'Badminton Shoes'
        },

    ]
    return (
        <View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {
                    featuredProducts.map(product => {
                        return (
                            <View style={{ padding: 10 }} key={product.image}>
                                <Image source={{ uri: product.image }} style={{ height: 200, width: 200 }} />
                                <Text style={styles.productName}>{product.name}</Text>
                                <Text style={styles.productDec}>{product.price}</Text>
                                <Text style={styles.productDec}>{product.productName}</Text>
                            </View>
                        )
                    })
                }

            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    productName: {
        fontWeight: 'bold',
        fontSize: 13
    },
    productDec: {
        color: '#3d4147',
        fontSize: 10
    },
})

export default HorizontalCarousel