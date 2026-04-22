// ============================================================
// サイト全体のテキストコンテンツ
// 文章を差し替えたいときは、このファイルだけ編集すればOKです
// ============================================================

const B = import.meta.env.BASE_URL.replace(/\/$/, '')

export const site = {
  name: '杜の都工房',
  tagline: '古き良き × 最先端',
  email: 'hello@example.com', // ← 実際のメールアドレスに差し替え
}

export const hero = {
  badge: '共育・共創・共助',
  heading: ['', 'AIと共に生きる新たな社会。', ''],
  subText: [
    '古き良きものと最先端の技術を掛け合わせ、',
    '共に育ち、共に創り、共に助け合う社会を目指します。',
  ],
  cta: [
    { label: 'お仕事はこちら', href: '#works', style: 'primary' },
    { label: 'noteを読む', href: '#note', style: 'secondary' },
  ],
  backgroundImage: `${B}/images/hero/bg.jpg`,
}

export const services = [
  {
    iconKey: 'webDesign',
    title: 'Webデザイン',
    description:
      '見やすい、伝わりやすいWebページを制作します。シンプルなものから派手なものも。目的に合わせて制作します。',
    tags: ['LP', 'ポートフォリオ', 'HP'],
    video: `${B}/images/services/service-01.mp4`,
  },
  {
    iconKey: 'aiAutomation',
    title: 'AI活用・業務改善',
    description:
      '既存システムやSNSの導線を整えます。簡易的なアプリ導入や自動化など用途にあわせてサポートします。',
    tags: ['Webアプリ', '自動化', 'AI秘書'],
    video: `${B}/images/services/service-02.mp4`,
  },
  {
    iconKey: 'content',
    title: 'コンテンツ制作',
    description:
      'note記事、SNS運用、プレゼン資料、研修資料など、目線を合わせたコンテンツを制作します。',
    tags: ['ブログ', '記事', 'SNS投稿'],
    video: `${B}/images/services/service-03.mp4`,
  },
  {
    iconKey: 'consulting',
    title: 'AI搭載サポート',
    description:
      'AIを学ぶよりも、自分にAIを搭載しアップデートする。AIを相棒と呼べるまで、伴走します。',
    tags: ['AI実装', '情報共有', '案件共有'],
    video: `${B}/images/services/service-04.mp4`,
    href: '#/ai-update',
  },
]

export const works = [
  {
    title: 'オリジナルアプリ制作',
    description:
      'あなたの業務や課題に合わせた、世界にひとつだけのオリジナルアプリを制作します。既製品では解決できない「あったらいいな」を、AIとともに形にします。',
    tags: ['オーダーメイド', '業務効率化', 'AI搭載'],
    price: '50,000円〜',
    image: `${B}/images/works/bakusoku-card.jpg`,
    href: '#/bakusoku',
  },
  {
    title: 'AI秘書',
    description:
      '毎日の小さな「めんどくさい」をAIが代行。通知の確認やルーティンワークなど、繰り返しの作業をAIに任せることで、あなたは本当に大切な仕事に集中できます。',
    tags: ['ルーティン自動化', 'LINE連携', 'AI代行'],
    price: '80,000円〜',
    image: `${B}/images/works/ai-secretary-card.jpg`,
    href: '#/ai-secretary',
  },
  {
    title: 'Webページ制作',
    description:
      'ホームページやランディングページ、公式LINEの設計まで。ブランドの魅力を最大限に伝えるWebページをトータルで制作します。',
    tags: ['HP', 'LP', '公式LINE'],
    price: '130,000円〜',
    video: `${B}/images/works/brand-lp-card.mp4`,
    href: '#/web-design',
  },
  {
    title: 'ためになるノート',
    description:
      '日常の考え方やAI活用術、アプリの作り方、プロンプトのコツなど、すぐに使える知識をどんどん公開しています。',
    tags: ['AI活用', 'プロンプト', 'アプリ開発'],
    price: '1,000円〜',
    image: `${B}/images/works/note-card.jpg`,
  },
]

export const features = [
  {
    iconKey: 'sparkle',
    title: 'スキルの拡張',
    description:
      '最新のAIツールと手動での調整を組み合わせ、今までの制作時間を大幅に短縮しながら、高品質な仕上がりを実現します。',
  },
  {
    iconKey: 'bolt',
    title: '軸がぶれない',
    description:
      '企画・デザイン・開発を一貫して担当するため、スピーディーかつ柔軟な対応が可能。途中でイメージが変わるといったブレがなく、最初から最後まで一本の軸で仕上げます。',
  },
  {
    iconKey: 'heart',
    title: 'デザインへのこだわり',
    description:
      '「伝わる」だけでなく「美しい」を追求。一方で、スピードが求められる場面も的確に判断し、品質とスピードを両立した制作を行います。',
  },
]

