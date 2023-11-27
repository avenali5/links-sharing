import Image from "next/image";
import React from "react";
import { EmptyStateStyle } from "./EmptyState.style";

const EmptyState = () => {
  return (
    <EmptyStateStyle className='empty-state-wrapper'>
      <Image
        src='/assets/images/placeholder.svg'
        alt=''
        width={30}
        height={50}
      />
      <h3>Start with your info...</h3>
    </EmptyStateStyle>
  );
};

export default EmptyState;
