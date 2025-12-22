/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/0010-city/index.html","6349a6bf52beb43debc85a1b3322e9cb"],["/10-algorithm-book/index.html","adb652ba7354019c9baee710a8e0db38"],["/10-website/index.html","15d3283155ff0d01d3f7cf49a172078b"],["/100万的小目标/index.html","01a8fd0e33e216e5db43c7dcde77cc84"],["/10w+YYDS！/index.html","715c2c198e65d4ed8972ba0305c4559f"],["/12-technical-tutorial-sites/index.html","616f83e332ac55500739fbb47929e5ae"],["/2 6 岁 了/index.html","1a10e359bcbc60b8ddb032e0a0f6551b"],["/200万，啪，没了。。。。/index.html","6d09e034dbdafa8536685b898edd4148"],["/2018ECCV-Paper-DL/index.html","10333775a941e2286ff0099ccbe45c37"],["/2021年固态硬盘选购最新攻略（小白避坑指南）/index.html","4bbdb08d2dbd883a9f256588888e7ad4"],["/2021机械键盘推荐/index.html","ef7312b20255ee82d91ef908d1407446"],["/2025-07-15/index.html","bf67d9ee61e7ceff9c75daf45a02c84b"],["/27岁了/index.html","3595638349fa55f51c1fef6b95a4c445"],["/3D-Convolutional-Neural-Networks-for-Human-Action-Recognition/index.html","caa8cf427fdb56d44fcbdcf13df6090c"],["/3D-Deeply-Supervised-Network-for-Automatic-Liver-Segmentation-from-CT-Volumes/index.html","fa665fc940269e55b9112054e7603723"],["/3D-Unet-Experiment-notes/index.html","c441756d394851a0c4908c5e0773e782"],["/4-Software/index.html","123096beea60b19abcb2a456384738a7"],["/6-website/index.html","1055de785aca394bfb20ba60967c7bc5"],["/7-terminal-tools/index.html","764451a481a2cb413da7751b668fa878"],["/AIGC中典型的深度学习网络/index.html","87a6c6bc02f16007e04bccc17defb46d"],["/Agency-model/index.html","503a24ad139f683c14ba6457bd34d1f5"],["/Algorithm-brush-notes/index.html","d98371d71ebdfe817ba1af45e9d7a2f1"],["/Ali-recruits/index.html","4ea75b4ec87ea88396d4ecd2741f9ca8"],["/Android-VPN/index.html","eb3fbf5e3e0bfca201aa5044efce577c"],["/Android-open-internet/index.html","9e84a5a620e23997c40fa7376259b065"],["/Appearance-mode/index.html","462f41554ae8580fc9956048b7554c0b"],["/Backtracking/index.html","ee8e9f1b8a49a7b930e430192bdd9540"],["/Baidu-Sao-operation/index.html","942834eea8f2e89d7951f8196a84b463"],["/Batch-Normalization/index.html","34b08e9e88818567613f33f34c18c05f"],["/Best-AI-tools/index.html","73198d504a2bce724d4b8a44f71a50e7"],["/Bias-and-Variance/index.html","d25d826777e082cae31ddc12376f6d99"],["/Binary-tree-traversal/index.html","1be6fa494ba618bb96c5ad4c74df44cb"],["/Branch-and-bound/index.html","0ff85197d006bc63b4a16d264017d4d7"],["/Buying-computer-for-the-first-time/index.html","44deb3c61c660d7b4d73e750e734aed3"],["/B站向北邮道歉！/index.html","9b196ee4f6dfe42deced2c6753fd456d"],["/C++-string-function/index.html","1f451932042eb13f627cc1ca33785360"],["/C-Java-DevelopTools/index.html","6bf0d38ae4095d5c3fee4d7618d5f300"],["/CS-Classic-Books/index.html","f28e713274afc882ec744a6f211cbbae"],["/CS-network/index.html","ae7533f3b3b443d1cdc19dcc39aa9c7c"],["/CSBook001/index.html","a3dfb32b8e6665af1fb823222c052b33"],["/CSBook002/index.html","be9bac748f14b808f6784681afd980af"],["/CSBook003/index.html","59a1fd554fe26058d98757001e156134"],["/CSBook004/index.html","2cf349c2e7b3cbc929928c78eaa06496"],["/CSBook005/index.html","a06a3cb24e2cfbc83938fdd4341f8790"],["/CSBook006/index.html","c967ca2c294f54b98a129c914ebc59ee"],["/CSBook007/index.html","ca92e706544e206cfe41c81f5404680a"],["/CSBook008/index.html","16176f4a1ce0bb9ce6da46ee8e3ebeca"],["/CSBook009/index.html","602eb88e870e3473afaa86f3d9665413"],["/CSBook010/index.html","2172e0c6337a164b02003eac0af17861"],["/CSBook011/index.html","eede61e65e5de7ef76e2a28d9496c2ff"],["/CSBook012/index.html","99122e3c39161e1db4416be14a0c05ac"],["/Changsha-really-fragrant/index.html","f90d165e85c6fefd32f1a25da5c0554d"],["/ChatGPT-VPN/index.html","246a67cbc91e945162af7042baceb769"],["/ChatGPT/index.html","a7cee1210a36ab795a5a3601ae6780e7"],["/ChatGPT！王炸级更新！！！/index.html","afdd276c6fddf443dc3e311da2ae16f2"],["/Chrome-crx/index.html","818f03d1c5ca0aafd087ed5ca47a6732"],["/ClashForWindows/index.html","989e70d465b54847ec1ae220ce5dac53"],["/Computer-Classic-Books/index.html","a31b978e510b14c20d83dd7057feb10b"],["/Computer-for-another-major/index.html","6ab58c39b009a854f9f0066c4edefcfa"],["/Conditional-confrontation-network/index.html","0042f977603c8576b846d2be7c60d6b4"],["/DNN/index.html","cee338be5133e6d9484aa5218e2a08a3"],["/DSN-segmentation-liver-experiment-summary/index.html","33394e73f0110f40cee08309e6e0b37c"],["/Data-enhancement-elastic-deformation/index.html","9326b064c27253385573d120fd0dd0f0"],["/Decorative-pattern/index.html","c3932c149a3e89166fc7c6e2e121a6f2"],["/Deep-Learning/index.html","145f2b0dcfecf447bdb8dfa71229bdc9"],["/Deep-learning-and-medical-image-analysis/index.html","d4e1fa4032fbdc18211e302ce518f880"],["/Deeply-Supervised-Nets/index.html","9075232a55cd79b67a08a0bda729c11a"],["/Deformation-model-based-sparse-representation/index.html","af30352b5335dd60fa6d4f95517b19d6"],["/Discriminative-and-Generative-model/index.html","3a03792c66252425451d1140389311ae"],["/Distributed-transaction/index.html","9fa6c08668679a245e4dcd484ecb6c5d"],["/Divide-and-conquer-algorithm/index.html","6d533662af6a37622d3738c51b3e18e9"],["/Dll/index.html","b3615a662620c3ae7ced8ed86f3ffbc9"],["/Dynamic-programming-algorithm/index.html","ccd8b8d1eef7a9526145791a00aa9647"],["/E-book-download-commonly-used-by-programmers/index.html","206bb7a8a0136cb8b80e32d566133943"],["/EditPlus软件的安装、激活和配置过程分享/index.html","bb436ff5e34817d2d09ad665d675f5ff"],["/Eight-sorting-algorithms/index.html","1549b6a1ccd148182421daac24f7d45f"],["/Encryption-Algorithm/index.html","66d752677938a0af6877a8faf93010d1"],["/Eolink/index.html","fc0ed4b2960bc0a3920adfc3ee4d7c11"],["/Factory-and-strategy-mode/index.html","e969abf77fe523129b0447de9246f182"],["/Foreign-technology-blog-community/index.html","ae27adf2242c7b73818ffb53cf14e153"],["/Functional-model/index.html","48c56b771578e9eb2d617a26dd712dca"],["/Fund-type/index.html","6888e2a6b6d6b3a43413684a719206ae"],["/GPT-4o/index.html","4b54e0d074118d776d57f9395510e893"],["/GPU-medical-image-processing/index.html","32608b3ef824f3604ee06b2dc1fb14f9"],["/Gemini/index.html","c4ae2ca2750dd1032e4663c890b34aa0"],["/Generative-Model-of-Unsupervised-Learning/index.html","84fc824f8f384c4205e7e3228a24f885"],["/Git-Learning/index.html","9016db30f578a8fea228afd782fe4c04"],["/GitHub-2FA/index.html","1da722349600c9ccc48b5300be9f309c"],["/GitHub万赞，程序员必看操作系统总结！/index.html","1ce3ca3f09e2e27301641e65b610acd3"],["/Golang-book-recommend/index.html","ea9ccd369efb834ea0320b7d95a8a768"],["/Golang-learning/index.html","6d693f8035316ad2d1d5f04b3f1d1d42"],["/Gradient-descent-optimization/index.html","0dd965c49dbdf42333163c844b7655d7"],["/Greedy-Algorithm/index.html","3772cfc7ed8786ceeba28393fb4b5e8d"],["/HK-bank/index.html","7498f85b315c3c7a6e50c8aa7f22807c"],["/Head-to-head/index.html","f8795a88e980b27f2c86a63413dc58ab"],["/HexoPage/index.html","57f02e8641009fef91432852f9c626e0"],["/HistCite-Pro/index.html","4632452b36f560e83cab578ea8c633f8"],["/How-does-the-program-run/index.html","4a1ecfb2790add582f0699c05492fd2d"],["/How-to-judge-whether-technologyisreliable/index.html","131aa168015b9339391a42cf613d31ea"],["/How-to-learn-design-patterns/index.html","c187fd39ca87dfeafddaf2eac7e91b32"],["/How-to-learn-design-patterns？/index.html","46d7d276b35e6d6c44fc1452372f86ae"],["/How-to-teach-yourself-programming/index.html","d0057e0c06c7d316993c47804157766e"],["/How2learn-Python？/index.html","257f6ff4a99334a9403c059fe41e930f"],["/IDEA-shortcut-key/index.html","1b577eba578162062578a082ea9521d1"],["/IT-interview-basic/index.html","8e88af13d137d9e998088fad2423c874"],["/ITK-VS-install/index.html","83615cd632a350d076d56a8ab35a47d9"],["/ITK-VTK-ItkVtkGlue/index.html","026c6f7abc69da45a2b0d5263cbc04f9"],["/Image-processing-plus-noise/index.html","722bd02f4711035f3a033b7b774c4bb0"],["/Inception-Going-Deeper-with-Convolution/index.html","25f47270e72c516a7cd10e4ac8d2e892"],["/Java-GC/index.html","b6a1a7c31cc166ad65fb486f955ac0f1"],["/Java-Servlet/index.html","d6e4027113136384aa259f14e0741a07"],["/Java-array-and-collection-sorting/index.html","ab344d4f6c94268adfad54f96fe3d82f"],["/Java-development-tools/index.html","97dec67e38e29e8da561fa9459ee4277"],["/Java-eight-data-types/index.html","3376903f7f9b648eda15238a1c31154c"],["/Java-interview01/index.html","e851ed86dadf90275811585706ab6a7d"],["/Java-interview02/index.html","3d0685dba4a1eb5166eca7b7b4ab6c6b"],["/Java-interview03/index.html","bdc6c2b9ce26cddd55608517b377e8eb"],["/Java-learing-map/index.html","52e588dcc04c5f8307d15b9e0e620e0b"],["/Java-learning-route-map/index.html","a9f60b9ed46dec008a091e8baaa75100"],["/Java-memory-area/index.html","e228d26fa13b0ea66af94ca4f4e6b1fc"],["/Java-memory-model/index.html","e169c7fef5a87e98c9648a7605c952f0"],["/Java-multithreaded-learning/index.html","93e9f5c10e671d2492d30ffa1713b2c1"],["/Java-project/index.html","e4c8fa9e3ed41f85aa45d92c5677ef4d"],["/JavaWeb-Chinese-Garbled/index.html","0248c93d193672b49c6d47dd9aaec368"],["/Java还是C++？/index.html","dfbc813a96ada804b32570922d90031d"],["/Kaggle5-step-guide/index.html","5d036a23cca8d39fef158776651fe522"],["/Knowledge-points-of-Java-garbage-collection/index.html","c60b0de0ed5e0fc486e4ddc1b697194f"],["/Layoffs-and-Hiring/index.html","f520b9fa5a435e983e7cc2bb6ddceef5"],["/Linear-regression-of-machine-learning/index.html","f9883984b8e5543bc49d622d642b3935"],["/Linux-Compile-C/index.html","ac992cc556c69d6cac46c41e81a53c27"],["/Linux-ITK/index.html","95dc65d17d3e0be9a1a81a33a36f0454"],["/Liver-segmentation-of-sparse-components/index.html","03c9cdb3c830d188caef816ae6ee0eb8"],["/ML-EBook-paper/index.html","c34ab08439c06c9fd4a06d1b73e09650"],["/Map-uses-multiple-maps/index.html","96e6188810d9d09c08a3b9c818cd1ef3"],["/Matlab-Graph-cut/index.html","471b2d2a5953c566f55972f2d427cb88"],["/Maximum-Likelihood-to-EM-algorithm/index.html","0c05104e6a8a81bc8d04ddfa239cf725"],["/Mean filter and median filter denoising/index.html","2af14f2e881e922cd6533276632012ec"],["/Medical-Data-for-Machine-Learning/index.html","1c63ffb5fee4d1faf8bf41d3063429dd"],["/Medical-image-analysis-deep-learning/index.html","ca8089b6aa9074615b1bbacd20cb4c7b"],["/Medical-scan-image-processing/index.html","fd8876e39c259fb2946d50f4a4b1a972"],["/Merge-sort-algorithm/index.html","3228a2fcc6551c0090f6a43519002d1b"],["/Monthly-income-2W/index.html","7f609ba6506e0a9037d091166e7bd5e2"],["/Mysql-database/index.html","8b3feefe79a2ba09b13006dd47765698"],["/Neighbor-Embedding/index.html","4bba6c88a134808202815079143dff8f"],["/Neighborhood-approximate-random-forest/index.html","20e0b8ebcb6155fbae70e6db408678f4"],["/Net-and-official-documents/index.html","a0233ae9708f331d372cfdd5bf778148"],["/Netflix-VPN/index.html","51b63c623ec122949801090bce373bf6"],["/Network-principle/index.html","c880bc26b62fdf0466cc8819b7ea8155"],["/New-Hong-Kong-stocks/index.html","0f378305580dbc984d1718546290ce45"],["/Nice-to-meet-you/index.html","fd473657a8a3a3ac623b3e013822eaab"],["/OS-processes-threads/index.html","a568b38032dc10f86d992874e7102473"],["/OS-run-environment/index.html","58c0bd2ddd68946867cf851938dc57e1"],["/Open-Internet/index.html","194b64c44a609dac22c01662cdf04d02"],["/Open-Internet2/index.html","2ff5d5bfd7235364bd1f03fa0a07cbc1"],["/Open-source-community-and-rewriting-website/index.html","4bdf05d8cab03635419e08394c7afb64"],["/Panoramic-image-stitching-based-on-SIFT-features/index.html","1eb9fefdc0ee8dfc9b1962bba8fad8e9"],["/Parzen-and-KNE/index.html","c0222fb303cc2d3731272769663b60c4"],["/Personal-technology-blog-site/index.html","53daa845a4b8aa2115a1dab0f79a20f7"],["/PicGo-Gitee/index.html","0782ee614c51f2f275f00206780ad669"],["/Programmer-treasure-chest/index.html","85cac5529058933b2d8f5fe9d4ad1574"],["/Prototype-mode/index.html","8fffdf22a4a7282b28026c2acc2afc6e"],["/Python-base/index.html","9101e99c2d6a2ebebf71ec9229965755"],["/Python-crawler/index.html","bf976b68c2ae64e45bad1725df927cc6"],["/Resume-revision-suggestions/index.html","36afef0ae6cb42ddf108266d757a6c27"],["/SEO01/index.html","cf01e12f9bffb3899bcc0e7f8929e931"],["/SEO02/index.html","47e911025f1cd6d4d29180e082e436e8"],["/SPHARMPDM-MEPP/index.html","14922a7da791d3b58dd5b602e092aa0c"],["/SVM/index.html","586b3af495554ee9147a5263debe1e7c"],["/Seata/index.html","c0c67e8509f146a043cf60ec8377814c"],["/Semi-supervised-learning/index.html","da83e0c980c5fa6f0e5ebcef27ef5edd"],["/Sequential-model/index.html","85c76bfec92f08527077ba4ba1b3ce6e"],["/Shape-Based-Human-Detection-and-Segmentation-via-Hierarchical-Part-TemplateMatching/index.html","5b745c7006fc07be06c402de64dafb18"],["/Spring-basics/index.html","b8ef2bdc3a6fe8b6624a1fc54fada625"],["/Spring-integrates-hibernate-Struts/index.html","ed4c6dffeed4992d7d8b7fdeba42b45e"],["/Structure-learning/index.html","3f8bf7f6d38ed688ae43fc6b47621eaa"],["/Suggestions-for-self-study-of-computers/index.html","d7e12ad19df44181f992c80fbb38682d"],["/Summaryof-HongKongStock-Account-Opening-Links/index.html","eca7fa1fb61288373a1a3ca222822c58"],["/TCPIP-detailed/index.html","f26146586c78afbd0fa0dee015909253"],["/Telegram-VPN/index.html","6192a8fb406ea566cd6167a853b7599c"],["/The-essence-of-shopping-festival/index.html","cd7c3f8ef388d67a57e39f3b02784f4c"],["/The-most-important-investment-in-life/index.html","1e51ed0d28249198cc1e3439f2327846"],["/The-most-successful-nvestment/index.html","d22a8bdcab3e0a22edc50fef24e88512"],["/Transfer-Learning/index.html","07bb0f38000c77b54c0ee398f27255e1"],["/Transfer-to-computer-major/index.html","9bad50c1fef00f4eb660242ccdaa87c3"],["/UNet-Convolutional-Networks-for-Biomedical-Image-Segmentation/index.html","05d594255daba51aa62ae546dbc71cf4"],["/Ubuntu-install-sougou/index.html","975ad0b0220e3bf84e14d756fb676a3d"],["/Understanding-of-paying-for-knowledge/index.html","b3e5b3e8c5b41ae06ffd39bb84a8624d"],["/Unsupervised-Learning-Linear-Dimension-Reduction/index.html","fa60646d7b7ef1ca4d476ed6263facab"],["/VPN-HELP/index.html","ab6aa6c6ccdab53d2dcd0b5e573eee7a"],["/VPN2025/index.html","a73dcb43bfb762d58d9c98d90a35013d"],["/VTK01/index.html","5fdde1271e86d5cd95d1770ae2e425c6"],["/VTK02/index.html","e445a00b161666b03a5adc9c4b750037"],["/VTK03/index.html","af94ba7cb4519fe718416347bb69f1c2"],["/VTKRead-write/index.html","ee2369313408ebdcd6361c3570d0719d"],["/We-are-all-good-kids/index.html","a56c994abab8b13eaa28592c343a0c80"],["/WeChat-80/index.html","f89dcf48982f70fdbc9baad0ef54f2b4"],["/WeChat-red-envelope-cover/index.html","51aea789c250642d0c639f06614e1b3c"],["/What-is-crawler/index.html","8383ef219e3b84b9f8de5cc67e06047d"],["/Win-OpenInternet/index.html","88e27424f17a104437360297cebd5eba"],["/Windows11-2kfans/index.html","e151a73456b9f2147567b3dec6e04788"],["/Word-Embedding/index.html","6124510c45f57455d64ffc399f9b6c1e"],["/YuanShikai-and-his-Beiyang/index.html","7f3cc6707d180f5448354b9e7a7cbd61"],["/Zero-copy/index.html","af97315b845ac017b78dc61aac7edd22"],["/about-keras-model/index.html","58c5961c7a784abc3d1080d5ba8037a6"],["/about/index.html","1b2deafbbb6033fdc9ef7db8d13986ee"],["/algorithm/index.html","b3c6764aeff4ef27135cfd96be47b699"],["/alibaba-Java/index.html","5a37ce39b46149fed76ffe912675fe3d"],["/archives/2020/01/index.html","798c2099a6d3896d075f70a7ab4abcf0"],["/archives/2020/09/index.html","afa5a0c99260bc39f3fc307976085576"],["/archives/2020/10/index.html","ba67bf4965aae78b842771f17f264a61"],["/archives/2020/11/index.html","3475fd3717c23a3cc7fac090995c3b13"],["/archives/2020/11/page/2/index.html","949d867293febb5c65b17d681b0d21e5"],["/archives/2020/11/page/3/index.html","504ff72ff3f54d99022aa8a549720120"],["/archives/2020/11/page/4/index.html","d0ebb7e1325c69e183267e16545a3ba5"],["/archives/2020/11/page/5/index.html","52a2062d561a6ea55d10b346b4b1d3c3"],["/archives/2020/11/page/6/index.html","5472c97b39b0c3dc50982e768a64bc30"],["/archives/2020/12/index.html","75a13953e4fd2dd219164f3b3fcf997f"],["/archives/2020/12/page/2/index.html","eb1274dc0dc136c449afaaeb2e49e679"],["/archives/2020/12/page/3/index.html","e1f9f13a7931749724893168cb7b4869"],["/archives/2020/12/page/4/index.html","8efd73015b0220d527b968e4166a6568"],["/archives/2020/12/page/5/index.html","25134ced3c60391a2de6453ab7f5ca1f"],["/archives/2020/12/page/6/index.html","d3160dda6e42a3efab2f9aafe0290172"],["/archives/2020/12/page/7/index.html","a2a3d069d5aa3f01c62a242509c4a809"],["/archives/2020/12/page/8/index.html","9ccbf7712e55598a9d7e49ecb02106c1"],["/archives/2020/index.html","74aa26562678234c84e6e636d3440253"],["/archives/2020/page/10/index.html","b8a8142df65a897d8e4757e1fd9197ab"],["/archives/2020/page/11/index.html","127b01037f9bebe88eec3fb4cce67e02"],["/archives/2020/page/12/index.html","b5099cf7202121294ca46e9c2f02f888"],["/archives/2020/page/13/index.html","4b634aa5cb7add3c204c0b0f2e67fe28"],["/archives/2020/page/14/index.html","61c504d93c69184542057ae6fb5caf42"],["/archives/2020/page/2/index.html","9b39e5bace0000bb45bafcca4cd2e917"],["/archives/2020/page/3/index.html","ad2e40a94002b50f1018c1f8b736b10a"],["/archives/2020/page/4/index.html","beeefbb59ef135000edd4b88ab784351"],["/archives/2020/page/5/index.html","ee0b20bb89a0acf0d22ca450e6377729"],["/archives/2020/page/6/index.html","a4bdf8b788395412467542053eb5efc9"],["/archives/2020/page/7/index.html","99e3d67f65e4d19f6cf3c29968678234"],["/archives/2020/page/8/index.html","55ce4ef83c035cec1ac329c1f7998537"],["/archives/2020/page/9/index.html","82b1dd80d142291db5198f31c42c12a3"],["/archives/2021/01/index.html","5ab621406491792cf512ae863a3867c6"],["/archives/2021/01/page/2/index.html","3a514a7ad8ab6e9254628fd3728f9774"],["/archives/2021/01/page/3/index.html","7e3df6973c4326b0b050c27ee3fbcf96"],["/archives/2021/02/index.html","79869f03a3dafdee847629434e70fa1d"],["/archives/2021/03/index.html","c046f4d576cc64c3760a1ff61ebc2183"],["/archives/2021/03/page/2/index.html","ad847d903e7b5dab266ec8a7cbc33394"],["/archives/2021/04/index.html","0744fe33efe02748361f541397838d39"],["/archives/2021/05/index.html","00e976f6a6f06366ad57a68754a7e6fa"],["/archives/2021/06/index.html","e3a164f8e59a13f9df10956a0a7b0948"],["/archives/2021/07/index.html","ef5729433aaa5827c109670faba08abf"],["/archives/2021/08/index.html","2ad9be6fea6de52c1666d669e7cf0911"],["/archives/2021/09/index.html","80da191fd46a3005f46c9014ba740aab"],["/archives/2021/10/index.html","90a8a0cef886560aaca10d00f1f86b0b"],["/archives/2021/11/index.html","356864577993cf6301b9c71837513b46"],["/archives/2021/12/index.html","04602c816d03bfa0edb3798abed41035"],["/archives/2021/index.html","ae7f3bfccffe91d16a28b5b359d9aba3"],["/archives/2021/page/10/index.html","f7f4df1391e21fc622f0eb595d7a8447"],["/archives/2021/page/11/index.html","ffd550223a1ed0c437aa76917e30d9db"],["/archives/2021/page/2/index.html","d67c30e69fb25c63456c5d4e7c6ed134"],["/archives/2021/page/3/index.html","561f3dc91fe3274619ab46a092268070"],["/archives/2021/page/4/index.html","d20edbb5b433481a35fa04628358d6e7"],["/archives/2021/page/5/index.html","bd9fd07f062cabae520f7e851015d8fd"],["/archives/2021/page/6/index.html","d2e4acbe50967c79b60e701a10db8ff7"],["/archives/2021/page/7/index.html","7eea2f2c704fc483a01dd3e28e7773e5"],["/archives/2021/page/8/index.html","c99f0c2122296893115f240b2a35c93b"],["/archives/2021/page/9/index.html","fccff3dc2c75d7f0215ca7a2dc5acb33"],["/archives/2022/01/index.html","db0029b6448f663560788269506a62cc"],["/archives/2022/02/index.html","626ffff2c0d604cd53f79bffe613f4b4"],["/archives/2022/04/index.html","fb1d95d593113fc3eb64b6b25b2f65cd"],["/archives/2022/05/index.html","098258d63a0d52895bf070a9d1dec573"],["/archives/2022/12/index.html","c99a5a82bd17ac930c8a8a646060e9cf"],["/archives/2022/index.html","71f64280db563ae434e772615869052e"],["/archives/2023/01/index.html","29697a0c5f1a1b5d2116e63efd8e41b3"],["/archives/2023/02/index.html","96cdd0b6e71e7bee7f80b25ad50d9d29"],["/archives/2023/03/index.html","0e9ae5930a0fa1ad1e304dab01d4ccb6"],["/archives/2023/04/index.html","be88e3333875ecbf3ebe0d0904673d0f"],["/archives/2023/06/index.html","f45d54094795c1437fb2c020ae5b15bd"],["/archives/2023/08/index.html","487e1b652d63e29bfca9c6e81bfec9ed"],["/archives/2023/10/index.html","583b26bec455a1d60a4888539e74c655"],["/archives/2023/index.html","af697f0a126251965d6193fbae81efd0"],["/archives/2023/page/2/index.html","3d97485a11385c9a38789a7bf0053433"],["/archives/2023/page/3/index.html","05bd6d4de29ee1bdd3d0bb1d76328889"],["/archives/2024/01/index.html","0520e0827cee067e23deba4f90cb178c"],["/archives/2024/02/index.html","9e4f2259cbef54a16e4f5b4013864526"],["/archives/2024/index.html","58ffe860abd9ca50b7782e142fd45ca5"],["/archives/2025/06/index.html","5a15d890580274ba8649a6e7a42c90b4"],["/archives/2025/07/index.html","0724b46435d200c74ceedbfc2e05265c"],["/archives/2025/08/index.html","8c3a7eb9cef8024b2cb55a9f858ab16d"],["/archives/2025/09/index.html","955b04745ac777fa3f2504c6c0b29bd8"],["/archives/2025/10/index.html","4544b7e544d667fdc25f2eef0c2779cb"],["/archives/2025/11/index.html","0a8132c96d8275da830be5a80ac86ce1"],["/archives/2025/11/page/2/index.html","019146360977621e91a6169188c67768"],["/archives/2025/12/index.html","0a4d072ff540e33b0d3269ff95bb53a5"],["/archives/2025/index.html","85ec2545ff5c5b5a69eaa8c1eda844b8"],["/archives/2025/page/2/index.html","e69661ac6057004b01d5077fc57618b0"],["/archives/2025/page/3/index.html","3c87ce0578b36240530b3f1def29245f"],["/archives/2025/page/4/index.html","f6b728f4141063c056a94865487c3db6"],["/archives/2028/02/index.html","ffd7c858a0afe7521b9eb15a8551e640"],["/archives/2028/index.html","98e7d56c572a1726c27caa027e3c8b98"],["/archives/index.html","f564acafb94a04c316da281e39c1b952"],["/archives/page/10/index.html","111011f7ae205608edd35d5ef0f37d6c"],["/archives/page/11/index.html","5d8ab9efd236da6cc43267d2d4f0044c"],["/archives/page/12/index.html","a6ccab36c5a1d046307faec38c22efc1"],["/archives/page/13/index.html","05d8cf0187efba0dce39ef063c45b3b4"],["/archives/page/14/index.html","127748d9a353192008655b292087caf5"],["/archives/page/15/index.html","2090cfd74220d7cf18ba44887538c73c"],["/archives/page/16/index.html","b4f1785898e6240044bf770720c06c3a"],["/archives/page/17/index.html","a7f907cd4d22dc14f3bad45d6bb8a1b2"],["/archives/page/18/index.html","c4fe9cb53f84e30d23726972be077e47"],["/archives/page/19/index.html","de684a0e1821abc5c68cb3a2133f42b0"],["/archives/page/2/index.html","213d12c2c5cdddc3ecdb790ec2200d41"],["/archives/page/20/index.html","41b4e9f57a4af1571898188a3845bccb"],["/archives/page/21/index.html","0acedcf23e6a73641ef333b3b70898c1"],["/archives/page/22/index.html","06d5fae56e2ff9e07886d5d2a944ee77"],["/archives/page/23/index.html","281b7fa8c4f38578452b33d8294dc8d1"],["/archives/page/24/index.html","28c3ac3fba2bca62e4a04251e7dcd76f"],["/archives/page/25/index.html","b4275770e4535a90fba5e6ceca0bfa75"],["/archives/page/26/index.html","b5018fca83b494467743c65d26a3c426"],["/archives/page/27/index.html","9d53a8d92f6209eadbe145d53b79c127"],["/archives/page/28/index.html","a8db63e79c6d26350c503927453aefa7"],["/archives/page/29/index.html","6d2a638ca9e71d5b86c5b5eb89865988"],["/archives/page/3/index.html","92129975415740c47a26e1754f1b8bea"],["/archives/page/30/index.html","1a78c47d50734e3974ff238496b14111"],["/archives/page/31/index.html","c92ce85c8ef26ebc3b38020efe99bbe7"],["/archives/page/32/index.html","0dc931c344454a0d2047b5708b40ebc3"],["/archives/page/4/index.html","c04809100e658804558d3fd224ca16fc"],["/archives/page/5/index.html","ab6cb1430aa4122de37de6d0c06784df"],["/archives/page/6/index.html","3309091116850c0b2402a7a250465b9b"],["/archives/page/7/index.html","cfa607acc0fe996232d454321db95677"],["/archives/page/8/index.html","d6c6ff3855f46e605ae4a9177223182f"],["/archives/page/9/index.html","03a2ecdf8287001639cbb78d0418659f"],["/baidu-search/index.html","e2498c2806f1e6fa55b79a6814bac8b6"],["/baidu_verify_code-Hh2fKNlEB1.html","8a906071a7cf7f0aa6d5707c469cc3e9"],["/be-a-programmer-instead-of-a-code-farmer/index.html","38bf9ecdf755b8c1bcfc035f305b59f1"],["/bought-a-house/index.html","b42eafe9c263535dd5ceb0aa109b90eb"],["/categories/C与C✙✙/index.html","2bcd0f5bcb37f8f8d84752b3b479e357"],["/categories/Go语言/index.html","0ad2138cc4c025257065c6ab9bf60c33"],["/categories/ITK与VTK/index.html","a4fecf0f944aabc99308ff590e0948a8"],["/categories/Java/index.html","0ecd5c79aef5bcbbe91ae96dce17ee9e"],["/categories/Java/page/2/index.html","2660574a8edcda7cb6ea05f9d8f8d084"],["/categories/Java/page/3/index.html","fc46c88758796ebff2c61f12340885bf"],["/categories/Linux/index.html","5408e024e2951f950f37bb144628698f"],["/categories/PLC/index.html","1c03d9dfc80eca67501376dc32b9dbad"],["/categories/Python/index.html","95e12a61c146201d14cc0c09ed2f8c73"],["/categories/SEO教程/index.html","e5110a399428301436a52a79289b4041"],["/categories/index.html","ede155d56135df5aca4694d7f8d927e6"],["/categories/图像处理与机器学习/index.html","0989fcebba4ccdd102d6c415d7f279ba"],["/categories/图像处理与机器学习/page/2/index.html","9db443b16b7147c0a29d90a471a001f5"],["/categories/图像处理与机器学习/page/3/index.html","c6e3209ae3f6bd02f2c4fee23a913fa8"],["/categories/图像处理与机器学习/page/4/index.html","aa7c7fd27d5bd9c9514853450b467092"],["/categories/图像处理与机器学习/page/5/index.html","dcdbccd93916853750f5a85f515de7bc"],["/categories/图像处理与机器学习/page/6/index.html","00e8fbae685a3a85982c72e6243574f7"],["/categories/工具/index.html","e67b3054d6106eb3d4e0b838ad2fc636"],["/categories/工具/page/2/index.html","8b2074c67af5278b2c5f360cb46ee73b"],["/categories/技术以外/index.html","04e904c96d670f6bff7d9edfc976f3b8"],["/categories/技术以外/page/2/index.html","88fff038894ae303b4e83d87bf9549bd"],["/categories/技术以外/page/3/index.html","f3f3e8f3030a2cb0f2d9aa2945b4de9b"],["/categories/技术以外/page/4/index.html","121ccf006192994d5ce1fbe6967ee632"],["/categories/技术以外/page/5/index.html","c190dfcd0af4460b541766268b255366"],["/categories/技术以外/page/6/index.html","61538cf572a57ed0326bc0a9ae0eba5c"],["/categories/技术以外/page/7/index.html","b08c39bb4725deb80cf4c64b14e46bf3"],["/categories/技术以外/page/8/index.html","455e5e1a847ad7cf28045339d0fe1bd3"],["/categories/技术以外/page/9/index.html","6bf954518b43f5bbb8ef7dab099781cb"],["/categories/数据结构与算法/index.html","d43dbd7b2428a2835eb697416a526bd2"],["/categories/数据结构与算法/page/2/index.html","8809894d642ca3641a186d7f86b4123e"],["/categories/科学上网/index.html","c4965152211eed3ab141c65629429587"],["/categories/科学上网/page/2/index.html","890d6a75a107a5afc89ae7e7f23d9811"],["/categories/科学上网/page/3/index.html","c46947ca94ab92b7272bdd2116c9f18f"],["/categories/编程经验/index.html","4da2e1a9599eabc41495b5924fee65aa"],["/categories/编程资料/index.html","68a6e9224e97beb61fd0e3ac1817409c"],["/categories/编程资料/page/2/index.html","89871e334cf4ff52575dd72e257f3c86"],["/categories/编程资料/page/3/index.html","1996d72f25df00e13b29994c0d58349e"],["/categories/编程资料/page/4/index.html","7f55d4af7e5d065dcaf878cf5b12bd24"],["/categories/计算机基础知识/index.html","c939af21b5c79bf042608e470bdf7cdb"],["/categories/计算机基础知识/page/2/index.html","b135e0b1ed733346de86f21b0aeed7ea"],["/categories/设计模式/index.html","c47a8a2f74f1682aabe751e282d2e02a"],["/choose/index.html","5593e416e51e77445904dda5e34b7b84"],["/choose2/index.html","d1237bf2ddf7cbc561f983afdd693118"],["/chrome-crx-intruduce/index.html","e78658d74f92192bbf79740c1abcacf2"],["/clashvpn/index.html","72343dfe2caf03c23f3eb42e05047fb3"],["/coder-blog-website/index.html","eb157ce134ad09fb003c528d3f227789"],["/coder-source/index.html","78e0fd340e864f0096a07c90b7324bb3"],["/coder-videos-website/index.html","9522b34dcd87fac27d29d4401e6fe1fa"],["/computer-book/index.html","12c69a1b70645476a5e1474575df2f6e"],["/computer-censorship/index.html","8c14590b0055e771f2db4748435b44f8"],["/computer-network01/index.html","11ad7c4948dc2e43419be63887537b98"],["/computer-network02/index.html","d0984270e8fbfcea3c948f214782a7f3"],["/css/main.css","bc32ad34ec4990d934c3c647bdb62f79"],["/database-Mysql/index.html","d76bd4cd310be95de034491c2b5d0b94"],["/eclipse-lombok/index.html","7e330a859b2d17e2901de39212bb1a83"],["/fully-convolutional-networks-for-semantic-segmentation/index.html","b9a2e92a4c17a5590c92bbe447008461"],["/great-firewall/index.html","d80244a00f201329305b35de0ead9996"],["/halfrost/index.html","802169214393d32bb9acf9774966386f"],["/how-to-signup-chatgpt/index.html","7141bf4ad7ee004db4783d85f495b882"],["/how-to-use-Gemini/index.html","da53f8036b236a219f14c7c60fcee273"],["/index.html","b39c0bb37a7094cf0ab182808110ccaf"],["/ios-open-internet/index.html","cfafcc49dfbaa5eeb43d0411d496d74a"],["/iphone-open-internet/index.html","fcb6c235ad0e817f0c4e603ecfa17143"],["/itext-makes-pdf-form/index.html","034a6a1b8a7b2b6cc2af865e7e995cbc"],["/java-Set-Map/index.html","d6fa586b7b06ab164cb0227b4c7bd2bb"],["/javaweb-server-error-codes/index.html","0ed8f1f3213de54d4b53580403a9d16d"],["/javaweb-source-code/index.html","bfb4eb04312672bf9874e837cd4137fa"],["/js/lib/busuanzi.min.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/js/lib/lozad.min.js","47904d34a224931dd1b615c59a3dbe3b"],["/js/lib/prism/prism-coy.min.css","0ccad54d95845901ead59bfd3ecceb14"],["/js/lib/prism/prism-dark.min.css","a4711d2957d6605eb5682bdd228cf123"],["/js/lib/prism/prism-funky.min.css","efedcdccd7a9ab342d2d9cacd24920af"],["/js/lib/prism/prism-line-numbers.min.css","38e22e790c279bb56f9ec4b90a2a2d58"],["/js/lib/prism/prism-okaidia.min.css","5ac6f9de996fbec68aaa106dfb16e061"],["/js/lib/prism/prism-solarizedlight.min.css","ecc7e64d039873ffcf7fb27babdaeb5a"],["/js/lib/prism/prism-tomorrow.min.css","456af2a14ae4f5089939d5904ac40fe8"],["/js/lib/prism/prism-twilight.min.css","ebb5c355332a8cf9a1ce37a2a69d678f"],["/js/lib/prism/prism.min.css","a5234d614834658887cec6a9515890f8"],["/js/main.js","052d2b299d9c750afea8df0b802ab7c1"],["/keras+TensorBoard/index.html","664a635df1ede11e76f61809873d8df7"],["/keras-beginner-guide/index.html","af9c0a48ad87889d889e08291c7de924"],["/kmp-algorithms/index.html","039f1607561893d1b82834399f001a74"],["/leetcode-Java/index.html","a9785107459ebe3b5d6b02868220702e"],["/links/index.html","ff34bf9e30865883b24db39cd8e232ed"],["/linux-java-opencv/index.html","29b8d6b8a5378f97c42c7908cbae4469"],["/msb-source/index.html","b43b1a61c6c447d0e27139cc15086103"],["/online-BUG！/index.html","59eff77953bf51540c5748adfa433182"],["/open-app/index.html","d74edd024b93467dd27cc82217b664f4"],["/page/10/index.html","34716df0d25654ed8814aeb1afca4334"],["/page/11/index.html","bd88dca0a04fbbf6739a5d660b7c6f88"],["/page/12/index.html","a24804c5755a12ec0ab6daccf05fc5f0"],["/page/13/index.html","4d500abe26169d3f6b27e5aaa9341dbe"],["/page/14/index.html","9b85778abe68867930983aaacc8cb92d"],["/page/15/index.html","bb1856c7a88253e2ed7cc3242eb7b97c"],["/page/16/index.html","f9d684fa6f9b00c601851dc7eb1d0d77"],["/page/17/index.html","b56d9c7c013f18fffee697861aed2403"],["/page/18/index.html","e7d8ede401ba2a865dd9d23607b916c1"],["/page/19/index.html","abcff88c1c59c89a42a3d32038889c11"],["/page/2/index.html","0571250428e31086d3999569b36a98b4"],["/page/20/index.html","020527c0c60afd0939e75612e7ab18a6"],["/page/21/index.html","a451c95cde98162b33b1e50af0f7675e"],["/page/22/index.html","760181cc1c813ce258559d36eb6a37bc"],["/page/23/index.html","8e21cd34f710fe9c86d35366cd8b3ba8"],["/page/24/index.html","e6e509ced40374b4e3b68a283a3c9df0"],["/page/25/index.html","c013f2c9c2f60a43468092da8bd5b0e0"],["/page/26/index.html","e5c7da9aa3fe36f629c077705f563a6f"],["/page/27/index.html","e12e3e19cf493bb8dcae3e58fa36f7c4"],["/page/28/index.html","11d01df1d398a07f14e2e4e4f1dd44af"],["/page/29/index.html","3f80cf297d6e224265e901a5ce38d86a"],["/page/3/index.html","2a800faecab01f8d21b2679471625c86"],["/page/30/index.html","c03a0ae42b9f47b25dca7ea567668e77"],["/page/31/index.html","1f847bf8438bec11f34f9357a91e99cf"],["/page/32/index.html","8e169d705146144fe08c2c96ea2b7c37"],["/page/4/index.html","9de29e5f937e1f55503440c4ac181928"],["/page/5/index.html","65e650430a5dbb39667b306eaa485f12"],["/page/6/index.html","3a2b36cee4eca1ecbdd722280e234271"],["/page/7/index.html","150bfcdd7a9a2176e9be224bdec6a76f"],["/page/8/index.html","84f50677273b51b0fea0e5975e39e033"],["/page/9/index.html","1a6543d5d54b3309283e03b628dba19b"],["/pandas-data-preprocessing/index.html","9c80babadd745722da64b2133c654da5"],["/phone-win-open-Internet/index.html","3d1c3e4f11b433d42811892beb79c244"],["/popcorn/index.html","759d79a6d05fbf7619a02d3ec81252ae"],["/python-Blog/index.html","f697c1cc5bc3e99813f62d5f370130d5"],["/python-yeild/index.html","7bf79fd2f5dce3ad59dcf9ecfe446a79"],["/python爬虫教程/index.html","80527eeb56ae5de14a7bb2741233717e"],["/software-copyright/index.html","da5d342df19a8c87fab58c1d6a2bbeea"],["/sw-register.js","e8841a136c4be189e0e25930300eb6c5"],["/tags/AI/index.html","52785d5c3578755e373cf454e14cc170"],["/tags/API/index.html","d2d157cd5787b3fdcdf3bfd1f5d077bb"],["/tags/C-图书/index.html","6c46f54fbe8e97742471bc143803d2fc"],["/tags/C/index.html","15776234c3551e11f79f2fe351df2fa4"],["/tags/CNN/index.html","b2dbb279a339246a4969aa3138fbc04b"],["/tags/Chrome/index.html","c73c5d3393bae894f2fbb5da018cf1ec"],["/tags/C✙✙/index.html","f4e771f0536b12f70ac52b1b9a5d99e5"],["/tags/C语言/index.html","afd2420d813f1d793a3053a7327d1e22"],["/tags/C语言图书/index.html","6aaed49b9ec91f0ca8a9d9ebfa223cfa"],["/tags/DSN/index.html","79679da2945c9bcf461d44f00f50e2a7"],["/tags/Dll/index.html","98907d9a3df17be706a54503c2e096db"],["/tags/ECCV/index.html","1af250cc66fe39276cfc8ac915be1144"],["/tags/EM算法/index.html","8d8e46fd6e61c73671814747e06e65b2"],["/tags/Eolink/index.html","0cf326596bde02972e498e1dcbb94d4b"],["/tags/Gitee/index.html","92940d4fee33a6ba646984e386e76bc5"],["/tags/Go语言/index.html","62850607c77280794db494d49af0e5f7"],["/tags/Graph/index.html","5a58ed09f90f9803e6da260f858bc2aa"],["/tags/HTTPS/index.html","a058aea11b7cb9698544f65f9bb00040"],["/tags/ITK/index.html","6ed63f94a3e33b613749e17399c2ffce"],["/tags/ItkVtkGlue/index.html","49d110594fc3a68cb0b6241f6e9023c8"],["/tags/JMM/index.html","66f6f329c88e1f58d5992f21664148c7"],["/tags/JVM/index.html","ad9f27a652abaa143a6f01982449704a"],["/tags/Java/index.html","ca3a3071ad19d9901add065056a8362e"],["/tags/Java/page/2/index.html","df6358adfef0f94a7a2018b0be287d6f"],["/tags/Java/page/3/index.html","159441eea1aaa0fa4c8dcb430168429e"],["/tags/Java图书/index.html","f8aac6fc1ae4fdfb42616458ffa7cec0"],["/tags/Kaggle/index.html","216bd0df4e7f098704eb479f36052484"],["/tags/Keras/index.html","55d0bd6e95354a58e4f9cf3146033195"],["/tags/Linux/index.html","679a7947447e624cb3035f8afae50961"],["/tags/Linux图书/index.html","504036b24d3decc39cb9dc8559f3e1a4"],["/tags/MEPP/index.html","1ded26053b936376e2d2c16fbb2a58b6"],["/tags/Map/index.html","22802ca14c6d2e0946156f32c048cc8d"],["/tags/Matlab/index.html","08cfb2dd019bf068641d00a7a961f783"],["/tags/MongoDB/index.html","717bc84f5ae6384536c68bfd054e0ddc"],["/tags/MySQL/index.html","bc52b6c9bb4a38f7ca68c977af6e055b"],["/tags/Parzen窗/index.html","b668033902eaaa134b365b69ff900db7"],["/tags/PicGo/index.html","0198c9aedf0d2d4b2404d4b954dcfb06"],["/tags/Python/index.html","8bfd08a3b54e6626bf56c972f39a115b"],["/tags/Python图书/index.html","861f063996facbe7ee5890c760f1e3c3"],["/tags/SPHARM-PDM/index.html","180e47d096e6817f15b7e552210c19ef"],["/tags/SVM/index.html","6eb0e8709ead2f8c8143fba444cff397"],["/tags/Seata/index.html","785275268c0bb9062b9d3210607fcb4e"],["/tags/Servlet/index.html","aca86db3f24b52addf005e878d21cae5"],["/tags/Sping/index.html","df62cc53613744843f409ed09b43c404"],["/tags/Struts/index.html","a6b67e3a09753e1b60531070184d25ea"],["/tags/TCP-IP/index.html","6dd0e314a55815430ef44ef4a63b2843"],["/tags/Ubuntu/index.html","3c58ec17ced65306694446480d905d8d"],["/tags/Unet/index.html","6c469f78ae7824a21136f22fd091fee2"],["/tags/VS/index.html","45cf48dea68d3944c6803ad6dde2bda1"],["/tags/VTK/index.html","0d7ae7edd63c7d831476970549a8b2fa"],["/tags/Windows/index.html","3859cd53eaadd08c4eb43150b02a3e9a"],["/tags/edit/index.html","4a30b9531fa2a24661a2c7a91ddbcd32"],["/tags/hibernate/index.html","5baec17d305f8df69aef63260ca5f336"],["/tags/index.html","d377d483f7d3da17dd0216d46178a458"],["/tags/itext/index.html","fb8e95c0d0bdbf476773e2ec3898f08e"],["/tags/jdk/index.html","605ed7243e2fb44ab84934c895e4a2a9"],["/tags/kmp/index.html","e9bcaa0e1ac2ae02e957a284dbf484ad"],["/tags/k最近邻估计/index.html","10134f589f74f3d1d9e09cf3815dea8c"],["/tags/lombok/index.html","d3afcd3eb587bfaded34c0f5c0c55a1d"],["/tags/offer/index.html","754198657eaa8d16990dfefa9498b1a2"],["/tags/opencv/index.html","a6e0e8f8e314f9b45ae8d7d5ef0b618b"],["/tags/pandas/index.html","255fd30d01f51e101675a00aae9fdc78"],["/tags/string/index.html","feef17dc8e97b51dd0459945b06f794c"],["/tags/vim/index.html","f55a2a1a7934fae424f87f80e181afe2"],["/tags/vtkPolyData/index.html","82b39abd43fc0caa8751a76e7acfa013"],["/tags/web/index.html","3a3fbf7383a62fc59747a226757eb3ce"],["/tags/xshell/index.html","df2b5a04011d343205dc3f568204d1a7"],["/tags/yeild/index.html","ab4ac4d752eb0944b3883458b5550676"],["/tags/互联网/index.html","367de8e43fdc58d9cb806b92d0dce731"],["/tags/人工智能/index.html","34bc2964655179d073909586d8ea0749"],["/tags/体绘制/index.html","c9cbbd506f03ca8d8417d0cb8331a047"],["/tags/全卷积网络/index.html","2e5a70906a8ca5a34a96d660569d298b"],["/tags/公众号/index.html","21041145dffef4829102e444501ffea4"],["/tags/内存模型/index.html","e491148137ea49213a528f0518b3ccf4"],["/tags/内推/index.html","cd335afa9b8c9c21478d3adabbe68989"],["/tags/函数/index.html","68088c9577a87ce77ba7c83761ee925e"],["/tags/分布式/index.html","3d8e6a5d0a1612653531c32b75d618f8"],["/tags/加密/index.html","4567e9e5117442476307ab08e5bcf73f"],["/tags/医疗图像/index.html","bee78dbe888eb178ac2c2235b527095e"],["/tags/博客/index.html","2cc2566e1c2962f0c26c67fdcdd0046b"],["/tags/图像数据/index.html","615485a77a58296b4b29eaf097771041"],["/tags/图谱分割/index.html","994a73d0631ca7c8c30df626f812fdbe"],["/tags/垃圾回收/index.html","cbe953eb3c74ef71dc33ae0cebd03495"],["/tags/多线程/index.html","2283d00b95db263c57ee048affbd5c56"],["/tags/字符串/index.html","50380c32d67f3291f4024a1ea6710b41"],["/tags/工具/index.html","92b281544af38484ebe78db25556fd2f"],["/tags/工具/page/2/index.html","d72d25cfa1a873bfee0c25c7209a91f3"],["/tags/弹性形变/index.html","2e0ce6ddac4d3b9790a113cda4e72f1d"],["/tags/排序/index.html","0b6668253b4dc48be90afae091a0ee15"],["/tags/搜狗/index.html","80e389ea28110cd274092c94e7e84ee9"],["/tags/操作系统/index.html","f6574ad8442f46c231203cc7f15501a1"],["/tags/数据库/index.html","495eee48612bec744e9a334615ddecbe"],["/tags/数据类型/index.html","229ee973d39244ffd7a3a92767092b41"],["/tags/数据结构/index.html","82fd731083724d3cce393e9e47834a8c"],["/tags/最大似然/index.html","2d7e1ecc63059393627d709ea0d40c2e"],["/tags/机器学习/index.html","a07d00e0dc4e11d7bedf5ad24fc90530"],["/tags/机器学习/page/2/index.html","3324cd23feb0ab1610e68982bcb0b0c0"],["/tags/机器学习/page/3/index.html","580ee5afbe625da817d988db506bbc74"],["/tags/机器学习/page/4/index.html","9fe58c2de22e211516cec33830d84790"],["/tags/机器学习/page/5/index.html","625abb4aa37708afd564a926088a2229"],["/tags/树/index.html","d115166827c070ec481fdc677f564cc9"],["/tags/框架/index.html","c80e2eced0860433293abcbbcadb4bf9"],["/tags/求职/index.html","cf2557363539ff619bc9afb386059c88"],["/tags/汇编语言/index.html","1f32c6bece35702b7bec5619bfeba39e"],["/tags/深度学习/index.html","57fdd666bebf9eb90c0b8c4945629ada"],["/tags/深度学习/page/2/index.html","416fbd0034b7b0efa8b4b414a2a7b32a"],["/tags/深度学习/page/3/index.html","6479d101fff05d7edaf299802e600524"],["/tags/深度监督网络/index.html","d2bdd4fa9c3d58969a69259542a64934"],["/tags/爬虫/index.html","250360f2b4c29c3eb0caf0374a202b89"],["/tags/电子书下载/index.html","4a8d54a2df7088c7fc5537daacc65eec"],["/tags/电子书下载/page/2/index.html","2e6274836602411b2fa1db941fc081eb"],["/tags/程序员/index.html","237127338ccc75524dc28a23b03cfdc4"],["/tags/程序员面试/index.html","274cbc110946a361c1a0d6a99c275226"],["/tags/简历/index.html","041f691fd13b97a9b2da1f4789dc901d"],["/tags/算法/index.html","febf69b4a56e43130cd6b31b2c5374d5"],["/tags/算法/page/2/index.html","175aaffcaec381c22844eeae744d1637"],["/tags/算法/page/3/index.html","0a21e1cb2ebca74aa299327e8043a505"],["/tags/线程/index.html","33596783fa38a6cc13d97043eaa38fbc"],["/tags/结构学习/index.html","d4a0daf95e7a1198331cc0b02d5d10d7"],["/tags/编程/index.html","011afcc66acd82a87a350bfb4fafe4ba"],["/tags/网站/index.html","01183389b9de4f577e799ba2a59fa0e4"],["/tags/网站/page/2/index.html","02ab31fc524e806fc512ab232d92da59"],["/tags/网络/index.html","c7f93423d380b087f41702a156daf03a"],["/tags/网络原理/index.html","0f9fbc29cf1f7ce88f0eda5d80170bbf"],["/tags/肝脏分割/index.html","ae9a85e30b4d0208b2b6211aa0b7b7fb"],["/tags/计算机/index.html","0ce703131a63519eee495b510f13337c"],["/tags/计算机专业/index.html","a11064496a4b15ba80e25cfedd9dcff3"],["/tags/计算机网络/index.html","85c30f2e4bc9852c95d6e122a2bcce1c"],["/tags/设计模式/index.html","ea5a4d8bfac2310c2777bc0f5fd9a959"],["/tags/贝叶斯/index.html","f08c0385c0b61046353b411abb1a6c82"],["/tags/迁移学习/index.html","ff3a80a811a9dae138a6b2943fcc9c0f"],["/tags/面试/index.html","c2c7363b539477d815a758a32c5cb8e4"],["/the-way-of-pragram/index.html","3ae44b8e50b2d0a734b6a63877639188"],["/untiypro XL安装/index.html","5c726bc0c9ada0accdf57b4ee6da3d3c"],["/video-websites/index.html","7fedc84a652905266fba0d5047790110"],["/wechat-fans/index.html","8241187d32db878144c70174d9e1b205"],["/window-run-VTK/index.html","0f2a28b9258bc3d5800b0b1757f9e615"],["/xshell-connect-Linux/index.html","535cafdf8b956c43a36f831378b01219"],["/‌Accessing-the-Open-Internet/index.html","4181da7225f2ddf5aa0a504fd2aa50a7"],["/《Java高并发编程详解》，去大厂必看！/index.html","818cb5e52573d9668f5fdc66c7c29458"],["/一分钟没了 1.5W 。。。/index.html","379ff8f8a6e03b21387bb4946e1c623d"],["/一条高产爆款内容生产线/index.html","515139778d6462b33f6d42fb51d5dd0f"],["/为高考学子推荐的六个就业前景广阔的专业/index.html","719e98f989505042f4571542b6d5826c"],["/互联网赚钱机器---社群/index.html","38e1595a3807c36bd5c93a88ef711050"],["/你们常用的工作方法和思考方式是什么？/index.html","ee5c2ebf65fc369caee6fa077a839a20"],["/关于环境配置的一些事/index.html","bb6539ec184c7dae344d563ac0c787c8"],["/准备了19w！搞事/index.html","22600808ae86287de37466c4b075145d"],["/几个很重要的感悟/index.html","29d6ae76e95665a278644f1659cb9e50"],["/分割ROI篇/index.html","b19ec5868391de57a54c0d698897ff97"],["/分割精度说明/index.html","4625b6369062e5293768c47bd06f6f25"],["/分块程序执行/index.html","d8b59a55f97605a95e98113c38d87480"],["/加班公司黑名单！！！/index.html","1bb8a9570a020d26e08dd89566c5cbb2"],["/卧槽，上知乎热搜了！/index.html","1d393536e06da43a0cdde36db343353d"],["/卧槽，我的小破站爆了！/index.html","ca4598db7d918ae5e63885680955fc1d"],["/卧槽，我被盗版了/index.html","5cdfee8138ee8970569a109be8d13e81"],["/卧槽，还有985大学在大一上C语言课？？/index.html","626217202a8e0fbdc52f21915b61304c"],["/历年微软面试中出现的leetcode算法题/index.html","51bbcc24163e8989101ba54dc9851871"],["/去特斯拉试车了/index.html","f52838b2421901f0f2ed20f847986b97"],["/吃苦的三种境界/index.html","c8ed45506f755a64bd3ceb2e9850eb25"],["/哪本书适合推荐给 Java 初学者？/index.html","53403f7657a413ef60f5b6596777fb43"],["/哪本入门级的学习数据库的书最值得推荐？/index.html","be5b84852237d93c40e0e781c80cb7eb"],["/国内外常用的AIGC模型/index.html","ebadc008f5c799bc01bd3a37b1b543f1"],["/国庆假期/index.html","efeb2974c7aaea667e9c07e83cc83736"],["/图谱程序字典/index.html","2d0ab5f5d94f6137ce08a4a9b7948abd"],["/图谱训练与分割/index.html","210b374016cb96d284621ce3df891ab0"],["/宣布一件大事/index.html","2b289526c8271760d826379269b746b1"],["/小鹏P7i试驾体验/index.html","19515898d632817a40a8adfd801ba277"],["/微信PC版3.3.0内测更新，电脑可以刷朋友圈了/index.html","523ca9abee1a7c0aaa8d9ba90e9cc733"],["/怎么更快的赚钱？/index.html","3682c4569176faccb7c5b97fc014f69d"],["/我毕业了/index.html","177dc5814daf11693a0bc3a3b6fbb6a5"],["/我！真！的！找到了！爱上学习！的方法！/index.html","5678ccb0a52e1e7070c1c2aad34cd082"],["/户口的意义/index.html","c06b0f7a0b8a364cbcec3c8574e282e1"],["/推荐两本经典算法书/index.html","224c73ad3bbb0de2daf842cb6d84cbd0"],["/推荐几个在线学习SQL的网站！/index.html","f34b6b83f3277c852b6654771c6a89cb"],["/搞了一个程序员成长晋级社群！/index.html","060951e8215e1286bf845766b27f6924"],["/摘抄/index.html","e505acd246357148c0cb71cef5974aa4"],["/暴跌30心态崩了/index.html","a95e6e0fbf261aaa487f995d036f21f4"],["/最近很火的ChatGPT到底该怎么玩？/index.html","bb25aeb8905fa2d294cd094830772448"],["/有哪些好看的日历可以买？/index.html","45e85ae2f1a55c296ad444715a400d81"],["/服务器有啥用/index.html","515b19b29ec74fa7c800630e165070fa"],["/来长沙了！/index.html","71480268ed3cbd287336af6be896ac02"],["/校招污点公司名单/index.html","e028e1a86fc18f93e2088fd0c2179710"],["/梭哈200多万/index.html","1e0a45db41fe7cf8a589c98ca6de54df"],["/梯形图入门/index.html","d7a9a835a278cbd95f5d11e86ee15067"],["/橙心优选，凉凉了！/index.html","93ad380c04225e9723f14f474a746d85"],["/比亚迪汉试驾体验/index.html","be169fd1f112efafb7c9a86cfeeda5e6"],["/清华转学成电，真的牛逼！/index.html","8755bea674c9ae412507df07f1bf5456"],["/滴滴程序员被亲戚鄙视：年薪八十万还不如二本教书的/index.html","081949703d88af3676137f976f2ab4b0"],["/社群！/index.html","f450af43c4010b97b13e0c2d6d681e3e"],["/科学上网之VPN篇/index.html","cc119feed985f87283a7825321feb282"],["/程序员必备的几个技能！看完你也是大神/index.html","3171f9194bae9ec1ca3bc8bb1b69651f"],["/程序员绕不去的槛，Linux！！！/index.html","f86f3a5eabc14451db3fd55f339eb510"],["/蔚来ET5试驾体验/index.html","ee87837b931bea97553ffdec28a664cf"],["/蔚来，牛逼！/index.html","13e63522c46d113793ac9e17c3a7bcb0"],["/被录取了/index.html","daa0ee3b05e754d79b54b91b446d32cc"],["/被找事了！/index.html","c02117566d71e42f77b6a4f0c7bac51d"],["/被拉黑了。。。/index.html","63e8a49be5d3844aeee59857911ccc48"],["/被车撞了！/index.html","45ab378586befbff526fe9f3b2a95db0"],["/该如何选购固态硬盘？/index.html","553dc91a02a4e6ec572117af0a9c6e28"],["/这本书一定要看！/index.html","c30c150e7dce263f10ea8747a3c2e7e5"],["/选Java还是C++？/index.html","f533cc112fa727b6a8fec5afee94b168"],["/那些让你起飞的计算机基础知识/index.html","045159c025458f88f5ae955e5b8ecaeb"],["/靠这几本算法书，成功拿下大厂offer！/index.html","7df351e355bfbc2ce58b3b813b8ebbdb"]];
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
