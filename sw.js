/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/0010-city/index.html","a5e33b6f89804728ceb27b085ed19637"],["/10-algorithm-book/index.html","00bc747f64c8ef17fea10a918bed37c1"],["/10-website/index.html","f1e8dd56c5a8ff7c4cd843f4fecb491f"],["/100万的小目标/index.html","938a4bae5efdd74ac9142dba4a8926de"],["/10w+YYDS！/index.html","0cdf47786b037af4d79f333043d47c76"],["/10website/index.html","6d0407bc781f6ff6b4d9c304ec14ad59"],["/12-technical-tutorial-sites/index.html","6da054e2207231a81bf7de9e722ee8f9"],["/2 6 岁 了/index.html","798713a97023c79c76f56b23d9030729"],["/200万，啪，没了。。。。/index.html","f582848cc1401b7b683aa26efa087fc7"],["/2018ECCV-Paper-DL/index.html","72705dfc6b4ff8e01e9921e126f65542"],["/2021年固态硬盘选购最新攻略（小白避坑指南）/index.html","767e08bd7405c38c8cee34582524539c"],["/2021机械键盘推荐/index.html","5aed24ec13b6ccf656dcca21dc7e0753"],["/2025-07-15/index.html","9d3b82709bb3acbca2e51f68876d106d"],["/2025年终总结/index.html","680c8e0134ca73eb09cba8d36066380c"],["/2026-Open-Internet/index.html","195a44c7db6c18e8712290d04e4b1ecb"],["/2026-best-vpn/index.html","a476eec228eeede7355445ec3d57a284"],["/2026-clash-vpn/index.html","49eb73b4463a470c907416b0e62c03b6"],["/27岁了/index.html","a351966a178d9e2e9515e7b865c3368d"],["/3D-Convolutional-Neural-Networks-for-Human-Action-Recognition/index.html","be26dcd2f99953024e25e712b4fce19e"],["/3D-Deeply-Supervised-Network-for-Automatic-Liver-Segmentation-from-CT-Volumes/index.html","13e1c9bcd6993fa6ad0c2401a0627490"],["/3D-Unet-Experiment-notes/index.html","56372e50a97af500b4b8e1baf054fbaf"],["/4-Software/index.html","5ddc9488a966beda8ced8953ae1eb9ca"],["/6-website/index.html","abc012c82750cafb92bb2dd02583b4b2"],["/7-terminal-tools/index.html","39f9a8f15e46a3ac3d5fed3d27ab4e93"],["/AI-PPT/index.html","d57aa36cdea2cae157c0f520ed575520"],["/AIGC中典型的深度学习网络/index.html","f5a46bf8a4cf3b73700fc9269f418b2b"],["/Agency-model/index.html","008d55286b51f8b4eeb31f21d7846182"],["/Algorithm-brush-notes/index.html","be78d5fdadbb4e5cf516f851c0c54d5b"],["/Ali-recruits/index.html","e3bad32cb67dababfb10c3d8027f73ac"],["/Android-VPN/index.html","6b661fe5a2592d64ebcebf01a6a3cadd"],["/Android-open-internet/index.html","1b09c7d96ad6e9ae37dd862ecf668740"],["/Appearance-mode/index.html","607aa9aa1bcb2c6cbc0f57b12eedb507"],["/Backtracking/index.html","a47d9563001574e948ba1870b69e6519"],["/Baidu-Sao-operation/index.html","2b12f078dc6dfd4ef09fcc978073b847"],["/Batch-Normalization/index.html","0b5adf4c3da97637e7dc949994764df4"],["/Best-AI-tools/index.html","88cedc094f51b17352ace573a39268e6"],["/Bias-and-Variance/index.html","8cbb448bf897d307c0ded75b66427eef"],["/Binary-tree-traversal/index.html","8d6f164cf525bf8960a00faf55b034b0"],["/Branch-and-bound/index.html","cd09aef34b65005ca1e7159bd263ce63"],["/Buying-computer-for-the-first-time/index.html","9c8ec9185a103f6ca7d51844686d2085"],["/B站向北邮道歉！/index.html","15699118d143fc1dbd350e1b3ac1e350"],["/C++-string-function/index.html","5eb63a7c736704d02f4e1357d0640549"],["/C-Java-DevelopTools/index.html","891a6d1eaaf76ea5d4dc98004bd8f02d"],["/CS-Classic-Books/index.html","1022594bb63f7baec6ee15b91878fd00"],["/CS-network/index.html","fa1d388558019a468c0edbcd0bbb7546"],["/CSBook001/index.html","0f4722aefe5c0a4273fb525c298d39b7"],["/CSBook002/index.html","e48086626dbe62c9ed68ab8015b78abb"],["/CSBook003/index.html","31b276c4befdfc8624a29af990a0fb8c"],["/CSBook004/index.html","fed8c984345c633410cccb2ae20e048b"],["/CSBook005/index.html","0e76cc2c8c90aeb56f494bde46d8fec5"],["/CSBook006/index.html","ef675a4dbfe6be704d33ce2e4f9ae8b3"],["/CSBook007/index.html","13d832b6790e9d3044214271fbdacfca"],["/CSBook008/index.html","a64902a4078cfea85d3587d543fd49ff"],["/CSBook009/index.html","b3f8f7a80c4cfe26dc794c29426110ce"],["/CSBook010/index.html","29931715ea2d2a05b933e5f9f7b7a8b6"],["/CSBook011/index.html","29fa1e173fc5e6c772573e3d3b5aaa1b"],["/CSBook012/index.html","19f5b5771e37252e6d0fbe364b00dc6d"],["/Changsha-really-fragrant/index.html","17392bd464015d91de3ed391bb5cbb74"],["/ChatGPT-VPN/index.html","871159d29491e6d02f559abc798ddce0"],["/ChatGPT/index.html","80d3a800a77c35ba16c507570a399531"],["/ChatGPT！王炸级更新！！！/index.html","41b84c5c4352b52fe5defe8455075c89"],["/Chrome-crx/index.html","1133ae2b8d5be55ce2fedade2c43fbdf"],["/Clash-VPS/index.html","df28ecd9a0e463617e1424815a570a64"],["/ClashForWindows/index.html","5c98f5bd5aa1594e0c61d4bf7b9c6b8b"],["/Computer-Classic-Books/index.html","e70dd49b94bcbb58a1509b3b888c4ad4"],["/Computer-for-another-major/index.html","36815b808ce20afeb8a0fb4569de633b"],["/Conditional-confrontation-network/index.html","4a1c29bc8a1de55d78e7c8242a39148e"],["/DNN/index.html","6fbc0151960fd2b6576ed886949eb222"],["/DSN-segmentation-liver-experiment-summary/index.html","51cb2240f019039bcb1d759b073ad517"],["/Data-enhancement-elastic-deformation/index.html","6d9f048fee15d8af3592cdc7e9b0afbe"],["/Decorative-pattern/index.html","28bd2eb70a1d92792af4f5532e71f57b"],["/Deep-Learning/index.html","2d14f1ec0df31bf00fd39070437bc756"],["/Deep-learning-and-medical-image-analysis/index.html","4636bdea25380d8ba8dcfff10811a4ad"],["/Deeply-Supervised-Nets/index.html","0b00ad3ef4b7f871eef4d9e2fb3e4f39"],["/Deformation-model-based-sparse-representation/index.html","aee55f0e57a31ef20066be2a30df7d19"],["/Discriminative-and-Generative-model/index.html","47a304f9232b9d4bb05d9f03503b623c"],["/Distributed-transaction/index.html","98f9273cec37814877da47a0ba1d6e1c"],["/Divide-and-conquer-algorithm/index.html","b0d3767b35a53d9912ec3d44de90ec80"],["/Dll/index.html","4b69ae3f9807e4a2a68f997814c585c6"],["/Dynamic-programming-algorithm/index.html","e4a3fab6d7aa5fb8b08973046e68ca26"],["/E-book-download-commonly-used-by-programmers/index.html","5037654287199bea190a69356e9f85d1"],["/EditPlus软件的安装、激活和配置过程分享/index.html","9a53677dab9727bc2a407d0737c85145"],["/Eight-sorting-algorithms/index.html","085b2d7a530a84b153a42eb8a475b828"],["/Encryption-Algorithm/index.html","8ec3c5bde36f9367b17a404e643be73a"],["/Eolink/index.html","6f4ee790a297d1999150b5d0e57b6c69"],["/Factory-and-strategy-mode/index.html","5c81a76e69886bb411c4699c5fe1713f"],["/Foreign-technology-blog-community/index.html","5efb27cea54edb61feb0bc6abb6bdce3"],["/Functional-model/index.html","51103d22f87c44064e8dbf026dff0e8d"],["/Fund-type/index.html","981ee265a668459374d7b00af76d26fe"],["/GPT-4o/index.html","2e97b5f518d2bb99c0afa757631e6869"],["/GPU-medical-image-processing/index.html","0ea375e3e94d621a7b428208b363739f"],["/Gemini-pro/index.html","6f911aecd2cd5bb2bfa33507df900aeb"],["/Gemini-vpn/index.html","39d4dbb3a308162cd6b2270bbdaf755c"],["/Gemini/index.html","a896f2e0e10f24669c50dfcf61128e47"],["/Generative-Model-of-Unsupervised-Learning/index.html","b4bcc0ced3a16444b0430c41dbe16521"],["/Git-Learning/index.html","1b868e1b3408d897d0017568b5ebf78f"],["/GitHub-2FA/index.html","8310e3a8885175b90285d37be2925a6b"],["/GitHub万赞，程序员必看操作系统总结！/index.html","128a156af5e220a068eac30d535a8857"],["/Golang-book-recommend/index.html","0a9cfa50e54039df93b9ebb24d08d1a1"],["/Golang-learning/index.html","8b0d566202ba6c8b3f0a87225d7e208d"],["/Google-Gemini/index.html","861c3f63e0c11277db0c850aef17665c"],["/Gradient-descent-optimization/index.html","bdeeae0b9e4d3edaad078cce299d340d"],["/Greedy-Algorithm/index.html","e5e010ef3e8af372b3fce3f42b89e229"],["/HAND-User-Forum/index.html","c0b97b1c48037b5da72925c45619d5b6"],["/HK-bank/index.html","e90af77ed013d9adabfffed97ef4d084"],["/Head-to-head/index.html","4d768a231ae00a577fd465412b7ec316"],["/HexoPage/index.html","1e9b5b97a137402fcbee4348962b2b3c"],["/HistCite-Pro/index.html","8f285d13ed86c5bb2c9b25981a4f7e29"],["/How-does-the-program-run/index.html","a3e24787d569c6828c33bff785a38de8"],["/How-to-judge-whether-technologyisreliable/index.html","15e23345b6fd66aa9ef2ec7d9c78a2bd"],["/How-to-learn-design-patterns/index.html","038f6208ae2242ac78128c2eaebd9b2a"],["/How-to-learn-design-patterns？/index.html","11b255e338542163d93d00cbe4d5fdac"],["/How-to-teach-yourself-programming/index.html","b8fd7c729ae6f7e35f83b9d5d0251ded"],["/How2learn-Python？/index.html","cd4ea1aa4e5c07c7a3be3e1b40a9002d"],["/IDEA-shortcut-key/index.html","103d0e4b4686b0821e1f862ed011bc38"],["/IT-interview-basic/index.html","f61821d812eace363fdc5fcf088b5a93"],["/ITK-VS-install/index.html","553d54bf0244b8094f68ec8564dbb5f8"],["/ITK-VTK-ItkVtkGlue/index.html","00a6b4307dead81dafee0b1ea6698094"],["/Image-processing-plus-noise/index.html","066f08d37d7446ac071a770d584363ad"],["/Inception-Going-Deeper-with-Convolution/index.html","513918b25ae309a976cc7f20a815fa9b"],["/Information-Cocoon/index.html","d6b475c4f5c1293042f9504dae36f199"],["/Java-GC/index.html","1fc7c435e5f2dcf04b0a92880a393664"],["/Java-Servlet/index.html","b35b32dabe96cc244b3b11bda03e0783"],["/Java-array-and-collection-sorting/index.html","ce6e49217daf662eb2aacdc18d540476"],["/Java-development-tools/index.html","288bf3413cb01749e2ace711a861d813"],["/Java-eight-data-types/index.html","b9f82dc281b27c756b3b0a32a108ecf7"],["/Java-interview01/index.html","a04c5b4a79476f72b8f453500d978442"],["/Java-interview02/index.html","000e060576e259d6f611ebc7dddf79c3"],["/Java-interview03/index.html","3dcce59b36f2614f15b845124ec70ce9"],["/Java-learing-map/index.html","2981d4f5a466babeb2944b1a83ad04d2"],["/Java-learning-route-map/index.html","e82b8d38b7a62c3a737daef6ad3cb22d"],["/Java-memory-area/index.html","4a62a217379c7cd2e61b3ca6652e9496"],["/Java-memory-model/index.html","4955a313f5ffcb7eaedd2d1e7e5ac9c8"],["/Java-multithreaded-learning/index.html","fcb7570d582b32f9c626d4590e5742ae"],["/Java-project/index.html","af10566cc8d060d381e4124b0ed55d4a"],["/JavaWeb-Chinese-Garbled/index.html","6f436eb76ebc3b28ce268c12b64bd7c7"],["/Java还是C++？/index.html","ef7ceb77ceae65189165be0a90078bee"],["/Kaggle5-step-guide/index.html","058b0c4218eb1a0ab6c64da09fc4d480"],["/Knowledge-points-of-Java-garbage-collection/index.html","848ed7905f640748f646b96e999b051a"],["/Layoffs-Hiring/index.html","8715fccccda8a4bfd0e10d9d0822b887"],["/Layoffs-and-Hiring/index.html","c198cb7ab5ff2899a084ddfca7ca3f9e"],["/Linear-regression-of-machine-learning/index.html","2377415a320f5a3d810a2638744a9e3e"],["/Linux-Compile-C/index.html","db442ba7688742af2da54fae408726c0"],["/Linux-ITK/index.html","4fdd84bf91c1eff01fdc0dd6ee22a985"],["/Liver-segmentation-of-sparse-components/index.html","29cd18996f3e07e7f25ba73a8539330c"],["/ML-EBook-paper/index.html","f2d5ab019cafbc80a524e422a9f63490"],["/Map-uses-multiple-maps/index.html","e1b3991cb6b78f1e4b7ac01419e03b4c"],["/Marching-Cubes/index.html","85015c0afc9152ccf056dfe608971fcf"],["/Matlab-Graph-cut/index.html","2a8d6ad2ca2bcf186535345b7bf3bd4e"],["/Maximum-Likelihood-to-EM-algorithm/index.html","e2e0a6ef372bfee5896f49510498426e"],["/Mean filter and median filter denoising/index.html","701f4f9f03c9b278478c487b1e8754d6"],["/Medical-Data-for-Machine-Learning/index.html","ef0609e33dd6e622d7257e6357e71f38"],["/Medical-image-analysis-deep-learning/index.html","2c8c934f535d3a5a3b07af86975e7bb1"],["/Medical-scan-image-processing/index.html","70cb413bd8b7a383642104fcac9609b8"],["/Merge-sort-algorithm/index.html","2149919090a3fa643dc70eb0526dc809"],["/Monthly-income-2W/index.html","5e1babb659db32cd6ddcd8ba5990d787"],["/Mysql-database/index.html","ca394e2c874bbddddf2a4e4523b96fa6"],["/Neighbor-Embedding/index.html","e8ba5c4a176d41939e37ade37c0d7b8a"],["/Neighborhood-approximate-random-forest/index.html","b58ab069480f28717b67981c075d56bc"],["/Net-and-official-documents/index.html","5cc34ab608d418f7f126b07bee1999b4"],["/Netflix-VPN/index.html","f2051ece422efc998c214db53d72ee13"],["/Network-principle/index.html","7dfa20392eca93545ec080b94e9b9ca0"],["/New-Hong-Kong-stocks/index.html","38d2079b71f08b8d82a7a42a67dc28b3"],["/Nice-to-meet-you/index.html","4a0eb25c732bc12787886abf24579f9d"],["/OS-processes-threads/index.html","196d113a05a391ad859a22e4036503d9"],["/OS-run-environment/index.html","276248062dd2a9292a8a3bd1e8871f7b"],["/Open-Internet/index.html","666545de04ac7e12be89f720818779e2"],["/Open-Internet2/index.html","91b5a1554c0007ea9c2c06f99ca76d19"],["/Open-source-community-and-rewriting-website/index.html","b4d5d1014cfdce122e023cf7bae56c7a"],["/Panoramic-image-stitching-based-on-SIFT-features/index.html","b6de67a4cd1ef769949b7cf0c91f5aea"],["/Parzen-and-KNE/index.html","6f563a5795d1701b1c1128e240939dc6"],["/Personal-technology-blog-site/index.html","ebb0108942a32f52b1b1684834248ce1"],["/PicGo-Gitee/index.html","695ca0501e7f960070540a1f88c1ebf1"],["/Programmer-treasure-chest/index.html","4740248c6192f0d3de9534e31f2e1705"],["/Prototype-mode/index.html","c6ab14023dcd79663a14c9bef5659a72"],["/Python-base/index.html","4b75438cff690157891b1f9274c5dfa8"],["/Python-crawler/index.html","07da92a8455bc5d345057d9094e29f10"],["/Resume-revision-suggestions/index.html","7cc5084df09ec4c8b57e0f1145f7de3c"],["/SEO01/index.html","b96dab7cba10aeea22d34a03020858e3"],["/SEO02/index.html","9eab6235398991b4e599b1897482a0d9"],["/SPHARMPDM-MEPP/index.html","926dae2676867df799103b59aac74d4d"],["/SVM/index.html","e7b53bc3d983dd06edae4e45d209b80d"],["/Seata/index.html","674c8ace90ba9503a0c992dfdc1cfdd1"],["/Semi-supervised-learning/index.html","8068cd8376e1b1af8e4f54e6a06c429d"],["/Sequential-model/index.html","9dc287729a6e11eb915d9bf660e47f85"],["/Shape-Based-Human-Detection-and-Segmentation-via-Hierarchical-Part-TemplateMatching/index.html","52e4f2f74f34ebceb1991068f87ac2ae"],["/Spring-basics/index.html","930f95916bfe2860c3493dee40e00a80"],["/Spring-integrates-hibernate-Struts/index.html","cfc262bfec52508273216fa2f176851f"],["/Structure-learning/index.html","3e7fbdf26a5d99e63c1f122a1a49d83c"],["/Suggestions-for-self-study-of-computers/index.html","85300d20e68498f13ec3b3c3254e098a"],["/Summaryof-HongKongStock-Account-Opening-Links/index.html","3f2292b22eb92001ee96b99ab433e683"],["/TCPIP-detailed/index.html","eb246fb16fbd5708c6a0e334752535f2"],["/Telegram-VPN/index.html","6414da00a4d3dc40388a7f534a511bd8"],["/Telegram/index.html","b9aea6161720fcdf8abbf14579fdad03"],["/The-essence-of-shopping-festival/index.html","c9de2a9f178a080d738a4e326667c8a2"],["/The-most-important-investment-in-life/index.html","d038a7d0e5786400bbd9f58e23312c0d"],["/The-most-successful-nvestment/index.html","d96fb2171ad994ae4d65575c648b2f4d"],["/Transfer-Learning/index.html","425225a815ce681290cf28033d820302"],["/Transfer-to-computer-major/index.html","f3a1b7ff8deb4b586df41664e12bf6a7"],["/UNet-Convolutional-Networks-for-Biomedical-Image-Segmentation/index.html","96e9055448d8be7394eaba7620c6f7af"],["/Ubuntu-install-sougou/index.html","21ed25d0219bf7b4b249adc92e3989e1"],["/Understanding-of-paying-for-knowledge/index.html","2e3dc3028037612cfc4f1dd90ab53ce4"],["/Unsupervised-Learning-Linear-Dimension-Reduction/index.html","5e4ea8273d3070052b52003ecf55f10e"],["/VPN-HELP/index.html","57e9bda53765f25264268928d46ae8c9"],["/VPN2025/index.html","87a3214725cd31a96586b978542a0201"],["/VPN2026/index.html","823b79c5c4dc769523d009c96b48234e"],["/VTK01/index.html","954d4dcc790e70d11bb06a327aa40ba2"],["/VTK02/index.html","6ceb87730bf3f336f81a04fd60ec688b"],["/VTK03/index.html","afdd8a7af3202081cde8832cf090c774"],["/VTKRead-write/index.html","5201a24a8a2b66e292a31775513aff11"],["/Vertx-Java/index.html","47fabbe6448211bf7665953236c849ec"],["/Vpn-OpenInternet/index.html","80a1c1a6eef156726df716e5511f9cda"],["/We-are-all-good-kids/index.html","fc229725b6ceb18cca69c24e1a79d60e"],["/WeChat-80/index.html","2a6c4b642cdd24929245bcd4397dc2f0"],["/WeChat-red-envelope-cover/index.html","1f7b7a0b18b05676e5c958bc1961ef41"],["/What-is-crawler/index.html","8e93187b996160ffab56f5f18b7be7a5"],["/Win-Open-Internet/index.html","b3201ff8fae14a43ec8b6857f120d50d"],["/Win-OpenInternet/index.html","36c1e5b9e99561dfdf449e975936453b"],["/Windows11-2kfans/index.html","56b392579cbb4f984792a5229ae9223a"],["/Word-Embedding/index.html","4cde8866b99b8d2e33e0fd7973289801"],["/YuanShikai-and-his-Beiyang/index.html","ad86ae341e12d6e32e5de0c9b09e6a5a"],["/Zero-copy/index.html","6dc95d8f0142ffa6ea9beaea17810745"],["/about-keras-model/index.html","7bc143095963dda5c25ce58da59996fd"],["/accounts-google/index.html","a18e121c52bade0a677a0bd61db6fcd0"],["/algorithm/index.html","76a194bf889a4262fdcfbb92d92efaea"],["/alibaba-Java/index.html","d39969774e1157946bb8ff1c85aba996"],["/archives/2020/01/index.html","ddf022dbb1acfa332af1d17d7c8ffaf8"],["/archives/2020/09/index.html","327b126e997ef6c8e8afd5771f08c973"],["/archives/2020/10/index.html","2e68c25713316a47cccf7141c6f0a95b"],["/archives/2020/11/index.html","518925b74236384d8828a0d2a490f2d7"],["/archives/2020/12/index.html","736c70db4b962a1dba6b562e34806253"],["/archives/2020/12/page/2/index.html","02bff0df2258cee18f885dedfd54eb23"],["/archives/2020/index.html","b9c5b7d3e3b35e8851555d1019e49acc"],["/archives/2020/page/2/index.html","464cca6f53669b629c85e960694f5135"],["/archives/2020/page/3/index.html","0b078523172ed3bf4fe81ca46f448355"],["/archives/2021/01/index.html","2a3e153eaaa81fa1c869c4ad98e45929"],["/archives/2021/02/index.html","705579c206d4f22d92ae9dee3dc0df74"],["/archives/2021/03/index.html","2ca7aff5aec1cca34fe972df6958afa6"],["/archives/2021/04/index.html","6ddaf048ca1da4990454f4b1a61ba46b"],["/archives/2021/05/index.html","b0316c604e60a9faeb4a65b62d6c3f9d"],["/archives/2021/06/index.html","4aba2a8b520fa44981cbf628b95fef8a"],["/archives/2021/07/index.html","ad8aaf216f6d912154c71a151c248dc4"],["/archives/2021/08/index.html","53bacc07eb796f871b6a3a45a7305b14"],["/archives/2021/09/index.html","0fcf081e1dfc8b5fe1d2b5b07d6b8e06"],["/archives/2021/10/index.html","c4ec5c2ac7194e08c17d66d57337b280"],["/archives/2021/11/index.html","eb19b22c46d5139f89759f2264f08427"],["/archives/2021/12/index.html","822e31a4a93824c765c01be73fbba1fb"],["/archives/2021/index.html","304940a9fe11890e809ebd72f62cc70b"],["/archives/2021/page/2/index.html","21575494326c3962258cf0acf2d566cb"],["/archives/2022/01/index.html","ebee6c87ed3a5fbf0852dfd67fcfe8c1"],["/archives/2022/02/index.html","e7e51aa799817d81f7c3779c32e4d840"],["/archives/2022/04/index.html","9afd6742ae1df4a3838a455ee495c6d7"],["/archives/2022/05/index.html","e2fce5a0d7dbb6037b8436ea8231f0ba"],["/archives/2022/12/index.html","4f18bdc5cf6b58d95c8fb20ce61b2868"],["/archives/2022/index.html","1d6e1db2e7af8e0087555c1bb82f6039"],["/archives/2023/01/index.html","ac1609f07a5ba6da90599deb5d6b9c32"],["/archives/2023/02/index.html","4d48ddd9829e1ac7f625a07897f6f400"],["/archives/2023/03/index.html","2fb5061b2a4dd7566a5e33654f8b5877"],["/archives/2023/04/index.html","13109c699942957f3a37c1168f9c4f89"],["/archives/2023/06/index.html","1e1b650a158d220a1632bd22b1226db2"],["/archives/2023/08/index.html","b64b2e4910bfe2fe9ccf65e3aaee055c"],["/archives/2023/10/index.html","0a8f2a090063dd6e277493f3f66eb137"],["/archives/2023/index.html","ecf5dd88c91264ad7e281cf2c0e2152e"],["/archives/2024/01/index.html","22e2be86080a197c9919f5f0379515a7"],["/archives/2024/02/index.html","14c3e93ba4611e696efc5a655e24ce1a"],["/archives/2024/index.html","caef0774dc0fdde434de191426c96f84"],["/archives/2025/06/index.html","d91ecf3c4e472b4915f11520e0a82b1f"],["/archives/2025/07/index.html","0a1610fcffe67740caee527c1dbcc0d4"],["/archives/2025/08/index.html","1a38714543b1adb3ddadaebdbceb80c5"],["/archives/2025/09/index.html","03ee7aad83faffcef8af101f027e28b2"],["/archives/2025/10/index.html","18d6615a2a4c699e0eab268ca01e99f2"],["/archives/2025/11/index.html","b562a344a17e90fb0d6e1eaf2f9c46d9"],["/archives/2025/12/index.html","33699a898e296ecba6efbe124c1316f1"],["/archives/2025/index.html","aaba06fd6533d64f36b3bbc78770f2ae"],["/archives/2026/01/index.html","f561edcd296a7109b49bbbc884e84639"],["/archives/2026/02/index.html","06871f0e8ca72149af9cd0f7b8973cd8"],["/archives/2026/03/index.html","9b717ad76524c62f8e98991a5787afdd"],["/archives/2026/04/index.html","f235b9359b4d6cec3c6ca553b6262728"],["/archives/2026/05/index.html","ac937cbb971057ef59f01e3f53751ae9"],["/archives/2026/06/index.html","5eb10bc593f96163e814de8488450195"],["/archives/2026/index.html","03815730450abbc222de4f5128ebefbb"],["/archives/2028/02/index.html","6007e20ba7dc0ccda6585286d91c7d4b"],["/archives/2028/index.html","a4992fc17d5863906df98ac2b228f186"],["/archives/index.html","c7a9f244c5e8884bfe07d50e6e21681c"],["/archives/page/2/index.html","8fc2518cee4baabbae73fee3d45cac58"],["/archives/page/3/index.html","46048b72bf73b379b9476d54e45a962f"],["/archives/page/4/index.html","4d737fbaa5ca773cb77350fcb53570fa"],["/archives/page/5/index.html","11fa91dd07e01a80c1a4ffc47ebc902d"],["/archives/page/6/index.html","bf2d1123d7953781feafc59179c0775a"],["/baidu-search/index.html","0dee391653e37f307b970c5cc84ab434"],["/baidu_verify_code-Hh2fKNlEB1.html","d0bca7832a5c86cc53e29422cadbca67"],["/be-a-programmer-instead-of-a-code-farmer/index.html","9d2d8f68f06f78e80b43eb59449aab87"],["/best-vpn/index.html","d17b200c16454da182713e400b23e7ca"],["/best-vps/index.html","4b4f1659a15f206c1ff1c7f259396ae4"],["/bought-a-house/index.html","64392fed755a24c3712ce003b3a9706a"],["/categories/C与C✙✙/index.html","4fb7e8d00304fa73d833ec28e7b64e2c"],["/categories/Go语言/index.html","7dfbbd81822834b3c7544bf27d8e4515"],["/categories/ITK与VTK/index.html","7ac80039ffc0f0e69246716f6d5b3aed"],["/categories/Java/index.html","723ad7e2e16c0be64bf40855c84854ea"],["/categories/Linux/index.html","d0dd93dd8409c41e24d255c45251267e"],["/categories/PLC/index.html","9cd2b2e30adab78ab1fdfaac95c76d09"],["/categories/Python/index.html","961d7f264b636c9c69dcd5b58ec021d6"],["/categories/SEO教程/index.html","0c45856fb7d1ffacba48da236b897ef7"],["/categories/index.html","ea4d99793565ca06bf481b0e208c5f70"],["/categories/图像处理与机器学习/index.html","8c68806b493e7cc22d42781a63ef589e"],["/categories/工具/index.html","c4f8e74a0554751e1770c73a415e750b"],["/categories/技术以外/index.html","5183ec78df5e65f44dcfc34268379550"],["/categories/技术以外/page/2/index.html","38081396f4281ce4faa3a936b47ece1b"],["/categories/数据结构与算法/index.html","ebcf1abb68a07bc33bd60c98cbea8203"],["/categories/科学上网/index.html","432034a8be735fd456449bb4cf91eeb1"],["/categories/编程经验/index.html","a49566c4bc9c47134b87fcbeece2c6d7"],["/categories/编程资料/index.html","e326f38a9a797f356f1d9901f1d7b675"],["/categories/计算机基础知识/index.html","0fb9efeb5b100db4593a28115f390808"],["/categories/设计模式/index.html","9f01b63865b0d2872a928b354526c332"],["/choose/index.html","569cea65e2fa55df0e007f0d2fa62a1c"],["/choose2/index.html","c5c75fe6a8ff0e019621f55d8466e06e"],["/chrome-crx-intruduce/index.html","70abdc9b9f350c31960685f4f5f46c0c"],["/clash-free/index.html","96ed39e39ec2139b86ea55a05f8f98d2"],["/clash-pro/index.html","e34d1f7783ac75618de554d19f3b4e40"],["/clashvpn/index.html","d6372c0afe82dab7290bec4124da41be"],["/coder-blog-website/index.html","8f6ed216aacb0e3e6b6a566532cb043b"],["/coder-source/index.html","3e6a15862ad807649e9f4f584792fdb2"],["/coder-videos-website/index.html","c942f3022a14370eb78761eb5829cdbb"],["/computer-book/index.html","04d4a52dc2e555f6196339dbffbc6b86"],["/computer-censorship/index.html","e9f8d48739080e740d8e60016a5213bb"],["/computer-network01/index.html","4d6082744e042ca4a5848a47f21ea1d7"],["/computer-network02/index.html","b76a02729ad73ce362b2afcc6a5e9195"],["/css/main.css","bc32ad34ec4990d934c3c647bdb62f79"],["/database-Mysql/index.html","97620ec75fb0c9529f31f5074dece1bd"],["/eclipse-lombok/index.html","14fb69cc8d7a72cd5af9d940c3239ce8"],["/freego/index.html","3358b1a108591f1b1f038c2bd3f55026"],["/fully-convolutional-networks-for-semantic-segmentation/index.html","347ff97c18ff1eb18c6f83a2bcce50a1"],["/great-firewall/index.html","1adc78a9698badf9d5d17cbc45eee919"],["/halfrost/index.html","4454e67060fb96b0a875d2b26b350d41"],["/how-to-signup-chatgpt/index.html","904ec4cf828ae6d8ae0281142c9af9b8"],["/how-to-use-Gemini/index.html","90d63fcf6c92aa8cbe50e6ac7e8bc542"],["/idea-continue/index.html","4662431b61ea87e2470719ee140450cd"],["/index.html","49eba384cd55b7f0c8d2c1f350c312b2"],["/ios-open-internet/index.html","5fbdfc0ee9121d474feb76a0782d510b"],["/iphone-open-internet/index.html","cf8c192d56dd5ad00998bcbb6d6397dc"],["/itext-makes-pdf-form/index.html","699d3d87cfc01f807dced5d61e0800ec"],["/java-Set-Map/index.html","08d21ae3d2791f2dfbf86223de52300b"],["/javaweb-server-error-codes/index.html","476500ebaf54d1fc411dbb03323ef351"],["/javaweb-source-code/index.html","142adfbdf6bbf172c3e3827c8641c669"],["/js/lib/busuanzi.min.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/js/lib/lozad.min.js","47904d34a224931dd1b615c59a3dbe3b"],["/js/lib/prism/prism-coy.min.css","0ccad54d95845901ead59bfd3ecceb14"],["/js/lib/prism/prism-dark.min.css","a4711d2957d6605eb5682bdd228cf123"],["/js/lib/prism/prism-funky.min.css","efedcdccd7a9ab342d2d9cacd24920af"],["/js/lib/prism/prism-line-numbers.min.css","38e22e790c279bb56f9ec4b90a2a2d58"],["/js/lib/prism/prism-okaidia.min.css","5ac6f9de996fbec68aaa106dfb16e061"],["/js/lib/prism/prism-solarizedlight.min.css","ecc7e64d039873ffcf7fb27babdaeb5a"],["/js/lib/prism/prism-tomorrow.min.css","456af2a14ae4f5089939d5904ac40fe8"],["/js/lib/prism/prism-twilight.min.css","ebb5c355332a8cf9a1ce37a2a69d678f"],["/js/lib/prism/prism.min.css","a5234d614834658887cec6a9515890f8"],["/js/main.js","052d2b299d9c750afea8df0b802ab7c1"],["/keras+TensorBoard/index.html","9c1863bcc18026b96101cb04f0f1ddfe"],["/keras-beginner-guide/index.html","4b46ce2f20b7fa003ef5c61db80a6bdc"],["/kimiclaw/index.html","a333c05917a0fe09242bd86c1e7838a3"],["/kmp-algorithms/index.html","378692fe0aebee485b9a8af042d807be"],["/leetcode-Java/index.html","6ff2b5bc9a486dcce12555fef9bc2cac"],["/links/index.html","a89c3ff8b989c3695c3612129bade28f"],["/linux-java-opencv/index.html","60fd3542f80410cef5056b7f9f73d14c"],["/magic-internet/index.html","b87f598692124c95213780fb0a51a72c"],["/magic-vpn/index.html","8d1a8673b3d44aa5fb11e4c84f4042b2"],["/mingci/index.html","57df4ea8a1bcb7191540d5aa9f977e7f"],["/mobile-vpn/index.html","c7270dfc4762f9caa4376cb892374356"],["/msb-source/index.html","f4b08f95bdee9a1c2b3fa6e0ac1a85c5"],["/online-BUG！/index.html","4ef0269c196e6a7a6b9bdc8b4a312d94"],["/open-app/index.html","95843cc07e852c922cd6578ad0f6960f"],["/openclaw/index.html","a0fbdfa22246d1577fb262b244b1b6c6"],["/openinternet/index.html","c7c0a613bc66923e666c3e589a25cac6"],["/page/2/index.html","064a5c85a5ec77301d3b5c340c39726a"],["/page/3/index.html","dcb52cf70dc3d2886cd0a2fa7a3d8b86"],["/page/4/index.html","f1711ef4cbbb21db093c24dda995cbda"],["/page/5/index.html","077c40627e714c32a87527e27f45c112"],["/page/6/index.html","ee2d8827caf47a2343405dfcaecb08fc"],["/pandas-data-preprocessing/index.html","461b809004f0f8513e3a0a6cef13949c"],["/phone-win-open-Internet/index.html","a0ed944111d88dbb361bc5bd01267058"],["/popcorn/index.html","76d9f39295128cbe7b57bd345471a5fe"],["/protocols/index.html","47d581f0539cda32a4129e80642e7200"],["/python-Blog/index.html","d5b4d10ffa51f7dd1563aeb447ee8e15"],["/python-yeild/index.html","b1505e2baf09b00afb2a1f24ca1c9a31"],["/python爬虫教程/index.html","1235ea2625a81c629321495ec84146cd"],["/route/index.html","046b403771e8551b99bb4f3648e4c00a"],["/search-help/index.html","3647597bcaca243da3c6a8fa180b9f10"],["/software-copyright/index.html","5a9f11613706db2449ea5df4c5557233"],["/sw-register.js","f21bd072e9f54eb8241f4d41ea47f303"],["/tags/AI/index.html","bfb865150d3231ae83050621b94e4e70"],["/tags/API/index.html","24b0d3ee000cec9cad215a4f731bfcc6"],["/tags/C-图书/index.html","77eaa967ad1a23f159df751aceff3560"],["/tags/C/index.html","08cc6b32c6e2235a15a19dca7c363519"],["/tags/CNN/index.html","380d03772ff779925d4e618fd046f737"],["/tags/Chrome/index.html","1a67f7df5aca52729c4090ea163d95b6"],["/tags/C✙✙/index.html","dfe4dc3593eed87e4f356cf9812630d4"],["/tags/C语言/index.html","b8b50b8663c349e8974faf25293d1c80"],["/tags/C语言图书/index.html","51b3a40161fec33519124e96eeb0bb2b"],["/tags/DSN/index.html","d396b28dc0d40623daa2f38c40bb65cd"],["/tags/Dll/index.html","561c79805857e6eb8d3bd33f8f43e8bd"],["/tags/ECCV/index.html","6b1aebb8c8457a398461048b0bfb6039"],["/tags/EM算法/index.html","3ef0658c503b63b94c6ef5b74a86bd0b"],["/tags/Eolink/index.html","eb473375741d5f2838634f3d3066188f"],["/tags/Gitee/index.html","1307030069204c1a580ea44021fe13f7"],["/tags/Google/index.html","d2ea96511661ac38cc21e0612ed8bb44"],["/tags/Go语言/index.html","8a5b2ded5162db204e3cc255f7540982"],["/tags/Graph/index.html","51699a6b8cdad9808b32aca340bac730"],["/tags/HTTPS/index.html","dc7a62f996551cd713709292c6a8d74b"],["/tags/ITK/index.html","4bd5548fe37151ecbe0ba9a14893c7fa"],["/tags/ItkVtkGlue/index.html","25e2ee144d595a1a320c4e193fdc0069"],["/tags/JMM/index.html","c85269f138f4368e54e0d52a4923b493"],["/tags/JVM/index.html","dca0484de0fc47c42ded1cd3ac54d499"],["/tags/Java/index.html","26236ea4c75c37ed66305e2d0ea89824"],["/tags/Java图书/index.html","5f6b23b0883db82b0e75237b5f1ec9c5"],["/tags/Kaggle/index.html","712c388c0af9c581d2c59095075649b1"],["/tags/Keras/index.html","1b4d82b81e191470a186a7ca25c877f3"],["/tags/Linux/index.html","8774a30f9461e8147eb686e49dad3926"],["/tags/Linux图书/index.html","7ab6d0d58323a52f88ba41b26a62ec9d"],["/tags/MEPP/index.html","10a0a913722877b12d429be1fb4b1fbe"],["/tags/Map/index.html","3b824c3dfe285dd150f7fe44f771c24e"],["/tags/Matlab/index.html","6dc311d3d44d73c5300d3c6d99eb11fe"],["/tags/MongoDB/index.html","5660265c4522563eb3c8fb6f468dac2a"],["/tags/MySQL/index.html","6a1a2d89987d322ef2db5c3623001c05"],["/tags/OpenClaw/index.html","86f13562cc759316c751ff1534af4afe"],["/tags/Parzen窗/index.html","0a79ca2f9b008edb832e067a6ec36436"],["/tags/PicGo/index.html","bb3ef8985ac2f9ed85e5f919f8baed9b"],["/tags/Python/index.html","8d43384fbcfee4c00fb416e0bc401d2c"],["/tags/Python图书/index.html","f0ddc65b42ac7d77311415259cab3bf3"],["/tags/SPHARM-PDM/index.html","cabef5492a64e2704f497877a7edf288"],["/tags/SVM/index.html","ceb4d4644181bb653c606390748b90fc"],["/tags/Seata/index.html","18685230c9c254dd371bbb1e1a4be89d"],["/tags/Servlet/index.html","cbb8e88876796e31176c50a57e5d3c12"],["/tags/Sping/index.html","3e2dd6d0855fe0ae0edd350f137e6359"],["/tags/Struts/index.html","0e2f660171f36ffcc10e07ad89e674d0"],["/tags/TCP-IP/index.html","3d4d152ad129aec8e12169fbb845ebc0"],["/tags/Ubuntu/index.html","fd4a6e39239ac85cc15954109b01b058"],["/tags/Unet/index.html","046f447ad52693e47fff8059403558db"],["/tags/VPN/index.html","48960a524670d0d0c0e26942ca70c1e4"],["/tags/VS/index.html","168169d46f4d28553f7c6b39636f877a"],["/tags/VTK/index.html","86adbd80c469cb2ddc336026491c9ac2"],["/tags/Vertx/index.html","c6d763831dbff7afddd0d07e47cb6fbe"],["/tags/Windows/index.html","2949395d335d50e93d9f27fe696233d8"],["/tags/edit/index.html","d9b1d853b8cf62985efb1ce76af54ede"],["/tags/hibernate/index.html","c7fe714d9443fec697e476e30cbd1145"],["/tags/index.html","6072e2d04d6fc671b2cf5e06b4b4e2cd"],["/tags/itext/index.html","ea23c71030614683dd35e552a2d8c81a"],["/tags/jdk/index.html","a8075d08f60f93658a0014600cd28680"],["/tags/kmp/index.html","a3ca92ec203eb9d83b1e1883cdca2843"],["/tags/k最近邻估计/index.html","b92df99343e37cd32269149a3279e1b6"],["/tags/lombok/index.html","6d22dd7acbd6aa64080176292cfe3f3b"],["/tags/offer/index.html","3207d20a0bccf4c636d38534408f21a5"],["/tags/opencv/index.html","12e3d30b8fb90eb6f909616e2f05e307"],["/tags/pandas/index.html","7b5b24d6fad0e25ac64af726e40d2b07"],["/tags/string/index.html","8c1e50a81ea20a073456e79ea2358707"],["/tags/vim/index.html","7f097f2a5a946b85dbedc775dde4feb6"],["/tags/vtkPolyData/index.html","8142210eacf2c58b3caf5e80ac0ab818"],["/tags/web/index.html","69907148be15e77e7414d2f7c50ae5b7"],["/tags/xshell/index.html","5afda630988c2ae85bda62ecfc92ae5d"],["/tags/yeild/index.html","2ce3330011427bc9764037e3241c92eb"],["/tags/互联网/index.html","aa714e776df796d6a43d61c2f8ad848e"],["/tags/人工智能/index.html","0fd18d37a5351ca1dc5eb5a12fca2a1a"],["/tags/体绘制/index.html","f2f7d5e58cfb8ac22a97f01ed282bdaf"],["/tags/全卷积网络/index.html","bb702d521b3ffbd9bfb8bc86b9f413c5"],["/tags/公众号/index.html","c2b60943ebd63232352f9d77cb00948c"],["/tags/内存模型/index.html","aa315f5fa6e1d3c3a86d1cc03e214dd2"],["/tags/内推/index.html","fbdc3e7423bf603aaeece3c5157055ff"],["/tags/函数/index.html","7275f206225d60dcd5a6a60859299dfa"],["/tags/分布式/index.html","58ca864685fb7c7bd6499f4886a6d1b4"],["/tags/加密/index.html","0d959947cc8973167d484fa704ef870a"],["/tags/医疗图像/index.html","e72c7c2b0cdc71fa8b18fe75558c2dc1"],["/tags/博客/index.html","a6c6d19e5319a8c550697021c794d642"],["/tags/图像数据/index.html","4e2deda27b08383a5a198abe0f824a48"],["/tags/图谱分割/index.html","4af0f304960000f7d79776e2b787f645"],["/tags/垃圾回收/index.html","efef66710da8fe07817fe14b6b4a0820"],["/tags/多线程/index.html","111869009e0012b7c04c86749b63e1d9"],["/tags/字符串/index.html","b01cfad8b6bc5aae54248123f172b8bd"],["/tags/小龙虾/index.html","819cb43b631fa84f052a2c23346e25ad"],["/tags/工具/index.html","f8809f09b79188a071333593ca026dc7"],["/tags/弹性形变/index.html","d5fac08034b115ff00ef101b4c50cc7e"],["/tags/排序/index.html","739cd945dd6faee9074c7310c2b2ce8a"],["/tags/搜狗/index.html","6e3c7a6d0ad980cf09e8f0904649377a"],["/tags/操作系统/index.html","e0e126fea4981aee554ba2c66957d1ad"],["/tags/数据库/index.html","3e7bd70c0cb3eda9d564a100e3b90d45"],["/tags/数据类型/index.html","59e7e8bbc28b7bc777bb2a9543b03b66"],["/tags/数据结构/index.html","f80368766b06f226103c8245fa4bec04"],["/tags/最大似然/index.html","1fdb38a39cca03a8f29ac29ca763025d"],["/tags/机器学习/index.html","4239e73bb7c3ac10e01141d2e0df1d9b"],["/tags/树/index.html","3411aae9c6a0cc4d14df4a91cd56da61"],["/tags/框架/index.html","a3dc7dd311b3302397b0a70f8ba0b894"],["/tags/求职/index.html","dcde059c46b3098d9192763c696277e7"],["/tags/汇编语言/index.html","a8b3ea7f9181bdc547d84b6a762a2467"],["/tags/深度学习/index.html","ff8b9def472da42ea5d52051691c1d83"],["/tags/深度监督网络/index.html","1b350ebc70545ce0d54cd23d48d9d9c8"],["/tags/爬虫/index.html","a514431467d1fa3c4c3a4ebbafdafc56"],["/tags/电子书下载/index.html","27e58993bb7fc4fd720499d1fc1aae53"],["/tags/科学上网/index.html","3c95a5e80e5b12983de7e5cf596dc410"],["/tags/程序员/index.html","4327748a6f190a9eec4d23b7b9041e1b"],["/tags/程序员面试/index.html","05d68e9f5e6a81c985e9c7f12f7947bc"],["/tags/简历/index.html","0268fdd22a8422e225447ced99ed7c52"],["/tags/算法/index.html","8bb662ca9f2ca232a717f652b0f8e164"],["/tags/线程/index.html","231bb5f257e89dbaa991b34e1c617830"],["/tags/经验/index.html","ac0dd52b667b59482dbbd858384913a8"],["/tags/结构学习/index.html","63bc60bb2b197bceac51d7c4c8dd4798"],["/tags/编程/index.html","01b0eb6b85c37511c33f358245bb1f73"],["/tags/网站/index.html","061c8c6e7dae89aab04956860eebb5d6"],["/tags/网络/index.html","41272e708ec421cf3e81defcd7dae6a9"],["/tags/网络原理/index.html","c4cc5072780f4a1d2df6dadda7e6af9f"],["/tags/翻墙/index.html","31e3373c6f16043116368d25221dd576"],["/tags/肝脏分割/index.html","711a9dfc9fb88dc15d06b6638fd40fae"],["/tags/计算机/index.html","b10fdd820841455f7ea4048bf909593c"],["/tags/计算机专业/index.html","943b927ff683a8a9398727406b10c929"],["/tags/计算机网络/index.html","cc6907f99e74ec3716d9908fd706a585"],["/tags/设计模式/index.html","3908262797a887ff6b1f60010346e902"],["/tags/贝叶斯/index.html","4f8f9b7e8fa136d9bdce2029ae21b81f"],["/tags/迁移学习/index.html","c1f38f365c76cb46847e384289dcff69"],["/tags/面试/index.html","aab2431cd8470199aa9094a4e88a2ba6"],["/the-meaning-of-reading/index.html","6ca1465ff8a59426fb725207159e6fa0"],["/the-way-of-pragram/index.html","963dc8422a33fc2df0353d4864aad21c"],["/troubleshooting/index.html","373f23e3a7a2a1cdcebdb4845b293875"],["/untiypro XL安装/index.html","81dec5197c11b6c4e03ca9a4eb67d2b9"],["/video-websites/index.html","f303edc11bfe09af95192aa25b2c1332"],["/waibao/index.html","1b9b960fb1703c654105ca198393e5b6"],["/wechat-fans/index.html","54816d7588df29bff7825f69f7a0c901"],["/window-run-VTK/index.html","c84ed153eb156f642d98e4bf694a3782"],["/windows-science-internet/index.html","f793c4d6570987ef9edf1188a5d29afa"],["/xshell-connect-Linux/index.html","fd7ee43a345796c1dde65bf389b60e38"],["/yzhx-vpn/index.html","6ee460e60f0b9db3b5526f2b7f8589a3"],["/‌Accessing-the-Open-Internet/index.html","6a844e786e51c4f3436a01ea7d8bcc20"],["/《Java高并发编程详解》，去大厂必看！/index.html","3da6886ac0772115c63a3ef6a9a23197"],["/一分钟没了 1.5W 。。。/index.html","5777af968144255923f69e1074b2fff9"],["/一条高产爆款内容生产线/index.html","64fbf25b4f9a71357f9d6ddf8e2851d1"],["/为高考学子推荐的六个就业前景广阔的专业/index.html","843abb2ead853fca19cd1f236d8b7524"],["/互联网赚钱机器---社群/index.html","af8417370f4830f2934de0e825f2eb67"],["/你们常用的工作方法和思考方式是什么？/index.html","9194687bca71c57e2cdb576345f3c06c"],["/关于环境配置的一些事/index.html","9f9dd275c0a32b12ef647e4ef7d23e15"],["/准备了19w！搞事/index.html","34293d2d12876eecc7a85825f04e3d76"],["/几个很重要的感悟/index.html","4b3df3f7666bbfc68cf69ce760e386f0"],["/分割ROI篇/index.html","61b7473a6fa89a1bb529a2f112600a58"],["/分割精度说明/index.html","3b52b598988bb544bb2d538ec17c6dec"],["/分块程序执行/index.html","f910a78185704ec0e72303658a112419"],["/加班公司黑名单！！！/index.html","e360f0df0e4793da22a4610f4540bb4b"],["/卧槽，上知乎热搜了！/index.html","243bdf9b3bdf8380328418ee06422bcb"],["/卧槽，我的小破站爆了！/index.html","a56cf02570b3cf366fbe1e7bd2f8ac11"],["/卧槽，我被盗版了/index.html","da2d73cea2bb0c1b13079b3538fde143"],["/卧槽，还有985大学在大一上C语言课？？/index.html","a8bd62921253619044df1d90fb3de4cb"],["/历年微软面试中出现的leetcode算法题/index.html","01c4c352fbc28169fb622e08b59beaef"],["/去特斯拉试车了/index.html","a42708af26075e4796180a09d3bec191"],["/吃苦的三种境界/index.html","ddc6f9f1922eb408adb8b4e464da8cfc"],["/哪本书适合推荐给 Java 初学者？/index.html","52c81202904ac37afb7eea4b884615f9"],["/哪本入门级的学习数据库的书最值得推荐？/index.html","cd8a0c5f6199a887b9095779c31881f8"],["/国内外常用的AIGC模型/index.html","85a8705d007e21546a5ba30565ac7741"],["/国庆假期/index.html","b7e6224933c6a9027b6ac404414ee23b"],["/图谱程序字典/index.html","aaf28c249b1a5bbda17a537c2a4be8b7"],["/图谱训练与分割/index.html","8561e2b29f34817bea27ea02e99e78e4"],["/宣布一件大事/index.html","5d05a34ec235997a787663c4b4df0a41"],["/小鹏P7i试驾体验/index.html","6704656ad05856dbc2795bc3310ca866"],["/微信PC版3.3.0内测更新，电脑可以刷朋友圈了/index.html","84d895639dad589aa57c91f7a56b60de"],["/怎么更快的赚钱？/index.html","6886f1939708ceaa6ed727154f8aa180"],["/我毕业了/index.html","9dd8a35492b5f998666653d4c3afd43a"],["/我！真！的！找到了！爱上学习！的方法！/index.html","a049469890c36d56bf483493e83644f7"],["/户口的意义/index.html","1c028eac3cc04798d558a7bb1b75e7cc"],["/推荐两本经典算法书/index.html","30bbaa2ba0a62508f34389dbbc265ed8"],["/推荐几个在线学习SQL的网站！/index.html","eeb763c65214acf42703421bf9746f2b"],["/搞了一个程序员成长晋级社群！/index.html","6dd2ef1fc2217c18a028fe58029cf7d1"],["/摘抄/index.html","3a1422d1da980c44b15f195410f4955f"],["/暴跌30心态崩了/index.html","e047ef003e71e1cae05d0883fc5a31bd"],["/最近很火的ChatGPT到底该怎么玩？/index.html","966f74d7aa322136c4110dd1b5fd8e30"],["/有哪些好看的日历可以买？/index.html","2425b31eed288a9d0b90bf706284f2c3"],["/服务器有啥用/index.html","162650840e365235113d04e70aef07be"],["/来长沙了！/index.html","420f5bae14422f644e27a7531aef257f"],["/校招污点公司名单/index.html","c1b37fc90440eb9cc684603f052c5b28"],["/梭哈200多万/index.html","30edf2e91c4b148f43109d2f28f10df4"],["/梯形图入门/index.html","be90ad39bb6f0337839b421e8f2191dc"],["/橙心优选，凉凉了！/index.html","09ed5f9bd40de8e927e8c064925903ee"],["/比亚迪汉试驾体验/index.html","9848ee63f7768d9032d5bee9ba3fd014"],["/清华转学成电，真的牛逼！/index.html","70e3651247b8cfd38c03036d7927abc9"],["/滴滴程序员被亲戚鄙视：年薪八十万还不如二本教书的/index.html","d6863e24eaddb81a68b2b60f1efa7223"],["/社群！/index.html","95c2778c8fd5722c9269766587ecf3a1"],["/科学上网之VPN篇/index.html","ff4db1f9b993802a878b4022d5552a75"],["/程序员必备的几个技能！看完你也是大神/index.html","57194f1a4b9703d6681c0d469d7c65dd"],["/程序员绕不去的槛，Linux！！！/index.html","980e6eec54e0eae260e221502d353c94"],["/蔚来ET5试驾体验/index.html","f5a835b4e63c6a9f8e9b6a74acdc2515"],["/蔚来，牛逼！/index.html","a6939ee24e1e02adface335472deb41c"],["/被录取了/index.html","fb2b6e425cc7d2609faf677d5ba7f856"],["/被找事了！/index.html","3f006489177e8043cf80937a2b1b8c37"],["/被拉黑了。。。/index.html","29150a0af7ea6c2ddc93f0d3e13428ac"],["/被车撞了！/index.html","568cdad80f8e3da6afac8f76f0f2ef39"],["/该如何选购固态硬盘？/index.html","cce212b78a4ba7baee549257185bea01"],["/这本书一定要看！/index.html","03405e1cc45baf5923177a08586503da"],["/选Java还是C++？/index.html","5152904f7cf4d8aaf98928dc6f2e262d"],["/那些让你起飞的计算机基础知识/index.html","82cebae9dbe8aa2b1b5838fbfa693334"],["/靠这几本算法书，成功拿下大厂offer！/index.html","fbe8ab6e2e8b9b4cfe7dd07b42325eca"]];
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
