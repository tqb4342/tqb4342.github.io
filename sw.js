/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/0010-city/index.html","a398ed37d5e58e46fcc4af7eb27951a5"],["/10-algorithm-book/index.html","79ec107d31b1eeb1ebcd8959a9f6236b"],["/10-website/index.html","e75ddfc2adba6abfce86ed891178663b"],["/100万的小目标/index.html","548ae854fa99518de29bb55a239acb76"],["/10w+YYDS！/index.html","c0b7c819b521a71e0eee6f82b6d9f0f1"],["/12-technical-tutorial-sites/index.html","5ee2caea2fb26129e44ea8185eac1257"],["/2 6 岁 了/index.html","b097aa397b1c33f8bfa901d63b6cc21c"],["/200万，啪，没了。。。。/index.html","65eb9060a50ff231f4788b78471d7d6a"],["/2018ECCV-Paper-DL/index.html","f37e8eccf3af200d3aa587b226a68435"],["/2021年固态硬盘选购最新攻略（小白避坑指南）/index.html","39c20abc8431c7f9b9b25380c379d30b"],["/2021机械键盘推荐/index.html","087a37238fa624542deecbe59702d1df"],["/2025-07-15/index.html","fa70a73a4493965923f0cc6ae1d762e7"],["/27岁了/index.html","fa81a024c51001c795736faf830de650"],["/3D-Convolutional-Neural-Networks-for-Human-Action-Recognition/index.html","1e18c043d0cb7656e60fdcf48b2af0d5"],["/3D-Deeply-Supervised-Network-for-Automatic-Liver-Segmentation-from-CT-Volumes/index.html","587bf71f485a6572d95bd951407724db"],["/3D-Unet-Experiment-notes/index.html","3a8d87bef1e135cdce081dee53fbcaee"],["/4-Software/index.html","7f73fcf2caf838fdadbfe3968873cc57"],["/6-website/index.html","7fccab5b9fa0316642849a820cba8f6d"],["/7-terminal-tools/index.html","7f6b25f44e989fb683c4b623b88cfccb"],["/AIGC中典型的深度学习网络/index.html","7fe79dc97e49de7df5f56957c98b4479"],["/Agency-model/index.html","1b5e217f1c0b6cef26a2cfec795784bb"],["/Algorithm-brush-notes/index.html","7b91f6688ccc0cb1bd02f905556aab06"],["/Ali-recruits/index.html","e937a73847628c10736b0b6977eca4b1"],["/Android-open-internet/index.html","ebd0ab7d905890c53a02ff1f93aa57b9"],["/Appearance-mode/index.html","d53bc56e636d30f93eda632a8c664e76"],["/Backtracking/index.html","231725ef479244fe6fedbc39471a56c5"],["/Baidu-Sao-operation/index.html","2b2599101646cea8b01f493794fc1d82"],["/Batch-Normalization/index.html","855b06140f53e39c414ebf25f97d957e"],["/Best-AI-tools/index.html","2eb7f01bd417d5ab637ab47f9629b494"],["/Bias-and-Variance/index.html","ae513bb86bfe869ba942e7d10b021d7e"],["/Binary-tree-traversal/index.html","353743c44890b0f0d612117099b9d193"],["/Branch-and-bound/index.html","4c0d9dd3f34fe0f005b082ed40587123"],["/Buying-computer-for-the-first-time/index.html","9a4e54b68832c62ed2383b3ac3e47046"],["/B站向北邮道歉！/index.html","0b30c3c927f52bd531b2583f94e13b54"],["/C++-string-function/index.html","4c83878b7daaf4a01bd2c29f27c5f1e9"],["/C-Java-DevelopTools/index.html","f296f6085fe66f65fbf287ead515e56d"],["/CS-Classic-Books/index.html","1e91e5afbe1f074fb631d3f0a67a73db"],["/CS-network/index.html","cf68092bb071c42d0641fea28a1a7a34"],["/CSBook001/index.html","6b3ed316429f82397a1f1d299eff418f"],["/CSBook002/index.html","f9a1f5bf3ecd9a3fffb2c80d73135d74"],["/CSBook003/index.html","da8df2e3bff375c334ee710085a4eaff"],["/CSBook004/index.html","ad479a81577880534ac948df93aa9306"],["/CSBook005/index.html","631039397c2b5748b716e7cbc2398147"],["/CSBook006/index.html","0ceeb4b20283cc7f44917ab269cde92f"],["/CSBook007/index.html","1ea557827208c6bbecbdf23c97efc4d0"],["/CSBook008/index.html","30a4874ca4b0e20f3eeaa52926630934"],["/CSBook009/index.html","bee183b3b69f51fe795e1f8f0ee84e31"],["/CSBook010/index.html","3045242a97bad5448347be5e9d6a2cda"],["/CSBook011/index.html","6efda862d01d1b53272d3b857e75ccb2"],["/CSBook012/index.html","62cf2fab3268d9b8f8f96fa63584e8ba"],["/Changsha-really-fragrant/index.html","aaa010d28150f442ac8e3a7bf57b541e"],["/ChatGPT-VPN/index.html","6ccf7dace35995f9de025f863acfe421"],["/ChatGPT/index.html","e057dfb9be534ad4da8f7724f8690f74"],["/ChatGPT！王炸级更新！！！/index.html","15c42e6a9ce1d4fa97b8f838c4aa3f6f"],["/Chrome-crx/index.html","4a341b03b446b19c4a376f05527005b4"],["/Computer-Classic-Books/index.html","406b736e34f2e1bad0c0474e925d3bf9"],["/Computer-for-another-major/index.html","fe39054ae234bd0959d49035f1a3b637"],["/Conditional-confrontation-network/index.html","6737d2ff25d76fec7dc6d2c21bc17140"],["/DNN/index.html","8c9accdc1ac3fd44426861b0e2373766"],["/DSN-segmentation-liver-experiment-summary/index.html","574501220f7125f1346e89c712abf72c"],["/Data-enhancement-elastic-deformation/index.html","c17934f4db03016584dfa468b5125799"],["/Decorative-pattern/index.html","7f900735828b501fdf3342881b23d4df"],["/Deep-Learning/index.html","861669713ef4af4f70b8522d23b83b70"],["/Deep-learning-and-medical-image-analysis/index.html","c6037dbf2f8a805cac9ddf1ed959dc1c"],["/Deeply-Supervised-Nets/index.html","6176062aa8df16569982d1b42d52f2ae"],["/Deformation-model-based-sparse-representation/index.html","e1c965686576bbf2434e3ec8253f0c8c"],["/Discriminative-and-Generative-model/index.html","e60d1f8894c85988c11de4050165cd46"],["/Distributed-transaction/index.html","c7fb368c58380b78f24fbcfb92eea17a"],["/Divide-and-conquer-algorithm/index.html","dbfb4132b20310c5f2abbb2891b75d8e"],["/Dll/index.html","272f9e61d76d63e739035ad383160f5b"],["/Dynamic-programming-algorithm/index.html","5f94e5fb33bdbae1dc67d0f5ab27dddb"],["/E-book-download-commonly-used-by-programmers/index.html","86f3222bbdbf0c92d2680093b4d99bc5"],["/EditPlus软件的安装、激活和配置过程分享/index.html","2b1bfdcbe5b8cdfc3f26f5371b21d63f"],["/Eight-sorting-algorithms/index.html","89a87e38cf1c8ed59a897313ad596fb0"],["/Encryption-Algorithm/index.html","11b2c8ebbdd50064200e48b22aa136b8"],["/Eolink/index.html","88b470e7bbf9f92a7890fd073372e30d"],["/Factory-and-strategy-mode/index.html","716aa94820c5e53a6741a5404f1c3ff5"],["/Foreign-technology-blog-community/index.html","f897fbbe8e057590affc56ecc89500c3"],["/Functional-model/index.html","46742758c0daabad885b8f8c9f9a7959"],["/Fund-type/index.html","599357f517c7dd79fa7cf093e3331d39"],["/GPU-medical-image-processing/index.html","e366995727bcdd73a148ab9ec712eac8"],["/Generative-Model-of-Unsupervised-Learning/index.html","498960376a44076504473a3a12613018"],["/Git-Learning/index.html","816e4e175a3c2c6a430dc4ccb0075a22"],["/GitHub-2FA/index.html","eba4c344cb5c9d67d6faa20ce4e70a87"],["/GitHub万赞，程序员必看操作系统总结！/index.html","904236856d90e7e33f04175c131be0f2"],["/Golang-book-recommend/index.html","f31dbb43adc9c28999dab7c215ac5acd"],["/Golang-learning/index.html","c837b8d98b6a15d38e23eda46067b547"],["/Gradient-descent-optimization/index.html","1fba0b3272e5ef3cee8e50dd6e5c0630"],["/Greedy-Algorithm/index.html","795862377175415ce318adc1e77090fd"],["/HK-bank/index.html","ad1efd51bf226c2089200b0085043a42"],["/Head-to-head/index.html","4b00b57f163b039ae56045b092e1cb0e"],["/HistCite-Pro/index.html","6ae218dcb1b17db143868fa8fe0f6eb7"],["/How-does-the-program-run/index.html","231f65f974b78df0a7aed4f26ae19e36"],["/How-to-judge-whether-technologyisreliable/index.html","1783c1a21fe1928d084edb3d53706975"],["/How-to-learn-design-patterns/index.html","e95aa0e87c57bc416d51d725424de918"],["/How-to-learn-design-patterns？/index.html","4841e85f4fd085b4b24c97479bda0945"],["/How-to-teach-yourself-programming/index.html","eca1dcb32e634600a0dd39cb0eb4dcf4"],["/How2learn-Python？/index.html","5bb4baf42440234f9bffc6ab29f2e2eb"],["/IDEA-shortcut-key/index.html","f40d1e4f7d3fd6bc2055710ee1cc428e"],["/IT-interview-basic/index.html","4ee50093c6c28a83413ff7b5d48f081f"],["/ITK-VS-install/index.html","e2d156edc627a9b8e8c36fa27014e5e8"],["/ITK-VTK-ItkVtkGlue/index.html","b0f4977b5941d05a777cc032890a4205"],["/Image-Processing-Journal/index.html","f47e772711248af978179aeaa6dfb267"],["/Image-processing-plus-noise/index.html","88de1fdef1e64cb4d17a81610276038f"],["/Inception-Going-Deeper-with-Convolution/index.html","2fa7abc0a6819ce5eb96499b9e54074a"],["/Java-GC/index.html","4c76e3c79e0b86b264b5d6138a931e3a"],["/Java-Servlet/index.html","5062590ccb6d3116c03a98ded4be09ad"],["/Java-array-and-collection-sorting/index.html","e623fcc4ff94636704a547b84aed8afb"],["/Java-development-tools/index.html","1feb484e979b76aa103a79eb5a105cd9"],["/Java-eight-data-types/index.html","4d549107cb10a5f26c414747ea3f59f3"],["/Java-interview01/index.html","79546618981fd3c382ccd8c9d0c6936e"],["/Java-interview02/index.html","f0ffcd4301548ef96518c26ca842c4da"],["/Java-interview03/index.html","dd43b38edfb7c6958bbe0324f9eb5f15"],["/Java-learing-map/index.html","b801610853af85d4f251cb166851f548"],["/Java-learning-route-map/index.html","b2e44cba809e5303447e092c43c77681"],["/Java-memory-area/index.html","a57ed2c68e379a3c55efc58b8415dc67"],["/Java-memory-model/index.html","e35a76d23724479091e57ad5e5680f1f"],["/Java-multithreaded-learning/index.html","387ff0b305a235798e3f81a76b96e8d3"],["/Java-project/index.html","dfffdc8d6e91e90542a55907bba89415"],["/JavaWeb-Chinese-Garbled/index.html","147ad3f42d69b81e1d83127546a4c6bf"],["/Java还是C++？/index.html","fb4900a326efbdb7ebe1ccdbdb3eee8b"],["/Kaggle5-step-guide/index.html","8d93f09d76dff08d1b558bb47597aa63"],["/Knowledge-points-of-Java-garbage-collection/index.html","d4cba29b13b43b21521edb3fafbccb59"],["/Layoffs-and-Hiring/index.html","1b21ba13d3069d956377aebd5148cb1c"],["/Linear-regression-of-machine-learning/index.html","9ccb9544b4ce628a5cccc17c40c5b099"],["/Linux-Compile-C/index.html","a69bc2fbd3138f5ec50c6957479793ae"],["/Linux-ITK/index.html","024e2bdc944e67d47bf21dea308e1b18"],["/Liver-segmentation-of-sparse-components/index.html","4b8472c292b8b0d5eb50d02e689c6599"],["/ML-EBook-paper/index.html","ea41e70a03617b8500c5c49915f7542b"],["/Map-uses-multiple-maps/index.html","0b4800a4d6d78282c7daf7f09be8c80c"],["/Matlab-Graph-cut/index.html","00714d8b1ec3e55b8d6f38bde298c58e"],["/Maximum-Likelihood-to-EM-algorithm/index.html","bb61ddeea1b3e15138f1660af28582b1"],["/Mean filter and median filter denoising/index.html","2dbea10226cc7f6535813d41fcb9199d"],["/Medical-Data-for-Machine-Learning/index.html","9181b91d5c5765b018af3be0d28841f0"],["/Medical-image-analysis-deep-learning/index.html","749ae9b15061405b17887564f3526c75"],["/Medical-scan-image-processing/index.html","71cd4652ef77a9a6b411cca91e6b725b"],["/Merge-sort-algorithm/index.html","bdcf6c246bf6105ffe1682f246812e1d"],["/Monthly-income-2W/index.html","c724480152e29c0cf4b27f38d9e551c8"],["/Mysql-database/index.html","4e2b86af70a43845080e7d915ac4d5f3"],["/Neighbor-Embedding/index.html","f5d01f6d2079d9a8546839afb680e381"],["/Neighborhood-approximate-random-forest/index.html","0c2109ce7324c2a9c788e01c5468fc2c"],["/Net-and-official-documents/index.html","4ce226718492329ead3a4e104e64fca2"],["/Netflix-VPN/index.html","ff410b7fc55ccc247cc45ec8a0d38cb1"],["/Network-principle/index.html","ff0b6544f5491b099395ff2dd87275b0"],["/New-Hong-Kong-stocks/index.html","5a147299ff7500e3a2bddeae941f4932"],["/Nice-to-meet-you/index.html","e72c65790750c35ec94a13979b22e781"],["/OS-processes-threads/index.html","a7fd23f7534a7657e5a453c7375f7c21"],["/OS-run-environment/index.html","c0de7518d2ccfc3bc070a6d361637695"],["/Open-Internet/index.html","89d59e43dbb296bd8c89db32cad381fc"],["/Open-Internet2/index.html","7a18c75bd8946f2049af0c3a730ac816"],["/Open-source-community-and-rewriting-website/index.html","c7a91aeb35a4de75f7ba64237be2afa8"],["/Panoramic-image-stitching-based-on-SIFT-features/index.html","50560be40d168a3e042359b299bee4c2"],["/Parzen-and-KNE/index.html","3d413d11ed1729f3410b67f39c3fe1dc"],["/Personal-technology-blog-site/index.html","673262f449eace2d93cc6c75b7a1c6e3"],["/PicGo-Gitee/index.html","d4b5581704fa1a36456243e0b1266d0b"],["/Programmer-treasure-chest/index.html","9ed482329f3d24754b235608a2a50a89"],["/Prototype-mode/index.html","45a4e8dbd8abaf2b1b734fd1b33f1a2c"],["/Python-base/index.html","65836b99f4a171b6af0214972d9d92c9"],["/Python-crawler/index.html","8c9b325ae1d8aa601b3896330cacf7a7"],["/Resume-revision-suggestions/index.html","edd268d17bb54ae55e6b809a157fff5c"],["/SEO01/index.html","cdb0a762e7123e24d5a761bd28f5b472"],["/SEO02/index.html","f33f689f47390d6419585f5e550cdc71"],["/SPHARMPDM-MEPP/index.html","95eae9ed095c86539077454df7888712"],["/SVM/index.html","37c3888ac7aab706edfb898ec55bcb77"],["/Semi-supervised-learning/index.html","056fda7129d5f981f371e3652c671d67"],["/Sequential-model/index.html","b61cc63cb6234c56a8d6572726a967ba"],["/Shape-Based-Human-Detection-and-Segmentation-via-Hierarchical-Part-TemplateMatching/index.html","c7b0d68792e6b50eeadaa1ef2ba9fa0b"],["/Spring-basics/index.html","8f3c7a3e0ddde5e83867593cf3759c1a"],["/Spring-integrates-hibernate-Struts/index.html","10e2953021ceaa186c80a168a01410e0"],["/Structure-learning/index.html","f1f522aa6fa2ea3b1c48bd284b8e2c9f"],["/Suggestions-for-self-study-of-computers/index.html","285caf23ff7fd6c56ff4e50bd4c6da07"],["/Summaryof-HongKongStock-Account-Opening-Links/index.html","2111b8f224ee2a31f0c60220995363cb"],["/TCPIP-detailed/index.html","25803dc97655fa93d329bb6799d70516"],["/Telegram-VPN/index.html","f0cd89bda845d9c5e7a92a270f96d1e8"],["/The-essence-of-shopping-festival/index.html","9b6c6b70b1cfebb967a78686856250c6"],["/The-most-important-investment-in-life/index.html","4f9ef5d5a702f9cb7df64d597cc10146"],["/The-most-successful-nvestment/index.html","d46cfb9b3fb5f0fcc456333e1b112760"],["/Transfer-Learning/index.html","f7be2851ea3dd3946ec54678500e1181"],["/Transfer-to-computer-major/index.html","49713f86b32e3d3a2411fd55c5dc8baf"],["/UNet-Convolutional-Networks-for-Biomedical-Image-Segmentation/index.html","fa46e524e897eff34730e2d1301f0d58"],["/URL-DNS/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/Ubuntu-install-sougou/index.html","3299fa42638a2a66f180876cc1331223"],["/Understanding-of-paying-for-knowledge/index.html","765319a1cfe1b57e13116abd7e634eba"],["/Unsupervised-Learning-Linear-Dimension-Reduction/index.html","7206fa260bb2d425309df5281f0d7687"],["/VPN2025/index.html","23a6b6e62fe6814c155fa438e283e21a"],["/VTK01/index.html","caf3513a6de3e5ee2d1c4d1004c142d8"],["/VTK02/index.html","900ab9a16664576ac17a42c41b41c440"],["/VTK03/index.html","7da2a1cf06d98be647198c2481fd4b01"],["/VTKRead-write/index.html","38ad1b50b2bbab90b47d7d2c399b706e"],["/We-are-all-good-kids/index.html","531434d6b49576b530c8afb79e3cc506"],["/WeChat-80/index.html","fcf8d20528cbdf49888754ece9cf4044"],["/WeChat-red-envelope-cover/index.html","0fa54e623c0d998471744306097a159e"],["/What-is-crawler/index.html","3a7249dbad3caf27bd3c840febedf695"],["/Win-OpenInternet/index.html","bb1ec6ca261cf52f9c31836bb14a4c1f"],["/Windows11-2kfans/index.html","0a60eba34bfd8f3531a408d658a73c07"],["/Word-Embedding/index.html","fd2ca29d833318ee3d11ac168177b974"],["/YuanShikai-and-his-Beiyang/index.html","a42eb7bc369da8e86a26ff25307f98bf"],["/Zero-copy/index.html","b085da2135d82ee63c64d50723664dde"],["/about-keras-model/index.html","76fa9c1199dae4f22db104b9f1ed005a"],["/algorithm/index.html","78cec7579c4e3cb9a159b81c25b00303"],["/alibaba-Java/index.html","979d938aa4d21fe763c2812eb24b4cb7"],["/archives/2020/01/index.html","bcf4946588b1a27737802c8d31aa5872"],["/archives/2020/09/index.html","1f6acea928fc6df27c2bf80c2665ba0e"],["/archives/2020/10/index.html","909e5f80de6e5b8c66b6911fd8a48efb"],["/archives/2020/11/index.html","102472321bac8dd1ddd364041ae1384c"],["/archives/2020/11/page/2/index.html","4a0b88975b56877bc7846dc2732ecd23"],["/archives/2020/11/page/3/index.html","b32789e2d34338445480d9541f59f4d2"],["/archives/2020/11/page/4/index.html","b366cce545c15291cece8bb250448631"],["/archives/2020/11/page/5/index.html","f8bca325be244c9864962f3cd57d56c7"],["/archives/2020/11/page/6/index.html","d134dcee5edd09eec95c7ceae8e37405"],["/archives/2020/12/index.html","784e359199b68cd85967cfcc29c93fb7"],["/archives/2020/12/page/2/index.html","d6134e7420cb2060f1bd015716793681"],["/archives/2020/12/page/3/index.html","3633180204160ca86ec64de1e4559420"],["/archives/2020/12/page/4/index.html","e09cdc09348a2d118c1db8bb85c5ee1e"],["/archives/2020/12/page/5/index.html","1098eb0449cc3a60c56d570a7aec1d3f"],["/archives/2020/12/page/6/index.html","83269c40d5d7b0513b57a2c514946eab"],["/archives/2020/12/page/7/index.html","74a4c45205d915978e07272c45e75e39"],["/archives/2020/12/page/8/index.html","893fd490ba9ef52deb4a9dfae5b72cd5"],["/archives/2020/index.html","d40ac3ffed31445f7894902d6f02db69"],["/archives/2020/page/10/index.html","b7679b178b8e79480c0b8c2eacd81157"],["/archives/2020/page/11/index.html","00deefc355179cc9b97c3a9913af1daf"],["/archives/2020/page/12/index.html","2c57b89e9559c52445bb76e5223de2ef"],["/archives/2020/page/13/index.html","d43d66f4895ccb1387ac865b166f3aad"],["/archives/2020/page/14/index.html","30903e811d6eac0141987cb3dc8774a3"],["/archives/2020/page/2/index.html","6b1b7683637eb92126d0b8e244e26aa9"],["/archives/2020/page/3/index.html","040ad1e67a138fe605244a3486632cee"],["/archives/2020/page/4/index.html","7986aaedb858e32fce6521cd1cbf0236"],["/archives/2020/page/5/index.html","5b4a5e8530b7ebac5dba3cbef1618e3e"],["/archives/2020/page/6/index.html","ea05718873d168957e1f3c3c275ead3b"],["/archives/2020/page/7/index.html","9f8582f2b2a3f2012fa29a46fca1fdac"],["/archives/2020/page/8/index.html","bb04811f80c4ecb868afd7a8e03a3579"],["/archives/2020/page/9/index.html","a9ba149fb288e63804c48794c18c324f"],["/archives/2021/01/index.html","9f097dbfb8e52e8cc17724f1b194c0f8"],["/archives/2021/01/page/2/index.html","8eeae397d607b63fbe3607307f03c342"],["/archives/2021/01/page/3/index.html","cd8bf03df5ae41bd79f1f5fa056cebcc"],["/archives/2021/02/index.html","c7030b61b80e4e809bb4f8960b3326a1"],["/archives/2021/03/index.html","a66af6b03e514d8db5aeab369f404bf9"],["/archives/2021/03/page/2/index.html","5e56333b9f879637ad0d03d128d363a9"],["/archives/2021/04/index.html","0ece921484d44cbf21494c9bcf7e08a2"],["/archives/2021/05/index.html","fd796f738f1d140d17b26d93725fccb9"],["/archives/2021/06/index.html","59378747eb5a72f8991eb6ffca2ab567"],["/archives/2021/07/index.html","b323e24c38becf958ed939dde998118e"],["/archives/2021/08/index.html","0ec5fb4b8c846236e5501451aa5f9b3f"],["/archives/2021/09/index.html","74032c2faaa2c6885f58477797c79a46"],["/archives/2021/10/index.html","48383303facd3206878478a8dec3f570"],["/archives/2021/11/index.html","db88d212c8977cb92db21cb99610928e"],["/archives/2021/12/index.html","821ca109559aaf16d2e902a0b392bcfa"],["/archives/2021/index.html","b463b0864efd74e63c14e1e2e33c9f41"],["/archives/2021/page/10/index.html","f1a248fe0bf89b9bd8fc19ce1b6ed0da"],["/archives/2021/page/11/index.html","81c6f305b94b4392078de2984e57d3f7"],["/archives/2021/page/2/index.html","7c7bb3c0b49c815d6e155b1440935084"],["/archives/2021/page/3/index.html","01f23c09ea2386f1db524610602651c9"],["/archives/2021/page/4/index.html","4b8b8dae2a94144c5ce65e0ea2222a51"],["/archives/2021/page/5/index.html","7058b26a0a4a5ad0a90fc0cb3b93413b"],["/archives/2021/page/6/index.html","17fc6cabf3b1cd6b1b6d3df1c54872a0"],["/archives/2021/page/7/index.html","60c8639700f52cf917bb86f9d780c19b"],["/archives/2021/page/8/index.html","68c7667721e869b9fd3bb3831057ae49"],["/archives/2021/page/9/index.html","a6bebe1454f1d6c6f043e88269dba228"],["/archives/2022/01/index.html","de09cf4d948929f136c68d20b3c0e547"],["/archives/2022/02/index.html","6fffd080981f021cf782fe91a460cede"],["/archives/2022/04/index.html","c61b5530b62641f028bc09f3ee9917aa"],["/archives/2022/05/index.html","980ec4d85e81ee227ee3be69a4e220c1"],["/archives/2022/12/index.html","abf5ed6ea372eb0f1faf859114f896b4"],["/archives/2022/index.html","d2b00f1dc2a4cc7eca9606623adb9750"],["/archives/2023/01/index.html","f5ed4e83cc333791e2848af3c8a2050a"],["/archives/2023/02/index.html","d24847c9e29b8a59c67926d75f9e00f4"],["/archives/2023/03/index.html","f0e16006fe8c5ff61e555e54f2fc104b"],["/archives/2023/04/index.html","94348a85283cb188bc4912ef04db8ce7"],["/archives/2023/06/index.html","78f5dca440eaa344bcfdc00df1c37373"],["/archives/2023/08/index.html","d2a92c570d0f2c539ee65bc11d756c7d"],["/archives/2023/10/index.html","6516bd2dc2fee78b2d069ccc17de3112"],["/archives/2023/index.html","5abe21712bfd71a4e1c800b6cd990f89"],["/archives/2023/page/2/index.html","cdaa5e0ceaff0d10ad504285dcfd98a4"],["/archives/2023/page/3/index.html","57af029cc4983f0168bf5e382bc7d002"],["/archives/2024/01/index.html","74ea7023831848e55e1b49827f4dcd80"],["/archives/2024/02/index.html","bb3e5d4316458a832d8349cf9ec19c38"],["/archives/2024/index.html","eec5997c8d3afc8ce23071ce6ae2bab3"],["/archives/2025/06/index.html","3bf464dd1c78aa548a0d61331e21629e"],["/archives/2025/07/index.html","f324122db196e57321d22307addd362a"],["/archives/2025/08/index.html","d96c72a470138630a7dad856a1aba5f3"],["/archives/2025/09/index.html","1eb50c78057f9e34e3e7aeb89e152264"],["/archives/2025/10/index.html","ffb50ea5986363aad38e7c71526728bc"],["/archives/2025/11/index.html","bce5980f4d50dd20dce23bb912588ecb"],["/archives/2025/index.html","2577baea6939c6d0d13cdeddb558570c"],["/archives/2025/page/2/index.html","8f0ade429538e0670dbbd4a25f16a576"],["/archives/2025/page/3/index.html","3d9937fd1b2f69438b2a0a04a7651394"],["/archives/2028/02/index.html","a788c9333fc06da74aa3338f69f67f0b"],["/archives/2028/index.html","1e87e46310f9a20d4436493def397bfb"],["/archives/index.html","400ec779540814c701c1ca9b54de5e83"],["/archives/page/10/index.html","bc88517852e995aa7fd07ef3896ce93b"],["/archives/page/11/index.html","81e84a93e0722fe24b4e15a5c899089a"],["/archives/page/12/index.html","bd8bfb729668d8b8be445e30fa60a76f"],["/archives/page/13/index.html","fe43bf6b8ed1fe7965c075a2fb9227b5"],["/archives/page/14/index.html","3c093ff5c48f639f16c3dedc421dd34b"],["/archives/page/15/index.html","668101c5156935e5c124572261b70fff"],["/archives/page/16/index.html","a642939bf2cb719fa21b8bf944d2923e"],["/archives/page/17/index.html","451ac75c731b6c5626efe62932c022d4"],["/archives/page/18/index.html","216ea3fd0600a371c678a6c9e452905e"],["/archives/page/19/index.html","bb1101840331f33536c7be99305a6a89"],["/archives/page/2/index.html","6e7e3ecba7304f6e83215d7225fa8f68"],["/archives/page/20/index.html","93ff9979424ae74f5c6b55c62b505242"],["/archives/page/21/index.html","da942157e27637be9690a59271be7a57"],["/archives/page/22/index.html","05accacd1d07fdb1241e3714f986be59"],["/archives/page/23/index.html","85f182102a63fab6ccb76ba128fc2fec"],["/archives/page/24/index.html","d781d38db51f593566249089ed6c3b7c"],["/archives/page/25/index.html","d003e33172964c5d746174990e0a09e3"],["/archives/page/26/index.html","6263799e485774b08011033dbbadf0e4"],["/archives/page/27/index.html","e4bc423f755d93aad5ff7da16ef3be05"],["/archives/page/28/index.html","e8d1f2f688eedb07faa0ddde4d8f6d52"],["/archives/page/29/index.html","6d690c6bb465cbea4c635ab3faa8c793"],["/archives/page/3/index.html","7e46f82c32bcd4be946c3a1c08254abb"],["/archives/page/30/index.html","b80c00fc8c404b1609ce7197a8c117be"],["/archives/page/31/index.html","f76a34542a4c8d9f0d519044a32d0006"],["/archives/page/32/index.html","f061c60d6b4a5b824c014dfdc5ad0f5e"],["/archives/page/4/index.html","8f3693995547b95da9b000f0368e0214"],["/archives/page/5/index.html","67a89101cfca150278b3cd18f95a9fe6"],["/archives/page/6/index.html","caf957d27da8b774107e105443b7056d"],["/archives/page/7/index.html","34be18ca24bea8d102ae9891543adb31"],["/archives/page/8/index.html","76b7aa942952a45bc499f351672c00c8"],["/archives/page/9/index.html","21b7372523cfe95c57c7c9572503bbde"],["/baidu-search/index.html","113730582ad2a6fef0c79ffa9c650c4e"],["/baidu_verify_code-Hh2fKNlEB1.html","78b2d2bfac43f914d9d3dfca9a2e77bc"],["/be-a-programmer-instead-of-a-code-farmer/index.html","c2a0e3096b6ec6c5a6ddab16cb1f1d52"],["/bought-a-house/index.html","cafa2affaff342b2dc066dfd47f352ff"],["/categories/C与C✙✙/index.html","fe072ba2436da8b4158c9092ae5e84c1"],["/categories/Go语言/index.html","58ba33640a7e1b2d2ed35015f5df04a6"],["/categories/ITK与VTK/index.html","02ebea960d6b1d40c63d2b55e90456ea"],["/categories/Java/index.html","6b3f3dfe751f38ac625d61f73f7ea352"],["/categories/Java/page/2/index.html","7a5f52d88e98af526220797b27923ac9"],["/categories/Java/page/3/index.html","46b0e788c8a883fb0f5d0a4a7c831e02"],["/categories/Linux/index.html","9151c06093e7fad4564e6f8bc9f53539"],["/categories/PLC/index.html","810a52ff0cdb9e3180666f61db416b68"],["/categories/Python/index.html","0c679dedaa42997bb8d89c2cb963fbf0"],["/categories/SEO教程/index.html","2294ce40124fdd4a3469403d35ef916c"],["/categories/index.html","e9ab44fe8a0c1b9b9738fc9c7011757e"],["/categories/图像处理与机器学习/index.html","ae8c6e567b3147c854c8633a0a2cc8ed"],["/categories/图像处理与机器学习/page/2/index.html","ebf13544a4f09c0fdf1efd238dafc1da"],["/categories/图像处理与机器学习/page/3/index.html","2026d1e797165c12d2e55aaf25cb0d5b"],["/categories/图像处理与机器学习/page/4/index.html","f2ea70b56b77d4eb47e20d804019381e"],["/categories/图像处理与机器学习/page/5/index.html","5226da5078864ac88c39fdc6431e66bf"],["/categories/图像处理与机器学习/page/6/index.html","6c960db31c535043416d117305de012e"],["/categories/工具/index.html","43d1dddf897c293f47d7b74736adc62f"],["/categories/工具/page/2/index.html","307997ce080c250215ae2c431674c111"],["/categories/技术以外/index.html","894fbda43ee240c445e8cc1e4d007924"],["/categories/技术以外/page/2/index.html","e9591ed38f56f799a2448c78b570586b"],["/categories/技术以外/page/3/index.html","3d694b2bf065b324da67695e193a63b5"],["/categories/技术以外/page/4/index.html","671e62b7be97614bd6119dc2223a98e0"],["/categories/技术以外/page/5/index.html","425eae28062bb67c5800702aebc710ae"],["/categories/技术以外/page/6/index.html","34a8359bf2fd17f8a9693901699a4630"],["/categories/技术以外/page/7/index.html","d75ef82357615a83e21127b7e9b618ba"],["/categories/技术以外/page/8/index.html","79bf82c6bf9b39cb5755dcea24f4d02b"],["/categories/技术以外/page/9/index.html","a8fde735ccfc9a754e6c5dbaaba8eaeb"],["/categories/数据结构与算法/index.html","44c33deb34126cd6703eb9fcd3e46fa4"],["/categories/数据结构与算法/page/2/index.html","2dbee36b0d3790b1ac8ad468deb0c295"],["/categories/科学上网/index.html","f2d3b686264d1c1bc17a3dc48c0dc49a"],["/categories/科学上网/page/2/index.html","a3b04d73a20c4619e834a8d3f4d1ae4d"],["/categories/科学上网/page/3/index.html","aab87f3c6f6524bb8de91ad04def0f0b"],["/categories/编程经验/index.html","07407b27d3167a67c694c26225450b8d"],["/categories/编程资料/index.html","aacc66cc73f17250a97b236e96650400"],["/categories/编程资料/page/2/index.html","918769ecf356690eb41e2a1b27fee6b3"],["/categories/编程资料/page/3/index.html","657a297cd6ea568fd7ef7a1d985944ba"],["/categories/编程资料/page/4/index.html","50c4009afb9297948ba1b652b212cfc1"],["/categories/计算机基础知识/index.html","c463d4994550dc0fbe57d877686ee74b"],["/categories/计算机基础知识/page/2/index.html","c69c82b579c1ad3edbb609a5dba0f4ae"],["/categories/设计模式/index.html","d1171f782b8f635e343e7ab21b48fa8b"],["/choose/index.html","8e4c419ad0574b1f564a5708f2ddd4d6"],["/choose2/index.html","653652d57a452eb8c22619260cc036f6"],["/chrome-crx-intruduce/index.html","640a8bdb5eb881ccc9a714c348deb5a8"],["/clashvpn/index.html","ac337337131ad547840cd5dfa724293c"],["/coder-blog-website/index.html","055d7a79bfcdb67df5b682cb7a69a228"],["/coder-source/index.html","62eff1de163b141d21efc684831d5e5b"],["/coder-videos-website/index.html","520941af71026565bc497dd1681078c1"],["/computer-book/index.html","fc7f7244af5b9daa6b68c024b8ac8382"],["/computer-censorship/index.html","c15c6c4944a7b2cc4b6398eae7503e00"],["/computer-network01/index.html","4b376580880973065e30290b8bf96e08"],["/computer-network02/index.html","04c6c10d7d1b349e25e138878c666a23"],["/css/main.css","bc32ad34ec4990d934c3c647bdb62f79"],["/database-Mysql/index.html","bb98b1f4717d915417a07c5c5f0b3f19"],["/eclipse-lombok/index.html","d75703fee3f9734ceccc90bae5b7f4a3"],["/fully-convolutional-networks-for-semantic-segmentation/index.html","c0f12653e94804720f2ed357ca1b1106"],["/great-firewall/index.html","84d99eb27921101140b661f13e2d28c6"],["/how-to-signup-chatgpt/index.html","fdd18d400cc6615a78b14263b158e713"],["/how-to-use-Gemini/index.html","204c5d1475130d80d7e848f379ed7a5f"],["/img/logo.jpg","d6e2e245614031c3fcdd6d58f93135bc"],["/index.html","f9cb37f30032126a493ce37343910a62"],["/ios-open-internet/index.html","b7337ea09faa1f32832761cf89bc4603"],["/iphone-open-internet/index.html","7525c5ad2e2fb476352c9f6674df670c"],["/itext-makes-pdf-form/index.html","648f6ebb17cba9f0e3070f82580b8742"],["/java-Set-Map/index.html","bcb6a227fc7b07ee8f2723ec1bef5ffa"],["/javaweb-server-error-codes/index.html","32e8b8bf774796feeeb5fc6de9f99b8b"],["/javaweb-source-code/index.html","619fc3d5549828028425739261280daf"],["/js/lib/busuanzi.min.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/js/lib/lozad.min.js","47904d34a224931dd1b615c59a3dbe3b"],["/js/lib/prism/prism-coy.min.css","0ccad54d95845901ead59bfd3ecceb14"],["/js/lib/prism/prism-dark.min.css","a4711d2957d6605eb5682bdd228cf123"],["/js/lib/prism/prism-funky.min.css","efedcdccd7a9ab342d2d9cacd24920af"],["/js/lib/prism/prism-line-numbers.min.css","38e22e790c279bb56f9ec4b90a2a2d58"],["/js/lib/prism/prism-okaidia.min.css","5ac6f9de996fbec68aaa106dfb16e061"],["/js/lib/prism/prism-solarizedlight.min.css","ecc7e64d039873ffcf7fb27babdaeb5a"],["/js/lib/prism/prism-tomorrow.min.css","456af2a14ae4f5089939d5904ac40fe8"],["/js/lib/prism/prism-twilight.min.css","ebb5c355332a8cf9a1ce37a2a69d678f"],["/js/lib/prism/prism.min.css","a5234d614834658887cec6a9515890f8"],["/js/main.js","052d2b299d9c750afea8df0b802ab7c1"],["/keras+TensorBoard/index.html","53c327d4bcbe947ad8adca5114614670"],["/keras-beginner-guide/index.html","677479e25992e456cb28c749f9c691fb"],["/kmp-algorithms/index.html","671fb9d9dc1ceb429bc7d0a1ebd0d328"],["/leetcode-Java/index.html","2a60e6b4bbda3365a33d3d73b9724e7b"],["/links/index.html","205e6f55818e83a7b42f4025a7a7c44d"],["/linux-java-opencv/index.html","46402d4aa840d06c5485adab13927397"],["/msb-source/index.html","4e13c78e3353de71d4df9abdb177f7f6"],["/online-BUG！/index.html","bcb8a4862a574cb3b7ea9d26271d599b"],["/open-app/index.html","795c02ac7ec5080037a55b6b10bc940e"],["/page/10/index.html","f1313196f49a4142e2ceddaffa236591"],["/page/11/index.html","f6dc396627ac22c0cbebab3d266f8c99"],["/page/12/index.html","bb9356c1aa75a8f8512de13cd81a7a17"],["/page/13/index.html","51b57541fd449d64c44a5a036240afd9"],["/page/14/index.html","8260d8c4739091a14093f59fa6d624ec"],["/page/15/index.html","aac60434d6c43c950715843b180bac38"],["/page/16/index.html","016693e17f068ee0871c32276b97d052"],["/page/17/index.html","bc8e87f7d1e17d1dbfd48b1b153b7207"],["/page/18/index.html","882e63c5d183893c83a505b3144a4fb4"],["/page/19/index.html","ffe8e232f971e4af22d58407bba55cba"],["/page/2/index.html","38924a8a981b049e9da6d9495a5b4b63"],["/page/20/index.html","0020a4abbdfa4a3486d653cdd839d2ba"],["/page/21/index.html","7d509120d846f7b733cd74af936c6067"],["/page/22/index.html","181cbed11a7d6c79dca55709a9c68ca6"],["/page/23/index.html","aff59044eb04abeab97de74d8f957b64"],["/page/24/index.html","09c350d9fea15f5399fb1e7ca58c7d44"],["/page/25/index.html","9f8162a6e909da0cf8bd57c4fbdbfea9"],["/page/26/index.html","2983f69f66407c1fc553a9c37a25bafb"],["/page/27/index.html","e43db8165031bc143ecbb6eaec150f20"],["/page/28/index.html","e0f74e9446019fd5856b21598dd07796"],["/page/29/index.html","6a61c288d5d8dc8f96aa03f70142f0d4"],["/page/3/index.html","3467eff1115ec6ed62afea72c745c5f7"],["/page/30/index.html","85f6168e9103d7948d9d01441cac4e5e"],["/page/31/index.html","5975f77931bde28e861ae3fbac282625"],["/page/32/index.html","b2e78a9fcb837b3ea81898b12b7d9d72"],["/page/4/index.html","396cf6750128fdc46669fee8da92be1a"],["/page/5/index.html","320dad8e78dd6ce355c3d9fc78e85a29"],["/page/6/index.html","d2a6543b1bb1ccd5d85d3bd849dfd295"],["/page/7/index.html","f2d58570337b6fe8f92b150b2a752f2a"],["/page/8/index.html","6765e6b54b8b34534853fe45f0e5cf99"],["/page/9/index.html","89f6c9052e056d7157110454093b584b"],["/pandas-data-preprocessing/index.html","ec4d8db91438327c14e3fe1ca77822f3"],["/python-Blog/index.html","fdc8e5f0827989b38d2bc57840acdef2"],["/python-yeild/index.html","bee75fc78930a39d950d6c1f33802c8e"],["/python爬虫教程/index.html","280ab84c905f8321c73c11d34bad2320"],["/software-copyright/index.html","bffad76669abc7de687d49b837f5b6ed"],["/sw-register.js","9015a60041a6092c93382b4b6056ba98"],["/tags/AI/index.html","3bd5d474452e70076b25f7a9b5a94608"],["/tags/API/index.html","852a4589410377b3f0848afcee4d6aa5"],["/tags/C-图书/index.html","f901666aaafa9abae0efce58f710ccec"],["/tags/C/index.html","6898ff716c305e6c073ebd9577be0123"],["/tags/CNN/index.html","e7bb851c81ebb30e1b62fee80152b39f"],["/tags/Chrome/index.html","37720123834f5bb7a628265c0f326413"],["/tags/C✙✙/index.html","e169d99b7535612534f15914c2dc3abf"],["/tags/C语言/index.html","7109ab848e82adc6c2a9afecfa1f1ead"],["/tags/C语言图书/index.html","b823b061c5972739fe8a587da741ecf9"],["/tags/DSN/index.html","934f83635be05400d23fc071cb6968b8"],["/tags/Dll/index.html","83364de2613aa0ce57287a94bf91d731"],["/tags/ECCV/index.html","b7306b32e2658bcfc25715ee5789eb0a"],["/tags/EM算法/index.html","2c65de222eaa9c7cb8388e9dd23e1d2a"],["/tags/Eolink/index.html","1e15f93de9fe976e07028cf30f39b45e"],["/tags/Gitee/index.html","803dfdb4c358cc51c5671e303aaf0de6"],["/tags/Go语言/index.html","31f4d13e4aa689607123e627222b61f8"],["/tags/Graph/index.html","3f9d045e1f4ab1d39377e7ae1920eca7"],["/tags/HTTPS/index.html","03acd599da01a6b9b090373809f83a32"],["/tags/ITK/index.html","2201cb5c0789f22885bb8720d19fb712"],["/tags/ItkVtkGlue/index.html","0163e26d3601cfff5258cb0119ba0c57"],["/tags/JMM/index.html","39003559930b80efa581a2c424008e8d"],["/tags/JVM/index.html","e3c400a0890fbde97c66ab584af60f13"],["/tags/Java/index.html","30a85263c85e83d8e1d8fb4f33ea561d"],["/tags/Java/page/2/index.html","ed2cb87c492e80fa7c5dfa0ffd7acc30"],["/tags/Java图书/index.html","bac8641436de68abb80ede1c9d3bbab7"],["/tags/Kaggle/index.html","7cbe336fe80172ea334c77f2261908d4"],["/tags/Keras/index.html","818ef348e6afea0ef3ec97a23e1e5469"],["/tags/Linux/index.html","3cc50525b4098e6b01116344c91c9571"],["/tags/Linux图书/index.html","0d6b04153c984e9f553ae60278cabd10"],["/tags/MEPP/index.html","6abb90f9f6f8e6fd11365ac3d427871d"],["/tags/Map/index.html","878a52811d64eac70f28f18f7d6b1291"],["/tags/Matlab/index.html","a9102ba0c493fe0a94491f62b8e135e7"],["/tags/MongoDB/index.html","454c9713c906e02102a80e7cefd7abec"],["/tags/MySQL/index.html","8f8acc21c24f09bf69b5e40c6cf77422"],["/tags/Parzen窗/index.html","d3bc0b73a21db385a612afe8d40cdbe9"],["/tags/PicGo/index.html","019cbb56fce6c02ab1b49adad09cb4fb"],["/tags/Python/index.html","3ebde07875d957aa4f5ebddab348719f"],["/tags/Python图书/index.html","7e791ab32e8e13f241659cfeb0c3ec81"],["/tags/SPHARM-PDM/index.html","cfe08aab32c2e5c12cbe467fda954134"],["/tags/SVM/index.html","69ad01a9c1b37a215dc1d76a40a130af"],["/tags/Servlet/index.html","b7ae3810f59689a6500c362aad5943bb"],["/tags/Sping/index.html","cd5f237d287d589ff8b7341568740cd5"],["/tags/Struts/index.html","c21189a71afa08230d535ae20863b34d"],["/tags/TCP-IP/index.html","55e0abc683e07c7b2d71a4d8f7c4af3a"],["/tags/Ubuntu/index.html","8ff7391a8bb4a8f62f1f3c0346b29ead"],["/tags/Unet/index.html","22d1e5830a6e633dc5e0a5ebb295fa6b"],["/tags/VS/index.html","9afd99adb0226888e6dffb0ef396293c"],["/tags/VTK/index.html","7020d744ae626cf5764c2c49469f0464"],["/tags/Windows/index.html","ded0c66603da241b394b4e1af64e60e2"],["/tags/edit/index.html","55187f934e5e48b88b9b4685151881ff"],["/tags/hibernate/index.html","e38899e0ab16d76a75c6f62265bb3e6d"],["/tags/index.html","970c2128e29a875e678046f50c9f80f3"],["/tags/itext/index.html","c373b051a870eed3d655e3991b28d016"],["/tags/jdk/index.html","0b83a28c2f297d097f9114997add2161"],["/tags/kmp/index.html","7fdb3ca59dd08adb68231523ed8b441f"],["/tags/k最近邻估计/index.html","ae6fca9e79c02de8c8e326e803b52c44"],["/tags/lombok/index.html","f27be2553c41e54e5fdbf41742cc6f99"],["/tags/offer/index.html","2bb69f8c85d81d86052bf166d5566d4b"],["/tags/opencv/index.html","afbdd0450b3c7e1858093061f3bd0609"],["/tags/pandas/index.html","e8c1bfc9a43e8679930a69349f26e041"],["/tags/string/index.html","c63bde37cc1e00d497e52ffa885417e8"],["/tags/vim/index.html","ac3c763f6db6c22a83598bfd2f094230"],["/tags/vtkPolyData/index.html","1d5ee3afacc2121f89ccbc6b5839d019"],["/tags/web/index.html","56e4027b9aad6d19919392a9e339c88a"],["/tags/xshell/index.html","9236719d3c6002b6b015191caf0eacaa"],["/tags/yeild/index.html","419311c8eaced9ec59e0be0ba594f3c0"],["/tags/互联网/index.html","368b82e63ff3082d367b275f49785726"],["/tags/人工智能/index.html","234dbcc5d32f431dee4e76f0d8b9da6a"],["/tags/体绘制/index.html","9b57562e9fb4b60ef4271454a1bd40e5"],["/tags/全卷积网络/index.html","0870dd5f778d52ed702f629f06122005"],["/tags/公众号/index.html","24681a5358fe6aaa12581e1f4cc4b6be"],["/tags/内存模型/index.html","3ae569ea4da13bbe0acf5de2db187e8a"],["/tags/内推/index.html","aa5d6b758885c7ba8edbbeaf616151e2"],["/tags/函数/index.html","5e8c8049c86faebc70d8085726c522bb"],["/tags/分布式/index.html","24794a4131ed1f488b7e24c8a8b1d415"],["/tags/加密/index.html","9e9adc4c9a1e45beee49b0649727622d"],["/tags/医疗图像/index.html","acfecb907c08625a88b8f254789cd1ef"],["/tags/博客/index.html","92eb01c8e5bf2a321cda9fd9ad12aa80"],["/tags/图像处理/index.html","eaaca37e7a10b25e1ca1d2ef6011ef2a"],["/tags/图像数据/index.html","1c46299e780827fb73a579f788eed86a"],["/tags/图谱分割/index.html","2bcef7815d9a2c3bc358cb664b5c8ae3"],["/tags/垃圾回收/index.html","d878a410808e0a4e9f8522b032c5dc31"],["/tags/多线程/index.html","32329ccfbbd73eab346072b3596629b0"],["/tags/字符串/index.html","baa707a3c824bc9bc468f4a5b6eb47db"],["/tags/工具/index.html","9e3614b8f70e392b4f537ffc8849a348"],["/tags/工具/page/2/index.html","8da35a25d03ecc5ea87acf8b746dd283"],["/tags/弹性形变/index.html","4cd2f6c9a4426861fa819213c71ff8c4"],["/tags/排序/index.html","93b831497e2b433c7be8cf8afefd839c"],["/tags/搜狗/index.html","0c5e854d0222837e5de50815b1a1739d"],["/tags/操作系统/index.html","f82cb15ff4bc654a3b8b8527e4ba871a"],["/tags/数据库/index.html","2d9e7022f7d8fba7a61720480d40d997"],["/tags/数据类型/index.html","ced64be64cd470c3e22df91cf49d41f4"],["/tags/数据结构/index.html","3f764f3cb9e1ee07b1e9f5f3fc860d3c"],["/tags/最大似然/index.html","7fe638a0f33f7c01ff627eefb824eb79"],["/tags/期刊/index.html","774581f2d0206bedd5446bde6af38adf"],["/tags/机器学习/index.html","1224da6f7b0cc585bc660750937e72ef"],["/tags/机器学习/page/2/index.html","21b681c31f51e30ff4b5a829a26f3d53"],["/tags/机器学习/page/3/index.html","0f193c1b41f850803802c444c3c921d1"],["/tags/机器学习/page/4/index.html","f43fee1b22dce41c815057ab94e66cef"],["/tags/机器学习/page/5/index.html","8df5f6683d40b558379b77c638a8c4ba"],["/tags/树/index.html","6ab7e813631c2b1ae6fdd21057e40465"],["/tags/框架/index.html","9a9d8c6c65d1ac7f2dc3be885555a6d7"],["/tags/求职/index.html","1e07a9a05331a9e24af4f6dc9ea33857"],["/tags/汇编语言/index.html","4615631434e659731085f9f1a0bbe4c8"],["/tags/深度学习/index.html","c4df01f7d60e782634094456b0302784"],["/tags/深度学习/page/2/index.html","9bdc8585c39088f6374094fd2e2677b0"],["/tags/深度学习/page/3/index.html","68e90025adc0054b0caae5d766547b21"],["/tags/深度监督网络/index.html","42fb2bde70ecb5a18cabb992476e075f"],["/tags/爬虫/index.html","503dc7b4b49019c86474e2ac91ef534f"],["/tags/电子书下载/index.html","a69cca1493d62e3419fc6ab17fbfe9e4"],["/tags/电子书下载/page/2/index.html","cda13701406bcf0d74c1cda57492e8ec"],["/tags/程序员/index.html","d616f82a8044422206791e0c46165402"],["/tags/程序员面试/index.html","34811726d7b5843598e44b7c04f04b4e"],["/tags/简历/index.html","9f385cf7bff242a2dcad6060651b0f30"],["/tags/算法/index.html","16c9d0bca4c3dbe863bb5e67459b8d35"],["/tags/算法/page/2/index.html","3c1f95ca6bfdc9d29b64a5adf7904a7e"],["/tags/算法/page/3/index.html","69bb07ef0fa27191c7e66fce22dac5c3"],["/tags/线程/index.html","c25c54ae78dfa0cc7a9516d4c5f96ed8"],["/tags/结构学习/index.html","85abf45c1ab0713fecafb36d45e06076"],["/tags/编程/index.html","490bcddab35177f07f2ac58f553eaf1c"],["/tags/网站/index.html","11e15ad14a674d6b02ee30a94d5e7f8c"],["/tags/网站/page/2/index.html","15ec261f610990a57e878db62c0421d3"],["/tags/网络/index.html","6e88bde268ab762971989560ea819871"],["/tags/网络原理/index.html","caa60155bea677f357902fd6197b50b9"],["/tags/肝脏分割/index.html","53abe2236f94f28eca88668cb835f2de"],["/tags/计算机/index.html","911e78f3114b9ff45f64f24c0caab98d"],["/tags/计算机专业/index.html","945efe63ecffa976adafcfce1208c683"],["/tags/计算机网络/index.html","09d82d06b67668778d85915e830eed67"],["/tags/设计模式/index.html","b44d344b8b8f566feaeb259ca8ff1d71"],["/tags/贝叶斯/index.html","e0f6b8bf2d5bdd41c83b4710a32538d1"],["/tags/迁移学习/index.html","40989e83410679bed7fb127096aea35a"],["/tags/面试/index.html","b6f8e638204862e7964f91b2a9a32ab3"],["/the-way-of-pragram/index.html","e8ae6c09c09a5febb1bda0e1ce5f2e94"],["/untiypro XL安装/index.html","62e7386aeeb66fdf5fccb694101bbca9"],["/video-websites/index.html","535b55b7459879221bd43c4382471ab2"],["/wechat-fans/index.html","772c59628a2ed165f76095f8c3e8ef6c"],["/window-run-VTK/index.html","223cce7f5d56d6bf8010674b2b72336d"],["/xshell-connect-Linux/index.html","1d837139ca246f2a9266e3945d565c2a"],["/‌Accessing-the-Open-Internet/index.html","e34bc74ae68fe55efce53a887c23a00b"],["/《Java高并发编程详解》，去大厂必看！/index.html","9786467d7d672abfb7cc278cd949b6ba"],["/一分钟没了 1.5W 。。。/index.html","b027a16f77747c25fdcabd43ca7c440b"],["/一条高产爆款内容生产线/index.html","af0c6a1a02f40cf0ddae02537c8a287a"],["/为高考学子推荐的六个就业前景广阔的专业/index.html","4311d74815699e2dddbf850469f91eb2"],["/互联网赚钱机器---社群/index.html","7d2af5383fcd319addebf80d2cdd5adc"],["/你们常用的工作方法和思考方式是什么？/index.html","b8e76232429a9575c1bca843db2db7dd"],["/关于环境配置的一些事/index.html","55aac2c1674122862f9165a07ae8c809"],["/准备了19w！搞事/index.html","11bf12768a88cc73aad0ab56600cc306"],["/几个很重要的感悟/index.html","6c6110994b6c04431f2a37812c2cdfb7"],["/分割ROI篇/index.html","3e77f3e988f837a82fd240aeb3b8f5e4"],["/分割精度说明/index.html","7741369184d3a67049dac154688eba79"],["/分块程序执行/index.html","66ec5fdd89782ecb4522e08eed4c4521"],["/加班公司黑名单！！！/index.html","28a149ef595694ae7b22ac59dc3ed98f"],["/卧槽，上知乎热搜了！/index.html","81983d8d1176e9a1554f311eff8d10ce"],["/卧槽，我的小破站爆了！/index.html","d1e735a59cc7c810ad3b217ccea0c667"],["/卧槽，我被盗版了/index.html","0b7d5db5317ea5392b870184428c13ac"],["/卧槽，还有985大学在大一上C语言课？？/index.html","3d7421077c5de60178f9f46c3fc107f1"],["/历年微软面试中出现的leetcode算法题/index.html","a418c6b30fba1a0a334d762c11b4657b"],["/去特斯拉试车了/index.html","9f665c3de6637b13ab7c33dc6bc4ca09"],["/吃苦的三种境界/index.html","a5a2c660030fae6932a29d7e499ce04c"],["/哪本书适合推荐给 Java 初学者？/index.html","f8fc258f570c984d91f8deb931a2033c"],["/哪本入门级的学习数据库的书最值得推荐？/index.html","3002e5dfdc4e50f1a2cfb1081e7181cc"],["/国内外常用的AIGC模型/index.html","e3678dffaf991c972965df1605a44513"],["/国庆假期/index.html","09a4cc0e47da684e7ee07e13d4ce0c8f"],["/图谱程序字典/index.html","def7b0ee9418ac1fd22a7a4e787169ae"],["/图谱训练与分割/index.html","5e5cc49438d3190afb30a6a53ef8b359"],["/宣布一件大事/index.html","aad2ae67be442b1820129665e68b6cc1"],["/小鹏P7i试驾体验/index.html","f0e6c955f338a3a562efcdbbd7893e7b"],["/微信PC版3.3.0内测更新，电脑可以刷朋友圈了/index.html","9af360ad0ac91621c90e9038ba33fb70"],["/怎么更快的赚钱？/index.html","d62992e0d2489a83f50644586c81f3a8"],["/我毕业了/index.html","6efe0ccdd2fd7e0e3fc4cf238dd67363"],["/我！真！的！找到了！爱上学习！的方法！/index.html","9e50ba59ea768a10d4d7081bf4266f88"],["/户口的意义/index.html","50d1b17333f5d45112055d6424e286ac"],["/推荐两本经典算法书/index.html","0ca8f97798bfee672b5447e3b63b577a"],["/推荐几个在线学习SQL的网站！/index.html","ba31627988b783c8a0ea64f4cfbb79e1"],["/搞了一个程序员成长晋级社群！/index.html","560c8827605c447a1a24720632b12189"],["/摘抄/index.html","543da0daf38ee662078f03dda62d9fdc"],["/暴跌30心态崩了/index.html","6cff7e76d73aae526672391539df5b25"],["/最近很火的ChatGPT到底该怎么玩？/index.html","301941c879a647628a5fd48ef73538ad"],["/有哪些好看的日历可以买？/index.html","b8e709e4428fff28c1a31a65aaa96dcc"],["/服务器有啥用/index.html","b870a3ed6af46fd9381d9ce64d6cd220"],["/来长沙了！/index.html","3ac40ef0ca10de2e2a135831c3ebbaca"],["/校招污点公司名单/index.html","3f19d43b5585ec1fa7877c1121d82a48"],["/梭哈200多万/index.html","87b3acd640d9393bf920476bb93dc5b4"],["/梯形图入门/index.html","cc7fdf03d682ce959fd44dd05935390e"],["/橙心优选，凉凉了！/index.html","bafd7caa9cb0e34c08242b00e33c9ce2"],["/比亚迪汉试驾体验/index.html","36d27f455c00be0a04147a61a8b3bb7f"],["/清华转学成电，真的牛逼！/index.html","d82bce9905c25dbacea4f19178a6b7db"],["/滴滴程序员被亲戚鄙视：年薪八十万还不如二本教书的/index.html","e99b34d87e68ee01e5ab768a9243514c"],["/社群！/index.html","033a19aad58825a09eeb14b565f68301"],["/科学上网之VPN篇/index.html","5bf6b9287b74568ba0897958ed264ed8"],["/程序员必备的几个技能！看完你也是大神/index.html","5708edfe8ffb3b31142e9a20fd436684"],["/程序员绕不去的槛，Linux！！！/index.html","daf4d5435f2c7d34ec8d9a2aa727a96a"],["/蔚来ET5试驾体验/index.html","8ef0c3f1449f2b24b4028e7e63d04584"],["/蔚来，牛逼！/index.html","a6639f827cfa18339c65e3919da944f1"],["/被录取了/index.html","6b504cf520f0fce15c4c3f31736834f4"],["/被找事了！/index.html","4bc58cfe45c91a64ff80cb5ee687b9f3"],["/被拉黑了。。。/index.html","3e9a3b5f942f4a20e3c7ef5c651d2aa0"],["/被车撞了！/index.html","d87aa68693352cbeb23e64db3bf8d778"],["/该如何选购固态硬盘？/index.html","a7d119a26677679cc5f61cf8f65ea85a"],["/这本书一定要看！/index.html","8d0774c9f6b13a14b98a64a5e6d7cea8"],["/选Java还是C++？/index.html","0bd3eac8b8592f503fdc912e6fcca66d"],["/那些让你起飞的计算机基础知识/index.html","be8a9d144950b645936b528398560c27"],["/靠这几本算法书，成功拿下大厂offer！/index.html","387fb84cf3829d45f23b493074856321"]];
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
