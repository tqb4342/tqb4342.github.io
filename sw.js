/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/0010-city/index.html","91cfcd39ea610dd82164895a8f6fb92d"],["/10-algorithm-book/index.html","0f2048901bd845edeaacdfae47a6c207"],["/10-website/index.html","4228c71d435632d18c0be8fc730d00fb"],["/100万的小目标/index.html","37f2201f647b6b359cfcc8610073a95d"],["/10w+YYDS！/index.html","9e1d15594509da22c66015ebdafd0f44"],["/12-technical-tutorial-sites/index.html","31e12a5af3431e61de596fd99330739e"],["/2 6 岁 了/index.html","7f63c7b108b111923a014c189a81e15f"],["/200万，啪，没了。。。。/index.html","2709de4759b526f2579defd2cb474698"],["/2018ECCV-Paper-DL/index.html","180891dc600ac7cd82b5e7d47203af63"],["/2021年固态硬盘选购最新攻略（小白避坑指南）/index.html","b7be5dcdc8f1e36505d3bbd9c284797c"],["/2021机械键盘推荐/index.html","356fb1e9ce1cc7529fd6e429bc5ccaf6"],["/2025-07-15/index.html","575a8b5a8c0c993d55390b746dfa5e04"],["/27岁了/index.html","4dc9c6454106615f7d2dc7172c79e977"],["/3D-Convolutional-Neural-Networks-for-Human-Action-Recognition/index.html","289f1bf017acb73ec3aa2007cad6620c"],["/3D-Deeply-Supervised-Network-for-Automatic-Liver-Segmentation-from-CT-Volumes/index.html","ccf7f24d13d4d2ff207b008c9cc7de48"],["/3D-Unet-Experiment-notes/index.html","1bc734cf03020f4367cccafae51058ce"],["/4-Software/index.html","204f2423e67274585a761bc57ea662e7"],["/6-website/index.html","ffb5b6bdf99656107efd7661b89f4d29"],["/7-terminal-tools/index.html","8b1f621cf0b3a7541df957afb5a15913"],["/AIGC中典型的深度学习网络/index.html","e5a6f8463f9f77d826d464df460a7af0"],["/Agency-model/index.html","64612063c0ff1cdd42af9f8c190a46c0"],["/Algorithm-brush-notes/index.html","9c7b986f0223246eae4d03150670e95c"],["/Ali-recruits/index.html","aaeb6f5453cb400fa087ec65eb6ce0ce"],["/Android-open-internet/index.html","63ef71566bcd7ffcdf876367cc387d13"],["/Appearance-mode/index.html","33717655bc551b3cdf021350364d06cc"],["/Backtracking/index.html","091fa9db9e90c2c61da752ccb78669d1"],["/Baidu-Sao-operation/index.html","1bea4199effa1a1b03d31e4110357625"],["/Batch-Normalization/index.html","c89e93b4a432c0791b886bac9de3c51c"],["/Best-AI-tools/index.html","7264ab08a9f43cb135602e6656d9c555"],["/Bias-and-Variance/index.html","6dd70648450fedcb7377196d39deadbf"],["/Binary-tree-traversal/index.html","d18466efc04927b44c67b5b216a853d8"],["/Branch-and-bound/index.html","3bf9b4f1cb2120388abf84593987dc36"],["/Buying-computer-for-the-first-time/index.html","4af8a04846c2ea548a729a7f2a4ec0de"],["/B站向北邮道歉！/index.html","c2b4841ea19f3a238a8a050d992a7eaf"],["/C++-string-function/index.html","c121eb1e532a16487e5146eaf075ed30"],["/C-Java-DevelopTools/index.html","d9c45cf2743e25cd70b449d23544f1e6"],["/CS-Classic-Books/index.html","945a8f9306c968737dcdcf606bf6e2fb"],["/CS-network/index.html","ac8bbfd862b2a9c959e0a7bbb39d2b1a"],["/CSBook001/index.html","134b1dcfa6bd5f7cde8cc586c01fea73"],["/CSBook002/index.html","791c658d67ba81afa214a512c922ddc9"],["/CSBook003/index.html","7ca54298bfdcab1c0cc0141001f481fc"],["/CSBook004/index.html","ff61b39e5bab11dc7f2eb48f27de5d56"],["/CSBook005/index.html","fffd62763d237d8e59e8744eb448f999"],["/CSBook006/index.html","7ae157d210ca5da91926caef2ee43d48"],["/CSBook007/index.html","cc31c547a6ad6a147d91889b288d1f64"],["/CSBook008/index.html","2a648e33ebf3d7a54473e8e02c10b9f4"],["/CSBook009/index.html","4490429b7c72a09eeb87597c84f415e6"],["/CSBook010/index.html","f1a0fb5262a0788fd67e6d28f1e5fc7e"],["/CSBook011/index.html","fec8c624f6bdda4a20112b906a452d64"],["/CSBook012/index.html","b62b2bc4e2d12f97fc258499dadff815"],["/Changsha-really-fragrant/index.html","f33b6dbbb4ea783c7c81cbabe709e407"],["/ChatGPT-VPN/index.html","03220d089938c4333d0058166d11ac73"],["/ChatGPT/index.html","6e59b6f22a243b98294d390879494bdf"],["/ChatGPT！王炸级更新！！！/index.html","c878202fdbb29f8b3f38117f4fd0367c"],["/Chrome-crx/index.html","6bdd6230f0dca44daa3ba5a61f73c37f"],["/Computer-Classic-Books/index.html","ea4a80a7e598c26baff207e8633eb1d9"],["/Computer-for-another-major/index.html","75f0945527808d62c7289f933402a589"],["/Conditional-confrontation-network/index.html","03c8f0324a9a37e2dad053d4352d035d"],["/DNN/index.html","7e2016671a162b9a22b4c9444172770b"],["/DSN-segmentation-liver-experiment-summary/index.html","b1e6a8b3e1f1f6d166bf098424e0d82a"],["/Data-enhancement-elastic-deformation/index.html","d1efce73703df59607f45177f1cf2c7c"],["/Decorative-pattern/index.html","d1850eba9c1894ab816012241b832f96"],["/Deep-Learning/index.html","f00ae02754a6cc85dae41fe830810e34"],["/Deep-learning-and-medical-image-analysis/index.html","f9f0991d7c68a638b73468805aaf1ff2"],["/Deeply-Supervised-Nets/index.html","8d4a96ee1430f8be5853109f4f3a53bf"],["/Deformation-model-based-sparse-representation/index.html","721168b9269f386143e5a2c2f993045c"],["/Discriminative-and-Generative-model/index.html","b1ab0d5e0eac2b686cb81860cc228096"],["/Distributed-transaction/index.html","5c97c30b3a3390642e5fa4be1cee89c6"],["/Divide-and-conquer-algorithm/index.html","fa46268265d4c02b2acd3a175373ff61"],["/Dll/index.html","348361b122d61962af84549a2f9edb27"],["/Dynamic-programming-algorithm/index.html","f96502b3875a42703afab0dc766de89c"],["/E-book-download-commonly-used-by-programmers/index.html","f2ca740a7e4f3404f2a201cb39b49187"],["/EditPlus软件的安装、激活和配置过程分享/index.html","2d2949f918121f9b9b4aae468ddf0c87"],["/Eight-sorting-algorithms/index.html","db93d8c7ed0ae3fc85de0882056f891e"],["/Encryption-Algorithm/index.html","932809a9f9548c2177d46d62fe51ffda"],["/Eolink/index.html","bd0211663a9d19a321da18e6df4ba927"],["/Factory-and-strategy-mode/index.html","4849db583c7606bce1d28f5e15b50d38"],["/Foreign-technology-blog-community/index.html","da789fc147f5e0c866a3237a52f34cf4"],["/Functional-model/index.html","6f221b01bb00f2a6b6481df687a75372"],["/Fund-type/index.html","cd7be22f5fe711d90bf03792bd387071"],["/GPT-4o/index.html","933e96b04a73e61881ef15cb0a609096"],["/GPU-medical-image-processing/index.html","955250c005149295b7907b54a69b2951"],["/Generative-Model-of-Unsupervised-Learning/index.html","92860e0a7bf30122cc9059a7ec9e026b"],["/Git-Learning/index.html","ce11583e52a1e6caddd2bbd907a9a1b5"],["/GitHub-2FA/index.html","4d0c11e030d56538505b70f466a92c37"],["/GitHub万赞，程序员必看操作系统总结！/index.html","a0942a603b975dd9917a48f017191b71"],["/Golang-book-recommend/index.html","157ee86db3012a0c3c623194b7885a0b"],["/Golang-learning/index.html","2a9af1b3dccfabf32ae43c9b5dc2b11a"],["/Gradient-descent-optimization/index.html","d43395dce9e1be6d71beb110f89b72d2"],["/Greedy-Algorithm/index.html","6d3aee2f9eb33463a7949b2a363377f3"],["/HK-bank/index.html","883bd85b432de5476c12469a3b603658"],["/Head-to-head/index.html","8bf6fbfe4a71ca712a9844985ef42867"],["/HexoPage/index.html","83b0c5080062b1c9416bb2757b28e39a"],["/HistCite-Pro/index.html","87ca0a8fde24dec6482d0d705d0ecdd9"],["/How-does-the-program-run/index.html","93dd314e78ba2a72fa7b17e21ca3126a"],["/How-to-judge-whether-technologyisreliable/index.html","75293203c1763c9ad427cfc65631fb4a"],["/How-to-learn-design-patterns/index.html","3e3e99894718ceff973864bc7f6242dd"],["/How-to-learn-design-patterns？/index.html","112dfc49d9cc2ad6c5f638d0a02974ab"],["/How-to-teach-yourself-programming/index.html","a068b48359a76cdae58cac73e2ede42c"],["/How2learn-Python？/index.html","0641f91109e6af9566cd3f07b801d7ec"],["/IDEA-shortcut-key/index.html","b49ac95b397c11d6d52d5b1ff442856a"],["/IT-interview-basic/index.html","a0944876170b4502ef800da3c0370ac0"],["/ITK-VS-install/index.html","6be801917a9e98f8af1cac291b13cb3a"],["/ITK-VTK-ItkVtkGlue/index.html","ec19734b9da7252b27e4b8baef1cce3e"],["/Image-processing-plus-noise/index.html","d0085379e5ccea160104525d0d1fbd77"],["/Inception-Going-Deeper-with-Convolution/index.html","40dd4d45206888c9e84fe99fe6b8bea1"],["/Java-GC/index.html","6414ccc3f236e483a818c6a4ca224b67"],["/Java-Servlet/index.html","4fc2c40619b1af60f6442e6816f01d13"],["/Java-array-and-collection-sorting/index.html","716918a4cc2f856440693ee9eef800dc"],["/Java-development-tools/index.html","4474ba3a4e1755e1855081622587b770"],["/Java-eight-data-types/index.html","2302d681df93dbe349fbb45ed591babc"],["/Java-interview01/index.html","ca80821c593869e719aee0a74469eff6"],["/Java-interview02/index.html","bc3cb9cbbd595f5f5f55c11d098db862"],["/Java-interview03/index.html","fc4020183d4e892920a4248e6fe5750d"],["/Java-learing-map/index.html","d0b17ee7259f3c123593fb3009fd1ebe"],["/Java-learning-route-map/index.html","fc17d51a3e7c521ab612a5d4eb37e03f"],["/Java-memory-area/index.html","a82131bbb1f5c08458d639e9d953ec0e"],["/Java-memory-model/index.html","4de60df8e6b2fa29527f0d5a7dea531e"],["/Java-multithreaded-learning/index.html","59857333db23c75b80a3479a74f00466"],["/Java-project/index.html","e9ae13b1eec78d5dc7e6da5f8516fdd9"],["/JavaWeb-Chinese-Garbled/index.html","b5fd040194b352688c66b4f04de8479a"],["/Java还是C++？/index.html","29b656c1c212ebc1a371c06c63436669"],["/Kaggle5-step-guide/index.html","e9be403c69a519fc07baa589e7d4b8cb"],["/Knowledge-points-of-Java-garbage-collection/index.html","cb75487a0761654a3aaae96855df58ab"],["/Layoffs-and-Hiring/index.html","7b55795f25e7c598263945dc81b6abe6"],["/Linear-regression-of-machine-learning/index.html","56d4b6ce6dac5a74dedcd12d94a1e110"],["/Linux-Compile-C/index.html","405afc8075192df977630b0a33510cc3"],["/Linux-ITK/index.html","9e14ca4059d885e7a1d99f6d4e8bffac"],["/Liver-segmentation-of-sparse-components/index.html","f463028a45d37cae005edb9a39777f71"],["/ML-EBook-paper/index.html","1f1fc057b54e25683d6b8495ba714e00"],["/Map-uses-multiple-maps/index.html","812d30a0c7ec98451e41337275ec8d59"],["/Matlab-Graph-cut/index.html","84567f69d9164d45b2b7fa70d041a59a"],["/Maximum-Likelihood-to-EM-algorithm/index.html","27c11c1b14a43e59d55da3c7f6fd6ac3"],["/Mean filter and median filter denoising/index.html","ef6e6757d68863011cf49c5a72832603"],["/Medical-Data-for-Machine-Learning/index.html","fbe43e5d60b5243f40d0448bab522b85"],["/Medical-image-analysis-deep-learning/index.html","231564c4ea8649faa1f54d934d5f7df1"],["/Medical-scan-image-processing/index.html","0ffae35e5e72c2fefc5b93fc95b6d3a4"],["/Merge-sort-algorithm/index.html","53119e5b3077c041f5d4b7555e199789"],["/Monthly-income-2W/index.html","09e5807ea27acf0a92eb788e07154871"],["/Mysql-database/index.html","36c99f462a4a753af5b44b24d5b961db"],["/Neighbor-Embedding/index.html","1c621c7f55ed63a231a126216783103e"],["/Neighborhood-approximate-random-forest/index.html","bba3d355ce3cf6a4017fb4d15f3c6666"],["/Net-and-official-documents/index.html","bcdc1bed5018520cfc08bcbcb16ca3fb"],["/Netflix-VPN/index.html","889c6fe45a91911625c84e2d6109e698"],["/Network-principle/index.html","3fc8263a17107cfce0c9f754c0f4e45d"],["/New-Hong-Kong-stocks/index.html","1938f79b81f3004ca545e4f5dd25b2d9"],["/Nice-to-meet-you/index.html","cb0b89af40260003936774715552a60d"],["/OS-processes-threads/index.html","a7e5eb02eab717f30f222cf1aaf48e23"],["/OS-run-environment/index.html","e522a4b1aeba404605bd856cf3681aa7"],["/Open-Internet/index.html","5477b761f3ddbef7cf87c8bab2dc3017"],["/Open-Internet2/index.html","d67d5a2f2948a160e72c4838c088ab53"],["/Open-source-community-and-rewriting-website/index.html","b31c5e8bd30430f0d56e25cfe8a2f7a8"],["/Panoramic-image-stitching-based-on-SIFT-features/index.html","b5f746f5ad9c1b90709b2607119d8a17"],["/Parzen-and-KNE/index.html","7076bbc8a72226c084c7e154b96a0748"],["/Personal-technology-blog-site/index.html","e0f7cb54361d6ff08b96fcfcf496354d"],["/PicGo-Gitee/index.html","5b98c5272a1751e044a8b483c26b652f"],["/Programmer-treasure-chest/index.html","cffe496ad48ea363e5fbe8ea7bbb7202"],["/Prototype-mode/index.html","993c7a48641a01024aa90c668811a94d"],["/Python-base/index.html","6579d1a841417593f830711251d81648"],["/Python-crawler/index.html","11ca60c12932765eac6e84db5f442144"],["/Resume-revision-suggestions/index.html","20d21ef3afb0a4264a6b696e8c23031a"],["/SEO01/index.html","f351caeaf2c95a3dc097b8a2a638925b"],["/SEO02/index.html","520610e4ac03eca50e448afb8d2c81af"],["/SPHARMPDM-MEPP/index.html","1089163419fb0cd66e13232ee5cc4610"],["/SVM/index.html","5b277f620b6b9512d96941eb16f76b15"],["/Semi-supervised-learning/index.html","f6c18849c9c00b47378fee9f0fd783f5"],["/Sequential-model/index.html","c695013882fb53444f461542b0b04332"],["/Shape-Based-Human-Detection-and-Segmentation-via-Hierarchical-Part-TemplateMatching/index.html","9821dfcf7d9addcb38c363b573014cda"],["/Spring-basics/index.html","087475095db3f1dafcb3df44d3996468"],["/Spring-integrates-hibernate-Struts/index.html","e21be81695dc4e04df4bf8d4ce65c97c"],["/Structure-learning/index.html","a90d04c5e6f2d1d9e1be62aac3685e15"],["/Suggestions-for-self-study-of-computers/index.html","5792186427b22dbfdd995fdf49323346"],["/Summaryof-HongKongStock-Account-Opening-Links/index.html","afe87694b30c12a912d3a02691551963"],["/TCPIP-detailed/index.html","39c909c72956847b61b4877d3c6c62fa"],["/Telegram-VPN/index.html","257f8f0f05a88ab249e90bb80951bbae"],["/The-essence-of-shopping-festival/index.html","eda5aac35b202df309e5e946c23a4c62"],["/The-most-important-investment-in-life/index.html","c566ea1ea3b63a3e41ef44a805441b04"],["/The-most-successful-nvestment/index.html","4c01afb0c38f0e8975a02e8f61aff8e8"],["/Transfer-Learning/index.html","e56265ed0fb85526c5e880a38f5b6255"],["/Transfer-to-computer-major/index.html","9c4bb60aee71d3f22b6eac90771cd920"],["/UNet-Convolutional-Networks-for-Biomedical-Image-Segmentation/index.html","225b4ec8e7c675800d1583f1d78dcb08"],["/Ubuntu-install-sougou/index.html","4e71a35e0e04de0430a7f0bb35e89b62"],["/Understanding-of-paying-for-knowledge/index.html","e20eabdc4d5844191afa3f4664f6a1fd"],["/Unsupervised-Learning-Linear-Dimension-Reduction/index.html","381f8b06b397c944b8085207ac925756"],["/VPN2025/index.html","f311e49a0ba0823c58407981e65e2b16"],["/VTK01/index.html","5280c231482e3e3d8da2aed9c1658958"],["/VTK02/index.html","4df9adf13a708790ee9f246c7baab21d"],["/VTK03/index.html","1a4d287c546d4513254565d660eab06b"],["/VTKRead-write/index.html","c3acca70a0e1338f455491197bffae0a"],["/We-are-all-good-kids/index.html","a4293dfb7fbea759021a822b3be5fe5c"],["/WeChat-80/index.html","74b23a0353c84c6b8760e582fdf2884a"],["/WeChat-red-envelope-cover/index.html","752cda6bd6d54d5568ae723ba67a8337"],["/What-is-crawler/index.html","2e009a8c693b2b6a3c49d5df7bc956c4"],["/Win-OpenInternet/index.html","0f103f64af373802cb1869a6947fec95"],["/Windows11-2kfans/index.html","1395ad48f9ca63d3a45ff31370484eda"],["/Word-Embedding/index.html","3050daa52ebbb4891e36991835375f04"],["/YuanShikai-and-his-Beiyang/index.html","4490adcd75100017bcf8c24c2417d942"],["/Zero-copy/index.html","7ee809363a2de04efeaf6b8ee84e9cd4"],["/about-keras-model/index.html","095a922d5d0828f86260b489fe49f9c1"],["/algorithm/index.html","110ecced43226e8be36af1790f8655d8"],["/alibaba-Java/index.html","45f54d097f929a095db4d3fcce21e841"],["/archives/2020/01/index.html","9ef5e36e80ddd6c138889d91552080de"],["/archives/2020/09/index.html","f3390ee124acf3fb34a4a27dee60f699"],["/archives/2020/10/index.html","ea0682ee745e4d2c680565a2a946a6cd"],["/archives/2020/11/index.html","e6dc69018076afd37dab97ef852b4b60"],["/archives/2020/11/page/2/index.html","f6ee85d90e597a5cb018764eec40c85c"],["/archives/2020/11/page/3/index.html","70754a9e5930629278c4d69997e1a1ca"],["/archives/2020/11/page/4/index.html","b8cde741c716de78fd0c675bf9410755"],["/archives/2020/11/page/5/index.html","3554f0391bfe47d44059535c8528ea76"],["/archives/2020/11/page/6/index.html","47ee8fd393fde52dff306da4c3a0b6ef"],["/archives/2020/12/index.html","a818690ae7fef7350692c5e23b2b145b"],["/archives/2020/12/page/2/index.html","0bb895da59fe41e02240f12614109719"],["/archives/2020/12/page/3/index.html","c8d1896229706e46f2cb0f2172720ee7"],["/archives/2020/12/page/4/index.html","fa8e2de8c0bb71269816f9fc4b8df05c"],["/archives/2020/12/page/5/index.html","0f6a37bae938b06ad3169416b1305b05"],["/archives/2020/12/page/6/index.html","148b342c05c5a06493319569853fd686"],["/archives/2020/12/page/7/index.html","2568643571ea1a475e78aefe7ee3e756"],["/archives/2020/12/page/8/index.html","035ff486442d3f0dbeac88144bdb08d2"],["/archives/2020/index.html","072d3cf3d2f988cbdcda03056709fa3d"],["/archives/2020/page/10/index.html","09acf3f38c384b4f69bd3a3ac3b0acb0"],["/archives/2020/page/11/index.html","2f0aa32934e7efaf57c628e5f58e1a56"],["/archives/2020/page/12/index.html","5e59b96381465eab461f2f6d288fc48e"],["/archives/2020/page/13/index.html","d9f8b8a34b7fcdcaee05f907423b8023"],["/archives/2020/page/14/index.html","da094f73d2acad50cb2cc4632fa52cfb"],["/archives/2020/page/2/index.html","851e468a6846ad0fc824e21aea2217b6"],["/archives/2020/page/3/index.html","cf21f0d5ecc2b4ca2b4e583a071d8125"],["/archives/2020/page/4/index.html","52286bd9401e62f51c0655c75278325a"],["/archives/2020/page/5/index.html","748b8e2de6b2a0042b5418d6059b956b"],["/archives/2020/page/6/index.html","e242d4f99fefcfababe7131689cc9b3a"],["/archives/2020/page/7/index.html","14be938324d558ae16b67fb74a6f3eac"],["/archives/2020/page/8/index.html","dc2c944a280914519e5864bfb305c704"],["/archives/2020/page/9/index.html","a4c00298f8bd0425ab6f06b66caeba37"],["/archives/2021/01/index.html","ac43e5bad242654faac5106ddba5c093"],["/archives/2021/01/page/2/index.html","80f6cb74f43b074362aea73986389d28"],["/archives/2021/01/page/3/index.html","82ee8007e5db42f53b7271caa46cbb63"],["/archives/2021/02/index.html","30180aaa74b9c636ed0cf98a5ceb0754"],["/archives/2021/03/index.html","6af326e8bf135a4f4d4ec2dbb722b94d"],["/archives/2021/03/page/2/index.html","e2a44e7ac90ba7270a054f8bb84e2f90"],["/archives/2021/04/index.html","486290471aeeb0de6706480fe99545c1"],["/archives/2021/05/index.html","539acb8792d8e3d8770ef9623b360b59"],["/archives/2021/06/index.html","89e1317088ecb206b0f9d105db19ab23"],["/archives/2021/07/index.html","011be947ad04d9eefca1d88d8a8bb8a2"],["/archives/2021/08/index.html","441f62af6a028a76d1c687a8f208eece"],["/archives/2021/09/index.html","c5271b63841b69dbe86fded9a22b5dc0"],["/archives/2021/10/index.html","d659812346e30778a7f185b9eaa53fd4"],["/archives/2021/11/index.html","0df12eeaa8d0b762e25e24c413ab43a4"],["/archives/2021/12/index.html","3deb6d7af54a18c3c4c7de15e49171a5"],["/archives/2021/index.html","dc89462dfceb472aff005a3085c08875"],["/archives/2021/page/10/index.html","c635d0b48c5f67ca4aa3f738eb1f5117"],["/archives/2021/page/11/index.html","41b5dacd9cf37c46a3dd8fa7d2358d3a"],["/archives/2021/page/2/index.html","563508aca9a9e7a9f728e3b7e0392184"],["/archives/2021/page/3/index.html","7ed92e64770bfce1ba29f591fbc470a1"],["/archives/2021/page/4/index.html","ff6eb567a653f3d97a65fc48d830fb9b"],["/archives/2021/page/5/index.html","3886d38bb9f4a92def31a0f9b0de8b95"],["/archives/2021/page/6/index.html","a26b039678ac3811e976833969d43b03"],["/archives/2021/page/7/index.html","e772588af1c5d3da25b3278dc6cd8bb4"],["/archives/2021/page/8/index.html","62546e7839997f9c92f585a588ec48df"],["/archives/2021/page/9/index.html","4152bd6cd622d8b743eda9a7fb8b0ca4"],["/archives/2022/01/index.html","5ddb51d018b02f58db6e69748bff6676"],["/archives/2022/02/index.html","8e12aabfe9e95f7dcf81ee883135c296"],["/archives/2022/04/index.html","8347df51ce9c9c2a1e797f6ea6ab4a0a"],["/archives/2022/05/index.html","2dc014a36175d3c096776c4c6e7ae4cd"],["/archives/2022/12/index.html","0352f51cb017685d613d2f4137613314"],["/archives/2022/index.html","04e6e164aec2fee90d90832434631942"],["/archives/2023/01/index.html","c68daf7d2142d14af788a781e4fce062"],["/archives/2023/02/index.html","0b6530c2e946959993e8218a122fb16b"],["/archives/2023/03/index.html","a6adb872d94537eff48c2dd418efb038"],["/archives/2023/04/index.html","6be04fb65f3df892995bf432c9abe764"],["/archives/2023/06/index.html","3f37368f6b233525f9981126430b097c"],["/archives/2023/08/index.html","4fea993445231ebdbc0428302f1c2739"],["/archives/2023/10/index.html","5b68ea811ec409808e606863b4ebc62b"],["/archives/2023/index.html","b5ee2e2affc40467045da04911b2f512"],["/archives/2023/page/2/index.html","06b05fdaf1718e86fe37310263df4690"],["/archives/2023/page/3/index.html","53182cca9b0b51478a508cf201073423"],["/archives/2024/01/index.html","bfc6381ec91a968d6186693cdc0faf92"],["/archives/2024/02/index.html","c3285e81aad861e22dd9cd6175fc2971"],["/archives/2024/index.html","d1cefc36d1b595341d73c6322ed652fd"],["/archives/2025/06/index.html","2e47689b0102c678018739dd0a758a39"],["/archives/2025/07/index.html","3649234d4905b4020e841c23c60d35d2"],["/archives/2025/08/index.html","85d7dc935e201c4973cf557c736b5860"],["/archives/2025/09/index.html","7c151e8741a069da742da20eaf244802"],["/archives/2025/10/index.html","1f591e00035678728b0b693fb16f16d7"],["/archives/2025/11/index.html","fb9c9a41b4bd5c0447dc02922fc5ed86"],["/archives/2025/index.html","871ce6cd8c8e8877e64d05eb6e849d3a"],["/archives/2025/page/2/index.html","c7f6ceeb1aec84d2e0394aff24c38b76"],["/archives/2025/page/3/index.html","44061c051548c24ecd72dd94e436d4f8"],["/archives/2025/page/4/index.html","363dc9cb801fefb2901b078aa76c5593"],["/archives/2028/02/index.html","19e346be2073032668e4ce3fc578cb7e"],["/archives/2028/index.html","3b3718362ff8864657731304bc2f4ab3"],["/archives/index.html","010fc7ff019d47069982c8d610c9fe86"],["/archives/page/10/index.html","4fe40fb4caae6c79bf664b4d54c940a4"],["/archives/page/11/index.html","cc8c133b0bc42f4127ab23536308a5be"],["/archives/page/12/index.html","e5f5803039b4de76794445885d4f0a57"],["/archives/page/13/index.html","4c317f60dc4094bbfcc97cc95cee7364"],["/archives/page/14/index.html","3c7f601ec08bdde4998133ae4255a307"],["/archives/page/15/index.html","6d844e86dbe7dfaf5bc0748476de8945"],["/archives/page/16/index.html","edaaab4a469b7552b62762d100596cb5"],["/archives/page/17/index.html","59162897e2ce95241b21361d21977797"],["/archives/page/18/index.html","e7818eb43a0ecb3dae9a54b4a1c99188"],["/archives/page/19/index.html","0c23652b69e30a5ef070f668655847a6"],["/archives/page/2/index.html","184749198b73bfd96bb9a36ec2a320cc"],["/archives/page/20/index.html","1c51151e98120c42f2715c0b94259bf4"],["/archives/page/21/index.html","f18c663c2f41e3c60068c8ed5156da9b"],["/archives/page/22/index.html","6404845b66ec2f52407b3bd96c298345"],["/archives/page/23/index.html","db2ed0644119c9ccc8c6e8ef4fe316e9"],["/archives/page/24/index.html","d9c1ca5046a05550328037d8b1a63703"],["/archives/page/25/index.html","edc499ade1ea233662c135634e79616f"],["/archives/page/26/index.html","3ff7561788d6d12c9ca4e9ab6adc12c7"],["/archives/page/27/index.html","30fd14cae23e9dc1a4bcdcc82deebcd6"],["/archives/page/28/index.html","7e4b43e2dd73ac0c068dd01a620e8441"],["/archives/page/29/index.html","af86e10284b63ca65fc86edd58f6d9e3"],["/archives/page/3/index.html","01f02be6b0a1654e859fa3c0b169743b"],["/archives/page/30/index.html","ca619c2ccf11be6904e3356dd3edb8e1"],["/archives/page/31/index.html","dcce58f403b54f1098d958c662a50bf3"],["/archives/page/32/index.html","a9c5db1b7bf0173a70c5ab7261c6e67d"],["/archives/page/4/index.html","2d02b0cc9c64d63e919977829fb07aac"],["/archives/page/5/index.html","35eee2319f890c95ada576a34803214f"],["/archives/page/6/index.html","f5899a17dd39c56c20aa719bdd3b6dca"],["/archives/page/7/index.html","270683242f699c004079ce50f214c7f1"],["/archives/page/8/index.html","ba3b85a0769ce3b67038aa20e5611d20"],["/archives/page/9/index.html","bb9f92065cfa3fc8383fbbee4e98f524"],["/baidu-search/index.html","22b101a732fa8b677eebb90a87e90546"],["/baidu_verify_code-Hh2fKNlEB1.html","08a3b8b05d54bebaa2884f27a41ddd3e"],["/be-a-programmer-instead-of-a-code-farmer/index.html","ab23b324e00fa23a789ea84e80461a25"],["/bought-a-house/index.html","dc62d92c168cdb2262001d2ddb382086"],["/categories/C与C✙✙/index.html","70d21574d7099c83c6d754e717778741"],["/categories/Go语言/index.html","5c7b6d2011923e9b4ce0b757e53a0660"],["/categories/ITK与VTK/index.html","3e846bf47b76b97c824bbd46a8a53eab"],["/categories/Java/index.html","c4c02bd657c9bf94a16d67eac53fe2ca"],["/categories/Java/page/2/index.html","25bfb054dc49542aabcff12aabbb191b"],["/categories/Java/page/3/index.html","35500eb33c8296f1d1caa335ba37435a"],["/categories/Linux/index.html","6ec52c8dfb4b81e3879db1356bc591f4"],["/categories/PLC/index.html","38fe6591b9b414aa668145da3a11f10d"],["/categories/Python/index.html","5ae095507305479410006822a0cabb6f"],["/categories/SEO教程/index.html","56c6755c3127573a509a132355b21025"],["/categories/index.html","6e261c65c874f34c374b503050f078e4"],["/categories/图像处理与机器学习/index.html","e9b4a34891eb7fbafa647db9c9690135"],["/categories/图像处理与机器学习/page/2/index.html","e6a59a3e1393a820607a74a25e8e4e3f"],["/categories/图像处理与机器学习/page/3/index.html","d84e493a3861c23347263a32626c52c6"],["/categories/图像处理与机器学习/page/4/index.html","3dad471827050e9eb979fd007a7c5d4a"],["/categories/图像处理与机器学习/page/5/index.html","6837c36ebaff76a44b367e2e559ccdf6"],["/categories/图像处理与机器学习/page/6/index.html","cade58ff1066d1668ea76ada87d6f00f"],["/categories/工具/index.html","4788cc8703c7d54fd68303c329f21ad3"],["/categories/工具/page/2/index.html","d514341615029c671c7b55cc5d04988a"],["/categories/技术以外/index.html","db08950f5cc82209c415338621879e02"],["/categories/技术以外/page/2/index.html","ad81b79684993f4bc869d79ddca2321b"],["/categories/技术以外/page/3/index.html","1dc6ec5bc6b608208984ac2b47eed8d9"],["/categories/技术以外/page/4/index.html","72dab0cd6055508c3b6d97efd8412b70"],["/categories/技术以外/page/5/index.html","6281b49dee3294eeb7d38a034011559a"],["/categories/技术以外/page/6/index.html","4b5e2969ca2a2a04743066bf8a38daa4"],["/categories/技术以外/page/7/index.html","8933cebd8ed8acaab29c7bdd8ee309ce"],["/categories/技术以外/page/8/index.html","d02ab9f7f86a5dd3a9248907e43f1242"],["/categories/技术以外/page/9/index.html","9624067618621990a3fee0d6c51bb231"],["/categories/数据结构与算法/index.html","95d0b4cdadaa33d049949e99745f3e32"],["/categories/数据结构与算法/page/2/index.html","96036d1d33a35b519f4b10db9d9b1812"],["/categories/科学上网/index.html","e938f3ad60158d487e104b287d959cc7"],["/categories/科学上网/page/2/index.html","d9d634f80a0e828413560aeaf64698cb"],["/categories/科学上网/page/3/index.html","382740732aa861602ef089df2497c939"],["/categories/编程经验/index.html","287a1187a236bf97bd94b07f9b4e76bd"],["/categories/编程资料/index.html","2aab42aff8d35c0ccb5cc4901250bce0"],["/categories/编程资料/page/2/index.html","84c98e46d2f4e68983f0b8d8ba47f6b6"],["/categories/编程资料/page/3/index.html","fbc7697158f144cd5ad4a4d1649bb2ed"],["/categories/编程资料/page/4/index.html","2146de33632477e6425d645583f1ca46"],["/categories/计算机基础知识/index.html","e9e6039e1f755b6b1aa398591921aae6"],["/categories/计算机基础知识/page/2/index.html","ef92a58620c77eb5b17be684efbe4aa6"],["/categories/设计模式/index.html","f652278b323e67b2c3e8db90d2307ba0"],["/choose/index.html","072044ead9923a78f4dd678dcbca1c21"],["/choose2/index.html","e6b5760cf9df49c8f20c0f6011bf2e0c"],["/chrome-crx-intruduce/index.html","13f8f9bbf62414dea59117d6f4fe4975"],["/clashvpn/index.html","a9f9b6f05ee38d04f5405ba3115cfd53"],["/coder-blog-website/index.html","4020c61cfc53d8fccf3de735a880d0ef"],["/coder-source/index.html","f43afc650fc25caba56c993130abb6a7"],["/coder-videos-website/index.html","093dd9c76c57d4196267ddc8f6fab920"],["/computer-book/index.html","b61dc4a51053f2b50e8d3e5e5378493b"],["/computer-censorship/index.html","c62a139819e98fcb89ecefdc761e02c5"],["/computer-network01/index.html","47901f096cadabe826a79d68a0d46db3"],["/computer-network02/index.html","89d2b86826532365e73c09d8e2559964"],["/css/main.css","bc32ad34ec4990d934c3c647bdb62f79"],["/database-Mysql/index.html","69cb8365b3f8e256a70461628ef90d49"],["/eclipse-lombok/index.html","c20a7fb91c49a0ec03d480c5cbc64738"],["/fully-convolutional-networks-for-semantic-segmentation/index.html","ddb7b0457e7113c71133be36ba7c8ddd"],["/great-firewall/index.html","547a191f68accffad202f74cc255159f"],["/halfrost/index.html","4bb496bb3915d6624962bc9ccd297f99"],["/how-to-signup-chatgpt/index.html","4f9041060b4ce61c28070260a08375e8"],["/how-to-use-Gemini/index.html","ffb61d2ae31a239c3cd27efb2ee42b3f"],["/index.html","4a6e996ab215b02768d9c93433c2ffe2"],["/ios-open-internet/index.html","1f7c4009ee09b78b7b42cfec902c27fa"],["/iphone-open-internet/index.html","de7d94c4b1c1272d252cb89606666017"],["/itext-makes-pdf-form/index.html","e1a765406a3c2ba58de77da6c9d8d80a"],["/java-Set-Map/index.html","d79bfe5e82bccbd4ed8e8192a881edc2"],["/javaweb-server-error-codes/index.html","c36a300f292d235026da672bc9a909fa"],["/javaweb-source-code/index.html","b9f9d6522ad3ca9e7a660fa2e4d12537"],["/js/lib/busuanzi.min.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/js/lib/lozad.min.js","47904d34a224931dd1b615c59a3dbe3b"],["/js/lib/prism/prism-coy.min.css","0ccad54d95845901ead59bfd3ecceb14"],["/js/lib/prism/prism-dark.min.css","a4711d2957d6605eb5682bdd228cf123"],["/js/lib/prism/prism-funky.min.css","efedcdccd7a9ab342d2d9cacd24920af"],["/js/lib/prism/prism-line-numbers.min.css","38e22e790c279bb56f9ec4b90a2a2d58"],["/js/lib/prism/prism-okaidia.min.css","5ac6f9de996fbec68aaa106dfb16e061"],["/js/lib/prism/prism-solarizedlight.min.css","ecc7e64d039873ffcf7fb27babdaeb5a"],["/js/lib/prism/prism-tomorrow.min.css","456af2a14ae4f5089939d5904ac40fe8"],["/js/lib/prism/prism-twilight.min.css","ebb5c355332a8cf9a1ce37a2a69d678f"],["/js/lib/prism/prism.min.css","a5234d614834658887cec6a9515890f8"],["/js/main.js","052d2b299d9c750afea8df0b802ab7c1"],["/keras+TensorBoard/index.html","a21802e62502b54f971cdbdc22b7275b"],["/keras-beginner-guide/index.html","468c930e8b8a68ac401e75ac02279aa8"],["/kmp-algorithms/index.html","27f331a400123346bf552e7055f4ff25"],["/leetcode-Java/index.html","9c218c501a549ce73d3bb1f19b2b22c7"],["/links/index.html","5381f0836bd97b9914ee26bc4d477d7a"],["/linux-java-opencv/index.html","40f6b099617c6b84f88bd641546365ad"],["/msb-source/index.html","7e6d28ad90eacb50537514e716594153"],["/online-BUG！/index.html","5119e89bf155456fc0d00c650954211c"],["/open-app/index.html","5370a8c42345ca75cd9b29ec1539590a"],["/page/10/index.html","26e52136c91da1ce9adea309812c8035"],["/page/11/index.html","6e38a463f63b79910e97d3d5f610b11b"],["/page/12/index.html","bc407cdba5c04bbeac9d1bbfb33da8f5"],["/page/13/index.html","187b91bcf937c64141755e292677c6be"],["/page/14/index.html","19c31ce380ebc6023c45237578dbf114"],["/page/15/index.html","0155d937083ec4b4f8e128de6a5e4216"],["/page/16/index.html","2cba385293fd67fb5fbe65bb454d407b"],["/page/17/index.html","fac998a296ad81fa3333e3fda819ec56"],["/page/18/index.html","5b8b9057adf4572f634c6f0c525e5858"],["/page/19/index.html","2b796cfd6bebac9c6d40e70b7309ec86"],["/page/2/index.html","1d1d80cfe91b2a0aecad27ae3d3de1ee"],["/page/20/index.html","2a13f4eed0022c91dfbab2a5ed97f0ca"],["/page/21/index.html","fe49c2e6c5cc765c25595aa6267cecf9"],["/page/22/index.html","575d9b1af1fe03967459a9c78d853614"],["/page/23/index.html","00f06437a75f0482280fada7422bc6f5"],["/page/24/index.html","6614413cbac51ae7560027cc2103bbc1"],["/page/25/index.html","dd53cdb15da790522019679d6eaddb39"],["/page/26/index.html","4c050c27718b3734adf72df3efdb60a1"],["/page/27/index.html","14263e51deab0a9c31404385077b2f61"],["/page/28/index.html","953e596cc667a7a387b4ea4fa21170ff"],["/page/29/index.html","2f391d2860a4a8f0c8ab8536e1b44804"],["/page/3/index.html","d0da59012dc166619da77fc21f485b45"],["/page/30/index.html","03d71d856e3bc5f7ec933398445444f0"],["/page/31/index.html","a2342e07398447ad840138540a538dd5"],["/page/32/index.html","d03126a47638296b3c4f727e0d6849b2"],["/page/4/index.html","54f608df728d11553156fc951631e114"],["/page/5/index.html","a9377e937edda7fd518c62512cd5e455"],["/page/6/index.html","e7ade66e6e6c85360f313d02e01b28b1"],["/page/7/index.html","918589c70759785ca09ddac5ce308749"],["/page/8/index.html","8632753fa14a5c7c1b9b03892561f2dd"],["/page/9/index.html","07a5461d1e10ce3e1f1cbc29989109ae"],["/pandas-data-preprocessing/index.html","d8e5ac906950247af9b5ecce5bb86062"],["/popcorn/index.html","b72276e2b8a09e70b15eb45b6e15b9cd"],["/python-Blog/index.html","f9ee10c2859388fef05e51294787e22e"],["/python-yeild/index.html","b63e1f28535a591a4596e01890549042"],["/python爬虫教程/index.html","1ba38282052a116710c1ee848c2129a3"],["/software-copyright/index.html","2a3af8b404b8d829fc158e1ccafdc443"],["/sw-register.js","1ce6d6616e4571da4e1708ffb302fc21"],["/tags/AI/index.html","08051f6e297b9ab63d1093ee0bd388a5"],["/tags/API/index.html","5930baed1b7c28c806889ef430f1645d"],["/tags/C-图书/index.html","96c3cd1843afcde24bf28a36766dcd38"],["/tags/C/index.html","f56bc1bf97cf5bee7341aee63fbfcf1d"],["/tags/CNN/index.html","695b6530f91d82374cf9d6ee445d0e18"],["/tags/Chrome/index.html","2808d853606ecccfe79f9114e08c11b6"],["/tags/C✙✙/index.html","033f9a6c2e6a3873a7641d7fdc5b0c26"],["/tags/C语言/index.html","ef5e5dba09fb9133ca56dfe3e2e8f909"],["/tags/C语言图书/index.html","f3541d591d5eba3ba8219ba92b1e6922"],["/tags/DSN/index.html","b21e768e6558ce97a438f59677e0bb6f"],["/tags/Dll/index.html","aed5e5efafebda4216a60164040888da"],["/tags/ECCV/index.html","54efa0c3376d12667f6024162b5cf972"],["/tags/EM算法/index.html","898df074380a5009a01614a26901d20e"],["/tags/Eolink/index.html","947a443fb958eabe703bd6494611b534"],["/tags/Gitee/index.html","bc54743a81bdb2d991ddbec404f4228f"],["/tags/Go语言/index.html","28d070868d0eb0e64b9c96509541850c"],["/tags/Graph/index.html","cde0360b3567a0e415b6795c6e44dc26"],["/tags/HTTPS/index.html","6b69c3db9aa7514bd22e572b169dc331"],["/tags/ITK/index.html","1cefe976ce01f680956e950a6cd60a7b"],["/tags/ItkVtkGlue/index.html","180b287bf46141a20d700d48815bdbaf"],["/tags/JMM/index.html","3623d2b4daab2c975a50e571650cdfd9"],["/tags/JVM/index.html","73799be7ba63ff9a8211191d0ac6eab0"],["/tags/Java/index.html","e191802dcb1b407417d7b19e8f1eaa1f"],["/tags/Java/page/2/index.html","f17f94d5cab25ed841688c1d767f5a36"],["/tags/Java图书/index.html","1c81c21ae2f61861ca371949e0877d0c"],["/tags/Kaggle/index.html","13acda1b215dbfd0bcc364fa0fdcc320"],["/tags/Keras/index.html","ae32dc47701f28499f75f3cdcfaca320"],["/tags/Linux/index.html","e21462fa5bebca33056b699aa86985df"],["/tags/Linux图书/index.html","d25e5c837ab6feba271bbd0fbfe87d2f"],["/tags/MEPP/index.html","e1f76a051abb44bf33b1ffedfdfb61aa"],["/tags/Map/index.html","ea7e542f63a639d6fa8c8e5cacb9e22f"],["/tags/Matlab/index.html","83303a38b29fa57c690fd2db7c2ddfa6"],["/tags/MongoDB/index.html","a4dc4b35d31248bdcbbd64fb9c88dd3f"],["/tags/MySQL/index.html","10658a1b7a4e7e0052b7c3ba8e8e608c"],["/tags/Parzen窗/index.html","f5ccde2b3ea69147efdc78add4d42185"],["/tags/PicGo/index.html","8f5ee43fa9741087bde64cece7f046e5"],["/tags/Python/index.html","8b64754a515a04ccf4b1c9d511799453"],["/tags/Python图书/index.html","9e2ee3df65786aa5336f52d19fc6a716"],["/tags/SPHARM-PDM/index.html","1852bfe9571190e18fe2b8ed545591be"],["/tags/SVM/index.html","e7598c66f1557d1994f1c5b26d1cb88e"],["/tags/Servlet/index.html","ae2b244074fc8588f4e165adb96509a5"],["/tags/Sping/index.html","92e11ba72d16a3e008b6223d24f04d4b"],["/tags/Struts/index.html","c19cf66cce71399fd1d0fc531e75803b"],["/tags/TCP-IP/index.html","9653f3a6023e7698ca1146f5a6c4d67f"],["/tags/Ubuntu/index.html","0ef1effc304e04fb021695cc054ad884"],["/tags/Unet/index.html","603de0dfe1859f3853886dae7bc8231c"],["/tags/VS/index.html","a07ba2944550d7ca584ae4314a13db05"],["/tags/VTK/index.html","1c2b20a6d4aa427f48362ebec8926702"],["/tags/Windows/index.html","f167ce639c2a053553028f81fd1762e8"],["/tags/edit/index.html","84b8310d7290dbd8a4ba0ce582da0f21"],["/tags/hibernate/index.html","85e54cd747a5efd356f215b7166df3d4"],["/tags/index.html","c79ffae6405b33592dc7b95214c95c06"],["/tags/itext/index.html","12fc1b4cd7245181ea0885d537605b04"],["/tags/jdk/index.html","8a82affcaa3180802493f3bf6052d5ba"],["/tags/kmp/index.html","b3d892c24af0b97433e9c4234e1900b1"],["/tags/k最近邻估计/index.html","7d40ec3fbe44835debe1cb6f9ce4e391"],["/tags/lombok/index.html","e5acd3e2d45af3813d137fc9ce867efd"],["/tags/offer/index.html","96f191f0ffc654b8706e0e7d122f1c81"],["/tags/opencv/index.html","bac56e5ad71d4c14c58b91473855a4c8"],["/tags/pandas/index.html","fee5a7cc8ed2d9e64ba510171c46846f"],["/tags/string/index.html","c68e159f7e41fff51c043501449a7010"],["/tags/vim/index.html","1d3ecb0c9498da571dcc45531ad68673"],["/tags/vtkPolyData/index.html","b994c7b8b7b1f42a00ee891b9bf30ff9"],["/tags/web/index.html","4a70a13293be74b24ea88bfafe827e75"],["/tags/xshell/index.html","aab723acbae8b4757a740ed4ac960383"],["/tags/yeild/index.html","40597ea3c9aa9717d37587d81bb1f41c"],["/tags/互联网/index.html","cb352dd9170e928218530b80db4fb88a"],["/tags/人工智能/index.html","bb147a7c86d0b0a83b7383047ca569b5"],["/tags/体绘制/index.html","e28eba4be44d823daac990e429a1c737"],["/tags/全卷积网络/index.html","d2e3a78b7d42e978c3736856ad9bf74e"],["/tags/公众号/index.html","ac3ee68ad1ff5700d3492f9dbfe47911"],["/tags/内存模型/index.html","39d99f951eb67e82802db6a1f9b3886f"],["/tags/内推/index.html","bd9c72f46d11b3b02fdb033a4184ac96"],["/tags/函数/index.html","33f0672c1489a423d4fdd9dc9fbcac0d"],["/tags/分布式/index.html","5cf4682c49da16c6249cba2dc79eb284"],["/tags/加密/index.html","0771bbc83699c5a585d3eab96e9a9b0b"],["/tags/医疗图像/index.html","bfb13f27827fd4237877f8a93ada8b58"],["/tags/博客/index.html","f62025536b039571d2afebb47efb94fd"],["/tags/图像数据/index.html","1ccdcb4ddf1b78b796c1dccc206512f1"],["/tags/图谱分割/index.html","9429231dd039f12390f2da0f6df8945d"],["/tags/垃圾回收/index.html","d13df8b2ed91a3fe7fffa2f123a353ae"],["/tags/多线程/index.html","9cfd6f95e395e864a1bda78415f74c18"],["/tags/字符串/index.html","ae39f7c9f1c7d97abfd79c9d5346cc09"],["/tags/工具/index.html","a4ffd5738f9f7d9ea6018dce1125ff1e"],["/tags/工具/page/2/index.html","4addd4b072ffe3a572fa77ed172defed"],["/tags/弹性形变/index.html","cc280ca57887aec0f37e16c8fa9c2bec"],["/tags/排序/index.html","7235165758845f10eb2204f75f8fd7ce"],["/tags/搜狗/index.html","722bd29443acd812422ed5b1b624ba13"],["/tags/操作系统/index.html","c4611e1cef02cb3f11989568fa3e8cee"],["/tags/数据库/index.html","952b1c299924cb5bbdbbd38f1f647009"],["/tags/数据类型/index.html","d92eea72e785ffeccfed152dfe2a7061"],["/tags/数据结构/index.html","217eb1c2695ab35c3b9a115b37545687"],["/tags/最大似然/index.html","4c6cd393968bd3fd5c73f36aa369b9e9"],["/tags/机器学习/index.html","5f94aa8ff385ec390c186cd30b256957"],["/tags/机器学习/page/2/index.html","eeeb0618cc02d19ea71fd37fc516037e"],["/tags/机器学习/page/3/index.html","6b9483b1f34b2cc51746f52bb0ae3e22"],["/tags/机器学习/page/4/index.html","b3a06f2ea38cae3d013637011e5d366b"],["/tags/机器学习/page/5/index.html","d4825cd2ca4e2f8a0ae72413a9dc490b"],["/tags/树/index.html","861bd3717aba2763794e6a3e839773d3"],["/tags/框架/index.html","ea66842452cfc1f8f58618f2a9e4770b"],["/tags/求职/index.html","aac06bf8869c8e18df7add4c5b7ae59b"],["/tags/汇编语言/index.html","c5ce13894c40c02a391d67635ca6a2b1"],["/tags/深度学习/index.html","f11ec497ffc1bb6668e2e576f7489285"],["/tags/深度学习/page/2/index.html","9de4191f8b65bb72198986af0c717fb6"],["/tags/深度学习/page/3/index.html","ab82f603c84bea95705210c7f66be493"],["/tags/深度监督网络/index.html","7c577f255e2dbb858e11b60265a97f72"],["/tags/爬虫/index.html","e5a260f3c3ad84504eb334e390c6f242"],["/tags/电子书下载/index.html","86f7e11003783b3f3768acfaa52411a1"],["/tags/电子书下载/page/2/index.html","3e906e939e1bfd064ff657972f85a695"],["/tags/程序员/index.html","5ac74b529d15baf216dad7c69ad9880f"],["/tags/程序员面试/index.html","a59d7b4be84ec0137021cbfb7db5595a"],["/tags/简历/index.html","464dde74eae2af4a74ce9c44f8d12678"],["/tags/算法/index.html","8a9051e3d0a596678e02cec5f88388e1"],["/tags/算法/page/2/index.html","c3b082d2d2248817260b309db6ffc380"],["/tags/算法/page/3/index.html","17f3b09a8243660534d2adbb306546e0"],["/tags/线程/index.html","7f6379bfa3faf8dc2290a8c1b62666e3"],["/tags/结构学习/index.html","c3f9e757e6c2baefcf33ec1b135340f3"],["/tags/编程/index.html","bb0870cb76d1c0dcc09e26f27c5c1143"],["/tags/网站/index.html","51edd7fcd7a914b17732b12e58f0c500"],["/tags/网站/page/2/index.html","497272cd5d5ec47a2034949a23accd73"],["/tags/网络/index.html","8116caca15a517a767e3fc22914afa75"],["/tags/网络原理/index.html","d428916a128046d175a10dc0b8a9cb2b"],["/tags/肝脏分割/index.html","cdfcf8951786ad85021a958a48176f23"],["/tags/计算机/index.html","c89ad6e7b6b0c160f81849cb9afc3da8"],["/tags/计算机专业/index.html","6eecdd6e39f21c6e2a645479d2cb84f5"],["/tags/计算机网络/index.html","cb73117c3e36279b6a0cacaa42012cc8"],["/tags/设计模式/index.html","38a0bd9c91aa576336e258428de3ade9"],["/tags/贝叶斯/index.html","048eaf41a9b8389599dd2aa9366fcd9b"],["/tags/迁移学习/index.html","d43fc2f0571d1537d0413c7ceff449d2"],["/tags/面试/index.html","70074fb0be028d187ed7339619b268ac"],["/the-way-of-pragram/index.html","42d4d4ff7f073e7c23509d9435268967"],["/untiypro XL安装/index.html","9de4ec1f5c12c6de5c1fc4a8409e504e"],["/video-websites/index.html","1278ff45efdbe95f024a0573ee06a379"],["/wechat-fans/index.html","cedf9fed28a00eb720a128883cc127fd"],["/window-run-VTK/index.html","ac85ae0c257635b01c787f4d9492b6db"],["/xshell-connect-Linux/index.html","0a9118bda5b8442e05d8ace717a9fb98"],["/‌Accessing-the-Open-Internet/index.html","9ad58f7a3dc2d17d48b3ac7bdf7b3948"],["/《Java高并发编程详解》，去大厂必看！/index.html","250786228e64191f1b0f1d855fa79285"],["/一分钟没了 1.5W 。。。/index.html","c2c9b08c82c598fa30e9f9005b726d8f"],["/一条高产爆款内容生产线/index.html","e68a50986d912c733ff4ff145da98773"],["/为高考学子推荐的六个就业前景广阔的专业/index.html","5438ab9dc1eb2cb8ee94a922880ae683"],["/互联网赚钱机器---社群/index.html","665e00d7913a8105d9d2714acab7b742"],["/你们常用的工作方法和思考方式是什么？/index.html","85d2aa6731c19e6b5ae82aa7494190d4"],["/关于环境配置的一些事/index.html","b4cf8667e08888e6fc398bf521379dfb"],["/准备了19w！搞事/index.html","67c4330e71bf4513d2e5306d8b205a58"],["/几个很重要的感悟/index.html","0ab0746cda90fe83bd2ec286b0965d9e"],["/分割ROI篇/index.html","e7081e89cda29cc014d3b7ea00856fcf"],["/分割精度说明/index.html","461cb69787890a95922e34d9eeb3c7ae"],["/分块程序执行/index.html","2a3f70178e3460ff921e8c6f02119f5b"],["/加班公司黑名单！！！/index.html","3436771fc6d15efef8ab974a81c5c69b"],["/卧槽，上知乎热搜了！/index.html","9f5f2373f284153d7e229e688099a51b"],["/卧槽，我的小破站爆了！/index.html","731a56841a86502de160024b98d73f91"],["/卧槽，我被盗版了/index.html","8b913beacd93b69cf28fc40bd77bbbe7"],["/卧槽，还有985大学在大一上C语言课？？/index.html","1dc981e577567fafae787e967ec80f14"],["/历年微软面试中出现的leetcode算法题/index.html","67c98a0cd7fb6321508bbb40947569e6"],["/去特斯拉试车了/index.html","fbf8bdf7f76a426c061926fcdffe53ab"],["/吃苦的三种境界/index.html","67aafc91aa1b6a666de4bb4bb2d9f60d"],["/哪本书适合推荐给 Java 初学者？/index.html","0540fe2b23c8d0a836bee065920751eb"],["/哪本入门级的学习数据库的书最值得推荐？/index.html","2c5a320cedf6e3df322f74ad532fada1"],["/国内外常用的AIGC模型/index.html","06ca317c836e2b8f2145548c982830df"],["/国庆假期/index.html","5c173a0b5b21c6f1c66a7e60fb5cb6d4"],["/图谱程序字典/index.html","0fe8af8d37a511c0034fc6a3824ef61a"],["/图谱训练与分割/index.html","b584ec64d12eda441e5de91a3e303f5b"],["/宣布一件大事/index.html","182d650d5b21fa00377eb7ae4fa59883"],["/小鹏P7i试驾体验/index.html","74b616c3b08f8941767d066475cc31ef"],["/微信PC版3.3.0内测更新，电脑可以刷朋友圈了/index.html","8264a50caea8c37d4d1e695f64b5f025"],["/怎么更快的赚钱？/index.html","453586cfb0bc34570f7954cbc1ff8175"],["/我毕业了/index.html","79e17789bac58f08fb08c44629a68e91"],["/我！真！的！找到了！爱上学习！的方法！/index.html","bc24f3bb9a20b80db9bcbf472f68c240"],["/户口的意义/index.html","8a9939607452a8cb0571a3311f250331"],["/推荐两本经典算法书/index.html","77a887d9dafc39c30ecff551fd88f256"],["/推荐几个在线学习SQL的网站！/index.html","d4dce689acee4085965c3ade704ebde1"],["/搞了一个程序员成长晋级社群！/index.html","265746a577b99dcbf68a6438582c1f8b"],["/摘抄/index.html","9a052cd7a2ac5ffc3934d86b337ed272"],["/暴跌30心态崩了/index.html","8d937a09944ed3341c8e0095d6f8ab0c"],["/最近很火的ChatGPT到底该怎么玩？/index.html","50aa5d26a1b54f162711c76580c7d6c1"],["/有哪些好看的日历可以买？/index.html","d17f188ea596244f60d84ece6614fa19"],["/服务器有啥用/index.html","1a3345b5f21b38bbefa22c1d3ea60189"],["/来长沙了！/index.html","0a142a921c916b760e32f95acb2a7ed6"],["/校招污点公司名单/index.html","213a4c11a2ee1775383d361666e9ea65"],["/梭哈200多万/index.html","0a48bbac4aa95358f0f55321b0d32cca"],["/梯形图入门/index.html","5a8e28cb0f2f1088ebf83ee471af0354"],["/橙心优选，凉凉了！/index.html","a4b284b0f3195e290b6e6e4f8a0f5061"],["/比亚迪汉试驾体验/index.html","ff69f0c586e69ba0afc61a196412b69c"],["/清华转学成电，真的牛逼！/index.html","4fc592fe62b0523eda94e1bea0df9342"],["/滴滴程序员被亲戚鄙视：年薪八十万还不如二本教书的/index.html","31693469eef1fad1a34b867159fc1ec6"],["/社群！/index.html","6031c05d741c6e98ed115053a896086a"],["/科学上网之VPN篇/index.html","d9bae733ca6841ef93f8b91f22a2665d"],["/程序员必备的几个技能！看完你也是大神/index.html","179670a6762ab9c97dd0d20876fb910b"],["/程序员绕不去的槛，Linux！！！/index.html","10a1e99009b55eb92d2ed23d7fe88d47"],["/蔚来ET5试驾体验/index.html","4d7f7f15d851af9fdd34280af2aa1939"],["/蔚来，牛逼！/index.html","fc91228a4c94a831f0e5795b8aa297d7"],["/被录取了/index.html","6ec7c8e28833b352a8b2bc3c2c0274e5"],["/被找事了！/index.html","19344d4568456fe2647be184ff2c67e8"],["/被拉黑了。。。/index.html","e2ab164b364f1416f0196464dbd99f8a"],["/被车撞了！/index.html","8fbc2eca3804fa7c0cfcfd0cc192da50"],["/该如何选购固态硬盘？/index.html","d2d11164f96463d27c94218272760621"],["/这本书一定要看！/index.html","f3ab45eff23ef0d17e6cca7f4c6c46f4"],["/选Java还是C++？/index.html","e5a07b4525a9c0c910246d2282c16785"],["/那些让你起飞的计算机基础知识/index.html","3fbe0dfde045ca963bd6f863f6e59aae"],["/靠这几本算法书，成功拿下大厂offer！/index.html","29518c8e3542a5fabb32d788d8842946"]];
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
