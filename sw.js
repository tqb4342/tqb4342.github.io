/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/0010-city/index.html","fe3e0ec698e06f54471d19954071220b"],["/10-algorithm-book/index.html","11cf913a17672569493cf65be60aae2f"],["/10-website/index.html","f157a0b92c677c34770eebf909f931bf"],["/100万的小目标/index.html","411e478eb1c7ce8cbdd4dc7c77c703b0"],["/10w+YYDS！/index.html","4855b78302786b1f689d9d6b65c74998"],["/12-technical-tutorial-sites/index.html","049a13ddf09e3bf6b58fac481870a218"],["/2 6 岁 了/index.html","4286df31b3815796a782f5216e1be108"],["/200万，啪，没了。。。。/index.html","5f7901e52b634718c459737d0e7926ae"],["/2018ECCV-Paper-DL/index.html","04fcb8514eac2a8c0e2a2d0a829d9469"],["/2021年固态硬盘选购最新攻略（小白避坑指南）/index.html","e92d075822f87122837de1b61c4707f1"],["/2021机械键盘推荐/index.html","6829d018d8d5839efdf67bbe69abb48d"],["/2025-07-15/index.html","3ec7ca815b013de2d94f2b512408142e"],["/27岁了/index.html","a1813a7b284159fa5ed44387d9042a44"],["/3D-Convolutional-Neural-Networks-for-Human-Action-Recognition/index.html","384a5c8450f41b446c8b3e7e9e30c0a8"],["/3D-Deeply-Supervised-Network-for-Automatic-Liver-Segmentation-from-CT-Volumes/index.html","49b6f6effa3cab01f040658d31689b76"],["/3D-Unet-Experiment-notes/index.html","17fd7b9282de8f103e5f0981c4f86dd2"],["/4-Software/index.html","3f5d1aa279203a3fa26bf78fd92475a0"],["/6-website/index.html","4f72c4e3830cf5c25b159e5346ba4484"],["/7-terminal-tools/index.html","597c1cec3afdfa230421c48dd033d435"],["/AIGC中典型的深度学习网络/index.html","da1cae74b3c650576fd0fea306593026"],["/Agency-model/index.html","1bcfb4e602d9e3d3b53456b120f0586e"],["/Algorithm-brush-notes/index.html","6aad0fedf20edd0b6a82b802716c4f6a"],["/Ali-recruits/index.html","358931e93c79b82fe7420fff734c07ae"],["/Android-open-internet/index.html","1d380e4a809101877cc0ee718ca08c27"],["/Appearance-mode/index.html","81aa0d7c8a2c16972aafea1f52071152"],["/Backtracking/index.html","35977bd3778a01c561beb8ba6c70bf3d"],["/Baidu-Sao-operation/index.html","124c48304e2b68ebcccf31ab0e942ca4"],["/Batch-Normalization/index.html","82f68b5696eeb132432d21a3db4dbb5a"],["/Best-AI-tools/index.html","907a89987cd12e699403269a8d4326a7"],["/Bias-and-Variance/index.html","d3a117f87fd7593a30323ef38d42477b"],["/Binary-tree-traversal/index.html","7b6c8fb57c134ece6c2b290042fdd4d3"],["/Branch-and-bound/index.html","4bee15b8b94003a492c4831fcdcd9e25"],["/Buying-computer-for-the-first-time/index.html","28aac17d0649f8816e20d5ed4b79c399"],["/B站向北邮道歉！/index.html","d89188a8a4a1fa7855cdbfc3e21d85c0"],["/C++-string-function/index.html","6c22d3eeb4ff238c82b6b4c688439960"],["/C-Java-DevelopTools/index.html","e7b0199734dc0c87721c04bd6ae39faf"],["/CS-Classic-Books/index.html","ad062c7b1e3ffb947313c6d46dd72897"],["/CS-network/index.html","12079d64c54542032a473c05d9f3d3ce"],["/CSBook001/index.html","156cb5863263f2f9b84b67da057c00a7"],["/CSBook002/index.html","d31141a7736ccb3d7c69a221aea2ef44"],["/CSBook003/index.html","d71b8c91c76600699a7b464a5ff0c544"],["/CSBook004/index.html","97b9af1e94acfdefb6cb6f347dd4a43b"],["/CSBook005/index.html","8f20a79d3d8c9030ec5b56d79515ebdc"],["/CSBook006/index.html","b4b7edfc7eaec455fbb4d8426bf39366"],["/CSBook007/index.html","f56552ecf01872c10b905c81a44ec6fd"],["/CSBook008/index.html","be89d5703df09dc62f6fee5719b40ab5"],["/CSBook009/index.html","2271716ae6aa0ef9559b98b934a4af4b"],["/CSBook010/index.html","04309b2974966162e16f1dfbae96eca4"],["/CSBook011/index.html","16399e94831d4849ef11a45915116883"],["/CSBook012/index.html","10c39508f643cf22231ce8410f4a0634"],["/Changsha-really-fragrant/index.html","6f55b7fda8c529145030ca4de4e7d5a8"],["/ChatGPT-VPN/index.html","7ac96ff63cb7f616d0a35ced0fa639d9"],["/ChatGPT/index.html","7cd7bd5fa8cc1abd20d4d180d52224ae"],["/ChatGPT！王炸级更新！！！/index.html","b2dbc3f809df1bcd485d51da84b467bc"],["/Chrome-crx/index.html","2b0ed7293bad177de55d8140aee71091"],["/ClashForWindows/index.html","179083b003204ed29a001f24f660fdd9"],["/Computer-Classic-Books/index.html","cf87d49ede318c9f7f726c547f7a9d30"],["/Computer-for-another-major/index.html","b0fba457547a5f550c2a1be599e01976"],["/Conditional-confrontation-network/index.html","85afaaf19846c3ffde6fd3c026972f48"],["/DNN/index.html","d74710e694b76b0b4cbf5e6cc12c75a8"],["/DSN-segmentation-liver-experiment-summary/index.html","b43bfca2dd75dba1b35ca620bb409597"],["/Data-enhancement-elastic-deformation/index.html","0517b37891981769e078d61b2ca61cf5"],["/Decorative-pattern/index.html","084e7e99c0138a0ee2d9c60cd6d3bed1"],["/Deep-Learning/index.html","881be397bf578d0ef9c9d3128a45f899"],["/Deep-learning-and-medical-image-analysis/index.html","0072d8cbfa3513a0db3e544374318aba"],["/Deeply-Supervised-Nets/index.html","49938d56a38110837c4b0fb28f9990a2"],["/Deformation-model-based-sparse-representation/index.html","b5997eacb69d0b8172b0d39443679452"],["/Discriminative-and-Generative-model/index.html","d61efd21163c6c3a09b2e08139b73e83"],["/Distributed-transaction/index.html","fb1d2d23b4eca4e54070af025a14aa58"],["/Divide-and-conquer-algorithm/index.html","ac776680e4960d1b4319b9c398deeab6"],["/Dll/index.html","62a7e581a2b7171b2ac2e519c5f78f27"],["/Dynamic-programming-algorithm/index.html","e05271aa371357a2998028a7e901f5cf"],["/E-book-download-commonly-used-by-programmers/index.html","ad7c5dfa9d48c10f75b1f8e24bc584d3"],["/EditPlus软件的安装、激活和配置过程分享/index.html","84bf4b873621c27383905492eb52fa64"],["/Eight-sorting-algorithms/index.html","85be039915aef95fa2b1d2441105edae"],["/Encryption-Algorithm/index.html","88545776919726c4465253735ec7989f"],["/Eolink/index.html","f0727c670d8a84865b61765a23b85352"],["/Factory-and-strategy-mode/index.html","666550ad55d467022437b18b10aaaa9c"],["/Foreign-technology-blog-community/index.html","dcb254a6ece4251d5d225ecc318580ba"],["/Functional-model/index.html","89b64fc8d7bca3605f459edbfecdda30"],["/Fund-type/index.html","a80edaaf43498a880fcbc2f2b8d201f6"],["/GPT-4o/index.html","644b5a36023420606d629e3a18d97851"],["/GPU-medical-image-processing/index.html","326a138d3ba9892157e7b0610756e4c4"],["/Gemini/index.html","8bd71145765344fc6753fcddee669d86"],["/Generative-Model-of-Unsupervised-Learning/index.html","33ec4b0d0194b0d044275a046ce43208"],["/Git-Learning/index.html","0b7393616cf3cc96312396ce638e2ce1"],["/GitHub-2FA/index.html","8ad75add89b3590d3a9ced9392dd4a25"],["/GitHub万赞，程序员必看操作系统总结！/index.html","24d9c25e593170d1a09e4c03f26e5a70"],["/Golang-book-recommend/index.html","c26ab6786dd48e93373b63543555173f"],["/Golang-learning/index.html","f53d886ca6715766bc73fb5fe1838c47"],["/Gradient-descent-optimization/index.html","7d11af3d3e8f871e78116d929be016af"],["/Greedy-Algorithm/index.html","60665cedb8f817cc10dfbedf2ecbc675"],["/HK-bank/index.html","6881dbc82b1325e3cdbd1f571c5d339f"],["/Head-to-head/index.html","6b2e27721fe269e1102cafb1db3430cd"],["/HexoPage/index.html","425a89cf9211b7c066609afdae4175ce"],["/HistCite-Pro/index.html","039b45c5e7a2f00ee224728d8bf80922"],["/How-does-the-program-run/index.html","ccfb943d10bbcac386fc9c201ed77ff2"],["/How-to-judge-whether-technologyisreliable/index.html","2019b60136d4c5644f8bb4d00d6267ac"],["/How-to-learn-design-patterns/index.html","8079100f13ae3e08881491e8b3310e83"],["/How-to-learn-design-patterns？/index.html","4ef6d6668af34e3c780a5e2a4bf5de70"],["/How-to-teach-yourself-programming/index.html","fbb0ed6a92db02efac4c3c84879bf0f1"],["/How2learn-Python？/index.html","01a64354baf78b56142cb74101d29fbb"],["/IDEA-shortcut-key/index.html","d974a9c8e6d96662119c025ddf078b67"],["/IT-interview-basic/index.html","42403db2f39d8ef3214fbab4a9c4b724"],["/ITK-VS-install/index.html","16f9b771f662d1825fffa3e5ecca1eb0"],["/ITK-VTK-ItkVtkGlue/index.html","59a58bfcf95c6bf39dd1cc123cbda24c"],["/Image-processing-plus-noise/index.html","addd9f9ecf7781d727e62443921b9caf"],["/Inception-Going-Deeper-with-Convolution/index.html","32f1a5fc53195d8d6e9909f4e389dda1"],["/Java-GC/index.html","8f473cf9fcff506832d47abeefb9517a"],["/Java-Servlet/index.html","00b63671157f9a52371efeb92351593e"],["/Java-array-and-collection-sorting/index.html","528246b16377ce74da2188b2d27aa9bd"],["/Java-development-tools/index.html","d3049a38d79ebe0e5295752d30ef6d7d"],["/Java-eight-data-types/index.html","ec92d3ebaf4fa299913e7251975b6200"],["/Java-interview01/index.html","2fa43f1cb6b4094cf0cad08a5353d26e"],["/Java-interview02/index.html","e0341e5a3a3af392e2923b64f07521f0"],["/Java-interview03/index.html","65a7a536ea65f621d35d2551cc5d14bb"],["/Java-learing-map/index.html","fe592edf73a2bfbdaf00a83bbd6661a9"],["/Java-learning-route-map/index.html","e07c8158638eb7f51edbd3e16e3cbd50"],["/Java-memory-area/index.html","757a5285df4c5d51d1bda8ea16bb27e6"],["/Java-memory-model/index.html","09abb94207beaa88f91bbecc4dbcc71c"],["/Java-multithreaded-learning/index.html","8548e7f21b0fa7ebd954d53706f18db5"],["/Java-project/index.html","51e2af8ddba245e5eba162f0ea414bf2"],["/JavaWeb-Chinese-Garbled/index.html","c505b954b76a8c6e044b483760155b0b"],["/Java还是C++？/index.html","d632255146cc79bc9dd116f648d1cdcb"],["/Kaggle5-step-guide/index.html","bff21408d88dd70b272e7094119b75c8"],["/Knowledge-points-of-Java-garbage-collection/index.html","bec88e87b28f496654021b2b969580f7"],["/Layoffs-and-Hiring/index.html","24d1755147abf2596d8b305c00a37aff"],["/Linear-regression-of-machine-learning/index.html","c1889977c8d548bc391d66ebf41f1cea"],["/Linux-Compile-C/index.html","abcc8384dd22f1e3db33201dfd4673ea"],["/Linux-ITK/index.html","040da006c0d9c83b89b461d90a9ded75"],["/Liver-segmentation-of-sparse-components/index.html","8a8b90a1ae27c46d47645df43a5dff03"],["/ML-EBook-paper/index.html","1e22572bf2e89d16397dedc1cfe74b59"],["/Map-uses-multiple-maps/index.html","57a3f882b0da815e4d07389c5ecb8596"],["/Matlab-Graph-cut/index.html","717d02caf957d6e7102c4741ac69e36a"],["/Maximum-Likelihood-to-EM-algorithm/index.html","b068866e68260f5e3ad495ca54ca3bd7"],["/Mean filter and median filter denoising/index.html","6925b96fe36ccf27a904536ce4390044"],["/Medical-Data-for-Machine-Learning/index.html","daeafc9eab07a3912c5f7ec2ef48dc5b"],["/Medical-image-analysis-deep-learning/index.html","333f2b6546d1ccaf777b5859bf1a0308"],["/Medical-scan-image-processing/index.html","43c35dbf314f4976b7782202618a1b09"],["/Merge-sort-algorithm/index.html","f12242e97145a0e7a2fa8f0850227f6f"],["/Monthly-income-2W/index.html","094d38d8fe6f6f4171fea022d9b9716d"],["/Mysql-database/index.html","60f5dcfda4f41cec419d831c6b3b01b3"],["/Neighbor-Embedding/index.html","4d43bde29f68c13b9ffe6bfef3410c6d"],["/Neighborhood-approximate-random-forest/index.html","21db911c2ff40bed786be12545cd64ae"],["/Net-and-official-documents/index.html","7dedc1ab3d3eb4009bbe22a979532422"],["/Netflix-VPN/index.html","63317c44cdfea269fc282b2920be09bd"],["/Network-principle/index.html","b143872b5cd8b821fe53f3c4d5f5bb8c"],["/New-Hong-Kong-stocks/index.html","dc67b0771ac1dc97e2870640c84cc2a0"],["/Nice-to-meet-you/index.html","6e07517ae91639ad6247f4f762e2ddd2"],["/OS-processes-threads/index.html","8cbf7d71ad7eadb20de94ee1ce4686da"],["/OS-run-environment/index.html","7b1149b2373d4ab85325cf93fe776618"],["/Open-Internet/index.html","f97d5249369b43c4a086cd504ed13db9"],["/Open-Internet2/index.html","14b6c24016f9fbeca3fc95137e87363a"],["/Open-source-community-and-rewriting-website/index.html","48b784e95e51842016a5870a36563cc6"],["/Panoramic-image-stitching-based-on-SIFT-features/index.html","09754903be83543d884cc5d3f0e7e03f"],["/Parzen-and-KNE/index.html","ace45f05616421c02a41f80259fdbbc5"],["/Personal-technology-blog-site/index.html","bf000f5ea4b7ed0280e70e4bd72dc7ee"],["/PicGo-Gitee/index.html","b19add55c253811e2f1f7de6a87dbd69"],["/Programmer-treasure-chest/index.html","e1b82bb7460836611076d1860cfe729c"],["/Prototype-mode/index.html","60eb31c5674394abf5a51a8ab7434dd5"],["/Python-base/index.html","315a33c7723c352e56f41d944b4dc3c1"],["/Python-crawler/index.html","51081e943589b5803e7d1e73113bf971"],["/Resume-revision-suggestions/index.html","aad9f2dee6e993f94a9b97c5fc1fe018"],["/SEO01/index.html","a2f75086fab4c89e52158fd81cc9442b"],["/SEO02/index.html","8cfbe3333cf392903f76471f111be1d4"],["/SPHARMPDM-MEPP/index.html","bd2312e160a9cdef6b028d783975d0f8"],["/SVM/index.html","83da579f8d4181de4279dc9dda9a21fe"],["/Semi-supervised-learning/index.html","a8e621b0a8a051177dd095181045b9f8"],["/Sequential-model/index.html","b16d9e11307f8c3db048a5a1da77e399"],["/Shape-Based-Human-Detection-and-Segmentation-via-Hierarchical-Part-TemplateMatching/index.html","3f41127451501c16c755ac393ae35115"],["/Spring-basics/index.html","f4689020edab9045b1b1065b02a3af29"],["/Spring-integrates-hibernate-Struts/index.html","75c7af3faa957274ae4aea86b1b2322b"],["/Structure-learning/index.html","a8ac3b5805901fcd30073b5d75e8680b"],["/Suggestions-for-self-study-of-computers/index.html","02903668d234a742ef8f35b61cc88ec8"],["/Summaryof-HongKongStock-Account-Opening-Links/index.html","29906879676574f40ccd8f6f7faae1b7"],["/TCPIP-detailed/index.html","3a91b2508631c68730630003f97be887"],["/Telegram-VPN/index.html","658cdfb021a251a8d45a9ecc123c54a4"],["/The-essence-of-shopping-festival/index.html","bb4c1ce1a88dd28a715dda0d8bfccea1"],["/The-most-important-investment-in-life/index.html","dc8db61d3a10a1ae6c4c8ad9a8352b52"],["/The-most-successful-nvestment/index.html","3ab01b229cfaf993d5302306c2e3400a"],["/Transfer-Learning/index.html","c46d243fc43d3cbadccbffe118a3bf3e"],["/Transfer-to-computer-major/index.html","320b1f6b2aa7569883e05adb6b6d268d"],["/UNet-Convolutional-Networks-for-Biomedical-Image-Segmentation/index.html","55c486a7834e6d69d8985f2376fa92fd"],["/Ubuntu-install-sougou/index.html","3c0adc45dc3526842ebc7aa935c309bc"],["/Understanding-of-paying-for-knowledge/index.html","a5b527278e39f98f796108ea5f3ebfb0"],["/Unsupervised-Learning-Linear-Dimension-Reduction/index.html","d7e71dddf8658aa6c3900f94cf1c711c"],["/VPN2025/index.html","86bfeb67de97002694cfb394a97024db"],["/VTK01/index.html","b8e508e77a03f5d3531527654cdb3493"],["/VTK02/index.html","3435923c73c456516a8b91e3379e34b4"],["/VTK03/index.html","753227547ee6cfef61d1a91af12dc5f3"],["/VTKRead-write/index.html","673c8662e0eb53149a17e454c8e48eb6"],["/We-are-all-good-kids/index.html","df3481b5cafe1c308b7419bb6ecd3e42"],["/WeChat-80/index.html","37bfa200f66f63e7bd839859ec281f13"],["/WeChat-red-envelope-cover/index.html","75ba500c8bed03efa11f96e81e919cc8"],["/What-is-crawler/index.html","98de0d19e06dd15ecf0317af8ff8ed13"],["/Win-OpenInternet/index.html","e344d8bd51a95af13ed9b4be5a5d2538"],["/Windows11-2kfans/index.html","affe5610f9ce0b9dc577b41df5d112a2"],["/Word-Embedding/index.html","d5f3c8af82016666dcad319b1abbef9a"],["/YuanShikai-and-his-Beiyang/index.html","da4db81e7ac247f8db8a7bc9218b8734"],["/Zero-copy/index.html","4ae53d434c814ad286a5d32999e260e6"],["/about-keras-model/index.html","12886a4b686f21fec4ab6b0760e8038a"],["/algorithm/index.html","a7797bcc0c184989ec7d4369a3827c60"],["/alibaba-Java/index.html","a75154135a494e5f92dc5500f69c9ac5"],["/archives/2020/01/index.html","62fe954a91d74646c95e4f7cf097fd1f"],["/archives/2020/09/index.html","049797412554469389c56696cfd458c1"],["/archives/2020/10/index.html","48c707e6ff441ca3d3b424b33d5a37c5"],["/archives/2020/11/index.html","9cbf62b36b78a929ccdb86e7c9dc6b7b"],["/archives/2020/11/page/2/index.html","e2438b03a96d60bfb9ad00a5f17b5fed"],["/archives/2020/11/page/3/index.html","f44d511034c8d2b085af51018fff6cdb"],["/archives/2020/11/page/4/index.html","6405d0d725e7a2d8afeb66531c429686"],["/archives/2020/11/page/5/index.html","926c36b532cdf687c5ff479b1abbd8ac"],["/archives/2020/11/page/6/index.html","7509b3690abadf2e19907c40e2026a93"],["/archives/2020/12/index.html","24764ab9c0587db8d9c751ee3f0e6ff6"],["/archives/2020/12/page/2/index.html","d11a84d1bb9c5c0ca6e90eb954a0487e"],["/archives/2020/12/page/3/index.html","496adeef1e8c09dd46013b330ec3d4b4"],["/archives/2020/12/page/4/index.html","3511fb96d41b3d46084ee7b1af2293aa"],["/archives/2020/12/page/5/index.html","016789c6126ded69c51b80cc6c8b83cd"],["/archives/2020/12/page/6/index.html","d325ce7aae6470aad2a4a9f415045037"],["/archives/2020/12/page/7/index.html","0ccad140b74235050cb4a6def247f60d"],["/archives/2020/12/page/8/index.html","b15e5cbaea6b312609bd1269949548de"],["/archives/2020/index.html","5e98454dd9e9ef1afcb6fb9b70a74766"],["/archives/2020/page/10/index.html","c15e457eb48270cd06f51c987f9d5cf3"],["/archives/2020/page/11/index.html","9dfc79846448f4dac62782ac1fc5eeca"],["/archives/2020/page/12/index.html","e9b6d1f3bda879a85a7594c355c8fe5e"],["/archives/2020/page/13/index.html","822b94b1ca189dbf07cbf15c37d79a59"],["/archives/2020/page/14/index.html","488ce0839fa12dd424d60bafd2a1116c"],["/archives/2020/page/2/index.html","f15147326a08eb7921ef962fae8c50c5"],["/archives/2020/page/3/index.html","ab56af1ba284d7820d758ce4360253b8"],["/archives/2020/page/4/index.html","dacd0294ef786e29160c1545f74567f8"],["/archives/2020/page/5/index.html","8572f514a91644ffd7c050f490515343"],["/archives/2020/page/6/index.html","84125af9bbead6398c9cb5a56898c123"],["/archives/2020/page/7/index.html","a9a63f8172f8964dc028f305f9e3003a"],["/archives/2020/page/8/index.html","90786aeb2f065e16e6eacaa94997b462"],["/archives/2020/page/9/index.html","834bdb38e8c81291ddfa18b0bebdcc96"],["/archives/2021/01/index.html","cb9a616dd541c8a1505fb87f570f31b8"],["/archives/2021/01/page/2/index.html","8445b02bd3fad0e30c3248df77806e96"],["/archives/2021/01/page/3/index.html","b9d6ca7e4be68821a6fe244a7c061ee4"],["/archives/2021/02/index.html","5f03739c7602cb4770151d15a8303511"],["/archives/2021/03/index.html","daa1cb98f9961cc4f0f061c83f06036a"],["/archives/2021/03/page/2/index.html","cded4e3317569466a6cfdebf722e393a"],["/archives/2021/04/index.html","9b33d7ff8ff9a6fde74c7f52e88eacd6"],["/archives/2021/05/index.html","53837e09217a819103dc9670e40929c5"],["/archives/2021/06/index.html","22734a4485292ca2dda1270ff62c598f"],["/archives/2021/07/index.html","33111b4f43640a0fd097bad1f3ed07c5"],["/archives/2021/08/index.html","3b112749b1bba0879325a1cd9bb8b1a0"],["/archives/2021/09/index.html","5cff2266b77fe28bc14131cca84593ea"],["/archives/2021/10/index.html","f76a03bd85ec748e385443777cff3c87"],["/archives/2021/11/index.html","67213c68bf6ff0029873b2fc723ba358"],["/archives/2021/12/index.html","72bdad475bf39586408755a4c66afcea"],["/archives/2021/index.html","3f29de34a3b7e6db2056e3e10f313c95"],["/archives/2021/page/10/index.html","f415722b8ec1cd26ac626549db5abbce"],["/archives/2021/page/11/index.html","19db52e393bdae23e4af13a8ad665ae1"],["/archives/2021/page/2/index.html","e559a9875b5403aae0edad1edf3d786d"],["/archives/2021/page/3/index.html","fb746e3e9f7f978377e8e4822ee6dc48"],["/archives/2021/page/4/index.html","729028d93f71aae43ba054dee1d86d94"],["/archives/2021/page/5/index.html","90018fddaa4b75c9e768944a05044706"],["/archives/2021/page/6/index.html","17e980c55e89146b09ff446486bb96bf"],["/archives/2021/page/7/index.html","4d89ab33acb1a2309e672fa06f456344"],["/archives/2021/page/8/index.html","a87e1a25a4a48c59089e96c3ef41830e"],["/archives/2021/page/9/index.html","185a36ac63125e476b105ea7f7a9f118"],["/archives/2022/01/index.html","b28bfb1ef7dd01d93d70e46ec4199db8"],["/archives/2022/02/index.html","a4b132638710fe245ba6e7acd6421dff"],["/archives/2022/04/index.html","78cfe94c460600a4d8be1dc33d6aaca0"],["/archives/2022/05/index.html","adfbbbba71736a2c12ee2dc12ae4b64a"],["/archives/2022/12/index.html","372600fda39f0daed14e74feeef64866"],["/archives/2022/index.html","7ee4ed01ef4f2008b206d632273cd9cf"],["/archives/2023/01/index.html","d83b9a34f784b8b675c7ccf07aa467c6"],["/archives/2023/02/index.html","8d23773b634996193dc8a2408c159356"],["/archives/2023/03/index.html","7dbbe04e2f88f736fc24ae6f399ef020"],["/archives/2023/04/index.html","2d272b3967ec7227de719b02615a4ac5"],["/archives/2023/06/index.html","5ca0640efd8611fa944f629559734faa"],["/archives/2023/08/index.html","fcaa142e58b4007ac870177f28867d78"],["/archives/2023/10/index.html","179befd5332ea68694ebf625625b29b7"],["/archives/2023/index.html","5b718f9dd8ecfa7342838f389b7e1233"],["/archives/2023/page/2/index.html","ac4ce41190cced73b9e31980228edcc7"],["/archives/2023/page/3/index.html","072969e3b17a2b13e0e6b2a0f64aef7d"],["/archives/2024/01/index.html","91f6cd53713a0f60c5dbf200c4cc5c1a"],["/archives/2024/02/index.html","8e79bf9fd164839ae23f085121fb082a"],["/archives/2024/index.html","df9a9a303315e85b0c4c6f6a83fe9b70"],["/archives/2025/06/index.html","1cf06cb26fe725fd95d8839d2dd59504"],["/archives/2025/07/index.html","2601055f1491d7b54d0e544730ce84b9"],["/archives/2025/08/index.html","c5fbb870d4bca1180144f87522b72a10"],["/archives/2025/09/index.html","df6e6366f8d5868c77c71fb395bcaafb"],["/archives/2025/10/index.html","5082abf960787a1f0d2e5251b16f2443"],["/archives/2025/11/index.html","74dfec286543b7b725cd629b27adf9c3"],["/archives/2025/index.html","27a5d2791c7ea472b7e98f42b0291e38"],["/archives/2025/page/2/index.html","87e07322f9bfbbfb253e71104a439f56"],["/archives/2025/page/3/index.html","b52312a44cbd141b9460dd36db329472"],["/archives/2025/page/4/index.html","b35aa819a91adb86dc1a84650034ed6e"],["/archives/2028/02/index.html","8078cad5cfa684145928c3c8612a7312"],["/archives/2028/index.html","f7fc4f6bcc8c52a2407c81ca176eb9d9"],["/archives/index.html","1e00eac63fb2b21479a7f3d93bd298da"],["/archives/page/10/index.html","9e49cb128bb86868547bf00d3c68fc18"],["/archives/page/11/index.html","24a92077ee6496b781889ac662cf70ad"],["/archives/page/12/index.html","2b169013c42f05ff15c51d8a3e997c2e"],["/archives/page/13/index.html","ec0676642b745faa842496e2473b7152"],["/archives/page/14/index.html","4257e286e7d1a1f413457bae98079fec"],["/archives/page/15/index.html","c5d66f0dfcd75af70ee7d21693b48397"],["/archives/page/16/index.html","b412cb4bd89203038c4a45226b83a831"],["/archives/page/17/index.html","54ddac3c33da7d2da5323d9161987e5c"],["/archives/page/18/index.html","b75b14f16b14b58f39d57c7399d7bd99"],["/archives/page/19/index.html","e54fffeeb36c468f1a6af8e9ba8f6252"],["/archives/page/2/index.html","1e1f1d6c0bda9855cbf418f3b44dfc52"],["/archives/page/20/index.html","df5651601cbf597a95d41ac2e2e2cfee"],["/archives/page/21/index.html","6256acec9cecf581e004aa3037d42f15"],["/archives/page/22/index.html","27b98018730ffabed374f7295b4f1ba3"],["/archives/page/23/index.html","d19ebd9004d038aa05a153ce10eee267"],["/archives/page/24/index.html","ffea970c0c85685ea2287cf49e218a33"],["/archives/page/25/index.html","25d5bb45049f13f8daec20a9cc15d93c"],["/archives/page/26/index.html","29b0e3e1ff7dff8c6e342e62310bb31f"],["/archives/page/27/index.html","932ab446eb5ffe3c121cbbbd9feb17b1"],["/archives/page/28/index.html","5b3c0b6561cf9da4033a808708bf8e42"],["/archives/page/29/index.html","ff14361bb3ecf9e93d07f74e0b52f76e"],["/archives/page/3/index.html","a0446a7184e0e707641d493ac0a960ca"],["/archives/page/30/index.html","e5d094cfbb7c910ebbdbf85b8cc67532"],["/archives/page/31/index.html","a1c39c775648c855bbc4f0a4f8da2ca6"],["/archives/page/32/index.html","8f2a23bb3327d58ea9fa965d3bbea9c0"],["/archives/page/4/index.html","d1cf271910a6f471edc933d3ca795ec9"],["/archives/page/5/index.html","66ca65e9e5f4434d0c6ad6f5ff8fbaf0"],["/archives/page/6/index.html","ff0ebd31a30c1425d82e1678db4f1ab8"],["/archives/page/7/index.html","aa16367a1399c8325c5a56e389d25701"],["/archives/page/8/index.html","49df9f8eff99494841de309d17e13955"],["/archives/page/9/index.html","bd8db5f70c9e04f274698d4fb14c9bb1"],["/baidu-search/index.html","f3e9c5e141efe29d7e9b08a51484d2a9"],["/baidu_verify_code-Hh2fKNlEB1.html","606fd9163be9ba833d8ce454b543d7f7"],["/be-a-programmer-instead-of-a-code-farmer/index.html","a4a703320c17c2215ac5c2d9d3f35ea8"],["/bought-a-house/index.html","96f749cf4870420b54bf3f4118f93735"],["/categories/C与C✙✙/index.html","1dbd635bc5f8f0a7b84031ec6f2bf6a0"],["/categories/Go语言/index.html","09ed106cf81291208448096c256710bb"],["/categories/ITK与VTK/index.html","e27f5cc3388608fe45225ac8aa71a131"],["/categories/Java/index.html","041161ab3e017fdf285618be2638b3b9"],["/categories/Java/page/2/index.html","e1b09760a60d7deaeb2c494866bdc2be"],["/categories/Java/page/3/index.html","69b789d67364825e1cf129616800ffd2"],["/categories/Linux/index.html","6f6e115946a5ca80ac869c160f47c4c0"],["/categories/PLC/index.html","73248a4262259ef341c8d242028cdfe2"],["/categories/Python/index.html","03eda4bb67eeac0da04e97791f167787"],["/categories/SEO教程/index.html","1da9beba52016a2f45ef780626733d8e"],["/categories/index.html","54564918b68ceb8a85a3ea9c0c08e75d"],["/categories/图像处理与机器学习/index.html","433ca1c7ca26b22c25a219024e1f90ab"],["/categories/图像处理与机器学习/page/2/index.html","397f86f0f80e5a3cd166d0498921b2b1"],["/categories/图像处理与机器学习/page/3/index.html","6e76b091bdebe019a26f862b1f52588d"],["/categories/图像处理与机器学习/page/4/index.html","a2a22e60736c09c71038dbd202a837e4"],["/categories/图像处理与机器学习/page/5/index.html","cdcefbae8643358487409904f28b7cb3"],["/categories/图像处理与机器学习/page/6/index.html","82a55cd1fb16a23430bcb0e9f91b750e"],["/categories/工具/index.html","d6a4e6bd81de352a41d239a9f1354a59"],["/categories/工具/page/2/index.html","fa9762c6faf81cab18b947015c68a549"],["/categories/技术以外/index.html","f1124ac8a813bc0c47a9c94ace556226"],["/categories/技术以外/page/2/index.html","bc40060308133e988f75b85dac798515"],["/categories/技术以外/page/3/index.html","cb8fa265c8d20b85c4879b272a9defd6"],["/categories/技术以外/page/4/index.html","2d8c59cd7bdd9d62677673e1f41745b5"],["/categories/技术以外/page/5/index.html","9b1ee08821649c2a22415df8e358cd62"],["/categories/技术以外/page/6/index.html","17bc18c74f7249e72089c3e633623608"],["/categories/技术以外/page/7/index.html","dc123b8033b64de32f49fb33a4878621"],["/categories/技术以外/page/8/index.html","a2152b8fe802ae8e1b59fff42318662b"],["/categories/技术以外/page/9/index.html","264cd7e100c4ec9bf03c0d818e88134e"],["/categories/数据结构与算法/index.html","6f7fe9c1139ed4aa42bd43ff57d5d5b0"],["/categories/数据结构与算法/page/2/index.html","91940b5b90654379b9612748a7928adc"],["/categories/科学上网/index.html","0d2ae3ebdd84bf89e680da7dafba73b3"],["/categories/科学上网/page/2/index.html","eeefef91d53bd8a9efea6fa4f9186dfe"],["/categories/科学上网/page/3/index.html","f8b42b292bd55c3ad2c0ce9eebf5b3ca"],["/categories/编程经验/index.html","489c0ad339df1495f9a2d78be88cdebc"],["/categories/编程资料/index.html","e91084cd77eed94616dcddd25a1432ca"],["/categories/编程资料/page/2/index.html","cacd8334dc5940e832864c85c21b95ce"],["/categories/编程资料/page/3/index.html","5f191498a2c6d66438312a7f13f3c7a2"],["/categories/编程资料/page/4/index.html","defec38220eff40e7f500ea4dfb94872"],["/categories/计算机基础知识/index.html","c13374fcc0875caf8d034284cb9df6e0"],["/categories/计算机基础知识/page/2/index.html","71c53bcd393e1eae0cee91d424d9ae9d"],["/categories/设计模式/index.html","5269f78d2efb1e269ec05d51ee84d916"],["/choose/index.html","6f7e98480856b13cebce74cc42598294"],["/choose2/index.html","ce3c0a99798f23efd513852427b3f692"],["/chrome-crx-intruduce/index.html","0bfa79cf42c9d8f95e6eb65424c57af0"],["/clashvpn/index.html","58405824fb4bc0e89f3c75d2dc921bb4"],["/coder-blog-website/index.html","467625eb63a23bdf23c4ed395c1a3742"],["/coder-source/index.html","9dc2e1c7143bd3f7b96c6351f2d269d9"],["/coder-videos-website/index.html","34fa4dac65f37ca43d9f8054c3a45140"],["/computer-book/index.html","3ec3c94f1176b807efb9ec24ac245a6d"],["/computer-censorship/index.html","bc037683b6e57dd9f325f46a6b79d94f"],["/computer-network01/index.html","716e855d10253331d45ed3e336b26765"],["/computer-network02/index.html","7621187417d82f31e00fc09ed3294685"],["/css/main.css","bc32ad34ec4990d934c3c647bdb62f79"],["/database-Mysql/index.html","c8d21610b5f53c7a10d84d6fa463c792"],["/eclipse-lombok/index.html","3c7ef3632deb096ef4798f7588359ce3"],["/fully-convolutional-networks-for-semantic-segmentation/index.html","9b7b384c10aa8e315cffb9a1d5e72ca1"],["/great-firewall/index.html","e4f6fe9bbbcd39e6bd9ee26ec62a4927"],["/halfrost/index.html","67d87ee348e3a565b9e8dd617c8cf517"],["/how-to-signup-chatgpt/index.html","5c3b6ee457c618fc6a6e30a8d91024a8"],["/how-to-use-Gemini/index.html","d0c4fc0d4b86274eee43827eff0c5ad1"],["/index.html","74a3b4b7f7ccb86fe88f8f6e90adceaf"],["/ios-open-internet/index.html","de24fe13b847ff60970dca74266fe595"],["/iphone-open-internet/index.html","a2986386845b632ef122fa1d3b397e53"],["/itext-makes-pdf-form/index.html","a2823368ebf98625ef28df8d4224cfc3"],["/java-Set-Map/index.html","99cb8239ee9cfc37c5e146b716aaa444"],["/javaweb-server-error-codes/index.html","df8dcb3cb1ad8537555ca12fdd2b4f99"],["/javaweb-source-code/index.html","8178e487254b93d22684e64a59144e33"],["/js/lib/busuanzi.min.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/js/lib/lozad.min.js","47904d34a224931dd1b615c59a3dbe3b"],["/js/lib/prism/prism-coy.min.css","0ccad54d95845901ead59bfd3ecceb14"],["/js/lib/prism/prism-dark.min.css","a4711d2957d6605eb5682bdd228cf123"],["/js/lib/prism/prism-funky.min.css","efedcdccd7a9ab342d2d9cacd24920af"],["/js/lib/prism/prism-line-numbers.min.css","38e22e790c279bb56f9ec4b90a2a2d58"],["/js/lib/prism/prism-okaidia.min.css","5ac6f9de996fbec68aaa106dfb16e061"],["/js/lib/prism/prism-solarizedlight.min.css","ecc7e64d039873ffcf7fb27babdaeb5a"],["/js/lib/prism/prism-tomorrow.min.css","456af2a14ae4f5089939d5904ac40fe8"],["/js/lib/prism/prism-twilight.min.css","ebb5c355332a8cf9a1ce37a2a69d678f"],["/js/lib/prism/prism.min.css","a5234d614834658887cec6a9515890f8"],["/js/main.js","052d2b299d9c750afea8df0b802ab7c1"],["/keras+TensorBoard/index.html","8bc5b49a46effa78a053a7de8d136951"],["/keras-beginner-guide/index.html","29fd307650d0949911c19ca59edca13f"],["/kmp-algorithms/index.html","df259be9fdc222e184f78865030d2a53"],["/leetcode-Java/index.html","7325fca9c36586db086114a8f375971c"],["/links/index.html","9648cfc5230c5554ca83ef1e91d0066d"],["/linux-java-opencv/index.html","8c519822734666000fa9e3fb6fd8af42"],["/msb-source/index.html","3cbed561b00752602d74a0ad8bcc791c"],["/online-BUG！/index.html","20173d672ae07a841feec99f740a0678"],["/open-app/index.html","9027dff7f14578164ffb0e9be86bc227"],["/page/10/index.html","97436be28e7db2a219a2aba7eefdb136"],["/page/11/index.html","9fc88df7e44d0acd4807e880571a8ab4"],["/page/12/index.html","dfa0ef51e4c48734ec3dd1f169694eae"],["/page/13/index.html","66cf802968d434a844da9dfd8fa97f09"],["/page/14/index.html","2cfad55b4295dd59002b2afb265d1271"],["/page/15/index.html","c38f673b8c360d60fcde5345209188d5"],["/page/16/index.html","b61d72c20fa7e30ace8d2158bf040607"],["/page/17/index.html","f99f2cfc3065cdc562885e8ae98974f6"],["/page/18/index.html","53d0e3ce52df3316a7346a44b0ee6b68"],["/page/19/index.html","1011c4e4663581d5acc38aa6b866f4d6"],["/page/2/index.html","55d87d38cc30f08cf166d31393a00a3e"],["/page/20/index.html","13b63dd9f8f196308d4982b5c9196fae"],["/page/21/index.html","2599fbb7ba7bf7f995dfbe3381d6a214"],["/page/22/index.html","d565e1715305157aa10df8c3a680f325"],["/page/23/index.html","0b52b42ce3afc4b9995db1596a9250aa"],["/page/24/index.html","f90b50f7de1a0a8e759d8d87f7fa9835"],["/page/25/index.html","9bec37869bd59b84a84c192de6d58eb9"],["/page/26/index.html","344ba6efceff453887d0db3cdca6120d"],["/page/27/index.html","858e216151e6bdfc9404aeb5bc897d33"],["/page/28/index.html","01fec2119f5d851a4f61cb5f0ff25048"],["/page/29/index.html","ab8f5489f85e2707e0a95a1fcf9bd29b"],["/page/3/index.html","2aab9dc8ae3113e132060e38201a1c59"],["/page/30/index.html","7368473becd11a77987d51742db97c39"],["/page/31/index.html","2fc84e0da751e5d7c0534205afec0973"],["/page/32/index.html","77624f605770b094c85ed5edfa18cc03"],["/page/4/index.html","eaad4fe398e055e6824ffbe1026284d3"],["/page/5/index.html","9af52d03cb7caa99b122f3aa2b161c02"],["/page/6/index.html","07d6015adf875088432ba0aa4c80324f"],["/page/7/index.html","5f1de53e54a15b3ef58e5d9e46b3c4d4"],["/page/8/index.html","ed0a686e2518b4af24be95b78492fec0"],["/page/9/index.html","c157711f286ee40e335dbeb8780f35cb"],["/pandas-data-preprocessing/index.html","f92fe450d223f0ccb901a8ba07344c12"],["/popcorn/index.html","ac989e5ca8a56149300df92d5c3be150"],["/python-Blog/index.html","8ff3d4a506f1f65773c788b3d216ec66"],["/python-yeild/index.html","47dc0cbaabf6244dfd2b38e01bdd2689"],["/python爬虫教程/index.html","339dae5c67efdd872e2ed00f9e08e99c"],["/software-copyright/index.html","5e509f89550e3f5c6d70ca3b31223e7c"],["/sw-register.js","04be93255c5d5abdda32e1a89c749316"],["/tags/AI/index.html","6c006dbdf071fd657d8c825aff63b767"],["/tags/API/index.html","a6620490bb9e3cf9089e5c15dd72a4d4"],["/tags/C-图书/index.html","cb433e1e2311747f6bf7ec4bd71828f4"],["/tags/C/index.html","f8fdd82866ca8a022150e7561ae6b1df"],["/tags/CNN/index.html","588e45749e7e491f8c98961bddceea22"],["/tags/Chrome/index.html","4e109fe4b1f5143ca451b05a27a74d7e"],["/tags/C✙✙/index.html","3ffc5be9f6525ef9bee37f7c3ba4d140"],["/tags/C语言/index.html","a139e6c34246ec6b9690b2e0e03fb94b"],["/tags/C语言图书/index.html","1a3041ca265fa35207445b9131748872"],["/tags/DSN/index.html","82af7fa77f5ecd925e9427fd6b34dac5"],["/tags/Dll/index.html","21c093f1caeaf50306481c9d00943b67"],["/tags/ECCV/index.html","bd6a9da853731e9adaaaee63ad6e42c7"],["/tags/EM算法/index.html","6aad56915c4a726c32c0e92eb7240a05"],["/tags/Eolink/index.html","8a93776901feae7301e1fa835aa4a15c"],["/tags/Gitee/index.html","b2475795859c31c0af10d92b4105eaa4"],["/tags/Go语言/index.html","657673b738e97b8e2df982868407fb43"],["/tags/Graph/index.html","08b8fe85e4d9c54f7e7c6ac12abfc22f"],["/tags/HTTPS/index.html","0a40641b09a29d7cee27e982b377a5cb"],["/tags/ITK/index.html","a08dc58e0d89d910ccaca23a11f4a20f"],["/tags/ItkVtkGlue/index.html","fe2597c835f0217f4e07d66ef6370f00"],["/tags/JMM/index.html","0a919fc810924587793ea6f8e4f8195e"],["/tags/JVM/index.html","c83c0b38308ba6ec52a221474d652166"],["/tags/Java/index.html","6142346b8026c49525a8be6e0f5b10d4"],["/tags/Java/page/2/index.html","729ca9cd225e179040332d095591fc49"],["/tags/Java图书/index.html","c977c23a3bb643d7311d355c12f8e1c6"],["/tags/Kaggle/index.html","7ae33e3ce4b2fb27229cdb516c2ec590"],["/tags/Keras/index.html","d0fb3cb861133f40229bc799fc190936"],["/tags/Linux/index.html","7660a62895047544d3cd1ea2729daf4e"],["/tags/Linux图书/index.html","947e1cfe372916b35beb4bf5f5404f1e"],["/tags/MEPP/index.html","34e901c82b26b0d43c22ec16ac6d692d"],["/tags/Map/index.html","236dba10ea649a6a9cf83277b0b502c9"],["/tags/Matlab/index.html","158791be620417edbc111010907ed031"],["/tags/MongoDB/index.html","81cd1567db1278122ef5d541751ad8a6"],["/tags/MySQL/index.html","b35e7122c09fe3224a2712c73fbffe93"],["/tags/Parzen窗/index.html","38d74ca05dec6bdc44294396bc432bc6"],["/tags/PicGo/index.html","d9ea16b32df62bf6aadd643d12c07417"],["/tags/Python/index.html","01d45091c329d6feeed6e16a34e4b3ed"],["/tags/Python图书/index.html","546e856233f534b357132ceeeacb8e04"],["/tags/SPHARM-PDM/index.html","6be43861fdaca7393b8a9478ba86da51"],["/tags/SVM/index.html","409f3ab3bd977b05777b7c5172e8b39a"],["/tags/Servlet/index.html","77e7f13cb0c286042309131042ac027c"],["/tags/Sping/index.html","f20ee9aa82cb74b1472e4380b07aefa1"],["/tags/Struts/index.html","fc12c0eba9915aa7b02cfb8ada90c0aa"],["/tags/TCP-IP/index.html","2284a48bfe6652c3140ebc7e9ca4cbbb"],["/tags/Ubuntu/index.html","85f1118d68d980035f79d7df395bf80c"],["/tags/Unet/index.html","84b65aeac5e4e4223d306d68f050c67c"],["/tags/VS/index.html","6e70f08588b37c05a567b3ccd849b342"],["/tags/VTK/index.html","fc16ae609a24b96b958017af19d846b5"],["/tags/Windows/index.html","d1a854c39480a620333cf706994cbb3e"],["/tags/edit/index.html","a036adc33d786788fe4c551443296dc6"],["/tags/hibernate/index.html","9a4baf772c68334e74ebf73fae04bf53"],["/tags/index.html","981ee4189ad4b8e6a62a62dffbc8ee46"],["/tags/itext/index.html","127090fe07b7565fecfe5677e5e8e757"],["/tags/jdk/index.html","cbe8235138a0f91571a3c53cdaeb4654"],["/tags/kmp/index.html","8d8e3ab2740ac3f4992cf8b412402666"],["/tags/k最近邻估计/index.html","4a6611a22f51e83f2b77c68975918adb"],["/tags/lombok/index.html","e15a629efcc772f0347d31754a6f16dd"],["/tags/offer/index.html","5a0954c25a530d0e9aeca9b4155e2502"],["/tags/opencv/index.html","8fb945b2177b2f3e7bc3343713772ed8"],["/tags/pandas/index.html","3e51bcc632e5deb305bfda46a2be1420"],["/tags/string/index.html","08a62c4da494d867ac46f14bcfa0b610"],["/tags/vim/index.html","ef164aba7f5e0db452d94738475fcb4a"],["/tags/vtkPolyData/index.html","d64ca0c354d12316bbbb5a7fec7b2629"],["/tags/web/index.html","5aaa4fc449b043b6647ab68430c1bc0c"],["/tags/xshell/index.html","69589d0b366102d0e254f535f511749f"],["/tags/yeild/index.html","f68644c9614c36869ba1f128a777560e"],["/tags/互联网/index.html","3e3f912a64be3bf94b9778261a7ea93a"],["/tags/人工智能/index.html","feb5d927b728830d1a360f0ccd2efde4"],["/tags/体绘制/index.html","ef853c69aa6a38813a3e062db39e9683"],["/tags/全卷积网络/index.html","ae5f7a48ae8bb0faa18050a06b31fd21"],["/tags/公众号/index.html","5d1082974bbc6b350a7221eb5bb97159"],["/tags/内存模型/index.html","14953fc80727e859cb79f750205b2ef6"],["/tags/内推/index.html","1d1a2b0c84f4a4bc33867a8a1f4afa2a"],["/tags/函数/index.html","626db163e177c35407186dbf3f53b1a6"],["/tags/分布式/index.html","ea2a66b090906db120204d10ad8bb42f"],["/tags/加密/index.html","728d107c6f8a407e0a70d1747960b1f7"],["/tags/医疗图像/index.html","8a2d6fc4849b93050efc247c172ec2f5"],["/tags/博客/index.html","035d9b1c328aa87498be5846466e1def"],["/tags/图像数据/index.html","3c0745384b88022bd6b7a19e6b50892c"],["/tags/图谱分割/index.html","1643e8cee38bad1d6f68b315a088d6c2"],["/tags/垃圾回收/index.html","9c0790e36b08c7d35a1aecfd53ec8587"],["/tags/多线程/index.html","28383304da6a80f2bf50c66924c54374"],["/tags/字符串/index.html","537fc558c0ef90d4a4b38320e6035ccd"],["/tags/工具/index.html","ffd85b1f5d075f2b443838a08f64a75d"],["/tags/工具/page/2/index.html","879d2e48d3316e299acc3bd23b149000"],["/tags/弹性形变/index.html","35bc0c9f28173ad0b01772882c14a4d2"],["/tags/排序/index.html","90026234d7b72c92cb3c5eb8768968c9"],["/tags/搜狗/index.html","a77f6b6eff4638b79253d451abde08e1"],["/tags/操作系统/index.html","81847dc001693377ca6133b3d085dfbc"],["/tags/数据库/index.html","969df9a5e2b65913d63db40a56e3ba54"],["/tags/数据类型/index.html","ddd231b008007344e6682634b0b79feb"],["/tags/数据结构/index.html","7b4681d1673d779440660df880f9378c"],["/tags/最大似然/index.html","df1eb29444afd803e4f44ad40a249931"],["/tags/机器学习/index.html","31654f029c93a590e72c16d56553f7c7"],["/tags/机器学习/page/2/index.html","18ea1eb574ff7a30b4cda03a9bacb87f"],["/tags/机器学习/page/3/index.html","0ab5e41d33de0d3006805868260efd3b"],["/tags/机器学习/page/4/index.html","155c3251d57b1de5dd2c025595eee04b"],["/tags/机器学习/page/5/index.html","b64830cb049ed781763baad188b55d59"],["/tags/树/index.html","3df3bd82dad03daca389d252b8f5c85c"],["/tags/框架/index.html","a3b73b732b1d5d1d6568e757683ff5f5"],["/tags/求职/index.html","bb1585dd5a88c5a6b4172539c81d212d"],["/tags/汇编语言/index.html","13caf3a19391f836d716feae88b32812"],["/tags/深度学习/index.html","3b40b461da77ba419143a64485cbe9bc"],["/tags/深度学习/page/2/index.html","bbcefbc05d16f4d8632d1207f54ea9b6"],["/tags/深度学习/page/3/index.html","be76fdef61bb7f1a91682c040e5c050d"],["/tags/深度监督网络/index.html","881bfb8096a161e2f0029ba7fbeed41f"],["/tags/爬虫/index.html","d6eb9ab18f67657f9988ec896dc03819"],["/tags/电子书下载/index.html","93ce2404e7b472174b5caa5e034482d4"],["/tags/电子书下载/page/2/index.html","a8c3669819c5906fe88ae2d7aaf555d4"],["/tags/程序员/index.html","8f4239da5b5ef9079cc85ba8f663e502"],["/tags/程序员面试/index.html","d8c13c90ee5de8f8e8b09fb2fd1e2f78"],["/tags/简历/index.html","1ba34427cf83eeabb2ec21fb77712509"],["/tags/算法/index.html","27f6f10ff58b0c56f2eb4230ce97eb28"],["/tags/算法/page/2/index.html","b8c41851a41539eac7435903bf02011f"],["/tags/算法/page/3/index.html","5e3068da56b766e54b5b06ce4e7196e3"],["/tags/线程/index.html","3f1b52a94c83baadf8bd88a8f7d2e672"],["/tags/结构学习/index.html","a7d51148e3f87cd5ee294f7fc8c9df3e"],["/tags/编程/index.html","d113aa57cb9ca5917901a7d2553bf1f5"],["/tags/网站/index.html","4b2f25f8dda58d60b5ec8ceaedc75ece"],["/tags/网站/page/2/index.html","321d624300131248bfac50931c9bea5c"],["/tags/网络/index.html","745808afd5ea1aab19263c299b91878f"],["/tags/网络原理/index.html","90ae2c0705780fbde7a867f6f4c3cc78"],["/tags/肝脏分割/index.html","4d0df747f5ed4ca96f5adbf052b44403"],["/tags/计算机/index.html","581fd401e349f31d0b7a451313cd355f"],["/tags/计算机专业/index.html","6d227db05ec792f562964d5a087f5cc6"],["/tags/计算机网络/index.html","f7724bfd7e25a5afd27a647cd9cadc2e"],["/tags/设计模式/index.html","43d37eaeae3d577e3f0bc88f70c89535"],["/tags/贝叶斯/index.html","17109bf8670449e83fc0c9f030553caa"],["/tags/迁移学习/index.html","3f3bfcd0198e906fc1d253509718c26c"],["/tags/面试/index.html","75c3a8cf607c0acee5eb8b4d1e294485"],["/the-way-of-pragram/index.html","1e53c1afb02acc8937fd77a87adbce49"],["/untiypro XL安装/index.html","c2b70c99178b7423180483da8e6076c1"],["/video-websites/index.html","06bf3eb6a97df516db834b1a0d7103a2"],["/wechat-fans/index.html","af162180c29f2e644688fa39fea9e7d2"],["/window-run-VTK/index.html","5630ce5ba4ae33501bbefddd5d33d91b"],["/xshell-connect-Linux/index.html","0cb22e3a3e03ccd10a9869198847ffcc"],["/‌Accessing-the-Open-Internet/index.html","6ea2403350568644f2d363c477e6f080"],["/《Java高并发编程详解》，去大厂必看！/index.html","5d4206138dba7c5790661a498d37dc16"],["/一分钟没了 1.5W 。。。/index.html","dc50b502144864c3d8e36d653c2750b1"],["/一条高产爆款内容生产线/index.html","e77db344006582cd6c17efab9cca9f0d"],["/为高考学子推荐的六个就业前景广阔的专业/index.html","6d57562445849fe01b1e8159170bed94"],["/互联网赚钱机器---社群/index.html","d9eb778170765854d89c03b4bcde0a2b"],["/你们常用的工作方法和思考方式是什么？/index.html","a70773d07bb0502c0ad3aeae0e8afcca"],["/关于环境配置的一些事/index.html","96e7b04b437b40d01bbf71d3cf155f5b"],["/准备了19w！搞事/index.html","e8341d176ec90cc5e6bc55b77bd65311"],["/几个很重要的感悟/index.html","4e0e7bced3fe7828b28e4c824affdb0d"],["/分割ROI篇/index.html","dee71f6d95b63819f65cc798982fa8ca"],["/分割精度说明/index.html","a1bd64f55ad181a4b19ca787c4fda045"],["/分块程序执行/index.html","b095bc8245c58047872cac47581c2bf8"],["/加班公司黑名单！！！/index.html","da1bb00946aac20f7a3f5fa4fea2c1c7"],["/卧槽，上知乎热搜了！/index.html","6c99a2620a16a6985d3f8afc3c8cfcc7"],["/卧槽，我的小破站爆了！/index.html","a30be9279cce9721d6969d2040e00e0a"],["/卧槽，我被盗版了/index.html","ed7b586afbb7ebadd20418e627b48b72"],["/卧槽，还有985大学在大一上C语言课？？/index.html","fd63d55730693452f0a5739bfa4a0f8f"],["/历年微软面试中出现的leetcode算法题/index.html","da82ee8b9f51f70327c695f6ea28b186"],["/去特斯拉试车了/index.html","0c0d59f0ca6a8ec029ce6288dbcd2da6"],["/吃苦的三种境界/index.html","e6452382b31023b036d831e0ef74ce85"],["/哪本书适合推荐给 Java 初学者？/index.html","90ac73cab0fa1da278b4abc1f49f77c6"],["/哪本入门级的学习数据库的书最值得推荐？/index.html","5a4ad95a7218262a5edbd302cb47248e"],["/国内外常用的AIGC模型/index.html","7d78a2d51c07ff713f2ca88b815dd038"],["/国庆假期/index.html","c882debd1e9e2549e65cca7fd44d3ac0"],["/图谱程序字典/index.html","32d45ef64fe5afba6f06c3648728d321"],["/图谱训练与分割/index.html","c68e4bb2982d77c05abe67d575b2fb30"],["/宣布一件大事/index.html","5a04e86a8ba7b8f82777c97e23063a2c"],["/小鹏P7i试驾体验/index.html","7a824f3f52fbe3cdb42e0059cf3a02ce"],["/微信PC版3.3.0内测更新，电脑可以刷朋友圈了/index.html","3ff7985cca3238341f6372c9b4ebd5f9"],["/怎么更快的赚钱？/index.html","12b9f3fe48698a42c560533e2e7bd076"],["/我毕业了/index.html","b09e90f27e746db13e8926526a4ba66f"],["/我！真！的！找到了！爱上学习！的方法！/index.html","3f1dcf24b7e1f219d898a1d0b4ecda82"],["/户口的意义/index.html","894406d8bfa1b063e9e922fdcc18fdd0"],["/推荐两本经典算法书/index.html","81f690f939795c84c00e6dc3c5337529"],["/推荐几个在线学习SQL的网站！/index.html","b2bf20cd2b003ad658417c314ce203d8"],["/搞了一个程序员成长晋级社群！/index.html","93fbfd0c45b1776fa32aeb03e6afdcc2"],["/摘抄/index.html","0c136e1b6336be43bd23f6b4996a6224"],["/暴跌30心态崩了/index.html","e81e8147e1feea23f7f7d4f4ed24d9bb"],["/最近很火的ChatGPT到底该怎么玩？/index.html","5e14f462b714846ab5a0bc9445460e9b"],["/有哪些好看的日历可以买？/index.html","327b543d64e486c8227224e3365ef027"],["/服务器有啥用/index.html","92bcc4b4aa753512f796754a6d36deaa"],["/来长沙了！/index.html","4e79935101fc364930eb1be4f8e1355b"],["/校招污点公司名单/index.html","55e3932202a77fa16835b4bc08750598"],["/梭哈200多万/index.html","babe2039871dbad00f5565d14c51b5ba"],["/梯形图入门/index.html","281866543d95f19f6be6567aeaa6c368"],["/橙心优选，凉凉了！/index.html","f7a4a12e1d69e31bafca9d698e12c5b9"],["/比亚迪汉试驾体验/index.html","7012f618c5986f48d924aa1273f0d173"],["/清华转学成电，真的牛逼！/index.html","2d50f92cfb0608eb5492d00b2b2e46c4"],["/滴滴程序员被亲戚鄙视：年薪八十万还不如二本教书的/index.html","39b90ea07de30bc7f240cb1a97642c90"],["/社群！/index.html","5a7824e539644a490616e6c0301a4fff"],["/科学上网之VPN篇/index.html","b10904c8b30b465485a90789ea46a8be"],["/程序员必备的几个技能！看完你也是大神/index.html","ec814ab003fee9d25c7b0422f0160173"],["/程序员绕不去的槛，Linux！！！/index.html","9f3f3d53d3ef2cd38d67ee78d248b2bd"],["/蔚来ET5试驾体验/index.html","928a11c23e35c05b315821c459d02bac"],["/蔚来，牛逼！/index.html","4ea08626c3e79e6b7b4bab180230bc74"],["/被录取了/index.html","be6a24a68197abf0a891c7038d2247a9"],["/被找事了！/index.html","ceab0e2b8d7389f7c207a31e55de02e2"],["/被拉黑了。。。/index.html","6405a6b06970259fb4c6e9b730956bde"],["/被车撞了！/index.html","3d7e650e1d518848b41c9e70a1f443ff"],["/该如何选购固态硬盘？/index.html","9cb8af16cc41cc69906aa8f3d54a29d8"],["/这本书一定要看！/index.html","c9040351ce54efe537bede3c5bc09ab5"],["/选Java还是C++？/index.html","2559e3db42a5208d4e2200cfb52297db"],["/那些让你起飞的计算机基础知识/index.html","6b48255566bb50159d46ad80f0f0f6fb"],["/靠这几本算法书，成功拿下大厂offer！/index.html","e30a92b303aeed3067f5ff6c2f33c92c"]];
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
