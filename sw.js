/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/0010-city/index.html","51383e40a77bb1095914c8ca710b4927"],["/10-algorithm-book/index.html","8e3f25df6268e089a32e151eb19144c3"],["/10-website/index.html","07a008fd16ddf43c9564b81387ce0f61"],["/100万的小目标/index.html","86b2955e27c28e45b40ded27b47a99d8"],["/10w+YYDS！/index.html","c71f7ba035a6e111a3058c03a0f99386"],["/10website/index.html","d540f92ed626c347c253ec1574c9b5ae"],["/12-technical-tutorial-sites/index.html","4c8df4a380a5e6df088c9c71fbdd455f"],["/2 6 岁 了/index.html","be449774b1182188e36090eb80896c33"],["/200万，啪，没了。。。。/index.html","d4d6fc287f9e39e8bad3416c65c39234"],["/2018ECCV-Paper-DL/index.html","d1e89214d5fc4ee7bebd03880d5d4f84"],["/2021年固态硬盘选购最新攻略（小白避坑指南）/index.html","9cfcac8b1294b97fe31ebe9fac2d7636"],["/2021机械键盘推荐/index.html","a7c953bbbb80aabf63fc81e62a1e00ef"],["/2025-07-15/index.html","25f5b229cac8d399e59f4fd4de790768"],["/2025年终总结/index.html","df6558ebc2c242ca9c6583adaf43f2d9"],["/2026-Open-Internet/index.html","cb19e922f939bf9f3b1b5b405dff3acd"],["/2026-best-vpn/index.html","8511835d584018e1512a5e0a4445c08b"],["/2026-clash-vpn/index.html","6f9509d0d7861f9d8d5344a1243bacbe"],["/27岁了/index.html","713e7c7ce2cc69c6c1e62d7709286729"],["/3D-Convolutional-Neural-Networks-for-Human-Action-Recognition/index.html","a8f9904202b32a200a4f799d8ee3bb10"],["/3D-Deeply-Supervised-Network-for-Automatic-Liver-Segmentation-from-CT-Volumes/index.html","6d6fe30153c4aeac41381d6ae69fd22d"],["/3D-Unet-Experiment-notes/index.html","1d3cac66f8332b1a639d9388677bf7c5"],["/4-Software/index.html","e981fe02e6683f9424c1863c64e2e8d6"],["/6-website/index.html","ed0befc20fdfcd098924512cde8f4afd"],["/7-terminal-tools/index.html","1b891acc6a6aa87e107accfcd70be08a"],["/AI-PPT/index.html","559bf879c49dcd4014d6256041c9b241"],["/AIGC中典型的深度学习网络/index.html","e37b86652396a67ea0d99f82c7eac68d"],["/Accessing-the-Open-Internet/index.html","63d4b0194f717603b2beb6a69c3b0018"],["/Agency-model/index.html","8f93a2d5ff74e1d2d5ade5d6b532b301"],["/Algorithm-brush-notes/index.html","c8e9301f78d8b72426b81ab23ac19dbf"],["/Ali-recruits/index.html","f7bef28370c8a22a072c36b6003249e3"],["/Android-VPN/index.html","d486c63bcef7e03d4420a89dae892d0e"],["/Android-open-internet/index.html","20277b2530441ebdb669fe27885d46fd"],["/Appearance-mode/index.html","f99cec5e6094d768625f5282bfe7b308"],["/Backtracking/index.html","7dfe3ca421aa3a47ff784d6996819bbc"],["/Baidu-Sao-operation/index.html","7527fa394d47fb12ef0ec04bccefbf5b"],["/Batch-Normalization/index.html","18285a7333da818942052b72f8663766"],["/Best-AI-tools/index.html","175f5214fad1b4530765b15c6dd6dd1c"],["/Bias-and-Variance/index.html","a5af239323a5f91d71f1bf2f6094aa36"],["/Binary-tree-traversal/index.html","b1374539142344b5173d77644f8572c3"],["/Branch-and-bound/index.html","84a729301eb30a85a5bec5bb48b1cc5c"],["/Buying-computer-for-the-first-time/index.html","f70861452c67868a819cec686fe15bf6"],["/B站向北邮道歉！/index.html","5f34ac21e65688b058bb05d34525389f"],["/C++-string-function/index.html","b5b6a4dfa4afc6ae2f442be09e56b81a"],["/C-Java-DevelopTools/index.html","e0bcf4ca7f0034b322b14deac65d07d7"],["/CS-Classic-Books/index.html","49c678f297a909ffc85e4e5428086b43"],["/CS-network/index.html","d48a23e0989f49884b67e5dadab11b26"],["/CSBook001/index.html","b2c5faad599c566c1524d5d2d6b4181d"],["/CSBook002/index.html","2316249c4c3abf6590e4d60cf213d8df"],["/CSBook003/index.html","283a9dfc308be06bcbed61f47cea6b7d"],["/CSBook004/index.html","82f1647a4a51e44801c78baee549ab33"],["/CSBook005/index.html","9ea2de13ff4e8fcbda0907be1f8d50c4"],["/CSBook006/index.html","3085a26c634b92cdbff44a4879e82ab3"],["/CSBook007/index.html","c1433b8b428ba2b755988097de92b38f"],["/CSBook008/index.html","3a1b2b0cb712f745158ea21115676d6b"],["/CSBook009/index.html","ad4d355a8f052e7e2342bc5c8746788d"],["/CSBook010/index.html","e8c0818f6309279ecf5cc796948cd4bb"],["/CSBook011/index.html","742e29352ac334001417189100f5d473"],["/CSBook012/index.html","3a2bd4c73c3004f424be36958410d502"],["/Changsha-really-fragrant/index.html","ccca0fd7d7ed7f0469f6e7c253e9dbe5"],["/ChatGPT-VPN/index.html","51025808482d39390b0b4858a4e51eb5"],["/ChatGPT/index.html","ebc46b7349aa8a41fbb6bffffb08cf84"],["/ChatGPT！王炸级更新！！！/index.html","0877cf5c8fe6afa60cea3358697ed79f"],["/Chrome-crx/index.html","190cc713b8afba125ef6c04cc3d9332b"],["/Clash-Party/index.html","6bc2593ada96867458db8d04a146f7ad"],["/Clash-VPS/index.html","42dd8ff45fe74e82afb476a15ccf4fbf"],["/ClashForWindows/index.html","9ff0f84889576d1b6f1d4d1ee64f1c78"],["/Computer-Classic-Books/index.html","1b74a7845d72c985741bea9b7118306e"],["/Computer-for-another-major/index.html","aabb5e0ddf5179c775a7ad749d56af8f"],["/Conditional-confrontation-network/index.html","4ab957954007c9418589408fe0878edb"],["/DNN/index.html","1d9d975c4adca2602b82b89113fe5e34"],["/DSN-segmentation-liver-experiment-summary/index.html","d891de3c3ec58d71e69f3816d9235c4e"],["/Data-enhancement-elastic-deformation/index.html","cd41f1410a6eb2db56a87b7900153334"],["/Decorative-pattern/index.html","ce64c1ee5b38d540f332fedbb558c241"],["/Deep-Learning/index.html","d465cd809cfa25b4f7c2198e0d9e5f6a"],["/Deep-learning-and-medical-image-analysis/index.html","0816468faf2d6f84dbf571911a27b0bd"],["/Deeply-Supervised-Nets/index.html","926fe7674f5a2b04f7730a1badc8729f"],["/Deformation-model-based-sparse-representation/index.html","d7cc3b783298b21a110eeb2b5f89a49c"],["/Discriminative-and-Generative-model/index.html","ca9927b0fd59c362f1ee458a606e43a8"],["/Distributed-transaction/index.html","17ecca62ddcb8de28d019a02d54bd268"],["/Divide-and-conquer-algorithm/index.html","98ad0d48907a47aa1ec9f34f3f9e2705"],["/Dll/index.html","fd99fdf48b3c19cb74e5bd0439281a42"],["/Dynamic-programming-algorithm/index.html","dabd2ee813a656e579c814c7ed150f0b"],["/E-book-download-commonly-used-by-programmers/index.html","948d17bd119a66ddede02f82bdda74f2"],["/EditPlus软件的安装、激活和配置过程分享/index.html","6dc5ff64e0d158a7350ea0ed847ae413"],["/Eight-sorting-algorithms/index.html","806d60b9256e22f90a37a2792978a569"],["/Encryption-Algorithm/index.html","20412ab8f8ede56adb3971314c31c4d2"],["/Eolink/index.html","ac96742568c5df630fcfcbc1fd80274a"],["/Factory-and-strategy-mode/index.html","9a74bd548a5e73b32e91268bcce002b0"],["/Foreign-technology-blog-community/index.html","8358af6b71ff0a0f5bc3ab2531dfe992"],["/Functional-model/index.html","bca08295abdee517be9b70f0d865cfb0"],["/Fund-type/index.html","82b0bd8a9be19546896b0006f86a2944"],["/GPT-4o/index.html","a83aeb7aca57dc38a2d9fdc6e532b15f"],["/GPU-medical-image-processing/index.html","4db4146c1a22faf761e0fbd0895a00ef"],["/Gemini-pro/index.html","e468742c998206196ad7f34e090e98ea"],["/Gemini-vpn/index.html","db309a3e0fc6185fb69f25a8a1ba16d2"],["/Gemini/index.html","92920eadfa77857d9e7ace360c93efb3"],["/Generative-Model-of-Unsupervised-Learning/index.html","16e6c9158b75707dd44e960399c8859f"],["/Git-Learning/index.html","5e6e72c904d37b03767e9abee6c6df37"],["/GitHub-2FA/index.html","d763b828f473e0806ce7cccb5ff5be4d"],["/GitHub万赞，程序员必看操作系统总结！/index.html","82532324dfbb855efea98c62a3667cb3"],["/Golang-book-recommend/index.html","577272940b824a4f6244adacbab9aa26"],["/Golang-learning/index.html","415d9319c02243fee9bc3e238902429f"],["/Google-Gemini/index.html","6815610bd5df188e802c72816d4b28e4"],["/Gradient-descent-optimization/index.html","4ec6c7bd1136381a1a2a60a2ced3cb35"],["/Greedy-Algorithm/index.html","cfff88bd83c89999e6ba023caf4e9f4e"],["/HAND-User-Forum/index.html","51068f5c3451147cea0358a2c35cd779"],["/HK-bank/index.html","093cf63e46537086f4df34bb8a126829"],["/Head-to-head/index.html","0cd963cfd86069facf6c606804431e24"],["/HexoPage/index.html","b253b8e427e87294439c1db4293bc768"],["/HistCite-Pro/index.html","b44f87a70ced2256859db0ea10ddde12"],["/How-does-the-program-run/index.html","c2ec6e5653085a4e9bb2bed151933310"],["/How-to-judge-whether-technologyisreliable/index.html","fce173227bc42f08e10720c6c5db7590"],["/How-to-learn-design-patterns/index.html","3df009d39e91d8cea3203190f49a0688"],["/How-to-learn-design-patterns？/index.html","bf893ae874ab0310a8e5f16bfe42b2cc"],["/How-to-teach-yourself-programming/index.html","6d916d076a9c6835ff122c258b2f2101"],["/How2learn-Python？/index.html","80869158bb778639c18ef8a460206aca"],["/IDEA-shortcut-key/index.html","96d29ff5789a53cfe52160bee5cecd1c"],["/IT-interview-basic/index.html","e33eb88d6b85ed9775a7395799824645"],["/ITK-VS-install/index.html","b4eb4adacee33494b6bbe1b0fb6a9a4e"],["/ITK-VTK-ItkVtkGlue/index.html","76c448dbbb081f5b4640bfaf18c0c56d"],["/Image-processing-plus-noise/index.html","b74f1c8b1569efced0a349c4f5dd25b0"],["/Inception-Going-Deeper-with-Convolution/index.html","fefd4cde0dc54561492b5b3a8f997d8d"],["/Information-Cocoon/index.html","bbfc2744bee122621177817553f16914"],["/Java-GC/index.html","3a758625f0b3a2b757340dbacf6b9bc2"],["/Java-Servlet/index.html","6e12b842951b796cad9ca679ca25348f"],["/Java-array-and-collection-sorting/index.html","70022e113be985ac95e20e95c4a02381"],["/Java-development-tools/index.html","928518ea70de8d59e263f5c5647a0ae5"],["/Java-eight-data-types/index.html","5d0491949a11c561b60f01061f164a01"],["/Java-interview01/index.html","3f8f3b77996ef769ac5e56152bd16b28"],["/Java-interview02/index.html","ebb8a5b106d3d7055cc3aebc8d49ae65"],["/Java-interview03/index.html","fadac7317563328f8e512935ab2a5585"],["/Java-learing-map/index.html","33cca8e9469ab3de44cad360d4f59ba9"],["/Java-learning-route-map/index.html","e06108dac590c64284027aeb5afda9dc"],["/Java-memory-area/index.html","7297e7892f1e211ade952697904e227e"],["/Java-memory-model/index.html","1d3e66f4fe9f8efe192298bfbe62d0e5"],["/Java-multithreaded-learning/index.html","8b8b62a813edec572088384493a76c1c"],["/Java-project/index.html","a443dca35feb73ee18252171d7c80134"],["/JavaWeb-Chinese-Garbled/index.html","bf227272dbb450a0a2388e9761d15ce5"],["/Java还是C++？/index.html","d9b7b070e18c92b6f836aef2247c6847"],["/Kaggle5-step-guide/index.html","1232d7098d3b530bb3b7133369480138"],["/Knowledge-points-of-Java-garbage-collection/index.html","33908efaaf86aaed9f32fdf2bbf68448"],["/LLM-DP-TP-EP/index.html","123ece3b6b526664a5ecb5910c1aba31"],["/Layoffs-Hiring/index.html","999330e3981c23be79daa0dcff1a270d"],["/Layoffs-and-Hiring/index.html","ca3bce61b64cea737eb587e4b8a17537"],["/Linear-regression-of-machine-learning/index.html","f3e432f79da998e6f724cee29c0c807b"],["/Linux-Compile-C/index.html","256b803ec382e1a0bcea7e904cb63795"],["/Linux-ITK/index.html","94ef1c94fa1691313e50682c0d610326"],["/Liver-segmentation-of-sparse-components/index.html","6bd8c499adbf97041253bca95735a3b8"],["/ML-EBook-paper/index.html","4dab2df88fa81804cfec3d4d760c1242"],["/Map-uses-multiple-maps/index.html","2c99ad454b8b5812d994b545e0f30011"],["/Marching-Cubes/index.html","c83314b368c23e37b5aac7fdd74e3518"],["/Matlab-Graph-cut/index.html","a96d72ba825292ceee7b6878a198b85b"],["/Maximum-Likelihood-to-EM-algorithm/index.html","2acf59c57332d60cfaee237b2001e1a5"],["/Mean filter and median filter denoising/index.html","c8576360e2a86c6d4ffbcb043f8aa681"],["/Medical-Data-for-Machine-Learning/index.html","69987697d11fbf364711fb90dc059c6e"],["/Medical-image-analysis-deep-learning/index.html","dedd512712aa196d699bc1f8e6b85618"],["/Medical-scan-image-processing/index.html","a65738fcd9e915fe605232c32a184313"],["/Merge-sort-algorithm/index.html","1019cb4ef7a761bade36bc31d59802fd"],["/Monthly-income-2W/index.html","f5e6fe8f1c411b73bf8b88cbf2cabd25"],["/Mysql-database/index.html","0dce6971d651d566004e35013af5ea85"],["/Neighbor-Embedding/index.html","36f9a7db81a2127e32513190076a62dc"],["/Neighborhood-approximate-random-forest/index.html","b35edb34e011a9d38c1938f5676b5400"],["/Net-and-official-documents/index.html","dd3e87128e61001bce4bbeadef54773b"],["/Netflix-VPN/index.html","4b15259c86e83cd314e13a65f9dad63d"],["/Network-principle/index.html","df3e25840e76a168603b6442bdfe4f01"],["/New-Hong-Kong-stocks/index.html","57be856b8e17186a30975d63d98e40cd"],["/Nice-to-meet-you/index.html","ce49decddf6de79c3d7e6745b59be91a"],["/OS-processes-threads/index.html","1f0d069b3eac9a21236e84e116042843"],["/OS-run-environment/index.html","2b7a552c4ec97c54eb32d3089ae768e1"],["/Open-Internet/index.html","349f2ab2ffca08a6fa789e38aca9c575"],["/Open-Internet2/index.html","61a7685b5de5108d4623be67ad182ef7"],["/Open-source-community-and-rewriting-website/index.html","fb481e786211a8ef75fdd9a37b430065"],["/Panoramic-image-stitching-based-on-SIFT-features/index.html","e641b52c6d9ce9344bec849602bc356a"],["/Parzen-and-KNE/index.html","2d11c86fbf34a93759195e2f8616b2d8"],["/Personal-technology-blog-site/index.html","78acaac3a1db2833863a537d242a0821"],["/PicGo-Gitee/index.html","94edf1ead736a18fd09368e741f7186e"],["/Programmer-treasure-chest/index.html","87c37a0432e609f0150fe8e37031e5fd"],["/Prototype-mode/index.html","d2a56851e37f1d899ee43bc185cb5865"],["/Python-base/index.html","a87221831f124a891eb9124ee0b99eaa"],["/Python-crawler/index.html","677074e25a26a7aec528769c1b1d2bc3"],["/Resume-revision-suggestions/index.html","38ee0d3692b4ee8c5dbe615671f6bd96"],["/SEO01/index.html","03e9e6041c4846f4947f1f07be12f457"],["/SEO02/index.html","86bedc18c85d7e14995879c7c9f81f6c"],["/SPHARMPDM-MEPP/index.html","68dbf7239a184855b3f49a514f2a4602"],["/SVM/index.html","ee1fbbda9832685f7b37dd6992c876a5"],["/Seata/index.html","cbfab919aa26326475f4ed78055e81bd"],["/Semi-supervised-learning/index.html","5cdf01d00aadce4a57049cfe38496232"],["/Sequential-model/index.html","cef58eba3145d88a0e98f60dc0f5334a"],["/Shape-Based-Human-Detection-and-Segmentation-via-Hierarchical-Part-TemplateMatching/index.html","7dc4865dcb4d99c35cccfbdf23a7b61c"],["/Spring-basics/index.html","e7decb2c51f2682ba3fb6094eda02702"],["/Spring-integrates-hibernate-Struts/index.html","6bf3e2f8cee1961d815fe9ce709d4a32"],["/Structure-learning/index.html","78692989d7a30fd5abb7fcb36e27790f"],["/Suggestions-for-self-study-of-computers/index.html","d089d70b7f08def20538892b6469c53c"],["/Summaryof-HongKongStock-Account-Opening-Links/index.html","5d5e9b59e4597b122e51b2fe1bce01e8"],["/TCPIP-detailed/index.html","5be434dcf72a6b3e1363258d2593a710"],["/Telegram-VPN/index.html","959719d1cbd83c48953f6cbcd20586c8"],["/Telegram/index.html","bb0082fac0f361a4a3981c4d95892a72"],["/The-essence-of-shopping-festival/index.html","0edf80c7650dd56ea5755b7b59ed3a1a"],["/The-most-important-investment-in-life/index.html","872fb117337c95d5a85789f4b1624b8e"],["/The-most-successful-nvestment/index.html","8f0d2c23e8561b5a4f8393b4b7d423f5"],["/Transfer-Learning/index.html","f343b423399a0e266559e4048e275a09"],["/Transfer-to-computer-major/index.html","8e01855c01eeb4a8c0a0158890e0a357"],["/UNet-Convolutional-Networks-for-Biomedical-Image-Segmentation/index.html","1d2acf78903884b218137d0582f2e0b1"],["/Ubuntu-install-sougou/index.html","85407af83dbf39e771714a67ca19bd75"],["/Understanding-of-paying-for-knowledge/index.html","9b98b00c76b5f3fe2f3ab48766f4ead3"],["/Unsupervised-Learning-Linear-Dimension-Reduction/index.html","fa09644fd23dbb1ff7c361b1bdbeb5d1"],["/VPN-HELP/index.html","f2e665bbfbfdd077aef0d99825fe7828"],["/VPN2025/index.html","33f44796ef1ae31e39f18fd6efe6a2f6"],["/VPN2026/index.html","23450cc6c8c85c1872f77fe2fe948586"],["/VPN202607/index.html","d983f9d8bcfa6f638862256830965513"],["/VTK01/index.html","3b455dbbfc91f4c40b2a8b726d109ec4"],["/VTK02/index.html","ed257dac6e86bb8389316ea6d8483719"],["/VTK03/index.html","2c0c22f33cea1c73a11821616c1d8834"],["/VTKRead-write/index.html","a01808c91ff53f9415019fd9c7f63e35"],["/Vertx-Java/index.html","88d03ef13ccfb69549aea7f9ece4b1c7"],["/Vpn-OpenInternet/index.html","32eb934600c5b62f929c6ef80b9e1608"],["/We-are-all-good-kids/index.html","03a5bca6aa671fc498e16a3f16f74d20"],["/WeChat-80/index.html","550a7eba37c4dc08902ee71e9da4e2c4"],["/WeChat-red-envelope-cover/index.html","ab48328302d6313b2933e88308e25679"],["/What-is-crawler/index.html","db83cf1795793e5021b72712e7e9e256"],["/Win-Internet/index.html","1c9bdf0568cd5c4771a68a8828f42672"],["/Win-Open-Internet/index.html","3b48000bc3a6fce060356958efdd26ad"],["/Win-OpenInternet/index.html","5504b70b0ec2ef0664fce81807bdf4f5"],["/Windows-Android-Apple/index.html","b5199712b949095a4c844950c136bd4f"],["/Windows11-2kfans/index.html","7155b441d30252cbef8e32e701bfb55d"],["/Word-Embedding/index.html","dee4dbf5b9af28a2af9fb3b034060136"],["/YuanShikai-and-his-Beiyang/index.html","81b30e6877471f250f43d5aa4ef501d8"],["/Zero-copy/index.html","e1672b72a8792c5c6ade99841071bb09"],["/about-keras-model/index.html","237b958a7288276fb8a5d6579e463db2"],["/about/index.html","14f8fd4eedc76b4053a58b152f1fae6a"],["/accounts-google/index.html","eeac621ed6cf0f0890f56303ce65e323"],["/ai-tools-guide/index.html","abe29707d2b59f5068456c213ba6acdf"],["/algorithm/index.html","8467d3019703b9e9ef2fef7c15c6dafb"],["/alibaba-Java/index.html","1bf6b2565e4e688b0d0c3fade7577bec"],["/archived/index.html","2337b200c5d008a7a481f84b5a42636a"],["/archives/2020/01/index.html","7f2d04851db5ab225e20ff7745a9b11a"],["/archives/2020/09/index.html","3fa4256da5c7dd551149724017e3e517"],["/archives/2020/10/index.html","aa8a2dac6fcba13585406768dbc4faaf"],["/archives/2020/11/index.html","37a016eef5ad8a9bfadcaf7d2d946de6"],["/archives/2020/12/index.html","82e1c6b36f75bd35a145dbd9f5668a65"],["/archives/2020/12/page/2/index.html","ed5ae44029c9987f377d3a561f501542"],["/archives/2020/index.html","e06ee91e628fd8c3ad33449f804a951d"],["/archives/2020/page/2/index.html","25d71d3d989d45744a16657514ffd289"],["/archives/2020/page/3/index.html","548324e5a6a6e574afde89c45a73d95b"],["/archives/2021/01/index.html","b86d376a0f07ab17ab930bf7681cc546"],["/archives/2021/02/index.html","871a581b0cdb8a601e78ae3a22bc0e37"],["/archives/2021/03/index.html","a3b9e23114cb43ad4b243d00787c26e5"],["/archives/2021/04/index.html","1bd7a76d0ca24d970cc666bf61456da5"],["/archives/2021/05/index.html","50620d6a695e596d014a58ebeb72d388"],["/archives/2021/06/index.html","91d33237c48cab985d713429abb162d1"],["/archives/2021/07/index.html","98914fbea7bf35a5b8e3d32994354948"],["/archives/2021/08/index.html","ed57528d28ecc15ecc0e022201bb47ba"],["/archives/2021/09/index.html","26add33f5bc02c3a9613254e4c845376"],["/archives/2021/10/index.html","91679ecd10fc9f1ed9f2234dc4ae02b4"],["/archives/2021/11/index.html","dcea5652134407b1b7581afdf41a7b77"],["/archives/2021/12/index.html","64d3476b9c7a4d29091e3bf7fb5d1eed"],["/archives/2021/index.html","e01a37fb3ea16a2282fd84c0760392c0"],["/archives/2021/page/2/index.html","aa27217747b776731056a8431122761b"],["/archives/2022/01/index.html","fd575a491d31969c9bc0827b6b670b51"],["/archives/2022/02/index.html","76bcfbedf0fe1f06ec4efa1d9833f423"],["/archives/2022/04/index.html","bcff9d0c7282701d271bf7e2ed813be8"],["/archives/2022/05/index.html","a73935fb888d6a2e10f0fe1a198cd4dd"],["/archives/2022/12/index.html","e2c3d700661b7cd12152efd4914dad33"],["/archives/2022/index.html","9ac29923698692d6b0ab879bc6726a4e"],["/archives/2023/01/index.html","9b39c652d37f320c40d58c90e848171b"],["/archives/2023/02/index.html","70caecc255596ba77b9e61b7ce9b9be4"],["/archives/2023/03/index.html","8f755bf8e9fb61ed42735c896feb2697"],["/archives/2023/04/index.html","56929897995fa76a2d68e1aca5ece29a"],["/archives/2023/06/index.html","fbd9ba4baba5ddc51d0228e367a34f97"],["/archives/2023/08/index.html","20831c1fa806e7e8ea7efea01a748a16"],["/archives/2023/10/index.html","a3e7ed4ee281e215b5232f632300f8d5"],["/archives/2023/index.html","d27f6805ac5174e30f85346dee2c95f2"],["/archives/2024/01/index.html","2658fd677481262137dd2af2c52f34ce"],["/archives/2024/02/index.html","78e37df692614974f50dffd10e52c49a"],["/archives/2024/index.html","ca922e2957c5e893477620fc2e9cd1fe"],["/archives/2025/06/index.html","6957fceb5c794f7e370110aaf3a651c7"],["/archives/2025/07/index.html","8ef05c73aafab4b109552811c8299576"],["/archives/2025/08/index.html","d92165264a3698df6260083cb2334090"],["/archives/2025/09/index.html","307f1bbfdd4d2f9581a4a5870dcbbbaf"],["/archives/2025/10/index.html","6187198abe7dcada6b8de93f103ceda1"],["/archives/2025/11/index.html","1252b6bc4113fcdff02f897429ea9c45"],["/archives/2025/12/index.html","6e2ba960ab1f78ac78bc063d70edbd38"],["/archives/2025/index.html","799ab2ce723d3aa276d05abf10e80a19"],["/archives/2026/01/index.html","b95eed96349855ba5f46147a8430c103"],["/archives/2026/02/index.html","2918fc6b4425ad4b4cae3cb2fff616d5"],["/archives/2026/03/index.html","e385c30fc4bcb442c9078fa9a0624f1e"],["/archives/2026/04/index.html","b61dd37c20f7c740afd74345b290b5f9"],["/archives/2026/05/index.html","22892d2983e2126b57ef610f644bc658"],["/archives/2026/06/index.html","d561b9973f1e1ffad6e37416391b8116"],["/archives/2026/07/index.html","9897c7bbab0c944c98ab6a335259d25b"],["/archives/2026/08/index.html","830d8268feba8162498916802550f731"],["/archives/2026/index.html","ba0250ec55416a210524a1422d4d12ca"],["/archives/2028/02/index.html","979998729a14e8137ba33bbad6e4cc7c"],["/archives/2028/index.html","ad8635d794750d9a7052010a29ed3641"],["/archives/index.html","39c3f7e2bbdecdeb963be41f4bd1ef19"],["/archives/page/2/index.html","4bf4210aafad603b97f906afdaa93edc"],["/archives/page/3/index.html","fa729f78e3dad8833c6a0dfd8a217cb4"],["/archives/page/4/index.html","8978b2c16cb0f316880d6130c7303fca"],["/archives/page/5/index.html","e933cea3f82c127c16259b5077a466a0"],["/archives/page/6/index.html","5eeb054c2609c5ffb830b42f3a851dbd"],["/archives/page/7/index.html","5c48f44c329cfca10c3ba9fa2654a4ec"],["/baidu-search/index.html","4da363b7bf5b9f88fddc70200805793d"],["/baidu_verify_code-Hh2fKNlEB1.html","13ca3cf9126b09a5a664b92ef4e55512"],["/be-a-programmer-instead-of-a-code-farmer/index.html","2e720ca361721f3c7723166a0e726656"],["/best-vpn/index.html","747b00a5e7e6b6f1aa701a2702abc6b7"],["/best-vps/index.html","77c824d64160f1416e5b5ea750ca6a17"],["/bought-a-house/index.html","ef27030ab1c052c14011c0bbe9dfeb44"],["/categories/AI大模型/index.html","12d0764ad5fae2d65783c0f87e615953"],["/categories/C与C✙✙/index.html","02ea75914592fe75738ded195fff052e"],["/categories/Go语言/index.html","a946e83faa20322d423c0e3735529a5f"],["/categories/ITK与VTK/index.html","3956656319adff29f0fcc8e01225ac2d"],["/categories/Java/index.html","2829953d16a07c55629830374e7d495d"],["/categories/Linux/index.html","4b3b6e375f57878c0de70dcf838346c8"],["/categories/PLC/index.html","d886258983c13427c081a6667c6687a3"],["/categories/Python/index.html","0bcf7bad36d9b3f2bbc5d0fdca0df2bf"],["/categories/SEO教程/index.html","05a1e632d71b30d32f6c8b7b4e3dbf45"],["/categories/index.html","82fec5b90c96f7ce77f0ec10f778131e"],["/categories/图像处理与机器学习/index.html","27b948584231641966205012be59cd60"],["/categories/工具/index.html","0c3a897eba1044765f3b859c1be0ad99"],["/categories/技术以外/index.html","2d1f0589a3f9ae63247e1e82ae6d3cca"],["/categories/技术以外/page/2/index.html","ba91a8b8fc651ae83393d95ee6b4b964"],["/categories/数据结构与算法/index.html","a36a63f7f150c6cc83fc024e6df24f43"],["/categories/科学上网/index.html","9b48d7dd4edf9fe0bb0f247832324a5e"],["/categories/编程经验/index.html","076cf5f7ea1a46a6a013f458f5a6e026"],["/categories/编程资料/index.html","c7816bc5b08d761c6f94aca3ffe60746"],["/categories/计算机基础知识/index.html","12c85065dbb66b99df3824cf3df91f93"],["/categories/设计模式/index.html","81b6e109f8284124cb5b672755777c6a"],["/choose/index.html","be46a264daede285a63439945fea7374"],["/choose2/index.html","ddc89d3529c155d5d0263526964b016a"],["/chrome-crx-intruduce/index.html","2d97b0ff19257d33146fbaab3f92f4de"],["/clash-free/index.html","6ff8279cda391a1d3e7c9afc47090d4c"],["/clash-guide/index.html","cbd685639336a339b005ab30e92a794d"],["/clash-pro/index.html","291792378ab4635117ba7bf3543fc874"],["/clash-tun-mode/index.html","90d28b118eeffe9104bef31f1999c29b"],["/clash-verge/index.html","15c41b25efe0c21026f60a933469fe5f"],["/clashvpn/index.html","750b0f25d1e7c2f9c7f81ede43ee7a60"],["/claude-code/index.html","c5530f9d9f14a58f6bcb20ff36850e71"],["/coder-blog-website/index.html","08df76e412e6e51e3c084ac4d7990376"],["/coder-source/index.html","9eafb5e4297a7ee980cec243cc38e121"],["/coder-videos-website/index.html","ce3462e00a8eb8c4dc56866bee9e94de"],["/computer-book/index.html","4144955b864c440858e4329e5b59f981"],["/computer-censorship/index.html","1b26f75c74169884fa5de36c7f54a8b0"],["/computer-network01/index.html","c92df7283a904237e02be27714e40822"],["/computer-network02/index.html","d0dd6fe0a7db5b6f86c8bfc67c8924a2"],["/css/main.css","bc32ad34ec4990d934c3c647bdb62f79"],["/database-Mysql/index.html","624123ab984afec33160c549e03505c7"],["/eclipse-lombok/index.html","203b8c458046417005a2247d78d8d706"],["/freego/index.html","869547955ef11ca5e5c948f688520d9f"],["/fully-convolutional-networks-for-semantic-segmentation/index.html","6a1bf13a8f3457a49577faa90e546d5f"],["/great-firewall/index.html","4dea4c29d48d5e0aa354cb98c5909888"],["/halfrost/index.html","a48ccfce1196b62333d6430b63ee0c6f"],["/hermes-agent-model-config/index.html","dc0d2af404c81e8106129b28e01b6df3"],["/how-to-signup-chatgpt/index.html","11edbeb8ea0ea828eafa84b041c53296"],["/how-to-use-Gemini/index.html","390d60fec999ca055b36209b039398e1"],["/idea-continue/index.html","bba43148b6f755def6679a36bc31cdf2"],["/images/banners/A_modern_tech_illustration_for_2026-08-04T13-39-17.png","26724e93cce260b8e7c01db2c09e511e"],["/images/banners/A_modern_tech_illustration_for_2026-08-04T14-22-31.png","273b7bafe8ddcf9f92273a1589d5a574"],["/images/banners/science-internet-guide-banner.png","6a9cc99b131a112e949fa73fb0f2a248"],["/index.html","84210a4f867472af0a8dd9130da180ee"],["/internet-dir/index.html","2216ce5e001bedc862bb5452c31361f3"],["/ios-open-internet/index.html","d9eca57aeed235c80210c3bcedac25ea"],["/iphone-open-internet/index.html","d9f7c5201fecc6fc653d1eb9bb043464"],["/itext-makes-pdf-form/index.html","8c0a9e97d48b654be1d480d3a829af24"],["/java-Set-Map/index.html","785e6db02ee335cafbd0ab74a4433345"],["/javaweb-server-error-codes/index.html","8958d36783fdc76a5e478e6ac225cdc1"],["/javaweb-source-code/index.html","55dbd0ae1faa77f3e53c6cc5c7909f0e"],["/js/lib/busuanzi.min.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/js/lib/lozad.min.js","47904d34a224931dd1b615c59a3dbe3b"],["/js/lib/prism/prism-coy.min.css","0ccad54d95845901ead59bfd3ecceb14"],["/js/lib/prism/prism-dark.min.css","a4711d2957d6605eb5682bdd228cf123"],["/js/lib/prism/prism-funky.min.css","efedcdccd7a9ab342d2d9cacd24920af"],["/js/lib/prism/prism-line-numbers.min.css","38e22e790c279bb56f9ec4b90a2a2d58"],["/js/lib/prism/prism-okaidia.min.css","5ac6f9de996fbec68aaa106dfb16e061"],["/js/lib/prism/prism-solarizedlight.min.css","ecc7e64d039873ffcf7fb27babdaeb5a"],["/js/lib/prism/prism-tomorrow.min.css","456af2a14ae4f5089939d5904ac40fe8"],["/js/lib/prism/prism-twilight.min.css","ebb5c355332a8cf9a1ce37a2a69d678f"],["/js/lib/prism/prism.min.css","a5234d614834658887cec6a9515890f8"],["/js/main.js","052d2b299d9c750afea8df0b802ab7c1"],["/keras+TensorBoard/index.html","40babc411c3871f9f962b3b194e37647"],["/keras-beginner-guide/index.html","a02477a009ef22e6d77f7fe7a4267c79"],["/kimiclaw/index.html","31bfb96a1f509bbb301ddbb09d7a1a6b"],["/kmp-algorithms/index.html","886e1a1767e321d53b4680e1ab4cf4d9"],["/leetcode-Java/index.html","759ed77e6478ef3a6786d6fad8e79055"],["/links/index.html","bd9135e3b5b71b6edd96ec1ec476318d"],["/linux-java-opencv/index.html","a83f8053c0d95282470a1568721de19f"],["/magic-internet/index.html","a5dc169116d12ed9d5bd3c6073d2a3fc"],["/magic-vpn/index.html","11ae75e32597a0ec2ab39e2fd8432f58"],["/mihomo-clash-difference/index.html","738af3df586f760421fbc3cc9c34af56"],["/mingci/index.html","b8238de939e9897db9aaced852e4a39b"],["/mobile-vpn/index.html","eb28b6cd900ac359ad5cac4bb07e9856"],["/msb-source/index.html","703402f5d829dfbcd73c02d28cb9dbb6"],["/online-BUG！/index.html","c5b68925d8690d20ff842667ae0a6932"],["/open-app/index.html","2b1d14e375f01e9e31f612680098515e"],["/openclaw/index.html","2da41dd4e176bb7a544db9f75ba3374e"],["/openinternet/index.html","032cd4eee593818f614e5aabf96b43d8"],["/page/2/index.html","6b76cd4bc15eeb6c6d5d63405180cc40"],["/page/3/index.html","45cb52126b6e28065dc7ce512d159857"],["/page/4/index.html","766477de74df7cd58f018aec6e56ce1b"],["/page/5/index.html","e05f1dee78084b7d59cfa6a7f2f84b5c"],["/page/6/index.html","02941a416f0d1e6744c47dee9d776670"],["/page/7/index.html","9cc0c07f477a6982b19924a6617de842"],["/pandas-data-preprocessing/index.html","2ba125bb5aeffe4edd575983e9716553"],["/phone-win-open-Internet/index.html","4535ce704686dad357e45563de68e60a"],["/popcorn/index.html","fe6550b49c029841c0b06d14f5b8ffab"],["/protocol-cheatsheet/index.html","b32ad01b4e729588363cd2b2f2c4c7cc"],["/protocols/index.html","6da23dfe7ae4633c5d33dcb9ccfd1427"],["/python-Blog/index.html","d2efb29115aecacfc0e90e12567b2d72"],["/python-yeild/index.html","232989690aab81d6631ec9503cd1f5ad"],["/python爬虫教程/index.html","9afceb101d0df2ef9032c3f34c36bf7d"],["/rmux-agent/index.html","668fef69b1a4e80f129066a76409e4b6"],["/route/index.html","836252322a8a8e3d25dd11a0848c7bc7"],["/science-internet-guide/index.html","f927c2a63dad76ed9feb8c4125047e3a"],["/search-help/index.html","75a525cb5d8aa7c519320d413e1ab31b"],["/software-copyright/index.html","8216950e4b5f536d302142b0cf7a51b4"],["/sw-register.js","6a71f0f48f8b312dc053f199683e4913"],["/tags/AI-Agent/index.html","52bc0e9598c25e084b36ce7415e48e9b"],["/tags/AI-PPT/index.html","0ce216d4894b16f57fdfa3c02e388035"],["/tags/AI/index.html","9d7f613399f9bbb94786d05872428df2"],["/tags/AI写作/index.html","f555d32677ff366a3e42352e232220ed"],["/tags/AI工具/index.html","bb7cf2b827f8785c0d2fd8e9e1970ab6"],["/tags/API/index.html","c6fc3515ea71da9719613b36e8c5fa65"],["/tags/C-图书/index.html","8cbdc65fb5691fcda250a7a55a75ec6c"],["/tags/C/index.html","8232c146302a2c3a8b3cff8c5c24500e"],["/tags/CNN/index.html","5f13299c4fb312425dc5534522efdd55"],["/tags/ChatGPT/index.html","e81c29730882e42d46c1123d77bf8ca7"],["/tags/Chrome/index.html","b1452b65a2bde54d24d77bf4d21cbd64"],["/tags/Clash-Meta/index.html","cc9269d7135414dece89e265776f757c"],["/tags/Clash-Verge/index.html","d846985f4c69a6d9f391e72289d5686d"],["/tags/Clash/index.html","17c12e8106c8934d51f91992d5012685"],["/tags/Clash教程/index.html","c9b51db284ba9588807217ad71d21564"],["/tags/Clash机场/index.html","98aa235ab07b3e6bf8ea3d643cbd3617"],["/tags/Clash订阅/index.html","796fd8cd3b2b4938839a58acdd43eda6"],["/tags/Clash配置/index.html","6e73f4968ccd7f2e920fcafdfa038204"],["/tags/C✙✙/index.html","6ee60f4237d33227b8970ebd98a66f34"],["/tags/C语言/index.html","53aaaf0cb0a8d3b6783e9b1ca74fd18d"],["/tags/C语言图书/index.html","83793653c1b9cc9d2fab9cb314017a34"],["/tags/DSN/index.html","60ae3781635378e67668e8faa956bfff"],["/tags/DeepSeek/index.html","2ee61bd4e3308501cb38253d48fe44da"],["/tags/Dll/index.html","0c9202c6de62a4cca6e7e509d26629e7"],["/tags/ECCV/index.html","8d13e966ef6d9228c6a984dd0f153542"],["/tags/EM算法/index.html","885c72f7c6413c050c826aa3f69c8492"],["/tags/Eolink/index.html","4077737a34c919867d932e17ac2b3a8a"],["/tags/Gemini/index.html","5bfcadfdc30e46ac9d71305b46c47865"],["/tags/Gitee/index.html","eac5d0ab04cb4c49e555c663f7815129"],["/tags/Google/index.html","713c9545a8876ca479c00ca6ef423690"],["/tags/Go语言/index.html","1f7b495bab1931799d9421a79f1f9238"],["/tags/Graph/index.html","c1274184c9b2498e0d54f023f68302d5"],["/tags/HTTPS/index.html","a2e9c47c3c675eb98b8bd38f3770e45e"],["/tags/Hermes-Agent/index.html","a8fce8ed9f1f02a47cf074ae55954a4e"],["/tags/ITK/index.html","f4d3ddeb558f85c80d8e7576bc83cfbb"],["/tags/ItkVtkGlue/index.html","e5b9c60350a83364ced42d906784284f"],["/tags/JMM/index.html","79692773ac810a145923ad891b3ab31d"],["/tags/JVM/index.html","fe21e9125942c8a3e24bae863fb736e1"],["/tags/Java/index.html","0126eb7a13a243f1523bb86a4842387c"],["/tags/Java图书/index.html","78a40e962e9da8995b5fe4087bf19362"],["/tags/Kaggle/index.html","ae8133e61f823d7a94b7c89400a821a8"],["/tags/Keras/index.html","7788c145d69e07577b5f1ebfe744bcb3"],["/tags/Kimi/index.html","8f3a07034fa8b9a510577a086e688912"],["/tags/Linux/index.html","e7654e34a98756aa52f0760fffd2a84c"],["/tags/Linux图书/index.html","daec34b12f2b82d741276d1d542b497f"],["/tags/MEPP/index.html","2b57e67e5381938d8b2d06b7c3123443"],["/tags/Map/index.html","141dd4106f0302aed6081a655dc983a7"],["/tags/Matlab/index.html","f57c78f07d2775353f8cf1bd8963c168"],["/tags/Mihomo/index.html","1b4e98a6678a915f3deba9959c1728d4"],["/tags/Mihomo客户端/index.html","7ac0d6c9a124dcb000e3f7ccb759c98a"],["/tags/MongoDB/index.html","037f0982daa87fce4c5e0c3152449537"],["/tags/MySQL/index.html","8f65747a4c5f126a491e9984b3087b8c"],["/tags/OpenClaw/index.html","5972df012c57c2277579e1bca1d858b4"],["/tags/OpenRouter/index.html","c9117d164c2ca2e57c6bc8294f2bb286"],["/tags/Parzen窗/index.html","9e620f5f82218cedd1c8f00ba4d662d9"],["/tags/PicGo/index.html","39a079a5ab0be1ee1484263ad101859b"],["/tags/Python/index.html","a67f738ce279d5d67d49efe749e134e7"],["/tags/Python图书/index.html","2f424b6c8d589c4e6efba2cb5644bfd6"],["/tags/SPHARM-PDM/index.html","577b64a7b885fbec722c23622a085ee3"],["/tags/SVM/index.html","b88878ca393ac3af923bcca641ed819e"],["/tags/Seata/index.html","e74f47df6c5361695b5109e659c42569"],["/tags/Servlet/index.html","742748bcc91c358cefb798b4190a36e4"],["/tags/Sping/index.html","3e6abfdfd889bb455ad8a6d0583f7f02"],["/tags/Struts/index.html","eb181da9426e17738bd667ca5fdf26cb"],["/tags/TCP-IP/index.html","ec06d315c94c924af371bf5139c7a8f8"],["/tags/TUN模式/index.html","be94262de4d5b11a9e1ca9b9a21aa2ce"],["/tags/Ubuntu/index.html","cdafd208723be8a721852792a4c0d730"],["/tags/Unet/index.html","79a014d949e08821d0bf1f0ea6d1a75c"],["/tags/V2Ray/index.html","95340fa38e008aaeae63f4775e937365"],["/tags/VPN/index.html","988367ebb4253d333406b45044f9da55"],["/tags/VPS/index.html","9307d9dbc3b5d4a3f31126084b922059"],["/tags/VS/index.html","1334d9b32fa34de53809fbf18a50b8b2"],["/tags/VTK/index.html","5e19c58e27e4bd65439a1c3050cc57ad"],["/tags/Vertx/index.html","09dfe3838ee3ea8f903d3b930414af1b"],["/tags/Windows/index.html","2b7f732511556cca73f52c512fd943c7"],["/tags/Windows翻墙/index.html","c3c32088ea39893c12f68534fe578639"],["/tags/claude/index.html","6ac143e722e19dedf508befee8e2ddd8"],["/tags/config-yaml/index.html","67ddbae5606e20d45b0c08a3f08dd483"],["/tags/edit/index.html","4df3f04247bf3e7f8f065279f3b9ae85"],["/tags/hibernate/index.html","1d462af1d45a3ec2c4fd19f971212afa"],["/tags/iPhone翻墙/index.html","25c49a68daa04473acb8897c4a07ada7"],["/tags/index.html","e87886f9daf8877a415c904296f7ced7"],["/tags/itext/index.html","7c268b37dc7dcb1e2d3f4c9c697aa69d"],["/tags/jdk/index.html","95c0be2ca6893abd1ba00b35eeadb318"],["/tags/kmp/index.html","e2b45120340f79e8d20007df872288c7"],["/tags/k最近邻估计/index.html","aa020383c2d7aefcfc46069b7211c68c"],["/tags/lombok/index.html","9b6439641c265794104537d6a7a08733"],["/tags/macOS翻墙/index.html","48bd293518dd6f5236194047200cfb82"],["/tags/offer/index.html","8bf3f77b9d7aa2376e203bcf40e037d5"],["/tags/opencv/index.html","02a92bc0a4e3c7775a64d4110ded6681"],["/tags/pandas/index.html","016f630567ed2f308b32195b87e1eb0e"],["/tags/rumx/index.html","c258f7f11f882a580a087523a508924b"],["/tags/string/index.html","4976eb98184366dc1766359ff941ec3a"],["/tags/vim/index.html","00dce913e7336e8fb7071f10d0d6d400"],["/tags/vtkPolyData/index.html","58e14091150b35f3788a86eeee6d5873"],["/tags/web/index.html","5c1c8527f96da856801d37537bae8a44"],["/tags/xshell/index.html","2aae2ae409c9c01a6439a100fe8202ce"],["/tags/yeild/index.html","a6dc9adec194864d41da43c6fa856aa7"],["/tags/互联网/index.html","530a41719d49102b04e0448de4a72046"],["/tags/人工智能/index.html","887526ae873f36470424a27d25ac603a"],["/tags/代理/index.html","ba6673ad685aa33683d8113183a6abd8"],["/tags/代理协议/index.html","ac93e7f870ced42f9e812097d259b417"],["/tags/代理客户端/index.html","bd836df6a51fab2ef35f738b9905d33d"],["/tags/体绘制/index.html","94272cee272f0bfa89886a335af98c7e"],["/tags/全卷积网络/index.html","80f1ea720e1ef1e753050f4bad22f077"],["/tags/公众号/index.html","73a3338c7c1b17b59c03b59d3db7992a"],["/tags/内存模型/index.html","55f5dc9b2ab8f05cd235fc4671b97b73"],["/tags/内推/index.html","42418095800c872d9ec9fad2788169b0"],["/tags/内核/index.html","54c448ca8c0d1057c3c9314cba10aaff"],["/tags/函数/index.html","50fb1957ebc02b66568e2d71a96386ac"],["/tags/分布式/index.html","6adc258cc78ee204c9daacb08a263418"],["/tags/加密/index.html","db533f9495278d77a91930abb5b76588"],["/tags/医疗图像/index.html","2e56001f4728c27a694129f7aaa1d9e6"],["/tags/协议对比/index.html","950adbf874b433d0dc46e7ec0ea97b42"],["/tags/博客/index.html","b8aebaabc121d6d6223d3da928d481e3"],["/tags/图像数据/index.html","ef8f0e49019ca2acb3306dc189f052be"],["/tags/图谱分割/index.html","ae83b433b7bbad0c89a6a554c8111354"],["/tags/垃圾回收/index.html","df86fd6b325e8df1724efd981fb1b30b"],["/tags/多线程/index.html","f81425fdb6cc5b22056283693abe825b"],["/tags/大模型/index.html","c3dd7888719446589664160aa561080f"],["/tags/字符串/index.html","f0541107068e7338c086b55c03f1d548"],["/tags/安卓翻墙/index.html","9f8393b193abcee6e09b49e93914c6d2"],["/tags/小龙虾/index.html","051a7e2a5838061f2d59a178ac76f70a"],["/tags/工具/index.html","e08fb95ed50c0b687929960afc6c3408"],["/tags/弹性形变/index.html","9f84af52013d8e8977d68fb89fb9edf4"],["/tags/排序/index.html","af8a592b49664c2361d27bed65eeab47"],["/tags/搜狗/index.html","a1ea92be9dc519b59be8c6c7e004a20e"],["/tags/操作系统/index.html","c48857cf146b7e27883402c520dad45f"],["/tags/数据库/index.html","a81a9f8a403958348747dd7dab07655a"],["/tags/数据类型/index.html","74fa5edf472a646a0b3b2589f31e37b8"],["/tags/数据结构/index.html","93122cd6655a6abea74c3e421cd8c900"],["/tags/最大似然/index.html","ad70cd5db49dfb293b1ebb387cedb203"],["/tags/机器学习/index.html","bee452a21a11472a01e9a8d1c77a706b"],["/tags/机场/index.html","11b30a3a53228939c3a1e0c6b37af8e3"],["/tags/机场推荐/index.html","dd7bcb78eff2c64706f51087a7574240"],["/tags/树/index.html","cd35ed5fd5dd6d8f7eda7c8b0a28b955"],["/tags/框架/index.html","77c97ff4de110495d949de5aec79c914"],["/tags/梯子/index.html","bd0f6c522cb110ab0d09bccf6cf33ecd"],["/tags/梯子推荐/index.html","e1f4b66d43470ac315dd911449b479f9"],["/tags/模型配置/index.html","c12e298fa9a429fc3a044861e20d5b1b"],["/tags/求职/index.html","1c6a761a51bf8a19512bd7ecfc9c6efb"],["/tags/汇编语言/index.html","3d5a256a26577b35b5bcc777ad95c048"],["/tags/深度学习/index.html","7c574e10a58f6c6a6231564aaab7fda4"],["/tags/深度监督网络/index.html","711b6f9c6a41cc4fc48d1e15876cdf6d"],["/tags/游戏加速/index.html","8ae61e9400e1c6dc354a5b734e3e6cd3"],["/tags/爬虫/index.html","1abbb794cdcbaabf673a4e943a4543f4"],["/tags/电子书下载/index.html","ec37b52d5157805e129a009e212dd05a"],["/tags/科学上网/index.html","b803c7e9a9cb7745db25b2e09f4db224"],["/tags/程序员/index.html","575fce7b67f7a9848c4f01638b49b49e"],["/tags/程序员面试/index.html","524b8a304a2a9c2d29d3f600b9392523"],["/tags/简历/index.html","259976b8caac4f7cbb497a14ff8d52aa"],["/tags/算法/index.html","7b1ecc21beebaba188ef125dc23e377a"],["/tags/线程/index.html","4aa5706907daa7830586cf4e18a1cab0"],["/tags/经验/index.html","8579cba64b7548b384aa45cf78abce05"],["/tags/结构学习/index.html","1d1c5a8486fc3e4534e4fa4e62d95902"],["/tags/编程/index.html","c02718eae61f303d65ef07cbd55a59bd"],["/tags/网站/index.html","a8a5e11320ecdacef8b758a36e7ba9ed"],["/tags/网络/index.html","52c59d2e94c298c4890231bb4481599d"],["/tags/网络原理/index.html","ab5a7d349f7fce9103b78ad4bac16f71"],["/tags/翻墙/index.html","86dacea3bac16ff00ccda3cd603be283"],["/tags/肝脏分割/index.html","b2f635c9453ed8dc5161ef73f118206f"],["/tags/虚拟网卡/index.html","9889603588779fee73726a5fd711d21e"],["/tags/计算机/index.html","fe55ace58d57b8c69da39a6906511c42"],["/tags/计算机专业/index.html","d0af314a3f575d79904cd46397b88584"],["/tags/计算机网络/index.html","3f1f45ed156c6bc9f19ecc5b31167578"],["/tags/设计模式/index.html","59e33cd5b547b32fa63e959c5dc2cf03"],["/tags/贝叶斯/index.html","399888cb38fafc371fdd9fcebf5cae09"],["/tags/迁移学习/index.html","363493ea058f56cfe027667fa6f4af85"],["/tags/面试/index.html","c9b3dc1a8588360fa4c3d91f5470645b"],["/telegram-search/index.html","93252315c80ef7556fad3de08478c5be"],["/the-meaning-of-reading/index.html","df0799c8821b5816e670ed5f59dfcb7e"],["/the-way-of-pragram/index.html","5052744ee71e80b6436bd913929283d2"],["/troubleshooting/index.html","8184b2304520fbaa49f2052a51a9e5e3"],["/untiypro XL安装/index.html","2fa9b991d2f0b4ec61840c6a78880d74"],["/v2ex-eight-sorting-post/index.html","52d006f7f52426095989adeebcc4fdf5"],["/video-websites/index.html","e033dc71e495b576874134a7f284e883"],["/vpn-freego/index.html","8a10cebbf31f81b8e81fae9ec1d3b217"],["/waibao/index.html","47356cd4ba936c940261f6991191978c"],["/wechat-fans/index.html","27b30b70ab2537fb1fcf19da5e12a4c0"],["/window-run-VTK/index.html","d2c4d9123787285b2ead15e08a405781"],["/windows-science-internet/index.html","01c2dc1bbc7f758bc17945e36756001a"],["/xshell-connect-Linux/index.html","1b6520cbc6f145c8e370e39f934943d5"],["/yzhx-vpn/index.html","9d035bea98f6bda441dd4fb827234d9e"],["/《Java高并发编程详解》，去大厂必看！/index.html","df0fd52cb750d7f58d6229ad4049630b"],["/一分钟没了 1.5W 。。。/index.html","3560e1e5591f478598508426db92745c"],["/一条高产爆款内容生产线/index.html","bb07e2842092f8fbb20138a389d1af1e"],["/为高考学子推荐的六个就业前景广阔的专业/index.html","dba729180dcecc6af4a3041b3ba00995"],["/互联网赚钱机器---社群/index.html","270824442efcaa252e25b7ee6db8af72"],["/你们常用的工作方法和思考方式是什么？/index.html","e6a7fb1bddecd89dbf86887f2ad89f8d"],["/关于环境配置的一些事/index.html","6a2113b31cf68eb11a09251d9e8d71fa"],["/准备了19w！搞事/index.html","539685ceb9ce5f28cf2a060d58273765"],["/几个很重要的感悟/index.html","93a5538b60807884cecc5a534f02383b"],["/分割ROI篇/index.html","da1348afee5cb80ad79ef7a0de14c4ce"],["/分割精度说明/index.html","90000e952f0a8ba16de47844a996b05b"],["/分块程序执行/index.html","f894ac2c16bf3fb65b2095c2ba8ec6b6"],["/加班公司黑名单！！！/index.html","69519b48d9cabb3ebeb72f2d0117f412"],["/卧槽，上知乎热搜了！/index.html","22b5814b814aa0fd81bbbce914fb4375"],["/卧槽，我的小破站爆了！/index.html","71569471d4258e6e32265c03ecf18849"],["/卧槽，我被盗版了/index.html","1472985676769eb41ae0bf1bfb4683af"],["/卧槽，还有985大学在大一上C语言课？？/index.html","c451011045ef8c2c3e5412c6711d222d"],["/历年微软面试中出现的leetcode算法题/index.html","7ad31fe9e5eb86e55a8189769df36035"],["/去特斯拉试车了/index.html","1ffd243e7a02232c454a7aed40f4c915"],["/吃苦的三种境界/index.html","e58b85eeba247742bb104ee17a6fefbd"],["/哪本书适合推荐给 Java 初学者？/index.html","a8bc74d2b08741ad6199bd4015859fd3"],["/哪本入门级的学习数据库的书最值得推荐？/index.html","56d907f5786a566134d4de119cb87ac2"],["/国内外常用的AIGC模型/index.html","f21fa772649d43cef70d068dc4bb0489"],["/国庆假期/index.html","e71c01523f04367860dca2addc85fc94"],["/图谱程序字典/index.html","11b62aeb7666a7f395d9ca96eb616eae"],["/图谱训练与分割/index.html","f71fb17571459a8e11c514c5b2fe9d19"],["/宣布一件大事/index.html","6b6142e89ef2a1f217a7f96b5c7487a0"],["/小鹏P7i试驾体验/index.html","798e18fe610e6c3be28e7093e6e7baad"],["/微信PC版3.3.0内测更新，电脑可以刷朋友圈了/index.html","bbafdb1a4a99b1d09ee9b8d722c4a068"],["/怎么更快的赚钱？/index.html","e1355d191adf75d92231db859e73ade9"],["/我毕业了/index.html","94fcbfc245cea76b9c1f2439f9bee7bb"],["/我！真！的！找到了！爱上学习！的方法！/index.html","7f08a5ad020fba2824b0c461a1ce0b29"],["/户口的意义/index.html","196943f657f27ceff9189d4312f5a002"],["/推荐两本经典算法书/index.html","a89985dc5fad00d71b3c3541374c8c1d"],["/推荐几个在线学习SQL的网站！/index.html","fc7e2dad8ef7b5e3b1bcf883bc1b1799"],["/搞了一个程序员成长晋级社群！/index.html","6aebb67f821e5fc41a403cd98e3c2be4"],["/摘抄/index.html","bcb20c05cd4603f7c9e78896ab10aa57"],["/暴跌30心态崩了/index.html","b15d1228e247936c535806f5ddf1495c"],["/最近很火的ChatGPT到底该怎么玩？/index.html","5bb893e9e89a8496862072adb7828d75"],["/有哪些好看的日历可以买？/index.html","97d99c68ec482bebe41903d427a7086e"],["/服务器有啥用/index.html","35ab67c6c84073d7a973658346278917"],["/来长沙了！/index.html","38cab98b72e74a5016622382324a573a"],["/校招污点公司名单/index.html","236426d07e0ccdd75e2f5a63667d47cc"],["/梭哈200多万/index.html","6fee48fbfb15806fb678118d3d658082"],["/梯形图入门/index.html","96edc2e46289a437287c4e98cde67e71"],["/橙心优选，凉凉了！/index.html","a3fb64c59794fdc572bcef570f29a6a7"],["/比亚迪汉试驾体验/index.html","7319a051b8ccb18ee74663bf212fdb0b"],["/清华转学成电，真的牛逼！/index.html","623929016f6755e9b050c120206ad483"],["/滴滴程序员被亲戚鄙视：年薪八十万还不如二本教书的/index.html","c4404e3152bbae823b7f55b1e4d2f8c5"],["/社群！/index.html","aa06a08e4b8334582003086046e8a011"],["/科学上网之VPN篇/index.html","ffc74b0c70b7b47b1bf998e6958be727"],["/程序员必备的几个技能！看完你也是大神/index.html","67220aec0080a3967068fcec5391cd34"],["/程序员绕不去的槛，Linux！！！/index.html","fde8696f5205581307c5302534a30212"],["/蔚来ET5试驾体验/index.html","c01a191c88490e735ccb13b375e9ed02"],["/蔚来，牛逼！/index.html","f5fff159c372844adc7cbb48ddaff096"],["/被录取了/index.html","1609a67aa751a6a34b688798a476c7f1"],["/被找事了！/index.html","a922376949f4e5eba0cebb5802b3dbbf"],["/被拉黑了。。。/index.html","27a931fd84cc7fd6033d09c8dfccb269"],["/被车撞了！/index.html","a4c2711f5477b4b2ea6e7db4c28911fc"],["/该如何选购固态硬盘？/index.html","81916f59b3c18bb04e89ad4118ca872a"],["/这本书一定要看！/index.html","fd87bc51b5515b0d8f20e95bb041c514"],["/选Java还是C++？/index.html","413aacdf50034e70f3e8daddc1a01d63"],["/那些让你起飞的计算机基础知识/index.html","e54f9e425efae7fe50c4074876246bf4"],["/靠这几本算法书，成功拿下大厂offer！/index.html","cdc4602e4b0d18030fe935aa51781920"]];
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
