// src/pages/oauth/callback/success.tsx
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useFetchProfile } from '@/hooks/useFetchProfile';

const OAuthCallbackSuccess: NextPage = () => {
  const router = useRouter();

  // 프로필 정보를 불러오는 훅 호출 (이 훅은 내부에서 API 호출을 진행합니다)
  useFetchProfile(true);

  useEffect(() => {
    // 예를 들어, 프로필을 불러온 후 바로 홈으로 리다이렉트 할 수 있음
    // 혹은 사용자 상태에 따라 다른 처리를 할 수 있습니다.
    router.push('/');
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Head>
        <title>로그인 성공</title>
      </Head>
      <Header />
      <main className="flex-grow text-center">
        <p>로그인에 성공했습니다. 잠시만 기다려주세요...</p>
      </main>
      <Footer />
    </div>
  );
};

export default OAuthCallbackSuccess;
