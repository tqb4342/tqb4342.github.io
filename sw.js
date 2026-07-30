/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/0010-city/index.html","2dd327a42029a54718490254308cafe2"],["/10-algorithm-book/index.html","8f665d4eaf9f611aedefb29fb03bc810"],["/10-website/index.html","59e242cf4b9ab4a10e9dafcd82324a20"],["/100万的小目标/index.html","6d4a77ce5c0006cc337d8a7ff80b06ec"],["/10w+YYDS！/index.html","ecd05707c5f887abd622af8430565c5d"],["/10website/index.html","eceb4faa90e00ceaaa6f1dff02da37a6"],["/12-technical-tutorial-sites/index.html","a63929a1c4a8b99b36c77cdbad39ef1a"],["/2 6 岁 了/index.html","14504da98b2e7d7bc186d5b64be1ec3c"],["/200万，啪，没了。。。。/index.html","94d554baae0c1b62ccbe3de1f12cc6f5"],["/2018ECCV-Paper-DL/index.html","980aca7a1f62996634a93f02545f5e67"],["/2021年固态硬盘选购最新攻略（小白避坑指南）/index.html","9e0d2ce6842a982b42f63042a9c0951f"],["/2021机械键盘推荐/index.html","5f53c6c1502093afb7320184e38ad9d4"],["/2025-07-15/index.html","6ae712357a7e9c2177b6f90f52aa2803"],["/2025年终总结/index.html","b049979b78b205fbbd5fc41e35c4e53d"],["/2026-Open-Internet/index.html","fba96b5da5b4cdfdad67dc8ed5ac3a9c"],["/2026-best-vpn/index.html","5cfadb619e477c3df85818156277b3c5"],["/2026-clash-vpn/index.html","7324f3a2e90f3143924bc44ca1c89bbe"],["/27岁了/index.html","07bb9deae8a724153b6f78e5ae406872"],["/3D-Convolutional-Neural-Networks-for-Human-Action-Recognition/index.html","330c2ca09ef19770a61a65e0dde307b2"],["/3D-Deeply-Supervised-Network-for-Automatic-Liver-Segmentation-from-CT-Volumes/index.html","ae6f323ac73a2a5da6ed5ee322ff697b"],["/3D-Unet-Experiment-notes/index.html","5a1386132580075054bd19f16c0933c9"],["/4-Software/index.html","e0f080f7ea5b40ed81d19ee23e9151f1"],["/6-website/index.html","8379461674bce2a10b1af21a1ac23e0d"],["/7-terminal-tools/index.html","2305df10d76040514986df3b8d03199e"],["/AI-PPT/index.html","27772001fb2f6135016ebdd58d10a10e"],["/AIGC中典型的深度学习网络/index.html","a0b111831defdbbe1be26a2ef544d5f9"],["/Accessing-the-Open-Internet/index.html","452814a3f59adfafa96b1792068f6396"],["/Agency-model/index.html","4df33c871031ffb85fbafd0777004ac8"],["/Algorithm-brush-notes/index.html","85f8c6d5ceddf3c3a1ad8ff9ba3cc836"],["/Ali-recruits/index.html","f020a4fbe1c9f94ed173ee7d1dbad791"],["/Android-VPN/index.html","fb1e1eeb7ebbd769357e0af64848a6a1"],["/Android-open-internet/index.html","f9aeb0aec9a862cd95b8bc2d87c2c684"],["/Appearance-mode/index.html","788bfe7c3d8d55b55c7d8344bef1eda1"],["/Backtracking/index.html","ad343e130b239038c4f907f428d71b51"],["/Baidu-Sao-operation/index.html","b11a5f928e4f7527e02d45df796ddb4c"],["/Batch-Normalization/index.html","957bf0af0e395919beb5229fd041d3be"],["/Best-AI-tools/index.html","81eebcb147097fbd94a61b53a3a892f3"],["/Bias-and-Variance/index.html","78c9a531fdc7215b6e6774779e5e1a03"],["/Binary-tree-traversal/index.html","73e9cdeefc8e650d91cadf7d719fca58"],["/Branch-and-bound/index.html","ed95bbc50004514ced26170bcfb016fc"],["/Buying-computer-for-the-first-time/index.html","10ed56995c4e7be0ce0e80dd13a43eed"],["/B站向北邮道歉！/index.html","aca6f3313419a4f4ef931efed560ad15"],["/C++-string-function/index.html","8ae4b971a533fb37c2e7cbeb530c78b5"],["/C-Java-DevelopTools/index.html","04d17b2bbab751ab482ea93b43abe524"],["/CS-Classic-Books/index.html","227da4391b67c3a3700028f0e5631944"],["/CS-network/index.html","f9fee478c5d6d6953ce9aec52cf3513c"],["/CSBook001/index.html","d7e975e43389274b9d686789c7b10b6f"],["/CSBook002/index.html","7c56321f60e9a09fd7170f0bdf1a0585"],["/CSBook003/index.html","8bfcdec3a92b4541915fee43e5ea0365"],["/CSBook004/index.html","385e7eb998f193e094a578769f6c6e0a"],["/CSBook005/index.html","9abfe1e21277cf7dca2b3fe9e7f7222e"],["/CSBook006/index.html","45737c655aef19e9d058afd397249d3d"],["/CSBook007/index.html","d3d15da3b59c2b2a8e65ff11f1bb9e66"],["/CSBook008/index.html","7ceba03719389f0afca1b4e4ee0e7855"],["/CSBook009/index.html","c6ab0c212d19e9a2bd2b31737b3baf01"],["/CSBook010/index.html","494365b7018a84ac428045fc7b48a62c"],["/CSBook011/index.html","48a7c7821c6eeff89fbf37b3b32f5031"],["/CSBook012/index.html","f3b94e63a414535540582293d10e28b8"],["/Changsha-really-fragrant/index.html","397d08b3a360adf471dcb0c5071a10e6"],["/ChatGPT-VPN/index.html","27d6641ade57a09346370c53614c803f"],["/ChatGPT/index.html","56a01e4a776631effd4fbf9cdd183566"],["/ChatGPT！王炸级更新！！！/index.html","f31a6a40f33da64f619c0714bc1e665d"],["/Chrome-crx/index.html","d1b72e72df598ff98dff1c4110683db4"],["/Clash-Party/index.html","a81ffad662215d025084c8e5d3183dab"],["/Clash-VPS/index.html","05ee638aa0b7e685ceb6beae9c0864b4"],["/ClashForWindows/index.html","668fbe5b3ced4b0c3fb8ec500bb6d1f9"],["/Computer-Classic-Books/index.html","768738e45c5592ff4e7297f44167fcf0"],["/Computer-for-another-major/index.html","f28493da44c88e800500ebda0bb7e602"],["/Conditional-confrontation-network/index.html","e4cae6f1b102b459280caa0ab2820c36"],["/DNN/index.html","1f2b4a38687337f21512d5db56ef47d7"],["/DSN-segmentation-liver-experiment-summary/index.html","0f22a97458d1730e89bd3d69d5ecdda8"],["/Data-enhancement-elastic-deformation/index.html","beae6de2bf796f229ba1a876848a7c70"],["/Decorative-pattern/index.html","aa9a6d18321ddafc3b0ae7625e38625e"],["/Deep-Learning/index.html","645c37b2d58318e25a1ca5fa4a99b76a"],["/Deep-learning-and-medical-image-analysis/index.html","d3438280607eefb47f77ce209cce8532"],["/Deeply-Supervised-Nets/index.html","cb52a714c795a6b593e3f1f50c709a6c"],["/Deformation-model-based-sparse-representation/index.html","c73a8b0a30458609db4117b56febcb38"],["/Discriminative-and-Generative-model/index.html","ff9979c5e5f5d4e4633dc7b7a907c942"],["/Distributed-transaction/index.html","adc2517b281d2504ea772bd2a50a5930"],["/Divide-and-conquer-algorithm/index.html","65f9efa4c8a24f442926cebd79750961"],["/Dll/index.html","a12e414bc6ed4f9962d47e3195b44684"],["/Dynamic-programming-algorithm/index.html","9430d358dfbd1437faa992c30e69c315"],["/E-book-download-commonly-used-by-programmers/index.html","5d03538703ed434169c09807387ad26e"],["/EditPlus软件的安装、激活和配置过程分享/index.html","3390aaeac5bd7dc557cbb77860061260"],["/Eight-sorting-algorithms/index.html","3d7c4de8165068e207339e454a2a0838"],["/Encryption-Algorithm/index.html","108fae8598f511af89bff13163cd6e06"],["/Eolink/index.html","8beccc80ccd24e3da5c573ffe84956cd"],["/Factory-and-strategy-mode/index.html","07fd84a6c363c881cb7dcb2ea2b6faa5"],["/Foreign-technology-blog-community/index.html","3c5b9afa67d7f11d885d790681ac4b8b"],["/Functional-model/index.html","787d2bbdc9b0ab4c3f3dcaf0944e1301"],["/Fund-type/index.html","79d271bf907515758ed708d87da09c11"],["/GPT-4o/index.html","38bfa1bba068de13986d3ec55a8d4cb3"],["/GPU-medical-image-processing/index.html","e8b2d2560b33c0b75fc696e29cd6f783"],["/Gemini-pro/index.html","483ab54de3880c09f41b68ec1ed4f2d0"],["/Gemini-vpn/index.html","116672e6df7711f3d557240591ffb08b"],["/Gemini/index.html","745c379dc28a659ef171588e894c5b56"],["/Generative-Model-of-Unsupervised-Learning/index.html","98afcb21cb54dcdc1517b989591fadc9"],["/Git-Learning/index.html","475e235c78d4923084cb6fe43a463788"],["/GitHub-2FA/index.html","5b20d396089620d124c034d8c935afe2"],["/GitHub万赞，程序员必看操作系统总结！/index.html","be46f15dafe994ac91cc427b8934019d"],["/Golang-book-recommend/index.html","3a190d4fec0915251292203830f4f83a"],["/Golang-learning/index.html","4faffce29bc889b6889cf5e8bc3e1c2d"],["/Google-Gemini/index.html","1859a325978801fad837796c8fdaa407"],["/Gradient-descent-optimization/index.html","28cdc7c21ad8e7fb84276573e29ffdbd"],["/Greedy-Algorithm/index.html","8103c21262a72b0d0f3bb5be1631605e"],["/HAND-User-Forum/index.html","398381ca8cfd00262bb73fc06e98c168"],["/HK-bank/index.html","4107a91a0f452952764ecf78bea9cc9c"],["/Head-to-head/index.html","c7fdd27d3265461d16315c11a951eea0"],["/HexoPage/index.html","5df9749e6b009e202d007618be2f46ec"],["/HistCite-Pro/index.html","c639d1e39575749f685a7faa65fdc427"],["/How-does-the-program-run/index.html","271b6da3ec720dc206bad63679582f69"],["/How-to-judge-whether-technologyisreliable/index.html","784b1fddb8c2f5c0ded9792d21dff00e"],["/How-to-learn-design-patterns/index.html","baf4c13c75f9e6e9800c221597306838"],["/How-to-learn-design-patterns？/index.html","561176c42088e58d9623e6c973502c20"],["/How-to-teach-yourself-programming/index.html","876ec721d4fd179ea4e468b8afbe9edc"],["/How2learn-Python？/index.html","87bd991d9f3e9b9bf092ae1bbb2a23a4"],["/IDEA-shortcut-key/index.html","8e4546c0e5c4055ff1a689efbd06558d"],["/IT-interview-basic/index.html","61527e4eda5faa058c7a28eb1df39222"],["/ITK-VS-install/index.html","7a5f82abb6e1933f8853735fee339e39"],["/ITK-VTK-ItkVtkGlue/index.html","701e3fd89710b3a7471d3849ec82cbd6"],["/Image-processing-plus-noise/index.html","ab43746d00d60886aa19e6c7a96c93bd"],["/Inception-Going-Deeper-with-Convolution/index.html","44d2358a32bb23b8783a640d9c404e2e"],["/Information-Cocoon/index.html","f1d78edd25353a115bf564234baa38c6"],["/Java-GC/index.html","e775e737006c4ed99766f67c32bd9ae7"],["/Java-Servlet/index.html","d1fb7ff5858d66d85f7cfcb72d9ed881"],["/Java-array-and-collection-sorting/index.html","5a17e4775f11064fa3157ac423f7f1dc"],["/Java-development-tools/index.html","e68ad20d4e8b6df868d520a1e56f5694"],["/Java-eight-data-types/index.html","755825ae4150082a1f30b0eab6043aa1"],["/Java-interview01/index.html","e9dae07e52e52623180125dbfc59c847"],["/Java-interview02/index.html","c7c74524ecd43a3608c7d39d75297471"],["/Java-interview03/index.html","701340a99eb6b8dc62311e55bf9f193a"],["/Java-learing-map/index.html","5db27e77cc2bb65986f34d7cc8f19450"],["/Java-learning-route-map/index.html","a84fa8ee9da3dc720a662eb87a7c7c2d"],["/Java-memory-area/index.html","c245f05a49c8f9f68a25535d5d15c3bb"],["/Java-memory-model/index.html","d214de04e8e2eb0431cb250a2380db51"],["/Java-multithreaded-learning/index.html","723ba1660e68e96d1e92875237ddd94a"],["/Java-project/index.html","c68d7868ce2371eaab2edcd101bd5fc6"],["/JavaWeb-Chinese-Garbled/index.html","c538fff4952514f5404c96c59922cc84"],["/Java还是C++？/index.html","434bb4110f3e94926e7a4ab09a76546b"],["/Kaggle5-step-guide/index.html","b1ace1914ef1457a2042e7ba65431c85"],["/Knowledge-points-of-Java-garbage-collection/index.html","b86fa309a7dde89f0b69c044b3153f48"],["/LLM-DP-TP-EP/index.html","484b14af9a093df56f902cdac6b2cd1d"],["/Layoffs-Hiring/index.html","51b04c103a5128aa0c6ca95b2afd75a0"],["/Layoffs-and-Hiring/index.html","72bb88393aa590b21079e7cd8988aa45"],["/Linear-regression-of-machine-learning/index.html","0ff8bf66a825d067e70fffca233cd851"],["/Linux-Compile-C/index.html","02666da1afdd1ca89220bd537d2f5db2"],["/Linux-ITK/index.html","f8420718960af3ae720fd25a57f19059"],["/Liver-segmentation-of-sparse-components/index.html","fde3caa1b199b7ca86ee3df37796644b"],["/ML-EBook-paper/index.html","ad2a750d770847d71f7758d1c4b7106f"],["/Map-uses-multiple-maps/index.html","78684287366915c40e10b6430d11ba2f"],["/Marching-Cubes/index.html","a4dba325ac7196c7b27f9c978c86ebb4"],["/Matlab-Graph-cut/index.html","90456e1fcb661a33f3b0a3f9647111d4"],["/Maximum-Likelihood-to-EM-algorithm/index.html","2c41cac295c6e77725b46c531ce4ef29"],["/Mean filter and median filter denoising/index.html","4ffaaaaf87bdc9bd7cf0d0f6126fcfd0"],["/Medical-Data-for-Machine-Learning/index.html","93bb19500bfae0c97aaf1a4e8a91619d"],["/Medical-image-analysis-deep-learning/index.html","fb5027bdb62558575aad3cb90a64856b"],["/Medical-scan-image-processing/index.html","b214f01262cda4a466390a6cc4f48584"],["/Merge-sort-algorithm/index.html","67e0a3912ef78c241396748d7f1e4e2b"],["/Monthly-income-2W/index.html","fd52a3ac0e063a83924c421a51c4a625"],["/Mysql-database/index.html","664791999eb2e1f88321f5b62fb7448c"],["/Neighbor-Embedding/index.html","efec1b8366c1fe30dc82134faf01de06"],["/Neighborhood-approximate-random-forest/index.html","919c6dde6dcfd4a4de19690c75ec1333"],["/Net-and-official-documents/index.html","77ca09ada7d882ae458b0967153d96a0"],["/Netflix-VPN/index.html","ea83b9d18065bb84af24976ad1f7399b"],["/Network-principle/index.html","da340135dd27e15f34165523e9413d1e"],["/New-Hong-Kong-stocks/index.html","e8fd3bfb8642c2c61983bc9cf66aaedf"],["/Nice-to-meet-you/index.html","0efb10b05bb464a22e3725f5dc9955de"],["/OS-processes-threads/index.html","f39314172433117d6a72da203bd59cd3"],["/OS-run-environment/index.html","ea4fc2f20082013f98c28df8b7b65b60"],["/Open-Internet/index.html","65958dd77d2a039afd83c8cfe9b3b8db"],["/Open-Internet2/index.html","0f0bdd11c041a448d44f5d752b2a8fa4"],["/Open-source-community-and-rewriting-website/index.html","eb01056f45433bc4b7c277437993d802"],["/Panoramic-image-stitching-based-on-SIFT-features/index.html","5d22a1f90e664fb110a3f3fd09fa58e2"],["/Parzen-and-KNE/index.html","a10be0a8385a6570ceed3d8dca0d6e34"],["/Personal-technology-blog-site/index.html","60f7086e3f8d45569d7966a64e87bf6a"],["/PicGo-Gitee/index.html","061d6b5e7bba20052b5574fec56a2227"],["/Programmer-treasure-chest/index.html","ad00c6a02609b7da1be91be6e7f7e1fe"],["/Prototype-mode/index.html","fe94a4cad2c6133552b331f63eba236f"],["/Python-base/index.html","b60aaf9a364bf2e3ca57597b5bffbd9a"],["/Python-crawler/index.html","b00a73442f066d3cb6700306695d2684"],["/Resume-revision-suggestions/index.html","8f5750026dd407fabd8487bfcb2d6729"],["/SEO01/index.html","ede7f30722bdfb67669bd2344e7d809f"],["/SEO02/index.html","0bdaca0b60393985c7f3719b31cee74d"],["/SPHARMPDM-MEPP/index.html","885d25aee74e8ed8824ecab452e017e4"],["/SVM/index.html","cd3ef5280c780315f1a108907c578982"],["/Seata/index.html","3cf64c5b3e9d165dd1ba2a966680ecb7"],["/Semi-supervised-learning/index.html","8e84d15dc64dbdbf4ba7c83315eda388"],["/Sequential-model/index.html","84b5452449c0e35ac7440e131269f97f"],["/Shape-Based-Human-Detection-and-Segmentation-via-Hierarchical-Part-TemplateMatching/index.html","9e0427f71b14c34922b945c2d00b7233"],["/Spring-basics/index.html","6f9ed85fba1da6b74f57419e23a8e54a"],["/Spring-integrates-hibernate-Struts/index.html","ad0ae575124b9d88f67df17e3bf63818"],["/Structure-learning/index.html","ead0fa0e092cb71797caa9366aa325c8"],["/Suggestions-for-self-study-of-computers/index.html","98d90c0f36aaed69c882080a668677b8"],["/Summaryof-HongKongStock-Account-Opening-Links/index.html","0d62d579ac37b11077ab5b004d2c3e71"],["/TCPIP-detailed/index.html","194329c851490daf4b76158588b7f430"],["/Telegram-VPN/index.html","11323add8bd1e3b7117066c70146e94a"],["/Telegram/index.html","d3c1355fb6ddec459fd1fbd6f7956c13"],["/The-essence-of-shopping-festival/index.html","3b89b3620970734862a31291652df48d"],["/The-most-important-investment-in-life/index.html","8b80d36df1a84829efd736d7cf063293"],["/The-most-successful-nvestment/index.html","58f65dd0d48b85c2cf14510e863c5d53"],["/Transfer-Learning/index.html","39968c2250b5cda03fa31d3d74196913"],["/Transfer-to-computer-major/index.html","d62f6b969bbfded43f14ae00d44110bb"],["/UNet-Convolutional-Networks-for-Biomedical-Image-Segmentation/index.html","d0550d0c8edc0a16f1f5bfbeb7a1410c"],["/Ubuntu-install-sougou/index.html","08e74774c5fcc782721dd9826e7e26dd"],["/Understanding-of-paying-for-knowledge/index.html","cbff19ce243830574355023147af3cb6"],["/Unsupervised-Learning-Linear-Dimension-Reduction/index.html","4ece17aafde66a612814b645e12d23b3"],["/VPN-HELP/index.html","975c1cc28f29341dc4f279bc676a5e0f"],["/VPN2025/index.html","14beb6079f4db0e7f0d9a5318fb13236"],["/VPN2026/index.html","9dddff2ba731a2325bf2a787eabc3f64"],["/VPN202607/index.html","a48416a542997c8b288900c8b60b4978"],["/VTK01/index.html","febf6fc8345ebccabed223619bc481b2"],["/VTK02/index.html","d4b2844765799f30f76952b927615a6b"],["/VTK03/index.html","5d7c037f6845fcf9117f5651737ca5d6"],["/VTKRead-write/index.html","654d74c246ba81604df4b5d58c65850a"],["/Vertx-Java/index.html","177800ff2f6e2d500badbe3d047c5755"],["/Vpn-OpenInternet/index.html","2e5f69d9753a412710ac4ae314540e17"],["/We-are-all-good-kids/index.html","a526123411719f43783afd5a4a56abc5"],["/WeChat-80/index.html","23c213a3bb9dd71fbfd706c70462bd74"],["/WeChat-red-envelope-cover/index.html","e10a9ca88b9c12fe1aa8b288b966fb59"],["/What-is-crawler/index.html","ef0f9474a00ddfd2b9ff0681342292eb"],["/Win-Internet/index.html","b62d5b9d6423dd27b25ee78ae295a0bc"],["/Win-Open-Internet/index.html","9a1789c63bf9557e21f8895089609ceb"],["/Win-OpenInternet/index.html","59dfd0479e3516336b57b6055f7791f5"],["/Windows-Android-Apple/index.html","5889fb4994474d829ad900c6eeaf8fb9"],["/Windows11-2kfans/index.html","b520c6ca36c184f289d5d5b7faddfff8"],["/Word-Embedding/index.html","7658af053e83d0d40ed8dbca73980b06"],["/YuanShikai-and-his-Beiyang/index.html","308528693b8e7796f2fd95ed3bf01a43"],["/Zero-copy/index.html","eee219be1a0d8bddf760426d4e106957"],["/about-keras-model/index.html","e0c0404718aeb33f24deb6a775ac2fde"],["/about/index.html","b28f0a25a083dda899b33b5ae88cfb34"],["/accounts-google/index.html","7edd5207bc0a8da4eccbe87b87fb6644"],["/ai-tools-guide/index.html","e1d7455573900dccfefbe121d3d71c9e"],["/algorithm/index.html","4b0442877509a96f6c4abdc1a8312925"],["/alibaba-Java/index.html","baad42d4779d04d82b451818b19f3cf3"],["/archived/index.html","dde5a113831db52fa91ee34e8e9764a0"],["/archives/2020/01/index.html","8d553cec8c59ce15e97038c5abd0156c"],["/archives/2020/09/index.html","f1b19f684a793c47b53c0eb2f314d49f"],["/archives/2020/10/index.html","6e216af7c4ea34596459bd3400468499"],["/archives/2020/11/index.html","08fea8168b0b29679e5f68575b0b273a"],["/archives/2020/12/index.html","74b4baddf19130198ecde0aa3d6d9fd1"],["/archives/2020/12/page/2/index.html","320d32a28b089a95979a64d30bee51ec"],["/archives/2020/index.html","d151e9aa4a7f44ea6f9790d9660c2c4e"],["/archives/2020/page/2/index.html","6ea9cee73ddcdc5249e6e250b18e9d43"],["/archives/2020/page/3/index.html","85c702cb2ac2fa3c1f1279672cf4118d"],["/archives/2021/01/index.html","b4b2f26d9683e145f47f44038572e146"],["/archives/2021/02/index.html","7d4001f2defd87cc3962f1ff10256d38"],["/archives/2021/03/index.html","41841c9f41c2da1ca57ca65d362cb224"],["/archives/2021/04/index.html","ba45ee3c0fc8d134db1d1bb137702794"],["/archives/2021/05/index.html","ea55ebfd46f0401e8df1e2c17f3c3551"],["/archives/2021/06/index.html","f3098644aca7add645255089018d62f0"],["/archives/2021/07/index.html","e4bcacfee49282e578f712ed8a147a0a"],["/archives/2021/08/index.html","4c7a547cbbfb1931716273ba95d8b8db"],["/archives/2021/09/index.html","fa8aa458d3e2c4715b19169646963957"],["/archives/2021/10/index.html","470fc41824a9dcd66cc78af94f341b89"],["/archives/2021/11/index.html","74992561d65a6867b2f70029d072216b"],["/archives/2021/12/index.html","c96e7e98bc42ce0e23bae87e9730e5ed"],["/archives/2021/index.html","3c933c578b9a052b5cff276ea91dee90"],["/archives/2021/page/2/index.html","934acc41466704d694138e32678e0d86"],["/archives/2022/01/index.html","11b910e7759aefdcd036a5bc7f023d89"],["/archives/2022/02/index.html","0bd490657f04993acf6c6af90ec72b24"],["/archives/2022/04/index.html","c81e236719df5ed143b708c95854fa92"],["/archives/2022/05/index.html","509bb50bc7364f12c547b263ab7d6148"],["/archives/2022/12/index.html","5e679f8f41b4def7b280bee0a2159b83"],["/archives/2022/index.html","66399151fd52b930689bbce5695a87b2"],["/archives/2023/01/index.html","3cae4fc7c43e2b5bbc3125891795d4ef"],["/archives/2023/02/index.html","1ab59bc692fab06b75320cca4f71e9ed"],["/archives/2023/03/index.html","bcd513b72c5c39e43f102caef734233e"],["/archives/2023/04/index.html","7a36c1010bee71e0f08cafff8a3b08d1"],["/archives/2023/06/index.html","5d524098d7e6a49e0ad03c497aa20ed4"],["/archives/2023/08/index.html","c782228ce17cc7c08b3ec68642b61f76"],["/archives/2023/10/index.html","601ec6e35624a3518a60bed688858732"],["/archives/2023/index.html","cbade945b259e1575ccc3afa021cd778"],["/archives/2024/01/index.html","36fae9de0e8879f7d295ffc49bf6e6e7"],["/archives/2024/02/index.html","b684059feb92f6aee6f80f78a61b6b57"],["/archives/2024/index.html","2391bf96ea35b2483bf73761a69b2300"],["/archives/2025/06/index.html","b28d542ac42516f9821616e7cd87637e"],["/archives/2025/07/index.html","d9cd1dd2a8e077d8d07f860dd0519c02"],["/archives/2025/08/index.html","c2c1ee87e459285a75aad486f5eba72a"],["/archives/2025/09/index.html","bbf7a3cf2e61ec522ad6883255c0b378"],["/archives/2025/10/index.html","0f77bba5420bf44dbf112c9a22e37fd8"],["/archives/2025/11/index.html","8605cf95672c52543dde051c8712b4f9"],["/archives/2025/12/index.html","8ba27078e45543ec3eda835f0ada6d06"],["/archives/2025/index.html","b625d88dc4570324be665d0c2cb2cb0d"],["/archives/2026/01/index.html","6258be2f258756e85c5a05070854c146"],["/archives/2026/02/index.html","bd3bf0c782f9967f6ab4babb519e143c"],["/archives/2026/03/index.html","e4d50e067dc108d127a4d13f54bfe74c"],["/archives/2026/04/index.html","e2024e8b9957463c19cc3400d6a70a25"],["/archives/2026/05/index.html","5ee4b37f534fc005cb2b61046420f8f7"],["/archives/2026/06/index.html","1af4173496012a547f55d938c7f1a9e8"],["/archives/2026/07/index.html","272132670ac7356aafb7d179cc921b48"],["/archives/2026/index.html","5e657e0a8423c765a257c006671244d3"],["/archives/2028/02/index.html","b77d995a63ca8fc5a76a923dfe091305"],["/archives/2028/index.html","8adc6c395f4744f1051ab1ca1adaa7af"],["/archives/index.html","c4f7e977bac6363299206306f4ef493d"],["/archives/page/2/index.html","582bd2f29d2e296e11f5c10a68d1cfd6"],["/archives/page/3/index.html","45e4280cab77af483ff8bedd395c6555"],["/archives/page/4/index.html","42b494a6d11073c01fe4b6410fec90d5"],["/archives/page/5/index.html","de67e2c81a4775cb9a4e9ee52976aaf7"],["/archives/page/6/index.html","021f9a74b1459c12834c768d08d75b06"],["/archives/page/7/index.html","313879a3d7f4eec69ded416c292439cb"],["/baidu-search/index.html","4ee7ae0df7997d07e2fc775bf5fac0c8"],["/baidu_verify_code-Hh2fKNlEB1.html","2eae288f1e7ee0ac2ba24ec1f8aad4ff"],["/be-a-programmer-instead-of-a-code-farmer/index.html","f6f80a1cd9888cda703d3a0cc7204312"],["/best-vpn/index.html","30eb964bd3425f156ac63f57be4137a7"],["/best-vps/index.html","c93fdce598cafeb35100db3e2a1d4ad3"],["/bought-a-house/index.html","ad7e55b44c7d1f69aef02271a2fb5d76"],["/categories/AI大模型/index.html","1c973a6295fb7995a5f169e0fe8e2ec0"],["/categories/C与C✙✙/index.html","c22c088a5a91d42cb2fbe47df208894c"],["/categories/Go语言/index.html","57c9da73a8947ee2b195b6e38b2c1d4e"],["/categories/ITK与VTK/index.html","41234b655b353d393b58d84bd7e682a1"],["/categories/Java/index.html","94425a855733155311eb16156d9f7325"],["/categories/Linux/index.html","83c9ab6853210bccf81e2829ba519ff1"],["/categories/PLC/index.html","81f4ec98a7d6a10a6cf8127e4f378ffa"],["/categories/Python/index.html","f76ae089f3370de2cfdb63b3e17264c6"],["/categories/SEO教程/index.html","e6d6cb69158c79d5e5a7e03ea58f8e9e"],["/categories/index.html","de112a3b94eed3595fe24aa9dbb24d70"],["/categories/图像处理与机器学习/index.html","087946ef360a451108c1bdada5efbf49"],["/categories/工具/index.html","ec9df861c724a3a35edcd45cf8306a9a"],["/categories/技术以外/index.html","1a76e9eff35e0990a5609dd143d6b6cf"],["/categories/技术以外/page/2/index.html","ac888936957fd0d109ba11b46fb288c9"],["/categories/数据结构与算法/index.html","4c30fa153fa9d43768a96ce9becd1e2d"],["/categories/科学上网/index.html","c4c5942f94dad1f621c717e4444d961f"],["/categories/编程经验/index.html","15945e6c7ebefa8112a0431ab7553448"],["/categories/编程资料/index.html","23a0c6cc2e1415a96a427098e6b9f2ad"],["/categories/计算机基础知识/index.html","7397efeb34680b5311bcd8815bb8621b"],["/categories/设计模式/index.html","1730c27c97c27ae5194f8e14286e8738"],["/choose/index.html","ed4d086e9cec070e2b657502845c3fd0"],["/choose2/index.html","f1b72414fe7a1a5bd8a9a0f21ac49010"],["/chrome-crx-intruduce/index.html","b7ab5d64a3c5ff06078e3bc5a4267fe2"],["/clash-free/index.html","b80a2468f6b628898814e7ffae693f06"],["/clash-guide/index.html","a6b6bbb2be087191bf4b47c61257dfb2"],["/clash-pro/index.html","c3c6f5b8076f0b688aa59689ba887586"],["/clash-verge/index.html","f5731e2b4fbc1d66a16d4d85d6709df4"],["/clashvpn/index.html","e2201722d14192ef6d4d017766dd7914"],["/claude-code/index.html","86dfb7484d0d5335c0210a11ab09b3e3"],["/coder-blog-website/index.html","710a4b81d84a4d6e5bbc3944dfcb71fd"],["/coder-source/index.html","59568d3f3dbbc7ee026c5ac79a1bd892"],["/coder-videos-website/index.html","444264f68a3e13a5a1fbf099e39da0b6"],["/computer-book/index.html","d0c5a6ccfc9c395501e9f7a456b448b8"],["/computer-censorship/index.html","00616caf8cb0f32610398f8305cb2edb"],["/computer-network01/index.html","7654b3850832a7ba75fed6984a866762"],["/computer-network02/index.html","8f4832b11ccab20554b9b82ad7f02398"],["/css/main.css","bc32ad34ec4990d934c3c647bdb62f79"],["/database-Mysql/index.html","67b609a6e5685da6d3ad0c21807ef76f"],["/eclipse-lombok/index.html","52d42d5ce5422655c5e0ff06e4bce82b"],["/freego/index.html","bc0abae8bf79e3c7f873ef4e5315b467"],["/fully-convolutional-networks-for-semantic-segmentation/index.html","3b1420362eba47b4c78f7fe164ceccec"],["/great-firewall/index.html","240bf9f16e1e2dbccb56699c85e26b43"],["/halfrost/index.html","0c5eb442d1779f1dbf910eb3957eff4b"],["/how-to-signup-chatgpt/index.html","62a07277e85ac1db3de995fb374cb39f"],["/how-to-use-Gemini/index.html","a151ad08ab8928e3ff30461ec4bd3f63"],["/idea-continue/index.html","8a4ecb0d5e375baa1e79f315a1e27c79"],["/index.html","f0d12f0ff72517c4aa0dab71abcafe36"],["/internet-dir/index.html","d96a76f47e5f45ca9e1f5964e8e45e37"],["/ios-open-internet/index.html","3005a30d3314ca4003eff22925e9a773"],["/iphone-open-internet/index.html","ebb1fcadc49891088416ff40abb5f3f9"],["/itext-makes-pdf-form/index.html","45a7426cecbfceed179fafafe9e407ff"],["/java-Set-Map/index.html","0a56c8bb70d28600036378c7fb90eca4"],["/javaweb-server-error-codes/index.html","9492c9a441ab70104a4263d7ebd33f2f"],["/javaweb-source-code/index.html","18f0e29b6f4bedc979709187862e3309"],["/js/lib/busuanzi.min.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/js/lib/lozad.min.js","47904d34a224931dd1b615c59a3dbe3b"],["/js/lib/prism/prism-coy.min.css","0ccad54d95845901ead59bfd3ecceb14"],["/js/lib/prism/prism-dark.min.css","a4711d2957d6605eb5682bdd228cf123"],["/js/lib/prism/prism-funky.min.css","efedcdccd7a9ab342d2d9cacd24920af"],["/js/lib/prism/prism-line-numbers.min.css","38e22e790c279bb56f9ec4b90a2a2d58"],["/js/lib/prism/prism-okaidia.min.css","5ac6f9de996fbec68aaa106dfb16e061"],["/js/lib/prism/prism-solarizedlight.min.css","ecc7e64d039873ffcf7fb27babdaeb5a"],["/js/lib/prism/prism-tomorrow.min.css","456af2a14ae4f5089939d5904ac40fe8"],["/js/lib/prism/prism-twilight.min.css","ebb5c355332a8cf9a1ce37a2a69d678f"],["/js/lib/prism/prism.min.css","a5234d614834658887cec6a9515890f8"],["/js/main.js","052d2b299d9c750afea8df0b802ab7c1"],["/keras+TensorBoard/index.html","228ed0558962a92661ff30c65bd802bb"],["/keras-beginner-guide/index.html","dbedb4b5270646aa1442b046af0c67a8"],["/kimiclaw/index.html","beb86aa287a46af17f4e877811ebf623"],["/kmp-algorithms/index.html","91b25eba4ec357ec777cfe9e98b98baa"],["/leetcode-Java/index.html","110ad94c0f4f43a3eedecf17b56391d1"],["/links/index.html","6310d7d144cf4db7f37654182d99cbdd"],["/linux-java-opencv/index.html","a069cdc0d331eaf7d4eae1fd9b37ef7a"],["/magic-internet/index.html","94b765af0a453068c1d240ebe8cb2f1b"],["/magic-vpn/index.html","b7448a4cefb7d0f7735e83b2d331bef0"],["/mingci/index.html","00ea90d600a1aa3b3e066f287414e2ad"],["/mobile-vpn/index.html","a1c0deca91acc6038fb6789fab8c2250"],["/msb-source/index.html","dccd1ebea0c713451bb702dd7e5b5354"],["/online-BUG！/index.html","813b27ecaee5ba6dcee8d47b7a761d93"],["/open-app/index.html","1954f36c21dddd042c450a3b762c50ce"],["/openclaw/index.html","f2c8c469d516a2dd8273f59997c837ea"],["/openinternet/index.html","8bd79b46c0d4a62d92a64f9f3f11c281"],["/page/2/index.html","0e4cdbc24a659143d618462470c915b2"],["/page/3/index.html","4f8ba183e08405aa599d279c0bda1aca"],["/page/4/index.html","1ac63296391f28d9a0ff07b4ce985cfe"],["/page/5/index.html","bc10ac7b12f561b74b4603857a4f44af"],["/page/6/index.html","20097cce540415360513249505b8314f"],["/page/7/index.html","0707c2925b18ac0202f954c73008e8c3"],["/pandas-data-preprocessing/index.html","796c06151230ff2c1cce56578f7c76a7"],["/phone-win-open-Internet/index.html","c2a7a6d324051c773db4154fe175a5da"],["/popcorn/index.html","66a7fd6a4763e89c194069f57b02a7f7"],["/protocol-cheatsheet/index.html","9413b8fd52d9e7e100783d9accd43d43"],["/protocols/index.html","443c8d9f838b25fedaad63b1944093db"],["/python-Blog/index.html","04644af1895874a37bc5725ff297a0c8"],["/python-yeild/index.html","318a288290748e1c2a2a0fe6e0cdab00"],["/python爬虫教程/index.html","38e4ebba934c31e75f2e92964c003c7e"],["/rmux-agent/index.html","8117dfcd2fa0ed26fd72c1fa49cec091"],["/route/index.html","e5d02df5967f122466a670d498d76fc7"],["/science-internet-guide/index.html","786496ec0574bcb074cc32c732b93a92"],["/search-help/index.html","daba91daa13b0ea9424624d5dee20f1d"],["/software-copyright/index.html","a36aef12a65274b612184df1b03be022"],["/sw-register.js","25da166a616d3512d1cba04d9ccbcac3"],["/tags/AI-Agent/index.html","463dbbce60af8da8e1158b0c434a8169"],["/tags/AI-PPT/index.html","3a3271aee97c58d98f74b884ec8a2251"],["/tags/AI/index.html","c277cdc2e031b914219873e3e0e7bbf8"],["/tags/AI写作/index.html","5df0d122fd9d4a981d956db1bfd081a8"],["/tags/AI工具/index.html","0d4f389f64af8b4e526dfea8963eafd7"],["/tags/API/index.html","3b28698ad735ac969b4341f9fc90b126"],["/tags/C-图书/index.html","71f7808546e3fff1f609ccccfe0bc0c0"],["/tags/C/index.html","6e3c6dbdae9aaf85d51e1250e7e8d9fd"],["/tags/CNN/index.html","0b75b256a172dfcc63af240a9785eb97"],["/tags/ChatGPT/index.html","13ca935642733920b98c2af2e9eda620"],["/tags/Chrome/index.html","7a233d44230a8805e9cc1d7ae95fe02c"],["/tags/Clash/index.html","c7f4389e0865266502806d14be5ebdf9"],["/tags/Clash教程/index.html","409e94b7248852a44166b56382b40371"],["/tags/Clash机场/index.html","5dd6d496550f4312a6091fc33beab1db"],["/tags/Clash订阅/index.html","afd70a6b53d3503877a09ff433d4fb92"],["/tags/Clash配置/index.html","ec1e0c87c675e39864fd7c40c969a707"],["/tags/C✙✙/index.html","c56f8f26a2e8c653b9f7a4c2b6f0e49d"],["/tags/C语言/index.html","b7a5f608cfcc4be8d7f934e0dc6a5f1d"],["/tags/C语言图书/index.html","daffc2477b3f3e0913c184059872c4dd"],["/tags/DSN/index.html","e12fc7bf52bb2f0974c99f79a4cb87a9"],["/tags/Dll/index.html","99bc68a290d61bcb397cb685d4943aad"],["/tags/ECCV/index.html","3036f84ec51e4d9dc4cf3f86a0b09a97"],["/tags/EM算法/index.html","258906a1153a38ff779af87f2ab062fc"],["/tags/Eolink/index.html","f5dd0b539af78f7c0d87f346d3d118fa"],["/tags/Gemini/index.html","b37adb6c3b016b6c3b23439cfad8f630"],["/tags/Gitee/index.html","a27e149637def3c876d46eb93b4e6bd1"],["/tags/Google/index.html","cd566fb9665b993851950a5661bf3901"],["/tags/Go语言/index.html","6d701a99b0c883fe173a8ab29f3b3461"],["/tags/Graph/index.html","cc7adb7cdf5033137e62933d98c3b58e"],["/tags/HTTPS/index.html","c14be55bbc1463e3458ab536795791ab"],["/tags/ITK/index.html","4f19d910fcad4c0036215dab395ae796"],["/tags/ItkVtkGlue/index.html","67e1ecbe15d02920eda9cab46dda0631"],["/tags/JMM/index.html","dab42192fee2597158c9c633fec2b0cd"],["/tags/JVM/index.html","f4730b90ad8eaf67b7158b53d561f77a"],["/tags/Java/index.html","1761e658a0d2eb5a8b04cb5c5ef09177"],["/tags/Java图书/index.html","f6f364dccda6454f66d579ff43fa6dd2"],["/tags/Kaggle/index.html","24bf9e37ccaf9bcfd5f168f06fb847a8"],["/tags/Keras/index.html","7fd8aa2ac62670b19b552f8555741798"],["/tags/Kimi/index.html","9a2917f9f34eb6ecc35aedc3e89dfee0"],["/tags/Linux/index.html","8180fe83042bb3d171e67099511bf88c"],["/tags/Linux图书/index.html","bc09531c5eb5f12d5810d3b8850097de"],["/tags/MEPP/index.html","8e81884a8d7e3aa11c76cd60550e836b"],["/tags/Map/index.html","77478d4624fffbde0e4bc9ced2588827"],["/tags/Matlab/index.html","76e00a85efabc27eb51095ff2eba6c70"],["/tags/MongoDB/index.html","90e4997f741310b0a1ba836e56b2d8ac"],["/tags/MySQL/index.html","9e4b8da0e3301fba630edb8bf52c9376"],["/tags/OpenClaw/index.html","882581c740ea804c76e7093df94426c1"],["/tags/Parzen窗/index.html","e3254840b3ed64391e80ee6543420a3e"],["/tags/PicGo/index.html","8d19741a63026284ebd0bae28c2247e5"],["/tags/Python/index.html","349c7bdabdb8e55db0ee1ef57cad238f"],["/tags/Python图书/index.html","5802782d49cfa7b9b432d7217b152bd4"],["/tags/SPHARM-PDM/index.html","1de8528cc6a104342355194463a25f82"],["/tags/SVM/index.html","bb7f773406fa64fe441f78f03cce0dab"],["/tags/Seata/index.html","0fc0ff6d8b0ba7d59aea900a6438b377"],["/tags/Servlet/index.html","e7dd30544ac96b938f0147e25dcfd7a0"],["/tags/Sping/index.html","6de21be5d3f94767f356910cbc6b8980"],["/tags/Struts/index.html","9fa1dc348f31094aadb2be02ce2c01de"],["/tags/TCP-IP/index.html","e623f2295c85ae454f1ab546e0fcc2f1"],["/tags/Ubuntu/index.html","fc908e105be63f2c9328b6ab8ece2916"],["/tags/Unet/index.html","3c1c1d79110d035b4aa24aaa03f49337"],["/tags/V2Ray/index.html","4747d919c1654b8688cefb6405ab3b16"],["/tags/VPN/index.html","b20bb1d2a9c804101335fd9922eb54e7"],["/tags/VS/index.html","17d511ac3830a2bd5a823a8f63fdc640"],["/tags/VTK/index.html","3f587493d640c0dcaef6aaf107f9b55c"],["/tags/Vertx/index.html","c0c74627880af82afebd3f0248dbda1e"],["/tags/Windows/index.html","f74f96e15842c6c9bc366d07c8e81cc2"],["/tags/Windows翻墙/index.html","be980d31ddf47b91b4c6ef7931bda816"],["/tags/claude/index.html","e3b12bd521e87f2558cdfbb047ca4970"],["/tags/edit/index.html","a59a5b1763c0af76edbc538a779cc6e5"],["/tags/hibernate/index.html","9d482dfaa92cdf3ae10bbeab21f20f16"],["/tags/iPhone翻墙/index.html","1c606bc9070f246a4a0c92d9f6315eab"],["/tags/index.html","763c56a8dc68683dab7e6270a7ccc5a8"],["/tags/itext/index.html","9393097a2cf67574a87b0c7e05b27c95"],["/tags/jdk/index.html","058e06204979f3a9daa38976daf0231c"],["/tags/kmp/index.html","0c2f3330e25f7a0f7e733a24d5866b56"],["/tags/k最近邻估计/index.html","abf0d0fd5bc0698f14d3f91b150568a8"],["/tags/lombok/index.html","840159bb4c1c06f8fb7e5e39de8fbb9d"],["/tags/macOS翻墙/index.html","3d25cd51855acb975a7ce52a7114c9c7"],["/tags/offer/index.html","dc629d5c6b27ddab71609a258892749d"],["/tags/opencv/index.html","eb03557fd9b4e908f6c429e5810da438"],["/tags/pandas/index.html","594b12e8c6d8bf6489504bbd853e8f09"],["/tags/rumx/index.html","c531d65369f09648c84e25b4883ad44d"],["/tags/string/index.html","be0577c1271c22061c710c0c62278e22"],["/tags/vim/index.html","8630e014d88a6135ec7973788c93c0f0"],["/tags/vtkPolyData/index.html","0220d8c064e1508054c651614b3679ac"],["/tags/web/index.html","e1f515ca375c07bab1f683436bf97d07"],["/tags/xshell/index.html","a6da67b579fe9ba5b9deb76421c6e792"],["/tags/yeild/index.html","3cfd8bee40c8ff86e5c78dc173cda29f"],["/tags/互联网/index.html","5575b5830ec8e741d875815bb3196a46"],["/tags/人工智能/index.html","4f1d6c17995c4891245b0cd6cc43baf8"],["/tags/代理客户端/index.html","36ee9e7c45069f2981655df9e9ee20fc"],["/tags/体绘制/index.html","29b01e68a20c349495eb97d88fc7708b"],["/tags/全卷积网络/index.html","4fe4ca264d4a8c94b77dcbb3213fcc2b"],["/tags/公众号/index.html","4624e82fd5b821bdbc967305feca494a"],["/tags/内存模型/index.html","c8029c513e2986239872a6d25e6e0c1a"],["/tags/内推/index.html","e720bebd57e84a166f7f511c0c82f4fd"],["/tags/函数/index.html","fc5f2a902c034cda674b19da22d34142"],["/tags/分布式/index.html","df5be9111c8bf3ead89906b4bc941c30"],["/tags/加密/index.html","f5962663d4f00f27a038062e88bcf057"],["/tags/医疗图像/index.html","3699ec455f7d231db972826f60aafeaf"],["/tags/协议对比/index.html","49289f051e919c09539df0a1f1ce168b"],["/tags/博客/index.html","3cc10eb6d6d4d86f76720f88a8d9177d"],["/tags/图像数据/index.html","f9d94000b2f5cc345801298bbf23c261"],["/tags/图谱分割/index.html","29e8fccae0abffd53406acab34bc3a54"],["/tags/垃圾回收/index.html","991d2e30e43ac447e75a063031532f08"],["/tags/多线程/index.html","c6da1c3217d0ad469c64e479e60a6df5"],["/tags/大模型/index.html","c5c978b5ee309e4b70e47fc094167221"],["/tags/字符串/index.html","2680842523af88ad76b894474e98beef"],["/tags/安卓翻墙/index.html","cb4ff9164b09c70f23505600a3f8f962"],["/tags/小龙虾/index.html","b1cd22427f1a86e2e5a12d80131f3efd"],["/tags/工具/index.html","f382b6afbcf2291b8deeb8f3afa3d757"],["/tags/弹性形变/index.html","468d9112f06872081eb186ee0112159b"],["/tags/排序/index.html","723443d6fcae5706d6fa1fa08b9739c7"],["/tags/搜狗/index.html","897286c718e486cb5fa42d3d638cbf1a"],["/tags/操作系统/index.html","482cdc8a1936be7599a77b5eb4e4cba2"],["/tags/数据库/index.html","4c0000935d093fcfcdad50a17307b409"],["/tags/数据类型/index.html","9236f0183638322756a8e05e18002e48"],["/tags/数据结构/index.html","93c782bd53d4be280102214359676e48"],["/tags/最大似然/index.html","9b8d460a9ad4812d3db8cb0325119128"],["/tags/机器学习/index.html","aa316679171ccf8d4c36252b62285419"],["/tags/机场/index.html","253bafa6575866208c07d65dcd762788"],["/tags/机场推荐/index.html","fe0e22d64f88cfb422bdaa82a3d27c6a"],["/tags/树/index.html","1ae075c43191983337ba7c49bb859433"],["/tags/框架/index.html","552c2ab92fdebed37adc10ac684da1e4"],["/tags/梯子/index.html","0b67f66ed8f8680edc9b4e42c7e0518e"],["/tags/梯子推荐/index.html","c5f8c1d358aca938c45a8779549c42bb"],["/tags/求职/index.html","791ad56866ef8a8906225e9ace967b3f"],["/tags/汇编语言/index.html","8a91daa0994deb59bc33a9c2988c77bb"],["/tags/深度学习/index.html","9c8eb67f333f23a847f922a6f5944385"],["/tags/深度监督网络/index.html","dedac68527c25bd96f14df685e51da7b"],["/tags/爬虫/index.html","aa2a4a9e86efb8f2423c494fd315f5de"],["/tags/电子书下载/index.html","aea69d59d9e2be40754a70536b0b05c7"],["/tags/科学上网/index.html","13ce3bcebcf186152f5a4c9e61e04d8d"],["/tags/程序员/index.html","2f3e512f4081e0140369779b0ef2ccfd"],["/tags/程序员面试/index.html","61998b82a2baec92df5349757d9d78e6"],["/tags/简历/index.html","8387ad1ad8e0135737d6a9638b2645aa"],["/tags/算法/index.html","1d2de98c770f04dba6e48088ec6ee075"],["/tags/线程/index.html","ffaad15e1abf7c3a974e9f805f78cadc"],["/tags/经验/index.html","a4a4002985dcd9f9cd9fb70cc3cf6a5f"],["/tags/结构学习/index.html","51f8e02e68c02233308d573d23775fdd"],["/tags/编程/index.html","6b64a45fa3ced2575ebafa59e4185eb5"],["/tags/网站/index.html","aa0ef9533554a8a8fdf75e50350eb413"],["/tags/网络/index.html","64fa388ead43b15ced71415b3a39df6c"],["/tags/网络原理/index.html","fe89829a76e0daf6c67ba0014ccb6695"],["/tags/翻墙/index.html","9e20d9e02c9fb30074621057e125fa40"],["/tags/肝脏分割/index.html","3a5d2136c712e3b51af0500a3d639407"],["/tags/计算机/index.html","dfe0228446144153f6003b7955bca442"],["/tags/计算机专业/index.html","a511879248736bf92d87700c848687be"],["/tags/计算机网络/index.html","4589c77d9421a042fce19b305451f49b"],["/tags/设计模式/index.html","862c7085f5929435f47894a759cc863a"],["/tags/贝叶斯/index.html","23dcd351a757652881c4e35bce5d7b5c"],["/tags/迁移学习/index.html","1f0b61a85747677a9f16a4b86fbed8b9"],["/tags/面试/index.html","cebec96b71f78dc11197dbfe7b2eed0f"],["/telegram-search/index.html","036893ea0bf6fdbe9a7518d81a7790fc"],["/the-meaning-of-reading/index.html","e5ad0f0f6d447ae84010f5612f92da12"],["/the-way-of-pragram/index.html","7fed96e14deaaf188921904cc1793794"],["/troubleshooting/index.html","f0c56e11d70652ca820c31834ad35f43"],["/untiypro XL安装/index.html","d10414da07e6b398505deca1b7f70110"],["/video-websites/index.html","bf53dddcf17be38a72aa39a598f69008"],["/vpn-freego/index.html","b953421793f857384bb22abc995d1904"],["/waibao/index.html","832b45ee17e19601a4cbabfe04ab887c"],["/wechat-fans/index.html","6d4f43eed78329f8e454f7540c650e41"],["/window-run-VTK/index.html","899f9929d6822d68d0456e553134421b"],["/windows-science-internet/index.html","db414294d3f6700f2f50d37fefbfb1e4"],["/xshell-connect-Linux/index.html","42c56246a32f97b84ac2189b623f9326"],["/yzhx-vpn/index.html","84b5bce3cdfc7528a31f375241556330"],["/《Java高并发编程详解》，去大厂必看！/index.html","4150a727f3bc73be5189c61ce712fea0"],["/一分钟没了 1.5W 。。。/index.html","cf4fb77ff33ab7c6f254c8b042f98f1a"],["/一条高产爆款内容生产线/index.html","0d9e0b251afeb4211dbfb5a323473ca3"],["/为高考学子推荐的六个就业前景广阔的专业/index.html","7ba26d0f0a0ac19cd10ca45670433cae"],["/互联网赚钱机器---社群/index.html","94cf85a0dc65080c41b1138564e14383"],["/你们常用的工作方法和思考方式是什么？/index.html","9215b90f3cf756ad5e6c698845ce4550"],["/关于环境配置的一些事/index.html","23dc86c3b551f0125081173582b0d483"],["/准备了19w！搞事/index.html","0c37f3fb67554e2fa241792128bc68be"],["/几个很重要的感悟/index.html","546cd125d3a9c12ab30c06ceb89ee0e8"],["/分割ROI篇/index.html","6e8b2933219a913d791bcc1fab038b5e"],["/分割精度说明/index.html","4b1e0bcf5103cb189dd8e6e154399803"],["/分块程序执行/index.html","dfc3d136cd79745c53f8b7ee8ee7bb4d"],["/加班公司黑名单！！！/index.html","bf396c9ccf35b01dd1827afc52862d27"],["/卧槽，上知乎热搜了！/index.html","c45a7d9a2bf706d36db9b3204d528b5c"],["/卧槽，我的小破站爆了！/index.html","2dd9a95548797395dbbe5d7274f3167b"],["/卧槽，我被盗版了/index.html","0017c46c7e5c14f4e3a93ef3f17c8c6a"],["/卧槽，还有985大学在大一上C语言课？？/index.html","ae490a504d4568a0aea429a335d2a43e"],["/历年微软面试中出现的leetcode算法题/index.html","25dcacc9ce890e5f8adfa6f83d2d92b0"],["/去特斯拉试车了/index.html","23808d48e7021d88a6cb068b4f5913b1"],["/吃苦的三种境界/index.html","dce6f1fc77285f40fdce39341ff70871"],["/哪本书适合推荐给 Java 初学者？/index.html","7d5cab3a43dc9852b5641a268c4af16d"],["/哪本入门级的学习数据库的书最值得推荐？/index.html","f7c6736bf66af390d21257cdae0ac2d0"],["/国内外常用的AIGC模型/index.html","50078afca44148dd1030af7c8aa2d1d4"],["/国庆假期/index.html","0b34e4be4ad52ead64138549b045dbcd"],["/图谱程序字典/index.html","e83f476fbd1e6245cdbfe1ba0466ee6e"],["/图谱训练与分割/index.html","5906e37aa099b68f5ee3566f14f69946"],["/宣布一件大事/index.html","12b080aa61f0c9eb5f7ebdc64de27e49"],["/小鹏P7i试驾体验/index.html","c62bd6e3f7a15b625b0f17df1dc254a8"],["/微信PC版3.3.0内测更新，电脑可以刷朋友圈了/index.html","aca6af469bffbea852d131d1fde97d25"],["/怎么更快的赚钱？/index.html","7a6d2188c3d169937fcac97a304e6d06"],["/我毕业了/index.html","75e142727ba9d36561188028fbad225a"],["/我！真！的！找到了！爱上学习！的方法！/index.html","9a322f9c248e5362705c07feb9901eca"],["/户口的意义/index.html","9d98fa70587280ddeb3029555342dab9"],["/推荐两本经典算法书/index.html","1878a2246575b42872f4fca94961a14b"],["/推荐几个在线学习SQL的网站！/index.html","c82d0355360013178cad105b4fb7c40b"],["/搞了一个程序员成长晋级社群！/index.html","8bd1bcac8c6e9e8870d587d9ef8632be"],["/摘抄/index.html","4e54947d67dd136164087d47892f8bc4"],["/暴跌30心态崩了/index.html","0e4bcb57542377410bcf2f161aa02844"],["/最近很火的ChatGPT到底该怎么玩？/index.html","e85484a8cf0062cc75e08283acd3674b"],["/有哪些好看的日历可以买？/index.html","6630ec123f3a0d824a3d52ce37d87631"],["/服务器有啥用/index.html","f9f8cd31ce03943f1c42b9ab23c45035"],["/来长沙了！/index.html","0954fdb29100a5d5959da98355efbeb2"],["/校招污点公司名单/index.html","fd363a16a881a31b96a3f728cde2b6c0"],["/梭哈200多万/index.html","e2d971ed7640e987d681d40a7c8ef767"],["/梯形图入门/index.html","9f8776b0db633f2e46ad9e11c765d04c"],["/橙心优选，凉凉了！/index.html","4124391e84fdc4ba38459572c2e3bf10"],["/比亚迪汉试驾体验/index.html","857d9cd12f78def145c679b37b374b51"],["/清华转学成电，真的牛逼！/index.html","9e61baa96d170dd978e7b712f69e76b5"],["/滴滴程序员被亲戚鄙视：年薪八十万还不如二本教书的/index.html","aaaed6439279b3e094be2d08dc54d7bd"],["/社群！/index.html","85d64b90e8b8c859d005b73326727292"],["/科学上网之VPN篇/index.html","1838b5967ae42e4fe1e5bf7f1858a8bc"],["/程序员必备的几个技能！看完你也是大神/index.html","d9343c4a2258bb3899b665f2293d65b9"],["/程序员绕不去的槛，Linux！！！/index.html","43df8cafe1c51e0802ee9995467c9ece"],["/蔚来ET5试驾体验/index.html","02b770b58837f0a0ea22718d196b295c"],["/蔚来，牛逼！/index.html","5d4159b29bca22a0378743e3ffb0ab9d"],["/被录取了/index.html","724413b8c42ee163d885ed3b564351b1"],["/被找事了！/index.html","88f9775f07cc22c9e2b182531a71b85a"],["/被拉黑了。。。/index.html","6f6813d4d6805e8ac4676aa81d45f4fd"],["/被车撞了！/index.html","ea31e27466ea05b4da61772f02ad25fe"],["/该如何选购固态硬盘？/index.html","08839b9d038376ed3cd505e431b2ddc1"],["/这本书一定要看！/index.html","60c7ec50eedc6443d49bf401c682d86f"],["/选Java还是C++？/index.html","a23d41bc401c5121418a21f00579a1ac"],["/那些让你起飞的计算机基础知识/index.html","d46a195ddabd8146d9213b1af9838799"],["/靠这几本算法书，成功拿下大厂offer！/index.html","9a74f73e51281ca76d62142be55c3f9a"]];
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
