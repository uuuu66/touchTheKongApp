import styled from 'styled-components/native';
import { SocialButton as OriginalSocialButton } from '@src/components/molecules';

// eslint-disable-next-line import/prefer-default-export
export const SocialButton = styled(OriginalSocialButton)<{
  topGap?: number;
  bottomGap?: number;
}>`
  margin-top: ${({ topGap }) => `${topGap ?? 0}px`};
  margin-bottom: ${({ bottomGap }) => `${bottomGap ?? 0}px`};
`;
