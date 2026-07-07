/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/0010-city/index.html","05d7365361108f8dd74c32d26831f334"],["/10-algorithm-book/index.html","8ff780d2142b4ca1e855dae46960c4d8"],["/10-website/index.html","e1386f9dc04ce5deaf02ab4625434895"],["/100万的小目标/index.html","8fe7b3c3252780439b61c381b7339f87"],["/10w+YYDS！/index.html","ee9608569d5b5fb03bcd64cd454bf900"],["/10website/index.html","5d68448fd45592ef61d4b400f0047fe0"],["/12-technical-tutorial-sites/index.html","adc1a0923657a750472a12c32dfed0ff"],["/2 6 岁 了/index.html","35d0a338a9e20ce340bf51a9993eba46"],["/200万，啪，没了。。。。/index.html","2c1a6349291796d1c1f890e513393b8d"],["/2018ECCV-Paper-DL/index.html","25158427318eceb89bee96d0bdf1d062"],["/2021年固态硬盘选购最新攻略（小白避坑指南）/index.html","abfe1f96f60763d8a1d3f19313fb595d"],["/2021机械键盘推荐/index.html","eba414cf08c8e31675bfc1f4fc4be628"],["/2025-07-15/index.html","b0b550c7d748dcb4f6598fa3e75765cf"],["/2025年终总结/index.html","9874594de6f58b27a439e5a272e2d87a"],["/2026-Open-Internet/index.html","077e332af00b7970119e3b5c8d5bebdc"],["/2026-best-vpn/index.html","081bf0fc27a00b049e2640f619459cf5"],["/2026-clash-vpn/index.html","1eb5405ea6f670ca22a8282d66d44556"],["/27岁了/index.html","b48a19e6ff37930d19c371ebce26f73b"],["/3D-Convolutional-Neural-Networks-for-Human-Action-Recognition/index.html","8ba33df9828a6193ba57a05348e49fde"],["/3D-Deeply-Supervised-Network-for-Automatic-Liver-Segmentation-from-CT-Volumes/index.html","d553e28b5f46f254851e307d462e476b"],["/3D-Unet-Experiment-notes/index.html","7f03d78aa470802a777fcd34b9dd34c6"],["/4-Software/index.html","7e34f0fbd6b126612157a214f185b4d6"],["/6-website/index.html","225e60b41023a8ad3205a4dbd3d55535"],["/7-terminal-tools/index.html","2177047fd9c310c0bc3dc88bfa5afa04"],["/AI-PPT/index.html","67d3deb56dffb9af4f91ccec07b50188"],["/AIGC中典型的深度学习网络/index.html","e40af387c7a17f17175334c358b0ab4b"],["/Agency-model/index.html","17bce2bb74e4928a9d759037f4b3ba99"],["/Algorithm-brush-notes/index.html","13a67351b33073293e6eb1017da0ca69"],["/Ali-recruits/index.html","0216c914dd94764bf0be1b0cba91dd73"],["/Android-VPN/index.html","266081f8b8fc88638f3530bf5ee9f0cb"],["/Android-open-internet/index.html","a310496fa43f6415bd14d6b6599f914c"],["/Appearance-mode/index.html","12822d7259519e007cbb1aa1b1edd45f"],["/Backtracking/index.html","5595d5f3c9be8059b973723e365d1dcc"],["/Baidu-Sao-operation/index.html","f3c898412341548bbf6c6061dad193f2"],["/Batch-Normalization/index.html","b3a82808a9d815677a72c6f043094a60"],["/Best-AI-tools/index.html","4901f77ff51f0e3354828f703af6c980"],["/Bias-and-Variance/index.html","1cf1e1433d7e24b4831eaf37978fe12e"],["/Binary-tree-traversal/index.html","3647815d22dc24c700782cb700743e13"],["/Branch-and-bound/index.html","a5f67d2df3fdc1ece76e97a9c2bceee8"],["/Buying-computer-for-the-first-time/index.html","8ab9826b2121241cf136f0971a16d0b9"],["/B站向北邮道歉！/index.html","78f4fbb8b35f36cffac4aedf1beefc2d"],["/C++-string-function/index.html","a4f97004ab3da47241e983d199e42f83"],["/C-Java-DevelopTools/index.html","1f1aee4b6b076b4b731786d08515b76f"],["/CS-Classic-Books/index.html","3c37bcba89fedb1d383f7c5d4c441e08"],["/CS-network/index.html","4be66ef9917ad8db00fdf092bcdb4c41"],["/CSBook001/index.html","18630fa4c0f174b86c592455812fd407"],["/CSBook002/index.html","bfa44dd05b8d42f4be4dbf399308972c"],["/CSBook003/index.html","d973e976948dd572d1c22dd8d614c025"],["/CSBook004/index.html","e6038e3aad566a93e599ac11a731572f"],["/CSBook005/index.html","a369e415cb9afa1968bdf586bb6bcf87"],["/CSBook006/index.html","155ec1c997d17479f7a572907caa556a"],["/CSBook007/index.html","adef1da6d74b045a54e0d675493432ab"],["/CSBook008/index.html","7920ba333006582bfe459c291c5110f6"],["/CSBook009/index.html","ae3590cfcb8fb262799dd7cf64ced1d4"],["/CSBook010/index.html","c64b3b7b0df4744f1dcaf80138924ac3"],["/CSBook011/index.html","87faedf243857e13c2ece73011b04ec4"],["/CSBook012/index.html","1cc49f5f86105a159cc0d78ef867f8e8"],["/Changsha-really-fragrant/index.html","faebecc3b0f28f4df2cfbb82b42c2409"],["/ChatGPT-VPN/index.html","72088969d9717f2e6452c2a09384677a"],["/ChatGPT/index.html","9c444045d7cb0b740bef3ac494732b45"],["/ChatGPT！王炸级更新！！！/index.html","1b1ebfaa8052f0f12d7abb865a78f7f2"],["/Chrome-crx/index.html","7e3c5ea1c2ef2316cdb05c7f2906f266"],["/Clash-VPS/index.html","c698772daf5e873b3e68dd8e2451ea1e"],["/ClashForWindows/index.html","f1835b9a0faa62036f9ad0c07751077a"],["/Computer-Classic-Books/index.html","de370d49c31bb4692e929e231e395503"],["/Computer-for-another-major/index.html","baa586794161204ec4c1af8b829ebb39"],["/Conditional-confrontation-network/index.html","f3b4a5eef600d9e03503b7534a0b5749"],["/DNN/index.html","9ff912e4b55d3344506d14ec15ec2dc9"],["/DSN-segmentation-liver-experiment-summary/index.html","df85f166e4ff73c0025730ee0cc2587c"],["/Data-enhancement-elastic-deformation/index.html","4906bf2844779a8fe5e482f9100d9337"],["/Decorative-pattern/index.html","ccecdc7f869918e4508b6bac2ec90463"],["/Deep-Learning/index.html","12556493390deacd3c8e1312f9ae9f78"],["/Deep-learning-and-medical-image-analysis/index.html","16d00cec6480c66d212f914bff45b359"],["/Deeply-Supervised-Nets/index.html","64aaa662cdc4f1e16585002dadc55714"],["/Deformation-model-based-sparse-representation/index.html","59d9298bc90587dbdde7df2f6013aea7"],["/Discriminative-and-Generative-model/index.html","9d0e96a875299d45ee675b2d78b84de7"],["/Distributed-transaction/index.html","248149ecd6777734280d10a37c2ec720"],["/Divide-and-conquer-algorithm/index.html","229c03500f3525975876357ab5d42292"],["/Dll/index.html","5c2a148abd5ac316f18c1eba2a8b79e8"],["/Dynamic-programming-algorithm/index.html","b4a38c28ec279019521ac38a3b414f0f"],["/E-book-download-commonly-used-by-programmers/index.html","c7c38becf6c515612a3c8710e4f60a16"],["/EditPlus软件的安装、激活和配置过程分享/index.html","8ceee89be8e9ffe5f5bbebcd728d2f1a"],["/Eight-sorting-algorithms/index.html","18829ad7bd025c13327008d210e099c9"],["/Encryption-Algorithm/index.html","7af445bb50f6c8a0b416f05d334d08a1"],["/Eolink/index.html","9b2fe8f6292baf529a21a01b30497389"],["/Factory-and-strategy-mode/index.html","16b54661c8f0f4518d662ca572bb29ea"],["/Foreign-technology-blog-community/index.html","fbf93dcf4018d3154d05ea3d5a551cb0"],["/Functional-model/index.html","b984e0666597e5186b615b5a2a2c24ac"],["/Fund-type/index.html","0daa6edfd827f7371ade1b607f59a7a8"],["/GPT-4o/index.html","bdbdcffc8d14b83f89111f6d18cef4cd"],["/GPU-medical-image-processing/index.html","063310aa57784d553be6b8ddd5ca362c"],["/Gemini-pro/index.html","16da287aafc4a9c9f49d41a0fa940006"],["/Gemini-vpn/index.html","b7f2935f0b5e7d065df0c6301fab000e"],["/Gemini/index.html","00b842722a8fcb711c05337f4ca51ff3"],["/Generative-Model-of-Unsupervised-Learning/index.html","4bdef201d4152b7ad14ec1eb8a9f7618"],["/Git-Learning/index.html","4e1d95d76f4ef654cbed8ced34df4505"],["/GitHub-2FA/index.html","e772a12be6a3844ff97135ab436f9b71"],["/GitHub万赞，程序员必看操作系统总结！/index.html","3265ebbd54174f0688a6336dcb8f984e"],["/Golang-book-recommend/index.html","277e789ffdb369c8e9bad5f09f1e8fca"],["/Golang-learning/index.html","d4eba21ab61419523445501376144c63"],["/Google-Gemini/index.html","73148d8ea03e849f03f9a25b9819ac50"],["/Gradient-descent-optimization/index.html","55d517c72c600adbc91c33366593f27e"],["/Greedy-Algorithm/index.html","dce24b821c5f99057abab61d1e3bffe1"],["/HAND-User-Forum/index.html","0b31480fb1825dff4ad90b547070cb77"],["/HK-bank/index.html","b4b54237ceaa04b855df4bf771973c39"],["/Head-to-head/index.html","07f5519ed4aec78bcc35172b507344c9"],["/HexoPage/index.html","37d27583e54748bbf0c17c9af6836db8"],["/HistCite-Pro/index.html","d32a349435ca6282f31d32dc3d08b765"],["/How-does-the-program-run/index.html","ad1c2e593e6d5a43dce82f9634798130"],["/How-to-judge-whether-technologyisreliable/index.html","b47c6d71f7fdc83a92902555bc541db9"],["/How-to-learn-design-patterns/index.html","86579c3adc90b8c05c20884a06e2f368"],["/How-to-learn-design-patterns？/index.html","2a16ed2ffedbc1ebcfdde80847077872"],["/How-to-teach-yourself-programming/index.html","058813baad94baac71c31419a01b5ab3"],["/How2learn-Python？/index.html","b26607b6b8fc91509c1c01be115b4905"],["/IDEA-shortcut-key/index.html","ae3730984358f65b8f51753bbbffefbe"],["/IT-interview-basic/index.html","057e8bb0ad1428987b6f3eef225f55c3"],["/ITK-VS-install/index.html","eb20081ad8ebe9a49b7c18954694ae76"],["/ITK-VTK-ItkVtkGlue/index.html","3a3c33106b81951692be6503084fef31"],["/Image-processing-plus-noise/index.html","302aedb985b2d17d1162ce632c8f63c6"],["/Inception-Going-Deeper-with-Convolution/index.html","a453283069c3159cd962cad53c00d292"],["/Information-Cocoon/index.html","fd6b8d91f13aadb07ece024cd39c21f7"],["/Java-GC/index.html","f413b04a88a665a291bfc53151b5bf58"],["/Java-Servlet/index.html","39d5b11ab3430d207da4c0d9d3c334a0"],["/Java-array-and-collection-sorting/index.html","cf92a9554cc888de7e29af39d36ea3e8"],["/Java-development-tools/index.html","7bb68102ab13e73beb09ac2d57976a93"],["/Java-eight-data-types/index.html","710de2c1a239f4c812602fba30b79a7c"],["/Java-interview01/index.html","f2c7e23410f4c3cfbc2c1ce05afa8b65"],["/Java-interview02/index.html","225ee018eef712144d106055e68642f9"],["/Java-interview03/index.html","2dadd71ace1378aa7cd6fcf134be9198"],["/Java-learing-map/index.html","1d6c4b3816693e44399253b95f28a75b"],["/Java-learning-route-map/index.html","f9ce1e55c8bb60a2a01576cb84400495"],["/Java-memory-area/index.html","ecbfd7c68a9a6daf8d2a514bcab51cc8"],["/Java-memory-model/index.html","bf1dc60b4c9c61e69d76ca7b2ce368fa"],["/Java-multithreaded-learning/index.html","475bdf4471801dcc92e45b7c98b1c643"],["/Java-project/index.html","a36fc64bb27ad4dd6b0e73f913ee66b5"],["/JavaWeb-Chinese-Garbled/index.html","a9ba6081af69475181ac10ed52551664"],["/Java还是C++？/index.html","70d2f6e216dfa4d6e7d0e957064deecf"],["/Kaggle5-step-guide/index.html","5dc9e69b880c3e6c96b15b5facfeac15"],["/Knowledge-points-of-Java-garbage-collection/index.html","af90b5626fd30d208020ea6ea361540c"],["/LLM-DP-TP-EP/index.html","650b68a516f6a05d4ad7325ac5f9ef1f"],["/Layoffs-Hiring/index.html","0bc954f8d342ce06348718fb64a57adf"],["/Layoffs-and-Hiring/index.html","3768b2e539b704386426c0f643de916d"],["/Linear-regression-of-machine-learning/index.html","17f389d67b69f0edf62e41c055a21efb"],["/Linux-Compile-C/index.html","97da1667dad25463e3d7a728d0db57b2"],["/Linux-ITK/index.html","1415fafda7480db8d7d555759c0eeb30"],["/Liver-segmentation-of-sparse-components/index.html","e37d37c79e45496bcf8c3e562af8e7da"],["/ML-EBook-paper/index.html","8a469b4a7b5f8421a2d0c8eb085ad2c1"],["/Map-uses-multiple-maps/index.html","bb945a8c02613615432492becb0576ac"],["/Marching-Cubes/index.html","adcfcafaee474a8e41ce6369cbb0d369"],["/Matlab-Graph-cut/index.html","1aec6d2d0e3b15327a66489a12f83e39"],["/Maximum-Likelihood-to-EM-algorithm/index.html","ebff6e3ec8e3033b9479e8e7331b5e04"],["/Mean filter and median filter denoising/index.html","982cc692db63e5e8c17cdf92c1375050"],["/Medical-Data-for-Machine-Learning/index.html","3e513a8a947ca8ca3b6a52feb4a9d808"],["/Medical-image-analysis-deep-learning/index.html","120444284a675f4d3898a824518323c5"],["/Medical-scan-image-processing/index.html","bfba60cd6b5403e7d1779982e0c4d9b0"],["/Merge-sort-algorithm/index.html","ee10b2a044b043d62b4cd96090566384"],["/Monthly-income-2W/index.html","d96a6f37fe929f84695e77df0f462f7f"],["/Mysql-database/index.html","9207c09fbb65d6c2fed94a75faab6b68"],["/Neighbor-Embedding/index.html","41d827ea5190a7e0e080a6df745909e9"],["/Neighborhood-approximate-random-forest/index.html","30aa46150bdda78abd5436f012bc0c30"],["/Net-and-official-documents/index.html","0a5a7c5d8d65a34089207a88ea0e5cef"],["/Netflix-VPN/index.html","8dc89c583e439d3837e9b7e3fa3f529c"],["/Network-principle/index.html","2b7fabdf92ae9791e392f02a89bc9ddc"],["/New-Hong-Kong-stocks/index.html","27ce4a62ec71d46819e1e1fcdd56b554"],["/Nice-to-meet-you/index.html","de95c6f08c860d0dc80c533756ccfc86"],["/OS-processes-threads/index.html","f8a4a641781259e2d90b4a204efa1d1f"],["/OS-run-environment/index.html","badae39c76ef7f9f68ed2a7bef313328"],["/Open-Internet/index.html","ab216f22441d003908c1a5c55cfc6dae"],["/Open-Internet2/index.html","390a60dae0f6f72e619ece7eeeb23e72"],["/Open-source-community-and-rewriting-website/index.html","495feed92720b2b2704e150d27a5e548"],["/Panoramic-image-stitching-based-on-SIFT-features/index.html","84549dd8bac726492b915678c70778b8"],["/Parzen-and-KNE/index.html","4cd4569475351411d6f041fff65f65c9"],["/Personal-technology-blog-site/index.html","e0953520c341bea88c5d5618bcc81396"],["/PicGo-Gitee/index.html","1fc22dcc393df9711b39ebf147695ba9"],["/Programmer-treasure-chest/index.html","6c05ded94763599f76bf9aafccf4c07b"],["/Prototype-mode/index.html","ebd558c2a21a5bec4526a46bc17022ea"],["/Python-base/index.html","3754fbfe29524841f93bfc1005228850"],["/Python-crawler/index.html","41f49cd17bf7dc587a982c460e7cab07"],["/Resume-revision-suggestions/index.html","db054dbb28e919d73864d7a0c96d5716"],["/SEO01/index.html","36d3480d5aa387a6b3b294db9d0d3853"],["/SEO02/index.html","0a2325e39786543051cad7fbde677d8b"],["/SPHARMPDM-MEPP/index.html","a318e1c5e5d522fd48be8d369f42123d"],["/SVM/index.html","a6fb5a4a3ef92df4e8d18d0ed9a3ca8c"],["/Seata/index.html","b3032b8dec498333487455bb16d2cabb"],["/Semi-supervised-learning/index.html","f71498c8d8a81bdc59903c12bc233a70"],["/Sequential-model/index.html","b3ea5036f78650caab513af0542229c7"],["/Shape-Based-Human-Detection-and-Segmentation-via-Hierarchical-Part-TemplateMatching/index.html","3aba373ffba1d396e3f3009e66f249ab"],["/Spring-basics/index.html","61db39d1f59dc72bfdb445cf1f486adb"],["/Spring-integrates-hibernate-Struts/index.html","ef6e6e71c06c0311664693a28432349c"],["/Structure-learning/index.html","63331ea91f2b7f28bcfdbc2465199aee"],["/Suggestions-for-self-study-of-computers/index.html","9a58a3c6bb44efca834f25e65fc578d4"],["/Summaryof-HongKongStock-Account-Opening-Links/index.html","fd4db5321a58c6a65ec9cd7568acb2db"],["/TCPIP-detailed/index.html","e4a3962d553ad2376d37f82624770084"],["/Telegram-VPN/index.html","86d84a41e7594a38cba7136d9b5796eb"],["/Telegram/index.html","c3339841444cf95731d1fc703f19ff3c"],["/The-essence-of-shopping-festival/index.html","21994e0d326a4d225ab3af1d70388199"],["/The-most-important-investment-in-life/index.html","71957666874d6f4eadad869e0280b5c8"],["/The-most-successful-nvestment/index.html","d3d87263e2d0eb5b2905f57efdb232ac"],["/Transfer-Learning/index.html","467d4d945471897db9f9490a2ffc1bbc"],["/Transfer-to-computer-major/index.html","596f504b6fa8b55dce610beec1c54e37"],["/UNet-Convolutional-Networks-for-Biomedical-Image-Segmentation/index.html","98b858a4de8f6cb8f314d04e9123d211"],["/Ubuntu-install-sougou/index.html","162b43f18f1e174b3b33f003d7335c5d"],["/Understanding-of-paying-for-knowledge/index.html","a6c6ca872554ba064c585bb1850e3c80"],["/Unsupervised-Learning-Linear-Dimension-Reduction/index.html","76e7c4bf1307deaa40fb2f3ee59228b5"],["/VPN-HELP/index.html","22a4435a9f7121e0aa47691c6967790c"],["/VPN2025/index.html","e45751d9440ac7e5bb76c30e6c47b915"],["/VPN2026/index.html","4b7cbfb211d7744a3c5a74a5879e4ab6"],["/VTK01/index.html","b10cf354e2a48418a94971ee20900c70"],["/VTK02/index.html","7e1636aecf0f3599ae61ad620ec534e8"],["/VTK03/index.html","ce41e11bcdd9e6c2c7acb7f8f82612af"],["/VTKRead-write/index.html","90c99be5781d1457e7fb77823d50d875"],["/Vertx-Java/index.html","7b3c1bb847033d75fe471eb3ea83867c"],["/Vpn-OpenInternet/index.html","95328a7697655b860e233ebaf808cd62"],["/We-are-all-good-kids/index.html","94a7323ef2e3d6baca4a2a1504943db5"],["/WeChat-80/index.html","83465ada2e1cbbae91856c33c284e3e2"],["/WeChat-red-envelope-cover/index.html","793da6a4c99613a1a0d82498a38ce0fe"],["/What-is-crawler/index.html","1eeed16a658a62608ad6dc941ba7b136"],["/Win-Internet/index.html","f66aadabbda66e1f26e4bb75a31d2ef5"],["/Win-Open-Internet/index.html","65fe63b28a09cb7c570acbc834926543"],["/Win-OpenInternet/index.html","5946f5441af7cf6c9676e546a99cf1fc"],["/Windows11-2kfans/index.html","7cfb1fc514166b89daf7a70e0d7e3a05"],["/Word-Embedding/index.html","2fa904357a7155735522f42d2f17ac91"],["/YuanShikai-and-his-Beiyang/index.html","fb04aede4b2637684a97eb1800ae0766"],["/Zero-copy/index.html","d4aaaebe7e0b5d1edd0a610d8ea9e20b"],["/about-keras-model/index.html","5023c6e5357a6cbe3d8e32f45b7c5554"],["/accounts-google/index.html","b2a13dc621d85e9c07e2db63f601a35d"],["/algorithm/index.html","fa079f07620319e78b453080884f1bfe"],["/alibaba-Java/index.html","06013f50ba37d39d137a9eaeed270b5c"],["/archives/2020/01/index.html","2210807c776c8142009367fe05ff179d"],["/archives/2020/09/index.html","11b8c10925396900787e87fb0e6bcd6c"],["/archives/2020/10/index.html","940924913da0886fd1034ad19f8389ee"],["/archives/2020/11/index.html","2bbccfdf4e941c4b11d433678f453c7a"],["/archives/2020/12/index.html","122aef8ddc2e36ee03fcb1f8973f9f2e"],["/archives/2020/12/page/2/index.html","0d8cb56d9eb2c2bb4e3a9c5f2c97186d"],["/archives/2020/index.html","541a532ee1056dbf640a75a285bf4f8f"],["/archives/2020/page/2/index.html","e1a570503d093e437332ca4284b1dab7"],["/archives/2020/page/3/index.html","1e3b124747a4b3d64ae1a6557b3e54ec"],["/archives/2021/01/index.html","45de508b674c258a00972fbb3185befb"],["/archives/2021/02/index.html","2809110c21643a5d491fadc19115ffea"],["/archives/2021/03/index.html","47b0937d366eec85b1a26fe945dd6284"],["/archives/2021/04/index.html","c0d4800ebcdc63630ddb506fbfddef8b"],["/archives/2021/05/index.html","2b2837671e7471756471d29d04512afe"],["/archives/2021/06/index.html","9d9ead22c03ff37b1f6c8873f0ecaba9"],["/archives/2021/07/index.html","d41ce6918bb1f41eab7b439cb4a1721e"],["/archives/2021/08/index.html","50f00fbdaaa60a622e0ecdd17e18d809"],["/archives/2021/09/index.html","d04d0119ea7bd805d42e5e9c98e04722"],["/archives/2021/10/index.html","62591c559467a6e9e8dec6f9ee194115"],["/archives/2021/11/index.html","976b6c7640dcaddfae475810d78c1347"],["/archives/2021/12/index.html","36dca7e2d28693b35505acf2dbebc984"],["/archives/2021/index.html","9831ee55ab60ab58b3fa66a3d1e0353d"],["/archives/2021/page/2/index.html","9308c87ad195e6525e024b36adcd0a6a"],["/archives/2022/01/index.html","7919cfb14d7f93891b311dcf05779163"],["/archives/2022/02/index.html","7a30f98fc586603bce3e5c0ff8486c40"],["/archives/2022/04/index.html","6075cc6851631569afa49d570cb2af42"],["/archives/2022/05/index.html","402ecf0453d2656eaa5467ca7b27d856"],["/archives/2022/12/index.html","d3d6aec373e5935e258b80e460260edb"],["/archives/2022/index.html","f7b24fa570c7ee4b643081e2b9811618"],["/archives/2023/01/index.html","0f36ccf1c747ad3870259f84c1103b37"],["/archives/2023/02/index.html","db026d19d6f814062ef62166a3be741c"],["/archives/2023/03/index.html","745d66985691580c27cde3cdeb556228"],["/archives/2023/04/index.html","fd75fd7840b4094b27254efe4f61a963"],["/archives/2023/06/index.html","aa02a1a13496e970a64b94795bac2215"],["/archives/2023/08/index.html","140728effedd7f0278b75864501d731c"],["/archives/2023/10/index.html","2fcdc3443dad50cc0c1a0a59af67789f"],["/archives/2023/index.html","dfccb147344a85daa5df7e567553b23c"],["/archives/2024/01/index.html","5f25fd0f57ec71e4970b92c5733517b8"],["/archives/2024/02/index.html","f8db1615e705015923936cd01945172e"],["/archives/2024/index.html","e00fd3bc43feecc5b5ee86a850ff0db8"],["/archives/2025/06/index.html","5f790172791c8df1eb41d6b99ad97d8a"],["/archives/2025/07/index.html","80e6a53adb4db767f18cc13c6bd0d38c"],["/archives/2025/08/index.html","0f5600c11e2bfb39ba0b2b920f4c9a06"],["/archives/2025/09/index.html","d44bc4b016ed096e67f40acbc888a47a"],["/archives/2025/10/index.html","ee0f96092cd4fd6d0f3be64bfdadc6da"],["/archives/2025/11/index.html","9de3d9efc9e35d2caae944e54b15c074"],["/archives/2025/12/index.html","fadcb989f3e0d83f4d6e9e6bb872a95d"],["/archives/2025/index.html","c3998c758ed567ca0af944f9a1f79a95"],["/archives/2026/01/index.html","d12be490d3e2cc014fd319bddb32e487"],["/archives/2026/02/index.html","76d36d626279cc07d2dcf80873d579b8"],["/archives/2026/03/index.html","2f85f661c24de0954f515b52969deade"],["/archives/2026/04/index.html","72e6f01c9de09bd4b51881dbe0fa8393"],["/archives/2026/05/index.html","24c829c0d943beeadd615793b3aa1082"],["/archives/2026/06/index.html","02177aeec5eb395c3337dfec5790cbbb"],["/archives/2026/07/index.html","690b1a2f67ecb3739e2c6cda2240042e"],["/archives/2026/index.html","720b79830e3b66355c67253f99a96af1"],["/archives/2028/02/index.html","250d2e5a2d4889df158207804c7c7d65"],["/archives/2028/index.html","21b0a17eec1a182cfcd0acf1b79eef54"],["/archives/index.html","1bbed373b6a61be99ec6d17e3b7f8f04"],["/archives/page/2/index.html","958933b54d48be7df073f129579c6d0c"],["/archives/page/3/index.html","1df5795d4fe4f0bb7a97a39af3badf03"],["/archives/page/4/index.html","0e2510898689cc24facbf500d7e79f3f"],["/archives/page/5/index.html","c63c1b7815d355f16546a98d7969d83f"],["/archives/page/6/index.html","c5f503133b89426d5ac669a656ed3621"],["/archives/page/7/index.html","3c989bebe7593f7d1924d718ad6d0d17"],["/baidu-search/index.html","cd7b643210933c8f5e0d379de0764693"],["/baidu_verify_code-Hh2fKNlEB1.html","11b539b43c6009b9bf3c30e41ff77496"],["/be-a-programmer-instead-of-a-code-farmer/index.html","0159bd3c5b6eae9ddf215f848852fb47"],["/best-vpn/index.html","5fc393d39233eed7852a96928f337a5b"],["/best-vps/index.html","e204e8f0f9ffcb13dfbe567a85d8b689"],["/bought-a-house/index.html","d9239dc939c8424a729047c98f5278d7"],["/categories/AI大模型/index.html","065575104314e2b0f1fa7a340c08e86c"],["/categories/C与C✙✙/index.html","acc927b383fd5552c7c6ce78cd3255f1"],["/categories/Go语言/index.html","ef90438a8a860ce4194737ea07261ea4"],["/categories/ITK与VTK/index.html","103acfd598ad94f2cafdb6d88b535ba2"],["/categories/Java/index.html","1fda0c2015e3965f386507b2fbbbfff2"],["/categories/Linux/index.html","b7232d5c388a3990540e66e8c184d114"],["/categories/PLC/index.html","41ebd1c6a072447775aefbfab90a7945"],["/categories/Python/index.html","e05542a05d6e59677ab934dcd79fd92f"],["/categories/SEO教程/index.html","40b831b2b567f00c053303f7c1b83131"],["/categories/index.html","540af2c46341c62bf51193f04513a54e"],["/categories/图像处理与机器学习/index.html","b29014d4507830810ce73260dbe0a2b2"],["/categories/工具/index.html","9c3c6e589c3973d0373c6bde9682f4ea"],["/categories/技术以外/index.html","06c3e81cc1adff485aa700eb180fabc1"],["/categories/技术以外/page/2/index.html","d82e7072879996434956f289f490c472"],["/categories/数据结构与算法/index.html","d588e56b7bee44d1ec0292de8efb1f9e"],["/categories/科学上网/index.html","e616e84aa4ec80f9258e1d3768b7723b"],["/categories/编程经验/index.html","77f3160c3296eab4f688585ec03011a0"],["/categories/编程资料/index.html","fe666e73fcb0d63d345a4e199f851e9e"],["/categories/计算机基础知识/index.html","90ba12a61237899502d6e5c77735fc76"],["/categories/设计模式/index.html","ffef6a5c9faf1cb6cff7d3aac079e35d"],["/choose/index.html","c4b68bbf688a5249773bbc96c0c64823"],["/choose2/index.html","29e3eb43a0fd116d9545aab489f03327"],["/chrome-crx-intruduce/index.html","753871f30156ecb49b9e159c62ed54e0"],["/clash-free/index.html","120113d063287ee4e575ab897db5da61"],["/clash-pro/index.html","2c5ab32adcf12ee1f5f9167106109e32"],["/clash-verge/index.html","4cbbe37e13806fa83ec8460b50607d77"],["/clashvpn/index.html","9d281cd6bfb46c29b953eb31b6d4cb43"],["/claude-code/index.html","4c817d2cbd7ea5635d2181e6f8444f6f"],["/coder-blog-website/index.html","40f1a866c9e101d00b7b09a96a8f6a11"],["/coder-source/index.html","c0e6fe8b6a240607b52468bcf646f796"],["/coder-videos-website/index.html","1382dac96d4118cf32b3efa564e6f259"],["/computer-book/index.html","f4b58d638c6dc81580390dbbb192e5fc"],["/computer-censorship/index.html","2d29c4f01534f60fd07962f5ae303731"],["/computer-network01/index.html","a6db61f328f86709cbb05d82b8191235"],["/computer-network02/index.html","821ced057dcfb8a8966d05c89e984be6"],["/css/main.css","bc32ad34ec4990d934c3c647bdb62f79"],["/database-Mysql/index.html","521a296bfec63ec0ba333f856fa3ab4e"],["/eclipse-lombok/index.html","60188ec2a938fc484574fcd937afeeb3"],["/freego/index.html","76f499c52ee7bd16608420bde9060c99"],["/fully-convolutional-networks-for-semantic-segmentation/index.html","2b2c4920e1c2ffbadaafda318dfba16a"],["/great-firewall/index.html","ba5c44fee6db8809047d787bb7bc4ff4"],["/halfrost/index.html","229723ace6aebd1a9da4e298c6cc042c"],["/how-to-signup-chatgpt/index.html","d7309fa8e68157ee8bd041396da82915"],["/how-to-use-Gemini/index.html","baed375c617f10a249b4bbc593f055cb"],["/idea-continue/index.html","86d1e5a29be7d468b54e42596d88c0b4"],["/index.html","6f8967b9cb8c50a46644df5435cc3310"],["/internet-dir/index.html","7357496409b9d22cc5a2c463c5e9473e"],["/ios-open-internet/index.html","6c417e415dfb82b32d344b636d936945"],["/iphone-open-internet/index.html","66c0753b844c401f4d377a25ceada944"],["/itext-makes-pdf-form/index.html","19d67715821c28191fe8792fb3d72857"],["/java-Set-Map/index.html","0fa87cf6e2a85afa3306c3c860228a8b"],["/javaweb-server-error-codes/index.html","9ac4eebacd7638d1a124aee1a7a854e3"],["/javaweb-source-code/index.html","ad20bc3d3e95892f871bb7ff2d81b30a"],["/js/lib/busuanzi.min.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/js/lib/lozad.min.js","47904d34a224931dd1b615c59a3dbe3b"],["/js/lib/prism/prism-coy.min.css","0ccad54d95845901ead59bfd3ecceb14"],["/js/lib/prism/prism-dark.min.css","a4711d2957d6605eb5682bdd228cf123"],["/js/lib/prism/prism-funky.min.css","efedcdccd7a9ab342d2d9cacd24920af"],["/js/lib/prism/prism-line-numbers.min.css","38e22e790c279bb56f9ec4b90a2a2d58"],["/js/lib/prism/prism-okaidia.min.css","5ac6f9de996fbec68aaa106dfb16e061"],["/js/lib/prism/prism-solarizedlight.min.css","ecc7e64d039873ffcf7fb27babdaeb5a"],["/js/lib/prism/prism-tomorrow.min.css","456af2a14ae4f5089939d5904ac40fe8"],["/js/lib/prism/prism-twilight.min.css","ebb5c355332a8cf9a1ce37a2a69d678f"],["/js/lib/prism/prism.min.css","a5234d614834658887cec6a9515890f8"],["/js/main.js","052d2b299d9c750afea8df0b802ab7c1"],["/keras+TensorBoard/index.html","4b795137e16753dc244668c3f8593fc8"],["/keras-beginner-guide/index.html","4ee20a8078633e614d1eccfc0c13cbea"],["/kimiclaw/index.html","f93163ed431fd5cfbaa5853ac3c9e29e"],["/kmp-algorithms/index.html","371a251b9d6268dc2c6c95f5349f6db7"],["/leetcode-Java/index.html","5cbe5241a7c97af17294cc1d595dbb02"],["/links/index.html","fe8b920ff88056c5efc1671b8852a8e2"],["/linux-java-opencv/index.html","a6e7de0c7486087d683a30549035e1d3"],["/magic-internet/index.html","ff5738419e94c989c13dc8c9eb494451"],["/magic-vpn/index.html","f7ab4f72b60235798cf5bb0d1ba9f2b3"],["/mingci/index.html","c43f0f69a3034bc9c589821d21007aea"],["/mobile-vpn/index.html","0bfab016d472832980ffd3ddad2c9d50"],["/msb-source/index.html","e30d8a6f60d0d72b717c864f23990b4f"],["/online-BUG！/index.html","fe2fb69689656a3d4af845bae7522f9e"],["/open-app/index.html","4239804f465dcd3ca5256d5486c7db9f"],["/openclaw/index.html","95ec0b6dc01c9b74862a0af876541bf7"],["/openinternet/index.html","553dd869df48d0b191d6d0c52659b68e"],["/page/2/index.html","a5a81d33068215bc419a6eef9997b0fa"],["/page/3/index.html","b8826417a69687b12d6b82e50edace1e"],["/page/4/index.html","aa0434de987a9e32446dfabfd2b7bd9b"],["/page/5/index.html","9c8e39e8095d73138774600ef6c037d2"],["/page/6/index.html","73e63ace8ccaa9efaf0558f004695555"],["/page/7/index.html","383d5065d72c6dcc36347e3d067f3c7c"],["/pandas-data-preprocessing/index.html","5e072a7f46e83baa11cd91b5885c3504"],["/phone-win-open-Internet/index.html","3c50466ca89f5f6133e2c5f3644d93c6"],["/popcorn/index.html","790adf96c9974a16bb3d4bb0d3436bfc"],["/protocols/index.html","e9f9782d8d29eac3bb9504b396466130"],["/python-Blog/index.html","41d02961ef95ffe192da4288b406dc0a"],["/python-yeild/index.html","ce513020ebed706aee9f8eaa230c9baa"],["/python爬虫教程/index.html","490a1a1d68e8826b038dc8cd4ec6c26e"],["/route/index.html","2c4949c1ab4703cce8d3ff2af8315a9d"],["/search-help/index.html","da945607d63167f357395a2068250fec"],["/software-copyright/index.html","937d3c3d5b9304726f63c9dc8396d129"],["/sw-register.js","d15e8726f8be573f8b25a0f116f1b720"],["/tags/AI/index.html","b2b909c7d7f5a714ff6fc6a2f5f9f7b8"],["/tags/API/index.html","04f2041b986536eadd9195bab6170051"],["/tags/C-图书/index.html","e69818ec4b2e86d1b648c37a06bf74e1"],["/tags/C/index.html","d48b4696436c7b9d32070be6a06db4ec"],["/tags/CNN/index.html","3fe6b60e3221e95147c0effc0da0b7c3"],["/tags/Chrome/index.html","f9cf4a4172329c74e856524aad3efc70"],["/tags/Clash机场/index.html","fb66547c139a1f9e5b1196d000ba8d9a"],["/tags/C✙✙/index.html","367e114b7bdd585ca0ecf716c4da9472"],["/tags/C语言/index.html","9d296f2ec29c36e6a6288f507b8346fa"],["/tags/C语言图书/index.html","2505841081a5ce674ff3933abd403925"],["/tags/DSN/index.html","edf52d7422e8c5c38f07bebadacbf93c"],["/tags/Dll/index.html","b779428b6a1c3cf4c0cbbe7312e79611"],["/tags/ECCV/index.html","6eafae953c9c44feb3206803e2b6c9f6"],["/tags/EM算法/index.html","00a2d4a164d22d0b070f75826a5e3f0c"],["/tags/Eolink/index.html","bf1a64681545ec0789f1944d33425038"],["/tags/Gitee/index.html","2c44fe3d762102548628f4f36c8889cb"],["/tags/Google/index.html","c79648343d393893ef25eeac021907ed"],["/tags/Go语言/index.html","e1c5a348935b5bb6be2b7f0d65322baa"],["/tags/Graph/index.html","33c1f493893c1179026f8ea392d6b744"],["/tags/HTTPS/index.html","77ef332b2a31dd50a1ab6bbb38369d03"],["/tags/ITK/index.html","a180efc9965b4b7a17a46f813e33873a"],["/tags/ItkVtkGlue/index.html","445ec0991a544326670603016f94a2bd"],["/tags/JMM/index.html","4a9c30c9aeea212b080e63254bd1bc1f"],["/tags/JVM/index.html","70f2988247dac152edc860f9e4ada414"],["/tags/Java/index.html","bf2c61fb269c1efe385d9a49b101f72c"],["/tags/Java图书/index.html","b8c5963238f8c0aff0f09b9b87f0fb13"],["/tags/Kaggle/index.html","8be9ab9021ab18b7db79f1042341ac6b"],["/tags/Keras/index.html","9ec5936bac88e1542f5ef3502000fff2"],["/tags/Linux/index.html","a41cad9de67cae4ac46f8f28b97013c0"],["/tags/Linux图书/index.html","3dceb0250a99fa7b3b5fa3ad82d2a5a2"],["/tags/MEPP/index.html","4b4b6f2f08410c003db6ed83d4b9135f"],["/tags/Map/index.html","f1b3d74ae80d5d99c4aba6bb8239a3c4"],["/tags/Matlab/index.html","5a31d8a55cb3a79412f9bdbb4aad4afc"],["/tags/MongoDB/index.html","740b29622537db8bb698f82efc79dc26"],["/tags/MySQL/index.html","42856970a128e113bea3d2e7d473ffea"],["/tags/OpenClaw/index.html","514d02a0a9d46955a7730450d853a4d6"],["/tags/Parzen窗/index.html","6a48d1913649e95578c190b2690c2d3d"],["/tags/PicGo/index.html","35605830a6a42646591e57db37cecd00"],["/tags/Python/index.html","8382fc5de79e977a8c764aae120385e0"],["/tags/Python图书/index.html","902bb9528825b575c2558cc447678586"],["/tags/SPHARM-PDM/index.html","7a152e5b424c858f3b1912d8c1b3d8a0"],["/tags/SVM/index.html","36d3fe9bc5916cdedf1278262449e925"],["/tags/Seata/index.html","d4ff95330ada367bd9c18930ced50b7d"],["/tags/Servlet/index.html","0add9734d57863e6973b207440503986"],["/tags/Sping/index.html","68d2dd7bda2997abe8a703eb4b77c9d5"],["/tags/Struts/index.html","41d00ccf32c55656fdd277920041fed4"],["/tags/TCP-IP/index.html","b74e6b29a5ed113f1213cfbf6463d2cf"],["/tags/Ubuntu/index.html","f720300eab0fef4ac6322715b9e130ec"],["/tags/Unet/index.html","7267ecae0258f4630abfdabadd0dd287"],["/tags/VPN/index.html","ffa1e367a839380c5308518688eeb21b"],["/tags/VS/index.html","fddbc96ae48875502fbac7b5f129672b"],["/tags/VTK/index.html","52d86c0a9d95c55081bd42d819bb2f70"],["/tags/Vertx/index.html","5e71a54d01719cc06c4efa8646f9c8d0"],["/tags/Windows/index.html","5f0fd5fb22276bfeb7b6e0f503126fd5"],["/tags/claude/index.html","c39c833c8bc8522ea8e296c2c4c033aa"],["/tags/edit/index.html","ce8d9be01769a1511174bb40ed72e461"],["/tags/hibernate/index.html","bb40590419553b50324f6b9c35ab035b"],["/tags/index.html","95755e155316e90fc1a5a6166a05229c"],["/tags/itext/index.html","519e73be60d4744b82d7beb9dca14871"],["/tags/jdk/index.html","336a411644c6dfe32dab341ed6a8e5fb"],["/tags/kmp/index.html","9cc55ddd358d7877bb28e62ca682f901"],["/tags/k最近邻估计/index.html","1a4314e485696313b50e542f9d3151aa"],["/tags/lombok/index.html","4243a02878e67bd6599d130fab42ce8c"],["/tags/offer/index.html","45fe97e88fa67abdd034dfb247f59aa9"],["/tags/opencv/index.html","7de2c65e68f587b4772647d7a805b1b6"],["/tags/pandas/index.html","ec818ec8462276a3f7713918f34578ed"],["/tags/string/index.html","c8b5c76272bdc6b1e0b5e1e6a0424a80"],["/tags/vim/index.html","1c4d1392d4f8827b3961c7ac7b06763c"],["/tags/vtkPolyData/index.html","9ef8c97d0861cb9b34e0411e9ca98a3c"],["/tags/web/index.html","4793f49a9582178d22724f268134e141"],["/tags/xshell/index.html","153a642925f1f7a13d6dfc5f8ba8833d"],["/tags/yeild/index.html","232c9e1d073d5186f339a4f63101f0c3"],["/tags/互联网/index.html","2438924065bc30a99da1befc17893012"],["/tags/人工智能/index.html","854f5ac61d7add73b21149626b6cf1f7"],["/tags/体绘制/index.html","e3a9010f323c029395b80bef2ae3d979"],["/tags/全卷积网络/index.html","37506c6c3873d68f744b9b1bf976b0d3"],["/tags/公众号/index.html","4c3affe24a6de73182761141f76f70fb"],["/tags/内存模型/index.html","245ed7faaaf2fa93f6768c194dafb15c"],["/tags/内推/index.html","3c96ddda4049404505025024bf8f800b"],["/tags/函数/index.html","c03a9670ff09aaafd89864dc5b9ed299"],["/tags/分布式/index.html","14eac04fbf59dcec99ca0ce530a85e30"],["/tags/加密/index.html","4dc7756283c336117cc93c33dd218ee5"],["/tags/医疗图像/index.html","2ceb410615bd1c6d477eff217e46f889"],["/tags/博客/index.html","3d84e631d15e7322947e5a126bd51861"],["/tags/图像数据/index.html","73d52bf9eabf8b3e788709dd6a61f261"],["/tags/图谱分割/index.html","d7279c9a621819f6ed0dfa838e5ca076"],["/tags/垃圾回收/index.html","bb21f823bf22f6603ae25836af784e78"],["/tags/多线程/index.html","1891d95886865b007b680b366987c255"],["/tags/大模型/index.html","658388d09a95ffe4fac76766ebd94fc9"],["/tags/字符串/index.html","04f0636e7f54bad49c488afc7a53beb8"],["/tags/小龙虾/index.html","836329d938d3d3609a927d8b3f88d752"],["/tags/工具/index.html","5c1cce96258e3381123fad4dd30eee05"],["/tags/弹性形变/index.html","3a03788f61096bb6939bfac2e98ce483"],["/tags/排序/index.html","2a24ca4fd4c7f57972627bd37b718be6"],["/tags/搜狗/index.html","839a6303c4cb9cec26aeae1c0e5d9afc"],["/tags/操作系统/index.html","7482c106b299867ab9d33424e7409294"],["/tags/数据库/index.html","dddf04ad5c42bcfaf121772180490aed"],["/tags/数据类型/index.html","797ecf1224cad53001da66b98671a376"],["/tags/数据结构/index.html","ec547b45cc10fd2c330ba5d2f9ac689f"],["/tags/最大似然/index.html","46c854455cfc9e85aceb4c164895751e"],["/tags/机器学习/index.html","b66fa392f5b902447ed51bbd771fa2c4"],["/tags/树/index.html","c177826ac8419799c96a25fc1d964dd2"],["/tags/框架/index.html","a615f4316b0d482f08f9acc22ef47b6c"],["/tags/梯子推荐/index.html","3f58614e8a03660f1727c09a4cdfe942"],["/tags/求职/index.html","f267c9f74176203dbad6697a2702da3b"],["/tags/汇编语言/index.html","eae985384fcb5a09d4cf43f71e14b267"],["/tags/深度学习/index.html","2e03a7a1123f98fb0ba0775e3bc9695f"],["/tags/深度监督网络/index.html","2cf8d6d4cc6356c9573f447732583ee2"],["/tags/爬虫/index.html","231079c58560d477621904e7173f5939"],["/tags/电子书下载/index.html","6558029cc30fc9ee345528dff340118c"],["/tags/科学上网/index.html","f4a7c5700ee0de513d6f98152a497afb"],["/tags/程序员/index.html","37b68aec5249a4e8a4ca642cac507581"],["/tags/程序员面试/index.html","f77db1abd3facf442285fa38945713a2"],["/tags/简历/index.html","902d02a2172ce4413dd7bf1de6051bc6"],["/tags/算法/index.html","6c655b8afea456a0369423f55a2f8d62"],["/tags/线程/index.html","53299f2fa21a628e854292b229b64af0"],["/tags/经验/index.html","115cb7639614a63c64b9518569dad02f"],["/tags/结构学习/index.html","e059f91348bed143e0b1473bac65884b"],["/tags/编程/index.html","d6733e6b0b48fac3401aee10e6f70823"],["/tags/网站/index.html","b030ce546ef71f8cd6dcd0f25a83f516"],["/tags/网络/index.html","b418ee51d216963085ff9cf932d101db"],["/tags/网络原理/index.html","27d85e5991f18561114f0512fbc086d1"],["/tags/翻墙/index.html","57ea9fef672f4ee731c0863d02863d41"],["/tags/肝脏分割/index.html","6184e4eb95c440597b0bde6a2b6b9881"],["/tags/计算机/index.html","0fa4ada72632e84d86d8fe81b2e1b5c7"],["/tags/计算机专业/index.html","51cb0a732f429f44b275ee94e6951a5c"],["/tags/计算机网络/index.html","59ce4584b300b4c5dec368725c739f92"],["/tags/设计模式/index.html","d2415e1c47ea7cda71e9abab22f05c63"],["/tags/贝叶斯/index.html","87c3ca3a22b7921cad1c0b94d5dae751"],["/tags/迁移学习/index.html","f20ca879668f9ebaa230eae8bdcf0791"],["/tags/面试/index.html","f306bb5c7f3313b1e3db003c5a79b744"],["/telegram-search/index.html","72569d742182e3f4e2841a364c520d9f"],["/the-meaning-of-reading/index.html","432fd06116ee70e50472dc3350d0c6a5"],["/the-way-of-pragram/index.html","bb7e21927205ecbe6cb557f5bdc326ea"],["/troubleshooting/index.html","3ab7fe2d3501f2ea2be52310b6e4643a"],["/untiypro XL安装/index.html","47c695d68ace2380980f88bfe0582f65"],["/video-websites/index.html","ed18680a80b76f728aa28bc0ef3081af"],["/vpn-freego/index.html","a4429afef492d3c12c1725e062149d00"],["/waibao/index.html","84aec247442cf977636031514452f221"],["/wechat-fans/index.html","951932390f66f3ab79cd4ed1a81de36b"],["/window-run-VTK/index.html","7dc978210f58806187d4ba84d7962746"],["/windows-science-internet/index.html","3e35e7ad9782b5e106f9df97050d50cb"],["/xshell-connect-Linux/index.html","97dccb0649e3c9cca887a32b301ff6c7"],["/yzhx-vpn/index.html","1e3caa01fdc4a4875640d8efd01d4f16"],["/‌Accessing-the-Open-Internet/index.html","00881b806a14a700b58e2c168ecc5e95"],["/《Java高并发编程详解》，去大厂必看！/index.html","2bcbb778bce5ef1003964283a0aede2f"],["/一分钟没了 1.5W 。。。/index.html","8b40d29e20e5c420e5d95c69c8a0954f"],["/一条高产爆款内容生产线/index.html","c0eef7e8e8c86dcea27434f35b4d01ce"],["/为高考学子推荐的六个就业前景广阔的专业/index.html","d3d255e5a813e581fae8614364af2088"],["/互联网赚钱机器---社群/index.html","beab214816042c818793fbae6ea27586"],["/你们常用的工作方法和思考方式是什么？/index.html","9ed560f4f5dc8e7c75c49c4a2310200e"],["/关于环境配置的一些事/index.html","773a0616aaee4752a99835b0ec22151c"],["/准备了19w！搞事/index.html","b9ece89554336fd0ce4239938de88d8a"],["/几个很重要的感悟/index.html","bfd6feee2abfeed88009c8744db66e7d"],["/分割ROI篇/index.html","b8138ecc17bfd679dcb7246ca3c76685"],["/分割精度说明/index.html","4a09a75b69c474e396e19b071a830a6e"],["/分块程序执行/index.html","0b66e6640219a7058a289aa7b3eb1b40"],["/加班公司黑名单！！！/index.html","ed7224790f9c52c5748888540932dfb9"],["/卧槽，上知乎热搜了！/index.html","46e438dc2beef0917b1fb2314c116446"],["/卧槽，我的小破站爆了！/index.html","3ea4255487499b1599cd4bc8d01e8961"],["/卧槽，我被盗版了/index.html","def8f19c4e4c710f5d0db44d65890eb8"],["/卧槽，还有985大学在大一上C语言课？？/index.html","34df52742578c3e32e811a590787b357"],["/历年微软面试中出现的leetcode算法题/index.html","ee1f6aee5b99c4f875a999f811a66311"],["/去特斯拉试车了/index.html","62bfaf85de7aa764018cd129078a0ac6"],["/吃苦的三种境界/index.html","68656f4a23faee75fd173bf62eed0bf0"],["/哪本书适合推荐给 Java 初学者？/index.html","865c87ee735657450c1cf990e33d5eda"],["/哪本入门级的学习数据库的书最值得推荐？/index.html","977c7c4b6b846f0fbb0c96854dc6251c"],["/国内外常用的AIGC模型/index.html","5e507fd0916df6023be2d9c60f65a163"],["/国庆假期/index.html","66d9096431cc85f0779306699a957a82"],["/图谱程序字典/index.html","be2f953b3fcc10912fbc1c5ea478d97b"],["/图谱训练与分割/index.html","66d33b9ad3bf772583a6a90106dcedde"],["/宣布一件大事/index.html","022d94afe31730383e8b8a4c410132c5"],["/小鹏P7i试驾体验/index.html","791ce07e251a8b8074ce9042a11b61ea"],["/微信PC版3.3.0内测更新，电脑可以刷朋友圈了/index.html","3b0af84556d861bb6faf7c37d1abfb99"],["/怎么更快的赚钱？/index.html","76f8d88c14e58e123f3204fc3166ce44"],["/我毕业了/index.html","261cf1b712aff190db46014edfd507d6"],["/我！真！的！找到了！爱上学习！的方法！/index.html","d7dae65262c4b27585200a9b1a533c20"],["/户口的意义/index.html","f108841151daaf2f528f5d11abe5f81d"],["/推荐两本经典算法书/index.html","ff45820cecdbb4da1c4aa695fbbe3c4e"],["/推荐几个在线学习SQL的网站！/index.html","facb54efd55f075256341957676ac99b"],["/搞了一个程序员成长晋级社群！/index.html","5190fd767363efca13934464a722324c"],["/摘抄/index.html","b5d1c83c8126729627d2b4b0e0548cc6"],["/暴跌30心态崩了/index.html","3c2a61bff285f2888eacb89a4ee83965"],["/最近很火的ChatGPT到底该怎么玩？/index.html","fea975e665fa3045c72f9b0a08ffc62e"],["/有哪些好看的日历可以买？/index.html","bf148a97a8891a77f00aaf5fa1b7c51d"],["/服务器有啥用/index.html","59ea2293b35ea3b25f340a002ba55624"],["/来长沙了！/index.html","b4d820f1bc9a6f61784b6c196efb408b"],["/校招污点公司名单/index.html","30c7ff44b1ad11deed3cb3b622ba8a81"],["/梭哈200多万/index.html","d339638cedb2e35d05ab2b7282c6c164"],["/梯形图入门/index.html","f00ccbcc5f1dbafe7a88baaac264a21c"],["/橙心优选，凉凉了！/index.html","9a7756ee5ae1acfab635bda337569a63"],["/比亚迪汉试驾体验/index.html","c8b6c502cd258ebbbcc4d86b14625790"],["/清华转学成电，真的牛逼！/index.html","9ade3eb8a821444443a1058de2218f5f"],["/滴滴程序员被亲戚鄙视：年薪八十万还不如二本教书的/index.html","5a2e508d4b32bec0b848d11e2d0b8a96"],["/社群！/index.html","8276a621fb7cf67502c817103753614f"],["/科学上网之VPN篇/index.html","45548ad3b792b1978748ae171d80444c"],["/程序员必备的几个技能！看完你也是大神/index.html","30c6022d9318f09da42e0d54f44617f7"],["/程序员绕不去的槛，Linux！！！/index.html","c1555b96348f8d1757038f62ff4c9746"],["/蔚来ET5试驾体验/index.html","d671168a84b34ec5feeb30ed35da5422"],["/蔚来，牛逼！/index.html","8946ec924288c3c9bef88094d5d98b26"],["/被录取了/index.html","f2ebdc0f3af4d5647ee00ae4c0851477"],["/被找事了！/index.html","a031f71a2d092447ca880bcf5c3b8738"],["/被拉黑了。。。/index.html","12bc9c315fd010ac207198f3e91e7e72"],["/被车撞了！/index.html","16f4ca2130c66a7796f6866666601177"],["/该如何选购固态硬盘？/index.html","fdd5b2b67e8d3d2247b46d78313a5a9b"],["/这本书一定要看！/index.html","f2ec389c0f769d936f7a9bdb136f29bc"],["/选Java还是C++？/index.html","b36bea593eac7fe1a033d7407c568b68"],["/那些让你起飞的计算机基础知识/index.html","8abcb56f10dd0af32834d502544852c0"],["/靠这几本算法书，成功拿下大厂offer！/index.html","1bebb602d61dc7b653dc6d77b904499e"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
