/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/0010-city/index.html","fe9d0febae6c0ff89e2e1d3875948a25"],["/10-algorithm-book/index.html","47c48ebda93da8b30394a1ed85498c17"],["/10-website/index.html","f97a1044443ad3c813f44603fda53b1a"],["/100万的小目标/index.html","bc4d238c3684435b659c206589e0fc11"],["/10w+YYDS！/index.html","cbd37822c67031637eb19e3b4acb12e5"],["/12-technical-tutorial-sites/index.html","6c52ad0568c1ec4db042d6e929eb9d75"],["/2 6 岁 了/index.html","bd501cd72ba2ad23a371a1b2c409d39e"],["/200万，啪，没了。。。。/index.html","cb46b53811c4fb7da65da572eac03128"],["/2018ECCV-Paper-DL/index.html","75e35db48bd61aa3ab9817ae1f6e48be"],["/2021年固态硬盘选购最新攻略（小白避坑指南）/index.html","ff4716f558c2862820249461b8af3c42"],["/2021机械键盘推荐/index.html","9fbea68cde4abe2024d8d556acbcbbb5"],["/2025-07-15/index.html","b7bb96fbb75d0b18c344a0eae66f41a2"],["/27岁了/index.html","9f60ad9f92898f16eb6790fdd49a17bc"],["/3D-Convolutional-Neural-Networks-for-Human-Action-Recognition/index.html","fc6aef9320b25e4b9a98640924477931"],["/3D-Deeply-Supervised-Network-for-Automatic-Liver-Segmentation-from-CT-Volumes/index.html","d4909e1690507d31d5c8373315b46d6c"],["/3D-Unet-Experiment-notes/index.html","b1e81b6065aa28fc3f75676f3339e529"],["/4-Software/index.html","6f1e3dd8723aba448e2ae4fd0e9cd457"],["/6-website/index.html","31801769854f52f4b7e401d6fc6fc2b8"],["/7-terminal-tools/index.html","4390b1f68af73b8471123a9b7db75036"],["/AIGC中典型的深度学习网络/index.html","05ec357d72e3531903a8a86efa67b565"],["/Agency-model/index.html","09bd37ce0db54a147282a869c8e71f3f"],["/Algorithm-brush-notes/index.html","b252b96d4d1a124922a23fa0ab94b7f7"],["/Ali-recruits/index.html","8b283d037458731803edd160b57d8fa0"],["/Android-VPN/index.html","2f112b62b1636542587b9d61cfea2692"],["/Android-open-internet/index.html","11f8f4b8f17dac051fb6eb9437a9b173"],["/Appearance-mode/index.html","932a571fa13644b04bcda172acc99499"],["/Backtracking/index.html","c59882f4bbdba7b43aad111ff89bed32"],["/Baidu-Sao-operation/index.html","91909ef9c9d3be363f105d596a7ceb56"],["/Batch-Normalization/index.html","2d4aa0d89f9acc67c88a5096013779f1"],["/Best-AI-tools/index.html","23c2696b5b05e159c1cceb552925d30e"],["/Bias-and-Variance/index.html","c7fb678ad13fdbea71e0b2f4f31bce47"],["/Binary-tree-traversal/index.html","e658e26bec4dea11634fee68a1283100"],["/Branch-and-bound/index.html","e46b0ce23bc591586705eb8f06262f80"],["/Buying-computer-for-the-first-time/index.html","8931262ad2a5a9a2f37095d36641e05b"],["/B站向北邮道歉！/index.html","60e7a5c85580b75f9797200fe8356799"],["/C++-string-function/index.html","ddf031185086fa640dce9d43a746981f"],["/C-Java-DevelopTools/index.html","a6f5c6dc7dfaf31c328371f24e79fbcc"],["/CS-Classic-Books/index.html","303b72bd04609801951fcb49d11f8621"],["/CS-network/index.html","ae41efade5c46e332fffd9e97ce60d7f"],["/CSBook001/index.html","a7f40725ea311c98554d662896ad401a"],["/CSBook002/index.html","c19771831a6727242bca4b1e43db499f"],["/CSBook003/index.html","a1d768bdf01d87e961657aef6c1272bd"],["/CSBook004/index.html","5ba8e23a33055116bf7bf7697737b3f0"],["/CSBook005/index.html","f0cd74f7a9be2d511ed30d79ddd1a089"],["/CSBook006/index.html","80ba5f9c2dac0a335ec902eadc4254ab"],["/CSBook007/index.html","e19f3ee960cb0e1ea9734b96915aef72"],["/CSBook008/index.html","cee669a8a9aef0b98617606121d083e1"],["/CSBook009/index.html","84a4fb31933f33857631594e5706234d"],["/CSBook010/index.html","3aa2631cfdb15753a2caabb29e2f211c"],["/CSBook011/index.html","748059e1ea94e3ce71c9f277733786c3"],["/CSBook012/index.html","69d4344b5a6dadb842455b1c53e89577"],["/Changsha-really-fragrant/index.html","aff60cdf6e780b09f3782b5e725f5d76"],["/ChatGPT-VPN/index.html","d23ef72837b12ea60b90d93bf1e6d9e0"],["/ChatGPT/index.html","6daf24b806d5fc19270f33b47695de0f"],["/ChatGPT！王炸级更新！！！/index.html","e2f5b5234bb288149e183ec156a0067f"],["/Chrome-crx/index.html","0fab671135840a2405117bcdcf885354"],["/ClashForWindows/index.html","4872d4664133e857fdd6dbf909c771a9"],["/Computer-Classic-Books/index.html","acb4f411564e79fb9380cf79dc2ddfd0"],["/Computer-for-another-major/index.html","bc7e270bc9e0ca0ed3c0fd1d9e0ee643"],["/Conditional-confrontation-network/index.html","96cbda2df49e41135c021f3aa220dacf"],["/DNN/index.html","ae67bd481d1f59e8d2e3169c4ce8103d"],["/DSN-segmentation-liver-experiment-summary/index.html","9001b609d47f63ec71b7467970e976e2"],["/Data-enhancement-elastic-deformation/index.html","9a94d44fc99037f487e89727091f2ead"],["/Decorative-pattern/index.html","af396731d6f32a9d21bb30cc425edbb3"],["/Deep-Learning/index.html","fa8d0ed57d75b5bd59e036e07816b122"],["/Deep-learning-and-medical-image-analysis/index.html","53f4445fcb7e2a45d7b7e23aec67c72e"],["/Deeply-Supervised-Nets/index.html","aac16655a2ad4c8d68a1d961e727297c"],["/Deformation-model-based-sparse-representation/index.html","b77ea92c3e0c84a64a5d4760ef696340"],["/Discriminative-and-Generative-model/index.html","5dfc57e9223286424586e97b1432182f"],["/Distributed-transaction/index.html","f469f0dd5f6dcd194b3e536383a7a142"],["/Divide-and-conquer-algorithm/index.html","00d7d17c5d78883e115f8b8673d74a69"],["/Dll/index.html","f0da44c1831c5018993bb34fd1278540"],["/Dynamic-programming-algorithm/index.html","b2c35f580a80f98b79770dd331dee1fd"],["/E-book-download-commonly-used-by-programmers/index.html","c1f0bc099fd21d4910fde73fb4a38e86"],["/EditPlus软件的安装、激活和配置过程分享/index.html","9e4a31a8a8108f3bc1f0f1ef494c244d"],["/Eight-sorting-algorithms/index.html","3089679f71a28d904d1e80455c81eae8"],["/Encryption-Algorithm/index.html","127d6bcf6a4c041f556f51a853530ef8"],["/Eolink/index.html","c16f885ffde62c1fbdbbe73d02ceec65"],["/Factory-and-strategy-mode/index.html","bc7220f470ea1bc5026f81d5dc9fc096"],["/Foreign-technology-blog-community/index.html","7a50eca48131ed8449d4f76b6ccaa7c2"],["/Functional-model/index.html","3a1bbf9c70329a2658490a885823c11d"],["/Fund-type/index.html","543756af9e52f9f3f66e748c57a254ad"],["/GPT-4o/index.html","eb106693f38f3424ffe17cf7cc417392"],["/GPU-medical-image-processing/index.html","79021b6e524bb975d004b0a4384ed751"],["/Gemini/index.html","abfa6200320bcb04bc9bb59d9c0550c8"],["/Generative-Model-of-Unsupervised-Learning/index.html","121d4e58dd2fa07923c5e147c5ee71c6"],["/Git-Learning/index.html","5c73864c7c3fd2a94d766b1466627f20"],["/GitHub-2FA/index.html","8fe3f740988782ac36f119b0488bf0ca"],["/GitHub万赞，程序员必看操作系统总结！/index.html","c451cf9b0f4ea0afb0c1a001fffb471f"],["/Golang-book-recommend/index.html","51952e1059888ee1338014599b543c31"],["/Golang-learning/index.html","adf28ca3cee1a50f9d3f12c9e0b0f14e"],["/Gradient-descent-optimization/index.html","c86effbab61673a4b2dd134ab2d10649"],["/Greedy-Algorithm/index.html","e92c8aff0e2ea6c5682e3e1cbc68b478"],["/HK-bank/index.html","2e0cc8fd9dc3545b2e067da0c05fdc4c"],["/Head-to-head/index.html","96b5c9bbaa92fe5ea72dfe833eb66d51"],["/HexoPage/index.html","570404905fd5f75c6bd750ee7adf5ed1"],["/HistCite-Pro/index.html","5dc0ebaccdad051a5f6fdb9ecfc02500"],["/How-does-the-program-run/index.html","1b942df974dd75fe4081a82bb73a951f"],["/How-to-judge-whether-technologyisreliable/index.html","8e4e54e70ca5e3937e4cbe5341fd9d69"],["/How-to-learn-design-patterns/index.html","926e1a438ed0eedb304f5f15be2a8d44"],["/How-to-learn-design-patterns？/index.html","ca3b4795897b52f8a5a51e23b14d9976"],["/How-to-teach-yourself-programming/index.html","6fc3743c9e90553e4d593f108d04955f"],["/How2learn-Python？/index.html","7c346f83861031fe706a4050fbd738b0"],["/IDEA-shortcut-key/index.html","52a17661929a454257876dd32e564199"],["/IT-interview-basic/index.html","2cdfd8669bebbba1279e92e285d76e98"],["/ITK-VS-install/index.html","6c8c851c702e92a463451f40303a5bc5"],["/ITK-VTK-ItkVtkGlue/index.html","f5bf327fd4100e5074f66718775a0845"],["/Image-processing-plus-noise/index.html","7b4da5dfd83bbf9f5d36a5fb45137afc"],["/Inception-Going-Deeper-with-Convolution/index.html","a86448efc507977466853d63e25e235c"],["/Java-GC/index.html","3035feee1966e88fdc4c3ebd3ac38612"],["/Java-Servlet/index.html","0465fb3ccba9196d9775c58f299d83bd"],["/Java-array-and-collection-sorting/index.html","a5cf38b5fe9c8842bda269881b5099a7"],["/Java-development-tools/index.html","4de29c77c08251c3947d880bad17216c"],["/Java-eight-data-types/index.html","c1ef5b9a95012599086d7b41c9c15d50"],["/Java-interview01/index.html","0bf81a02075b86ec7ecc2452d3569a12"],["/Java-interview02/index.html","8dbaeab71534be7dee3792bd7ffe2f6e"],["/Java-interview03/index.html","af836b1b169cfca5d0b8de085b46e012"],["/Java-learing-map/index.html","a5f2f6928024dd552b2ed856440a70c9"],["/Java-learning-route-map/index.html","40e3154118f004aec952103e73577b69"],["/Java-memory-area/index.html","ec104f236ec05934a89c796cd676bdf8"],["/Java-memory-model/index.html","d26307031f35237eff2879f0960f77e8"],["/Java-multithreaded-learning/index.html","1f8f5af32d142b484fcf45096643ee0c"],["/Java-project/index.html","f918146a91dde44dafd372f6e2eefd61"],["/JavaWeb-Chinese-Garbled/index.html","938552ee2491d82e60c820d68a605c2c"],["/Java还是C++？/index.html","940990e0332c27eb4b0d850da180aef6"],["/Kaggle5-step-guide/index.html","3ba59055f6b9429f6dc7523fcf9d5a4c"],["/Knowledge-points-of-Java-garbage-collection/index.html","ed36c0212da6262a309f62d01a8317ac"],["/Layoffs-and-Hiring/index.html","291ae2ade252c8ab58a8ed62efcbe043"],["/Linear-regression-of-machine-learning/index.html","390e218867e62bc407bbef7c98b981de"],["/Linux-Compile-C/index.html","b30afcf221e366808a87a5b9c57c2804"],["/Linux-ITK/index.html","309e80c647f2d0b5eb73bda349dc8a16"],["/Liver-segmentation-of-sparse-components/index.html","baf3a488d0156d427afa390b34a42aa4"],["/ML-EBook-paper/index.html","486aab6f5103d0ea1b4cad3603ab0524"],["/Map-uses-multiple-maps/index.html","ba8ad5715f74bf41c2abc5f84cd4c933"],["/Matlab-Graph-cut/index.html","9642b5614a0bc90ce9db8002abe50068"],["/Maximum-Likelihood-to-EM-algorithm/index.html","1d6d937b7ac6735b4d3b178b43a81be1"],["/Mean filter and median filter denoising/index.html","a1d2f01687de1086ccbe0239bfced2f9"],["/Medical-Data-for-Machine-Learning/index.html","e8d2d36ec76d1ca862ecaee34acbe769"],["/Medical-image-analysis-deep-learning/index.html","4fbe8eefb90e87cf027f603c54b4b704"],["/Medical-scan-image-processing/index.html","217d83d0eaf51c9f5664d0cfc52b9f22"],["/Merge-sort-algorithm/index.html","d1041960a5c64309fa81a02d2115c8b4"],["/Monthly-income-2W/index.html","f6d46b962bbdf76febe2a701da967cdc"],["/Mysql-database/index.html","49087d599efa8482a8f28afb8c87ef3f"],["/Neighbor-Embedding/index.html","c502b812165f3f8a1be2608b0d92324b"],["/Neighborhood-approximate-random-forest/index.html","e1ac55d53ae9e02848160fef208cc3c5"],["/Net-and-official-documents/index.html","4d0fcaa0e344cae4bf21e377f7e37766"],["/Netflix-VPN/index.html","6b106850b6556b7d05982984b44de97b"],["/Network-principle/index.html","f7b5b35e661c9933bedcd35c30676743"],["/New-Hong-Kong-stocks/index.html","8f7712d235d987249522edfa618759bc"],["/Nice-to-meet-you/index.html","41075571b03ad636818a4288d82f1678"],["/OS-processes-threads/index.html","e759a4f070b034fd41feaa58a4caa0c3"],["/OS-run-environment/index.html","916303752f6bf9b8f59312fed8c8a681"],["/Open-Internet/index.html","a6282191962bb2a4c4dda32b889e0d61"],["/Open-Internet2/index.html","3756e19bfa9ec5c7b31d857745549f22"],["/Open-source-community-and-rewriting-website/index.html","2f4fb52fed679e6e092304ee806d3b8e"],["/Panoramic-image-stitching-based-on-SIFT-features/index.html","b0e6a4ea92626a0905f2ce959502dda5"],["/Parzen-and-KNE/index.html","5a50f7a582cde696b7c0f87cefe14fbc"],["/Personal-technology-blog-site/index.html","f9d95157037d403e922f192eec92d1f4"],["/PicGo-Gitee/index.html","f75ebe094fdc6ddc95dec744035be8d1"],["/Programmer-treasure-chest/index.html","ef065e2eefb5407ac68705f3c3b324ca"],["/Prototype-mode/index.html","a583d6c75998c9375026614bcbd528e7"],["/Python-base/index.html","243e85649dc50b098008b06e67c64719"],["/Python-crawler/index.html","82fe21b7253dd89f69f1a557a768c3d2"],["/Resume-revision-suggestions/index.html","2eb6a6995189973a790b89585c6dcf56"],["/SEO01/index.html","307d387d21dd3eb557b389cfc1346201"],["/SEO02/index.html","fe0d32bdd35bdbed198686ecc1c8d8ce"],["/SPHARMPDM-MEPP/index.html","95a985e925d78b60b20673a7bc67b06f"],["/SVM/index.html","74a1f6f51554cbcaf0796665ea276932"],["/Seata/index.html","c46d17413fc0b7fcec4c55a8784f80f1"],["/Semi-supervised-learning/index.html","8374292e9c4f17b8ddfbfac1d32d5d74"],["/Sequential-model/index.html","00bcbb104b68113d41f6e81694d0a6fd"],["/Shape-Based-Human-Detection-and-Segmentation-via-Hierarchical-Part-TemplateMatching/index.html","e8e7a2f0bd2c32383487276120e80fb6"],["/Spring-basics/index.html","21840491db6633ada2b87711502a8226"],["/Spring-integrates-hibernate-Struts/index.html","7ac9c5ec3df4f6d3c8ca0c1d0ced47e8"],["/Structure-learning/index.html","4f47d5356398bf30eab27f0b74e31c88"],["/Suggestions-for-self-study-of-computers/index.html","1ebc11d6cb2526770aa632669391abec"],["/Summaryof-HongKongStock-Account-Opening-Links/index.html","2e52e2ba85ef0015353c5f0533e444f5"],["/TCPIP-detailed/index.html","46e06b85b27b0e1af160acc874f6d033"],["/Telegram-VPN/index.html","99ddc689da34224c7d386e16ebcdfed8"],["/The-essence-of-shopping-festival/index.html","7fc457fc6eff7c410c1e0149a9f347a3"],["/The-most-important-investment-in-life/index.html","f8597ff2f0a1af27cef5105b8384dc6b"],["/The-most-successful-nvestment/index.html","46c1d9578ea30961d1efad7952a08494"],["/Transfer-Learning/index.html","c085373d6fbc5776d5c3335febf4fa09"],["/Transfer-to-computer-major/index.html","85c7a08e3eb2a784eabc424f84baf6e9"],["/UNet-Convolutional-Networks-for-Biomedical-Image-Segmentation/index.html","7fa7995e580373e579a5fa1c095ad9cc"],["/Ubuntu-install-sougou/index.html","648c7684e48bb8228d9428fc512138a6"],["/Understanding-of-paying-for-knowledge/index.html","3002bc1ca04bfd6ac7bfa718fb6201c2"],["/Unsupervised-Learning-Linear-Dimension-Reduction/index.html","4d948a797b1f1e61fa6d2fb92d74984e"],["/VPN-HELP/index.html","f4ed4a807b84eaa5d5c04be5c23723a9"],["/VPN2025/index.html","e2bbcaae2724bdd303462960adc8ed8e"],["/VPN2026/index.html","a775508b384beebd04699bb444e363ad"],["/VTK01/index.html","9c982544dc56675524cd46a0cac6cea3"],["/VTK02/index.html","d24cfdda60d8ed1e86045ae0dfcc420e"],["/VTK03/index.html","e6f21c8e6e024a8b9aca580e8e2e22a7"],["/VTKRead-write/index.html","99eeb369e009cba59f71ca93d4fa9208"],["/We-are-all-good-kids/index.html","ea6e3e66e658f1fa150db108848e209f"],["/WeChat-80/index.html","379b4ff110a70865b5ef31afa894b124"],["/WeChat-red-envelope-cover/index.html","6e76c9ad793f5968ec53d177011d0597"],["/What-is-crawler/index.html","461b958b4f7f650656e915cab0de8bb2"],["/Win-OpenInternet/index.html","89ba8aeece7105ba51f147b0a4483c55"],["/Windows11-2kfans/index.html","30d0e0f7f3310bceb311a135641740f3"],["/Word-Embedding/index.html","28b21444a0a041d374dd7088c0b857cf"],["/YuanShikai-and-his-Beiyang/index.html","713bfad1c8881177b3039d07cc9279db"],["/Zero-copy/index.html","1f56ef51ce15a2376ada0ee3427d5bd9"],["/about-keras-model/index.html","f1de34756b2d11feba574f32fc993707"],["/about/index.html","2ca81efded9a28348149c97e582cfc35"],["/algorithm/index.html","01f0c38b78bae013e70bf42940c1efc2"],["/alibaba-Java/index.html","a5fd7aa393f3e42b870d73173bc0d413"],["/archives/2020/01/index.html","3d8a5d41b2a328ef9d24048e7c3c9795"],["/archives/2020/09/index.html","6793f4149f93baa273b3a365f97a39a4"],["/archives/2020/10/index.html","414caf527d68b729f1781f3eca34c494"],["/archives/2020/11/index.html","4e1e0655fcd53725a343188c2c9b8b56"],["/archives/2020/11/page/2/index.html","275aac805ad2994c7241211ee7f551e4"],["/archives/2020/11/page/3/index.html","826d59c929bd91ae14efc95793586226"],["/archives/2020/11/page/4/index.html","ccea29e45a484529fc23713654d868b5"],["/archives/2020/11/page/5/index.html","0733f779543a907816072399a1e93fc7"],["/archives/2020/11/page/6/index.html","dd94741eb21956c95589cd50cad969f4"],["/archives/2020/12/index.html","0aa63762dd898c7cb9898e763af031b3"],["/archives/2020/12/page/2/index.html","116bf9598fa5ca818ddc8ca3cf99b3c3"],["/archives/2020/12/page/3/index.html","0bfb1c8f3a4fdd9b9830c1e983920d93"],["/archives/2020/12/page/4/index.html","edc762e55484dddbb9e2d69b71a2f5ab"],["/archives/2020/12/page/5/index.html","0b5dccc78fd654f4be217c7370199c28"],["/archives/2020/12/page/6/index.html","e566e87a21b947a89cfee327d3a0bc2e"],["/archives/2020/12/page/7/index.html","d2ef465a621a41d9b1ed8d5c32c14bf2"],["/archives/2020/12/page/8/index.html","cd49a960f04e435827903b9209be89c9"],["/archives/2020/index.html","e75cfcb286b97499db780e1ed93fb3c0"],["/archives/2020/page/10/index.html","f3e52aea33b1d54c6b014da6c20ca793"],["/archives/2020/page/11/index.html","0d453b7c2cb47cb24394cbdb13cbf6d1"],["/archives/2020/page/12/index.html","d0e46c804c0861564da4a31d28760ad9"],["/archives/2020/page/13/index.html","df3b059ea0d690fff546997a52f7341e"],["/archives/2020/page/14/index.html","8c6670ffc1109bc2d5457fae49cacda3"],["/archives/2020/page/2/index.html","f618870558d10835d701af53459a0e67"],["/archives/2020/page/3/index.html","173a9ebc98245d7635053267642c63db"],["/archives/2020/page/4/index.html","7806be41ec997440fcfa50ebfa2797c7"],["/archives/2020/page/5/index.html","d717840e8872ba692d4418c3552f71d9"],["/archives/2020/page/6/index.html","309e970eae8afc72b847b5739fd7967a"],["/archives/2020/page/7/index.html","f68cd312c76d28bb2bc50d30a8652226"],["/archives/2020/page/8/index.html","88fb468eb9eee11bf5f768d6175c379f"],["/archives/2020/page/9/index.html","6fa33e8be1837a4ea6521932bd593676"],["/archives/2021/01/index.html","9b70cac6012b2e681082e2486920f62d"],["/archives/2021/01/page/2/index.html","7f59a03d15209b8315276d336ba3e313"],["/archives/2021/01/page/3/index.html","ab06ed6dab13febc020e22d695a995c9"],["/archives/2021/02/index.html","53023742ddfe298820728f6462c4fda4"],["/archives/2021/03/index.html","aa3f1811c5493924500563969fd633c0"],["/archives/2021/03/page/2/index.html","84190fc72599da87f6bec2663ed25c0a"],["/archives/2021/04/index.html","9d3a5fd4b0be5a64ff53f13c200f4afa"],["/archives/2021/05/index.html","c7c04b47cd3397899554d342d4715328"],["/archives/2021/06/index.html","6624e753245d5eaca8704741ae9d19d7"],["/archives/2021/07/index.html","ec5e02ab2e5a150c17bdf34307f2828c"],["/archives/2021/08/index.html","8345378e40438de35efec78d74416976"],["/archives/2021/09/index.html","7587e4a4c876dfd7d3d94cebaf630a3f"],["/archives/2021/10/index.html","91c72f3d9631465a9c836f97407c6392"],["/archives/2021/11/index.html","5ea4b2bb5b59a7c33edf3ba83f6b8b0d"],["/archives/2021/12/index.html","a69193a85f295c3824b7b715ee5cc1f0"],["/archives/2021/index.html","d712e2b3a52a122b98d8974f2dc07b63"],["/archives/2021/page/10/index.html","10320ad39212aca73ab1b9e7c45515e9"],["/archives/2021/page/11/index.html","f4825974dc42b1685d19946d6da5ecca"],["/archives/2021/page/2/index.html","003108637a8bcb0b8bb13c1b4257cd4c"],["/archives/2021/page/3/index.html","67b1e32531e7757c60bb4019a397e1ed"],["/archives/2021/page/4/index.html","b168e4835a822bf88485735dec850168"],["/archives/2021/page/5/index.html","49664c0fdcd2052d9243ffd2f57addc8"],["/archives/2021/page/6/index.html","f5d27ce5927ea96a982903a8bb07dad8"],["/archives/2021/page/7/index.html","5eefb85f0e5d00e2197f5d84446fc7ce"],["/archives/2021/page/8/index.html","4a7b89a3ada726d3769f84e3236362a0"],["/archives/2021/page/9/index.html","c8faf40a4187cb0bd778f56674a283cd"],["/archives/2022/01/index.html","a29e85ae9428d4c3c6fdc6767dc2cfb0"],["/archives/2022/02/index.html","13eae6f0f25666465942af8c519544c4"],["/archives/2022/04/index.html","375412e963bf7b1831feb540f1ff0aed"],["/archives/2022/05/index.html","25404a9b0f603fe020b386eaa7e0300b"],["/archives/2022/12/index.html","e16c0ef2d820b505195393f2f2066470"],["/archives/2022/index.html","7f2643522306b4f382f81daee81b5f91"],["/archives/2023/01/index.html","8fe97c800c9e79bbe9e98456cf7cd45b"],["/archives/2023/02/index.html","815ae7649c3c8437b58e1f2df4df21c8"],["/archives/2023/03/index.html","707e7eb7e8cf3dd6de93ba15cdbf121b"],["/archives/2023/04/index.html","0ce4026c104b769c98d45f85f276580b"],["/archives/2023/06/index.html","c4f2c2ece6d5c77f53dbd385cc12c33f"],["/archives/2023/08/index.html","08af4ce6acaf9de6990921ec017477e6"],["/archives/2023/10/index.html","93703432b1d5627edf9c4b7870cd3433"],["/archives/2023/index.html","523974307d7d09c9b942be51e15c3c10"],["/archives/2023/page/2/index.html","5c38f3ac872a91a3f02bded5db76577a"],["/archives/2023/page/3/index.html","6f5a10267e6f538b8d037f6ca102ce27"],["/archives/2024/01/index.html","fb5c9ddfb64f2f2005616f1acfeb95eb"],["/archives/2024/02/index.html","6e480c88a01ecda5136942afb35770bc"],["/archives/2024/index.html","75197133a0038ae6c1551de93be32909"],["/archives/2025/06/index.html","bb06a9c6368d199db19af97c822ccfeb"],["/archives/2025/07/index.html","7554fdbb935fef1983c635225158607f"],["/archives/2025/08/index.html","dbf9ec619f81ca800493d982dd3b9d0c"],["/archives/2025/09/index.html","0b4bae1e6b364b71411a53c7022d8ce6"],["/archives/2025/10/index.html","bf8b8f334d1afd484454822a8fd8451e"],["/archives/2025/11/index.html","779dd2990018443d7d72aa501bf85fb3"],["/archives/2025/11/page/2/index.html","d3f90cf45c1f61a3f466d9dab692ce1a"],["/archives/2025/12/index.html","ae2cec07fd7a8ea3cf93521e9b3072b8"],["/archives/2025/index.html","484db3f044bb3b7b14c5c0a1b46307c7"],["/archives/2025/page/2/index.html","80f40f1e457e9e07b9df22f54a8080f4"],["/archives/2025/page/3/index.html","8be4f42367741f2a12c690fb6c4614b9"],["/archives/2025/page/4/index.html","f11ed60da9654a6cab5a70b58a06cec5"],["/archives/2025/page/5/index.html","76db0d645c5d4f718f77f60e7198816c"],["/archives/2028/02/index.html","b7ab4406db37710a61554c2ee98bee84"],["/archives/2028/index.html","8d20c9fd78ac28a33db39f7e0b00b37e"],["/archives/index.html","fb578d7aa3eba05b79ab447e153ee1b2"],["/archives/page/10/index.html","698bb77ce3a796d02e11283f84da96ea"],["/archives/page/11/index.html","3113821da73850a4773334809f151365"],["/archives/page/12/index.html","92f25e6b54a0708e889fc3a231f8b528"],["/archives/page/13/index.html","2460f59df52a2ad8211cdcfaf9bb0316"],["/archives/page/14/index.html","8e78e2bad509aa742dc83a5d14708dde"],["/archives/page/15/index.html","25628bde2e8ad0b0e485cd94714791aa"],["/archives/page/16/index.html","9aba4da7896e59e4085ee339eef81c77"],["/archives/page/17/index.html","02b22c01046b176437663a6d9c339b56"],["/archives/page/18/index.html","e15a5ddc1457144296b491144ca6837d"],["/archives/page/19/index.html","87e70efef44a6064db70fbdfe5422901"],["/archives/page/2/index.html","f4aea6b118f3263c159d77bc231a3502"],["/archives/page/20/index.html","5905805b7e86b0c8ddb39761262c83f4"],["/archives/page/21/index.html","eb57531942c1d0137d7fc2bb652e0cc8"],["/archives/page/22/index.html","e4762c4bccec66b6b526d592583f78c1"],["/archives/page/23/index.html","1796e70b498ff7db055e3d063afe9b48"],["/archives/page/24/index.html","9b5f94be281515e32bc4f43e9c319893"],["/archives/page/25/index.html","b40e30dd872316e7de4489e4164e2f72"],["/archives/page/26/index.html","5c1ee95966870034b11338e15563295f"],["/archives/page/27/index.html","0ed1db82b4b8b0b8bbc27f7421b89f01"],["/archives/page/28/index.html","b7168bd3f4412a19c21e907dd575ed16"],["/archives/page/29/index.html","5a7bb4f97b1e432495dee7d0f1f67eb7"],["/archives/page/3/index.html","5a404c64e1460d1fc5bd3b661f26bc62"],["/archives/page/30/index.html","6daad8ad9f407793ba2302e5da5de3e2"],["/archives/page/31/index.html","9f37668bd25a7bd693e706729f1a4eff"],["/archives/page/32/index.html","651e817c70f617a54de6ffcbc6d2684d"],["/archives/page/4/index.html","99cbdf2dffba080bc1b141a21c31ebb0"],["/archives/page/5/index.html","2c6210e0bd28de41b530a17bbb1bde8d"],["/archives/page/6/index.html","47b1034b41f0d3a49dad148b2ad983e9"],["/archives/page/7/index.html","668280e5408a7bc42791abc02844cc2b"],["/archives/page/8/index.html","710dca4ea79c78be7981738056120ac5"],["/archives/page/9/index.html","3200ecbcad0b67131bca229da277b9d9"],["/baidu-search/index.html","7466a78ef91397fcd53a59f41c81d9f3"],["/baidu_verify_code-Hh2fKNlEB1.html","986037f407d7c12ea7e9b0234b9a3829"],["/be-a-programmer-instead-of-a-code-farmer/index.html","89dc098f94453ef93216331cc70a7062"],["/bought-a-house/index.html","3a9c0d0794b85672b8cfc7987e5eb58d"],["/categories/C与C✙✙/index.html","816f24c55ec7d0184ec9f2ceae064440"],["/categories/Go语言/index.html","610cbcb957538aa36f4b03e10731488f"],["/categories/ITK与VTK/index.html","36e92c183f6b7f68c226dd55e2e5b7bf"],["/categories/Java/index.html","f5deff3676600a3e7fd72441d642b6ff"],["/categories/Java/page/2/index.html","c5d5385f53a08a78a0b56a9a5e578b77"],["/categories/Java/page/3/index.html","cdcec96cf99a823df566af1f1878636f"],["/categories/Linux/index.html","41badbdf1da82dbddf6265b99da164ed"],["/categories/PLC/index.html","033f46ed279d10e2a1a7bc2bf1c4ed09"],["/categories/Python/index.html","3e83b3af7551351d06308c62b7c75744"],["/categories/SEO教程/index.html","1206231dc518cfa170b2ca43837bf3d6"],["/categories/index.html","a2dd13b7ee97a3848ea0ae1a104b19e0"],["/categories/图像处理与机器学习/index.html","12fe0072ec5e901e2b961d1918bbb9fc"],["/categories/图像处理与机器学习/page/2/index.html","a6dca0425d6b05325566f511dd5cee78"],["/categories/图像处理与机器学习/page/3/index.html","c74e3a5821d75eb5163808134c04b1de"],["/categories/图像处理与机器学习/page/4/index.html","2b1e3a21988843b5f9fc60f5963f95fc"],["/categories/图像处理与机器学习/page/5/index.html","3f2816349c52b526681c5a9de4ed9fef"],["/categories/图像处理与机器学习/page/6/index.html","d281eadcd3542699cad0249718fbe068"],["/categories/工具/index.html","b5775077d8b62c5747a9c673567d2625"],["/categories/工具/page/2/index.html","b1d9e969a820a0925793b8ac1c40d315"],["/categories/技术以外/index.html","d19969777f083687c15d0356faa712a3"],["/categories/技术以外/page/2/index.html","b096e6d8df7fc894e1c0ec54f2210e7a"],["/categories/技术以外/page/3/index.html","aa06cf314b0593298db7241ebf6f03fc"],["/categories/技术以外/page/4/index.html","1fcd2ce09c0f4fbbbe6217b8de55e6eb"],["/categories/技术以外/page/5/index.html","799ee11c57bf8d3d0c3f88acdce4ea47"],["/categories/技术以外/page/6/index.html","4aa204f513bdc7b5e3ed3db8a1f35661"],["/categories/技术以外/page/7/index.html","1fccc53bddc45f9f94a999629d47d5c7"],["/categories/技术以外/page/8/index.html","085fdf8940d8404cb831ed6dd64d2d95"],["/categories/技术以外/page/9/index.html","9d1f3fa8946f32032b37a39e50f240ac"],["/categories/数据结构与算法/index.html","d0516957679f50ef50d1b246de0fb913"],["/categories/数据结构与算法/page/2/index.html","49ae370b795fdd91899046c1a54f374e"],["/categories/科学上网/index.html","321368a5c191783a5f7cb93403178a31"],["/categories/科学上网/page/2/index.html","18b0efbe99a284ac6d06e84a0a61618a"],["/categories/科学上网/page/3/index.html","e8e1dd68849bdd8b74ee5f20645583b1"],["/categories/科学上网/page/4/index.html","d1b115b8edbb312f12f1905bb0a57c05"],["/categories/编程经验/index.html","f86df6db31e5eabf6139dea2b65d1cdd"],["/categories/编程资料/index.html","79c65f4eedeadc47dc94c3a681f75069"],["/categories/编程资料/page/2/index.html","79b7a96bec05527e569c5eb2bf533626"],["/categories/编程资料/page/3/index.html","0c3c28aa34ed60400dec8efbb2ff87ca"],["/categories/编程资料/page/4/index.html","c8234c3233d0fc5f3248c899f0044f31"],["/categories/计算机基础知识/index.html","108dbc4801ac72d1a819acfbcfd8ee33"],["/categories/计算机基础知识/page/2/index.html","ff59ae6e5e6e1b26039ee556d0b535fe"],["/categories/设计模式/index.html","aee04cb8c1c785a88157edd308af2022"],["/choose/index.html","1afcd447c4625c983ff5781462f24c96"],["/choose2/index.html","cb560da12c8f7b5df9d70bbfbf3587fe"],["/chrome-crx-intruduce/index.html","766f0fd1f93701d01739f11a30ded3f1"],["/clashvpn/index.html","c815219a3575a4cb1e4d0b5f4a1092dc"],["/coder-blog-website/index.html","1653d2888bbc2965ddaf938cd5d0ddf9"],["/coder-source/index.html","a155014c633d06bce85c340d8115336f"],["/coder-videos-website/index.html","59b2e0b8977cf1c3be9e6974db3a7401"],["/computer-book/index.html","6975593f7971719d83a3a0fb11d6784f"],["/computer-censorship/index.html","2a0bab332ac7362c1f1739546517633c"],["/computer-network01/index.html","9104f301c3ff2c5a5a27353add732111"],["/computer-network02/index.html","11cdf5e3a0263bf358984d97b02b287c"],["/css/main.css","bc32ad34ec4990d934c3c647bdb62f79"],["/database-Mysql/index.html","b282ba02a35b69c24ffecd92683097d7"],["/eclipse-lombok/index.html","e7b2316ab8a77f303184eb90e064c111"],["/fully-convolutional-networks-for-semantic-segmentation/index.html","f9fa72dd58ea0201826f0484f45c637c"],["/great-firewall/index.html","742899156e13141f31dbc7a823cb1bb0"],["/halfrost/index.html","f5c48c11df7e681ea0d0438126bbf634"],["/how-to-signup-chatgpt/index.html","b6cb6d364fd181920a83178494211591"],["/how-to-use-Gemini/index.html","ba8c4b68316abc950169e18e6f8d6d7b"],["/index.html","63ff92ff229a21e2698522985b8d8df2"],["/ios-open-internet/index.html","90bc85bfef3f81fe7affd89480ab4505"],["/iphone-open-internet/index.html","cdde17b21155831ddad166f35ece8c04"],["/itext-makes-pdf-form/index.html","4a23d995905887c31e05ca608025b117"],["/java-Set-Map/index.html","55837fc6ef00628529374fad2b280a8d"],["/javaweb-server-error-codes/index.html","531918660aac577163c07d0efce62c39"],["/javaweb-source-code/index.html","45f83be638f6379faccd0d185b27ce21"],["/js/lib/busuanzi.min.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/js/lib/lozad.min.js","47904d34a224931dd1b615c59a3dbe3b"],["/js/lib/prism/prism-coy.min.css","0ccad54d95845901ead59bfd3ecceb14"],["/js/lib/prism/prism-dark.min.css","a4711d2957d6605eb5682bdd228cf123"],["/js/lib/prism/prism-funky.min.css","efedcdccd7a9ab342d2d9cacd24920af"],["/js/lib/prism/prism-line-numbers.min.css","38e22e790c279bb56f9ec4b90a2a2d58"],["/js/lib/prism/prism-okaidia.min.css","5ac6f9de996fbec68aaa106dfb16e061"],["/js/lib/prism/prism-solarizedlight.min.css","ecc7e64d039873ffcf7fb27babdaeb5a"],["/js/lib/prism/prism-tomorrow.min.css","456af2a14ae4f5089939d5904ac40fe8"],["/js/lib/prism/prism-twilight.min.css","ebb5c355332a8cf9a1ce37a2a69d678f"],["/js/lib/prism/prism.min.css","a5234d614834658887cec6a9515890f8"],["/js/main.js","052d2b299d9c750afea8df0b802ab7c1"],["/keras+TensorBoard/index.html","bd03c21ae869e3f34369c8f6844eac62"],["/keras-beginner-guide/index.html","fabfc0836631116fbc1469aacd726727"],["/kmp-algorithms/index.html","c4e7007cedd8cc03f2549e8c1b867b4a"],["/leetcode-Java/index.html","5ae008e4980cdf533d8aee82c1dfd802"],["/links/index.html","36554ca28c0f1574959742f9cd53a321"],["/linux-java-opencv/index.html","b20d7edce905662684eacb3a431af0eb"],["/msb-source/index.html","b018ea9fde2fce23335014e3338f8fce"],["/online-BUG！/index.html","35ae9ac7bbccc021eaf4f5086facf015"],["/open-app/index.html","387200ab0074abe8367ce1fd412eb41a"],["/page/10/index.html","458e2957dbbaacbf9a64b95255dd16ba"],["/page/11/index.html","03c3d64f431813562095f791d797ab76"],["/page/12/index.html","82864e0eb82f602c0442085b48ccae6e"],["/page/13/index.html","c73e4cd8188613d2e0eabbecf0eb86b5"],["/page/14/index.html","c037749928a5a74cc7a20c5b8ee04aad"],["/page/15/index.html","3759493c5c343a9fe0a19647c6b1e0cc"],["/page/16/index.html","3e95f0343522b3020609525337fd436c"],["/page/17/index.html","6526fec427c0e6197b4ae545b9f4deb3"],["/page/18/index.html","6370798f2817eccd650bd7f222463b68"],["/page/19/index.html","519cbaaa94fb207cca501055bc966fb1"],["/page/2/index.html","3f3f143794e3c0a0514da16012e52b8a"],["/page/20/index.html","7f70a9f24f1ad9cd1774a19d6379210a"],["/page/21/index.html","763d177bbf80945991299f8606c83302"],["/page/22/index.html","a6853ee52c9c61c92b2ae840ea0aff04"],["/page/23/index.html","d3c4987cc38ca085ea46cdec847a6208"],["/page/24/index.html","d5610ec1130d32636717bcc6b41856c3"],["/page/25/index.html","93dd892a29b08f31bc16d93a7d0a65e3"],["/page/26/index.html","bb63cd24c1f43707a549d95d574f76ae"],["/page/27/index.html","07e690df1a0dbb0536aab5cd94980236"],["/page/28/index.html","ddc534b8cb5516b7162f223b74b9df93"],["/page/29/index.html","449b006104877876e0858688ca3f70e6"],["/page/3/index.html","0ca40dc423df0b2c84e9723ad5787d35"],["/page/30/index.html","6fdcf74a0df79401214c585208ae4916"],["/page/31/index.html","abbc8aa624c7f45b75a77095a3fb5c84"],["/page/32/index.html","1ee8bee84433ed981b9625ffa3ace273"],["/page/4/index.html","0f5a358b04ee6fcf4fc48ae418981c37"],["/page/5/index.html","86e719f4b5dc24c5f8034d6dd0b7fe6e"],["/page/6/index.html","772e9ccf9ce3b8313cb67ef392a09bb7"],["/page/7/index.html","1563108c98333ad68647aa2a8e0eb551"],["/page/8/index.html","3f74e2272d1683cb6f26e2e351652b48"],["/page/9/index.html","16e8074a732e7a9dff876f30712bd782"],["/pandas-data-preprocessing/index.html","c3d6b2918adb7920648ddd19035f33ee"],["/phone-win-open-Internet/index.html","ab44832eedb0e35bb2b5ff8be5f9923b"],["/popcorn/index.html","be874933bc16bc2d7d070b6cbfce1035"],["/python-Blog/index.html","aad6d2e773caf3878a8cfde60e31a1b5"],["/python-yeild/index.html","60600921f1fa5a58147cd26395c906da"],["/python爬虫教程/index.html","52e3f5b3b3e69fec6c4314737d161553"],["/software-copyright/index.html","622672d7dcc02374d857f4f118d5e3c6"],["/sw-register.js","9f136ae12108115e953b35d9b3033a2d"],["/tags/AI/index.html","a38f117c14f92f8e3e2cb155a392e513"],["/tags/API/index.html","76203145f8a8d287b89f0c33f6d05f4c"],["/tags/C-图书/index.html","ffe6fc3c2616cd656e39ae2f84bd7e3a"],["/tags/C/index.html","97d35a6e3673f632c8cfc632cb2eae2c"],["/tags/CNN/index.html","7d99e636c2007be78d700c4082f3cdae"],["/tags/Chrome/index.html","bb2bb55e30eed5a3b537f5a81fe2fdb4"],["/tags/C✙✙/index.html","602b33253c5735bf652a6f7211712390"],["/tags/C语言/index.html","253c64a025811db502bbedf652316f32"],["/tags/C语言图书/index.html","212c10c76c26e11e0bf95c1c0cf7738a"],["/tags/DSN/index.html","2ac6816310564ab96b9645e9f3c2a207"],["/tags/Dll/index.html","a04264e6cb144e782bf1fccce3a4dd0d"],["/tags/ECCV/index.html","e785a9e7db5aa685aca87b3e9ff849f1"],["/tags/EM算法/index.html","22d2f24e296f145f08d0c02eb9b71bbc"],["/tags/Eolink/index.html","97bb3e1646a7de6921390e49325f5d44"],["/tags/Gitee/index.html","9967a4fe258d832efd9e510ef8a8fac7"],["/tags/Go语言/index.html","942039bc8d2bfacf2bcd8aee439e91a3"],["/tags/Graph/index.html","0da65d6bbb27aeed2216fa1e914552ee"],["/tags/HTTPS/index.html","a70482f61b6302503bd5a170fa2660e7"],["/tags/ITK/index.html","111e7e9c094ac9926c0815e246f18729"],["/tags/ItkVtkGlue/index.html","8d92fe48ced7a6c882c1fdc81cb7dcdf"],["/tags/JMM/index.html","c648a00b7b590620595eec5a31031a18"],["/tags/JVM/index.html","a910fd12fb4d7e57ceec22e7f2c349dd"],["/tags/Java/index.html","eeb0be5896a4dfede41b8980b8a3a5ec"],["/tags/Java/page/2/index.html","ce01ff50d2ed422bbed0ff11c49e80b7"],["/tags/Java/page/3/index.html","a6118bff7c01ccad9290ba9679d07e8a"],["/tags/Java图书/index.html","1f0da58c4a86d3909c91640e0b4c99cc"],["/tags/Kaggle/index.html","30eb2002928387fb8387be398e162e2f"],["/tags/Keras/index.html","8f8e2ac63107116115493de64fe1210e"],["/tags/Linux/index.html","1d7898c7f2b2e5ca77b6554235b758b9"],["/tags/Linux图书/index.html","0c186a6a0de5b0322c99b550484b62f8"],["/tags/MEPP/index.html","0b276848bf633d76a752dd42f3072423"],["/tags/Map/index.html","65765fdb61f9ae922e8900a46f9a4f07"],["/tags/Matlab/index.html","9268dc96fddfab6a5ef44dfd2220bf7c"],["/tags/MongoDB/index.html","ee8408f8498c5e9520248979affbaa34"],["/tags/MySQL/index.html","02b4fa98616ecf06969ae12dbfcbce83"],["/tags/Parzen窗/index.html","deedfe5fc5ea214bf537abdefd648555"],["/tags/PicGo/index.html","3b5087a6b105d935f09a12f40ca98ad8"],["/tags/Python/index.html","767464c14f40fca96dab1a34d805b114"],["/tags/Python图书/index.html","24e193e0431ee3605686bb621e4e2eb0"],["/tags/SPHARM-PDM/index.html","1dd14a8b241dfe9ac11ad3377d3945a1"],["/tags/SVM/index.html","4c488939bda7422beb717d3e18af3a54"],["/tags/Seata/index.html","0b7c08a023b6395a1944dd78569c23c6"],["/tags/Servlet/index.html","020467002fc306374ebcbb9042b5db20"],["/tags/Sping/index.html","5b4d5d4fee7f050f9065c10008daf4da"],["/tags/Struts/index.html","20434979469bc82cad95c5665378f989"],["/tags/TCP-IP/index.html","7ee369253e53a38b50dabc36b96ffb85"],["/tags/Ubuntu/index.html","1c8b599b532d4c87789d40d350c8a0c7"],["/tags/Unet/index.html","15b26435af90ed6e82d526475790ba2b"],["/tags/VS/index.html","748405e29cb756376a4a59e1dd8f8e05"],["/tags/VTK/index.html","78dc6221575d18b4bb4bfab9e60a4089"],["/tags/Windows/index.html","e78aa342237b578380523bbb5d4acdaa"],["/tags/edit/index.html","e1070d8e4d6003ffdc8f1bfb860df20c"],["/tags/hibernate/index.html","34b27d9c5a83ab0c688c2102c777717b"],["/tags/index.html","5cf030d3b0fd7804e6f5a3743f7772b8"],["/tags/itext/index.html","59400fc974b28f9b19c3b6710b517cda"],["/tags/jdk/index.html","c8a9cb8058aad99858ca9d6b32272907"],["/tags/kmp/index.html","872bcab29e01c480901b0f62f048393f"],["/tags/k最近邻估计/index.html","5e4e83aa769359346776fe670d79aa80"],["/tags/lombok/index.html","cead25d21f6333e95181fb01d2899208"],["/tags/offer/index.html","90596deed33551e1c10fc333720c4c7a"],["/tags/opencv/index.html","d91876ed800719a82e8c325a41836764"],["/tags/pandas/index.html","1dacf2aaa558ab82256994bcc4dac147"],["/tags/string/index.html","f8c041551d205eac65215c8217fa3c6e"],["/tags/vim/index.html","c4bc80b0b837dfc2b6d54028d276705c"],["/tags/vtkPolyData/index.html","56b44669b57183dc80dd3967f00cb09f"],["/tags/web/index.html","3244221f43d9a808f95edf4941e3f64a"],["/tags/xshell/index.html","2a7a4500ad67ad34753142f2b8239562"],["/tags/yeild/index.html","7cfed3e4c45cdcdbcb78fd8346c48dc7"],["/tags/互联网/index.html","535d003646ed4234da4a426b87e98ed0"],["/tags/人工智能/index.html","9c64a72d8a35760a22a32291d51a7c3f"],["/tags/体绘制/index.html","1a2de70803d4c6844ec95a08775fbacd"],["/tags/全卷积网络/index.html","4e098f73dda66bb07aa040cce2ed1d5b"],["/tags/公众号/index.html","22a92895aa922afa9a593e8a361c568b"],["/tags/内存模型/index.html","a5c0ad4d7e61b373bf3883c4d6aebeff"],["/tags/内推/index.html","164e7ef9d16ab7e2d86012abfc2ff99f"],["/tags/函数/index.html","4b30b63f798170c7653fa2ffbfbcac9d"],["/tags/分布式/index.html","35d298d538bfef4fdd942b17711feda9"],["/tags/加密/index.html","5e27f22f6ab6b860fdb732b991e9c20a"],["/tags/医疗图像/index.html","9e9b247954ec51d7206d714830b75148"],["/tags/博客/index.html","64fe3f9a1d7cb4fe16d86f4cbd9816c8"],["/tags/图像数据/index.html","689009b0ca8da331d021a9ded8fe9096"],["/tags/图谱分割/index.html","6125600560280d334cdc1150dd193de2"],["/tags/垃圾回收/index.html","876ea93c4be1e81ef3c08ed18e19c79f"],["/tags/多线程/index.html","06f3ef382defb24d516e10e88dc570e1"],["/tags/字符串/index.html","47f310c2a563b77fd53420e11e366dfd"],["/tags/工具/index.html","4568fbbe37fc4302bce06ced5d1eba21"],["/tags/工具/page/2/index.html","fc54ab9f69865e26f577ea8dc83e03c0"],["/tags/弹性形变/index.html","1b3c3a4cf22e8c4cc185eebdc3f402fa"],["/tags/排序/index.html","0afa189ebe3c4b386f46c4581523b529"],["/tags/搜狗/index.html","bebad7118039795eb355512b82a5ce62"],["/tags/操作系统/index.html","99852811b3314e723f5bb1f2bc2237c0"],["/tags/数据库/index.html","b8fff9706be594327c23a88c569e78cf"],["/tags/数据类型/index.html","1b3f8f2f9938afc11ed078c7f5841593"],["/tags/数据结构/index.html","318e147c47825b940a84eff4f90b9309"],["/tags/最大似然/index.html","dec53f17d35fbf6a5a63e1208119d98f"],["/tags/机器学习/index.html","91e1d4c2d58d0563fda69e690ee98c95"],["/tags/机器学习/page/2/index.html","41cd21a4ec1f3581fdff435f7f91976e"],["/tags/机器学习/page/3/index.html","4e479ddaa4c78036d70d7cf6fa280520"],["/tags/机器学习/page/4/index.html","c36e73d7b6c7210a0acf3a1f7ff852be"],["/tags/机器学习/page/5/index.html","997f8d7e14143ecbf9c0ec9bfb002a79"],["/tags/树/index.html","f739db66478b79a44b24d5261ca02742"],["/tags/框架/index.html","56228c2addfd02eda137cd04c6abc562"],["/tags/求职/index.html","21e0390532dbab1d67c7136ae1775cf1"],["/tags/汇编语言/index.html","1ca753c7c4d06e83000e1134fcccfbaf"],["/tags/深度学习/index.html","6056c2f610bc5b0ff1c64af465a0d683"],["/tags/深度学习/page/2/index.html","8d473c14c4aa884592df979ad42811e0"],["/tags/深度学习/page/3/index.html","3f8516c4d3ad4d284e60cea6d844e21b"],["/tags/深度监督网络/index.html","f58133e12e4750acd3a420299284da5e"],["/tags/爬虫/index.html","cd62d5b92b0374c19ef08536ff565163"],["/tags/电子书下载/index.html","074d69b60a56d670255884fa9f342516"],["/tags/电子书下载/page/2/index.html","a9373d01554d5e9605e1fe86983598b7"],["/tags/程序员/index.html","8095b5d79a993fc6a269057af75ab216"],["/tags/程序员面试/index.html","1f5b3130d8c7805b630b390a4e6997c2"],["/tags/简历/index.html","f277627e3b52bde5b267dd81a133bf4c"],["/tags/算法/index.html","699617164805f4059332529b5121d680"],["/tags/算法/page/2/index.html","c0567e67a6b5ddaedde4ce1cd51881ca"],["/tags/算法/page/3/index.html","4a93c9e0d254b2693a16c4ac69ddeb15"],["/tags/线程/index.html","89ee9d41e38a7aae0fde6659adc8ec00"],["/tags/结构学习/index.html","ea4a66f5827b372f8a4b7f5322387546"],["/tags/编程/index.html","59812f043e7cce215f9ff67c63f7e654"],["/tags/网站/index.html","b1ee714361a4eda9e043b77c09e6686c"],["/tags/网站/page/2/index.html","83200b874c2f2e5549ab6dbfc5c41d6a"],["/tags/网络/index.html","52dfb3e39f219775496e90b8517dc8d0"],["/tags/网络原理/index.html","3735f835db5d684c8fdeaac05f7621a8"],["/tags/肝脏分割/index.html","fe25582caaa62ab5162c7cae1107cc2b"],["/tags/计算机/index.html","56c7501185b0ae0ac6f14d76ea32ea3f"],["/tags/计算机专业/index.html","63acea3af4be1eeb0182552177323e5f"],["/tags/计算机网络/index.html","6d0926e0486366dfef77f5dfc9f2be78"],["/tags/设计模式/index.html","9baefc7559df8cb602551878d93a9e33"],["/tags/贝叶斯/index.html","9412526fd7181dcfd7b59cb1251875c9"],["/tags/迁移学习/index.html","99c84189bd194da31539827f0ee90871"],["/tags/面试/index.html","fefe4a8e9a6d758b97e1e8771bd0cfcd"],["/the-way-of-pragram/index.html","8ae780f4c195de1dcb21c287b3995c12"],["/untiypro XL安装/index.html","a1b5188298ce24a3609155329343a776"],["/video-websites/index.html","d5ee753eaed1bfb6c87bc02bff5dcf16"],["/wechat-fans/index.html","e61c1c2f358d1ce83f3703d2e12990db"],["/window-run-VTK/index.html","f4c3dcdabf27630c0614784fcd7bae71"],["/xshell-connect-Linux/index.html","40a02199874300954b8ff98394e1dcef"],["/‌Accessing-the-Open-Internet/index.html","ccf3b90d6672abbbc9f5197b8081cbab"],["/《Java高并发编程详解》，去大厂必看！/index.html","8157a433d5294110aeecd17ed44f45b3"],["/一分钟没了 1.5W 。。。/index.html","f2ff0d7400109124c4c430fa39e9d04c"],["/一条高产爆款内容生产线/index.html","fc2d6b36c13da3d0dbc38f76324208de"],["/为高考学子推荐的六个就业前景广阔的专业/index.html","ac7230ec66cc52cc6b95680ca36fe7be"],["/互联网赚钱机器---社群/index.html","1da3824b928a05970dd50c54c8078057"],["/你们常用的工作方法和思考方式是什么？/index.html","e7f53f2d90d4607619548bdc9bd1f062"],["/关于环境配置的一些事/index.html","60e3a41512011b2697ebd1b491df8039"],["/准备了19w！搞事/index.html","bc211c16358912f2d9f64ac130168348"],["/几个很重要的感悟/index.html","a3b958333a5cb4acc26841d0fe9ed813"],["/分割ROI篇/index.html","4f9baf152a35ae0c249dd2d26e74a157"],["/分割精度说明/index.html","2b2a7fed256606d1a079d878786ede42"],["/分块程序执行/index.html","f15bc65cd98234322a9d73dae075bc67"],["/加班公司黑名单！！！/index.html","78e900ce9f4f2edd519582b4e48511e5"],["/卧槽，上知乎热搜了！/index.html","dbe50816a5f75ebadb8acfefc2ee6fa0"],["/卧槽，我的小破站爆了！/index.html","23c42349d8f40b3a1662d02c454694ca"],["/卧槽，我被盗版了/index.html","37a12da066d31270fcf07e4707e02614"],["/卧槽，还有985大学在大一上C语言课？？/index.html","58043d470e0f50397f0e383cc0ccf64a"],["/历年微软面试中出现的leetcode算法题/index.html","c91b8eea6b4e7d73743c05917c7923ee"],["/去特斯拉试车了/index.html","f7a11c16beda2796aae8e324bda61582"],["/吃苦的三种境界/index.html","da9a487d9541b7016538d8b14e7aa4dd"],["/哪本书适合推荐给 Java 初学者？/index.html","a9580949d5bd542009102ea4ed85be7d"],["/哪本入门级的学习数据库的书最值得推荐？/index.html","6651eacbc9be7eeccf9ed21997165acd"],["/国内外常用的AIGC模型/index.html","25ac97ee99e77c30edac7b8b93a27f94"],["/国庆假期/index.html","db41bb13b4871b613770aea7ab5fe92b"],["/图谱程序字典/index.html","64ae85e109071d89822f3e38334a24ce"],["/图谱训练与分割/index.html","954b69a9200f26ee01654130d118a02b"],["/宣布一件大事/index.html","4f544201101877663f381f4df8da6034"],["/小鹏P7i试驾体验/index.html","958e3d418599d82cf2946b449b9948ed"],["/微信PC版3.3.0内测更新，电脑可以刷朋友圈了/index.html","3e5438dcb0d752ec7806e7edb078a73c"],["/怎么更快的赚钱？/index.html","a2da13d2cf81c6693c217664be641ae2"],["/我毕业了/index.html","9969ceeb0782abe6b16e050a0a03fe9f"],["/我！真！的！找到了！爱上学习！的方法！/index.html","e99f6394b879dff98a3237ea78ded9d9"],["/户口的意义/index.html","4298a7aeac1e88a565c8dd6aa778f53d"],["/推荐两本经典算法书/index.html","c594f92fe7468ef378a6cd02bb8b9250"],["/推荐几个在线学习SQL的网站！/index.html","df2262648249c38108c1cad65f16c505"],["/搞了一个程序员成长晋级社群！/index.html","39caa6b06f1fdbc9458498e204c967be"],["/摘抄/index.html","b8364c86ef9256e3965197f5e6a6b992"],["/暴跌30心态崩了/index.html","9248b56c24893cfa6bbeb643d33d5d0a"],["/最近很火的ChatGPT到底该怎么玩？/index.html","a0fd91ffd4cde58b6c1bfe25ab9c2b91"],["/有哪些好看的日历可以买？/index.html","92c05307de6a2a05f142c27cb204997f"],["/服务器有啥用/index.html","9cbb6cf6456c269992bcddeb8f53b105"],["/来长沙了！/index.html","de848d06ccd56e8f557dffc047d5df61"],["/校招污点公司名单/index.html","fa2d173c1689215aade9304e374d91ca"],["/梭哈200多万/index.html","eb1d82237c172a9b1c5983463a99f9ba"],["/梯形图入门/index.html","019e6860662e0b1526af0d891bc6e8ea"],["/橙心优选，凉凉了！/index.html","5d284976e2611a95db0a8227048ea2d8"],["/比亚迪汉试驾体验/index.html","0d7f2d225b9c6f36f9931840330c7f8f"],["/清华转学成电，真的牛逼！/index.html","7ee37566ede34f750ba8204e788480f2"],["/滴滴程序员被亲戚鄙视：年薪八十万还不如二本教书的/index.html","636694cab75d4cc12f84bfed7e72269a"],["/社群！/index.html","c3bd21b8d9636a5d66b5aa0d40ee190d"],["/科学上网之VPN篇/index.html","784a65f9e36e3278cdc57378d9a2c6ac"],["/程序员必备的几个技能！看完你也是大神/index.html","5315af4c5801f166147b89fb2c2fb8c0"],["/程序员绕不去的槛，Linux！！！/index.html","945bed28c79fa949eaeaed6540fffedb"],["/蔚来ET5试驾体验/index.html","99de05b41bc03fea7eba58ac325d088d"],["/蔚来，牛逼！/index.html","ff89602df42dfdf53b933a696d0b96d7"],["/被录取了/index.html","834b333c51d1eb69f19df45c24862f52"],["/被找事了！/index.html","8bdcd273f1ea358d7466c5f5da450b8b"],["/被拉黑了。。。/index.html","cc5f057f47b329901823c7565ff71e53"],["/被车撞了！/index.html","be2bc1ffc6292da43df06e5ff0dfb95f"],["/该如何选购固态硬盘？/index.html","e87a4b8cc1d2ad96642c0f8fc206cee5"],["/这本书一定要看！/index.html","4538c25d3a135bd1062993de6b9b8dd6"],["/选Java还是C++？/index.html","e695b7fce7afe32bc50417e067713e00"],["/那些让你起飞的计算机基础知识/index.html","d18db3de66749b64a6dbb746632b972d"],["/靠这几本算法书，成功拿下大厂offer！/index.html","c05a7b7ff8688096ddc853b059bbbe7f"]];
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
