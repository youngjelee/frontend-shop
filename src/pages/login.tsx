import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const API_URL = publicRuntimeConfig.API_URL;

const oauthUrls = {
  naver: `${API_URL}/oauth2/authorization/naver`,
  google: `${API_URL}/oauth2/authorization/google`,
  kakao: `${API_URL}/oauth2/authorization/kakao`,
};

const Login: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>로그인 - Money App</title>
        <meta name="description" content="로그인 페이지" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">로그인</h1>
        {/* 이메일/비밀번호 로그인 폼 */}
        <form
          className="max-w-md mx-auto mb-8"
          method="post"
          action={`${API_URL}/api/auth/login`}  // 백엔드 로그인 엔드포인트
        >
          {/* ... 로그인 폼 입력 요소들 ... */}
        </form>

        {/* 소셜 로그인 */}
        <div className="max-w-md mx-auto">
          <p className="text-center mb-4">또는 소셜 로그인</p>
          <div className="flex flex-col space-y-4">
            <a
              href={oauthUrls.naver}
              className="flex items-center justify-center border border-gray-300 p-2 rounded hover:bg-gray-100"
            >
              <Image
                src="/images/naver.png"
                alt="네이버 로그인"
                width={24}
                height={24}
                className="mr-2"
              />
              네이버로 로그인
            </a>
            <a
              href={oauthUrls.google}
              className="flex items-center justify-center border border-gray-300 p-2 rounded hover:bg-gray-100"
            >
              <Image
                src="/images/google.png"
                alt="구글 로그인"
                width={24}
                height={24}
                className="mr-2"
              />
              구글로 로그인
            </a>
            <a
              href={oauthUrls.kakao}
              className="flex items-center justify-center border border-gray-300 p-2 rounded hover:bg-gray-100"
            >
              <Image
                src="/images/kakao.png"
                alt="카카오 로그인"
                width={24}
                height={24}
                className="mr-2"
              />
              카카오로 로그인
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
