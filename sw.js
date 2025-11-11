/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/0010-city/index.html","2a12d3369c0f6a7ae8c0a5de9cbab56a"],["/10-algorithm-book/index.html","30c19928bb64350de0f7741cabc0ffb9"],["/10-website/index.html","54c1692e4f7efe5af89dac6bda6d5893"],["/100万的小目标/index.html","8fa66e3ddf81864e0af8c7b1473d8d4c"],["/10w+YYDS！/index.html","0bb2b1286fc3c2e4302aa0558df5d93e"],["/12-technical-tutorial-sites/index.html","151bf885ed180fb5288b83d4f2ea22d3"],["/2 6 岁 了/index.html","2e606e85ea33c838cafb8cd3c6b7cf47"],["/200万，啪，没了。。。。/index.html","5febb76447aaf05eb75175ef23408f4b"],["/2018ECCV-Paper-DL/index.html","444ae9d216187d41bd5a3f818cf3f372"],["/2021年固态硬盘选购最新攻略（小白避坑指南）/index.html","b42d7c828cf045fec5cd7d7054da02b5"],["/2021机械键盘推荐/index.html","1228fb730b7de004afa90a4c237bdf16"],["/2025-07-15/index.html","b7e425507fe1d8321fbc4522184c1117"],["/27岁了/index.html","f264deed1166d768fe1809dd2e2d5e48"],["/3D-Convolutional-Neural-Networks-for-Human-Action-Recognition/index.html","34a5626e435cbd9212f43e926bc950f8"],["/3D-Deeply-Supervised-Network-for-Automatic-Liver-Segmentation-from-CT-Volumes/index.html","23487db8105a999872cb61299f9938af"],["/3D-Unet-Experiment-notes/index.html","b5a739bcd755ef93573f4c06c3d82e8e"],["/4-Software/index.html","10f87427088216f4a415a8a9ce54bc29"],["/6-website/index.html","5b65f27a14fdfd1b6c6d14811bb61905"],["/7-terminal-tools/index.html","4579025fd4b7007ecd2332e1b6a84eea"],["/AIGC中典型的深度学习网络/index.html","6ff6d7ee97ba78a2792d6677c569dbb5"],["/Agency-model/index.html","9b9666f957f114ed6d33bf010cb093bb"],["/Algorithm-brush-notes/index.html","dcf4a36915dff980d5e95b6f862967c4"],["/Ali-recruits/index.html","df9300b00b841e2dad6e547a5e241619"],["/Android-open-internet/index.html","6e835199c3bf458c383223675eeb2e9e"],["/Appearance-mode/index.html","ed5f8dd9f45b2abfc3cce684f2b22d8a"],["/Backtracking/index.html","7f0ab77a0835376e160d8e1c7dbf0b7d"],["/Baidu-Sao-operation/index.html","796772be68d6ed4c0b5fb41ef9acf5b0"],["/Batch-Normalization/index.html","bd1c994f2d0e56ddc64a7129fc6ae3fa"],["/Best-AI-tools/index.html","fe9418ee353ff3cdcbde54073348af6b"],["/Bias-and-Variance/index.html","39fa2eb5c5f84d760936edc9f988a88f"],["/Binary-tree-traversal/index.html","31daa28c912fd400fae142e9e98eaf14"],["/Branch-and-bound/index.html","b7c8bbdb6079b093dfb5ea1f7d64aee6"],["/Buying-computer-for-the-first-time/index.html","250d81c302f917ab1ad6e510f8c6697c"],["/B站向北邮道歉！/index.html","cc073f04e3214053d563db8bb18db5cc"],["/C++-string-function/index.html","9d8709b201ea3b162800fe7acf538330"],["/C-Java-DevelopTools/index.html","16586bb146dac52440f6223f3682e791"],["/CS-Classic-Books/index.html","25a22dfcad4e1a2dbfd00b37ddd1dddb"],["/CS-network/index.html","f64311ead95d24f9c2031c626e24ce7b"],["/CSBook001/index.html","4db03cc3f337c9d93b4a9755c86df5cf"],["/CSBook002/index.html","4891ae05c417c8732afaa903896e85e0"],["/CSBook003/index.html","2ea303aa08b1c60dc63e98ea04cd425c"],["/CSBook004/index.html","b822cbe83ba81c26f08f6ab5ebe478c2"],["/CSBook005/index.html","dc691eba9fb613f32ea319ab89124bc9"],["/CSBook006/index.html","7ff376bd389809ee3e47849ef1d139f2"],["/CSBook007/index.html","928fcf831edb53e2732df1edc92ebed3"],["/CSBook008/index.html","77f78e87cbe086a5c0de2d331a5f7d9b"],["/CSBook009/index.html","61be905a35be353997ea9ce3d89eb891"],["/CSBook010/index.html","a8202d3ea2fc654ceca5dc81f78c49b9"],["/CSBook011/index.html","ddc0d2c6f78251ae53db507e5d4dfa17"],["/CSBook012/index.html","447126b30923e0cd891be8cfd781b36e"],["/Changsha-really-fragrant/index.html","dc7d59294a7d7e81487e835da8e9f8e9"],["/ChatGPT-VPN/index.html","2654417cb8d321a98a53e9ce2b116f5c"],["/ChatGPT/index.html","6ecd34450eab7d0284a5b60509576360"],["/ChatGPT！王炸级更新！！！/index.html","9f49a594b62e7835d7eeb3cddf9287b0"],["/Chrome-crx/index.html","f4ecda725aa6d1b44ee589415197c8cc"],["/Computer-Classic-Books/index.html","0c2c1e76ccc92dc4a9e37c88fcf4f216"],["/Computer-for-another-major/index.html","3d81ec394283ea360789c2bcdc64acce"],["/Conditional-confrontation-network/index.html","dbba9270dcd255d6096b5129a867dddb"],["/DNN/index.html","0f6802ac3b8e50281ae2142cf501502e"],["/DSN-segmentation-liver-experiment-summary/index.html","e4cae86248a42c203f962e1a4fcca4d5"],["/Data-enhancement-elastic-deformation/index.html","482ffd0d45272a6350935d5869f4e093"],["/Decorative-pattern/index.html","594ebab1b6d38c62e512ef76964ccbe2"],["/Deep-Learning/index.html","37161e9674adb7db7d86da5dbabbb3c8"],["/Deep-learning-and-medical-image-analysis/index.html","868163b12dbc7e66530513879aae8d18"],["/Deeply-Supervised-Nets/index.html","9f16cdb3b0cfe8693be48df53d1ced4e"],["/Deformation-model-based-sparse-representation/index.html","974b0ec12f120fb6fe13de1025ded5d5"],["/Discriminative-and-Generative-model/index.html","fd99fd09a5af3255e5232e05e4e0e8a2"],["/Distributed-transaction/index.html","699e3a2101cfbeddba09ffefe09c42a4"],["/Divide-and-conquer-algorithm/index.html","87b7ebfd8daa7c314daeb5fdb9897d9d"],["/Dll/index.html","03a79eade680651275c9ef2c1d99cd1d"],["/Dynamic-programming-algorithm/index.html","9969018f558e4032b88806bb510045cc"],["/E-book-download-commonly-used-by-programmers/index.html","91a5226c65624e90d6b3769cfb97c2ba"],["/EditPlus软件的安装、激活和配置过程分享/index.html","e786a4e50a644b9f8929aa023332fc4b"],["/Eight-sorting-algorithms/index.html","89294133b5df7df64b1c735fe96d75c4"],["/Encryption-Algorithm/index.html","71d982ca5022b648b90160cbe8966436"],["/Eolink/index.html","20c61a54b12200bf7e31a473af2486c3"],["/Factory-and-strategy-mode/index.html","33a68dfb5ce8cf30f6ebb39d40b7af59"],["/Foreign-technology-blog-community/index.html","bb985ad891f8f625283dc329912a6e2a"],["/Functional-model/index.html","5ec4508fa3e289e3c516049eff2ad0b9"],["/Fund-type/index.html","2396f66f3dffc2a8a476e16a9316e128"],["/GPU-medical-image-processing/index.html","8b510beda77acdaf862486240e6eb80c"],["/Generative-Model-of-Unsupervised-Learning/index.html","cac27ed1022a955cd13d35d529ba611f"],["/Git-Learning/index.html","d9f4bc9bbaf562aaf079c072f6135753"],["/GitHub-2FA/index.html","3d3344cd290a25ef12d4dab0ae2aa436"],["/GitHub万赞，程序员必看操作系统总结！/index.html","d0876708b93300cb4d0a46ee2fb3f1ad"],["/Golang-book-recommend/index.html","966f2ffe6f63b28cd8b39b53d77dd20e"],["/Golang-learning/index.html","8c7f3df95cdb17d526bf9ba27ed429c2"],["/Gradient-descent-optimization/index.html","aa4e27a61607977e9a79bfd4e62cb72f"],["/Greedy-Algorithm/index.html","9af457bd599319a667279d832d5b38d7"],["/HK-bank/index.html","487e3e238b94e191cb0f48b3ccf3c598"],["/Head-to-head/index.html","413af1968564c0c2d5034cb4e4e37155"],["/HistCite-Pro/index.html","7094cf18188139fc401c382f3d74b85f"],["/How-does-the-program-run/index.html","49c634267f900005347cccd24954ee56"],["/How-to-judge-whether-technologyisreliable/index.html","eb1e67a3093084686aaa0d07491ab82f"],["/How-to-learn-design-patterns/index.html","5455f97080479f81d3b55ab11c9d5adc"],["/How-to-learn-design-patterns？/index.html","825bb56a2e86de8245aad59d01dbccd2"],["/How-to-teach-yourself-programming/index.html","2532fc0f1d75aa60397c2ba34bdc1cb0"],["/How2learn-Python？/index.html","7f3a710ac6d5a4d4e96ba2ea790b758b"],["/IDEA-shortcut-key/index.html","f6de758674a714b8cd31a79c0a7edcee"],["/IT-interview-basic/index.html","231c8f94b04fb737c752090eec4ae4f9"],["/ITK-VS-install/index.html","d43ddfd7ff3b31bc8ca6d08268216b3a"],["/ITK-VTK-ItkVtkGlue/index.html","42e4e4031b7f1697c93d8e23459da118"],["/Image-processing-plus-noise/index.html","d86db7129379fad80737d276231f6271"],["/Inception-Going-Deeper-with-Convolution/index.html","640863556dc9c82451e249ec45d88190"],["/Java-GC/index.html","e217212bb9d98dbfc64ce96a5f556a36"],["/Java-Servlet/index.html","4dc456da93b186536e889b8f0c3f45c3"],["/Java-array-and-collection-sorting/index.html","260d89db5539e136d5e73be0047b2fc3"],["/Java-development-tools/index.html","0efd4769fe1a8ecb00437cf8d354352d"],["/Java-eight-data-types/index.html","17f09f6bd4bea83877d2b14d2adac45d"],["/Java-interview01/index.html","14a426a25a430e741637ade38456d9ef"],["/Java-interview02/index.html","015acc9d09a432ee2983e90d4ae92f1a"],["/Java-interview03/index.html","33cbd8c34ff0e573c8930ef775204948"],["/Java-learing-map/index.html","8d7ca86214c11310c94317ca6dec1ac7"],["/Java-learning-route-map/index.html","ba69e6557ad312dc1710ffe9d231502c"],["/Java-memory-area/index.html","777bdb9788c329f9de6a63f8c81c0e4e"],["/Java-memory-model/index.html","9ab91c4940b5828a17c9db961aa492ea"],["/Java-multithreaded-learning/index.html","106469c3af6e0d5fcbe24a9669f3ad31"],["/Java-project/index.html","fa05b5e31a9fe68f1b35453cc291509f"],["/JavaWeb-Chinese-Garbled/index.html","2329bf7edf580246f6c2be32d8282936"],["/Java还是C++？/index.html","906525f3ecee59c3164a703fd57d0d74"],["/Kaggle5-step-guide/index.html","42aea286f2bdbd5a41ebb2f260682e91"],["/Knowledge-points-of-Java-garbage-collection/index.html","88167bd964be198616b5d946577f490a"],["/Layoffs-and-Hiring/index.html","9179a8267efcd636cef721d53ce22dee"],["/Linear-regression-of-machine-learning/index.html","ed7714ec0c79efdfa49090e9dcdaa5b2"],["/Linux-Compile-C/index.html","7c5c68943e8c13e32fde33e7aa5c67e7"],["/Linux-ITK/index.html","8dbfbbccc5afd60d7913ec222910a4bd"],["/Liver-segmentation-of-sparse-components/index.html","6c9315521d7fab1e1b359126e6e3e139"],["/ML-EBook-paper/index.html","5361a5a5baee322ba220ea8902d53a25"],["/Map-uses-multiple-maps/index.html","cfeff90ab70823b413ec9ade70746778"],["/Matlab-Graph-cut/index.html","5896de3ed674afbd5ef8b26ed665d458"],["/Maximum-Likelihood-to-EM-algorithm/index.html","c95336be62ca76926ec4706b8d4878ad"],["/Mean filter and median filter denoising/index.html","526f3dcbe2b7bf9fb509e7b7bdc2e684"],["/Medical-Data-for-Machine-Learning/index.html","b9d53a92e5dfb90ac3140657176eb687"],["/Medical-image-analysis-deep-learning/index.html","255af1f93dbba03c1dc0ee1142907ff2"],["/Medical-scan-image-processing/index.html","d23f248f096a39e48eea416143b83659"],["/Merge-sort-algorithm/index.html","0efbbc4c0a8c90872eca265aacd5612c"],["/Monthly-income-2W/index.html","fc3b80227bc231817933d0971eef9830"],["/Mysql-database/index.html","1e6708f60d58ca1c15c78ee84711cb37"],["/Neighbor-Embedding/index.html","2e69ec1db02f54f6415253f86085f7db"],["/Neighborhood-approximate-random-forest/index.html","8218d88f2b500c4fa2b7f4d0258cb115"],["/Net-and-official-documents/index.html","79083ed90bb294f0066615e3452af042"],["/Netflix-VPN/index.html","b340cc25eea97d572ea8fe2d4250940a"],["/Network-principle/index.html","6650922848543b21ef014aeeb33de6c8"],["/New-Hong-Kong-stocks/index.html","56b10963c60fd28bd85e15933e8d71b4"],["/Nice-to-meet-you/index.html","f64edeaa3f25635aecd872571122898e"],["/OS-processes-threads/index.html","4740241c82f9312961833a98273e3e72"],["/OS-run-environment/index.html","5c2accae41aa6be726e9781b18fc96d1"],["/Open-Internet/index.html","b3a348d22bf1acfd5079f61468687552"],["/Open-Internet2/index.html","199a3596912a237307b851a98f0e12ce"],["/Open-source-community-and-rewriting-website/index.html","5364587d86215c3289b40ea3b853ae94"],["/Panoramic-image-stitching-based-on-SIFT-features/index.html","82f876ee47a166fea0f29987f05d9bbb"],["/Parzen-and-KNE/index.html","5f4eaa323d2bfa2731e4da3a8a19c1a0"],["/Personal-technology-blog-site/index.html","41a6523115705d52826ddfc296001530"],["/PicGo-Gitee/index.html","a079baac72d6a6975d2ea36f7168ec61"],["/Programmer-treasure-chest/index.html","e19d7ea83512d3d59589a0f55710fc9e"],["/Prototype-mode/index.html","f48235ab1b4a4c078bbd5c63bd8908a4"],["/Python-base/index.html","128533e793e846663eb2a6b60781d0bf"],["/Python-crawler/index.html","bc9878597afe47b8e7185265b83e0a34"],["/Resume-revision-suggestions/index.html","39ef1661fc44884e62e6efacc7f30dc1"],["/SEO01/index.html","85d5981c46232fae2f8fa5031a34e9b1"],["/SEO02/index.html","cbabb7bec042dc49c072c11c85439f24"],["/SPHARMPDM-MEPP/index.html","87c7edac78a01d6051ef21bb2d10757d"],["/SVM/index.html","7cf27b5d09dd61e30fb7f46a5a6d0267"],["/Semi-supervised-learning/index.html","50b5f38955991ce9376944a0ec23d582"],["/Sequential-model/index.html","41e218b41d9114c9c0c83ab9a948954a"],["/Shape-Based-Human-Detection-and-Segmentation-via-Hierarchical-Part-TemplateMatching/index.html","e3e54cf954314a0d2b74bec44536cd18"],["/Spring-basics/index.html","b414f985b9bfc7d821d18e7507faaf43"],["/Spring-integrates-hibernate-Struts/index.html","01b470fea2fb8131d53c4b3f6bf0cadd"],["/Structure-learning/index.html","7a896621b2101b71c2da9ff18bfcae87"],["/Suggestions-for-self-study-of-computers/index.html","441b66b99abb163fc1045e876a60126d"],["/Summaryof-HongKongStock-Account-Opening-Links/index.html","a249dacf3e404bea6b5f95bfd2687018"],["/TCPIP-detailed/index.html","f44bce49f86888fef36c74d696b16d12"],["/Telegram-VPN/index.html","cc24a57ae0e961e5107ad0ea0b9e7af2"],["/The-essence-of-shopping-festival/index.html","8098d0c741becb40c8740cfa3f1dfe87"],["/The-most-important-investment-in-life/index.html","4d399e748dc6feef7d017b6245b12e0c"],["/The-most-successful-nvestment/index.html","7d7d65bf131f656e301b2d0a893c64b5"],["/Transfer-Learning/index.html","6a3f287f3a16dfe0d3e8f133a6004eea"],["/Transfer-to-computer-major/index.html","2ca2f5cf470cb911c36ecad6446e23f9"],["/UNet-Convolutional-Networks-for-Biomedical-Image-Segmentation/index.html","ce13f0ec2839950648c07ad8655bde93"],["/Ubuntu-install-sougou/index.html","6db6a0b80203573eadaec5d006ec9618"],["/Understanding-of-paying-for-knowledge/index.html","e5503bbf2e350c22b4f3bdab8d5583b8"],["/Unsupervised-Learning-Linear-Dimension-Reduction/index.html","0e6c8ef07be0c3f3f8026ad93e3b5710"],["/VPN2025/index.html","1c1257861f9d0bc2c01e29d898ecdc9e"],["/VTK01/index.html","8c4cc93890f04a15ac2bf00036ad9eeb"],["/VTK02/index.html","3b28dc0a9ea6e5096b4f09b44b09f8b3"],["/VTK03/index.html","35f60796a092994e2468c0d39cfc9fe8"],["/VTKRead-write/index.html","98d882c89388b33e31b37be9ceb9bafe"],["/We-are-all-good-kids/index.html","aa5340964a72fbf7eaff3e6272a3492f"],["/WeChat-80/index.html","9677715078be33ecbe7f8fd0ba2aa78a"],["/WeChat-red-envelope-cover/index.html","3e8d946eeadadf981912cc00e034fcbd"],["/What-is-crawler/index.html","ddf54da999e9553dac43d42fc86db1e0"],["/Win-OpenInternet/index.html","baa22965c969afbe16613297ce73abe2"],["/Windows11-2kfans/index.html","71223b22b726bc3adb1c72b33cbe4b95"],["/Word-Embedding/index.html","331a1f65ea89f0be4a494b50ee5cb915"],["/YuanShikai-and-his-Beiyang/index.html","9d379d02f2dfcc98b7f5e5f3e08d9a1a"],["/Zero-copy/index.html","43868e0f536bac96b44961a15269e10e"],["/about-keras-model/index.html","f3ef37c0560a3b796bbc5ee3c3ea74e9"],["/algorithm/index.html","4e4f665fd39b46708125c0117cf668e1"],["/alibaba-Java/index.html","6d08c93c833d7b88d93479e002bcb57a"],["/archives/2020/01/index.html","eea90a0b0644338d2e9f9720955eb0a5"],["/archives/2020/09/index.html","53687a33f3d9ef81c4baa23b1472bb7d"],["/archives/2020/10/index.html","6c0cf6e72139c863bb569ee41bf3fbf0"],["/archives/2020/11/index.html","93b28ec4a6e407bbcec25f02c7ed69d8"],["/archives/2020/11/page/2/index.html","b7be19d069a3a500e61c32ef0e533e94"],["/archives/2020/11/page/3/index.html","2891c7333328c56b4806d02424adc8a9"],["/archives/2020/11/page/4/index.html","db9fc3401e701519a09549cf2160aba7"],["/archives/2020/11/page/5/index.html","b6446a3b7432e5534664ca57629907b5"],["/archives/2020/11/page/6/index.html","912ac1149a2bb34cc5d1949e42351263"],["/archives/2020/12/index.html","2558c4cd9526111194ccd3acbcf656d6"],["/archives/2020/12/page/2/index.html","48d718c035b19cf26e9ec4e0966d65ed"],["/archives/2020/12/page/3/index.html","9d11d2e08f2494fa3142d34db3d8e282"],["/archives/2020/12/page/4/index.html","1df421d9e3f42377f7af107438bcc163"],["/archives/2020/12/page/5/index.html","b15b2b7b10e101139e729e4b9ad322a2"],["/archives/2020/12/page/6/index.html","d4f2f1bad8125af1954ea6862b4e422d"],["/archives/2020/12/page/7/index.html","00d16c1bdc1365268bf36be4094b0264"],["/archives/2020/12/page/8/index.html","5b4ef29625fb306b80b768c6fdc5109d"],["/archives/2020/index.html","272e414034bddb41d9adc6548b442072"],["/archives/2020/page/10/index.html","46cd5f3bb951389f80ae2bc781e52aab"],["/archives/2020/page/11/index.html","c811e44543a112076a9ce414ac0c2353"],["/archives/2020/page/12/index.html","0386d1807814316218fb853728df6284"],["/archives/2020/page/13/index.html","ed752b8a2bf5633b066ebe796685aa3c"],["/archives/2020/page/14/index.html","2cb7913adf132c65257339688d6936c4"],["/archives/2020/page/2/index.html","382a8e33777799f7f0f162ee480f1ef9"],["/archives/2020/page/3/index.html","9c36142150753a428f0af210f3889434"],["/archives/2020/page/4/index.html","7025e661b12abd85af8c7d35596a8638"],["/archives/2020/page/5/index.html","8ac6a15c02054f67256dc5164714d20a"],["/archives/2020/page/6/index.html","4ac04e0b96e6305f0f801a04a4940c31"],["/archives/2020/page/7/index.html","5f7e2b0fb2ccacaf2dff90f8951e927f"],["/archives/2020/page/8/index.html","4f939519acd8fa63367ab34df6ea69a8"],["/archives/2020/page/9/index.html","ec78fe6fd886596e263d5a15a4283a89"],["/archives/2021/01/index.html","0d6214adbc7820b89964f9d5d3be3929"],["/archives/2021/01/page/2/index.html","655cca838e6b8395833b146359c044b2"],["/archives/2021/01/page/3/index.html","afc5e80e188a155d5b11f12904736169"],["/archives/2021/02/index.html","a846d0f2f9f72100429a45a3b2b456af"],["/archives/2021/03/index.html","d52990579984ca1f22a5293ca8d11cb4"],["/archives/2021/03/page/2/index.html","dd69f5ae7543414d64fe420fcb25dd25"],["/archives/2021/04/index.html","7b723708eab362a518693b69625305d4"],["/archives/2021/05/index.html","ccde96053767b9506c0b81bce00bdc1a"],["/archives/2021/06/index.html","f05d1f7593212765254a5501286cb19e"],["/archives/2021/07/index.html","67e0c9f5189ed43deadc64107fb7eeb8"],["/archives/2021/08/index.html","e5531625385c82d545de0176a0d3d75c"],["/archives/2021/09/index.html","14603d148c1934e9f83fd0547dda4a64"],["/archives/2021/10/index.html","3d7195e1d8c33307c52e2a28fa3f741f"],["/archives/2021/11/index.html","b8db99d559e117d060f08efba1574b9d"],["/archives/2021/12/index.html","831a04854b8ba1475bf45aca485a21d7"],["/archives/2021/index.html","bdf1229fc2e38db76b6d821b8390f17c"],["/archives/2021/page/10/index.html","6bb14a9ba941d3cc38f0ab906deb7e30"],["/archives/2021/page/11/index.html","2c710237f1de9ebd63c8403d46e4063d"],["/archives/2021/page/2/index.html","e637dc5d6e4b8eecf4420c34d5502a76"],["/archives/2021/page/3/index.html","71b1af755fda46ee3bfd8e0712a1a8e7"],["/archives/2021/page/4/index.html","67c09da27f54ff2fd87a2c5c5da5d255"],["/archives/2021/page/5/index.html","21ec6f3ecedb37bc4d90ec526b3051cc"],["/archives/2021/page/6/index.html","c40ce2b686d910a3d472c888d5f2b736"],["/archives/2021/page/7/index.html","3e4587a89f845081b031fad995171478"],["/archives/2021/page/8/index.html","593f0a3e041178bf1a0eb1ca21955a82"],["/archives/2021/page/9/index.html","8a298d91b7875d4e073f4fc5c170d20b"],["/archives/2022/01/index.html","850fd5cc54deb96d42a0a9d36ef1ba43"],["/archives/2022/02/index.html","ffb7a8e37b834ac6e0193189dd3ad6ab"],["/archives/2022/04/index.html","8b808ce4520a4ca30d9f34f7956309f7"],["/archives/2022/05/index.html","38c20c461f297fc65fc49832eecd17f4"],["/archives/2022/12/index.html","6ea2097d9a5999aa74f652f6cb1baff3"],["/archives/2022/index.html","df48a9b1bcf9f8b4cee4695c4e2c2e7d"],["/archives/2023/01/index.html","3f62d4a113c92d56d4552deaea2d3196"],["/archives/2023/02/index.html","c4cecf9dbefccb505d2bdc0363c3d452"],["/archives/2023/03/index.html","e58a794449635a61a59d220613a966e4"],["/archives/2023/04/index.html","999a0c20cc15c6df698f4cd57ebdb034"],["/archives/2023/06/index.html","03f3139c55cddc033264e44931c6b116"],["/archives/2023/08/index.html","9b8c89aca3a746a379604c2db225a36c"],["/archives/2023/10/index.html","a78662848c827c81eb8f7abf9951c8ff"],["/archives/2023/index.html","df73bc6b0941e90dbe1af2b9a997e7c4"],["/archives/2023/page/2/index.html","e3c3d4779791e42c6306e870c05029ab"],["/archives/2023/page/3/index.html","b4f19b906776618ad830de3c47d4f3f4"],["/archives/2024/01/index.html","20b771c9ad6c21f380d8ffc59c0f12f6"],["/archives/2024/02/index.html","c6025eb88a6ed683cc810dd8e7865ce3"],["/archives/2024/index.html","2cfa029b197772295159f92aa749c8a6"],["/archives/2025/06/index.html","0548bec9bdfe32760e19e03e94dde108"],["/archives/2025/07/index.html","4dae7633d4de981d4165720a179c52cd"],["/archives/2025/08/index.html","a23ee63c482776c8053f78e8fb6e0bc3"],["/archives/2025/09/index.html","e2b91b6e0e35eaa632f0e10dfa0ed43f"],["/archives/2025/10/index.html","daf05b7c4aaec804a843b28d8fea8576"],["/archives/2025/11/index.html","1c3af1996b3314e81f64d139131bedfe"],["/archives/2025/index.html","80622ac8891ca1cf34b14eb87f9f3216"],["/archives/2025/page/2/index.html","19eab76a5af023185a026231efa0ad67"],["/archives/2025/page/3/index.html","152816d2f3fe43585032b3706e586228"],["/archives/2025/page/4/index.html","b7c31d43b269d522b10b9885db2f626e"],["/archives/2028/02/index.html","358466b77ccaf15027744840cabb470d"],["/archives/2028/index.html","5115e72bf407dc4a18c49c6b727567c6"],["/archives/index.html","a7f13d765bf798e03f957666676b5847"],["/archives/page/10/index.html","8db46377c57e095230b34b0c76058b86"],["/archives/page/11/index.html","57ab81ff435e2c9cb8aa923b7ff55dd6"],["/archives/page/12/index.html","8aa27a302fab438c48de354b2d30312d"],["/archives/page/13/index.html","22634f09cff03d718c828eb923c49841"],["/archives/page/14/index.html","0c8b282ab1b80e76dc94c77729286e90"],["/archives/page/15/index.html","3e482119ce5d7162db611d8f3729ddc1"],["/archives/page/16/index.html","65cabaea70b1731e74246dc0e77bd63e"],["/archives/page/17/index.html","c433cb9461f24d449bc9a85f7093e2e5"],["/archives/page/18/index.html","700fe67d7d42bee6030662642f9be1dd"],["/archives/page/19/index.html","b77796a9f0b7b6ad404b3c15ccfb9017"],["/archives/page/2/index.html","2152172f75d0ec932b71de3f1dc85257"],["/archives/page/20/index.html","f07d815e7cb783d764d8558e949cc452"],["/archives/page/21/index.html","1c098a392778eade2e33074f3d94fd57"],["/archives/page/22/index.html","61371d2ac063877105ce39ec6de92943"],["/archives/page/23/index.html","fb89ebd269b6a195b0cd8df0fd496aa1"],["/archives/page/24/index.html","969181166f03382cb8e8fe109c70f05f"],["/archives/page/25/index.html","35914f7574e58de00d18d0b0adb213d3"],["/archives/page/26/index.html","abf188884ccb042a8a221aa2d92467f2"],["/archives/page/27/index.html","f37c5e1f02a2b7d305c74eae092537aa"],["/archives/page/28/index.html","590ec90fe854921bf98d0b441244972b"],["/archives/page/29/index.html","83ee4bf2c886c3f18407bd364b58361a"],["/archives/page/3/index.html","10aa55ccfee3c08267499634abb976e8"],["/archives/page/30/index.html","ddf687cbbc276ea96ccc02a60763c711"],["/archives/page/31/index.html","c3b0d98e7b55008641679d0b78058d9b"],["/archives/page/4/index.html","9ddb9655f57cdb54ff4feb0e79b20cac"],["/archives/page/5/index.html","7b837c8904ed8891af817a3a96ae5208"],["/archives/page/6/index.html","7997c1d187c6857126d5f6c1ac624335"],["/archives/page/7/index.html","e81a0c63709ab90a87aa09e334efc7a0"],["/archives/page/8/index.html","635a384bae824faf15f232736386184f"],["/archives/page/9/index.html","cf90094afb357ae9d1e1b932e2282ae8"],["/baidu-search/index.html","db298f0ef3302524c8afb73f536e24ee"],["/baidu_verify_code-Hh2fKNlEB1.html","d8b36d8fa24b2379487df05c1ae719a0"],["/be-a-programmer-instead-of-a-code-farmer/index.html","d59248e3350814871763243d66905b87"],["/bought-a-house/index.html","494c3c0879d529327d07406627ac18ac"],["/categories/C与C✙✙/index.html","c5a1ea15e16e27f7cbc7aa27cb6338dd"],["/categories/Go语言/index.html","7f4a3b94461e86efc7dc035651330c92"],["/categories/ITK与VTK/index.html","5272c10d2224f25c8e4f6a54f64bb987"],["/categories/Java/index.html","a4e7a7447aa597bd4a087a108f53a1a0"],["/categories/Java/page/2/index.html","1d144da3cd53cbe28bdd7f88ed3a2038"],["/categories/Java/page/3/index.html","7d3845f50525a6b8b26d2120430e81b5"],["/categories/Linux/index.html","853db6242fac111d40b166bcc66cda15"],["/categories/PLC/index.html","0872d11e1fed8b1c4dd39be6b987f0a4"],["/categories/Python/index.html","53b203af63b3cbedae1c6cb54b8dc82f"],["/categories/SEO教程/index.html","eba765ebe2323eeeb05dd257016f7cbc"],["/categories/index.html","b63ab51fd101a5913bd4fd4945baf0d2"],["/categories/图像处理与机器学习/index.html","ba7b693dcca8061d4a9c463f74bd8fca"],["/categories/图像处理与机器学习/page/2/index.html","e800d71dcd1ba153d24fc56f8cbc638f"],["/categories/图像处理与机器学习/page/3/index.html","a3ff0780ef410443db2d354fdba14391"],["/categories/图像处理与机器学习/page/4/index.html","27f540f813f76b829d5c284cb7ba69b7"],["/categories/图像处理与机器学习/page/5/index.html","94a3678383f2bf4836955c288f5a93c7"],["/categories/图像处理与机器学习/page/6/index.html","8f0420152e21df81f8cb2d4b78ccdf5c"],["/categories/工具/index.html","862d9cda0233c47d8e21131c2fea7597"],["/categories/工具/page/2/index.html","4fcb98e98668807f633224e769212ac5"],["/categories/技术以外/index.html","e98d97c1810d29fc3a171a7dc5729e49"],["/categories/技术以外/page/2/index.html","b68cb6f2d53721c96231397ecfa5e539"],["/categories/技术以外/page/3/index.html","9784d668f5617a855e52929a7202dd9e"],["/categories/技术以外/page/4/index.html","50585ce93d6cf6240a159c1248cf2ab2"],["/categories/技术以外/page/5/index.html","f564ed982bf93ab63a585e1cfc6f813c"],["/categories/技术以外/page/6/index.html","603df1f737452f8ab3315776feb4a121"],["/categories/技术以外/page/7/index.html","23ca5ebff279c83f591c74a411fac22a"],["/categories/技术以外/page/8/index.html","e4bca88a5dd297bfa1d3d598455de7b2"],["/categories/技术以外/page/9/index.html","fde77120c82b81fec293e1320d2538a6"],["/categories/数据结构与算法/index.html","62df680d6dab572bb1a143a8e8e1df36"],["/categories/数据结构与算法/page/2/index.html","f7217a6c322e8aef7f5f1d87125db45c"],["/categories/科学上网/index.html","2d597f373e5e344476e28a335965f4fb"],["/categories/科学上网/page/2/index.html","9aa3d199003d3ed41bd0132956180c97"],["/categories/科学上网/page/3/index.html","78968aeea1bb581cfad37fb4dc98e5ff"],["/categories/编程经验/index.html","9b19259dc4d78bccb6e28e7a378fb360"],["/categories/编程资料/index.html","6f36b34f73561766a1d1276bd9c3839f"],["/categories/编程资料/page/2/index.html","64a0fe34540ab0e46866fbf718032486"],["/categories/编程资料/page/3/index.html","9811ef8e2dab83d0904882579946e1bb"],["/categories/编程资料/page/4/index.html","81944cf23a83af1f3a716071195e7a93"],["/categories/计算机基础知识/index.html","1fb87faad8174ef6d855d53d0f18df63"],["/categories/计算机基础知识/page/2/index.html","82be419cf071b88f3f7fa24ac9b02169"],["/categories/设计模式/index.html","7fa5735342cc97d39628943ad01df769"],["/choose/index.html","855fd83220d798ef44bc73db3961cd7a"],["/choose2/index.html","3a37455f9edb14781f62e758a14095b9"],["/chrome-crx-intruduce/index.html","4381e5677f26a8cc51dc5e914a2f4500"],["/clashvpn/index.html","e60f257ac5daf67ef62e24438772a13e"],["/coder-blog-website/index.html","8f1aa573f4f80ab708e4117e6d535b58"],["/coder-source/index.html","f8f3a111bacc5640a8a54626bf857423"],["/coder-videos-website/index.html","f044f87c604756d095ea9926c6926f10"],["/computer-book/index.html","70df4e8cea7d65fdb8b872ec54e8cfd1"],["/computer-censorship/index.html","781a90f4dca87c7e98d860c311f243e8"],["/computer-network01/index.html","ecbd54f319cc3b15828fe3769a8b9ff2"],["/computer-network02/index.html","ece90eca36871232fd005e597dbdd6a6"],["/css/main.css","bc32ad34ec4990d934c3c647bdb62f79"],["/database-Mysql/index.html","3f32c12dd54da694be7e726f17d84e4c"],["/eclipse-lombok/index.html","aff5d5bdad75249af7344f34a1aa901a"],["/fully-convolutional-networks-for-semantic-segmentation/index.html","6b288cc4bdb686a4a4335b97fd7c9434"],["/great-firewall/index.html","1869cc34f85953eeb8b785149f470399"],["/halfrost/index.html","2234c24986a6e6e1ac46f1bee5a2ed43"],["/how-to-signup-chatgpt/index.html","5a2c6037235feacd32be577a315e1558"],["/how-to-use-Gemini/index.html","69296abab65203d5d4e46e1ac4d340b9"],["/index.html","932b635d0182f59a96972c3ed8a66f3e"],["/ios-open-internet/index.html","415cb4c2925867b1b2242e40b2ca6ff1"],["/iphone-open-internet/index.html","5a8f14c0cfec56c0dfb63e50dabafb88"],["/itext-makes-pdf-form/index.html","74300b16d1731c1a59f29a34d9c7529b"],["/java-Set-Map/index.html","071fcb36bdd19574623d324483a481af"],["/javaweb-server-error-codes/index.html","425a6733c0e98a9e60697a9411d25752"],["/javaweb-source-code/index.html","68bbe8a2a5676c0312c4110e21d6f5c0"],["/js/lib/busuanzi.min.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/js/lib/lozad.min.js","47904d34a224931dd1b615c59a3dbe3b"],["/js/lib/prism/prism-coy.min.css","0ccad54d95845901ead59bfd3ecceb14"],["/js/lib/prism/prism-dark.min.css","a4711d2957d6605eb5682bdd228cf123"],["/js/lib/prism/prism-funky.min.css","efedcdccd7a9ab342d2d9cacd24920af"],["/js/lib/prism/prism-line-numbers.min.css","38e22e790c279bb56f9ec4b90a2a2d58"],["/js/lib/prism/prism-okaidia.min.css","5ac6f9de996fbec68aaa106dfb16e061"],["/js/lib/prism/prism-solarizedlight.min.css","ecc7e64d039873ffcf7fb27babdaeb5a"],["/js/lib/prism/prism-tomorrow.min.css","456af2a14ae4f5089939d5904ac40fe8"],["/js/lib/prism/prism-twilight.min.css","ebb5c355332a8cf9a1ce37a2a69d678f"],["/js/lib/prism/prism.min.css","a5234d614834658887cec6a9515890f8"],["/js/main.js","052d2b299d9c750afea8df0b802ab7c1"],["/keras+TensorBoard/index.html","1bafb42987f120b4c113710759118734"],["/keras-beginner-guide/index.html","d65f31ac40f267dc018f7e1848a4bc2c"],["/kmp-algorithms/index.html","88ba7cccfc14783e488c2c06fc672b91"],["/leetcode-Java/index.html","4b56e0b59b44ae9b8a86972b62e4ad3a"],["/links/index.html","d733c7a07d7dbeb8c07f7ee37fbb1e11"],["/linux-java-opencv/index.html","ff635d53eee5eace8d59202e3d141bf8"],["/msb-source/index.html","66a12efd611a5a63c66b0797e58e592a"],["/online-BUG！/index.html","c16b804574fbbf0fbda471483a4a2331"],["/open-app/index.html","b90d7658c3c20d3c439b3a9a97e673e7"],["/page/10/index.html","1cc8500f70b3139742241906e5307bb7"],["/page/11/index.html","0601cbe83f2e329581ae95553d720d56"],["/page/12/index.html","38d3cf64c910aa453e1002a5d1a204db"],["/page/13/index.html","913539d63deb86196db76817d94dd411"],["/page/14/index.html","f89cd5adb6b1df4a30c10aa16982dbec"],["/page/15/index.html","93065b06d1aa593bb05e9b59a7702331"],["/page/16/index.html","c248ff95246c82024b754d6395599764"],["/page/17/index.html","0ddf32090d88bc732557c536266327ae"],["/page/18/index.html","fe012b9c2f373ae1f5aa19f14d1a6f54"],["/page/19/index.html","22255443b55beaa1ca91368265e0c99f"],["/page/2/index.html","f8444a16e99d2c314f18d1608ed07692"],["/page/20/index.html","88ac3a26581b11da840befcb278519ad"],["/page/21/index.html","56243afd4a2694bdb8e93ffdd1dcd65f"],["/page/22/index.html","1d635e1035186b4584719b9f80570d31"],["/page/23/index.html","7a5e71620330f253a8c7884355785a8e"],["/page/24/index.html","e97046856a7c32e92203b211cdf60ca9"],["/page/25/index.html","7ec84f6120210929598eb8f6d5e9947e"],["/page/26/index.html","d04f761d58bf472d46466167e24b9980"],["/page/27/index.html","8ad9fad2a0d773b42f23b0823e060c50"],["/page/28/index.html","053541f9d26e6fcc0bc6e3c41315b09b"],["/page/29/index.html","7e1cc11f2023eb736fc532b8ef821dbf"],["/page/3/index.html","6f87ad32085cb39b0628dfdb3cd343f5"],["/page/30/index.html","04eea63ea72d70725e8a39c0f9498d01"],["/page/31/index.html","ed2f72d708cc051f4fb14cef1c42c722"],["/page/4/index.html","a3cbdc27ff5c7988ad6b0b1c8283e2aa"],["/page/5/index.html","0d2c19d86e6aecfb3d19ebee48587445"],["/page/6/index.html","1017a02085f611b24c6b61c202467f6c"],["/page/7/index.html","48776bbf9b50e8e9922729b93c9a3492"],["/page/8/index.html","4f9111490c14d7452a5928ea25db8764"],["/page/9/index.html","766ddc7e88967358bb7047c37386553e"],["/pandas-data-preprocessing/index.html","2d71e3e1a9ca21883115e4d2182f2bdc"],["/python-Blog/index.html","b6f04a0dc03578cbb91de076c4851c8a"],["/python-yeild/index.html","24e64087dd4e0ae1e105e249bc8c2e31"],["/python爬虫教程/index.html","c1b5bef74dc7b5a0ba60523b90036d1b"],["/software-copyright/index.html","4d77d7f1a17e75e87634da208aafc9aa"],["/sw-register.js","643109955098d8caf7f4a78c6dd100c6"],["/tags/AI/index.html","ce3c1d6da6225f8aab24824a33902cf1"],["/tags/API/index.html","6ed9c77bde497a9fc44a9d06cee29430"],["/tags/C-图书/index.html","636cd036d8bd7c49606df281ea9228d2"],["/tags/C/index.html","ee7c031cca3375147f2924ad0f3598ba"],["/tags/CNN/index.html","018cb4f6c7a754cc87802ce79e9a9aa6"],["/tags/Chrome/index.html","6e46b3c1780634b899c03077a2901831"],["/tags/C✙✙/index.html","8cb1de2e4fab4dc5c48b8920598a25f1"],["/tags/C语言/index.html","a49892530be9036fc9f5d50c295be7aa"],["/tags/C语言图书/index.html","d84ddddd4a2504e492de10e8c434404e"],["/tags/DSN/index.html","99b2963e8dd354c503b08191d99e31e4"],["/tags/Dll/index.html","7d8e0f4acfde34a7f153e763113c9e6a"],["/tags/ECCV/index.html","16e98816358166bf44680ed32ecc83d9"],["/tags/EM算法/index.html","2641fbe402c35b1266d146f00e7d6b32"],["/tags/Eolink/index.html","6260ca65d68eaa53a2db1f2fc76ef468"],["/tags/Gitee/index.html","4d587f0aa7b1a984e2f2b1b22175fb1e"],["/tags/Go语言/index.html","2087eb0db6e753953551c0a0edd818e4"],["/tags/Graph/index.html","d9ed7b94fbd57b9a1f34793f2cb6d63f"],["/tags/HTTPS/index.html","e5c217a82444e9c01d86ff705866fea7"],["/tags/ITK/index.html","63ab7c7a8496d89572f32bdeaef456b6"],["/tags/ItkVtkGlue/index.html","833aaa5a17709aea23b885bad258422c"],["/tags/JMM/index.html","f44b9801b3c34b5e6268b930be650da7"],["/tags/JVM/index.html","42ef7e591a98b7b33be1e1ade35260f0"],["/tags/Java/index.html","d9c18cc78dece7b18daafc2c8c9d5fb9"],["/tags/Java/page/2/index.html","c26061700ffa7fa56c8726b152230232"],["/tags/Java图书/index.html","e55fa2966141428ba550ec6e9d320fb5"],["/tags/Kaggle/index.html","43ead301609eca33e87d4ddf247e485c"],["/tags/Keras/index.html","4c9f92bbc20d00387e005e3454abd46c"],["/tags/Linux/index.html","97f90179746bc9348977d9bd652088ce"],["/tags/Linux图书/index.html","07b0dda38d1cd6a63c1434ba04c980c1"],["/tags/MEPP/index.html","d1d2acb8c55b1fbe9084c6dd76078667"],["/tags/Map/index.html","a33a7b2a5b3c91a905ff4d108510f6be"],["/tags/Matlab/index.html","28d0ed6c82191a341bcbc3604aa43282"],["/tags/MongoDB/index.html","b042bea4d936856bed468dcf57f5b4b2"],["/tags/MySQL/index.html","ec7d51e62f7f682981698b894c84bab7"],["/tags/Parzen窗/index.html","80f7a823eb44c53d562c557ba7ed0b3c"],["/tags/PicGo/index.html","53fb027fc58080853eac381522b89aea"],["/tags/Python/index.html","b79e133e359d7a693ab75a2fb93b912c"],["/tags/Python图书/index.html","fba4111bca145842d6c5b507dd0669c4"],["/tags/SPHARM-PDM/index.html","69e5566c1da21eae98ee7884835c56fd"],["/tags/SVM/index.html","895fa32219b80a70f88c52e1e17bced8"],["/tags/Servlet/index.html","d97ee4baabc7b12db19c69ffd31aedc4"],["/tags/Sping/index.html","9239a397bbae530462b73de9ddeccdf1"],["/tags/Struts/index.html","6f4e24b3647668cd42ea550e48ebc054"],["/tags/TCP-IP/index.html","9e45dda0efde241c91e9c97fa9023ec6"],["/tags/Ubuntu/index.html","531de5fea274d7b8f0a8f6387817d607"],["/tags/Unet/index.html","7352e714abb91052c9bceabfc99ec956"],["/tags/VS/index.html","0905e7dc686bbb032852e3b7fba5cf77"],["/tags/VTK/index.html","a7191762d3869ec1a463e8626fe6fd56"],["/tags/Windows/index.html","5f4ab726c1ecf5f58d83299cbacc18be"],["/tags/edit/index.html","41d02d4d2f56582ac2ac4f1d69bbb723"],["/tags/hibernate/index.html","8c0c0781c7744d70f4c08f76bb622cf8"],["/tags/index.html","77ce4b0dfdd661b6d31ed936eb130f79"],["/tags/itext/index.html","fbafc57febe5b7cc90fbdc284f9ba276"],["/tags/jdk/index.html","4c3841dc816812b33822d584c118741a"],["/tags/kmp/index.html","d73e43aa0258221814dcd4ebd493ff42"],["/tags/k最近邻估计/index.html","3bdd9013b4d1a153a64549afde078c1e"],["/tags/lombok/index.html","7bb88cc1d21ce1333a094ff91db8a575"],["/tags/offer/index.html","cd2bc7752f51429e9c2adacd6606e8f3"],["/tags/opencv/index.html","58940d5db693d770fb889d3d1cd0cd89"],["/tags/pandas/index.html","92ea4362d8ba1275f811e5b04ffe3c2b"],["/tags/string/index.html","a217e27dc04f7a5c9c96998759758736"],["/tags/vim/index.html","eab0b240c91c2e8678853581162c7c18"],["/tags/vtkPolyData/index.html","081cbd18517e87154b5ee84c1a11719b"],["/tags/web/index.html","bd173099271d761c9d2f997743e5cc12"],["/tags/xshell/index.html","fbc51e0709e51a650c4a37ed34143d30"],["/tags/yeild/index.html","914686187583f47ed3cd5e72e19749b8"],["/tags/互联网/index.html","42025bd99418285e39921b679dd447b4"],["/tags/人工智能/index.html","179f82056baaed1d7426bbf110102fee"],["/tags/体绘制/index.html","231cd36ece7e318a967866e56f1ae700"],["/tags/全卷积网络/index.html","6645067752a18893c031d0134cb72997"],["/tags/公众号/index.html","8c10d81e2b14d472ff542c9983f67df6"],["/tags/内存模型/index.html","f9941132271b5bf4f4410624d3fb4961"],["/tags/内推/index.html","48b15714693232d220dcb40d8c7f8d04"],["/tags/函数/index.html","e1739122078e6876f6367bada5867d24"],["/tags/分布式/index.html","316eebd9d304f03c0b707b6b422c5661"],["/tags/加密/index.html","0fdd064cf1e3d3e1a6da04c6786d0554"],["/tags/医疗图像/index.html","ff066d8c8db7dc68f36eedb27c6385ff"],["/tags/博客/index.html","dbdbafd9938800fb052e54e23857e10b"],["/tags/图像数据/index.html","4f12b7ab0fd5746387a50d00ae7090ee"],["/tags/图谱分割/index.html","323274cbf71b473b6aa569fb2e439679"],["/tags/垃圾回收/index.html","a3f2e3fc8e3beb86c7b44524a704cb9a"],["/tags/多线程/index.html","27b438eacf9befa94384e5a270c05356"],["/tags/字符串/index.html","d7ab42c7f3cc5c00d6881d0811168db5"],["/tags/工具/index.html","d0d69cf9c754dc39526781ffe67cb59f"],["/tags/工具/page/2/index.html","edef7824337f91ed27071201272016eb"],["/tags/弹性形变/index.html","c954bb6581a88078fb605d3f8ec44529"],["/tags/排序/index.html","85c8cff011d32092083d161162e2ebf7"],["/tags/搜狗/index.html","eadb4d05234e261d4d959ace6a4b9450"],["/tags/操作系统/index.html","328ae83da5271fc556017d20571ba311"],["/tags/数据库/index.html","d4d4d3f6dbf3b158b3b08a651a735471"],["/tags/数据类型/index.html","39c6b4ef9a4578adf51e63e61f93aee4"],["/tags/数据结构/index.html","de6d8cc9953e8b059a915ab47ceb2d0a"],["/tags/最大似然/index.html","53e1756fdd5425f146ef07c888cf7ec2"],["/tags/机器学习/index.html","c607959bb271816b3365645c126a209e"],["/tags/机器学习/page/2/index.html","2569c2efe3204187787141605a34778e"],["/tags/机器学习/page/3/index.html","e28a6df887d540ad9339b566a1017db1"],["/tags/机器学习/page/4/index.html","61be30b6cfe85fccfb9b50cb85bea335"],["/tags/机器学习/page/5/index.html","ddb93459402876cdb870679e9efb9c6b"],["/tags/树/index.html","f1b36a0f286cec9c76084fab7888cbd3"],["/tags/框架/index.html","232dcfbc88ebd72943be7571727275bc"],["/tags/求职/index.html","b649bde98822f2d089d750dec0bc4842"],["/tags/汇编语言/index.html","f33698c6d92c6d86859e63c0e46b75bc"],["/tags/深度学习/index.html","e082bc068a2fc1ed18e4d60ab5e67c56"],["/tags/深度学习/page/2/index.html","9641299db6e03e7b110dccb0e063bb08"],["/tags/深度学习/page/3/index.html","213feb5929a4c519a9a0915084b84f0d"],["/tags/深度监督网络/index.html","ce7c289c266dac9508ae5c500ef1c71b"],["/tags/爬虫/index.html","a9ba11ae633df657d012bdd8ffc3070d"],["/tags/电子书下载/index.html","5ab19f85f3633e19b9f70cf6851fff45"],["/tags/电子书下载/page/2/index.html","12fd4356069e3a7753cbb1fcb3767755"],["/tags/程序员/index.html","9320fbc4759bc3f6aeeab98534a158cd"],["/tags/程序员面试/index.html","67954dc1c79f23f884f8171e1b9154ba"],["/tags/简历/index.html","a60c9b8f1724f90072d4eb373fc1c381"],["/tags/算法/index.html","68da9be87e9d8aee8f4ab398c27ba8c2"],["/tags/算法/page/2/index.html","ad0867145f87f726551e3c3de7460044"],["/tags/算法/page/3/index.html","b9be2a4186997dd8c5612537a6304b6f"],["/tags/线程/index.html","edf2a2fe980a3dcad72e52747aa43d6a"],["/tags/结构学习/index.html","8ee6f8f00f1f24190d8355db1f8bfe68"],["/tags/编程/index.html","df34e758487485d6a3e9d4a19c8e7345"],["/tags/网站/index.html","48a037912ca951787a2bc5ae010ab12b"],["/tags/网站/page/2/index.html","55dce61b8e54433562926c5ae8f0ab72"],["/tags/网络/index.html","53486e9795b25c6058d0c34b0ad727e0"],["/tags/网络原理/index.html","5d55bafe8004d4d3554f3aa9d84c75f2"],["/tags/肝脏分割/index.html","10629b13fe7fe4c29a6723443eb7154f"],["/tags/计算机/index.html","92d513b9a61fe8f6f33a869d27f858cf"],["/tags/计算机专业/index.html","5109713ebb6e56fc8e6442f386403e0b"],["/tags/计算机网络/index.html","ecf43c63bb9f4d364475b8c8598bee70"],["/tags/设计模式/index.html","c16d0ae6d31aac03f2f1065e9ccbc601"],["/tags/贝叶斯/index.html","62f43b71516202807ec0a04b14bba426"],["/tags/迁移学习/index.html","eff4a50784b3655124af9efaf9360b8e"],["/tags/面试/index.html","7af350dde510bf0d08fe57e22c5db34d"],["/the-way-of-pragram/index.html","3b4efb15c0c798fe1fcc10714a6dd223"],["/untiypro XL安装/index.html","6476bcb5ab85d4d1696568fbea148b58"],["/video-websites/index.html","1f09302acfe55551856838dabcbef76c"],["/wechat-fans/index.html","8f793df4e541e8dc1f379019fafd737c"],["/window-run-VTK/index.html","25efaccde1aefd704d5fb4b4c6975656"],["/xshell-connect-Linux/index.html","88bb11022c34f1b5e3e354a968242112"],["/‌Accessing-the-Open-Internet/index.html","02ee5637a798cca205db031a3141c155"],["/《Java高并发编程详解》，去大厂必看！/index.html","005204a30595e764633b4fdfc35c7008"],["/一分钟没了 1.5W 。。。/index.html","4aa0928ca24f3e9dc313041b723e5340"],["/一条高产爆款内容生产线/index.html","a46f41459152215d6b41cbe69a86c7cb"],["/为高考学子推荐的六个就业前景广阔的专业/index.html","a928608f1b9f1ec3dbc5e61a34bba94d"],["/互联网赚钱机器---社群/index.html","54047f81f6355638c5e1c4df3b1f8e4f"],["/你们常用的工作方法和思考方式是什么？/index.html","5e916e3db19d1cb7bff9f88a0eb1b809"],["/关于环境配置的一些事/index.html","95b298eacb99665360f1728b96be31eb"],["/准备了19w！搞事/index.html","a1b84d7717a3ab0e39a54c9a5c75cd91"],["/几个很重要的感悟/index.html","5fb5e76a0da2d45ec1c97c60935fd61e"],["/分割ROI篇/index.html","08ca34e13c1c812e128db1e06dd8722f"],["/分割精度说明/index.html","e087e6838f7b466f2697833f45e88233"],["/分块程序执行/index.html","6e594a438b11add42888a2d29fc9e586"],["/加班公司黑名单！！！/index.html","6b57292e09942be3891ce895db7e151f"],["/卧槽，上知乎热搜了！/index.html","b3be498d77443453029748250376ebe1"],["/卧槽，我的小破站爆了！/index.html","0746cd56d2992fc28da1b8ebbc6edaab"],["/卧槽，我被盗版了/index.html","400765a8c7a20e53ec5c5ad790e0e2fa"],["/卧槽，还有985大学在大一上C语言课？？/index.html","752da322f6948af6698084c00474ef86"],["/历年微软面试中出现的leetcode算法题/index.html","9c060c952e72ab7f229b8894df416a56"],["/去特斯拉试车了/index.html","d2df6ceb151c3423cdfbdc3736a0c855"],["/吃苦的三种境界/index.html","18741232ca95f62a6b3b1923819a6fca"],["/哪本书适合推荐给 Java 初学者？/index.html","39fc9c9d69267614016e29f26ddfb48f"],["/哪本入门级的学习数据库的书最值得推荐？/index.html","92f64570dd5f35df159a47af7f78bdcc"],["/国内外常用的AIGC模型/index.html","bca3be025314ee00c9105ab0dd5504a4"],["/国庆假期/index.html","f456b222f202aab038d868ebc23805f3"],["/图谱程序字典/index.html","464ae776c7f899513ddb44e5a3000f2e"],["/图谱训练与分割/index.html","3628efbf1d82d8c8966cdadb5df0f8c5"],["/宣布一件大事/index.html","5b269498b397d154c3341b89e3b7d5ab"],["/小鹏P7i试驾体验/index.html","5c18a9091a5105c34cc6cb5307239889"],["/微信PC版3.3.0内测更新，电脑可以刷朋友圈了/index.html","26869332a9170fb3f7f4b34e34e8ed3a"],["/怎么更快的赚钱？/index.html","c12f2be833c935f06fbae137bb418a88"],["/我毕业了/index.html","e25bc60f569226d84f349756f0e4c9a3"],["/我！真！的！找到了！爱上学习！的方法！/index.html","0a95b25d66c6dc22f5c8a18fff9fba35"],["/户口的意义/index.html","51042a68c84b8b3e2d148ca150f68845"],["/推荐两本经典算法书/index.html","dc5712f50ed808575230b0170ffcfb28"],["/推荐几个在线学习SQL的网站！/index.html","7d0090cb66e312bbcbb3890278ae59ae"],["/搞了一个程序员成长晋级社群！/index.html","9b4cde5ac4f03a50e037c6ed4171269e"],["/摘抄/index.html","5b357bb0867aa888641054c3456dc13c"],["/暴跌30心态崩了/index.html","fbc3702a1f9eba3499b66f3e5480b136"],["/最近很火的ChatGPT到底该怎么玩？/index.html","9d9ddfc73edda19b9fdef18bec800d22"],["/有哪些好看的日历可以买？/index.html","14df83332bae5c93e0aef9017acfe137"],["/服务器有啥用/index.html","bfc86153b5bb429196de3677995681df"],["/来长沙了！/index.html","7516ac2b3bf62f5311857d98239977b6"],["/校招污点公司名单/index.html","fa91806a28d03e2b8d33a5383c9fce1a"],["/梭哈200多万/index.html","a8f8d7733f53374db07ef48c7ae0b301"],["/梯形图入门/index.html","e3d1226067c0c4dbe178df0bfabc7e4b"],["/橙心优选，凉凉了！/index.html","505a9f4e9274c791282f50e3ceed9dac"],["/比亚迪汉试驾体验/index.html","5f02d5588269191e0ddb41ec5d45adb4"],["/清华转学成电，真的牛逼！/index.html","acf568e62e8e6691e6c114622a4dc0eb"],["/滴滴程序员被亲戚鄙视：年薪八十万还不如二本教书的/index.html","a8d4b0ab03faf9b54c24cd6cb4c8cf17"],["/社群！/index.html","595f36a896335f9d340f18002a0b2ea9"],["/科学上网之VPN篇/index.html","db860467df1f5eb7b4a3fd9d3de97784"],["/程序员必备的几个技能！看完你也是大神/index.html","513f6ac074f0f6d0f22e4702c34e7905"],["/程序员绕不去的槛，Linux！！！/index.html","f648133a29f5ace60bdd287d7f502f25"],["/蔚来ET5试驾体验/index.html","75bce50d47c902a98fdf3f2cd7c873a1"],["/蔚来，牛逼！/index.html","82ef548f1dd9715c058f43c3d402763f"],["/被录取了/index.html","4705567fc5c2dd1bcdb695aafecc1052"],["/被找事了！/index.html","a2845e3790031d8e2f4b5c4fed1153c9"],["/被拉黑了。。。/index.html","301f22a0c9996dec58a6ef2f3fe643e5"],["/被车撞了！/index.html","b36ed805679b020aea0334165bee88c9"],["/该如何选购固态硬盘？/index.html","4b23bd58a907643c509edb23f244e176"],["/这本书一定要看！/index.html","113964c6b6637f7cd4127cc192617144"],["/选Java还是C++？/index.html","d5c2fec403d031e7400dbe08226b0b06"],["/那些让你起飞的计算机基础知识/index.html","cb2d48e354b11a78ca7ee59c276426be"],["/靠这几本算法书，成功拿下大厂offer！/index.html","6e1e0db053e597fd223c37f689e619a2"]];
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
