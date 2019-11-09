  // 设计图上的比例，宽度
  const basePx = Platform.OS === 'ios' ? 750 : 720;
  exports.setWidth = function px2dp(px) {
    return px / basePx * global.gScreen.screen_width;
  };