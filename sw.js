/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/0010-city/index.html","f9a26898567c5d92b82eab95c29ad4b7"],["/10-algorithm-book/index.html","52566430d18e5a2768d63b0eec02a03c"],["/10-website/index.html","34bfd4dfa290ac5b5d4fc619924e60d5"],["/100万的小目标/index.html","91cb7f65c5b73e904351f163c94ee023"],["/10w+YYDS！/index.html","4e7245cde9cbe2ca5b9e92ad6dfd9460"],["/10website/index.html","f30a6efe75b25dea67002582e82b6f86"],["/12-technical-tutorial-sites/index.html","e7ac2d92ea11bca7c7dae455311ad635"],["/2 6 岁 了/index.html","2aa90b93754ccf503bef96db4525dc26"],["/200万，啪，没了。。。。/index.html","75c2765fed3f05aae4d2eb82d7b97cf9"],["/2018ECCV-Paper-DL/index.html","bf778a118a3270f75119d188f69e48f1"],["/2021年固态硬盘选购最新攻略（小白避坑指南）/index.html","ccca7af655b08dcad509a3e1ab58478a"],["/2021机械键盘推荐/index.html","082f5ec64451d1dd82ec5d2e94558a95"],["/2025-07-15/index.html","0a96276786ef41b6fc9261cf1a77c005"],["/2025年终总结/index.html","b053aae165262fd78f545ad3f2808a79"],["/2026-Open-Internet/index.html","56b87079b25e6e4878bb8e251ae4abb9"],["/2026-best-vpn/index.html","29ab77017a42bc58ae0789e3fb67992b"],["/2026-clash-vpn/index.html","492e0b952a02cdf9825f6029f196bf58"],["/27岁了/index.html","ca5f84fd98e35a99a8995457b8bb9671"],["/3D-Convolutional-Neural-Networks-for-Human-Action-Recognition/index.html","319961b9f58c8c3f7701f5b8708d8ba0"],["/3D-Deeply-Supervised-Network-for-Automatic-Liver-Segmentation-from-CT-Volumes/index.html","2310e3a8d68647f60dabe49613c36275"],["/3D-Unet-Experiment-notes/index.html","2cad467094b92bec32d5a9d0be70c70e"],["/4-Software/index.html","3348c5c721ad0a5a2ed9c6435bbf7b14"],["/6-website/index.html","88faf9c12336ff0cd9c0bace7a11deb2"],["/7-terminal-tools/index.html","d2b4f1f1ebfea5686075099bd3e73a6d"],["/AI-PPT/index.html","d9a7460a4672240942441450ba474a29"],["/AIGC中典型的深度学习网络/index.html","961eb5981b575ea5a4867afbcde796c1"],["/Agency-model/index.html","b775e4e65de0e95c040774a4b6e49385"],["/Algorithm-brush-notes/index.html","1a1b2a1cde54b8ba4b6834968f6d612c"],["/Ali-recruits/index.html","0c2626dd510f40efe734b24f1c3f7b77"],["/Android-VPN/index.html","decfb830d52f0e7adde9e51f5a084908"],["/Android-open-internet/index.html","dc72c916772876ab7304c492f97a2184"],["/Appearance-mode/index.html","7a3068cbd44a37d26c7da8d3f91e7844"],["/Backtracking/index.html","8ce1b13b537451dd4bdb74937f0a9925"],["/Baidu-Sao-operation/index.html","4a3400e600822a9dfb2e5b54a9c4ed57"],["/Batch-Normalization/index.html","191925d11c26e2b3421fc69077997842"],["/Best-AI-tools/index.html","eb85c72cce0275b63a79d6c3d7b41be6"],["/Bias-and-Variance/index.html","7e330fc2315f4d568174939370c7b233"],["/Binary-tree-traversal/index.html","44bf0e09d65f01c4c4a2f3926e2339b8"],["/Branch-and-bound/index.html","f05a5b29e4f96cc8c4c1a758c9c7ccbb"],["/Buying-computer-for-the-first-time/index.html","1bc1eafc3782850232232d0f646f4e5e"],["/B站向北邮道歉！/index.html","b6e190e75700b1242578e5e16e33fd3b"],["/C++-string-function/index.html","95174d8e8bb53716176d200becf6131d"],["/C-Java-DevelopTools/index.html","0b6efd5fdefd21d319a244ccfebc989f"],["/CS-Classic-Books/index.html","67781fd8c311a56e393440b06c116f91"],["/CS-network/index.html","9cff6af4b223f8c0254e346a0f8325c4"],["/CSBook001/index.html","8749fb10d6a02ad8879bff0555478535"],["/CSBook002/index.html","f9d0f19c1f9ab24fe6e5f6b1b7d7eaeb"],["/CSBook003/index.html","e4ffd5386d54b8c2b459c885824782f9"],["/CSBook004/index.html","e303d6fdf34361afdbf33dffcc59cdd2"],["/CSBook005/index.html","e46bcea971df8c7d804f5f855c91291b"],["/CSBook006/index.html","8fc503f5affa1d7e778e115c4071dc05"],["/CSBook007/index.html","ad07649c5e192fda5093f515c2a33502"],["/CSBook008/index.html","c5f9ae2e453b29c926b809ece0612903"],["/CSBook009/index.html","f88a038df3427ce9a2cc132f96296f8e"],["/CSBook010/index.html","d8907066a5ac67e56e7aa5b496eeb6e4"],["/CSBook011/index.html","db1a3537c6b8ac361375f491b03a4d7e"],["/CSBook012/index.html","a367aa42b62df433034876488c5ea756"],["/Changsha-really-fragrant/index.html","60300c6bbb667679b34e266921a2c8ae"],["/ChatGPT-VPN/index.html","80d3261b0f7dbdd9fd3c56701090b4d2"],["/ChatGPT/index.html","17a96973374fd53faf705fe933088cff"],["/ChatGPT！王炸级更新！！！/index.html","cd3c04bb2cacf7f182cb18651db6bf7f"],["/Chrome-crx/index.html","e8bb420fbcfe18d368daa1e2cef7d95e"],["/Clash-VPS/index.html","c449ef25fc373b0ef0994ba33d155b35"],["/ClashForWindows/index.html","d266e0deedd2668dd31a11fc502d1ff7"],["/Computer-Classic-Books/index.html","c28ab5a42f8f16fdf2df948cbd2560e9"],["/Computer-for-another-major/index.html","59b941910aefa50f8a665b84bd5ae297"],["/Conditional-confrontation-network/index.html","2358617490dded4907204e7a34c6feb2"],["/DNN/index.html","d682d29a90441fbc0afdbad72388bf14"],["/DSN-segmentation-liver-experiment-summary/index.html","ec064b55f8ee7a72be0fc6a10d61e623"],["/Data-enhancement-elastic-deformation/index.html","a3f7a5e683a5c563837a4356b675c655"],["/Decorative-pattern/index.html","ea8d388ba45af36be65062555536626a"],["/Deep-Learning/index.html","5338bd20e04ac2f93b388d565e089157"],["/Deep-learning-and-medical-image-analysis/index.html","a7ed4c222d23acac12abcab894cfdcf0"],["/Deeply-Supervised-Nets/index.html","8f186e6e203b76e5df6026e010021f3a"],["/Deformation-model-based-sparse-representation/index.html","d814093a5338a30b122b0cc2086c6f1a"],["/Discriminative-and-Generative-model/index.html","4295d54c0584d8a67938c776f7ef9d74"],["/Distributed-transaction/index.html","0506c9c345c974b9994a22d1811863c5"],["/Divide-and-conquer-algorithm/index.html","3fa1a3e41ddaac0c60ffe3de8d6b79ac"],["/Dll/index.html","ff42de2512ff3660d8e1b87565d663f3"],["/Dynamic-programming-algorithm/index.html","6cf8c2adac8596f1ae3446befd0c13a5"],["/E-book-download-commonly-used-by-programmers/index.html","0451d2a05a519b0bc6502b93642bb4d1"],["/EditPlus软件的安装、激活和配置过程分享/index.html","80deaecd769d551844e20d85caf82116"],["/Eight-sorting-algorithms/index.html","442f47e5aeda7b2d75a113178ace2e89"],["/Encryption-Algorithm/index.html","c36bcb41c267fab9a47984fd8fd297c3"],["/Eolink/index.html","26626d658b08c3f8c774a51441d2987f"],["/Factory-and-strategy-mode/index.html","f3050fab10b970d0935ac21fb424cf7e"],["/Foreign-technology-blog-community/index.html","c7213c570258dcb1f0e05dacb1399277"],["/Functional-model/index.html","052897c705725cbdfc67ee4dc2603399"],["/Fund-type/index.html","85793f936cd6d3befb5abcecaa1867f3"],["/GPT-4o/index.html","5aada73af7f26da70c4af6cb40adcdaa"],["/GPU-medical-image-processing/index.html","01c8d07c8c2370fadcb1dab26d709b86"],["/Gemini-pro/index.html","ccfdacb28535b74945de21236c1b88dd"],["/Gemini-vpn/index.html","86f3039a5a437e482311e7daad34893d"],["/Gemini/index.html","cfa31395445fdf21cf24a54ef5076789"],["/Generative-Model-of-Unsupervised-Learning/index.html","c4867cac20a1acc68e9df420c6ee4eb3"],["/Git-Learning/index.html","277de188bd17f1448d3f1247d4a2716f"],["/GitHub-2FA/index.html","e17c6f689ece32e353d49f116e33fcb9"],["/GitHub万赞，程序员必看操作系统总结！/index.html","b201086698c69c3f32b47b821f67ee3a"],["/Golang-book-recommend/index.html","9f3dc84e8fec4cc8884f7478fdc3d347"],["/Golang-learning/index.html","edd6e23b9caa7a2e1f4333d80c31afe0"],["/Google-Gemini/index.html","83a325ca75b19697c3a5fdbe72735a1c"],["/Gradient-descent-optimization/index.html","1c9f0059b204ee40c6d4847e7bb77b0c"],["/Greedy-Algorithm/index.html","bf03700e35baaee75b694129499ac4c3"],["/HAND-User-Forum/index.html","9cf32855d4ee9b9013235d4b8bf18548"],["/HK-bank/index.html","7543b1f4a2d862e0c04188ef216b781c"],["/Head-to-head/index.html","5941084d9d99c7d1a84ab0d101d5e915"],["/HexoPage/index.html","c9eed0547591afbd9c2e623e6db51b1f"],["/HistCite-Pro/index.html","b602fa5d052b74d9d4a4b7fcc81b2e09"],["/How-does-the-program-run/index.html","782d284dffe1312b95f81101d086828e"],["/How-to-judge-whether-technologyisreliable/index.html","00ebe496604f6befb704f891438af9a0"],["/How-to-learn-design-patterns/index.html","9a55c05a8b4481d2d0b3978f6cfc658b"],["/How-to-learn-design-patterns？/index.html","2561dae573ab4c50c35a3eb74b56e1d8"],["/How-to-teach-yourself-programming/index.html","6f9003b8e7b7009a60cb02a1b0dcab55"],["/How2learn-Python？/index.html","35248b547c15ba1b2ebad227101b6cb9"],["/IDEA-shortcut-key/index.html","4cfdd3f09cca1365358835358c7bd4b5"],["/IT-interview-basic/index.html","3bddcc693514d9f5374b898ef4f5277f"],["/ITK-VS-install/index.html","86a85acdcdb2ce3c76560d1b47f0367e"],["/ITK-VTK-ItkVtkGlue/index.html","a8298caa2ccac8a2b5f4d1c07d789f87"],["/Image-processing-plus-noise/index.html","579ebb665a81e2464910457a21ce6880"],["/Inception-Going-Deeper-with-Convolution/index.html","3d68810ddb8d410f86de0e732a546019"],["/Information-Cocoon/index.html","b557af08c0cb873c6a383242bb075f25"],["/Java-GC/index.html","44fd3a25ce5e09f23ebca01b9873a140"],["/Java-Servlet/index.html","497b09eee24e91ff2e7a200cae3d60dc"],["/Java-array-and-collection-sorting/index.html","c99e9a81feeb02ee91dd441e50092845"],["/Java-development-tools/index.html","afbd55339cbc16339f46dc08c5eb82f5"],["/Java-eight-data-types/index.html","5bcc1dbedc16ebb5105c4cbb719cb39d"],["/Java-interview01/index.html","7684dbdacc9168d75273a3871a98be07"],["/Java-interview02/index.html","704267d01e8c27793d3e68355bab3af4"],["/Java-interview03/index.html","107507951352a063f58df4b63832fc35"],["/Java-learing-map/index.html","dc0c0e9dc3fcbc77282edcc1c5b0983e"],["/Java-learning-route-map/index.html","a39703108c2590389d6b49ac2d75fabc"],["/Java-memory-area/index.html","693e83a0e368f4373343a8e2ee074bf3"],["/Java-memory-model/index.html","57d0e87631af06b0c5d60c63c49474cb"],["/Java-multithreaded-learning/index.html","70eaf10250ae225b8bb4a3be73320673"],["/Java-project/index.html","ca394fd6c6428fe326eb4e5efd87e3d8"],["/JavaWeb-Chinese-Garbled/index.html","8b9bbb5ca5a60d38f73a1ade357b5f25"],["/Java还是C++？/index.html","550f611446b63f2e9a32adc9ffb96d49"],["/Kaggle5-step-guide/index.html","512ea0528ac85ae19b7d1a2d611af35b"],["/Knowledge-points-of-Java-garbage-collection/index.html","2ccc707134d2918b1c896295e8cb11e3"],["/LLM-DP-TP-EP/index.html","39069b2b0462a0e979d462a501cdf14d"],["/Layoffs-Hiring/index.html","ad949f75f0523537d26e644800418fbb"],["/Layoffs-and-Hiring/index.html","f350a89f7336c0eb260ed75fbcc798c1"],["/Linear-regression-of-machine-learning/index.html","62e7f2ce075355fdc2c0f7f657384584"],["/Linux-Compile-C/index.html","de9d3e8e897f6cc4ecf27228722ae2dd"],["/Linux-ITK/index.html","8e43bef03362fe206b05351dfd718394"],["/Liver-segmentation-of-sparse-components/index.html","659a84b0d4f9323d6a933b8fab121d04"],["/ML-EBook-paper/index.html","04d168964a188a28e277c63cfe029a66"],["/Map-uses-multiple-maps/index.html","e3c5f14eb6ebb2a52bccfb67cc02e2cd"],["/Marching-Cubes/index.html","4ef771fc8e8fc1531603a66225aa51f9"],["/Matlab-Graph-cut/index.html","73570d13ed9b145c298ec03f26759aa2"],["/Maximum-Likelihood-to-EM-algorithm/index.html","244b2c4d86b519ca48ae63fb3b742465"],["/Mean filter and median filter denoising/index.html","424033fe0d1057a1790eb7e16b163b97"],["/Medical-Data-for-Machine-Learning/index.html","0763c5dacd145feb0aef7a1768bcd807"],["/Medical-image-analysis-deep-learning/index.html","2f933debdac51213895ef09a44a40741"],["/Medical-scan-image-processing/index.html","efc454256a6fdab8b9c35c5750f50109"],["/Merge-sort-algorithm/index.html","bf6f479f9ddf1b3107391a99f2d5db35"],["/Monthly-income-2W/index.html","bb91517f49b292d7c20507715297391c"],["/Mysql-database/index.html","a993ec49bdec0d855e496ce422e1ba35"],["/Neighbor-Embedding/index.html","1cb6ee4afda9212b97e43b4b788bd302"],["/Neighborhood-approximate-random-forest/index.html","8e43c981e4bb2532f8d423122823c15e"],["/Net-and-official-documents/index.html","ada1e434880c45b4192a409a9a2d362e"],["/Netflix-VPN/index.html","ff20b02829c2c5069319dc2535211bdc"],["/Network-principle/index.html","60eaffec5b213436746c47cc2143a347"],["/New-Hong-Kong-stocks/index.html","3c255c8b0dac5fc05423820d9b468e46"],["/Nice-to-meet-you/index.html","19c42ff9665c10418116f49bc9b475bf"],["/OS-processes-threads/index.html","2ab7ebe15ca4758326e05d59748fdfc0"],["/OS-run-environment/index.html","4c5a3c8283dd95c1bf11f84fd89d2902"],["/Open-Internet/index.html","dafbdddf2c39940ddeb212821fe1b1fe"],["/Open-Internet2/index.html","9434b96317647bb1f150f17aa99813c7"],["/Open-source-community-and-rewriting-website/index.html","6c62c75b9be248377a2f0296ff2bdf3f"],["/Panoramic-image-stitching-based-on-SIFT-features/index.html","0f4e7ea1aae78fe5d619a3a88bf1b04e"],["/Parzen-and-KNE/index.html","628039a8011038d509dd761f6a0eec2b"],["/Personal-technology-blog-site/index.html","e061c8e6036d2d4a0e0ac5795a538f2b"],["/PicGo-Gitee/index.html","fdb1a597274855e977620ab99290dc82"],["/Programmer-treasure-chest/index.html","dbb64f66509cc21d0fecd131ecb0b81d"],["/Prototype-mode/index.html","768250af2a591841bd257123cd2b8c43"],["/Python-base/index.html","0df7f5359da4f74b9222685e0b1a3410"],["/Python-crawler/index.html","1ff271965cb9571e0241e9619f2cae3b"],["/Resume-revision-suggestions/index.html","40532020b50f43f85d0948099f13189b"],["/SEO01/index.html","c3b9a565f2b5a2e29797e1fb1114e717"],["/SEO02/index.html","3182c8e9edb1527e86d59195364f36bf"],["/SPHARMPDM-MEPP/index.html","5cd35c7c001e333d5cf8180f5474a771"],["/SVM/index.html","1c0fbcf86208226eb796094b1a3ea255"],["/Seata/index.html","27cc7395bcf0e5ae71186f36585cc158"],["/Semi-supervised-learning/index.html","77fde954ab4a9066fb69767499b3663a"],["/Sequential-model/index.html","06c59c32fcd611b8a48e7ddd6212fc09"],["/Shape-Based-Human-Detection-and-Segmentation-via-Hierarchical-Part-TemplateMatching/index.html","0ac742193433d768a3cb6df6254abdf5"],["/Spring-basics/index.html","1401e0e24fa17d0cbce4aff29b74efd7"],["/Spring-integrates-hibernate-Struts/index.html","a1af8523b9b6819beeb0aba737136e86"],["/Structure-learning/index.html","b3e34ca96c28bf98381245f92fd7ddd7"],["/Suggestions-for-self-study-of-computers/index.html","bf0334aea47a354c461f0d92e6bfc647"],["/Summaryof-HongKongStock-Account-Opening-Links/index.html","0f8033e2d98e03021a0e662a9b060602"],["/TCPIP-detailed/index.html","95cb169816dbc3d0d0ad570269f750e0"],["/Telegram-VPN/index.html","a6b2e5cc2f3a9bd65c64d08b8c55e7b8"],["/Telegram/index.html","c1f904a637e576ad66fc52a395b2be8a"],["/The-essence-of-shopping-festival/index.html","fd28bbea073d362f2608e6e65127fa80"],["/The-most-important-investment-in-life/index.html","1259e92233ccde11f8df2ada0218c865"],["/The-most-successful-nvestment/index.html","bf260f8fed444cce487ee7c6c524d504"],["/Transfer-Learning/index.html","392081dba2886222fb99f2c4a8a44095"],["/Transfer-to-computer-major/index.html","93be50d7b00c5ecef596c72416cabc3b"],["/UNet-Convolutional-Networks-for-Biomedical-Image-Segmentation/index.html","b65c47067d1836c56ef464ae9c5e9e12"],["/Ubuntu-install-sougou/index.html","fba5f619b3beba63f5ae9a32f064bacb"],["/Understanding-of-paying-for-knowledge/index.html","a17e688cc64f13ced5ee9d0e7641793d"],["/Unsupervised-Learning-Linear-Dimension-Reduction/index.html","bd8ff92b9e0673fdb17fc284f8363a28"],["/VPN-HELP/index.html","9dd10a8d8b9ce8956249ab911bb70f0a"],["/VPN2025/index.html","d28d7f90bebdf0e732911ca57c7c28ea"],["/VPN2026/index.html","44cd1b9fc9e2787f3cb729165fa013c4"],["/VTK01/index.html","9518ae9dd6d32afd563911aa6d29de8a"],["/VTK02/index.html","7204eefa766da9ab2514cf83eff51d4b"],["/VTK03/index.html","352f831420e64d8f1d78982a9bb4319a"],["/VTKRead-write/index.html","47dc570645f15c19c0f53a78280b388f"],["/Vertx-Java/index.html","274d867d7c0cd7058d9b34b477b60f38"],["/Vpn-OpenInternet/index.html","ef174282b438198ae9823b5f63443734"],["/We-are-all-good-kids/index.html","aa87d4ba3137a53016ca3cbae81160b0"],["/WeChat-80/index.html","969337f5c6fb815ccb1ccec667fc4409"],["/WeChat-red-envelope-cover/index.html","d09f986456cfa38b3eecacd61fb78714"],["/What-is-crawler/index.html","8adebaedd13921a11d823c23465d9fe0"],["/Win-Internet/index.html","3d5c9a06255fb4dace7760e3f5daf31d"],["/Win-Open-Internet/index.html","cee34a6c4291072a97e857a567626378"],["/Win-OpenInternet/index.html","8856268c1d7f0e43158f89bd285a939f"],["/Windows11-2kfans/index.html","d6835d96e14c4136050d2e739737c129"],["/Word-Embedding/index.html","6b987350843f09b6a77576f29382fa0c"],["/YuanShikai-and-his-Beiyang/index.html","0fed95364b4f63e9aeed5f9885f09b77"],["/Zero-copy/index.html","a170ad1955a3ddc0132595b72f4d0ab1"],["/about-keras-model/index.html","fc2e31b12be6bc9297c316020dd14841"],["/accounts-google/index.html","5a70477cab00b84aeeff202a10c791da"],["/algorithm/index.html","5efc867702917357da663bfc580d879b"],["/alibaba-Java/index.html","a966c7311da2dcad6dfc1def5c7c92fb"],["/archives/2020/01/index.html","b5235426ea4f61171ea951f8515f2aa6"],["/archives/2020/09/index.html","92596899c70f5fdca7f6fe014a7084e4"],["/archives/2020/10/index.html","cf0ed7c1f63b4e0ec9fdda18dbd12e35"],["/archives/2020/11/index.html","d294ed75c13461f89bf37d4324e73333"],["/archives/2020/12/index.html","7b2fb756e78322ed622c81cb8acb3414"],["/archives/2020/12/page/2/index.html","9e445cbaad60f0136cdbc968980e2e84"],["/archives/2020/index.html","6a10e9317fa989a49d5d77efb8b057d7"],["/archives/2020/page/2/index.html","6c6bf912397572f763339810b1a72b0e"],["/archives/2020/page/3/index.html","c3b2f19b53971f296ae5b81f1a2b761e"],["/archives/2021/01/index.html","66a47075dbd1bef94d7ec8334e02aa93"],["/archives/2021/02/index.html","fd0211774bdb7cd90992795271bd6cbe"],["/archives/2021/03/index.html","aa7eb30bdc027773cb5190190ecc701d"],["/archives/2021/04/index.html","e42d61f90145ad895a923695b7cdb262"],["/archives/2021/05/index.html","261285e234cfacb216c82ff863207f69"],["/archives/2021/06/index.html","c278c9496efbd4be9fb118f7ab736945"],["/archives/2021/07/index.html","cf9793e67515b05668cc169441c20862"],["/archives/2021/08/index.html","215dfdd8d94278700819877c8b179c48"],["/archives/2021/09/index.html","7ffd20ce18bfe1211ee47d15f8ff9153"],["/archives/2021/10/index.html","305f35eff567a913bc34bf38b3dd9b7c"],["/archives/2021/11/index.html","76b294f0e850b43197f3655733e272e4"],["/archives/2021/12/index.html","8117fb3ddaa4012b3b810adebb75d62f"],["/archives/2021/index.html","7811bc94357ef3338620479c77c5d1b5"],["/archives/2021/page/2/index.html","ad0b92359f0799e3743dce0a22daa8fe"],["/archives/2022/01/index.html","6cd6f9fce9d3ad6e40287e436dcc9325"],["/archives/2022/02/index.html","dadbc02c5ed6af211972a783be944037"],["/archives/2022/04/index.html","4d9e1cb7ec2c7d3610699c1d5b533293"],["/archives/2022/05/index.html","6ad4023d4be603cf149cb2085489e8eb"],["/archives/2022/12/index.html","f1157b7f90ed4eebfe975e83b82c6396"],["/archives/2022/index.html","29d6a6a39c783c92b6e0f15eac6af355"],["/archives/2023/01/index.html","af16f993c328e6986f910feb9862f63c"],["/archives/2023/02/index.html","9ea3b4f17ddbda114f8c81d5dac0e0c7"],["/archives/2023/03/index.html","3d167fb33276164b9b275bd666fcae30"],["/archives/2023/04/index.html","398acc84e6212b76ba0faf2ea8024a9b"],["/archives/2023/06/index.html","bd4f0ab174922313f0eeb377d595e1d0"],["/archives/2023/08/index.html","598904db61411054c57a7ac98e6e197f"],["/archives/2023/10/index.html","67ad43759daef2f93b484078cc4bcb39"],["/archives/2023/index.html","9c7c402a4591b280ae33f211d09caf6f"],["/archives/2024/01/index.html","3cbebfe8d628560da7e264e9969b4624"],["/archives/2024/02/index.html","c4b3ba5673bd44833ebbef05d747b49a"],["/archives/2024/index.html","add3b8fff81d31bda675e5540d717f0b"],["/archives/2025/06/index.html","60c9ff19ed9c884f81f925d0100b0aec"],["/archives/2025/07/index.html","12330a895b2f0985640ee52977c9ed10"],["/archives/2025/08/index.html","41f1b830a1c8cd9ce5a243137c466137"],["/archives/2025/09/index.html","1474b9126f9ca0782f2e4bc08a9fb0d4"],["/archives/2025/10/index.html","4492a2bf0c092a2a445fd95f8b566b74"],["/archives/2025/11/index.html","6df36e3975d209a4aabe3f01b443533f"],["/archives/2025/12/index.html","39ad57a25171952119010f9ac1dd05a4"],["/archives/2025/index.html","c2af202680bca6f1e8cba46c67689677"],["/archives/2026/01/index.html","4bb0a80daee14777dcb766640eab740e"],["/archives/2026/02/index.html","1e90663d4b64a66d59080a01969713bc"],["/archives/2026/03/index.html","1daa533b5959994631305258c48a440e"],["/archives/2026/04/index.html","e33cc6f47496b4fedd37009d14c69bce"],["/archives/2026/05/index.html","adb6f7a9e8a9749e79d25af813306612"],["/archives/2026/06/index.html","e33ea9bf1b7f6e7816030d3d67085c5b"],["/archives/2026/07/index.html","803a3168f7d1adc0fd03c5485261ed70"],["/archives/2026/index.html","ce7a6ff42dfea92b18fa4604f555caf9"],["/archives/2028/02/index.html","beff781456f7265b66f54c17eb45e6c7"],["/archives/2028/index.html","102a188f8dde87a107b5386679c2fd24"],["/archives/index.html","0d974c3417f5572c81045f80de49dc42"],["/archives/page/2/index.html","ecc3a9297f68d1736ff0b95981647594"],["/archives/page/3/index.html","779bddad63b5e4e437994448ab009dfd"],["/archives/page/4/index.html","fd7b62faf6ab23805688e753a8899664"],["/archives/page/5/index.html","d5a3981f26ab0d7f2e06d3a283ea0fc3"],["/archives/page/6/index.html","241d4f0395760c861f7904521de9e888"],["/archives/page/7/index.html","fb8dc7afdad6eb5b0c0503944ad6f9c8"],["/baidu-search/index.html","8271e9db29758f8f7129dea83c404a70"],["/baidu_verify_code-Hh2fKNlEB1.html","10fe08fc56309685cba11c2ab3a29ecb"],["/be-a-programmer-instead-of-a-code-farmer/index.html","83fa5d4118085513ae4aedeacabcc69a"],["/best-vpn/index.html","1437b91faba23a9d9c5f26aab02c83c3"],["/best-vps/index.html","b32a35e6c4c03ab895457f8d43d50a74"],["/bought-a-house/index.html","6a232b580ee716d8ef7773a1e1e1d2b4"],["/categories/AI大模型/index.html","f15bcb586645959c053322c65fa3c481"],["/categories/C与C✙✙/index.html","9494d8accb3a5a7ac1b5035007208df9"],["/categories/Go语言/index.html","afb869385f48491ede8c003f1d8e1827"],["/categories/ITK与VTK/index.html","960b086d025d78497037e40ff2d44120"],["/categories/Java/index.html","4229f55eafb13a56147604bb6ef0ebda"],["/categories/Linux/index.html","66a44ed4749b57e5e64c4d3ee95cbb20"],["/categories/PLC/index.html","bc6046d9f22722a5d040d77387f39993"],["/categories/Python/index.html","d94e814ec4dc6529add886a816abbe72"],["/categories/SEO教程/index.html","3750851eaa579bd128e0336065b9cd38"],["/categories/index.html","e563928a168c220271cf5ed17db1f101"],["/categories/图像处理与机器学习/index.html","ff4d6ef897ef2fa76903205a2c9a823b"],["/categories/工具/index.html","bbd72bbc73b79a4ba80333843b24ab43"],["/categories/技术以外/index.html","7b5885326e1eb84064bb0323c2e6eb03"],["/categories/技术以外/page/2/index.html","8821c0a6a65161e81a60ad1a3d11af21"],["/categories/数据结构与算法/index.html","12adf386afec155dc140daa8467ad201"],["/categories/科学上网/index.html","1c41679eac867eba740e47343308ad1c"],["/categories/科学上网/page/2/index.html","c6317a0d2011494b512232e4a9a5bf37"],["/categories/编程经验/index.html","de099fda44b6b861c162e0a59e58ffca"],["/categories/编程资料/index.html","405701960b6c31526f2d629ff653082a"],["/categories/计算机基础知识/index.html","a5e28a1b394867a344f46ba9e7fa60cf"],["/categories/设计模式/index.html","7aceab20334fdead1aaa4a1520db2bad"],["/choose/index.html","2452d2a9b5ced18ae343c7d5408d51a0"],["/choose2/index.html","9953e9e3490e821aa3fbdbb279674cf8"],["/chrome-crx-intruduce/index.html","a9a697d50a686321d3a803df56aab417"],["/clash-free/index.html","9fba829dc1b36550233d5e44be2230f1"],["/clash-pro/index.html","3b6fcbb9d817d449dc0e0fccffa757dd"],["/clashvpn/index.html","42af301c79d0efd004f526d998ca47e0"],["/claude-code/index.html","3cda28399ac90e8852437d6d5499c652"],["/coder-blog-website/index.html","afe567d6a62d705cbdfec8a44265403b"],["/coder-source/index.html","1d74839d3bd315a88800c50b8c7b254d"],["/coder-videos-website/index.html","0cbaee99dd1d75b077c32f2205dbe3ff"],["/computer-book/index.html","3e4862c4c2f92b87ba0a750d8fc480d3"],["/computer-censorship/index.html","c4270abd7d70a68963862221bf2cd6dc"],["/computer-network01/index.html","56bf42198315d4b12caee4f2806f2bf8"],["/computer-network02/index.html","4c08f693a0776ffda0746c295642cec7"],["/css/main.css","bc32ad34ec4990d934c3c647bdb62f79"],["/database-Mysql/index.html","10626173c1fe14696dabb324936d599a"],["/eclipse-lombok/index.html","3da39f635acfb3c5e94841aa715e9397"],["/freego/index.html","9eb3075fabb7169c5ac62e5bfe8df1f5"],["/fully-convolutional-networks-for-semantic-segmentation/index.html","897742b5c126e09c8200f029ec40114f"],["/great-firewall/index.html","b15846f373d0789890db3d77a782d001"],["/halfrost/index.html","bf1c2f1bad4680ad6817e9955fba88a6"],["/how-to-signup-chatgpt/index.html","1f34f74c9b9f79291288340b8465bd4d"],["/how-to-use-Gemini/index.html","d5c3e09211b15bb0c88cf31bdee410ab"],["/idea-continue/index.html","1b6a834866a3a4a2ef2396d64a5f463a"],["/index.html","778c48f775be831918f851cc64c620b8"],["/internet-dir/index.html","45dd2ebcc1dc7eb9f1acb8d0c9b50fff"],["/ios-open-internet/index.html","0040926c7357fa1651478f5ecbac7c96"],["/iphone-open-internet/index.html","cae32f9e40089b145dfe0e0197258fbd"],["/itext-makes-pdf-form/index.html","dce19b187dc6f1332d6b875deada3cab"],["/java-Set-Map/index.html","f72e7e63d5abdcaed814962f6742ea63"],["/javaweb-server-error-codes/index.html","9d1c929a4b360c8483adfed224236c7e"],["/javaweb-source-code/index.html","26cb5aa7107cfbed9aaa0df660db3153"],["/js/lib/busuanzi.min.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/js/lib/lozad.min.js","47904d34a224931dd1b615c59a3dbe3b"],["/js/lib/prism/prism-coy.min.css","0ccad54d95845901ead59bfd3ecceb14"],["/js/lib/prism/prism-dark.min.css","a4711d2957d6605eb5682bdd228cf123"],["/js/lib/prism/prism-funky.min.css","efedcdccd7a9ab342d2d9cacd24920af"],["/js/lib/prism/prism-line-numbers.min.css","38e22e790c279bb56f9ec4b90a2a2d58"],["/js/lib/prism/prism-okaidia.min.css","5ac6f9de996fbec68aaa106dfb16e061"],["/js/lib/prism/prism-solarizedlight.min.css","ecc7e64d039873ffcf7fb27babdaeb5a"],["/js/lib/prism/prism-tomorrow.min.css","456af2a14ae4f5089939d5904ac40fe8"],["/js/lib/prism/prism-twilight.min.css","ebb5c355332a8cf9a1ce37a2a69d678f"],["/js/lib/prism/prism.min.css","a5234d614834658887cec6a9515890f8"],["/js/main.js","052d2b299d9c750afea8df0b802ab7c1"],["/keras+TensorBoard/index.html","6af4809b32b8e643a861f5bc92637631"],["/keras-beginner-guide/index.html","07e83f2051a475157b7364c5b5bb3b28"],["/kimiclaw/index.html","21ae7db25596bf6ee95d20b5ea739237"],["/kmp-algorithms/index.html","5e3a88d5d023edce6e135ce0933819f3"],["/leetcode-Java/index.html","1ed7fea2ed554bab6561de1fd1e9873c"],["/links/index.html","46d29f318b8446370351b48e527ec500"],["/linux-java-opencv/index.html","a8feec5976602a760f2ac716a0943989"],["/magic-internet/index.html","319f35917e241b25e6d04642983ddc77"],["/magic-vpn/index.html","cf3a5fd4910dacba383878f5a436e41f"],["/mingci/index.html","188adc7cc15aa1d386395af896b6d11b"],["/mobile-vpn/index.html","f3d8f72140d759f3967d234d08c73a9c"],["/msb-source/index.html","63f27989edd91bc2ac276ac09aaf2906"],["/online-BUG！/index.html","3a29cdf1e87c38df27137b9cf1b1445a"],["/open-app/index.html","d4ff784d43ef9f81bc284068766d00c7"],["/openclaw/index.html","185f1484f800768a2f29590beebbab10"],["/openinternet/index.html","8e782151f13e24140e7ee554b682a0f8"],["/page/2/index.html","f78ec14b73ed7df1ee7c1661d5228cda"],["/page/3/index.html","8876ce7755ba80d2df6ea1137a233a90"],["/page/4/index.html","a178d59e58f8d57258c202c33e13d2ee"],["/page/5/index.html","9a0e0d54615fdd2b9cb5c6f2586b8236"],["/page/6/index.html","3fd742dafa0dfcfb478aa4719ded9a0e"],["/page/7/index.html","8543c6af74bb057e648214c47fe53d78"],["/pandas-data-preprocessing/index.html","f65dda3975e291a12216533f31412ddc"],["/phone-win-open-Internet/index.html","c456136681c29ab147f307e3738b4888"],["/popcorn/index.html","5e2a6a92e97365d3c3e20f3e922bb29d"],["/protocols/index.html","d0e19cfaeb123ab91ec093a34d82a6fa"],["/python-Blog/index.html","57df895d9ee46ea72d8e2713dcd85f62"],["/python-yeild/index.html","ad247a388178b209d661ad5eeaf35d7b"],["/python爬虫教程/index.html","7ed1d343fca09c6559e42c0b13248db4"],["/route/index.html","13ab579ec7e0b887574e899b18004b8c"],["/search-help/index.html","71b9b60e608f1c6cf65e3da634ff46ed"],["/software-copyright/index.html","6dd49c127c6579cc6870a55346065034"],["/sw-register.js","82689ff3ff5dd7932b668796664e9b6d"],["/tags/AI/index.html","2ddfea8beca1487b1514c7bb4231125b"],["/tags/API/index.html","7801c0fdbf5a2f79536e9f065f5d3c57"],["/tags/C-图书/index.html","d3f3b91965992f35bb95f5a58386b82a"],["/tags/C/index.html","5743fece649755e721dfc1e5d487c274"],["/tags/CNN/index.html","36593619871687b627b349c119910a7f"],["/tags/Chrome/index.html","ab4a200298f6423f2c9e28b784e9357f"],["/tags/Clash机场/index.html","6768490efb7351be6bf657fa60cb9106"],["/tags/C✙✙/index.html","dd10b0702d77f78cab12d44566dcfd30"],["/tags/C语言/index.html","635f429f978dbc4ba0209363f77d52b7"],["/tags/C语言图书/index.html","61bd434f3e40589d45edf1cc122720da"],["/tags/DSN/index.html","05dd00cf796bb5e4789066493382e881"],["/tags/Dll/index.html","cb70d9c648423586ce1d5e5e2bf429db"],["/tags/ECCV/index.html","737585f31bcc80f27ed93629fda1b6e8"],["/tags/EM算法/index.html","a1900d83b7c0f4fe6c78c4794dc4136f"],["/tags/Eolink/index.html","62172ab56ed01dcc9114382e2de8fc17"],["/tags/Gitee/index.html","b0c06ad1b456c8c20c0f8a6845c987c7"],["/tags/Google/index.html","067cf8235239c920dab7e9cc6991a0e6"],["/tags/Go语言/index.html","84d03a21022fe58d04e57b77fa6f41e6"],["/tags/Graph/index.html","5389768942e80a4ef6852afa6d76cfcd"],["/tags/HTTPS/index.html","e05311d353bafc6dfbe73cc669fbbf39"],["/tags/ITK/index.html","1908c8fd4677ff5dcf748b9b6181c75c"],["/tags/ItkVtkGlue/index.html","e50ad943af2603e0c5cf30cccfeb11bb"],["/tags/JMM/index.html","be8926e6e62f8f684bafa5d688afb646"],["/tags/JVM/index.html","6bb263be24427a05bddb432c35bf832c"],["/tags/Java/index.html","f1d7abb0377b00fdbad1f8e4c73fb450"],["/tags/Java图书/index.html","afe1cae98d9c89d50abf7a519467a6b0"],["/tags/Kaggle/index.html","4de95e74e817a7f1d287499b6e121a3f"],["/tags/Keras/index.html","128c7cfc7c66d72a82405714777d1ce8"],["/tags/Linux/index.html","0cfd2b97c3b43047c005ee3eb180a850"],["/tags/Linux图书/index.html","28b498d0734b7de31998574ba6a53d66"],["/tags/MEPP/index.html","e1c14486d1a1d9561d77cf7e3fd40cc8"],["/tags/Map/index.html","191e4f239a2d9acba3ed71cb5bdbc3d1"],["/tags/Matlab/index.html","8cca658a2e986cebaa6604e96e29ecab"],["/tags/MongoDB/index.html","c7b0830f302e20401c9b044d852cfdb6"],["/tags/MySQL/index.html","f275af09fc9d8524c9f25e153e6c070d"],["/tags/OpenClaw/index.html","cd83e644ec85b57f3e04470c7ea91b5d"],["/tags/Parzen窗/index.html","64f2fee792c600bf543041b35f08fffc"],["/tags/PicGo/index.html","967b6588c0ab6d0ae0802e379f108fec"],["/tags/Python/index.html","308c297957a6faa4cf7e73e39a30d6b3"],["/tags/Python图书/index.html","e1e476cb99d8c226d604d1d28b441c64"],["/tags/SPHARM-PDM/index.html","3d8e2320123e8233f4d6a267b7acb3cc"],["/tags/SVM/index.html","59326b1b58785f5ef7a8ca48d05f9361"],["/tags/Seata/index.html","4fecbb74a11391b96b6423d600c9cd76"],["/tags/Servlet/index.html","056be3080cf8f10786777bd5458f1970"],["/tags/Sping/index.html","83190c69f2c72f4a30c84e3a880d2fda"],["/tags/Struts/index.html","12bc19a9a2cfa464bfcae5e8d3f8f130"],["/tags/TCP-IP/index.html","6896bea5adec50137ab59b0d2aab3c8b"],["/tags/Ubuntu/index.html","52ccaba596e276f02df976f227363384"],["/tags/Unet/index.html","64f5e87ada09d1418c4bfc364281dfe2"],["/tags/VPN/index.html","39f309b7979e2a334dbf66b87e93b441"],["/tags/VS/index.html","99c2ce6bfa6cc410590c85af30001345"],["/tags/VTK/index.html","4b7409c08519b05d830fb4dcc0e3454b"],["/tags/Vertx/index.html","70efdfe5f9a66df2525f3f0953dea75d"],["/tags/Windows/index.html","8c632b6b82bec14f023cb4263a51a4f5"],["/tags/claude/index.html","a7bce7b4c1850afe73fe242258d61bef"],["/tags/edit/index.html","d14a9c658b54a974b9c7e930cf2eb711"],["/tags/hibernate/index.html","afcf033694e686d67be71064d5624a8a"],["/tags/index.html","9e3b805609affcac40b625e166d55bf4"],["/tags/itext/index.html","71f4807d3d4770f5ecf396ae0aaf8b9f"],["/tags/jdk/index.html","a8e79f5cf764e799a12b787996fc58cf"],["/tags/kmp/index.html","f079d3412d8d72b5355132d490ecde39"],["/tags/k最近邻估计/index.html","d9b7efe43d74c8dd01e08e10ff170ae6"],["/tags/lombok/index.html","1f00d0f03cd9c08fb4243f112c5121c1"],["/tags/offer/index.html","0acbff37716cc53d3755e42f4c1c930b"],["/tags/opencv/index.html","70ec3c3be06b3809204461e6285fd8ec"],["/tags/pandas/index.html","89259ccfe152c94fec2fdb5409235e2f"],["/tags/string/index.html","f7610b15adc484a831cccc5ce9143e08"],["/tags/vim/index.html","995364a1e1bc8a9654392f7f3d0a1fe6"],["/tags/vtkPolyData/index.html","40b4c30759f62cc2ff6a54bd90119678"],["/tags/web/index.html","b11d10786639856cce6ab89f89b2a7ae"],["/tags/xshell/index.html","bede422a8214cb654fea96d815165ebb"],["/tags/yeild/index.html","27b27f7680edfc7a113087f4fc45577f"],["/tags/互联网/index.html","cfc77e4e87a6e9d9501c793f5534f0c8"],["/tags/人工智能/index.html","f78a8317e46ccec7bcd4e999ffef880f"],["/tags/体绘制/index.html","7d752be9a8a8543f7e90de24d6601c9d"],["/tags/全卷积网络/index.html","ef35beda9386e4fc023ba3128f87b8a1"],["/tags/公众号/index.html","d603f88bae667a8398e0a805e0905f01"],["/tags/内存模型/index.html","cfa6657200ba91d4eaf7fc607056c106"],["/tags/内推/index.html","e229bc984ffd0757180f838c0c4b3563"],["/tags/函数/index.html","795b0b29d68555e40ab29bae6383a192"],["/tags/分布式/index.html","d0cb2e9115e71c35ec6744c8a048f267"],["/tags/加密/index.html","960667d27a74b4501196af784bf1d850"],["/tags/医疗图像/index.html","14983afcb076bd7ed2521724c62bccba"],["/tags/博客/index.html","600b13f2aa944073ba4544dd18adeaab"],["/tags/图像数据/index.html","07782130090cafeb41be583a9b406539"],["/tags/图谱分割/index.html","898882026bbe9c49e26af71dab7eaf68"],["/tags/垃圾回收/index.html","9bbd714d9651ea99c7dcf8bd836d0b60"],["/tags/多线程/index.html","858714621c0181c13470504d0777d68a"],["/tags/大模型/index.html","b99f3f74dfc2d018c63214e7dbca2194"],["/tags/字符串/index.html","76d046413c955228dff5a572cea0a3d0"],["/tags/小龙虾/index.html","a6ac95bf2ef01c883cbb78894cd4c508"],["/tags/工具/index.html","49c5f7694023f6abea9eb1eba157c0e8"],["/tags/弹性形变/index.html","ac3da520a10562581229b89f71d23b58"],["/tags/排序/index.html","e6fca95053557ca503c8c9d0f52b9f48"],["/tags/搜狗/index.html","e789ee00a5929940b7f6db55a374095d"],["/tags/操作系统/index.html","cab8bfd5304e1453c829c78a2061f163"],["/tags/数据库/index.html","c64d6639a3978bd00731f50273f63685"],["/tags/数据类型/index.html","4512f6616332e8b569c3ab7f6a38fcfb"],["/tags/数据结构/index.html","d84ddf851e9bc6947833a5411e7cc420"],["/tags/最大似然/index.html","469623157022b13b6d12a7ea1cf7c058"],["/tags/机器学习/index.html","23a733044232465e745d7badfc1ebb79"],["/tags/树/index.html","6e5707c8d042979d02c93c2439ff6a01"],["/tags/框架/index.html","153dccececbb9152cfc5e33d46de5cf1"],["/tags/梯子推荐/index.html","8cd7807a4fc29c355c5f27402740a7b4"],["/tags/求职/index.html","ce26d9a367399e02d605e82969cbe265"],["/tags/汇编语言/index.html","a1b6b3ffa26c021775a5958659c9a9a7"],["/tags/深度学习/index.html","242f3272866dff77c458402f5cde7143"],["/tags/深度监督网络/index.html","5cd57947a8968b9e9a0eecd00e5f6ecf"],["/tags/爬虫/index.html","4c02188c42e4c475ca89c10ee11e3f60"],["/tags/电子书下载/index.html","490345b2d0ea075862d0afd675dd879f"],["/tags/科学上网/index.html","8fd6614c4d97cc94feb8daf928ea3bf2"],["/tags/程序员/index.html","4e6d8d5e9a94d5fb6e022f35abb1471a"],["/tags/程序员面试/index.html","6d94d8411734ebe6875788f9bffc0abf"],["/tags/简历/index.html","64b3fe506531cf7ff3fd3cbadf5396b5"],["/tags/算法/index.html","7524d9724c72d355d8462c428e97e8e0"],["/tags/线程/index.html","b1a33fe7d8319a3497fe0ab7a78de4d6"],["/tags/经验/index.html","d63128e2063d557e505d3d1d6722c12f"],["/tags/结构学习/index.html","9cb15fdb93e44b9566f7f7b6244e98fb"],["/tags/编程/index.html","4de014fa74969402aa06623204e4b84d"],["/tags/网站/index.html","f94013fd016a9086da25211079a8a431"],["/tags/网络/index.html","339e4d3068bebaed5cdd402cb7996867"],["/tags/网络原理/index.html","ee5cf4b0123948f1694dc88dc647df20"],["/tags/翻墙/index.html","75837b2b9657abd1cc4a41586816bb02"],["/tags/肝脏分割/index.html","98e36bba04f3fe492208de88b35888d3"],["/tags/计算机/index.html","f3c8e6afb3b1285e03d65a28f69d3f6d"],["/tags/计算机专业/index.html","f0265b80d330b33b58915a248237d706"],["/tags/计算机网络/index.html","1fd00f647ffb0feade902f0797a16f5a"],["/tags/设计模式/index.html","0dba6d4e87dbae4e1a59c79772d74444"],["/tags/贝叶斯/index.html","469838b0f64191648905b97ceb38bf9f"],["/tags/迁移学习/index.html","77196f73de55b1453f5a904d23904d9a"],["/tags/面试/index.html","5876122da49173e53eeae695a800a00e"],["/telegram-search/index.html","60ba6e507a5fa6c98c4e45f8f7d2afe5"],["/the-meaning-of-reading/index.html","d59e6cb64780dd5b4adb70d042993f04"],["/the-way-of-pragram/index.html","69e0eb40c78e31e283df62bb9a027ad6"],["/troubleshooting/index.html","1d374900a17e80e4ed733f3daf9123e0"],["/untiypro XL安装/index.html","aba6dfe75018ef545eab7ad11648b8da"],["/video-websites/index.html","bf8530c1303a5b9d46952be955bc8634"],["/vpn-freego/index.html","87a31f8bbf7856c1d58f6dfe364149c2"],["/waibao/index.html","70f99e01501f8f2a9edd88cc1a38a69c"],["/wechat-fans/index.html","d465df7ddba1782ad87ac0f2d61e6282"],["/window-run-VTK/index.html","663500c61b8d7e0667f05e229af2cd9a"],["/windows-science-internet/index.html","a513171627dbe766fa0e34716a5e9b7d"],["/xshell-connect-Linux/index.html","eedc65f7b2469c18aed09d08f54935a1"],["/yzhx-vpn/index.html","fbe6f967846a1335b5ad086c04ff980e"],["/‌Accessing-the-Open-Internet/index.html","66268ef0d19cb574360edbe33761c9c2"],["/《Java高并发编程详解》，去大厂必看！/index.html","a058026e850d230929efe4f61ddf95fc"],["/一分钟没了 1.5W 。。。/index.html","bcd0da8b567d77ea4869f9554baf3d9b"],["/一条高产爆款内容生产线/index.html","7d6914db35c87a1c3b130f03ac319f4d"],["/为高考学子推荐的六个就业前景广阔的专业/index.html","d2b13d8b601ec6584226b21eaf0da65c"],["/互联网赚钱机器---社群/index.html","c358f233d45b3b3d842b61d8c04fffd8"],["/你们常用的工作方法和思考方式是什么？/index.html","7ad02e76c61f48d3a6fa685caecf5232"],["/关于环境配置的一些事/index.html","e8661c137bef55fbcc26a34dea3fd719"],["/准备了19w！搞事/index.html","e983623371894a1ceee28b0e22a5cced"],["/几个很重要的感悟/index.html","04241c4fe70fa6bb3be21a336e45a303"],["/分割ROI篇/index.html","77fb0bbeae878d91b1f29fbe8200792e"],["/分割精度说明/index.html","0a90be54a8e50cdc6df83beb26801b01"],["/分块程序执行/index.html","fdd2012dbd55bb29e69db5ea86e1ffee"],["/加班公司黑名单！！！/index.html","eb61946df37d9d495fb3f843dd139694"],["/卧槽，上知乎热搜了！/index.html","ec420b2b7aa3a99825b94d291641f49c"],["/卧槽，我的小破站爆了！/index.html","7c113af3465aa4ed0923f047faf93f6b"],["/卧槽，我被盗版了/index.html","12b2e71bad28cf9feed332c6dfdb250e"],["/卧槽，还有985大学在大一上C语言课？？/index.html","1e7a79df629a116f76c9cba8e0403ae3"],["/历年微软面试中出现的leetcode算法题/index.html","565d526299ac2643ecde9b42c16b5e8b"],["/去特斯拉试车了/index.html","c95361cec85ba4c31d6523dee0bf0816"],["/吃苦的三种境界/index.html","29cf6f2981bd87570fdce7de250df627"],["/哪本书适合推荐给 Java 初学者？/index.html","5bc24055938933d06b89e56e3cd5106f"],["/哪本入门级的学习数据库的书最值得推荐？/index.html","9f7cb50e7fc814f7d96c83aa5fa9166f"],["/国内外常用的AIGC模型/index.html","3bcf952efa8323fdb4fd0133bc7dca67"],["/国庆假期/index.html","1ff64d3ca7003fa00360375ee42ed9d9"],["/图谱程序字典/index.html","afc77e34116ee61895cae8e9aa3cc365"],["/图谱训练与分割/index.html","25161fd009b5727cd79eae8d07bc9726"],["/宣布一件大事/index.html","713bc8f88a57398c0f55dda352d1f061"],["/小鹏P7i试驾体验/index.html","92efab90627c0461f52b7b352b91c23a"],["/微信PC版3.3.0内测更新，电脑可以刷朋友圈了/index.html","1fad46db3e9dc987e77f398b0b4a1a03"],["/怎么更快的赚钱？/index.html","bc124f2689dd51a5bd1b7057b42e8364"],["/我毕业了/index.html","2a9975b1be73ae51bb79fa4023a10def"],["/我！真！的！找到了！爱上学习！的方法！/index.html","14c3a76a4938009dda9c7a3f27aebe09"],["/户口的意义/index.html","b94b80e9ef22ad370d6afcd1efdcbe34"],["/推荐两本经典算法书/index.html","e8c825292b0557cb0c2973cb19b711a1"],["/推荐几个在线学习SQL的网站！/index.html","ac1c68e138e37ec5b369d6ebcf019a91"],["/搞了一个程序员成长晋级社群！/index.html","12490402aa5a23633d760eaec635f9e6"],["/摘抄/index.html","f31bfd01384c0bb22c36d05c98eb3d56"],["/暴跌30心态崩了/index.html","592397cffd0f1c3c5391c36bcc88f951"],["/最近很火的ChatGPT到底该怎么玩？/index.html","12e485db9dcb31ddb10ea5b602f1e77d"],["/有哪些好看的日历可以买？/index.html","4c8ea6e9dfce4c1f1afa8b33fc08f416"],["/服务器有啥用/index.html","6a10acbe44d0c087f724d84996fb4be1"],["/来长沙了！/index.html","049956aad7911ad97ec56a55f9627baa"],["/校招污点公司名单/index.html","3ccd64c4e55174e1883441823800b6e7"],["/梭哈200多万/index.html","f0a520c1145c5583e22651769803aed8"],["/梯形图入门/index.html","46b3c74bfcae4f9fa2259d4d95723fe2"],["/橙心优选，凉凉了！/index.html","9374335aad6e193577c0a2f22ed25651"],["/比亚迪汉试驾体验/index.html","a3a883c335f397e5dda3baa438a5f2e0"],["/清华转学成电，真的牛逼！/index.html","d6df4c2d186d9da4825bc783d2e3e173"],["/滴滴程序员被亲戚鄙视：年薪八十万还不如二本教书的/index.html","4990bde519c20466c88343cb7d4d0fd6"],["/社群！/index.html","09a453a974e69662b64b04a5d538756a"],["/科学上网之VPN篇/index.html","6b75f3d08c3a0a7db924c1955d53d0f1"],["/程序员必备的几个技能！看完你也是大神/index.html","a96641a85c7518331b149cbe7e18f551"],["/程序员绕不去的槛，Linux！！！/index.html","df28f524e1a14b103a5b7e7667401587"],["/蔚来ET5试驾体验/index.html","32c6f4ac1b135782208e3c67cd8b383e"],["/蔚来，牛逼！/index.html","7f68cd34765d1808c59d6898e7813ba1"],["/被录取了/index.html","26b1afdb503fd42b70ea625c6152f4e5"],["/被找事了！/index.html","56ec990324964c780b3e1da0d3eb240b"],["/被拉黑了。。。/index.html","71ec95046277821095d8a58ec6661f26"],["/被车撞了！/index.html","c6d7711d780f646694f3f7e9bfa4daae"],["/该如何选购固态硬盘？/index.html","eee38f65f95a87fc9b8cade84a5c5d76"],["/这本书一定要看！/index.html","03e64aa80b058abd2924160cba126b09"],["/选Java还是C++？/index.html","8619f989cabac3bd80ca15b6318ddaa2"],["/那些让你起飞的计算机基础知识/index.html","198745c827ef2f0726264b8a836e542b"],["/靠这几本算法书，成功拿下大厂offer！/index.html","579d999a385a4f2a77a773edaa0ce53e"]];
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
