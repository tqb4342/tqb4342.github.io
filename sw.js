/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/0010-city/index.html","0ca1e6cfe801a6b10dc9c78934e74cb9"],["/10-algorithm-book/index.html","2bb0807d7ab0aa4a34de2180c30c55e3"],["/10-website/index.html","8ba906f4cde4aa2adf0106d761a1dd5b"],["/100万的小目标/index.html","39c508d37286ae8b05ed7e9c1548914e"],["/10w+YYDS！/index.html","07e6dca5f9b4ad0cb620c540d51d7cb6"],["/12-technical-tutorial-sites/index.html","0fc27cb8ecafc7aae2299bc1a3a3cd06"],["/2 6 岁 了/index.html","30b3436a4a2f089b05658c202b477e5c"],["/200万，啪，没了。。。。/index.html","a8c20d73e4c7df3dda478d4f5c9bf6d1"],["/2018ECCV-Paper-DL/index.html","7a64c3056035d6550aeac12bfe52bb5e"],["/2021年固态硬盘选购最新攻略（小白避坑指南）/index.html","aea2bea2a684c37a4c7ba378dccde468"],["/2021机械键盘推荐/index.html","1fd0b81d3f72a31f3b871fcc86d3b0c3"],["/2025-07-15/index.html","cb36a2a2d50fc7edf03489575d98c136"],["/27岁了/index.html","0892c2c3d9e125708b7f292be26ccf49"],["/3D-Convolutional-Neural-Networks-for-Human-Action-Recognition/index.html","eef699f43a145b027ab88ccd5672ba54"],["/3D-Deeply-Supervised-Network-for-Automatic-Liver-Segmentation-from-CT-Volumes/index.html","a5fa4c064a200c3f20fd9f3980d6b96d"],["/3D-Unet-Experiment-notes/index.html","dba6ce0e5c9b33631176e15eb26640f0"],["/4-Software/index.html","c22dc861f4e89d910222adc54f93ccdb"],["/6-website/index.html","17c36b8343d1d13d9befd12d4abdfe6d"],["/7-terminal-tools/index.html","6a54865543c0ea6dc8d45d21fda249be"],["/AIGC中典型的深度学习网络/index.html","5b3a8ea1fcd75f6cdc1d577eced67f9a"],["/Agency-model/index.html","b6f6edb55ddd2808643e93a56ff846f0"],["/Algorithm-brush-notes/index.html","0f4b83672b10a7752f9791bc27ccea55"],["/Ali-recruits/index.html","84a3435428c6693d8cd0d0c5f542616f"],["/Android-VPN/index.html","35986ec647011d891113ea072c522a92"],["/Android-open-internet/index.html","1769e762ae36020684448bc3dd33a2cd"],["/Appearance-mode/index.html","ba27cd8cf005797151bcc19610d9929d"],["/Backtracking/index.html","9c97b55235280a8bcb37f8edb4cd9dad"],["/Baidu-Sao-operation/index.html","41688180c64496ddf0c2e600f7115156"],["/Batch-Normalization/index.html","9ab7b8f28a5227a44e2b1cf778ef9dab"],["/Best-AI-tools/index.html","042198e4d7760ee673dd519b2a6979b9"],["/Bias-and-Variance/index.html","1b361c6aa1d7a5056bc606b1fcffe510"],["/Binary-tree-traversal/index.html","bdad39ac46298fc1b5dd790e8e5583d2"],["/Branch-and-bound/index.html","a8cacb310b0ccab1688f01b1e5e8009a"],["/Buying-computer-for-the-first-time/index.html","2dcad23c0f359c017c8126a76982cfe4"],["/B站向北邮道歉！/index.html","7c2319d7a43a7da40014c07edb7f1bd4"],["/C++-string-function/index.html","ec7797298b622cf36e44ac6c240c121b"],["/C-Java-DevelopTools/index.html","5eba3bc0019d8e995b5ba505e15013c7"],["/CS-Classic-Books/index.html","c214f830d218465531543353077c57a0"],["/CS-network/index.html","c098b004aa4db8389903eb8d6eab9c3d"],["/CSBook001/index.html","8d47973fe6ccd736ecdfc281579ec897"],["/CSBook002/index.html","385a3201c9e59e3103fc465e7df1f736"],["/CSBook003/index.html","65ce4e4075920093e9a9e9932df7097c"],["/CSBook004/index.html","d07981be2d4a051131bd2391de41bef3"],["/CSBook005/index.html","f1017132ec39a908e13226b0e397350b"],["/CSBook006/index.html","4efc163718ae542484a5fe09106b844f"],["/CSBook007/index.html","10a5fc6dc052850216381f0bb9ccb3d9"],["/CSBook008/index.html","74de73b59a3e8f210f07de2f50b293cb"],["/CSBook009/index.html","79994b279ed06e0af934a8a9d5bba106"],["/CSBook010/index.html","3619bc8165994a56230eb5bb3fe88c8f"],["/CSBook011/index.html","c761f06542082c0550b416cc2cbce414"],["/CSBook012/index.html","548bbec9d76aad8f3bd56ee47df6344c"],["/Changsha-really-fragrant/index.html","5a5fa7910cbd9a81410c89b07f8f0a4b"],["/ChatGPT-VPN/index.html","e51dbe65330c3ecef40bb583abd3a1c0"],["/ChatGPT/index.html","9dff4ca4a2c1f86d3e317f1bab34e02e"],["/ChatGPT！王炸级更新！！！/index.html","14c60658e2a4e347060401318dbbcbcc"],["/Chrome-crx/index.html","b0b5553969ade856ae325478dca6b1a5"],["/ClashForWindows/index.html","1bc9f0a51042312c1f5cf6e0eb53df2c"],["/Computer-Classic-Books/index.html","f645f1521a2b37c9313c6590b9534df0"],["/Computer-for-another-major/index.html","249dc59f3ebcf3208766a9b764898565"],["/Conditional-confrontation-network/index.html","3ad6718ab9c0bcd423f0b88ee3fe91c8"],["/DNN/index.html","4ea8c852ad5319b5b37a5ea6d96bfb8f"],["/DSN-segmentation-liver-experiment-summary/index.html","88e09dbc34ac48977437f5d96cedbafe"],["/Data-enhancement-elastic-deformation/index.html","baf017d03fda6f402942b88c28368dc4"],["/Decorative-pattern/index.html","0f22c86a16ec959b79b79f236792ee10"],["/Deep-Learning/index.html","c447082efc4c7eb6e7d28358d05eb7ae"],["/Deep-learning-and-medical-image-analysis/index.html","e00c27dcfe73f98d8b50850adefb847d"],["/Deeply-Supervised-Nets/index.html","e250fcfa5a501c75cc28ce3e1f3899c5"],["/Deformation-model-based-sparse-representation/index.html","b6063414464ca557e1e12b6299202df4"],["/Discriminative-and-Generative-model/index.html","6986e74cb96ad56855eef859e3944cab"],["/Distributed-transaction/index.html","632dd5bb67cff94df9adf1a4b4c35fb4"],["/Divide-and-conquer-algorithm/index.html","18e65eb7fff3443f951ea711ad91fb38"],["/Dll/index.html","d34909fe5aec0657df56a0cf589c8a13"],["/Dynamic-programming-algorithm/index.html","f9a223930af8ecf212414219000dc34e"],["/E-book-download-commonly-used-by-programmers/index.html","f83d045a0c41e5da91c2fcdd8dd0a97d"],["/EditPlus软件的安装、激活和配置过程分享/index.html","aa48b402ea782ee65f2ef5f6d0654e4a"],["/Eight-sorting-algorithms/index.html","a229ef6cd66e576383eb262331fd9d9b"],["/Encryption-Algorithm/index.html","be92861d8c7132612eed5bd67983d130"],["/Eolink/index.html","e732b675b9ec98e3477f61cef2feef1c"],["/Factory-and-strategy-mode/index.html","3e16ad44b3006a2d9475645c8e026e5a"],["/Foreign-technology-blog-community/index.html","b0a9b4ebb0a39e9c5595ca2e860b9dd5"],["/Functional-model/index.html","fe8747ca496de434eba2b5e282ba815b"],["/Fund-type/index.html","36fb4f1389d145cafa20d0ebbdebffbf"],["/GPT-4o/index.html","500a6118b703c3c687c7f04b35df6440"],["/GPU-medical-image-processing/index.html","1c38ae0430a40e47b3418edbacdd6b3d"],["/Gemini/index.html","8a45149822842cd789cd04ece15f02ad"],["/Generative-Model-of-Unsupervised-Learning/index.html","d1b67bab8afe8c579927c64eaa0c8719"],["/Git-Learning/index.html","43b0e528e0f427b00364444335ef965a"],["/GitHub-2FA/index.html","560e033ae15438bc3b7d8b2a4380cb29"],["/GitHub万赞，程序员必看操作系统总结！/index.html","f5cb5c361ceb53854dd6f8d21df1504b"],["/Golang-book-recommend/index.html","ff178e839706f7a9dc53ce5791c89266"],["/Golang-learning/index.html","7228a217a385b907da5330ea72d8b93e"],["/Gradient-descent-optimization/index.html","b7fbe623775865ea9dc4445b3f19c38a"],["/Greedy-Algorithm/index.html","713e16facb145a03b01420dfdbc7ee15"],["/HK-bank/index.html","3579e68af0ff4d08f3f30d9d880dc485"],["/Head-to-head/index.html","115cbd1847aa8683b06c0a9e9fd41329"],["/HexoPage/index.html","4e1bca31680afe689aca0ba7156bc4d8"],["/HistCite-Pro/index.html","bc5e83f3c2ab55012246f5ad966c2a8f"],["/How-does-the-program-run/index.html","505e3dfdf769a288c70b5470b79ef2a6"],["/How-to-judge-whether-technologyisreliable/index.html","fb3d3834a17d73aefb67692628a38777"],["/How-to-learn-design-patterns/index.html","c92758ab7c668584934bbed62f2fdfef"],["/How-to-learn-design-patterns？/index.html","ecd241f91957292c7cdb79599dc7bdf7"],["/How-to-teach-yourself-programming/index.html","7e6a144ac2a6ea2b4314daf4bab5cfe7"],["/How2learn-Python？/index.html","dfb4fdf891388f52689c2b96cf95cbf9"],["/IDEA-shortcut-key/index.html","2d628050f6164960eaac473877466fc8"],["/IT-interview-basic/index.html","f1b4e9b5fbf2b15f5fe06d4f1b709700"],["/ITK-VS-install/index.html","4ac702461c891feb2d270797d535c68c"],["/ITK-VTK-ItkVtkGlue/index.html","8ecb9f269dfe13dcde3dc4cab4a03d01"],["/Image-processing-plus-noise/index.html","20bf1cd272896f028d229f97c39acc83"],["/Inception-Going-Deeper-with-Convolution/index.html","3e73454f39d6ca310b37fe39e213b4b1"],["/Java-GC/index.html","ad33924711d9ac2372d55a4abf0b5e5c"],["/Java-Servlet/index.html","d449a943430a22eca294dda5535e449d"],["/Java-array-and-collection-sorting/index.html","b7562715f25b880c2c9129a9c65e1b7f"],["/Java-development-tools/index.html","124ba5ba834ecb41591ac1dd7a50a8d0"],["/Java-eight-data-types/index.html","c46a38750dc4a263c497e6566eb4a489"],["/Java-interview01/index.html","dd92c7ab911ac699de646c7ad3f28ac7"],["/Java-interview02/index.html","b5ef09ff7979712d282f14b0cda5a67f"],["/Java-interview03/index.html","a9fd44d3798008d934ba1e10cca5c23b"],["/Java-learing-map/index.html","1c17cb8390978856d10276752af3ce58"],["/Java-learning-route-map/index.html","5611eb0da912faf15e415294607ce4f2"],["/Java-memory-area/index.html","fc857245b126abea84e84af9f57985e2"],["/Java-memory-model/index.html","f037e8cd6b84d7819f5e365d495d720f"],["/Java-multithreaded-learning/index.html","c75b2e3a7e3d9e21bc37e001d479d9ce"],["/Java-project/index.html","894d0a119912c7c42038ba8b497535db"],["/JavaWeb-Chinese-Garbled/index.html","5cf5ce492f21ee0b4034015f50fea407"],["/Java还是C++？/index.html","e6daa6e9d910d6ff65ebdbfda8c85766"],["/Kaggle5-step-guide/index.html","322cb5142bf1d9371d1c0eddf66b72d3"],["/Knowledge-points-of-Java-garbage-collection/index.html","7e71152c240ae351ce696d65a791ef8d"],["/Layoffs-and-Hiring/index.html","201ceaf2254a4b56e4130a9e18a1d4fa"],["/Linear-regression-of-machine-learning/index.html","dea4f40d24f33eb96d178f8ebb4a2057"],["/Linux-Compile-C/index.html","74a8a54afc4f96b2bbd87e28f8b1314b"],["/Linux-ITK/index.html","ac2ec735d3074092bddcc2b1ddda5312"],["/Liver-segmentation-of-sparse-components/index.html","7e07779b7da15e366700c269bfa8e4a0"],["/ML-EBook-paper/index.html","dc206bbe8f8bcda62cb711009efafa78"],["/Map-uses-multiple-maps/index.html","51385b8493183bfe314e1d4df5db5e3e"],["/Matlab-Graph-cut/index.html","88111d37b518167e0813e2907e4c6f12"],["/Maximum-Likelihood-to-EM-algorithm/index.html","25d7d425d302ec599d55b44cccb18851"],["/Mean filter and median filter denoising/index.html","562f2ec0c1cbaf7dea955901a794c075"],["/Medical-Data-for-Machine-Learning/index.html","c316d0b4f39136cdfd5330a3c42f8c9f"],["/Medical-image-analysis-deep-learning/index.html","d501432c39ce1e3f8f5d0d86b04eb6da"],["/Medical-scan-image-processing/index.html","2eccf08d8e84d7c7f2ebd900380e32d0"],["/Merge-sort-algorithm/index.html","3dbc3ab13d8617f73dc609d3a5ee6cce"],["/Monthly-income-2W/index.html","9158a99d4ab95f0a6c0a0534502e6942"],["/Mysql-database/index.html","bc934e9fc4f45d643ced8d9f771fe965"],["/Neighbor-Embedding/index.html","ae1c7e42398b254453d804342f3de6f4"],["/Neighborhood-approximate-random-forest/index.html","93a1ed1b288271ce4c166d8307e0f19a"],["/Net-and-official-documents/index.html","010068afdf4e84e4ca2223ac7633bdaa"],["/Netflix-VPN/index.html","4f4dc8f4953c3822eca5653c4a8a82bf"],["/Network-principle/index.html","c60c09be278387d265539d07091b72bc"],["/New-Hong-Kong-stocks/index.html","718781984cebf16ca4ead7f02160bd09"],["/Nice-to-meet-you/index.html","97e6b9ac1f20f7927bdeb61695d6fdcb"],["/OS-processes-threads/index.html","185b174d827f6d45274a0a7e8d92ea1b"],["/OS-run-environment/index.html","679f4b9b8a8569c003fbea4f5a789b17"],["/Open-Internet/index.html","7f8bc78c6f7e8fced86602924b262d07"],["/Open-Internet2/index.html","4ddeafe640c1a9cf80a04f399207536e"],["/Open-source-community-and-rewriting-website/index.html","39d0bb49863e0924a93c9712600d8ef3"],["/Panoramic-image-stitching-based-on-SIFT-features/index.html","2be78e15f501bde79ee7969a0b58040e"],["/Parzen-and-KNE/index.html","b2de32ef4021b321c54ecba1c38316fc"],["/Personal-technology-blog-site/index.html","75607594c4e3959775908bbde0cefced"],["/PicGo-Gitee/index.html","3172ccac7a671690f8400f6d0671bd1c"],["/Programmer-treasure-chest/index.html","59c273e37b602d825d13cc8918f9e14e"],["/Prototype-mode/index.html","61eee456b647878bb5a35b3077f9c7ec"],["/Python-base/index.html","ad9626db9c45439852b28c0a29ab20b1"],["/Python-crawler/index.html","d2e44907941258a1701fb12e847786f6"],["/Resume-revision-suggestions/index.html","5eeebae527d132557905a417408cb4b6"],["/SEO01/index.html","e0e97f0f358dc0b1f2552961bd3a75d7"],["/SEO02/index.html","78a97301aeb8185be2dcc9c8290d32fa"],["/SPHARMPDM-MEPP/index.html","c1fd60f8864602eda486249edd6b5af8"],["/SVM/index.html","438ad0771b133b4587dd2372df3184c3"],["/Seata/index.html","62957a4ee3bc7d80d5011e2d0b9f8e2e"],["/Semi-supervised-learning/index.html","70220f6f922e99314479a07d2a20b7e7"],["/Sequential-model/index.html","17f6253fc085ab6581397a2bd58d8e8f"],["/Shape-Based-Human-Detection-and-Segmentation-via-Hierarchical-Part-TemplateMatching/index.html","61126f3c6de852907048d059464015da"],["/Spring-basics/index.html","3b17798726d6e3b49a2ebcfdc0e09a6a"],["/Spring-integrates-hibernate-Struts/index.html","95ac0a853ad30717a1373eae278f60b4"],["/Structure-learning/index.html","f1f29ab73c9e08a1078b8e4e8956c78f"],["/Suggestions-for-self-study-of-computers/index.html","66a5b875f96822e09b940dbb13cd8cd0"],["/Summaryof-HongKongStock-Account-Opening-Links/index.html","545f229dc1d5d7e954d131c30704c04c"],["/TCPIP-detailed/index.html","69d1e08e5123b222f4c4461126fbbdec"],["/Telegram-VPN/index.html","d9f2d5604435b6e6e84aa719b14a910f"],["/The-essence-of-shopping-festival/index.html","a4dc118fe4212b57b2c7abaa66167aea"],["/The-most-important-investment-in-life/index.html","48289e7df9b7619755392893097f3fc0"],["/The-most-successful-nvestment/index.html","5c01b4568c0d48e69ad1466c5cbfaee4"],["/Transfer-Learning/index.html","f30564cccf2ac71e072b25e9325d9228"],["/Transfer-to-computer-major/index.html","d5136514015ce911a8f4ed1b84184e94"],["/UNet-Convolutional-Networks-for-Biomedical-Image-Segmentation/index.html","2a93e2e7bacc6787ce7898c2c40f8721"],["/Ubuntu-install-sougou/index.html","52f8de083c99d81d4edbee36228c47b6"],["/Understanding-of-paying-for-knowledge/index.html","d87dbb97b0329dddae6a1eca9add05f1"],["/Unsupervised-Learning-Linear-Dimension-Reduction/index.html","64b5677fefbaa90ef563c38c59b92fde"],["/VPN-HELP/index.html","8c852941cf7ef35a66274001ad943107"],["/VPN2025/index.html","b54aab59bcd59dd3b7c17a5cbf29ce9e"],["/VTK01/index.html","02e0064dcff81c4e6e83a71150754668"],["/VTK02/index.html","611458ecf6718dfbeccd848c178f8418"],["/VTK03/index.html","2bdd8afe63140e4e8be5fde662dbca42"],["/VTKRead-write/index.html","2a156c5f9af82e055da8d7c12ac2af29"],["/We-are-all-good-kids/index.html","3ba65777745d6c52b09efc9fdd07b99f"],["/WeChat-80/index.html","6c75e068818757a5c75cdb19872c66a6"],["/WeChat-red-envelope-cover/index.html","2de614a9ecac10bc2c65aead075583dd"],["/What-is-crawler/index.html","760f4db44c7e95794cab844c657ab9e2"],["/Win-OpenInternet/index.html","f088e0d5c67a94454524d79ca85b542c"],["/Windows11-2kfans/index.html","6f4154dbb4b88ed0f22855c2ebf91be7"],["/Word-Embedding/index.html","cc1378a187b5d23927de20066f6a7919"],["/YuanShikai-and-his-Beiyang/index.html","85b42f2af579e4d5b1a0b6d3fbb25514"],["/Zero-copy/index.html","cd7cbeab6ea968afc9360e8e936d8640"],["/about-keras-model/index.html","a6a2e0073e07f85f56013bd24a415550"],["/algorithm/index.html","aa4b37baa0934585f81e7a3d972ca4c8"],["/alibaba-Java/index.html","ea64f82c4ae36a0cfae37d4a74d7365f"],["/archives/2020/01/index.html","3d5854ac7464486de2eff7e57ddb399c"],["/archives/2020/09/index.html","a6bfcb1e82c77c3021147673f9cd4780"],["/archives/2020/10/index.html","2035c6af01c0bdeb8960b44441922926"],["/archives/2020/11/index.html","32e633ab67f97799d5d0eace12d5468f"],["/archives/2020/11/page/2/index.html","e2605158d94ec9bc56e48c176a1c6a20"],["/archives/2020/11/page/3/index.html","e03050f56c1bb96894cd8b713438d153"],["/archives/2020/11/page/4/index.html","53380dbe1654c1b304611525bb2f3dcb"],["/archives/2020/11/page/5/index.html","4cade8b3a79967dfc343a9bf7c2e905a"],["/archives/2020/11/page/6/index.html","d0ad9a5a2a2522d17080e0b1579e62e4"],["/archives/2020/12/index.html","b5b4803d8679e3f153f04ab89286e5f6"],["/archives/2020/12/page/2/index.html","b898516489233237802a06d947f3ed00"],["/archives/2020/12/page/3/index.html","dd47a59d0e56d9f89cda72a7a88193f4"],["/archives/2020/12/page/4/index.html","6a72586e11a1dda4f78ceddccce0e559"],["/archives/2020/12/page/5/index.html","0b81c1856de02566465b7bcd40bb439e"],["/archives/2020/12/page/6/index.html","d83140ee90123b97ad5dfbfae091e32e"],["/archives/2020/12/page/7/index.html","319cd274e002aeaf062c7da5af4d1bcd"],["/archives/2020/12/page/8/index.html","02ca4549c1748005b2d79fe16505acf9"],["/archives/2020/index.html","1b14ca5a3fccd3c9541b763137849722"],["/archives/2020/page/10/index.html","36030fd10f1c9aeee37f0041dc96bb70"],["/archives/2020/page/11/index.html","37d59c567132b2e667eaadd5437c3c1c"],["/archives/2020/page/12/index.html","3656576441b81a744a52074705556c83"],["/archives/2020/page/13/index.html","5a5213d02ba40f90dee304e826e6e869"],["/archives/2020/page/14/index.html","2c750e92dbcd0227bb578d1f54886dad"],["/archives/2020/page/2/index.html","2c2fbff8bacbc1d461a8ec18bd972160"],["/archives/2020/page/3/index.html","37dbe2d72806eb8107545b7aef1e07b6"],["/archives/2020/page/4/index.html","59066963d623e7712cce8d992169c503"],["/archives/2020/page/5/index.html","30cde48b2593d4d4386860e7c47fd4c9"],["/archives/2020/page/6/index.html","54b775f165549ebe70fea31a7a5f4910"],["/archives/2020/page/7/index.html","aba93fda72186b351651a3447391e729"],["/archives/2020/page/8/index.html","16dbafc878238247bd71eef48e35a47c"],["/archives/2020/page/9/index.html","536f8f43878fbaeda487ae46c2f4aaf9"],["/archives/2021/01/index.html","8e86993d68587df7a21d8cd15094263c"],["/archives/2021/01/page/2/index.html","89df4a64673d4d223d0f5b323293d274"],["/archives/2021/01/page/3/index.html","2696f24ab0d813e77076791493ff9170"],["/archives/2021/02/index.html","029b3aa9ac8e82a006f23d1fd2e7eb32"],["/archives/2021/03/index.html","96f00f79dad8f2f0537c45eb8be09b6c"],["/archives/2021/03/page/2/index.html","618c6d95e3d596d810cb4888f088fd9d"],["/archives/2021/04/index.html","9ae0841dd43297fdf7224c2dd7f7e57a"],["/archives/2021/05/index.html","ce71557942c61d1fcdc38726a87eb66e"],["/archives/2021/06/index.html","ef4467f44a4d7c46f3cf9091b6063636"],["/archives/2021/07/index.html","9f9ef94fc3d60d249d9ea953581584a6"],["/archives/2021/08/index.html","675feee72134af13b02e3a25d6702a4b"],["/archives/2021/09/index.html","e9199ffe114b664ef0f70d50878e59de"],["/archives/2021/10/index.html","d80e4bcfb09c5db36abd12eb887418cb"],["/archives/2021/11/index.html","a8107941fb3830fb2cb14b0731c1dfed"],["/archives/2021/12/index.html","d4ab5123dc5513eabdd4f43dc9e20150"],["/archives/2021/index.html","bf824613bf4fb4fbb65efa815849a652"],["/archives/2021/page/10/index.html","731c894c5979e56543e14d5a0386a3b0"],["/archives/2021/page/11/index.html","c9f1534889638d33488cb9925d893127"],["/archives/2021/page/2/index.html","4e91b4ff5678a12d83651cb497c1c313"],["/archives/2021/page/3/index.html","bb205f729377cb3a4d2d71379918cf43"],["/archives/2021/page/4/index.html","5635ec714aadcdf85d32e2628b918a72"],["/archives/2021/page/5/index.html","86fd1bc8085a1e7403515f368c7b00c0"],["/archives/2021/page/6/index.html","4cb22ed9d6be33046ebe7594d5f500a2"],["/archives/2021/page/7/index.html","72e99970a9b121c786c4fc7be9f5424d"],["/archives/2021/page/8/index.html","fe5322da0531dde3efa34f8872f0032d"],["/archives/2021/page/9/index.html","a345caf295f5fc7e2f21ac308cd21925"],["/archives/2022/01/index.html","67710b6e94b17bf1f9d0fedb32853a84"],["/archives/2022/02/index.html","7d89c246c784b8d9d881315933e7c4d6"],["/archives/2022/04/index.html","221d9564334ea3d9c02bc4720c8a84f9"],["/archives/2022/05/index.html","f0dcc28861ad10bb5324a223e64185e1"],["/archives/2022/12/index.html","525204e2f77e665f7ad02b06454c1d2c"],["/archives/2022/index.html","a5dcbd976ac85cd8180f0c305fcb580f"],["/archives/2023/01/index.html","4eede9cf915d30bf7cb169f5e6541704"],["/archives/2023/02/index.html","c7409d0d4fcbeccc29f6bb31ca546fee"],["/archives/2023/03/index.html","eecae4afaa8ed3ac134305cc642912e5"],["/archives/2023/04/index.html","ab391c42b70eca5f630f2d36e918a020"],["/archives/2023/06/index.html","d6c1be9269a120c02f0e8ddf0eb3cdf1"],["/archives/2023/08/index.html","a3220bee7f00211407160d5c21324f45"],["/archives/2023/10/index.html","c27317fd6a69715d0aed44f4c19e6206"],["/archives/2023/index.html","742b7b81b8b9e04c2b01cf4796874321"],["/archives/2023/page/2/index.html","22467bdac4702623d21060aacb724e18"],["/archives/2023/page/3/index.html","3d9fdbe20a1fa4a142e6cba0aaa9aedd"],["/archives/2024/01/index.html","7494ae16b39d9471b1cac5abf0869cc7"],["/archives/2024/02/index.html","44a67ba52e9c80041de26671bc27e29c"],["/archives/2024/index.html","5f146422e1755860116353cc68b7f34b"],["/archives/2025/06/index.html","f002999919fd7569d6df115659728058"],["/archives/2025/07/index.html","2eccce1c2d5e4e5ccb410498a45a990a"],["/archives/2025/08/index.html","810c0ed86e758d39816ee57d6b16b2f7"],["/archives/2025/09/index.html","a54bacc85cf1acf62ee9d63bae30c7dd"],["/archives/2025/10/index.html","eecb7236b06172ec5c19b341d98564b9"],["/archives/2025/11/index.html","5e8ed20214f0d0d054cacb09e618c700"],["/archives/2025/11/page/2/index.html","e7013e003bd86378b17ea0225c41c775"],["/archives/2025/12/index.html","97eb7168ad572de119d6ba588df65421"],["/archives/2025/index.html","60a7888d9c5276571291b6dd13079052"],["/archives/2025/page/2/index.html","39d12f655542354c0148444865e655cf"],["/archives/2025/page/3/index.html","cbcee6e34ce12e443a490f496fe5d83f"],["/archives/2025/page/4/index.html","9af4b40480f644371703bd40a1d24389"],["/archives/2028/02/index.html","5f5bd11a55a3a19e01d4a11f1a2469d6"],["/archives/2028/index.html","e11c13e80f4fa00e9e80be81f085b4a9"],["/archives/index.html","dc75849a0cc82eca0abd5099dec354b7"],["/archives/page/10/index.html","46705d7bf7241731c615e0e625ab49fe"],["/archives/page/11/index.html","d14bf7b8ab2b4191d4c82d88ce9888a6"],["/archives/page/12/index.html","b851d8c01bb913d4b1711b677ea49356"],["/archives/page/13/index.html","dd2b1c508c2eb2e73faa543c73463392"],["/archives/page/14/index.html","41f469e6b71e7372a41349c319fa8a19"],["/archives/page/15/index.html","535619e3effb13aaeda01dd449af2ca1"],["/archives/page/16/index.html","c5110ad689bc5ff412fc00a9b5478b86"],["/archives/page/17/index.html","19beba266c21858b7c327c82ea274d1c"],["/archives/page/18/index.html","8f6bdfc4aa65df945bf30179ac47ae7f"],["/archives/page/19/index.html","86864c5d7c70d130ae6e1092c5dea6bf"],["/archives/page/2/index.html","e953ec6d66a642682b3d44650a55a267"],["/archives/page/20/index.html","15c9425a13312ed04ed7f441c0a1df82"],["/archives/page/21/index.html","b3f1740715ecd59424548b8b161e2d7f"],["/archives/page/22/index.html","2768c1c52883e85a0a57c901bc3d54b8"],["/archives/page/23/index.html","75999c2d43edd890c311325368a98b85"],["/archives/page/24/index.html","6208a8d4a95dffd018cf85a3573192b0"],["/archives/page/25/index.html","b2c2ea42968595178c030b578bcf1f85"],["/archives/page/26/index.html","0c278b22dc8044b005733061b0684042"],["/archives/page/27/index.html","f76a698daa4ab3cf9a9d14e63948c028"],["/archives/page/28/index.html","53cddae094c696833f9b2ce29d60d24c"],["/archives/page/29/index.html","a83aaecca480465a109d5b5084ffd9c6"],["/archives/page/3/index.html","b577ba6e94c1e49ff30a95439d8fa0a6"],["/archives/page/30/index.html","4d0cbad2a107d57d6916f18b38e82942"],["/archives/page/31/index.html","1430a9ead17d3a3cdf9aea64c42c3e4c"],["/archives/page/32/index.html","13b2bb66513a784e01faf8bbe0606443"],["/archives/page/4/index.html","b22c956d2f106650f073d32068d51376"],["/archives/page/5/index.html","c0d7e29297dda0acea2cbcfe30728790"],["/archives/page/6/index.html","f470ecb1f75460260eff2ef4a7959def"],["/archives/page/7/index.html","f9b09ed862d226bf62a2522c34828bed"],["/archives/page/8/index.html","8fd1c094a0f3e2cdcb4d7a61032b86bc"],["/archives/page/9/index.html","347007852bcdfdccd18e00116c9c824e"],["/baidu-search/index.html","6c8d1ffcf9398e1af9a868b3fd7b6eaf"],["/baidu_verify_code-Hh2fKNlEB1.html","b3f4ed7edf0bda294c30aecb472c668e"],["/be-a-programmer-instead-of-a-code-farmer/index.html","c03261c5738b9923027136782f9b440f"],["/bought-a-house/index.html","a065365f3e82414d73c43259c673ea15"],["/categories/C与C✙✙/index.html","27b06b6974e83617ed6126edbdec1cc9"],["/categories/Go语言/index.html","fcf55f8f784244a9417a8b8fbd70d1f0"],["/categories/ITK与VTK/index.html","f79bac3c8538e3d1aa82c8bfa6ec9cc0"],["/categories/Java/index.html","8b32c363114e6ad38dd25fac7463a828"],["/categories/Java/page/2/index.html","d7360507195a833a071c44b2227ab1e7"],["/categories/Java/page/3/index.html","fef0902ac0bff98a3d98416e238fd8a8"],["/categories/Linux/index.html","6854f7e25d9c6215c86deecd4857afc2"],["/categories/PLC/index.html","e0494cf2c4b98770321b45bf52151964"],["/categories/Python/index.html","dce5d64745978c54bd3c27c445df455b"],["/categories/SEO教程/index.html","51867c5e9cb7f0fea85f875512f491b1"],["/categories/index.html","ad71f06ec54fd64465374362c23cfdd3"],["/categories/图像处理与机器学习/index.html","f5ab968737afbc0f6dd539bd2895dcce"],["/categories/图像处理与机器学习/page/2/index.html","ca6feb445d6e38a3067a5d2a99afd5f0"],["/categories/图像处理与机器学习/page/3/index.html","0880cc6a3186a1fdcbbd40f47410bb0d"],["/categories/图像处理与机器学习/page/4/index.html","9b23239c99551aa7d2c352547ac21bb0"],["/categories/图像处理与机器学习/page/5/index.html","a18033a3fea75a737193158c248c7f22"],["/categories/图像处理与机器学习/page/6/index.html","86b4dd1eba7f3eba7d5a0c8a88a7ac55"],["/categories/工具/index.html","d4eff35e3c8732fdbbd3933612416142"],["/categories/工具/page/2/index.html","c67a193b676a577abe83bf18408be4c9"],["/categories/技术以外/index.html","847f5953056c32b3a368bb21a58a4cef"],["/categories/技术以外/page/2/index.html","fa3fd080ee7f19a19ce50cd2edfb823f"],["/categories/技术以外/page/3/index.html","797946e290c77766497aae2fdcf73e67"],["/categories/技术以外/page/4/index.html","28e954b05e91c2b915152402ffead5f5"],["/categories/技术以外/page/5/index.html","4293e95e86c6666e7483ba5d4d12d7d5"],["/categories/技术以外/page/6/index.html","30e445a3bb317923323e25906258cea9"],["/categories/技术以外/page/7/index.html","260f3f2b6a2df0f94c891ec8f88f9233"],["/categories/技术以外/page/8/index.html","914e7a85f590808adc22da4090d1c15f"],["/categories/技术以外/page/9/index.html","3f8b070e9c2872889df6889231d10848"],["/categories/数据结构与算法/index.html","4dce49dbb6a3dd18b9e04fa53542361c"],["/categories/数据结构与算法/page/2/index.html","18af872de01c9813ca93801f6bc48e7f"],["/categories/科学上网/index.html","96834ac3c79ab4c2f8cea8efa691a988"],["/categories/科学上网/page/2/index.html","b05e5588379c6147c393527f1419f024"],["/categories/科学上网/page/3/index.html","ff26bb1d912346479daf7ea4a7f3b87d"],["/categories/编程经验/index.html","4f88825f7d594b30276eef424059564b"],["/categories/编程资料/index.html","e9bcc9a1bc3ae07f3c5c842d733b93c4"],["/categories/编程资料/page/2/index.html","f096f283d02d77d6feb1d3ea3748488b"],["/categories/编程资料/page/3/index.html","f9cca4da5c4315e5f8a4a5c1d8d41d1b"],["/categories/编程资料/page/4/index.html","c7fd997c451cbbd9611edb48cc826aea"],["/categories/计算机基础知识/index.html","d36c5dbd8c8425313a8b59d146b74bc7"],["/categories/计算机基础知识/page/2/index.html","111c1149fd22db38012125f454497e37"],["/categories/设计模式/index.html","ab521a8015c62a88109b2c299af05ec2"],["/choose/index.html","b3215966507964c45a57e3098330abd0"],["/choose2/index.html","6a47e56face0284bcdcbea742016578a"],["/chrome-crx-intruduce/index.html","123c9daf0e3450dd50a4ef03097aed80"],["/clashvpn/index.html","35cb8d774279a3191cfa6ea61adc1519"],["/coder-blog-website/index.html","5dfdb967b99cc5886dc0b28c2e6352ee"],["/coder-source/index.html","e6693c446c52b7ca15bec68757495d92"],["/coder-videos-website/index.html","a8bd2963a86262cda52e55cdfb3f0531"],["/computer-book/index.html","dce3dc2354df88569fab3c63617c7e5d"],["/computer-censorship/index.html","1d1a5a82048a2dc81cbb453c664393e1"],["/computer-network01/index.html","1a46dd9320a448b516bde1a8888c23fb"],["/computer-network02/index.html","e498393c78628b4e390abab5c661044a"],["/css/main.css","bc32ad34ec4990d934c3c647bdb62f79"],["/database-Mysql/index.html","995c6473bbce84efb46585a6f7538c9c"],["/eclipse-lombok/index.html","50dcffdad0ab30657a0af8a94b22b12d"],["/fully-convolutional-networks-for-semantic-segmentation/index.html","0bc98b148060de27d90384ddd50a8be0"],["/great-firewall/index.html","9e676991d6a50366d2313abe3d8d013c"],["/halfrost/index.html","0b40048792c8338ca425284bfceb4a69"],["/how-to-signup-chatgpt/index.html","770214f59e51e59c4bd053f257528cb4"],["/how-to-use-Gemini/index.html","3184e5ad7c3689bb7d95f79d10536d0b"],["/index.html","8edcb70a46a3bc9ceace5f22418acbb7"],["/ios-open-internet/index.html","e637d6c0326d2256a695e8d1e5a70212"],["/iphone-open-internet/index.html","1b31db65f404bbf75b45676cfec7b14d"],["/itext-makes-pdf-form/index.html","329981eea55d68e9540f8f9d451075da"],["/java-Set-Map/index.html","2a40b74347b253ad9b325e963b0bdffb"],["/javaweb-server-error-codes/index.html","4a18d2b35e46a418aadb85ea9caee53e"],["/javaweb-source-code/index.html","e42623a4c8aa7d13978d4046ddec7596"],["/js/lib/busuanzi.min.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/js/lib/lozad.min.js","47904d34a224931dd1b615c59a3dbe3b"],["/js/lib/prism/prism-coy.min.css","0ccad54d95845901ead59bfd3ecceb14"],["/js/lib/prism/prism-dark.min.css","a4711d2957d6605eb5682bdd228cf123"],["/js/lib/prism/prism-funky.min.css","efedcdccd7a9ab342d2d9cacd24920af"],["/js/lib/prism/prism-line-numbers.min.css","38e22e790c279bb56f9ec4b90a2a2d58"],["/js/lib/prism/prism-okaidia.min.css","5ac6f9de996fbec68aaa106dfb16e061"],["/js/lib/prism/prism-solarizedlight.min.css","ecc7e64d039873ffcf7fb27babdaeb5a"],["/js/lib/prism/prism-tomorrow.min.css","456af2a14ae4f5089939d5904ac40fe8"],["/js/lib/prism/prism-twilight.min.css","ebb5c355332a8cf9a1ce37a2a69d678f"],["/js/lib/prism/prism.min.css","a5234d614834658887cec6a9515890f8"],["/js/main.js","052d2b299d9c750afea8df0b802ab7c1"],["/keras+TensorBoard/index.html","3bb48a43db177f669551be5476382fc5"],["/keras-beginner-guide/index.html","1e977baa85280699e4ff0080d30f9984"],["/kmp-algorithms/index.html","4f3d6e06cdbc24e812ea920b5f37d455"],["/leetcode-Java/index.html","00e69948af8911f52f3477b3faa1fed5"],["/links/index.html","b645181b7060d10d243f67c6f2df98a8"],["/linux-java-opencv/index.html","fcf252474fe96601fb553498b150b5cb"],["/msb-source/index.html","c5232ef1e4968c33a8b1deed6b645fea"],["/online-BUG！/index.html","9713a74d8865a72c555d044efd9dd246"],["/open-app/index.html","149f58c7d4ae1498c526156d5ee892c9"],["/page/10/index.html","ae1bdc6512d05601a4733d25ddd23d55"],["/page/11/index.html","7a593d400dd6c0ececce32b9b6e1f562"],["/page/12/index.html","723041b488bf2f70a7cff769a471cdfe"],["/page/13/index.html","7667941ac7d72aeaea43dfbdaaa8334d"],["/page/14/index.html","93d05f7da740e7dec78bebe8369aea88"],["/page/15/index.html","6bd7c771f1dde8f1830eaba19c036cbd"],["/page/16/index.html","87faf4f7476afa9b996175dbf179eb9f"],["/page/17/index.html","4ce039fa0e2e9829d5f931503a75de48"],["/page/18/index.html","ef37b7ca46fb8db1caf6be52dd334992"],["/page/19/index.html","68d2665516a2e06f1a93ec0940574a51"],["/page/2/index.html","2af17dddfa0d0bc65324796cbd3c967a"],["/page/20/index.html","0ff0909371438bb9ddfc0b49e4e520c3"],["/page/21/index.html","6434eb704f26ff3e81dc56a692cec93c"],["/page/22/index.html","27281c2395b7468d2b64eb17bcc500a9"],["/page/23/index.html","da4c27e3714cf0ebba483e9127f5484b"],["/page/24/index.html","eec24f3e8660568c8cd87c5a6d249110"],["/page/25/index.html","ba2842c6a45abe2a63180ae539648f61"],["/page/26/index.html","ab0424bf062640d40ef6a39db161aec1"],["/page/27/index.html","dfbc45869e20c7dc9ed5820a0e6cd02f"],["/page/28/index.html","b4665b9723506c1ee678672399c71421"],["/page/29/index.html","a0e3dac7a4997116851fb8a520abaef9"],["/page/3/index.html","e9d974ddc4af3ce6cad8cca98d3429c7"],["/page/30/index.html","0184520477df1621711b9ddf8475f44a"],["/page/31/index.html","632c0554a6a3a76c0bfa35e9ca2a373b"],["/page/32/index.html","b61889a65c87d758d54dc87642b88f71"],["/page/4/index.html","6b2c7256201870bb6422226a488f5bcd"],["/page/5/index.html","e4dd96914e4a5c254ca6d6c6c1d93fb4"],["/page/6/index.html","86a11957d117bd525067612e1d82ec28"],["/page/7/index.html","fe71d68b76ceefe46982474bf956d622"],["/page/8/index.html","7ab2b253d061acd80ec40886ddd8f11e"],["/page/9/index.html","b85c24e9074e64568fdecca7e68e7904"],["/pandas-data-preprocessing/index.html","3d543f0d8c093748607d225e438cfff0"],["/phone-win-open-Internet/index.html","bb79a2943fd81634cfe5dcee8565e30b"],["/popcorn/index.html","af2810e4cb3cdc5b93239115b0257835"],["/python-Blog/index.html","835ba85829b4e14aa161b9a8e8552eb8"],["/python-yeild/index.html","2b52500f6383c52784e22c09c235a1a6"],["/python爬虫教程/index.html","e82f4a6184b3e2c68967b91ba332bea5"],["/software-copyright/index.html","bbec643f9f093e67bb5d615448f6aa35"],["/sw-register.js","9676401becd987a17369f244c41c70f5"],["/tags/AI/index.html","e6cba1035014dbd468a99c7439ae1883"],["/tags/API/index.html","ab2a3fc7253f8bb8a8b091cbcc2c0f12"],["/tags/C-图书/index.html","bf2e8ea783d9295dfc08a39daba35fc7"],["/tags/C/index.html","553fd66be49ab23e5a7264d0617663b9"],["/tags/CNN/index.html","53b05432255442fedc6aaf8d695ee15a"],["/tags/Chrome/index.html","e5dbd712bbf5de1c6085b758a070c182"],["/tags/C✙✙/index.html","775df92439ed1a421d6be0101f4e2a99"],["/tags/C语言/index.html","c0e75f7c77cb57a3e67954db425419c6"],["/tags/C语言图书/index.html","cfdcb25d75939dc126513ee5f008d530"],["/tags/DSN/index.html","469323d3f701a472618dd303510575da"],["/tags/Dll/index.html","017282bc4c254056b034b3f285ab6008"],["/tags/ECCV/index.html","d195e6440dc538332afcdfb7c183ba5c"],["/tags/EM算法/index.html","f043c9d4667941df34729de63b86dea2"],["/tags/Eolink/index.html","fa9d4a690b69960a084fdec0f27ab5bc"],["/tags/Gitee/index.html","177872585ae40a2efeed11de04c86ef4"],["/tags/Go语言/index.html","f75cb5c27b3c7f38b2148ddb26fc05d6"],["/tags/Graph/index.html","f0679aa657228a720a03c9d424e2884e"],["/tags/HTTPS/index.html","83460bb56a9970c886a441d92e2dc972"],["/tags/ITK/index.html","03338ce04a27cf1f238548054a633252"],["/tags/ItkVtkGlue/index.html","d26a259c2ec2298f911dda419f7be909"],["/tags/JMM/index.html","dcf016d29bb22abfb3e87673646568c6"],["/tags/JVM/index.html","4219eb5b07e873f2726c243f64822025"],["/tags/Java/index.html","d45c54e212e73067189a28e8f645740e"],["/tags/Java/page/2/index.html","fb6ce44a942f9e519efc03eeb4124af8"],["/tags/Java/page/3/index.html","0c1a4c4ac95312abfe47c7d7320ab791"],["/tags/Java图书/index.html","67fae615f6ccbbad873d7984fd91b242"],["/tags/Kaggle/index.html","5c2aeb510f75da271608c18b380379bd"],["/tags/Keras/index.html","75cc151e92beac7a8cdf09f8130c0d3b"],["/tags/Linux/index.html","8218dcc4365141855ff72783a6991dc4"],["/tags/Linux图书/index.html","a630d4f782846b4f5577c9e447c8082c"],["/tags/MEPP/index.html","3518bac8654dc3ebd5f86f4a527c44f6"],["/tags/Map/index.html","5b7fbf7261d4fc9690fcdde46588a59e"],["/tags/Matlab/index.html","db211347bc889601be44ef782965cc43"],["/tags/MongoDB/index.html","1e199f824fd8f814e29e22ac1a15e1df"],["/tags/MySQL/index.html","4a5fa33cc875e17826bbb5be25af754d"],["/tags/Parzen窗/index.html","4794b3674752dea1940a8f7a86c0daf0"],["/tags/PicGo/index.html","e8bfb18b6e8df32b5294b996461a92a4"],["/tags/Python/index.html","79b449f86175134c6accafcedf809b9f"],["/tags/Python图书/index.html","dda8c2d7eb054ca1d0c9a5407926d837"],["/tags/SPHARM-PDM/index.html","33f3c56ead508e371a249e1b4efadf4b"],["/tags/SVM/index.html","5f1f620ed8b3bf9a7cb523ff310b3b51"],["/tags/Seata/index.html","6aec9cdc4620b5b0d6ad4e615c7c2822"],["/tags/Servlet/index.html","e82d49d27e9336399f4b2fb018c70777"],["/tags/Sping/index.html","02358cb6838ee39385e9bf09029c8415"],["/tags/Struts/index.html","79220d75605b5b5836778546c86d5eb3"],["/tags/TCP-IP/index.html","387b5e535766cce31724b25f547ec740"],["/tags/Ubuntu/index.html","72b56f43faec0e8540a44236ca3f8e7b"],["/tags/Unet/index.html","77bf19956cce30cc37ddd9d20c13a575"],["/tags/VS/index.html","14c344a36f80cd0eae9a0786e166300a"],["/tags/VTK/index.html","a8aa6dcd64c6f1f67b033d6498840ac1"],["/tags/Windows/index.html","c5ce2070556730e9f2290ddabd7f9136"],["/tags/edit/index.html","ed5357810fe11887c9935b484c393df2"],["/tags/hibernate/index.html","e2cda73abb6ed8419b4a5ef473b2bd9a"],["/tags/index.html","516fe1afbc7b24fab3542adccaf91902"],["/tags/itext/index.html","e714ed5d732ce8c2e74a793f1d7d2795"],["/tags/jdk/index.html","390e283ac9c465b83e671e38e47a4e51"],["/tags/kmp/index.html","1a7fd8dc24c5828b298562fa04f622d8"],["/tags/k最近邻估计/index.html","4c3cab74d638c09e2b13e2fdafda755b"],["/tags/lombok/index.html","739d1623541d626fa3b72bb51c08ab7e"],["/tags/offer/index.html","e024f15cab9b1a39eead5168d8e75f35"],["/tags/opencv/index.html","e764abc23396290d6a5ed09812155867"],["/tags/pandas/index.html","58a496f8db3d0106e3dd302af67710c8"],["/tags/string/index.html","176911a4f158db93e5ef15270dbcbb93"],["/tags/vim/index.html","15fa5f790363b456f942e2190386edc8"],["/tags/vtkPolyData/index.html","ada7d8006311d0e6d4c5207a3ca43f9e"],["/tags/web/index.html","880c7c016ff9c40513346bd409f0357c"],["/tags/xshell/index.html","cbfd687dd15a2288e3d4749fc1e420f5"],["/tags/yeild/index.html","d4a38b5eb106ac4758b9c89eb82bb2fc"],["/tags/互联网/index.html","a62dcda2f078bffdede1fa835bb2b68c"],["/tags/人工智能/index.html","22c1f15e16e24320a613f25fe6256868"],["/tags/体绘制/index.html","ff9cb74a269d133897b8fee09377d0aa"],["/tags/全卷积网络/index.html","03eccdb63df2afb4ab09c8472743aa6a"],["/tags/公众号/index.html","5fc2975085674788c16ee8c7d64fc98a"],["/tags/内存模型/index.html","cee2afbc061935b8d3fd34338e97a114"],["/tags/内推/index.html","3a6d7c509638195aeb6aa1015aadd62b"],["/tags/函数/index.html","a54eb3f7ef0fe21608d3c806f05b88d4"],["/tags/分布式/index.html","5d801e40a21aea91ffca9e3ad37f517f"],["/tags/加密/index.html","7bf186478d1b8c03751d76271683ea93"],["/tags/医疗图像/index.html","26ef518dbb681a938b41b737fa7b970e"],["/tags/博客/index.html","17fec5fb483fcd3fdfb0e3a08d7a2bd5"],["/tags/图像数据/index.html","2f150e1ff0ed000060029fa5af8a687f"],["/tags/图谱分割/index.html","26dea29843a79320c05ff318d6c18a7e"],["/tags/垃圾回收/index.html","be34b8ec624eabe87457b5f95f3c2a85"],["/tags/多线程/index.html","fe447beaed4120f533e1714b2122f27c"],["/tags/字符串/index.html","b3c445af41dbbd4e6af17ef353ff1b37"],["/tags/工具/index.html","856f6fcf96e74def54ea83bcee5de2a2"],["/tags/工具/page/2/index.html","d6faebc69a610bcee96c27f1cf03ab77"],["/tags/弹性形变/index.html","1a1342a08dc42b4117176cf5838ce7b1"],["/tags/排序/index.html","40bcb828b724ec7f1d5e13bb443f3c39"],["/tags/搜狗/index.html","b55ba3ddb03db4814a157500415e1af4"],["/tags/操作系统/index.html","1afaa93445af1a3e3ff5ef5f2b6bc3a2"],["/tags/数据库/index.html","be576759eff0ec3fed4d873bceb82f49"],["/tags/数据类型/index.html","514ba8ac86ee9db84c18e71892e86c42"],["/tags/数据结构/index.html","31aff9d7814d11af803d1a96acdba092"],["/tags/最大似然/index.html","262b24ae186b234cb61d3dad5adce95a"],["/tags/机器学习/index.html","b67c45a40e21cca0e3d6ad8375714f08"],["/tags/机器学习/page/2/index.html","7d65d8c5484750d7feba7bbed104aae5"],["/tags/机器学习/page/3/index.html","c148b24e1e93253a114c3207e841d19f"],["/tags/机器学习/page/4/index.html","3960ac7a33808ebc2e268e1416860e12"],["/tags/机器学习/page/5/index.html","7dec55f59b6315421a5223f22ca116c4"],["/tags/树/index.html","5371ab798c1e70c25a881c47c46e2ca8"],["/tags/框架/index.html","b75781812f75338ed183fa1eb7ba9800"],["/tags/求职/index.html","c46045b5ba9e49feb56edb6bb7eec358"],["/tags/汇编语言/index.html","b8a41b70546aa363e53db4a0be5c2669"],["/tags/深度学习/index.html","ba861ea21b2576d919907f847997a7a5"],["/tags/深度学习/page/2/index.html","a81e84163b310110a2597105ba0b7477"],["/tags/深度学习/page/3/index.html","d487aa2e8c5f65301c5a2f3fe5f2dafe"],["/tags/深度监督网络/index.html","ce0ac5ce2f534f1dd4f7d0b1265a3a07"],["/tags/爬虫/index.html","92364405b3159d29019df9ab5fda689b"],["/tags/电子书下载/index.html","7bd76ef1c975af556177adbe8bb2251a"],["/tags/电子书下载/page/2/index.html","cde79e62af8a1813a0eab31b7e993f99"],["/tags/程序员/index.html","161043dc760ca0335e3db562f1a26256"],["/tags/程序员面试/index.html","7be5ea593501fae002d011b57679ce62"],["/tags/简历/index.html","3243263770822984e67c52fbba66e28c"],["/tags/算法/index.html","c929ee886dc2e4db7c03096b7f762393"],["/tags/算法/page/2/index.html","c41878607b9751157698691e99aedfbe"],["/tags/算法/page/3/index.html","e28d75bcabe46fa4f03d3904da2297c3"],["/tags/线程/index.html","905b94a9189197d8635b741f0d3bb98e"],["/tags/结构学习/index.html","726ba7d9c7a79dd5be02be72f67adc9c"],["/tags/编程/index.html","f1803b5418d74de50bdf50856d00abc3"],["/tags/网站/index.html","0cf35744bdccd9ce9eb692e11fd67617"],["/tags/网站/page/2/index.html","be4cd26ee3acfe710faaff060e5c3a59"],["/tags/网络/index.html","f24ed5f0c305574d65f30af3e358adb0"],["/tags/网络原理/index.html","fa7ca78e1ee91a7ed7d83060e5f0a69e"],["/tags/肝脏分割/index.html","f9382b1131f5ce7b9acfec356ecb5eb9"],["/tags/计算机/index.html","068909529ab72c9951b00682501e1a6b"],["/tags/计算机专业/index.html","d5d0db3d979f9ec5490fb1cc1955b006"],["/tags/计算机网络/index.html","cda027ee69a494e14846e0db79461458"],["/tags/设计模式/index.html","c300af2fe8a0a0b1c0af9a42acf5724b"],["/tags/贝叶斯/index.html","dd9081066e3c2e305e8ad37bf00a57ca"],["/tags/迁移学习/index.html","f7b8f6622d4b4ff3a3d3a91d00492f7c"],["/tags/面试/index.html","745110a3980eb99f8c4ddc22125a55d5"],["/the-way-of-pragram/index.html","51baa960c59f9f8517f8790ada2c15cf"],["/untiypro XL安装/index.html","1b273b04536a9f6bf0cc0abc957eca6f"],["/video-websites/index.html","2165e58b76a8463a30f6ac08b3de9676"],["/wechat-fans/index.html","1a63a735c1c287ebba56ce0c71cccadb"],["/window-run-VTK/index.html","121df90d36d1fe6d0f733e1bf3f778e1"],["/xshell-connect-Linux/index.html","11fba238229ca73f21d5dfa073e06cd2"],["/‌Accessing-the-Open-Internet/index.html","f8d940e1e1cb8809f0f8c4a11d8b4f05"],["/《Java高并发编程详解》，去大厂必看！/index.html","338c758fa0fa3d4b76abd910b837079c"],["/一分钟没了 1.5W 。。。/index.html","28a7e0e88b41367014ab293886d600ed"],["/一条高产爆款内容生产线/index.html","8a24f94428d8fa019a92af9a81740cd3"],["/为高考学子推荐的六个就业前景广阔的专业/index.html","01f29a5cefeaa823aa343684d42951a3"],["/互联网赚钱机器---社群/index.html","96e415a9166e3e2ba6583320852d7cff"],["/你们常用的工作方法和思考方式是什么？/index.html","4836d8f0ae906b089a6f03f6b970d619"],["/关于环境配置的一些事/index.html","5ed9a68a2487e3f3b93f7697ff20884a"],["/准备了19w！搞事/index.html","b3c8a7daf3dbd33bca050f22ee1dc6a9"],["/几个很重要的感悟/index.html","90e88061bc2fbb2eb4cfdf7c80f00f6a"],["/分割ROI篇/index.html","a5bc74fb69844126c497f1ba43a438d1"],["/分割精度说明/index.html","35161ee7c5572fb94f3dd78b533ebb89"],["/分块程序执行/index.html","b0939fa48e6bff4cab552fd8ddd8a48a"],["/加班公司黑名单！！！/index.html","62abc097095ecf7f798b10ca9ee0a46a"],["/卧槽，上知乎热搜了！/index.html","22d337b207e9a3bb2efd091414b0cbd9"],["/卧槽，我的小破站爆了！/index.html","30e4827ab148421c2d8e66c3ba4865bf"],["/卧槽，我被盗版了/index.html","461a9a78412a9671a363d505a6a191a6"],["/卧槽，还有985大学在大一上C语言课？？/index.html","1fd61f2e1d7c0515614135596580a9a0"],["/历年微软面试中出现的leetcode算法题/index.html","470dd419f789548c3f73e0a2be648c94"],["/去特斯拉试车了/index.html","c0252696e46ba327a40e0d93939dfe5c"],["/吃苦的三种境界/index.html","2ab777ea482a5ce563aff45c0ff24e2d"],["/哪本书适合推荐给 Java 初学者？/index.html","7e8d6afa58247dccf48a14dabce09e1d"],["/哪本入门级的学习数据库的书最值得推荐？/index.html","eba0c0b045cbe38a2f1cb492d79aba62"],["/国内外常用的AIGC模型/index.html","2edf25a73439bcd1ed4499a3a7068713"],["/国庆假期/index.html","5187313190c65f87c013ac215ec62359"],["/图谱程序字典/index.html","b45b8ffd1e829008c63d31350fe15053"],["/图谱训练与分割/index.html","ed07f7aaac1d5fe0425b93ec13e0e130"],["/宣布一件大事/index.html","89598f1fb69d5aee885214f0a12f6254"],["/小鹏P7i试驾体验/index.html","a68ea17fdc9a10d83952c9e0c536fccd"],["/微信PC版3.3.0内测更新，电脑可以刷朋友圈了/index.html","2f65c665014639337c744821aec45d35"],["/怎么更快的赚钱？/index.html","4e91c8f408a686368682c2cba3d7029c"],["/我毕业了/index.html","1159f82f6ffb0621a05f59eeaaf8c1a4"],["/我！真！的！找到了！爱上学习！的方法！/index.html","6fb3c063d5ad34a34f00f129158c09b1"],["/户口的意义/index.html","675f6aefa0fdb64bf4fefada9b4fa2f4"],["/推荐两本经典算法书/index.html","97632901818f5ea09aed84355abf0de4"],["/推荐几个在线学习SQL的网站！/index.html","4350c0dfbfa8980b1f8da4016cfeef0d"],["/搞了一个程序员成长晋级社群！/index.html","a26d14f45601aa21ade56774ac8a0b45"],["/摘抄/index.html","d6d64d57a0587f74a0cb66f469eeb1f0"],["/暴跌30心态崩了/index.html","b2b23e870fbcb4419c7efe0c13951c20"],["/最近很火的ChatGPT到底该怎么玩？/index.html","d16e1fd9a7f86f61d5f68fb14d42a102"],["/有哪些好看的日历可以买？/index.html","464f304bf062c01ecb34b54d3160063d"],["/服务器有啥用/index.html","dd33163d704231f4aa3b9b89fd8d1d39"],["/来长沙了！/index.html","ffbf0d5f4cd1095b64dd6d45824886f8"],["/校招污点公司名单/index.html","c67f4f8baa9e3273cca9ed1db83674bf"],["/梭哈200多万/index.html","bf90590b8eb8f1b21670544b4e9cd8d8"],["/梯形图入门/index.html","077add9f2abd52e260ac68dfc826b5ec"],["/橙心优选，凉凉了！/index.html","f17b3666e355957cedc5f6e83fc9eae6"],["/比亚迪汉试驾体验/index.html","679197567df3dfa171ee40dfe1ea5ce3"],["/清华转学成电，真的牛逼！/index.html","40cf6c6228dd9a0ac971697468f75b5f"],["/滴滴程序员被亲戚鄙视：年薪八十万还不如二本教书的/index.html","e824f59eb50dcf96d1b02736fdddec2b"],["/社群！/index.html","7300b52c294f20d2a77a57f07df9d7e6"],["/科学上网之VPN篇/index.html","0aeb58f03ceb6b1a46718af62ad1d780"],["/程序员必备的几个技能！看完你也是大神/index.html","adff3902e0b2f63090c3027e85c5f6da"],["/程序员绕不去的槛，Linux！！！/index.html","7400ae954a4dbb298476a02b31ee8737"],["/蔚来ET5试驾体验/index.html","cd0afd401fffc87ab69121d4f87ba2a0"],["/蔚来，牛逼！/index.html","59c3fac819146f5b68e1cd16b3f6c7ec"],["/被录取了/index.html","4ac9f94fa7b8a01f7599dce566752c86"],["/被找事了！/index.html","b01e0825a6a524954d21624b6116a151"],["/被拉黑了。。。/index.html","e2e392b036640acb5e694bb59e9ad8bc"],["/被车撞了！/index.html","ab42316cd03b9cca727b8d794a2d435d"],["/该如何选购固态硬盘？/index.html","7ba1ef6853261248b4eadfed1d412010"],["/这本书一定要看！/index.html","2e2d446f355a795d6639e5f5b760bb7d"],["/选Java还是C++？/index.html","a47e1ba534e1b168c4df4bef8135e3eb"],["/那些让你起飞的计算机基础知识/index.html","406acc3d9da45a2472c7ab6e5b7d0337"],["/靠这几本算法书，成功拿下大厂offer！/index.html","82653d8b0e84cf13126ffe9d250be0a1"]];
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
