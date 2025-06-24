const badges = [
  "月550円～\n複数店舗一括管理",
  "業界トップクラス\n3,800社導入",
  "導入店舗の継続率\n90.5%",
  "日本初の\n4機能を搭載"
];

const Header = () => (
  <header className="w-full min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 flex items-center py-0 px-0">
    <div className="flex w-full h-full flex-col md:flex-row items-stretch gap-0">
      {/* 左：テキストセクション */}
      <div className="w-full md:w-[60%] flex flex-col justify-center h-full">
        <div className="w-full max-w-4xl ml-auto flex flex-col justify-center h-full px-6 py-10">

          {/* タイトル部（2行） */}
          <div className="mb-8 text-center">
            <div className="text-xl md:text-2xl font-semibold text-gray-700 mb-3 tracking-wide">
              多機能・MEO対策ツール
            </div>
            <div className="text-5xl md:text-7xl font-extrabold text-orange-500 leading-tight">
              MAP職人
            </div>
          </div>

          {/* サブキャッチ */}
          <p className="text-xl md:text-2xl text-gray-700 mb-9 font-bold text-center">
            1店舗あたり月550円（税込）から複数店舗を一括管理！
          </p>

          {/* バッジ（画面いっぱいにワイド） */}
          <ul className="flex w-full gap-10 mb-20 flex-wrap justify-between">
            {badges.map((text, i) => (
              <li
                key={i}
                className="flex items-center justify-center bg-yellow-300 rounded-full w-36 h-36 md:w-40 md:h-40 text-sm md:text-base font-bold text-center whitespace-pre-line"
              >
                {text}
              </li>
            ))}
          </ul>

          {/* NEWバナー */}
          <div className="bg-red-400 text-white inline-block px-8 py-3 rounded-xl font-bold text-base md:text-lg mb-4 animate-pulse mx-auto">
            NEW! レポートダウンロード自動機能 登場！
          </div>
          <div className="text-xs md:text-sm text-gray-500 text-center mt-2">
            ※実績・料金は2021年7月時点。<br />
            詳細はお問い合わせください。
          </div>
        </div>
      </div>

      {/* 右：画像セクション */}
      <div className="w-full md:w-[40%] flex items-center justify-center md:justify-end py-10 pr-0">
        <img
          src="/images/gazou1.jpeg"
          alt="サービス画面イメージ"
          className="w-full h-auto max-h-[500px] object-contain rounded-2xl"
        />
      </div>
    </div>
  </header>
);

export default Header;
