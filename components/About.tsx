export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          {/* 섹션 레이블 */}
          <div className="md:w-40 flex-shrink-0">
            <p className="text-[#2d5a3d] font-semibold text-sm tracking-widest uppercase">
              About Me
            </p>
            <p className="text-[#9ca3af] text-sm mt-1">자기소개</p>
          </div>

          {/* 본문 */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] leading-snug mb-8">
              안녕하세요,<br />
              <span className="text-[#2d5a3d]">임재정</span>입니다.
            </h2>

            <div className="space-y-5 text-[#4b5563] leading-relaxed text-base md:text-lg">
              <p>
                서울시립대학교에서 경영학을 전공 중인 임재정입니다.
                데이터 분석과 경영정보시스템(MIS)에 깊은 관심을 가지고 있으며,
                시립대경영정보연구회(시경연)에서 2기 회장으로 활발히 활동하고 있습니다.
              </p>
              <p>
                긍정적인 에너지와 논리적 사고를 바탕으로 팀의 성장을 함께 도모하는 것을
                즐기며, 다양한 교내외 활동을 통해 실무 역량을 키워왔습니다.
              </p>
            </div>

            {/* 키워드 태그 */}
            <div className="flex flex-wrap gap-2 mt-8">
              {["데이터 분석", "MIS", "경영학", "리더십", "팀워크", "긍정적 사고"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-[#f0f7f3] text-[#2d5a3d] text-sm font-medium rounded-full border border-[#c8e0d0]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* 기본 정보 */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "학교", value: "서울시립대학교" },
                { label: "전공", value: "경영학부" },
                { label: "학번", value: "199526000" },
                { label: "이메일", value: "limjj157@naver.com" },
              ].map((item) => (
                <div key={item.label} className="flex gap-3 items-start">
                  <span className="text-[#9ca3af] text-sm w-12 flex-shrink-0 pt-0.5">{item.label}</span>
                  <span className="text-[#1a1a1a] text-sm font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
