/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/0010-city/index.html","2db1f68c878f0288e249cedaa8bda8e2"],["/10-algorithm-book/index.html","73a64eaa5b9dfa29a29e3a7dd0d0f2f9"],["/10-website/index.html","2ff2ea9ceaa0594bc52c386975b07244"],["/100万的小目标/index.html","73d9d4727d385a53ec38cfa46245a0ec"],["/10w+YYDS！/index.html","cd27e19d436e1a31a513b4d62eea7e91"],["/10website/index.html","9694f6479acb28a2c50a364c4527803a"],["/12-technical-tutorial-sites/index.html","ed64fb46a7237686b10ffcc3423ab840"],["/2 6 岁 了/index.html","2b52c631cc73886c415df175ba1a5049"],["/200万，啪，没了。。。。/index.html","84f3de1b482bf8d2b369a96d7cc30c80"],["/2018ECCV-Paper-DL/index.html","790f2f2db303fc46fa0cdb6774594065"],["/2021年固态硬盘选购最新攻略（小白避坑指南）/index.html","b23ba122ac362e994d79c8ee352e6e26"],["/2021机械键盘推荐/index.html","98e75c89cb095f3faf5108c3eb12b072"],["/2025-07-15/index.html","c2b616145df839cf0fc769dec0e2507f"],["/2025年终总结/index.html","5eba45b33b9d3e98f5445316d1ea8463"],["/2026-Open-Internet/index.html","8734d3752ba7c9ac671ce4b280b395b8"],["/2026-best-vpn/index.html","5a70b7426f7e78d5bef22385fe1ad8b9"],["/2026-clash-vpn/index.html","7750953e30fd963c16c37d7262b16ccf"],["/27岁了/index.html","2e7e6c6b1b1ee80886e9ca74b697e021"],["/3D-Convolutional-Neural-Networks-for-Human-Action-Recognition/index.html","e534d60831ec5ce1b1c1fc5d537112c1"],["/3D-Deeply-Supervised-Network-for-Automatic-Liver-Segmentation-from-CT-Volumes/index.html","e9b1546e4386661eff45d6f40cf1289d"],["/3D-Unet-Experiment-notes/index.html","3d21abc07c7683bd58880a7b3a3a7d03"],["/4-Software/index.html","1bcfde23f4febd03c875fd30d829e27f"],["/6-website/index.html","15bbbe6884db5f03621967eff25c3b7a"],["/7-terminal-tools/index.html","7a122b1eca5ee08f09aec7004a7fc91f"],["/AI-PPT/index.html","9ee42c92e48c2d62103c193e1dada43b"],["/AIGC中典型的深度学习网络/index.html","a54ee46d5526a46c6e8df91cfa06e49e"],["/Accessing-the-Open-Internet/index.html","c43bbfc6c95d8dba55572222e7ad4b14"],["/Agency-model/index.html","2e7f1fe4cc8087ebd42293e1def566f9"],["/Algorithm-brush-notes/index.html","28a4617fde799db03b4597f51abcca35"],["/Ali-recruits/index.html","5ca014df18bd2e261ef8f1ec06f9ecaf"],["/Android-VPN/index.html","c56092a5572b7055b577e969c4a155f2"],["/Android-open-internet/index.html","a317203714649846d2fc38506de9a816"],["/Appearance-mode/index.html","4fb8f01316ebed02c91fb375dd92abd8"],["/Backtracking/index.html","c568f6b290067126c44324f1f6a021fc"],["/Baidu-Sao-operation/index.html","6863bd80af398b0433a0b5264fac112e"],["/Batch-Normalization/index.html","b612dbbe54a4b6e2380e33cadccace91"],["/Best-AI-tools/index.html","232186ebbe70bd66ec4a05f65d06dc91"],["/Bias-and-Variance/index.html","063e94a08f61f7b512d5f24570090923"],["/Binary-tree-traversal/index.html","44feef3e9891e5606d70a14fa0bbf134"],["/Branch-and-bound/index.html","9d9adbd51a05d8c3a78759a844a73aee"],["/Buying-computer-for-the-first-time/index.html","713fa44be7206a313895da91b4e6825a"],["/B站向北邮道歉！/index.html","25265b2d2de5ec22e256e7583ef8def6"],["/C++-string-function/index.html","718590cd28e298c0babcad7ec16555e4"],["/C-Java-DevelopTools/index.html","aee72e9149117e3de7370fe8b611112c"],["/CS-Classic-Books/index.html","f837a2c2bf30f35df8a995a183668514"],["/CS-network/index.html","b9987b42a9f86668de7b7764b79adbbc"],["/CSBook001/index.html","1c269db51d30144aca447dee8d250e39"],["/CSBook002/index.html","942dbaef489d532e4ae8a6bd57341994"],["/CSBook003/index.html","d332a0662598c69d923498c9da756c28"],["/CSBook004/index.html","a0fc83f704e0b8b2887c653cdfe009e9"],["/CSBook005/index.html","313fc5de5076b69d8f187f425f2b2875"],["/CSBook006/index.html","e63d093f1b67c0d058b339cb55ba946d"],["/CSBook007/index.html","13c85ad43d792ef41194435f4098c01f"],["/CSBook008/index.html","36fb2d2f8e8233dd3a93ec5eabf10f5f"],["/CSBook009/index.html","6b0a156860dd997e148666a0ca80d36d"],["/CSBook010/index.html","45c3ef9d7fc48a7aea7e6279050f2c41"],["/CSBook011/index.html","aba438fb685e443d6332bb8ee6231d54"],["/CSBook012/index.html","fc4a3197f8517e8eecf12ff0bf9ccdb5"],["/Changsha-really-fragrant/index.html","33524af30d6cc24473906efc9f0ff0ca"],["/ChatGPT-VPN/index.html","8ccdcb400d7937f48ee22ee9a9deb020"],["/ChatGPT/index.html","a94305b02b9f2ff45193e597fff7c3ac"],["/ChatGPT！王炸级更新！！！/index.html","4918d180a951761157a53fd762f1059b"],["/Chrome-crx/index.html","1dfcebd768ea9743f2d60873f6f90ee4"],["/Clash-Party/index.html","d969214b99b3a0c269bdd80af1657267"],["/Clash-VPS/index.html","1c8554f66b8dc2e0175b098d8c109401"],["/ClashForWindows/index.html","473114dcd0f5fbdb08462fceac918771"],["/Computer-Classic-Books/index.html","87c5c33ef61a9010da23aa994a6fbe04"],["/Computer-for-another-major/index.html","da348917a3bfb43e75e2ab46d911f7c9"],["/Conditional-confrontation-network/index.html","efa2fe7802cece1020da530416cf401d"],["/DNN/index.html","da8ccd3cbb1eb8217b01b70f14c9443a"],["/DSN-segmentation-liver-experiment-summary/index.html","a6a8316e0d49dfe3a7e28aad31bac5c5"],["/Data-enhancement-elastic-deformation/index.html","b248204d0d12111d320df8c9c80cc3c7"],["/Decorative-pattern/index.html","5141330f2a5f443a5dcc93bd50450f0e"],["/Deep-Learning/index.html","2d5f2c5b3ad6774b2c20d05b3e654c19"],["/Deep-learning-and-medical-image-analysis/index.html","bd288a04a5f1ec3ae6b221474a3e56d6"],["/Deeply-Supervised-Nets/index.html","baa14de19b1b3cbf1b1ef70143ab17a9"],["/Deformation-model-based-sparse-representation/index.html","521051f206d6f9482fee183ae6a09265"],["/Discriminative-and-Generative-model/index.html","ce219dcfceff0483858f3fca76c02116"],["/Distributed-transaction/index.html","d2941a88f78330aa1dc470e2bdbf1484"],["/Divide-and-conquer-algorithm/index.html","fba19c38238251c3018857627c2ac1ad"],["/Dll/index.html","4d146f178a1abc8eec53bcef46914427"],["/Dynamic-programming-algorithm/index.html","41162d7186d1be771f4f47826bd94433"],["/E-book-download-commonly-used-by-programmers/index.html","1e2722ca6e7f9ed97986baf061f0c377"],["/EditPlus软件的安装、激活和配置过程分享/index.html","d32e3a47771fcc6f6f1bfbcc51c7e799"],["/Eight-sorting-algorithms/index.html","e8a64146f2092dca7cee18b4ca94e50e"],["/Encryption-Algorithm/index.html","9dca32c21801a184fbca2dfa502dd6a1"],["/Eolink/index.html","fbf136781ded915933499ca851144ee5"],["/Factory-and-strategy-mode/index.html","268b327d485fea8f3011b64c83394f8b"],["/Foreign-technology-blog-community/index.html","737866c257b779f55fe64aae57975ebf"],["/Functional-model/index.html","17052e32b7f1a784e5b3ff67e3b5bc38"],["/Fund-type/index.html","d2824f03f18ccb2d9594b1b01947e00b"],["/GPT-4o/index.html","915e5ceb7eaf2a6d44352ad8f7f503ba"],["/GPU-medical-image-processing/index.html","87e8cead45e4e5eb7ec1958f8dfac426"],["/Gemini-pro/index.html","bc4ca0b2553f525845d92a12eb6b55b9"],["/Gemini-vpn/index.html","3fe0d2487696f8998c2ed12fc956db16"],["/Gemini/index.html","6e249a5d978312df11dabf5c735654cb"],["/Generative-Model-of-Unsupervised-Learning/index.html","84d71b3d439e87fb4a383e4f61a090b7"],["/Git-Learning/index.html","46db858dbf42d3109b403b61470b3cfe"],["/GitHub-2FA/index.html","3bf9b26799080f9611a678a5f445b9eb"],["/GitHub万赞，程序员必看操作系统总结！/index.html","5e06b9d4878f2a44a57fe72bdcd19b14"],["/Golang-book-recommend/index.html","5e63c47d19cfa26e240e0a9869d03b27"],["/Golang-learning/index.html","5a2c705ea1f24235a6a57d57bd2b82b2"],["/Google-Gemini/index.html","bd8615aeea597d90e860273fd1e903c4"],["/Gradient-descent-optimization/index.html","4ccb30e509905dd5e6ad755b7969bfb8"],["/Greedy-Algorithm/index.html","4d2d848d96bdb6a4197da281fc7f7f4c"],["/HAND-User-Forum/index.html","338dd98a27b457ebb3b1ab7c2777d5a8"],["/HK-bank/index.html","9f5a3563a4cb22e47a5a0bb8bf04bc5b"],["/Head-to-head/index.html","31ac7c82dfc720b965d709a436c21a4c"],["/HexoPage/index.html","478e09f580abedcea5f8a4f956753d6c"],["/HistCite-Pro/index.html","bb6ee67a6e3357a393566942cfc21d62"],["/How-does-the-program-run/index.html","4db0fc931e1de829160ac1ce6ef50ab1"],["/How-to-judge-whether-technologyisreliable/index.html","a851dacbdebebab7df09090f83de14d5"],["/How-to-learn-design-patterns/index.html","5d80a2fe4f948ddfc9a82712dd4bb9ae"],["/How-to-learn-design-patterns？/index.html","b2e5c7a4e6863040b0d7dfc9545c8835"],["/How-to-teach-yourself-programming/index.html","4072793940571565b1353bb31d67754e"],["/How2learn-Python？/index.html","c4d671ca6a027e2514e08c34b4e5405b"],["/IDEA-shortcut-key/index.html","97b18b56a630be83cb3a5305d130bc4a"],["/IT-interview-basic/index.html","ad627dc5ee312961afbedee49e047ef0"],["/ITK-VS-install/index.html","8c09717372ffe0dbc272e234db77fbe4"],["/ITK-VTK-ItkVtkGlue/index.html","75dadcb6d0fcf67d761f2e0ce726035b"],["/Image-processing-plus-noise/index.html","54d3b3f3489c5e7f312d133b7da28d9a"],["/Inception-Going-Deeper-with-Convolution/index.html","0b0776fd0b9a2c5e8665f99e741ece94"],["/Information-Cocoon/index.html","7ade2dfc29f21a01385f057724e4fa28"],["/Java-GC/index.html","9477681a50d03ca8360a9c6fdcd08f45"],["/Java-Servlet/index.html","4bf906d19f8d0b188b52711d5d57e386"],["/Java-array-and-collection-sorting/index.html","6934897262777bb22feb748ce0646e9b"],["/Java-development-tools/index.html","d9c97fbe4cee83bd4b569291f53f5539"],["/Java-eight-data-types/index.html","029b356c616f18ce1df1569f61523e19"],["/Java-interview01/index.html","8e8db9901cdc76d8d6344aab3d5556c4"],["/Java-interview02/index.html","e725b67fcb1dff861d48146fe991fdee"],["/Java-interview03/index.html","3532125c110b3807109559fce043050c"],["/Java-learing-map/index.html","69f311cc6e2c1974d515052f61e9199a"],["/Java-learning-route-map/index.html","f0aba2aa088992b7689052022b806c6c"],["/Java-memory-area/index.html","c092ab58998d8e6149d728ef8b71680f"],["/Java-memory-model/index.html","74f510d8efc617399bd4b94fa4b406eb"],["/Java-multithreaded-learning/index.html","d2aa107b04cb7b4f3eb09d2866365e11"],["/Java-project/index.html","8291d6d6ae76aaf32c3d02a617b47092"],["/JavaWeb-Chinese-Garbled/index.html","8db1c26d43a2215d9b630603251f59fd"],["/Java还是C++？/index.html","9845b5cca75fbb07c1302ec75bef1e85"],["/Kaggle5-step-guide/index.html","c4389d5f17e4ac69e848c2a921c5311a"],["/Knowledge-points-of-Java-garbage-collection/index.html","a6c507285f1fdfe503a518733fd99c14"],["/LLM-DP-TP-EP/index.html","5f1c56c5f1319194e618f05e7a2239b6"],["/Layoffs-Hiring/index.html","ab7259913c5f96468e6554951c5abe94"],["/Layoffs-and-Hiring/index.html","91e3b08d8d350a0f01deab40d4958bab"],["/Linear-regression-of-machine-learning/index.html","08d488434bcbae3a486bf5fdfe03edb8"],["/Linux-Compile-C/index.html","1b249161873d5f5efd210369c68d309d"],["/Linux-ITK/index.html","94e2c2b7a0096ab2a119cc46b76b26d0"],["/Liver-segmentation-of-sparse-components/index.html","7e818169b490c7077f3e2e87f7b2bf16"],["/ML-EBook-paper/index.html","3701686ae6452c4e8e0b4999977a5675"],["/Map-uses-multiple-maps/index.html","2f3124732de7e2e8d742926c309644bd"],["/Marching-Cubes/index.html","9749a2eab624965152d557ec430631aa"],["/Matlab-Graph-cut/index.html","8ef58eeae9a608b700c705b406a451b0"],["/Maximum-Likelihood-to-EM-algorithm/index.html","181a0c5b3d060d05e212994a4b8e25d4"],["/Mean filter and median filter denoising/index.html","e3f00bd2863f696c55c2601ef88299eb"],["/Medical-Data-for-Machine-Learning/index.html","beef574c05581cf36eb9f2fa09255018"],["/Medical-image-analysis-deep-learning/index.html","b6ffac66e86a93fea703bca6769f8761"],["/Medical-scan-image-processing/index.html","3c55e6b8accdd158dd2f1289edf6c8f5"],["/Merge-sort-algorithm/index.html","54e267b64713dc6d5063324bc2ed8b2f"],["/Monthly-income-2W/index.html","63e23a180be1f0f0c3bf7b508890405b"],["/Mysql-database/index.html","c1bf1737e4a0782780996bbfac8b3238"],["/Neighbor-Embedding/index.html","20221f675f3b29ef46002e24c4c34615"],["/Neighborhood-approximate-random-forest/index.html","596c926c7ddff9c8df6020252d0102b5"],["/Net-and-official-documents/index.html","f7ae29d92fa42f23634ac4335fe6810c"],["/Netflix-VPN/index.html","e84546c49c1d3f60867407bc2eeb7a3a"],["/Network-principle/index.html","f2fa5a414234f14f429d0b2f47855bcd"],["/New-Hong-Kong-stocks/index.html","7a52ff2434a13a147d06616266af0651"],["/Nice-to-meet-you/index.html","3697ca76137ce7a8c6f2b4539e4768e7"],["/OS-processes-threads/index.html","83b46258a69f99994ccbe4d207ab4f1e"],["/OS-run-environment/index.html","80ae7807f7bc3c2060ff40cfc7c07f21"],["/Open-Internet/index.html","98bcc44cba51b87b404098e53163d567"],["/Open-Internet2/index.html","3741938f44fc6424fc3e00442944e760"],["/Open-source-community-and-rewriting-website/index.html","32242b8e8868b23d7cf3b5c8abe3d276"],["/Panoramic-image-stitching-based-on-SIFT-features/index.html","b5b25aa5a6bba12b11db670468ac77d6"],["/Parzen-and-KNE/index.html","4bd1a39d529911eddc31920d124083c3"],["/Personal-technology-blog-site/index.html","7bf67b3c8a2fc9d83a761a41d727df97"],["/PicGo-Gitee/index.html","8b8ad50df7186584a416002fd73649eb"],["/Programmer-treasure-chest/index.html","e023012acbe64bae8407448c99166264"],["/Prototype-mode/index.html","57f7b2325737372ad214608f6238c97c"],["/Python-base/index.html","2e336b0149f7c67e7c542117e6c0ee74"],["/Python-crawler/index.html","d4dc1953cad36fef94fdec26564f5f7e"],["/Resume-revision-suggestions/index.html","95e1cb47647c525a8604287430906eac"],["/SEO01/index.html","512df085507f8e9e5c8d87c7e2efb0d4"],["/SEO02/index.html","f16b85b5f36ca681199ec879172cd628"],["/SPHARMPDM-MEPP/index.html","8a9212a8ef59c042a21e4b35d7e11bd3"],["/SVM/index.html","41ab0ace55167565eb5602d2f6314eaa"],["/Seata/index.html","42e7ef9f3b922f08f916af061f2f359b"],["/Semi-supervised-learning/index.html","c9cc27f2f3662629d33a63e78b613a3f"],["/Sequential-model/index.html","1af4c1f7a7da9799d8ea023ad58f64f1"],["/Shape-Based-Human-Detection-and-Segmentation-via-Hierarchical-Part-TemplateMatching/index.html","62d1d19304808d59ae13cb5ec3f3043f"],["/Spring-basics/index.html","5fdd2664f51daab74fc1c924a7174e59"],["/Spring-integrates-hibernate-Struts/index.html","711852c85616f61e19de265a2399c330"],["/Structure-learning/index.html","03c20b48e1172183e3a2c654dc3bc5fb"],["/Suggestions-for-self-study-of-computers/index.html","a7ff6dacc05a57ae3897649dd3741c16"],["/Summaryof-HongKongStock-Account-Opening-Links/index.html","280e700f495c37f5e51b66b807ba0dc8"],["/TCPIP-detailed/index.html","e9a3b815839b6cc13054a7507c8a220b"],["/Telegram-VPN/index.html","4a8586bbf26296c34d07dad2d721d1b1"],["/Telegram/index.html","2cbfb6502397e5e30449899e27f6ab04"],["/The-essence-of-shopping-festival/index.html","2fa13d098781f2d9059311174940c30d"],["/The-most-important-investment-in-life/index.html","639bbaa1b7d27cb8d66d23d162ef7c3f"],["/The-most-successful-nvestment/index.html","1639b9ecb012fef8d9099c7e8c093c99"],["/Transfer-Learning/index.html","515529f0a67de1dfeee063dfb1603cb7"],["/Transfer-to-computer-major/index.html","d7af19db034a742b53735aecd830220d"],["/UNet-Convolutional-Networks-for-Biomedical-Image-Segmentation/index.html","fa4cb12b1e7f2d9fb815feffebe5b907"],["/Ubuntu-install-sougou/index.html","54db9dd5bfb47ec9833a9a56420de532"],["/Understanding-of-paying-for-knowledge/index.html","3454d0efb2161b7b21e9444afe6feef8"],["/Unsupervised-Learning-Linear-Dimension-Reduction/index.html","4c8b3b193c0274e3046eb8ca3d556b46"],["/VPN-HELP/index.html","e438f191c5f1ad8d9c7966132a754dfa"],["/VPN2025/index.html","ef42b17de1ebb3a42ea35240271cad02"],["/VPN2026/index.html","3684f160e0a8850922d597c6e3be3da7"],["/VPN202607/index.html","a6ad913baba880f66f70531f9a53b1a2"],["/VTK01/index.html","0be5ab369312d0a9dd050c4a6a00e7af"],["/VTK02/index.html","16bcc282c0aa7c88843b909ac5ff2432"],["/VTK03/index.html","45432adda7bb45d4b45e8677d8603a99"],["/VTKRead-write/index.html","978c7c0dc6e322c3dd04872b33d122cf"],["/Vertx-Java/index.html","91a152e7aa00cad3efac9712879547dc"],["/Vpn-OpenInternet/index.html","72d54047f8aa184f1abc13b7617241c7"],["/We-are-all-good-kids/index.html","005624ff73a960e4a38310e9e90004e9"],["/WeChat-80/index.html","5a1af9daa07859fd323fc58de7cb9f6c"],["/WeChat-red-envelope-cover/index.html","dc37235a75d27a82db650ee6f4a99f75"],["/What-is-crawler/index.html","815a8f1d6218b5fba433c8424557f63a"],["/Win-Internet/index.html","64efaf3869f654e78798e22e16ddb4c3"],["/Win-Open-Internet/index.html","4fd53728d41fe83def5b25a3f6a68e37"],["/Win-OpenInternet/index.html","9d510fd5484ea65f22feed860147e4a7"],["/Windows-Android-Apple/index.html","48bb356bb7b6b7a7e4ff54875a109769"],["/Windows11-2kfans/index.html","60eb94a334ebe55c4fb6ef40b3938e57"],["/Word-Embedding/index.html","0e399a2a466a41fc5ff4cefdbb7e25b0"],["/YuanShikai-and-his-Beiyang/index.html","9f8466198a3215fd0a50eb314cc31714"],["/Zero-copy/index.html","487ddd173d5ac4f1e870f7b25e42082a"],["/about-keras-model/index.html","d411c2a15a684fa24ce0d49434bb7d90"],["/about/index.html","a5b9064cf243e500c72f966609be52f7"],["/accounts-google/index.html","88b290a84759847b2f90f216cf80f1b7"],["/ai-tools-guide/index.html","d843f843ade381f2465bbac03710a545"],["/algorithm/index.html","ec232aac62c11ff53248d9b08a9532f3"],["/alibaba-Java/index.html","4360e41451e69ab3031e04418db77dff"],["/archived/index.html","b0a82bc4d43cfd1d3fa7e950fddb46df"],["/archives/2020/01/index.html","5a471200ad1ceddfc3d9e820bbf856ec"],["/archives/2020/09/index.html","5ce48c47603312e99d7683d2ee51391b"],["/archives/2020/10/index.html","793884c6150b6fcc90a474cc82fe5305"],["/archives/2020/11/index.html","e507343b3fdcc82ac8826e3f00920475"],["/archives/2020/12/index.html","77b1d2f50ffd6032d8929ae8bb2eb014"],["/archives/2020/12/page/2/index.html","80fbd730be906b013b5dcf422db989a7"],["/archives/2020/index.html","ab0ad8fe47307f8b9573a61b41dc15dd"],["/archives/2020/page/2/index.html","185e98b1d916a869df083e2b7e0de6e7"],["/archives/2020/page/3/index.html","368b6b1c8d9d08d52f6c3611c4681569"],["/archives/2021/01/index.html","dfa48aad6935ecaeab6b0a2f56ed60be"],["/archives/2021/02/index.html","c7e066f3a6b92bb72d85ded45632a66f"],["/archives/2021/03/index.html","c39477d4b0e05640d43ab94871a2bea9"],["/archives/2021/04/index.html","bb22e39ccf5486237e3e943bb3908d6f"],["/archives/2021/05/index.html","440e4b2c8b2790f24b6fd8f80b274bed"],["/archives/2021/06/index.html","4d117e1f87470b8cc18f7cefd78f7a3d"],["/archives/2021/07/index.html","1be707f2abd781c659ff487015fad0c3"],["/archives/2021/08/index.html","a75bff86a30ec24b1bcb521b13a50ace"],["/archives/2021/09/index.html","5ae2e7d5bd0fc740d23a3fc6bc056689"],["/archives/2021/10/index.html","f1bb1d50c37b6c459b4922bbdd734b46"],["/archives/2021/11/index.html","07c7be58038f1d6c3c33192ea9083633"],["/archives/2021/12/index.html","35e74eac996d9cfb55673f953468cf63"],["/archives/2021/index.html","0c5aedb3f6a5d76555e8218a96400796"],["/archives/2021/page/2/index.html","298b1ee99d8a34cd65342bcb67cc4bdd"],["/archives/2022/01/index.html","6659c1008f2b9e29cb052f79502ed016"],["/archives/2022/02/index.html","2dc0eabac9372972fdf206fbe319e291"],["/archives/2022/04/index.html","769424df799bc40fbaf40306cd30a307"],["/archives/2022/05/index.html","74726da6295a845a3d5a8bf89e32954e"],["/archives/2022/12/index.html","67504915d9462733602219dc20846bf2"],["/archives/2022/index.html","02bea3c587fd8f9c7de6224d792ae6e7"],["/archives/2023/01/index.html","1535ae6a54bd483010148c3903ab46f2"],["/archives/2023/02/index.html","95699dc687f2bce1b3a6afa9d83e94c4"],["/archives/2023/03/index.html","ea5b08003b76bd57edcb35ff3105268e"],["/archives/2023/04/index.html","4f24f5084744c3dcafeb17d2d52a4bcd"],["/archives/2023/06/index.html","4782949ee2ff96315f99d4414d0d4669"],["/archives/2023/08/index.html","602f6660ec3143c1d2a34bae43bf0eea"],["/archives/2023/10/index.html","cf9612f1497cc701537134f9309ab8ba"],["/archives/2023/index.html","870fbf424a076a6088e3ece7a4da74b8"],["/archives/2024/01/index.html","f52033100cb46a50282bd26cb81e3f4f"],["/archives/2024/02/index.html","5e2142e9f298dc627d68f74ba25500b9"],["/archives/2024/index.html","a806a50887ed57a3793208d1aea109b2"],["/archives/2025/06/index.html","c141d16aff120919dc9eb2a73fc5b445"],["/archives/2025/07/index.html","1c29e5147cb168161eb4c87adb43f24d"],["/archives/2025/08/index.html","451d4176a0faf4ec470facb5769d6d33"],["/archives/2025/09/index.html","baa54a8373d9cca1b0863657e571dcc4"],["/archives/2025/10/index.html","d7faad6c266c826d6dc38949752416f6"],["/archives/2025/11/index.html","79b734709b6af29e916fa38bf8f8d061"],["/archives/2025/12/index.html","23f213ddf8b437fa0be2b48b2c2d1065"],["/archives/2025/index.html","b0f8ee9643893b43e6b81b4f773ebe87"],["/archives/2026/01/index.html","491b34b669596184bcd2fa95361bc9f6"],["/archives/2026/02/index.html","19b7b84395cd0ca5d77deb064d12cc8c"],["/archives/2026/03/index.html","77f2dfc982030750eb3217e5ffc648f9"],["/archives/2026/04/index.html","3d77244b860e970797caaa85871a7e97"],["/archives/2026/05/index.html","581aa0f6c4ce202add4ae6c53d2231a1"],["/archives/2026/06/index.html","d32cf2ed7804e385ef1c1df59f8e8199"],["/archives/2026/07/index.html","5d838966a49422548fac79150f7676c3"],["/archives/2026/08/index.html","f4a87876016aedf841918ee3c0992337"],["/archives/2026/index.html","b989d4638f9eeb57310485597aa3cf70"],["/archives/2028/02/index.html","153b2bcd3c3a859a3beed2ba849441ca"],["/archives/2028/index.html","ed2940346e03b6b707e5cad11aeb0418"],["/archives/index.html","d1c313280973b112a87fcd71b01b17ee"],["/archives/page/2/index.html","97665d6f693f6df4219a97343fe4dc9c"],["/archives/page/3/index.html","d1b5614c1a8a8e44db30fb3baa5b3a81"],["/archives/page/4/index.html","9142f97a0b38d82015e4940fe6f54870"],["/archives/page/5/index.html","ee3e7d880f2d70083068c63084a51848"],["/archives/page/6/index.html","844ae73264933adafcaa564b478a9200"],["/archives/page/7/index.html","22520219de2f73ce6b36f2db51f4bff1"],["/baidu-search/index.html","7f694e6735314ad29d62a20fe3f2ed16"],["/baidu_verify_code-Hh2fKNlEB1.html","4df47e1bafe6cb46b16cb4a55ecb9f6a"],["/be-a-programmer-instead-of-a-code-farmer/index.html","a26c274a3a2b96551972bda351f850aa"],["/best-vpn/index.html","73a741f9dad6208c05c795dda2a61558"],["/best-vps/index.html","deb111adcad34909e16fe95c149d95ee"],["/bought-a-house/index.html","af7cad5c1dabe587fe783e1d5cf244ec"],["/categories/AI大模型/index.html","c8e84ef7ccd9926d2d23716f9fa1645e"],["/categories/C与C✙✙/index.html","ecb88c9aba976e39d5d6d3f90c6b1012"],["/categories/Go语言/index.html","addbba764cfb3cdbeaf19c0a3139f764"],["/categories/ITK与VTK/index.html","bd8647ca9d7278f752481316738ba5b8"],["/categories/Java/index.html","91a20a7acb38e9bea9d61f5268eaf12a"],["/categories/Linux/index.html","0d56a9f3ecfb0d44339a6f5094282182"],["/categories/PLC/index.html","c8f8aea6ce36524be94893a40f3f13ae"],["/categories/Python/index.html","8cf8f47c8c9e931641d8dc9fc1d8b2c5"],["/categories/SEO教程/index.html","8b5ae54f1714a08871e2fda3809ae1ca"],["/categories/index.html","c706ff0196bfaec3c3b2efd1e91cfbe0"],["/categories/图像处理与机器学习/index.html","2aedd588abd78053d73bd46b30ffb5aa"],["/categories/工具/index.html","2b47b0d7c794a4c470a0ba72bce42956"],["/categories/技术以外/index.html","01de9b8dec335ce4e99c858d9058023a"],["/categories/技术以外/page/2/index.html","46a48a07eb94280e085c47135051cfa6"],["/categories/数据结构与算法/index.html","b92f56f87c4c1ed4497bd663e031aac0"],["/categories/科学上网/index.html","9f2189eb27331443ab25ca5dec03cd9a"],["/categories/编程经验/index.html","4d1626f8db38afaf08e0f780234dca0a"],["/categories/编程资料/index.html","3991858ecf8df20271b897b448032d71"],["/categories/计算机基础知识/index.html","53488e95135be98eda9ff9295a28363f"],["/categories/设计模式/index.html","b898e9b9225a4146019b67707a9f89af"],["/choose/index.html","c928a4dccb58dbbe89bed6dc9465ff77"],["/choose2/index.html","507a902ea5e6d38630df9ca7b9e8a95e"],["/chrome-crx-intruduce/index.html","aedb2ce92cb36e46584cfaa49b443891"],["/clash-free/index.html","79e92157a737280a78cd0b9367705c08"],["/clash-guide/index.html","5620e75eca56961a42640c6bf015087b"],["/clash-pro/index.html","7931dc489c6d7222cc401a2738a5edf9"],["/clash-tun-mode/index.html","29b7e1bd4377a20973409803109a9e14"],["/clash-verge/index.html","db1ea3b7161b5f5679408342959dab2c"],["/clashvpn/index.html","3351476fcd53c1371fbee4242de9f862"],["/claude-code/index.html","fae0f0e41876f1266888bd03044b0122"],["/coder-blog-website/index.html","ffb465ca7bb62a73be501fc7df447429"],["/coder-source/index.html","39d5a695b993c7c0696ca6b56639b991"],["/coder-videos-website/index.html","49ba7d969d42c27d45f51fe6d4aa3757"],["/computer-book/index.html","2a9c25705d1fa1ae59c8dd4bc4dc0f7e"],["/computer-censorship/index.html","9e85563100ed85f1ca452520c4fd3298"],["/computer-network01/index.html","20f27531395c2e5bd39935bea771c400"],["/computer-network02/index.html","0aea8348cb1bc1f70489e01999d0bb48"],["/css/main.css","bc32ad34ec4990d934c3c647bdb62f79"],["/database-Mysql/index.html","cd94111d52962c4ef72d10cd2c8920a5"],["/eclipse-lombok/index.html","7c2692fed841b58c3a58ee9db43535f4"],["/freego/index.html","d36f1f52a7389b1788e5bdd683cfc162"],["/fully-convolutional-networks-for-semantic-segmentation/index.html","0445d3a2e4f282d08c643ed8b278ae03"],["/great-firewall/index.html","412d3bcc60d075e085e45c9ee5651519"],["/halfrost/index.html","d94aed8e8283eb6bc8f4215b7e54a80d"],["/hermes-agent-model-config/index.html","0356d9cb3eb81ec2e05158d5f8c513cc"],["/how-to-signup-chatgpt/index.html","796adbcea7797cf5c16fc7abdd3e428a"],["/how-to-use-Gemini/index.html","19c203c1bc601dc52b94ec8a00877ae2"],["/idea-continue/index.html","fb2658e6529691e7356583ddf610057c"],["/images/banners/A_modern_tech_illustration_for_2026-08-04T13-39-17.png","26724e93cce260b8e7c01db2c09e511e"],["/images/banners/A_modern_tech_illustration_for_2026-08-04T14-22-31.png","273b7bafe8ddcf9f92273a1589d5a574"],["/images/banners/science-internet-guide-banner.png","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","a2af634cac4b0e946b9e48a8e4f562a5"],["/internet-dir/index.html","2b06791cde31599f59c4be7516b195ca"],["/ios-open-internet/index.html","17b7b3060604da4b79c08c9cfbf982da"],["/iphone-open-internet/index.html","3750bb48217d7528247e53ae70d22bfc"],["/itext-makes-pdf-form/index.html","6509dc9ef2f8d1797050c35dc8293020"],["/java-Set-Map/index.html","58a51fbf4c1795426aff330459f66175"],["/javaweb-server-error-codes/index.html","8a91d4c91fb3ebae0362a14fff8a4240"],["/javaweb-source-code/index.html","7af35f76dedecb0ae88ccf1b119fe88a"],["/js/lib/busuanzi.min.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/js/lib/lozad.min.js","47904d34a224931dd1b615c59a3dbe3b"],["/js/lib/prism/prism-coy.min.css","0ccad54d95845901ead59bfd3ecceb14"],["/js/lib/prism/prism-dark.min.css","a4711d2957d6605eb5682bdd228cf123"],["/js/lib/prism/prism-funky.min.css","efedcdccd7a9ab342d2d9cacd24920af"],["/js/lib/prism/prism-line-numbers.min.css","38e22e790c279bb56f9ec4b90a2a2d58"],["/js/lib/prism/prism-okaidia.min.css","5ac6f9de996fbec68aaa106dfb16e061"],["/js/lib/prism/prism-solarizedlight.min.css","ecc7e64d039873ffcf7fb27babdaeb5a"],["/js/lib/prism/prism-tomorrow.min.css","456af2a14ae4f5089939d5904ac40fe8"],["/js/lib/prism/prism-twilight.min.css","ebb5c355332a8cf9a1ce37a2a69d678f"],["/js/lib/prism/prism.min.css","a5234d614834658887cec6a9515890f8"],["/js/main.js","052d2b299d9c750afea8df0b802ab7c1"],["/keras+TensorBoard/index.html","396b7e2e01a3c37aca18e67b4699e2b1"],["/keras-beginner-guide/index.html","8baba9e00e1e9cd545f226820d67b88b"],["/kimiclaw/index.html","fbd11f4df16d0c2056406a1f7e46e475"],["/kmp-algorithms/index.html","b9f25b15d213f5dc50cf0679288d9960"],["/leetcode-Java/index.html","a910095688be80c59b4033b3c776d03c"],["/links/index.html","a35b3c9b84836855fe52bb3346d56044"],["/linux-java-opencv/index.html","02314664bf667cd9fe9afe30f26c8e9a"],["/magic-internet/index.html","d1438b11f566a88bb6dd5e1ba58bd069"],["/magic-vpn/index.html","9b490ffb4bf9fa8a2eb57e047c6b4bf2"],["/mihomo-clash-difference/index.html","ed7416c3a829159012e45139763cd3ed"],["/mingci/index.html","67cecb4a064078b1446ac726e41b8298"],["/mobile-vpn/index.html","ad539745d2027e0f6dfee680a9df8d0f"],["/msb-source/index.html","4a97db71556c16430caf4fd19f91df65"],["/online-BUG！/index.html","8ed832c7f4342f8f551d3ba88f5d8498"],["/open-app/index.html","ec0235c2bb5cd7ec7ef2ba903fef2d8f"],["/openclaw/index.html","d94d4bed4ab90987d94d710ab26e6849"],["/openinternet/index.html","8f5a31fd8b83f5b9f7064f9796a5e556"],["/page/2/index.html","b1ebad3d2e7f9de85283cc3d3f46b214"],["/page/3/index.html","0e50ec1f5e798411bf06d073377a64c0"],["/page/4/index.html","bb25eb0a1ccfdb75e5cc7c3b8540858e"],["/page/5/index.html","f21187960d1740414f04e12c9b1d0055"],["/page/6/index.html","24e1969b16fad655646e21beda066302"],["/page/7/index.html","98c07cab9cd1c4daf3821bbe5d1a1c64"],["/pandas-data-preprocessing/index.html","a5ca60ba9b2fecdb2f7334835cad213b"],["/phone-win-open-Internet/index.html","69b85524c42e6dec16a5873a352f2675"],["/popcorn/index.html","d70d4eeaf8ac6beb0363398bbfb97479"],["/protocol-cheatsheet/index.html","ca76fb8e909a3f6606770a8a4740bc50"],["/protocols/index.html","c2e52d4d443703ed18662223cad8b9e5"],["/python-Blog/index.html","12a065409c895c068f54341375118190"],["/python-yeild/index.html","41291efe253728f2e591298c52ea8338"],["/python爬虫教程/index.html","3f75e90fc0c2e02a8c4a5a94b2a8e94c"],["/rmux-agent/index.html","25f7dee72e7e4648637adf2c679cd989"],["/route/index.html","2405215ca13bb2b99376e9fdcab259ff"],["/science-internet-guide/index.html","9d7276e963b89beb36153b126ce35af3"],["/search-help/index.html","deb37151ad2abe83a551f2fb9e109324"],["/software-copyright/index.html","d4cbf05b9029a8ee19af340b7af7ce04"],["/sw-register.js","c0b8b0368de526d4582e03f19fedc4a6"],["/tags/AI-Agent/index.html","d04bb25af40082f246f4a25adbb9de42"],["/tags/AI-PPT/index.html","e4046ca6371ab8df841002fbc965e483"],["/tags/AI/index.html","49364eed4a8c529d8c784248c8f10558"],["/tags/AI写作/index.html","02a1b018856d767e42b8f8ab5ca8aa1f"],["/tags/AI工具/index.html","ea77419573b0bbd6d02a311ceb846a5e"],["/tags/API/index.html","098dd18496a4c96a80f947a654d9f613"],["/tags/C-图书/index.html","810d3997eeac4c2e328637b477749714"],["/tags/C/index.html","069150b2548cdd833b41f4e1c0fdd967"],["/tags/CNN/index.html","fbfce5c29216566e5be7d2bc807a3002"],["/tags/ChatGPT/index.html","6c6e7ec7cc5b213d11090d104a5eb0c1"],["/tags/Chrome/index.html","ddca9ef2e3f4ab41cef630a402481062"],["/tags/Clash-Meta/index.html","ef02cb1ca6ebd7675478803bb5607eba"],["/tags/Clash-Verge/index.html","afd4a0d358434cbba0b7f8944d70432a"],["/tags/Clash/index.html","8eb2177b6f74ef30f4b34d18f0afe75c"],["/tags/Clash教程/index.html","a2593f35e296413ab4c989ef5adf567a"],["/tags/Clash机场/index.html","82ed1fada2a0643642a834addfe63b61"],["/tags/Clash订阅/index.html","6705c651fbf577ced3623dbc9fde6046"],["/tags/Clash配置/index.html","04ea2d1798b0cb8ad81fc7a1a8c7bfe3"],["/tags/C✙✙/index.html","a767b80218b573feb6fd740f18762c7c"],["/tags/C语言/index.html","cab4b51e0f6346a1aa36f2f724a66bcc"],["/tags/C语言图书/index.html","f6d3a09a2b652ba6122a1ed01852a103"],["/tags/DSN/index.html","d66dd561fe57fd1778a0dbf8c3a51fab"],["/tags/DeepSeek/index.html","431142cd754a02e463218e42bc250e7d"],["/tags/Dll/index.html","dcd08ea546774e5012e4291d0522469b"],["/tags/ECCV/index.html","186e8f8a18d1274aef15e6b0ad57b5f8"],["/tags/EM算法/index.html","ef35deed42953e18197ef52251720c2c"],["/tags/Eolink/index.html","8e2353e7ccbc5ff81852c1e1e9e370c3"],["/tags/Gemini/index.html","d27d4b36e169d1cc7b325c6930cfa6af"],["/tags/Gitee/index.html","f3b00dcd864139f00d6720c37f253be6"],["/tags/Google/index.html","0b4b60d8912973a259803e9209a22040"],["/tags/Go语言/index.html","d730a5f022d3ab10f4ae0c5709ed72ee"],["/tags/Graph/index.html","0a17ee8d13ecd2b20d68dfb151e269dd"],["/tags/HTTPS/index.html","f5be62165488561222649cd635a5082b"],["/tags/Hermes-Agent/index.html","c3727a5afffb43e0a76aeaa17da6f759"],["/tags/ITK/index.html","09b0f978bd02da70b2d30f06cc7d1d65"],["/tags/ItkVtkGlue/index.html","9ed2a93cb9cea6c9919fbcf705b23306"],["/tags/JMM/index.html","74278b41cccc11f78e70d2f84d5bc4d1"],["/tags/JVM/index.html","13c2ef19d44efb525383f1fadc4207d4"],["/tags/Java/index.html","f08953f98fa5f378665a4ff660e9b301"],["/tags/Java图书/index.html","5cbedf8ef04624e4feb9b4ffd458584d"],["/tags/Kaggle/index.html","604674e74c44f92c1c9430c8ed62540f"],["/tags/Keras/index.html","a6c89f793dc9e8e0710acb8d8574aede"],["/tags/Kimi/index.html","aefdac035a8ae4e1e61a9ff26a19ad5d"],["/tags/Linux/index.html","40e8c89a1f027a324a4a267ded7e982d"],["/tags/Linux图书/index.html","1f9ecd7f63723c080060a157cf2b56f8"],["/tags/MEPP/index.html","e0afca47b2e684143d3c7752da15e9d4"],["/tags/Map/index.html","d89d57bc71cce18ecfe4d277a8319a2b"],["/tags/Matlab/index.html","dc80431a04b304070702e5334ad914ec"],["/tags/Mihomo/index.html","80b003dc02492f6eb80392fa0a839bbc"],["/tags/Mihomo客户端/index.html","afce2fd25627cb12633715e7da9d0faf"],["/tags/MongoDB/index.html","c20cdd3ee0650316a98611ad4eb75eed"],["/tags/MySQL/index.html","1931a47cb9b01208067e17d496d42a58"],["/tags/OpenClaw/index.html","85f46047d73d367db7631790131ba58b"],["/tags/OpenRouter/index.html","f03eeb516544c8180b47c7fcdca927f4"],["/tags/Parzen窗/index.html","85169b4e8e27c43b3652d7a2a65d3cb3"],["/tags/PicGo/index.html","36ca6653464c7ec221f797ad8a9506bc"],["/tags/Python/index.html","cc01f17c4479c1f11a6e7055fdd99dce"],["/tags/Python图书/index.html","055ba2c1bf464ca3b269c07e3a04ce34"],["/tags/SPHARM-PDM/index.html","e88f46201140755d416c44978215a0fc"],["/tags/SVM/index.html","d9d8a37d3f7ba397a7d8bf4846018f60"],["/tags/Seata/index.html","64ba645f874a8e8fead9d06009fe8565"],["/tags/Servlet/index.html","496d8d4953c92ba27bcbdeb95cb369c1"],["/tags/Sping/index.html","94a98eff59959f96a2c3eeee34c77b7d"],["/tags/Struts/index.html","cba60fc5357bb77da87e3671f857d39b"],["/tags/TCP-IP/index.html","e34821180264c13ffc4545adf179e5f1"],["/tags/TUN模式/index.html","13389ab1a4f2e0983826078875dc1403"],["/tags/Ubuntu/index.html","25dc9ef22d97e781754631e375c93ffb"],["/tags/Unet/index.html","ac5f7e3e3b439902f8e4e80a6744686e"],["/tags/V2Ray/index.html","c1fc064924d145cfacf031681eecd765"],["/tags/VPN/index.html","51f20f7da2291f9581a6c3533cbb7e71"],["/tags/VPS/index.html","e3261ac8f37bc3d50502eaa080fe0a06"],["/tags/VS/index.html","57afaad31f3e2fe3195b66fa8da1f89f"],["/tags/VTK/index.html","28995f041a9d706d2caa8b34f58ac5e2"],["/tags/Vertx/index.html","5947867ebe91964c2c8048a00ecd46a1"],["/tags/Windows/index.html","43da2c26e8d7ff68c9d15256db76823c"],["/tags/Windows翻墙/index.html","76571643d2f3805f876fecc0ee48577e"],["/tags/claude/index.html","88ccb6cb4b9267d29672fb3b66ac417f"],["/tags/config-yaml/index.html","3957e60875f583a867e6fdd382da4f15"],["/tags/edit/index.html","08061b9f80b4606dfb8d2783de7c635d"],["/tags/hibernate/index.html","88260b12f66625cd9b70c01e7181f3cd"],["/tags/iPhone翻墙/index.html","00fcfb5e7195ba825f7f1c037d4350d1"],["/tags/index.html","db85d384bf1620673998a4a00e2187d4"],["/tags/itext/index.html","7e60ae3633c2a735248af4e45b796591"],["/tags/jdk/index.html","4d45ee3d8bb95ffd06ec6fafb205c94a"],["/tags/kmp/index.html","73634aad4424d2732f396c39f0fcd80e"],["/tags/k最近邻估计/index.html","9156919af83be697a36ab8e6f8d2ef88"],["/tags/lombok/index.html","a0531949033b79408bbb063dfde44ae7"],["/tags/macOS翻墙/index.html","9349c38132991239c41c897dbad1180a"],["/tags/offer/index.html","e58dbec97c6a215d393ac9a098e40d4a"],["/tags/opencv/index.html","044d4fc3b5ee0ae62965cd9b4e1b1bdf"],["/tags/pandas/index.html","ed882181548f2d064363e18aa32de17c"],["/tags/rumx/index.html","9d3f9e19b9742e92aaa28e98cfa5c82e"],["/tags/string/index.html","6d7d973de379c4d9a004f2048943c4e7"],["/tags/vim/index.html","f97a15869668de153373c497ee09d1f4"],["/tags/vtkPolyData/index.html","679b241eadfd0fdd8e8e192f7bcb55cd"],["/tags/web/index.html","0b6aad7481ed99403d10fed5d8146533"],["/tags/xshell/index.html","c2b678d29e96a94b3cc3688346cae6ef"],["/tags/yeild/index.html","af62ed849f885e8119f610b7c105ee1a"],["/tags/互联网/index.html","0d8b889178b283f81c9ce26113fafd53"],["/tags/人工智能/index.html","979e9addb4984e2f40fc61ec4837e1eb"],["/tags/代理/index.html","7dbd3226eee98edfc0213b7870f37e35"],["/tags/代理协议/index.html","07926acb724c255e2c2fddc08fab352a"],["/tags/代理客户端/index.html","d756b255e121cbe8c8953e165d19e82a"],["/tags/体绘制/index.html","45d13de3aba53bf38a3ff06ec1fc3a97"],["/tags/全卷积网络/index.html","80625cde83e2944a22201ad4c037d563"],["/tags/公众号/index.html","49908c5ad1a9de6bc4baf5203f3096a1"],["/tags/内存模型/index.html","ad5a589fa0db2ff37bb4b07698ae46a8"],["/tags/内推/index.html","659daddf28e40b2246c1ea26d3abf12d"],["/tags/内核/index.html","41c30dcc0c4fbe7e0e9546ffb9f890ee"],["/tags/函数/index.html","10f2de5fa8ebbb4e837125ed739ae28d"],["/tags/分布式/index.html","f79b74eba8071357f51b03c471046213"],["/tags/加密/index.html","8901b9279249d164fc32970e45d15a86"],["/tags/医疗图像/index.html","1023395357d2b6be25287d87050f192f"],["/tags/协议对比/index.html","45b8150998617d0acf57b8513d45a58c"],["/tags/博客/index.html","e386e8d32c262e5ec90e0fe5ff3daeec"],["/tags/图像数据/index.html","864d489465fbafaced3f2ced1e6a4b55"],["/tags/图谱分割/index.html","9bba22ffd86b9b362d1093135a2e11a9"],["/tags/垃圾回收/index.html","c9a975ad41f82daef8e0027396e2b6ee"],["/tags/多线程/index.html","f85f24e257a8a38e6155eb24054e3771"],["/tags/大模型/index.html","fa9ba137157569e6f977d254dc377a65"],["/tags/字符串/index.html","11e884df278170df311a3c6ccb012e38"],["/tags/安卓翻墙/index.html","632951eddfd4a3c0f58200aa9068477f"],["/tags/小龙虾/index.html","685a02ea68a5798650270706612b1fdc"],["/tags/工具/index.html","f7846065a4ca79cd502375b0ad620d17"],["/tags/弹性形变/index.html","663347474438d88dcc17229ecd8edba2"],["/tags/排序/index.html","99f779e8750569b1e19d4fefa80c8985"],["/tags/搜狗/index.html","509a04017d1f3aa22c46d0a0d629185b"],["/tags/操作系统/index.html","3c10c4cc65bb712966a8ca46dcac2747"],["/tags/数据库/index.html","232cf30653eb94bd1837244b8525426e"],["/tags/数据类型/index.html","3db92654ea0b0714cba4b04c8eb04585"],["/tags/数据结构/index.html","e6164d2eefa5a240c31dab480558e7f6"],["/tags/最大似然/index.html","bd41909bcd35c33db5cff1f7241e7cdc"],["/tags/机器学习/index.html","7a7da0413300e2f2687248fd7833e0cf"],["/tags/机场/index.html","3c5b67c08c75eae3e8e6df80a5f78b45"],["/tags/机场推荐/index.html","ea7a51a07b5f2648e471cf640ff1657b"],["/tags/树/index.html","b3f7d5c54df77dc38011804af67c1f17"],["/tags/框架/index.html","b80be23c8ed325ef95b758553583f0d4"],["/tags/梯子/index.html","96bc9869c432b3b1eed99ec9f0c4f8ff"],["/tags/梯子推荐/index.html","df999b76a3702050b6110e0e52fe68a1"],["/tags/模型配置/index.html","17a00cf04977622ed01101f9dc791be0"],["/tags/求职/index.html","a146370b0892f1971721574e0110a548"],["/tags/汇编语言/index.html","3336ce00ed96a4e03785439e95f9990f"],["/tags/深度学习/index.html","bd594ea37cd6750cdad37b0dc6caecf8"],["/tags/深度监督网络/index.html","4f993fcff43d78a766aeb861d4bb0376"],["/tags/游戏加速/index.html","175b3d3c934292495c63d89b9773f0fe"],["/tags/爬虫/index.html","42488a1082cacedfc22c10492f3e7aff"],["/tags/电子书下载/index.html","fae9c8403f7b01ffd53c81a770097df5"],["/tags/科学上网/index.html","2ebda4b816e468150ad62201bbcdbf06"],["/tags/程序员/index.html","90fda114228c46b9c57fce7da8bef0a2"],["/tags/程序员面试/index.html","ec3472eb5fbf09d019ec62587f080701"],["/tags/简历/index.html","4ebd1d63470c7ab1703ffce9e0857cf5"],["/tags/算法/index.html","a42dc8afaf3bc6322a781f47d19104cc"],["/tags/线程/index.html","44e86c4cb6c7735034c9f4c632cb6b43"],["/tags/经验/index.html","c11d68d1e3eecff8399509327708147c"],["/tags/结构学习/index.html","88f43416e6e036307e5888f880fd2c47"],["/tags/编程/index.html","c6f9636028720120a94d41aca44087fd"],["/tags/网站/index.html","81dadf80fdc771072360348bfc294e70"],["/tags/网络/index.html","b6d39d40d866a95a24174988f5979a2c"],["/tags/网络原理/index.html","fc42e6ce7cc3d68648097be88d89ace2"],["/tags/翻墙/index.html","c30be7e83cf96a2fd1c0834b1e1d9b3c"],["/tags/肝脏分割/index.html","368f090eef62b80e41b7118e6b78bc8d"],["/tags/虚拟网卡/index.html","1845f29cab0c57606a795407404ee286"],["/tags/计算机/index.html","ab872cde10f4b745f51ec69a95660b23"],["/tags/计算机专业/index.html","32ca37088370c96d716da1edb1788684"],["/tags/计算机网络/index.html","afb18053d8009bc5bc2ced3f8e6b55f3"],["/tags/设计模式/index.html","2dedd9621e552ed71f93b5b512be0a7a"],["/tags/贝叶斯/index.html","8104c565d3657d9521c85f42adaaa63b"],["/tags/迁移学习/index.html","9bd3117d9b59db74aea564fbc86de253"],["/tags/面试/index.html","830f4fb7486b20ac37e938c40f263610"],["/telegram-search/index.html","be3643683667a345d83f01f3406c3a7f"],["/the-meaning-of-reading/index.html","65a12744926faefd853ca896ef0b5d15"],["/the-way-of-pragram/index.html","2d613bc0318c359c8b8776df680973cd"],["/troubleshooting/index.html","fade1b38c15db61414c52e5ab21b651d"],["/untiypro XL安装/index.html","db23e1363349d5aeff0728f092e97f6f"],["/v2ex-eight-sorting-post/index.html","10f9a897c3767468248544376026b94f"],["/video-websites/index.html","54ea2292f5f2035db8dd3923660e7c83"],["/vpn-freego/index.html","b3ae705be112993dfc6a10526ed024ec"],["/waibao/index.html","27b323b555d60255a659c85b85f8ebe8"],["/wechat-fans/index.html","bf33673acbf96af440283da7add02ae8"],["/window-run-VTK/index.html","41397c070d2af62c0da817728cf15e8d"],["/windows-science-internet/index.html","646a61eb2ddc17c6a80d76476f2e926a"],["/xshell-connect-Linux/index.html","6bdb9f714e32fcc7a7bcf13f5deffe2e"],["/yzhx-vpn/index.html","aa261ef1418f2a6764cfaa2ce969b2c8"],["/《Java高并发编程详解》，去大厂必看！/index.html","11be455230fe81478591999c7a0bdf0c"],["/一分钟没了 1.5W 。。。/index.html","7325a271bdf8269bfaa07dc7e461a67c"],["/一条高产爆款内容生产线/index.html","5a1a32aed1b657c00b6a42cd00df5a20"],["/为高考学子推荐的六个就业前景广阔的专业/index.html","386aa138bacbe20226167be342736faa"],["/互联网赚钱机器---社群/index.html","833d78890ff68ec02b28a0a35bda568a"],["/你们常用的工作方法和思考方式是什么？/index.html","cc9a278c5dbffa1f780eb729de236d6f"],["/关于环境配置的一些事/index.html","14179c498c0e229f8cb564407d109729"],["/准备了19w！搞事/index.html","fb05108a0e2fcc3ea99b8bac9d1b9edd"],["/几个很重要的感悟/index.html","9003fb087fb951a0042b7ad50b943399"],["/分割ROI篇/index.html","25aace3d02b041b20f9bd81a7c6c9af4"],["/分割精度说明/index.html","e38a7a6f47a899b8ad723b8ca9a52e46"],["/分块程序执行/index.html","3f71d31c21914f0d93a897aaf35af56d"],["/加班公司黑名单！！！/index.html","70e87fa106ee5dd6c9d072aaee3be1ba"],["/卧槽，上知乎热搜了！/index.html","9da0180515522127442be3b21a474741"],["/卧槽，我的小破站爆了！/index.html","41eed3dd7b78544fbfd6ee6252550c92"],["/卧槽，我被盗版了/index.html","44d958221081f836cc2f22b71d7a17ed"],["/卧槽，还有985大学在大一上C语言课？？/index.html","09fafaae82fd4f8f2f1061713bb1565d"],["/历年微软面试中出现的leetcode算法题/index.html","b28ec298de752a22b596445217d38f97"],["/去特斯拉试车了/index.html","7d83ab121e122739f5a8f74b5674f246"],["/吃苦的三种境界/index.html","87d943191a642995ddb072c72590f24c"],["/哪本书适合推荐给 Java 初学者？/index.html","52cde7ec87d157d124991018849c2c37"],["/哪本入门级的学习数据库的书最值得推荐？/index.html","42a50b31b6108f5c0235fa8dbb62edfd"],["/国内外常用的AIGC模型/index.html","cfc1f86bdf89a37551e4da8ebacda260"],["/国庆假期/index.html","b4aa80727d04b18e19f096d78dfffc21"],["/图谱程序字典/index.html","1c3cb85510fbcdcc33f3655024071a4d"],["/图谱训练与分割/index.html","93f293ad5e6da37eed2f14d5870e23ea"],["/宣布一件大事/index.html","a1f10af5bad8cc3ad03bd0015ced63b1"],["/小鹏P7i试驾体验/index.html","84491d21d53fa08f31911091e15848cb"],["/微信PC版3.3.0内测更新，电脑可以刷朋友圈了/index.html","7dbd7aa8c9a8927fbd7e88caf3a272cc"],["/怎么更快的赚钱？/index.html","d558f7976933312882c1f921cb150364"],["/我毕业了/index.html","be824a5d03e310e5104d993846e01570"],["/我！真！的！找到了！爱上学习！的方法！/index.html","b3b4a05bf6f5a717f9b16a19e3407e94"],["/户口的意义/index.html","bcb817d2af03f70c07afab2c2ad19326"],["/推荐两本经典算法书/index.html","5011c595b748ccbd93d3c717123d7c80"],["/推荐几个在线学习SQL的网站！/index.html","76b708a575cef70e06533fed578e2cc8"],["/搞了一个程序员成长晋级社群！/index.html","d03b3b98b5d4f10ccf84c910cb3cbd1a"],["/摘抄/index.html","f9bfc34ea2c4bdc9d193d7831eed68ef"],["/暴跌30心态崩了/index.html","b097a659766b41c0e4b24255424f7005"],["/最近很火的ChatGPT到底该怎么玩？/index.html","97c186b8d2b162cad1e42e573b6a9f01"],["/有哪些好看的日历可以买？/index.html","b4f9702e3f88c6d7e8bb6ab6b12f2dff"],["/服务器有啥用/index.html","af4585555c6a54219580941b3cbd18bb"],["/来长沙了！/index.html","43497add762daf2ee9effae675de43d4"],["/校招污点公司名单/index.html","f8d98705011637a71e1479492ae224e2"],["/梭哈200多万/index.html","a827f9a099be0f5df1e42bf1501cd905"],["/梯形图入门/index.html","c0acbe9dd6da0980f68bbcea34834c7e"],["/橙心优选，凉凉了！/index.html","b3c823ce14358e9b0ab128e776912440"],["/比亚迪汉试驾体验/index.html","07ef0deaf532b931b828e262cc836996"],["/清华转学成电，真的牛逼！/index.html","03bffe61d621ee45aee6aa37b7ef8da8"],["/滴滴程序员被亲戚鄙视：年薪八十万还不如二本教书的/index.html","e1288de40fb3d18edc29c35026a4de51"],["/社群！/index.html","f16240e4fab35b0063bb6d774b0b37b6"],["/科学上网之VPN篇/index.html","a9a3c294835381cff13ffcb85d0bfbb4"],["/程序员必备的几个技能！看完你也是大神/index.html","c756802c2e8173c1d622b8944e2e58ae"],["/程序员绕不去的槛，Linux！！！/index.html","cb713958dcfafa853ff2dd580164c660"],["/蔚来ET5试驾体验/index.html","aad08164ef3f8af2eadf42e5a9de67e9"],["/蔚来，牛逼！/index.html","56ccad4917d03af71a6ffeb9ab16408f"],["/被录取了/index.html","8b09bbf77a3bd302ffb02086b556f682"],["/被找事了！/index.html","31b6a1064871e70bdce5f81b4bb6bcaf"],["/被拉黑了。。。/index.html","bf4e7f818ec4fc4b30c412a000f1b0de"],["/被车撞了！/index.html","64acaef31e03f9c9db25b994957b04a0"],["/该如何选购固态硬盘？/index.html","2ecb8f742a2760388ca36630f3db1c05"],["/这本书一定要看！/index.html","6c481aa273bff3d7ba334e5db0dd246c"],["/选Java还是C++？/index.html","9484f41e8745a51f8a72201733c08f35"],["/那些让你起飞的计算机基础知识/index.html","be31cf928ccedbcd29f46d3afadb27ac"],["/靠这几本算法书，成功拿下大厂offer！/index.html","631f7e711f166d4b0ac432dcfbcd3449"]];
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
