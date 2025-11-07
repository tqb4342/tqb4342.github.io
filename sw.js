/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/0010-city/index.html","8c39126fda74c8a4db3ba1dae025d06f"],["/10-algorithm-book/index.html","a4198e3d47799bbe57603ea3ecac6ba1"],["/10-website/index.html","bf28e4ddf7cf83515b051112d4a6b44c"],["/100万的小目标/index.html","0f1654925de19f9f68a9b910bb434a9e"],["/10w+YYDS！/index.html","ea25380eb580aa289fe36af8f07d3372"],["/12-technical-tutorial-sites/index.html","3a7b09f311dfe1928ffee9d867e93775"],["/2 6 岁 了/index.html","212fe326847aa414aabcc8cc36007b5a"],["/200万，啪，没了。。。。/index.html","e43b099c11bdc6f451a432189862d6e5"],["/2018ECCV-Paper-DL/index.html","a079b4dd5bd09313c50ece2495bbdad1"],["/2021年固态硬盘选购最新攻略（小白避坑指南）/index.html","be0a89b23c90c4f111207c6a6fc140b0"],["/2021机械键盘推荐/index.html","e5e06b4337dfd17487ffc37c14afa9ed"],["/2025-07-15/index.html","03da8c0baa3caabe7a70a1ec12c6faf1"],["/27岁了/index.html","f14e894510a11af656d876c1895166eb"],["/3D-Convolutional-Neural-Networks-for-Human-Action-Recognition/index.html","f08d887e3267e73a7baa95bb0b839fdb"],["/3D-Deeply-Supervised-Network-for-Automatic-Liver-Segmentation-from-CT-Volumes/index.html","9eddceb95fe8a7e35db9564e1d3e5223"],["/3D-Unet-Experiment-notes/index.html","a818a68070768f59b90f2b4593b04967"],["/4-Software/index.html","bda764d6beb7222c0f7acc72361320ff"],["/6-website/index.html","1c1bdd0faf3ea7a431e81341706a7eb2"],["/7-terminal-tools/index.html","adf1289b2811c8d7c4fc3ca7cd48a6ae"],["/AIGC中典型的深度学习网络/index.html","966482dc27580ee1ae4361af8c3c3b41"],["/Agency-model/index.html","f7e491eee2a568f85a156e0fa6248646"],["/Algorithm-brush-notes/index.html","71f9d1ec0ce3d88c6a56c182fee7d072"],["/Ali-recruits/index.html","a1b2048cd13d9c9ef48840ec64a1fef9"],["/Android-open-internet/index.html","aa1b61f89a73907008277f9aaf664c35"],["/Appearance-mode/index.html","b1b15364ca6fe2d484a5c746f6178bd7"],["/Backtracking/index.html","5485166357ffbca00534b2b01a7a1754"],["/Baidu-Sao-operation/index.html","cff4987d21ef8878b45c4a8f837317f8"],["/Batch-Normalization/index.html","cf9649829a53ef93e5dcb92dfe953a04"],["/Best-AI-tools/index.html","4e568ed40c6f3c387610d9332c377f95"],["/Bias-and-Variance/index.html","f2b87a1c4aceaa468d8997c808c0b544"],["/Binary-tree-traversal/index.html","08bbcc9cccd61498973b8569e2425209"],["/Branch-and-bound/index.html","a34df040ba23d20187396c9d914a3395"],["/Buying-computer-for-the-first-time/index.html","6a46c4ddd5eb20eeef91dcc2402eeff2"],["/B站向北邮道歉！/index.html","0cf17cdd01a499b30c0114562d27fce9"],["/C++-string-function/index.html","44bf37c8c0aaf4972e3273db0eef7280"],["/C-Java-DevelopTools/index.html","8639dc037a0bbc0c889160abc5c991d9"],["/CS-Classic-Books/index.html","80d937ee289167b4716db588dcf3053b"],["/CS-network/index.html","a08b7c81c77bd5c4469e3655f4d496f9"],["/CSBook001/index.html","fbbbfbd083049af6537b04007a94980e"],["/CSBook002/index.html","7f052b4dfc9914aae6bb9448e3329242"],["/CSBook003/index.html","7b5a950a5ceaacf3967e6059c20dd879"],["/CSBook004/index.html","7560daa9de7331acdbc6aa83f2e31c01"],["/CSBook005/index.html","66a60ce3b2cb3ae81a69c2971063b080"],["/CSBook006/index.html","9b622f45980335b04fe9714e7572367d"],["/CSBook007/index.html","9413fa772bf7dc7e456c11213fdd8dcf"],["/CSBook008/index.html","eb3b6a9ec15d77afb3cf16d3513ca703"],["/CSBook009/index.html","1031050512ce57f57c7ced9a95439005"],["/CSBook010/index.html","0719b1ac06be3136db5ccc4a36f1331c"],["/CSBook011/index.html","e73067af0d334044e6b3703450cc647b"],["/CSBook012/index.html","5b7292e74ad51f84c4d47fed0358c1d6"],["/Changsha-really-fragrant/index.html","c3fba8ed6d55f2dce1bc38e2ef068c13"],["/ChatGPT-VPN/index.html","1e98504a3a05fcaaa27f2dc52ef3d877"],["/ChatGPT/index.html","7893061480efeb346754461bce52dafb"],["/ChatGPT！王炸级更新！！！/index.html","8d774ff2d8cba6b89d0f292357090de2"],["/Chrome-crx/index.html","f83c38f08ae3d9122dd2a54711c90bfa"],["/Computer-Classic-Books/index.html","783fba616fb0d74f8001db5e672170af"],["/Computer-for-another-major/index.html","db94191aeadd67e6f238d65e2dd42227"],["/Conditional-confrontation-network/index.html","41ccd71245ac0c9240de9e7f6c0cf47f"],["/DNN/index.html","3bd6c0bfd9f9862acb16ddfc4ad5e982"],["/DSN-segmentation-liver-experiment-summary/index.html","ac491c42956966b2a24cdd4d01504ae3"],["/Data-enhancement-elastic-deformation/index.html","63a60e720eb0f8f3186111a383977b4e"],["/Decorative-pattern/index.html","289c742725c031da7381b15e66ff08b1"],["/Deep-Learning/index.html","f7ebc3ef2d58afaedb58081d271c546a"],["/Deep-learning-and-medical-image-analysis/index.html","96dcaa501980161f28a5d1238e40d521"],["/Deeply-Supervised-Nets/index.html","d9af1c8c75ae1c1c6f051efe401906df"],["/Deformation-model-based-sparse-representation/index.html","472d7bfc005c8891b8641bd29b420a37"],["/Discriminative-and-Generative-model/index.html","07d3b170a6b89e44c2fc263bfdbdf827"],["/Distributed-transaction/index.html","a116cfa07a2b7e006a5e06d98ba09bbc"],["/Divide-and-conquer-algorithm/index.html","efd23f1914861d8851fcd5276ec3caeb"],["/Dll/index.html","2d857e56f2665be18ba1294d6db8970e"],["/Dynamic-programming-algorithm/index.html","5a0a95dbabd19a64b1f9ac9143d76916"],["/E-book-download-commonly-used-by-programmers/index.html","2e1e429997097fe7b7c99d04b5bb4792"],["/EditPlus软件的安装、激活和配置过程分享/index.html","7e3b02267ae92ae094901f93c086ced6"],["/Eight-sorting-algorithms/index.html","9fbd031a86aac479b7495c5d9cec038c"],["/Encryption-Algorithm/index.html","6e1b65cf21e4656029101500ec05bb4f"],["/Eolink/index.html","d563e01335d039f8438c1663b41bb7ef"],["/Factory-and-strategy-mode/index.html","886765548190c98f010af0662758b360"],["/Foreign-technology-blog-community/index.html","413b8078ed13a09e1315a0cbf93921d9"],["/Functional-model/index.html","81843a65f590cf9092933fa1ee03d8fe"],["/Fund-type/index.html","6c2741aef7cf7f95e7c6a293c4a1e066"],["/GPU-medical-image-processing/index.html","152f4353cd5071559724306a1473da52"],["/Generative-Model-of-Unsupervised-Learning/index.html","b962995cf27d485c3d2c41bbf28a95de"],["/Git-Learning/index.html","2a338210f161df9aa602ab4f285ba191"],["/GitHub-2FA/index.html","7db6075141cccc1f335ffe315fadcf33"],["/GitHub万赞，程序员必看操作系统总结！/index.html","571c3425845883bade0b70363485bd4c"],["/Golang-book-recommend/index.html","855a0ee4f9f88fba39494bd4847f147d"],["/Golang-learning/index.html","28c6d8a2e060572d3c6b7e449a4563f7"],["/Gradient-descent-optimization/index.html","02b78ab1e90e17d458a28bee3a72e2ff"],["/Greedy-Algorithm/index.html","adc5ccaa3e4fe0adfdc4168d89fd0920"],["/HK-bank/index.html","093839f067740d8d9dc6c6556c7f6aa6"],["/Head-to-head/index.html","c2279ef385f73e0677c2f63e748ffa36"],["/HistCite-Pro/index.html","da95492383c930a2dee05916d6821207"],["/How-does-the-program-run/index.html","b9c72b143107597ba134c4164399a031"],["/How-to-judge-whether-technologyisreliable/index.html","eed63cbe2ecf646e2ac99b22893bc4fb"],["/How-to-learn-design-patterns/index.html","615896d2c52c43820f7b997a83c7467a"],["/How-to-learn-design-patterns？/index.html","a025f13d3c727e448b8e5e54e772adcf"],["/How-to-teach-yourself-programming/index.html","2d5c6cc3666c8edabbdee9d4a73c5537"],["/How2learn-Python？/index.html","3ee256254da37850d47ad428715d66d2"],["/IDEA-shortcut-key/index.html","feddf7a624c486c43cce0447463ff279"],["/IT-interview-basic/index.html","b10822e71db2caa9917e9aeac71ea039"],["/ITK-VS-install/index.html","7b7134a40fa41ca0eca754dd9d9e5c81"],["/ITK-VTK-ItkVtkGlue/index.html","831ba5220e11d1977a2da6b82e5a7fb0"],["/Image-Processing-Journal/index.html","9872d331b648d428ca4f989227be2c4a"],["/Image-processing-plus-noise/index.html","7d313b07d56dca87b527727894b1eb24"],["/Inception-Going-Deeper-with-Convolution/index.html","0b13bfe71584787b29e55d416515f9a2"],["/Java-GC/index.html","3b8a3dc7d1650a0f2e9f07fce5af794d"],["/Java-Servlet/index.html","b29ed3158b6fde2e45553b9f988ee85a"],["/Java-array-and-collection-sorting/index.html","97c5cf6285f6527df4a15f106ce21d7f"],["/Java-development-tools/index.html","b125292f9eab2d8a18309194075525dd"],["/Java-eight-data-types/index.html","26a661663a7c1ef99dcf4eecae8df1c9"],["/Java-interview01/index.html","5b1a8ade9df56e5fd8b4868c460874a8"],["/Java-interview02/index.html","5cf6460281e35c16f85db2c8913e8423"],["/Java-interview03/index.html","be99dbc6274b614904002d1ca1ea60e0"],["/Java-learing-map/index.html","ed1951161420bd0c8f858a60bda9aaea"],["/Java-learning-route-map/index.html","c45f74d1b78f06fe17bb6ba24cd15603"],["/Java-memory-area/index.html","6bbf4f39b231862e584f6cef566b66b6"],["/Java-memory-model/index.html","068032367f43b5250631dc4cb1f8e5bb"],["/Java-multithreaded-learning/index.html","a7f718c3b2ca6250f0433fb96c022662"],["/Java-project/index.html","870213233d68d9fabc75a4c97ee2220d"],["/JavaWeb-Chinese-Garbled/index.html","879c6e7aedd40d635153189ec8cdb630"],["/Java还是C++？/index.html","43abd51c4af3da71a2c779393b4f0c85"],["/Kaggle5-step-guide/index.html","b892a9b68c90239c9d8cff73d818abf5"],["/Knowledge-points-of-Java-garbage-collection/index.html","5802d1979c34bf6fce2beec548a49c5d"],["/Layoffs-and-Hiring/index.html","b06975fee6a015f08e61ef0ad83ae819"],["/Linear-regression-of-machine-learning/index.html","a68949f28dbe4891198c85f2ad3b631a"],["/Linux-Compile-C/index.html","338880c1f4214a086103b7c6432deb93"],["/Linux-ITK/index.html","8034b62b2d320bb73a928692adea9298"],["/Liver-segmentation-of-sparse-components/index.html","b7d8b48bfa72456773262e17b7b261e2"],["/ML-EBook-paper/index.html","f7a6ec29383b6aeb388089671724e02d"],["/Map-uses-multiple-maps/index.html","2adde39cd0c0d94a4b324443fa51fdba"],["/Matlab-Graph-cut/index.html","3383f6200067dbe365d3ece4b0b97d0e"],["/Maximum-Likelihood-to-EM-algorithm/index.html","d728465d64e9e7923e386b075a9be822"],["/Mean filter and median filter denoising/index.html","58e4a2f877e6383b399e1779f4e16e1d"],["/Medical-Data-for-Machine-Learning/index.html","22c047f9b0f5431d985fb2a34a98d903"],["/Medical-image-analysis-deep-learning/index.html","7cb5a3d62a81f626b040d3df367ea6e1"],["/Medical-scan-image-processing/index.html","665e49e26befc5dd4af3131bf8f7e50a"],["/Merge-sort-algorithm/index.html","3d33899d9a964a89d7b257335bbbefc8"],["/Monthly-income-2W/index.html","03b24f9b0f6f15fa43953df072ee38fd"],["/Mysql-database/index.html","2541ad5f2da0efacc6a43858ee38e805"],["/Neighbor-Embedding/index.html","c8c9e141731f629fae2b10811007739e"],["/Neighborhood-approximate-random-forest/index.html","6be8f894b8612c11527464ec5a0f25cf"],["/Net-and-official-documents/index.html","39aa151f45cfc2b3cfccc98eede92c59"],["/Netflix-VPN/index.html","6e601e8b3639b31fa5657db39959bf4c"],["/Network-principle/index.html","0144bcdb8072ed61273a8280ff68a4f6"],["/New-Hong-Kong-stocks/index.html","069e5c0d9a74f0e4d7f4bec2a5f70d26"],["/Nice-to-meet-you/index.html","21bf965267665ef9b3af41d3e00af81c"],["/OS-processes-threads/index.html","5e7fc818d943e5a9df38b5a4fe0ba459"],["/OS-run-environment/index.html","898b14a0f980a249dcfb56cb824e6cf4"],["/Open-Internet/index.html","5b5d6560f1b4527f31cbac8eeff0cfc5"],["/Open-Internet2/index.html","69f73526683ce76bd820e6beaa47a819"],["/Open-source-community-and-rewriting-website/index.html","89daf9d985740541ec5be1455e3f9084"],["/Panoramic-image-stitching-based-on-SIFT-features/index.html","0d77fb5daffc6dbf70bb72ff4601b85d"],["/Parzen-and-KNE/index.html","2b5edbf9582249733506c3bc9262193f"],["/Personal-technology-blog-site/index.html","c9132fde3f1cb9b8d830afbe18d176ce"],["/PicGo-Gitee/index.html","3dc93668b375c13481e4ca2399117280"],["/Programmer-treasure-chest/index.html","e2a181c705c5b6768b686760677e7ade"],["/Prototype-mode/index.html","68e213e0473b835c068f5d26fba5b30b"],["/Python-base/index.html","3a9b439eb4eceb37b18aeb6ad1645496"],["/Python-crawler/index.html","2b245da1933bd5c6b0c39f71aadb8143"],["/Resume-revision-suggestions/index.html","fe68ea40801d7af9bde3002ac5d2b1b2"],["/SEO01/index.html","6bd3fa59c460127b61313df85a1b0671"],["/SEO02/index.html","9bdd05b0ef37d2a5f49a970b1f1b6514"],["/SPHARMPDM-MEPP/index.html","b7ac76ef2cf9d1699cf633e8e9142ab5"],["/SVM/index.html","380f4d70f12f3d2d00a702b297fcb7ff"],["/Semi-supervised-learning/index.html","7d4464abaa2f15a53ed36ecf48ff3e0e"],["/Sequential-model/index.html","c4cb5bdbdf17c076f10e56dd4bd47a7d"],["/Shape-Based-Human-Detection-and-Segmentation-via-Hierarchical-Part-TemplateMatching/index.html","d9ee7b016ab35a76c164c69ac0bcc21a"],["/Spring-basics/index.html","94d91e3da9153b9a88ba8493d66b4bc7"],["/Spring-integrates-hibernate-Struts/index.html","1938af1c179bdec5606459454924ed01"],["/Structure-learning/index.html","9a01cb4ce370e88a5572655b43c9e144"],["/Suggestions-for-self-study-of-computers/index.html","68c2a7295d21753ac73043aedb4748ca"],["/Summaryof-HongKongStock-Account-Opening-Links/index.html","87ec9ffd7e2cb642e16d4355f91d64fa"],["/TCPIP-detailed/index.html","59c2779b1b7b7b9d299b1ba179d93304"],["/Telegram-VPN/index.html","45984e65478c43306d78028538401226"],["/The-essence-of-shopping-festival/index.html","7141fdce22bdeabf8e4436bbca76f72d"],["/The-most-important-investment-in-life/index.html","123c033d4973546cf6d91278a6a8150b"],["/The-most-successful-nvestment/index.html","ce290266fec4302aadf6ee72c4d2df1c"],["/Transfer-Learning/index.html","9f1900b02dbe9a748991f0dfabb9b485"],["/Transfer-to-computer-major/index.html","cc0822ef357f336dcaa1267eb10ebdb8"],["/UNet-Convolutional-Networks-for-Biomedical-Image-Segmentation/index.html","ec47a65126ee5fd9d5b4df5ccaea7353"],["/URL-DNS/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/Ubuntu-install-sougou/index.html","f4cb543d5578074494810deefc559dd3"],["/Understanding-of-paying-for-knowledge/index.html","ffb433edb5f80e22364e5b2202cf3fd0"],["/Unsupervised-Learning-Linear-Dimension-Reduction/index.html","2613d52eb2709bc3d070491773c9a307"],["/VPN2025/index.html","b00b8d283139b0ad8759aca7785818a1"],["/VTK01/index.html","265d84909074fe464aa25abaf8102080"],["/VTK02/index.html","526c0b38345e88e976f06b960ec2d42e"],["/VTK03/index.html","693130ab3647b3a6d99916286fdc3cfb"],["/VTKRead-write/index.html","df704143de7c4096f9bf43737acaa346"],["/We-are-all-good-kids/index.html","98aece9525c566857cb62533f41eea06"],["/WeChat-80/index.html","5d8c5acff4e74345c1676c38ec106637"],["/WeChat-red-envelope-cover/index.html","62ff97c1157e100c28408308510b2fa3"],["/What-is-crawler/index.html","853e2b90e00d94e8224f9e228ae18003"],["/Win-OpenInternet/index.html","dd1af7ee084b60273062bda53b50acb1"],["/Windows11-2kfans/index.html","e717ab02f86ede335c53cd531cf54ef6"],["/Word-Embedding/index.html","19269bd700e3712a93e254faeb33a488"],["/YuanShikai-and-his-Beiyang/index.html","0e2dbb213a383d8df084c4e266d59f4d"],["/Zero-copy/index.html","03c474b1fbb61364a5f24c9f9a8f295d"],["/about-keras-model/index.html","8c910da90020f4cf995fd2cf01edc36b"],["/algorithm/index.html","d41403641c5ec805de5c5fe90e13740d"],["/alibaba-Java/index.html","037e42a7aeb7fe28527046540184cb17"],["/archives/2020/01/index.html","9addfb4066d5ee7c04d960a42fe6db5c"],["/archives/2020/09/index.html","48d636cd630c6eebc0a22b9afeede594"],["/archives/2020/10/index.html","cb3532022735307540659e3d047bb931"],["/archives/2020/11/index.html","9750c933eff79fccb4d4862871a56914"],["/archives/2020/11/page/2/index.html","6fd22d8d146bc2ed1c864ca5587b5c59"],["/archives/2020/11/page/3/index.html","ec8b79ebad3d13c958c91596c66f54b9"],["/archives/2020/11/page/4/index.html","d2f90a97818cffc2935f06db8237e9ad"],["/archives/2020/11/page/5/index.html","4641f9a28c5165a52d3861cbd830c273"],["/archives/2020/11/page/6/index.html","8eab11643af9650cc4f209fa969750c7"],["/archives/2020/12/index.html","f6fec328fe61ca1d7dce4db94eb9a94e"],["/archives/2020/12/page/2/index.html","7563e2be9fcef79828e444dfd0c012e1"],["/archives/2020/12/page/3/index.html","7b6845d24194c6fb03198534cda53e14"],["/archives/2020/12/page/4/index.html","df21577a59e42589b66a36b63cd454f6"],["/archives/2020/12/page/5/index.html","d3ddbf2c1cfb9385f46857282d73b9cf"],["/archives/2020/12/page/6/index.html","9076e7300a52bf7bd7c28f22ab71bb8e"],["/archives/2020/12/page/7/index.html","aee239fe5588bfaccad04911f5c1f582"],["/archives/2020/12/page/8/index.html","4f039745cf1e047f1943c690b6256ab0"],["/archives/2020/index.html","66197aede99f4c02e912f7c8f7059276"],["/archives/2020/page/10/index.html","4b703ded367f908054842e0d19c4ef5f"],["/archives/2020/page/11/index.html","2af6607133d56168de6f19b05b68426a"],["/archives/2020/page/12/index.html","22bbef11ff1ed0231f51b858e04c1309"],["/archives/2020/page/13/index.html","d7f5ea8ddd0d5e2b787b6677268252c9"],["/archives/2020/page/14/index.html","21ad79e60350394f1b098555099edb46"],["/archives/2020/page/2/index.html","c6002b584caad3fef6f0b2ec799b3d56"],["/archives/2020/page/3/index.html","1097e4fef561225646ab906155623375"],["/archives/2020/page/4/index.html","b16009a49e082f0823f4e4ff8a06aa15"],["/archives/2020/page/5/index.html","41886bac045dfa91d827b05d1859e9eb"],["/archives/2020/page/6/index.html","5f1f4edcbfa16b192f735e79329c72ab"],["/archives/2020/page/7/index.html","9368d65a08d17bf994e64d029bd1b6a4"],["/archives/2020/page/8/index.html","9653dbae44afc398a94381008b4b90ed"],["/archives/2020/page/9/index.html","e19429e5138c50496c20c92eb4fb3d8c"],["/archives/2021/01/index.html","539648becb9a75c876b2f8204bf912c0"],["/archives/2021/01/page/2/index.html","1da9c8c398c72b249b239e1f3b72ed88"],["/archives/2021/01/page/3/index.html","f455e2a248f6ba296562dfcd8a631945"],["/archives/2021/02/index.html","a7bc82db2fa05cc977cb30f7ca58e31c"],["/archives/2021/03/index.html","c7b181363eb6def3423803470e3c0083"],["/archives/2021/03/page/2/index.html","78c32bbfe7807948c4e818fe00663410"],["/archives/2021/04/index.html","cd40e4eaea7a33ae65cbbac633c25270"],["/archives/2021/05/index.html","72feb527be689131d68b707ae694e4d3"],["/archives/2021/06/index.html","45d9d0b17bbc60780adb91b92ce386e9"],["/archives/2021/07/index.html","18797c8ed9bc286ff0b3a86f01967129"],["/archives/2021/08/index.html","7eaa39004e67fb457ca64ba31fce6aeb"],["/archives/2021/09/index.html","17d3c027d6e2052c46b6eac9070266db"],["/archives/2021/10/index.html","d2ecbd8eff74c58942cdb1981475d8b2"],["/archives/2021/11/index.html","c758ae193f0863e483f4c7d82e3b5e03"],["/archives/2021/12/index.html","cd0d7acfbf3653039812dc04ea6c02e0"],["/archives/2021/index.html","f9467698470a18a9aef43314d29dedcc"],["/archives/2021/page/10/index.html","4a2da65486cf76983268283c9b90f2a8"],["/archives/2021/page/11/index.html","0c51dbf458ae1f58c798429f2b7051ec"],["/archives/2021/page/2/index.html","1022b982f20f4cb3c97de4f7feb77cdd"],["/archives/2021/page/3/index.html","94e7b8f6f5526f663979869274556522"],["/archives/2021/page/4/index.html","c7fd4a965890b9eb6515ecb317086e92"],["/archives/2021/page/5/index.html","b8a23f2b550c5199db8efc35c3921670"],["/archives/2021/page/6/index.html","8dd0d2197759513f4634edd4a3881d9c"],["/archives/2021/page/7/index.html","dde272bc1735be2a1d18abfc2d926e98"],["/archives/2021/page/8/index.html","14ff681273f9c92bc60f821188fcbea0"],["/archives/2021/page/9/index.html","c8421e129711568629a3cba500756b40"],["/archives/2022/01/index.html","a490855c8b54b8d9cd6a014f17bd4587"],["/archives/2022/02/index.html","de30784a8a1456e3f53629b1dc67b3f4"],["/archives/2022/04/index.html","17d272ffa700c83d03facc6455f5463b"],["/archives/2022/05/index.html","ae631888966d8a72a291994ceb6d3813"],["/archives/2022/12/index.html","95290b424b512073d3fb6c9838fbeefe"],["/archives/2022/index.html","5cab881df60b4f0a01e8b2eb4b12191c"],["/archives/2023/01/index.html","d59400ddf86a7f1049fe65cff7fdfa65"],["/archives/2023/02/index.html","435ba8102d2b32bf741b97ceb7c68667"],["/archives/2023/03/index.html","e0c4fefb758de6dee057f53a9d01b831"],["/archives/2023/04/index.html","fcc3747fd976623135d596d738f761ac"],["/archives/2023/06/index.html","f263072225c1d355d5eb90d899ab1ca1"],["/archives/2023/08/index.html","d25d3a05669683dd7a3551da61a745dd"],["/archives/2023/10/index.html","aa410dd66ccd06b89d3148a5e0bf2a50"],["/archives/2023/index.html","ca38f0dab42c5a239741cc93c17e24c1"],["/archives/2023/page/2/index.html","2192e5fbe3c5e453ef37d7c1a79008f0"],["/archives/2023/page/3/index.html","d1ba1cb16dd8d718327630bee1af069f"],["/archives/2024/01/index.html","74d2e709d7fb653bd358b28fdc8d7683"],["/archives/2024/02/index.html","4b853e1bf8d1cf748a2a4e39666ec32d"],["/archives/2024/index.html","f7131f29fcd1e6fb445b99a05baa3d0c"],["/archives/2025/06/index.html","61713bc38514501e6f42bb43a97fe39d"],["/archives/2025/07/index.html","26f897174307dc2174e1d204a75a4a65"],["/archives/2025/08/index.html","bfaf9e1eeb1d907085612f02d395c369"],["/archives/2025/09/index.html","a003fde9e59ad91d3540f5bb145d880d"],["/archives/2025/10/index.html","00ddce9f7187a65eedff7d93381074b7"],["/archives/2025/11/index.html","0b7b2a9304cfe8c7fafd9d28a6535cc9"],["/archives/2025/index.html","e3e9341f4d85b7bf06f06dcebeb6252b"],["/archives/2025/page/2/index.html","1584e67bc08e4b6385c7ede8a54b3e80"],["/archives/2025/page/3/index.html","82802df5a4a3664f699d203ff71ff50d"],["/archives/2028/02/index.html","366962f0d668250bdd8875c52d69350c"],["/archives/2028/index.html","2527a978aa6af93aafbfc0d5336bbf8e"],["/archives/index.html","43e0e18d577128c834f1b9674339db9b"],["/archives/page/10/index.html","f7668ef7bc9bee5669a4dc36666b7c36"],["/archives/page/11/index.html","02c251f3639d2376b18cea0754c42d49"],["/archives/page/12/index.html","ccd7d1b1ff884e4a21d59634a2c526ce"],["/archives/page/13/index.html","04fb418b0947967aade86132d93291e6"],["/archives/page/14/index.html","47696ce2869a8242bfb1ae2ed8ed7510"],["/archives/page/15/index.html","961e0f4da98a4cbc58c63c9016f3a882"],["/archives/page/16/index.html","48e9745b03a307bcf7eb184d69b84fee"],["/archives/page/17/index.html","5beefd4a9b6542f32595e8ca1f24b69d"],["/archives/page/18/index.html","115ae3c2fb53f99c516af484e8b0386c"],["/archives/page/19/index.html","3db1637b5abca8acce2cee68dcd4cfbc"],["/archives/page/2/index.html","515dc95b929b0e3ee24e988bfab80a4e"],["/archives/page/20/index.html","6d957441c1ff3d38df64d119fc013920"],["/archives/page/21/index.html","145fd65f30e8cc6ff8dc940393bb292b"],["/archives/page/22/index.html","c1492f4d5642d41b267c333d09906e0d"],["/archives/page/23/index.html","712368d26950b08b2d43f9f17859a63e"],["/archives/page/24/index.html","03e592cd08713c11b357b5a7d42c97f0"],["/archives/page/25/index.html","e34c53731ead406690926b6f8d402caa"],["/archives/page/26/index.html","272deb16588b2fd664a8f8abe2c177a1"],["/archives/page/27/index.html","75ca4c05ad053db9351e86a0ea73417c"],["/archives/page/28/index.html","3719dc35f1e54e94b3a200908962cfcb"],["/archives/page/29/index.html","6d1a2802a8f9430cc888e6a778cca476"],["/archives/page/3/index.html","7fe0ed725804d6dab035a2ebdeb096fb"],["/archives/page/30/index.html","08cd8f72bc86f5ac3dce6a4380f40edc"],["/archives/page/31/index.html","1b047b51f7c855c5bc2f8b3d218fcdc6"],["/archives/page/32/index.html","6fdd3b84d677c69082aa3014820c6fc0"],["/archives/page/4/index.html","a28ede170f84afb88dcbdff6ce146c57"],["/archives/page/5/index.html","7cfa8c3704c2eff041fbf1095ee578f7"],["/archives/page/6/index.html","5edd74e8142b6188d805429399cd0fe5"],["/archives/page/7/index.html","fc63c9e8c3c90d2e9b9ddb1c8e926f9b"],["/archives/page/8/index.html","743d2ff6344ec3e2b0828a1e3e8baeb6"],["/archives/page/9/index.html","10d9e2dbc227fa0cd8b4d42a466372cd"],["/baidu-search/index.html","2f0aa5c790fe4649af085ff97895ae3b"],["/baidu_verify_code-Hh2fKNlEB1.html","cc9977aef44b3a3ce8025a9d07262a09"],["/be-a-programmer-instead-of-a-code-farmer/index.html","37393c152240b2cc7fe7c8bc6b219e70"],["/bought-a-house/index.html","4b2c130b64055c42c516237ea481f5e0"],["/categories/C与C✙✙/index.html","2fad613860931cddac4eabce1c1a4520"],["/categories/Go语言/index.html","45c34c95eb1a3863fe01f31d56a42e19"],["/categories/ITK与VTK/index.html","113d5335c09ec3c53eb18ec1f0ee944e"],["/categories/Java/index.html","3d49742f888518a0def4c4d747d0cba5"],["/categories/Java/page/2/index.html","4bff1423a22a21c2c959a3ba76f167be"],["/categories/Java/page/3/index.html","6264b9739414c6bf40424b0b446807e7"],["/categories/Linux/index.html","8ff829e104451d4f9a868f78ff75aa35"],["/categories/PLC/index.html","948ce6ff4c8a234f8440ec5d707be1e2"],["/categories/Python/index.html","17446c20bd33ac1034c825082430656e"],["/categories/SEO教程/index.html","fa8c2c3544e9918a65f7cf2bb921f585"],["/categories/index.html","d685e44bf95a0d652d5146b0b548f93f"],["/categories/图像处理与机器学习/index.html","6addd0eb261469b311c5a886a745d4c1"],["/categories/图像处理与机器学习/page/2/index.html","76e2c10da9521dbb3edd60e0abce001d"],["/categories/图像处理与机器学习/page/3/index.html","8b7afa199d8945e855bea3bc049551f5"],["/categories/图像处理与机器学习/page/4/index.html","b00af386acdaede76158f601202d356c"],["/categories/图像处理与机器学习/page/5/index.html","68f56b453b02e80fd61d671724e18bc7"],["/categories/图像处理与机器学习/page/6/index.html","bdc3c05f20587528837f8e0946007621"],["/categories/工具/index.html","1e9b3f95c9e04bcbdef5e76faf1c9db6"],["/categories/工具/page/2/index.html","bde5de07082c4d9d46b0a9d5cff00b09"],["/categories/技术以外/index.html","cd90d45cffe76c897f0ff820a60254c0"],["/categories/技术以外/page/2/index.html","b84a10e1dd30a221981aa8895998e4e1"],["/categories/技术以外/page/3/index.html","04b95c32a55784350ff33a633378cb5e"],["/categories/技术以外/page/4/index.html","c0ee34ffaac57596befec978f9ed0454"],["/categories/技术以外/page/5/index.html","f2912991bf4c8e701bb6fd3bb10a00e8"],["/categories/技术以外/page/6/index.html","3836e0ebb9678e49b245845bf87b59d6"],["/categories/技术以外/page/7/index.html","71aa84d26a53a16ca8a73b318401f03a"],["/categories/技术以外/page/8/index.html","99a26a23ed5805d22890d7ecba31581b"],["/categories/技术以外/page/9/index.html","b3a18856ad10347b22f310440e466c11"],["/categories/数据结构与算法/index.html","a973734f11e1a9e67740eb49a5ace9a1"],["/categories/数据结构与算法/page/2/index.html","d3ab57138d5656545d6b7720e4c65274"],["/categories/科学上网/index.html","0890e6cb79bc7a11c23f61616110278b"],["/categories/科学上网/page/2/index.html","1fded307f356ab47a97b1ff86e3b41cd"],["/categories/科学上网/page/3/index.html","944426062d8cf5cbb547d7d1dcf6ed66"],["/categories/编程经验/index.html","580abcd615fc8c8e1447d1c82528eceb"],["/categories/编程资料/index.html","fd8a22080568f01e72e5f654e71559e6"],["/categories/编程资料/page/2/index.html","218f8470276f89e46207a6154d1c7bb8"],["/categories/编程资料/page/3/index.html","b92135e3c3a7b3afdaa8f1ebb02190d3"],["/categories/编程资料/page/4/index.html","f65b1ecb3787e0e6073503e689ad5063"],["/categories/计算机基础知识/index.html","b4af9623514b05d73b3a4716a9f50a0e"],["/categories/计算机基础知识/page/2/index.html","25fadfd3e50d351d14cc149a5859d0c1"],["/categories/设计模式/index.html","13197fd0adc0ab66e1600c10725c0f38"],["/choose/index.html","6b244933a7616353b271c45145465f37"],["/choose2/index.html","37da26142f487162f50f0bc050e26c0f"],["/chrome-crx-intruduce/index.html","a33130a38666cb34c8d6b9de9efa5f3a"],["/clashvpn/index.html","dd6e27c3bb833cf3a556a69ac01c9860"],["/coder-blog-website/index.html","a447f54390dc643598f9cd733847ffd5"],["/coder-source/index.html","5c9b6c9c46985181da993ea36cc359ea"],["/coder-videos-website/index.html","d118fea1fc09b35473a992fe9f9354ac"],["/computer-book/index.html","06b3e2ac5b7e3f6638eaa7eee17c382b"],["/computer-censorship/index.html","664209a731102f915bddd04bdf86e966"],["/computer-network01/index.html","da8ae86c2427b436ea011adec92f2afa"],["/computer-network02/index.html","c54abcd18fa909e6ff3690b7bbe2e564"],["/css/main.css","bc32ad34ec4990d934c3c647bdb62f79"],["/database-Mysql/index.html","6609fe85e50afbaa8441e0aa44a5ab16"],["/eclipse-lombok/index.html","b3e33335c4f2fa124531d8ae5ad9704c"],["/fully-convolutional-networks-for-semantic-segmentation/index.html","c74eadfaeaec28b3f0c887960c965a47"],["/great-firewall/index.html","ef81a5acf8e9bdccf123e583e4aa91c9"],["/how-to-signup-chatgpt/index.html","1791623e8e8d8232d4a13eb4b9e12279"],["/how-to-use-Gemini/index.html","a4ce8b2c26a271a44e04b7aaf81b17bf"],["/img/logo.jpg","d6e2e245614031c3fcdd6d58f93135bc"],["/index.html","d76f00d494ae39b276d4fb73371fb1d1"],["/ios-open-internet/index.html","21fd945382921974a5dd7ede4cf8721e"],["/iphone-open-internet/index.html","8d4be3fc14e6370e0bfa17147ec28099"],["/itext-makes-pdf-form/index.html","4fbd8d3a8447f2adef9122de684e82c3"],["/java-Set-Map/index.html","311977f580711972ccfa93bb9abe971a"],["/javaweb-server-error-codes/index.html","a6c35af1e76aa6522645540cf3904885"],["/javaweb-source-code/index.html","c76ea46441a91abd49747063c4d08973"],["/js/lib/busuanzi.min.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/js/lib/lozad.min.js","47904d34a224931dd1b615c59a3dbe3b"],["/js/lib/prism/prism-coy.min.css","0ccad54d95845901ead59bfd3ecceb14"],["/js/lib/prism/prism-dark.min.css","a4711d2957d6605eb5682bdd228cf123"],["/js/lib/prism/prism-funky.min.css","efedcdccd7a9ab342d2d9cacd24920af"],["/js/lib/prism/prism-line-numbers.min.css","38e22e790c279bb56f9ec4b90a2a2d58"],["/js/lib/prism/prism-okaidia.min.css","5ac6f9de996fbec68aaa106dfb16e061"],["/js/lib/prism/prism-solarizedlight.min.css","ecc7e64d039873ffcf7fb27babdaeb5a"],["/js/lib/prism/prism-tomorrow.min.css","456af2a14ae4f5089939d5904ac40fe8"],["/js/lib/prism/prism-twilight.min.css","ebb5c355332a8cf9a1ce37a2a69d678f"],["/js/lib/prism/prism.min.css","a5234d614834658887cec6a9515890f8"],["/js/main.js","052d2b299d9c750afea8df0b802ab7c1"],["/keras+TensorBoard/index.html","22c4af72df107557d10e330fa149020c"],["/keras-beginner-guide/index.html","acbe2668ddd30cbb7920d2fa7ce08c86"],["/kmp-algorithms/index.html","dfcf71bfd4f9fc570a7369055a33c75f"],["/leetcode-Java/index.html","db16fbadcacb79176810704eeb8652a5"],["/links/index.html","89a6c94f3ce785a7fb546f10fa1306a1"],["/linux-java-opencv/index.html","af288d0a5b1e9e4bf682030a9dc57a6f"],["/msb-source/index.html","a80bb0b6a0b4ed8841004892f769dfb9"],["/online-BUG！/index.html","ab1a71c1d02e6b3dd53806401e598ee5"],["/open-app/index.html","a0f32d6f3e7783d1b2449d5cb051b76c"],["/page/10/index.html","d2b3e3d59397b2beb5ccefcf055883a1"],["/page/11/index.html","6c762ba18b2d75de1d3c62c3adc28154"],["/page/12/index.html","4dc09072cc08f7a1992b7a8ed8edc008"],["/page/13/index.html","ade15cec4969fad97b0c7d85eaa09f04"],["/page/14/index.html","ed948e72718438d33dcb97cf0385d424"],["/page/15/index.html","ab0b81e31249de0e89a19dda577f9a5a"],["/page/16/index.html","1d7f1677727e69926f3d3020a001d222"],["/page/17/index.html","05b62558692d43bec7162e229f9699ad"],["/page/18/index.html","1d6e766d8b978bb34882ba2d2bb4a7aa"],["/page/19/index.html","20e1630a6d408cb0a6cd531baca4c2c5"],["/page/2/index.html","e140cbf5e33efc119047af60d5c598ac"],["/page/20/index.html","2252b17c4d2e5279066753197a978c3f"],["/page/21/index.html","f8b69b29ad7bd748ae7bc64242eeac93"],["/page/22/index.html","22f1903d23634652fc4504efaa55246b"],["/page/23/index.html","dbc1375f35b376040f2b9f18768d4c21"],["/page/24/index.html","0636e37c1f920e5bc64333412934b25c"],["/page/25/index.html","a6675661a457991f73ed2534f0c7d9f8"],["/page/26/index.html","55045d10b552f8b7f152059426574262"],["/page/27/index.html","69bf18ce38b2e7234678f2eb1c6d59b0"],["/page/28/index.html","a05e63b11a85bb81a1e761f26dfe1326"],["/page/29/index.html","eea8c937d17fb9c5f7b5eb644b0b1140"],["/page/3/index.html","bec6b93c6fd895adf24601388de66abf"],["/page/30/index.html","a4c8ec2dcd46abfb58367d611858247e"],["/page/31/index.html","d858a451d933f2046bed9b3fb71ca256"],["/page/32/index.html","4b53eb9da1ac0f1794cf830524817cfe"],["/page/4/index.html","d8b68bef0255f4127c3b05850db588fe"],["/page/5/index.html","aff6ad6be6f411e358c6f3a2eaa9a948"],["/page/6/index.html","e23b5a9a2540c66f5ec9cbdc116856a5"],["/page/7/index.html","ab86395dabcd950d8efda04d56b3f3dd"],["/page/8/index.html","abbdf88d7ce89143d8c91ce331fcedb9"],["/page/9/index.html","ad367a530ceb236cbb58db4e0e51fb38"],["/pandas-data-preprocessing/index.html","58fa273c91779bc64d18e176720ea0fa"],["/python-Blog/index.html","62f2ae45e0ce97632383d0eb30ce3cf5"],["/python-yeild/index.html","f909d80b688998c1d99bb8298a127781"],["/python爬虫教程/index.html","d214b6fb48f3772c6a4a60b0942e142c"],["/software-copyright/index.html","40bec7dd565421d1f239fec2938f09bd"],["/sw-register.js","f7cf92500d0b2e72ec216ff72bb1a79f"],["/tags/AI/index.html","595bc1fc173769d5422fe21322a3a392"],["/tags/API/index.html","9e38c90956b1b1133a169a4c8dd0c24f"],["/tags/C-图书/index.html","04390703a3e78d131a5984be93b07f6b"],["/tags/C/index.html","a53ecc93a8439a8e5a8c4c7175f9ac9d"],["/tags/CNN/index.html","8c48a3dc4d57c54929c637354efcc355"],["/tags/Chrome/index.html","9960ace8abb861a0ffd69b364d290332"],["/tags/C✙✙/index.html","a9167f839ef54c63f9ed68cb4d2b48b0"],["/tags/C语言/index.html","ae4cd8e2ffa0d3eae94f4d0cd71edb0e"],["/tags/C语言图书/index.html","a526d99f2a10c7ecd43b226dd203aa63"],["/tags/DSN/index.html","c6028954965e2ccf00bd1ef5bd1f7fac"],["/tags/Dll/index.html","42155e3142d8377425e8c334e74522e8"],["/tags/ECCV/index.html","05f16d4b99f7271d58630fe8451225b3"],["/tags/EM算法/index.html","2b6fc09faed90c63a3817e60db34da77"],["/tags/Eolink/index.html","f8dec4a09d20d14ffaf237d4add20e45"],["/tags/Gitee/index.html","46d03c90db0fbcce90add7ea4624ad8f"],["/tags/Go语言/index.html","cfdc51d5f8f2fbfde54764ea2938b87c"],["/tags/Graph/index.html","81c0bce02253d4a7da7e328535829bbd"],["/tags/HTTPS/index.html","0a67acc7eb84b3e5d444bf8ae070d97a"],["/tags/ITK/index.html","bc5a2100dca60c503914197454d4a3c8"],["/tags/ItkVtkGlue/index.html","c747525e28e5e9f481b45114372f912c"],["/tags/JMM/index.html","7a3dd1c044e0a56c1fb7ef7085e34ae8"],["/tags/JVM/index.html","f590d38433bf18e278170ae84051a332"],["/tags/Java/index.html","20e275e24bbf5cf99c8928bc08d19f9b"],["/tags/Java/page/2/index.html","a8b8f127e11ca91786141a8490124b70"],["/tags/Java图书/index.html","0239323b11b3c28947e5c681c7a8e068"],["/tags/Kaggle/index.html","ebc9f3654198ef2836d6560719d5c8a3"],["/tags/Keras/index.html","80b6cbd69abcf90e3c41c0f3c9224d9d"],["/tags/Linux/index.html","d19372a555586fb831fbdbd7d8faf91c"],["/tags/Linux图书/index.html","e49c6754c4cf4ba17c0227fc468aa911"],["/tags/MEPP/index.html","909b4a2f12b7c7007b94be0b63c2c464"],["/tags/Map/index.html","c279fee7d6bd14fd5bc4a2ffdf439adf"],["/tags/Matlab/index.html","4a7d83f8e812384e6e22da46c6a6df70"],["/tags/MongoDB/index.html","5eead5cebe42f30a0f4d1c4dcbf2737e"],["/tags/MySQL/index.html","e840cedf60cfb97611364e316ab724cd"],["/tags/Parzen窗/index.html","6d44cc7b839d8ef728b147d585aa7d3b"],["/tags/PicGo/index.html","74bb0ca1a119e26c70653fa51ee7426a"],["/tags/Python/index.html","7e030a473adeddf124ce7a0a0844e796"],["/tags/Python图书/index.html","c960001288284ab8cc04659326ef7ad3"],["/tags/SPHARM-PDM/index.html","53d45480c75dc784a11f0fa6f2a7cb00"],["/tags/SVM/index.html","7166a6d7d1e61e7032a6e79f0c0ef289"],["/tags/Servlet/index.html","7490b3b37871b6f3a78b01a0db4f61ab"],["/tags/Sping/index.html","bc939fb734854697380332da5d51e17d"],["/tags/Struts/index.html","e19318109ef271094887c34f8da95898"],["/tags/TCP-IP/index.html","d71fd210c3ba9b4d778eccf60468578c"],["/tags/Ubuntu/index.html","b99dca14615d73cf3af3c05375191ace"],["/tags/Unet/index.html","7e0993ef9fcfe58effd9de5480bc5901"],["/tags/VS/index.html","f5b1f5108fd2b87cf5d33aa3b50d5680"],["/tags/VTK/index.html","fbefb1ef5763b5811105e0123bc1ebdc"],["/tags/Windows/index.html","5834f7a3fdda5c1be8c6e6b42930f2dd"],["/tags/edit/index.html","67ed5d72c3c201ed2ec6ce3a94d881ed"],["/tags/hibernate/index.html","e80e823b4339fbda5d22581df0127df5"],["/tags/index.html","d57734d9f554478f65acaef77f043585"],["/tags/itext/index.html","73bfb99918395372900c98a73441da32"],["/tags/jdk/index.html","d1ac561d741d0501aead6035ee11e1c0"],["/tags/kmp/index.html","e5aaf9d2274c131f6448d477c8f75727"],["/tags/k最近邻估计/index.html","620f70e5ef9a94559440403ef27c5f4e"],["/tags/lombok/index.html","2c94a102880039d3380d6ca374daf1af"],["/tags/offer/index.html","b52f034f639c83cb9ac9a3b25e7860ea"],["/tags/opencv/index.html","e3a5307c5f169e51a8dee564de318207"],["/tags/pandas/index.html","1041a590e993e227b5e1518a464823cf"],["/tags/string/index.html","31851abf6c62866f8634d8c8c0a9af54"],["/tags/vim/index.html","aa875516422f3746bd223e9aa4f3f0b5"],["/tags/vtkPolyData/index.html","1769e35ddddda6fd55b3277a4a3c881d"],["/tags/web/index.html","2af0dec4c7641b3a96a8ca4fb8d57b5a"],["/tags/xshell/index.html","9f8e8cf9bc16a708c5c33a63ca763e33"],["/tags/yeild/index.html","6a1a761b2c4f0524483531101443b123"],["/tags/互联网/index.html","82a849929f6b6212fa523ccba048f423"],["/tags/人工智能/index.html","ff5a262b6fe2493d4fe4ba7d0bec607c"],["/tags/体绘制/index.html","b0d29d0730b56b93b78c9abd7dc6a183"],["/tags/全卷积网络/index.html","e21555959feadd659ff8882b9db4e3ee"],["/tags/公众号/index.html","fbaf64d917a8cc981a76e3ccda41cff5"],["/tags/内存模型/index.html","8b8b1a723447127fc72a5082c165ca0a"],["/tags/内推/index.html","543404a93c6851606fcea194a56dcc9f"],["/tags/函数/index.html","195ac37520e51371aa2b073567feabeb"],["/tags/分布式/index.html","76e067cbfbcd8b7a37f56616981765c5"],["/tags/加密/index.html","1dd690d52ed45c76c680de1a7796f034"],["/tags/医疗图像/index.html","d40b390e42208304480a337999c97d0c"],["/tags/博客/index.html","ee7d8fd593674135fc9c0d1aa48915b1"],["/tags/图像处理/index.html","9c9a8bb14fa84bd2d6c14dd548c047c5"],["/tags/图像数据/index.html","a2250853261806e32f5d324f757435d9"],["/tags/图谱分割/index.html","884e192c7c9e3309ef354d0cb43ffa8c"],["/tags/垃圾回收/index.html","39f742642807b56f71a79878e9e7a4e4"],["/tags/多线程/index.html","ae4728ae4767c7e266ef676ff19e32e6"],["/tags/字符串/index.html","675a5617960be7a2217c2f4624045816"],["/tags/工具/index.html","7a34f9b5f81f21a09ebfb64c99e2821d"],["/tags/工具/page/2/index.html","799cca41a420608f1b928ec2f5b80ab9"],["/tags/弹性形变/index.html","35a0c0e65928b65114aee0def9b107c0"],["/tags/排序/index.html","e82e8f1808207ab6cd380a2b168aa1a6"],["/tags/搜狗/index.html","83f604eff7166f48fd6a4a44dc401107"],["/tags/操作系统/index.html","bfdce17b5d2a4c845e3535c449111781"],["/tags/数据库/index.html","4ba8e108b85f1ec630215069388687d6"],["/tags/数据类型/index.html","eb77357d45f8b30013ca6641ba40b113"],["/tags/数据结构/index.html","81a397289461fed509cb3e7331a32f3a"],["/tags/最大似然/index.html","fb4bfe1aed3dfc1d198960b04b6e82ad"],["/tags/期刊/index.html","f0e898d072cca8acb2ece797febde5be"],["/tags/机器学习/index.html","27a0434b19fdbe110793f065a9a4500e"],["/tags/机器学习/page/2/index.html","46c5d8df436692ff96c074ab722ca7d2"],["/tags/机器学习/page/3/index.html","029997066bd85eb8749651e4178ab7de"],["/tags/机器学习/page/4/index.html","56f3938ed2bc163ef037b376657c8cf0"],["/tags/机器学习/page/5/index.html","969755596df5d2e666616b16b50361a3"],["/tags/树/index.html","4780376549f36e0d2b11551982a59152"],["/tags/框架/index.html","1a9f3c9b53c8269727d27462634136cd"],["/tags/求职/index.html","12c760d4c8a11af7871e9640a2048b71"],["/tags/汇编语言/index.html","8ca4d718f871e7e350e4de261d8e21ad"],["/tags/深度学习/index.html","4a8dcba77081fc43854eab5c2897be60"],["/tags/深度学习/page/2/index.html","9256d7c16eb0fd565e5c506a7b341ae9"],["/tags/深度学习/page/3/index.html","999e059b4942b9e04943ad4c5d48a239"],["/tags/深度监督网络/index.html","6a24e96fdb512be918eb9f05527602b3"],["/tags/爬虫/index.html","b51f12573a3a37e348fae490c24685af"],["/tags/电子书下载/index.html","f8b92eb30ad5be6a2d3ccfa111489271"],["/tags/电子书下载/page/2/index.html","6db6825a3e7e6e80251baf691d378d83"],["/tags/程序员/index.html","dc7fd4a934e5f805303f4ea27bbd6649"],["/tags/程序员面试/index.html","6d73ccd1532846cdb81255e1caa37b46"],["/tags/简历/index.html","c48b84bfecae7aee70e410822ac3f1fb"],["/tags/算法/index.html","ee3ef90c4fbfbdcb11cd96e7fc45ca1c"],["/tags/算法/page/2/index.html","cedf6e3d06e5053507dff94f94745000"],["/tags/算法/page/3/index.html","aabb2154b5f591c5509ab9c016076d18"],["/tags/线程/index.html","ad53b427d5e5ef0b89ab6374d8b2cec2"],["/tags/结构学习/index.html","aff5ebae84291b517277c56e587b8f27"],["/tags/编程/index.html","b2737c9403d4808cf493be5fd04132fc"],["/tags/网站/index.html","5eb4867bc8f67d36008f3e8cb629cc96"],["/tags/网站/page/2/index.html","b585f28c7fd5e33948846e4cf23f5b7b"],["/tags/网络/index.html","0b8a5bc8cad6b5624b0ca3ed14f4c1f6"],["/tags/网络原理/index.html","b1d6fa5ab142670efc193c3fef3fe46a"],["/tags/肝脏分割/index.html","92bbb9a5001253108113b6c9f12408e3"],["/tags/计算机/index.html","8a06ed803385bbee80ae71d6eb54b901"],["/tags/计算机专业/index.html","382bd921aca5a148bd2685c098a6c9a8"],["/tags/计算机网络/index.html","6aca57750bce193695380c1041ac6c8d"],["/tags/设计模式/index.html","0962306d0a845cb42ff30daa2c02c1f1"],["/tags/贝叶斯/index.html","aaccd2ff04d03341814acb6124e166c4"],["/tags/迁移学习/index.html","200fb3f82dd74411672fe8eb15ccdb20"],["/tags/面试/index.html","010c18963dac81d29ce3cbdf4e8496a9"],["/the-way-of-pragram/index.html","831b69f78f33b95107b71ad2d5ef3b30"],["/untiypro XL安装/index.html","eaa700377f36478b2ab367304fd91bc6"],["/video-websites/index.html","192f822baef00c109dc1e90123efb992"],["/wechat-fans/index.html","900f99f0df551a4e5feae3d8b08daf5a"],["/window-run-VTK/index.html","ba36cdf1e9348d6aad3f1bf576ff9154"],["/xshell-connect-Linux/index.html","635d78d5cbe42a66f584495c001d98fe"],["/‌Accessing-the-Open-Internet/index.html","62a8c187dfd608249f5e0c5979fd9e99"],["/《Java高并发编程详解》，去大厂必看！/index.html","5e0eebf46575ed5bcc031ebe5401745f"],["/一分钟没了 1.5W 。。。/index.html","449b9e53f69d9a0ba566b840e3384cb3"],["/一条高产爆款内容生产线/index.html","883da40291858182bf456a6a8bbb32b3"],["/为高考学子推荐的六个就业前景广阔的专业/index.html","d51e023e1d37bbcc9c2ac0eb5f3f795c"],["/互联网赚钱机器---社群/index.html","41a65a9030896f63cd004ffec0a7c90c"],["/你们常用的工作方法和思考方式是什么？/index.html","f56fb45f1620baff63e52e96bb46ff34"],["/关于环境配置的一些事/index.html","563294677e70a56701f32c376fdce22c"],["/准备了19w！搞事/index.html","8be321f26c03273962a58bd59fb4f0fb"],["/几个很重要的感悟/index.html","91d3f9bb5121500c248c3f06406bfd1b"],["/分割ROI篇/index.html","16298e3e4503c35deefef8c87035e911"],["/分割精度说明/index.html","6b1f4aff98007fc89d2f17c52d93a244"],["/分块程序执行/index.html","a2bdeabc969641251b74f0d8f11ad744"],["/加班公司黑名单！！！/index.html","d46fdc02e3238e268da6f71ae51cfe59"],["/卧槽，上知乎热搜了！/index.html","09a297a293cb0436cce58642008a6d02"],["/卧槽，我的小破站爆了！/index.html","99bc84352f20dd92a1f781c9ba3dc401"],["/卧槽，我被盗版了/index.html","4cf317680050b162ccee17a5250cc915"],["/卧槽，还有985大学在大一上C语言课？？/index.html","afa43b0f115f72c9bbfce9fd1aa39e93"],["/历年微软面试中出现的leetcode算法题/index.html","72b63ca6e8c55e0fea5a5dbb6579a3ad"],["/去特斯拉试车了/index.html","e0ffca509d0fc4b3708f8acc41b1b17e"],["/吃苦的三种境界/index.html","700688b93e62d3ec21114a5d60c53b20"],["/哪本书适合推荐给 Java 初学者？/index.html","908ce257c6992f09dd2cda6644c73e08"],["/哪本入门级的学习数据库的书最值得推荐？/index.html","d9a0b912f27f41036cd00190587a3406"],["/国内外常用的AIGC模型/index.html","c81f932c7fdc5642cce2a7dc6e6578de"],["/国庆假期/index.html","ff01752ec158c4095ffe322e9fc64e44"],["/图谱程序字典/index.html","448a0f5f149b107ce1eb2c1074563395"],["/图谱训练与分割/index.html","19ec383f0a0d46fc67ebe75f5433b333"],["/宣布一件大事/index.html","2f727f57f55255a1d555d84d453aa558"],["/小鹏P7i试驾体验/index.html","5a7f1a77ceb0d3f777d1f32b28bdb634"],["/微信PC版3.3.0内测更新，电脑可以刷朋友圈了/index.html","b34e0847caefcf6b2902d833e8eb2f43"],["/怎么更快的赚钱？/index.html","109e144d55e48fdb2dd9f3f51acb4253"],["/我毕业了/index.html","08fa89cda965e077a7c30365fc88aff6"],["/我！真！的！找到了！爱上学习！的方法！/index.html","31f5e1cff9f5effbe36184171fad90ed"],["/户口的意义/index.html","6a7ad07a5051014edb8bd0c6c29aef66"],["/推荐两本经典算法书/index.html","ff06bdc7220459c5e6309780a5f26fa5"],["/推荐几个在线学习SQL的网站！/index.html","c50e349a9154481c68acfd316bfc162a"],["/搞了一个程序员成长晋级社群！/index.html","1c08c9d4875587801b9c5634d81ae717"],["/摘抄/index.html","23365d79cc3e96c1b177fce49ff0551c"],["/暴跌30心态崩了/index.html","785a13f266e80d36ca537a15e706035d"],["/最近很火的ChatGPT到底该怎么玩？/index.html","acc3888df8080a673a82f24e7042a7f1"],["/有哪些好看的日历可以买？/index.html","84a630e1899040984bd90d628f9e9c28"],["/服务器有啥用/index.html","739b0660b2d4d1526052095aac0344c2"],["/来长沙了！/index.html","4fd38d58c65535807a8d4fb973dd5ee6"],["/校招污点公司名单/index.html","3ecb77136db910d8128171ff398b3c76"],["/梭哈200多万/index.html","061969e171fcaa18531a83f57397b103"],["/梯形图入门/index.html","b9ab89cd41c686f7c248b6419c5ca6e8"],["/橙心优选，凉凉了！/index.html","6ea0a6f55f4b3300ad50eb2ad4581cb2"],["/比亚迪汉试驾体验/index.html","6874790341e30d5d5451761f54accb09"],["/清华转学成电，真的牛逼！/index.html","82e71f1d7401c75d3ffa23cb2c69635f"],["/滴滴程序员被亲戚鄙视：年薪八十万还不如二本教书的/index.html","b8b3dfa14163408a5db64f94450ee579"],["/社群！/index.html","33cf4a376851de1cc0776e2f080b8e97"],["/科学上网之VPN篇/index.html","351e564e543c8a34ead94dbc7fdd4c84"],["/程序员必备的几个技能！看完你也是大神/index.html","2c3b0ac4aa43f3c166db558518c94895"],["/程序员绕不去的槛，Linux！！！/index.html","e683889d53038c0121316a89aecd147f"],["/蔚来ET5试驾体验/index.html","487c5618b76fe3ccaeb7c09d34e7ddd8"],["/蔚来，牛逼！/index.html","acf736cc875e5253c7ad345eacefa81c"],["/被录取了/index.html","2db089dcc1cce1aeade4f107a30c98ae"],["/被找事了！/index.html","68cf9fc97b43f80190ae7f95723819e9"],["/被拉黑了。。。/index.html","175e6822a2e90afe75bf760315d165e6"],["/被车撞了！/index.html","db48e5cc26939d332276b639dd7064e3"],["/该如何选购固态硬盘？/index.html","9d03a580fd482cc51ea4b29b7c294f2d"],["/这本书一定要看！/index.html","d303469bbbda82deaa7e9852ce190e0a"],["/选Java还是C++？/index.html","1e9ff75de751a7ad3fdb86ef7f3cfb10"],["/那些让你起飞的计算机基础知识/index.html","9e0063f456a433f4edcbe997f732038f"],["/靠这几本算法书，成功拿下大厂offer！/index.html","2dc9f5ab2a6cfcc404877159e5105ad4"]];
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
