/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/0010-city/index.html","038dd5398fae8cf48becbf257d642aef"],["/10-algorithm-book/index.html","2f4aa21895f27235a1fd92dda1b6e12c"],["/10-website/index.html","2726945affa84fb2fe4111a221e12335"],["/100万的小目标/index.html","377dc4ccc3d8c1dd5c9f5e9b46b929f4"],["/10w+YYDS！/index.html","36230f3b1cca0d3a84e9110419a65944"],["/10website/index.html","f8261537b90a93dc335a93c35764ca97"],["/12-technical-tutorial-sites/index.html","201a010c6409e88f4db4f5f777c78e91"],["/2 6 岁 了/index.html","3b6dc0adfed5a4850e8755c99a6a3bdd"],["/200万，啪，没了。。。。/index.html","abf4bd33a874f27ab8fdcfd67326565f"],["/2018ECCV-Paper-DL/index.html","ef87a28f8c4f9dd94f73c8d7f5409ef7"],["/2021年固态硬盘选购最新攻略（小白避坑指南）/index.html","a0d2c6eba59495c2796f376a8f4b88b4"],["/2021机械键盘推荐/index.html","4d1329749f527066507e4c96423425ed"],["/2025-07-15/index.html","40fc77f337b1ab07e815a2ab07868be1"],["/2025年终总结/index.html","9cc91ae3277210a694e62ad51a49cddf"],["/2026-Open-Internet/index.html","0161d619c60be5e1defd8e00adb494e5"],["/2026-best-vpn/index.html","e9a2bdf1007dde3d5d43bf97915fee55"],["/2026-clash-vpn/index.html","edc51ed1d064c08b2b179fedfbdf492e"],["/27岁了/index.html","c3630d20e6d6e7165eb7d13452a1d883"],["/3D-Convolutional-Neural-Networks-for-Human-Action-Recognition/index.html","7f603a5fb172ad8d016d8c5139e3bf32"],["/3D-Deeply-Supervised-Network-for-Automatic-Liver-Segmentation-from-CT-Volumes/index.html","e37ea1fde8da6e95824862f3ead2920d"],["/3D-Unet-Experiment-notes/index.html","e5e4134d3b62b56bfe251121a0a9376e"],["/4-Software/index.html","35424a24368fbdff750fed6789a812d7"],["/6-website/index.html","1ba66ae51759210e60a42a21a5cc7b30"],["/7-terminal-tools/index.html","6ca7616bf70dc3f62de6465efdc301f6"],["/AI-PPT/index.html","4b1dc0305109df7901589b1ead1eeabb"],["/AIGC中典型的深度学习网络/index.html","58cc6cc2a14451d2cd707a302cf268da"],["/Agency-model/index.html","da25cba3ad1675e475071aad924b60f3"],["/Algorithm-brush-notes/index.html","a25dc14639e36c19a94637fa91382844"],["/Ali-recruits/index.html","b399434a6fa15a869beb64cd81a25994"],["/Android-VPN/index.html","e74eeb906987b6615d3d42c145f14134"],["/Android-open-internet/index.html","dca1677d2986d30fa7704900147d9eed"],["/Appearance-mode/index.html","67012f717c73961a9f5db173d3a98b21"],["/Backtracking/index.html","f95d10a7d00b5a937eca199cc5716c50"],["/Baidu-Sao-operation/index.html","43f709b4c02d07f4a6b19bba90f42157"],["/Batch-Normalization/index.html","5e6fd93089c204a1cc27e905ffcc3c15"],["/Best-AI-tools/index.html","1c0f4c116f504b6a744b719ecce36f0e"],["/Bias-and-Variance/index.html","8f30d5c1cc439873f7d011d2b6f91052"],["/Binary-tree-traversal/index.html","7a8695c38979f186348859a090fdc0d9"],["/Branch-and-bound/index.html","955fd511b676f42fee9145245d34e101"],["/Buying-computer-for-the-first-time/index.html","ddf93a5a963498d2b5b9abfa8186c4cb"],["/B站向北邮道歉！/index.html","6cbb2436571a880e85a78800a04a92a4"],["/C++-string-function/index.html","04ee0692bce94b7938368ec3ce86fc4e"],["/C-Java-DevelopTools/index.html","ce147c935bcb64a68bb6e539a0f37c24"],["/CS-Classic-Books/index.html","4fa3044945db020959bc6b20776bc961"],["/CS-network/index.html","f40e9167885c7d4bb7c75bccf025fe1e"],["/CSBook001/index.html","84aa9fa2544324e96ac487853641e987"],["/CSBook002/index.html","c0221abd34ba609dd2c370809adc15c4"],["/CSBook003/index.html","fa93f18f8b5bdf666ba17589fe47d979"],["/CSBook004/index.html","341578fa09364ab054eba53e05de9151"],["/CSBook005/index.html","3540e10b4e99bc15f6fa9545b301e92f"],["/CSBook006/index.html","867ae343f6012f24a318eab06864b566"],["/CSBook007/index.html","b0a54c02701292d1e4e237b3ea0b7042"],["/CSBook008/index.html","3e8a5636dad7af69c01f28320fc859af"],["/CSBook009/index.html","03fb30023342e8175869cdbfd1e87f02"],["/CSBook010/index.html","6eea74e8e2e3567ff98601e6003aa0e1"],["/CSBook011/index.html","221ab4a11178a4679f51ee1c2aa36e6b"],["/CSBook012/index.html","9282266f92d8368f780df25665c8b800"],["/Changsha-really-fragrant/index.html","fcbdb7c6009a3a09c14902e56aa171d4"],["/ChatGPT-VPN/index.html","63a37b379d18dddbf47ea32a72d73802"],["/ChatGPT/index.html","b1b8da5cf1adb0ac41ab0471af17cf51"],["/ChatGPT！王炸级更新！！！/index.html","02ce4828366a512b26e26cc009b69240"],["/Chrome-crx/index.html","b8fc355bf8dcaf825faff559a0c706cb"],["/Clash-VPS/index.html","0bb1e501fbb5f30968fdf7bc7467aa1a"],["/ClashForWindows/index.html","dbf37982a7f52a3989318b0d7c5d2d08"],["/Computer-Classic-Books/index.html","34e976de7d343ea9a77633e9f781939f"],["/Computer-for-another-major/index.html","edaebef768e165f524eac996c1f035ce"],["/Conditional-confrontation-network/index.html","2e058b42f8b738b0f8e790c3e846c76d"],["/DNN/index.html","a209573c8516c50e5ae316e73e314533"],["/DSN-segmentation-liver-experiment-summary/index.html","68717551add25084f9d100ee7a3da4c8"],["/Data-enhancement-elastic-deformation/index.html","56e5d05f601e3af284a8ef7ad2457c83"],["/Decorative-pattern/index.html","e39347bdcf48846259c4cb30475ccce4"],["/Deep-Learning/index.html","17aeeda56743d7b4201aadac57a11fb0"],["/Deep-learning-and-medical-image-analysis/index.html","15725f419c350da44e717ac92cbed089"],["/Deeply-Supervised-Nets/index.html","0620095eeff467eb3c4bfdde887a7dd4"],["/Deformation-model-based-sparse-representation/index.html","6d315da82567489cf79c3fd9fa4cbda3"],["/Discriminative-and-Generative-model/index.html","cfcd073bd88e4dbd97371318e99086a5"],["/Distributed-transaction/index.html","cc81bd2f02f99eeae2e5c60eef503a0b"],["/Divide-and-conquer-algorithm/index.html","850aa3a4e0dd9e4705040e69b3be586e"],["/Dll/index.html","852396b03549553dd4c8d7db94ade69e"],["/Dynamic-programming-algorithm/index.html","5a6eb8e2b6b9e6f78021ba001f4481e4"],["/E-book-download-commonly-used-by-programmers/index.html","7e915c1fce484c3b875d6c055d3f3d15"],["/EditPlus软件的安装、激活和配置过程分享/index.html","08950a71c72f121cd7e88573b824c7f9"],["/Eight-sorting-algorithms/index.html","2ec45639d099c4031192e4b10d4ec30a"],["/Encryption-Algorithm/index.html","0934cd67cff483c6d1934f86c7fc6f46"],["/Eolink/index.html","40484a5e1829f2631db572f60842527a"],["/Factory-and-strategy-mode/index.html","a062d379379e8bebce95fe18739ba8a4"],["/Foreign-technology-blog-community/index.html","3e0577c69d55671b960b027d92c03781"],["/Functional-model/index.html","7ba9283730b1f8ea05fdf0cb05cd46aa"],["/Fund-type/index.html","20142ea0951b241d7b84f1e30708fcb0"],["/GPT-4o/index.html","d175512c5a8628201ada2c83ab171a79"],["/GPU-medical-image-processing/index.html","8c2dd9c2965c7b3b4593afc83d82a6dd"],["/Gemini-pro/index.html","f487c2616f155a67e904fe18ca02870c"],["/Gemini-vpn/index.html","ba9c826277aed98abafa81bb670768cb"],["/Gemini/index.html","435bfd86085eec4fd7a580fc21e1ec43"],["/Generative-Model-of-Unsupervised-Learning/index.html","804d955734c082d463e1024e5408ea2c"],["/Git-Learning/index.html","9c56e2afd5fc5aa39aa710bcf101ac05"],["/GitHub-2FA/index.html","c4c8e8814291975adc2d4630e52c33ec"],["/GitHub万赞，程序员必看操作系统总结！/index.html","ed53549da3bc3694077e8c54a9aeeb5d"],["/Golang-book-recommend/index.html","12331bf8707609372d9e415dd721a15a"],["/Golang-learning/index.html","5aa4c60e47e5f06ea1c6c656f0923576"],["/Google-Gemini/index.html","f24ebf1ac3f8bad1f1ea17250b64c10d"],["/Gradient-descent-optimization/index.html","77bc5831dbb3d5d250a83308be52d3f1"],["/Greedy-Algorithm/index.html","489c9ea5d044a46b6a8426a634b54aad"],["/HAND-User-Forum/index.html","539c515915bdd52de8e591d2f252d9d6"],["/HK-bank/index.html","13bdb82760796c85a5de364444830f18"],["/Head-to-head/index.html","8b83f37e5cd8b0b46c26066807a6c503"],["/HexoPage/index.html","555115ea2d7b28bad4b849aa27537c40"],["/HistCite-Pro/index.html","5dcd0cd1dae80d3bc4b76cbac0891399"],["/How-does-the-program-run/index.html","4ebdc1745653328cae8f9294c4b20450"],["/How-to-judge-whether-technologyisreliable/index.html","375358efe5d163a54828f35726a2335f"],["/How-to-learn-design-patterns/index.html","703770ea926667c9d0b0a3a9d6a51bef"],["/How-to-learn-design-patterns？/index.html","60d290a7065af3fee736d652f8e7576e"],["/How-to-teach-yourself-programming/index.html","07ec7c7ddf67e8923e33913a11cdcc5b"],["/How2learn-Python？/index.html","588bd0716ccdbf0fcca125f30c003d35"],["/IDEA-shortcut-key/index.html","71ab611a9d288fb36dc7473279892249"],["/IT-interview-basic/index.html","9f727ceb5aed435ed4f5c8a2cfc737c7"],["/ITK-VS-install/index.html","2bb73392cb3ea221c32c1dda2587d70f"],["/ITK-VTK-ItkVtkGlue/index.html","e895d64a6344da3f446d0a3aa13642c1"],["/Image-processing-plus-noise/index.html","b9ead65785a5ad6f6dd8c6ef3afdb905"],["/Inception-Going-Deeper-with-Convolution/index.html","78fa595505438ee2594f73a5c28e10eb"],["/Information-Cocoon/index.html","43d8e8907c333b235e0ef638f00bcc7f"],["/Java-GC/index.html","d01d99a246236a2aa1900d9f4c3caa75"],["/Java-Servlet/index.html","e61c9fca7ec1c51b1e94e6d8d3135ec7"],["/Java-array-and-collection-sorting/index.html","7508cc2bbf63d9df9be229f3a0042174"],["/Java-development-tools/index.html","f8bc9fd316f79d061a071dc7b879210a"],["/Java-eight-data-types/index.html","352620e4f2b827f04f91fc48dd9ebbb5"],["/Java-interview01/index.html","285e4a6e921a246743935eba9bf771a4"],["/Java-interview02/index.html","987c7aaa33124ef7a1df1e2023f14437"],["/Java-interview03/index.html","dbab0919c4228f93c822d3e174262e78"],["/Java-learing-map/index.html","e2318f3bb2d62029a546a990495c4bb7"],["/Java-learning-route-map/index.html","a0a696999921e3e0bcf7d1c1cc897002"],["/Java-memory-area/index.html","1aa7ab8171932525386416f9114d4cc8"],["/Java-memory-model/index.html","b84886dd68122e9fc9d920bb867fb1cf"],["/Java-multithreaded-learning/index.html","1a224e0509c87679db846dec13a9299f"],["/Java-project/index.html","36585a3fafc52be3e6719dbc29e331b2"],["/JavaWeb-Chinese-Garbled/index.html","5937b9460bd616d6d3013aa1d4fa0bc2"],["/Java还是C++？/index.html","dee74894a40b3bb4c7e122f2424c69e0"],["/Kaggle5-step-guide/index.html","8e86a7e4a3a691afc6aae05f84b53658"],["/Knowledge-points-of-Java-garbage-collection/index.html","f3c4ad90b9e67efedcfc0e9b2bc15560"],["/Layoffs-Hiring/index.html","23add04750143eb3a1d664caae939739"],["/Layoffs-and-Hiring/index.html","d0a6f26a3fab8f4089c74afaa56b4e2d"],["/Linear-regression-of-machine-learning/index.html","61b59413c00ddc6458b0a336d53f3aaf"],["/Linux-Compile-C/index.html","916fc2f0b9e084c6c828371938fdc4d7"],["/Linux-ITK/index.html","d4ab6c6ef2261f56a43188353b99fa17"],["/Liver-segmentation-of-sparse-components/index.html","69cc69b63c94d840eafefe7c21fee867"],["/ML-EBook-paper/index.html","a6b5c8e02b836d5580ff7e27c75e1b90"],["/Map-uses-multiple-maps/index.html","a16ed373e6f65d0bd89c2fee5adbdc85"],["/Marching-Cubes/index.html","d6a2e40c71799739200d1053f55d42af"],["/Matlab-Graph-cut/index.html","ef044248c39568f09f285d1c93900846"],["/Maximum-Likelihood-to-EM-algorithm/index.html","3d003113b2da1a138973e10d63ce9ea5"],["/Mean filter and median filter denoising/index.html","307ab1a645f71ec98527a9cac93771a5"],["/Medical-Data-for-Machine-Learning/index.html","85426f30e4cb6f5070bf222c7f6f0a76"],["/Medical-image-analysis-deep-learning/index.html","bb765812fcb6214cb61e6aa1a6ae583a"],["/Medical-scan-image-processing/index.html","6afd97d91c49f7ee6e0112ea12252764"],["/Merge-sort-algorithm/index.html","c34f617a9312cf53fee79816451c7337"],["/Monthly-income-2W/index.html","1d69e070277e5b7bd713d38d1692a518"],["/Mysql-database/index.html","5a5e1e58b6f1047871f615e0cdbc5811"],["/Neighbor-Embedding/index.html","8acdaf6cfd64e3fe4821d0214874b55d"],["/Neighborhood-approximate-random-forest/index.html","d5f053446dccfddb946904f3645397e1"],["/Net-and-official-documents/index.html","50fbdec6c2d04c6a40eb10eae557b09d"],["/Netflix-VPN/index.html","d36ab8bc53619347d797b18bef76ff97"],["/Network-principle/index.html","8a0a7a584b26aa4e139469c5bfe42e85"],["/New-Hong-Kong-stocks/index.html","068525c693864c6dae63f7c8bcffad0e"],["/Nice-to-meet-you/index.html","9b087b219fd4a0072acdce0f692f9dcb"],["/OS-processes-threads/index.html","4bfe1b7f517083e09c9f4dce3b9c8454"],["/OS-run-environment/index.html","10eec87d7f0a7a4114c0722481908e0e"],["/Open-Internet/index.html","b9db3ba301464a19e966ce04d46a8e6a"],["/Open-Internet2/index.html","f01da850f7727c5f062f20bf774cb221"],["/Open-source-community-and-rewriting-website/index.html","d006e6ea2ecbf8ddf906138741602ee9"],["/Panoramic-image-stitching-based-on-SIFT-features/index.html","8a1d092cc5c2e3dc3793b7b500b07cfd"],["/Parzen-and-KNE/index.html","0c5a898ee6a0a7b8be3adcde83b0f7ac"],["/Personal-technology-blog-site/index.html","a6dce9e2982aae9e99d2c9b0b2f06b0b"],["/PicGo-Gitee/index.html","c0c29c6ff11d6b92e646d6a00a755612"],["/Programmer-treasure-chest/index.html","ebe1eefe13e7fb2156731589b268df7b"],["/Prototype-mode/index.html","07b48cc3051c6d0c576da33d91947e5d"],["/Python-base/index.html","19842ba8eac3c3cf662ce515d78545c2"],["/Python-crawler/index.html","cf01ad5137b1482de3b64d65f4b0132e"],["/Resume-revision-suggestions/index.html","6bddb5c5386ae3b12f965eb99f7b94b3"],["/SEO01/index.html","03e59403f004956589cc0fb102438ae3"],["/SEO02/index.html","780b4052a1d9c79d0e69f6cc962b2731"],["/SPHARMPDM-MEPP/index.html","f78e81ca6dd1554e39dcaf6c1ab19ca8"],["/SVM/index.html","66b7901b6893b6590cd2a2ca011e4882"],["/Seata/index.html","4040cb39b3c73d92745fc8d1afccf0a8"],["/Semi-supervised-learning/index.html","fa14e50b3ef1b9744254e31055c2ef9c"],["/Sequential-model/index.html","c2e25b674da601085e79e5b059bf07aa"],["/Shape-Based-Human-Detection-and-Segmentation-via-Hierarchical-Part-TemplateMatching/index.html","c9f7a86b4c89a8202561643db7893e7d"],["/Spring-basics/index.html","3dd01ae1e0beb96f42b88f2daaf11ff4"],["/Spring-integrates-hibernate-Struts/index.html","3030e00ca80948241b571813b71a4135"],["/Structure-learning/index.html","f96bc343afda69294d4512c1f30ce37b"],["/Suggestions-for-self-study-of-computers/index.html","7fcc49256b97ec5cfae65afedffef002"],["/Summaryof-HongKongStock-Account-Opening-Links/index.html","61de4ed160b4eb2cbcfb9f8422ccd8f0"],["/TCPIP-detailed/index.html","66d4701ce0e30b6018b303d9cbf11135"],["/Telegram-VPN/index.html","6d1fc656604f5a606756cb7c16016490"],["/Telegram/index.html","dad4528cd6958b25e8a5d72aed81e50f"],["/The-essence-of-shopping-festival/index.html","a21cd4c1a1d0db2581aad625db805dcc"],["/The-most-important-investment-in-life/index.html","5c8f49956c46d6302ab25fae490a27bd"],["/The-most-successful-nvestment/index.html","46b724d6298f6ee5682209ff8e80204c"],["/Transfer-Learning/index.html","04c53085cc48bede09a446af8527c210"],["/Transfer-to-computer-major/index.html","02ad620e37ff7902fa89b69ddbb8e9b7"],["/UNet-Convolutional-Networks-for-Biomedical-Image-Segmentation/index.html","dc2fc18a7cc5ab7320fd8d7586737eda"],["/Ubuntu-install-sougou/index.html","d9ae6f767ecf8c020624895152b3c908"],["/Understanding-of-paying-for-knowledge/index.html","cd779c1286517c583f65975362f2a0bd"],["/Unsupervised-Learning-Linear-Dimension-Reduction/index.html","d3546242f64392afdfb3ef444462aae5"],["/VPN-HELP/index.html","58a46fd56be9244fee3074e067233398"],["/VPN2025/index.html","1d460c8cdc091ed6ea254644c95e539f"],["/VPN2026/index.html","a2675bbc1ac8a542a3bf3a7ee87346db"],["/VTK01/index.html","9e9439d08badcdd37e919aa94e457696"],["/VTK02/index.html","d8c0678ae2f4ac17b0374bba5b9ce97a"],["/VTK03/index.html","289c4979fc6080571490f4f1b6c23571"],["/VTKRead-write/index.html","4ecb735ef11ccd9880b9f437303814ed"],["/Vertx-Java/index.html","1e07bb0ddb19fd869f1a1f8f8bd6a6ab"],["/Vpn-OpenInternet/index.html","800012fdb4b36a893518ca5081d031ad"],["/We-are-all-good-kids/index.html","4756b06c98642f5f0f2b31c2e7e5c44a"],["/WeChat-80/index.html","de5f5f700edb9d43cd5b489b80dc2719"],["/WeChat-red-envelope-cover/index.html","41071092ff0e9b4f9c1c40f2ad0ed5eb"],["/What-is-crawler/index.html","9a1570556015b6f1521e4f0307913fac"],["/Win-Internet/index.html","aca5ea37a1960eaf8a2e806e328f399f"],["/Win-Open-Internet/index.html","18485e3e616c57ec34205de1bc08c435"],["/Win-OpenInternet/index.html","8f7909b5785211875662f12a81a4c516"],["/Windows11-2kfans/index.html","24c9a9f6db68e2d75676b25f5485444a"],["/Word-Embedding/index.html","08fa29b3244561a64bc1cee569135e9e"],["/YuanShikai-and-his-Beiyang/index.html","726841a78c93347b274f94dc4ecfddcf"],["/Zero-copy/index.html","d88717feb7471112bf9f09079c67f657"],["/about-keras-model/index.html","d8278500aa3c19a111beaa50fc342472"],["/accounts-google/index.html","ca9cebb02bca5c7880e985dbfc15d909"],["/algorithm/index.html","b36096aae3bd9af69c30aa097038ed1a"],["/alibaba-Java/index.html","c560482dd664982e7f7e5b8eca0b7ffc"],["/archives/2020/01/index.html","c4071983325d068ebe2fade323ec8b30"],["/archives/2020/09/index.html","028a5e89143360f9b49b1261d6f9b6c8"],["/archives/2020/10/index.html","3bec27859d8d48604b3d0c1c19fc6984"],["/archives/2020/11/index.html","8d8e0d46ad4d14e17b17669d8e9e4bdc"],["/archives/2020/12/index.html","f83a13f985e75ebe52f0055a32858a6f"],["/archives/2020/12/page/2/index.html","7ab9f4441f3a517fe01399ae802426db"],["/archives/2020/index.html","a9da169ac13cdfdbd9a3f15fdeb7c004"],["/archives/2020/page/2/index.html","55f68048bd2bf874f49ef2ed8991a54d"],["/archives/2020/page/3/index.html","968135eba88c07472547a78e982ce818"],["/archives/2021/01/index.html","73b59b76f690ec15378357bc2d85d7c4"],["/archives/2021/02/index.html","c766ad99a8c1fe19cc1e6cdc4b07855f"],["/archives/2021/03/index.html","6cd56a29d450a703181acd8cca878e94"],["/archives/2021/04/index.html","0698b647c3a033627b1507c64c614caf"],["/archives/2021/05/index.html","9495ae81d146a91876df0a14d5a468da"],["/archives/2021/06/index.html","7e19260b2163fe939ae491a82e4baf73"],["/archives/2021/07/index.html","5c100f72aaa7f55bdfce8255c8909522"],["/archives/2021/08/index.html","5a6aba33204a9504dea911efa660f5f8"],["/archives/2021/09/index.html","9fdbac29d9deeaba2032490bc2d237d1"],["/archives/2021/10/index.html","3eabe61a0dd1afddb9a52b8c33e54530"],["/archives/2021/11/index.html","29eb760b92674beabb9f12d01488f617"],["/archives/2021/12/index.html","f0362d5b18df695e31aa1e431b5826c9"],["/archives/2021/index.html","4163776cd732cd78c41f5831f1a2ad34"],["/archives/2021/page/2/index.html","386d930e329b6444a546725f81c9cb42"],["/archives/2022/01/index.html","60b02926ab2df5d62d479c5ec48fec6b"],["/archives/2022/02/index.html","5b485ba86cdf8de491cec9995f8a8e86"],["/archives/2022/04/index.html","2bc8f7ad006a5a04160ec792890abf27"],["/archives/2022/05/index.html","bd731aab70985cf7571efcee92ddb2f3"],["/archives/2022/12/index.html","cb19d4f60ea19189f541d6365cde2b65"],["/archives/2022/index.html","da1b94b426805e60b45a00d0cef26199"],["/archives/2023/01/index.html","779429073f916077a01e6a42fc16acec"],["/archives/2023/02/index.html","320c34a06436071a4871b22a6c9f210c"],["/archives/2023/03/index.html","4c61e89991cfe4cbee0c4d77f8928aa8"],["/archives/2023/04/index.html","d42165b9aae98fad4b85d928e91812ff"],["/archives/2023/06/index.html","b1ae9f05007ce003c0bf8ce973d9aa64"],["/archives/2023/08/index.html","494d4f14db0b4bd30af7f40b5215b56a"],["/archives/2023/10/index.html","723de2ce47a97454aca4b7fa67e395aa"],["/archives/2023/index.html","002c2d7dc501958be3c08f413c75adaa"],["/archives/2024/01/index.html","98dfe4817946989a98c939efbe2078c6"],["/archives/2024/02/index.html","2d69fed34d1e07b74cd1e423bb66db1d"],["/archives/2024/index.html","5843c2f160acb071efc5866f96a23a0d"],["/archives/2025/06/index.html","8436f8de12730019d03a9b2cb6980f48"],["/archives/2025/07/index.html","0ab20dd2381131c0abaed56af5f7802f"],["/archives/2025/08/index.html","f52d99e155028d0df87728b4ab05aef2"],["/archives/2025/09/index.html","7afb139c351a9ca700ee8e9114825007"],["/archives/2025/10/index.html","549036049bcc82ee3921126d4f3fcd57"],["/archives/2025/11/index.html","f6172c027c23e75d55b04e6e43dea7ba"],["/archives/2025/12/index.html","a2d7b6e1aa227551e1b216b8b629bdb8"],["/archives/2025/index.html","ff0e3352cbf55e81d499c3638b673db9"],["/archives/2026/01/index.html","afe2a48c7585b03ee679b92369b46e6e"],["/archives/2026/02/index.html","44367f01deaf632f5b4afc14ef1aa1b2"],["/archives/2026/03/index.html","151ba630140e1d5324f83a64d80aa4d9"],["/archives/2026/04/index.html","55ae1a2c94e3d4c0b8497954a509c02d"],["/archives/2026/05/index.html","83d61589117a51e4b74d0c0194cdaa79"],["/archives/2026/06/index.html","ef4ca0523cc138062d48ffcc0504c784"],["/archives/2026/07/index.html","fd2464698b8d6b4811812ae44501cfe0"],["/archives/2026/index.html","1786c97e7180eb3555f0fa3194512360"],["/archives/2028/02/index.html","71d1d6d25053d6fc5517e2e65b84433b"],["/archives/2028/index.html","5eb506667e39fcbabec04c356db9754e"],["/archives/index.html","7adefeb19aa5d333788c1bd5e68d2ef9"],["/archives/page/2/index.html","6326115e17beba96a733260c27f2251b"],["/archives/page/3/index.html","7f2270133a7015c4dc76f17988b9340c"],["/archives/page/4/index.html","163419f1f89f0ea7b98f5c4d5091dda2"],["/archives/page/5/index.html","f0ecaeae6f9440ca76879c869112f8ac"],["/archives/page/6/index.html","656a50eebf8d10090f04c48117856bd3"],["/archives/page/7/index.html","e65482a85b48b9ff440a4304edab6125"],["/baidu-search/index.html","64a331ea7a87b167a2b2653f8c32584a"],["/baidu_verify_code-Hh2fKNlEB1.html","e99d9da4e05a5ad433117976ae03873d"],["/be-a-programmer-instead-of-a-code-farmer/index.html","c90ad1c738cf6854e62e4c8c15c9f79c"],["/best-vpn/index.html","a2463077c29bd5d72fd1cb0d4448aa48"],["/best-vps/index.html","9e66234535289cf0ae3fe4c18b18e13c"],["/bought-a-house/index.html","4cac8abe182cefab94fb3b84a7019bd4"],["/categories/C与C✙✙/index.html","966e8155f61cd44c6930575d86e44bb1"],["/categories/Go语言/index.html","ae65b3a4ddd1d79e3ae35ef0e451b653"],["/categories/ITK与VTK/index.html","e4eb221e2482ead13fc343cd9f5f72b5"],["/categories/Java/index.html","050857a13ddfb6809f7ed87e978dcf5c"],["/categories/Linux/index.html","538a2a522edd4859f683956828572897"],["/categories/PLC/index.html","da82d0f9a82eae4dc309d67f3f89eaee"],["/categories/Python/index.html","39859d72c91941cfe360d14b208a524f"],["/categories/SEO教程/index.html","ece484de6da7bf5e8d705c37bed12658"],["/categories/index.html","a75afee75e7102a616c4b911b37cfb08"],["/categories/图像处理与机器学习/index.html","9ba25e5d344a65f21f6dea0502bd65ad"],["/categories/工具/index.html","6105f1dea319bc638de5d89b410405e3"],["/categories/技术以外/index.html","40a0d939fbf812e3714d7ce62a61b58b"],["/categories/技术以外/page/2/index.html","4b6212fe9ec60355b7cfd32c2176d66c"],["/categories/数据结构与算法/index.html","3947c4ca56b015374b29d6f995d4a3b4"],["/categories/科学上网/index.html","74a93850691f3ac93c51b87386e5627f"],["/categories/科学上网/page/2/index.html","422321e0a2242341aef2c9b4ab3597c8"],["/categories/编程经验/index.html","e45ea4a69fd02e82e00203f56dd1faad"],["/categories/编程资料/index.html","26b051e9c3541de3e91988a40c9fe898"],["/categories/计算机基础知识/index.html","c4dbad12e956cc6b5c30789117431e2c"],["/categories/设计模式/index.html","5af9648187d8033490654fd786762397"],["/choose/index.html","259100efea4614f99f8d01816ecc22a1"],["/choose2/index.html","d481af29154bacd2e72a817b0742c471"],["/chrome-crx-intruduce/index.html","c50f04177ffa50b254a6b55761b2af40"],["/clash-free/index.html","ae267f0cba034d269b7185933618236e"],["/clash-pro/index.html","c15412e4a508dc88272dd2d3ddf87f3c"],["/clashvpn/index.html","b4797cd1f3ddb6bd557d7eb5165cd2ad"],["/claude-code/index.html","030b9dcd26b260045395b6eaeb14d0de"],["/coder-blog-website/index.html","0ec434550b1edcb88da0bf8a2eaae7a7"],["/coder-source/index.html","bf7360c7ae43853b16c418b6b81a6d8d"],["/coder-videos-website/index.html","14419e7b769c919ff3c8a0be04c0bb95"],["/computer-book/index.html","fdf06ce31238054de54d085d34d71b6a"],["/computer-censorship/index.html","6597e63b296a7f595091637daf1b4761"],["/computer-network01/index.html","6a964fc04b0aa002ccac07ba33db2432"],["/computer-network02/index.html","c010e8bccdbf83555b1492c2aa7f4438"],["/css/main.css","bc32ad34ec4990d934c3c647bdb62f79"],["/database-Mysql/index.html","6fe41bc6720dbada808a29e79aa36380"],["/eclipse-lombok/index.html","e9a02326e9b2d0e5830c6422c5c3c480"],["/freego/index.html","6523de719b98da7538ecfe37266be602"],["/fully-convolutional-networks-for-semantic-segmentation/index.html","a9d9977bc94a386682633aa1e3fb01f3"],["/great-firewall/index.html","bef8188f0f91d6ffa106b614b9f7dd28"],["/halfrost/index.html","ac19ab234c42fc8481ca46c79e0aba82"],["/how-to-signup-chatgpt/index.html","658baf2c1c9f71ed524b78e61435b3ef"],["/how-to-use-Gemini/index.html","39edd87ce33ccafffac74626cf6301f7"],["/idea-continue/index.html","37550075a53dbde7a11c0a50dce34871"],["/index.html","97836a5bcbf33c2beff229bb920bb0b9"],["/internet-dir/index.html","60e4441e2124b9b7691ea7a3c83f693e"],["/ios-open-internet/index.html","b56e81a2617623830de76310cc45e3cc"],["/iphone-open-internet/index.html","224fdb1247339272f29f5b73cb16fe0d"],["/itext-makes-pdf-form/index.html","ed222d4026314259a6d761b5088e177f"],["/java-Set-Map/index.html","fae380d263da177f979fe6f7232ed9c5"],["/javaweb-server-error-codes/index.html","6f3bc7ca6f14648a34224a56f3489683"],["/javaweb-source-code/index.html","b94b8ba7cc89e385db77d814904e2815"],["/js/lib/busuanzi.min.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/js/lib/lozad.min.js","47904d34a224931dd1b615c59a3dbe3b"],["/js/lib/prism/prism-coy.min.css","0ccad54d95845901ead59bfd3ecceb14"],["/js/lib/prism/prism-dark.min.css","a4711d2957d6605eb5682bdd228cf123"],["/js/lib/prism/prism-funky.min.css","efedcdccd7a9ab342d2d9cacd24920af"],["/js/lib/prism/prism-line-numbers.min.css","38e22e790c279bb56f9ec4b90a2a2d58"],["/js/lib/prism/prism-okaidia.min.css","5ac6f9de996fbec68aaa106dfb16e061"],["/js/lib/prism/prism-solarizedlight.min.css","ecc7e64d039873ffcf7fb27babdaeb5a"],["/js/lib/prism/prism-tomorrow.min.css","456af2a14ae4f5089939d5904ac40fe8"],["/js/lib/prism/prism-twilight.min.css","ebb5c355332a8cf9a1ce37a2a69d678f"],["/js/lib/prism/prism.min.css","a5234d614834658887cec6a9515890f8"],["/js/main.js","052d2b299d9c750afea8df0b802ab7c1"],["/keras+TensorBoard/index.html","bac9c73e329c363c4a1a02abc0de8407"],["/keras-beginner-guide/index.html","c84cb593cf80602c9e01cef6cfd6ac28"],["/kimiclaw/index.html","eebe213bc1b96a0d1328f367ff282a27"],["/kmp-algorithms/index.html","b106898681ec8865f19778f60faac724"],["/leetcode-Java/index.html","12d421306d377b05fe7e58aa4087caa6"],["/links/index.html","d666f3c978883d8c89cb8209a2bbe4a7"],["/linux-java-opencv/index.html","8e68325072a4d8f22aa09b3b8936afee"],["/magic-internet/index.html","727f3fbe6f32f7f5cd58b8d7c1448f51"],["/magic-vpn/index.html","5c351f460c826ca5cd0b439814028cb0"],["/mingci/index.html","4f78d8ef068dee46ef87c8501ed4330e"],["/mobile-vpn/index.html","d5c072caf82ce9214162017b0012b82a"],["/msb-source/index.html","c00508daf50f5757ad7ab4d43097276e"],["/online-BUG！/index.html","c295e2f7565b5e3d11163235fb70bd75"],["/open-app/index.html","c8a1ce26c24c22d8240afbc7d4645a5c"],["/openclaw/index.html","688d378511df1d8b4b38ec99ea4b4269"],["/openinternet/index.html","0fa69a0b68c42d793ce04c474abab3d0"],["/page/2/index.html","e432003f1af21f8aea60b22f99599ea0"],["/page/3/index.html","00950baeb90974d090a04146de5495af"],["/page/4/index.html","0dd03b7fa2d6037d5ec76bc3630475fe"],["/page/5/index.html","121e42a4c441da4dc80f83e4a66e041c"],["/page/6/index.html","46876ad44df84b10fa83919bfcc4082b"],["/page/7/index.html","fb74e9dc56fcfff7f26a07883b0e3e84"],["/pandas-data-preprocessing/index.html","be8807a2d539beaa47e9791f74255c72"],["/phone-win-open-Internet/index.html","97c409599dbf1edf7fd36ce00966ab85"],["/popcorn/index.html","1c2b1ea5d202a614d69830525825db60"],["/protocols/index.html","12e6c8737876bf6868aeb67e8c1c4aba"],["/python-Blog/index.html","4747387b30efd6b2c60b6c6a11006c04"],["/python-yeild/index.html","9d0767a1f03a6cc0c0f2f61ad4deff80"],["/python爬虫教程/index.html","74628c4ee073a6f93329e3f29022c4f0"],["/route/index.html","e6e17e5d340f52a0e4390bf15a141655"],["/search-help/index.html","67d37f099a6b08dc0d7126c5c9fb5ca5"],["/software-copyright/index.html","eb2aaa1f02f55a2c561cd7c22e8855a3"],["/sw-register.js","17c5726e1d0c9b5d7db89cb7076e0b35"],["/tags/AI/index.html","ad47cff55f6c7881b56c1fcabaada404"],["/tags/API/index.html","e5f5ec6955c1a12edf8f8866d6bd4d2a"],["/tags/C-图书/index.html","d78858f4cedfc86d1a67129e6b5e6880"],["/tags/C/index.html","ec8eac4eb6500bc936921f42ee00e7ed"],["/tags/CNN/index.html","6386dadc2a356288560d99b3247555ba"],["/tags/Chrome/index.html","06aecc3435abaa0c1c0002ef4e588a22"],["/tags/Clash机场/index.html","85d72a7aab21f56f82fb723fe1662d41"],["/tags/C✙✙/index.html","25d01d37d360972ec35ef1d991284ca3"],["/tags/C语言/index.html","793709cbde6014c693d79bda314bc7c8"],["/tags/C语言图书/index.html","0bfe23b65b14c12d5b49087600a46059"],["/tags/DSN/index.html","1af173032857a76ba907d921a50f3346"],["/tags/Dll/index.html","0548a5d3c679179863d640f8d859b336"],["/tags/ECCV/index.html","c504a4b12c8fe4fd45108815de6cb2a6"],["/tags/EM算法/index.html","9291235c8f5ea9dbdbc4cc7b42fac0f7"],["/tags/Eolink/index.html","ab4452e9248a9261bba5b17550df815a"],["/tags/Gitee/index.html","a1abadbc94d723dce01a014601c6741e"],["/tags/Google/index.html","db0ca44a4bb3a76c75c18253c97095f8"],["/tags/Go语言/index.html","0714875f4d70d76e3b513a5ca5af39a1"],["/tags/Graph/index.html","202355d4a1dbc73949ab6f0a671ddcc7"],["/tags/HTTPS/index.html","780b21d3958fcdaab1fff872491fbc7f"],["/tags/ITK/index.html","d808f229a5e93d4d859bffcd5ca2361a"],["/tags/ItkVtkGlue/index.html","c0c1135e2f77a243001f5056d1da9bd3"],["/tags/JMM/index.html","50816165696027fb17c3b858bfe299a8"],["/tags/JVM/index.html","094898975fcdb48013092840a15364a5"],["/tags/Java/index.html","de24b7bd198113e0db7a0f4ee0be44f4"],["/tags/Java图书/index.html","24aa49ddce4ef3d63629eff8bf3fe129"],["/tags/Kaggle/index.html","2478b1ab47a7d491eae4024a0a0b728b"],["/tags/Keras/index.html","5c4a2bd8b600d4a4e72ac02d9f926b3f"],["/tags/Linux/index.html","244f086fb00c4faab19bbd8b694b1852"],["/tags/Linux图书/index.html","26b5da542532b4891d670c7440081b6c"],["/tags/MEPP/index.html","1b9ddf36d2e7b34b7d0570b33c90093f"],["/tags/Map/index.html","f47eb05ee063c1f75c4ad9aae8b6a5dc"],["/tags/Matlab/index.html","a0c8e7940cdc7ac67d63a78107d07e23"],["/tags/MongoDB/index.html","40c51d4f43d772a060889d65d35403f0"],["/tags/MySQL/index.html","c4f8506356c9120fd68402f040159e2a"],["/tags/OpenClaw/index.html","90094eb2fedc3c1627a8ac8229ffc8bc"],["/tags/Parzen窗/index.html","c5f0cd8aa6ad560b9f165648f1fa14f0"],["/tags/PicGo/index.html","4f4d537fd2ed7736e913b5bdc0be7413"],["/tags/Python/index.html","b0c30f728a1778c8dfd1dca81f572446"],["/tags/Python图书/index.html","bbe35f54ea684dc38986ccfc61d4cea3"],["/tags/SPHARM-PDM/index.html","39d48ca4171f077697811449daff6462"],["/tags/SVM/index.html","d5e9f5414fe4a6f6ec30d14953f9b4e5"],["/tags/Seata/index.html","ffd659b2a1284189b841cbb154dc8198"],["/tags/Servlet/index.html","f47efc6afeacf12a240326eb6b19b708"],["/tags/Sping/index.html","0e7c4add253c5e086d5e78e03cbf1407"],["/tags/Struts/index.html","bd3c2b96e1663aa196242a1b0fab88f3"],["/tags/TCP-IP/index.html","51ee6ab38f1e5f603028a41a8ac7805e"],["/tags/Ubuntu/index.html","b988c40464b32152e8e15566f504ca44"],["/tags/Unet/index.html","b47bda39b57a120cf52a338526e24818"],["/tags/VPN/index.html","bfe048446a6b313721b02f3ba73300c1"],["/tags/VS/index.html","6d57b83fcf5cdd64996a565d2440deb6"],["/tags/VTK/index.html","763389a07dc6b95acca925ae90fb2688"],["/tags/Vertx/index.html","1eebb1618a34d6c56ce42cef36bb1718"],["/tags/Windows/index.html","5368b07d57a889703bf45b6641c75c29"],["/tags/claude/index.html","a6ab4d3dd66832e4ffec83c3d754c0b4"],["/tags/edit/index.html","c13314a73c73efccf96fedd57eb7f3b5"],["/tags/hibernate/index.html","021183452b63c583d0eb7216133c82ff"],["/tags/index.html","8b682a3a3e2d9ce715d828e5367548db"],["/tags/itext/index.html","135e20bc89273a4cd0e67b74510789f2"],["/tags/jdk/index.html","7551afb1495a668a2f152c5c0d87f0bc"],["/tags/kmp/index.html","d04a9aafdc44c8efe872ba0cd690fb4a"],["/tags/k最近邻估计/index.html","72755440b2c30648fd232cfa14cfc57e"],["/tags/lombok/index.html","a32fea919730115ab1bd23d93c95fa03"],["/tags/offer/index.html","8197686672758b8849ee416c534f18a7"],["/tags/opencv/index.html","bee2ef499b2276ad00445a9166f0474e"],["/tags/pandas/index.html","4eccb6cecbe4ff475db5d51d9f3aa985"],["/tags/string/index.html","c32e2de8242a214d77dba031646ad023"],["/tags/vim/index.html","ae1fcc2e46f0730b1eb905934f69bdd1"],["/tags/vtkPolyData/index.html","14cd5bfd46ed35151ac5f24163ea8878"],["/tags/web/index.html","d3ecf27b14e6f0688858dd050bd5db68"],["/tags/xshell/index.html","cab8da393cc0ce498e65c9633004d93a"],["/tags/yeild/index.html","89b603bba51bf4d7ce43a2a49f22b330"],["/tags/互联网/index.html","3352e6a24c46f5ef3bf14965085d0f6f"],["/tags/人工智能/index.html","710d431cd54c0a7ccc75895786c23c09"],["/tags/体绘制/index.html","959b1d2db9a6002ea4279348c39ac426"],["/tags/全卷积网络/index.html","6cabc35bdcb3ac143439b1fba960af7e"],["/tags/公众号/index.html","85490ed9f63afd90b18fc75e0e3504e1"],["/tags/内存模型/index.html","eb5e83b90fd98a8a95db34a5c01184f8"],["/tags/内推/index.html","a5f1084f847468ba5c7d35454cb07b28"],["/tags/函数/index.html","92a45ad10a8bc9d683db5157ff8d0ff2"],["/tags/分布式/index.html","cc62c4eb6adc382901db800d57856623"],["/tags/加密/index.html","80370ab5fe1d1a7f60053885bbcad5a4"],["/tags/医疗图像/index.html","308a8155cfa22e45435056004816a222"],["/tags/博客/index.html","ac3665d34d1a896778a3af214237fd68"],["/tags/图像数据/index.html","38034144f6174cacfbf0cdf3f4d85fa7"],["/tags/图谱分割/index.html","51d7110f62893f9b89f6032662edeca7"],["/tags/垃圾回收/index.html","8bd28edef27ffb3be7ff139f20d4301e"],["/tags/多线程/index.html","1a85c285f167d8db8446e2bad512e062"],["/tags/字符串/index.html","55a6c32268b1ef5cbb367f90e3371284"],["/tags/小龙虾/index.html","2bc90584e672ec07f69a2df4c49bc929"],["/tags/工具/index.html","e17fd966223a43f81afb0432b20511c3"],["/tags/弹性形变/index.html","7d63c154fc88e408422a7dba538ba1be"],["/tags/排序/index.html","bf8b857dc4ca3688100a2ee243fee634"],["/tags/搜狗/index.html","7e17b358eac69bd448d1dc2c109ed339"],["/tags/操作系统/index.html","4211a7f77087bf4f8f811e021c489d71"],["/tags/数据库/index.html","19afb642a2824a7788d48e41fdf3a580"],["/tags/数据类型/index.html","d7241daf9a0611a2bcc37a8cd2f09295"],["/tags/数据结构/index.html","9ac65c27f03ab340d858cc01bd7cc67d"],["/tags/最大似然/index.html","c28583e59c6c7c394ee240a1aa6c5c00"],["/tags/机器学习/index.html","974daf92f80191bee2ebc48e72680e6b"],["/tags/树/index.html","90e17e8b7d327d82809ecd7c7ae3337d"],["/tags/框架/index.html","5af8c765ef53a78a75327d5f29da0394"],["/tags/梯子推荐/index.html","622a5c57d77eda1a8a63d3c8db3cb6e6"],["/tags/求职/index.html","8c30916f81f9bfd07f3784e6caafa317"],["/tags/汇编语言/index.html","b78a209e28c5d56db0590c4aa5541005"],["/tags/深度学习/index.html","3968a5bed2cdb4f881e5ab8392a1e6eb"],["/tags/深度监督网络/index.html","2ca541cb6c235c5f2d15a44a2b33bb9e"],["/tags/爬虫/index.html","79c5a6c1c46b5fd54bc66f3d2f3265f5"],["/tags/电子书下载/index.html","bd47b5b9541821a4a174280028137569"],["/tags/科学上网/index.html","f63357dd4d058821f88d66cd2ed056ce"],["/tags/程序员/index.html","a421635f4ef5eb7128717ed0c02cfc5a"],["/tags/程序员面试/index.html","c2cf63ace5520d606188aa945714a5e9"],["/tags/简历/index.html","245b151c01c3b4fc9e1bab6fdff149ba"],["/tags/算法/index.html","716385b8afa7061085bbaaefec0de5ca"],["/tags/线程/index.html","1ededcf979c210a073d621a2f80f73b4"],["/tags/经验/index.html","62d6fe6cfc0a9f43e33a934a80352f46"],["/tags/结构学习/index.html","80aeb17da0d175adc4dcffa5794e4f1b"],["/tags/编程/index.html","d78a2ce2b38d6b96dfad97cc4e7fa322"],["/tags/网站/index.html","797ff22d68c4b938f3a92e166da53e05"],["/tags/网络/index.html","81d3824f4759432336ce0d96d89b9e05"],["/tags/网络原理/index.html","3be0edff4742fde33a7796602c0d4e19"],["/tags/翻墙/index.html","fc396d8c998bbd2cb5866ac2c3569c9c"],["/tags/肝脏分割/index.html","f3438e719dcb5264eef2850a18dabacf"],["/tags/计算机/index.html","6ec41916716e53144cf05fc643dde568"],["/tags/计算机专业/index.html","24120dccf457b39f3b3774b53d94d8b4"],["/tags/计算机网络/index.html","3199176c546fb6b1e987395f8c99c855"],["/tags/设计模式/index.html","6bf45df2e55d97a10027a16dad9fd1cc"],["/tags/贝叶斯/index.html","9bf84dac2ca687599d85b3e9c72fa77e"],["/tags/迁移学习/index.html","345cbfad7c780217a93476bc74adf9cb"],["/tags/面试/index.html","0ce528862b97572c87f45aac5f1bfee7"],["/telegram-search/index.html","91cc6c43f574389f8992809db492f60c"],["/the-meaning-of-reading/index.html","41a803398145959b04ed663d5cb4944e"],["/the-way-of-pragram/index.html","aacd674af8feb6090a4517c18afbff40"],["/troubleshooting/index.html","30b803b91a11246b0e374ea640ee6bbd"],["/untiypro XL安装/index.html","82d6845f00ba230ab848a82f6116fa13"],["/video-websites/index.html","352110ad16d4f1bb1382b0817d1109a8"],["/vpn-freego/index.html","5d083a6f7382dc40de97eb56e89f2d58"],["/waibao/index.html","14bd5460ff313b09dcc0c6d762dfa604"],["/wechat-fans/index.html","117dc7fa2f0c3e98f7446cc4bd8a5e86"],["/window-run-VTK/index.html","ed8d8c108c0a279806390646e6d0a41b"],["/windows-science-internet/index.html","27f615673456b3aa96ae2857752cdb97"],["/xshell-connect-Linux/index.html","6982c98a22a664adc9e089917f467f19"],["/yzhx-vpn/index.html","371f3c14755372192f1e20e66a2a0f73"],["/‌Accessing-the-Open-Internet/index.html","024fdac75dfb5dbccf4c30f43fad727b"],["/《Java高并发编程详解》，去大厂必看！/index.html","2cff9617b374adb7d2088378ff36478b"],["/一分钟没了 1.5W 。。。/index.html","9aee5eab4b4d1da8e0feab902254c52b"],["/一条高产爆款内容生产线/index.html","0a241e82a549c978484e196c99656001"],["/为高考学子推荐的六个就业前景广阔的专业/index.html","e5c04cd974fcad1c6d612104de64efbf"],["/互联网赚钱机器---社群/index.html","f23ae06cf953040fec099933faa4098e"],["/你们常用的工作方法和思考方式是什么？/index.html","7bd34625d38454511082e405db1be4ef"],["/关于环境配置的一些事/index.html","3877b930ee90bd9a07bff5fcf8e4764e"],["/准备了19w！搞事/index.html","7fce5bff40369271e91f9f4b72b57410"],["/几个很重要的感悟/index.html","1fffec52777804dcb428c8e3c3eb0c4e"],["/分割ROI篇/index.html","14cc65676ad6e4f3a1473f8ad6532566"],["/分割精度说明/index.html","217d65d5245393970ead6963fcaa6133"],["/分块程序执行/index.html","07ac20679820786e5225af3bb22fa957"],["/加班公司黑名单！！！/index.html","3d12ce2e7feae68d0bee4bc3fc2255a4"],["/卧槽，上知乎热搜了！/index.html","f1254ee7186df9c01198486338d6b957"],["/卧槽，我的小破站爆了！/index.html","c7746b1484fe1241882bfea3667f9e25"],["/卧槽，我被盗版了/index.html","136d4d27a8981804f6336acd42450485"],["/卧槽，还有985大学在大一上C语言课？？/index.html","52f1cb6e3ac25020776aab31cd38734f"],["/历年微软面试中出现的leetcode算法题/index.html","adb983b350fb94f348656d5b9b27ff49"],["/去特斯拉试车了/index.html","ab5236e428939776e7f7caa228dbf29c"],["/吃苦的三种境界/index.html","e91704d468fb3108aeaf0ee68e3d2c4a"],["/哪本书适合推荐给 Java 初学者？/index.html","c751e82a9d652d9dddefb9eb1e5e0217"],["/哪本入门级的学习数据库的书最值得推荐？/index.html","8a6ae1fd446f0e902a1b2de25abf9d53"],["/国内外常用的AIGC模型/index.html","006b3a8d8c7e48cd449d297169c78286"],["/国庆假期/index.html","07bb1adf51d6d57866bde7f75c55b553"],["/图谱程序字典/index.html","d4a2d030aedef9299b15922b211defdf"],["/图谱训练与分割/index.html","b4f2e270801f046877e796b309721b55"],["/宣布一件大事/index.html","2920b02b764890cc922259ed3320d765"],["/小鹏P7i试驾体验/index.html","6410897907cfcdbce5a3f58b0c05e027"],["/微信PC版3.3.0内测更新，电脑可以刷朋友圈了/index.html","b25c29ee87b98316b3f6fec247afe5ca"],["/怎么更快的赚钱？/index.html","eec94531ef87288b538c5439d0eacab4"],["/我毕业了/index.html","0581e3e76ead2befe1803cd241fc3312"],["/我！真！的！找到了！爱上学习！的方法！/index.html","61b915f18d0b3e16a324634725e5149e"],["/户口的意义/index.html","e6a5e8f9f1d15a99a14b1749fbb98884"],["/推荐两本经典算法书/index.html","ad724bbb6f606b5854eb0431df13ccf6"],["/推荐几个在线学习SQL的网站！/index.html","55797697c65136a5372ec3ab1efbf952"],["/搞了一个程序员成长晋级社群！/index.html","a366189a713c0188b8391168db913b2e"],["/摘抄/index.html","d530d93266cc9b59155c91a36b5c5cea"],["/暴跌30心态崩了/index.html","6f5a1fae667dfe0e5093a2740a3e84b5"],["/最近很火的ChatGPT到底该怎么玩？/index.html","851da6dbd75490f296286f6abcdbc3df"],["/有哪些好看的日历可以买？/index.html","b412b881d982b9e1d838270a08630a48"],["/服务器有啥用/index.html","499663fb5a9bb3155889424b0ca6590e"],["/来长沙了！/index.html","c4451a6e894fc6fbc3772fca0cb0c69e"],["/校招污点公司名单/index.html","0e021986572395c453628dbdea792f27"],["/梭哈200多万/index.html","47124b7483fde58d190f2cf55b6692a5"],["/梯形图入门/index.html","6aca4a18e7a9cea30d5882c6b20f472d"],["/橙心优选，凉凉了！/index.html","68ff399955dc06dd4c32e57914255fc5"],["/比亚迪汉试驾体验/index.html","76719d9179c10a1ca737aaf9922b6703"],["/清华转学成电，真的牛逼！/index.html","dbdcc4cef6dae23e1bb420faffa56caa"],["/滴滴程序员被亲戚鄙视：年薪八十万还不如二本教书的/index.html","02e2f1dd005308b44e658a9666294395"],["/社群！/index.html","46e4642d4d3511bb9ffb6e3002f75986"],["/科学上网之VPN篇/index.html","0c6914c9782fa273c55cbf7c9e164873"],["/程序员必备的几个技能！看完你也是大神/index.html","ed4b6e68188ef7181bc8ed50318c6fc6"],["/程序员绕不去的槛，Linux！！！/index.html","fc7ee9c88bc3b2f05e79fa692b43e805"],["/蔚来ET5试驾体验/index.html","f0255cb1ed321131622a7c83e5409c9b"],["/蔚来，牛逼！/index.html","f2ce2667b8be6b2031c8ccec7acdc0f1"],["/被录取了/index.html","5f36c30c89e8f9ccadaa9d59b1404716"],["/被找事了！/index.html","05fc60d36a7b348b13bfb700455ad200"],["/被拉黑了。。。/index.html","7f4c31adb72482171846c5a2ffd6e97a"],["/被车撞了！/index.html","b58e2685c39d6be7d495c622cf968157"],["/该如何选购固态硬盘？/index.html","f278ed8c5431cc3e355a576d9f9eb07b"],["/这本书一定要看！/index.html","940a65e3e69aba99925b2b91681f347c"],["/选Java还是C++？/index.html","f266ecb12723fa849c85fc0f13138a2e"],["/那些让你起飞的计算机基础知识/index.html","b03354954790545e3bc831bb4a310a6e"],["/靠这几本算法书，成功拿下大厂offer！/index.html","7789b19ba1a4a72ee5c6b33691fa4090"]];
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
