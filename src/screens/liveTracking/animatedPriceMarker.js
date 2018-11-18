import React from 'react';
import PropTypes from 'prop-types';

import {
  StyleSheet,
  Text,
  Animated,
} from 'react-native';

class AnimatedPriceMarker extends React.Component {
  render() {
    const { amount, selected, style } = this.props;

    const background = selected.interpolate({
      inputRange: [0, 1],
      outputRange: ['#1fb4ff', '#4da2ab'],
    });

    const border = selected.interpolate({
      inputRange: [0, 1],
      outputRange: ['#0081c2', '#007a87'],
    });

    return (
      <Animated.View style={[styles.container, style]}>
        <Animated.View
          style={[
            styles.bubble,
            {
              backgroundColor: background,
              borderColor: border,
            },
          ]}
        >
          <Text style={styles.amount}>{amount}</Text>
          <Text style={styles.percent}>%</Text>
        </Animated.View>
        <Animated.View
          style={[styles.arrowBorder, { borderTopColor: border }]}
        />
        <Animated.View
          style={[styles.arrow, { borderTopColor: background }]}
        />
      </Animated.View>
    );
  }
}

AnimatedPriceMarker.propTypes = {
  amount: PropTypes.number.isRequired,
  selected: PropTypes.object.isRequired,
  style: PropTypes.any,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
  },
  bubble: {
    flex: 0,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: '#FF5A5F',
    paddingVertical: 2,
    paddingHorizontal: 4,
    borderRadius: 3,
    borderColor: '#D23F44',
    borderWidth: 0.5,
  },
  percent: {
    color: '#fff',
    fontSize: 10,
  },
  amount: {
    color: '#fff',
    fontSize: 13,
  },
  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderWidth: 4,
    borderTopColor: '#FF5A5F',
    alignSelf: 'center',
    marginTop: -9,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderWidth: 4,
    borderTopColor: '#D23F44',
    alignSelf: 'center',
    marginTop: -0.5,
  },
  selectedBubble: {
    backgroundColor: '#4da2ab',
    borderColor: '#007a87',
  },
  selectedArrow: {
    borderTopColor: '#4da2ab',

  },
  selectedArrowBorder: {
    borderTopColor: '#007a87',
  },
});

export default AnimatedPriceMarker;
