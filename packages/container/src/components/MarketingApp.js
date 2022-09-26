import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';
import {useHistory} from 'react-router-dom';

export default () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    // ref.current has the reference to the HTML element
    const { onParentNavigate } = mount(ref.current, {
      // location argument is provided when the history.listen calls the callback
      // function, this location object has a pathname property, we are usign an alias
      onNavigate: ({pathname: nextPathname}) => {
        const {pathname} = history.location;
        // Avoid an infinite loop, just navigating when the path is different
        if (pathname !== nextPathname) {
          // Navigate to the path
          history.push(nextPathname);
        }
      },
    });

    history.listen(onParentNavigate);
  }, []);

  // ref={ref} assign the reference to the html
  return <div className='ref' ref={ref}></div>
  // instead of the previous line we could do something like <MarketingComponent /> if we
  // exported the component as MarketingComponent, but we would be assuming that the
  // framework is react and that is not good
}