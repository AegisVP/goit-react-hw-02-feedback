import React from 'react';
import { Wrapper, StatRow, Value, Title } from './Display.styled';

const FeedbackStats = ({ state: { good, neutral, bad } }) => {
  return (
    <Wrapper>
      <Title>Statistics</Title>
      <StatRow>
        Good: <Value>{good}</Value>
      </StatRow>
      <StatRow>
        Neutral: <Value>{neutral}</Value>
      </StatRow>
      <StatRow>
        Bad: <Value>{bad}</Value>
      </StatRow>
    </Wrapper>
  );
};

export { FeedbackStats };
