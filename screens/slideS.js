function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import { View, Text, Animated, PanResponder, StyleSheet, Easing } from 'react-native';
const Slider = _ref => {
  let {
    width = 350,
    height = 30,
    borderRadius = 25,
    maximumTrackTintColor = '#c7c7c7',
    minimumTrackTintColor = '#ff0067',
    ballIndicatorWidth = 48,
    ballIndicatorHeight = 48,
    ballIndicatorPosition = 60,
    ballIndicatorTextColor = '#000000',
    showBallIndicator = true,
    ballIndicatorColor,
    min,
    max,
    step,
    onChange,
    disabled,
    onComplete,
    value
  } = _ref;
  var _moveStartValue = React.useRef(0);
  const _value = React.useRef(value || min);
  const translation = React.useRef(new Animated.Value(0)).current;
  const isActive = React.useRef(new Animated.Value(0)).current;
  const ballTranslation = React.useRef(new Animated.Value(0)).current;
  const [panResponder, setPanResponder] = React.useState(undefined);
  React.useEffect(() => {
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => false,
      onPanResponderGrant: () => {
        _moveStartValue.current = _value.current;
        isActive.setValue(1);
      },
      onPanResponderTerminationRequest: () => false,
      onPanResponderTerminate: (_event, gestureState) => {
        if (disabled) {
          return;
        }
        const value = fetchNewValueFromGesture(gestureState);
        _changeState(value);
        if (onComplete) {
          onComplete(value);
        }
      }
    });
    setPanResponder(panResponder);
    _changeState(value || 0);
    // eslint-disable-next-line
  }, []);
  const fetchNewValueFromGesture = gestureState => {
    const ratio = gestureState.dx / width;
    const diff = max - min;
    if (step) {
      return Math.max(min, Math.min(max, _moveStartValue.current + Math.round(ratio * diff / step) * step));
    }
    const value = Math.max(min, _moveStartValue.current + ratio * diff);
    return Math.floor(value * 100) / 100;
  };
  const getSliderHeight = value => {
    return (value - min) * width / (max - min);
  };
  const _changeState = value => {
    const sliderWidth = getSliderHeight(value);
    let ballPosition = sliderWidth;
    const ballWidth = ballIndicatorWidth;
    ballPosition = ballPosition - ballWidth / 2;
    Animated.parallel([Animated.timing(translation, {
      toValue: sliderWidth,
      easing: Easing.linear,
      duration: 0,
      useNativeDriver: false
    }), Animated.timing(ballTranslation, {
      toValue: ballPosition,
      easing: Easing.linear,
      duration: 0,
      useNativeDriver: true
    })]).start();
    _value.current = value;
  };
  return /*#__PURE__*/React.createElement(View, {
    style: [{
      height,
      width,
      borderRadius
    }]
  }, /*#__PURE__*/React.createElement(View, _extends({
    style: [styles.container, {
      height,
      width,
      borderRadius,
      backgroundColor: maximumTrackTintColor
    }]
  }, panResponder === null || panResponder === void 0 ? void 0 : panResponder.panHandlers), /*#__PURE__*/React.createElement(Animated.View, {
    style: [styles.slider, {
      width: translation,
      height,
      backgroundColor: minimumTrackTintColor
    }]
  })));
};
const styles = StyleSheet.create({
  ball: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray'
  },
  ballText: {
    fontWeight: '900'
  },
  container: {
    overflow: 'hidden'
  },
  slider: {
    position: 'absolute',
    bottom: 0
  }
});
export default Slider;
//# sourceMappingURL=index.js.map