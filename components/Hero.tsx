import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-[#faf9f5] pt-20"
    >
      <div className="max-w-5xl mx-auto px-6 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
          {/* 텍스트 영역 */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-[#2d5a3d] font-semibold text-sm tracking-widest uppercase mb-4">
              Portfolio
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-[#1a1a1a] leading-tight mb-4">
              임재정
            </h1>
            <p className="text-lg text-[#4b5563] mb-2 font-medium">
              서울시립대학교 경영학부
            </p>
            <p className="text-base text-[#6b7280] mb-8 max-w-md leading-relaxed">
              데이터 분석과 MIS에 관심이 많은<br />
              긍정적인 에너지의 경영학도입니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <a
                href="#about"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#2d5a3d] text-white font-medium rounded-full hover:bg-[#1e3d2a] transition-colors text-sm"
              >
                자기소개 보기
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-[#2d5a3d] text-[#2d5a3d] font-medium rounded-full hover:bg-[#2d5a3d]/5 transition-colors text-sm"
              >
                연락하기
              </a>
            </div>
          </div>

          {/* 프로필 사진 */}
          <div className="flex-shrink-0">
            <div className="relative w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden ring-4 ring-[#e5e3dc] ring-offset-4 ring-offset-[#faf9f5]">
              <Image
                src="/profile.png"
                alt="임재정 프로필 사진"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* 스크롤 유도 */}
        <div className="flex justify-center mt-16 md:mt-24">
          <a href="#about" className="flex flex-col items-center gap-2 text-[#9ca3af] hover:text-[#2d5a3d] transition-colors">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="animate-bounce">
              <path d="M10 4v12M4 10l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
