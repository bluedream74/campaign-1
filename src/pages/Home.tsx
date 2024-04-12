import KvImage from '../assets/images/kv.webp';
import BgImage from '../assets/images/bg.webp';

const Home = () => {
  return (
    <div className="w-full">
      <img src={KvImage} alt="" />
      <div 
        className='w-full'
        style={{
          backgroundImage: `url(${BgImage})`,
          backgroundColor: 'rgba(155,155, 155, 0.02)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="pt-[20px] pb-[30px] px-[12px]">
          <p className='p-[12px] text-white text-center text-[36px]'>キャンペーン概要</p>
          <div className="border border-solid border-[#4b4b4b] flex flex-col p-[24px] justify-center items-center gap-[40px]">
            <p className='text-center text-[20px] text-white'>岡本吉起からの招待状を受け取ろう！</p>
            <p className='text-center text-[20px] text-white'>1万円分のAmazonギフト券が入った招待状が10つあるよ！</p>
          </div>
        </div>
        <div className="px-[12px] pt-[12px] pb-[30px]">
          <p className='text-center text-white text-[36px] p-[12px]'>
            参加条件
          </p>
          <div className="border border-soliod border-[#4b4b4b] flex flex-col p-[24px] justify-left items-center gap-[30px]">
            <p className='w-full text-[20px] text-white'>① 『プロジェクトK』の公式Xアカウント(@criticalhits_i)をフォロー</p>
            <p className='w-full text-[20px] text-white'>② キャンペーンのポストをリポスト</p>
            <p className='w-full text-[20px] text-white'>③ 「招待状をもらう」ボタンから当選結果をチェック</p>
            <p className='w-full text-[14px] text-white'>※ フォロー前にリポストすると抽選ができないことがあります。その場合、フォローした後、再度リポストをする必要がございます。</p>
          </div>
        </div>
        <div className="px-[12px] pt-[12px] pb-[30px]">
          <p className='text-center text-white text-[36px] p-[12px]'>
            キャンペーン期間
          </p>
          <div className="border border-soliod border-[#4b4b4b] flex flex-col p-[24px] justify-center items-center gap-[30px]">
            <p className='text-[18px] text-white'>開催中 〜 2024年12月25日 (予定)</p>
          </div>
        </div>
        <div className="pt-[34px] pb-[50px] px-[24px] flex justify-center">
          <button className="flex justify-center items-center max-w-[350px] w-full bg-yellow-300 hover:bg-yellow-500 text-black font-bold py-[16px] rounded text-[24px]">招待状をもらう</button>
        </div>
        <div className="px-[12px] pt-[12px] pb-[30px]">
          <p className='text-center text-white text-[36px] p-[12px]'>
            注意事項
          </p>
          <div className="border border-soliod border-[#4b4b4b] flex flex-col py-[36px] pl-[72px] pr-[20px] justify-left items-center gap-[30px]">
            <ul className='text-white text-[12px] leading-normal list-disc tracking-tight'>
              <li>本キャンペーンへの応募にはXアカウントが必要となります</li>
              <li>@criticalhits_iのフォローを外すと抽選対象外となります、ご注意ください</li>
              <li>アカウントを非公開に設定されている場合、対象外となります</li>
              <li>キャンペーン対象の投稿を引用ポストされた場合、Xの仕様上で応募とみなされない場合がございますのでご注意ください</li>
              <li>Xの利用に関するご質問やお問い合わせ、応募受付の確認、賞品対象者についてのご質問にはお答えできません。あらかじめご了承ください</li>
              <li>Xの利用規約により、同じコンテンツを繰り返し投稿および削除を行うと、ポリシーの違反に該当する可能性がございます。   （例：同じ投稿文を使用した連続投稿）</li>
              <li>お客様のXアカウントに何らかの措置が発生した場合、当社は責任を負いかねますのであらかじめご了承ください。</li>
              <li>賞品の転売は固くお断りさせていただきます</li>
              <li>インターネットの通信料、接続料は、お客様の負担となります</li>
              <li>通信の際の接続トラブルについては、責任を負いかねますので、あらかじめご了承ください</li>
              <li>本キャンペーンは、やむを得ない事情により中止または内容が変更になる場合がございますので、あらかじめご了承ください</li>
              <li>本キャンペーンはX社が後援、支援、または運営するものではありません。</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;