// ============================================================
// サイト全体のテキストコンテンツ
// 文章を差し替えたいときは、このファイルだけ編集すればOKです
// ============================================================

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
    { label: '実績を見る', href: '#works', style: 'primary' },
    { label: 'noteを読む', href: '#note', style: 'secondary' },
  ],
  backgroundImage: '/images/hero/bg.jpg',
}

export const services = [
  {
    iconKey: 'webDesign',
    title: 'Webデザイン',
    description:
      'ブランドの世界観を大切にした、美しく使いやすいWebサイトをデザイン・制作します。',
    tags: ['LP', 'コーポレート', 'ポートフォリオ'],
    video: '/images/services/service-01.mp4',
  },
  {
    iconKey: 'aiAutomation',
    title: 'AI活用・業務改善',
    description:
      'ChatGPTやClaudeなどのAIツールを活用した、業務効率化の仕組みづくりを支援します。',
    tags: ['ChatGPT', 'Claude', '自動化'],
    video: '/images/services/service-02.mp4',
  },
  {
    iconKey: 'content',
    title: 'コンテンツ制作',
    description:
      'note記事、SNS運用、プレゼン資料など、伝わるコンテンツを制作します。',
    tags: ['note', 'SNS', '資料制作'],
    video: '/images/services/service-03.mp4',
  },
  {
    iconKey: 'consulting',
    title: 'AI搭載サポート',
    description:
      'AIを学ぶのではなく、自分をアップデートする。音声入力やAI対話を活用し、あなたの仕事にAIを実装する伴走支援です。',
    tags: ['AI実装', 'アップデート', '伴走'],
    video: '/images/services/service-04.mp4',
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
    image: '/images/works/bakusoku-card.jpg',
    href: '#/bakusoku',
  },
  {
    title: 'AI秘書',
    description:
      '毎日の小さな「めんどくさい」をAIが代行。通知の確認やルーティンワークなど、繰り返しの作業をAIに任せることで、あなたは本当に大切な仕事に集中できます。',
    tags: ['ルーティン自動化', 'LINE連携', 'AI代行'],
    price: '80,000円〜',
    image: '/images/works/ai-secretary-card.jpg',
  },
  {
    title: 'Webページ制作',
    description:
      'ホームページやランディングページ、公式LINEの設計まで。ブランドの魅力を最大限に伝えるWebページをトータルで制作します。',
    tags: ['HP', 'LP', '公式LINE'],
    price: '50,000円〜',
    video: '/images/works/brand-lp-card.mp4',
  },
  {
    title: 'ためになるノート',
    description:
      '日常の考え方やAI活用術、アプリの作り方、プロンプトのコツなど、すぐに使える知識をどんどん公開しています。',
    tags: ['AI活用', 'プロンプト', 'アプリ開発'],
    price: '1,000円〜',
    image: '/images/works/note-card.jpg',
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
  name: '杜の都工房',
  title: '古き良き × 最先端',
  bio: [
    '仙台をきっかけに、「古き良き×最先端」というテーマで新しいものづくりを実践しています。世の中にAIが浸透し始め、今までのさまざまな常識が進化しています。人間とAIがやるべきことの棲み分けをしっかりすることで、より人間らしい生活ができると考えています。',
    'こうした技術を学び、実践するきっかけに少しでもなれたら、地域格差などさまざまな問題の解決にもつながるはずです。競争ではなく、共創の社会。こどもたちが夢を見られる明るい未来を一緒に創っていきたい——その思いから、杜の都工房を設立しました。',
  ],
  skills: [
    'AI活用',
    'Webデザイン',
    'React',
    'ライティング',
    'ブランディング',
    'コンサルティング',
  ],
  avatar: '/images/profile/avatar.jpg',
}

export const representative = {
  name: 'おがさわら ともひろ',
  role: '代表',
  photo: '/images/profile/representative-face.jpg',
  location: '仙台市在住（秋田県出身 → 東京 → 仙台）',
  family: '妻・息子・愛犬コーギー',
  career: [
    '高校卒業後に就職。しかし「人生を変えたい」という強い思いから、23歳で独立し単身東京へ。独立後はオンラインサロン運営に携わり、全国約3,300名のオンラインサロン運営に携わらせていただきました。',
    '私自身、絵を描いたり何かを作ったりすることがとても苦手で、自分の考えや感覚を形にできるクリエイターにずっと憧れを持っていました。そんな中でAIの登場は衝撃で、「自分にできなかったことができる時代が来る」と強く感じました。コロナをきっかけに常識が変わっていくことも肌で実感し、だからこそAIの時代にみんなで共創していける社会を目指して活動しています。',
  ],
  hobbies: '宅飲みやドッグランへ行くのが定番。サウナ・キャンプ・DIYも好き。息子が生まれたばかりで、これからどんなことができるかワクワク考え中。夫婦でハワイが好きで、早く息子も連れて行ってあげたいと思っています。',
}

export const story = {
  heading: 'なぜ、これをやるのか',
  paragraphs: [
    'AIの出現は、インターネットの登場に匹敵する——いや、それを超える変化だと思っています。数年後には全員がAIに触れる時代が来ます。「使う・使わない」ではなく、自分のAIと共に生きていく。勉強や資格取得といったレベルではなく、まるでインストールするように自分自身をアップデートしていく感覚が、これからの当たり前になると考えています。',
    '変化の中で奪われるものもあるかもしれません。でも、歴史が証明しているように、新しい仕事や価値観は必ず生まれます。大切なのは、その時代が来ることへの心構えと、AIを道具として使いこなすのではなく、共生していくという姿勢だと思っています。',
    '地方に住んでいること、島国であること、日本語しか話せないこと——今まで壁だったものを、AIは一気に埋めてくれる存在になります。だからこそ、これは大きなチャンスです。この変化を一人でも多くの人と共有し、競争ではなく共創の社会を一緒につくっていきたい。それが杜の都工房の原点です。',
  ],
  quote: ['競争ではなく、共創を。', 'AIと共に生きる社会をつくる。'],
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
  { name: 'X (Twitter)', url: 'https://x.com/', iconKey: 'x' },
  { name: 'note', url: 'https://note.com/', iconKey: 'note' },
  { name: 'Threads', url: 'https://threads.net/', iconKey: 'threads' },
  { name: 'GitHub', url: 'https://github.com/', iconKey: 'github' },
]

export const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Works', href: '#works' },
  { label: 'About', href: '#about' },
  { label: 'Note', href: '#note' },
]
