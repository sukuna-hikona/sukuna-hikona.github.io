export const projects = [
  {
    id: 1,
    title: 'セキュリティ脆弱性管理プラットフォーム',
    period: '2025年6月〜',
    role: '個人開発',
    tags: ['Laravel', 'Vue.js', 'MySQL', 'Redis', 'Stripe', 'Pusher'],
    summary: '企業・組織のセキュリティ担当者向けの脆弱性管理SaaS。NVD・MyJVN・GitHub Advisoryから脆弱性情報を自動収集・マッチングし、リアルタイム通知。チェックリスト診断によるNextアクション提示や未対応脆弱性のダッシュボード表示により、対策の優先順位を明確化。Stripe連携のサブスクリプション課金に対応。',
    status: '開発中',
    detail: {
      challenges: [
        '自社サーバ・ソフトウェアに関連する脆弱性を見逃すリスク',
        '脆弱性発見後に次に何をすべきか判断が難しい',
        'サーバ利用用途の入力が煩雑でユーザーの負担になりやすい',
        '脆弱性情報の多言語対応（英語→日本語翻訳）'
      ],
      solution: '監視対象のサーバ/ソフトウェアを登録するだけで、関連する脆弱性情報を自動収集・マッチングし、リアルタイムで通知。チェックリスト診断によるNextアクション提示で次の対策を明確化し、ダッシュボードで未対応脆弱性を一覧表示。サーバ利用用途のテンプレート機能により、登録時の入力負荷を軽減します。',
      techStack: {
        'Backend': 'Laravel 12.0 (PHP 8.2+)',
        'Frontend': 'Vue.js 3.4 + Vue Router 4.2 + Pinia 2.1',
        'Database': 'MySQL',
        'Cache/Session': 'Redis',
        'CSS': 'Tailwind CSS 4.0',
        '認証': 'Laravel Sanctum + 2要素認証',
        '決済': 'Stripe（Laravel Cashier）',
        'リアルタイム通信': 'Pusher + Laravel Echo',
        '翻訳API': 'DeepL API',
        '外部API': 'NVD API / MyJVN API / GitHub Advisory API'
      },
      features: [
        '脆弱性情報の自動収集・統合（NVD, MyJVN, GitHub Advisory）',
        'サーバ/ソフトウェア追跡・マッチング（AI関連性判定）',
        'チェックリスト診断・Nextアクション提示',
        'ダッシュボードでの未対応脆弱性一覧表示',
        'サーバ利用用途テンプレート機能',
        'マルチチャネル通知（メール、Webhook、リアルタイム）',
        'SaaSサブスクリプション（3段階プラン）'
      ],
      highlights: [
        '複数データソースの統合アーキテクチャ（並列取得・リトライ・自動マージ）',
        'チェックリスト診断結果に基づくNextアクション自動提示ロジック',
        'ダッシュボードでの未対応脆弱性のリアルタイム可視化',
        'サーバ利用用途テンプレートによるUX改善',
        'セキュリティを意識した実装（2FA、セッション管理、セキュリティヘッダー）',
        'Pusher + Laravel Echoによるリアルタイム通知基盤',
        'マルチテナント対応のSaaS設計（Stripe Webhook連携）'
      ]
    }
  },
  {
    id: 2,
    title: 'Cloud Functions による自動同期基盤',
    period: '個人開発',
    role: '個人開発',
    tags: ['Python', 'Cloud Functions', 'Firestore', 'Google Sheets API'],
    summary: '2つのGoogleスプレッドシート間で検品チェックボックスの状態を自動同期するシステム。GAS実装をクラウドネイティブに移行し、処理速度・信頼性・保守性を大幅に向上。',
    detail: {
      techStack: {
        'ランタイム': 'Google Cloud Functions (2nd Gen) / Python 3.13',
        'データベース': 'Firestore（キャッシュ・状態管理）',
        'API': 'Google Sheets API v4',
        'スケジューラ': 'Cloud Scheduler',
        '認証': 'サービスアカウント（IAM）'
      },
      features: [
        '検品チェックの双方向同期（差分検出）',
        '競合解決（親シート優先）',
        '除外行の自動非表示/再表示',
        '行操作の同期（追加・削除・移動）'
      ],
      highlights: [
        'パフォーマンス最適化（差分検出 + バッチ更新でAPI呼び出し削減）',
        '明確な優先順位による競合解決メカニズム',
        '堅牢なデータ型正規化（TRUE, "true", 1, None を統一処理）',
        'タスク特性に応じた実行間隔の分離（1分/10分）'
      ],
      improvements: {
        '処理速度': '全行スキャン数十秒 → 差分検出で数秒以内',
        '同期漏れ': 'タイムアウトによる発生 → キャッシュベースで漏れなし',
        '実行制限': 'GAS 6分制限 → Cloud Functionsで制限なし',
        'コスト': '無料 → 月額0円（無料枠内）'
      }
    }
  },
  {
    id: 3,
    title: '連結会計業務効率化SaaS',
    period: '2024年6月〜',
    role: 'フリーランス',
    tags: ['Laravel', 'Vue.js', 'MySQL', 'Decimal.js'],
    summary: '複数子会社を持つ企業グループ向けの連結財務諸表作成支援SaaS。DBテーブル126、画面数104の大規模システムを要件定義から運用まで一人で担当。高精度計算と85個のサービスクラスで保守性と正確性を両立。',
    detail: {
      techStack: {
        'バックエンド': 'Laravel 10 / PHP 8.1',
        'フロントエンド': 'Vue.js 3 / Vite / Bootstrap 5',
        'データベース': 'MySQL',
        '認証': 'Laravel Sanctum',
        'Excel処理': 'Maatwebsite Excel',
        '高精度計算': 'Decimal.js（フロント）/ Brick Money（バック）'
      },
      scale: {
        'DBテーブル数': '126',
        '画面数': '104',
        'コントローラ数': '77',
        'サービスクラス数': '85',
        'モデル数': '116',
        'ルート定義': '約900行'
      },
      features: [
        '連結仕訳の自動生成（資本連結・内部取引消去・未実現利益消去）',
        '連結ワークシートの出力（会社別・勘定科目別・セグメント別）',
        'Excelインポート/エクスポート',
        '決算期の繰越処理'
      ],
      highlights: [
        '会計処理に求められる誤差ゼロの金額計算の実践',
        '85個のサービスクラスによるビジネスロジック分離',
        '機能別×操作別 11種類のミドルウェアによる権限管理',
        'ワークシートキャッシュによるパフォーマンス最適化'
      ],
      scope: '要件定義〜運用まで全工程、DB設計、バックエンド・フロントエンド実装、本番環境構築・運用'
    }
  },
  {
    id: 4,
    title: '拾得物管理アプリケーション',
    period: '2023年9月〜',
    role: 'フリーランス / 全体9名',
    tags: ['Laravel', 'Vue.js', 'MySQL'],
    summary: 'iPadの既存アプリをWebアプリケーションとして刷新。Laravel + Vue.jsを本格的に習得した案件であり、フリーランスとしてのチーム開発の起点。既存アプリから仕様を読み取り提案する力を養った。',
    detail: {
      challenges: [
        '既存のiPadアプリが老朽化し、Webブラウザ対応が必要',
        'iPadアプリの仕様書が存在せず、動作から仕様を読み取る必要がある',
        'フリーランスとして初のチーム開発への適応'
      ],
      solution: '既存iPadアプリの動作を分析・仕様化し、Laravel + Vue.jsによるWebアプリケーションとして刷新。ブラウザベースにすることでデバイス依存を解消し、保守性と拡張性を向上させた。',
      techStack: {
        'Backend': 'Laravel / PHP',
        'Frontend': 'Vue.js / JavaScript / CSS',
        'Database': 'MySQL'
      },
      scale: {
        'チーム規模': '全体9名（開発6名）',
        '担当期間': '2023年9月〜'
      },
      features: [
        '問い合わせページ機能',
        '届出ページ機能',
        '拾得物ステータス管理（保管・返還・処分）'
      ],
      scope: '基本設計 → 詳細設計 → 実装・単体テスト → 結合テスト → 保守・運用',
      highlights: [
        'Laravel + Vue.jsの実践的な習得（以降の主力技術スタックの基盤）',
        '既存iPadアプリの動作から仕様を読み取り、Web版として提案・採用',
        'クライアントへの追加要望の提案がほぼそのまま採用',
        'フリーランス初案件で最大9名のチーム開発に適応'
      ]
    }
  },
  {
    id: 5,
    title: '請求及び明細書作成アプリケーション',
    period: '2023年7月〜2024年2月',
    role: 'フリーランス / 全体8名',
    tags: ['SpringBoot', 'Java', 'Bootstrap'],
    summary: '既存社内システムのリニューアル案件。アカウント管理と請求書作成機能を担当。GitHubを利用したブランチ運用・プルリクエストベースの開発フローを実践的に習得。',
    detail: {
      challenges: [
        '既存社内システムの老朽化と保守性の低下',
        '複数メンバーによるDB定義の整合性確保',
        'ブランチ運用・プルリクエストベースの開発フロー未経験'
      ],
      solution: '既存社内システムをSpringBoot / Java + Bootstrapでフルリニューアル。GitHubを活用したモダンな開発フローを導入し、チーム全体の開発効率を向上させた。',
      techStack: {
        'Backend': 'SpringBoot / Java',
        'Frontend': 'JavaScript / CSS / Bootstrap'
      },
      scale: {
        'チーム規模': '全体8名（開発4名）',
        '担当期間': '2023年7月〜2024年2月'
      },
      features: [
        'アカウント管理機能（ユーザー登録・権限管理）',
        '請求書作成・出力機能',
        '明細書の生成・編集'
      ],
      scope: '基本設計 → 詳細設計 → 実装・単体テスト → 結合テスト → 保守・運用',
      highlights: [
        'GitHubを利用したブランチ運用・プルリクエストベースの開発フロー習得',
        '他メンバーとのDB定義のすり合わせ（チーム開発における合意形成）'
      ]
    }
  },
  {
    id: 6,
    title: 'BRAVIA入力異常検知アプリケーション',
    period: '2021年11月〜2022年2月',
    role: '会社員 / 1名',
    tags: ['SpringBoot', 'Java', 'Tomcat'],
    summary: 'SONY BRAVIAモニタの入力信号を監視し、異常検知時に自動通知。API調査からデプロイまで全工程を一人で完遂。Webhook通知とハードウェアAPI連携を経験。',
    detail: {
      challenges: [
        'BRAVIAモニタの入力信号異常を手動監視する運用負荷',
        'ハードウェアAPIの公開ドキュメントが限定的で調査が必要',
        '異常検知からリアルタイム通知までの一貫した自動化'
      ],
      solution: 'SONY BRAVIA APIと連携し、入力信号の状態を自動監視するSpringBootアプリケーションを構築。Webhook通知により、異常検知時に即座に担当者へ通知し、現場の運用負荷を大幅に削減した。',
      techStack: {
        'Backend': 'SpringBoot / Java',
        'Frontend': 'JavaScript / CSS',
        'Server OS': 'Windows 10',
        'MW': 'Tomcat'
      },
      scale: {
        'チーム規模': '1名（全工程を単独担当）',
        '担当期間': '2021年11月〜2022年2月'
      },
      features: [
        'BRAVIAモニタの入力信号リアルタイム監視',
        '異常パターン検知ロジック',
        'Webhook による自動通知機能'
      ],
      scope: '要件定義 → 基本設計 → 詳細設計 → 実装・単体テスト → 結合テスト → 総合テスト → 保守・運用',
      highlights: [
        'Webhookによるリアルタイム通知機能の構築（イベント駆動型設計）',
        'BRAVIAのAPIドキュメント調査・ハードウェア連携開発',
        '現場調査に基づく運用負荷最小化の設計（利用用途・グループ・スケジュールを考慮）'
      ]
    }
  },
  {
    id: 7,
    title: 'リモートCALL 授業支援システム',
    period: '2021年5月〜2024年1月',
    role: '会社員 / 全体3名',
    tags: ['SpringBoot', 'Java', 'MariaDB', 'Ubuntu', 'Nginx'],
    summary: 'デスクトップアプリ・AV機器・Webアプリの3者間連携による授業支援システム。API作成、TCP通信機構構築、サーバー2台の構築など幅広く担当。',
    detail: {
      challenges: [
        'デスクトップアプリ・AV機器・Webアプリの3者間連携という複雑なアーキテクチャ',
        '障害発生時の原因切り分けが困難な多層構成',
        'エンドユーザー（先生方）がITに詳しくないため、シンプルなUI設計が必須'
      ],
      solution: '3者間連携のアーキテクチャを設計し、TCP通信によるリアルタイム制御とWeb画面による操作インタフェースを統合。障害切り分け用のログ設計と、先生方が直感的に操作できるUIにより、安定した授業支援環境を実現した。',
      techStack: {
        'Backend': 'SpringBoot / Java',
        'Frontend': 'JavaScript / CSS / Bootstrap',
        'Database': 'MariaDB',
        'Server OS': 'Ubuntu',
        'MW': 'Nginx / Tomcat'
      },
      scale: {
        'チーム規模': '全体3名（開発2名）',
        '担当期間': '2021年5月〜2024年1月',
        'サーバー構成': '公開用 + 音声ミキシング用の2台'
      },
      features: [
        'デスクトップアプリ連携API',
        'AV制御用ハードウェアとのTCP通信機構',
        '小テスト機能',
        '管理者用UI（授業登録等）',
        '受講者用UI',
        '公開用・音声ミキシング用サーバー構築',
        'データベース構築'
      ],
      scope: '詳細設計 → 実装・単体テスト',
      highlights: [
        'Spring Bootでの本格的なアプリケーション構築',
        '3者間連携の複雑なアーキテクチャ設計（障害切り分け用ログ設計）',
        'エンドユーザー（先生方）を意識したシンプルなUI設計',
        '公開用 + 音声ミキシング用の複数サーバー構築'
      ]
    }
  },
  {
    id: 8,
    title: '英語学習アプリケーション 音声認識機能',
    period: '2020年11月〜2024年1月',
    role: '会社員 / 全体8名',
    tags: ['Java', 'PHP', 'JavaScript', 'AlmaLinux'],
    summary: '英語学習アプリにおける音声認識機能の開発。Google Chrome音声認識APIを活用し、教材配布・採点APIとの連携部分を構築。音声認識の精度向上にこだわった。',
    detail: {
      challenges: [
        '音声認識の精度がブラウザ環境やノイズに大きく左右される',
        '教材配布・採点APIとの複雑な連携が必要',
        '他開発者とのAPI結合をスムーズに進めるためのドキュメント整備'
      ],
      solution: 'Google Chrome音声認識APIを活用し、音声入力から採点APIへの連携パイプラインを構築。認識エラーの傾向分析と入力タイミング・ノイズ処理の調整により、学習効果に直結する認識精度を実現した。',
      techStack: {
        'Backend': 'Java / PHP',
        'Frontend': 'JavaScript / Bootstrap',
        'Server OS': 'MiracleLinux / AlmaLinux'
      },
      scale: {
        'チーム規模': '全体8名（開発2名）',
        '担当期間': '2020年11月〜2024年1月'
      },
      features: [
        'Google Chrome音声認識APIを利用した音声入力機能',
        '教材配布APIとの連携',
        '音声認識結果に基づく採点API連携'
      ],
      scope: '基本設計 → 詳細設計 → 実装・単体テスト',
      highlights: [
        'API仕様のドキュメント化による他開発者とのスムーズな結合',
        '音声認識精度向上（認識エラー傾向分析、入力タイミング・ノイズ処理調整）',
        'Bootstrapを利用したレスポンシブUI構築'
      ]
    }
  },
  {
    id: 9,
    title: '社内用見積書作成アプリケーション',
    period: '2014年7月〜2015年4月',
    role: '会社員 / 1名',
    tags: ['PHP', 'MySQL', 'CentOS', 'Apache'],
    summary: '初のWebアプリ開発。サーバー構築からアプリケーション開発まで全工程を独学で完遂。ユーザーの声を収集して改善を継続し、社内に長期間定着するシステムに育てた。エンジニアとしての原点。',
    detail: {
      challenges: [
        '見積書作成が手作業（Excel等）で非効率・ミスが発生しやすい',
        'Webアプリケーション開発・サーバー構築の経験がゼロの状態からの独学',
        'リリース後の社内定着と継続利用の仕組み作り'
      ],
      solution: 'PHP + MySQLによるWebアプリケーションをLinuxサーバー上にゼロから構築。見積書の作成・管理をシステム化し、手作業によるミスを排除。リリース後もユーザーの声を収集して継続改善し、社内に長期定着するシステムに育てた。',
      techStack: {
        'Backend': 'PHP',
        'Frontend': 'JavaScript / CSS',
        'Database': 'MySQL',
        'Server OS': 'CentOS',
        'MW': 'Apache'
      },
      scale: {
        'チーム規模': '1名（全工程を単独担当）',
        '担当期間': '2014年7月〜2015年4月'
      },
      features: [
        '見積書の作成・編集UI',
        '見積書の印刷用UI',
        'データベース構築',
        '公開用サーバー構築（CentOS + Apache + PHP）'
      ],
      scope: '要件定義 → 基本設計 → 詳細設計 → 実装・単体テスト → 結合テスト → 総合テスト → 保守・運用',
      highlights: [
        'サーバー構築（Linux / Apache / PHP）からDB連携まで独学で習得・完遂',
        'リリース後のユーザーの声収集と継続改善で社内定着',
        '「自分の作ったものが人の役に立つ」実感を得たエンジニアの原点'
      ]
    }
  }
]

