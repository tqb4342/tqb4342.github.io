/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/0010-city/index.html","f108538205e9ac6e819d4b669d07b12c"],["/10-algorithm-book/index.html","c9d65ab822671cb3944bbd16775ec370"],["/10-website/index.html","17624e80d2d4de516f7eaf213ad42351"],["/100万的小目标/index.html","a902c635ec81c8a54dbebb8d160a558b"],["/10w+YYDS！/index.html","f7dd6bb4ec367cd20c171b599e74aaa1"],["/10website/index.html","716c6db10121d652866cb26005846f48"],["/12-technical-tutorial-sites/index.html","52bf6e03b46d43235214f795055afbc3"],["/2 6 岁 了/index.html","36194d01c2060ef9dcee3e3ae3dc0991"],["/200万，啪，没了。。。。/index.html","897d6789ba03376d074ff4aaed3bab97"],["/2018ECCV-Paper-DL/index.html","4dec6d16d6e53672ea8cf58aa512ca5a"],["/2021年固态硬盘选购最新攻略（小白避坑指南）/index.html","764845a4398964d344ec957d4818e98a"],["/2021机械键盘推荐/index.html","ea3b3b949720876e575761d2a2f8fe0f"],["/2025-07-15/index.html","d8b3f91e1239da382c0e639f78e76f17"],["/2025年终总结/index.html","d32db9e4e0f0084a0d007368298bb6ea"],["/2026-Open-Internet/index.html","16e661d6a468a28ec2ea10269de85cae"],["/2026-best-vpn/index.html","208df93b00e6dc39355441e6abdd236e"],["/2026-clash-vpn/index.html","51a4a63b8521bfbf3385a2cb1b75c6c0"],["/27岁了/index.html","723b5fb27dfe390843a897c1a6b73d50"],["/3D-Convolutional-Neural-Networks-for-Human-Action-Recognition/index.html","c5e83b0a5cc824684e87d08fb739329f"],["/3D-Deeply-Supervised-Network-for-Automatic-Liver-Segmentation-from-CT-Volumes/index.html","27eebd57e3d6d0bbc7b4da80b1bd5532"],["/3D-Unet-Experiment-notes/index.html","b5c24fb5adc3bb995ec1d3d7b4fe3791"],["/4-Software/index.html","31f79b69d890e76df2ba6a14038c6ce0"],["/6-website/index.html","a57997302d77a65b4e4ea60d735bf937"],["/7-terminal-tools/index.html","5258a1feba644ee1213e75ef3a9badb3"],["/AI-PPT/index.html","33cd5e5c6849d7cb82f6d97cdbce27ce"],["/AIGC中典型的深度学习网络/index.html","9f53d9b598271db509b083e971d68fc4"],["/Agency-model/index.html","ee4b9bcc478fe8002a9bbfcafab43fef"],["/Algorithm-brush-notes/index.html","e1c66ab4bd4d6afd178cf517e67ddb9a"],["/Ali-recruits/index.html","2a520532a4b9c52fd303f6462e4ecd33"],["/Android-VPN/index.html","62d3b19640a57a89936daa9307b1b327"],["/Android-open-internet/index.html","2496db2f941cbb3e4d3852478515c97d"],["/Appearance-mode/index.html","398675eee801b935414d3060d5cc0763"],["/Backtracking/index.html","19a03d18590970b6dc528835c65efa6d"],["/Baidu-Sao-operation/index.html","eec2dd96281aeeb46197c6f9fcb32b42"],["/Batch-Normalization/index.html","1965f64b4b9bf480489d9dbcb5106f1b"],["/Best-AI-tools/index.html","fbad7db86d369aa071be95a800c708c3"],["/Bias-and-Variance/index.html","957aabe625f11b6494e8fe0b4e0077b3"],["/Binary-tree-traversal/index.html","c5b2f576e833d82223c1451c09ecce87"],["/Branch-and-bound/index.html","fb72ab29cdb6ad1375d1d5c7c851401e"],["/Buying-computer-for-the-first-time/index.html","eaccb34e2911e2e236495da536f686e3"],["/B站向北邮道歉！/index.html","641a5603d2a3199cf3f9ae2ba51d14be"],["/C++-string-function/index.html","f0b1b2f92aa63812e2b0af62a8e45a37"],["/C-Java-DevelopTools/index.html","3d08e1fbdbc9f7e82a9237924f095335"],["/CS-Classic-Books/index.html","9625d5bb1ad361c913c00fcaeb81dcd1"],["/CS-network/index.html","d94b622f2d239d4ba5eea4d593c2863a"],["/CSBook001/index.html","265ccb7ae3a4bcb9481f72b5784dad61"],["/CSBook002/index.html","d78626109177b16c4e1c4e3adeeb9e99"],["/CSBook003/index.html","8d8260850d1551be71af2df3d125c46e"],["/CSBook004/index.html","da3211293740646ec446d97c8633b1c6"],["/CSBook005/index.html","aee8e811994cb01c1a520b1da064b6d7"],["/CSBook006/index.html","b87fa421dfdd211048fc03342f93d14a"],["/CSBook007/index.html","78f1cbd87921d77f2d233719b27c40d1"],["/CSBook008/index.html","def6280e723c5cf114ce5b5affb80db3"],["/CSBook009/index.html","f6e6acfcccf72d432f688c3424f205d6"],["/CSBook010/index.html","20fdcc8801ba04db9729d2cb305da561"],["/CSBook011/index.html","0513e1609b9914ee30625f0d58661673"],["/CSBook012/index.html","2b4d7e6f8da391d5783b63803e2534eb"],["/Changsha-really-fragrant/index.html","6d326b7dc6f9261dd6016c4f689cbdf9"],["/ChatGPT-VPN/index.html","39352763429f5d3c09579a14b25dc856"],["/ChatGPT/index.html","ebf418779236814c50f38f38338c4a7d"],["/ChatGPT！王炸级更新！！！/index.html","9bdec7ebfc926a9bfc022d9789790cc9"],["/Chrome-crx/index.html","56f90e6fb38b6930daa88882cbf30f34"],["/Clash-VPS/index.html","dc7cd12e7d58cf17698ec519e3d58d78"],["/ClashForWindows/index.html","9ca495b6c1f439f2ba69d0d8bf19b4c8"],["/Computer-Classic-Books/index.html","25c32491a05e2114003cd6b8af28447c"],["/Computer-for-another-major/index.html","8af1a5c312faa1b630481d3b68c7c0fe"],["/Conditional-confrontation-network/index.html","51fb1f7f07c2eda2eec5635eb48fa975"],["/DNN/index.html","cb74f3f76ccf5cf8d1fd960d057105f0"],["/DSN-segmentation-liver-experiment-summary/index.html","5bb24f789f4913c908993109b5f8fa03"],["/Data-enhancement-elastic-deformation/index.html","36e138c51ccfaba3771b23f78b75f639"],["/Decorative-pattern/index.html","25bf249437848f3177f9ce5a039c03c5"],["/Deep-Learning/index.html","886d9d4de623269fab849bd7d4be16f2"],["/Deep-learning-and-medical-image-analysis/index.html","87f26981e7a0245c30a3921534c0a548"],["/Deeply-Supervised-Nets/index.html","285247dd71f939caa2e98481475d435b"],["/Deformation-model-based-sparse-representation/index.html","29fecc0181ba22f4a9606a330a883fdc"],["/Discriminative-and-Generative-model/index.html","f2f0ece42adcc658ad5c2754d1f72ba9"],["/Distributed-transaction/index.html","a17742705d85c80e3b38f804564bbf9b"],["/Divide-and-conquer-algorithm/index.html","aac3c7725895113cff147bc032a69fd7"],["/Dll/index.html","f83b3d68d671206d1fa956bd7649be46"],["/Dynamic-programming-algorithm/index.html","bb145a2965b8aa767cb98a317da0183b"],["/E-book-download-commonly-used-by-programmers/index.html","0e2f0164f7df32abdf2a603b17267b46"],["/EditPlus软件的安装、激活和配置过程分享/index.html","51cd2fdb51cffdc20b41184cb21ad326"],["/Eight-sorting-algorithms/index.html","9f647ff74e408f66433bba1a05365fce"],["/Encryption-Algorithm/index.html","b8d1d86e09bf7382780c9e597e0dd001"],["/Eolink/index.html","e6c38400332c2cc0ca18edbad5e38ae4"],["/Factory-and-strategy-mode/index.html","320d3a5d4040569863b0a6a08cc63b87"],["/Foreign-technology-blog-community/index.html","3f2077e18cc0a94aff536636d8c2d299"],["/Functional-model/index.html","7361662f0d088d96922cd3b97a593af2"],["/Fund-type/index.html","e912604a28aa773d44339ac458902403"],["/GPT-4o/index.html","3f44a488cf997a98c1057c286f9c0e88"],["/GPU-medical-image-processing/index.html","e7eb6e5241a971943a93ba5dff75ce8f"],["/Gemini-pro/index.html","d24eb576cad7fadd6791bdb2a25f4f69"],["/Gemini-vpn/index.html","d4a5f905945fc0a63340c883de237681"],["/Gemini/index.html","1bec336220d86af5f330253bb6759092"],["/Generative-Model-of-Unsupervised-Learning/index.html","e9fa31f644bfd0f06e1b8c81eab324b3"],["/Git-Learning/index.html","5d833672b8c9e61e2bc8a0375acd52a8"],["/GitHub-2FA/index.html","06695fb371373992ea52dcb3ff30150a"],["/GitHub万赞，程序员必看操作系统总结！/index.html","0d871c2c30bc16e9e82412d0542d1a97"],["/Golang-book-recommend/index.html","916b7510142abb43f5c6b0d201ee5d2b"],["/Golang-learning/index.html","e8f8c28b46234da311e270bf015db9fa"],["/Google-Gemini/index.html","5e15978f434a29f34db1c638e364aae2"],["/Gradient-descent-optimization/index.html","54d782c3ef5d7183d60c2206a295abca"],["/Greedy-Algorithm/index.html","e2a3553836c293f91151881b08b5d833"],["/HAND-User-Forum/index.html","4a160e13e565126c43e76a0cef2b6040"],["/HK-bank/index.html","d07542d042a369f7b4253366c15aca4d"],["/Head-to-head/index.html","d4821e366f91440c02894edd9a6ba638"],["/HexoPage/index.html","df119b63e16646b5570a1c4bd881c87d"],["/HistCite-Pro/index.html","2205159390964f8ed3889652df110470"],["/How-does-the-program-run/index.html","3236cf094b3bc39c182787931d344b5d"],["/How-to-judge-whether-technologyisreliable/index.html","02b96ca18d93efe989b22ee0009d5fe4"],["/How-to-learn-design-patterns/index.html","1f264b545910b0ae3df59d0c86a5f7b3"],["/How-to-learn-design-patterns？/index.html","477df00c8e773a63f289b9c77fe75fb4"],["/How-to-teach-yourself-programming/index.html","af7c43105cc7b51b2721255645e42e74"],["/How2learn-Python？/index.html","69cbb089d84e417fbfd08708d3bfc024"],["/IDEA-shortcut-key/index.html","cdcfa84d6c586da38bff0b1a5efccff6"],["/IT-interview-basic/index.html","41ed04827ef91403bf172164072d50f2"],["/ITK-VS-install/index.html","5da6120f42aa719e97235065b4d26dbf"],["/ITK-VTK-ItkVtkGlue/index.html","4c5de2e59d43bb6c049a0c5ccb7b8431"],["/Image-processing-plus-noise/index.html","c465260ed21cd9d74ad88ea8f81b0b37"],["/Inception-Going-Deeper-with-Convolution/index.html","518bd4447ee63111439b55bf6a13fdb6"],["/Information-Cocoon/index.html","d88946a63885bd33803e42feae662788"],["/Java-GC/index.html","7ad203d6b230fb9eba0ff56669487635"],["/Java-Servlet/index.html","a7f5cf4d0d0d8c087ba0bc8454ded20f"],["/Java-array-and-collection-sorting/index.html","ece538f7bf063c996f40dd09a6aa16f5"],["/Java-development-tools/index.html","1dffc64b59040502f9e3f771f5c6fb4a"],["/Java-eight-data-types/index.html","619c314e310eb0160e085bfae81640e8"],["/Java-interview01/index.html","f50bdbbb1de89f70fe85078110843487"],["/Java-interview02/index.html","9d7d190b38df9748c3e65818341452ff"],["/Java-interview03/index.html","fae739cbdefe83aa3f2fdc4872dd96e5"],["/Java-learing-map/index.html","76cfbad363392302778041cc420164ed"],["/Java-learning-route-map/index.html","1b2080949b0a87d0a872db74ac6ad8aa"],["/Java-memory-area/index.html","0bff5dbce457b6a80e9f32e0591dc5e1"],["/Java-memory-model/index.html","58706b230a906995548ca9ee1cd68edc"],["/Java-multithreaded-learning/index.html","a100eccc787525484263276488360ee3"],["/Java-project/index.html","f53141e08e845718631b924ccad1f0ca"],["/JavaWeb-Chinese-Garbled/index.html","fd94eacac8916b89e7483103e409c0a4"],["/Java还是C++？/index.html","fe4a14a0260f49f76fc82b36490ff3a8"],["/Kaggle5-step-guide/index.html","23e19adecac09d2cdc9ac4854db09a5f"],["/Knowledge-points-of-Java-garbage-collection/index.html","a66a1598eca3bfc5e57ea508cddd2423"],["/Layoffs-Hiring/index.html","ad51c4db07cd610416cedc43b5ddc588"],["/Layoffs-and-Hiring/index.html","fcbee4a0a7b6a239595234b1f4a4946f"],["/Linear-regression-of-machine-learning/index.html","f2e8a86cd04bb70732c1356c3f3f9a7c"],["/Linux-Compile-C/index.html","8361758ef46c14c1c96a5ce700890f40"],["/Linux-ITK/index.html","987628326a71015858b6ecbed7a8b4e5"],["/Liver-segmentation-of-sparse-components/index.html","5028ad9b238ef5d4f77d6b942224c66d"],["/ML-EBook-paper/index.html","50d2de912c41ec6ce8683ee47325196a"],["/Map-uses-multiple-maps/index.html","467a577a3ceba95cbeb5929a163d622c"],["/Marching-Cubes/index.html","dfcf8dbb4f9b2910175dffe589aef6b8"],["/Matlab-Graph-cut/index.html","5202b83d99be33b2bf78ff991e935408"],["/Maximum-Likelihood-to-EM-algorithm/index.html","2685964a89d919d4d245dda6f782052e"],["/Mean filter and median filter denoising/index.html","144c1684559e5b99a790036700aa34c5"],["/Medical-Data-for-Machine-Learning/index.html","fd3747f3cb223d4a7790fa02a7eaad96"],["/Medical-image-analysis-deep-learning/index.html","f4e7a9a92dbd6bd6d7f67c108e0ae8fb"],["/Medical-scan-image-processing/index.html","b42921934476e34af8c87bd067be9bfb"],["/Merge-sort-algorithm/index.html","228dcd28d36785388c8168ffa13c1db7"],["/Monthly-income-2W/index.html","390f3dba0b527d3628522871ec9b1840"],["/Mysql-database/index.html","2c1976fc0e234573e473ae12c679c08d"],["/Neighbor-Embedding/index.html","73fc2d665d8fa293ae12f689cc7db9ac"],["/Neighborhood-approximate-random-forest/index.html","19e76b000c29a665e5a13b930b189011"],["/Net-and-official-documents/index.html","d0a49540cc89843fbf01eab96d28e618"],["/Netflix-VPN/index.html","aa63377c7cd07f07a1167052b418f714"],["/Network-principle/index.html","3128c02119c4c9f9e7596d45e4dbfe1a"],["/New-Hong-Kong-stocks/index.html","09f0a4c261df0a721f9e58accd24bfdf"],["/Nice-to-meet-you/index.html","8671d13c7c50401ab64426647377a469"],["/OS-processes-threads/index.html","175f7ff438c194a964b04965adadf4d2"],["/OS-run-environment/index.html","0f6079b5ccaafeb9517e2df974db2062"],["/Open-Internet/index.html","229f4abdb934511515e8f0c50037a792"],["/Open-Internet2/index.html","816d2d3678b18665dc41b8a46e1250b3"],["/Open-source-community-and-rewriting-website/index.html","4d1a3e1da16b8584345ab892af3f997f"],["/Panoramic-image-stitching-based-on-SIFT-features/index.html","df8b42d1befeac17b31762dee4062569"],["/Parzen-and-KNE/index.html","7e7b80d4429d55fa08652dd3009e6990"],["/Personal-technology-blog-site/index.html","7878749090a25bf294477ec076ca4d80"],["/PicGo-Gitee/index.html","1252988f3119db0f29284b612d99f67b"],["/Programmer-treasure-chest/index.html","9aa00726a343150e3e463381224e5bf9"],["/Prototype-mode/index.html","0c2f92af414c827ce2ee6cc8ba1faf29"],["/Python-base/index.html","e61056041def542d50fa6787dd9b4a2d"],["/Python-crawler/index.html","358512dffd211e865489185aaf24d491"],["/Resume-revision-suggestions/index.html","babfd6309b9a3e5157a6e7b25f8dabcb"],["/SEO01/index.html","32fe95c25163df94b8135c772eb9e9fd"],["/SEO02/index.html","21ccbbdcc1fe172b5cccccc00b53aa85"],["/SPHARMPDM-MEPP/index.html","9235a6a84b004bf5652867171447e11f"],["/SVM/index.html","6a0b9876ca9622b759bcba378e65543e"],["/Seata/index.html","d23ee69edaa8a17daab0deaefa663a76"],["/Semi-supervised-learning/index.html","fec9888fedd284e19beb863d1082562d"],["/Sequential-model/index.html","42d5d125143ede93371463decf5ceab8"],["/Shape-Based-Human-Detection-and-Segmentation-via-Hierarchical-Part-TemplateMatching/index.html","8aad2f9a6d2054ea2b6083dff9c4194a"],["/Spring-basics/index.html","74d505042f37216d827a202bd0ed11f6"],["/Spring-integrates-hibernate-Struts/index.html","3ecacbcfe9105f78139ce1266331aba8"],["/Structure-learning/index.html","a67e903f77426f22a6a05dfef36da845"],["/Suggestions-for-self-study-of-computers/index.html","e49fe362b2e5a665be9f433cffe7cb6b"],["/Summaryof-HongKongStock-Account-Opening-Links/index.html","1069e13292f81c168b99d62c9912d693"],["/TCPIP-detailed/index.html","565c647bc7f5d5b6e70859d9041749ba"],["/Telegram-VPN/index.html","8064907fd023d6638b5c3216a9600f17"],["/Telegram/index.html","7f45c0ab405f06cf3256de067a97a2f3"],["/The-essence-of-shopping-festival/index.html","3467f60747b2e5b22e3539e71f078675"],["/The-most-important-investment-in-life/index.html","982b785633b680513404799eaccb6322"],["/The-most-successful-nvestment/index.html","c8d2b4506e7fa3e6ad1aad1424beadcc"],["/Transfer-Learning/index.html","199e8a50ab66e1e56c390b7d2a5d5491"],["/Transfer-to-computer-major/index.html","c28d9e061287716f524e19da20c05532"],["/UNet-Convolutional-Networks-for-Biomedical-Image-Segmentation/index.html","b7c85604483566b97593360e8f47bb23"],["/Ubuntu-install-sougou/index.html","9b7cdccd9f43dc690cc784ed8e6714b1"],["/Understanding-of-paying-for-knowledge/index.html","f92f774a657b897fd6fb70aa0eb9a5fd"],["/Unsupervised-Learning-Linear-Dimension-Reduction/index.html","f547470cfd7a0c3552379460270c9fd9"],["/VPN-HELP/index.html","7f16db4a2aae59f494102c06a2aae4f6"],["/VPN2025/index.html","fa3d7d352aca5e1c8d050f8d224e0542"],["/VPN2026/index.html","30dcdc9ab29e9057a8c88024e9bec655"],["/VTK01/index.html","01a74c9405ceef1a32492816602a0ba0"],["/VTK02/index.html","cad77bedb630127fcf8f21086eb08c5f"],["/VTK03/index.html","d26458493049289cda30389acda9dd28"],["/VTKRead-write/index.html","38f94617f762fcb23ff90c6d6932463f"],["/Vertx-Java/index.html","5b0160102a01958b87f89fea3a94c7e5"],["/Vpn-OpenInternet/index.html","de3e0cf8406200efafd29e85e105cb06"],["/We-are-all-good-kids/index.html","7693ec9771120d4bfd13cd969f1061ca"],["/WeChat-80/index.html","70342e5d7cca1d81770398b15b9d7be3"],["/WeChat-red-envelope-cover/index.html","5f9a9a799e8d4c8df0e04f68049ad1ab"],["/What-is-crawler/index.html","1f26de0dadace0a6fd9143a02601eab2"],["/Win-Internet/index.html","f69423afd73df6a0e133549e969b3ff1"],["/Win-Open-Internet/index.html","e7da3363b0eb47028c04801be3bf8793"],["/Win-OpenInternet/index.html","5b0129d47c1cc89da9c74c5df3a15393"],["/Windows11-2kfans/index.html","a6903f18b8bd8385140d3947d4fd96e0"],["/Word-Embedding/index.html","9eb577429ee6a2797a7dbdf28b6b7a77"],["/YuanShikai-and-his-Beiyang/index.html","8aea902b3d1f2a075c40c697aa8648c0"],["/Zero-copy/index.html","a6f3dd761904af4560e80736bf286eac"],["/about-keras-model/index.html","83588ef17a46c3d5ff069ebcdd8d6b9b"],["/accounts-google/index.html","eb340ec6a7859973c647db0051ad2b38"],["/algorithm/index.html","30ae9e315fa24db1f806ec36cf76910e"],["/alibaba-Java/index.html","ca204746b84eb5c8e785927e3a49a575"],["/archives/2020/01/index.html","da2b1b0de4bf92078d64b7151a1a6c19"],["/archives/2020/09/index.html","d16f9e92c5f8b8fa59dbdfab34637350"],["/archives/2020/10/index.html","e122b2fd007d02ccc01a3a3cf8f41c54"],["/archives/2020/11/index.html","010256299023a46dc58f8b02bac84c09"],["/archives/2020/12/index.html","89720035396b5ac9bb7b2e19714eddd2"],["/archives/2020/12/page/2/index.html","f3652d06fe6f62d5ac4faedad8761031"],["/archives/2020/index.html","484a9a7386e605b0bc9d6d7a09eab027"],["/archives/2020/page/2/index.html","7d0063bc4fab88c5715456496c3c6eeb"],["/archives/2020/page/3/index.html","420d0d9a467201feb5acc5d18b99c553"],["/archives/2021/01/index.html","d716a1202012fc0b7979c77357a28837"],["/archives/2021/02/index.html","2e7b5dc7acd72a1aa4d812c9c5399e95"],["/archives/2021/03/index.html","853ea4b3d1a6ebd4b255718db3bd9fec"],["/archives/2021/04/index.html","c973221b757e35d7fdfe0d4d1e8468a5"],["/archives/2021/05/index.html","ccb437149c7bd09f51a63697756376e2"],["/archives/2021/06/index.html","525332ff7bb84baa262237274d6803ee"],["/archives/2021/07/index.html","14ca1c8452728ba657e73302c5e5d2d2"],["/archives/2021/08/index.html","c0f00a0c05c50b1ce5044de35a9b6d36"],["/archives/2021/09/index.html","1894550fb5e4eeb55b7c2eb01d15e659"],["/archives/2021/10/index.html","b81952268d720cca4bb875fef1679363"],["/archives/2021/11/index.html","13424768ce1ef601daeacf9c33644efc"],["/archives/2021/12/index.html","b345ef1ebf53831f38d7e791c3fe1d13"],["/archives/2021/index.html","da15b18fd04520ea4b0af61b2a76857b"],["/archives/2021/page/2/index.html","b5e1a7f5cb522518d776b280d51a71a7"],["/archives/2022/01/index.html","812a25c6ad38a6a818ad43d9755a8ad3"],["/archives/2022/02/index.html","6f38ce9b47d5467b6d1c430a039811b5"],["/archives/2022/04/index.html","4656eaa3737b78c5220a9e30b579f314"],["/archives/2022/05/index.html","b469cab0a69bd4ea3578f62d10803ab6"],["/archives/2022/12/index.html","7f4100363b4ab5d8d4aec133be530645"],["/archives/2022/index.html","63fb8b67582b6d4601e32dd89dcc5ba1"],["/archives/2023/01/index.html","d24cd435d91a011895d7a4833c26f224"],["/archives/2023/02/index.html","6f6ff9a188ab8c6cdcc58f8551954334"],["/archives/2023/03/index.html","18ade20e7eced7efe4acadffeab75062"],["/archives/2023/04/index.html","05fee5b541d80a302425daaa613e6019"],["/archives/2023/06/index.html","6ce8c29b8d69bc050e160b4247023f7e"],["/archives/2023/08/index.html","01d2fd0c3235f620794e3fff6ea024ad"],["/archives/2023/10/index.html","c69c319ba9e8c3f16199ca6b33aa09ce"],["/archives/2023/index.html","9e4cdaeb8a762998c07c61a70ee1e217"],["/archives/2024/01/index.html","b4580c09e267a46ae35bcd21a64d5121"],["/archives/2024/02/index.html","4a1ea2eff9209e565915f9464d1e94a6"],["/archives/2024/index.html","9d4b621976b845edba4f3e70c3ffd213"],["/archives/2025/06/index.html","9ff58383df38c8054234aaef18e6dd61"],["/archives/2025/07/index.html","feb3ada8b78b867eb265ab72506b074d"],["/archives/2025/08/index.html","d5d616000ed63175fb9e3c8234e298d0"],["/archives/2025/09/index.html","02ee0352e909003bba90465a750fb6b8"],["/archives/2025/10/index.html","b9a892150f18bddd36daff1e1e17fff4"],["/archives/2025/11/index.html","605b2c1289241601484503b836946109"],["/archives/2025/12/index.html","17d80bbd19a3d7743e6fc4b7bf292565"],["/archives/2025/index.html","b2e1061d038b2b8ad046de5c6f218a2a"],["/archives/2026/01/index.html","85193e056030e4e9e6eae16e40eac45b"],["/archives/2026/02/index.html","de3341b5c2fc65f4d8c2ef80024324f1"],["/archives/2026/03/index.html","570f79203d0deb13673d857f186860e5"],["/archives/2026/04/index.html","6b4543be251d787f473c90b884c4889c"],["/archives/2026/05/index.html","d7cce0ad34b7eb8250c937731d7ee925"],["/archives/2026/06/index.html","fee9260e230d2e6bbd5c07e572e639af"],["/archives/2026/index.html","085844c28024ebf06a511bffda7d84fc"],["/archives/2028/02/index.html","62ac43cdd096b05e2a92e75b77373b96"],["/archives/2028/index.html","6a38360d243f9bc8ee2e0047ef91a796"],["/archives/index.html","9864f3a9e79a4fc129c3d67c2dfc0f71"],["/archives/page/2/index.html","672c000b242b43a5e17738ca20cdda6a"],["/archives/page/3/index.html","28c73e7d51865b109c5036f2333fb2f9"],["/archives/page/4/index.html","796c89069cb8846042c6a1224055ec47"],["/archives/page/5/index.html","787d1941015c831fbe0db2ae62f4fbd3"],["/archives/page/6/index.html","719a9ca82c5985496bc73f90cc1c44f1"],["/archives/page/7/index.html","d55edb40c29f3785921346022c0f516e"],["/baidu-search/index.html","a3f57d05cc04ae86fc27262a715da119"],["/baidu_verify_code-Hh2fKNlEB1.html","61941541bc6b104e522c9dc5bc0770b1"],["/be-a-programmer-instead-of-a-code-farmer/index.html","102ce8e2a5ac6a72ae1f354138e3683a"],["/best-vpn/index.html","44248ac0ccad4e079db2ded7f82338b5"],["/best-vps/index.html","27e47bf1e83c97fee6ff2f2add3f8631"],["/bought-a-house/index.html","a99e90850046d22b5c6ff4b70c2ed311"],["/categories/C与C✙✙/index.html","8af7d3a0fad6b50235b16f4ce34e26f5"],["/categories/Go语言/index.html","d1e944866030feb3a32bf82689dab05d"],["/categories/ITK与VTK/index.html","0fba91ae5db426cb3e38fb0e227e9eed"],["/categories/Java/index.html","80db6c97a497f06e6836c7108fc35a23"],["/categories/Linux/index.html","add98a30bc9ec0a8224e16f90c77c058"],["/categories/PLC/index.html","43d048b683d0bec2be0cd671a6a10121"],["/categories/Python/index.html","e9461d6fa54a0758c2f5622b2066a59f"],["/categories/SEO教程/index.html","0454711a8b8627de2a253a066b748484"],["/categories/index.html","fcd371325f8d7afe98dc76e7b7a357ab"],["/categories/图像处理与机器学习/index.html","4532228fcf5e4e17d843b7c2a695a34d"],["/categories/工具/index.html","0d2e4b743fd7d4499c08c426d18800cf"],["/categories/技术以外/index.html","cba3492ec0208b56afa423417ac7db6e"],["/categories/技术以外/page/2/index.html","74c60460d07fdceac44432f08943c91c"],["/categories/数据结构与算法/index.html","4532f9008ff65139bc39f6384d718515"],["/categories/科学上网/index.html","3425cf941433e2ffb2627896a41ebf6e"],["/categories/科学上网/page/2/index.html","c79c8f8148c570988a5dff92a72f68a8"],["/categories/编程经验/index.html","4b816b10811f17cf8da060f251076985"],["/categories/编程资料/index.html","e83c8a40f7424b808b7b06e1eff0ebcc"],["/categories/计算机基础知识/index.html","96cdfabd6ee5be017b9f489a274ffe37"],["/categories/设计模式/index.html","99b53e3844c4b8bfbeff8fd93eaca5bb"],["/choose/index.html","85109b9d44f2112e1be848c1a3c5096f"],["/choose2/index.html","8736251342583153c85fdf8ad0532d04"],["/chrome-crx-intruduce/index.html","04c368f9fc0c28f993eed6f19d4b2699"],["/clash-free/index.html","bb586d248f3eb892eebcfbc0c0b7235c"],["/clash-pro/index.html","6585f936961de799e075e63029d2dd75"],["/clashvpn/index.html","a787cc96d89add3c492d8e47a48199d3"],["/claude-code/index.html","1e8ab8de304ad670889cbc4e59a011e0"],["/coder-blog-website/index.html","21a674372fdb3fc812b25f7746f2d857"],["/coder-source/index.html","69a0da9e891a7c411c9c2dc8d7773884"],["/coder-videos-website/index.html","c26cf858798421ffee5df047a99e29a0"],["/computer-book/index.html","fbba5e0c4e47e6814497f7b803f8cd10"],["/computer-censorship/index.html","d8e1b80bb5473e0ee5f15e07505312c1"],["/computer-network01/index.html","0fb429ed1d43f16159ee816ae60f9d70"],["/computer-network02/index.html","ea46249c2b8fa8087493bde766e01b9f"],["/css/main.css","bc32ad34ec4990d934c3c647bdb62f79"],["/database-Mysql/index.html","0980b8a7a921ba281aa6b8de731283ec"],["/eclipse-lombok/index.html","923f76aee8f6bfec0281dc10497638e1"],["/freego/index.html","d66f60cdfda17dad1968ef3711922da0"],["/fully-convolutional-networks-for-semantic-segmentation/index.html","46a890b1d947e5200fa8452b3d82e169"],["/great-firewall/index.html","83f50059f454e4e37a7f0d462cb160c0"],["/halfrost/index.html","b180a56d586c1a5636862f35c28e2ac7"],["/how-to-signup-chatgpt/index.html","67a814ee2a96b9cde3fa92b272222c1a"],["/how-to-use-Gemini/index.html","d8ebe6b210f89986a5608fe59f489093"],["/idea-continue/index.html","1b146eaf808f66959463a36a69e79240"],["/index.html","7354bb4942fa5a0ba586ae0a49519f7e"],["/internet-dir/index.html","fb3b3f91f3d538406a8364f6f9ed0632"],["/ios-open-internet/index.html","1e586ba46dff7b4fec95f81a5b65c255"],["/iphone-open-internet/index.html","cad6c1f9c952ec358acdd95dc974512d"],["/itext-makes-pdf-form/index.html","a1fdc5b28fec382cfdc5c2f1639b52bc"],["/java-Set-Map/index.html","5420323becb761a791defcb895c7a280"],["/javaweb-server-error-codes/index.html","9df81b1af894935b915ea4e50ad61f90"],["/javaweb-source-code/index.html","bcdc05a74008104f7711609a3a9ad876"],["/js/lib/busuanzi.min.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/js/lib/lozad.min.js","47904d34a224931dd1b615c59a3dbe3b"],["/js/lib/prism/prism-coy.min.css","0ccad54d95845901ead59bfd3ecceb14"],["/js/lib/prism/prism-dark.min.css","a4711d2957d6605eb5682bdd228cf123"],["/js/lib/prism/prism-funky.min.css","efedcdccd7a9ab342d2d9cacd24920af"],["/js/lib/prism/prism-line-numbers.min.css","38e22e790c279bb56f9ec4b90a2a2d58"],["/js/lib/prism/prism-okaidia.min.css","5ac6f9de996fbec68aaa106dfb16e061"],["/js/lib/prism/prism-solarizedlight.min.css","ecc7e64d039873ffcf7fb27babdaeb5a"],["/js/lib/prism/prism-tomorrow.min.css","456af2a14ae4f5089939d5904ac40fe8"],["/js/lib/prism/prism-twilight.min.css","ebb5c355332a8cf9a1ce37a2a69d678f"],["/js/lib/prism/prism.min.css","a5234d614834658887cec6a9515890f8"],["/js/main.js","052d2b299d9c750afea8df0b802ab7c1"],["/keras+TensorBoard/index.html","68e7958e3221ff70b468a7a70454b5c1"],["/keras-beginner-guide/index.html","677d089ed1868e073d0443ef1aaa26c2"],["/kimiclaw/index.html","dde2af5639f0ff9a593173719286638d"],["/kmp-algorithms/index.html","817ab3f3c35c25c207bfec9726d029d2"],["/leetcode-Java/index.html","36471784edd79e4e383cd5a5bc40be96"],["/links/index.html","b3df55e6adb258c04ac9fe535ac86974"],["/linux-java-opencv/index.html","1d1f8dd36de3adcf56a39a9e1cd3d6d6"],["/magic-internet/index.html","5f18cf03de4a987ae907424dda648635"],["/magic-vpn/index.html","efd8b5294ca054be14350d0449ec07f3"],["/mingci/index.html","0ae3da90b7e631dddda5f8211d4c3bc1"],["/mobile-vpn/index.html","18f2822e8f75aa3fd4932b0535d41f23"],["/msb-source/index.html","18b442d43a92df09f9ee03aa0e4c6aec"],["/online-BUG！/index.html","186b79026d6c6cfd8db752c64b3a2656"],["/open-app/index.html","f66c4c1a1fd64297778cdcd8badb330c"],["/openclaw/index.html","aed5702b057a45de316191df558c0d5d"],["/openinternet/index.html","fab86a38f48a8913106ce8ca47cd882e"],["/page/2/index.html","b3db09140e845c60b33b1f9b3230ecf4"],["/page/3/index.html","ae095ac4714a9ad9d83bd646db4a3ae0"],["/page/4/index.html","7ac9db61ecfcaa72fb498ef695f098c8"],["/page/5/index.html","4e1c9b221bbf1b084175d7f6549886f9"],["/page/6/index.html","19848a76000051d4d17e21264de5d570"],["/page/7/index.html","e995f06c0d8716f4f2ec485db20219ab"],["/pandas-data-preprocessing/index.html","76681b5889c7f00e4fb6b887fbb723bf"],["/phone-win-open-Internet/index.html","0d5a3cd107c7584ca5cc6b66998b4331"],["/popcorn/index.html","665624e87b7def972d3a80cb8b693308"],["/protocols/index.html","0ab08d1fa369d92e3b07646e2a72c6c1"],["/python-Blog/index.html","2b30d1d6eea63f95528f6b4031eb8d44"],["/python-yeild/index.html","ee6f4dc7aa26f5a080a3f610946c9ede"],["/python爬虫教程/index.html","31778a254d82837d46ce33b9358a2e4f"],["/route/index.html","36ce448e9ce6730b37f3ee5b6d59684d"],["/search-help/index.html","fb3752c3b3d434fe84655530a0e4ad16"],["/software-copyright/index.html","8e6aa8a9174f3928796d1238b1cc2133"],["/sw-register.js","e66f01b154479b1551cec4e7d6cff548"],["/tags/AI/index.html","393b8247a2c9508e4aaeec28bb5ead97"],["/tags/API/index.html","0bb8e9c2fa3326c9fdaa771037eac583"],["/tags/C-图书/index.html","88d8410a57d00527af124a44c3e2f812"],["/tags/C/index.html","a57642c83ab55376412311126bad89b9"],["/tags/CNN/index.html","d017ea2e9c0577a96daefae13fb95fa1"],["/tags/Chrome/index.html","bf3293e0fd3af50b01a17913f33f6a4d"],["/tags/C✙✙/index.html","e157663cd260d2e4eaafd6acea7ca86d"],["/tags/C语言/index.html","80a61c2a70637f859bc201bbceca639d"],["/tags/C语言图书/index.html","c510724d4aaf3b1def34205a34580127"],["/tags/DSN/index.html","4d323a39bbe82aa62308a71236ac91b4"],["/tags/Dll/index.html","728f0194c923847c60edc5305c73dd98"],["/tags/ECCV/index.html","53033ceda871a42957e46f57d58ada44"],["/tags/EM算法/index.html","c7ce29d730c949164afc9013a67df102"],["/tags/Eolink/index.html","6823154be9b931099fde3714793e5b6b"],["/tags/Gitee/index.html","3d024dd5a94fe2ae813b9d92e83be3e2"],["/tags/Google/index.html","98232fb7733ef5800ec079f47d0c3e29"],["/tags/Go语言/index.html","3369b8f4970402f5c7cd60e4ff418767"],["/tags/Graph/index.html","a994d59c63a17c050b914e1883eaf250"],["/tags/HTTPS/index.html","1b675474052a64af68e852ced5548d79"],["/tags/ITK/index.html","a2d732596474d5ed7d7901c2e12dc279"],["/tags/ItkVtkGlue/index.html","d9e866906b4c5e7420e999cae94e5ed0"],["/tags/JMM/index.html","7eecd23cee1f67472c9521ad4063315c"],["/tags/JVM/index.html","031224c3fffadf7cc4b25cf87cffe827"],["/tags/Java/index.html","a003c46f5cfb2a51c0a225bd2be2d9f5"],["/tags/Java图书/index.html","7cdd198ba81e5bee947b338b52dc5d90"],["/tags/Kaggle/index.html","22b618c409ba62f5a180a61cde95ff8c"],["/tags/Keras/index.html","b5b7523753d1b387c48c0f3b98233c32"],["/tags/Linux/index.html","bfd150bf3e361b3a33010d65dfc70e4d"],["/tags/Linux图书/index.html","b479db55e4880b6b4ad1890479d55d44"],["/tags/MEPP/index.html","f0f212663117b952ef80d66f787436cc"],["/tags/Map/index.html","23864bab5f897b0e25455ee764bba539"],["/tags/Matlab/index.html","b6f69608a1b4b8e1fb2df103be402d68"],["/tags/MongoDB/index.html","04420dabcc8728ef67ab7930a05c7406"],["/tags/MySQL/index.html","d21f30fae3595c247ee3c27d4483b98b"],["/tags/OpenClaw/index.html","098c10c8244971800a5a20427c41ab01"],["/tags/Parzen窗/index.html","72d7401dfa62757e36911929d9a3b8ad"],["/tags/PicGo/index.html","ccf4f3f777c2adc76e7a636c079f94d5"],["/tags/Python/index.html","5c7be1971438450eb492b1ec2a28c132"],["/tags/Python图书/index.html","68539d65e1ad367b82a419818db3bd59"],["/tags/SPHARM-PDM/index.html","1474b63d697110276cc1001f72c2116a"],["/tags/SVM/index.html","699522097aa714fdd235085b51f4e857"],["/tags/Seata/index.html","ebb1650f56df6724c6a630ced7845db5"],["/tags/Servlet/index.html","288ee099ff0f65503515524e1e9bc1e3"],["/tags/Sping/index.html","dadd0de0c5e031280521e8b0d4c2fc5e"],["/tags/Struts/index.html","ba46d48ae55190cff657d27f274525b8"],["/tags/TCP-IP/index.html","3661e75f192f20b2cf06131cc3dcfc56"],["/tags/Ubuntu/index.html","ef8b161caed9649ba068658f94ca39d3"],["/tags/Unet/index.html","caeb2f1e20fe018b061516c54d468642"],["/tags/VPN/index.html","10cf8ad69858cd3d2853f590238b896b"],["/tags/VS/index.html","f1b65519c73c64b1deed194f12b4bc81"],["/tags/VTK/index.html","1c30f380082427a163be774297a8c679"],["/tags/Vertx/index.html","50e372b8da88d4484b386ab893776321"],["/tags/Windows/index.html","fddcdf746e3097cdc0cd9261fd5b48d1"],["/tags/claude/index.html","9d319117be77324850949adad2567f91"],["/tags/edit/index.html","d0799b6a0955be0a95b385a23d6eab71"],["/tags/hibernate/index.html","33e8367880c3b1447b11712b128f3f81"],["/tags/index.html","9e6f313a86a0eb9c5e3caba2c7fbc9d1"],["/tags/itext/index.html","c957cfd3bf0bf5242e4130213716c975"],["/tags/jdk/index.html","3412fb2e0b6d4b531ef884d2c4361a54"],["/tags/kmp/index.html","256de4dc11f5efd0f0c9d7f54fe0923b"],["/tags/k最近邻估计/index.html","8c09876f261febfd286a7880f2c30060"],["/tags/lombok/index.html","7288963f80ad2ad24b95f1eb64961de7"],["/tags/offer/index.html","edad14ff37d70e474ccf4de6ff1165eb"],["/tags/opencv/index.html","c56df4ee15c9cb94a91f007198645e09"],["/tags/pandas/index.html","139674f09534543648345eb42fe4ba9b"],["/tags/string/index.html","71e92f9cf8315328459fa15be5557f2d"],["/tags/vim/index.html","cf3e19229f80a9a99ae41fa66de71d12"],["/tags/vtkPolyData/index.html","cb376190cec30bf60660f2765a36b914"],["/tags/web/index.html","115588bd608df1a50f7ddda871314bad"],["/tags/xshell/index.html","f41b0bfdd71a254b96c02e658370f478"],["/tags/yeild/index.html","60c50305aa180d2c29373c5f2474b833"],["/tags/互联网/index.html","28d75e50d183e2d8e63762bf9bd9d68e"],["/tags/人工智能/index.html","f113b9767791c349acb3f1795ec190f1"],["/tags/体绘制/index.html","571d6784f252abde8160040020a8baf0"],["/tags/全卷积网络/index.html","c7f7f7210c51c3f49ec9a3c486dca61b"],["/tags/公众号/index.html","3916a88e31cee34533906a8288bc77f8"],["/tags/内存模型/index.html","99b0f6034006a00780471c8a7a774bd9"],["/tags/内推/index.html","5a27808588779c8be2db865e947d916e"],["/tags/函数/index.html","b1e33df202698e6410eae3003068a416"],["/tags/分布式/index.html","a2a39a33eebf6c24ac394a0d0969ba21"],["/tags/加密/index.html","0f4f4b60b077df812094567409701d2b"],["/tags/医疗图像/index.html","1a442de39bb5fb425e5463cdd435d225"],["/tags/博客/index.html","af8d76278a29cf2daef6655b159164cb"],["/tags/图像数据/index.html","0777a6fc0d55266c8d37d2e9a77fad6c"],["/tags/图谱分割/index.html","6eb08b7e4b406b19062e08387b0f4560"],["/tags/垃圾回收/index.html","aecba71ec3591377fdd333cd97509aca"],["/tags/多线程/index.html","545db0566184467cd9f7bdab6b8fca40"],["/tags/字符串/index.html","8f1f04b5eec7b0764209e9419e57848a"],["/tags/小龙虾/index.html","ab014d1812dec1221f15ffd071c92d9d"],["/tags/工具/index.html","e4c719d7fc2938431519df59323d74dd"],["/tags/弹性形变/index.html","02810d5b03523906881d2961aa5e2abe"],["/tags/排序/index.html","acd1700f07240b6450df0d6de431a1a3"],["/tags/搜狗/index.html","c813e4a337f77f8876c7d819b2e5c5f5"],["/tags/操作系统/index.html","c2b0785da8c42a28fb8a13594fe13af0"],["/tags/数据库/index.html","bc0c2ab92fdfa9a7aa25a5d9a00ec321"],["/tags/数据类型/index.html","c96014e2eab8e3bf566c39567830875c"],["/tags/数据结构/index.html","6bb74f850c7651bc95becd7a2e25d17c"],["/tags/最大似然/index.html","2a92866b82908b863e897a3a0061830f"],["/tags/机器学习/index.html","682d10db3de2949f7cb3125e2e45500e"],["/tags/树/index.html","2eaf75acc3855c0117bdb0d4164eea00"],["/tags/框架/index.html","7415ba4cfd25e9785fdbc31003c0c3e0"],["/tags/求职/index.html","8a08517b649d7bb5790a970e508644de"],["/tags/汇编语言/index.html","88f71acb32f9c445d32754d79c2bc537"],["/tags/深度学习/index.html","c5e5cb0854ac9ab378a7a8669e17b727"],["/tags/深度监督网络/index.html","33fe1b891463eb61a81a6a2a21d51e27"],["/tags/爬虫/index.html","78617f4751846b588afeb3f97930bfd8"],["/tags/电子书下载/index.html","aaa55ec9df834d2aa6e954ac3184610a"],["/tags/科学上网/index.html","6470be62afe6b3fc1e8e2249169b231a"],["/tags/程序员/index.html","90282b076f9e4e4b6c077212f1b22294"],["/tags/程序员面试/index.html","4e1c1263e02b31014109eb5e8f120270"],["/tags/简历/index.html","c31ce37769cdf1d4202e0f74159e9d21"],["/tags/算法/index.html","a4f284bc0872907dcde7f426ed26cb8f"],["/tags/线程/index.html","6d63c5653581224811e26f22c9767ae3"],["/tags/经验/index.html","e0d8d33b021e00263518f3712ad2512c"],["/tags/结构学习/index.html","76e19ae6b0e65302c2226085f4cc9e92"],["/tags/编程/index.html","553aee0fe43791b1cb9c2b654e640787"],["/tags/网站/index.html","2e5e120240b0a63bfdee1daef36b8302"],["/tags/网络/index.html","f3bf3d0f10820d99d7d475e26a7ef41a"],["/tags/网络原理/index.html","abf053801e496f1b9d2a256a38661ca2"],["/tags/翻墙/index.html","cc534f4682b0fbad63c26f08e9b6947a"],["/tags/肝脏分割/index.html","5bdcb24bcbe86a407f8d31a3d53e1ba8"],["/tags/计算机/index.html","5eccb08c370ece40c2da82520663f2ad"],["/tags/计算机专业/index.html","adf34fea797de3788412e2617a7332ba"],["/tags/计算机网络/index.html","9ccfc1b72c28545ac775b44765299118"],["/tags/设计模式/index.html","c18e847eb56c2b125155521cd844ebb5"],["/tags/贝叶斯/index.html","2f7f92436a82fc352e9e42f591334065"],["/tags/迁移学习/index.html","5350a6b934d85a8bb45949bb33360372"],["/tags/面试/index.html","2ace412ff5bac34277a26850d9d49b4d"],["/the-meaning-of-reading/index.html","c732c68c09cb2aaf8a88bdd27a16d52f"],["/the-way-of-pragram/index.html","109b20aae2fbaad0fddfff51f79f4891"],["/troubleshooting/index.html","7347d915e0f2ae2af168647beadcd8f1"],["/untiypro XL安装/index.html","9f31f6e1306881385af3f1c2a42a042c"],["/video-websites/index.html","068286bde09ccf18a057e971047e17ea"],["/waibao/index.html","d3577b83d7867fac54e0fcfa01fc533d"],["/wechat-fans/index.html","0605f8dcc7c51ccc303633e355141c00"],["/window-run-VTK/index.html","09f1c6f7349ac86672e4b8bc93dc857d"],["/windows-science-internet/index.html","3a63b3151e95b810bde82d8a27d6ee2e"],["/xshell-connect-Linux/index.html","270cdfecdfc1e815f4bade12a5bbbdb0"],["/yzhx-vpn/index.html","ff957c5a5bce7c01595bd27e278bdec7"],["/‌Accessing-the-Open-Internet/index.html","3383d724ada47433b697c726c3917659"],["/《Java高并发编程详解》，去大厂必看！/index.html","fc9c787c63c86599289a085f3f3de6a7"],["/一分钟没了 1.5W 。。。/index.html","43697a1a19b25f3bfb914ccd4553e2cb"],["/一条高产爆款内容生产线/index.html","6e69a9226a258a6eafbd574f68d9abc8"],["/为高考学子推荐的六个就业前景广阔的专业/index.html","209f24a747950e2b692713d2177b698b"],["/互联网赚钱机器---社群/index.html","88db547133fa97e25da23a18ed7de2eb"],["/你们常用的工作方法和思考方式是什么？/index.html","724df67c7b95ba94e96a85b773dc92af"],["/关于环境配置的一些事/index.html","58674ad53b55f19adb31da5d25fa970c"],["/准备了19w！搞事/index.html","748a31372327a5d45ac2d0ba4adac3d6"],["/几个很重要的感悟/index.html","1ec7d13a128d1435890b501b95d5c6fc"],["/分割ROI篇/index.html","1b1a5320bc97d1479e128abc3d7a3e5a"],["/分割精度说明/index.html","0561e72b0808d6a2a37723f0b9df783f"],["/分块程序执行/index.html","29eb00d384c7b98e41bc39b4e484cbb8"],["/加班公司黑名单！！！/index.html","9b9e88aa4d7faa5be9be875b887adfd6"],["/卧槽，上知乎热搜了！/index.html","cc19cc49804b20d2e6afefc52f252467"],["/卧槽，我的小破站爆了！/index.html","5a45e59b9014348c290fe54ecde2ad62"],["/卧槽，我被盗版了/index.html","ce2cde4f381bda583384a27fd146ef88"],["/卧槽，还有985大学在大一上C语言课？？/index.html","a717ab124590fc77092891da55d9a278"],["/历年微软面试中出现的leetcode算法题/index.html","d3fb5003bede5ca1f6ff7501ed6a45bc"],["/去特斯拉试车了/index.html","feccff4120e4e0c5fce4d2cc2dc1d5dd"],["/吃苦的三种境界/index.html","c7928c791b4b52b19beffa66b4fa8e1b"],["/哪本书适合推荐给 Java 初学者？/index.html","f159265fecd72973d13e3104d4806199"],["/哪本入门级的学习数据库的书最值得推荐？/index.html","0e3d4fd0a31465136ce2d83d4adfcbb3"],["/国内外常用的AIGC模型/index.html","904b1f9585faefef40008bae18ad7e75"],["/国庆假期/index.html","6e5adcb832b3d9a2907c3a8aa479cef9"],["/图谱程序字典/index.html","3dfc431253bb26a05c621dc224766983"],["/图谱训练与分割/index.html","c5d9f9a990f90ae28b7c7734910f3052"],["/宣布一件大事/index.html","c767d88fc659bc65cd16a93e02b02d5c"],["/小鹏P7i试驾体验/index.html","b89ba735eac9c350adba3eec4e8bfbf2"],["/微信PC版3.3.0内测更新，电脑可以刷朋友圈了/index.html","c8581bca0bbc0a6b0af39d1843df56df"],["/怎么更快的赚钱？/index.html","dda94441d457dc11069c36283d85ba29"],["/我毕业了/index.html","a88855f9dbdf47aeb926a6b366249498"],["/我！真！的！找到了！爱上学习！的方法！/index.html","feffc4b741db7b55acffac2dd69a47f9"],["/户口的意义/index.html","c13f385ab8703c66aa63c29b63a70c01"],["/推荐两本经典算法书/index.html","187c9c9bf6a78d40793df5f09a6b16ff"],["/推荐几个在线学习SQL的网站！/index.html","1dcc25f401b60f6957f263e9309391dd"],["/搞了一个程序员成长晋级社群！/index.html","353b3edf7151b38943deac69d9750b83"],["/摘抄/index.html","ab64ae28866493ec2e350e811b91cab6"],["/暴跌30心态崩了/index.html","f0bc0bbea85b04d4ff14fc42f0b6ba3a"],["/最近很火的ChatGPT到底该怎么玩？/index.html","9a93c9a4459d0ec4ab4027445cf51aa5"],["/有哪些好看的日历可以买？/index.html","87c675ac0cd25ef33c2cf77011c1e7c2"],["/服务器有啥用/index.html","dd5069fd1621b3bd9c8ea3d13a71b94c"],["/来长沙了！/index.html","7e590ed2248f6ac81ee0854451122c91"],["/校招污点公司名单/index.html","a8b2f67de8b1411307cb88e575e4c3ea"],["/梭哈200多万/index.html","2f54ab174f7a0d4ec9c4e2416496445d"],["/梯形图入门/index.html","ff56ec193ffbd1285951a0e84c874b8a"],["/橙心优选，凉凉了！/index.html","b11e477bd1b4653c2d2831b5e52ffb66"],["/比亚迪汉试驾体验/index.html","0b7a2285a0496596d6de660af24de218"],["/清华转学成电，真的牛逼！/index.html","849847b89da2f8e4af3cf00be4ef07aa"],["/滴滴程序员被亲戚鄙视：年薪八十万还不如二本教书的/index.html","86f31dfd57aec6d90e12326f528a1b0a"],["/社群！/index.html","c4feee9ece9c32b3f206b3a0416660d1"],["/科学上网之VPN篇/index.html","336cd9e188a53173faf96d1b2220192d"],["/程序员必备的几个技能！看完你也是大神/index.html","c151f70bfeb12c04c8a876128fb80fec"],["/程序员绕不去的槛，Linux！！！/index.html","bd2de798bb6b398f4e1e80ad851917d2"],["/蔚来ET5试驾体验/index.html","39b589f6656d1420e6a7f4fa5cacd729"],["/蔚来，牛逼！/index.html","371bdb86a3436119d385a3625fcdc819"],["/被录取了/index.html","a616a44cd4de29fb10fbc898e7a6dc52"],["/被找事了！/index.html","71e3d1829a97a428fef863c4c5a5f5a9"],["/被拉黑了。。。/index.html","bb255496d2fc4129b77234b341918227"],["/被车撞了！/index.html","6999cc65fccc77e21385a8b63ef53f38"],["/该如何选购固态硬盘？/index.html","797ff97541a93f05762f09366f7236f5"],["/这本书一定要看！/index.html","09bbeb38c64cf22a32f4cf233b5f3ed3"],["/选Java还是C++？/index.html","352617036c9e4c673a1da5731723c174"],["/那些让你起飞的计算机基础知识/index.html","7444445576b73fa0b8ec2f3db8261b88"],["/靠这几本算法书，成功拿下大厂offer！/index.html","75789949515891cc9cedb59845a4a127"]];
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
