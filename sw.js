/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/0010-city/index.html","435d70aa9884fdbe6b1ec57deba34a9c"],["/10-algorithm-book/index.html","cfa95aca98da0c2370ba98cbab44880c"],["/10-website/index.html","894d004fc6b2b5c6fe9e88b30b7e4256"],["/100万的小目标/index.html","bb5aab5c08e201b0492a9c72713cb864"],["/10w+YYDS！/index.html","8facb926a6c643fcda383dcd2e129a71"],["/10website/index.html","707077f4e9bdacf7865f8f3f99903117"],["/12-technical-tutorial-sites/index.html","fb705e0f7c102d6462091a12251e8d72"],["/2 6 岁 了/index.html","cbd7944aabb65fd73325edc86f9a861c"],["/200万，啪，没了。。。。/index.html","7c120715cdbf53194b5e2a11a0437fbc"],["/2018ECCV-Paper-DL/index.html","1ef5de97d9618ffa72156a4118ec3fae"],["/2021年固态硬盘选购最新攻略（小白避坑指南）/index.html","05919c265086f4b8d16bf46b1f802d49"],["/2021机械键盘推荐/index.html","6e9399c8465c4fbdbef0b23d637782af"],["/2025-07-15/index.html","d6e8639689529fc9bb56bbc1c49087ec"],["/2025年终总结/index.html","60411347cad350dcdde1791d5ed87fdc"],["/2026-Open-Internet/index.html","049bc9eb783b08c0ca840481ba75f447"],["/2026-best-vpn/index.html","3f863f3e8296a8b7f8903a69a80dd7c5"],["/2026-clash-vpn/index.html","0a9841fcdc6d9b2260c9a4684fe8d393"],["/27岁了/index.html","94f617da9dff013ca039e4fab090b932"],["/3D-Convolutional-Neural-Networks-for-Human-Action-Recognition/index.html","5b5372fad4a9f8ea255a082410526915"],["/3D-Deeply-Supervised-Network-for-Automatic-Liver-Segmentation-from-CT-Volumes/index.html","281db419b97aa794f0f1890f6be78bb5"],["/3D-Unet-Experiment-notes/index.html","7f47b0dc28112e563956263b48eb1a86"],["/4-Software/index.html","1c0e0dc6c7dbc331e16458b13cd4866c"],["/6-website/index.html","7edc26cbe9a8140ea9d8ae55922688a0"],["/7-terminal-tools/index.html","fde26dfd6e94d73db763d653414cf8f2"],["/AI-PPT/index.html","28d0f6b9510e20e396c4988f1385abe3"],["/AIGC中典型的深度学习网络/index.html","a1fa7e04056095055050491e47daddc0"],["/Accessing-the-Open-Internet/index.html","4d86634c0d43ec1f49186e2c347f45bd"],["/Agency-model/index.html","162b70fc22a4c5fd67d4870c7353d6d2"],["/Algorithm-brush-notes/index.html","022d2bcebe298287cb8348f868489258"],["/Ali-recruits/index.html","66bacd9f1d6b13d582a627bf15da12f3"],["/Android-VPN/index.html","84195f8280ca50132c4a2ccc0a4fb615"],["/Android-open-internet/index.html","eabfa80f91ba51cef78a291cc31e6b41"],["/Appearance-mode/index.html","4738d2f320ac63078ec4ffda7e18aae7"],["/Backtracking/index.html","522876de9aff4fd42b3b0f37e19ad98f"],["/Baidu-Sao-operation/index.html","c04c127498d8ec025febcf990f22fc81"],["/Batch-Normalization/index.html","763a3ddee025b0b801444385e6daf0a2"],["/Best-AI-tools/index.html","feaef0057d4f558e50e22b6ddfa98f6e"],["/Bias-and-Variance/index.html","dd35aca0792dab10b4850b6fbe5fd680"],["/Binary-tree-traversal/index.html","514ee1d224891a92653687775dd4ce50"],["/Branch-and-bound/index.html","84052af32eada7ee83dd164e9f71baed"],["/Buying-computer-for-the-first-time/index.html","8eadabc7a2040bb7e4f6614914a3c2a3"],["/B站向北邮道歉！/index.html","039d423fe4045ff35aab022494a3481a"],["/C++-string-function/index.html","5150c2877bfe1d3b7dbec284325e5d92"],["/C-Java-DevelopTools/index.html","5dd28b257e3e053e8fcee95aeb5fae61"],["/CS-Classic-Books/index.html","2a4f09f0306eed94adc05f52460bc9f2"],["/CS-network/index.html","ea9e0a8342b81e07862789b0e50fe8d4"],["/CSBook001/index.html","f3b0586dd514ada75c577048cefe59d8"],["/CSBook002/index.html","14721b10f09bf801609821b2523d8d39"],["/CSBook003/index.html","65f66432b4524ea679a961b08ca39ba1"],["/CSBook004/index.html","8cd49001c05b594c85736c78b66638ed"],["/CSBook005/index.html","a8bc9e253f8169951792cfd932564aaa"],["/CSBook006/index.html","2358b58105b32afede7a4ef934556e63"],["/CSBook007/index.html","72a2c7b58ed632ffd928a4d1a640beae"],["/CSBook008/index.html","7127647dbe7a3db9fe25a343fc850974"],["/CSBook009/index.html","11b3a847483f61b91704fe779da73841"],["/CSBook010/index.html","0a1a0fda1730b8793c85eab4bf06f6c4"],["/CSBook011/index.html","fbe94116fc52732cc9da209e20968f5f"],["/CSBook012/index.html","f7ec78ff73dd339db3e6be936ba06f26"],["/Changsha-really-fragrant/index.html","54cb447e26aae74b33ff3603ce369fbf"],["/ChatGPT-VPN/index.html","7796156012de7b39a498c5e06136eb4d"],["/ChatGPT/index.html","ee7b7064153bed3a0cc0a7bb6455d2ef"],["/ChatGPT！王炸级更新！！！/index.html","9b5ea6ebd90885c8ed8a509238a9e3ea"],["/Chrome-crx/index.html","99c252acb77f7132256ebf9139bdd462"],["/Clash-Party/index.html","c389027d70d7be59f7a3fa8d44b91c00"],["/Clash-VPS/index.html","c75b36fdb85ea8ead6c4bab9572bbb21"],["/ClashForWindows/index.html","cd3f5262ef2bcc101b2585c0548a3be2"],["/Computer-Classic-Books/index.html","19e118219e478324e1d0fe8a05b14978"],["/Computer-for-another-major/index.html","cbda228f2b0d04ded1c9e7df1c9a1710"],["/Conditional-confrontation-network/index.html","2a14ea95c42b6d14af5a63a7d2ac83b5"],["/DNN/index.html","d00ccf0b3d74f7a0c2a8ef61d8c065fc"],["/DSN-segmentation-liver-experiment-summary/index.html","17ffa375403d9fee3cd538c759e277e4"],["/Data-enhancement-elastic-deformation/index.html","b0c50e03e26dd0b5f2c1d622d98d8d24"],["/Decorative-pattern/index.html","b67f89feb8182a96fe51625c7340ddb1"],["/Deep-Learning/index.html","2c4dc1001a2da533dbc9cde2d4af61dc"],["/Deep-learning-and-medical-image-analysis/index.html","f50862a2160c90a5ea538835292d23be"],["/Deeply-Supervised-Nets/index.html","1c52be0e1d0082e4a1a463be9c862506"],["/Deformation-model-based-sparse-representation/index.html","eba9c705d81fa4c47439a8d746e56f7b"],["/Discriminative-and-Generative-model/index.html","fd1bdfb06049d9976cc1878427af3b89"],["/Distributed-transaction/index.html","a2dd7a1792fabeb75be8c6768896dd87"],["/Divide-and-conquer-algorithm/index.html","8c8836620cb1aac40132a98ce6ae40ae"],["/Dll/index.html","4f374ba0e4bc839ecc308822926c9c8a"],["/Dynamic-programming-algorithm/index.html","e88ba5405d0d9fe459b9277aef91ccbc"],["/E-book-download-commonly-used-by-programmers/index.html","d3371ed54fbf98ee80f50d9f49aedb4e"],["/EditPlus软件的安装、激活和配置过程分享/index.html","e58c5e59e1a00244628f61442a8bbf67"],["/Eight-sorting-algorithms/index.html","b9652933ca347551d7f379e4e4162f2f"],["/Encryption-Algorithm/index.html","52b76f4135c54132753ee09f3fc3f0eb"],["/Eolink/index.html","8caa59ab41165ef8a275581d214cf508"],["/Factory-and-strategy-mode/index.html","89788f88e15ebfce67b3a73d9ad50c90"],["/Foreign-technology-blog-community/index.html","f6c2374a7141e310d331c8b073982938"],["/Functional-model/index.html","3357acd665f41f8d850cd7904cc04b2f"],["/Fund-type/index.html","79353934a037b8efbf8f71f2957aae64"],["/GPT-4o/index.html","0f5cd7a26b87786c22e4510758da6353"],["/GPU-medical-image-processing/index.html","dff9f5ff06ff76036e0f220eea052898"],["/Gemini-pro/index.html","78ddba5b7f5af5b67ffc8e27f66022f6"],["/Gemini-vpn/index.html","7973f11cede9c33dd305b4d35e200b06"],["/Gemini/index.html","780514d634a2b886fde24536b417b7d7"],["/Generative-Model-of-Unsupervised-Learning/index.html","dd0fd80d9e8f96f2ac37e3df7db124f5"],["/Git-Learning/index.html","c14976804f03237dcbff73af7a4cc637"],["/GitHub-2FA/index.html","eb1f7bd31b10b00971313a4e2dedc6c2"],["/GitHub万赞，程序员必看操作系统总结！/index.html","96a515fc72d8c5acbba5bcc060648686"],["/Golang-book-recommend/index.html","a022083433801e71f5ad71528e550a59"],["/Golang-learning/index.html","fa5400a3fc687c5fa2a3e8f12b3bafa1"],["/Google-Gemini/index.html","3a13ecd6fb27b9d85d9bf26797913bb2"],["/Gradient-descent-optimization/index.html","135a94b96bb12e8b2cbd67d21a7e16e6"],["/Greedy-Algorithm/index.html","7ed1fb4c36953c0fcaa6ab852c26f012"],["/HAND-User-Forum/index.html","42b9ce47e689d7a7af447c287a9a15c7"],["/HK-bank/index.html","4a2a8908dca06f4024dc376488c0f941"],["/Head-to-head/index.html","7693769726e5c5856c3b04a5f702d885"],["/HexoPage/index.html","b6402e763c084ba052d9cb31b9d1a74d"],["/HistCite-Pro/index.html","2e76e7765e607ccbf773675a8135aa0c"],["/How-does-the-program-run/index.html","9276ff44be9b039030179a1837241517"],["/How-to-judge-whether-technologyisreliable/index.html","a6e19d4e9601210a18b6e71956122a73"],["/How-to-learn-design-patterns/index.html","479475c8533e7e6aabd922c7660c98cd"],["/How-to-learn-design-patterns？/index.html","6ab313e97b8eb5b29f1a7ffa682bb8e1"],["/How-to-teach-yourself-programming/index.html","55325446c2146525801b924800f0cb33"],["/How2learn-Python？/index.html","6c4d6b665748b7c8b2e5114bbcbac68e"],["/IDEA-shortcut-key/index.html","20241b00215e7684f30bbf518b638a82"],["/IT-interview-basic/index.html","57e7a35c36d334e6d3f30f290fa432a3"],["/ITK-VS-install/index.html","34422952a8eae1086a2da029a36a74af"],["/ITK-VTK-ItkVtkGlue/index.html","765b34f6fd1962517853c505c143e9c3"],["/Image-processing-plus-noise/index.html","19a4714bc14605766cbf051cba3514b3"],["/Inception-Going-Deeper-with-Convolution/index.html","41a6e8949ccf8686ccb75ea2399bc2b6"],["/Information-Cocoon/index.html","f07fc1f2d09bd43971ba0139e578403d"],["/Java-GC/index.html","0dcee03c8d0bf5d04feb767a084ff4b5"],["/Java-Servlet/index.html","2d8bc561ee95fc2206435797f541eeeb"],["/Java-array-and-collection-sorting/index.html","7fb3e4c02d5099b0cb2a307e30d68851"],["/Java-development-tools/index.html","ec8cc96a9fb320507e474e1da371eb80"],["/Java-eight-data-types/index.html","48090933b5e97a028f6932d7c6b62ac9"],["/Java-interview01/index.html","b12f7bee68367274c348d37905bee523"],["/Java-interview02/index.html","7e352e303cff0d5fced361728d5f1293"],["/Java-interview03/index.html","8d16c8930847a27f30bd873a7ffae698"],["/Java-learing-map/index.html","9083963f4eb8a72b8bf10cf5f7d4f18e"],["/Java-learning-route-map/index.html","994d3e59c26e5d4d1b829c98e047065e"],["/Java-memory-area/index.html","274f662a3c9291bfcb6315fad135bfcf"],["/Java-memory-model/index.html","1c641318499cc75b42dbcf0ddf295dc0"],["/Java-multithreaded-learning/index.html","c4c64fe8a329cf8807dd9dd3ccd6d712"],["/Java-project/index.html","7411301c5a6a3ce7f1b643f22bfd71b8"],["/JavaWeb-Chinese-Garbled/index.html","a0f7c12eb26bdf66980308fed96ac476"],["/Java还是C++？/index.html","50aef2f1c65ac96591d8fd4e1a43691d"],["/Kaggle5-step-guide/index.html","17a5b9409f59bf775337da88d1ef5638"],["/Knowledge-points-of-Java-garbage-collection/index.html","d3906c8de34b86cce80fd84cbee74c64"],["/LLM-DP-TP-EP/index.html","a01c028423e103b713cfe876507d03db"],["/Layoffs-Hiring/index.html","a8e5c1fa31727c7d404555b983171db2"],["/Layoffs-and-Hiring/index.html","e2ce3b61c5c047f0511f0d8a6c98a4c9"],["/Linear-regression-of-machine-learning/index.html","adca48d2210ae0ae0f82136457228428"],["/Linux-Compile-C/index.html","4011b2ec8523a111cf9a9b55f5727fd7"],["/Linux-ITK/index.html","f0d740904fd0fcdfa2cf80ef27af0fdc"],["/Liver-segmentation-of-sparse-components/index.html","bad10ebbaab31677352eacf9f2b4a05a"],["/ML-EBook-paper/index.html","300800f5e91e1ae3cfd0991f0e9af7e6"],["/Map-uses-multiple-maps/index.html","bbbbbf20660e8e07aecf8200ccd49442"],["/Marching-Cubes/index.html","ca4de9e22e92ffb9065ef1cb550fff33"],["/Matlab-Graph-cut/index.html","9721764e136405f638516a2e912b063b"],["/Maximum-Likelihood-to-EM-algorithm/index.html","270d14b371b4eb2e57566a2fc5379067"],["/Mean filter and median filter denoising/index.html","9550f46a9ac862697121dcb71cb3728c"],["/Medical-Data-for-Machine-Learning/index.html","e821f67c70c23900ea38a7c7de92e36b"],["/Medical-image-analysis-deep-learning/index.html","f552dd74847b2afd509678f60334ff29"],["/Medical-scan-image-processing/index.html","bae9f477569773ea17ca38c29581054d"],["/Merge-sort-algorithm/index.html","8b9c04873d49b9490ba436986a71178f"],["/Monthly-income-2W/index.html","2697ec1dbf1811c8d0840d01c4222eab"],["/Mysql-database/index.html","1d85eb4edadc9b90bd39c7f2a952b3f1"],["/Neighbor-Embedding/index.html","2d471940180fa1d3c0b30d8d1f28e8e6"],["/Neighborhood-approximate-random-forest/index.html","9a0eee021138e559c8dfad2b6c2ed257"],["/Net-and-official-documents/index.html","dbea310b5d6df21d240502ac013a1afc"],["/Netflix-VPN/index.html","c50eeff32f0ce78db059e15fa6d383a5"],["/Network-principle/index.html","3e31e814e1d50c7ddc85c1f4eaa74c69"],["/New-Hong-Kong-stocks/index.html","4205d7c7418ac031395044738f6a5e24"],["/Nice-to-meet-you/index.html","be76094518e4fb933f163d5f1f3d83f9"],["/OS-processes-threads/index.html","cee1569b0664ced6ef7ca427269c38ff"],["/OS-run-environment/index.html","1b6c09e57f1fffdd786159f4b7077bea"],["/Open-Internet/index.html","4f0c4f2124bfe2a05cf8c9248365e8df"],["/Open-Internet2/index.html","f4f560aff780a27be4ccfcc864e56cc2"],["/Open-source-community-and-rewriting-website/index.html","6a1fedd41eaa675485357e846f76db68"],["/Panoramic-image-stitching-based-on-SIFT-features/index.html","a362129a54a33d19fd22a38c717e775b"],["/Parzen-and-KNE/index.html","87cf0b6ce82daed02d4fda9775c5bb6c"],["/Personal-technology-blog-site/index.html","ca33e8586c8b1282e89acf88c2a7cd60"],["/PicGo-Gitee/index.html","809a278a038736e650a30063f6c04681"],["/Programmer-treasure-chest/index.html","0535d4c207aaf51e5fe487b53bd92bb8"],["/Prototype-mode/index.html","47974fc3ea9f2180c8aa8226db0bc3b4"],["/Python-base/index.html","eadaffc74212f3106e8e28a18eadd51b"],["/Python-crawler/index.html","5ef813b80f068bc11384555691b6bc55"],["/Resume-revision-suggestions/index.html","d32f38b68ff77f7c100d47cd6eefe907"],["/SEO01/index.html","189be4af99edd3b34bec07d004ddaa59"],["/SEO02/index.html","78fa137ae8cffc21018bf7ab6ebae865"],["/SPHARMPDM-MEPP/index.html","ddaa12dafcbd656dccafbce124421fc9"],["/SVM/index.html","7ae7d4e769cfe87d8003040c00daa77f"],["/Seata/index.html","520cb24f6bc9123a08e384587c02d0e5"],["/Semi-supervised-learning/index.html","3df49ee44d47bdab2b7adbd904b79c66"],["/Sequential-model/index.html","74672c6d1b8948e936d7cbfb2253d51e"],["/Shape-Based-Human-Detection-and-Segmentation-via-Hierarchical-Part-TemplateMatching/index.html","18bdab706111babb959082c6569e6627"],["/Spring-basics/index.html","631c9bd07e58c026b93d568f9f854223"],["/Spring-integrates-hibernate-Struts/index.html","93496f06e254ec967af8e1e47dd62977"],["/Structure-learning/index.html","ee649d033b21010456356a624154d195"],["/Suggestions-for-self-study-of-computers/index.html","17f73d8f8802d657e9d422114c9927e5"],["/Summaryof-HongKongStock-Account-Opening-Links/index.html","45ad6ad2764d0f4051437ca71e4e1ead"],["/TCPIP-detailed/index.html","11d4450f782e9ccb9bc7f603421f32ea"],["/Telegram-VPN/index.html","78dc9a155a3613f29b528dfeaefb9e6f"],["/Telegram/index.html","17a88498b4e089583efa5d0e14ba2555"],["/The-essence-of-shopping-festival/index.html","5e2b1ba9708d450b8d0ea9a0dff3ba01"],["/The-most-important-investment-in-life/index.html","ac4da629fbe3318c86d6b2aa09960cb5"],["/The-most-successful-nvestment/index.html","1da788d3c5197a78f13ee49ad4eb2f04"],["/Transfer-Learning/index.html","42b6c6f772183ce88b154e0c48967ef2"],["/Transfer-to-computer-major/index.html","31100cfd53b74ea24f2e0a3eb5c50396"],["/UNet-Convolutional-Networks-for-Biomedical-Image-Segmentation/index.html","554267d5df78b83f3829fcea8fdcdf91"],["/Ubuntu-install-sougou/index.html","d9457b19f905d40437e1d09b1dc3c343"],["/Understanding-of-paying-for-knowledge/index.html","0c44854e08975db163602233ed776e1e"],["/Unsupervised-Learning-Linear-Dimension-Reduction/index.html","2c5208785f25f6d3c338035ea2978125"],["/VPN-HELP/index.html","fd9adc43fbc168e89d3b6c85ba09b7e9"],["/VPN2025/index.html","fe85f0d19a9f9088e5db8d77fd7bb6ea"],["/VPN2026/index.html","764acaa7d26b3f6a8ad132926b4ca35b"],["/VPN202607/index.html","f4b2d4e863a64082ab97f3a0aa2bff08"],["/VTK01/index.html","d3e9ecbd9347f2e68aa0a79d98971146"],["/VTK02/index.html","3e89f52182b6a365cd3f6f06a3b04660"],["/VTK03/index.html","da7596914d75290c6d0107097763fa8f"],["/VTKRead-write/index.html","d2672308475706e89acc7062746ced2a"],["/Vertx-Java/index.html","86f8b0b4862bf3cb0712dd09cbbe7587"],["/Vpn-OpenInternet/index.html","0e935cf214e4137a281abb1c60b02a6f"],["/We-are-all-good-kids/index.html","c4e772972ae837950b1a0e521d0491f5"],["/WeChat-80/index.html","6477e0a12185a3e7dee3061cd70436ea"],["/WeChat-red-envelope-cover/index.html","c40bba8c67ddea2fdebd0bd7982c80f5"],["/What-is-crawler/index.html","dd7fdff44410c50a4674d35f189f7207"],["/Win-Internet/index.html","16bff322d84efe3a6c02053486b137da"],["/Win-Open-Internet/index.html","b09a4bc9248556a806a89dd1d807aefe"],["/Win-OpenInternet/index.html","72864d2f8cfef2dc6f996741c40ddf7c"],["/Windows-Android-Apple/index.html","b33c40c5b5d501f71be77865a1bd62ed"],["/Windows11-2kfans/index.html","33f9686d7e3d085b06431a372527add8"],["/Word-Embedding/index.html","c9c7dd7fa55fe40ca4e94588314f39d5"],["/YuanShikai-and-his-Beiyang/index.html","7dfe34e8b0c4b268ff5c2eb33d1c7451"],["/Zero-copy/index.html","39fd86f8e50f35317e538decc0b8c90b"],["/about-keras-model/index.html","0f40e1abbbabd8245e10838eb389fa8f"],["/about/index.html","9d798943f1c9d854c17bcfb7499c51d3"],["/accounts-google/index.html","ecf8cfaf165ebe3214746f661974d163"],["/ai-tools-guide/index.html","a53acb8e1b465953421f20c6b50e4023"],["/algorithm/index.html","e52f3ef2386de6b6f3f93732e0605066"],["/alibaba-Java/index.html","12308934806d587e2d533a210aa41b9c"],["/archived/index.html","94cad4fa2dc877c74dc3307650fd10b7"],["/archives/2020/01/index.html","b17d79d7529897a4b4b97c66d0cf11c2"],["/archives/2020/09/index.html","5ec7bf19d5f5450229d807c950ce8958"],["/archives/2020/10/index.html","faeebeee4af4c879a873509393762dbf"],["/archives/2020/11/index.html","8edf7d72a439f297417e1fae5e47555c"],["/archives/2020/12/index.html","2fb635fe82bdb582fe4ae4aaaea65adc"],["/archives/2020/12/page/2/index.html","ce66dac722b9f49defcac9f9f710b259"],["/archives/2020/index.html","499d00ef0d699d08e7a624190ca7bebf"],["/archives/2020/page/2/index.html","37b65d2fa8f616597255c639319bbc77"],["/archives/2020/page/3/index.html","58af667ad0e44b09acab520ecbfb0c03"],["/archives/2021/01/index.html","aa97ad2d03c7261aea7b3147fde819f6"],["/archives/2021/02/index.html","47b422f88adfd39f7c1294f17be166b4"],["/archives/2021/03/index.html","afd65e60c306c37cca9d718595273b65"],["/archives/2021/04/index.html","4cbd5665dc80bb4e85edc8a18cabb3ca"],["/archives/2021/05/index.html","0193f8e813dfe18aeef226c7ce40c5a9"],["/archives/2021/06/index.html","6712bda79f390f1630fe06dcdc3a8f0d"],["/archives/2021/07/index.html","0acf2b695063d46ad4a66714512ad517"],["/archives/2021/08/index.html","ba9fc2bf368956ee0a5e1b10f1680d49"],["/archives/2021/09/index.html","ab02d236f5799b8d0fafbb56dfc8e330"],["/archives/2021/10/index.html","48e8773ffdf8ba38926206032e21a146"],["/archives/2021/11/index.html","0d778889e64a1be8ae4f871aa324b05a"],["/archives/2021/12/index.html","f7a5635dfadc7b876f221cdebc81a631"],["/archives/2021/index.html","2aa2f2bbe77bc424883c728b389b7f29"],["/archives/2021/page/2/index.html","033c4c766c77b77a3146bc353768cdab"],["/archives/2022/01/index.html","0fb8835f3fc2128b4ffbc946f4b695ce"],["/archives/2022/02/index.html","e3ce81f4b14c27bf37f07dfe03ecc0f2"],["/archives/2022/04/index.html","71a60f3d1177b6dc5ce836a7c9091f0d"],["/archives/2022/05/index.html","f968c41728436d3fe37a5cd4eed5dc68"],["/archives/2022/12/index.html","355bd15065065b50b638e74240a693b7"],["/archives/2022/index.html","8792034d300f3486fd7edb80a9f1da2d"],["/archives/2023/01/index.html","00f3f5221bffa1b76896de50aa51b9ba"],["/archives/2023/02/index.html","edddd4e846a0a2e73b321c128980ce4f"],["/archives/2023/03/index.html","233193e81293ffb90a98eab65258e859"],["/archives/2023/04/index.html","22b0580f0593ceafa60e859c9c5f2e75"],["/archives/2023/06/index.html","5d85ce2c36db0361c6b1749ff53a19e3"],["/archives/2023/08/index.html","cb1a1ad54fd610936f378797206afcdb"],["/archives/2023/10/index.html","2785063351864e33795bff4a40387587"],["/archives/2023/index.html","e9dea33d4dc825a16a0aa8168fa2c005"],["/archives/2024/01/index.html","a563feadae008d5b5cea2f6100d745fe"],["/archives/2024/02/index.html","704742bd5293b98f33064367bd82a782"],["/archives/2024/index.html","c76d269015e1f70dabc6fb2a5448a590"],["/archives/2025/06/index.html","614c8c0eb7fa20e8cc9efea6d81f490b"],["/archives/2025/07/index.html","a651d36af1284bf084345bda73e74513"],["/archives/2025/08/index.html","9e8f9cb410c235880cc5fe4378313fc6"],["/archives/2025/09/index.html","a13d99b2a4db0975c815567c2b855d7f"],["/archives/2025/10/index.html","d4aaf380cf78449ac2032a9dd4ddb6a1"],["/archives/2025/11/index.html","df22c96840e990ed9a668299d7dfe709"],["/archives/2025/12/index.html","9eeb5be90fa2a3d90e5992bfcd8dfbd8"],["/archives/2025/index.html","56f0059f4960d174ff64a942301b0947"],["/archives/2026/01/index.html","8f87d8ccd5b17e48b634eeb7f605d49f"],["/archives/2026/02/index.html","910e7ffe23bbaa7b70fcc2cc7d763a14"],["/archives/2026/03/index.html","ecbb36db4993a2247025ce1f398542c4"],["/archives/2026/04/index.html","e0c8f9c1ff0b342271e27e92db060c6b"],["/archives/2026/05/index.html","505de55d65b7fb0a2927c3e018727193"],["/archives/2026/06/index.html","498f551675ea45d2444ce53d657d7dac"],["/archives/2026/07/index.html","390350956f4816beb43304a5aa104826"],["/archives/2026/index.html","4c0aabba35ec96a66ac87e7f703a6790"],["/archives/2028/02/index.html","ac41e40169392f9bbf7e0183fefbe639"],["/archives/2028/index.html","36b7de79f14abf96d610b31d08e25c81"],["/archives/index.html","8740930a747ef5d436c974b817d8c561"],["/archives/page/2/index.html","4f22f0854b85ad19e43c2dee79de2325"],["/archives/page/3/index.html","523d860291cc1fb2094252f459ee7081"],["/archives/page/4/index.html","9673d4579a45d54d926cac1a63bbd848"],["/archives/page/5/index.html","5938ad3fa7ba3b5073b1c05c81faa7c1"],["/archives/page/6/index.html","5c54d347086c5d6734ac5e01ef8e56d5"],["/archives/page/7/index.html","bb870be14292a3b4beaa213dfffb0d4c"],["/baidu-search/index.html","f68593b0cf5f492a31eccd91c4d1a32e"],["/baidu_verify_code-Hh2fKNlEB1.html","2441f382bfb5f77d5171c66d545fcebc"],["/be-a-programmer-instead-of-a-code-farmer/index.html","f1b63be623c16bd2495524c88369bbca"],["/best-vpn/index.html","b2bfa95e36628b3b1219ff46b81f2b86"],["/best-vps/index.html","6c6b847dc5675e690e6288bede362158"],["/bought-a-house/index.html","ad7cd7d6d7f4385e8eb3b50b60072cae"],["/categories/AI大模型/index.html","dd540349c27dd3c970db7987c2b6a536"],["/categories/C与C✙✙/index.html","2df8c9711d832125e22baae818598612"],["/categories/Go语言/index.html","f53c2366d5d1d0e90a66a001f339a625"],["/categories/ITK与VTK/index.html","a6aee002badb4a3cf43267d276dbeeeb"],["/categories/Java/index.html","fc632412831c6b04ab2d20e56af73679"],["/categories/Linux/index.html","7ca02c1d02a9fbb24b0c19904652f3fb"],["/categories/PLC/index.html","dad2dda1274e5be22a52764ef6946941"],["/categories/Python/index.html","1a4bc6c396c4ebaf48fd076d27484814"],["/categories/SEO教程/index.html","6498357c15ae688779aa2ce4aff27177"],["/categories/index.html","b74a62eb1ca1477f66e55e57920013a9"],["/categories/图像处理与机器学习/index.html","c4b3d229c437fcb3c4337669585758b5"],["/categories/工具/index.html","df360d7fc69722deed776576dfc62e50"],["/categories/技术以外/index.html","37c746033a5ba791f22bf6016c69444d"],["/categories/技术以外/page/2/index.html","99ebbc31f2dd838e19b1e0e492399dd3"],["/categories/数据结构与算法/index.html","6df6c7f599890edeaf27f8dbcbf29fe4"],["/categories/科学上网/index.html","f70454bf48cf8f6e52ffbb760de96795"],["/categories/编程经验/index.html","ccafaa473722a3d5c8af3a4ae860dbe0"],["/categories/编程资料/index.html","742c4412dd115e12474440ff351042f2"],["/categories/计算机基础知识/index.html","2fbbc605282a3d8a16ebb8b65dc1d0b9"],["/categories/设计模式/index.html","343f148d4dde57e53ae2c13385a8b23d"],["/choose/index.html","53aba19ebba619c7ba8f53733ac4f4b3"],["/choose2/index.html","4b54b476e18be73b2e4d7d6a2a72a67c"],["/chrome-crx-intruduce/index.html","8336da58248eea3aac95ea04279084b2"],["/clash-free/index.html","7dee40a89dab8ffff96ce62b973c75d6"],["/clash-guide/index.html","76bd1f55b28bcd9d3a62d30c0fb3c4d9"],["/clash-pro/index.html","8f4aa87b14bc45da5d2a5712b9ad942b"],["/clash-verge/index.html","007b51203211fbb80a0f079ed9e9fd65"],["/clashvpn/index.html","75cc65cc651ca87cd35e26116e7e274d"],["/claude-code/index.html","3810ead3f18ac693f355a6e9fabe477d"],["/coder-blog-website/index.html","fc72724999239c7cb4a03221761e5089"],["/coder-source/index.html","a61e92f6a57ef837f8b8932e9d2c17f2"],["/coder-videos-website/index.html","1e6c228b4742e50d4a423c72d608faaa"],["/computer-book/index.html","fed2e002505236dd524cc3ced6a4aac5"],["/computer-censorship/index.html","af47604418e087dc672798d090f90d24"],["/computer-network01/index.html","76c0cb954221e96f68b6eded3ab81cca"],["/computer-network02/index.html","f02bab5aed7c2c53c068ee730aba7b83"],["/css/main.css","bc32ad34ec4990d934c3c647bdb62f79"],["/database-Mysql/index.html","c8855847cf766338a08f2de1d2fa92c4"],["/eclipse-lombok/index.html","1516e3606d24b685433916ebc57e9fae"],["/freego/index.html","442a1fa27b4d230a97d02f23116f8412"],["/fully-convolutional-networks-for-semantic-segmentation/index.html","61b8985a91f87cfe65c1102bcc1ab076"],["/great-firewall/index.html","b5109e1defd52aa47949362d030baf18"],["/halfrost/index.html","e2baac6ea86baece6ce0ad73f0378e8a"],["/how-to-signup-chatgpt/index.html","eaf863bead1991f59cf48a02bdc22105"],["/how-to-use-Gemini/index.html","d071889ad14a97f6045083e62868bffa"],["/idea-continue/index.html","180ae86bc252b96ca42b6de44148a03e"],["/index.html","cd6b041faae5fe0b4f6a51662e134d49"],["/internet-dir/index.html","ccc6d8e5cd8e91cb1050a311238bc2a4"],["/ios-open-internet/index.html","6c94a47c807331a1fe095c2045dac2be"],["/iphone-open-internet/index.html","bd04df4e64c0b650cd878904bd5cd4d0"],["/itext-makes-pdf-form/index.html","9cf5b935d3dfcfcb0f52f3ebd1578166"],["/java-Set-Map/index.html","e8d2d5dab4149b8d6b3e2a7073c86cc2"],["/javaweb-server-error-codes/index.html","24808abb7fd31f08b3aa97d6215a3fdc"],["/javaweb-source-code/index.html","4185bb91afdcf86e0d28ab918e414cdf"],["/js/lib/busuanzi.min.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/js/lib/lozad.min.js","47904d34a224931dd1b615c59a3dbe3b"],["/js/lib/prism/prism-coy.min.css","0ccad54d95845901ead59bfd3ecceb14"],["/js/lib/prism/prism-dark.min.css","a4711d2957d6605eb5682bdd228cf123"],["/js/lib/prism/prism-funky.min.css","efedcdccd7a9ab342d2d9cacd24920af"],["/js/lib/prism/prism-line-numbers.min.css","38e22e790c279bb56f9ec4b90a2a2d58"],["/js/lib/prism/prism-okaidia.min.css","5ac6f9de996fbec68aaa106dfb16e061"],["/js/lib/prism/prism-solarizedlight.min.css","ecc7e64d039873ffcf7fb27babdaeb5a"],["/js/lib/prism/prism-tomorrow.min.css","456af2a14ae4f5089939d5904ac40fe8"],["/js/lib/prism/prism-twilight.min.css","ebb5c355332a8cf9a1ce37a2a69d678f"],["/js/lib/prism/prism.min.css","a5234d614834658887cec6a9515890f8"],["/js/main.js","052d2b299d9c750afea8df0b802ab7c1"],["/keras+TensorBoard/index.html","3cbbfff0c2de745088d7189e6eee5d23"],["/keras-beginner-guide/index.html","85cf349926b9b95bd12f8fec016a16e3"],["/kimiclaw/index.html","246bb044502278de2b27880dda45deba"],["/kmp-algorithms/index.html","00f669de27d47af1ac584e15f94fb1b2"],["/leetcode-Java/index.html","02c00236c806b46ba878d0068f7b67a5"],["/links/index.html","da0d07f42ef0273d07a9b8c7f069d453"],["/linux-java-opencv/index.html","96ff92f6914ae87e45af5995766f60c4"],["/magic-internet/index.html","77b7991a7790c4d30c57097fb0eb8e6d"],["/magic-vpn/index.html","44cd233e7fb8b62b2364dc4fabde0c41"],["/mingci/index.html","283ce945c283383ec32e2aff1a9bdca3"],["/mobile-vpn/index.html","77329bf309be52a23291065445d3739c"],["/msb-source/index.html","f1b081b206a7a35d7637321ecef241a3"],["/online-BUG！/index.html","28673829fdfc235a31762c723c4a5575"],["/open-app/index.html","a855a94e83dd8db5f9545519446137f2"],["/openclaw/index.html","fcbfdd0e795463f30c1bc0f7876034d8"],["/openinternet/index.html","46622f694fe8405acab29fe14e11bedd"],["/page/2/index.html","01bb4d02a2e49dd923b46ba9b3beaccc"],["/page/3/index.html","dc87fa491fc82f1958554661204eeddb"],["/page/4/index.html","a7ac6f961119604651c5d73f8610a413"],["/page/5/index.html","44246794c508cec3f419455054a884c9"],["/page/6/index.html","1e2be2bba6e26186b2050ece5872170d"],["/page/7/index.html","b72ce7d4de23746e87845f838a5f5d81"],["/pandas-data-preprocessing/index.html","d90e42687e712a30d26ad3ed9b7b1275"],["/phone-win-open-Internet/index.html","9dca7bfefcc5e4e357b79da638d690f8"],["/popcorn/index.html","609da1dca4aec8f631363b9f9aa5f4d7"],["/protocol-cheatsheet/index.html","6e8e2c9857b918365b0c1d3a6d7ab35e"],["/protocols/index.html","e963240d7381ca437144139bafd0968c"],["/python-Blog/index.html","06da2dd11fd1a5cab3fe7f1f6f759810"],["/python-yeild/index.html","46262c36bfb624d92e8d91e0e3a55f31"],["/python爬虫教程/index.html","f6a3dabcfac50da77ee40c5abdd3b8f3"],["/rmux-agent/index.html","ea3fdc7618f4225ea846941cbd4348e0"],["/route/index.html","0d100d9966a427c9331276f26fff8113"],["/science-internet-guide/index.html","91746ef23c63ee74054512a60f27a0ac"],["/search-help/index.html","7d4da7c890609c081f6acf9f06885b34"],["/software-copyright/index.html","b2b8a8949185330dfca250412832a31a"],["/sw-register.js","eb5c5de6bccf14892bbafe368bfc4a4f"],["/tags/AI-Agent/index.html","e5bc6db0277568c1605880a1e4a9691e"],["/tags/AI-PPT/index.html","5c42bea9316ef38c417a3e0883f110f8"],["/tags/AI/index.html","c23d6721104ff9d090c0a1d0cedd88af"],["/tags/AI写作/index.html","4147cfba5961d0ed86b172a1e3c914de"],["/tags/AI工具/index.html","0c1061e856cb4ace39fa90059e576bfe"],["/tags/API/index.html","297656a7f7dcbae8c3789aa4a6c0c478"],["/tags/C-图书/index.html","3d7a3ce999b795474ddd6c5ec9d74936"],["/tags/C/index.html","f609b231b17e546d8dd412a151a131a0"],["/tags/CNN/index.html","1955ca50de53bffca9aef0300a520219"],["/tags/ChatGPT/index.html","3a9003c20c205f7754431aa71d775978"],["/tags/Chrome/index.html","67c35e40b193c15941142a0a5eec0d93"],["/tags/Clash/index.html","df340db69143bbcb946a73494f5691bd"],["/tags/Clash教程/index.html","772873ab676ab765b9beb9aeb0e7c98c"],["/tags/Clash机场/index.html","430beb79cbc58dae84442fcdc27d89ab"],["/tags/Clash订阅/index.html","d2992d5f98a1f0a82cef78446eee1d15"],["/tags/Clash配置/index.html","84071cd51490721e575a0bcb8120a233"],["/tags/C✙✙/index.html","41449ee608a7ab3971ccb1513625ff0f"],["/tags/C语言/index.html","8bb7ea29428348f4a434c847e1fa3905"],["/tags/C语言图书/index.html","adc51269887547ccba5b497db6c0083b"],["/tags/DSN/index.html","5e43f4b37b31bb9e29e5fe10848d2414"],["/tags/Dll/index.html","001ed4093f0ae16ae8dc7565a44162d8"],["/tags/ECCV/index.html","a050a2c93577d706d377640aaa1d1f63"],["/tags/EM算法/index.html","a2abffcfcb32bf75e8f723d6ba131278"],["/tags/Eolink/index.html","a196354b16f029cb2096d12f7518383f"],["/tags/Gemini/index.html","78bbc01b0f0edcacbb87dc3bbba08e62"],["/tags/Gitee/index.html","1327eb22d6ab4db996c8f0a40b2e681e"],["/tags/Google/index.html","0e103554a2364301671dd600ca902ef7"],["/tags/Go语言/index.html","245067c4422faf6ab934cb4b3a692efa"],["/tags/Graph/index.html","a363475366bd3dc25c414b6626a3f2fa"],["/tags/HTTPS/index.html","4522fa582c3a72de4b1a9a46021b581d"],["/tags/ITK/index.html","023d6f642e1167a8fc91490216ab83f4"],["/tags/ItkVtkGlue/index.html","179bab9db03d089299f517f719b05b79"],["/tags/JMM/index.html","e7bed94e33333261bb0a6af1b344a0f5"],["/tags/JVM/index.html","33e6ee45227fb0959a04fe89e965595a"],["/tags/Java/index.html","2990bafa8d2df0f90ea703a3d67ca77c"],["/tags/Java图书/index.html","34423f586bb5a3761352d06d591200eb"],["/tags/Kaggle/index.html","b804b811cf3340e406460f1887bfff51"],["/tags/Keras/index.html","78c6084c3107cc0d4db431e0caf025a3"],["/tags/Kimi/index.html","efbfd08c675d36af4f372bda869e9734"],["/tags/Linux/index.html","86d5be3d5b3fd453b8d7082e1f0bd6e6"],["/tags/Linux图书/index.html","c2cb44fc3182339c3b9e5a911618a62a"],["/tags/MEPP/index.html","18e3af42a383c6d6d37d43491b71ba27"],["/tags/Map/index.html","3a12ce540dec282c7f62f9037f01c647"],["/tags/Matlab/index.html","d00f43c5ebe8daec1afb9affa1560e72"],["/tags/MongoDB/index.html","a989050cdcd52b1c9745687e963afcb3"],["/tags/MySQL/index.html","bc053eb1e918ce4b2bf3e878e4a9b0fc"],["/tags/OpenClaw/index.html","5e54b556841411a217b6b99669935a68"],["/tags/Parzen窗/index.html","226b95314506029fc21a2560f34b3277"],["/tags/PicGo/index.html","905a4a44ab6ea0ac8fb34f092df1fbe4"],["/tags/Python/index.html","652a4b3fc89948f2abfde64fcd17845c"],["/tags/Python图书/index.html","9e6b89520c8063c52b2ef57b932f25cc"],["/tags/SPHARM-PDM/index.html","43da0d1ef26d969b117c63af1a556452"],["/tags/SVM/index.html","42a10d5ef6db47a695eddef864836928"],["/tags/Seata/index.html","1dda143886d265b8292ffdefe0fbb425"],["/tags/Servlet/index.html","fd8a30c7e04b4b9b94c1f9d016cfcfaa"],["/tags/Sping/index.html","2e4b1badec64e030884e04b40a35a5ab"],["/tags/Struts/index.html","6cb58a54dc6ab8196fed19ee18721f00"],["/tags/TCP-IP/index.html","ebdfc3d5958c434e4dbd4041589e9815"],["/tags/Ubuntu/index.html","e592d0fdee1e7f298d45d57bbb2fd144"],["/tags/Unet/index.html","b5aa7670d8866c2ebbf08318ced997ab"],["/tags/V2Ray/index.html","8a104026973c462845743d66ddf1c782"],["/tags/VPN/index.html","8597f3ef649ce406ccb26cb773fc2ccd"],["/tags/VS/index.html","5281c93665d2d5360e706eaed0f92857"],["/tags/VTK/index.html","cec5bab1502f8d61b2ec6230d918e01f"],["/tags/Vertx/index.html","82039837ca667accecf188992efb6d6e"],["/tags/Windows/index.html","283d80d9b5c0808c423f1c8c422711d5"],["/tags/Windows翻墙/index.html","2b33e57fa841036549ecd91e3dab08e4"],["/tags/claude/index.html","f6f2b7328f0c0eab134112871015e31e"],["/tags/edit/index.html","6aa608b9d13f38a91e00cb849fd750b1"],["/tags/hibernate/index.html","a56175218776d89773cfc6d755584c3f"],["/tags/iPhone翻墙/index.html","ac20fe3e39148762aa189ab53772282e"],["/tags/index.html","0ca51c06e6497e7b4ba7c85a3a3ad6a1"],["/tags/itext/index.html","3a8c0e834574f811e6c0e84fe2f545e4"],["/tags/jdk/index.html","f8f5436471fd89a3952ad6ff151d9ebc"],["/tags/kmp/index.html","4f00829a11496de717e248ecbffb640a"],["/tags/k最近邻估计/index.html","e82923056efa95cb86ed1f79c7a23a82"],["/tags/lombok/index.html","25ff6bc37ac7b591eeb784038f45a144"],["/tags/macOS翻墙/index.html","7f199a8cb14f55cea4552e5f4ef27b6b"],["/tags/offer/index.html","d8c35f2ebbfac59825ce5eae9961d819"],["/tags/opencv/index.html","956a6f8e4afb0b81cfb9af5af71f62df"],["/tags/pandas/index.html","1b71f55ac3c1d462eb8918b3410ae43e"],["/tags/rumx/index.html","b789886ad86cd4baef94331c504c8323"],["/tags/string/index.html","a9f3f1a0d25b676b9f6df4a29b5f0311"],["/tags/vim/index.html","52b957a92344a158d7058919ec47b189"],["/tags/vtkPolyData/index.html","3ec816b6ce3f1aeb20b498fe7392c101"],["/tags/web/index.html","93ed4d31cdbd04d28179d6c5981e22e8"],["/tags/xshell/index.html","c6f4e362a82a99ef36957c539e49f80a"],["/tags/yeild/index.html","e7a14d391c8aeea4cddee2dc3367eddb"],["/tags/互联网/index.html","4388c9b43b49746ba8b4b89222f2cb64"],["/tags/人工智能/index.html","2cd0d30ce96e1f4fddcf0d1c1642b43c"],["/tags/代理客户端/index.html","79df26feb47a92cbaf0a559fdbeeaeac"],["/tags/体绘制/index.html","006e66dcdd94bc7b54591ae2098ffa41"],["/tags/全卷积网络/index.html","d0836813812558676507cf8cbf421f46"],["/tags/公众号/index.html","e796cf7bbbfc05f6f498d92eead746ef"],["/tags/内存模型/index.html","c48de16bc06e8452f8923db05a916d92"],["/tags/内推/index.html","c0502c94580d8bbff30e2142be2b634c"],["/tags/函数/index.html","e97215f2698e8e68886a22391642ad6e"],["/tags/分布式/index.html","2fa79e06b6b5b08d18dec8b500b20a7a"],["/tags/加密/index.html","706db6df302164e1098f3561644dd4fd"],["/tags/医疗图像/index.html","38eab98fc1285bd9d09b47798a47e60f"],["/tags/协议对比/index.html","0520a3ae23998f101bf1423193dcecca"],["/tags/博客/index.html","b520143393bb92f1a467230116e5b883"],["/tags/图像数据/index.html","461d78267c7f16b2b9750f20693dfc7b"],["/tags/图谱分割/index.html","f83edfdc249352aaa4e55be24bbf2399"],["/tags/垃圾回收/index.html","557e4d8044807d891e80594cb87db18f"],["/tags/多线程/index.html","119dade3dc508dbb9c22c6f1ae12d2b2"],["/tags/大模型/index.html","dd3e8d06bc6e6bf78a17230247b9d726"],["/tags/字符串/index.html","9a9b4d91ad3d58856b635c891496e997"],["/tags/安卓翻墙/index.html","4d8949913502b0519c7de75315c99d29"],["/tags/小龙虾/index.html","346c6b2841b727490bd0dd13aee2ea76"],["/tags/工具/index.html","1dc6d1ead012a10295d55c44364c46f7"],["/tags/弹性形变/index.html","799ad3f609bd0d94f88b5046024ee6e8"],["/tags/排序/index.html","3a506c22d4563ae679583d1316a3d042"],["/tags/搜狗/index.html","76878581f195da0c2b80e2e788fac0cb"],["/tags/操作系统/index.html","2313d12c81614027829260e5344c254a"],["/tags/数据库/index.html","23386eebcb24d603f4b7d0a59e4aa1ec"],["/tags/数据类型/index.html","8c21f343be96fc0f763e629129514bcf"],["/tags/数据结构/index.html","411be16da006f3a4b640f68564b925b5"],["/tags/最大似然/index.html","7bd450a4f26596b0ab0263920d3ce1e2"],["/tags/机器学习/index.html","068089ec73837cd3e7c62c87dc80ee95"],["/tags/机场/index.html","ee4d7337e5d276a60565c8aa0b4078a2"],["/tags/机场推荐/index.html","4d9b9e6dad470107c1ee9874e948729a"],["/tags/树/index.html","acc4d1f44c442ff9c5cc4ffc50efc1c8"],["/tags/框架/index.html","2f9691b7862fbbbc4a41d1c21723741b"],["/tags/梯子/index.html","1bbb1206e80e6e634bf9b6e456d50b38"],["/tags/梯子推荐/index.html","06a1cdb3c281747e2c1b23416c6da7be"],["/tags/求职/index.html","2601ad758936f8276778c56640f548a0"],["/tags/汇编语言/index.html","8572291d65496bc25c08005ee7f97b7a"],["/tags/深度学习/index.html","5fcbe2593550efef0964f460cd64bf33"],["/tags/深度监督网络/index.html","ed2c8cd70a230e0f9083c63806917691"],["/tags/爬虫/index.html","b4119458eb3ca388abe2036f1d3831f5"],["/tags/电子书下载/index.html","b3da5bedb0e4ced0eecef5f231457f5c"],["/tags/科学上网/index.html","177b8db04ea9b73ea300164bcfa11f4a"],["/tags/程序员/index.html","258761b67e6e66446e8afc2633419d41"],["/tags/程序员面试/index.html","fd8411c2d35175e99d9767a102b56983"],["/tags/简历/index.html","b188315a56f3e8b4ef3cae75e7f0d7e3"],["/tags/算法/index.html","1c1fd03da2e1f695d751dc11914e4ee7"],["/tags/线程/index.html","9e0ad7300f9bf1a62583eb5c6a3427cb"],["/tags/经验/index.html","b7f8e14e6a11a519be714e6674d188f1"],["/tags/结构学习/index.html","92f7eca4b6a665bcbe46fef6701a12f5"],["/tags/编程/index.html","1e5f37dd28b387578cff5b5772b000ef"],["/tags/网站/index.html","418cd9ee0a21be7691b8a37b3ffa2d44"],["/tags/网络/index.html","365c7cf386a00fec28c236cdcfae4c7d"],["/tags/网络原理/index.html","982eab3c8cb1428bf64ec96b475a4d76"],["/tags/翻墙/index.html","1a3b77d642932019ff3f26a4b8015f30"],["/tags/肝脏分割/index.html","22c0675029fcda91d404915003fe3007"],["/tags/计算机/index.html","8d992e7f7efc21c4e5d99a7aa9c6e75c"],["/tags/计算机专业/index.html","c9e0d86da6a678c48e4d87f22a986177"],["/tags/计算机网络/index.html","46cbfa553d6e705d4e38736b15f7649d"],["/tags/设计模式/index.html","18043876f18e99408e1466353277dd67"],["/tags/贝叶斯/index.html","b34057543af32f27315b92078365b8e7"],["/tags/迁移学习/index.html","6d279e942b08a83975fc4a84eef24889"],["/tags/面试/index.html","62c559045c713fe6b84d2b2d2a5a83ca"],["/telegram-search/index.html","391214189ae97c37c81d35eb21993e27"],["/the-meaning-of-reading/index.html","5cff110077d9b09503235350cab71162"],["/the-way-of-pragram/index.html","1e287772e3b3c3b59038b7f74c01e104"],["/troubleshooting/index.html","9fffd493710c220172d3efbfa347e654"],["/untiypro XL安装/index.html","1d5dd4f37f449c477e1f0e498f366ccf"],["/video-websites/index.html","1641ebed4f08cd16d836673198eb9667"],["/vpn-freego/index.html","8c5e3c575e783f781a74a9124c97a106"],["/waibao/index.html","7546c3e30e1720df27138c156666911c"],["/wechat-fans/index.html","0386cef1482bdf9cf19080fb5764549a"],["/window-run-VTK/index.html","a72fe5f5ae7dcbf70e22e36d5c3b3d52"],["/windows-science-internet/index.html","84a4188bc02d6b4f6386e918a3e3c8b1"],["/xshell-connect-Linux/index.html","f4192d30a4333c9c06c8a1ed32187a28"],["/yzhx-vpn/index.html","023b40a28c1b41620e42f75152b05327"],["/《Java高并发编程详解》，去大厂必看！/index.html","cc5e02cb7b5468839edc6648ac844d1e"],["/一分钟没了 1.5W 。。。/index.html","4778158dcec7b7063931268930ac233e"],["/一条高产爆款内容生产线/index.html","1926ca79828b4efe14f7695354e6cd2a"],["/为高考学子推荐的六个就业前景广阔的专业/index.html","f15ce636826f5b157c8424e9b0df315a"],["/互联网赚钱机器---社群/index.html","5b2f1a4ef20fc9daf57fdbd75b1440ba"],["/你们常用的工作方法和思考方式是什么？/index.html","920d26ae232eb68c9183a6d3b068f602"],["/关于环境配置的一些事/index.html","addb84ceb8b85f430f9340139021db93"],["/准备了19w！搞事/index.html","8aeb34222224fa5a2fc599fd4cd6db7a"],["/几个很重要的感悟/index.html","8395a140808007ffee287bcc0f8a0e20"],["/分割ROI篇/index.html","3f5c22f2f291764f0c34fa60858834b4"],["/分割精度说明/index.html","9540d1c256caee7d03a747c214f1a7aa"],["/分块程序执行/index.html","b02805cae3c962bbdb78881f387e9606"],["/加班公司黑名单！！！/index.html","10b769afedc87f3e8b8a2ecc8fb7c83a"],["/卧槽，上知乎热搜了！/index.html","3c90d2e974d988bf3ab69ae750fcff53"],["/卧槽，我的小破站爆了！/index.html","d8e7a5711f6e8df1f2a74261a694aa1d"],["/卧槽，我被盗版了/index.html","e932963b07ac4abb7ea8f410f64bc1c4"],["/卧槽，还有985大学在大一上C语言课？？/index.html","13240f45f8a12327b687d067de21905c"],["/历年微软面试中出现的leetcode算法题/index.html","ad44b3de982adba7daaa4b1b8b38aa61"],["/去特斯拉试车了/index.html","978f3f183bd31caec799a1c215d42dcf"],["/吃苦的三种境界/index.html","bfcb34eb25c6e58a64605aadfb9e271d"],["/哪本书适合推荐给 Java 初学者？/index.html","b3d16cbbcb9fb1c0b840d0103920c5d3"],["/哪本入门级的学习数据库的书最值得推荐？/index.html","7ac3d87fb792559ecf18a8e395ea5be5"],["/国内外常用的AIGC模型/index.html","bf997ba843f1768315fd5ef02c52fba9"],["/国庆假期/index.html","c9d7eac216d2902df22633dc311383f3"],["/图谱程序字典/index.html","d983553cf3f1bd8e6b85d3f96c4e13a4"],["/图谱训练与分割/index.html","244ca7c7527de2eb4bb3b49a31b2110c"],["/宣布一件大事/index.html","9522aebc2bc4c3661b42749e71c1829a"],["/小鹏P7i试驾体验/index.html","8d027a5ab65cf5114917c63464c55bf6"],["/微信PC版3.3.0内测更新，电脑可以刷朋友圈了/index.html","6c06030931d86edb8cd4f4a1414b82a0"],["/怎么更快的赚钱？/index.html","f744e7025f2b59db8877c79613e42662"],["/我毕业了/index.html","d252b1c523ec36e2c0ee07e12bf9fb0e"],["/我！真！的！找到了！爱上学习！的方法！/index.html","14c47b2cf17db17c71ec346b29f83341"],["/户口的意义/index.html","012c7f40ee217a027a81c8bb248f7a50"],["/推荐两本经典算法书/index.html","47f037e2d906ae434377de89e245e913"],["/推荐几个在线学习SQL的网站！/index.html","8cfd020363714fc212b876681474d70a"],["/搞了一个程序员成长晋级社群！/index.html","cccc5a5b3b5e82ed15598ecdd1eb2cf2"],["/摘抄/index.html","2c740cb4ca88fdc11771c0b49b3930cf"],["/暴跌30心态崩了/index.html","4410bcbec6260ee8ae97e0b3eafd332d"],["/最近很火的ChatGPT到底该怎么玩？/index.html","aded8c3b71640e058b0a50bbefd25654"],["/有哪些好看的日历可以买？/index.html","854ae24ce4a4e08a7714e195132d66a2"],["/服务器有啥用/index.html","0b8e42968771d53b0c1b880334277663"],["/来长沙了！/index.html","6d17e47e1f257c35a9086a53e36892fd"],["/校招污点公司名单/index.html","535e6458a22864d2de7610bdb810dc90"],["/梭哈200多万/index.html","385ec67a7fc31bc163407c94b85b1cf9"],["/梯形图入门/index.html","eb827a351064d473dd9c41b10ec43ef1"],["/橙心优选，凉凉了！/index.html","ea69c4d45a7e340ecbe3bffd2eef40bd"],["/比亚迪汉试驾体验/index.html","ea7f988d441432afe94d49f38cfdf200"],["/清华转学成电，真的牛逼！/index.html","e32d9ecb4ff96782c55c68cf3d16505b"],["/滴滴程序员被亲戚鄙视：年薪八十万还不如二本教书的/index.html","43ab519b5b453a136f839dce6a47bb4d"],["/社群！/index.html","02d4699ba2b4863ec723bcd5a71d456a"],["/科学上网之VPN篇/index.html","5bd115e54fcec3fde93ee40d4e3fb038"],["/程序员必备的几个技能！看完你也是大神/index.html","b278bca373cc7f032cf8bfc932f10347"],["/程序员绕不去的槛，Linux！！！/index.html","209a0288249dafeea22e2f8967419da8"],["/蔚来ET5试驾体验/index.html","31a62c674699ee9ca004da43e0b87524"],["/蔚来，牛逼！/index.html","0cd1ae3c7cbbaf5bcb353e1a597e4b33"],["/被录取了/index.html","853d9bc557be3cf23cdd2b8d5a688f14"],["/被找事了！/index.html","6b680b31a0504ee847361a1ca7a3ad75"],["/被拉黑了。。。/index.html","992dcf1a85c18eb61681c3647d2bb7e6"],["/被车撞了！/index.html","cf4339e0e4bf45056fddf29daca418a0"],["/该如何选购固态硬盘？/index.html","df25f494ab14f7f0491692d6d7ffb531"],["/这本书一定要看！/index.html","4c45129393dfd340b0dda87a13646552"],["/选Java还是C++？/index.html","4755bc065dcd89e813190afc2da56323"],["/那些让你起飞的计算机基础知识/index.html","2ff0b7b462d27ef2e1372c2bf80afb13"],["/靠这几本算法书，成功拿下大厂offer！/index.html","e4c5256d21eb598b34e9659f677ff587"]];
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
