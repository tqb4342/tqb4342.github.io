/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/0010-city/index.html","4c57af290944bc330f0b3a9fcbed99d2"],["/10-algorithm-book/index.html","f09ae209838e1df9c8c2546666a5616e"],["/10-website/index.html","5fb3f3a7eda63836435dc0c2de890a65"],["/100万的小目标/index.html","203c4c8fff961da9d0fc4a141b6bd0e9"],["/10w+YYDS！/index.html","e9228817943294e9f3089174570e2fef"],["/12-technical-tutorial-sites/index.html","9630c9349ea805e12897bb89c392e711"],["/2 6 岁 了/index.html","933301ae8b2a40ce0dd39751281b4791"],["/200万，啪，没了。。。。/index.html","c23d4b069b45fc0822cd795e66a0dee2"],["/2018ECCV-Paper-DL/index.html","0dfe40925d5c5dca78088f5e00f727b3"],["/2021年固态硬盘选购最新攻略（小白避坑指南）/index.html","30609dc659ff8d2605e53cdb3622204c"],["/2021机械键盘推荐/index.html","9d4895fe109f3e1dc80b8047f40c7b17"],["/2025-07-15/index.html","465bd2f99bf692beb505cf27a15bb79f"],["/27岁了/index.html","51a63e9efb3c8d94ab7886faaceb3806"],["/3D-Convolutional-Neural-Networks-for-Human-Action-Recognition/index.html","f347bcad4fce8d3e1c641b3db7b77bf4"],["/3D-Deeply-Supervised-Network-for-Automatic-Liver-Segmentation-from-CT-Volumes/index.html","4f5a3ac3f2b1fe5e1297d127a0ed5e53"],["/3D-Unet-Experiment-notes/index.html","ed068357b657e90c2e924b4f8eac673a"],["/4-Software/index.html","9970e8db140095a935f984fe0163b7a6"],["/6-website/index.html","71ed2883c248a05044ab9dbe6403492e"],["/7-terminal-tools/index.html","21afbeb370be1784117792fbe47ad3c2"],["/AIGC中典型的深度学习网络/index.html","b57c9102f99069f402caa026af832028"],["/Agency-model/index.html","663cd610cea0bd5907d833caf39edee3"],["/Algorithm-brush-notes/index.html","417c81dbb98fd41f1e033fd74a865636"],["/Ali-recruits/index.html","d8fc77409e0022640307dc7d82a4f90e"],["/Android-open-internet/index.html","b8ca1ab013c4eeb17ca456740ef3affb"],["/Appearance-mode/index.html","06e89c5c9cda40adf0d6ac8df4b07ce5"],["/Backtracking/index.html","e2ae36fb75d04a93c313661a9af4b822"],["/Baidu-Sao-operation/index.html","2f809d98341e231eaad82825029ffd0b"],["/Batch-Normalization/index.html","fa28dcdf4de92858accae31395ab9f03"],["/Best-AI-tools/index.html","33150850731ab47d846cd06904c684a4"],["/Bias-and-Variance/index.html","bc6821497cda6b71e09291d1b0b75214"],["/Binary-tree-traversal/index.html","1ed50b48b15bee1e9514dd0b20ae71d1"],["/Branch-and-bound/index.html","5d187267ea8f256ef0b7223dc1ab0ae1"],["/Buying-computer-for-the-first-time/index.html","902fcd550452df63ddfb203da91e7f60"],["/B站向北邮道歉！/index.html","3eeb33c1b78a60c7fb9c19c4a435ca15"],["/C++-string-function/index.html","bc29a9a20f98c4b82fd6b10276d5b20b"],["/C-Java-DevelopTools/index.html","2663da0fd3fc0cb91563f1a54ecdc3bf"],["/CS-Classic-Books/index.html","1544c2b9da588a9af15742e1c34d4f2b"],["/CS-network/index.html","bf95d8a75e0e544ffa0b9c5736aa2b2d"],["/CSBook001/index.html","02c9191968a8e9e9d05981e49c94ef16"],["/CSBook002/index.html","0ae142ada7727a703022f843d12755d7"],["/CSBook003/index.html","8cf61396258645cc5991b8299cb7db08"],["/CSBook004/index.html","7b7962329686db9168e0f1c69679bb36"],["/CSBook005/index.html","55ad9ba88febe1531714c356e53f04f9"],["/CSBook006/index.html","d5d7ed6d63eccd9ee538a649070bcc8d"],["/CSBook007/index.html","4f4a47a76f6c233d6468dded87071b51"],["/CSBook008/index.html","680c9d1bcef8b93219d681dcbcd36386"],["/CSBook009/index.html","2235e403cdf6a283e466e12c4bfe8cce"],["/CSBook010/index.html","96758b7ecc1b93ebd471fde6d0a3c0d3"],["/CSBook011/index.html","d717fc141fcb0000e5f6db9e9bc5227a"],["/CSBook012/index.html","2b67ef1b791e7b80fdf82e32c4c9c4d3"],["/Changsha-really-fragrant/index.html","c5e7ddda598e04d39b7508e42392324a"],["/ChatGPT-VPN/index.html","33e3cdc45000416cfbabe1e843464e15"],["/ChatGPT/index.html","3323fa40778723cf33663ec6b77c9d79"],["/ChatGPT！王炸级更新！！！/index.html","f2eecd197a9e831160e0c17b36da39d0"],["/Chrome-crx/index.html","4432243615bd85f632dc5b7f55f4e5a2"],["/Computer-Classic-Books/index.html","e19809a4a904ac6535efc402f60bb948"],["/Computer-for-another-major/index.html","869b39194437e0d051b6e4261daef9bf"],["/Conditional-confrontation-network/index.html","db683f7f1ac1c9f0f5c908d1105ed184"],["/DNN/index.html","59c3a7523d058d2bf197418cd28af2ce"],["/DSN-segmentation-liver-experiment-summary/index.html","0322d401a59c0b6449dcbe0f1ae2bdc9"],["/Data-enhancement-elastic-deformation/index.html","5c1371f36ea02f9580dc3538a63fef61"],["/Decorative-pattern/index.html","0087472a1f2972ccafefd8c50021270d"],["/Deep-Learning/index.html","07a10f53c2d3f97e7a0f2ebe03d9bd8d"],["/Deep-learning-and-medical-image-analysis/index.html","c89b29f4920c9505a96b4ada36752e68"],["/Deeply-Supervised-Nets/index.html","714bb133c28409159e59ee943df724df"],["/Deformation-model-based-sparse-representation/index.html","97d824cde3e74f1537099f9ed2ece15f"],["/Discriminative-and-Generative-model/index.html","b274167a6c0817c98353c919d61f9efa"],["/Distributed-transaction/index.html","778c615bb63035420b96dae799e44ab8"],["/Divide-and-conquer-algorithm/index.html","640b5dde1fa35e7fe73e13e8f242ab7e"],["/Dll/index.html","d50b91a5381b391fd8b6ce2f63d8ddd4"],["/Dynamic-programming-algorithm/index.html","1156cb2f6648dd654699a561d15435fa"],["/E-book-download-commonly-used-by-programmers/index.html","a6f7f6d27fc4903dd03f90edab8cb54a"],["/EditPlus软件的安装、激活和配置过程分享/index.html","af4be7f7ee62fd0413f93c08baddcb33"],["/Eight-sorting-algorithms/index.html","e141038fe07377f81c158e5a1348e09b"],["/Encryption-Algorithm/index.html","1e1e109e2485889ab29507191774a4e7"],["/Eolink/index.html","def116241f19ee4ec4488a8c2120cde1"],["/Factory-and-strategy-mode/index.html","98c6d0ec99c5b62d0359dd12a8dd204c"],["/Foreign-technology-blog-community/index.html","367d058885de4b87078bb317857f002f"],["/Functional-model/index.html","616f9f89d70b9797b2414234204b4614"],["/Fund-type/index.html","4fe2bbb1b0e9b417a73c4839d1554332"],["/GPT-4o/index.html","f326cf5c53f21c87be10ddf0a94217a1"],["/GPU-medical-image-processing/index.html","e6f46669d980c69bfb68b5890f76e485"],["/Generative-Model-of-Unsupervised-Learning/index.html","805002826e350755e9be6f712c81be3e"],["/Git-Learning/index.html","18d340fc712a1e8cce19d781e5d69578"],["/GitHub-2FA/index.html","ecd0b22109c0b10140ba13c225d897b9"],["/GitHub万赞，程序员必看操作系统总结！/index.html","08dfd41fec54eec30dcf4f65e5e79050"],["/Golang-book-recommend/index.html","8d8b46e1605a3e5a5ad8a78a340c4d83"],["/Golang-learning/index.html","40f8009140d2d57119c8e1214af0decf"],["/Gradient-descent-optimization/index.html","e0b11e99a381569abaa289bc3f14e96b"],["/Greedy-Algorithm/index.html","618250da755c84b7250929d2fc83410e"],["/HK-bank/index.html","98d719beb90265ec334a9a881a6b95b2"],["/Head-to-head/index.html","2a4732f3c6aeadbe3a15070c9b9dfcf9"],["/HistCite-Pro/index.html","05b191a951a27e737aeea22565b1fbd3"],["/How-does-the-program-run/index.html","f78a1646da176e067e88854499400fd8"],["/How-to-judge-whether-technologyisreliable/index.html","e307907cd830dada3367f417718badb0"],["/How-to-learn-design-patterns/index.html","ff18a400870f97a76e6b4c1174034b18"],["/How-to-learn-design-patterns？/index.html","36f5fd5761fb2daf7bc2f98f0a9e0ae1"],["/How-to-teach-yourself-programming/index.html","a9e05bcf5e539b5df7568074a86681a0"],["/How2learn-Python？/index.html","11b99e3fb5535c881063cf1c78c24a1c"],["/IDEA-shortcut-key/index.html","aa49071a528b49a1baccbab4317ba940"],["/IT-interview-basic/index.html","4ffc3af6a1c55bdaea149e3d13d03832"],["/ITK-VS-install/index.html","833a3d2cfb67d91c7cc34406149dde68"],["/ITK-VTK-ItkVtkGlue/index.html","6ccfa80efcbdc66f006bbccead55a400"],["/Image-processing-plus-noise/index.html","052b9b5785ad077d99a5c1eb127b61d7"],["/Inception-Going-Deeper-with-Convolution/index.html","84f290b4866842b4b40e014b32711cf6"],["/Java-GC/index.html","80546b787b132e8d2182d0d1fae043bb"],["/Java-Servlet/index.html","2f0e062d827893f9fcb3794d965bd216"],["/Java-array-and-collection-sorting/index.html","23037269201510bfd62748829130938a"],["/Java-development-tools/index.html","0c5a1da13996b0c7d4003ef511a2caac"],["/Java-eight-data-types/index.html","66078a987862d3b8f92d3b480d563745"],["/Java-interview01/index.html","d1b8540d0f6a2439cd780e35beda4da0"],["/Java-interview02/index.html","1e7043104364cc78028377b8f59b48f5"],["/Java-interview03/index.html","fb8e4206e7f84a8b870141f3f540908e"],["/Java-learing-map/index.html","3ea2bdb6b862d05fcc3e9fa38f23125a"],["/Java-learning-route-map/index.html","92a7c198d1e9dc46c1ed6cb546eb4690"],["/Java-memory-area/index.html","2bfad72208339f76c97c0a82f2723817"],["/Java-memory-model/index.html","fbccc1d4200d5a87a31a34474c707de5"],["/Java-multithreaded-learning/index.html","c5295a821c0b5f9f32ac2eeed52d7b24"],["/Java-project/index.html","a58dfea94214862e25962878c5a25eba"],["/JavaWeb-Chinese-Garbled/index.html","8f83144992e900ff62a9f2160e535259"],["/Java还是C++？/index.html","a65602573f4fde15d94840af2cee6a48"],["/Kaggle5-step-guide/index.html","9663ac0b5bbc8ff6a68bbe900b243cdf"],["/Knowledge-points-of-Java-garbage-collection/index.html","09d6162939f8f44d878ed5c646491a48"],["/Layoffs-and-Hiring/index.html","69e77c619b51ec4d4351d0e9914dd878"],["/Linear-regression-of-machine-learning/index.html","9b4b495ae4c2060f5500560a709e8775"],["/Linux-Compile-C/index.html","91f0995db120d37b40382c623a7d67dc"],["/Linux-ITK/index.html","069b4862b3fa07410d70bf7069aa5c2e"],["/Liver-segmentation-of-sparse-components/index.html","8966e20bb1e2cbe42b51f70c71b0ff2e"],["/ML-EBook-paper/index.html","f04757377eba70be8dccb5a67270bf27"],["/Map-uses-multiple-maps/index.html","2b088f54697bd2e3ff65494f28978a7e"],["/Matlab-Graph-cut/index.html","86ef84b3edc3b837b2cf6f8d0fad3010"],["/Maximum-Likelihood-to-EM-algorithm/index.html","dffbc3bdec3ee9af4bd35babc9995214"],["/Mean filter and median filter denoising/index.html","d21a8dc845c490a7667169123efe795c"],["/Medical-Data-for-Machine-Learning/index.html","a2988a97c20bc71913f16a406f8472fc"],["/Medical-image-analysis-deep-learning/index.html","cbbc1b2e67197d481f1347ce89f92b7b"],["/Medical-scan-image-processing/index.html","f4aeaf07251d8d2d71c114c3c7a52be1"],["/Merge-sort-algorithm/index.html","8095a911751b75c32b086b5c164407bc"],["/Monthly-income-2W/index.html","e3fffb4438570cee59eb9e59fab65969"],["/Mysql-database/index.html","ad4b112e3fffe5f1e27544614e6b168c"],["/Neighbor-Embedding/index.html","618373398f1316919e2f5e3b945e9e7e"],["/Neighborhood-approximate-random-forest/index.html","33fd9857d5712e8f54094bb4b8a7695d"],["/Net-and-official-documents/index.html","eb6103b4556bcbc3e07d78bb3c668c78"],["/Netflix-VPN/index.html","e1a24a92748de619adc9a098aa7e2681"],["/Network-principle/index.html","6471f86bf4784501f612fe52559fa6b4"],["/New-Hong-Kong-stocks/index.html","fd29a29ce3da21e0220999d1e8ac2d62"],["/Nice-to-meet-you/index.html","497bcc1120446c0c8c5966a9f98d8ba1"],["/OS-processes-threads/index.html","1cadda2e8d99824283ce70be766bcce7"],["/OS-run-environment/index.html","b74f1bcb5f4aa3d0a1a564bf9e0b526a"],["/Open-Internet/index.html","15d9eda579e43b7164d314b346c448e1"],["/Open-Internet2/index.html","b0bde3333f7afda68ce0d5dfba728ea3"],["/Open-source-community-and-rewriting-website/index.html","bc21b3af483400d71fe20f84ca54451a"],["/Panoramic-image-stitching-based-on-SIFT-features/index.html","835f5adac65b033b58a84952c403efe7"],["/Parzen-and-KNE/index.html","dc6d2cd59265de0c738a2db558469198"],["/Personal-technology-blog-site/index.html","d16ba98ba53d192f572653e1d47e2694"],["/PicGo-Gitee/index.html","9cb9d455e4a0b64bd9643a74f3b9e5c4"],["/Programmer-treasure-chest/index.html","86dafaa10309ff159b83a11bd7df13ba"],["/Prototype-mode/index.html","967c3a5ac108cabd405feadf9ffa2785"],["/Python-base/index.html","000422d0b13ce71f9be53c3497afe0bd"],["/Python-crawler/index.html","c8df0e40439004e0bcb415644e675389"],["/Resume-revision-suggestions/index.html","206ec0cec558d8baa34d7bba4ad2aa77"],["/SEO01/index.html","28e56e7e6010091ed76d98ea05762ddb"],["/SEO02/index.html","fb9c7ee2296a645475fc5c4ea2b38c8a"],["/SPHARMPDM-MEPP/index.html","e0d4032a1836ab574e1b303e4192adf1"],["/SVM/index.html","f238b2a4b863924878db1edc918b7fb9"],["/Semi-supervised-learning/index.html","f864e8495e140f9fe9cd2dd993a04dfa"],["/Sequential-model/index.html","e20dbc5700b4119a0c1cfff40fa81b62"],["/Shape-Based-Human-Detection-and-Segmentation-via-Hierarchical-Part-TemplateMatching/index.html","a7ffaba30d1391f0950281c05e73263b"],["/Spring-basics/index.html","f39f61aa3574d460bd078d907c5602d2"],["/Spring-integrates-hibernate-Struts/index.html","e5010dde11b7f6679b571638ed19f808"],["/Structure-learning/index.html","d803a69825584b37cfe743b9818385ea"],["/Suggestions-for-self-study-of-computers/index.html","a8f93e9397a497ca938f4e67189a1da2"],["/Summaryof-HongKongStock-Account-Opening-Links/index.html","0596aa673cbc9da387933249a1e2efc8"],["/TCPIP-detailed/index.html","b2350c5dc5ea52303d06277ddf2b9089"],["/Telegram-VPN/index.html","919f051a5ebaf18d67227f6245b61954"],["/The-essence-of-shopping-festival/index.html","8b4bed837f8f92c688c1b9a537428d1c"],["/The-most-important-investment-in-life/index.html","4fdfbdc325ffe0558a0a40a1792d3562"],["/The-most-successful-nvestment/index.html","ef931217d79ff4cc1be5147693e5bf3a"],["/Transfer-Learning/index.html","56b0f3a9ab0afdd27e84b9cfc5cbc83b"],["/Transfer-to-computer-major/index.html","41eac47f7f19a870ffe1027e6690bc8c"],["/UNet-Convolutional-Networks-for-Biomedical-Image-Segmentation/index.html","fad72b190ca22834a295971bdda4c029"],["/Ubuntu-install-sougou/index.html","6a28cb390c0e3ea54b73fa43abd8b715"],["/Understanding-of-paying-for-knowledge/index.html","0d26d2e4710e5db3bdbd46fdc2416d8f"],["/Unsupervised-Learning-Linear-Dimension-Reduction/index.html","cf98be0e2c3c811997a569cfda96ae47"],["/VPN2025/index.html","09d992b6d46c1b46e4d801ae733970e3"],["/VTK01/index.html","e8147fd1c7193871e0480c0d6da992a1"],["/VTK02/index.html","4448ee71e4e760cfffd19c36fe07e6f9"],["/VTK03/index.html","bdc5eaadc34f6ab4c529c46a040858d6"],["/VTKRead-write/index.html","80e64d261b2c66cb0ad2369e7305627b"],["/We-are-all-good-kids/index.html","964eaec333529d303520da3e6a290756"],["/WeChat-80/index.html","59e55359e2e74b4ed45b41bf9d60d54b"],["/WeChat-red-envelope-cover/index.html","93f88867af594b5472f056ce7d433868"],["/What-is-crawler/index.html","18333f8eb3e46c2ed38da20d0d5c25dd"],["/Win-OpenInternet/index.html","11ff3453fe7f73b7078a87214738e45c"],["/Windows11-2kfans/index.html","2512bc926093415af1683d4ad6ae955e"],["/Word-Embedding/index.html","c86153e1b04feff3a71164a5aacfeec7"],["/YuanShikai-and-his-Beiyang/index.html","9a8a3fd413811e08ae6fa4075a8302c3"],["/Zero-copy/index.html","cd55c3705dfbf871bb4e6fd1acf4a5b1"],["/about-keras-model/index.html","472f00c690dd53fd6b1b2b242a1085b6"],["/algorithm/index.html","d6820d11d4976af46396c4fd4481a400"],["/alibaba-Java/index.html","b9a9f75b7205e13591d82bf794b0aa73"],["/archives/2020/01/index.html","bcdf9e4824b32e3d1118ecc092b9ff52"],["/archives/2020/09/index.html","54adeb1d568752cf0c90cb66463266ed"],["/archives/2020/10/index.html","eb7abd59271eb12ffe76760a06c2b378"],["/archives/2020/11/index.html","ae807754a2c7353475e61e12279f0e4e"],["/archives/2020/11/page/2/index.html","5b2692e8fb1deb683642cce662773ce4"],["/archives/2020/11/page/3/index.html","437b236b3091d5d2ec6ede1c8095e587"],["/archives/2020/11/page/4/index.html","3509631507833be4d1180641cd7ea89b"],["/archives/2020/11/page/5/index.html","56406d1ea4559c774716d1d7079f4713"],["/archives/2020/11/page/6/index.html","789b59e65f86e36962231d314d18e77f"],["/archives/2020/12/index.html","bf7596ee14d967ed77adb9a24d0fce34"],["/archives/2020/12/page/2/index.html","e81acdcb8449c4e89b9c479d7729a8e3"],["/archives/2020/12/page/3/index.html","a6a4ebc299c06c331c62a5900fbde1f7"],["/archives/2020/12/page/4/index.html","11f085a7ec0bcb00b109b5f80396f3f4"],["/archives/2020/12/page/5/index.html","e574cf4cd0da1246dae9a8703943b7bd"],["/archives/2020/12/page/6/index.html","615e82de45a22ce3f6b1d7da2cdb9cd8"],["/archives/2020/12/page/7/index.html","39e27ef8ed74e0120a58a74605d20449"],["/archives/2020/12/page/8/index.html","344a6f02f22ee35246b220f2378e0b0d"],["/archives/2020/index.html","67339ff299ba127b87ef26d4d0ecd9e8"],["/archives/2020/page/10/index.html","be2c20fe21037e53998ea624fb609bdf"],["/archives/2020/page/11/index.html","a95815c4206d3a2e9b9bef1a5ebdbc16"],["/archives/2020/page/12/index.html","91140a61b205724873ea100e1b94d19a"],["/archives/2020/page/13/index.html","5d87943ae39d84ba0382b0a2a2a165bd"],["/archives/2020/page/14/index.html","f353b828390bb28b8a1ad079d644f848"],["/archives/2020/page/2/index.html","24f49e89ba9894d346404c832f802608"],["/archives/2020/page/3/index.html","33f990c8cd87c0626af2f1fa48b070e2"],["/archives/2020/page/4/index.html","e9750ee61b3bfd36a425366b14426b11"],["/archives/2020/page/5/index.html","e9ae424d9921e31885a0d26a58d094c8"],["/archives/2020/page/6/index.html","f5a6bc5c359cd388d33848815e4e1adf"],["/archives/2020/page/7/index.html","ceb1fdcdcb5d02c5542304ff0a6ec616"],["/archives/2020/page/8/index.html","c79200564d5be6284b420baea9516f37"],["/archives/2020/page/9/index.html","408dd590a55baaf514612b07d773abdb"],["/archives/2021/01/index.html","5f98d9c5c903bc198fd2fb3bf730845a"],["/archives/2021/01/page/2/index.html","de7a1be5c17c43e6b8574a64707cc2b4"],["/archives/2021/01/page/3/index.html","805e89a24f7fd1a1f695bd533160db7c"],["/archives/2021/02/index.html","f4bea2ca3dfe432f3cce7c1d2b917269"],["/archives/2021/03/index.html","9a374f934a56f88b27bbff2b84ec84e3"],["/archives/2021/03/page/2/index.html","d960dcc5b170693691c0992a68e1af6f"],["/archives/2021/04/index.html","c468f216eab23491e610b297fef93533"],["/archives/2021/05/index.html","2535a2ff9c32efde9217c4a1f94239af"],["/archives/2021/06/index.html","7a08949e1293a32d29efd3983857c6ad"],["/archives/2021/07/index.html","9ea7820f3d27210b31cc6186c3ec34c4"],["/archives/2021/08/index.html","9b2bf747498808f292e02caea8ec60ec"],["/archives/2021/09/index.html","1ddc387a00cf8a947689f3c21842a633"],["/archives/2021/10/index.html","c3953b4108f3b72b6a895da0d767dced"],["/archives/2021/11/index.html","60febfc5bd5cdd897fec1b64a3aadb82"],["/archives/2021/12/index.html","c330fd88c2c6ea7c7026c4086c2ecfa2"],["/archives/2021/index.html","f26534ce21a1d0216079a83b8fb58c4d"],["/archives/2021/page/10/index.html","fbad2d572e4dae20881d1e180e8da61e"],["/archives/2021/page/11/index.html","2d767cea7b1eac002a5b213a3cc34348"],["/archives/2021/page/2/index.html","d518d2fc0bdeee8c5fd7af62422fd3b6"],["/archives/2021/page/3/index.html","09fe4f2f8178ebb8c06cf83b60a29b11"],["/archives/2021/page/4/index.html","da86e6a8413cd7ad644e663de5612147"],["/archives/2021/page/5/index.html","1e5a3a310755b20c04535944f9556345"],["/archives/2021/page/6/index.html","6504409f397a37a4d5c0e8b64ef767eb"],["/archives/2021/page/7/index.html","c3b99d95e9000a83d33f6614fdfda600"],["/archives/2021/page/8/index.html","039ed3587e8bb3e7a681e63331fb4b42"],["/archives/2021/page/9/index.html","ffdb637e6c29c34f6fe95d7cf9117e78"],["/archives/2022/01/index.html","09191427f1489d9797fc6747042371f7"],["/archives/2022/02/index.html","c7e237493b4c6e524e6aafedcc7d70b0"],["/archives/2022/04/index.html","f101ed563d6b4263c8f8d3d2df006e6d"],["/archives/2022/05/index.html","935f693ead0028c5b95d3da2b9c3e390"],["/archives/2022/12/index.html","5aea3ef09e37aea18ada5133f3d63ec0"],["/archives/2022/index.html","de784ea6e0659a1ddb9340b0f7b7909c"],["/archives/2023/01/index.html","ecdd9034b26ee295eedb1a1bea3e0ce4"],["/archives/2023/02/index.html","ed782bb05dd4b2318375125d7815b6ae"],["/archives/2023/03/index.html","ad5ffd85ba7c7bd47eed39b96ec2e608"],["/archives/2023/04/index.html","4c6465e9b5d584a85bb9bbfcd83548cf"],["/archives/2023/06/index.html","89029107acecf686c1012bafe8772348"],["/archives/2023/08/index.html","9282b1e16b23db169164a4b66ae4b7be"],["/archives/2023/10/index.html","b8fbf38ce9c1f34b985d67a6870c3886"],["/archives/2023/index.html","f9143014eba72a264f78ea711d251d2a"],["/archives/2023/page/2/index.html","9c2f65751c695b7a26cb0ff7867e1e81"],["/archives/2023/page/3/index.html","c76d3df9171d4aeefabe7607c925bc2d"],["/archives/2024/01/index.html","2d376144a8e0f01782e270f4781bfb66"],["/archives/2024/02/index.html","6e73a8c221fb5bad5279046d02e5e2b9"],["/archives/2024/index.html","c4c315996e5b1b24c9db373043f6f026"],["/archives/2025/06/index.html","1640144c085ee258c4616585d9a51bf5"],["/archives/2025/07/index.html","e939275d6e384a3a4449f1bda1604ae2"],["/archives/2025/08/index.html","2c21f42912777f5957cdd5115c4fa37c"],["/archives/2025/09/index.html","223cadfde22ceee8d3bc486ecd512cae"],["/archives/2025/10/index.html","e9a1f061a8a12a18b9e7ba9b98932988"],["/archives/2025/11/index.html","9631db0a7e08aca225422e309cd4962f"],["/archives/2025/index.html","a5803ba0d8160a5e85bd68652859481e"],["/archives/2025/page/2/index.html","8e961acc16e7bcac8c9ac90c54f505ef"],["/archives/2025/page/3/index.html","59bc08172e3f45af26b230daacce996f"],["/archives/2025/page/4/index.html","8be19d1d32e07e71c2ab1241cd49701f"],["/archives/2028/02/index.html","186391ef7d224c22816a96742f2911b8"],["/archives/2028/index.html","af163760f0ebed44ebd04f7e31cedd72"],["/archives/index.html","413fae0d5c38a392fbc77e141774ec24"],["/archives/page/10/index.html","85ee7fdc8fe60814843d28bd4da3c5d2"],["/archives/page/11/index.html","79ca71d9b653fbecdec1204a65cd883f"],["/archives/page/12/index.html","a5ff925c1bc08980b9565225b60c8f55"],["/archives/page/13/index.html","0d24750dd57ce3d4b58bed99742d09f7"],["/archives/page/14/index.html","02b9d4c4a0ff8cf7b9f12b9fcd6c3cbf"],["/archives/page/15/index.html","1024398ab1f910bc7682e9240a94893f"],["/archives/page/16/index.html","bd49764060cd1d4eb8054dec2c2e2e8e"],["/archives/page/17/index.html","cba0d5b87a45fb0e403e8efc9c8798b0"],["/archives/page/18/index.html","2ee96f08169a5e7afa27622d00baa713"],["/archives/page/19/index.html","b385beac5b0ad08a0100c83f9cde7816"],["/archives/page/2/index.html","df001bbd65e0ef2f4167c679568aa88c"],["/archives/page/20/index.html","a5729d2fde6b175b5def55dccb2f8320"],["/archives/page/21/index.html","916dc1b70ede66bf262da6fffdaac771"],["/archives/page/22/index.html","da1ac824130e9c3fd7024fa7cd5a4c5b"],["/archives/page/23/index.html","2b0e0623c92e0f5d2cbfbe35a69a5e88"],["/archives/page/24/index.html","609c98564d5c927267658340e01d8ac2"],["/archives/page/25/index.html","41eb26dc518bb3ebdff4060702f68a44"],["/archives/page/26/index.html","4531e2257545a5ef6315d866d1c5c237"],["/archives/page/27/index.html","763be171fab829c0f182438691763362"],["/archives/page/28/index.html","24789b75e990efb2672ddf99492607a8"],["/archives/page/29/index.html","930f6b2161d340ccf041f1986621f437"],["/archives/page/3/index.html","a7f7439ce78b871858610dcfbb6733a2"],["/archives/page/30/index.html","052ac0c15dccf840ebc92765057d28ad"],["/archives/page/31/index.html","4bf54ccdae0feb3c2f6bf137fdb4e7e2"],["/archives/page/32/index.html","5bd420f7b74d5e1905769aef50f34c4c"],["/archives/page/4/index.html","e69cbc687a28c6f4818b54fa8217e9b3"],["/archives/page/5/index.html","eb36428ebc3639be85231dc6e3c939db"],["/archives/page/6/index.html","0230f2c28289d27e126c2fe3856a546b"],["/archives/page/7/index.html","097bf8d82aa02f7044e66f4954f481a9"],["/archives/page/8/index.html","b4b49d87b71eb326e068728d85476484"],["/archives/page/9/index.html","5ea6dd1060cbde550d19e4926e49b95b"],["/baidu-search/index.html","c1471351097b1c11a29186553ea345ff"],["/baidu_verify_code-Hh2fKNlEB1.html","e1ed895559e9e9b42d4b9f1ed838e067"],["/be-a-programmer-instead-of-a-code-farmer/index.html","0dda804475e118c6a983f6d9c3684ae5"],["/bought-a-house/index.html","0ec3affd0f3b51489032fdec13cc4344"],["/categories/C与C✙✙/index.html","8f96435f44a1927dc3ee0ae89bb010c8"],["/categories/Go语言/index.html","bc422b5d4356ef2c6f4cfb84e6f30cac"],["/categories/ITK与VTK/index.html","fd67717cb2b4c0a7a54797dd75398ed1"],["/categories/Java/index.html","d6d4f2eda6ebc4e3561fa5a4b745f472"],["/categories/Java/page/2/index.html","c18c62ca4e55ace024ad6f0f1d91a272"],["/categories/Java/page/3/index.html","1683e15debadea3dc5d6e54f3f22e2ce"],["/categories/Linux/index.html","3b32be24117778b66b36c65414f1a161"],["/categories/PLC/index.html","e61b1920c9a3ba73be5dbd857451fade"],["/categories/Python/index.html","f19496b53ff473ce4c487bf1a1be4e14"],["/categories/SEO教程/index.html","004189e05cf462a10fab6b578df1f1fe"],["/categories/index.html","bc33abf71098a66f19f08c5d1429ff5c"],["/categories/图像处理与机器学习/index.html","cb278ed832df6f67d512102a4999d05a"],["/categories/图像处理与机器学习/page/2/index.html","8da7377d26afeafd5b8374a9dffd3929"],["/categories/图像处理与机器学习/page/3/index.html","4dddc814163184d92b85bec307c1f94a"],["/categories/图像处理与机器学习/page/4/index.html","640b4b5c333b3339ce609108919db649"],["/categories/图像处理与机器学习/page/5/index.html","cf5edc9f15cad53242323cab3b35f5c4"],["/categories/图像处理与机器学习/page/6/index.html","d23f3087b53d3aa12b082ae89b3a619a"],["/categories/工具/index.html","d17b58938c49bd97736adb7adc0f4536"],["/categories/工具/page/2/index.html","e1be2f548032761a126973204156fa78"],["/categories/技术以外/index.html","0ac7d94acf0046fc35ef3eb97fbf8c36"],["/categories/技术以外/page/2/index.html","89abd68dd75aa52a023c3f120b1fff91"],["/categories/技术以外/page/3/index.html","2f67765fcd5f907d4a3251652f33b4a0"],["/categories/技术以外/page/4/index.html","01380d138c6aa7ee770aa89bfed5f86d"],["/categories/技术以外/page/5/index.html","7b83a5fb68c502a60088363117046274"],["/categories/技术以外/page/6/index.html","2d7929bd734ccea9db4571c812d956da"],["/categories/技术以外/page/7/index.html","261f3124be25b652ec62ed760b16018f"],["/categories/技术以外/page/8/index.html","7f8a7e12b94d3300df5b92dce20d6b44"],["/categories/技术以外/page/9/index.html","c03c2b1f3019bcc7625b058e4af40dce"],["/categories/数据结构与算法/index.html","964efc24510eee4d1d441112378b86bf"],["/categories/数据结构与算法/page/2/index.html","023dcba97478a72a65192a4495eb3164"],["/categories/科学上网/index.html","a9f6e0af9783e106ad43e0c55ab6e8c7"],["/categories/科学上网/page/2/index.html","476b9925737d6ebe648d7d1a04ec7fd5"],["/categories/科学上网/page/3/index.html","8657962a8a62cbcf5d88c6288df61cfd"],["/categories/编程经验/index.html","687ba95297373c653c00b9e12c169fc2"],["/categories/编程资料/index.html","2677276e3a8fc05b1355270c392da5d2"],["/categories/编程资料/page/2/index.html","84ab295706f8fb24810755e6463788a2"],["/categories/编程资料/page/3/index.html","541871baa1c877832278eb81b29d5fb9"],["/categories/编程资料/page/4/index.html","e47cb872043d0e78452d0ef5736d2627"],["/categories/计算机基础知识/index.html","54c774cf064b84ae20f0ed9409e889e9"],["/categories/计算机基础知识/page/2/index.html","16d46e4f9e62ad62d74735af34f00afc"],["/categories/设计模式/index.html","8f78afcb505b4ca4e9bc37a8bcfd0a0f"],["/choose/index.html","98ece15382fed420606427e3bbf1cf59"],["/choose2/index.html","dc7a1a2792ea4a8c73b62811ae07bdef"],["/chrome-crx-intruduce/index.html","5318b7514793f6b705f9b5818c9f7854"],["/clashvpn/index.html","7846b843373359c95d14599795b3167e"],["/coder-blog-website/index.html","d1381d530baca6000262e4fb2e511fa7"],["/coder-source/index.html","f3709f5b3adf9cf8c88da742fc809d6d"],["/coder-videos-website/index.html","75c1f173fd80318e179d4b1f365d7afe"],["/computer-book/index.html","a7c0c33beff7e48701a6f93d4a3a2995"],["/computer-censorship/index.html","d6f531b0bf1668258bedff977c8e7f9e"],["/computer-network01/index.html","5476548266e4f62d67f426573c3b4725"],["/computer-network02/index.html","9e5b746a520a919fff3006f7d915021a"],["/css/main.css","bc32ad34ec4990d934c3c647bdb62f79"],["/database-Mysql/index.html","d71e06fd2abee75e0e06df1826f860fd"],["/eclipse-lombok/index.html","12b1e09598d1b59b18f2d3ff252403ed"],["/fully-convolutional-networks-for-semantic-segmentation/index.html","976b75dbeedafb2392d90f0c4cf65fa5"],["/great-firewall/index.html","178f191d58fb1e9f960d7b96ec5e4420"],["/halfrost/index.html","22fb95d8eff4005c1d7c07fdfcc0b006"],["/how-to-signup-chatgpt/index.html","47e8e243d0a60b5cd02f7eff076ffc61"],["/how-to-use-Gemini/index.html","c16e4b2159f0e279b64540b422ed419b"],["/index.html","55277b19550c16f3305538b146ac0360"],["/ios-open-internet/index.html","880fc3ba697c8d6e132a13d0584cb8da"],["/iphone-open-internet/index.html","d9d947548132c670f3e750db528c7f9f"],["/itext-makes-pdf-form/index.html","de7f743f87518ec1ace768e2e7cd2e14"],["/java-Set-Map/index.html","a80237cf995acb8d5bbad99595281e80"],["/javaweb-server-error-codes/index.html","a3610081463f4a9dd612b996b96601ee"],["/javaweb-source-code/index.html","157877cc46d2044095b20e8f9f0e7605"],["/js/lib/busuanzi.min.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/js/lib/lozad.min.js","47904d34a224931dd1b615c59a3dbe3b"],["/js/lib/prism/prism-coy.min.css","0ccad54d95845901ead59bfd3ecceb14"],["/js/lib/prism/prism-dark.min.css","a4711d2957d6605eb5682bdd228cf123"],["/js/lib/prism/prism-funky.min.css","efedcdccd7a9ab342d2d9cacd24920af"],["/js/lib/prism/prism-line-numbers.min.css","38e22e790c279bb56f9ec4b90a2a2d58"],["/js/lib/prism/prism-okaidia.min.css","5ac6f9de996fbec68aaa106dfb16e061"],["/js/lib/prism/prism-solarizedlight.min.css","ecc7e64d039873ffcf7fb27babdaeb5a"],["/js/lib/prism/prism-tomorrow.min.css","456af2a14ae4f5089939d5904ac40fe8"],["/js/lib/prism/prism-twilight.min.css","ebb5c355332a8cf9a1ce37a2a69d678f"],["/js/lib/prism/prism.min.css","a5234d614834658887cec6a9515890f8"],["/js/main.js","052d2b299d9c750afea8df0b802ab7c1"],["/keras+TensorBoard/index.html","7e82452a16ebf42ca62f8bb83c80e160"],["/keras-beginner-guide/index.html","025aa67603add1797cd4063a958956c9"],["/kmp-algorithms/index.html","7305dedcba6cf58c6aaff520808620b8"],["/leetcode-Java/index.html","a49f3fad20cc95b82e297b7f180e212f"],["/links/index.html","7a3eea0870a415c96e20b9ef3df0bffd"],["/linux-java-opencv/index.html","df437600db0832231a97e08ab498f001"],["/msb-source/index.html","06ac3f8f5435e40681a224fd2d859980"],["/online-BUG！/index.html","b3cb8f1e3ec3783a4736577fb877ce57"],["/open-app/index.html","48bfaf641033deb6fb862eb11685772e"],["/page/10/index.html","fa30176d714a593def2beea384b90246"],["/page/11/index.html","b1537472b1d293109980da93fc48f176"],["/page/12/index.html","bd04f9ed8506a7fc7c23cda242f2587d"],["/page/13/index.html","0134fe3a36c0a0877d9731dc5e264f01"],["/page/14/index.html","d6f9710d6b00ab09eec02f5681460926"],["/page/15/index.html","6d2db980c0350be2ec0788fb85be9094"],["/page/16/index.html","b03535948154502fa32ec79684a5f704"],["/page/17/index.html","706794f2809d124980e7beb78d047fad"],["/page/18/index.html","5b21bfad158ef8a62657be785270602b"],["/page/19/index.html","84e8b256301b4447cc0216c99c5539eb"],["/page/2/index.html","563b05ab4bbb5b1bbce77adec1654a4b"],["/page/20/index.html","11ce1f584554d9ef713e7cd938d6cf25"],["/page/21/index.html","6df2f5dac0f242c93d6942e0d1b7ddf2"],["/page/22/index.html","c52aaf95b727444ff4c5f52212e1ca94"],["/page/23/index.html","250941e893682ea9d69ff428752b36f9"],["/page/24/index.html","263ff9e0e167caef7f1db0617347ebdf"],["/page/25/index.html","a74993577895d019c68ca2471cc441ec"],["/page/26/index.html","46d4ebd8da294b47ffe5a787329021d9"],["/page/27/index.html","6c1313febce7efb82e4ad087d5b48dcf"],["/page/28/index.html","c43387349bae7783b17860c1d2c1919c"],["/page/29/index.html","0a71072db523d14220ac28b1bdcab60f"],["/page/3/index.html","160532d220c9f1e63f4e582460acfdb2"],["/page/30/index.html","8c439be309b3617f31383f40cae8eddf"],["/page/31/index.html","1fac7ff0abc7424422a5c9e307d8d1ce"],["/page/32/index.html","6e8c458b4c39752e131f124cc8d2b639"],["/page/4/index.html","26b19fe1e47665581931373a0dea16d4"],["/page/5/index.html","43163939f8963050f9f05ce266daef5a"],["/page/6/index.html","0fb34ba99b67d409576b96718168f7e4"],["/page/7/index.html","65b66384c042435c0aa9853afdc4295f"],["/page/8/index.html","a4578c177018bb4518714eac1695e384"],["/page/9/index.html","f5684e95a8f2d099e60abf30499eba4f"],["/pandas-data-preprocessing/index.html","496f78ce81da8214f1c6d396e2821fda"],["/popcorn/index.html","6785a2d19fe374d902e95e39144dede8"],["/python-Blog/index.html","9233a2dec9ba6ed305627b8bfb6a6603"],["/python-yeild/index.html","42e5496d111c790386c25e76308db433"],["/python爬虫教程/index.html","2b3ca1ba0b7805ea82f98b1c1f14a449"],["/software-copyright/index.html","64ba555106a50cbf30fb14929bf20f66"],["/sw-register.js","9527ef995f6296c0c5e63c133ed91af2"],["/tags/AI/index.html","f59b2fa65c0d78087d4f229216063024"],["/tags/API/index.html","5fce0ae9747a8159a9214f30643046c6"],["/tags/C-图书/index.html","35df15dbde77ff71ce320cd97e6f3f25"],["/tags/C/index.html","c58fce03ce7665be4be3f9d8ec17bc4e"],["/tags/CNN/index.html","b0fd5d3827e09ad1e3975e0634ad1c2c"],["/tags/Chrome/index.html","706226290eb910fc1a7c2f8e5835dd86"],["/tags/C✙✙/index.html","c3331266da17ad964d562d93882c1934"],["/tags/C语言/index.html","bf3d901b032f4ab0e87e4552b74cc5da"],["/tags/C语言图书/index.html","42cc68aa61b7fbeee4b0a84b24104817"],["/tags/DSN/index.html","72e8326aad3ef4057b509f79cf81a569"],["/tags/Dll/index.html","cbc754e9540fdb7097ed4a4d98eb71e9"],["/tags/ECCV/index.html","e724594f91ff02d373eabf8ded1ee54c"],["/tags/EM算法/index.html","4cada05c8cd83ef15c12989c3dc39064"],["/tags/Eolink/index.html","f1e9aad98cd98a2cffcb96e8709892b0"],["/tags/Gitee/index.html","9f3d36d37690158ec75680fa1ccb0027"],["/tags/Go语言/index.html","7e0db06c2bfbc28b631e07174f9af190"],["/tags/Graph/index.html","cc0c176be1eaae0d969c99c21e43b3f1"],["/tags/HTTPS/index.html","f21fda006dd309948e4f1b767535b301"],["/tags/ITK/index.html","7e5a0ef22f79dc4591c030d1af0ca58a"],["/tags/ItkVtkGlue/index.html","d7dd52a1bede95f52535c0761371f022"],["/tags/JMM/index.html","8a72f1e25484f5f349a1b954c28b50eb"],["/tags/JVM/index.html","04cbef2fce0d802bb2c68c14dda01b2b"],["/tags/Java/index.html","d09f68fd20f93fcece684bdc792f0769"],["/tags/Java/page/2/index.html","2e9c5e1b9fd631b8d9a98ac459ea3b64"],["/tags/Java图书/index.html","945e8279232ab5446a1f7fa1f23930d2"],["/tags/Kaggle/index.html","e3ef4389b0595ec4cc9ae5510b92ccc9"],["/tags/Keras/index.html","7b0be810b8c21b3ef3b5ea16851529ae"],["/tags/Linux/index.html","d9db3fe636519a58c3d18bebe33c60e9"],["/tags/Linux图书/index.html","e0a38a8f1d327019ff75e03adba970ec"],["/tags/MEPP/index.html","01b7252cacdef4d3eb3daf1f24d9d700"],["/tags/Map/index.html","4841211d6d1d28b8f2d69a71d45838fb"],["/tags/Matlab/index.html","4178942557e2bb7b5572ed620d3af434"],["/tags/MongoDB/index.html","1e45bd6d675a80c8907026035594db5d"],["/tags/MySQL/index.html","667d53e53435d98565bf168b7f995f1f"],["/tags/Parzen窗/index.html","ed80e387dd3f89dba1157304ae061afc"],["/tags/PicGo/index.html","847eded3bbc58040fa4f7984bfc9029c"],["/tags/Python/index.html","c8de0c6696bf42fdafc353a69ff39ea6"],["/tags/Python图书/index.html","cee01aa8aee5784a23aaf391c144f6cc"],["/tags/SPHARM-PDM/index.html","e008eeb5ede9fecbc93005f7c43826da"],["/tags/SVM/index.html","e3822d89619220ffddaaefdbd4d24977"],["/tags/Servlet/index.html","f28a069e31361257403e7dea5ae37a95"],["/tags/Sping/index.html","47179282800857f62fbeae535ef3c2e1"],["/tags/Struts/index.html","d73a444d9848bd48282b122c4bd748b4"],["/tags/TCP-IP/index.html","bd9c7926c33a2bfb3ff70b15e5c373ec"],["/tags/Ubuntu/index.html","635365930b66b171bdbaa330a3127e4f"],["/tags/Unet/index.html","ff97216453f0890bd960bd4e8ec49c92"],["/tags/VS/index.html","bd8d82a630f7ecf1665fa94490586c8e"],["/tags/VTK/index.html","032dc29a6c0bbf642b22ab944c94cfcb"],["/tags/Windows/index.html","2d597282ed46af963b4bcdb733129fb4"],["/tags/edit/index.html","f6b46de0c304da173d9308dac657c5bc"],["/tags/hibernate/index.html","3a6adb366c7e1e6b470003f9ff3a09a3"],["/tags/index.html","06686a3c40e4d8942f259bdfa52bc154"],["/tags/itext/index.html","75e2a1b36388312963c1a389fd82b337"],["/tags/jdk/index.html","5be16828fb509c8f203ae0fa9db00aa7"],["/tags/kmp/index.html","df2f981a4fe0cb4d62f368184975721a"],["/tags/k最近邻估计/index.html","90149893e5c56f8ab78c70746ad2b6f8"],["/tags/lombok/index.html","7dbe445b6f716cbfee7bda709b8a88b2"],["/tags/offer/index.html","a4bad58df1f4f19b897eb3e802407182"],["/tags/opencv/index.html","ca8c792e87b4d782d189f7245e7005ce"],["/tags/pandas/index.html","a409ab10cf72ee449c7bf300abca39fa"],["/tags/string/index.html","00d83049a35c0cc5dcee115c0606f8a7"],["/tags/vim/index.html","4ac72a1acb3d43c745af9cbc3ea63479"],["/tags/vtkPolyData/index.html","49b48be1e16c04039a0a2d726fb75a7e"],["/tags/web/index.html","93763e35c41c18ccd8225a1cba8bb405"],["/tags/xshell/index.html","a7b343540176b632bb0f4118d7047eff"],["/tags/yeild/index.html","17ea3242b253668fcbad393f34565efd"],["/tags/互联网/index.html","007737288c8ed733e903f1f07861b524"],["/tags/人工智能/index.html","4a17fbd4ccbdf4727965d51e7d66f792"],["/tags/体绘制/index.html","d841fd9176be71c2a0a1a302661280fc"],["/tags/全卷积网络/index.html","233cd9dfcb4c8a9d4b40fff6a69aa4f2"],["/tags/公众号/index.html","95e3f03d266a6f9ee23890089ec39202"],["/tags/内存模型/index.html","fc3dfb20e257a619731e8201400c1210"],["/tags/内推/index.html","1bcb07a75ee844026e9f1a070fc2532f"],["/tags/函数/index.html","cfd80b0460735175b6d26f58ac1bcf85"],["/tags/分布式/index.html","3293380e3f8936f836cc6d01b804e950"],["/tags/加密/index.html","bd65eb467c3b789bf6096bc28a957feb"],["/tags/医疗图像/index.html","3a89972e7bd97c789574a4db0e4086d1"],["/tags/博客/index.html","f290e8ae73797dfb88513e60ad18b5fa"],["/tags/图像数据/index.html","8b4d0f1b29c27be7d539270043fa1215"],["/tags/图谱分割/index.html","cae9eae5709b862ae5fcd952215de01f"],["/tags/垃圾回收/index.html","68359d18b792c82c65aef50ede59211f"],["/tags/多线程/index.html","034cacf98c5921414b3634a1688d2334"],["/tags/字符串/index.html","76de7f98329a07531de13e0693a68018"],["/tags/工具/index.html","500d83aabba64d1930ec1a7be43ecdf0"],["/tags/工具/page/2/index.html","fa2467f2d8198f72f3aec4d1c3d41a7f"],["/tags/弹性形变/index.html","7f20980d6ec253f34c057020ea2d0607"],["/tags/排序/index.html","89a56d978d0b9dda3fa75138b0a8f79b"],["/tags/搜狗/index.html","9e3fc1cedf79bb8bbeb0fd3a8fb3ebe5"],["/tags/操作系统/index.html","75a923386d6c76b2d267d65eb95307e4"],["/tags/数据库/index.html","960b732043f8a19dd2060a2a6c49d411"],["/tags/数据类型/index.html","b72913ed24b95072d76422f3987a45cb"],["/tags/数据结构/index.html","72551348c742715bd2219f1fa292b0be"],["/tags/最大似然/index.html","2d2d691246b3e07da61b425e518946a8"],["/tags/机器学习/index.html","3e6e2d934eb1deec70e97dd08ba0c613"],["/tags/机器学习/page/2/index.html","d5dd6d65ebea233b61ebeeff8c74023d"],["/tags/机器学习/page/3/index.html","49e77bd4ffe4f2fd9a48aa8e1ea42793"],["/tags/机器学习/page/4/index.html","4d2f85ff46d94fd497052712248b45f2"],["/tags/机器学习/page/5/index.html","44fbd2d377119d82320943d4ed1945b7"],["/tags/树/index.html","925ff5ad4add653de8f450d9f1a774a9"],["/tags/框架/index.html","d2746bccc42bdb4f5af28d3cd6b52fb4"],["/tags/求职/index.html","9af2424ccbd9d89ffc2c2e0942998014"],["/tags/汇编语言/index.html","7ecdc4c2b2c582db4fb3fa92c4cd2635"],["/tags/深度学习/index.html","040f1c03122c14d610403392a3ce024d"],["/tags/深度学习/page/2/index.html","a0db29c907b62e0fdd8cdf8145617b17"],["/tags/深度学习/page/3/index.html","48d1392ae17c5dd6552ff59708f9d051"],["/tags/深度监督网络/index.html","f1106ad44d6fdb4babbb3f83c471f5ef"],["/tags/爬虫/index.html","0649a12e0fd701f75d22dcd70f3a9316"],["/tags/电子书下载/index.html","1875e271962d2b8d8a39af4c978eb7ca"],["/tags/电子书下载/page/2/index.html","d9c69682d2fd902b2849feeb12f87ff9"],["/tags/程序员/index.html","269cdb4706966e3b61f344051fd9c9b4"],["/tags/程序员面试/index.html","cb94d02ea1deafe91f28cfb3024e0475"],["/tags/简历/index.html","5704e3c51fb2437cd59c5f340bb63c1b"],["/tags/算法/index.html","3e2c99b99150d5941636e4b8deecabfb"],["/tags/算法/page/2/index.html","dd8225132506bf8ee90602421af55864"],["/tags/算法/page/3/index.html","a258a78aa29b360ae4d905eef5308eeb"],["/tags/线程/index.html","55f0d70e0408a06409201c36634cca2d"],["/tags/结构学习/index.html","31f8eea6846c79d186d25e92a99d6c68"],["/tags/编程/index.html","6d7a42073d31319014d5b2d785e35845"],["/tags/网站/index.html","12e6cb3c0ecf8f4dd862dc50d9a18292"],["/tags/网站/page/2/index.html","b2fc40edc4d67fe2ee8c9aeb96892e84"],["/tags/网络/index.html","ed8008b2a97c53bc0ee05f0eca0e06b8"],["/tags/网络原理/index.html","adb2360b77e056cfc22da4a09b878314"],["/tags/肝脏分割/index.html","4402819e8a4b3a543f51a512dcf97923"],["/tags/计算机/index.html","b4b8b6b80fac72ea10b569669514b416"],["/tags/计算机专业/index.html","ea7020c550d6266153752323bb067e8d"],["/tags/计算机网络/index.html","b1a86af08bd579f50185189c8c477612"],["/tags/设计模式/index.html","1ff1b7c8da8f3fa9693af4c3c9643002"],["/tags/贝叶斯/index.html","a714e73b2e9f9c5c09c88b76fdc4b68e"],["/tags/迁移学习/index.html","0eae5b1b2ebc545eea4747a845bad8fd"],["/tags/面试/index.html","04146ea985d4359f0c05a692bd82e69b"],["/the-way-of-pragram/index.html","d32576d7088c7791150c05dff4476fa7"],["/untiypro XL安装/index.html","874c9782b7f47cdcab669358961a0959"],["/video-websites/index.html","a396f7e32ccbf326e531e06026eaed98"],["/wechat-fans/index.html","875fb8577705523e875c1b34a2a211f6"],["/window-run-VTK/index.html","ecb4b4c4875b26d02393c1d40aa43927"],["/xshell-connect-Linux/index.html","5c848efffa74b165a8c43d52d5c5fcd5"],["/‌Accessing-the-Open-Internet/index.html","d4ebc9b8e9d1ff261e7a7486b3b9aa65"],["/《Java高并发编程详解》，去大厂必看！/index.html","a05301ca8aa0c4b04b858aeaef4eb23f"],["/一分钟没了 1.5W 。。。/index.html","5dbdf0e23cf01f93c900443716d4ff3d"],["/一条高产爆款内容生产线/index.html","ae9e2fae1f54bf2593d122576db8e62c"],["/为高考学子推荐的六个就业前景广阔的专业/index.html","8477760d3a455385666e99fc5daaa2d2"],["/互联网赚钱机器---社群/index.html","31b9ba56e748152d56b0046a21d0524e"],["/你们常用的工作方法和思考方式是什么？/index.html","c1a357cd5bdf87b8c251d0527441bed8"],["/关于环境配置的一些事/index.html","23fc53af11e7ec3857fe98d4dc38851a"],["/准备了19w！搞事/index.html","58b52f6b42c77f2cf59ebf95c0be6af4"],["/几个很重要的感悟/index.html","bfe878838d6f6971f5ba2bd0b5ae0b60"],["/分割ROI篇/index.html","6771ed45f6379ea67848220caf73172d"],["/分割精度说明/index.html","638c93d3a1a7894cec676ab1321b07a7"],["/分块程序执行/index.html","7b36b77429768f7743c1b5ca166f11bb"],["/加班公司黑名单！！！/index.html","4a90c8a86f24730c5f10e19d198ceab7"],["/卧槽，上知乎热搜了！/index.html","a452ac46bcb1155959c8071a4ea066ed"],["/卧槽，我的小破站爆了！/index.html","1f798aed52647633529b6df74c887d30"],["/卧槽，我被盗版了/index.html","8f519bc721b8476ad27e88bd32af0b17"],["/卧槽，还有985大学在大一上C语言课？？/index.html","e4875ebdadd2651ccc0762d3158d4120"],["/历年微软面试中出现的leetcode算法题/index.html","233c3e73dde5c59c8e49ba408059586c"],["/去特斯拉试车了/index.html","6e0dc48463ae35f6c577ec39dee4f5d3"],["/吃苦的三种境界/index.html","ac3d07c3c6041125865b8c96770ade21"],["/哪本书适合推荐给 Java 初学者？/index.html","bf020d508dae9428c7c8f335742af195"],["/哪本入门级的学习数据库的书最值得推荐？/index.html","22207d609d5d97301abfc4363f8693ca"],["/国内外常用的AIGC模型/index.html","712ebd1ee016be53fbccaba340f50d82"],["/国庆假期/index.html","f6e4b1cad317097c58e04e1e1686f81d"],["/图谱程序字典/index.html","27de9587cfb64cda9ab427b5d7ca36e7"],["/图谱训练与分割/index.html","569383330dc8020f9d08d16dd382759b"],["/宣布一件大事/index.html","9940f1dbd8d2e35710b8ccdfb00390ce"],["/小鹏P7i试驾体验/index.html","36ade60709a98b5aeb11c16f76faa920"],["/微信PC版3.3.0内测更新，电脑可以刷朋友圈了/index.html","d767dc6c24182fedb5e17d040f97ad0c"],["/怎么更快的赚钱？/index.html","ac841b5da21f0a9b007a9aa039c191a4"],["/我毕业了/index.html","0bae20c803dbc1c678213950fd82d454"],["/我！真！的！找到了！爱上学习！的方法！/index.html","9bc1066ac0395d5ebd462cc547f2d965"],["/户口的意义/index.html","13124bf6ec75b617691c1f2b9fa10ec4"],["/推荐两本经典算法书/index.html","81b5b8e1d458336f8dca4cf1b42482de"],["/推荐几个在线学习SQL的网站！/index.html","4514b26e55a3d057f1c9ebf687bf457b"],["/搞了一个程序员成长晋级社群！/index.html","be4429feb3a9878871af2f002fb3ef96"],["/摘抄/index.html","e191955109579ce3a518c51986bb749e"],["/暴跌30心态崩了/index.html","b9b7560d6ea8f533cd32021b6b86c6a7"],["/最近很火的ChatGPT到底该怎么玩？/index.html","2b08a949ae1fea61509cad7bdef1b428"],["/有哪些好看的日历可以买？/index.html","2dae1daa47f86a9a66dabcd89e2de4b9"],["/服务器有啥用/index.html","267b0e6dd7ef02523a843b64a9ada0de"],["/来长沙了！/index.html","4c98160e6d2e80fbebf66738857cd75b"],["/校招污点公司名单/index.html","05a09bdf0985f61b3058f564f68dce41"],["/梭哈200多万/index.html","7b23bbd9f5cc6dc87d8d1dd613bff4fa"],["/梯形图入门/index.html","4643e30c364ab65b439b730b6cfa1ad7"],["/橙心优选，凉凉了！/index.html","173141f663b69e9a2866c80a04496258"],["/比亚迪汉试驾体验/index.html","65bee038d3d73b516e6809837e4b9f3e"],["/清华转学成电，真的牛逼！/index.html","27c3f8103682e0b88c609ab43ced4d63"],["/滴滴程序员被亲戚鄙视：年薪八十万还不如二本教书的/index.html","b6e0931da140e1a2e55058202ca51df9"],["/社群！/index.html","b3192fd3479b2f91f782dfe32ccb76b8"],["/科学上网之VPN篇/index.html","72fa495c1bf15c59f4854f91742e7ce0"],["/程序员必备的几个技能！看完你也是大神/index.html","b36172e526c7af1ae8539b6c2f421d7e"],["/程序员绕不去的槛，Linux！！！/index.html","444ff51d2951fd60da2c5db5f205913a"],["/蔚来ET5试驾体验/index.html","754d2d5bd750c6941a9bb79e08ef4d80"],["/蔚来，牛逼！/index.html","cac6d7424f4de62ab2a8357db9b9e45e"],["/被录取了/index.html","f31f9149b8b137b75921393c6b6aff06"],["/被找事了！/index.html","5e93b165117a93a989617e7a83680f74"],["/被拉黑了。。。/index.html","e2ce7535f698cdf1c29d51ae5ed5ae4f"],["/被车撞了！/index.html","fcdc3180fc75a48d0c6168ce203c4111"],["/该如何选购固态硬盘？/index.html","3255472d173190543dd4cd2041c0f9cc"],["/这本书一定要看！/index.html","a6b6c134247e008bf6d4c2dc9e287e49"],["/选Java还是C++？/index.html","3cfbe9874024472cfd0b2436322400d1"],["/那些让你起飞的计算机基础知识/index.html","779706cafd4391b034ae36a5f7a200c4"],["/靠这几本算法书，成功拿下大厂offer！/index.html","69e0cb0cb5f9a2ee7cbcaffe765ac4fe"]];
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
