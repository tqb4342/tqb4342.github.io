/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/0010-city/index.html","9c6d767fa0d654b1e5050890932ef35f"],["/10-algorithm-book/index.html","8aee9bdbf2ad41a897757db7fc2e97d6"],["/10-website/index.html","59ab73bc12c77639cc1df64db05ab463"],["/100万的小目标/index.html","1770de5e22b577517796088227070f63"],["/10w+YYDS！/index.html","5f076e9d362b17999c999e98663d2fde"],["/10website/index.html","e5caeec7b0766f2e8450da6e4581d7cb"],["/12-technical-tutorial-sites/index.html","ef5781524dbb873bdd137046ff5f3710"],["/2 6 岁 了/index.html","8fd32f2f92e38d5532309bf3644f68b9"],["/200万，啪，没了。。。。/index.html","53fb8c4de45bd9b0a2f14c43b5e90d2c"],["/2018ECCV-Paper-DL/index.html","78d38540dbd33a6faef7728e831c9928"],["/2021年固态硬盘选购最新攻略（小白避坑指南）/index.html","a3a558b6f506c902b608b074c36348e3"],["/2021机械键盘推荐/index.html","e9281a720c39d8e2ed4b85d9fe57f415"],["/2025-07-15/index.html","fbeed785932045f5acf12cba9932324f"],["/2025年终总结/index.html","253d03fd49e3608259dfb7281919e103"],["/2026-Open-Internet/index.html","6eaacaed2b8fa4362fddcd7ae201180f"],["/2026-best-vpn/index.html","4a43208753d6aab23441dc2ec0a2e40f"],["/2026-clash-vpn/index.html","63824f08c39da50b02996255d633cde8"],["/27岁了/index.html","0766f33fc07f8028902ff9c90c716f87"],["/3D-Convolutional-Neural-Networks-for-Human-Action-Recognition/index.html","36c2ef4b5c00c22dd3554a5f9fc10880"],["/3D-Deeply-Supervised-Network-for-Automatic-Liver-Segmentation-from-CT-Volumes/index.html","1af7f7ac082881e98dcda10a305f1559"],["/3D-Unet-Experiment-notes/index.html","aefb10b4407ebbf0ebc7bacb06969712"],["/4-Software/index.html","79511ccfab9ed77ef16d5a69f37785c8"],["/6-website/index.html","da61c8975077e664585c0ded12caa003"],["/7-terminal-tools/index.html","eaa7b753415b33f6523da3efec7c3c5f"],["/AI-PPT/index.html","0b719f1ad807166549e72ad5e88d350b"],["/AIGC中典型的深度学习网络/index.html","4a8fef7ef30cc459771be495f76e2f50"],["/Accessing-the-Open-Internet/index.html","6fa9fbab230115ef617591fa626f95cc"],["/Agency-model/index.html","9c39c791fba9d61f6e821ec8191bce98"],["/Algorithm-brush-notes/index.html","0cd638f5992ead1e1b8249a7fe52c654"],["/Ali-recruits/index.html","c092fc0058254a8b006a7bb74074fbf6"],["/Android-VPN/index.html","2721e366c250279c2b5e57b108a2fffa"],["/Android-open-internet/index.html","bd84adacb599df56d51421d178719c2c"],["/Appearance-mode/index.html","cb09592fed10441f08400ee8c1e35774"],["/Backtracking/index.html","c6d19b66fc002288bf9548ad12bd9389"],["/Baidu-Sao-operation/index.html","889c97243ec01007443493ce85d5c662"],["/Batch-Normalization/index.html","5549710e1d96bd22ebb37321497642c6"],["/Best-AI-tools/index.html","ae0119832aa46166fd825148a99a8ddb"],["/Bias-and-Variance/index.html","4662cc1792f97f07d6088b4ddbf21c3b"],["/Binary-tree-traversal/index.html","5499eaa6a609c223bea4bdfb2051da07"],["/Branch-and-bound/index.html","d373420f62907819bbe94c556638640d"],["/Buying-computer-for-the-first-time/index.html","1b553a93057903d4f51f9943fd38ca4f"],["/B站向北邮道歉！/index.html","13b79c1329821d3eadffda110a9618a4"],["/C++-string-function/index.html","6a937891438ba458a10a9eba2a8491f6"],["/C-Java-DevelopTools/index.html","5cba4e8d8d1fc7a3bb0ebdfea6ee1aa5"],["/CS-Classic-Books/index.html","07b993a685b6764dfb2a33be76ad33ea"],["/CS-network/index.html","539ac3b8d10519b60aec3ff9be848e9d"],["/CSBook001/index.html","4191dfdc826b298a9587b679a38294b6"],["/CSBook002/index.html","2a2351eaca62fc606cc7f5fe82c51f7a"],["/CSBook003/index.html","d2028f315b0b721e3ba3c8eeeca78cfc"],["/CSBook004/index.html","5c45bc6626a18712db67babdc7bad3cf"],["/CSBook005/index.html","fe8ec3e482f1bf7ccf51a11b0ef8e7d4"],["/CSBook006/index.html","33d430ea115c626d9fdaa0b34eda763e"],["/CSBook007/index.html","5925821e3253ce3fc3e2dc779cc76bfd"],["/CSBook008/index.html","ae22b652d0e6c4864e28107efa36d6fc"],["/CSBook009/index.html","891005b044c3d8e88ce5626e860fb9ea"],["/CSBook010/index.html","5681321d4a8b608863ccad0e10d8976f"],["/CSBook011/index.html","0a3c4a9bd6f7648a62f8b7a026998bb2"],["/CSBook012/index.html","a9f496269e9fc9df6afb7aeeb354da21"],["/Changsha-really-fragrant/index.html","4109075705bac0808c787b216371ebc6"],["/ChatGPT-VPN/index.html","d63e844eeb94225a320cc83431f85143"],["/ChatGPT/index.html","7fb4827bf047f7239c676d6a8b203732"],["/ChatGPT！王炸级更新！！！/index.html","ea2c0b492e560b79303c21dfa486d78c"],["/Chrome-crx/index.html","bfd759377eac5dfb0e7f0ca3d4d7070c"],["/Clash-Party/index.html","aecaa0d62cd2d3e0bb3062e6cf36014c"],["/Clash-VPS/index.html","d5eacfdbf80362ff265d296429d1ca9d"],["/ClashForWindows/index.html","286be8a9594cc9351d32353e7f0469eb"],["/Computer-Classic-Books/index.html","a339ce198a56ab2cb3fe812cfc952c32"],["/Computer-for-another-major/index.html","726ee586996af2a45a53ed47180ef8e3"],["/Conditional-confrontation-network/index.html","9bbd4fc9102db28e684bbe910197fcd5"],["/DNN/index.html","871dd7014a3ea14e8e4022611561459f"],["/DSN-segmentation-liver-experiment-summary/index.html","e753052e40fca26d49e621fc3caf9e0c"],["/Data-enhancement-elastic-deformation/index.html","8673dcf95b68945af200b1b9102cf811"],["/Decorative-pattern/index.html","e7b40be8c04f88e7408d97f1f65d8b51"],["/Deep-Learning/index.html","fc495a8c913d96c534080308c2759e6f"],["/Deep-learning-and-medical-image-analysis/index.html","10fed0b424fbefcda4ac07d5d75c1528"],["/Deeply-Supervised-Nets/index.html","5e38641c1226ec035bfba9049309d35f"],["/Deformation-model-based-sparse-representation/index.html","d25006ff5c1cdaf7a69ad488e51d266a"],["/Discriminative-and-Generative-model/index.html","0bc4c422415d8adaca527b5122b157a7"],["/Distributed-transaction/index.html","6feb45127110b94435ba4dec126dd2ee"],["/Divide-and-conquer-algorithm/index.html","2223858e56706b5035751c4b055b481f"],["/Dll/index.html","f5f3a81394cdcfc7423797433734e7ba"],["/Dynamic-programming-algorithm/index.html","50a2573aec23e67596af8aabafcee52c"],["/E-book-download-commonly-used-by-programmers/index.html","099963882a42445fd87f21aeee42cfba"],["/EditPlus软件的安装、激活和配置过程分享/index.html","9d8e13d2d9b3582ea4a3754bccaa727f"],["/Eight-sorting-algorithms/index.html","c5e528a6cc7b6716f1504b5f4d593fe8"],["/Encryption-Algorithm/index.html","035ba2af2cfcba9f7fb78927d5518345"],["/Eolink/index.html","90770568dcd9bc2848ceeccaf158edc8"],["/Factory-and-strategy-mode/index.html","1759b9c8989d49f743a9d8879a4dade8"],["/Foreign-technology-blog-community/index.html","01f95973cf07a636a010e77832595edc"],["/Functional-model/index.html","cfbb4f62d0dc6d2ecdbdb5d5a4c9c52d"],["/Fund-type/index.html","d5d64ac7499eb1ca218a5f7f94ef4452"],["/GPT-4o/index.html","e9e6eb0b14336844f665cfe667d11fa7"],["/GPU-medical-image-processing/index.html","34e8cdd873f5b63e6147d40bc3f7abbf"],["/Gemini-pro/index.html","d1c1b578509b421c2f4d662336733964"],["/Gemini-vpn/index.html","93183da162bdc6b02db61d70b769a445"],["/Gemini/index.html","12c717877a0d129a49d7d9d81f72b977"],["/Generative-Model-of-Unsupervised-Learning/index.html","be411ee5c87f8b1c4f6d09e39bec4858"],["/Git-Learning/index.html","7a4d058dcdc5baff6c701b628dcb62b3"],["/GitHub-2FA/index.html","a8d296de1d24b2d3307ff0d902ef663e"],["/GitHub万赞，程序员必看操作系统总结！/index.html","8249458e48bfbfe3e069590fe962db4a"],["/Golang-book-recommend/index.html","36a11b88355aab3e2c7aa20a9a3523b3"],["/Golang-learning/index.html","241cdd3d5bcd2d97bd7d0981064a3ffe"],["/Google-Gemini/index.html","8ef1ebd8f0a2839f9f7ac4285f8453c9"],["/Gradient-descent-optimization/index.html","461083458804398b13744afb1e18a4fd"],["/Greedy-Algorithm/index.html","45712129df709d6874e555d12a57b9ba"],["/HAND-User-Forum/index.html","2888b5ee7e24b11d0d0655cebd2c1970"],["/HK-bank/index.html","890636ba0fb668649d0b056e289031f7"],["/Head-to-head/index.html","a0283ac4c5ac7625bed64f29415ffb07"],["/HexoPage/index.html","4b1bf1d47debb1f241c113d4578d9740"],["/HistCite-Pro/index.html","d9e04eb488fe1f62c759c5d4458f641f"],["/How-does-the-program-run/index.html","552904edff0677cd245c6dcbeb53b8ce"],["/How-to-judge-whether-technologyisreliable/index.html","8f5244cc2d216bed9e9c5761480c9c9f"],["/How-to-learn-design-patterns/index.html","fd0a0b7bdb9d1a4cbe809558d519c256"],["/How-to-learn-design-patterns？/index.html","39e362d9288c204251f5c4d84a31b1b3"],["/How-to-teach-yourself-programming/index.html","d0cc09a42e6831002b87c7de8e49814d"],["/How2learn-Python？/index.html","468721713cf7c581b2d8b1feac45e349"],["/IDEA-shortcut-key/index.html","4e6ca59c2879e44bb45288e81b689d1f"],["/IT-interview-basic/index.html","276c22961960b1d4e57c3c677fd3ad47"],["/ITK-VS-install/index.html","a32e300d2eafff0869c1a67ec7d34449"],["/ITK-VTK-ItkVtkGlue/index.html","5d9f1bd50725c1442c26141aabd0c6af"],["/Image-processing-plus-noise/index.html","520520b35573e52b2b45ede7cc958115"],["/Inception-Going-Deeper-with-Convolution/index.html","588f99be909b881e133d66df8b5b4cac"],["/Information-Cocoon/index.html","368ab45126f14afbe361902049f16bdd"],["/Java-GC/index.html","84b52a537a19273de3f04ca039583619"],["/Java-Servlet/index.html","b0a46011a7f2668d1eaeb251465ca447"],["/Java-array-and-collection-sorting/index.html","7ee8d38bee6239b71f6b2b91e1bcfb0a"],["/Java-development-tools/index.html","4d13aa74a9ac5533b6f4a264c9b9ec1b"],["/Java-eight-data-types/index.html","8b1731ef6a5dd85d04dfd5e9ede7d1f6"],["/Java-interview01/index.html","1bec710a396ef64400a586872f76c8cb"],["/Java-interview02/index.html","e7240574cd7cd8f67b83e7ea9d544740"],["/Java-interview03/index.html","2c7a060ea9c1717efcdcf568876b92e2"],["/Java-learing-map/index.html","6f89b05fbc3cf28a5f92b88079b1f60c"],["/Java-learning-route-map/index.html","30f4618084c95433fd2ed223de398402"],["/Java-memory-area/index.html","946b1a3ed9d0b84c99bd839188d3fd0a"],["/Java-memory-model/index.html","0bf02ff6b5f671d631940d17e488d459"],["/Java-multithreaded-learning/index.html","5407c212d4c807a5f3fa09d51f531116"],["/Java-project/index.html","206d77cf8e0bfbb8c0317c9effed78c4"],["/JavaWeb-Chinese-Garbled/index.html","74b0f8032ec7b1dd4eeda97906e17c5b"],["/Java还是C++？/index.html","f2d36cf26e9e8c8764eb07406e98d933"],["/Kaggle5-step-guide/index.html","bf2b9c79084145efb89faca74f9be194"],["/Knowledge-points-of-Java-garbage-collection/index.html","1972a8357c33b99e09765cd1ccace818"],["/LLM-DP-TP-EP/index.html","2bd70889ee72ba01bd11037fdb542025"],["/Layoffs-Hiring/index.html","39d355a449619aef25b9b9e10403460e"],["/Layoffs-and-Hiring/index.html","70bb9ba645a6840683715ea0d48b17b3"],["/Linear-regression-of-machine-learning/index.html","95a5aea362206a347c26dd94a3d21105"],["/Linux-Compile-C/index.html","123190b4e569f370ea3021cf04ca6106"],["/Linux-ITK/index.html","f247acdcd73c0e1d1ec9afd3343559c1"],["/Liver-segmentation-of-sparse-components/index.html","50b3e0a82c07df3f0bf8d1b7f69f6fe5"],["/ML-EBook-paper/index.html","abf7fd9d85feb66fdda8ea09eb22a917"],["/Map-uses-multiple-maps/index.html","d6c59c5e992229c551ec3c51b9d16a05"],["/Marching-Cubes/index.html","bca9f28dbd1bac18ff057a7c3ca68cc7"],["/Matlab-Graph-cut/index.html","20af2ab9a2c4c33d93ef547f06d9a402"],["/Maximum-Likelihood-to-EM-algorithm/index.html","29f535d7e8232e089f7e9c30f0ae33db"],["/Mean filter and median filter denoising/index.html","893b5d3c999635f2011d39f4f7619bda"],["/Medical-Data-for-Machine-Learning/index.html","dec4138278bb5b13d7d1a307a4d3b211"],["/Medical-image-analysis-deep-learning/index.html","cea9baf03fe45ccafc6145a07475c360"],["/Medical-scan-image-processing/index.html","6ec89b262186c2a09b16dae9cd4f02f5"],["/Merge-sort-algorithm/index.html","4532cf08ccafeea0dd8af42a1a6910b9"],["/Monthly-income-2W/index.html","91ae29c855257095d0caefa8a0bd2b5e"],["/Mysql-database/index.html","a76b6572647d552c7224b6a6228acff2"],["/Neighbor-Embedding/index.html","892a85c9488d623fd9d0f967adbef51f"],["/Neighborhood-approximate-random-forest/index.html","86a65ed786202e1473d864cf972d0a10"],["/Net-and-official-documents/index.html","b870ac29f1cb24e135da839f9df03703"],["/Netflix-VPN/index.html","90994bee50edf85799718555309d9edc"],["/Network-principle/index.html","f7c0da2246b7f80df45ef57504c61c97"],["/New-Hong-Kong-stocks/index.html","dff5ac505d8df7726d098ad12b366113"],["/Nice-to-meet-you/index.html","47aba0d74539a38433596d68ea68a82b"],["/OS-processes-threads/index.html","2b81843f74f3b6a57500422da5f80393"],["/OS-run-environment/index.html","e565bdcbc33737efd9db85bb1eee6bd1"],["/Open-Internet/index.html","979cca87d5e5417d063587d1a66edefb"],["/Open-Internet2/index.html","5c7de5b6b8538ea4b8cd1aca6f426a6c"],["/Open-source-community-and-rewriting-website/index.html","49e1e0897465bb60f2ad9c3638894623"],["/Panoramic-image-stitching-based-on-SIFT-features/index.html","f1edfb925fad8e3af1a1fc186a92d75f"],["/Parzen-and-KNE/index.html","8163c69fa65174f760f8411d6e5b76fe"],["/Personal-technology-blog-site/index.html","6eae91140d68161356b875c9b1f24ef4"],["/PicGo-Gitee/index.html","66a435fc1146351ff19c4e17b9eb9127"],["/Programmer-treasure-chest/index.html","7b718af48b8c130767cff37c998348bb"],["/Prototype-mode/index.html","e0e6848145b7b3eec62f5aa51eb7b01c"],["/Python-base/index.html","053c0357273a1ac027264ad8224232cc"],["/Python-crawler/index.html","0eb1e1c39f277ffd5522925364ca2265"],["/Resume-revision-suggestions/index.html","57072a425cc644f14b2da3202740a198"],["/SEO01/index.html","318396dd83ae77a09c97abc7d9fde617"],["/SEO02/index.html","bfd6d6307b6fe9134fa006a6f29c3c2f"],["/SPHARMPDM-MEPP/index.html","671f01d9ca5dd9daf78d00cb92971b08"],["/SVM/index.html","862cb8875538b543f321931f0b29ee9a"],["/Seata/index.html","c767ae4d9bab5d6265a65948923c7bed"],["/Semi-supervised-learning/index.html","7c85d5407624056119bf8a732126dd95"],["/Sequential-model/index.html","44eea0c7dfd550cdb0228e4e7d666f5a"],["/Shape-Based-Human-Detection-and-Segmentation-via-Hierarchical-Part-TemplateMatching/index.html","27114b6f2394755ae36276a7cee16b61"],["/Spring-basics/index.html","de1b4d300d4ad70313af7727ebcf3b51"],["/Spring-integrates-hibernate-Struts/index.html","0ca44cc85b633969b33247381b66836f"],["/Structure-learning/index.html","fa1d8be4ee2f17f81933f17dbeb19976"],["/Suggestions-for-self-study-of-computers/index.html","4ee21fb0b6e29e7672211f9e010659d2"],["/Summaryof-HongKongStock-Account-Opening-Links/index.html","93119bf075d047e12b434449014a0cbd"],["/TCPIP-detailed/index.html","d4cc880c1bf93e6f21f23914a24f9527"],["/Telegram-VPN/index.html","addefd94f3cf404ad0e2844ba38dd9fc"],["/Telegram/index.html","d7be692e781fcf8734badd2ea1d2d5d6"],["/The-essence-of-shopping-festival/index.html","bbe6dc1b7fc8c9fea9dec9656b73117a"],["/The-most-important-investment-in-life/index.html","76affcc320e3ce7dbdbd5858df830382"],["/The-most-successful-nvestment/index.html","46a04a1d3452cf4326c2f290841443c6"],["/Transfer-Learning/index.html","125dfbd69d98b13e83eca6432755c491"],["/Transfer-to-computer-major/index.html","ec908c6ce5f48e37c16f45fb3bc74747"],["/UNet-Convolutional-Networks-for-Biomedical-Image-Segmentation/index.html","d6a031db492c4e1cb5897d5c073c955c"],["/Ubuntu-install-sougou/index.html","ebdc9bf8d626d68e987859e41af057ea"],["/Understanding-of-paying-for-knowledge/index.html","8b6e678ad012295dce9db618060bf734"],["/Unsupervised-Learning-Linear-Dimension-Reduction/index.html","e71bf694d3ffc1a3f1f3ca851a95a193"],["/VPN-HELP/index.html","6d4ab11f5bd2b92b567b557c97813f61"],["/VPN2025/index.html","4568af858ba0d458bd78ec54fb7daaff"],["/VPN2026/index.html","1ee4383e9593f4b8905da43aac738aea"],["/VPN202607/index.html","9e930bd3ed3e396895d139dd5b8a6dee"],["/VTK01/index.html","ab508d8fc529f140ef6b7f33d1ba98a2"],["/VTK02/index.html","3264cafcccc5a737934f71c4863cf255"],["/VTK03/index.html","4fdf647ecf09c32460ce7ce2ab3d18da"],["/VTKRead-write/index.html","aa4ae78cb12a7b13570004c45c1740db"],["/Vertx-Java/index.html","05971e6bde7dfe0a4be08ed914481b84"],["/Vpn-OpenInternet/index.html","c236fdc58daa657bc1bd64042f481fea"],["/We-are-all-good-kids/index.html","cb35430471a906183c29228626c3b29b"],["/WeChat-80/index.html","0a6c826f3d60c379344d33f695d41dc3"],["/WeChat-red-envelope-cover/index.html","d4a0761ac4d5c6953fd18597417d4a52"],["/What-is-crawler/index.html","22abf0bede8c6804b2e540e24bd31a0e"],["/Win-Internet/index.html","1ed75a4ea7bf270b3b162039693633a2"],["/Win-Open-Internet/index.html","aa3efc151d1c4a495b9086069ec2a488"],["/Win-OpenInternet/index.html","304be8d0e680f0f466b3fb39e34e6632"],["/Windows-Android-Apple/index.html","7752730f4bb4766a6597dcbbe4eb1645"],["/Windows11-2kfans/index.html","7f099a326e3a15ba2ee37ba10bf00a10"],["/Word-Embedding/index.html","7e3f320922a6808c7f302479c428dfb6"],["/YuanShikai-and-his-Beiyang/index.html","c6fc942dc5890a159a9adbcd1eedf128"],["/Zero-copy/index.html","92f1e6631d60ad8e557ea50c51fc4c50"],["/about-keras-model/index.html","5960a6e308892b4d18ef59e4758896fe"],["/about/index.html","f2c521804dfb24a99eca75a5fb9f1b87"],["/accounts-google/index.html","525e377750c42e5370eda57ca2a5e393"],["/ai-tools-guide/index.html","cfa065ee7a207f3e0fdcfe0bf8fba852"],["/algorithm/index.html","247ddc01c15a96ad628bf468db104333"],["/alibaba-Java/index.html","ba40b9115b04d17aad23c1b23be89476"],["/archived/index.html","a5f9dc31e6028bd9aaa82bb77d09521a"],["/archives/2020/01/index.html","4a59af8ca8c042e25a073d29e79fae8a"],["/archives/2020/09/index.html","57c076ea02c22f671cbc9d22a4195405"],["/archives/2020/10/index.html","b1c6e0abaa042035ea787f0951f92aea"],["/archives/2020/11/index.html","a9bfd2efbb4b06ed26291a37988eb0d6"],["/archives/2020/12/index.html","b0ad180d80d657aff8c1e53d68659f1a"],["/archives/2020/12/page/2/index.html","689706a4bec5ec927337152e65189850"],["/archives/2020/index.html","b88816229bc508f09512239ff8c05c03"],["/archives/2020/page/2/index.html","e17b71178c0de3e95fe126f560900900"],["/archives/2020/page/3/index.html","6a36df8478c1869d0e646ed6224bbe43"],["/archives/2021/01/index.html","266e6422419d4a01ded0db64c7d7e56a"],["/archives/2021/02/index.html","3ffa6505c11e6d7ad220a8e59e13aabb"],["/archives/2021/03/index.html","a44460ed5258e502611b6c77a28dfd0e"],["/archives/2021/04/index.html","b0e8617c76e14b252d0c7673b769745a"],["/archives/2021/05/index.html","abcde2d185fe9d1fe58126685da3eb30"],["/archives/2021/06/index.html","0d70fe85106008b7768290e094d5a1db"],["/archives/2021/07/index.html","9cf40fabdbbc0d4b0af30912beec1348"],["/archives/2021/08/index.html","99cd34c7e976db5232defbdd02cb4fdd"],["/archives/2021/09/index.html","19436ef61ed9ad9789919cb7651ab4c8"],["/archives/2021/10/index.html","9aa9603058466b02bd5c083c9a146059"],["/archives/2021/11/index.html","ba87ce07e20759b98ff3ef39bc93752e"],["/archives/2021/12/index.html","047b8285af99748180215825a02a725a"],["/archives/2021/index.html","060c59e1518cb7454d759b5a868c8bb6"],["/archives/2021/page/2/index.html","21f3b039b28992d1f2b004151d666bc5"],["/archives/2022/01/index.html","e05713610d5c061ca1ff2c1e8837e6d5"],["/archives/2022/02/index.html","9316df29cd08b1ada3baa3187329a469"],["/archives/2022/04/index.html","e0725278904a3171cdbef56c5a582402"],["/archives/2022/05/index.html","963b654352bf69aae1a172f301e40752"],["/archives/2022/12/index.html","7e71d02742ca50f13907b1517e0cc0da"],["/archives/2022/index.html","ae751f24f4497d00de62c2385305980a"],["/archives/2023/01/index.html","fdca8773e1b9c1823daf45898fc5ada6"],["/archives/2023/02/index.html","885c60d1fdad0e483ae0be8c958288d0"],["/archives/2023/03/index.html","50d31ea49fab35427470a833dbb9c8ac"],["/archives/2023/04/index.html","f8f1a90dc5c99baac1ac1e729c07f1a0"],["/archives/2023/06/index.html","9dc747b1f745f07f13e4855d4483f0f5"],["/archives/2023/08/index.html","f3834e6c7b134cd57e1dd9b0ae9f0ad6"],["/archives/2023/10/index.html","9b157b7352beb08fad21d861eb1a1355"],["/archives/2023/index.html","5a9722274165588dba796da704805ced"],["/archives/2024/01/index.html","79c9750921da9a17693097232d479433"],["/archives/2024/02/index.html","4eab42c6b78e10dccff687b136f69e90"],["/archives/2024/index.html","31d4bfa0230db0e4f7fbd8c30d282e15"],["/archives/2025/06/index.html","c23f80af30ad6effa0baa19c50a9adb3"],["/archives/2025/07/index.html","eb4a11b231d909ce1a56a9ef094d1af6"],["/archives/2025/08/index.html","0db2ac993d1c62bf92fc8cf54a0045f0"],["/archives/2025/09/index.html","a16c1a085150bb6fcca41c426a9fb36e"],["/archives/2025/10/index.html","c7d42623be705adf7bf02662fecb1df5"],["/archives/2025/11/index.html","0ea9b4495e31fd96ee7e1ab2adb3154c"],["/archives/2025/12/index.html","326db9fc9a38648d248572f5d751f989"],["/archives/2025/index.html","a8b5ab45dabb1cef04700cb694c984fa"],["/archives/2026/01/index.html","6514e56c942f7ae740c8d53a27aecc1c"],["/archives/2026/02/index.html","7689a6b755d82f3846291fe44d2db712"],["/archives/2026/03/index.html","1e6daebee29d426f5d5a305a39d5f749"],["/archives/2026/04/index.html","a515293963c52558ad91aaf7ee69cbfe"],["/archives/2026/05/index.html","da949c47d12244057aff0edf9884b69e"],["/archives/2026/06/index.html","8901e684172d2001ca8067eefa31371b"],["/archives/2026/07/index.html","405a353182fb040cea07924cae718667"],["/archives/2026/08/index.html","269be7aa393fc3746ee0454c1c8d661d"],["/archives/2026/index.html","64e8c4ac931d23296cc5dbd8b0dcda27"],["/archives/2028/02/index.html","0a8fbf096620e013ba403d1a36c31b4b"],["/archives/2028/index.html","f42f9d666cb428224f5e70b55adc8556"],["/archives/index.html","db1f5098fffa95bbe3ef9cfd485634ee"],["/archives/page/2/index.html","9fcd0b24edb9861f0f72ea5e87faf5fc"],["/archives/page/3/index.html","b535f78c56b21399d8479ac17790ae53"],["/archives/page/4/index.html","68d8caec844b81def057bcbc058a0fd7"],["/archives/page/5/index.html","bfbf7f017cfbb8e6d5ef95967774299a"],["/archives/page/6/index.html","172a8c8f541193aa14ba3f129c3c616c"],["/archives/page/7/index.html","7bb6993f06dec1cbb9450720e4814fce"],["/baidu-search/index.html","dc5a8c9b123c3b7f8333fb7be3aeabf5"],["/baidu_verify_code-Hh2fKNlEB1.html","625f2dd6cb95dc4de0a363d38a175fac"],["/be-a-programmer-instead-of-a-code-farmer/index.html","4f3bca2162c92967fe349ed730c9a918"],["/best-vpn/index.html","a6f28c10fcb39fcc3df2e5bd063036dd"],["/best-vps/index.html","f442d6ebabdee7c8149e69cbed19ff3a"],["/bought-a-house/index.html","ce54015b505ea0c82d9e4d206e055259"],["/categories/AI大模型/index.html","becd1d8a8356b3a4636c54de11ca4476"],["/categories/C与C✙✙/index.html","22d079e3cae145f9e06f9a60e6f489ed"],["/categories/Go语言/index.html","7c1cb4b611f6778ce8f4f3c103cac0b2"],["/categories/ITK与VTK/index.html","9139fd6463d079ad671dccd7d77d240f"],["/categories/Java/index.html","31215669d7d9303e56f03cee4ad07fe1"],["/categories/Linux/index.html","567b7f172e705b87032ae3c54e9db498"],["/categories/PLC/index.html","1b3fbc18812761538c5713300854d9f3"],["/categories/Python/index.html","0fe3851888aedf5db108b830ddfdd6e5"],["/categories/SEO教程/index.html","825814437b9731bb13b1fad6d3100122"],["/categories/index.html","c132c115a467eb806c01e585bee3c34e"],["/categories/图像处理与机器学习/index.html","13dea57d14fe483ff781043b62766e03"],["/categories/工具/index.html","70b844021dc7b390170df5679487de57"],["/categories/技术以外/index.html","4d7c20d0da6a32ce5641907f935ce038"],["/categories/技术以外/page/2/index.html","9deec9dcf9df393213e3900f36e43f64"],["/categories/数据结构与算法/index.html","79f93d4e41eba958ed34da690462f438"],["/categories/科学上网/index.html","8b4f2add1f9bf0317fd13bd9ef79cc77"],["/categories/编程经验/index.html","602450cb77a1128808267e63637c3b91"],["/categories/编程资料/index.html","9cee7bfa6311a0b5e1f260dd7ece63fd"],["/categories/计算机基础知识/index.html","5814171c1df230e0fdbe85f9aa90bc22"],["/categories/设计模式/index.html","e8fb51f8084f77835ed4016a56546871"],["/choose/index.html","cdda34fedff54faf22898578e3943748"],["/choose2/index.html","27854890b54a2927d0994a40186900c8"],["/chrome-crx-intruduce/index.html","971d319e17a789f9874e91a9de3e30ca"],["/clash-free/index.html","8a66367e38a8f7b495514ba6eace7635"],["/clash-guide/index.html","b4f481064ae7c3ff72350085cb5c496b"],["/clash-pro/index.html","3a69134b2ce0bdc90e036f1c0e228841"],["/clash-tun-mode/index.html","6c996b6cfa521bf06b4062ecf47c4192"],["/clash-verge/index.html","06baebc9c558c4d4823824722075c9c2"],["/clashvpn/index.html","b60a2959b813716c92b04a7a3c89483d"],["/claude-code/index.html","4d3b3d3d8035f31e44909fb4331808b9"],["/coder-blog-website/index.html","c3f14517a0c1f8a1e3884b38e888a3e3"],["/coder-source/index.html","3d526d76e4cd7e0d7667ff0e78dd2dc9"],["/coder-videos-website/index.html","9b9b41d1f17683c9485a146fe8c4d9cc"],["/computer-book/index.html","a6a69b68e3dd88e52e2d13f2e366735d"],["/computer-censorship/index.html","04b2e35a459c96d2ef90dc59cfbec5f1"],["/computer-network01/index.html","c5303ec1ab71ef40e954be1a996c88bb"],["/computer-network02/index.html","81551d82573343ff4f71456bcf3bbecd"],["/css/main.css","bc32ad34ec4990d934c3c647bdb62f79"],["/database-Mysql/index.html","8c2db7d8a0eacf1096560ba2c8458a19"],["/eclipse-lombok/index.html","d54759e372f004cf7197f76e437638a8"],["/freego/index.html","0a35f71162e52501af7bdd76fb091a1e"],["/fully-convolutional-networks-for-semantic-segmentation/index.html","584669d94189c2455ca6be2de7d7b2f8"],["/great-firewall/index.html","d76f0a5c93436f84ceefab803e3e197b"],["/halfrost/index.html","f7bb1133b1d32819aba5e5021e283d7c"],["/hermes-agent-model-config/index.html","e4eddc3ef8e3bfcb87dda05e521ac5d7"],["/how-to-signup-chatgpt/index.html","1b8e59f362f9fde4b12ab56c178e3c67"],["/how-to-use-Gemini/index.html","96187d82e7315fc312c8d085cddb9fdc"],["/idea-continue/index.html","448cd1d7734d8e6cf72beca1c88f5e78"],["/images/banners/A_modern_tech_illustration_for_2026-08-04T13-39-17.png","26724e93cce260b8e7c01db2c09e511e"],["/images/banners/A_modern_tech_illustration_for_2026-08-04T14-22-31.png","273b7bafe8ddcf9f92273a1589d5a574"],["/index.html","18fbf97b80ba957878212273fbd28b82"],["/internet-dir/index.html","2134380323e6941737a4752b0e13169f"],["/ios-open-internet/index.html","5c9668b83d501e3579fe98eaaf59ef60"],["/iphone-open-internet/index.html","5d919864b83f1bb39097e7d6fbf82147"],["/itext-makes-pdf-form/index.html","d60942ebab96c1465a69ffc2e52be3b3"],["/java-Set-Map/index.html","55b678878008edf03a63cc3566732bf2"],["/javaweb-server-error-codes/index.html","8d78d8aaa8b2a1c9782d5bb6d9d83b82"],["/javaweb-source-code/index.html","f0d7e2620d2638db788b77cc565fdd61"],["/js/lib/busuanzi.min.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/js/lib/lozad.min.js","47904d34a224931dd1b615c59a3dbe3b"],["/js/lib/prism/prism-coy.min.css","0ccad54d95845901ead59bfd3ecceb14"],["/js/lib/prism/prism-dark.min.css","a4711d2957d6605eb5682bdd228cf123"],["/js/lib/prism/prism-funky.min.css","efedcdccd7a9ab342d2d9cacd24920af"],["/js/lib/prism/prism-line-numbers.min.css","38e22e790c279bb56f9ec4b90a2a2d58"],["/js/lib/prism/prism-okaidia.min.css","5ac6f9de996fbec68aaa106dfb16e061"],["/js/lib/prism/prism-solarizedlight.min.css","ecc7e64d039873ffcf7fb27babdaeb5a"],["/js/lib/prism/prism-tomorrow.min.css","456af2a14ae4f5089939d5904ac40fe8"],["/js/lib/prism/prism-twilight.min.css","ebb5c355332a8cf9a1ce37a2a69d678f"],["/js/lib/prism/prism.min.css","a5234d614834658887cec6a9515890f8"],["/js/main.js","052d2b299d9c750afea8df0b802ab7c1"],["/keras+TensorBoard/index.html","6d811279c0f5afe4beea1f0a21bfd247"],["/keras-beginner-guide/index.html","667c2ded366e6d7c59d4bbb50fb2a818"],["/kimiclaw/index.html","2d520d7a5c016e85d5b647d794d8fdb8"],["/kmp-algorithms/index.html","5324fb6841c3ae43c4b252752b6de29a"],["/leetcode-Java/index.html","544810915185bf02f3aad1c3a4e6f959"],["/links/index.html","52f6b0ad3aa8fdb7673a522b322bad88"],["/linux-java-opencv/index.html","404b2afa3a3f5274f918812be4c45c11"],["/magic-internet/index.html","38545bc4a3f486316118f3b3d2bc4f0f"],["/magic-vpn/index.html","57d0a3075d2dedfe9fface719164280b"],["/mingci/index.html","16b1b4ed89f8e75abbca3d836843a184"],["/mobile-vpn/index.html","aab157bce7ad90c39c75d138b748b223"],["/msb-source/index.html","40d3deaf74fea3727fbaf0ea03e2cce9"],["/online-BUG！/index.html","79fb9652c87a6eb8d08242db89f2ead4"],["/open-app/index.html","e0ddb29051706a02826b84a971d9345b"],["/openclaw/index.html","1f7da896c07b37c6ced3620de6189e17"],["/openinternet/index.html","80bcba8eaf225e4058d0e28f341a3d01"],["/page/2/index.html","25fa4ae21d11f6291ca5f8d004efff4d"],["/page/3/index.html","09de8eef01477aef51a568712ba678f0"],["/page/4/index.html","33a25b931389521a9c491cb70b64b4a7"],["/page/5/index.html","2a47437e2e185c5858112f80b1cd23fc"],["/page/6/index.html","c49986c639fc6e56d6f40307af827b0e"],["/page/7/index.html","d2414b2fcc95d99a51e12e8c3e4b303e"],["/pandas-data-preprocessing/index.html","83f94cfb541db6f0e56d2daddffb2303"],["/phone-win-open-Internet/index.html","1cb9b52344aa5b7d4a6071a28a8514b6"],["/popcorn/index.html","597b6a1d962c40b4287e0e09ef16c863"],["/protocol-cheatsheet/index.html","2013c97a44e014e1bc1b4861a5edf0e9"],["/protocols/index.html","489b76f9a6624e2e64c61da6c21ef480"],["/python-Blog/index.html","92a83d24512be790156eb379515fc4d8"],["/python-yeild/index.html","331973feb75cc9b900ee16d004f4cbc7"],["/python爬虫教程/index.html","a6a00e2329a11c8c6db474a68851e820"],["/rmux-agent/index.html","175c62dd71a7de730cbede64d86393b1"],["/route/index.html","a6aa983d05deaf52efa336396f69c8a7"],["/science-internet-guide/index.html","f2667eea63a1661b16218c4d816bc94f"],["/search-help/index.html","e608751e0fb2a69fd16ec4eae2b5d28e"],["/software-copyright/index.html","15ddd03b5129d26144504b6ef90b02fc"],["/sw-register.js","9c5305894f22918518c050061b91d2f6"],["/tags/AI-Agent/index.html","dc6beffb47ae3603f3efac5385975f45"],["/tags/AI-PPT/index.html","049c8f6298598e86503384f0e019cd34"],["/tags/AI/index.html","1725cb6ded3cf8cc644a0977960b4d1c"],["/tags/AI写作/index.html","a414848a9825be3648c4ff60a347ec06"],["/tags/AI工具/index.html","c59701defbcdf74fff45c98227f7e8ef"],["/tags/API/index.html","fbf9a5d0ce3b034390cdf3f5d9edb815"],["/tags/C-图书/index.html","0b22cf235eda680a966d23c00b967103"],["/tags/C/index.html","77b955dd13d7f4656d0f2bb6c28e8305"],["/tags/CNN/index.html","c4e085846de698a32c6fa3f72ea17b99"],["/tags/ChatGPT/index.html","b22adce16fc73ace982670450342e23a"],["/tags/Chrome/index.html","64482dd67c3ca821de73e6e0788769d5"],["/tags/Clash-Verge/index.html","34c5e2de28002988f54f9b1db45ead4d"],["/tags/Clash/index.html","839091373917e28e90d255a4c7d4eb3c"],["/tags/Clash教程/index.html","b4f216565cdd2ac44c89e51fed84a512"],["/tags/Clash机场/index.html","6fc982483288fcb211fde95e55068691"],["/tags/Clash订阅/index.html","8d3af38d9916ddd49bbac84790b2129c"],["/tags/Clash配置/index.html","0f581036e193d21d372abe0578ce2b6b"],["/tags/C✙✙/index.html","1c176a6bdd7162abe2c97f01da69fe9c"],["/tags/C语言/index.html","fe09b778428bea4a081cf53d91d4b860"],["/tags/C语言图书/index.html","2fd2ee6d9fb078aba34af40cfd36ffa9"],["/tags/DSN/index.html","90a6c1c4ce9e9a87477448ea87e735fe"],["/tags/DeepSeek/index.html","4eeb76e1aef53f92e1af3388ac9d0c31"],["/tags/Dll/index.html","b29d712db94601fba83d80ef966ba6cb"],["/tags/ECCV/index.html","6f670d59d66a992ceeb0927872cf1316"],["/tags/EM算法/index.html","d0c5e4bb5568ebfd38841e18c2a94562"],["/tags/Eolink/index.html","a2e74e219e4253846fc72b43fdb06444"],["/tags/Gemini/index.html","7ea0675a3114485feb6860475f27c0ed"],["/tags/Gitee/index.html","8d7e211503193ecdd045ddbc487f2d83"],["/tags/Google/index.html","023638fe6d5f2002fe480e242badd4eb"],["/tags/Go语言/index.html","7429c0c8aff824aef2971e0b56578312"],["/tags/Graph/index.html","211b7ef4c1d89b237dcd69521b03c411"],["/tags/HTTPS/index.html","45a4f435428165f7fc8bb36a9da1efd1"],["/tags/Hermes-Agent/index.html","765e7c6bff4223fb4ab0922fa34fca19"],["/tags/ITK/index.html","a4636664ff69fd0c7d9c3a4edbfd6475"],["/tags/ItkVtkGlue/index.html","9e0c6d654770821cd32972499d3decce"],["/tags/JMM/index.html","924ca43772ed7fe0c3c618c44b7e6d49"],["/tags/JVM/index.html","561f2444763086ba2532610f67583a14"],["/tags/Java/index.html","fb45e931874ad37933582143ba27869f"],["/tags/Java图书/index.html","b834d0f9bd12cec756f7e6b4f78fbe3b"],["/tags/Kaggle/index.html","0d514f8e0bf0815f9d7012654daab3b1"],["/tags/Keras/index.html","580b53e7dbba0b5e68e795340ed30521"],["/tags/Kimi/index.html","412e5c867b7b45b411e2e0c466c6c6b5"],["/tags/Linux/index.html","89e2845531f922f7b5f535d6a826ecd3"],["/tags/Linux图书/index.html","791f2109d7e5a929d248d73b76a88d30"],["/tags/MEPP/index.html","2bdfc02cd9789fc7cbd3d42817e5779a"],["/tags/Map/index.html","1590b3e087182228520ff7e9a9162cbe"],["/tags/Matlab/index.html","dd9e458ac4718d0ab685bc0f2678b61d"],["/tags/Mihomo/index.html","f56b34e9e9a6a009459f5c8e829fc661"],["/tags/MongoDB/index.html","15647724b49d43de7992f4cb33c543d0"],["/tags/MySQL/index.html","c836846e2fe8e8e63588efeac8f8c4ff"],["/tags/OpenClaw/index.html","0c8204ee1d00d0195431a9cbd8ba4c7f"],["/tags/OpenRouter/index.html","d704e63d40ff264ef9ecd121b90e3bc1"],["/tags/Parzen窗/index.html","7a29039e2097e95917cc74cab932856d"],["/tags/PicGo/index.html","e0af3c97df0c24f2667508669125f6d5"],["/tags/Python/index.html","312bb9e60fc3532748c0c0a56afe2c15"],["/tags/Python图书/index.html","fc800ba0b95bf4618460c5c51213c033"],["/tags/SPHARM-PDM/index.html","dbc464f0923878852f5c02e603097bc9"],["/tags/SVM/index.html","0cffffa56d20dbfaace6d5651b0db771"],["/tags/Seata/index.html","0c4715641dae95c32dba49911f8f77f3"],["/tags/Servlet/index.html","2955040354eecf38feeb48b295cec4a7"],["/tags/Sping/index.html","295fad550d9e8e4dfdf21a094eb7c793"],["/tags/Struts/index.html","f325a5624991986c46902422e3ce496e"],["/tags/TCP-IP/index.html","6e143697f4ffdede03549a6b7f081217"],["/tags/TUN模式/index.html","ced6bda8b99e2466e5d09b7ef4430713"],["/tags/Ubuntu/index.html","0b0a82a04d2b7f5467327b283945e2a9"],["/tags/Unet/index.html","07ec9f322c559f4f834751a97c93892f"],["/tags/V2Ray/index.html","199ef85007aaa0e30bf150f221c0a923"],["/tags/VPN/index.html","9dcdd2bcac63783623c2e494cb367ee0"],["/tags/VS/index.html","27cbfdfa01aaf428d9b38cc8ddbdfefd"],["/tags/VTK/index.html","86a43355ebe047269ec61e9d6d5634ed"],["/tags/Vertx/index.html","3eb4fab67f69661544de28b1f3b604cd"],["/tags/Windows/index.html","20691c83a2eba13ed70e4ff158dc9d19"],["/tags/Windows翻墙/index.html","95e09e988d09df40e360837a340a6521"],["/tags/claude/index.html","1338f31be0313bf93a01275f33957472"],["/tags/config-yaml/index.html","acfa1f8cd3468280cd90c85fd0236fdb"],["/tags/edit/index.html","0d8fb30443e79105e9f0a58fac396530"],["/tags/hibernate/index.html","a8eb2319322e2a78e7b016ff78d0e5ef"],["/tags/iPhone翻墙/index.html","5663a5e25b26400ff8b24af4d5cff33b"],["/tags/index.html","09dc4b3677478d12615af0b3b86793ca"],["/tags/itext/index.html","417262a34363ed7d3fca7b2248df7d10"],["/tags/jdk/index.html","c8dabe6345d0c03023238d8982d3fae6"],["/tags/kmp/index.html","8567bbe0ffb86317ed3a775233fb04ac"],["/tags/k最近邻估计/index.html","12f6b25745685ccb7ed0291766ab13a2"],["/tags/lombok/index.html","d4f844e52f9324d358e9055f84fcd3f7"],["/tags/macOS翻墙/index.html","05b6b56643eb77ede1e3247a1f4ca78c"],["/tags/offer/index.html","ddca405e8f674b33bbb9986528d789e9"],["/tags/opencv/index.html","892b3d13a8b525b6f743d9470d40dfd7"],["/tags/pandas/index.html","47785bb5098baab01a9988095abd490d"],["/tags/rumx/index.html","f67d9cd6c01f6065b494324f84336a8f"],["/tags/string/index.html","8e8985b2854272614ca74b0446d6e070"],["/tags/vim/index.html","73f828a2f419d4f7273c034c39d26028"],["/tags/vtkPolyData/index.html","d1e8cd0faae77f48443723fe56434553"],["/tags/web/index.html","c5b2dfc99de56e7fac4eaceb484f017e"],["/tags/xshell/index.html","16981fbebc99c159cc595e2ddbfccd1d"],["/tags/yeild/index.html","6202bac1b62e0dd42448424ac16e5244"],["/tags/互联网/index.html","c5b5fab6b597323a05da5f71717f7e51"],["/tags/人工智能/index.html","c4acc44326443e4558c50065c22d891f"],["/tags/代理/index.html","a643fe4d99ff511f4d6d13daca46761c"],["/tags/代理客户端/index.html","8b0f27590b14a48f1a3e65c089fd4fe1"],["/tags/体绘制/index.html","964855aec3869b7c88efc23bfaf1a1a5"],["/tags/全卷积网络/index.html","841b277abc6a07bbf311116191a95f31"],["/tags/公众号/index.html","350338c2ec05d28c9bf2436106465b84"],["/tags/内存模型/index.html","20d530d361aaf6d0bd71d930d4fcaa72"],["/tags/内推/index.html","61405ddebf85d840aaa6faf5c1724b4f"],["/tags/函数/index.html","a044a0b60bc5486a035d373b53204fb6"],["/tags/分布式/index.html","e2779773898aac81ffafcea72ac20505"],["/tags/加密/index.html","9c5bd45940266e79423256af4d85f5d3"],["/tags/医疗图像/index.html","4489667569cc8c71c959634e4b78c0e3"],["/tags/协议对比/index.html","32a0f32984da84e6a22078bb62724268"],["/tags/博客/index.html","5d8cc3b3cd7e5a3a0dbe417039f26304"],["/tags/图像数据/index.html","b7484619dbcbf8b1c58f6bdde2c35c21"],["/tags/图谱分割/index.html","5e58757b5c86053fd07f5dcb5eb14f38"],["/tags/垃圾回收/index.html","e7a157dd6f0148feb4685161ecd919f6"],["/tags/多线程/index.html","6801ca4407a25d582f136e7644713b5c"],["/tags/大模型/index.html","0876d011c169b6da9b9453848c4a5fc8"],["/tags/字符串/index.html","689af4f1376ee3f6995e197584fb2b76"],["/tags/安卓翻墙/index.html","818dd84af6b7ec9467a27e2b459cfecf"],["/tags/小龙虾/index.html","f824736b8f94cc588b6d295905ebb492"],["/tags/工具/index.html","b0f6c9e766a01816b8ae213b8e3c0ec7"],["/tags/弹性形变/index.html","6dfbd0cf949be2b824bd12d6e30bfa6c"],["/tags/排序/index.html","605995f5c8460bf2c4b9d9ffb4779961"],["/tags/搜狗/index.html","b641bfc067306176eca7e42b14147dc1"],["/tags/操作系统/index.html","acffbbc4e87b57969ae0944b98524b45"],["/tags/数据库/index.html","744a37a38430ac093ad2508a602b937d"],["/tags/数据类型/index.html","71f10ec041a55bd03fde9a893c54d57f"],["/tags/数据结构/index.html","750064bd3c565cb49195a67e76d8d754"],["/tags/最大似然/index.html","8730bb68743ef4531d38a81fca2d2760"],["/tags/机器学习/index.html","c3b86e5274db07c2823a6754ca6f8ee2"],["/tags/机场/index.html","4715d4c73af65ea064f5aa684a733c7c"],["/tags/机场推荐/index.html","9bf25a552da889bda4d8d17b40eeca85"],["/tags/树/index.html","654bbaf6bed16276bdfedd93d77ebee4"],["/tags/框架/index.html","c7a1d5a5e4e9f518d6d80bc9e745e863"],["/tags/梯子/index.html","cb9ebf58229b0367fb37983b0bf95246"],["/tags/梯子推荐/index.html","0e656690cb3c66568bf893c754edd4de"],["/tags/模型配置/index.html","c73123d804d492281b7bb50f99a854ae"],["/tags/求职/index.html","73be751198fc07e357d1b508dba218ba"],["/tags/汇编语言/index.html","cfaedb78f4fee8c748c6d3794ed59441"],["/tags/深度学习/index.html","b23fcfba3aa21cd74a9c4113d06f5dc1"],["/tags/深度监督网络/index.html","670e3866802b25d55c5eddbc34bd42e6"],["/tags/游戏加速/index.html","c39a6cb24ec740562dd084e12d6bd7e2"],["/tags/爬虫/index.html","db64e122e07f080aa0d9241be333ac2d"],["/tags/电子书下载/index.html","909a8a66862f95a7d64390af867a688a"],["/tags/科学上网/index.html","c08a5f4e04750a3d6cf8e42f3ee70dc7"],["/tags/程序员/index.html","7f3ec439ad309bf8d4539af1bf830dbf"],["/tags/程序员面试/index.html","70552e9e6366841c1678fec65d92eb9b"],["/tags/简历/index.html","053ab918fc067f5b8251a91b2ef1d066"],["/tags/算法/index.html","fa566728223c770ee467a2140d36aa06"],["/tags/线程/index.html","4093d53d860d817e5d77b39552bf428a"],["/tags/经验/index.html","d15733014a88bfa4e3a92e6b49ceb3e1"],["/tags/结构学习/index.html","7007d4f27991a61fd82d57f866014549"],["/tags/编程/index.html","4213524135c785f065cecc6eeaa72046"],["/tags/网站/index.html","77c119c9957b9bdc4498201e86525a37"],["/tags/网络/index.html","628c5a3d9e554dbfd1cf1001c1cacc4c"],["/tags/网络原理/index.html","0413cbadd26c024359241ee1f3f06c88"],["/tags/翻墙/index.html","47e0a31c8fdd3d766acbe7bdf540362b"],["/tags/肝脏分割/index.html","cb982be7d6edc83d777e8b7cacfa4829"],["/tags/虚拟网卡/index.html","1c8ea29b38eee5a8c1f9ecdaf9bd5d39"],["/tags/计算机/index.html","9db113e1feceefafc0f6562851dbaa21"],["/tags/计算机专业/index.html","4dfd184fc222688d1351ae955b1d1f07"],["/tags/计算机网络/index.html","602c6fb413de87a825eb43fa6a6385b8"],["/tags/设计模式/index.html","671fceb6acf8e3fa358bedab36cae47a"],["/tags/贝叶斯/index.html","8f922036e785baedbab969c651046450"],["/tags/迁移学习/index.html","d0a290e28363531f37fe2bb55e04475d"],["/tags/面试/index.html","a1cacb7734b2db3bcd071842429fe242"],["/telegram-search/index.html","2cab1faeee3f961622900055b76c6022"],["/the-meaning-of-reading/index.html","af677f9eeffc0917f1d94cb5813d1370"],["/the-way-of-pragram/index.html","5e239adbde855da4b08c0ecf8614a18d"],["/troubleshooting/index.html","7186610c8b37656991c856e9ba5b7653"],["/untiypro XL安装/index.html","eb40bfd08453f2a487673eaec571fb2b"],["/v2ex-eight-sorting-post/index.html","b070078751e041fb8ece43fe8d29c065"],["/video-websites/index.html","7c1f32b23de5e15e471a16e0dd2cf381"],["/vpn-freego/index.html","c8502c03e72841947cba75ae833a3699"],["/waibao/index.html","ca53df3185b61775eeb9b3d2e9e73da8"],["/wechat-fans/index.html","12ca6ca5be69ae89b5a8bd24b779e106"],["/window-run-VTK/index.html","0b2677046955c6e22b1104285ae6ddd7"],["/windows-science-internet/index.html","95cca8dc53e0061ecb240c83b42b0058"],["/xshell-connect-Linux/index.html","0c9214f11569cfd43813c50ac43fc245"],["/yzhx-vpn/index.html","adeffd0c88f5fdd27637c62667dfd464"],["/《Java高并发编程详解》，去大厂必看！/index.html","505ca298ea19f34ff93ee4f2459ee491"],["/一分钟没了 1.5W 。。。/index.html","7fa50be56aee9e58f74bc816ea22c60e"],["/一条高产爆款内容生产线/index.html","df5dff75f4c5ca4e6e07d8f729db8d3a"],["/为高考学子推荐的六个就业前景广阔的专业/index.html","44d61816147269d85b43badee6f0640e"],["/互联网赚钱机器---社群/index.html","13e61e92df5e5e5368c573e5caf42c2f"],["/你们常用的工作方法和思考方式是什么？/index.html","a9bb99dc7b6437d500c07e9dc11e4899"],["/关于环境配置的一些事/index.html","b0faded2122162d7df9b342ca39127b3"],["/准备了19w！搞事/index.html","089a80e00c6721df91ff91d5e73049a7"],["/几个很重要的感悟/index.html","4a3b0c0ce30e2605f7334f0ec1b363dc"],["/分割ROI篇/index.html","ec1b93188ce6ed75a6e83009a430ffc8"],["/分割精度说明/index.html","d62a882bf97f724f00ed3b743a7a1f09"],["/分块程序执行/index.html","815fc9f3b009cc2adacba79343a6eeee"],["/加班公司黑名单！！！/index.html","6850cddadc0bf46e310b72796d3d1543"],["/卧槽，上知乎热搜了！/index.html","908d9b4acd0a74bdba310b452861f2e2"],["/卧槽，我的小破站爆了！/index.html","09ac60d6ff05a6fdd5125d40c0b67091"],["/卧槽，我被盗版了/index.html","58ac228d3ef0f8447629ae58611cdc84"],["/卧槽，还有985大学在大一上C语言课？？/index.html","96aae944aa9d2902dcfdfb336f3bf9d3"],["/历年微软面试中出现的leetcode算法题/index.html","9061b5029e494a00e066c89a4060cb9f"],["/去特斯拉试车了/index.html","eb8ce18148ad15ef5f9176dcc2a28518"],["/吃苦的三种境界/index.html","1b14cccbfeebf770d63f764edee7dbc8"],["/哪本书适合推荐给 Java 初学者？/index.html","3150988bd912e345228e48f7d17db9ea"],["/哪本入门级的学习数据库的书最值得推荐？/index.html","15689e16654ac10b718c37005ab9933c"],["/国内外常用的AIGC模型/index.html","50e038e5906eede9d9326aa5d3e5c54a"],["/国庆假期/index.html","da4cfd216b90140369d836613f5394b6"],["/图谱程序字典/index.html","d1218428ebd315f3d4a8762fd5468c59"],["/图谱训练与分割/index.html","da45d002af5a74fae0a17220674e4a93"],["/宣布一件大事/index.html","572f64e5103a3574f40e73f84d738fe4"],["/小鹏P7i试驾体验/index.html","abfd694bdd8005025133648307e825b3"],["/微信PC版3.3.0内测更新，电脑可以刷朋友圈了/index.html","e484bd672e22668f327a6ee6356034cf"],["/怎么更快的赚钱？/index.html","8d73587f83b9f2810329d097df8ea9f4"],["/我毕业了/index.html","615d0516ff1165fae6cbd56b5ced2def"],["/我！真！的！找到了！爱上学习！的方法！/index.html","07ef702c284dcdee76dd59336014b9f7"],["/户口的意义/index.html","d293bdbda849a566823ff0d7af9d9e31"],["/推荐两本经典算法书/index.html","9d0a9f0dba08a8cecdbb4c8ce9416cf6"],["/推荐几个在线学习SQL的网站！/index.html","6e90a870ea1eb69d2c52c8fb8da12f77"],["/搞了一个程序员成长晋级社群！/index.html","7cc1c0acfba2c0a4e64c235e238fb584"],["/摘抄/index.html","85023818baceb6b99f3abf2f86489c07"],["/暴跌30心态崩了/index.html","5888495290a092f81edfe760d6957ace"],["/最近很火的ChatGPT到底该怎么玩？/index.html","265d6d56e215d49d027b2d51d039d6a6"],["/有哪些好看的日历可以买？/index.html","39569f6fe456028f185c97d8f883805e"],["/服务器有啥用/index.html","05f66e0f67c621e9cc5f0c54eb760e8d"],["/来长沙了！/index.html","3f3a1df0a0f0c7a60e8421128930746e"],["/校招污点公司名单/index.html","10595950b2c891f38fd8506a50f1e864"],["/梭哈200多万/index.html","68dbf08684662bbdec3ce4f83ff0b2d1"],["/梯形图入门/index.html","9b3fb0dbf0a77ca8229b25beffcb0b74"],["/橙心优选，凉凉了！/index.html","97bb1d6b7840026b093e708ca2ed26ca"],["/比亚迪汉试驾体验/index.html","e9f5c266f401c3ea644c17ac28c93884"],["/清华转学成电，真的牛逼！/index.html","ae6897190d156e7070792f44117d4932"],["/滴滴程序员被亲戚鄙视：年薪八十万还不如二本教书的/index.html","5a5a549ee2d158a118fb06bdcc1aadb1"],["/社群！/index.html","843e27966bd537624c42ccbf34c3db45"],["/科学上网之VPN篇/index.html","1a0e56a216b8ea913a02c35e40f5aaf2"],["/程序员必备的几个技能！看完你也是大神/index.html","e380d85d033b2f9b8f3ef40825bb0ef5"],["/程序员绕不去的槛，Linux！！！/index.html","43298759b1c3f282c9d5c45013bd665f"],["/蔚来ET5试驾体验/index.html","d56bfea7e415a6263a25800adc9baca8"],["/蔚来，牛逼！/index.html","370e8d4208d5c8ba02af9fd03ecb59c1"],["/被录取了/index.html","5834e5a82ea2894ace686fb62ad37027"],["/被找事了！/index.html","d37d3ff26672dddeedf5cd8f6931811c"],["/被拉黑了。。。/index.html","9902663dc4dfd875000bb57e17c48d96"],["/被车撞了！/index.html","b56caa07c0ebf044131b9f141ee98569"],["/该如何选购固态硬盘？/index.html","ff098b3e5fe60793738e71b1c4743939"],["/这本书一定要看！/index.html","61298d027956f4756917225d8d0a8926"],["/选Java还是C++？/index.html","9fc8418c897bbec842e424003bb6606f"],["/那些让你起飞的计算机基础知识/index.html","ff79b47db1e9c414cbc5da22a5c5c7d3"],["/靠这几本算法书，成功拿下大厂offer！/index.html","5f79bb1395b0686aaf50a4d551b0dc26"]];
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