export const skills = {
  backend: {
    label: 'Backend',
    items: [
      { name: 'Laravel / PHP', level: 95, years: '6年+' },
      { name: 'SpringBoot / Java', level: 75, years: '4年+' },
      { name: 'Python', level: 50, years: '1年+' }
    ]
  },
  frontend: {
    label: 'Frontend',
    items: [
      { name: 'Vue.js', level: 90, years: '4年+' },
      { name: 'JavaScript / TypeScript', level: 85, years: '6年+' },
      { name: 'HTML / CSS', level: 85, years: '10年+' }
    ]
  },
  database: {
    label: 'Database',
    items: [
      { name: 'MySQL', level: 90, years: '10年+' },
      { name: 'MariaDB', level: 75, years: '3年+' },
      { name: 'Redis', level: 65, years: '2年+' }
    ]
  },
  infra: {
    label: 'Infrastructure',
    items: [
      { name: 'Linux (AlmaLinux/Ubuntu/CentOS)', level: 85, years: '10年+' },
      { name: 'Nginx / Apache', level: 80, years: '8年+' },
      { name: 'Docker', level: 70, years: '3年+' },
      { name: 'Google Cloud / AWS', level: 60, years: '2年+' }
    ]
  },
  other: {
    label: 'Other',
    items: [
      { name: 'Git / GitHub', level: 85, years: '6年+' },
      { name: 'セキュリティ設計', level: 75, years: '5年+' }
    ]
  }
}

export const certifications = [
  '情報処理安全確保支援士（国家資格）',
  '応用情報処理技術者'
]
