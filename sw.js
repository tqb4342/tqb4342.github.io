/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/0010-city/index.html","d71c0a0afcdd199f7e37b276ceb101d6"],["/10-algorithm-book/index.html","fe693b14113711a0b990be49109bd752"],["/10-website/index.html","870d182a209429b014b1d2f5c6e6c555"],["/100万的小目标/index.html","58712c965093ac0f49ab870961483f99"],["/10w+YYDS！/index.html","eb487ed6d333bc3c8680c00f73b398da"],["/10website/index.html","169c5880914d24c541682d87f24c7db4"],["/12-technical-tutorial-sites/index.html","0383ea564f52e2f62221c947d5ffeedf"],["/2 6 岁 了/index.html","f559b0cb22fe33d5d472d5cb1d0e3a82"],["/200万，啪，没了。。。。/index.html","92ba7937a79c196f6211dbc26454f945"],["/2018ECCV-Paper-DL/index.html","ff977e6476719a79164ac2da8dcb6ae2"],["/2021年固态硬盘选购最新攻略（小白避坑指南）/index.html","ae81c74051dac983d4219da0f1f9c8e6"],["/2021机械键盘推荐/index.html","d3430881df5a9f5d8a012d6afd8ab9ce"],["/2025-07-15/index.html","944c7ca31e852047c59b01ac9f4b129a"],["/2025年终总结/index.html","365028b461144d1977e125b4621a7280"],["/2026-Open-Internet/index.html","ec1805c8c18342f6ace62afe745525db"],["/2026-best-vpn/index.html","c1272c5fa3bf9d78b052501609ab7d92"],["/2026-clash-vpn/index.html","5ff3f8556ca33deb0e80294ab2fc98cb"],["/27岁了/index.html","8232c1a3d5072b7bc567b4c4331ad2e6"],["/3D-Convolutional-Neural-Networks-for-Human-Action-Recognition/index.html","de3f8c55aa9247d080d2c9aa8c890c71"],["/3D-Deeply-Supervised-Network-for-Automatic-Liver-Segmentation-from-CT-Volumes/index.html","df98e84626b51a08c9123c6df2b555e4"],["/3D-Unet-Experiment-notes/index.html","5834048d0615731fcbd843cbe6dea362"],["/4-Software/index.html","5f22bc55cd199cb50b3db95713c6972c"],["/6-website/index.html","559b2bc4e5adf84f290b68bb36d7b2d2"],["/7-terminal-tools/index.html","e34910f968d9104276fb47564105a45d"],["/AI-PPT/index.html","a05420b8a81ed25ea97b2382537e243a"],["/AIGC中典型的深度学习网络/index.html","e93e83fd14705c457f56abd3dc3d7468"],["/Agency-model/index.html","b21c5570721d41d9661f96c4957dec85"],["/Algorithm-brush-notes/index.html","1308dca41bab81ef402309f05e7b0150"],["/Ali-recruits/index.html","d4f01fa1d6c7110b96c3dbc8bc34d666"],["/Android-VPN/index.html","0209a888f63f43b460cdf2b991561811"],["/Android-open-internet/index.html","5bf4cae7fdfe124c7d6f6b7bc948ebd3"],["/Appearance-mode/index.html","d258c12f5ade6b0a92f04d81ee3fbd3b"],["/Backtracking/index.html","cefb706f58f80f2951b697605c8070b3"],["/Baidu-Sao-operation/index.html","9fd6ceef9ea0627a8c8f18a3c9cee4bb"],["/Batch-Normalization/index.html","a6a7b65abe22ac2554f9d035bf736d1a"],["/Best-AI-tools/index.html","61e09c0c9485cbe6b5d327ca25fb528c"],["/Bias-and-Variance/index.html","b59c70977ef828c80d18d2d6b14e56b0"],["/Binary-tree-traversal/index.html","626d34171582e7d3f7102b1c10cda7a6"],["/Branch-and-bound/index.html","0cef766c933d2387118042cd3dfa961c"],["/Buying-computer-for-the-first-time/index.html","ee8ad656fb3a2eb7289ff0c8ad0ce6ba"],["/B站向北邮道歉！/index.html","22087185bde53936d2de0b718c140a47"],["/C++-string-function/index.html","9ee70b318c43214fec873991295e63bf"],["/C-Java-DevelopTools/index.html","31e7620c7a1f0c54180177a4b39be407"],["/CS-Classic-Books/index.html","d51841d41aa715f35f8ebe20c78a935b"],["/CS-network/index.html","2383f063d97285dca8439e83427ce092"],["/CSBook001/index.html","fa67e652d3d3c8ee1accbdd2fe3e5200"],["/CSBook002/index.html","d93750719fec19ce1861307756cb6507"],["/CSBook003/index.html","8ca10ed809cef0db5beaab346066bb6b"],["/CSBook004/index.html","ec12252d01f838411ea5393b46431f4e"],["/CSBook005/index.html","fb0c1531884650da56c8dd8e40d0defd"],["/CSBook006/index.html","9cb7018f3fad0b6d5f8590611dca67fb"],["/CSBook007/index.html","3cce251000a7753ce4fb3508b202cebb"],["/CSBook008/index.html","eb74e2b5361111c2c8dbbc5921ed8fc9"],["/CSBook009/index.html","26db859497aa096e78c0f2be00985ae9"],["/CSBook010/index.html","f3d7dd1808f76077a6f5fb5b3a033555"],["/CSBook011/index.html","e0e9739ade54ad3303db83dcbe26db32"],["/CSBook012/index.html","70e632c29edd511fdb7203cd4a31122e"],["/Changsha-really-fragrant/index.html","f7198e64ccfe96be6ae96c21e2ab2ae3"],["/ChatGPT-VPN/index.html","217ce767353c97d778c9add6404ebc1a"],["/ChatGPT/index.html","c06ed87a9fe1f6cd7d247f6a31909e5f"],["/ChatGPT！王炸级更新！！！/index.html","1e191ae24b7fe186ac826bd3d30cec7e"],["/Chrome-crx/index.html","c6c53aafbffdb939ca9ac2af82f3d491"],["/Clash-VPS/index.html","6fc00a0fce8ec3528b91b80c260ff616"],["/ClashForWindows/index.html","f430a472665eac7f85c9c735e02d9920"],["/Computer-Classic-Books/index.html","09b4264b282a942c22b7a990a878e53a"],["/Computer-for-another-major/index.html","d09133a962b1ffecbcd95266f0c3e4c2"],["/Conditional-confrontation-network/index.html","2c26a9629f0a87e6702cae2c58a7ba3d"],["/DNN/index.html","9924867d3547beab6712d2734d742131"],["/DSN-segmentation-liver-experiment-summary/index.html","088d0c207562334a991e464f0d6efb1e"],["/Data-enhancement-elastic-deformation/index.html","220708b146f6eced3088f433803638f2"],["/Decorative-pattern/index.html","18d2bf302eb62e4a1abfe1407749c4c1"],["/Deep-Learning/index.html","fa0d47911c66c10d17aa5f23cb567f8a"],["/Deep-learning-and-medical-image-analysis/index.html","27fc6763e6186f0523c25f519a255dd4"],["/Deeply-Supervised-Nets/index.html","e28f66fe1cd33a35447dd486432d102f"],["/Deformation-model-based-sparse-representation/index.html","438b55e21d1d86e66248b4359a74c584"],["/Discriminative-and-Generative-model/index.html","10f7fc66c19ebb5140fc8323e4ccead4"],["/Distributed-transaction/index.html","7643ae20c48864eea67e96bb37c38e09"],["/Divide-and-conquer-algorithm/index.html","c2c05d6c79a4c6673a9b676ef1a0c23d"],["/Dll/index.html","9b7177bf64d283c3c37e8d88738845fd"],["/Dynamic-programming-algorithm/index.html","913813c644585287f66f3207707eba32"],["/E-book-download-commonly-used-by-programmers/index.html","d04cb1863baa6acd6ea4fa7301288b11"],["/EditPlus软件的安装、激活和配置过程分享/index.html","274fbfc23803fc2b70695a3a69bdd0c9"],["/Eight-sorting-algorithms/index.html","6cd394fb4a028d293bb26524d070e2e4"],["/Encryption-Algorithm/index.html","eba9a106e3f4b97a253240f27c82d4fc"],["/Eolink/index.html","686cfb1f71fdeebf3bd1fdcacf42211b"],["/Factory-and-strategy-mode/index.html","9fa082a1f9e3973eb50659ea868682d7"],["/Foreign-technology-blog-community/index.html","0d9ff5bebe8fa9270730d9d9efc5ba81"],["/Functional-model/index.html","7efad369bf3e5e1bfa55efca7bad2a86"],["/Fund-type/index.html","a2019f97c8036ba69c589cd944bd0229"],["/GPT-4o/index.html","2964fb25194f48287f60727ebcbd94b6"],["/GPU-medical-image-processing/index.html","5b3778928d042f81b88fd3711bd8daf3"],["/Gemini-pro/index.html","4b7ca9b7b30ff1e4fc2bf66ec4e9a706"],["/Gemini-vpn/index.html","7bce6943b74c89e8f00081d155588349"],["/Gemini/index.html","60808de2d94192bd57500d3e8e1de8f3"],["/Generative-Model-of-Unsupervised-Learning/index.html","95fede69c46f7056013e6c077ba32175"],["/Git-Learning/index.html","f0b38f470f0db99e6b56fe1024f05cb2"],["/GitHub-2FA/index.html","4a7a0960238c9494ff824df0acd1ebec"],["/GitHub万赞，程序员必看操作系统总结！/index.html","ef905915aacb13891f37e3f11d7606ed"],["/Golang-book-recommend/index.html","b0b2e68fa07d1a8220d3c13d3d2e1c6a"],["/Golang-learning/index.html","374eb31f7351b58ff8bdcdf554a7faf2"],["/Google-Gemini/index.html","c0fc116a7e3a8465933f2a8a02ec6013"],["/Gradient-descent-optimization/index.html","a4c6545488d1848dfb584eaf89c42890"],["/Greedy-Algorithm/index.html","bd6fc560c101ebb43ca3c5e447eb4616"],["/HAND-User-Forum/index.html","194bdc693fe5c91ab685e1a9677540c4"],["/HK-bank/index.html","be76b7bbcc2872770f13e5769ac5a0c7"],["/Head-to-head/index.html","9b00bb041b613ad7b386d0272e483014"],["/HexoPage/index.html","d85cea82a0e0ae9b5cc8b09e04ebd4bf"],["/HistCite-Pro/index.html","e116f64844aacf1a08ea0aefe1ee4418"],["/How-does-the-program-run/index.html","91f4db2a7163cf3b276e2ea3b2f99689"],["/How-to-judge-whether-technologyisreliable/index.html","a274f00a97b3755e69ec61521e65fbdd"],["/How-to-learn-design-patterns/index.html","61f2a89ad0119e36418c975aeb677975"],["/How-to-learn-design-patterns？/index.html","5be06be643a90cec4dd32edd35da580f"],["/How-to-teach-yourself-programming/index.html","05f506ac562d22d55b997442c82f5924"],["/How2learn-Python？/index.html","19c87411febca699f589a39257996bc7"],["/IDEA-shortcut-key/index.html","333fbc5a3bdab72fb984c58ed27aeb0d"],["/IT-interview-basic/index.html","633183a4d32f0fea3c70d79475ea0d06"],["/ITK-VS-install/index.html","855d849b2b49e366034927c60e7d4df6"],["/ITK-VTK-ItkVtkGlue/index.html","d6df1d70a7915ca1baf3a257d30fca56"],["/Image-processing-plus-noise/index.html","50c392f21ba69bf31f6aa9c63eafa6a6"],["/Inception-Going-Deeper-with-Convolution/index.html","44373c2e765e4983e56db067b9c711c9"],["/Information-Cocoon/index.html","ba6e0a8f5b65915f1e9df626d3fcb744"],["/Java-GC/index.html","21b8026b742584a97b205b67f91c10fe"],["/Java-Servlet/index.html","c4af6bd60a80026d8f03bce5248d7bc1"],["/Java-array-and-collection-sorting/index.html","e732f9e3397b5be08548b42432f85b31"],["/Java-development-tools/index.html","d2e552b353767d11798f7757e54e4b77"],["/Java-eight-data-types/index.html","d62917dd929a3879f2ae9650588527d3"],["/Java-interview01/index.html","2b39a4d1af8b60383b9e49ee72590a5c"],["/Java-interview02/index.html","57bb4fb241f38591418bd4d6a8be88cd"],["/Java-interview03/index.html","3906a99a4fcf74f4df79f4fad4e87ca0"],["/Java-learing-map/index.html","e2a97964e77dc8b28028be11d2282251"],["/Java-learning-route-map/index.html","b7de25f8f3fe51862800bc5ed80357ea"],["/Java-memory-area/index.html","410e191d9a098ab914aa78e708c7436c"],["/Java-memory-model/index.html","a709dce06a881336e41d7c6f2d029e28"],["/Java-multithreaded-learning/index.html","d88c9591d33c1451c6840c76ee061afb"],["/Java-project/index.html","2ff4f18330f59c3e77a170109b13c795"],["/JavaWeb-Chinese-Garbled/index.html","6b66b616808a71680b5dcf989496e0b8"],["/Java还是C++？/index.html","038d1be4291db5af783cec5add6d556f"],["/Kaggle5-step-guide/index.html","b65bbb4bbcff5a7b708f19643663e473"],["/Knowledge-points-of-Java-garbage-collection/index.html","8634b533ace0a495cc748cc411401b81"],["/Layoffs-Hiring/index.html","5cad337d976d4f43352d31770c95710e"],["/Layoffs-and-Hiring/index.html","2a3d7eb20a9087d4f92570bc6d122892"],["/Linear-regression-of-machine-learning/index.html","875db40ee936af8484ea76eae47883b3"],["/Linux-Compile-C/index.html","4906f8d4dae4017435661752e447c8bb"],["/Linux-ITK/index.html","489f0fea7934537c7fbdbe0d71816d0a"],["/Liver-segmentation-of-sparse-components/index.html","d51c7a1ea6a2b73a2576b24fb451bb79"],["/ML-EBook-paper/index.html","e0e76bada773ef3d43132bddb03446a1"],["/Map-uses-multiple-maps/index.html","a8b93a14adbf8a0ce7d86c7935ec9fa1"],["/Marching-Cubes/index.html","b36da5554f380fcd16f13a3b2a2841b4"],["/Matlab-Graph-cut/index.html","30ab0773abba8362232fe757764b789f"],["/Maximum-Likelihood-to-EM-algorithm/index.html","23c5f099dc330bb0e72faef208547760"],["/Mean filter and median filter denoising/index.html","76e9f36e647043986306163890611c8b"],["/Medical-Data-for-Machine-Learning/index.html","a94f716a3822df242d1cd3fc10ec6c45"],["/Medical-image-analysis-deep-learning/index.html","b350e232a4f3cc7d7424ff56c93dba04"],["/Medical-scan-image-processing/index.html","5a9a62d96a9b3919d8491c07120f30ea"],["/Merge-sort-algorithm/index.html","97d4358f17fea2f2ef1a61d272d7be1e"],["/Monthly-income-2W/index.html","8fc93be208dceebff159d78f2b533cfe"],["/Mysql-database/index.html","db8fc14858ed04c503f4f5ced471a0fe"],["/Neighbor-Embedding/index.html","1eaef753fe8dd3925f4078e76dc71b30"],["/Neighborhood-approximate-random-forest/index.html","5be0aeebae9370c7389c884f03b66ca0"],["/Net-and-official-documents/index.html","9e0fcb7de8d9889cab37c29e17129b90"],["/Netflix-VPN/index.html","d970162cd6b963881dcd69161a39be3a"],["/Network-principle/index.html","97e4769fd1061b364f0be87818f4c829"],["/New-Hong-Kong-stocks/index.html","f88b6bb46207e08b39b69956ad636dd0"],["/Nice-to-meet-you/index.html","7f3adc4ef183012ef870e157fc647b5c"],["/OS-processes-threads/index.html","a7e882c91d9e5e0cbf1abab52db2f773"],["/OS-run-environment/index.html","cee6e38092fef451d28e73a5bcf88fd7"],["/Open-Internet/index.html","e1a345b0afe520ff2453f1a701001a58"],["/Open-Internet2/index.html","1188dc5820dd2028b771cfe30be94eaf"],["/Open-source-community-and-rewriting-website/index.html","965aef55b9dcb25cbf18850ba1897d17"],["/Panoramic-image-stitching-based-on-SIFT-features/index.html","919a085723f8ba5d5d5bfede6518bb1b"],["/Parzen-and-KNE/index.html","1c75b96e27dfc2b23f8486e4705b1ff3"],["/Personal-technology-blog-site/index.html","a41e4cd6a55774c9be17304ae5ace551"],["/PicGo-Gitee/index.html","bb1bbcdcd58dbaa4377054611c13176e"],["/Programmer-treasure-chest/index.html","6413241587a2d5c4b36e4a64a0ee168d"],["/Prototype-mode/index.html","db2bacb9f12918445ca669268b555e78"],["/Python-base/index.html","513d13dc754637d7b6efa9cbf22e00e5"],["/Python-crawler/index.html","2adceb9055ff7732d72be8d8eaaa00ed"],["/Resume-revision-suggestions/index.html","e367c21d9dc35c6b79f5cef2c582e1cd"],["/SEO01/index.html","da1f85905f4a31f98f36ff7446c55f0e"],["/SEO02/index.html","4d019b3d8c56c52d3e1eca59c7105c8e"],["/SPHARMPDM-MEPP/index.html","4142b0b2ac4c4b0697aa17426fbe1e27"],["/SVM/index.html","54205d616a74a360e6e5bd6519623378"],["/Seata/index.html","11d6fd7c484f8a4a3057fd601b218a29"],["/Semi-supervised-learning/index.html","0cfc810e5bb333f9fd8a1c51e4c536bc"],["/Sequential-model/index.html","cfbfc74c6af3ab59e40498988b730471"],["/Shape-Based-Human-Detection-and-Segmentation-via-Hierarchical-Part-TemplateMatching/index.html","997ec38395f5252443b4ee3b3737a713"],["/Spring-basics/index.html","22c5d64684a763da64cf7472b3926e5e"],["/Spring-integrates-hibernate-Struts/index.html","85ab31c4e8f4096ddc9a685f771a1e01"],["/Structure-learning/index.html","8f1a3bbb50c98d9eb10b56d31db823cf"],["/Suggestions-for-self-study-of-computers/index.html","749f53e445860797ed942740e066fd16"],["/Summaryof-HongKongStock-Account-Opening-Links/index.html","49556a4adfcac873ead866527d63ef04"],["/TCPIP-detailed/index.html","4369988bb03dd70ecca477abb9823b8f"],["/Telegram-VPN/index.html","77fa049a20fb359c3748b8d7fe2ee8e7"],["/Telegram/index.html","34ac89c1d586683ab45439bb107b992b"],["/The-essence-of-shopping-festival/index.html","2af302accdda9c936a8b0210d371644c"],["/The-most-important-investment-in-life/index.html","f8dbe4441f202669e390d2a50ef690cd"],["/The-most-successful-nvestment/index.html","263f75a3d76cf4defda2cc7fa36e0caf"],["/Transfer-Learning/index.html","7220303cf44c34adb53217b1773368ac"],["/Transfer-to-computer-major/index.html","d4277dd0b494d05592e28855abc394d4"],["/UNet-Convolutional-Networks-for-Biomedical-Image-Segmentation/index.html","a87f5fd1d754e19f4fb753ea1db0c2f8"],["/Ubuntu-install-sougou/index.html","ed71dadeb08f86f556e5c623957bab0a"],["/Understanding-of-paying-for-knowledge/index.html","ba304484d056c6355e79db5687205e2b"],["/Unsupervised-Learning-Linear-Dimension-Reduction/index.html","80624f0f5fc707b9dc1c8ee4dff5af44"],["/VPN-HELP/index.html","6665e7c5f52629649b97b8a5c98aeb8f"],["/VPN2025/index.html","597b1e4a49f9e251b23090277a11d2b1"],["/VPN2026/index.html","ec7f97a463f5a12b11a3c70063672960"],["/VTK01/index.html","1e5285439350451894d621f34c9b6757"],["/VTK02/index.html","97791f20541a7326d014c9fec97f34c9"],["/VTK03/index.html","19ed0088fafe772ad5ea9cdb8dd2fb29"],["/VTKRead-write/index.html","90acea1c6582e6f22c705eebebf64964"],["/Vertx-Java/index.html","a70e8e4ac3306bafb086f823ded689a7"],["/Vpn-OpenInternet/index.html","b6ed32a944ed1aa141e51e4667194fb6"],["/We-are-all-good-kids/index.html","29352c5fe25bcad66f7a810bddd80064"],["/WeChat-80/index.html","5e9e71f58c9d8d86c20b7e91a6f6749c"],["/WeChat-red-envelope-cover/index.html","2a43444290a04afcbff7c708734b132a"],["/What-is-crawler/index.html","c6498fbee07993f0cb0f99f4e7ea38b7"],["/Win-Open-Internet/index.html","7e1f25556e8c8dfa9e8d2c2cb0b92f20"],["/Win-OpenInternet/index.html","a7a24a2a181aba2158266fe331c9963d"],["/Windows11-2kfans/index.html","8ff11ad0604cf1f225e29e05dfb85508"],["/Word-Embedding/index.html","748a52d1cf45fe45b6e7b3b86e6f6ed1"],["/YuanShikai-and-his-Beiyang/index.html","d975aef8f4c7cf76168f6344f7dee4e9"],["/Zero-copy/index.html","864e6b6f105fac2e401b000da1569f18"],["/about-keras-model/index.html","82f695034fe77e4d065d1190407631e0"],["/accounts-google/index.html","d10ce241f30dc38641c4c63d0f617603"],["/algorithm/index.html","d05985595fac59850ad79fd3be3e2e1a"],["/alibaba-Java/index.html","14cc53cffa69cdcda83c40395de617b5"],["/archives/2020/01/index.html","af39877789d86eee45bc12de3dbb90cc"],["/archives/2020/09/index.html","ab032bc6676ed7c1f6f968261d797193"],["/archives/2020/10/index.html","2a6bd6e83fb675175d3ce17bc8dae3f0"],["/archives/2020/11/index.html","c61960c4162c083c50e09d8f023fe07b"],["/archives/2020/12/index.html","77f0edda74200d3e64ccd745b3f8af07"],["/archives/2020/12/page/2/index.html","51c4c279b0b9be0f5324419d8d89a64b"],["/archives/2020/index.html","72d88a2841df54a1e51ac5968a45f44f"],["/archives/2020/page/2/index.html","2d92774c5f68aeeb78a0d10cdd3783f8"],["/archives/2020/page/3/index.html","87d2b071d33a5a7aecde278aeb934559"],["/archives/2021/01/index.html","02a5a14aed484232738806e837781c1b"],["/archives/2021/02/index.html","5b0fc267ed278abee57a686fa46bcd7b"],["/archives/2021/03/index.html","e8450ea15d66897e335609795fac44e1"],["/archives/2021/04/index.html","9e3ddbfa1261d3f162138c113c23ca0b"],["/archives/2021/05/index.html","793b631f0a957e407eecb4db3b4e3ecd"],["/archives/2021/06/index.html","cd2a9feb6427a4f19eaeefd8679c9374"],["/archives/2021/07/index.html","383047918447c509801b8d5049f91f11"],["/archives/2021/08/index.html","b8c9d54abe93230c7b2c99fd3521829f"],["/archives/2021/09/index.html","3c3374e13b92e5727eca52155672dbed"],["/archives/2021/10/index.html","2988ede913d855a234490a825754f99d"],["/archives/2021/11/index.html","36f3006d06cdf0aa60f9576f8cb06a58"],["/archives/2021/12/index.html","d8715a9f2c992e0d906ec27f09291e6d"],["/archives/2021/index.html","cbc885c15b8e709bbda32cf90e834a03"],["/archives/2021/page/2/index.html","df42ca01b6538395d728c98bfeb58ba0"],["/archives/2022/01/index.html","a3589e336c0e4aa3c94d2f41a4e187ba"],["/archives/2022/02/index.html","132adad159a0a96e89ddddadb1ab46b3"],["/archives/2022/04/index.html","0ff29df553f5eed580b1829a605fbe29"],["/archives/2022/05/index.html","cf855b07a3b122b26709d432168a9951"],["/archives/2022/12/index.html","7c40b2202576053101b2b0dcdc52006d"],["/archives/2022/index.html","165ec6fc35c39c2c4b9304ef49d2fa96"],["/archives/2023/01/index.html","2369bfc96ef68e36bd4fce35039a82de"],["/archives/2023/02/index.html","19caad01c3322729d268b9498c675220"],["/archives/2023/03/index.html","4f3b63ca6dedc4f7ea2609702a3175d3"],["/archives/2023/04/index.html","fd8c54286e6dc0f2b2fe1fb3f4b230f6"],["/archives/2023/06/index.html","75e7f9458fbd120262cdc991bc1a819a"],["/archives/2023/08/index.html","db68826202eaec2ada4d44fe802f1fbd"],["/archives/2023/10/index.html","70a314277d950a963fb6df813d132f96"],["/archives/2023/index.html","ba9dcd20259b943bd9a3aaa39ae5b0c5"],["/archives/2024/01/index.html","8bc2295d147a3f1140d69795bd7e58cd"],["/archives/2024/02/index.html","9a5d53abc0a36d416e0e0852d55473dc"],["/archives/2024/index.html","273612b98ea49e403870c808cce59f24"],["/archives/2025/06/index.html","ae4480a0eb9f3a89d3e9a194a84e4d11"],["/archives/2025/07/index.html","90ffe455435ac7467cc920bcc9f649b6"],["/archives/2025/08/index.html","3a73c718c469e296ae09ffa697f4bedc"],["/archives/2025/09/index.html","44f1240afe440f7728e9abd8bbbcdc31"],["/archives/2025/10/index.html","525e4127a4f03bb06534f892e61ccefb"],["/archives/2025/11/index.html","eda6794b8cfa862789e71b556c852c7d"],["/archives/2025/12/index.html","be09a0d65c940e5f2b65cc100c1a18ad"],["/archives/2025/index.html","87929085fc5ce9ab233734b2b415137c"],["/archives/2026/01/index.html","5e13d051810eaf102d0d9dc5205157d4"],["/archives/2026/02/index.html","21bec5418c525805e583e640929fe561"],["/archives/2026/03/index.html","d2b4f0dffec624740a695b742a2d590e"],["/archives/2026/04/index.html","008ea6ef753a668f385c64f0b5b45cd6"],["/archives/2026/05/index.html","3ce26cd95cbba346a06ed6a087d908d5"],["/archives/2026/06/index.html","a38f58f8298e7c812ca6b7cd6b327204"],["/archives/2026/index.html","329058c1f2dc3c75d24b3da1dd627652"],["/archives/2028/02/index.html","d90e1499c75ca04ff06854fa6ad1cac8"],["/archives/2028/index.html","13972309431ec693badc792247fdce22"],["/archives/index.html","188f84afb438cfca87afeb48f20ff428"],["/archives/page/2/index.html","3f3dd4ce6329b56f8921f078e9f7220b"],["/archives/page/3/index.html","370fc17df098d373dc26395785287db0"],["/archives/page/4/index.html","365d9268f83989b44dd9fa6b96c8bc86"],["/archives/page/5/index.html","c652b13cc43e4d41124c77a9231b7230"],["/archives/page/6/index.html","b36718570a44d55bc77e1b2f8a373a8f"],["/archives/page/7/index.html","e16540a20aab460dc4d0cf9a078f0e4f"],["/baidu-search/index.html","dabca27213d61167e957eabe2ff0617c"],["/baidu_verify_code-Hh2fKNlEB1.html","96d56753001f6ef260c3df93aa15d58b"],["/be-a-programmer-instead-of-a-code-farmer/index.html","97d0e4f00faae1a79c29af38c26859f2"],["/best-vpn/index.html","218c5261d3004ce06e74d17d3ed7f096"],["/best-vps/index.html","70860658bc9dea67ca36089de18a8b96"],["/bought-a-house/index.html","583865a6225226531480984def0cd339"],["/categories/C与C✙✙/index.html","02b2f69a714a11620c08d252d48e6d20"],["/categories/Go语言/index.html","ea48d27f78df96c78aa09a603f26321f"],["/categories/ITK与VTK/index.html","c57c35e1ff5cde8f7551222c24c7075b"],["/categories/Java/index.html","52460cda6d8caef0ca9b79d4514dfcea"],["/categories/Linux/index.html","f21fd8736ee3d068a8622a5718d3e593"],["/categories/PLC/index.html","599391451c0b1b826aa4f4330d96f953"],["/categories/Python/index.html","b3afaffe1b4bfa120130feda3dbaf2b0"],["/categories/SEO教程/index.html","98f5546d49a98c212cb04e9d7522b1ec"],["/categories/index.html","9138093b3bbd289ae1629412907e6abc"],["/categories/图像处理与机器学习/index.html","a447b85cc9f9271d35bf402885f83e81"],["/categories/工具/index.html","7b31100bb9403f770d9f0d3a2b33b591"],["/categories/技术以外/index.html","1f042278760140a0e99a36f6f127209b"],["/categories/技术以外/page/2/index.html","306eea438a380713772e0bd944e7c2f7"],["/categories/数据结构与算法/index.html","c64b33f811f2342e746621b170c2d710"],["/categories/科学上网/index.html","352bb495114d43182046da9919a88b45"],["/categories/编程经验/index.html","29493d18366c01dc8b22e10854d567b3"],["/categories/编程资料/index.html","5cb71bd0c3e864a9f9e73780a48cc15c"],["/categories/计算机基础知识/index.html","f9e1e0d20ad2746b2c77e3f62d2cd6f1"],["/categories/设计模式/index.html","701334d55f2c30ef55f5d9a7702c2275"],["/choose/index.html","97d2257f53549c113cbc82f278db2689"],["/choose2/index.html","1170be0067147cacb2d7225480041d68"],["/chrome-crx-intruduce/index.html","9c43482be231729bbd11ac83fba90548"],["/clash-free/index.html","ad20e9429e22eb0174c5cab0cf95e7ab"],["/clash-pro/index.html","71ac0bfa3c87a5ea8b812b32063b5283"],["/clashvpn/index.html","e0b2258dc5f2758b83deedab5c5f534f"],["/claude-code/index.html","0e63cdd0bfde3e60164403287bb85470"],["/coder-blog-website/index.html","c8df3e974e85f1f9d1e00cd1409de908"],["/coder-source/index.html","8ef4412f742f2fa9b4a7c2b12f9ab60a"],["/coder-videos-website/index.html","0140cddc0830b75962af791bb2a0e492"],["/computer-book/index.html","837dd5c8ed9f8878a183a242ff3421b8"],["/computer-censorship/index.html","ccd6f846b942d42e34466189058b2032"],["/computer-network01/index.html","3b702cc14cb2b881b9eca21c95b717b1"],["/computer-network02/index.html","58cb97517571c8ffd210dc8129fef64f"],["/css/main.css","bc32ad34ec4990d934c3c647bdb62f79"],["/database-Mysql/index.html","b17d5939f9187ea0862345d4695b5858"],["/eclipse-lombok/index.html","3929c8693e4f8a4a02c44e55ddcdffcd"],["/freego/index.html","27d58883bf8e0823e983b3a5e9b47757"],["/fully-convolutional-networks-for-semantic-segmentation/index.html","9abe3f7569c8eb19dd8e89c542464a1e"],["/great-firewall/index.html","cd1c85f39a6fc6e892916e64e8110bd8"],["/halfrost/index.html","25b8527eb600915429343dcb948e98e7"],["/how-to-signup-chatgpt/index.html","d319ace71a83572bedc8701fc981e25b"],["/how-to-use-Gemini/index.html","d0c7b2aaba1c1d914712541d17ddf00b"],["/idea-continue/index.html","86aa61b8aa2816f8585f1ee4742a674d"],["/index.html","7b78229bee52be186ce676160871f3f3"],["/internet-dir/index.html","1560027c00efb2542077193104c554a0"],["/ios-open-internet/index.html","fbe67c06d3940a5a3176e58ecbf6e667"],["/iphone-open-internet/index.html","ddede8d1ee178442d390b4033870e61d"],["/itext-makes-pdf-form/index.html","43976563f9d126f365fa402375f6b483"],["/java-Set-Map/index.html","90e7d695049b5188c0256e1f32cc9822"],["/javaweb-server-error-codes/index.html","1409d10ead8e3bd359570b1ba9d6c583"],["/javaweb-source-code/index.html","02878340ccf223543617d141cdf14a86"],["/js/lib/busuanzi.min.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/js/lib/lozad.min.js","47904d34a224931dd1b615c59a3dbe3b"],["/js/lib/prism/prism-coy.min.css","0ccad54d95845901ead59bfd3ecceb14"],["/js/lib/prism/prism-dark.min.css","a4711d2957d6605eb5682bdd228cf123"],["/js/lib/prism/prism-funky.min.css","efedcdccd7a9ab342d2d9cacd24920af"],["/js/lib/prism/prism-line-numbers.min.css","38e22e790c279bb56f9ec4b90a2a2d58"],["/js/lib/prism/prism-okaidia.min.css","5ac6f9de996fbec68aaa106dfb16e061"],["/js/lib/prism/prism-solarizedlight.min.css","ecc7e64d039873ffcf7fb27babdaeb5a"],["/js/lib/prism/prism-tomorrow.min.css","456af2a14ae4f5089939d5904ac40fe8"],["/js/lib/prism/prism-twilight.min.css","ebb5c355332a8cf9a1ce37a2a69d678f"],["/js/lib/prism/prism.min.css","a5234d614834658887cec6a9515890f8"],["/js/main.js","052d2b299d9c750afea8df0b802ab7c1"],["/keras+TensorBoard/index.html","5960016d44792b784705629539419175"],["/keras-beginner-guide/index.html","05a0cfe1b15721241b4d2ddc1cdebeea"],["/kimiclaw/index.html","2647f79e6f4a11c82180bc4d81000844"],["/kmp-algorithms/index.html","e5a1a00c769f1b7756575c69eba6225d"],["/leetcode-Java/index.html","d1dfab29a87a7db9fdb5628fe49d42bb"],["/links/index.html","d13b4e2533eb606b120d493faa77388e"],["/linux-java-opencv/index.html","70c3afbd8ec8ea15a079dad3554df928"],["/magic-internet/index.html","558a00507121f5fa5fe2fd517f71c84d"],["/magic-vpn/index.html","ca491316fb4ece8c6516b88cbb6560d7"],["/mingci/index.html","a69362c4893f6890dbd84f60175cd079"],["/mobile-vpn/index.html","f413d657c2e291ca5b62d868b4d4462e"],["/msb-source/index.html","0959a3cd9feb8187818ef36d36ca07f8"],["/online-BUG！/index.html","cd13e196b66ef0b601a326db7bc7856f"],["/open-app/index.html","4ae20e7b384777f540eea24b86d7df24"],["/openclaw/index.html","aba99538f1d8aa38be00d14c40c7b005"],["/openinternet/index.html","01486057ab4e6c3b6a128f05db15d1ca"],["/page/2/index.html","1f610a6cafb46331bee0a7ef16f29cf7"],["/page/3/index.html","b76e12e7703af934f2425405203ed857"],["/page/4/index.html","fc4c0d607e60ac4e8c3025cd0b763515"],["/page/5/index.html","f48c0af58498dfb3dda73fc5bd69c5f6"],["/page/6/index.html","4f920d081d75a9674905d340eb069e63"],["/page/7/index.html","ab3570c8e19122617560d6da3f6e6870"],["/pandas-data-preprocessing/index.html","4bd0e5334a4e5be2bfdfd0da6201fa42"],["/phone-win-open-Internet/index.html","098aae2138552eb21cf9d5264ab12246"],["/popcorn/index.html","864a96d13e838f334a0ec93e06aeca39"],["/protocols/index.html","bd3804da2c588ed0cf75a4f42dcfab6c"],["/python-Blog/index.html","7b81b433d92bbf64166fc8dcf30f0db4"],["/python-yeild/index.html","2b1032edb44f386e9decfba20dcc6dd9"],["/python爬虫教程/index.html","ed4d1790afc0c4b20ce74bb1942e09c0"],["/route/index.html","c5be0df09a03757f243823cb477fae23"],["/search-help/index.html","af48ecbfd612511332fb482c0ad6cc37"],["/software-copyright/index.html","20d2b3be57b9bd6b20fec63b4c28b808"],["/sw-register.js","b300d71e23e9d8e4d7865d0e4872e095"],["/tags/AI/index.html","b1be505738c41e829037a58dd14553b0"],["/tags/API/index.html","94db8b7bd20852ea0152bcee84d07bba"],["/tags/C-图书/index.html","70757e50f8ac1d49b7a7499391706dfe"],["/tags/C/index.html","eb942b1ea1859619214310560d2e3fb2"],["/tags/CNN/index.html","2d58064bc9f89dd7a8a00941b5b05cb5"],["/tags/Chrome/index.html","f949da94f70c2c9b5e4b92c62d1dde5d"],["/tags/C✙✙/index.html","4cf2cd7d42239f4f817282ecc93f2c13"],["/tags/C语言/index.html","e7232dd03b42f54e6200727cb262af02"],["/tags/C语言图书/index.html","6897d52857c5631b1027313eee0562c5"],["/tags/DSN/index.html","b270ba80dd895bc5d52c6c1bdb873e69"],["/tags/Dll/index.html","61091d607c48ad154ec5fddcaaeb12ff"],["/tags/ECCV/index.html","517da168d958316660bc3f3cf92f7959"],["/tags/EM算法/index.html","53290e9d02062b305a5b9935b13194d0"],["/tags/Eolink/index.html","d78de7c63abc499193c685d1cd610ef3"],["/tags/Gitee/index.html","03e6778a867afb9671fa58c2bb358052"],["/tags/Google/index.html","5be0ce7d7b91443a13620851b16b529b"],["/tags/Go语言/index.html","64bab1bba61512d872e070e6812c74eb"],["/tags/Graph/index.html","dbd3b89ed20d8c27146b8a6177c4e3b4"],["/tags/HTTPS/index.html","7a0fd32f0257dd17c9ae3b1eb9f39803"],["/tags/ITK/index.html","97d799e30b1e3ef4c924009fe21dd397"],["/tags/ItkVtkGlue/index.html","6cf2ebb4352b8298c4ac1b0c0ae50587"],["/tags/JMM/index.html","9f999dc78ebdc594fc80a0138e82eb3e"],["/tags/JVM/index.html","2ac77d586bb1b0ebf63ecf2499caf90f"],["/tags/Java/index.html","2aee2b609fd18c3e7d30f71ae107b6b8"],["/tags/Java图书/index.html","9f634d20510eeaff09c9393364bab981"],["/tags/Kaggle/index.html","4dd8722ec225f86b8ebee4242c66a88a"],["/tags/Keras/index.html","7701e445158f3bf0a7cf4ad722965e16"],["/tags/Linux/index.html","76378df345a608358999caddc18b9549"],["/tags/Linux图书/index.html","c63114457b4bfc4c7c0d3c832b9323f8"],["/tags/MEPP/index.html","385993fa15c9d6557c0f9850d4dc5c1c"],["/tags/Map/index.html","8d1018a8eb03e865c22d434992fdf261"],["/tags/Matlab/index.html","0291e2f4acedf889fca60c01e841242e"],["/tags/MongoDB/index.html","88e9dff3f8ed425702a402c44d363367"],["/tags/MySQL/index.html","126c21ca682a6458dee5b26e755f037e"],["/tags/OpenClaw/index.html","b4a828b3ffdd14b689a392138b0f1901"],["/tags/Parzen窗/index.html","456338352a870e27105be46747764a53"],["/tags/PicGo/index.html","c30020cc29e70eaa229bbf28ba4922ef"],["/tags/Python/index.html","e4507d6dc7937fb352e4f6c1afc68e3d"],["/tags/Python图书/index.html","0ae18fd00cfe80419e26a465e1b8998e"],["/tags/SPHARM-PDM/index.html","d35a02f06df95bea1a7f5bb539eeef33"],["/tags/SVM/index.html","08866c1982b94f1d349b3269ae0da55b"],["/tags/Seata/index.html","cfd5abf95dd2a174f787e57385c97817"],["/tags/Servlet/index.html","021178a08ea37f30e253860d82a788e4"],["/tags/Sping/index.html","38a436b3e0287dd3f9dbe821bf0d12b8"],["/tags/Struts/index.html","68bf133189fe3bb3a30cb2d8e601c41c"],["/tags/TCP-IP/index.html","f575d738d996ce997d0ee71033051ca3"],["/tags/Ubuntu/index.html","f5bbf6cd52748a90b5548d7e178058e3"],["/tags/Unet/index.html","786da05539b33baf735a2d748be50c1e"],["/tags/VPN/index.html","4773c3cf44e9dbd09742de7ee6eec7a6"],["/tags/VS/index.html","2dc508155b8a3c9d999970a3831a608b"],["/tags/VTK/index.html","d62851a8078ed98e7fa4f840f5fae75b"],["/tags/Vertx/index.html","d83de897c4fa59b26e5cef79d53eddea"],["/tags/Windows/index.html","4975e9a62ef39e7ffe2ede29773be6d9"],["/tags/claude/index.html","f9dc56276b6a1cdf4385f61f3f39cf70"],["/tags/edit/index.html","98d91174dc450b74035d628781738518"],["/tags/hibernate/index.html","d995ca881606920547f546732af576e2"],["/tags/index.html","69131318acadb8f45481a2b68de9447a"],["/tags/itext/index.html","0ff2652220fdbd2ec2894ca6264fdd33"],["/tags/jdk/index.html","36f1047ed2747589c938efb1f3f5e165"],["/tags/kmp/index.html","0096ace97bf58848dac48fcc14ff0052"],["/tags/k最近邻估计/index.html","80ff548ac618a509ead3a6f3ae2124da"],["/tags/lombok/index.html","95b4a885123021189bdc65956934a5ab"],["/tags/offer/index.html","0c653e3b49dd538637ff1c57441d3731"],["/tags/opencv/index.html","94e9f635433b2ac7a30ab13101751000"],["/tags/pandas/index.html","96459670533627d83dd2dc1be96590f5"],["/tags/string/index.html","ed47c0c55037fea32f8d7e81a6266a5b"],["/tags/vim/index.html","7de388e5f6c1f86a548b8926aa7b4b0e"],["/tags/vtkPolyData/index.html","31392a8dc20a01bf6f8b8f61c21797ec"],["/tags/web/index.html","7cfb722bdea70be04aabe2c3c6a62e18"],["/tags/xshell/index.html","44348be6fe72a9d4813699c67659af0d"],["/tags/yeild/index.html","959e433874559679d381d3751f1a68a0"],["/tags/互联网/index.html","07411d48ce8e0925e7c9023c002d86ad"],["/tags/人工智能/index.html","c30f7ccaa007eef25d85879f03179438"],["/tags/体绘制/index.html","567cfaf1f343c6655f103d6d4216ed58"],["/tags/全卷积网络/index.html","73a93a4039980ea68f15f1b5d21c4111"],["/tags/公众号/index.html","001b5efc9f93dc9f3ca83e89c1bc9378"],["/tags/内存模型/index.html","5e7d8846bb17d66c73833b98731d0e75"],["/tags/内推/index.html","1cb7ecc8533fbe73c5fef56e2acfd0da"],["/tags/函数/index.html","e409e044e57d69c1c7f32f5ea7d39791"],["/tags/分布式/index.html","edd9bb9d04fdf848f9f6ffe0d72c67be"],["/tags/加密/index.html","d5071199cac07dfe443ba74d60e2a450"],["/tags/医疗图像/index.html","0b26c38bc64b3cfe36f9da37a80ac204"],["/tags/博客/index.html","2fe777777ef663fa4588dd43116495b7"],["/tags/图像数据/index.html","94452c6c5f52fda87d4f2b5952e57cb2"],["/tags/图谱分割/index.html","3dd8c498a7d53f0b5288f3b16aba0b80"],["/tags/垃圾回收/index.html","2d9328d51741984ac6c31d023d8de4f6"],["/tags/多线程/index.html","ff63dc59aaebb5b06f1822dcb3064eaa"],["/tags/字符串/index.html","8ff610d71b3aef264694d8396d10ec32"],["/tags/小龙虾/index.html","54b8d998006d0f6d2fc24f50e5722dd7"],["/tags/工具/index.html","ea53f98651b5cb7ec4b741ceb78d44ec"],["/tags/弹性形变/index.html","ee4c624f829761e25ffaab370af83bc9"],["/tags/排序/index.html","52c13141f513dce90d74df9f025b2ad7"],["/tags/搜狗/index.html","ceaa8e1b32e643d1a50d2a31447acf17"],["/tags/操作系统/index.html","adbb75a1ad0c528a81e3c233eeba97bd"],["/tags/数据库/index.html","9138d7932b9a214f29e2cc4b7b8bba9a"],["/tags/数据类型/index.html","bfe2cd9d035d3fc731c378f44e56059b"],["/tags/数据结构/index.html","6fa06a081bd3128d51bb0a5f1e6b1d9d"],["/tags/最大似然/index.html","b9abcf206ededbf24bed1d95ac91c06d"],["/tags/机器学习/index.html","d1bd8aafc7978e237a88e99de29b4850"],["/tags/树/index.html","9b4908cc2af3cea5872e9dca3232400a"],["/tags/框架/index.html","e1a444e85c289558bba8e577251b1e8e"],["/tags/求职/index.html","202f0263f4e1d57b475375b8a1469912"],["/tags/汇编语言/index.html","0e76170871784bfcf796b906c1689bc5"],["/tags/深度学习/index.html","5508c1645fdffcbea2163d18233105c2"],["/tags/深度监督网络/index.html","82e76a6487741572e857ecd36ee82729"],["/tags/爬虫/index.html","9809d714fbd7bb02d245e9f129ddaeea"],["/tags/电子书下载/index.html","e7f028a233be95131d1b582a47c0764f"],["/tags/科学上网/index.html","4a426ba504a6b9db7e404a2356b8d6f5"],["/tags/程序员/index.html","a7b9c52ce379f188f46920c57e5a02f2"],["/tags/程序员面试/index.html","445e0622aad9a656913f17a369f7a824"],["/tags/简历/index.html","7c8777b9ce86958f98592d8b9803d302"],["/tags/算法/index.html","9c15e04c88ff194407f0bddfb8d355a2"],["/tags/线程/index.html","242a49eea174253970215faee545c126"],["/tags/经验/index.html","49589baeccb6a936d5952f3291fc470e"],["/tags/结构学习/index.html","90b2aaf8eb838192f72c5a3bf015b838"],["/tags/编程/index.html","08e5006288a482ed092d5b1368bd6302"],["/tags/网站/index.html","22dafd3882f541391a4856d61657da9d"],["/tags/网络/index.html","61295ab93ef322169dfde6349aff06fc"],["/tags/网络原理/index.html","39d55d49d40171bbfd6e412eb249885e"],["/tags/翻墙/index.html","55db863b263876fdeac7425f6c415ace"],["/tags/肝脏分割/index.html","7b18a9f5176fe615881748a9e30099cd"],["/tags/计算机/index.html","f2d2e72c171ae5ec986a5e325310fd62"],["/tags/计算机专业/index.html","fc06fd6e150cbce06cb9ebce55c77123"],["/tags/计算机网络/index.html","ff0407765566aa147f197926069f7f2b"],["/tags/设计模式/index.html","2563d61a0b783c49d6c224e2d3969fbf"],["/tags/贝叶斯/index.html","4643dfda6d1adf65ec6ff306553456b9"],["/tags/迁移学习/index.html","0940fcfb735618de6296f7f4d7855d68"],["/tags/面试/index.html","c7e154b695193db59c00648ea9aae6d4"],["/the-meaning-of-reading/index.html","3953c6122f18075a09cc42d416d33aaf"],["/the-way-of-pragram/index.html","c8f3df5189b71758af24a0532558e852"],["/troubleshooting/index.html","65c0aaf37b964a1ecf7f0df87718764d"],["/untiypro XL安装/index.html","91348c95abf21c98dd97c24ba0bfeafa"],["/video-websites/index.html","21344cb9fab5354f93937f2274b9ee0d"],["/waibao/index.html","bd2d360c1b64638e2e3e3c57ae10bf7f"],["/wechat-fans/index.html","35504b92317f61f34dfba6298aff8e13"],["/window-run-VTK/index.html","203b98795e8db79996c7384f344142b9"],["/windows-science-internet/index.html","ddde0f5a96d8d3f22273b4ec58e27834"],["/xshell-connect-Linux/index.html","641bd329ed549a12c3bfb4dbfc04e648"],["/yzhx-vpn/index.html","969104afb59b1b091e719f074d4d6230"],["/‌Accessing-the-Open-Internet/index.html","a18bd7a7b6a2c43079f3c6af340e9790"],["/《Java高并发编程详解》，去大厂必看！/index.html","f6058d8fe47823e7bc2c71d4d3633f42"],["/一分钟没了 1.5W 。。。/index.html","f06e913dfb33d4325149b68521232150"],["/一条高产爆款内容生产线/index.html","00748979ad150f0023be11b6f6c6b01a"],["/为高考学子推荐的六个就业前景广阔的专业/index.html","5d68951d367ba91577ea3696a62fe448"],["/互联网赚钱机器---社群/index.html","3b446c6afdcfc020e03035e4e8dbfeb0"],["/你们常用的工作方法和思考方式是什么？/index.html","505132d626f2ef42d272597cc1d76f53"],["/关于环境配置的一些事/index.html","b1cbff390c81a02f7ea73f23f25844e4"],["/准备了19w！搞事/index.html","241465773bf0c3794a0531ccb8567b71"],["/几个很重要的感悟/index.html","e4d5eb6ab55da12d6b619be84c5ba200"],["/分割ROI篇/index.html","3c59a340f4b3e544661e6ce845ea45b4"],["/分割精度说明/index.html","b894abb84c5988d3606ed6c5e2363e7b"],["/分块程序执行/index.html","fddb36e10ea971cebfba0d1176027ab9"],["/加班公司黑名单！！！/index.html","a05a8a83a29353f182fb09d68c35cf36"],["/卧槽，上知乎热搜了！/index.html","1e4dfd131f51415445629746999bac56"],["/卧槽，我的小破站爆了！/index.html","e4f1b8193a6568ff02e714f60bd10a35"],["/卧槽，我被盗版了/index.html","3ebfa67d4700a158f4cc6a6dacf60208"],["/卧槽，还有985大学在大一上C语言课？？/index.html","9ceb23955a3456b62e43546ce8bede47"],["/历年微软面试中出现的leetcode算法题/index.html","4be889644fe3143d8690ea674ba6cb98"],["/去特斯拉试车了/index.html","91304077d0be65d85fd1179f7cae2093"],["/吃苦的三种境界/index.html","a29271400a8ebb20c41d1847e9abb924"],["/哪本书适合推荐给 Java 初学者？/index.html","c238d8c55c434592065816d962142f54"],["/哪本入门级的学习数据库的书最值得推荐？/index.html","a6656dba7df02bb83e8aaa231e6b67de"],["/国内外常用的AIGC模型/index.html","14723b215a01eea20b573f957385e9fc"],["/国庆假期/index.html","916177f8e272ac0e9216100432e17993"],["/图谱程序字典/index.html","62c2ae51509a55c45e613faa923ab132"],["/图谱训练与分割/index.html","963ede92b9262c4c42a5beba414253c7"],["/宣布一件大事/index.html","0a3a362c83ce1ef589338a5c26dd7152"],["/小鹏P7i试驾体验/index.html","39ac825fc10732d23cd4b36c938c4a6a"],["/微信PC版3.3.0内测更新，电脑可以刷朋友圈了/index.html","0b081cf80c2605f3f1d6eb4082442bc1"],["/怎么更快的赚钱？/index.html","c4a9fd505ae4f28ae34389f02a8aa486"],["/我毕业了/index.html","93f48448b8fb609c3d45db45054a00eb"],["/我！真！的！找到了！爱上学习！的方法！/index.html","eee053025870d5f57d349c9fb737e7ff"],["/户口的意义/index.html","e053d18571e46019be914c04a8e24ec6"],["/推荐两本经典算法书/index.html","e57c0698216306dfa868e0f982390415"],["/推荐几个在线学习SQL的网站！/index.html","854add66154dfcad568f4a25b7d7a30e"],["/搞了一个程序员成长晋级社群！/index.html","1a3e52e9363b7db0536aeac912e8bc0f"],["/摘抄/index.html","fe86f265cca2904b75abf327026255b6"],["/暴跌30心态崩了/index.html","64c660163224539b4e44d218db179cfb"],["/最近很火的ChatGPT到底该怎么玩？/index.html","410a9165114705dc514f099c97fd056f"],["/有哪些好看的日历可以买？/index.html","b95236a8a174d8f3ecc16db17f60f5c7"],["/服务器有啥用/index.html","ffdea6ada3b37e26ab008e1d7ebc0ca9"],["/来长沙了！/index.html","7295a0cb685b65278792633ba1d5a47d"],["/校招污点公司名单/index.html","9099097fa47dce7508294d044171a8ae"],["/梭哈200多万/index.html","1df893b91b5d7d5ccab70f87a7fea9b2"],["/梯形图入门/index.html","c9441efc1a59011436beb038cef2138d"],["/橙心优选，凉凉了！/index.html","e0392ea069e7bd78493a9b88b24cc3eb"],["/比亚迪汉试驾体验/index.html","310a678ce220a671eadbf89cb479a7aa"],["/清华转学成电，真的牛逼！/index.html","9beda7d94d2c0b6fd8b69079fc7dab6f"],["/滴滴程序员被亲戚鄙视：年薪八十万还不如二本教书的/index.html","df6327cbbb5568c2131338b88202bf51"],["/社群！/index.html","e663af04079748b61e8570de3173b994"],["/科学上网之VPN篇/index.html","39d11a2b025792938526a7ab9b2c5fbf"],["/程序员必备的几个技能！看完你也是大神/index.html","0b39e003897fd690146b509505ad313e"],["/程序员绕不去的槛，Linux！！！/index.html","813a6fa3bba368c7b436fee4bb9533d5"],["/蔚来ET5试驾体验/index.html","d517f6df56aa38dff7f8b30abf780844"],["/蔚来，牛逼！/index.html","0abdbca1d443568457ba885d8bb279da"],["/被录取了/index.html","bc05f507d49ac52f187ee918d817db00"],["/被找事了！/index.html","b9a284f2a64d08c2480972d284ee11d8"],["/被拉黑了。。。/index.html","ffafb9153cd3e89367ea177bc7ef36df"],["/被车撞了！/index.html","e0cae33cc11330220e5166ccedb085c4"],["/该如何选购固态硬盘？/index.html","86e98b22b98e8f50b43663cb5ef0cc42"],["/这本书一定要看！/index.html","5a85542871161b9cad39b945ea1ffc5e"],["/选Java还是C++？/index.html","8f838be88d9836a1b3e4d74e33353d87"],["/那些让你起飞的计算机基础知识/index.html","8bae2370791fa85698c884ae1aefa7d4"],["/靠这几本算法书，成功拿下大厂offer！/index.html","5b83343a49b71393f3df18cd54d06ec0"]];
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
