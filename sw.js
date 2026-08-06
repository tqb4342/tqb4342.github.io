/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/0010-city/index.html","85c5bb5846d5235918842f0164af3b06"],["/10-algorithm-book/index.html","0dc05972f241f3d9caf10dfea7da41af"],["/10-website/index.html","19afba0d1494ea435884efdb4f7447ee"],["/100万的小目标/index.html","24eece6ec7138caf3f5d1d2770f30481"],["/10w+YYDS！/index.html","4eef685e942660d77e2edc3af26b37e1"],["/10website/index.html","36167d78566c691867200aa53ac9258b"],["/12-technical-tutorial-sites/index.html","43ea75957ec34d55303dd18d57d57178"],["/2 6 岁 了/index.html","e21f4046b2e4a85345a0d11ea1d3a0f4"],["/200万，啪，没了。。。。/index.html","ba0527befcb2a347dc54538af183b4ae"],["/2018ECCV-Paper-DL/index.html","43ba985446409978029bd69629888bcf"],["/2021年固态硬盘选购最新攻略（小白避坑指南）/index.html","a1b8b60e8118be1b472abc9537c18d65"],["/2021机械键盘推荐/index.html","2fa061fbfe6fa9ba7f46acae8ead08c3"],["/2025-07-15/index.html","605cb74664197c1b9ecc12f50fe44ce3"],["/2025年终总结/index.html","a10327c840dfba9fec9e0822520cac9d"],["/2026-Open-Internet/index.html","1ec25e844ca2dccdb190020da7f31fcf"],["/2026-best-vpn/index.html","55eccd5daa629bceb6a5b6c98489ece0"],["/2026-clash-vpn/index.html","e8fc5d41c5f59ea42e840885f4930216"],["/27岁了/index.html","fc14278dcfc6ea90a43ae1d504b0b430"],["/3D-Convolutional-Neural-Networks-for-Human-Action-Recognition/index.html","080273bf874dbc7cba0c0398f06f12d0"],["/3D-Deeply-Supervised-Network-for-Automatic-Liver-Segmentation-from-CT-Volumes/index.html","bb4576a55f2404abb7e925e990a85e32"],["/3D-Unet-Experiment-notes/index.html","edfd764170f18e829ead423ccd2d434a"],["/4-Software/index.html","3bd95f0c74a8f206125c95bb596664ae"],["/6-website/index.html","cac789886dbf7e00bf5668e43ee9b376"],["/7-terminal-tools/index.html","8e964974f006f628f8ef2ea25bee18f8"],["/AI-PPT/index.html","552ab27eeed392963ae1d3946181e7f4"],["/AIGC中典型的深度学习网络/index.html","de226617384f16ee8f628a5c3717e808"],["/Accessing-the-Open-Internet/index.html","de6f424e79dfe0a69fd168687ed3235b"],["/Agency-model/index.html","7b3be72074b982965d9ffeb2e03beb1c"],["/Algorithm-brush-notes/index.html","f9a14bb7ac4ca18dcdb987ab771456ee"],["/Ali-recruits/index.html","64b22586c7f0a0bf262457795cae1cf6"],["/Android-VPN/index.html","009df7972caf5b870c76eb3b343a05c5"],["/Android-open-internet/index.html","0fa90b9832d431b57b181f817e8b4b33"],["/Appearance-mode/index.html","d64c0b7e0b24dc4610ac1aea2a2520fa"],["/Backtracking/index.html","146a8db6b7b3608d61380f8b8a975a24"],["/Baidu-Sao-operation/index.html","5ab4ce87acecea977edfca435afa76ca"],["/Batch-Normalization/index.html","b52290c2b250f9eeebd11cd1bbdc1d54"],["/Best-AI-tools/index.html","a6fd3532450fe023737f8d2832cc0ff3"],["/Bias-and-Variance/index.html","30bef753d9253a579006d64d15a74f96"],["/Binary-tree-traversal/index.html","e680558ba421d23bd08f0f35a45e37d0"],["/Branch-and-bound/index.html","d41096438cd7f64eeb8d68ecad14e263"],["/Buying-computer-for-the-first-time/index.html","338dbec337f82648533ef59c661201db"],["/B站向北邮道歉！/index.html","5b88f7c6d818fb74eebaa1da6312b38a"],["/C++-string-function/index.html","bb090f552db5b059f2a15cf3b8bbff24"],["/C-Java-DevelopTools/index.html","5fe16c430ee46583ec309451e0f8c1d5"],["/CS-Classic-Books/index.html","4e2d67fc8a3b4f853f3c543a7cf28ad2"],["/CS-network/index.html","e55de38fd32020671195e9683d2e1587"],["/CSBook001/index.html","8ac63ded6e64ed737fde875cfe203662"],["/CSBook002/index.html","2f7e21b3b838d64107873c1d53dac43f"],["/CSBook003/index.html","f63e8e882b5c9a7657ecb147448665ca"],["/CSBook004/index.html","23c7cea16e9078a3ee4896622fe778e5"],["/CSBook005/index.html","550c6366882f9bbf1d87fbd655c79ae2"],["/CSBook006/index.html","f5bf9cf5ffc8a31e7c74cf5370b12e48"],["/CSBook007/index.html","2e3d6589a126e349260efe75f2871b7e"],["/CSBook008/index.html","5d0dc3348c71dd36384812c651926422"],["/CSBook009/index.html","e6fc4e84ba7db67d6867a26eb73341fd"],["/CSBook010/index.html","43146e6261b46e96a48f4e4852b5a8ad"],["/CSBook011/index.html","c9bddc0c4b8b599f7dc35554a7f05389"],["/CSBook012/index.html","81e3f8ceb8997d1941f4612fa59122f8"],["/Changsha-really-fragrant/index.html","1d8cfd4abd6d82eac3c2c9d32d2d8f06"],["/ChatGPT-VPN/index.html","2eb698fa139c0c5b1057b023e70b54c7"],["/ChatGPT/index.html","ccfc4adc6842854e431983691787829c"],["/ChatGPT！王炸级更新！！！/index.html","4e1f4191a9bd96582fe0f08821a09801"],["/Chrome-crx/index.html","dae838d9af33a58e7fc8a47da58a746e"],["/Clash-Party/index.html","0de009677c1f752d7932b9416ad69547"],["/Clash-VPS/index.html","4ca4caeba2a3daadade9dca5268dde52"],["/ClashForWindows/index.html","2b9e6773c5f1206c0ad058cecb52811f"],["/Computer-Classic-Books/index.html","2a402d57c87194e31841e68eea3b0764"],["/Computer-for-another-major/index.html","eca5446f82c47462e65d32952b3f9f02"],["/Conditional-confrontation-network/index.html","75e37f76fa64f37cb7cb4a8f14075c14"],["/DNN/index.html","ee4b283a34a9f1d3130cab2bb305c302"],["/DSN-segmentation-liver-experiment-summary/index.html","83d5ab8f23fddc796f22e9e2e567c7c6"],["/Data-enhancement-elastic-deformation/index.html","f43df41347b75532777ad9b91e4c60f3"],["/Decorative-pattern/index.html","e6c9abbcfda670c689f6b19d41ca6b91"],["/Deep-Learning/index.html","558c4e7e6ba291800ab419db59a31d94"],["/Deep-learning-and-medical-image-analysis/index.html","00b54f7449c79e4dc58fd48599a902f8"],["/Deeply-Supervised-Nets/index.html","2e653920e736b3c4228b32072511fa83"],["/Deformation-model-based-sparse-representation/index.html","1536a962646c7cce45c61485f331e06d"],["/Discriminative-and-Generative-model/index.html","37e58b6d174024cb7abfe959e68e2d40"],["/Distributed-transaction/index.html","8fcf91d4dc189c310f87245bf4e70f5a"],["/Divide-and-conquer-algorithm/index.html","7322f6760d3a770bd2f5af8bc93fc48c"],["/Dll/index.html","b4fbf9bd29a98ba665852dff9ea462ba"],["/Dynamic-programming-algorithm/index.html","695eaf214c4c81529af862efad6a2494"],["/E-book-download-commonly-used-by-programmers/index.html","150576b4e8247e003716dd8d3e09c772"],["/EditPlus软件的安装、激活和配置过程分享/index.html","aece6e57a64ef424d90958526351da93"],["/Eight-sorting-algorithms/index.html","9b8aad4f09f6629a20285847bfbbbbc8"],["/Encryption-Algorithm/index.html","3f17a6a39cb7becf30568c825bed8268"],["/Eolink/index.html","5d8d4a485307a02aa3b6ea1a5cacacb6"],["/Factory-and-strategy-mode/index.html","7d8f555b98a3caa5f83500b09b56299e"],["/Foreign-technology-blog-community/index.html","0c3f85bb99385642b9159510adecbac2"],["/Functional-model/index.html","3fbd85504c53f8a92ce4953e601d6474"],["/Fund-type/index.html","de02477edd3416ad110dc59e10e5b707"],["/GPT-4o/index.html","7f4fc818597ba4f7070343de75f245bb"],["/GPU-medical-image-processing/index.html","93b514b9af6ad353627250de08eaa90f"],["/Gemini-pro/index.html","1f0fdee6097f492ad2880844a1a221ed"],["/Gemini-vpn/index.html","d25f23075354412fdacfd4df28389aab"],["/Gemini/index.html","f506fdfb0509f3d1cd499ec216caef0a"],["/Generative-Model-of-Unsupervised-Learning/index.html","0ccc0eb44bdb570a91d3b0df2a44f957"],["/Git-Learning/index.html","8a0490c818fbc98143f22e850a5578e5"],["/GitHub-2FA/index.html","d07706e604bee37693d29b23609ab700"],["/GitHub万赞，程序员必看操作系统总结！/index.html","600079987266f6b25a15119bc6f24c17"],["/Golang-book-recommend/index.html","67070a53d77f8d37fbbb131bc3dbfac1"],["/Golang-learning/index.html","022f9477025d0c74cae3918286d9d27e"],["/Google-Gemini/index.html","ce22c91486cd9757627949cf2be8a15b"],["/Gradient-descent-optimization/index.html","15620e1cf6e9a5595b09812a2b93abe5"],["/Greedy-Algorithm/index.html","4d15c0c6019a93875c71ac022421455c"],["/HAND-User-Forum/index.html","047f118ab493dadb71cfdf2162bb65c6"],["/HK-bank/index.html","19e13983d0fff9d0cbb802f3b238b1c5"],["/Head-to-head/index.html","e0d3054c486427fe69d55cd60c5cf63d"],["/HexoPage/index.html","512e5114f6004a9ef97bf21e9873af6b"],["/HistCite-Pro/index.html","c733dd666570015b0ea8bdcdfdaea716"],["/How-does-the-program-run/index.html","bf07982c0f074d934bea7d1812bd8811"],["/How-to-judge-whether-technologyisreliable/index.html","8923a52cede820778e56ba5043bba923"],["/How-to-learn-design-patterns/index.html","2ac56e7e27b0c3172612ecbc90e0ba3b"],["/How-to-learn-design-patterns？/index.html","d3e00cec1c137cb448486848aac38a68"],["/How-to-teach-yourself-programming/index.html","7e77d32f7f8115d350854623dd8eeac0"],["/How2learn-Python？/index.html","24e0f0a785de917a4e63c7d418832721"],["/IDEA-shortcut-key/index.html","32bd03d5cc6db4dd2941ed8ecdb7d06d"],["/IT-interview-basic/index.html","e72b3854081784474e604409ce67513c"],["/ITK-VS-install/index.html","5d5f67f656b6ed147075ef218120116e"],["/ITK-VTK-ItkVtkGlue/index.html","cb11fe42949f84b3da4359a713ac9026"],["/Image-processing-plus-noise/index.html","095a21cd14878f926089fea9e56dce6d"],["/Inception-Going-Deeper-with-Convolution/index.html","b7672ea0a4653b5d6c149bd2f4803398"],["/Information-Cocoon/index.html","ce05412958f09ba93a466784ca4de796"],["/Java-GC/index.html","ee7aae2cdfb6b160624f7553ac17f10b"],["/Java-Servlet/index.html","c4b6989604d3fd39d202246a34bcce32"],["/Java-array-and-collection-sorting/index.html","b501491d51a6baf6313b61de10a83466"],["/Java-development-tools/index.html","dadc7a9b1052d93ab3a4d158fe78555d"],["/Java-eight-data-types/index.html","3b4474ffbc9b72d04c50533396e78948"],["/Java-interview01/index.html","78d50e0820a2ae7408fde02ae5c21167"],["/Java-interview02/index.html","19c422edb0ea72d161512b5819f1dd2c"],["/Java-interview03/index.html","be2e5645510139577b47ee604f18be5f"],["/Java-learing-map/index.html","5ec26d9efd88e4378a3e88d12f5e1f87"],["/Java-learning-route-map/index.html","19af52af96b7c3c00ea2145e535101af"],["/Java-memory-area/index.html","92b14fabdf49f517dd40643f866e8250"],["/Java-memory-model/index.html","db7e7b2ddc4293abc51ee254a728710e"],["/Java-multithreaded-learning/index.html","0264dc635323fc340f941ed54e284f56"],["/Java-project/index.html","1f9f22ee2bd02a32b3b46b1c4bfb1983"],["/JavaWeb-Chinese-Garbled/index.html","171c6070da5d9c99a8bd9b0afafef3e0"],["/Java还是C++？/index.html","2daa973348b81758b1c1e8c40fd3e48d"],["/Kaggle5-step-guide/index.html","a9299c7532d9bf9ef926ea98fb4d490b"],["/Knowledge-points-of-Java-garbage-collection/index.html","6fddd68ad6dd4bd01708c08e9e7a5f4a"],["/LLM-DP-TP-EP/index.html","98670178fc20c9e908024e23e6d6e2c3"],["/Layoffs-Hiring/index.html","73276738ab737753d9b12807e16207e5"],["/Layoffs-and-Hiring/index.html","dd8bceb098a8f039bb8cfb87bb1a746f"],["/Linear-regression-of-machine-learning/index.html","8c5857cfed409165614396b82aff4dd3"],["/Linux-Compile-C/index.html","5318ff9b83ebbe8a9c4edc640ded549a"],["/Linux-ITK/index.html","96363bb7b87a4d8952d1b89283043ac3"],["/Liver-segmentation-of-sparse-components/index.html","a7c5955f84a23ac75e5e4a9cd012f1b0"],["/ML-EBook-paper/index.html","742442e78d8ddbfde715b6ba018743a2"],["/Map-uses-multiple-maps/index.html","dfae7115c8648242163dd4d4741177d0"],["/Marching-Cubes/index.html","788af9e39420a179309551b2abcae342"],["/Matlab-Graph-cut/index.html","ff3ca6ca51b06bb68b952b47dbe1ea4b"],["/Maximum-Likelihood-to-EM-algorithm/index.html","19d3c79c1c93c7e38ca8fabb914bd47e"],["/Mean filter and median filter denoising/index.html","926f8fc50e0c73ee14cce62199dd1cd4"],["/Medical-Data-for-Machine-Learning/index.html","11e4ca72d9e7937fed823057d28f3d7c"],["/Medical-image-analysis-deep-learning/index.html","d4a22707ae1767a4217f4ec62d8d24ac"],["/Medical-scan-image-processing/index.html","ff388375394508e98d466e284f7fc0ae"],["/Merge-sort-algorithm/index.html","affd438d58f477086807484ff5824c72"],["/Monthly-income-2W/index.html","25031b41bbe19283af63ad99c8c5a833"],["/Mysql-database/index.html","1c77e9548f1be6d6ec1561532c7d5656"],["/Neighbor-Embedding/index.html","efb286f8e73c9cec788ce2da1f183486"],["/Neighborhood-approximate-random-forest/index.html","6a823394f8d9066da9c79bd091a86813"],["/Net-and-official-documents/index.html","cac0abb7906e7c872df16e4525c57527"],["/Netflix-VPN/index.html","3f2f418d9a2821bb9f31071b8b2ab67b"],["/Network-principle/index.html","f80b96c9e081abaadd9870043909f795"],["/New-Hong-Kong-stocks/index.html","a3d2ebdce985edc28f0e1134bc3366d3"],["/Nice-to-meet-you/index.html","82e5baff545dbb1c8916a5b858f79bb5"],["/OS-processes-threads/index.html","c1d287883386bdc634617e101a7d522f"],["/OS-run-environment/index.html","d1623709682db199e41a7b0e77446916"],["/Open-Internet/index.html","1ad669b277c1f06335eea2b58c8de1bd"],["/Open-Internet2/index.html","c624598472dc34fd6355c7976a99a043"],["/Open-source-community-and-rewriting-website/index.html","87d5faf291d3e8ad73890d4b83975e48"],["/Panoramic-image-stitching-based-on-SIFT-features/index.html","ab09aea3e7ca63f77b5a1b74c0c0c59f"],["/Parzen-and-KNE/index.html","2a30641d4ea8baedc1d79e50cf290230"],["/Personal-technology-blog-site/index.html","b5a7b6196b837e24af4102b95e704283"],["/PicGo-Gitee/index.html","92b0408e3d53c26e3454611187718745"],["/Programmer-treasure-chest/index.html","51350d5f768ebed9027a78606b0d8211"],["/Prototype-mode/index.html","80d8d551b7a75f7e718d220be5b1a2ef"],["/Python-base/index.html","fbf7837b8e77c0b309e8f98f53c0206d"],["/Python-crawler/index.html","9ef70bfcd3056283e3c15387ff198b41"],["/Resume-revision-suggestions/index.html","7004ef58a3008e39449da00b77e4c977"],["/SEO01/index.html","964d9899339b4f26136c1c22b297a0de"],["/SEO02/index.html","a51269fe91ecf52ce6dc842e75af7de7"],["/SPHARMPDM-MEPP/index.html","1f4e53591f755eaa4aa052504538ff8d"],["/SVM/index.html","52e9830e9b4cebf94066d8387a0340e1"],["/Seata/index.html","2256bb8dabad1b985ba1124c9864fd6c"],["/Semi-supervised-learning/index.html","428687f9be0a904aca766a56906783ab"],["/Sequential-model/index.html","d59839b403003281841bed0a72e4de31"],["/Shape-Based-Human-Detection-and-Segmentation-via-Hierarchical-Part-TemplateMatching/index.html","4f8550c04597598efd1c754a115687ac"],["/Spring-basics/index.html","614393f873c56d1e706bb0461f676509"],["/Spring-integrates-hibernate-Struts/index.html","14c733c8c3c9427bd0b952b1a5b1b7ea"],["/Structure-learning/index.html","b943e47bdb2ea42e288f736d9e98aa31"],["/Suggestions-for-self-study-of-computers/index.html","dd7fd57624976aeab3144363901fb63e"],["/Summaryof-HongKongStock-Account-Opening-Links/index.html","a19328c9922b7bedb544bea3970aaa89"],["/TCPIP-detailed/index.html","6084c1cb626288fbaf7194dd9b7da407"],["/Telegram-VPN/index.html","a993b3267be4dca0ab7c0786c27c7686"],["/Telegram/index.html","112bb5e86bf730864db778201b0b3f40"],["/The-essence-of-shopping-festival/index.html","627eac7b97a318148fabf4461de5182d"],["/The-most-important-investment-in-life/index.html","5c0d68ab2407f9e1411d5ce134891d6c"],["/The-most-successful-nvestment/index.html","12835a1599829c4f6f8f74a5d915bac7"],["/Transfer-Learning/index.html","2080be7a2ef543b87c0784aeca3287bd"],["/Transfer-to-computer-major/index.html","f15df1c989b1c8c23682cf8b768c05a8"],["/UNet-Convolutional-Networks-for-Biomedical-Image-Segmentation/index.html","66e9e2558b0a82f6da07273e69b95fa4"],["/Ubuntu-install-sougou/index.html","22951a7b4398e4245fc1928e24849038"],["/Understanding-of-paying-for-knowledge/index.html","b015a75b168648c528f6f6458ff6bbb6"],["/Unsupervised-Learning-Linear-Dimension-Reduction/index.html","bbce8f12b093fd31bafd8391f1188bab"],["/VPN-HELP/index.html","5ead4a35b9c18696ba4a19b27b8928b4"],["/VPN2025/index.html","e398b0026ad2b9194ca196d86b96302f"],["/VPN2026/index.html","7df70e3ef65804930ae00c30efa8472d"],["/VPN202607/index.html","ed99cb76acf851b11e85c2397afc68ad"],["/VTK01/index.html","da05e214a82fd75b0c4f2e0ef78904ae"],["/VTK02/index.html","b2fae6c080d54e417e3bdeb094487594"],["/VTK03/index.html","03ad122e4d9fe4434890f16244644a88"],["/VTKRead-write/index.html","e53452da2d3d1cf0a54eb3bf5961226c"],["/Vertx-Java/index.html","ab7ad395c036a33278ef97a7aa13a852"],["/Vpn-OpenInternet/index.html","71b7ba83bf4da8d1bf6bd3e3d267c4d6"],["/We-are-all-good-kids/index.html","14a3c34af221f89ad5968ddd9ca2e1ee"],["/WeChat-80/index.html","610610b3f5c05d298f1a859e1ec1564d"],["/WeChat-red-envelope-cover/index.html","88122ae975885d96fe4b6789492e01ee"],["/What-is-crawler/index.html","b2fe1920dc410d63e9f8c472519daf10"],["/Win-Internet/index.html","d085e73a316fe4a7e8defd96240a5fb9"],["/Win-Open-Internet/index.html","5e106b6cac86dc8bc9d0fe440ad07dd4"],["/Win-OpenInternet/index.html","8bd59c752e827bcb5ea1818e966fce69"],["/Windows-Android-Apple/index.html","d2a69c87bd7df5a726a350da69ba6adb"],["/Windows11-2kfans/index.html","5d8d5923749787b2e40c1746b0caab12"],["/Word-Embedding/index.html","16d22ac4dbe610a33df912889ff73898"],["/YuanShikai-and-his-Beiyang/index.html","4e9d8129180c341a5b926bb829a741fd"],["/Zero-copy/index.html","7f78cf8fb899fb9bbfb1cd3fa1d2fb0e"],["/about-keras-model/index.html","2b474af08f21107a0615bf98a598face"],["/about/index.html","f0347199eeaba5ec90445117f29a59c3"],["/accounts-google/index.html","0b5db95152e150621b9a299efff6ab38"],["/ai-model-security/index.html","88b60b0ee779dfb946bc7ca474280163"],["/ai-tools-guide/index.html","d20c8ce9d6b74c22abd2d9aa992aa33f"],["/algorithm/index.html","ae29661fb4934ed6ba21fbb08748b913"],["/alibaba-Java/index.html","415653740fd98604334c1c6cbb7fc9e8"],["/archived/index.html","3480fc8ccaf483e0db3f1ae1cedd06d3"],["/archives/2020/01/index.html","c1e5a3158d76ca3f9189055ed337221a"],["/archives/2020/09/index.html","f791d5af044a1c2334cf80652a8d2b5e"],["/archives/2020/10/index.html","e34191db3c494dddd1f7fc67befee03c"],["/archives/2020/11/index.html","d913a4ebd5320a1e43d2e004e318477e"],["/archives/2020/12/index.html","8169ca40fa55a9e44f16fd095f0a7e01"],["/archives/2020/12/page/2/index.html","9335f74ed3f53ab362e7e4de4745850e"],["/archives/2020/index.html","9e9b5bc24346627aa5d0a0e01a957f80"],["/archives/2020/page/2/index.html","5ea538c71cd6510248d6df14d4b3b3e0"],["/archives/2020/page/3/index.html","fd23757e49821eaf9b8781f5f0399022"],["/archives/2021/01/index.html","576863fe36e08b034c9d6e066038d5fd"],["/archives/2021/02/index.html","e68bbdc85b18c07758e089339289e4da"],["/archives/2021/03/index.html","a1246626250a18727a213f859add7f6b"],["/archives/2021/04/index.html","e66170d93192517271a1fb1ef41d21b6"],["/archives/2021/05/index.html","6db1a2ab3ba392a7b5779deaa312d2e3"],["/archives/2021/06/index.html","d39a9e13a90d301314757721874b1508"],["/archives/2021/07/index.html","094c06d4e3daf136c66ede397e4b52da"],["/archives/2021/08/index.html","816539132e9d649056bc37525fb56598"],["/archives/2021/09/index.html","a86e19f161a5708ffa2bcd95ea6980c8"],["/archives/2021/10/index.html","94abe0c6ce52d59e281f1b149a3cf839"],["/archives/2021/11/index.html","45f07e7f79a02181c163b0a5ea023371"],["/archives/2021/12/index.html","0bf59ebeca3800a3c25a53bbeba8087e"],["/archives/2021/index.html","91b5ddb7e1089b0149230df7823dbfe0"],["/archives/2021/page/2/index.html","f70fbdd384dcf3530b8819f6008f4bac"],["/archives/2022/01/index.html","caf1f271d4b0080da6cbbc96dba56291"],["/archives/2022/02/index.html","844d960276a2517b2c1534717d9a11c7"],["/archives/2022/04/index.html","8776defa14c4dd32a7e5d4112fa9bb93"],["/archives/2022/05/index.html","4d9a44806564b19787d9c69258de15ee"],["/archives/2022/12/index.html","5febc14f2971aacbd77d69f10b0896a3"],["/archives/2022/index.html","2f07ac1f89a71590a021211bb576b7f9"],["/archives/2023/01/index.html","338c4945ef17ba89bacf8bdf9c8dd30d"],["/archives/2023/02/index.html","66c97a3f92fa0cbe15f87d86b4988602"],["/archives/2023/03/index.html","efe0c0d1a8785c3238d49988d02ef8d8"],["/archives/2023/04/index.html","b255e3dc77f181a0ab985f143091ec67"],["/archives/2023/06/index.html","f398b0151e28477b7fc841ede50d655d"],["/archives/2023/08/index.html","840b94c5cd43a44ba993a3a57fd08fce"],["/archives/2023/10/index.html","bc76ea86ba919131354bbae6df257720"],["/archives/2023/index.html","510dde802c46f3935bd8fedc4a275655"],["/archives/2024/01/index.html","c6c3c640c6c1e71b3c616eb47a2f2845"],["/archives/2024/02/index.html","d02700b564187fec981c129c1c07d8c0"],["/archives/2024/index.html","49d46891fd9f49d3c64e25ebc60491d0"],["/archives/2025/06/index.html","6f8f927a2cb031b426eb4d962aa7456b"],["/archives/2025/07/index.html","2e49980d08b767052bfe308e6f789704"],["/archives/2025/08/index.html","a1f217e9d77df57ee75475a1df3b09d8"],["/archives/2025/09/index.html","f572a02853131f6c120fef6f1d18cf42"],["/archives/2025/10/index.html","ae25b07e0f0235f6933bc7de19a51321"],["/archives/2025/11/index.html","fd64eb56d94a1ed61bdc8e9abb2f0a10"],["/archives/2025/12/index.html","d1d9ad1a6deb59abd3e2663dc2c48994"],["/archives/2025/index.html","bafdda1c7da4861ef80caa0e29781763"],["/archives/2026/01/index.html","d47b8124f87ac9c891bb9b7b07345d15"],["/archives/2026/02/index.html","8fd7438b3e3b4017a946b9b21857a45a"],["/archives/2026/03/index.html","c2feeeb9d15bb7a8dd0fba6421dac0d5"],["/archives/2026/04/index.html","40d2afd36184534f954846bee06623a9"],["/archives/2026/05/index.html","4040a62091528e027e80140f078bea30"],["/archives/2026/06/index.html","31bb48aac6a40e2bab8675a722b7898b"],["/archives/2026/07/index.html","560ff1494ca20c3d0a88c7a43c63fae3"],["/archives/2026/08/index.html","a76d6d33d5fe06e17de5bd9f4a35f091"],["/archives/2026/index.html","1266f848818e5c7df50d7810d0abae73"],["/archives/2028/02/index.html","a59059787b3990e175d752a9b4b4c49e"],["/archives/2028/index.html","5f50bc9c48ca94a65ef357df3acf89ad"],["/archives/index.html","112fd65f338b1b3975bbb4fe8a3e20e8"],["/archives/page/2/index.html","3770a189dc8f9e1cc446d0730fe3310b"],["/archives/page/3/index.html","1101fe015736e14479a400588abe15fb"],["/archives/page/4/index.html","ae1b1f125ccad30911deb69c0d81637d"],["/archives/page/5/index.html","ae677e2cf212e8b369b5a95607ad5a26"],["/archives/page/6/index.html","b2afea3a79bb11df908257d1237908f6"],["/archives/page/7/index.html","6b0f5b7ad52eb28696d3f56188fc8b75"],["/baidu-search/index.html","3da447c2a33f23d31b73700a6d06f47b"],["/baidu_verify_code-Hh2fKNlEB1.html","e14fa24ebbd49c174f809ba427c99853"],["/be-a-programmer-instead-of-a-code-farmer/index.html","a6ffd2164d409a3d29d61cf57d2f1848"],["/best-vpn/index.html","74fafab295009b00f65a23a1821e00b8"],["/best-vps/index.html","e9ec96c2cb8411d038eff551dc6c8705"],["/bought-a-house/index.html","53ebaab6316feadd8d144ac23aeea20f"],["/categories/AI大模型/index.html","8140f75f6de036dcb3a62fc4b0ce75db"],["/categories/C与C✙✙/index.html","8e89bab464e36e63edf8b7331eb4f4a5"],["/categories/Go语言/index.html","7261fc9a252dc2696e260efa34b2205f"],["/categories/ITK与VTK/index.html","b579b10f7286637f11864aa9e80e90ef"],["/categories/Java/index.html","a024a58d3bbb4a8e7e24ecff7f4c791a"],["/categories/Linux/index.html","99fe8d3d7509c162fe1cec9130cd3a15"],["/categories/PLC/index.html","29bbe12df00fd873a2b2cb241ca78f43"],["/categories/Python/index.html","b032932499b67c26631e9503e8b4caa5"],["/categories/SEO教程/index.html","ebbca518a7d2dcd157e1061a0a836663"],["/categories/index.html","206091645c0cd1e0da88611d4ba58b7b"],["/categories/图像处理与机器学习/index.html","f347abd7cf171c94ce02cbcdb34160ea"],["/categories/工具/index.html","019542eb0906d8399d58db8d8812b89b"],["/categories/技术以外/index.html","54dcadc04693e789a8bae71e2b8c27fe"],["/categories/技术以外/page/2/index.html","1729a563f35f236c27b9b7c2df687214"],["/categories/数据结构与算法/index.html","e2483cb9a9c46cf27fa182f955760300"],["/categories/科学上网/index.html","b7f6c5a86a75f8ba6b58bc2fecb20aa9"],["/categories/编程经验/index.html","d327f81b0985a60e9d0cf0793837a242"],["/categories/编程资料/index.html","855edb08c732c45b57282e90875f3ee8"],["/categories/计算机基础知识/index.html","7a1a2a1fe364f15ecd90529cc13c2e10"],["/categories/设计模式/index.html","ffe1ca1cf4183e9cfb03bf75acc9547f"],["/choose/index.html","fd42473b3bc147c20c5e9044db413d16"],["/choose2/index.html","897462c11ecda405abd9d342d0da3279"],["/chrome-crx-intruduce/index.html","59f1360f28628cd3856b4563cf40ccbb"],["/clash-free/index.html","1f11e534657bf23630d263f7e25503a9"],["/clash-guide/index.html","c37edd8478d04702d57965ba72e49c94"],["/clash-pro/index.html","77e85a4fe64a697425a5fba283bfd1e2"],["/clash-tun-mode/index.html","1ccc73967c6af8ebebe20db669118971"],["/clash-verge/index.html","613fea90ed55b03ebea9c5df3d486dc0"],["/clashvpn/index.html","39486a8379958cc6cd0fae510b7b5714"],["/claude-code/index.html","d5745178c1d9799204fc1752d5f99a3e"],["/coder-blog-website/index.html","3c952ec32a92f9a74f614897dcd65a69"],["/coder-source/index.html","1a52b4de50cca76cef3c58561fb8fe8f"],["/coder-videos-website/index.html","7253fef1ddf46fc58c3da3f82315f6e7"],["/computer-book/index.html","fea7029aa9a1f5fbfa30d24c283be837"],["/computer-censorship/index.html","226e27e8791f26f8a8ef87df264ffc95"],["/computer-network01/index.html","41efcadcf102f9f69874643ca3b7e67a"],["/computer-network02/index.html","b4a198014ae1eed81cd087bc320fca5f"],["/css/main.css","bc32ad34ec4990d934c3c647bdb62f79"],["/database-Mysql/index.html","5558a500039decafd7c09e0d0cf07b4e"],["/eclipse-lombok/index.html","b3fcf1572855436c26e30524fe55563c"],["/freego/index.html","7454ac1d031bcd7d05f989bbdcff131e"],["/fully-convolutional-networks-for-semantic-segmentation/index.html","8664d053f19513469a6eb1c85bca1595"],["/great-firewall/index.html","6dd434f86af18eb2e100c37375281094"],["/halfrost/index.html","ab9035b3c79e4d402fcddfe48d2834f7"],["/hermes-agent-model-config/index.html","696a304080a8a452aedd59097ed3c9e1"],["/how-to-signup-chatgpt/index.html","661af6b158662aa7a6bd967ae5f6e104"],["/how-to-use-Gemini/index.html","8696516cd8b30b878e0b33e422ba805c"],["/idea-continue/index.html","31c1e4587adfe5960126e435f4089f3a"],["/images/banners/A_modern_tech_illustration_for_2026-08-04T13-39-17.png","26724e93cce260b8e7c01db2c09e511e"],["/images/banners/A_modern_tech_illustration_for_2026-08-04T14-22-31.png","273b7bafe8ddcf9f92273a1589d5a574"],["/images/banners/ai-model-security-banner.png","fa71a992cae135162d47515233b0c360"],["/images/banners/science-internet-guide-banner.png","6a9cc99b131a112e949fa73fb0f2a248"],["/index.html","e5207ef2a486c1d0a534b5b5db511e2d"],["/internet-dir/index.html","de93d1bb11ea8e3ce21b872d9051ab84"],["/ios-open-internet/index.html","194d9c573b99e0a49150a5bdc4ed8da6"],["/iphone-open-internet/index.html","f0e846be0f0507d9230ca3ad386f2787"],["/itext-makes-pdf-form/index.html","8c31ee1ba873fb04d4d4d8626d2d9e6f"],["/java-Set-Map/index.html","cd4f1360d648f1078204753cc1999e9b"],["/javaweb-server-error-codes/index.html","839623427704352f656f69be0a598f5a"],["/javaweb-source-code/index.html","197d568600703ff391b5356b2951f9c6"],["/js/lib/busuanzi.min.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/js/lib/lozad.min.js","47904d34a224931dd1b615c59a3dbe3b"],["/js/lib/prism/prism-coy.min.css","0ccad54d95845901ead59bfd3ecceb14"],["/js/lib/prism/prism-dark.min.css","a4711d2957d6605eb5682bdd228cf123"],["/js/lib/prism/prism-funky.min.css","efedcdccd7a9ab342d2d9cacd24920af"],["/js/lib/prism/prism-line-numbers.min.css","38e22e790c279bb56f9ec4b90a2a2d58"],["/js/lib/prism/prism-okaidia.min.css","5ac6f9de996fbec68aaa106dfb16e061"],["/js/lib/prism/prism-solarizedlight.min.css","ecc7e64d039873ffcf7fb27babdaeb5a"],["/js/lib/prism/prism-tomorrow.min.css","456af2a14ae4f5089939d5904ac40fe8"],["/js/lib/prism/prism-twilight.min.css","ebb5c355332a8cf9a1ce37a2a69d678f"],["/js/lib/prism/prism.min.css","a5234d614834658887cec6a9515890f8"],["/js/main.js","052d2b299d9c750afea8df0b802ab7c1"],["/keras+TensorBoard/index.html","ed6a097105e5b27bbd02b3d95a36e0ab"],["/keras-beginner-guide/index.html","8c2b44de6bbecb3ea29142f094151bfb"],["/kimiclaw/index.html","555d13821f906ef9721efbedba2ed68b"],["/kmp-algorithms/index.html","658ecf07e3147e333ea4e272e2f0824d"],["/leetcode-Java/index.html","89e8388ead02165a1197f236eb35561b"],["/links/index.html","1e7ceed0092c197ef2152cf6aae9271c"],["/linux-java-opencv/index.html","67494eb64d96f3e68de5fcc2123ec45d"],["/magic-internet/index.html","c22bbf69430f7d2797f8e5095dccb49e"],["/magic-vpn/index.html","ea3a743a3b8c23492c58a6982a13482b"],["/mihomo-clash-difference/index.html","eda44cb551c01e65663f5e3086788d98"],["/mingci/index.html","172bce0bdf1d30eab0b622f2423a5fec"],["/mobile-vpn/index.html","5d9ab083e9a8b5a7649e0ffce16fa526"],["/msb-source/index.html","37cef929aca74951d47c3704bfa9d930"],["/online-BUG！/index.html","cabd3391fae560711223e3f06f507a15"],["/open-app/index.html","094649f7f38d5ba0f6d9ac844d552e38"],["/openclaw/index.html","f8f0138d311f8adfab1f1aabb71a0cd1"],["/openinternet/index.html","181b77f3179dfc3402dd67b04c42b341"],["/page/2/index.html","02f2d9acf25616b1592da580eba6a5bb"],["/page/3/index.html","b1fdc9a32b7e0098f52cfc276a03acce"],["/page/4/index.html","66722cea3755ce3a86b485b3b5a530cd"],["/page/5/index.html","b488aacf3ad470d6c65b39510bc07fb1"],["/page/6/index.html","12d6796f4dc823748280c1b76778bbfb"],["/page/7/index.html","b5599b069722b1979f1722cfc5c35615"],["/pandas-data-preprocessing/index.html","18f3f00c19d975e029d3751429c24fc3"],["/phone-win-open-Internet/index.html","ea879b325e42feeec93cc5b914608d6f"],["/popcorn/index.html","36be0197eaf566beb0aa879eccbe8f91"],["/protocol-cheatsheet/index.html","9e7075c748c98d2804808b7c9fa269b3"],["/protocols/index.html","4d65bfb50e0c8a8a2c5df10e7c49e6da"],["/python-Blog/index.html","dbb90aeea363c98aafd44e9c2f8836fd"],["/python-yeild/index.html","f438e8ca2d3bb368046d3a3796f01a22"],["/python爬虫教程/index.html","6b09b79b00e3e4aceee2662b46b21da6"],["/rmux-agent/index.html","7cd3c2231e2ccc9fe52e39b85f9eabd3"],["/route/index.html","6f1fb8702c5f36dff4c3e6c6b18d485b"],["/science-internet-guide/index.html","ea2e961a244c726511e93d356ed363ea"],["/search-help/index.html","f5b3d3b7a2e716f5764514f962c852af"],["/software-copyright/index.html","41211f90bd7d28760fa81fdf7746cd1c"],["/sw-register.js","830a042939ec436470d13057418774ad"],["/tags/AI-Agent/index.html","3b53b8fe7d86fb8f5139c62209fb314a"],["/tags/AI-PPT/index.html","7ac20e54c935aaf360860128e899987b"],["/tags/AI/index.html","9012dc04a614b9549cb25f0a442ff8e9"],["/tags/AI写作/index.html","692da432a5c275efde8d048ece2e4156"],["/tags/AI安全/index.html","ae5fa5ddbbc86775fac5bed110a0c77e"],["/tags/AI工具/index.html","f9ddf188aa8399d3133a2d46ee228d0e"],["/tags/API/index.html","397c01cab5ff26831f5d7c47defac406"],["/tags/C-图书/index.html","5d8d16d6f84747b29efafcbb544c33b8"],["/tags/C/index.html","1cb87d7d0908d788a133d8024549c3f9"],["/tags/CNN/index.html","7da1eec44feb7aa0f57ebbba45daa0c5"],["/tags/ChatGPT/index.html","02979ca9933cd6e862dfab5019aa2307"],["/tags/Chrome/index.html","ac1dcc762b8a716c61dd41ef68385e00"],["/tags/Clash-Meta/index.html","f1f7a9e038ded5281a811dc6e93bce42"],["/tags/Clash-Verge/index.html","3a08e6bc24810b2e52685c5d037d3838"],["/tags/Clash/index.html","8517b6bc604a663a6166dbea493d5bee"],["/tags/Clash教程/index.html","e5f58a669c301d21a5e06e577291b360"],["/tags/Clash机场/index.html","03c1b0f0613d88c585866c87837edfe8"],["/tags/Clash订阅/index.html","bdd5fb377a1c62fd60516fd49a46e006"],["/tags/Clash配置/index.html","9652d3d3bdd95f72ce14469c07c09959"],["/tags/C✙✙/index.html","44ef11fd38b2a1806162eb19a2cc715d"],["/tags/C语言/index.html","6d54659d7e0054d8b492c8134e8e08cf"],["/tags/C语言图书/index.html","a5d113385f785be0502cf8e86f461121"],["/tags/DSN/index.html","501885d39887df40a5c5690a0defcaff"],["/tags/DeepSeek/index.html","127e981ce3aafebed387b17b08d5ae4f"],["/tags/Dll/index.html","7fa599f831bb136f21ac164a5d4f7605"],["/tags/ECCV/index.html","d54ba2373c1b3dc465bea0d264a6655e"],["/tags/EM算法/index.html","51b234caa0c4e36374d7ba912e1cbcd9"],["/tags/Eolink/index.html","059eec94e9a7937e11460c72a9f5fd7b"],["/tags/Gemini/index.html","98c98f7222f9e5fdadf5c8aada47209c"],["/tags/Gitee/index.html","1c7a569d9963e1af62ec9b15d3969992"],["/tags/Google/index.html","26e7da22294baeec65001d8a34df40f0"],["/tags/Go语言/index.html","38caf164481d6d4dc2b389211fa0ef94"],["/tags/Graph/index.html","d5e3843637c0a2c97482d052a3d92528"],["/tags/HTTPS/index.html","12ad083c77c4cc90cedd1a3f5bf78d1f"],["/tags/Hermes-Agent/index.html","69328a146ca1fad97a869d74d518c9f1"],["/tags/ITK/index.html","cef00c665a707bb6853e9a0abd8df6b8"],["/tags/ItkVtkGlue/index.html","b3b4ea8a6131afc6ab14af7b807e9f54"],["/tags/JMM/index.html","a09fc667649a090b0dc439f29ba27893"],["/tags/JVM/index.html","1b0deb6a685f0ee843d983dcb684c259"],["/tags/Java/index.html","5fac74c0b002ef8273c9f540ff85ab09"],["/tags/Java图书/index.html","b6239843446599fc2faafe665236f78b"],["/tags/Kaggle/index.html","0c5a89aabfda6810306c9d5e8355505d"],["/tags/Keras/index.html","9bfd2688f282dd0b63eaeb3f95bf6051"],["/tags/Kimi/index.html","d53bf984612836b98a7eeabe308e4b63"],["/tags/Linux/index.html","943bff376ad82007ecaf1385732b39e7"],["/tags/Linux图书/index.html","21049524e2e7a257a5b70ce48df4c518"],["/tags/MEPP/index.html","5eb68b64a99acd914b85d6503e6a5f7e"],["/tags/Map/index.html","a1a45f903baf8e75334d305138f79b14"],["/tags/Matlab/index.html","1ac9ec8d248e96bcf498e04ced08595a"],["/tags/Mihomo/index.html","a2a54164060526a2beef558782cfbeef"],["/tags/Mihomo客户端/index.html","31d1eccbaf93db6dd25febf76b7def02"],["/tags/MongoDB/index.html","b9dbe68a1cba3ee53a36c95213810c70"],["/tags/MySQL/index.html","286ff491f21313332c6e13cf074e71f9"],["/tags/OpenClaw/index.html","b0091c8fddf4aa79a68ea8fc6c0dded9"],["/tags/OpenRouter/index.html","9f285613fff7f3620547d1b4fd5fddfc"],["/tags/Parzen窗/index.html","d4850b282c6a32c84d9d90e4c9eebea0"],["/tags/PicGo/index.html","aba9391b974d66c56fc1b4124a97f59a"],["/tags/Python/index.html","d886e05f3d6cf016fc8a66cb82bb382b"],["/tags/Python图书/index.html","002ad462744f44dbabaac1bd3c65e743"],["/tags/SPHARM-PDM/index.html","89560ba170228dc2351612c2826001bb"],["/tags/SVM/index.html","bcfcd544dda0d52cd8f17cbb87ea1f3e"],["/tags/Seata/index.html","ea426d1d5583137cc82d12971056364d"],["/tags/Servlet/index.html","ac5f39080f987247d4cef33b1c23c25c"],["/tags/Sping/index.html","eed70b0bd0533e5357fa067d60dd78e2"],["/tags/Struts/index.html","f4b8b74c8d2d5f61e3bb93a5873e9169"],["/tags/TCP-IP/index.html","b04a2bab49aa30173f16d25560556053"],["/tags/TUN模式/index.html","1849163086cfa1006dbd956d77523966"],["/tags/Ubuntu/index.html","8fa210f3ea29b3972e79f1c1b17bf4f7"],["/tags/Unet/index.html","bb711742c897d10be760fc11f017faa0"],["/tags/V2Ray/index.html","c57ee0192d19a2bcecc48e46110c3fe1"],["/tags/VPN/index.html","4db90ca64e6822be670001f493b4dfe9"],["/tags/VPS/index.html","088665ce90cca73d1210dbb97cb104f5"],["/tags/VS/index.html","de2f743b3fd7c48867d7dd180cbf7452"],["/tags/VTK/index.html","dd4de1033bad629d0b9ddc535a325181"],["/tags/Vertx/index.html","e7d4359d3432bdb47a5a026e57d11cff"],["/tags/Windows/index.html","e42fd6670a05889f5b5ccb2eaeae7817"],["/tags/Windows翻墙/index.html","8fa4eb32703d41e46c30730227c7ada6"],["/tags/claude/index.html","39b34c371c5bff1e55d75d60bc840dbd"],["/tags/config-yaml/index.html","a87ee8d4b49a44711fa69a178d56cadd"],["/tags/edit/index.html","bd35d342350156bfd2a811c463b492fb"],["/tags/hibernate/index.html","d380bdcf4b4081b7e78d83f6cb5aec32"],["/tags/iPhone翻墙/index.html","3b21112a47ffcf0fe91d8f0a37b95ceb"],["/tags/index.html","dec4b15142383b9a9b1b1d1a0eb9c970"],["/tags/itext/index.html","70768ed052508b5966abe5e07c33fc8f"],["/tags/jdk/index.html","06b2b23ca7af69f48b6aba90f9631d24"],["/tags/kmp/index.html","b37409c111fd51c9f41cbe2628b57259"],["/tags/k最近邻估计/index.html","cdb4bbb80996917b808d52b067af32eb"],["/tags/lombok/index.html","524bf7995cb3b1affd8a52a0fd903fa0"],["/tags/macOS翻墙/index.html","a7db55dd320a840302dae60836b31509"],["/tags/offer/index.html","b4964c8df5cfc4c00d8d03d1b84c94d9"],["/tags/opencv/index.html","3b214f3808757e530c79fd2baa4f0736"],["/tags/pandas/index.html","14f05a09b91c1168f7468296ac8f5de1"],["/tags/rumx/index.html","a49017e0a3ea94d592e527250778c2cf"],["/tags/string/index.html","dbbf452e91568a761c3a3439a66dba2d"],["/tags/vim/index.html","8275a6c39d1920eb66d577b11a85e473"],["/tags/vtkPolyData/index.html","080d84d308294c45eed3fc33fdf63d39"],["/tags/web/index.html","ac8995d819e8ae25fca4b124df499466"],["/tags/xshell/index.html","70bc63bfcac62909f8eaf5d483ffed05"],["/tags/yeild/index.html","b945a963fcdf7469d35531c3c0c741d2"],["/tags/互联网/index.html","da5ececfc1c355bf1b63ff200a1f9383"],["/tags/人工智能/index.html","2b48e8058cb15fcc52154c68b5a58301"],["/tags/代理/index.html","41640a837c96b4c7bee956780c1d6a80"],["/tags/代理协议/index.html","acf10d8bf9ec8c8f4c4432d12b95913d"],["/tags/代理客户端/index.html","af6912abdc54873ad0a86b439b622624"],["/tags/体绘制/index.html","133b355e701b941e2fda36249545cd68"],["/tags/全卷积网络/index.html","5b73a484067b598c0eabb87ff6bfeb26"],["/tags/公众号/index.html","a0f819e21945dba3d3a64a88e0e7950b"],["/tags/内存模型/index.html","d6841a452e753fe9e3580370bb0c1302"],["/tags/内推/index.html","711acd40319a9b124f97013bd6a71736"],["/tags/内核/index.html","e5a924ab2d885923c52f47f00b79c1f1"],["/tags/函数/index.html","494abaf8c27efa270310d04792241986"],["/tags/分布式/index.html","5416e45306f74d3c16148cda4a7c229e"],["/tags/加密/index.html","051b0bbe9b6e0ad1166d677cd7df0640"],["/tags/医疗图像/index.html","e7290f35d30d1b6455a492dd20deec0f"],["/tags/协议对比/index.html","77a50ac19f6981cb78b3565b2e088907"],["/tags/博客/index.html","348a6bb01daa6d9d4d8222d53b770db3"],["/tags/图像数据/index.html","87a0acbba5237f68ea6e3b98a7fe0ca3"],["/tags/图谱分割/index.html","10db7e7cb6f16e091ea9d488a3548f84"],["/tags/垃圾回收/index.html","a681f17f2aaae40b042fb6bbafaa6a20"],["/tags/多线程/index.html","96fc48d5c69a0776f9b61ca0b183df2d"],["/tags/大模型/index.html","983af242b3a5c38850068f90852a3a26"],["/tags/字符串/index.html","bf8d4049b5330026df0a9bfafb1e70e0"],["/tags/安卓翻墙/index.html","04cae6ab55b10666add278d5c99a99d5"],["/tags/小龙虾/index.html","b0176126409e11a1a443269199286b1e"],["/tags/工具/index.html","98e38de9f90d3ca76c25edcfd28504fb"],["/tags/弹性形变/index.html","4bc0e4ae6a83fc4331c553d33cbec626"],["/tags/排序/index.html","80c1815511e87750bdcc26054af564b8"],["/tags/搜狗/index.html","9841e4e1c98af5c0152f4be116c4ad32"],["/tags/操作系统/index.html","e6a04d905b237ba4964e9216a53b5ec9"],["/tags/数据库/index.html","3023eaceed6ca2c2ac3a4a1b11aa632a"],["/tags/数据类型/index.html","de1b50251c89945d0650397c907fb5f9"],["/tags/数据结构/index.html","bd913018839e496b7e6e0589fb1891cf"],["/tags/最大似然/index.html","238d756aa9dd1ef64a7c51e098a55ec4"],["/tags/机器学习/index.html","12424caa01ca4db158ecaeaf1f0c4862"],["/tags/机场/index.html","aee980b08f8b1e7664c84a5f162183f0"],["/tags/机场推荐/index.html","570e244dddda21372189e5073b2e5301"],["/tags/树/index.html","bf5bbc3df82a041864e91659579392ac"],["/tags/框架/index.html","79ed80fbd9f7d662ed4b2fff219ccd42"],["/tags/梯子/index.html","f12f84a5d18aedb50c550ef53bb12ab6"],["/tags/梯子推荐/index.html","ae2f9db6286e07a12e2fcb337936bd4f"],["/tags/模型配置/index.html","4ff1c695d8842436d5611c80618ce491"],["/tags/求职/index.html","6dbb753c6c38c038660c273b95d044bb"],["/tags/汇编语言/index.html","94a1307fb7bd2ce70c06978cc56a62dd"],["/tags/深度学习/index.html","7a04d1a40c2e5c79431e0397cbf66ba3"],["/tags/深度监督网络/index.html","ca4dd237af3c0fa6a66f924596bd3712"],["/tags/游戏加速/index.html","ddab150657bd8898db7c37bc64822204"],["/tags/爬虫/index.html","bde82126e9fe7a653de00e06dbf87c7b"],["/tags/电子书下载/index.html","64985876a8001547fb16bf6fe632323b"],["/tags/科学上网/index.html","05a1710fb9201dfb628e7f94e0ea83b4"],["/tags/程序员/index.html","617df144c8b9ec7e623baaa11551140b"],["/tags/程序员面试/index.html","a953e869c4b5beea3a0cd5ba208a5742"],["/tags/简历/index.html","76da36c8d49e873ed766c2fa787be88f"],["/tags/算法/index.html","1a5f8b5879c5477e8628ef67319b2aac"],["/tags/线程/index.html","124787f4230ccc977dba3697b38abcf9"],["/tags/经验/index.html","a65622a79cbdc0c89dabcf03d0df66a3"],["/tags/结构学习/index.html","49f4e489e5aea9313c3b3a42399482c3"],["/tags/编程/index.html","60265fd49456da39c6cafffcf5b8de07"],["/tags/网站/index.html","3fd8e6bd56ce23dfc2cd9d1ad97d9515"],["/tags/网络/index.html","801183439e557172e3e98d9551cef9d9"],["/tags/网络原理/index.html","94de0d2ca865e806e090e70e5bf5463a"],["/tags/翻墙/index.html","6c8407addc5f9c139f4113ed492b2752"],["/tags/肝脏分割/index.html","eda74653252dc9d988b8b529112ffb1b"],["/tags/虚拟网卡/index.html","3b0a950ace62d8dc9e77259258676c5e"],["/tags/计算机/index.html","c0fffbdde77a08812881a8c67384c512"],["/tags/计算机专业/index.html","9d89544c90e65e075212cc8fd61971bc"],["/tags/计算机网络/index.html","db908a25cbf440841b227b96b80ae97a"],["/tags/设计模式/index.html","9c480e95b3c9499dd129628d65dd000c"],["/tags/贝叶斯/index.html","c235c80efd995b6f98c9053a0c47a441"],["/tags/迁移学习/index.html","047786e06d7272aebab90928bdc6058d"],["/tags/面试/index.html","bdeb6d3528a83aa5de8e2cbe6991c4ce"],["/telegram-search/index.html","b990456d42b947bad121c87b2904411a"],["/the-meaning-of-reading/index.html","ef745fed39bba732dbfd09d5620a63bd"],["/the-way-of-pragram/index.html","e0653c8c2f51784fd2e1df977941ecd9"],["/troubleshooting/index.html","c062d337d24465a864728163f2340bac"],["/untiypro XL安装/index.html","492ed6e55e5b2bfb8774a7841af79a57"],["/v2ex-eight-sorting-post/index.html","4fcfd251d344a328d9af2aa707cda3f6"],["/video-websites/index.html","b6dbbc14032d9cb1e46cb229b58cb1ca"],["/vpn-freego/index.html","339c825a2310ca5db00b172932df6723"],["/waibao/index.html","1e87283a2ff2386f625d66165b542a77"],["/wechat-fans/index.html","b32498f5250100b89ab43a8571c4203e"],["/window-run-VTK/index.html","a3e725dafc9abe08a5b1cd981ce32981"],["/windows-science-internet/index.html","18574cbdbca1032f3db5b8c08bfcc389"],["/xshell-connect-Linux/index.html","c5197c76e7e18e15e3c111818f541d39"],["/yzhx-vpn/index.html","7dfed4a62b6f550deb97b42db367f471"],["/《Java高并发编程详解》，去大厂必看！/index.html","1719930ea96981913e536ac7636b0203"],["/一分钟没了 1.5W 。。。/index.html","3f0d37ebb4e7cf6cbd67aece85dfdf5f"],["/一条高产爆款内容生产线/index.html","7b1692763c89bd549d297a9539f4ce38"],["/为高考学子推荐的六个就业前景广阔的专业/index.html","048a9d3e741f818d55dd572a5bea46e4"],["/互联网赚钱机器---社群/index.html","ae37b9adeef4838d26e6e8c84c4d126f"],["/你们常用的工作方法和思考方式是什么？/index.html","ddd9297d7a83aae28b49144bb5138921"],["/关于环境配置的一些事/index.html","a763147996a7220518d9068096012a86"],["/准备了19w！搞事/index.html","3c21f4ef93b30905ea1c6b70e9719de6"],["/几个很重要的感悟/index.html","c7b3233e5ca87f6bb451bcb6eb16815a"],["/分割ROI篇/index.html","8aaffae1d931005a363fa9f6b55fac93"],["/分割精度说明/index.html","0af9cfdd0bafb933c98c7a078dc4f867"],["/分块程序执行/index.html","d95d6d2987862b831e4c278fa82e9c31"],["/加班公司黑名单！！！/index.html","7ab46381cba2f797d4a67c3f42dd8094"],["/卧槽，上知乎热搜了！/index.html","86689594763307459c11967dbecc5b36"],["/卧槽，我的小破站爆了！/index.html","f2d4827cd77d26fa6adb602d6950555a"],["/卧槽，我被盗版了/index.html","bcceb162a8186b05c14200e83c92cd38"],["/卧槽，还有985大学在大一上C语言课？？/index.html","dbd3cbf24827fe1fa5f01d643622e71b"],["/历年微软面试中出现的leetcode算法题/index.html","a549ca4dabdbc918aef52da0bf9b88e4"],["/去特斯拉试车了/index.html","1b305bb4ea29d7a76d50f550ac173a5d"],["/吃苦的三种境界/index.html","cfdccbdc40e1fe37fa8dc40516befc2b"],["/哪本书适合推荐给 Java 初学者？/index.html","6aaf9c99e5e7eeb50bd361d44c17ef0b"],["/哪本入门级的学习数据库的书最值得推荐？/index.html","b7e438bbe433086df88088b35f02dc7a"],["/国内外常用的AIGC模型/index.html","a07137f736f83b2bddf8fa4e3608e4c5"],["/国庆假期/index.html","f2104f315e76177b4854c27d84b6b5ab"],["/图谱程序字典/index.html","285f21cea2b0a25f091881d1a11d34de"],["/图谱训练与分割/index.html","8065be51eabaef21d06b58484496aa5d"],["/宣布一件大事/index.html","c5373fea79ac2d64d4cbe23e126668d8"],["/小鹏P7i试驾体验/index.html","673069a01bafcb2b111d01591c6542c0"],["/微信PC版3.3.0内测更新，电脑可以刷朋友圈了/index.html","d5585b3f6b606f33abc6178c160ec19e"],["/怎么更快的赚钱？/index.html","6a8396f2ac8dcd24f257a6d244ca7116"],["/我毕业了/index.html","b8232dc54f1b3ed5d881346660721710"],["/我！真！的！找到了！爱上学习！的方法！/index.html","e3cbc1a3e5c5aa637f83b431d651d7fe"],["/户口的意义/index.html","d4ab8eb6aa8ad12ee9d65eff7053419f"],["/推荐两本经典算法书/index.html","649a965be0a85ced93d1365515184ef7"],["/推荐几个在线学习SQL的网站！/index.html","f08f4f3bc4a75ca849a4423c877184c1"],["/搞了一个程序员成长晋级社群！/index.html","9366cf288c5857755011adc10dac3617"],["/摘抄/index.html","70284f2fcc60af9e6b1e938a98895820"],["/暴跌30心态崩了/index.html","4f0ed4fad8862cee76217163b76d3c2f"],["/最近很火的ChatGPT到底该怎么玩？/index.html","e0d273d29d3e65f698bc8df12144594e"],["/有哪些好看的日历可以买？/index.html","7d62e1c1f13a10eee746f1acdd1ddfdd"],["/服务器有啥用/index.html","f1019854045a45a5d8ead99685216068"],["/来长沙了！/index.html","72ff007b00dd2a867fc3b05ff8c9359b"],["/校招污点公司名单/index.html","604b6c4a5faa16093c8d15db8164012f"],["/梭哈200多万/index.html","77499b333566793552811417b37ed1a1"],["/梯形图入门/index.html","727bed5efcedf99ae4ca4fdc88ac651e"],["/橙心优选，凉凉了！/index.html","cf10c8d5a129fd6f6dcf2b272356fec5"],["/比亚迪汉试驾体验/index.html","46bb8ad54ca313f187920a0e19907ee9"],["/清华转学成电，真的牛逼！/index.html","925c42bf0b9f083063d7ec7ea9dbe23e"],["/滴滴程序员被亲戚鄙视：年薪八十万还不如二本教书的/index.html","948e3a46aaa0368d055adfc7f2d77e85"],["/社群！/index.html","b23faff618751bcd51c5cc212eaed109"],["/科学上网之VPN篇/index.html","2cbb84a67c1e6ed41f5d6d91dccfec83"],["/程序员必备的几个技能！看完你也是大神/index.html","787216ee1c6b318ad5cead7f470ab474"],["/程序员绕不去的槛，Linux！！！/index.html","48c4f4e72772eb9621b7537bc95ce64c"],["/蔚来ET5试驾体验/index.html","6bb4b53c09739ab3d2e91922bbf10e87"],["/蔚来，牛逼！/index.html","85e417ce77b78334279e630f620c6d84"],["/被录取了/index.html","0e9a54ce636ecd49e8de1f12bab85e9d"],["/被找事了！/index.html","70d8ec619fadb29dc568b6769553e906"],["/被拉黑了。。。/index.html","c8cb64f0535677d97992285efc398092"],["/被车撞了！/index.html","922e535d6bfae25fdbe5526ab0694588"],["/该如何选购固态硬盘？/index.html","adaa1a095432ebd3bc6d1b2a1f140bbc"],["/这本书一定要看！/index.html","5653fe61d1b60e1e531f28a7b86ebc54"],["/选Java还是C++？/index.html","27707a42f21e09d20402c3301d1435b0"],["/那些让你起飞的计算机基础知识/index.html","e24d962c035362d1bca965365373a708"],["/靠这几本算法书，成功拿下大厂offer！/index.html","5bd51dc322f6f57d7de80f39862529fe"]];
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
