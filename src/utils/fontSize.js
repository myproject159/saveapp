const setFontSize = (size) => {
    if (global.gScreen.onePixelRatio === 2) {
      // iphone 5s and older Androids
      if (global.gScreen.screen_width < 360) {
        return size * 0.95;
      }
      // iphone 5
      if (global.gScreen.screen_width < 667) {
        return size;
        // iphone 6-6s
      } else if (global.gScreen.screen_width >= 667 && global.gScreen.screen_width <= 735) {
        return size * 1.15;
      }
      // older phablets
      return size * 1.25;
    }
    if (global.gScreen.onePixelRatio === 3) {
      // catch Android font scaling on small machines
      // where pixel ratio / font scale ratio => 3:3
      if (global.gScreen.screen_width <= 360) {
        return size;
      }
      // Catch other weird android width sizings
      if (global.gScreen.screen_width < 667) {
        return size * 1.15;
        // catch in-between size Androids and scale font up
        // a tad but not too much
      }
      if (global.gScreen.screen_width >= 667 && global.gScreen.screen_width <= 735) {
        return size * 1.2;
      }
      // catch larger devices
      // ie iphone 6s plus / 7 plus / mi note 等等
      return size * 1.27;
    }
    if (global.gScreen.onePixelRatio === 3.5) {
      // catch Android font scaling on small machines
      // where pixel ratio / font scale ratio => 3:3
      if (global.gScreen.screen_width <= 360) {
        return size;
        // Catch other smaller android height sizings
      }
      if (global.gScreen.screen_width < 667) {
        return size * 1.20;
        // catch in-between size Androids and scale font up
        // a tad but not too much
      }
      if (global.gScreen.screen_width >= 667 && global.gScreen.screen_width <= 735) {
        return size * 1.25;
      }
      // catch larger phablet devices
      return size * 1.40;
    }
    // if older device ie gScreen.onePixelRatio !== 2 || 3 || 3.5
    return size;
  };
   
  module.exports = setFontSize; // eslint-disable-line no-undef