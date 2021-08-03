import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@modules"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_0_324} />
      <View style={styles.View_0_325}>
        <View style={styles.View_I0_325_0_72} />
        <View style={styles.View_I0_325_0_74}>
          <Text style={styles.Text_I0_325_0_74}>jane@example.com</Text>
        </View>
      </View>
      <View style={styles.View_0_326}>
        <View style={styles.View_I0_326_0_72} />
        <View style={styles.View_I0_326_0_74}>
          <Text style={styles.Text_I0_326_0_74}>••••••••••••</Text>
        </View>
      </View>
      <View style={styles.View_0_327}>
        <View style={styles.View_I0_327_0_43} />
        <View style={styles.View_I0_327_0_46}>
          <Text style={styles.Text_I0_327_0_46}>Log in</Text>
        </View>
      </View>
      <View style={styles.View_0_451}>
        <View style={styles.View_I0_451_0_70}>
          <Text style={styles.Text_I0_451_0_70}>Log in</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e2b/3b79/3b131daa6e5004a91fff8dfd86246a7b"
        }}
        style={styles.ImageBackground_0_759}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  View_0_324: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("123.03030303030302%"),
    minHeight: hp("123.03030303030302%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_325: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("7.878787878787878%"),
    minHeight: hp("7.878787878787878%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("22.12121212121212%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_325_0_72: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("7.878787878787878%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 2
  },
  View_I0_325_0_74: {
    flexGrow: 1,
    width: wp("35.199999999999996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333332%"),
    top: hp("2.575757575757578%"),
    justifyContent: "center"
  },
  Text_I0_325_0_74: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_326: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("7.878787878787878%"),
    minHeight: hp("7.878787878787878%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("32.42424242424242%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_326_0_72: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("7.878787878787878%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 2
  },
  View_I0_326_0_74: {
    flexGrow: 1,
    width: wp("16.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333332%"),
    top: hp("2.575757575757578%"),
    justifyContent: "center"
  },
  Text_I0_326_0_74: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_327: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("7.878787878787878%"),
    minHeight: hp("7.878787878787878%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("42.72727272727273%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_327_0_43: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("7.878787878787878%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_I0_327_0_46: {
    flexGrow: 1,
    width: wp("11.733333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.543359375%"),
    top: hp("2.8787878787878824%"),
    justifyContent: "center"
  },
  Text_I0_327_0_46: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.52,
    textTransform: "uppercase"
  },
  View_0_451: {
    width: wp("39.46666666666667%"),
    minWidth: wp("39.46666666666667%"),
    height: hp("6.0606060606060606%"),
    minHeight: hp("6.0606060606060606%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("11.212121212121213%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_451_0_70: {
    flexGrow: 1,
    width: wp("30.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I0_451_0_70: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.54,
    textTransform: "none"
  },
  ImageBackground_0_759: {
    width: wp("3.255228678385417%"),
    minWidth: wp("3.255228678385417%"),
    height: hp("1.7202361424763997%"),
    minHeight: hp("1.7202361424763997%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("4.545454545454546%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
