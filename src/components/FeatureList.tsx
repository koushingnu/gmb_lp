const points = [
  {
    icon: "📱", // ダミーアイコン。イラストや画像に差し替え可
    title: "POINT 1",
    heading: "上位3位以内の専用エリアに表示されるから",
    description: "Googleマップでお店を探すユーザーの多くは、上位3店舗から選ぶ傾向が高いです。だからこそ検索結果で目立つ場所に表示されることが集客成功の第一歩です。",
  },
  {
    icon: "🎯",
    title: "POINT 2",
    heading: "意欲の高いユーザーにアプローチできるから",
    description: "「近くの飲食店」など、今すぐ行きたいユーザーが検索。意欲が高い来店見込み客に効率よく訴求できるのがMEO集客の最大の強みです。",
  },
  {
    icon: "🔗",
    title: "POINT 3",
    heading: "電話予約や経路検索がスムーズに行えるから",
    description: "Googleマップ上からそのまま電話予約や経路検索ができ、ユーザーの行動導線がスムーズ。だから来店率・成約率がUPします。",
  },
];

const WhyKuchikoreSection = () => (
  <section className="bg-white py-32 px-4">
    {/* 1. メイン画像・イラスト（ここはダミー。あとで画像/イラストに差し替えOK） */}
    <div className="flex justify-center mb-10">
      {/* ここに画像やスマホイラストを入れる */}
      <div className="flex gap-8">
        <div className="text-6xl">📱</div>
        <div className="text-6xl">👥</div>
        <div className="text-6xl">🗺️</div>
      </div>
    </div>

    {/* 2. なぜ口コレなのか？ */}
    <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-6">
      どうして<span className="text-orange-500">口コレ</span>だと<br className="sm:hidden" />集客に成功できるの？
    </h2>

    {/* 3. 3つのポイント */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto my-10">
      {points.map((pt, i) => (
        <div
          key={i}
          className="bg-orange-50 rounded-2xl border border-orange-200 shadow-sm px-8 py-10 flex flex-col items-center text-center"
        >
          <div className="text-4xl mb-3">{pt.icon}</div>
          <div className="text-orange-500 font-bold mb-1">{pt.title}</div>
          <div className="font-bold text-lg mb-2">{pt.heading}</div>
          <div className="text-gray-700 text-base">{pt.description}</div>
        </div>
      ))}
    </div>

    {/* 締めのまとめキャッチ */}
    <p className="text-center text-lg font-bold mt-8">
      <span className="text-orange-500">つまり口コレは</span><br />
      コストパフォーマンスが高く、効果が出やすい集客方法です。
    </p>
  </section>
);

export default WhyKuchikoreSection;
