import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center">
      <div className="container-content text-center">
        <p className="font-serif italic text-taupe tracking-[0.3em] text-sm">
          404
        </p>
        <h1 className="mt-6 heading-display text-cocoa text-4xl md:text-5xl">
          요청하신 페이지를 찾을 수 없습니다.
        </h1>
        <p className="mt-6 text-mocha font-light leading-relaxed">
          주소가 잘못 입력되었거나, 페이지가 이동·삭제되었을 수 있습니다.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-3 px-7 py-3.5 bg-cocoa text-bone text-sm tracking-wider hover:bg-charcoal transition-colors"
        >
          홈으로 돌아가기 <span>→</span>
        </Link>
      </div>
    </section>
  );
}
