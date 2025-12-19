/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/0010-city/index.html","648da241c6f6d921eb5b72b583116615"],["/10-algorithm-book/index.html","147cefb5045faac1c89da7abda35be7e"],["/10-website/index.html","94258b8074b0ea446f066807b3de28a2"],["/100万的小目标/index.html","9212996c21c8e862b2b5ce74321cd4dc"],["/10w+YYDS！/index.html","e07f7fbee76df2409cfb31b1a46ad1e4"],["/12-technical-tutorial-sites/index.html","ce52b169bce4a0f2dac97e41a3f2c8b3"],["/2 6 岁 了/index.html","ba5e5597deb364a7115a22bb6911e613"],["/200万，啪，没了。。。。/index.html","5e9e057d70f5ccd1a816b17042e88103"],["/2018ECCV-Paper-DL/index.html","60b18c96ed7f773cd9c7ab3fec577209"],["/2021年固态硬盘选购最新攻略（小白避坑指南）/index.html","54a495d6aa2e535e3e45f23216ef7d1b"],["/2021机械键盘推荐/index.html","96f8c14da9c80e7c88a860e3aa366041"],["/2025-07-15/index.html","8af4e3993652a458cf1c322106bf4f57"],["/27岁了/index.html","e54fea53472246820e931304ea534fce"],["/3D-Convolutional-Neural-Networks-for-Human-Action-Recognition/index.html","88db48a3ae4d60bcc50631af8becfe4e"],["/3D-Deeply-Supervised-Network-for-Automatic-Liver-Segmentation-from-CT-Volumes/index.html","299d525180671c87a30ae9e290fd463d"],["/3D-Unet-Experiment-notes/index.html","94f0ac59af4af78ef522325970c5dde4"],["/4-Software/index.html","46e44c02d4debf0ac8d38fb091ba4f66"],["/6-website/index.html","9f8792b82ae12c844173019300c70dfc"],["/7-terminal-tools/index.html","4e413ccecf7acc1a3558d985d9bd64b8"],["/AIGC中典型的深度学习网络/index.html","d70316c826471343912e157693be1ce1"],["/Agency-model/index.html","977d2027ab3dc312c722f5e2c855897e"],["/Algorithm-brush-notes/index.html","49db59f37041f12d3743ec64e9d93dd1"],["/Ali-recruits/index.html","b05f26dbacfd421ed33402d634059fcc"],["/Android-VPN/index.html","31d4d35470f3f778765a4e4d798f3484"],["/Android-open-internet/index.html","76f12e26fa0124fc7b731e68d46402f1"],["/Appearance-mode/index.html","4ae397400f5e0f3ebacfa89629e0d0a4"],["/Backtracking/index.html","1faacce3c87dff684b39c376b8b19972"],["/Baidu-Sao-operation/index.html","bb524f3d6136e71f9693bc25b9766b18"],["/Batch-Normalization/index.html","bdfbddf4f20c4c8f5772acd0f3c9165c"],["/Best-AI-tools/index.html","863b3defd2cac2d039d443b285f93b60"],["/Bias-and-Variance/index.html","456ec697ecc6b99d698fa7df28145014"],["/Binary-tree-traversal/index.html","e53b9deb7bd54aee9dbd0d0091ceefa1"],["/Branch-and-bound/index.html","f153fbb7648a62fbb14b5ba0d582b009"],["/Buying-computer-for-the-first-time/index.html","9bc07226513daaf089faf35945f9c301"],["/B站向北邮道歉！/index.html","7ec280aa6b39d94bf06f380eaa9ff0da"],["/C++-string-function/index.html","d2c1e7b330b9add11d71a0717b4bef14"],["/C-Java-DevelopTools/index.html","50ff9c45620d8f1e9b260d35541d774b"],["/CS-Classic-Books/index.html","f2ef355439852cba7cd2dbf433d8835e"],["/CS-network/index.html","9e349813d2fb2b6cf4327977593cbe57"],["/CSBook001/index.html","d430fa9dc3f657c8245bc51ff23d4da6"],["/CSBook002/index.html","e696ca25e3318c02998608ba98ea968d"],["/CSBook003/index.html","767878db646095896bb698ce5c2a4918"],["/CSBook004/index.html","0d5da97fbc0aa5d0cbae9620c4a17751"],["/CSBook005/index.html","69d1ca3f5e635538761104b1d38cad17"],["/CSBook006/index.html","bd49f8195733386267f9f5b41b817dde"],["/CSBook007/index.html","e8b4ab773386307ae0ec9c721a9b76c2"],["/CSBook008/index.html","7b74104753a9e0d112355706b07f1918"],["/CSBook009/index.html","1d92dbe110dbc78c8000cf1a395f52ea"],["/CSBook010/index.html","8c19854c430193a1a32e8b3c32aeca7b"],["/CSBook011/index.html","33f3e9e732048e9b11165702a2e5e4a6"],["/CSBook012/index.html","28a9a221a05e81105ef227270010cde7"],["/Changsha-really-fragrant/index.html","fe5eb158a33021ed9a57349e6cdc17b8"],["/ChatGPT-VPN/index.html","cd37e95d1c4fdf285b0601745c680675"],["/ChatGPT/index.html","39586131ffa5932e6544ee04d583d68e"],["/ChatGPT！王炸级更新！！！/index.html","638b741956e33e1af1f6ef040ab31e55"],["/Chrome-crx/index.html","c9eb24f2a3c1f91dada462798f8169ee"],["/ClashForWindows/index.html","9c9776d37c91e2272ce66125b3604a77"],["/Computer-Classic-Books/index.html","1f835c84605769a69b64b27060345d50"],["/Computer-for-another-major/index.html","2434d7b7359ad8c59ce605ffd1d1e258"],["/Conditional-confrontation-network/index.html","edb75d514e5e2354627d345879f0db05"],["/DNN/index.html","56781b204fd568d448b9f6d1263d52ed"],["/DSN-segmentation-liver-experiment-summary/index.html","c844f04100c8da0eba194d445ffebe83"],["/Data-enhancement-elastic-deformation/index.html","a77b43a4d644e204805db40aeaca9585"],["/Decorative-pattern/index.html","68770973c1c810a8cc636958f0b2cef4"],["/Deep-Learning/index.html","3f5829063f44fed3c5dc86581257f388"],["/Deep-learning-and-medical-image-analysis/index.html","e4d9ac8bce1d9570683b4e3e955e6a65"],["/Deeply-Supervised-Nets/index.html","bdf37a1b2c891c56a8a74cbd7af8f82d"],["/Deformation-model-based-sparse-representation/index.html","72dca965f4274219d90d8ae93a468c92"],["/Discriminative-and-Generative-model/index.html","f017b3274d74b321d697a02e177812fc"],["/Distributed-transaction/index.html","4075db2043480f1ca1b5992a5e5f070d"],["/Divide-and-conquer-algorithm/index.html","c34a81a96d81d8d752bd14713c46cfc1"],["/Dll/index.html","6808d8bfd4cb72db693086a37105f505"],["/Dynamic-programming-algorithm/index.html","43f5952b905a746adb09747f303cd67c"],["/E-book-download-commonly-used-by-programmers/index.html","ea9644045a182e07531bd9b0e740320e"],["/EditPlus软件的安装、激活和配置过程分享/index.html","fc391da8c4a03e5db3cb24742a51e9e2"],["/Eight-sorting-algorithms/index.html","dc43928288ea00041cb9b4d670345d32"],["/Encryption-Algorithm/index.html","bf5180e23816edab9acea787140e09ce"],["/Eolink/index.html","556717c0ad7319ff095fc29e75a0cb3b"],["/Factory-and-strategy-mode/index.html","8d88771b856073c25db97aa8c49edea9"],["/Foreign-technology-blog-community/index.html","c1814dc32c458dc1f0c4b51954e22b36"],["/Functional-model/index.html","b3b1e27d98cc422894452d42c7ad9124"],["/Fund-type/index.html","c026c4eba75c2482822582dd87637d01"],["/GPT-4o/index.html","20e98b4687931941f3952d100299d27a"],["/GPU-medical-image-processing/index.html","91e82cdcae3a5d75f13397a6c35684a8"],["/Gemini/index.html","7d74aa7ecb07018bfab0d4975abecc5f"],["/Generative-Model-of-Unsupervised-Learning/index.html","79ac0b5247908eda14c78d84a4cb300a"],["/Git-Learning/index.html","31f29b081cdb5430e1c1c0af70aae035"],["/GitHub-2FA/index.html","5fb11d1cdba9fef479f85af7d223e759"],["/GitHub万赞，程序员必看操作系统总结！/index.html","5699168f0af9d470f81027f31dfab562"],["/Golang-book-recommend/index.html","0cbe136ceced23664573db86282d258c"],["/Golang-learning/index.html","8f7e2b0347037ff37f89b99eea494828"],["/Gradient-descent-optimization/index.html","58bc1bf432cc0f37634cab0feb1f98a8"],["/Greedy-Algorithm/index.html","9acec9feefbbd254eb7052d71d585861"],["/HK-bank/index.html","f524b3f4916c08f1e1e217c7a3445a91"],["/Head-to-head/index.html","4623840a87554412f2b3940c0fd54b5d"],["/HexoPage/index.html","d76d8f00c77e69dd7869bab1637699a4"],["/HistCite-Pro/index.html","f1e72de38d888f8e1ddbe3b9d1c894b2"],["/How-does-the-program-run/index.html","09ba7f4b60d8c1a5eb159890cd27081c"],["/How-to-judge-whether-technologyisreliable/index.html","7e8c6c2abb3d63a475546121c1f1fcef"],["/How-to-learn-design-patterns/index.html","200ee673a153ce269980444d7a2b8bed"],["/How-to-learn-design-patterns？/index.html","eb281a0457d618e1951fb8936f9fa537"],["/How-to-teach-yourself-programming/index.html","472f5228a5af354ebdb90aabb9ca66df"],["/How2learn-Python？/index.html","47913d4173e092c470f8b045163869b5"],["/IDEA-shortcut-key/index.html","4c7fe5104fcf72bf0667b5baa99acc2b"],["/IT-interview-basic/index.html","1ac2608dbdf708bd3b674fdf4c52fb36"],["/ITK-VS-install/index.html","b8143ada14b973c1a54380fcecb41ffa"],["/ITK-VTK-ItkVtkGlue/index.html","6142d14563f2c72c1184873c41f63353"],["/Image-processing-plus-noise/index.html","0bf97df97dd219a344c7874768398d96"],["/Inception-Going-Deeper-with-Convolution/index.html","a3dc52e63d60757aa24e4602b83f83d1"],["/Java-GC/index.html","d11c11f7a0fdbd10e26d8793d066a659"],["/Java-Servlet/index.html","fe8b5b61e1f5327652682a17b62e0e1a"],["/Java-array-and-collection-sorting/index.html","d19a687cae59b2c0626cfb0e1f97e1eb"],["/Java-development-tools/index.html","ca859c744287f2d60328a52365045b19"],["/Java-eight-data-types/index.html","ab79248661741ee420bbe894554bfa27"],["/Java-interview01/index.html","d6c4d0a552a1f0a0a7c97fed420ec7c7"],["/Java-interview02/index.html","01b408eabb7f088939877819b14f9d67"],["/Java-interview03/index.html","4c843f88aae767753357639dba5753a0"],["/Java-learing-map/index.html","e23097b1317f227f5fbaf8124de4fa1f"],["/Java-learning-route-map/index.html","82c183eb8c97c1059fd9a7e9fba7f0c1"],["/Java-memory-area/index.html","7bd86d0bfe47a6f949b4b7d8dd1d5b4b"],["/Java-memory-model/index.html","50c5f1cbc9908ca307e82ffd6377b948"],["/Java-multithreaded-learning/index.html","64a0bddbc0992ec08297aa03d9a10d65"],["/Java-project/index.html","0571f3f708367f35ba923420ace731e6"],["/JavaWeb-Chinese-Garbled/index.html","02059ee25c6a1180a27a1fd7a91fdb01"],["/Java还是C++？/index.html","9c0d11ebd7431ff0e8dfc679f2be2494"],["/Kaggle5-step-guide/index.html","c4718b1e6fe22ac3fecb1f896aada9c5"],["/Knowledge-points-of-Java-garbage-collection/index.html","adecfb983edabd693e9f039ce8fcb6a3"],["/Layoffs-and-Hiring/index.html","a116f4960bee7967e2bc56b36b264dee"],["/Linear-regression-of-machine-learning/index.html","93aa24d6173bf996f20a77fa4cd8c56b"],["/Linux-Compile-C/index.html","bac3b0e81fbf47e0d93cd7a9c6e09352"],["/Linux-ITK/index.html","afe55bebe46e1d4481824123ced8c06f"],["/Liver-segmentation-of-sparse-components/index.html","506d279572692e9e574e841fcbf3c561"],["/ML-EBook-paper/index.html","eb6ae38d64bbd8299c5be5155c35bb62"],["/Map-uses-multiple-maps/index.html","6be308d24388db84aa8aa092afb27bc4"],["/Matlab-Graph-cut/index.html","0cf2ed91d6a2ef455061dec4a349cbb3"],["/Maximum-Likelihood-to-EM-algorithm/index.html","f79c044c316d20057a8ffc326651f08c"],["/Mean filter and median filter denoising/index.html","68addc8a7d7f9a31de18dfa1d9a5e7a9"],["/Medical-Data-for-Machine-Learning/index.html","f247d9d874bc10af1c89fbd23ce05b52"],["/Medical-image-analysis-deep-learning/index.html","f94c5d74c8284df6f215d81c8ecaf55b"],["/Medical-scan-image-processing/index.html","e4596bbc222f5cd721dfbcafd85349b5"],["/Merge-sort-algorithm/index.html","ac65b8517a4adb77763b977db4b2faf0"],["/Monthly-income-2W/index.html","0f216b7935e295ed8a9ff02a48b4f749"],["/Mysql-database/index.html","4a3354b58cf6e39f3392dc1985c43e6b"],["/Neighbor-Embedding/index.html","1d986c2ffb6231be589e846e948facf4"],["/Neighborhood-approximate-random-forest/index.html","8d6a078e3f6f136749ca393ec6a75518"],["/Net-and-official-documents/index.html","c70a851da174459d39b2fe1fb6998416"],["/Netflix-VPN/index.html","d0b5e2e603ca7d28f7bde6d2ef978cc8"],["/Network-principle/index.html","2eb5e245f85fa7f5c7938ef01e1d078f"],["/New-Hong-Kong-stocks/index.html","0dbf278b9c82053bcb87e368febba2d7"],["/Nice-to-meet-you/index.html","8c358d2a9e533894b67233b9ecb964da"],["/OS-processes-threads/index.html","792050cfd2c8bb536bcc5e6c07775729"],["/OS-run-environment/index.html","8609ee36e0ad2d03da325d13da8babe7"],["/Open-Internet/index.html","9377e0c5cca976813a3daf34eb467129"],["/Open-Internet2/index.html","4074ea2a9ec2bf67b72d6cf3440fc6d0"],["/Open-source-community-and-rewriting-website/index.html","71254e3d7b0f49ce345db58a9f1adcad"],["/Panoramic-image-stitching-based-on-SIFT-features/index.html","a4ff7e4045d116385970372c87e2a0bb"],["/Parzen-and-KNE/index.html","f6635fe0799cbc96c065263468ffa0a4"],["/Personal-technology-blog-site/index.html","a4a200072e820fdf2d346acd760f30b4"],["/PicGo-Gitee/index.html","483c659cd323894201707ba7d3f42946"],["/Programmer-treasure-chest/index.html","43389fbce4e0496fad7db439be3d2852"],["/Prototype-mode/index.html","581a109836804855d9a052806ba854e2"],["/Python-base/index.html","83f5d020d7976559a1fe543e89be35f4"],["/Python-crawler/index.html","7251b12a108e4a8a76375f45f3721710"],["/Resume-revision-suggestions/index.html","440e659d7ce1e9c976926e8746152a58"],["/SEO01/index.html","4133881820dc1ae123c73dbdb33fed11"],["/SEO02/index.html","cb08b7270ecc5f0f57a6cffd6f111e6b"],["/SPHARMPDM-MEPP/index.html","8749ef1d8dd12dca04a94bc79ea51a18"],["/SVM/index.html","39ff0a1d20e2cf3e8f57294390a37e0c"],["/Seata/index.html","a6a694e0b296e957ef1a3d495fb80f99"],["/Semi-supervised-learning/index.html","ad4661b1bdebe8c845405ac5fcf13191"],["/Sequential-model/index.html","9854e7f4d800d4e12db04e5e08898299"],["/Shape-Based-Human-Detection-and-Segmentation-via-Hierarchical-Part-TemplateMatching/index.html","4dec17b6f0ac8d5cd725c69b1f80d1ba"],["/Spring-basics/index.html","8a10542a2e836d306fad2493114ac9b2"],["/Spring-integrates-hibernate-Struts/index.html","ea3b5b208f2f067aeeca540437a65eaa"],["/Structure-learning/index.html","676593c8328fc1b0e0cb3a0ad98791cd"],["/Suggestions-for-self-study-of-computers/index.html","7528b2755c47845e86bc6c34bf5ba2a5"],["/Summaryof-HongKongStock-Account-Opening-Links/index.html","e1fd885226f68666eb10af7263e1289c"],["/TCPIP-detailed/index.html","7f51c35a12e619267779e4b629aff029"],["/Telegram-VPN/index.html","cfb636ff667e7de9558dc6636af114f6"],["/The-essence-of-shopping-festival/index.html","82f5881e1393b28741b9f9c04818ab6a"],["/The-most-important-investment-in-life/index.html","958457d04a0a21359908a3e4e59d9f7e"],["/The-most-successful-nvestment/index.html","c8ebbdf62427b8a7c0e59f99cc77e765"],["/Transfer-Learning/index.html","b1aa7f977f7a2b9f73bed351248a4f04"],["/Transfer-to-computer-major/index.html","190f0019c9e82d97798f4869724ceb6f"],["/UNet-Convolutional-Networks-for-Biomedical-Image-Segmentation/index.html","f4effbf41b9f4074c0a8e7f5cd3fef51"],["/Ubuntu-install-sougou/index.html","f5a6c908aad72bbd9bcfc1676a78285f"],["/Understanding-of-paying-for-knowledge/index.html","3dc9e6cf46a0018ce6836b018db1a199"],["/Unsupervised-Learning-Linear-Dimension-Reduction/index.html","3130362cbc5eebec8aa54b5d9117939c"],["/VPN-HELP/index.html","e2cacab7d5348b8ec253d98858a1e330"],["/VPN2025/index.html","a27e4732c00e661196f86259e3a8cde9"],["/VTK01/index.html","e8da235f2e09d80e207b68c4a3e0661f"],["/VTK02/index.html","e02ca557b552182247f58749519b15ad"],["/VTK03/index.html","792a7f8151390f89264155cf459ffe70"],["/VTKRead-write/index.html","289c9154bd37814cb0eb1f7272723f86"],["/We-are-all-good-kids/index.html","25189607de98a9d2e5d03726d227b44d"],["/WeChat-80/index.html","841690a42b025ab5c4c41b5b61b880fc"],["/WeChat-red-envelope-cover/index.html","3e4c0d85da59efee52cecbc1fc17fb96"],["/What-is-crawler/index.html","fecaf0f615addb8c12f3690f4adf041c"],["/Win-OpenInternet/index.html","fd22fe3403328e86c7b4a5426e2fcac6"],["/Windows11-2kfans/index.html","5ad48e85f9a74a1c95deb485efb7a0b6"],["/Word-Embedding/index.html","fd6c48ff309eb4b13a3bcc3777172372"],["/YuanShikai-and-his-Beiyang/index.html","deec2a5ea780268c9f17df0af0a59c26"],["/Zero-copy/index.html","d2a3739788e00f94b23fdbac01423d3a"],["/about-keras-model/index.html","d710206efb8591667327a36bdfd84986"],["/algorithm/index.html","a506a2938d2cd3bfb3f7c916602fe89a"],["/alibaba-Java/index.html","53d43e9950357dab8a99ddfa975c6b7a"],["/archives/2020/01/index.html","32cef6921edf65161fd29d3b544aed27"],["/archives/2020/09/index.html","f0ca3e650ab9efdd3210d193d97011c7"],["/archives/2020/10/index.html","64c93c8efa30ae9c2e376d909a345002"],["/archives/2020/11/index.html","49e3fed67f5ab1062a48e2fd54f83f72"],["/archives/2020/11/page/2/index.html","d2d27eb88289c0dee9ec90696f166cb9"],["/archives/2020/11/page/3/index.html","4065b69d32c580a730ff094e28749cfc"],["/archives/2020/11/page/4/index.html","2ed8781046ceccf983cdc70e23d306ae"],["/archives/2020/11/page/5/index.html","408d9d0bddb586a9a30ce3577a715a0b"],["/archives/2020/11/page/6/index.html","8ab627ec42601f5e7ccf799553925f9c"],["/archives/2020/12/index.html","3624e67df22055224c4c11fadc2cfb8f"],["/archives/2020/12/page/2/index.html","dd050d7fc3e7364dba03bc148919df89"],["/archives/2020/12/page/3/index.html","3e30f938394fe444bc71cb8a6c7d4760"],["/archives/2020/12/page/4/index.html","ba08e4dd6d64ab0262936a83f9f076cc"],["/archives/2020/12/page/5/index.html","57ff42910a26eac3b480cb74a05c12b8"],["/archives/2020/12/page/6/index.html","33f19995f01dd1dbbb914a93c13afa65"],["/archives/2020/12/page/7/index.html","cc9b3aba4e944ef6c14ba407595cb128"],["/archives/2020/12/page/8/index.html","b8d32509c7394fa64b4266c4b303411d"],["/archives/2020/index.html","b4d4101e33bea78d3f4046a01a0e06a2"],["/archives/2020/page/10/index.html","2b9e702b0c321ac0c51c7edabfd151ed"],["/archives/2020/page/11/index.html","996c84b0550510eff6f21215690bdff1"],["/archives/2020/page/12/index.html","bac977ec6f78cd58566b5c559a4e7d77"],["/archives/2020/page/13/index.html","ed29e333dcf176818a3748e2a820a1ed"],["/archives/2020/page/14/index.html","dff32f3452a84c5f763186a9975de54e"],["/archives/2020/page/2/index.html","1cb0b73b8cc564e9890ef9f38343e8f5"],["/archives/2020/page/3/index.html","7f88c8ae9df06d2d0ef725c6c196f4f6"],["/archives/2020/page/4/index.html","30935480ec5582b7ed511d3e94c737d7"],["/archives/2020/page/5/index.html","5b2d6bdfca39bb4c2ab7badb1f8424f1"],["/archives/2020/page/6/index.html","e4f06acfa7588ce69eaf5da06494aec6"],["/archives/2020/page/7/index.html","203f9edc5f1a9ca1c4c43f56fa9fb08c"],["/archives/2020/page/8/index.html","f6baaba300367be82c12e6a8b1714dc9"],["/archives/2020/page/9/index.html","2362dee3a00c9067fc72599eadc0b2af"],["/archives/2021/01/index.html","948e012ff1f6c3a8d151ad6a066401c3"],["/archives/2021/01/page/2/index.html","ffb278c39298a50ce099776dd19ccdf2"],["/archives/2021/01/page/3/index.html","533b8169851c681cd40bd4c464af58a1"],["/archives/2021/02/index.html","bfeb49bb6f002e687f2dbe343c2cd007"],["/archives/2021/03/index.html","84643126bd5d4db902ec1b9ba1a5c7c0"],["/archives/2021/03/page/2/index.html","38248c266409fcb5785997603fa5a231"],["/archives/2021/04/index.html","190fc7553543fa7a1c4c0f6839180536"],["/archives/2021/05/index.html","ef3344f7b08e0b0fa00523b26f97cee5"],["/archives/2021/06/index.html","252fd37ee37380afc16848ca5750de79"],["/archives/2021/07/index.html","ed3ea4fab873c69912ddb5fcc2e4b3bc"],["/archives/2021/08/index.html","a5da3edab52cfaaa911bfcde29596ebb"],["/archives/2021/09/index.html","f43e811a43090f4caf24597f58e5d661"],["/archives/2021/10/index.html","04279363154d1190727472d8f314c596"],["/archives/2021/11/index.html","855a545f7cbbe150ba5d717351a2f06f"],["/archives/2021/12/index.html","0c546310583a40cf44592d423e12669d"],["/archives/2021/index.html","ab05dc5417e4f63c2e50bad2b7961250"],["/archives/2021/page/10/index.html","ccd544b5ef733be4316b54132f5bd85f"],["/archives/2021/page/11/index.html","254571d02c50c1341d5f2969a3db68b0"],["/archives/2021/page/2/index.html","56a7205c872c28447d9947e021ba8193"],["/archives/2021/page/3/index.html","349876786af22ddcb9ad6e5f2cce79bd"],["/archives/2021/page/4/index.html","aa695c31f81ee2cf263a40620288a96c"],["/archives/2021/page/5/index.html","89007b27b95e2e9873de59316196c0c9"],["/archives/2021/page/6/index.html","cbd2a305407f27c037100b4e11a0cb5a"],["/archives/2021/page/7/index.html","28bc68ce0ff3003db882d974ec220bca"],["/archives/2021/page/8/index.html","d0be8fffb4dab933528fe7227ef760f0"],["/archives/2021/page/9/index.html","c1cfb4a33e5b343bfeedd21467fbfaef"],["/archives/2022/01/index.html","abc1dc1966d9a28c4602c1c591e084ac"],["/archives/2022/02/index.html","3a59c1c0088cf793e1000d3cfa4d39bf"],["/archives/2022/04/index.html","22d6afe753bb115820c3c52ba68d1153"],["/archives/2022/05/index.html","4b83ed81c854a7dcdb20745820990284"],["/archives/2022/12/index.html","c3e64011b8b65e4514b3bbf3141d784f"],["/archives/2022/index.html","9d827a8add38b4a4db59576851bcffc4"],["/archives/2023/01/index.html","b41b1350c8f4c02eca4a8a20ecb51e27"],["/archives/2023/02/index.html","50b99d7d39827de37f7f5740b652863d"],["/archives/2023/03/index.html","b73df79ad36810a41381228da655e452"],["/archives/2023/04/index.html","95a34b3ba1f970da17a8b8070ab1a3df"],["/archives/2023/06/index.html","dbc03558d54c52a9b59840e993b6c4ce"],["/archives/2023/08/index.html","0200e0a2a569b2f925a1541ad277d65d"],["/archives/2023/10/index.html","1541e19dac6812867be17a96d1296a4c"],["/archives/2023/index.html","12d211658348c05b98be6509fcfbf729"],["/archives/2023/page/2/index.html","ca75d246acbd17a951ebfc72ab713f49"],["/archives/2023/page/3/index.html","0b0f9fd408440ec83817c3a707c6b45a"],["/archives/2024/01/index.html","a0ddb3549cdf0780f1f1b5f4341de315"],["/archives/2024/02/index.html","fb41b0d491ab94c32d188bfddb59d072"],["/archives/2024/index.html","b799b847dc20c564ae194a1e9b6444a0"],["/archives/2025/06/index.html","7501e4f4faaefb83134b2939b5c33481"],["/archives/2025/07/index.html","71b5734138a5bcfe5761f5d5850b5867"],["/archives/2025/08/index.html","7ea325ffb3b8fae02e32da1d55092b08"],["/archives/2025/09/index.html","3042975ab4cc849958bcc211fff2c483"],["/archives/2025/10/index.html","1a179bfeb196b2ce6bbad2e817c1221b"],["/archives/2025/11/index.html","343efa344938b41d1a15e7491ec7ff8a"],["/archives/2025/11/page/2/index.html","17f93255c479805461d38400a517fbd2"],["/archives/2025/12/index.html","7ea8ceeb97b5190ca39bdf7821f0c3bd"],["/archives/2025/index.html","3700cd3b5aa09e28162c837a5c5c34f3"],["/archives/2025/page/2/index.html","b730dd940d8079eb132c0c9e6cf508d7"],["/archives/2025/page/3/index.html","966af75bbb49f4237694a129c575c209"],["/archives/2025/page/4/index.html","4c91c25998c8fae83e2ddcb204308ee6"],["/archives/2028/02/index.html","b85c1300bc2c4fecbae293b7fce3639c"],["/archives/2028/index.html","42b2641c7c7ca1a0eb5993d620c7faf1"],["/archives/index.html","915f9540ac89ff8b72167ddacb06e708"],["/archives/page/10/index.html","d092c211520626f9303f3fd1f74de734"],["/archives/page/11/index.html","3ed9c559a44ebae9edf60ccd1ca54b6b"],["/archives/page/12/index.html","2d82f1f52bd68f245b526d673de42130"],["/archives/page/13/index.html","525b68da5c636b0bc1642871f5f71725"],["/archives/page/14/index.html","f834c154ff4245604fdac009dfc33060"],["/archives/page/15/index.html","13d2781b813dd78c6e452823f2884a7b"],["/archives/page/16/index.html","4a7797dc70d70c01be34db376fc0e221"],["/archives/page/17/index.html","0895647e66955973da073dcde98abe11"],["/archives/page/18/index.html","fad65b5513842ad1eb4eac86a7e2e5b5"],["/archives/page/19/index.html","e45d4af40a069c58e5416b5633fffacd"],["/archives/page/2/index.html","8c72bd0ecd1547a2073020f800ff837a"],["/archives/page/20/index.html","97c272e6ef2dd23fe34ff6d02427d1f5"],["/archives/page/21/index.html","8657feae66cf1b10aae0891f66ace568"],["/archives/page/22/index.html","44e53657047486d23211b60d9e310364"],["/archives/page/23/index.html","7cb9c203f0aa91b572bce4319959b593"],["/archives/page/24/index.html","ef5094325ac229c0c645ff2739346e9a"],["/archives/page/25/index.html","7d67cd4b6e129a70b894c2844bfe0f62"],["/archives/page/26/index.html","8c50a85c5a1da064aedbf002b7098c88"],["/archives/page/27/index.html","b52c97d2a95e379c6054d55031c69879"],["/archives/page/28/index.html","13642673a1d0eab5099b7279984705e0"],["/archives/page/29/index.html","5c8d24c548db8f0325e1b1de090f8c6e"],["/archives/page/3/index.html","6bc746fabdacfa01999b3885d5cecd9b"],["/archives/page/30/index.html","1a7a52743f47fdec20781360b4b424eb"],["/archives/page/31/index.html","aca9a0e699a2f23527495770ffe162ed"],["/archives/page/32/index.html","f56a082ea6fc38d0adccab98e56e17d1"],["/archives/page/4/index.html","939a186a8e85f105b5262c22b4d22c4a"],["/archives/page/5/index.html","e2c63623c258322159524ebad6514c77"],["/archives/page/6/index.html","1c9ccc83a06c177ccca7ddee598bc3a9"],["/archives/page/7/index.html","eb4ad3c1f5c1a49da575cbee6c98d907"],["/archives/page/8/index.html","1d502bbe433b0e5351c25437f01b7e17"],["/archives/page/9/index.html","0f0c2e94cd52f1a1820ded37fc2233b9"],["/baidu-search/index.html","cf39294c30fe91cf125dce0bbb390fb0"],["/baidu_verify_code-Hh2fKNlEB1.html","435960a8ee8e052878528137b7a1f41b"],["/be-a-programmer-instead-of-a-code-farmer/index.html","595f406a6ea18a0aeffbfceb06b2c67d"],["/bought-a-house/index.html","f2a9399c986af651b57e42367f4c1a95"],["/categories/C与C✙✙/index.html","bcf0b7390065af28acc638a7512a28a3"],["/categories/Go语言/index.html","a9c0a93c2b7a7b920de1faf1c82e1431"],["/categories/ITK与VTK/index.html","264db87edcb0d0ee5631edaed2bd7034"],["/categories/Java/index.html","20539dbcb3c39b14c72dafa8e9af16bb"],["/categories/Java/page/2/index.html","d5edb47e2ac5ff2dabccb00ae5a32407"],["/categories/Java/page/3/index.html","cd2d401873b8de87ec8ff8d8409294f1"],["/categories/Linux/index.html","4f1328564c186d998099b24354db0e26"],["/categories/PLC/index.html","59cc1bc21bbd26faacb02fb4945c0fd0"],["/categories/Python/index.html","75efadd922a6693a57326084d3c6b26b"],["/categories/SEO教程/index.html","6a9160fefeee27eea9170d2df172dacc"],["/categories/index.html","5bed3a9a45eff45bec5ec18cc908885d"],["/categories/图像处理与机器学习/index.html","0e18afd33356759110b8e570abe26ad4"],["/categories/图像处理与机器学习/page/2/index.html","95b5ba7ee704b49367381c33555cc67a"],["/categories/图像处理与机器学习/page/3/index.html","5095467b51082a9afad98d2183538960"],["/categories/图像处理与机器学习/page/4/index.html","e43e6f333086879b4b0cc2da147975c8"],["/categories/图像处理与机器学习/page/5/index.html","9818691866f9a60f1d616d736774dd82"],["/categories/图像处理与机器学习/page/6/index.html","348b1187e67613d32e6198b0c2c81713"],["/categories/工具/index.html","b585f27121978757431db6c3e642ac65"],["/categories/工具/page/2/index.html","ecb433f8645dfc5f01982705f998f6c9"],["/categories/技术以外/index.html","7b327a9902338079704aa848fe8af742"],["/categories/技术以外/page/2/index.html","d7d52b14d8e30264e2a15500016d8a31"],["/categories/技术以外/page/3/index.html","462e57e517a3ad97134f14ea3ad4f1c8"],["/categories/技术以外/page/4/index.html","3d48210a52e2325f23cfd10d1c598f10"],["/categories/技术以外/page/5/index.html","1dcf027431e2b1edfea791cb75b93a09"],["/categories/技术以外/page/6/index.html","0a38c31db20d0c7fb1d8ed4c3f818853"],["/categories/技术以外/page/7/index.html","5a4da75f2f7bcaaee80d3125454cb770"],["/categories/技术以外/page/8/index.html","c51509352f4e659ae79f731559c600bb"],["/categories/技术以外/page/9/index.html","3267e1d0e8e49c3cb74bf9e236700b0f"],["/categories/数据结构与算法/index.html","d8b17f962673162b0d0d4a3b298d70b7"],["/categories/数据结构与算法/page/2/index.html","7481703a3b2475eea092d039b4fb96d0"],["/categories/科学上网/index.html","46e0c22a81020957bd13b2db3d556683"],["/categories/科学上网/page/2/index.html","e1ecedd4d6700af4b70885153949636b"],["/categories/科学上网/page/3/index.html","54adf9c249e0122627916f1efc0cc9ba"],["/categories/编程经验/index.html","3f3f6d886d76661e25594b4ff90fbd66"],["/categories/编程资料/index.html","6c12bb8c94f1f1304c9d28e8569b40ee"],["/categories/编程资料/page/2/index.html","9a555f32dad772fcf3e2ad1f8a0a2e6e"],["/categories/编程资料/page/3/index.html","4a08f06f3514a9545c9844b700e29552"],["/categories/编程资料/page/4/index.html","85508f8d317661f696b8d5eae98bcf56"],["/categories/计算机基础知识/index.html","8066a367a2dbf2135dd8b9565a0f6430"],["/categories/计算机基础知识/page/2/index.html","7fe8268a698ea8842802a11d3bb267fe"],["/categories/设计模式/index.html","5b8b17fa867d872ba12e8ef441f5e808"],["/choose/index.html","dfdadb935737cef8818ab649923f9ff6"],["/choose2/index.html","325c482b8935105c67656c72800e11fe"],["/chrome-crx-intruduce/index.html","f4fcf7ab0dc531b7daf1bf06f5522f44"],["/clashvpn/index.html","efc9497ecd3b49f3a89315ff4454ca74"],["/coder-blog-website/index.html","b38f570e5bbb2b754e7cf08799b5b4c5"],["/coder-source/index.html","b4e44882de7e3933e41034c7b02d2f15"],["/coder-videos-website/index.html","f549de19cec3c4fa4d11be187c34c4ec"],["/computer-book/index.html","0a80f8bfa770426cef90c05b005aab5e"],["/computer-censorship/index.html","9f149bfffce6c7bf84946eb6f4e8a368"],["/computer-network01/index.html","a4e5d1572ebe3f86095efb77193b5bae"],["/computer-network02/index.html","cfe0b88966071bda69d8a1fdfab7a3c3"],["/css/main.css","bc32ad34ec4990d934c3c647bdb62f79"],["/database-Mysql/index.html","7cdc174e8e7ce0617a303de8789e8069"],["/eclipse-lombok/index.html","6b1a26d1197fe6e3f763adc69a633d7d"],["/fully-convolutional-networks-for-semantic-segmentation/index.html","3ed346c7abc1a0bacc342069e1909350"],["/great-firewall/index.html","1f7d7b950dd2624b6358a5c2c25551f8"],["/halfrost/index.html","42e24b39d3d4039e9e905ea9224a215e"],["/how-to-signup-chatgpt/index.html","4ea55c413b0032b5cad0d9919f467c56"],["/how-to-use-Gemini/index.html","1a6524383d8c69fcc5b731b0a53e9881"],["/index.html","6dfa8e0ddc4304ef48866f9c7ad69387"],["/ios-open-internet/index.html","fe8befef9bcb56ceae461aa76efa3266"],["/iphone-open-internet/index.html","2dfef72237714a7178c280dbede9c49f"],["/itext-makes-pdf-form/index.html","ddb3fde5e2c85084111ab35306acb16d"],["/java-Set-Map/index.html","74eb6026545da43fd25dbaa6c5b17eb8"],["/javaweb-server-error-codes/index.html","600d4c7ca8e45efbba7bcf0378b7f0b7"],["/javaweb-source-code/index.html","e1959488067bd3d829fafce92de9ae14"],["/js/lib/busuanzi.min.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/js/lib/lozad.min.js","47904d34a224931dd1b615c59a3dbe3b"],["/js/lib/prism/prism-coy.min.css","0ccad54d95845901ead59bfd3ecceb14"],["/js/lib/prism/prism-dark.min.css","a4711d2957d6605eb5682bdd228cf123"],["/js/lib/prism/prism-funky.min.css","efedcdccd7a9ab342d2d9cacd24920af"],["/js/lib/prism/prism-line-numbers.min.css","38e22e790c279bb56f9ec4b90a2a2d58"],["/js/lib/prism/prism-okaidia.min.css","5ac6f9de996fbec68aaa106dfb16e061"],["/js/lib/prism/prism-solarizedlight.min.css","ecc7e64d039873ffcf7fb27babdaeb5a"],["/js/lib/prism/prism-tomorrow.min.css","456af2a14ae4f5089939d5904ac40fe8"],["/js/lib/prism/prism-twilight.min.css","ebb5c355332a8cf9a1ce37a2a69d678f"],["/js/lib/prism/prism.min.css","a5234d614834658887cec6a9515890f8"],["/js/main.js","052d2b299d9c750afea8df0b802ab7c1"],["/keras+TensorBoard/index.html","3a3253a8f83887055727bbd3f0f99cc9"],["/keras-beginner-guide/index.html","04c6d2dddc702c7b2ff933b52091da17"],["/kmp-algorithms/index.html","27132808705626adb1a80f30235b320d"],["/leetcode-Java/index.html","eab352653acd4cd8a7e91ca7a5ae0838"],["/links/index.html","b010f930314db018a90e0b09ae38fcb4"],["/linux-java-opencv/index.html","840132c0501ea4d2e06eca4829252345"],["/msb-source/index.html","c5bfbaf971e7682e1d11846435495d6f"],["/online-BUG！/index.html","2c55baad559e89292ec3d8cd9c41958a"],["/open-app/index.html","43f52e3d6a306739a738381e93385d06"],["/page/10/index.html","db67363632bea9ec480494c4ea5f14f8"],["/page/11/index.html","3667dc43296e01ec95cd087ce0baa4eb"],["/page/12/index.html","2d04598d48db9822e269188d16863497"],["/page/13/index.html","c8b627b041de6265043372de2c5edbe9"],["/page/14/index.html","4e0a7c0be9a04c97f65a8410a02eda59"],["/page/15/index.html","a98e41513a04077ee1a7cbac20b4be36"],["/page/16/index.html","68fa02a309c5b4ab910e4619e8426df6"],["/page/17/index.html","83a0cca66bcbbb256667baf6a8365d15"],["/page/18/index.html","94206a4c6d66d60bbc54ef6eb2d715fe"],["/page/19/index.html","f3bac83a456c012b73b998385359a1ae"],["/page/2/index.html","0a91193aa3e1a762adc96a47a7647698"],["/page/20/index.html","2c54d0f57bcf7c8f4f5149b5eca23e5a"],["/page/21/index.html","fbfe4b2470b2fa6cbd47eaac67564b3e"],["/page/22/index.html","4005f3ac7e82b17041ad1f3d537d56f0"],["/page/23/index.html","5f579049ff3f7f92c6da2d228bb9805c"],["/page/24/index.html","f93a332eae4a3f825fdc5d0cdf1a6e9a"],["/page/25/index.html","a2b5f3d23921401c53caf81fce3dcd70"],["/page/26/index.html","9a4bf6ea6d4c5996ab5b97a8198d51bd"],["/page/27/index.html","d14949413fd46325033ccc61aed17383"],["/page/28/index.html","c142cef47017bef2c80b38fea229cf5e"],["/page/29/index.html","a07f944def39c801528a5af8e921e07b"],["/page/3/index.html","597c7bc34bfe4ab0d429de9fd0f82dae"],["/page/30/index.html","ce4393ef1fbd9b00b80f50cf29e16532"],["/page/31/index.html","7afa5f23a6d7177d9be842e507b6dd86"],["/page/32/index.html","20738b96a5b694f855001a7854d54aff"],["/page/4/index.html","980419578943bfccb20ddf38f5718a67"],["/page/5/index.html","33e1bbae1265f7d253ea71355869f63f"],["/page/6/index.html","98d49453acaf5c7728e693bb61fd5099"],["/page/7/index.html","0b34a546b3f34e766dc48dab86bf5034"],["/page/8/index.html","a6541fac1337e6ca07c785aa03805f47"],["/page/9/index.html","a3b48ae0f0f5d2467bed34325edaa4cf"],["/pandas-data-preprocessing/index.html","1e2a69552a44ce001913c1f100e22bde"],["/phone-win-open-Internet/index.html","546a45f2fd866cec50acf1494798c52a"],["/popcorn/index.html","d0b4f082db4ccc32732ebe72761fa07f"],["/python-Blog/index.html","796e62e4bd21c8114577016b0c882ce2"],["/python-yeild/index.html","56daf1b847e2e34353ed9c42fa3dfac8"],["/python爬虫教程/index.html","07053253cfcb9d9c7d29534b743c9028"],["/software-copyright/index.html","8171fa68ff542987cb1130ba004ae74b"],["/sw-register.js","97b96bccd65bd965715955cf7d227b74"],["/tags/AI/index.html","27805ea34bb20a4b20a4210afc726c62"],["/tags/API/index.html","78b3f209c1cf40395baa7b0c0be02d32"],["/tags/C-图书/index.html","cdf5376b815e2a6742f2ff0ee502f76a"],["/tags/C/index.html","ad9c53a9a4fc98ed839d4e9e3a89f473"],["/tags/CNN/index.html","b12f4622846ad550aa774369e7f53ce2"],["/tags/Chrome/index.html","6db3710b66762d538d8aa63975909b4d"],["/tags/C✙✙/index.html","5829ff15b028cb6e705a0041d627478b"],["/tags/C语言/index.html","11d7f256410e14f501efa3670d4457a3"],["/tags/C语言图书/index.html","960b8915813a41d566ebfdabbbc890d5"],["/tags/DSN/index.html","535c866cb25d9f2fc38329eaaf29ec82"],["/tags/Dll/index.html","aac7b6d5aaee3ba363caf6fd329bd5f8"],["/tags/ECCV/index.html","2f6c649f1d20020dfdd73728adfea52d"],["/tags/EM算法/index.html","5f0a152cd59a2356a119a9073977ea48"],["/tags/Eolink/index.html","32da21ada7edee6019c95404b4240556"],["/tags/Gitee/index.html","0ea2f3ea9a1d1b275e79864c711b9b76"],["/tags/Go语言/index.html","8a3bfa5c89b2f5e08605167cfde7d2d0"],["/tags/Graph/index.html","c31ed740f071674198bd60f44849aa79"],["/tags/HTTPS/index.html","bcbe40e7379dae67c2462da7b1c29a28"],["/tags/ITK/index.html","00920c4b60ff31e2a7f87ecdd9b9b112"],["/tags/ItkVtkGlue/index.html","ddc1a01faf7f149a5c2394203e39db68"],["/tags/JMM/index.html","4ee5b8ba4b7536235b4f982f84fdc483"],["/tags/JVM/index.html","a0d07cdd8f002f8566ce80e3d22916a2"],["/tags/Java/index.html","c01efae252035eada575592db2438c38"],["/tags/Java/page/2/index.html","090c840deebdac16d637d65f02968a0c"],["/tags/Java/page/3/index.html","43c26ab8fb60e1f1b99e10706dbb74cc"],["/tags/Java图书/index.html","50253adbe8af76aa27d443f956a50467"],["/tags/Kaggle/index.html","7e9fe6068b487e7b0da84f461fd4799b"],["/tags/Keras/index.html","2f10a7546822ab35784d368252f13ca4"],["/tags/Linux/index.html","9426de2a14747dca7cd2bc40db72d3e4"],["/tags/Linux图书/index.html","c16ea56ad5a951c1abc05f442d193849"],["/tags/MEPP/index.html","46d25634ceb2bab87b7bc16ffd67b43a"],["/tags/Map/index.html","60b3ce11aec7f442751bd7b588596fd8"],["/tags/Matlab/index.html","d70bde950512369623e6736ff5da5586"],["/tags/MongoDB/index.html","4cdfab2c7ecc2231bfa5a504fa8cc182"],["/tags/MySQL/index.html","bb3fc38ed1cabd852e370479e89ea225"],["/tags/Parzen窗/index.html","e2b78c0d29610406e96a7026ed9a613e"],["/tags/PicGo/index.html","73fcd4707231301d62f1e140585b5fe6"],["/tags/Python/index.html","e225e2826ef2078a32a0744016cc0a61"],["/tags/Python图书/index.html","27e0be34538ed8b10c2d5339db73e010"],["/tags/SPHARM-PDM/index.html","3afcf329c527c748c2803c2603394511"],["/tags/SVM/index.html","a5d08a4650ba217500e05b7a7ac38101"],["/tags/Seata/index.html","dd47ccdb3bf82ab9d39553427722d0c9"],["/tags/Servlet/index.html","0c4bc731e3255e4d3119496747f06df0"],["/tags/Sping/index.html","aa69369e3acc68f0091d036f6efc156d"],["/tags/Struts/index.html","ebbba6ad305bf46be35343a993d89871"],["/tags/TCP-IP/index.html","ad976fdca7a68c7554961377c1042cac"],["/tags/Ubuntu/index.html","3d0cad812b1e9a5db66bd31d33ddef25"],["/tags/Unet/index.html","2fccb8cfe287e657b2e2bebb079c692a"],["/tags/VS/index.html","4a4e21111f683b658e1de51cf0dffbd0"],["/tags/VTK/index.html","047024c6e9c5db309ee23d5d0ef0c72c"],["/tags/Windows/index.html","dd68c28a89637bc64befee3a2784da0f"],["/tags/edit/index.html","cf80b2d085b52f5822eed5da36859882"],["/tags/hibernate/index.html","c654b7aa64f1efc774f866ed6bd37a52"],["/tags/index.html","64a7a00ed5330fa447a7a117afcd2c7c"],["/tags/itext/index.html","cfc6a1ac1c47382d50d652a5580766d1"],["/tags/jdk/index.html","352deecf8e6b9abb608c328aa13243f9"],["/tags/kmp/index.html","184903b12fa94ad1d577e3d0718b32f9"],["/tags/k最近邻估计/index.html","f382c55f7cfef15bb2a9e60c65bc03a7"],["/tags/lombok/index.html","d9a395bacfc63a965fa85daff49ee0ce"],["/tags/offer/index.html","e5d67446756425822d0ff9ec43b9aa7f"],["/tags/opencv/index.html","19f96731bbba23d6b8c05afb82551547"],["/tags/pandas/index.html","c053f2397baa1831aaaa14d277a74dd2"],["/tags/string/index.html","6da59290e1951fd249138877ed9238f6"],["/tags/vim/index.html","3576a1cc21251f2a56c9f51c30a6a866"],["/tags/vtkPolyData/index.html","43f9a27dde615570f32ce1ac99435a38"],["/tags/web/index.html","816b5ed201df757ded19c6a96599a518"],["/tags/xshell/index.html","b8b24abd50b4977a427dd195e73b1358"],["/tags/yeild/index.html","379055e4150514908981c8bace0ae0fd"],["/tags/互联网/index.html","8641cafb72c40a18232aa828280472cd"],["/tags/人工智能/index.html","db0a65e3c3bb54ed3bd3e63145a6e4da"],["/tags/体绘制/index.html","580d5a444761e6e52c83f24f36f1f780"],["/tags/全卷积网络/index.html","539733b06dda9cfee02d5480b7e5218c"],["/tags/公众号/index.html","294bed4f04e9c7eea74f8c31d4f2ba1f"],["/tags/内存模型/index.html","8b74dfe7994b3474ea192544e423f7df"],["/tags/内推/index.html","65dbff453fcb1ac8a608738463090a21"],["/tags/函数/index.html","a84b8f228f678f305a0b5b80fc4f7417"],["/tags/分布式/index.html","482932e68f1b740de7e38b1ca2377f74"],["/tags/加密/index.html","6b21a3beb13c6f22956d5b161e222dbd"],["/tags/医疗图像/index.html","e5084ba23263b71bfc0b30cf5d5abb86"],["/tags/博客/index.html","ff21f5e27c63c90b070654e549628b82"],["/tags/图像数据/index.html","52723a73babafd8043f96525c79041ee"],["/tags/图谱分割/index.html","bb51afcd081b3d8943fa4da8dc93e74c"],["/tags/垃圾回收/index.html","5df7a6e3c5d4e39f6a6e85900b830587"],["/tags/多线程/index.html","f5696a273ef3f5b40a6a36082b9cd047"],["/tags/字符串/index.html","7869588831397b4f4d238c4e5d75fe2e"],["/tags/工具/index.html","92a32a84646f37f206194de09012dbe9"],["/tags/工具/page/2/index.html","bf2de95a23ece2554e238eece0ce39e3"],["/tags/弹性形变/index.html","df30cd99be78605bcf57c0614587cdf5"],["/tags/排序/index.html","b4f725f05c5ff86c6acc7c911bd44e3a"],["/tags/搜狗/index.html","08b13b743d36eb5d07d398b528881527"],["/tags/操作系统/index.html","eb90ba8aa7db9f2bd8876575d99c8d34"],["/tags/数据库/index.html","1cb6d41320c0bec6b9755037a5602de4"],["/tags/数据类型/index.html","44dd47cd123610687d3eb49a615f7e0b"],["/tags/数据结构/index.html","9256934ac05c6d0fecfe59d1e1d6e042"],["/tags/最大似然/index.html","207886fed8e64dea198ab44f4e5fbc5a"],["/tags/机器学习/index.html","505a57f0d557baeb8dd2cdc16966cccd"],["/tags/机器学习/page/2/index.html","02b821478390c5ac6457db923843ba9e"],["/tags/机器学习/page/3/index.html","a9b5610d75557446de59e3251e036839"],["/tags/机器学习/page/4/index.html","88dc6ca1dafa0379bd898a7575e38681"],["/tags/机器学习/page/5/index.html","f1f428949dd7c25526b8cd04315de045"],["/tags/树/index.html","f580566c8e9ba1e01d81885b79bbb327"],["/tags/框架/index.html","1996abc32fdb6b35ff8205cff5ef8750"],["/tags/求职/index.html","cbb3cbbf3b8b11903e7882cd31c410ad"],["/tags/汇编语言/index.html","9a403ef8da705459224e35122e3cb424"],["/tags/深度学习/index.html","ca1e4b54ac39662cad597882a778678f"],["/tags/深度学习/page/2/index.html","f890fe7bb216d9306a7e0db0d79a38f6"],["/tags/深度学习/page/3/index.html","57117651b02f583c77c33823edbdd81a"],["/tags/深度监督网络/index.html","255bc430180ad2f04a333e05254d0db5"],["/tags/爬虫/index.html","950506ccb590d1c2e7c3565774415a5a"],["/tags/电子书下载/index.html","7fd52cbd7ed73ba1b84caedccac7303e"],["/tags/电子书下载/page/2/index.html","c5522718ba4df90610fe640193734870"],["/tags/程序员/index.html","bb352c3e676a389e283a55a898afdf48"],["/tags/程序员面试/index.html","72fbc94af374211e497d12dc03d36d5b"],["/tags/简历/index.html","8af2b7026f23e8a9153cc9a24fb9d9b0"],["/tags/算法/index.html","530cec7ed45b128de924cb7777454554"],["/tags/算法/page/2/index.html","1399bc5e893a8e2e047ef02ad2719831"],["/tags/算法/page/3/index.html","0dc77cfd8203c04216e773556d1f89a2"],["/tags/线程/index.html","fe31f0c52d8bb6a12b4facc10cebc1f0"],["/tags/结构学习/index.html","aff25fbb1beaa4391e2ba3844506c0e3"],["/tags/编程/index.html","1dd58d377562a4dacab0e16d943367c6"],["/tags/网站/index.html","e3488fa7b2ef40da4f6bb4f9fb695999"],["/tags/网站/page/2/index.html","f76cab94d7de51730634b9ba6cef5650"],["/tags/网络/index.html","089c10c757786b5f549955b93460d438"],["/tags/网络原理/index.html","59be15608b42877b66a4b6c2ea31bb76"],["/tags/肝脏分割/index.html","d1531647875551515c7540839a961281"],["/tags/计算机/index.html","7601153909a101d3063c6ec6d4bf0424"],["/tags/计算机专业/index.html","8ad0307a1bf9ae666cf669375493616b"],["/tags/计算机网络/index.html","69df05c444cee3db4625a251c8e77bae"],["/tags/设计模式/index.html","aaf2fc9892d19b7fbec7ac7d357ea3d9"],["/tags/贝叶斯/index.html","904721302e6255233afcf7b9b5d600ef"],["/tags/迁移学习/index.html","b2b6e6b0fdb91f2e5db3da19c69d59ff"],["/tags/面试/index.html","5aae57563222c0f6bb182db210713fbe"],["/the-way-of-pragram/index.html","e71551d21a32052472eda3ae2d51af33"],["/untiypro XL安装/index.html","538b1e3ee8263628f77cc470ce3aa09c"],["/video-websites/index.html","3ae09ab7bbda01757d05c1c372d169d7"],["/wechat-fans/index.html","3c6cb644d8ce0e76f989e6909164e407"],["/window-run-VTK/index.html","e99ee0665882373d70e1104a5d600898"],["/xshell-connect-Linux/index.html","5c757b9886cf976ff8f4c5cd56c62b67"],["/‌Accessing-the-Open-Internet/index.html","a5010648c68d1cac5cde22b7f8417d92"],["/《Java高并发编程详解》，去大厂必看！/index.html","63ec8665627dcd06e28b484474dbe446"],["/一分钟没了 1.5W 。。。/index.html","69cf78fe0ee744c791ba811a14160701"],["/一条高产爆款内容生产线/index.html","b10574a94913adbe22b121cbd8133fdd"],["/为高考学子推荐的六个就业前景广阔的专业/index.html","365909b842a570ef0ad8a655aa8857f3"],["/互联网赚钱机器---社群/index.html","8746788ae7d3aed72b445861dcb4a9a7"],["/你们常用的工作方法和思考方式是什么？/index.html","69e12bb9e64e905b4652d303dc537e8a"],["/关于环境配置的一些事/index.html","89192cbfa28f1200126542cfa46d3634"],["/准备了19w！搞事/index.html","c2b12de4d763a9aca8eec27665de9700"],["/几个很重要的感悟/index.html","d3643d4c09096da4bdbb71599b75a937"],["/分割ROI篇/index.html","0dc10e4b7ecbfe1a57db1127478cc45b"],["/分割精度说明/index.html","2d62c453aba3ac0c572821342f8b035b"],["/分块程序执行/index.html","88dfedcb6dbfacbf2f5fc449d2ad23d8"],["/加班公司黑名单！！！/index.html","d24113f775a706679e0c03c9dfeb0de3"],["/卧槽，上知乎热搜了！/index.html","6d6467ac64166110aaa730fd8ab5a21c"],["/卧槽，我的小破站爆了！/index.html","d45a7aaa8e86f1ebf1afb9e2a1bf821c"],["/卧槽，我被盗版了/index.html","1146e49136b446e2988813c56678b93f"],["/卧槽，还有985大学在大一上C语言课？？/index.html","5e53239e574893242294f58629250090"],["/历年微软面试中出现的leetcode算法题/index.html","2dc921ae8951cdba18b9982289a15285"],["/去特斯拉试车了/index.html","d3d0dd71b167c1f62ae41bea24a16ba8"],["/吃苦的三种境界/index.html","a1b656fa3c48bd619ba4c9fd3e971408"],["/哪本书适合推荐给 Java 初学者？/index.html","52f5c8009747383ad1d5cfc346f1c44b"],["/哪本入门级的学习数据库的书最值得推荐？/index.html","41bc435136e647d735008de80990c2e6"],["/国内外常用的AIGC模型/index.html","257f5f2515510636315ce195f8a6adad"],["/国庆假期/index.html","89dbec9ec8f44366d9d1c29754d9cede"],["/图谱程序字典/index.html","711b0da2a912fb2988795cd81c2cbf9c"],["/图谱训练与分割/index.html","f826a051bfd64f3f3de51b6802bde259"],["/宣布一件大事/index.html","f1d80a81141381c11fc58ce0d68279c6"],["/小鹏P7i试驾体验/index.html","433012cba4c6a86ca1f28d47f079b746"],["/微信PC版3.3.0内测更新，电脑可以刷朋友圈了/index.html","2af60c3c31a41ff799090b8ada687c5b"],["/怎么更快的赚钱？/index.html","daec740c82131be42e72d7bf5f730012"],["/我毕业了/index.html","a277b66b3b7e91852ae359387ed8f9d9"],["/我！真！的！找到了！爱上学习！的方法！/index.html","a67af2769888ce0ebccbb73fc5ea51dd"],["/户口的意义/index.html","7c6b78e54c0352d40c5e5d7c41221631"],["/推荐两本经典算法书/index.html","7ac8d948cf33b4070870f186ab0ab11c"],["/推荐几个在线学习SQL的网站！/index.html","2e5876ea3f6f485efd035e3f5858077f"],["/搞了一个程序员成长晋级社群！/index.html","8b43dd0df2e2da474dd49be7f4565dd0"],["/摘抄/index.html","9676975b908ffb14f4e04bf3dc99dcc6"],["/暴跌30心态崩了/index.html","7d03b75b7929311adab0e343cf6c8bd1"],["/最近很火的ChatGPT到底该怎么玩？/index.html","c941ed2700103a2d7dfa618588fcda68"],["/有哪些好看的日历可以买？/index.html","dc33ce61d6831918441c5c447339b797"],["/服务器有啥用/index.html","cc8445f62e8b8fcdd1adc77c3e347ba5"],["/来长沙了！/index.html","8d1543ce10cffee277c60fb7e0020217"],["/校招污点公司名单/index.html","12a295ef120f83cbb7c491f2b5302689"],["/梭哈200多万/index.html","4ff15117cb0696fc72b64a3d70a2d58d"],["/梯形图入门/index.html","3722a971b69beb0db29af9cfaf16718a"],["/橙心优选，凉凉了！/index.html","fe940efb4f56d149d3bd6cab542a523e"],["/比亚迪汉试驾体验/index.html","59d069b24ee954a7e14491e9c8c24bc9"],["/清华转学成电，真的牛逼！/index.html","0a3e785a4e3785faad8ee03e410d661f"],["/滴滴程序员被亲戚鄙视：年薪八十万还不如二本教书的/index.html","49990ade88fc1044a668e03c2f532a92"],["/社群！/index.html","bd62d2ff06a76fd8892fa2b0d46c451f"],["/科学上网之VPN篇/index.html","d0f5e8c14fd055ef8e8ef960322cd0e7"],["/程序员必备的几个技能！看完你也是大神/index.html","d409407ecf597407af9bbde61e6cb961"],["/程序员绕不去的槛，Linux！！！/index.html","6d10332b72c7e09a75c7e91784745929"],["/蔚来ET5试驾体验/index.html","ce5795b2596801c1ca15d8b23b02e785"],["/蔚来，牛逼！/index.html","1463ded4b81534a9aa50f7f7dd460c4e"],["/被录取了/index.html","aa5c26740c566ccebfb3cc98952d1028"],["/被找事了！/index.html","50cb8cedb802f03b499a7e0bb92ed465"],["/被拉黑了。。。/index.html","23aea3e68a8669ae06031e3ac3adabe3"],["/被车撞了！/index.html","c2aa53a65508327b229ecbc0bd5a70ce"],["/该如何选购固态硬盘？/index.html","d474e01ae014055ae9706a20dd64150e"],["/这本书一定要看！/index.html","7daa3a5ba4603a641f7b4ed9c129c05b"],["/选Java还是C++？/index.html","73518fafdf02079974c835bc5df7b5a1"],["/那些让你起飞的计算机基础知识/index.html","0e59bac605b56850414ad7a1e2d6e8ef"],["/靠这几本算法书，成功拿下大厂offer！/index.html","73d5d0191c6fca18a33b853646a5adfb"]];
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
