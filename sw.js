/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/0010-city/index.html","6ba649a31445f1b61d00b486070e3c62"],["/10-algorithm-book/index.html","b0545a2042211cbfd534a5369d102970"],["/10-website/index.html","979e93b9e0689292f72da75024bf74b0"],["/100万的小目标/index.html","4fd2f275fd93d38488b64e3a9234a40c"],["/10w+YYDS！/index.html","df303cf728c2f0db1b60cf0345ee513e"],["/12-technical-tutorial-sites/index.html","0dc993a7b5b9dd3670b88798559a1938"],["/2 6 岁 了/index.html","7c86853d11c7945b52d8f5ec3e13c5e1"],["/200万，啪，没了。。。。/index.html","44ea53022f15603ef4ce29a4f65d21ce"],["/2018ECCV-Paper-DL/index.html","cc0f16c037646eccc9808662a3eb8cf6"],["/2021年固态硬盘选购最新攻略（小白避坑指南）/index.html","74010e07381f6ea6affaa5e9a6e622b4"],["/2021机械键盘推荐/index.html","7c36ba3803e2030e7a96ada15106c73e"],["/2025-07-15/index.html","4fb4c5d7e023fecd98ce2e0e706521b2"],["/27岁了/index.html","4e497370790e60c356f0f115b90dcbbd"],["/3D-Convolutional-Neural-Networks-for-Human-Action-Recognition/index.html","9f922a77b4b188693821093300a29076"],["/3D-Deeply-Supervised-Network-for-Automatic-Liver-Segmentation-from-CT-Volumes/index.html","d27f897b34bc6526ee625f42c201a05e"],["/3D-Unet-Experiment-notes/index.html","b7b5ea7f4ac86ae8c2855e9f2835e1ef"],["/4-Software/index.html","c697ac9017a41da6d204273afe38ee19"],["/6-website/index.html","62f0295ca00144f1d9d9528f198ece37"],["/7-terminal-tools/index.html","80efd8315eb2b0eead804eb16075d3fb"],["/AIGC中典型的深度学习网络/index.html","83e2b8d1e0f81c1abdfbe7dd7158beba"],["/Agency-model/index.html","6c256b27af7812c2644a8d1fe7d6492e"],["/Algorithm-brush-notes/index.html","7a4a9cf81f46a5db7e89cc4a7ff40b29"],["/Ali-recruits/index.html","015f34fb89b4bd7c425ca960b64ac0b1"],["/Android-open-internet/index.html","a8644633ad2b1781a5346f02fd59c0fc"],["/Appearance-mode/index.html","17106ff0cacf9cd722b3dd78a60edda1"],["/Backtracking/index.html","485aa71ba2e31b784aba4909b3282d2e"],["/Baidu-Sao-operation/index.html","d34c21e221819a10fc4458ff47a8c4dd"],["/Batch-Normalization/index.html","fa6e8458f49a01f13af5eb627f90baf7"],["/Best-AI-tools/index.html","7d3dcf04a7fa5fd2bf4cdffb671c2ce7"],["/Bias-and-Variance/index.html","ec23402b9c77555478f350d3276e90fe"],["/Binary-tree-traversal/index.html","db9ffbdaa6fefd2fdd4cb8370ce04d5f"],["/Branch-and-bound/index.html","eb7062f9cab2360838c5eb14866fdfbe"],["/Buying-computer-for-the-first-time/index.html","8b7958386271683d85ddb42b14956d28"],["/B站向北邮道歉！/index.html","2375cdefcbac316ba1f06fc4c5f38be3"],["/C++-string-function/index.html","7f21454cb9d00659a0299ff31efdc212"],["/C-Java-DevelopTools/index.html","043b7f84223166a94b3e43cff19fdb98"],["/CS-Classic-Books/index.html","99aa41a4d21f902a7c7da747ef63f81e"],["/CS-network/index.html","97ece45ba3d6f80987ad13a10ea83616"],["/CSBook001/index.html","87ec7db8744b89dca4f5f14d64e64e82"],["/CSBook002/index.html","b3411e738bf06e34d2e829130f8e1462"],["/CSBook003/index.html","610d1b43c95101d3fe6fbfa489dd947e"],["/CSBook004/index.html","d9223bf6e6ae6e76a9a7b8ed8a6371b6"],["/CSBook005/index.html","c2f9c5ecf92a7beb68b97edadbc3d131"],["/CSBook006/index.html","d6abbb7efeea09aa14828167365ce87f"],["/CSBook007/index.html","a7ccd045dfd98846c568a5e8734b95c6"],["/CSBook008/index.html","4b348b8d6e509c0ccea93072054819b5"],["/CSBook009/index.html","b6559d439cebf02f105aceb1ce8ecf8a"],["/CSBook010/index.html","d8f7aeba17f4cf5a30b1bcb32fc59815"],["/CSBook011/index.html","5cc9ea4bf19ae8b38b4e9a5c8d48bf02"],["/CSBook012/index.html","64585d17e003ce91afc074fef913f0dc"],["/Changsha-really-fragrant/index.html","d6ba840f7e9685b9257034eb821aeb60"],["/ChatGPT-VPN/index.html","06a2b1071f2c04418c07be469581eea2"],["/ChatGPT/index.html","33a44b592816d404d1f02ed06ab57026"],["/ChatGPT！王炸级更新！！！/index.html","7f30beef82cd34b42a459123cf0ed507"],["/Chrome-crx/index.html","d9c5c09410b286f970e90bba98af7848"],["/ClashForWindows/index.html","2156bcf0b49cadf4aea5421f2a00b91c"],["/Computer-Classic-Books/index.html","7e221b8813136ab7483e6642949b209b"],["/Computer-for-another-major/index.html","3157264b525a8adf53bb9446298fae46"],["/Conditional-confrontation-network/index.html","2f01751dcd843dd40d1c4c43ec552816"],["/DNN/index.html","bd7e41ff5887009406ff2968ecf072f7"],["/DSN-segmentation-liver-experiment-summary/index.html","ffc115a6d07c5b3c8fcb23bd9db11653"],["/Data-enhancement-elastic-deformation/index.html","85df891647863d04165ac10216903fcf"],["/Decorative-pattern/index.html","e57b2a272242fd5c84f29aad7c3ab2d4"],["/Deep-Learning/index.html","b7780dcb722c7ebdd2fbe066437e5ec2"],["/Deep-learning-and-medical-image-analysis/index.html","1907bd650928ccdf66f52f5de09669d6"],["/Deeply-Supervised-Nets/index.html","a17f693c87bf4e67f86bda10f5608d84"],["/Deformation-model-based-sparse-representation/index.html","f3e83b1ab50e085d099df32306a00a10"],["/Discriminative-and-Generative-model/index.html","ba450001a2bef5b80e02fbf108782cb7"],["/Distributed-transaction/index.html","319f71808fddd03a3cc13896741ff90e"],["/Divide-and-conquer-algorithm/index.html","b0f308accec4833d9ea8710c981be54e"],["/Dll/index.html","e95c50a7b803bfa2e085f7e2db9ed7b2"],["/Dynamic-programming-algorithm/index.html","3fda10c304d247cc5254e5f068581db4"],["/E-book-download-commonly-used-by-programmers/index.html","c5ad10cf55fe38d6cb357c50bf3a3cda"],["/EditPlus软件的安装、激活和配置过程分享/index.html","dff954bbe1f057ec4f70c2de97658747"],["/Eight-sorting-algorithms/index.html","5e4fea5769c168c6858f3c12305461f8"],["/Encryption-Algorithm/index.html","91b937f097d1ebc28ab05d0032f68ce4"],["/Eolink/index.html","aa0a1f634a272a1bbeb372a48faaf8c5"],["/Factory-and-strategy-mode/index.html","fdc55286b32b6f3d2a4ffb6f263991b4"],["/Foreign-technology-blog-community/index.html","f693ec22ada29ba48bd7ee2717826ffe"],["/Functional-model/index.html","663d91af5764867a1c70d18433e4eea1"],["/Fund-type/index.html","082414787f39a53629b957e2c9518108"],["/GPT-4o/index.html","8bccd8bf6ba63607ed6613ae919c4de5"],["/GPU-medical-image-processing/index.html","bb58eee50e29a0c61434302c061afbbe"],["/Gemini/index.html","d589e571f40207892bcfd775ce491c80"],["/Generative-Model-of-Unsupervised-Learning/index.html","c8fddcc42dc9201f378eaa6d5ffcb65f"],["/Git-Learning/index.html","1ed77ea3070aca691c136e68bba373fc"],["/GitHub-2FA/index.html","7e0d5428e5a56d35f475d13eb148bdbd"],["/GitHub万赞，程序员必看操作系统总结！/index.html","a5333cc8d7e5793007d8f147a638a4c6"],["/Golang-book-recommend/index.html","5846d8be718ae261165b3e0137f3c731"],["/Golang-learning/index.html","2c11eac08cb5460488450a2832b3e073"],["/Gradient-descent-optimization/index.html","7b905e74e4ea2cd49a07467dc77a53e6"],["/Greedy-Algorithm/index.html","6bccc51888a6f4455d31a8e40d392e5e"],["/HK-bank/index.html","0fb5d8e9d719910d27be44bd212cb5b0"],["/Head-to-head/index.html","27aebc4cd1100825b01feed97a664cd0"],["/HexoPage/index.html","6ae45a523b6321b25978ae42f2c7641d"],["/HistCite-Pro/index.html","5553656b71746b167720586b6f153037"],["/How-does-the-program-run/index.html","c2abe14e65b1a5e5f0f2ba390e64af15"],["/How-to-judge-whether-technologyisreliable/index.html","dc4f10851c8214b963a9b31f7af5b0f4"],["/How-to-learn-design-patterns/index.html","59d9ce53f9cedb375d662bd79c73f779"],["/How-to-learn-design-patterns？/index.html","8edef6978ce8510800d28a6823dc19bc"],["/How-to-teach-yourself-programming/index.html","a91fe1cc2fb074214c4c1c70f0f1b026"],["/How2learn-Python？/index.html","ef13420f3d5ba1d6fef1a91dcde22a9b"],["/IDEA-shortcut-key/index.html","166e00c97c82e835496d77cf25ced07a"],["/IT-interview-basic/index.html","cbf026cb2078ce344b031d613cff5543"],["/ITK-VS-install/index.html","434b183f9a2139536a68b517fc8005f1"],["/ITK-VTK-ItkVtkGlue/index.html","4d0bfc9c4d4837a7b1dfcefbd1bd8e66"],["/Image-processing-plus-noise/index.html","184818e91c698160ab254e14a3307580"],["/Inception-Going-Deeper-with-Convolution/index.html","2083ef5e3883a59b0de85493f9e744c8"],["/Java-GC/index.html","801f84e5905a4029eda53477d5f57f14"],["/Java-Servlet/index.html","5d3b7664ccd45e809544a187770f0c60"],["/Java-array-and-collection-sorting/index.html","bdc7a1f86e4903e690ad58b2b4f6182f"],["/Java-development-tools/index.html","06b065f637fb21f3dddfbd9a52b308e9"],["/Java-eight-data-types/index.html","bb15a4e17d41175559b222ef25a72fa6"],["/Java-interview01/index.html","9e370238414f1e7a03d012c3ff0a43d0"],["/Java-interview02/index.html","a3848add8ecf5e10f55a29ebbec79999"],["/Java-interview03/index.html","d6d2661902f05d37ff450ed89022f51b"],["/Java-learing-map/index.html","4df4b73723f8c57f821f26f162907ee2"],["/Java-learning-route-map/index.html","390343b4c4699441d983ee76d3790a11"],["/Java-memory-area/index.html","dad3593b8499b236e4d0d22c61e8c951"],["/Java-memory-model/index.html","8f25231bc9e30d61c0e1175274c7a45c"],["/Java-multithreaded-learning/index.html","8417f5310fb13cfc3d8d955afa82de8c"],["/Java-project/index.html","2b8ca95175b1e8ff2b57701b46488cac"],["/JavaWeb-Chinese-Garbled/index.html","6eb2d9d2181bf181886f240a22de3654"],["/Java还是C++？/index.html","95b6111d1d3a841979f772483774e02c"],["/Kaggle5-step-guide/index.html","54a19dc23f4bf437e2969585ffcc6f71"],["/Knowledge-points-of-Java-garbage-collection/index.html","8c89f74b2a548a748bf8d5ec590b2a82"],["/Layoffs-and-Hiring/index.html","b965bb6b52dc832213eb22bb662a45db"],["/Linear-regression-of-machine-learning/index.html","f3517f8d8ab310794744a19fda432bc3"],["/Linux-Compile-C/index.html","63f58e50c48d293b0d545bc266e4a7d4"],["/Linux-ITK/index.html","3935c1fb854ebd5a4bfca358116f05db"],["/Liver-segmentation-of-sparse-components/index.html","0ec23c7c6afb7734c50e437a1d80808e"],["/ML-EBook-paper/index.html","863e2102eff06065aef4be43c5836f71"],["/Map-uses-multiple-maps/index.html","c74c6d714ad42d6d16b4ee606bf880cd"],["/Matlab-Graph-cut/index.html","8fc0f2b660cf27eb60590aac832965b7"],["/Maximum-Likelihood-to-EM-algorithm/index.html","17fdbbfcc2d23e32be57c1c7ca81c9f9"],["/Mean filter and median filter denoising/index.html","c4cbf48ee5b8ec94d16382457967b96c"],["/Medical-Data-for-Machine-Learning/index.html","5b9cff35222a115c8076a7507ced5494"],["/Medical-image-analysis-deep-learning/index.html","f5467d2e2da1e66476b891de05beabed"],["/Medical-scan-image-processing/index.html","053bcf3101db46733f981f67a0f1b6fd"],["/Merge-sort-algorithm/index.html","b876a778a3f45ae4aee2ca3c8258b22a"],["/Monthly-income-2W/index.html","4568ae0c1d459a0d748ba5c0908dd471"],["/Mysql-database/index.html","e09a0c62fd24783f110433d311be6af6"],["/Neighbor-Embedding/index.html","97902060f18e82b952779969e0ea02b0"],["/Neighborhood-approximate-random-forest/index.html","a56d4e3fc359bffe4af084d749d73a00"],["/Net-and-official-documents/index.html","6864874a1ba50f779832273d834a6c23"],["/Netflix-VPN/index.html","02f0284287155067a2141c36b83637b5"],["/Network-principle/index.html","d797e527dcd6bbe0f2b5523d2bf17c0f"],["/New-Hong-Kong-stocks/index.html","675bb1d3fce4a7a19568f225a4415d43"],["/Nice-to-meet-you/index.html","0bea8b3cfb9be8ea4490c9a4b1cb9edf"],["/OS-processes-threads/index.html","d94bf3bce869fe8c61ddd5e93999270c"],["/OS-run-environment/index.html","4639d6c396aab4aa9adc748adcd56f13"],["/Open-Internet/index.html","c48db9af1b779c74a14a4f896beac69b"],["/Open-Internet2/index.html","1503819dcbff8689015cb636a5f24a9d"],["/Open-source-community-and-rewriting-website/index.html","2b6d081f3f1934af6179f4b002200548"],["/Panoramic-image-stitching-based-on-SIFT-features/index.html","ba259cf9f65040ffcd8ed7d72dca17c7"],["/Parzen-and-KNE/index.html","ef79739dc22b79e021ec10f7753ca282"],["/Personal-technology-blog-site/index.html","f645a8eadbb06ba81881c726a3a6f236"],["/PicGo-Gitee/index.html","1cd227a10c8f8a6ad7e8687d51f457f0"],["/Programmer-treasure-chest/index.html","a4087e8d30e13420042c71b20a5d3914"],["/Prototype-mode/index.html","e9f6d5cf28ac2160c1c9858655628aa4"],["/Python-base/index.html","a9ca1e4d2788d222aed082255778a5a6"],["/Python-crawler/index.html","310ea2e54d25491d368e1ae75a085774"],["/Resume-revision-suggestions/index.html","bb3d98b2f2507002da94a15a6cfe3275"],["/SEO01/index.html","912a93ab58afa93efb62a14b37d30977"],["/SEO02/index.html","d9c6cca27f3ad7fac7419b505d64fc4e"],["/SPHARMPDM-MEPP/index.html","c3259f90fde4a8cb5db825399ecffdb8"],["/SVM/index.html","fa935d7eebf06f0261883255620e2cdb"],["/Semi-supervised-learning/index.html","65d12a37b696109ff2c8828f6140d01a"],["/Sequential-model/index.html","a98a10153babd1068e4cb4fabffde4f9"],["/Shape-Based-Human-Detection-and-Segmentation-via-Hierarchical-Part-TemplateMatching/index.html","13d906ca54a3b99aa7840bd428920294"],["/Spring-basics/index.html","eb898d7b6188a26602f6b4e140c8aa22"],["/Spring-integrates-hibernate-Struts/index.html","8291102c2ea5717ce81943ebe1e2d143"],["/Structure-learning/index.html","abf4005a19cb435ef19c951c74143511"],["/Suggestions-for-self-study-of-computers/index.html","b14f8bcb28210a0822054dcce45b010a"],["/Summaryof-HongKongStock-Account-Opening-Links/index.html","6928cbf90df0608c439b7fe00c2e2aa8"],["/TCPIP-detailed/index.html","e46559921142c04ed559c5efd046c7af"],["/Telegram-VPN/index.html","e35fd69f30e4d87542b4fa6e1fd581ba"],["/The-essence-of-shopping-festival/index.html","92785fa04e1ecdb753ef2b9ba97a66f9"],["/The-most-important-investment-in-life/index.html","cfc27a55e0e38f56653f6859de94d133"],["/The-most-successful-nvestment/index.html","4320f64cbc82ad1433347566d7876907"],["/Transfer-Learning/index.html","0401a64963ce77dfdbc7381f71d6d509"],["/Transfer-to-computer-major/index.html","4edf85435d6b21ec1dfddba5bfe2198a"],["/UNet-Convolutional-Networks-for-Biomedical-Image-Segmentation/index.html","e43f3184d459b9d0cc238fbd202e6f30"],["/Ubuntu-install-sougou/index.html","28756336cdfbde1be78f53906b2b704d"],["/Understanding-of-paying-for-knowledge/index.html","186cd24c247cc739fc20e87a428f8ca9"],["/Unsupervised-Learning-Linear-Dimension-Reduction/index.html","79ec18fd3048aa76a0cc1b0d581a6c4c"],["/VPN2025/index.html","7afb984df39038ac45ae906dd99bf313"],["/VTK01/index.html","de19b11cd026dcc957e81cd6bb1870f3"],["/VTK02/index.html","ea1643a75596eb8dddf833a98551cc86"],["/VTK03/index.html","d8c3e10131c11c7903f7eeb7c6319689"],["/VTKRead-write/index.html","46ad9dee91bcd0cc4cec7528c490f124"],["/We-are-all-good-kids/index.html","b49ef096f19ac0378a93a0d205bda3c1"],["/WeChat-80/index.html","dfa9233d26dfe1407d92ca78ad80efdf"],["/WeChat-red-envelope-cover/index.html","f7bd331668eff5bc37a2afbf583f4858"],["/What-is-crawler/index.html","c40c784d5dc420dc3088138a8fea1d34"],["/Win-OpenInternet/index.html","67975ed6c8e0039f790af26fbbe9aed9"],["/Windows11-2kfans/index.html","f411035c252126b20912c9a415af63e6"],["/Word-Embedding/index.html","b357f1228987b08249a82cd0d76bd231"],["/YuanShikai-and-his-Beiyang/index.html","234d754ad895d3dace4f7a6ae71e5bdc"],["/Zero-copy/index.html","47564c070f53f81386b2ddd86728a68b"],["/about-keras-model/index.html","1d796fc8101c20a50558577ef4df2e3e"],["/algorithm/index.html","086836f5f0ef8a3789e164c2e497dc28"],["/alibaba-Java/index.html","a7d245f44e1dd552fe8439c48d790481"],["/archives/2020/01/index.html","a26b04e2c724aacb367d365493f47bdc"],["/archives/2020/09/index.html","ec66904f108201b63e73458e9c583ba9"],["/archives/2020/10/index.html","5fdbf328b2d172ead6103d3bee437df2"],["/archives/2020/11/index.html","6627d79089e707a778af27b300dee802"],["/archives/2020/11/page/2/index.html","e18d3bd61f111afe2f77f8985e7fe61d"],["/archives/2020/11/page/3/index.html","23a712f509d56efe5dcd030944d66dea"],["/archives/2020/11/page/4/index.html","716ac52ecf3fe2c9fc8dab5166593a00"],["/archives/2020/11/page/5/index.html","3ae02384430e3b9a5ece39863882f031"],["/archives/2020/11/page/6/index.html","a009f2863c72a33657bbc3cf6dda9c88"],["/archives/2020/12/index.html","b7266f2a147713cd7d198c3ed60ca212"],["/archives/2020/12/page/2/index.html","cbedfd72730ace2ad6526ac08613a1cb"],["/archives/2020/12/page/3/index.html","d7893b111e8992718c0aac51bb536be7"],["/archives/2020/12/page/4/index.html","9d6b5e91c653f50e2513e04dfef73092"],["/archives/2020/12/page/5/index.html","b7fcf7b51ee4efeb895819b80c83ecf3"],["/archives/2020/12/page/6/index.html","18fab38e05d27461b29fb84e36913514"],["/archives/2020/12/page/7/index.html","f15c957e0a572802742281d7717ada7a"],["/archives/2020/12/page/8/index.html","856f2e9e8d3cd76293828ac68fb18295"],["/archives/2020/index.html","918835e79b05812887ad04f155a66ad1"],["/archives/2020/page/10/index.html","acb3ff5d4a805a158f46e9cf24eec046"],["/archives/2020/page/11/index.html","7e98cef82d699270d1e3de6d3be05d63"],["/archives/2020/page/12/index.html","420ec674ce6199b203d5a96f34f04f3d"],["/archives/2020/page/13/index.html","970222a0f4482b0de10dc8568b6fca0a"],["/archives/2020/page/14/index.html","7df867377e1ad79eabd339132eaeceab"],["/archives/2020/page/2/index.html","cac0542d9a52998f4066f515b7c9fe17"],["/archives/2020/page/3/index.html","45486de9068e541fc0e721dc0451470b"],["/archives/2020/page/4/index.html","9adc3e94baa95493a089d854ff85f838"],["/archives/2020/page/5/index.html","78c9d641311d2bc21986dc839f98d4e2"],["/archives/2020/page/6/index.html","3d5c73996b05df2a22dc98dcc3f1ecd6"],["/archives/2020/page/7/index.html","6b53278654cd5da055d759469cb27c6a"],["/archives/2020/page/8/index.html","f4ec1fb8490e7050b0597a1fa06bdfeb"],["/archives/2020/page/9/index.html","3799ed0d1a5b89d176d80c232db5b558"],["/archives/2021/01/index.html","bba1a44a454c626bde9312dd89ec69fd"],["/archives/2021/01/page/2/index.html","f9e89f5f6298f8791bfc5e75128c9861"],["/archives/2021/01/page/3/index.html","6f5cdfcad850d6a5e537785e0a032181"],["/archives/2021/02/index.html","b130ab79bb7c3e185d21d13eb54b2088"],["/archives/2021/03/index.html","8967728a46c6b04773ce508e39294800"],["/archives/2021/03/page/2/index.html","831a00054dbf401e75aaf1ba088c5045"],["/archives/2021/04/index.html","a325358c98cc15548c75b1c226b20984"],["/archives/2021/05/index.html","72593eb599db5b6345b32d606b2ec973"],["/archives/2021/06/index.html","e010f2658d4bee1fec4407959bba7e7f"],["/archives/2021/07/index.html","97ae5420b721fcfaefacc26186fb2bda"],["/archives/2021/08/index.html","81975a5f819fbd7004d721768613e572"],["/archives/2021/09/index.html","151fad3511e94c4cbcfe3fc5db9aac3f"],["/archives/2021/10/index.html","66f20c60803db3f80c0c16d514041424"],["/archives/2021/11/index.html","de46b6e2b4379d01e2819841587c5194"],["/archives/2021/12/index.html","3e443feabecf96b41721070ced1f6cb3"],["/archives/2021/index.html","baa977a14a46ab1d89081c75cf987ea9"],["/archives/2021/page/10/index.html","3a4c276d319f9c20ceba47cd05392252"],["/archives/2021/page/11/index.html","6b4fe5d52488d365118fcc4c5a434fb2"],["/archives/2021/page/2/index.html","3afe83e84d48d8097e801458ddb7d76b"],["/archives/2021/page/3/index.html","ace757c8a4d54cffa40db0f6df9e997b"],["/archives/2021/page/4/index.html","20ffae943fcf3658ba11639d4fffeb46"],["/archives/2021/page/5/index.html","27b66357f5e216f6637bf20f0cae3f31"],["/archives/2021/page/6/index.html","9feaf7ce147da7576bd88594d01dd4fc"],["/archives/2021/page/7/index.html","1447cfd26770c855193898dcae6dfbeb"],["/archives/2021/page/8/index.html","9a539185343f66890dc96ff183f132dc"],["/archives/2021/page/9/index.html","1695d379e4e0c5de93018c30c0867a75"],["/archives/2022/01/index.html","d92357c37ce623d2c3a858035df9a159"],["/archives/2022/02/index.html","4bb0a732a105ac05acf4d349f428e356"],["/archives/2022/04/index.html","58f7d3e7d61f7c0f4612ecf226d1b9a6"],["/archives/2022/05/index.html","6d06dccd3c5fe2c009db1d5c82d09cb8"],["/archives/2022/12/index.html","15a816dad64547f350ee9d7ecd92d84c"],["/archives/2022/index.html","b15dc3b0058caa789bad6c1d8c2c116c"],["/archives/2023/01/index.html","0d110ab86640297235f1a141b8bf7034"],["/archives/2023/02/index.html","f982c878955c06991ebdf0f1c002aa1b"],["/archives/2023/03/index.html","9c4f0e138834b43e7f6b8261a9d1e77e"],["/archives/2023/04/index.html","667ce7137993b0805cba72fb4feba3c0"],["/archives/2023/06/index.html","c1e8963b416f3e2cfb8d170e0b333b16"],["/archives/2023/08/index.html","7a20cfa6492ed7a2bc2fc77f81e63fb8"],["/archives/2023/10/index.html","890315832b48d328f8d49a7341af072a"],["/archives/2023/index.html","7c24ab8abe8ef63ef49d5736765dcbdf"],["/archives/2023/page/2/index.html","4c5d94738360ef488d463d3f8011ee77"],["/archives/2023/page/3/index.html","6bb299e9fd20e840ebe45c4c643df7c4"],["/archives/2024/01/index.html","5788bb09c79735e7b1b986d3e88c0085"],["/archives/2024/02/index.html","50eb64bd69313b16bd0cb9ddcfa8f0cb"],["/archives/2024/index.html","9787865c04a7c5bf3ed75927bf217256"],["/archives/2025/06/index.html","28bca446558bd7a771976320b8ebf121"],["/archives/2025/07/index.html","6078d1ab1be5c6f791871856fd88be61"],["/archives/2025/08/index.html","bcde6ee40d22563e4376e43f86556d2d"],["/archives/2025/09/index.html","99caccc16d25f4122c1b9f515d6e252e"],["/archives/2025/10/index.html","4de1c1f46018c56ed1eee65c84bb0cf9"],["/archives/2025/11/index.html","ee85ec10ae4b5ba5a3bcfd5c53add543"],["/archives/2025/11/page/2/index.html","05ba8adb199208b98fc03abd026c9f62"],["/archives/2025/index.html","95e3cbf9ec5998e0cfc99f02d13ffd20"],["/archives/2025/page/2/index.html","602e4410bf8b092311abd7940cd34c4c"],["/archives/2025/page/3/index.html","d8e429fcb19f2ed3be146964fef857d4"],["/archives/2025/page/4/index.html","79b3e35ab7ec5942f918f83af979ae45"],["/archives/2028/02/index.html","750ed092bf5aa21328fdd8201051282a"],["/archives/2028/index.html","3057d17c80b18cbfa518164b55d02634"],["/archives/index.html","5a8161054e6550890857bce59d0f3998"],["/archives/page/10/index.html","b0409c1f955968bd74cdc254e21721d5"],["/archives/page/11/index.html","713e63df44837f91c94b2a5475bf1cc7"],["/archives/page/12/index.html","3d1b7741350ba1e060a9e7bf207494b4"],["/archives/page/13/index.html","f559751f4afdaf67b053313b9d7b3ece"],["/archives/page/14/index.html","3aa0f3b35260db72f4bf6996219edbd2"],["/archives/page/15/index.html","9ba4eb8670606389508359216e5b77fe"],["/archives/page/16/index.html","28b72fcf8e6aae7dde73c8ad5373319e"],["/archives/page/17/index.html","f75652ff95e25e7edb33cabf3f631262"],["/archives/page/18/index.html","95b4d5bee4d342088d966aec15ccfc81"],["/archives/page/19/index.html","e02b426d9569d5beea0e863100447792"],["/archives/page/2/index.html","0109b414cc28b2e0269394c4c2a91007"],["/archives/page/20/index.html","482cb30afdbf2f66e11e5f87968d937c"],["/archives/page/21/index.html","88be2f431afafecb439c1e419c69a33c"],["/archives/page/22/index.html","8da92878cbcfcfd3b493bfaa8aeb0988"],["/archives/page/23/index.html","4c48338234fbc57b0d86b4477f227b41"],["/archives/page/24/index.html","69c07ec1df10150df5f656abe1bf5686"],["/archives/page/25/index.html","a99b50bb827083c47b5cc1bb2af43f2f"],["/archives/page/26/index.html","19d265aee8cb67c37e95c090ee8763a1"],["/archives/page/27/index.html","de174aa1f26721d44d1892d209b13e54"],["/archives/page/28/index.html","e4ce8cb390c64d8bfc60c830a00b5d66"],["/archives/page/29/index.html","8766419affd41377deeb78ddf163f3f9"],["/archives/page/3/index.html","60d522730c2ea7395a61ae1da433d406"],["/archives/page/30/index.html","91086315d571091698598feab0d4b324"],["/archives/page/31/index.html","2132a92a18f72ab2b772e5d5691cec92"],["/archives/page/32/index.html","6cfc19c35cbe885481a015b0d93e15e9"],["/archives/page/4/index.html","84ff61190ae2fa4f5dae0be94bbaefc1"],["/archives/page/5/index.html","ebb628f5845b7ac4435b97576cfefefe"],["/archives/page/6/index.html","7f13fe2400bec0d8be46773738f12997"],["/archives/page/7/index.html","e6e75712e9a969b25f1c1a9a27443587"],["/archives/page/8/index.html","be28b770db2af3cae0bab2debb895177"],["/archives/page/9/index.html","e82d450fb22457fb76fa3ed5c27a51c6"],["/baidu-search/index.html","c7184e3aed1056f59e728656e8cb7aa6"],["/baidu_verify_code-Hh2fKNlEB1.html","e496bddbe8076eb4eeffd79f6cc78ef3"],["/be-a-programmer-instead-of-a-code-farmer/index.html","e0955c6ba287c5f801a0a2b0d52ab430"],["/bought-a-house/index.html","d3dac0b375a263d739bf673ef2837d79"],["/categories/C与C✙✙/index.html","1c63013a22708ad4b1d87dd0045d4681"],["/categories/Go语言/index.html","f8a29e08277720286c3ba032170036a1"],["/categories/ITK与VTK/index.html","bb9ceac1b09e4f0b695556be63bf7144"],["/categories/Java/index.html","988e74cc7db7c1c7383cbcce8ef86623"],["/categories/Java/page/2/index.html","2a85b7a951acc0c382baefbfabc23bfc"],["/categories/Java/page/3/index.html","52bcef96a1d8a43a5046578855160230"],["/categories/Linux/index.html","72ce37a7624af071bf8b1b95d8660f80"],["/categories/PLC/index.html","a3db8b718d675dd54fae28b3b4dc4fe6"],["/categories/Python/index.html","f781a25d7342305a0537e81cc7fca30e"],["/categories/SEO教程/index.html","0368d8df7d5d1ef0ca84aa424e89fedb"],["/categories/index.html","a4d208a9ac70d8a01dad8a14596e044d"],["/categories/图像处理与机器学习/index.html","4ef98bdc7e95b10c83eb31cb09bc0dd9"],["/categories/图像处理与机器学习/page/2/index.html","3af366b33dc9c2d6c3d4ec22fe6a47c8"],["/categories/图像处理与机器学习/page/3/index.html","e20b05e30253d70835272c58c48cc02d"],["/categories/图像处理与机器学习/page/4/index.html","f32e2cd71282dabdfe9312eb35b62989"],["/categories/图像处理与机器学习/page/5/index.html","2c298110b5169aa97e3a6367bfc10899"],["/categories/图像处理与机器学习/page/6/index.html","06eceb1fc6a4dd380ef5c0f720862d88"],["/categories/工具/index.html","bfa91438e251890ae8fae660bb4eb9f0"],["/categories/工具/page/2/index.html","cb524e1eb579829d0bf4f47202223f0d"],["/categories/技术以外/index.html","5e540a4cff96eef48066c323163e6fcc"],["/categories/技术以外/page/2/index.html","fed27b5e86f2e57dac715e0fc497032f"],["/categories/技术以外/page/3/index.html","63ecaa892ca9ecb3412a55b321aa8e12"],["/categories/技术以外/page/4/index.html","12a64043310d449ab3e6bc844ecf4590"],["/categories/技术以外/page/5/index.html","53ba0561c6ef6fda53efd5b03777b65d"],["/categories/技术以外/page/6/index.html","84b0e8daba5f4dd9e4451a62c681aa55"],["/categories/技术以外/page/7/index.html","fb157850c461eae340c99b419a0484db"],["/categories/技术以外/page/8/index.html","d99fd14c50652f7e7087553a3bda068a"],["/categories/技术以外/page/9/index.html","efd3d984fb608dfadaf1e8fba0c09d14"],["/categories/数据结构与算法/index.html","f50c3cff182a06cfee87b9033affbb63"],["/categories/数据结构与算法/page/2/index.html","2bc68b45501645512072d2302d144647"],["/categories/科学上网/index.html","599afeb811d1521039e60da1839286f5"],["/categories/科学上网/page/2/index.html","e52e712ee215836c57ccd8151c912397"],["/categories/科学上网/page/3/index.html","6451084bcf9f4af3a9187d13a0c76d9d"],["/categories/编程经验/index.html","0fafeca4071ed34e448ae82499d3a8ed"],["/categories/编程资料/index.html","896594751313bff1132193046f1a90da"],["/categories/编程资料/page/2/index.html","2455e5c5a6376db760618f6a44eff6e8"],["/categories/编程资料/page/3/index.html","4737f5d6907e7eb51e70c2063dcffc61"],["/categories/编程资料/page/4/index.html","b9baa26fcea5ef53ef85fe83e94e9700"],["/categories/计算机基础知识/index.html","b0ba4f39b2995967ff8ef8e6b396b905"],["/categories/计算机基础知识/page/2/index.html","5eadae90dfe1bbbe4194679aa4f4d7c3"],["/categories/设计模式/index.html","987ee42dae4cba3ccbaa7327a21c9653"],["/choose/index.html","f84f7d56a50464db330c3f1416bc989d"],["/choose2/index.html","69c351523c0397fce6b3ace0f8651f6d"],["/chrome-crx-intruduce/index.html","ad9a006a475671469614a6beabe2b068"],["/clashvpn/index.html","c9a34bd18d23f1fd11a939fdd54abb6b"],["/coder-blog-website/index.html","975693213a6d78cf3243267688c68341"],["/coder-source/index.html","96d9bfc5ed9b66f3199631d65bc59589"],["/coder-videos-website/index.html","db123b8911409e2b50530dfd9a5a4947"],["/computer-book/index.html","b73ffdd8f324444111a24e296a3caa43"],["/computer-censorship/index.html","9adbc6e22ba203f2e65ae931d074a422"],["/computer-network01/index.html","202e7d745c8c2a80a2a1910bf39c8aa1"],["/computer-network02/index.html","130d5e2746fb51cf2649e03367d3af2f"],["/css/main.css","bc32ad34ec4990d934c3c647bdb62f79"],["/database-Mysql/index.html","187c0c2a1ee245de16f20ffd36d46200"],["/eclipse-lombok/index.html","4f52f08bda00ea75893a4b5086e3fdbf"],["/fully-convolutional-networks-for-semantic-segmentation/index.html","6317324d8caf3681887891360c5a555a"],["/great-firewall/index.html","4679fae382c9f69f2b84cf5a2daaa01b"],["/halfrost/index.html","3b57068d58ab378bec1a40a3e05d634d"],["/how-to-signup-chatgpt/index.html","639374ccecff34c543fabcd37510476a"],["/how-to-use-Gemini/index.html","d5fd82feaf4a189cd56efb867dc538e2"],["/index.html","a3aafd7de6f06d0379a0122d73839932"],["/ios-open-internet/index.html","64810cabb697e274374df0cb2dc1ce88"],["/iphone-open-internet/index.html","61eb30ca162e53f01a4c768c04df6710"],["/itext-makes-pdf-form/index.html","e5cc0a10ac88b59d21414d9cc01816fb"],["/java-Set-Map/index.html","ad6470912b8c784c45082044456a9c29"],["/javaweb-server-error-codes/index.html","d1f33369d8fd154eef351d3f79962a7c"],["/javaweb-source-code/index.html","218d7e469cd3c816ef6b32ab0f435208"],["/js/lib/busuanzi.min.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/js/lib/lozad.min.js","47904d34a224931dd1b615c59a3dbe3b"],["/js/lib/prism/prism-coy.min.css","0ccad54d95845901ead59bfd3ecceb14"],["/js/lib/prism/prism-dark.min.css","a4711d2957d6605eb5682bdd228cf123"],["/js/lib/prism/prism-funky.min.css","efedcdccd7a9ab342d2d9cacd24920af"],["/js/lib/prism/prism-line-numbers.min.css","38e22e790c279bb56f9ec4b90a2a2d58"],["/js/lib/prism/prism-okaidia.min.css","5ac6f9de996fbec68aaa106dfb16e061"],["/js/lib/prism/prism-solarizedlight.min.css","ecc7e64d039873ffcf7fb27babdaeb5a"],["/js/lib/prism/prism-tomorrow.min.css","456af2a14ae4f5089939d5904ac40fe8"],["/js/lib/prism/prism-twilight.min.css","ebb5c355332a8cf9a1ce37a2a69d678f"],["/js/lib/prism/prism.min.css","a5234d614834658887cec6a9515890f8"],["/js/main.js","052d2b299d9c750afea8df0b802ab7c1"],["/keras+TensorBoard/index.html","6aa805489d92dc55ddbe656f0e32b57c"],["/keras-beginner-guide/index.html","1c4ca8cd6c71eb95facfe5c5fb14f26f"],["/kmp-algorithms/index.html","301ebd64212f02ebd75911825bd1cfd7"],["/leetcode-Java/index.html","220bb9eaadd10e9e6b4f65586518969f"],["/links/index.html","b5664437b18b447720b917977e9557e3"],["/linux-java-opencv/index.html","849c2da02778d80deb4c7fc3c95eccd0"],["/msb-source/index.html","ee4bb6958fc417cadc9c648910109c1a"],["/online-BUG！/index.html","e3b6313e1313cda348ef73ea70c5012f"],["/open-app/index.html","252227fd51abb172c617f53d7d6a4d31"],["/page/10/index.html","e9f1ffd8c871e22355e227b1ad493fc6"],["/page/11/index.html","4058175e5cdfd502e6dafe02965110fe"],["/page/12/index.html","b3d4915614b900abb65d96b36a6b9c42"],["/page/13/index.html","60cd3f7635ac1511d541320aa438d6a1"],["/page/14/index.html","3ce6cb833fd51dff06aa449f96d69259"],["/page/15/index.html","a05a660cb4a2a68be591f025fd106b6a"],["/page/16/index.html","9233490317129833cab5e19e6896a2f8"],["/page/17/index.html","a7fac87c793517d9cd6637def3fbba01"],["/page/18/index.html","e18003f37ed5a0583e05f15fbd5f338d"],["/page/19/index.html","d2fcae1d1c8e7a9f1b822dfe8e5a565c"],["/page/2/index.html","3b8a60db904c3824d855e04e67604cbd"],["/page/20/index.html","8e1f46e82c1cd47bece2f2d44bd7c640"],["/page/21/index.html","e78155d8520a87247474069ee2caa42b"],["/page/22/index.html","1fb7c299613620c8520c395fc5e3589e"],["/page/23/index.html","203a55f1c1166ab4f16f80c4e8928bc0"],["/page/24/index.html","50182ebdfa1e984c1ae4df39f7c6bf8e"],["/page/25/index.html","d6dbb4cfedb1da51247941475c24df14"],["/page/26/index.html","11d28510abefb57b590d7aee92872343"],["/page/27/index.html","891cf7f0602d2003156da17ead3069db"],["/page/28/index.html","5907e2ff48a87de65451b04695d27c94"],["/page/29/index.html","48052df23a6bb9ffdbe0cf250897def9"],["/page/3/index.html","75d5486ba187c880f2c098a33d50d25c"],["/page/30/index.html","73752cec83b04a138e6c8c616ac0427f"],["/page/31/index.html","ef7b9d93fe841bfd8ef5c50c06f940b0"],["/page/32/index.html","f0845cec464f444803eaf55d3a600e73"],["/page/4/index.html","fa413a8737b5240cf8d0938efafe5b4b"],["/page/5/index.html","97445d07f0accb22484e3ec2186342b2"],["/page/6/index.html","3c0da199652624bda50de122d9545b2a"],["/page/7/index.html","2510271f5bb4da0f3a7e73f537edef04"],["/page/8/index.html","34c4291ca653e8c21533007dc8aca1c0"],["/page/9/index.html","c12fa396020d7cfc9f73929e45ce12dd"],["/pandas-data-preprocessing/index.html","9f537047cb32b8c86393506ca6f4653e"],["/phone-win-open-Internet/index.html","b025c1094eb474ebc338b0b735e11309"],["/popcorn/index.html","bd12c439e86c7de36e7b9f0f37a0322b"],["/python-Blog/index.html","df6626bb2e75facea6258b7ebdcba30a"],["/python-yeild/index.html","1136ca6bb6054fdd1b7b203dab880d13"],["/python爬虫教程/index.html","f322cd1060f19c2eb7b400edeeb23462"],["/software-copyright/index.html","24f925ced5b58191e26715b23f8d7a77"],["/sw-register.js","75f2ea5e447fdbc239d3738d0389f1b1"],["/tags/AI/index.html","356e2fbca1cf596a7570eb4699ac54a8"],["/tags/API/index.html","8d01ee304096155a14b1900ecefeb137"],["/tags/C-图书/index.html","e46f1b2878bdf8fb0abe95b7221ab8f1"],["/tags/C/index.html","5e1a3f42d67a2d71b5ef51b302091ba8"],["/tags/CNN/index.html","37f661c67b8d94d5d32127ca178fd4c2"],["/tags/Chrome/index.html","70e5660a75ed201548371a7dac616e0c"],["/tags/C✙✙/index.html","7e4df58da0fd25a9e77d158a0db051c9"],["/tags/C语言/index.html","581eeb9fccf9aaa965692c7598650ce0"],["/tags/C语言图书/index.html","8bbef4b22e2e2b2c8eccc3f9b1dd6c0a"],["/tags/DSN/index.html","b406a16db1c7f5035edcaacfa8cc35a9"],["/tags/Dll/index.html","b954f7b53e3dc3b711afe6191854966c"],["/tags/ECCV/index.html","ddf8cf643c87af512e68b3188faeffc0"],["/tags/EM算法/index.html","549930621e525d96e9afef0c9c760140"],["/tags/Eolink/index.html","13f45c1c0f490f163524450d19e0eb84"],["/tags/Gitee/index.html","70001f367e7140651749e00be9f39d00"],["/tags/Go语言/index.html","df429b5250b7dd659fac253a1f66d96d"],["/tags/Graph/index.html","b28327d999be25fca662fa3cc72c7f7f"],["/tags/HTTPS/index.html","e4d8d38ebeca67d74a6db1fd600fd616"],["/tags/ITK/index.html","b7341150316acfc48d06c69091432211"],["/tags/ItkVtkGlue/index.html","bcaf01eb327fca26deddc2f2e1776f61"],["/tags/JMM/index.html","a1c8f4f56e6733e2e8c14696238d262a"],["/tags/JVM/index.html","f92ab49ca7a8ef08bf7238f1e38079fa"],["/tags/Java/index.html","8bd6a92c9fe2a61e2220cd16d3ff1930"],["/tags/Java/page/2/index.html","cf47dbc68f090b8e87af92813a8c7103"],["/tags/Java图书/index.html","ce5db23ba8758a3ba57850ac5fdc5bfe"],["/tags/Kaggle/index.html","1fa7ed217772fe7d3f33164562b409c0"],["/tags/Keras/index.html","8d8805b7c03e0f0394510487806cc720"],["/tags/Linux/index.html","af77082fd677c24e9f7b273ab807070b"],["/tags/Linux图书/index.html","6e34cd11a676e7f4d2890e3356727e41"],["/tags/MEPP/index.html","58347388794f80e03f5ae3f46fbb0595"],["/tags/Map/index.html","28e9dadbd5c5347ae0eefd1b4f9ff2e0"],["/tags/Matlab/index.html","0006894cf6249411532f7bebeaebc23b"],["/tags/MongoDB/index.html","76869821926f92a1b3fc3e218ccaa1bb"],["/tags/MySQL/index.html","ad41975d75a184129a975cffc11e472d"],["/tags/Parzen窗/index.html","c3e689f832d4363ed93077d288e7c13b"],["/tags/PicGo/index.html","c468b55f956d87134fe734dcedb7ed40"],["/tags/Python/index.html","0dd7b4516c2ae16e59a00e59ff61056e"],["/tags/Python图书/index.html","1085dee0513a34cd15dfb417daa85349"],["/tags/SPHARM-PDM/index.html","0144a65fab7dddd3690110f99e849dd7"],["/tags/SVM/index.html","0da7ff10effb19ead5792fb4456c7904"],["/tags/Servlet/index.html","80881d699e54ae981bc43499fcb88fd1"],["/tags/Sping/index.html","d44f2d48903815ca02f4a71b907adc63"],["/tags/Struts/index.html","21ad12e8bd6f9277954aa75dd3a5421c"],["/tags/TCP-IP/index.html","c8ba68f914d5a657c95792a6b200ae29"],["/tags/Ubuntu/index.html","8b5fb8d38076511025fa3972d3e596bd"],["/tags/Unet/index.html","15a733b151bb50d504bb56cd9f0e1d65"],["/tags/VS/index.html","9f994a2d421616d6317af5deffc3ae39"],["/tags/VTK/index.html","32ef2dbf8ec7a96c0804a11d941df523"],["/tags/Windows/index.html","0178e4c05d68b34fedae8847fd3c3744"],["/tags/edit/index.html","6f5880589110e37a99db0bc15f27ce1d"],["/tags/hibernate/index.html","0e1111d1d067bc2d2fa5371b8181aad0"],["/tags/index.html","ccbea745392af87dec0d84bcd7f7de04"],["/tags/itext/index.html","f42840862f76c158fb9ee61086634909"],["/tags/jdk/index.html","e07514ae516ed28ab16b468aa08aef53"],["/tags/kmp/index.html","13dbf322adb32da0b70af986c5f0f8f0"],["/tags/k最近邻估计/index.html","4a5ce77f76d33da5d4c365fcb3257808"],["/tags/lombok/index.html","7e5f4109cbd858aa34334de63c79064b"],["/tags/offer/index.html","2eb449543b3988a47233795af4d510bf"],["/tags/opencv/index.html","8760c6c74ec1435cde061cf9e1e0c707"],["/tags/pandas/index.html","fd01e76d21313d7bec472500677e9ec4"],["/tags/string/index.html","8220375bc9144e02822055a9c595b33d"],["/tags/vim/index.html","19dcc68fa80a56d39520a35d8c622386"],["/tags/vtkPolyData/index.html","767499b3be70981968d6659dfc02c900"],["/tags/web/index.html","edc5a2c65d6a5c8474f7d1ce6db8b1e0"],["/tags/xshell/index.html","c87da84baae1da99192613d658d53969"],["/tags/yeild/index.html","7ba6002c34b48a99d4d0b1d1823bd722"],["/tags/互联网/index.html","ceb0c88f0b08df4109718782e78375d7"],["/tags/人工智能/index.html","c1ec9aebf07745f51cd4ffd68c213e3b"],["/tags/体绘制/index.html","108c656bc40c79c3d0d6e81ce8484ba9"],["/tags/全卷积网络/index.html","9f9c422d3581cb436aaca7e14f6eb0cc"],["/tags/公众号/index.html","24e430e673c214f016992c5fd61556e1"],["/tags/内存模型/index.html","ab6b01b23f887efe0551bbde3dde21dc"],["/tags/内推/index.html","9d0ffad076d8fb7cf1d83dfa195943ac"],["/tags/函数/index.html","47790be86a21e72830c9c04465438db7"],["/tags/分布式/index.html","5b5da26d2647ca651da4d3c37b0a4191"],["/tags/加密/index.html","0cc49e9077a219e6c018e06db4472d2e"],["/tags/医疗图像/index.html","52a51acde134a03c74f34b895b1956bf"],["/tags/博客/index.html","a61a2f0a7b6afff39bd4646e31d349f8"],["/tags/图像数据/index.html","50a9a23c60a924e44587ab4333834361"],["/tags/图谱分割/index.html","bc5cdf48d9104621b707e3eb440dd878"],["/tags/垃圾回收/index.html","4db18caad8fa5b624ee5ea56d463d9bb"],["/tags/多线程/index.html","eec429f3f879297cb48b33e750cc32d3"],["/tags/字符串/index.html","9b6e39be3e390dc137b11a1822808e4a"],["/tags/工具/index.html","1660a468da35332d4993c7152a62c8cc"],["/tags/工具/page/2/index.html","5bee830277d2ad917b9abd6aa12fd61e"],["/tags/弹性形变/index.html","716c2803f665d82ffbd551e5208556e7"],["/tags/排序/index.html","3140cdb4c8378f6f76b2c235a351bf85"],["/tags/搜狗/index.html","2c0f6bda9a88e31a8f8fd9781bd57eaf"],["/tags/操作系统/index.html","58f7ec78d238f899d082b213763d7a2e"],["/tags/数据库/index.html","da6635a63ffdb4b23ce982e6f75d05c5"],["/tags/数据类型/index.html","32db27d8149f48ed75fbef444afccb5d"],["/tags/数据结构/index.html","3c9d06c823e72ada11cc306aa406f093"],["/tags/最大似然/index.html","5fc49bd8a8282964e2e02b967859fbb1"],["/tags/机器学习/index.html","16b78b6d985c80555d1032805808d007"],["/tags/机器学习/page/2/index.html","5c88c6376ae50e22e1151c36031a4b38"],["/tags/机器学习/page/3/index.html","5d0d2b48d3e33183e6f4b160d00b89d3"],["/tags/机器学习/page/4/index.html","200098fbdb9133e4a8b48ff242492f69"],["/tags/机器学习/page/5/index.html","9c3e119b910182d3952ea252ae137fdd"],["/tags/树/index.html","43044be7874dd76d67fc3ad2fbb83762"],["/tags/框架/index.html","c4e480ba565b8cc1850c4b5da3192a4e"],["/tags/求职/index.html","27a9ae5a114265dfd5579c264e150c07"],["/tags/汇编语言/index.html","e2e146e1aba013e82f3ccec599a90e0b"],["/tags/深度学习/index.html","b549ed2e5b66a53886a400b3480726e0"],["/tags/深度学习/page/2/index.html","79c04996d5141fc7c4e77c755adc6d8f"],["/tags/深度学习/page/3/index.html","c88bf87bedb384bef817efb8e04e79d1"],["/tags/深度监督网络/index.html","7f200d90aa05e271ee6556b2b39334ff"],["/tags/爬虫/index.html","072acfa902da00ddbccdfe429f47dfca"],["/tags/电子书下载/index.html","4d66b2302c4907426e7867d0a12edee5"],["/tags/电子书下载/page/2/index.html","ed489ea58c7bab21c2a0bc1442b5b7d4"],["/tags/程序员/index.html","7f80c9aaf337d04107a691896eb3dfd5"],["/tags/程序员面试/index.html","7e0fb63043d6d125a152d7e691161cd9"],["/tags/简历/index.html","c67039109b04c76846e4b9d843ea0be7"],["/tags/算法/index.html","77c9e65c30e473d27b4116a150a0dd99"],["/tags/算法/page/2/index.html","5ed4ce49678679431d8475ebd6e4e9ee"],["/tags/算法/page/3/index.html","0bcfc9367bc5d40f8ed7793456862f89"],["/tags/线程/index.html","1da16651777d9c913afc13c4f09c47e2"],["/tags/结构学习/index.html","7b8aaefc1540a1cd2eb4b28456e1997b"],["/tags/编程/index.html","36e2b3186571068ebb88c7f7a4683953"],["/tags/网站/index.html","a6f5819df54958152b06a8f3e3c6714e"],["/tags/网站/page/2/index.html","7f705d5f4b18a04f3800918058b03d74"],["/tags/网络/index.html","5e7044b03dbdac13f99cae0c97602bce"],["/tags/网络原理/index.html","01224959fb10a35ba3a2b087aac70f9f"],["/tags/肝脏分割/index.html","7a30f361b8cf828b33d01ec07c88f9d0"],["/tags/计算机/index.html","5ce6a03072f9f1159e69a1a644a683e6"],["/tags/计算机专业/index.html","c9a2ae5bcf56aaee0d91859647c1a189"],["/tags/计算机网络/index.html","077a968927411226af4a2e22e964c457"],["/tags/设计模式/index.html","776979217d8b8fca2ae23904bed4714b"],["/tags/贝叶斯/index.html","eb992e87fbf72a23e860125b32e90580"],["/tags/迁移学习/index.html","d7f4cf394b08fdce56479ef352f1fca9"],["/tags/面试/index.html","7f9453375c26ade2bb5ea930ab99c387"],["/the-way-of-pragram/index.html","8b86b98a47bb29a50bd12cd9b05865d4"],["/untiypro XL安装/index.html","200d4486e8e2067a695b8dfb2f9e5331"],["/video-websites/index.html","1719db7b017e4dbbe9090f7ea790f924"],["/wechat-fans/index.html","a07eeaa4e4717072e05032d4b07d63df"],["/window-run-VTK/index.html","3ef3d0728f7acba0a5e08939fecda44f"],["/xshell-connect-Linux/index.html","d6c944ffd151750e92834436a17553db"],["/‌Accessing-the-Open-Internet/index.html","a44109a091fa7f78ea0145dd3bdb18ec"],["/《Java高并发编程详解》，去大厂必看！/index.html","e037449c8762a7650710d48367b52239"],["/一分钟没了 1.5W 。。。/index.html","95df1ff241d9f4da4a09c8ce49c45a53"],["/一条高产爆款内容生产线/index.html","922e0e27230d9f94dfd71fc04226d9f8"],["/为高考学子推荐的六个就业前景广阔的专业/index.html","d6c2ba1109e9c0d75588bbd276ed7e07"],["/互联网赚钱机器---社群/index.html","88d00d5a48e8e989f58344589537f4b9"],["/你们常用的工作方法和思考方式是什么？/index.html","76554f358779af7a3c8438d4fb86b7ab"],["/关于环境配置的一些事/index.html","09482a58eb714e460a8f151d30c446e8"],["/准备了19w！搞事/index.html","bd1039717b44db0e131a9f7a547d3b9f"],["/几个很重要的感悟/index.html","828a4f5ed55bcd5803738ed9d5e6be4a"],["/分割ROI篇/index.html","45102696463f0ab7ab94099c04f86476"],["/分割精度说明/index.html","58e195c4abf3560b238be9b22e7cf917"],["/分块程序执行/index.html","5437d26a958e21ac69e31d30f8a04644"],["/加班公司黑名单！！！/index.html","16eae44871520344e0facde507d9c425"],["/卧槽，上知乎热搜了！/index.html","8df591d7551c1b691e7ed67d675bdec7"],["/卧槽，我的小破站爆了！/index.html","eecf3d0cf419fc0dc1b8f57551553939"],["/卧槽，我被盗版了/index.html","c8e22dcab0e4c7e0f792025ebc5935af"],["/卧槽，还有985大学在大一上C语言课？？/index.html","c74dac96032393a37c2720b4b2c59947"],["/历年微软面试中出现的leetcode算法题/index.html","e8e95c7a3a77011f32d303ae06053319"],["/去特斯拉试车了/index.html","ed377530e5388e84d4e6b470afbcd581"],["/吃苦的三种境界/index.html","2307b3ee47e870c888d813d815d535cd"],["/哪本书适合推荐给 Java 初学者？/index.html","6814ecbc2d9a3600ff4673d1066e9d50"],["/哪本入门级的学习数据库的书最值得推荐？/index.html","ffaa6a717505543b7225efa80fb20296"],["/国内外常用的AIGC模型/index.html","6d194d3e68bfa1feaec54b44269ec297"],["/国庆假期/index.html","fed849ae57f38fbc2d9908ecb0a1dbea"],["/图谱程序字典/index.html","38ad51117b95cea181818b4a120ae777"],["/图谱训练与分割/index.html","e7198e6ebc0a8bd64ee257b992a5e7f0"],["/宣布一件大事/index.html","25949baf27549b482efabe0c52f1b19d"],["/小鹏P7i试驾体验/index.html","7f36f71a9179fa39548bd8035ddbcf4f"],["/微信PC版3.3.0内测更新，电脑可以刷朋友圈了/index.html","240d9b653ef62b72760422460f4da788"],["/怎么更快的赚钱？/index.html","25c092ee9276373bdbacb7c85480c193"],["/我毕业了/index.html","b6c3b05a4a151f6e45d4b292af994ac0"],["/我！真！的！找到了！爱上学习！的方法！/index.html","aad8c23a1a6d122474d37c3395661e3f"],["/户口的意义/index.html","cedf744efd4436f7b863f93840d100ac"],["/推荐两本经典算法书/index.html","5edf3257b29e7fbd02cc5136a43677d8"],["/推荐几个在线学习SQL的网站！/index.html","9f145f139faef2a7b424bc919343d024"],["/搞了一个程序员成长晋级社群！/index.html","6df0333535a75034163e9286cb69d410"],["/摘抄/index.html","5902447e7c91552175d32d4bdf7a127b"],["/暴跌30心态崩了/index.html","b928f815c55bd7be42c4f1d89524331a"],["/最近很火的ChatGPT到底该怎么玩？/index.html","92f1552e463ad3cbe1493b51f010fc07"],["/有哪些好看的日历可以买？/index.html","57705a3b1a749ba78f0781e7747b68b1"],["/服务器有啥用/index.html","c7030dfc554386a1f7f04e8bea6207fc"],["/来长沙了！/index.html","bf346c66d5bdff53f108c9d0a6302c80"],["/校招污点公司名单/index.html","52e66cbd3495f3d6b6e868f4906fa3a9"],["/梭哈200多万/index.html","669df88a38b3310762085fbf2b327be1"],["/梯形图入门/index.html","df9de46e8bd91e8d0e0aef451a9300bb"],["/橙心优选，凉凉了！/index.html","c8da4bbec5f75048fc63f3f4ebd31add"],["/比亚迪汉试驾体验/index.html","33ddb55c404377535892ac3037778ad8"],["/清华转学成电，真的牛逼！/index.html","a67ae81601e2c0a3670295512093d1bb"],["/滴滴程序员被亲戚鄙视：年薪八十万还不如二本教书的/index.html","a2384f505041431868aaba0c63eac5c5"],["/社群！/index.html","e02aa962a069655c21f064534236608a"],["/科学上网之VPN篇/index.html","852c8b66d6c8b8804e24471f52b1d28b"],["/程序员必备的几个技能！看完你也是大神/index.html","b712c78cf2036e27a3a086a74449fa81"],["/程序员绕不去的槛，Linux！！！/index.html","ab5beedbb75b17a3d26922fef1a06387"],["/蔚来ET5试驾体验/index.html","1bdffdacb45f511f721d9d629d542e4a"],["/蔚来，牛逼！/index.html","ee2c2b80158cd4e2b3a06cc3d3158dcf"],["/被录取了/index.html","d154d331cf511a6cae6dc3b3a8694844"],["/被找事了！/index.html","ee29aed3a3c5dd854b2c3d689ad47712"],["/被拉黑了。。。/index.html","7281c600e8c890906e23c8cd8da005f0"],["/被车撞了！/index.html","569ccd931fb277de61e42d5f8c10e069"],["/该如何选购固态硬盘？/index.html","de9d9503c0f659e34503cae30334fc3b"],["/这本书一定要看！/index.html","34d6b3cc9f7631ab31f76bb8962ef035"],["/选Java还是C++？/index.html","3fa5988b6f9b262c082d1f7953eab90c"],["/那些让你起飞的计算机基础知识/index.html","05af74037c9f93755943670b3fca54af"],["/靠这几本算法书，成功拿下大厂offer！/index.html","432113f40b36b0b39e86667efc08823e"]];
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
