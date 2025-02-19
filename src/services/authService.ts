import { config } from '../../config';

export const logoutService = async (): Promise<void> => {
  const res = await fetch(`${config.API_URL}/auth/logout`, {
    method: 'POST',
    credentials: 'include',
  });
  if (!res.ok) {
    throw new Error(`로그아웃 실패, 상태 코드: ${res.status}`);
  }
};
