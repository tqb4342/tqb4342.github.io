/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/0010-city/index.html","d312d9b2853856ea0ca814c06244095c"],["/10-algorithm-book/index.html","5ed5b9ae961fd287ab244827ebc14ea7"],["/10-website/index.html","6106cc29b1a50dc917128d989e5fc3e4"],["/100万的小目标/index.html","df2d9d8ac87998eb66faaaf2e034aa13"],["/10w+YYDS！/index.html","5ae82d5ca3b631e71213a98a5bafec25"],["/10website/index.html","11881e38e639b196da560e33c75082ac"],["/12-technical-tutorial-sites/index.html","2328fb10b94646a27b18a4c069a31dca"],["/2 6 岁 了/index.html","7e5f73250db931db7435c4ca23d76e49"],["/200万，啪，没了。。。。/index.html","837d64757c55b018b89d2e3618c9e4c1"],["/2018ECCV-Paper-DL/index.html","1c9d1fb7ed17195f8d8d7b64a4c4c558"],["/2021年固态硬盘选购最新攻略（小白避坑指南）/index.html","59a7a2d580fd33d553d90f32a0487b68"],["/2021机械键盘推荐/index.html","899355da1d905a4d186e88ca5af1fef3"],["/2025-07-15/index.html","d967de44370ac42549fe2982202dd303"],["/2025年终总结/index.html","bb6594be80e6536a73fdb5cb8d4d620b"],["/2026-Open-Internet/index.html","fc07c057e74e810bd838657a23a33350"],["/2026-best-vpn/index.html","56d9bd748fc0fe7add1817773fd73bef"],["/2026-clash-vpn/index.html","e43a7cee5e5cfdbcc1bea0c9c6b2e4aa"],["/27岁了/index.html","63fd5c3413e160cfba527e2064027f10"],["/3D-Convolutional-Neural-Networks-for-Human-Action-Recognition/index.html","241927ce99f7683e78b0f4d48b079fda"],["/3D-Deeply-Supervised-Network-for-Automatic-Liver-Segmentation-from-CT-Volumes/index.html","6d006f0fc07c8aa1c14e99b50acce274"],["/3D-Unet-Experiment-notes/index.html","50117eca7032f9c2fd56cca8e267bc4e"],["/4-Software/index.html","f4c9fc8ebeb264432512f8843cba34e1"],["/6-website/index.html","deb9d159785e68492fac057471d695fc"],["/7-terminal-tools/index.html","0305ef5a9dcff45bf1bd06a9fef04c63"],["/AI-PPT/index.html","6dd109043357fc3abbf7974e0ccbd95b"],["/AIGC中典型的深度学习网络/index.html","2ca6c02b71eeea0e546aaf08e961e855"],["/Agency-model/index.html","597eff660c888dcb8ef6e6c6e842ea95"],["/Algorithm-brush-notes/index.html","873965a4fc3c50e7bcfc0a6a931c94b3"],["/Ali-recruits/index.html","b2449fac55cde2222dcc691b9dd2e4ff"],["/Android-VPN/index.html","be92001ee67ba8ad5c18db2e7d5c130c"],["/Android-open-internet/index.html","615d1bcbd4d8b566e90048c6e4557b9b"],["/Appearance-mode/index.html","2ad9650f4f5027c96765bd8ab1fffa03"],["/Backtracking/index.html","d46bac80d12662914e94c5eead6739af"],["/Baidu-Sao-operation/index.html","164c3067ea47c8aa48aea2847c879ddf"],["/Batch-Normalization/index.html","84b3cdc49ac7a2f65be37983f4cd62c0"],["/Best-AI-tools/index.html","7db09943994ae1ffdc2120833facf46a"],["/Bias-and-Variance/index.html","88eef25d826ef8d39cb957f73711df1f"],["/Binary-tree-traversal/index.html","5b669953e314746e5b0f4bffaa62076e"],["/Branch-and-bound/index.html","2cd9ac810eaad6b16640bed98167ae14"],["/Buying-computer-for-the-first-time/index.html","ba29d7f1f257e98635eaae7fb1d9aef8"],["/B站向北邮道歉！/index.html","63783ef618a4bfce5cc0cea8233e6d38"],["/C++-string-function/index.html","1b6dadd3b615cb0224df73a28913f899"],["/C-Java-DevelopTools/index.html","3fdf3c822bf3e1094c0bd4f645cd73d4"],["/CS-Classic-Books/index.html","a00cac9fe0ca79139017900dcfa8633c"],["/CS-network/index.html","fd98dc3aaab86eea025b4bf9b85b5b7d"],["/CSBook001/index.html","4dffe3a6a67ee0caa64ba56969cd1092"],["/CSBook002/index.html","d84f3699cf4fc74830aed46e02036f5e"],["/CSBook003/index.html","5dbc29e6303315157a01e0fc81fc09ac"],["/CSBook004/index.html","1dc7b40b674f36907684e7dcd19b8e08"],["/CSBook005/index.html","31165c1ca96d0f4cf5cb7a43e8330e38"],["/CSBook006/index.html","988a3ec17d91a266ab4dba0536ab68e5"],["/CSBook007/index.html","38840b56a2d400e0af7dcc842890d519"],["/CSBook008/index.html","74ddae6cef826a68f74920a9951e6502"],["/CSBook009/index.html","3e36e10e17b56d65802b1cbff4c18e81"],["/CSBook010/index.html","3e3a1c94adaa96d1a639846076dbe5fa"],["/CSBook011/index.html","581f87e0c8366cddb863463268995e5e"],["/CSBook012/index.html","f4c8283aa0919cb87d145195d5aa5db3"],["/Changsha-really-fragrant/index.html","83daad045cbdeaad36fd70ca5a4c61ce"],["/ChatGPT-VPN/index.html","ab97bdf6183f1f263d5640d2d7253563"],["/ChatGPT/index.html","bbf87f1b6a4a1879d98c2564bd3630bd"],["/ChatGPT！王炸级更新！！！/index.html","c72b44822a0913e84fcbde97eacfff4b"],["/Chrome-crx/index.html","8f8ae249bb443aa46ca25c923e704bef"],["/Clash-VPS/index.html","623b2260b02c34d60175f620f92ecbfa"],["/ClashForWindows/index.html","b8aac1ab80cbeb223d6d5c7d4f76e542"],["/Computer-Classic-Books/index.html","7d1a4fce072e0de159ad751c6f9bf737"],["/Computer-for-another-major/index.html","1dc292a383ae8c7a544756ee6ff1c2ae"],["/Conditional-confrontation-network/index.html","479db755992b6f30a0f8e8cdd3566bf3"],["/DNN/index.html","20ba219f364c506a638901dc084d27dc"],["/DSN-segmentation-liver-experiment-summary/index.html","410ecf086ebcba9ffea63625e4c93b53"],["/Data-enhancement-elastic-deformation/index.html","cead85513041bfffa9458a5af67e40bf"],["/Decorative-pattern/index.html","02900f372c214760123ffe454d8dbb1b"],["/Deep-Learning/index.html","f2c7505185d0675077e89f26f6c211e4"],["/Deep-learning-and-medical-image-analysis/index.html","f6694c98fe697276020b331a41bc70f7"],["/Deeply-Supervised-Nets/index.html","8046660c4a20b396303cdfbe7af80809"],["/Deformation-model-based-sparse-representation/index.html","45f12fbdacb45dce5f88453b349efd67"],["/Discriminative-and-Generative-model/index.html","3731a4793ff934684fdb0dfebadd18ea"],["/Distributed-transaction/index.html","4a181ddc9c756d06f6afd21b344463aa"],["/Divide-and-conquer-algorithm/index.html","0b8e834bc2dcc25cab0943807f2b17d7"],["/Dll/index.html","af42e6d8e7e1c88c0ac2baaf74e7c32a"],["/Dynamic-programming-algorithm/index.html","59a6083a9178fc11296c8337e71f0e5e"],["/E-book-download-commonly-used-by-programmers/index.html","7b1d3d86a82cc549169daa6e4f3e791f"],["/EditPlus软件的安装、激活和配置过程分享/index.html","9474172450cec312a49e23957e7d175c"],["/Eight-sorting-algorithms/index.html","460120b418a260665b543f1ccdc8caaf"],["/Encryption-Algorithm/index.html","62ab7dd7b029ef6c6b83bd81783bef23"],["/Eolink/index.html","df27a33a8cd3d8c69417aa5bb54ca0be"],["/Factory-and-strategy-mode/index.html","1d5d9f3938485b96888d493ceccc7c00"],["/Foreign-technology-blog-community/index.html","9edc13f3c4c954288fbeda0f49b3256f"],["/Functional-model/index.html","cc5b41a1b39c59aa039b53e917ac6542"],["/Fund-type/index.html","d6ba0f0912d618db0ab29927c5d1495a"],["/GPT-4o/index.html","51445cadb2e2cab3ab4c33ac3448af2d"],["/GPU-medical-image-processing/index.html","b727569333004c8b8c823d09571a2d3b"],["/Gemini-pro/index.html","06d29ac37ce85b11ac740b0631707548"],["/Gemini-vpn/index.html","eae5e9de53bc036fd304ccc7d7b073cf"],["/Gemini/index.html","1f552bf87438b09fae2e26800fe6ea0c"],["/Generative-Model-of-Unsupervised-Learning/index.html","ade74e711168fe652d2b279318433566"],["/Git-Learning/index.html","aa91c3273fc504496ed9ae458f178b00"],["/GitHub-2FA/index.html","acafafda392a1d21b4e216f5212776ee"],["/GitHub万赞，程序员必看操作系统总结！/index.html","fb57172c6ca1a57b3c51eea748f5c659"],["/Golang-book-recommend/index.html","8eff72c11662203ae36cc8681f3a37f8"],["/Golang-learning/index.html","7133eeea2819cfebbfac8d94fea0a4e1"],["/Google-Gemini/index.html","bb4907a2e299f3218631638acb33128a"],["/Gradient-descent-optimization/index.html","16ec5fdb64bbfdb3bbf208f3cf94869c"],["/Greedy-Algorithm/index.html","864de29a510e81d05d969fad78a7a62a"],["/HAND-User-Forum/index.html","0eab73597cb95ee1afa29fd16fa5f1d5"],["/HK-bank/index.html","cb2767b995b0a4fff5d9dc5e183bb703"],["/Head-to-head/index.html","c8ebaf7860d3084bfcf928a56083fad2"],["/HexoPage/index.html","255c9d79c63f203736928328d0c70c53"],["/HistCite-Pro/index.html","395359f5c4d60cc95d75470828c3bdea"],["/How-does-the-program-run/index.html","7ae4955cc8c6537215455e89e7c28317"],["/How-to-judge-whether-technologyisreliable/index.html","71a9ae27b0ef359887d48bab6a1d477c"],["/How-to-learn-design-patterns/index.html","b84ead7266934c1fa367bdbe211618e8"],["/How-to-learn-design-patterns？/index.html","521340a28d3310742e333a2317c26b8e"],["/How-to-teach-yourself-programming/index.html","51184efda616e4991c7e19561b765740"],["/How2learn-Python？/index.html","b3b75998e5ab29797d531bc07a38613a"],["/IDEA-shortcut-key/index.html","6f0f6fbe3c99e990ebfa0bbb15eee7d7"],["/IT-interview-basic/index.html","e84d5c180c3ac85d7a919df76a6201e7"],["/ITK-VS-install/index.html","c1ef85a84043bb6dcf5d55dac2c260e9"],["/ITK-VTK-ItkVtkGlue/index.html","6460a8e25f2a0d39fc22a33567125acf"],["/Image-processing-plus-noise/index.html","3fd480997399f35b8a6166f62f2b34c2"],["/Inception-Going-Deeper-with-Convolution/index.html","27a152ce8f72c8eafbfee2473af6dc5b"],["/Information-Cocoon/index.html","5ed5abaf484ff39384cab2e85e4ba6ea"],["/Java-GC/index.html","d531d0abacb3ec6e044b075113f17715"],["/Java-Servlet/index.html","8afda15db11bdf351266b126e3459043"],["/Java-array-and-collection-sorting/index.html","1e2d536722f4987f538b19b9b4ed5620"],["/Java-development-tools/index.html","25399ddaf8ef58662130a55740c92913"],["/Java-eight-data-types/index.html","0b512acb1a0718ea1cb12a5792f91528"],["/Java-interview01/index.html","75bca29fb9cb65e94b6c96372e04dcd6"],["/Java-interview02/index.html","045e1fe9526d6a7b05108a8076216194"],["/Java-interview03/index.html","f2c05c6613bec2341b23112ad0f05e3f"],["/Java-learing-map/index.html","df55edd006d8ddbb65c38edc350c1b5a"],["/Java-learning-route-map/index.html","f2e0670703c32cb3fdf020cd6d20954b"],["/Java-memory-area/index.html","4e4383d6f0883e8ee6d9aedd977c8c23"],["/Java-memory-model/index.html","4bef195bdd62f6cf15275f89efe89496"],["/Java-multithreaded-learning/index.html","ad646ec9c498e69a057f578dbe00593f"],["/Java-project/index.html","ba2c0f113917bf67e39fabcb585e8479"],["/JavaWeb-Chinese-Garbled/index.html","d68fba3e77a14f32fed6ccefb3b6a96b"],["/Java还是C++？/index.html","67873a6d349dc7c19fd1128ba7f64c98"],["/Kaggle5-step-guide/index.html","3f1f9911bb1690b6dc587c1f15abfd74"],["/Knowledge-points-of-Java-garbage-collection/index.html","65f314f53afbd42846b46dbd73ccf950"],["/Layoffs-Hiring/index.html","8ba3c8ab93c21c50ab2ae8b996ef7330"],["/Layoffs-and-Hiring/index.html","0938232977bd14d614efb459b3226792"],["/Linear-regression-of-machine-learning/index.html","f322d79b18017d59f8d66fa3d5885c2d"],["/Linux-Compile-C/index.html","7f15b0a93e7b3d919fb24b62f2e4f267"],["/Linux-ITK/index.html","fb9f56d25d0fef66608269c037b60cb4"],["/Liver-segmentation-of-sparse-components/index.html","34f9d5769702da9fb2968efb693bfb50"],["/ML-EBook-paper/index.html","9c3806179a8908dbf6d0d7c42ef54c00"],["/Map-uses-multiple-maps/index.html","ceed06503b744c04c5e4ac196dc9afad"],["/Marching-Cubes/index.html","4e618016bf733c1cbe30aa48ce20057d"],["/Matlab-Graph-cut/index.html","73edf56e496498e000ae055d9b390df9"],["/Maximum-Likelihood-to-EM-algorithm/index.html","9485a405a4d95987be9594f18077b958"],["/Mean filter and median filter denoising/index.html","21a6c7129cdef2701a925045b9c4f795"],["/Medical-Data-for-Machine-Learning/index.html","d5e8a358ac8acd31ef936e0a8ed38a1b"],["/Medical-image-analysis-deep-learning/index.html","915e6418e1170c4161e99dbcb3b8316c"],["/Medical-scan-image-processing/index.html","6903ca6186f82a304491e5bec101f210"],["/Merge-sort-algorithm/index.html","826a581db448f1a8bb5447eb3c0df703"],["/Monthly-income-2W/index.html","e8ea2c77a29d2360502904d4af75cde2"],["/Mysql-database/index.html","495cf107b26045f66f0f2f25db79d0f5"],["/Neighbor-Embedding/index.html","bb9a1b73bb85bfea2f0016f0c0bb9280"],["/Neighborhood-approximate-random-forest/index.html","e2b6542d33d42eaeca722c4b11eefce3"],["/Net-and-official-documents/index.html","f2ec338eea8caaa71269ec017874e4ff"],["/Netflix-VPN/index.html","8774292183edea9fdfd44bdcd80c639f"],["/Network-principle/index.html","56c083450475d8bde479038cd5b0b092"],["/New-Hong-Kong-stocks/index.html","5769cc07f88020ba71e2881aa78e25e0"],["/Nice-to-meet-you/index.html","8c4cfd344453b015f10052518b0ce834"],["/OS-processes-threads/index.html","515e854ef2673ca64dfe5b7be814a13f"],["/OS-run-environment/index.html","7b94a7c252823567ffb375725e0554b9"],["/Open-Internet/index.html","f10e4981e8f36c17e7d49be8e9224d8a"],["/Open-Internet2/index.html","22a5ba5f3cf0312fdf1d812705926060"],["/Open-source-community-and-rewriting-website/index.html","4fad82368f6af599912684ea959a4f04"],["/Panoramic-image-stitching-based-on-SIFT-features/index.html","4630bc8f145070a132791672b36c0914"],["/Parzen-and-KNE/index.html","9eec3b2feaadb40879e10d2ce790fa1c"],["/Personal-technology-blog-site/index.html","3c35387c44eeb8a0ff28aaa053e42b6b"],["/PicGo-Gitee/index.html","5cee25e9e7515b67708d0bfe7942e484"],["/Programmer-treasure-chest/index.html","465fd94561d881ab7f4cd3f98b5da79f"],["/Prototype-mode/index.html","055980079a0ffc5c58309df6f26bde07"],["/Python-base/index.html","2795e5a9df888fccf74aa7027f5cad2a"],["/Python-crawler/index.html","d0b5408d525742c74a8108b3b1b9132f"],["/Resume-revision-suggestions/index.html","ee3aacfe8c93b558d706deeaf9616df3"],["/SEO01/index.html","6d20084e72bc97d9b0e8a54bb2456b71"],["/SEO02/index.html","6647af7dc707b205bd3236ece9214e78"],["/SPHARMPDM-MEPP/index.html","5e93a40ca4f5eeb44c70472b70cbf63c"],["/SVM/index.html","5af8497ef730c91d22110eda87daacca"],["/Seata/index.html","87e5276c52b10eb51455506f56b15164"],["/Semi-supervised-learning/index.html","c4e893e53cade286203b3ecb713df20b"],["/Sequential-model/index.html","8867b113d29da289662ae54e074af40c"],["/Shape-Based-Human-Detection-and-Segmentation-via-Hierarchical-Part-TemplateMatching/index.html","2cf0fdbe9323a28ffa9595b18242e97f"],["/Spring-basics/index.html","7bf8d6449665f9671960127ad90ed752"],["/Spring-integrates-hibernate-Struts/index.html","1e10ab06dc716d03163564348d2f5793"],["/Structure-learning/index.html","7271dfa9f4798ac4171c12899aefec3d"],["/Suggestions-for-self-study-of-computers/index.html","d6f3b5f943d4c3f2a843a7aac948b7bb"],["/Summaryof-HongKongStock-Account-Opening-Links/index.html","72b27fff4316af344d875c101d0b109a"],["/TCPIP-detailed/index.html","e48b74037f4950c736cc180c56488343"],["/Telegram-VPN/index.html","42005c875786ea5baf54cf392e08c51b"],["/Telegram/index.html","adc5a8c9b03d20c8004c2cc41b4b38bc"],["/The-essence-of-shopping-festival/index.html","1d21637764fc6c9fe189228ea10a5f19"],["/The-most-important-investment-in-life/index.html","96505d939607381ab7659d4622b553bd"],["/The-most-successful-nvestment/index.html","7e838947280fc7504a08a022e90799ab"],["/Transfer-Learning/index.html","04f7fc5a9a05d504281305ed455c73a9"],["/Transfer-to-computer-major/index.html","93f2b5afa175bc9048bdd63fbfbe671e"],["/UNet-Convolutional-Networks-for-Biomedical-Image-Segmentation/index.html","5e23dc9bc7c7bf8b240002a5173ee024"],["/Ubuntu-install-sougou/index.html","aceb2bf726f2eb347852d2366b86d0ca"],["/Understanding-of-paying-for-knowledge/index.html","b6d95313129d8fb80b110acd66bcddd6"],["/Unsupervised-Learning-Linear-Dimension-Reduction/index.html","7d14e5a4b5eb925862574b2b68542025"],["/VPN-HELP/index.html","a35321db244047f5fe3d044cf8b58360"],["/VPN2025/index.html","2462c09836d981dd4448563e216c442d"],["/VPN2026/index.html","05635c5d4b8856935fa7935ac52d7285"],["/VTK01/index.html","1d991edcbb575fb39222d3642c54361e"],["/VTK02/index.html","a71a8a46ba5826d31d012c8bd6847409"],["/VTK03/index.html","ca9ebd763a40b305d24ca33fa55f2644"],["/VTKRead-write/index.html","b152472f8c5fe6acc24a7aca70d59fed"],["/Vertx-Java/index.html","6ec4a96bacc43a9f4387a71bac86c486"],["/Vpn-OpenInternet/index.html","f5dbefeb35e16685f85fab5d0a97df2e"],["/We-are-all-good-kids/index.html","620ce79e79ab45dca5822ed64339e40e"],["/WeChat-80/index.html","b3e232d8f64d4cf60eac8feefcf6d1fe"],["/WeChat-red-envelope-cover/index.html","9a129bbbb857f4584aa2f693322aec17"],["/What-is-crawler/index.html","9a08fa98e75a5f1e41ccf5fad2ea74e7"],["/Win-Open-Internet/index.html","aa81e234e940264723b7c3aa611788f5"],["/Win-OpenInternet/index.html","86662a081c2acffe548a16141dbacec0"],["/Windows11-2kfans/index.html","e56348d0bf4fde72243b61839333f0bc"],["/Word-Embedding/index.html","272acae9b5052c3e54c33d9983447eae"],["/YuanShikai-and-his-Beiyang/index.html","f1de987fa92e8b9a0800ee1af1f04fee"],["/Zero-copy/index.html","9d931df524598212b3770460a6320840"],["/about-keras-model/index.html","df84854f7dcfa07d1bb77f8142377709"],["/accounts-google/index.html","38fe7d87285d122297b327483a7837ce"],["/algorithm/index.html","632a037816baf1a2c47d63472764898a"],["/alibaba-Java/index.html","1d44e9d26efd7d1c9c94e8a7d242b4dc"],["/archives/2020/01/index.html","ef6078a4f0294af04309231f6c1ffde1"],["/archives/2020/09/index.html","89b4613a5ed4c158d6ea5840c7f1f330"],["/archives/2020/10/index.html","3d3bbb25ed5a017c696c79b2189c4c60"],["/archives/2020/11/index.html","9f364ad227b7ee00f2c104029a132549"],["/archives/2020/12/index.html","a7aeb529a9913f770a84d8fc386e05ee"],["/archives/2020/12/page/2/index.html","9c9691968393b6b60613ec054017bff8"],["/archives/2020/index.html","c6eefa8a50bf6f24cf2bcd68afaa89a7"],["/archives/2020/page/2/index.html","90c4e92646a599725eab220be1f5b577"],["/archives/2020/page/3/index.html","35cdb81fe9d4f0c0a3bc57f764c52669"],["/archives/2021/01/index.html","d5008f77754cd1311d96bbe857deccba"],["/archives/2021/02/index.html","04b171750842c70e0674a3cdcb286d04"],["/archives/2021/03/index.html","ca0d85a5ab1ea10423c7114ebfc4e443"],["/archives/2021/04/index.html","874e654a1324a8b2813dd0d0c5bf99c8"],["/archives/2021/05/index.html","516c59f89fe057c28e2d98a9910348d6"],["/archives/2021/06/index.html","01c6bf3d70f0f10cff0ac2f7a2da1ceb"],["/archives/2021/07/index.html","c83069238cc1c78a0412cc7f96dc4235"],["/archives/2021/08/index.html","1cf6ba1c855f53bd3deae6746b7e8efb"],["/archives/2021/09/index.html","538ab8946fb0b2590fafbace7d16cc2c"],["/archives/2021/10/index.html","8960aea687e02723e7c488a453d6e93c"],["/archives/2021/11/index.html","e14cc7b3b6fd7492ff8692658d98d550"],["/archives/2021/12/index.html","625ae92df59575d57d2976e64f5dc82b"],["/archives/2021/index.html","e6942138f80d2a22ec82762019a22d99"],["/archives/2021/page/2/index.html","876e597acad834ad2989a70f9407487f"],["/archives/2022/01/index.html","d3b10dc3bc517ea95c5ce46125015120"],["/archives/2022/02/index.html","a2b5f130a391fddaeb3e54035f87b19c"],["/archives/2022/04/index.html","a92ed0e3c498f97ffef26fe22189523a"],["/archives/2022/05/index.html","520430ca09027c5ac2b1bb769a85e0c0"],["/archives/2022/12/index.html","a238216d517dbea0f2fb05d4b07abe75"],["/archives/2022/index.html","e66e2621ed1499b1c0ff0b3e7d6819de"],["/archives/2023/01/index.html","ad97af3a3516ec1a4b47e1fc52f2ff2e"],["/archives/2023/02/index.html","b58d03894eb6c734b4962276777d86cb"],["/archives/2023/03/index.html","3bbaa7b19c2ed22e83c6b4d1bf5c048a"],["/archives/2023/04/index.html","90ea6ef9a84e27ab1ecc2d788c7ac7d9"],["/archives/2023/06/index.html","ad1e334971e43c6824e97c162afe3f67"],["/archives/2023/08/index.html","2aab65632507c1f9e165782e74dbaa54"],["/archives/2023/10/index.html","be486ea65dcc2d8912881616910c9250"],["/archives/2023/index.html","299f63b5da975efde79087f899d79dbd"],["/archives/2024/01/index.html","5cd704574fab2afe5e0aeb1dc76bfadb"],["/archives/2024/02/index.html","a1198c7617cd08d00bb65af129180e09"],["/archives/2024/index.html","81d98fe5ff724a261068140ff77bc35e"],["/archives/2025/06/index.html","c96e8ff00b1e8b25160db473553a3227"],["/archives/2025/07/index.html","5d79539e5cb3fad53bc84f2ea8fdfa87"],["/archives/2025/08/index.html","b260965db17b85276afdb57d5763d87a"],["/archives/2025/09/index.html","6f71478c96806f2f48bc226db67de25d"],["/archives/2025/10/index.html","b9dc1941c343745ff601d3f03bec8122"],["/archives/2025/11/index.html","c4c50fd61ca8e7140082f7f93417e3fe"],["/archives/2025/12/index.html","a014b51e5618d0889e6832f575609bd1"],["/archives/2025/index.html","73c861323117ea2896ed5609c0167823"],["/archives/2026/01/index.html","6d987d6f8f45f15c0186154b596cf6b2"],["/archives/2026/02/index.html","e9902d06202dd5991ec068dc65e53ffb"],["/archives/2026/03/index.html","299c72210491aabccaf99ca47473474b"],["/archives/2026/04/index.html","11e2aac94cbee367fbb903bb92b12076"],["/archives/2026/05/index.html","7c31794f5562298af625077ceab023de"],["/archives/2026/06/index.html","82fc05a9d487bd3b8b9220adae19c90f"],["/archives/2026/index.html","bd8f8fc97a49579f3eecae407b4d9d7b"],["/archives/2028/02/index.html","0bcf1623155e44d15d940b0a5e4d58fc"],["/archives/2028/index.html","62c53395b864d371d6a4b8a42e12debd"],["/archives/index.html","ff6172d7be80b2eb78557c6316a98387"],["/archives/page/2/index.html","b06d775d15b18a658529718916327683"],["/archives/page/3/index.html","d3e2cc835ba4074ea3dd6749f6b95ebf"],["/archives/page/4/index.html","b18f1cb1a18fa487bdfa62ca709f6985"],["/archives/page/5/index.html","161666b218cf6c637d841268a631bec2"],["/archives/page/6/index.html","8fc6ed834b4aa423875c4b01bc3d86b9"],["/archives/page/7/index.html","39ed6af4b4bc4bae12a5de0d8eaf10fa"],["/baidu-search/index.html","65d0b43588ee77b2bf649ce9426a6c5f"],["/baidu_verify_code-Hh2fKNlEB1.html","7bf4afc80abe37edcf2b143a6692636f"],["/be-a-programmer-instead-of-a-code-farmer/index.html","1be6a7b1fb420f99e8ec7bf5a2351e8d"],["/best-vpn/index.html","3bceb4449324caea05712e6e82372a83"],["/best-vps/index.html","f06086e8e991ff43de0417063ab2f038"],["/bought-a-house/index.html","93f4ba92ae16f3895216758dac645833"],["/categories/C与C✙✙/index.html","0573e032d4e145e0778afa113652666f"],["/categories/Go语言/index.html","f153cbe614018fe72ad9aa2c38e47cda"],["/categories/ITK与VTK/index.html","a62730832e1ff368ec30a173611194dc"],["/categories/Java/index.html","682f52eebaf24db41f7cff0b2ab2fab2"],["/categories/Linux/index.html","8af2accf0288a2c693fd8aed40bf9e2f"],["/categories/PLC/index.html","856d4759fc8785a69de88f636a5fc5c9"],["/categories/Python/index.html","235af3846bc2c57be2df26adbe82ce15"],["/categories/SEO教程/index.html","71fa348b3d7b20b48ae60a5e77bae263"],["/categories/index.html","89a85836f099f98b9d92a0a910dd260f"],["/categories/图像处理与机器学习/index.html","e163fa26aff01af74d9916d35367da02"],["/categories/工具/index.html","77f26bcc6cb07cce9b0830490fe775cd"],["/categories/技术以外/index.html","db6aa521c0b8e0e57f37eee113f75f15"],["/categories/技术以外/page/2/index.html","d9e306f1d63f9b550d997e8d089334b5"],["/categories/数据结构与算法/index.html","06f680b259f2a03aa9b24c577b52a065"],["/categories/科学上网/index.html","ea7c37e92339e2f55ee269713c712907"],["/categories/编程经验/index.html","cec2a805e1cec479dcebca1b145e9c5c"],["/categories/编程资料/index.html","01a72fc9bcaa439c389322e3e2beda26"],["/categories/计算机基础知识/index.html","f9e77f751c5e3f3dc002f7e47daf9a5e"],["/categories/设计模式/index.html","6c6886a1ae867684bb8b1cb23be65a57"],["/choose/index.html","767ee5def67218b976b486603da76597"],["/choose2/index.html","29675b75a44264a0d77a96230be72744"],["/chrome-crx-intruduce/index.html","6aa3606ad86010301996207db5bb4497"],["/clash-free/index.html","dcd35e073d958279838818c3fad2b6fe"],["/clash-pro/index.html","a842379f09679164deb1549a1ae9e3a0"],["/clashvpn/index.html","66b176349643b39dbd7da84e0a6aadd0"],["/coder-blog-website/index.html","fc95f2bcb5e05660345733060a1500da"],["/coder-source/index.html","9edb04f7a4f491a45d5ca0cb2346d8a4"],["/coder-videos-website/index.html","6c0c996881ac8131dd914f6385b52bfd"],["/computer-book/index.html","17ac9db130c93591614ab59f240fab3c"],["/computer-censorship/index.html","962f8355f192e9e57fb863876e90e497"],["/computer-network01/index.html","36d8232898a47e4f36868c14b046ca36"],["/computer-network02/index.html","9369895a05ce58a8918e18b0791074bc"],["/css/main.css","bc32ad34ec4990d934c3c647bdb62f79"],["/database-Mysql/index.html","f924bfe0a937e53347d6e3e86bab4f0a"],["/eclipse-lombok/index.html","ee3b68f16af59bbbb64ca40086f35bf3"],["/freego/index.html","d705452b09b7da47bb66d4a407255abc"],["/fully-convolutional-networks-for-semantic-segmentation/index.html","363d9c7b5addb775977ce4a4804fff1a"],["/great-firewall/index.html","df7f1a44abd7abf76863a0f2f0914d3a"],["/halfrost/index.html","09a0eecebedc47803a8bf2ae253eeef4"],["/how-to-signup-chatgpt/index.html","4f5ba3826428a6847df0e97c29e64ffc"],["/how-to-use-Gemini/index.html","96b8cfec15be7867626e4839924a7bb7"],["/idea-continue/index.html","0de605163d487ab0ee5b7478145265a5"],["/index.html","8abd09360c606ece08456418c817a98f"],["/internet-dir/index.html","74c2527083bd73d94bdc50d0f3b226c0"],["/ios-open-internet/index.html","1dd770d82d6afe69e7f5ada59d61b1bc"],["/iphone-open-internet/index.html","706eda5bb6a437825e2a527e860887b3"],["/itext-makes-pdf-form/index.html","fe23d20760bb849f215a948097a270ed"],["/java-Set-Map/index.html","454d74320196a825589be6e2c3555761"],["/javaweb-server-error-codes/index.html","cc4cdcbb9373496d30a928b19c94a5bc"],["/javaweb-source-code/index.html","4d529366168acef58fda9765c6fcfb99"],["/js/lib/busuanzi.min.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/js/lib/lozad.min.js","47904d34a224931dd1b615c59a3dbe3b"],["/js/lib/prism/prism-coy.min.css","0ccad54d95845901ead59bfd3ecceb14"],["/js/lib/prism/prism-dark.min.css","a4711d2957d6605eb5682bdd228cf123"],["/js/lib/prism/prism-funky.min.css","efedcdccd7a9ab342d2d9cacd24920af"],["/js/lib/prism/prism-line-numbers.min.css","38e22e790c279bb56f9ec4b90a2a2d58"],["/js/lib/prism/prism-okaidia.min.css","5ac6f9de996fbec68aaa106dfb16e061"],["/js/lib/prism/prism-solarizedlight.min.css","ecc7e64d039873ffcf7fb27babdaeb5a"],["/js/lib/prism/prism-tomorrow.min.css","456af2a14ae4f5089939d5904ac40fe8"],["/js/lib/prism/prism-twilight.min.css","ebb5c355332a8cf9a1ce37a2a69d678f"],["/js/lib/prism/prism.min.css","a5234d614834658887cec6a9515890f8"],["/js/main.js","052d2b299d9c750afea8df0b802ab7c1"],["/keras+TensorBoard/index.html","4685d0a6810314cd27a6054504d7ce06"],["/keras-beginner-guide/index.html","2921351c00f10a7344352dba2ea4ce30"],["/kimiclaw/index.html","1fd2e423693b64d23f995aa914256aa2"],["/kmp-algorithms/index.html","41fa46e1c231d05e177ae0b653c6c5c7"],["/leetcode-Java/index.html","afb06fea2f2d3a7e63a93c5028f77cde"],["/links/index.html","72343734bfd8b0151e4392ef02a06cf3"],["/linux-java-opencv/index.html","55b00a112a3f3ca9ff2c1706460f3e93"],["/magic-internet/index.html","b0db72588cb9198b19001c6199601a73"],["/magic-vpn/index.html","bce8e86cfc2a75008df82f7fcf2f450a"],["/mingci/index.html","dff1718b0075dbbe0d3298636b861664"],["/mobile-vpn/index.html","9277aed974958460e0ad824e1fea67a8"],["/msb-source/index.html","8c5134f8b08ab76c8e445006c4c924a7"],["/online-BUG！/index.html","6b5f132b00116bb502f968638a883005"],["/open-app/index.html","5e22d2041a8f7fe4e6a174359ac0896e"],["/openclaw/index.html","8de1005b021f0f8ce4c1d2da94fab6e7"],["/openinternet/index.html","04b025f1d47abf8fd4d6161963af9929"],["/page/2/index.html","1ba09b0876a57929c7f11c8083317421"],["/page/3/index.html","b231bcffb1578661e3fb673de58e430c"],["/page/4/index.html","436a39bf6dc8cc7a94108092f17535dd"],["/page/5/index.html","4ac26a9b4175ba016474c1a5636a3ddd"],["/page/6/index.html","b6dfa5d023b3456cf58b82e5a43799e1"],["/page/7/index.html","4aaebc8bd50b9e21332ee291491eb4f5"],["/pandas-data-preprocessing/index.html","f76a7caf28f826525fba47ff07495d03"],["/phone-win-open-Internet/index.html","b8529635394919541eb351b95fd6f147"],["/popcorn/index.html","b7134bdf196815b7eab951f1a66eddbe"],["/protocols/index.html","f7ec3aae18df83747d1ac15b21e9dbf9"],["/python-Blog/index.html","cd1d9f1ed78b2141a545355d8b66ebec"],["/python-yeild/index.html","c2be591de149acfce33c2ce060c7e190"],["/python爬虫教程/index.html","a5e125a00a0a987d63051e73f9bef9d6"],["/route/index.html","52213220cf5eb7497a5f9212c8a46e12"],["/search-help/index.html","b37e87ddf4fdb295bf91b4551cd45949"],["/software-copyright/index.html","3f1d0e2f18e9c78b5ab4d96e82a7897d"],["/sw-register.js","00f38a3ab4aa99d2540e52ff08f6962b"],["/tags/AI/index.html","0f830f254ac2aa173980c6c4d665deec"],["/tags/API/index.html","e5180926c188f4fb779c83b9d012e42d"],["/tags/C-图书/index.html","b6cb53ed712154a133b9a984bf0b4930"],["/tags/C/index.html","84bfa0058cee836e943aec58ecd0a13c"],["/tags/CNN/index.html","9e39f6a250614f13768f9a8f553821bc"],["/tags/Chrome/index.html","11eaa27534096fc071af732b62f5671b"],["/tags/C✙✙/index.html","3bb9b86e14b656c4718652cf925d20bd"],["/tags/C语言/index.html","c7acd87f644e5660e4445e8d71ce7b36"],["/tags/C语言图书/index.html","798242fa4dea68172205f7f897e78def"],["/tags/DSN/index.html","81b686aa69605e0a41c310497ca8c28e"],["/tags/Dll/index.html","b6c2a9c79d8a6abd5801f9ef934046da"],["/tags/ECCV/index.html","4e835bb601dd9a06d78b47061c5ff3c3"],["/tags/EM算法/index.html","db069a9c7f0d063d4b3179d638a3dfc3"],["/tags/Eolink/index.html","04b429753fb6a06eef9e9429643a7c9f"],["/tags/Gitee/index.html","ee603a2110f6962b2a706fc92a1190b5"],["/tags/Google/index.html","efc90860c82151752c3bff2a2adb194f"],["/tags/Go语言/index.html","634b546c5439f0b052a91e1ad76f24e0"],["/tags/Graph/index.html","8d1219d49f7c965a7adf90b70e7d1440"],["/tags/HTTPS/index.html","12c230497b4a46f01f237311eb9fa622"],["/tags/ITK/index.html","eb235b2edc20558c3477db4d7e9feab8"],["/tags/ItkVtkGlue/index.html","2b5b540e2383df2252b10eac5e191ed8"],["/tags/JMM/index.html","5416939eda39f36365c557dce590877a"],["/tags/JVM/index.html","99ff2ec68fa2c78bc594a4a34a807d7e"],["/tags/Java/index.html","78f94232d03e4673713bee56c8396967"],["/tags/Java图书/index.html","fa250638ee7e1aecd506d1e0806f5534"],["/tags/Kaggle/index.html","b5bf90db7c1ee89c282b265245dcd89c"],["/tags/Keras/index.html","74f62e95e29e03f1fb1d15e0c748ed18"],["/tags/Linux/index.html","e83e94ac7e71405c0bc6724ba82d2a13"],["/tags/Linux图书/index.html","a74471a09d7c63df680f80322bcc38ac"],["/tags/MEPP/index.html","9642bf75391d2d4f4507d3c74ad9b88b"],["/tags/Map/index.html","a482a3eeac6aeef3864e1485d4b32f16"],["/tags/Matlab/index.html","6f247d726109d6863d4872cd05750e34"],["/tags/MongoDB/index.html","ec21ca81b6a41a5f52b0fc1377120b38"],["/tags/MySQL/index.html","5738224bd7a6e9ba92cc7369cf2c1dc1"],["/tags/OpenClaw/index.html","200da6e0afca0c9b43b292fe09433f2c"],["/tags/Parzen窗/index.html","cc74e21bdc508cb67ab7d7df018c1041"],["/tags/PicGo/index.html","78918576d3e1d1f9aeb402a476ce1220"],["/tags/Python/index.html","fbb65414b9845b8f1538ca9f649f05ce"],["/tags/Python图书/index.html","69394d994d606734a9f90b077d68d96a"],["/tags/SPHARM-PDM/index.html","45eda7e23ea2d9eb9a95cc190d6c7725"],["/tags/SVM/index.html","9c69feafa6c6f9dd2a2ceaf8575ad70d"],["/tags/Seata/index.html","53313b9162a257c76eba28a436936ecf"],["/tags/Servlet/index.html","5aeef4444f1901e2049bad26925ffd8c"],["/tags/Sping/index.html","34707759202e212b3427c5ce6d67044e"],["/tags/Struts/index.html","9deea83576cc8a904cc649408a73df15"],["/tags/TCP-IP/index.html","dafe5a26d0700c867edc15212760603b"],["/tags/Ubuntu/index.html","0fadd5aedfa97515032c066180d7d7c3"],["/tags/Unet/index.html","ccee233537edbb4582d7eeec4a8e6837"],["/tags/VPN/index.html","2051c208737def210189da54b8e553ae"],["/tags/VS/index.html","70de3068396da4c43a21f181c1c602ff"],["/tags/VTK/index.html","6732b04c1946acd51f840149be57f711"],["/tags/Vertx/index.html","117cca405672552cc33e22b5b7464c2d"],["/tags/Windows/index.html","73640e09c544112512be21cb9ea606e6"],["/tags/edit/index.html","1433b2edac6d85c0cba9f28426ab6777"],["/tags/hibernate/index.html","96320f494786cc829c0a9cf88af0aa95"],["/tags/index.html","e79f36bd10057b8aab7b0f6f5451c24b"],["/tags/itext/index.html","caa5ea3f82a3e341ded99a1ab64c0af1"],["/tags/jdk/index.html","ef4812be6a33bce4b50f812e2769355e"],["/tags/kmp/index.html","0af12656d114bb37f44bf99e55c02165"],["/tags/k最近邻估计/index.html","a7d30f84296103ad24241ffa4d2deea0"],["/tags/lombok/index.html","1a02024192d0a7743080b7ebbb078527"],["/tags/offer/index.html","11a07abe8294638cab7a0de06e5abf3d"],["/tags/opencv/index.html","3dd7e67d9e60bfcf61b098e43f39c1e4"],["/tags/pandas/index.html","713b53d04e625eb3f84e0cd5f94044f0"],["/tags/string/index.html","4bf4e0e87125762c6d8cf67828cbff33"],["/tags/vim/index.html","bfb3619e415bac574d953baacc57e517"],["/tags/vtkPolyData/index.html","29b27c3bfee0598e7c8bf6eb69c832d7"],["/tags/web/index.html","bf03e64c1e80c79236412e3f1431857b"],["/tags/xshell/index.html","a38dd0999f17f898f39658ff54769049"],["/tags/yeild/index.html","9a84d74796a65ec65df5bbc2f0fea6f3"],["/tags/互联网/index.html","98e9c55e097013c00f20a93e3bdd5ad3"],["/tags/人工智能/index.html","d8a97da6a9b0ccfd4733b856f1275013"],["/tags/体绘制/index.html","abc2578aed2e4eafa0b09c450fcd9788"],["/tags/全卷积网络/index.html","e926e7863046d5cb6f50f59331b91958"],["/tags/公众号/index.html","c1492c90914a6bbef373e8ff4d5e0304"],["/tags/内存模型/index.html","43b32ff67b30248b2f960920922fe607"],["/tags/内推/index.html","ed5070fac65c7f5ec85ab3e6498d42a9"],["/tags/函数/index.html","31f37b35b62fede552943a5e73018c43"],["/tags/分布式/index.html","f4a2dccb4611f055af262b7e88bbb438"],["/tags/加密/index.html","47ed1cf09e776de0aa2cca1c985d72c8"],["/tags/医疗图像/index.html","8fddde18e9b80fe74dec7280c2e65867"],["/tags/博客/index.html","0a5afcc0cf262e6627bd9dfdd3b2296d"],["/tags/图像数据/index.html","a890fb49cdc92421adea514e5a731b1a"],["/tags/图谱分割/index.html","2f41db8218cbe7ddcb7e57b400b6e812"],["/tags/垃圾回收/index.html","efde335dcb7c057dbd9439a837049624"],["/tags/多线程/index.html","38ca30dd199d4f04804bb7d4a4a66d21"],["/tags/字符串/index.html","f6e4e8ccb73f0e81f1cdda20bd542a46"],["/tags/小龙虾/index.html","6a8e111065368f315866718b139ee542"],["/tags/工具/index.html","8ab4734e7e58457e067f465e58e69edf"],["/tags/弹性形变/index.html","0b82ec1fa15c47a0ee45e7aff296999d"],["/tags/排序/index.html","013581196c027a7dabc7a8040a25c828"],["/tags/搜狗/index.html","d40f0c5da57ffd6dd5b93d8a8223ad10"],["/tags/操作系统/index.html","0fccfc6f6543082c78522d2d592bc599"],["/tags/数据库/index.html","2b131754812181f7b8b860935adde521"],["/tags/数据类型/index.html","1886fbe7899e837699cac37036921197"],["/tags/数据结构/index.html","2481eed9b38dd40a8a76834f1fdaf94e"],["/tags/最大似然/index.html","f990825de9c61d6cc149065efed90ffa"],["/tags/机器学习/index.html","070857600cb2f9335182675d06d34ca6"],["/tags/树/index.html","f95196a38051af02095eda6421823c7d"],["/tags/框架/index.html","61ff7e8026dc691266952373f81ac555"],["/tags/求职/index.html","e76ac6f3efe5192296c78db79804afbc"],["/tags/汇编语言/index.html","42b1c3ba70027fb52aa3eb00776ebfe6"],["/tags/深度学习/index.html","740611db00122bdb5ac097da9badd1c8"],["/tags/深度监督网络/index.html","7076bc319fbc45b690bea7b082edf9cf"],["/tags/爬虫/index.html","71ee55bcf7003927ef7f57f0f08f8aa2"],["/tags/电子书下载/index.html","7a843b832d4a093bc9d92bcb911481b9"],["/tags/科学上网/index.html","bca7ac3736e5c4b1dc15ce5fd9fafcb6"],["/tags/程序员/index.html","1923b7a7edfcaa9852c6479b06f476c1"],["/tags/程序员面试/index.html","6525338360278ff54124ef64dc861583"],["/tags/简历/index.html","3788234e2abd9cecb8942bdec9c30d29"],["/tags/算法/index.html","16adc8b0100ccdd8c1a286cc5c01ce7d"],["/tags/线程/index.html","06296e19391c984e9d675e3a113b758b"],["/tags/经验/index.html","2ea8a1e7556504dd62ebfd5d3fc93b25"],["/tags/结构学习/index.html","80bcfedcf05273f6abb2613725261c8e"],["/tags/编程/index.html","490fd301f17356e3b25c561421e2d15c"],["/tags/网站/index.html","249aa1a497d48ab3f639bff160aa3932"],["/tags/网络/index.html","f64deda3b69bb8980a92c3cc040a454d"],["/tags/网络原理/index.html","a4cfac1a3d578ba65deba294173eeb6e"],["/tags/翻墙/index.html","3cfd4fc6fdc2bb50e268aaeca0d94b04"],["/tags/肝脏分割/index.html","ccabbd14e190f9ce03e06c81b23a1a0a"],["/tags/计算机/index.html","5b6fb9862d10a4dcbc4b19f5ce70d2b1"],["/tags/计算机专业/index.html","fb3abd70e8fd454c3f11c6307cf5a986"],["/tags/计算机网络/index.html","8e6429cc33f1ef6a6dd7b89ed48c4374"],["/tags/设计模式/index.html","d6e5136947a63c00fc1981b6c0e5ad3c"],["/tags/贝叶斯/index.html","1aeee02105e125c4e2bf09ff85340b3a"],["/tags/迁移学习/index.html","91d2f97731891c6064d6b31d28ab3d19"],["/tags/面试/index.html","93958e00e35882901639a0f73ea43057"],["/the-meaning-of-reading/index.html","f55e9c718440368a15101ab5a0eddf03"],["/the-way-of-pragram/index.html","ec2bdccc4932004993029029bdeacdc4"],["/troubleshooting/index.html","75db219725fc23aa6e5f28fed6ea51bc"],["/untiypro XL安装/index.html","465ac30b22bcd86cd5ccac9d0a5dd513"],["/video-websites/index.html","ba58e30f9d2f7ffb2b4a1d483fad2d0b"],["/waibao/index.html","18e87df4f1b2ec0a78da65b71d0c4963"],["/wechat-fans/index.html","854288871d2ec20ca9002d74d86bc3bb"],["/window-run-VTK/index.html","ff5ce48a6d32744e96f7bb6a8fcc4563"],["/windows-science-internet/index.html","2e7c66d648ad6f2577455aca2b065164"],["/xshell-connect-Linux/index.html","67bcb1ffb2946d6eee524084eb36cf69"],["/yzhx-vpn/index.html","47672dee559a727bf0ae57419a5c0448"],["/‌Accessing-the-Open-Internet/index.html","88227ec36133e91c735328283d573821"],["/《Java高并发编程详解》，去大厂必看！/index.html","34f178749eb397b89cda81742330f4f2"],["/一分钟没了 1.5W 。。。/index.html","721c15ebe9caf81fa4afc4e9486d9a90"],["/一条高产爆款内容生产线/index.html","1bb05fe9bfbf3bb2f11eb552878aa3a2"],["/为高考学子推荐的六个就业前景广阔的专业/index.html","a2e6bc45fea4b02938e16a4a8576e22e"],["/互联网赚钱机器---社群/index.html","ba75bcf68f4cb5b816862fccadb76f47"],["/你们常用的工作方法和思考方式是什么？/index.html","d254f9290a38910c9e8051eb45b777e4"],["/关于环境配置的一些事/index.html","1a48821e6328f729f834e2a7d9dcc02e"],["/准备了19w！搞事/index.html","9b17e7a3b48c46241a634182fa32f1b1"],["/几个很重要的感悟/index.html","35b11044de7aac48f356ece2f8208abc"],["/分割ROI篇/index.html","afc75770f4ade8ee35487643a61aed73"],["/分割精度说明/index.html","c6ee0c81e0e2bff57be63dc73f7b8f53"],["/分块程序执行/index.html","1c5fea5833b3a5a79c1020c7a48364bf"],["/加班公司黑名单！！！/index.html","61900368754b12d7346fa982f6f1f2a3"],["/卧槽，上知乎热搜了！/index.html","0305fb775c4ef229f15bafd9d49fc8bb"],["/卧槽，我的小破站爆了！/index.html","3e8253bf2693c025e5c8c69344e3324b"],["/卧槽，我被盗版了/index.html","6b5b789c82fccd86f03e14bcf50b61d0"],["/卧槽，还有985大学在大一上C语言课？？/index.html","4dd701d03d5cc67f362efb5451d02cd0"],["/历年微软面试中出现的leetcode算法题/index.html","05003ef2bae15cc808327428aec5ffed"],["/去特斯拉试车了/index.html","e38d8d588430218277ea849b3ec6e91d"],["/吃苦的三种境界/index.html","2dbc5d52718005c92b76597eb20a42b2"],["/哪本书适合推荐给 Java 初学者？/index.html","da935234b0da8aa65dd1b059c18626ea"],["/哪本入门级的学习数据库的书最值得推荐？/index.html","96f3e343f404bece8733def90df9af42"],["/国内外常用的AIGC模型/index.html","c7879dbd15ce5f3073274ae960d65125"],["/国庆假期/index.html","4750b0b20b386694bf348ecdea797b18"],["/图谱程序字典/index.html","7aeb3cc1d26a710e7d4e8595550fbd29"],["/图谱训练与分割/index.html","276047a35f3f4a7e25c82ffb2a298087"],["/宣布一件大事/index.html","72cae0b2887c742f9d857dc0d75e5d98"],["/小鹏P7i试驾体验/index.html","9c2f9df88c90460907263dad53a48a78"],["/微信PC版3.3.0内测更新，电脑可以刷朋友圈了/index.html","1e2b3653f22c960120c51dc48455e151"],["/怎么更快的赚钱？/index.html","4ed3a916eea224f4875c143444a9cf44"],["/我毕业了/index.html","88b8f0b41d1f003ce0d7e876c05def34"],["/我！真！的！找到了！爱上学习！的方法！/index.html","32096a35dcc44c835558235b5a9e71b2"],["/户口的意义/index.html","40c47eb7bcb9fbc08530fa1a2eb3dda2"],["/推荐两本经典算法书/index.html","76859c2b7216c83d0545baa1acb590d6"],["/推荐几个在线学习SQL的网站！/index.html","a1f6abeff4cb0377123e5c8403142f60"],["/搞了一个程序员成长晋级社群！/index.html","eb0923da3d8b25ba6a9651f0d013d330"],["/摘抄/index.html","17eda8a68d0dfc059d09b0869e488740"],["/暴跌30心态崩了/index.html","be4f9dd7ca71a3ca1ac01407d64d9071"],["/最近很火的ChatGPT到底该怎么玩？/index.html","ea0a29f616af3de62376160c362dcd10"],["/有哪些好看的日历可以买？/index.html","a42b3a59dbc2efb9485c497686240582"],["/服务器有啥用/index.html","2b4828863984f39201490d2ac192295a"],["/来长沙了！/index.html","5189ac68a036903b528efde5f5668286"],["/校招污点公司名单/index.html","a3de52c3f39fb991f9d2bd0ed94cca2b"],["/梭哈200多万/index.html","64f61b18de5974aa48fdac64f5039803"],["/梯形图入门/index.html","7ca12a7830aa88dff04f1d575c86fb98"],["/橙心优选，凉凉了！/index.html","81442b0d7f772cb4721c369a39a1e5b8"],["/比亚迪汉试驾体验/index.html","a1a7bb700c1332029201f69124df5579"],["/清华转学成电，真的牛逼！/index.html","29d2df182ec0202c21d47cb5ddad0200"],["/滴滴程序员被亲戚鄙视：年薪八十万还不如二本教书的/index.html","b64d80cdb255335801d47e01f56e9243"],["/社群！/index.html","a0db3cbf8d209def2e2fb81a21943f1b"],["/科学上网之VPN篇/index.html","cfe138a4cc13e9c99d218810696be41d"],["/程序员必备的几个技能！看完你也是大神/index.html","1d2b82cb76d87f8854e329bc85364b14"],["/程序员绕不去的槛，Linux！！！/index.html","e564a1b2498ac3f28fb321a50504c321"],["/蔚来ET5试驾体验/index.html","d6d5744fb7d231182cd3b242536d410a"],["/蔚来，牛逼！/index.html","3c79121356e657f8076fbc4c60142fb4"],["/被录取了/index.html","406b99cb72e200918848ba7dcb337f17"],["/被找事了！/index.html","fb75aec5a70e0cbec02ed9fe76f60184"],["/被拉黑了。。。/index.html","82af341f2b272f9f98d5c0cde16c1e8f"],["/被车撞了！/index.html","eb00c4937f985bbf93a99534e0295c9a"],["/该如何选购固态硬盘？/index.html","7306d3e52a709fae75926e7f9d1d3409"],["/这本书一定要看！/index.html","d720b0712f801b033ff714724e7b1a67"],["/选Java还是C++？/index.html","22b7061fbd10a2be05c1a87cb77abe7e"],["/那些让你起飞的计算机基础知识/index.html","51be2b505b6993d3b84677fcc8564269"],["/靠这几本算法书，成功拿下大厂offer！/index.html","6b5661331d97f3d94fce784b0eb442ff"]];
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
