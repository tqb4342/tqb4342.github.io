/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/0010-city/index.html","36d84b798fbfd5d7a6af6644606f1d06"],["/10-algorithm-book/index.html","6bd2c9fb0c35bd7512c8bf9ccdba29d1"],["/10-website/index.html","66f31a4bdc384337ba30a8f4bf459c87"],["/100万的小目标/index.html","fe417f6cd4bef169aa6e094e73541689"],["/10w+YYDS！/index.html","60642ea179fdf1636685f4c3bf585b96"],["/10website/index.html","4ed1c22ded5dba74c8f98bb9cacf40f2"],["/12-technical-tutorial-sites/index.html","e55ef47da67e26e4baf0dfb08b03bcf3"],["/2 6 岁 了/index.html","6a4870ace3323fc2e5fa8b8bdf22b520"],["/200万，啪，没了。。。。/index.html","ed3303df7c46176a830e7cc678670c82"],["/2018ECCV-Paper-DL/index.html","07c6dbfbf22fee3b2b8a200990ef996e"],["/2021年固态硬盘选购最新攻略（小白避坑指南）/index.html","538151635684b28ec0d0bcdd427a4bce"],["/2021机械键盘推荐/index.html","e8acd63a2d70bec7f7d7882cbf30eddc"],["/2025-07-15/index.html","200e274669368a13745cb2a45c72992f"],["/2025年终总结/index.html","f753788d06f719283e15f3ee5f31b927"],["/2026-Open-Internet/index.html","a4b272b6059e1f2a2e00c5cd614faf31"],["/2026-best-vpn/index.html","a37098e873899d07740340e7f358584b"],["/2026-clash-vpn/index.html","134bcda1cfd7a0b1d76ada055fa7fd65"],["/27岁了/index.html","d45bb6f395b78aef2d93c4d47ad38cd2"],["/3D-Convolutional-Neural-Networks-for-Human-Action-Recognition/index.html","ed9905ca5e6db171bf9dbf194403723b"],["/3D-Deeply-Supervised-Network-for-Automatic-Liver-Segmentation-from-CT-Volumes/index.html","3cd54e9e331364f4f8dc8fc66363a2c2"],["/3D-Unet-Experiment-notes/index.html","aca0e006dd866635ee2a5bcc2f673a18"],["/4-Software/index.html","8c22beaaaf69d4311c75d960b1abe8bf"],["/6-website/index.html","b7e7ea44fd270de1042f0aad3a93c7b7"],["/7-terminal-tools/index.html","bfd3ebf97953b6974534d0735dcecf81"],["/AI-PPT/index.html","5fb6b99234ed3b28e0e58ade48ad1e4e"],["/AIGC中典型的深度学习网络/index.html","f3003c34daa941adc474f585484a3d56"],["/Agency-model/index.html","f416388137dc101d3384c97fbf8fa8e5"],["/Algorithm-brush-notes/index.html","d4fdbf2cf699446985e7658946f6aeee"],["/Ali-recruits/index.html","89a4d29feb7628fb42a76b0d80297b31"],["/Android-VPN/index.html","56d01c7bf726f341c350cd6cc70ff954"],["/Android-open-internet/index.html","072d6d7553fc5692a439cf665cda5129"],["/Appearance-mode/index.html","f7c7ad7e2c6b379eb152b440bc6ee7ff"],["/Backtracking/index.html","ceeb3210436da656d329313dd3e806b7"],["/Baidu-Sao-operation/index.html","180a9cd289d3c4c0d51309b9fe6f079a"],["/Batch-Normalization/index.html","42f40c14651cd54a7a2c409b96ff50ea"],["/Best-AI-tools/index.html","99474ed279f4f9af0bc6df2f33939f46"],["/Bias-and-Variance/index.html","b928dacc48fb61c33542ddb96ed4086a"],["/Binary-tree-traversal/index.html","6d563bcbecfc0d9066231eede69f0218"],["/Branch-and-bound/index.html","1ca71a9d7335dd40006d1d21ad23b61c"],["/Buying-computer-for-the-first-time/index.html","2de1ae146131b706fc12df9d3c2c8a77"],["/B站向北邮道歉！/index.html","64de99b31245a0eda7e415893a5a8c1b"],["/C++-string-function/index.html","a87772ff5b03f0c0902f5fbe7f8a7b87"],["/C-Java-DevelopTools/index.html","722d85a017802ade28fb1c064790c5bc"],["/CS-Classic-Books/index.html","038f6ef5e2923bca9295f0cfea09930c"],["/CS-network/index.html","951e431452a164ed72b28d292a3b996a"],["/CSBook001/index.html","9be9b9181acf6e2e7b49e52da2dcc755"],["/CSBook002/index.html","9e69d1e3bfaa8a8046d37ce5070379e7"],["/CSBook003/index.html","9d5831407f07c4dcc37cceb3ee0fbc34"],["/CSBook004/index.html","cefdf76d23393515bf5295671dff0451"],["/CSBook005/index.html","b24050538718d9c068d38591ea0b55a2"],["/CSBook006/index.html","64243cdffb8988be16b30e58564a9531"],["/CSBook007/index.html","6c9f84bc5b04379a6fcad68bbe76a9f6"],["/CSBook008/index.html","0376a795903c9b55468c2acf074089b1"],["/CSBook009/index.html","1256e186453056bc7d40eee35198ff16"],["/CSBook010/index.html","dd8de81c8bf002f962e8f9f14fb9e30b"],["/CSBook011/index.html","152cd14ccee924a8cc85026e1638206a"],["/CSBook012/index.html","d6ad2c0e50c9ae4da84c4e7413a7ae83"],["/Changsha-really-fragrant/index.html","acfade28d7f56d68001b157f0a5ba5e3"],["/ChatGPT-VPN/index.html","55a7918a3c23e5a99b0f25245ff50f29"],["/ChatGPT/index.html","67ffd0d99ff4768f7f4f58f97b29a778"],["/ChatGPT！王炸级更新！！！/index.html","f442460bb4fae45558ab84e4491ba897"],["/Chrome-crx/index.html","0068c833b96f677a75cc0671632624f9"],["/Clash-VPS/index.html","d54effbbab0d1ea8d19015d4dceb2e37"],["/ClashForWindows/index.html","667eeacee753594d2aca1d916625cd76"],["/Computer-Classic-Books/index.html","30505f17e86d1a72f55d59c65f67c5a4"],["/Computer-for-another-major/index.html","3b6e47335f673d7e31f2062457028933"],["/Conditional-confrontation-network/index.html","559bc0080db1c52f9c73b064e66ea1fb"],["/DNN/index.html","bb68742598f73c23ef6962ef6ccfd985"],["/DSN-segmentation-liver-experiment-summary/index.html","b27c65c8c6cbb09d3df4e64773e8dec7"],["/Data-enhancement-elastic-deformation/index.html","3ac86a13f5c0e6f98dd6e90abc7775cb"],["/Decorative-pattern/index.html","605bdee270c52ce8aac3e8d5007b6660"],["/Deep-Learning/index.html","ad5b9e2c9dbea4917587107fbcfb6db3"],["/Deep-learning-and-medical-image-analysis/index.html","d7c893498bbda248c0cd6b4cb026d4b3"],["/Deeply-Supervised-Nets/index.html","50ebf6d84695deff94eea5cec705f6a0"],["/Deformation-model-based-sparse-representation/index.html","a0ffb56f82cfc173543c5ade63a68910"],["/Discriminative-and-Generative-model/index.html","1618801bf3b71c1a499ebbe7bdb42976"],["/Distributed-transaction/index.html","065e71398d5653ea604aaa4e219321db"],["/Divide-and-conquer-algorithm/index.html","2b7108de3b23c24afc36e65ae5f7db6a"],["/Dll/index.html","ead4caae47f0bfd4c9e17a8db8703642"],["/Dynamic-programming-algorithm/index.html","e22692d96e28fcb08e0607a3bd812a5a"],["/E-book-download-commonly-used-by-programmers/index.html","b74e87436b2da140ebe50b8323b45e73"],["/EditPlus软件的安装、激活和配置过程分享/index.html","9b20d4088439f6401a8486ae8d33191f"],["/Eight-sorting-algorithms/index.html","356d3e791afb1e25706a81bbfa06089e"],["/Encryption-Algorithm/index.html","3ddb1bd33aaced439c32ba000c044b9c"],["/Eolink/index.html","6121a10f44cb3ac1bf4010503c025aa4"],["/Factory-and-strategy-mode/index.html","7239441939baeb03c72c6e710e3ce42c"],["/Foreign-technology-blog-community/index.html","722d840cb99eff02b082003f0bf86d3b"],["/Functional-model/index.html","21103c461c5e602c0744bd071785fc12"],["/Fund-type/index.html","9b8dc88b00f29de671893f3f1344311e"],["/GPT-4o/index.html","a5baab6502f839fedb4e9157f8bed84d"],["/GPU-medical-image-processing/index.html","104868a0a183e6451b25e96795e9205c"],["/Gemini-pro/index.html","e2365aad8f85e86f81fd10eca25133a0"],["/Gemini-vpn/index.html","6d0aa3bfc014cea7516469b756a6ee44"],["/Gemini/index.html","6c720826752e9536509c6174120222b3"],["/Generative-Model-of-Unsupervised-Learning/index.html","3a2f37600e96f1527ad07094a8b7ce8d"],["/Git-Learning/index.html","cdcb8918f3931cd95fe98b01ef6f4295"],["/GitHub-2FA/index.html","bb372691a98c483c0d6b66445cae9fa1"],["/GitHub万赞，程序员必看操作系统总结！/index.html","3c887a55a6dc51d8f7f99caf541b008b"],["/Golang-book-recommend/index.html","c7ee9e6033f24078646d340ff7495eab"],["/Golang-learning/index.html","9996376f3cb98dcc0fb11297dcc11a82"],["/Google-Gemini/index.html","39db57be67b75e6dae46bba2454f7c61"],["/Gradient-descent-optimization/index.html","b51c4f4222b0b10949797b4df69097a1"],["/Greedy-Algorithm/index.html","709103c2c9dfe18b1e7b3eca954965d6"],["/HAND-User-Forum/index.html","eca8233890fbfe337a3d44764fa6c307"],["/HK-bank/index.html","017867e617c5904742bc73211757e49a"],["/Head-to-head/index.html","b8733c27f16948be2eb06e7dfdedfadd"],["/HexoPage/index.html","bdf8289de5aa6d583c0fd2e124b36252"],["/HistCite-Pro/index.html","39df62844670b2ed74c9153a8794914e"],["/How-does-the-program-run/index.html","e8f6cb02214b851ab172421f20530554"],["/How-to-judge-whether-technologyisreliable/index.html","47b18df4d6465d8202d0960c7d1b91e3"],["/How-to-learn-design-patterns/index.html","ca6c0df9fca948358d91e28e7979e2c5"],["/How-to-learn-design-patterns？/index.html","2ff8f93bfb2b2cc01972ce7da882ea02"],["/How-to-teach-yourself-programming/index.html","2eada325e961da16b6a1916c4a2ec047"],["/How2learn-Python？/index.html","9e64bbe9c90304d9f09c96fadfbd8005"],["/IDEA-shortcut-key/index.html","d647b7b68105605dcec68e7df42d2560"],["/IT-interview-basic/index.html","cfdce2da0b39d4fe9f97b1b46c53273a"],["/ITK-VS-install/index.html","706a050e94fd4d5e396f7bd2036a963b"],["/ITK-VTK-ItkVtkGlue/index.html","6f9b3354111e69baa23e64b212782371"],["/Image-processing-plus-noise/index.html","a4e6111e8653a6e84a9cdcf5b3ff7bfd"],["/Inception-Going-Deeper-with-Convolution/index.html","774390ee4ddf027d2f88f84e4f578c15"],["/Information-Cocoon/index.html","a04a3d9cba1e05e7632e4e47f1b5410c"],["/Java-GC/index.html","6bee87e303bbe0b3dea9bb4a6c0e5eab"],["/Java-Servlet/index.html","e9902a3c44e83e32e9a0aa0907e05e31"],["/Java-array-and-collection-sorting/index.html","5cbcbcc759dc0c3d8cdd882457d0ad53"],["/Java-development-tools/index.html","647e046da7a1f4706be4a318efec9a56"],["/Java-eight-data-types/index.html","9fd2c9172e911048d3d5e24df9b8a1d7"],["/Java-interview01/index.html","b219a77626835d422c427594ce65e24d"],["/Java-interview02/index.html","94bb7b526fe3c7bfc069d687fddcd3db"],["/Java-interview03/index.html","9120bca1e13b9fc0aac586774db53ebf"],["/Java-learing-map/index.html","1693bb8ed39a58933caf11055e3950db"],["/Java-learning-route-map/index.html","149d4c2d635755b6b424b96870f44f36"],["/Java-memory-area/index.html","18eaa9f5543cbf13c608d2039f68ba2a"],["/Java-memory-model/index.html","acba44280fae8b46af0cff68224551e2"],["/Java-multithreaded-learning/index.html","094b3e7f4c62c18da2cf274d792316c7"],["/Java-project/index.html","136d9e538fecea1e7b304fa4aab8415f"],["/JavaWeb-Chinese-Garbled/index.html","5da02c16c48207856cf4aff4540983cf"],["/Java还是C++？/index.html","6ffc5a34584a671a259a5ae935302934"],["/Kaggle5-step-guide/index.html","23da13d5ac30dcff7818096cd030a79c"],["/Knowledge-points-of-Java-garbage-collection/index.html","4a3886e834c4c5e4de77442c3e642079"],["/LLM-DP-TP-EP/index.html","730b24797926cf38564e8f8245635991"],["/Layoffs-Hiring/index.html","5ba62d0768c20647ef3549a4e80409b0"],["/Layoffs-and-Hiring/index.html","2085fa7f55423314d2b952e74bc95398"],["/Linear-regression-of-machine-learning/index.html","35979435ec75c17c90b9a9144f0bb6a5"],["/Linux-Compile-C/index.html","64dfa1623d5358067af439ca233526dc"],["/Linux-ITK/index.html","28d0c804025733602a158b4fa2fb0489"],["/Liver-segmentation-of-sparse-components/index.html","89710281958a71e5874d48cabe95092d"],["/ML-EBook-paper/index.html","717ccb7224b82d21edeabbd95ea5ac99"],["/Map-uses-multiple-maps/index.html","f9f153eee0ef04f500fe571c5225bdb2"],["/Marching-Cubes/index.html","868a328f701f98526a1de6d4f714a006"],["/Matlab-Graph-cut/index.html","12697eeb1abf3e7b78ee328f4c4b143f"],["/Maximum-Likelihood-to-EM-algorithm/index.html","675a892bdb0e024abdcfd96e8d8c6a49"],["/Mean filter and median filter denoising/index.html","eb34fe2cf446dada83216c31100b13ed"],["/Medical-Data-for-Machine-Learning/index.html","490c530505dbb007d28ac49044da34df"],["/Medical-image-analysis-deep-learning/index.html","eb8bea723b3fcedba6385f7fe33d8b77"],["/Medical-scan-image-processing/index.html","d3eb469279bd9bcdaf10de3f9ed90886"],["/Merge-sort-algorithm/index.html","52694bd8246966e092bc8e19c7e55cf4"],["/Monthly-income-2W/index.html","a2afb50343590ac30fdae2a4ce6557e7"],["/Mysql-database/index.html","4d475f4b223811a5dacf73f4c3a742a5"],["/Neighbor-Embedding/index.html","fe78e1a71e307e1cd8d59cfc8a66dafa"],["/Neighborhood-approximate-random-forest/index.html","9c18ba24326be1cf2592bfe95caeae81"],["/Net-and-official-documents/index.html","07963f7fb17f3955438338a40a534bfb"],["/Netflix-VPN/index.html","cb9860c6236162adefab1740e30ecf88"],["/Network-principle/index.html","9c8b544b37655ebf5cf675c0f8519f97"],["/New-Hong-Kong-stocks/index.html","529d352bb7dfa4d42825451198634c39"],["/Nice-to-meet-you/index.html","d2b892aa4e88640d2411207161310fba"],["/OS-processes-threads/index.html","c552705effaf0e0e9a58136ed10fea1d"],["/OS-run-environment/index.html","473ef9f023f267a1bdadde7a0f686542"],["/Open-Internet/index.html","86d059cf80f0922d571d6efabf23e241"],["/Open-Internet2/index.html","785bade71b67d0af881b9ec70b1f4875"],["/Open-source-community-and-rewriting-website/index.html","75dd404ce9df851b71b517ede9413fe1"],["/Panoramic-image-stitching-based-on-SIFT-features/index.html","1bdb00be8e45fa61f3a5dda75996e53c"],["/Parzen-and-KNE/index.html","96205f91794c897033ae89800b065d07"],["/Personal-technology-blog-site/index.html","4468a08c289e9f5682e994f64750e251"],["/PicGo-Gitee/index.html","8a81dbc827077f7b72b8d2c64fc1c5f5"],["/Programmer-treasure-chest/index.html","a2e4a539181bf39bfab4e881059e7e64"],["/Prototype-mode/index.html","a50ae28f529699fddf8bbbc9226abdf4"],["/Python-base/index.html","3984c6a9ee19d1721244b09996270c12"],["/Python-crawler/index.html","07549b404d05125f47d7c114b4beed8c"],["/Resume-revision-suggestions/index.html","af3dd9cee76c947817bfbe02bba55bff"],["/SEO01/index.html","409d1089ff49f12078e70382397207d9"],["/SEO02/index.html","eb4895652b13f3e3c23fdb7076396127"],["/SPHARMPDM-MEPP/index.html","18734ce089e741049229e5387dd9587b"],["/SVM/index.html","ec70370959af14a716fa74886d98ab36"],["/Seata/index.html","c5af9be588661260a2c179a6e1d91c49"],["/Semi-supervised-learning/index.html","24393aa0570106e8d0fbe99148f954d3"],["/Sequential-model/index.html","917eb2752e16f41758fbf9bb4b8d161e"],["/Shape-Based-Human-Detection-and-Segmentation-via-Hierarchical-Part-TemplateMatching/index.html","34d33aa4f9587457e14cb6a0f2a126f8"],["/Spring-basics/index.html","6ab61851792bb1a8df00a0f07e48b260"],["/Spring-integrates-hibernate-Struts/index.html","7d94b6bcc048603ea20b4df3f7b8de4e"],["/Structure-learning/index.html","0aba2941d2be642e8431ff2a8b4c6477"],["/Suggestions-for-self-study-of-computers/index.html","28ddb05f47d15ed11fe23aef1eee3790"],["/Summaryof-HongKongStock-Account-Opening-Links/index.html","4bb48f450cb9a68957bedab9b2a6dd75"],["/TCPIP-detailed/index.html","fe0d4ea31179027c10298b8db48c21b3"],["/Telegram-VPN/index.html","70b0fe9677370e0693683cf3cea3a4b3"],["/Telegram/index.html","f443f5ff6884ac7d270be14b8fddd77e"],["/The-essence-of-shopping-festival/index.html","34eb68013262114c9c374ba6de88b150"],["/The-most-important-investment-in-life/index.html","db2331314d243a774514c01951a1a0c5"],["/The-most-successful-nvestment/index.html","1cd2e200ea595058d5a4e58c55b1af42"],["/Transfer-Learning/index.html","cacdf76e72d9ed6b96605358f5f80f03"],["/Transfer-to-computer-major/index.html","5139eb0c871d304c491dcbe054052d7c"],["/UNet-Convolutional-Networks-for-Biomedical-Image-Segmentation/index.html","97cb0d936099fec8b9c2e22eac31c25e"],["/Ubuntu-install-sougou/index.html","558e51afbf182039edd5bed4224917dd"],["/Understanding-of-paying-for-knowledge/index.html","355d3976009e59d62879ba05339b2e3a"],["/Unsupervised-Learning-Linear-Dimension-Reduction/index.html","35f7611e4f28d78111b89f983564f3be"],["/VPN-HELP/index.html","ba4917af8d7599dc7b2b566d76362106"],["/VPN2025/index.html","5408a1d73538e2a26ff5ba3fa48068c8"],["/VPN2026/index.html","c4aa92443cb20048d990e2e303891757"],["/VTK01/index.html","02a63373dfeaaf7e1261b5618be89d7e"],["/VTK02/index.html","0056391dd8ad6d8d93f6d82b40d74d69"],["/VTK03/index.html","1f9fde0adc6f176863095828b536dc35"],["/VTKRead-write/index.html","e94f5c4ba3b6ef4b4a34ee0733dc53df"],["/Vertx-Java/index.html","5076aad96bc0533652f422cd3608f6e6"],["/Vpn-OpenInternet/index.html","b714a79a71ad74b1b2787c16903d524b"],["/We-are-all-good-kids/index.html","c1c601cca26095c0e0e639c358635701"],["/WeChat-80/index.html","348d1b34882913e45852f0fcede2f75c"],["/WeChat-red-envelope-cover/index.html","5e053531bc1addd29feb9986a7e92fcf"],["/What-is-crawler/index.html","657ff35a9053fd69106454273b501769"],["/Win-Internet/index.html","12ed16daa15943c187d7dca025e32a74"],["/Win-Open-Internet/index.html","e578f9d94484e60b76b0f700a576fed8"],["/Win-OpenInternet/index.html","0b897a01c6b72988b5b6bb920d26d9ee"],["/Windows11-2kfans/index.html","7b045c510839711e7c9629f2ebae95f2"],["/Word-Embedding/index.html","4f3eb8dafe63c96737405dc61287f2ce"],["/YuanShikai-and-his-Beiyang/index.html","882d0f1d7f297b35a03f4d140c5aaa14"],["/Zero-copy/index.html","3322bcedb8bfc65f1127c2311eae6daa"],["/about-keras-model/index.html","e6df6ace879b70998f45604d382a049e"],["/accounts-google/index.html","f7cf186e613b15812bb6006cb1bfd898"],["/algorithm/index.html","0ea83489e1e2dc8a0cb8421064bacdc5"],["/alibaba-Java/index.html","8f00d2482943fd6489792a34bdf3919f"],["/archives/2020/01/index.html","7787e903ef3c1cedc2e3bd49aebe14f8"],["/archives/2020/09/index.html","93c157898308bb4955ea3a2373dca78c"],["/archives/2020/10/index.html","e6dadc3ce4bea341e5faa2d23e17be8e"],["/archives/2020/11/index.html","68b879b25e7bac23527aa5e14b49be8a"],["/archives/2020/12/index.html","c1904fc565632038b4bf2de8d5aa5e56"],["/archives/2020/12/page/2/index.html","d8895801603ca3af53cde961a7d4c8a2"],["/archives/2020/index.html","b785d7b1067d806058d9db4d1b46874d"],["/archives/2020/page/2/index.html","6a7c8e22c29a88bdc016f3e211510a4c"],["/archives/2020/page/3/index.html","d05f7261e66dba0bac5fe4f3ae7c0e27"],["/archives/2021/01/index.html","b95c801675dac8e2c07cad3a4aeac7dc"],["/archives/2021/02/index.html","411d1a46523acf5f5595faa7e61e8c87"],["/archives/2021/03/index.html","a733e90b22d47194898c2d3c4d4a2a0b"],["/archives/2021/04/index.html","9d3f70b145f08d45f616a3f577036657"],["/archives/2021/05/index.html","8da57c80eb40859993e788955b4d8694"],["/archives/2021/06/index.html","dbb161b1147fa13eed178e97764ad56a"],["/archives/2021/07/index.html","256392381cc2cb220393db58b444640d"],["/archives/2021/08/index.html","2f59cdacc29b2dc69e84abcaf95c649c"],["/archives/2021/09/index.html","34a94a5c302fccf2106de24e1c94b478"],["/archives/2021/10/index.html","09c04db0d3fe860fc8af889b5bda7eb4"],["/archives/2021/11/index.html","ea7abf0b3bd966f5d5cff38efc281178"],["/archives/2021/12/index.html","878f3b78112b5765bf820636cd521559"],["/archives/2021/index.html","fff449f938db49719bb203b1fd71a075"],["/archives/2021/page/2/index.html","2912ec157b6298546c356c79266e7004"],["/archives/2022/01/index.html","238d696f52ed949e0aead838be0862d7"],["/archives/2022/02/index.html","544f73dcbe085cc78cc115d2e14b333f"],["/archives/2022/04/index.html","09ba42a6d5de44e14002fd796b1a93f7"],["/archives/2022/05/index.html","e7633e213151fa5a0aeebb98db71fd94"],["/archives/2022/12/index.html","7061823e3a335ac4d18bab8357b6818c"],["/archives/2022/index.html","e6224f311e7b37bb275c137533f6c164"],["/archives/2023/01/index.html","a938ecb886d680ffe96c9e0101953fff"],["/archives/2023/02/index.html","cada704fab4ba73049acdbd729b85410"],["/archives/2023/03/index.html","51028edc004dc6df7f212274e89623a2"],["/archives/2023/04/index.html","d92dc89634ad76782d343dcb494bbc95"],["/archives/2023/06/index.html","976b8efeebcbeb15128e0bfe9a5b2eac"],["/archives/2023/08/index.html","c02b1c7bd9ee2eb7e0790c23d6565bb5"],["/archives/2023/10/index.html","60c7ae809e0661f3f5645997a8ff161d"],["/archives/2023/index.html","2a26708838326766df4cf20f10d0bc21"],["/archives/2024/01/index.html","b750375d86f2f0a92b68d1df4b9751a4"],["/archives/2024/02/index.html","0abf4ed29d8263a693109101fc353428"],["/archives/2024/index.html","e07718685669107f804bba36ce3b11a7"],["/archives/2025/06/index.html","7c54822a580ce56df4d8e8436aaea85e"],["/archives/2025/07/index.html","143a6be682631228aadb5df09f15e741"],["/archives/2025/08/index.html","6ee6a318e71d5f3866d1e66ca74e5bf3"],["/archives/2025/09/index.html","f61b4f97f8dbe878428933cefac44caf"],["/archives/2025/10/index.html","c55817ec7e3fddb75fe27861a4aa1f02"],["/archives/2025/11/index.html","588fad878dade6efc383a788d22e470e"],["/archives/2025/12/index.html","d6cf8be5122b4f54313b21163d61ede4"],["/archives/2025/index.html","1e04db448813186bc2cbd9b0eaea5e86"],["/archives/2026/01/index.html","a5553ea931afd3ed174079fe6abce407"],["/archives/2026/02/index.html","50c3d3d1cb4606b2c659e241f2dd1261"],["/archives/2026/03/index.html","e1e2907110c51c593ee03270e3933956"],["/archives/2026/04/index.html","7dd12393bc1ff0b6a5340cd182e170ba"],["/archives/2026/05/index.html","25840ada202ef0a4ebb67951fa76079b"],["/archives/2026/06/index.html","6979d7642bd3078cdbba4ec02fa995c5"],["/archives/2026/07/index.html","59e8182f0f8dcaf368be3ccd5a9b87d8"],["/archives/2026/index.html","ad08ab33f52c5856a3e61085bd157500"],["/archives/2028/02/index.html","855d2c48f96093a48da8544fe81138a4"],["/archives/2028/index.html","928c86fb18c5ad527d92fe2fc8dcf509"],["/archives/index.html","0ccedd0b1b49f1cdbae91c22120e5e83"],["/archives/page/2/index.html","79e99cbafd39115a8679c8feb7e45b14"],["/archives/page/3/index.html","2267a51f69ee49cfc945874360fc07e2"],["/archives/page/4/index.html","89607cc409e61bc0db56a3f6fe5d72e3"],["/archives/page/5/index.html","299c1d1ea13dc179f4436e2b7415e5b9"],["/archives/page/6/index.html","b42d744ba11ee8d15ce796038105d1ed"],["/archives/page/7/index.html","39b0558586018b6ae1b55fa82d568d22"],["/baidu-search/index.html","749460b91a79cd842be403375370f804"],["/baidu_verify_code-Hh2fKNlEB1.html","a0d404e97e8317e4ee4cf465b92e2ab8"],["/be-a-programmer-instead-of-a-code-farmer/index.html","92bf562ccc21de660602dd2f781b5021"],["/best-vpn/index.html","35716baa5c07c3d1b627f186069ca2b6"],["/best-vps/index.html","a1ca6048fcfe3fbc123e07d2a6758a8f"],["/bought-a-house/index.html","ac7f1e6604ce30251071f0a8a7b99881"],["/categories/AI大模型/index.html","a3438eeff446879b6801b7df4d3445ba"],["/categories/C与C✙✙/index.html","d40a53ef7e10dc0f7743aa2a7679449c"],["/categories/Go语言/index.html","06f6dd433d88b455aa931ea44c19a342"],["/categories/ITK与VTK/index.html","eaa287dca309e9248658b5f2c806dd57"],["/categories/Java/index.html","96e0025b58dfeeeea06c6538d2371406"],["/categories/Linux/index.html","3d0fda4ba4798dd44ca0896cedcd1591"],["/categories/PLC/index.html","72bbf26e2eaa44b6d2e589c19f866f05"],["/categories/Python/index.html","f30e4ad7a4a66fa0d5943324d5514006"],["/categories/SEO教程/index.html","e87cee8977aa10d914955478960ffb92"],["/categories/index.html","1c98ccd5290bd6b690f4fa828ea26778"],["/categories/图像处理与机器学习/index.html","c55d5efa69291d7ecadc161df40f806d"],["/categories/工具/index.html","6a2321606874c6c520708f2e0c6fe045"],["/categories/技术以外/index.html","893360ea46893660f6e6e94c6965d75f"],["/categories/技术以外/page/2/index.html","c5357c2c626218571f7a2190251f1045"],["/categories/数据结构与算法/index.html","f014b5a33ed2665c0ce4a45206f77816"],["/categories/科学上网/index.html","07079350f9ca991f884ecb0a3a009074"],["/categories/编程经验/index.html","1eef4e6acf43ada7a44926c47239c89b"],["/categories/编程资料/index.html","70f2afdb00078b8c235dea24a62a70df"],["/categories/计算机基础知识/index.html","0a21cc1d9d8deb899cd2cb8045d2187c"],["/categories/设计模式/index.html","ab9d95b1aff101ac600c6b84d823e0c2"],["/choose/index.html","43994409e42c9388ded2dd2e53e8a916"],["/choose2/index.html","73e630a1cb10ec01bbdcfae33063009e"],["/chrome-crx-intruduce/index.html","33ad14b7ad956f517abd51bb5ad22e26"],["/clash-free/index.html","86a9146bc753d6d83e7b47496be3d147"],["/clash-pro/index.html","c39ce9f3c08c4cf4478d540ad3c57edf"],["/clash-verge/index.html","3b677d78162502ab22d31847d2ab825f"],["/clashvpn/index.html","b959c3434e3ee955c4bbe87024f65686"],["/claude-code/index.html","ae57656d60e91026eb662cc97a548105"],["/coder-blog-website/index.html","843b535bc00e30e17285355618c292e1"],["/coder-source/index.html","c0a7aadfd224f9ec0e97c29321c347e1"],["/coder-videos-website/index.html","e2f39091878d0eee6db22e65132a1862"],["/computer-book/index.html","f8b1911932d6ef26eb6072e79a5798f2"],["/computer-censorship/index.html","fe114399bd92e11844d6a1b92ef19368"],["/computer-network01/index.html","b8952b1e191cca118646e82c6cb64d4e"],["/computer-network02/index.html","620675ebf466d1c8cdfbb338bb9bed40"],["/css/main.css","bc32ad34ec4990d934c3c647bdb62f79"],["/database-Mysql/index.html","fe3285ef8727a19cbfbe43656cb5a332"],["/eclipse-lombok/index.html","2e4d1f15b8969a334c3f5c68f64f3be7"],["/freego/index.html","02cfb6c53f47528ed12328775121eff2"],["/fully-convolutional-networks-for-semantic-segmentation/index.html","c03c033fd45c6d4624b776869f034ef7"],["/great-firewall/index.html","49c04d5ca3e469bfce32cf431b204330"],["/halfrost/index.html","c48b1b7be33a77576f2a9a834496e62d"],["/how-to-signup-chatgpt/index.html","f8da3fdb238fa2529f712199256aa734"],["/how-to-use-Gemini/index.html","e28bb60a472d5f5801544d1829dd89a4"],["/idea-continue/index.html","3a22111ea73b0d569d2fa88cba5edf0e"],["/index.html","0827c185651f23aa9be224c6ed2c9316"],["/internet-dir/index.html","8d4e2bcf11edfbe96a62c9f442ae1e71"],["/ios-open-internet/index.html","0ad57f5ba0d871652e67cac5bc9ab051"],["/iphone-open-internet/index.html","cce5d0b19cb800f1def29864d81a9779"],["/itext-makes-pdf-form/index.html","92fa76ef9f144a1ba70f6077a7afb9f2"],["/java-Set-Map/index.html","f9759a9ae9bd01a317e1ed65641db1a5"],["/javaweb-server-error-codes/index.html","79fbb7b7366380c1fdf8035b54e2e5d1"],["/javaweb-source-code/index.html","77aca9fe18f0bca4af7f302b2e1b9670"],["/js/lib/busuanzi.min.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/js/lib/lozad.min.js","47904d34a224931dd1b615c59a3dbe3b"],["/js/lib/prism/prism-coy.min.css","0ccad54d95845901ead59bfd3ecceb14"],["/js/lib/prism/prism-dark.min.css","a4711d2957d6605eb5682bdd228cf123"],["/js/lib/prism/prism-funky.min.css","efedcdccd7a9ab342d2d9cacd24920af"],["/js/lib/prism/prism-line-numbers.min.css","38e22e790c279bb56f9ec4b90a2a2d58"],["/js/lib/prism/prism-okaidia.min.css","5ac6f9de996fbec68aaa106dfb16e061"],["/js/lib/prism/prism-solarizedlight.min.css","ecc7e64d039873ffcf7fb27babdaeb5a"],["/js/lib/prism/prism-tomorrow.min.css","456af2a14ae4f5089939d5904ac40fe8"],["/js/lib/prism/prism-twilight.min.css","ebb5c355332a8cf9a1ce37a2a69d678f"],["/js/lib/prism/prism.min.css","a5234d614834658887cec6a9515890f8"],["/js/main.js","052d2b299d9c750afea8df0b802ab7c1"],["/keras+TensorBoard/index.html","195cfd9684d1adff175633723110412d"],["/keras-beginner-guide/index.html","37c8d982840d1f1624d6ada9e269f4b0"],["/kimiclaw/index.html","e92b7ae8ce39fa8bf9f614c928e3d7ab"],["/kmp-algorithms/index.html","1c174f0f96f1e671724fce6cc801015f"],["/leetcode-Java/index.html","a13997cede8df8b36987bae3d07b501c"],["/links/index.html","111ad50fcb00db39d78084d271a369a3"],["/linux-java-opencv/index.html","1c996cba5c5d47315a6e260a019f9771"],["/magic-internet/index.html","e98a693cf4a1ea4a4472330d4fe7132a"],["/magic-vpn/index.html","6a4ecc744d08e17cd7ab4953aba16600"],["/mingci/index.html","9b7f26ee04a269d59ab9f21609f85cc3"],["/mobile-vpn/index.html","a11690541f7ae4cc15c52b0fc4081564"],["/msb-source/index.html","b31453689076b737833aa18938e2fb55"],["/online-BUG！/index.html","d2b504410ffc55bbbb002395b8fd1cb4"],["/open-app/index.html","60f00a241f0816a4c32fbee3ce4da2b4"],["/openclaw/index.html","4ab6c257c421289a694a9a886a8f8d3b"],["/openinternet/index.html","30b5148bb6b7b52c33610e8fe2df2510"],["/page/2/index.html","2b09b33aa8d4b97b8e5a9e798d72cadd"],["/page/3/index.html","46fa6d2dfd62945ec59c69cbc1f3e6e5"],["/page/4/index.html","8a2a1970ec61c6ef909f2ae8905ca7de"],["/page/5/index.html","c6ead9ad603aba20cb048d93d10656da"],["/page/6/index.html","85f5e13ffe2107b233a4066416b3bf9b"],["/page/7/index.html","a2199af7285b217d81c8bab4903d766c"],["/pandas-data-preprocessing/index.html","a9dec5995ec96ff1885a69083346598c"],["/phone-win-open-Internet/index.html","73a963234bded6e4df3cd1056e70af69"],["/popcorn/index.html","980d7a407da0238ac41b9d7d525fc2dd"],["/protocols/index.html","a83696ebcba070a5f7870e2f9fecb4f5"],["/python-Blog/index.html","e2fd160c032bd9047c16a2e6fe5adcf7"],["/python-yeild/index.html","bcbba1a19b29b4b1ae08c07caadd3fc8"],["/python爬虫教程/index.html","858253997a9b32c50279fe24c107c98a"],["/route/index.html","2c6e631c1ef91344df0740fbcb330699"],["/search-help/index.html","8d8c889c4621352991714a099b671183"],["/software-copyright/index.html","e27b67716f45b9cf66764a4b9b5bb2d8"],["/sw-register.js","469e87f06279499ad4e95b93df3a2e58"],["/tags/AI/index.html","b0d949fa73462b47535e43857f795a9b"],["/tags/API/index.html","633ece36c389f4bc9fb33f1c1d449f35"],["/tags/C-图书/index.html","a8d8f2afa85f2780dc6d8a6d770c2558"],["/tags/C/index.html","0b5d48ee0ac31e4c876f4bf475546ace"],["/tags/CNN/index.html","da95fd1bf7b83189536d24a8a4c293b0"],["/tags/Chrome/index.html","c767695bbb42f8b373f7b72a3d7ae1a5"],["/tags/Clash机场/index.html","0023773e8e4d78c68d06de66e5fac04c"],["/tags/C✙✙/index.html","9f5c8efbb43214ed74a6b86ef5a9ecde"],["/tags/C语言/index.html","845dd26079e1f0bc6b8da435ddfa7487"],["/tags/C语言图书/index.html","cf77bdbb1f31ac8f803c9035707943d1"],["/tags/DSN/index.html","ea24ca4834689e5838829da260a99a4e"],["/tags/Dll/index.html","4b31a5bf9ae4b24409a1689b7345844c"],["/tags/ECCV/index.html","7feb3063475b3c83df552d6b4e714a2e"],["/tags/EM算法/index.html","6c84ca4e53ea470610fe9c30ec8736b5"],["/tags/Eolink/index.html","e40dcbf268cfd5e592f96f2a1d796bdd"],["/tags/Gitee/index.html","51e9dff22104088111a618f6ad206004"],["/tags/Google/index.html","3a48a831533efa5b8246c3cc1fd90672"],["/tags/Go语言/index.html","fae525d1a2a130191ca107f05f7e930e"],["/tags/Graph/index.html","e87b4b1a6b9ed3781ab9c51e374f8311"],["/tags/HTTPS/index.html","de12f13d29a8d1a84c23522c9f26f08a"],["/tags/ITK/index.html","fab7e36ebd83f93b1891ca2aacd93156"],["/tags/ItkVtkGlue/index.html","266d9fc10491a8e8de2ee0e8f738b4a8"],["/tags/JMM/index.html","1d5b90d9319a50a89d8e36bda9e3a809"],["/tags/JVM/index.html","d5f2e52db5813bc7c5f303e3686ffdda"],["/tags/Java/index.html","060031b30f85578d942e42bb0db4139a"],["/tags/Java图书/index.html","db6971fb810c269247666d600a1a8287"],["/tags/Kaggle/index.html","26e1538de726dc5bf28a74a35d93ca10"],["/tags/Keras/index.html","f6899283f28477729f4253801dae4ff2"],["/tags/Linux/index.html","0a7961350a6cef27158e4fdea203d449"],["/tags/Linux图书/index.html","5c09c903855314a50c16290ec13f18ae"],["/tags/MEPP/index.html","5d150987dbce6e1bbb01b179355741ab"],["/tags/Map/index.html","a8df4c7d0ca84f36a317d9dc24ae9acd"],["/tags/Matlab/index.html","75c9ce65bbfc8f87f7e6f826b01e09c4"],["/tags/MongoDB/index.html","a6ed239ec5bdbe583107bd16fa18d92e"],["/tags/MySQL/index.html","372099b78105644a58f06bf7af102cf9"],["/tags/OpenClaw/index.html","8862edc5184986758cc59cc579d29535"],["/tags/Parzen窗/index.html","20a7212b73d3a422f7fd5e9102ea8350"],["/tags/PicGo/index.html","b815c3fc12a01245d5178e319a3b536a"],["/tags/Python/index.html","08e3bfe09f33b6902835b90bb0e131c8"],["/tags/Python图书/index.html","00944fa2e5324f33d8ca76aff67015c5"],["/tags/SPHARM-PDM/index.html","f358339141eafdb1ab57cf1494fb0f7f"],["/tags/SVM/index.html","b07fb668155051a9e8e52d5b487b674a"],["/tags/Seata/index.html","ec136c79f34b4ef06bb84eaa5496a122"],["/tags/Servlet/index.html","80de2c64b9a6508aa937ef67d0af1773"],["/tags/Sping/index.html","21522a5d5d63935f9d0ff4d753666183"],["/tags/Struts/index.html","15967e8df74da893fc0cafc137b8a849"],["/tags/TCP-IP/index.html","97cff9021b9d7586b636b7a80ab0021c"],["/tags/Ubuntu/index.html","67a11af2dd9ba2fdb8068049a3a72c11"],["/tags/Unet/index.html","0820b894807fc6b819fa98c1e5857ab6"],["/tags/VPN/index.html","ed862f989fb582d0f8c940c52301fddc"],["/tags/VS/index.html","b765576e371b283e7209b64894bae159"],["/tags/VTK/index.html","d27f9aee3e83fc58807d5b96b4742900"],["/tags/Vertx/index.html","4cf04970c0746e0306d03f6d834c3ce8"],["/tags/Windows/index.html","5cbebf5d17129a734afcd62da41a7a87"],["/tags/claude/index.html","e426324e578155e175072b22b5ba8bfb"],["/tags/edit/index.html","7df4671f3c9529aacc584fee1ba3e3ad"],["/tags/hibernate/index.html","f20cf1757f551f9e14efd136868a8de9"],["/tags/index.html","187e3bcb5729f7bb1a00d0d6c2476e2a"],["/tags/itext/index.html","85df5a126a42d9b744af03dfec5a797a"],["/tags/jdk/index.html","4841041919889de1e683eff425e53b02"],["/tags/kmp/index.html","a2fac2f87a6095e4d259e84793c56fad"],["/tags/k最近邻估计/index.html","f25564f9706ef211e0bca3a927c7ab1f"],["/tags/lombok/index.html","80dc807730bdf67e1d28a1566c7d7022"],["/tags/offer/index.html","5c6b62a09f53f7bc39e90159fcb094e6"],["/tags/opencv/index.html","c50b4c4c3ffb2bb5e987a9f454c6ce5d"],["/tags/pandas/index.html","286e64c0f9bc6892f6ea0648389e4778"],["/tags/string/index.html","b76fa3b7459bee7f1dcbdaad99a54348"],["/tags/vim/index.html","c503c8f2226ac61b0271aafdbb4e6f9a"],["/tags/vtkPolyData/index.html","c19cd87db76dcc065e0e2c7a08e4cb65"],["/tags/web/index.html","734391ed9ffd834445c58a746fbc7fe1"],["/tags/xshell/index.html","ab9af49c21de9ee2719b529a6c19455a"],["/tags/yeild/index.html","2c41c462cdfe52e265d5e780e0b4c742"],["/tags/互联网/index.html","8fb6db8a2f99ebe8bd3676f32e957109"],["/tags/人工智能/index.html","c46eaae46d5549262ccb858f83c56368"],["/tags/体绘制/index.html","5c426e82fb9e41ea1d363f4c060c8886"],["/tags/全卷积网络/index.html","8b2000c76182f8d7f3bf7251d44cd8e5"],["/tags/公众号/index.html","9b06f2d6fe92e22a85f2743e2e460d93"],["/tags/内存模型/index.html","84515d132b599130fde4c221cb3169f3"],["/tags/内推/index.html","993251891f1561b76f6d8da7f84f488d"],["/tags/函数/index.html","cd2640006c119e70c35f1b731df4741d"],["/tags/分布式/index.html","825565f69871f960803ae543d893e672"],["/tags/加密/index.html","d9290799b4bc93bad038cd9c7a3141cd"],["/tags/医疗图像/index.html","bb51b165e1635bdcbdd2a8fd6f551f7a"],["/tags/博客/index.html","201e4890b71cebddb02b4189569dbfeb"],["/tags/图像数据/index.html","cbc5394a7589771cf91ef6b3c9c46772"],["/tags/图谱分割/index.html","ac566c5dcf0da24ffda8c0ca17daa8db"],["/tags/垃圾回收/index.html","b58d3ec2e40a1c951ff57fe826715219"],["/tags/多线程/index.html","a42ebdbeff27ba783a6555e3e12510a5"],["/tags/大模型/index.html","3992547dc9b9f7c919dc1b5e61702e44"],["/tags/字符串/index.html","92b43f37db81ba20c2ab79d95222cb81"],["/tags/小龙虾/index.html","e6afc415c4981c61276439d9c761c918"],["/tags/工具/index.html","8c90d19a0d215eb3d94a2c34715aa047"],["/tags/弹性形变/index.html","60bb72ea7f0145e818abea8121b8b9b0"],["/tags/排序/index.html","f22919253febd645bfd3d4b9ab82b588"],["/tags/搜狗/index.html","1c2728bad83136eb961a1a8476164d4f"],["/tags/操作系统/index.html","8080fe19c40646987dcc7cca375c0991"],["/tags/数据库/index.html","89575cc7c77fae8ef5c8a4a67b935384"],["/tags/数据类型/index.html","5ee7886930dd581c3534b2b829277384"],["/tags/数据结构/index.html","29d93b7e1e6d17e42ff8b2d4eef83d49"],["/tags/最大似然/index.html","1bb38ab2d2a7d801fc1df4fa6e36b3ce"],["/tags/机器学习/index.html","edc36ba43ac36de732c622afe229c7e3"],["/tags/树/index.html","1f2d99b20277483bd424612f718babbd"],["/tags/框架/index.html","d1ac2a884205b132994dcca0400df655"],["/tags/梯子推荐/index.html","d90b0d5515f57c0de52e32963ff96fa8"],["/tags/求职/index.html","068286370d3ea6fbf26e1efeadd47c90"],["/tags/汇编语言/index.html","c6bb44d61b52b8cc2611115db1d5a3f5"],["/tags/深度学习/index.html","e0a8ec6a021cc4324d975cb188865ecf"],["/tags/深度监督网络/index.html","6b645959440256a69403c9cd6984dd7d"],["/tags/爬虫/index.html","22763ca5ac897ef9c863f704c3b25ca8"],["/tags/电子书下载/index.html","476fb76b26412464138945ab4579bd88"],["/tags/科学上网/index.html","f1a982a6028a3c225a4b078fb376cae0"],["/tags/程序员/index.html","82b41f2b987186d1dc6e96853cc41e65"],["/tags/程序员面试/index.html","cb42d16f6ab5db638218ddf70b285a71"],["/tags/简历/index.html","7ad440a87b3b6e744f8e544160fcabd4"],["/tags/算法/index.html","3ddd673d9cdf1489c2da3c56339919b0"],["/tags/线程/index.html","60f5f9ee57368723267eacb1914d9de8"],["/tags/经验/index.html","8344ef8cb2405fbedfba99f4470b4cee"],["/tags/结构学习/index.html","de59e38cde4d06d03dffab4af51d11e0"],["/tags/编程/index.html","862691c61e7b80e529bd652dda66b52f"],["/tags/网站/index.html","f59c33cef7c1486e41bfb4a5b27a79c8"],["/tags/网络/index.html","30fc7d115a4350c8e49d6f3ee1b8ff9c"],["/tags/网络原理/index.html","153872386436dc2def586f498997015e"],["/tags/翻墙/index.html","60139ad5854b2f2c325f7ddff6aadcb2"],["/tags/肝脏分割/index.html","26890cf5cbbb161614d8a0e6cdeaa1ae"],["/tags/计算机/index.html","8024c9667a4ffdfb0aa6b2e7465c1673"],["/tags/计算机专业/index.html","1177fcd7b5fe6a8fecef4a94ad4f5e6f"],["/tags/计算机网络/index.html","827999ad0e602ba841b33f36244a7444"],["/tags/设计模式/index.html","264de4dfb88c9d00c9cbef814532670a"],["/tags/贝叶斯/index.html","703ffece70cf9049190f5d377ff01e1e"],["/tags/迁移学习/index.html","ecd4a4da58a650e3bb0af3664c867251"],["/tags/面试/index.html","077bddc716dd76d6531570acf536fa77"],["/telegram-search/index.html","652565cf1873947816851cbb66f6b63e"],["/the-meaning-of-reading/index.html","cdd836b45222a78c9cd384ad1d8d8b65"],["/the-way-of-pragram/index.html","3ab2ac6ae3238595b3bdfb4ecd68be0f"],["/troubleshooting/index.html","0fecb4069a70328dc61ebde18e0d8cd7"],["/untiypro XL安装/index.html","be589123626296137ae1c394eb7f866a"],["/video-websites/index.html","e227e620dd6daa44d7c9309432f45cbc"],["/vpn-freego/index.html","697c5cd0f79ffbbd5f9be0a43db6e3cd"],["/waibao/index.html","3f6ac3c692fa893e60aca50a9ea2c08c"],["/wechat-fans/index.html","3ecad81561a972914c7f48194a50a477"],["/window-run-VTK/index.html","b154f7b69fb1da256df6dbdf5313483f"],["/windows-science-internet/index.html","e85a4359d0e5e6e639200e02869c8a48"],["/xshell-connect-Linux/index.html","9dd03490ef10ecfdd53bb7aa05fa2483"],["/yzhx-vpn/index.html","5894b79bf5250879fd9b7819f7dd1955"],["/‌Accessing-the-Open-Internet/index.html","b5381d3dafaa31d37ae15b9d9558f257"],["/《Java高并发编程详解》，去大厂必看！/index.html","a3eb87d278402e7c5d68e2251df8cdf4"],["/一分钟没了 1.5W 。。。/index.html","5bf911e07442c0025c8d8902979853c8"],["/一条高产爆款内容生产线/index.html","db2343a4c5ed74e1ce9b444e93ac9a1e"],["/为高考学子推荐的六个就业前景广阔的专业/index.html","3966a34899d29996642c53feb5c1fbbd"],["/互联网赚钱机器---社群/index.html","54e54062e30b19cbad030275b9212f21"],["/你们常用的工作方法和思考方式是什么？/index.html","0eef477ed5f0ee5a344e6e4914c40390"],["/关于环境配置的一些事/index.html","eaa0aeefa57c746820fc3c1362972ac3"],["/准备了19w！搞事/index.html","ea2642718a0f59987694839ada3cab24"],["/几个很重要的感悟/index.html","cdc3738ada858a2edfb39eb7fd748f1b"],["/分割ROI篇/index.html","d18b34995896c410b2ca9534bf3565fc"],["/分割精度说明/index.html","b2db85b3a40b9fdb8ac00054aa1257f4"],["/分块程序执行/index.html","9be0554fca1bbf71c3a78b91ecdada29"],["/加班公司黑名单！！！/index.html","be967d3129278eb77591b1cf765c839e"],["/卧槽，上知乎热搜了！/index.html","397ee78fd7e7130371ab803713befeae"],["/卧槽，我的小破站爆了！/index.html","9eeee1d02c7bd78251fefa918517ee07"],["/卧槽，我被盗版了/index.html","34f3b0d6dc8d90ae45ccdfe31350889b"],["/卧槽，还有985大学在大一上C语言课？？/index.html","9dc165c90337b997f7d4bf36944b7182"],["/历年微软面试中出现的leetcode算法题/index.html","e0c2f6fd910d59874a358b7f94a041e0"],["/去特斯拉试车了/index.html","192af0e3ab19e90f35d74cd384ff9162"],["/吃苦的三种境界/index.html","e4daf2c83cc58b8a6e579f02da3745ab"],["/哪本书适合推荐给 Java 初学者？/index.html","3cc6398f8d7e50bb87ad3f30de70214b"],["/哪本入门级的学习数据库的书最值得推荐？/index.html","43936c5a2e9368c0c7fa11c7395dc2ef"],["/国内外常用的AIGC模型/index.html","ae46e29e3fcb59dee27a53188834e7cc"],["/国庆假期/index.html","b2fd5fc307c8610f506a3df84627895f"],["/图谱程序字典/index.html","be69e441941edae48d9b629cccc22f34"],["/图谱训练与分割/index.html","4db49f13f218ecc06cca1b3a2f191460"],["/宣布一件大事/index.html","ea51f78bd91b8f79fd5bcb6db198e61f"],["/小鹏P7i试驾体验/index.html","b5c38a4212b64f8d4d0acf1fd5ac2a9d"],["/微信PC版3.3.0内测更新，电脑可以刷朋友圈了/index.html","85d819fded9aff69991f5a21926ff0b8"],["/怎么更快的赚钱？/index.html","2e28177b3c9138450a75320550d11f55"],["/我毕业了/index.html","263880a6ac7cff69429a21afab8b220d"],["/我！真！的！找到了！爱上学习！的方法！/index.html","4286f9662d57e0086a0a4b663b5bcf65"],["/户口的意义/index.html","f11e1ea2c60d94205fd2d0a03487fd05"],["/推荐两本经典算法书/index.html","f19b1ba4eb84397ac8571c1105d5a577"],["/推荐几个在线学习SQL的网站！/index.html","15528634054ea00dd1d83562323ed2be"],["/搞了一个程序员成长晋级社群！/index.html","9050ccf3756a87d736dcc175c9efdf3e"],["/摘抄/index.html","824f5e61c4e0023526023c16ba047d42"],["/暴跌30心态崩了/index.html","d0830fb9ca28218bf55f68659a946e94"],["/最近很火的ChatGPT到底该怎么玩？/index.html","b4ee3218bfb03a4254b31449a57c2e75"],["/有哪些好看的日历可以买？/index.html","18c0ba85d23ce65442747ddb5a2c58aa"],["/服务器有啥用/index.html","d437e5cb2fc4073954267ffa5caced7b"],["/来长沙了！/index.html","1a7dd2c91121effec9580d8284edf5e3"],["/校招污点公司名单/index.html","deafc6ebffcfaa791850f936dc96492c"],["/梭哈200多万/index.html","a7aba0edd5aa4b0949d9c7bfd8c7019f"],["/梯形图入门/index.html","60f30100891b7a6aa2ec5d959470e72c"],["/橙心优选，凉凉了！/index.html","af51bbe55cdf1c9235a55a70473f2790"],["/比亚迪汉试驾体验/index.html","bca3ba863939d349d803f9cc246a3270"],["/清华转学成电，真的牛逼！/index.html","47340a8cb8d7877aee0c1bbc8142bdde"],["/滴滴程序员被亲戚鄙视：年薪八十万还不如二本教书的/index.html","72a0b9c45dc1ae0b3e749c5388fb2e6a"],["/社群！/index.html","f810c9d51cbd629c9a97ad63d366100c"],["/科学上网之VPN篇/index.html","2fee9e9c1acf8d845f5075def682c50e"],["/程序员必备的几个技能！看完你也是大神/index.html","1822d631d32778c014695a2359384467"],["/程序员绕不去的槛，Linux！！！/index.html","35bcc2c233829eb2092f961f9e673128"],["/蔚来ET5试驾体验/index.html","e21a3d8d5b2da78ff7608d13e1fa46c2"],["/蔚来，牛逼！/index.html","52f1457a383d0968f8cd0eae624b9c8b"],["/被录取了/index.html","78ad7b2693cac13b0384f44b1fc3231c"],["/被找事了！/index.html","ae414ceef2a01e11e4ee0349070035e7"],["/被拉黑了。。。/index.html","9b178882d011264816f1a82c16ec81cf"],["/被车撞了！/index.html","6193a230c608e7c7935385e114d6a5a3"],["/该如何选购固态硬盘？/index.html","93eb02cf64ed4d48127d90842283a836"],["/这本书一定要看！/index.html","437dc2ae8dc105b8b78e9e9480ca0035"],["/选Java还是C++？/index.html","9bb4cf86d8235e15251f63b215a3447a"],["/那些让你起飞的计算机基础知识/index.html","1f48f035ed225f0913c31557c4752b26"],["/靠这几本算法书，成功拿下大厂offer！/index.html","97336c44cefcf34f6cfd0e5424789bbf"]];
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
