/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/0010-city/index.html","676727133da63fdf9916a3e9be785528"],["/10-algorithm-book/index.html","f3c52f3458b999a1946db6047ac32bd3"],["/10-website/index.html","30fa1ff93ea4600f38bb57dc601c6015"],["/100万的小目标/index.html","1c2c97b43996a46fac9f6cdb8134e25e"],["/10w+YYDS！/index.html","1913339d87afe5ae3dd86e1ec4a3db89"],["/12-technical-tutorial-sites/index.html","55961af92aeaf7e6c26bf6d2e37d1946"],["/2 6 岁 了/index.html","55627390bae71081f0f82307682e3102"],["/200万，啪，没了。。。。/index.html","2bd3461af1543b367ea6368811b09baf"],["/2018ECCV-Paper-DL/index.html","c81df1b94664b863bd645d953836a3e3"],["/2021年固态硬盘选购最新攻略（小白避坑指南）/index.html","4d555f4682eb4868ec577cfa90ca3aaa"],["/2021机械键盘推荐/index.html","c7f93e42605af95f10f6340a63d76388"],["/2025-07-15/index.html","51ec7f9ca31ade39e42eda1267ac4553"],["/27岁了/index.html","d7d75aed03b96ff86994f32ae256faeb"],["/3D-Convolutional-Neural-Networks-for-Human-Action-Recognition/index.html","0d6278b6be9e8cc7603ca3bc6f65351a"],["/3D-Deeply-Supervised-Network-for-Automatic-Liver-Segmentation-from-CT-Volumes/index.html","645fd5d20582933e9908a29231fc09e0"],["/3D-Unet-Experiment-notes/index.html","69947acaca491e7cb2de06f1101e34cb"],["/4-Software/index.html","f3077b3bd412d62c7c042fa68fc479b6"],["/6-website/index.html","5aafce0662c2d69be30674a8fbb7e7d4"],["/7-terminal-tools/index.html","805cc2eeed85ae8e9b8cc9c73db74491"],["/AIGC中典型的深度学习网络/index.html","f29c85aaa55d3efbdf375c201de73d3e"],["/Agency-model/index.html","4269bbf88de0972adffb539b82fdc594"],["/Algorithm-brush-notes/index.html","3b04f85c21bba5ff1e2db7b69a0132f0"],["/Ali-recruits/index.html","6ec2cada72509299467b26a135361030"],["/Android-open-internet/index.html","4206c20e46f53276e214a92074aedf05"],["/Appearance-mode/index.html","bab187de1545258a3fb86dcefc8c0df7"],["/Backtracking/index.html","93061e2630a951e438c5577028d23b82"],["/Baidu-Sao-operation/index.html","d8896c9810cbf3bc81efc4c99f69dc24"],["/Batch-Normalization/index.html","f5f55575e7866f07b94b163472d4f648"],["/Best-AI-tools/index.html","e5a2b7a599f30bba77a1d648a39a3acb"],["/Bias-and-Variance/index.html","40f2854af4edf90f7764ec50c95c0cdb"],["/Binary-tree-traversal/index.html","255c2e60e43671af7a87382d72d7e819"],["/Branch-and-bound/index.html","c41ce2695444ce63346f7b18e3c5f580"],["/Buying-computer-for-the-first-time/index.html","d96a6e5145737859a5f004496a207bdf"],["/B站向北邮道歉！/index.html","b28c6f57c2dc535cb9f54c77aeb21817"],["/C++-string-function/index.html","126261580e325ab2ea7e87e222872783"],["/C-Java-DevelopTools/index.html","5d808169db6283e41af5f9e079e49673"],["/CS-Classic-Books/index.html","ddcab31d0deb32bebdd5d77bd79e1a9f"],["/CS-network/index.html","84dccde95ad6817cb34adc21370653d3"],["/CSBook001/index.html","aea5deb869bb3d24dd17388ad0c0e6e2"],["/CSBook002/index.html","5f6f6219dba7c735a27df5f52cf658a8"],["/CSBook003/index.html","4bf5acb0ec68e17cbe6cd98e7ccf32ab"],["/CSBook004/index.html","b9964655ef96ef8309f8913c9b81f087"],["/CSBook005/index.html","8315c9f49b30625746bfc5ead46558f8"],["/CSBook006/index.html","41117a1ebba41846fd3785b42acec162"],["/CSBook007/index.html","ca12d9c87ec35a55995ab16b35fe24dc"],["/CSBook008/index.html","9bde79299ab3a569c01367b2d88c08e7"],["/CSBook009/index.html","5c33c0d08686c17e30514aeeeb78f03d"],["/CSBook010/index.html","97bbd273cb74fda66229cd62b372434b"],["/CSBook011/index.html","b57acc75cb35aab0566b8b5b92ff6e87"],["/CSBook012/index.html","32f672397ea33e3d9167ba779e694ed8"],["/Changsha-really-fragrant/index.html","b9cba749278c985af693a4d64e797e4a"],["/ChatGPT-VPN/index.html","74dac5a202d51a415e4340fe0ad6d9fb"],["/ChatGPT/index.html","d4ef67da319cdf3ba9cee46a4d021ad3"],["/ChatGPT！王炸级更新！！！/index.html","2ac1de34a1833f40ada54a61964d3e8b"],["/Chrome-crx/index.html","d5d73ea8fff96ffbc7ef605839dad373"],["/Computer-Classic-Books/index.html","aefb48882c1667f1713c6bd2a9bb28f8"],["/Computer-for-another-major/index.html","634237c042c8fdb3f4152c6282fb2073"],["/Conditional-confrontation-network/index.html","002d68988a18aea165759a89d93d6522"],["/DNN/index.html","4bb7c12ac9b0330ce20fc8811fa39ee0"],["/DSN-segmentation-liver-experiment-summary/index.html","0e60cb0a129259bae6b3b8b3bc8a64e4"],["/Data-enhancement-elastic-deformation/index.html","6c0b2a94ff9d41d66365f6f9357bbe31"],["/Decorative-pattern/index.html","986d684cfcdf26ad2418b5e72c273b77"],["/Deep-Learning/index.html","e6472276b9209b0703804c15ee405434"],["/Deep-learning-and-medical-image-analysis/index.html","968888d09bdd1eb80f80a7a1d007a489"],["/Deeply-Supervised-Nets/index.html","139e582264bbce245387bf4e7608f563"],["/Deformation-model-based-sparse-representation/index.html","ba227c9da745a50f925c0e8675dd5b57"],["/Discriminative-and-Generative-model/index.html","f9ee5b5e17332a59a6dd81dba110056e"],["/Distributed-transaction/index.html","bb88ea716006899a5052c6bb6245c842"],["/Divide-and-conquer-algorithm/index.html","93fa73216918e3c9531e21496d04f0b6"],["/Dll/index.html","39f925dc6dc997085ea1a16f52555fd3"],["/Dynamic-programming-algorithm/index.html","e9734606aba61d9f68ba803ff9914cb9"],["/E-book-download-commonly-used-by-programmers/index.html","424f1cf453be5e5643daa9ed10518b30"],["/EditPlus软件的安装、激活和配置过程分享/index.html","7c785ad871b58bf9e42b1ad9ee050417"],["/Eight-sorting-algorithms/index.html","eccf7e5b4d3be1dac2bf94217db4e7d3"],["/Encryption-Algorithm/index.html","5f7637e4b269b9527c8e0f7a7de2f4fd"],["/Eolink/index.html","25245a55951c149e7f775fd60d7209e3"],["/Factory-and-strategy-mode/index.html","83e0a296f5b966f0d30e16c41f904fb0"],["/Foreign-technology-blog-community/index.html","560d8111b847588e84b832534a2459c0"],["/Functional-model/index.html","95f8c9df205496bee6f9bc0680e66d96"],["/Fund-type/index.html","f2757c862a3c90693da117d3426288da"],["/GPT-4o/index.html","942baf34d13489964a407dd2a2968d87"],["/GPU-medical-image-processing/index.html","9a58c0360af8439f2027ad128ab50390"],["/Generative-Model-of-Unsupervised-Learning/index.html","dcfeb8bd8345552390ef46e70052a950"],["/Git-Learning/index.html","c0d6fc8df3ed890e15d48f34cf905a38"],["/GitHub-2FA/index.html","aad822e437af204fd1ae60157b40abad"],["/GitHub万赞，程序员必看操作系统总结！/index.html","b2cbc816b907d4d286e877cd152770f2"],["/Golang-book-recommend/index.html","71370df26e4599255efe5d0ba02c931d"],["/Golang-learning/index.html","27dc5ba2c1a46a4f5b96a9a553ee1fef"],["/Gradient-descent-optimization/index.html","4e05b085f24bd74b94864f8221214ec6"],["/Greedy-Algorithm/index.html","e5ceca6701e53706f664426fa52c538d"],["/HK-bank/index.html","8b7af4de92ea3f04a6ffd895a695e810"],["/Head-to-head/index.html","a89c00e1e532d7583fbb21239299f4b2"],["/HistCite-Pro/index.html","f0bb660394982ebb3115582308bf17e4"],["/How-does-the-program-run/index.html","e547ec81b6b66ba4d51e598b96ee494f"],["/How-to-judge-whether-technologyisreliable/index.html","115c416ca18d7f26f10f8a5e71251f55"],["/How-to-learn-design-patterns/index.html","dd5b5f93d7a658d05e139460d6bce329"],["/How-to-learn-design-patterns？/index.html","b88f5560c76d367670b3fec658e0541f"],["/How-to-teach-yourself-programming/index.html","156e548b8665a9f8beca4a47c617807c"],["/How2learn-Python？/index.html","5362e803519170fd1b3f4f0032f1b09f"],["/IDEA-shortcut-key/index.html","b6ba4c2294b3aab14a99fe1d82b9b1d7"],["/IT-interview-basic/index.html","25a9dfafee357f9db024d2f3edfcaaf2"],["/ITK-VS-install/index.html","8867a3c2450567b2996ae7cb1ec27960"],["/ITK-VTK-ItkVtkGlue/index.html","894c20962dc64775ede217b8c8b9b487"],["/Image-processing-plus-noise/index.html","f195432bb03819fa9896103be7809d9c"],["/Inception-Going-Deeper-with-Convolution/index.html","86c6bf2b631a61f58187bc9e9af9fc15"],["/Java-GC/index.html","eff1528bf130ed1bc530677b1391032b"],["/Java-Servlet/index.html","cce7aaecdb52f25385367c18a410e7ce"],["/Java-array-and-collection-sorting/index.html","65d71059d21f35935f26d1b2fd90fba5"],["/Java-development-tools/index.html","ea08104a0231c422ab5b204aa947a7b5"],["/Java-eight-data-types/index.html","6a39109bd6fb0177f5fe181014aca956"],["/Java-interview01/index.html","779dc83953b7ef5d69e97ddc1de38384"],["/Java-interview02/index.html","c19197c064b9157beb65b8a7326536c8"],["/Java-interview03/index.html","ec60a2c8951e89487af95d76636544fc"],["/Java-learing-map/index.html","9727b08f5656341af1cb7ec13b9b8d58"],["/Java-learning-route-map/index.html","c846044af4de8a63932e30f93ad26855"],["/Java-memory-area/index.html","3eadcd8633cbae107a3d4512bae53156"],["/Java-memory-model/index.html","a1e72877b8df4950e38b69439154c084"],["/Java-multithreaded-learning/index.html","a434d3c4a1d8a504dfa7a25de8876b17"],["/Java-project/index.html","24dbb93ce1395e75f33ed31fefb8b977"],["/JavaWeb-Chinese-Garbled/index.html","bc4c2cfa1b523b4f29201e143d84ab06"],["/Java还是C++？/index.html","c44de762e3e40106a4d1fa56c4934c22"],["/Kaggle5-step-guide/index.html","2e7878e6bd809e268336ca9e3bf8813f"],["/Knowledge-points-of-Java-garbage-collection/index.html","de46d2c7202dbcb61be8a1e657fed7ac"],["/Layoffs-and-Hiring/index.html","0752af0ca601a0161b8d55ecf6187108"],["/Linear-regression-of-machine-learning/index.html","a6cce8971c4b950abcff3e63e6a3f507"],["/Linux-Compile-C/index.html","a1cec6127b71ebb4e09023c17a8c17c2"],["/Linux-ITK/index.html","6791f0848e020fa9864234ec55f78f3c"],["/Liver-segmentation-of-sparse-components/index.html","3f2e485f5b650b57bbdc639b3a70b682"],["/ML-EBook-paper/index.html","2c0d37fcd19503c86c0f0cfd06dc3f3f"],["/Map-uses-multiple-maps/index.html","115e5fbb0ca7529625d17b41994598da"],["/Matlab-Graph-cut/index.html","3f84875efda92178d9ed4f2c4debb113"],["/Maximum-Likelihood-to-EM-algorithm/index.html","5f41b8ced026d45c57207cca762767c4"],["/Mean filter and median filter denoising/index.html","99dbccf349cc1d56ed9504e41176d568"],["/Medical-Data-for-Machine-Learning/index.html","92fe57f7ed02390955ca06f7f0c5ff61"],["/Medical-image-analysis-deep-learning/index.html","9cc47071f1cdae18a67548665ea46420"],["/Medical-scan-image-processing/index.html","35b78f5e6b6e9f4f2e5a70369480c580"],["/Merge-sort-algorithm/index.html","e6cbe505be99129c736cfd240815f4cd"],["/Monthly-income-2W/index.html","12768d4184f7355d7be39e222569529f"],["/Mysql-database/index.html","0ad49539158e2bd30484749ba970f10e"],["/Neighbor-Embedding/index.html","2d9e7347cb3cc13c0b6eb5f0077adf12"],["/Neighborhood-approximate-random-forest/index.html","59e9a590e77b4212fd38169f01472893"],["/Net-and-official-documents/index.html","6745cce7d653972d6f2852eb22219e53"],["/Netflix-VPN/index.html","e63b515df23b0dc6acd328a2daae2c11"],["/Network-principle/index.html","3406bfdf88e6f5102a375f2d8401564b"],["/New-Hong-Kong-stocks/index.html","896bd7ea8aab42122a1b619a53bd9515"],["/Nice-to-meet-you/index.html","05b4aecfca96d81e1027b9b162e8a385"],["/OS-processes-threads/index.html","bda91275e50511cc2c6e4faa229a9e5b"],["/OS-run-environment/index.html","cc7290e828f9eed20632634e44deaa88"],["/Open-Internet/index.html","6db127d26cf09cc4ee485bb16d1dabfe"],["/Open-Internet2/index.html","7ee68985cd8c8e5299d32f0b92e2e66a"],["/Open-source-community-and-rewriting-website/index.html","7c43694b2af05b250442341191aac65c"],["/Panoramic-image-stitching-based-on-SIFT-features/index.html","4e85b70e024b5f3c78563677713fc5cb"],["/Parzen-and-KNE/index.html","4f7e32e6a308f550c8fa5b12bae36fac"],["/Personal-technology-blog-site/index.html","ad1f0b0571b3fa53c7866ffafcd3a45d"],["/PicGo-Gitee/index.html","fbfd88e633d3c729bcfeb50fa2011aa5"],["/Programmer-treasure-chest/index.html","fea841f55eb8a25653f045c99e8ee01e"],["/Prototype-mode/index.html","81e69bc68bcf99f6a935cc519a0bc175"],["/Python-base/index.html","6b32d285b94bb12d6b7e10c464fddf82"],["/Python-crawler/index.html","472d22e8ff2047aba5d931e081caacbd"],["/Resume-revision-suggestions/index.html","72af5550521810370ca648b03147d7f9"],["/SEO01/index.html","a5c4ff7422dbbbf186b472e9abc166e7"],["/SEO02/index.html","088c0fbabf19094acff69643e263de0e"],["/SPHARMPDM-MEPP/index.html","60fd7366476a6e728d081f9a0147cc44"],["/SVM/index.html","1404f98adf85433d9854aea4e8af6d01"],["/Semi-supervised-learning/index.html","0c5025d433370df48e687bfe593562de"],["/Sequential-model/index.html","1b221887db90379b8a3e03ca9970a9c4"],["/Shape-Based-Human-Detection-and-Segmentation-via-Hierarchical-Part-TemplateMatching/index.html","1adac736c935052722c75bfeec7e9b38"],["/Spring-basics/index.html","853bca2313fe6cbffba513011404dde9"],["/Spring-integrates-hibernate-Struts/index.html","868eb62c7f1f0e180a2a6df6d6a64f5a"],["/Structure-learning/index.html","91792b928dd42ace4ac96756cde629e9"],["/Suggestions-for-self-study-of-computers/index.html","08b4b373cbe6907e013acb23b40e8509"],["/Summaryof-HongKongStock-Account-Opening-Links/index.html","62d44cf09fd33282ba54e66bb85476c2"],["/TCPIP-detailed/index.html","212b4d813a580faffbc1f60394a6d798"],["/Telegram-VPN/index.html","c20580cb0af2e985a674addf6d8dc06b"],["/The-essence-of-shopping-festival/index.html","e93d2c5bf6c7696417b127ae47e37608"],["/The-most-important-investment-in-life/index.html","88fdc08fbd54cd7d15bf894205b8cc5c"],["/The-most-successful-nvestment/index.html","1f5cd33b092c379a82c6cb375dd72f05"],["/Transfer-Learning/index.html","319344ffa0e4adf2097845108ced40d6"],["/Transfer-to-computer-major/index.html","b66f4869dd96f3619aad77f262ae8075"],["/UNet-Convolutional-Networks-for-Biomedical-Image-Segmentation/index.html","eca548f3926075a0bb280315c6e2985f"],["/Ubuntu-install-sougou/index.html","cacc1421ff469ead5944bf89a8053700"],["/Understanding-of-paying-for-knowledge/index.html","d030ca0679691e930ca922c34b9ac4f6"],["/Unsupervised-Learning-Linear-Dimension-Reduction/index.html","5242c780b10644ff36c65f0250b41a05"],["/VPN2025/index.html","c05d651f54d4c4f10207c9213cb6c8b6"],["/VTK01/index.html","53e86216fb3231371389dccc665f7ce4"],["/VTK02/index.html","b1024008b92efe606a4b677927e3dbcc"],["/VTK03/index.html","5f1c19ab6e32f464dd72e9785b5a3cfb"],["/VTKRead-write/index.html","d2868e05f5b67891c92842c029a37f0b"],["/We-are-all-good-kids/index.html","f5d0af0a6d813390c26460cbc329de28"],["/WeChat-80/index.html","cdde48bfb2db8b90f5dce263ea850583"],["/WeChat-red-envelope-cover/index.html","a6ef59d56c985dcba2e1f60fb944d872"],["/What-is-crawler/index.html","e7b192b4fe15a77a4be04e181f3a250a"],["/Win-OpenInternet/index.html","46d29025271fcaca6cdae4ae177ab7bb"],["/Windows11-2kfans/index.html","93b7118652ecd692893ff3fe834d2c86"],["/Word-Embedding/index.html","7143bccd66bee9a3a1a8098776ee40e4"],["/YuanShikai-and-his-Beiyang/index.html","8cd1f13937406aa762281a7964b17c82"],["/Zero-copy/index.html","7c66a0d478878aa8cbd8fcdf52267cde"],["/about-keras-model/index.html","b252b6b9f5784504add385e05295acd2"],["/algorithm/index.html","85c286ec37d415ddae8a0760c1e1c02f"],["/alibaba-Java/index.html","b2a6a781bdf18aef52902178249cc3ce"],["/archives/2020/01/index.html","f03787dce9b8d89c452a32eadbeebd5f"],["/archives/2020/09/index.html","4b2c7c376cabb36a05f1030544677ace"],["/archives/2020/10/index.html","8be0aa960915440f54d079cac951f763"],["/archives/2020/11/index.html","acc8d43a1455f88620cac642bfcaf4e0"],["/archives/2020/11/page/2/index.html","184d3738d6b88b7d20cd367d5a9a3f1a"],["/archives/2020/11/page/3/index.html","8f1ba5b13cf50547f63b937e90d13b54"],["/archives/2020/11/page/4/index.html","2013cbceade68046c8804fcc6047ee8d"],["/archives/2020/11/page/5/index.html","e648325ca960c57fcb18156a41968d0f"],["/archives/2020/11/page/6/index.html","3d046cbaf6dc42421f5a6862bda7a575"],["/archives/2020/12/index.html","e286b7dddf668846cbbe55ca57212b37"],["/archives/2020/12/page/2/index.html","d79985c5c37714ab8c1a2904d808330b"],["/archives/2020/12/page/3/index.html","2ed9fb3314c451b9e555a0a63dca989b"],["/archives/2020/12/page/4/index.html","60e9aa3fd242f1b11ffccd3fcb918820"],["/archives/2020/12/page/5/index.html","5f31999614834e9e218e0cdddf0c4fb4"],["/archives/2020/12/page/6/index.html","08e7df690f266a5d7fabc3b009c8d47c"],["/archives/2020/12/page/7/index.html","f03c53596132c78e6db3c34efb23e3cc"],["/archives/2020/12/page/8/index.html","7ff372b1009d458132ce3ecbcd0a8b04"],["/archives/2020/index.html","c90b14669d399c1ceaf195dec4e722c9"],["/archives/2020/page/10/index.html","46058714d64d7b6c1658cc5865c14d93"],["/archives/2020/page/11/index.html","687900b13b6d3e9c9b9632de76b5c9d9"],["/archives/2020/page/12/index.html","1df3ec153bf25d2936cd5fce3966fc4c"],["/archives/2020/page/13/index.html","6a4c2c2e48a027c6b6338572f9dd3ae7"],["/archives/2020/page/14/index.html","0215e0897735ae0590cb9b60f0d37f55"],["/archives/2020/page/2/index.html","1abe68e16d97e662b610940ea5909fa1"],["/archives/2020/page/3/index.html","96be45af4150195e80c3235ba7147829"],["/archives/2020/page/4/index.html","c73e375d1bcd465edb3c8cb2080286ab"],["/archives/2020/page/5/index.html","95dee0240dd656e08adab637099b8ed2"],["/archives/2020/page/6/index.html","f1ddd9d13e61afbc01f5f12371ccc259"],["/archives/2020/page/7/index.html","d5f00ac32bd31dc23f7ced898b493758"],["/archives/2020/page/8/index.html","9e0e3f6aedff25e0adc84f6767ae2bbd"],["/archives/2020/page/9/index.html","3aca0e4ddbe297ff127b7185827f48ab"],["/archives/2021/01/index.html","763e45d162774e5377a78786c4e700a5"],["/archives/2021/01/page/2/index.html","2230475dbc732ae4b6ccdc2604d9d20d"],["/archives/2021/01/page/3/index.html","68f9af90fb4584413bbfe54b25a341c3"],["/archives/2021/02/index.html","0bfb35bc207cbfecd5f5a70eae1ada5d"],["/archives/2021/03/index.html","3dcfd3371e82ebc3a0d5c210df843edb"],["/archives/2021/03/page/2/index.html","aa7e11d88c6d07480201a05281065343"],["/archives/2021/04/index.html","0afb150d40173680160d289d1e888938"],["/archives/2021/05/index.html","defdae4da6c216531a4dd16c89393137"],["/archives/2021/06/index.html","a12115b881f11f69c8432d20128d7396"],["/archives/2021/07/index.html","c3b1233e73bdcf67a9aaddb76d2f03bf"],["/archives/2021/08/index.html","a305e7c863394fa30155ab8f55f3369e"],["/archives/2021/09/index.html","6a7d7ab77b429a3ff825e6f1737053cd"],["/archives/2021/10/index.html","25f6d3003a92b5beedc7e3be83af9e2f"],["/archives/2021/11/index.html","b319aa882ee6837f7e7da83de95f5ef6"],["/archives/2021/12/index.html","c41d14f96b45dd190f81968cb41eda8c"],["/archives/2021/index.html","75c25c3e36e4f4fa6e767b7ac7b574e4"],["/archives/2021/page/10/index.html","79719fee6ea0a6f2b145e944624aa4e8"],["/archives/2021/page/11/index.html","8b2050b6c79b37820988e92f01f5e88c"],["/archives/2021/page/2/index.html","9058619f283a8ea3284b92cdb26f105f"],["/archives/2021/page/3/index.html","0afa780ed391194ad182ff05d7bd42a0"],["/archives/2021/page/4/index.html","d3730efdb3baf348a9b02146810a4bbf"],["/archives/2021/page/5/index.html","49b4eee517c2151627fdf1659bd25b44"],["/archives/2021/page/6/index.html","c15650b72d982557d4b9beb3c2713202"],["/archives/2021/page/7/index.html","e8050e8961ba36d9195cb90b2390d34c"],["/archives/2021/page/8/index.html","c2b8aafe8cc0a3f019b10aaa0161f830"],["/archives/2021/page/9/index.html","a4920d2c94425a9e81ca90a9acc62d44"],["/archives/2022/01/index.html","25818de28e06f8f9e42d7cf8ab9c0d82"],["/archives/2022/02/index.html","7708bafd77e222a49f4287b8b9bf137b"],["/archives/2022/04/index.html","b10f6a9a0b770da4c87dd6976501b873"],["/archives/2022/05/index.html","6cc447b374ea1b2ea6388b51e7e1d5eb"],["/archives/2022/12/index.html","6959d6d1412708761fa673603db9f4a2"],["/archives/2022/index.html","41e520e36624f729feb6a9d5c59ce6d2"],["/archives/2023/01/index.html","41d81a0d418138e9d69b70c9545ee671"],["/archives/2023/02/index.html","51e27720229e3ded3851823784c1f1fd"],["/archives/2023/03/index.html","900fe88b0a45b3d4f838162147c8eb90"],["/archives/2023/04/index.html","da9159517830e35d741c8c5efdb66f5c"],["/archives/2023/06/index.html","c360e5e57e9be4d6dc6632d4dc96e8f4"],["/archives/2023/08/index.html","6f6f412b8fc296e2200ec3b15eaa7da7"],["/archives/2023/10/index.html","2c2dd58e44ded06d214dcea5c80df6c1"],["/archives/2023/index.html","1b97275315f9f6bf814fcb716f4073d9"],["/archives/2023/page/2/index.html","2c717679b4ef6f763a23219933c7a34b"],["/archives/2023/page/3/index.html","833a93bd26b18eccc906130131df1bcf"],["/archives/2024/01/index.html","bfbe015925709e2c91e18105a49735fe"],["/archives/2024/02/index.html","616e958c8dd4e1a2dfb625d435ac9548"],["/archives/2024/index.html","e1ec864c21a08431b0e31138f11db55e"],["/archives/2025/06/index.html","e7a9233914673cdba2479e951f2313c8"],["/archives/2025/07/index.html","cd36ef8f09c701994649b7c57afa30c9"],["/archives/2025/08/index.html","1392d28639d5fc1bd679ddeb5b8d67b9"],["/archives/2025/09/index.html","13d79dfba7dd77fa23c06a978ca309d5"],["/archives/2025/10/index.html","d95964df90e0dad58b73518ce4604c11"],["/archives/2025/11/index.html","be2762b6863841a03970c01b20b56d60"],["/archives/2025/index.html","f0e94f13177535cd04e7e3513663aa62"],["/archives/2025/page/2/index.html","b9dff5764288066aeeaeae9f9d598e01"],["/archives/2025/page/3/index.html","6450f04a8f2458d67fe7f1da38b3f7bb"],["/archives/2025/page/4/index.html","d38ad0ab43352e083fb7d710a12e2cc3"],["/archives/2028/02/index.html","ae5367a7163550e2f4eb84f066400ca6"],["/archives/2028/index.html","e2a68fbf55a4b2a61de341941695a3cc"],["/archives/index.html","f3624bcf0a0e0dc1711c589a328c89fa"],["/archives/page/10/index.html","64505bee9e93c5de75e64b31fd5a0af4"],["/archives/page/11/index.html","d66cb5e2df6789e7d055c147bb9352bc"],["/archives/page/12/index.html","986dc2f43144679181d49fa9e0c11f43"],["/archives/page/13/index.html","d665ddfc6c9a9c1dd6ab0a4be8897f3b"],["/archives/page/14/index.html","d5ab70962362fd7ffbd51b71e545eab9"],["/archives/page/15/index.html","0bb315c9424121150934167f40aed85f"],["/archives/page/16/index.html","f3a62312464811c7a3e57a4b9255ba95"],["/archives/page/17/index.html","10185a6ca24e6179ad6b3edcd655e9b8"],["/archives/page/18/index.html","2f61af456cf184a529dfe3f905d137e4"],["/archives/page/19/index.html","72b4a216dedcde583d43bb6c10f9710d"],["/archives/page/2/index.html","879f94a25d9eedf0ebf38a0d66d796e0"],["/archives/page/20/index.html","fa5af18d102aeba9c71f518d1e49d4bd"],["/archives/page/21/index.html","369e25d08bd00ace46487b1a0185ef70"],["/archives/page/22/index.html","fd52aca7c6122c6eb03693c36f980bd0"],["/archives/page/23/index.html","d5047046df0f7eafcbf1592624ee5e20"],["/archives/page/24/index.html","a07115a52eeaebea5dd2a852b27b7725"],["/archives/page/25/index.html","3586fbfaf4ab8d670828fc7944aa0939"],["/archives/page/26/index.html","4a15e465404158774e2d7671ccb3dde5"],["/archives/page/27/index.html","d352228e7de2b4aed9d685d5f127fe15"],["/archives/page/28/index.html","1a747488184732635215f56ec5f3f54e"],["/archives/page/29/index.html","6ead8a72a1b43d37c64a6718668ae370"],["/archives/page/3/index.html","d476b77b4b7845512e07794937def303"],["/archives/page/30/index.html","4f3b8b6d753f993a64ec008c7cb3080e"],["/archives/page/31/index.html","2cf078c97699338b76cfb90e88c0b505"],["/archives/page/32/index.html","0dbb1c1f8ae25aa07331813add54c9b1"],["/archives/page/4/index.html","ce31a56a5dc2526d8dc2977c5b448c20"],["/archives/page/5/index.html","6189ebfb9fa0aff4c0192cb9ee6381d5"],["/archives/page/6/index.html","02051fcaeebb011755badd98530af39a"],["/archives/page/7/index.html","79788a18afc019ccad926bec23ba950d"],["/archives/page/8/index.html","ae735fb2b7ee803752999d1ee37b06c7"],["/archives/page/9/index.html","86a343efb2ebc552ce7a325dbc7ae921"],["/baidu-search/index.html","45684bb14ebb7cacb482dc4fa0b3011d"],["/baidu_verify_code-Hh2fKNlEB1.html","31c4fa0ac8a38cf4e0bd8dfbf21478c4"],["/be-a-programmer-instead-of-a-code-farmer/index.html","de58c70c4039a1f74e6723a5a160ddeb"],["/bought-a-house/index.html","f57777708f770e6aec747a2c6e57f5dc"],["/categories/C与C✙✙/index.html","2f41920782285cc1ed54af0128f5d1d3"],["/categories/Go语言/index.html","f015b00a2c1ebea10a54a700868e9279"],["/categories/ITK与VTK/index.html","017c2e59c4ee65439a8f4b6ba1f10f0e"],["/categories/Java/index.html","af96e2973945c646bc58e93371fc2039"],["/categories/Java/page/2/index.html","ab45c335988c411f20ad9acb93964cae"],["/categories/Java/page/3/index.html","bef4b6ff36f8bfbabefd4646e9b5e6fe"],["/categories/Linux/index.html","8adad74bfdc279d19503b95c01153f69"],["/categories/PLC/index.html","c0ccfd7f7232108d80c7f9ef21f2af39"],["/categories/Python/index.html","c3c77ec273bbe53f6d2c97e342bf9236"],["/categories/SEO教程/index.html","26d42b86a070fe1bdf5294b07762d87d"],["/categories/index.html","08df9dd535e0f42e74ce8b9097aa3f12"],["/categories/图像处理与机器学习/index.html","2ae09e7ce5305dd07cf0630505da7d51"],["/categories/图像处理与机器学习/page/2/index.html","6f9677acb316366c84f1be3bf3c226fc"],["/categories/图像处理与机器学习/page/3/index.html","702f980a794340255ebdcddd20c85802"],["/categories/图像处理与机器学习/page/4/index.html","fb4cc25b334ce8d196fd80a44a0fd411"],["/categories/图像处理与机器学习/page/5/index.html","ab60fe5a6aad2e076583d748d807fd34"],["/categories/图像处理与机器学习/page/6/index.html","028dda345e89b89d8e308ab140e5e2de"],["/categories/工具/index.html","c03e8158148bd85e26e18c8d164369a8"],["/categories/工具/page/2/index.html","2c6489f934085f7c62ebbcbe0faf0e6b"],["/categories/技术以外/index.html","20cf29866d56fe5108e12be5f2c6af68"],["/categories/技术以外/page/2/index.html","3abce12eb9c8b5d9c60833198082635b"],["/categories/技术以外/page/3/index.html","742f48405a6844f881dd876263069e9b"],["/categories/技术以外/page/4/index.html","493d4d970d5aeea3fae3c2ca494fba27"],["/categories/技术以外/page/5/index.html","737e8e0ab891d5ce6abf7956d070fde1"],["/categories/技术以外/page/6/index.html","a56cca4e50d945e40b6e6f7258ed1384"],["/categories/技术以外/page/7/index.html","f3d237854f4f6cf16ebd5796e431d39e"],["/categories/技术以外/page/8/index.html","d5d3a6db800cc0a7f82f667d375e836a"],["/categories/技术以外/page/9/index.html","c0c214b25011c20025e3edeb0a31cac6"],["/categories/数据结构与算法/index.html","9b60edd284c53734eac3da93bf5a3161"],["/categories/数据结构与算法/page/2/index.html","7bd9c30cca151a2f9201c879ce607db1"],["/categories/科学上网/index.html","3fd6a982717290aecd0d9d9a823ffa51"],["/categories/科学上网/page/2/index.html","b6b5f76dc757570af8c20b429ec6442c"],["/categories/科学上网/page/3/index.html","064f736c617f96e5a0cb2c81656d41f6"],["/categories/编程经验/index.html","3dc4060e84571e2a42ef4900455c00a3"],["/categories/编程资料/index.html","3c659dd99e3d60f32a33c3d3bbf6176f"],["/categories/编程资料/page/2/index.html","23b0b8be66902180fe5716a8e242181f"],["/categories/编程资料/page/3/index.html","de1bb4fcd78a6a6988ab9590a1fd6bfa"],["/categories/编程资料/page/4/index.html","fd9cc4fb777a45e53f551f01ad799ea0"],["/categories/计算机基础知识/index.html","07c9be7b93208bdd6faa6ec7f9e3777a"],["/categories/计算机基础知识/page/2/index.html","3458710a7f97905e4b804ba13d54a45b"],["/categories/设计模式/index.html","c20f3519e3f16e890eac6f211517073c"],["/choose/index.html","b1fa224cfbe9144ab77981bd66e5262a"],["/choose2/index.html","a4a54deee0aee6d296efb052480ee57a"],["/chrome-crx-intruduce/index.html","a33d4e9255e7a734c25fa9696a9806e6"],["/clashvpn/index.html","76a0f75c3bfbb399ab14976dfd9cda5a"],["/coder-blog-website/index.html","2e6979d4cc595179fccecbf90cf46a23"],["/coder-source/index.html","6a35ef33439f2e5e31629f203176889d"],["/coder-videos-website/index.html","e360c2b3d0055887ddd7ead87dc869a4"],["/computer-book/index.html","11a6c19d50212b13c46f5b87b16f83ba"],["/computer-censorship/index.html","e97cae8b45e2554a96e36e5efde65eb6"],["/computer-network01/index.html","63de491e368a24f0d21975ded920f7a1"],["/computer-network02/index.html","d79659e123b78138826afe93708434dd"],["/css/main.css","bc32ad34ec4990d934c3c647bdb62f79"],["/database-Mysql/index.html","1ac10762a8d8e258095abd59cc17d581"],["/eclipse-lombok/index.html","8b606b3fec6d814d999f1c80f8fe4a82"],["/fully-convolutional-networks-for-semantic-segmentation/index.html","018b35a2f3fffe32851f94353cb6b896"],["/great-firewall/index.html","8c285963811a495a05dbe34ea2acabee"],["/halfrost/index.html","5f9eb1f2f4f06aa022bc24045e74524a"],["/how-to-signup-chatgpt/index.html","245ee81f04d240d887176ff2428a79f8"],["/how-to-use-Gemini/index.html","c4e5c80283843b51ec07bd3e237970da"],["/index.html","b6497708dc6efb22a0e0e057505b730d"],["/ios-open-internet/index.html","f62ed25abd6ca59c9faca34ad046474f"],["/iphone-open-internet/index.html","56bfb19b34980653d9ceab4293731623"],["/itext-makes-pdf-form/index.html","b7391e4d3088da0bbb9f88e620034d46"],["/java-Set-Map/index.html","ffbb94bf03349e9f71b582288bcebb52"],["/javaweb-server-error-codes/index.html","8226dc60d46ff2fa77afb478793f971d"],["/javaweb-source-code/index.html","fd448bf9bc3eee379a5aeec29416c4f8"],["/js/lib/busuanzi.min.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/js/lib/lozad.min.js","47904d34a224931dd1b615c59a3dbe3b"],["/js/lib/prism/prism-coy.min.css","0ccad54d95845901ead59bfd3ecceb14"],["/js/lib/prism/prism-dark.min.css","a4711d2957d6605eb5682bdd228cf123"],["/js/lib/prism/prism-funky.min.css","efedcdccd7a9ab342d2d9cacd24920af"],["/js/lib/prism/prism-line-numbers.min.css","38e22e790c279bb56f9ec4b90a2a2d58"],["/js/lib/prism/prism-okaidia.min.css","5ac6f9de996fbec68aaa106dfb16e061"],["/js/lib/prism/prism-solarizedlight.min.css","ecc7e64d039873ffcf7fb27babdaeb5a"],["/js/lib/prism/prism-tomorrow.min.css","456af2a14ae4f5089939d5904ac40fe8"],["/js/lib/prism/prism-twilight.min.css","ebb5c355332a8cf9a1ce37a2a69d678f"],["/js/lib/prism/prism.min.css","a5234d614834658887cec6a9515890f8"],["/js/main.js","052d2b299d9c750afea8df0b802ab7c1"],["/keras+TensorBoard/index.html","d551dec17bdc5ea864c3ee5168b4c9c3"],["/keras-beginner-guide/index.html","47f53dc69b60ca729491bbc1f42c66bf"],["/kmp-algorithms/index.html","3e61881a686eebf0b17f01a596aa1622"],["/leetcode-Java/index.html","9aca7a21d08ef54e2fb4d15da67d5dc5"],["/links/index.html","1311749a28b08fc57916b9fb0c5f1d7f"],["/linux-java-opencv/index.html","dceecb204e1da09de03a51e7d800a8f9"],["/msb-source/index.html","516695efa740b4d33f0e2e0d67cf0451"],["/online-BUG！/index.html","50d61bb78c4be6982f34d6d0ac56ce5b"],["/open-app/index.html","6d34a503ec68d6612465bda4e045485d"],["/page/10/index.html","f69b264ae4c62dcf3ae416af65b0481a"],["/page/11/index.html","9eb4f1f41759eb2e87462cf70b45f35a"],["/page/12/index.html","96611588bb03014a7f29c394c3240b8b"],["/page/13/index.html","7faff286e6c3fe4a078fabb4bb327bc6"],["/page/14/index.html","13447016d2d6eff4b4fed355d2870b24"],["/page/15/index.html","8146fd4a7b80b862c31cf82796b2e051"],["/page/16/index.html","945e8a2f1a972149941e8dd38fe7ceb7"],["/page/17/index.html","ea93fa3a0c04b5cc3197624cd6665e03"],["/page/18/index.html","c4aa39fd60fa4d8f58637060e392a47e"],["/page/19/index.html","290717c3e39c7cb6ced070c925f1291d"],["/page/2/index.html","5de31e7f22ac0b77cf24ea8f241e61e1"],["/page/20/index.html","d94cc0a616a4c44b0a26c5bd75004478"],["/page/21/index.html","8de0e0465a6d5e5fafb483ed22a85d77"],["/page/22/index.html","37c12ec6c9a206d797ce338631d59b03"],["/page/23/index.html","6a219b89806ffd594ce4baf90c0c1509"],["/page/24/index.html","3f92edfa959a31def42a03c7d8bdbcc2"],["/page/25/index.html","368a487b9ccff345bfd8fe651aaa73e9"],["/page/26/index.html","c72b0563937acd7c4ff4d69ec293033a"],["/page/27/index.html","30efae3557f734e976cba32509ce1648"],["/page/28/index.html","c75e95430abbe7cafecb3210a04c64e2"],["/page/29/index.html","7673485b9149b91b8817efba4ad48cc2"],["/page/3/index.html","46e8cdbe654955382aeba38469b62f2c"],["/page/30/index.html","ba529008c5a72e91ac7e91dd4e1da276"],["/page/31/index.html","15302eff5d4a07b83c3eaf14793eeadb"],["/page/32/index.html","d613ef000d6787b637226e375ddb79f7"],["/page/4/index.html","67e24a78325415d010f89315ceb28c1f"],["/page/5/index.html","ddaa981320859750ea2845da4a41242f"],["/page/6/index.html","02b64811a89be1618fd804ca82c06039"],["/page/7/index.html","7c1e64ef2a735f5d6e2d75f60b0a2d8b"],["/page/8/index.html","afadc45986d7127556d360e22149d4d5"],["/page/9/index.html","fee19f5f62100ce391bbb72f67e6a77d"],["/pandas-data-preprocessing/index.html","b1404e6ddaafd6d030a458e0819524f2"],["/popcorn/index.html","636bbd232bfd3b848e5c53ef8683bd64"],["/python-Blog/index.html","6e071b7c9e2ee158901dce77ac5c93e2"],["/python-yeild/index.html","db882a337c84c2e5e0134ee3f06a70f6"],["/python爬虫教程/index.html","2dd3bba04c951acc39b286c2c1a79f1b"],["/software-copyright/index.html","a6038244a2e3eb3ae0a061f944bb8357"],["/sw-register.js","dd644a730c720c7a34f4689892791dc6"],["/tags/AI/index.html","73ef7864e368bcc50983bc61e0b753c0"],["/tags/API/index.html","9d5f3ee1f4990aca407faf1b142446ba"],["/tags/C-图书/index.html","a3fc240cd262e7cc6030e33c0c589e3c"],["/tags/C/index.html","4368e9a9caf04dd509dff9c82745ed4b"],["/tags/CNN/index.html","55ecc5f0a4f3a9bb267cba93b24bf35c"],["/tags/Chrome/index.html","c2a3e9eef03bc111ff44aa8c7bbf30f7"],["/tags/C✙✙/index.html","bcb0bc274e287f0847a0cc273f6401f5"],["/tags/C语言/index.html","6efb0319a53126abdcf40ff38407081f"],["/tags/C语言图书/index.html","ac6d4213e3954ffb0a817cca31f4fa79"],["/tags/DSN/index.html","b93eba817abb77c72b991a1285247ceb"],["/tags/Dll/index.html","9d5af510cb10e4531d4f429fd0157fdb"],["/tags/ECCV/index.html","16d2b4a4a86f589f91c0161862887f64"],["/tags/EM算法/index.html","5ef8292cb8bf79a5df5b26fdb6438af3"],["/tags/Eolink/index.html","7796c7cbc4a2ea03c3f72ea6a0bb65e6"],["/tags/Gitee/index.html","098b744024ea1f7fcd0c750c1dcd81b6"],["/tags/Go语言/index.html","2cffa4a85c01b0953d172a8080c4ae92"],["/tags/Graph/index.html","dac5fe4d8ec55be83985876bc3cb4182"],["/tags/HTTPS/index.html","129d401f1540da0007036af6cb4c9256"],["/tags/ITK/index.html","9b000099f5feb5685f77d16e42f33849"],["/tags/ItkVtkGlue/index.html","b7468bee90a6f9261dd25e1adf871be1"],["/tags/JMM/index.html","c16d2ab83753d2fc3bac7f20a1392b30"],["/tags/JVM/index.html","b23e8c74368e9730d62de7d8e07eb407"],["/tags/Java/index.html","594ac6b8afff533f52cdb44e61f95f25"],["/tags/Java/page/2/index.html","34f900d317fbb97d63fba5f23322f326"],["/tags/Java图书/index.html","b306e8094b1e9dab2ced36c29bc72072"],["/tags/Kaggle/index.html","ca6e041077bd001e298626d82d7ba6f2"],["/tags/Keras/index.html","9cd4354ac643b9bb0320043aa1a914c7"],["/tags/Linux/index.html","dd0497ece99f80b882045efefa787396"],["/tags/Linux图书/index.html","8738899c4e3aef94c6b21c6bafedb82b"],["/tags/MEPP/index.html","ec5e7aeddd05d1bf83be5e43991426d1"],["/tags/Map/index.html","7f3ad420b92c10df6bb20e1d20db5c0d"],["/tags/Matlab/index.html","b0a4cd9585550e1b3173d4a049eba229"],["/tags/MongoDB/index.html","50bdce9e9f9945759935f6c7461c71c2"],["/tags/MySQL/index.html","8680c50d3279c19f5ef0f137b3d0aa2c"],["/tags/Parzen窗/index.html","7df511f0a16824fd8d463bea3ca9ab25"],["/tags/PicGo/index.html","0594da769d574adfa8e419b4d154b985"],["/tags/Python/index.html","b553b58a43690945f18e401b5cbddf64"],["/tags/Python图书/index.html","0d11bf6c1814006589f79bd01b2c00d4"],["/tags/SPHARM-PDM/index.html","5188ac9ca60a0ad2cef22ab7603fbfee"],["/tags/SVM/index.html","a60398339780c5e062b1574082c63ba7"],["/tags/Servlet/index.html","56d72d148a63a7871441a3e33d653f5c"],["/tags/Sping/index.html","55cf11191427cc3aa18889eeecdb5e77"],["/tags/Struts/index.html","dfd96248b61935385b7f48c992e8eab6"],["/tags/TCP-IP/index.html","ba260605197469fae0bb7c45f56872ff"],["/tags/Ubuntu/index.html","1ad0620129214db00cda79cc9bf3116b"],["/tags/Unet/index.html","b0285e145aec27a8d21646e72180ffe9"],["/tags/VS/index.html","881b42fde093a398b64ccc52321534b2"],["/tags/VTK/index.html","9f4117323e434f6dc28a97de93a533b0"],["/tags/Windows/index.html","264f6e84d9f8c118d8e50bb06e8a8d31"],["/tags/edit/index.html","71bf17f0c39e72a445c5e6d7d5d9b837"],["/tags/hibernate/index.html","9e1cd3a87db398037cc94c3a8c66e050"],["/tags/index.html","e4073eec5aa49badfe8febf8b80e01e3"],["/tags/itext/index.html","f4f2ceec78e55fbdb5f6e53e093f3c69"],["/tags/jdk/index.html","c97294d263bc3a9d0de199b6f0aba9f1"],["/tags/kmp/index.html","68dfecea81f5cf9d777d7e8858a8ba0c"],["/tags/k最近邻估计/index.html","6e122d03f8b7d8282dc77cd9ab83dd9c"],["/tags/lombok/index.html","e6ea91fd28a54540b18d8e16062f2275"],["/tags/offer/index.html","ca4f9a7ed840efef7e5b1696484540b8"],["/tags/opencv/index.html","037a7a84c8a9c55dc08dc3b61dc68a21"],["/tags/pandas/index.html","66543b227f27dd7c97ad3f05844c2073"],["/tags/string/index.html","cd0942ff126cb504f533a925a6b832fb"],["/tags/vim/index.html","bfb311d3043a74722914f85321989816"],["/tags/vtkPolyData/index.html","cbc52303bef6d8933477e503e73e1f26"],["/tags/web/index.html","c637dd01b4cadf597d88569e06e06651"],["/tags/xshell/index.html","865bbaa42c302a749f3941162603a1b6"],["/tags/yeild/index.html","c7aae4c613b79fc4cb115d1707b563f4"],["/tags/互联网/index.html","8c5b3c47b8bcd1ba45a378a138702a57"],["/tags/人工智能/index.html","60afa54dc0f3ec9a7efe824e6e85e30d"],["/tags/体绘制/index.html","24604f9e2cd1096e4e7c986432b632c3"],["/tags/全卷积网络/index.html","af60db14df63c62d1f2650815ee0e45b"],["/tags/公众号/index.html","64897581108d91da3078646b4842b65a"],["/tags/内存模型/index.html","72aa324565d1be59af3b455549fdde2e"],["/tags/内推/index.html","ba62467d680e12b0ae9c604cb11f9668"],["/tags/函数/index.html","6b5983bb0480f9eab2980c1fcc596c68"],["/tags/分布式/index.html","75ece241ec578e6f7aa406d38930a692"],["/tags/加密/index.html","0a78e89b0f4d565dd9f5081470a9e725"],["/tags/医疗图像/index.html","d145b99dd29c860cf5e7c32585dd6b35"],["/tags/博客/index.html","034ac35fa868b200870176788c2e6194"],["/tags/图像数据/index.html","361d0ac8b11d8d14d995c50540d0d67e"],["/tags/图谱分割/index.html","ef89085b9a22f4f195d7518914c03ed8"],["/tags/垃圾回收/index.html","bc5426ed549e1d83af56673717bddaad"],["/tags/多线程/index.html","c81e85a04af61a944b45788d17f352dc"],["/tags/字符串/index.html","beb89b70e5d4feb78f85084260680bdd"],["/tags/工具/index.html","9e3f4979c8d1816f4a001862279b5be0"],["/tags/工具/page/2/index.html","d61b57406cc3cdb0bd6b5b4f26391e46"],["/tags/弹性形变/index.html","8c4aa3487d3ad5ba4fe242eb813302e3"],["/tags/排序/index.html","1206fdad8667d5d502c56a32d909822b"],["/tags/搜狗/index.html","d975d44929e184140ac733fc44187323"],["/tags/操作系统/index.html","efe263c9c305e7c3234bba37c69d3633"],["/tags/数据库/index.html","f35c7444a17e9d419d6890f26a61b76b"],["/tags/数据类型/index.html","43804953bd8c685b289eb6a098e604db"],["/tags/数据结构/index.html","159f6009140673207e226f5b9fae1231"],["/tags/最大似然/index.html","f58dfc0850f5b6fe39f9537be7710881"],["/tags/机器学习/index.html","1872621a39f10e4074e38afb7bc8cdde"],["/tags/机器学习/page/2/index.html","22f9f88bb6112ba0106924bc56c5478c"],["/tags/机器学习/page/3/index.html","ce96a60c9b5e2b9856f2c63eb69ffb79"],["/tags/机器学习/page/4/index.html","0d3dd12fb884483845cc6780708f7d3e"],["/tags/机器学习/page/5/index.html","def01637a2d78cabff91f34626778b59"],["/tags/树/index.html","3447e047d835cf9b8d88914ba084e662"],["/tags/框架/index.html","8196ecd06e815561e36671b32e13065b"],["/tags/求职/index.html","9307edf8016501d58cf25fb6dbf7e36f"],["/tags/汇编语言/index.html","d7b72cd28a482f80e4175bca90d9bd4b"],["/tags/深度学习/index.html","214e7f2e59f107ff94dbe352cf36f5a6"],["/tags/深度学习/page/2/index.html","6270bd705d720a3c158efbe2e744432f"],["/tags/深度学习/page/3/index.html","0586ea78d15a3b778e9dd2a062fae4cd"],["/tags/深度监督网络/index.html","60a14b3b0907e0d025ece4e0ff5fd8cd"],["/tags/爬虫/index.html","a73b925c32968be5e3a8d2bc726810e2"],["/tags/电子书下载/index.html","16f3ecddc211a527122d3f89d8e9b8de"],["/tags/电子书下载/page/2/index.html","f4d5cdf3bb55de68d12c4a734a124d1e"],["/tags/程序员/index.html","72ea52c2c904940290b8eeebee9e9595"],["/tags/程序员面试/index.html","75333abbe3507bef494c6855fd1d19dd"],["/tags/简历/index.html","e8cd675d422a43ff322bbf13c5ee5a1f"],["/tags/算法/index.html","b9357731a8bbd594dbec83db61dc9920"],["/tags/算法/page/2/index.html","efec5ae848e3d1600d93c0c6419c4815"],["/tags/算法/page/3/index.html","d4b37ef1aaed241b868703407bffc260"],["/tags/线程/index.html","3f1ce7880f59fbe5c977d8298519ff77"],["/tags/结构学习/index.html","678f0bf7fcb8ebf92eb0182b23910b02"],["/tags/编程/index.html","1fd793ace5f7e4d11f10af67e7c6d8b6"],["/tags/网站/index.html","e86ebbc66282db231c6e0d86dd2432a4"],["/tags/网站/page/2/index.html","4c4898882b05a1d4314174c8c77b1c0f"],["/tags/网络/index.html","c9f0030cd27e4a11585baea4df66d72d"],["/tags/网络原理/index.html","8d9f5e86c81784dd8add604ede5980fe"],["/tags/肝脏分割/index.html","1a1f7a9d0a1470d85dd942f7b63d8e90"],["/tags/计算机/index.html","2cba0caca94c0eae71227ae344964d7e"],["/tags/计算机专业/index.html","ce718bd04a083ab913d4436f62c7bf7b"],["/tags/计算机网络/index.html","aa69109735636c344fd73636c05dd195"],["/tags/设计模式/index.html","e8183229d3efb4698b4b944813972aad"],["/tags/贝叶斯/index.html","cd953f27df8da07e326b183694325d4a"],["/tags/迁移学习/index.html","51af7741f6208c10c92f38765e4aba9f"],["/tags/面试/index.html","8573f6a2a9c4dffd56d472826e29e65b"],["/the-way-of-pragram/index.html","0a4025a5133930cd53911308ff0d7013"],["/untiypro XL安装/index.html","857a34630405100a7020a470723f54bc"],["/video-websites/index.html","b84361769abf99993235cbf098605df5"],["/wechat-fans/index.html","b637682e3c28d5b876f389e5e195de4d"],["/window-run-VTK/index.html","01f48a188284c8b6f5ec7f99e1ec6a26"],["/xshell-connect-Linux/index.html","354f97b1511ff2528e38b0ce72e960ab"],["/‌Accessing-the-Open-Internet/index.html","3140f682265796ff0b5623a49fa19893"],["/《Java高并发编程详解》，去大厂必看！/index.html","97a1c2c3df5bfe0ee6ac250c2cbeba89"],["/一分钟没了 1.5W 。。。/index.html","5f820603add8e14c4d7fbc349f838677"],["/一条高产爆款内容生产线/index.html","55836e58f5cb70c91bb5a502e1e70b9f"],["/为高考学子推荐的六个就业前景广阔的专业/index.html","67820bfad8aef34c9ddcf571c435ca5c"],["/互联网赚钱机器---社群/index.html","cd34b0cc2312202c1bef129decc058d6"],["/你们常用的工作方法和思考方式是什么？/index.html","e78fccc089033c85bf5f1653faa79ad4"],["/关于环境配置的一些事/index.html","0335fddc0338d31a486a7520485a2307"],["/准备了19w！搞事/index.html","719c2f183db52bf3d0116a9e8e943380"],["/几个很重要的感悟/index.html","9d8452c372a50200250db5cfd9ad66ce"],["/分割ROI篇/index.html","54524efcd857233eb7a855659dc38228"],["/分割精度说明/index.html","11503714a1ca38bb4ab99048620502ec"],["/分块程序执行/index.html","97f4db360ca28907a05f84be205b5315"],["/加班公司黑名单！！！/index.html","646ebd9690b09af65de77162169fe62c"],["/卧槽，上知乎热搜了！/index.html","6275e40a20c88b402b7c008ca70dac8d"],["/卧槽，我的小破站爆了！/index.html","62b51c5b28aa2a964ce0305dc748468a"],["/卧槽，我被盗版了/index.html","906a9f33814d5c6c356314b5c593e615"],["/卧槽，还有985大学在大一上C语言课？？/index.html","53746c7d43a2f721e42742908e8cac1e"],["/历年微软面试中出现的leetcode算法题/index.html","53bf7f2688534026db97af58cc54c8e4"],["/去特斯拉试车了/index.html","939cd9bc6e149f476042b58a398a6919"],["/吃苦的三种境界/index.html","4c46e54d3511edc32ec91f0929e7e3ae"],["/哪本书适合推荐给 Java 初学者？/index.html","317a2b4af64fba76e2acbde43ded7635"],["/哪本入门级的学习数据库的书最值得推荐？/index.html","9296854898f5850f1322027a8a94412c"],["/国内外常用的AIGC模型/index.html","f6ea9e095be8e6180587587e319e857e"],["/国庆假期/index.html","8289d6c8a3714f109ada72ccaeaa4a77"],["/图谱程序字典/index.html","e3956cc841a4816b2bb2fe1e42c94425"],["/图谱训练与分割/index.html","9c015d4f21d6b9512ee55dd36e444a7d"],["/宣布一件大事/index.html","81f7f76e23acc03a23be4e35fecf4328"],["/小鹏P7i试驾体验/index.html","358f739d380e6d0c62d45fc161029742"],["/微信PC版3.3.0内测更新，电脑可以刷朋友圈了/index.html","443ed5a8ff94ab33838fca2ab6889697"],["/怎么更快的赚钱？/index.html","2c166652026ee31f5d67f78ded6aba21"],["/我毕业了/index.html","c4e77f1c3b4a782743a80df6879fb160"],["/我！真！的！找到了！爱上学习！的方法！/index.html","af8632785ad4cc8f09c180d0265980e3"],["/户口的意义/index.html","7fbf31e9d91a9604a54074844f673703"],["/推荐两本经典算法书/index.html","d80600b89827ca949c62509f50d71732"],["/推荐几个在线学习SQL的网站！/index.html","68439f944daca01acddb9e2d729235c5"],["/搞了一个程序员成长晋级社群！/index.html","9b2a4a50071933bb7add93a5159445c6"],["/摘抄/index.html","1f78e2e9faae84070cd64f7d107492eb"],["/暴跌30心态崩了/index.html","d1c6b0245f55f98cd909b2639b5fe454"],["/最近很火的ChatGPT到底该怎么玩？/index.html","f247a3903d8656b37f2f27112ad2fed7"],["/有哪些好看的日历可以买？/index.html","4710aa4c2d8c7074248d788ee59c0e82"],["/服务器有啥用/index.html","5b1e743855614eaac3696e4f15be6fba"],["/来长沙了！/index.html","5edef65dc25619eeb262521ff82ee0a4"],["/校招污点公司名单/index.html","dae3c675e92c27cdd8219259629376d3"],["/梭哈200多万/index.html","c9f39468675e95eeaad6a50813588bb7"],["/梯形图入门/index.html","576a3344fc87b885f701265b1f1b6ca5"],["/橙心优选，凉凉了！/index.html","ef1e8352820c7831c3dfc6c18825cbb7"],["/比亚迪汉试驾体验/index.html","75c31a412f916e86b8af0af3b4a454eb"],["/清华转学成电，真的牛逼！/index.html","346087ce82e50202505dfaddd83b65e4"],["/滴滴程序员被亲戚鄙视：年薪八十万还不如二本教书的/index.html","db9b28ed0c128e37711093aad069a95e"],["/社群！/index.html","dc3739a6d4f58689369c6f4bc008eaa5"],["/科学上网之VPN篇/index.html","5978cc98ea5ec209eab9ed5964cf47c6"],["/程序员必备的几个技能！看完你也是大神/index.html","1ad74f52315beeb60c993919ba717b09"],["/程序员绕不去的槛，Linux！！！/index.html","ead557963f10b98bfd25ad0ccfe03b74"],["/蔚来ET5试驾体验/index.html","4ebb35e36a30563b13513b4e074806d6"],["/蔚来，牛逼！/index.html","a9111458291261f24a63770ddbc0295d"],["/被录取了/index.html","9bc262e26de43e0b76311cba0bf970d2"],["/被找事了！/index.html","d55e17cfa19f706bb39de75f7153d35b"],["/被拉黑了。。。/index.html","23b99ddf18f182cddb6f6df7721786dc"],["/被车撞了！/index.html","8097eef0727e03cc73e15033456dc9f7"],["/该如何选购固态硬盘？/index.html","683313ae70b73cf3caf1247e70992ee3"],["/这本书一定要看！/index.html","0a42f8e78fdb38d97a959103f204b1b5"],["/选Java还是C++？/index.html","861eada5cee1a95b1264b809bbd98cec"],["/那些让你起飞的计算机基础知识/index.html","8d3297b1150f4e697c8255b146849f7b"],["/靠这几本算法书，成功拿下大厂offer！/index.html","6932ea85f2d39fc0e63b600e862535ab"]];
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
