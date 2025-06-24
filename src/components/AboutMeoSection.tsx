const AboutMeoSection = () => (
  <section className="bg-white py-36 px-4">
    {/* タイトル */}
    <h2 className="text-5xl font-extrabold text-center mb-8 text-orange-500 tracking-tighter leading-tight drop-shadow-sm">
      口コレとは？
    </h2>
    {/* サブ説明（必要に応じて短く） */}
    <div className="max-w-5xl mx-auto text-center mb-16">
      <p className="text-2xl text-gray-900 font-bold mb-3">
        <span className="text-orange-500">Google口コミ運用の成果</span>を最大化するサービス
      </p>
      <p className="text-md text-gray-500 mt-4">
      口コミの“見える化”と自動化によって、これまで手間のかかっていた集客や運用作業が一気に効率化。
膨大な口コミ情報も一目で把握でき、集客アップに直結するヒントや課題も見逃しません。
店舗ごとの強みや改善点をデータで見える化し、日々の運用やお客様対応までサポート。
現場スタッフの負担を減らしながら、誰でも簡単に、持続的に成果を出せる環境を実現します。


      </p>
    </div>

    <div className="flex flex-col items-center justify-center gap-14 mb-10">
      {/* --- 1つ目のビフォーアフターボックス --- */}
      <div className="flex flex-col md:flex-row items-stretch bg-white w-full max-w-4xl rounded-3xl shadow-[0_10px_40px_-5px_rgba(0,0,0,0.10)] border border-gray-200 overflow-hidden transition hover:shadow-[0_16px_56px_-8px_rgba(0,0,0,0.12)]">
        {/* Before */}
        <div className="flex-1 flex flex-col justify-center items-center px-6 py-12 border-r border-gray-100">
          {/* 画像に変更 */}
          <img
            src="/images/gazou4.jpeg" // ←あなたの好きな画像名に！
            alt="口コミが少ない"
            className="h-32 w-auto mb-3 rounded-xl shadow border bg-white"
          />
          <div className="font-bold text-orange-500 text-lg mb-1">Before</div>
          <div className="text-gray-500 text-sm text-center">口コミが集まらない…</div>
        </div>
        {/* Arrow */}
        <div className="flex items-center justify-center px-2 md:px-0">
          <svg width="44" height="44" className="text-gray-300" viewBox="0 0 52 52" fill="none">
            <path d="M12 26h28M32 18l8 8-8 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        {/* After */}
        <div className="flex-1 flex flex-col justify-center items-center px-6 py-12">
          <img
            src="/images/gazou3.jpeg" // ←あなたの好きな画像名に！
            alt="口コミが自動で増える"
            className="h-32 w-auto mb-3 rounded-xl shadow border bg-white"
          />
          <div className="font-bold text-orange-500 text-lg mb-1">After</div>
          <div className="text-gray-500 text-sm text-center">口コミが自動で増える！</div>
        </div>
      </div>

      {/* --- 2つ目のビフォーアフターボックス --- */}
      <div className="flex flex-col md:flex-row items-stretch bg-white w-full max-w-4xl rounded-3xl shadow-[0_10px_40px_-5px_rgba(0,0,0,0.10)] border border-gray-200 overflow-hidden transition hover:shadow-[0_16px_56px_-8px_rgba(0,0,0,0.12)]">
        {/* Before */}
        <div className="flex-1 flex flex-col justify-center items-center px-6 py-12 border-r border-gray-100">
          <img
            src="/images/gazou2.jpeg" // ←お好きな画像に！
            alt="手間が多い"
            className="h-32 w-auto mb-3 rounded-xl shadow border bg-white"
          />
          <div className="font-bold text-orange-500 text-lg mb-1">Before</div>
          <div className="text-gray-500 text-sm text-center">返信が手間…</div>
        </div>
        {/* Arrow */}
        <div className="flex items-center justify-center px-2 md:px-0">
          <svg width="44" height="44" className="text-gray-300" viewBox="0 0 52 52" fill="none">
            <path d="M12 26h28M32 18l8 8-8 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        {/* After */}
        <div className="flex-1 flex flex-col justify-center items-center px-6 py-12">
          <img
            src="/images/gazou1.jpeg" // ←お好きな画像に！
            alt="自動で対応"
            className="h-32 w-auto mb-3 rounded-xl shadow border bg-white"
          />
          <div className="font-bold text-orange-500 text-lg mb-1">After</div>
          <div className="text-gray-500 text-sm text-center">AIで自動返信！</div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutMeoSection;
