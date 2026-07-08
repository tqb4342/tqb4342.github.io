/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/0010-city/index.html","34f3cfa40b8115554df7df2ffc1c07b0"],["/10-algorithm-book/index.html","0df03678ed017f3fff8b1d2b87ad172c"],["/10-website/index.html","8acbaa818103ed1e674ccfb7572f8410"],["/100万的小目标/index.html","6e547632ea46753de99c7026111de9b1"],["/10w+YYDS！/index.html","9de4f787b8a5ac22f573cdfefef0e34c"],["/10website/index.html","4a4607e68a6eaa6d445a009456f83603"],["/12-technical-tutorial-sites/index.html","410af4f24afbd60a1f3f811f60085cfc"],["/2 6 岁 了/index.html","dbe0d0d2d20e87eb2ba7cf90b8997eac"],["/200万，啪，没了。。。。/index.html","629ef801dcac9eef6b3023aee5ee138d"],["/2018ECCV-Paper-DL/index.html","30cea2fd11ec5448a195c74f4ee2f8fc"],["/2021年固态硬盘选购最新攻略（小白避坑指南）/index.html","faf0c133fe9ca5db3e649f11bb23516b"],["/2021机械键盘推荐/index.html","40dc9e312f0f34082f0ea4c794aed2a5"],["/2025-07-15/index.html","2954d1dafd346a7287c4a4896ea60fab"],["/2025年终总结/index.html","260b1473274b1441e9f453f842effb18"],["/2026-Open-Internet/index.html","6568d03d5d697523ef843b8a7ba66866"],["/2026-best-vpn/index.html","d86f04e13f155166b64d71b3600d5bce"],["/2026-clash-vpn/index.html","55a7f1835a946a87b130ecfe3998daa8"],["/27岁了/index.html","47b3ffd600e2cc36d94f5867a72fa46c"],["/3D-Convolutional-Neural-Networks-for-Human-Action-Recognition/index.html","c92a050d02dece45b48088afb304f54b"],["/3D-Deeply-Supervised-Network-for-Automatic-Liver-Segmentation-from-CT-Volumes/index.html","72654622f2ff84fe74810f563a636b1c"],["/3D-Unet-Experiment-notes/index.html","df0ae823ae3b939c6713e1cad74ae86f"],["/4-Software/index.html","e41275aff055921844ab8951bb35bd5d"],["/6-website/index.html","cdd6d5a32adcd9a442cc27664e0e22bc"],["/7-terminal-tools/index.html","53db33dd90fbe2436129dc6b1a418963"],["/AI-PPT/index.html","f21375cf6e51a21734a40199f0d3a17a"],["/AIGC中典型的深度学习网络/index.html","7ad666ad992118812fff367bb55ea5ea"],["/Agency-model/index.html","3e195d23b4d79873d31e5b2a3e343004"],["/Algorithm-brush-notes/index.html","790251be687bc3a5e196260f5b9e66be"],["/Ali-recruits/index.html","3ca7bb5546627accc573afd2ba208aab"],["/Android-VPN/index.html","80872d130785736fac36e2568f511ff3"],["/Android-open-internet/index.html","acec38e17da79f06c2455ca1f3805b94"],["/Appearance-mode/index.html","8a64e68012d025f004abaf6f17f28555"],["/Backtracking/index.html","ef6986c190434d014a5a0304c8658fdd"],["/Baidu-Sao-operation/index.html","87cd0292b688961559a07bf2565eb0d9"],["/Batch-Normalization/index.html","cb7b776ef174a08d86a4aa1b7d69f2ad"],["/Best-AI-tools/index.html","aa37d92165ed5cb5e13b02c13b031b76"],["/Bias-and-Variance/index.html","915a223b54746748b75b4f7a61610e7b"],["/Binary-tree-traversal/index.html","18949d5627a1de2dffe134ff1253996b"],["/Branch-and-bound/index.html","47bfa4501432305ab7bbb88aee571a0b"],["/Buying-computer-for-the-first-time/index.html","a3ead6b291b4150fa28bc4ab789442d4"],["/B站向北邮道歉！/index.html","ea9a03306d91f9d4f1462e7335661760"],["/C++-string-function/index.html","a0f7267db8ded017cb9e1f43f62a0486"],["/C-Java-DevelopTools/index.html","c15e9055445e46533983b9adc4e83d54"],["/CS-Classic-Books/index.html","5d92ce2491fc3002661cda270278ac85"],["/CS-network/index.html","e891d4a5597077551f08a41dba7ea1eb"],["/CSBook001/index.html","13f11259ea2611fdbd597d267e2de9d2"],["/CSBook002/index.html","86c294f2c7d6c7c1dc8aa60c777bbf45"],["/CSBook003/index.html","78d2f88378ade88796d6e60bab763e8c"],["/CSBook004/index.html","2f4d3cbccb281992ec8ba0f359a0d51b"],["/CSBook005/index.html","0b5a3b17c8f89ba137744aab7a64a4f9"],["/CSBook006/index.html","2d90c0a2fc4c3610509958573fc8cc23"],["/CSBook007/index.html","d3de93f419bb66bc8428ca24d5aee4c9"],["/CSBook008/index.html","fadbd1af9166aa2dcc15bd3f6edd9d13"],["/CSBook009/index.html","b88d38c7c1104f1175c6c66af1cda1b5"],["/CSBook010/index.html","6f2310eebbf32eaea84334e1911dff25"],["/CSBook011/index.html","8ad71988849ae2fc3dc06b1af8a0c931"],["/CSBook012/index.html","944306ec01de75c92d649a896eb803de"],["/Changsha-really-fragrant/index.html","0b3e0eb2cbd8c134b95b942790b3acf9"],["/ChatGPT-VPN/index.html","f8f48fdf84583fecec223064b355c351"],["/ChatGPT/index.html","a3df1857b0f245e62b489ce0f5befb58"],["/ChatGPT！王炸级更新！！！/index.html","7a71c545f0d4b778cfe9a458b461096f"],["/Chrome-crx/index.html","6bd5daa3de1ff976eaf7587f826e808b"],["/Clash-Party/index.html","2ff6be17e72a8bc7029577e199c35aeb"],["/Clash-VPS/index.html","e664ec9a4e2bbec02ccde082ade0a996"],["/ClashForWindows/index.html","febe099d657975cf52e71881097923a4"],["/Computer-Classic-Books/index.html","33b8551dcaa8b8d2148c9e8afa14740c"],["/Computer-for-another-major/index.html","f1548e0fd907b8ee2408c08303ce8cb9"],["/Conditional-confrontation-network/index.html","f4884a7a7a8e14e705ce38591642dd49"],["/DNN/index.html","ae5319ed0e9e7527052243e011734ed6"],["/DSN-segmentation-liver-experiment-summary/index.html","1a5ca299b49c9052b5aff15a8d37a7f8"],["/Data-enhancement-elastic-deformation/index.html","8db1e5375b58e31b2057592ae3dfc97f"],["/Decorative-pattern/index.html","74c2987743283865a74e1b215353f726"],["/Deep-Learning/index.html","4fe43c027bb16d6599f0d488c3551a24"],["/Deep-learning-and-medical-image-analysis/index.html","fa96b7e93050a90a70b047517b9ffa83"],["/Deeply-Supervised-Nets/index.html","0ee944231e98b42f3d1f9dcce249272c"],["/Deformation-model-based-sparse-representation/index.html","4f8fd689f302add169917e5ee1c7c524"],["/Discriminative-and-Generative-model/index.html","c47d6f2b2e3508b17e8d20c37a22e431"],["/Distributed-transaction/index.html","615f5ff5bbc0094ebf3b83b6cd82d94a"],["/Divide-and-conquer-algorithm/index.html","ee751731466b3ce7c24463047469e43c"],["/Dll/index.html","c3629ce02ad18a9fd71b1142d7fd24b8"],["/Dynamic-programming-algorithm/index.html","308546225c385ad2dd942b3c0ff417be"],["/E-book-download-commonly-used-by-programmers/index.html","f06253bb0e740f9d4456d5eb26180884"],["/EditPlus软件的安装、激活和配置过程分享/index.html","58a5b82513cdcf2e2b6be8a6506f947d"],["/Eight-sorting-algorithms/index.html","eefaad9b8c584d80ab7e2af40ecfba76"],["/Encryption-Algorithm/index.html","5d4b339f9c4ea21234fee50d881e9d4d"],["/Eolink/index.html","7c138f4daa3a88078a638e3470da7363"],["/Factory-and-strategy-mode/index.html","87dec85ce87970b618d793a5db381748"],["/Foreign-technology-blog-community/index.html","a7cff373e5878211c169496ff132438f"],["/Functional-model/index.html","2c43fa23b40ebfa96aae85be39c7f2b7"],["/Fund-type/index.html","5466e5f6c4891681591c623336d05541"],["/GPT-4o/index.html","51610e5d4feda73030ac3a7a018de2b9"],["/GPU-medical-image-processing/index.html","b8c5181b27d8ec222c2ef4379d6ca474"],["/Gemini-pro/index.html","b75cc6aff1fff8a88200360fc29a2a2f"],["/Gemini-vpn/index.html","cf57a0d2c87d10006be60ac53376ca08"],["/Gemini/index.html","06bf0c733c9d7cefe31aadce50522c6a"],["/Generative-Model-of-Unsupervised-Learning/index.html","a44824c2384d7bc60a7b2eac7eb6f77b"],["/Git-Learning/index.html","4cd31c0e25ab027120db70debc4a3fbe"],["/GitHub-2FA/index.html","7d87f5d099b509247d5459841fcbb8d6"],["/GitHub万赞，程序员必看操作系统总结！/index.html","ce3d4b3b800500299715cd2871760a8c"],["/Golang-book-recommend/index.html","ae4fbbf5e5d8b243844da1b35a9c9f69"],["/Golang-learning/index.html","3f3db978daed5a0e7de2bbcae0316260"],["/Google-Gemini/index.html","ccadf9be4c6ed616fbc855694d8f68ec"],["/Gradient-descent-optimization/index.html","c045ebe885b9fb6c589be3ddd4a8d642"],["/Greedy-Algorithm/index.html","7dcede6d78a593bcd51cc0223443472e"],["/HAND-User-Forum/index.html","4b90d3fc17b11b7bf9d69c2815c76e57"],["/HK-bank/index.html","9ede1f1c0c153d2e3eb0d34782d21317"],["/Head-to-head/index.html","6ccaa3f75feddb523ed5c91cbf70157e"],["/HexoPage/index.html","f53ad377139e180f6343a8e7385e8ee6"],["/HistCite-Pro/index.html","bc88a9574340b92f3cd678a0fafa6e51"],["/How-does-the-program-run/index.html","e6ee5b11493f8c0a7df04fcc299a2d19"],["/How-to-judge-whether-technologyisreliable/index.html","c65fa7f17cd9dedabaafccb37b8f50ae"],["/How-to-learn-design-patterns/index.html","fa8478f85e96e7756eb15cc3fa422d4b"],["/How-to-learn-design-patterns？/index.html","8a91d157755f2527f38e3cf8590f5a21"],["/How-to-teach-yourself-programming/index.html","91ae8578138b7b1d9e8ce6c1d2b90981"],["/How2learn-Python？/index.html","af1ec7982a3520b9b889a955d8684c85"],["/IDEA-shortcut-key/index.html","4097197538c87aeabb17aae29ca8ed8b"],["/IT-interview-basic/index.html","3fb72bb3923f27bb274df14b99107c9c"],["/ITK-VS-install/index.html","043a0e80218ca5cfee0d1a10e00081f2"],["/ITK-VTK-ItkVtkGlue/index.html","ba4f3106f831e792349d63e235f18a45"],["/Image-processing-plus-noise/index.html","9410cc7a02502a1f750591c918d91c05"],["/Inception-Going-Deeper-with-Convolution/index.html","6838b15bb0d52b7ef412314774af2a72"],["/Information-Cocoon/index.html","c555dac7d3e23e706dcd17a6d18cda78"],["/Java-GC/index.html","ee8443dc4d6cc95f3a57ea0c6c8287fe"],["/Java-Servlet/index.html","ace4bad7105722c764f5724bf7fb5c56"],["/Java-array-and-collection-sorting/index.html","2f8faab7c98d88e49b302b31f0b911f6"],["/Java-development-tools/index.html","1cc3cf1efc96225f3f23ab7218b2250a"],["/Java-eight-data-types/index.html","56883952c9cea215abb11e6ddd41d0a3"],["/Java-interview01/index.html","10a0e490309c5029f9fd3bacb1b34ed8"],["/Java-interview02/index.html","f7e89d65952782cbc204497b1d52702c"],["/Java-interview03/index.html","fdbeaaae6ecfa414375f42622260c6f3"],["/Java-learing-map/index.html","30f0cad059a391a7d39b97c7b2b1ff77"],["/Java-learning-route-map/index.html","1a0ff26ea3458a9eea11b20279e0537a"],["/Java-memory-area/index.html","eeb45f9153ba3a2f37bff1f8eef4523e"],["/Java-memory-model/index.html","5569aaf882f37f41ac3ab085fc2bf0c3"],["/Java-multithreaded-learning/index.html","1b8f2b35bd6d4bcb304f875cbcd88b29"],["/Java-project/index.html","10626819a2a5456f2004aa152c670ded"],["/JavaWeb-Chinese-Garbled/index.html","166696a29f9b2be92c96ddb92857d896"],["/Java还是C++？/index.html","30b9c712a816f5e4c175e243facf60d4"],["/Kaggle5-step-guide/index.html","cfe0c299f9ee36ee02dcb3281fabfb8b"],["/Knowledge-points-of-Java-garbage-collection/index.html","4bdc9ec5ad4fc67431c8e3711f7a7c29"],["/LLM-DP-TP-EP/index.html","2c97e9e140a27861febc30a9b66d1379"],["/Layoffs-Hiring/index.html","ab014ea940e69bfc6df17be6567dd600"],["/Layoffs-and-Hiring/index.html","5ecf27c752c02be303e30a69536cc198"],["/Linear-regression-of-machine-learning/index.html","19d7a94f964c64c29ad04c00bb439dc7"],["/Linux-Compile-C/index.html","4aead8a575450f17eab383e75384a0ef"],["/Linux-ITK/index.html","c7df679755e2ec8538679c4bf09fc351"],["/Liver-segmentation-of-sparse-components/index.html","cf623c48ad4d7689f88b016ebe6c72f6"],["/ML-EBook-paper/index.html","c55a447835bb234b78914c335f518895"],["/Map-uses-multiple-maps/index.html","62c9244d86e356f3bd91511621b5a3ea"],["/Marching-Cubes/index.html","a5a69772268e4b39e249c1e838599d60"],["/Matlab-Graph-cut/index.html","22a9b8aa96948d49a710b8f16edd3402"],["/Maximum-Likelihood-to-EM-algorithm/index.html","5525cbb6004ff0f4e64feb0be7a8acc0"],["/Mean filter and median filter denoising/index.html","90fe76b719c10409a69e04d878573236"],["/Medical-Data-for-Machine-Learning/index.html","37c900b866fc4c4329471af36b77bef9"],["/Medical-image-analysis-deep-learning/index.html","0b3edf970861fb4f9deaee77744484b0"],["/Medical-scan-image-processing/index.html","f8f6de22c8e781d160ddd145f601e3af"],["/Merge-sort-algorithm/index.html","13b40c3a5810e0b72ea74ecbf385b24b"],["/Monthly-income-2W/index.html","9b43c3f096e8871ecff9d00e1f249e50"],["/Mysql-database/index.html","e0bc2950d94098fc09c662394fd7772f"],["/Neighbor-Embedding/index.html","fdaa32fe886493c9b9184a9333fcef3f"],["/Neighborhood-approximate-random-forest/index.html","dcf9dabfa143cadeb372c986ea96ebe6"],["/Net-and-official-documents/index.html","83e0d3752a9dffd7bb4afd1a2075e095"],["/Netflix-VPN/index.html","9a3b6ae4894b800add7e6d1a52ac8eb6"],["/Network-principle/index.html","6c3dff07cf0fbfe85452b6fd71c03ac5"],["/New-Hong-Kong-stocks/index.html","bd72cfa77cca3f7aa0c204194355c5b9"],["/Nice-to-meet-you/index.html","a61178b0e393ce8dd6ca4f9ebb4af32e"],["/OS-processes-threads/index.html","7e1dbfbccedb47e9639c806e005e11f6"],["/OS-run-environment/index.html","a27cd8a7344eaaec4dca17d6d97150d4"],["/Open-Internet/index.html","3d9d998ed9709932d3d91ed768a64e0f"],["/Open-Internet2/index.html","145f365bae8d97a5eb25c00999e965ac"],["/Open-source-community-and-rewriting-website/index.html","5fe1dfdd8881a3943ede85f49d685d74"],["/Panoramic-image-stitching-based-on-SIFT-features/index.html","a3fd319b642749023fadd2f087a1e25e"],["/Parzen-and-KNE/index.html","5fd3aaa1a851ee276607ae849a053be2"],["/Personal-technology-blog-site/index.html","3e0239ff134a2333326ed03721ce60ef"],["/PicGo-Gitee/index.html","d7dd2db1ff78b6b6a8966df81d33b1ed"],["/Programmer-treasure-chest/index.html","13c79d5a7028f581b4d7c659565c6e9c"],["/Prototype-mode/index.html","a95c879615fff0b6862889d21509a1cc"],["/Python-base/index.html","2aaff1e0669515ac7d6effcee56ba15f"],["/Python-crawler/index.html","6ad7a36276a615dff96fc8b67ef34447"],["/Resume-revision-suggestions/index.html","ba82d2b0dd2628fb086a99eccc6fb07e"],["/SEO01/index.html","f01970b3b5f82ca55e12e6038d5534af"],["/SEO02/index.html","ca8e08f0a7ecfbfb85b4a636c91fa024"],["/SPHARMPDM-MEPP/index.html","934a6fbfc222ba9f80dfd1a29cbee111"],["/SVM/index.html","7e389569036013678768d9638f436630"],["/Seata/index.html","5370156129792ab2332a9b311ec9a994"],["/Semi-supervised-learning/index.html","0cbf998063641deb19493877dbfb166f"],["/Sequential-model/index.html","c746ab475a26570c9a6c42fb778ece93"],["/Shape-Based-Human-Detection-and-Segmentation-via-Hierarchical-Part-TemplateMatching/index.html","031b98788651add9561b75794d03a7e6"],["/Spring-basics/index.html","83e13708e4dba5a59735b04dc9b38769"],["/Spring-integrates-hibernate-Struts/index.html","f94d21ccb7714ed0eba03d92691dcaab"],["/Structure-learning/index.html","eee70b0986faff47e87fbef80cc4b893"],["/Suggestions-for-self-study-of-computers/index.html","eb0f71da45a37e28768bbe85ef57c1eb"],["/Summaryof-HongKongStock-Account-Opening-Links/index.html","e0a823c3e89d019e31537238b72f16e5"],["/TCPIP-detailed/index.html","62cc6bae00cdc684225d5d89ad69e87b"],["/Telegram-VPN/index.html","94de55fbe701cb3e003798a6266134fd"],["/Telegram/index.html","74badc34aa4dd25a9b837da9228a75d1"],["/The-essence-of-shopping-festival/index.html","5cba3fb302dec25b34f1e51bf7d3bcb9"],["/The-most-important-investment-in-life/index.html","b1ac824df2422c224a8db3df83c28c97"],["/The-most-successful-nvestment/index.html","343f5be8e2adc829c56cdf283c68932c"],["/Transfer-Learning/index.html","e43f3f7c5cafdc40fdac425cd1ab4ebc"],["/Transfer-to-computer-major/index.html","cadcd58bdc5d482f7908e7dca135ce82"],["/UNet-Convolutional-Networks-for-Biomedical-Image-Segmentation/index.html","08783a896c058914286e53c6d6d65817"],["/Ubuntu-install-sougou/index.html","faa1b522e337b5930654b2189d5433a4"],["/Understanding-of-paying-for-knowledge/index.html","edb8e730d830d120331b7d99a34e26da"],["/Unsupervised-Learning-Linear-Dimension-Reduction/index.html","e786ecaee4d758a0076859967690d4ae"],["/VPN-HELP/index.html","91ae0d698419bcf2b375f09590e616ef"],["/VPN2025/index.html","0ca7aa383b3fec3a00771c97de9e2770"],["/VPN2026/index.html","906b12645b22d8098eeb60af8e2d2e8a"],["/VTK01/index.html","36f057c7de0942d24b129ffb13370a5b"],["/VTK02/index.html","da12da68cae35784c6b92b0e248f403a"],["/VTK03/index.html","1b47c1fb5e72b237487bfbd54883d26d"],["/VTKRead-write/index.html","2419201d925122351b8032cb8737ccc7"],["/Vertx-Java/index.html","10ed7e6db810bc706b0ed29bae1ca08e"],["/Vpn-OpenInternet/index.html","88f52c178825c9db18cf37c8dc7d24ce"],["/We-are-all-good-kids/index.html","ff9252225da583da0e4063c9b87ab3e0"],["/WeChat-80/index.html","617793e75256927268fc496294761a89"],["/WeChat-red-envelope-cover/index.html","211a0689065ea3a20915e07d7821208d"],["/What-is-crawler/index.html","0c5100e26597372ad64ae3fda65a08ea"],["/Win-Internet/index.html","d1a8e5d71643aa5b1f96388419dffb29"],["/Win-Open-Internet/index.html","c5cbf9113b4ede5a3c9bd5107eadc4b5"],["/Win-OpenInternet/index.html","c6e85f52e1e4ed15e5b39818a21e88bb"],["/Windows11-2kfans/index.html","4eecf2095418845250347a1c10fefd7f"],["/Word-Embedding/index.html","885e02a093b3b9802db27e8facbe428e"],["/YuanShikai-and-his-Beiyang/index.html","b037f320a1f3bc37f34d882fb41699b0"],["/Zero-copy/index.html","571a58d03930aec4f9a125b6611cbb24"],["/about-keras-model/index.html","ece3536467d352f2ff9e6ede99f4c2c3"],["/accounts-google/index.html","2986f28787ab98fca1b91263add6ce76"],["/algorithm/index.html","7de9dcf8a45f1602cb33ae6f02f8eb67"],["/alibaba-Java/index.html","7002d6d9e0d6cfe5d1ffd8ff766649bd"],["/archives/2020/01/index.html","cb331b17db037270c04839f96a88e170"],["/archives/2020/09/index.html","ac354ba6d334d099494e29bcb5f6da46"],["/archives/2020/10/index.html","321c99dc7f4f9033981fab4eb61c4f89"],["/archives/2020/11/index.html","f2b03b98f1b8546b3406776879aee725"],["/archives/2020/12/index.html","621e6a1a21794ae09272d90fac6f5fcf"],["/archives/2020/12/page/2/index.html","3cb35b0b269c013abb30a5648bd03026"],["/archives/2020/index.html","35a73fc7d21bee12ed358ad79b53b736"],["/archives/2020/page/2/index.html","ed2a08b9e6923f41c87ab3e2bd1f7eb2"],["/archives/2020/page/3/index.html","de924a0b7171de003e954cfe3528b665"],["/archives/2021/01/index.html","317677f447534c92ab6e78b5203c769a"],["/archives/2021/02/index.html","7face9c187d420f30e9f25033419d18b"],["/archives/2021/03/index.html","7fa06ae48962f2856fa13371a4e143b3"],["/archives/2021/04/index.html","d622261b0d383f960d1f3d20635d0f30"],["/archives/2021/05/index.html","3c5c2c5dbf080aa1ff9cd14e71c098f5"],["/archives/2021/06/index.html","1649a6baaddfe773d5674c6212244269"],["/archives/2021/07/index.html","22de95b3a05c54eeaea805aca034534d"],["/archives/2021/08/index.html","eacc02d2b8d9e67e14483a7cdab9e63e"],["/archives/2021/09/index.html","24a068396aed14f426be8ea66fdac8fb"],["/archives/2021/10/index.html","e62f04bef894e7b0bf83319b964c07a1"],["/archives/2021/11/index.html","053b654b25a590370e245a6675b90831"],["/archives/2021/12/index.html","b5752cad13f9e75218d5bc9b158d5ea1"],["/archives/2021/index.html","0042dcf67a2e2c62e7e3ded8040cd800"],["/archives/2021/page/2/index.html","3355ce7feaee2317cd34bca74d8a172d"],["/archives/2022/01/index.html","c5fc2d992dc78e95c3c453c677fbbd46"],["/archives/2022/02/index.html","6534602d6bb21ddb27da7e6fa3a8059c"],["/archives/2022/04/index.html","333f88977b702a01fecedb6b8bac6732"],["/archives/2022/05/index.html","0317939012dbba8e01406ff59945a7ca"],["/archives/2022/12/index.html","fef72e51594c0853e8d3b8e6da37e3e7"],["/archives/2022/index.html","2223a91bb2fadcd59bde45ece2a1a737"],["/archives/2023/01/index.html","9d576e944cea54c7a7adc502c84a5db2"],["/archives/2023/02/index.html","bb6cebfc0c595dc7cb2136af02ee5643"],["/archives/2023/03/index.html","c490416ea46620b48d455d82b195fcb0"],["/archives/2023/04/index.html","3b95d9b979f4fa087bfdef3886835fa8"],["/archives/2023/06/index.html","c5a3e8841ec7c1ab224f303eb97dccb1"],["/archives/2023/08/index.html","f36e44abe745cde2d5e7f668c47655af"],["/archives/2023/10/index.html","6eab068c053df481cd730f00d510919b"],["/archives/2023/index.html","d5480a7da6f6f5e59f337ca3a6b95f74"],["/archives/2024/01/index.html","817debc9551649f782ad97e7a26a330a"],["/archives/2024/02/index.html","0466010b3a976e97eedc95e53c6bf653"],["/archives/2024/index.html","7a1ade0176d2a4a00101b6fe79dd30c6"],["/archives/2025/06/index.html","778138c204b512724778b30bae59bb49"],["/archives/2025/07/index.html","2869681caada086f15521c5d546097dc"],["/archives/2025/08/index.html","6ca37d13d54ea82a4f8ff7018494f5d6"],["/archives/2025/09/index.html","9b4688cf7a0dfa1d0fd5a0f100c43981"],["/archives/2025/10/index.html","608b9f6716acf883738169bc402f2989"],["/archives/2025/11/index.html","393d9048d7809d76d61aa9fef77a133e"],["/archives/2025/12/index.html","5c7f902cd35da684e87ebd7825360551"],["/archives/2025/index.html","dcb655ff174286b2ed075e19563d2933"],["/archives/2026/01/index.html","5f35813a3cbda285cb64752b0e1a5d11"],["/archives/2026/02/index.html","445df25485f84631ff22823c8f64d16a"],["/archives/2026/03/index.html","9b7e4be75f50061874a8f7ccde26891e"],["/archives/2026/04/index.html","c7037fd50968c2d94cce453a541f3ac1"],["/archives/2026/05/index.html","68379d216738bd0e896be35ff5d91fac"],["/archives/2026/06/index.html","7ca9fdbd793c009f4d823843ca64bf1a"],["/archives/2026/07/index.html","2460a1dae78e1331b1a8230fab0c0cc3"],["/archives/2026/index.html","a8f9281597bf1bd67cb0196084fde384"],["/archives/2028/02/index.html","4eb6f091357bf5988572ceec86eb8033"],["/archives/2028/index.html","4a5c71fb6b6430b0875c2756e0e7872d"],["/archives/index.html","022438c6bb48cc29b9deb556e677aa94"],["/archives/page/2/index.html","aabf34c53f05fb55208f66e7b9fc159e"],["/archives/page/3/index.html","27ccf77cdf366000d6892e80effbcb43"],["/archives/page/4/index.html","deadea46e4f7ddc928747edd8a3b619f"],["/archives/page/5/index.html","a7e33d3ad5a8127dac1cfa6bf5d3258a"],["/archives/page/6/index.html","28706f625be8d2a0053eb18cfbd4f298"],["/archives/page/7/index.html","d69d2bf0847905b92f8184e5a1bcddfd"],["/baidu-search/index.html","f6a675dd3b4c886eac267f652ee0d495"],["/baidu_verify_code-Hh2fKNlEB1.html","cbe80c25f15902f710ccff4a638fb32b"],["/be-a-programmer-instead-of-a-code-farmer/index.html","4531f0a933b45869062017860609b63f"],["/best-vpn/index.html","d2243fecfa072ef9539b45b1c712b47f"],["/best-vps/index.html","da77ec036bfdc14135c37352db907d3b"],["/bought-a-house/index.html","8e5ba1a2ee17c2cc02eb63fd91edaace"],["/categories/AI大模型/index.html","e1598dc0c066f68b0f8b21993821ce08"],["/categories/C与C✙✙/index.html","7fc1d42ff1fb9266ce0f06390817b3eb"],["/categories/Go语言/index.html","cc826ce7fa737e91c5a3c72f4cfa2e4f"],["/categories/ITK与VTK/index.html","2a8ea2a5d3f4a69ca703e7252f0aef3e"],["/categories/Java/index.html","73ceb80b460794b52600d76a8fdd3a90"],["/categories/Linux/index.html","ea921bb82425579bb38f2008bebcb278"],["/categories/PLC/index.html","b295bd854d3a972d7351d23da11494b8"],["/categories/Python/index.html","923463af65c3d1c4c49e52baa64ab4dd"],["/categories/SEO教程/index.html","ac42865363e7f076d513e755217197e5"],["/categories/index.html","9ef3e8aca0f2115182a12a474080144f"],["/categories/图像处理与机器学习/index.html","ad5f55cbfc343c61e2ac29e6e6ebf9bd"],["/categories/工具/index.html","a0c9934f5369292434d5c7c4b71519ef"],["/categories/技术以外/index.html","75a317b2e9ba8ba5fa7cc9de217222bf"],["/categories/技术以外/page/2/index.html","6a6ec1c6139131e24a82fa38f647c40c"],["/categories/数据结构与算法/index.html","bf832881bdb1f2bd4463718e5de7d8ca"],["/categories/科学上网/index.html","404897a36224d50ec104c5dddd082dd2"],["/categories/编程经验/index.html","1321307cedace4b8102a61f82d22cb24"],["/categories/编程资料/index.html","9f103563cc720eefdeeb44936a448142"],["/categories/计算机基础知识/index.html","65cc98d6224af0679d1b0598be41a786"],["/categories/设计模式/index.html","0a0db80428f374bdc58d169581f0d4c3"],["/choose/index.html","dbda293bbcbf8ad70c11e51ef8aa4a30"],["/choose2/index.html","52f3569978c58decb4eebbec9ce1b4c1"],["/chrome-crx-intruduce/index.html","30c4557353880083e3cb702626a9dd88"],["/clash-free/index.html","481c2443470a52bb4a8925634bdf41b8"],["/clash-pro/index.html","96e0a08e24279ca9444ecaf0eb47b0f1"],["/clash-verge/index.html","d2d329968b1aab21961c2e874712c75e"],["/clashvpn/index.html","bab9681a44e53b9da3c4d06b7bc8c6bd"],["/claude-code/index.html","e4b34a3caec8126c92ac40283a875ed8"],["/coder-blog-website/index.html","0ee987d34a265a3d15d7aad72bc065bd"],["/coder-source/index.html","490d181564330562fcfd88d435f2ed86"],["/coder-videos-website/index.html","7b1d844234880edffd6eedbd4b403b0b"],["/computer-book/index.html","2447ce616c5f790ffda493080c57fe62"],["/computer-censorship/index.html","a36f3c3fb4c890a52d5f328834821c93"],["/computer-network01/index.html","08ce4e53fa502d45d9fba4cf5458ac9a"],["/computer-network02/index.html","bd66fe41b1d0559d44714c7a177e2d09"],["/css/main.css","bc32ad34ec4990d934c3c647bdb62f79"],["/database-Mysql/index.html","81e7750cab535d4e50e257b954de861a"],["/eclipse-lombok/index.html","17c36f15c53dfcfd30f6c5b692ac087c"],["/freego/index.html","7e14f09f4c9eddf61eb0ffdb028858b1"],["/fully-convolutional-networks-for-semantic-segmentation/index.html","f63fcd667a637bf04e0366b2af13f94a"],["/great-firewall/index.html","8af7c403c15a7ee6d400cc99e8576529"],["/halfrost/index.html","b802be81084823b9de035e55fad028f6"],["/how-to-signup-chatgpt/index.html","29f2349d527b010fa60d34f565f8431a"],["/how-to-use-Gemini/index.html","121fd0df825cf6c1a41f12fc3f61d99b"],["/idea-continue/index.html","a88ddfb4d216e35015bf62f9619cc6bf"],["/index.html","fc463030ac05e18429563064a37f719f"],["/internet-dir/index.html","8b5cfcb89a8514e59fd4249a1303aa9b"],["/ios-open-internet/index.html","66331e7649d14480c72ad2ba0c9b42e9"],["/iphone-open-internet/index.html","7bfd621f883034605df9f30370881c30"],["/itext-makes-pdf-form/index.html","283dd88ad3ebbdf180914bd09a1f3a33"],["/java-Set-Map/index.html","0688ef46f4d802c1afe1d04d9af511a6"],["/javaweb-server-error-codes/index.html","939acff9a62436dc644ddf5fc6c07a5e"],["/javaweb-source-code/index.html","4203542ab1f88acc4758d6d5de9dfe7a"],["/js/lib/busuanzi.min.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/js/lib/lozad.min.js","47904d34a224931dd1b615c59a3dbe3b"],["/js/lib/prism/prism-coy.min.css","0ccad54d95845901ead59bfd3ecceb14"],["/js/lib/prism/prism-dark.min.css","a4711d2957d6605eb5682bdd228cf123"],["/js/lib/prism/prism-funky.min.css","efedcdccd7a9ab342d2d9cacd24920af"],["/js/lib/prism/prism-line-numbers.min.css","38e22e790c279bb56f9ec4b90a2a2d58"],["/js/lib/prism/prism-okaidia.min.css","5ac6f9de996fbec68aaa106dfb16e061"],["/js/lib/prism/prism-solarizedlight.min.css","ecc7e64d039873ffcf7fb27babdaeb5a"],["/js/lib/prism/prism-tomorrow.min.css","456af2a14ae4f5089939d5904ac40fe8"],["/js/lib/prism/prism-twilight.min.css","ebb5c355332a8cf9a1ce37a2a69d678f"],["/js/lib/prism/prism.min.css","a5234d614834658887cec6a9515890f8"],["/js/main.js","052d2b299d9c750afea8df0b802ab7c1"],["/keras+TensorBoard/index.html","8e9dd403165b81d7cd7bf1a8335de05c"],["/keras-beginner-guide/index.html","c0a72f76ac8aeb6b697ba7c7e5b930ff"],["/kimiclaw/index.html","df0be823f7a95a6c11fbd18ae5948647"],["/kmp-algorithms/index.html","a5e97012160eda2f6b7814a035da88e8"],["/leetcode-Java/index.html","ad92c40ec29de2171a8578259fda5449"],["/links/index.html","d9db0a6f7fdc7fea8e925aae9701015e"],["/linux-java-opencv/index.html","3d69b715ee39af2b0896414d70246f4c"],["/magic-internet/index.html","f22fed0acd44186df00f4809dc5cc834"],["/magic-vpn/index.html","69202490824b63ea6b2884fe6c722a38"],["/mingci/index.html","204ad9b783bc0fc5719b7831fa29f253"],["/mobile-vpn/index.html","2d2918f6b32119297708c01ea0ab2fb8"],["/msb-source/index.html","f7063b09a6c4d857a4143c22451c0d67"],["/online-BUG！/index.html","29b02696a43b0379bf8ef298fede906c"],["/open-app/index.html","6b50c0000d820033277522ba041a061b"],["/openclaw/index.html","2a4bc1daf8565b846f3f06111f4b5c9c"],["/openinternet/index.html","8fffe5973e0dfc68cb0477b9fd106d7a"],["/page/2/index.html","9e6a7fd876d2fd3c248a7324dba3f408"],["/page/3/index.html","bab37502a19fd7c3e84d8da083835203"],["/page/4/index.html","5aa0fb2c8b5b1d5d8ed4b0548c92974f"],["/page/5/index.html","37036a37ee73b7809b862b04da11b0b1"],["/page/6/index.html","cf509f64b8ef3abad06c41fe4fcd130a"],["/page/7/index.html","ee16da636a8892b8e4ad3427be43d9a7"],["/pandas-data-preprocessing/index.html","126e86e9b455fb4f54abf44f9963b45a"],["/phone-win-open-Internet/index.html","467af30d8593fbc7f1c6ac7894a30bba"],["/popcorn/index.html","08b120dc60a43986fae4e5dcec947bcd"],["/protocols/index.html","4e63bbdc89d4f8cc43d2109671fd80e2"],["/python-Blog/index.html","3922fa1837b3e8f3be828d5c299fcb53"],["/python-yeild/index.html","39a1e2503e265f51ead979c043611535"],["/python爬虫教程/index.html","dc3691a9a77f344a1136e7eb7d232fab"],["/route/index.html","43194b0172490c2befd4f42905e58ebf"],["/search-help/index.html","80b22048cd84125359678055db33bc18"],["/software-copyright/index.html","6dfc764d3da196c16dd6b843bce09c7f"],["/sw-register.js","1c52b6fa3b8bc2d26ce182078468a521"],["/tags/AI/index.html","22a5313eab662e52519ad3ece53b5594"],["/tags/API/index.html","82e8364ac0df2d483c1d229da0f9c363"],["/tags/C-图书/index.html","0ecd10077e598a4e94b26b9ead58a9a2"],["/tags/C/index.html","c37f18566ccc51a99bc0e74ffaa3b003"],["/tags/CNN/index.html","4568d667eb4599c4966178da8f06d810"],["/tags/Chrome/index.html","aafd89c23eb33831943093af98f20198"],["/tags/Clash机场/index.html","0a18f8aa14313fac8e95a62ba6900dad"],["/tags/C✙✙/index.html","230c27210e326abb1490edcf6321b1ed"],["/tags/C语言/index.html","3fbf76661fa83e1bd3e069c5320f957d"],["/tags/C语言图书/index.html","c5a69ff99e8208a7b794dc507e94ac6e"],["/tags/DSN/index.html","a564749b2ca8c41c1c622e7f73915a00"],["/tags/Dll/index.html","b5f2e71eb837a9d4e68865bf982eaa80"],["/tags/ECCV/index.html","e5b0aeaa7dfb1d00bdd7426931ea033c"],["/tags/EM算法/index.html","d2bb5428d49c39527ccc69cde1bebfbf"],["/tags/Eolink/index.html","d2c9b5df210ddd180e23307aa8120dca"],["/tags/Gitee/index.html","2d22550f6bb7c8350076bbb4b24e1f66"],["/tags/Google/index.html","7541041c84b46ef29ae06e19d42b193d"],["/tags/Go语言/index.html","d8f47b59afc25ad3198882e1813a3c85"],["/tags/Graph/index.html","6a19fbbb1a4ecb3bfe5185db4499169d"],["/tags/HTTPS/index.html","1e19811fab2a4a0f74f37f264c350617"],["/tags/ITK/index.html","7e4c0f4b5f8ef36289ab376d7d3b8c24"],["/tags/ItkVtkGlue/index.html","6713759a45892d72682876633ed0eeb1"],["/tags/JMM/index.html","3ed0ab2d9b7f4c9c379573dd5e1c5b74"],["/tags/JVM/index.html","badbc80cc0d43a44218c9c7cd8ca3579"],["/tags/Java/index.html","a7001d535aa5467ff5e3421c9b5a1519"],["/tags/Java图书/index.html","e10d33de4de34457af4ec2f3f4438d10"],["/tags/Kaggle/index.html","a511845075d6f7ed085d7616dfaf03be"],["/tags/Keras/index.html","df0fdafb7340a0ef749c4482f727cd72"],["/tags/Linux/index.html","34d6164ac8d24d3ef7a247dbddc4fa3b"],["/tags/Linux图书/index.html","5f91c4b581710be25e12ced395337c10"],["/tags/MEPP/index.html","c245fe200c538472b3d6b72a776815a2"],["/tags/Map/index.html","c4c2c1a6431af85dc8409a5a7c08de35"],["/tags/Matlab/index.html","d74ec3bd5fec70eec3b972b9b4dec36c"],["/tags/MongoDB/index.html","c5a6b0183a3137ae220d854bc2a4fc3c"],["/tags/MySQL/index.html","6453c7d5cdd134fce9f581b0d647c46f"],["/tags/OpenClaw/index.html","071d42261eb1eab1220a5215fae3e6f0"],["/tags/Parzen窗/index.html","2dd796a2597906e61ede7cd68c3036fa"],["/tags/PicGo/index.html","c76dbbd602d557dfcba38f93098c4c8b"],["/tags/Python/index.html","f794821eb36ac90a24f9d7af6db80a7e"],["/tags/Python图书/index.html","f56facd5adeec6fb720994199b6b2d9e"],["/tags/SPHARM-PDM/index.html","2e3d7655c860816d49840a8a5166286c"],["/tags/SVM/index.html","b2ef35574b0e65ec4f2096901bef295b"],["/tags/Seata/index.html","bbc67129e2be565d5467db56b0c729ef"],["/tags/Servlet/index.html","d7eeb95261695e2e950c72f57bd9c73a"],["/tags/Sping/index.html","0aad4f8239e7a2933a54eb4a2b6cdb1e"],["/tags/Struts/index.html","46dab113f579fbd7851b254b93a4b9f9"],["/tags/TCP-IP/index.html","cbf081dad56d37376ec96af961a43edc"],["/tags/Ubuntu/index.html","bffe051fc80cfd32c183409e47703630"],["/tags/Unet/index.html","5ce74521644ebd6191f2d8070bf415e9"],["/tags/VPN/index.html","b618155482ea964dfdfc923c9d73a2e5"],["/tags/VS/index.html","add7634a948f722e3522a3981b8d1d03"],["/tags/VTK/index.html","4d7417c6723c527b6429adbaf360e58d"],["/tags/Vertx/index.html","83567e2cd0b7d4dcc3012afe648c4e65"],["/tags/Windows/index.html","3e64d2a1fa115ea90c94e805b7df20e8"],["/tags/claude/index.html","a4f19f0afd8b9b268231b0afd544915e"],["/tags/edit/index.html","2c5e6c53820e1daf5cc68acab2735f3f"],["/tags/hibernate/index.html","b84220969447578b2348185de0d15c7f"],["/tags/index.html","6cbdea3d67db0ade000d1577b462d2ec"],["/tags/itext/index.html","ff9a82c55be1aebb151f3282f237272d"],["/tags/jdk/index.html","4bb2f58c25e534d9ff36b9dad3ad6074"],["/tags/kmp/index.html","6859f1cc2d83d0a332d05477f3d24900"],["/tags/k最近邻估计/index.html","bb1f530ae110b4f010f51e77e524578e"],["/tags/lombok/index.html","55bb4b0bdf7ca4b8a1f9a22195b9a748"],["/tags/offer/index.html","a98ca5b27d43d6ee4f6b6a37cda05345"],["/tags/opencv/index.html","cf7475b098f82b6d4d9f17e1f2649c69"],["/tags/pandas/index.html","7365e51067782a89452a20ee061aa8be"],["/tags/string/index.html","51e18034cb0e2dabf8c75e3ecc53cfdc"],["/tags/vim/index.html","04be52fbed158557359eaaa2fea4bb03"],["/tags/vtkPolyData/index.html","7cc9b3bc1edab87ce2f4433e92923095"],["/tags/web/index.html","938e169e42f4eebdc20029b32ffd0195"],["/tags/xshell/index.html","5683a4169c0b573a788e4b6ed4cd6a2b"],["/tags/yeild/index.html","05ae04d454a6ae6063718f163ab6c896"],["/tags/互联网/index.html","e8d53fb5050ccfd4d357d63cf13b3150"],["/tags/人工智能/index.html","8ce1051ccfab12c656c214f742f428f7"],["/tags/体绘制/index.html","aa2bf6fd8a046077ac3913d9bd62625c"],["/tags/全卷积网络/index.html","4e019a10a6eccaec15012b8d39010f25"],["/tags/公众号/index.html","a63a0ee1b9d4b7c3d18453fbdb80da35"],["/tags/内存模型/index.html","6e15934c880a3c0dea7ed0eeb62cfbd7"],["/tags/内推/index.html","c305273a98fdb57dab1279089ca6f94f"],["/tags/函数/index.html","288c04a92d89aefc7642b943cd8a5121"],["/tags/分布式/index.html","f1db44d51e922da44c810cb9b2b5f026"],["/tags/加密/index.html","55d2fdddfcf92b472d52ac9f73558ed2"],["/tags/医疗图像/index.html","30e8bfacebb6d8ed9e0b4534922129f1"],["/tags/博客/index.html","468674ee8f8336bcdcd493f1a15ac611"],["/tags/图像数据/index.html","aabe36276bfdbb6fd2e5d4d5a13a6704"],["/tags/图谱分割/index.html","673272418755bbbcf3ea57afbd770f38"],["/tags/垃圾回收/index.html","88fe763c5b7baf969b3a6d0614a09c7b"],["/tags/多线程/index.html","71f9085e96662fe28f184e0c816dc887"],["/tags/大模型/index.html","df5883e80508a4ca6f3fef0886e3101f"],["/tags/字符串/index.html","d8adfb77123bc8e113cb9dd583173c3a"],["/tags/小龙虾/index.html","c3f09930db40aed42e2c167a036d8f3e"],["/tags/工具/index.html","ea9b8b42fbccbfb3972496e782553742"],["/tags/弹性形变/index.html","b43dcc94e7ee0a3f71b2115baf7ba385"],["/tags/排序/index.html","11a5d547d125ba86e6957069aefd60c3"],["/tags/搜狗/index.html","583148fef82bd43235ee29fe0d04946f"],["/tags/操作系统/index.html","6ce1bff822a2f56c43605af2d1cc0999"],["/tags/数据库/index.html","a84c2afa4044c5ca828ec1f9452ae990"],["/tags/数据类型/index.html","b80586f6d3faff3dbc2fec64d5858367"],["/tags/数据结构/index.html","65d2307e7da399eb06ef44265170692b"],["/tags/最大似然/index.html","55914430bffaa5a00b6bb25300b9bf93"],["/tags/机器学习/index.html","5c24d0dd7d243aeb3fc33b15e0fccc63"],["/tags/树/index.html","900661ca8ae984c14085432d0fb415b4"],["/tags/框架/index.html","4f9643e5003a05f2e95c7d535bc52f32"],["/tags/梯子推荐/index.html","eed722261794174a58c1790a1a5529a8"],["/tags/求职/index.html","eefde73d6c9f39750c78f631e2e23d0f"],["/tags/汇编语言/index.html","edb4e73cb6c7f010b2e41eb377528828"],["/tags/深度学习/index.html","c20a342880b41b7204accfa7556be6a1"],["/tags/深度监督网络/index.html","65f38b91e08ef36a4524cc23bf70c826"],["/tags/爬虫/index.html","59ff2e37dabc36eff050731916572e99"],["/tags/电子书下载/index.html","7ba283ef65293cb58fc6278304a47213"],["/tags/科学上网/index.html","72b292dc1fb166eae01a06212e902437"],["/tags/程序员/index.html","c37ce91223bbe853ed2efd66ffbb7846"],["/tags/程序员面试/index.html","34034064aa38bb5de4037c3a015eddc0"],["/tags/简历/index.html","c790ba773a9871bfea986837fa9dce58"],["/tags/算法/index.html","75dd1ac3d4f2da1581b93913668d4a18"],["/tags/线程/index.html","997715d7b2bd34de4da67085834c5808"],["/tags/经验/index.html","1a6269243525f7fbdf64816f47e32e4e"],["/tags/结构学习/index.html","509f72c3f540a0449c980e9c9f5ee77b"],["/tags/编程/index.html","82c63996bd695bba9bd699166024b20f"],["/tags/网站/index.html","bed11bd51db127cf8fb93034497edc91"],["/tags/网络/index.html","44f7c410830fd9e1ef3a510ab1600ad1"],["/tags/网络原理/index.html","385d10fc412ad24a9ab2b99416612ece"],["/tags/翻墙/index.html","00eeab0bd4ff7a0c279423eefbebaaec"],["/tags/肝脏分割/index.html","b6d6ac640d38d04d7744bcda12efc87b"],["/tags/计算机/index.html","4676cd687a3e50c1db07216a1fe50c88"],["/tags/计算机专业/index.html","27e36104166bacbcd476b5cc946b2e34"],["/tags/计算机网络/index.html","71bf519407130f0ae9ea8761a8fc6f08"],["/tags/设计模式/index.html","16a7bf4e9e3253ccca1cb6d97ec5d1c0"],["/tags/贝叶斯/index.html","bf47108ffde4c2874df878dd53e9cc93"],["/tags/迁移学习/index.html","0d3bc6982b3d014ae55854a9eed58ddb"],["/tags/面试/index.html","b5d594da42745ac67063970ad232fb52"],["/telegram-search/index.html","134a07704f1d738b76b06f725649254a"],["/the-meaning-of-reading/index.html","2e93ca8e4eafb699d4c39b38bfef1e19"],["/the-way-of-pragram/index.html","0388f02294ba153b5db3f85376a4ab66"],["/troubleshooting/index.html","844e8dd30c1f545c7dd8d9c70b038a66"],["/untiypro XL安装/index.html","3e85ee3fd68c93d887d21b3ce21c0661"],["/video-websites/index.html","6302e6e15768c9fcd40f5ba2aa45001c"],["/vpn-freego/index.html","848c1dc228662d92bb89610f05ee0394"],["/waibao/index.html","4672c5df50445db90b165c874e5d6ef9"],["/wechat-fans/index.html","222a2fe0baee65ea0e3b13f12b207dac"],["/window-run-VTK/index.html","603b920c9225fbab76184cf27b785f88"],["/windows-science-internet/index.html","5dd328da7d8f05ae8f0e01bb577ead91"],["/xshell-connect-Linux/index.html","414820517630946469208968a267b6d0"],["/yzhx-vpn/index.html","ed23ea54db2e8de351d518e36f6efc6d"],["/‌Accessing-the-Open-Internet/index.html","c9993c56e0c269bd2c2b1eb5c5c791af"],["/《Java高并发编程详解》，去大厂必看！/index.html","ab82bb335ef204eee40296a4436015e5"],["/一分钟没了 1.5W 。。。/index.html","d042891bcf25c768605a6b0f95b9ddf9"],["/一条高产爆款内容生产线/index.html","8d4391980aa57bb3400bfc865e544303"],["/为高考学子推荐的六个就业前景广阔的专业/index.html","fbc606a8489c2150a7238b879dc20c18"],["/互联网赚钱机器---社群/index.html","613b0a3a5770075d3b1cb13f6de92f79"],["/你们常用的工作方法和思考方式是什么？/index.html","0ee9e5317b19c5af19d477232b58780c"],["/关于环境配置的一些事/index.html","0fcd6edf8c01daebf49a4e846829ce8f"],["/准备了19w！搞事/index.html","267d63dba1aae710e107fd9b73041ce7"],["/几个很重要的感悟/index.html","8e703dc470d076f283953ee855313849"],["/分割ROI篇/index.html","3e4c8d73cb614b442fbb476d3fa80b53"],["/分割精度说明/index.html","c3dc8d8a06a4e0244d8b22ab8c6709d4"],["/分块程序执行/index.html","09ccee6365308baecc6f98f61f9e240e"],["/加班公司黑名单！！！/index.html","8c02122ddc12b62454db3400a7db94de"],["/卧槽，上知乎热搜了！/index.html","60464e09fb79405d8b84bbbab260f4af"],["/卧槽，我的小破站爆了！/index.html","f4d96cf346585cc2dc7ce6f17098ed36"],["/卧槽，我被盗版了/index.html","5824c9392b1e206b0f3eb7a8c245dd90"],["/卧槽，还有985大学在大一上C语言课？？/index.html","e00e5c7a2237fc0c8d38b5e47034ca89"],["/历年微软面试中出现的leetcode算法题/index.html","2d90bf043ee5963aa99b9e946156579d"],["/去特斯拉试车了/index.html","04b1200de03055b193d36adfd02eed1c"],["/吃苦的三种境界/index.html","53ab5fb4136e089e8aa9e0bb254935f7"],["/哪本书适合推荐给 Java 初学者？/index.html","ba2f9d6a2c5ad67aa1c9e03df6917787"],["/哪本入门级的学习数据库的书最值得推荐？/index.html","901e3cb77da4b3c84f9b4636b6334174"],["/国内外常用的AIGC模型/index.html","768353e74ef54dfd9a04409c1496f0fb"],["/国庆假期/index.html","6e1347a85141781f8ade30e7e381454c"],["/图谱程序字典/index.html","6c625960d8621ccc07070be49cee2b30"],["/图谱训练与分割/index.html","a6b1728b79abfcea7a7cec3455e62a90"],["/宣布一件大事/index.html","9f908b162b3d0509a7085f639b1bea9c"],["/小鹏P7i试驾体验/index.html","6453992d19f3b69e42eb3b2abd99fed2"],["/微信PC版3.3.0内测更新，电脑可以刷朋友圈了/index.html","93a012c6e9a4fee895415a35e6c6fc95"],["/怎么更快的赚钱？/index.html","e054792ec52ebecd12b72d43acba3608"],["/我毕业了/index.html","4a393c7eb7259772b939aa451b392e35"],["/我！真！的！找到了！爱上学习！的方法！/index.html","82940750c787efc4a681134d1ba723b9"],["/户口的意义/index.html","abdb9d330bf73eae8b8cccc5ae5b96eb"],["/推荐两本经典算法书/index.html","8493e6716f6e896cf04ee201120450e5"],["/推荐几个在线学习SQL的网站！/index.html","842d912d86954ad218c6893404c989b5"],["/搞了一个程序员成长晋级社群！/index.html","139f44136ef490c44f969e1c517a2655"],["/摘抄/index.html","d4cb5b50b36d60026917be74c9ae9d1f"],["/暴跌30心态崩了/index.html","93bdb990a873f0524ce7e4c91f05df61"],["/最近很火的ChatGPT到底该怎么玩？/index.html","bd6501b52c8777f22d6dba3b9f28b8ad"],["/有哪些好看的日历可以买？/index.html","07fa5c1b8af9f18e2d8cbca41731c72f"],["/服务器有啥用/index.html","80ad42dea485e757539c21c76463100f"],["/来长沙了！/index.html","52f0216c88a10dc24a50dffb41607739"],["/校招污点公司名单/index.html","8f4c4d733ff107d5cf67341f5461c8d0"],["/梭哈200多万/index.html","78e2f6501fb150af16e06104de60e93e"],["/梯形图入门/index.html","d335fc340a05359d7d6107e66820ed9d"],["/橙心优选，凉凉了！/index.html","e23311e10a180ae85a63a8ee9673afb1"],["/比亚迪汉试驾体验/index.html","ba7cb9f9f6fba186f5f7b157c24f3227"],["/清华转学成电，真的牛逼！/index.html","3b2e317a79f395600c33d47441a0d3f1"],["/滴滴程序员被亲戚鄙视：年薪八十万还不如二本教书的/index.html","6ef35e4679550537642dfc9de3a4b64e"],["/社群！/index.html","7d6ec58e6aba6517cbb064662b3482cf"],["/科学上网之VPN篇/index.html","e5569af95e8b7a7bc0efa120838d99a6"],["/程序员必备的几个技能！看完你也是大神/index.html","ce79cc30121729c99f8740e933b9266f"],["/程序员绕不去的槛，Linux！！！/index.html","243be98cbb4029bac06dcd64b2ff2f03"],["/蔚来ET5试驾体验/index.html","ebba3d16f372e7d151024cb75b29c456"],["/蔚来，牛逼！/index.html","c6cc5b5176e5d7b2acc849383b2dd2e7"],["/被录取了/index.html","bc0e28049344f0f10bce0faecaa98b9e"],["/被找事了！/index.html","486b5e2477d3470d56c83b90c75fb063"],["/被拉黑了。。。/index.html","74e840fb9e3e996f134d7b85ceba19a2"],["/被车撞了！/index.html","20a4c3a8343a766a888b54838edf6c92"],["/该如何选购固态硬盘？/index.html","0e185052c30aa84357e7cce73c67d425"],["/这本书一定要看！/index.html","96d543b02052df82c9279befda14d296"],["/选Java还是C++？/index.html","be9fb0dcafaa06a625ddc2edb076f8f6"],["/那些让你起飞的计算机基础知识/index.html","d4c5c0d32af448039146c1bd5e1d3a13"],["/靠这几本算法书，成功拿下大厂offer！/index.html","f02a18e4e7164745c12a04ec5170b285"]];
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
