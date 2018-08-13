import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import style from './style';

const sent = 'Sent';
const received = 'Received';


class FantomTransactionView extends Component {
    render() {
        const {fantomTransactionArr} = this.props;
        return (
            <View style={{ flex: 1}}>
                {fantomTransactionArr.length > 0 && <View style={style.headingCardViewStyle}>
                    <Text style={style.headingCardTextStyle}> Transaction </Text>
                </View>}
                <View style={{ flex: 1}}>
                    {fantomTransactionArr.length > 0 &&
                        <View><Text style={{ margin: 4 }}> 2018-06-03 </Text></View>}

                    {fantomTransactionArr.length > 0 && fantomTransactionArr.map((transaction, index) => (
                        <View style={style.transactionCardStyle}>
                            <View style={style.rowOneStyle}>
                                <Text> {transaction.type} </Text>
                                <View style={style.rowOneViewStyle}>
                                    <Text style={style.rowOneTextStyle}> {(transaction.type === sent ? '-' : '+')} {transaction.amount}</Text>
                                    <Text> {transaction.amountUnit} </Text>
                                </View>
                            </View>
                            <View style={style.rowTwoStyle}>
                                <Text> {(transaction.type === sent ? 'To' : 'From')}</Text>
                                <Text> {transaction.transactionId}</Text>
                                <View style={style.rowTwoViewStyle}>
                                    <Text > {transaction.transactionStatus} </Text>
                                </View>
                            </View>
                        </View>
                    ))
                    }
                    {fantomTransactionArr.length === 0 &&
                        <View style={{ flex: 1, margin: 50, alignItems: 'center'}}>
                            <Text style={{ margin: 4, fontSize: 20, fontWeight: 'bold' }}> No Transaction </Text>
                            <MaterialIcons name='account-balance-wallet' size={65} color='black' />
                            <Text style={{ margin: 4 }}>The wallet will show your recent transaction. </Text>

                        </View>

                    }
                </View>
            </View>
        )
    }
}

export default FantomTransactionView;