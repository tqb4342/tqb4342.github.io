/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/0010-city/index.html","3898faddf12a4eeb4290a3ade7e5e935"],["/10-algorithm-book/index.html","88113e4ce2d42ea4a13000e58a241d26"],["/10-website/index.html","ca4cd211cac436e29754abf87a1a9ce3"],["/100万的小目标/index.html","481a34c3ae43d7cf74f05e9c65ac15fa"],["/10w+YYDS！/index.html","7ea98dc28ecb1d9c232768a4558734f5"],["/10website/index.html","4308b455dd4d11bdfc32fdfb9ec39312"],["/12-technical-tutorial-sites/index.html","1cc7d0a952315e489442aa641bd439d4"],["/2 6 岁 了/index.html","1cee7898e259a0ed0d1ac184bd2d8cfc"],["/200万，啪，没了。。。。/index.html","341c59a35423eced806fdd11bc1dcddf"],["/2018ECCV-Paper-DL/index.html","333988451a637f711372d7e7ba998d5a"],["/2021年固态硬盘选购最新攻略（小白避坑指南）/index.html","640f8e1c675f6021d5e387964c572e5a"],["/2021机械键盘推荐/index.html","2cb1bb05046e664cd2303c9fc2f16995"],["/2025-07-15/index.html","622655ef47ff4089c2ec7a37e7193cad"],["/2025年终总结/index.html","5db0d2bbbbe978ccd55b0a744213e261"],["/2026-Open-Internet/index.html","996fb1e427c8dbada977a58576a44018"],["/2026-best-vpn/index.html","caff3a5371f1c8606ea7a57c91b0d50f"],["/2026-clash-vpn/index.html","cd28c6098b11687cc408b9e0ff2e17ee"],["/27岁了/index.html","207ab3b668e6d012dd2300cd389b65e0"],["/3D-Convolutional-Neural-Networks-for-Human-Action-Recognition/index.html","72d5699ac219f97c6f0d0162246d647e"],["/3D-Deeply-Supervised-Network-for-Automatic-Liver-Segmentation-from-CT-Volumes/index.html","4f3e1afc335eeb3e4cab782d5303722c"],["/3D-Unet-Experiment-notes/index.html","f8269faf9c7e82754dd58d3c17b66acd"],["/4-Software/index.html","37d6036572b5a0636c45838b59f86d7b"],["/6-website/index.html","29d4b7dfa43e1157617f60c7c8d388a2"],["/7-terminal-tools/index.html","d44a4a862682fdd815c7505b2373e056"],["/AI-PPT/index.html","440284579d6e389fe1daed969f9cf95a"],["/AIGC中典型的深度学习网络/index.html","0c9e50ef34427303add3dd0ca08b5df7"],["/Agency-model/index.html","124ccbcc95bfce2c652202b97cd5b3a2"],["/Algorithm-brush-notes/index.html","933d74c0b3b89fda19cc421f85753541"],["/Ali-recruits/index.html","35a17bd84f567a009fbff19a864a0202"],["/Android-VPN/index.html","f0c8062dcce25cdc1edb6fffd85312e5"],["/Android-open-internet/index.html","cb37433990212ecadc3d06001c20aae3"],["/Appearance-mode/index.html","d8689e35b96e155809fc7a54bed0c210"],["/Backtracking/index.html","b37a28321dec60c0ab2112b6f4605fb5"],["/Baidu-Sao-operation/index.html","51c52811d862da8ab1965a5388f85f89"],["/Batch-Normalization/index.html","433547e940d6e9a5a61031d8b712bfb9"],["/Best-AI-tools/index.html","aa1a358c47560ec92a71783a1023a806"],["/Bias-and-Variance/index.html","32eec557c2fec16341c15ace67e2a0dc"],["/Binary-tree-traversal/index.html","30d05a6b691d08d5b2ed98d9b987d6c5"],["/Branch-and-bound/index.html","a010d252bd1ff2a4ccaf5922127a4fac"],["/Buying-computer-for-the-first-time/index.html","e5666c491b3624c2f993c95ec9fb1cc0"],["/B站向北邮道歉！/index.html","f7f59da3429377271862fa26e91c2e4c"],["/C++-string-function/index.html","c1bd38a585fe3f3d78894042371a9ca5"],["/C-Java-DevelopTools/index.html","cf4b05b2f3c10b224fe79a195c94abb1"],["/CS-Classic-Books/index.html","cc32bb4119ec8d8fd368dd55fe66b3d9"],["/CS-network/index.html","9dee0d087c1ee7a017ba951b6f57677c"],["/CSBook001/index.html","6407108f28e2f77ea3803a1b091f0332"],["/CSBook002/index.html","bf3d55ae682f7844e5537ff6e568633f"],["/CSBook003/index.html","0c3a265d2455d25113e7c54e01310b54"],["/CSBook004/index.html","585d16711ba400de23e2b3ff57e3e615"],["/CSBook005/index.html","f11ce7cc3d8647d6f2c09f24717930bf"],["/CSBook006/index.html","dd15dddd539e1cea8f66df99a7792fd1"],["/CSBook007/index.html","03d0c96fb8137bc04a8bf78ffb9ace8f"],["/CSBook008/index.html","2fd666906ee419d6a4f39ac106427f86"],["/CSBook009/index.html","8d21e5eb6e3c4146a935f1bf104d6957"],["/CSBook010/index.html","66ae4e412cd47d529db322050890f001"],["/CSBook011/index.html","d7050e7a9abedb2ab1bb3d608e902ae4"],["/CSBook012/index.html","cd72b9f3a330c8b827e803929920680c"],["/Changsha-really-fragrant/index.html","b13f29e0e909d4187b69a3ad82ee457e"],["/ChatGPT-VPN/index.html","bc98a14b4dd92a283da081f8287b2c9f"],["/ChatGPT/index.html","7dfa1815467f6759239f800c3acd09df"],["/ChatGPT！王炸级更新！！！/index.html","2f17fcacda88250dfd55ca3aa4e9f880"],["/Chrome-crx/index.html","b2bd38a9b2d6d46d9326bd8cd4f75875"],["/Clash-Party/index.html","6b3ea658254c3c2729bbad038d4834cf"],["/Clash-VPS/index.html","11876d6e07903367f1d1c1010ee9f979"],["/ClashForWindows/index.html","448ce539726d1b285dc5fdb252801aa3"],["/Computer-Classic-Books/index.html","775b43cc53e8952eebb5c7301b8fd5b3"],["/Computer-for-another-major/index.html","d6b2065c94fe18926779595c2da46677"],["/Conditional-confrontation-network/index.html","df50f3c8aa9bf5a81be32db6c93a730f"],["/DNN/index.html","9a43a227ef9bed1d49fe45fdebe57db6"],["/DSN-segmentation-liver-experiment-summary/index.html","389b6bc162b8e86f5f8b184f745968fa"],["/Data-enhancement-elastic-deformation/index.html","b45999a754f7ea9ed0ef6fb51e8badb0"],["/Decorative-pattern/index.html","788ccbdad87baad5aa8e0458c9724773"],["/Deep-Learning/index.html","db23fcfffdd96e96df3ec3045744bde8"],["/Deep-learning-and-medical-image-analysis/index.html","897d9b8fdaa8aff30f645827e8c7d6ac"],["/Deeply-Supervised-Nets/index.html","96fee74984905fac29f3c2d646f889f3"],["/Deformation-model-based-sparse-representation/index.html","2973b60f9db3d47ebcba64286edb629d"],["/Discriminative-and-Generative-model/index.html","d4e5c7c48f6b53c7d3661e3a283814ce"],["/Distributed-transaction/index.html","b1ae3d4d7abad2cf67579bb8b46864d6"],["/Divide-and-conquer-algorithm/index.html","6e7456d858b9a3d3c0493e67ba2b95a0"],["/Dll/index.html","2762096ebcb769b0f41da0f5aad0ad66"],["/Dynamic-programming-algorithm/index.html","9764a2c451f4e2574a45a284913f7fe9"],["/E-book-download-commonly-used-by-programmers/index.html","a94fdccd799666a659594d19bc30c19a"],["/EditPlus软件的安装、激活和配置过程分享/index.html","14834553e877299a2c066f823ecbb0b4"],["/Eight-sorting-algorithms/index.html","765d27a724e20076802ad05a0c8bed3f"],["/Encryption-Algorithm/index.html","f703c1e997e6e30c6b126e895e6a8512"],["/Eolink/index.html","e156cd0a680bd48bca6e75fdb9eef6df"],["/Factory-and-strategy-mode/index.html","cdf07884bb565a3965171fe17aaeea05"],["/Foreign-technology-blog-community/index.html","f6957c7722cb2f5cda8d4bfc3a3d9cec"],["/Functional-model/index.html","52cd1a5e5ad9a32323eaf5f05f9c8d56"],["/Fund-type/index.html","82cde83a5c8da5caba7b04728eecb671"],["/GPT-4o/index.html","44b784140edc43a753d0f9cf68437820"],["/GPU-medical-image-processing/index.html","8a9651a251b044a0f2e03ae9b4ab4a03"],["/Gemini-pro/index.html","10a11f5a0f0b6c1b3e9d0d2e2790dd7e"],["/Gemini-vpn/index.html","523202674d7255219ba11f89cfb83d35"],["/Gemini/index.html","3254e67ba1da933447bb59df4d2ed3c9"],["/Generative-Model-of-Unsupervised-Learning/index.html","b53a49dc5bd14e362979289109e96957"],["/Git-Learning/index.html","782fbc85e09d7ae061433d5915bbcba0"],["/GitHub-2FA/index.html","fc2a7deebd053c3aca2cc11f98095e7b"],["/GitHub万赞，程序员必看操作系统总结！/index.html","bfcdf3abe8036f7424eb5579ff4d600f"],["/Golang-book-recommend/index.html","66270f8cf52f3fd74930d92a5f65932a"],["/Golang-learning/index.html","aa130b3c85181d2978e8e4b6b19d0900"],["/Google-Gemini/index.html","fe2cb65b3ebd7fb38e6664c3313ecc36"],["/Gradient-descent-optimization/index.html","2059fb09348372ff77c6a841a22ce74f"],["/Greedy-Algorithm/index.html","09c006ac67f625875d8423fafeefcd2e"],["/HAND-User-Forum/index.html","2ed6add72da6c301cb7daf8422aa51ea"],["/HK-bank/index.html","2bba6a653d1861384e093652f0e8e7ea"],["/Head-to-head/index.html","551a21e3079dd8a1d4fcb96d44fd7fcb"],["/HexoPage/index.html","3fa5e3e697e36300dbb017700ba470a0"],["/HistCite-Pro/index.html","ec122c1eb2f3c94db16b95b19c626973"],["/How-does-the-program-run/index.html","ca3203444a308c1e0f885e61448d9e51"],["/How-to-judge-whether-technologyisreliable/index.html","36b60b1341a8e70690453eeb7d79e027"],["/How-to-learn-design-patterns/index.html","646ee7e3acc72801fd159dda3540eab8"],["/How-to-learn-design-patterns？/index.html","887955080a2412800dac5e840e789a52"],["/How-to-teach-yourself-programming/index.html","15cd5b782cff9b83a732ae6eabf0cfa7"],["/How2learn-Python？/index.html","6c614f7ff3b6e27323783f6c19716a3b"],["/IDEA-shortcut-key/index.html","82f74debfe7c6bd60f3ccdcf41830537"],["/IT-interview-basic/index.html","5f483c30a58d68a006c96a6a3dea616d"],["/ITK-VS-install/index.html","89fbf54ba2d3db74d009d17f90e6bb66"],["/ITK-VTK-ItkVtkGlue/index.html","9ef8e239954dca78914ccbd4b4ee894f"],["/Image-processing-plus-noise/index.html","886a18eb64758624a5a37297bc9b75b8"],["/Inception-Going-Deeper-with-Convolution/index.html","d88ef5c534a782894a88383f98fe755f"],["/Information-Cocoon/index.html","f8e29e2a48fc4c4a28dc52302e757abc"],["/Java-GC/index.html","5be76a8d66fd494d747794ecc3e354fa"],["/Java-Servlet/index.html","256a9479d19d0d06c116a767a7b1dd2d"],["/Java-array-and-collection-sorting/index.html","0d4348ec0f235ad5ff46abba53eabb70"],["/Java-development-tools/index.html","d81cce5d4541d7242af768395ce3e6d5"],["/Java-eight-data-types/index.html","c053af4b74185293ecf77c5affa0f5fd"],["/Java-interview01/index.html","4bfdb0ebbeb4069910cb0b947a301bc7"],["/Java-interview02/index.html","6c25e218ded2bcc7b957ce96cc4bca9d"],["/Java-interview03/index.html","5d058d58fcfee284ac4b19b9d9af3689"],["/Java-learing-map/index.html","43cec33e02bc448f9bd1bd82f190fc23"],["/Java-learning-route-map/index.html","66902015821f20fd7ac6db41225ef77f"],["/Java-memory-area/index.html","28d608b5fcddcddc38d4a31c1904a25b"],["/Java-memory-model/index.html","3e546f0f67a4345b02597f59045e14a1"],["/Java-multithreaded-learning/index.html","b64aa22a9b24b6991d21c4c8e886e19e"],["/Java-project/index.html","8cb78f8d466aac3a25dae4835168d7dd"],["/JavaWeb-Chinese-Garbled/index.html","6a9f2bb25568b53bec3dcfd2f56ad39c"],["/Java还是C++？/index.html","08b95215c37267748b7ab2521f50625a"],["/Kaggle5-step-guide/index.html","09dcb02a9f3cee1227ec8a1f7f5b75d6"],["/Knowledge-points-of-Java-garbage-collection/index.html","4fb5d8d3e367e6bcaac25e5b0fa0243f"],["/LLM-DP-TP-EP/index.html","ca8906247ebeeec823b3bcb4c1347422"],["/Layoffs-Hiring/index.html","5c6c5f8f804adbad61852bd28e79818c"],["/Layoffs-and-Hiring/index.html","e869fb65a6c6511d2578d20faea0f296"],["/Linear-regression-of-machine-learning/index.html","c8098d81de4ae5db82704ca3a096f14b"],["/Linux-Compile-C/index.html","ef997da5dc56ddde1550751725c90477"],["/Linux-ITK/index.html","c2e79c6608e4ce318d597fd5198fc0ef"],["/Liver-segmentation-of-sparse-components/index.html","afa140e0de6ede19a0289495018a5de2"],["/ML-EBook-paper/index.html","9ed8e16a6eeff3f6f9d9e14303d9d756"],["/Map-uses-multiple-maps/index.html","e10452bc1f5785ce9ba8827c24a5ad8f"],["/Marching-Cubes/index.html","c620cfb9452701a72fe4cc22b1f56af0"],["/Matlab-Graph-cut/index.html","7842b231d54b23fb211cf0873439a0b6"],["/Maximum-Likelihood-to-EM-algorithm/index.html","bd00e16a4888f28c028ee2619826df68"],["/Mean filter and median filter denoising/index.html","98c98e07acff485f561273be4296ec74"],["/Medical-Data-for-Machine-Learning/index.html","9da874713f2d3a251bbca08945cda8f4"],["/Medical-image-analysis-deep-learning/index.html","247cbcda387ca32bd041545373775d9c"],["/Medical-scan-image-processing/index.html","0c85bf85c1bb4b79006bf7fbcb8a8f8b"],["/Merge-sort-algorithm/index.html","674c8ec99e77ba9ecccc85b8b96f1755"],["/Monthly-income-2W/index.html","9506e11a5515b7257d9368f13bd62233"],["/Mysql-database/index.html","1d35e1e143a9880153bc1bdd6d008798"],["/Neighbor-Embedding/index.html","9864923d857e0f86879711cc5f70f4db"],["/Neighborhood-approximate-random-forest/index.html","d293bb36e03bf0f782a6e2f6897b341f"],["/Net-and-official-documents/index.html","9a3a596bb25815c070aa8321f6d55ec8"],["/Netflix-VPN/index.html","9a89c39ddcb5fec7c98eadf36ceb7783"],["/Network-principle/index.html","ccff350c0cc0e52e4ff6e0e397d51995"],["/New-Hong-Kong-stocks/index.html","82e90cc52dcde242e2982762e6b0e83b"],["/Nice-to-meet-you/index.html","aefb9a9544012ed9e33eac75c2eaec9d"],["/OS-processes-threads/index.html","f6c836edd3d278dc0d8506fefed75909"],["/OS-run-environment/index.html","e18b8c745cadb4ecb1071840570f9121"],["/Open-Internet/index.html","e6f149dcbd3f673ff746534601360d21"],["/Open-Internet2/index.html","56579db39260e50a7231ca6fc097d6e3"],["/Open-source-community-and-rewriting-website/index.html","e91cb6920766106c7f8184a4c1393f95"],["/Panoramic-image-stitching-based-on-SIFT-features/index.html","cad69a3eaebc96f87ea1a03e3e4c8b67"],["/Parzen-and-KNE/index.html","12b90c76bbdcbd57c9fd655bca22ffe7"],["/Personal-technology-blog-site/index.html","d7588ddbb79e1ac87fb97224b40ca9ad"],["/PicGo-Gitee/index.html","3ef01db77e48264f3f812fd1741b7c6c"],["/Programmer-treasure-chest/index.html","01456342834bebae702f87d4ef4908b7"],["/Prototype-mode/index.html","fb18c40f9342c34cb9047d42edb1f669"],["/Python-base/index.html","473dd3f680d681b71a11b284017dfb82"],["/Python-crawler/index.html","3cad0c4d4b3a2221c3fa9c379e583447"],["/Resume-revision-suggestions/index.html","a21c759f0a48f5cc8d7b476f515ad516"],["/SEO01/index.html","1882e659bf38370f88380311e6e85aa0"],["/SEO02/index.html","2039e75a433f24b1e12ed55d81fdb209"],["/SPHARMPDM-MEPP/index.html","25807bb89b3ffc4b2800c6a7e06db6a9"],["/SVM/index.html","a1fe44e1efefd239f1e7f617c5158575"],["/Seata/index.html","a2b1007cc8522defcf964e79c883307f"],["/Semi-supervised-learning/index.html","28707b2aeaf3252780b71550cd0e186a"],["/Sequential-model/index.html","6d7922b4a6515f563fdec3ae4e3a8376"],["/Shape-Based-Human-Detection-and-Segmentation-via-Hierarchical-Part-TemplateMatching/index.html","0ea0a2014dc7ee9bfccac62a505049b9"],["/Spring-basics/index.html","4c28629eeb5af15c7a41140959fa457b"],["/Spring-integrates-hibernate-Struts/index.html","d468175a74197fd266fb05dea883cfd6"],["/Structure-learning/index.html","12a29f38f876022be478d6a75152b4f2"],["/Suggestions-for-self-study-of-computers/index.html","2cfacf4f2119c7c6ac4ab770fbc9d859"],["/Summaryof-HongKongStock-Account-Opening-Links/index.html","b2d5fe81f1dcb336e885655cf8cc4701"],["/TCPIP-detailed/index.html","7dc4feaa1b68b80d11a7982a0c8d94a2"],["/Telegram-VPN/index.html","cb08bdfe85b580a1f78a9a09d0d2abd2"],["/Telegram/index.html","da4e0fa153d9d9e8a3c04886a8cfbcba"],["/The-essence-of-shopping-festival/index.html","4810ea1a39d023546f5c6df6c84b6a03"],["/The-most-important-investment-in-life/index.html","2ae0ec9f4c174db82dae024b697ec224"],["/The-most-successful-nvestment/index.html","e6d1765ca0d30c8dd90c2b8e2aa7deaa"],["/Transfer-Learning/index.html","afa7ddf965903266d500a01aae9275e7"],["/Transfer-to-computer-major/index.html","3cad1eaee72df8c471458a270e252b7e"],["/UNet-Convolutional-Networks-for-Biomedical-Image-Segmentation/index.html","30d47befb14d4df58e69918738f6552b"],["/Ubuntu-install-sougou/index.html","cca6413f9ab39cb61d7fe9182918af1e"],["/Understanding-of-paying-for-knowledge/index.html","41d321a5b7162499f8be42562a7009cf"],["/Unsupervised-Learning-Linear-Dimension-Reduction/index.html","18b3c8d42f2530d9669ee3e9220e0ab1"],["/VPN-HELP/index.html","e43b42a1617875303893dca13bde2dbe"],["/VPN2025/index.html","1156803556113dc0274ab228e31d059b"],["/VPN2026/index.html","740f66559c642bf0ad996de39bc4a2ae"],["/VTK01/index.html","d388ff20fd428ad267af73b9a3cc9b1e"],["/VTK02/index.html","f4f98093db5b1de9984a0ac5aceed8f4"],["/VTK03/index.html","c80167b0b5e2e8a5d93b0057bfc7e05e"],["/VTKRead-write/index.html","999454f7d543d8a0e1467c0bbebcfad9"],["/Vertx-Java/index.html","eaf889418bc26aeb044b8b6de5ad1c14"],["/Vpn-OpenInternet/index.html","e261088f59da9df0a0f27490b6d0a1fa"],["/We-are-all-good-kids/index.html","57689e9e98397a31a3a13dcdadc92066"],["/WeChat-80/index.html","9d8936dabab5049f933011273b45cb3c"],["/WeChat-red-envelope-cover/index.html","0ef6a47a8675272ecf26fd9abb71e11e"],["/What-is-crawler/index.html","deb65df246c8913dc576c65cd08bb6d7"],["/Win-Internet/index.html","7e40a534257220d8e0a499f0170e34fe"],["/Win-Open-Internet/index.html","360c8835de5301998419a727a15128af"],["/Win-OpenInternet/index.html","7bb9abe4933a69231c132cf5eae1b83a"],["/Windows-Android-Apple/index.html","53edd849557dc22fda1e310b23e8d610"],["/Windows11-2kfans/index.html","3997bcd472801a1c2854b1cef87e71de"],["/Word-Embedding/index.html","fa4e32fc7b8db2f1c15edcad4450ed51"],["/YuanShikai-and-his-Beiyang/index.html","49f7fc66f1b4f5c9f6c1c695b5189a40"],["/Zero-copy/index.html","33d67991e540ab78678ba0a3a4eeed73"],["/about-keras-model/index.html","ef22462fc887c15fe46acc249f1cccee"],["/accounts-google/index.html","2a588773c8e8964a1e046736f340c0c5"],["/algorithm/index.html","df4f0573394a474b5f3c7c7666aea4d7"],["/alibaba-Java/index.html","f20a3d6f39070adf601b22d0dc63cb03"],["/archives/2020/01/index.html","8ffc3a59c6edc08166eb311e9239b773"],["/archives/2020/09/index.html","7d7f73d6592330f7e1975a437eed6591"],["/archives/2020/10/index.html","ef079c9e96e40c27060b8169501af9bc"],["/archives/2020/11/index.html","b21359659232595c22088be625a8f382"],["/archives/2020/12/index.html","95bbffc7d1fbfba693474fd884f562c9"],["/archives/2020/12/page/2/index.html","39ab5dd00810eebac04aad89bc9e442b"],["/archives/2020/index.html","0c993bbc72be85e78cca452f6b1b37e7"],["/archives/2020/page/2/index.html","43b55eea6351ac98f26c983af6868e2c"],["/archives/2020/page/3/index.html","925d6a4d6964fb65b1c70458ef3431e9"],["/archives/2021/01/index.html","36797b1636aef7bbe7c4047525d45ad5"],["/archives/2021/02/index.html","5d9855ed5c0582ea4db5f8f496fd5d1d"],["/archives/2021/03/index.html","693471e6ef2c78563bd10ad4395253fa"],["/archives/2021/04/index.html","d57fd39f78d288073500788b5f3ebdc3"],["/archives/2021/05/index.html","8363dbc4dd0b33e8865e1998bf650cd1"],["/archives/2021/06/index.html","13e66946f77516a2438d2fc58fffc38d"],["/archives/2021/07/index.html","c9f0cd20541d3d15df8655f118b51b2c"],["/archives/2021/08/index.html","68617a37d1bdcedf10af277a1c2659e8"],["/archives/2021/09/index.html","0e58b3e38797fa711cacd25f527a0c2f"],["/archives/2021/10/index.html","1ad1182c28afbc47d7a4d9357960860c"],["/archives/2021/11/index.html","391f689693e2a4a3d9213d076ab6c39a"],["/archives/2021/12/index.html","6d63b59307b6c21b5d3cf2ff00274b78"],["/archives/2021/index.html","1f1342bbcd26e009474d7b5392a95fcd"],["/archives/2021/page/2/index.html","13f2156c726de37a2bacb01e1bab5bf0"],["/archives/2022/01/index.html","410fef324ff6640f49d778a40d30b005"],["/archives/2022/02/index.html","a09511534bda1404b3835857db162cc0"],["/archives/2022/04/index.html","c09f94ce5e9e8929b0f074fc3d41dec5"],["/archives/2022/05/index.html","cfe1b9a37139b1e91d748759f8b3e84f"],["/archives/2022/12/index.html","9666a63cee63dfd1be7c03df9f2a9bbc"],["/archives/2022/index.html","28756e839b3c7bb836756c19b8955c8e"],["/archives/2023/01/index.html","2bef6cd21a9ebcca33d14af613bcfdd5"],["/archives/2023/02/index.html","e6982e3742f32a06135686c937f44236"],["/archives/2023/03/index.html","660b1d663f3ebedd98289c70ee3992ba"],["/archives/2023/04/index.html","29d1a2371b0e785ef401b7976800ad8a"],["/archives/2023/06/index.html","2b0f93b0974fbf1389afd624094d8bd9"],["/archives/2023/08/index.html","e072db6947549a28ef4eba4b696c1ed6"],["/archives/2023/10/index.html","a03f006df7fcd47505d7c26f58d4f95d"],["/archives/2023/index.html","f81151fdb0df1ec69160288b3c3d05f9"],["/archives/2024/01/index.html","475ee45829568e541a7bb9baddd0cbca"],["/archives/2024/02/index.html","f00d1cae599a2c884234c2a0a776fd2c"],["/archives/2024/index.html","f134f2dd1ac83bf15beb48b6916ad4b4"],["/archives/2025/06/index.html","ef671aa88a2699a0156f3ee89d624df8"],["/archives/2025/07/index.html","4fd593dc9165baf98b3e656cd716cfb1"],["/archives/2025/08/index.html","8987ef46b7cb60d8463b67aa791a748c"],["/archives/2025/09/index.html","5d862419b0c07e4a892012df48ae4db3"],["/archives/2025/10/index.html","e66e3650c1bcefa339f46ac0e9b74385"],["/archives/2025/11/index.html","726c8f0fdaaf088eba9bfb95ddf5e9e4"],["/archives/2025/12/index.html","2e482011a0f7ee9f48dd35451bc7dc71"],["/archives/2025/index.html","e018db4254b891f4117b1f713176492f"],["/archives/2026/01/index.html","42dda193d2a0263b964c27671b25ae8b"],["/archives/2026/02/index.html","b146c4aa901e4e1d02214965694dc51d"],["/archives/2026/03/index.html","842709a8629c616a0557af7cc11ebd64"],["/archives/2026/04/index.html","2b8cbe1f2d242dbbcc1e35b44fd2dc93"],["/archives/2026/05/index.html","0d3bea17befd90a26368476a60bffe27"],["/archives/2026/06/index.html","7567364bafb4ca47b593ed87c1c1e0ce"],["/archives/2026/07/index.html","bd8dd02a32bb5f8ec94932576d6c0c54"],["/archives/2026/index.html","ae78f7c48d2bd054673c2577c643a8f0"],["/archives/2028/02/index.html","a34253b211aeff800e3a9c906d2dbfec"],["/archives/2028/index.html","988b2ed701f1296e4da465c1d088df55"],["/archives/index.html","be5fc7c5fc4b640f8f65f6adca14cb83"],["/archives/page/2/index.html","b321a32163286e0780f995352c6e31e9"],["/archives/page/3/index.html","0a430424386198fd54ca7ceae6e51771"],["/archives/page/4/index.html","26c7b4064875aaac8c4e61ab762ddc54"],["/archives/page/5/index.html","c5e2f9f5dba87b3ba97284491fe16fb6"],["/archives/page/6/index.html","8101dc61e28055c3a6275f8f58855ca6"],["/archives/page/7/index.html","434d0d44a6ce3783e2479e29e5605b30"],["/baidu-search/index.html","692e13f94f557b32552ee8805a6cd981"],["/baidu_verify_code-Hh2fKNlEB1.html","6e531775f8f8d39d2ec2fd08e2cd5ad8"],["/be-a-programmer-instead-of-a-code-farmer/index.html","34ad3258d1bd5fa30484250c334286b4"],["/best-vpn/index.html","e333319ea924eee2780928f447a6452b"],["/best-vps/index.html","017c27f86960c2b149ad469456d11d88"],["/bought-a-house/index.html","d0fd69619ef6bc07e235c3532d61d6f4"],["/categories/AI大模型/index.html","25a6a7697ca56d58d57d5155c9baed48"],["/categories/C与C✙✙/index.html","a7624c19e96269dcb7f1d8dfb21fef79"],["/categories/Go语言/index.html","053b6eb1ea0640fd12645fee7616a068"],["/categories/ITK与VTK/index.html","8e46a0d2bc6b7a106449b4e5afa26250"],["/categories/Java/index.html","64b3145077f9833049b2b6a15468b889"],["/categories/Linux/index.html","48eb4dec2e61b13bbff3d45a96d247ce"],["/categories/PLC/index.html","fed008157775596b8fe42339321848d7"],["/categories/Python/index.html","25c95467e544547c91aba0c31dd46634"],["/categories/SEO教程/index.html","fb5dd281ab7a81929cc99280b1e9117f"],["/categories/index.html","e32c6a1847e0217f5a302910893b7694"],["/categories/图像处理与机器学习/index.html","d0f630dabf474095fe6fc8d72b8fa5ef"],["/categories/工具/index.html","33e072059c3d8a902d1e4003f554c922"],["/categories/技术以外/index.html","c7863b5b88f030ceee080bedd3f43f4f"],["/categories/技术以外/page/2/index.html","82b9ca3ff04f299ce203ee7d23aef654"],["/categories/数据结构与算法/index.html","f8a0f83d65ab87c6de10f8d3b6fe6a96"],["/categories/科学上网/index.html","04ea843a05b6b97b5eb3995cd3552c8d"],["/categories/编程经验/index.html","5d792f6703ce896cc33a354b3c0bda0d"],["/categories/编程资料/index.html","2cdcc88862278a010baa93cb53ab9870"],["/categories/计算机基础知识/index.html","3dace82f210204c2e33a34029e105aad"],["/categories/设计模式/index.html","429fff93c249b1b369cef0f9084b528d"],["/choose/index.html","39f1df98b988eb7835ed86458a9016a4"],["/choose2/index.html","ca67f05c7eb8e88286417e7d72f0f598"],["/chrome-crx-intruduce/index.html","247799ad1031284ddb798b7d92b14a3a"],["/clash-free/index.html","e9e977f4cefbcc519bcf89a123bb2380"],["/clash-pro/index.html","f6342ff30d382f1c2c087e5d59ea0abb"],["/clash-verge/index.html","9cac7dbc8cb136aacd4a3fc7d9c86e49"],["/clashvpn/index.html","f9cee0b8b064852f31a3f5e17467bc5b"],["/claude-code/index.html","1d701401acf92ccd87c32f631a18ee26"],["/coder-blog-website/index.html","ee7e1876f1496867eb4e0c9bfdead98e"],["/coder-source/index.html","ea0d7e74fccd79c26fe2729d8716a99c"],["/coder-videos-website/index.html","ddc4323d70f7ef5719c7f78e615a749f"],["/computer-book/index.html","864b67e50c00fd077717b1854136413e"],["/computer-censorship/index.html","fc7502281e7eed3ff65bf50d00e58836"],["/computer-network01/index.html","f3ab219d114e18164d0d1be29818e1b8"],["/computer-network02/index.html","54402a89bdf19ad51416322cbe5a22ea"],["/css/main.css","bc32ad34ec4990d934c3c647bdb62f79"],["/database-Mysql/index.html","2805f5067199e4ba570fc84016244089"],["/eclipse-lombok/index.html","7cd9d3621f8438b06bdf1da36983f8b2"],["/freego/index.html","cb3be6f54f3365d59409852ef107d3a8"],["/fully-convolutional-networks-for-semantic-segmentation/index.html","38a8e07573afa964bab3744f5d9e1f7f"],["/great-firewall/index.html","6ee69d9da78c7bd4870251153c5d1d3b"],["/halfrost/index.html","114092df52cdb022e26dac3bf41bdd87"],["/how-to-signup-chatgpt/index.html","27d7226c8270ab12ab84e57050b5eee6"],["/how-to-use-Gemini/index.html","0227cb01a32750f90b168598b9f1ff7e"],["/idea-continue/index.html","25d27437a1fdced733a85e20ebccde09"],["/index.html","a957329843ab6bba9b133fa622ad9d26"],["/internet-dir/index.html","1509191402e30e7b5017c879b8127d22"],["/ios-open-internet/index.html","29e71f85dfb43cb77ad45ce65bedb601"],["/iphone-open-internet/index.html","ce7d44c526d98e0b03d85dd2e471ca75"],["/itext-makes-pdf-form/index.html","1ebcf9ecf3da67137cad0189b40441d6"],["/java-Set-Map/index.html","1e890b82fb8046da629015099a973993"],["/javaweb-server-error-codes/index.html","76bbb1fc2d054cff04be851b1124139e"],["/javaweb-source-code/index.html","6881bfd85ea52d1fdd2623955d566aed"],["/js/lib/busuanzi.min.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/js/lib/lozad.min.js","47904d34a224931dd1b615c59a3dbe3b"],["/js/lib/prism/prism-coy.min.css","0ccad54d95845901ead59bfd3ecceb14"],["/js/lib/prism/prism-dark.min.css","a4711d2957d6605eb5682bdd228cf123"],["/js/lib/prism/prism-funky.min.css","efedcdccd7a9ab342d2d9cacd24920af"],["/js/lib/prism/prism-line-numbers.min.css","38e22e790c279bb56f9ec4b90a2a2d58"],["/js/lib/prism/prism-okaidia.min.css","5ac6f9de996fbec68aaa106dfb16e061"],["/js/lib/prism/prism-solarizedlight.min.css","ecc7e64d039873ffcf7fb27babdaeb5a"],["/js/lib/prism/prism-tomorrow.min.css","456af2a14ae4f5089939d5904ac40fe8"],["/js/lib/prism/prism-twilight.min.css","ebb5c355332a8cf9a1ce37a2a69d678f"],["/js/lib/prism/prism.min.css","a5234d614834658887cec6a9515890f8"],["/js/main.js","052d2b299d9c750afea8df0b802ab7c1"],["/keras+TensorBoard/index.html","29033c2ea4b7facda7e2864066a3dc52"],["/keras-beginner-guide/index.html","a32d00b8005bac56f103389c51337b81"],["/kimiclaw/index.html","7e1b320978c835491dbddfc8b4dbb535"],["/kmp-algorithms/index.html","748b74974c8e17e7a4a826e41762d7d5"],["/leetcode-Java/index.html","7acab06a46fd5193f2dd0873c7248530"],["/links/index.html","960825de17e81e5257a62f37802c9a0b"],["/linux-java-opencv/index.html","d907a1217b91caaa7501a8b5444efb4e"],["/magic-internet/index.html","aab6b6657715c89d08d554b39fd886ae"],["/magic-vpn/index.html","8d595d7aacbe3675032aa9cfe7366ad8"],["/mingci/index.html","d105614c33d782036f722397d709b6b8"],["/mobile-vpn/index.html","315e4441d7fbe71067c546bcf50ec285"],["/msb-source/index.html","28088a4153056da0b46e3b8c41c279ba"],["/online-BUG！/index.html","75dc5cb6d8a3db26e12df205fdfccc00"],["/open-app/index.html","d5cc83d33a228c5d947fe62b27bd8366"],["/openclaw/index.html","647c029cd5c44e09d1fcd2edb3ac3f04"],["/openinternet/index.html","30ffef7ad7238e9de0093436f10b5fd7"],["/page/2/index.html","9804ba376432884c2d1b11bdce74f9db"],["/page/3/index.html","3e66c4fbfb6374ba40a8f5accb80baa1"],["/page/4/index.html","961c840ab27fe0ac4928ae28fcf6fd46"],["/page/5/index.html","1bc2dcfd67486c920d6a3c71195e5d07"],["/page/6/index.html","7abd10105c74fbb508142932a6efbac6"],["/page/7/index.html","142f809af0a4d2f2af5d5bd67d900430"],["/pandas-data-preprocessing/index.html","f34ee654383ef8fe40f6872e63abe53e"],["/phone-win-open-Internet/index.html","281c1f66b0273640941618c3f17847b4"],["/popcorn/index.html","764815be16e4695274151ca277936f46"],["/protocols/index.html","6967b7955295fecfbdf0d649279b222d"],["/python-Blog/index.html","daffaf25d478560fd9a1abcedbe9d286"],["/python-yeild/index.html","51ab34d36d25780c4b1ecb64422e1b63"],["/python爬虫教程/index.html","5bb1ed67ee8b91f47d4d9f23d1cafbd7"],["/rmux-agent/index.html","811915677ab8d4dace952b9546d7ea37"],["/route/index.html","2448d563852c16bf3262266e72835087"],["/search-help/index.html","1f3158689783e6e02953a1875930edf5"],["/software-copyright/index.html","b65bd9a2c88a7674194a2799c0849e96"],["/sw-register.js","e42d939f4651a347e13a0fc18539d1e9"],["/tags/AI/index.html","3eb138b2ebc4dfdb4afed372295b021c"],["/tags/API/index.html","25ccae9c622cb4a0c106cc23c7647a5c"],["/tags/C-图书/index.html","f00ffbbbdc134170aa4cd29c4f22aee4"],["/tags/C/index.html","6bf4d93bcdd2919b9857f5cd5fb80185"],["/tags/CNN/index.html","45b0903aabe07f6688a5088c624504eb"],["/tags/Chrome/index.html","e45b9b0aea1f45ca546c7ee1082cb374"],["/tags/Clash/index.html","9eae7f3765b9b12287002bec295ad6b1"],["/tags/Clash机场/index.html","174c0d79de1951035101db168d71a0db"],["/tags/C✙✙/index.html","f03ad4618c248ab89c4c435d37597da4"],["/tags/C语言/index.html","298defdc3b79c14a0e21de1993b38d91"],["/tags/C语言图书/index.html","7cc974efb210799f33317d9a72ff711e"],["/tags/DSN/index.html","e500206fc65d445a6ff800d5db6dcd6e"],["/tags/Dll/index.html","fe8d59519b8313873994b02d5ed4f681"],["/tags/ECCV/index.html","c00cdc32ba9abb158cd6b9f4c88ff30a"],["/tags/EM算法/index.html","798c797d4a20a84b3e553856ffea998c"],["/tags/Eolink/index.html","5635070d140beb15e9a86610ae3906d5"],["/tags/Gitee/index.html","f2588b6123955faebe9d107a16656fd4"],["/tags/Google/index.html","9185c27d010972de9d57c49fbea76605"],["/tags/Go语言/index.html","f44e1915f2ae6a32ae17c8ca45bb1d87"],["/tags/Graph/index.html","b73d89e2c5ffef67677021884bd0c71b"],["/tags/HTTPS/index.html","72e216785f6a2922f07d6e2543450e9b"],["/tags/ITK/index.html","7a6079d0f4fbfa724681671fbbb1fd05"],["/tags/ItkVtkGlue/index.html","b48ada24db3d5afd93d302e134c47ab5"],["/tags/JMM/index.html","8876344157bb6d4917c1745c06b1a5cf"],["/tags/JVM/index.html","669e094edb147044e1d908464c79bbd3"],["/tags/Java/index.html","d97a806e25e9c37de22ff605cb0f9653"],["/tags/Java图书/index.html","744f7f27d07d82530e878df93a234c5f"],["/tags/Kaggle/index.html","0d36e5245733e99d18ae8fea7b2373f8"],["/tags/Keras/index.html","dc58e71b6fde1ec13f213de8a728a33a"],["/tags/Linux/index.html","0d145f18988ce32f74313cd39144d46a"],["/tags/Linux图书/index.html","acf06294e040659631930483000d4ece"],["/tags/MEPP/index.html","5472f88f5b45c52cfe796c49958cf3a7"],["/tags/Map/index.html","2a708b26d094cc1b8c63b874b5245c3c"],["/tags/Matlab/index.html","bacaa56fa78d9a5067aa6e21446afb6d"],["/tags/MongoDB/index.html","74dab20eb1335a0b7ee96c59e253fd9b"],["/tags/MySQL/index.html","455051f2acaa490fe6656db0b8eea0cd"],["/tags/OpenClaw/index.html","feb8a0db6a1145b2a890a890ff84a7fd"],["/tags/Parzen窗/index.html","8f1d8d7a85d7be58cab136ff5ad2cbc9"],["/tags/PicGo/index.html","b9f0a06e2a90c36311a2b1dd469c8fe5"],["/tags/Python/index.html","7382f4b89564d3e2dc54f8943dc66ca0"],["/tags/Python图书/index.html","25f87617ff9cf103044d15a678055b0f"],["/tags/SPHARM-PDM/index.html","175331fe1b8311bea10e39f0a2c039ad"],["/tags/SVM/index.html","bb76eaf5bbeef479d45288eddd204bb9"],["/tags/Seata/index.html","05f3fb53e92c9da1e43d9eaa4c2a3547"],["/tags/Servlet/index.html","a801906b9f6ec243ae1456817b5f3d34"],["/tags/Sping/index.html","bddd1b206ba67dd2960dc572407a62b0"],["/tags/Struts/index.html","3bdf60c881d20270ae1d7c4e19a24481"],["/tags/TCP-IP/index.html","fff8b96ded7a1c73d8fce15bf365cf60"],["/tags/Ubuntu/index.html","f54f6640de5c388a4234afa150f73148"],["/tags/Unet/index.html","fb057c82a9ecc6116c4ffc34f11c51a3"],["/tags/VPN/index.html","2366e5b2b169ee51f460d4e14487c6c4"],["/tags/VS/index.html","8e63eee803798aa08391972ce77b2104"],["/tags/VTK/index.html","7177c8b09117045ef1e2f36c1130b17b"],["/tags/Vertx/index.html","2bcd6c286756daec4f8aac2fd8d13f0b"],["/tags/Windows/index.html","704acd0ebce392dbb85e68f00ca64788"],["/tags/Windows翻墙/index.html","b18c4385f1c958572fb12395e297bf1a"],["/tags/claude/index.html","af95674db2ff5bb8fff1f7395fa81c93"],["/tags/edit/index.html","8c862171cc6e23693322feea0876ad81"],["/tags/hibernate/index.html","13203be156ccba9335abc10291d7bde6"],["/tags/iPhone翻墙/index.html","317670ac05b053d731cb69045d3ca1b7"],["/tags/index.html","dc0fed3fc9932ac7ff889392baee1195"],["/tags/itext/index.html","75ba631643dfde2086ca719ce58da249"],["/tags/jdk/index.html","f812c65166df44e15c10cc5474d7a40f"],["/tags/kmp/index.html","8a6fa69f3a61c1c0246dcf6ebc9b5b80"],["/tags/k最近邻估计/index.html","51b016eb86badcb3ed7799094b05c19e"],["/tags/lombok/index.html","5db8661368c958938952e6a4fed2536b"],["/tags/macOS翻墙/index.html","486bbd53dfd14bd14d7aed068d3ff5e7"],["/tags/offer/index.html","97ed43a94276798330edf0ad4d14fc0e"],["/tags/opencv/index.html","a3ad75eaeba3392ba17c0b4f368c0ca6"],["/tags/pandas/index.html","29cb1fc1331b5cf491b46a49670d46c0"],["/tags/rumx/index.html","457e73f06bfe604da283f945b01f9c86"],["/tags/string/index.html","104a28dfb9dc1f496d1a52d2cd69de7d"],["/tags/vim/index.html","338291177b2a8993b9f847f4e39aa879"],["/tags/vtkPolyData/index.html","7df2b5e4af729a5a4cc46b16927a1025"],["/tags/web/index.html","04c6e21002c68cf6e4f9e33b6021af6e"],["/tags/xshell/index.html","5839a579b4ea306c8365fbf3280d797e"],["/tags/yeild/index.html","5f226c33ecc457849b8d75903b62a25b"],["/tags/互联网/index.html","b3d5fd51d1b65401a26a5d6f7f85abba"],["/tags/人工智能/index.html","8279f4d1866a9b78490583f31bd47269"],["/tags/体绘制/index.html","34400a790f8afab5f0a910a99e840399"],["/tags/全卷积网络/index.html","41bfdfc473899ac982467353c6dbddba"],["/tags/公众号/index.html","60802553c79fe2d52674a158c429ae8b"],["/tags/内存模型/index.html","dc516e2c7a85848e8234718f23e8efb7"],["/tags/内推/index.html","fde3a9ea110a54de5214eb19a099d789"],["/tags/函数/index.html","c87e7f66c6b294e0cbf98b1f812a35c1"],["/tags/分布式/index.html","4face161d2ae1afe9fa500ac1f5ff414"],["/tags/加密/index.html","507801dc5401b0540e30374e1ca743e7"],["/tags/医疗图像/index.html","788d41e011902dd523e38188b32c0372"],["/tags/博客/index.html","e8d908be2681a59434169d7744d79fd4"],["/tags/图像数据/index.html","0832e39e21d9d0c94ca2837ff1fee3f9"],["/tags/图谱分割/index.html","b9e632176d8ce69636c6636b35b5836c"],["/tags/垃圾回收/index.html","77054a6ff465d727c937f96d6026d1d4"],["/tags/多线程/index.html","7d9be829cf3f90c75d6ba8cb360d6afb"],["/tags/大模型/index.html","73d58d7fd0504ababbcbf3c85ba0e522"],["/tags/字符串/index.html","d67a839029964c0c3aaf1a8321e612ba"],["/tags/安卓翻墙/index.html","1c7045ab5bc86ec6b5c1b853139aa2fe"],["/tags/小龙虾/index.html","51c2f9c4656fc8a5857f574ee14c884f"],["/tags/工具/index.html","308c395a96475fb9cdbd5fb56bb9c207"],["/tags/弹性形变/index.html","54195b0e2254058662886b1f63835585"],["/tags/排序/index.html","b5e43a5d9ac36ebc7803754ff1262857"],["/tags/搜狗/index.html","99c43e108ecd024fa9c6c107a6c40bd7"],["/tags/操作系统/index.html","90163bd0ecb5bef143e5b43410c68db5"],["/tags/数据库/index.html","e5dc279d2fbd87438907013ca60a8184"],["/tags/数据类型/index.html","a5799b9fbe7c2abf1b677c5c1af4a1f3"],["/tags/数据结构/index.html","352437329a98e272cd5d3998c3383666"],["/tags/最大似然/index.html","434975613df4e7ff55d390627c095023"],["/tags/机器学习/index.html","ee6b0339ec4b2d9ae165f8894153958a"],["/tags/机场推荐/index.html","276dc7487a3e47470a27ce59c94c4da4"],["/tags/树/index.html","be662bc6ec8b39134017805f914f976b"],["/tags/框架/index.html","1067ca8ea46b47f335cc3d93730ac176"],["/tags/梯子/index.html","97a887a45e48866725dd823ea227c651"],["/tags/梯子推荐/index.html","3f7bbaba9acb9106c25a11a69328e8d5"],["/tags/求职/index.html","a368a544fa2710512f44cee82ce48eeb"],["/tags/汇编语言/index.html","3c90e3a9399bb9fec178d84a885de115"],["/tags/深度学习/index.html","e55cacf0863c2b822c7cca6440c2fe4f"],["/tags/深度监督网络/index.html","a0e24b6b5b4f847adc313eb56c901c57"],["/tags/爬虫/index.html","c9b727da19f7dacbd583c0a00102f919"],["/tags/电子书下载/index.html","7257b331f274fdd3649778bba1cc550c"],["/tags/科学上网/index.html","201e1226cc6b2a80fedaa46c6461600f"],["/tags/程序员/index.html","acf55ff12a68292d4b913e08f187a5e7"],["/tags/程序员面试/index.html","5dbdb8187558e59f011080e15753a2ac"],["/tags/简历/index.html","fc9496393d8b9a5eb0139b7b19932b3e"],["/tags/算法/index.html","eb2e14568e04900159b1331849f05df4"],["/tags/线程/index.html","66a55015f66b486a53489263e75bfb2e"],["/tags/经验/index.html","aa3520dba59e55c7cdd80298864f6f4f"],["/tags/结构学习/index.html","944ee5da415489ca1f52aae083b17426"],["/tags/编程/index.html","2026ebb53ced3707275964453f0f947f"],["/tags/网站/index.html","13107e110415668cc584a01071dd1535"],["/tags/网络/index.html","6bc7c96c295c6c93d3798e01ab1340ec"],["/tags/网络原理/index.html","71034870182ad799a390fa69a96e6bdf"],["/tags/翻墙/index.html","4015d47cdff92300a779ba77b69005b1"],["/tags/肝脏分割/index.html","e6bd476f3db11f66692dd5ef182d6eb3"],["/tags/计算机/index.html","c1723f99611fbc0085e839cc1448f61e"],["/tags/计算机专业/index.html","27ff6e415433a925dd3a8d8e4d2f4238"],["/tags/计算机网络/index.html","6fa7fb60c413420670125d8e85906fc7"],["/tags/设计模式/index.html","19c61758d39e36aab8eb3fdf82057be1"],["/tags/贝叶斯/index.html","fab0d692cfd1611abb1c2ce40d996408"],["/tags/迁移学习/index.html","d45a7e6bd6829ebfdec8edde92069258"],["/tags/面试/index.html","0eafb04d592cbdea803c3268162d77a2"],["/telegram-search/index.html","9b672fc6659e77d5ded9acd966d8ecff"],["/the-meaning-of-reading/index.html","9c60d30a65e6bb2e98f8bc75336bb2f6"],["/the-way-of-pragram/index.html","7bf3fbf7ee822194efea06e1499c4ea8"],["/troubleshooting/index.html","10300d7355e64f396d5c5ced3fbfa257"],["/untiypro XL安装/index.html","d58ca4d28c2460d99fcb3a2c1f468a2d"],["/video-websites/index.html","3fab6866f5d2229baa47b0a3e0d6cb72"],["/vpn-freego/index.html","7f2e44afe3190a51bc5a886f3e28994b"],["/waibao/index.html","0647b01d665a7846486db4476951862a"],["/wechat-fans/index.html","a105b0c953c44afc34648be6a509da8f"],["/window-run-VTK/index.html","39028ad5e0b369984495e13abab8131a"],["/windows-science-internet/index.html","4058ead68ded5205a87067561d5a0fad"],["/xshell-connect-Linux/index.html","c139bae3a7df25600a6998f65c0559e1"],["/yzhx-vpn/index.html","14edafc57b7c898220349f53c61fb052"],["/‌Accessing-the-Open-Internet/index.html","9e22322eabd08bf8822fc27cf3dddfdc"],["/《Java高并发编程详解》，去大厂必看！/index.html","71aeaf88196971fff173b92de682faf7"],["/一分钟没了 1.5W 。。。/index.html","cb3b885f07a8bc8be64438cb684b2af9"],["/一条高产爆款内容生产线/index.html","56636915661d7803a664970c8d67a3c7"],["/为高考学子推荐的六个就业前景广阔的专业/index.html","c183035dc60eac898f7c78aba8235fe9"],["/互联网赚钱机器---社群/index.html","bc5b9b7299da2ef8a222604a561da00e"],["/你们常用的工作方法和思考方式是什么？/index.html","5cacf475fe44c68e55423960b39ced11"],["/关于环境配置的一些事/index.html","426532b66ba508ebbb5f1950a146fb7a"],["/准备了19w！搞事/index.html","58deb245d960fe89415f103091cfd180"],["/几个很重要的感悟/index.html","69dcea1eaa6193c632c55db4552df3ae"],["/分割ROI篇/index.html","726395da1f355d3db4ddd6c6b25cc350"],["/分割精度说明/index.html","766a96bda5217fca6f0e8d28cccbb3a2"],["/分块程序执行/index.html","db6fc89b8c3f331636ab0e0f914ebbf9"],["/加班公司黑名单！！！/index.html","ad1e820e6b056dd55e4c26d69ad7d756"],["/卧槽，上知乎热搜了！/index.html","0b95ead1f63eaca72803baa871389590"],["/卧槽，我的小破站爆了！/index.html","61f02f8b9374878f1b3ac061c7edef4c"],["/卧槽，我被盗版了/index.html","9801c12c3700e8e327317b08e6d342b2"],["/卧槽，还有985大学在大一上C语言课？？/index.html","2e0f68b6e9058533a447d68d1f675cc5"],["/历年微软面试中出现的leetcode算法题/index.html","09ed3d124bf35122da8c0094da5a2609"],["/去特斯拉试车了/index.html","41291c3052c0a2d832a818b6c56c896b"],["/吃苦的三种境界/index.html","61b1b0c2c257b8ee1651eedcac008450"],["/哪本书适合推荐给 Java 初学者？/index.html","b080751eb9e91f0a59b75133a3e98177"],["/哪本入门级的学习数据库的书最值得推荐？/index.html","820933937a86badfcec3a1b354e84f2f"],["/国内外常用的AIGC模型/index.html","5d46e5b49fccdc328f7b7f2832a5c9fc"],["/国庆假期/index.html","a1ce14fed39643a78e9f2697a5d8f4b0"],["/图谱程序字典/index.html","746485b0cc9e1064670cd799b87c6923"],["/图谱训练与分割/index.html","8f8b2d437f03b998bdbbafc8db4d5703"],["/宣布一件大事/index.html","cb6d0b51a782f92e8c927dd9d0662987"],["/小鹏P7i试驾体验/index.html","cd097135588bc9869a95117b64175a0f"],["/微信PC版3.3.0内测更新，电脑可以刷朋友圈了/index.html","a923e5ab774de643ae5a7e584142b9d8"],["/怎么更快的赚钱？/index.html","e3819209c5e31d0f903c5fa71c8d35bb"],["/我毕业了/index.html","2faef6b99a6d2df5494ea567cf9f1b18"],["/我！真！的！找到了！爱上学习！的方法！/index.html","86b2e9f976e31e48eba5ebfbf978f6f8"],["/户口的意义/index.html","42f094c4fbb3d7c57cc84a9d901bb71a"],["/推荐两本经典算法书/index.html","41a08dcb8b2f73657b3e8f1c55117a29"],["/推荐几个在线学习SQL的网站！/index.html","0ab08ac5a2d4f33f6ec3353e6ebf7d3c"],["/搞了一个程序员成长晋级社群！/index.html","d0169c4af91054d3eb2526559ae14298"],["/摘抄/index.html","595538db5f854a2788305acb65f8dda8"],["/暴跌30心态崩了/index.html","73e211cfcc320b3b72685ffbd6614f8d"],["/最近很火的ChatGPT到底该怎么玩？/index.html","437c4e1ec0e997d81914e7c64abbf0ff"],["/有哪些好看的日历可以买？/index.html","c1d3ef5239279872225ac8492cac4c2b"],["/服务器有啥用/index.html","fb1ded4435191ba01b732e19b1030a1a"],["/来长沙了！/index.html","415d3b4ee1f0eaac8022af1bd92b7bb3"],["/校招污点公司名单/index.html","f558abe4bde878669ad34cd20f95aafc"],["/梭哈200多万/index.html","23ae8e6c0fe2c5ee8f3e9c6615b96c36"],["/梯形图入门/index.html","df1f8532403f15f3c9812a82589c6ce2"],["/橙心优选，凉凉了！/index.html","d66c1bb7c0029e62b6b5911f6652f4e9"],["/比亚迪汉试驾体验/index.html","4700d2d292eb67f7093aa79244285e3b"],["/清华转学成电，真的牛逼！/index.html","c7d94d90877e3660b49937f63e9d86cf"],["/滴滴程序员被亲戚鄙视：年薪八十万还不如二本教书的/index.html","a27ef8461dba93ee546f07206551197b"],["/社群！/index.html","353e4a6d2f084e36ba9f189408a3a9be"],["/科学上网之VPN篇/index.html","ba9d93191e289c1b862a9679d243a339"],["/程序员必备的几个技能！看完你也是大神/index.html","672cb8443677eac1941c85d144419636"],["/程序员绕不去的槛，Linux！！！/index.html","2aabe21130167ee4ad283262c4b31f9f"],["/蔚来ET5试驾体验/index.html","935ed9f9bb38dc53df5349532e7a3840"],["/蔚来，牛逼！/index.html","d839911239c32c8983ada153fa2e7587"],["/被录取了/index.html","2853ed988c59f1cddcede3caaf9ae11f"],["/被找事了！/index.html","7fa4b79458af03eb7924c35cae414354"],["/被拉黑了。。。/index.html","ce7c31bcba8612cb46bf50919f001b8f"],["/被车撞了！/index.html","7cd7f7823ea88ede4775dd33286d0b20"],["/该如何选购固态硬盘？/index.html","05068270eefa3463e0317321f793903d"],["/这本书一定要看！/index.html","fcaafb14aadafc573a49118e06037b53"],["/选Java还是C++？/index.html","35a8e6b35c8ad8e0cff96caae32093f0"],["/那些让你起飞的计算机基础知识/index.html","d2d630d74803daaff1d59c1fcd18564d"],["/靠这几本算法书，成功拿下大厂offer！/index.html","bae69fb41af10cdb12b699bcaaa7745d"]];
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
