import React from 'react';
import { StatRow, Value, Title } from './Display.styled';
// import { Wrapper } from '../Common/Wrapper.styled';
import { Box } from 'components/Common/Box';
import { lang } from '../App/App';

const FeedbackStats = ({ state: { good, neutral, bad } }) => {
  return (
    <Box borderTop="2px solid #DDDDDD">
      <Title>Statistics</Title>
      <StatRow backgroundColor="#ccffcc">
        {lang.good.cc}: <Value>{good}</Value>
      </StatRow>
      <StatRow backgroundColor="#ccffff">
        {lang.neutral.cc}: <Value>{neutral}</Value>
      </StatRow>
      <StatRow backgroundColor="#ffcccc">
        {lang.bad.cc}: <Value>{bad}</Value>
      </StatRow>
      <StatRow backgroundColor="#f0f0f0">
        Total: <Value>{good + neutral + bad}</Value>
      </StatRow>
      <StatRow backgroundColor="#f0fff0">
        Positive %: <Value>{Math.round((good / (good + neutral + bad)) * 100)}%</Value>
      </StatRow>
    </Box>
  );
};

export { FeedbackStats };
