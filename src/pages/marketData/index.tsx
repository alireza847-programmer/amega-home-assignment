import VText from 'components/uiElements/text';
import MainLayout from 'layouts/mainLayout';
import texts from 'locales/en';
import React, {useEffect, useRef, useState} from 'react';
import {FlatList} from 'react-native';
import useWebSocket, {ReadyState} from 'react-native-use-websocket';
import _ from 'lodash';

const {
  navigation: {marketData},
} = texts;

const MarketData = () => {
  const {sendJsonMessage, lastJsonMessage, readyState} = useWebSocket(
    'wss://stream.binance.com:443/ws/bnbusdt',
  );
  const [data, setData] = useState([]);

  useEffect(() => {
    if (readyState === ReadyState.OPEN) {
      sendJsonMessage({
        method: 'SUBSCRIBE',
        params: ['btcusdt@aggTrade'],
        id: 1,
      });
    }
  }, [readyState, sendJsonMessage]);

  useEffect(() => {
    if (lastJsonMessage && readyState === ReadyState.OPEN) {
      setTimeout(() => {
        setData(prevData => [...prevData, lastJsonMessage]);
      }, 1000);
    }
  }, [lastJsonMessage, readyState]);
  console.log(lastJsonMessage);
  return (
    <MainLayout title={marketData} withHeader withClose={false}>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={data}
        renderItem={({item}) => <VText>{`${item?.E}|${item?.a}`}</VText>}
      />
    </MainLayout>
  );
};
export default MarketData;
