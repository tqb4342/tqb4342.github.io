/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/0010-city/index.html","131622182233c934533821b319fa1adc"],["/10-algorithm-book/index.html","8032dc18bcb6316bccecec62985302d1"],["/10-website/index.html","b7ca7fde61a1e7f1256269c1c865a7c7"],["/100万的小目标/index.html","be810681c2606e1bae961755d97dcf21"],["/10w+YYDS！/index.html","72bc3bbb049b1e3e701a0fe0d448c135"],["/12-technical-tutorial-sites/index.html","e07afaa9ca1dd2319d5ca83913e0bb84"],["/2 6 岁 了/index.html","a5393690d74c8b76c5e8fde032475ea0"],["/200万，啪，没了。。。。/index.html","f3138e67fef2bf19da59aa8f125700bf"],["/2018ECCV-Paper-DL/index.html","2320ce010738c47bfc1c3519e9a81219"],["/2021年固态硬盘选购最新攻略（小白避坑指南）/index.html","4326a077c8ee5d750cd3d6208412d798"],["/2021机械键盘推荐/index.html","b20854c1ccdca3092224f8d93a2d8c54"],["/2025-07-15/index.html","8b90f54ba39e0fb9f60caf217c6c5e35"],["/27岁了/index.html","e4eeb5c00c3dbb567c6ab470fe87157c"],["/3D-Convolutional-Neural-Networks-for-Human-Action-Recognition/index.html","6e10621604fc00c0f0ff05aee5025211"],["/3D-Deeply-Supervised-Network-for-Automatic-Liver-Segmentation-from-CT-Volumes/index.html","36970d8cae4ca4bad704dc76ecd99f41"],["/3D-Unet-Experiment-notes/index.html","592e55015e43becf4922f5e5098aa183"],["/4-Software/index.html","be3085b351f15402d89f28b4708f5093"],["/6-website/index.html","5878036c8c57d7e26185b9095a08dc5f"],["/7-terminal-tools/index.html","3cba1e964acf339c973e6cd3dece23f5"],["/AIGC中典型的深度学习网络/index.html","af4803d163a00d72fbabd76ee6a6326f"],["/Agency-model/index.html","bf20faa932957101cc615f518bc6c327"],["/Algorithm-brush-notes/index.html","e45cc8d55e7a20ea196caec0efd49cc6"],["/Ali-recruits/index.html","d17f024d1d1f835915af7d5e6f9fba83"],["/Android-open-internet/index.html","0f689db2d7199f94d0cbefe51bc6e866"],["/Appearance-mode/index.html","d03c39a481bbc2b18e0e0b6708ca25a7"],["/Backtracking/index.html","e9a22010e77d4385357013706bf9e1e0"],["/Baidu-Sao-operation/index.html","33741808e5522825cb2bd1663dfc974f"],["/Batch-Normalization/index.html","7bfb9a3746dbb4bca125c8c909fe2d6c"],["/Best-AI-tools/index.html","a0a7d0c5014cbdff906436647fb93740"],["/Bias-and-Variance/index.html","935e09f06e009df7f10db13f84b488e2"],["/Binary-tree-traversal/index.html","fe672124187b9cf22c061c873ffcad5e"],["/Branch-and-bound/index.html","1ad122b8bac23dacb28b15fc74e057c7"],["/Buying-computer-for-the-first-time/index.html","d7e7e67d81670a5bfe1430879e7063d5"],["/B站向北邮道歉！/index.html","534998de1f9796081c84cde5d63bf2c9"],["/C++-string-function/index.html","8fedce497ba75d4095c7156472ce2635"],["/C-Java-DevelopTools/index.html","05ace2dfa1f9c662c86d74c5ee8d9410"],["/CS-Classic-Books/index.html","1fc0c3d0bf90d0489962e33586de0dec"],["/CS-network/index.html","faa91cc91f48ed5264a7880d46cc8126"],["/CSBook001/index.html","435fa092645474d987e3ddc74701bf93"],["/CSBook002/index.html","df49ab4f54dc6f9c006e9c7a65e20610"],["/CSBook003/index.html","b962981129fac89252054bc24d433af5"],["/CSBook004/index.html","7df246bcef5af5ba2d9450f50624c6ed"],["/CSBook005/index.html","1beadf5d14b7eafb29bcec80333d560b"],["/CSBook006/index.html","b210ba5868ea650db6301fde3567f75f"],["/CSBook007/index.html","b28bafd1846b7f66fea6315057568a3c"],["/CSBook008/index.html","efb41164c7a77bbf70a304c9bb46045e"],["/CSBook009/index.html","f74ea3ee1e1c56afaa0f953d65f05b97"],["/CSBook010/index.html","980a4f6e6855c765d1d41c32490158c0"],["/CSBook011/index.html","d1a493dbd68575b9e1000308b2edd180"],["/CSBook012/index.html","98970fd951a8050c4f097cd0d5d08f13"],["/Changsha-really-fragrant/index.html","e785a14b3927409902ce7723ce61c291"],["/ChatGPT-VPN/index.html","cb112390d1ef67d341ef0a8b6fbf940f"],["/ChatGPT/index.html","36cdd9883b28058a8ec7b2b89c5a952a"],["/ChatGPT！王炸级更新！！！/index.html","d47e22f55859482ccecba8ad93744ca3"],["/Chrome-crx/index.html","0ac35e10ce694ccac93076588866d8ce"],["/ClashForWindows/index.html","a113df4a97181613487245e7c67c27a5"],["/Computer-Classic-Books/index.html","4a8ef5f1bdd8dd3e3efd83474a753180"],["/Computer-for-another-major/index.html","de93e819005e6f3f39b8fba3ce421502"],["/Conditional-confrontation-network/index.html","74ff7ec4d3837f8ac0f9a7bb9f9783d0"],["/DNN/index.html","e9149cd4eb55945c171ae51f2b038d9f"],["/DSN-segmentation-liver-experiment-summary/index.html","b048317900103da3e998f62f70760f8a"],["/Data-enhancement-elastic-deformation/index.html","48fd9200f874b1c57ada72adb4df53fa"],["/Decorative-pattern/index.html","d2090be39ce22fd302ffd4a1882ee6bd"],["/Deep-Learning/index.html","88f246ed4e042c5213279878ad2653cc"],["/Deep-learning-and-medical-image-analysis/index.html","6600631efab290b15d71a3ef5dd3b22b"],["/Deeply-Supervised-Nets/index.html","a2684bb5e98faca26553a1ad39f0e915"],["/Deformation-model-based-sparse-representation/index.html","12597b3d616764799290f3a32019ea22"],["/Discriminative-and-Generative-model/index.html","ddc565dc3256224cff845f9f146e542b"],["/Distributed-transaction/index.html","6bc2c53b9403aff03e9b69214d67bdf5"],["/Divide-and-conquer-algorithm/index.html","87ea7fb86fdd0d5cd393940e80933f35"],["/Dll/index.html","3813235998e773f5f1502b9fa98cf6f8"],["/Dynamic-programming-algorithm/index.html","7281fa88ddf74cb3351b493cb131455f"],["/E-book-download-commonly-used-by-programmers/index.html","9180886cddb3149237fd957bea384107"],["/EditPlus软件的安装、激活和配置过程分享/index.html","c4ea8ac2982208b70708bee1b4f6b8a2"],["/Eight-sorting-algorithms/index.html","9a4f48c1c36f34326e97ef2c278fb8fd"],["/Encryption-Algorithm/index.html","0e220ccd481cec804755f177f4d5ad8d"],["/Eolink/index.html","a3bb23b21198154be011271cf1b0fa3a"],["/Factory-and-strategy-mode/index.html","71bd872d512c61e5d7faecbfc9efaba1"],["/Foreign-technology-blog-community/index.html","81d835ebf814608a300de8309eb6abc0"],["/Functional-model/index.html","27144a3380119c22310fd27e3c59cf2c"],["/Fund-type/index.html","e714951435358bb01fefc20f8bb1a1fe"],["/GPT-4o/index.html","bea4f7eb9bcc13c67cadc77cd286214e"],["/GPU-medical-image-processing/index.html","c78d7bdae966ca7030f72bc63e03ac65"],["/Generative-Model-of-Unsupervised-Learning/index.html","08fed8a7454848217fa16a4f4150eeba"],["/Git-Learning/index.html","7fc309953a5022209d84fca59ca9b5bf"],["/GitHub-2FA/index.html","c8817f598c563f0eb28545b32915fc5c"],["/GitHub万赞，程序员必看操作系统总结！/index.html","c72412ea543ece816bf25663126afaee"],["/Golang-book-recommend/index.html","a4b81dcf7835105b9bb8890a82bbab30"],["/Golang-learning/index.html","8eb27c9ac1cf37da415974e7c442b1ae"],["/Gradient-descent-optimization/index.html","2e47abb57b8a08c29bc9c9bea1fc6fd4"],["/Greedy-Algorithm/index.html","317196b923740f31679587ea5272701a"],["/HK-bank/index.html","9d760ef29e75ad8bbbb24900079a95a9"],["/Head-to-head/index.html","373a12f37411f1b703129ee7acbcdb1e"],["/HexoPage/index.html","2fe507718fe73b83d6718c056e9aa65b"],["/HistCite-Pro/index.html","c019ac9eeeb60dfead90ab15bf894c85"],["/How-does-the-program-run/index.html","60c99497c088bb9132fad4327cf0fcd7"],["/How-to-judge-whether-technologyisreliable/index.html","a9996158dc9f1e51946f7fe922101444"],["/How-to-learn-design-patterns/index.html","99f8bc3df35250ca10d585ab6fe34fcd"],["/How-to-learn-design-patterns？/index.html","050f9b85d3d4973de98efd8a5db6f1ca"],["/How-to-teach-yourself-programming/index.html","07da9c263e2c4da87bf6ef72f403f727"],["/How2learn-Python？/index.html","a493a5cc07389b27bb4d3e14ec174fd0"],["/IDEA-shortcut-key/index.html","f9b9df83fd3b2cbd3fedc17d6d9e5494"],["/IT-interview-basic/index.html","009ab20fab760f567d66ec2d1b3b5748"],["/ITK-VS-install/index.html","bd813379d3293760437e1c84316813b2"],["/ITK-VTK-ItkVtkGlue/index.html","36d2017d2e1539e281846f6e6bf680ba"],["/Image-processing-plus-noise/index.html","9bac2020a6fc976964334fc9cd774da8"],["/Inception-Going-Deeper-with-Convolution/index.html","8ef1fbdb0052abf1db7a6fa451d7b30c"],["/Java-GC/index.html","a2cf4b913aa63b0d1c1d762d3a66ebbf"],["/Java-Servlet/index.html","2af3a66ff1a3e6a794ef6aacf2f3e379"],["/Java-array-and-collection-sorting/index.html","28ba71da5d7da506c36a6d40aade957c"],["/Java-development-tools/index.html","9220a6187109a89658e0674d01fe851b"],["/Java-eight-data-types/index.html","a0a6ee0a4c232268b233aa7c4768755e"],["/Java-interview01/index.html","2af6c824ee2e794b69bc2f4a867c5a63"],["/Java-interview02/index.html","f343d98c3841ec806c18b62da6e96c24"],["/Java-interview03/index.html","39fa7714d51d10141e201e78028c1ea2"],["/Java-learing-map/index.html","f202c35b52df367a591eb3b0e1db01ce"],["/Java-learning-route-map/index.html","809913b3d988aac496b6e0b5d6a2d7b1"],["/Java-memory-area/index.html","e648f602b5860af16a2eed5ecdb83bec"],["/Java-memory-model/index.html","5f400d2f184723282acb47acee13bd98"],["/Java-multithreaded-learning/index.html","cbfa835ed6b0ccf54b56a54c1599bd50"],["/Java-project/index.html","6f74f1cec03d5cc75a30b8bfac72e7f1"],["/JavaWeb-Chinese-Garbled/index.html","27123d3183fa341a7e53137b7477d3c8"],["/Java还是C++？/index.html","c6332eb5b3c44af83045cf4f4863774d"],["/Kaggle5-step-guide/index.html","fdb9546b39cfba70426dda55586cc85e"],["/Knowledge-points-of-Java-garbage-collection/index.html","cd070eeaac0ab978953a01d4545a8f52"],["/Layoffs-and-Hiring/index.html","027f59eabd9b3a1a1208b2befdeab905"],["/Linear-regression-of-machine-learning/index.html","38f3e07d0267c404f508b0889b15b595"],["/Linux-Compile-C/index.html","0ecaba34ce9a68eba3c35d8e2e92ce39"],["/Linux-ITK/index.html","b2c55781fb727a096c7febcc25eef1c0"],["/Liver-segmentation-of-sparse-components/index.html","153e65cbf4f0d0906f26b4d2286acebb"],["/ML-EBook-paper/index.html","b258fc4b3dca312a03efcb930def67e3"],["/Map-uses-multiple-maps/index.html","bf0b00df994209678867b0c13efc7c61"],["/Matlab-Graph-cut/index.html","9b13239792a1acb18d756743ac0022af"],["/Maximum-Likelihood-to-EM-algorithm/index.html","daba254bfdf2ff2fc5b7f97d01b75216"],["/Mean filter and median filter denoising/index.html","b8d35244a733cda720238d1b5b0e8be0"],["/Medical-Data-for-Machine-Learning/index.html","9f624c3c71e4a378fd510268f8b67bc4"],["/Medical-image-analysis-deep-learning/index.html","5551502ddd0e0a1006658f7812f423ec"],["/Medical-scan-image-processing/index.html","a26ca58ca24b32523e31fd52417fa394"],["/Merge-sort-algorithm/index.html","0419abbd4a1d37ffb19494b8f9314827"],["/Monthly-income-2W/index.html","f41b41f32c51b4ab4b9f38c0c1b95d66"],["/Mysql-database/index.html","276e84a603ef37c1fe2babed061f8ee1"],["/Neighbor-Embedding/index.html","4f723477062ffb4c614d06edd02c4f95"],["/Neighborhood-approximate-random-forest/index.html","bc167ae8d219377b4e6f55a19171c352"],["/Net-and-official-documents/index.html","3c96e6dae2e0c071bb87ccedcfa4c772"],["/Netflix-VPN/index.html","cf7425d3594dec30a00bbf179029ee71"],["/Network-principle/index.html","fffd65482860c7f792a89bc84a6fb778"],["/New-Hong-Kong-stocks/index.html","152ed88befd6d8c37e7919e04002093b"],["/Nice-to-meet-you/index.html","56130d156e663c2b8cbe6188efdbeb2b"],["/OS-processes-threads/index.html","74ba44bedb14702e828e6e535cbafb3a"],["/OS-run-environment/index.html","6233dbd142113bec46aea5f7d14f7535"],["/Open-Internet/index.html","5da12233d7ef8219af6969fcc02461a6"],["/Open-Internet2/index.html","b10e0729ce1d6358bd26dd52e20878de"],["/Open-source-community-and-rewriting-website/index.html","b42eee40d46531cb15f9c449dec52660"],["/Panoramic-image-stitching-based-on-SIFT-features/index.html","3b03dedc9efd860c10c61283938da486"],["/Parzen-and-KNE/index.html","4b6eae0adf70695079c1207d70022202"],["/Personal-technology-blog-site/index.html","c0f481c1e869a8e20774b929cc5a2dd7"],["/PicGo-Gitee/index.html","6c7f697e41d5cf8cf59c2dcd3df981d9"],["/Programmer-treasure-chest/index.html","3869b383f013d92335f454f05fb5b26c"],["/Prototype-mode/index.html","8337954f538771e2ddde22c2dbe650bb"],["/Python-base/index.html","f50be9896d84ecdd69df317acc34e27f"],["/Python-crawler/index.html","53572dce2da0ede8eb8cec8ded327719"],["/Resume-revision-suggestions/index.html","60fa5299d47dc32a52fbfacc6f7ca1c0"],["/SEO01/index.html","c85b5280ac32cbc3321fb839f68bcf94"],["/SEO02/index.html","1f96b5792026809f0118a5634e75170a"],["/SPHARMPDM-MEPP/index.html","0920faee347508f9f7cccc265b6940a7"],["/SVM/index.html","2cfacc929bf042a73a231f19b457321c"],["/Semi-supervised-learning/index.html","f42724dbcee58d1f73ef91823a4c2e1a"],["/Sequential-model/index.html","3a910ee0553298253ada42525ff7eab1"],["/Shape-Based-Human-Detection-and-Segmentation-via-Hierarchical-Part-TemplateMatching/index.html","09f8739136c3eeaec86bf7c966cab95e"],["/Spring-basics/index.html","092372c1019ecbba6591c50cc38c7e77"],["/Spring-integrates-hibernate-Struts/index.html","09b7866f84563b1918725ddb734d3e48"],["/Structure-learning/index.html","2c6b5905cc044288667c4498b66bfb2c"],["/Suggestions-for-self-study-of-computers/index.html","bccca73725fc434894c8061db608dde7"],["/Summaryof-HongKongStock-Account-Opening-Links/index.html","c832a8e7208c638a694f6511bc47217d"],["/TCPIP-detailed/index.html","c0ca526cd704ae3dc6976c2e963be0b7"],["/Telegram-VPN/index.html","9faddd4f4ba1fd60e45b84932264c293"],["/The-essence-of-shopping-festival/index.html","34e22af2cfbafda632273f7b2d9cb99f"],["/The-most-important-investment-in-life/index.html","1de575e2047c5f7c52acf2f5a1a2342b"],["/The-most-successful-nvestment/index.html","405015dfc7a9b384f293be50b99bfaa7"],["/Transfer-Learning/index.html","c9925f2a8db70f0a749bf85bd4d99c10"],["/Transfer-to-computer-major/index.html","c2ab1457b67e4f45a667131ccdca0a6c"],["/UNet-Convolutional-Networks-for-Biomedical-Image-Segmentation/index.html","535cc91428466eda9a2315dd2465d092"],["/Ubuntu-install-sougou/index.html","3fd079df0dec427e6bfe8a80ce108892"],["/Understanding-of-paying-for-knowledge/index.html","b13d8e606653679a0c2149d5667975f2"],["/Unsupervised-Learning-Linear-Dimension-Reduction/index.html","a8d8f592a92a7317432eaedccc81eeb0"],["/VPN2025/index.html","46d6158c4f13560337c18d92e8ad7abc"],["/VTK01/index.html","acf82dd06b7845515da874d94faeefc9"],["/VTK02/index.html","05062e4c891a2a243f770745a5378c6f"],["/VTK03/index.html","110db11b5a1ba7e8fbd5569a07e8b9e6"],["/VTKRead-write/index.html","a908b29d03668fdab0b961378ed1e506"],["/We-are-all-good-kids/index.html","c2f5dc8d221b9bfb9c28237dc30e9dfb"],["/WeChat-80/index.html","f8dc027746902b9c42cccc2089fc5790"],["/WeChat-red-envelope-cover/index.html","50b293cde79a6278d44c662abcebeba1"],["/What-is-crawler/index.html","6eb93060bce262ba69f0392ff8dd0381"],["/Win-OpenInternet/index.html","1ea2a9b6b83fe37388c4c7d90bdcc75f"],["/Windows11-2kfans/index.html","da39c830c1f7664ef69517e76cada546"],["/Word-Embedding/index.html","95baebd3d453b79e4ff0947e4b390947"],["/YuanShikai-and-his-Beiyang/index.html","498f56712a8143f5090bdea7c97943c0"],["/Zero-copy/index.html","675cca5cc77d2c10ebff36607e3d0d7e"],["/about-keras-model/index.html","adedd812c3ff735d28c3b1be113328fb"],["/algorithm/index.html","247b509c0cb5cc54a7236fde6f9bd88c"],["/alibaba-Java/index.html","3abca931042d467e4ae8c05871724a49"],["/archives/2020/01/index.html","203312cac4dd4f2c0c4ad4182ccf41c1"],["/archives/2020/09/index.html","12f6429ed934f74a19bdc1433036eb89"],["/archives/2020/10/index.html","2b971e76fe9980fb55c04415fcf47f49"],["/archives/2020/11/index.html","d3464ad988f58839a338c4bc0acf3416"],["/archives/2020/11/page/2/index.html","c78f053d7602661677370e7807a47af2"],["/archives/2020/11/page/3/index.html","543d02c452adbe850676a5121046b64d"],["/archives/2020/11/page/4/index.html","4da5e3f4d29c3822d9cb84cd56d8aea8"],["/archives/2020/11/page/5/index.html","8e2f749a7b0f5c0c4afd66d445db3fcd"],["/archives/2020/11/page/6/index.html","d08acdc819554f7b8093575f90e69aee"],["/archives/2020/12/index.html","8d5135cab9a34fbc66e2949aec9f5c94"],["/archives/2020/12/page/2/index.html","60b1a08e7f09cb6b7bcb74dbfa7ae737"],["/archives/2020/12/page/3/index.html","ec564458f52432d9ba5405e4e22eded0"],["/archives/2020/12/page/4/index.html","bdafc3d79a04de33b7ec366159ce9508"],["/archives/2020/12/page/5/index.html","3a165c42ded19d09d9c0903015177f4e"],["/archives/2020/12/page/6/index.html","b5c8b72c7c9e2179d05ada37822d9a37"],["/archives/2020/12/page/7/index.html","9a57a292aadce45ff33958a42d4c0e79"],["/archives/2020/12/page/8/index.html","a7fcd8a96a4506e16cc625b185bc9c22"],["/archives/2020/index.html","309a90a95e4830477f0ac6270a385797"],["/archives/2020/page/10/index.html","0a733954ae985192daced7058940e39a"],["/archives/2020/page/11/index.html","b17356f1c4a0932e6cec08e2df9d2645"],["/archives/2020/page/12/index.html","987206eea59bbca6b4ba11e899953840"],["/archives/2020/page/13/index.html","c4466510e867d2c910ed078923236872"],["/archives/2020/page/14/index.html","21d1010e36ebee093436058e39749726"],["/archives/2020/page/2/index.html","c42c319d3c00cf380e8b7587d9d9a791"],["/archives/2020/page/3/index.html","77f88f228537fc1046b417fdf8e36984"],["/archives/2020/page/4/index.html","93fadff341a101e564a893e8ddcd9a7c"],["/archives/2020/page/5/index.html","3c332cccbc7b0f0820c9fdd67d3f2cf1"],["/archives/2020/page/6/index.html","8b4da2dd969f05d819e19b7c63c55f49"],["/archives/2020/page/7/index.html","f35dd3501eb5f804de15177d8887e471"],["/archives/2020/page/8/index.html","c9e898f21fd064ca51a95c189a00473b"],["/archives/2020/page/9/index.html","9a1cc5fa16ebb4b225d34e9aad247080"],["/archives/2021/01/index.html","0cec8057d2477adda35d8cabcdd39c04"],["/archives/2021/01/page/2/index.html","ee21f0423be9615eb9698725c9ac596b"],["/archives/2021/01/page/3/index.html","d67a5a147013f8dd0710533c29d2f0e2"],["/archives/2021/02/index.html","d1d8c5c9dd9425fb73462145f2a9d62f"],["/archives/2021/03/index.html","58d74131118da660a4fb9d769f6e1b80"],["/archives/2021/03/page/2/index.html","83343820c8d5726c76c13049828b8e82"],["/archives/2021/04/index.html","6ec6b62334a4dde748683d3c4ab126f1"],["/archives/2021/05/index.html","cf03f16a8a3bf9fd40143a54e124d0de"],["/archives/2021/06/index.html","2148e49aeac365e36043232b8453aeeb"],["/archives/2021/07/index.html","75baddfbd0a5319b0ebc80b5a906cf16"],["/archives/2021/08/index.html","46a0b9727b0b7ba95026f7c6df6d87a5"],["/archives/2021/09/index.html","7c183d3faf64498693b26d4457541a84"],["/archives/2021/10/index.html","572c2c4f274407232592bf8fc2a92c8a"],["/archives/2021/11/index.html","a800e0050715d251c62e1a0361f52ab8"],["/archives/2021/12/index.html","5545b600685bb5f709acaaab33020514"],["/archives/2021/index.html","f766ab1bae1ddf3b37a5d03e75d9347c"],["/archives/2021/page/10/index.html","fb55845f6d073d17156cd42fb4995f36"],["/archives/2021/page/11/index.html","4feb3134a65cbea7a0a7869a5d59fff7"],["/archives/2021/page/2/index.html","ab1e56b7b47c152c294bac7cee6aa287"],["/archives/2021/page/3/index.html","4ea9612f087fc7d6758c91044aef8315"],["/archives/2021/page/4/index.html","a90fcd0487e71226ba269ff3db553664"],["/archives/2021/page/5/index.html","e27377f7a3f0169a8bf70e90ff5ff415"],["/archives/2021/page/6/index.html","de2d0e72f5c6b504c000db551a5896df"],["/archives/2021/page/7/index.html","88d9f6d687d6ac7bc8b6524a19a68f6c"],["/archives/2021/page/8/index.html","05cd08f9f1f39dac58bc8ceceacf6747"],["/archives/2021/page/9/index.html","341d3ae7ab347d6af98d877de3a8af1c"],["/archives/2022/01/index.html","d372e18225b05e903c2aefc8cbb5f7b5"],["/archives/2022/02/index.html","7c34a6115cedeb385fc938183bf61e43"],["/archives/2022/04/index.html","f925e885126d14e668f9a676a47342a8"],["/archives/2022/05/index.html","2150d1dc472823e1a594352578d26469"],["/archives/2022/12/index.html","3ad168bceed867b06c857adbe31a3310"],["/archives/2022/index.html","b107f7459b95dcc31beecbda97878ac0"],["/archives/2023/01/index.html","d3612045ae8e51898c86277c0fce9840"],["/archives/2023/02/index.html","4625ee2fa9154f7ea956481547e954cb"],["/archives/2023/03/index.html","c33610d38a96ead987706defaac339bb"],["/archives/2023/04/index.html","6ae2b04b54b55a7bf7d67870e7dec375"],["/archives/2023/06/index.html","01c27ff8971d49fa5a4842d1e1349486"],["/archives/2023/08/index.html","fb3f130661ef829782ab36fb91eb52cf"],["/archives/2023/10/index.html","f2d35850ddfbe5b2cd7cd088ff4cd692"],["/archives/2023/index.html","39ac588f1dfe69679e1cc273d1bfaaa6"],["/archives/2023/page/2/index.html","90a8d5937762bbf4d85e4d098c882410"],["/archives/2023/page/3/index.html","1554d2825e997d7bdaa976ced40316f4"],["/archives/2024/01/index.html","768959e03f40b6a183f92a4ce1174dc4"],["/archives/2024/02/index.html","837b6ae14be2133c1205fa10480d9d3f"],["/archives/2024/index.html","0747c767e4885be4bb3db95775256835"],["/archives/2025/06/index.html","007da5c0d15f4c18a24f4eac8af0c64b"],["/archives/2025/07/index.html","c4d84e703fcaada0fa664eb494402e6d"],["/archives/2025/08/index.html","e1fcf40605c84d5855ee61b5c1c8aa44"],["/archives/2025/09/index.html","30066731bcafae126ca90a96414b1087"],["/archives/2025/10/index.html","18a64a00780003daa303cca0637eb570"],["/archives/2025/11/index.html","8824f2f34d3072c75b4dd5e1b4662b8a"],["/archives/2025/index.html","11645b3bfc007c71a22d293e3c2b9540"],["/archives/2025/page/2/index.html","c886675605dcb01b664d167ccf38c33c"],["/archives/2025/page/3/index.html","fd76e7ce1233421fd7804388664be510"],["/archives/2025/page/4/index.html","d85a75df89eee70a5dbd7bb736fc6b42"],["/archives/2028/02/index.html","f8979a3ebee293b6e604753b882854b9"],["/archives/2028/index.html","d3a364ed38d60d0c1e34c1de6df3d477"],["/archives/index.html","58d7fd8c9e158a13ed3ae9f4c9d212f3"],["/archives/page/10/index.html","7b305df41000e4bf4bb1d15e02b90aea"],["/archives/page/11/index.html","81f3584f1ea89d3494acb2422280b109"],["/archives/page/12/index.html","3fb645caeec89cd075ed7a2d41e3928d"],["/archives/page/13/index.html","35e242e47581420c9a5d134f46fe6b6d"],["/archives/page/14/index.html","37b32476a9702876d4314db1a91fcaaa"],["/archives/page/15/index.html","0a38612d7fb894272648e95f1957af27"],["/archives/page/16/index.html","d52476620f6adfb9d0145fd9b440f502"],["/archives/page/17/index.html","a356bfa3d12258cebc79ff9a865decf9"],["/archives/page/18/index.html","8d5fb2638c08f24adf46b8257cf9a072"],["/archives/page/19/index.html","5d3634a6e609cb37072b97563b48434e"],["/archives/page/2/index.html","2cc7a1a3a0a3ee7ad9ac7a8f70e5f12d"],["/archives/page/20/index.html","09fadee29767adc3a2d393da5b7163ba"],["/archives/page/21/index.html","59f8510ee50a52ba548317638042157a"],["/archives/page/22/index.html","bc39123547ae990aa1cab9410a8d23d9"],["/archives/page/23/index.html","694394031ab5bc6ae27d31c9985666b9"],["/archives/page/24/index.html","0fafbdf2648bbdcca6f9c870ef2484e6"],["/archives/page/25/index.html","6862f7617dd460612454a8d56e214136"],["/archives/page/26/index.html","b12e355fe4c34bb812b13a5d90c05f5b"],["/archives/page/27/index.html","dc8930f9693b57c564ae86503a019919"],["/archives/page/28/index.html","3e69a4f966b60a41d85c5cba6cf35d3f"],["/archives/page/29/index.html","0c40acbaa14dc8263921d7cefc67b4f4"],["/archives/page/3/index.html","85dd09462145cc0a3ed4ef78542e9e34"],["/archives/page/30/index.html","66bad7477c5209f4620769403f6e756c"],["/archives/page/31/index.html","a7ad20f6b55e2432d975c77af97b2bf1"],["/archives/page/32/index.html","3e87d4d3e6c89aa638933365ab2a788e"],["/archives/page/4/index.html","13c99ff3b1bb4a10334d983b90e518d9"],["/archives/page/5/index.html","ede6c4ce5b31febcc7daeaadac57f4e0"],["/archives/page/6/index.html","56c0c690dedb73cb26162b8d168df2b6"],["/archives/page/7/index.html","8800c5e84a48e6b15d11ca08a936e78e"],["/archives/page/8/index.html","e481ab377b345c69f9ff11c7e6f4e317"],["/archives/page/9/index.html","9e30bf1b82403e0254c562ce44905941"],["/baidu-search/index.html","3f67254b130ee2c4a527b14d145e82cd"],["/baidu_verify_code-Hh2fKNlEB1.html","99396a3558cbb7635c50ea0e322baeec"],["/be-a-programmer-instead-of-a-code-farmer/index.html","6a5ddb686286a018506bc38cc7d018ac"],["/bought-a-house/index.html","33601e0376f61bdafb3468da4b242b75"],["/categories/C与C✙✙/index.html","32fecf10a87c28a7a33d69b4a1539e08"],["/categories/Go语言/index.html","d2404261bb97c5bff188a7ee6081ec9f"],["/categories/ITK与VTK/index.html","b59840e599aed9cc29737dc12ef0f85c"],["/categories/Java/index.html","2800599e0708bdac384b9121fc2706fe"],["/categories/Java/page/2/index.html","e3e36ad6347576fef315a5445b80cf14"],["/categories/Java/page/3/index.html","74a6e9600dba20234521ace438bffbef"],["/categories/Linux/index.html","120c813c733073d8cfd24aaf0386b426"],["/categories/PLC/index.html","30b9051b5f7920ec97bf026ae7d6be03"],["/categories/Python/index.html","90dc840ef361b1e8d31cd6cc50095e93"],["/categories/SEO教程/index.html","1a6de1cafeae6cef83f41a8d80a773d9"],["/categories/index.html","15c73293ceb090aa06cb8f4d02685d3e"],["/categories/图像处理与机器学习/index.html","f1ad5fca06114ab604cd265ffa3d1cb7"],["/categories/图像处理与机器学习/page/2/index.html","e1187df55f7abb58df02bac20538ec3e"],["/categories/图像处理与机器学习/page/3/index.html","73d3cc753c5ba24288b32caca9125a2c"],["/categories/图像处理与机器学习/page/4/index.html","ba9a9622651923d71bb6b222ad50d0ee"],["/categories/图像处理与机器学习/page/5/index.html","6cf4d692d0ed05b594f00051bd88bed0"],["/categories/图像处理与机器学习/page/6/index.html","e0df2f5d87315de51e2d71d342fe8fe7"],["/categories/工具/index.html","2522117cd160c0adde33db0ae96a3676"],["/categories/工具/page/2/index.html","7294688fdc7847c148beefdf1582e888"],["/categories/技术以外/index.html","af7337a23eb55fa075a3990cc6d82649"],["/categories/技术以外/page/2/index.html","e32c8cfedd0cb8cf0ecee145ab980246"],["/categories/技术以外/page/3/index.html","8297dfbabdaf17c990ff9bc4bb76537d"],["/categories/技术以外/page/4/index.html","1d9d8ab7a28cd873c67103fc23196646"],["/categories/技术以外/page/5/index.html","eb95fc813e331bdb9770dde8aa9a5f2e"],["/categories/技术以外/page/6/index.html","08b05e0f8907a2c836901d7ca8e63e7c"],["/categories/技术以外/page/7/index.html","79d578fb723465d7e9f05a7812a66363"],["/categories/技术以外/page/8/index.html","52e78613796f3d17e1d21698611eb03f"],["/categories/技术以外/page/9/index.html","cc5187f4da9c37a7cfb32b18a9cd8b57"],["/categories/数据结构与算法/index.html","335f3f68a73656f497ea6ad1232a0b9c"],["/categories/数据结构与算法/page/2/index.html","0b8fe79e70680dc70e711cd31b89d9a6"],["/categories/科学上网/index.html","cd8f2bb4f067dc8a81265f94ebe71cdd"],["/categories/科学上网/page/2/index.html","44ce3f95568517c5723ac04640fe2f80"],["/categories/科学上网/page/3/index.html","03a26677dffbc1030a7ffddd68bf66a0"],["/categories/编程经验/index.html","5e8e344673c54a65a47f95e09da93bc9"],["/categories/编程资料/index.html","788ee49f98b7802a9bf4b86ce4fc972f"],["/categories/编程资料/page/2/index.html","4bbaddcbadf445d4f416c51b19b3f4f0"],["/categories/编程资料/page/3/index.html","b0af5f7822524048e4846dd2a363dc87"],["/categories/编程资料/page/4/index.html","5f8626240c1e3ae81f5cafe09793d956"],["/categories/计算机基础知识/index.html","bc3026d18c05557fc35ab1d2bc3ccc98"],["/categories/计算机基础知识/page/2/index.html","dd588c96a26be64b9c26eebfc53819c4"],["/categories/设计模式/index.html","13bee1656489ab52f13ffbdbd6bdd67b"],["/choose/index.html","d99e8e8650a1db81151f29f61114484e"],["/choose2/index.html","e6673860b363af46e22764af7752d6ba"],["/chrome-crx-intruduce/index.html","81194e0c78364282c703b68b27277dc1"],["/clashvpn/index.html","557a09e90475a5b8fed57cc255538b1c"],["/coder-blog-website/index.html","b7220596627a499637540cf8a7bbe6c7"],["/coder-source/index.html","639d51801e550a3e8b5102ef650eea40"],["/coder-videos-website/index.html","bb21ddf6740c708fee11497248dec496"],["/computer-book/index.html","bff7402771a452d6382ae1270d0b6bd0"],["/computer-censorship/index.html","799f10f2a769c21d082461a6310fd644"],["/computer-network01/index.html","2bdc691814535c7fd30e81624aeb03eb"],["/computer-network02/index.html","efd433dd72dc866bdd21cba7d7e1c133"],["/css/main.css","bc32ad34ec4990d934c3c647bdb62f79"],["/database-Mysql/index.html","f38dde511fbdc788b318d347a32439dc"],["/eclipse-lombok/index.html","0b8fe11f7aa467ce599162021587bb5e"],["/fully-convolutional-networks-for-semantic-segmentation/index.html","bf058ee55118796d591d521da1a53331"],["/great-firewall/index.html","c692a923465714fbc109f2a039bcc719"],["/halfrost/index.html","5dd5ad9c46ee69f03cbddbbacaaa112e"],["/how-to-signup-chatgpt/index.html","6a8364c78ace1afdf6279ac568451d9a"],["/how-to-use-Gemini/index.html","f07227860be1f5e1763c22d770b64a58"],["/index.html","d28163e9cb6bcd21ca44a3be65a51de2"],["/ios-open-internet/index.html","cca88a96604036795871337376f50883"],["/iphone-open-internet/index.html","f55ed211e7604f3082971975b6daf021"],["/itext-makes-pdf-form/index.html","5ae2ed4a91f2a0ca9510f1458cce79ef"],["/java-Set-Map/index.html","fd41abb396f334148109add4ef8e7b21"],["/javaweb-server-error-codes/index.html","cae9aa5b57c1f6b4dfeb63586d899e07"],["/javaweb-source-code/index.html","ecf8fade1bf2799c00f1afeeb4cd3a0f"],["/js/lib/busuanzi.min.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/js/lib/lozad.min.js","47904d34a224931dd1b615c59a3dbe3b"],["/js/lib/prism/prism-coy.min.css","0ccad54d95845901ead59bfd3ecceb14"],["/js/lib/prism/prism-dark.min.css","a4711d2957d6605eb5682bdd228cf123"],["/js/lib/prism/prism-funky.min.css","efedcdccd7a9ab342d2d9cacd24920af"],["/js/lib/prism/prism-line-numbers.min.css","38e22e790c279bb56f9ec4b90a2a2d58"],["/js/lib/prism/prism-okaidia.min.css","5ac6f9de996fbec68aaa106dfb16e061"],["/js/lib/prism/prism-solarizedlight.min.css","ecc7e64d039873ffcf7fb27babdaeb5a"],["/js/lib/prism/prism-tomorrow.min.css","456af2a14ae4f5089939d5904ac40fe8"],["/js/lib/prism/prism-twilight.min.css","ebb5c355332a8cf9a1ce37a2a69d678f"],["/js/lib/prism/prism.min.css","a5234d614834658887cec6a9515890f8"],["/js/main.js","052d2b299d9c750afea8df0b802ab7c1"],["/keras+TensorBoard/index.html","b268907095884acc93269bfa293c34b7"],["/keras-beginner-guide/index.html","9da5ed03021ea2b3a7987883e4ec85ba"],["/kmp-algorithms/index.html","f61db6f105ec7e9c47bfaf800b64f79c"],["/leetcode-Java/index.html","4ca8b2d253b2ad75bdc0bb06cfdd50d9"],["/links/index.html","8c3c467faa7d212d3acb9113715c1a73"],["/linux-java-opencv/index.html","7382fca4ded2b6de52336f3f7eb4fd74"],["/msb-source/index.html","4cd36eba5818fad11e06bb373037adac"],["/online-BUG！/index.html","f2a72d6bd88b73270c6e0896fe4b5d68"],["/open-app/index.html","6807b10ade487ef1ba9646b109c3479c"],["/page/10/index.html","156bbfb69cc7ba9eb76700ce03189ec5"],["/page/11/index.html","413d48a2d4da7357f6da5f7178ab3e67"],["/page/12/index.html","1775b452710b2a5fc5c27d2498cd8079"],["/page/13/index.html","6b01f99f6f3b0c4bbe7f7edf73385939"],["/page/14/index.html","193ade856da8feee77421cbf81c27b1d"],["/page/15/index.html","eec70259ff7d5126874aebe7bf69c720"],["/page/16/index.html","c2c2fc6f253d3613df7f20b914d66f82"],["/page/17/index.html","0b52614d1f0c8b3475dce90825b250c1"],["/page/18/index.html","02daca5a22386a93e2375668af0ae1f7"],["/page/19/index.html","b38ef8a31fba7901eb8bc3a5ae25b2e9"],["/page/2/index.html","90bcb0e4dd90d2dfae2c0c7ab981daac"],["/page/20/index.html","df53d68ebbdbfcc13ce5bc77ed722c30"],["/page/21/index.html","30ce51caa18911ec6fb1ed623b1609c4"],["/page/22/index.html","f8acba508d57d1ac315aa58853784861"],["/page/23/index.html","9ee39200aca3247ee293c073f855e550"],["/page/24/index.html","6c1efaa4dc0ce951c366c1bcdcf63d75"],["/page/25/index.html","8de9fc11028d56ce95d5686ed0252c25"],["/page/26/index.html","80307e99e4f992b348d4d00ffe18edad"],["/page/27/index.html","57f0c43a015ee8fa11d1d63efec04c4e"],["/page/28/index.html","a1ee3d4db41605caca2e83e69155a8cc"],["/page/29/index.html","15d62f838c0b0ee1047bcae856ddbf72"],["/page/3/index.html","1fd6ed09a20f7a6ab8a064a44803738d"],["/page/30/index.html","d110e26d39a1f5ae3f4a2ffc9e151794"],["/page/31/index.html","24e1793e7c08a91473960dada7a87dba"],["/page/32/index.html","d7d93f210131bbc997217e9c427106e2"],["/page/4/index.html","a85212ac7d1b836ced79e0a2eba8dd0d"],["/page/5/index.html","2e3a0c083e3242e4c20f7be449dcfd31"],["/page/6/index.html","0126f2f86f006191b9ad90260f622495"],["/page/7/index.html","349f8acce431fac71a7216ae10bc30c0"],["/page/8/index.html","280f42c2cacccef22f582abe47127f45"],["/page/9/index.html","5db170e38492760ae8be0540b6474acb"],["/pandas-data-preprocessing/index.html","4946b09ad664fc8e8edecf23720bfe4b"],["/popcorn/index.html","07b6b60f5eeb08c9fa894982419bfe88"],["/python-Blog/index.html","4086248fffbccf1e6517866b3cbfb4a3"],["/python-yeild/index.html","119b2bc68dc9f83ac13991eb0ce50712"],["/python爬虫教程/index.html","510f2cc4510d1634d4413b160dae05aa"],["/software-copyright/index.html","63d0c0a605360870bc1550b36dc9ca56"],["/sw-register.js","cd7020c2325f103d0503d8987f493b26"],["/tags/AI/index.html","82a4f028cd279e0e32a2072d20a7d92c"],["/tags/API/index.html","93b6effae8683ce02e4bf70e57d9100e"],["/tags/C-图书/index.html","299e102493574a1981712a97391873eb"],["/tags/C/index.html","f4ba09dd7f65801ba34de29eb6a793cb"],["/tags/CNN/index.html","1b47af5c4329a922435ef529682f4b2e"],["/tags/Chrome/index.html","4e99a76e369c7d71de7bdbdc1df1873c"],["/tags/C✙✙/index.html","1d4dda52d09d8302494a9d074e2f95fb"],["/tags/C语言/index.html","25d0f4ecf385b281bd4c65fe3fecda93"],["/tags/C语言图书/index.html","4558990072c723fa44d06324191acac2"],["/tags/DSN/index.html","2474ee9662baec32750ac8772fb2114c"],["/tags/Dll/index.html","a20f1bccae602ce7326da3d1189252bb"],["/tags/ECCV/index.html","94d72acafffc448489ed15faf6403c5d"],["/tags/EM算法/index.html","83cbc49a7def7424b8a66c44541e16b5"],["/tags/Eolink/index.html","35bf05cd881ca07c8fc9f62474ce3783"],["/tags/Gitee/index.html","66c60a39345ee6f705cd115972b89214"],["/tags/Go语言/index.html","143cddd343222030d965ead770558f96"],["/tags/Graph/index.html","412893458772a07208731f7ea33ca3f5"],["/tags/HTTPS/index.html","9c1b9bf3c9add1877fae797eaba6ea44"],["/tags/ITK/index.html","3349077688cefb3a02718329e445121c"],["/tags/ItkVtkGlue/index.html","a67f2c1b2546529bc6f17cd16b80dab4"],["/tags/JMM/index.html","b91987e98b52d5800f09beb53ac6d0c0"],["/tags/JVM/index.html","7e062ab4b3728c20825df085cf08f891"],["/tags/Java/index.html","cda94afaaafcc4af16aaf11e4b423d5d"],["/tags/Java/page/2/index.html","5d5b97efa852c42112a1837af824e0eb"],["/tags/Java图书/index.html","44271f81a51fd605457f310d8d2fafab"],["/tags/Kaggle/index.html","fce81d4e042f78ec8917060b1d98bb05"],["/tags/Keras/index.html","1163235bd31c8e6707e992f1af457af6"],["/tags/Linux/index.html","42afbb6ca98ca8777ada221ae99ca25d"],["/tags/Linux图书/index.html","9579baa64b8250233be6828f2022e1d4"],["/tags/MEPP/index.html","d80b800fc9a7be21116ce0fdd15e56d3"],["/tags/Map/index.html","747668940273e04b59750a2745769500"],["/tags/Matlab/index.html","be84ff579ba6ecef64566740df3f51fa"],["/tags/MongoDB/index.html","b7a7ff373883da4dfd6435f578193a59"],["/tags/MySQL/index.html","a46db35916896840af54c8ad327b4663"],["/tags/Parzen窗/index.html","14114668f3be3b391e97b0c1285fd611"],["/tags/PicGo/index.html","ff058a0273855bc5f20677539bbb0641"],["/tags/Python/index.html","e52226c6306e8ece73073496041a9e9f"],["/tags/Python图书/index.html","2f75e33fd7d1d65ba12f8893fb01baba"],["/tags/SPHARM-PDM/index.html","32bf748a2b93da69354b8f97a5443053"],["/tags/SVM/index.html","289c2ae26226c52dd160a7bbdac8b9f3"],["/tags/Servlet/index.html","379915dc0b697f12d9bde0f40668d5d1"],["/tags/Sping/index.html","797d326746a35c67052e39818be3880f"],["/tags/Struts/index.html","df7f18aad3ea55f1a7c95b4283cf3dab"],["/tags/TCP-IP/index.html","b2203e54234d17c6bcf39cede56d2d62"],["/tags/Ubuntu/index.html","7695dd5806e13ecd2dc3d70a5cbbfcda"],["/tags/Unet/index.html","c62224db22d5b6ff457e26a7f9da1ecf"],["/tags/VS/index.html","9a5616aa23c445023691625e7c4a4efc"],["/tags/VTK/index.html","6ad3b472449656bbd116ff58bc4e9bcc"],["/tags/Windows/index.html","f5d24f4f94091248308baf8f5e26ab34"],["/tags/edit/index.html","265841f8d0f6a186e092ed1875d40a80"],["/tags/hibernate/index.html","a95b7197664fb15c442fe09e758815fa"],["/tags/index.html","6b952e7056d532200ae16eb14da6af9c"],["/tags/itext/index.html","2ef89519359491dc2d3c886604b9783e"],["/tags/jdk/index.html","296cb80957e69c2ff500523d5f21516a"],["/tags/kmp/index.html","8100bbd2146fea7f2fce4735d9092ddd"],["/tags/k最近邻估计/index.html","f9545331cdeed5248639b72003e4267d"],["/tags/lombok/index.html","f6af98cf2bb014740392f9e752093cf2"],["/tags/offer/index.html","136005b71a17363cce1b6d5103a1ec47"],["/tags/opencv/index.html","04bf0b16fc7465d3c327068575d3f8d8"],["/tags/pandas/index.html","e21e024a592aaaed6816f992af1dc063"],["/tags/string/index.html","82ea959419cf669978ea7e86bc7899e7"],["/tags/vim/index.html","f371985903f7d0316404efb24014a709"],["/tags/vtkPolyData/index.html","edbfb06c65d236d4c086cc4c71dae9de"],["/tags/web/index.html","ad15d0cc57dde9746f59bce2f51348a4"],["/tags/xshell/index.html","5668c2bb7a13663eed3cd167a3c0cad4"],["/tags/yeild/index.html","464999595cb199929c33f03eac7096b3"],["/tags/互联网/index.html","10bfbd24be662988b72f0a4b181990bf"],["/tags/人工智能/index.html","cc4b0e0ddf4531b0e04792f086597a7c"],["/tags/体绘制/index.html","3ecbe94b95d1c8a33c391b7aace21c73"],["/tags/全卷积网络/index.html","83f1e42c80ef8a9f3adc013052e10f84"],["/tags/公众号/index.html","876ab40689fa0436b444e4d6216c2f98"],["/tags/内存模型/index.html","0400cce42e53a871cedea2abc7792422"],["/tags/内推/index.html","8abfcaaf9fb1adcc272f85c123b0b54a"],["/tags/函数/index.html","9b12c6a9f7a2164dcb7797530900e1a6"],["/tags/分布式/index.html","99d940dee4305b86056c8ab104ce6e76"],["/tags/加密/index.html","01efcf6aae2e6e1f12918145852a2358"],["/tags/医疗图像/index.html","53ac7ef3529cbad5668fd2b07313d6bb"],["/tags/博客/index.html","ac7ec3d6ece73399613292da26fbb3cb"],["/tags/图像数据/index.html","ab668c8bf39a4afb2b2a1dd6bca03dc7"],["/tags/图谱分割/index.html","551c38ba90e1221044e0c7cd68e85076"],["/tags/垃圾回收/index.html","f4d139a459cbc6c8a3dd63a0c8730894"],["/tags/多线程/index.html","f7b40d7ad14a3deae6795490f32a8c61"],["/tags/字符串/index.html","75d667580e4b900e7b3b5715b45f2ff5"],["/tags/工具/index.html","996445eafd2bf6a0c9daa4ee10a70d9b"],["/tags/工具/page/2/index.html","5c900f2cbe3b6a876a4b4a3d14cd4c75"],["/tags/弹性形变/index.html","c292754a328f65b8de7f14067de55f30"],["/tags/排序/index.html","d49ef17c49229a578fe75f2a4c62ff36"],["/tags/搜狗/index.html","565e7714638caa3b8a4e7614aaef725c"],["/tags/操作系统/index.html","eb5646a138ad7ded22d7bc515fb0e0f2"],["/tags/数据库/index.html","afebc31d7b9dbbc71cf2ce54d365ccbe"],["/tags/数据类型/index.html","cf6b36163380c61b98cf0dc8fdafa818"],["/tags/数据结构/index.html","4ace87467e5b7c1a23877cab19f0b61a"],["/tags/最大似然/index.html","6f85c2108c6f4dcbc2f0c63f042a1719"],["/tags/机器学习/index.html","016fc297e1fae30fe7cf083d0057f025"],["/tags/机器学习/page/2/index.html","d0efc64191e551efc3b6cc88a5dc1bfd"],["/tags/机器学习/page/3/index.html","eb30d0e9dbc67dd0c54d0d40d6e54c3e"],["/tags/机器学习/page/4/index.html","1cac357399328ed296a4855c5c491e2a"],["/tags/机器学习/page/5/index.html","523f981bc79d50cf93366d8b25c61244"],["/tags/树/index.html","767ea1969b44d9a2633c7df3604b9a03"],["/tags/框架/index.html","eac3dc15034d1023a78bb76623f6f8e6"],["/tags/求职/index.html","58628c6428e21c71e4e173663ffe7d0b"],["/tags/汇编语言/index.html","c94070b7cff83a880ded4fdf8c1c51b7"],["/tags/深度学习/index.html","5dfd9665ff5d1f47c307f500dae8edde"],["/tags/深度学习/page/2/index.html","b4fc736d4c454dec6575c7f6d245b136"],["/tags/深度学习/page/3/index.html","76eb9e6c3edc2dff26ed6632e259645a"],["/tags/深度监督网络/index.html","28daf4e451b594236f0753f3e9787587"],["/tags/爬虫/index.html","b153421c329b999b16d07fb90c244025"],["/tags/电子书下载/index.html","9f7849f67efea6165c490fbb89bcf3b9"],["/tags/电子书下载/page/2/index.html","e0e1904114322be88cc492106e652b71"],["/tags/程序员/index.html","e3a2a0ed7203144dc7a350d096ab1828"],["/tags/程序员面试/index.html","cebbe5bfd35ab894f4573a77650c4329"],["/tags/简历/index.html","410cae00b9c1c1f1c65fd0ec8283a74c"],["/tags/算法/index.html","33b9700dccdb3d5f867f847aef48cbce"],["/tags/算法/page/2/index.html","bcc9e7d072243efb2961c00bce1f2f41"],["/tags/算法/page/3/index.html","5e57f25abe23abcd054d2ef9e33ba38a"],["/tags/线程/index.html","311e6f87cadc3b8770c78a708df5f4ce"],["/tags/结构学习/index.html","c43a47aea47ffdbb45f17861b17dc027"],["/tags/编程/index.html","3bbe4d49d9ceef295debc884404b6e41"],["/tags/网站/index.html","68c2e3c97f9b2606ebf656bb94b52ea3"],["/tags/网站/page/2/index.html","4540dd1dfb14b8567485e9aabc2e1c26"],["/tags/网络/index.html","8852d4c335fc0ca2114b4d5d66d1484a"],["/tags/网络原理/index.html","1345e3015730ac5d5339ac17f64df5ec"],["/tags/肝脏分割/index.html","1b90efa94b50499592e0eb177c31af67"],["/tags/计算机/index.html","343e8ac14613e2beace8bb0e0de12b9b"],["/tags/计算机专业/index.html","53ff0a4daa3817f5156e4c5753d67fee"],["/tags/计算机网络/index.html","ca67fba7672f539ef19fe74b8f5b0a0a"],["/tags/设计模式/index.html","2fe60ab7b6d7a177563f48996ee27ebc"],["/tags/贝叶斯/index.html","28df7dec5dd13c40188e10065020f30f"],["/tags/迁移学习/index.html","68bf5adf197431cd40b06e0342028b65"],["/tags/面试/index.html","bd63770913275b80c51e762b826323d2"],["/the-way-of-pragram/index.html","eafd4ccb52939a1b926f659999c72926"],["/untiypro XL安装/index.html","c785c684a25ea82b88d615c9091ce389"],["/video-websites/index.html","11d9bc192bf0a0d1f1cf6d2f3f51c2c0"],["/wechat-fans/index.html","6e46ed2d0c814b4bc97f33280dc7cb58"],["/window-run-VTK/index.html","2a82a0374f9b6b195ce740ba54754d11"],["/xshell-connect-Linux/index.html","ed440fab84a788f5988a7fd80a58b8a4"],["/‌Accessing-the-Open-Internet/index.html","ab69584e7412ce76a87baf6d57f9a3f9"],["/《Java高并发编程详解》，去大厂必看！/index.html","4016a9bb880d3ec537403afbb23d998e"],["/一分钟没了 1.5W 。。。/index.html","cec5395b3efe72cc5aea0d9cc412521a"],["/一条高产爆款内容生产线/index.html","615224ac2e8754346038de8742de6fee"],["/为高考学子推荐的六个就业前景广阔的专业/index.html","620daceb0e651ee50f33a30e6d0d18ec"],["/互联网赚钱机器---社群/index.html","c23425b6ebc25bad90dd0e81f990b70c"],["/你们常用的工作方法和思考方式是什么？/index.html","e3e4f3c23294069c43ed0e7efe3a42ea"],["/关于环境配置的一些事/index.html","00a1520124449eb79e4e959e6310d522"],["/准备了19w！搞事/index.html","7f16001dafbc915dc7f0e5927bc6b061"],["/几个很重要的感悟/index.html","657f28f2aa27bad64a731d16c083f621"],["/分割ROI篇/index.html","ca348d50e04bf2d8da4a52af421bdf09"],["/分割精度说明/index.html","3f453bf4a40f20ac132cfe6ad2c92a48"],["/分块程序执行/index.html","aa4800cd0ab452d0ee3f68c00dc3bca9"],["/加班公司黑名单！！！/index.html","8873c1de053c9b05253ffeb3741ca305"],["/卧槽，上知乎热搜了！/index.html","cf8d8ae248076a00dbc826d6da698a18"],["/卧槽，我的小破站爆了！/index.html","3cd2f8316ab5bbbfa6c27a3fdee78200"],["/卧槽，我被盗版了/index.html","965afaf67327cc58108a5cbaa3f7d572"],["/卧槽，还有985大学在大一上C语言课？？/index.html","44397e268728125015d203515412fe6c"],["/历年微软面试中出现的leetcode算法题/index.html","c5aa6a99c309dafff68f7830da617b44"],["/去特斯拉试车了/index.html","e8404493926e313e13e0b012b88f0a93"],["/吃苦的三种境界/index.html","5ff2e9b77ca7218976819b6dbdcddbce"],["/哪本书适合推荐给 Java 初学者？/index.html","2e5fd19eda932e0e208ac503afd57c61"],["/哪本入门级的学习数据库的书最值得推荐？/index.html","d592481196bf47764658ddf81fd7edec"],["/国内外常用的AIGC模型/index.html","20d32dc0f97ae4c93bee546a1e444a8f"],["/国庆假期/index.html","70767a5d12c7e75b40e9a3f98882b2b4"],["/图谱程序字典/index.html","502f355636727c49e5ce913da54e07dc"],["/图谱训练与分割/index.html","55772f51c1c8a64a766464de494d78d2"],["/宣布一件大事/index.html","96388dd22a6e94ecf7b8bd9e75ae3b1f"],["/小鹏P7i试驾体验/index.html","741a20c4983821acb81b272e161506cf"],["/微信PC版3.3.0内测更新，电脑可以刷朋友圈了/index.html","54400f7eb562c3570babbdd49b39e37f"],["/怎么更快的赚钱？/index.html","d5cac3d17279ba66e364d8d6a78852ae"],["/我毕业了/index.html","fe466d43cc887d27d1ad955876b8ec50"],["/我！真！的！找到了！爱上学习！的方法！/index.html","916ee423afbc15fc3aae7ae9e9d2f6c9"],["/户口的意义/index.html","7b120c94b15dc9c1ece5a2a7859ce580"],["/推荐两本经典算法书/index.html","f09ce0e0ae2ad9c84293f142122a0dee"],["/推荐几个在线学习SQL的网站！/index.html","aa8e6aaff57abbec888e893ec21b5f60"],["/搞了一个程序员成长晋级社群！/index.html","f64ea30414598980e7bd60c867bb2079"],["/摘抄/index.html","b4ddffaa409fb7bccf20641c2524803f"],["/暴跌30心态崩了/index.html","31c482714eb1bdd6d91bb91883f563b3"],["/最近很火的ChatGPT到底该怎么玩？/index.html","8cb1869a30c09904e2a895da5f1262be"],["/有哪些好看的日历可以买？/index.html","e6fc58d3457e7e7da5c15b1bac5c11f8"],["/服务器有啥用/index.html","8657aafa7234917bbc9b7ded04c9117f"],["/来长沙了！/index.html","1d3297c5c47a9d58f02199f40e82928a"],["/校招污点公司名单/index.html","a5d0b99f4dbe608d4e9a9edce130df1b"],["/梭哈200多万/index.html","e5b379316ba1c4042ec25f57aaba0bd2"],["/梯形图入门/index.html","d1da148dd424ec000a36154eb404d9d7"],["/橙心优选，凉凉了！/index.html","adf02014274a46fde25ab8058ad4e2b2"],["/比亚迪汉试驾体验/index.html","57a7eee02f9541cd336e77aa368e8698"],["/清华转学成电，真的牛逼！/index.html","fe923b58df844e3e794e8497c84d16a1"],["/滴滴程序员被亲戚鄙视：年薪八十万还不如二本教书的/index.html","49bf124839dae1f0ad02215995156060"],["/社群！/index.html","fee1cb66c82d2749e7c7ac1e266cc9ad"],["/科学上网之VPN篇/index.html","e9cd2c579334b20686dc35d5a0fdd695"],["/程序员必备的几个技能！看完你也是大神/index.html","9793f35105a6925e279fa777abc6ad69"],["/程序员绕不去的槛，Linux！！！/index.html","e1fa0b77f313c3eedd61c30f4073c8ed"],["/蔚来ET5试驾体验/index.html","a832cae9eb4dcc0c17161bd717a0cbd9"],["/蔚来，牛逼！/index.html","0fec57a81510e60d8bf2022b6c52d0ab"],["/被录取了/index.html","df4c4da9cf84d231cc9adf7ab03f52d1"],["/被找事了！/index.html","92f62b5c687e2584f70293803f541fea"],["/被拉黑了。。。/index.html","3d8f6d280a0a71381bcb6b5818e2fea5"],["/被车撞了！/index.html","7b21e0f3e06daa48142fe72bb2cb6e30"],["/该如何选购固态硬盘？/index.html","1851bf2cfb58677fa63390b57ec6803c"],["/这本书一定要看！/index.html","c7de30c5d703162422d51404e4fa6b00"],["/选Java还是C++？/index.html","b429e5c9ea1df74720f37bf57688c51d"],["/那些让你起飞的计算机基础知识/index.html","0e70af1bc2999ff9dd9800ef5cf00b05"],["/靠这几本算法书，成功拿下大厂offer！/index.html","1b60f105a8678d988d47097889c8349e"]];
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
