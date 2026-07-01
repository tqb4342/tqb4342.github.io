/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/0010-city/index.html","6854bf31462c826e10a71178acd17f76"],["/10-algorithm-book/index.html","386839d9af86a4cce3197ea50a51e2f2"],["/10-website/index.html","0dd6a172b7ae70cca4f6fb71395b7def"],["/100万的小目标/index.html","09a1df268c7554122186a965d435dfd4"],["/10w+YYDS！/index.html","d11da8478843894d47c85ccff0a9a86e"],["/10website/index.html","b194004c6e39c456ce487cb5860b645d"],["/12-technical-tutorial-sites/index.html","786eeb34cfdeaede0f16d3a3b1bef771"],["/2 6 岁 了/index.html","c059dceff55554b845c62046dc4f9e41"],["/200万，啪，没了。。。。/index.html","53a0c56c01200586d81d682c8bae4b78"],["/2018ECCV-Paper-DL/index.html","77c4b5caac01e86f023948f7fe87823a"],["/2021年固态硬盘选购最新攻略（小白避坑指南）/index.html","19179e8ca004d42b1fa4bee19b2bf0d7"],["/2021机械键盘推荐/index.html","fd10a06292ce06026544347610b14dbf"],["/2025-07-15/index.html","d7eb00a9a8e46a529ecfd2c2d4602ed1"],["/2025年终总结/index.html","d58619527c927a0225650cd7903b8c8b"],["/2026-Open-Internet/index.html","2be39700a520a3a6ce0bf5f9a818fcee"],["/2026-best-vpn/index.html","ec7889597689cc25d81780ef8b72e52b"],["/2026-clash-vpn/index.html","bdec312c4b0a929f84cb982a5b268373"],["/27岁了/index.html","3c4586e1e82e1102db02c5606bcae394"],["/3D-Convolutional-Neural-Networks-for-Human-Action-Recognition/index.html","97fec915d43e10d0a0c849e5629e5bea"],["/3D-Deeply-Supervised-Network-for-Automatic-Liver-Segmentation-from-CT-Volumes/index.html","1511be9dd359d29f217b14eefa05937b"],["/3D-Unet-Experiment-notes/index.html","c5e5891463da512592285297845f500a"],["/4-Software/index.html","082d710f17ea1ac18fff836a609e7827"],["/6-website/index.html","51cb9f0c8c0ea90fa7b2fffdf42164ae"],["/7-terminal-tools/index.html","7c5f6b2b68cb61db37a7b84e1e67efd4"],["/AI-PPT/index.html","11a31b7e6fdddd020071ac3ecbda201f"],["/AIGC中典型的深度学习网络/index.html","cf806bbd07a58109eb25362c54ad3672"],["/Agency-model/index.html","26d88d779f916e43fa828de5f8476c3d"],["/Algorithm-brush-notes/index.html","387d48be40afac85c5c84423da72b379"],["/Ali-recruits/index.html","264b87ef4ee021934b6cdfe0c8a3187b"],["/Android-VPN/index.html","e6e5557987a111f3a43210ad94353378"],["/Android-open-internet/index.html","e5aa16295a0d5fe836f02168d2671503"],["/Appearance-mode/index.html","03614cc1397a471e74ad170597d3968a"],["/Backtracking/index.html","79bfa2dd503cf64ecead84f4b2158184"],["/Baidu-Sao-operation/index.html","810e2e4ae4d9d84e18d03c3d3e90cc73"],["/Batch-Normalization/index.html","526ed223859621dfc276a52ef06c6e55"],["/Best-AI-tools/index.html","ea89c207e898e3af24ee8e069beba231"],["/Bias-and-Variance/index.html","04374ac4bf1ce1244a37df7a19ef644f"],["/Binary-tree-traversal/index.html","6a7c171c625586afb5d8402770d7acea"],["/Branch-and-bound/index.html","2f42b5aaea4679cffae233ab526f9844"],["/Buying-computer-for-the-first-time/index.html","39e74404a90a72520e13894a1f0581a3"],["/B站向北邮道歉！/index.html","769f6f77a28af04163f7863d88c74dd4"],["/C++-string-function/index.html","e4d7c7302549102928cd53d9107215b8"],["/C-Java-DevelopTools/index.html","1981811aedb5b76dae0b4ce433e112e7"],["/CS-Classic-Books/index.html","e7d48bbc7b388e170dae43ae003a8da0"],["/CS-network/index.html","f330c0590ea05cc7cd7e0174f60f9464"],["/CSBook001/index.html","07ec0d7d4fc1b899d299c91c6cc2d049"],["/CSBook002/index.html","bc3bbb556f9755cf7c12133558fcab1d"],["/CSBook003/index.html","b79aae80728403172ad7eb474a55126f"],["/CSBook004/index.html","c142f20655539f8b1babf29101eb0fb0"],["/CSBook005/index.html","acfe12d0d808366f01d99c5740de2375"],["/CSBook006/index.html","ff24e3e9f88f78488c55172308d760d9"],["/CSBook007/index.html","e1c4d41e4f6d80f449e2461a1f7fc459"],["/CSBook008/index.html","1ea9916ec9a1af0cfbdce6dcea2a7f36"],["/CSBook009/index.html","57640e00ead7056390f66007c4254de5"],["/CSBook010/index.html","103214247d884ba2f5450750bc36e3d8"],["/CSBook011/index.html","3dba76eb6c867289ce309684314ff5a8"],["/CSBook012/index.html","ac8b569f0c5605f8c1902d9b65f447aa"],["/Changsha-really-fragrant/index.html","3ec2c92e5a2f59cb147799d17de3bbb2"],["/ChatGPT-VPN/index.html","a8cbd91d7e25651981c555fd4c141cd0"],["/ChatGPT/index.html","93f19a66b873aa2cd81e3b8cf70b0641"],["/ChatGPT！王炸级更新！！！/index.html","ceb9bb266520384c6e612744f72f6396"],["/Chrome-crx/index.html","8b7004e5f4cc6f1c162baf1f9e3278d7"],["/Clash-VPS/index.html","007bb920b4a28dba9fcb6aa290e59854"],["/ClashForWindows/index.html","e6f724850d8f461305ca692bdd535aa7"],["/Computer-Classic-Books/index.html","b52a244785b67846119c911f9f1fb396"],["/Computer-for-another-major/index.html","2bb6c638adb1ae9a9073271dba112e3c"],["/Conditional-confrontation-network/index.html","e3ef4a371aa63436d64238a0620e4222"],["/DNN/index.html","5880bf2cd62834d7c227b6346f871abf"],["/DSN-segmentation-liver-experiment-summary/index.html","a036c1f0f16bce13c4278b6eb10d9f1a"],["/Data-enhancement-elastic-deformation/index.html","31eb655a604ebaecbbeaa0d95d1e6be1"],["/Decorative-pattern/index.html","f8f30301a34fe2ed98aaeff19e052576"],["/Deep-Learning/index.html","a606500683589cd7fef9d52ecada5f89"],["/Deep-learning-and-medical-image-analysis/index.html","4ddecae83365d91a19a647d13961117b"],["/Deeply-Supervised-Nets/index.html","b20101b0a28772266911561bc539576b"],["/Deformation-model-based-sparse-representation/index.html","4645a010f0da2219d9af5de0cd4078a9"],["/Discriminative-and-Generative-model/index.html","48afb80f886e3b6d52ff027681ad2ab4"],["/Distributed-transaction/index.html","1164976e7e27eead47ec27676be76634"],["/Divide-and-conquer-algorithm/index.html","cdcd3a3be9e85230a3770e8b54ef746b"],["/Dll/index.html","da8de5728208280747cc2bc5639b6c37"],["/Dynamic-programming-algorithm/index.html","ca18542cb8b8da59ee82b45f5a949d57"],["/E-book-download-commonly-used-by-programmers/index.html","4bf2ef1b664c54be1f6c975c746e14b8"],["/EditPlus软件的安装、激活和配置过程分享/index.html","8ace89285d8a3fc89cbd2300a5082706"],["/Eight-sorting-algorithms/index.html","7d8ce0a6a6d61e998eb278fb1d3b1185"],["/Encryption-Algorithm/index.html","120b3795feef91ab958fe68dcce58df1"],["/Eolink/index.html","6656cc1e387b5f698ba41d94fffaaec2"],["/Factory-and-strategy-mode/index.html","2961e0545bafd2690323470d238f9a12"],["/Foreign-technology-blog-community/index.html","cd1bec8a5224c94978d7f6af82e44672"],["/Functional-model/index.html","19c6101fa580c7b137a36fa3690d68aa"],["/Fund-type/index.html","4183d63f1637abd23b21336e32fb7def"],["/GPT-4o/index.html","0027d9bd49494d7d92ed5ae258ea93dc"],["/GPU-medical-image-processing/index.html","8b1a9b4899f0713adf867975ca9d6800"],["/Gemini-pro/index.html","306c5df907f02c07acbd3982a91841c0"],["/Gemini-vpn/index.html","574a8fbe3c72f9fb04c3e2742bcf818a"],["/Gemini/index.html","4473371e46d6bb347206f842821b27de"],["/Generative-Model-of-Unsupervised-Learning/index.html","07444ef0183c74fea47920b13cbfccdc"],["/Git-Learning/index.html","f785e6f2526ae039a0231f69a453593f"],["/GitHub-2FA/index.html","e5584e29f27922c35a2d6f96d007b85e"],["/GitHub万赞，程序员必看操作系统总结！/index.html","4d72fe4e3f1afcf1cd0a8d9924c22741"],["/Golang-book-recommend/index.html","6389b92fff13791b3d10491c5396dc59"],["/Golang-learning/index.html","9f744cc1d6ab9c92393cd9d9446a24d0"],["/Google-Gemini/index.html","60d2041891637b5caa7610679ee056df"],["/Gradient-descent-optimization/index.html","8eb6bfa9efcc5034181fc8178029ef4e"],["/Greedy-Algorithm/index.html","0ec9469f1b262b3e06caf03b7a76ed36"],["/HAND-User-Forum/index.html","42ab73c912e3d08634ec6aa760c1fa98"],["/HK-bank/index.html","691ab85288c24df1ec3714ad554c7863"],["/Head-to-head/index.html","53ee27ffaa1711fea277ee3c24ffd499"],["/HexoPage/index.html","8ab860c390f59047d8b5aedf03515ce2"],["/HistCite-Pro/index.html","80f116fd12bee41126a5b9f35d991854"],["/How-does-the-program-run/index.html","a3e7660488ad7272207722a0977cfff4"],["/How-to-judge-whether-technologyisreliable/index.html","f90dcd90d54fec6cf40b7bb084931662"],["/How-to-learn-design-patterns/index.html","3dfabff7a609c3538a0abfc7bf305bf4"],["/How-to-learn-design-patterns？/index.html","565a63ffb5763764c9ee051ae5392090"],["/How-to-teach-yourself-programming/index.html","2df3c894c682d69b387a615a1c17e911"],["/How2learn-Python？/index.html","c4410306e4a56072d120854642b96334"],["/IDEA-shortcut-key/index.html","0b79538aeccf987ba17be67d69493fcc"],["/IT-interview-basic/index.html","ff2817b88a6f76fc904ffe3a97ec433b"],["/ITK-VS-install/index.html","07926c1d74fa558545098fa00b6123ae"],["/ITK-VTK-ItkVtkGlue/index.html","87f7d74777ca3c2e0ad3596436da9294"],["/Image-processing-plus-noise/index.html","8728dfc69b8fef4f95dd8826cc7e9311"],["/Inception-Going-Deeper-with-Convolution/index.html","fbe1f1fcf69d9597a4094ef8eb237c41"],["/Information-Cocoon/index.html","0a027a6458e9b83c050eb5391bfd7630"],["/Java-GC/index.html","3f990d57232482442e8a977aba20b228"],["/Java-Servlet/index.html","f87b847db465dd54afc0c5cb3a13ef88"],["/Java-array-and-collection-sorting/index.html","a06ed9d2f08b68c4aa4afc289fafde3e"],["/Java-development-tools/index.html","a62fddeff64af5ac6c27525d93eadd00"],["/Java-eight-data-types/index.html","4a57eb7dcf717d853176bd67a02b038d"],["/Java-interview01/index.html","f362b64c9a7688716520321c8769426f"],["/Java-interview02/index.html","3e8b77afdfc6318010808087f8688ba8"],["/Java-interview03/index.html","08e40722af8644270bcd68c6aca475e4"],["/Java-learing-map/index.html","17fc5ce6508827c33a86407d8366f1e2"],["/Java-learning-route-map/index.html","e0d63a2d185eef2ec5146fe61ec57cca"],["/Java-memory-area/index.html","0791b85aa612214242d5412a3a42eb78"],["/Java-memory-model/index.html","971680f91dd3d6cb089e6a29804e5e6a"],["/Java-multithreaded-learning/index.html","77d654de164c0f9115d219e0fb8cbc23"],["/Java-project/index.html","d7a27e58921a45f168d042204322df5e"],["/JavaWeb-Chinese-Garbled/index.html","a2acfdd1c73dc957912307cc23678224"],["/Java还是C++？/index.html","b4ddca73d4756ca53e1eb40f1fc9c3ce"],["/Kaggle5-step-guide/index.html","71228f32f7e4ba3dd9640ea09fa85c2c"],["/Knowledge-points-of-Java-garbage-collection/index.html","4e07a9ce8215ae0ce7538395262a6d2d"],["/Layoffs-Hiring/index.html","eeb675aa6b6336ac5973d6d7dc9c45ae"],["/Layoffs-and-Hiring/index.html","b10e9f96b8c55d261288869a4823bf6b"],["/Linear-regression-of-machine-learning/index.html","321c88c1a1dd1571422e714c2d5870da"],["/Linux-Compile-C/index.html","acceaf92ee3707782f6d6148176d6848"],["/Linux-ITK/index.html","24cc8938e778520748ccc0f0b0d83657"],["/Liver-segmentation-of-sparse-components/index.html","e7a1075009b3fd853b3ae5244d86c088"],["/ML-EBook-paper/index.html","1aade9ba00f1ad5dabf91566c2cbb676"],["/Map-uses-multiple-maps/index.html","5f969a977f8b3c78c29eb1d66fd78b1b"],["/Marching-Cubes/index.html","6651d47155f488d0284e7784687fa12d"],["/Matlab-Graph-cut/index.html","49cab21feea3e18ce7eba1312ecc5f2c"],["/Maximum-Likelihood-to-EM-algorithm/index.html","c686c788b119aa1a3584cd6de08d9d65"],["/Mean filter and median filter denoising/index.html","b1aff5552ed4d2929585c9c671a9f0dc"],["/Medical-Data-for-Machine-Learning/index.html","20d8af5dc0446d1b819f9f3668a603c2"],["/Medical-image-analysis-deep-learning/index.html","cf70fec0dba20c474752e7a58eba4bee"],["/Medical-scan-image-processing/index.html","9b0a38d436c1a1fbc9bc0f2f4b20151e"],["/Merge-sort-algorithm/index.html","7f8f718a3b94c53bac10fcd3799d483b"],["/Monthly-income-2W/index.html","0b1a721da1794fc25404352327ae0346"],["/Mysql-database/index.html","3267d401f16da838f7a3ad284fdef7fd"],["/Neighbor-Embedding/index.html","5b2ca06e96a37339d887679fac051502"],["/Neighborhood-approximate-random-forest/index.html","74c1466919c5de32fc55849d9667de91"],["/Net-and-official-documents/index.html","868a567a4d662b094f3d92d4be17ff7e"],["/Netflix-VPN/index.html","d570e194b439dd1b612f2d1394e1443c"],["/Network-principle/index.html","5f9c60a90c3967225d8eb8340a0646bc"],["/New-Hong-Kong-stocks/index.html","e84e97dd97fce0eb92761f49f78d3b3c"],["/Nice-to-meet-you/index.html","5be1d6853c8f480fc3cd9341cbf6e26f"],["/OS-processes-threads/index.html","2102d9b2bfeb89f8cc239a7320d6a0bf"],["/OS-run-environment/index.html","2626a2f9ca8e8a7faee81251e53b2f49"],["/Open-Internet/index.html","d25afaf2081913cd56923d35008c6f16"],["/Open-Internet2/index.html","868189a40d710f3014b2ace713f780f3"],["/Open-source-community-and-rewriting-website/index.html","f218cb11c6bc268cd855925555f7f218"],["/Panoramic-image-stitching-based-on-SIFT-features/index.html","cf2faec72418058f459b0b314c941c42"],["/Parzen-and-KNE/index.html","93a5206b7a9eee85c967378e07314b42"],["/Personal-technology-blog-site/index.html","a0e7aaf99e3992d359057ce79cbf5102"],["/PicGo-Gitee/index.html","3a9814313a47b4688eaebd8aa35e57e4"],["/Programmer-treasure-chest/index.html","9c7b3984fb267bbd3514b6c7ee04f327"],["/Prototype-mode/index.html","402f7e2e04091e55f2bae25d718517f4"],["/Python-base/index.html","f6c86fe0a8a2ddcc4fbc1f7f661464a7"],["/Python-crawler/index.html","42cc05b4333103517eb3b4627e4209a7"],["/Resume-revision-suggestions/index.html","c46485958b1fc5e193577f9187bb9e92"],["/SEO01/index.html","c9f22901e01d39f0708033105048ea8b"],["/SEO02/index.html","91316a3e00b60fe6d8fde429968ea6e1"],["/SPHARMPDM-MEPP/index.html","15c33258b3f7cfe2881e2e65c829cfd1"],["/SVM/index.html","607ff3ee787e665cd6bfd96ee8354890"],["/Seata/index.html","c738bd79d8a8391e0871f86871ab44bb"],["/Semi-supervised-learning/index.html","dbd1e65bed2fb40653b8082937d3023c"],["/Sequential-model/index.html","a96334aad14661739634d3d6056bd484"],["/Shape-Based-Human-Detection-and-Segmentation-via-Hierarchical-Part-TemplateMatching/index.html","63cf9bb669c680c6a2f42ff7b7f587c7"],["/Spring-basics/index.html","9c75e524108b09306a530f835c73232e"],["/Spring-integrates-hibernate-Struts/index.html","9bdea55cad3ed8349dd56a8d01b524ec"],["/Structure-learning/index.html","6b8476f60cf70c268593435fdb1f4ae7"],["/Suggestions-for-self-study-of-computers/index.html","e23496f72c10a6e0b0be6dd8c7ac5e9d"],["/Summaryof-HongKongStock-Account-Opening-Links/index.html","137d8af122f82b3447b769b659cc0802"],["/TCPIP-detailed/index.html","3162cc743099a7f66020d8e4bc85bc9d"],["/Telegram-VPN/index.html","8386e60f0c016dd2cde2995dec43604f"],["/Telegram/index.html","58b8a3a4e76f7e4a1343320c61b17d17"],["/The-essence-of-shopping-festival/index.html","939a6aac44af60269a2b96ca72a6fe23"],["/The-most-important-investment-in-life/index.html","1cadc106d10d68a270df96b75760ac2e"],["/The-most-successful-nvestment/index.html","703afe7e9ad9ed2be9d82b6373248f71"],["/Transfer-Learning/index.html","8c43b7c439b75976b501309d953bf588"],["/Transfer-to-computer-major/index.html","9c2f97af2530910cb2d793d374ad8b05"],["/UNet-Convolutional-Networks-for-Biomedical-Image-Segmentation/index.html","b42700ace4c0ab5e9060cfd9d17861b6"],["/Ubuntu-install-sougou/index.html","aac4fdb418e1940e8ee1baf824ca63e7"],["/Understanding-of-paying-for-knowledge/index.html","b9c237c1f467479651336c68e75f5566"],["/Unsupervised-Learning-Linear-Dimension-Reduction/index.html","12297a3531cfca642cace131efdbfa6a"],["/VPN-HELP/index.html","dfb0309321e3b279db0dd72a74f1146f"],["/VPN2025/index.html","3285f07b173761522e7ff8868b2ad466"],["/VPN2026/index.html","f25fa8972aa4cf7702368ad176ab910a"],["/VTK01/index.html","8216c1381c9817a62f7bbb714d299e29"],["/VTK02/index.html","8fb39ca9ef30dec29605930c7e07921c"],["/VTK03/index.html","04d6157f7672e28cf714ba2b2ba898d9"],["/VTKRead-write/index.html","086efc108b8d157d18e549b26c9abcd4"],["/Vertx-Java/index.html","760d9811b9a310c28922ddabf7ba51ed"],["/Vpn-OpenInternet/index.html","5a349d45bde5d6a4fc44849d7aac331c"],["/We-are-all-good-kids/index.html","15b414f419b2a5fdea8a090c60f7455e"],["/WeChat-80/index.html","155c817e8a0b99ce3690d9bb1e574b07"],["/WeChat-red-envelope-cover/index.html","f72fc8ef3415a7970e4c740071ba5773"],["/What-is-crawler/index.html","7a47a946c1b8322fc03f6f1722bda221"],["/Win-Internet/index.html","ead219794aa9b0798172b3d4ad960821"],["/Win-Open-Internet/index.html","7a25df91f5f9e4fe9dd9c6e85cf3772c"],["/Win-OpenInternet/index.html","26610f5250a1a6bcd91300cd521154db"],["/Windows11-2kfans/index.html","a1569d04b2b30c435b230352ca3df8b9"],["/Word-Embedding/index.html","3b64e170079f6482032cb57ec9b75c94"],["/YuanShikai-and-his-Beiyang/index.html","19bb6c99544857710972d4d169402b28"],["/Zero-copy/index.html","f05ad4518de838e6ce897300ba40360d"],["/about-keras-model/index.html","5e1b35e82985d9d67c7586ea6471f8f0"],["/accounts-google/index.html","ba9f884aaf24624df442825fa1805578"],["/algorithm/index.html","643d12bb6112b5b9589b551991364ff8"],["/alibaba-Java/index.html","9c9b9b01bdca0a55dbbd99edba38df47"],["/archives/2020/01/index.html","c3ee8c3b565de0b02928b8fe7c202450"],["/archives/2020/09/index.html","3262b13c127ba5bca2a1f695c713ae96"],["/archives/2020/10/index.html","2e10b76f257fbf1bfb0a6dd2f055cbc2"],["/archives/2020/11/index.html","948ad6b745e31857d37e6def166fa0a2"],["/archives/2020/12/index.html","60d1b3feaafb478f546b463940f51bb7"],["/archives/2020/12/page/2/index.html","9618b8db4065fabe7ee02668fa609702"],["/archives/2020/index.html","bbb73a3af759eb201d836ad260060f1c"],["/archives/2020/page/2/index.html","efeb879737188fdeebd88d8d89396a94"],["/archives/2020/page/3/index.html","6b141bb6d00cb6461deb596fa8bfad79"],["/archives/2021/01/index.html","2b14cdeb622558360d43690ae10a95d6"],["/archives/2021/02/index.html","a4132ff83154a2f1cb27f73a167d2a75"],["/archives/2021/03/index.html","77578ee1a7660873b47721b8c71fa04d"],["/archives/2021/04/index.html","569f68180e65732df4f174a68eff1245"],["/archives/2021/05/index.html","b5c5bca35ab3d0671920faf96510890e"],["/archives/2021/06/index.html","78f5132af7bd725b3b056145c4274d48"],["/archives/2021/07/index.html","db777d7716f13b9e5932ef22553f569d"],["/archives/2021/08/index.html","769831e39c52f5b47547e784aa0c4e4a"],["/archives/2021/09/index.html","91b058b3f1cf616e26c0e68eaa55f2f2"],["/archives/2021/10/index.html","61423cf458c2f61b01c8a5fc84feadd7"],["/archives/2021/11/index.html","dfd3572e877528758315220a418d230b"],["/archives/2021/12/index.html","c0a9088890d20a87ef0245029e5242c1"],["/archives/2021/index.html","8acef15ecc91a12c36a7e380198941b1"],["/archives/2021/page/2/index.html","606da81dd227611523c869996157f790"],["/archives/2022/01/index.html","a4710a31b8b7cabe14c176c0c6b8fd61"],["/archives/2022/02/index.html","47408d731f0bce1d1e2d02912fbdced2"],["/archives/2022/04/index.html","fb59629545b943f1a269ee0bfef544c3"],["/archives/2022/05/index.html","3a2044b195ca9cb32b3c2433158bf77e"],["/archives/2022/12/index.html","c7c704c3c4f06aea4297ec89cb44e088"],["/archives/2022/index.html","38d6009f8a064e441d9180d1aee835d0"],["/archives/2023/01/index.html","a04d5b49b63ad142be0007f57cce5603"],["/archives/2023/02/index.html","bc3c965eb52dc0c11929db3c0f35554f"],["/archives/2023/03/index.html","e277a90b553779faa8328936236868d4"],["/archives/2023/04/index.html","0de7b71a2cd023ef663f33e974adff98"],["/archives/2023/06/index.html","5298d42f07462724007893d223b7e746"],["/archives/2023/08/index.html","3cf489957f485869002b93c96178e907"],["/archives/2023/10/index.html","9858d992695b7b073f93d3ecba48ba64"],["/archives/2023/index.html","b9116e8fba365cb5d2329947e39262f4"],["/archives/2024/01/index.html","19546efad24bd2b11eed6a7223fac1b6"],["/archives/2024/02/index.html","720cc525782aac7f977ed43d87910248"],["/archives/2024/index.html","5126f3bcce87cd0047e2c8bda137f8bd"],["/archives/2025/06/index.html","f304ab8eb66dbadd36a94453a7c89693"],["/archives/2025/07/index.html","bb94b5fc1d6f16a4d25fe09dc331c9c0"],["/archives/2025/08/index.html","804b9bfbf221b04710a6f15848368d35"],["/archives/2025/09/index.html","b4e8aaf9d2c741e5b5f6b8944ef625fa"],["/archives/2025/10/index.html","f1c1c0532f0e509cf1e551fdf3a94673"],["/archives/2025/11/index.html","c79da2279822f6a31b315e58c5a7b7e3"],["/archives/2025/12/index.html","ac3ee8efc1168c695332f6488db6eaad"],["/archives/2025/index.html","a5d34de0e0a6c624ce28d621c9e861b7"],["/archives/2026/01/index.html","87b07c453939060da83fe8de20d84157"],["/archives/2026/02/index.html","1e7d1367d52f6bc19490e0ec8c4404f5"],["/archives/2026/03/index.html","f1d2b0e939a77dd3fae1cd456331b207"],["/archives/2026/04/index.html","afefe78ab672d7b31d2ce56d36e23e85"],["/archives/2026/05/index.html","c227f9d86b9f2de074a367f630875bf5"],["/archives/2026/06/index.html","4f3df3942641481a48f400a1993fcbee"],["/archives/2026/index.html","60ad17d0efa51e6decb2f8dff30845d5"],["/archives/2028/02/index.html","b7a7c04d0293bb5a97a6a34f25a010d3"],["/archives/2028/index.html","c676bec0beb98ca5ff1d287a1848be3b"],["/archives/index.html","593ee02cbcc648e139615497cef72fd3"],["/archives/page/2/index.html","ca070d4e1d2efd34e85adde1a8ed2a32"],["/archives/page/3/index.html","d9278cb8cc44c3f81bf5326a8dcada54"],["/archives/page/4/index.html","b7094f91b86c92d02cfccdaa051dc9c7"],["/archives/page/5/index.html","5a2d89d7ccec3d16ef1037b6ed5d2071"],["/archives/page/6/index.html","3d4edbaca65b6849391fb69c3ec4be78"],["/archives/page/7/index.html","ed0030862a429632825a50413e3d0950"],["/baidu-search/index.html","74a44f2550ee9f5a7b563e9b9d71b19a"],["/baidu_verify_code-Hh2fKNlEB1.html","413da90e117748a58536aa5a83dda38b"],["/be-a-programmer-instead-of-a-code-farmer/index.html","0675fa71880abd6e9289717bb061bcd7"],["/best-vpn/index.html","714f8fdb840c86546aa352cc2d9b37ac"],["/best-vps/index.html","75fe9a074aaedbf576c7c7474cb641c7"],["/bought-a-house/index.html","c0342325a957489c08bbc9613b459e40"],["/categories/C与C✙✙/index.html","52d9b033a7c30685d54e1e83b3045707"],["/categories/Go语言/index.html","c7f9fc7e4ad32b077df8b7c138e32ada"],["/categories/ITK与VTK/index.html","7dc95bf5556dc571d0bbb929b4d08555"],["/categories/Java/index.html","044a6bad1bacd1ef9f3e9d39fa411a1a"],["/categories/Linux/index.html","4ba36cf16c2e25633abd09d8c1a1c9f1"],["/categories/PLC/index.html","93aef17812a166cbb4d7b00705add366"],["/categories/Python/index.html","baa502532103379a9fc199e41fc825ce"],["/categories/SEO教程/index.html","69cebb90eb73d8311ac5d553388297af"],["/categories/index.html","8bf9912f863962e2e33a484038cd81a1"],["/categories/图像处理与机器学习/index.html","7c7ed43ff2f72279b2614d4318a51926"],["/categories/工具/index.html","bab8e060be69019a015550677e1c1e07"],["/categories/技术以外/index.html","c0b5e44d80d15eaeda2abbe7545442ea"],["/categories/技术以外/page/2/index.html","624c77b2aa4545c67268c800a7c4504a"],["/categories/数据结构与算法/index.html","bbf485d852f3ab422d63686fe955dbfd"],["/categories/科学上网/index.html","00725cc697b50dbed8870313de65c202"],["/categories/科学上网/page/2/index.html","e5f9a484acb67c1726530e390cd02fa1"],["/categories/编程经验/index.html","a966d77d4db4c79ca70c5babbf30151d"],["/categories/编程资料/index.html","47b1ed3258064cbef4d691ffdf9f6f11"],["/categories/计算机基础知识/index.html","9b2996b2ca0311fb2159fa5f4147ec74"],["/categories/设计模式/index.html","6c4e95eaeaafe187b69a9d5aa6806099"],["/choose/index.html","6cd24a87372ba951fade10004ec22642"],["/choose2/index.html","ed555d0a9e57b66e7d55edde253d8d59"],["/chrome-crx-intruduce/index.html","10613958d78dd20be77717d174a6272b"],["/clash-free/index.html","641440cf3812b4db61e8f64e7f40d359"],["/clash-pro/index.html","13024ac19ab45d9996133a5c5f66334c"],["/clashvpn/index.html","3eb8d553dc78b578d6576474b07f3b6a"],["/claude-code/index.html","800a42faf754425275e8270c3237b606"],["/coder-blog-website/index.html","c4535db6127d090d066f24b11121a370"],["/coder-source/index.html","c9f0ca8d753226b5ed48bd98fb06b28c"],["/coder-videos-website/index.html","61ea41f14ff4167fbc25098ebd3e2d5c"],["/computer-book/index.html","9f0e5dbc1809414c56442c38ae7052ee"],["/computer-censorship/index.html","fbbcd62c1b108dde4b88d87419af0f2e"],["/computer-network01/index.html","8e6ab08a9eb8216bf0c428ff686432ad"],["/computer-network02/index.html","e640817a5b5702574449d01bc7d0d0c7"],["/css/main.css","bc32ad34ec4990d934c3c647bdb62f79"],["/database-Mysql/index.html","241938e6f3074fc7287d598b26943394"],["/eclipse-lombok/index.html","7c0aaa80fefae71d23b502ab703111fd"],["/freego/index.html","39ef247af47110345c28ab5bf45dd0aa"],["/fully-convolutional-networks-for-semantic-segmentation/index.html","fe60528ee470cb274a925c084b1bbde0"],["/great-firewall/index.html","976a91c8dd82a59af44f23b3365c19b2"],["/halfrost/index.html","d4cbb071909bb84ed3b0d9d168649b49"],["/how-to-signup-chatgpt/index.html","42b67959123cc462acebf4cc11e54a59"],["/how-to-use-Gemini/index.html","ad3089c91073a2bf1a409538ba3aff0d"],["/idea-continue/index.html","d56af1353997e6f39ad0958d6d2876a8"],["/index.html","873b78a9e63239c0ea896b28c59f21d2"],["/internet-dir/index.html","7f646aea8c9aab21e87b93a8fe5ac1e8"],["/ios-open-internet/index.html","3ba6675bbdaaf7235c530dfa11dd6a1c"],["/iphone-open-internet/index.html","1efd2332e41eca44e898c238c6d9d8ae"],["/itext-makes-pdf-form/index.html","bf8ca632f35f303cc0f8fe09ac43aeda"],["/java-Set-Map/index.html","0d6a2a86c220e3f38b412e98500fdf66"],["/javaweb-server-error-codes/index.html","1f5a09c4c1c6fe9208dcd6a9bd100a4f"],["/javaweb-source-code/index.html","1f77217bdf503bd2aa980e5f7dfb4bda"],["/js/lib/busuanzi.min.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/js/lib/lozad.min.js","47904d34a224931dd1b615c59a3dbe3b"],["/js/lib/prism/prism-coy.min.css","0ccad54d95845901ead59bfd3ecceb14"],["/js/lib/prism/prism-dark.min.css","a4711d2957d6605eb5682bdd228cf123"],["/js/lib/prism/prism-funky.min.css","efedcdccd7a9ab342d2d9cacd24920af"],["/js/lib/prism/prism-line-numbers.min.css","38e22e790c279bb56f9ec4b90a2a2d58"],["/js/lib/prism/prism-okaidia.min.css","5ac6f9de996fbec68aaa106dfb16e061"],["/js/lib/prism/prism-solarizedlight.min.css","ecc7e64d039873ffcf7fb27babdaeb5a"],["/js/lib/prism/prism-tomorrow.min.css","456af2a14ae4f5089939d5904ac40fe8"],["/js/lib/prism/prism-twilight.min.css","ebb5c355332a8cf9a1ce37a2a69d678f"],["/js/lib/prism/prism.min.css","a5234d614834658887cec6a9515890f8"],["/js/main.js","052d2b299d9c750afea8df0b802ab7c1"],["/keras+TensorBoard/index.html","1528ea0ad2ae4422a6a9c8b8619ae908"],["/keras-beginner-guide/index.html","408fdf95621989384d33ee64942764bd"],["/kimiclaw/index.html","3bab2c92c723de2dcaec19fb3123cb02"],["/kmp-algorithms/index.html","8e81431fed01b573556240586b351f0f"],["/leetcode-Java/index.html","ca04ffe9d2e7393937ce3d15098700ab"],["/links/index.html","9acc54fbbf999b9b2a997655c964872c"],["/linux-java-opencv/index.html","16439714dfa6778332519c3ddd393eb1"],["/magic-internet/index.html","48c3447826b62510c402be5c0b5ac8e2"],["/magic-vpn/index.html","9d00c7a8c31539e57b3f71e36da2206a"],["/mingci/index.html","9d0299f38925e5ede8e0cfe444b02f51"],["/mobile-vpn/index.html","5c49c38256beaae941686f5847eb55c0"],["/msb-source/index.html","3c7318996aa3323578b5606d5380b4c7"],["/online-BUG！/index.html","251bd536522d5dbe4f38def103b79da3"],["/open-app/index.html","b258756ed1681971a7b7e443d2fe95dc"],["/openclaw/index.html","3c9b20d38f42c340e115f73972522290"],["/openinternet/index.html","dc772216e4fa11b18fcb1bc13656fe1c"],["/page/2/index.html","d064d2522c791e0a1c98a96e381af9da"],["/page/3/index.html","5dee4c1552405257ea0fd4fcd07e1b22"],["/page/4/index.html","f71abdbe260f8fcadb84ade31cf735da"],["/page/5/index.html","5660bb137806b47fdc59341ebd785ad8"],["/page/6/index.html","c2af55cc7ed0efbff599cbe8029f9176"],["/page/7/index.html","8e6239dee40a713ba59489ed7ce89e42"],["/pandas-data-preprocessing/index.html","bb64631e26d22bb94b872c1dd71844ec"],["/phone-win-open-Internet/index.html","ed6dc10cd226426ad5cd14779cd46906"],["/popcorn/index.html","7deaf94fda343e7549308a5794069b29"],["/protocols/index.html","c38008652c6262196f284fa9f5e5277f"],["/python-Blog/index.html","a9909a0ddcbb507295a4886af7b8681a"],["/python-yeild/index.html","7d82ea120a41b461125ff1028fe57776"],["/python爬虫教程/index.html","fd9eeca993723fc645ad3c84c7d02ad9"],["/route/index.html","cb84adeb44b2028511fdbc21bda2dc93"],["/search-help/index.html","5b3feb3d5c7b64d81f344587e9030986"],["/software-copyright/index.html","3f4398d338971a0b0c31a065ca47502d"],["/sw-register.js","7f15e2aebd8f49d209341d99932619cc"],["/tags/AI/index.html","6184a7faad6e12faa5a21d21c0b90362"],["/tags/API/index.html","b569260daac542bb6b205560e94c6f87"],["/tags/C-图书/index.html","635969452a4997945f332e906560ce55"],["/tags/C/index.html","51e9333f6ff4bdf290840953e242c210"],["/tags/CNN/index.html","1c976034f0d624101d8e4185c8340bd4"],["/tags/Chrome/index.html","1da8d762967a291be54da2060df0f186"],["/tags/Clash机场/index.html","cb4b1916fa70ca516b051c4661ae61ca"],["/tags/C✙✙/index.html","248a332ab5866a16cb00657937e6b94a"],["/tags/C语言/index.html","edd2e33327d4e997424ed875d6819c5d"],["/tags/C语言图书/index.html","2bb629bfa0d5e0c3d59e412e0bc61095"],["/tags/DSN/index.html","80f84540ff9969e06f9402ef0d7cf143"],["/tags/Dll/index.html","d51a3c5116c379e1d7b5b5c88cf0ade2"],["/tags/ECCV/index.html","c0474ba196c0fffc06346192162a8741"],["/tags/EM算法/index.html","2c4d1ec891a14dc73f4ea6832773bc0f"],["/tags/Eolink/index.html","072f5bf68fb25ccf7eda88407466b05b"],["/tags/Gitee/index.html","523aaedc1b91c5d40f7b462990d5e104"],["/tags/Google/index.html","899eca6f4812e1022e622362a7b1c44c"],["/tags/Go语言/index.html","d7c0e316a889f916e341c4f816e0e94d"],["/tags/Graph/index.html","19208924c92181c279044aa4169c7890"],["/tags/HTTPS/index.html","70c0b892dfd7da2fd5c7ecbde85ccdbf"],["/tags/ITK/index.html","14f3733ae09d80115c0b031e596e240b"],["/tags/ItkVtkGlue/index.html","c224e9e56513afc271bb2500c3af2133"],["/tags/JMM/index.html","e6bf27db8d8c3384c6ac55e54cf92fd5"],["/tags/JVM/index.html","f1f9c30ce729b0e849e60543bc5e5298"],["/tags/Java/index.html","4fa37c31cf4deae6130f37c29bc91ede"],["/tags/Java图书/index.html","48c106014eb3c3a44aa31946d5910ff5"],["/tags/Kaggle/index.html","dd05367532eb3aa8085aec0558173885"],["/tags/Keras/index.html","37d1d0eab7abd33796cac0bbfcdb6ef6"],["/tags/Linux/index.html","6016ee4bf0e33d2d730c963ecb9fb8d6"],["/tags/Linux图书/index.html","1dc4c0bfbed30fce85105c5bdf075948"],["/tags/MEPP/index.html","56fda80fe8734d5ae82be2f6b2106e57"],["/tags/Map/index.html","bdb9bda538a6d70463ffa0e237597a37"],["/tags/Matlab/index.html","9d37ee21cfe02ddb092502943ebe9e2d"],["/tags/MongoDB/index.html","e2c6912761fd5b9444778d86c3a2befa"],["/tags/MySQL/index.html","61cb604484484912d51ad7147eaf3b9e"],["/tags/OpenClaw/index.html","5110f59e33b7d181cbb98c103e2221f5"],["/tags/Parzen窗/index.html","0c7a6da3c02f39dcb4125332526f2acb"],["/tags/PicGo/index.html","cfdfbe5a47ed8b88168a4f96c5f3673b"],["/tags/Python/index.html","b98d8a5917d5fe8215d8bb376627accd"],["/tags/Python图书/index.html","2d79bf3bc679439439bf40b7b4666d4d"],["/tags/SPHARM-PDM/index.html","e77cb4ffd5ca2482a7439b9648633ffe"],["/tags/SVM/index.html","bb821eced2170be38f3ea13b5b719448"],["/tags/Seata/index.html","c1f8c87e2180b3d5f4d694ff3114338d"],["/tags/Servlet/index.html","5d3d5f61b7cdd7d60944b616ccaa3209"],["/tags/Sping/index.html","5e2f78528d105fcf102f6a82d163cd8e"],["/tags/Struts/index.html","08478fdba2058dc358375823e3ef8962"],["/tags/TCP-IP/index.html","e169b22545a10346578525cdda0c8b20"],["/tags/Ubuntu/index.html","4388a56bef9c0a25333ac9f4058d9840"],["/tags/Unet/index.html","34541bcfd7066e145c445f8efc547eaf"],["/tags/VPN/index.html","60f67d98215f7048fa0cba084275ed78"],["/tags/VS/index.html","4ccf3b06609b781590c5572885f84133"],["/tags/VTK/index.html","96517db4b4e2ae523934d20094f10396"],["/tags/Vertx/index.html","39ff93827491be10c6c3d73a1f628ef7"],["/tags/Windows/index.html","195dd71dfcba65253096d19cd9e80301"],["/tags/claude/index.html","685f0c9a4e8000fedd314681d21e6f8d"],["/tags/edit/index.html","56c4e817c2383e03d1599fbe0f62ffc5"],["/tags/hibernate/index.html","ff5bf0ad1e82d53f096499d6713bc76d"],["/tags/index.html","e1e0f45cf91a9975bd910824f18bc5d6"],["/tags/itext/index.html","353fc68d7f70ecceb36e386bc0d5b070"],["/tags/jdk/index.html","18a5fad18b0f1d436d9244789d825079"],["/tags/kmp/index.html","3cdd87494e4fc942c7ed8eac4e7ad83e"],["/tags/k最近邻估计/index.html","47fbd6604a8efdd52be37c370049d2ac"],["/tags/lombok/index.html","3845576549ef135750b41a38f3fea46b"],["/tags/offer/index.html","26e7c2d5d210446ff96754bed3532e28"],["/tags/opencv/index.html","b67c464532894137763c281d2b3cf8d6"],["/tags/pandas/index.html","bff1f0e4bb96a746c0cfc9c9ab183dd0"],["/tags/string/index.html","9870a5f5b67b144e07eb4f5e9916ff81"],["/tags/vim/index.html","4d00217bb1609b16360f416adbdabb04"],["/tags/vtkPolyData/index.html","74c0314b558061d1b446b81ef4a66f54"],["/tags/web/index.html","fd1019662611704f3b29824b814d05a4"],["/tags/xshell/index.html","f4f25d8ca67b5b9f3966413dba574bc3"],["/tags/yeild/index.html","0a58aac8a9e0601eccb45dfc6a1080f7"],["/tags/互联网/index.html","7b7597dcdef6b6bfb494d0d7d3f396ab"],["/tags/人工智能/index.html","9d8e02496cfc5f1f2f0593b1e67c2b72"],["/tags/体绘制/index.html","c510bc3518bacc2305980aa2a2580e07"],["/tags/全卷积网络/index.html","a5764e85d7cebaf57e42162298fca472"],["/tags/公众号/index.html","44ad9ce8abc7322cf7a78ae8869a87c3"],["/tags/内存模型/index.html","264ff62f8d546ed0838d7702391512f7"],["/tags/内推/index.html","1c458c29a2e811b8512db94a0b03930b"],["/tags/函数/index.html","85f4a29a8af5a08c307ccef34ac5662e"],["/tags/分布式/index.html","2cb92aaa8ea1ad9d441fe7fc8ae0e891"],["/tags/加密/index.html","00b3c762ccb8f8fbf2445ba90c120118"],["/tags/医疗图像/index.html","b7301ce723b30484ab44d6366edbd979"],["/tags/博客/index.html","8f677771abd5d1b7e9c6ac669b62593d"],["/tags/图像数据/index.html","582860e9bb94329635b3d0ccaa36b02b"],["/tags/图谱分割/index.html","17b746ae1701167aef8d9290184b6afc"],["/tags/垃圾回收/index.html","fccea6aaaea828961c5ec0b64e89de80"],["/tags/多线程/index.html","87251e1cb283e068c5b8763fb745e9da"],["/tags/字符串/index.html","4780ea6d46cf1c67c452aca03e61f48f"],["/tags/小龙虾/index.html","bf27d11aca46ef7524976f851af05b99"],["/tags/工具/index.html","497a460d3d9e1bd5e147032d2a3e42d8"],["/tags/弹性形变/index.html","253eede7c538d2cd218897b349e4f509"],["/tags/排序/index.html","f51e9d89ee324f89a53223dd97c9f8c9"],["/tags/搜狗/index.html","200a5c6c0432c38750c724967730b28a"],["/tags/操作系统/index.html","cab2ed2a049a6e5961a741b2062c951a"],["/tags/数据库/index.html","10ea313c441172cbb321b88773915552"],["/tags/数据类型/index.html","5717e3ae36ec7166c3a3039919d401a4"],["/tags/数据结构/index.html","db8bcfad420f84cc22ba3b5ca2fd8556"],["/tags/最大似然/index.html","5ae14c5abb6c9bf373d6cbb7fb841f15"],["/tags/机器学习/index.html","013a629fb3858cfa72ed8b7933abf09e"],["/tags/树/index.html","0e7cdf55d3e8b2c348469837e84ebaee"],["/tags/框架/index.html","746b4ee2e1b8decb21408d76f8341b97"],["/tags/梯子推荐/index.html","c06c38887793d672dbba5aa98fb1976b"],["/tags/求职/index.html","74a92e1d3fd0cba27e8a98ae3e00b2ba"],["/tags/汇编语言/index.html","46eeb2c3972cb675cbff1d30e390d763"],["/tags/深度学习/index.html","97b839b80e12d56ba5ea7acafc4ac3fa"],["/tags/深度监督网络/index.html","19976d635845f88d3a081ec74061253a"],["/tags/爬虫/index.html","cafe5c8deef1fd58a637692b1df9a93b"],["/tags/电子书下载/index.html","eecff6b4589039c12f4ebf3c9ab06a2e"],["/tags/科学上网/index.html","ed9fb2e6731c7053cb81d56509270fff"],["/tags/程序员/index.html","ec162c061b2bea07097e1152bbbc81bb"],["/tags/程序员面试/index.html","a79e691cfcd07f7219456b15d0ee6b11"],["/tags/简历/index.html","4f98a4de63bb3f7f9d2a78cb1bd2aec4"],["/tags/算法/index.html","a794d448fdaa152e152bad4a1d1dba5e"],["/tags/线程/index.html","7b4c81b41a34edc27e22e7e70c4c264e"],["/tags/经验/index.html","cf9a95ca0f4189cfdaa319519adca6c5"],["/tags/结构学习/index.html","d76865ceb5ae47719982b630ba6b5091"],["/tags/编程/index.html","af1a00da0bef1e4caf5a886e86745f9d"],["/tags/网站/index.html","92f373be851255c5aff19e36221aaff1"],["/tags/网络/index.html","62ba9bd7e18f0895971114566e59e3f9"],["/tags/网络原理/index.html","720983dbb913e011523840fef88af0f3"],["/tags/翻墙/index.html","b3b20877f1775aada6b491c92ce2260b"],["/tags/肝脏分割/index.html","1acbfd25e10c3e25b12d033e7b167731"],["/tags/计算机/index.html","9adacd0a4e08511d4e342cb7e82c1dca"],["/tags/计算机专业/index.html","d878a7fc268652eeedaa4a0b50ff7af6"],["/tags/计算机网络/index.html","271a4dc5c216d4e30f4d11527af6922e"],["/tags/设计模式/index.html","797450b8e4bb04a1edaf2634a3214d5e"],["/tags/贝叶斯/index.html","a86c4d9c74627b1a14af17d39adde808"],["/tags/迁移学习/index.html","555620cdf3f08bede6b738220eeb2a2b"],["/tags/面试/index.html","215fce829a9fd0beebc21d940bb8bcfa"],["/the-meaning-of-reading/index.html","7283da1c136d7ece06c3da8ce3f68e9c"],["/the-way-of-pragram/index.html","8f85e220e7db18cd34349bdb0386277a"],["/troubleshooting/index.html","c0cde91562cc5444b9aec57fb20991b7"],["/untiypro XL安装/index.html","5571d72137b2c2de26a4127d6467d86d"],["/video-websites/index.html","36ce8c2a915a09afda91e803fd47f232"],["/vpn-freego/index.html","e6ba46e5b549740751b23c406c3790b4"],["/waibao/index.html","bb24a90daced6eb2c632f9c6cb8c3b71"],["/wechat-fans/index.html","3a5ce3f067f4730d2c37d08d8a4dad4a"],["/window-run-VTK/index.html","41d6906f29eb03c5bc7c1ec232b915f6"],["/windows-science-internet/index.html","d37f39cced2978bbaf1a44094bc0fd51"],["/xshell-connect-Linux/index.html","2570a5fa27356bc611674c3214698f90"],["/yzhx-vpn/index.html","92f1b6504a36561cf63755822e50ed6c"],["/‌Accessing-the-Open-Internet/index.html","a5b4e141fb81210bffbaa2d09d810287"],["/《Java高并发编程详解》，去大厂必看！/index.html","cf99cc8c0806d9421bfc7a1b4ce1e0fc"],["/一分钟没了 1.5W 。。。/index.html","4e339234aeb69fbfdac2b3ddc24abdc9"],["/一条高产爆款内容生产线/index.html","678e91575dc82899facd54ab2855c427"],["/为高考学子推荐的六个就业前景广阔的专业/index.html","ea8760a95159cdab3516e4977a072438"],["/互联网赚钱机器---社群/index.html","4792dcaff939577f8916d8b9a2e1c539"],["/你们常用的工作方法和思考方式是什么？/index.html","f8620610852931eae7e31b904161306c"],["/关于环境配置的一些事/index.html","37947b4fffd27a1b817bf9302053e078"],["/准备了19w！搞事/index.html","1bcb0ab30ed5e076e0fe910e5a72b182"],["/几个很重要的感悟/index.html","5c9a1044d9fa651143de339825a3ab9e"],["/分割ROI篇/index.html","55d4762675abfc9821f7b8a99e867f22"],["/分割精度说明/index.html","08d2d62b67b484cbbccadf904175b71d"],["/分块程序执行/index.html","5dfc2a7b97d25466675c08b3664444f5"],["/加班公司黑名单！！！/index.html","02245718e81ef30ac1fe8e23205bb53a"],["/卧槽，上知乎热搜了！/index.html","00c4d0c7f5aebff9865be4d3a0472ed9"],["/卧槽，我的小破站爆了！/index.html","d0f3e7b70b1c72705aeeb75c3aea41c3"],["/卧槽，我被盗版了/index.html","0fe68bf51784e39a782e8ac48841cdbe"],["/卧槽，还有985大学在大一上C语言课？？/index.html","97d03cdcc2ad553cfeb6ec319fa562e1"],["/历年微软面试中出现的leetcode算法题/index.html","c94d2bc25f17aa3cac15d1c7b26c9d94"],["/去特斯拉试车了/index.html","e3b38c20bf1b33ca6a6f45975883ad51"],["/吃苦的三种境界/index.html","0fb4099a4c3bd0617c8f7e5b253421cf"],["/哪本书适合推荐给 Java 初学者？/index.html","2278db8147521d8f9cefe5f31a2adea6"],["/哪本入门级的学习数据库的书最值得推荐？/index.html","b3c1f6fac2f089e8e845360b333dd2ff"],["/国内外常用的AIGC模型/index.html","65108ac38d64644eed4693d938304c59"],["/国庆假期/index.html","45869fab5768446d4dac6391e8a5788b"],["/图谱程序字典/index.html","db866f45503a31115e7bbb71d2615587"],["/图谱训练与分割/index.html","81cb1255e6a5e3f81f69463c73f6bdf5"],["/宣布一件大事/index.html","5800244b1a67e25ff1e2ee2c64397ab4"],["/小鹏P7i试驾体验/index.html","77f5edd11682e95ce11ebaeddb9c39cd"],["/微信PC版3.3.0内测更新，电脑可以刷朋友圈了/index.html","05f2d836da9f758779e77286f2b22dd2"],["/怎么更快的赚钱？/index.html","3294c0002ece83773b19e96a868cdfa2"],["/我毕业了/index.html","b266cfc2c6e026f2fcc6b0d786791019"],["/我！真！的！找到了！爱上学习！的方法！/index.html","10cd7eb9fe36a9813ae145d5e5e987be"],["/户口的意义/index.html","2bcc5477efa026034a4ff5910e1225d4"],["/推荐两本经典算法书/index.html","fb564aefeb3a5bfb82dc04ae61220416"],["/推荐几个在线学习SQL的网站！/index.html","22f8e1ce7e094d8b4ce81690bd6e3a48"],["/搞了一个程序员成长晋级社群！/index.html","1fe01e570c6e9ff08f30926ae173eb07"],["/摘抄/index.html","4e74100cbea19d64b046020171d2e77a"],["/暴跌30心态崩了/index.html","dedf0dd5b724c1de52aeb0c19b8cfab5"],["/最近很火的ChatGPT到底该怎么玩？/index.html","d7d4c8e8a76c09530982b68ef7edcd0a"],["/有哪些好看的日历可以买？/index.html","45c4682644900dcf141c7a60a20de293"],["/服务器有啥用/index.html","b7cf2e45aba41e4ce65f7861e0646d17"],["/来长沙了！/index.html","06b1f011a30a892b4b0e2b15ce5438de"],["/校招污点公司名单/index.html","ff4c54bc8a9a0f37152f8e1d5260a776"],["/梭哈200多万/index.html","f14b6b485ad3ceee09b8bbaed2fc14a9"],["/梯形图入门/index.html","f0c2bef4ececec11ed624aa2d8016ff4"],["/橙心优选，凉凉了！/index.html","03d851537c7109918ad8da95cee3a267"],["/比亚迪汉试驾体验/index.html","c111fb99d39f9de1676ef61cc7f16288"],["/清华转学成电，真的牛逼！/index.html","19b96f223eeede27020e96230149effd"],["/滴滴程序员被亲戚鄙视：年薪八十万还不如二本教书的/index.html","0f151473562e19e120fb5a9d5fb84056"],["/社群！/index.html","0e4565f113b890556124c88ac3271e7b"],["/科学上网之VPN篇/index.html","4b792f45c0e9d89219642adf05b6a868"],["/程序员必备的几个技能！看完你也是大神/index.html","ee34beaf11a49aa20671616d3bd16120"],["/程序员绕不去的槛，Linux！！！/index.html","f6b48155e7ddb5a33d76355b7b64d742"],["/蔚来ET5试驾体验/index.html","bdf612823c3ccfedd37938246a5f7cbd"],["/蔚来，牛逼！/index.html","cd38b497fdfb08d47302e967c3dbb4a5"],["/被录取了/index.html","b23ad9d6c7fa6f67458c62ca8fb89205"],["/被找事了！/index.html","7fab46e66a544380325fa83ad09dfd04"],["/被拉黑了。。。/index.html","7362e3908a901a3516a87b14760bc87e"],["/被车撞了！/index.html","7b47adc76db3943262abfb0b7fc1088a"],["/该如何选购固态硬盘？/index.html","2be181ae5e34e4c0ecebef957be2fa02"],["/这本书一定要看！/index.html","4e59502f6cc0e06c7bffedfe696f305f"],["/选Java还是C++？/index.html","e4782e4dd9d69655ed6d171d746769c6"],["/那些让你起飞的计算机基础知识/index.html","7d4962b10bd6b062a60cad29b36e26b2"],["/靠这几本算法书，成功拿下大厂offer！/index.html","ad1ecdcc7d78e5ddd75d3579eaec8d1b"]];
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
