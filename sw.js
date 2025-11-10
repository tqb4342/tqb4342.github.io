/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/0010-city/index.html","b2802f8393a27b6c6e596bfe4dd54c73"],["/10-algorithm-book/index.html","e422d46995332ed502f58abb26f36d1e"],["/10-website/index.html","c67129e070213e2e78d0336f2983d77a"],["/100万的小目标/index.html","2f559b7f987338f6712f46a7377cc1f8"],["/10w+YYDS！/index.html","da7385cfd25746590a67d5f647e5c5c4"],["/12-technical-tutorial-sites/index.html","b8f6a2b31875f25addd6b51307d211d4"],["/2 6 岁 了/index.html","10fa74605e010244523d39275ad5df27"],["/200万，啪，没了。。。。/index.html","ae0dca176a7a7ed8b475a61678b75c7c"],["/2018ECCV-Paper-DL/index.html","089ed443c6b26bc9264b580f72308336"],["/2021年固态硬盘选购最新攻略（小白避坑指南）/index.html","9b9cb02a6705640b9e38f8d5a9089ba3"],["/2021机械键盘推荐/index.html","feb798d0968037c91693f7fdb743d828"],["/2025-07-15/index.html","91c7b384c9a48d5eb7747e8e37d3b011"],["/27岁了/index.html","7a1fd716c16699cd3d3a0cdd4a401f4e"],["/3D-Convolutional-Neural-Networks-for-Human-Action-Recognition/index.html","bb8ce2994b6d283a5fcee9f5e223b4e4"],["/3D-Deeply-Supervised-Network-for-Automatic-Liver-Segmentation-from-CT-Volumes/index.html","dd7237ff8d17b19e044d82635ed331b2"],["/3D-Unet-Experiment-notes/index.html","8e7e2bde8a49806d4cae5c80d1f00c1e"],["/4-Software/index.html","4284023cb460b92e29596f7627cf2c75"],["/6-website/index.html","354894ba99b5816c08f1322945feaaa2"],["/7-terminal-tools/index.html","0836f373efd0c672224d5ef78ff8b3be"],["/AIGC中典型的深度学习网络/index.html","69406746709ff8fa6ac8ccba7e1774c4"],["/Agency-model/index.html","567dac151f0aa27396144a97319f5cce"],["/Algorithm-brush-notes/index.html","6d5c02a3f47441da5a78aa081d968e9f"],["/Ali-recruits/index.html","e0393c8887dd958019414a97262ba0d4"],["/Android-open-internet/index.html","52e09f82355efa6486f04ddd2e41994f"],["/Appearance-mode/index.html","5bae959817be215f75374a46d4fd6a2f"],["/Backtracking/index.html","6de3ea5ce6cea22adc81a0034efa2b5e"],["/Baidu-Sao-operation/index.html","8df7d0654dab2053d6542906b2498eab"],["/Batch-Normalization/index.html","d0520c3e74e6c0015c80b4890a214a93"],["/Best-AI-tools/index.html","36a00d988b356ec12111af25d484ed28"],["/Bias-and-Variance/index.html","49fb21dd10b193f6a598336f594dac6a"],["/Binary-tree-traversal/index.html","6603ffea3171ad06aa9bef4a5c8548c2"],["/Branch-and-bound/index.html","17ad5aeb0b7fcb42e16f58e556c9c0ad"],["/Buying-computer-for-the-first-time/index.html","8739a3625ea62beea4fe1bb0b07254a6"],["/B站向北邮道歉！/index.html","25af55381210a7a2fe53cd05d9f88ebf"],["/C++-string-function/index.html","9e659079bea17fd8df0f53925df36000"],["/C-Java-DevelopTools/index.html","adf5fd7da6b13c2acfad190a0b8c43d6"],["/CS-Classic-Books/index.html","1e5777f6c2ffe7234dcaf0627df71471"],["/CS-network/index.html","2b6c6b7beb1176abd7623af941b9698a"],["/CSBook001/index.html","dc4ce0f9e6dcfd6cd412781b43c20766"],["/CSBook002/index.html","d634ff5c73da7d2b6fc369a18992a44e"],["/CSBook003/index.html","5c7e57ed33bd963c5ecf72e8b4c78bb2"],["/CSBook004/index.html","98f5f65e64f600073cfea6d6f5cda423"],["/CSBook005/index.html","d3c68ca72d0506493cd2acb42f2032cc"],["/CSBook006/index.html","30b00e70d1bebb7c8eaa25bde1cceaa7"],["/CSBook007/index.html","9179ac04f6866ef41c26f2554743ff78"],["/CSBook008/index.html","80e94f88ff02571dd19f17e64ed3d292"],["/CSBook009/index.html","0e3eee6921799741ef336559c45503be"],["/CSBook010/index.html","72c419ab3fe41fdf72d0be4bcdd58693"],["/CSBook011/index.html","f617e124cdd14d44d8c6aecf63d29b68"],["/CSBook012/index.html","fe115e43b4cc7b1bfe26ae67f1933962"],["/Changsha-really-fragrant/index.html","0bcf14509995892c34b3f8b3b1eeee2d"],["/ChatGPT-VPN/index.html","18fe9dfdc7f0d66b0a527eb4e734cec6"],["/ChatGPT/index.html","22acd385588cdd614d687286698c69db"],["/ChatGPT！王炸级更新！！！/index.html","2951bb5ee01c482cd8b349427fd2988a"],["/Chrome-crx/index.html","710d50138a52511b9edee0ccb69bb424"],["/Computer-Classic-Books/index.html","3fde8fd21a2022b4302ce2c24e57626d"],["/Computer-for-another-major/index.html","45ba97ea8a33bab4ab76b138d56bb487"],["/Conditional-confrontation-network/index.html","c6eec5c67acbac308dff9295b53a6616"],["/DNN/index.html","207626b805d9475e71282a2190361c21"],["/DSN-segmentation-liver-experiment-summary/index.html","14086f760ab5d6b27344cf3905907134"],["/Data-enhancement-elastic-deformation/index.html","c9f3cda9f3b7006b5cb8e401abac88e6"],["/Decorative-pattern/index.html","90e3599b2446632399a52498e20677d8"],["/Deep-Learning/index.html","3c32b8fe71e8788c2b6ad0f6da13d269"],["/Deep-learning-and-medical-image-analysis/index.html","fd992f4c299def5f064d77e31187c39c"],["/Deeply-Supervised-Nets/index.html","40fd42f8529cc48b5b3a322ca73f009b"],["/Deformation-model-based-sparse-representation/index.html","f09462f05887e42bf959e1c7fde90161"],["/Discriminative-and-Generative-model/index.html","85bfb2946bf5abe147608338f28de80d"],["/Distributed-transaction/index.html","74e7ca24bea9332f15f85515953d0964"],["/Divide-and-conquer-algorithm/index.html","1a0327dd84b1376bddabefa26eaece1a"],["/Dll/index.html","33db8c0f7ff46762389f86c1680e7cb3"],["/Dynamic-programming-algorithm/index.html","5e6601264f834ad0f00762d795ae1e86"],["/E-book-download-commonly-used-by-programmers/index.html","f67f80ca68632af7c28663fceb5761ab"],["/EditPlus软件的安装、激活和配置过程分享/index.html","036725792e284a7e79af6162bde3cb51"],["/Eight-sorting-algorithms/index.html","36f92becbdbf49cde7073730d06e0be3"],["/Encryption-Algorithm/index.html","081df0e0d571162e4b6e4ed9ff9a5d78"],["/Eolink/index.html","1f7586e3152cc1798e4d4af77de002ee"],["/Factory-and-strategy-mode/index.html","49980121c40a8470229e19fbecce65ed"],["/Foreign-technology-blog-community/index.html","cecf8fbbbe5923184173f27e4311754a"],["/Functional-model/index.html","58fb00f9a031bd2c463a8750d762cd85"],["/Fund-type/index.html","5c77f279643c4e8f439ee2292f6518cd"],["/GPU-medical-image-processing/index.html","df4a37749981abffab297e83545690d6"],["/Generative-Model-of-Unsupervised-Learning/index.html","9a5ea461218464dd4152824d203f6ab3"],["/Git-Learning/index.html","ab9ce673429025414664fe833d8a9882"],["/GitHub-2FA/index.html","3a21da48a0d1893a89d9954708ccc1ce"],["/GitHub万赞，程序员必看操作系统总结！/index.html","056425531961533c76be5003375ce17b"],["/Golang-book-recommend/index.html","02b899d4eb8aafe828013ba4dc6b0f92"],["/Golang-learning/index.html","a1dea2618a883d2d67741166cb8e7853"],["/Gradient-descent-optimization/index.html","d31790f5d1252648db5fd2d4c53d1fd9"],["/Greedy-Algorithm/index.html","78384d1a0c354a1fd96a97d81cdbc660"],["/HK-bank/index.html","bed74fdda920e132259f490b0d7e22d1"],["/Head-to-head/index.html","191054c669c231abce8c1145ea59c74f"],["/HistCite-Pro/index.html","ca281aafe4033e078236b636930bfad1"],["/How-does-the-program-run/index.html","31e39e26431f99de4c9e583b0a01c6e4"],["/How-to-judge-whether-technologyisreliable/index.html","7199d18fbb56d65907e684983bf75748"],["/How-to-learn-design-patterns/index.html","73329cbc93f4cb8c21b9743fd0afed14"],["/How-to-learn-design-patterns？/index.html","61d889085ee1d377aca4aa4733789e56"],["/How-to-teach-yourself-programming/index.html","1802b05b3471822598e1df7ddbead08a"],["/How2learn-Python？/index.html","d9962913203c65b66f6de28f74b6049b"],["/IDEA-shortcut-key/index.html","b76c22483e0809f90360cfd883873045"],["/IT-interview-basic/index.html","9975a97957b84febfae00eeef762048f"],["/ITK-VS-install/index.html","787b220aa22b5055de9a32aae2a85b55"],["/ITK-VTK-ItkVtkGlue/index.html","fabdac749b5c002fbf411080024ffef7"],["/Image-Processing-Journal/index.html","a6c9a975b4c994a708c6e80de305a1ea"],["/Image-processing-plus-noise/index.html","1c063acf3b0a092ef8763e87faa0c12b"],["/Inception-Going-Deeper-with-Convolution/index.html","8218a4b1b0920f3f35c843105e3799f3"],["/Java-GC/index.html","d7ef7d74c3cc29a7bbffaedb696f6215"],["/Java-Servlet/index.html","9b74a8f7b36c6fe2dcb794f23985d732"],["/Java-array-and-collection-sorting/index.html","e2f3d8e5170e0489fb7697d73835eff4"],["/Java-development-tools/index.html","633060eec5e7318823ef64c81381c37c"],["/Java-eight-data-types/index.html","f4d81d8c578fe6eb63ae6e59305fd07e"],["/Java-interview01/index.html","9fce32300c3fac852bc96be87156d3ce"],["/Java-interview02/index.html","fbeb06bb2d9682c0ee2398968f6c9f96"],["/Java-interview03/index.html","4cadc9a743a4de900fe6a4576285c085"],["/Java-learing-map/index.html","ad54c6f421e1077ddd4b7bc0a181d3c5"],["/Java-learning-route-map/index.html","8906cee4f0964730e75522ea064dd688"],["/Java-memory-area/index.html","c145563783ac05ed41aee70ae04863ad"],["/Java-memory-model/index.html","0a56b477775402b183a885e5ecb48bd9"],["/Java-multithreaded-learning/index.html","b1b4674a9d4b4ad3bd4cd433de98fc39"],["/Java-project/index.html","5fcb767cc93c6d1943b6eab12ffeb83a"],["/JavaWeb-Chinese-Garbled/index.html","c9a2e793a444f35d122f6e6d65a86c88"],["/Java还是C++？/index.html","a5b55699a3aca163fa17e70f80725075"],["/Kaggle5-step-guide/index.html","a650889c80d526feada60d19bed918d4"],["/Knowledge-points-of-Java-garbage-collection/index.html","49cfcd50e41bd752a50baea4b9f50bf2"],["/Layoffs-and-Hiring/index.html","610f3e958066e5479806a8c205cceb3b"],["/Linear-regression-of-machine-learning/index.html","e6503fa2e90953753c182cc049950197"],["/Linux-Compile-C/index.html","8ad215b8497145ae3a53ad241d0b078a"],["/Linux-ITK/index.html","0bb4c3b3ab56e2b3b908aa00693364fe"],["/Liver-segmentation-of-sparse-components/index.html","c049df34be5677da209321ca6076f18e"],["/ML-EBook-paper/index.html","a185f3e097847cf25eae0673d693b7c3"],["/Map-uses-multiple-maps/index.html","d157dfdf873b0fcd6fa7cfe7fb0abc3c"],["/Matlab-Graph-cut/index.html","bb71d6853f8fdb923f304e72ba3a11fb"],["/Maximum-Likelihood-to-EM-algorithm/index.html","7c373a30d0a158d688c4e5d51078eadd"],["/Mean filter and median filter denoising/index.html","0ff9e1df6771d534b5a641a8257fd758"],["/Medical-Data-for-Machine-Learning/index.html","68a29c83a52fa6ba487e9f5696294f0a"],["/Medical-image-analysis-deep-learning/index.html","d670b04721c1a9867dd691bacd3b99da"],["/Medical-scan-image-processing/index.html","7c0b75d63a71a7d20c49f982091d59f2"],["/Merge-sort-algorithm/index.html","05c318b5d2510302bfaac00c43122b32"],["/Monthly-income-2W/index.html","bf971aedecedf35195d3f76b7a92ef46"],["/Mysql-database/index.html","1b31bfcd0bce90df0f29b6cee0c2c08a"],["/Neighbor-Embedding/index.html","befcb3394d56b5bb98d69ad32f3074cf"],["/Neighborhood-approximate-random-forest/index.html","a537f53a33f54864e2033984cddde0f8"],["/Net-and-official-documents/index.html","0de8016f5a4d51480f099c8010e586d4"],["/Netflix-VPN/index.html","b27f04c455bb2c71037e6ab7b2df5019"],["/Network-principle/index.html","e015b37e998d09bd900c344de9646067"],["/New-Hong-Kong-stocks/index.html","064cc092fbe4ef5773e4082db2357632"],["/Nice-to-meet-you/index.html","57eb5a968578b0855c6af63cadaf818b"],["/OS-processes-threads/index.html","f9d0f30d8bfe5546347bf85bb0cdae08"],["/OS-run-environment/index.html","7dbfbc54a0c5b5e8ff53f5a9b0a348e6"],["/Open-Internet/index.html","97e80cd149ac1ed62c8269e4d76c98f6"],["/Open-Internet2/index.html","855d9122998d532e822b963ac250e192"],["/Open-source-community-and-rewriting-website/index.html","c5ed6d0ebb81a879d805364a27692bf7"],["/Panoramic-image-stitching-based-on-SIFT-features/index.html","b28920d62dda966993a84dcc6bb79c88"],["/Parzen-and-KNE/index.html","413143c9f5f2ae7ec74976611524915f"],["/Personal-technology-blog-site/index.html","0f612290a398468e81fff24a6d297bca"],["/PicGo-Gitee/index.html","610124df6bed10aeb8ef0e343c1ef68e"],["/Programmer-treasure-chest/index.html","e8a620dd948a9b0261ee2a9fca592711"],["/Prototype-mode/index.html","e5a46db0b8df55e5030a93cab3ec4c8b"],["/Python-base/index.html","551adc458994c9de18298e70af8d34b1"],["/Python-crawler/index.html","7a9797326e7f314ac13baa2b5c2606d3"],["/Resume-revision-suggestions/index.html","2a7e88bf1e6834d8f9d66f7c6a63237c"],["/SEO01/index.html","13b98d94e9b6183e50be87d1a1f9d998"],["/SEO02/index.html","d4840ea46c35cf762f19346fc5bea1a4"],["/SPHARMPDM-MEPP/index.html","ad93794d7dfc7c2495b64f760fc8146f"],["/SVM/index.html","dd9d857c7d3c3141c4921743d6bbce14"],["/Semi-supervised-learning/index.html","8e35023325a22c29ddf7022c6855b5d3"],["/Sequential-model/index.html","d3c39d4076a660d62f6651185c8d3eae"],["/Shape-Based-Human-Detection-and-Segmentation-via-Hierarchical-Part-TemplateMatching/index.html","647587f09fda19970e0e2546e761d360"],["/Spring-basics/index.html","8775fe7df2ace21244da460288478adc"],["/Spring-integrates-hibernate-Struts/index.html","cc8b1a9f8f280cd41e90647fd433e0b6"],["/Structure-learning/index.html","a7a54f6e2c64485ee3318e31728b8dee"],["/Suggestions-for-self-study-of-computers/index.html","d8465a84fc85f358bf0612289375938b"],["/Summaryof-HongKongStock-Account-Opening-Links/index.html","f6d2b9a0ba179441b2d1fe165fd3708a"],["/TCPIP-detailed/index.html","9af546087bdfdc6a42487264f80cd533"],["/Telegram-VPN/index.html","bf44896a64c107ad742550b2b00f9573"],["/The-essence-of-shopping-festival/index.html","c1e651d419fcb7ac75195ba26a2f9dd7"],["/The-most-important-investment-in-life/index.html","208cae3995379958766220271ec0545f"],["/The-most-successful-nvestment/index.html","4b4ab830520a8d6b95e3c419a37f2ef5"],["/Transfer-Learning/index.html","7f72d7debfc23f58692832cf473c8d10"],["/Transfer-to-computer-major/index.html","ce48652eaaf36b21a9749a0c12458557"],["/UNet-Convolutional-Networks-for-Biomedical-Image-Segmentation/index.html","166ee3cbb1ab7000d0fc938a8c2bc0ba"],["/URL-DNS/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/Ubuntu-install-sougou/index.html","df8a5d8dc27ae4fe98fb883e227975f7"],["/Understanding-of-paying-for-knowledge/index.html","23bf321283693616b174a3d11fd14990"],["/Unsupervised-Learning-Linear-Dimension-Reduction/index.html","5518572068a82fd781ecac15822cb498"],["/VPN2025/index.html","962f49fdaf7ee02160fdaf9374fa542d"],["/VTK01/index.html","7c80f1a786f03ed6771d982d0487b7c4"],["/VTK02/index.html","43bd5a4c5b8f948365e4a235e38a6df8"],["/VTK03/index.html","cbb479a9fd9dca64c776751f4decae4a"],["/VTKRead-write/index.html","c3c7df4c55033a9a83592a8f821f33cb"],["/We-are-all-good-kids/index.html","58a84367158a52834d8f2871ec4d9e79"],["/WeChat-80/index.html","71625b88f5ba1d57710019a25f1e0fd6"],["/WeChat-red-envelope-cover/index.html","483a4b5db59a10f8e2efce46bb47488d"],["/What-is-crawler/index.html","1ae09625cafa0691220db6a02d4e305e"],["/Win-OpenInternet/index.html","bd438c8e2ba3750f30f3aa3abe7e056a"],["/Windows11-2kfans/index.html","84370526a4ed09b9bfedd10dcf724494"],["/Word-Embedding/index.html","de341f7e0adfa7077f9f7fb8d9b88063"],["/YuanShikai-and-his-Beiyang/index.html","5f5258e6585e27a1a659dc73009de15a"],["/Zero-copy/index.html","ec363fbbcce481b9d1fddb8d1c77ea0e"],["/about-keras-model/index.html","8c9ab34e542133718204c6af3acd4795"],["/algorithm/index.html","99da7bd00fd1214a3eb266f6ba87fc3e"],["/alibaba-Java/index.html","226e016a65658afc78e3043a83dcd626"],["/archives/2020/01/index.html","6503b490058443bc2a2e781db4705e0b"],["/archives/2020/09/index.html","e79bbc2b0cfe4307a1b475db9807e873"],["/archives/2020/10/index.html","930b76f7bc21f81380bc240d46f65143"],["/archives/2020/11/index.html","1df0cedafae9c86f530d26aab874038c"],["/archives/2020/11/page/2/index.html","d708fe5f19aa3fdaad5406ea16e446a6"],["/archives/2020/11/page/3/index.html","277292083fac89cf648356d47c24ad11"],["/archives/2020/11/page/4/index.html","b52a93eb1dd7c7cad46f43bd4e374091"],["/archives/2020/11/page/5/index.html","a3dced8abcf89b1f4f958749c7df6909"],["/archives/2020/11/page/6/index.html","da8fe5f30ebbdf6c6b4485362328b77d"],["/archives/2020/12/index.html","24b8d86ecbec712f1915d38ecd07c583"],["/archives/2020/12/page/2/index.html","48bc60e677818eb75834eebcdc41c1f6"],["/archives/2020/12/page/3/index.html","1b8307627e62970fffdace652a5fe46e"],["/archives/2020/12/page/4/index.html","d2c14b5126735cb70d004f686279c711"],["/archives/2020/12/page/5/index.html","4493287f21ba4bff16e470f0a9783181"],["/archives/2020/12/page/6/index.html","87bca0a6f62659852b6c6efe00b8e0e1"],["/archives/2020/12/page/7/index.html","53dbf9a36e319c779fe948dc76908a14"],["/archives/2020/12/page/8/index.html","205c41dee5abaa8d24eee8f6ac7ca2f5"],["/archives/2020/index.html","1b91a921fd4b7cdc11395a676116cb9c"],["/archives/2020/page/10/index.html","d7031134e6cc5474d055df82daf8c624"],["/archives/2020/page/11/index.html","e5fb1edc62b3d00c36542d9237b855df"],["/archives/2020/page/12/index.html","a215f2508d046cb0e37f7d3375d3be36"],["/archives/2020/page/13/index.html","ded22869fdbeebbaa5bcc391aba486b7"],["/archives/2020/page/14/index.html","ec9a6b092c007e84d43fb20ed044f853"],["/archives/2020/page/2/index.html","8b2664271e029fadf04a6c82a96e414e"],["/archives/2020/page/3/index.html","1263ce12307bba9ad0a8c32b8bb42566"],["/archives/2020/page/4/index.html","49293c205537b54c3fdf6c9a64cb4776"],["/archives/2020/page/5/index.html","3b0c33cb3dc69a5b22f21da0dd45b388"],["/archives/2020/page/6/index.html","6738232ed5cfd616f2861a64832ee075"],["/archives/2020/page/7/index.html","0879a6cf15a762fa69015a8061a085bd"],["/archives/2020/page/8/index.html","628fd8c0f075e394c90dbc31ba49b4bb"],["/archives/2020/page/9/index.html","4c217edf7d9d17f5f41ec2c9cdc2649c"],["/archives/2021/01/index.html","c1f8c07028d5cdd72e0c32a21f988069"],["/archives/2021/01/page/2/index.html","eb5c68a453cab534cd6032ecb3afeea5"],["/archives/2021/01/page/3/index.html","8aecade67c3b959001a66f8423310f1c"],["/archives/2021/02/index.html","97c4452a10dbdaf937249af89a802116"],["/archives/2021/03/index.html","fbef2d2853d2e3d132e8aa5a8c335ecf"],["/archives/2021/03/page/2/index.html","3a4343ae45ef7d0835b3cb3727edac4f"],["/archives/2021/04/index.html","b28b1aab2d6b8bfb25c154f69ac9e1dc"],["/archives/2021/05/index.html","c02ea5faff6207fae2bdf68d1391a1e3"],["/archives/2021/06/index.html","80ac532416261146d32d9b02e5e2b1e8"],["/archives/2021/07/index.html","58902d7cdbf08c58a0494eea3762ef2e"],["/archives/2021/08/index.html","52f6b3ac0fec294c097cdb2f7c621fa9"],["/archives/2021/09/index.html","e2ba923f73afcc9308a3a1c20a4867e3"],["/archives/2021/10/index.html","330c98eb8ab59445f99690a858756e5b"],["/archives/2021/11/index.html","b4cd15c64e349da2037584ce743a0532"],["/archives/2021/12/index.html","5c3a281c4a6bde2f6c6235aa7eb77e91"],["/archives/2021/index.html","feb7954e0c9306395e0cfc1c8dd0ca3d"],["/archives/2021/page/10/index.html","2c5c61b15d82c9d791c96a57fa2cb7cf"],["/archives/2021/page/11/index.html","59fa716341b7fcdf8d10a0b0449900fc"],["/archives/2021/page/2/index.html","4a839cc37411cb433a019d8eb12de050"],["/archives/2021/page/3/index.html","fef324e42e29cf9727d4f7565bd20c74"],["/archives/2021/page/4/index.html","dd71e470d8738d0e7ca79d47c0d5ff4c"],["/archives/2021/page/5/index.html","c940f04a08f7dc9c7b0e3087511edc62"],["/archives/2021/page/6/index.html","ca82596890b5b462b9140db9a339be79"],["/archives/2021/page/7/index.html","b4fe91a832f91b93741d2e4c9ec04ceb"],["/archives/2021/page/8/index.html","553e3b941c1f16dd62681e29d59fb82c"],["/archives/2021/page/9/index.html","3716ed3c3b9716bdd7921cc61c5fe729"],["/archives/2022/01/index.html","98819b3231f2743f3de8ad3412a71c42"],["/archives/2022/02/index.html","a0ca09580d279cbdd9556c4bbd8f2039"],["/archives/2022/04/index.html","435f3aa1a22725623f61df02598a1337"],["/archives/2022/05/index.html","8fac94a304ffa98c01533f24508335cc"],["/archives/2022/12/index.html","b636b61a1cb139f7a54cb135dd971e25"],["/archives/2022/index.html","8a2ee399a5714410d5804d060a12732d"],["/archives/2023/01/index.html","7a4d072c5c46638fa462c00ee7b401ae"],["/archives/2023/02/index.html","946fb13f8062195b97f79c98ba77d880"],["/archives/2023/03/index.html","44796b879c82bdb45c475f5f949e58fd"],["/archives/2023/04/index.html","603e50e5fece20be381ffd649d135a17"],["/archives/2023/06/index.html","2f8b231c4fe4cae7269c28dc59bf6715"],["/archives/2023/08/index.html","f759b908a39bf9cc3178dd3622955c1b"],["/archives/2023/10/index.html","00a596fe5deca85e55867b879976a6fb"],["/archives/2023/index.html","c54d3b6509fe36f3a78c72c114daa119"],["/archives/2023/page/2/index.html","55878170687375ae0726a9054bec6fd9"],["/archives/2023/page/3/index.html","736f4ef0085008d38e099ea209489e1c"],["/archives/2024/01/index.html","1e11c4f7974fecce5ea3197db6f93e4c"],["/archives/2024/02/index.html","eff8595d99fcbc5fb539a028f7755831"],["/archives/2024/index.html","3ce1813263eda873f096723b146a0a39"],["/archives/2025/06/index.html","dd9bd52889e70e98d25a57324157ceb4"],["/archives/2025/07/index.html","74bbfcfba0345404fe3ed96400285c63"],["/archives/2025/08/index.html","4f71e5fcf54d50eec99958ec7f1988b5"],["/archives/2025/09/index.html","d1785be07b468636f02708c3fd35e288"],["/archives/2025/10/index.html","ec9fbc4b947c749776850ff84adb0ec2"],["/archives/2025/11/index.html","b5e98a6c640bcef1e821e21a8eac41fb"],["/archives/2025/index.html","1ef9cc5baf0f8a50ae3e2204b84b86ce"],["/archives/2025/page/2/index.html","dfcdd8f36d9debd4f98de6c4bce3025c"],["/archives/2025/page/3/index.html","6e5d1861897736fe42e70abd8165ec81"],["/archives/2028/02/index.html","319e7945f448b5d490ea142b836f8fbb"],["/archives/2028/index.html","efcc3b40059753fc97cbf84b99ba02d8"],["/archives/index.html","2f2ac36ceebdbe33c7a1aaed9cb94c67"],["/archives/page/10/index.html","ebc6abc6720db4f766a5769e9124f062"],["/archives/page/11/index.html","c24655a1ae29a12a6d953173ab712670"],["/archives/page/12/index.html","6e51e082f787e877a3da020f87442a8f"],["/archives/page/13/index.html","fe89cce7ad9a41944d77e0f96f8a2afd"],["/archives/page/14/index.html","c4038aa87617e1a60604a20f2de0c5e0"],["/archives/page/15/index.html","16d1d264d0c323aa8d148f2e506504de"],["/archives/page/16/index.html","7d08eaedf7b75b40895a48c45c82ef16"],["/archives/page/17/index.html","7c11676ff68f878e67b50dd636227529"],["/archives/page/18/index.html","d2b4f0c622ddc3d8f7d98bd3409de47b"],["/archives/page/19/index.html","10eb163ff94be10e0d33cde448244878"],["/archives/page/2/index.html","98faa2a9aafb39d3f89ccec04d38ada2"],["/archives/page/20/index.html","780c4959f1bdf25fb144e6188e4fed89"],["/archives/page/21/index.html","e119217c8304bf32ceb6e21d0ca48b79"],["/archives/page/22/index.html","c499415b6ac9bbaecf406c1a3eb32ed4"],["/archives/page/23/index.html","8ab16803ebe0cc7b10418536103b2045"],["/archives/page/24/index.html","249f9320d0599b7c79256a8c98a3aa10"],["/archives/page/25/index.html","6ecf02b4e5e266ebb03a4fd0f384cffa"],["/archives/page/26/index.html","f0f8dc99bfcb98578d043167a96b00da"],["/archives/page/27/index.html","b7c9d4db192955c01d36c73deb97e2a7"],["/archives/page/28/index.html","984b48cacd4a6a66d435cf53ea9563b9"],["/archives/page/29/index.html","8a013bf27435d33013e79f39a8924c48"],["/archives/page/3/index.html","523a596731d4e3764f5b7c4ed840367d"],["/archives/page/30/index.html","844034d5665ceb04cbf2d322aa5ff24f"],["/archives/page/31/index.html","51c83c2af787fc32b3ad6eeb7528dfad"],["/archives/page/32/index.html","47c36690688d04a603b04e0b572fb9f6"],["/archives/page/4/index.html","96e99b489d19eee9bc9313e1691e62a6"],["/archives/page/5/index.html","7375ec26469cfeea6aaa485f8dc52c02"],["/archives/page/6/index.html","c5ee02af6aa4935d0543c089a0f42efb"],["/archives/page/7/index.html","bf66f5484e6b8f686bf8c0ba667eccc4"],["/archives/page/8/index.html","191eb4ec3a4a73dbdb9c6ff24171a8df"],["/archives/page/9/index.html","c5b41ecc27a423e30134be9cc98f0449"],["/baidu-search/index.html","c72cce9fa34e924b54ad5542f2716f86"],["/baidu_verify_code-Hh2fKNlEB1.html","1ed94002fb69904262d76eea2244158b"],["/be-a-programmer-instead-of-a-code-farmer/index.html","528ce03807fea8efc31a5126d2429235"],["/bought-a-house/index.html","91b621b0a1c90909263da179f2f60604"],["/categories/C与C✙✙/index.html","c3d387aa9cdaac89ec8d385933161ec6"],["/categories/Go语言/index.html","507cebfca6b1ba394dc63a3b1b274453"],["/categories/ITK与VTK/index.html","872de47506f3c8eae2350a857e1ae72d"],["/categories/Java/index.html","0c69ca9a32e68c06384a4b58510652f5"],["/categories/Java/page/2/index.html","f4ada16020133e3d11bf1f14b21c9ee2"],["/categories/Java/page/3/index.html","b16d3ae67700eea746204331c5e8fafb"],["/categories/Linux/index.html","3764dee0a0dac02c1de2b3184a67b91d"],["/categories/PLC/index.html","d94b329bc8e86d944fdec2cdd1f11f47"],["/categories/Python/index.html","036ebf6c0e3b6e0490522661636e9456"],["/categories/SEO教程/index.html","db696602f1a80ef7715fd9ff7cd10ddb"],["/categories/index.html","910202a21ef13138e976a265a38696f8"],["/categories/图像处理与机器学习/index.html","40abdbed93e828acba4154dbefd6fd48"],["/categories/图像处理与机器学习/page/2/index.html","c27ae2adf31f3dc2b9317592a005aa2f"],["/categories/图像处理与机器学习/page/3/index.html","4f402c52f31eb3a65b7fa88c9a3364d5"],["/categories/图像处理与机器学习/page/4/index.html","bb7117a788db040c5af5f3d25eb6938b"],["/categories/图像处理与机器学习/page/5/index.html","d700cf30b9a56de2c82ae9c39ecd47b0"],["/categories/图像处理与机器学习/page/6/index.html","05ecf2cf352cefe68d6024d7620d979f"],["/categories/工具/index.html","849ec0162bb418da0cf112b5d32e04fc"],["/categories/工具/page/2/index.html","49c47e889d8200395f00eb5d10d95520"],["/categories/技术以外/index.html","b084b6d56137f9cb7f91c017800eadf7"],["/categories/技术以外/page/2/index.html","358757e3094273d01e053aa7c8967c5c"],["/categories/技术以外/page/3/index.html","f0466f2bc645e1b7c4aca772a29d8898"],["/categories/技术以外/page/4/index.html","5cdf5fc853484747ebda7a5e5796d6f0"],["/categories/技术以外/page/5/index.html","3e72d6398821305dad68ccd343822ba9"],["/categories/技术以外/page/6/index.html","f1854a5aa2ae00d8c9806d8b586e6c90"],["/categories/技术以外/page/7/index.html","12ca62eda51576365f22bdc9c5871dcd"],["/categories/技术以外/page/8/index.html","b4113ffca1c5b68facf1c32b9400c501"],["/categories/技术以外/page/9/index.html","a61a7e946c01edc652cf1976eff6a935"],["/categories/数据结构与算法/index.html","883f51dbf9ef5d1502fff918d88eefc8"],["/categories/数据结构与算法/page/2/index.html","5c0baebcd04f1519d62f7e9aae992153"],["/categories/科学上网/index.html","5a100d5f161dd8e9518f9edd4c804179"],["/categories/科学上网/page/2/index.html","3be62b9f90b799d9081b8c0c421f2585"],["/categories/科学上网/page/3/index.html","6daac58656f48828098214c8b27c820a"],["/categories/编程经验/index.html","35a855077eaf5b6b294de5b78f982520"],["/categories/编程资料/index.html","8ded9a0962d19cb2d98fb405edfa278f"],["/categories/编程资料/page/2/index.html","53b48f67f9af86f0b16f679d5ee2b950"],["/categories/编程资料/page/3/index.html","6f6db63ae3936eba126a9792a5e2f780"],["/categories/编程资料/page/4/index.html","6a127aa2d5c6d31d0d0dae47528e1aee"],["/categories/计算机基础知识/index.html","dfa0edd5abb54e31067d45a93e828e25"],["/categories/计算机基础知识/page/2/index.html","46742e3bf071cd1be862c7b9eba6802f"],["/categories/设计模式/index.html","3747f00d09b3985b006f6892adfaa75b"],["/choose/index.html","6eb52dbef9f4da9e362df92d517940b0"],["/choose2/index.html","bcecc2979cbbfa34f6baba13993f0d32"],["/chrome-crx-intruduce/index.html","45b179ddcfda5c50b88aad440cbe22c4"],["/clashvpn/index.html","025280fe4d4382b83883d413ebbb38a4"],["/coder-blog-website/index.html","f453e834f54cce077d1bfef94bded882"],["/coder-source/index.html","6273d996dc33275335fdfb44175cffe1"],["/coder-videos-website/index.html","626e52ecda03a5df27dfd84441d36b9f"],["/computer-book/index.html","d52a035d1ad459dd16c54d6c839b27ca"],["/computer-censorship/index.html","d785c246e38d8a270d0dffe3093b6bbe"],["/computer-network01/index.html","7c690349e0ab8e73845f0f2d41f1c72b"],["/computer-network02/index.html","d7eccf72fb13b4981d427e3b8291fca4"],["/css/main.css","bc32ad34ec4990d934c3c647bdb62f79"],["/database-Mysql/index.html","ee3664043fb6621e25cf56c837459204"],["/eclipse-lombok/index.html","02f0a8390aabb8d6551b688023acac08"],["/fully-convolutional-networks-for-semantic-segmentation/index.html","03cdb97b53cf5389856c881e7091f26b"],["/great-firewall/index.html","54885114e70e8a634ddf2f9374e6ff18"],["/how-to-signup-chatgpt/index.html","29444ea9fdd45da3fa88deba51f3620f"],["/how-to-use-Gemini/index.html","8dea557abf888b2effb1530204eb13c2"],["/img/logo.jpg","d6e2e245614031c3fcdd6d58f93135bc"],["/index.html","4379a8f14bcb59113d4a17b6c7039e55"],["/ios-open-internet/index.html","b1e226c946a871079203a585be90bf87"],["/iphone-open-internet/index.html","3da1913d73bce0e0d7f0c9ea76ed80c6"],["/itext-makes-pdf-form/index.html","6e084030c4fe1e6c490a95d887aa49d4"],["/java-Set-Map/index.html","397977ef3434e2134a4ec87ea5c9093c"],["/javaweb-server-error-codes/index.html","4361e8c7f45043282b86f5e31b23bd13"],["/javaweb-source-code/index.html","1a20f5418038a7dcc7807434ddbaa27a"],["/js/lib/busuanzi.min.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/js/lib/lozad.min.js","47904d34a224931dd1b615c59a3dbe3b"],["/js/lib/prism/prism-coy.min.css","0ccad54d95845901ead59bfd3ecceb14"],["/js/lib/prism/prism-dark.min.css","a4711d2957d6605eb5682bdd228cf123"],["/js/lib/prism/prism-funky.min.css","efedcdccd7a9ab342d2d9cacd24920af"],["/js/lib/prism/prism-line-numbers.min.css","38e22e790c279bb56f9ec4b90a2a2d58"],["/js/lib/prism/prism-okaidia.min.css","5ac6f9de996fbec68aaa106dfb16e061"],["/js/lib/prism/prism-solarizedlight.min.css","ecc7e64d039873ffcf7fb27babdaeb5a"],["/js/lib/prism/prism-tomorrow.min.css","456af2a14ae4f5089939d5904ac40fe8"],["/js/lib/prism/prism-twilight.min.css","ebb5c355332a8cf9a1ce37a2a69d678f"],["/js/lib/prism/prism.min.css","a5234d614834658887cec6a9515890f8"],["/js/main.js","052d2b299d9c750afea8df0b802ab7c1"],["/keras+TensorBoard/index.html","7a6270f414df166c3d24aed2a26ff105"],["/keras-beginner-guide/index.html","4e55972b8a213b48e4369e6cc3262f1d"],["/kmp-algorithms/index.html","b235328da8537a2cc65e2bccf05ad733"],["/leetcode-Java/index.html","95b4aa821160f0fd19d0b93b27a39278"],["/links/index.html","e8305a8bce4481e7c4837a254cca9824"],["/linux-java-opencv/index.html","503c6822b8f5b9d3a93198eb7b398a4d"],["/msb-source/index.html","2458005e171a846b42bf2b1da4b2a2c6"],["/online-BUG！/index.html","0af4b85644b7511b3694232233b1b262"],["/open-app/index.html","20c6ec468188b6e6d1da65197c57b9af"],["/page/10/index.html","7021ce37928c49a6966aa50fba655485"],["/page/11/index.html","d6c27caf69979ee3fa66935b670e3c77"],["/page/12/index.html","b5ca376cda1227dba82bf4beabb009df"],["/page/13/index.html","2ecbb61ef71550a5f158c68c04facefa"],["/page/14/index.html","5e4edc8f2a9964dcd7425853b4b99419"],["/page/15/index.html","b41a9362be1735b7a41d98cc0edfee2c"],["/page/16/index.html","f513d87764faf7be0da021ed517cf600"],["/page/17/index.html","0ba625a632a187844644c354b841baac"],["/page/18/index.html","7230b7cd08729ff61ef6fda5f84f3795"],["/page/19/index.html","dea0032dd95ddd3e61692784a2bea6ca"],["/page/2/index.html","36e6e396fd7d3a8fab642372b94f59ad"],["/page/20/index.html","832653e34b7a2bde2b5086eaa8c38659"],["/page/21/index.html","553290eb87d29b00fb589b77bbc489ae"],["/page/22/index.html","aa874fc0f0492d74cf539410d8b69dbe"],["/page/23/index.html","0c3906284a5293dbb6d3c2534708b357"],["/page/24/index.html","d2617d9a678c90b59bf0ced18a16d613"],["/page/25/index.html","b972affd9db994386ff37af0edd725f2"],["/page/26/index.html","0be07184f7ae2fd5ce88f143d1b0b8e4"],["/page/27/index.html","5f91045f7ec5fcbf375150d392508b62"],["/page/28/index.html","292f40ab21e4f7729808f645252860f8"],["/page/29/index.html","3f8038108c58a1c74d11f7b033163ebd"],["/page/3/index.html","16c6049cfa3121ee8dfd422a321ccbd4"],["/page/30/index.html","6bd4ef2639d8f8f9fdd1429729f321c7"],["/page/31/index.html","4be676ade23d4660d247501c32cf327c"],["/page/32/index.html","6b58a246c8e993b467d8a575cd8eceeb"],["/page/4/index.html","564d8c0c51967c01aa7d85d890d3798f"],["/page/5/index.html","f75d02a249bb58db495d3b81bcc8a939"],["/page/6/index.html","8a0fff2cda1ea23e3c36b7bb57d32fc1"],["/page/7/index.html","f9349b510ccadd8b9659a7639d88127d"],["/page/8/index.html","559bb9da4e50e5debb9566763a45ff61"],["/page/9/index.html","059466a89e1240518db084a2bdc32bac"],["/pandas-data-preprocessing/index.html","b3d2657586dfc68b580679272d134e60"],["/python-Blog/index.html","1ce78c2900909f28e61f3bec4cb538c4"],["/python-yeild/index.html","56e2201b29fd4627ec2bfc2dd7548f48"],["/python爬虫教程/index.html","72fbfe52b03000540886deee5bb5e71e"],["/software-copyright/index.html","6da5228a4f1488825f09233bcf602e8b"],["/sw-register.js","37ce225e5df57886689d81a8f1530f7a"],["/tags/AI/index.html","2029d41d75613b76abfee10872cca390"],["/tags/API/index.html","09ec62bff0150726ac5b55e150a6233e"],["/tags/C-图书/index.html","264d1c44c5351071f6a7663f79603ee5"],["/tags/C/index.html","f0e06046ed1118f71b6dbc7fa10a694e"],["/tags/CNN/index.html","63a4de6b47bb14709fbf610c25698aec"],["/tags/Chrome/index.html","91c3d2c6d95d916e22eb6be57217bf10"],["/tags/C✙✙/index.html","3f1d85c5e7984af9db3de9149c3ffbd9"],["/tags/C语言/index.html","be0833c77f913de8e8044d453d4a0bae"],["/tags/C语言图书/index.html","562b00cd2915abb19cc2c8d69da28b6f"],["/tags/DSN/index.html","a59c574c7f86f9dc7733c4824a59ec07"],["/tags/Dll/index.html","bc8a58ddf028d5c220f895320ddb41d1"],["/tags/ECCV/index.html","890280ab78b09337f62050e9b6f32ca6"],["/tags/EM算法/index.html","dff72dd77f1bdd2846af80f552a718a6"],["/tags/Eolink/index.html","b8c5f2dba45a7640f129c06b7bd14c17"],["/tags/Gitee/index.html","9aa5460a33e4d6eb3873ab9060dd3268"],["/tags/Go语言/index.html","5f04c7ce7f4d14389ab52608dd3a983d"],["/tags/Graph/index.html","98c86d43d9ac60891ff1e0137eade252"],["/tags/HTTPS/index.html","3c2c80d5e8a5b39da452720c0d565646"],["/tags/ITK/index.html","adc8292681635f9484c789ae2720b58b"],["/tags/ItkVtkGlue/index.html","fc901325a9686b6a90b0372691ee9d6d"],["/tags/JMM/index.html","d151319b0da345bd2d9c3a20f3386fe0"],["/tags/JVM/index.html","d8cb21dffb510ae0e815f90c4762b8f1"],["/tags/Java/index.html","9e0fb0a3ea605562c4b493608a626e74"],["/tags/Java/page/2/index.html","95dc2a1503791cdbf20e3937ddf53676"],["/tags/Java图书/index.html","81a8e465ee35bb29c091813cf5799e1c"],["/tags/Kaggle/index.html","460d8a658c22a1a758c353f364541aa7"],["/tags/Keras/index.html","b0d122d173cdc1436c2b81809ada663d"],["/tags/Linux/index.html","fcdd0c54aa4c3053b6cf47cbb9e12c64"],["/tags/Linux图书/index.html","dc7810a5d43397c3d82fd6e7165af329"],["/tags/MEPP/index.html","9307644c0fe738bb81d99287a9f60cc5"],["/tags/Map/index.html","33ed719ff034e41bf63afca3d1d4ba85"],["/tags/Matlab/index.html","b190e6abb18ee77b8966ac07ae2e5782"],["/tags/MongoDB/index.html","eca5ed2f1edc958d7852c2b0a276978c"],["/tags/MySQL/index.html","b10be13b343e5872c7cf7bee2b2a4f9b"],["/tags/Parzen窗/index.html","79785b1b5a4c62bed2e4ea1534d766da"],["/tags/PicGo/index.html","b38562c993cb880f7d9d04a87936dcf7"],["/tags/Python/index.html","31c1f6a2c6fdf08c5fe8f5104cd7eca9"],["/tags/Python图书/index.html","e96cfa70f96e427cf3d844b36d7a1592"],["/tags/SPHARM-PDM/index.html","aebd77e4e5c350e2d1a2c1030353b05a"],["/tags/SVM/index.html","72cb0f3dbe2ac1bc74d7fef3b89522d8"],["/tags/Servlet/index.html","33fcee494595fc84215bf2ada1d15370"],["/tags/Sping/index.html","2711362223f6217941fde7f04890e6e2"],["/tags/Struts/index.html","7b6471ede8d932bb8c361af3d092d458"],["/tags/TCP-IP/index.html","18fa5efa22eb3eb58920cc040b35fc9c"],["/tags/Ubuntu/index.html","88f68c811976146ee651c89680d92951"],["/tags/Unet/index.html","06608f04d1c3d0720ebd118be1038e3a"],["/tags/VS/index.html","3c1df15b9613a099c7b77cc3ec49abb5"],["/tags/VTK/index.html","6694f4fdb8d76560438f310a571270e8"],["/tags/Windows/index.html","a8d071b014e17d820cff780c7581b1ad"],["/tags/edit/index.html","727fdd3e24639c47aef587a0cf7d440f"],["/tags/hibernate/index.html","3f8693b9f14858b9ae2840588832d4a0"],["/tags/index.html","ec6294100e862c6be06a69c64396614b"],["/tags/itext/index.html","d67762444a6e18409aacb5c7b50ee072"],["/tags/jdk/index.html","ae9c6072b8f1b754e8688f22cade5cd4"],["/tags/kmp/index.html","1522b89ec8cc8d82f9ed58435a0ac7b0"],["/tags/k最近邻估计/index.html","90f002aa4e8048b2517b92c90bebcbef"],["/tags/lombok/index.html","20771093094ad30c94528adfd7cfcbfe"],["/tags/offer/index.html","9b61b8c3e8d00995d448d292d6b595b2"],["/tags/opencv/index.html","ae9e1f300b4ec588c6abb891f644fa18"],["/tags/pandas/index.html","a91d637699dbc76aa24afca19bfde486"],["/tags/string/index.html","57fa3679296ccf52acdbcc97ad750e84"],["/tags/vim/index.html","60dce61a5660c7dec59710b2a1933f5e"],["/tags/vtkPolyData/index.html","7076a4a801225afaf6e4e2500956db93"],["/tags/web/index.html","ff321eccb7ecbc3eed3e9368de7a675f"],["/tags/xshell/index.html","1b9875b510314ec83b58b7bdfbe14b13"],["/tags/yeild/index.html","eedfa6276dcde3ccf8aa1768387a79aa"],["/tags/互联网/index.html","845ba43b3ced6d690ee0e3d3788ada34"],["/tags/人工智能/index.html","6f15d3ccfae67f9f4e8d85592a56d29e"],["/tags/体绘制/index.html","e6ad278cc6a80daaadd162c706fdd19b"],["/tags/全卷积网络/index.html","6ab9083b919a7fd81c3851c23b0cda51"],["/tags/公众号/index.html","24ac3138b524387cf69527fe8ede5804"],["/tags/内存模型/index.html","203c001a9ddf1cf91df50401cf13e7c8"],["/tags/内推/index.html","614d829a3c55a5a18b0a8f8d5a52ae21"],["/tags/函数/index.html","cf75f901e9e3d6034b18e21f3bffc6a7"],["/tags/分布式/index.html","bdb331b87dda49c42bc564be547c1041"],["/tags/加密/index.html","3a38c89ebb2d2d6949a4b36c4e3c6809"],["/tags/医疗图像/index.html","835aa08fe568045440d277954aed589c"],["/tags/博客/index.html","4073e103bc9b84802805827967ac671f"],["/tags/图像处理/index.html","02a7fdcb75a84766529c4e41e4e6f27f"],["/tags/图像数据/index.html","fd31009c952090adf4afdd85e173c274"],["/tags/图谱分割/index.html","6ca8eb872ec3c98ff82f707fb4eb105e"],["/tags/垃圾回收/index.html","c4a7c422d327fd580e26ccd61a06a404"],["/tags/多线程/index.html","ade1f7f6d896eb74caaf51b6155f5613"],["/tags/字符串/index.html","6afce24bba442df216bd036e658f91fd"],["/tags/工具/index.html","b84328b6cec7251aadc31ae0e715e506"],["/tags/工具/page/2/index.html","0d3af3aa121a8ac34d6ac63d19b47604"],["/tags/弹性形变/index.html","598e6c0ae22de17fe948c22df348f6dc"],["/tags/排序/index.html","bcae9b6f415f11b7e0deb1a9f7c07af3"],["/tags/搜狗/index.html","c937efb974f49e26277ab9358803d210"],["/tags/操作系统/index.html","e7c36144a7618d778098da8911eb6642"],["/tags/数据库/index.html","dae9f56081693b1af0c0204e6e836835"],["/tags/数据类型/index.html","2cd2b975ab08397d18459007463681b3"],["/tags/数据结构/index.html","4188b7ff8d4a5cc8719208a4a1a0f6ed"],["/tags/最大似然/index.html","11b61631928e19e6da66dbe35a5674cc"],["/tags/期刊/index.html","882f445743b67b4797170e3de92cbb1a"],["/tags/机器学习/index.html","63cf12395dd03915c6c0a38939b5aeb2"],["/tags/机器学习/page/2/index.html","ad88b266ded6ea97e24b34172bbf8204"],["/tags/机器学习/page/3/index.html","54cef752032a64f026fe6b3003b7fdee"],["/tags/机器学习/page/4/index.html","330fdb1dca6f1aac0f4872425d1f29a2"],["/tags/机器学习/page/5/index.html","960d4254bdeb4d02a3000bfc42c564ba"],["/tags/树/index.html","0bf55438e63a01b0b9902f8c49a52a86"],["/tags/框架/index.html","1911ce3b938e9152dc528009adc751b2"],["/tags/求职/index.html","b7e95033b508fbcd8d143a245afed6ae"],["/tags/汇编语言/index.html","ad885aaf0b5aecfc59b968b2f6856662"],["/tags/深度学习/index.html","1fad0bc1e189948e1db3b08cbfa6fd3a"],["/tags/深度学习/page/2/index.html","63927b322d58d5f99e52d95b174be8b0"],["/tags/深度学习/page/3/index.html","44669727e45582574bcf1805acf33090"],["/tags/深度监督网络/index.html","d674345fd12f10de1f5249fa8690cf44"],["/tags/爬虫/index.html","5e903413f06dae599d56e5bbece6691d"],["/tags/电子书下载/index.html","f2689ce4eccd034820e3d5328c53e2f7"],["/tags/电子书下载/page/2/index.html","2dcbab499e8b55624fdb807bf43da4a4"],["/tags/程序员/index.html","a06d350cb707c5471a66fc453fdc0cc3"],["/tags/程序员面试/index.html","77c22ac9bee60953ba8be81c781b96df"],["/tags/简历/index.html","2ffd0dc4b8257b2d8df16d236474dbf1"],["/tags/算法/index.html","78be29d56dcdaadf4c6fa4134d4c4c77"],["/tags/算法/page/2/index.html","cfb595f85d4314fc166aead204cb6142"],["/tags/算法/page/3/index.html","bcf699049dce75314ff934c3a9b5dfad"],["/tags/线程/index.html","fdbd183b8a1b4be854d4a86a82ad92bb"],["/tags/结构学习/index.html","74534e970312c9d978d18cc494cf1cee"],["/tags/编程/index.html","c408221df2a89a392e75a33ac435fb4b"],["/tags/网站/index.html","59b9d8eac5db3c7f41000fec6330302a"],["/tags/网站/page/2/index.html","a7160d3bf1d513ed5d18cdae33674167"],["/tags/网络/index.html","3e60b416c0aa21e2380ec2e4df0ac5e7"],["/tags/网络原理/index.html","8a71056d07be07fd2637fb5a9d23e6dd"],["/tags/肝脏分割/index.html","1626632119fa1b0e1d39907e287824c3"],["/tags/计算机/index.html","ab6087db0636d0e44a72c072c8c960ce"],["/tags/计算机专业/index.html","e6926f814ff99ab510bcb15a9b3bd3b8"],["/tags/计算机网络/index.html","c77d36460b212d7673945eddcc4381ad"],["/tags/设计模式/index.html","2ed734837b05c57628f8db6719826db6"],["/tags/贝叶斯/index.html","c8b403be6a339b65f504c83a05b79c7b"],["/tags/迁移学习/index.html","39a4fe8413b22733dcaf75d61b17ca0c"],["/tags/面试/index.html","3cbe9748c949ed32e4df7b6ea4af4bfb"],["/the-way-of-pragram/index.html","608d2aaa4a0babde654c8b36186fcd59"],["/untiypro XL安装/index.html","6a2c3bcb3abf28102042c0947dad85de"],["/video-websites/index.html","c1c3a4bcc5f60aa951569994417119f1"],["/wechat-fans/index.html","6fff604347a9ca35160d21979bced7b3"],["/window-run-VTK/index.html","051b1ec489f421acecae0fa3ee9ba5f8"],["/xshell-connect-Linux/index.html","5ce1a8aa2af5f5b46f21c8a48ad7e88a"],["/‌Accessing-the-Open-Internet/index.html","160750414a1e71bcf319dc3214fa85a3"],["/《Java高并发编程详解》，去大厂必看！/index.html","a215fe2d15ccac8a0f06310bf71f9b54"],["/一分钟没了 1.5W 。。。/index.html","337d4ddac51e153ad5545cec63689b1e"],["/一条高产爆款内容生产线/index.html","a88c753dacbbada1caf7a453e17abfe9"],["/为高考学子推荐的六个就业前景广阔的专业/index.html","427cd51677edeb90383e5abe37eb686c"],["/互联网赚钱机器---社群/index.html","1f54d04f8fbec82430eb8cf96f5e0ba1"],["/你们常用的工作方法和思考方式是什么？/index.html","24ee1521339e26ab81ce505d425e44cd"],["/关于环境配置的一些事/index.html","784fcc2c55d9169de3323ec3aefb1a9b"],["/准备了19w！搞事/index.html","d8b8c211f4f04d15cb392db4c7e85c84"],["/几个很重要的感悟/index.html","3a0c3cfc7a9a7dd36555219be84cc619"],["/分割ROI篇/index.html","f53eaa86b3bc853aaaea2c72b0e3be8e"],["/分割精度说明/index.html","ef01ae84904bf68d06b7a846dd31c8a0"],["/分块程序执行/index.html","bed5052a7015a12c60115f4c06f380fb"],["/加班公司黑名单！！！/index.html","675bb1500cb9a2c772448cf012ea80d2"],["/卧槽，上知乎热搜了！/index.html","a1f258caf65bf1446c1ecf151361baed"],["/卧槽，我的小破站爆了！/index.html","6fd069d4b4f0764cedece6e80c98be74"],["/卧槽，我被盗版了/index.html","dc0f7be9312912b463b2b5c34557c0e7"],["/卧槽，还有985大学在大一上C语言课？？/index.html","25e616b1e610c4e8e3829cce5650b364"],["/历年微软面试中出现的leetcode算法题/index.html","f53754dafe787e38f12e177361ed9eee"],["/去特斯拉试车了/index.html","d4d9a77f8a5acfba446b6d168afa4923"],["/吃苦的三种境界/index.html","aca4c9433e0303cd53b229f1dd7de640"],["/哪本书适合推荐给 Java 初学者？/index.html","033c2fc7c70f1eeb8a3f19f7b6f88e4e"],["/哪本入门级的学习数据库的书最值得推荐？/index.html","8b3d95b7279e76511b2aea82cd6ffb69"],["/国内外常用的AIGC模型/index.html","ddb8bc8bae7617f40a3a072b17b1aaf9"],["/国庆假期/index.html","f8e91fa22ba8d0ba2e38cf3a4230129c"],["/图谱程序字典/index.html","795b06291f20789b3e70f2ae5d9dad34"],["/图谱训练与分割/index.html","0e703d3d0dfb84fb047312b296e7b3ec"],["/宣布一件大事/index.html","2c720b60fca2d607ed6beabe2be96b23"],["/小鹏P7i试驾体验/index.html","e5deae6ccb226c330890ad4e8a7c40c3"],["/微信PC版3.3.0内测更新，电脑可以刷朋友圈了/index.html","68c9ffd68cd96dab555bc8ff18528973"],["/怎么更快的赚钱？/index.html","759e83a7ab232873c1e9053d4a4d764b"],["/我毕业了/index.html","24846a5cd9ebc99a94d099db9c50aa1a"],["/我！真！的！找到了！爱上学习！的方法！/index.html","9b2833d7982d13bd7a26afaec5cb1b46"],["/户口的意义/index.html","90efde7fa58fa40a7644a3a08a6015b7"],["/推荐两本经典算法书/index.html","730a8486e653d0862c6d6c002bd4870e"],["/推荐几个在线学习SQL的网站！/index.html","0659ba9317af4d20e778e1a8b9a47c05"],["/搞了一个程序员成长晋级社群！/index.html","a380dd953513e57c598f36c63a05f5bd"],["/摘抄/index.html","2e4beea3839c51ea01d27815931f33de"],["/暴跌30心态崩了/index.html","11cb17e7103c887efa6ee4d34a242bf8"],["/最近很火的ChatGPT到底该怎么玩？/index.html","651019deb4856aa8ebdfa1b9e67e7aba"],["/有哪些好看的日历可以买？/index.html","5594ef6220c831d9d853626534a15621"],["/服务器有啥用/index.html","669bf5ea87214ceb506f3c236fb3b508"],["/来长沙了！/index.html","d668b1e8b3fd81bf2ffc03f23edac3bf"],["/校招污点公司名单/index.html","b97ecba5eba1e3dd53e901ed362f8a8c"],["/梭哈200多万/index.html","aff1f507993b110a271573b66684eb44"],["/梯形图入门/index.html","95b55a540e1a9100a7ee6fb300f73d99"],["/橙心优选，凉凉了！/index.html","6924c320243eea502c8fac30c3a94d01"],["/比亚迪汉试驾体验/index.html","a0270b8b00216dd214356cd82bfabd6d"],["/清华转学成电，真的牛逼！/index.html","e953e83dcbad3a427212d8bdfa74a750"],["/滴滴程序员被亲戚鄙视：年薪八十万还不如二本教书的/index.html","32369f2437904b95c03bc7b6ed96254c"],["/社群！/index.html","b92bad1a5ee19847f5537218be78ab10"],["/科学上网之VPN篇/index.html","9470fbade1b4068d3515f4f63ef97476"],["/程序员必备的几个技能！看完你也是大神/index.html","396c842b2661839c7992ab5f294be0dd"],["/程序员绕不去的槛，Linux！！！/index.html","e55966a27fa692cc527eaf036353ec9d"],["/蔚来ET5试驾体验/index.html","81e8b2005352e50a966b8dbef495c02e"],["/蔚来，牛逼！/index.html","08d2022a1987f4d39e4cee4ccd1c3d70"],["/被录取了/index.html","82a9db24fab41bc58dcd7bf7bd05e7b3"],["/被找事了！/index.html","793f2bc33f836c2415f6ff50f85bd0d4"],["/被拉黑了。。。/index.html","23a47316d421055c42ad3ec6d711dca5"],["/被车撞了！/index.html","8edaa98c5c5a29cd109eafaec6484625"],["/该如何选购固态硬盘？/index.html","20e90575215be759e864394850c28894"],["/这本书一定要看！/index.html","f38ba2163543b6e1d395f2671929508e"],["/选Java还是C++？/index.html","e30b5906ec9c45aa4b83228485f395d7"],["/那些让你起飞的计算机基础知识/index.html","4ee70791ffffd3b2de8b1caa1d71fe0e"],["/靠这几本算法书，成功拿下大厂offer！/index.html","050ca6cc394d114d62a1b093da39c754"]];
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
