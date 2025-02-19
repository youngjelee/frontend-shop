import Link from 'next/link';
import {useRouter} from 'next/router';
import {useAuth} from '@/contexts/AuthContext';
import {useFetchProfile} from '@/hooks/useFetchProfile';
import { logoutService } from '@/services/authService';

const Header = () => {
    const router = useRouter();
    const {user, setUser} = useAuth();

    // '/oauth/callback/success'가 아니고, user 정보가 없을 때만 프로필을 가져옵니다.
    const shouldFetch = router.pathname !== '/oauth/callback/success' && !user;
    useFetchProfile(shouldFetch);

    const handleLogout = async () => {
        try {
            await logoutService();
        } catch (error) {
            console.error('로그아웃 API 호출 에러:', error);
        }
        setUser(null);
        router.push('/login');
    };

    return (
        <header className="bg-blue-600 text-white shadow-md py-4 px-6 flex items-center justify-between">
            <div className="flex items-center">
                <span className="font-bold text-2xl">Money App</span>
            </div>
            <nav>
                <ul className="flex items-center space-x-6">
                    <li>
                        <Link href="/">
                            <span className="hover:text-gray-300 cursor-pointer">Home</span>
                        </Link>
                    </li>
                    {user ? (
                        <>
                            <li>
                                <span className="font-medium">{user.nickname}</span>
                            </li>
                            <li>
                                <button
                                    onClick={handleLogout}
                                    className="bg-white text-blue-600 px-4 py-1 rounded-md hover:bg-gray-100 transition-colors"
                                >
                                    Logout
                                </button>
                            </li>
                        </>
                    ) : (
                        <li>
                            <Link href="/login">
                                <span className="hover:text-gray-300 cursor-pointer">Login</span>
                            </Link>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
