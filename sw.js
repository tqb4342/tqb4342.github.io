/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/0010-city/index.html","809d9558cd6b9a089ecd72acc2247563"],["/10-algorithm-book/index.html","5d0cbd391a23353557f6bf9b41474328"],["/10-website/index.html","a6be9016d5774b848c593fdd22646991"],["/100万的小目标/index.html","1932fc8085a500e1a8ad950863c96e12"],["/10w+YYDS！/index.html","4121358c5a21010989a3d719a5ef8905"],["/12-technical-tutorial-sites/index.html","2011142806aecd2efbb4760d360006bc"],["/2 6 岁 了/index.html","92d625d2a4091a2b4fa21d39168bc4a8"],["/200万，啪，没了。。。。/index.html","854ccd4a658ffcb162dcc442af8b2701"],["/2018ECCV-Paper-DL/index.html","aa4f65d8b41928c5b3b3449cfdf1ac70"],["/2021年固态硬盘选购最新攻略（小白避坑指南）/index.html","15336b0544b7d67c5f38227c623b8d6e"],["/2021机械键盘推荐/index.html","7ad5b497154452067d1b2527c7f9bc3c"],["/2025-07-15/index.html","2a189958cff4f5ca6f8907d3b9487392"],["/27岁了/index.html","4bf35d7c8c0e632f0f3cd955b53827e1"],["/3D-Convolutional-Neural-Networks-for-Human-Action-Recognition/index.html","3c4888f0e96b2cb31fa501f504ac6e38"],["/3D-Deeply-Supervised-Network-for-Automatic-Liver-Segmentation-from-CT-Volumes/index.html","c5b07f31d277fe056a81e971dc5bf6d1"],["/3D-Unet-Experiment-notes/index.html","dfa4a264c6f7896a6c2d6fbbde794385"],["/4-Software/index.html","144eada9e46076e9a3b2f5f408dd0eaa"],["/6-website/index.html","e6f1ae2a0c4e8f75425cc9362dda2034"],["/7-terminal-tools/index.html","f2dc5b8497ce26a7bbdb5b3419689b02"],["/AIGC中典型的深度学习网络/index.html","2f936cdc4be4835769bad215c7f9e87f"],["/Agency-model/index.html","378529313496cc6a651751af59702a9b"],["/Algorithm-brush-notes/index.html","0d517b7d5ae8fd1f3d2d13870613f8cb"],["/Ali-recruits/index.html","de85d113c305e0bdd6dfb7d16e16f5fb"],["/Android-open-internet/index.html","d083ea742cbe26dba1df29d5a4e83d61"],["/Appearance-mode/index.html","63126204b0ba71bdda4f00d043171e11"],["/Backtracking/index.html","e43787222957fe2d2b2da5c90bc24523"],["/Baidu-Sao-operation/index.html","4a07f95a20771a591ec451ebdee7bf21"],["/Batch-Normalization/index.html","645af6547d5125d18604dee837c24272"],["/Best-AI-tools/index.html","7c16e8e0bcce6c6114e8a63912f94c86"],["/Bias-and-Variance/index.html","b00999e81b1ad35ef56eb5a6e848c487"],["/Binary-tree-traversal/index.html","182e014aae872982d639fa023e2eface"],["/Branch-and-bound/index.html","09c20132379485a79eda79667dbb6dc6"],["/Buying-computer-for-the-first-time/index.html","5e6862a995aada35155cb6f409628eef"],["/B站向北邮道歉！/index.html","7c7f2cfa7262656d673148cbe116647a"],["/C++-string-function/index.html","74d69a03ec3194abebcff21825606620"],["/C-Java-DevelopTools/index.html","8b0d5c7da58c9fa30fae89669e4f1450"],["/CS-Classic-Books/index.html","f048994f61bd3b20e0d49efd256d38c6"],["/CS-network/index.html","2fcbe27fbe69a02c8419849eb73daa33"],["/CSBook001/index.html","79d2a2685dedf6f221b85908b0c0544d"],["/CSBook002/index.html","a18841c9032a8c820ab7d22aa0434342"],["/CSBook003/index.html","24f5962596e09359491dd13bca135e29"],["/CSBook004/index.html","79305c1405215f15e44a5b135998b0fb"],["/CSBook005/index.html","4e2d5d1991fe75e37399e045f3a782a1"],["/CSBook006/index.html","2f3f116a9609a71b662aa4dc61fbb22e"],["/CSBook007/index.html","7753fd260fbaae3dbe3a77a62ad0cae1"],["/CSBook008/index.html","c9db13f8de9b33d10c7520d614d1b6f5"],["/CSBook009/index.html","150be785778128d8eba6193d97ae98a9"],["/CSBook010/index.html","d28040f38e59309af19213d1612def3e"],["/CSBook011/index.html","be5dd537b9d97d0a92e81cc875c3e915"],["/CSBook012/index.html","fca2fd65f3a2aa75bc058f7ca0c8f1c8"],["/Changsha-really-fragrant/index.html","0381ea2a88222cb99ac8094b56ae6c63"],["/ChatGPT-VPN/index.html","c57a2204e8cfffe5372e2a118b888ac1"],["/ChatGPT/index.html","5ea83c2301af08bec00f728c9fb2e303"],["/ChatGPT！王炸级更新！！！/index.html","515181f379aadb35cc9de9b88c12ff45"],["/Chrome-crx/index.html","406908e2c49dfa62a2ea94d91409885e"],["/Computer-Classic-Books/index.html","1f258221a03a3b75c77022b6a9cefae7"],["/Computer-for-another-major/index.html","8f0a0f534fa2faddbd596142b8f85bd3"],["/Conditional-confrontation-network/index.html","366d185e542a2572577fcc9187b04882"],["/DNN/index.html","498f67c09b939cd59f88b7823fc5edf3"],["/DSN-segmentation-liver-experiment-summary/index.html","59b35397a961feb7910ccda48e16efdc"],["/Data-enhancement-elastic-deformation/index.html","ca8a7a419a7aaefb1d9d8b4274612dfe"],["/Decorative-pattern/index.html","2abe862094e6990695969a485afa6bf5"],["/Deep-Learning/index.html","bcf8464a047baf69910bbc3e16563915"],["/Deep-learning-and-medical-image-analysis/index.html","39eb64677649e481b5cf7dca505ada55"],["/Deeply-Supervised-Nets/index.html","98343f904a1c980dfec1dc004ae534a6"],["/Deformation-model-based-sparse-representation/index.html","b52e9bb203ff5e6b7226b7b07fabb791"],["/Discriminative-and-Generative-model/index.html","28f557324b369ab664d250bc7e016c5c"],["/Distributed-transaction/index.html","9937ed535b6937721099c2f9ee866321"],["/Divide-and-conquer-algorithm/index.html","8f1e5c817db722b277986786d70f5235"],["/Dll/index.html","00dd98b05d95b361ebe2242788e70823"],["/Dynamic-programming-algorithm/index.html","a8d47c7702d7149abe600c0338b64dd9"],["/E-book-download-commonly-used-by-programmers/index.html","e0f2071811a8b37505450db74149bf9d"],["/EditPlus软件的安装、激活和配置过程分享/index.html","738046113c98fd7ee435ec24a2e7f969"],["/Eight-sorting-algorithms/index.html","23b9e343f1908c4d40d1415def0dbd2b"],["/Encryption-Algorithm/index.html","0a76ecf26bec3334f5fb03d6e00b901f"],["/Eolink/index.html","49a363957283bd0b372eb670b5bb4a34"],["/Factory-and-strategy-mode/index.html","c6fc7d38851b96be620ce9a7e6e2a928"],["/Foreign-technology-blog-community/index.html","c1850f31271343ea6f5ec4dcbde605c7"],["/Functional-model/index.html","8e29f1cde1cca8ff9828b5b209c5b58f"],["/Fund-type/index.html","9880ac2c1ae6ac856bdfe39c1c856c57"],["/GPU-medical-image-processing/index.html","ea8552499d32e4ceb1d6731692cc90f7"],["/Generative-Model-of-Unsupervised-Learning/index.html","12249b7efdb6a8bbf947e1526f152ad1"],["/Git-Learning/index.html","d73d45633375d4c121e60a9f7d8f687b"],["/GitHub-2FA/index.html","d26883d16fce7ab3f6fbeca490a58eb5"],["/GitHub万赞，程序员必看操作系统总结！/index.html","d714207583a6589d052d56e97389f663"],["/Golang-book-recommend/index.html","85ff8a6a4fb5b21a8bead968ef3bb54b"],["/Golang-learning/index.html","e99333084cb20c65646de3956783e8a4"],["/Gradient-descent-optimization/index.html","864aa2d8802a55ed3b53a9f5ca70b479"],["/Greedy-Algorithm/index.html","7ad9c6d42dcfaaf50178982fc8c578bf"],["/HK-bank/index.html","83b2d3a0ec36532fc0e5de239c850384"],["/Head-to-head/index.html","3eb6fe6f6b06b0a75623da1d41230107"],["/HistCite-Pro/index.html","f7e28c910c3116e74ce7d8a5b27262f8"],["/How-does-the-program-run/index.html","a4113d9f1d3e3a774c26168e942c839a"],["/How-to-judge-whether-technologyisreliable/index.html","05da03a8d6f627a7eefe21ff6f30e249"],["/How-to-learn-design-patterns/index.html","7e2ed1d0740d6717129347d1701281ac"],["/How-to-learn-design-patterns？/index.html","10fcb07604bee2fb8fa33f12c04dfc78"],["/How-to-teach-yourself-programming/index.html","bca8c993045ebccd40abe043ce4ba31a"],["/How2learn-Python？/index.html","c6aa11f5569bde40b5fff5efa676fce9"],["/IDEA-shortcut-key/index.html","2f31eac1b57c598cf74bbc82ba87d1e6"],["/IT-interview-basic/index.html","080eb69209d6dea3e63959b56ddc5871"],["/ITK-VS-install/index.html","8f74544b815af780fa302cb4add5427a"],["/ITK-VTK-ItkVtkGlue/index.html","bb8c236912bd5b3709f2caf2a1f42f13"],["/Image-processing-plus-noise/index.html","e2b1e8514015aec664934dc64bcd1367"],["/Inception-Going-Deeper-with-Convolution/index.html","287deacb75df81f76367c3b5567b6d97"],["/Java-GC/index.html","dca22c4ae73507c44a28a1dfceb230c4"],["/Java-Servlet/index.html","9184939588282e0c483e63482018dd1e"],["/Java-array-and-collection-sorting/index.html","04dbc5dc01a9f383027dccc4fa341fff"],["/Java-development-tools/index.html","8fe24b0bea943f73d3d65a5b201a1849"],["/Java-eight-data-types/index.html","80dcdd9189ec589fcb03a37274b3fcbe"],["/Java-interview01/index.html","03bd597f03880b7dcf1ad3baa431debe"],["/Java-interview02/index.html","9a5c8a44abd475150c76574cdab8359c"],["/Java-interview03/index.html","6c2ba48cc581bb36979ab76c09ac2e2b"],["/Java-learing-map/index.html","31a03e955f52c8fccf77a66c99d80758"],["/Java-learning-route-map/index.html","42aeae91d800134873ddcbf351bbb91c"],["/Java-memory-area/index.html","5b28711c9f69f1e1aa30f68442f8e1af"],["/Java-memory-model/index.html","3de0096ec8ff12380ca146ce2a6636f2"],["/Java-multithreaded-learning/index.html","b9ab07538d44eab8aabd78b2836f8bb5"],["/Java-project/index.html","681e726a3f4e27f263a7fe6698c85ed8"],["/JavaWeb-Chinese-Garbled/index.html","def92e15a1eea929edc5fa81a4167609"],["/Java还是C++？/index.html","66cea88302d8c66a3f58602b85cecc55"],["/Kaggle5-step-guide/index.html","1e51bac525c0ee7be1e287c449ed5625"],["/Knowledge-points-of-Java-garbage-collection/index.html","e4df302972e5cf2f42c021137cfd85a2"],["/Layoffs-and-Hiring/index.html","943f1dba3a5c8379515e0b7db28a97ad"],["/Linear-regression-of-machine-learning/index.html","ca76aa34576dd58fbc5abe59aaf993ef"],["/Linux-Compile-C/index.html","5b7f326c2834ecfe61d6c632372840e3"],["/Linux-ITK/index.html","20a29d7380f620fcf80112345c21c6f4"],["/Liver-segmentation-of-sparse-components/index.html","103a1df1e18267f6197ae594854bf72e"],["/ML-EBook-paper/index.html","c28adc2c7d1c02da74ba8907ea337fba"],["/Map-uses-multiple-maps/index.html","801c2db16e82e286c06ef5c2810df336"],["/Matlab-Graph-cut/index.html","50e2b3c814c2f1e3bb4fe0314f2f10b9"],["/Maximum-Likelihood-to-EM-algorithm/index.html","a997b8d2a63737115a058773de1bafda"],["/Mean filter and median filter denoising/index.html","f2648225672be46c79acc957cac007eb"],["/Medical-Data-for-Machine-Learning/index.html","c50d7e15fceeba5db82765356828f23e"],["/Medical-image-analysis-deep-learning/index.html","cb23ac522e86a835816992374a8a2382"],["/Medical-scan-image-processing/index.html","69aae5968abc6ce3f7d6c60a826cf9e1"],["/Merge-sort-algorithm/index.html","2d9cdda9809a9fa4867a0c382b058d29"],["/Monthly-income-2W/index.html","94d81f5848386390ea80b7c56478b9e6"],["/Mysql-database/index.html","fbecf1fa8aa93922e5d1088c7e477e01"],["/Neighbor-Embedding/index.html","90956aa98dec015f71d6c63a7c284587"],["/Neighborhood-approximate-random-forest/index.html","8d4734a80faeced780561e60a6da3b6e"],["/Net-and-official-documents/index.html","3a052cf651052902a7e5efb470003753"],["/Netflix-VPN/index.html","2467e89d4ac22966cf1c8bb23e22b04a"],["/Network-principle/index.html","93a741032f272bd0a8e0a4d0a1ae6b30"],["/New-Hong-Kong-stocks/index.html","11575f12ff7653be04f26f6fe1ce6f7e"],["/Nice-to-meet-you/index.html","9d84ee81a56492129b289b4910192747"],["/OS-processes-threads/index.html","490baeec066f5c4588a30a3eaf77705c"],["/OS-run-environment/index.html","80818fa98abbb1cbd93d8ae2564579b7"],["/Open-Internet/index.html","55d33474212704a943ce3410f5b29927"],["/Open-Internet2/index.html","d0dfcc1f72a8e6f5c0bd59c2d1c39474"],["/Open-source-community-and-rewriting-website/index.html","86289526b44948a9dc2558e13038d78f"],["/Panoramic-image-stitching-based-on-SIFT-features/index.html","10b880207f6349a1e1952f4fc7e65970"],["/Parzen-and-KNE/index.html","cb12793891fde1ba614d6330a0095d3d"],["/Personal-technology-blog-site/index.html","8c2940fbb9d40e7ec27c070de56f0746"],["/PicGo-Gitee/index.html","91a78396e8a9ea09726d7070eed63c2a"],["/Programmer-treasure-chest/index.html","dc3e5dc0ddb11b4845aeb59937b7090b"],["/Prototype-mode/index.html","075f364d9f0a44717706a8ebb9609a7c"],["/Python-base/index.html","307db5e4805701385d55d05e5c4a0b94"],["/Python-crawler/index.html","58c78db99c56fc3dc9fbc302a49ffe55"],["/Resume-revision-suggestions/index.html","2ae36e817642417dc125a9604449bdce"],["/SEO01/index.html","7594b04c3816cd7a3e8ea152f694b67a"],["/SEO02/index.html","3039868f86e40481095cb488c9819b2b"],["/SPHARMPDM-MEPP/index.html","20cbbe1d9cdffcc8fd30e772c56a897b"],["/SVM/index.html","b32faa358fe3ba9eb296685c9877e3c3"],["/Semi-supervised-learning/index.html","87790314273865bd392011cc3e69dc48"],["/Sequential-model/index.html","0d53ccc98c6f39b59991d9a6fc245c31"],["/Shape-Based-Human-Detection-and-Segmentation-via-Hierarchical-Part-TemplateMatching/index.html","46e22bd4c74f07ba4a3c913881a655aa"],["/Spring-basics/index.html","6250f1a46ee7315c84ccd07d40372fd9"],["/Spring-integrates-hibernate-Struts/index.html","3f9f2d0a21af07bd36d37d66b3fac95d"],["/Structure-learning/index.html","3b4888d9149107d5f50ec3f0f2745be1"],["/Suggestions-for-self-study-of-computers/index.html","ec2fcb4832863a128fb99b844615f2c1"],["/Summaryof-HongKongStock-Account-Opening-Links/index.html","703e5277faa0ecc68ba4460c3ac7db1f"],["/TCPIP-detailed/index.html","4f090b4778db89715b41676d22c34b69"],["/Telegram-VPN/index.html","c46281e56e6fc13aec92ddf9418b5d2f"],["/The-essence-of-shopping-festival/index.html","84772086b0533b0288bae7b170e37f8c"],["/The-most-important-investment-in-life/index.html","0f6d5b3868e6d90027a95abacf7480d9"],["/The-most-successful-nvestment/index.html","1862a7f7bf440686dc59218129ce1dd3"],["/Transfer-Learning/index.html","cc514f92f872c764a41071f50218ef9c"],["/Transfer-to-computer-major/index.html","7ba0826ba5d37197c1f763d4ace4cae7"],["/UNet-Convolutional-Networks-for-Biomedical-Image-Segmentation/index.html","861a19cfeb37f6f4543a18845dbaf95a"],["/Ubuntu-install-sougou/index.html","e5bf83e1c05c5a4f929e0ffb3d40b06f"],["/Understanding-of-paying-for-knowledge/index.html","6d2ba481e23be101525c2ec0fa34e78d"],["/Unsupervised-Learning-Linear-Dimension-Reduction/index.html","13474d821f34caf69b4e18d51d15fb4a"],["/VPN2025/index.html","aed358d1b9cb9f769357cd341f4bed81"],["/VTK01/index.html","71a8d54cd955b3222e250e0dc590dfed"],["/VTK02/index.html","3be90a976ece7ebb2840336187958639"],["/VTK03/index.html","6556021552fc43659706376e6fa93ae5"],["/VTKRead-write/index.html","1bc8f51321b0369ce5cbc96e50467216"],["/We-are-all-good-kids/index.html","2efef0e010d8e94797d8ace0153e2673"],["/WeChat-80/index.html","e329f7d94d08401903f00c1fde5d83a4"],["/WeChat-red-envelope-cover/index.html","e2b40ac262ade6566f3a543a2a6da49a"],["/What-is-crawler/index.html","1278d0b5102fb01ae29ab34f70fbb4f2"],["/Win-OpenInternet/index.html","9063fe228c4ec99b40b02973c8365d8d"],["/Windows11-2kfans/index.html","63899b572e752ca86bf1b93ea80a6ff6"],["/Word-Embedding/index.html","0c036dccd548bf7a9c000f43ea350985"],["/YuanShikai-and-his-Beiyang/index.html","6428f63cedc5e587cdd304f98a621684"],["/Zero-copy/index.html","9b45f70a124bc94550c93cc3a2be10a0"],["/about-keras-model/index.html","b8ab8befbfd39297e689580cbb1f5171"],["/algorithm/index.html","540c2c7fcf9a94daebe23fd490a8e869"],["/alibaba-Java/index.html","8e9245de7538cc39e9818ea6084a7af3"],["/archives/2020/01/index.html","7e259c7b4c26eca1d448bffc1f824338"],["/archives/2020/09/index.html","40a8ccdc59ece82e9c91127de42b401b"],["/archives/2020/10/index.html","06dc9bd6043c23c313d88612f8ae2a8a"],["/archives/2020/11/index.html","060cf84275914345589479a94b2929d8"],["/archives/2020/11/page/2/index.html","37832358a0cdefcea6edb618e8bbdfea"],["/archives/2020/11/page/3/index.html","52d5edc76aa9b187cd9d3cbd698d45ca"],["/archives/2020/11/page/4/index.html","ea958258e9677582e2103e7541da122b"],["/archives/2020/11/page/5/index.html","788b0ac5e8837bf80d63700e18b8c444"],["/archives/2020/11/page/6/index.html","ee525052012f02f724a7ecfef5cb427a"],["/archives/2020/12/index.html","63b1c93c1078d31cefc8fd5f12e0e70c"],["/archives/2020/12/page/2/index.html","e1c4b2b61254f43cd4dc61d9c3df0874"],["/archives/2020/12/page/3/index.html","093e6d80ef5c2762b6d5e79cb0e0de09"],["/archives/2020/12/page/4/index.html","34250a1ae0a9549e4b3883866825359d"],["/archives/2020/12/page/5/index.html","95e2775811ac77c74d0f4a683ea883d8"],["/archives/2020/12/page/6/index.html","8105212f66c31156167e67fcadb03681"],["/archives/2020/12/page/7/index.html","d689f39a378ff973a342d72b62dadccc"],["/archives/2020/12/page/8/index.html","05b60c65dbfb6ab6329be5463675afea"],["/archives/2020/index.html","c3b9f94d136cfa362e4d8d4b71dff79c"],["/archives/2020/page/10/index.html","f5525aeb659ec7a0f53e34da38793489"],["/archives/2020/page/11/index.html","7aea02d8c553c994f9c179e854f3a5ae"],["/archives/2020/page/12/index.html","c2de833760b012eae3e8474cb3316538"],["/archives/2020/page/13/index.html","6cd27b0916458ab3c3ca103c5f94eeb6"],["/archives/2020/page/14/index.html","034427cc6d9c2d5fa2c34a4f47d29579"],["/archives/2020/page/2/index.html","6dc741e5f6026450c562845850fb67ef"],["/archives/2020/page/3/index.html","4926c61f236c0dd30e454da533ee4613"],["/archives/2020/page/4/index.html","2cbc733f1c955c6bf3162b4a411fe232"],["/archives/2020/page/5/index.html","eaa237c2549cddad78f9a47d25ff89b1"],["/archives/2020/page/6/index.html","af56bc698f016130f1c700a8fc86c293"],["/archives/2020/page/7/index.html","05f8c00a2f17f3904295bcf24e830a22"],["/archives/2020/page/8/index.html","67c3b8c9508a155024bab179ff32b600"],["/archives/2020/page/9/index.html","66c5907319f68178fe2fad13d68c488d"],["/archives/2021/01/index.html","18936a9f12359c46983213cc8e65868c"],["/archives/2021/01/page/2/index.html","73730253986316b9ad0f01fc8ef89ae0"],["/archives/2021/01/page/3/index.html","cd69a2f0adc9c360bcf6535dd96b3d51"],["/archives/2021/02/index.html","96d603d42d50e405132240e9970b2e23"],["/archives/2021/03/index.html","1a772ce7e0219f3e81accfc858f93006"],["/archives/2021/03/page/2/index.html","3046b3df309a54bebc478c8f70a0fcfc"],["/archives/2021/04/index.html","80a832c7c15cfbb57737c45cbfe6596f"],["/archives/2021/05/index.html","d9416d0e6e8d01822d6b35ea8aa45278"],["/archives/2021/06/index.html","05ac8c8632325fd80bf0f992ba8dfde5"],["/archives/2021/07/index.html","d6c9cdb9c849a6e8e6e3894fde6497a4"],["/archives/2021/08/index.html","a05cf1a177e00c39fcc5d0dbed7f497f"],["/archives/2021/09/index.html","4cc0e6b5e812a43807b577e9a7eae915"],["/archives/2021/10/index.html","d4753472c309ca05a3c4bfaa80f48108"],["/archives/2021/11/index.html","8a90fe87ca0f1d3ddaa3aa5a9ac2f80c"],["/archives/2021/12/index.html","bbf40a3acd84d953def65b2c9fe4b7c0"],["/archives/2021/index.html","e6a187ac64e1fab243252e930ea1c406"],["/archives/2021/page/10/index.html","918dc59c2e1a59835d3591d09e35f13a"],["/archives/2021/page/11/index.html","96dd661ded6fe7dd5e5eb1f7c83d25d5"],["/archives/2021/page/2/index.html","601c89a3e755cd435bba6f7d5b77dd06"],["/archives/2021/page/3/index.html","8540587497513e01b96a8a26a0c7c52c"],["/archives/2021/page/4/index.html","d09d7351a6c4d7d6c2153b1ae449a408"],["/archives/2021/page/5/index.html","2a0d2a744adfbab51b934a91fe6c2459"],["/archives/2021/page/6/index.html","8ed3cdfa69d0dd8d9fc10fbcfcb102c5"],["/archives/2021/page/7/index.html","c3efac7b4f174fb25e332b6118080215"],["/archives/2021/page/8/index.html","3b602b242abce750d35805064a5cb22b"],["/archives/2021/page/9/index.html","f63aec983cd6521ec02bc646ecc9aa42"],["/archives/2022/01/index.html","3a22729e3f5c85a4cf67e5d85fcf502e"],["/archives/2022/02/index.html","8218c9523001dc67bf8c402acb818f28"],["/archives/2022/04/index.html","78f440ca477f37e0241e9bb9393064d2"],["/archives/2022/05/index.html","500e81dc563bee4f6025de39a78cdc49"],["/archives/2022/12/index.html","27f7392ae81dbf045dc5b4602bc9ec8e"],["/archives/2022/index.html","12468eb1f40f0193b0e9279f39a17cb9"],["/archives/2023/01/index.html","2353d346aa0ab8d5588edd8248e8e535"],["/archives/2023/02/index.html","07696fbe5985c2c318c955d3c2595855"],["/archives/2023/03/index.html","481e37fcd1cb87b5271b8e4df2b60757"],["/archives/2023/04/index.html","1dcc1d2f4e74d57232ccbf6b1286a39a"],["/archives/2023/06/index.html","14aa066e68bb0a902c9e4412a620150c"],["/archives/2023/08/index.html","da13b3c296e74bbc54e16e0d3068df2c"],["/archives/2023/10/index.html","9fc6976b8c211a7c12dc544cdcffcb51"],["/archives/2023/index.html","89d541f26b8f5a783ce77e8e28b344cd"],["/archives/2023/page/2/index.html","94e7f4a634295f3153fefb6bc68dd6ec"],["/archives/2023/page/3/index.html","08599d23180de8a6eb09df248a1bbd77"],["/archives/2024/01/index.html","6e290c097930983efee41d33075173f1"],["/archives/2024/02/index.html","92f7247a0be773a6b441dc2c31ff1398"],["/archives/2024/index.html","884eb28aec6273da8d0f1148a8c40e30"],["/archives/2025/06/index.html","d573b6e754392f232ef23907bd86ffcb"],["/archives/2025/07/index.html","37d93b516cbb3e26ef8d95b329d74463"],["/archives/2025/08/index.html","dc266462916a092bfbdbc778eb359b3e"],["/archives/2025/09/index.html","c7a8f5acded2bd1e9f04852ced60a47c"],["/archives/2025/10/index.html","9568f69d83f083b6d7da1d3b88eb7d86"],["/archives/2025/11/index.html","b565c1d5eb1f7b39e1e83e04cacd6016"],["/archives/2025/index.html","9a6c2f85089716008b72edbaa249abdf"],["/archives/2025/page/2/index.html","47affdc4b939e89ad2f912641913e837"],["/archives/2025/page/3/index.html","00bec86ddbc4ab1dd118db583b5ad9d7"],["/archives/2028/02/index.html","5b42c09198dae1420ed0b15c1c561e71"],["/archives/2028/index.html","4834ecff6160e69f53647321e76a652f"],["/archives/index.html","bdd565baad4b9b731743599b3861d149"],["/archives/page/10/index.html","848deded0699e75c84b9b9237cb71536"],["/archives/page/11/index.html","e375e10998346acf9bd0f707a75c4b98"],["/archives/page/12/index.html","e0857b7485bfd5a6888e740079789c95"],["/archives/page/13/index.html","382b3ce019c1d82b7b998f869ce52946"],["/archives/page/14/index.html","c78ee4b296f708a350626d7dbc419f4e"],["/archives/page/15/index.html","d9f723a96c9b6c8e87bd782aebd58993"],["/archives/page/16/index.html","8974582e462c73166e74fd0e48b0c97a"],["/archives/page/17/index.html","9f4ff379e9a44e4c4a87f87507db0780"],["/archives/page/18/index.html","a626420ddf12caff139750d27ed43001"],["/archives/page/19/index.html","d3fe05e9f81226b57a242a9c0af8b21a"],["/archives/page/2/index.html","32b63707e41373ba31fc7fcc46940a05"],["/archives/page/20/index.html","24d0e73d101d29d304cba6269606d76a"],["/archives/page/21/index.html","9850b4b3898a82cbd93cd8e54340f8b8"],["/archives/page/22/index.html","20bc251b77d048b51eaa52c1605863d6"],["/archives/page/23/index.html","258f111fff6ff6846eb8277239baee3d"],["/archives/page/24/index.html","81633fd96416ad0fac6df11ff84f842a"],["/archives/page/25/index.html","2ee83f97a6150b1d19740f67dda23d51"],["/archives/page/26/index.html","ecf435688225b4115d9aaeaefac442e2"],["/archives/page/27/index.html","d52e9596b43cf0880021f9c028de5fa9"],["/archives/page/28/index.html","64093318ec916f32bd58d51251585f7c"],["/archives/page/29/index.html","98d57eb1452aac8fd1225c5d46ed9454"],["/archives/page/3/index.html","0cb36e582b4d5f995aa9a28c4e28ec60"],["/archives/page/30/index.html","9033c75566eafc160eeac10ba37af6c5"],["/archives/page/31/index.html","c7a5a7766ea2fc28d749b715dcf79499"],["/archives/page/4/index.html","061b9009269a3eb10b542942acf4debe"],["/archives/page/5/index.html","0884f00fcd111f437e83eceb426acd2a"],["/archives/page/6/index.html","7a3a4537616933152522d0fb1cf95229"],["/archives/page/7/index.html","b1c971beaf23140b3e61b0bea47696b3"],["/archives/page/8/index.html","5c934af9e6d4239ee57524fef3778a25"],["/archives/page/9/index.html","f7eed870490a46f2fd8bbcc222091ec4"],["/baidu-search/index.html","b0b0cdb879bd83c6b1812b6deee98c6a"],["/baidu_verify_code-Hh2fKNlEB1.html","ac3a5d70f36da22c79d70f1631cadeb7"],["/be-a-programmer-instead-of-a-code-farmer/index.html","64f30456d990a917a5d0779f4b654058"],["/bought-a-house/index.html","2e0c30591da81f0220c5def177101f00"],["/categories/C与C✙✙/index.html","355afd808fc6fe22e1609b4da93bc1c4"],["/categories/Go语言/index.html","07c71c3d1758d45f418ade543cad35e8"],["/categories/ITK与VTK/index.html","8f80af011c405b8980025ed71e629323"],["/categories/Java/index.html","acf27b9d3b03f10d391b72e2c52be782"],["/categories/Java/page/2/index.html","54edba4ec468e1bfce2a0a213b763499"],["/categories/Java/page/3/index.html","be8423d6ffff7fad293e7ec20a4071e4"],["/categories/Linux/index.html","8e3f86c061b81ad5b9e7f64bde62c5e4"],["/categories/PLC/index.html","b30992d37bffc56126ce9dbc34fde9be"],["/categories/Python/index.html","0811e83bbbeb6127c4af0444b71a3fe9"],["/categories/SEO教程/index.html","46dde863d3f8e70da82da68194b06633"],["/categories/index.html","ab7cf63331a892544c5608195ac0c4b9"],["/categories/图像处理与机器学习/index.html","72a596e3da82436df1ec083e2c2cf528"],["/categories/图像处理与机器学习/page/2/index.html","ac3142821c5b01dc01d6a176a29e546e"],["/categories/图像处理与机器学习/page/3/index.html","d48ae9c916ea56108027e0b1306f0f85"],["/categories/图像处理与机器学习/page/4/index.html","e1d8d61a4813bac4e30a725d7119e7e9"],["/categories/图像处理与机器学习/page/5/index.html","943d76ffd582bc5bde6ba69ad664f2ea"],["/categories/图像处理与机器学习/page/6/index.html","e26efed806d5fe7fe41f18a18c3ba0d8"],["/categories/工具/index.html","13be44b9fe3f307268c35db41d6969c3"],["/categories/工具/page/2/index.html","9b8f1e42b9c5e5f498bfc57c2f547594"],["/categories/技术以外/index.html","9fde6b2621539bc6c24f122832fabdc0"],["/categories/技术以外/page/2/index.html","fc9695d035c6992690272c3ccb9f20ca"],["/categories/技术以外/page/3/index.html","5107cfea8c9e36afc8a6f5e4439b46ee"],["/categories/技术以外/page/4/index.html","f630e1d91b064bac6794edcd5614f69d"],["/categories/技术以外/page/5/index.html","0563a277252e38c39a7de86c1bfe071e"],["/categories/技术以外/page/6/index.html","8d2414e77a625d920ed3a6070c870beb"],["/categories/技术以外/page/7/index.html","dd51d6955c2ca4473bfae011b50cfddb"],["/categories/技术以外/page/8/index.html","a5851ea93957f97c0e8f362532403614"],["/categories/技术以外/page/9/index.html","c42651d77bda76a729befb816def8412"],["/categories/数据结构与算法/index.html","4868546ac612bd4a2f396231918afb1b"],["/categories/数据结构与算法/page/2/index.html","e7948153d18a10fd0047a18cd0de2674"],["/categories/科学上网/index.html","91bf74d09d8511560843996b35824f43"],["/categories/科学上网/page/2/index.html","1f44189833c7c5a456fec5613b3c6db5"],["/categories/科学上网/page/3/index.html","7c6c5983cfbd2189bbbbcc42b167ce85"],["/categories/编程经验/index.html","667bc7337c68a7d2a049ad1db745bf48"],["/categories/编程资料/index.html","56b2fa9032b65fb0590ff0d070d0d7dc"],["/categories/编程资料/page/2/index.html","242429a0c32bdfed9ea954f8fa702944"],["/categories/编程资料/page/3/index.html","99b7599ed1cffd46d4c8c5c6259aa3d0"],["/categories/编程资料/page/4/index.html","757d0c2c118f95f2465a331098d1470e"],["/categories/计算机基础知识/index.html","d1b67febe191d25d29e9a680cf7f0e75"],["/categories/计算机基础知识/page/2/index.html","d8afa6b2ce534c21830026e146164d6f"],["/categories/设计模式/index.html","f7bb14de84a723dba18b9ac0a1fc6862"],["/choose/index.html","9a5e11b5068b6bcac584b81ed9cfd020"],["/choose2/index.html","1927c8d7283b536e16a63b99e4c5a0d4"],["/chrome-crx-intruduce/index.html","129bd432a145efc5204fa9381de90c55"],["/clashvpn/index.html","4eea158b60257e1f29a64f3c150cae21"],["/coder-blog-website/index.html","7d4e3fcd0c36dafa5ae53c913e11625e"],["/coder-source/index.html","799de2e53efc17ea6605425b81a2943f"],["/coder-videos-website/index.html","f576e3b75b9745dbd90c2901e3ff78d3"],["/computer-book/index.html","68bcd462821fa9b9f443fd784cb7e88c"],["/computer-censorship/index.html","8aec3819b937d9db8554fb4257c0f621"],["/computer-network01/index.html","b7e030da1f164a8bea0eec6568acbeae"],["/computer-network02/index.html","53c87416bd3a076b5809de3a4b71fb33"],["/css/main.css","bc32ad34ec4990d934c3c647bdb62f79"],["/database-Mysql/index.html","537c47fd583468fb4e50d0a9cfe7cbf8"],["/eclipse-lombok/index.html","6537d7758d43bfe3033ffb6478c566f6"],["/fully-convolutional-networks-for-semantic-segmentation/index.html","34c56b712366d421a8864c0dda7b0ff2"],["/great-firewall/index.html","27263b3979dfe6bad27f9cee62e30120"],["/how-to-signup-chatgpt/index.html","2b29c3c1a7e81a2eb093355b04b51d6a"],["/how-to-use-Gemini/index.html","9050e255de5c579c3bfdef6960cb3014"],["/img/logo.jpg","c5981efb8d4f0a9b518b24dbb6adca06"],["/img/vpn.png","bb9b93ba246d5428a02fc9523178da3a"],["/index.html","d22f09f12637ea7ebf7cdd734bd3c99e"],["/ios-open-internet/index.html","d5931986273a3662b951d32bb3e54936"],["/iphone-open-internet/index.html","fbc74a366753c1312a777959aa5e8a9e"],["/itext-makes-pdf-form/index.html","784c5e92902194177fa5ef8cf0c1a164"],["/java-Set-Map/index.html","4d5597e744aff10f2d07091445e420fe"],["/javaweb-server-error-codes/index.html","383b111040e6e9d58ea2086a40556f36"],["/javaweb-source-code/index.html","adabd17df7dd755b86ff8938eb591944"],["/js/lib/busuanzi.min.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/js/lib/lozad.min.js","47904d34a224931dd1b615c59a3dbe3b"],["/js/lib/prism/prism-coy.min.css","0ccad54d95845901ead59bfd3ecceb14"],["/js/lib/prism/prism-dark.min.css","a4711d2957d6605eb5682bdd228cf123"],["/js/lib/prism/prism-funky.min.css","efedcdccd7a9ab342d2d9cacd24920af"],["/js/lib/prism/prism-line-numbers.min.css","38e22e790c279bb56f9ec4b90a2a2d58"],["/js/lib/prism/prism-okaidia.min.css","5ac6f9de996fbec68aaa106dfb16e061"],["/js/lib/prism/prism-solarizedlight.min.css","ecc7e64d039873ffcf7fb27babdaeb5a"],["/js/lib/prism/prism-tomorrow.min.css","456af2a14ae4f5089939d5904ac40fe8"],["/js/lib/prism/prism-twilight.min.css","ebb5c355332a8cf9a1ce37a2a69d678f"],["/js/lib/prism/prism.min.css","a5234d614834658887cec6a9515890f8"],["/js/main.js","052d2b299d9c750afea8df0b802ab7c1"],["/keras+TensorBoard/index.html","7a90c2d7d9528afcfd18e4ab18035268"],["/keras-beginner-guide/index.html","c38491ddf530c6660ae5beb8304878e0"],["/kmp-algorithms/index.html","3f4639184cf92b9525d338b674302474"],["/leetcode-Java/index.html","bc3ffe9cc6157da3c47631065af60918"],["/links/index.html","15acc12dce610515686f74311e360eee"],["/linux-java-opencv/index.html","c521a91e0a802c367eb1a2987bc13016"],["/msb-source/index.html","4bab695a8b8f4bd507051ea89979e43e"],["/online-BUG！/index.html","b81c9b5d0cab78a6e7235f1a8239d0a9"],["/open-app/index.html","3c0cccf62eb0ee88d62ca148c7d2a9f8"],["/page/10/index.html","3513c29c5cc43e190e8b439e2138d887"],["/page/11/index.html","f3bd9bb7e565878f3102b5695f235b8b"],["/page/12/index.html","e7bc2a4c3771851c2dbb6a309c641ab2"],["/page/13/index.html","f6c246fc88b879078d26599a6ed48c48"],["/page/14/index.html","597d1fb47b47bc25c0adabb0bcf55243"],["/page/15/index.html","c53ccfbc083e63b0c64f8d998427d94d"],["/page/16/index.html","501956b9a5e5bf91cacd6b96ebbaad93"],["/page/17/index.html","b40a0591482df20043d6700df22e908d"],["/page/18/index.html","2fd07d3f5202f0782a566f1dea439586"],["/page/19/index.html","05b01be52950ed4e241a8e0e2cbd25a4"],["/page/2/index.html","012ffa74254310972c2996272279d1b9"],["/page/20/index.html","e8a5ef28a1bda051a34b4f121a52695c"],["/page/21/index.html","1dd705f9c6d26c8d86ae5c285957bc2e"],["/page/22/index.html","e27673cc566b9b6c9b1d752e2867028c"],["/page/23/index.html","e581c222a0bdbc1990c147a9747f39ec"],["/page/24/index.html","917125d835d90d6645656e0026b01bfe"],["/page/25/index.html","940af2347464cdcf9b961867c8a5b7e7"],["/page/26/index.html","61ff37bd13db07003199d4c26124fa0d"],["/page/27/index.html","18487a7ccd99371bf923a454db0ccb7e"],["/page/28/index.html","fa63d6d525a9048ec43f7be68c06af74"],["/page/29/index.html","a4030a9b9263ec8e85a6bc2c170fceb3"],["/page/3/index.html","d7d7fa01937831ac7ea416e2594c86de"],["/page/30/index.html","190e05f27c0958e1579271ebc2090567"],["/page/31/index.html","784cf34c950479b7ae59d0a2c250f9de"],["/page/4/index.html","15d893099a33ffdbcec668d946162496"],["/page/5/index.html","20c144626a98c3c40d95eb81692d549a"],["/page/6/index.html","941060572f6fb374ee60288724a21f09"],["/page/7/index.html","9f5ba79656200e60701e52d4162b66fb"],["/page/8/index.html","ac41fdd6c67f2866c0f66a9623c062fc"],["/page/9/index.html","2935aa9d064043897cf8940e847d299f"],["/pandas-data-preprocessing/index.html","6e86114f2f73f15c5159de7bb5b2691e"],["/python-Blog/index.html","37d5829220a3db7bc666a1b2ac3d61f8"],["/python-yeild/index.html","77d8447fbb531101316beb7ce3fcfa33"],["/python爬虫教程/index.html","5eb51d9ec1720f7ddec6a45c053d104c"],["/software-copyright/index.html","a0150f34a54a1a6d810ee7f19ee36e63"],["/sw-register.js","b3883a562ceb33d86e0cb760d8f96ea0"],["/tags/AI/index.html","8e2653fa097978d5669e2f9690146205"],["/tags/API/index.html","7484c3526e2c86b65f2b31aab00165e8"],["/tags/C-图书/index.html","2aae88d15cc52014b6b69807f7564a2f"],["/tags/C/index.html","a7cc7a66c4be677e0e1ce6d0e46031a0"],["/tags/CNN/index.html","a8a7ac837b706f9c158a774ecc8da579"],["/tags/Chrome/index.html","6a5425de9e6fa916c9e9fcc4786d1509"],["/tags/C✙✙/index.html","708ff5312671d374e9fe16b7c298beaa"],["/tags/C语言/index.html","c8369da33091501ba663b3c9635e37a0"],["/tags/C语言图书/index.html","08e9cd26919bbe1e01c245349fc29f17"],["/tags/DSN/index.html","a1069056c0fe9a5a49c22582517d1494"],["/tags/Dll/index.html","cd403a7bbcb0a4959c50ff45fd3a34b8"],["/tags/ECCV/index.html","38aa8a666dbc381cfeccb888096739a2"],["/tags/EM算法/index.html","5c30d31c523cd12ae1f2c5dd767f5b4d"],["/tags/Eolink/index.html","b36c6357492daab3fdd41eb59c723768"],["/tags/Gitee/index.html","5fa6cb1783aac1570e7cb8c7dad023cf"],["/tags/Go语言/index.html","4554a4ed5697dea1153783b83a3925b2"],["/tags/Graph/index.html","43b9735ed7be26f0a95f19935258e10f"],["/tags/HTTPS/index.html","404b48557c9bc04e47ce07845629cde0"],["/tags/ITK/index.html","f608b11494286e9e22a26046abc6df27"],["/tags/ItkVtkGlue/index.html","9f520d37e89c150f168f792fae5d061c"],["/tags/JMM/index.html","3e876677b3e6b09a051335f0c89f061b"],["/tags/JVM/index.html","ea33eee0ca58158b5821b7f3c9625c54"],["/tags/Java/index.html","fa6cf8267bd1fa25a05afd35395fef3c"],["/tags/Java/page/2/index.html","a7215c7415317b1ea479178a0cf2dc2d"],["/tags/Java图书/index.html","764c7593204db13d77cff93c9cada478"],["/tags/Kaggle/index.html","bf1e753f6822b645b9ad13f41721485d"],["/tags/Keras/index.html","1b2c9ea992831cef8feb9729c0bf5087"],["/tags/Linux/index.html","ea9f470e6c856305196d76528d64c77b"],["/tags/Linux图书/index.html","7eb5988ce0ee6f9ff2ac0161ef21a70f"],["/tags/MEPP/index.html","4a38332c75f0b8241f1fbb75ec4ea44d"],["/tags/Map/index.html","fa23abcd26868af9814180756d5398af"],["/tags/Matlab/index.html","7abea24ce5692f00f082562789e86c45"],["/tags/MongoDB/index.html","771142d1bb0df65aec1c793b4bc624e8"],["/tags/MySQL/index.html","112956a24eb14d32ff0bedbeb927f36a"],["/tags/Parzen窗/index.html","f1a2b53908c27ffb56520cec844af448"],["/tags/PicGo/index.html","c85dafbc320027a2cb0b54ab04d01b44"],["/tags/Python/index.html","fc8f517d272c8f69ed45c5129a98a990"],["/tags/Python图书/index.html","08bacf6d9e0c5d982d0bdb5907e42b33"],["/tags/SPHARM-PDM/index.html","9323a838d2b7d74d14089d1bb878d6a9"],["/tags/SVM/index.html","4db53eb99b312f8431c52650d06ae49a"],["/tags/Servlet/index.html","de3d38a9f22d1645542a7122028ee320"],["/tags/Sping/index.html","656f3c42d7050b711dca49790a46539d"],["/tags/Struts/index.html","1347c43e412a9bf381288d8b9d02fe2d"],["/tags/TCP-IP/index.html","2be58590d87d77d4b6a91368a90439ab"],["/tags/Ubuntu/index.html","3332bdb725f8c89546c2a312df89560a"],["/tags/Unet/index.html","50142d6c37429af83c61c8e8b72d6845"],["/tags/VS/index.html","6c9f7dfae30db4a9244e4e0a490d6949"],["/tags/VTK/index.html","e11bafddc0e36b356e60d1e827059fa0"],["/tags/Windows/index.html","96a35900dd97c4fe5fd6c03d25fb0462"],["/tags/edit/index.html","a1fe3bf43a15e7e1c69eb06f6bd3c57e"],["/tags/hibernate/index.html","d9e3ada86a1584263872da292bdd28b7"],["/tags/index.html","e32a5b646d6532fa6b2c1709a1821c3a"],["/tags/itext/index.html","022c4a1f3c454e77ff43a49fbb9250da"],["/tags/jdk/index.html","24cdb5f6543707b9f311168049968519"],["/tags/kmp/index.html","d5885ee6b045b6506748ca2b821e075f"],["/tags/k最近邻估计/index.html","62d60f0639cb524c5ba9d7468f677995"],["/tags/lombok/index.html","41616e7030f2961684941c10069d65f7"],["/tags/offer/index.html","f4b64cf0d0e0879faac8b334f1cd59fb"],["/tags/opencv/index.html","1f2c093ae9f9a52f1ccc0e2c5f4a0904"],["/tags/pandas/index.html","0b3dd1d888a2ad535f379984f0cb54c2"],["/tags/string/index.html","bc52a604b7c7b13d1d22c561d88bf60b"],["/tags/vim/index.html","f790ced3c6d97d167895d9a6b1193cae"],["/tags/vtkPolyData/index.html","7671fe8f2b3a802b2e6eb62767e8c485"],["/tags/web/index.html","3f519ed11c73105931a77a5e5424a2ea"],["/tags/xshell/index.html","81fb34ae4bebc2c04297c015bf3ce710"],["/tags/yeild/index.html","f13b9ce98e75ef98a86c62b718be6edb"],["/tags/互联网/index.html","4a56c60d267b313eab4a6ab86c51ffe9"],["/tags/人工智能/index.html","6fd74b665d201b9642e0d038a3c92ebe"],["/tags/体绘制/index.html","12b0802c6ed21466168c8f098e8a10e0"],["/tags/全卷积网络/index.html","3485ab426118071bf4a8d7a396054d50"],["/tags/公众号/index.html","09e1d68be7f811bbb8e187c7fd73bdaf"],["/tags/内存模型/index.html","2aa277ed2780edaf69abf44e6214ced5"],["/tags/内推/index.html","506d3de08d52652d9ab7b101a73084e0"],["/tags/函数/index.html","8638e0b92b850a0625162371ec5f7ae0"],["/tags/分布式/index.html","bbf2fbbddf54a5239e39610698cda844"],["/tags/加密/index.html","e307b820cb8aed31e2d83f07294e8f96"],["/tags/医疗图像/index.html","39c5474f2d2e8270c84248668172521c"],["/tags/博客/index.html","6fae7671d54c3269127356c23b7417f0"],["/tags/图像数据/index.html","3ed582df10ef6bd2f74b927f4fe68898"],["/tags/图谱分割/index.html","4dc16e2934146bb6836b5103295de270"],["/tags/垃圾回收/index.html","cab102b57763eac0c1c92e09c5aa2d55"],["/tags/多线程/index.html","467c43b046d0f35ca0636fadcbb092f5"],["/tags/字符串/index.html","a16b8abbd93c708693c384226f6a79f9"],["/tags/工具/index.html","566aba7a6d613692f995e5f0226ffae2"],["/tags/工具/page/2/index.html","0de8c163e04eec2b9412da1073c06a83"],["/tags/弹性形变/index.html","2990f866a0ffbd6662bb368af07f74d2"],["/tags/排序/index.html","5a1a2ac3006930ca9a5f4e1835a0d5ef"],["/tags/搜狗/index.html","11be8f96a7fcabd0003427b8a2247cc6"],["/tags/操作系统/index.html","cc9de1b73c5f298ada7e7d6bd574a75d"],["/tags/数据库/index.html","c5de1acc255365fdfe306e0e890a9505"],["/tags/数据类型/index.html","32ee1364aea6e752f24bc0b9f954c55d"],["/tags/数据结构/index.html","6872da0038d975b2416e366d5eaf2b29"],["/tags/最大似然/index.html","2ab6e77f0bf26576022f18e2388acf5f"],["/tags/机器学习/index.html","93700af2f89ef567974c7775ed0456a8"],["/tags/机器学习/page/2/index.html","128977ea742a4bbb09aa437ad31f5341"],["/tags/机器学习/page/3/index.html","3a9be0bd5f6928da48c539d68418c7bf"],["/tags/机器学习/page/4/index.html","4b0836e81e3f44bd6f314ceb0cbd25a7"],["/tags/机器学习/page/5/index.html","4bc71dbcfc8467400e43ec08552c2d0b"],["/tags/树/index.html","a6801138ecf84b1221aaf9112b7b51bd"],["/tags/框架/index.html","0e78c49701a3a752d7736fcff6d69a05"],["/tags/求职/index.html","12aabe82092325f1bd3f9e38dfcecd09"],["/tags/汇编语言/index.html","4c1f9903774faef822b78306abe1f524"],["/tags/深度学习/index.html","bf09430a2f0a66a641dfd0f4e1cba9f3"],["/tags/深度学习/page/2/index.html","96243abca733d7cf45ff2840f5db8951"],["/tags/深度学习/page/3/index.html","87fb3ddd6035e914ca5a7a9a9cc6f598"],["/tags/深度监督网络/index.html","9e9015cc2821a2c375929de673c5675d"],["/tags/爬虫/index.html","b19d1d9bb46b6ec96c878605311eeb08"],["/tags/电子书下载/index.html","6c1e31e903c4c064c8d6b29adbdf547a"],["/tags/电子书下载/page/2/index.html","7e7d080ec5922dccdeb1fbf435d811d6"],["/tags/程序员/index.html","f3a8cba420b968f7f731bc5af93e3b32"],["/tags/程序员面试/index.html","33541e32ae0602e9e95b78453824bf29"],["/tags/简历/index.html","21950609b55e63d5c5d1fcca420fccc2"],["/tags/算法/index.html","3a809340abf1801520436e3492f5b7bc"],["/tags/算法/page/2/index.html","cafb7835b0d0a14b46fda0d65be530e5"],["/tags/算法/page/3/index.html","1f2fdedbfaa3ef2998b51f993cbfc10c"],["/tags/线程/index.html","3c03d0b41cfffb6f69a2103b2af264da"],["/tags/结构学习/index.html","1211b20e831614a0a385d26840648b43"],["/tags/编程/index.html","6ae17686673c924f0aac5833ccb4a26d"],["/tags/网站/index.html","1d600cb1b9b398d131d46207915e449e"],["/tags/网站/page/2/index.html","2ed1c1f148b25828fa0ad8b707e0d2b9"],["/tags/网络/index.html","c8716a8858d3ea92a585804f38cd16be"],["/tags/网络原理/index.html","ac73eae5c23d4240ab4bf14e93e6281b"],["/tags/肝脏分割/index.html","5def6225cd878eb71cfdbba964ca0424"],["/tags/计算机/index.html","b1754bbac694dfbe976e3e5e617c357a"],["/tags/计算机专业/index.html","14276f2090d96eb6fe12efb0d8444978"],["/tags/计算机网络/index.html","c8ec1523e620dd13d56b6fb5c99c6b7a"],["/tags/设计模式/index.html","f3abec907f7e1d4666d20397e925e756"],["/tags/贝叶斯/index.html","669c4e3f27f5864b6be7e628e7fc6e01"],["/tags/迁移学习/index.html","0e58a7601406302c2f7ebf87e6616355"],["/tags/面试/index.html","43ccf3e10f5b4b0e127d8c7346c5897d"],["/the-way-of-pragram/index.html","0167fcceb5054fede89d9c13e9b0ed8a"],["/untiypro XL安装/index.html","fa357f374b5bee962d2e020776dc0aac"],["/video-websites/index.html","d7aba70b2cdd528b2a07d107fb189262"],["/wechat-fans/index.html","6269a077b6317c8a4c8cab0163d41eaa"],["/window-run-VTK/index.html","08962830975b880866da9f99bd4c2e35"],["/xshell-connect-Linux/index.html","8c793982c530dccefd46323275f2b50a"],["/‌Accessing-the-Open-Internet/index.html","99438c91ccf80b50a65674d9ce51a327"],["/《Java高并发编程详解》，去大厂必看！/index.html","3736c5eb42fb68b78c495c18f4313b8a"],["/一分钟没了 1.5W 。。。/index.html","5f849d083e2b75a96314b97ab623418a"],["/一条高产爆款内容生产线/index.html","a1e9e01d6c0334df47bf766b31a80b51"],["/为高考学子推荐的六个就业前景广阔的专业/index.html","0b6479050d5b02a5b8bc132de2fc0b82"],["/互联网赚钱机器---社群/index.html","b22b7188a3dc5ef0d9bc4ae8eae46d49"],["/你们常用的工作方法和思考方式是什么？/index.html","5c32c8f7896e115d5ed2ad389896de20"],["/关于环境配置的一些事/index.html","47d17c986be440e5b8994e9d0432867a"],["/准备了19w！搞事/index.html","2203ea836cd815799e505e73d592e05a"],["/几个很重要的感悟/index.html","3d0aa3cd8d0fbfa09fcc5427e6752df0"],["/分割ROI篇/index.html","2d28eb804f2c914900d89d0de2c46f7e"],["/分割精度说明/index.html","79a935be6e37413a5cdd6da849e675ca"],["/分块程序执行/index.html","82af214e3cea9722bf7d60691f8b055b"],["/加班公司黑名单！！！/index.html","423534c29b3bd4175a84ed3a91369445"],["/卧槽，上知乎热搜了！/index.html","155acc59909618ed3bb0ca8d72458ce7"],["/卧槽，我的小破站爆了！/index.html","19ab9441610fd610502c87fcdce1dd37"],["/卧槽，我被盗版了/index.html","d8c3ee50acee4b1b372e2e336bbe200f"],["/卧槽，还有985大学在大一上C语言课？？/index.html","c93aa4a674e30a4aaff9df97a696d799"],["/历年微软面试中出现的leetcode算法题/index.html","c28c7483f9aa90d8afc1addb3977a4b5"],["/去特斯拉试车了/index.html","7b759cb12eb1ea1532b7eb1b5d3a7fca"],["/吃苦的三种境界/index.html","cf54a353ad353ef73249f3c5c37b9eed"],["/哪本书适合推荐给 Java 初学者？/index.html","eb230d664e3d6b35b0583fdb35dd1e8d"],["/哪本入门级的学习数据库的书最值得推荐？/index.html","d13cb0cda4130b10292bdfdbf9c9021f"],["/国内外常用的AIGC模型/index.html","90815e7943319efc95f602170ce7e463"],["/国庆假期/index.html","e9285f31d56d417e84e45f04f719fdb6"],["/图谱程序字典/index.html","55a04af4b11478a84c3c80e1f8424f7b"],["/图谱训练与分割/index.html","1ff66e958229413305ff361d2f27f599"],["/宣布一件大事/index.html","9f2e4f4f396688095fb9707a0e683974"],["/小鹏P7i试驾体验/index.html","9d6321405cca689a5d0f6e1618fd8f7c"],["/微信PC版3.3.0内测更新，电脑可以刷朋友圈了/index.html","cf8939af5ba319e09982c13233a6cc4d"],["/怎么更快的赚钱？/index.html","b2b5a7bc01a86cdda2f88db57b6f27c8"],["/我毕业了/index.html","55cec9502423a692ecba8c2faae769a0"],["/我！真！的！找到了！爱上学习！的方法！/index.html","bd208df8f5efceb69c784ded6baba7c9"],["/户口的意义/index.html","947cfa0b518ad090a08618c3ffb6933a"],["/推荐两本经典算法书/index.html","c9038d2ffa0d95e6749a21562a4e86cf"],["/推荐几个在线学习SQL的网站！/index.html","ed00c47173a77fa0546c2bdf3801ba4e"],["/搞了一个程序员成长晋级社群！/index.html","1d4a4abec2e8a6690fe6ca73ba5a2fdd"],["/摘抄/index.html","cb0af9fbab5873ef10260d1a3056009b"],["/暴跌30心态崩了/index.html","89574ed630509cee21a40d39388b74aa"],["/最近很火的ChatGPT到底该怎么玩？/index.html","5bb9ee2e417ff4181b0ac275fd01846c"],["/有哪些好看的日历可以买？/index.html","8bd538e4dd97b8f12967f6f90894c05d"],["/服务器有啥用/index.html","c581aaad67017bff172e0691b464acae"],["/来长沙了！/index.html","067e0b08ae2a542a937c39676e29a411"],["/校招污点公司名单/index.html","690e095da33ab1e3a842d476e0df7c2b"],["/梭哈200多万/index.html","f6430e4bb0ba055747f51260f9717c94"],["/梯形图入门/index.html","d312620fe51b18f02c89ad2e6097a725"],["/橙心优选，凉凉了！/index.html","a1b782032df708df0d1fb879e2607a46"],["/比亚迪汉试驾体验/index.html","32df401af918a0524aab1a318451d097"],["/清华转学成电，真的牛逼！/index.html","4e327f14b9fb7b6b9c615769712baebd"],["/滴滴程序员被亲戚鄙视：年薪八十万还不如二本教书的/index.html","62d0855f1da84098fb4f4a08931fbe84"],["/社群！/index.html","5d98c2fa410712d051fa7ecaadc85ea9"],["/科学上网之VPN篇/index.html","d16b73ac9eacbaeacf49d333382685c6"],["/程序员必备的几个技能！看完你也是大神/index.html","c086c66919268332f6f877a968c6cc95"],["/程序员绕不去的槛，Linux！！！/index.html","70bf299fc2845a61362e570273eb4084"],["/蔚来ET5试驾体验/index.html","5d4a2f4286785dd22384b3e840e63099"],["/蔚来，牛逼！/index.html","1d246f0c2f9f5abe1b95d2a75c57bdf6"],["/被录取了/index.html","cee724197bfacd7621d50a46d4db528a"],["/被找事了！/index.html","b4854420770c2863bbd8148839fa1eeb"],["/被拉黑了。。。/index.html","e7a40560863a1f25e5ecf80dd07e6fc3"],["/被车撞了！/index.html","32c7a64b9f60aa3ddc486a1a4391d380"],["/该如何选购固态硬盘？/index.html","e4e5d847eb224d5ef1dc344bd4505f0c"],["/这本书一定要看！/index.html","3ce0ae0c1f7a35267175e6e7369c4c4c"],["/选Java还是C++？/index.html","51ad7af5f2cc94e5e6f57938d2c47104"],["/那些让你起飞的计算机基础知识/index.html","546cde33cd5dd837e470a5e9812bf299"],["/靠这几本算法书，成功拿下大厂offer！/index.html","17d6777cb0ecba8e1b2f8aee42168662"]];
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
