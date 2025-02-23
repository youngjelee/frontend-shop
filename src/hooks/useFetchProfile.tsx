import {useEffect, useState} from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { config } from '../../config';
import { ApiResponse } from '@/types/ApiResponse';
import { UserProfile } from '@/types/UserProfile';


export const useFetchProfile = (shouldFetch: boolean) => {
  const { user, setUser } = useAuth();
  const [loading, setLoading] = useState<boolean>(shouldFetch);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!shouldFetch) return; // fetch가 필요 없으면 실행 안 함
    if (user) {
      setLoading(false);
      return; // 이미 프로필 정보가 있으면 건너뜀
    }

    const fetchProfile = async () => {
      try {
        const res = await fetch(`${config.API_URL}/auth/profile`, {
          credentials: 'include', // HttpOnly 쿠키 포함
        });
        if (res.ok) {
          const response: ApiResponse<UserProfile> = await res.json();
          if (response.code === '2000') {
            setUser(response.data);
          } else {
            console.error('프로필 가져오기 실패:', response.message);
            setUser(null);
            setError(new Error(response.message));
          }
        } else {
          console.error('프로필 가져오기 실패, 상태 코드:', res.status);
          setUser(null);
          setError(new Error(`Status Code: ${res.status}`));
        }
      } catch (err) {
        console.error('프로필 가져오기 에러:', err);
        setUser(null);
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [shouldFetch, user, setUser]);

  return { profile: user, loading, error };
};