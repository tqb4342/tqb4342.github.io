/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/0010-city/index.html","53e01364cebc0231ae4688fb28a2c2b1"],["/10-algorithm-book/index.html","618ca1f0c5db5a6500bd28e6bba709eb"],["/10-website/index.html","c598a4bc6c78bbc7c2a208f1d7513c39"],["/100万的小目标/index.html","706566682e3ea4fb3e4c60411ea5c9f2"],["/10w+YYDS！/index.html","30d3298ef4d5a670b17780c69ca35aef"],["/12-technical-tutorial-sites/index.html","9579df1257919e725422a52d84bb9404"],["/2 6 岁 了/index.html","4862c24035ba884c4aefbc8f0049266b"],["/200万，啪，没了。。。。/index.html","6a46ac8cfd952475099cd68a3acc6412"],["/2018ECCV-Paper-DL/index.html","69f0ae5c728a4ff346ae6567b8d1f689"],["/2021年固态硬盘选购最新攻略（小白避坑指南）/index.html","ffa2f02be4a8083346fe9752553e963f"],["/2021机械键盘推荐/index.html","9aac41e49c509d8300d7a5eec049a4b4"],["/2025-07-15/index.html","d43ee838d7594cd356f2dbcc2ad1a888"],["/27岁了/index.html","508e38e4eb9ec51c6e3f0b60e1706942"],["/3D-Convolutional-Neural-Networks-for-Human-Action-Recognition/index.html","80c9a8f487b193faafc344d2bd6cb5c7"],["/3D-Deeply-Supervised-Network-for-Automatic-Liver-Segmentation-from-CT-Volumes/index.html","5c99ab4c951f1459a3570e67a03fc430"],["/3D-Unet-Experiment-notes/index.html","3f9e894b854f7bbd44fb044bb3cae00b"],["/4-Software/index.html","d4932f2cb36150f37b9cbd4ec86d033a"],["/6-website/index.html","9585c13a0a79df9c920cde52b9d46ee0"],["/7-terminal-tools/index.html","0ddfc723e1d3f0ad251b3f0047f6fb82"],["/AIGC中典型的深度学习网络/index.html","093474651671792d36107344f1c9e3b0"],["/Agency-model/index.html","3a6fbf42524e8887d25d0edd5a5d204d"],["/Algorithm-brush-notes/index.html","4c2d58120708520a7007d9544ce1bfda"],["/Ali-recruits/index.html","ebd24242cc34b7efdbaab56f47e76c75"],["/Android-VPN/index.html","aef82ecc1d3169ffbc8b9375b416d81e"],["/Android-open-internet/index.html","d009e7a913c0a53840eac974022cdb41"],["/Appearance-mode/index.html","e5d6c86b64e53abbe85f3a61e832d497"],["/Backtracking/index.html","222074083eef623d1e80934852047bfe"],["/Baidu-Sao-operation/index.html","a86600b5e65fef8fef460be0cafd60df"],["/Batch-Normalization/index.html","1e28d2da49c7fbdcf3d63bcebd2ef91a"],["/Best-AI-tools/index.html","6972f92f2e7c11338a4a9077eb9120f6"],["/Bias-and-Variance/index.html","2d3f6796ab89640c126dfb1bdc96d0fa"],["/Binary-tree-traversal/index.html","fd6aca999ae170787dc2c2a6d85971af"],["/Branch-and-bound/index.html","81a08907dabf3b45b356428d689d8c17"],["/Buying-computer-for-the-first-time/index.html","426df3e25021f4f88ae2cb6f80b2319a"],["/B站向北邮道歉！/index.html","e76a8db76ca7da05b398db49892b3388"],["/C++-string-function/index.html","693738498aa87f083a5fc2838f58a452"],["/C-Java-DevelopTools/index.html","229aa8f5525e746e9d9fe526f826c898"],["/CS-Classic-Books/index.html","ee64dc1b9a7c935f65f3341250725e8d"],["/CS-network/index.html","09fe262500fcde1007c506261989fd45"],["/CSBook001/index.html","f8ba7c48b762c436518aa2e01ecb35bc"],["/CSBook002/index.html","fe5e30b7ec15156b7c2396e2a824fbf7"],["/CSBook003/index.html","9b64d8a9ab6dbd860d1694f3aa356eb9"],["/CSBook004/index.html","12f7e3a8451f2f16bfd0b1ff20884c96"],["/CSBook005/index.html","4d7c7a678a256317930c435e1e3380b4"],["/CSBook006/index.html","a864acd62c9bd4b405168a6db87c70e5"],["/CSBook007/index.html","6d0b107f658ac22de0f3da471649d0af"],["/CSBook008/index.html","4961c4ebe1b320643209cbf10f160462"],["/CSBook009/index.html","edf7dcf7358601efce28f24e89691918"],["/CSBook010/index.html","738540b041f3b6ca2ea00b8627d4bcca"],["/CSBook011/index.html","96d347eaca69de86353ce651407cf12b"],["/CSBook012/index.html","0c206f06380c8f3a08cd085ef346e03d"],["/Changsha-really-fragrant/index.html","f71762ab88ae35d218b933151ae5fe94"],["/ChatGPT-VPN/index.html","006fdffb165023375c748fdc218b189e"],["/ChatGPT/index.html","91cbf1d906e632b73c1df83bdd9ec493"],["/ChatGPT！王炸级更新！！！/index.html","6ba859fd9c15ecd731687c5242c98544"],["/Chrome-crx/index.html","35a513e125c09dbbdf4cfca495e2b22b"],["/ClashForWindows/index.html","314c9a0c3c907f0e7dc920652b6cd157"],["/Computer-Classic-Books/index.html","53215838d3a32def8c343eac326c9a69"],["/Computer-for-another-major/index.html","fd4211e71930657ff6ba38d9a6830983"],["/Conditional-confrontation-network/index.html","c40986ff33fdef744bef4bbe5550efc3"],["/DNN/index.html","0fc549fa3d627942a7694f2a0cbb08a8"],["/DSN-segmentation-liver-experiment-summary/index.html","2fed7e11461ffc9f3289380967ad631b"],["/Data-enhancement-elastic-deformation/index.html","ea6a2fac835e707d67bee57e2f11d1d0"],["/Decorative-pattern/index.html","a5da26ef64c02c9a3838e96d6246d30c"],["/Deep-Learning/index.html","0a1e3cb36ed79ec91f49eaf966a4c41b"],["/Deep-learning-and-medical-image-analysis/index.html","aaa27c7e43200ee5a17577b97ba1221b"],["/Deeply-Supervised-Nets/index.html","1875af6f78614ac0002fdb378ba73d96"],["/Deformation-model-based-sparse-representation/index.html","16f985ab4ce7d925de7349c62abfe544"],["/Discriminative-and-Generative-model/index.html","95b328fd1d4bfd4641fa73f62f51bb8e"],["/Distributed-transaction/index.html","65fdfa09fc0dd616f5313b96ce7319eb"],["/Divide-and-conquer-algorithm/index.html","932c698efa56c0a8fd02494a8a7226ab"],["/Dll/index.html","c99fc51e67753f0ad498adf434b9b05f"],["/Dynamic-programming-algorithm/index.html","a8bc0ec6d8b91612c92f8dbe0a374902"],["/E-book-download-commonly-used-by-programmers/index.html","004b3650aeb85ed6a31b4cbc8da7312e"],["/EditPlus软件的安装、激活和配置过程分享/index.html","11bd36bd536b5ceecc9350c26488a61c"],["/Eight-sorting-algorithms/index.html","643530c53a00c0883c7ba31466867951"],["/Encryption-Algorithm/index.html","b1602afb08c0fed671e19b11c4f9f280"],["/Eolink/index.html","4bed11cf6dc3ecf44e159a36b6fa52ac"],["/Factory-and-strategy-mode/index.html","0b6cb44dc7ccc7e2af862830b28852c8"],["/Foreign-technology-blog-community/index.html","3cb2383a586f81684f62e0dd3648d46b"],["/Functional-model/index.html","40f22440b2961a95d3a0de0d62d78fa6"],["/Fund-type/index.html","46edb0c793641055a24d52860d49e6d7"],["/GPT-4o/index.html","e9b89fe69889f680ec6e6e5aa410961a"],["/GPU-medical-image-processing/index.html","f27ad768119daa80d9eddf97584fb0ac"],["/Gemini/index.html","ce3748e21db1d1b109c5e9d68f45dbab"],["/Generative-Model-of-Unsupervised-Learning/index.html","6e4f19086b2cc486ce5367dc8ed39fe5"],["/Git-Learning/index.html","444a4c72d223ef67af5c9761de911a07"],["/GitHub-2FA/index.html","560dda9df018974d0701e124d0061054"],["/GitHub万赞，程序员必看操作系统总结！/index.html","6837f839545f81c1d8e620e0990d4f90"],["/Golang-book-recommend/index.html","98ba39795e2358052770925ece1a2ccd"],["/Golang-learning/index.html","724d5f6b7c46cb40fa125e9ff092fb68"],["/Gradient-descent-optimization/index.html","93b432bddd3b0387e840bcba1930b62f"],["/Greedy-Algorithm/index.html","fb8a8daf4695df58195406126aa2f2b8"],["/HK-bank/index.html","cfaf8128eaefa74e764989ffcb083cf1"],["/Head-to-head/index.html","f9b83521eab79e16ac1354c63c02772a"],["/HexoPage/index.html","af8264b64d659f731594378e573f41ed"],["/HistCite-Pro/index.html","4cb374379491bc2a8d430c0e73758d13"],["/How-does-the-program-run/index.html","138daaea2243bca387e38c31a4771512"],["/How-to-judge-whether-technologyisreliable/index.html","323a69fffd46fb1e2f1dfe1bf192c833"],["/How-to-learn-design-patterns/index.html","3d12bc904dd297ac367599cdf35512c8"],["/How-to-learn-design-patterns？/index.html","9915919b5a41577d5508cc0b60bfbfb3"],["/How-to-teach-yourself-programming/index.html","43b93a76150e38f8e1597b866f6e8e29"],["/How2learn-Python？/index.html","1738ea237a8eb6ef360ebd7e3c717734"],["/IDEA-shortcut-key/index.html","aca2c897bc04efc08a6711141e89d909"],["/IT-interview-basic/index.html","42fc9a9506b569854da0f72d35fbb208"],["/ITK-VS-install/index.html","9020dfd60ede38ba8162b828b8f07a0f"],["/ITK-VTK-ItkVtkGlue/index.html","df236106467e40ed4c73ed2986bcbe57"],["/Image-processing-plus-noise/index.html","a4d240a0df1544efa81ff8acfc7aadc4"],["/Inception-Going-Deeper-with-Convolution/index.html","ff76c9fa246eeb1c0008fdce5866a7e4"],["/Java-GC/index.html","b273ef1213575877617973342fdb53ae"],["/Java-Servlet/index.html","ce450a71b5965482ebce5a910c5ee830"],["/Java-array-and-collection-sorting/index.html","f1f06a77054f817fdfd0969d8ed2ab96"],["/Java-development-tools/index.html","7cd75cbca01878c77d3f19af360def07"],["/Java-eight-data-types/index.html","10300e356ad87d35fe4a46e1ca2d687a"],["/Java-interview01/index.html","ff0b22bbed35225224cda377a2ddffb4"],["/Java-interview02/index.html","aecaa3c5c3e053ee72711dddc6c03d12"],["/Java-interview03/index.html","4c95bb439c2ccb3f53dcf3f17048be0b"],["/Java-learing-map/index.html","1932346329aa56b69b38de97182b0166"],["/Java-learning-route-map/index.html","f2a5fbf8959c60e393b875195a0bc2aa"],["/Java-memory-area/index.html","092c3ff909606647f1a1eaa45959d16a"],["/Java-memory-model/index.html","68676c954091e4446b226c15ad44b055"],["/Java-multithreaded-learning/index.html","d8a655c0fd79794528b9daa5acc83fa7"],["/Java-project/index.html","6cbc0dc82366a9345da328153a150977"],["/JavaWeb-Chinese-Garbled/index.html","958f76183506fe460e43ea7b132c112c"],["/Java还是C++？/index.html","2f1a8bae50ef0a3625463a25293ed5b2"],["/Kaggle5-step-guide/index.html","b7f6351677a2b7be7ffbefc48227f1a8"],["/Knowledge-points-of-Java-garbage-collection/index.html","c6f4b10040a084dbb949dc114877dd40"],["/Layoffs-and-Hiring/index.html","dc8cfd396d98f31b7cdb70b7525bb515"],["/Linear-regression-of-machine-learning/index.html","0299b87bea837dc9b31b9c6deb0b9de3"],["/Linux-Compile-C/index.html","92fe26843ccfb61dd3594e786fe31cbd"],["/Linux-ITK/index.html","63623b062c7b2fa62e0a83261f03d362"],["/Liver-segmentation-of-sparse-components/index.html","2af06c62dc6fdd6dbc51c2bb73afc024"],["/ML-EBook-paper/index.html","47c392eac94623f1149fa788a7a709df"],["/Map-uses-multiple-maps/index.html","348e388799dd48c67c606f0e3dd069a7"],["/Matlab-Graph-cut/index.html","b198499830fcf5ff25b502c836194039"],["/Maximum-Likelihood-to-EM-algorithm/index.html","849b3e45c6eeeafcaa1ca67dcf9de83b"],["/Mean filter and median filter denoising/index.html","1113f70c8e1ad9f09c548d56a11c4384"],["/Medical-Data-for-Machine-Learning/index.html","61014bf13807d1af02058b8a611044e4"],["/Medical-image-analysis-deep-learning/index.html","007ce65a1845002f48bf6e85b65d7235"],["/Medical-scan-image-processing/index.html","df9cf89b03d1912729fe538cd771266c"],["/Merge-sort-algorithm/index.html","a3649a3ec2be0a2e24e49e91bdbf87f2"],["/Monthly-income-2W/index.html","799e792705ed8b95fd25b62a02fef2d2"],["/Mysql-database/index.html","4e48369fa62a5358b4056c3ba692afc7"],["/Neighbor-Embedding/index.html","27bd68193b3e5512a1a839968cc21cf0"],["/Neighborhood-approximate-random-forest/index.html","06fb1dbc5918e557a71e9778cf97cff8"],["/Net-and-official-documents/index.html","ca02d695919a238f96d8d8c138b6e8b7"],["/Netflix-VPN/index.html","f29d7ee9f9ab16fe1c56aa79e3bd8e01"],["/Network-principle/index.html","e557af53d4fd9a4cca86404d664f697c"],["/New-Hong-Kong-stocks/index.html","e83df0263ded57b66aa9ac7e6fc4f4ef"],["/Nice-to-meet-you/index.html","f887aa3ba3f6753a400c89698d993f12"],["/OS-processes-threads/index.html","83f9479b59bb570c8b894d960c8090f1"],["/OS-run-environment/index.html","e098958f156dcffb48cff36090af6d1f"],["/Open-Internet/index.html","0c5694de4defbd940a382775b4d619fd"],["/Open-Internet2/index.html","f49accb9d02fbe2f8acbd481bc591570"],["/Open-source-community-and-rewriting-website/index.html","5735ce16c757bf336571edef88581d62"],["/Panoramic-image-stitching-based-on-SIFT-features/index.html","6f8908454c99608f216d0011be33bec4"],["/Parzen-and-KNE/index.html","7d0a5b54c95bb0fcd22e8fda7bb65948"],["/Personal-technology-blog-site/index.html","eb53fe002ce1d63c593ad83525273000"],["/PicGo-Gitee/index.html","75d711a1fb84ba896eb2cb951037e4a8"],["/Programmer-treasure-chest/index.html","167fab473de05e6c04932aaac6e9b026"],["/Prototype-mode/index.html","47c6bb23f5821602d32b0d9708bac3a5"],["/Python-base/index.html","037826c82be8c4e600749462e7dd98b5"],["/Python-crawler/index.html","3f15657fe08b9649588174203f4e2eed"],["/Resume-revision-suggestions/index.html","dd4033d98bb01d4e8d6cac065918dbc8"],["/SEO01/index.html","3b4f0ba9d85f159c41e263b23c299fbd"],["/SEO02/index.html","487a0fcbe1c932ba6fa4dc4b602b0b38"],["/SPHARMPDM-MEPP/index.html","0034c096811f0ef331f1f25d38fd38be"],["/SVM/index.html","5dc691035882189020c04e1925868b47"],["/Seata/index.html","5b78eb922af0e285e415d7741983d367"],["/Semi-supervised-learning/index.html","146c7aea8427f24a9bbbc5e0348fc295"],["/Sequential-model/index.html","6b72211a2c769baa43196324916bf4dd"],["/Shape-Based-Human-Detection-and-Segmentation-via-Hierarchical-Part-TemplateMatching/index.html","4eaff6a04cbb3899d07297ed41a441ad"],["/Spring-basics/index.html","a4d4972d15ddcb71cf0755e882fcc5be"],["/Spring-integrates-hibernate-Struts/index.html","440e8d29dd6c3132cd58eb2ae57bd4db"],["/Structure-learning/index.html","921b7f531eca9da93d080f29dd4fcf98"],["/Suggestions-for-self-study-of-computers/index.html","46d9e02e05cbc60b2ee5a19674203e93"],["/Summaryof-HongKongStock-Account-Opening-Links/index.html","a5220d68784c402f6a26f5bda2545caa"],["/TCPIP-detailed/index.html","c08b1d481def0bd7d7840b58389d0c61"],["/Telegram-VPN/index.html","e9cd609bfe33f262a34e799346131f76"],["/The-essence-of-shopping-festival/index.html","41e400e3ebc83ed1fb8a011a7796d89a"],["/The-most-important-investment-in-life/index.html","4515576df458fef853ce15903cb82803"],["/The-most-successful-nvestment/index.html","f3f09e6ca75823c8da849e320d105e79"],["/Transfer-Learning/index.html","68be25742530673172ae69bbd97d4e9c"],["/Transfer-to-computer-major/index.html","5b93edd0288a560acd14559c20123c49"],["/UNet-Convolutional-Networks-for-Biomedical-Image-Segmentation/index.html","7c7789185a3e8416fe85eec650ade9ef"],["/Ubuntu-install-sougou/index.html","5a687465d9d8f138f0ecda53a2458738"],["/Understanding-of-paying-for-knowledge/index.html","a1ef63584dc9c368521562c75b5bcbe7"],["/Unsupervised-Learning-Linear-Dimension-Reduction/index.html","e44a23673b1c6bd0e6d20da119e071c1"],["/VPN2025/index.html","bc7aa8c9ff94e08705bd57b83a96900b"],["/VTK01/index.html","ba370597a66e3f58a4f2d10f815a3e02"],["/VTK02/index.html","86366db43a7c8985315a7b0519f1f92a"],["/VTK03/index.html","c66163f0cc224e28e13478ec9f65fa33"],["/VTKRead-write/index.html","f3f4d1534b505a696a1ca34b96b60d96"],["/We-are-all-good-kids/index.html","6ed30f4a9183bd245ed319b773c964eb"],["/WeChat-80/index.html","1542dcee109cc1066d0d6fae1643b093"],["/WeChat-red-envelope-cover/index.html","e6eb1698fc643cddee4246fc21c99f99"],["/What-is-crawler/index.html","beabd22d5e4905863febe2099b079416"],["/Win-OpenInternet/index.html","083c5f13c538f97828839d1094cc761c"],["/Windows11-2kfans/index.html","d63fa421212f77767b5689ab124d025c"],["/Word-Embedding/index.html","e852d2e1af7c7f5f695476b0c21f1bee"],["/YuanShikai-and-his-Beiyang/index.html","f7bf11732c3660e26a0d66346870ca0f"],["/Zero-copy/index.html","2e5583e720663c19e395edfc2ce188ca"],["/about-keras-model/index.html","dd50f6d4aab65b4b8c304f1c5f78018e"],["/algorithm/index.html","d71d4d62796abe8553c12d1b37e4e511"],["/alibaba-Java/index.html","c6a7683f8a88244688251bfe7c1cd3a4"],["/archives/2020/01/index.html","704ad5d0958ff64fd2fe96c9a1f3d5e3"],["/archives/2020/09/index.html","6a1a54e8d16d28f7658c1a821eac1d97"],["/archives/2020/10/index.html","3b47a4d8586eabbcacc5855161abd1b3"],["/archives/2020/11/index.html","0ae2ce0d899146c911325fbde455cb97"],["/archives/2020/11/page/2/index.html","e44660c039a7d0978cd22719f88e6eeb"],["/archives/2020/11/page/3/index.html","377a417f49b4d68c0dfb4e71e70f3c9d"],["/archives/2020/11/page/4/index.html","1d909f089f3792f3ea674320da746892"],["/archives/2020/11/page/5/index.html","e96bdd7678c92db4b71815452f4f7c55"],["/archives/2020/11/page/6/index.html","2c06e1246d012a452cf805d64afc4c65"],["/archives/2020/12/index.html","4b20bbc3cd001577d53144204b56e1cb"],["/archives/2020/12/page/2/index.html","dddb3964a6a500a9b1c58dc86b2d31c3"],["/archives/2020/12/page/3/index.html","6245cd9ab1e184b74b0a14c09071cadd"],["/archives/2020/12/page/4/index.html","b3fbf458bddcc4c4007e5641e608e306"],["/archives/2020/12/page/5/index.html","0d92feff71bb3a1a36e6cc52386048e7"],["/archives/2020/12/page/6/index.html","db9f665f0bd8ef99c68f8e2858828f9d"],["/archives/2020/12/page/7/index.html","c65331d42ea478bd4e94c93c94f440c5"],["/archives/2020/12/page/8/index.html","558f3f3b8b62335ea5db00ed3d35f92b"],["/archives/2020/index.html","a2ad6db4267e5e51e64457a7739ef685"],["/archives/2020/page/10/index.html","a974c5607015ab5e2e617f90df4de720"],["/archives/2020/page/11/index.html","ea6c7e45a03df0787830c3b126d84245"],["/archives/2020/page/12/index.html","55edada7aed389d4c85875a882484c76"],["/archives/2020/page/13/index.html","ebe0bf4a2c6816dbc824ee31d9e6d5c4"],["/archives/2020/page/14/index.html","85808f1de105908d6eea9b57a85b26f6"],["/archives/2020/page/2/index.html","877bfa5f0eb3d34ce22b3884ab1058e1"],["/archives/2020/page/3/index.html","d73e8b6106ba10f66da3416489704a43"],["/archives/2020/page/4/index.html","1a3efb05b2567e62e34c7fb426b4cbf6"],["/archives/2020/page/5/index.html","2412c9547aab7bac3a7a8ff4ded83f6a"],["/archives/2020/page/6/index.html","9c1bfc6a1eb2676ca21c9518e4736a0a"],["/archives/2020/page/7/index.html","ec71e432d43cb247ee17c0cd89773378"],["/archives/2020/page/8/index.html","a4110fca8b7fa1ea81d7c172387a1ddd"],["/archives/2020/page/9/index.html","6e7fc9a434cfce8926499e3d8fcd40ea"],["/archives/2021/01/index.html","3a1c7ea24e47155db32376167439e58a"],["/archives/2021/01/page/2/index.html","4b3765ded18591ce821ef715563430ab"],["/archives/2021/01/page/3/index.html","b14d8de5035a8dff2e586e42326cc01f"],["/archives/2021/02/index.html","ffca84314e7a85541daee6f6658444b8"],["/archives/2021/03/index.html","a9d0cf4799335ce9492e426d47d09602"],["/archives/2021/03/page/2/index.html","e0cbc6bd0ceb1eb22c03307799837c1b"],["/archives/2021/04/index.html","b2c183a3683fb2a14f0c91d6cfa1e4d7"],["/archives/2021/05/index.html","ddf89989d3107d5d67cc606383e1ff1f"],["/archives/2021/06/index.html","dfe597f796edbc2e4aa851d2d71db3e9"],["/archives/2021/07/index.html","e09fdc4a53cb588dd73f81fd5d3fc668"],["/archives/2021/08/index.html","2d89f8caa7886310ea31bfd02a8f0fbe"],["/archives/2021/09/index.html","1dde9860418527456e9dd8d49981ab45"],["/archives/2021/10/index.html","509bce61a004898293be6b4b0d2ef11d"],["/archives/2021/11/index.html","860150bca2f4925929b6706f384fac3f"],["/archives/2021/12/index.html","c934bd2e2a82030588dbcaca7d31d17f"],["/archives/2021/index.html","8985f77bdc21487c6d1ca6e690ac35a9"],["/archives/2021/page/10/index.html","6fc05ee4117f74fd577646646219d647"],["/archives/2021/page/11/index.html","73d13b0ae38b48bd6831d14a8de69aa5"],["/archives/2021/page/2/index.html","5a81a8ad1241c30c57ae07b021d68fb4"],["/archives/2021/page/3/index.html","5371e0416d25b7fca124bd057dd1a05b"],["/archives/2021/page/4/index.html","fb1887c02f4a1b2be59a2c670892c86e"],["/archives/2021/page/5/index.html","e78e0d839096c911250e6e8ecc698014"],["/archives/2021/page/6/index.html","05d2326b234bdf1cc7af9413cc422aae"],["/archives/2021/page/7/index.html","dae8522dce66e660963c5db0a2e3ca17"],["/archives/2021/page/8/index.html","9c6500c4fc6e82d6001fb6d649a677ed"],["/archives/2021/page/9/index.html","4533d33dc49fb4bffd4b7939d3a71ad0"],["/archives/2022/01/index.html","d737e80d93acd1efc3365f585f193639"],["/archives/2022/02/index.html","59fdff6f5741e4dea760f2204afd1569"],["/archives/2022/04/index.html","e8cedd5df7bfc9156e95fbb79c80cded"],["/archives/2022/05/index.html","a4b74c4b6d371e8625541e10efb17ad9"],["/archives/2022/12/index.html","174558ac772d4ddd4c098cb42309959f"],["/archives/2022/index.html","8f00527486769980cce88627280415b4"],["/archives/2023/01/index.html","783e190feb37711e1f5ade4582b25267"],["/archives/2023/02/index.html","eb6c7f27e9fd91d6368dc6a6da0f1288"],["/archives/2023/03/index.html","dbddcbd3359f5bd3aa1b656a3efe8557"],["/archives/2023/04/index.html","aefb119190a7aca6bbafa6f70e90dc96"],["/archives/2023/06/index.html","1dd8c4a1aee78207240577b7aedccb06"],["/archives/2023/08/index.html","2bc2ba44211d5411c31e53b83f92c372"],["/archives/2023/10/index.html","af372d6c136f6c83fbed1dd4b0e174e8"],["/archives/2023/index.html","c2524613bccea1e3b057847001614062"],["/archives/2023/page/2/index.html","f2d923fde3961cb123f103d7e5c6ee6a"],["/archives/2023/page/3/index.html","916697092fa0e36c58f9d63bc6135f40"],["/archives/2024/01/index.html","5ea7a7aff490dcb5b339ffbac8e1ad8e"],["/archives/2024/02/index.html","db69d1e2961fbd60c23ed5f469d128c7"],["/archives/2024/index.html","06678198907b7fefca5552567b14212b"],["/archives/2025/06/index.html","cf2ff5ed687eda4ca1436c606c6774b0"],["/archives/2025/07/index.html","6b547b57daa5325c264c9d65c9232254"],["/archives/2025/08/index.html","5391f53d0c475e613e1f7613d7f3e120"],["/archives/2025/09/index.html","9e0cdc56d49282095d4e305fd33af2e2"],["/archives/2025/10/index.html","5d51051ca0e5a6da8335e153bb6438f8"],["/archives/2025/11/index.html","7805a7365bd999323ee5793dffe6cd5e"],["/archives/2025/11/page/2/index.html","371f9d4422c75e95a3bb7c0ade805358"],["/archives/2025/index.html","42801ff4c95b56aaa9c2459d2fe919c2"],["/archives/2025/page/2/index.html","3739ac117403654541e695eb767f0eb9"],["/archives/2025/page/3/index.html","00231f16a03f5ef2b16e0fd85c47beea"],["/archives/2025/page/4/index.html","5f7f8febcf88bc10ba366f53ccb8ba35"],["/archives/2028/02/index.html","be14f78b28b7007b946f80431326b034"],["/archives/2028/index.html","b1222f1410596ec839db08a9a8e6f2f4"],["/archives/index.html","842a2753e647ead5e045a6cc84b3b10b"],["/archives/page/10/index.html","45e8eb3f216af8a099131dc4eb814af5"],["/archives/page/11/index.html","d0b328e3f546c406c0a383311061b27a"],["/archives/page/12/index.html","6c05130b17455817e45b720b645b0c17"],["/archives/page/13/index.html","663d7d43dd2106fe2490012f0dcaaad3"],["/archives/page/14/index.html","a9ee7781026b6cbdd6819d00a9edee3f"],["/archives/page/15/index.html","ca8bb9221e8499e92c1f9cb44099d101"],["/archives/page/16/index.html","74de27791013f7eb6a3ff72bec6defcd"],["/archives/page/17/index.html","ec693f71c6484ea3c8bdc3ba7848e50b"],["/archives/page/18/index.html","895d5f20a1c0f7d83b6b2981677ba043"],["/archives/page/19/index.html","562f23e0b342d58095de8c19f47c4189"],["/archives/page/2/index.html","9e2ff87c7480badd1e6482a3d32d79a0"],["/archives/page/20/index.html","80f745d3aebe69e6eb2e2a0d2af50ae1"],["/archives/page/21/index.html","578c6c7b722c2b4bc6d95eed6a4993a2"],["/archives/page/22/index.html","6450c4fdb78e4613177e5e8cbc677d23"],["/archives/page/23/index.html","481a63ca86a4736f85c51896b8ca900a"],["/archives/page/24/index.html","fa6e501a6836715013a7f3530df1f170"],["/archives/page/25/index.html","83cb26aa1dd7ed4b370795b2527a330c"],["/archives/page/26/index.html","b56fa24b4c343a2152c3e773a4e35ca0"],["/archives/page/27/index.html","0453035be2046c37b6ff228671c8aee7"],["/archives/page/28/index.html","4671df0c363ee202c4348195fb65f2f0"],["/archives/page/29/index.html","3f6aba337960c9f2c1d95d71ab00a5ce"],["/archives/page/3/index.html","ab6006d89e0be0e9c89464657c89587f"],["/archives/page/30/index.html","a7618941bafbcc86de68cc3db8f222e5"],["/archives/page/31/index.html","9cdd6b3a7ff848fde1ed09495117cfa4"],["/archives/page/32/index.html","79db58bbb1266ffead49b05b139e4b83"],["/archives/page/4/index.html","832c83c9795a07c6875a13adfeb7da3e"],["/archives/page/5/index.html","1936ef8c589d24feb88f7ec31e4c3c6d"],["/archives/page/6/index.html","799aab4d26904eebcee76f7749347d4e"],["/archives/page/7/index.html","5839edc477e9196717fec98b70c33eac"],["/archives/page/8/index.html","7796b212ba09a7c41e311cd584254bd8"],["/archives/page/9/index.html","b32c75627ce9c662ec6ef2109e258b36"],["/baidu-search/index.html","aaa59141f4601f7d397a23f79dc0ad41"],["/baidu_verify_code-Hh2fKNlEB1.html","0f98a32806cbf0901e385fad1cd59273"],["/be-a-programmer-instead-of-a-code-farmer/index.html","ba2edd81f8c7ef65489bd7d301781fd4"],["/bought-a-house/index.html","e5aa908f84ec699da4fa3b8297227e29"],["/categories/C与C✙✙/index.html","8a05f34d761d6d9c5ff524098d8e6658"],["/categories/Go语言/index.html","24477bc68cbc54b6b4c991ca7e30c189"],["/categories/ITK与VTK/index.html","c1354505bf8e318c54e78ba4038f64f5"],["/categories/Java/index.html","ce97ca6fe6571acc51ea8d883bbb20b2"],["/categories/Java/page/2/index.html","310343ff75d9c9bc6d0edf3acfa7f0f5"],["/categories/Java/page/3/index.html","8c209ec5f3a7d06ed9346f2e553fe813"],["/categories/Linux/index.html","7bf301e1484d38156f861bf3f149cdfe"],["/categories/PLC/index.html","ed60e48cc0489ae7e11230231f5a26ef"],["/categories/Python/index.html","c9a4eaee68e5e7936d989394e0a99727"],["/categories/SEO教程/index.html","a6831493ebe23bd2099b765ed6d7cd92"],["/categories/index.html","97ad38ead27470748fc37c22ae6b7788"],["/categories/图像处理与机器学习/index.html","df2a5a5518547cda91922dc7534b6e80"],["/categories/图像处理与机器学习/page/2/index.html","1cb043a49fb6b4aa1fea8c16ae36ff5d"],["/categories/图像处理与机器学习/page/3/index.html","a1528eb6e6e16889f87d804c1c9de7f2"],["/categories/图像处理与机器学习/page/4/index.html","c0748e4d0e168d43a12324ed00527e9b"],["/categories/图像处理与机器学习/page/5/index.html","293a23d699a86c47c41b5e13eef5390c"],["/categories/图像处理与机器学习/page/6/index.html","0c7381be5827b4985aef57fca2f87c11"],["/categories/工具/index.html","c0e162654f713ae503a9aebcfee6d561"],["/categories/工具/page/2/index.html","47ff76abcf88090ba1aa2e53f8ac7f86"],["/categories/技术以外/index.html","144f1210f6073bbd6dc8e138c2e3b3c7"],["/categories/技术以外/page/2/index.html","80b33dd7d54f1dceb02711d28c0d1d11"],["/categories/技术以外/page/3/index.html","8870a9804794718f38d7365028bacb07"],["/categories/技术以外/page/4/index.html","0964948b595af6ccfe79b0224c306d10"],["/categories/技术以外/page/5/index.html","66073aa93e503ec2946a35aa99412fc5"],["/categories/技术以外/page/6/index.html","e4ea0c194762cf2e7e42075abc4afe64"],["/categories/技术以外/page/7/index.html","56f5bd1804fb031204383bd22a1ed408"],["/categories/技术以外/page/8/index.html","5a8bef1ffc50e462a80e138f0a8e672a"],["/categories/技术以外/page/9/index.html","42ca0bb2efb312dbc18173a974f1bc0b"],["/categories/数据结构与算法/index.html","9a00f9b8cba6c032a010cf8050a4a836"],["/categories/数据结构与算法/page/2/index.html","3a08227f83b57524d7e139ad5c4aee2e"],["/categories/科学上网/index.html","72dd47c09eaeacce4a42bb0613fbf08f"],["/categories/科学上网/page/2/index.html","8735106512909ca9d3d11de6f92de9a6"],["/categories/科学上网/page/3/index.html","d6c746a83c3f8d590da221ac396a61d6"],["/categories/编程经验/index.html","e67ded7b31daafaea05027af9bdf1fd9"],["/categories/编程资料/index.html","897cbc7e7c3ac3cdeac6f677cd13fd9b"],["/categories/编程资料/page/2/index.html","580337f45fffe20898581c419bd663d5"],["/categories/编程资料/page/3/index.html","9652bfe545b9703dd1932920523e8bf1"],["/categories/编程资料/page/4/index.html","036c82ec605ca205b00ef1a9106efad0"],["/categories/计算机基础知识/index.html","952565f51a8cf48a0ecaee1668e7a6b9"],["/categories/计算机基础知识/page/2/index.html","599128aa4f5b0aed41173a5e5d71b0cf"],["/categories/设计模式/index.html","e73fc703a2cb63402bf0e450af760e3e"],["/choose/index.html","4a9fa93b40ff042fd22673b5ec546baf"],["/choose2/index.html","87828e1e45df11b18f7dd696677c60b3"],["/chrome-crx-intruduce/index.html","5fab27a770eb15b5bf4c95decad107bd"],["/clashvpn/index.html","f1a4517a1f0447f623172485fce47ec8"],["/coder-blog-website/index.html","f1956fc30d0ba5aa5cfb8a788c56297b"],["/coder-source/index.html","3075e374318df172d3d594453dd724e0"],["/coder-videos-website/index.html","01e22ef3803b9268111012b48a0f3009"],["/computer-book/index.html","68e42072b0951028026794b032cdbdd7"],["/computer-censorship/index.html","2f758fc7384db880221606000ed16a33"],["/computer-network01/index.html","4ad4cd17dd8a691076fce848d511f0c1"],["/computer-network02/index.html","94169bcabd815acb23d2bf2bbad9e37e"],["/css/main.css","bc32ad34ec4990d934c3c647bdb62f79"],["/database-Mysql/index.html","eca8962a2aee05908da9a70092c88c96"],["/eclipse-lombok/index.html","7dee26944aff3106ac6dc7c93e2613ee"],["/fully-convolutional-networks-for-semantic-segmentation/index.html","e89e898f07f7219eed6b086d6a39dc7c"],["/great-firewall/index.html","57900651cbc1463d223b0c02f0ccb234"],["/halfrost/index.html","4b19d769387e68b727ef9b888cb8a43f"],["/how-to-signup-chatgpt/index.html","8f9ebf6616cd0136279112606afc5c1b"],["/how-to-use-Gemini/index.html","4aa824035497aa031573099c1adb66f2"],["/index.html","36b1d736347889e577aeff3fc0391f18"],["/ios-open-internet/index.html","07e3519f03feb2839a0cea62cb59c459"],["/iphone-open-internet/index.html","c71b91f42a850152609a389f7cb600f6"],["/itext-makes-pdf-form/index.html","0f1b994ff8c0c43f79c38f52281cb205"],["/java-Set-Map/index.html","1653e78d639c49945edd1f81b57bf52e"],["/javaweb-server-error-codes/index.html","834cb30e775106181245630f0bf4fc97"],["/javaweb-source-code/index.html","23d0806084449e1db165223708d63800"],["/js/lib/busuanzi.min.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/js/lib/lozad.min.js","47904d34a224931dd1b615c59a3dbe3b"],["/js/lib/prism/prism-coy.min.css","0ccad54d95845901ead59bfd3ecceb14"],["/js/lib/prism/prism-dark.min.css","a4711d2957d6605eb5682bdd228cf123"],["/js/lib/prism/prism-funky.min.css","efedcdccd7a9ab342d2d9cacd24920af"],["/js/lib/prism/prism-line-numbers.min.css","38e22e790c279bb56f9ec4b90a2a2d58"],["/js/lib/prism/prism-okaidia.min.css","5ac6f9de996fbec68aaa106dfb16e061"],["/js/lib/prism/prism-solarizedlight.min.css","ecc7e64d039873ffcf7fb27babdaeb5a"],["/js/lib/prism/prism-tomorrow.min.css","456af2a14ae4f5089939d5904ac40fe8"],["/js/lib/prism/prism-twilight.min.css","ebb5c355332a8cf9a1ce37a2a69d678f"],["/js/lib/prism/prism.min.css","a5234d614834658887cec6a9515890f8"],["/js/main.js","052d2b299d9c750afea8df0b802ab7c1"],["/keras+TensorBoard/index.html","43265e443e60571b953296048a0ca6bd"],["/keras-beginner-guide/index.html","8e1b72c7daac1ebd316efd32ee05cc66"],["/kmp-algorithms/index.html","ebc092cf4ccf416bc78eb92fc2234325"],["/leetcode-Java/index.html","64d5fd638abced102f0c15c44bd39da3"],["/links/index.html","741798f420f964745a6187f9d0a0d7c0"],["/linux-java-opencv/index.html","def5cc71b7906f0228c55c035fe4098c"],["/msb-source/index.html","779401683438bed82dcb503db3b95cd4"],["/online-BUG！/index.html","f9bbc507bd97ace47707c551c66c8d1f"],["/open-app/index.html","a17449c16b5325c63339607f437391c1"],["/page/10/index.html","28d71fb0eb8c30ae416054cac8583e40"],["/page/11/index.html","72f3168c7b8a7304745bd04f58c790b1"],["/page/12/index.html","7ca57d3a8ef6914114821e48c9ebcf2d"],["/page/13/index.html","8d612fe3a612fe26590979c634f0040f"],["/page/14/index.html","05294568a9eda5410905d997a1717ccc"],["/page/15/index.html","0af616974b3fb8f5d79d8bcdf245c126"],["/page/16/index.html","537593838c77d1fed4694b7a892f4b1d"],["/page/17/index.html","152932a0aa331409928e8d08a5fe5240"],["/page/18/index.html","b3db8f6dbab55bb7ce7886180cee5ac3"],["/page/19/index.html","b2dac9545628c7fd34018e3d109f4100"],["/page/2/index.html","a74825c608d3aa6841de72275ce37ab6"],["/page/20/index.html","f2c625545f8e60c89499d36ef54c581f"],["/page/21/index.html","2d1750de36d0920209c3a125f84c96b6"],["/page/22/index.html","f707d8c104315eae1c4c3b21ac7cfa70"],["/page/23/index.html","78d4e653c455e1a7733579b523cdb225"],["/page/24/index.html","bb0806d99b40ebb0c4ae6d865ad47118"],["/page/25/index.html","46fbc9dde1e96089e59e3a009f617179"],["/page/26/index.html","4b1b98c80dc86e2cf66babcfee4fd1d6"],["/page/27/index.html","3280c57583830a89bdb15ea34c57b668"],["/page/28/index.html","03a8d7889fcad8b857704162250fbd52"],["/page/29/index.html","249e4938ca4ad65ebc3561bf05c4d75d"],["/page/3/index.html","d611b9963395abe5e574ccc0a8597955"],["/page/30/index.html","988af0c6506460088aa04bcdbbd03c0a"],["/page/31/index.html","5ff3f3067407542b638dcbc39f2d1687"],["/page/32/index.html","7429d32f7152dc11792377747ed8ab93"],["/page/4/index.html","febdd733659b2d4ca83929196e00a27b"],["/page/5/index.html","147fbc3447f67e022b8a9d2a68faae61"],["/page/6/index.html","c41c76c6b468abbebf1b004763b5456f"],["/page/7/index.html","5beec64e1dbd36cb71a6dbcf6a3075ef"],["/page/8/index.html","bab3bfb5e5f626db85b7c6d49cc65a4d"],["/page/9/index.html","4f255af0829e4db39101a652ec35e219"],["/pandas-data-preprocessing/index.html","aa11889c1d5d876fa103d2035ee383df"],["/phone-win-open-Internet/index.html","e9422ae66719e2ab4c53dbf09d5ba867"],["/popcorn/index.html","7fce83efa753b0e002b5f3c06e7fff80"],["/python-Blog/index.html","f64a8329fcbd635a2b4e162b2ace57d9"],["/python-yeild/index.html","aee9188dda1b2c7bc90e628a2884ecc7"],["/python爬虫教程/index.html","0b3034bc28072418ef0ac91223270dce"],["/software-copyright/index.html","80740336e0f98442d15c0830d82e6828"],["/sw-register.js","ceda205934e284408f96a8f78d5c61c2"],["/tags/AI/index.html","83b61e845c674f79ddfd39e0694f2d28"],["/tags/API/index.html","5f0ecc397f23772b8edba6fbfc28df10"],["/tags/C-图书/index.html","036d20ab9b2b4be64d6d453564f087ee"],["/tags/C/index.html","705b7dc2369455883876a9969057e9d8"],["/tags/CNN/index.html","7095dd81d3e0a3193b22852524774656"],["/tags/Chrome/index.html","3d84f54ac90d92da0dab521930d49631"],["/tags/C✙✙/index.html","6397c7f0aaa30e9a1b448df96720e92a"],["/tags/C语言/index.html","edb3d9016fd5e183b3e6c604344b9c67"],["/tags/C语言图书/index.html","69819c7907b68597fb7bc72ca6c75986"],["/tags/DSN/index.html","07d2121b020efbfd513491ac5652530f"],["/tags/Dll/index.html","4c78b5e6c73c5822546c663c2473297e"],["/tags/ECCV/index.html","d12a6258734190c3e0ea103848bf629b"],["/tags/EM算法/index.html","e5ee5334b3af8e2c51e3baccff3b5315"],["/tags/Eolink/index.html","175e93b8bcfb13edf115e0d672e30d24"],["/tags/Gitee/index.html","d92ab3d013a5adf1654fb8f391104822"],["/tags/Go语言/index.html","c8c6fd7ad56e21b1f108b14e29f8f16a"],["/tags/Graph/index.html","f6d85c646d7a3508f43beed84d960378"],["/tags/HTTPS/index.html","ae7a090d702165c44add55d1930fe19d"],["/tags/ITK/index.html","20f378db40888d3b8c5d7a6ada55e1cb"],["/tags/ItkVtkGlue/index.html","b851f82b2c9d3afe88ab553c67fcad07"],["/tags/JMM/index.html","7ea8e28fecf168fb38b785b17b1d5f2a"],["/tags/JVM/index.html","adc584ca1240a27b3c17829c1435978d"],["/tags/Java/index.html","9b0a52ffffeb9633cc179df4d4749c6b"],["/tags/Java/page/2/index.html","56a183139f3311f1292f57147b512965"],["/tags/Java/page/3/index.html","3b8dc5e27ce2652eb12e81efece21726"],["/tags/Java图书/index.html","f70b51145bb7abc24a067bbbd600e94c"],["/tags/Kaggle/index.html","cdb2626bd2215263d7faa6bfbcdb0672"],["/tags/Keras/index.html","310e50815c9d6e9ec21ebf0780008f3c"],["/tags/Linux/index.html","be794f90ad42a9c99b2d9584828b85dd"],["/tags/Linux图书/index.html","d48f18f3ef86a53a3bef9efd29c06bbf"],["/tags/MEPP/index.html","15dcb939dcea7e6af1e6032b17e3c193"],["/tags/Map/index.html","60a3784466c97b2f6347edaf9b8d3459"],["/tags/Matlab/index.html","1c3606d4968c74d87287eb18bd427fbb"],["/tags/MongoDB/index.html","af16b0f3947ac728d5a434a5fac47bb1"],["/tags/MySQL/index.html","23ad8f9ff7b61e6cace90629709b03c7"],["/tags/Parzen窗/index.html","5414bf1100d2d0c1c4f29bf80277da97"],["/tags/PicGo/index.html","790b1b8d9eb1766bb45bc4223cdb6045"],["/tags/Python/index.html","1b6e767bb99002e8d12656ed58d670bd"],["/tags/Python图书/index.html","f21ec1f6f61d068a133b918790c2af24"],["/tags/SPHARM-PDM/index.html","14dbea87652e7efaf7b1d18dc7765775"],["/tags/SVM/index.html","4fa8319d702cb7f5fb8162c06ae779a5"],["/tags/Seata/index.html","25362efced06505cfce80c02bf976b0e"],["/tags/Servlet/index.html","f14b390ba3afbaa40175847f7e5350e1"],["/tags/Sping/index.html","39a2b5efc97f538c25098d326fb53aea"],["/tags/Struts/index.html","e4d2574991b0c9a6afe07ea86f6455a6"],["/tags/TCP-IP/index.html","dca0683df2e941ee277643d18a5d55a1"],["/tags/Ubuntu/index.html","35ad4a11abd30676dea7529073cbebb2"],["/tags/Unet/index.html","b347aab68f46d046e43a06cd1d5084c6"],["/tags/VS/index.html","af17af743c062f5a3f7f48f47c4343a2"],["/tags/VTK/index.html","d1e1f85685850231b9cc14875bd9084a"],["/tags/Windows/index.html","43af3bb01e87a2c23b9da5501e073a36"],["/tags/edit/index.html","ba1b7394e49f368bfc24bca27e9c38ae"],["/tags/hibernate/index.html","13a91d7b0b206158ab13d8712d6275e7"],["/tags/index.html","6e18925be36307a87dddb11523014262"],["/tags/itext/index.html","8da4a293ea0decae59fb73a3d1946c3f"],["/tags/jdk/index.html","b1027751dd0191c3855ff081b14819d1"],["/tags/kmp/index.html","61291df23b3aa987d407291593aaf36d"],["/tags/k最近邻估计/index.html","3619f778d04b8e039824f14c8c1f83c3"],["/tags/lombok/index.html","e805317dd96ddd6e59a7959d722a5416"],["/tags/offer/index.html","504c064510d123483d2d022d02fe7ca9"],["/tags/opencv/index.html","ca98d4ca3d28d3543f0e59cf728dfa8d"],["/tags/pandas/index.html","30621489bb069062d590c58909290408"],["/tags/string/index.html","b92f12fefb143c7d15de0edb2d5d6854"],["/tags/vim/index.html","15289399e39ca8b2d2330734662614bf"],["/tags/vtkPolyData/index.html","06a85a0bb3d6d425b9d2a58aa780d817"],["/tags/web/index.html","c923b95b585c72a6d70e2658ae5c5b6c"],["/tags/xshell/index.html","805e142f6ee70dd7eb5f5a8be9c42075"],["/tags/yeild/index.html","e6a4e24a6140697e4a3db5283bf8217b"],["/tags/互联网/index.html","214ca7f609c22158328a2dccf59c61b5"],["/tags/人工智能/index.html","3532382fcf1b146ffb0f4f114ff78393"],["/tags/体绘制/index.html","115ed36c7909f3be740d7c98180a7225"],["/tags/全卷积网络/index.html","6e1d6d83a3e21e5e4c397fb281052442"],["/tags/公众号/index.html","a353a00ec330f800c45828e2839786a9"],["/tags/内存模型/index.html","8f8b5c2c2df5a4f8a0a24d2dfa6c2416"],["/tags/内推/index.html","c651b1c5809cc6332e2751d6a5b5bead"],["/tags/函数/index.html","7a4592597dcbce48e48ead8c77fad914"],["/tags/分布式/index.html","e9ebcca193def266cfbbdeac238a4ce4"],["/tags/加密/index.html","5e6d639784358c43e9d9d86d70e3fd84"],["/tags/医疗图像/index.html","47a10520a0ababe399d175f11b376a97"],["/tags/博客/index.html","890c97eb625509315d8f53a437390149"],["/tags/图像数据/index.html","78dd43dad8d8da860bf182d0dd5662d7"],["/tags/图谱分割/index.html","ba37a83b288936d052cb3fbfe2253f7a"],["/tags/垃圾回收/index.html","a667e75aa864b0626fa009b38dfb1b66"],["/tags/多线程/index.html","1271417887493a065bc388a5ae3768b5"],["/tags/字符串/index.html","d2b5b2f75950171d8314f4411d8c7a5e"],["/tags/工具/index.html","e1036bae1b7d576f45df63c04d013853"],["/tags/工具/page/2/index.html","2a415a3855b170c4116f1c9122f3d4f4"],["/tags/弹性形变/index.html","b9db31ec560c70238bc6a20e5b3e8129"],["/tags/排序/index.html","1c8dc8d6436900a1fd581312fc2a7556"],["/tags/搜狗/index.html","66e11975ac2accf33d037f95f9f66ad7"],["/tags/操作系统/index.html","0dc89368f640a76e5d03357517b42130"],["/tags/数据库/index.html","e245688b2bd58387121842b8462606a8"],["/tags/数据类型/index.html","4c8b1ebeded64c43831cf1fceab42232"],["/tags/数据结构/index.html","3ad4645533c1acd629c659a339dd0a79"],["/tags/最大似然/index.html","d43472da122b709fd0f35cc7dfc3d741"],["/tags/机器学习/index.html","635e88037930b9ed5c27ba42751e58d1"],["/tags/机器学习/page/2/index.html","a3290ff296670268a5bf327aa9c85586"],["/tags/机器学习/page/3/index.html","01708955170e4f8f40db2f09cecaa1a9"],["/tags/机器学习/page/4/index.html","61d9b729e63cfea75b7037c12e691a99"],["/tags/机器学习/page/5/index.html","a4f2ce7f30643dd93daa50e64601c69e"],["/tags/树/index.html","d5d6eb146c9636844aa94301a903dd2d"],["/tags/框架/index.html","49eac859ee1514984f6123b91277a1ed"],["/tags/求职/index.html","a64033be5df08f71b18062f54731b041"],["/tags/汇编语言/index.html","098ce2703936835f7e682e0d83016818"],["/tags/深度学习/index.html","51cc50407e81990e15eb327029437f63"],["/tags/深度学习/page/2/index.html","f1eadf3c6cb85f92c70fcffe32495ab3"],["/tags/深度学习/page/3/index.html","8af496eca48b0a272a009020fa4d2e8a"],["/tags/深度监督网络/index.html","329b6f547fef6b286626f03c187bdd42"],["/tags/爬虫/index.html","aaa5586a075113b090df67508816f68e"],["/tags/电子书下载/index.html","865fa5f6cfe7168faf9ea1c18cfeccaf"],["/tags/电子书下载/page/2/index.html","5d63fcea530d3a0b90091034c7b4a85b"],["/tags/程序员/index.html","93d33294ab113e5dcde1a9f6e6806129"],["/tags/程序员面试/index.html","93ce0146fed7106cd5e0d57164dceca8"],["/tags/简历/index.html","2050d4610e8ec28370661e32c969e665"],["/tags/算法/index.html","0ee06f54e3b93550e2803eae54b5e0bc"],["/tags/算法/page/2/index.html","8f36cd632d043110580241de591471a1"],["/tags/算法/page/3/index.html","37b1befa77c9e13e0fb642d2531dc31b"],["/tags/线程/index.html","684c377713f799bbb2b924a56eeca918"],["/tags/结构学习/index.html","e2c813b5b16a11e4d2d5d758c372e02e"],["/tags/编程/index.html","9d610d74a6707f721817acdb4bd0e0b5"],["/tags/网站/index.html","76704dcc0c52f17f7842bfa5073c664d"],["/tags/网站/page/2/index.html","d82d30173fad838e5a7a9745d94e3b0d"],["/tags/网络/index.html","db40c1ab365df8f9f17907cfc1f4c6af"],["/tags/网络原理/index.html","97c9265a727601b01b73371521afa9fc"],["/tags/肝脏分割/index.html","725c3e389496f4c718391a994eef252f"],["/tags/计算机/index.html","4f7f4cb36024b6835513692d89484ee1"],["/tags/计算机专业/index.html","127fd3209e8a7a645e015d4c546f0c20"],["/tags/计算机网络/index.html","dfbaea885c622636695f28f42045ffd7"],["/tags/设计模式/index.html","f6f5c7e6d589373ea273b9989217b310"],["/tags/贝叶斯/index.html","9e0d8787ece356453feb8873ac948f54"],["/tags/迁移学习/index.html","d270a1c2235ae5f99a89ff5237a262b1"],["/tags/面试/index.html","83c096b2ef04d9b698ecd1de26fa707a"],["/the-way-of-pragram/index.html","6c507ae5682ef3bb8c6251404525998b"],["/untiypro XL安装/index.html","2f518032470b25d8a0acc2e09f8f0fdc"],["/video-websites/index.html","1bf81812cfc2040c5c50446b4bd52e22"],["/wechat-fans/index.html","631fd5419be54ae7f1458cd555242a79"],["/window-run-VTK/index.html","5dd48fd4b36d20a52b44c6e1468c1289"],["/xshell-connect-Linux/index.html","0e58840edc80f8535e3db1b535e2689d"],["/‌Accessing-the-Open-Internet/index.html","7b475e21c91d01e062a7413848f4eee2"],["/《Java高并发编程详解》，去大厂必看！/index.html","51282a22ea8ec6fb8a2e0de3f6ee91e4"],["/一分钟没了 1.5W 。。。/index.html","195aef760456bd6f592d41ea8a490cca"],["/一条高产爆款内容生产线/index.html","4a4e1cb0354234a49502ed24e36cef5c"],["/为高考学子推荐的六个就业前景广阔的专业/index.html","a205e5f8b50dbfeb50a6c4bcb96299a2"],["/互联网赚钱机器---社群/index.html","9e4c8fd51d2fbedf7b8e53d9ec6788a3"],["/你们常用的工作方法和思考方式是什么？/index.html","2be6bba5e5338349804413dd0854b1ee"],["/关于环境配置的一些事/index.html","28f94998c463cd83ff2ad4ce59614465"],["/准备了19w！搞事/index.html","3cbfcae18c29f8990a2a9a919783fe70"],["/几个很重要的感悟/index.html","fe9d243092cb647302569b92162d7596"],["/分割ROI篇/index.html","ebf066aa2c64f168e013161128943cba"],["/分割精度说明/index.html","1975fd70af723489c7956c7d5357bf1b"],["/分块程序执行/index.html","3f0b869a054d04ecd40816ac3c23c342"],["/加班公司黑名单！！！/index.html","a99b6fcf0a3d58873d98b5ab58cf755c"],["/卧槽，上知乎热搜了！/index.html","36536d7877fe47d2763a11999e1420ed"],["/卧槽，我的小破站爆了！/index.html","51bcfdc766344bea275cd32dea5ca384"],["/卧槽，我被盗版了/index.html","3ffb27676d90d4ff010ef58d3e402f0b"],["/卧槽，还有985大学在大一上C语言课？？/index.html","8f93301fbc81857794453c5d320b01f3"],["/历年微软面试中出现的leetcode算法题/index.html","dd397f6af2e46b11f75aebe3465c87f2"],["/去特斯拉试车了/index.html","32ed9e0f0dc97d9d13f78cc5b1e33974"],["/吃苦的三种境界/index.html","3f15c1077b4576ceaf80c218e3c6f5ef"],["/哪本书适合推荐给 Java 初学者？/index.html","4a5d276c1eeb5dc54db5c6adeda0c3c3"],["/哪本入门级的学习数据库的书最值得推荐？/index.html","54efe1f54b4975c2917856a5b7a21748"],["/国内外常用的AIGC模型/index.html","85bd5fbc724faa1d23a36eace075ccc0"],["/国庆假期/index.html","c64b1e4937b674a9f040502af694a70d"],["/图谱程序字典/index.html","c5341d18338e9c67af7f122f8dcecedf"],["/图谱训练与分割/index.html","f748cfe9b5c62d7b5f447dcc5fdb04b4"],["/宣布一件大事/index.html","184c100285440a4c95d8c5644c4d495d"],["/小鹏P7i试驾体验/index.html","e1aa1e3ba7470dd1e62477f6608f6582"],["/微信PC版3.3.0内测更新，电脑可以刷朋友圈了/index.html","8f93bb75ad2c320680881492dfc72f75"],["/怎么更快的赚钱？/index.html","a9147e54e61cde0a62c329349e6f9e9b"],["/我毕业了/index.html","626ae21f4cc45603167e44dceffe1859"],["/我！真！的！找到了！爱上学习！的方法！/index.html","4f9f8aa80cdd3a44c659a6dd96d5eeda"],["/户口的意义/index.html","6443808ba07910f5a5f12eacd3cab841"],["/推荐两本经典算法书/index.html","8fb17749bbc9ccc2029c44b2f3ca119a"],["/推荐几个在线学习SQL的网站！/index.html","4cdbe4dd4fe81cd0eef083f4b6c517fa"],["/搞了一个程序员成长晋级社群！/index.html","c064864a662be6e48e92756ab0050609"],["/摘抄/index.html","02cc112f331d80dec467ef355c888493"],["/暴跌30心态崩了/index.html","03e950770c7f674378a64cc2966b09a7"],["/最近很火的ChatGPT到底该怎么玩？/index.html","5d9a4d9fc05d760ec333f599ebcbebb6"],["/有哪些好看的日历可以买？/index.html","8cc58dd91a7a0e05979dd0b1d5a4bce2"],["/服务器有啥用/index.html","a83d554c8494eb0d414114e9c7569e1b"],["/来长沙了！/index.html","a18a9318c2ea004f4fc7f01b158a5dfd"],["/校招污点公司名单/index.html","808aff1f94f1da7fa5efb178df27178f"],["/梭哈200多万/index.html","46588e37323f89f059c273ad56ecaa45"],["/梯形图入门/index.html","1dadad649bf1369528c8cdcf6738743d"],["/橙心优选，凉凉了！/index.html","506af0bf8fc6acade9dbd90a7cab9560"],["/比亚迪汉试驾体验/index.html","8773726d87d3a64590c1a656bb31e93d"],["/清华转学成电，真的牛逼！/index.html","7a004ffc9d698f9996b87a22a35dd22f"],["/滴滴程序员被亲戚鄙视：年薪八十万还不如二本教书的/index.html","41a4ff78b5b490a42944284c89c00bfe"],["/社群！/index.html","52c9d7aab373cf9dcddfa75a5e20e0b0"],["/科学上网之VPN篇/index.html","747e89cb9b3f01637088446e5d20aacd"],["/程序员必备的几个技能！看完你也是大神/index.html","3b73250eec2174e31a5b0a2b6499ac79"],["/程序员绕不去的槛，Linux！！！/index.html","1dabc70fce113840837468c950718a3d"],["/蔚来ET5试驾体验/index.html","fe0bd63625a153118e0df033be64fb86"],["/蔚来，牛逼！/index.html","b91f4394885585cee72a611c289ce99b"],["/被录取了/index.html","d8c9c3bd4c9f0bf026c142c2a43231b0"],["/被找事了！/index.html","70cc024493264aa0781efb361702677a"],["/被拉黑了。。。/index.html","f33324719cec489dfaf98080b8273d18"],["/被车撞了！/index.html","d8c98920d46b4a77142d18cc53555909"],["/该如何选购固态硬盘？/index.html","5b9b4ab02affd6f8a311cdcdaba5033b"],["/这本书一定要看！/index.html","bb9281b2f22353b0a8ea5d477ad0cf15"],["/选Java还是C++？/index.html","ac914cb7ba1214667a9c39918a0a78f5"],["/那些让你起飞的计算机基础知识/index.html","a8b6e3e5d5fd5d98ff51d1e0538097b1"],["/靠这几本算法书，成功拿下大厂offer！/index.html","93df2645614e48b1adf236767c347c37"]];
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
