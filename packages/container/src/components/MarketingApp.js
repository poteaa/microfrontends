import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    // ref.current has the reference to the HTML element
    mount(ref.current);
  });

  // ref={ref} assign the reference to the html
  return <div ref={ref}></div>
}