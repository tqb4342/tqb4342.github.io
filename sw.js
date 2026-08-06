/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/0010-city/index.html","43e9fc06d618b5c66f37f8c21786e21e"],["/10-algorithm-book/index.html","c466b55d3302a2bfbe805319da3cdfd0"],["/10-website/index.html","e10c18ef15271cba422faf89e7ea6585"],["/100万的小目标/index.html","174dee690be832dd0fafe77bae5d36a6"],["/10w+YYDS！/index.html","b320dcc7f02b7ad20d2135da1f566222"],["/10website/index.html","1c4ad4bbae4b2838be312384c9bbe5a2"],["/12-technical-tutorial-sites/index.html","0ed6bbabfdd5b38bd55488a700e3f29b"],["/2 6 岁 了/index.html","d39f3e54bf88734e53a6902d47309716"],["/200万，啪，没了。。。。/index.html","d303749d90c40e8b5734d5a16afd2931"],["/2018ECCV-Paper-DL/index.html","cb54e4f9b2f36beee68735aa4814970a"],["/2021年固态硬盘选购最新攻略（小白避坑指南）/index.html","c800c94e64235b788c06617cff486f50"],["/2021机械键盘推荐/index.html","3d28397b3242942c148fa5661b4b04a3"],["/2025-07-15/index.html","4c4788feb42a0a99fe18b3b7255753ff"],["/2025年终总结/index.html","a9a5470b05ee3c2b46713f34fa8735b0"],["/2026-Open-Internet/index.html","70cc4668c03b0037f16ccd65984abdb6"],["/2026-best-vpn/index.html","20aea51a85b42409c13c3c9dc368deb3"],["/2026-clash-vpn/index.html","5304b8d01df52c13eb4c45d804203365"],["/27岁了/index.html","9041c598ea7f0887fa771a687dec4328"],["/3D-Convolutional-Neural-Networks-for-Human-Action-Recognition/index.html","1bf675574ec053f361efb3d001d1e9af"],["/3D-Deeply-Supervised-Network-for-Automatic-Liver-Segmentation-from-CT-Volumes/index.html","47885d9432f18f4ecb9d3d1dd92674ae"],["/3D-Unet-Experiment-notes/index.html","2ed85c8abf5d606377b9ae22450b0072"],["/4-Software/index.html","8a2fcd6a95775885d263da0f6fb527ba"],["/6-website/index.html","32c89d889bd698d2b363ecf9ff80080f"],["/7-terminal-tools/index.html","4b0e9a8f7f5f154a110e5b0b4f27a2e1"],["/AI-PPT/index.html","ab487bb58ddc6c73c88614a76dd554e3"],["/AIGC中典型的深度学习网络/index.html","0a42060d6b952fee0296adcaad5262c3"],["/Accessing-the-Open-Internet/index.html","7b3cf53901445582304186ae69fb0d24"],["/Agency-model/index.html","fa662d15f71ff31f6b8c5c5ee89b40b1"],["/Algorithm-brush-notes/index.html","f20ca9e58876eb6815770a21a682a58e"],["/Ali-recruits/index.html","4efb53e16428ab53a824f8e696127394"],["/Android-VPN/index.html","b52be98e6db80752bef07ef332c06acc"],["/Android-open-internet/index.html","23d8bb0a37cb2fe6c4ecf7c1766a8c2d"],["/Appearance-mode/index.html","fafa7994d3358cd3ca796b21e49ea551"],["/Backtracking/index.html","106b24f156fd078c685822d406f6924f"],["/Baidu-Sao-operation/index.html","ee27aea379fdce848b933774d6a5326f"],["/Batch-Normalization/index.html","7d4ec6256209c1d807a776e3a9b47d62"],["/Best-AI-tools/index.html","9ddd7ca9fe7fcd2dc2c5b858d6209f98"],["/Bias-and-Variance/index.html","2f13d9658ab8ab2168bb674d5b7d2d3f"],["/Binary-tree-traversal/index.html","43e4db11335442b56923de442323fd25"],["/Branch-and-bound/index.html","73b27913d072bd02052f5fdf454a0bd5"],["/Buying-computer-for-the-first-time/index.html","1093761d0c61526fd4e1d01f81d2d41a"],["/B站向北邮道歉！/index.html","1561f8379c1ba41b913e81d7db6aff47"],["/C++-string-function/index.html","b28838eb817301d5c58aa655f1f702af"],["/C-Java-DevelopTools/index.html","8b883b05af2547c88aeed7519b127dba"],["/CS-Classic-Books/index.html","ee9e1eaf3b3eed46cef9bd8ec36156ce"],["/CS-network/index.html","715ce07dfdc52213c03fea04ff88bee3"],["/CSBook001/index.html","854b15223d0d2a1cb3465737eba9c68f"],["/CSBook002/index.html","6e2ea78f6147f065cfc134bdd911daad"],["/CSBook003/index.html","d3564942e1aa2532b3698a080906b76d"],["/CSBook004/index.html","88e3510ef7ea7bdc2037e2020c1722e7"],["/CSBook005/index.html","c6cdc8a4bb3a293fc003a3f197d33d66"],["/CSBook006/index.html","3e07b109ca95d9a3b13432c273be9bbf"],["/CSBook007/index.html","241ceaf20da53308960a15f8d138aad9"],["/CSBook008/index.html","033d624c12c95f91c43f88930f93f263"],["/CSBook009/index.html","3ab9605f74e8b59d4bcb790977ab6fe4"],["/CSBook010/index.html","2b961cf50667756c01a265e19ce40d04"],["/CSBook011/index.html","17a2668acb9945afd05d9a269ff0ba5e"],["/CSBook012/index.html","5f94ef3d268287b3e2ed72e956b7dd8d"],["/Changsha-really-fragrant/index.html","e5816917c497519d0b03e4d381b216a7"],["/ChatGPT-VPN/index.html","40c52db6ba42c5f9a5b74931aaf183a4"],["/ChatGPT/index.html","15e149a41c57e033a3a2e8a995f7121b"],["/ChatGPT！王炸级更新！！！/index.html","c8888ea25f9899bac1cf31cf5e0b273b"],["/Chrome-crx/index.html","48933672e572ce3b18b2a3e51c468548"],["/Clash-Party/index.html","fc44fcf1658949e27166ff51f9c8444b"],["/Clash-VPS/index.html","90682c678860330459af0aa38949b616"],["/ClashForWindows/index.html","98071fee0a702d9080aaa8f524be0f87"],["/Computer-Classic-Books/index.html","6adaa44087ea228808522b9335e9a38e"],["/Computer-for-another-major/index.html","36cb2864a7987cc46dd91f0f07d877bd"],["/Conditional-confrontation-network/index.html","fd85103abba9529a542e882c09ff9d87"],["/DNN/index.html","dc8fc36a21dbb9b8130927a9e0bfe15c"],["/DSN-segmentation-liver-experiment-summary/index.html","c70f40ec056cad8c9b57f4b6d120acb2"],["/Data-enhancement-elastic-deformation/index.html","29fbe3335504fb41eb29112615530367"],["/Decorative-pattern/index.html","1f674a1469beb33826cd9f51f6e8f9fb"],["/Deep-Learning/index.html","c032742469370c1462f76d5a1c3222a2"],["/Deep-learning-and-medical-image-analysis/index.html","3cb94ce90e64ba03d3eba43bd334e94f"],["/Deeply-Supervised-Nets/index.html","6b69cae4baa00d93c75499354cbab2b6"],["/Deformation-model-based-sparse-representation/index.html","53fbecf9baa168223aeae1ac9307f94b"],["/Discriminative-and-Generative-model/index.html","75a62be5a89f9d39aaba51982baa12aa"],["/Distributed-transaction/index.html","79caf3a878a6757ad38aa537a2887d4c"],["/Divide-and-conquer-algorithm/index.html","5f7bf7b762a08fa84b41c7e08f1beb21"],["/Dll/index.html","9147a64c34f8a7af91af4c85b1c867dd"],["/Dynamic-programming-algorithm/index.html","e6956dd0171cf0d484a5d3ee097bd674"],["/E-book-download-commonly-used-by-programmers/index.html","5c662e997c403dde2a06cff8eef859a5"],["/EditPlus软件的安装、激活和配置过程分享/index.html","b1108b3f4c1d2ca733741c2588d70c30"],["/Eight-sorting-algorithms/index.html","b6fcc5c01b7129988dc0253253ebfcb4"],["/Encryption-Algorithm/index.html","2cea2fbaddcab90406d92d43049edf26"],["/Eolink/index.html","f3924b560416197dfa1a26bbe5688028"],["/Factory-and-strategy-mode/index.html","4ff269955917d8194e2cd29fbdbac583"],["/Foreign-technology-blog-community/index.html","96e2e96d4052b804b653fa48920039dc"],["/Functional-model/index.html","8d434c0fd579c87b79d2bebf3239641e"],["/Fund-type/index.html","c3f248becb2344f4c777998b89f118a9"],["/GPT-4o/index.html","771b9b87270a2c2f4ab22d3956fd4210"],["/GPU-medical-image-processing/index.html","87c5161b64baea1504ec96de8a2837b0"],["/Gemini-pro/index.html","881da078b5b57e4711a1ad594eb1ccfc"],["/Gemini-vpn/index.html","fa6d721612258f867f9a4cf09e66fe12"],["/Gemini/index.html","fe1bf43808894307f2389d236c4d2aa5"],["/Generative-Model-of-Unsupervised-Learning/index.html","2817e91bedac1c23ac5f2876bb16fbc5"],["/Git-Learning/index.html","60383d515c342ae4e1460d8a1a219ffb"],["/GitHub-2FA/index.html","0de3d3b50d08cc4ed3d51c9d63f4fadc"],["/GitHub万赞，程序员必看操作系统总结！/index.html","8c371cb10ac25365ee56474c14cd911e"],["/Golang-book-recommend/index.html","67b65923986ac19e3c9cca72f65e35e4"],["/Golang-learning/index.html","1e8398ac10c1a412dceeb47182630a5e"],["/Google-Gemini/index.html","1baf0dc37489a82d14b3336a84cccc2e"],["/Gradient-descent-optimization/index.html","7040f0d406f150bf18beef6a4443cf8e"],["/Greedy-Algorithm/index.html","c0135f7b7cae3a6753f46ae30e3f60b8"],["/HAND-User-Forum/index.html","f0f00a781d1abaabf8848702e8e1e680"],["/HK-bank/index.html","9172532b04499073987c5bc2d039dba1"],["/Head-to-head/index.html","4118fa18fb77c50d413cf6123920e0f8"],["/HexoPage/index.html","185bf9bed80e08bc72b8d2e9b87f30f7"],["/HistCite-Pro/index.html","e551ec5f39f1d0208c80f0bafef40880"],["/How-does-the-program-run/index.html","3a26b91a62a48d55ac110ae7edc6a897"],["/How-to-judge-whether-technologyisreliable/index.html","42ba757842e27e4afc8bf96ea36fe18c"],["/How-to-learn-design-patterns/index.html","e8776b20ac4e5aaa7420773a34edddd0"],["/How-to-learn-design-patterns？/index.html","fd18976ad651da742201e4b06b7204b9"],["/How-to-teach-yourself-programming/index.html","56615d4f926e37a01310389e0f6781f6"],["/How2learn-Python？/index.html","ad677d298f1cebd21a271bcebed6c772"],["/IDEA-shortcut-key/index.html","6e95449c939de8dbc792cc030bd4bf73"],["/IT-interview-basic/index.html","6c6b76d44e542a209a9a3126ba9f42e9"],["/ITK-VS-install/index.html","5953307b4696fbf10002348726017251"],["/ITK-VTK-ItkVtkGlue/index.html","212777fbc0632be04364879c29ae78f2"],["/Image-processing-plus-noise/index.html","8b62bb708ea3ce2b1d4d150f79f3a22c"],["/Inception-Going-Deeper-with-Convolution/index.html","2a9cfd229813ff825e6a704e14a361a3"],["/Information-Cocoon/index.html","173f522822a274734849d799cca4565c"],["/Java-GC/index.html","b10c61df5eaba3fc0f3952bb2847b446"],["/Java-Servlet/index.html","fef83c315d340e7e78284051d9477798"],["/Java-array-and-collection-sorting/index.html","12da2fe383a8d919833e23b31f15ace2"],["/Java-development-tools/index.html","32739a0b730b09ac337c48c0c062326c"],["/Java-eight-data-types/index.html","be555858143a60c1ffb06ae67ecc6a7c"],["/Java-interview01/index.html","7810097e66269c4f0c1606bd475b8220"],["/Java-interview02/index.html","6097dc28f4867e49ad3d79e56dc2e8ae"],["/Java-interview03/index.html","12c7315d8c6feb59dd1107e6c025e2b3"],["/Java-learing-map/index.html","ea5550271841e95ab9cf32f03bce0b38"],["/Java-learning-route-map/index.html","52a972a67e4cb28d303dd4dd504aede7"],["/Java-memory-area/index.html","d0684bc04ac27b8b37585a39ae821077"],["/Java-memory-model/index.html","1d2a5d34163cdebc8132a0bc7f76470a"],["/Java-multithreaded-learning/index.html","c26d1a4866930ddd940fd7f6d9f71fa7"],["/Java-project/index.html","16ca91a8c02120fe97f450039b0247ea"],["/JavaWeb-Chinese-Garbled/index.html","2b515c6046970490dd45d40eed17cf24"],["/Java还是C++？/index.html","251aeb5c3703e506c4b33c1094ebc918"],["/Kaggle5-step-guide/index.html","5440d82e4f31ae49706d5d264e415284"],["/Knowledge-points-of-Java-garbage-collection/index.html","aadeeba111bb09d586de264f0641532f"],["/LLM-DP-TP-EP/index.html","e457928f1e24f97e9b71b3dbf3c9d0ae"],["/Layoffs-Hiring/index.html","80df8b6a6e0fc4b16239f2352ca365b8"],["/Layoffs-and-Hiring/index.html","33d9b15ccdc458dc9ca59d1bdc16be2a"],["/Linear-regression-of-machine-learning/index.html","5927c47168d39744cde1c6be322379f2"],["/Linux-Compile-C/index.html","b8f8363b02fbcb08b1deaf90ceaf8b44"],["/Linux-ITK/index.html","4284f21c5342a773917b94fb033c8e43"],["/Liver-segmentation-of-sparse-components/index.html","3e27ad7fdbe667f4facb63fb73923cad"],["/ML-EBook-paper/index.html","e747f6d9f4d4c29d98e660b93d7128f8"],["/Map-uses-multiple-maps/index.html","69d9a82ec635db843a52505dc19520d7"],["/Marching-Cubes/index.html","1be8e10cd4f8fa3370d340075b36709f"],["/Matlab-Graph-cut/index.html","da455a27a242cff9f648c97589d5020d"],["/Maximum-Likelihood-to-EM-algorithm/index.html","60977bd50cbf6b7ea5af0c031076cad0"],["/Mean filter and median filter denoising/index.html","1eec4c9edf897e3ac5852541fe090de0"],["/Medical-Data-for-Machine-Learning/index.html","08bb1233922680916c054b27350e07e9"],["/Medical-image-analysis-deep-learning/index.html","3190259cf8a126c9e6bdc2694d7fde46"],["/Medical-scan-image-processing/index.html","4f125263e5e73b4a3480b60875f80a8c"],["/Merge-sort-algorithm/index.html","8888422be4c9bf2c84a68eec00ba317d"],["/Monthly-income-2W/index.html","506069a7aca620201cbc2c8e42d2a9af"],["/Mysql-database/index.html","bc618dc26c1b7d23fe422bc47cae6d2d"],["/Neighbor-Embedding/index.html","ac820ff824b8eba94493d32e2cfcf8ef"],["/Neighborhood-approximate-random-forest/index.html","6f50da9f1a230958fb7779416042d3d9"],["/Net-and-official-documents/index.html","c916915830697a9d78af35e36ffd3282"],["/Netflix-VPN/index.html","39f3850d022e128fc0513bc54e65075d"],["/Network-principle/index.html","a2f67235c010be4072c2d3e9e85cb753"],["/New-Hong-Kong-stocks/index.html","fcad6b87d583789863416691beea8cda"],["/Nice-to-meet-you/index.html","405944df7ac5ba1d911d95df5a1a7c72"],["/OS-processes-threads/index.html","1bdc9efebc37663e7d1a6c6d98e16d5c"],["/OS-run-environment/index.html","fde190664fb706f818b82f2320231980"],["/Open-Internet/index.html","9398e140f53f6f494c6f0c6766188cae"],["/Open-Internet2/index.html","c659a90a1cae498ed5fa640d4e582934"],["/Open-source-community-and-rewriting-website/index.html","a000cf6254ba05489bc282d6ec8ea000"],["/Panoramic-image-stitching-based-on-SIFT-features/index.html","caa149991e2dd29620ac2c86d6ab6b03"],["/Parzen-and-KNE/index.html","ee913d6984e5bdb5493a62a779d47f3b"],["/Personal-technology-blog-site/index.html","ff873e51cbe950686f95c3b36c882ab0"],["/PicGo-Gitee/index.html","ed8f356ba0e8390693a22d1f9f2483a7"],["/Programmer-treasure-chest/index.html","78dfe85f17bb9aecbc071cab5a957862"],["/Prototype-mode/index.html","e72f2f4ac872bbe68a2cc2a83b64ec91"],["/Python-base/index.html","3c43fdb7d9408a3b7ecff177a6cc3434"],["/Python-crawler/index.html","0c9a99c7120507d51221a0e4c5bce3a5"],["/Resume-revision-suggestions/index.html","17c172d14877f136b6393ac8689c7c50"],["/SEO01/index.html","e15b9df1280a749d83934cdc38f89fc8"],["/SEO02/index.html","c6a7425c0a0a0b4699e8148f9694fbe2"],["/SPHARMPDM-MEPP/index.html","0cf1d40152b6614910108d5aeb458185"],["/SVM/index.html","c44a402853fcb2e062621f617b43e0fd"],["/Seata/index.html","3191e88323ae86a2e733d8ca79665402"],["/Semi-supervised-learning/index.html","011461ab75f77f55e37adc5b1dbf6693"],["/Sequential-model/index.html","761d3e02fc7e40b0e81cecead590fc90"],["/Shape-Based-Human-Detection-and-Segmentation-via-Hierarchical-Part-TemplateMatching/index.html","9e7440ab202c6b9991844d6102e6faef"],["/Spring-basics/index.html","ff8c1d8d6b8fba882164e75282798379"],["/Spring-integrates-hibernate-Struts/index.html","f35232b0e3ac1d710bac7644df5aff7f"],["/Structure-learning/index.html","bbd772bdf6687c06bb87cd5a87730e02"],["/Suggestions-for-self-study-of-computers/index.html","4dc4b1fd046b9c33b3b65c7aaae86a76"],["/Summaryof-HongKongStock-Account-Opening-Links/index.html","029365d65b84126e3323db7afdfb5fcd"],["/TCPIP-detailed/index.html","1e7c07e45fb4eb948c61793e943565f6"],["/Telegram-VPN/index.html","9cd823895dc0c51ed9cdc7360907a165"],["/Telegram/index.html","6556ee74ce289eb5a4d4270643790d81"],["/The-essence-of-shopping-festival/index.html","bc8dbb887fa447448eb9f6b91dd7cf70"],["/The-most-important-investment-in-life/index.html","7c839bf7608de59e5dbe4ee0ff2b7f63"],["/The-most-successful-nvestment/index.html","669c12205069de14120b8a1cfdc46488"],["/Transfer-Learning/index.html","82329ccdf78632e32f0b17f8e0e01f51"],["/Transfer-to-computer-major/index.html","7d0c6a8e8eeecc746c5cfbbed1a08064"],["/UNet-Convolutional-Networks-for-Biomedical-Image-Segmentation/index.html","ed153f05f6551ec4f58add42a34952d9"],["/Ubuntu-install-sougou/index.html","5e30506c3ce80ceb5c46af786a079bbb"],["/Understanding-of-paying-for-knowledge/index.html","9bb5a765b19e1729547792abf0c31926"],["/Unsupervised-Learning-Linear-Dimension-Reduction/index.html","65723ced80e1607d3f5f4006542aa572"],["/VPN-HELP/index.html","83e873ddd2a215e19869f1d322931dda"],["/VPN2025/index.html","c81d92d43fe409f3ba9a9c39866b6651"],["/VPN2026/index.html","6b2f9e4acded23ff560df9c93ffd1319"],["/VPN202607/index.html","f34dfdf9922776fd57e898ee67ae62e9"],["/VTK01/index.html","8134381c20d35ee2053ade8eedeb6fcd"],["/VTK02/index.html","2b2709b110cde7944403a4b3a168c735"],["/VTK03/index.html","85cd6233f16812b1d94bf6698545a411"],["/VTKRead-write/index.html","e5c6d3292df8cba90fcaf90b0e6ec8a1"],["/Vertx-Java/index.html","13c74989c72e07cb255412b2647675f0"],["/Vpn-OpenInternet/index.html","2170957ca020aea4a1922ae717467bb5"],["/We-are-all-good-kids/index.html","13ed48de69b1e38b705f503cd1bbb990"],["/WeChat-80/index.html","35a4132935bf996ff8f752404c98a977"],["/WeChat-red-envelope-cover/index.html","bd50c4f4283f6592bf2a4260d7508fa0"],["/What-is-crawler/index.html","af37c0e2f028c43fb98d4e54345b43ea"],["/Win-Internet/index.html","c34d0f0bb51dbb229ee7af1edc3906de"],["/Win-Open-Internet/index.html","f0a22b5e9479901f8ef2214d6528ab80"],["/Win-OpenInternet/index.html","9c25788fa7e0ae526587d1047c6a0762"],["/Windows-Android-Apple/index.html","3d8fc9140db5c2e18a233197d745037e"],["/Windows11-2kfans/index.html","af8da7232b89ffdd3c669c609acc1517"],["/Word-Embedding/index.html","8589a1e13b956e68b36d7283e98efae0"],["/YuanShikai-and-his-Beiyang/index.html","18d33f1ae1bbca3a0ee78080c215d9fc"],["/Zero-copy/index.html","cec2f64f8786706a1134a6b37cfbd7cd"],["/about-keras-model/index.html","286cae627f6eec8d092251746b808ea9"],["/about/index.html","e914dbb7662e99e9e527172d3a768ae9"],["/accounts-google/index.html","f14a6fc3295c75c4440b33250ef316f7"],["/ai-model-security/index.html","ec3ae07c8fa0dc7bd8db02756a302810"],["/ai-tools-guide/index.html","d201b6ce64dc30146bd729bd3bab2bf4"],["/algorithm/index.html","7ae562c8ea18881f626bb71f024957d5"],["/alibaba-Java/index.html","cfeb51eec7342f86084c93583335419d"],["/archived/index.html","9eadd16e56cb1e396353b8bcb6e1633e"],["/archives/2020/01/index.html","91f8341e0e6d94c1dac1b7765756aa7c"],["/archives/2020/09/index.html","e9ca176b498fee6c6afd10194fde6346"],["/archives/2020/10/index.html","285ab554e7e94e46cadf61339d315082"],["/archives/2020/11/index.html","3a94b53aa0a9e1f8c93ecaf8e1a87d54"],["/archives/2020/12/index.html","99b0d09cd7972d9f38da86556651b548"],["/archives/2020/12/page/2/index.html","32f8aa5adbfb783ce8c81d18088d1b29"],["/archives/2020/index.html","1b7c15cb61fb133b1f9fd1ad7b9147a2"],["/archives/2020/page/2/index.html","84b5c90b0398be6f7e6732b3a9ab84f7"],["/archives/2020/page/3/index.html","d3787a480746fcc65f28c35b0aba2870"],["/archives/2021/01/index.html","18160f46b5926c28d2590affc855d142"],["/archives/2021/02/index.html","a36d146bf3ca448df55cbda4a05d5017"],["/archives/2021/03/index.html","cb8e3b4a3b8b7ef498233edfdc256411"],["/archives/2021/04/index.html","0e9df61b1f03d2e0e6ce0a2adeea76e9"],["/archives/2021/05/index.html","c1d7936facd3e199adc94626befc58e6"],["/archives/2021/06/index.html","b05d66efdf4687e13e663562dd417bc8"],["/archives/2021/07/index.html","68088e56d5b385c01b87005971a6bf37"],["/archives/2021/08/index.html","6f0877a2a9bfc5c9c26ab4d68c1a07b2"],["/archives/2021/09/index.html","44ad52b51148c6f9f91a8db4b3029285"],["/archives/2021/10/index.html","65de283d5d4fba88c41648f32b19deb0"],["/archives/2021/11/index.html","7bdbb75b0ba5207c318a7146da487a13"],["/archives/2021/12/index.html","186a8786004b4fd9ae691d5294013344"],["/archives/2021/index.html","613647341d54fd8f1967c7f8b5f5ba89"],["/archives/2021/page/2/index.html","08a874b188948868e13a2e285746f117"],["/archives/2022/01/index.html","81612b22fa56870826452f58832122b2"],["/archives/2022/02/index.html","5cb8f0867c68560dfc91add827f24888"],["/archives/2022/04/index.html","b0b2372a11322a62ca704a48129974ea"],["/archives/2022/05/index.html","8353f8c170a068cf355d62a1ad8772b4"],["/archives/2022/12/index.html","12cf8ce8832b69d2be9372242e8dabb9"],["/archives/2022/index.html","438927d866c0fe7f4ed037164692d838"],["/archives/2023/01/index.html","0dee7616f06e690698d62e8f1c76a6e2"],["/archives/2023/02/index.html","73648a551688cdee8db5ee0f5c282423"],["/archives/2023/03/index.html","8160ea914ebebf2f01ff15f8dcd83a39"],["/archives/2023/04/index.html","2b1ce7d56c57620b57b7f778a1cb6d73"],["/archives/2023/06/index.html","1c368e7d8f4f37f3462ea4b37d6d52b9"],["/archives/2023/08/index.html","5712ce01321a4cf38ef8855d4331194e"],["/archives/2023/10/index.html","cd680bbf55b5d4a2cda35a0e3609ba4a"],["/archives/2023/index.html","07cbf3afd459844d7623da16a4135ce8"],["/archives/2024/01/index.html","f4176762cc6f2dd2ecb6af6eeea11875"],["/archives/2024/02/index.html","d2954d0d6cb0f80cc5553d3cd67bdc63"],["/archives/2024/index.html","5e8882a7d0b32f750d308323e390b8f0"],["/archives/2025/06/index.html","1886a73a15fc15d3c8f7e1070e2fc48e"],["/archives/2025/07/index.html","f74a63a0b4acee74a700f8b831e2e575"],["/archives/2025/08/index.html","33e28f19e698baef6345edf7de4fb6b3"],["/archives/2025/09/index.html","42e8bd00e2527ab3efeb5c75102e98b1"],["/archives/2025/10/index.html","e2df715c0f6dd3c37164dfe79c34b4fb"],["/archives/2025/11/index.html","f8b21a733f8dfdc81fe6bba656693f7f"],["/archives/2025/12/index.html","b5d6be1b3089dbbd5c85d59f8179d427"],["/archives/2025/index.html","f6d537b1c5fded6449135bc9320c9fc7"],["/archives/2026/01/index.html","3dc169255b7d521b1d6c51f048bdd2f1"],["/archives/2026/02/index.html","479cf78f339e1ddfd0b7fb6a3bb82008"],["/archives/2026/03/index.html","a87c5eb4a862e4e92974cd267c0a150e"],["/archives/2026/04/index.html","afeeffc2eae67171207cf3df67145f7e"],["/archives/2026/05/index.html","2c67c960232170ac4c7fbd29d567a23d"],["/archives/2026/06/index.html","a0a6833f37c7c1db940c5c382db650ba"],["/archives/2026/07/index.html","7303ad9b844a39fa5661102091dd3e6b"],["/archives/2026/08/index.html","14a385bbcd7731adf51a0f15b5f13e5d"],["/archives/2026/index.html","560ccc7cdf861edb11998e870088102c"],["/archives/2028/02/index.html","e2bc9d5ec39f1f61faa2870cadb3a988"],["/archives/2028/index.html","ffcec555e89fedeef8cd4871a45373cc"],["/archives/index.html","d542cba4c6af14a9122f2ed5a876df53"],["/archives/page/2/index.html","04173a07a82e5c75d1d831f0ce8364ac"],["/archives/page/3/index.html","f4499db7a53a059b9a92473fd8635ee8"],["/archives/page/4/index.html","2c706132c53a62d24e8b30e6963c60c6"],["/archives/page/5/index.html","e986b7ad51c3a432aa1e2243f8930780"],["/archives/page/6/index.html","e52a4fd2c595758a71d9e6877b32830e"],["/archives/page/7/index.html","0beaf6a8e98759002091d07b003e3da0"],["/baidu-search/index.html","f0580242cf34c6d2599013024fd4406f"],["/baidu_verify_code-Hh2fKNlEB1.html","ddb809d53731921d6705837a6eb7eabc"],["/be-a-programmer-instead-of-a-code-farmer/index.html","e913f01decf934e3ff88168cd695ee04"],["/best-vpn/index.html","caad7dde6325d53559a02c1a11c137c4"],["/best-vps/index.html","1c0ee7267c496a5578aa85c2480c0c1a"],["/bought-a-house/index.html","ba4eeae0030a5a2b7c7ddd0d9b9185d3"],["/categories/AI大模型/index.html","bacd6f68a35e64b7238c6c5598990b53"],["/categories/C与C✙✙/index.html","047a7a2a256f605755d5bf52b9022e20"],["/categories/Go语言/index.html","b69615810b091967aad9169b76d5f72b"],["/categories/ITK与VTK/index.html","fd9b433b9d7d1320500d367de69270f8"],["/categories/Java/index.html","18af9e49495d8c7f23c980b7dc6641d5"],["/categories/Linux/index.html","936e45b442154c05d56b9bdd5b38074a"],["/categories/PLC/index.html","fa99d1a8b67cdcf0703700ea601366f3"],["/categories/Python/index.html","61463f133a387758373c41d20664c946"],["/categories/SEO教程/index.html","2b1793b57fcffc9d3ebb2b41899e2952"],["/categories/index.html","5f676f208ab9c7f2bf7726d1fe9d2431"],["/categories/图像处理与机器学习/index.html","f9e5a2a40f0daffc360cc16008dda0da"],["/categories/工具/index.html","9c6d13c8301dfb3070c745894276ba7c"],["/categories/技术以外/index.html","4ed520f990fdc27c08c9f4d2a5802878"],["/categories/技术以外/page/2/index.html","490598c45299a6c4a5f3c0d63e6f04ff"],["/categories/数据结构与算法/index.html","0f685f9fbe1228b9e4dbe933dc5f43b5"],["/categories/科学上网/index.html","5cd6178ebb41cdc56b870665ca0436d3"],["/categories/编程经验/index.html","92020deccf5fbd0192904a153c58c55d"],["/categories/编程资料/index.html","dc4eb0dd529ef97271e318fae2048065"],["/categories/计算机基础知识/index.html","aa64dc8057da996dac6b51ad25844bfa"],["/categories/设计模式/index.html","c32f0a3412c4ffbc8b408657a9ab12b5"],["/choose/index.html","31e0d670d42e2dc2b671930903da018e"],["/choose2/index.html","718d81b8c6ae25b66230a07a8b2174e3"],["/chrome-crx-intruduce/index.html","f15e2f269a229b4e0b44395bf271eff3"],["/clash-custom-rules/index.html","e56df8dee5f5437fc1bfd1055f597df7"],["/clash-free/index.html","5385eb2e2c2948ea2579d6acd645bcee"],["/clash-guide/index.html","285d9935a7dee8aa1187475a45a06f23"],["/clash-pro/index.html","2537273ec1d461f8c19faf5468ddef17"],["/clash-tun-mode/index.html","a35c326ba00389e2456d15e9ac5b2ef2"],["/clash-verge/index.html","ee39dade912de8fce2600e0f89c00353"],["/clashvpn/index.html","246e4e8e662e2da3bd749de9dbbbca80"],["/claude-code/index.html","d1c14e678de0279069c1ca46a632080a"],["/coder-blog-website/index.html","96f24de082621f32f5cfaf5d2510e6f2"],["/coder-source/index.html","3e6abf8ed55813ad8c10caa774b113be"],["/coder-videos-website/index.html","f07bce9668ec0db46cc45c2c67e9b4f5"],["/computer-book/index.html","112288cf7d7df4e539c2d61f59e9e927"],["/computer-censorship/index.html","97800742cdc1696ef4023ce6a4f391ad"],["/computer-network01/index.html","e6d55f753c022319bab191b53dd1d56f"],["/computer-network02/index.html","9f5578ad7f855284e119e0a83012f08e"],["/css/main.css","bc32ad34ec4990d934c3c647bdb62f79"],["/database-Mysql/index.html","8803d6d8b2af0e6240dbe2a1f0d0e447"],["/eclipse-lombok/index.html","97e0c67ed60b8ca4cdfd9f45c141ee97"],["/freego/index.html","eb540eee7d993a3b2836b8444bfbcd4f"],["/fully-convolutional-networks-for-semantic-segmentation/index.html","39c2525a15d7c52f75b0115d64da14a2"],["/great-firewall/index.html","59233bc4f7080653fd304008ceb1dbf5"],["/halfrost/index.html","bed9c496981bc098c00fe5b824db0104"],["/hermes-agent-model-config/index.html","b5cb66466cf601419ada53dac046f6e5"],["/how-to-signup-chatgpt/index.html","a381114ec5be631601363c80d80646d1"],["/how-to-use-Gemini/index.html","f0f8ef14fd9610a3702a9f20ce8f8100"],["/idea-continue/index.html","7f7047b4996023bf88e2199c334a2557"],["/images/banners/A_modern_tech_illustration_for_2026-08-04T13-39-17.png","26724e93cce260b8e7c01db2c09e511e"],["/images/banners/A_modern_tech_illustration_for_2026-08-04T14-22-31.png","273b7bafe8ddcf9f92273a1589d5a574"],["/images/banners/clash-custom-rules-banner.png","7a8c1431814e45c976dfa09345139869"],["/images/banners/science-internet-guide-banner.png","6a9cc99b131a112e949fa73fb0f2a248"],["/index.html","a2072809c48d206c928868540026a200"],["/internet-dir/index.html","bbe01c1c31317f9453a84b6629332599"],["/ios-open-internet/index.html","24183a12005a2f19a78b209bd7c0efc5"],["/iphone-open-internet/index.html","ff7a26ea89c99153cf8ec829663a5708"],["/itext-makes-pdf-form/index.html","549d4db44924e99795b6c7c5bf8a0a82"],["/java-Set-Map/index.html","b7f754b8ae78621338ec4972c42e19d4"],["/javaweb-server-error-codes/index.html","3037f6fbcd9877a01e9a104befef5866"],["/javaweb-source-code/index.html","ba2672d757b74fc7b3ebeabb4014c633"],["/js/lib/busuanzi.min.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/js/lib/lozad.min.js","47904d34a224931dd1b615c59a3dbe3b"],["/js/lib/prism/prism-coy.min.css","0ccad54d95845901ead59bfd3ecceb14"],["/js/lib/prism/prism-dark.min.css","a4711d2957d6605eb5682bdd228cf123"],["/js/lib/prism/prism-funky.min.css","efedcdccd7a9ab342d2d9cacd24920af"],["/js/lib/prism/prism-line-numbers.min.css","38e22e790c279bb56f9ec4b90a2a2d58"],["/js/lib/prism/prism-okaidia.min.css","5ac6f9de996fbec68aaa106dfb16e061"],["/js/lib/prism/prism-solarizedlight.min.css","ecc7e64d039873ffcf7fb27babdaeb5a"],["/js/lib/prism/prism-tomorrow.min.css","456af2a14ae4f5089939d5904ac40fe8"],["/js/lib/prism/prism-twilight.min.css","ebb5c355332a8cf9a1ce37a2a69d678f"],["/js/lib/prism/prism.min.css","a5234d614834658887cec6a9515890f8"],["/js/main.js","052d2b299d9c750afea8df0b802ab7c1"],["/keras+TensorBoard/index.html","9b526b85951fe5552f88a0007594ab66"],["/keras-beginner-guide/index.html","2288a53799cade155e0bc7fa5f9e144c"],["/kimiclaw/index.html","ed7ccfe5a2e173e6fa30348950287c3e"],["/kmp-algorithms/index.html","780bdc27f86dac1e9e00f952fcc36046"],["/leetcode-Java/index.html","0e964cb64229c954bff53a7fcac45dba"],["/links/index.html","34989c0aeb109d5513b8947e7420f99d"],["/linux-java-opencv/index.html","16ded30e33bf0bdba4cb02c99e90348d"],["/magic-internet/index.html","31917fbb64e3b046ea512d7a694859db"],["/magic-vpn/index.html","f98edfac41aa89af2bf57a9becb30e6c"],["/mihomo-clash-difference/index.html","dde8a57e462fb64a58358f8c3d8f5e6e"],["/mingci/index.html","07de219290c35a7b8e5d7e3c90871679"],["/mobile-vpn/index.html","caed61d78aa8941c7908e2803ee15c55"],["/msb-source/index.html","14c30cba627b9e16953aca5d7feeb053"],["/online-BUG！/index.html","e245eb21c52b4d03d9e6cb03cdcf37c8"],["/open-app/index.html","090e8bd9bd0b4cdd75cccac3b922af89"],["/openclaw/index.html","39c6f79c70219b9c3971c9aebf31ffb1"],["/openinternet/index.html","0d18c36b019b66587fda6e5476263e59"],["/page/2/index.html","eb3830329a2b3891b4d240e46b2a2769"],["/page/3/index.html","5ed7d61ec97a540230150af4c2464ae4"],["/page/4/index.html","40263d0e2fd6d03772e44e5fa39b099f"],["/page/5/index.html","56afcb6225e007fb7c9957e0c6dc77dd"],["/page/6/index.html","bc9b658278594e232ed3cc634f47fb26"],["/page/7/index.html","9d2625737a5cbd756b7b9235bda2e81b"],["/pandas-data-preprocessing/index.html","0acb1057f16bded87cf6fb659c32c5e0"],["/phone-win-open-Internet/index.html","4c6c18f546d54286c872d2b5af4d0f7f"],["/popcorn/index.html","93c1e6cdd581d7fe1fd64a0190e56188"],["/protocol-cheatsheet/index.html","53926d542bcfe87abcf866862ec03a84"],["/protocols/index.html","ffee9ad7128f7a14923c053279f95e66"],["/python-Blog/index.html","782209201ce031b2e2cfc5608071c0ec"],["/python-yeild/index.html","a7f41e9a4e6e599340e8738f1a00d81b"],["/python爬虫教程/index.html","b83e06b3cd21e9befc95f796d246edec"],["/rmux-agent/index.html","4d0e178c953982b4b2033ee2d77bf347"],["/route/index.html","45d25f641090c51e683503d230485b5b"],["/science-internet-guide/index.html","f7a8d1c600694d1a8705f910c98697c2"],["/search-help/index.html","28133871ef8b6dcb740bf5113b173f42"],["/software-copyright/index.html","1639da31190ee04c7b19a49667ec45aa"],["/sw-register.js","fd24ab3c94496280de55f3f22537a70b"],["/tags/AI-Agent/index.html","5cc8d670adbcf970e75ca5f79430a03b"],["/tags/AI-PPT/index.html","bca72e3426695415474359f1791e13bb"],["/tags/AI/index.html","627fae5563a6bafaf9c2cb63382d6920"],["/tags/AI写作/index.html","c1711070ebee7d06dc230778fe99c9a1"],["/tags/AI安全/index.html","9a1cd727cc8677e57575a27debe07b08"],["/tags/AI工具/index.html","af133b107ade8186a1685a3891ded582"],["/tags/API/index.html","e23e8a71cbeb308fdac994a1167f84ff"],["/tags/C-图书/index.html","c8b431c0aaebd0fec3fe43d800659f8e"],["/tags/C/index.html","823fe1ed2b681633802a6c8966f8fee0"],["/tags/CNN/index.html","9b5010964e8789cacc5aff447dc83d7b"],["/tags/ChatGPT/index.html","f56cd6fdc86a5f6a94104b8363580e62"],["/tags/Chrome/index.html","1aae96e5f82e14cbb88730b393360287"],["/tags/Clash-Meta/index.html","57d0ca611f0c02192d18177ffc1e3341"],["/tags/Clash-Verge/index.html","b39b264371c201cff5d4cd663705cc60"],["/tags/Clash/index.html","b9324f737d81e936c4ff28bb19bac7bf"],["/tags/Clash教程/index.html","0118f2c0aceba2a653a0ba55121b0e2e"],["/tags/Clash机场/index.html","ded55eab67d607b042536181035f382e"],["/tags/Clash订阅/index.html","902401328339a2f066d505f08779d332"],["/tags/Clash配置/index.html","201ed771912350badce8a4417fe65293"],["/tags/C✙✙/index.html","694126f17502d43c893778e7cc57dbca"],["/tags/C语言/index.html","5b459ea5af834e0e319c26e0e7c99725"],["/tags/C语言图书/index.html","7990c5141ac619377a3129129ba09d86"],["/tags/DSN/index.html","d2fd371b4022b441c0aff015c4be8465"],["/tags/DeepSeek/index.html","c32b66cd32740b1930c8ccd2719feaa9"],["/tags/Dll/index.html","e6515f0de60bd4f812ccccc515f71247"],["/tags/ECCV/index.html","f311c1f4ff8e322bea8fc14d7e8efa47"],["/tags/EM算法/index.html","960971c1a0e4f3afa6a6f5f978e61450"],["/tags/Eolink/index.html","fe624ac8f795e683f0dd6ed17eb102be"],["/tags/Gemini/index.html","5aecd307e8213ef8a2f780391e9defa5"],["/tags/Gitee/index.html","1262f2c5cfe2ae6bc6a854f27b66e741"],["/tags/Google/index.html","203dd4d34549c1c3247388955b1003a6"],["/tags/Go语言/index.html","8b4e25ace4efb98565eba5de76319628"],["/tags/Graph/index.html","f8128e200beed79a8dd022fc87510a62"],["/tags/HTTPS/index.html","605b882081723a8c1fa2dd8a5cddfb78"],["/tags/Hermes-Agent/index.html","07986546d02ab21c1232c3e9c95174ff"],["/tags/ITK/index.html","d8856c3cea598f96b6eef445476e76cd"],["/tags/ItkVtkGlue/index.html","645b1cc737ae803e94fe819e73662ead"],["/tags/JMM/index.html","ca603b9997175c3530f07dccb081e19c"],["/tags/JVM/index.html","f0925e020a64d952ef507f31e74f6559"],["/tags/Java/index.html","b07415b94114fce940d33ceb8d728a66"],["/tags/Java图书/index.html","5b84d8697ddc5682255d40e6e913a685"],["/tags/Kaggle/index.html","718196f67f8f079ae6a88d7990410faf"],["/tags/Keras/index.html","8f4847329c424d6006ddb982f28369c8"],["/tags/Kimi/index.html","f4af9f9cc6730793076bdca79d23b165"],["/tags/Linux/index.html","8f7626710d59d0f8511260c4a291fa26"],["/tags/Linux图书/index.html","ee18872a5ecc10201b8fe63a2e381ffe"],["/tags/MEPP/index.html","57b5c78130ee0da455ea0968720aebf7"],["/tags/Map/index.html","da5b8d3db7ecafeced171f5a54880d76"],["/tags/Matlab/index.html","ea99f77f88d5ecd63007fb12088d306d"],["/tags/Mihomo/index.html","e99d5be8d54571297427109d4aa443e6"],["/tags/Mihomo客户端/index.html","5fc3ab210d3ef3330a5cddb098aa1b47"],["/tags/MongoDB/index.html","98db4992cdfde76f97c7523dc986f9a9"],["/tags/MySQL/index.html","b70d056cc8fa38b6c747eeca9ef35494"],["/tags/OpenClaw/index.html","04e97695552299096fe4d9de7a5e305e"],["/tags/OpenRouter/index.html","dcecc70d07d6620f51bf65a38d357cb9"],["/tags/Parzen窗/index.html","4c69a096314c74a52f8faa4c52fdf35c"],["/tags/PicGo/index.html","20e71fd72045aa1c39b122d0ac4f09cf"],["/tags/Python/index.html","d116daf62fef44a9079a6c8015cf019a"],["/tags/Python图书/index.html","87b667617ba1c1d947d116e54028001c"],["/tags/SPHARM-PDM/index.html","19e9ef4c815001f821a53a2a9561a99f"],["/tags/SVM/index.html","23920c5c4ca4cf6a7905590311600e4f"],["/tags/Seata/index.html","f2dc5c42c746b15e5c91d6611acb9d56"],["/tags/Servlet/index.html","d49f11887a02dac3a78d2a532a75f14c"],["/tags/Sping/index.html","4c5c198a996ffb6bfe20568b7070c34d"],["/tags/Struts/index.html","31bd29d74866f13f3668f72ca77206e2"],["/tags/TCP-IP/index.html","7a0f4c0baf503ddacb2b4662ed349050"],["/tags/TUN模式/index.html","d422b5ffcb2254f6b475a624c4af6605"],["/tags/Ubuntu/index.html","2063ae7b4b5d2e8d78065e92c26cb305"],["/tags/Unet/index.html","64cdbe1d7ba91c8367f7e85ba46015a2"],["/tags/V2Ray/index.html","abcfe0ef8eec13ad81433418459a1818"],["/tags/VPN/index.html","540aa53385d84b428f97a57783f52d25"],["/tags/VPS/index.html","a9b743d3d5762f87a579d4e24e396f66"],["/tags/VS/index.html","9ea904e1f674d9d364e85f54e946fa18"],["/tags/VTK/index.html","305da074be026093a15c0b923f702599"],["/tags/Vertx/index.html","5299448833cbe69c9aa3bd8820bc333c"],["/tags/Windows/index.html","b58801150adf23144413f1ef52987f05"],["/tags/Windows翻墙/index.html","e66076c650e1be79f2c28b12ccc0d286"],["/tags/claude/index.html","21553042fba28151d0639be3c6fe1163"],["/tags/config-yaml/index.html","c368c40975c3d79b3acbf5e08c8b20ce"],["/tags/edit/index.html","88c02947e15cc0a3d4a7e6f03b61d9ef"],["/tags/geosite/index.html","7cb5cabf481738e2d9611a250a5cd004"],["/tags/hibernate/index.html","8c04b6c4b74b644497ece5ec4dc43eeb"],["/tags/iPhone翻墙/index.html","5d6e10a1f3d83db6e94dc7f63b70d937"],["/tags/index.html","4ecf1baa3076097a84a9bc36e9abd8ca"],["/tags/itext/index.html","eaca82117f2e5d9e3a483d39c84c0e86"],["/tags/jdk/index.html","aa6d8287e867def24a16c1747343771e"],["/tags/kmp/index.html","41822e7cc56f5b02e07f0d6dd9b2fe82"],["/tags/k最近邻估计/index.html","38114e0675f614d1345f53fab988d53a"],["/tags/lombok/index.html","aae1673c589eef207a6267f39207af79"],["/tags/macOS翻墙/index.html","51e0be07dd15e1106bec5ffa802f7b93"],["/tags/offer/index.html","8becc14334c0b6f89abcb9df4e0e5377"],["/tags/opencv/index.html","7f43fc7014d56984c0d377fb83d24eeb"],["/tags/pandas/index.html","d6cbb9ec8933704350998a18b63321da"],["/tags/rule-provider/index.html","a2cbd076d85de910f3c3cb4318001a64"],["/tags/rule-set/index.html","885115771f3d9ece1c08f20f9e147663"],["/tags/rumx/index.html","e67831802a76f2cef71bed24293d3f6d"],["/tags/string/index.html","3cf73b567d6ab9fdd606f662c0589c72"],["/tags/vim/index.html","069d56fd52a681a2cc7133f144b4d348"],["/tags/vtkPolyData/index.html","25f4f19e5dd43cc836a68d50a1477e11"],["/tags/web/index.html","df8c8698a5527a8161dd5c793c12e96c"],["/tags/xshell/index.html","77f7928ba5966661e8e2371d3d7f2088"],["/tags/yeild/index.html","1fb2444fd436417d6795d2ad0fbfc721"],["/tags/互联网/index.html","4a0df2c4ae4dde0243832bc0535c073b"],["/tags/人工智能/index.html","d8599c9c718db712531ee81f705cbf14"],["/tags/代理/index.html","04a265b05a4df93cfa8320a7dd21fc28"],["/tags/代理协议/index.html","5d19ab24c8b88112e4183d26af49a952"],["/tags/代理客户端/index.html","fcf04b27d9903183fa614e2de7e65d0b"],["/tags/体绘制/index.html","5d362024faf78a9ccc42226db4397518"],["/tags/全卷积网络/index.html","0bdd627f4d533ed3f7352b40ae891485"],["/tags/公众号/index.html","c1d50118e4252a71453394baa8d57300"],["/tags/内存模型/index.html","3081bc04a65e1b05bf43df7b1e820a3d"],["/tags/内推/index.html","cd6c72dd3940edfe2685123e1dff2290"],["/tags/内核/index.html","c84b615a882eac72e3adcd2ade10ef50"],["/tags/函数/index.html","8739034779760a343c98e228879c07bf"],["/tags/分布式/index.html","c16625706ff2678713a15d225296c695"],["/tags/分流/index.html","29ec7780c626e063e406fbdbe0586ac2"],["/tags/加密/index.html","a49a727f4dc8966c73d1526f9358875b"],["/tags/医疗图像/index.html","5d7d6cc342312a76313b458cfbce8181"],["/tags/协议对比/index.html","d29731b95acabee88cc97037173dde45"],["/tags/博客/index.html","b8128353802ca10473377a7fc2515a9b"],["/tags/图像数据/index.html","10de0a69a8f4f664b2246964cfe6e3f3"],["/tags/图谱分割/index.html","17af0b35292d3844757a517bbe2944e6"],["/tags/垃圾回收/index.html","97304860f5680947228e90c4d8621b85"],["/tags/多线程/index.html","857682ef504437ed595a168dc9ecf010"],["/tags/大模型/index.html","cc5cf0769ef0700c5b138bdb67054068"],["/tags/字符串/index.html","37116e0abd37900a56870661d4a8b967"],["/tags/安卓翻墙/index.html","a6c2e966bdc3a52000b186a89cb6982d"],["/tags/小龙虾/index.html","66b18219b3b072b15c7c967aff6b7ba5"],["/tags/工具/index.html","2ed9943dd2f159e20dc648b6ae9539b7"],["/tags/弹性形变/index.html","fff3fd31011377a2581661dba29fe29c"],["/tags/排序/index.html","3a22353860adf638da0593d5229121b1"],["/tags/搜狗/index.html","036d92c1ac09bbc49ff98e59593c4da6"],["/tags/操作系统/index.html","1290bba0313332e36f80ceb748f43723"],["/tags/数据库/index.html","ece7177a7b7ba5d470b6b0c42ae4bd32"],["/tags/数据类型/index.html","864fea12b38caa9c98d4636fcf4b104d"],["/tags/数据结构/index.html","8114dec63832b58f89ae6f5a4527bb21"],["/tags/最大似然/index.html","607d4bace084f2786062f12f099eb571"],["/tags/机器学习/index.html","8671d40f8ce496a009469bcb3f3cf1d1"],["/tags/机场/index.html","19d07c02545d87bb29775ee9f31a3126"],["/tags/机场推荐/index.html","b86f42460ef3ba195f82669f2fcc518e"],["/tags/树/index.html","b74fa73da52fb4f5fa9c1b844ed17759"],["/tags/框架/index.html","93d26f4a6747bd6e4e7bfe7e8f7e46d0"],["/tags/梯子/index.html","f4c8e69436e8105258a8acba59f36af6"],["/tags/梯子推荐/index.html","7e5552191edec8f882efbfaeb626a52a"],["/tags/模型配置/index.html","4f29b186de3d82504bd5d34f39372b72"],["/tags/求职/index.html","dc93a76271efa80403585808771b78e1"],["/tags/汇编语言/index.html","626a117e7360357767b4e39fe7ef5649"],["/tags/深度学习/index.html","d3701a463b3e6b9e0c39f550a92cd266"],["/tags/深度监督网络/index.html","55dfab30515e8151be270e44b2e6fc3c"],["/tags/游戏加速/index.html","c4fef9a3c41d23d06b0d8c928a341dfe"],["/tags/爬虫/index.html","de14c64898fca0fe631949afd3f50ca9"],["/tags/电子书下载/index.html","b40dc714d1b62a36a481009223299d4f"],["/tags/科学上网/index.html","a56b1b4959cc9f015735fbcaa5b4b285"],["/tags/程序员/index.html","996c63f97dde959dc1e1e7a452c51591"],["/tags/程序员面试/index.html","7190d5963460efc4ceff187aa5f519f1"],["/tags/简历/index.html","790ed19915ddc6ec4563eea72ac3cd8e"],["/tags/算法/index.html","28c0164427e79b35ce83883141e63471"],["/tags/线程/index.html","05938863f570d86a67870fc836339650"],["/tags/经验/index.html","cfcd19acacfefd11a4d39f0d5bfa65aa"],["/tags/结构学习/index.html","b1c0ebe22f5aa2ce527d3847a6186e14"],["/tags/编程/index.html","75c29883e3753b89bdc9a7af51bf8a3f"],["/tags/网站/index.html","6f6bfc4f69d248b27bbe16e7a7c01ca8"],["/tags/网络/index.html","8a9657c8d7798a512d87601fff1ad1bb"],["/tags/网络原理/index.html","01aebc77639894076888fb02c18c32a9"],["/tags/翻墙/index.html","d34db1ed6f11b10be97bb69149f7b1db"],["/tags/肝脏分割/index.html","8f1bffd19da75108950232bbbb7780cc"],["/tags/虚拟网卡/index.html","d1deddd343e0a7cfeb4b67c70c68f6f2"],["/tags/规则/index.html","442334687ed17e4fe5cda340684dfc13"],["/tags/计算机/index.html","7e4bcb25b97f502ea39d1ff3405129b4"],["/tags/计算机专业/index.html","93e9aa281e92e88b6106b75b850be748"],["/tags/计算机网络/index.html","f6bfdcd89f33821da93cfc0dcc26150b"],["/tags/设计模式/index.html","1e424a5f22bb4015f9e73f81584f6d8f"],["/tags/贝叶斯/index.html","efbec4208b9440713d4dc0371ae1cd3e"],["/tags/迁移学习/index.html","3f4755e7d81b2d2f1c40b9672388a108"],["/tags/面试/index.html","94dd92cf463e56c3cd56ee7d24cb5351"],["/telegram-search/index.html","d8a9cb2a9a2f6d2be207fb4e5231a262"],["/the-meaning-of-reading/index.html","5038fdb5fb4e331b931be559c943509a"],["/the-way-of-pragram/index.html","7e6c67b5a7516be844741ad645dbe4a6"],["/troubleshooting/index.html","e2231f843aa7fd7344dc007feab906e4"],["/untiypro XL安装/index.html","f45cf7e06dd343af00e729abc62d521a"],["/v2ex-eight-sorting-post/index.html","afee9554df67941736a066793808bfc0"],["/video-websites/index.html","8d2784e468ba56b36d0dfe142e093e95"],["/vpn-freego/index.html","fd3f0a3a68325328cebe14d3e7e11e96"],["/waibao/index.html","cd0a7f90f9926623bc2809e7686a2e81"],["/wechat-fans/index.html","9433a9d10142f6abbb8e4bb106dd7b69"],["/window-run-VTK/index.html","e421f6c467439481015b691afa9365a5"],["/windows-science-internet/index.html","9c1572a4ba2f507f02153da089111949"],["/xshell-connect-Linux/index.html","cbf23f9015cd8240bf56150742586b1e"],["/yzhx-vpn/index.html","9b5f1f67f228398dfeefe5149931f038"],["/《Java高并发编程详解》，去大厂必看！/index.html","37ff15a7813d2681e1e6306165f359c9"],["/一分钟没了 1.5W 。。。/index.html","c9a9bc328de5b2e569f560b1dc86f221"],["/一条高产爆款内容生产线/index.html","ddb12e3351a75e30c11b99796cb58c2f"],["/为高考学子推荐的六个就业前景广阔的专业/index.html","76fa825fd6479ed9d21076cade6e6c54"],["/互联网赚钱机器---社群/index.html","5c70697e0ed0a9512b75bb2706053176"],["/你们常用的工作方法和思考方式是什么？/index.html","4d85d79ea144db779d96a6cb780009f8"],["/关于环境配置的一些事/index.html","0e8f7da7195a0b96d3e9326c42eafb00"],["/准备了19w！搞事/index.html","969591e0e05005bbb219dc754f740f09"],["/几个很重要的感悟/index.html","f739d1dc6c4e3d157cc3b1c6eef0751f"],["/分割ROI篇/index.html","5a725b5815cb1828278a3661e178fe06"],["/分割精度说明/index.html","9a2b07689aa664c9bce0c661f9660bcb"],["/分块程序执行/index.html","92f1aa096c8808eabeae3d902564e178"],["/加班公司黑名单！！！/index.html","6a8e0cf841ce43a42df1534354b4f2e1"],["/卧槽，上知乎热搜了！/index.html","6ef7c488cd35cca4f6f6cbe0b19ebefd"],["/卧槽，我的小破站爆了！/index.html","35ecf1eb8fe9e2f51a96a6d4931aa083"],["/卧槽，我被盗版了/index.html","1eb8b607526720913f208456710d7b23"],["/卧槽，还有985大学在大一上C语言课？？/index.html","85ffb538c9de9239b33418d1e535a058"],["/历年微软面试中出现的leetcode算法题/index.html","2260941d1cecb411c459d509d9ec0f27"],["/去特斯拉试车了/index.html","d44a14a685c257af7ffdfbfe6b05c76b"],["/吃苦的三种境界/index.html","59d34c66c336e2be64eea4b706ea50c2"],["/哪本书适合推荐给 Java 初学者？/index.html","92421427ec1a6c3427cdab89df02c122"],["/哪本入门级的学习数据库的书最值得推荐？/index.html","27d24ed846a73e7077fdb52b4a1c395a"],["/国内外常用的AIGC模型/index.html","ab3c3365f05d0f4f67a4174e1a40f4a3"],["/国庆假期/index.html","7d009108b07104a9ce4474e4e542d2e4"],["/图谱程序字典/index.html","08ab06ba6d4916097ea711166f9f4594"],["/图谱训练与分割/index.html","2479b949d159017e01e7a9b125dfb3a5"],["/宣布一件大事/index.html","12db9e3c4921a7e787379f779b4ce3e2"],["/小鹏P7i试驾体验/index.html","6fc38192a1ef055e8c706146e60f5396"],["/微信PC版3.3.0内测更新，电脑可以刷朋友圈了/index.html","5bc1934932dc3d5df7192d066c3c3ec9"],["/怎么更快的赚钱？/index.html","67cd7e408860a83bd085394839700a64"],["/我毕业了/index.html","6f806feec1246ed56404d56ab58cb8e3"],["/我！真！的！找到了！爱上学习！的方法！/index.html","37e5c414e9f3b2c58b24b295d3205d77"],["/户口的意义/index.html","0284d66830995a9dd309ae0d22120574"],["/推荐两本经典算法书/index.html","18179b47243e34628443479babcea8f2"],["/推荐几个在线学习SQL的网站！/index.html","acefd6482713bd33650dffcda412f8b2"],["/搞了一个程序员成长晋级社群！/index.html","f3395fb4f8c0473c7de0c87a2aa0fda3"],["/摘抄/index.html","567e3d3917a2dfbdfd8b0ce6dc73dd55"],["/暴跌30心态崩了/index.html","44d64616f99862f4cecd80bda744cec5"],["/最近很火的ChatGPT到底该怎么玩？/index.html","38eea0ac9d821f75b27003faa6ce03dc"],["/有哪些好看的日历可以买？/index.html","4d5b48c57128fe4c1424dda80d19726e"],["/服务器有啥用/index.html","233cbdd4c9dfdbf587bd1fd2b5d37d30"],["/来长沙了！/index.html","b4c6ef1ca417440201d918a6ec0ca010"],["/校招污点公司名单/index.html","fe6ef0e12edcb5b3dc08ca3768983892"],["/梭哈200多万/index.html","bf6e667974b974ced9144925afea607e"],["/梯形图入门/index.html","93dd1e2d4bcb19c1f049d515eb1fd332"],["/橙心优选，凉凉了！/index.html","b23360852bf61620ab4d09bc314bfb64"],["/比亚迪汉试驾体验/index.html","012a2eb62fdd0bf8e9a91d9755ec41c8"],["/清华转学成电，真的牛逼！/index.html","ac5aafc8e8aafd4d0e63ba126f5c5a60"],["/滴滴程序员被亲戚鄙视：年薪八十万还不如二本教书的/index.html","dc93dc49364392c634c4c5775b68b601"],["/社群！/index.html","68d31e91513c2f25a197ba0704ff2a92"],["/科学上网之VPN篇/index.html","c4f50880b8cbd9f1239cfbbf4722c43f"],["/程序员必备的几个技能！看完你也是大神/index.html","c2753b16fa4333004c068bd84a82ad73"],["/程序员绕不去的槛，Linux！！！/index.html","d735726ec0108b08d58edf428fdbaa82"],["/蔚来ET5试驾体验/index.html","7dd3219b237b42f1c79152f3c0a6bf88"],["/蔚来，牛逼！/index.html","71e16d4967c33dcea9a990251fd7f8e5"],["/被录取了/index.html","8588496ff557a1352ed2b6ec393aa1d5"],["/被找事了！/index.html","fe9e60e5abac8c889ea5a893a4dfaf5a"],["/被拉黑了。。。/index.html","8b2bed6effdb2dd3a8aa7d35c4ad8dc0"],["/被车撞了！/index.html","abb6a6f9c398a6bb5f1f493dd049e049"],["/该如何选购固态硬盘？/index.html","d8fbe79b4ecfffa6d1c7756bbb5972a3"],["/这本书一定要看！/index.html","71e56650d2549c5ac2f51f055e968e98"],["/选Java还是C++？/index.html","27d336e2c54db0cb2600abbf7e471ef9"],["/那些让你起飞的计算机基础知识/index.html","90b3ad06e40efb430e26247359c20f04"],["/靠这几本算法书，成功拿下大厂offer！/index.html","669eadcbec808a49d5f56d8969086c05"]];
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
