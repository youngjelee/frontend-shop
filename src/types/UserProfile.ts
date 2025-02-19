// UserProfile.ts (프로필 데이터 구조에 맞게 정의)
export interface UserProfile {
  userid: string;
  nickname: string;
  email: string;
  profileImage?: string;
  // 기타 필요한 필드들 추가
}