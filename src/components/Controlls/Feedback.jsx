// import { FbButton } from './Feedback';
// import { Wrapper } from '../Common/Wrapper.styled';

import { Box } from 'components/Common/Box';
import { Title } from 'components/Display/Display.styled';
import { FbButton } from './Feedback..styled';
import { lang } from '../App/App';

export const FeedbackControls = ({ onFeedbackClick }) => {
  return (
    <Box display="flex" flexDirection="column">
      <Title>How did we do?</Title>
      <Box display="flex" flexDirection="row" justifyContent="space-around" alignItems="center" py="10px">
        <FbButton
          backgroundColor="#ccffcc"
          onClick={() => {
            onFeedbackClick(lang.good.key);
          }}
        >
          {lang.good.uc}
        </FbButton>

        <FbButton
          backgroundColor="#ccffff"
          onClick={() => {
            onFeedbackClick(lang.neutral.key);
          }}
        >
          {lang.neutral.uc}
        </FbButton>

        <FbButton
          backgroundColor="#ffcccc"
          onClick={() => {
            onFeedbackClick(lang.bad.key);
          }}
        >
          {lang.bad.uc}
        </FbButton>
      </Box>
    </Box>
  );
};
