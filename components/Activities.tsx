const activities = [
  {
    title: "시립대경영정보연구회",
    role: "2기 회장",
    description: "데이터 분석 및 MIS 분야 학술 연구회에서 2기 회장을 맡아 연구 활동 및 팀 운영을 주도하였습니다.",
    icon: "📊",
    category: "학술",
  },
  {
    title: "중앙 동아리 연극반",
    role: "10기 연출 담당",
    description: "중앙 동아리 연극반에서 10기 연출을 담당하며 무대 기획과 팀원 협업 역량을 키웠습니다.",
    icon: "🎭",
    category: "문화",
  },
  {
    title: "경영학부 학생회",
    role: "부회장",
    description: "경영학부 학생회 부회장으로서 학생들의 의견을 수렴하고 학부 행사를 기획·운영하였습니다.",
    icon: "🏛️",
    category: "학생회",
  },
  {
    title: "경영학부 사람사랑 소모임",
    role: "창립멤버",
    description: "경영학부 내 사람사랑 소모임을 창립하여 학우들과 따뜻한 커뮤니티를 형성하는 데 기여하였습니다.",
    icon: "💚",
    category: "소모임",
  },
];

export default function Activities() {
  return (
    <section id="activities" className="py-24 bg-[#faf9f5]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          {/* 섹션 레이블 */}
          <div className="md:w-40 flex-shrink-0">
            <p className="text-[#2d5a3d] font-semibold text-sm tracking-widest uppercase">
              Activities
            </p>
            <p className="text-[#9ca3af] text-sm mt-1">학교 활동</p>
          </div>

          {/* 카드 그리드 */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-10">
              교내 활동내역
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {activities.map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-6 border border-[#e5e3dc] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{item.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <span className="text-xs font-medium px-2 py-0.5 bg-[#f0f7f3] text-[#2d5a3d] rounded-full border border-[#c8e0d0]">
                          {item.category}
                        </span>
                      </div>
                      <h3 className="font-bold text-[#1a1a1a] text-base mt-1">{item.title}</h3>
                      <p className="text-[#2d5a3d] text-sm font-semibold mt-0.5">{item.role}</p>
                      <p className="text-[#6b7280] text-sm mt-2 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
