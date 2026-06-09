/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/0010-city/index.html","8a96f91e8327f4ff41bb6dcc2b86b3f0"],["/10-algorithm-book/index.html","1c6f9eac552b122b24bda67f391992f3"],["/10-website/index.html","fd7af8f24607cde6c0276ee2c6012cfd"],["/100万的小目标/index.html","1e6ee55f150fb6a367738176c8337d06"],["/10w+YYDS！/index.html","fffdb93ddbd9c77a87fdb4f105af8338"],["/10website/index.html","0889511f0036b92db318ccae1662ca5a"],["/12-technical-tutorial-sites/index.html","55e184a90cec0a385071a5fabb9aecca"],["/2 6 岁 了/index.html","525ec2a9f2b29485d3e58d5ef183d0dc"],["/200万，啪，没了。。。。/index.html","4a2be7ca9c829f7fb10f1677e20c0a88"],["/2018ECCV-Paper-DL/index.html","9350719659b85bbd168d928ce53f7886"],["/2021年固态硬盘选购最新攻略（小白避坑指南）/index.html","6b8672c0ecdd5104def880d25eadfd9e"],["/2021机械键盘推荐/index.html","96a140f2e8a0f2fb4c9a5fe8220f40c4"],["/2025-07-15/index.html","e75147b46f2bf1554c38ffe6623b29ed"],["/2025年终总结/index.html","c5386557811c4beb7d669d75f046800f"],["/2026-Open-Internet/index.html","00fc73c3ae1e6557fd7d8372126d9646"],["/2026-best-vpn/index.html","b634daf97adda6ab69f2677f36536f0d"],["/2026-clash-vpn/index.html","d4507b4b572c4b6b7a40d357553dffd2"],["/27岁了/index.html","685742d642f560383d18ba283630df7a"],["/3D-Convolutional-Neural-Networks-for-Human-Action-Recognition/index.html","6db8513bfe1935aa32ebc9a8a482a1cd"],["/3D-Deeply-Supervised-Network-for-Automatic-Liver-Segmentation-from-CT-Volumes/index.html","02ce667697341c6c6993db225e82a8ee"],["/3D-Unet-Experiment-notes/index.html","a07ce54ff9563e2470c9289b096086e0"],["/4-Software/index.html","7e0d1049b8fc9f8ac3b610269e36f060"],["/6-website/index.html","524a7c9004d31e3bd2444f44eb0b8b14"],["/7-terminal-tools/index.html","a9dda4c2f7a87e4809c1eb6135a1df39"],["/AI-PPT/index.html","5690d04e5b484f2aba12829be0bb76e8"],["/AIGC中典型的深度学习网络/index.html","e7820f2ca09c8cee63222ec7f14fadcf"],["/Agency-model/index.html","e6362df4c286491d5e8997bce9757cfc"],["/Algorithm-brush-notes/index.html","5894b0076d4c0b974d444e8e9af6e453"],["/Ali-recruits/index.html","3e5ac81ff183888bdff3f4734eceffa4"],["/Android-VPN/index.html","b66ab363114240ac8ec9e0c257fd388f"],["/Android-open-internet/index.html","1dc8471382128534c839f087a6fe2afb"],["/Appearance-mode/index.html","902b923518877bbeb4bd8d9b745a6632"],["/Backtracking/index.html","83a590c0ac5ce6bc6f6a75e469c6874a"],["/Baidu-Sao-operation/index.html","9f19212eee46708d8a9c70e304d7b59a"],["/Batch-Normalization/index.html","fd3e8f4985bc15e71489503c15e76c74"],["/Best-AI-tools/index.html","a2354b9b046786d8186378ac7b276936"],["/Bias-and-Variance/index.html","e4b567355e78fe00fe744a969baefd9c"],["/Binary-tree-traversal/index.html","209cb2b65368667277cb8f3970c8831f"],["/Branch-and-bound/index.html","c58d63361ff06b7e35f6f1fba5f86ded"],["/Buying-computer-for-the-first-time/index.html","4b50ec47f40ce3c9a75e15fe5417e747"],["/B站向北邮道歉！/index.html","5326afa46517b4f034e44df22189ef9e"],["/C++-string-function/index.html","8542299fcb0f93e9faed7148235b1ae6"],["/C-Java-DevelopTools/index.html","b04f98336ca5c5efe9761d71aa235a37"],["/CS-Classic-Books/index.html","959ac232d96e249c503122ec3aced549"],["/CS-network/index.html","4b3cea4a97f3be632e266c715732d171"],["/CSBook001/index.html","da47a1701f7c44099d6d094bbd0789dc"],["/CSBook002/index.html","affb4861d611f1d1ceabf4338acde8c7"],["/CSBook003/index.html","49522746173dc52712462398e76543bc"],["/CSBook004/index.html","5976f3314a8cc14abaf6ab024682117a"],["/CSBook005/index.html","c02a06d06bceb9618b2b30c07b8db8e6"],["/CSBook006/index.html","3adbeace3e2a3a19e41167a247ebf34b"],["/CSBook007/index.html","701727509b1f8ca810ec4c2091918c45"],["/CSBook008/index.html","fd7fc848375d1ea2d44013d332ea98ea"],["/CSBook009/index.html","e5319653fd7ecc329e2f6e7f312751ca"],["/CSBook010/index.html","4111d0d2c10f9528df74e17361039ff5"],["/CSBook011/index.html","a35dd1a4f0a688d68d0bf36eb02a77ac"],["/CSBook012/index.html","7771edfc672cf4625f2c9529f5d5264d"],["/Changsha-really-fragrant/index.html","f9b8d6124cbb4b0ca0fc3e927bda117f"],["/ChatGPT-VPN/index.html","8ffbece858df01837a45fc08aa476715"],["/ChatGPT/index.html","f1bc243110ac8869895c3119b37c69a1"],["/ChatGPT！王炸级更新！！！/index.html","87b3a69b39226aa5fb500955a97ec035"],["/Chrome-crx/index.html","0a50e243ccaa19bd6b809e4ca5aa4bf1"],["/Clash-VPS/index.html","cc94e9f04a77ad962c30ebe48832084a"],["/ClashForWindows/index.html","a288811962278fb7e2ac630b6991a2b9"],["/Computer-Classic-Books/index.html","123a2e03134380ab328e469b4c800422"],["/Computer-for-another-major/index.html","a5b7f72dfd53b02a43668a1f8694f0a2"],["/Conditional-confrontation-network/index.html","6146444bf3a50664ecfc4c518e29afdc"],["/DNN/index.html","48d6b7f93a2d846f9bc4f075bc7f9a96"],["/DSN-segmentation-liver-experiment-summary/index.html","aa25dbfeb370df286553cb17704996de"],["/Data-enhancement-elastic-deformation/index.html","a3e199c830bcc06375c59b503420cd65"],["/Decorative-pattern/index.html","a2a47667187984726351fe6ece9cff94"],["/Deep-Learning/index.html","1ca6c6b0e608cd65e18a70b44ca505a8"],["/Deep-learning-and-medical-image-analysis/index.html","fa009428c1fc812c732fcf0e329a4ce2"],["/Deeply-Supervised-Nets/index.html","22c25b87d129136d6356bfd2686494ae"],["/Deformation-model-based-sparse-representation/index.html","2b0b087dcc8de77f4956ee0e3622e7a0"],["/Discriminative-and-Generative-model/index.html","e2aba64628265fe84f6526546f5ba011"],["/Distributed-transaction/index.html","c8c929b14016c74d260ff21e6d095e0e"],["/Divide-and-conquer-algorithm/index.html","f6d6fef1b11273bce411c8a4c759ffe8"],["/Dll/index.html","6cd18caa4d16290816530cec9286158f"],["/Dynamic-programming-algorithm/index.html","9cd506f81baa25445fd9976f7cb64b1d"],["/E-book-download-commonly-used-by-programmers/index.html","301ed0a23456cd234619878e92dc9654"],["/EditPlus软件的安装、激活和配置过程分享/index.html","261662c5a1e6a1610020ae45bfbc2647"],["/Eight-sorting-algorithms/index.html","f179c6ef38fca38c9f14ca4ae089245b"],["/Encryption-Algorithm/index.html","f7e071ceba8d5625d1017f334a7a678f"],["/Eolink/index.html","e771818ba6598a5ea58dae869fec0a71"],["/Factory-and-strategy-mode/index.html","a69cf824c611aa38f8d0d83e7e73b691"],["/Foreign-technology-blog-community/index.html","3660813a83d201f1f982401b08a71d00"],["/Functional-model/index.html","b2e5091ee6bed80843c3a0f492866047"],["/Fund-type/index.html","f939a4920cd483593e97a349f422f5be"],["/GPT-4o/index.html","c848dc164a70a81968b0d200a4f64158"],["/GPU-medical-image-processing/index.html","a4dfdb3f43025f42ef8a2a6100d18699"],["/Gemini-pro/index.html","966e8ba9c184399a4afe84e39f8f2af8"],["/Gemini-vpn/index.html","f369b082956d22fc6a23f94d17c28e7e"],["/Gemini/index.html","5ee1f44cc926693768e3cd81d703dead"],["/Generative-Model-of-Unsupervised-Learning/index.html","bcebcd67f8005c8678938d6f129ec820"],["/Git-Learning/index.html","32725692500d4cce019c50672a012527"],["/GitHub-2FA/index.html","8e442b032f881a6713daf883877c636a"],["/GitHub万赞，程序员必看操作系统总结！/index.html","4ea111ef4baf9c132a7941f64d7203ee"],["/Golang-book-recommend/index.html","89d65d31a0014053011858610397aabc"],["/Golang-learning/index.html","911777c39f3123b68f8c1b4ace00aa12"],["/Google-Gemini/index.html","47601da10eca050ea0f55871ac00f15e"],["/Gradient-descent-optimization/index.html","69ccb3faea026885e627f5e8429b0188"],["/Greedy-Algorithm/index.html","9a14d4371e046755ca0576d4ab41b7ad"],["/HAND-User-Forum/index.html","3bb4eb64b519d8ebe512979d516cf507"],["/HK-bank/index.html","99e49104d2860f49d6f3f4ff1f541751"],["/Head-to-head/index.html","70cd7d75ab7e6145570e7b81fe2451f1"],["/HexoPage/index.html","ef5fd6262b72cb0abe3ea55ab1460273"],["/HistCite-Pro/index.html","27671e326c2c4348bd11beef88d694ac"],["/How-does-the-program-run/index.html","e5d1ed8a47647d2bfb1ad1fa177fdde3"],["/How-to-judge-whether-technologyisreliable/index.html","55b632ed95703a48c2efb665209df98d"],["/How-to-learn-design-patterns/index.html","f6ff5f9ef9d04c33ba888c43c2c4b479"],["/How-to-learn-design-patterns？/index.html","44999527f8f997627b145562c3aab574"],["/How-to-teach-yourself-programming/index.html","e65512696f4d1487312479db7f531375"],["/How2learn-Python？/index.html","e1ffd08eeedc71a597bc658e9fa88e57"],["/IDEA-shortcut-key/index.html","11835e05a782670fb819f60d7a0754fb"],["/IT-interview-basic/index.html","6705f5bac87f77d06b25331ed02ef348"],["/ITK-VS-install/index.html","64ef2fbefb39d1e589844eff833b84e1"],["/ITK-VTK-ItkVtkGlue/index.html","a85bd69948bc386b8580679f4eea8994"],["/Image-processing-plus-noise/index.html","546c03050d3ce8b7e5f48d70eadcbbbe"],["/Inception-Going-Deeper-with-Convolution/index.html","5038f748009e95f32ad1861369257f6c"],["/Information-Cocoon/index.html","273ba7a3eda6f4f2b73e1471fdaf2467"],["/Java-GC/index.html","ce7cca2e36f3230d1d25621de4afdb9f"],["/Java-Servlet/index.html","8b0caa35a9f68b183c7ba01cbc1076e9"],["/Java-array-and-collection-sorting/index.html","f34b4cc193d06b7def973870b48779ef"],["/Java-development-tools/index.html","820e71ef15c9182c923b1ad9f1ec51f5"],["/Java-eight-data-types/index.html","39eb621c43c093e1952cc51983aa654b"],["/Java-interview01/index.html","d7e5619b4da07f71a01c585d26f9d02a"],["/Java-interview02/index.html","57a63f60c2b78bfc6de9d78b0affddbd"],["/Java-interview03/index.html","dfaf1a06d8ca214165ada1b0e6980f4f"],["/Java-learing-map/index.html","61f293000a609deb90ab14ba993acf42"],["/Java-learning-route-map/index.html","92a717da51b07f8505fe36870ecf4316"],["/Java-memory-area/index.html","13b0a14d3a89ebf3c44fcda1c9a435c0"],["/Java-memory-model/index.html","dafed352b4e0555747df5b20ec4b54cb"],["/Java-multithreaded-learning/index.html","117255670d6e20f6d7a044c1a77232a7"],["/Java-project/index.html","b165d92697e8dbf5bafc24112658a44c"],["/JavaWeb-Chinese-Garbled/index.html","d119c7e117a6f04c8a9b10715bee6e41"],["/Java还是C++？/index.html","b60c00328e60b0fcfa7a5b3f2ec26445"],["/Kaggle5-step-guide/index.html","8f4dc2199883ee529306ec24257e49d5"],["/Knowledge-points-of-Java-garbage-collection/index.html","d1d9a1e1a5e00b2ae3a91211eb5ae34d"],["/Layoffs-Hiring/index.html","edba9d4c62b3260b65a99f433b3afa50"],["/Layoffs-and-Hiring/index.html","76ae9a9955ebde3c2bb3f769f1b3c5b2"],["/Linear-regression-of-machine-learning/index.html","0081b82c7983313f5cd3c649e3f617eb"],["/Linux-Compile-C/index.html","50aa5385f74d515bbb5481fe8a0af7ad"],["/Linux-ITK/index.html","090b68c3b6d46763076aa5ac51f2e1bd"],["/Liver-segmentation-of-sparse-components/index.html","c14be7a6b01f750ba81411c24472c292"],["/ML-EBook-paper/index.html","e0dc220442e980c99646f8bb0a36c5d1"],["/Map-uses-multiple-maps/index.html","1dc9d62e2e6f054386d36856662f553c"],["/Marching-Cubes/index.html","5502bb3076de9053d6a2c4c7eeeddca5"],["/Matlab-Graph-cut/index.html","90949932ca68a9293b5ae577f3efc311"],["/Maximum-Likelihood-to-EM-algorithm/index.html","edfe54e1aa2b640321054e372b10249e"],["/Mean filter and median filter denoising/index.html","0151575288c1e2f250ac66c492c5e92f"],["/Medical-Data-for-Machine-Learning/index.html","57f216a54b04dacf658bf0e398f97d56"],["/Medical-image-analysis-deep-learning/index.html","508fcf52496d4dfe4aa01ff43429fc52"],["/Medical-scan-image-processing/index.html","cd5c54159370762a1cce1d631d8107e9"],["/Merge-sort-algorithm/index.html","9e7030f103453cc3052a7a3095b9618e"],["/Monthly-income-2W/index.html","353e47c32b7f3f4f54b5f15ff0e939e8"],["/Mysql-database/index.html","b96472b392079428477b9ad0b166f033"],["/Neighbor-Embedding/index.html","440f03dab971346cea85f443f71151f3"],["/Neighborhood-approximate-random-forest/index.html","967f030b4ebe3cfd6a4a6395b06370cb"],["/Net-and-official-documents/index.html","fdea8b8806cd9c3730fe329a7e13d269"],["/Netflix-VPN/index.html","d216f29c236f1b9fd51911c2d3fd31ce"],["/Network-principle/index.html","6df92ce2a4bf16dbceddcd9307c2ccd6"],["/New-Hong-Kong-stocks/index.html","b63e748b5e1c7e6db8f4b73ea917fa86"],["/Nice-to-meet-you/index.html","b5a07716dba65f5df978f9189ddb365f"],["/OS-processes-threads/index.html","3fdc18b0d55396133a86c4eb99e51613"],["/OS-run-environment/index.html","d78e74ab475ea435aad5082792057297"],["/Open-Internet/index.html","f6fd7da2fb631d6a33574cc6cf3664c8"],["/Open-Internet2/index.html","119e53174bdf50616467d853ef437d4d"],["/Open-source-community-and-rewriting-website/index.html","63d918f826751cc0a4bf18b94dee4e9c"],["/Panoramic-image-stitching-based-on-SIFT-features/index.html","4eb3922e37be86a140ec60ba18213351"],["/Parzen-and-KNE/index.html","55bd17ab9d510dbadbe6f3edc846658f"],["/Personal-technology-blog-site/index.html","d6793fcf9b5eb39bfa3a8c1cd426dfb1"],["/PicGo-Gitee/index.html","9a2518fa2567837dcbe88181e846d71b"],["/Programmer-treasure-chest/index.html","263cee160496aad5e973960955b67ba9"],["/Prototype-mode/index.html","2154ce42f0d44d4c2fa3bb9e513f7a9b"],["/Python-base/index.html","aa3d18e72b4a79e73ae6c382f9fa7414"],["/Python-crawler/index.html","c3a40c07f7cd59463bd94730761fb227"],["/Resume-revision-suggestions/index.html","95df362faddccbfee840251061a071a3"],["/SEO01/index.html","36d7b842a3c2ecbe62cd95204c946646"],["/SEO02/index.html","79cde516c982fa07f58acc3df8625f69"],["/SPHARMPDM-MEPP/index.html","92d636bc7a19d5c2ccfd68f41357055a"],["/SVM/index.html","1e3b435ed8ee1434b3b6a3d2cea3ae86"],["/Seata/index.html","85fca625ee7658ac1324dd8ed7bdb141"],["/Semi-supervised-learning/index.html","09f559baa12b0f086879855639bffc74"],["/Sequential-model/index.html","54cbb495186ba448dc56a98f36be4a18"],["/Shape-Based-Human-Detection-and-Segmentation-via-Hierarchical-Part-TemplateMatching/index.html","859306eb5ccb5c7088136cab5bf877eb"],["/Spring-basics/index.html","ea15949a326732d3a6760101146ab69d"],["/Spring-integrates-hibernate-Struts/index.html","eb7434f10179ae51a12b810b7e0b720e"],["/Structure-learning/index.html","1272369d4d9da95466635f9dba7a9236"],["/Suggestions-for-self-study-of-computers/index.html","882afc88637bb037c50aebcaf10f7025"],["/Summaryof-HongKongStock-Account-Opening-Links/index.html","725b7167f0f55ddf3f185e13e834a8cd"],["/TCPIP-detailed/index.html","316de78b569796e51c2140f598dccd34"],["/Telegram-VPN/index.html","08066ce7a4e87481fe8eec078d40521f"],["/Telegram/index.html","4d12ed6c135fcb4552d575ee1d8201fe"],["/The-essence-of-shopping-festival/index.html","2702b5c9b932fc6fffba0e3a04622fd0"],["/The-most-important-investment-in-life/index.html","dda0703c1d262b6a0fa79374d58351ac"],["/The-most-successful-nvestment/index.html","8efcb5bd223966fc447fff68f85fe174"],["/Transfer-Learning/index.html","0f072ef8616691982e52ce92072afca2"],["/Transfer-to-computer-major/index.html","4b7fd4eda5041d753a0d3844fe4932f9"],["/UNet-Convolutional-Networks-for-Biomedical-Image-Segmentation/index.html","dfb9f00ce76037c82eb905f0cef7b0a5"],["/Ubuntu-install-sougou/index.html","be727f9af23d43f98d5b9c990ff6c5f7"],["/Understanding-of-paying-for-knowledge/index.html","8764cfd1138b41f477f48a8f56ce2c96"],["/Unsupervised-Learning-Linear-Dimension-Reduction/index.html","758516216fc43898a97a29b5e13b7f1f"],["/VPN-HELP/index.html","4b83dd7a12ae888e0877b187e278acde"],["/VPN2025/index.html","60feecbcab2e08eae6a1f1020a7577bf"],["/VPN2026/index.html","38614c77a514872153126b0e4f3fcf7d"],["/VTK01/index.html","87f5d736f353b27315d6a0515400ef33"],["/VTK02/index.html","4e604347772178574908e5489b1841b0"],["/VTK03/index.html","3c8ce6b7a174eb831b035202f631e017"],["/VTKRead-write/index.html","351c83d650a0dcfbda15476d37d747ca"],["/Vertx-Java/index.html","6678386cb8fcf037b494177549324cc9"],["/Vpn-OpenInternet/index.html","d49f4fb80a2ccce44297ccb846588e24"],["/We-are-all-good-kids/index.html","38af9c7d5a2696235da7b25d17baa61f"],["/WeChat-80/index.html","357477ce435e06b549a0c8e5b39df510"],["/WeChat-red-envelope-cover/index.html","a0db7855b01eb27ec2c88a6ec44cd9f6"],["/What-is-crawler/index.html","02f4d7c732d2df2f0043ea42918cbb12"],["/Win-Open-Internet/index.html","53726b8f5b114e9da9553088fd699640"],["/Win-OpenInternet/index.html","ef06652840d64957bae8adc89ab26813"],["/Windows11-2kfans/index.html","220b00d8465432e1404db7494c0579f0"],["/Word-Embedding/index.html","da1a3a03c4b72ac6640825604a75808c"],["/YuanShikai-and-his-Beiyang/index.html","904b338334a0eb4a69fd381307c42232"],["/Zero-copy/index.html","29f7374c48c02807b70ba50c63e00b0b"],["/about-keras-model/index.html","4e7d33a1f47524c12e470c40bcd3c898"],["/accounts-google/index.html","0ca6172d62af9c5b03586af15a4304f5"],["/algorithm/index.html","42e6c07bc6c0d3da7f14e96b75121e7d"],["/alibaba-Java/index.html","7153746d9086bdbd6fc7e4552a2ffa34"],["/archives/2020/01/index.html","bfa947be3ca60b461145fb9da0e93793"],["/archives/2020/09/index.html","9f492b7ad6eb692b122e275cc34ca35f"],["/archives/2020/10/index.html","746a92cfee529de57da9da292c04424e"],["/archives/2020/11/index.html","71a76704452d825b1a5719e32bade3f0"],["/archives/2020/12/index.html","ed5bc23eee283036c9c4fb2f60d0b0e2"],["/archives/2020/12/page/2/index.html","2327c10a2cfff51f2b39381438225666"],["/archives/2020/index.html","dc5af15e72a30b8a81089e1dfcca218a"],["/archives/2020/page/2/index.html","a025256b67d448ac9bf542f4dca78c59"],["/archives/2020/page/3/index.html","f70193c455b788ec7b88492770c2f6a8"],["/archives/2021/01/index.html","3a70152792b3194142c6a676a77f9e44"],["/archives/2021/02/index.html","d75b3f7106b9443cc43544ceaf7c073f"],["/archives/2021/03/index.html","b3a72a2f06b36ef5333ed9924a668a61"],["/archives/2021/04/index.html","7243fd3f29a245783a2d3b5b90d3c088"],["/archives/2021/05/index.html","e4ef7c90bc46f1c5395478631d49e1b4"],["/archives/2021/06/index.html","caff80d031b18a7d2d96622780ee4da8"],["/archives/2021/07/index.html","a54d3b554ab23493ccac965c54188a06"],["/archives/2021/08/index.html","007c733cc18e35745c34c0c67e0acbe8"],["/archives/2021/09/index.html","a0c45af72981c9d358f2294ca8b2eaa1"],["/archives/2021/10/index.html","1d4c8264024dc0036423beda82cf8128"],["/archives/2021/11/index.html","89c8d0e5454035630776e2860903b10f"],["/archives/2021/12/index.html","fc86769f2c5b3ac4ee9823789c369b3a"],["/archives/2021/index.html","164b150d0d797a474a8a151ed2ed29eb"],["/archives/2021/page/2/index.html","bd547f247bb797ef697da84cb8d4577b"],["/archives/2022/01/index.html","78e30b11de7cb940fd67b9f98d88f585"],["/archives/2022/02/index.html","5ff7db9b8fc4590959402e0c993057b7"],["/archives/2022/04/index.html","f239051313396f95faf2f68f927e3976"],["/archives/2022/05/index.html","49eda0ca2b3b6538c512d75a6097f9d2"],["/archives/2022/12/index.html","634eab3e4a8aaf01f7ee8f6588b28545"],["/archives/2022/index.html","c79a0bafb2d42ea636005ca2bbdddf2d"],["/archives/2023/01/index.html","12f7c1242ca1e43f97f197a364ec2187"],["/archives/2023/02/index.html","5390b3c22d2ee802c96db3bd5245ac75"],["/archives/2023/03/index.html","cb954b4490200872461f23f21681bed7"],["/archives/2023/04/index.html","e993bd94ba75e739700d655d4807e3cb"],["/archives/2023/06/index.html","a34220317379e516f31dc80d7aaf3d92"],["/archives/2023/08/index.html","da9868234fb5639591336a3ac3f19ea4"],["/archives/2023/10/index.html","62aa4422b0bd7a358ee8be7c9079fd23"],["/archives/2023/index.html","81cc98b38a8aa2518a3c0c47e3a9b635"],["/archives/2024/01/index.html","85159116a775e0b3747403503a47a8fd"],["/archives/2024/02/index.html","2867e26beff186f73f20e185ccb5fe71"],["/archives/2024/index.html","13f6cc950a5f163eea1a9c454b5ab667"],["/archives/2025/06/index.html","9524a3d4b6ea97a29f4d539da7d09655"],["/archives/2025/07/index.html","106c242efc8bdf0207c3d35669fb09ed"],["/archives/2025/08/index.html","cd05691d592e6be94e65ac06c2cf2fa5"],["/archives/2025/09/index.html","b203aea24a8928919d730a39a0f78996"],["/archives/2025/10/index.html","03ce8d7fa0f5c5cadfafb2b8e3670b58"],["/archives/2025/11/index.html","0fe724d4c20a61502bf6447e298c3a15"],["/archives/2025/12/index.html","57baa21ec0a9449754bb2579d6c819d1"],["/archives/2025/index.html","2f09a0017c2fff6144eea9d1336d9882"],["/archives/2026/01/index.html","ebdf7b49ed3ef1bdaab171593b9ba606"],["/archives/2026/02/index.html","4ea7799b1a29bd021d58ec85b48bd8bb"],["/archives/2026/03/index.html","28858bee4267b0c8caf2ef04aae3f890"],["/archives/2026/04/index.html","f026ea578ff8815f2933f37293184d8f"],["/archives/2026/05/index.html","5600bc7e46c62a70be0faadb80e9f35e"],["/archives/2026/06/index.html","618fc44003c12d86b27a912941a498a5"],["/archives/2026/index.html","89783c013d463f2ba76c76ca56fa9554"],["/archives/2028/02/index.html","569b2b4cfcc0a36ec76c57343bfff446"],["/archives/2028/index.html","7bf51c36b1d6b0e10e252be04de19a8b"],["/archives/index.html","c4c039e675b299d958047466530647a2"],["/archives/page/2/index.html","301a95f4038ac166ec6e1496b7f2c8e6"],["/archives/page/3/index.html","5f060605ec48835d4ab2d64a254fd725"],["/archives/page/4/index.html","06827fce82b9eef403ae593710f7497c"],["/archives/page/5/index.html","9bf4e6df38e6f2a237107aaf49021889"],["/archives/page/6/index.html","fa68ecb7670457bb33d40f6b895ca12d"],["/archives/page/7/index.html","530220e1be9d3126019866081bb784e5"],["/baidu-search/index.html","1d91c1878dc2c166f5eac2093f56788f"],["/baidu_verify_code-Hh2fKNlEB1.html","70707c8136ff0afa1cf2a3029d70fbed"],["/be-a-programmer-instead-of-a-code-farmer/index.html","5fe04bd29a730f00159c94efa9d1c911"],["/best-vpn/index.html","63e75028b4a79bc22cbe73005673ed87"],["/best-vps/index.html","c025ac43f1e14fd8de8ccb19aca324dd"],["/bought-a-house/index.html","dc55c1d9a484151dc8539d7b70433b25"],["/categories/C与C✙✙/index.html","2368f868918abfb8d95a6d2cf0a061c8"],["/categories/Go语言/index.html","68b86ab2270e6fa60da9157163a69743"],["/categories/ITK与VTK/index.html","1fc530b52cf0f7347baf8c449a4e54ab"],["/categories/Java/index.html","2855a1c1f4053daac1684e84c8551c40"],["/categories/Linux/index.html","fd228251d75c3c00123a5d65e4c43778"],["/categories/PLC/index.html","73c0accfc3c5847e36db3d64df5586b6"],["/categories/Python/index.html","001892908323282b088cebeb4e8aa332"],["/categories/SEO教程/index.html","5bc3e41cbd875785744b0a799dfdea40"],["/categories/index.html","ad425ba3e13171b882d0ceef3b72e54d"],["/categories/图像处理与机器学习/index.html","04b8d135562545192dc5862267edb920"],["/categories/工具/index.html","d00d9b434f1c829f6e4aeed0b8591e79"],["/categories/技术以外/index.html","043d0cbe98884976c505e27db78f8f26"],["/categories/技术以外/page/2/index.html","76ac9f75da3e76eb13ebff1543f5802f"],["/categories/数据结构与算法/index.html","45e0bcf726d193a2c75498b07c29c330"],["/categories/科学上网/index.html","31b2cc7e37d9a2a5736785b3816a6d27"],["/categories/编程经验/index.html","d830a060d223a436f4d4b48626de740a"],["/categories/编程资料/index.html","1f31fcd98fc806416f0bc761e692aad5"],["/categories/计算机基础知识/index.html","c2c37900abe697699f562c707ac4df12"],["/categories/设计模式/index.html","ab8947458795744adea7b147b4de2730"],["/choose/index.html","25a2a8315573068ff95b412197c10131"],["/choose2/index.html","e327a6651a4c58cc3fd227cf3246fe29"],["/chrome-crx-intruduce/index.html","890685b25b1ee8d67f964e2d79c34ee7"],["/clash-free/index.html","53f00ed5e128c03809f815f905d9c3cb"],["/clash-pro/index.html","ec011ec5bb422f2d9cada865ebcae1e4"],["/clashvpn/index.html","7e146badb18c7afb9ade20979e0a0287"],["/coder-blog-website/index.html","523ec6fd134571c635903155e3452ba9"],["/coder-source/index.html","8e34c41660714b0f2403c3b5eef50679"],["/coder-videos-website/index.html","f5873db45d5b6f0cd199b351490b6d18"],["/computer-book/index.html","268d093b7a07ba8468cc839d2093602b"],["/computer-censorship/index.html","3c1dc97dee04670e265227d85d4fb573"],["/computer-network01/index.html","339e2541843c6c957d8681bc1a6c44a8"],["/computer-network02/index.html","e82f8b297965aa81d54c1cfb83cea3ca"],["/css/main.css","bc32ad34ec4990d934c3c647bdb62f79"],["/database-Mysql/index.html","1fe6b2c6e2f7a97fc828a358e2b536cf"],["/eclipse-lombok/index.html","af48f9f3a74bea140282376fefd6a552"],["/freego/index.html","e1bfd3227dae14a3f354ccc3dc263e99"],["/fully-convolutional-networks-for-semantic-segmentation/index.html","43efab702ccc06c92b75faf3497c32bf"],["/great-firewall/index.html","42818a7b59b856beffa4c35fb34509ff"],["/halfrost/index.html","67629c4f3c979f819b643ccd06e2d291"],["/how-to-signup-chatgpt/index.html","7442900d857d726be152b0041dadbee3"],["/how-to-use-Gemini/index.html","781c3687de7541ac44ca7ee998f83fb4"],["/idea-continue/index.html","575264d4491733ca0d9d70c7063f411a"],["/index.html","c5f59eef9632b61c038ee0fa6ffab938"],["/internet-dir/index.html","475336989fd2ebfd33db85760acdf4e2"],["/ios-open-internet/index.html","f8db33837f5c6948fc9183c1077b06e0"],["/iphone-open-internet/index.html","b2e4b36729d27d94c46e54efcb2964d6"],["/itext-makes-pdf-form/index.html","5f66f6fe7e02ce403a7809014eeba1b8"],["/java-Set-Map/index.html","84be713e77edb57ea44affe4a9818c98"],["/javaweb-server-error-codes/index.html","436fd87879e7174c256100e7478f19a2"],["/javaweb-source-code/index.html","7c6e4dd199b0eef662a3a57f7fb3f37a"],["/js/lib/busuanzi.min.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/js/lib/lozad.min.js","47904d34a224931dd1b615c59a3dbe3b"],["/js/lib/prism/prism-coy.min.css","0ccad54d95845901ead59bfd3ecceb14"],["/js/lib/prism/prism-dark.min.css","a4711d2957d6605eb5682bdd228cf123"],["/js/lib/prism/prism-funky.min.css","efedcdccd7a9ab342d2d9cacd24920af"],["/js/lib/prism/prism-line-numbers.min.css","38e22e790c279bb56f9ec4b90a2a2d58"],["/js/lib/prism/prism-okaidia.min.css","5ac6f9de996fbec68aaa106dfb16e061"],["/js/lib/prism/prism-solarizedlight.min.css","ecc7e64d039873ffcf7fb27babdaeb5a"],["/js/lib/prism/prism-tomorrow.min.css","456af2a14ae4f5089939d5904ac40fe8"],["/js/lib/prism/prism-twilight.min.css","ebb5c355332a8cf9a1ce37a2a69d678f"],["/js/lib/prism/prism.min.css","a5234d614834658887cec6a9515890f8"],["/js/main.js","052d2b299d9c750afea8df0b802ab7c1"],["/keras+TensorBoard/index.html","d3043474b4712799d2114b0ea1cb11d7"],["/keras-beginner-guide/index.html","dcaccfc018416defd873fa4233fa012a"],["/kimiclaw/index.html","10133fcd4b30418f6588a3a695daaed3"],["/kmp-algorithms/index.html","e9f3d4c704e3243a9149536cb75f0960"],["/leetcode-Java/index.html","d6224c80c988b5794ef499be7409eff4"],["/links/index.html","7376350f2c591a095aee287c2e63be83"],["/linux-java-opencv/index.html","e38ca1fd5bd5c2a0de869c7794c1b434"],["/magic-internet/index.html","7402e5f478837ca74b72258b9d3b6456"],["/magic-vpn/index.html","57f427eb3f973e25bf5e804fa564d0d0"],["/mingci/index.html","a79315eaba0d1fdf5f2a2eeb5b3a142d"],["/mobile-vpn/index.html","2b07956920a7306e7c2d12bb635ba513"],["/msb-source/index.html","ceb03b99aaa7179b6b50c81c6e33bf0e"],["/online-BUG！/index.html","540841465df7323d707b371159c7cc97"],["/open-app/index.html","e66a7c1a7821f2d8c0bee17e2f724ccb"],["/openclaw/index.html","7b4d142211b22f0b7312e61c591ac09c"],["/openinternet/index.html","d639b03f8bd052785bed983a35f90f3e"],["/page/2/index.html","87d484bed88fe3fd83111d253e2967b1"],["/page/3/index.html","624c54805f39bebf5a0a60f2ed479fc2"],["/page/4/index.html","581570592fc16d62f5bda55b40c248e1"],["/page/5/index.html","2476ca7626e4ae246b604f2c38138ee3"],["/page/6/index.html","ffd72b6e9b6080bf688f3828e6b713cc"],["/page/7/index.html","782c31cf7986cd056f2116367adae41a"],["/pandas-data-preprocessing/index.html","5cce116e6dc6e3f5f36c933438ba1e47"],["/phone-win-open-Internet/index.html","54d803c3a1770dcedd671b89ff6db778"],["/popcorn/index.html","565d6cfce99e868cffa17663bc5180e9"],["/protocols/index.html","1d4f905d3f86e3c97c1b0f86ffc81259"],["/python-Blog/index.html","04e4bca7ad8fc7d8b26703683cc5f95f"],["/python-yeild/index.html","c1287f3dc93f90f5b289efc8e096947f"],["/python爬虫教程/index.html","a4480107115ee1f005663e850ec7b059"],["/route/index.html","7218185f11cf0f806bc7db2b0f5362c7"],["/search-help/index.html","d9b5182939a75d818ed1c47d25700a57"],["/software-copyright/index.html","0c17d28e37a95d336d83d13dee082d75"],["/sw-register.js","53747403379deeb3388342d6dc1c7fb8"],["/tags/AI/index.html","7a2b6d61b753b331105243bb47a92ee8"],["/tags/API/index.html","f87bc64391c9a6fbfc4139b6f1804f97"],["/tags/C-图书/index.html","652d8e3452a3a81b6b4a24df00f33382"],["/tags/C/index.html","0c70fcf4153e4bbe7a18d63a40298d25"],["/tags/CNN/index.html","c85dccc63950c61add6dd6f1a95ad37e"],["/tags/Chrome/index.html","587cf450b4d92bd0e93951fe8f19d60b"],["/tags/C✙✙/index.html","5ed5e09a9af462181da2b44eb4eb98e2"],["/tags/C语言/index.html","9b2366398a9c71066c84bd466c8ffa77"],["/tags/C语言图书/index.html","2dd7c088749c972883620ee84b8bba8a"],["/tags/DSN/index.html","57e054946a5887c28e9b7874bee50474"],["/tags/Dll/index.html","c052fb717cbca1f338a9325a4bf9ed8a"],["/tags/ECCV/index.html","c38118891a1e62a52fa0d3ce8dfe5d23"],["/tags/EM算法/index.html","8b33076e68cb64069cd46867dc58364f"],["/tags/Eolink/index.html","9b5afc3822c5b600294a91f560431088"],["/tags/Gitee/index.html","8efe2fb6c455d577a23b5c2763e39065"],["/tags/Google/index.html","5309d7992da4558f819140819ca4fd81"],["/tags/Go语言/index.html","a5fdc46badcd91b05beb619b4f5463bf"],["/tags/Graph/index.html","1a2df7b89f7230ab194ad38754d72914"],["/tags/HTTPS/index.html","c7aca4e8e508af86e810907b2f45071e"],["/tags/ITK/index.html","3692f53e9d1f1381777127544db10c48"],["/tags/ItkVtkGlue/index.html","2e467f85b9f02f14eb6ea49b37d1f6ce"],["/tags/JMM/index.html","0bc87075c997aea86cc756034af860a4"],["/tags/JVM/index.html","bb2633fbeecfa15a3357773222658e6d"],["/tags/Java/index.html","f39ee4e9ba85ad4cc1af34b0227f7a68"],["/tags/Java图书/index.html","152c0b7859a54c676ad05d02dc8f48ed"],["/tags/Kaggle/index.html","71607d9615fb45f26e414c6ed5f2ac45"],["/tags/Keras/index.html","e7f50b848d58b7ca50f20aacccd8286f"],["/tags/Linux/index.html","536fa02cc2841d0a17d426dbe8ea96af"],["/tags/Linux图书/index.html","e5f809b18dfb025b43813daa84945719"],["/tags/MEPP/index.html","65d9d8cbd41b87b2f3633ae1c508a42d"],["/tags/Map/index.html","07a16be716bccd85dfe71d38ad9fc5bd"],["/tags/Matlab/index.html","d7bb7d0159e52dc8044089c0cc7f2f8e"],["/tags/MongoDB/index.html","b1f56f75779ac4df972a95f2eca0a969"],["/tags/MySQL/index.html","ff7ebbc4926683e8de1cc133651cfaf0"],["/tags/OpenClaw/index.html","357318c8bd332e86cee96d9ea6d02342"],["/tags/Parzen窗/index.html","a757112ed88e1d32528a7800f89a961e"],["/tags/PicGo/index.html","8b8801d38afca2532fcc9d6363c6253a"],["/tags/Python/index.html","545f0d93cab3df55bc05a7bdaadbb48c"],["/tags/Python图书/index.html","51824d14050baad016cbe7af5aae7eff"],["/tags/SPHARM-PDM/index.html","c1d83bc75c7212722a9a6e9a45afa167"],["/tags/SVM/index.html","cd8449581a35acfaac81b8a77254bfb5"],["/tags/Seata/index.html","6d41069d2f36297e7b370da81daf95a7"],["/tags/Servlet/index.html","d1ebdf0abf2acd06034c4740e491fdfd"],["/tags/Sping/index.html","e8e9e567df6707f324d5d924935a5b78"],["/tags/Struts/index.html","707a1b9d25a142686af3ae8d649c9336"],["/tags/TCP-IP/index.html","bb2af3ee56e495dbf64dce6efdae79c8"],["/tags/Ubuntu/index.html","30abd517876afc17eff50b66e1fdcbdc"],["/tags/Unet/index.html","be471a86bac434827046d30d62fc3871"],["/tags/VPN/index.html","338c9481ec5367fb9ab68d6bdad8290f"],["/tags/VS/index.html","49b74a717b5fb499d87149ace1128d9c"],["/tags/VTK/index.html","17cef0b9f5b60cf1b8804979601c1f8f"],["/tags/Vertx/index.html","65a7eaf9f5a647200bdf5620879d9146"],["/tags/Windows/index.html","d3334df55562173bbffc8989d45f1384"],["/tags/edit/index.html","9ab6bbec758c8748eca4f24791534256"],["/tags/hibernate/index.html","da23d6164c6212999e88581f9aeafa16"],["/tags/index.html","45c5b527832af289c3f4f64a258c3d41"],["/tags/itext/index.html","475f4368d186556bbbe47c393cf2078e"],["/tags/jdk/index.html","22f68da9d360588b385ca8ffe3fa921b"],["/tags/kmp/index.html","663a973dad3ab9a40a1aeb83d04b868a"],["/tags/k最近邻估计/index.html","ce5976e686f76a5f2c758e3d91d43288"],["/tags/lombok/index.html","13b97f5bd2c74163fbf491f0b2cb8433"],["/tags/offer/index.html","2a9236cccbd127ec4384468f8a99c4d1"],["/tags/opencv/index.html","6ee4a0387861da3c71c5425b9e6f906d"],["/tags/pandas/index.html","4a0de210475f79f346e4acc6cfb25b7f"],["/tags/string/index.html","0e702bcd7a56ecdfb61cb105b0c7480d"],["/tags/vim/index.html","bae16859dfce5a3656ff51171d4d5b36"],["/tags/vtkPolyData/index.html","4a914c225166b883ef93bfdc75f2018f"],["/tags/web/index.html","5cdd76cc36698251a37495df4598b605"],["/tags/xshell/index.html","6df3f44cd30ed47d51ec6742caf6bd56"],["/tags/yeild/index.html","a40bd34611bde0ea87737bc624a86460"],["/tags/互联网/index.html","b1726416b545218beccb69119e4e3892"],["/tags/人工智能/index.html","986713d03d1eda790f0e2c8320420e47"],["/tags/体绘制/index.html","911e4136d42502fac81e1fe10f75e63a"],["/tags/全卷积网络/index.html","02f643c17abb52510c93a92524f4271e"],["/tags/公众号/index.html","7df9c1f685f2153ce5e1e034ca7982cf"],["/tags/内存模型/index.html","79f3d97760b4319d5d49cc6ef07eb302"],["/tags/内推/index.html","e47fa475c1eb0fcc9f0d259a6870bdcb"],["/tags/函数/index.html","e06305c957276189b9bd5412f494bbc1"],["/tags/分布式/index.html","145cab48f7c8f193597f3d5e77ea29c6"],["/tags/加密/index.html","bd7e1711c94184160b3cd07e2a6a84c0"],["/tags/医疗图像/index.html","36fe99a04d4f6fdfd6b1c79b11c5a832"],["/tags/博客/index.html","5d44e5fcbc62ee43dce81bd01670bbc2"],["/tags/图像数据/index.html","98f404ca5a27e163f9b74c29eb098277"],["/tags/图谱分割/index.html","ea8b7c7d5e20bebc145294097a14f498"],["/tags/垃圾回收/index.html","cf347fa0e17869a4157e417fb3ab13e9"],["/tags/多线程/index.html","74913556ccbcdf65310741efd98af570"],["/tags/字符串/index.html","77a5e4a383d91198e17714ea1f39655e"],["/tags/小龙虾/index.html","50e157337488c47a128b2c5e8a55616a"],["/tags/工具/index.html","5ca1fa1219eb2bac24456b8590139d5c"],["/tags/弹性形变/index.html","23a7d59898678bc304d4500be8a49fcd"],["/tags/排序/index.html","42145a10f81bd39b8558ceb3c9b74dc4"],["/tags/搜狗/index.html","cdccae6dd8bee37296728dce245ef3f5"],["/tags/操作系统/index.html","811789734941f7cdd8486bd2d0c7faac"],["/tags/数据库/index.html","4f0e81e2737c395c1e3a66fecaaedbc7"],["/tags/数据类型/index.html","0d94f2408db5bfc21a74dc05e1d83f8f"],["/tags/数据结构/index.html","1d8a09c15595941ba57c7375da526451"],["/tags/最大似然/index.html","6b20fa8c7717bb4bc0398bf7bf1d15e9"],["/tags/机器学习/index.html","f06671de5d39267d28857ee34c7cccae"],["/tags/树/index.html","bf3ebdfcde73cb05f19545af1fccaaac"],["/tags/框架/index.html","8a184b011228c374dafcbe457f2f97cb"],["/tags/求职/index.html","02f3d07795ea6e97bdcec86179daf443"],["/tags/汇编语言/index.html","59ef3ba5fe95ef023d515187c0fbea27"],["/tags/深度学习/index.html","b6f93ac28760aef4eeaaa460039d7dfa"],["/tags/深度监督网络/index.html","774f505600c9051701887cda907f4909"],["/tags/爬虫/index.html","cb54a6ab8d04e18025d93a74a45cba9b"],["/tags/电子书下载/index.html","d08572279e8f17d19539911f49501578"],["/tags/科学上网/index.html","1393a3a48176768ce4bcf9ed8ee73a70"],["/tags/程序员/index.html","6de9bf0729aae3e1782419f5607655b1"],["/tags/程序员面试/index.html","623878b4be95eb21b3969131a51c23a1"],["/tags/简历/index.html","9d75bb6e9406e2525d2f57989c5426ae"],["/tags/算法/index.html","03b81622295cf717584c31760e0e55f1"],["/tags/线程/index.html","9f0c741d63d940950da139fef9bd5eb7"],["/tags/经验/index.html","c4edfd23ff7743f24a5a3aab94f8eb5d"],["/tags/结构学习/index.html","b4a84cc050c4cc579d51ffe7364d0af4"],["/tags/编程/index.html","4f19b67cb5d95468bd9135a76e66c249"],["/tags/网站/index.html","32690c25e8e9ed396a8f45541240c500"],["/tags/网络/index.html","28e6538eb845040753c09f1ea1cce82a"],["/tags/网络原理/index.html","499e48d0c0df4d96e168a75fded8a3b3"],["/tags/翻墙/index.html","27cd172e3d5a711e33bf0612cbcee676"],["/tags/肝脏分割/index.html","ac9385f520de9a86c24c08671ba96561"],["/tags/计算机/index.html","f9b5a3471c180372824f577607b32b28"],["/tags/计算机专业/index.html","281c340d6b85aca0ff9f65b072ae98fb"],["/tags/计算机网络/index.html","c4163f11789501a15a11a4c3eac9e523"],["/tags/设计模式/index.html","60aa4e42600cd0c3f5e44d99f1dbe9d3"],["/tags/贝叶斯/index.html","f944c4ff96689b8922227d41412b6a2f"],["/tags/迁移学习/index.html","21541659d9b84a6109b3fbb2c2252c81"],["/tags/面试/index.html","455c75fb6327c43b811dd24544af73ee"],["/the-meaning-of-reading/index.html","eccced3d6b0e392c8c3c1b1c6a1dc235"],["/the-way-of-pragram/index.html","22a3dfb6acabde475519488c564394eb"],["/troubleshooting/index.html","1f4334ea45fbc2b4945cb6434209e258"],["/untiypro XL安装/index.html","ccfe72727e45caf8a6ed5f72c8facfce"],["/video-websites/index.html","b1370d47e04611918b9c538739af0319"],["/waibao/index.html","30f8385b582e2cef64673e91e1923d2e"],["/wechat-fans/index.html","fbb4d5f830c02f07e48c90c8d7f0533f"],["/window-run-VTK/index.html","968ac16348cfd6f36c3b941142303473"],["/windows-science-internet/index.html","5f06b25010c6e89e2525c53a72494d64"],["/xshell-connect-Linux/index.html","caf72573d8273476b271f351cce4a33d"],["/yzhx-vpn/index.html","2964413e830accb449f6d51a3b37a501"],["/‌Accessing-the-Open-Internet/index.html","ae057b4a05446caa973a5a3dac40d28b"],["/《Java高并发编程详解》，去大厂必看！/index.html","7500474f8e0be6ef79550abb056dd4e5"],["/一分钟没了 1.5W 。。。/index.html","59f3c066e74800157db29febeaacfc2e"],["/一条高产爆款内容生产线/index.html","fde243e5df6e5fedf7a7729d96c0d7cc"],["/为高考学子推荐的六个就业前景广阔的专业/index.html","f402ef53d7b85b53f838878e04ca7c56"],["/互联网赚钱机器---社群/index.html","a7b3f311a8d36d9af711efbcb5faebf0"],["/你们常用的工作方法和思考方式是什么？/index.html","7dd36c3321ebc6f88db208986d469c75"],["/关于环境配置的一些事/index.html","a9e428c1acaedef943ecdc9885b5d568"],["/准备了19w！搞事/index.html","3ca50b7debfb7df3c4f2d3e795f688b7"],["/几个很重要的感悟/index.html","ed64b2f388494fa254a51d98327cd5f5"],["/分割ROI篇/index.html","eeb3f514f1776230786319f091e279db"],["/分割精度说明/index.html","8b1e08bef9db67a8f4ff6ddf7379afb7"],["/分块程序执行/index.html","22bd9d25ebaa0ff5ee4fd670ad9a7ec2"],["/加班公司黑名单！！！/index.html","455aec064fc9a6707f05e23e66c4e15e"],["/卧槽，上知乎热搜了！/index.html","52719e8f19c9ff719f2e30e518f09f40"],["/卧槽，我的小破站爆了！/index.html","72a75819a475dc3df5de5462af4444dc"],["/卧槽，我被盗版了/index.html","641f9a455800af3a4d73b2fc4f7157ae"],["/卧槽，还有985大学在大一上C语言课？？/index.html","d31f2c18aeaf80f86a04d163c3b4c451"],["/历年微软面试中出现的leetcode算法题/index.html","d28b63ace911dbcc1dfab0c30bebf918"],["/去特斯拉试车了/index.html","6194c5ab7718c24f0eaed5ab852df0f3"],["/吃苦的三种境界/index.html","87f9cd5a66d8284fa77ec48a084a526f"],["/哪本书适合推荐给 Java 初学者？/index.html","129760ecf40dbb1e3007caf52998ea99"],["/哪本入门级的学习数据库的书最值得推荐？/index.html","74fbfab18d1fbbe29305dfcfc89ba1be"],["/国内外常用的AIGC模型/index.html","c6ed76d66550581de3119c94c89a1194"],["/国庆假期/index.html","62b49534a9ecc59fb4e0e4aac1949665"],["/图谱程序字典/index.html","a1801314c61ef80ab127ac8fc4a0c7ee"],["/图谱训练与分割/index.html","fc7ff3d56f4aa30ee50ef90334a1928b"],["/宣布一件大事/index.html","c0b3560409230959a3beb1b930bb0d77"],["/小鹏P7i试驾体验/index.html","56b40ea21685e881d8b882af7f8f36a9"],["/微信PC版3.3.0内测更新，电脑可以刷朋友圈了/index.html","fd6e356804c043f21b8c5d2f4986568a"],["/怎么更快的赚钱？/index.html","2ad8984af793dcd85f3349c534959bc6"],["/我毕业了/index.html","d27b0e09d5f20b0ca9b0feeb116b6288"],["/我！真！的！找到了！爱上学习！的方法！/index.html","fa0674f6f630d0c23053a9e2cc7335ba"],["/户口的意义/index.html","b6bd20a2f10b1d8640a3a84302e08fa6"],["/推荐两本经典算法书/index.html","2db7fcdd259b07abe25b16fab5b3cd4b"],["/推荐几个在线学习SQL的网站！/index.html","132ab4b59343e5a045ed1b11da96a509"],["/搞了一个程序员成长晋级社群！/index.html","3ccf16fd1d001c85ec61ea8ee5b8a330"],["/摘抄/index.html","5aba1b611538d47f99137ff08f36ae90"],["/暴跌30心态崩了/index.html","d81098d77561e04e5892b33b35177cd9"],["/最近很火的ChatGPT到底该怎么玩？/index.html","beac2f0ee062b56c51be76ac455c4701"],["/有哪些好看的日历可以买？/index.html","3d402c5a6ded478e1be4102d0a293632"],["/服务器有啥用/index.html","c5ab6ba8a170262488066abedd7632b0"],["/来长沙了！/index.html","7589a7d0de03cfba8d3c74e9f267d2b5"],["/校招污点公司名单/index.html","efa0c01e063636616fe5f07d781a982c"],["/梭哈200多万/index.html","69e251f9189db34768616657a9cdb86d"],["/梯形图入门/index.html","9933be5c374faed45aa37e198c4c8ee0"],["/橙心优选，凉凉了！/index.html","bb7f93b04a9d25eb9920af25e3f4dc56"],["/比亚迪汉试驾体验/index.html","5ac05833e2d85ecc2ee5985f67485f14"],["/清华转学成电，真的牛逼！/index.html","3b31d501d773127fb08107125e22f21a"],["/滴滴程序员被亲戚鄙视：年薪八十万还不如二本教书的/index.html","b6e106bfc1e653332100bb022f46533e"],["/社群！/index.html","ce23dcdd6fb94174ddc12b6fb0b9e89f"],["/科学上网之VPN篇/index.html","50e514b45a4536f150644a7296b27cf1"],["/程序员必备的几个技能！看完你也是大神/index.html","af87b5049264a5b8e157e340415f6a89"],["/程序员绕不去的槛，Linux！！！/index.html","048f5e7b3e9955f5855d72654d1ef245"],["/蔚来ET5试驾体验/index.html","5cf6a1b7cfb48a7ddbf6ffa43f176f77"],["/蔚来，牛逼！/index.html","e744e7690a1a7a19cb79471b81d66314"],["/被录取了/index.html","e760d0ab6c61b16119f6099f5f2aaf99"],["/被找事了！/index.html","ac8d98c7602769ad197a8861ad57d32f"],["/被拉黑了。。。/index.html","d9a7823f7eb91dd65b3975e3b0588d61"],["/被车撞了！/index.html","f04edd79c73cf72c082f2d663dcc6c56"],["/该如何选购固态硬盘？/index.html","5bfa53fdf24a691bd89b4f9ac96d95f0"],["/这本书一定要看！/index.html","06fd1c7acb3a8e4fccdde9bbc886e28b"],["/选Java还是C++？/index.html","d385499da47518b0beca95ae4f9e01cd"],["/那些让你起飞的计算机基础知识/index.html","4bc0e9ded6e7ab40867e6aec890bc696"],["/靠这几本算法书，成功拿下大厂offer！/index.html","d61c10be9271da510bebcc77cf589491"]];
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
