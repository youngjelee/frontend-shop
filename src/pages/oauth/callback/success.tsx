// src/pages/oauth/callback/success.tsx
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useFetchProfile } from '@/hooks/useFetchProfile';

const OAuthCallbackSuccess: NextPage = () => {

  // 쿠키에 토큰이 저장되었으므로 별도 처리는 필요없고, 팝업 창을 닫습니다.
  useEffect(() => {
    // 메인 창에 메시지를 보내고 팝업 창 닫기
    if (window.opener) {
      window.opener.postMessage({ type: 'OAUTH_SUCCESS' }, '*');
    }
    window.close();
  }, []);



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
