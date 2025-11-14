/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/0010-city/index.html","7f73561fa8787f796b2bc4292435b67d"],["/10-algorithm-book/index.html","e974eecdcc9c877767c82d5102c304ae"],["/10-website/index.html","8fbc5b037eba450143d1fe4026fc54e2"],["/100万的小目标/index.html","7c18a1ba93f701c34d8bc4a89dc98f9a"],["/10w+YYDS！/index.html","65e9e6a779c1997105bdda216228516a"],["/12-technical-tutorial-sites/index.html","726a72bd156fdf2e0c6e74bb2541cd72"],["/2 6 岁 了/index.html","796284f1bcaf0a4362a4e5c8cc80bdc4"],["/200万，啪，没了。。。。/index.html","33c65582128ff70aaf708a61cc654c17"],["/2018ECCV-Paper-DL/index.html","77972a72fb78aac6c72c522234e8490f"],["/2021年固态硬盘选购最新攻略（小白避坑指南）/index.html","e1231bbe7cb3aaf93634aa82f512d17e"],["/2021机械键盘推荐/index.html","46dd4e06c3c7e72dfeea9165d258ad51"],["/2025-07-15/index.html","ae8e376ad8c13e5c0eb6e0ccd7ed1bb0"],["/27岁了/index.html","9e6afa9978783fbe2494e7d6166d571b"],["/3D-Convolutional-Neural-Networks-for-Human-Action-Recognition/index.html","90916a7ad488cab52a1374c8847ef395"],["/3D-Deeply-Supervised-Network-for-Automatic-Liver-Segmentation-from-CT-Volumes/index.html","03aa61934ec521f73ddfae4e6fcdc5a8"],["/3D-Unet-Experiment-notes/index.html","52d421da0dfce924532c29065d5a00b5"],["/4-Software/index.html","c93af660f95c78d099f768ca7562bd4f"],["/6-website/index.html","7abc28f13e4c4aa89c7fc2ff80ed29e8"],["/7-terminal-tools/index.html","0c8ffd6e39e5446c08975b660ddf512b"],["/AIGC中典型的深度学习网络/index.html","33a8523665e3789192cbc9c27a64cf07"],["/Agency-model/index.html","77c0b29fae7ffe2580c94de0fb6ae686"],["/Algorithm-brush-notes/index.html","7fd861ae08f3d09bef4b5cf402c7f111"],["/Ali-recruits/index.html","e58daa0abdaada8569df4c2ddf33660f"],["/Android-open-internet/index.html","464e79e473db5168c9f7591c049f7ce5"],["/Appearance-mode/index.html","59caf71abecb2add75828b752682c2f5"],["/Backtracking/index.html","f4f30b67952f0887268ffc8dd9d61dfe"],["/Baidu-Sao-operation/index.html","497c37a1a7bc4273ea102e264929f415"],["/Batch-Normalization/index.html","0a48c24e5d85f56ea559d30377aa8677"],["/Best-AI-tools/index.html","2b111d08ac229e1728ddef09cf35c62a"],["/Bias-and-Variance/index.html","e0524479513c836b757b25843e550c79"],["/Binary-tree-traversal/index.html","71ed14f89f8e1b3c8a3a325927d481d5"],["/Branch-and-bound/index.html","de5c59a1e9d52e5d22a8cf08a956fafa"],["/Buying-computer-for-the-first-time/index.html","eabe8e6d38775648cbb2744ffa4ee041"],["/B站向北邮道歉！/index.html","70a095030569a5999d2349f4f84d1813"],["/C++-string-function/index.html","806ccb8ebd9de376a8aabf3986fa4ef6"],["/C-Java-DevelopTools/index.html","d6d635292563aa985f1fcd2f18f9ed0a"],["/CS-Classic-Books/index.html","7c3e30868068dd49c67784d36ccb070b"],["/CS-network/index.html","84ac5a976f7f6f51ec148094b2aae9fc"],["/CSBook001/index.html","9804ac711f084cfd7ad1f1df55e9f098"],["/CSBook002/index.html","936fa1bca2a8c9fae9a128ede5800709"],["/CSBook003/index.html","ce744a8fc6312845a6b52c33731c52b6"],["/CSBook004/index.html","975d4d97672a804964eaf61b32e6589b"],["/CSBook005/index.html","0c4bebfe10d0b7da1b5810dcd407ec7a"],["/CSBook006/index.html","2a6a4e7f8d7d720e4d28dbbdcf41fdec"],["/CSBook007/index.html","7eae0ffb0dd6ca777dc4445560de0311"],["/CSBook008/index.html","0048756ed66f126d9b1a337b7d462ab5"],["/CSBook009/index.html","ce635275893d1714583a0e5a9bdfd6f8"],["/CSBook010/index.html","c84564c9a00b145b557546bee9b28e80"],["/CSBook011/index.html","d7724db7e1b3caa2332c6fd3dbdf3e3b"],["/CSBook012/index.html","16da8d41e1c65098904028ff6d51da58"],["/Changsha-really-fragrant/index.html","218e083e71b9fe32d6e64831e8c49a2b"],["/ChatGPT-VPN/index.html","8efd28a55bfd807daf4cfe323de89781"],["/ChatGPT/index.html","681c1a1b9f6ef7b9a6af2570eb91f7f6"],["/ChatGPT！王炸级更新！！！/index.html","1de5f1eff2196507d03e76ceedb34d57"],["/Chrome-crx/index.html","23d71316bdea09147f693d7e226d39c9"],["/ClashForWindows/index.html","5c4971df588b63abf3207d829df82ac1"],["/Computer-Classic-Books/index.html","b8b59030d17b62ae65cce723453278ab"],["/Computer-for-another-major/index.html","818f6ae070652f14a732a58d2efbcff4"],["/Conditional-confrontation-network/index.html","86f09e06ab77dc5e10a4c7302bffc3fe"],["/DNN/index.html","c3740f3802b7ab2821b3c39433880166"],["/DSN-segmentation-liver-experiment-summary/index.html","6b76b40881a3c1b724c2ae1e0b787155"],["/Data-enhancement-elastic-deformation/index.html","70ccfe3a343b8956c1c0cc5c7e09fcea"],["/Decorative-pattern/index.html","986aa77813e8c5535a9a411079726da5"],["/Deep-Learning/index.html","a246e9cd77ca0e13fd277dcbeda75a1e"],["/Deep-learning-and-medical-image-analysis/index.html","9df93a1fae802dec157d67168e79bd4a"],["/Deeply-Supervised-Nets/index.html","afa5ce1857191705b5418a4acaac233c"],["/Deformation-model-based-sparse-representation/index.html","9df8beed68a3c1b2e96a523473305335"],["/Discriminative-and-Generative-model/index.html","ee045e14f9a99a7c8fc158008f1f145c"],["/Distributed-transaction/index.html","4de5897eadc938679aaf6237cb2161e6"],["/Divide-and-conquer-algorithm/index.html","af34297fe06e5b31f5f0e389eefeb72a"],["/Dll/index.html","f9414765908235a78c74a648d3673a77"],["/Dynamic-programming-algorithm/index.html","b11a508178afecaf97e190fa39921e42"],["/E-book-download-commonly-used-by-programmers/index.html","d5043bca75a81dfa5fb7b747f47a2536"],["/EditPlus软件的安装、激活和配置过程分享/index.html","a037e8a55e662b440115bc91c10f5a51"],["/Eight-sorting-algorithms/index.html","e769c1fd5ed9127664126bbc76a22ac6"],["/Encryption-Algorithm/index.html","b7cbd2d6e9a7417788a589a7be2c8e75"],["/Eolink/index.html","adb339701123d4ab7a29af138955aef7"],["/Factory-and-strategy-mode/index.html","ceb34e8f6c76ec48f0ec7b9c063857db"],["/Foreign-technology-blog-community/index.html","a232d236e489bcc9d73bb41bd7cff53a"],["/Functional-model/index.html","14a5bae23810105dc074acdc64745bc3"],["/Fund-type/index.html","28fbedbb246cfb61f8ac2ba59da02f63"],["/GPT-4o/index.html","acb07e5a88e7d7d6eb1588b51c5c8dd2"],["/GPU-medical-image-processing/index.html","b01c392bb4121a33e6a9d72075946f32"],["/Generative-Model-of-Unsupervised-Learning/index.html","ddc4aef1a32d23dc1751dfe1b8936af5"],["/Git-Learning/index.html","8d412a23e32e5473953d4759aeb952a4"],["/GitHub-2FA/index.html","e56589aaf0ee37d2f8255c1fc29a6fb7"],["/GitHub万赞，程序员必看操作系统总结！/index.html","28e1f31ceadb58afbfc5fe758fe47438"],["/Golang-book-recommend/index.html","91c1283503655c91c6ebab6df575fc10"],["/Golang-learning/index.html","9cbe8f724ee1e6b8e6a6991b3e44dbc9"],["/Gradient-descent-optimization/index.html","5d7f80d70dda0edfa101fbcd411fa975"],["/Greedy-Algorithm/index.html","44cb5ce8d68fed569274010033b9d947"],["/HK-bank/index.html","44fb8428cfc2826fea94eb826e222d13"],["/Head-to-head/index.html","50bc5a335aa80e962568f05265507ba5"],["/HexoPage/index.html","c42a9c22889e4b6c7c0dca13ece77f1a"],["/HistCite-Pro/index.html","16d1bfb3be8eefea561ddd41390c96df"],["/How-does-the-program-run/index.html","a2ad43c80ed174b8326feae2c091194c"],["/How-to-judge-whether-technologyisreliable/index.html","2be2425e9c8b59c2d96c82b625b18d73"],["/How-to-learn-design-patterns/index.html","7feaaaf039f881fc552b51c825ef334e"],["/How-to-learn-design-patterns？/index.html","bd1a0acb6fb0559d678b8d196869acd2"],["/How-to-teach-yourself-programming/index.html","d40cd801346c5706b381e1348aecc525"],["/How2learn-Python？/index.html","985f77934931591e1bf5985315334138"],["/IDEA-shortcut-key/index.html","ff0c6729cd803988c5a13a94920c74ed"],["/IT-interview-basic/index.html","deb31b03cb95c3ee0d03bab0e91ed265"],["/ITK-VS-install/index.html","ac09fed7bae7bfac0e08c7b314c0411e"],["/ITK-VTK-ItkVtkGlue/index.html","3f35fab35c4e1aa3c7a14158c44ec73e"],["/Image-processing-plus-noise/index.html","397cc2496a26738ccc3ac07f917df6b4"],["/Inception-Going-Deeper-with-Convolution/index.html","b4c684dc8c084cdfb3a7952b37afb37b"],["/Java-GC/index.html","6edc992b8b0cad36556a9f7034d086c8"],["/Java-Servlet/index.html","7a6a39e5be1d85abd326985fa9e586e0"],["/Java-array-and-collection-sorting/index.html","8032de0e6a34d3e9104f7e489e1327eb"],["/Java-development-tools/index.html","d3518a818643e7c5a48e23c4ea3e8b2c"],["/Java-eight-data-types/index.html","563b74eb30c43e4098cd30f84ee0f85f"],["/Java-interview01/index.html","95dab539c067cfb5b9116b5ba7f2c674"],["/Java-interview02/index.html","6ce4491cd1ca569cb292eeb5df33aaf7"],["/Java-interview03/index.html","dee65d81408486e03309f081b20ef8ad"],["/Java-learing-map/index.html","94d4a5e0f666d4494cb786ae565762c7"],["/Java-learning-route-map/index.html","efa90cd6f451add15a1efaf798af368c"],["/Java-memory-area/index.html","f416211486e99ab2b69aa09b1774f30a"],["/Java-memory-model/index.html","372a38406f3391941e25f37bab11d320"],["/Java-multithreaded-learning/index.html","768833b25829ba6966f6fa6ff2fc8275"],["/Java-project/index.html","6db5c176d97865044c00c1c5f54eddb7"],["/JavaWeb-Chinese-Garbled/index.html","e3eb72284627b3cb70826c84c8dfb4f0"],["/Java还是C++？/index.html","9160198c3eb65a5387ac807681204a59"],["/Kaggle5-step-guide/index.html","9a15e1019448e89b46b5be35071ac36e"],["/Knowledge-points-of-Java-garbage-collection/index.html","76391a70557c91746e33c79a75ee61e7"],["/Layoffs-and-Hiring/index.html","f2eda06df7827d19fccf8e6f05f34f55"],["/Linear-regression-of-machine-learning/index.html","667875ad3b141a473dddabfb4d0a43db"],["/Linux-Compile-C/index.html","71c867abb8b19b89ce73fec033f77981"],["/Linux-ITK/index.html","5d3d9d0176bf7c15e919d906fe9d9605"],["/Liver-segmentation-of-sparse-components/index.html","e1c9043b9d91de6f41cd049de45624d6"],["/ML-EBook-paper/index.html","21dd098d841d36d32abf367fc1a101d2"],["/Map-uses-multiple-maps/index.html","0de5035f9d7164ab3b434fa377bc25cb"],["/Matlab-Graph-cut/index.html","9a01723237581af4bb27f578f706dbd1"],["/Maximum-Likelihood-to-EM-algorithm/index.html","0c8780bc9208b35baa9240887ee5f1ba"],["/Mean filter and median filter denoising/index.html","f51b39eb3a93534bfa5890b087075127"],["/Medical-Data-for-Machine-Learning/index.html","05af10bda28f2cba87d3f244b5268b7f"],["/Medical-image-analysis-deep-learning/index.html","b219cb4bceca16b5ff163fd880848477"],["/Medical-scan-image-processing/index.html","b5eaacf734d216dfb97c9b70cb2fe8b8"],["/Merge-sort-algorithm/index.html","4ff3d8377a538eef7bc754977d9ef6cc"],["/Monthly-income-2W/index.html","3eb664e904233e935910aa46e3a29e4e"],["/Mysql-database/index.html","4e6fc0f2dc085eea2bbae2e0e382adcf"],["/Neighbor-Embedding/index.html","be19e3c65e7df6134928c21f84400c00"],["/Neighborhood-approximate-random-forest/index.html","88af01110e076c4db6254dba0b6612d3"],["/Net-and-official-documents/index.html","1238a7e7cee8e5a8c66904d6de572c7f"],["/Netflix-VPN/index.html","dce73770324ba24a9ba52ba118deac32"],["/Network-principle/index.html","8e620acf124dcae57ef240ecaf625826"],["/New-Hong-Kong-stocks/index.html","7cce820fed1650174fe9dfc704556b70"],["/Nice-to-meet-you/index.html","48af4e9c8c9a1bc5e98f5dad5675e42e"],["/OS-processes-threads/index.html","72e050b2fc5fb69ed47b92feffd3ede2"],["/OS-run-environment/index.html","256d10a03c1b7a2523edb2272c30f67c"],["/Open-Internet/index.html","8ecdacca1b7a4932d3fca88c31142343"],["/Open-Internet2/index.html","1a58d28727ef12b5ca302900e2a6ee56"],["/Open-source-community-and-rewriting-website/index.html","db3e361db15e568e6666f9b15f461547"],["/Panoramic-image-stitching-based-on-SIFT-features/index.html","b0fc26c87125d467d51cbe11817f6aed"],["/Parzen-and-KNE/index.html","d9ca3897adbb3d1fc41d26dca02c2743"],["/Personal-technology-blog-site/index.html","84ed931f22b8cf37879899dcab706cfa"],["/PicGo-Gitee/index.html","402d7d5724bb84c389f0d0dffc8faf06"],["/Programmer-treasure-chest/index.html","994d23fe9f81d8b429e43b328b01e1f5"],["/Prototype-mode/index.html","a3b843336e75bee36f8c6e371ec73587"],["/Python-base/index.html","e5a643c747fe2bcdc58abf14864c16e7"],["/Python-crawler/index.html","f4638129281b5b5eb48d5350b4fcf9a4"],["/Resume-revision-suggestions/index.html","cf127cc86fbdfa11eafed209a1403cef"],["/SEO01/index.html","558599ebf76ea92c62ce5cef62b5b3c8"],["/SEO02/index.html","825f0ff23fea49358a798e5f47ef995f"],["/SPHARMPDM-MEPP/index.html","489b6fd74e0edee1159780170de0b303"],["/SVM/index.html","4cc229e9064f7d1a40e54305d1d3ec74"],["/Semi-supervised-learning/index.html","8e41de00b699203ac94810a07fdec288"],["/Sequential-model/index.html","75c77e0e556c66163e9b072b6dfabe48"],["/Shape-Based-Human-Detection-and-Segmentation-via-Hierarchical-Part-TemplateMatching/index.html","0ff7e9a4037ba1d44a9afa59368dbfb7"],["/Spring-basics/index.html","1845f12db5a3a48be06eba6045cccc96"],["/Spring-integrates-hibernate-Struts/index.html","a90264adf90cb585a9462b26ad45db1c"],["/Structure-learning/index.html","b729c86e3195abe3e9f23fb2b70b9c60"],["/Suggestions-for-self-study-of-computers/index.html","a541ea3ca336ef5837b88ec21436fee6"],["/Summaryof-HongKongStock-Account-Opening-Links/index.html","1568f6972480db1af835c438d6429609"],["/TCPIP-detailed/index.html","129a5f1f1f91ea4c0cad7f787a8e5e38"],["/Telegram-VPN/index.html","45437e49d867da9ca2526c212f005764"],["/The-essence-of-shopping-festival/index.html","d9d499dd8f0fbb43f3b1ecec8a35a4db"],["/The-most-important-investment-in-life/index.html","2938f748d37bf3cc52fbae517be87d50"],["/The-most-successful-nvestment/index.html","8a9fde48491bd47f5535de471853d819"],["/Transfer-Learning/index.html","dc23f9c5d693f7f1c1709c2c01c3d0a5"],["/Transfer-to-computer-major/index.html","42468edd2a76692b79c1840a57b7a19f"],["/UNet-Convolutional-Networks-for-Biomedical-Image-Segmentation/index.html","7c8dfa2c141fdf17d31f9817d6834cdd"],["/Ubuntu-install-sougou/index.html","ca9fcc8631813ee14f130046376e5674"],["/Understanding-of-paying-for-knowledge/index.html","549665757da11b33855087522559f790"],["/Unsupervised-Learning-Linear-Dimension-Reduction/index.html","9c4dca4f367ad0f887cf53ea86e2baff"],["/VPN2025/index.html","886bb04f40a1e947f83ee3415ea973df"],["/VTK01/index.html","6375c511c1db3a21b774560d550c1832"],["/VTK02/index.html","50be15f3f76b53fabacb2888b45ef6a2"],["/VTK03/index.html","f39cba673b37281364a488aa2e75cc7f"],["/VTKRead-write/index.html","a6cf74156c9dadd83c3ce466d423b3ae"],["/We-are-all-good-kids/index.html","dc177149c53acbe94007742581823a69"],["/WeChat-80/index.html","460a5feeb03b501b2fa7e31955a9d15a"],["/WeChat-red-envelope-cover/index.html","72bb2419c9480c6b35218e1d25345cb8"],["/What-is-crawler/index.html","91a7af522c6b7441684c269dba9824f2"],["/Win-OpenInternet/index.html","571e8b9e519fad7e7f24124162848943"],["/Windows11-2kfans/index.html","d567bdda7e99e428cd5592ab0b886280"],["/Word-Embedding/index.html","89ac16b23678a8bb0b811b793920e11b"],["/YuanShikai-and-his-Beiyang/index.html","8122c2a4fea914bdbac92a83754edbcd"],["/Zero-copy/index.html","291b10e0cbe7dac5dcbf142dab824514"],["/about-keras-model/index.html","d82b496f352aefa6256fbda2f8e11cb3"],["/algorithm/index.html","c0dc56449c9ae45594694e3ca5eed1cf"],["/alibaba-Java/index.html","e86345d843f21c5fed53a910a10b0cc4"],["/archives/2020/01/index.html","8ea4d47f2daa82a456608bb8a0c2f92b"],["/archives/2020/09/index.html","78c283b30fd3d6a61a2ea6707ed76539"],["/archives/2020/10/index.html","c281a391577231a48cc3fe5b11bed3dc"],["/archives/2020/11/index.html","1820ca3e2b02b2fda1fcfb64b4cf4c14"],["/archives/2020/11/page/2/index.html","fc6d8ff8769c1f14bfbe1c897975d5fc"],["/archives/2020/11/page/3/index.html","e1a0bc91887785a34556269f56ab6a18"],["/archives/2020/11/page/4/index.html","8c23c622caeb47f79a865c65a9df4045"],["/archives/2020/11/page/5/index.html","be15e3b2ba65c8d2140e0f557b0beee4"],["/archives/2020/11/page/6/index.html","3e7d2e23e043c4e057efa7e0fa4ac0c0"],["/archives/2020/12/index.html","783ffe2eff9457ae3026d6305045beb5"],["/archives/2020/12/page/2/index.html","4a52ca17432f5c3390260c3c48b2f825"],["/archives/2020/12/page/3/index.html","369c5dc4c21dce471e0a6d4db2031e40"],["/archives/2020/12/page/4/index.html","16d439e2e72751a41ffc1079b7090cb3"],["/archives/2020/12/page/5/index.html","98f10dcd41056892477370ee76adae00"],["/archives/2020/12/page/6/index.html","f966b7c9c9f39bb90693146873ab47f8"],["/archives/2020/12/page/7/index.html","dc12e5656b8949f529e4fab3d298ece6"],["/archives/2020/12/page/8/index.html","3ddc33e3e8fabb8e3d2858705903f0f2"],["/archives/2020/index.html","5a85fb2498496d420ac7e1f6e367d991"],["/archives/2020/page/10/index.html","50958992edf6dce1f35e3ab0e8395c0e"],["/archives/2020/page/11/index.html","0f1b7c6164795116bdadd3fdf685dd3f"],["/archives/2020/page/12/index.html","643c3cfe4bb29526a973bc369e1dd7a1"],["/archives/2020/page/13/index.html","e509fa916b07d7b290cf2b39ae5e20e9"],["/archives/2020/page/14/index.html","75f106cd04ae4897401596872799093f"],["/archives/2020/page/2/index.html","9872919581d0b8f829046226e12fa6c3"],["/archives/2020/page/3/index.html","51b03f0c493b47626748249893c50761"],["/archives/2020/page/4/index.html","d307d9621cd2fa42031ca135e48cf155"],["/archives/2020/page/5/index.html","4a9a2eb1408be1ff50663a9ad50d2d5e"],["/archives/2020/page/6/index.html","194b939ec89e807336273bf674d0cd25"],["/archives/2020/page/7/index.html","7b4617b537e19ee516c4c9f66e2c2bed"],["/archives/2020/page/8/index.html","e09e3a8319b4c507c930b4d94c4d75f0"],["/archives/2020/page/9/index.html","edbb8b534601cb349b2db55a0398076c"],["/archives/2021/01/index.html","77d767656dcf26594412b8a2b8e10bc4"],["/archives/2021/01/page/2/index.html","9a780aaf02cecf41422942883e4d7ce6"],["/archives/2021/01/page/3/index.html","ea4e5a6c8c1ea6b4ba002c2ee960ff39"],["/archives/2021/02/index.html","74a0cfc1efde12f510085b9cba5a2aa5"],["/archives/2021/03/index.html","127cd0c5df6c11cedaeb89ce6fe58865"],["/archives/2021/03/page/2/index.html","cd631cb879f9e3eccb258709d996d3c2"],["/archives/2021/04/index.html","bdd5b5b1d029f726d442c04a47de4505"],["/archives/2021/05/index.html","afc697d7a6ad1218fcf76b64eb291d13"],["/archives/2021/06/index.html","53f4ac626c80bf9f9ee4418ede5da36f"],["/archives/2021/07/index.html","4840ca69c40c3a85a8064f08871445f3"],["/archives/2021/08/index.html","624f1d2a6553431f0f8d3e28038b81fa"],["/archives/2021/09/index.html","a8552350cdd6df967604ba922c0eed00"],["/archives/2021/10/index.html","08882d66f4253a8a752d685f8e2ed329"],["/archives/2021/11/index.html","648272fe60f2e08cbf0064d2af21621c"],["/archives/2021/12/index.html","d7c77857c184cd13e58d51992f73c355"],["/archives/2021/index.html","f2b1a8144843eed0ac5c7f1fe582f6a7"],["/archives/2021/page/10/index.html","68f6d550da7d70ecbcc1a9f1ffecfff1"],["/archives/2021/page/11/index.html","ca3971e18e9233ed2f68d1d000d5fc5e"],["/archives/2021/page/2/index.html","0b0a0f92e6b53318edb18e4097d29591"],["/archives/2021/page/3/index.html","ca172f9a5e190059cddedb607a77a118"],["/archives/2021/page/4/index.html","c3cc38dd57af41fed04a8484e99e2e33"],["/archives/2021/page/5/index.html","cd9c33a0de48fba851a692103a7abf02"],["/archives/2021/page/6/index.html","d4becece400283b482a0aef44bf78dec"],["/archives/2021/page/7/index.html","71f0485e546ef67f91ca68c4b41644a5"],["/archives/2021/page/8/index.html","50d42c15cf445e2fec55cad19b34543b"],["/archives/2021/page/9/index.html","f2b71972c51ab7f08ccc26edbb08c791"],["/archives/2022/01/index.html","2a12bf2d9725ce0d84484af3f8e12ef2"],["/archives/2022/02/index.html","4d1c590fd2efa3ffc48bf789f713744e"],["/archives/2022/04/index.html","8b25fa1a5db5cbf26b7551897d16a7c3"],["/archives/2022/05/index.html","a9854b892d25badeb813586c41271da8"],["/archives/2022/12/index.html","f7d5317d566965e47660d784b57b9e5e"],["/archives/2022/index.html","4c0a75cfa6ef6399dcc9a7eb8865206c"],["/archives/2023/01/index.html","8287a0c78fee4c8b0fe30fa7b7dfdbce"],["/archives/2023/02/index.html","d5d9f1e1da3d07199e8426b43cb21a99"],["/archives/2023/03/index.html","22b7567835142122df3075b8b33bd517"],["/archives/2023/04/index.html","00c46e4eff1d1e77a263df745c000afa"],["/archives/2023/06/index.html","a91b39762d2c814ee50aa0ea7cdf9290"],["/archives/2023/08/index.html","d5cbe08ab0f430420d437a58f86ffcc5"],["/archives/2023/10/index.html","0fbb09642dea4821bd97212e2ac38fdf"],["/archives/2023/index.html","4128cc71238245bbd34a7f7860e657ca"],["/archives/2023/page/2/index.html","98464df0930a36e2f38d969a42aefa4b"],["/archives/2023/page/3/index.html","c9a3806ea5dfb55c4f278f9c92b7b160"],["/archives/2024/01/index.html","5fd1596d5f0d8369c02237f6699d689e"],["/archives/2024/02/index.html","37b220597fd019384d687f3ed62b584e"],["/archives/2024/index.html","bc4a65b5e012e8402d5bf3bde89069fe"],["/archives/2025/06/index.html","de64ba25adfc21b94795c2d2ca41379a"],["/archives/2025/07/index.html","434106200c5f7224b7ace3bfef80cdeb"],["/archives/2025/08/index.html","0ce11758c32469ca40f27fa62d8e28f1"],["/archives/2025/09/index.html","869506c4b0d71ae44c0a789c0539f7d2"],["/archives/2025/10/index.html","1d37590da979a17f4009792d5fa81e51"],["/archives/2025/11/index.html","cb8c5cf13c50e6b7348fded5de584a55"],["/archives/2025/index.html","e3b4bcdbacf461c599a68b976cf9cde2"],["/archives/2025/page/2/index.html","6c8f3722d82bc69f03f8781f7e5300f8"],["/archives/2025/page/3/index.html","24fb5f2f55324321b01791c1ce316450"],["/archives/2025/page/4/index.html","954b5009a7cbbe546e61457edbca55db"],["/archives/2028/02/index.html","01b80524e761ceebf5ef176a27b80003"],["/archives/2028/index.html","fb899af66ad055432d37f542bf84c6be"],["/archives/index.html","8dcd2b681f573e51b8aa1e16a200eb3c"],["/archives/page/10/index.html","1cab46f0e3f8d1cc1ec52c23bd8564d8"],["/archives/page/11/index.html","d0930ec5701345c3e2a572fb3e772733"],["/archives/page/12/index.html","a5b392488d7b2b1a420a4b0a6f20967c"],["/archives/page/13/index.html","32a8b3b7e4878a818d9b322007e7b351"],["/archives/page/14/index.html","3d0b05d683c2ffaa08521117f47405c6"],["/archives/page/15/index.html","9b45114d6e5d9dc9393df83f02d0b838"],["/archives/page/16/index.html","c3f30defc8a62917a6cc6ec35c69be8b"],["/archives/page/17/index.html","73766efb9c650f3744b6398ed287f418"],["/archives/page/18/index.html","e71540a8b759168b370426a79d393c1e"],["/archives/page/19/index.html","2d6fb95ff35e1b016e5ffb18fe615d96"],["/archives/page/2/index.html","8d1f4f235da79467d637b045d9b91217"],["/archives/page/20/index.html","369716dcf46ac876ee5851c028efd7b7"],["/archives/page/21/index.html","ee78d14bf56fa7e0926f01355c5db6a1"],["/archives/page/22/index.html","20911cae241d83b9035f0ce3279a28e6"],["/archives/page/23/index.html","0834d05b9389715bae4704ed23d3dc45"],["/archives/page/24/index.html","59a0fc3cf53ec97c3ac3a0a31ab5c85a"],["/archives/page/25/index.html","f612edc51e81d42e4878ce958fa91dac"],["/archives/page/26/index.html","a8c509747868b073f1efffe9b55dc224"],["/archives/page/27/index.html","349efa612781a4cfddf9c0bdbb20262e"],["/archives/page/28/index.html","c31fd4ef28d1febbe1d53244a4f5779b"],["/archives/page/29/index.html","a85eb855f86dd462d032c83b1f86ec92"],["/archives/page/3/index.html","727b8e77c2513c72f13e9b42b60d522c"],["/archives/page/30/index.html","8cd7cfc6946f82804203aa95627d957b"],["/archives/page/31/index.html","ee75ee923635aafd4e1ab241e6d22c24"],["/archives/page/32/index.html","08eda8464588a826698add72facc3f9f"],["/archives/page/4/index.html","3bddbdf758e56882b6675d672b632e1d"],["/archives/page/5/index.html","47ba85258cc71858948c96314e406a19"],["/archives/page/6/index.html","09aa45a863825c8a14a56f3f51d8d2fa"],["/archives/page/7/index.html","5646ce480a0831916524de944a9bb1b2"],["/archives/page/8/index.html","5fd60bf33650d254a8a65c736e48145e"],["/archives/page/9/index.html","f595fd274699796ed87210b008c98285"],["/baidu-search/index.html","779d8ec6c0085b4b3a399f2bdaaf6ed4"],["/baidu_verify_code-Hh2fKNlEB1.html","f22b8925ac0944f1bcc7880ebeb203a9"],["/be-a-programmer-instead-of-a-code-farmer/index.html","4f7767465b5141094b149514f548e641"],["/bought-a-house/index.html","86f2bdde210502a213f85209323fd0c9"],["/categories/C与C✙✙/index.html","d11f40371628ea718d6b3f5cbabe517d"],["/categories/Go语言/index.html","24438e45c2aee7ddf4e841d1c1e6f1e9"],["/categories/ITK与VTK/index.html","e24c043506b9af1dd299025c53c1e0a2"],["/categories/Java/index.html","12808a71fd9aa65da7ff2fca380da9c7"],["/categories/Java/page/2/index.html","1e23ab01f7201f38294c5d5d62340934"],["/categories/Java/page/3/index.html","01998ad1357aebb264c7cd492eae00d6"],["/categories/Linux/index.html","6ae9dd8e25fb1ded82acf6f93adffa5f"],["/categories/PLC/index.html","3dfdf66dae9850c2876207c714c5aea4"],["/categories/Python/index.html","c2377fd398416e1982fe74dfb0a9212d"],["/categories/SEO教程/index.html","bf3e342a7c5703b4da6983efacdf9eaf"],["/categories/index.html","ccfb58ed5f4ae895004584a8d2ebe68a"],["/categories/图像处理与机器学习/index.html","d380175298f93ad0e6d6ca2fbc2e0abb"],["/categories/图像处理与机器学习/page/2/index.html","f5160fb9382a9138df23075fdd07f5d6"],["/categories/图像处理与机器学习/page/3/index.html","e8cc0feb4b2f35c0e8e1e055db40750a"],["/categories/图像处理与机器学习/page/4/index.html","dd6be8ceb51089a2b09e352bc416dede"],["/categories/图像处理与机器学习/page/5/index.html","f34fdc0caa6f636ae7cd71194f3218da"],["/categories/图像处理与机器学习/page/6/index.html","fee3ba96fe2e7c3fc00baf7450d66c6f"],["/categories/工具/index.html","a161674f881f4a0549a7ffff856f2c7e"],["/categories/工具/page/2/index.html","a5d21b68fd2e77eeb30f212dff7ce576"],["/categories/技术以外/index.html","df55aae8f2e60e1ff525f307577aacd8"],["/categories/技术以外/page/2/index.html","533dc63161ac6a6ef4464b031603c4e0"],["/categories/技术以外/page/3/index.html","375fad0c80293db3733b5ce1ac485fbf"],["/categories/技术以外/page/4/index.html","6026a452725c44235b5647932ec3a851"],["/categories/技术以外/page/5/index.html","3ecb197694deb6924f0fcf95f5b3c196"],["/categories/技术以外/page/6/index.html","73ad3410bd978908aa3ecc64225c1105"],["/categories/技术以外/page/7/index.html","e6ae3489ce786c8255f4c0eb72f4f2e4"],["/categories/技术以外/page/8/index.html","268c7453e8e291008c2e20c1b1d76da2"],["/categories/技术以外/page/9/index.html","e90eefe359d586f91a17495351a3fd46"],["/categories/数据结构与算法/index.html","0ee146fb4c6ced862e784ac0b6a2a72a"],["/categories/数据结构与算法/page/2/index.html","a32fcb74f36fd627b54284af4f3d974b"],["/categories/科学上网/index.html","d428ade8727ab4c5a15c02a326001988"],["/categories/科学上网/page/2/index.html","fe305d04c2a59db50f8014065191e4aa"],["/categories/科学上网/page/3/index.html","56fdba5f9159868aa0958525cb7d340f"],["/categories/编程经验/index.html","6c852a9b165dfec73def9dc3305bd958"],["/categories/编程资料/index.html","20422229aaa3bff7237e0dff0ebeb310"],["/categories/编程资料/page/2/index.html","34478dd5caa252cb9d6f07f998f71bdd"],["/categories/编程资料/page/3/index.html","4376d5b2830b7f30e02138fc294a5b19"],["/categories/编程资料/page/4/index.html","7f84069e52d78109beb9f509a6fa6aa8"],["/categories/计算机基础知识/index.html","3b8b1176dd927dba3fe14833e6a2d8ea"],["/categories/计算机基础知识/page/2/index.html","8bc9e7b64ecef77b4696e4de0ea55c3b"],["/categories/设计模式/index.html","4d5e3df59109771f99e64f34c6a4944a"],["/choose/index.html","c7acd26a47f79f79c9bf25362f02e443"],["/choose2/index.html","6b97bf7158101701f29ccb559dd0c257"],["/chrome-crx-intruduce/index.html","18cb2734acdc9e7db652e015609d4de8"],["/clashvpn/index.html","c3a37b160b7deb3f036b644fd94ada8c"],["/coder-blog-website/index.html","8b7a0df998fa4eb64d3d19f89fa7c153"],["/coder-source/index.html","781dd26a16a910facd8ffde01c437e04"],["/coder-videos-website/index.html","77354f70bb98dd5c90e46b1d681c96c8"],["/computer-book/index.html","1b44158f090ea810c71345f779c35490"],["/computer-censorship/index.html","73c7727c70b8112008993a7f86aba79f"],["/computer-network01/index.html","aec31178e708e7c07c8e9c6b4b794644"],["/computer-network02/index.html","2c1d076a5caa940234da12dd995bb5a7"],["/css/main.css","bc32ad34ec4990d934c3c647bdb62f79"],["/database-Mysql/index.html","d93325be16cfe547e16284e3175cde83"],["/eclipse-lombok/index.html","aa552628a93af9e7a37993ec6249fb7c"],["/fully-convolutional-networks-for-semantic-segmentation/index.html","5a5402be6ace2948cdb959513867ecf0"],["/great-firewall/index.html","5a4da8069ae24bf319a9e93dda6569f2"],["/halfrost/index.html","a4e6f7ec9123433c8de9462684397074"],["/how-to-signup-chatgpt/index.html","57111ee24561e758a5959ca310c0d79c"],["/how-to-use-Gemini/index.html","b12eb27bccb7d9e4cef8ce119d6f112b"],["/index.html","2216a16081be611c97dc83314176a50d"],["/ios-open-internet/index.html","2b99036aba796ceaea4908a6e1b12430"],["/iphone-open-internet/index.html","56bfade65c82c54c648e705f5fb1c64f"],["/itext-makes-pdf-form/index.html","b9e8a0d7de14834fffb80658bc0cb2fe"],["/java-Set-Map/index.html","f7e43fd1c06967af6ed2f1d00c53f461"],["/javaweb-server-error-codes/index.html","de4bdf373cede29ccf34f21ad91b6756"],["/javaweb-source-code/index.html","42ced8a3147fbf6b934c5c16f2876ee1"],["/js/lib/busuanzi.min.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/js/lib/lozad.min.js","47904d34a224931dd1b615c59a3dbe3b"],["/js/lib/prism/prism-coy.min.css","0ccad54d95845901ead59bfd3ecceb14"],["/js/lib/prism/prism-dark.min.css","a4711d2957d6605eb5682bdd228cf123"],["/js/lib/prism/prism-funky.min.css","efedcdccd7a9ab342d2d9cacd24920af"],["/js/lib/prism/prism-line-numbers.min.css","38e22e790c279bb56f9ec4b90a2a2d58"],["/js/lib/prism/prism-okaidia.min.css","5ac6f9de996fbec68aaa106dfb16e061"],["/js/lib/prism/prism-solarizedlight.min.css","ecc7e64d039873ffcf7fb27babdaeb5a"],["/js/lib/prism/prism-tomorrow.min.css","456af2a14ae4f5089939d5904ac40fe8"],["/js/lib/prism/prism-twilight.min.css","ebb5c355332a8cf9a1ce37a2a69d678f"],["/js/lib/prism/prism.min.css","a5234d614834658887cec6a9515890f8"],["/js/main.js","052d2b299d9c750afea8df0b802ab7c1"],["/keras+TensorBoard/index.html","8769c0b2edc7ae440cdf3012c202bbef"],["/keras-beginner-guide/index.html","662419d99e630ec33d39bd135d5aa0aa"],["/kmp-algorithms/index.html","4c340a50f20ab22320eb4a4da81a5a24"],["/leetcode-Java/index.html","ac87fc1e4d5ddf42d77e97d12b6fe657"],["/links/index.html","f8cdfea1f90be1308d818dc240fe5ccf"],["/linux-java-opencv/index.html","ee0287a9c40f821242679b0b238de63f"],["/msb-source/index.html","47f9ad43a65eb7c4ae1eec9837e6333f"],["/online-BUG！/index.html","52832a8300d2d872e4e32333964257ee"],["/open-app/index.html","12d82d34dc9f57fe21d4b10c21c2a930"],["/page/10/index.html","45027819254b6fa2e0d005be658e6785"],["/page/11/index.html","f91d7c2422cb0bc968bb5795cc3761a1"],["/page/12/index.html","3d84346d8b5321e0b46e0f871d303a73"],["/page/13/index.html","7be00d9bfd161c9205a9b21adbb928fa"],["/page/14/index.html","6827eb8276569c0ff6c6001431dd3cd2"],["/page/15/index.html","620d4a1a72d7d4c5824f264fc82a7959"],["/page/16/index.html","b739175ecb52cb330b94d1dd5521e5a2"],["/page/17/index.html","35b1e4385c782059fdca02b95d40bdbc"],["/page/18/index.html","f28fa5593fdf8e2dff1ee918335c5a0a"],["/page/19/index.html","e1da7f91197991d92912e368c02c030e"],["/page/2/index.html","1588976b27a2e28d711d24aa8ccbf5e4"],["/page/20/index.html","5c47b57f34da0ae44ba66157cb2a3f08"],["/page/21/index.html","a9b9a8a563630700516e1368b6e7b1cd"],["/page/22/index.html","294c267630fd8e2036440d5eb4c82cf0"],["/page/23/index.html","3fff0d23ccf1dfb6c3a8302dd28e257e"],["/page/24/index.html","40a72d8bdfc7c5f6f319243dfadf1f1d"],["/page/25/index.html","d354e72e8a02c6b053ab1e98f285bf5a"],["/page/26/index.html","22db8eb168b2ce2608ba172de9bd7f69"],["/page/27/index.html","d90c81a968fe67e4424fc9633bc8ffcb"],["/page/28/index.html","a39a781d017f568d2dabe303c783bb86"],["/page/29/index.html","3e4b798295588372d516f9a664207790"],["/page/3/index.html","dc9eaf22cab215997cf8441583236e8b"],["/page/30/index.html","e676cfd5920d3b82f1ee1f55f7750c1d"],["/page/31/index.html","43df23968909d3384503144faa613228"],["/page/32/index.html","aa0dc3e0ed6b0c52bcdbac90cfc04eb3"],["/page/4/index.html","21dbbd4013b0e602db9dc0f70e7fecb9"],["/page/5/index.html","b0d2dd5a0e524aef548369690cefd83e"],["/page/6/index.html","2cd46590bdb120b12d6764430900e8a5"],["/page/7/index.html","0ff041cacad48bd2f600340ae669fab4"],["/page/8/index.html","07027040e44fc5d36b4943f8fb12e84e"],["/page/9/index.html","9a419e4ec38fb4b2e90a32fb8b7f2cfa"],["/pandas-data-preprocessing/index.html","d91b78b9646235b9b3813f87d9a12b9f"],["/popcorn/index.html","2bfc833e2f1c4682a5d8b786c89e4c38"],["/python-Blog/index.html","0371ca2ff48dddbb5cfda2e4a3c40718"],["/python-yeild/index.html","99e772b58b6d37ee775f0b10f0735b79"],["/python爬虫教程/index.html","bb4e840e4750bd2bbbb56ea5e11d0154"],["/software-copyright/index.html","1b08c8e7ff36c50966b5bda82e794a75"],["/sw-register.js","21907391ce8e97ea116f1aacb3852d42"],["/tags/AI/index.html","bfa526d4cfa1f97dd4c6361e9e7c8fce"],["/tags/API/index.html","b82610122c322875cbf516a18d9e9d34"],["/tags/C-图书/index.html","073f27d02e1f9f2f463341cf525d3a94"],["/tags/C/index.html","1cffc169992f92165e4d91e4c66f2ea3"],["/tags/CNN/index.html","818db04f89f9a883b6b9443486899c20"],["/tags/Chrome/index.html","02ae5d559603ebbefec470846fd5049d"],["/tags/C✙✙/index.html","324a8df71a745e0c6891cf6692d14a34"],["/tags/C语言/index.html","3b0825dc096e43f04e80fe6460b13cef"],["/tags/C语言图书/index.html","0f7e8c54cc724c9ceb6456a382c315fe"],["/tags/DSN/index.html","4418cfdbe5ce1d8f9facc88ac3c08964"],["/tags/Dll/index.html","ce218c4712342a8d24269d87b10b4512"],["/tags/ECCV/index.html","e4ba27281ded1e4327fdb6ab538df5da"],["/tags/EM算法/index.html","102f283173ccc7fd217654275f8fc226"],["/tags/Eolink/index.html","b0694899074634d8ca7c216829fc3f4f"],["/tags/Gitee/index.html","23fb756931a05024d31dc778c6ca55a9"],["/tags/Go语言/index.html","8685045f674b5f37fdf5bc8b1c8fd8f9"],["/tags/Graph/index.html","b3a2d07560b5e7fc13f6047461ca3741"],["/tags/HTTPS/index.html","2522b9a73d0a19e6dd55ea0d3ad9190f"],["/tags/ITK/index.html","ef970aa60a9137ce12ffbaa9dfdf0d99"],["/tags/ItkVtkGlue/index.html","dd70064783933c07206aaa7b5e0673f3"],["/tags/JMM/index.html","cd97bc4f48ee62882e1bb561d6ccd9f6"],["/tags/JVM/index.html","33cea1925a4e545748715102e58c43ed"],["/tags/Java/index.html","760afc09e44d1ae463819d7176f13ffb"],["/tags/Java/page/2/index.html","bb1201ba2727d1922d38b74a44b526b2"],["/tags/Java图书/index.html","2011a62a804941741cc27310679dc52d"],["/tags/Kaggle/index.html","fef7e30c498a51288d89d160a3f75d67"],["/tags/Keras/index.html","977ef4aa75d92b3159d83d2edbd0fd6a"],["/tags/Linux/index.html","8196481bb11710e4da512325576964ac"],["/tags/Linux图书/index.html","e0c815fd467d57ae939331dd73ab3462"],["/tags/MEPP/index.html","2c84492df0d7a2f5525b1b6093246e6d"],["/tags/Map/index.html","3e940c7b7597cbd9ba9d4b49d1c3a0af"],["/tags/Matlab/index.html","d527313e052edfe5951e645002ccfb28"],["/tags/MongoDB/index.html","3d6957ab177a6f0527036c599f8207f2"],["/tags/MySQL/index.html","b11c77c75b1d604ce395edccc81c07c8"],["/tags/Parzen窗/index.html","f86544350b6c7585a588e658e9fb1268"],["/tags/PicGo/index.html","969e71f392eafb3e6167d79f67b06ad9"],["/tags/Python/index.html","c2cb74dbba6fab4b4cdd6cb3f7f5b08c"],["/tags/Python图书/index.html","6ff894441a051f8623d09d4cd5ecc522"],["/tags/SPHARM-PDM/index.html","4c4c360b8d2c6b0d40a3e5bca8034bf1"],["/tags/SVM/index.html","d3b859cc465185444da94990314b94b3"],["/tags/Servlet/index.html","3595797eba302c006acbf95e7e14532f"],["/tags/Sping/index.html","8072f27f581a7625b262e13108cadd25"],["/tags/Struts/index.html","e356a230076ed25003a09d96bab52e20"],["/tags/TCP-IP/index.html","32a812969df3e86d4369c593920c4273"],["/tags/Ubuntu/index.html","cd7aaf55f17805dd33907aa477820527"],["/tags/Unet/index.html","2fa7468dddd431f84ed53ffc368a99d8"],["/tags/VS/index.html","6ed38cfc559a39e15227c8c2744ef422"],["/tags/VTK/index.html","59806540f67cc28f6f6da05d685627e1"],["/tags/Windows/index.html","0cd6aa13c436d23ef86c733ee3f11697"],["/tags/edit/index.html","a1e2a19b2a98c6d7e8804babd2e73ec2"],["/tags/hibernate/index.html","183d805b3163a086de18fe993373e382"],["/tags/index.html","443ded2ba05e14dee080b302a2fd1d9e"],["/tags/itext/index.html","a889030f005e042fcfe2b8cd150e5214"],["/tags/jdk/index.html","76f334a65db060251221409e8a148020"],["/tags/kmp/index.html","4b85ab7c2966be310b63136d988f23a5"],["/tags/k最近邻估计/index.html","00585ed9c1972fcd6b543b75bae2ea8b"],["/tags/lombok/index.html","b8a6bfa719f69828bff4d28452dda8d6"],["/tags/offer/index.html","5b4d1eacd632cf572f214c38493abd56"],["/tags/opencv/index.html","90863587626e68a4621267df3cd8b1aa"],["/tags/pandas/index.html","dbf2a561e7589f262528729b490223eb"],["/tags/string/index.html","498970f007650117c04c0e7356ae644b"],["/tags/vim/index.html","2ee9482b140061f2dbdf94ddb46c01eb"],["/tags/vtkPolyData/index.html","9834a71793d4639cce24023bae4e1c09"],["/tags/web/index.html","9b46b90fe0d6902cd628bb047bfabc39"],["/tags/xshell/index.html","bf85582195816e5bdb2f36b0e6122eab"],["/tags/yeild/index.html","a0acd21f50d6c122fccf42b749708923"],["/tags/互联网/index.html","b3de07f3a8563e94b8ac56a9d31ee4d0"],["/tags/人工智能/index.html","91b22623714485e6c670f03658e5361e"],["/tags/体绘制/index.html","b91747c8f1b46b7f5144c50ddf3a6745"],["/tags/全卷积网络/index.html","f72bff817770f4472d2c55b0cbbaf6a2"],["/tags/公众号/index.html","4db95d18c85bb5ebe7f1ba04993ae87f"],["/tags/内存模型/index.html","666d9b92a53020f9e6f733c74a572ba9"],["/tags/内推/index.html","bcdf0ef601524fea9ccb480363fa4829"],["/tags/函数/index.html","f6dc17cee76ee1437ae8a4f1c9a5d07e"],["/tags/分布式/index.html","9af4c0a64810cea8f1bd3bc6da4634fd"],["/tags/加密/index.html","9056bfd5567b7b8d40d05883c659623a"],["/tags/医疗图像/index.html","464687865bfa6e8a395df3610dae5a33"],["/tags/博客/index.html","e8591aa9a6c38ab48a511cbbd56832c6"],["/tags/图像数据/index.html","cccd7cb492551e847c7f54e97a4093bd"],["/tags/图谱分割/index.html","e0652b0ca6d5a1b4c70310c33ea428c9"],["/tags/垃圾回收/index.html","4bfad27957e0a2dcc2b140590b2c7ebb"],["/tags/多线程/index.html","fe40606ddf0aa3e48d3b274e12f25cd1"],["/tags/字符串/index.html","f5cb3571e84bc367e7d29ad9a1c3a20c"],["/tags/工具/index.html","b23864ed9436f992f1954b4b91ad8e1f"],["/tags/工具/page/2/index.html","12e5ad4928c960272abcbe227e43839c"],["/tags/弹性形变/index.html","47c0522d2f40da934d82a0c6bed612ba"],["/tags/排序/index.html","9b6b8bb8e79d67fce251d8d8c1382fb3"],["/tags/搜狗/index.html","be89d535e96f7dc4b20dd48dee0cda64"],["/tags/操作系统/index.html","c49b015f8dc706a0a85fd28967d8f69a"],["/tags/数据库/index.html","ac579cc5dc1929c59a2d06e8e53a56bb"],["/tags/数据类型/index.html","e3f07b1b2fcc3d1300358748ba4676a8"],["/tags/数据结构/index.html","523779820c43b763c97e234c5e25b4cd"],["/tags/最大似然/index.html","d4fd59f362cb85c3070f4aec1edf75f7"],["/tags/机器学习/index.html","415cfa37516afb0dc2fadabeb9d9483d"],["/tags/机器学习/page/2/index.html","6c2135bfa972fe1201435d9f24e0ef68"],["/tags/机器学习/page/3/index.html","ce5e9768c83b0dfc59e3b08769bbecc7"],["/tags/机器学习/page/4/index.html","850b3b2ba89a5724368c282e520304ea"],["/tags/机器学习/page/5/index.html","1ab763c3b037bf6040925872e5db8789"],["/tags/树/index.html","b90764c52fe28098595796fb824ea785"],["/tags/框架/index.html","ab9ef4c687649d889f4772f591d32e46"],["/tags/求职/index.html","d2f26dea83ba0715369f78c677ee6f6d"],["/tags/汇编语言/index.html","c2314df15ca0dc9cd80de77213877116"],["/tags/深度学习/index.html","d468b2b45c1f9f3ebe9fee1342845c8f"],["/tags/深度学习/page/2/index.html","b6fdccb1f1b0f4bbdf7726dc7c068b00"],["/tags/深度学习/page/3/index.html","163fad12cf18a8ddfae86ac5e2e56ba5"],["/tags/深度监督网络/index.html","b5da84390048e2011382c6ebc2e00acd"],["/tags/爬虫/index.html","370b2e67451c440def1ff9281827b14c"],["/tags/电子书下载/index.html","8532defe90c88df068d7782719711c1d"],["/tags/电子书下载/page/2/index.html","4a8d109531ce8a1ce69b0d987281e555"],["/tags/程序员/index.html","bde909b90bb4cdefaccd4993da7f7505"],["/tags/程序员面试/index.html","a33f48f0b4417a1c4109e5d4860c5887"],["/tags/简历/index.html","63eaf14fae991b0a6073964b552dc604"],["/tags/算法/index.html","a8cbce12959a317c902440550617a576"],["/tags/算法/page/2/index.html","7f8cff5b83bb2ba3c344e9c5fe54f759"],["/tags/算法/page/3/index.html","e9193b8dd4eec27d0cc076fbba3a51cd"],["/tags/线程/index.html","b4ae45d8f1a5cb4d215e53e8d138be7e"],["/tags/结构学习/index.html","3b1016b60419616ac5df699ca0ba2bdd"],["/tags/编程/index.html","0f51046d518c947fcd562e0aa6681db0"],["/tags/网站/index.html","f1a1c46bb64373cde703519fc64f4f8b"],["/tags/网站/page/2/index.html","41d62489b698c3eb48161e3c4e28c902"],["/tags/网络/index.html","d64cae60a1ec0c1768ece773aefdacfa"],["/tags/网络原理/index.html","897e91a906d98193d77d9b97afc9ad17"],["/tags/肝脏分割/index.html","7e3d7d9305ca9bba9b975192c33a6e01"],["/tags/计算机/index.html","c7f2baf1b8dab602fe79763bee592156"],["/tags/计算机专业/index.html","116812d4c064829fbb088342a674b25d"],["/tags/计算机网络/index.html","8535cb1491e2615172121bec489c69e8"],["/tags/设计模式/index.html","ebf89d3bb96f5c2665d023224dcb55c6"],["/tags/贝叶斯/index.html","bec7b996db7d1376a66ed672c06613ce"],["/tags/迁移学习/index.html","d03fd530ac384e59247e26d974b27d7d"],["/tags/面试/index.html","0a0348e5c15dcc6b10e31c672f605f4a"],["/the-way-of-pragram/index.html","a5a3ff74367b0265dff8a56ce09fa8d5"],["/untiypro XL安装/index.html","a64ce260de439d0d038c12d383c5b705"],["/video-websites/index.html","322030660f5416608d0ad6bd0ba6c333"],["/wechat-fans/index.html","1492e31d22b504bc561d43198b3d9315"],["/window-run-VTK/index.html","e02e5bf09535b96e7c4d796db6be457a"],["/xshell-connect-Linux/index.html","17baa752258d56fbbcafce2a5ccfc411"],["/‌Accessing-the-Open-Internet/index.html","7ba364f56fb34fc7f17df46f71e5449e"],["/《Java高并发编程详解》，去大厂必看！/index.html","339141eea73cf3df647d8b402e558bb1"],["/一分钟没了 1.5W 。。。/index.html","0bfe388c2003cb6832f5c0ebefdfaf8a"],["/一条高产爆款内容生产线/index.html","4b22e496d799cfcf4a579f51be348230"],["/为高考学子推荐的六个就业前景广阔的专业/index.html","3bf0307cf3e4507d7c044c2b5ee786ce"],["/互联网赚钱机器---社群/index.html","b1737352983cbc21b21c0d94ab8af755"],["/你们常用的工作方法和思考方式是什么？/index.html","1b3cdcd27374b86e3fc05bf1f0ccdbf3"],["/关于环境配置的一些事/index.html","8029c690baa86cf451ffb712273dce14"],["/准备了19w！搞事/index.html","f266e346adc78998b6026c9a3ac43360"],["/几个很重要的感悟/index.html","25b1bcb8c23f229bfbdadec099e01ceb"],["/分割ROI篇/index.html","2c30aa8bc0503d83cb494a2102dc6317"],["/分割精度说明/index.html","f4923198edccb1869817732f7ca32ef5"],["/分块程序执行/index.html","21ad99f4e1ed42ab513d4ff39af6530e"],["/加班公司黑名单！！！/index.html","1f3edaa1bc5050ce481e31b8ae2265f6"],["/卧槽，上知乎热搜了！/index.html","6a373ba46bfe35864e939b8c06caa784"],["/卧槽，我的小破站爆了！/index.html","a0e66ac7a41d0fb23e91e3167c6af1d6"],["/卧槽，我被盗版了/index.html","5d4cff11ef7300853b55d531f3442775"],["/卧槽，还有985大学在大一上C语言课？？/index.html","8996a9b8782fe515d4d9314a472f0db0"],["/历年微软面试中出现的leetcode算法题/index.html","b1a7e06e5ac08f8719f2b50deb0178dd"],["/去特斯拉试车了/index.html","b0242e53b0a3c28870630980a4b4ee0e"],["/吃苦的三种境界/index.html","f19fae08ac3e3069af9244c71160c447"],["/哪本书适合推荐给 Java 初学者？/index.html","7d05e1e0c291891e05be5215dfd2c8de"],["/哪本入门级的学习数据库的书最值得推荐？/index.html","7addca2d5f071bce15756f6142b2c872"],["/国内外常用的AIGC模型/index.html","9c9ac89012bfc7fa252219064d212f2c"],["/国庆假期/index.html","631b84b3585b459a20456919564425ab"],["/图谱程序字典/index.html","97db3def78e9ddadb5ee8537f47f19ff"],["/图谱训练与分割/index.html","511c1deb906a5152c66f37d8d92ac822"],["/宣布一件大事/index.html","7566099d9f4a1af3a8e24e47c003349a"],["/小鹏P7i试驾体验/index.html","b806c85f4b3a16c3bcb116aa30753a14"],["/微信PC版3.3.0内测更新，电脑可以刷朋友圈了/index.html","ed20ca85253b9fcf3cbcc5d40659b2f1"],["/怎么更快的赚钱？/index.html","3f5c49bca36ba7827be6f5b5cf17313f"],["/我毕业了/index.html","8f1d2ecc5d773af46ac57b2792dc350d"],["/我！真！的！找到了！爱上学习！的方法！/index.html","bce93fa7a47d6f164a0aac574802ed78"],["/户口的意义/index.html","8df6958c6a0561a0f6d520c107c2a2e1"],["/推荐两本经典算法书/index.html","f4807ead31bcf8b836bc7eab717b4e7b"],["/推荐几个在线学习SQL的网站！/index.html","250038e2621771f223202fc9b2efe86f"],["/搞了一个程序员成长晋级社群！/index.html","7b8b65e61c10c987181db987d0efc36b"],["/摘抄/index.html","3e0a9dce6dab254acd1d027645ca891a"],["/暴跌30心态崩了/index.html","aab1cfccdc7260cf00a4cd2f00791a58"],["/最近很火的ChatGPT到底该怎么玩？/index.html","ca8e8c55e299b11d31e9045e34b9fe70"],["/有哪些好看的日历可以买？/index.html","bc39cadfb47ae2b03452c056d8135c4d"],["/服务器有啥用/index.html","1213c83a2aae05542b5098fd03925d12"],["/来长沙了！/index.html","1ad18ce1aac8423533a4370475bd780e"],["/校招污点公司名单/index.html","01d8a8e5bd32a396d37f26b7fbba0921"],["/梭哈200多万/index.html","ea92e7e2439ddb5239828bab72690aed"],["/梯形图入门/index.html","54230df048e32cc4ca978cedd025b26a"],["/橙心优选，凉凉了！/index.html","b291c4ae06acc37fab6f11b59ca385ec"],["/比亚迪汉试驾体验/index.html","71418d1604418b084299a6b74a5538f0"],["/清华转学成电，真的牛逼！/index.html","34655239ba7e3cf22be2efe42344e2fd"],["/滴滴程序员被亲戚鄙视：年薪八十万还不如二本教书的/index.html","9ba319e0b11d32ad83ec5ba5b1232f3b"],["/社群！/index.html","f5a5146e88fbb5904f8c87116ef1db53"],["/科学上网之VPN篇/index.html","6e4f40ca6ecc44135bdfa7b702062a70"],["/程序员必备的几个技能！看完你也是大神/index.html","86985316d4d639ff7ecef169e89ffcb7"],["/程序员绕不去的槛，Linux！！！/index.html","b30a30d498ea711452a968766410442a"],["/蔚来ET5试驾体验/index.html","8d2657e1a6fdab70b5f95d6543c3f983"],["/蔚来，牛逼！/index.html","0dbaa4a63e33dbe5273ec1105cf9e9c1"],["/被录取了/index.html","1cba860be07bc378b13e6e7790c25f33"],["/被找事了！/index.html","68f68d3cc4f2e477bd9c4a4e7a538818"],["/被拉黑了。。。/index.html","6e830456fee54daa4b40fe2b1a2b8e54"],["/被车撞了！/index.html","e9d7e1d75c0789ce925256aefc83b8ef"],["/该如何选购固态硬盘？/index.html","e16f59b1c32efc5b8d3a0ab4a86524bd"],["/这本书一定要看！/index.html","db67085d4fea02ee83a0fd2a810cbec5"],["/选Java还是C++？/index.html","169ff203448b63d1cfe0b12a9d6af6a8"],["/那些让你起飞的计算机基础知识/index.html","24d7b42c6395cb5a0a214fdd9b4783bb"],["/靠这几本算法书，成功拿下大厂offer！/index.html","d9d76f773e97c4612808bce158b92df8"]];
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