export const about = {
  name: '杜の都工房について',
  title: '杜の都工房は、Web制作とAI活用支援を通じて、\n企業や地域の課題解決をサポートする工房です。',
  bio: [
    '「新しい技術を取り入れたいけれど、何から始めればいいのかわからない」\n「外注したいけれど、思いや考えをうまく伝えられない」\nそんな声に応えたいという想いから、この工房を立ち上げました。',
    '私たちは、単にAIを使って業務を効率化することだけを目的にはしていません。AIにはAIの得意なことがあり、人には人の得意なことがあります。だからこそ、お客様のサービスや事業、その背景にある想いを丁寧に理解したうえで、それぞれに合った正しい方法で課題解決を行うことを大切にしています。',
    '私たちが目指しているのは、技術によって人の仕事や表現の可能性が広がる社会です。そうした人や取り組みが増えていくことで、地域に、県に、そして東北全体にまで、より良い影響を広げていけると信じています。',
  ],
  skills: [],
  avatar: `${B}/images/profile/avatar.jpg`,
}

export const representative = {
  name: 'おがさわら ともひろ',
  role: '代表',
  photo: `${B}/images/profile/representative-face.jpg`,
  location: '仙台市在住（秋田県出身 → 東京 → 仙台）',
  family: '妻・息子・愛犬コーギー',
  greeting: [
    '杜の都工房 代表の おがさわら ともひろ です。',
    '私が日々感じているのは、今の日本にはどこか余裕のなさが広がり、以前よりも人や社会の空気が少し重くなっていないか、ということです。だからこそ、微力ですが、自分にできることで少しでも貢献できるようなことはないかなと考えることが多くなりました。そんな想いを持ちながら、この工房を営んでいます。',
    'そんな中で出会ったのが、AIという新しい技術でした。\n最初は正直、とても戸惑いがありました。私自身、日本人や温かさというところを求めて地方移住したひとりでもあります。人間らしさや、人にしかできないことこそ大切だと思っていました。ですが、AIに関わっていく中で、この大きな流れはもう止めることができない。そして、世の中を大きく変えてしまう存在と強く感じるようになりました。',
    'だからこそ私は、AIと人が張り合うのではなく、それぞれの得意なことを活かしながら、共に手を取り合って進んでいくことが、これからの未来にとってとても大切だと考えています。\nそしてAIの力によって、これまで何かを生み出したり、自分を表現したりすることに苦手意識を持っていた人でも、少しずつ挑戦しやすくなる社会が生まれていくと信じています。',
    '少しでも明るい未来を増やしていけるように、日々学び、挑戦を重ねてまいります。\nどうぞよろしくお願いいたします。',
  ],
}

export const story = {
  heading: 'なぜ、これをやるのか',
  steps: [
    {
      number: '01',
      title: 'まず、動いてみる',
      body: '難しく考えなくていい。今の仕事や日常で「ここ、もっと楽にできそう」と感じた部分をAIで試してみる。東京でも東北でも、その一歩は今すぐ踏み出せる。',
    },
    {
      number: '02',
      title: 'AIを自分にインストールする',
      body: 'AIは道具として"使う"ものじゃなく、自分自身に"搭載する"もの。使い続けることで思考と行動がアップデートされていく。場所も、学歴も、関係ない。',
    },
    {
      number: '03',
      title: '作って、試して、仲間とシェアする',
      body: '何でもいいから作ってみる、試してみる。その体験を地元の仲間と共有することで、一人の気づきがまわりの10人を動かす。地方にいることは、もう言い訳にならない。',
    },
    {
      number: '04',
      title: '地方から、共創の社会をつくる',
      body: '好きな場所で、好きな人と、好きなことを。AIがあれば東北からでもそれは本気で実現できる。東京との格差を埋めるのではなく、地方が誇れる新しいあたり前をみんなでつくっていく。競争ではなく、共創の時代へ。',
    },
  ],
  quote: ['AIと一緒に仕事をする時代は、もうすぐそこまで来ていると思っています。', 'せっかくなので、一緒に面白がっていきませんか。'],
}

export const noteArticles = [
  {
    title: 'AIを活用したWebサイト制作の全工程を公開',
    date: '2025.04.10',
    description:
      'ChatGPTとClaudeを使い分けながら、企画からデザイン、実装までを行った過程をまとめました。',
    url: 'https://note.com/', // ← 実際のURLに差し替え
  },
  {
    title: '個人でもここまでできる。AI時代のものづくり',
    date: '2025.03.28',
    description:
      '一人で企画から実装まで完結させる、AI時代の新しい働き方について考えました。',
    url: 'https://note.com/',
  },
  {
    title: 'デザイン初心者がAIと一緒に作るポートフォリオ',
    date: '2025.03.15',
    description:
      'デザインの経験がなくても、AIを活用すれば美しいポートフォリオが作れる時代です。',
    url: 'https://note.com/',
  },
]

export const socialLinks = [
  {
    name: 'note',
    url: 'https://note.com/gaogao_note/portal',
    iconKey: 'note',
    image: `${B}/images/social/note-card.png`,
  },
  {
    name: 'Threads',
    url: 'https://www.threads.com/@ogawa_iju?igshid=NTc4MTIwNjQ2YQ==',
    iconKey: 'threads',
    image: `${B}/images/social/threads-card.png`,
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com/',
    iconKey: 'youtube',
    image: `${B}/images/social/youtube-card.png`,
  },
]

export const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Works', href: '#works' },
  { label: 'About', href: '#about' },
  { label: 'Note', href: '#note' },
]
