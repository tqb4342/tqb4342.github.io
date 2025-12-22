/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/0010-city/index.html","98e52d214912993acbd9d58bee4aa842"],["/10-algorithm-book/index.html","967cb20c4419de9a7766015430277c45"],["/10-website/index.html","c5a61dc7f25b51a42d0579c671f91cc0"],["/100万的小目标/index.html","8a0302c966b27eced51f6f8bf4616f8e"],["/10w+YYDS！/index.html","07d819bafac6bf7060185250b665d374"],["/12-technical-tutorial-sites/index.html","dc3cad5ab4dbda2d06ff2eb6a69da279"],["/2 6 岁 了/index.html","7b09ba42875cb363ca186ce7be23e7ed"],["/200万，啪，没了。。。。/index.html","731ad4f8e213ed007be3c74c1dd47ba0"],["/2018ECCV-Paper-DL/index.html","f4956e2f38abe00b8ed05b21d3f473b1"],["/2021年固态硬盘选购最新攻略（小白避坑指南）/index.html","78171fdbd6e4f1354870c3fe4d7317df"],["/2021机械键盘推荐/index.html","a8e0a9e98380e52e3482381addb2870e"],["/2025-07-15/index.html","9e8427ee8883ca8098f2d8dd450f0e3b"],["/27岁了/index.html","849a62ca9d7acb07316e65bc1d115a34"],["/3D-Convolutional-Neural-Networks-for-Human-Action-Recognition/index.html","f50f0af8d0ad4c4f5dd481fae8f7a85a"],["/3D-Deeply-Supervised-Network-for-Automatic-Liver-Segmentation-from-CT-Volumes/index.html","715983a67d089b191e210b892ea2cbd0"],["/3D-Unet-Experiment-notes/index.html","d01f6162c2f08a9da173adf7fc8a6d10"],["/4-Software/index.html","09c936c29d2bf3d7cb46c0659ff6a906"],["/6-website/index.html","c7e0da87890932da93416f45133f41af"],["/7-terminal-tools/index.html","8fe3715135c6da2fd61201c85af37de0"],["/AIGC中典型的深度学习网络/index.html","db2970d4a595bff94e96cf74b9f6e092"],["/Agency-model/index.html","2e7e8dd01f9e02e7ccdc2ff2f67f51df"],["/Algorithm-brush-notes/index.html","d8d04f48aa3bc027582bd4172de4f5d8"],["/Ali-recruits/index.html","1fd4f46ce72102bc6034c4df3cd45b3e"],["/Android-VPN/index.html","5617153f7d897a13115311e587727177"],["/Android-open-internet/index.html","2e75f32b308d54c8b39cf86bc1548ecb"],["/Appearance-mode/index.html","bec5544932f5e095ef8a0834a802f439"],["/Backtracking/index.html","f14f4e2b31439a42b2f2d8b5e0f709d8"],["/Baidu-Sao-operation/index.html","295bc24639308ede8684e13c2c552ca5"],["/Batch-Normalization/index.html","e20628ea9e3ef55478f940d9f875b792"],["/Best-AI-tools/index.html","924f703abe4f2ae86cb43e0866729c0e"],["/Bias-and-Variance/index.html","53688448fc7a818314b320807d5e937c"],["/Binary-tree-traversal/index.html","d771ea65cf5c494f481243d560133ec9"],["/Branch-and-bound/index.html","767af52160bb1592ee1cdd69ce643f66"],["/Buying-computer-for-the-first-time/index.html","be61b6bd623bf45c88cc1d869542dfbd"],["/B站向北邮道歉！/index.html","313aa8dab6923a9c3794ed78c1bab806"],["/C++-string-function/index.html","f0ce482446636909370499bf106d1486"],["/C-Java-DevelopTools/index.html","785ca8768b28cef1c6442b6cda84d9ac"],["/CS-Classic-Books/index.html","d27689d00a4f7ccfd9edf9200610fb6a"],["/CS-network/index.html","d43fa7bfe31e81dc0d4086f898488f0a"],["/CSBook001/index.html","6634560929308be9c5485a77b8e4d7dc"],["/CSBook002/index.html","eb8542e318dc78eb4f246d88fcdb7d3f"],["/CSBook003/index.html","7e2514e078746ca00bd5f8888cc84f49"],["/CSBook004/index.html","ffe85c1e885900add671e3c1936fad19"],["/CSBook005/index.html","5347395e8d6370f1fcd9fbf6605bf5c7"],["/CSBook006/index.html","7cb1700aaaf94e2fa1be460b496dcfb3"],["/CSBook007/index.html","228fc614f5f5122314144c3c7a47bfb0"],["/CSBook008/index.html","b7fb5efc07aec315379ca75047528b9d"],["/CSBook009/index.html","2dae72fd161861963f19b30a41ebb69a"],["/CSBook010/index.html","18fb29ddf87c11d0bcb8260772d879a8"],["/CSBook011/index.html","9488a2bb0740af04d8493bbabead7e5c"],["/CSBook012/index.html","71d764ea0b1b7f922b17363a28b5282f"],["/Changsha-really-fragrant/index.html","7fbbbeffdd0dda1771706e726d5bd3d6"],["/ChatGPT-VPN/index.html","9032869cf02b5bd4c057bbbc7bfb441d"],["/ChatGPT/index.html","6725a4cc10c046892ad3ea3d09d117f8"],["/ChatGPT！王炸级更新！！！/index.html","1e70a8f0685ab6f0fd895e6f3ccf2a80"],["/Chrome-crx/index.html","c9fd338e1d31d3c704cbe6a55687d2ce"],["/ClashForWindows/index.html","dfffb214d164e7f07792ea23ddc06827"],["/Computer-Classic-Books/index.html","b4c777be7b9ecce5815b1f17a88e9739"],["/Computer-for-another-major/index.html","e0f2528594e536bbf2dfa347046bde5c"],["/Conditional-confrontation-network/index.html","f981c4bbcfe25a3fb0f44ef7de115e27"],["/DNN/index.html","1a8a2369859c28c769eb3dd3168b345b"],["/DSN-segmentation-liver-experiment-summary/index.html","d9d8cb233bbd9c1bd1eda8d85ffdaf7b"],["/Data-enhancement-elastic-deformation/index.html","9fc924cafc255d4df10b2188c8a02c6f"],["/Decorative-pattern/index.html","52d4696f2365a21e2c425cdba9a1b830"],["/Deep-Learning/index.html","8278e686447cbd7c641c154fabea92b3"],["/Deep-learning-and-medical-image-analysis/index.html","6b8e1989d90e3519b9ca8d0df67989c9"],["/Deeply-Supervised-Nets/index.html","ea2929df7199556b5214b7c6ddc460b7"],["/Deformation-model-based-sparse-representation/index.html","8b424d331cf313020dc1e426092c27d7"],["/Discriminative-and-Generative-model/index.html","4742005dbebac4295a61856ffea5a539"],["/Distributed-transaction/index.html","196837a3001e05df87ebc8fd888e25d8"],["/Divide-and-conquer-algorithm/index.html","571949268762eb70659e8ff151e695ee"],["/Dll/index.html","e78dd6bb2f9eab6142b89e456f3b79fd"],["/Dynamic-programming-algorithm/index.html","7ceca438e056d689def0d662f65e239f"],["/E-book-download-commonly-used-by-programmers/index.html","1befa70576a40f58248283791bbb3e0b"],["/EditPlus软件的安装、激活和配置过程分享/index.html","38336a626d72b979a5f9b411478d530b"],["/Eight-sorting-algorithms/index.html","d86272e87aece4e14e917364bffe2ac8"],["/Encryption-Algorithm/index.html","d7e1c552f5b64ff19bc4db9145718c58"],["/Eolink/index.html","5bc1b6cbb8af9b2fcbad242e18d971c6"],["/Factory-and-strategy-mode/index.html","d58d4f10da25d5d37b83a37141408466"],["/Foreign-technology-blog-community/index.html","16a85a54864aa2965119b135215c0189"],["/Functional-model/index.html","b443c416a4807af3caa2756b6b2ef0ee"],["/Fund-type/index.html","07b6dcfdb01628fadd417c6988804ce4"],["/GPT-4o/index.html","fa24801e0c4687f40b15593318621b31"],["/GPU-medical-image-processing/index.html","7703f11adf08dbf9800b26349d8cf9bb"],["/Gemini/index.html","d230640450f48c315d377940221de7a5"],["/Generative-Model-of-Unsupervised-Learning/index.html","b7fcceac9a9735c4041ec14087a30368"],["/Git-Learning/index.html","30430eb98388169d7b85cbd10d3f69f1"],["/GitHub-2FA/index.html","ff268bf30399cdbcb44e2516762e9b03"],["/GitHub万赞，程序员必看操作系统总结！/index.html","fad4a4b2b4e9d9e6ecfa6b780f49666e"],["/Golang-book-recommend/index.html","dac5720f17dfce0bbcf37b23d4cf3c3b"],["/Golang-learning/index.html","9d1fe9855b189661944aba2878f46123"],["/Gradient-descent-optimization/index.html","af7a7d53b126e597e575ff032f1385fc"],["/Greedy-Algorithm/index.html","9494636b043686a704f645976b1d4db5"],["/HK-bank/index.html","092dde8e77f3bf1ce7907659f2567677"],["/Head-to-head/index.html","0a849d05050dd87d7cd3dc870377599d"],["/HexoPage/index.html","ce9f5bda404e4435342374e6c51b2ba7"],["/HistCite-Pro/index.html","ee588a695c2cd180a1e7bc934cd42ef0"],["/How-does-the-program-run/index.html","a2b531978a0ac3f9c583c06f9c5625fc"],["/How-to-judge-whether-technologyisreliable/index.html","f0733d5d30a7dfdd8ced51b8b2cbf5db"],["/How-to-learn-design-patterns/index.html","46e64c7035ca1145eaf7c43e04befdd3"],["/How-to-learn-design-patterns？/index.html","c61c890c255be8f8710dd28712303d49"],["/How-to-teach-yourself-programming/index.html","76438fa5412d3e08d7b6b5cc378203fd"],["/How2learn-Python？/index.html","025e6651b984d6147c0fef0a2edb0451"],["/IDEA-shortcut-key/index.html","5f4782e87770a4d589c9e2736cf52c38"],["/IT-interview-basic/index.html","36a3781e42fc5474bdb202c94af8e83b"],["/ITK-VS-install/index.html","c9629fbe62be3d1c192cce79e33e128d"],["/ITK-VTK-ItkVtkGlue/index.html","0865b487de4e21bbcc854e430468b34e"],["/Image-processing-plus-noise/index.html","20e22c3246d62901478820729e2af32d"],["/Inception-Going-Deeper-with-Convolution/index.html","1651d9a1b5efaa8f7fee671ae2da6d82"],["/Java-GC/index.html","29ebe3a263a15a6d21ec94a15db91fb2"],["/Java-Servlet/index.html","7d095a51f102e2de6f1ddab78fe06839"],["/Java-array-and-collection-sorting/index.html","dd4351f75d89f9e6ae38e306b631d06d"],["/Java-development-tools/index.html","a15fb5a7ad4c781f2ebad3492c8a88bc"],["/Java-eight-data-types/index.html","20f480c72def109656f0c20c951e1ed4"],["/Java-interview01/index.html","7f8d6a08f7dc1d2724d4c21f10cc133a"],["/Java-interview02/index.html","4d394a05d4b0a8140251d3410d3b7080"],["/Java-interview03/index.html","7d96933670bc34b19a1e2fa7a9fd58cc"],["/Java-learing-map/index.html","206251b39856929bb51ee6700cf862bb"],["/Java-learning-route-map/index.html","562f106fbce8179dde5152f377801aea"],["/Java-memory-area/index.html","7feba92a175673bc39049b950f787293"],["/Java-memory-model/index.html","41b078098a29f23451f6e7691d0dcacc"],["/Java-multithreaded-learning/index.html","c556aef4c9cef60a82f9258e15112a89"],["/Java-project/index.html","265297e9f91151e5406749e0dce6261e"],["/JavaWeb-Chinese-Garbled/index.html","d66cfe46494adf61059ccada2e8a0b68"],["/Java还是C++？/index.html","23c726232cb7b806d60524d3deda1ae9"],["/Kaggle5-step-guide/index.html","73d16f6bb60627df2c3bbe4def48e3c1"],["/Knowledge-points-of-Java-garbage-collection/index.html","782626861bd99b845be549db1175d2d2"],["/Layoffs-and-Hiring/index.html","11311b92fed198c224a557eea66a7746"],["/Linear-regression-of-machine-learning/index.html","f48bc267fab827c4520adca5d9a0e3e6"],["/Linux-Compile-C/index.html","7c7cd1e87f17c420bad3994f1151a590"],["/Linux-ITK/index.html","bde6fecf1e9e00e73d64faed5239636e"],["/Liver-segmentation-of-sparse-components/index.html","29a2b1d4f8b2c9f2c8ae54fbfc417352"],["/ML-EBook-paper/index.html","c3ffe186152920daf4019fbd8078aca9"],["/Map-uses-multiple-maps/index.html","4c821faa7cc91513c4c4418e62a80e54"],["/Marching-Cubes/index.html","5ac7b8e82424286dae4b2c8d18d060ed"],["/Matlab-Graph-cut/index.html","785c187badeae95a82b76cc86e5267a7"],["/Maximum-Likelihood-to-EM-algorithm/index.html","0af256f9a8ddb68e73ceabadd94d2a85"],["/Mean filter and median filter denoising/index.html","a67774505b43891c288959504ba05efe"],["/Medical-Data-for-Machine-Learning/index.html","2f0b2298cadb0894ee0cef36738e01ba"],["/Medical-image-analysis-deep-learning/index.html","3ed0579017d03af277488df08ba21183"],["/Medical-scan-image-processing/index.html","9af72327bac99285d01b38c9c94534c4"],["/Merge-sort-algorithm/index.html","a78645b2ce901137e6b89ec6f30eb7d5"],["/Monthly-income-2W/index.html","d707ffd965160412f0c87ab30d6b9e9b"],["/Mysql-database/index.html","85d4ee937c20041df73676765cec25c6"],["/Neighbor-Embedding/index.html","c63df20439a2502109e7078fa136ac4a"],["/Neighborhood-approximate-random-forest/index.html","1dd2b6c86ddee79f8a0265dafd7f6f25"],["/Net-and-official-documents/index.html","29991e7821fc1bfef36e3689641eefb1"],["/Netflix-VPN/index.html","53a8a0e425f7c4f467572aa44795867f"],["/Network-principle/index.html","8c661bb8c60cd42b7bbbec2f0811c852"],["/New-Hong-Kong-stocks/index.html","e9f134e54bfcb7fedcd85f9c8e38830c"],["/Nice-to-meet-you/index.html","07404370c9a7c20d890f544d8efc2eae"],["/OS-processes-threads/index.html","bf43ae6aceec89f13e8fcc99c0891ba0"],["/OS-run-environment/index.html","e4263ab35a56e343e6650cb97369489b"],["/Open-Internet/index.html","7b0363d49b8b6fba4520ec9033ade14f"],["/Open-Internet2/index.html","7c6107793314944baaadd2fe25196799"],["/Open-source-community-and-rewriting-website/index.html","ffb259c96f30ccbbc032c310ea04350b"],["/Panoramic-image-stitching-based-on-SIFT-features/index.html","1d7f42c832be4a00474eab7b70413492"],["/Parzen-and-KNE/index.html","adf6484ec06fb0b97b62dc306abe5e4c"],["/Personal-technology-blog-site/index.html","3c84dd718b7b242e84e75a08c1db3a65"],["/PicGo-Gitee/index.html","8bf259851cec5f9e8eff31cda2a74f22"],["/Programmer-treasure-chest/index.html","d7e0f694dbc034175098ee056786c7e2"],["/Prototype-mode/index.html","496f65accd9c05b6cf89ab0860fbb7ff"],["/Python-base/index.html","830bb7060a99d250d137c26efd05b78a"],["/Python-crawler/index.html","f3d7f413c96226f2f0f02be729d493ad"],["/Resume-revision-suggestions/index.html","ecc23b0e511ee65258c55789b6efd5fe"],["/SEO01/index.html","a3aa160b3433b560ca6974e8491727dc"],["/SEO02/index.html","686757e240999feaa575315c60385e8f"],["/SPHARMPDM-MEPP/index.html","075985470e3a45aa05bb7b7879996514"],["/SVM/index.html","c1c13d948dfaf15a9677f403078c9114"],["/Seata/index.html","539db41593fe5292a28f94337120137b"],["/Semi-supervised-learning/index.html","9215a4f6992cba737373b3063164edbb"],["/Sequential-model/index.html","ab4c48f6444feb6ffe170f4756c9ea7a"],["/Shape-Based-Human-Detection-and-Segmentation-via-Hierarchical-Part-TemplateMatching/index.html","9ab96f4b78b076658854cf15e7bc92ef"],["/Spring-basics/index.html","1c5dccdb855d11589c47bda22daf72a4"],["/Spring-integrates-hibernate-Struts/index.html","a5614d6770aba158c82954078f8476e4"],["/Structure-learning/index.html","c4a87f5591b5edf2d2d47d0f09bf1959"],["/Suggestions-for-self-study-of-computers/index.html","db351c45ca297a417f35cb856d72f93a"],["/Summaryof-HongKongStock-Account-Opening-Links/index.html","fb7fce03a3df8c6656fe985096b80d0c"],["/TCPIP-detailed/index.html","e68ba1fad71a50da6107bf120b3749d6"],["/Telegram-VPN/index.html","6bb983491ee226c22592bd2f372f28a7"],["/The-essence-of-shopping-festival/index.html","4b0b78c27f7c1c43d2cda147501ccb2c"],["/The-most-important-investment-in-life/index.html","1726364c5fae9921c4149ccf453ad744"],["/The-most-successful-nvestment/index.html","dddd34063652c9164daece33f6ff3538"],["/Transfer-Learning/index.html","0f83012d2a379866c6b261d9adcd194c"],["/Transfer-to-computer-major/index.html","c867328a3ac2556e6be201e133102211"],["/UNet-Convolutional-Networks-for-Biomedical-Image-Segmentation/index.html","f631010d69932062fa3b884d731058f4"],["/Ubuntu-install-sougou/index.html","96c8b2b77a5486f53ce50f760630bef6"],["/Understanding-of-paying-for-knowledge/index.html","9efa634609c4dd35ef7fa3f063a3643e"],["/Unsupervised-Learning-Linear-Dimension-Reduction/index.html","3b2a0e7a8f3d41f01818bbc59c9cc8e1"],["/VPN-HELP/index.html","5396b6b6c9f0167a9254a7b37df4c2f0"],["/VPN2025/index.html","1b2a0a96b4c836d72b494d432f2d0203"],["/VPN2026/index.html","b480197d174d007cba2ef7892367bbab"],["/VTK01/index.html","5d308dbc9f2cead7bfb40d1ae3a8a8d7"],["/VTK02/index.html","cedf1e10a3662b062132e3ecc5fcdf46"],["/VTK03/index.html","372aa8505eac3f8cdf4595fa7c04e491"],["/VTKRead-write/index.html","7490c7c475efbea4388ee38d49a06b7f"],["/We-are-all-good-kids/index.html","b7c6c03e64c018465fb883bdc619e331"],["/WeChat-80/index.html","9b1ee6b800662f1b5968bb967e954b7e"],["/WeChat-red-envelope-cover/index.html","82bc73a63889f709249d970a608ec418"],["/What-is-crawler/index.html","71a1134221ac1159ae75dd67fd81f4ba"],["/Win-OpenInternet/index.html","6da5b0d4322bc75688bcc39dd42c1ac6"],["/Windows11-2kfans/index.html","b4f2562a8074fa10196487483a4c08c1"],["/Word-Embedding/index.html","5e961237c6cfca8a6cef9d3e3785725e"],["/YuanShikai-and-his-Beiyang/index.html","69fb6f4909ad17a589574e699e9ceef1"],["/Zero-copy/index.html","8d1ab9694d736bff40eae49c56bb3a06"],["/about-keras-model/index.html","c0957d023213b2b1a07067b32174ddea"],["/about/index.html","ac9dbd3c2fe1b21b4f05119b755388ec"],["/algorithm/index.html","3af7e869bb255edd81cc730a475355cc"],["/alibaba-Java/index.html","92af3c71bbecfaf13488e2f85e9084b5"],["/archives/2020/01/index.html","d8149b81535f28f4369fd1cc3af636ac"],["/archives/2020/09/index.html","50a177a71535b5fb1c2933b974a18400"],["/archives/2020/10/index.html","11c1c4eeb0365ce9aa37d7c3d4fe4bab"],["/archives/2020/11/index.html","4a49a86376267d2ceeaf8cf5c185e862"],["/archives/2020/11/page/2/index.html","efb5583f3bd6f56a0ea9e65ce84a53a1"],["/archives/2020/11/page/3/index.html","2cd706d2346b2cc2bde66e577e519028"],["/archives/2020/11/page/4/index.html","1a702a42e872b72b4d77ec20c886280e"],["/archives/2020/11/page/5/index.html","a8ce7c3d61e5004b16d142fc57d049a4"],["/archives/2020/11/page/6/index.html","ae2a011f1d43b3e2816cabb9ba12f8b4"],["/archives/2020/12/index.html","5a0a49b092d3d5a34819c760d557dddd"],["/archives/2020/12/page/2/index.html","a426e7fa60b0d284912373bd6401818a"],["/archives/2020/12/page/3/index.html","9aa5fbb2656fc2fbbd604d32bb3c6dc3"],["/archives/2020/12/page/4/index.html","b9b578e70c9a938776dd975d1afe8877"],["/archives/2020/12/page/5/index.html","0364f5959454be645589c1209f66ca6e"],["/archives/2020/12/page/6/index.html","cf6ad74033524561873ef727b2ac06cf"],["/archives/2020/12/page/7/index.html","581253c7a249fee4701b9ccc90a8b05c"],["/archives/2020/12/page/8/index.html","847f70fcf65e67bc7c5b6b37cdeaf1de"],["/archives/2020/index.html","6f082ec5da88b11a804b39dc8534411b"],["/archives/2020/page/10/index.html","2db158de5a0d78c99549bf141a6a8692"],["/archives/2020/page/11/index.html","0bd21b29a5eb9ed9030b1946bac380bb"],["/archives/2020/page/12/index.html","f8e5e39e9c9241d67a6e688c4ffa47f7"],["/archives/2020/page/13/index.html","ca39a4a63c41668530e543d0fdec87cf"],["/archives/2020/page/14/index.html","4915a34efeb5624779515663634c398b"],["/archives/2020/page/2/index.html","fdbfd6636d82bb0b9bb46d3b9b2fbf4c"],["/archives/2020/page/3/index.html","56f9755282f8aea4a96a88805335e9c6"],["/archives/2020/page/4/index.html","d27deaa444f9c9bd5de80b395aa1c590"],["/archives/2020/page/5/index.html","a7d59479aab5c01332cf52e2cfa8ded4"],["/archives/2020/page/6/index.html","5797c47251aaf1f93cab0e4415268874"],["/archives/2020/page/7/index.html","f69c7249699fe3f14f9695b417e14228"],["/archives/2020/page/8/index.html","d414494f632cfae2ea910574a38a1164"],["/archives/2020/page/9/index.html","79cedad44f04179e0ea1588dd60fba6a"],["/archives/2021/01/index.html","e8ee6d20c1ca5c0e8a517bec9d386249"],["/archives/2021/01/page/2/index.html","8ae1fde9760bc44f60c3f2c75fd29768"],["/archives/2021/01/page/3/index.html","fd86c44dab0e231ef0cc991fd76a1446"],["/archives/2021/02/index.html","4b55ffb4439d473991874422feb029f8"],["/archives/2021/03/index.html","cb3b37b84fb4a6daa50edfe4b7b663da"],["/archives/2021/03/page/2/index.html","0000fe1a9b72c199ecce15fe0d5b519a"],["/archives/2021/04/index.html","602fa0bac7702bac69cdcfb3410df674"],["/archives/2021/05/index.html","3e5882eda187f8c5b64001222a84f7f9"],["/archives/2021/06/index.html","6cb492a435641da2b688507ab4f70b14"],["/archives/2021/07/index.html","1d16668fbd0953bba79d887cba567b2d"],["/archives/2021/08/index.html","0e3746be488853f19513ea6c3afe37ce"],["/archives/2021/09/index.html","021c63e1a3e59a4e0075aae54eada2bc"],["/archives/2021/10/index.html","4d9318ce3d2854394f9471fe0165ab22"],["/archives/2021/11/index.html","26747b45f62686460f9d86cd066a7800"],["/archives/2021/12/index.html","6a38e8bab0a302efec4000baa8d2ae22"],["/archives/2021/index.html","2e06bf68a37adbbd07734e09f236f3bb"],["/archives/2021/page/10/index.html","fc037dce3fe6e9d3964bf68ce71b9ff8"],["/archives/2021/page/11/index.html","3b74446607e1d10179c65127a00e9e50"],["/archives/2021/page/2/index.html","a450092f5136415e15a3cd8b32594668"],["/archives/2021/page/3/index.html","4db29ff07ea9657965f98f25ef5bac95"],["/archives/2021/page/4/index.html","bcb0ee8d45e6de8154e0718579518a84"],["/archives/2021/page/5/index.html","88000999a4e35c7d3d8bef32e5463c45"],["/archives/2021/page/6/index.html","8cbe51e81d7bd3321c3213c4e6086b95"],["/archives/2021/page/7/index.html","54dcee1f4fabab98d4a0a8604d794fab"],["/archives/2021/page/8/index.html","7dcbb15068cb6dfac7aca82da055d4e3"],["/archives/2021/page/9/index.html","30400f86ec96fd340e105ebd354ea85c"],["/archives/2022/01/index.html","af156715c4f0d64fba1896da8870731a"],["/archives/2022/02/index.html","f6de8c4deee75ca476a2b2d5ea23ddc6"],["/archives/2022/04/index.html","55ce50a6fdaedbe2d9c2e05b4e2349cd"],["/archives/2022/05/index.html","6ed1e5e7b366c024b6e6f983950f3c3b"],["/archives/2022/12/index.html","20909898df3c380073c17b5761350f87"],["/archives/2022/index.html","dbee514ae48ad57d4ce6994286f16e5d"],["/archives/2023/01/index.html","b8033030a9ae28a05591f77017db423e"],["/archives/2023/02/index.html","14cd77d4ebaafedcae68d05fa6e41da2"],["/archives/2023/03/index.html","7ede9362dade178ecf1f654473785ab1"],["/archives/2023/04/index.html","997b5f52f925e7e8693c0c49aec76ee0"],["/archives/2023/06/index.html","c4b1d10281e9471b83c8e1717c16ec6b"],["/archives/2023/08/index.html","fa9a3565d52f322de8bed3a0ff5eb097"],["/archives/2023/10/index.html","79e16d43cbbba9c70dc7098b9aa6aceb"],["/archives/2023/index.html","6b003113c1a49c37cfcb17224682f30e"],["/archives/2023/page/2/index.html","f915cba2d5f0b4b7f0636f6edb8a0d7f"],["/archives/2023/page/3/index.html","d0be68c5eed4554665ff6a3be50c8605"],["/archives/2024/01/index.html","3f7e6f652123c596a2f874d7ee45a176"],["/archives/2024/02/index.html","f33873ca3b7736fc7f714c7ef878f2c6"],["/archives/2024/index.html","85b53dbd980eed1955a00df5990b47fb"],["/archives/2025/06/index.html","a9b2e31923db8a2803c0796f42264841"],["/archives/2025/07/index.html","b091428456bafd437ad01ef513b0d90a"],["/archives/2025/08/index.html","87c44374b361b53bad2ba5b5be77557d"],["/archives/2025/09/index.html","5d721fd417eaab6420de9f9d812e4879"],["/archives/2025/10/index.html","a81b545c16758cc7e615dff4311d297f"],["/archives/2025/11/index.html","736061b82bef1e4dfd4b8b6841a1122a"],["/archives/2025/11/page/2/index.html","a189f779dfdbab143b3a4b649d2219a2"],["/archives/2025/12/index.html","c8f6005917ec6d52ffe5ecc0712a53f4"],["/archives/2025/index.html","154ba55a59835158f12bfe0a335c3f68"],["/archives/2025/page/2/index.html","4b0c770a13f11571a387ac6851eb3d16"],["/archives/2025/page/3/index.html","4c433d8d05baad229d5d78b066f307a7"],["/archives/2025/page/4/index.html","c9bab6922050ebf54416d784b6c8bc6b"],["/archives/2025/page/5/index.html","2af0040e2d649d82e3cf0ea4de2c12f0"],["/archives/2028/02/index.html","ded210b8211b623ada913b597beb4fd7"],["/archives/2028/index.html","37c48096dd766e0da12ae864496a92f5"],["/archives/index.html","1b8bde2dcef82d192b28fe219c37c89b"],["/archives/page/10/index.html","d805d8d47521ab8ccbdf19a76dcd13dd"],["/archives/page/11/index.html","fab061a5f8ea7a2dcc16983a5324049b"],["/archives/page/12/index.html","4832a694718faeb693be3893599884a7"],["/archives/page/13/index.html","8a68821700091c69846e8ca08e77637f"],["/archives/page/14/index.html","b46ce720e737f8ce02b8167c603c065b"],["/archives/page/15/index.html","af47d474acfd2231b2305f476a811f92"],["/archives/page/16/index.html","db3df5d76edfe535e1637406e5362711"],["/archives/page/17/index.html","072947ede17556cb261648a7303b274b"],["/archives/page/18/index.html","99dbebdf0a07d20f28e444da138b6197"],["/archives/page/19/index.html","4dc356d8727709cd252e07590f96937f"],["/archives/page/2/index.html","b7b31ec66fb24090db98b09cc6904fcb"],["/archives/page/20/index.html","02e7cb94516b53f268d63b1ea28bdef3"],["/archives/page/21/index.html","905ddbe5c8df1c03e0a452ae11605c78"],["/archives/page/22/index.html","898e6625d649411a9d5cc8717b4c6575"],["/archives/page/23/index.html","577584a8bfd3261bacd818135cf7342b"],["/archives/page/24/index.html","87ceb43f123f6e010b6065748d0b51e8"],["/archives/page/25/index.html","63434e47978701cacf72a7ffbde43449"],["/archives/page/26/index.html","cb0680621ddf5efe0e50b1bd3957c419"],["/archives/page/27/index.html","17076bfe9b6f320228af3ed9c24ce89e"],["/archives/page/28/index.html","da6c2b1df1255dd80a155414a582d52e"],["/archives/page/29/index.html","de6c77ed9e966653a7b63dbfb13642a6"],["/archives/page/3/index.html","dfba641f7075e3eed7a794b79f7bf421"],["/archives/page/30/index.html","aaa9c91cc8ec720cb70e5bfc94ffabeb"],["/archives/page/31/index.html","20067e30c5562441617f5c8e2ad026c9"],["/archives/page/32/index.html","7329a13dc191ee399d737abeb5080b23"],["/archives/page/33/index.html","e123a118fc651d2bfa9ea8ddc9eb3271"],["/archives/page/4/index.html","9b228454549c76e94796d94d92864bf2"],["/archives/page/5/index.html","31c7358d1bcd1d246077623ecbbb4e46"],["/archives/page/6/index.html","f362ef190a22a5c07cf6534cff49d9f9"],["/archives/page/7/index.html","0614dd96d4865b7c2f19179d6cce4a09"],["/archives/page/8/index.html","a54b11aa24aad604598ed91369448329"],["/archives/page/9/index.html","e3f4ae45b85e0763667875568490dfb8"],["/baidu-search/index.html","1cdf98b467a6dee5b58ca2e472cdc468"],["/baidu_verify_code-Hh2fKNlEB1.html","b86337d9babf91727332bc5dd66b2a36"],["/be-a-programmer-instead-of-a-code-farmer/index.html","17fe011dda63b1415d3c5508b63d8396"],["/bought-a-house/index.html","3e01269b87536ca70f11321fb060698e"],["/categories/C与C✙✙/index.html","3db67a7812e6ca6fa7af0efc90cac5d8"],["/categories/Go语言/index.html","9cc28b4c9baa97b7fb6bc323d4943235"],["/categories/ITK与VTK/index.html","a8ab9cb7b48081f6431df35a7183b3c8"],["/categories/Java/index.html","7ed126cbb636fc4ee1cf208fd4b385e7"],["/categories/Java/page/2/index.html","4dcef1e6809834b6349fb189540ae716"],["/categories/Java/page/3/index.html","8b24ef6ad7abb8d3ffa0e4294f474bae"],["/categories/Linux/index.html","8efba8100cac4a9b0041d1870df24a21"],["/categories/PLC/index.html","c3247f124b4a67a0d0a9cb17d70e0316"],["/categories/Python/index.html","9a9e313fe6e1c0b2cd9c5b7fc81e5340"],["/categories/SEO教程/index.html","00ba3c9f54debd4aa91e3bd7cace5e17"],["/categories/index.html","845693c751317488377b41c01ce12db7"],["/categories/图像处理与机器学习/index.html","0069e99b000b5f420f70e2b0f2ce1399"],["/categories/图像处理与机器学习/page/2/index.html","cc048a74cc8e1e71d89493db55b38d6c"],["/categories/图像处理与机器学习/page/3/index.html","aea003892530ec9e68c1654eec891b51"],["/categories/图像处理与机器学习/page/4/index.html","9902ff432ab93cf79361dc26843840b4"],["/categories/图像处理与机器学习/page/5/index.html","c1a47039fe2d155debfcc2c6c303cd24"],["/categories/图像处理与机器学习/page/6/index.html","fc8c8f7ef7dc8568e41a566bc910f341"],["/categories/工具/index.html","6555267bc89cf593f53de011c526994b"],["/categories/工具/page/2/index.html","17f2d7a51e7cf99cb196b2a24d9e7ee9"],["/categories/技术以外/index.html","3b0db01501c98702a0eb9537e3ffdcaa"],["/categories/技术以外/page/2/index.html","e6a7e4cefc592a817b705af89529d225"],["/categories/技术以外/page/3/index.html","6d902be44e7fc96b57975ef76e99ad07"],["/categories/技术以外/page/4/index.html","4363de606964c8ff1e0441c39ac1d70e"],["/categories/技术以外/page/5/index.html","a7cf7d7fb4fd4645f22ed44358dc1257"],["/categories/技术以外/page/6/index.html","cc1e5d8f419804077b2b02540b7f78df"],["/categories/技术以外/page/7/index.html","636b8c6a0b230e451ccf9f32d9f9f64e"],["/categories/技术以外/page/8/index.html","7bfe00f8613776a1212a63044f746c75"],["/categories/技术以外/page/9/index.html","bc2a6eff26ce26d2a6593c9b13f39d06"],["/categories/数据结构与算法/index.html","744f956b0e09d90257cb2c6d7799cba6"],["/categories/数据结构与算法/page/2/index.html","141f072d76d8ea662f97a4de06c392b2"],["/categories/科学上网/index.html","9391d54a806069877145c490b745e4b8"],["/categories/科学上网/page/2/index.html","f6d09e35d2b3930d55d4f235758fe4c2"],["/categories/科学上网/page/3/index.html","96925e00365766b2ee4c96544bb37a13"],["/categories/科学上网/page/4/index.html","42c20b0a010e806e169d298a6da21542"],["/categories/编程经验/index.html","cac86074b37c6507724052eba75b89d0"],["/categories/编程资料/index.html","16236b6e38a9a74ee94699e7f0b3c219"],["/categories/编程资料/page/2/index.html","2fae111314b2f7d220861a7c827cc06a"],["/categories/编程资料/page/3/index.html","7e4d600c313d2e04327192044392d22c"],["/categories/编程资料/page/4/index.html","6c92464a9576426c82753c83013edf3a"],["/categories/计算机基础知识/index.html","68a883ae931e94886054ac80ad5fa8ba"],["/categories/计算机基础知识/page/2/index.html","f2390bcbe5cac11892588881c733f168"],["/categories/设计模式/index.html","5ccd5271c790e701b2c413392a825b67"],["/choose/index.html","c4a90d51b83a85504fc9f867f6fb7da5"],["/choose2/index.html","90e7fc6b5eeeff8aa75029f9fc6e16be"],["/chrome-crx-intruduce/index.html","d27ae3349bce8ebdfe5fc91a976128e2"],["/clashvpn/index.html","7d47a91162eed4f75f1d8ed2c1e8c5d6"],["/coder-blog-website/index.html","73992647fb51af1bec1bf0071dd9172d"],["/coder-source/index.html","32c3f5f4305a04e313e64bfe24dcb306"],["/coder-videos-website/index.html","7e3929287d262190d5789ebde2f41001"],["/computer-book/index.html","9400d5328d49dac7181ade7ce605e315"],["/computer-censorship/index.html","41a7754967bd78c56ef06c22624c2880"],["/computer-network01/index.html","ab4164ef0ea97a58e290607ea1e5e13c"],["/computer-network02/index.html","ad7cfc84d48d89eaf74cf637e754806f"],["/css/main.css","bc32ad34ec4990d934c3c647bdb62f79"],["/database-Mysql/index.html","eb601af579d5787957aa090a1fd9f706"],["/eclipse-lombok/index.html","e8e17d43c7f61b46a6d01c586bd6e9b8"],["/fully-convolutional-networks-for-semantic-segmentation/index.html","70dbfc0c12b27c25bb5e530150983f19"],["/great-firewall/index.html","b658a74603090d6c86cf87bcd70da2cb"],["/halfrost/index.html","bb4da418637ab28ec735176891b33c85"],["/how-to-signup-chatgpt/index.html","fa7a00dc056207cafa84964b398761ed"],["/how-to-use-Gemini/index.html","8ae21b5522cdb4d8d2670ab4b6a95165"],["/index.html","1c58703bf29bc0b4c81b3b88739362af"],["/ios-open-internet/index.html","0141f34c61e70c97c3fdd4d693beab60"],["/iphone-open-internet/index.html","b1f00714162207d8064438cf6ec04b89"],["/itext-makes-pdf-form/index.html","fb8cb1e19ccf12a1340e6ba63e66e8da"],["/java-Set-Map/index.html","e2df35507cbaec4952802e28cf2509a8"],["/javaweb-server-error-codes/index.html","c1e8215a470d539d8fe2faa51e9bc048"],["/javaweb-source-code/index.html","d0fc11ece443b8fed181e449c4d7c419"],["/js/lib/busuanzi.min.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/js/lib/lozad.min.js","47904d34a224931dd1b615c59a3dbe3b"],["/js/lib/prism/prism-coy.min.css","0ccad54d95845901ead59bfd3ecceb14"],["/js/lib/prism/prism-dark.min.css","a4711d2957d6605eb5682bdd228cf123"],["/js/lib/prism/prism-funky.min.css","efedcdccd7a9ab342d2d9cacd24920af"],["/js/lib/prism/prism-line-numbers.min.css","38e22e790c279bb56f9ec4b90a2a2d58"],["/js/lib/prism/prism-okaidia.min.css","5ac6f9de996fbec68aaa106dfb16e061"],["/js/lib/prism/prism-solarizedlight.min.css","ecc7e64d039873ffcf7fb27babdaeb5a"],["/js/lib/prism/prism-tomorrow.min.css","456af2a14ae4f5089939d5904ac40fe8"],["/js/lib/prism/prism-twilight.min.css","ebb5c355332a8cf9a1ce37a2a69d678f"],["/js/lib/prism/prism.min.css","a5234d614834658887cec6a9515890f8"],["/js/main.js","052d2b299d9c750afea8df0b802ab7c1"],["/keras+TensorBoard/index.html","aa6ac9d479390ccbe89bc018068759f0"],["/keras-beginner-guide/index.html","737aad23d3738a10700dd1f6162b4a14"],["/kmp-algorithms/index.html","31c569579a9924dc06f840b831158b4b"],["/leetcode-Java/index.html","f7ca94fa0693975653a625c6ce41ebf2"],["/links/index.html","13dc92381d85cf9f8db2ab0660a155ad"],["/linux-java-opencv/index.html","9467507fc7da3f39ea59c175d50c2132"],["/msb-source/index.html","de48b6011b16734f4af6e5a64e8e1cff"],["/online-BUG！/index.html","accd86acc6cd7b832918a2fcc6ff28a7"],["/open-app/index.html","c6a2686dbdb63d0c877708da6d7850e4"],["/page/10/index.html","3c2b1d6c866219665ed4e531550ebd03"],["/page/11/index.html","5b95220e44232e8da5713bc5135d4a0f"],["/page/12/index.html","7734e7d7c36f50c06a9be492a2790f9d"],["/page/13/index.html","d90a6dd548b28855221bcf1f106ea2ac"],["/page/14/index.html","57a82738e167bc7b915d7ca0a54946e6"],["/page/15/index.html","f6247e9d9b6ddfc94dcc286df1460442"],["/page/16/index.html","f4b2f8c81ff863469110d8db3df80d4c"],["/page/17/index.html","4555877e740d52ba8dbef64256519486"],["/page/18/index.html","c1316bcf9eb5e21242f7de7be3dabc77"],["/page/19/index.html","254cca724f3baf60586785d8d65842e6"],["/page/2/index.html","d0cd2f712c1a9b7201796a9f21f32eb7"],["/page/20/index.html","a5dfca619a845ef94b66763007466fb1"],["/page/21/index.html","4ef1c093ce09785d3862520685f44395"],["/page/22/index.html","25f678255833f48e7373665afc118c3f"],["/page/23/index.html","1c34b7f1e61d36290c47128c67c26577"],["/page/24/index.html","eb5fd0a619521f9e409502b86558469e"],["/page/25/index.html","470d0d625a10d6dc4acecdefd0c4938f"],["/page/26/index.html","0298f7d440555616d40b932636f4a423"],["/page/27/index.html","22e87e63a81461c1d75ed7b57ff2d432"],["/page/28/index.html","f5e787b37b7cedc3d06efdfd3abbd4f6"],["/page/29/index.html","265704d28d14059ca7897952476cb139"],["/page/3/index.html","65b6cb06be72f07695f01a7481f3535d"],["/page/30/index.html","df4c2555460c7b0a37d3c5cca20cc1c5"],["/page/31/index.html","f4366adef1b294e9e8dd42e5d958b7df"],["/page/32/index.html","ed21cea851fcb10e04238f08cb9f1967"],["/page/33/index.html","bfde115a249c8ce85c4daddd3df2c872"],["/page/4/index.html","4da7b49eec2d5ce045ac5b1babfb7dba"],["/page/5/index.html","2686a02e339762383097010ca5b4aa41"],["/page/6/index.html","08e98b8c73f2f2d0ba9b89a4b09c1af4"],["/page/7/index.html","88272de473565827f2ca1b4766a635c3"],["/page/8/index.html","e89f7d9346be40457dafa8b213272948"],["/page/9/index.html","14e11e83f5ecd22bad27816df8d0c567"],["/pandas-data-preprocessing/index.html","916bdadd526c8686477d2a295e8bbbcf"],["/phone-win-open-Internet/index.html","c3f7485ac98b7e35677bc1d7fe19d0d2"],["/popcorn/index.html","213062e8b56bda0079b1a29115d911d3"],["/python-Blog/index.html","d271265c021fe8346c46171ae389d2e8"],["/python-yeild/index.html","a8fbc204e3ad650898674529fde36e9c"],["/python爬虫教程/index.html","a93f08aab6846592b3ad0e3991531328"],["/software-copyright/index.html","14a790528ed720dd4454bf82130f6ac3"],["/sw-register.js","12a5a82c91d014655bf728e6883264d9"],["/tags/AI/index.html","813b3d5aa6edd686831db2a79e1534f2"],["/tags/API/index.html","462643029fe330bf15ca5035304d6387"],["/tags/C-图书/index.html","a2c5798ff699bff61d7476381a2a9c7d"],["/tags/C/index.html","0db7e25137b131fbb4fb4371d40580c6"],["/tags/CNN/index.html","27aed43611c0d69360f6a8655e8450c3"],["/tags/Chrome/index.html","c080ffcdca2dab255d7d51c1157bf371"],["/tags/C✙✙/index.html","37e2e7087cd23ab957acfdb859a2aa3c"],["/tags/C语言/index.html","38edb2f9096e46a5814c5d9ddd6c02b1"],["/tags/C语言图书/index.html","d2dedd2594873cae7835634a8c9e940f"],["/tags/DSN/index.html","db5fec382de255337122d58d51ec2081"],["/tags/Dll/index.html","29984b4fb753502c200823388626ef2e"],["/tags/ECCV/index.html","77a0105eeb751115018da75884618a46"],["/tags/EM算法/index.html","4e5476b373cd63159c527e244dce56e9"],["/tags/Eolink/index.html","d5b0c39e6a97d03a7691a38351109106"],["/tags/Gitee/index.html","773dd7b136b97cd76a7df00a70aac5e8"],["/tags/Go语言/index.html","f35823fcf2a4b90a4f33e9675ab5bab1"],["/tags/Graph/index.html","9e3b9407dd62e725fca70dd1236ce809"],["/tags/HTTPS/index.html","f9d6a0fc6ca1acd80e4d8152f299870f"],["/tags/ITK/index.html","dce9de85c7b7d9598b16729d80e6fed5"],["/tags/ItkVtkGlue/index.html","7e89606422b78ba5dd0a5992432110f6"],["/tags/JMM/index.html","7621aa2519618306e3d872286362b1f1"],["/tags/JVM/index.html","f0e148f86890c1ba2e81282fa126b523"],["/tags/Java/index.html","a166e36673708a4908fe045c42cbce19"],["/tags/Java/page/2/index.html","8eac537186e4fca0f1f02714faae7cfb"],["/tags/Java/page/3/index.html","b745080e7732a4f6ecdc5bae95501d5c"],["/tags/Java图书/index.html","c198fe7f853d3e1bae26b3bca26fcfd6"],["/tags/Kaggle/index.html","a9d785afc9ce71eda5923d09116e1a8b"],["/tags/Keras/index.html","a2a1a701f8ba11853ed10dec9182c614"],["/tags/Linux/index.html","0095c7fe7e6ddac7f81481dfd35054af"],["/tags/Linux图书/index.html","4fd4d51f604e889a03e0afbc219b55ae"],["/tags/MEPP/index.html","1b96b03ac921899fef90d07075fe100e"],["/tags/Map/index.html","0d0d7263452c5076765542a28df42973"],["/tags/Matlab/index.html","a29fd84c436617a04a46077111a64002"],["/tags/MongoDB/index.html","6da3a4a0493111e42b1cac5a11cefdaa"],["/tags/MySQL/index.html","c2534281cf52ff37739eb9fa5054f1f0"],["/tags/Parzen窗/index.html","3142f404231d698afd6b8e9d8c07bbae"],["/tags/PicGo/index.html","4bf2814e647723c017ca48d6063efe36"],["/tags/Python/index.html","d8cc85111665f09ffae5266c83bc49b0"],["/tags/Python图书/index.html","efce9fd2d2920dde9812f3fbdec76819"],["/tags/SPHARM-PDM/index.html","8ac3e32ff9c127701a38541ff03c1ea5"],["/tags/SVM/index.html","1f2e4e340e9f1a8a71fa1242789bdd97"],["/tags/Seata/index.html","bfe6c2f51a80209007645ae1758be2f4"],["/tags/Servlet/index.html","0bcb30c310e747c7966dc6fad9eba9da"],["/tags/Sping/index.html","4bfb582c53aeaf7971c6e7c7429f2552"],["/tags/Struts/index.html","d80b0d1d98ea4604fc39d13d739757ee"],["/tags/TCP-IP/index.html","29c243d0e8e87c86ef62c464cff86edf"],["/tags/Ubuntu/index.html","793e056dc46b66448f604d6a272c0300"],["/tags/Unet/index.html","25d2287544d0e2a02e8ca6f8eb710154"],["/tags/VS/index.html","a1ac6ef6891189096ea8ca2fb9716245"],["/tags/VTK/index.html","84ae7bddd557bb9c7e35987c6158a35c"],["/tags/Windows/index.html","c5968737f5de303912988e0b3be3e548"],["/tags/edit/index.html","892644597e2321e2f1b389a8b94061c5"],["/tags/hibernate/index.html","378745948bdcd5a8ed72ab7e6f98e6b7"],["/tags/index.html","3dd6ef44557899b2f4be459dd349723b"],["/tags/itext/index.html","444e12f6dabaa09c85a52a48b349869b"],["/tags/jdk/index.html","148381516117e737ab55c35599f2edb9"],["/tags/kmp/index.html","7e4f72af0704d029f04c5892c99b96c9"],["/tags/k最近邻估计/index.html","d994d9fee0b6136c9d0e2463c85f0bcb"],["/tags/lombok/index.html","8feff41d8f3082305fee8116c450af6e"],["/tags/offer/index.html","a14d579ca7b970ae4f283ac06ab826ea"],["/tags/opencv/index.html","7813b057f99ac1326d6f45e06079b78d"],["/tags/pandas/index.html","5c4f168e1d42290f66fcc3c0b4d8fb4e"],["/tags/string/index.html","dc9640b675bd444295dd7e7d4f880795"],["/tags/vim/index.html","3939f5d1248540fd7ea39a0a2dd5360c"],["/tags/vtkPolyData/index.html","5f30c915ff43022d58379b7bed886ea0"],["/tags/web/index.html","af24365219292209c932a0de60c48d68"],["/tags/xshell/index.html","bcaa74aeea6209de3dc73729d76c873f"],["/tags/yeild/index.html","1209df08955dd0d11c4873f9fd45cd9c"],["/tags/互联网/index.html","236de6ae0165f2c2450d928c4c14ca47"],["/tags/人工智能/index.html","0c39c080c53936599642bae52c16874b"],["/tags/体绘制/index.html","7a7f1494affc469f7539307c9822f91e"],["/tags/全卷积网络/index.html","b67d965baecd9a67582d17598d489e6d"],["/tags/公众号/index.html","3e5cc1d45313323895f37fe6294b1cda"],["/tags/内存模型/index.html","0f949608be1e1fe739c5cf2de189ce57"],["/tags/内推/index.html","72a5e1dd381a1eef33f7d60aceac2d6e"],["/tags/函数/index.html","d9b85f96b86dfb05f1b1d029b13c1789"],["/tags/分布式/index.html","c6da8856ab88def4c04457bea1e33be6"],["/tags/加密/index.html","bae468658a537411bad1ca86a09f2c9f"],["/tags/医疗图像/index.html","2133a823b8d63db8740288fd5f157458"],["/tags/博客/index.html","c6812ee48e34a1a25f6dafdaa3c9e57d"],["/tags/图像数据/index.html","170c7ec601cc6de028c20475c577201f"],["/tags/图谱分割/index.html","bd5d1909cb6e2a454cf57c85401987be"],["/tags/垃圾回收/index.html","5d0baa2e4738bfc030279e4788d25a35"],["/tags/多线程/index.html","9ec309cbb4995a0f4868d9082b0bd999"],["/tags/字符串/index.html","d9ce05bfe7f3ccd7e868c78ad00ec092"],["/tags/工具/index.html","f433e9ffef527b83d637bca1ba2308fb"],["/tags/工具/page/2/index.html","e0d30db669888ae5354ed4a5bad989eb"],["/tags/弹性形变/index.html","9019160c15c21e51a71e591a2935a1ff"],["/tags/排序/index.html","1ecb5b07cce4942638bbc2c4e865c538"],["/tags/搜狗/index.html","d0aa7beeeb03d6876e4941614910cbea"],["/tags/操作系统/index.html","352ff2bab6b00b08de31dec8e4a119ff"],["/tags/数据库/index.html","32bfdaebad3c5018866d168b8243051b"],["/tags/数据类型/index.html","fa69baa06a1bf514cc1f4738a5a04d97"],["/tags/数据结构/index.html","602545e388be39f385da2dcc666f67d7"],["/tags/最大似然/index.html","621b2078132d5536bcbec6adb5a95488"],["/tags/机器学习/index.html","f36f8ff2eb95e1a366519a8fe6526b5e"],["/tags/机器学习/page/2/index.html","0313fcd218c10d7d06fdfde9fd235b2b"],["/tags/机器学习/page/3/index.html","5a4736676cac5fe2a1f16943523f5a9a"],["/tags/机器学习/page/4/index.html","c651956cda1883c48a2a0b52ab3de0b7"],["/tags/机器学习/page/5/index.html","dd26782e8555f68ced5f1aa6acb76dbf"],["/tags/树/index.html","157c635641ddf6fb69a957b454b1c50a"],["/tags/框架/index.html","b430cf62c9b51f6b386e4c347fcc2713"],["/tags/求职/index.html","329dbcd046387e32075dc9a99407aa80"],["/tags/汇编语言/index.html","3d623d77e99072dd307fa2eb0d9f70cc"],["/tags/深度学习/index.html","d74eff51001cfd0fcc2f589a194166ac"],["/tags/深度学习/page/2/index.html","3bed81f4d78e278fa3a39916ed41592e"],["/tags/深度学习/page/3/index.html","66079f15b6142176226da4530fb572dd"],["/tags/深度监督网络/index.html","4fedd1d27627ccdb4bc1bafedabd4bf4"],["/tags/爬虫/index.html","e5b2f92f897896301e62af19dbc183a0"],["/tags/电子书下载/index.html","11a37184c3fb8a1c7001d37456ad6edd"],["/tags/电子书下载/page/2/index.html","28968434841c918c5d08c142c6ddf089"],["/tags/程序员/index.html","c6ac3dedd44845db35ed1aee7217adf0"],["/tags/程序员面试/index.html","15f3676f0872b708725a76a6f514eb3d"],["/tags/简历/index.html","a0541f694d9baa3d5e1f78ad8afe78a0"],["/tags/算法/index.html","6048aabcbf876cac0f073c45ea6ace38"],["/tags/算法/page/2/index.html","c2fc65f3749448a6f97846bf7ea6ad88"],["/tags/算法/page/3/index.html","d1bfd0269cd81e7e3fcee774ec1c8825"],["/tags/线程/index.html","a6d9e9860c88e1d694d736863dfdc7ed"],["/tags/结构学习/index.html","029f70652dfac2bf4f41de96efe63975"],["/tags/编程/index.html","e27d2ea477c5ae48a7f6a8f310d466b1"],["/tags/网站/index.html","751f36884bfa6a508aba843d43022131"],["/tags/网站/page/2/index.html","e76133771ef49f6fe30eac742bb9dbd6"],["/tags/网络/index.html","8501a8811b6ad41e7c496886fe835912"],["/tags/网络原理/index.html","2f469c584cc4b5e9a205ae5460bbd5f2"],["/tags/肝脏分割/index.html","bfaeec4960ec90fe939e78c20c25a2a8"],["/tags/计算机/index.html","5af85efea86a6c22ed007495a69a54d6"],["/tags/计算机专业/index.html","c90f54ec2f2880f2b1ad22540ef46a37"],["/tags/计算机网络/index.html","8b7d781f36eb8164238ad7af64a376f2"],["/tags/设计模式/index.html","13372d4ac847c435be50615d06ef4f73"],["/tags/贝叶斯/index.html","60e319da5c0a210f9346bc2341e0bc3d"],["/tags/迁移学习/index.html","d42887682a1afaf50efdb15aced636b7"],["/tags/面试/index.html","f0d22e35644eebc3acc97341965dde11"],["/the-way-of-pragram/index.html","c059ba3d1ff047a902a7ca302c5a3302"],["/untiypro XL安装/index.html","75dd5bd512163735d2bbfb2048acea2d"],["/video-websites/index.html","88b6d266ad14370a18fa70c2b3f8edef"],["/wechat-fans/index.html","d10dd9f454c486b556565a5d7fea4fae"],["/window-run-VTK/index.html","5c9034d717c0f43a0752804e4c08605d"],["/xshell-connect-Linux/index.html","fd6bbfe6a1db660cc55df7bbd5e28d02"],["/‌Accessing-the-Open-Internet/index.html","52a756619cd6d5c5bb71e30ab8826c10"],["/《Java高并发编程详解》，去大厂必看！/index.html","f0427c523e68b7360be8769620bc7006"],["/一分钟没了 1.5W 。。。/index.html","24e194db1f75123df374f13e30d29337"],["/一条高产爆款内容生产线/index.html","1f93c2f8dc59f2381ce8d0b4c1bac2e3"],["/为高考学子推荐的六个就业前景广阔的专业/index.html","102a6556c276199946e5f3766748703e"],["/互联网赚钱机器---社群/index.html","09eedb59d48e3605fd6f28a93915bb3a"],["/你们常用的工作方法和思考方式是什么？/index.html","237670f21abec4e2185e3306564997cf"],["/关于环境配置的一些事/index.html","f6322e28bd73ae59ea8c092d0c0dd038"],["/准备了19w！搞事/index.html","912b8ac1fbc6b92b4ff559da0925e0b7"],["/几个很重要的感悟/index.html","0b4cdd4008b6eb922945da3702aec6af"],["/分割ROI篇/index.html","441aa303eb606fb2cfccc35e9e92115e"],["/分割精度说明/index.html","c7edffec8962861a5d1d6ea426671ccb"],["/分块程序执行/index.html","a3ff2867159112747a36e8d7e7da65c3"],["/加班公司黑名单！！！/index.html","64790c4831e318ac5baeafcabea5662c"],["/卧槽，上知乎热搜了！/index.html","63a2798c59a1995773c8087234795233"],["/卧槽，我的小破站爆了！/index.html","7b878105ca31d69d89d4c8018a988e24"],["/卧槽，我被盗版了/index.html","b9047401640ee57157522dbb8df2f4dc"],["/卧槽，还有985大学在大一上C语言课？？/index.html","ee32ebf8cb561a816b8c6e9b4219037c"],["/历年微软面试中出现的leetcode算法题/index.html","dc24399862a62cd151d42c0a76d1c57a"],["/去特斯拉试车了/index.html","37d79415cfb818833e96fbf9eace03c6"],["/吃苦的三种境界/index.html","02547cf9733eae24409c3b8f4cc8c2b5"],["/哪本书适合推荐给 Java 初学者？/index.html","6e8ae37c2a468503d20918f6cfc90335"],["/哪本入门级的学习数据库的书最值得推荐？/index.html","db99d3646431cb91adce89f40ebdaac3"],["/国内外常用的AIGC模型/index.html","03a23b633df2a5cbd3934ddecdc2de43"],["/国庆假期/index.html","375b0c2b4abb6282ff476ef63363fec6"],["/图谱程序字典/index.html","e4d518faa64ecbef72567e8f012d3345"],["/图谱训练与分割/index.html","e47b3333102bce5247ad6dae704f2340"],["/宣布一件大事/index.html","a1e6dc837b6b3ccd76e1566d8d4d48e0"],["/小鹏P7i试驾体验/index.html","be7f1dcffce01b71e522afdc290aca19"],["/微信PC版3.3.0内测更新，电脑可以刷朋友圈了/index.html","3ac538842cd9567a89281149fb116d76"],["/怎么更快的赚钱？/index.html","c98b702f8adec06ce9371729667c7c9c"],["/我毕业了/index.html","a917206f654e29533458d704853bd5d2"],["/我！真！的！找到了！爱上学习！的方法！/index.html","aae3fe11ac9c47e52f5791bea60dc299"],["/户口的意义/index.html","b8f192712b6be4e8f93236c02eca6b71"],["/推荐两本经典算法书/index.html","f1dbb716f867f1ea87cae594fcc2c207"],["/推荐几个在线学习SQL的网站！/index.html","38e5b632630de5aa6441635d06c3e587"],["/搞了一个程序员成长晋级社群！/index.html","58174f004a02a995ab424e569e841b10"],["/摘抄/index.html","811c7d7462fdf760cd397bd1ce3b95a9"],["/暴跌30心态崩了/index.html","68e0a0849983c7b2a97dd511bb5d9c0a"],["/最近很火的ChatGPT到底该怎么玩？/index.html","8c04ef0c84a04757f614239e7cf9190b"],["/有哪些好看的日历可以买？/index.html","d54586fd3de3cc7281613c1cb65341e1"],["/服务器有啥用/index.html","b534da7ee2203a20ac3149e49565bb13"],["/来长沙了！/index.html","d55e94fefca7c55f0da3139c02b87e84"],["/校招污点公司名单/index.html","1d71e7f236f6ab1ea5dc0dd4f32c4c36"],["/梭哈200多万/index.html","c1e867250381c9687e7bad616f7c0acd"],["/梯形图入门/index.html","fec442c23a6fe653db55fc8509456638"],["/橙心优选，凉凉了！/index.html","ece2709ac41036f1ec24d9e8f6ca2767"],["/比亚迪汉试驾体验/index.html","6ac94cf59f5fb0f319c6516d3ca172de"],["/清华转学成电，真的牛逼！/index.html","c0ed8189ae86a2220aef2f107ccf4dd9"],["/滴滴程序员被亲戚鄙视：年薪八十万还不如二本教书的/index.html","9a0397889f10a882f5304cee04811656"],["/社群！/index.html","654e83789b99b8b95499189bd3a083f3"],["/科学上网之VPN篇/index.html","b06f208603cbd3ebe15c55a566d4d195"],["/程序员必备的几个技能！看完你也是大神/index.html","5b8de604db2cfb22eb400059803ecf1d"],["/程序员绕不去的槛，Linux！！！/index.html","451b5627ed026867514a8918f34e2ab9"],["/蔚来ET5试驾体验/index.html","4ba8065e39308e6c84c615b01a1c3471"],["/蔚来，牛逼！/index.html","625ae1e7def70fc1ddedfb332e0f4ca8"],["/被录取了/index.html","5f921557130b3cdd92aa76aca70764d7"],["/被找事了！/index.html","e553388077d31ebd226192ba82a25714"],["/被拉黑了。。。/index.html","bf40d505fddb52edde6e8ee20f2c65e0"],["/被车撞了！/index.html","532f21b6bd811e8c88bee266eeabf2b5"],["/该如何选购固态硬盘？/index.html","4dc67cd21ff5fc9c828c897321c526ff"],["/这本书一定要看！/index.html","f1c5dab9149b6f807370e8fab0dba424"],["/选Java还是C++？/index.html","2b7ec2551da9239fea047eed61d4f4fe"],["/那些让你起飞的计算机基础知识/index.html","ec5d7b11ace031f3f83dc55688c48020"],["/靠这几本算法书，成功拿下大厂offer！/index.html","0e75bd8575747bf9a4710225db894b39"]];
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
