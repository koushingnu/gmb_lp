const AboutMeoSection = () => (
  <section className="bg-white py-36 px-4">
    {/* タイトル */}
    <h2 className="text-5xl font-extrabold text-center mb-8 text-orange-500 tracking-tighter leading-tight drop-shadow-sm">
      口コレとは？
    </h2>
    {/* サブ説明 */}
    <div className="max-w-5xl mx-auto text-center mb-16">
      <p className="text-2xl text-gray-900 font-bold mb-3">
        <span className="text-orange-500">Google口コミ運用の成果</span>を最大化する、オールインワン型クラウドサービス。
      </p>
      <p className="text-lg text-gray-700 leading-relaxed">
      GoogleマップやGoogleビジネスプロフィールで選ばれる時代に合わせて、口コミの収集・分析・自動返信までを一括管理し、どんな店舗でも“評価され続ける”仕組みをつくります。根拠ある改善・集客アップを叶えるための最新MEOサービス。
      </p>
      <p className="text-md text-gray-500 mt-4">
        これまで見えづらかった評価理由や顧客の声もすべて“見える化”。スタッフの負担を減らしながら、売上向上に直結。
      </p>
    </div>

    <div className="flex flex-col items-center justify-center gap-14 mb-10">
      {/* --- 1つ目のビフォーアフターボックス --- */}
      <div className="flex flex-col md:flex-row items-stretch bg-white w-full max-w-6xl rounded-3xl shadow-[0_10px_40px_-5px_rgba(0,0,0,0.10)] border border-gray-200 overflow-hidden transition hover:shadow-[0_16px_56px_-8px_rgba(0,0,0,0.12)]">
        {/* Left (Before) */}
        <div className="flex-1 flex flex-col justify-center items-center px-12 py-14 border-r border-gray-100">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-7xl">🧑‍💼</span>
            <div>
              <div className="font-bold text-orange-500 text-2xl">よくある悩み</div>
              <div className="text-xs tracking-wider text-gray-400 uppercase mt-1">Common Issue</div>
            </div>
          </div>
          <div className="text-gray-800 text-xl text-center font-semibold mb-3">
            口コミがなかなか集まらず、Googleマップで自分の店舗が埋もれてしまっている。SNSやクーポンを工夫しても集客が安定しない、何が響いているのかも見えづらい。
          </div>
          <div className="text-md text-gray-500 mb-2">
            <span className="font-bold text-gray-700">現状：</span>
            競合店との差別化が難しく、来店動機や評価ポイントも曖昧なまま手探りで運営している。
          </div>
          <div className="w-16 h-1 bg-gray-200 rounded-full mt-3 mb-2" />
          <div className="text-xs text-gray-400 tracking-wider">
            例：Googleで検索しても口コミが少なく、選ばれにくい
          </div>
        </div>
        {/* Arrow */}
        <div className="flex items-center justify-center px-2 md:px-0">
          <svg width="52" height="52" className="text-gray-300" viewBox="0 0 52 52" fill="none">
            <path d="M12 26h28M32 18l8 8-8 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        {/* Right (After) */}
        <div className="flex-1 flex flex-col justify-center items-center px-12 py-14">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-7xl">✨</span>
            <div>
              <div className="font-bold text-orange-500 text-2xl">口コレで解決！</div>
              <div className="text-xs tracking-wider text-gray-400 uppercase mt-1">Solution</div>
            </div>
          </div>
          <div className="text-gray-900 text-xl text-center font-extrabold mb-3">
            口コミを自動で集め、評価の見える化や分析も一気通貫。どんな店舗でもGoogleで選ばれるお店に変わります。AIとデータ活用で、やるべきことが一目で分かるから、現場も経営も迷いません。
          </div>
          <div className="text-md text-gray-500 mb-2">
            <span className="font-bold text-gray-700">効果：</span>
            来店理由や評価ポイントがすぐ分かり、対策もスピーディーに。改善のサイクルが回せます。
          </div>
          <div className="w-16 h-1 bg-orange-200 rounded-full mt-3 mb-2" />
          <div className="text-xs text-gray-400 tracking-wider">
            例：新規集客が月2倍に増加。ポジティブな口コミも自然に増える
          </div>
        </div>
      </div>
      {/* --- 2つ目のビフォーアフターボックス --- */}
      <div className="flex flex-col md:flex-row items-stretch bg-white w-full max-w-6xl rounded-3xl shadow-[0_10px_40px_-5px_rgba(0,0,0,0.10)] border border-gray-200 overflow-hidden transition hover:shadow-[0_16px_56px_-8px_rgba(0,0,0,0.12)]">
        {/* Left (Before) */}
        <div className="flex-1 flex flex-col justify-center items-center px-12 py-14 border-r border-gray-100">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-7xl">🕒</span>
            <div>
              <div className="font-bold text-orange-500 text-2xl">運用の課題</div>
              <div className="text-xs tracking-wider text-gray-400 uppercase mt-1">Operation Issue</div>
            </div>
          </div>
          <div className="text-gray-800 text-xl text-center font-semibold mb-3">
            口コミの返信作業に時間を取られ、本来やりたい業務に集中できない。返信が遅れることで、お客様に悪い印象を与えてしまうリスクも気になる。
          </div>
          <div className="text-md text-gray-500 mb-2">
            <span className="font-bold text-gray-700">現状：</span>
            手作業だと全ての口コミに対応しきれず、クレームや低評価が放置されがち。
          </div>
          <div className="w-16 h-1 bg-gray-200 rounded-full mt-3 mb-2" />
          <div className="text-xs text-gray-400 tracking-wider">
            例：繁忙期や土日祝は特に返信が追いつかない
          </div>
        </div>
        {/* Arrow */}
        <div className="flex items-center justify-center px-2 md:px-0">
          <svg width="52" height="52" className="text-gray-300" viewBox="0 0 52 52" fill="none">
            <path d="M12 26h28M32 18l8 8-8 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        {/* Right (After) */}
        <div className="flex-1 flex flex-col justify-center items-center px-12 py-14">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-7xl">🤖</span>
            <div>
              <div className="font-bold text-orange-500 text-2xl">口コレで解決！</div>
              <div className="text-xs tracking-wider text-gray-400 uppercase mt-1">AI Automation</div>
            </div>
          </div>
          <div className="text-gray-900 text-xl text-center font-extrabold mb-3">
            AIによる自動返信で、どんな時間帯でもすぐ対応。面倒な作業を減らしながら、お客様の満足度とリピートを両立できます。
          </div>
          <div className="text-md text-gray-500 mb-2">
            <span className="font-bold text-gray-700">効果：</span>
            どんな口コミも放置せず、信頼感と評価の両方が自然にアップします。
          </div>
          <div className="w-16 h-1 bg-orange-200 rounded-full mt-3 mb-2" />
          <div className="text-xs text-gray-400 tracking-wider">
            例：スタッフ作業が月10時間減、悪い印象の早期リカバリー
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutMeoSection;
