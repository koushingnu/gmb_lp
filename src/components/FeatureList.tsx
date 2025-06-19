const points = [
  {
    img: "/images/sample-screenshot-1.png", // ←自分の画像に変更
    title: "POINT 1",
    heading: "上位3位以内の専用エリアに表示されるから",
    description:
      "Googleマップでお店を探す多くのユーザーは、最初に表示される上位3店舗から選ぶ傾向が強いです。だからこそ、検索結果の目立つ場所に表示されることで、集客成功のチャンスが大きく広がります。",
  },
  {
    img: "/images/sample-screenshot-2.png",
    title: "POINT 2",
    heading: "意欲の高いユーザーにアプローチできるから",
    description:
      "『近くのラーメン』『今すぐ行けるカフェ』など、今すぐ来店したいユーザーが検索。意欲が高い見込み客に効率よくアプローチできるのがMEOの強みです。",
  },
  {
    img: "/images/sample-screenshot-3.png",
    title: "POINT 3",
    heading: "電話予約や経路検索がスムーズに行えるから",
    description:
      "Googleマップからそのまま電話予約や道案内までスムーズ。ユーザーの行動導線がシームレスだから、来店率や予約率も大幅アップします。",
  },
];

const WhyKuchikoreSection = () => (
  <section className="bg-white py-32 px-4">
    {/* 見出し */}
    <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-10">
      どうして<span className="text-orange-500">口コレ</span>だと集客に成功できるの？
    </h2>

    {/* 3つのポイント：画像＋テキスト */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-12">
      {points.map((pt, i) => (
        <div
          key={i}
          className="bg-orange-50 rounded-2xl border border-orange-100 shadow px-8 py-10 flex flex-col items-center text-center h-full"
        >
          <img
            src={pt.img}
            alt={pt.heading}
            className="mb-6 h-64 w-auto rounded-xl shadow border border-gray-100 bg-white object-cover"
          />
          <div className="text-orange-500 font-bold mb-2">{pt.title}</div>
          <div className="font-bold text-lg mb-2">{pt.heading}</div>
          <div className="text-gray-700 text-base">{pt.description}</div>
        </div>
      ))}
    </div>

    {/* 締めキャッチ */}
    <p className="text-center text-xl font-bold mt-8">
      <span className="text-orange-500">つまり口コレは</span> コストパフォーマンスが高く、<br className="sm:hidden" />
      効果が出やすい集客方法です。
    </p>
  </section>
);

export default WhyKuchikoreSection;
