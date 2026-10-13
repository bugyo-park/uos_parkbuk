const awards = [
  {
    period: "2025.01 – 2025.07",
    title: "(주)원스텝 인턴",
    description: "스타트업에서 인턴으로 근무하며 실무 경험을 쌓았습니다.",
    type: "career",
  },
  {
    period: "2025.08",
    title: "2025 KOICA 글로벌 서포터즈",
    description: "한국국제협력단(KOICA) 글로벌 서포터즈로 참여하여 국제 개발협력 활동에 기여하였습니다.",
    type: "activity",
  },
  {
    period: "2026.07",
    title: "서울시립대학교 해커톤 경진대회 3위",
    description: "2026 서울시립대학교 해커톤 경진대회에서 3위를 입상하였습니다.",
    type: "award",
  },
  {
    period: "2026.09",
    title: "대한민국 모두의 창업 2기",
    description: "대한민국 모두의 창업 2기 프로젝트에 지원하여 창업 역량을 개발하였습니다.",
    type: "activity",
  },
];

const typeConfig: Record<string, { label: string; color: string; bg: string; border: string }> = {
  career: { label: "인턴", color: "text-[#1d4ed8]", bg: "bg-[#eff6ff]", border: "border-[#bfdbfe]" },
  activity: { label: "활동", color: "text-[#2d5a3d]", bg: "bg-[#f0f7f3]", border: "border-[#c8e0d0]" },
  award: { label: "수상", color: "text-[#92400e]", bg: "bg-[#fffbeb]", border: "border-[#fde68a]" },
};

export default function Awards() {
  return (
    <section id="awards" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          {/* 섹션 레이블 */}
          <div className="md:w-40 flex-shrink-0">
            <p className="text-[#2d5a3d] font-semibold text-sm tracking-widest uppercase">
              Experience
            </p>
            <p className="text-[#9ca3af] text-sm mt-1">수상 및 경력</p>
          </div>

          {/* 타임라인 */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-10">
              주요 수상 및 외부 경력
            </h2>

            <div className="relative">
              {/* 타임라인 선 */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-[#e5e3dc]" />

              <div className="space-y-8">
                {awards.map((item, idx) => {
                  const config = typeConfig[item.type];
                  return (
                    <div key={idx} className="flex gap-6 relative">
                      {/* 타임라인 도트 */}
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white border-2 border-[#2d5a3d] flex items-center justify-center z-10 mt-1">
                        <div className="w-2 h-2 rounded-full bg-[#2d5a3d]" />
                      </div>

                      {/* 카드 */}
                      <div className="flex-1 bg-[#faf9f5] rounded-2xl p-5 border border-[#e5e3dc] hover:shadow-sm transition-shadow">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="text-xs text-[#9ca3af] font-mono">{item.period}</span>
                          <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${config.color} ${config.bg} ${config.border}`}>
                            {config.label}
                          </span>
                        </div>
                        <h3 className="font-bold text-[#1a1a1a] text-base">{item.title}</h3>
                        <p className="text-[#6b7280] text-sm mt-1.5 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
