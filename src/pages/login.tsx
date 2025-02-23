import type {NextPage} from 'next';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import getConfig from 'next/config';
import {useState, useEffect} from 'react';
import {useRouter} from 'next/router';


const {publicRuntimeConfig} = getConfig();
const API_URL = publicRuntimeConfig.API_URL;

const oauthUrls = {
    naver: `${API_URL}/oauth2/authorization/naver`,
    google: `${API_URL}/oauth2/authorization/google`,
    kakao: `${API_URL}/oauth2/authorization/kakao`,
};

const Login: NextPage = () => {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // 메인 창에서 OAuth 응답 메시지를 수신하는 이벤트 리스너 추가
    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
            console.log('메인 창에서 받은 OAuth 응답:', event.data);
            if (event.data && event.data.type === 'OAUTH_SUCCESS') {
                // OAuth 성공 메시지를 받으면 루트 경로로 이동
                router.push('/');
            }
        };
        window.addEventListener('message', handleMessage);

        return () => {
            window.removeEventListener('message', handleMessage);
        };
    }, [router]);


    const handleOauthLogin = (provider: keyof typeof oauthUrls) => {
        const url = oauthUrls[provider];
        // 팝업 창을 열어 OAuth 로그인 페이지 호출
        window.open(url, 'oauthPopup', 'width=600,height=600');
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Head>
                <title>로그인 - Money App</title>
                <meta name="description" content="로그인 페이지"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header/>
            <main className="flex-grow container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-4">로그인</h1>

                {/* 아이디/비밀번호 로그인 폼 */}
                <form
                    className="max-w-md mx-auto mb-8"
                    method="post"
                    action={`${API_URL}/api/auth/login`}
                >
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700">
                            아이디
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 p-2 rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700">
                            비밀번호
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 p-2 rounded"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                    >
                        로그인
                    </button>
                </form>

                {/* 소셜 로그인 버튼 */}
                <div className="max-w-md mx-auto">
                    <p className="text-center mb-4">또는 소셜 로그인</p>
                    <div className="flex flex-col space-y-4">
                        <button
                            type="button"
                            onClick={() => handleOauthLogin('naver')}
                            className="flex items-center justify-center border border-gray-300 p-2 rounded hover:bg-gray-100"
                        >
                            <img
                                src="/images/naver.png"
                                alt="네이버 로그인"
                                width={24}
                                height={24}
                                className="mr-2"
                            />
                            네이버로 로그인
                        </button>
                        <button
                            type="button"
                            onClick={() => handleOauthLogin('google')}
                            className="flex items-center justify-center border border-gray-300 p-2 rounded hover:bg-gray-100"
                        >
                            <img
                                src="/images/google.png"
                                alt="구글 로그인"
                                width={24}
                                height={24}
                                className="mr-2"
                            />
                            구글로 로그인
                        </button>
                        <button
                            type="button"
                            onClick={() => handleOauthLogin('kakao')}
                            className="flex items-center justify-center border border-gray-300 p-2 rounded hover:bg-gray-100"
                        >
                            <img
                                src="/images/kakao.png"
                                alt="카카오 로그인"
                                width={24}
                                height={24}
                                className="mr-2"
                            />
                            카카오로 로그인
                        </button>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default Login;
