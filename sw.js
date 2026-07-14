/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/0010-city/index.html","59c19bd9b3882061b1f380a32bcca71b"],["/10-algorithm-book/index.html","8f965e90c9f555fbbdb287e082bd679f"],["/10-website/index.html","f1fd9de9b1367fc8db3689817e54af8a"],["/100万的小目标/index.html","6cdceff80fd6d0802e7a100aef957f32"],["/10w+YYDS！/index.html","271a0b6524a3b8b65a3e6b460d7ab9a0"],["/10website/index.html","fe8b2d24da260c7e70dcaabf48a5b7d2"],["/12-technical-tutorial-sites/index.html","d6a9ed20582f9a8d7cfbe57bf7e3c77f"],["/2 6 岁 了/index.html","2583aa4bac799dc47b183c3410a49256"],["/200万，啪，没了。。。。/index.html","c93237844b28285999e454bb1696c821"],["/2018ECCV-Paper-DL/index.html","a8dac05a33f9ce37220991d2aa8cd584"],["/2021年固态硬盘选购最新攻略（小白避坑指南）/index.html","14b7642b01496aae1872d75ee9926503"],["/2021机械键盘推荐/index.html","9a893f9ef6ed090a72f92b54aa0e3039"],["/2025-07-15/index.html","1b16dcc24e847dc25d16fbced8a2de5b"],["/2025年终总结/index.html","10136337329a9800b23d9b272cf0c186"],["/2026-Open-Internet/index.html","3373648c9020be4b61c6b55d038885cb"],["/2026-best-vpn/index.html","8e1e498d7e9aa3ad0a3f3c6dacb59cd2"],["/2026-clash-vpn/index.html","44683c94b4de8b9406590872868139f0"],["/27岁了/index.html","858d7d7b7f0422a576fa7814f8748de4"],["/3D-Convolutional-Neural-Networks-for-Human-Action-Recognition/index.html","6820ff3573bd8516c071b3849585db91"],["/3D-Deeply-Supervised-Network-for-Automatic-Liver-Segmentation-from-CT-Volumes/index.html","81083116e4f57258ce0ad6796c131430"],["/3D-Unet-Experiment-notes/index.html","b401e393fecc722c866613fa6ab80394"],["/4-Software/index.html","8b100fb9b0fdb731f6980a75ff3af0b0"],["/6-website/index.html","0bbe55d96b323b0a4992050da005540d"],["/7-terminal-tools/index.html","c730b06853b6e153d1364c5851f12eb8"],["/AI-PPT/index.html","38bfbee1e31ada6de08cb7d40fcb17be"],["/AIGC中典型的深度学习网络/index.html","ebdcd76131aba473b4072149eebdbe79"],["/Agency-model/index.html","b8b17305d005ad6e80fc044634849eff"],["/Algorithm-brush-notes/index.html","2bd62933a34d9b84623e8c3a0c1fd445"],["/Ali-recruits/index.html","04a7991ced25c97d7cde219796fa4595"],["/Android-VPN/index.html","33d651d59144b41c287ac30cb291fe68"],["/Android-open-internet/index.html","95424410def42cf5b0286deeb8d5755f"],["/Appearance-mode/index.html","41e1718b90d4cfb74f315f159b2d8dc4"],["/Backtracking/index.html","187de48e687cb31d9d200a7d6e926a4d"],["/Baidu-Sao-operation/index.html","42de03b7bbcfe0c8b6ecfed582fe9073"],["/Batch-Normalization/index.html","f65050c2ad3b57158b92e6022e65ddb6"],["/Best-AI-tools/index.html","c75e5311aa388f09386ed30b7affc69a"],["/Bias-and-Variance/index.html","0a8da21259d6f0245e11821c757199a6"],["/Binary-tree-traversal/index.html","4610bc0ca2d16e9244a04b720f683d7f"],["/Branch-and-bound/index.html","622c7488325cfbafe0a23dcdd3d78972"],["/Buying-computer-for-the-first-time/index.html","917e40f8f502b4e2aac05afe135305e0"],["/B站向北邮道歉！/index.html","cec7f12010881c27504d460471ca5b94"],["/C++-string-function/index.html","d06042b9ec0b2fb635bdfde8dced5ca7"],["/C-Java-DevelopTools/index.html","88f678044a9deb90f34192e34d688e48"],["/CS-Classic-Books/index.html","74e33e4469a8e97b433c3b669f18df7d"],["/CS-network/index.html","8f47b4608028c73106e17e735ecd4f45"],["/CSBook001/index.html","f52eecef460ecca65a2b3f0d227e8c3c"],["/CSBook002/index.html","b243aee67844bccb80de867de08eaf5d"],["/CSBook003/index.html","032325db2b2e3c930cc5776b65134b3a"],["/CSBook004/index.html","974afb32f8b03208fc06ece097c761c4"],["/CSBook005/index.html","2f2124582bbd265b6126c345dc1ede81"],["/CSBook006/index.html","88abb2f24d8effd7e639b0a294aab614"],["/CSBook007/index.html","075842825677ddcf4e11306ecc84c06c"],["/CSBook008/index.html","76a96cdeb890a3fd527f4093a2fb406d"],["/CSBook009/index.html","e75ac45b8d529797a7011ffc7a976e12"],["/CSBook010/index.html","33f62801c108801fea0995dc9ade3ef4"],["/CSBook011/index.html","873681ff9d934c14a88d8715dda016de"],["/CSBook012/index.html","1c8404ea1675c7e18ef70c0b4e5fc5c9"],["/Changsha-really-fragrant/index.html","eb169a845af89b2797fd2ba5b3f6e7e2"],["/ChatGPT-VPN/index.html","9c6ebb4470853caffc11e37ab724ea52"],["/ChatGPT/index.html","41612e0774a07c5d1a13939b25ef6730"],["/ChatGPT！王炸级更新！！！/index.html","e30c00e16560720865e0c3c2e3f1be0d"],["/Chrome-crx/index.html","bad24fd518c604e462f8be6858b346b7"],["/Clash-Party/index.html","fc043d9704b84eacb3bbd02135cc65a7"],["/Clash-VPS/index.html","bb8a03b97a8533febb53e9f6373647cd"],["/ClashForWindows/index.html","8c52a16f630ee17220422603068cb4e8"],["/Computer-Classic-Books/index.html","c4a9f8fcc7a5ef8128b679bfad8c4724"],["/Computer-for-another-major/index.html","0ff0fd17ef8a6d20006576ad5ff8bca8"],["/Conditional-confrontation-network/index.html","96e33e4943415ea14ab4171b953345c9"],["/DNN/index.html","1b3f89e06a451e6aa861e758fb24028b"],["/DSN-segmentation-liver-experiment-summary/index.html","fae59d031c8a9df1e391b9bd3c9456f7"],["/Data-enhancement-elastic-deformation/index.html","faa5e7a8b5171b869732ba69b92d2534"],["/Decorative-pattern/index.html","b18e33e28f2d19af55a39910bc2d38ce"],["/Deep-Learning/index.html","83622c9ab2e1356f21c69089486175dc"],["/Deep-learning-and-medical-image-analysis/index.html","1575fe6e4b018a3159115518a822fc39"],["/Deeply-Supervised-Nets/index.html","ebef1b1e3e3a1706c89eeab38104ce32"],["/Deformation-model-based-sparse-representation/index.html","1b0fe5032b561cd095376c2ae3173678"],["/Discriminative-and-Generative-model/index.html","566425b6aadb33b9ade8915268e50a69"],["/Distributed-transaction/index.html","e34a39de0c2a60edc0632ac4ac769b21"],["/Divide-and-conquer-algorithm/index.html","c04e2eaa48bb4022110fb430d03ce831"],["/Dll/index.html","4ab0d62bfa6c96ef97eaee6f73683317"],["/Dynamic-programming-algorithm/index.html","1bdba66751bf3653366ceab6788bcb7b"],["/E-book-download-commonly-used-by-programmers/index.html","e8b022b87dbe247103660473ebc63318"],["/EditPlus软件的安装、激活和配置过程分享/index.html","f7e100b585b5315abf51874d5f6788e7"],["/Eight-sorting-algorithms/index.html","278f319bdedc827c3c4076f4b94769f4"],["/Encryption-Algorithm/index.html","e96fa7cb7abe3fc9b162c4b68a87f28d"],["/Eolink/index.html","7e67b4912694f376ebdf8702c71fa49c"],["/Factory-and-strategy-mode/index.html","955db8a8994534ed78f7dd8aa3bfffa0"],["/Foreign-technology-blog-community/index.html","4e6a1bcc7fd435333cf913e3a30d8757"],["/Functional-model/index.html","ee4842c332bcd2a70b6e72958977566a"],["/Fund-type/index.html","cb7926b144f903a6b7eb411e84fdc830"],["/GPT-4o/index.html","ff14abcca4ea4e4a3f920de8c9641230"],["/GPU-medical-image-processing/index.html","41311c49ab7ad71fea4b18564f8921af"],["/Gemini-pro/index.html","e8f2eb3cdf2f5e60b41e5c3f80d21af3"],["/Gemini-vpn/index.html","43c8b7d7fc19c0f227216747ab2af5bc"],["/Gemini/index.html","901308e8e4aff2c1316954c19b9cd076"],["/Generative-Model-of-Unsupervised-Learning/index.html","e11277e1fa4b65658ff6914a8c6a6ea9"],["/Git-Learning/index.html","9ab1459ecca63ecc80ff7db1052adb75"],["/GitHub-2FA/index.html","322f281eccde2f22734a1fb533a5594a"],["/GitHub万赞，程序员必看操作系统总结！/index.html","5a1226e59a683aacd39c10e80630be52"],["/Golang-book-recommend/index.html","4a6645cf85f347b79a7e223b3e51d5ce"],["/Golang-learning/index.html","079207db8473dd8156baabc30f92396b"],["/Google-Gemini/index.html","1da4acf7dc8a3e63783953b0d8e3f03b"],["/Gradient-descent-optimization/index.html","72c3bd523459c435e326238e6054967d"],["/Greedy-Algorithm/index.html","a62f9db7ede7f666303ece2c8687bea5"],["/HAND-User-Forum/index.html","d8e020b734350df762ff6fafd488576b"],["/HK-bank/index.html","9dc5514b85c3276a0e79dbbd550969bf"],["/Head-to-head/index.html","dd2154dc9f802c6cbba6405f979edddc"],["/HexoPage/index.html","bbe6e8413eea9e331505e0bbdb1b36e4"],["/HistCite-Pro/index.html","6698916d515ce606cecdd87138f4d004"],["/How-does-the-program-run/index.html","c6eb215069be6e99ed239d0f4eddd1fa"],["/How-to-judge-whether-technologyisreliable/index.html","f6ed79c93492f8f6211c0dbb1ec717bc"],["/How-to-learn-design-patterns/index.html","ed2dc20077c5100420d0dc6bb17741df"],["/How-to-learn-design-patterns？/index.html","1738927ff83a61033e77d9a7404309c0"],["/How-to-teach-yourself-programming/index.html","cc2cedffa5187452064d2f204fbb1377"],["/How2learn-Python？/index.html","ef9ef5b70b29be5e4af66b83a773cc2a"],["/IDEA-shortcut-key/index.html","8ed06cc0ed9ae18a1b469bc040a46a41"],["/IT-interview-basic/index.html","c6a794710e89f45f6f4f2248cc03b792"],["/ITK-VS-install/index.html","6cd80f5a48c7ca9ef200c0c09ee920ba"],["/ITK-VTK-ItkVtkGlue/index.html","31bb30b7779dcc75117e4b84559ff15b"],["/Image-processing-plus-noise/index.html","d642cceb6fb97621537c5d6c7e687549"],["/Inception-Going-Deeper-with-Convolution/index.html","5bb2b32ccd702bffc7af376dbdca5c1e"],["/Information-Cocoon/index.html","27c30b29cb10c3a62cc8cf7701eb23c6"],["/Java-GC/index.html","284f48bd9061a8cfcef4a9adcc49d8bf"],["/Java-Servlet/index.html","8a7b5e6131363ad00f5fa4577c48f2a7"],["/Java-array-and-collection-sorting/index.html","35157d7b01391cae2f1a0c8b1d9493c8"],["/Java-development-tools/index.html","5b1de1701c061157255c524706e51735"],["/Java-eight-data-types/index.html","3b10dab64d6baf2fd18d1cffe0c22509"],["/Java-interview01/index.html","8218f7404bcae1b824f49147aab57ffa"],["/Java-interview02/index.html","06f05391ee268494c55fee1824baaf49"],["/Java-interview03/index.html","fbfca3755497cc5b6c4fa496ffa2b2ff"],["/Java-learing-map/index.html","f5f67ead7cba16775d1014ca10987f70"],["/Java-learning-route-map/index.html","971368c51ba52e30227156861bb5eecc"],["/Java-memory-area/index.html","fc99922d7242aeee82c40d8d48b74bc7"],["/Java-memory-model/index.html","05733923b59c05051a863027815029ac"],["/Java-multithreaded-learning/index.html","462fa90b4960cb099777f77194c65209"],["/Java-project/index.html","7c0d1171190cd8bfd56de101377faadd"],["/JavaWeb-Chinese-Garbled/index.html","bb89bdbf0ca14c39bab9af4e5fbad1d2"],["/Java还是C++？/index.html","5969e0a5480caa795b7eda18e1dfac9b"],["/Kaggle5-step-guide/index.html","d309770e85163b6e7e5744dc87adf046"],["/Knowledge-points-of-Java-garbage-collection/index.html","1b4ba12d4809b7581783592bd1fd4db0"],["/LLM-DP-TP-EP/index.html","33490967aa17259d878ea8b5454b7359"],["/Layoffs-Hiring/index.html","678222b01b06e84f08c3e14b139e7f9e"],["/Layoffs-and-Hiring/index.html","77ccb3739111c65ff83ff694f7018a80"],["/Linear-regression-of-machine-learning/index.html","8cac90f3121be84e7b6f345c744b6127"],["/Linux-Compile-C/index.html","c943b67b3c8fcf58d8cc7c6a2145c916"],["/Linux-ITK/index.html","c366d0413bf6ae6b9520a44ae2369316"],["/Liver-segmentation-of-sparse-components/index.html","9c26892a3cb703349e62dcf1b9fc0a37"],["/ML-EBook-paper/index.html","6e32eb7fa27e0a29bb9213c0263ac567"],["/Map-uses-multiple-maps/index.html","74fefc1533f69aa5918ac1a6b049cfdf"],["/Marching-Cubes/index.html","204e203b64a0ec7490f125fe1d570843"],["/Matlab-Graph-cut/index.html","f5d357a953ac8fc0056f7b59aafb965c"],["/Maximum-Likelihood-to-EM-algorithm/index.html","ad21f7f850776c04d4cb2f38dd94bfd6"],["/Mean filter and median filter denoising/index.html","2cdc23af4ff1676278476ccedd3aa46f"],["/Medical-Data-for-Machine-Learning/index.html","d33c4ec2bfc4a0a6825594d9cce77263"],["/Medical-image-analysis-deep-learning/index.html","25fd318b5225a43fce35477ded68dc93"],["/Medical-scan-image-processing/index.html","66648e61ded2b53943000b945bd5a38d"],["/Merge-sort-algorithm/index.html","5b67cb5753893a1c8e7c5c7db500e220"],["/Monthly-income-2W/index.html","3ac8f71777e8e514d31e19230b5cd20b"],["/Mysql-database/index.html","7f80666bae33720a89192e7e2ebdffd8"],["/Neighbor-Embedding/index.html","384177b52d8fa98241c5173068693095"],["/Neighborhood-approximate-random-forest/index.html","5173fb6f5eb4583d481c609452855735"],["/Net-and-official-documents/index.html","47a16025a8ae7429bf8311bdd2a8bdee"],["/Netflix-VPN/index.html","9f7bfb624036c2d0716713036b7a84be"],["/Network-principle/index.html","623450fda28b65859230b8e5fccefde2"],["/New-Hong-Kong-stocks/index.html","7f73ff87bfd3d23495d01f4133f41d18"],["/Nice-to-meet-you/index.html","3effcc6b97a3feac6bf185dfdc3f04da"],["/OS-processes-threads/index.html","8055bfb021e676a170b46bf3ad6d237e"],["/OS-run-environment/index.html","a9c8a2132eafa7c7e20e990a2215c8cc"],["/Open-Internet/index.html","905fdfecf3535b23f7de18bcbfdf4f7c"],["/Open-Internet2/index.html","9d9609b690b18aa0683e65d63f7f5b5d"],["/Open-source-community-and-rewriting-website/index.html","4cf2a6089bc9fc88cd7f7fecfe98975d"],["/Panoramic-image-stitching-based-on-SIFT-features/index.html","de266eb9a7c39c52c2b8f5ac13bb3801"],["/Parzen-and-KNE/index.html","b05de5f071e952197c63ffad4fcf0d4c"],["/Personal-technology-blog-site/index.html","5fef4b6c703cecdb40c2a0cf3ed11f43"],["/PicGo-Gitee/index.html","49f8da890e69b357646d02c6ec68b762"],["/Programmer-treasure-chest/index.html","fc1ad1ae3e9f62d552d34afdd8da91ea"],["/Prototype-mode/index.html","6ee22ebfc65d78e28321b383f6e47638"],["/Python-base/index.html","f285304f9346dac206eac918f3443523"],["/Python-crawler/index.html","671fcea58c9b27b91ed38aa31846caa5"],["/Resume-revision-suggestions/index.html","8cf927c964903b6f1d107109ace3b6b8"],["/SEO01/index.html","90fb7a4b990af76d7a9c96b2d3fc82e2"],["/SEO02/index.html","8c7e208b87c5bfc1f979c5eafb3a18de"],["/SPHARMPDM-MEPP/index.html","6a1d64d85b38b1f0cee03a051583e77d"],["/SVM/index.html","9b203efe0c791bff8f05b1bab9fc6d2d"],["/Seata/index.html","6f4c7e8d63cb2e4fd8fa2c9685540857"],["/Semi-supervised-learning/index.html","eff219845f9bb78c7fa4544f30b7ea1e"],["/Sequential-model/index.html","85e49d44aa0e0a3d9493f80999c0ee67"],["/Shape-Based-Human-Detection-and-Segmentation-via-Hierarchical-Part-TemplateMatching/index.html","c0726dffba419547cfa9bdae24b6522e"],["/Spring-basics/index.html","c7d180ccb9eb608453afd7792e72ad52"],["/Spring-integrates-hibernate-Struts/index.html","8d1636fd880e5f6a96a2d28812f2931a"],["/Structure-learning/index.html","2db4f637d01b31e26fcdb2ef3a3fe078"],["/Suggestions-for-self-study-of-computers/index.html","52eb028b125593ee63f2780378a6407a"],["/Summaryof-HongKongStock-Account-Opening-Links/index.html","856336e99f02367e681f31940986d522"],["/TCPIP-detailed/index.html","4156bf6f3496f3ac5adb9feb78f2bb54"],["/Telegram-VPN/index.html","89395ed9178d0ba72a284467e64348c5"],["/Telegram/index.html","f2a565af21c5b4d1d39a2bb521b14d23"],["/The-essence-of-shopping-festival/index.html","1cb38c50dc81b908396ea5d90ba19843"],["/The-most-important-investment-in-life/index.html","58fc56a73cec6bf4ce0184772f780e46"],["/The-most-successful-nvestment/index.html","4e633fcda496e85f181c7263bef23970"],["/Transfer-Learning/index.html","d88d61a88e3dfc3e1732eec6cf5616e3"],["/Transfer-to-computer-major/index.html","b643743e0785b3988d2c3a095f70c3ef"],["/UNet-Convolutional-Networks-for-Biomedical-Image-Segmentation/index.html","8186ca4268805d8f579a490501ac6b62"],["/Ubuntu-install-sougou/index.html","ad7047577ebfa2c371a65aea6fc438d8"],["/Understanding-of-paying-for-knowledge/index.html","64c0a87d218901ec360f7f2b105bbb74"],["/Unsupervised-Learning-Linear-Dimension-Reduction/index.html","06ecc9485efdca0aa5eb57eb6ee84454"],["/VPN-HELP/index.html","42a82e14aa536a52a2c8e5a32ad1a6d4"],["/VPN2025/index.html","f13d5a07ed064cf423c1ab60a2f5759a"],["/VPN2026/index.html","17972ff5bb4dd5d5f07437d248ba8936"],["/VTK01/index.html","5fa56dff9c802d26c171241b76a48dbd"],["/VTK02/index.html","fa11a8df5a2a415185cb0ce6dc97ce61"],["/VTK03/index.html","29030c62f9ed758d24042973458940bb"],["/VTKRead-write/index.html","d6ba4064ec991e2084e455ea5cbc3ef3"],["/Vertx-Java/index.html","2465ef8f791c6470c6d10356364b6c79"],["/Vpn-OpenInternet/index.html","e98c33ef70fec68470c5e068911d0d62"],["/We-are-all-good-kids/index.html","fe9339ce2b546b9097122979382fe3ef"],["/WeChat-80/index.html","97cbe239d4d9823c0c3171a1313e2b3e"],["/WeChat-red-envelope-cover/index.html","c0335303d1d3413779d2d227705a7d88"],["/What-is-crawler/index.html","812c980cea7a97e7b0632b43797d0e84"],["/Win-Internet/index.html","49e3e214c1f6fd86611ff3cdc543d2e3"],["/Win-Open-Internet/index.html","146b4c0fe6885e89b3d18134bda111cd"],["/Win-OpenInternet/index.html","67cf53773f175afc65a6e7369e929cfb"],["/Windows11-2kfans/index.html","b341b10b8714b5b9372325093cdadaa2"],["/Word-Embedding/index.html","c7f378e7b7ed66aea6a49867025cd8b1"],["/YuanShikai-and-his-Beiyang/index.html","f8082544646a78e33a41b5a596299b2d"],["/Zero-copy/index.html","39d5bc4b990551a10e800bf0ee7652e5"],["/about-keras-model/index.html","f4b0d435af8690e277e24551851149db"],["/accounts-google/index.html","f147d83bf8b7ce722b43df9fc6550c1e"],["/algorithm/index.html","164b4297a1e1ef0b00eef8c044c31a20"],["/alibaba-Java/index.html","bd566d35239a407f35c443172a5f3699"],["/archives/2020/01/index.html","4299a38400b6fe99de17168ce51baa2a"],["/archives/2020/09/index.html","51a4b26818d53378fc7febe502b1eae3"],["/archives/2020/10/index.html","bc1c8ba1e26ce34b1e8c33062986ec9c"],["/archives/2020/11/index.html","68796c1c60f9b7711e73ad7b44267c0b"],["/archives/2020/12/index.html","854a15d3f608dc04066f155673a11e47"],["/archives/2020/12/page/2/index.html","b09b332aee936890a70c2c1f9756f9d4"],["/archives/2020/index.html","c3ffb9b3eb4ab6709ec80ec85080c024"],["/archives/2020/page/2/index.html","79d288360e7a684e0abdd3aa40c28834"],["/archives/2020/page/3/index.html","698933bfeed1d9bf4680c6df9fd5c91a"],["/archives/2021/01/index.html","4086885bd33baab4931b47d2438afe90"],["/archives/2021/02/index.html","d0552da6ba68bdaeb5ac958af45c0e3d"],["/archives/2021/03/index.html","11631ad1f1265537d397fc1d1102de6e"],["/archives/2021/04/index.html","b1b3310a76caa1433f9e11a669f4ed9a"],["/archives/2021/05/index.html","6e24be560c58f11149d282dd45ed18ab"],["/archives/2021/06/index.html","2bce9fd9edff263ebf855c039a28efb3"],["/archives/2021/07/index.html","61272d5a1649f62bb3bba298e7a889c3"],["/archives/2021/08/index.html","63fcd98492b5c4b952835717d3579332"],["/archives/2021/09/index.html","5def81d30f880177911e7929d2d21117"],["/archives/2021/10/index.html","4f8108b040506eccb4f720d188198c45"],["/archives/2021/11/index.html","d423a83843fc38fc2f767ff23cb9e2be"],["/archives/2021/12/index.html","d2f5bf2ee38e9d91768ad9504dac19db"],["/archives/2021/index.html","4f21a6dfa8fd0413b77d99545e80549b"],["/archives/2021/page/2/index.html","3f946992342b29b5dfdb7d13beab7dac"],["/archives/2022/01/index.html","bb427ed5ddbd3ecb8bb471c3c784eb08"],["/archives/2022/02/index.html","c0658246983036cefbf546cc4cc3a2c9"],["/archives/2022/04/index.html","eb804333e56bb7266f45c7be187e3043"],["/archives/2022/05/index.html","c0d43e5ebbe070f86c0c15ca7cba1e6e"],["/archives/2022/12/index.html","33e32ba188fcd984d3468f9cc71ff344"],["/archives/2022/index.html","031da8106933b3a4a7403283175ce2a6"],["/archives/2023/01/index.html","930e957450298c194844e293b22d9162"],["/archives/2023/02/index.html","880b58578017099f32907cf1aae3b077"],["/archives/2023/03/index.html","a76e17146e85a5988efcc0f97583397e"],["/archives/2023/04/index.html","7c3e16b0b7141a0612171b1e1013b51d"],["/archives/2023/06/index.html","613d6f685c42a226a143b8c10a11a537"],["/archives/2023/08/index.html","5743c82a8f2336aa80f3fced89879473"],["/archives/2023/10/index.html","346194e60e90b685d9edf40a93b7bda8"],["/archives/2023/index.html","2424a9e76276a0e7f2dbf8b3e3a40360"],["/archives/2024/01/index.html","6e873b2e43ff599775056e029c3a382e"],["/archives/2024/02/index.html","4d3d0a31946185a8a904515783539a46"],["/archives/2024/index.html","3c93277e388babd620e2a0c41ff069a2"],["/archives/2025/06/index.html","b1bee99542f5e441f62c630bc9947fec"],["/archives/2025/07/index.html","0690f86f53eccf01b901b34536ee82d1"],["/archives/2025/08/index.html","c875eefb2eeca653c6d3bd9fbd5e8a7e"],["/archives/2025/09/index.html","814b06348a30bafca0aed127f430f44b"],["/archives/2025/10/index.html","c1edfb07e42277473d0a732ae0c753f2"],["/archives/2025/11/index.html","ac05416b4b2de13ab5874ed2f65bccde"],["/archives/2025/12/index.html","5bce3f53479253f758df9e6e4d8347c7"],["/archives/2025/index.html","d36fecdcc85eab71a501e85981857ae0"],["/archives/2026/01/index.html","df943754416722128ffffa79996e7184"],["/archives/2026/02/index.html","3ed2cc7251cdee6ac1a23de101fc8443"],["/archives/2026/03/index.html","aee0733891e0bdfdefb2ba582252b248"],["/archives/2026/04/index.html","53fbe4de72a647fc73e2edab812d3a62"],["/archives/2026/05/index.html","276697b874a2d94f76705f9c4ed50a3b"],["/archives/2026/06/index.html","f71af275704d2e8f00d72d3be9985226"],["/archives/2026/07/index.html","055de00e15e07fab91f3717f2cf02b21"],["/archives/2026/index.html","e16971449d49863c054203135a8dd232"],["/archives/2028/02/index.html","08a72e418f5ff0c86ccc837ffb368f76"],["/archives/2028/index.html","17ba73820241b3206c18ac58b8b12c16"],["/archives/index.html","036a57fb09b8f8b61de69dbbc11d64c5"],["/archives/page/2/index.html","a2ec624debc245e76ae582e7c469ebd2"],["/archives/page/3/index.html","38d7f47caac06307a0ebc78d3c9f45df"],["/archives/page/4/index.html","57678f551c7c7ee9e248f0e3af764e78"],["/archives/page/5/index.html","6d4bd7ea6df796def1e021aaa9d6ea5d"],["/archives/page/6/index.html","d0d64d7edfc6bf367168f9182a2784ba"],["/archives/page/7/index.html","4e614dc1986fb0f6ac87f29850e41c1c"],["/baidu-search/index.html","669ba95e9761f752e9c51a4d826bc222"],["/baidu_verify_code-Hh2fKNlEB1.html","3cb03a24345b0c61e58868c2bbf71736"],["/be-a-programmer-instead-of-a-code-farmer/index.html","315b7df2a8b141e15941995c92730354"],["/best-vpn/index.html","e64730a6e6e98fe53687892613373638"],["/best-vps/index.html","36d9241304da788625badcd7b49c8284"],["/bought-a-house/index.html","f68d95f928cf4b300d4c4213964c6521"],["/categories/AI大模型/index.html","83503a42fd157b4982778473bc0f6f0d"],["/categories/C与C✙✙/index.html","c0d24aa9c0be14e443c89450fc245d47"],["/categories/Go语言/index.html","9a514d71c4b818feceb94f1958f90f19"],["/categories/ITK与VTK/index.html","3d611a9f45a988464fa6b50d5d5192c3"],["/categories/Java/index.html","275110131386b92ab025449c363af6e7"],["/categories/Linux/index.html","19468f5d863390d4404c9b01a5245dc3"],["/categories/PLC/index.html","d1c7e20845ef4df8e143e212f9c99054"],["/categories/Python/index.html","98071a116da30509f11a99521bc0e32b"],["/categories/SEO教程/index.html","b422714e55757b19fc9850d50cf19b56"],["/categories/index.html","bb7516de3ec7122dc64cf9d578967635"],["/categories/图像处理与机器学习/index.html","a7b3236bf8adbdf99a7e498518fd81bc"],["/categories/工具/index.html","f59d0b19dbcc0e0d8e160ca79249cd59"],["/categories/技术以外/index.html","1f08df34fa0327ca4fc73f8afc197b12"],["/categories/技术以外/page/2/index.html","3a1ee13247ed38cf6f582f05d1ceec6f"],["/categories/数据结构与算法/index.html","8911858f07546ffdf13ac4a4f87777e6"],["/categories/科学上网/index.html","3cac14498d2d08fc4394437394388be8"],["/categories/编程经验/index.html","a19bae0b01b1de6e99f62d854fdf68e4"],["/categories/编程资料/index.html","5d518cae3ac5dbd836c6b9026fe2d4a2"],["/categories/计算机基础知识/index.html","de6168adb6813c66f2bbe174a113461c"],["/categories/设计模式/index.html","87ff9d2fc9b181869469338793d4c94c"],["/choose/index.html","13cc512fe4bb12a78be72615e518e677"],["/choose2/index.html","ec02426ddf6afbd174db290b5db07755"],["/chrome-crx-intruduce/index.html","d6331b55cac2d13ae83b2ce6c02b9199"],["/clash-free/index.html","e5ee49eb77e2ca0ef75ef3f7b384b3c7"],["/clash-pro/index.html","9377f3d53c223c6037da6bf68c60072e"],["/clash-verge/index.html","99b5c5effb3adeaf67bcc71938f38297"],["/clashvpn/index.html","02d5e14a1280c56d5df6b3aac9ac4f5d"],["/claude-code/index.html","fa51002b14b61b6360d3c3bc31a4bf7b"],["/coder-blog-website/index.html","9a4dad60d09b9101c665dbb9bd9a1d34"],["/coder-source/index.html","854c618d6d0b0d3dc3c60cd1996b4857"],["/coder-videos-website/index.html","384145914a562c7e37700c2e16722ce5"],["/computer-book/index.html","ebc08b8549621954c8ee0b97a9064b60"],["/computer-censorship/index.html","d0e87238e762836d6ff53f577f7ef28e"],["/computer-network01/index.html","6a7273b03a155e1746cd25d77d82f78f"],["/computer-network02/index.html","0a59194cc42d2e566a9ea22b95514f37"],["/css/main.css","bc32ad34ec4990d934c3c647bdb62f79"],["/database-Mysql/index.html","caf7722fa50563648f7245ef68e571e3"],["/eclipse-lombok/index.html","d1b954ae7054761daab5526efd4b9819"],["/freego/index.html","e09d907ed8a9d8c80583c3efaa8c8218"],["/fully-convolutional-networks-for-semantic-segmentation/index.html","918b396c60bb481bedf16d8786466adc"],["/great-firewall/index.html","cf29cdf38ccd199f034f47a0a7447703"],["/halfrost/index.html","53a704788aa0218819d1a48a2f3cb9f3"],["/how-to-signup-chatgpt/index.html","8b8e23327ea4d2b1da81222161726bb5"],["/how-to-use-Gemini/index.html","4a21daf1606a6ca09825182fff968053"],["/idea-continue/index.html","68f5678765f95cd7036e980df1d7e5ec"],["/index.html","97898768a2b84ebeec29f676cf534dd7"],["/internet-dir/index.html","aaceb07d55f07f10ae7ad9d6669834a8"],["/ios-open-internet/index.html","79af573b4031d6c330e015a2a0bbecf2"],["/iphone-open-internet/index.html","7766b4902abe17c4b9fd2f0dc5042d0a"],["/itext-makes-pdf-form/index.html","91003ccbcafea97da7c98239f7055941"],["/java-Set-Map/index.html","7af4151cfafc074ad06d7beacf82c22d"],["/javaweb-server-error-codes/index.html","3c618b333357e0b1000f4e4c0d9313bd"],["/javaweb-source-code/index.html","5db3514252eb559233a8f0194b9cb8e5"],["/js/lib/busuanzi.min.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/js/lib/lozad.min.js","47904d34a224931dd1b615c59a3dbe3b"],["/js/lib/prism/prism-coy.min.css","0ccad54d95845901ead59bfd3ecceb14"],["/js/lib/prism/prism-dark.min.css","a4711d2957d6605eb5682bdd228cf123"],["/js/lib/prism/prism-funky.min.css","efedcdccd7a9ab342d2d9cacd24920af"],["/js/lib/prism/prism-line-numbers.min.css","38e22e790c279bb56f9ec4b90a2a2d58"],["/js/lib/prism/prism-okaidia.min.css","5ac6f9de996fbec68aaa106dfb16e061"],["/js/lib/prism/prism-solarizedlight.min.css","ecc7e64d039873ffcf7fb27babdaeb5a"],["/js/lib/prism/prism-tomorrow.min.css","456af2a14ae4f5089939d5904ac40fe8"],["/js/lib/prism/prism-twilight.min.css","ebb5c355332a8cf9a1ce37a2a69d678f"],["/js/lib/prism/prism.min.css","a5234d614834658887cec6a9515890f8"],["/js/main.js","052d2b299d9c750afea8df0b802ab7c1"],["/keras+TensorBoard/index.html","b68a60a08d35d5cdd17caa668f9e20e2"],["/keras-beginner-guide/index.html","004a170fd1c7e5cc29c3c7499385b588"],["/kimiclaw/index.html","d72ffa9fe5327a90d14eec4a6194fd83"],["/kmp-algorithms/index.html","c1091f9159bb06e71206ab8a549de891"],["/leetcode-Java/index.html","c71fef4af0af1e34ff9d88323a0f6368"],["/links/index.html","07a98c00fb00a3bf0705ce92761fb724"],["/linux-java-opencv/index.html","b9eb340a5e2723178192f5c533f9c1a8"],["/magic-internet/index.html","509c1545098819a169f629395be6f45b"],["/magic-vpn/index.html","20266371c7d5772b2ada6d0e285236ce"],["/mingci/index.html","940f4caa4420517142a7f2bdece67dd2"],["/mobile-vpn/index.html","ea17dd6609bae5399576486b76f1c080"],["/msb-source/index.html","c29e79c530ee8e41d08b658d5cc0151e"],["/online-BUG！/index.html","c80497735c6879284dd75f81cab06230"],["/open-app/index.html","66785624609e7585dd5904263915a032"],["/openclaw/index.html","cb4eb534da3a57dded09e8ba2c0070da"],["/openinternet/index.html","bc0d3944b33985c8931a057eb827f91d"],["/page/2/index.html","02dc68d7a83e00865d74b8867322748a"],["/page/3/index.html","ba7cbb5a974f22625686c71e24a03775"],["/page/4/index.html","6f5a8d895cc856d47b53bc7530c44ee2"],["/page/5/index.html","175b58db31e79ed54937247db1940496"],["/page/6/index.html","f4f096d59b4fca6e0ea1bf7c1f41becf"],["/page/7/index.html","40ff6e832c5f84be9cb56f10f7e140da"],["/pandas-data-preprocessing/index.html","2e8a53ad4ecf815b9cd7051430e0cc78"],["/phone-win-open-Internet/index.html","5a9d488ab48a5ded99c715bd0e4ad120"],["/popcorn/index.html","a918f8a409cab9ea7d93385c8fc22c5a"],["/protocols/index.html","6b763367cfe8b7971ede53fdc9f3cc72"],["/python-Blog/index.html","eac2ba4ce216377772d0320b5f624bc7"],["/python-yeild/index.html","55ac22815a4e4be6313c22185b217e19"],["/python爬虫教程/index.html","64ff18502a963d3e1036c3aa7a7436c9"],["/rmux-agent/index.html","9cf21d3d63871d38079372601245c563"],["/route/index.html","55c2abcc4568a939dde3da03809d8cd3"],["/search-help/index.html","6258710e3eb4315efc25bfb1c6dbc406"],["/software-copyright/index.html","fe85b048b59d3961894190c36f0e9111"],["/sw-register.js","5ca1b81f15e4a07cfde1c83a8fc2a180"],["/tags/AI/index.html","8b82bb860ba7d20abc6d4671b43e2cee"],["/tags/API/index.html","d25cec9f5ce583ff2dbe18fa1c0d13c1"],["/tags/C-图书/index.html","6a539e51883f76682902fc0ebf4e8ec0"],["/tags/C/index.html","b0a673289be8a3f437a240a2c02ebcda"],["/tags/CNN/index.html","13bd0b60416bfcd4674d741864dd439c"],["/tags/Chrome/index.html","fa6bae647f3a8ca5c9517d8a4ecccefa"],["/tags/Clash机场/index.html","a46eddc16bf24b0afee34bb07214860d"],["/tags/C✙✙/index.html","9185eecedc3fa74d02d71e0bf626702a"],["/tags/C语言/index.html","0dc4681e79aa58c8acef83539f4f001f"],["/tags/C语言图书/index.html","e3f9667a68221ff15e5bc2f47b33f42d"],["/tags/DSN/index.html","9c4931349dbd6762b2624cbaa1f0f2bc"],["/tags/Dll/index.html","5a7bd8e5c50d8c7b527cbb143c3f8c0b"],["/tags/ECCV/index.html","3fb38ffbb75a543b61ab20f8ca9f664e"],["/tags/EM算法/index.html","1c25d18476af3a181850b20199a1aa23"],["/tags/Eolink/index.html","7b850b1e73b6ff0e0692449fdaf362c7"],["/tags/Gitee/index.html","b2ad7142ff7923bd8c0165e8dfc5a871"],["/tags/Google/index.html","7df0d38219797853ffae490661d17c6a"],["/tags/Go语言/index.html","957c4abd2c8384ee51e79ee8d5cf349a"],["/tags/Graph/index.html","005600b10d2b9065e8000a560921110c"],["/tags/HTTPS/index.html","15ad913ad8b0fae7e5c56587d70ac01a"],["/tags/ITK/index.html","de33765047bc8115cbbed0af5303a729"],["/tags/ItkVtkGlue/index.html","fc0e30615e7864845e66e8f55ee1785f"],["/tags/JMM/index.html","a86cf26c26b338fd44d1c512946e7ca5"],["/tags/JVM/index.html","b53eb0c0c2d27e770311e9ddee0531a9"],["/tags/Java/index.html","db26187e885759b29efe94d446aab8fb"],["/tags/Java图书/index.html","6b41bab8dc52df7f0c8a279c48c7e39a"],["/tags/Kaggle/index.html","cd3e39f47533abbbf3f6dd432f32b7dd"],["/tags/Keras/index.html","f3fe1005fec24eab1424757dc7caa8a4"],["/tags/Linux/index.html","c1bffe5f222bb4b063bb0fc471aa5f7a"],["/tags/Linux图书/index.html","0a7ba29b3ce86c04c33ab1addd983fae"],["/tags/MEPP/index.html","43c765e666eecb870a46cec0c7bb9c59"],["/tags/Map/index.html","fd2337a3b3272d410b7485436ac8aa22"],["/tags/Matlab/index.html","0ae257f79230e90c7e839a7c392bcc7a"],["/tags/MongoDB/index.html","cad8916f60393319ffb77f5f2c422b37"],["/tags/MySQL/index.html","ba6c204227eb383b1a60161090269633"],["/tags/OpenClaw/index.html","5d4cdabb012f0ffc9b399b6b7c56f32d"],["/tags/Parzen窗/index.html","daf4f89d3e23bcee4454d3929a64bbe9"],["/tags/PicGo/index.html","ee2eb7d19c7d1eb5780e0887106b9071"],["/tags/Python/index.html","1635200f7da8064a51607e79203df7f6"],["/tags/Python图书/index.html","c1b3349afb128a7de029f2bae74a9893"],["/tags/SPHARM-PDM/index.html","017a7782dd53b42d66e0eb8127f3bc52"],["/tags/SVM/index.html","2cf2d6fed6ebfe340b1ce955551156ef"],["/tags/Seata/index.html","787870d592455dff28f5d48dd498850f"],["/tags/Servlet/index.html","283e6aa761279653155267a200c91f7e"],["/tags/Sping/index.html","4ef14d6002bea4754b0d2be7944989ec"],["/tags/Struts/index.html","481e5fd2d80a97b01f6e8c9bea7defe1"],["/tags/TCP-IP/index.html","54cd4a6ae0a381c994751057c2be63c6"],["/tags/Ubuntu/index.html","041a33b97a7b7d3e9e3da9d919cc9599"],["/tags/Unet/index.html","802030ddb52b5102fe19d1b7face4673"],["/tags/VPN/index.html","baae4f6183092daf0b8cf571c35d5caa"],["/tags/VS/index.html","519f0306f06d00446b8cc356183fa0d4"],["/tags/VTK/index.html","4d96befc1ba6fe3748ac4d77a2c132b8"],["/tags/Vertx/index.html","1a30ffc720f127cbf4f37e0f1875b405"],["/tags/Windows/index.html","a6b63cd82835937bc24b32005471eb90"],["/tags/claude/index.html","311ce2d63cc5bcbcf68a25f529f99dac"],["/tags/edit/index.html","89ee823591abb3dec17e565aa7838cf4"],["/tags/hibernate/index.html","c97e2c97466b8111cb6e07e6b96be768"],["/tags/index.html","1715dcd1369490ea531cec93b528f3c8"],["/tags/itext/index.html","f1f4295ee72732b6b5817afd2e6e87fe"],["/tags/jdk/index.html","9b8fcf1109d2b32c41743a1b99dc67cb"],["/tags/kmp/index.html","2007ac690d318d036ca24d8f28968fbf"],["/tags/k最近邻估计/index.html","ebb49002bb81b657b9672e6e87e7a700"],["/tags/lombok/index.html","e05354a5edfe489436b2bc9e4dbcda43"],["/tags/offer/index.html","3835db7621c59602fc3ecade2f610289"],["/tags/opencv/index.html","16a55ffc1885d13aba3e168686f1ce02"],["/tags/pandas/index.html","bd6bbfd23b4d36aa8df68b2888d5e673"],["/tags/rumx/index.html","a6d8c32487d5cb4b244045e1dd91d3ba"],["/tags/string/index.html","9684c47245b7dc88cc9b1008efee852f"],["/tags/vim/index.html","a132a76fb922ef12c8c603dda0c63eeb"],["/tags/vtkPolyData/index.html","043afe6940336323b0b4a62f2e8cfaae"],["/tags/web/index.html","ad98e7380fca9d16a00853d1fef3c357"],["/tags/xshell/index.html","21222b96e9d6ef875e643dc4f6112b12"],["/tags/yeild/index.html","06467b45d7bf26628111383ed05feffe"],["/tags/互联网/index.html","15b99bec6fddd939d9fa507b6edf3e06"],["/tags/人工智能/index.html","63d253a7f06f244a96d753f846e363c0"],["/tags/体绘制/index.html","8ac4f6eb1687eb796ec97292704dfa95"],["/tags/全卷积网络/index.html","b9aed71aef22f520c85355fc36590bfe"],["/tags/公众号/index.html","2d0318da19c2911bed8ca5f24dce4731"],["/tags/内存模型/index.html","42c192894a2f319f74ed13e528191a4f"],["/tags/内推/index.html","0687919ebe9e5e01bf65b2e5654738ff"],["/tags/函数/index.html","48ab7e646569f178266a6a2c258000b4"],["/tags/分布式/index.html","870df327081a31f9db67a7ea5d23e5bb"],["/tags/加密/index.html","3103deda7e41e10f6b1c1e9e7e27b5d6"],["/tags/医疗图像/index.html","5c803cba9ec24ba49fb8ca70cb5cf215"],["/tags/博客/index.html","786406d713c97de21a4096e04fa8440b"],["/tags/图像数据/index.html","151af4696cdbd97a79c821958f1fa148"],["/tags/图谱分割/index.html","05d33103cbe0d86cc99819f50049c7db"],["/tags/垃圾回收/index.html","58c790ac245f2770a0867c7e101f0265"],["/tags/多线程/index.html","82f668c583052edc0c7abf7f401a0634"],["/tags/大模型/index.html","bd0b107d0326febadd1ed9bd97284f05"],["/tags/字符串/index.html","649723ba6d8235e69b811eccbac047e3"],["/tags/小龙虾/index.html","ba16c8b70271d4a2f0aaa7f57220eed6"],["/tags/工具/index.html","46c62bbd16481b4bab7a0fe5d3741102"],["/tags/弹性形变/index.html","a56f89f820887c9bdcc1003a534e7f01"],["/tags/排序/index.html","b537c8dc227e107fbca772b825589a84"],["/tags/搜狗/index.html","ffa65ec198bcf286e2afe513b46afaf1"],["/tags/操作系统/index.html","7953f27fb180757221d7b8d436344869"],["/tags/数据库/index.html","deb43dd5b007a09d1d8196ac0a7cf028"],["/tags/数据类型/index.html","363bfa7af83f2128e79e81aab8813ea4"],["/tags/数据结构/index.html","3d3603a26f4ca395f9b2bbd92fb85936"],["/tags/最大似然/index.html","02bed14045476602af5abb91b169cb90"],["/tags/机器学习/index.html","b29d40175c524e7fa20356a487426b92"],["/tags/树/index.html","4911ab3d2f1bab06440ba0c517a08708"],["/tags/框架/index.html","1125b71f05f843f3d76fea2ca7af16d8"],["/tags/梯子推荐/index.html","79a6e9f00395965a65814dc86758fcf8"],["/tags/求职/index.html","6e38cfeb003ebe41fbbb2257890c212e"],["/tags/汇编语言/index.html","114fc57d736328508d392604d5577e26"],["/tags/深度学习/index.html","1f3f527c2d50762a77bd6a1b031b6bb2"],["/tags/深度监督网络/index.html","3dce03865caa8796e9d8d39d265a0a70"],["/tags/爬虫/index.html","5787766c5676bc2d8e88f49770976689"],["/tags/电子书下载/index.html","f6e7d135003c2d2ce2fc0d602775b9d0"],["/tags/科学上网/index.html","9752e33f72d3772f467687094ff7b729"],["/tags/程序员/index.html","4526549e4d1e676a230bbb122142c979"],["/tags/程序员面试/index.html","c3f0cb43acdd46008668fdf184cddb8e"],["/tags/简历/index.html","287fa223dd7aae4c1e8d9064c0dd8c33"],["/tags/算法/index.html","67c1938db48f4d7f19f475d99efd07e5"],["/tags/线程/index.html","a0d18277e0501face84cdb5a8e8c3194"],["/tags/经验/index.html","1e2250ed9e78423ea797c4d341cdeec5"],["/tags/结构学习/index.html","564dd33cffd7be5f648209bfc27a32c9"],["/tags/编程/index.html","6c1e4c646074719d631b1313c3e37cb1"],["/tags/网站/index.html","9f0f57f2cfa0f9c0adc7908a41897787"],["/tags/网络/index.html","153f580a583afa2c4ebbe985fe74e944"],["/tags/网络原理/index.html","5a1890f3419e1726e1e993d109027eef"],["/tags/翻墙/index.html","3f7e1e878522754047e67bda1031d30c"],["/tags/肝脏分割/index.html","5b539014b1523af9a6de79e975d33223"],["/tags/计算机/index.html","cd72ccde14f8fc02d21f9966de44218b"],["/tags/计算机专业/index.html","a6cd98b7d8e6eaa95714d6a883099cb6"],["/tags/计算机网络/index.html","a80412d022757abe15c3d139891d574e"],["/tags/设计模式/index.html","9610fd58c74cd0a44d09d70a332102d1"],["/tags/贝叶斯/index.html","041b7dcb433b317eb2773480ac0eb1ce"],["/tags/迁移学习/index.html","a0b85b7dc390eaf00134801e00559413"],["/tags/面试/index.html","aa40eff6285d861c0447f01e58b98c31"],["/telegram-search/index.html","7e2354db0e824252923df8a1f54757a3"],["/the-meaning-of-reading/index.html","d68caccceaac57f8c566b5f970735ad5"],["/the-way-of-pragram/index.html","f04373c559b6ad4d72d13b948d965f65"],["/troubleshooting/index.html","dc687cd8f2e133a24d2f90ed36c4276f"],["/untiypro XL安装/index.html","6e6b5083479d383d25c5fcb51baa103c"],["/video-websites/index.html","148a45a2c4c0c243b45deed4ab6c7f0d"],["/vpn-freego/index.html","e7c297119cc48a0b06ba2f3ae4973fbf"],["/waibao/index.html","1b227bd2bfa1fa8c59c0f4ac0f3a556d"],["/wechat-fans/index.html","b2f63ad0ee258daa36b45e046c0802ba"],["/window-run-VTK/index.html","3d94957a6df8a3f78e2794bf8fad91cc"],["/windows-science-internet/index.html","343d66e9dc7324e507211ebf16e16910"],["/xshell-connect-Linux/index.html","ffd93caaabd7e5bbf9add78eb259c87c"],["/yzhx-vpn/index.html","695d2cc4006a346995679c878d5d1211"],["/‌Accessing-the-Open-Internet/index.html","f123e95ef7e189ff25b99792e5489723"],["/《Java高并发编程详解》，去大厂必看！/index.html","f061e51f52b3d21dcaec2e278084593e"],["/一分钟没了 1.5W 。。。/index.html","90dda3dab1c5cc3d4d63dadd6deefb90"],["/一条高产爆款内容生产线/index.html","9e82309bfb6bfd2ac445e6b348e96f78"],["/为高考学子推荐的六个就业前景广阔的专业/index.html","fcc46a1c95a7d24b696b6fccee9486aa"],["/互联网赚钱机器---社群/index.html","2a04b91cb04298cff5b961d571a764dd"],["/你们常用的工作方法和思考方式是什么？/index.html","5b0b519d9f029b071fe310f50434405a"],["/关于环境配置的一些事/index.html","ed7a5b568dd0dbb1ac5a4328c1117fe8"],["/准备了19w！搞事/index.html","ed40ce84bf19ee99be7aa87d63ef0a30"],["/几个很重要的感悟/index.html","2ef5e5dfc5ac42be997516287140b2c8"],["/分割ROI篇/index.html","167be1442dd51f9243837bdcd5e6bdbd"],["/分割精度说明/index.html","a71b1be33813d64291cf9c65468e9820"],["/分块程序执行/index.html","95ccc67d7e3819ee1027a67bc25a2cfa"],["/加班公司黑名单！！！/index.html","a1dd6a4bebecb97e0084715172194def"],["/卧槽，上知乎热搜了！/index.html","2bd2885efd4078316d83b99cc635e186"],["/卧槽，我的小破站爆了！/index.html","82835895e807e7657991d5455eb33205"],["/卧槽，我被盗版了/index.html","88ee9777c80bf518c367d7eb8a3e5ba8"],["/卧槽，还有985大学在大一上C语言课？？/index.html","7256228fea4e9f1dcb1c00a62e9026c0"],["/历年微软面试中出现的leetcode算法题/index.html","4b79d026a82ac74e4800079394d9fa7f"],["/去特斯拉试车了/index.html","7e9cd3f8f0ae2463d9fb17f4248b776f"],["/吃苦的三种境界/index.html","0f90b0a53b4e5f05d37356a28c0a6e9c"],["/哪本书适合推荐给 Java 初学者？/index.html","7792c2e1c00a5b034467da53508e4034"],["/哪本入门级的学习数据库的书最值得推荐？/index.html","71d198379c0050c580b0ac7fcf2fa5fb"],["/国内外常用的AIGC模型/index.html","3d30eda39855eaae0d523857c4d8309a"],["/国庆假期/index.html","6556d1e6758e05d7376ab61dfe48aae7"],["/图谱程序字典/index.html","8affc2b3321a429d8ea2ac13e344b44a"],["/图谱训练与分割/index.html","0ae12a855257adc96d43cf013ec7ca3a"],["/宣布一件大事/index.html","29b1f8ce673ed1347bdb03c16a049dee"],["/小鹏P7i试驾体验/index.html","165a7fc23b7659a4273786c74655a787"],["/微信PC版3.3.0内测更新，电脑可以刷朋友圈了/index.html","c3b649d67535494fd4568190333617e7"],["/怎么更快的赚钱？/index.html","b6655fffdb9814cb7955e2f94001a3b1"],["/我毕业了/index.html","4a03f22ab4077673916fc6f9ff412bf6"],["/我！真！的！找到了！爱上学习！的方法！/index.html","cac28427b1ab503ad6afa127b8a7e3ec"],["/户口的意义/index.html","de1e7c8306fd801e3c783c835540caa8"],["/推荐两本经典算法书/index.html","c08123fddee5a93125958bd19c85172e"],["/推荐几个在线学习SQL的网站！/index.html","4b81cc0f51a4857f8659de5b2d3fe285"],["/搞了一个程序员成长晋级社群！/index.html","dec7f17296b4b44e53c3245fb9cd93a3"],["/摘抄/index.html","09be9a320fd906f6146228bf73efcf0d"],["/暴跌30心态崩了/index.html","a2bb2e58505e73bc7b1d0073d3bf838a"],["/最近很火的ChatGPT到底该怎么玩？/index.html","db1e8d3bdc05571d6855894d8645fe88"],["/有哪些好看的日历可以买？/index.html","a7d5edbcc9aaefbc3efbf0b3aacfefca"],["/服务器有啥用/index.html","87ffe8c0335625a26383fa1652b9eb1d"],["/来长沙了！/index.html","7249a608137e37bd3be911572bf86145"],["/校招污点公司名单/index.html","180699b789e0cdefd89132cc12efad05"],["/梭哈200多万/index.html","65662413a2bfa22a93e7cbea09dfc862"],["/梯形图入门/index.html","1efd1bb60d686cdac64bf8a39b97741e"],["/橙心优选，凉凉了！/index.html","4dfd7ab12bf47c2f7ffa5bc924a91b38"],["/比亚迪汉试驾体验/index.html","ffab2e23e969dadc370e2b35093ad4da"],["/清华转学成电，真的牛逼！/index.html","220b1c2bf12512cd1627402ffa6692ea"],["/滴滴程序员被亲戚鄙视：年薪八十万还不如二本教书的/index.html","3469b326f65a6aaaae3ffdd41fe20b01"],["/社群！/index.html","49c977f8cc481dbd090c61ddfb9c0e46"],["/科学上网之VPN篇/index.html","ac0ec89ed538f4a40c90f200dd4e3eb7"],["/程序员必备的几个技能！看完你也是大神/index.html","5fd1acf8d78372ee3b26d4c8695c3d35"],["/程序员绕不去的槛，Linux！！！/index.html","ec5a9da25c7248bd95ec9c4644c6e7d4"],["/蔚来ET5试驾体验/index.html","2569bf8be841f07fbfeaaee1e22f38d5"],["/蔚来，牛逼！/index.html","caa0f88423ea6da173fcabefbef42969"],["/被录取了/index.html","e221fbe4af794c487d841e78ea1eea52"],["/被找事了！/index.html","df34535514e99ed9bcf1b08d95689053"],["/被拉黑了。。。/index.html","8cf333e5701fc43bd538d1ce2baed1aa"],["/被车撞了！/index.html","61856bcfd9add46f344ef9236d1e1e62"],["/该如何选购固态硬盘？/index.html","926fedb65775bf687fe63fc4855ce917"],["/这本书一定要看！/index.html","9b8fb7378656cfa453dafe8265a44f1e"],["/选Java还是C++？/index.html","1a786f71a966d5186e3a87fb0b00dc7f"],["/那些让你起飞的计算机基础知识/index.html","1abb3d76f195f7f1eb6b33deeaae743d"],["/靠这几本算法书，成功拿下大厂offer！/index.html","beca73cca01a40d4fced70ae977e3033"]];
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
