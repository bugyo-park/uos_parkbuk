const contactItems = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
    label: "이메일",
    value: "limjj157@naver.com",
    href: "mailto:limjj157@naver.com",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    label: "연락처",
    value: "010-0000-0000",
    href: "tel:010-0000-0000",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: "학교",
    value: "서울시립대학교 경영학부",
    href: null,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#faf9f5]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          {/* 섹션 레이블 */}
          <div className="md:w-40 flex-shrink-0">
            <p className="text-[#2d5a3d] font-semibold text-sm tracking-widest uppercase">
              Contact
            </p>
            <p className="text-[#9ca3af] text-sm mt-1">연락처</p>
          </div>

          {/* 본문 */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">
              연락하기
            </h2>
            <p className="text-[#6b7280] mb-10 leading-relaxed">
              협업, 프로젝트, 또는 궁금한 점이 있으시면 언제든지 연락 주세요.
            </p>

            <div className="space-y-4">
              {contactItems.map((item) =>
                item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-5 bg-white rounded-2xl px-6 py-5 border border-[#e5e3dc] hover:shadow-md hover:border-[#2d5a3d]/30 transition-all group"
                  >
                    <span className="w-10 h-10 flex items-center justify-center bg-[#f0f7f3] rounded-full text-[#2d5a3d] group-hover:bg-[#2d5a3d] group-hover:text-white transition-colors flex-shrink-0">
                      {item.icon}
                    </span>
                    <div>
                      <p className="text-xs text-[#9ca3af] font-medium">{item.label}</p>
                      <p className="text-[#1a1a1a] font-semibold mt-0.5">{item.value}</p>
                    </div>
                  </a>
                ) : (
                  <div
                    key={item.label}
                    className="flex items-center gap-5 bg-white rounded-2xl px-6 py-5 border border-[#e5e3dc]"
                  >
                    <span className="w-10 h-10 flex items-center justify-center bg-[#f0f7f3] rounded-full text-[#2d5a3d] flex-shrink-0">
                      {item.icon}
                    </span>
                    <div>
                      <p className="text-xs text-[#9ca3af] font-medium">{item.label}</p>
                      <p className="text-[#1a1a1a] font-semibold mt-0.5">{item.value}</p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
