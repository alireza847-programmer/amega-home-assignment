import VText from 'components/uiElements/text';
import MainLayout from 'layouts/mainLayout';
import texts from 'locales/en';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {FlatList} from 'react-native';
import useWebSocket, {ReadyState} from 'react-native-use-websocket';
import {TradeItem} from './style';
import {BINANCE_WEB_SOCLET_URL, TradeItemDto} from 'types/api/binance';
import {useFocusEffect} from '@react-navigation/native';

const {
  navigation: {marketData},
} = texts;

const MarketData = () => {
  const lastJsonMessage = useRef<TradeItemDto[]>([]);
  const flatListRef = useRef<FlatList>(null);
  const [data, setData] = useState<TradeItemDto[]>([]);
  const {sendJsonMessage, readyState} = useWebSocket(BINANCE_WEB_SOCLET_URL, {
    onError(event) {
      console.log(event);
    },
    onMessage(event) {
      const message: TradeItemDto = JSON.parse(event.data);
      if (message['E']) {
        lastJsonMessage.current.push(message);
      }
    },
  });
  useFocusEffect(
    useCallback(() => {
      const interval = setInterval(() => {
        setData(prevData => [...prevData, ...lastJsonMessage.current]); // Update data every 900 milliseconds
      }, 1000);
      return () => clearTimeout(interval);
    }, []),
  );
  useEffect(() => {
    lastJsonMessage.current = [];
    flatListRef.current?.scrollToEnd();
  }, [data]);
  useEffect(() => {
    if (readyState === ReadyState.OPEN) {
      sendJsonMessage({
        method: 'SUBSCRIBE',
        params: ['btcusdt@aggTrade'],
        id: 1,
      });
    }
  }, [readyState, sendJsonMessage]);
  return (
    <MainLayout title={marketData} withHeader withClose={false}>
      <FlatList
        ref={flatListRef}
        keyExtractor={(item, index) => index.toString()}
        data={
          data.length < 100 ? data : data.slice(data.length - 30, data.length)
        }
        renderItem={({item}) => (
          <TradeItem
            paddingHorizontalRatio={4}
            paddingVerticalRatio={4}
            justifyContent="center">
            <VText typography="regular16">{`${item['s']} | ${item['p']} | ${item['q']}`}</VText>
          </TradeItem>
        )}
      />
    </MainLayout>
  );
};
export default MarketData;
