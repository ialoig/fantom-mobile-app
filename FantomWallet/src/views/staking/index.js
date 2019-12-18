// @flow
import React from "react";
import {
  View,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity
} from "react-native";
import styles from "./styles";
import question from "../../images/question.png";
import Carousel from "react-native-snap-carousel";
import { Metrics, getWidth } from "../../utils/pixelResolver";

const data = [
  {
    title: "My Fantom Wallet",
    availableAmount: "43,680 FTM",
    availableText: "Available to stake",
    currenrtStaking: "160,323 FTM",
    currenrtStakingText: "Currently staking",
    earnedRewards: "3,206 FTM",
    earnedRewardsText: "Earned rewards",
    backgroundColor: "#416ed5",
    titleColor: "#ffffff"
  },
  {
    title: "Aqua Wallet",
    availableAmount: "200,000 FTM",
    availableText: "Available to stake",
    currenrtStaking: "0 FTM",
    currenrtStakingText: "Currently staking",
    earnedRewards: "0 FTM",
    earnedRewardsText: "Earned rewards",
    backgroundColor: "#59c5dd",
    titleColor: "#2b3954"
  }
];

const Staking = ({}: Props) => {
  const _renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          ...styles.walletView,
          marginLeft: index !== 0 ? 20 : 0,
          backgroundColor: item.backgroundColor
        }}
      >
        <View style={{ paddingHorizontal: 22 }}>
          <Text style={{ ...styles.titleView, color: item.titleColor }}>
            {item.title}
          </Text>
          <Text style={{ ...styles.amountStyle, color: item.titleColor }}>
            {item.availableAmount}
          </Text>
          <Text style={{ ...styles.walletTextStyle, color: item.titleColor }}>
            {item.availableText}
          </Text>

          <Text style={{ ...styles.amountStyle, color: item.titleColor }}>
            {item.currenrtStaking}
          </Text>
          <Text style={{ ...styles.walletTextStyle, color: item.titleColor }}>
            {item.currenrtStakingText}
          </Text>
          <Text style={{ ...styles.amountStyle, color: item.titleColor }}>
            {item.earnedRewards}
          </Text>
          <Text style={{ ...styles.walletTextStyle, color: item.titleColor }}>
            {item.earnedRewardsText}
          </Text>
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.buttonStakeView}>
            <Text
              style={{
                ...styles.buttonText,
                color: index === 0 ? item.backgroundColor : item.titleColor
              }}
            >
              Unstake
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonUnstakeView}>
            <Text
              style={{
                ...styles.buttonText,
                color: index === 0 ? item.backgroundColor : item.titleColor
              }}
            >
              Stake
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.stakingTextView}>
        <Text style={styles.stakingText}>Staking</Text>
        <Image
          source={question}
          resizeMode="contain"
          style={styles.imagestyle}
        ></Image>
      </View>
      <View style={styles.crauselView}>
        <Carousel
          data={data}
          renderItem={_renderItem}
          sliderWidth={Metrics.screenWidth}
          itemWidth={getWidth(260)}
          inactiveSlideScale={1}
          inactiveSlideOpacity={1}
        />
      </View>
    </SafeAreaView>
  );
};

export default Staking;