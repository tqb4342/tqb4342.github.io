/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/0010-city/index.html","6c9973cbcd2a394fc6fdbb4d9959c524"],["/10-algorithm-book/index.html","e3961b1c9b3dc515eec40d28f791c0b9"],["/10-website/index.html","ad1cf6581b8e8ad059e2fbf368e9da0f"],["/100万的小目标/index.html","e6ed2b6666cf5fe7273a6702ce55dd92"],["/10w+YYDS！/index.html","8cf42bf738a5fe3e115f0df40c7f0d02"],["/12-technical-tutorial-sites/index.html","92a92d4571d64de2590fbdcfb8398842"],["/2 6 岁 了/index.html","9abfcbf9841712dc76c0a081af572063"],["/200万，啪，没了。。。。/index.html","61a930d47577ca8dd465b03edac8aec2"],["/2018ECCV-Paper-DL/index.html","cb840d46b9b278a286e5064f9199f8ec"],["/2021年固态硬盘选购最新攻略（小白避坑指南）/index.html","3e1186e3f068db388246edc62f358641"],["/2021机械键盘推荐/index.html","4df1454b6bdacae732efaa982f2c7d8a"],["/2025-07-15/index.html","ff89a2da13c21969fe56905a3aa01564"],["/27岁了/index.html","3cc896621dd52a13ff2f720ab03c6326"],["/3D-Convolutional-Neural-Networks-for-Human-Action-Recognition/index.html","a598f54a9ade7a45b8b0b3792fde1736"],["/3D-Deeply-Supervised-Network-for-Automatic-Liver-Segmentation-from-CT-Volumes/index.html","5071d7fac130af47753eda5ba044c4c1"],["/3D-Unet-Experiment-notes/index.html","159336f5a3539a30eaa317b2e3f142d2"],["/4-Software/index.html","cdc2cc2c9782ac8bbae8204c3fab10db"],["/6-website/index.html","90b3209cc6bdbc8e618379ca2b5a7b3e"],["/7-terminal-tools/index.html","68f043a3a9af64a03fba32d642e2bc79"],["/AIGC中典型的深度学习网络/index.html","16bc15bd7e64ee564c4d78a1abbc9912"],["/Agency-model/index.html","03059544dc84bacea7efecc1a6c22b20"],["/Algorithm-brush-notes/index.html","75c7aaffd6017dbf3bedd3c77ef81103"],["/Ali-recruits/index.html","f52c5e8528dd9eae1e8d631e18913e46"],["/Android-open-internet/index.html","8f9bdec238f0a3c97078cc217ab0cc57"],["/Appearance-mode/index.html","7373ff4711a74406ac276ddd5af3d113"],["/Backtracking/index.html","2a48d7ab727a845d73250ff9bee11874"],["/Baidu-Sao-operation/index.html","3fb6763216fd5c2256b06c3796ba7295"],["/Batch-Normalization/index.html","786f18321d4212174b5bd71d59501a0a"],["/Best-AI-tools/index.html","710ee1cf4af1bcf67b7e9c6c4f5fa4e1"],["/Bias-and-Variance/index.html","65c202f8234879e9b17875b7213b62b0"],["/Binary-tree-traversal/index.html","13c3c87f2cb1062af46016d32f8a1336"],["/Branch-and-bound/index.html","8b7b8f1ef18ed8676b1cf52a50ff0424"],["/Buying-computer-for-the-first-time/index.html","a97c23daffcb8687ff63aeb0d9d048c1"],["/B站向北邮道歉！/index.html","9d2c71ad8f1f91355756f0df8eff76e5"],["/C++-string-function/index.html","7b5ece220f7806dff11a7c3017b25a4d"],["/C-Java-DevelopTools/index.html","f0a83ef79ae0fe132c111228c509490f"],["/CS-Classic-Books/index.html","1305bfd203d23a9f351cb778e2e3e99d"],["/CS-network/index.html","be6fdcf7a01849c0e08381813e60a135"],["/CSBook001/index.html","0ab6a24c0cff3cf1de2cb10db5d97f74"],["/CSBook002/index.html","5723e85b96d4d35d5056f481c83ffc43"],["/CSBook003/index.html","6d198870aa699cfc1313ded25f3fe953"],["/CSBook004/index.html","dc267f5de5154885d2a12fe832e7f02f"],["/CSBook005/index.html","582953e1646f7d3ef0ab54782b7871e1"],["/CSBook006/index.html","f4b13aa857ac1efa70693c4e0a9383f6"],["/CSBook007/index.html","eab13d840a985ba1ab735db612a1465b"],["/CSBook008/index.html","09544ffc6f1cb54cf851296df0e64f3c"],["/CSBook009/index.html","9a15102efa8152e71a97c0d443dfe96f"],["/CSBook010/index.html","0125411c695ae8846ea628c4b626545a"],["/CSBook011/index.html","5490d92730661d33d23a93f30fe69c70"],["/CSBook012/index.html","2b8508e8e343b28bf2870c52023644df"],["/Changsha-really-fragrant/index.html","ab62ba668f8607918d8101f7d8f518d4"],["/ChatGPT-VPN/index.html","52f5021bdf17b4f466453d2a20398a11"],["/ChatGPT/index.html","26a1ca841669c9def71fad7ffc1d682a"],["/ChatGPT！王炸级更新！！！/index.html","3acbd5eb7030355ab942ae367af7fa3e"],["/Chrome-crx/index.html","c395931ba0bfcd45b42006439770deae"],["/Computer-Classic-Books/index.html","3bbc4409c2c7c8275c5037d7506f00e6"],["/Computer-for-another-major/index.html","65fc4de555375293b5596d1a1abafba8"],["/Conditional-confrontation-network/index.html","8f2719b7021d7b4d34fce4f24b4cd635"],["/DNN/index.html","515acf01a39f03a51dbcf5a918f4b4c5"],["/DSN-segmentation-liver-experiment-summary/index.html","7d770cc72e754c4e1a24328b767cda05"],["/Data-enhancement-elastic-deformation/index.html","233f4901045188a4d4355072e04bd8c9"],["/Decorative-pattern/index.html","27cf719c011b876ece357418fa24aa54"],["/Deep-Learning/index.html","58e7d94e30388142087148a78cfff4eb"],["/Deep-learning-and-medical-image-analysis/index.html","a22262099dcbc1ed64f202dc0afcb3b5"],["/Deeply-Supervised-Nets/index.html","470847b390dfc25de32b48f8006c24ba"],["/Deformation-model-based-sparse-representation/index.html","773e4a3450b5e67cf046ec887ebc3563"],["/Discriminative-and-Generative-model/index.html","bf4b3d7f68d2a5d3fb70dd8cd6bb18b3"],["/Distributed-transaction/index.html","f8350fc3624e9c320208d476ebc5b27b"],["/Divide-and-conquer-algorithm/index.html","457d95ac2c2600df0436495410c49e9c"],["/Dll/index.html","62e23faaa90683b53a562b0e5020ae72"],["/Dynamic-programming-algorithm/index.html","cae7213da17a213c9a1fc7c1b9d3d1ce"],["/E-book-download-commonly-used-by-programmers/index.html","334d9baee6c8c18d292df8f9794425f6"],["/EditPlus软件的安装、激活和配置过程分享/index.html","0e5302eebf4b2adb72d94f728a0a09d8"],["/Eight-sorting-algorithms/index.html","ebbe537a9712399e57b01a214b7bc6b7"],["/Encryption-Algorithm/index.html","57ee2ab27a97b130886959980b22422e"],["/Eolink/index.html","795ae8353a098043bc7a666b81330667"],["/Factory-and-strategy-mode/index.html","947e354f019835246acb52270bcf946a"],["/Foreign-technology-blog-community/index.html","3396faf918feca2360aeeadf5b22bcda"],["/Functional-model/index.html","5e60a1926659c4db85af280648f00083"],["/Fund-type/index.html","6b07e588dc34948f5a410c93250763ab"],["/GPT-4o/index.html","1618df09f09674f5c0d672561323d234"],["/GPU-medical-image-processing/index.html","dd07e7470d5f040583743f66476ecee9"],["/Generative-Model-of-Unsupervised-Learning/index.html","75af930001944a720351598482e6afbd"],["/Git-Learning/index.html","7029294e2e77aee9c7e89ed87447e518"],["/GitHub-2FA/index.html","8e5063cd3c3ea03d58c00faa132a04b8"],["/GitHub万赞，程序员必看操作系统总结！/index.html","9842ed9f940540fbc53e6a3e84ce1ab3"],["/Golang-book-recommend/index.html","ea9908529f9be4d8ce729a1a653856cb"],["/Golang-learning/index.html","26255e26f250819d8d95e997476776a6"],["/Gradient-descent-optimization/index.html","91a19c2015980dc5eb64290f52d9ad6a"],["/Greedy-Algorithm/index.html","c44beca4005fb516dd80b7a6dddc442f"],["/HK-bank/index.html","3c7a86fb903e0771d24042186a31b763"],["/Head-to-head/index.html","cc91f373f2a2176b7754458ec7054dce"],["/HistCite-Pro/index.html","0e38562486f109de0afcb0df6f88cc3a"],["/How-does-the-program-run/index.html","f5e278aebefd574bcf4d0e91f8d37ce0"],["/How-to-judge-whether-technologyisreliable/index.html","f11c573b154677353a05ec9152d130f2"],["/How-to-learn-design-patterns/index.html","4940e8c8e6da29f2b9c57e8d34ca3aaa"],["/How-to-learn-design-patterns？/index.html","104b9670c3fdab6a7369066c6f5b1b4f"],["/How-to-teach-yourself-programming/index.html","80a63457ee2b6478ae8e88cab1f401f8"],["/How2learn-Python？/index.html","18b9e7087a7932a0287712e544b1d907"],["/IDEA-shortcut-key/index.html","56680c41dc4fc5c68e31d0904fe6fd5b"],["/IT-interview-basic/index.html","036be8647e0ac53c76dfe16559ddaae6"],["/ITK-VS-install/index.html","7203f111d59f7f94140152e95871fba9"],["/ITK-VTK-ItkVtkGlue/index.html","03e3a5da6a3a067a8753c27082106109"],["/Image-processing-plus-noise/index.html","d6509e2080c5725d5cb3dfa1819defb3"],["/Inception-Going-Deeper-with-Convolution/index.html","6c01e2dcce9f7783d31050539f531617"],["/Java-GC/index.html","515fb7b07965f9702f37a46ff997247e"],["/Java-Servlet/index.html","9f97b5bf90d5cfd0907e41467c7424ab"],["/Java-array-and-collection-sorting/index.html","cb84626b78fa0bc52f16e9649e1f723f"],["/Java-development-tools/index.html","0280f0043db391b2729c5ec882e6604d"],["/Java-eight-data-types/index.html","6e1db961aed27fb540d40ea5eab53418"],["/Java-interview01/index.html","960bcbf7bdb0bdcc0d9ffcb5670d7c4b"],["/Java-interview02/index.html","c7542eb5065a2c6de29188463fbcc120"],["/Java-interview03/index.html","0e19312aa4368f6ebc1ad1505f35cbd0"],["/Java-learing-map/index.html","f6a5afc441b7ec86c80d44ed5360f569"],["/Java-learning-route-map/index.html","3a324aa9628225a40b2b85e1267d7213"],["/Java-memory-area/index.html","1e33f4e5e34ec12a05132b663df26228"],["/Java-memory-model/index.html","0e62a15fb0dcbd795362409b2e2cb794"],["/Java-multithreaded-learning/index.html","94e9fb9e6d26aeb2e3db92e5e1a45ef0"],["/Java-project/index.html","0bce447416e0a38a2b58330d94f4b20f"],["/JavaWeb-Chinese-Garbled/index.html","0e4fa5b43986a9af04479e2e2573fc4f"],["/Java还是C++？/index.html","ec82e64cfd1c7bdd49ac8b1a65718b86"],["/Kaggle5-step-guide/index.html","459eb11331e2bd5e22a8d41f5768b5c8"],["/Knowledge-points-of-Java-garbage-collection/index.html","e0c07619aa1608dde27422000d8e24b7"],["/Layoffs-and-Hiring/index.html","b283dfdc7cbf36061b06fc0eccc95313"],["/Linear-regression-of-machine-learning/index.html","bcc7af0735ee0b15825bf6ed5bfd5aef"],["/Linux-Compile-C/index.html","7785f1bac621bdceea6d4cb3785520e9"],["/Linux-ITK/index.html","6c08b23392a66065c267aaa488d55de2"],["/Liver-segmentation-of-sparse-components/index.html","80e4b125ca8e17958d9cc5fe9ed8c505"],["/ML-EBook-paper/index.html","f6a58bb90942e43d3ac14b57bae37a12"],["/Map-uses-multiple-maps/index.html","a240cfad82e7a33e64c3859f9e1cb773"],["/Matlab-Graph-cut/index.html","fa18c4128a67331f15c8eab027f7cded"],["/Maximum-Likelihood-to-EM-algorithm/index.html","6840a456bf393c7189e579c482d19bf6"],["/Mean filter and median filter denoising/index.html","6c5e2934a97882f9ab738e7af2d5e8f4"],["/Medical-Data-for-Machine-Learning/index.html","be1bc522ec888dac9682bdcf8bf5d903"],["/Medical-image-analysis-deep-learning/index.html","0e07e4f72db05031a5d40ca219d8ce98"],["/Medical-scan-image-processing/index.html","084b675fc569185e8778d3bb1d2c733c"],["/Merge-sort-algorithm/index.html","bed13d73b374c29dd25b5482e9ea6ea1"],["/Monthly-income-2W/index.html","5cfac510a3be083e0277ca7fabff3a2f"],["/Mysql-database/index.html","0e523540218d50f42ae54541a085c625"],["/Neighbor-Embedding/index.html","87f7357d0f9469bac24a6eded6a5cacb"],["/Neighborhood-approximate-random-forest/index.html","72ef9e1dec1313372097f8daccb4a2d5"],["/Net-and-official-documents/index.html","c583eda8451d898959bf5702271cd9ba"],["/Netflix-VPN/index.html","bc27654c2764485f8f6c126866d86558"],["/Network-principle/index.html","f6c4fb8c267e134caabb4af164ef32dc"],["/New-Hong-Kong-stocks/index.html","152a5f90aa1b5e3152a97f0305993bd9"],["/Nice-to-meet-you/index.html","40d519038f59a384ef351cd1cb102b60"],["/OS-processes-threads/index.html","24bf4bc0656f94b18bfb7b4a7ebd113f"],["/OS-run-environment/index.html","e7ba3fa47f58103989e0726e0f50326d"],["/Open-Internet/index.html","0687eed262643ff65443791762ba71c8"],["/Open-Internet2/index.html","e786aaf4e47303630e10966be0952739"],["/Open-source-community-and-rewriting-website/index.html","03651a5f9e830308b0a5a6b27dc3f02c"],["/Panoramic-image-stitching-based-on-SIFT-features/index.html","6f6252e181d1be4f43968f12b9164c7d"],["/Parzen-and-KNE/index.html","e8ba50f5f4182a68e1923391cd93d06a"],["/Personal-technology-blog-site/index.html","be89b0499813ea7276554aab7101ebbf"],["/PicGo-Gitee/index.html","2479e13124e27dad2a4b31f85b979846"],["/Programmer-treasure-chest/index.html","414a9528eb99df046b34519f76039809"],["/Prototype-mode/index.html","a1de21800319bd4303e34446d6963520"],["/Python-base/index.html","2e22d1a3806ba2452dadd73efb05f023"],["/Python-crawler/index.html","f2614ac8e9e27b531a293002bc1402ce"],["/Resume-revision-suggestions/index.html","bcc003a3948e9a834399e6841de44b26"],["/SEO01/index.html","02f2dee409b4680ec1ac9f90f45ea10e"],["/SEO02/index.html","ca91b3855616fc32dfcac6106073f72e"],["/SPHARMPDM-MEPP/index.html","da30ad22a3b2e1ff7fd020833d1a63eb"],["/SVM/index.html","84ae7e832d7ef0cf62e3336ee33cb2f5"],["/Semi-supervised-learning/index.html","3aead54256013f55f61fcf935bc3d059"],["/Sequential-model/index.html","56cb4e0d5fa85e0520c5d7029922b7c7"],["/Shape-Based-Human-Detection-and-Segmentation-via-Hierarchical-Part-TemplateMatching/index.html","5e6a3e17f9550a04e5457c105f623db5"],["/Spring-basics/index.html","99483dc82483ecc68d1bc673790d8b24"],["/Spring-integrates-hibernate-Struts/index.html","63211b04b4b84bc130a4974ca9adc8ed"],["/Structure-learning/index.html","db77167bf7bf1b7f39a92de0cd7c427c"],["/Suggestions-for-self-study-of-computers/index.html","091d6d23beb32d9a56d4f004af8f4c6b"],["/Summaryof-HongKongStock-Account-Opening-Links/index.html","b920dae1442953ccd571d0f1963fc4d2"],["/TCPIP-detailed/index.html","e904df5e6cf88a459e5d8d293cbd4aa0"],["/Telegram-VPN/index.html","6f72e8980295204f3d5c240460fac124"],["/The-essence-of-shopping-festival/index.html","0254e430011c2001b1e9a78139f0c20e"],["/The-most-important-investment-in-life/index.html","b90c0566ce11a00e9550e9920b498b42"],["/The-most-successful-nvestment/index.html","abe941c34c836b20a46ea944859ced44"],["/Transfer-Learning/index.html","c0b45e09ee8fd84309eef23b6be2c2a6"],["/Transfer-to-computer-major/index.html","380a6355aa65f1e6bd2fe36c70ea0497"],["/UNet-Convolutional-Networks-for-Biomedical-Image-Segmentation/index.html","c5c81a34eb2302001f770b08d3c50604"],["/Ubuntu-install-sougou/index.html","f12578eccb8a2b6e27a2928142148796"],["/Understanding-of-paying-for-knowledge/index.html","c6d97be10c1d684a7796a0cc6420036e"],["/Unsupervised-Learning-Linear-Dimension-Reduction/index.html","b5624e4e7de236d8e0fba6301515f057"],["/VPN2025/index.html","37c289647d10af4f4fdcbb447e02ab97"],["/VTK01/index.html","1317f7a97c99e88b05b2ffae2f5e2d21"],["/VTK02/index.html","68d7dd022f0b39e43b48cb31721f49d9"],["/VTK03/index.html","de7a4febf5d39cab301e93ea80903a80"],["/VTKRead-write/index.html","b52502ce493bdca6b28db9b523e02f17"],["/We-are-all-good-kids/index.html","0f2fd0425e3c7ac83d1c56fa33b62582"],["/WeChat-80/index.html","3a288297d0063c62cb563344b021e548"],["/WeChat-red-envelope-cover/index.html","e13f90e38a3470e22f6ef63d5577ca92"],["/What-is-crawler/index.html","32f229def28fb820daf030bcd3cf1e18"],["/Win-OpenInternet/index.html","4e8509621bdfa779ae82d1fb61443cb6"],["/Windows11-2kfans/index.html","65719673746f274b8488a95731160b76"],["/Word-Embedding/index.html","b870abb895d767c5b3e63f2a66d7dc8e"],["/YuanShikai-and-his-Beiyang/index.html","91add11d5220b6f8b61d15fa07bc7b77"],["/Zero-copy/index.html","20c9d122c54dd07d839ac55662f5be5a"],["/about-keras-model/index.html","b76df288c3e8c5281110b2e69747e41d"],["/algorithm/index.html","66c401684016310f3f792075cec8567f"],["/alibaba-Java/index.html","ae861c6bba523678760c5b7c820ccefd"],["/archives/2020/01/index.html","88c74aee9913b53873edae5f52ecd085"],["/archives/2020/09/index.html","75e665f19c5932a251590c4adc81015e"],["/archives/2020/10/index.html","157ad2fda5390d2d2718ba0b98777183"],["/archives/2020/11/index.html","67ad4f2678f733b6dd79e97cce12bdbf"],["/archives/2020/11/page/2/index.html","bc9c92f09bc7a2daa2164b8cb1df2d22"],["/archives/2020/11/page/3/index.html","016ebc24b74a30f877cf3ab3282ee8f3"],["/archives/2020/11/page/4/index.html","c19115e1b95e30c1ee23927eb8561cd4"],["/archives/2020/11/page/5/index.html","37a61f6755be8da2dd619a2e19cbcb4b"],["/archives/2020/11/page/6/index.html","7df3c3e82602462794fbbf50f08ad530"],["/archives/2020/12/index.html","5ea5d5c2ad8b1879307456779866fdae"],["/archives/2020/12/page/2/index.html","4c9f10b261d00ed044df298cff182c45"],["/archives/2020/12/page/3/index.html","60e396a38a8e201ac18d0b24396baca6"],["/archives/2020/12/page/4/index.html","d3340a28133c56b6dc2f527ed2fb8e62"],["/archives/2020/12/page/5/index.html","9109bdf41b35e1d4736d9c467b637315"],["/archives/2020/12/page/6/index.html","79cab736ba35e21ea377e365e8ddd056"],["/archives/2020/12/page/7/index.html","675e4c4861dcc0c816f5100a1773fc2b"],["/archives/2020/12/page/8/index.html","980dc63bd8209b875b3d7997ae85a9ee"],["/archives/2020/index.html","580431200dc2ee1540834ea3c08d6efa"],["/archives/2020/page/10/index.html","887dbe1f9dd5dcabaab080f3a042bfec"],["/archives/2020/page/11/index.html","a9273caddd3a5ae57c6a5d1662fb455a"],["/archives/2020/page/12/index.html","7377c62191a5917169a5fd401df63e61"],["/archives/2020/page/13/index.html","ca3b16bcd3a6d45be815316564f11185"],["/archives/2020/page/14/index.html","889f2b1d769f5db01d84fbcae69366ad"],["/archives/2020/page/2/index.html","ded8d31b09b0f86dfbfb280e0a989bc1"],["/archives/2020/page/3/index.html","aa9d033dd47645277349849dafa1f585"],["/archives/2020/page/4/index.html","41aecb294e2d8c8aa0537180d9ed5840"],["/archives/2020/page/5/index.html","067626c8656ce57e81b7ded14ce38828"],["/archives/2020/page/6/index.html","bfd798d27bb0d6be2841231d10b715f5"],["/archives/2020/page/7/index.html","2a1989da39d81f77d33db6baa76f2a25"],["/archives/2020/page/8/index.html","51126716e58672042cee3f3a0e4d0d44"],["/archives/2020/page/9/index.html","e751cda6a68ee5b54c61e9724d97a790"],["/archives/2021/01/index.html","e57196335decba90825543a552695140"],["/archives/2021/01/page/2/index.html","dfd710e217068453658fffa8f29db45f"],["/archives/2021/01/page/3/index.html","78b02df348d494ac9bbeca4033073c70"],["/archives/2021/02/index.html","ff9143bef4b2ea8bac39bbc09eb34284"],["/archives/2021/03/index.html","2a7b37575006a79b43f8bd71a81a5a5f"],["/archives/2021/03/page/2/index.html","cb40315cc7ff72494cea3bf338c55ff2"],["/archives/2021/04/index.html","2ab6cd7ef08e9dc43f44661bbebbce7a"],["/archives/2021/05/index.html","eb829052309733131dec1dd08fdee176"],["/archives/2021/06/index.html","1f63b98bb1cdba23ecad5343e2a6dd41"],["/archives/2021/07/index.html","99ef20ab980c4a5fc37110bfdace9376"],["/archives/2021/08/index.html","329b0a296eb5f7b1708a50051d400cf8"],["/archives/2021/09/index.html","c2f73606a37af9d4f46aef22f4f8363c"],["/archives/2021/10/index.html","54c2533fcfc773773e3be75dfda9399b"],["/archives/2021/11/index.html","557c897412372be5bb41ba063cf55d6f"],["/archives/2021/12/index.html","8733e69f3d8609f6617bcb3cd567f9ec"],["/archives/2021/index.html","d60f5af81c5ccc96899d41dd43186c61"],["/archives/2021/page/10/index.html","e66eacdda140a650e12e4b2def06a926"],["/archives/2021/page/11/index.html","d8893365118afdec0d40ac6715ffbdd2"],["/archives/2021/page/2/index.html","70296cbfb790bfe51fddc7998c602b54"],["/archives/2021/page/3/index.html","921741deda1628b88aeab48ea6af89ab"],["/archives/2021/page/4/index.html","131ad811c8c34ce17f863c445c192d30"],["/archives/2021/page/5/index.html","d6dafedac0b77b24568c68361af1079f"],["/archives/2021/page/6/index.html","033de50be74e312e7a772fb87414bcce"],["/archives/2021/page/7/index.html","707acb23eaebece3974142f3b064d706"],["/archives/2021/page/8/index.html","4497ab5dc15e63c9ae6b75264a0f6cb3"],["/archives/2021/page/9/index.html","6ce732a594d31bd1354be52f259fbb34"],["/archives/2022/01/index.html","45b4a8f254c3c192bee05468863c16df"],["/archives/2022/02/index.html","96f7faee55ca8507ef469ea60e9578da"],["/archives/2022/04/index.html","b9f3244c050bec4d1ac174dd3b0bfabb"],["/archives/2022/05/index.html","f68b2da7314b3f90899a30ec598b0b18"],["/archives/2022/12/index.html","a6ecde2d25cacea65fe226d8e21167be"],["/archives/2022/index.html","546b29a86202335bb2981f76cb4d4154"],["/archives/2023/01/index.html","9858bb8f7e865ff90174cc136f8596b5"],["/archives/2023/02/index.html","bf577e58404be00c3a982eb2cd48cd3d"],["/archives/2023/03/index.html","237b5046ba6c940703f66aa311866940"],["/archives/2023/04/index.html","e52191f656ca19403cf72fb016b1efaf"],["/archives/2023/06/index.html","d088c89fd48c8a750bb6848f4417e70a"],["/archives/2023/08/index.html","497204ea8355e5f87ef31c41a981e78b"],["/archives/2023/10/index.html","36f50f3621e1ce2408c9e5887d3ed93e"],["/archives/2023/index.html","fb716bb3648f2a744d0d9f64a86f1a42"],["/archives/2023/page/2/index.html","ecf8007991d87194f58f443983296c96"],["/archives/2023/page/3/index.html","e1da450b02af457a794b0a160265b7cd"],["/archives/2024/01/index.html","bb941a02bdda5116400b9d228d18bcdc"],["/archives/2024/02/index.html","d25574b6f0acce4150fb8cdc6c4f0369"],["/archives/2024/index.html","49b6ddca4ccfad2ff8ad92df037fc777"],["/archives/2025/06/index.html","98ddae929c333554c058779bd11dd3c2"],["/archives/2025/07/index.html","d4c7833d0484945b54264a474fde04a6"],["/archives/2025/08/index.html","7828bdaa441c1ca302d8bf6cf0b117a6"],["/archives/2025/09/index.html","61f0d6ff76d2eac095c2af2cc4a734a7"],["/archives/2025/10/index.html","9cd5100e030eb633387fd4eee0e4433e"],["/archives/2025/11/index.html","63cd15fa1c39aef259b21e117bfdc398"],["/archives/2025/index.html","3c69ba0b7ddd59ec323cb0e596b48b4d"],["/archives/2025/page/2/index.html","a877573844e7eb75d9f73e3fffb74209"],["/archives/2025/page/3/index.html","4bafd17e42a0826381175d94fdf2f347"],["/archives/2025/page/4/index.html","3b886d6c132eb0849bd61404d7da9609"],["/archives/2028/02/index.html","f9210ffcdddadbb2017cb53d6701b608"],["/archives/2028/index.html","f8c30b5060fc97c72eb02655167de068"],["/archives/index.html","f37eaf36068d7242d7449c9392eea4ac"],["/archives/page/10/index.html","531095d46cb3e921936ec3811bd7b6e0"],["/archives/page/11/index.html","954779cb6b6ab6cb033907a3d2463320"],["/archives/page/12/index.html","d33ff023e3e9e883fed5ed105cf639a6"],["/archives/page/13/index.html","bd2aae13bd61da1739311042f6d54f3b"],["/archives/page/14/index.html","1d55f8893f804fc985ee0e09155ceef4"],["/archives/page/15/index.html","af116439c0866b09028222479d05e281"],["/archives/page/16/index.html","2c457049cdb48f584f2a8a5eaee14865"],["/archives/page/17/index.html","50f2769832517af6134a377244862117"],["/archives/page/18/index.html","d25d2f2f343580b4b9b8b655780cb91b"],["/archives/page/19/index.html","70a8efb49b4b691e2966029b229984eb"],["/archives/page/2/index.html","4be511cb9249b8b31e53bc3a94a9d0d9"],["/archives/page/20/index.html","f45ca54c9be68012f56d78b45356eea2"],["/archives/page/21/index.html","070aa5acc0e0bb41176f4cd419abc15f"],["/archives/page/22/index.html","4d1ad4fdcb69123d3fec6882dd36c4d5"],["/archives/page/23/index.html","eaff09637459c03075c30ebffadbabd9"],["/archives/page/24/index.html","9a0826a9b80f6f1273c53fd7425568b3"],["/archives/page/25/index.html","903058db51b07f355e57aa29dacb3931"],["/archives/page/26/index.html","f4c7321b8d246bffa9065ab887b6101d"],["/archives/page/27/index.html","5d49929b51194f9322e170d387fe5f32"],["/archives/page/28/index.html","3819433b1bd5c64e9dc30a28ad58ed03"],["/archives/page/29/index.html","0bbd3e374715f6788bf0b73317a64da7"],["/archives/page/3/index.html","301e067aac92a68e36368763e86125a8"],["/archives/page/30/index.html","1cc05258c045ed848eeba120c8900c75"],["/archives/page/31/index.html","903af945d3693ace4e942420a5ca3009"],["/archives/page/32/index.html","02467009e7501e082fdf9aba3a4e5c0f"],["/archives/page/4/index.html","073bc0819c1ed291362ba8994f53713b"],["/archives/page/5/index.html","099b36a87d9e95b205c4c2952e955532"],["/archives/page/6/index.html","714a2a8ad48a07fdf6c038c7432a178c"],["/archives/page/7/index.html","199416f19b56252104acdc03caab5ef1"],["/archives/page/8/index.html","1a55bd3fa7c73a7d8692e658a6897a60"],["/archives/page/9/index.html","4c9419cf5b497b83443a4f03d4546a97"],["/baidu-search/index.html","93eb13a79db2540ae1d3b43bb7e8f11f"],["/baidu_verify_code-Hh2fKNlEB1.html","a6dc7daef9956dc3afe9188c855406a1"],["/be-a-programmer-instead-of-a-code-farmer/index.html","af3dd104613f720d97e9aee94f2689ac"],["/bought-a-house/index.html","89eb2d5e410159362be1877e9b8590b5"],["/categories/C与C✙✙/index.html","b9b06bd1b3a462ccc5396a530041e322"],["/categories/Go语言/index.html","3d42e5591f8b090447e10766af31d6f8"],["/categories/ITK与VTK/index.html","53d24798e4fde327a52242e27236389c"],["/categories/Java/index.html","dee5282c012c8e70610ed8b329f51859"],["/categories/Java/page/2/index.html","d7a2839d5de77e46044d8bae8f7f0341"],["/categories/Java/page/3/index.html","876ba9d5a3e95a32053b877ca0517a70"],["/categories/Linux/index.html","9778ee61db9597bca0deba56d43173db"],["/categories/PLC/index.html","4ff8031e2cee6eb1c3f63e4602fa054c"],["/categories/Python/index.html","f67a6e3585ca2af1f3f93e999e79f8b5"],["/categories/SEO教程/index.html","a34e461153d5188b748046ab0e6e4b0d"],["/categories/index.html","d25f7451fd746ae642cf8b3ffb3dcd07"],["/categories/图像处理与机器学习/index.html","6299e8e1adc2b35a7de53e442b2ea3eb"],["/categories/图像处理与机器学习/page/2/index.html","2ded0cbfc9b782dd183b314f80f13c15"],["/categories/图像处理与机器学习/page/3/index.html","8cd0742bacfb09bb12bc456b5f6bb62b"],["/categories/图像处理与机器学习/page/4/index.html","f7633b8296868d9ac9dc3c1ffb5332eb"],["/categories/图像处理与机器学习/page/5/index.html","fcd6768489ed1da00550fcf851d25fa4"],["/categories/图像处理与机器学习/page/6/index.html","21a047f74972313678b9e1849ffe9374"],["/categories/工具/index.html","001384aa0a925d70df0d18ba2906d231"],["/categories/工具/page/2/index.html","f81c8be4ee6961e710caa732b25fe283"],["/categories/技术以外/index.html","3664651e6f33d6cbeb7e571c82078f7b"],["/categories/技术以外/page/2/index.html","fa3ee83959faecd336237b25ed696b7b"],["/categories/技术以外/page/3/index.html","6caf102a7e65811c9aa450a4356766ee"],["/categories/技术以外/page/4/index.html","d75917a1b9b31b1aebd1fb5b3542088a"],["/categories/技术以外/page/5/index.html","702cbef3ea2745f2439f296cfdc53ff4"],["/categories/技术以外/page/6/index.html","9944ab938f5a6d9f64406ee930bf2c50"],["/categories/技术以外/page/7/index.html","eb1698b14a8e393d413187d1b2f08145"],["/categories/技术以外/page/8/index.html","37d6986db4ffa93ead47cb6e2515b94b"],["/categories/技术以外/page/9/index.html","76cdf1618f0c29ca895e22aebf5c6843"],["/categories/数据结构与算法/index.html","6b3b9235a205e7835de7842f74f7144f"],["/categories/数据结构与算法/page/2/index.html","4577fae93f4e6de83ee353ca669c53ce"],["/categories/科学上网/index.html","f467558255ec16ebfda1d8220087e7bd"],["/categories/科学上网/page/2/index.html","ee6f86e2aecb99a7b34ea05041db90ec"],["/categories/科学上网/page/3/index.html","4f36255dd0e62649c6194c244f3f6693"],["/categories/编程经验/index.html","18ceda72f175eeb812a4ac4a160af68b"],["/categories/编程资料/index.html","9d56e43db1a75038cc6eaab9e212dc75"],["/categories/编程资料/page/2/index.html","e68e1955fb0d5e270873e451ffdfc89a"],["/categories/编程资料/page/3/index.html","9ac78481fc48c1d5bd8ba9a1102047c6"],["/categories/编程资料/page/4/index.html","a1e8a31cda38663c31bb773973790f6a"],["/categories/计算机基础知识/index.html","d3cd0a3b9e332c4aaed8dee279e6a45b"],["/categories/计算机基础知识/page/2/index.html","b30f897deb7a3e92a23ccd9382aff03b"],["/categories/设计模式/index.html","a4e16d6c110f3f7ea1e6b7a073fcda8a"],["/choose/index.html","7914c302b1ab596567cc3a79ef7a231b"],["/choose2/index.html","23b238ba1bc5a574d2496f4782893319"],["/chrome-crx-intruduce/index.html","81cf6cc92e088ac38fde1fa4ed3db6af"],["/clashvpn/index.html","83820fdf483449f6e2634225cc19d154"],["/coder-blog-website/index.html","b050d0eae010650b85c93ee02d9f8aff"],["/coder-source/index.html","04508879dfa5bfa069bdb9b7954c264c"],["/coder-videos-website/index.html","e8534fed041134d2413e03a95f5be520"],["/computer-book/index.html","4b25e0854ec85ae2f7596cde3b76e846"],["/computer-censorship/index.html","fe5f73f20769685c12b1939ec0b5e0bd"],["/computer-network01/index.html","809cc4765289b50ad4c8bd15ff15d0d3"],["/computer-network02/index.html","da5952268fe6a0e94f0d64fafd125cfd"],["/css/main.css","bc32ad34ec4990d934c3c647bdb62f79"],["/database-Mysql/index.html","0c30b8d88656cf74993bdd35ff83b89e"],["/eclipse-lombok/index.html","0fc0f1588d6ffaf6c32f124447d9962e"],["/fully-convolutional-networks-for-semantic-segmentation/index.html","3538186b5b113579985bbaa45401eb65"],["/great-firewall/index.html","5e6da912ac62ef1542877db69e484953"],["/halfrost/index.html","d1fc2add120eea74f487a319f6a998d8"],["/how-to-signup-chatgpt/index.html","602e38e8833162d1af66f6815f944b5f"],["/how-to-use-Gemini/index.html","c9f78fe85942c658397d1004e518b7be"],["/index.html","0d104e84cad1fe0a187a953ec290bb3c"],["/ios-open-internet/index.html","b6e1f64046b3e30cd906eb177ac29cb1"],["/iphone-open-internet/index.html","590da62b6e9497038f809b4a1af3760d"],["/itext-makes-pdf-form/index.html","accaa803b177d871542a70a9a0514512"],["/java-Set-Map/index.html","bb3e3279e020ae9059f1439023d120b9"],["/javaweb-server-error-codes/index.html","84536cdc9be7bc8ce76e9ea7e3304688"],["/javaweb-source-code/index.html","d9658de04069c018b34447b423b8b66c"],["/js/lib/busuanzi.min.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/js/lib/lozad.min.js","47904d34a224931dd1b615c59a3dbe3b"],["/js/lib/prism/prism-coy.min.css","0ccad54d95845901ead59bfd3ecceb14"],["/js/lib/prism/prism-dark.min.css","a4711d2957d6605eb5682bdd228cf123"],["/js/lib/prism/prism-funky.min.css","efedcdccd7a9ab342d2d9cacd24920af"],["/js/lib/prism/prism-line-numbers.min.css","38e22e790c279bb56f9ec4b90a2a2d58"],["/js/lib/prism/prism-okaidia.min.css","5ac6f9de996fbec68aaa106dfb16e061"],["/js/lib/prism/prism-solarizedlight.min.css","ecc7e64d039873ffcf7fb27babdaeb5a"],["/js/lib/prism/prism-tomorrow.min.css","456af2a14ae4f5089939d5904ac40fe8"],["/js/lib/prism/prism-twilight.min.css","ebb5c355332a8cf9a1ce37a2a69d678f"],["/js/lib/prism/prism.min.css","a5234d614834658887cec6a9515890f8"],["/js/main.js","052d2b299d9c750afea8df0b802ab7c1"],["/keras+TensorBoard/index.html","94185262aa1be6ac21251a336b11b824"],["/keras-beginner-guide/index.html","88e3652320ea4cf72fc056f62808ff27"],["/kmp-algorithms/index.html","7cf99f2d78d16ce7daa0367530143549"],["/leetcode-Java/index.html","78bb71bd7d46d145f589d8623a55b6a3"],["/links/index.html","9cde22ed6e8f814edda0b7655ba551b8"],["/linux-java-opencv/index.html","ee7184c9a2d192760fa50ecd17e822de"],["/msb-source/index.html","9450f829b5f6f1565ad818e40e1551df"],["/online-BUG！/index.html","5e8052da57883253e82fb03280f43fcf"],["/open-app/index.html","5d03a9c27d7b4361be9954effc4ac48e"],["/page/10/index.html","515b7b550ca426ad9812a24d170f9fe0"],["/page/11/index.html","57ee3256a01b88245e3e4f58849cf930"],["/page/12/index.html","b25797b07b3c0f2fcbe02c7f74465092"],["/page/13/index.html","d6db3309f91b29c0ac2b448ddae44787"],["/page/14/index.html","b15b561307344112ca169fd8dbca6549"],["/page/15/index.html","7c07ef884a87df7a38cf33e64bc2d8e0"],["/page/16/index.html","e41673404bb843c70f4f82beba3bee9e"],["/page/17/index.html","b6e59efdc8cf83b9c7f983fe96abad1a"],["/page/18/index.html","07787c470a201867172feb1c9fb182dd"],["/page/19/index.html","5627674c512c8248a9be3a2ce205d2e3"],["/page/2/index.html","1fcfa045aa59d40bb8be60d13cc29f61"],["/page/20/index.html","94b250a9f35eca6d039345fbcc1a1004"],["/page/21/index.html","03a67b4aaf05e5e6478ee58954fd7375"],["/page/22/index.html","e904bed4282a1ab0a075297e25c48d45"],["/page/23/index.html","b9cd485aa195bc376f8bfddbbcd2a1ba"],["/page/24/index.html","e2d9ac129c691bdd3ae78f7633dfbdaa"],["/page/25/index.html","a4565811eabf81685a105ae39505332f"],["/page/26/index.html","503458ccb3e14bdac4588eabc10dec6d"],["/page/27/index.html","599b233b04f7cc9bd5804ed00c4c0798"],["/page/28/index.html","30346152f2483bee402b68489821ad7e"],["/page/29/index.html","df1af9e54ff35e5d8caf3fdf802636f2"],["/page/3/index.html","af3d93a017cfe722bbc62906bf9400ae"],["/page/30/index.html","fd7759a162038fe2f8d0da4a24414314"],["/page/31/index.html","bcd922740b9ba789e69e8631bd537607"],["/page/32/index.html","1e7010cf899d6172915a5042d9b6b2af"],["/page/4/index.html","97214929f762c26a1eac85c437dc23bd"],["/page/5/index.html","a0ba1f27b65b262e7b5b99f522f361df"],["/page/6/index.html","aa89db8610392b361b5f764269540dd7"],["/page/7/index.html","3ce4828f6a3b73dcafe9eb89a81c8cd8"],["/page/8/index.html","6143a5eddfe7c5317fe70c5decc172f5"],["/page/9/index.html","a1589d8f7cabafbcef83ec5726eb51ba"],["/pandas-data-preprocessing/index.html","05d5f214b3faf7336c49c9d5102bdade"],["/popcorn/index.html","cddac25b2aad33d35c6368a3b37b45f4"],["/python-Blog/index.html","08028911a45513390250a324e38dc2e2"],["/python-yeild/index.html","0bc4c6aeede77e9624d6ae0e481f27ff"],["/python爬虫教程/index.html","6484f1a8cf9a0153268b1151bf11e568"],["/software-copyright/index.html","f82ba99ae2556f38e9fbfc2c61dd8239"],["/sw-register.js","6411e291e6ed6fac0b3de56a8d150b4d"],["/tags/AI/index.html","081a6693a1aac33020831c25555e00f7"],["/tags/API/index.html","4c9e39cd5a648e97c97c97a9c9446320"],["/tags/C-图书/index.html","6cce5ccccd1e9e7b1fc8056b35df3991"],["/tags/C/index.html","85cea69be6926279526a33471237a372"],["/tags/CNN/index.html","77be0e8e7e01a00bbaaa36e37fe7e508"],["/tags/Chrome/index.html","b16b75aa13d994ce7011b5cfe921f90f"],["/tags/C✙✙/index.html","bba4ba379970021123a0a79dc5a24248"],["/tags/C语言/index.html","0da18ae51ba7b18d7a9863864e7a745f"],["/tags/C语言图书/index.html","763740dfaf3679c74691646a762c4186"],["/tags/DSN/index.html","fdfa847f73aa36bd8bd056d5e487269b"],["/tags/Dll/index.html","6321f080bdbe9f81744a75550bf8d081"],["/tags/ECCV/index.html","79407f881d18a36149b7f6b4f4795ab4"],["/tags/EM算法/index.html","c0fa834ffc718da214e6fa8790eea05f"],["/tags/Eolink/index.html","3af00b6e506efa86114a7b00807e2817"],["/tags/Gitee/index.html","27372f1b1f128eb3750caddfdb5c12b5"],["/tags/Go语言/index.html","a205c7d1db1a463ad5aa928b392c2432"],["/tags/Graph/index.html","ff26d483292175e40dd76024944b82f7"],["/tags/HTTPS/index.html","cc0e39698ae38b635c92fab1b702e184"],["/tags/ITK/index.html","85cc25d3b3b5a54a19fe947e24d2e8e5"],["/tags/ItkVtkGlue/index.html","2db7c82a3b4a6e081c6ce30020e64f58"],["/tags/JMM/index.html","a67a6e694a712fcd45af02a0ac58abb6"],["/tags/JVM/index.html","6f6febd9c250000763974fde6ff3f7c1"],["/tags/Java/index.html","1128cfa77d9037d4fe1b48e57d2aa63c"],["/tags/Java/page/2/index.html","ba5bb342393dfc9ed41a941feba7319a"],["/tags/Java图书/index.html","011b6550fc9f48073dfab599c80eed23"],["/tags/Kaggle/index.html","a971480f7b2d2001268b01819a578b2b"],["/tags/Keras/index.html","06a09ddad7c617c2167a6bfeb07fede6"],["/tags/Linux/index.html","4d66cd33d4521c27196e185370709345"],["/tags/Linux图书/index.html","b5b7c3c8fd480863b0e321f82672ab8a"],["/tags/MEPP/index.html","51c5154d6ae3d0c5b46520e6ed393945"],["/tags/Map/index.html","ebd074e7bdbc783df72d8fe857b43041"],["/tags/Matlab/index.html","e91238cd108cfdb8923eb7ae41afbb3b"],["/tags/MongoDB/index.html","7c29007c3c54f7d17d5e2c4068072379"],["/tags/MySQL/index.html","ab3052a34455a55a8c5573b404c43c21"],["/tags/Parzen窗/index.html","233dee3f28df13472816d0f1c4534b20"],["/tags/PicGo/index.html","e31d28f7c2646612063024800123c249"],["/tags/Python/index.html","736059914d2a6665f2c1e809ec538b1e"],["/tags/Python图书/index.html","8e571d691d2fcde8bf3950dfc8b78fb9"],["/tags/SPHARM-PDM/index.html","e7e70a70e0a95e73cef62e65bc9b13ee"],["/tags/SVM/index.html","7b49e22277c3e9537afba9eb2c08d82f"],["/tags/Servlet/index.html","ff8ca847eba7a785585f206b638c70ef"],["/tags/Sping/index.html","a3827ec69af315e4d6be8e6f5a596734"],["/tags/Struts/index.html","380b5829050bfc0a03eff688f318fe36"],["/tags/TCP-IP/index.html","6596e1b89bedab6a847040b5f9468f12"],["/tags/Ubuntu/index.html","7f0098a72d0a5a1ca76f354400ec608a"],["/tags/Unet/index.html","0af8407b1e72f7b1c1ce436f943a9280"],["/tags/VS/index.html","ce81af296a617ee2e76c0029ed408952"],["/tags/VTK/index.html","bcafb6f83e03ae938a472a4d259d0eea"],["/tags/Windows/index.html","a88b46f0a398570f53b34151bdc40aa8"],["/tags/edit/index.html","37e2c18e9ca29febcaacc2fae14ec603"],["/tags/hibernate/index.html","9ac51a6b965dad43247df3a0abdab012"],["/tags/index.html","6bb95eb495e264b704078112f0a28ecb"],["/tags/itext/index.html","536b0e3a40d405a9668726073b2d78e6"],["/tags/jdk/index.html","5fec8a0bdbf0a6fad4430eea9c6c369c"],["/tags/kmp/index.html","46239f54f2842fc35332ad7015fe681e"],["/tags/k最近邻估计/index.html","c3d0071840be44a6030229758a07136e"],["/tags/lombok/index.html","2a48e230c6018ed8507eccfced83ce46"],["/tags/offer/index.html","77835b7d11a3b73fae7c4b8561a223a3"],["/tags/opencv/index.html","7accd51c7a8b751a60a46629ba92c66d"],["/tags/pandas/index.html","07efdad4391de50b2a5e25bbc6f8d32f"],["/tags/string/index.html","2eb8ecc997a10f0f0aa342dc43186550"],["/tags/vim/index.html","e58ddf6993f8e012593150be08177637"],["/tags/vtkPolyData/index.html","e6694da1e71b561b26eea94818982974"],["/tags/web/index.html","7b95ccfb7b0e6d160c78bb01f62a24fa"],["/tags/xshell/index.html","95ca3491c9a034dd677234625995a8fd"],["/tags/yeild/index.html","150703f83853055aaa9f3bdd3def620a"],["/tags/互联网/index.html","bf584b994065611a2269f19bc9d9a8a2"],["/tags/人工智能/index.html","d037ee208cccd1a0ba07805d4a8c6ed0"],["/tags/体绘制/index.html","203cbd3df6244f8672192945a5ee4bd7"],["/tags/全卷积网络/index.html","38fca73d08890dd9a9c7d473aacd3bb1"],["/tags/公众号/index.html","ff2de0228a913c5395d97bc6a3d832ea"],["/tags/内存模型/index.html","6f17d13cddd665dbdf46e7214b20ec21"],["/tags/内推/index.html","02db50328577ee1ff15948cdc11d5700"],["/tags/函数/index.html","d4c4f7fa58f43ed27378dc32c033b787"],["/tags/分布式/index.html","c1704a124ff03211e34c185b3c641707"],["/tags/加密/index.html","c040c4cd8ac2d0643cc8a06608ed4e3a"],["/tags/医疗图像/index.html","a946f199f2f1f5429cda43d9830132c0"],["/tags/博客/index.html","c06f0fdd2c6d4b2c57fc8c974c50783a"],["/tags/图像数据/index.html","609ba02f2597c89538e44ac050eeb6c8"],["/tags/图谱分割/index.html","8ea0fb3b82dbd7272a8b686e7fc23ab2"],["/tags/垃圾回收/index.html","b9a99c26b573378ca2e7c2867896445f"],["/tags/多线程/index.html","7a56f0543c16f5465614c1b25bf0a2ce"],["/tags/字符串/index.html","d1e304928f6ae7e76c44e2b7c1607e06"],["/tags/工具/index.html","4801bfc32d90e291f7d5c5c0f2b3d58d"],["/tags/工具/page/2/index.html","4d55752c282a713cf54eb9bb67cd5671"],["/tags/弹性形变/index.html","78120f32446845384eed6cf73ce55a21"],["/tags/排序/index.html","be5bc53149b5239fc50ffb44396d4df7"],["/tags/搜狗/index.html","0d2ad777245dd6411f76f2acd52c73d7"],["/tags/操作系统/index.html","6522be2b2c0c6dd0340d87a9056b7ef0"],["/tags/数据库/index.html","616e55a19d63120984b5f059b5832d78"],["/tags/数据类型/index.html","d5c05a5d4247f3d01c10ad563b263d8c"],["/tags/数据结构/index.html","57cbb2c7f9fe01d99a3d63493bca9f95"],["/tags/最大似然/index.html","7ceb39ddb5e260f960c666e9a9158cfd"],["/tags/机器学习/index.html","c51614f1b821fcc5e77b5d73bad7fedb"],["/tags/机器学习/page/2/index.html","e8fc6bff13d06c7d10b7847f7da20d10"],["/tags/机器学习/page/3/index.html","f4376e48d4267727b9ac0ca333b5f2cc"],["/tags/机器学习/page/4/index.html","04e78aad1dfbf098298ce3cd0a9c436c"],["/tags/机器学习/page/5/index.html","d3fedc37c9a3b9f7e10f9b409dcc0ff2"],["/tags/树/index.html","b28edccef0629e7bb032f40b92e6d4dc"],["/tags/框架/index.html","eee902ae738e3ad6b96bac5423d7fbc9"],["/tags/求职/index.html","e7154ae3167b9aec7be1297f2a244cbc"],["/tags/汇编语言/index.html","8f0ba29ec317104220beed83d5d5ad86"],["/tags/深度学习/index.html","a27ff5c17288e5cfb95a8b2fed3ded05"],["/tags/深度学习/page/2/index.html","733b9aa4d95a63a8b83aa5673c0d7769"],["/tags/深度学习/page/3/index.html","0b03d2f37993a5d128f48b9ce32ea052"],["/tags/深度监督网络/index.html","6627c6005a881f715867810840a14d3b"],["/tags/爬虫/index.html","5ddc62ba9452f7209c63b5e006d1d095"],["/tags/电子书下载/index.html","77877aaae1c9213c00bf24bb45190551"],["/tags/电子书下载/page/2/index.html","86b4b4ebffb89de14eead903f6217e85"],["/tags/程序员/index.html","e7719e0e4fddcb38e28c8324a6d179f2"],["/tags/程序员面试/index.html","9b80aeec73b4184371eac4b8d97e63d8"],["/tags/简历/index.html","d588bd8326543072fedcffe661e13cae"],["/tags/算法/index.html","37d34d8f2cc9e58b1713dd162579f57a"],["/tags/算法/page/2/index.html","914872ab14863e7011a177c08f630381"],["/tags/算法/page/3/index.html","34cb06919883ae2efe07eeb7f3907da7"],["/tags/线程/index.html","04a07c0d6e06cfdb5da98676b88b7fbe"],["/tags/结构学习/index.html","529d2e121802e764ca0aea90c98aba55"],["/tags/编程/index.html","4ba7c559ca9e61bd4e29a45ad4388947"],["/tags/网站/index.html","6226795c049b092e4f40dfee0c889586"],["/tags/网站/page/2/index.html","2a32e62fb5de94037a71c3aa56aecf4a"],["/tags/网络/index.html","d1ad170023a1e419871ba01e6acf493b"],["/tags/网络原理/index.html","9dc5620abdca58105fd372a62cdb7822"],["/tags/肝脏分割/index.html","e87c8f8d9c13ca1ff920d94b997fb1b8"],["/tags/计算机/index.html","daef04c7ae1c5a9f9b102d076953184f"],["/tags/计算机专业/index.html","d76a22bba1437fe9ac1d7c22ac3f6794"],["/tags/计算机网络/index.html","dddcf31e05f966209dc111290c045e5e"],["/tags/设计模式/index.html","ef450a1e585634bb093c11f11b580e21"],["/tags/贝叶斯/index.html","90726c58b993b2c7f2f0095b93ae265c"],["/tags/迁移学习/index.html","3dc2e3c5b9bc35328806bcf802c687b2"],["/tags/面试/index.html","dca429f97771a63c5e0881f8a82d6188"],["/the-way-of-pragram/index.html","ba5753bdd9fd287f85c9764736835a49"],["/untiypro XL安装/index.html","97e0650ac8202cf65ffb6126d3314dc1"],["/video-websites/index.html","13ad3f3ac1534a5df5d1e14c2f101cbe"],["/wechat-fans/index.html","8c6beb54268d88e318fb5e16e7455ce3"],["/window-run-VTK/index.html","06ddb59ef02c19c553a17eacbc93407f"],["/xshell-connect-Linux/index.html","5301b843f6027368c002bd33de48169d"],["/‌Accessing-the-Open-Internet/index.html","3ddc3f215f41f815b7488a90dcdf4ac3"],["/《Java高并发编程详解》，去大厂必看！/index.html","6c8b4c9426359ca3bdc2e5fcedee5968"],["/一分钟没了 1.5W 。。。/index.html","943634ff54a5a5a6df3964d6e31a6957"],["/一条高产爆款内容生产线/index.html","75c7a943d17cacde7ebfced60034d221"],["/为高考学子推荐的六个就业前景广阔的专业/index.html","cf55dc548a886edac12b8309ffe50872"],["/互联网赚钱机器---社群/index.html","94467fff9a692401e1b42b970afe2c2e"],["/你们常用的工作方法和思考方式是什么？/index.html","afeada6e0b07135316fe36b65fc2173f"],["/关于环境配置的一些事/index.html","6d021816f7149c43b26357464c182159"],["/准备了19w！搞事/index.html","446987de59485a5fa3a503965f664486"],["/几个很重要的感悟/index.html","a6f8ac0ae5920296e3e79be62806f5ff"],["/分割ROI篇/index.html","dfd158860a854977473e1a18e458db41"],["/分割精度说明/index.html","694f0acf51979a301ac6daada92dc797"],["/分块程序执行/index.html","05369ebc0fea1db3a5806376ac0bc52c"],["/加班公司黑名单！！！/index.html","e78d5cd75b1a82906510875e71d8853e"],["/卧槽，上知乎热搜了！/index.html","fd2ac24451100c7ba41f411fd64af03c"],["/卧槽，我的小破站爆了！/index.html","6dd48846c53a56f47c30ba6c6c030b5f"],["/卧槽，我被盗版了/index.html","a98d1f71c837d8df1913c613e5c430e8"],["/卧槽，还有985大学在大一上C语言课？？/index.html","7f4dba2cffa8164015de1e5691b456dc"],["/历年微软面试中出现的leetcode算法题/index.html","4d7b788efa333a2ec603345326f844a9"],["/去特斯拉试车了/index.html","17c74d30859c1b754e42fd021c443244"],["/吃苦的三种境界/index.html","452ae6c7c2fbd32b79c284857714bec1"],["/哪本书适合推荐给 Java 初学者？/index.html","0eab0501e91434ba2026e2cf214cb4f2"],["/哪本入门级的学习数据库的书最值得推荐？/index.html","ebda450d28ddde37eb20899b76eee8a2"],["/国内外常用的AIGC模型/index.html","6046da37140847e1d7a598d00128b242"],["/国庆假期/index.html","a891453959a8c538926f34edaa20f017"],["/图谱程序字典/index.html","01752748d8f3e7a68354a11ffb78129b"],["/图谱训练与分割/index.html","2392962559f0245bf158491fdd1c50b8"],["/宣布一件大事/index.html","99bf8bd863bdc221eabf0bc0e1cc8fdd"],["/小鹏P7i试驾体验/index.html","40986e6dfc25789611cb73575612de13"],["/微信PC版3.3.0内测更新，电脑可以刷朋友圈了/index.html","60fd7eee15b7deb638f37375d670abd6"],["/怎么更快的赚钱？/index.html","500d73a6bf6d1061785ec5bcf6b0a094"],["/我毕业了/index.html","2bcea0aa5511e3d501863591878f7e00"],["/我！真！的！找到了！爱上学习！的方法！/index.html","bfe627ab581e3c8a59e198f7cc97a57c"],["/户口的意义/index.html","fc22a503f70f7e68930e6d6cb7e16a2e"],["/推荐两本经典算法书/index.html","5c6d1ade7fc06060b580bf5ec92227df"],["/推荐几个在线学习SQL的网站！/index.html","89057dbfb9f892eea57e83da52226157"],["/搞了一个程序员成长晋级社群！/index.html","1e5e11548b58ed0359679199fdf9fbb9"],["/摘抄/index.html","6b85989c03ad4129eeaf9148c870fed4"],["/暴跌30心态崩了/index.html","f21b2977a3cac2ef53afc27de8859378"],["/最近很火的ChatGPT到底该怎么玩？/index.html","39c00a255a7af3f76b9cfcdeb11ac934"],["/有哪些好看的日历可以买？/index.html","5ee10ebf3d15758e49a9bd9137053f56"],["/服务器有啥用/index.html","b0b40eed0f6069a2e8be8310f86acacd"],["/来长沙了！/index.html","0db2e4ebfe17f75bcbe2c7e1a1b17e14"],["/校招污点公司名单/index.html","a4a76544c6241ae62f90575118b884fa"],["/梭哈200多万/index.html","84eb908fda1fb0189f415e0d1153e079"],["/梯形图入门/index.html","5882c51225269559beeea373ee9be484"],["/橙心优选，凉凉了！/index.html","aa55f00ceb5ad905a8cfce4f94bd3a7f"],["/比亚迪汉试驾体验/index.html","1a09a45d92d45676cb99e627235d3ec7"],["/清华转学成电，真的牛逼！/index.html","e294406d607319436a0b3356cc745bc6"],["/滴滴程序员被亲戚鄙视：年薪八十万还不如二本教书的/index.html","29ab6b0f690b624514f75f231cc21ae1"],["/社群！/index.html","72368bb549f6d1ef45732251f73a5671"],["/科学上网之VPN篇/index.html","d52614dfd665e98125185a0547109bcf"],["/程序员必备的几个技能！看完你也是大神/index.html","19c83794094fcd2704d84fa5bcc1314e"],["/程序员绕不去的槛，Linux！！！/index.html","b771e5be787fb7420bad7ff58cd6f241"],["/蔚来ET5试驾体验/index.html","79e2a663d895318eeeec169ea7237400"],["/蔚来，牛逼！/index.html","e72859f666baff4dbc0f4bdce9a90f76"],["/被录取了/index.html","a9270911ee8e8bdc7f8c52659283f5f0"],["/被找事了！/index.html","916ffb2897e1a6cf13ef5241170bcb6f"],["/被拉黑了。。。/index.html","bda861f29e35abd460a811973ced42c1"],["/被车撞了！/index.html","ae5af881cd4cb74dca3f5ccecd955916"],["/该如何选购固态硬盘？/index.html","2cca51eecaf811f11c2888d9628dfd67"],["/这本书一定要看！/index.html","448f1be9f041a1549191086ddcc1336d"],["/选Java还是C++？/index.html","86c6ba92b7b835b317790095fbe46953"],["/那些让你起飞的计算机基础知识/index.html","bbf4a02915b0fcc71de6c1e53e95bc9b"],["/靠这几本算法书，成功拿下大厂offer！/index.html","922d9450b6e3f4662d8b4769fcefde51"]];
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
