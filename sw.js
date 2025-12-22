/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/0010-city/index.html","415f7feb3f3eff2184b612fd93a39914"],["/10-algorithm-book/index.html","0c6abed8f22f64e9df35d54358a281f6"],["/10-website/index.html","1684eb1dd3e0df9f9450e2940fadac26"],["/100万的小目标/index.html","38b8528a3c2a61a36d8046acb54b5dd7"],["/10w+YYDS！/index.html","e5373231dbe7b92a096aecd18427cc91"],["/12-technical-tutorial-sites/index.html","5aba158465a74c8d7a181e531c5af66a"],["/2 6 岁 了/index.html","fecad1b850bab29525b6e28fdb1ee76c"],["/200万，啪，没了。。。。/index.html","efa17e8a0da465e877c43c030516219f"],["/2018ECCV-Paper-DL/index.html","099c0645ea3614dd5f037f5ee81bef64"],["/2021年固态硬盘选购最新攻略（小白避坑指南）/index.html","3b51f86a583ceb838d65d08ebfba544e"],["/2021机械键盘推荐/index.html","59dc9ac00790a6586e49024bc6037930"],["/2025-07-15/index.html","ad0b4fc76bb127f465f4af1f06266f78"],["/27岁了/index.html","a51f5f14269a7a419d84ac2b3c4a0293"],["/3D-Convolutional-Neural-Networks-for-Human-Action-Recognition/index.html","72513835aaa60f26cfddd85efb76c5f9"],["/3D-Deeply-Supervised-Network-for-Automatic-Liver-Segmentation-from-CT-Volumes/index.html","4b9df67b39955166441e59106d2d5a09"],["/3D-Unet-Experiment-notes/index.html","08b961bb4e3a5273fb7f85b5b1994ef7"],["/4-Software/index.html","f288815b02dba35d5d01262289ffad80"],["/6-website/index.html","61d2d96f178e8b7556da63a01714646d"],["/7-terminal-tools/index.html","ef17c5de1116d5c1fda1fd25053321ad"],["/AIGC中典型的深度学习网络/index.html","625fb660cead62674befb4b370139385"],["/Agency-model/index.html","ea025205f7f9f2d39e81e4082eb9956e"],["/Algorithm-brush-notes/index.html","212993334f37b46454ebe0a5ff361bd7"],["/Ali-recruits/index.html","fd6d9fad34bdac2a568e7bd574277526"],["/Android-VPN/index.html","749fa9ecfc5a4944cc2c14e4cea7d1bc"],["/Android-open-internet/index.html","e0eaf9aa65821f5000372321ef84a302"],["/Appearance-mode/index.html","9511fd2be674b183bb8aa539acd9135b"],["/Backtracking/index.html","86f01ea364a61234c9d7b80fddd9b6ef"],["/Baidu-Sao-operation/index.html","9a61dccf1793c793b9e54822cde12f2b"],["/Batch-Normalization/index.html","704945e69a7ca4db5ddb6f0c64193b57"],["/Best-AI-tools/index.html","72812e365a68150be0396593bc958777"],["/Bias-and-Variance/index.html","7c446cf16d4ca9cc096a887666400aea"],["/Binary-tree-traversal/index.html","f4414353d40879388b1934078c0493c1"],["/Branch-and-bound/index.html","d7c19f1fb271f7c5aaff20cad6035157"],["/Buying-computer-for-the-first-time/index.html","b6304fe5638194fc1457978397975e1e"],["/B站向北邮道歉！/index.html","71a035d59d096db4cd811622722e5af3"],["/C++-string-function/index.html","82e51b810b080176b09992494653abcd"],["/C-Java-DevelopTools/index.html","faf89b286fc5c4a2fe1c27376885f595"],["/CS-Classic-Books/index.html","7cd1aeaedc42b1751e8ead3c0d3d4261"],["/CS-network/index.html","efe8b3f47289b841a5e81948291f9d4a"],["/CSBook001/index.html","4ba4f0cf96e685dc2690b004296eae4b"],["/CSBook002/index.html","21e8d2309ce7869991273d720d9f1527"],["/CSBook003/index.html","ce5486d930b2ab502c0e6ebf92bf27a7"],["/CSBook004/index.html","9c9cfe1dfb0df824b30f6ae7a1ff377c"],["/CSBook005/index.html","a4c52f21c9c0de3bc86b328acc305212"],["/CSBook006/index.html","3bb7719c042db5acf63c8b52317c9912"],["/CSBook007/index.html","056d883e7c7e4188a868e2a441d41cb7"],["/CSBook008/index.html","d7410a5ca3bb08b548019d54fe139d6f"],["/CSBook009/index.html","2f7c6b9e1760a25643473cb0616b42e4"],["/CSBook010/index.html","ad590f6acf8c01f6ed82101f27459162"],["/CSBook011/index.html","f1fdf4888a64c7e536efc08a0e633951"],["/CSBook012/index.html","ddb2bc5b2d19b3968bb3f8ae39ff2690"],["/Changsha-really-fragrant/index.html","c6f3eb271effe0780fd7237d2a50e9ed"],["/ChatGPT-VPN/index.html","8c4a9089cfddcfc3defc3a6f3a0d73b4"],["/ChatGPT/index.html","fa3983c3517fbb969ab50eb4f23840e1"],["/ChatGPT！王炸级更新！！！/index.html","c468859b1a2db4dd43f77169d6930301"],["/Chrome-crx/index.html","9e1cd1788fd68c0476ab8c602b8e0681"],["/ClashForWindows/index.html","b17efa8a738d606279337a03b792645a"],["/Computer-Classic-Books/index.html","6cf3677600071591f94cb4eb48f3bf42"],["/Computer-for-another-major/index.html","e88be45a43984ac02248822b03a52893"],["/Conditional-confrontation-network/index.html","7783926ae09e99042e2cfc4d4d6b83dc"],["/DNN/index.html","b7ea9302ba526f4bda7afd4710ff9919"],["/DSN-segmentation-liver-experiment-summary/index.html","a04a5742316abaefaaa760c57e7a6a58"],["/Data-enhancement-elastic-deformation/index.html","935bdcc369c3e7162a191479c9318219"],["/Decorative-pattern/index.html","853110351b574c001a65ec8ead6164da"],["/Deep-Learning/index.html","ebd05d7716226a5562f77437b868bdf3"],["/Deep-learning-and-medical-image-analysis/index.html","a2af4e7248d06a1d4db5f1f903fb395d"],["/Deeply-Supervised-Nets/index.html","f7e0ca0e41b818719a2c93216d61d76a"],["/Deformation-model-based-sparse-representation/index.html","6144304011ed6f51669237d98ce52e5c"],["/Discriminative-and-Generative-model/index.html","8950d51d56b3bf6b79731d8fbd6a254e"],["/Distributed-transaction/index.html","fecd2d50f856d6fa43007419dbf1c0c5"],["/Divide-and-conquer-algorithm/index.html","90b7a70d527ae1dca37de3538ca3f4aa"],["/Dll/index.html","a8c7d808f20303f164cfcd080a6f783c"],["/Dynamic-programming-algorithm/index.html","e1bb63089030ede9cfa9f896da8eacfa"],["/E-book-download-commonly-used-by-programmers/index.html","1c8a20a3d951ac6a9b4b3ffeb638d74a"],["/EditPlus软件的安装、激活和配置过程分享/index.html","7cbc269e1878b4a5c71706d46bde5433"],["/Eight-sorting-algorithms/index.html","8834d293e48a6a5e63e4e151d0583b8f"],["/Encryption-Algorithm/index.html","6f485ad48ad9546396393c579cba230a"],["/Eolink/index.html","f7b0b1468ababa9c14f465d1fd5b492c"],["/Factory-and-strategy-mode/index.html","eee9d99fcb4ea60f1a4f99c52f6fddc3"],["/Foreign-technology-blog-community/index.html","50fc1f40273123dd5caef4e128a6216b"],["/Functional-model/index.html","d58139ddef62d99613039b18e98b0350"],["/Fund-type/index.html","97460a43b282974106149200d1a4db2b"],["/GPT-4o/index.html","1f50962ea860c61baeeb5fc2ba3a3c77"],["/GPU-medical-image-processing/index.html","f301cbe7e261974b4d93c4a16bf11f9c"],["/Gemini/index.html","3424f8921d17f709698646d1f84d22cd"],["/Generative-Model-of-Unsupervised-Learning/index.html","23f3594d6053be806c0d0bacb6d6dcc1"],["/Git-Learning/index.html","8d08b23b7ff840d6db3857203ecef2ef"],["/GitHub-2FA/index.html","306b9e444a824e31fd3e29f4a80f21b5"],["/GitHub万赞，程序员必看操作系统总结！/index.html","9910e60e511b90c683cd09bd55e66f1d"],["/Golang-book-recommend/index.html","cf9c442786d1a999cbe7599a9e4e4eeb"],["/Golang-learning/index.html","7c34a691a328e2298e56724a4c1f890e"],["/Gradient-descent-optimization/index.html","6d6cfc667231fa6b17347c42b101a993"],["/Greedy-Algorithm/index.html","338621bc3f7eb6acf2e6754133f5dfb3"],["/HK-bank/index.html","3fa58a09ab731d57071c809966c27ca5"],["/Head-to-head/index.html","abc1db43a0423b2fbb3c0602aad99514"],["/HexoPage/index.html","49fe12a719aa3dac6ab879ff5403006a"],["/HistCite-Pro/index.html","0b3d71e61ad33439c7941ab24f37cc51"],["/How-does-the-program-run/index.html","14af28cdcb75da6f5d4ac5492efd833f"],["/How-to-judge-whether-technologyisreliable/index.html","98cebc169f874c79970bd81c89bb114c"],["/How-to-learn-design-patterns/index.html","aa57ef425703918a811ba3c1de3f8959"],["/How-to-learn-design-patterns？/index.html","5d85acee729bb943a5cbeaf166fe10d6"],["/How-to-teach-yourself-programming/index.html","95cad053562e9ec90061316056f4cbbe"],["/How2learn-Python？/index.html","80e866517f18f3fe68760d3b31481de6"],["/IDEA-shortcut-key/index.html","bc6366b5f9156d07b8e427655b09a7fd"],["/IT-interview-basic/index.html","6c5a7f74d3de9868008c32d210a52202"],["/ITK-VS-install/index.html","b2235f1ae5da7d957d45ad7f86c21f74"],["/ITK-VTK-ItkVtkGlue/index.html","f2dc4090d2299c0803bf28e0dc1ebebb"],["/Image-processing-plus-noise/index.html","f7fdc85c2ebd4c6b464bdd94bfe39fc9"],["/Inception-Going-Deeper-with-Convolution/index.html","ddd640d58dbeee8e13cb9c2b718e2057"],["/Java-GC/index.html","9b218658ef52727fc991f21651cb7747"],["/Java-Servlet/index.html","1f6f6dd5d990bf73616cf24a3fbcb009"],["/Java-array-and-collection-sorting/index.html","8c1a276c226ccd1f8407a86961599745"],["/Java-development-tools/index.html","4c06592278e641715bdf3d822b75b25e"],["/Java-eight-data-types/index.html","278c45e84ba879baf05b446dd601acc9"],["/Java-interview01/index.html","3dc5a1a465080ea9d9c369e63d4cc43d"],["/Java-interview02/index.html","3dcbccffcd9f95cb794f8470dcde3a16"],["/Java-interview03/index.html","812a10840f4678ed88cdd89944d91f62"],["/Java-learing-map/index.html","a53ac9f1a85693858ef89b55eb83c45d"],["/Java-learning-route-map/index.html","062a3f331a2185496807959f48a2b535"],["/Java-memory-area/index.html","f86bd17a8902e0449d4c74df57a1c1c8"],["/Java-memory-model/index.html","a4d3d01a217019e178a106ec9afb1702"],["/Java-multithreaded-learning/index.html","c1711f6acb20095be818188c0592229a"],["/Java-project/index.html","0b8fc87e36be1da8555df7a7460e68da"],["/JavaWeb-Chinese-Garbled/index.html","40f93af7951f2508c683f1586ca280b3"],["/Java还是C++？/index.html","473d2c4d6ce8b463004962b2fc5948b4"],["/Kaggle5-step-guide/index.html","88cc6ec72e28459a5e7fe88883a74805"],["/Knowledge-points-of-Java-garbage-collection/index.html","ec7f1bdb17fb5fef946881b1222187b0"],["/Layoffs-and-Hiring/index.html","7b768c400b53b31d767ba2ddaa88b8ac"],["/Linear-regression-of-machine-learning/index.html","a9312e3b32270b72a7b0e902327542e8"],["/Linux-Compile-C/index.html","7467eceef2208cc58f3287e764b9d553"],["/Linux-ITK/index.html","d1de7a915c93a14b80ece052a0742d52"],["/Liver-segmentation-of-sparse-components/index.html","ffede74827ce37ca3054f7f6e99e12ab"],["/ML-EBook-paper/index.html","68c357806d6598d35a561d94641208e8"],["/Map-uses-multiple-maps/index.html","964e5e529750c1ec2beb3af67d274d31"],["/Matlab-Graph-cut/index.html","fae701ee86611a046b3e9b4a96ccdf5f"],["/Maximum-Likelihood-to-EM-algorithm/index.html","1341a55361f5eda4b47c2dffefc12392"],["/Mean filter and median filter denoising/index.html","09373550b42a984a7ec708a7f8002a7a"],["/Medical-Data-for-Machine-Learning/index.html","af0666a519ec7c9d811f6f5f8eac0ea2"],["/Medical-image-analysis-deep-learning/index.html","46542f7f08298ded9dc9fd75d6de5f58"],["/Medical-scan-image-processing/index.html","b8635433eaf3436f940cc9ac9ccc350d"],["/Merge-sort-algorithm/index.html","8f026bafc031cde9e2ac0e91dcc59632"],["/Monthly-income-2W/index.html","b70e37cd9e54dcd933bd71bace1697a1"],["/Mysql-database/index.html","cd499f37a643dd951d3256a423e94ae5"],["/Neighbor-Embedding/index.html","c82823ffe79ce5a13418c3c6df55f3a6"],["/Neighborhood-approximate-random-forest/index.html","f9381fa7fee6a573766dfb6575ffdd5b"],["/Net-and-official-documents/index.html","e0bce112479d8762b934b5b95de68ae3"],["/Netflix-VPN/index.html","8865be093bea8b07d5c1841175fefd59"],["/Network-principle/index.html","066034c0291954d0fd4647262ccee91c"],["/New-Hong-Kong-stocks/index.html","89f4c34f5c0dd64dac35a0bb11b47a45"],["/Nice-to-meet-you/index.html","8aa419337c557ea8b4fa6b3d1109f3fc"],["/OS-processes-threads/index.html","66f44b84844bea2deb2f24b9722b5e0e"],["/OS-run-environment/index.html","656595c0c07d6895b8f28cb4382c73ee"],["/Open-Internet/index.html","e192ce6270772cceb05e6a112a61d3b0"],["/Open-Internet2/index.html","24c7abbe79f7a4a6e4545314accb401f"],["/Open-source-community-and-rewriting-website/index.html","ce8e4a03d7db80b963cd204bdb55598f"],["/Panoramic-image-stitching-based-on-SIFT-features/index.html","e517deeefb04c169ca7b449afe75c072"],["/Parzen-and-KNE/index.html","54a6774474ec0fbe95192fd3b917e34c"],["/Personal-technology-blog-site/index.html","77ff8b961b9455af302f315279d4c463"],["/PicGo-Gitee/index.html","3131fd89f029d3b37ce948b3a4ed6e37"],["/Programmer-treasure-chest/index.html","169ee0c58c9a13815aa977c9ecba617b"],["/Prototype-mode/index.html","7c979466d5927b3a386cb9d54789dc22"],["/Python-base/index.html","9c8197af8c6aca69a2e76d7ebad3379b"],["/Python-crawler/index.html","71004d30c764dc0aac31016f8d91c510"],["/Resume-revision-suggestions/index.html","4bd41cc4962ab914dc9064511a59e33e"],["/SEO01/index.html","763ade7d09135ee79b415b8586e0bd82"],["/SEO02/index.html","3d56451fa803ac71b3c2f54434af6345"],["/SPHARMPDM-MEPP/index.html","3396b7bfa356ad255c7a70968101241c"],["/SVM/index.html","9316568923671332d75e9c3348004e4a"],["/Seata/index.html","89ddf4adfb58cc76ad217947fb691c20"],["/Semi-supervised-learning/index.html","9624f9be6cd0cbe6905bd5aa1eab31da"],["/Sequential-model/index.html","5cc42df3cae638fd7135c748a2217f28"],["/Shape-Based-Human-Detection-and-Segmentation-via-Hierarchical-Part-TemplateMatching/index.html","cb8aadef03389ad60cf8fcd05f262b79"],["/Spring-basics/index.html","411d756f3883a562b79b6fd85132e388"],["/Spring-integrates-hibernate-Struts/index.html","d4800b58d50b99161a1f78f6d829cebf"],["/Structure-learning/index.html","456f62912b2db16b9ef6c710f5e58e03"],["/Suggestions-for-self-study-of-computers/index.html","410559d4e883121ba75be8726c03c056"],["/Summaryof-HongKongStock-Account-Opening-Links/index.html","eef691c195dadb5db6bab1d25f52df7b"],["/TCPIP-detailed/index.html","391ae2d71ac51fcaac0338a131138343"],["/Telegram-VPN/index.html","8bce9401135604aaec0e000a1134535f"],["/The-essence-of-shopping-festival/index.html","07002ecd99d71588d260ac3090612beb"],["/The-most-important-investment-in-life/index.html","18381216fc3b7d562363157809ebf116"],["/The-most-successful-nvestment/index.html","597917f0c8111a5d45aad46413ec3e0d"],["/Transfer-Learning/index.html","00a5f8d9f534da74258ac39a4e04a63f"],["/Transfer-to-computer-major/index.html","4ee99c1bee327611727c28b60075b379"],["/UNet-Convolutional-Networks-for-Biomedical-Image-Segmentation/index.html","af47cdaf899f5d791beb423e256af2bb"],["/Ubuntu-install-sougou/index.html","833e43ab310a87ea587c316903436dd9"],["/Understanding-of-paying-for-knowledge/index.html","3d42ee14fcacc12433e3fe2901984add"],["/Unsupervised-Learning-Linear-Dimension-Reduction/index.html","04aec1eeca2ae22fdcfb82ac66f6e89d"],["/VPN-HELP/index.html","cca4680044d82f3cd5e947e60652d8ca"],["/VPN2025/index.html","e81cb787227123f6769b4b2ea3393da1"],["/VPN2026/index.html","522923e061080a697c4236a1744c528f"],["/VTK01/index.html","d9237be1494f126f8463a0e3dbc957e3"],["/VTK02/index.html","9e4a52a518adb9e63b4ea56a6eb6fddf"],["/VTK03/index.html","da6c2d25d14f15b8e8e59ef1b6a532fb"],["/VTKRead-write/index.html","d7cea76b6d171d04cf9dec3426f9bd5d"],["/We-are-all-good-kids/index.html","25a4dc7fd68b8cf3f694151fa7078592"],["/WeChat-80/index.html","b7ca7cadd1614d9018901ef0cd7f6ce0"],["/WeChat-red-envelope-cover/index.html","be893283a1b010a909c74f6c119a06cd"],["/What-is-crawler/index.html","c653f00b20b87b6f77ff583b9aa3f5cb"],["/Win-OpenInternet/index.html","378e63e1a4e428188291d8b10c59a79f"],["/Windows11-2kfans/index.html","c65d43307900482b27881a517aa0c1ad"],["/Word-Embedding/index.html","e2db148ee908c698bbc85b2c70f5ec38"],["/YuanShikai-and-his-Beiyang/index.html","329b53a7d188ebf898ce022d722b2b9f"],["/Zero-copy/index.html","b0caadedd7a9d1072d2c37f97a6dee34"],["/about-keras-model/index.html","7aa925e17a1a56f6bb1808d9ad295809"],["/about/index.html","dd9670464921d42c51357b28af9b82fc"],["/algorithm/index.html","dd025f2a9daf270a3732921b6f86e8f2"],["/alibaba-Java/index.html","18090f6fec04280cf95ec02c3f9ee445"],["/archives/2020/01/index.html","0a8b9b7e9ed821593d0bb305e46ff10e"],["/archives/2020/09/index.html","262c87661e2a81496173f2cbc0570a9c"],["/archives/2020/10/index.html","3189426b992df033cf79304ad79a869b"],["/archives/2020/11/index.html","01b97d94b1eb7156d9631d34d34ede4e"],["/archives/2020/11/page/2/index.html","b374a0c39452af1837e317c9dc54efa0"],["/archives/2020/11/page/3/index.html","c208aa79a1df5474b103cdc246b8d5dc"],["/archives/2020/11/page/4/index.html","bac9d6907d23484eb994d96b44eb11d5"],["/archives/2020/11/page/5/index.html","b6d3f52d55b791bb2de0226c2e43aeae"],["/archives/2020/11/page/6/index.html","3903e1a6ab18c9f02e1c37931faaee4e"],["/archives/2020/12/index.html","9e4ed861c95cefa045b0aedda9bd3f53"],["/archives/2020/12/page/2/index.html","89f43a3679668a5db0b56f0e1c0958f6"],["/archives/2020/12/page/3/index.html","25123cb53225539554d5ed7e1a8aed1e"],["/archives/2020/12/page/4/index.html","0357b765434fd2ed4b91fa0dd40819a1"],["/archives/2020/12/page/5/index.html","b766914493fccd6e55fda7718ae2588b"],["/archives/2020/12/page/6/index.html","fbb82dac8ac04812880698c118b1ad91"],["/archives/2020/12/page/7/index.html","140025cce6dbfec7c39483c023e41ebf"],["/archives/2020/12/page/8/index.html","96a9f6621d4aac3ac66a70ac4ddb3e8f"],["/archives/2020/index.html","98f113d80112bcb58b424f70ce0d71de"],["/archives/2020/page/10/index.html","703df3344e4b86d95ce5f37e9eb33fe6"],["/archives/2020/page/11/index.html","47fcb279646477de6f213615e1cedb75"],["/archives/2020/page/12/index.html","78cd2d08bbe6fdcaa0c4024edb227096"],["/archives/2020/page/13/index.html","178999d2fca72682c3cd379c8008c529"],["/archives/2020/page/14/index.html","33a47f7e2f07ad067676681e00912742"],["/archives/2020/page/2/index.html","6896d9598a00f07a34b4a8431541ad8f"],["/archives/2020/page/3/index.html","bf5951abfd3627f30bedfacd61d5b124"],["/archives/2020/page/4/index.html","a867c2883de7a23f39ec2b887d155450"],["/archives/2020/page/5/index.html","8b160388bafa45e23063ff84fbf4e7f6"],["/archives/2020/page/6/index.html","22a41e6314727622827842937c573a50"],["/archives/2020/page/7/index.html","eb49107d22eae80764efaba80ad0a251"],["/archives/2020/page/8/index.html","3349cec6eaca675114dff1ac05dd89a7"],["/archives/2020/page/9/index.html","5f67985b7324d71183994a5a0bdf7ecc"],["/archives/2021/01/index.html","e1b74c45572c2319d4307bad9b12f050"],["/archives/2021/01/page/2/index.html","2160f4a426cca7575eafcce72c108018"],["/archives/2021/01/page/3/index.html","2d0d083335f8b0e9110a6a899af90b8b"],["/archives/2021/02/index.html","4a58f6c7016d22ab1310c090ea081bf6"],["/archives/2021/03/index.html","71b49a0eb2e4bac4eda352b536515d41"],["/archives/2021/03/page/2/index.html","ba10221d73fb7fb1a679c57eef17dc41"],["/archives/2021/04/index.html","5d52c7069fa6b23efd4a3ab80eb0a54d"],["/archives/2021/05/index.html","0528e9e984cbdb0a94ae57536c13d5ed"],["/archives/2021/06/index.html","4d1d6f1327a70111616b634fe42d6efc"],["/archives/2021/07/index.html","70e029ba390c5c1aaba1bc536e56f00f"],["/archives/2021/08/index.html","0c3e38b400c93ee5f514e8ecb250c190"],["/archives/2021/09/index.html","8351dd4c406fb51494fcc4c9f972e1dd"],["/archives/2021/10/index.html","65276da457555126787376ebf49d8052"],["/archives/2021/11/index.html","bb8a0d1f3d6cbbdb0ffc4ef9545afcfd"],["/archives/2021/12/index.html","26127786a55d293eb256a1e02c2a4f7f"],["/archives/2021/index.html","b66877965fdca0532966cf39ee1c53e6"],["/archives/2021/page/10/index.html","bea040c02018a5c0b9f3965aa4e6947d"],["/archives/2021/page/11/index.html","4da3c742df42e28b3609b35a5e2e3a38"],["/archives/2021/page/2/index.html","c154687cf8524296192cfba3d5136fe2"],["/archives/2021/page/3/index.html","358a9d64b05f5a5213fd83a4b6a39713"],["/archives/2021/page/4/index.html","0bbaa37a096237c740c5763dddf13243"],["/archives/2021/page/5/index.html","63d824eded71ab37334011681bcf8ea9"],["/archives/2021/page/6/index.html","07d1f1e7ba4c1af39e54aa3bebcbd32c"],["/archives/2021/page/7/index.html","d3884d4e61b72f92082e4c442d06dce3"],["/archives/2021/page/8/index.html","91684458399be97f7f6e5a77614401b8"],["/archives/2021/page/9/index.html","f4784c5a1a8fd20578563314e2f3a2c3"],["/archives/2022/01/index.html","82616cec5a2b339b6e34eff7f2f7523a"],["/archives/2022/02/index.html","fad17a4cab3edad3317f87ed97da57c9"],["/archives/2022/04/index.html","afc68abe3e800426ea0bcb4b7fdd6e8a"],["/archives/2022/05/index.html","d1837ec82f356657cb38577abbb32261"],["/archives/2022/12/index.html","35954e488b1884ad97eb7403c37980a4"],["/archives/2022/index.html","10a8e33647d94e34e1ad58c3ce98ae9d"],["/archives/2023/01/index.html","6b05ac602a9605bb12547e7f2ac74ab8"],["/archives/2023/02/index.html","ef669a2c54c48ee62f2fd10e9b3870ae"],["/archives/2023/03/index.html","b973700a803e6ad32391c75a76a23cfb"],["/archives/2023/04/index.html","474ccd2ebe2f38db4da8f4b595fca8d6"],["/archives/2023/06/index.html","f340feff0273a39270ba9653c2b2de62"],["/archives/2023/08/index.html","087c95ad56831bc8c3408d6f53ae6cbf"],["/archives/2023/10/index.html","412cea1280e60ec758c61399bf1a9e2a"],["/archives/2023/index.html","2e33ee9389f9610a084e12ee03fa1065"],["/archives/2023/page/2/index.html","31d4e4eda15eb2afb7bac275b67142c6"],["/archives/2023/page/3/index.html","7f0db0afa8952e5012596969388f28c7"],["/archives/2024/01/index.html","084fe1c2f06969a77311cd2e240c338c"],["/archives/2024/02/index.html","7da31a5285887726adb310feb3b74ef5"],["/archives/2024/index.html","f2fe64971a6f45c4be4a20b99f569e38"],["/archives/2025/06/index.html","c58235f4ad4f03b7f6371317b1be6782"],["/archives/2025/07/index.html","1eb88b8f59c16c1bb5434739a19106b1"],["/archives/2025/08/index.html","f690436dcb7506277d810ce8ff45183c"],["/archives/2025/09/index.html","924a200abdb9c903b82699c7fe49a8fa"],["/archives/2025/10/index.html","fa5e61754a901bae252f1579f0d2882d"],["/archives/2025/11/index.html","147190a439399f08edef5f07f4ac3ff3"],["/archives/2025/11/page/2/index.html","844ca10ef9cad7653ce68c0230b2d5c9"],["/archives/2025/12/index.html","ef45b65551771ae824c36bca28cfe6f0"],["/archives/2025/index.html","7316b3a71a2ec133243b023f8909069f"],["/archives/2025/page/2/index.html","25e6dd434b5104629049e80878f52173"],["/archives/2025/page/3/index.html","d656b897e94cb2a1d153062887848ffd"],["/archives/2025/page/4/index.html","ee2a40315c41c4260c46a5f276bed1e7"],["/archives/2025/page/5/index.html","153c5e1f9e777d627e3246fb97a3aac1"],["/archives/2028/02/index.html","3b0b94a4fec45d111d50cacf54645083"],["/archives/2028/index.html","8406f9c6b4c7f848a006af04ea9c52c5"],["/archives/index.html","ad4bcc5db54820e3fd024b7c36c728d3"],["/archives/page/10/index.html","5d57b7b61e3e31546f9aa7c77e78464c"],["/archives/page/11/index.html","901430df7061dab5d40fbb47f5f35107"],["/archives/page/12/index.html","31885943e99f7c1f36346b366d3536cb"],["/archives/page/13/index.html","abfbd03689b08df17d7f84105a33a4ca"],["/archives/page/14/index.html","a71a6bb0b173eacbb5b144c87a6a2859"],["/archives/page/15/index.html","6193ab7aea960f266c769aa72f5974c9"],["/archives/page/16/index.html","d009ee4d76aa8eba9980a98d1add855f"],["/archives/page/17/index.html","648db6745be2c9c285e63122e3eabae6"],["/archives/page/18/index.html","dddedda41b096efbae30c98cd5f2fd26"],["/archives/page/19/index.html","a0c31738c12631929db1a4e426c30b0f"],["/archives/page/2/index.html","39e5b2c8ba9a25455316ea0bf319d36f"],["/archives/page/20/index.html","edf961a82d9b3649d36bc3684e2a00dd"],["/archives/page/21/index.html","487b743c4118a2bffa712dfd829799c1"],["/archives/page/22/index.html","d97040dc60c4cc22e1d7790707e0a97d"],["/archives/page/23/index.html","a23d1fe08a1432326b9990932bae44d0"],["/archives/page/24/index.html","caea39c4c3d41816e8200fb23d442899"],["/archives/page/25/index.html","5eaeb6d499b4788d892fb3a634264848"],["/archives/page/26/index.html","d5d38a0b6c3c6eb1152e87535c4327b0"],["/archives/page/27/index.html","9c9a855694151bcbff0f44fb7316416f"],["/archives/page/28/index.html","fc063a2b00d7b6fa9493c5c1b692792c"],["/archives/page/29/index.html","7ef182745ad274bbc8bc4e5ebfd7d770"],["/archives/page/3/index.html","86e10f37ebc42e5eefdad0d221e6125c"],["/archives/page/30/index.html","e580465aa2e9283da201a8a40a065ee5"],["/archives/page/31/index.html","ce69bf15c3967a4beb5c75fdda95d2f9"],["/archives/page/32/index.html","48285acb3873c543c6f8c1086d6d9c24"],["/archives/page/4/index.html","3c8abd0180e2aac3df704a511fb1950d"],["/archives/page/5/index.html","0f3cecdb0e43c0e0aa612e2bf7ecfc45"],["/archives/page/6/index.html","d3af1136a2c6ffe9578dc7ef25712a7b"],["/archives/page/7/index.html","b4ef212f8155fdddafa1ee003990a07a"],["/archives/page/8/index.html","866f5207bc691140e2130507ce946672"],["/archives/page/9/index.html","5137b644369b16617212db53a0177219"],["/baidu-search/index.html","356ef76e72272146f7568787859556b8"],["/baidu_verify_code-Hh2fKNlEB1.html","a93f335c8032e0bd4f42351a3bc71da4"],["/be-a-programmer-instead-of-a-code-farmer/index.html","d6d1caee39dd1462771da3b468980de4"],["/bought-a-house/index.html","5e0966c108dd486cfe25d48d4bae43ba"],["/categories/C与C✙✙/index.html","808875af98a5ad0450d2d931b5351231"],["/categories/Go语言/index.html","2dc60e81ee22e0e3fd9f3b25ea523f44"],["/categories/ITK与VTK/index.html","d3ef1f4e1228ad67bb02e614e6dd14fe"],["/categories/Java/index.html","e9deaf37de83508d0d61d82339eeb054"],["/categories/Java/page/2/index.html","e02d888dca080edffbd4e33c855572c8"],["/categories/Java/page/3/index.html","12e8b63325d179825d517a3059d6de73"],["/categories/Linux/index.html","a75738684b0d2c90bd00e894beedea54"],["/categories/PLC/index.html","94c181d9e7ec72c9d66df352c01007c8"],["/categories/Python/index.html","1be95a8971ed6e22cf6b92a5386bacfe"],["/categories/SEO教程/index.html","0df98f228ae6a60a06aa4b0a99d63345"],["/categories/index.html","4ef1071aa5f394ea127fd9ae386b375f"],["/categories/图像处理与机器学习/index.html","a3d767c85c1907611644ed3ec923f04a"],["/categories/图像处理与机器学习/page/2/index.html","30d344d0f1217cacf9c2cd2539e7cf02"],["/categories/图像处理与机器学习/page/3/index.html","9d674613cbda00f1e539341c4dee1497"],["/categories/图像处理与机器学习/page/4/index.html","0fe3393efa822d4a697f471a7194d47f"],["/categories/图像处理与机器学习/page/5/index.html","70c197249290b7c6d04155f7eb1d4f70"],["/categories/图像处理与机器学习/page/6/index.html","466ca663c1a6da3de9ab5e88a6a2a92a"],["/categories/工具/index.html","6461fbd1f23e9a6cbca8b43a49c5fd8e"],["/categories/工具/page/2/index.html","a8c2ec45cefbbf9eabb36b8136d02aed"],["/categories/技术以外/index.html","0a7af03153ff063154de909a9afb0b45"],["/categories/技术以外/page/2/index.html","00645fa40304f5421538fc781338e05a"],["/categories/技术以外/page/3/index.html","fa9e134a3f32651a5f2eb277c257272c"],["/categories/技术以外/page/4/index.html","687266a6a4cf01e8cca130c3c2a98f81"],["/categories/技术以外/page/5/index.html","e94dfbed7b26eb38a410b20aec5e1a92"],["/categories/技术以外/page/6/index.html","b3f57022f179f15cb0a8b1f0d31d89ff"],["/categories/技术以外/page/7/index.html","218738255c13bfa580e18d9eba475227"],["/categories/技术以外/page/8/index.html","49fdd59b2f29060b867f16837193177b"],["/categories/技术以外/page/9/index.html","1fdc1c018b3b965f37215cb6194284c1"],["/categories/数据结构与算法/index.html","6896e0a915e92ac64b97f289462a57b2"],["/categories/数据结构与算法/page/2/index.html","121354cc77d7281ab025e13c1c4a8e41"],["/categories/科学上网/index.html","d1c75ce4f0e75a070da6f1a09e59555a"],["/categories/科学上网/page/2/index.html","00fb436c3ef37ea6d0a3290aa1cd58c4"],["/categories/科学上网/page/3/index.html","190628f6d3401d4357d6b17b8113fb3c"],["/categories/科学上网/page/4/index.html","d101409ddca1e3cf335ffcf6616d66b3"],["/categories/编程经验/index.html","161d88cf2c092c9a5572ebbbd3927970"],["/categories/编程资料/index.html","231bed7b80dc7a6c22ae27d2dd3b2e15"],["/categories/编程资料/page/2/index.html","569651fa12416615b56733ee468b4411"],["/categories/编程资料/page/3/index.html","0a6797408020c7709e742ce11a469224"],["/categories/编程资料/page/4/index.html","01a95ad7a0202603db6e77da2e162cbe"],["/categories/计算机基础知识/index.html","e8bdea14e5d85deafc877ce2640c0672"],["/categories/计算机基础知识/page/2/index.html","83f623092c32cb4e5edcd9e0d23895c4"],["/categories/设计模式/index.html","b693ae7291c7c9cd32b855f3da473b81"],["/choose/index.html","02e2b75459715aa254e64860493dc05a"],["/choose2/index.html","1c83862f0573a4a510728c5cc198bd64"],["/chrome-crx-intruduce/index.html","49deb4aaa3c16510928cb29a040bdd1c"],["/clashvpn/index.html","0933fd1b77aee2fab077be8464dea4d7"],["/coder-blog-website/index.html","3d0ed50c097cd9ba71057da5e1dfc2a8"],["/coder-source/index.html","d086406346f841e3b00643c660f537f7"],["/coder-videos-website/index.html","da3d2768b9c6bc0e728e683f9305ef29"],["/computer-book/index.html","bc5ed02607a2a1b8d5c4ff9ea24b1e68"],["/computer-censorship/index.html","793be4a926b4b6434176778a8c4f39d1"],["/computer-network01/index.html","db344a41cbb5d8f4a1e6e4199c801fe2"],["/computer-network02/index.html","f5ea1a476688ab64a23c0b0b2abeabc8"],["/css/main.css","bc32ad34ec4990d934c3c647bdb62f79"],["/database-Mysql/index.html","e25798a1336888f119359d62a6af8668"],["/eclipse-lombok/index.html","d391e95f5df327917d24c08f64830098"],["/fully-convolutional-networks-for-semantic-segmentation/index.html","b770de89757297687d7aa9bf87481282"],["/great-firewall/index.html","e96b0ef705b62dad85e6e7795be6d2a5"],["/halfrost/index.html","d2efe1320744803620bff247c55a9a2d"],["/how-to-signup-chatgpt/index.html","3472ebeccb4bf6e02a7082af5d8fab5a"],["/how-to-use-Gemini/index.html","058c427ec982e909383879e8046e058d"],["/index.html","c136a8639c74045bb2a020a228f9e58c"],["/ios-open-internet/index.html","2429a5999bdd5682ad1686790ac181b3"],["/iphone-open-internet/index.html","32d032a54711b1fd85931f310dbba463"],["/itext-makes-pdf-form/index.html","d28b956144611e9aac7a70c9b4560790"],["/java-Set-Map/index.html","d306f53f492d52abc891cbaf4eb1309c"],["/javaweb-server-error-codes/index.html","07b521aa9645b79ad2e738ccfb983f7a"],["/javaweb-source-code/index.html","2ef95ccc3a9a9517c9f340105bb7ceaf"],["/js/lib/busuanzi.min.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/js/lib/lozad.min.js","47904d34a224931dd1b615c59a3dbe3b"],["/js/lib/prism/prism-coy.min.css","0ccad54d95845901ead59bfd3ecceb14"],["/js/lib/prism/prism-dark.min.css","a4711d2957d6605eb5682bdd228cf123"],["/js/lib/prism/prism-funky.min.css","efedcdccd7a9ab342d2d9cacd24920af"],["/js/lib/prism/prism-line-numbers.min.css","38e22e790c279bb56f9ec4b90a2a2d58"],["/js/lib/prism/prism-okaidia.min.css","5ac6f9de996fbec68aaa106dfb16e061"],["/js/lib/prism/prism-solarizedlight.min.css","ecc7e64d039873ffcf7fb27babdaeb5a"],["/js/lib/prism/prism-tomorrow.min.css","456af2a14ae4f5089939d5904ac40fe8"],["/js/lib/prism/prism-twilight.min.css","ebb5c355332a8cf9a1ce37a2a69d678f"],["/js/lib/prism/prism.min.css","a5234d614834658887cec6a9515890f8"],["/js/main.js","052d2b299d9c750afea8df0b802ab7c1"],["/keras+TensorBoard/index.html","7718d969f5028c7652f23c449cbef1f4"],["/keras-beginner-guide/index.html","69a9f09f63cb3232b2c48bffd322704c"],["/kmp-algorithms/index.html","bc9d7e77488be4132c9353da1072963f"],["/leetcode-Java/index.html","5e97836dbe3d6ab46d3d5b9d78051c1b"],["/links/index.html","70af1a0fc4b3673d49756c9861cc7d8d"],["/linux-java-opencv/index.html","c32b2c7087f271c756c4f2ddf104c277"],["/msb-source/index.html","3c8fbc63017c39de785d5b540ef907ef"],["/online-BUG！/index.html","135b27ee405f3fff6a60c3ed13befeba"],["/open-app/index.html","eb9c55ee98745f4770438bab609ff79f"],["/page/10/index.html","18fc1f57fa90591818673293ed26add4"],["/page/11/index.html","613b19a12863f869679acbb78751a36c"],["/page/12/index.html","0de89025b4081df1603059324515dbdc"],["/page/13/index.html","487626b47e74f2e6735d41f0966a8e4d"],["/page/14/index.html","d8adb279b9d46fd898e4c18c921933fd"],["/page/15/index.html","383564b1ff75f193054416f5d6778898"],["/page/16/index.html","96ab74990e884f01908eba65de933003"],["/page/17/index.html","33ea52fa5471bf7b7372fadd842a0335"],["/page/18/index.html","27b2ea1736c0bfb01425bd5ad34e765b"],["/page/19/index.html","19d0d5db8a18dd45ae56ae32f16b1296"],["/page/2/index.html","c6641dd9015cb2d536d76c9dda2bac57"],["/page/20/index.html","f99c24e0f354684a7055d03ff7ed5d14"],["/page/21/index.html","6e1f13d14079ce49ec043ffa709d15ad"],["/page/22/index.html","52f836e446d099290582bde320950e8a"],["/page/23/index.html","0b68d4c1af1ff0384bbeeab3e919c656"],["/page/24/index.html","e9048b745d54d7988f2dc725982dbda4"],["/page/25/index.html","7ba942c1cba327b5765aad40708a93d3"],["/page/26/index.html","d1b0520487251e354627a3c277dbdd81"],["/page/27/index.html","da538c36f2fb0ecdd3eebb47641b168a"],["/page/28/index.html","d1344cbf5d34de92785201d811ec53b6"],["/page/29/index.html","0814ab2886bce0781ecfda4ca016c985"],["/page/3/index.html","a84bb96f1c4891418a98490104edc560"],["/page/30/index.html","5b1d022803f7083a00965368cc4d92b0"],["/page/31/index.html","5305d46515c0c08d540d129e0740a3da"],["/page/32/index.html","91c500cc49d7c9620376a12e7e708ba8"],["/page/4/index.html","f36f219bb2b325e489a0a34114a99e18"],["/page/5/index.html","29f00edb2f51210b8eeaa0b216d81c3c"],["/page/6/index.html","392d4575ae635295c602a24f6ab09fef"],["/page/7/index.html","2014567620b8f603103bd29bd9da198c"],["/page/8/index.html","d65f6e8b4fc90561bab10e23733462ad"],["/page/9/index.html","dcbe5b368289f832d1a5e71a70a75784"],["/pandas-data-preprocessing/index.html","ffd45f1a4ca0e57298b72f8506f515d4"],["/phone-win-open-Internet/index.html","2ff4717e3792eee022855d98c0917975"],["/popcorn/index.html","639b9467d27a7885f44da9028d45e6c0"],["/python-Blog/index.html","bf2326b2b168585d684ef8af8f71d616"],["/python-yeild/index.html","ec8bcda58253e6cc37030e2e1e938520"],["/python爬虫教程/index.html","efd18553ad52dfced8b52ea38cd2ad90"],["/software-copyright/index.html","d4ca3a97f9a0c6844d9d5d7d4337b934"],["/sw-register.js","d04ef0eba64b312df2497dfa8ac5fb1d"],["/tags/AI/index.html","a42977791a585880b2b76b1279fa3600"],["/tags/API/index.html","74b13868231c7d29f3530edb80c3f1d0"],["/tags/C-图书/index.html","0bfc747d17e2061ae550b3a803f39a57"],["/tags/C/index.html","6def6a2b745ab8c700f5a19f5490d7ec"],["/tags/CNN/index.html","f1d7b5826bbe01c7edd191f182551e37"],["/tags/Chrome/index.html","5498cf625520b091f26f83f870732144"],["/tags/C✙✙/index.html","abfe2fab3b46a70bedf2b1cb69635011"],["/tags/C语言/index.html","31d061ce238e3b43462eca1d79b02893"],["/tags/C语言图书/index.html","48798293a5ddbfbf91eda9197cf0051b"],["/tags/DSN/index.html","18d475a7e9ae9a8a57f83c573b9759f5"],["/tags/Dll/index.html","35f023a98a9fcaee396e8e45a3053f30"],["/tags/ECCV/index.html","6330c8b9a0ae28c2a0eb236c79d60b17"],["/tags/EM算法/index.html","fe47c30e3c117586f08ea9b8b16dbeb2"],["/tags/Eolink/index.html","1ca2a0e37ddaedb67674ed7ee871c315"],["/tags/Gitee/index.html","5457c1ac936fcdbdfa2bb78a41df1673"],["/tags/Go语言/index.html","7629c65c7e1a94f4dddebdd7b85d2fba"],["/tags/Graph/index.html","fda472f59e7c7e84867271232ad96d8a"],["/tags/HTTPS/index.html","a2d4fc12e0c8e9dfef045f0cc327927b"],["/tags/ITK/index.html","f641b7484df5aa3c66ab0738dbb9caef"],["/tags/ItkVtkGlue/index.html","bcac4318bfc43546091b82a039454289"],["/tags/JMM/index.html","1e889af8f3efb96b3b0c33c8ec4b9083"],["/tags/JVM/index.html","0b632b0837299c7a6a65c0baaaa43593"],["/tags/Java/index.html","c71cc29a2ee5e3deb0bcfc5fe23d4977"],["/tags/Java/page/2/index.html","2b47e5d84e985d0488c40f6d92d5f428"],["/tags/Java/page/3/index.html","6c046643924fb844757f5bf87bd3e430"],["/tags/Java图书/index.html","6077b6402420a606c5ed7fa2b15d6aa1"],["/tags/Kaggle/index.html","89b5e8c4f80334f52efd0b74863e4e5c"],["/tags/Keras/index.html","acb5ee6f2ae4c7d1a12b20d3af529138"],["/tags/Linux/index.html","691c86bd6a82db1d838432d7ecec2dce"],["/tags/Linux图书/index.html","3b48d2374769f72105c963d702463289"],["/tags/MEPP/index.html","f9a10a72823e21beaaea4af6ddf5fec3"],["/tags/Map/index.html","6fde84d47dd4bb2ccfc40f94b8f578be"],["/tags/Matlab/index.html","1bdae65ccbabf06d525117c84cc0d7c4"],["/tags/MongoDB/index.html","5924cee8c39f6905273be1cfee70c373"],["/tags/MySQL/index.html","7fd77ea4c270cdd4e15eae83012778ae"],["/tags/Parzen窗/index.html","9e0573a9b2a535a9b207f2212d0de8a5"],["/tags/PicGo/index.html","bf846bc0ce427e6b035965906daff596"],["/tags/Python/index.html","2aa69a534da1d72ed85d850dbe07be9f"],["/tags/Python图书/index.html","e1aa8c03ce344363d0acdd36519fbfb8"],["/tags/SPHARM-PDM/index.html","6a0cfd0b1da38a3dad991303e081cec0"],["/tags/SVM/index.html","1df74bff514a6345ea93a8fddcbb6590"],["/tags/Seata/index.html","c6b404f9dfe0996b8ead0a4722e8666c"],["/tags/Servlet/index.html","b2a697e61c7531b260fe175f25db29b5"],["/tags/Sping/index.html","c9b75a620b0f05287e7c5101f7d29b29"],["/tags/Struts/index.html","6bc4aa9a16704a260007e7eac409fb68"],["/tags/TCP-IP/index.html","0dafe51211d6ae20d49b77a1a3d059ce"],["/tags/Ubuntu/index.html","6d0f028a42cf395554e27bba70d7579f"],["/tags/Unet/index.html","9b9e31b1e7a5a94bd34657716fc4ae51"],["/tags/VS/index.html","84fa1a28f39fdf9f2182bde4364c74bf"],["/tags/VTK/index.html","64067152dcfb7e6e653a6219cc17368e"],["/tags/Windows/index.html","b4b56e7c37a5d1aaca538d0086b53069"],["/tags/edit/index.html","0fbeb7c3763200f96990ba50dc064712"],["/tags/hibernate/index.html","a2f238325ffc1b8a2c43a7d36c7f54ac"],["/tags/index.html","56b6f9062892774e0367a52f61289d35"],["/tags/itext/index.html","40bfd21ecd94c707c8c4590cd6c4f8bd"],["/tags/jdk/index.html","a955dbb5f9fb106548712f80d66e046c"],["/tags/kmp/index.html","da7854068cdaf935f056a331aed23656"],["/tags/k最近邻估计/index.html","35d67f4705bef37c8add10e6420b169f"],["/tags/lombok/index.html","f3640c99b5072d61d7154fa72ed926ac"],["/tags/offer/index.html","218a248a89c967b7b4e7c2b1972dd9e3"],["/tags/opencv/index.html","04de4a2b0bc619104f0964261366e96c"],["/tags/pandas/index.html","628c1349b3dad4b549fff76c4e6f9b37"],["/tags/string/index.html","6d60de7733fe7b660f21d8b88378b4f6"],["/tags/vim/index.html","ae5e50a38f0e204403e883555b35cb7b"],["/tags/vtkPolyData/index.html","52552238c5ebf5b3beac1b7e5a00fd06"],["/tags/web/index.html","2b2757eff5a60a1fbab8e11b8ef02f59"],["/tags/xshell/index.html","cf511731b8aa9e273b9810c2f593f332"],["/tags/yeild/index.html","43e4c80b0638581287a9dbf009edab11"],["/tags/互联网/index.html","d15595b4d022281eb3606330ce3db558"],["/tags/人工智能/index.html","ce7a4dbe1eccb826cff7734e980d7223"],["/tags/体绘制/index.html","8bef4bb953d838a1af1f1b03fb36621a"],["/tags/全卷积网络/index.html","087d0641db8cc185a9c1c31512c9f163"],["/tags/公众号/index.html","0522be5c60da774060de93cd46c781ba"],["/tags/内存模型/index.html","59f58cdff903a0b0f359ec58c8572213"],["/tags/内推/index.html","206cb20e6c74e169feff8b0763d32d11"],["/tags/函数/index.html","0f9c5a93ee6b23909a7655014d717591"],["/tags/分布式/index.html","33235fefec297b2655b797bcd795a5df"],["/tags/加密/index.html","feb443769339ddfdcf2d994b3046d588"],["/tags/医疗图像/index.html","545979d59baa17cbc31f62b9485e0c56"],["/tags/博客/index.html","67173c801be1b7f020fc90fe40b66700"],["/tags/图像数据/index.html","717e2dcbb22a7418c5a9c8c60489050a"],["/tags/图谱分割/index.html","71c79a40eea9da790e9a57d44a30656b"],["/tags/垃圾回收/index.html","6e7bf442c8fb9ca57c7143760b3db6d0"],["/tags/多线程/index.html","6fdd8ac1d5b2985d6589e6aa7a8bb076"],["/tags/字符串/index.html","401d66856a6a9b38f34a252d8a1141f9"],["/tags/工具/index.html","4694ff13fa2ea4816123073dc6927671"],["/tags/工具/page/2/index.html","6686db9c4aabf790ab9576d4d93dc65d"],["/tags/弹性形变/index.html","bb904141fe656829f12c571e6ff7da2b"],["/tags/排序/index.html","a1785cf2893c68afb6b79f460e0ef898"],["/tags/搜狗/index.html","1378276a68fb81d8457ad3863d35077d"],["/tags/操作系统/index.html","1d4e78e8a1c38e40f360b03948185b38"],["/tags/数据库/index.html","d49d7e428a7152e264956c6f5a5c3201"],["/tags/数据类型/index.html","54eeeaed9de5c7f56dcde4d1672781a1"],["/tags/数据结构/index.html","cdbbe6758ebf17c9e81a59fc16636a55"],["/tags/最大似然/index.html","53cd378128d271b2f5d447dd86dddf04"],["/tags/机器学习/index.html","eae089fe4dec9bdef18bd7edb0ff203f"],["/tags/机器学习/page/2/index.html","98927875e4d42ebdbb0ed8c89ab356ff"],["/tags/机器学习/page/3/index.html","e013884ff02004bab31f8cd571aa32ad"],["/tags/机器学习/page/4/index.html","02b1594262e3b9ff2a25d0e6c5590310"],["/tags/机器学习/page/5/index.html","744739c7cd6aa5743d7c13c211d13334"],["/tags/树/index.html","ba79ff1001c91e5fe19ca3fdd8b0ad3c"],["/tags/框架/index.html","55796a1c0250f672a241ee7105562d78"],["/tags/求职/index.html","73048cafd860a4e44376e83b67ae66aa"],["/tags/汇编语言/index.html","abddf71e5c7e1b053950ced95ba3de95"],["/tags/深度学习/index.html","b32926ed996110e97c69f6f3bda6092f"],["/tags/深度学习/page/2/index.html","e6611e7e27d78c19fee66e91e26eb4f8"],["/tags/深度学习/page/3/index.html","6b5d2fb2402ebfb2e16cd63a1c202b9c"],["/tags/深度监督网络/index.html","8749659be46ba404f15adbfbc91d7e13"],["/tags/爬虫/index.html","e407b86c563f3d21468583583aec8c02"],["/tags/电子书下载/index.html","613a0f92a00e9035b3bfa56c8bed9b45"],["/tags/电子书下载/page/2/index.html","c53634d160ac2efd5174820a0cb078b1"],["/tags/程序员/index.html","f9cfc5ecc3905e4eca23849e39851de4"],["/tags/程序员面试/index.html","78c1f2e76992c517b75084df98529fde"],["/tags/简历/index.html","8221f3d1f1dc4af004ceb733f0d9e4e3"],["/tags/算法/index.html","8cda9ff5a105c106ada5fa883cb68f16"],["/tags/算法/page/2/index.html","7ecd5a9f80bc3628747b853ed427af67"],["/tags/算法/page/3/index.html","00a158dc479b95efaa2d6435be9dcb59"],["/tags/线程/index.html","a9ae6a705763c322ec6eb5ba8869ba7b"],["/tags/结构学习/index.html","47e849e59c6352e3cce9b17e10fb6d9b"],["/tags/编程/index.html","a6774d6d532130fa3ee31cba7a3d2604"],["/tags/网站/index.html","c33b60d712d8f3ce41e565da63ffeb07"],["/tags/网站/page/2/index.html","55ba341d68f3f51af806fbfdf096fa2a"],["/tags/网络/index.html","3737429f2c09656b2f6b47196c4b8fa4"],["/tags/网络原理/index.html","af63bed73384f3f5a064964243a857ab"],["/tags/肝脏分割/index.html","d298fbfd4f04e7bf3f3fb701963f9302"],["/tags/计算机/index.html","9d361155725901599ebe5f503136b4bf"],["/tags/计算机专业/index.html","bfa3a98384de60b76236913d5b4352fc"],["/tags/计算机网络/index.html","01e3a8db3d479415970aef3b090de24c"],["/tags/设计模式/index.html","f333b7914cfad6407cfab2442fc8a29f"],["/tags/贝叶斯/index.html","6dcf1e392b24fc162950d1cbcc10c0ae"],["/tags/迁移学习/index.html","65371bec618db6445e49bcc5ee784464"],["/tags/面试/index.html","d04a11cb06ec34520c784dd15f155d57"],["/the-way-of-pragram/index.html","4392ad2608deab12e11f16ffd32d82eb"],["/untiypro XL安装/index.html","90d6c33056e65215a80b491a5f201afd"],["/video-websites/index.html","71011f34954f6214ef1dd0aaeca17a65"],["/wechat-fans/index.html","3d9efc8030f130a1d1a14603de7e656b"],["/window-run-VTK/index.html","d6f3601ad546878f7f147d442a8ed758"],["/xshell-connect-Linux/index.html","d49fa610d423aa1f64a82be399584a95"],["/‌Accessing-the-Open-Internet/index.html","58320ff9085580b9a9d67f1163456ddf"],["/《Java高并发编程详解》，去大厂必看！/index.html","e2431d807353e2a4caa165f8910c55ab"],["/一分钟没了 1.5W 。。。/index.html","88fe4e4566742f915d442c9b28a9d6ed"],["/一条高产爆款内容生产线/index.html","b626006b088bf4f519ba218f9d797eb3"],["/为高考学子推荐的六个就业前景广阔的专业/index.html","4c9eb0eab8838415b409da89e16cc00e"],["/互联网赚钱机器---社群/index.html","6daea422352da9b270157fc4e5800047"],["/你们常用的工作方法和思考方式是什么？/index.html","6ed33a601e126c441eebc0c9bd3e979b"],["/关于环境配置的一些事/index.html","f47c3f67e466992eaef64e74c4fd9e59"],["/准备了19w！搞事/index.html","9f8b866d074455393f3d7312905a94f8"],["/几个很重要的感悟/index.html","60704113f8e76c6467336d0323161f82"],["/分割ROI篇/index.html","cf54b366f7e106a014ef69dfbd6bfbb3"],["/分割精度说明/index.html","56c260412d3498c0cd7f01bd16edc1ac"],["/分块程序执行/index.html","f354a0328c745c900ccb10bd89010900"],["/加班公司黑名单！！！/index.html","f4120e8b9893e187c5cc3b851a49762b"],["/卧槽，上知乎热搜了！/index.html","77273249e66aaacf7aca0da24e6f2a7e"],["/卧槽，我的小破站爆了！/index.html","4d989c320194805cdf2215f71855ba40"],["/卧槽，我被盗版了/index.html","b5543d3dcf3857ff50d361eb21631d4a"],["/卧槽，还有985大学在大一上C语言课？？/index.html","983aa26a351e96cf58a354b2ef635f82"],["/历年微软面试中出现的leetcode算法题/index.html","3f4f21caa77fabc3af4f459870526fe8"],["/去特斯拉试车了/index.html","965b7cdadc852015de1dc3f20f316868"],["/吃苦的三种境界/index.html","8bee3b3e5c6dfbbe659f65dcd22a0443"],["/哪本书适合推荐给 Java 初学者？/index.html","569c2a4c8f1f6244e463393273df07bc"],["/哪本入门级的学习数据库的书最值得推荐？/index.html","b404e0db4345856a4d5f7394745e8f0b"],["/国内外常用的AIGC模型/index.html","9a28f92931665af4aad1305d5d89732a"],["/国庆假期/index.html","11f472dc5ac5c99e4ca9ffe708c124fe"],["/图谱程序字典/index.html","26cb70cb4fbdddb6f044c1a78182458a"],["/图谱训练与分割/index.html","d6510748d816135f614a75348b7ceccc"],["/宣布一件大事/index.html","5542c91081810dfe86fa64ab1dce59ef"],["/小鹏P7i试驾体验/index.html","9524cf8361e71293745d491ea6e6f796"],["/微信PC版3.3.0内测更新，电脑可以刷朋友圈了/index.html","07dba1b8eda4adcd3e4f494982285c52"],["/怎么更快的赚钱？/index.html","f29f0da1d91e02a68ee056899b1eec0e"],["/我毕业了/index.html","151c97abbdafae5e042f4aaa5453f894"],["/我！真！的！找到了！爱上学习！的方法！/index.html","299d95c90b833dcfc37646addab5bb6e"],["/户口的意义/index.html","a685965feb106dc70e0bd30c0f550c56"],["/推荐两本经典算法书/index.html","63e80900ddd2d87620a3718483823707"],["/推荐几个在线学习SQL的网站！/index.html","212cb650feef08cc1a15629151cb1c5d"],["/搞了一个程序员成长晋级社群！/index.html","f62a7fc3c4e621c8f5f0dec81833e26e"],["/摘抄/index.html","8c372c5c59bc21ec3061b426906c9503"],["/暴跌30心态崩了/index.html","6598114fbecea8f666a32bfb745327a2"],["/最近很火的ChatGPT到底该怎么玩？/index.html","7af076f2a48c8b689f322098c39253fa"],["/有哪些好看的日历可以买？/index.html","bb63e77b1b060831a44f5e8b7b9f6a4c"],["/服务器有啥用/index.html","20180af489c175eca0802facdfae4e49"],["/来长沙了！/index.html","dd5740d4921031e7d2e2796d5b886627"],["/校招污点公司名单/index.html","f26491fd55b73f122bd35dcc1c81a382"],["/梭哈200多万/index.html","953f21eb024a4366e860c20f98a3528c"],["/梯形图入门/index.html","8b5e8d4b7472bc8edcd586a7d0db9889"],["/橙心优选，凉凉了！/index.html","f959ffc7fcef574d428092b7075ba654"],["/比亚迪汉试驾体验/index.html","9beb65f50a63d4916dc9fb3f4dce502a"],["/清华转学成电，真的牛逼！/index.html","7fd27be9f12203b5af52d09c0cda81cb"],["/滴滴程序员被亲戚鄙视：年薪八十万还不如二本教书的/index.html","d8296059b77438ae6e4bbe1ff3dc4e1a"],["/社群！/index.html","7a615b8bff1c3397ae7cf8ef37fb1ac7"],["/科学上网之VPN篇/index.html","9c6039a391d32675d1e5bbf978033648"],["/程序员必备的几个技能！看完你也是大神/index.html","f59212232db90b71733e1fcc50cb6d9f"],["/程序员绕不去的槛，Linux！！！/index.html","6f49ac70460e6f72225c11fca507f52f"],["/蔚来ET5试驾体验/index.html","01c2f2e1abbc83af0d5cb4d5dbd82f99"],["/蔚来，牛逼！/index.html","f2b61b565db20c9bf2bbb668a9b8366b"],["/被录取了/index.html","62450c8ad997402d5577e34aba5ea3da"],["/被找事了！/index.html","b1469604e94fc3ba5aa5135d8717d7b2"],["/被拉黑了。。。/index.html","346172c043617e5cc3ab5ecc28dc2577"],["/被车撞了！/index.html","803f0e35dbfea2c1dbc0a198120efd16"],["/该如何选购固态硬盘？/index.html","6dcac74cb6726c19316b3762077e8921"],["/这本书一定要看！/index.html","d26301686a2fca912e5e7e9475e6bd93"],["/选Java还是C++？/index.html","666738728a7acca3c2781b892fee59cf"],["/那些让你起飞的计算机基础知识/index.html","512d4e186dc34df98382dce76408ed3c"],["/靠这几本算法书，成功拿下大厂offer！/index.html","cf96021e764723759c0177f71ff67935"]];
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
