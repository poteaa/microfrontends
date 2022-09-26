import React from "react";
import { BrowserRouter } from "react-router-dom";
import MarketingApp from "./components/MarketingApp";
import Header from './components/Header';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

// For prod, material-ui for the css styles generates names such as 'jss1', 'jss2', etc, so it
// can collide with other styles, to avoid that we are adding the prefix ma => 'co1'
const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

export default () => {
  return (
    // BrowserRouter internally creates a Browserhistory object
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <MarketingApp />
        </div>
      </StylesProvider>
    </BrowserRouter>
  )
};