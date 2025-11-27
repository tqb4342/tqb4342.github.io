/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/0010-city/index.html","51af43b582756b46237ecd94354c60eb"],["/10-algorithm-book/index.html","c5c368e0f1c78ffdd194690c1a9f4a27"],["/10-website/index.html","e11dfdb1000729b32a353a568f8d5386"],["/100万的小目标/index.html","3020c619e0476d4e61523cca3532a2d1"],["/10w+YYDS！/index.html","8935d5eedbe755fa98dbff1d97fb67b8"],["/12-technical-tutorial-sites/index.html","e80fa2af7743c5ad0c8f3b6502263f95"],["/2 6 岁 了/index.html","143e3a7c417763c00f0df287df99dd6b"],["/200万，啪，没了。。。。/index.html","b5c27104e60d0a8db21443d05d229fa6"],["/2018ECCV-Paper-DL/index.html","74fb5d5b9672856a3d186fb8683da497"],["/2021年固态硬盘选购最新攻略（小白避坑指南）/index.html","0e9489324bea5cc0ca016366dec90e5e"],["/2021机械键盘推荐/index.html","7e2f44d33878a14d4e00c2ec332e7d18"],["/2025-07-15/index.html","1cf37674657287381592d744ad81fc38"],["/27岁了/index.html","4994f5c8cdbd4931ceffe874467480e4"],["/3D-Convolutional-Neural-Networks-for-Human-Action-Recognition/index.html","57f135df5aec5366097852688b8f7839"],["/3D-Deeply-Supervised-Network-for-Automatic-Liver-Segmentation-from-CT-Volumes/index.html","0b166851b4928c9511a220c34ab9dae0"],["/3D-Unet-Experiment-notes/index.html","8af7342b36e541f1ac7d10ae246bb774"],["/4-Software/index.html","c3a472714ce51a78d67f55997809eafc"],["/6-website/index.html","9cf927c5a1f314ec8f28468d73c4bd54"],["/7-terminal-tools/index.html","50491460d6326f210fdbe2ae0d4be40c"],["/AIGC中典型的深度学习网络/index.html","c58a21a9f7672601dba73265ee67973f"],["/Agency-model/index.html","734dc7ee8567197c2e3527060d57ff36"],["/Algorithm-brush-notes/index.html","bae48471a1bcfde50d2ab5838e40dbc0"],["/Ali-recruits/index.html","accc21814f492fab5b17a1061f3722a9"],["/Android-VPN/index.html","09313a687ab8492ab14395c1d6160062"],["/Android-open-internet/index.html","9343220735e1eb5c17e51a49585f640e"],["/Appearance-mode/index.html","6d471f69ac2da7ba36cbdc92f1f6c7c0"],["/Backtracking/index.html","e8feafc564a4a334547537fb50fb5d9f"],["/Baidu-Sao-operation/index.html","13618be6087e1cec6eb73abed0e2b580"],["/Batch-Normalization/index.html","fb4be72eb834aa16af13269e186cd21a"],["/Best-AI-tools/index.html","768574550a8415fb5ba27b466e6753cf"],["/Bias-and-Variance/index.html","18dfc20c94a6566d803a382bf5ff9c9b"],["/Binary-tree-traversal/index.html","99ca46d77b2facc4e58f0edc47510393"],["/Branch-and-bound/index.html","caa5a7fbfad1e39f94a236c69b329e06"],["/Buying-computer-for-the-first-time/index.html","6bb02743af8b7e15e49fb006a67be29e"],["/B站向北邮道歉！/index.html","1c615c8885987f065b1dc9d5e17efdfe"],["/C++-string-function/index.html","cc5ecfe2ae51efe2f50ba3150d2bc1cb"],["/C-Java-DevelopTools/index.html","725a58f48ea09e6a59f8b197e4bc7c52"],["/CS-Classic-Books/index.html","4dfbe49bbbb799fcaa4de8d4dab55c3a"],["/CS-network/index.html","3a467ef64b0f514a593faaf08b5bb02f"],["/CSBook001/index.html","63e989f892c30394376ed9359e9fef8d"],["/CSBook002/index.html","ee940ad177b038e6624f049516294ed5"],["/CSBook003/index.html","7e163296327d0b70d925eecb3594a3d0"],["/CSBook004/index.html","86c6211e859dacd9accf27a5d2f25562"],["/CSBook005/index.html","fbecf1eea51e400d12f01d0b354420ba"],["/CSBook006/index.html","8a11cc710d77520e36f5f035c7bbebbb"],["/CSBook007/index.html","c16f1304c33a1f8537d516fc477ae7bc"],["/CSBook008/index.html","d3b465399239ef9c57fbc0b585f3df12"],["/CSBook009/index.html","1bd8a86e075087eac9e70d8fbe328ecd"],["/CSBook010/index.html","de26edc92c63295ff68a7994c4271d11"],["/CSBook011/index.html","ec40771a47de097710f7ddc6aea5b908"],["/CSBook012/index.html","bfe9f46fdeebf7a38274a00eb77d5b5a"],["/Changsha-really-fragrant/index.html","cbfe5e09aeb660e2608669696406b1d3"],["/ChatGPT-VPN/index.html","56e1d28d37ce09708a2074b8dc24cc8b"],["/ChatGPT/index.html","028f634ab1c3fdaeb209a6a4a250817d"],["/ChatGPT！王炸级更新！！！/index.html","d3da7d4456b4102336ee5567559a7110"],["/Chrome-crx/index.html","e90521552002c7c623c39cec4eb7d42a"],["/ClashForWindows/index.html","9cbac3304a2b60f855b3b3a8d796fef2"],["/Computer-Classic-Books/index.html","41b362489944c87b8c527e6da13903f4"],["/Computer-for-another-major/index.html","9e2be2f4795289ce2a0267ef75661bd6"],["/Conditional-confrontation-network/index.html","1d5c6810f83eaf27861b348204029976"],["/DNN/index.html","2bf83cedc2695ed501dfe5361db5613f"],["/DSN-segmentation-liver-experiment-summary/index.html","daff56b025c8eece58b21e19f9f07300"],["/Data-enhancement-elastic-deformation/index.html","4bfe85c1b97d4f2dcb9149971f799466"],["/Decorative-pattern/index.html","8ea301cc872549338c6e8708d4d7ea5e"],["/Deep-Learning/index.html","5fa20571f1b8201caa85a87f0a5e2118"],["/Deep-learning-and-medical-image-analysis/index.html","93c25a2035207ca04485769ed093860b"],["/Deeply-Supervised-Nets/index.html","8a62453f9f9411c2c11dc580e5fd0911"],["/Deformation-model-based-sparse-representation/index.html","aa20072b110d8ae337a2ca14cc00c932"],["/Discriminative-and-Generative-model/index.html","08388281e55c75cfefcf685e118ca2e9"],["/Distributed-transaction/index.html","7039229db2371e8b7e53d070bc5cde26"],["/Divide-and-conquer-algorithm/index.html","1b277b2292e2efb44fde66d55f13834b"],["/Dll/index.html","3f727e81835b1490f44b685b0cb6184b"],["/Dynamic-programming-algorithm/index.html","0fd5fac029493d3b8c739629516ce58f"],["/E-book-download-commonly-used-by-programmers/index.html","64f164d3dc469077e25dff3d7177f4bb"],["/EditPlus软件的安装、激活和配置过程分享/index.html","d586490d989a3a429f429a06e57a6717"],["/Eight-sorting-algorithms/index.html","2bbae5961bad166dead67e359b83bdbe"],["/Encryption-Algorithm/index.html","aefd0d3bb85c37bb642c974698099c2d"],["/Eolink/index.html","6ceae5da905a52addc63eaf81aa2fa23"],["/Factory-and-strategy-mode/index.html","1e65e9226cf9de0dda22cdf316c1af80"],["/Foreign-technology-blog-community/index.html","a5596499f09345ba33d7ec222933ab3d"],["/Functional-model/index.html","a0fafef67139636122471571bf428f56"],["/Fund-type/index.html","97c7294ac054d3ca382d288f40e2b1c0"],["/GPT-4o/index.html","b35ea5d89319f2b2c3501b9aa2556699"],["/GPU-medical-image-processing/index.html","99633593db74fbb5d9fa73514fa28195"],["/Gemini/index.html","a6d230a70476510602bb4c503f1318e6"],["/Generative-Model-of-Unsupervised-Learning/index.html","0d5966dcf4aca36ff2b724d539be2aa4"],["/Git-Learning/index.html","9bea823fe35b0e50c48ff7b3a13fea88"],["/GitHub-2FA/index.html","16d6ba17276daa15b096d60186059d7f"],["/GitHub万赞，程序员必看操作系统总结！/index.html","e403e074c1ff3755ac3bbb093410a1d4"],["/Golang-book-recommend/index.html","cd28bde9ecc5f34afd62796d7a6860d9"],["/Golang-learning/index.html","fd19c0cb884f902a8d239553ab687f5c"],["/Gradient-descent-optimization/index.html","771dd90b3a4ccfe70543ad0115faed5e"],["/Greedy-Algorithm/index.html","b016383315cb78621b8e43454a612915"],["/HK-bank/index.html","1f79093b99fe41b0d17af1f55f65ef2a"],["/Head-to-head/index.html","88361e314621491e91ae4eff4a268034"],["/HexoPage/index.html","3026f62bf5cc63c29fd7ce51efb7699a"],["/HistCite-Pro/index.html","3b4c2fbd2e2ef1b0a4a58f3cd037cce9"],["/How-does-the-program-run/index.html","58ae335828b04989a0cede8d5b7343f0"],["/How-to-judge-whether-technologyisreliable/index.html","7051a4c536465767fcb9d4454a8a0002"],["/How-to-learn-design-patterns/index.html","95f0e8fc0eb09ce69fa72f74a3203e48"],["/How-to-learn-design-patterns？/index.html","980192cba196ee052e5f6fea919a8977"],["/How-to-teach-yourself-programming/index.html","e1141b797cccd34f3034963d1b83d4cb"],["/How2learn-Python？/index.html","c215fa0e9e3d7b3193f9a97c90c9cd38"],["/IDEA-shortcut-key/index.html","15c2a5195eb2cc23f7226da82ced1510"],["/IT-interview-basic/index.html","0c635228871096e6f9e7363a5d022622"],["/ITK-VS-install/index.html","96fd8cfec9a34c96a409a5525f0006db"],["/ITK-VTK-ItkVtkGlue/index.html","3514b1b5c1135760c2acf9d155279bf6"],["/Image-processing-plus-noise/index.html","a7e5a8d7715055b918a1500db5af5462"],["/Inception-Going-Deeper-with-Convolution/index.html","469ded479aabc5a1159ae23d8b581b53"],["/Java-GC/index.html","ed74e6b780ac8ad9131088b1d37032cc"],["/Java-Servlet/index.html","cac043a1e472b14ec014bd6a2c58533d"],["/Java-array-and-collection-sorting/index.html","5ac31052bb061f2b991c6dec470ca3cf"],["/Java-development-tools/index.html","d3ef53d6cbbbfb04eade69fcdca2cd3b"],["/Java-eight-data-types/index.html","a947be3281cb3ce6572bb6002675ec60"],["/Java-interview01/index.html","6fcf5a7d4dd84d6c18ea9644859371ef"],["/Java-interview02/index.html","a76113758611c2c64f571650de5d1de0"],["/Java-interview03/index.html","a7365b93c6a77e53311a0715237692da"],["/Java-learing-map/index.html","625216a44a36d8c9a3054c04426d1e14"],["/Java-learning-route-map/index.html","9efcbdc36b5b502ee099cfd66b9d0652"],["/Java-memory-area/index.html","de571742ce398dac3456161f58b75f0d"],["/Java-memory-model/index.html","b8976ec964b3e7f5f3f92bf69891c784"],["/Java-multithreaded-learning/index.html","0a61a255065f7ead7c2f33c7c3b2d176"],["/Java-project/index.html","1b3e37ce8cc1d92786bacab4d69e156c"],["/JavaWeb-Chinese-Garbled/index.html","8b15d996817d61abc693acf3c6cab981"],["/Java还是C++？/index.html","02ade8c691c82d4b75571a6937c3c409"],["/Kaggle5-step-guide/index.html","59be88643f06dd7ef8ab8d8d095bbb11"],["/Knowledge-points-of-Java-garbage-collection/index.html","403ff7d56c246947fb8c2d907315bbdd"],["/Layoffs-and-Hiring/index.html","87ca8274a724822d4bd30172d31f4dad"],["/Linear-regression-of-machine-learning/index.html","fb51c63c0f656acdc9dfaafbfd892431"],["/Linux-Compile-C/index.html","cd3e8976d7baf5f69c7cd72bd495bfc3"],["/Linux-ITK/index.html","62f724d15564890418a772a4d2952a82"],["/Liver-segmentation-of-sparse-components/index.html","12008f646bc18e734eaf3f9afbe576d2"],["/ML-EBook-paper/index.html","e857b584675dffdf4ed59ae5f3620fe0"],["/Map-uses-multiple-maps/index.html","2d4a3ccfa935f902074e8ba52d18c1a4"],["/Matlab-Graph-cut/index.html","0d7be8c024d03249f740a7101baf7b31"],["/Maximum-Likelihood-to-EM-algorithm/index.html","1a6e5611dd929857ad4a9a66fd2edffa"],["/Mean filter and median filter denoising/index.html","64c1f9c0efff478456c90776a2d5278e"],["/Medical-Data-for-Machine-Learning/index.html","c614791b100c20caa2162a3ceecb3f95"],["/Medical-image-analysis-deep-learning/index.html","82c8733a6442b192a3031a3f4d9224ac"],["/Medical-scan-image-processing/index.html","c1ea9189481b9ed04f13b6262a0093ff"],["/Merge-sort-algorithm/index.html","51561686fa9b3bb9e12bcaf3ab07dab7"],["/Monthly-income-2W/index.html","7208501f10fae4ecd64bc3ef4f61e2d0"],["/Mysql-database/index.html","9e344d3bb732e0cfad9bd1cf704651bb"],["/Neighbor-Embedding/index.html","4e3d9f24fe898bee8b500d6e04bc39f1"],["/Neighborhood-approximate-random-forest/index.html","1edaecc22d1453c891ce1e4b3f3f6bf6"],["/Net-and-official-documents/index.html","55bd45c77515858076c62da438045bae"],["/Netflix-VPN/index.html","0db51fb34cf94c665eadb114955b915b"],["/Network-principle/index.html","9eb9f8a2911fd24c6f5108b4c4a603c8"],["/New-Hong-Kong-stocks/index.html","fe0ae61b438d60a1cb39f9495a7dcb36"],["/Nice-to-meet-you/index.html","bbe489cf3af4705347a499d0a5bd4ebf"],["/OS-processes-threads/index.html","23594ef2e21dffaeafb73143a5940d6e"],["/OS-run-environment/index.html","7eaf3469928cf6a1e2dd5a18c5de630b"],["/Open-Internet/index.html","5de7af6c114b25d94ac849fc918b2a97"],["/Open-Internet2/index.html","4fa6cbd249ec53a602749f3f88f602fe"],["/Open-source-community-and-rewriting-website/index.html","81ad981e62112826e411fba6ee1e2797"],["/Panoramic-image-stitching-based-on-SIFT-features/index.html","22fb462f38ea64b7a1c62b9b81fbadc3"],["/Parzen-and-KNE/index.html","c30997dc856fbf6b93db314df08baddd"],["/Personal-technology-blog-site/index.html","8ce8cd653ec4bd7445c885897a81b723"],["/PicGo-Gitee/index.html","7eafcd14d9633ee17af5766e0d036d88"],["/Programmer-treasure-chest/index.html","d50a0189acf80f7e7cad0f3cbe641869"],["/Prototype-mode/index.html","a17fd0b68210897e4e1fb3c6d823647c"],["/Python-base/index.html","a6c27dcc7723e0dfc40fa64365fb9329"],["/Python-crawler/index.html","494cf1097cf8d2d04a87ff03ab8dae4a"],["/Resume-revision-suggestions/index.html","c8e0845809b719fe3533cc19a4840a5b"],["/SEO01/index.html","eeb4f475df84c0e5a48034cd443a2617"],["/SEO02/index.html","99ce31ca681c1e33c880a2169f5e62b7"],["/SPHARMPDM-MEPP/index.html","0cb31bec827265ca2e12eef6697de8cc"],["/SVM/index.html","435e0afc6d97f9ac6b0ea261509daba5"],["/Semi-supervised-learning/index.html","020f6c5746baeacb525b4c39cd82e73c"],["/Sequential-model/index.html","cda9b9d2628ab65d2e45886d3dc35ad9"],["/Shape-Based-Human-Detection-and-Segmentation-via-Hierarchical-Part-TemplateMatching/index.html","abdc1a8dd575c2ac73ed1fc6e3da46ed"],["/Spring-basics/index.html","784e4cc283143858a16e44de4388ece7"],["/Spring-integrates-hibernate-Struts/index.html","7208bb13e83fcb474c8aadde3b654fe7"],["/Structure-learning/index.html","c661713ba1487d3ea56363ee2dcb8609"],["/Suggestions-for-self-study-of-computers/index.html","5ad388dc798b011dfbdc25338ebe461a"],["/Summaryof-HongKongStock-Account-Opening-Links/index.html","a90f8c72e9aa081c8a5bda87f381fe37"],["/TCPIP-detailed/index.html","59e8139c899220c06cb441966ebe9d95"],["/Telegram-VPN/index.html","9109770e1f65ba6de8475a831cdc03b8"],["/The-essence-of-shopping-festival/index.html","560c00ce09e91651fa287672d945d53c"],["/The-most-important-investment-in-life/index.html","476963dac97ffcb60afe188864f753fd"],["/The-most-successful-nvestment/index.html","00c64260d53a7dbbc9686138aa63ef2d"],["/Transfer-Learning/index.html","4ea0ad670e96bc0d16582cd80f427d9f"],["/Transfer-to-computer-major/index.html","ba4976f44f22f395a9864496ebd1863c"],["/UNet-Convolutional-Networks-for-Biomedical-Image-Segmentation/index.html","2c65daef36c8b9cbc2b260d0c19a3bdb"],["/Ubuntu-install-sougou/index.html","d7c44f603cd529a5eed0847c73e1e92b"],["/Understanding-of-paying-for-knowledge/index.html","11fc353b3769ae7d3a2069a871ef024c"],["/Unsupervised-Learning-Linear-Dimension-Reduction/index.html","8360f4e00882bd6463e3a0ac781068fe"],["/VPN2025/index.html","741b58f0bfdb399e327aa5973addcb60"],["/VTK01/index.html","60224fe7990f1b50bc3b5da9fca5aad2"],["/VTK02/index.html","c84f335a02d9015435497d926ef46594"],["/VTK03/index.html","4a4c2d22a4ee09b5be989daea0cb3763"],["/VTKRead-write/index.html","b5e236e42a3ad401f9800c5845fe1c3d"],["/We-are-all-good-kids/index.html","672758d423c9de1c3ba2625ebc9b39eb"],["/WeChat-80/index.html","eb1a14eb348e110296c4a52d3c4ec61e"],["/WeChat-red-envelope-cover/index.html","aa07ae0816d8cf0eb63ebd29bee3f658"],["/What-is-crawler/index.html","5f6d4a772c58b324ade93aff877e46a5"],["/Win-OpenInternet/index.html","af2cb35caa8070715b7de304e60fdbec"],["/Windows11-2kfans/index.html","423a46a090d6a2ca1106a02c2630eb5a"],["/Word-Embedding/index.html","478507b63628519e10781ad43c814981"],["/YuanShikai-and-his-Beiyang/index.html","76e70974502130bbc19b438e5e8c7a8f"],["/Zero-copy/index.html","7ef9de945c1a63b72c5a7bd92a870e0d"],["/about-keras-model/index.html","24a2711a53996d565c1b2a9f8856cfd3"],["/algorithm/index.html","e041cc3bde95f6bb6941904f8ee1bb7f"],["/alibaba-Java/index.html","acfa3b999c794d23f7af80e435ea313b"],["/archives/2020/01/index.html","3545112045df54649ad6b17fae04a7cb"],["/archives/2020/09/index.html","ac60ecdd143d2c70f148cd45f2084578"],["/archives/2020/10/index.html","947046f9954e666016cc0c0ab4d5228d"],["/archives/2020/11/index.html","15e784120995d8bad3f613425654210b"],["/archives/2020/11/page/2/index.html","09d4a22cf43f62a085badc7f78b0c2f1"],["/archives/2020/11/page/3/index.html","03f5134f77327d9e7c4c8c595664cb7f"],["/archives/2020/11/page/4/index.html","f521cf1b63d4d6cdff5cb7f1ce3dfbe1"],["/archives/2020/11/page/5/index.html","29e4c24de874d1a3314d07fcad823e2b"],["/archives/2020/11/page/6/index.html","c2790e4b2082a251b0830d03395a511d"],["/archives/2020/12/index.html","d11fc0eee5ba3a5d49a1b3c59e9f7646"],["/archives/2020/12/page/2/index.html","ac9c0ce5e44367e8c7ad4e113fdbb313"],["/archives/2020/12/page/3/index.html","e31dd6a0ecedccced61ad75cd08e8070"],["/archives/2020/12/page/4/index.html","48bfe4f5137c9d27052381cbd691b7d3"],["/archives/2020/12/page/5/index.html","3767a3f676a7dc8838dddbd59f35e68b"],["/archives/2020/12/page/6/index.html","f5aef774b7d2275831e572df5a0013fb"],["/archives/2020/12/page/7/index.html","d86f38a4c7f2038abcbe9682938b5e2c"],["/archives/2020/12/page/8/index.html","631bf5e1fd873a8c344079a36709d47d"],["/archives/2020/index.html","983296ab4aa02f5832cf1f87abafd62f"],["/archives/2020/page/10/index.html","e72f973b72a1b1b1f46af058f15068ba"],["/archives/2020/page/11/index.html","bbd97f498c5a8f5500e39a59193b0f92"],["/archives/2020/page/12/index.html","2f6a9c0abe911a33092da92c5593323f"],["/archives/2020/page/13/index.html","914dcd03c526a77e6fb01682dfebc6e1"],["/archives/2020/page/14/index.html","5cc8482487847aa6217c4bdd1b1b5f3d"],["/archives/2020/page/2/index.html","77e024bcceda0ddf4397acc8054a042c"],["/archives/2020/page/3/index.html","3d531d0e540b19216c0e53fad0241474"],["/archives/2020/page/4/index.html","7c5c0f0639331076a0b7a18fd44bda7f"],["/archives/2020/page/5/index.html","364d70553785eb9a080e88416f0a979f"],["/archives/2020/page/6/index.html","38b3c7ae53dce8cec20d647f16447de5"],["/archives/2020/page/7/index.html","e5cec59815e553175b384e985acc1eb2"],["/archives/2020/page/8/index.html","d06687d924b5ccf14457e6a5c0b2fd1a"],["/archives/2020/page/9/index.html","b966d0cd08f3b4ebe0ac617c030d4941"],["/archives/2021/01/index.html","662be067678ca332aa2a50155f2411dc"],["/archives/2021/01/page/2/index.html","a456d31ad80ba32dde9eb68d168c66a1"],["/archives/2021/01/page/3/index.html","3410a82dae749f1f3653a7c5687579e8"],["/archives/2021/02/index.html","cd4b67866b26621778ba2c27a73885af"],["/archives/2021/03/index.html","110013331f63562f67449c3b1349bf87"],["/archives/2021/03/page/2/index.html","2222ec007969646dcc051b7c57fd786e"],["/archives/2021/04/index.html","abda0b30430800eb08302b790b3be3c5"],["/archives/2021/05/index.html","d7c3d25d14693cb73510fe49189e6b0e"],["/archives/2021/06/index.html","8971665e516cfe5f72174f981f905f37"],["/archives/2021/07/index.html","09d284471a5bc3700b65356f38e02fa9"],["/archives/2021/08/index.html","d3aea636b4fa487190d387f7ef2f5a3f"],["/archives/2021/09/index.html","c1cd1b49db4dca246529f69c70433312"],["/archives/2021/10/index.html","954c090b5121bb1aa5b2f4c59c400ebf"],["/archives/2021/11/index.html","0bf3f23b60f24424392f5db80ec73d4e"],["/archives/2021/12/index.html","563b07245dc3448264d353d11e5fa1b2"],["/archives/2021/index.html","f8589c714c52049e91100ab627fb7643"],["/archives/2021/page/10/index.html","30e2df03cec667ece07b28b616166610"],["/archives/2021/page/11/index.html","6fed2fcdae8d49165cfe5bad14a1b6ba"],["/archives/2021/page/2/index.html","8bdbc0696fe5895049650145e38f2daf"],["/archives/2021/page/3/index.html","3a45e764f8749187b7334fcfd2989781"],["/archives/2021/page/4/index.html","3fc98fff6a98b1f054dbc802352ba635"],["/archives/2021/page/5/index.html","c0dc86e43d34ba1909f55461f42ec086"],["/archives/2021/page/6/index.html","ee93ca02dff48c602b921c123f795a1e"],["/archives/2021/page/7/index.html","21a883cd27219bee9daa75bbacec579b"],["/archives/2021/page/8/index.html","13f5567df5be66879a37a2ba255bc3e6"],["/archives/2021/page/9/index.html","7c98388285f76be4b632f6ea0a17dcfe"],["/archives/2022/01/index.html","eb332ad756ff6acc5c201952bc33ba3f"],["/archives/2022/02/index.html","ca1a8507b4001f63db17a922d89a71dd"],["/archives/2022/04/index.html","b9296ae1a15f2fcd75cd2faef8349ef9"],["/archives/2022/05/index.html","93ce89a1feec7c2cade9dcdfeae700ad"],["/archives/2022/12/index.html","45472963f1ff50b75aa130f56ed60d3d"],["/archives/2022/index.html","ebb13cf3161d5d40e8b9d620f233bcfa"],["/archives/2023/01/index.html","c9ef3e0717279b80634433da5285a69e"],["/archives/2023/02/index.html","00b8d40af75d44f9cd68d2fb6d5454aa"],["/archives/2023/03/index.html","d57d6b66e91f99ece0a927cb5d66c1d1"],["/archives/2023/04/index.html","15d0e5ec10744641b379a836cdb2f12b"],["/archives/2023/06/index.html","a007f82c1e2c703299f58d993753da2d"],["/archives/2023/08/index.html","d09c4fef83134dbffe4041f860328ee5"],["/archives/2023/10/index.html","5a176d4ae5220691bd848a04342dd5c3"],["/archives/2023/index.html","8187b80127252a4134f416101ae22cf8"],["/archives/2023/page/2/index.html","7307669808adbeb1efa5ca30f04f6dac"],["/archives/2023/page/3/index.html","8751e2a227f8733b647694164f6e75a1"],["/archives/2024/01/index.html","b4ed1ceb2d4ce6ddf187a7a202a7b4a5"],["/archives/2024/02/index.html","f52d69afe1a07480cd4dc2ede676e278"],["/archives/2024/index.html","50d8340ce30771688da3518730160d4b"],["/archives/2025/06/index.html","a6972274d883422961d4a47e6d775ceb"],["/archives/2025/07/index.html","dd607221f2a8576df1f59b0ae6020b5c"],["/archives/2025/08/index.html","93479d1eeaeb9337cbfdb2ad5ea700c5"],["/archives/2025/09/index.html","c7e1d8d3a668e8719332ac328baa808e"],["/archives/2025/10/index.html","b20316a7231a6236975967be8ae2b541"],["/archives/2025/11/index.html","c1f9a2f0d37706ad1ccfce9d810669ae"],["/archives/2025/11/page/2/index.html","4f0e2c104a6b63bff1b0542ad33a8f4c"],["/archives/2025/index.html","488fe917525294fd6deead2ced5d045e"],["/archives/2025/page/2/index.html","9f7a2d933bb83a416da44fa28791f6c1"],["/archives/2025/page/3/index.html","fedc1888a7294acdda7f31a0c6372516"],["/archives/2025/page/4/index.html","567b1effc50c3919bac447e393adfe92"],["/archives/2028/02/index.html","5adfeec0380dd74a25f92a7f95410ad9"],["/archives/2028/index.html","83e87dde4c7e68a4a955bbeb1684d9a3"],["/archives/index.html","d10e61b18e6ac88a38950e8a7e62278d"],["/archives/page/10/index.html","94150204e499cb3455ff25765f8afa02"],["/archives/page/11/index.html","5ccc30ad1b8f9c9c1fdf1320be9dbbf8"],["/archives/page/12/index.html","5db280fb608ff34630c97a53000de49a"],["/archives/page/13/index.html","4f835af3c53fc66ea4d4819f177f1df4"],["/archives/page/14/index.html","4f2727c8aa523fa4babbc4c098213fb5"],["/archives/page/15/index.html","eaa5c91c114deb936407199dbb427972"],["/archives/page/16/index.html","98ff1cbf25bcba1719b735ad4d012f2d"],["/archives/page/17/index.html","f647744f37cabc3915b312d63e81aea8"],["/archives/page/18/index.html","8a775f2bc705e8ae604b8c6be7a409dc"],["/archives/page/19/index.html","b45557f395f83695d6def453997ada01"],["/archives/page/2/index.html","cc00a106025b9ae39af5aa0d7e93f8ea"],["/archives/page/20/index.html","ed01beaf188946d280cfd4d6524b6281"],["/archives/page/21/index.html","294df68c7b537c4116edbb1d4607a8b9"],["/archives/page/22/index.html","8406cc227e89ca9bbe344d95b4030001"],["/archives/page/23/index.html","8883db6356042f51f1118d082b93a032"],["/archives/page/24/index.html","9002dcf285c1eb3cb3609c7d0f86602a"],["/archives/page/25/index.html","c9232d90c054cf4546dfca80208d4383"],["/archives/page/26/index.html","f844879f3c7512a0eafda598c6652d61"],["/archives/page/27/index.html","bc379cf4239ad71f86435d78eb92d8c1"],["/archives/page/28/index.html","2848b28e531cb7a4a07b8b320b5385c3"],["/archives/page/29/index.html","ce8176bc06c5a9d57f638062409eecc8"],["/archives/page/3/index.html","e38e3a1d2775395784f40da9ff8bcc82"],["/archives/page/30/index.html","0877cc0b85e6cba60bfd8c4bfba85d53"],["/archives/page/31/index.html","d01218be901330f96eff7c419f8a6ca9"],["/archives/page/32/index.html","7e5a4a486de23b125eb2bfc68e57ee35"],["/archives/page/4/index.html","8bd79d706efba834d60089406b3e9d02"],["/archives/page/5/index.html","237f6c8173650ee96b80c3dd2a3ccfc8"],["/archives/page/6/index.html","5bbdc1a7deb977178835c55496d9ac10"],["/archives/page/7/index.html","5c05d3338deb6b645065f05d5cc0a0f2"],["/archives/page/8/index.html","ce498474286d3fe012bffe79aa779a69"],["/archives/page/9/index.html","b843bf76997280fdbd9a41de6a7f71e5"],["/baidu-search/index.html","ca3ef7264986f980650f8601d565f940"],["/baidu_verify_code-Hh2fKNlEB1.html","b28206eef0ed2477a5f44da6644d82b2"],["/be-a-programmer-instead-of-a-code-farmer/index.html","f9643a9fb9a8446a16f18bc06da6937b"],["/bought-a-house/index.html","d359455ef45d953059313a0b2a2098d5"],["/categories/C与C✙✙/index.html","6ca2d13e2b7d28b1f8a6a310d899989a"],["/categories/Go语言/index.html","eeebcc275bc23e1b4a1fc279bb7145ba"],["/categories/ITK与VTK/index.html","873610fe7136ff188c44e0142f4dd041"],["/categories/Java/index.html","2b0a0e2a7440fff60e9c4548e58dad6c"],["/categories/Java/page/2/index.html","f066c9d47d38d364f2813bed7ae80bf2"],["/categories/Java/page/3/index.html","7ee12096df22d679f33b5b0f0107e77e"],["/categories/Linux/index.html","a06665a705b9447fb7759a0589e2a7c0"],["/categories/PLC/index.html","99b843421f2a8b0e62fff81cb2150cb1"],["/categories/Python/index.html","bdb09e0dbb1798f6d2ddd1378b98439f"],["/categories/SEO教程/index.html","e6cf6aa4b8b0643206cf2a808f0f0d03"],["/categories/index.html","b4e1c76821174cb18d92da086894c25a"],["/categories/图像处理与机器学习/index.html","c61ecb70b821849fe2159bf8b43d2170"],["/categories/图像处理与机器学习/page/2/index.html","f67cfc6ef0b4675e8a2b54ddac163e3d"],["/categories/图像处理与机器学习/page/3/index.html","b7e74a500fe2c1bf7ce7dd651927d986"],["/categories/图像处理与机器学习/page/4/index.html","1cd44e1c586a1de524ef6c13aaca79fb"],["/categories/图像处理与机器学习/page/5/index.html","c496af15be6e21542c3f651548cac4c0"],["/categories/图像处理与机器学习/page/6/index.html","98b8eca06da0f69f11329ffb58619322"],["/categories/工具/index.html","a300bd41a9b94205eece107e068f57cc"],["/categories/工具/page/2/index.html","654dd7c589e09750420545766eb47f05"],["/categories/技术以外/index.html","3085f24a898b2a0e76c54a048ca41e5c"],["/categories/技术以外/page/2/index.html","5e6960cb42b1c945a272a49e6914eec8"],["/categories/技术以外/page/3/index.html","e3267d6e60d9313414ca6714daab2f51"],["/categories/技术以外/page/4/index.html","a1b70c19df0f978592c6c9605ab7647a"],["/categories/技术以外/page/5/index.html","662601c1bc1522ec6101b8c25593d169"],["/categories/技术以外/page/6/index.html","6460eb47041142036df3c55b4c1abce7"],["/categories/技术以外/page/7/index.html","47499cd2f0a9c0c895d2aef8737ceafb"],["/categories/技术以外/page/8/index.html","94084d937cf65db226a7a8cbad0e653d"],["/categories/技术以外/page/9/index.html","17ade73a7a5c63bde15b0f3e4b288d24"],["/categories/数据结构与算法/index.html","8b68986f0858e83e4575d5a6cdde4488"],["/categories/数据结构与算法/page/2/index.html","4a0584f7c40744d364d6bc59b836fac5"],["/categories/科学上网/index.html","6e220e3fa979cebd616d644e732667f5"],["/categories/科学上网/page/2/index.html","f1a1bb21e0e907b3adc46dfac1a0aa4d"],["/categories/科学上网/page/3/index.html","924bc2bd660e23e4e595aed8e32239a3"],["/categories/编程经验/index.html","234e2b9f3f7cd05f8a279b4366585cc7"],["/categories/编程资料/index.html","fc0e20a2dcca5559af05625f4be00b2e"],["/categories/编程资料/page/2/index.html","a891d47d1df75cd287cc4dcdc1325cd7"],["/categories/编程资料/page/3/index.html","468b29d8a389627f38858a62a161f10a"],["/categories/编程资料/page/4/index.html","bd930ae4210c84db17707d5f50034907"],["/categories/计算机基础知识/index.html","f026358fb34ff2cd013f1d92c0565124"],["/categories/计算机基础知识/page/2/index.html","7cf4a5129bff793e3969df40e920e792"],["/categories/设计模式/index.html","866927b268ebd1e0ca798b259d5f08f2"],["/choose/index.html","b8ac1ee519fc817b698057403d880dd8"],["/choose2/index.html","70cab7266fdb70cacf3b2f8424c35405"],["/chrome-crx-intruduce/index.html","fc24604a381d0782077f47c61ac716a3"],["/clashvpn/index.html","82fde5b8555004ced67808622fe0c687"],["/coder-blog-website/index.html","abca94997dd73c02052e3bb9939636d4"],["/coder-source/index.html","b22988c9e172ba602b2c6d7ba602cdd5"],["/coder-videos-website/index.html","4fca593f8bcf5b7f834f0d4b9bca92ff"],["/computer-book/index.html","b6106669573f6961af794d3ac5e431ba"],["/computer-censorship/index.html","3102dbf8a7d54cee9e00faf0d6a64618"],["/computer-network01/index.html","f6ec869ae4503f0cef1e9597530926b0"],["/computer-network02/index.html","f2e6bf2e6e2c0e427db395b196da0a0e"],["/css/main.css","bc32ad34ec4990d934c3c647bdb62f79"],["/database-Mysql/index.html","1b503448d049f6e0e39162b8bbb926c1"],["/eclipse-lombok/index.html","459c2669b50303f3fd8173974ecdd313"],["/fully-convolutional-networks-for-semantic-segmentation/index.html","6593008880402c9ab7d2d0196edfec30"],["/great-firewall/index.html","f6119c16362243d8256073380351d308"],["/halfrost/index.html","4384810d7a9d711df76fdb4b6229ca5c"],["/how-to-signup-chatgpt/index.html","871f66d5205d7869069268e2610c1e10"],["/how-to-use-Gemini/index.html","3d02b3ff2c8aa926af6a86391efdb742"],["/index.html","91330d4368352f096100bd685578c831"],["/ios-open-internet/index.html","00e95150fd639be6409652bda54292c8"],["/iphone-open-internet/index.html","09b9e1dcbf0cf3f1dd100f14e3059858"],["/itext-makes-pdf-form/index.html","a9550589a4a4189b256fe1f5e4022ba4"],["/java-Set-Map/index.html","2111e847fb9b1f2b39da7f2414ad2c92"],["/javaweb-server-error-codes/index.html","2c5c0be1716298843ada33b26a9742b1"],["/javaweb-source-code/index.html","8c3568bd65164066652a5b8ae81dd30e"],["/js/lib/busuanzi.min.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/js/lib/lozad.min.js","47904d34a224931dd1b615c59a3dbe3b"],["/js/lib/prism/prism-coy.min.css","0ccad54d95845901ead59bfd3ecceb14"],["/js/lib/prism/prism-dark.min.css","a4711d2957d6605eb5682bdd228cf123"],["/js/lib/prism/prism-funky.min.css","efedcdccd7a9ab342d2d9cacd24920af"],["/js/lib/prism/prism-line-numbers.min.css","38e22e790c279bb56f9ec4b90a2a2d58"],["/js/lib/prism/prism-okaidia.min.css","5ac6f9de996fbec68aaa106dfb16e061"],["/js/lib/prism/prism-solarizedlight.min.css","ecc7e64d039873ffcf7fb27babdaeb5a"],["/js/lib/prism/prism-tomorrow.min.css","456af2a14ae4f5089939d5904ac40fe8"],["/js/lib/prism/prism-twilight.min.css","ebb5c355332a8cf9a1ce37a2a69d678f"],["/js/lib/prism/prism.min.css","a5234d614834658887cec6a9515890f8"],["/js/main.js","052d2b299d9c750afea8df0b802ab7c1"],["/keras+TensorBoard/index.html","486bfa9793b02758ebc62d1a9f94a668"],["/keras-beginner-guide/index.html","067d412c3b6f6a14b03f0bf12cfcff8c"],["/kmp-algorithms/index.html","96729a88b1f25719bc34f788aee58485"],["/leetcode-Java/index.html","4661a510036ba84d65b3e9766e854177"],["/links/index.html","903c913087f1389a21de960812dd038e"],["/linux-java-opencv/index.html","e1d8cd3fcaaf665f8d325c2aca56ad67"],["/msb-source/index.html","afaa4cd8d86fa6922423920560370df2"],["/online-BUG！/index.html","d98e87879204b0b6fb017e90bff1b85c"],["/open-app/index.html","b741d629e19e1f48828cd9f2c4e8ceaf"],["/page/10/index.html","53b4dd3e759a2bd688ac777352a79e9a"],["/page/11/index.html","e13d5b2062810e1b8f65b3adee7fdace"],["/page/12/index.html","ae9daaacf0b5079466c990afd95aa963"],["/page/13/index.html","8c0f5b8c9434e9dc060427628b0637e1"],["/page/14/index.html","7da155275ec86a0bc5ce529b13c6b04e"],["/page/15/index.html","0e9511807a6e7b90a7c9a2c0afbe7f65"],["/page/16/index.html","9d3b85bb0930aef5cc85629b285ce5d0"],["/page/17/index.html","ea10cdd2f58dcdaf103c113e5ed12f02"],["/page/18/index.html","60e4dcd39c119671e070a726602f6005"],["/page/19/index.html","489e5ffc416f74d082bdd02d11fd7042"],["/page/2/index.html","97310e0ce10c38e5510bc7d1aeed5c05"],["/page/20/index.html","b071cdc8232710b5cf8c799cd31665ef"],["/page/21/index.html","6e9d89a2a4a79264e02a471d988cee14"],["/page/22/index.html","489eb10fcc0cadf7ce5f5dd6339bb789"],["/page/23/index.html","8ccdd515529521c356331c88d4dcc467"],["/page/24/index.html","81da17184226d09a6660e31670d5373b"],["/page/25/index.html","d2a2c08db2477d0d8aa4f6088daa4227"],["/page/26/index.html","b75840c313ebc13c5411fb83d07f000b"],["/page/27/index.html","703b4c134e4382b8f9378d57b8777f10"],["/page/28/index.html","d466c2fc7efc3d75a8e7136f3b3a19e2"],["/page/29/index.html","0876c4cd3d066eada8acc6bbdcfe04d8"],["/page/3/index.html","9b267472e7d2141bf94beed96475e364"],["/page/30/index.html","e238681f51515b2c04c03e33bc920d57"],["/page/31/index.html","83ac29c265e09e89cbb438c03e3a9bb7"],["/page/32/index.html","c4d1fecf90e39f1d8afc0b6164ece25e"],["/page/4/index.html","e52615a3efac5081f703768bf59f84a2"],["/page/5/index.html","935a7c789c912354fd71411a567e0022"],["/page/6/index.html","a7f241d487a19f68eecc5841ede33c0d"],["/page/7/index.html","648b757c86ddc6a3e2320ca5a38f3475"],["/page/8/index.html","a9d1f4375a8025fa8c7869cc3764385b"],["/page/9/index.html","023e90ede5a5610b6b8d21efad69c7f1"],["/pandas-data-preprocessing/index.html","2fb567772764e451e43cd5082969d29c"],["/phone-win-open-Internet/index.html","624e2dfebe28d56b34539c9d9374ae96"],["/popcorn/index.html","1080ac68f10a202c4aa693740c190df5"],["/python-Blog/index.html","17a04ab3202db558494f66a8937b2283"],["/python-yeild/index.html","ec7046284a5d3a9243d1ec97fc0c3330"],["/python爬虫教程/index.html","ea9576568dbf7df5fdbc9c4b08299fe6"],["/software-copyright/index.html","5ea1766712936bf5b6e26a09c97964fe"],["/sw-register.js","76347c1fcf9aba891f1771542a6406ef"],["/tags/AI/index.html","7ab3515176a3f71ee108d63f70882109"],["/tags/API/index.html","5e2c12bce3dbdbf777413133d549ceb5"],["/tags/C-图书/index.html","bdca6672c0e64166f8bbba30977bdfe2"],["/tags/C/index.html","a2437fd856c2b2470344a5c51998dc25"],["/tags/CNN/index.html","5ee9ea2b5415b01bfa78ed6f040d265e"],["/tags/Chrome/index.html","018569cf04fcd7293fd4e508b6e50c0a"],["/tags/C✙✙/index.html","00c020e053c5bbe96db13ca28a32c68c"],["/tags/C语言/index.html","bed98a95f70dff8a1f633782e413a4ab"],["/tags/C语言图书/index.html","0d5eb428a87743e71e87d74b1646b831"],["/tags/DSN/index.html","4874f1d5d1afe956354033e96c3c743e"],["/tags/Dll/index.html","54bbfec0501e6e132f910a1dbe6fad87"],["/tags/ECCV/index.html","8d298c379a778c4b1c48ad8229a52884"],["/tags/EM算法/index.html","09551a72deba9ad826fa95a05ba56161"],["/tags/Eolink/index.html","b7bda4f0bf7cce4d27ac6fe941bf4418"],["/tags/Gitee/index.html","8e2fc14bd003294555f432234d35f71a"],["/tags/Go语言/index.html","c82fb2695c5ef157a10a02ff0eb43a91"],["/tags/Graph/index.html","e3743128d6ca4fad2cc4004d5580acde"],["/tags/HTTPS/index.html","96c1b4ffd126f8eccf8730a56a11da70"],["/tags/ITK/index.html","2b6564554f176402ca2dd56f668c0c8b"],["/tags/ItkVtkGlue/index.html","2c8ba8c671f59db22c724b41dec18053"],["/tags/JMM/index.html","073c6a88862ca24a2b089ecb600d4813"],["/tags/JVM/index.html","beb149ab741093c347b854b44ee2316a"],["/tags/Java/index.html","e39c7d6c6e1798d19fa38e072665375e"],["/tags/Java/page/2/index.html","a49a382a8c97901c52c65cc3a07ee39c"],["/tags/Java图书/index.html","707ac819893aaab97cc3e99d58816e03"],["/tags/Kaggle/index.html","a2cf4e9a73e08319b25d6466679c0662"],["/tags/Keras/index.html","d66513b5c66010faec607f69485c3c4d"],["/tags/Linux/index.html","3a3629dee9737c090ce0a6500d7b8296"],["/tags/Linux图书/index.html","60296ecada4b4b7d472d0bb0b12dcbf3"],["/tags/MEPP/index.html","50d75a26ee8a2558baceb050b7badb8b"],["/tags/Map/index.html","98d634cdd84a06134e59316e09550412"],["/tags/Matlab/index.html","9b55347e2851f5ebf96a17913f8696da"],["/tags/MongoDB/index.html","4510a853144d768b9e2512f4b640aa51"],["/tags/MySQL/index.html","5f48babbb8189720771e7d5473636534"],["/tags/Parzen窗/index.html","dde81b058e782ff7f251b3403afdcf82"],["/tags/PicGo/index.html","ac3d86ea93c0c29422301ee67ed7f3a9"],["/tags/Python/index.html","b2b951ed4e9180a9969c26c067266729"],["/tags/Python图书/index.html","6e5a6d13bb4297effb811f437e2b5f5f"],["/tags/SPHARM-PDM/index.html","988e250beed27026fa02b51cd9badfcc"],["/tags/SVM/index.html","52276282583eae5df141bd2de99d7d57"],["/tags/Servlet/index.html","9166cfb6ed7ca54cf1a4b29ef4f63ea1"],["/tags/Sping/index.html","f5694473a58a483a2fd17ae515d41f8e"],["/tags/Struts/index.html","405df7207967fc634e5d1ac768759ca1"],["/tags/TCP-IP/index.html","f7640b312c17eacd6841b3682d82e7c5"],["/tags/Ubuntu/index.html","d64b196c19bd0395f512dc1f9a2ac11c"],["/tags/Unet/index.html","1982215d287ec5eef5f6b1ee6d487889"],["/tags/VS/index.html","fa832cc8dc3983660cd83811548dd7cf"],["/tags/VTK/index.html","791c15e9016b7dbe0b9a5bde5c681989"],["/tags/Windows/index.html","1fac57ccf2af6f39d851ae1ed6e62ba5"],["/tags/edit/index.html","145ff23c706328464bd9d785edc7a8a8"],["/tags/hibernate/index.html","27c1975f0dc99297103b2410da48d6e7"],["/tags/index.html","2f97e6d76452a144ac1c1253e0d8f760"],["/tags/itext/index.html","b8e38b93965d5e66a11b851a0b8feafc"],["/tags/jdk/index.html","71ae0fa9accf0626e59b045726f95172"],["/tags/kmp/index.html","e550938acbf563771fe77cd94a75d963"],["/tags/k最近邻估计/index.html","a119caaa7f3cc4bb1b3a0d010219db8c"],["/tags/lombok/index.html","afab768b3799fe9d59816e59998b96db"],["/tags/offer/index.html","dd81d24c494791282e13f7ff0140e3a9"],["/tags/opencv/index.html","1ce7694bb9b4f17aad6ddfea0f5e5a4a"],["/tags/pandas/index.html","31fa7860ec995c6a65130924fcf8d114"],["/tags/string/index.html","adb90406427b731eaf5216ce3eb84df8"],["/tags/vim/index.html","a8ad4615d4470b64e0adea89faa99603"],["/tags/vtkPolyData/index.html","36afcf0e102c57eaf9d8e5325915477a"],["/tags/web/index.html","401f7177aa2e40abc004d0dd36c6873b"],["/tags/xshell/index.html","5e09f1b3365da38c3bfa3be7a91b454c"],["/tags/yeild/index.html","fd1766ee8c0250eef48382a70eb0a159"],["/tags/互联网/index.html","895e5e84b872bcbd85d3a228b1db9453"],["/tags/人工智能/index.html","6e52ec051ccb7d3647b0c755439eb7d3"],["/tags/体绘制/index.html","30f1d6fb092dc0a577c41029cbcbf9ab"],["/tags/全卷积网络/index.html","bc60c774ae0b0167e2deddbe133fd761"],["/tags/公众号/index.html","93deddee0deee1e5b954cea46af9b680"],["/tags/内存模型/index.html","b24749eeb63654fffc470983f74c4bc2"],["/tags/内推/index.html","7e3e21ed1fc4763f43cb0873b819d958"],["/tags/函数/index.html","5c50a4884646dff3b7cffa618461be75"],["/tags/分布式/index.html","bf17a6da9079976c76f819ab39d14009"],["/tags/加密/index.html","0868d9303e4406cb6a6c7147ac1fbfbc"],["/tags/医疗图像/index.html","4b02d8b88328ee4a9471cc35072c421b"],["/tags/博客/index.html","5a2fad50d482292b859aff9d8723fe4c"],["/tags/图像数据/index.html","f957641eb3306136ab768ef4c8c678dd"],["/tags/图谱分割/index.html","5272c69080077ad7b7b5d33c93ded02a"],["/tags/垃圾回收/index.html","70f320288ded003aa5400a6c1f220e1e"],["/tags/多线程/index.html","a8c7481a9a1e37bf148b9aa0b564b95e"],["/tags/字符串/index.html","2e285a7b842757364312a508c8bddbce"],["/tags/工具/index.html","32070075b9dac15ed8ed57e740e3756d"],["/tags/工具/page/2/index.html","e0d5745016c8e09ceea92dfb8e8616c9"],["/tags/弹性形变/index.html","d89d3ae1cae1f21412fe052f6926dc51"],["/tags/排序/index.html","b14a897379c7a95bb48e2f2ce36cdbbb"],["/tags/搜狗/index.html","395907c3292a1abe847b2cce486014f6"],["/tags/操作系统/index.html","2f114031140a726e97ec660812a8aa5a"],["/tags/数据库/index.html","e271c75e7ec72c0dcad010cfa38e2c01"],["/tags/数据类型/index.html","c654c9897c4917578aad81b1d8aa86b1"],["/tags/数据结构/index.html","a770c55a5805c1319ad83c5e2357e70f"],["/tags/最大似然/index.html","819dfab312fc2a5e4a38c12024c8c522"],["/tags/机器学习/index.html","68b1eabe29b7e910e4748e01fd1699a0"],["/tags/机器学习/page/2/index.html","50d80bafbe49877a6adccd542f619837"],["/tags/机器学习/page/3/index.html","2d7c706acc585e29a741b72427c9ae27"],["/tags/机器学习/page/4/index.html","0359e5791e29aa7a10c8ce09cca5e151"],["/tags/机器学习/page/5/index.html","beb3a79074f116c333b18d05e702cf9f"],["/tags/树/index.html","e3b1f593e014aa3ffafc7c705d0254da"],["/tags/框架/index.html","cbeabfe07eb64ce80787e89a0b1ca3a5"],["/tags/求职/index.html","c1a1f99da02c0ca46f63653f820ad04d"],["/tags/汇编语言/index.html","b74e632c7b49c60c8ceb855ef0ea5deb"],["/tags/深度学习/index.html","64b98519e07a4583cc1e9ef05d15b5cc"],["/tags/深度学习/page/2/index.html","b07284a2c9f0ec776b212b0cd2b22774"],["/tags/深度学习/page/3/index.html","a2e06d2f101f3d3f87f54bb0cdecb203"],["/tags/深度监督网络/index.html","ddee78dcd3559855eebdf7e3dc5b9f35"],["/tags/爬虫/index.html","ca7a3f5c77d1fc5e2cb97ef6d220a3dc"],["/tags/电子书下载/index.html","424045f68549b49c06e47deb84628149"],["/tags/电子书下载/page/2/index.html","657337455efb76e94fddcab4bfbe7414"],["/tags/程序员/index.html","c4cd3fbc4f99e6b2959ad2ee3822d7b1"],["/tags/程序员面试/index.html","68f77b86d9b6968c55d8ed7e6f35be2b"],["/tags/简历/index.html","dae752fd2a21adac22abcc7cb4ef3d5c"],["/tags/算法/index.html","a3748c1811fdea52e383110112835719"],["/tags/算法/page/2/index.html","64410b4f8d09f6cad7933cd2adcfb769"],["/tags/算法/page/3/index.html","fc70d280ed719506311be5566b9a8984"],["/tags/线程/index.html","d3dfdd4800c771e86fcb65c3a2335e49"],["/tags/结构学习/index.html","a5d02b96c6570f30ed2a4c575f819fe7"],["/tags/编程/index.html","acf2021931ab4088526ec23d9738f871"],["/tags/网站/index.html","b407a920ab3be11b166ae3567eae039b"],["/tags/网站/page/2/index.html","27ae739adbebc83aa83c0e3c011f9241"],["/tags/网络/index.html","3b7735a2d495ae43c277b90f8616173e"],["/tags/网络原理/index.html","f6bff34b30926421d5b80232d47ab9c0"],["/tags/肝脏分割/index.html","a5c130b92f9805860c0a8f998d3aa9b5"],["/tags/计算机/index.html","fc42749844e79ea1e572d303953dec50"],["/tags/计算机专业/index.html","f7adb8e83214b94e972b8d3806e0fa75"],["/tags/计算机网络/index.html","6f2a82505955ff76dd0ad3662a0fb580"],["/tags/设计模式/index.html","f5abf086a698c76d219ff069d1bb3f59"],["/tags/贝叶斯/index.html","0b594a1a77635e345e265e774a119802"],["/tags/迁移学习/index.html","d1750c73dbc1ef5cb0edcadccb762fb7"],["/tags/面试/index.html","7b86cd27072ef1d818e4ce0f3d3b1378"],["/the-way-of-pragram/index.html","786b65225ebd35f2cc406fc3bf0c0d0f"],["/untiypro XL安装/index.html","fed3cfe5f46d0d0af2879d2609559fbd"],["/video-websites/index.html","76edf64a8c3853698aa85db57927d04f"],["/wechat-fans/index.html","8697512e4e65e89b4cc55682ade9c727"],["/window-run-VTK/index.html","8ca2900573e572c05a4c16d2695be41f"],["/xshell-connect-Linux/index.html","e6c68c7174fcff8f7072241d6e38ba01"],["/‌Accessing-the-Open-Internet/index.html","2ba96b969d3652dc980273669f22a85d"],["/《Java高并发编程详解》，去大厂必看！/index.html","f85db4e0dd91b00bf781ad29850be2e8"],["/一分钟没了 1.5W 。。。/index.html","c4521185eff6e758cfed1391d4354128"],["/一条高产爆款内容生产线/index.html","f23ebb6f6990489b90dcac5d9cefb19e"],["/为高考学子推荐的六个就业前景广阔的专业/index.html","caa7d91fb31b9ea1cbcd46668be415ca"],["/互联网赚钱机器---社群/index.html","14676572d48c95fe5b0ea45ef2eaed02"],["/你们常用的工作方法和思考方式是什么？/index.html","171b9331c0a1605a226b8da95ee86fdc"],["/关于环境配置的一些事/index.html","073062dfbb53082cc419661c9c1abb9b"],["/准备了19w！搞事/index.html","b5ce181e29a0036f2f7efb85b8ddb483"],["/几个很重要的感悟/index.html","229aad4591a4268445ac17a82bc30cf0"],["/分割ROI篇/index.html","2106c9a87c1c27df565e12f95171cdb7"],["/分割精度说明/index.html","e544f23bb4d7abf9beed63629454fcdb"],["/分块程序执行/index.html","66f33c0e1644d99ed6eb67d902b0969d"],["/加班公司黑名单！！！/index.html","b64e1938df7c43ae29ad717a73c8df31"],["/卧槽，上知乎热搜了！/index.html","003f6c43d5adae377e89ea1ce01cdc34"],["/卧槽，我的小破站爆了！/index.html","2ee209900871889b96041d7e96101271"],["/卧槽，我被盗版了/index.html","439ed53483577b4bdc6b8db5e49b9969"],["/卧槽，还有985大学在大一上C语言课？？/index.html","167f4c16631021e0f82b5eb575a1ee84"],["/历年微软面试中出现的leetcode算法题/index.html","78a1732a691d113ae2b1ec675e2bf7d8"],["/去特斯拉试车了/index.html","459be6f64df6a72cf872ac96e1448205"],["/吃苦的三种境界/index.html","8ebc628f00d89a30d9a05c71af0a0578"],["/哪本书适合推荐给 Java 初学者？/index.html","fcca22e09e0bcd9680c5315b2c6d0b4e"],["/哪本入门级的学习数据库的书最值得推荐？/index.html","36d2cf77f901df3706c6f80f5e041041"],["/国内外常用的AIGC模型/index.html","46bc9a34cb157d81d999a11027961045"],["/国庆假期/index.html","90686cd215d714f4369b4d3aa96fdbcf"],["/图谱程序字典/index.html","e25105c9c7b438003e7f31559fd55f02"],["/图谱训练与分割/index.html","81024b30a9d5dc257b46f63703e15265"],["/宣布一件大事/index.html","0dc7a6e867fdfc6038c3a52d6732b85e"],["/小鹏P7i试驾体验/index.html","2c698a06496c1e54501995b208271dc8"],["/微信PC版3.3.0内测更新，电脑可以刷朋友圈了/index.html","5c7f412cd24c2018c4d8d3f726c2660d"],["/怎么更快的赚钱？/index.html","ddbf3f881d45c4959af573df42f8edd2"],["/我毕业了/index.html","67746f3dd0e2fe99fa2adaef228f8eda"],["/我！真！的！找到了！爱上学习！的方法！/index.html","30a33f44f426b733a141deb93648c0a1"],["/户口的意义/index.html","79d059d89c404ee4300bd2d9953ef80d"],["/推荐两本经典算法书/index.html","801d329f5a13e67a0d1a88b226899418"],["/推荐几个在线学习SQL的网站！/index.html","b837edda6310d93424b42228bec22ecb"],["/搞了一个程序员成长晋级社群！/index.html","0ef7384c28b855e3f950d2c057b62de5"],["/摘抄/index.html","0e226071e750240b2641cbe407e6665e"],["/暴跌30心态崩了/index.html","d746d4c3ab29c429296467f1aef4da15"],["/最近很火的ChatGPT到底该怎么玩？/index.html","b409e6b63d43fab02f5a457810f475e4"],["/有哪些好看的日历可以买？/index.html","03697e16cadc60d86bd5f0412c2a2f23"],["/服务器有啥用/index.html","d2e6d87483777b6da449fa3c6b319e83"],["/来长沙了！/index.html","1786fb684a4314b77593d1a7e22f8fde"],["/校招污点公司名单/index.html","ff2a6036889808f811eeca8d72fdd1de"],["/梭哈200多万/index.html","0172d1f18a816278b89a1f0fa5d879dd"],["/梯形图入门/index.html","508d6f3e45f816495272690f61407544"],["/橙心优选，凉凉了！/index.html","19d6f6b47488286f23a9a92cb90bd7c3"],["/比亚迪汉试驾体验/index.html","c90f6f9e482f6a2b0b5ad0d13fb2101a"],["/清华转学成电，真的牛逼！/index.html","b8a81ce18e0a95f6aa348b580d02931e"],["/滴滴程序员被亲戚鄙视：年薪八十万还不如二本教书的/index.html","c74c0246fca51ce9e11aad239d91db1d"],["/社群！/index.html","178e982de8668a30066dd80424cde77e"],["/科学上网之VPN篇/index.html","0e0014d6345da28ad259bc409d01a872"],["/程序员必备的几个技能！看完你也是大神/index.html","a9240f882499c497bbf7b64f10ab5f0d"],["/程序员绕不去的槛，Linux！！！/index.html","37bfe7d5a892fff6279feb82c8727655"],["/蔚来ET5试驾体验/index.html","610d3c6a8fc64499b3d94a1a86ba9c4a"],["/蔚来，牛逼！/index.html","370f61403f5bd6bf788c9b7c5d0f4a27"],["/被录取了/index.html","cc2cfff1c9b756ed5e6cacda85370d43"],["/被找事了！/index.html","d6ba7b4ccfc3a0995e029b7cc2b5d4df"],["/被拉黑了。。。/index.html","4e7f62b107a1d9450b8838e295959681"],["/被车撞了！/index.html","f9bdb6a37c61841fc7f8dd9655bc23f8"],["/该如何选购固态硬盘？/index.html","0030fd192d16faf676cb49e8aea86a0b"],["/这本书一定要看！/index.html","7ed198efc1ddec8298d2b092860383ca"],["/选Java还是C++？/index.html","0c54129bd25ff866fd036352a3d4df51"],["/那些让你起飞的计算机基础知识/index.html","fb6639a4d1fcf41729edef659cfeb9ff"],["/靠这几本算法书，成功拿下大厂offer！/index.html","be697db86f89fa37a4555101197997cd"]];
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
