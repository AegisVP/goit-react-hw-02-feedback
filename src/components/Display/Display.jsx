import React from 'react';
import { StatRow, Value, Title } from './Display.styled';
// import { Wrapper } from '../Common/Wrapper.styled';
import { Box } from 'components/Common/Box';
import { lang } from '../App/App';

const FeedbackStats = ({ state: { good, neutral, bad } }) => {
  const totalVotes = Number(good + neutral + bad);
  const percentPositive = Math.round((good / (good + neutral + bad)) * 100);
  let rColor = (255 * (100 - (percentPositive - 50) * 2)) / 100;
  let gColor = (255 * (percentPositive * 2)) / 100;

  rColor = rColor > 255 ? 255 : rColor < 0 ? 0 : rColor;
  gColor = gColor > 255 ? 255 : gColor < 0 ? 0 : gColor;

  const bgColor = `rgba(${rColor}, ${gColor}, 0, 0.25)`;

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
        Total: <Value>{totalVotes}</Value>
      </StatRow>
      <StatRow backgroundColor={bgColor}>
        Positive %: <Value>{percentPositive}%</Value>
      </StatRow>
    </Box>
  );
};

export { FeedbackStats };
