import MainLayout from 'layouts/mainLayout';
import texts from 'locales/en';
import React from 'react';

const {
  navigation: {marketData},
} = texts;

const MarketData = () => {
  return <MainLayout title={marketData} withHeader withClose={false} />;
};
export default MarketData;
