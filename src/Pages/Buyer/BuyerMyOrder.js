import React from 'react';
import GeneralCard from '../../Components/Cardview/GeneralCard';
import TitleHeader from '../../Components/Header/TitleHeader';

const BuyerMyOrder = () => {
  const cards = [];
  for (var i = 0; i < 5; i++) {
    cards.push(<GeneralCard key={i} />);
  }
  return (
    <div className='BuyerMyOrder-page'>
      <TitleHeader name={'My Order'} />
      <div className='BuyerMyOrder-card'>{cards}</div>
    </div>
  );
};

export default BuyerMyOrder;
