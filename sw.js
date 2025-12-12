/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/0010-city/index.html","71e18d8a9c1651a080932b4098672664"],["/10-algorithm-book/index.html","b146fa395189ef00f9f360970be7cdd5"],["/10-website/index.html","6bdc8873ab78134f961d39ffe75e50fe"],["/100万的小目标/index.html","b0739e4febdc04866d672d2dd1facbe4"],["/10w+YYDS！/index.html","5feee4f009675bf0797ca06cbb48edc8"],["/12-technical-tutorial-sites/index.html","39de268b2d30440e36891435a0d7c513"],["/2 6 岁 了/index.html","ead979b2a36c3637c4858379b0153214"],["/200万，啪，没了。。。。/index.html","7fbaf69cf88f9c2d8001cadb253fdba3"],["/2018ECCV-Paper-DL/index.html","405a8ef41b07acad8d87a29bd5306ad5"],["/2021年固态硬盘选购最新攻略（小白避坑指南）/index.html","d76d6a7fe150eca409a412ba205ac2d3"],["/2021机械键盘推荐/index.html","9f14a74f767b3b66ee976a3c8ae7a060"],["/2025-07-15/index.html","8bede91229b55a565e9941fe41a0db10"],["/27岁了/index.html","bde615a1cee24a1662426b2ecab25ea6"],["/3D-Convolutional-Neural-Networks-for-Human-Action-Recognition/index.html","c982a130749adae16cc3be5ba1f5ee18"],["/3D-Deeply-Supervised-Network-for-Automatic-Liver-Segmentation-from-CT-Volumes/index.html","8f70e09fbec5b564e636a5d21f73d4f2"],["/3D-Unet-Experiment-notes/index.html","bced5c6f21f8ad956ce51c8fd50199a0"],["/4-Software/index.html","1c51195a25551039408019389eb8bc02"],["/6-website/index.html","bc3eaf1f46d1b22603de201381376f9a"],["/7-terminal-tools/index.html","f37eb85cf370261dc17b19594e84eb64"],["/AIGC中典型的深度学习网络/index.html","7c7247fa0f81e402a9e12a6438eb8480"],["/Agency-model/index.html","c888b78bcfcbfe99983fa9f710a380b9"],["/Algorithm-brush-notes/index.html","0f4842637df023905f28434d5cdb7bd8"],["/Ali-recruits/index.html","444aeb7f461cee091a7cfec3b471df58"],["/Android-VPN/index.html","5faa8e719741f1f2f099c1a6bd376065"],["/Android-open-internet/index.html","0a0676c734acdb3a10ec499f234ac9e6"],["/Appearance-mode/index.html","c569bf8a387811c3511b5e54e09629fe"],["/Backtracking/index.html","0295b89365d4cb1848bb9aaf247f82bd"],["/Baidu-Sao-operation/index.html","28103c3ee75471e2f9d7e6a74b12bcbe"],["/Batch-Normalization/index.html","f06ae370fdca79e323b96c36aa7223bd"],["/Best-AI-tools/index.html","a4168f2a9c2a7c299860b8247d4689d1"],["/Bias-and-Variance/index.html","01176fb3156175332f5f4884e54b5cdb"],["/Binary-tree-traversal/index.html","1d9bc7705be566f2881644facd8b95bc"],["/Branch-and-bound/index.html","1d16d535b366fb39812877313846528d"],["/Buying-computer-for-the-first-time/index.html","48dbb60b937cf0573cb4af54b2f65db6"],["/B站向北邮道歉！/index.html","a4b0fdbc3dfcfd42bf4ccb46dfb1f635"],["/C++-string-function/index.html","97a5a65842e8694f788dcd41b0ac5ff7"],["/C-Java-DevelopTools/index.html","651bb791f7b94b65d9b64ed999fcf5d9"],["/CS-Classic-Books/index.html","59f2125885d64c5157e1f30e2cbfd20e"],["/CS-network/index.html","c7669f63eed214c276e37064f5258d85"],["/CSBook001/index.html","0b183f217b58bd7e6141c869bdeade06"],["/CSBook002/index.html","121b559958f30102645261a1734bb99d"],["/CSBook003/index.html","1b34fa69c892ee5cad646d08c048c57c"],["/CSBook004/index.html","1f8f37a1f35b9d133dd81e20798528ad"],["/CSBook005/index.html","77d6a1bb709d19ceef4b77727ff9ff8a"],["/CSBook006/index.html","aa33a0a95e57b533b9082e422709a0ed"],["/CSBook007/index.html","4c49208720cfee42f834be8cc5d9232a"],["/CSBook008/index.html","69ec9540b65968f2efd4d1ae947bdbaa"],["/CSBook009/index.html","1637049f56e119783e616b63978cef63"],["/CSBook010/index.html","f995f19ec3f384ac7ca3961710617829"],["/CSBook011/index.html","b7ca8bcb143007dfc8ae870b29a1bf31"],["/CSBook012/index.html","fbcba7397041ad9f435383c0687f7d13"],["/Changsha-really-fragrant/index.html","fe9c7b76c96931917ab423b37f029e8d"],["/ChatGPT-VPN/index.html","e0d1d90a80064e611b5c209b6b793565"],["/ChatGPT/index.html","b596c4cf423c3e5b82605f5e708c9e89"],["/ChatGPT！王炸级更新！！！/index.html","d8ea8c7191716356bb6d7f01ba5bb01d"],["/Chrome-crx/index.html","c00404701e12023d321842f0f5394bc0"],["/ClashForWindows/index.html","55f27ab0b5a128b27475c943a00568b5"],["/Computer-Classic-Books/index.html","900069d5de63a3e7d26d2bfa5ed9fc21"],["/Computer-for-another-major/index.html","f340536424b5efa0f4da39408d25cd19"],["/Conditional-confrontation-network/index.html","fe6220cb6695b89c1397b5f957e07380"],["/DNN/index.html","3f827f8d139b6278c35450b79aade95f"],["/DSN-segmentation-liver-experiment-summary/index.html","d3600c19e3ddb5cde8a5a70541a4fa79"],["/Data-enhancement-elastic-deformation/index.html","0cd8828e380c9304b2d2f25c658112ff"],["/Decorative-pattern/index.html","6c9f63c4585d211ccea5b5f5725674df"],["/Deep-Learning/index.html","ec4903b2e85e9897b7c1245d67a161e3"],["/Deep-learning-and-medical-image-analysis/index.html","ac2a8c238579a4eecaf4885d21ef35c9"],["/Deeply-Supervised-Nets/index.html","3b99c7cdc12b56c980f2295979a8c4ff"],["/Deformation-model-based-sparse-representation/index.html","98f705b08f8d25de336907d7d5cd6a43"],["/Discriminative-and-Generative-model/index.html","538f79cfdda4b71e01bea70019ddc9a3"],["/Distributed-transaction/index.html","42933da073c553a8e3dde2649ca85711"],["/Divide-and-conquer-algorithm/index.html","46c5db4fa3ad022fcb6c6028949d89e5"],["/Dll/index.html","0611f0c49f827b8246bc926213a2777d"],["/Dynamic-programming-algorithm/index.html","cc21c0ff7b2d3636b24fede04bee1f0d"],["/E-book-download-commonly-used-by-programmers/index.html","fc3fc338c53fea9a9e11054374bb2366"],["/EditPlus软件的安装、激活和配置过程分享/index.html","964e3cb28bd75d53e39f4b9640436fc7"],["/Eight-sorting-algorithms/index.html","ba96e00b8662637708fe9f533ace700b"],["/Encryption-Algorithm/index.html","6f9815dd1d155967ee971e74e7517b78"],["/Eolink/index.html","b5397d03e216a677d49dec7a1b47a7d3"],["/Factory-and-strategy-mode/index.html","cdfe4870746cc76620c6fc952e823f3b"],["/Foreign-technology-blog-community/index.html","5862d7b086b15b95aa881a0428740166"],["/Functional-model/index.html","9b45bbf3ee2d62484328b948352342aa"],["/Fund-type/index.html","2d0c96d75205d44da5563e50ea47f16f"],["/GPT-4o/index.html","f97806e08f0c254f94e30ee39f01a88f"],["/GPU-medical-image-processing/index.html","81e885a3462f582968a86b960723db0b"],["/Gemini/index.html","d30a8703568692b1530374fa9655a9cb"],["/Generative-Model-of-Unsupervised-Learning/index.html","2e589e52aeb1baab3c1bb5aec13f3da6"],["/Git-Learning/index.html","1acc84f556f6e4e709d5ea186923358e"],["/GitHub-2FA/index.html","bca56fb3bc272c34cada393cf1e1ea74"],["/GitHub万赞，程序员必看操作系统总结！/index.html","5775ea2b605aa2380151599e1027a394"],["/Golang-book-recommend/index.html","65e17574025f8f32c3a7ce3ced04b430"],["/Golang-learning/index.html","2d1f61c21f8d64db6fda9989837afbd7"],["/Gradient-descent-optimization/index.html","c517e4b8207d23a85d9df73348f5ee87"],["/Greedy-Algorithm/index.html","5f1922ae540d5ab71a115d86426aeec5"],["/HK-bank/index.html","a0ce18fb97a22089a8b1e83bc3a221db"],["/Head-to-head/index.html","c23cc9e275e1a538a27af811dc5b26ad"],["/HexoPage/index.html","a26b15f500099025c19141174360686d"],["/HistCite-Pro/index.html","d5f44f8b45a3295784e8351d67b9ce57"],["/How-does-the-program-run/index.html","c3f5cc9db7a234bd872daa7faec3f25c"],["/How-to-judge-whether-technologyisreliable/index.html","b6217bb6cd9079f9e00de7e65788083a"],["/How-to-learn-design-patterns/index.html","23c8e832a9f0ef404e4bc0bc216cd044"],["/How-to-learn-design-patterns？/index.html","b91adc7f718f468fc5f0d47b11750496"],["/How-to-teach-yourself-programming/index.html","d33665203e72eeebea0332abf459e275"],["/How2learn-Python？/index.html","9768e7dd9f7adaaf30bba018f5013f42"],["/IDEA-shortcut-key/index.html","c4c3c580b843eb12515f81104b36c501"],["/IT-interview-basic/index.html","7c43a8dbf86f89255898e19a414ce59d"],["/ITK-VS-install/index.html","ccb4ca91ca877e83a991d7d018ca0be6"],["/ITK-VTK-ItkVtkGlue/index.html","adb5eca71bd4047032e66452a0904694"],["/Image-processing-plus-noise/index.html","23637efd0d672d192c5f3bee03df36e2"],["/Inception-Going-Deeper-with-Convolution/index.html","8a60ca33a328f124a24ba8ae2ec3d71d"],["/Java-GC/index.html","c805b7f800d7670b4b07a8ed365f5f65"],["/Java-Servlet/index.html","69d488e2bd78d5c0a26b6cafaefe5e2f"],["/Java-array-and-collection-sorting/index.html","5cab87a25502f8393308372e53b141e1"],["/Java-development-tools/index.html","631d4cd7bbb0eec3b51e973918578101"],["/Java-eight-data-types/index.html","5e23743a9040cecb0a1510b17299bfd2"],["/Java-interview01/index.html","c42da7181c006b481c24e3f108071bc0"],["/Java-interview02/index.html","ba84ea3896fcaa036ed661fb3275e9ce"],["/Java-interview03/index.html","5de020dd866225ec384b2e6c77a1202e"],["/Java-learing-map/index.html","d7b0f61de7ca41e1fcd0838cc9eab8bf"],["/Java-learning-route-map/index.html","4af672792d1dfcd320ee51b36cb06cc4"],["/Java-memory-area/index.html","b72158fea2b6c4e2ed74901ebb5e941f"],["/Java-memory-model/index.html","94f5e3ae626e4294939724b940659032"],["/Java-multithreaded-learning/index.html","25aec85d309ea0bbb0901da139dacbff"],["/Java-project/index.html","c56956267b27be93f6bcc2a03a6496ac"],["/JavaWeb-Chinese-Garbled/index.html","eb1992b53233ae4224a4312a8cda0296"],["/Java还是C++？/index.html","d06f8ae591033c3d796b7b4c21df86bf"],["/Kaggle5-step-guide/index.html","44a2da0cb35f991c556da9e735808f04"],["/Knowledge-points-of-Java-garbage-collection/index.html","cc4d398be477745600f2b9e1a741a428"],["/Layoffs-and-Hiring/index.html","d361e1700f5f1f7d41feab258e7b23d8"],["/Linear-regression-of-machine-learning/index.html","da3402a0989515fa547e89964e844fd1"],["/Linux-Compile-C/index.html","cd72c1cac54bd83aad4bbd7a0cace7b8"],["/Linux-ITK/index.html","d040036d730afc5b980f943cb262d904"],["/Liver-segmentation-of-sparse-components/index.html","da652b51690da39762d62ccb8b165bf0"],["/ML-EBook-paper/index.html","f9c8c71294c944759ae8d5bb2898096a"],["/Map-uses-multiple-maps/index.html","461aaaedc7f8b57fa45f17b3eadf7034"],["/Matlab-Graph-cut/index.html","4b287b242a1d86ff90d5554b51b4a90d"],["/Maximum-Likelihood-to-EM-algorithm/index.html","ef428b8fa0662d7ca4834c92ccf0697b"],["/Mean filter and median filter denoising/index.html","50442fed6fa0eb43fbabdd9ec6c50b74"],["/Medical-Data-for-Machine-Learning/index.html","250e8af99fac05467c3bf0e80e6f5060"],["/Medical-image-analysis-deep-learning/index.html","8e8ee4c9c0ce99bc76f494d8090feeaf"],["/Medical-scan-image-processing/index.html","e1a4fa59c8479921580a8908b15f220c"],["/Merge-sort-algorithm/index.html","aabb7648daab4885c80acbef3802e64c"],["/Monthly-income-2W/index.html","3f9d3baeaa08930f459ee8a258a386c9"],["/Mysql-database/index.html","6b717ff5746fd54340f311011a1a2bdc"],["/Neighbor-Embedding/index.html","9aeb3af57051c286f2b1a0a3859c8878"],["/Neighborhood-approximate-random-forest/index.html","66ab8c3806f50f94c570b19e1c9d565c"],["/Net-and-official-documents/index.html","a1567a7c01a2bd74f2e9881eb72252f2"],["/Netflix-VPN/index.html","bbd02ea08f365c813ec3475c41d77cfb"],["/Network-principle/index.html","88f1f2e51e5f066a400e843a4ec3c218"],["/New-Hong-Kong-stocks/index.html","28e11c06a811b430de22e58b879bcd4f"],["/Nice-to-meet-you/index.html","4c70e1bc0fd45f1219d16fbe6766a2b3"],["/OS-processes-threads/index.html","194b3ff3a08dca2bc7832d110e4d59eb"],["/OS-run-environment/index.html","7029d5a3af1e658d312f85a797c64630"],["/Open-Internet/index.html","05f2e86763aa775fcbc7bd72aac4137a"],["/Open-Internet2/index.html","f405e9ab58d5a02bd217d9f8df589191"],["/Open-source-community-and-rewriting-website/index.html","0f90bd6c579970695e89215e54cda1c9"],["/Panoramic-image-stitching-based-on-SIFT-features/index.html","d9ea32f01925ba966ff33e22ad65fc20"],["/Parzen-and-KNE/index.html","2812b25c0859da2d09ea039c7f4660ce"],["/Personal-technology-blog-site/index.html","029c195f089c490f7e651785d4ac6a73"],["/PicGo-Gitee/index.html","99a47348e973b7303df25b4987eae160"],["/Programmer-treasure-chest/index.html","daec9f2dd7bafe2f858590a2b4083d05"],["/Prototype-mode/index.html","b7ee37c3b1a5612ed4ece99426121b37"],["/Python-base/index.html","43366eb0cc5a2c7ac1dd9b0cc10be960"],["/Python-crawler/index.html","945d934fc09ff0d5dff3b473d2bf36e0"],["/Resume-revision-suggestions/index.html","fba7724fa23565534059d7b25f7d54f2"],["/SEO01/index.html","e045da1189e476750d83b11100eb0736"],["/SEO02/index.html","031f0b807231fd431c7af563a925fc07"],["/SPHARMPDM-MEPP/index.html","8c07215fe45c18590766d8a2f5b2bb00"],["/SVM/index.html","4cc88ec1a76cb0deb516140dd267c96e"],["/Seata/index.html","d52d1aa207c7e173dbf1a482d5379a15"],["/Semi-supervised-learning/index.html","f6bb6dc3041dfd501e589c7910a212d4"],["/Sequential-model/index.html","91ef9030b7ffe031fb45fd6c5378921a"],["/Shape-Based-Human-Detection-and-Segmentation-via-Hierarchical-Part-TemplateMatching/index.html","986d1b33df60bf400d9f19d29ae479cb"],["/Spring-basics/index.html","2e85153f958bdef10a1d54d15975f241"],["/Spring-integrates-hibernate-Struts/index.html","dfb495ed70e26889f194f7a067d5fd04"],["/Structure-learning/index.html","43a1748dbdffc8b2bc48526ddd546f2e"],["/Suggestions-for-self-study-of-computers/index.html","f062865d25c9796181d4802f936b4809"],["/Summaryof-HongKongStock-Account-Opening-Links/index.html","02ce7ff47e1275628cb6f3109c980203"],["/TCPIP-detailed/index.html","3f6f33b323e2fead7f1a54d849c60281"],["/Telegram-VPN/index.html","c4daa4f655394d5d327bdc04d874218f"],["/The-essence-of-shopping-festival/index.html","5ce558b7c18ac85c6dedb78161eb307a"],["/The-most-important-investment-in-life/index.html","1426c492fd69cbf66fad42dc772cfc35"],["/The-most-successful-nvestment/index.html","51bdc0abea000317a431a10a5881ea9d"],["/Transfer-Learning/index.html","cb0b21b60eee352bf5b81aee65b037ee"],["/Transfer-to-computer-major/index.html","2fa54ac1f122f013b78ba6912c80bddf"],["/UNet-Convolutional-Networks-for-Biomedical-Image-Segmentation/index.html","b3f73f87e5a58dd68bf5f4d5cd28788c"],["/Ubuntu-install-sougou/index.html","4578c15c9a4333638e2815d5fa4611c4"],["/Understanding-of-paying-for-knowledge/index.html","d28b267222b51373d85d0780ee7ca469"],["/Unsupervised-Learning-Linear-Dimension-Reduction/index.html","ab1c3dbf4e281261994f13f9c0805adc"],["/VPN-HELP/index.html","656f150c21db12985585cdd79d0a2770"],["/VPN2025/index.html","14dcf72ecdc69ed99b66e5a1b87680be"],["/VTK01/index.html","ceb8161f5b39c2558c82ef25b023eeb4"],["/VTK02/index.html","2f36bb202884efb205c36665fc56d5c8"],["/VTK03/index.html","203e5f13fb66cb8dd42f236c7f52ae0d"],["/VTKRead-write/index.html","6d60bd69d9986d84c744edcd4d885c62"],["/We-are-all-good-kids/index.html","58268e788b3c9b773855acef7034000e"],["/WeChat-80/index.html","3992b18b1d0fc563c50cd0626c7645aa"],["/WeChat-red-envelope-cover/index.html","4ac4a18c1e4722d5fc64f67ceecdf0fa"],["/What-is-crawler/index.html","6039245aab4bc717d2ec6e8128039308"],["/Win-OpenInternet/index.html","d56c8c1c88024e5e21d52d5a600dab4b"],["/Windows11-2kfans/index.html","7c19ef4358b45230025519501bae2bd3"],["/Word-Embedding/index.html","5dd420c9615a05ffb14b4744230ee442"],["/YuanShikai-and-his-Beiyang/index.html","07a23eb4b98e69def078e89b54635f7e"],["/Zero-copy/index.html","76f52e832e7f167744c4039394e5cee9"],["/about-keras-model/index.html","6721d858ee71d0195fdc83a4abdcb099"],["/algorithm/index.html","5e1efb0babdf0302f111945e48e7068d"],["/alibaba-Java/index.html","756eca08165b183d29855a92d8ee45fa"],["/archives/2020/01/index.html","32cef6921edf65161fd29d3b544aed27"],["/archives/2020/09/index.html","f0ca3e650ab9efdd3210d193d97011c7"],["/archives/2020/10/index.html","64c93c8efa30ae9c2e376d909a345002"],["/archives/2020/11/index.html","49e3fed67f5ab1062a48e2fd54f83f72"],["/archives/2020/11/page/2/index.html","d2d27eb88289c0dee9ec90696f166cb9"],["/archives/2020/11/page/3/index.html","4065b69d32c580a730ff094e28749cfc"],["/archives/2020/11/page/4/index.html","2ed8781046ceccf983cdc70e23d306ae"],["/archives/2020/11/page/5/index.html","408d9d0bddb586a9a30ce3577a715a0b"],["/archives/2020/11/page/6/index.html","8ab627ec42601f5e7ccf799553925f9c"],["/archives/2020/12/index.html","3624e67df22055224c4c11fadc2cfb8f"],["/archives/2020/12/page/2/index.html","dd050d7fc3e7364dba03bc148919df89"],["/archives/2020/12/page/3/index.html","3e30f938394fe444bc71cb8a6c7d4760"],["/archives/2020/12/page/4/index.html","ba08e4dd6d64ab0262936a83f9f076cc"],["/archives/2020/12/page/5/index.html","57ff42910a26eac3b480cb74a05c12b8"],["/archives/2020/12/page/6/index.html","33f19995f01dd1dbbb914a93c13afa65"],["/archives/2020/12/page/7/index.html","cc9b3aba4e944ef6c14ba407595cb128"],["/archives/2020/12/page/8/index.html","b8d32509c7394fa64b4266c4b303411d"],["/archives/2020/index.html","b4d4101e33bea78d3f4046a01a0e06a2"],["/archives/2020/page/10/index.html","2b9e702b0c321ac0c51c7edabfd151ed"],["/archives/2020/page/11/index.html","996c84b0550510eff6f21215690bdff1"],["/archives/2020/page/12/index.html","bac977ec6f78cd58566b5c559a4e7d77"],["/archives/2020/page/13/index.html","ed29e333dcf176818a3748e2a820a1ed"],["/archives/2020/page/14/index.html","dff32f3452a84c5f763186a9975de54e"],["/archives/2020/page/2/index.html","1cb0b73b8cc564e9890ef9f38343e8f5"],["/archives/2020/page/3/index.html","7f88c8ae9df06d2d0ef725c6c196f4f6"],["/archives/2020/page/4/index.html","30935480ec5582b7ed511d3e94c737d7"],["/archives/2020/page/5/index.html","5b2d6bdfca39bb4c2ab7badb1f8424f1"],["/archives/2020/page/6/index.html","e4f06acfa7588ce69eaf5da06494aec6"],["/archives/2020/page/7/index.html","203f9edc5f1a9ca1c4c43f56fa9fb08c"],["/archives/2020/page/8/index.html","f6baaba300367be82c12e6a8b1714dc9"],["/archives/2020/page/9/index.html","2362dee3a00c9067fc72599eadc0b2af"],["/archives/2021/01/index.html","948e012ff1f6c3a8d151ad6a066401c3"],["/archives/2021/01/page/2/index.html","ffb278c39298a50ce099776dd19ccdf2"],["/archives/2021/01/page/3/index.html","533b8169851c681cd40bd4c464af58a1"],["/archives/2021/02/index.html","bfeb49bb6f002e687f2dbe343c2cd007"],["/archives/2021/03/index.html","84643126bd5d4db902ec1b9ba1a5c7c0"],["/archives/2021/03/page/2/index.html","38248c266409fcb5785997603fa5a231"],["/archives/2021/04/index.html","190fc7553543fa7a1c4c0f6839180536"],["/archives/2021/05/index.html","ef3344f7b08e0b0fa00523b26f97cee5"],["/archives/2021/06/index.html","252fd37ee37380afc16848ca5750de79"],["/archives/2021/07/index.html","ed3ea4fab873c69912ddb5fcc2e4b3bc"],["/archives/2021/08/index.html","a5da3edab52cfaaa911bfcde29596ebb"],["/archives/2021/09/index.html","f43e811a43090f4caf24597f58e5d661"],["/archives/2021/10/index.html","04279363154d1190727472d8f314c596"],["/archives/2021/11/index.html","855a545f7cbbe150ba5d717351a2f06f"],["/archives/2021/12/index.html","0c546310583a40cf44592d423e12669d"],["/archives/2021/index.html","ab05dc5417e4f63c2e50bad2b7961250"],["/archives/2021/page/10/index.html","ccd544b5ef733be4316b54132f5bd85f"],["/archives/2021/page/11/index.html","254571d02c50c1341d5f2969a3db68b0"],["/archives/2021/page/2/index.html","56a7205c872c28447d9947e021ba8193"],["/archives/2021/page/3/index.html","349876786af22ddcb9ad6e5f2cce79bd"],["/archives/2021/page/4/index.html","aa695c31f81ee2cf263a40620288a96c"],["/archives/2021/page/5/index.html","89007b27b95e2e9873de59316196c0c9"],["/archives/2021/page/6/index.html","cbd2a305407f27c037100b4e11a0cb5a"],["/archives/2021/page/7/index.html","28bc68ce0ff3003db882d974ec220bca"],["/archives/2021/page/8/index.html","d0be8fffb4dab933528fe7227ef760f0"],["/archives/2021/page/9/index.html","c1cfb4a33e5b343bfeedd21467fbfaef"],["/archives/2022/01/index.html","abc1dc1966d9a28c4602c1c591e084ac"],["/archives/2022/02/index.html","3a59c1c0088cf793e1000d3cfa4d39bf"],["/archives/2022/04/index.html","22d6afe753bb115820c3c52ba68d1153"],["/archives/2022/05/index.html","4b83ed81c854a7dcdb20745820990284"],["/archives/2022/12/index.html","c3e64011b8b65e4514b3bbf3141d784f"],["/archives/2022/index.html","9d827a8add38b4a4db59576851bcffc4"],["/archives/2023/01/index.html","b41b1350c8f4c02eca4a8a20ecb51e27"],["/archives/2023/02/index.html","50b99d7d39827de37f7f5740b652863d"],["/archives/2023/03/index.html","b73df79ad36810a41381228da655e452"],["/archives/2023/04/index.html","95a34b3ba1f970da17a8b8070ab1a3df"],["/archives/2023/06/index.html","dbc03558d54c52a9b59840e993b6c4ce"],["/archives/2023/08/index.html","0200e0a2a569b2f925a1541ad277d65d"],["/archives/2023/10/index.html","1541e19dac6812867be17a96d1296a4c"],["/archives/2023/index.html","12d211658348c05b98be6509fcfbf729"],["/archives/2023/page/2/index.html","ca75d246acbd17a951ebfc72ab713f49"],["/archives/2023/page/3/index.html","0b0f9fd408440ec83817c3a707c6b45a"],["/archives/2024/01/index.html","a0ddb3549cdf0780f1f1b5f4341de315"],["/archives/2024/02/index.html","fb41b0d491ab94c32d188bfddb59d072"],["/archives/2024/index.html","b799b847dc20c564ae194a1e9b6444a0"],["/archives/2025/06/index.html","7501e4f4faaefb83134b2939b5c33481"],["/archives/2025/07/index.html","71b5734138a5bcfe5761f5d5850b5867"],["/archives/2025/08/index.html","7ea325ffb3b8fae02e32da1d55092b08"],["/archives/2025/09/index.html","3042975ab4cc849958bcc211fff2c483"],["/archives/2025/10/index.html","1a179bfeb196b2ce6bbad2e817c1221b"],["/archives/2025/11/index.html","343efa344938b41d1a15e7491ec7ff8a"],["/archives/2025/11/page/2/index.html","17f93255c479805461d38400a517fbd2"],["/archives/2025/12/index.html","7ea8ceeb97b5190ca39bdf7821f0c3bd"],["/archives/2025/index.html","3700cd3b5aa09e28162c837a5c5c34f3"],["/archives/2025/page/2/index.html","b730dd940d8079eb132c0c9e6cf508d7"],["/archives/2025/page/3/index.html","966af75bbb49f4237694a129c575c209"],["/archives/2025/page/4/index.html","4c91c25998c8fae83e2ddcb204308ee6"],["/archives/2028/02/index.html","b85c1300bc2c4fecbae293b7fce3639c"],["/archives/2028/index.html","42b2641c7c7ca1a0eb5993d620c7faf1"],["/archives/index.html","537cf6c489909c2f4cef8fdfd229298e"],["/archives/page/10/index.html","783afb910b2c3467ce9a18485123ab28"],["/archives/page/11/index.html","3ed9c559a44ebae9edf60ccd1ca54b6b"],["/archives/page/12/index.html","2d82f1f52bd68f245b526d673de42130"],["/archives/page/13/index.html","525b68da5c636b0bc1642871f5f71725"],["/archives/page/14/index.html","f834c154ff4245604fdac009dfc33060"],["/archives/page/15/index.html","13d2781b813dd78c6e452823f2884a7b"],["/archives/page/16/index.html","4a7797dc70d70c01be34db376fc0e221"],["/archives/page/17/index.html","0895647e66955973da073dcde98abe11"],["/archives/page/18/index.html","fad65b5513842ad1eb4eac86a7e2e5b5"],["/archives/page/19/index.html","e45d4af40a069c58e5416b5633fffacd"],["/archives/page/2/index.html","9807ca6eb85981ff69cf2358e5a04069"],["/archives/page/20/index.html","97c272e6ef2dd23fe34ff6d02427d1f5"],["/archives/page/21/index.html","8657feae66cf1b10aae0891f66ace568"],["/archives/page/22/index.html","44e53657047486d23211b60d9e310364"],["/archives/page/23/index.html","7cb9c203f0aa91b572bce4319959b593"],["/archives/page/24/index.html","ef5094325ac229c0c645ff2739346e9a"],["/archives/page/25/index.html","7d67cd4b6e129a70b894c2844bfe0f62"],["/archives/page/26/index.html","8c50a85c5a1da064aedbf002b7098c88"],["/archives/page/27/index.html","b52c97d2a95e379c6054d55031c69879"],["/archives/page/28/index.html","13642673a1d0eab5099b7279984705e0"],["/archives/page/29/index.html","5c8d24c548db8f0325e1b1de090f8c6e"],["/archives/page/3/index.html","416ab4710944fd0660def2b77ebb9857"],["/archives/page/30/index.html","1a7a52743f47fdec20781360b4b424eb"],["/archives/page/31/index.html","aca9a0e699a2f23527495770ffe162ed"],["/archives/page/32/index.html","f56a082ea6fc38d0adccab98e56e17d1"],["/archives/page/4/index.html","d499ce0ada71a12f12067c18cf170dfa"],["/archives/page/5/index.html","69d79ba276a8e94e5b73e08cbb88f758"],["/archives/page/6/index.html","d559b40d4fe32cdba2da540d09fd2450"],["/archives/page/7/index.html","0339feb1d36552be6e82227d676a7c84"],["/archives/page/8/index.html","cb7369b8ea5467b010c97779fe5e0907"],["/archives/page/9/index.html","162360904a033ee22cfc31b830e5b9c0"],["/baidu-search/index.html","e785560ad908d658c7a952e54ae99314"],["/baidu_verify_code-Hh2fKNlEB1.html","d87a280a8414c0f66f30287a518eeae2"],["/be-a-programmer-instead-of-a-code-farmer/index.html","1b389fb8e5bd797d71bfc72874ebf9b5"],["/bought-a-house/index.html","071f91d9c8308e8b7725282b2e974185"],["/categories/C与C✙✙/index.html","bcf0b7390065af28acc638a7512a28a3"],["/categories/Go语言/index.html","a9c0a93c2b7a7b920de1faf1c82e1431"],["/categories/ITK与VTK/index.html","264db87edcb0d0ee5631edaed2bd7034"],["/categories/Java/index.html","20539dbcb3c39b14c72dafa8e9af16bb"],["/categories/Java/page/2/index.html","d5edb47e2ac5ff2dabccb00ae5a32407"],["/categories/Java/page/3/index.html","cd2d401873b8de87ec8ff8d8409294f1"],["/categories/Linux/index.html","4f1328564c186d998099b24354db0e26"],["/categories/PLC/index.html","59cc1bc21bbd26faacb02fb4945c0fd0"],["/categories/Python/index.html","75efadd922a6693a57326084d3c6b26b"],["/categories/SEO教程/index.html","6a9160fefeee27eea9170d2df172dacc"],["/categories/index.html","5bed3a9a45eff45bec5ec18cc908885d"],["/categories/图像处理与机器学习/index.html","0e18afd33356759110b8e570abe26ad4"],["/categories/图像处理与机器学习/page/2/index.html","95b5ba7ee704b49367381c33555cc67a"],["/categories/图像处理与机器学习/page/3/index.html","5095467b51082a9afad98d2183538960"],["/categories/图像处理与机器学习/page/4/index.html","e43e6f333086879b4b0cc2da147975c8"],["/categories/图像处理与机器学习/page/5/index.html","9818691866f9a60f1d616d736774dd82"],["/categories/图像处理与机器学习/page/6/index.html","348b1187e67613d32e6198b0c2c81713"],["/categories/工具/index.html","b585f27121978757431db6c3e642ac65"],["/categories/工具/page/2/index.html","ecb433f8645dfc5f01982705f998f6c9"],["/categories/技术以外/index.html","7b327a9902338079704aa848fe8af742"],["/categories/技术以外/page/2/index.html","d7d52b14d8e30264e2a15500016d8a31"],["/categories/技术以外/page/3/index.html","462e57e517a3ad97134f14ea3ad4f1c8"],["/categories/技术以外/page/4/index.html","3d48210a52e2325f23cfd10d1c598f10"],["/categories/技术以外/page/5/index.html","1dcf027431e2b1edfea791cb75b93a09"],["/categories/技术以外/page/6/index.html","0a38c31db20d0c7fb1d8ed4c3f818853"],["/categories/技术以外/page/7/index.html","5a4da75f2f7bcaaee80d3125454cb770"],["/categories/技术以外/page/8/index.html","c51509352f4e659ae79f731559c600bb"],["/categories/技术以外/page/9/index.html","3267e1d0e8e49c3cb74bf9e236700b0f"],["/categories/数据结构与算法/index.html","d8b17f962673162b0d0d4a3b298d70b7"],["/categories/数据结构与算法/page/2/index.html","7481703a3b2475eea092d039b4fb96d0"],["/categories/科学上网/index.html","46e0c22a81020957bd13b2db3d556683"],["/categories/科学上网/page/2/index.html","e1ecedd4d6700af4b70885153949636b"],["/categories/科学上网/page/3/index.html","54adf9c249e0122627916f1efc0cc9ba"],["/categories/编程经验/index.html","3f3f6d886d76661e25594b4ff90fbd66"],["/categories/编程资料/index.html","6c12bb8c94f1f1304c9d28e8569b40ee"],["/categories/编程资料/page/2/index.html","9a555f32dad772fcf3e2ad1f8a0a2e6e"],["/categories/编程资料/page/3/index.html","4a08f06f3514a9545c9844b700e29552"],["/categories/编程资料/page/4/index.html","85508f8d317661f696b8d5eae98bcf56"],["/categories/计算机基础知识/index.html","8066a367a2dbf2135dd8b9565a0f6430"],["/categories/计算机基础知识/page/2/index.html","7fe8268a698ea8842802a11d3bb267fe"],["/categories/设计模式/index.html","5b8b17fa867d872ba12e8ef441f5e808"],["/choose/index.html","1142c7492abe2aa5a22db62a8fd3bab5"],["/choose2/index.html","1c9b34191b90aa6412192663342160e4"],["/chrome-crx-intruduce/index.html","adbcac0598fcccdf3f8731bf65c376c7"],["/clashvpn/index.html","45efcb28e07402d78bacdffc3602b65d"],["/coder-blog-website/index.html","e1118dc4669a338f00acef3916a49fd9"],["/coder-source/index.html","2baee8d7971f36d96332c5265e4293cf"],["/coder-videos-website/index.html","02750fc1203f4b3c4200f8eb16736f9f"],["/computer-book/index.html","1e1349dda0558b48a15e8513e4e7c435"],["/computer-censorship/index.html","5f7f81d12ca91b14568cda17fe8d1850"],["/computer-network01/index.html","7c70313c134a92d8594ef4d1378ad68c"],["/computer-network02/index.html","229bfc85a211c9f89530eb09736fbd13"],["/css/main.css","bc32ad34ec4990d934c3c647bdb62f79"],["/database-Mysql/index.html","85d5cff7c69579fcc0efdecc34ccd562"],["/eclipse-lombok/index.html","fbc3c8aa5865ce6fa97913df1b2c65f3"],["/fully-convolutional-networks-for-semantic-segmentation/index.html","1adde928e656395898c46c792d433888"],["/great-firewall/index.html","ba1002301728d2a1a11af90d71d1272e"],["/halfrost/index.html","96199b1d65e13bc0c7acdf5a3bac97d5"],["/how-to-signup-chatgpt/index.html","15f8fd4b014a65ad6b4e704ea93d76f1"],["/how-to-use-Gemini/index.html","c9c73b0675ad319507a79ce49a5e3ecd"],["/index.html","6dfa8e0ddc4304ef48866f9c7ad69387"],["/ios-open-internet/index.html","7f90864132565fbace3671ccc8554590"],["/iphone-open-internet/index.html","34b3bb12167aae4276982277ffad6ce6"],["/itext-makes-pdf-form/index.html","0f0e8f3dc36cf5bef0bd6e9c114ee1dd"],["/java-Set-Map/index.html","4103e2f557bd637f969fa8e351149e51"],["/javaweb-server-error-codes/index.html","34e70e9da75072cd8ecf43cd3a6f5d24"],["/javaweb-source-code/index.html","51e0bde1bca95a18725fc0d7074d7e58"],["/js/lib/busuanzi.min.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/js/lib/lozad.min.js","47904d34a224931dd1b615c59a3dbe3b"],["/js/lib/prism/prism-coy.min.css","0ccad54d95845901ead59bfd3ecceb14"],["/js/lib/prism/prism-dark.min.css","a4711d2957d6605eb5682bdd228cf123"],["/js/lib/prism/prism-funky.min.css","efedcdccd7a9ab342d2d9cacd24920af"],["/js/lib/prism/prism-line-numbers.min.css","38e22e790c279bb56f9ec4b90a2a2d58"],["/js/lib/prism/prism-okaidia.min.css","5ac6f9de996fbec68aaa106dfb16e061"],["/js/lib/prism/prism-solarizedlight.min.css","ecc7e64d039873ffcf7fb27babdaeb5a"],["/js/lib/prism/prism-tomorrow.min.css","456af2a14ae4f5089939d5904ac40fe8"],["/js/lib/prism/prism-twilight.min.css","ebb5c355332a8cf9a1ce37a2a69d678f"],["/js/lib/prism/prism.min.css","a5234d614834658887cec6a9515890f8"],["/js/main.js","052d2b299d9c750afea8df0b802ab7c1"],["/keras+TensorBoard/index.html","901056cc36763bb877ac4df1870faa2d"],["/keras-beginner-guide/index.html","fc4b0c06bce9aab6b4c9b0f451e443d8"],["/kmp-algorithms/index.html","cf0a9f82717892885096c75b3edc06e9"],["/leetcode-Java/index.html","1f89693a6dbefa1fcffd1713f85eaf54"],["/links/index.html","b010f930314db018a90e0b09ae38fcb4"],["/linux-java-opencv/index.html","32637f2bec3e94f783984795eaa74520"],["/msb-source/index.html","e107f561bd295bbae4c6d3d542bcc0ad"],["/online-BUG！/index.html","3bed8070cd8707709bc666efaa1b80fc"],["/open-app/index.html","6e0d82b9723baa852e09e170da76cdf6"],["/page/10/index.html","db67363632bea9ec480494c4ea5f14f8"],["/page/11/index.html","3667dc43296e01ec95cd087ce0baa4eb"],["/page/12/index.html","2d04598d48db9822e269188d16863497"],["/page/13/index.html","c8b627b041de6265043372de2c5edbe9"],["/page/14/index.html","4e0a7c0be9a04c97f65a8410a02eda59"],["/page/15/index.html","a98e41513a04077ee1a7cbac20b4be36"],["/page/16/index.html","68fa02a309c5b4ab910e4619e8426df6"],["/page/17/index.html","83a0cca66bcbbb256667baf6a8365d15"],["/page/18/index.html","94206a4c6d66d60bbc54ef6eb2d715fe"],["/page/19/index.html","f3bac83a456c012b73b998385359a1ae"],["/page/2/index.html","0a91193aa3e1a762adc96a47a7647698"],["/page/20/index.html","2c54d0f57bcf7c8f4f5149b5eca23e5a"],["/page/21/index.html","fbfe4b2470b2fa6cbd47eaac67564b3e"],["/page/22/index.html","4005f3ac7e82b17041ad1f3d537d56f0"],["/page/23/index.html","5f579049ff3f7f92c6da2d228bb9805c"],["/page/24/index.html","f93a332eae4a3f825fdc5d0cdf1a6e9a"],["/page/25/index.html","a2b5f3d23921401c53caf81fce3dcd70"],["/page/26/index.html","9a4bf6ea6d4c5996ab5b97a8198d51bd"],["/page/27/index.html","d14949413fd46325033ccc61aed17383"],["/page/28/index.html","c142cef47017bef2c80b38fea229cf5e"],["/page/29/index.html","a07f944def39c801528a5af8e921e07b"],["/page/3/index.html","597c7bc34bfe4ab0d429de9fd0f82dae"],["/page/30/index.html","ce4393ef1fbd9b00b80f50cf29e16532"],["/page/31/index.html","7afa5f23a6d7177d9be842e507b6dd86"],["/page/32/index.html","20738b96a5b694f855001a7854d54aff"],["/page/4/index.html","980419578943bfccb20ddf38f5718a67"],["/page/5/index.html","33e1bbae1265f7d253ea71355869f63f"],["/page/6/index.html","98d49453acaf5c7728e693bb61fd5099"],["/page/7/index.html","0b34a546b3f34e766dc48dab86bf5034"],["/page/8/index.html","a6541fac1337e6ca07c785aa03805f47"],["/page/9/index.html","a3b48ae0f0f5d2467bed34325edaa4cf"],["/pandas-data-preprocessing/index.html","50bbd07ac40335fd55f2d340f700f93b"],["/phone-win-open-Internet/index.html","da75ed6f075cbd20734227326d1b59bb"],["/popcorn/index.html","40ea7fa26597053fe68404b0a6438db5"],["/python-Blog/index.html","f051a0f63e41ec6cfbd4c2053636621c"],["/python-yeild/index.html","e2e9b040de2185d29bfe0bab814d1a24"],["/python爬虫教程/index.html","6094b9d8342cd3ef46ad2684a5023a76"],["/software-copyright/index.html","6da7f8f5eb06b7b372f5c087c48930e6"],["/sw-register.js","bc09f68ec1d4d6bb7e231983ed12913c"],["/tags/AI/index.html","27805ea34bb20a4b20a4210afc726c62"],["/tags/API/index.html","78b3f209c1cf40395baa7b0c0be02d32"],["/tags/C-图书/index.html","cdf5376b815e2a6742f2ff0ee502f76a"],["/tags/C/index.html","ad9c53a9a4fc98ed839d4e9e3a89f473"],["/tags/CNN/index.html","b12f4622846ad550aa774369e7f53ce2"],["/tags/Chrome/index.html","6db3710b66762d538d8aa63975909b4d"],["/tags/C✙✙/index.html","5829ff15b028cb6e705a0041d627478b"],["/tags/C语言/index.html","11d7f256410e14f501efa3670d4457a3"],["/tags/C语言图书/index.html","960b8915813a41d566ebfdabbbc890d5"],["/tags/DSN/index.html","535c866cb25d9f2fc38329eaaf29ec82"],["/tags/Dll/index.html","aac7b6d5aaee3ba363caf6fd329bd5f8"],["/tags/ECCV/index.html","2f6c649f1d20020dfdd73728adfea52d"],["/tags/EM算法/index.html","5f0a152cd59a2356a119a9073977ea48"],["/tags/Eolink/index.html","32da21ada7edee6019c95404b4240556"],["/tags/Gitee/index.html","0ea2f3ea9a1d1b275e79864c711b9b76"],["/tags/Go语言/index.html","8a3bfa5c89b2f5e08605167cfde7d2d0"],["/tags/Graph/index.html","c31ed740f071674198bd60f44849aa79"],["/tags/HTTPS/index.html","bcbe40e7379dae67c2462da7b1c29a28"],["/tags/ITK/index.html","00920c4b60ff31e2a7f87ecdd9b9b112"],["/tags/ItkVtkGlue/index.html","ddc1a01faf7f149a5c2394203e39db68"],["/tags/JMM/index.html","4ee5b8ba4b7536235b4f982f84fdc483"],["/tags/JVM/index.html","a0d07cdd8f002f8566ce80e3d22916a2"],["/tags/Java/index.html","c01efae252035eada575592db2438c38"],["/tags/Java/page/2/index.html","090c840deebdac16d637d65f02968a0c"],["/tags/Java/page/3/index.html","43c26ab8fb60e1f1b99e10706dbb74cc"],["/tags/Java图书/index.html","50253adbe8af76aa27d443f956a50467"],["/tags/Kaggle/index.html","7e9fe6068b487e7b0da84f461fd4799b"],["/tags/Keras/index.html","2f10a7546822ab35784d368252f13ca4"],["/tags/Linux/index.html","9426de2a14747dca7cd2bc40db72d3e4"],["/tags/Linux图书/index.html","c16ea56ad5a951c1abc05f442d193849"],["/tags/MEPP/index.html","46d25634ceb2bab87b7bc16ffd67b43a"],["/tags/Map/index.html","60b3ce11aec7f442751bd7b588596fd8"],["/tags/Matlab/index.html","d70bde950512369623e6736ff5da5586"],["/tags/MongoDB/index.html","4cdfab2c7ecc2231bfa5a504fa8cc182"],["/tags/MySQL/index.html","bb3fc38ed1cabd852e370479e89ea225"],["/tags/Parzen窗/index.html","e2b78c0d29610406e96a7026ed9a613e"],["/tags/PicGo/index.html","73fcd4707231301d62f1e140585b5fe6"],["/tags/Python/index.html","e225e2826ef2078a32a0744016cc0a61"],["/tags/Python图书/index.html","27e0be34538ed8b10c2d5339db73e010"],["/tags/SPHARM-PDM/index.html","3afcf329c527c748c2803c2603394511"],["/tags/SVM/index.html","a5d08a4650ba217500e05b7a7ac38101"],["/tags/Seata/index.html","dd47ccdb3bf82ab9d39553427722d0c9"],["/tags/Servlet/index.html","0c4bc731e3255e4d3119496747f06df0"],["/tags/Sping/index.html","aa69369e3acc68f0091d036f6efc156d"],["/tags/Struts/index.html","ebbba6ad305bf46be35343a993d89871"],["/tags/TCP-IP/index.html","ad976fdca7a68c7554961377c1042cac"],["/tags/Ubuntu/index.html","3d0cad812b1e9a5db66bd31d33ddef25"],["/tags/Unet/index.html","2fccb8cfe287e657b2e2bebb079c692a"],["/tags/VS/index.html","4a4e21111f683b658e1de51cf0dffbd0"],["/tags/VTK/index.html","047024c6e9c5db309ee23d5d0ef0c72c"],["/tags/Windows/index.html","dd68c28a89637bc64befee3a2784da0f"],["/tags/edit/index.html","cf80b2d085b52f5822eed5da36859882"],["/tags/hibernate/index.html","c654b7aa64f1efc774f866ed6bd37a52"],["/tags/index.html","64a7a00ed5330fa447a7a117afcd2c7c"],["/tags/itext/index.html","cfc6a1ac1c47382d50d652a5580766d1"],["/tags/jdk/index.html","352deecf8e6b9abb608c328aa13243f9"],["/tags/kmp/index.html","184903b12fa94ad1d577e3d0718b32f9"],["/tags/k最近邻估计/index.html","f382c55f7cfef15bb2a9e60c65bc03a7"],["/tags/lombok/index.html","d9a395bacfc63a965fa85daff49ee0ce"],["/tags/offer/index.html","e5d67446756425822d0ff9ec43b9aa7f"],["/tags/opencv/index.html","19f96731bbba23d6b8c05afb82551547"],["/tags/pandas/index.html","c053f2397baa1831aaaa14d277a74dd2"],["/tags/string/index.html","6da59290e1951fd249138877ed9238f6"],["/tags/vim/index.html","3576a1cc21251f2a56c9f51c30a6a866"],["/tags/vtkPolyData/index.html","43f9a27dde615570f32ce1ac99435a38"],["/tags/web/index.html","816b5ed201df757ded19c6a96599a518"],["/tags/xshell/index.html","b8b24abd50b4977a427dd195e73b1358"],["/tags/yeild/index.html","379055e4150514908981c8bace0ae0fd"],["/tags/互联网/index.html","8641cafb72c40a18232aa828280472cd"],["/tags/人工智能/index.html","db0a65e3c3bb54ed3bd3e63145a6e4da"],["/tags/体绘制/index.html","580d5a444761e6e52c83f24f36f1f780"],["/tags/全卷积网络/index.html","539733b06dda9cfee02d5480b7e5218c"],["/tags/公众号/index.html","294bed4f04e9c7eea74f8c31d4f2ba1f"],["/tags/内存模型/index.html","8b74dfe7994b3474ea192544e423f7df"],["/tags/内推/index.html","65dbff453fcb1ac8a608738463090a21"],["/tags/函数/index.html","a84b8f228f678f305a0b5b80fc4f7417"],["/tags/分布式/index.html","482932e68f1b740de7e38b1ca2377f74"],["/tags/加密/index.html","6b21a3beb13c6f22956d5b161e222dbd"],["/tags/医疗图像/index.html","e5084ba23263b71bfc0b30cf5d5abb86"],["/tags/博客/index.html","ff21f5e27c63c90b070654e549628b82"],["/tags/图像数据/index.html","52723a73babafd8043f96525c79041ee"],["/tags/图谱分割/index.html","bb51afcd081b3d8943fa4da8dc93e74c"],["/tags/垃圾回收/index.html","5df7a6e3c5d4e39f6a6e85900b830587"],["/tags/多线程/index.html","f5696a273ef3f5b40a6a36082b9cd047"],["/tags/字符串/index.html","7869588831397b4f4d238c4e5d75fe2e"],["/tags/工具/index.html","92a32a84646f37f206194de09012dbe9"],["/tags/工具/page/2/index.html","bf2de95a23ece2554e238eece0ce39e3"],["/tags/弹性形变/index.html","df30cd99be78605bcf57c0614587cdf5"],["/tags/排序/index.html","b4f725f05c5ff86c6acc7c911bd44e3a"],["/tags/搜狗/index.html","08b13b743d36eb5d07d398b528881527"],["/tags/操作系统/index.html","eb90ba8aa7db9f2bd8876575d99c8d34"],["/tags/数据库/index.html","1cb6d41320c0bec6b9755037a5602de4"],["/tags/数据类型/index.html","44dd47cd123610687d3eb49a615f7e0b"],["/tags/数据结构/index.html","9256934ac05c6d0fecfe59d1e1d6e042"],["/tags/最大似然/index.html","207886fed8e64dea198ab44f4e5fbc5a"],["/tags/机器学习/index.html","505a57f0d557baeb8dd2cdc16966cccd"],["/tags/机器学习/page/2/index.html","02b821478390c5ac6457db923843ba9e"],["/tags/机器学习/page/3/index.html","a9b5610d75557446de59e3251e036839"],["/tags/机器学习/page/4/index.html","88dc6ca1dafa0379bd898a7575e38681"],["/tags/机器学习/page/5/index.html","f1f428949dd7c25526b8cd04315de045"],["/tags/树/index.html","f580566c8e9ba1e01d81885b79bbb327"],["/tags/框架/index.html","1996abc32fdb6b35ff8205cff5ef8750"],["/tags/求职/index.html","cbb3cbbf3b8b11903e7882cd31c410ad"],["/tags/汇编语言/index.html","9a403ef8da705459224e35122e3cb424"],["/tags/深度学习/index.html","ca1e4b54ac39662cad597882a778678f"],["/tags/深度学习/page/2/index.html","f890fe7bb216d9306a7e0db0d79a38f6"],["/tags/深度学习/page/3/index.html","57117651b02f583c77c33823edbdd81a"],["/tags/深度监督网络/index.html","255bc430180ad2f04a333e05254d0db5"],["/tags/爬虫/index.html","950506ccb590d1c2e7c3565774415a5a"],["/tags/电子书下载/index.html","7fd52cbd7ed73ba1b84caedccac7303e"],["/tags/电子书下载/page/2/index.html","c5522718ba4df90610fe640193734870"],["/tags/程序员/index.html","bb352c3e676a389e283a55a898afdf48"],["/tags/程序员面试/index.html","72fbc94af374211e497d12dc03d36d5b"],["/tags/简历/index.html","8af2b7026f23e8a9153cc9a24fb9d9b0"],["/tags/算法/index.html","530cec7ed45b128de924cb7777454554"],["/tags/算法/page/2/index.html","1399bc5e893a8e2e047ef02ad2719831"],["/tags/算法/page/3/index.html","0dc77cfd8203c04216e773556d1f89a2"],["/tags/线程/index.html","fe31f0c52d8bb6a12b4facc10cebc1f0"],["/tags/结构学习/index.html","aff25fbb1beaa4391e2ba3844506c0e3"],["/tags/编程/index.html","1dd58d377562a4dacab0e16d943367c6"],["/tags/网站/index.html","e3488fa7b2ef40da4f6bb4f9fb695999"],["/tags/网站/page/2/index.html","f76cab94d7de51730634b9ba6cef5650"],["/tags/网络/index.html","089c10c757786b5f549955b93460d438"],["/tags/网络原理/index.html","59be15608b42877b66a4b6c2ea31bb76"],["/tags/肝脏分割/index.html","d1531647875551515c7540839a961281"],["/tags/计算机/index.html","7601153909a101d3063c6ec6d4bf0424"],["/tags/计算机专业/index.html","8ad0307a1bf9ae666cf669375493616b"],["/tags/计算机网络/index.html","69df05c444cee3db4625a251c8e77bae"],["/tags/设计模式/index.html","aaf2fc9892d19b7fbec7ac7d357ea3d9"],["/tags/贝叶斯/index.html","904721302e6255233afcf7b9b5d600ef"],["/tags/迁移学习/index.html","b2b6e6b0fdb91f2e5db3da19c69d59ff"],["/tags/面试/index.html","5aae57563222c0f6bb182db210713fbe"],["/the-way-of-pragram/index.html","a1672fd53ae00ce75960294d0dd40789"],["/untiypro XL安装/index.html","68010b01cd7676bd0cec3fd28ad7c337"],["/video-websites/index.html","36b6293f9ffdc2004b9281e66b674bad"],["/wechat-fans/index.html","209a9463945ec4bf106ded5715d2e169"],["/window-run-VTK/index.html","dddc5fb66a6a15a52640b5573eb4b1f4"],["/xshell-connect-Linux/index.html","03a21d349272be7def008cf03abe1d56"],["/‌Accessing-the-Open-Internet/index.html","03bf1b591bc9a8e4961dfa186cbdebcf"],["/《Java高并发编程详解》，去大厂必看！/index.html","2b95cec14295988fa986077dc855c443"],["/一分钟没了 1.5W 。。。/index.html","ba19be5dd2a43859c5c5494e7893294a"],["/一条高产爆款内容生产线/index.html","1e06b6cf504e13ad51ee72eda2ed36a1"],["/为高考学子推荐的六个就业前景广阔的专业/index.html","6336ae054d31c5f8aa3e0014048c15b2"],["/互联网赚钱机器---社群/index.html","cfdb195e18dbb6cc4e4fc4cda6b99eb1"],["/你们常用的工作方法和思考方式是什么？/index.html","8c8c4ced57da5f8dec427a5debbe94e1"],["/关于环境配置的一些事/index.html","46688236369a0ebe38938145d9d5ac5f"],["/准备了19w！搞事/index.html","6b610c1dced2394f05c700f94e50872f"],["/几个很重要的感悟/index.html","4aafcc43e83cea26896d78dcdd4efbd4"],["/分割ROI篇/index.html","39f13cda0d24e89aac0b6f1daa80a1ea"],["/分割精度说明/index.html","9b688a78f2c175ce40da5ee01f9a6ee7"],["/分块程序执行/index.html","eec4e1d16382feb0ec756dd74b1074f5"],["/加班公司黑名单！！！/index.html","64eac8095f36c68ec173465ca28a817d"],["/卧槽，上知乎热搜了！/index.html","b8fb19c1db4695308d4049da5bbe9c0c"],["/卧槽，我的小破站爆了！/index.html","bbdbf27ab76ddd65c33133e03a1f39fe"],["/卧槽，我被盗版了/index.html","250b9bae6dfdb935a0e05a2582c1d086"],["/卧槽，还有985大学在大一上C语言课？？/index.html","d1d28f8c2d15869d9f6143bfc0cf9363"],["/历年微软面试中出现的leetcode算法题/index.html","74fd7c4a5fbbdc3afafe63149339e6ac"],["/去特斯拉试车了/index.html","b51f36e021029cb40e88f2b5340284e0"],["/吃苦的三种境界/index.html","05d9ae0210ba50a64a1f94a99d50c221"],["/哪本书适合推荐给 Java 初学者？/index.html","82b8356e888fe7e13641ac8887a50f45"],["/哪本入门级的学习数据库的书最值得推荐？/index.html","cd3b7256dd7bc307754f73432881093f"],["/国内外常用的AIGC模型/index.html","3a397cf78d738d81ea4e7dbaefd1f11a"],["/国庆假期/index.html","d6b567cee81422baa47e4442478a4b98"],["/图谱程序字典/index.html","2b515aae250d4599a5b3e7490a99ef60"],["/图谱训练与分割/index.html","2813ec8046d6aa44287dfef7b6cee72c"],["/宣布一件大事/index.html","03023bd2bab5c252ab19a15426b76d0c"],["/小鹏P7i试驾体验/index.html","79fb3e3bbc9646b1f0606ead80fb8590"],["/微信PC版3.3.0内测更新，电脑可以刷朋友圈了/index.html","42f91bfb82e647f63949307f483afdd6"],["/怎么更快的赚钱？/index.html","d2843431393ca7152c258a7a0d7b8f9a"],["/我毕业了/index.html","e28ca188e8a3394a7393174dd9b49e54"],["/我！真！的！找到了！爱上学习！的方法！/index.html","ea83660cfc54bfe9978046b6fa447da3"],["/户口的意义/index.html","343fe5a352317486a5c558d971616297"],["/推荐两本经典算法书/index.html","9b478c05fcd0a1e5fa50cd96dd838796"],["/推荐几个在线学习SQL的网站！/index.html","d9183825d2e76119eaeefb8b1c664493"],["/搞了一个程序员成长晋级社群！/index.html","dad4c29cc231b40a7ed7b36f4da0ee0b"],["/摘抄/index.html","9c500de0f16d7678a9829834d3a7c9cd"],["/暴跌30心态崩了/index.html","f65351e038630b96b88d28606c5ccd7b"],["/最近很火的ChatGPT到底该怎么玩？/index.html","0d6319eb91c6c64140e1113c9b58c50b"],["/有哪些好看的日历可以买？/index.html","11b82f1fa7c5f937364661a505e2b6b6"],["/服务器有啥用/index.html","10f8b085e6e5de79f1089ad9bfe6a5ad"],["/来长沙了！/index.html","9e114080d4c6e4e0e3f57b67c46da959"],["/校招污点公司名单/index.html","83758ce34290bd6463c4bc48cd4a96de"],["/梭哈200多万/index.html","7c9fa6ec2641f19cae9e2f00bbdc3cfc"],["/梯形图入门/index.html","54b281abcf2ec76a87a2f863a6795c3d"],["/橙心优选，凉凉了！/index.html","277ab4358ddb71fa84288872984ac128"],["/比亚迪汉试驾体验/index.html","dfd41da070a7049d15e3e81c07e32a95"],["/清华转学成电，真的牛逼！/index.html","ee53e7a4328c33cb7edcaad397212602"],["/滴滴程序员被亲戚鄙视：年薪八十万还不如二本教书的/index.html","df1384994c67d81aee8faaa75703675f"],["/社群！/index.html","68a84c32be027676c58de5dc6ac74dbe"],["/科学上网之VPN篇/index.html","c85ca2a70e07b6177bddeef34a8f6a89"],["/程序员必备的几个技能！看完你也是大神/index.html","6a8e91c2d4db9201c3f992e14cc96186"],["/程序员绕不去的槛，Linux！！！/index.html","54ab420baf1e965c2ce4f9078747efae"],["/蔚来ET5试驾体验/index.html","49f489d7815e0d64c6cce4fe0f26f16e"],["/蔚来，牛逼！/index.html","17b03e45ca3bffe11a0e14677c0fa779"],["/被录取了/index.html","44de9662dfa2d94bd0e13ff73fc5ca33"],["/被找事了！/index.html","9f711522f276f9be355e93101eb650d6"],["/被拉黑了。。。/index.html","8856dc7de60916c635eabc3d1ce3ca48"],["/被车撞了！/index.html","c0372b216a89456be41a91908a113add"],["/该如何选购固态硬盘？/index.html","9935a0b3b9308172f1bd922760d6bd3b"],["/这本书一定要看！/index.html","c79875e8f5c6b6b9ea904d40978727ec"],["/选Java还是C++？/index.html","c6f54116066db3f7787fbc0b7de4a8b1"],["/那些让你起飞的计算机基础知识/index.html","2c130efb40837a7351563a4d4b99e0cb"],["/靠这几本算法书，成功拿下大厂offer！/index.html","03277906b553513184674df6307791c5"]];
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
