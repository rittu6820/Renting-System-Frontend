import React from 'react';
import GeneralCardSeller from '../../Components/Cardview/GeneralCardSeller';
import TitleHeader from '../../Components/Header/TitleHeader';

const SellerAllproducts = () => {
  const cards = [];
  for (var i = 0; i < 6; i++) {
    cards.push(<GeneralCardSeller key={i} />);
  }
  return (
    <div>
      <TitleHeader name={'All Product'} />
      <div className='BuyerMyOrder-card'>{cards}</div>
    </div>
  );
};

export default SellerAllproducts;
