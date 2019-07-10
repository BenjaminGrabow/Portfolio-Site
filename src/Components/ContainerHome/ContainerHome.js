import React from 'react';
import Top from '../Top/Top';
import TopMiddle from '../Middle/TopMiddle';
import BottomMiddle from '../Middle/BottomMiddle';
import Bottom from '../Bottom/Bottom';

const ContainerHome = () => {
  return (
    <div>
      <Top />
      <TopMiddle />
      <BottomMiddle />
      <Bottom />
    </div>
  );
}

export default ContainerHome;