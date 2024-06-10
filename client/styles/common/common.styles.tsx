import { StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
export const commonStyles = StyleSheet.create({
    container :{
        flex:1,
        alignItems:"center",
        justifyContent:"center",

    },
    buttonConatiner:{
        backgroundColor:"#2467EC",
        width:responsiveWidth(88),
        height:responsiveHeight(2.5),
        borderRadius:5,
        marginHorizontal:5
    },
    dotStyle:{
        backgroundColor: "#C6C7CC",
        width: responsiveWidth(2.5),
        height: responsiveWidth(2.5),
        borderRadius: 5,
        marginHorizontal: 5,
    },
    activeDotStyle:{
        backgroundColor: "#2467Ec",
        width: responsiveWidth(2.5),
        height: responsiveWidth(2.5),
        borderRadius: 5,
        marginHorizontal: 5,
    },
    title: {
        fontSize: hp("3.5%"),
        textAlign: "center",
      },
      description:{
        fontSize: hp("3.5%"),
        textAlign: "center",
        color:"#575757"
      }
})
