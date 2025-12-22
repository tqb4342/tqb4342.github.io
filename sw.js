/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/0010-city/index.html","976edd8a52fa529de157c9cf5696c384"],["/10-algorithm-book/index.html","876a85cc1ab238468c9c3572110a6b18"],["/10-website/index.html","5692c570df19f041cf05cd80f769cd9e"],["/100万的小目标/index.html","68dfb99239f9c878d7ff129ebacba594"],["/10w+YYDS！/index.html","9bbdf2535c299b1dfc6a1c0b475d92ef"],["/12-technical-tutorial-sites/index.html","56884eaac06dc9c5aa92c13afef280c1"],["/2 6 岁 了/index.html","1458215516c1aeedd490b3ee3c6eb9e9"],["/200万，啪，没了。。。。/index.html","d5be793008314bd5f2f3f7691b548b3c"],["/2018ECCV-Paper-DL/index.html","1a0035ebf613e12322320015e51f41e8"],["/2021年固态硬盘选购最新攻略（小白避坑指南）/index.html","a6932cc5cbde4bc81c5897095d387137"],["/2021机械键盘推荐/index.html","de52a5fd6979650462fd6c16a304bd21"],["/2025-07-15/index.html","f566bded2a4224bd5ee5466418ef1f2d"],["/27岁了/index.html","9c96ee571fdec008d52e46a1f7cd1b00"],["/3D-Convolutional-Neural-Networks-for-Human-Action-Recognition/index.html","b9b45d443be12a8c47ba6666be345ff0"],["/3D-Deeply-Supervised-Network-for-Automatic-Liver-Segmentation-from-CT-Volumes/index.html","725e3dd6d989c8828d9a6a49cde23ee8"],["/3D-Unet-Experiment-notes/index.html","43789f8c09132cc6e777b5ccc0c06e14"],["/4-Software/index.html","0480d6a70114a7e4b5fd3c213625c716"],["/6-website/index.html","79ad9f4de39d79f3ee0b61eff039f488"],["/7-terminal-tools/index.html","cb53568bc310671e4514bc657db05b4f"],["/AIGC中典型的深度学习网络/index.html","faae6799658c6b98b274ecaa4b036016"],["/Agency-model/index.html","ee2f664b04bc66cafdd1438a1fd62086"],["/Algorithm-brush-notes/index.html","191a52311fd61528ac30650a2076b1a8"],["/Ali-recruits/index.html","4ea6673e98eb26d5efe8354881325c96"],["/Android-VPN/index.html","74aee54674d6bac71300a3a5e2263565"],["/Android-open-internet/index.html","196b03a9d792a9de12a0c4f2f376d8f4"],["/Appearance-mode/index.html","cd6193eab205dc125d0b8486a27aebd3"],["/Backtracking/index.html","580781c6f75375dae4f094ac541b2daf"],["/Baidu-Sao-operation/index.html","0d509e328b9644781e5b9446b2119454"],["/Batch-Normalization/index.html","2060f23636729544ae942e01cf2284d2"],["/Best-AI-tools/index.html","827fd4c1b77c4348f3dc0a49531e1de6"],["/Bias-and-Variance/index.html","6f3e5f96332839e12afa04daefb3d1ac"],["/Binary-tree-traversal/index.html","f843f613d3c9dbf204027b5b96111e0a"],["/Branch-and-bound/index.html","fbcdc475e6092c1d2e3255e5293735d0"],["/Buying-computer-for-the-first-time/index.html","85777c832e2bd82d3a7b296e5844b98d"],["/B站向北邮道歉！/index.html","7892656f2aeae799783cd3c21d9e4c9b"],["/C++-string-function/index.html","098df95f0e91f1fe43aa7dfa9360ecc7"],["/C-Java-DevelopTools/index.html","5faa26c605ca961d9e33bc3f5d20f676"],["/CS-Classic-Books/index.html","5ed8e24c974e7c8d7e021596c5815f08"],["/CS-network/index.html","c57e03002809848f1407ac47341c1d05"],["/CSBook001/index.html","7a17708b57db93a8eb71053dafad3610"],["/CSBook002/index.html","087a11026018ddaa9e69a0d045b47f27"],["/CSBook003/index.html","e4b7b2a4608ae49788bb48d9aae50090"],["/CSBook004/index.html","04cb74f104cc48307afc1412e433a5ce"],["/CSBook005/index.html","e31e85ecd3b276be1fc6982e0f99148d"],["/CSBook006/index.html","a37742a0a32c1af8f1702541ad49706d"],["/CSBook007/index.html","74b507f5f10e99f5014f3661bb11e61a"],["/CSBook008/index.html","0748b137a36dd4961d8de08c04d39823"],["/CSBook009/index.html","cfe00e1c607e5f60c161d39676b2ec7f"],["/CSBook010/index.html","19b18d2069f595cf9830e87b0996bde9"],["/CSBook011/index.html","6c91b8cb6a0a57091185de9cbd065ecc"],["/CSBook012/index.html","b88ddcc1ad404330dd49bdb6114c3928"],["/Changsha-really-fragrant/index.html","e06c73685a7dbd3833a2ec3a4d7fbecb"],["/ChatGPT-VPN/index.html","01bd2f8267c2b7a40f2aaae6675f65e5"],["/ChatGPT/index.html","aaeb2d7c356fbf6ca0660919f6d427ce"],["/ChatGPT！王炸级更新！！！/index.html","98c947f3de33c7714641dd76aebda778"],["/Chrome-crx/index.html","5cd21f262e32099eefa710ff2b394da2"],["/ClashForWindows/index.html","c6707c41daeed735c72d44d1356e91e1"],["/Computer-Classic-Books/index.html","ac0c4be4d8ec283970f9d5d1b5d98085"],["/Computer-for-another-major/index.html","a4393a3fae9acb753daa8d39b5f75e4a"],["/Conditional-confrontation-network/index.html","d611cb6f87842e89f93dac2a16183397"],["/DNN/index.html","711e23b6f1caf71ca4a67e44d3c152f4"],["/DSN-segmentation-liver-experiment-summary/index.html","7a28fc1648c2c5b8d37c3c90fa3fee43"],["/Data-enhancement-elastic-deformation/index.html","8ac1c2509bdaa89eef738ae79c33c528"],["/Decorative-pattern/index.html","840206cad17ec4fafeb7475f566c36db"],["/Deep-Learning/index.html","ae3f31c6e5c2950a72cf328839e28dbd"],["/Deep-learning-and-medical-image-analysis/index.html","77e304ca11861d590ae132f515463a46"],["/Deeply-Supervised-Nets/index.html","ecef01a0c71e9b6b73130288805826ef"],["/Deformation-model-based-sparse-representation/index.html","60f13d1c91c3a1e73f4f19f5b12ac052"],["/Discriminative-and-Generative-model/index.html","5cbd537aabcca53e43eb907850ebc9a1"],["/Distributed-transaction/index.html","dd9b625886dbe6d2528d9ffa4c9f7b4d"],["/Divide-and-conquer-algorithm/index.html","fe97939dc6ccd7db3db676e17f1859f7"],["/Dll/index.html","498a0b65ff98daf8c923743057faec65"],["/Dynamic-programming-algorithm/index.html","3b809a19592fe9b0f7b1b4a9db4ed163"],["/E-book-download-commonly-used-by-programmers/index.html","1a0f22a7616a832b2a7fb37b0b28f2eb"],["/EditPlus软件的安装、激活和配置过程分享/index.html","d7e1a63846be387a7728eabb6cfee704"],["/Eight-sorting-algorithms/index.html","80066a7fd61452943ec156588bb31ff6"],["/Encryption-Algorithm/index.html","520a5002ae7b710766e65d51f1564836"],["/Eolink/index.html","266d2bd0723ff08835e5503adaf2ffd9"],["/Factory-and-strategy-mode/index.html","45800581b25f3fdf14cb9960daa1daff"],["/Foreign-technology-blog-community/index.html","4b2eec84dc59158fb6d31010659fad41"],["/Functional-model/index.html","b31763866c6fe07348ef32acf31a8cc1"],["/Fund-type/index.html","015057b51f68fc1682d8a8b33a22f7dc"],["/GPT-4o/index.html","1d70b7e84857a04c42ad9481a532c78a"],["/GPU-medical-image-processing/index.html","70be5d4d07b85d50014457822cec658f"],["/Gemini/index.html","8cdd10ffd3644f010bc67b10529fe0c2"],["/Generative-Model-of-Unsupervised-Learning/index.html","b6cb31db302eab7792f4f31f9e2e80f8"],["/Git-Learning/index.html","6691e6416a890edfb62365c2f89a30b8"],["/GitHub-2FA/index.html","9e82f8e859373ad3d1fcfddb142f27a0"],["/GitHub万赞，程序员必看操作系统总结！/index.html","cf6f9a49ffb982dd2a0285d81f7391b9"],["/Golang-book-recommend/index.html","674409dfd588ef2ef4e316052d52ef64"],["/Golang-learning/index.html","a22a3d6d093ba8356927c47d8b1e67cf"],["/Gradient-descent-optimization/index.html","44063bee6f7d8210520a36baf4facbe9"],["/Greedy-Algorithm/index.html","ccffaa0616cd3c51e1b78b908a1b5de3"],["/HK-bank/index.html","634427721403f4a85cf0aa3fe8788baa"],["/Head-to-head/index.html","7a6682c1647293737f6fdfc27d39ec04"],["/HexoPage/index.html","324a79a222e30f26b66318e640f41270"],["/HistCite-Pro/index.html","0b5943882fef638b9e576d80ed73413e"],["/How-does-the-program-run/index.html","e04b422fa6635a4e51d0e8851006d5d7"],["/How-to-judge-whether-technologyisreliable/index.html","cdb14ab7976db9f97bab52724da39f2a"],["/How-to-learn-design-patterns/index.html","d07b58cd39715af75bae4ef471cd3e44"],["/How-to-learn-design-patterns？/index.html","ad7b83b5d8e62910d6d0d414a3bcbeb8"],["/How-to-teach-yourself-programming/index.html","4c74997a44c2cf1bcbe4040ff3f6b19a"],["/How2learn-Python？/index.html","04b75edf8e2b8b1b4a2b0b572ea84f66"],["/IDEA-shortcut-key/index.html","4870e1c9343e5be7228a7f1be7f5f0a4"],["/IT-interview-basic/index.html","6f726d8f3e8ee7f7518227c0bf4c70c8"],["/ITK-VS-install/index.html","75b3058ca18588c3449aba3658589612"],["/ITK-VTK-ItkVtkGlue/index.html","12431a149941cf18646a9dd300a99b54"],["/Image-processing-plus-noise/index.html","f01cf383cda32c60618252a301784631"],["/Inception-Going-Deeper-with-Convolution/index.html","def4f3fff97d20ccc2202e4a7f73f469"],["/Java-GC/index.html","849106ee18772110e71eb9edb2ff271d"],["/Java-Servlet/index.html","f3ce1d4f9a6f4def38b2a4311f3ad4c7"],["/Java-array-and-collection-sorting/index.html","40345022afe1ab84f9d48e5509f6e0a8"],["/Java-development-tools/index.html","1c2489e807fe5fe18c8238cece140fb7"],["/Java-eight-data-types/index.html","fdac8d3187fcc37d67781f7b23ff4395"],["/Java-interview01/index.html","669d31e2bdccfde8e4775756faf21c54"],["/Java-interview02/index.html","ea76edbb3c6dcbe94bc7a152ba3d5141"],["/Java-interview03/index.html","0f6c4bdb9e7c2342c32d6ee698586eb2"],["/Java-learing-map/index.html","417bdb71a79f52e91697f76145f35760"],["/Java-learning-route-map/index.html","141d29db3e94f550d8c5d1c944c4d843"],["/Java-memory-area/index.html","654d76dc4968fb53f88d56ea311f1c50"],["/Java-memory-model/index.html","367a368864d9247a58c296eddca5aa53"],["/Java-multithreaded-learning/index.html","1411850c2282e5568dda99f3414bd0ad"],["/Java-project/index.html","f93194c93cb3868393dfd729fa4251e6"],["/JavaWeb-Chinese-Garbled/index.html","9f87f6f1cac9bf70ac011c6d4af70ed6"],["/Java还是C++？/index.html","cf22bc6bb47a479f5b280d5b536782b4"],["/Kaggle5-step-guide/index.html","ae999193b7fc9cf0f03246e1eacfbe27"],["/Knowledge-points-of-Java-garbage-collection/index.html","6faf54b95cc2b6747184ce62cfb13d60"],["/Layoffs-and-Hiring/index.html","873dbd38f2791af433c385b4e1aac2aa"],["/Linear-regression-of-machine-learning/index.html","a606529dea9920407e08e584669cbde2"],["/Linux-Compile-C/index.html","57e965f9a4b1151d6ab4b33f7b01820f"],["/Linux-ITK/index.html","e503fe0b6a0fbbeb499987c1408d7d75"],["/Liver-segmentation-of-sparse-components/index.html","4affa82b094bb43be017c5d0e0823fb9"],["/ML-EBook-paper/index.html","72e6ee5921990f3734a71c548c926d29"],["/Map-uses-multiple-maps/index.html","33da90674ff305d716a5125eec910483"],["/Matlab-Graph-cut/index.html","ab43d9c888a1f139dc8a5fdb9f988e62"],["/Maximum-Likelihood-to-EM-algorithm/index.html","b6849fcf2794819f1ddee5d3fa7ab38c"],["/Mean filter and median filter denoising/index.html","2c386cd41b896c17ea812b3c36755866"],["/Medical-Data-for-Machine-Learning/index.html","cf814a71348d10d4982945abbb67b734"],["/Medical-image-analysis-deep-learning/index.html","896c0121a05668e563da6893741e0a33"],["/Medical-scan-image-processing/index.html","2fb29599d4ebdd06f027df148050a628"],["/Merge-sort-algorithm/index.html","fa42b3d19267c366ccaa59d0d0d5ddea"],["/Monthly-income-2W/index.html","b65bcab88341e460f8f3f616c3fe86b4"],["/Mysql-database/index.html","51c85608f082cec8d8f90abf34c34567"],["/Neighbor-Embedding/index.html","76426353fdf53edfda43c6e2af29cdc2"],["/Neighborhood-approximate-random-forest/index.html","824d597f971af64ba9be2df7cd5be85c"],["/Net-and-official-documents/index.html","454459f0d7787e54267d5f0aca5ccea8"],["/Netflix-VPN/index.html","56ebde9329f37a04bc8488d1c699db4d"],["/Network-principle/index.html","83a55e0676c2c72aecc1ea5fd53a493b"],["/New-Hong-Kong-stocks/index.html","e760aa05b281a0d4fa126e79982a4789"],["/Nice-to-meet-you/index.html","b579eb82545a2262b0c7224f654527ed"],["/OS-processes-threads/index.html","114c561b29598f2f938fd1a99b71de91"],["/OS-run-environment/index.html","1cf5000543d9153e4b20d6bb7e567002"],["/Open-Internet/index.html","e2ebe2c4f3b97eea04ee8dee09dbf959"],["/Open-Internet2/index.html","8e28c5c2fea303f2bdca664f10bf6db2"],["/Open-source-community-and-rewriting-website/index.html","7f3e320dd8592c1d7660fd6d8e03f69a"],["/Panoramic-image-stitching-based-on-SIFT-features/index.html","52c33fa327cbe6401e280c973538e0a3"],["/Parzen-and-KNE/index.html","bd6c0475229607b658a1997a352ca348"],["/Personal-technology-blog-site/index.html","5e0b1c7cd4f0f7cccca29d133f2a0795"],["/PicGo-Gitee/index.html","7fa63b5423fc257b497b3687e7355339"],["/Programmer-treasure-chest/index.html","198682dd4dfefa838d9d43afaae0a1c6"],["/Prototype-mode/index.html","44f4eedcc911b1ee1047de4b4a54bd66"],["/Python-base/index.html","4cd0c692cb5ab6337baac66961b80adc"],["/Python-crawler/index.html","a0e07cf51ee0e446c712c6e3394f8f0c"],["/Resume-revision-suggestions/index.html","def3702a3cbe7b8aec41b754cb86fa39"],["/SEO01/index.html","7411c8120439154d7cf73fb0d0efa4e5"],["/SEO02/index.html","2accfddc1d9b485e28a46959d7b62415"],["/SPHARMPDM-MEPP/index.html","603a4c8b260816a647d9a355cf938c29"],["/SVM/index.html","87fdad2fe4feb77f521549e915d9361a"],["/Seata/index.html","702021d8235aaeda54efa87f4190d629"],["/Semi-supervised-learning/index.html","b67e7edd62f7549e01024ef51cf71201"],["/Sequential-model/index.html","b26649c8a462cb16f721527c0b42fce9"],["/Shape-Based-Human-Detection-and-Segmentation-via-Hierarchical-Part-TemplateMatching/index.html","d68cd67631cdd07dff5565422de7d6f0"],["/Spring-basics/index.html","ccd638dad9cc70444b86090375ba7dab"],["/Spring-integrates-hibernate-Struts/index.html","92bd3f2c112d88041fd55c28ba570e36"],["/Structure-learning/index.html","f264311675f6ccba562eecdf1bc8127c"],["/Suggestions-for-self-study-of-computers/index.html","2ec60f116a3150ab55bda1768ccd937b"],["/Summaryof-HongKongStock-Account-Opening-Links/index.html","111d61a5c2f10f6a0905c6c64e11d00c"],["/TCPIP-detailed/index.html","bb5f8fcf560b132f10963d0e332b5e73"],["/Telegram-VPN/index.html","a90f2adc74e820a477bbc609731177fa"],["/The-essence-of-shopping-festival/index.html","af7879cfdcfccf6ab7c96184a73e0376"],["/The-most-important-investment-in-life/index.html","38df9f9f06682c24c873ee88dc12954f"],["/The-most-successful-nvestment/index.html","44049c8b0e95669611d28ca546905c75"],["/Transfer-Learning/index.html","1e2b75a0e7156069560449590b23aa15"],["/Transfer-to-computer-major/index.html","1616156a95aedb5f986ffb06151f8f72"],["/UNet-Convolutional-Networks-for-Biomedical-Image-Segmentation/index.html","1d48f77b3ea9458961d486af5ec89c46"],["/Ubuntu-install-sougou/index.html","a6825c919b472bc4019584cd89df4b5a"],["/Understanding-of-paying-for-knowledge/index.html","c7776d14fad59a81bb01775e8b51e197"],["/Unsupervised-Learning-Linear-Dimension-Reduction/index.html","7034b72aed6f6a60c7b139209af8a041"],["/VPN-HELP/index.html","d7300b415c4736e8dae08ad369f82418"],["/VPN2025/index.html","021424e79a89a7c0780528cb12a42ffc"],["/VTK01/index.html","3e3cd7ba182a5191d574fb78cec7ef56"],["/VTK02/index.html","26db91d7fcfc3874e02300213980898e"],["/VTK03/index.html","d69c9a7ed109d11314d1045dc368fdac"],["/VTKRead-write/index.html","8f233c32493cbf4e11f19e8e2a3a191a"],["/We-are-all-good-kids/index.html","865827b96c46b2d07d6b89c032ea2ec3"],["/WeChat-80/index.html","5dfb659da35f6e4d79414f320f07a63d"],["/WeChat-red-envelope-cover/index.html","64b2e387cc11b32516d8425bf0cbcb95"],["/What-is-crawler/index.html","e48bbc675152e792142a755fbad987dd"],["/Win-OpenInternet/index.html","d5c4f97d0a866f5621f563a12f88fd1d"],["/Windows11-2kfans/index.html","9b0789730bcdadb4372ce557427b3905"],["/Word-Embedding/index.html","58694093e938d405ab2a084e17e76131"],["/YuanShikai-and-his-Beiyang/index.html","0ef2267ab8585c0426aa3f3ecf563a5d"],["/Zero-copy/index.html","96e66379207736ad16909b68cbee5601"],["/about-keras-model/index.html","2b3d0c3f6bd6890bf14263b537a9fea4"],["/about/index.html","5429b97711c23200ceb530368cf22f31"],["/algorithm/index.html","ff89574352776aee49c525118577cc4a"],["/alibaba-Java/index.html","a707b4540778a1012c6b6e30fdd106f5"],["/archives/2020/01/index.html","e5064af1e6bce5db5023adad2372fc93"],["/archives/2020/09/index.html","763175c4d4786c99441a34bf1d02915f"],["/archives/2020/10/index.html","171f84d1b4620c649548a18377a5ef7f"],["/archives/2020/11/index.html","f72e0a60cdd3a0a30f04e22bcb44f68d"],["/archives/2020/11/page/2/index.html","afcf3ec1b15e3ab69f49c861cfb6e470"],["/archives/2020/11/page/3/index.html","7d661d3cf34117b501f8532997105d72"],["/archives/2020/11/page/4/index.html","b52ed3995acddfc233c76c9941c01d16"],["/archives/2020/11/page/5/index.html","825024e69d6cb1dec6a0092a60718a29"],["/archives/2020/11/page/6/index.html","8b42e58f47f64804edc1018b4a957535"],["/archives/2020/12/index.html","f0321a13d07bb3900ee4a1a2e9479e7e"],["/archives/2020/12/page/2/index.html","e0d09ff47f0eaf4f8f8d8343170aac99"],["/archives/2020/12/page/3/index.html","4a085ffeceeb1504fe35aada1f7fdf4b"],["/archives/2020/12/page/4/index.html","80438185bb5638b5307d6b65a331e15e"],["/archives/2020/12/page/5/index.html","4918f6976728fc24ed84bbb4a179c4ac"],["/archives/2020/12/page/6/index.html","b9346567e9a05b814c2053320523ab49"],["/archives/2020/12/page/7/index.html","4e4547a87369403dde8ce6d8763e40ec"],["/archives/2020/12/page/8/index.html","6a3c73b2e1880f2a23f43e4544f8f1c6"],["/archives/2020/index.html","763ba418887a516b0974c7682edb2229"],["/archives/2020/page/10/index.html","ca6ff3c2a562f7b05274db92209bffac"],["/archives/2020/page/11/index.html","b9709c8658c870903447fec693b910e8"],["/archives/2020/page/12/index.html","c30a9c7ec4166d5e860f73af148fa937"],["/archives/2020/page/13/index.html","2d441659ebc13016d3f304a8040ea2a4"],["/archives/2020/page/14/index.html","fddfb97bf11c0ca2eaba2cbcfc070ca9"],["/archives/2020/page/2/index.html","24fe0e249a9cb6c012bc1b3bbf190214"],["/archives/2020/page/3/index.html","109e4caae31af352582376393f868116"],["/archives/2020/page/4/index.html","a315cf637810b98b8c6fd3e103fd0b0f"],["/archives/2020/page/5/index.html","f877b4fe39862065e16e76b36ec4d3a5"],["/archives/2020/page/6/index.html","1ac96b09db734a3f1700878a0a2cb061"],["/archives/2020/page/7/index.html","3448e3f49caa0948f202001ecd71d4eb"],["/archives/2020/page/8/index.html","ce193c1a90cb22cc78a9888a25cd0a86"],["/archives/2020/page/9/index.html","550471016c01d6042ddedf632effb0c7"],["/archives/2021/01/index.html","b3dc088d01c2622dca3c3a542e90975a"],["/archives/2021/01/page/2/index.html","bd2d115fee6497acbd65fd8be9c76f7d"],["/archives/2021/01/page/3/index.html","360ae108efad6fff11062d0d01cb914b"],["/archives/2021/02/index.html","ec7896ee9db56810031a705d470f36ff"],["/archives/2021/03/index.html","986d05339a552b874a3a6f6a587a8a02"],["/archives/2021/03/page/2/index.html","c8d6d8cb0139f43e4684f63859110e2a"],["/archives/2021/04/index.html","77fd31ba8e1ae821b68a305645d97149"],["/archives/2021/05/index.html","11bffc48e8306f707ae65ef1e1549203"],["/archives/2021/06/index.html","dd0895c5e5b7da7bbfd7ee26197e8ebd"],["/archives/2021/07/index.html","b803c24506c1207160bbe14a357a58c6"],["/archives/2021/08/index.html","0b0b387f4974eea84845477b14f802a6"],["/archives/2021/09/index.html","57b83e89b336f3804f1306ac5b2a14de"],["/archives/2021/10/index.html","31fb885212cb8f3d958296c4a5222f42"],["/archives/2021/11/index.html","6c3e659faa779f16a5536cf93999c8dc"],["/archives/2021/12/index.html","de4c750f35d181466ef6f89c24dabd7c"],["/archives/2021/index.html","f87e1b6d65238bf38d6234ca9ae886b0"],["/archives/2021/page/10/index.html","6c973c5bae2cc660bea54436d2b62d17"],["/archives/2021/page/11/index.html","bd517e752c6b5531bad58b1e8ec054b0"],["/archives/2021/page/2/index.html","377f2cfc8cc3ddc7ccc82d2ea771a694"],["/archives/2021/page/3/index.html","7eb21f206c30ff3f40654cbf73ed541f"],["/archives/2021/page/4/index.html","550d441f89e5a48112dd06ad55a4a2b9"],["/archives/2021/page/5/index.html","4d5fdc21e0f3645e0dc4232c60a0d60f"],["/archives/2021/page/6/index.html","ed4ccb771d265908ac91962471657eab"],["/archives/2021/page/7/index.html","aa55061eac5bc7d5d4bb78aa133ffb5c"],["/archives/2021/page/8/index.html","e626bba7e4e68093361f91570eae6191"],["/archives/2021/page/9/index.html","20fc8f6b0358e6878170bd4aa78fe028"],["/archives/2022/01/index.html","42a42f5a5ca87481b96ff932201f8138"],["/archives/2022/02/index.html","c683a82348fc3382b538387df92817ea"],["/archives/2022/04/index.html","3cfaf69858180b1acfb0d4d50f30414e"],["/archives/2022/05/index.html","d2bd5f25194ddafec4ecc0240977dc73"],["/archives/2022/12/index.html","54626607aa4cf2196777b1d3d9e8b777"],["/archives/2022/index.html","6bbcf9b9d52782cd2a103938ab030070"],["/archives/2023/01/index.html","c8ec9878b8b3227a7456ed0a89ef479a"],["/archives/2023/02/index.html","ca32b973b177f35e555d2d083eaeecb0"],["/archives/2023/03/index.html","1cc3d837da8c49a41bdb68add19fc806"],["/archives/2023/04/index.html","7b62b0b8a359a3ba082c982df38e15ec"],["/archives/2023/06/index.html","fd30151dea5099e68323e0eea820a0fd"],["/archives/2023/08/index.html","5561a8e6a2895119f9fdce998d3cf9ff"],["/archives/2023/10/index.html","9a6d4fe3cb7083965eadacd3ac170dd7"],["/archives/2023/index.html","db7a8f35bad196f6108cc8cb30de9090"],["/archives/2023/page/2/index.html","c131623901d7c10565da9430ae047a98"],["/archives/2023/page/3/index.html","cc81d8ac25be49c4aa3cf240d18d1adb"],["/archives/2024/01/index.html","a6564741552a544ae02d51279a7539e9"],["/archives/2024/02/index.html","4d6eba65c7d4f669274ea06440d3ec25"],["/archives/2024/index.html","50ec7e2aad310fbc1f3740fb4d7d2136"],["/archives/2025/06/index.html","deff7b04bb397e4eac68fd9eca6a9496"],["/archives/2025/07/index.html","617a3d6b8c4bb4d31d48714b4adfcf5c"],["/archives/2025/08/index.html","0e918229729760a4ff18fd85c185463a"],["/archives/2025/09/index.html","602be5018544bea08426a1bc4e16110a"],["/archives/2025/10/index.html","2b7e29f8bce7bdc9ae0102a9bfff6fef"],["/archives/2025/11/index.html","f6294aa00585ab4b28d978b63e6a9723"],["/archives/2025/11/page/2/index.html","51cdafaba634c44efe14bcf87dd109bf"],["/archives/2025/12/index.html","f5293eaf7a4bc0a0883424ad32481b68"],["/archives/2025/index.html","2bd61e3ae699667809b914d1973bb27c"],["/archives/2025/page/2/index.html","1d6faf203a40cbb9620d7cba522544aa"],["/archives/2025/page/3/index.html","309d40f225ac1a6c064df48afb2518ea"],["/archives/2025/page/4/index.html","29de8bd676972d2840095c4cec7335e7"],["/archives/2028/02/index.html","8df2c463139e5b335d34b8b75fdc6bec"],["/archives/2028/index.html","2e82e2d339137f411e04e63c8600f494"],["/archives/index.html","0f9948d6c3599ce9ddc6fcd5b81821a6"],["/archives/page/10/index.html","5e096a01b5a1f9dfb84e42501b69cbd5"],["/archives/page/11/index.html","39f7b68c1a62e2c57c6f43256e6a655b"],["/archives/page/12/index.html","d6ea55cb46cac7e53da1e288abc175b4"],["/archives/page/13/index.html","b01e11e7836b4ccc37bf362a646314d3"],["/archives/page/14/index.html","8d773dd89fd8e0c4b2d7ac19f4eec6b5"],["/archives/page/15/index.html","f06df2f2fd3fac01c0b748a2aeb8a6be"],["/archives/page/16/index.html","96bf48da44dff6b1565714a0a62d2a72"],["/archives/page/17/index.html","9f16ca926cc7b4de16c0d68b05044a2c"],["/archives/page/18/index.html","e483ea380aeb6afdb4782e96c9f1cb44"],["/archives/page/19/index.html","41f4c8837ad35a7b0a6d4ea917883465"],["/archives/page/2/index.html","a9788e8069a5f3c9d020ce7abd27f1a6"],["/archives/page/20/index.html","8ad26a1f83f72daff04397cd337ab514"],["/archives/page/21/index.html","b8fd5bff4d001047abd6ccb739ea3c5e"],["/archives/page/22/index.html","baf6cd83db46bc5352b1d4b0935ca5cc"],["/archives/page/23/index.html","d2177556b1820b9a3749c41bb477acfc"],["/archives/page/24/index.html","4c688686e270012fec11c9d0f726a423"],["/archives/page/25/index.html","da9807a40fcc0d0b5baff45871b3c492"],["/archives/page/26/index.html","d439a1ff8aaa6787d873d589ce8a1cf8"],["/archives/page/27/index.html","162980a51f3bc0ce4d705a2f51fe7b91"],["/archives/page/28/index.html","7a12c6d61d6215ec9052b3b4464b91dd"],["/archives/page/29/index.html","bda8b80cd23832e578bec34c24e23f20"],["/archives/page/3/index.html","58beffa18894540177503aa652824e7f"],["/archives/page/30/index.html","1c13804c851d96abe724df043b6ee5eb"],["/archives/page/31/index.html","40758f17de1f9e180ace98059ed39495"],["/archives/page/32/index.html","c42c84ab6095f274bfc897285b863466"],["/archives/page/4/index.html","03374197f572f16118e6114f840ee401"],["/archives/page/5/index.html","a8049d86680ccabfcdc29a0fa74435e5"],["/archives/page/6/index.html","c12a30f16eb23f452677d0713a5586b9"],["/archives/page/7/index.html","532281479e8f5ab9f6abe4aaa2642e7f"],["/archives/page/8/index.html","1c9bb1cf5d2edcab0677817b6a772ea8"],["/archives/page/9/index.html","d73a10fc8c88f2eb7458c666a2267a87"],["/baidu-search/index.html","820eaa090ac631940b0c5c7beb7cb101"],["/baidu_verify_code-Hh2fKNlEB1.html","d45917c032fc9db1ed931241715e88c1"],["/be-a-programmer-instead-of-a-code-farmer/index.html","389a9f70810af5ed530c611b1c5155b2"],["/bought-a-house/index.html","787ca6f421985901597fa50e5017a2ac"],["/categories/C与C✙✙/index.html","6e73a53f071eeec20cdd345e19e3e3d0"],["/categories/Go语言/index.html","cd039a17d09029fd485c531462e35030"],["/categories/ITK与VTK/index.html","01c1f8bf08470e83a80d38b5548fb56a"],["/categories/Java/index.html","0e9f32f70aee748564b46f67247148ca"],["/categories/Java/page/2/index.html","0ba49a33f428763165b7415d45a9f96a"],["/categories/Java/page/3/index.html","c3c7228e09f86d62f97a67702b614225"],["/categories/Linux/index.html","dd7baea6917b68dc1281296d17ed730b"],["/categories/PLC/index.html","e3bfaec9857f8c180d9d45fdc6f26447"],["/categories/Python/index.html","296034a2ec2b75754257b1d44145566f"],["/categories/SEO教程/index.html","57ad4e8e6d56952bd64fb3b7668b4fd4"],["/categories/index.html","96d053943abb7eb8f9d01ec08878567f"],["/categories/图像处理与机器学习/index.html","841b9e112c7737f9501bd0da257d57a0"],["/categories/图像处理与机器学习/page/2/index.html","04b4274147c78422f736df5ebfe3eb8d"],["/categories/图像处理与机器学习/page/3/index.html","bb89158cdc7bada1d6d4ff2370375758"],["/categories/图像处理与机器学习/page/4/index.html","54c88d7e95edc24a5e8b0b61e99261a4"],["/categories/图像处理与机器学习/page/5/index.html","d4ffb82734f94543d905a60797d3d753"],["/categories/图像处理与机器学习/page/6/index.html","e3b734731571fc226202aa23f6fa27ac"],["/categories/工具/index.html","e29cf6cbca471b09d2f495ddd57b83ae"],["/categories/工具/page/2/index.html","abc436f17df6c3c8092047aa9e8cb5a6"],["/categories/技术以外/index.html","7b356660438c650c0167e98179a9ef2e"],["/categories/技术以外/page/2/index.html","dbb8b37411fc294386d0a975cb7384df"],["/categories/技术以外/page/3/index.html","9752b2313eb221677ddb3549d6d817d9"],["/categories/技术以外/page/4/index.html","92ddd1e6242299d4c7135799d9c0ba78"],["/categories/技术以外/page/5/index.html","e1a5fc7ba5879c429349c426b167eae5"],["/categories/技术以外/page/6/index.html","18fd735843c999933086f7424284d22d"],["/categories/技术以外/page/7/index.html","56a5ecb758de8251088e30865670f498"],["/categories/技术以外/page/8/index.html","ef34400dc2cf09518e3e4925b134a037"],["/categories/技术以外/page/9/index.html","a364d18b2ada6d38c4a4c0342f49754e"],["/categories/数据结构与算法/index.html","904b638c2a3f74e28f845d89766d6dfd"],["/categories/数据结构与算法/page/2/index.html","64a3457cd29232fd5f045f9a2f1316dd"],["/categories/科学上网/index.html","fd30fc2d5bf4cbf1e4eef4fbf6c04bdc"],["/categories/科学上网/page/2/index.html","ef76b5e96fc91e6a2e4f860e056c4636"],["/categories/科学上网/page/3/index.html","e7bdb7955089b4ffefcb1c14a519ed7e"],["/categories/编程经验/index.html","3fc2cbb470c4bf8ce5b6e1fb5111dca7"],["/categories/编程资料/index.html","8ce8c40d6185bfc3b63519a82682dda2"],["/categories/编程资料/page/2/index.html","93e8076165dddb474edcc1e1b010f74e"],["/categories/编程资料/page/3/index.html","9adefe9cdd086b4b15ef3c8d211e3a24"],["/categories/编程资料/page/4/index.html","c3091fe6fb77b25d5038059bd3da885e"],["/categories/计算机基础知识/index.html","1bddfbaadc97fdf834b756dcfe388848"],["/categories/计算机基础知识/page/2/index.html","3df7feed2ad39229a3d84b713f08a642"],["/categories/设计模式/index.html","b5450b59119fd1c811b6b1d2d9fa4f1a"],["/choose/index.html","5e1e2c0cec61385403cd9fe008389b42"],["/choose2/index.html","ff95646a95df2a1993fc0616a0bec6c3"],["/chrome-crx-intruduce/index.html","312163630211ed4031a6b5ac2090bb2b"],["/clashvpn/index.html","cc6a674c98d7480bba7c1798507536d9"],["/coder-blog-website/index.html","dd47a97a200d538330139f5024a48255"],["/coder-source/index.html","19352074c1b5d976a23c9ebf5e53c68c"],["/coder-videos-website/index.html","64b0f424aa24ab703f089f0234af0f5f"],["/computer-book/index.html","c953bf67931c1a0e540480937df8c7c5"],["/computer-censorship/index.html","594806e4acb8e0156b0e8c3fca731537"],["/computer-network01/index.html","0ab80690a48c9817256d00bd9f6dd683"],["/computer-network02/index.html","4f748eb4ed52a84200cedd60278082f3"],["/css/main.css","bc32ad34ec4990d934c3c647bdb62f79"],["/database-Mysql/index.html","bf8c2b4410de92cacdb9abc4b617f59d"],["/eclipse-lombok/index.html","477ba7b9a8a7d730a036cdb9d7255584"],["/fully-convolutional-networks-for-semantic-segmentation/index.html","eb6f01e5fc5f92ae8ae45814d731a95c"],["/great-firewall/index.html","af2352409c6b535f5b3496755dcc82c9"],["/halfrost/index.html","02f54b390c4dc042e51403f723b8d5b5"],["/how-to-signup-chatgpt/index.html","96c8704c17e676d7a5564de4c9773724"],["/how-to-use-Gemini/index.html","2df5254efdde5321a2087f9a4d6cdec6"],["/index.html","1c526a48c28a83bc38c8ac6539245084"],["/ios-open-internet/index.html","223533b38d6e6e037d41f3024ac37f7b"],["/iphone-open-internet/index.html","206e6ced4b7b8f7d85c6b95628da8dd3"],["/itext-makes-pdf-form/index.html","65ace9b65772fb9570b856d876cd0f73"],["/java-Set-Map/index.html","078181d88e26278256b782a43ee3d67e"],["/javaweb-server-error-codes/index.html","9d11c66aa10ff8cdcc9634a9fa919856"],["/javaweb-source-code/index.html","2bea33a999a2a2c18080faeaba0259d5"],["/js/lib/busuanzi.min.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/js/lib/lozad.min.js","47904d34a224931dd1b615c59a3dbe3b"],["/js/lib/prism/prism-coy.min.css","0ccad54d95845901ead59bfd3ecceb14"],["/js/lib/prism/prism-dark.min.css","a4711d2957d6605eb5682bdd228cf123"],["/js/lib/prism/prism-funky.min.css","efedcdccd7a9ab342d2d9cacd24920af"],["/js/lib/prism/prism-line-numbers.min.css","38e22e790c279bb56f9ec4b90a2a2d58"],["/js/lib/prism/prism-okaidia.min.css","5ac6f9de996fbec68aaa106dfb16e061"],["/js/lib/prism/prism-solarizedlight.min.css","ecc7e64d039873ffcf7fb27babdaeb5a"],["/js/lib/prism/prism-tomorrow.min.css","456af2a14ae4f5089939d5904ac40fe8"],["/js/lib/prism/prism-twilight.min.css","ebb5c355332a8cf9a1ce37a2a69d678f"],["/js/lib/prism/prism.min.css","a5234d614834658887cec6a9515890f8"],["/js/main.js","052d2b299d9c750afea8df0b802ab7c1"],["/keras+TensorBoard/index.html","1e210f9ad7c63822c9623561581be1b5"],["/keras-beginner-guide/index.html","4a46692c9698adddb22ea6ace61a46c8"],["/kmp-algorithms/index.html","aa7b03fd4c3c91b471e741b574c22ee2"],["/leetcode-Java/index.html","cc2f1aded8034bc60bc3fe33e3dbd233"],["/links/index.html","d2dd2e227e25b8d507d69d6eb977115a"],["/linux-java-opencv/index.html","4777071ed66b8c82e13309d75f9bc1f1"],["/msb-source/index.html","1a013e6e6d05eb22a77194be59178c31"],["/online-BUG！/index.html","9bebfe589d97d96421986999266bfc8f"],["/open-app/index.html","62b14e902c049e39cfc4613dc7afd296"],["/page/10/index.html","9b1efb468b1b777b3546df78b1222905"],["/page/11/index.html","ff9be58a7daed92692ab26f911467c4f"],["/page/12/index.html","19f84c2b1dbd577b04c79fc793d887d0"],["/page/13/index.html","f5efde89fa717e37347295db2fa2710a"],["/page/14/index.html","af894cf31bd4c8c7d49ac019407861a3"],["/page/15/index.html","cb811a0aea335e92a374573f1ecb4e8b"],["/page/16/index.html","a6950ee13139f7bc2d9cab1f7ef6faf4"],["/page/17/index.html","e775ddb4f73e2b89d1e09c4ad99afefa"],["/page/18/index.html","6b5092345ed6007ac8be28599085b19f"],["/page/19/index.html","8f0fb6a67fa3e8d7d9521f8925910097"],["/page/2/index.html","220ecf367f597ef9ba6b8161ee46dad8"],["/page/20/index.html","8920119fe292c30e5665a27818a7fe3e"],["/page/21/index.html","73f6898a55eeddc4d14cdfcaf33673e0"],["/page/22/index.html","ba41a6a8dbbb2c63674a9e9f4ccf9b3a"],["/page/23/index.html","9ffd257ede527c6693916022b90f18dd"],["/page/24/index.html","defec512eefa7f25a8e048962d4dd2bf"],["/page/25/index.html","d7b1ea39fbacb434dd415ab6630998c8"],["/page/26/index.html","3585776d19382b300a76107d70e55532"],["/page/27/index.html","9e3903716a45d5b6d0959df976c4c715"],["/page/28/index.html","9735dcc3139af46673c764b0267bbe86"],["/page/29/index.html","cad6173c7891823cb37cf3bb83d0abc4"],["/page/3/index.html","75b84927cc467503349162ee3c79116f"],["/page/30/index.html","6ff1bb59ad8b4c50e50dc85c7ce3bce5"],["/page/31/index.html","ec41b7eaffee014c51d6bcdf766dee4f"],["/page/32/index.html","40a1c333afbf12ac6fa0e4f24e7f3a1c"],["/page/4/index.html","7c70be0471964848e18433acfe634821"],["/page/5/index.html","0f5025b4185cac359d2b619df3b79dcd"],["/page/6/index.html","b597d43e503f15fffcce45c82fe3a470"],["/page/7/index.html","2f5fbca7c2f1d3226b0fc018d4186477"],["/page/8/index.html","5ab1b40b3207eed4aed5e8fd79abf489"],["/page/9/index.html","189e517c2e03cc494f8b1176151c2072"],["/pandas-data-preprocessing/index.html","97f665fcef774104a65851ef289b76e1"],["/phone-win-open-Internet/index.html","58599be1e4fc3de3fbf70b2bc647c861"],["/popcorn/index.html","48e69959eaef4ba2753f67ee124321e4"],["/python-Blog/index.html","1499601191e38facc3d15a6b9f7fe8d4"],["/python-yeild/index.html","611b9b291f5cbe6c0591146d93ce63a1"],["/python爬虫教程/index.html","71665dee41c3401a410bb127c3d41a95"],["/software-copyright/index.html","beaf5be2eca1568607a5606b382bc443"],["/sw-register.js","70c4978a9fc9d0d18b5ff31de31d01c0"],["/tags/AI/index.html","a4caa746d0235675aedc667cbb8de9b5"],["/tags/API/index.html","0e1bee7687e15dd58e72a090d2cfa6d6"],["/tags/C-图书/index.html","b7dfe3fe00aa82bcc0704f9a8364a9ff"],["/tags/C/index.html","05a1d5e69d22fcdd3736fab6e24b7c96"],["/tags/CNN/index.html","4ded040d090204a0c50f9aacdf0ffbdc"],["/tags/Chrome/index.html","108c3fd7555443bd762c6e6ea839a3c5"],["/tags/C✙✙/index.html","a07057ae42e2b0590e25b0ad4eda9aae"],["/tags/C语言/index.html","c0e92426876de7fc201349826d423a77"],["/tags/C语言图书/index.html","45bd8e9d4839f5c8d4696ca13db81f4c"],["/tags/DSN/index.html","de6ba06d719e522555d8d590d8b61b8b"],["/tags/Dll/index.html","dd22127794459680bcfffb2fbe9ed75e"],["/tags/ECCV/index.html","42a2f2b1bd356966de6acbc554a0d044"],["/tags/EM算法/index.html","8b9598bb11d66bcc16edf3727bb63e2d"],["/tags/Eolink/index.html","1c23eac1c4a810590443b9fbc86a0584"],["/tags/Gitee/index.html","cbdb43dd9daaf897f0e2ab9542339799"],["/tags/Go语言/index.html","57bf328491bd84a406aac26d978f2cd4"],["/tags/Graph/index.html","fc7ab761001d88a81930be6f357f7ef7"],["/tags/HTTPS/index.html","c24d3c719e1b9fc1fc42d3103cdda11a"],["/tags/ITK/index.html","9d202e77786c2b1bf9676238497009db"],["/tags/ItkVtkGlue/index.html","e895c654f1d20396b2ad44a81e4b4ad3"],["/tags/JMM/index.html","f978978a2cbc0c66d98a969a5ba873ed"],["/tags/JVM/index.html","0b8914739a4e7211b5822fbe343bf5b5"],["/tags/Java/index.html","15ddb30c162af5938c4d662a30fcd346"],["/tags/Java/page/2/index.html","20fca169a4f256dde8f2bc5f97ea03d7"],["/tags/Java/page/3/index.html","3aa55d8f77d2c83acaee86651ce128e9"],["/tags/Java图书/index.html","dcdb74f0a67d13654222e073b4219d49"],["/tags/Kaggle/index.html","6f538ed9bf2497ade21ac741e7b188d0"],["/tags/Keras/index.html","ec15de96b9085d1c20ef815adef23323"],["/tags/Linux/index.html","75f3d5432e9a949f87375240bcd96c67"],["/tags/Linux图书/index.html","4d392ef5162cad3b193ac71d37b5e892"],["/tags/MEPP/index.html","a98e2657ae3c303cab2c153c65dc75df"],["/tags/Map/index.html","3f80a63799ce6b159dfa38dcff35703e"],["/tags/Matlab/index.html","d9913dd62f38c43d18c45c0d6e334517"],["/tags/MongoDB/index.html","ba782272d3bef188b0cc7839fb8121f5"],["/tags/MySQL/index.html","22fd322e69ed85d1fad21237e86e6025"],["/tags/Parzen窗/index.html","246a85d77b4faf0159bc35b3935dc2b9"],["/tags/PicGo/index.html","77afe03f9fc83608948277d324f14e69"],["/tags/Python/index.html","6269fb295acc3c45330fff2991c44a29"],["/tags/Python图书/index.html","51d496a0c1613c13785d84cad6181e6b"],["/tags/SPHARM-PDM/index.html","ad831525aa994a492c99ab723243ef78"],["/tags/SVM/index.html","0ade7602cc148e0015d3c1f128328b38"],["/tags/Seata/index.html","45380089ca9a6a546e2fe9a656b7fcbe"],["/tags/Servlet/index.html","d6df7c1fea4ec113a64f09df09f4853e"],["/tags/Sping/index.html","0321ba449d2f5a0493d81441144e0e44"],["/tags/Struts/index.html","10f132e5f13ccd91b880e1f79dfb7ec7"],["/tags/TCP-IP/index.html","116815dc5f15472a42c3e4af18c59e38"],["/tags/Ubuntu/index.html","14803909f9493de034fabe374117a7e8"],["/tags/Unet/index.html","02bf67caeb143715b009bfd83b4c6cc6"],["/tags/VS/index.html","be809b7e0df8f3dc88e3eacb91bbc540"],["/tags/VTK/index.html","d4fd1a3b77ffc61356153282361aa36c"],["/tags/Windows/index.html","fa23ab88ff0177c8fdcd9d289f3dbf3d"],["/tags/edit/index.html","0bbbedcd2a0a09f1efc3d7a206e03e4a"],["/tags/hibernate/index.html","22f9afe5374373c53d216a54049d4773"],["/tags/index.html","a7f74e686d347da83a322dba027c9bbe"],["/tags/itext/index.html","8323e554215647bd50e4124a189918bf"],["/tags/jdk/index.html","e614c4afdec8f64723bb611b0561410a"],["/tags/kmp/index.html","cca182f4e56c47911d6873e279dd9f79"],["/tags/k最近邻估计/index.html","b92b2bad37bc83af79d6b9fc415593eb"],["/tags/lombok/index.html","e54889f4801fed9d0f44cf65ea638375"],["/tags/offer/index.html","df30bc2daf9f7ec678a4b5f52dd0f805"],["/tags/opencv/index.html","013c1b87358d8ee7c7745fce5232f9b5"],["/tags/pandas/index.html","eb573787622cab5a385fe03d499379f5"],["/tags/string/index.html","dd35f658dab525ffb09622eadfa3efc0"],["/tags/vim/index.html","d60afe828246b7605532bb135fdd1ca4"],["/tags/vtkPolyData/index.html","edd89981c57e5a8ce58e4d2cc7df184d"],["/tags/web/index.html","ae3b0ca48e22ec3d0d63ea9251870932"],["/tags/xshell/index.html","46ab2352008f34d8c245776c3fab0064"],["/tags/yeild/index.html","d3a3b501de2b28470506dc499d051f68"],["/tags/互联网/index.html","654bc5605877741a3ca0806245f23a5d"],["/tags/人工智能/index.html","f76a2216bcdb32f87dd4c64be3af244f"],["/tags/体绘制/index.html","ab571697735c88fad2bbc11ec1d5dd34"],["/tags/全卷积网络/index.html","22e0a09d99645de21bafe78410a6954e"],["/tags/公众号/index.html","4d785262bbf268b8ace7c084d758104c"],["/tags/内存模型/index.html","c8b474bcadd15c20aa27aeb4f3034d86"],["/tags/内推/index.html","81e857cd2a98e60d3585633a5cede0f5"],["/tags/函数/index.html","9d8f7756c06c161fd1e8fe438360a64c"],["/tags/分布式/index.html","3b8d4fad53bd4c586eb02c7d69ae8898"],["/tags/加密/index.html","0fd594e4c364092cdef1a85d5ecb3332"],["/tags/医疗图像/index.html","7746553aced702d64fd249eb1d7ffba9"],["/tags/博客/index.html","d7a6bc933526b73f148acb737f57f838"],["/tags/图像数据/index.html","9245602b979d3b67418fd604dcaa1966"],["/tags/图谱分割/index.html","8bce7acad8f980d08b62d3c8b83732e7"],["/tags/垃圾回收/index.html","aa4f1ebe4c616a8c620d3b58d809fd91"],["/tags/多线程/index.html","5ca12981a6cce883e822d9f801544342"],["/tags/字符串/index.html","2210c9498e1d4db51a66288c903c48fd"],["/tags/工具/index.html","80e1d4c7d5591c2d186ccb5c883d1532"],["/tags/工具/page/2/index.html","529b2f596778577e2c3ac82c869014c3"],["/tags/弹性形变/index.html","915e774d3797c5b4d0e4be32757eb92b"],["/tags/排序/index.html","767325985c89c6d5b92338cb775a088b"],["/tags/搜狗/index.html","c90d7705162375a899ef9e8841717710"],["/tags/操作系统/index.html","45654793667578b442bbc225936cbd10"],["/tags/数据库/index.html","d75a03f6de1fd1f874de5507c2beb677"],["/tags/数据类型/index.html","65b0826c8901788041d1c828a865883b"],["/tags/数据结构/index.html","37c761b6060ea9768353e684e3c47e29"],["/tags/最大似然/index.html","5976f9ff9a7a388947b75d22473cd67e"],["/tags/机器学习/index.html","54053b0245689536dbc6ecbac3f580da"],["/tags/机器学习/page/2/index.html","4b2e60ccccb837f9d6ff54a685f9818c"],["/tags/机器学习/page/3/index.html","c10b1f916b11266035637d864b962202"],["/tags/机器学习/page/4/index.html","b2e586f872b1dfd3037437ec60cfb6ba"],["/tags/机器学习/page/5/index.html","4acfad0fdc5354cf2fa0be5ee6c3822f"],["/tags/树/index.html","c3fe2b2ee08a8d101d7c14ac8083c855"],["/tags/框架/index.html","0f9fa9f4dd2770b149082d495b593361"],["/tags/求职/index.html","0a827b14094c4c47bf3f0c6b4249237a"],["/tags/汇编语言/index.html","23ce3550f1c16814186dc0b61a1d886c"],["/tags/深度学习/index.html","761e845aad898e797e4094df5f9288fc"],["/tags/深度学习/page/2/index.html","607b82f80b3f9f2f4a3ba3a1f6457444"],["/tags/深度学习/page/3/index.html","ef7a30757ca705eb580f5287f9921090"],["/tags/深度监督网络/index.html","4f14900ac66501a570761d27329f2651"],["/tags/爬虫/index.html","26b805e7ea472c83fecb7445fff75e50"],["/tags/电子书下载/index.html","6ad68d73a13a30128cfd3f562bb8f182"],["/tags/电子书下载/page/2/index.html","6a70d56c1697e8da836a23c8bedfa7bc"],["/tags/程序员/index.html","e2084eb302bb3cd998df1c6536f482b6"],["/tags/程序员面试/index.html","94c02a2e0c57103e7e73fa324caae8d1"],["/tags/简历/index.html","a35512b7a0b71e267fb7cf36c920035f"],["/tags/算法/index.html","6791154ff61dc3d0c75bb2ab56a62ee6"],["/tags/算法/page/2/index.html","bae7855a289cd57499e9c17db268de1a"],["/tags/算法/page/3/index.html","88c4aba807891b8871e13342a2535274"],["/tags/线程/index.html","3b40761e7387c16eba509db02885945c"],["/tags/结构学习/index.html","87fa334eacee3c8cb0c4fec7288ababb"],["/tags/编程/index.html","9d56d756174c20b0d9236711267ade45"],["/tags/网站/index.html","83f91afd154c62dd5c0c7787ad93130a"],["/tags/网站/page/2/index.html","3feca189830bfc2750be8f6ff8ea9785"],["/tags/网络/index.html","99ba1fded2859222236e08c07df4d3e8"],["/tags/网络原理/index.html","9333c3e341733d6024dafa6d33762cd6"],["/tags/肝脏分割/index.html","3093172f9db31ceefa6f0c9a73fd65bd"],["/tags/计算机/index.html","de959bbeeb453a7f01eb8188e516153f"],["/tags/计算机专业/index.html","8a639a74bd961ee0fbed0ecbd1b533ec"],["/tags/计算机网络/index.html","e6ff5d8e8506c45889c94a2590787357"],["/tags/设计模式/index.html","9c65d116232774309aa2dd2ed9ec8f00"],["/tags/贝叶斯/index.html","fb1bc5717b6f6fb068d28ddc258a2ee4"],["/tags/迁移学习/index.html","fe1bb948bbecfcaf1b0a63af642c85aa"],["/tags/面试/index.html","98a917a87ee6aa3e21cfb55f24564a44"],["/the-way-of-pragram/index.html","399064da36de00c5b3a6c3d5d33107a1"],["/untiypro XL安装/index.html","cca5a5af5c61699589e674bf4fa591d8"],["/video-websites/index.html","b627f8bd3c5fe93b778211224b3626fa"],["/wechat-fans/index.html","f011de5989f65a77f6424bbbeba4783d"],["/window-run-VTK/index.html","3fe310fbde5c14a7a5d55c959de867fd"],["/xshell-connect-Linux/index.html","985feb028369057edeee6d53cf18472b"],["/‌Accessing-the-Open-Internet/index.html","df0a7aa0e74bf382b076f262970c3385"],["/《Java高并发编程详解》，去大厂必看！/index.html","278b9d67d5b8faad3fdf5c870af700ef"],["/一分钟没了 1.5W 。。。/index.html","1b90f3ed7382a0087e77c5d3513ea90a"],["/一条高产爆款内容生产线/index.html","6b00a314c9db565fbf825d438b695fe4"],["/为高考学子推荐的六个就业前景广阔的专业/index.html","17f1f3b40cca46453153280c63f07d7d"],["/互联网赚钱机器---社群/index.html","d53bde36ebee2d837aba739afa8bf556"],["/你们常用的工作方法和思考方式是什么？/index.html","ef0d2b7795a9d4722f1fedccd556379e"],["/关于环境配置的一些事/index.html","76d2f64b365bec36075918033d6b0c6a"],["/准备了19w！搞事/index.html","3e14771fce525261efacd38102ee65e4"],["/几个很重要的感悟/index.html","fe97bb89195040a90d0a5a1fb18868de"],["/分割ROI篇/index.html","701b3f5d386bdcb7768bf91ff98e5d47"],["/分割精度说明/index.html","1497f00cb9042bafd98c1155d548a52e"],["/分块程序执行/index.html","8f858db5712e159ac9afbf9d5a047548"],["/加班公司黑名单！！！/index.html","d332e960a64b1ab282ee22eb901eb508"],["/卧槽，上知乎热搜了！/index.html","fed0ff068435cdafdc6a6d500d71af96"],["/卧槽，我的小破站爆了！/index.html","d6028ac91c57e64d19e1ec6d00e1cc94"],["/卧槽，我被盗版了/index.html","2694c203153e414326b7a8011ff9966f"],["/卧槽，还有985大学在大一上C语言课？？/index.html","55625ed1bd5548bf28c91574564607f1"],["/历年微软面试中出现的leetcode算法题/index.html","df81fea99ae0443a25bbe44387380891"],["/去特斯拉试车了/index.html","9229b5272c4af244448705f93e1b2f29"],["/吃苦的三种境界/index.html","5419340c687a476ca76ec076be6c6f64"],["/哪本书适合推荐给 Java 初学者？/index.html","1ecb90dbb9b11876053e145d3003a352"],["/哪本入门级的学习数据库的书最值得推荐？/index.html","5092a44a2e2c7b21b194a88fd1ae4a7a"],["/国内外常用的AIGC模型/index.html","a1f6601f80fca303fe1fe24eda64bdbc"],["/国庆假期/index.html","5ca1c4116077caa5f4accf9963720cbe"],["/图谱程序字典/index.html","796c83bd9869cdfe9c4f3dcdd3afaf11"],["/图谱训练与分割/index.html","39ac41ccd238e9f76d79bda247ad5a1e"],["/宣布一件大事/index.html","9ceb7c4c9c1ff16a1c6046ae437e0e6f"],["/小鹏P7i试驾体验/index.html","63fa74cbd027a7705ceee9fa795b9edf"],["/微信PC版3.3.0内测更新，电脑可以刷朋友圈了/index.html","1178ce64be5b16a388d7d5cc45e0791b"],["/怎么更快的赚钱？/index.html","97e9c0e7679e89b3828444b74ace00f7"],["/我毕业了/index.html","41b855356eaca5c2b89ffed1c01cc737"],["/我！真！的！找到了！爱上学习！的方法！/index.html","a68be39ac4f6ed1407e657f5e49aebf7"],["/户口的意义/index.html","a40f83a60ee4e6cf2d67555a4a47d1a2"],["/推荐两本经典算法书/index.html","07037754c05d9778205de019f58f0aa1"],["/推荐几个在线学习SQL的网站！/index.html","d8d121901b354d94175aa803841512c9"],["/搞了一个程序员成长晋级社群！/index.html","6eba7a6cfebc12c22a413ae79b91252f"],["/摘抄/index.html","5adbdcb9c4d14389b52775415548ac30"],["/暴跌30心态崩了/index.html","3cc500207481ec50ccada39e03d10d1d"],["/最近很火的ChatGPT到底该怎么玩？/index.html","f55ec01c5c7b0bc3ec991521d1d19aa6"],["/有哪些好看的日历可以买？/index.html","821c054b4c9cd75581da93ae6add41af"],["/服务器有啥用/index.html","e8e6646d102b9294721f2d006604a26e"],["/来长沙了！/index.html","7a2c5242bf28a909d094a94d5f8ccebe"],["/校招污点公司名单/index.html","0d92a8c948ffd52b058ef83ba32c8436"],["/梭哈200多万/index.html","9e1d5756695b681712c69ad35584ad33"],["/梯形图入门/index.html","f1eae0b952b6bf8a4537dc0cdb9c0147"],["/橙心优选，凉凉了！/index.html","e00b10aa797f837b8f4deebe3b58a307"],["/比亚迪汉试驾体验/index.html","696a77c28c1ca0149f4f0f8355427057"],["/清华转学成电，真的牛逼！/index.html","f1faa03fc2b6fde15758dafef962d52d"],["/滴滴程序员被亲戚鄙视：年薪八十万还不如二本教书的/index.html","0336a2ed0b2289176db08f4cf59db814"],["/社群！/index.html","f4444b679d539d08cbd9d0315212a7f5"],["/科学上网之VPN篇/index.html","71f2c04987ef2b771236b536305ec805"],["/程序员必备的几个技能！看完你也是大神/index.html","f9b25b53c2cee41f3528afea114b87de"],["/程序员绕不去的槛，Linux！！！/index.html","bc4fe5d70e431c64abd2a409557c1c54"],["/蔚来ET5试驾体验/index.html","e7dd4538d969b2db94793758a99b65ec"],["/蔚来，牛逼！/index.html","d60086339f787af972a01186ec929b37"],["/被录取了/index.html","9889982cc0a4a745a5fb2076c45cc9c9"],["/被找事了！/index.html","634e2d351b7addaa02b0df4d8c65adda"],["/被拉黑了。。。/index.html","8e49239d9cc38abcf66a580739e35179"],["/被车撞了！/index.html","d0dd5b06ab134fb264e3e2d506a43bce"],["/该如何选购固态硬盘？/index.html","1c54088ec5b435b30cb82fca344f0197"],["/这本书一定要看！/index.html","e654e157e23c4998e90fa2e6a99759ad"],["/选Java还是C++？/index.html","242c6429ce7a5d3737412d025bfef1e6"],["/那些让你起飞的计算机基础知识/index.html","44c6f06c832d1c4869db925b8cda4a42"],["/靠这几本算法书，成功拿下大厂offer！/index.html","29808089e2a009bc8a2186a7ccbaf823"]];
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
