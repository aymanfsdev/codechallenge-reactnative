import React, {useState, useEffect} from 'react';
import {StatusBar} from 'react-native';
import {useSelector} from 'react-redux';

import Constants from './Constants';

import Splash from './pages/Splash';
import CarouselItems from './pages/CarouselItems';
import Tabbar from './pages/Tabbar/Tabbar';

/**
 * @author Stanley George
 * @function CoreApp
 **/
const CoreApp = props => {
  const [showSplash, setShowSplash] = useState(true);
  const appState = useSelector(state => state.appStateSlice);

  useEffect(() => {
    // Show Splash initially

    setShowSplash(true);
    setTimeout(() => {
      setShowSplash(false);
    }, Constants.splashTime);
  }, []);

  if (showSplash) {
    return (
      <>
        <StatusBar barStyle={'dark-content'} />
        <Splash />
      </>
    );
  }

  if (!showSplash && !appState.carouselDone) {
    return (
      <>
        <StatusBar barStyle={'dark-content'} />
        <CarouselItems />
      </>
    );
  }

  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <Tabbar />
    </>
  );
};

export default CoreApp;
