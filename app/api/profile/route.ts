import { NextResponse } from "next/server";

// 향후 DB 연동 시 이 데이터를 데이터베이스에서 조회하도록 교체
const profileData = {
  name: "임재정",
  school: "서울시립대학교",
  major: "경영학부",
  studentId: "199526000",
  email: "limjj157@naver.com",
  phone: "010-0000-0000",
  intro:
    "서울시립대학교에서 경영학을 전공 중인 임재정입니다. 데이터 분석과 MIS에 관심이 많아 시경연에서 2기 회장으로 활발히 활동하고 있습니다. 긍정적인 에너지와 논리적 사고로 팀의 성장을 돕는 인재입니다.",
  activities: [
    { title: "시립대경영정보연구회", role: "2기 회장" },
    { title: "중앙 동아리 연극반", role: "10기 연출 담당" },
    { title: "경영학부 학생회", role: "부회장" },
    { title: "경영학부 사람사랑 소모임", role: "창립멤버" },
  ],
  awards: [
    { period: "2025.01 – 2025.07", title: "(주)원스텝 인턴", type: "career" },
    { period: "2025.08", title: "2025 KOICA 글로벌 서포터즈", type: "activity" },
    { period: "2026.07", title: "2026 서울시립대학교 해커톤 경진대회 3위", type: "award" },
    { period: "2026.09", title: "대한민국 모두의 창업 2기 프로젝트 지원", type: "activity" },
  ],
};

export async function GET() {
  return NextResponse.json(profileData);
}
