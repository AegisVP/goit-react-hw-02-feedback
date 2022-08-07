import { Box } from 'components/Common/Box';
import { Wrapper } from 'components/Common/Wrapper.styled';
import { FeedbackControls } from 'components/Controlls/Feedback';
import { FeedbackStats } from 'components/Display/Display';
import React, { Component } from 'react';

export const lang = {
  good:{ cc: 'Good', uc: 'GOOD', lc: 'good', key: 'good' },
  neutral:{ cc: 'Neutral', uc: 'OK', lc: 'ok', key: 'neutral' },
  bad:{ cc: 'Bad', uc: 'BAD', lc: 'bad', key: 'bad' },
};

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onFeedbackClick = (key = null) => {
    // String(e.target.textContent).toLocaleLowerCase()
    if (!key) return;

    this.setState(prevState => {
      return { [key]: prevState[key] + 1 };
    });
  };

  render() {
    const totalStats = this.state.good + this.state.neutral + this.state.bad;
    return (
      <Wrapper>
        <FeedbackControls onFeedbackClick={this.onFeedbackClick} />
        {totalStats > 0 ? (
          <FeedbackStats state={this.state} />
        ) : (
          <Box display="flex" justifyContent="center" py="10px">
            No feedback yet
          </Box>
        )}
      </Wrapper>
    );
  }
}

// const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
//     >
//       React homework template
//     </div>
//   );
// };

export { App };
