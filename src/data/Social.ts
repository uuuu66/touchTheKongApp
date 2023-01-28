export const SOCIAL_LIST = ['naver', 'kakao', 'google', 'apple'] as const;

export type Social = typeof SOCIAL_LIST[number];
