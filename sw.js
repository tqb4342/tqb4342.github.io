/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/0010-city/index.html","13eb6adf5fdaa2e8c8e664b56ce59e4d"],["/10-algorithm-book/index.html","95214de918bb74453bc9864fbc7682c5"],["/10-website/index.html","7409af0b7be7f29931119217d0994d76"],["/100万的小目标/index.html","fd7ba3af21d14cc16c6eef45a1827fbe"],["/10w+YYDS！/index.html","93e5706fd2e373fca42a2c12c933a7fc"],["/12-technical-tutorial-sites/index.html","c8e429bcbfbdb0e39c6d44f1f72a8063"],["/2 6 岁 了/index.html","889b59eb5ed093f44d048ed4ff5f56a0"],["/200万，啪，没了。。。。/index.html","0d1f76c26b8ad3c595a783e142721269"],["/2018ECCV-Paper-DL/index.html","a97347dccad3e5074459fc6462d4ebf8"],["/2021年固态硬盘选购最新攻略（小白避坑指南）/index.html","452578ca720a61b2c41974c7a41df7e0"],["/2021机械键盘推荐/index.html","e2b298686ffa36259e9b32612fdb5242"],["/2025-07-15/index.html","8e340ad85da0cc0b2c91675897331413"],["/27岁了/index.html","62919fc9b20486f68602f1c900d12df6"],["/3D-Convolutional-Neural-Networks-for-Human-Action-Recognition/index.html","6c1630cf6af3b1edd310f3fcbade0020"],["/3D-Deeply-Supervised-Network-for-Automatic-Liver-Segmentation-from-CT-Volumes/index.html","99e0ab1eb541ae6af52506159875bbe3"],["/3D-Unet-Experiment-notes/index.html","46e0f2f2dba3334716b5aece715ca304"],["/4-Software/index.html","7f3aed6ae9af43a4b7f3b0d87eee0c66"],["/6-website/index.html","2c7395f73415fbdb03797ed5158fab9b"],["/7-terminal-tools/index.html","1ecfa0a10e256f51001d1fa60b490f11"],["/AIGC中典型的深度学习网络/index.html","c7f106077a19dd8a13522ecf7d6fd421"],["/Agency-model/index.html","54f0323c711c1f2ca2fdb1f0b49eda05"],["/Algorithm-brush-notes/index.html","0a92e0284a912b2a5b3009305a27b1f4"],["/Ali-recruits/index.html","fa623edb1b264fa47833644d2e81c8e4"],["/Android-VPN/index.html","bbdb54a3b2976b37bf66f0b13944565d"],["/Android-open-internet/index.html","af608e0edd2e3da34c5ae659b3009503"],["/Appearance-mode/index.html","895616193314efd329dda3e22be4c5c5"],["/Backtracking/index.html","93c3b2abae0140e730dcbcf319bc2e8d"],["/Baidu-Sao-operation/index.html","70ccb77dda5d99dade7fe4acb623424b"],["/Batch-Normalization/index.html","4a3d4f1a15a78914c1582503e328aa10"],["/Best-AI-tools/index.html","0381a0cd0b104c11001f5cc6130a5318"],["/Bias-and-Variance/index.html","d0d8ea6781232c03ce551ea5c6103893"],["/Binary-tree-traversal/index.html","3935065fffcaf087e21051516ef559ec"],["/Branch-and-bound/index.html","2b8f795cfcbbb7e320e6c1e8b49887f8"],["/Buying-computer-for-the-first-time/index.html","03fdfb6caf4c69ec22f3f290d4b49e0e"],["/B站向北邮道歉！/index.html","c9a01f41298c3dfe903e653fc7fd7462"],["/C++-string-function/index.html","8c5f5671a157dae9458371670ad518af"],["/C-Java-DevelopTools/index.html","c005a4f930a66efcf65528230fb56acc"],["/CS-Classic-Books/index.html","6fb8a946be2d60e21ed41fd1d8bc94be"],["/CS-network/index.html","3f9fae7a327059740413ca8d692303ee"],["/CSBook001/index.html","298a975cb6222d6d1d5b9177c6a466ac"],["/CSBook002/index.html","40b5b1e6cbd6ff73e3b71c829f9abda6"],["/CSBook003/index.html","cb68ed16a482ea200e02290b2ba0aa44"],["/CSBook004/index.html","840ab3dedc89cfdcff94952a3e52d704"],["/CSBook005/index.html","6ed4619c7bb3e22d161421f116b18303"],["/CSBook006/index.html","0a15cace30bd23d35e814176377cad53"],["/CSBook007/index.html","f28baa93539945a944ea4bce249de2b8"],["/CSBook008/index.html","c340571151a922c949b6234978326529"],["/CSBook009/index.html","a4d33f4cb9a50a450bba4fa3fbaa84de"],["/CSBook010/index.html","c15ac3c993f083a738c4c0148b6298df"],["/CSBook011/index.html","ee32dffe00509a0d483c109a16780f09"],["/CSBook012/index.html","3dd22ca97d7228f2c2984f5ee6add411"],["/Changsha-really-fragrant/index.html","e52565284e69b3e041546dce61ea6087"],["/ChatGPT-VPN/index.html","a985166719e394b979387bb74fcbeeef"],["/ChatGPT/index.html","fe67e8cb56dc707080968ff8d808d8e6"],["/ChatGPT！王炸级更新！！！/index.html","c5ee3a5c2eefc1d9eee08a84a262e8ef"],["/Chrome-crx/index.html","533d60a1cd057714e8d54e44bacc243c"],["/ClashForWindows/index.html","8c01bc257102b8c449ab1de7c8ab067e"],["/Computer-Classic-Books/index.html","c45c3601a4b9ab0957b9cf68c974d4eb"],["/Computer-for-another-major/index.html","9a03c264351b3688b50638f7a92124e4"],["/Conditional-confrontation-network/index.html","1b58f78cd6aa347e517ff5db74c7baae"],["/DNN/index.html","7ff7150f742f0d87c8f24252e9e77b49"],["/DSN-segmentation-liver-experiment-summary/index.html","f02745ee863dd151ef43934c76d5d6c8"],["/Data-enhancement-elastic-deformation/index.html","be0c65deb9f9980b6cb140ace6df776d"],["/Decorative-pattern/index.html","66c434758e5205e67549d61e135f1971"],["/Deep-Learning/index.html","dec58d044b5d0388487b29105a188b88"],["/Deep-learning-and-medical-image-analysis/index.html","6e931564ac8e3235c192635d8e3f3100"],["/Deeply-Supervised-Nets/index.html","6610fd3208a2e3e62772be7518a09eae"],["/Deformation-model-based-sparse-representation/index.html","95b60a9ea7d210e2308ff6b6df165b4b"],["/Discriminative-and-Generative-model/index.html","6c2e9ac5185d7533472b4d2f0469942f"],["/Distributed-transaction/index.html","14ce9ac1976c9e82696a27f267cb0c2a"],["/Divide-and-conquer-algorithm/index.html","9d62acd83d8a38067fcc8cf44cd8d420"],["/Dll/index.html","73ba6375e7446aafdb07b41b7d44fc43"],["/Dynamic-programming-algorithm/index.html","788ce9a6e881d4dc4306ce03dd3ef34d"],["/E-book-download-commonly-used-by-programmers/index.html","9f73b538a6a5f0391bdbaa6c92c2d9c2"],["/EditPlus软件的安装、激活和配置过程分享/index.html","1121ddbec97bc7d386fe38b3e234acce"],["/Eight-sorting-algorithms/index.html","a62025e6b79bfe6111d2a9f96a39a269"],["/Encryption-Algorithm/index.html","e69bbcb62d3d91322b83dc4ab5116439"],["/Eolink/index.html","07486840fbdc79af3604f82a5c8791dd"],["/Factory-and-strategy-mode/index.html","f7542384a169d1338a182b0fee27138c"],["/Foreign-technology-blog-community/index.html","3f3b675e8c3ade2f51aa080c8dbec5a3"],["/Functional-model/index.html","adcc64364aa00fbfda9f78f5faec96bc"],["/Fund-type/index.html","567f8b07d9c8312f0409171e3d478dc4"],["/GPT-4o/index.html","8ca8efaf49364deeb8aa856154bda4c2"],["/GPU-medical-image-processing/index.html","9d6ef50df4a641739bad9c358547d470"],["/Gemini/index.html","652e2ff0960b99bd0c8dbd86efd8a140"],["/Generative-Model-of-Unsupervised-Learning/index.html","2a627c04e574191f7ebcfd37be938aa5"],["/Git-Learning/index.html","83d8f63cae7054e607f95bdd32506ff6"],["/GitHub-2FA/index.html","95ad5395cf45537124f8d817654e77bc"],["/GitHub万赞，程序员必看操作系统总结！/index.html","1da261b9321146259e0f0155be6c7d5c"],["/Golang-book-recommend/index.html","5b02847c6b3d93ea00bad7f4a8c9e4f2"],["/Golang-learning/index.html","a47883076c118046b80c9ca37b70d807"],["/Gradient-descent-optimization/index.html","279600a481e77d78886e0c97bcfc2f87"],["/Greedy-Algorithm/index.html","218f7e36b46645b27fc1e6443aa9aebd"],["/HK-bank/index.html","61aa8a27c65dd89ba05593bd419df29a"],["/Head-to-head/index.html","f175260b3588e7c0cd2d10fbc1422d07"],["/HexoPage/index.html","10812ed2ef72942ea9e774fa510f8de4"],["/HistCite-Pro/index.html","a40b89763e31dd6439f494059284fadb"],["/How-does-the-program-run/index.html","4034040ee07b9498df202eb94a3006b7"],["/How-to-judge-whether-technologyisreliable/index.html","57bf027c999d32873088b55c1e8336db"],["/How-to-learn-design-patterns/index.html","196deb82f90afb2f4b4ca6ca8425d60e"],["/How-to-learn-design-patterns？/index.html","284153364f2969fddd50e3253da6a8d2"],["/How-to-teach-yourself-programming/index.html","c13e3c1a57eba38e3649eb8e40335673"],["/How2learn-Python？/index.html","2682c60811627f3c832ea7bdfdfc6f0c"],["/IDEA-shortcut-key/index.html","dc1dee171f66229141783e0daa804ed1"],["/IT-interview-basic/index.html","71d5cff5b032fdef233af78f3f3b1fc9"],["/ITK-VS-install/index.html","17d4b200a02e7742955a4ddbe81dc363"],["/ITK-VTK-ItkVtkGlue/index.html","c08d350a4db0bcac014fd9afc0a9ecc6"],["/Image-processing-plus-noise/index.html","17ccc5898bc96b4573e9f4b157e53323"],["/Inception-Going-Deeper-with-Convolution/index.html","8a6e037b3a8ead0d65a9cc398b5852b0"],["/Java-GC/index.html","71b7eda690e6ef38c2cec58c7e88dc10"],["/Java-Servlet/index.html","251b4381315464fccf1d7bd18a4487df"],["/Java-array-and-collection-sorting/index.html","d09ab315470473a4a2bc067ff377fda0"],["/Java-development-tools/index.html","41d290b3137e947dcfdef0df5aa66585"],["/Java-eight-data-types/index.html","f27ec58fb3378c10c3a2f4d82f984601"],["/Java-interview01/index.html","fe1403b744876e8f2b8d74b938d22753"],["/Java-interview02/index.html","afbdf874c855220d987a691fa8c8693f"],["/Java-interview03/index.html","de23444fa27df8b75fe0cacc69256c2c"],["/Java-learing-map/index.html","f429446ab290b752c547cb37630bda50"],["/Java-learning-route-map/index.html","bd72b85038f26163c2b93f204e962f28"],["/Java-memory-area/index.html","cf344bfb16a6c63fc4855ad4bb4cbe90"],["/Java-memory-model/index.html","dd022c1fbcd428d45a5a50e7378cf268"],["/Java-multithreaded-learning/index.html","6700765d18b01fcd1d92109efc5e0e46"],["/Java-project/index.html","f38062ec577743983cf3ac9e4e025b88"],["/JavaWeb-Chinese-Garbled/index.html","fbf75877817cce2d0374707bee323672"],["/Java还是C++？/index.html","eec0ab96bac234b7c6b6597fbfba0c8d"],["/Kaggle5-step-guide/index.html","10bd8de9618aad7ac086f1d78dc42ba8"],["/Knowledge-points-of-Java-garbage-collection/index.html","2bd9f78086783f78c17183c1c63e87bf"],["/Layoffs-and-Hiring/index.html","5badfe298873729b210cde09165407b5"],["/Linear-regression-of-machine-learning/index.html","783998167a2774975cde5fd97e9af88b"],["/Linux-Compile-C/index.html","df53397955e62dde5d29187fa6014373"],["/Linux-ITK/index.html","c5115ff0ace652872f47811e8fa64b42"],["/Liver-segmentation-of-sparse-components/index.html","919083efdb2ce61b74eba9e194867985"],["/ML-EBook-paper/index.html","aa48beb179195d3ba928f3b90ab3586b"],["/Map-uses-multiple-maps/index.html","929e4f285b4799bfc3ce27ac221b151e"],["/Matlab-Graph-cut/index.html","7574341b20d355db13f12d609fdc67b0"],["/Maximum-Likelihood-to-EM-algorithm/index.html","714b5776f58cb9892c7595b03954a668"],["/Mean filter and median filter denoising/index.html","dbe3de1f605e2e17f74926a9f47758ff"],["/Medical-Data-for-Machine-Learning/index.html","28e6395c807a94c266059ad46bd97c61"],["/Medical-image-analysis-deep-learning/index.html","44d2fd8b679847a9ff1a5530f5b9b95d"],["/Medical-scan-image-processing/index.html","421fe5a3ed58a9eabfbe92de60b8b414"],["/Merge-sort-algorithm/index.html","e81fe2f8f2ea327606c82366b8fdd77b"],["/Monthly-income-2W/index.html","b4780b7b278202aafae5263b77f37423"],["/Mysql-database/index.html","ea393efeabe6220280750fee89200077"],["/Neighbor-Embedding/index.html","48327b65841082bc084576e5ef2481cf"],["/Neighborhood-approximate-random-forest/index.html","adc85f5afd3025020360c65fd4bd1c80"],["/Net-and-official-documents/index.html","be3808612784a117d5cf9b262f9f453b"],["/Netflix-VPN/index.html","5777c5bf2687eb1d5dfcf1903d455377"],["/Network-principle/index.html","3fa0fa0204333705cf45d0d980cc8e6c"],["/New-Hong-Kong-stocks/index.html","84f906dbb6d9b93be4231c8c7816b7a8"],["/Nice-to-meet-you/index.html","dfe68c9f5ccb7974a7efce14a7483476"],["/OS-processes-threads/index.html","12c71bd6d88ec7c4285f3e62bbefe731"],["/OS-run-environment/index.html","e829d85af99722be604aaf4b576ed669"],["/Open-Internet/index.html","989ff932d1f05e59b16654f2319f11c4"],["/Open-Internet2/index.html","f12c67ed3190e2f87a85d309d1af5d38"],["/Open-source-community-and-rewriting-website/index.html","6e20208d596888c514c336fc315bd454"],["/Panoramic-image-stitching-based-on-SIFT-features/index.html","fe5d190fe88d0e7be2c9474743938008"],["/Parzen-and-KNE/index.html","89b679cd71e0dd0a8562c376d0ea6cd8"],["/Personal-technology-blog-site/index.html","57c2f3d59b578ba50294f9d29d410f46"],["/PicGo-Gitee/index.html","c3aa76aa88c7c6885f706265c5d3f408"],["/Programmer-treasure-chest/index.html","9d5d0aa4fbb8e19dc76b8b342d69feee"],["/Prototype-mode/index.html","859b70e97dee987088a6c4fce62e6853"],["/Python-base/index.html","f4accb199a829d757de05892195bd711"],["/Python-crawler/index.html","de989083b57c0be36f0dcc44de9094d3"],["/Resume-revision-suggestions/index.html","14402606d6a93c715a663a31a807776e"],["/SEO01/index.html","06a962e69955186ea2b40c02d1a6b595"],["/SEO02/index.html","bf0e51fdd86614cde0a4c7089bf451a8"],["/SPHARMPDM-MEPP/index.html","6f14158ddbfdde6bf1a45439e0f71bf6"],["/SVM/index.html","00bf6a9c3fc333acbd30015513faac5c"],["/Seata/index.html","6f6475590a1ab2774a7c53b4ca1acad7"],["/Semi-supervised-learning/index.html","1fabdac8e0f01421476a2defd01e3348"],["/Sequential-model/index.html","7ec140a5ce560a5ac1deabab6fe85f30"],["/Shape-Based-Human-Detection-and-Segmentation-via-Hierarchical-Part-TemplateMatching/index.html","cf6a311b603fb57bee6b703a9cd15f7f"],["/Spring-basics/index.html","834b4caf16d21d2b8731068d3a8fe581"],["/Spring-integrates-hibernate-Struts/index.html","e30980f886f1f775d1236de2f820412a"],["/Structure-learning/index.html","7752353c53fe41e072e44b0a8bd8a646"],["/Suggestions-for-self-study-of-computers/index.html","546e1eb5f5cf71a652c056562149841e"],["/Summaryof-HongKongStock-Account-Opening-Links/index.html","9476452fbdc9399218eb256d149fdcdc"],["/TCPIP-detailed/index.html","03897298b1dafbd6f86ad987ba00a0f3"],["/Telegram-VPN/index.html","b4c16aef475500d523a30979f504ba90"],["/The-essence-of-shopping-festival/index.html","36519255822c6918ded5e7978b261c83"],["/The-most-important-investment-in-life/index.html","0d061d7bfd61c79bece3a3702c4d4902"],["/The-most-successful-nvestment/index.html","d6d4b8c136e5f198f2e83c481cfdc4d1"],["/Transfer-Learning/index.html","5f14207c009c1c2a121dab15cbb71c36"],["/Transfer-to-computer-major/index.html","b13315412a7ff4703e36d522904b147a"],["/UNet-Convolutional-Networks-for-Biomedical-Image-Segmentation/index.html","00feddb2362ea1b91de484062bbcd042"],["/Ubuntu-install-sougou/index.html","36de852c75905749040855371ed0e034"],["/Understanding-of-paying-for-knowledge/index.html","a2e2f6412e2611dae4e92f9e800d344d"],["/Unsupervised-Learning-Linear-Dimension-Reduction/index.html","95f03f852e0b7a49f96b4492aa7944c1"],["/VPN2025/index.html","462a77047cff6d710daf87a54d09a443"],["/VTK01/index.html","8c9e5eefeaec27af05c5fe8f4daee072"],["/VTK02/index.html","a0e513cac80082dd5275df0dbca8cf3e"],["/VTK03/index.html","5c953ce8411db6f22046662b5e505029"],["/VTKRead-write/index.html","0ff0d3685b4afbbcd74c0d135dbb1038"],["/We-are-all-good-kids/index.html","72b5beddbfbe5e2f19afa5d722a552ad"],["/WeChat-80/index.html","f79705d585dad2a6f1edd2a200d1b2f8"],["/WeChat-red-envelope-cover/index.html","700f394ca760c7d656c02b11d153d6b0"],["/What-is-crawler/index.html","7432edbe8b9cae770c27c588f3de182d"],["/Win-OpenInternet/index.html","9000567ea8736eb1abff1eb09d04f6b1"],["/Windows11-2kfans/index.html","815bae9a4f9fc557b5fa84bff0edb382"],["/Word-Embedding/index.html","2ad1042b0ad41f6ac1e2dc51c15a880d"],["/YuanShikai-and-his-Beiyang/index.html","6052860d68b50067bac4f11fb7f94aa4"],["/Zero-copy/index.html","25a4a16c145cd12c23d0be63e19ffde7"],["/about-keras-model/index.html","06d1d309bd2549c78a6d96f0bd6aa0c1"],["/algorithm/index.html","84e9033a1705e9373cb67d59150984a5"],["/alibaba-Java/index.html","b8e4e2847ed9cb5c17c03fa507a2d6b9"],["/archives/2020/01/index.html","40245b80690066cf053fd186020245e2"],["/archives/2020/09/index.html","e334baec5112f9f47fd2415f7f9609ac"],["/archives/2020/10/index.html","6d72809008230131294bfda48b5c3b81"],["/archives/2020/11/index.html","d72adfd8077f2dedf8a9d050cb51ea7e"],["/archives/2020/11/page/2/index.html","9f099220fc550e7f27bce555f5f50c2f"],["/archives/2020/11/page/3/index.html","73e15b03b8cbbc00cae7cd2e4d1aa04e"],["/archives/2020/11/page/4/index.html","156af707cc8bca77331a21d41c13c80f"],["/archives/2020/11/page/5/index.html","5d68a88583d50d5457e2faf7d4e13e4e"],["/archives/2020/11/page/6/index.html","f5b75a98a185c0f4f8da3564071d4f79"],["/archives/2020/12/index.html","87da22d6752142c843f7bdf6d6d48a84"],["/archives/2020/12/page/2/index.html","3770cf3ebeee9b56a3668f60a72a462c"],["/archives/2020/12/page/3/index.html","febec906e36c0c52555654d4ad568a79"],["/archives/2020/12/page/4/index.html","ab27a33865a2d040fba425d02f46aeef"],["/archives/2020/12/page/5/index.html","8e11ea0c76349bdf27afd10ceafc17d4"],["/archives/2020/12/page/6/index.html","32ab08a69ce846935db568de57301db2"],["/archives/2020/12/page/7/index.html","0bab15e2288fada06163d1f35e9e2940"],["/archives/2020/12/page/8/index.html","f991720e853384c3c131477b732f14cb"],["/archives/2020/index.html","3a6338c0e5ae53998f04f59ea20f8262"],["/archives/2020/page/10/index.html","a1f9906e2da7ee2b19f0edf2c7e0b65f"],["/archives/2020/page/11/index.html","58d4f6ecdda4234f56d6e4714954c7b3"],["/archives/2020/page/12/index.html","edcb6b80f07c1e02df9856c6681cffa6"],["/archives/2020/page/13/index.html","59e378122fc1975afe57ff4d79b6aede"],["/archives/2020/page/14/index.html","0cbcf66eb6c4fcc8eebd045584016fc5"],["/archives/2020/page/2/index.html","50c194d695724eef124f14ee6b901241"],["/archives/2020/page/3/index.html","268b2819d4bbbc5be03072ac862e5d97"],["/archives/2020/page/4/index.html","89a6ce1ff10c53e765d97d5c836fc997"],["/archives/2020/page/5/index.html","760fe977397598ec41c78f5d8a3a6a05"],["/archives/2020/page/6/index.html","8bbb1b29d6dc50a7632bc599ed7ed579"],["/archives/2020/page/7/index.html","f47a5d628f47ddb7c1f11aeb0e1114b8"],["/archives/2020/page/8/index.html","18a255e178b35021e8278853230eb3bf"],["/archives/2020/page/9/index.html","e893edb83d02a8f10523215a3972ad6a"],["/archives/2021/01/index.html","dd9af304608457df5d36002bea022cff"],["/archives/2021/01/page/2/index.html","a7149a7099ca330d088c0f787a25a213"],["/archives/2021/01/page/3/index.html","7e889464e47345e2dd4994cca22ba9b8"],["/archives/2021/02/index.html","9abdd4df50dd8fafa4563c2419f4ca22"],["/archives/2021/03/index.html","464c6102f89701b84b04eafaefd385c2"],["/archives/2021/03/page/2/index.html","3500d1797fdb016fd31ab61ec66cbec7"],["/archives/2021/04/index.html","3c06074c0131736aad86c56ea33dec69"],["/archives/2021/05/index.html","b8a2c7c880d379309f3c1874422a74a6"],["/archives/2021/06/index.html","424355e092fa8646591cb3c47c82e820"],["/archives/2021/07/index.html","f41dcbdcd0c9ba3f554178f3644c924d"],["/archives/2021/08/index.html","c23b9fc819de3370109f315479a27b7d"],["/archives/2021/09/index.html","916f7adec63d61441212018966caabf9"],["/archives/2021/10/index.html","e6a4c1a3e6340a4426d61e676aa32e72"],["/archives/2021/11/index.html","3491a8a757048eff9dfd592a573b768d"],["/archives/2021/12/index.html","708fe5d2a34db43ee82f85c213d4fbf7"],["/archives/2021/index.html","a5035737ee7a83a06fd23f737371ae64"],["/archives/2021/page/10/index.html","050779fc6607dc4e291663e1c4d4f5ba"],["/archives/2021/page/11/index.html","1ed3ab0957f200432c06bb666e8281cf"],["/archives/2021/page/2/index.html","f44788bf0919f792e0020390a3558536"],["/archives/2021/page/3/index.html","54e478d93d700fbe57dac6878632287d"],["/archives/2021/page/4/index.html","95a7b9e57f665dcceb7252c9ea8313dc"],["/archives/2021/page/5/index.html","56a0c530b524757d6c445bf075734a31"],["/archives/2021/page/6/index.html","95d9e47e8ab1d8286fa6092f8a1a4163"],["/archives/2021/page/7/index.html","ee26b730a6f5e784131d79455e61ddfe"],["/archives/2021/page/8/index.html","50fcd9b36197f8caed9a308bc16bafda"],["/archives/2021/page/9/index.html","bd878e4fcedecdf5f0f8ddcf0b7e3bfc"],["/archives/2022/01/index.html","bcbf87c09c8247594ef1d8577b71e200"],["/archives/2022/02/index.html","c9c1d7c2c11d8874336b644495f237cf"],["/archives/2022/04/index.html","4da73ca8f68bf69478a2edbdd13c3896"],["/archives/2022/05/index.html","01063a290ece20dfb07f93f81500bee6"],["/archives/2022/12/index.html","bb8d6003fa5003734a0a544cee314ccf"],["/archives/2022/index.html","abbbe98d4ffe334ab9c674c5da371884"],["/archives/2023/01/index.html","e2006efa94ae435283dc772a10457927"],["/archives/2023/02/index.html","ffde20d9a0fde8255f25957861b5721b"],["/archives/2023/03/index.html","e5d77e571fa2359cbca12357943b355c"],["/archives/2023/04/index.html","dd6f7a81bb657da8c07558b6cdccc7cf"],["/archives/2023/06/index.html","25b3c233cfc7549b374c5f5f2f0142bf"],["/archives/2023/08/index.html","fc4f5b922d02648407658baafe39b0e8"],["/archives/2023/10/index.html","58a929b0492ace15f2a4a171a23f209a"],["/archives/2023/index.html","c60a027066eba38b9b3c12e26dfbd6c1"],["/archives/2023/page/2/index.html","775640086a8ed18a1c70c863e8e8807b"],["/archives/2023/page/3/index.html","8b34cc6765712779d40dab1a8c42c0e6"],["/archives/2024/01/index.html","b00092efb196fd10a3e0231acedea4d8"],["/archives/2024/02/index.html","87d2d1827283879df3689eab8acbf44d"],["/archives/2024/index.html","1c12df575c54140ee27983b208739c9d"],["/archives/2025/06/index.html","f55fde93b788113118b9f6a0643a9bf2"],["/archives/2025/07/index.html","7e3a433b3ae56002e9dde52a8738d2bb"],["/archives/2025/08/index.html","ea4199117f8c525844697b48cd1f5b58"],["/archives/2025/09/index.html","3f157507a2245f2bced7c914b7f78dfb"],["/archives/2025/10/index.html","218ebf7ebdf117293debb8b6e8c3ad62"],["/archives/2025/11/index.html","5e7e2ecdf339d2f4544a9aa8c91a07ca"],["/archives/2025/11/page/2/index.html","2416496a0174479398ada78f924e9eed"],["/archives/2025/index.html","f4a304e1909270dde69e9933328b55e0"],["/archives/2025/page/2/index.html","1f97eb85d5d54926a66a77f121f868d8"],["/archives/2025/page/3/index.html","9e2b6b550e4a0289e306d594dbe858b4"],["/archives/2025/page/4/index.html","eca0c382b77f93a4210befc3e3555ed6"],["/archives/2028/02/index.html","eee467345c8155eda4fbdc063580c27d"],["/archives/2028/index.html","c285844cb512812a71eaa5fcbb2b1650"],["/archives/index.html","b5eee11b20ac2f686fa01c3af1c7c694"],["/archives/page/10/index.html","a41fcfccb4ff7244b1aac97a37a6ae05"],["/archives/page/11/index.html","bd4e142f5d61886b8c8768559ed50d8e"],["/archives/page/12/index.html","9302023c7ff864b6fbbb8c1fe1424215"],["/archives/page/13/index.html","c675f6278cccf7a13f3103d58ffdc78f"],["/archives/page/14/index.html","8e361f2b1a155df8bea1512594c53d62"],["/archives/page/15/index.html","aeab81a4e6eb20a59fa6db458179cba1"],["/archives/page/16/index.html","a1673e3c0840984d84b44d5966c5738c"],["/archives/page/17/index.html","e9d0f28a020460d912fc6f59a9a27a93"],["/archives/page/18/index.html","6744fda8da6165bddf088c528f25c520"],["/archives/page/19/index.html","70e5fc67757ea36325c208cd182161bd"],["/archives/page/2/index.html","b63c6fe8aab4463b142a0b9b57711dc9"],["/archives/page/20/index.html","712751cda0161d747a7bab68394a37de"],["/archives/page/21/index.html","4383f2c49e53d5dab9dd963197afded5"],["/archives/page/22/index.html","33f37837c5ea72a663c7afcd3000e829"],["/archives/page/23/index.html","e526714da62e9d973f2fdc85bc174e5e"],["/archives/page/24/index.html","f03f8f764552763d7cf9a9651422d0ae"],["/archives/page/25/index.html","c6adf277e238adf1da087a4910c171f5"],["/archives/page/26/index.html","ac88b1a41f7501a30b0c024f9ff26b2f"],["/archives/page/27/index.html","7e3d1f3517a409f2133635bc69503421"],["/archives/page/28/index.html","bc09bfa2f7b4e52bc0aeaf74f68da959"],["/archives/page/29/index.html","7cfda8d48677706606be394592b64333"],["/archives/page/3/index.html","29471b98eb72523c684682c6457d007e"],["/archives/page/30/index.html","55ef8d2f95d0808fbae6bc81cc4b0c03"],["/archives/page/31/index.html","99a80f1e279b178fe1b02a3529bccf96"],["/archives/page/32/index.html","bf3d91ddd80e9632ac3ba4216fb6dc99"],["/archives/page/4/index.html","677f8053a7805632cfe1a116a9828168"],["/archives/page/5/index.html","f05480cb37c0aefa53f115336c839259"],["/archives/page/6/index.html","d040f8a64e0899ba49562356521c29da"],["/archives/page/7/index.html","613ebfb481e2c7c7d87b4a003ca104fe"],["/archives/page/8/index.html","b558ba012484a221c9433cf3d7ed0b44"],["/archives/page/9/index.html","f17135abaf847d4d89769ad4262f62d1"],["/baidu-search/index.html","f062441a86cbe75df788fe4e233a6d2f"],["/baidu_verify_code-Hh2fKNlEB1.html","0283a7aaf730255e046461abdb899a2c"],["/be-a-programmer-instead-of-a-code-farmer/index.html","9e32ea87aadbee9eff860393f8ef9fd7"],["/bought-a-house/index.html","78a8f71269f11bdab259cc0755acd914"],["/categories/C与C✙✙/index.html","869d73ba8d0e50d351dddea5338881fa"],["/categories/Go语言/index.html","84a3264ce4888d6894580e31b71f84e8"],["/categories/ITK与VTK/index.html","faba9c61a7b5fc85a2346475153f4867"],["/categories/Java/index.html","8e18a443430a78e94fb41978a4a7987f"],["/categories/Java/page/2/index.html","530643e3e7138f4b0a8dad7486351c12"],["/categories/Java/page/3/index.html","7e34f17bb22fe3dff7484925d3d68780"],["/categories/Linux/index.html","9eef0e25b9dc3b92966850b62b0d5a89"],["/categories/PLC/index.html","7b0832ddc3cbf0b2571ce7736ea13c1d"],["/categories/Python/index.html","f92a73e5ae2b8f68cbe658b9bff0c4d2"],["/categories/SEO教程/index.html","e509bfde5e50bcb4d1d9b62da695795c"],["/categories/index.html","cfb25ee4ef972a38da811957b86c33ff"],["/categories/图像处理与机器学习/index.html","d10e51652bf38c116594055e8e8f1228"],["/categories/图像处理与机器学习/page/2/index.html","fda9949f17125c9edd9e8f80fd1c3536"],["/categories/图像处理与机器学习/page/3/index.html","32398eca60228b37d21102ae755156d2"],["/categories/图像处理与机器学习/page/4/index.html","2805b2ea32b1dd386f6a0d930158b51b"],["/categories/图像处理与机器学习/page/5/index.html","21581b9e930710a84183c04cd688e2e3"],["/categories/图像处理与机器学习/page/6/index.html","e0b681b96f80a60f6f54b84e110dca97"],["/categories/工具/index.html","fdb46340a9d439ed225bda59257e3543"],["/categories/工具/page/2/index.html","de482ece9efd31effdb280ea3e9bffa1"],["/categories/技术以外/index.html","639ab231dc654030e90478ba21465240"],["/categories/技术以外/page/2/index.html","a53d3fc578017f760e405f68e0b6cf3d"],["/categories/技术以外/page/3/index.html","0a036ecb884d838f890d943296ab16a9"],["/categories/技术以外/page/4/index.html","ecf124f70892b4e3b81c01a576053ff0"],["/categories/技术以外/page/5/index.html","d57d6b649c013ce447318c8cb478b1e6"],["/categories/技术以外/page/6/index.html","fc09a8d93f2e8f49be6b74919a51ef34"],["/categories/技术以外/page/7/index.html","e32523c5a67ba8f28ba63945191c2688"],["/categories/技术以外/page/8/index.html","b6a12a41931ed0162fb7917847aa0461"],["/categories/技术以外/page/9/index.html","133ebe93cf7ebf6629912657c023f5ff"],["/categories/数据结构与算法/index.html","25ff0eab4a550535a5dca7c1ac82b761"],["/categories/数据结构与算法/page/2/index.html","8d49e0f3eb1de3ffb4253fed1977cafe"],["/categories/科学上网/index.html","b8d16116c15b461872131abb5bf59dca"],["/categories/科学上网/page/2/index.html","7f461d93ddd1bc17d718df8c2a65fb9b"],["/categories/科学上网/page/3/index.html","7309e8d710cb1553d13cc8be4ae55bca"],["/categories/编程经验/index.html","b32b33de49bd65a003bef662982edb4f"],["/categories/编程资料/index.html","0347e0d9f91916920521863673085b24"],["/categories/编程资料/page/2/index.html","309b1ff521bb7867f518da3e4a7863a0"],["/categories/编程资料/page/3/index.html","64c1cd14d74281b29fadbefb6fe12ae9"],["/categories/编程资料/page/4/index.html","290e98d40648124a8be50a720093f400"],["/categories/计算机基础知识/index.html","49fc3fbb1a097baf52826f0f5df1b360"],["/categories/计算机基础知识/page/2/index.html","868dc0fb8ecf31de9c25a3419a157a12"],["/categories/设计模式/index.html","5d2b843ad47b1c8794eb314085928e90"],["/choose/index.html","f2d0b8454ed5c652896d7d4aa996f28d"],["/choose2/index.html","8365a0c35a4fc9b206a22d0dbb2c477c"],["/chrome-crx-intruduce/index.html","12847badb353645b3fb74036966ee798"],["/clashvpn/index.html","7a948d13e7fec170e6e5eea4db6b95ff"],["/coder-blog-website/index.html","0fc9967a9c367c0cfc1e0809360890cf"],["/coder-source/index.html","c22854b5867a05269d3aaeaab4c4b540"],["/coder-videos-website/index.html","052e59f1454fc35373848a60cd1f8f56"],["/computer-book/index.html","62f230c3266c61fc7898ad7ef3fa6f53"],["/computer-censorship/index.html","647eb34b0aade433e005f2e87bf6ae30"],["/computer-network01/index.html","bf24e504be2c3bbb10c8e1870134f6e7"],["/computer-network02/index.html","a39721a2ddff5011a651088dff65dd55"],["/css/main.css","bc32ad34ec4990d934c3c647bdb62f79"],["/database-Mysql/index.html","6122bc72aa3c105e4696f35404d4902b"],["/eclipse-lombok/index.html","0e48888c0e6f3c4e5e0dfbcbe6bccab0"],["/fully-convolutional-networks-for-semantic-segmentation/index.html","cd5fd8359f8b8d54b411a33688bd55fd"],["/great-firewall/index.html","e364b8b3e008ae969e2f95196b7eecb6"],["/halfrost/index.html","d27512b925543e2c387ee8fa502c2731"],["/how-to-signup-chatgpt/index.html","001c3c285b6346a63cc39779dc6d4d05"],["/how-to-use-Gemini/index.html","7c5fb801e89e396a9e65e8f5524fef3a"],["/index.html","ed01b87de185658d70f6986a21ad91b1"],["/ios-open-internet/index.html","637c3df483e67e2df575949843fd524c"],["/iphone-open-internet/index.html","760c59f81ec3796d0fc8f44962e7725c"],["/itext-makes-pdf-form/index.html","d036a0278c5ed1ac6396f51c2dac6ce2"],["/java-Set-Map/index.html","3faa5273cb61391fc3a5e0ba79906ed3"],["/javaweb-server-error-codes/index.html","7393c9656d35ca4f641bc1c93874201d"],["/javaweb-source-code/index.html","de231726d97214fe0fd9c920f3cdd42b"],["/js/lib/busuanzi.min.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/js/lib/lozad.min.js","47904d34a224931dd1b615c59a3dbe3b"],["/js/lib/prism/prism-coy.min.css","0ccad54d95845901ead59bfd3ecceb14"],["/js/lib/prism/prism-dark.min.css","a4711d2957d6605eb5682bdd228cf123"],["/js/lib/prism/prism-funky.min.css","efedcdccd7a9ab342d2d9cacd24920af"],["/js/lib/prism/prism-line-numbers.min.css","38e22e790c279bb56f9ec4b90a2a2d58"],["/js/lib/prism/prism-okaidia.min.css","5ac6f9de996fbec68aaa106dfb16e061"],["/js/lib/prism/prism-solarizedlight.min.css","ecc7e64d039873ffcf7fb27babdaeb5a"],["/js/lib/prism/prism-tomorrow.min.css","456af2a14ae4f5089939d5904ac40fe8"],["/js/lib/prism/prism-twilight.min.css","ebb5c355332a8cf9a1ce37a2a69d678f"],["/js/lib/prism/prism.min.css","a5234d614834658887cec6a9515890f8"],["/js/main.js","052d2b299d9c750afea8df0b802ab7c1"],["/keras+TensorBoard/index.html","04540ea0b498580bab70b9b7ab3f1852"],["/keras-beginner-guide/index.html","af610de2e48d26b868008ce39b4c2ce7"],["/kmp-algorithms/index.html","51d375ad3c9578c2852252b9031cc032"],["/leetcode-Java/index.html","fc7d1cd30d66f5afff7791409cf17f15"],["/links/index.html","4e13d3ca09a28ab18c259bdb6d295b5d"],["/linux-java-opencv/index.html","4aad27866db0fb1d8272efb0148c56be"],["/msb-source/index.html","a399a926b85d197dfe9577dcf365a94c"],["/online-BUG！/index.html","082eeed00f6d318c52124e9c332cb857"],["/open-app/index.html","48712d17cfdce52320db1b51510cd403"],["/page/10/index.html","7804b1c4a18a18a6ae7e6925c50b7e95"],["/page/11/index.html","d6faaaecfb240b5d6aa74e0be88e19d6"],["/page/12/index.html","52fd6ddc7f02ff045720844b16a34d9f"],["/page/13/index.html","fc4d0362ffec1ce467d9a1f8dd86f31d"],["/page/14/index.html","c5e64c9b54c56985e2731b196588ba61"],["/page/15/index.html","916d301e7f49837725efe563fd7f968b"],["/page/16/index.html","0bbfab0a7a622dd73daba095be57aa0a"],["/page/17/index.html","97e48e7ffcacdccf033b26b8f87ef7d4"],["/page/18/index.html","42874b715eaf5d1dcc97d895eee9435b"],["/page/19/index.html","b7d185a6b30c2ea52dcaf085b4054a31"],["/page/2/index.html","fdb6c21b3dc22c0cba3205be2a6689bc"],["/page/20/index.html","ee46158b883089a69209e64805cdd83c"],["/page/21/index.html","513f947cc6d9b5de8f09ad08e53c58ba"],["/page/22/index.html","5475f28ae7ca81130f415896509ba69b"],["/page/23/index.html","f7d8539f87c978925ae9f02feb68f4fd"],["/page/24/index.html","c79e7fa89d2683bfa114d87170abb67c"],["/page/25/index.html","5dd94d4d8d728148d7e3a5abf81e1bad"],["/page/26/index.html","d0c370c88b935e6e2f67dcd7d2359d7d"],["/page/27/index.html","f696c319bd1fc2695f14f59d95726c1c"],["/page/28/index.html","1a442b7369c39aeef5d567c0b2972d96"],["/page/29/index.html","9c346d6c75e34f833252d26acf996e49"],["/page/3/index.html","7df8dad83a13ec173e4ac9f882b5187d"],["/page/30/index.html","4e9ec3cb22582cb03de9a121ac66883c"],["/page/31/index.html","b6aaae680d8c66dd34df4d2b63224da3"],["/page/32/index.html","5f7f641a257730b0512cdbc228d188a7"],["/page/4/index.html","7cdc674802cd4ee2d2a315e5fe63a859"],["/page/5/index.html","85baa829e065dff6a4a9a94dd758743b"],["/page/6/index.html","a12ba5d98c64db4afd27d89c4e55da05"],["/page/7/index.html","1db2a8cd25129f0cc6ed1618e7856c93"],["/page/8/index.html","047e3678a3ce95abe664a6fe3e03beee"],["/page/9/index.html","f36cb279c388247b138af628e6c882ad"],["/pandas-data-preprocessing/index.html","f68f1911acf84291a80081d4cdf43b1e"],["/phone-win-open-Internet/index.html","8883fef43fd8a5dc1c4ba06261181e75"],["/popcorn/index.html","5d45e04ae5021b6d207d689e019a8a94"],["/python-Blog/index.html","605f4d40ea354f7aac30577d8b404b9d"],["/python-yeild/index.html","15f5bf08eb30379145be4f46f375ccf1"],["/python爬虫教程/index.html","da44706f889b26df4acfb30afab06b63"],["/software-copyright/index.html","3f86643d1ddc4d81d6dcfb3461e2916a"],["/sw-register.js","288a253a1330fd5c3aa289dba04fb017"],["/tags/AI/index.html","498608cfa3f8fbb7c600dce938087360"],["/tags/API/index.html","bb87b39b998a1ecd3a2abe4a5abffb65"],["/tags/C-图书/index.html","8fb26e0cfce7525462dd24edd599eb0d"],["/tags/C/index.html","bf8d8d87bbc7b392908f5c25f97044e7"],["/tags/CNN/index.html","c87e67c97780be8a773cd89ebc96e526"],["/tags/Chrome/index.html","fbb09680406bff75594fa8da3576ee9f"],["/tags/C✙✙/index.html","36c5db8d726917094dbc77354e08a8f2"],["/tags/C语言/index.html","ea286f2f9e012b5bf23b42e36c48bc8f"],["/tags/C语言图书/index.html","4466d66ac9a09e06a0da745df75746ff"],["/tags/DSN/index.html","9b0d5dac3bc41977a495b8f1a1fe42d7"],["/tags/Dll/index.html","9f5b7c1a5a8868e36d528ef5b3929ca3"],["/tags/ECCV/index.html","84ea89e063406698c288f679f4708cb0"],["/tags/EM算法/index.html","7258012983cc976e82356ace8f27a5df"],["/tags/Eolink/index.html","1d096919fae567827ee50d6c80c06be1"],["/tags/Gitee/index.html","8fb3b4175e45733336d00210efbb2eea"],["/tags/Go语言/index.html","0ac0ff7ec5a11859cd118d3760b64e68"],["/tags/Graph/index.html","de9b8ca8ca0bcde96ba78ea37dc49a0c"],["/tags/HTTPS/index.html","0b7879b4252c10c72a9036b37bbb5460"],["/tags/ITK/index.html","08d7987fb35aae8cfd2684666112d503"],["/tags/ItkVtkGlue/index.html","7dae06c2b30561cff726e8d8b2024799"],["/tags/JMM/index.html","5d9ce5028024c82618660db23c81f46c"],["/tags/JVM/index.html","416380f69cdbf3885975228d5609d734"],["/tags/Java/index.html","b6aaaa065f09c1f1ed87c3d3ec046a05"],["/tags/Java/page/2/index.html","923042569779bba5d205602813ca4aed"],["/tags/Java/page/3/index.html","0f0189c9633a7ae6a4c62ba41369d17d"],["/tags/Java图书/index.html","a9e2a18a63f478657a6555643353498f"],["/tags/Kaggle/index.html","763943ed35635c81a8b27ef731c5690b"],["/tags/Keras/index.html","d452fa23dca1ebf97084d1ce635aed65"],["/tags/Linux/index.html","fad4151f5702ade53d9c97adabccc299"],["/tags/Linux图书/index.html","33c725e167c0573426af0cf470410811"],["/tags/MEPP/index.html","5703e09595ff96972414053a187328e9"],["/tags/Map/index.html","1704b37c87b3573d4eee1875ac43543e"],["/tags/Matlab/index.html","f04e2b973d3699dbfb28bd5ff8c0401c"],["/tags/MongoDB/index.html","d66e9e43f892c065bee5b6e12c4a0173"],["/tags/MySQL/index.html","6af004d53c84dd982bb5f042507cc978"],["/tags/Parzen窗/index.html","8386908971b322b209a701d2842f0991"],["/tags/PicGo/index.html","69c35251e3787cacbb8814f3fa3adbcc"],["/tags/Python/index.html","efffcbcc48dfe796f5bed0d09735629b"],["/tags/Python图书/index.html","6bb4bf60e0d9fe56d8da9366d39796b1"],["/tags/SPHARM-PDM/index.html","52223aa1eec24c7137695e8ac8ed5945"],["/tags/SVM/index.html","9ea785f6867ea114c4d05547a5775ee2"],["/tags/Seata/index.html","b08303b1e0619e86d431960e9a1f3d08"],["/tags/Servlet/index.html","8e4982dd59e45eb70a9b3f874c81a66a"],["/tags/Sping/index.html","d62b5de613b6350e22ff1785726f592a"],["/tags/Struts/index.html","14ea5f7bdce3d668d895cb6ed2c96c70"],["/tags/TCP-IP/index.html","31d0256be34a476e096b6b72b124688c"],["/tags/Ubuntu/index.html","afd355810d35dff24243be87b43df427"],["/tags/Unet/index.html","5f63e58c1a8d49dc3595bf613cd7f5ff"],["/tags/VS/index.html","8231a53bc62c4c8bb66e0b3e2bba00db"],["/tags/VTK/index.html","2a52f4aa20b2a364f5add064e8c5ea41"],["/tags/Windows/index.html","ce41b5cf488bae5334ce0331cb59e58c"],["/tags/edit/index.html","479d5f868962a08c0840a41adde3e224"],["/tags/hibernate/index.html","f7b38ab86ae54605f4cb982c6a158879"],["/tags/index.html","41fe8fac724b301b79349ab7d003d672"],["/tags/itext/index.html","790bdf24c7c4211e9d61a26469b13b78"],["/tags/jdk/index.html","2f4cb6555ad987388678967d745435f4"],["/tags/kmp/index.html","3073ba410dd233509dee2fd1b5fc26b8"],["/tags/k最近邻估计/index.html","7ebbbd5435140fff316043e22842272a"],["/tags/lombok/index.html","19328d704ce92efdeadee4726dc3b41c"],["/tags/offer/index.html","3b202bfe4f78f28776769f1b8a60ce3c"],["/tags/opencv/index.html","42a11db11940d9161d63a89991b87880"],["/tags/pandas/index.html","d6f88f0114de71130d32849486a662b6"],["/tags/string/index.html","1b21a594e13f85f0184c29c2863e089b"],["/tags/vim/index.html","56edd81cb35e12ca34ed8cff1109dd0a"],["/tags/vtkPolyData/index.html","939059e770bf393b153f13022926c328"],["/tags/web/index.html","91d3dde380b6a1fc1758fc252f5dafbe"],["/tags/xshell/index.html","580a267ae70ab21cce033499703cd149"],["/tags/yeild/index.html","3f1fd68f39f3acf55f024521b4526e51"],["/tags/互联网/index.html","361b4d4969196fd7308616273d502046"],["/tags/人工智能/index.html","2369e3dc82168d0390e326b050ead9de"],["/tags/体绘制/index.html","3d9293d6863ee7cf0b7beeba5849349b"],["/tags/全卷积网络/index.html","a160612952c421111f3d10380c9d8935"],["/tags/公众号/index.html","264b5e830df2a084b458536b37e6d4ae"],["/tags/内存模型/index.html","6bd05cdc64e0eb6d8b827294f1fd278d"],["/tags/内推/index.html","9ec5467ebb47648f3f500fdccd95fe37"],["/tags/函数/index.html","bc90777272a8ef2004cf4af8c87d218f"],["/tags/分布式/index.html","8732a983b3cc626d05a7569ab32a2676"],["/tags/加密/index.html","e0a9cfb2750c21e925889dd1206815a1"],["/tags/医疗图像/index.html","3d5488b6b0d980c7d85cf0cd2b6649c2"],["/tags/博客/index.html","141f5c69dde5d3569ac9e02ebb9c2b90"],["/tags/图像数据/index.html","4bf5835bc3e34425ae63acdf86f897a2"],["/tags/图谱分割/index.html","778fc690b9dcac1add2f391bad52b436"],["/tags/垃圾回收/index.html","e2a36925430fc42c8254b060b256efb8"],["/tags/多线程/index.html","93a6fc559cdbf68e4d504554ba39c64b"],["/tags/字符串/index.html","7e22e766f680ce0ea3dc102546f269c1"],["/tags/工具/index.html","3f9d4c5df6e4b21bf2a9a019c3ccf053"],["/tags/工具/page/2/index.html","a8937d92c79e7c236ae08ed15ffe5d4f"],["/tags/弹性形变/index.html","9f5d83ee1757b6fd80b7de381b5686c3"],["/tags/排序/index.html","f1e7547b79f2a617d3d1e5660d3c5871"],["/tags/搜狗/index.html","6ea70ea0aa0fa0148a486a3a75f8a1ae"],["/tags/操作系统/index.html","f615e0090e4982a6803ea4119e152d5f"],["/tags/数据库/index.html","9ce1a82f326208e218c4f532b19daa1e"],["/tags/数据类型/index.html","f5ab08db8d5781099a11a737ac4cdbc0"],["/tags/数据结构/index.html","7857821dc3a7de21d59b74eb056be7d1"],["/tags/最大似然/index.html","6dca86e4d1ae8e7804a1b59626c1b8a4"],["/tags/机器学习/index.html","87d6deb877260f4ec506616c20fb2560"],["/tags/机器学习/page/2/index.html","43ee0aa66aef398b7cb33b037048352a"],["/tags/机器学习/page/3/index.html","3ddd90ce79401d4991b7bade5e2880d7"],["/tags/机器学习/page/4/index.html","acf193be416a75f9d018c25d9bc0a609"],["/tags/机器学习/page/5/index.html","12351886eae8e77628472f2dcf41b1d9"],["/tags/树/index.html","5004eebc81ac92a9f88eaa8c4f76c54e"],["/tags/框架/index.html","c6827386eef9d9accc2487cc7b3005d0"],["/tags/求职/index.html","dfe794977ec43f99e3743658d4083453"],["/tags/汇编语言/index.html","221c7f2dac474e41e846ff11bfc18a9a"],["/tags/深度学习/index.html","1015c93b43341e154d66d612885f7fe4"],["/tags/深度学习/page/2/index.html","6f8af9993b940b7630994b09b34ee59e"],["/tags/深度学习/page/3/index.html","3c2599b51a480fd647a435ab5fadda73"],["/tags/深度监督网络/index.html","1a59851761f24572154b7ff519aa327c"],["/tags/爬虫/index.html","2544fdc5a4f3e8fc9696d31139eed0f1"],["/tags/电子书下载/index.html","b17023354f4deac59d86df07a932224f"],["/tags/电子书下载/page/2/index.html","be7d35c08e74bddbb54dc3dae23e6c3f"],["/tags/程序员/index.html","a37d34d2411e351684a70209f12135ee"],["/tags/程序员面试/index.html","92c84dd8f405df883719d63ddbd8020e"],["/tags/简历/index.html","d61817564b56fb1fab510737adb35ba7"],["/tags/算法/index.html","3765a9e0ba092b20f75b8c72c8044c57"],["/tags/算法/page/2/index.html","8e3ca58c5bb8f6abfa3f05f807cdf520"],["/tags/算法/page/3/index.html","5a3722571ce239ed14adc37d03b7b3ad"],["/tags/线程/index.html","953c0f9dfab5ab7452c07ad7c1c6ce64"],["/tags/结构学习/index.html","a1640fa70026727befc24223bb9d5b55"],["/tags/编程/index.html","006fb71d41c6744eb09522f0e74513db"],["/tags/网站/index.html","9fa2592ace17024033b17c890225aed2"],["/tags/网站/page/2/index.html","e1242c0a3b07a9259917d2c7f4eda35f"],["/tags/网络/index.html","7c9dd4f88ff9bf9a896129ce9d59d2ba"],["/tags/网络原理/index.html","220c66e091304cafe4467b4c889b4c8c"],["/tags/肝脏分割/index.html","e1cf86c280d50c8b825664c829888aa6"],["/tags/计算机/index.html","77fbcbbdf7b6865de63cbdba6b069266"],["/tags/计算机专业/index.html","8b50488615eb8e9f0bf30cb5fd613a62"],["/tags/计算机网络/index.html","264f02e666d13597b3e121b80c90fabd"],["/tags/设计模式/index.html","ac217509409cd945c11c26f05727f9a6"],["/tags/贝叶斯/index.html","d592771d9482a0d6dbae0c494da650be"],["/tags/迁移学习/index.html","e007cfa5aa747c0cfcdb6985957da744"],["/tags/面试/index.html","0d6cff79df6561147269e91e7c909e6b"],["/the-way-of-pragram/index.html","eb40d8355628a3f758a533d4d1c6c0e5"],["/untiypro XL安装/index.html","aa109160b7c6c168792969bdc9a4e6a7"],["/video-websites/index.html","619098dd5fd363e29e7139f9595f338d"],["/wechat-fans/index.html","cf664004976bbc1c2c492470612164c9"],["/window-run-VTK/index.html","298904741d8a4b801c47183d110b02f1"],["/xshell-connect-Linux/index.html","7ed1f0ace098cf3e0c1972f04ecf6bbf"],["/‌Accessing-the-Open-Internet/index.html","5b2ee8c0011f5e4233d60f08fb0eaae1"],["/《Java高并发编程详解》，去大厂必看！/index.html","3d6b130a6be1fb65442899b3aa220e14"],["/一分钟没了 1.5W 。。。/index.html","e0b6ee46d6bd1728946980acc3f98e61"],["/一条高产爆款内容生产线/index.html","47934a5efa0d060b503c55f6b8973bbe"],["/为高考学子推荐的六个就业前景广阔的专业/index.html","22bd608c8b3fdc545a6c771fa706f41d"],["/互联网赚钱机器---社群/index.html","518e9b506374288717210372efb039a1"],["/你们常用的工作方法和思考方式是什么？/index.html","30acc9f30cb21d0b114cd34b1a844342"],["/关于环境配置的一些事/index.html","243791841b5c58a6ce39044e07f7313f"],["/准备了19w！搞事/index.html","2e43f2f97c329e590a2025676fe7fc5b"],["/几个很重要的感悟/index.html","4d630790b0fb6710bb3f9b7b790d7b42"],["/分割ROI篇/index.html","3073e9ee8ac3586688509c8168f2bb82"],["/分割精度说明/index.html","e84fdc333589a76f54fbe6fc26664df8"],["/分块程序执行/index.html","c98baf9e046e3846c08dcdf7313c762f"],["/加班公司黑名单！！！/index.html","e994a07000bbc8ab94d982de938e166c"],["/卧槽，上知乎热搜了！/index.html","6b4a1990a7772868e8470f0a57ec682d"],["/卧槽，我的小破站爆了！/index.html","555c43150c4cf2a31d167999d72bb9bb"],["/卧槽，我被盗版了/index.html","3579f8a8c2f70eaadb31d1d34227b411"],["/卧槽，还有985大学在大一上C语言课？？/index.html","a6cb1912d8e82047ac8882a16f35da94"],["/历年微软面试中出现的leetcode算法题/index.html","fdac8674fcde39235a2269eef65263ec"],["/去特斯拉试车了/index.html","372058f88f3c223119959b2093d1c72b"],["/吃苦的三种境界/index.html","5aa4cbf91e652b91433e9b7b3e04af98"],["/哪本书适合推荐给 Java 初学者？/index.html","266bd7421e878796deb4eef716bc8067"],["/哪本入门级的学习数据库的书最值得推荐？/index.html","f174a0bc0499d88c9dc4f4fd4c33318e"],["/国内外常用的AIGC模型/index.html","abee2a6794dbd3af28533c975464ab15"],["/国庆假期/index.html","8c4c864cdb5ff61af359aa0c8902e89c"],["/图谱程序字典/index.html","57715040b3eab0e7e09e38cac350231d"],["/图谱训练与分割/index.html","1e4572eb13163055e6954918a56e9550"],["/宣布一件大事/index.html","3a993b40ac2f48ee56b56e9ffe9be8c4"],["/小鹏P7i试驾体验/index.html","c04d57049ff23aeb2081f8ba991e2c87"],["/微信PC版3.3.0内测更新，电脑可以刷朋友圈了/index.html","6ed4a50470a22bd83fa100f1eb572971"],["/怎么更快的赚钱？/index.html","59388b2d4cbda2673ce5e19e3777ffcb"],["/我毕业了/index.html","3495a2dbe51afc29d88c8f3857c0d467"],["/我！真！的！找到了！爱上学习！的方法！/index.html","1a847dfc0f8ab5cc0c525c0da3bdee08"],["/户口的意义/index.html","bbc4d12570b491ec240e9cd03bb30917"],["/推荐两本经典算法书/index.html","bf8a2f13a8a53ff5b57c29888390ae0e"],["/推荐几个在线学习SQL的网站！/index.html","60e8a5388b895f4f0fe50db91ab55749"],["/搞了一个程序员成长晋级社群！/index.html","ff9f4d8d395892ee3297cb54e47e9579"],["/摘抄/index.html","be26f5409fd3a3b2c4834942c53a4f56"],["/暴跌30心态崩了/index.html","3cec65b82987958a72c19d515377274c"],["/最近很火的ChatGPT到底该怎么玩？/index.html","ec8e6135936ac72e1e36f092887f34cd"],["/有哪些好看的日历可以买？/index.html","5457ffc3efeeebae6a6785424b83ab69"],["/服务器有啥用/index.html","6700cfde7f72e02d3976b8888a33841a"],["/来长沙了！/index.html","58ea4e031218f9d5ffebb26df8581eb9"],["/校招污点公司名单/index.html","c7efacfa7ecf5a21a3601f593e05d323"],["/梭哈200多万/index.html","e9c002181c931996e39f0083542eec51"],["/梯形图入门/index.html","8efabbc34167d01d0dd61854150c3f9a"],["/橙心优选，凉凉了！/index.html","2e66fcc39dd1db1eabc4d1adaae57ab0"],["/比亚迪汉试驾体验/index.html","b43729c17dbe7f7eced679234a725fb7"],["/清华转学成电，真的牛逼！/index.html","8fd2e26f9abe3274fe2785a7004ad194"],["/滴滴程序员被亲戚鄙视：年薪八十万还不如二本教书的/index.html","5cb7ca23c8d6c383eba0ca8ff89fa420"],["/社群！/index.html","5f118892906292de5c6a763467aba209"],["/科学上网之VPN篇/index.html","0b6e9a1181523c8c7dc614fc758ecfea"],["/程序员必备的几个技能！看完你也是大神/index.html","2f6636303faad46266c2c21a4965ca25"],["/程序员绕不去的槛，Linux！！！/index.html","7f7838ed911935e914ddc6992892cb9b"],["/蔚来ET5试驾体验/index.html","b0a0408dde5c778dedffefa8832c4423"],["/蔚来，牛逼！/index.html","3360e7795f320ffd4d5dd79a1c8a69ca"],["/被录取了/index.html","a71be3ea03079b106cc39825fd0896a6"],["/被找事了！/index.html","b42b6cfce31289bc4f6bee2775b92f8b"],["/被拉黑了。。。/index.html","c9a1c50751f350fc711edd8a955d85aa"],["/被车撞了！/index.html","444bd709509dd0b195774c82fec9c68a"],["/该如何选购固态硬盘？/index.html","145607adf2b5e99f3ad811f8aa2b0844"],["/这本书一定要看！/index.html","03188fdefec9c78a526b75a12962a26d"],["/选Java还是C++？/index.html","3ac2227958b8c50e3fba6db5697d0945"],["/那些让你起飞的计算机基础知识/index.html","13ae43a78ca997231a87234023fb8307"],["/靠这几本算法书，成功拿下大厂offer！/index.html","44c54a3cbf374dd2d306a43572f320c2"]];
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
