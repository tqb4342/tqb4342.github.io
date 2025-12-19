/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/0010-city/index.html","924611eb00fef823e1090cee20d07d97"],["/10-algorithm-book/index.html","9707b78e5e4276c336c89f912c9b6988"],["/10-website/index.html","542c2e075be3dcad8ed128b0b198c3c9"],["/100万的小目标/index.html","b0d7fa9dca4f835eb0ab0d78fbbc1a2e"],["/10w+YYDS！/index.html","3b426d1373e3a0f4a4c545fedc67c0f4"],["/12-technical-tutorial-sites/index.html","e477adc02e3af289a54ee4b089f83c52"],["/2 6 岁 了/index.html","70271a82c49498f2e11f75369e1605a7"],["/200万，啪，没了。。。。/index.html","4cddb515d264e662cbda6d8030b648f5"],["/2018ECCV-Paper-DL/index.html","d95ce9717e481b2abd9b721cada1e7fa"],["/2021年固态硬盘选购最新攻略（小白避坑指南）/index.html","9882ac1b9a489de712862b5598b35fa5"],["/2021机械键盘推荐/index.html","f558cd9b763e7e1de3c50675eb871be2"],["/2025-07-15/index.html","2a8964bb9c7036e66f3dcbb4eb516826"],["/27岁了/index.html","daac2071049601b6e9cfc6293f59f246"],["/3D-Convolutional-Neural-Networks-for-Human-Action-Recognition/index.html","ba1c2449b5888848478071112e76842c"],["/3D-Deeply-Supervised-Network-for-Automatic-Liver-Segmentation-from-CT-Volumes/index.html","2960798c6d177598f337a4305f1aadf9"],["/3D-Unet-Experiment-notes/index.html","586926aee546cf56cdc4dd3b52074bb5"],["/4-Software/index.html","e8538cd2c0cbcbe158561049840e4d9f"],["/6-website/index.html","53e838d39fa5f5273a30f4eaca5b4f4d"],["/7-terminal-tools/index.html","e025eac7336b51501e37a3ba8b42eae7"],["/AIGC中典型的深度学习网络/index.html","2c94d0100bcfd35c46d713ee889b990c"],["/Agency-model/index.html","1c37d4c7ef404dc9be545e947f1bbfc9"],["/Algorithm-brush-notes/index.html","ff2c2dbc4e119468e979e78da88029fc"],["/Ali-recruits/index.html","9ae851e7d0cf2b93c83c324bcbf9c11e"],["/Android-VPN/index.html","fbf6d624382b0799af022604d625a4e5"],["/Android-open-internet/index.html","0d1e550a07459c5ee4b6f81c602ecc9c"],["/Appearance-mode/index.html","e5cfed979e18045931ea8430a8f297f0"],["/Backtracking/index.html","37c66975e918bb021ff522b4b9be2327"],["/Baidu-Sao-operation/index.html","b73a0029786a1b18006f3891e116fdb4"],["/Batch-Normalization/index.html","5489cfeb889a0d49fd9e59289a3f51e8"],["/Best-AI-tools/index.html","f66da1f1e6f613ca97c8d7f6e433201d"],["/Bias-and-Variance/index.html","0f75915a2226d5730f5c4fae8e8bd85b"],["/Binary-tree-traversal/index.html","6c5ae910ffb2bae34364fc1b643ff2d7"],["/Branch-and-bound/index.html","f92766e952ddf0b8e6b5ac6edf508d79"],["/Buying-computer-for-the-first-time/index.html","cbcc96094b7108e1e77fc92db1641248"],["/B站向北邮道歉！/index.html","2ba0d9e9428b43c5ef084ba10aa9ad64"],["/C++-string-function/index.html","78b4b9a21283422341cd45b27406a5c2"],["/C-Java-DevelopTools/index.html","ff75d4443d8ea280677cbe10da30c7ad"],["/CS-Classic-Books/index.html","7a3c03241c061039bee50be5903aa68d"],["/CS-network/index.html","44c50ca712e8423f6f0223091002035a"],["/CSBook001/index.html","1f7403a5eb1d2d014e880fd11e8f3887"],["/CSBook002/index.html","4d734add26edf4b6393cc77f592687ee"],["/CSBook003/index.html","b70db31c9f99c29d1b188b7551914107"],["/CSBook004/index.html","222fc8f6d9f9707416947d4ad674ad9d"],["/CSBook005/index.html","df327208698b0cea12e63a4cf685ba4d"],["/CSBook006/index.html","6217108db51104979e83666643cccda1"],["/CSBook007/index.html","ae15a5a5b3dc2150d499a25ea9de156d"],["/CSBook008/index.html","90a37328961c4bb5552b06700ecd7a27"],["/CSBook009/index.html","e77cd9b322016db48d853acd36eae9bc"],["/CSBook010/index.html","da274e6efe2fa9431971600316948850"],["/CSBook011/index.html","c44fc75806f4ed7bad9cb92742005217"],["/CSBook012/index.html","6d8e5f2160e31abfcbab17dbc5b191d6"],["/Changsha-really-fragrant/index.html","d56663b8a4f0cee90cf63d9945e057ad"],["/ChatGPT-VPN/index.html","4f2d177982838e9040826edfaadac2a9"],["/ChatGPT/index.html","c6c3be06a3188f173ee7cae061344055"],["/ChatGPT！王炸级更新！！！/index.html","51691e1a428b6d625f8a4eeddb47a79b"],["/Chrome-crx/index.html","3fa30ac559ae709ef9bf389f36fad67b"],["/ClashForWindows/index.html","1590b1fb5e14bfbb66d3f3a6d914598e"],["/Computer-Classic-Books/index.html","4e616844caf9dd6342e6222f04b4d74b"],["/Computer-for-another-major/index.html","68da470f111d28457f2e963820f7e72e"],["/Conditional-confrontation-network/index.html","1d63f3bb272b3962da2605552aebee2a"],["/DNN/index.html","df1283799445a37bfeb94970822223a4"],["/DSN-segmentation-liver-experiment-summary/index.html","90be86aae8d7a19c340b8992500d1e73"],["/Data-enhancement-elastic-deformation/index.html","5cef92570d70830c70c1f3167ad05eb5"],["/Decorative-pattern/index.html","6bdc8da294c81b5213640e4190516720"],["/Deep-Learning/index.html","a7195793697b9d6ac0cc81cee89758a0"],["/Deep-learning-and-medical-image-analysis/index.html","ecc410ad33953433f3fbdbc8ffc5c782"],["/Deeply-Supervised-Nets/index.html","446edb87b08f3cd376021beded9c5549"],["/Deformation-model-based-sparse-representation/index.html","0241e606b6e17ccf863daa0463133407"],["/Discriminative-and-Generative-model/index.html","744e5fe73a316dc983f1440f6d836f5f"],["/Distributed-transaction/index.html","648376bf52f5eb6008ac50e6308f31b9"],["/Divide-and-conquer-algorithm/index.html","0534b505e57d7423cb1aeb0c6c927c56"],["/Dll/index.html","6f49ed5a84e29726aea297f27132deed"],["/Dynamic-programming-algorithm/index.html","92ae54ca01366175d619d0051b624100"],["/E-book-download-commonly-used-by-programmers/index.html","99aa0c9697c1b144bd96127e804f1cb4"],["/EditPlus软件的安装、激活和配置过程分享/index.html","49dd050bac14b84732681dacf8d726c2"],["/Eight-sorting-algorithms/index.html","97ea6e9516376091913199e8a55307c7"],["/Encryption-Algorithm/index.html","2acb68916f1e0172362795b5bbf133e9"],["/Eolink/index.html","1bff586c094cbe875159ff10e33ed0a0"],["/Factory-and-strategy-mode/index.html","2a007c46650dae7be7264e987c4cb458"],["/Foreign-technology-blog-community/index.html","b84d29db7d252729ad4beeb355bff9a1"],["/Functional-model/index.html","d2a385a1fed580967101bd5813d1c55e"],["/Fund-type/index.html","887caf742e3112251349628764bd633f"],["/GPT-4o/index.html","71826cd19ded242322a33d36c34d4c94"],["/GPU-medical-image-processing/index.html","9260536258cd2de522f64b93f071c64d"],["/Gemini/index.html","03e2b9e27f4b2eacbd526bf963405d52"],["/Generative-Model-of-Unsupervised-Learning/index.html","3c8d637814f1bf7885a69e966ade1339"],["/Git-Learning/index.html","081b72530a74f1017a75a63bf1a8db11"],["/GitHub-2FA/index.html","4cbfbe3d4fe82b906c533fef3a1a2213"],["/GitHub万赞，程序员必看操作系统总结！/index.html","0e42de88ceed0d9289ee5481c08aaf30"],["/Golang-book-recommend/index.html","694028e8d708d9974f9e3a8eb081cf40"],["/Golang-learning/index.html","73a0ecf25f355fc9711d4c44566e0907"],["/Gradient-descent-optimization/index.html","71152d0b38d288759d3bd070932a4dbe"],["/Greedy-Algorithm/index.html","54a7a7b5eb5a969940dbfdd2d52d95ab"],["/HK-bank/index.html","3d3f768e9d8bbe1fbc12b3b14cd064cb"],["/Head-to-head/index.html","f76834d596d492a873659066e65675cc"],["/HexoPage/index.html","6756c7aad105d0acfa4a70d1ac4b24c3"],["/HistCite-Pro/index.html","b29dda090197ccccf70657cf8982ffc6"],["/How-does-the-program-run/index.html","9305ac53372e8735f19864270b5ba641"],["/How-to-judge-whether-technologyisreliable/index.html","373db66d8367fc5e1c9fda0c87baa37f"],["/How-to-learn-design-patterns/index.html","256148c6f140118876005a13112ec3df"],["/How-to-learn-design-patterns？/index.html","d1e9ed91abb3564c5a5d4dd726937ec9"],["/How-to-teach-yourself-programming/index.html","3f05e10bfc0edf0788bfc745b365b199"],["/How2learn-Python？/index.html","1540f6dbd382b1e58da9fb1fefcc3d88"],["/IDEA-shortcut-key/index.html","e4ae797ab364cf5b11667d8e8c7dd284"],["/IT-interview-basic/index.html","d2c5b347a935693582659ebf91fc3d79"],["/ITK-VS-install/index.html","608d9109720f9cbdeea9e4ba8a0aa62a"],["/ITK-VTK-ItkVtkGlue/index.html","edf6192f16df82dcb2b50ae34bb37072"],["/Image-processing-plus-noise/index.html","676a1394bcc37f0e04207a85a8c532eb"],["/Inception-Going-Deeper-with-Convolution/index.html","5e2e081d25343117161347dd40e7e93d"],["/Java-GC/index.html","ef025d77fca1dcbd2cdec3dc9899fe06"],["/Java-Servlet/index.html","e9004b81a0887bf2761fd48d2b171b79"],["/Java-array-and-collection-sorting/index.html","7dce2eb32270fb5b4f27254a780c24a4"],["/Java-development-tools/index.html","7183518847eef784495693532f002fed"],["/Java-eight-data-types/index.html","bd0a9e10c3bd4bd47fcc738f8bfe5f2d"],["/Java-interview01/index.html","c1727d43b546d823d30b7f714ef85264"],["/Java-interview02/index.html","254e2775b112c3a99a7d5b401da5e9bb"],["/Java-interview03/index.html","be6b8390610e23cab02e7bddbe7b60e5"],["/Java-learing-map/index.html","6535ef435476e8b3a623eeda184eb468"],["/Java-learning-route-map/index.html","9a610ac4cc788aee53aba105a21631e7"],["/Java-memory-area/index.html","31119ae932c4ce90b2239ec7c4ecaa2b"],["/Java-memory-model/index.html","e905947d5ef5ebbf5b7f73ab9d8ad5b0"],["/Java-multithreaded-learning/index.html","00615aea0e9bd129e80f52be737988c5"],["/Java-project/index.html","8bbd58f9a0a4c066b166e754a4fd7ec4"],["/JavaWeb-Chinese-Garbled/index.html","0eaa665c390b1229cf3bb575088bcbd8"],["/Java还是C++？/index.html","76548eeef2ef83ab662bdbb1b0ec4b92"],["/Kaggle5-step-guide/index.html","06ad6eecffc062092694e58562d5684e"],["/Knowledge-points-of-Java-garbage-collection/index.html","3873d977b3616f171b1fe947f2b918f2"],["/Layoffs-and-Hiring/index.html","3f3fa53a102eb328f56fec03ee985929"],["/Linear-regression-of-machine-learning/index.html","9cb9e42acdd6d7ee2801f8ee7e725494"],["/Linux-Compile-C/index.html","2933c3429f2c8780d61baa9fcd97701a"],["/Linux-ITK/index.html","8e6e6596a93adfaefe2dc2c9f7284d2a"],["/Liver-segmentation-of-sparse-components/index.html","def584e2c519cd5773eb56bd750b84f0"],["/ML-EBook-paper/index.html","b5907f03eb7ba7021af029917b21d4a9"],["/Map-uses-multiple-maps/index.html","e8b87ef017685591d6ff3d50e3198423"],["/Matlab-Graph-cut/index.html","648b338f0044c88bd13e6c825a3428a7"],["/Maximum-Likelihood-to-EM-algorithm/index.html","dc1b455eed130e6cd447d1eb0e188894"],["/Mean filter and median filter denoising/index.html","37edfbb1d5c32f6d31642c65ab617343"],["/Medical-Data-for-Machine-Learning/index.html","d9cb50baa227812132bfa92713a1899d"],["/Medical-image-analysis-deep-learning/index.html","e982930840cd6f209030e491b4f804f2"],["/Medical-scan-image-processing/index.html","006faed5ec762f7f81e23f7cfca32a06"],["/Merge-sort-algorithm/index.html","a800fd44ea1bf349fc5558607e7299c0"],["/Monthly-income-2W/index.html","1eb1d52a3cfeb88d9a8af7f0affbcc3e"],["/Mysql-database/index.html","5a07abcd3daf137e5d65876396aedb53"],["/Neighbor-Embedding/index.html","1f210bbac5715a7cd931c66f00cc8a5c"],["/Neighborhood-approximate-random-forest/index.html","b061841f08a97a34b7b6f8232f7cb723"],["/Net-and-official-documents/index.html","601fc20569f75cb02bf993605ba2e58d"],["/Netflix-VPN/index.html","7c982d049a36270ba78785f8e4f5216a"],["/Network-principle/index.html","83b12e4748221eabecbf0e0ff9037f5d"],["/New-Hong-Kong-stocks/index.html","eff440983b51e9d45842f8f89963edd6"],["/Nice-to-meet-you/index.html","10542f138ff4a2f27fae47ba10880dcd"],["/OS-processes-threads/index.html","1cf6bab70fdfb817738eb81f6da74b78"],["/OS-run-environment/index.html","61aea2b811aa5894e2f5ef66d6627a67"],["/Open-Internet/index.html","feb3e8cc75f3fb44de6bdc82a4a37d27"],["/Open-Internet2/index.html","36f60bb34dfad89df213c31a0d3d8786"],["/Open-source-community-and-rewriting-website/index.html","79f4b1da7339aae205da908416ff7b40"],["/Panoramic-image-stitching-based-on-SIFT-features/index.html","56821201edc2a04d29dce785750c6d86"],["/Parzen-and-KNE/index.html","238e4623e3ad526e881322491059c598"],["/Personal-technology-blog-site/index.html","a57beb399c179fba7f74e7e3f9640dbf"],["/PicGo-Gitee/index.html","12fd829caf662737743f11bde1b87230"],["/Programmer-treasure-chest/index.html","5a00c6d6e82fa9dc9b93735bcdc7ac3d"],["/Prototype-mode/index.html","efb27cc410fecce775f1a4a7538caa9a"],["/Python-base/index.html","32282682265cc634b84d7c8f74d63d63"],["/Python-crawler/index.html","2272e8ebb65df4a8ef51f876b67ef53c"],["/Resume-revision-suggestions/index.html","6967e14d8e3eaa3e916f127bdf924153"],["/SEO01/index.html","2e7622cbce198a56acec5f7cfe98db6a"],["/SEO02/index.html","02f098efc3dca60c827995300736cda8"],["/SPHARMPDM-MEPP/index.html","1c4fd6ef0acad21a490e4fa7fc3273c8"],["/SVM/index.html","1bfac0d151d3ac072f2f60e1c113781f"],["/Seata/index.html","e7c4a37f357719fa9594905cad4929a3"],["/Semi-supervised-learning/index.html","1ca06c74998d163736d3ac17939cdfda"],["/Sequential-model/index.html","f6a073a1c912a4e35e64352200e6a866"],["/Shape-Based-Human-Detection-and-Segmentation-via-Hierarchical-Part-TemplateMatching/index.html","21fe35a3ada65c2d22ee936a1708b9f6"],["/Spring-basics/index.html","063d4dd70b992fb732a0f5423d52b222"],["/Spring-integrates-hibernate-Struts/index.html","4348983d83c5c1119ddeece7fbf7aef0"],["/Structure-learning/index.html","afbc15513e356b003b9b34853bc2b77d"],["/Suggestions-for-self-study-of-computers/index.html","6aa7fc8ddfd0bfa7c378a1056c7a6ce1"],["/Summaryof-HongKongStock-Account-Opening-Links/index.html","a5acec8c605ccfa8d2925f63a6d74a93"],["/TCPIP-detailed/index.html","1efa640477d0d799bdf5292bb25778bb"],["/Telegram-VPN/index.html","766f5cc853d5a6e2a0729bf46f0091bc"],["/The-essence-of-shopping-festival/index.html","fe0f77ca2de6531eabf3be7e924b06e1"],["/The-most-important-investment-in-life/index.html","982941bb03d2052e0f84b1373364bb88"],["/The-most-successful-nvestment/index.html","69056f6fb07318f48acb6a91b20516f9"],["/Transfer-Learning/index.html","04e25f93ea9db954932f878b98c0669b"],["/Transfer-to-computer-major/index.html","ae9ff29bf698385b1ecd7fc336cfc9a0"],["/UNet-Convolutional-Networks-for-Biomedical-Image-Segmentation/index.html","dc2de2244a6009fea916dcf57a5ae643"],["/Ubuntu-install-sougou/index.html","095271a9618acab6ae64869bde3a37f3"],["/Understanding-of-paying-for-knowledge/index.html","5f4b5837d4f5adac999c40e53294b529"],["/Unsupervised-Learning-Linear-Dimension-Reduction/index.html","a8bbf34a9d018af20521cf6a162f7f91"],["/VPN-HELP/index.html","04205864320be6bf59a1d997552a4a58"],["/VPN2025/index.html","30e4959217b428cc2fc8b6446397fd67"],["/VTK01/index.html","8fd61d3aa0d7e814972c1522a3876e8d"],["/VTK02/index.html","87f76e55f3d06c5a666504226c91d1b2"],["/VTK03/index.html","f45693fbaa678e201ad3f2e8b4e488a3"],["/VTKRead-write/index.html","42c5bb6b72720aecbe20e083b067db2b"],["/We-are-all-good-kids/index.html","82eac62bdf384121cb7d4e28179e70e5"],["/WeChat-80/index.html","d5c0eb7a90b26cad849543caf9ac0b44"],["/WeChat-red-envelope-cover/index.html","159a29997eb3f22f4e4a51b62c40f653"],["/What-is-crawler/index.html","a23f932887c45ef39a83a904cb089525"],["/Win-OpenInternet/index.html","cf9e1158012acc311233db357b53c554"],["/Windows11-2kfans/index.html","d946afbcf7d7772f29c66628e21fa682"],["/Word-Embedding/index.html","e13b12eefefe03c545a8bcc9fffd791c"],["/YuanShikai-and-his-Beiyang/index.html","4fbac21f021ba9af86c2e7d93b28511b"],["/Zero-copy/index.html","fe9521f58c6c7395e867d513aca3cb50"],["/about-keras-model/index.html","89338fd20a5c938e8cc82be4635865d6"],["/about/index.html","93e1f97c844144de24f444a8d8301e98"],["/algorithm/index.html","9bc5e40c0ba058cf3f1f1cb9f4be2a51"],["/alibaba-Java/index.html","7d9c52229ff5e70352bac3e966d4a52b"],["/archives/2020/01/index.html","a68950901300374c29211ec1cbc12bfa"],["/archives/2020/09/index.html","b04e202ae401c45c5a56216dda75c314"],["/archives/2020/10/index.html","0985b163d2c4131cd1cefff2be3efad4"],["/archives/2020/11/index.html","1fe472f3f7f9e49762564f0855111f81"],["/archives/2020/11/page/2/index.html","47e4fc708f98d95aa0d653ac5dbef87a"],["/archives/2020/11/page/3/index.html","7152ef4c1864bfe11c0cffc8b2fe3abb"],["/archives/2020/11/page/4/index.html","516a186abde00b89df9f9d463a95b8be"],["/archives/2020/11/page/5/index.html","839aebe04e2ffcc43e6c8a8c19bc43bf"],["/archives/2020/11/page/6/index.html","ca8db803bc8f6aec0c308a341e8dd898"],["/archives/2020/12/index.html","d4ede916d9362730982be3b5d47a6f59"],["/archives/2020/12/page/2/index.html","14d017f62cd05e49291c433ed34a25e0"],["/archives/2020/12/page/3/index.html","7e12725e4860a7ce1e74a05a32b44c18"],["/archives/2020/12/page/4/index.html","0bb68f128064d0c365e0b11986d4d7c2"],["/archives/2020/12/page/5/index.html","8fd0befe1f7851aee2f12f2e1a2ae1e7"],["/archives/2020/12/page/6/index.html","27513d8911d75d181e311812887ac8b8"],["/archives/2020/12/page/7/index.html","1aa8f8bccc2cd62c1a32cca714ec76bb"],["/archives/2020/12/page/8/index.html","40922949d296152c240e470cb5820d77"],["/archives/2020/index.html","afab38de57ba5e3661b4e214dbe02ec0"],["/archives/2020/page/10/index.html","289b2e67b1fa82d419d45bd836d43398"],["/archives/2020/page/11/index.html","01371e541cc57f1a433a44043ca7f3d7"],["/archives/2020/page/12/index.html","5d21fbce2829bcaaefb9f75ba7cea8a5"],["/archives/2020/page/13/index.html","fbf19c54a908dd5d1464850fb0a40efc"],["/archives/2020/page/14/index.html","4230085da639b6137e5b47d952140d9b"],["/archives/2020/page/2/index.html","a1eaaa7a5983cf5465554ac3521c82bc"],["/archives/2020/page/3/index.html","6e32b1ef2640986fb659a0b0728ff592"],["/archives/2020/page/4/index.html","3e1ef15f10f1906bc89d10262419e356"],["/archives/2020/page/5/index.html","912484f13b08e76e78b71d51dbe80e44"],["/archives/2020/page/6/index.html","567ae1879401a0d66a59ae42d66d25c3"],["/archives/2020/page/7/index.html","0a2d1046f8449f32595f60f9c77464c2"],["/archives/2020/page/8/index.html","8dcc71fc803abe46a66a2d6d9bd00a45"],["/archives/2020/page/9/index.html","bde146199e70be17c9acfc0a205da184"],["/archives/2021/01/index.html","a022def20b707a8b012a1a3d595f6271"],["/archives/2021/01/page/2/index.html","e1ffa221ed62a863a0213523a491d6e1"],["/archives/2021/01/page/3/index.html","a30f929106acfbc9610cffb8f0105c95"],["/archives/2021/02/index.html","4d2459e61d3ee3a26d0da496639c5097"],["/archives/2021/03/index.html","cb15e7213153c87b948e6548ca27957a"],["/archives/2021/03/page/2/index.html","808b5e0502fa45bff4f497cb81489d35"],["/archives/2021/04/index.html","49b5d79b09f188dbfabad42d7f12796d"],["/archives/2021/05/index.html","6195cf5cd71a7411ff6e8c309d714689"],["/archives/2021/06/index.html","a5f0a25c042bb081cd0525e5f01a5d26"],["/archives/2021/07/index.html","6af2bfa2b28d65cd2a9136b45eb1605c"],["/archives/2021/08/index.html","3dae0ea8b9066f27ba999c0160ea79e1"],["/archives/2021/09/index.html","0a60261fec88eec8b60757ac50cb7f28"],["/archives/2021/10/index.html","311343b234ddc67321ea6fce1de0f31e"],["/archives/2021/11/index.html","236fcf2e2ac535dfb24cbeb988972004"],["/archives/2021/12/index.html","e9fcb636e5b1aa85277cc7c55d3725da"],["/archives/2021/index.html","ca37f90ea8920f23c9016e247ff46029"],["/archives/2021/page/10/index.html","b4b1d2fcfac2e87fa4c032dff37163bb"],["/archives/2021/page/11/index.html","d290e85829d5de6544b7f670d0aa4938"],["/archives/2021/page/2/index.html","c13528e7a9071b89aee5765bb583c7a6"],["/archives/2021/page/3/index.html","be2ad7533a8d8e4773cd2e0c29395f01"],["/archives/2021/page/4/index.html","542f59ecfc3feac3285916ca214dd56a"],["/archives/2021/page/5/index.html","9696a91f37f91051d2029c5fa032bcaf"],["/archives/2021/page/6/index.html","c89aed687e1d876643d2c6cf3793e696"],["/archives/2021/page/7/index.html","c8c21d2f268ea37652349ea31dd2eda0"],["/archives/2021/page/8/index.html","1bea13e82d81f09bd73cdaa9ed8586d6"],["/archives/2021/page/9/index.html","5a12f5c3d00bf51f7bf8b3a015a027f0"],["/archives/2022/01/index.html","ef7370e4abbbb586f5acd6dbab031e35"],["/archives/2022/02/index.html","634aaaba40810216a78f54b2189af780"],["/archives/2022/04/index.html","c1770cbd4f34b7adda5876002f10bf55"],["/archives/2022/05/index.html","ab73a2bfd645f364bd06517e72cc7f03"],["/archives/2022/12/index.html","fb73f8dbbee73e36d6ed3f43f5efbeb2"],["/archives/2022/index.html","98872b365bdeca06934476cef2602d1f"],["/archives/2023/01/index.html","9cd0be39781a5dd8108387bb977c314e"],["/archives/2023/02/index.html","8e571fa49a1696eba59c7a6e013172cd"],["/archives/2023/03/index.html","4cf9cedeb73a276b15e6b8a2350c9c11"],["/archives/2023/04/index.html","a2850df486d8f5a13626f9c29822fb85"],["/archives/2023/06/index.html","b20b72fed1d0db4b5469d9a6170095e5"],["/archives/2023/08/index.html","67603036bbaaa9abd4819c0efaeb403c"],["/archives/2023/10/index.html","d948417ec425ea8a4fa4cb0672775bfa"],["/archives/2023/index.html","797e7a6cf9b5b890a67e71bc5e1faa84"],["/archives/2023/page/2/index.html","fb67f7d755b9e37a068ba7d5f4f8e99f"],["/archives/2023/page/3/index.html","83c9bbce741740809de58f6e2c74eb2b"],["/archives/2024/01/index.html","79d22be5442d9c4f378a2d0abedf68ed"],["/archives/2024/02/index.html","176c0581b7b3547a5231cbb1d6560cfc"],["/archives/2024/index.html","02ebd7a7ebe71069abcaa6db6f6453d3"],["/archives/2025/06/index.html","d8cb0be5924f919a4b359b628108837d"],["/archives/2025/07/index.html","1b01e402dfe66d88a814f9c4ae81bb8c"],["/archives/2025/08/index.html","631b3064cac7a02dc88516fdd526da82"],["/archives/2025/09/index.html","22c74aeb3147b27ad6db06d750825b18"],["/archives/2025/10/index.html","77c2ff8f5fedae2923a5b05e6a9d9302"],["/archives/2025/11/index.html","d5f8e346ad7a98ddab47578c35eaa7f0"],["/archives/2025/11/page/2/index.html","0fa9db2ac54eacc8fe15530abd2f4fc1"],["/archives/2025/12/index.html","c8e06b3f7a590c234a60ca89ab229cdb"],["/archives/2025/index.html","1a31050e36ffd1e0884430978d75f9ac"],["/archives/2025/page/2/index.html","7146fbbff8727893c4b57b78413d22cc"],["/archives/2025/page/3/index.html","5582f15d17774375209dbafdb848d85d"],["/archives/2025/page/4/index.html","c57376da1da6319b4690b8607d248ac1"],["/archives/2028/02/index.html","e781c638261e20e46bdd37739fd80083"],["/archives/2028/index.html","beafd5e4d7b3ff9cd2c1e999e61aea9f"],["/archives/index.html","fb0658de4904e6a4eac6022f9987865d"],["/archives/page/10/index.html","6d82a558fb506e5dc81bc03842eb7882"],["/archives/page/11/index.html","9f9501d509aa3d650574c39a4c708c79"],["/archives/page/12/index.html","66b51f6b095ef1bee53ff08343d2fdb8"],["/archives/page/13/index.html","3914e5b7375ccddf6e8247c2445fc2f2"],["/archives/page/14/index.html","0ec52c142b3a1f08cc069466acdff168"],["/archives/page/15/index.html","4174012ea1845cdd560cc69091ab29b6"],["/archives/page/16/index.html","cd098c1595357d7a5baaa5bf07d8df27"],["/archives/page/17/index.html","47fd496ed36feca65bb672bbac607345"],["/archives/page/18/index.html","ffadc54082dee96d85d37890bb032953"],["/archives/page/19/index.html","fa2a647daa094539a78a7746b5028e6e"],["/archives/page/2/index.html","9ae2af4c82698cb775183d27bbe9988c"],["/archives/page/20/index.html","72b5ef0b7e271078a48b0364f1f02d39"],["/archives/page/21/index.html","c7403fa13d310e0b9c4d3ed3f7c42c24"],["/archives/page/22/index.html","5eef48397c5cec415c2d8524699696c5"],["/archives/page/23/index.html","b03b7b933819c7bd8fe7593c4348c6bb"],["/archives/page/24/index.html","5b11c902fd8c907b854502fec94c951c"],["/archives/page/25/index.html","5dcef238bd35e3b1fd55c8759217137f"],["/archives/page/26/index.html","5bca91d5a7a1ecf95b885f35883bc27a"],["/archives/page/27/index.html","044022d5c56b6e2f64d724873dc03424"],["/archives/page/28/index.html","3a385ab175debc9cc8b1e2303d06ef61"],["/archives/page/29/index.html","0c7e34d69837f3bba4d6caded8c1ff9d"],["/archives/page/3/index.html","78c9de32f933b6b5b1816df05e4f0bc4"],["/archives/page/30/index.html","4d757948cf312798e0cc1b00b2083612"],["/archives/page/31/index.html","128cb67d8256a2805817f4e8686b110f"],["/archives/page/32/index.html","5420755b35201242f4f18204d2e06c8b"],["/archives/page/4/index.html","48f76a9b962084ae1a010389ba0bd939"],["/archives/page/5/index.html","edc3ac41cb4992382921b70220315e33"],["/archives/page/6/index.html","429a5cd30b410eb125132dd9d29dbc70"],["/archives/page/7/index.html","c42a8ee9d92d7de8118ccfa1bc87fa17"],["/archives/page/8/index.html","90eb48ddb4f943b1edcfd544112eca58"],["/archives/page/9/index.html","0d425fedab5e5802c46a9f9f7b34e54b"],["/baidu-search/index.html","89b63a71b87382bca6e3da270ebc5273"],["/baidu_verify_code-Hh2fKNlEB1.html","bc2db3e91da5f86f6e570e87fe919d09"],["/be-a-programmer-instead-of-a-code-farmer/index.html","9821f6a2ccf6f9250d4b7e5886d5c408"],["/bought-a-house/index.html","a6c7d3f6826f26787f9dcb509640bf12"],["/categories/C与C✙✙/index.html","e0cc673e9eee56d04b89b74b94b551fc"],["/categories/Go语言/index.html","863fbe88ab3b1ce4c3ae4b94ae8356f3"],["/categories/ITK与VTK/index.html","0c2da82b955f1c78fc1754b0a4f68798"],["/categories/Java/index.html","b82e7d6c9eccf4dcfc5526c8877b1b21"],["/categories/Java/page/2/index.html","fd2f8c22a2b2c824fe6f21de51830136"],["/categories/Java/page/3/index.html","409fd96aee5872b11acbcd6d87977105"],["/categories/Linux/index.html","2c80b12c964176f200d038ddbe266a17"],["/categories/PLC/index.html","c230519eea2c104781651bf09876a9af"],["/categories/Python/index.html","db32564935a7feaf018bf005f0383859"],["/categories/SEO教程/index.html","2223c0deebc8493245f0f064334e7a5d"],["/categories/index.html","1ecd9ae71addd3f0b00f9ea70763e9ce"],["/categories/图像处理与机器学习/index.html","aa261df0cfd6de6cf7d67d690b1ef6ab"],["/categories/图像处理与机器学习/page/2/index.html","ab3b8a7873288beb24ff376ace5227fa"],["/categories/图像处理与机器学习/page/3/index.html","f07cf03773c897cb115b3aef23d8c2e1"],["/categories/图像处理与机器学习/page/4/index.html","001a5e421f5e4717e9e37f08a746c20f"],["/categories/图像处理与机器学习/page/5/index.html","10f22c21a74fa4dddbd2adf8791ad629"],["/categories/图像处理与机器学习/page/6/index.html","f82c34ecd4c17dff872f6b02c8e8051a"],["/categories/工具/index.html","466d104bb631320f7ca69e4578b8ccc9"],["/categories/工具/page/2/index.html","adc5f5cecd60f205847fcd7afc6f7d05"],["/categories/技术以外/index.html","24188aab321dd8e3f659d3e97e5fc13f"],["/categories/技术以外/page/2/index.html","00347ea56da23b6e3fcd4db5390c48b9"],["/categories/技术以外/page/3/index.html","da838b82d2c5949c0f831419ce85fbf9"],["/categories/技术以外/page/4/index.html","ba5f60fe5ff6b620559c5746747e2121"],["/categories/技术以外/page/5/index.html","2da6f7b5bcb543c7af6a7434c2760591"],["/categories/技术以外/page/6/index.html","093979a488a40e34a4a60d6f47b8425f"],["/categories/技术以外/page/7/index.html","2485e1324ff9f878e1b1387f0d2697f0"],["/categories/技术以外/page/8/index.html","61c10577a1251621136d384c055367f9"],["/categories/技术以外/page/9/index.html","c7cf9414a4f28b53c1b4aa9a2ff602c7"],["/categories/数据结构与算法/index.html","dd155a95333ff2b5b53dbf390e4faad1"],["/categories/数据结构与算法/page/2/index.html","5354bb14238b17a742895e0018e8f3c2"],["/categories/科学上网/index.html","1def4ba7e67437e135dbecdb61a19146"],["/categories/科学上网/page/2/index.html","d350864244e73b9dd3c439dc5a1e6a57"],["/categories/科学上网/page/3/index.html","0777478521cd6722b01035bbbdfbba6b"],["/categories/编程经验/index.html","19f8c533b0c54fd3f17b662d6cf9d638"],["/categories/编程资料/index.html","b1e24a941f8e77f697faca1cce60acf7"],["/categories/编程资料/page/2/index.html","7198d2b68beab8831816e9a0d9531230"],["/categories/编程资料/page/3/index.html","a7aa0c2f71ada9b53108bbaff41f6753"],["/categories/编程资料/page/4/index.html","4adb963e73676917f0e0f919f675682b"],["/categories/计算机基础知识/index.html","49a7317bcc72e7e15f0cdbb119bdfaf9"],["/categories/计算机基础知识/page/2/index.html","ec6649b4b21e86805ea9a06eeb12fdcd"],["/categories/设计模式/index.html","d69d5d7986860f5857c72e1def5b30ad"],["/choose/index.html","965e458e97e4562b49c33843fcc4f38e"],["/choose2/index.html","cdfa38ec4b0361f3e1313c53d806255a"],["/chrome-crx-intruduce/index.html","f5963a46df32300d90048137b584c0f8"],["/clashvpn/index.html","503d8ff89bef95bb065f8a4a7bb9030b"],["/coder-blog-website/index.html","72e1df582ae46d9a589d7558b443948f"],["/coder-source/index.html","17f63813abe9cea889ef0e08be11efc0"],["/coder-videos-website/index.html","a0a095498b6a1de5bb2ffe3cdaed5792"],["/computer-book/index.html","aa629951b19717ba744215181c85aa43"],["/computer-censorship/index.html","3b6f67cda57e1078b02416cd2deb91bc"],["/computer-network01/index.html","80b693c81887c7f9528aa886b0c7a35a"],["/computer-network02/index.html","76555444308e360e125da181f74844b5"],["/css/main.css","bc32ad34ec4990d934c3c647bdb62f79"],["/database-Mysql/index.html","b61cf9a81cc7b0abdc3e17ce75819480"],["/eclipse-lombok/index.html","3b8ada4ec44b3d6519dbbc01b138a3d1"],["/fully-convolutional-networks-for-semantic-segmentation/index.html","f2ecbf1568238899c93090168df35208"],["/great-firewall/index.html","9cd588f601b632b78b89d49f1b1294b7"],["/halfrost/index.html","4005f9c4683c9ed83ca91cc0692422fd"],["/how-to-signup-chatgpt/index.html","a64130c6014e2249ec301f90356917bd"],["/how-to-use-Gemini/index.html","0c2ffa2485262a80c61ef3e01672b0fd"],["/index.html","c4f3054ffbdeff50b5a001f755e343d8"],["/ios-open-internet/index.html","247b06a8bf53c84ec24c19113828caa7"],["/iphone-open-internet/index.html","fe17b1e865bab31e1b7e2711566e0c2b"],["/itext-makes-pdf-form/index.html","4bdd909bf5145ad8c5d0e10014f063ab"],["/java-Set-Map/index.html","d408ab2a13b33e3a1454a4ba3e837ba7"],["/javaweb-server-error-codes/index.html","bdb6244e3d77abeefbbebaf7e0af6525"],["/javaweb-source-code/index.html","f365a69f73296287f381f1d2a8cd4b2f"],["/js/lib/busuanzi.min.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/js/lib/lozad.min.js","47904d34a224931dd1b615c59a3dbe3b"],["/js/lib/prism/prism-coy.min.css","0ccad54d95845901ead59bfd3ecceb14"],["/js/lib/prism/prism-dark.min.css","a4711d2957d6605eb5682bdd228cf123"],["/js/lib/prism/prism-funky.min.css","efedcdccd7a9ab342d2d9cacd24920af"],["/js/lib/prism/prism-line-numbers.min.css","38e22e790c279bb56f9ec4b90a2a2d58"],["/js/lib/prism/prism-okaidia.min.css","5ac6f9de996fbec68aaa106dfb16e061"],["/js/lib/prism/prism-solarizedlight.min.css","ecc7e64d039873ffcf7fb27babdaeb5a"],["/js/lib/prism/prism-tomorrow.min.css","456af2a14ae4f5089939d5904ac40fe8"],["/js/lib/prism/prism-twilight.min.css","ebb5c355332a8cf9a1ce37a2a69d678f"],["/js/lib/prism/prism.min.css","a5234d614834658887cec6a9515890f8"],["/js/main.js","052d2b299d9c750afea8df0b802ab7c1"],["/keras+TensorBoard/index.html","ef8564a7518ec46be2ab25399d49d0df"],["/keras-beginner-guide/index.html","d45d3a6d44635ad48b7c512a81f819de"],["/kmp-algorithms/index.html","b6a1e2b6000a496515195cd8e1998f91"],["/leetcode-Java/index.html","dca2ece9549702cc8e3c4fc1dede169d"],["/links/index.html","8f7db07a9912fca6e7df1369ad7053a1"],["/linux-java-opencv/index.html","57aa3a52f50d6c816a0248c667f93656"],["/msb-source/index.html","9dcd6e7e94507301634e4fd2926ac5d5"],["/online-BUG！/index.html","e68151f1e8b45668816e43bad40c5263"],["/open-app/index.html","ccadc13eb4505dee1d984da6e22bc530"],["/page/10/index.html","05671472b5073c11a458a57e91701d97"],["/page/11/index.html","2190cb19e8eb107d3e8b465e8423dc65"],["/page/12/index.html","4cfc780be00124998e0e47643d65ad07"],["/page/13/index.html","2484594a809f449a0399161b6fa53bf9"],["/page/14/index.html","9c0ed48eb0218b3bf333544fe5b8ada8"],["/page/15/index.html","1802a097162530d784d20523b687f362"],["/page/16/index.html","27d3d140138ecb98f8d9ae5f66671b68"],["/page/17/index.html","7f3eeef0018b6dee87bd06627a3bccc4"],["/page/18/index.html","4ea63f4d8db444ac513c05cc8714149c"],["/page/19/index.html","54bd87514ff5b5cb8003897e9413d3fa"],["/page/2/index.html","ae9b5898c15f2171f3676c198e904cdc"],["/page/20/index.html","6467f119a7ed71ef788c10ead93f1bc2"],["/page/21/index.html","35e6c5980ec9b1dfea6bf41de49ba159"],["/page/22/index.html","23ad9b85b1a841ed1979d35ce4294f57"],["/page/23/index.html","76f1afd871f29542332246f8d90bbb17"],["/page/24/index.html","5cd06011a90f966906378ede52932d11"],["/page/25/index.html","290917d3773c8fa3c6635e20405a04d2"],["/page/26/index.html","56892e9737b5d5bf021f7bc45b7d29b5"],["/page/27/index.html","56c294f3e3e50965d8232df8ff269bb9"],["/page/28/index.html","155b5ec2bfc9495be6ed52d9095c7f38"],["/page/29/index.html","f67759a35584c9f67a06cb16884ad3f1"],["/page/3/index.html","401853fab45b56332e8d0c6bd1549bfd"],["/page/30/index.html","074a8320907bd46f682c501fdc492e4b"],["/page/31/index.html","db146408d65d6677bc7d7dc6274d2714"],["/page/32/index.html","5e806c4cfc5ff0b776cb87d311556ecb"],["/page/4/index.html","0cfa59eb0fa8e723c795794b75d0ff2a"],["/page/5/index.html","3c657c082e9e04300597aaeacf5924c4"],["/page/6/index.html","3e30a7960e87507ab9882406b95d657c"],["/page/7/index.html","f510e343453538025f8b45d79f134ad9"],["/page/8/index.html","3f372dac676c3bb6d3ebe7d346ec084f"],["/page/9/index.html","2c592c671eb68900348ad091dc07ccb4"],["/pandas-data-preprocessing/index.html","f1442665029a5930b92bf48272355c9b"],["/phone-win-open-Internet/index.html","15ea5c1c0b3eaef8944a621d52cdd9e4"],["/popcorn/index.html","c083c372b1fc4986a906c7ea7af37238"],["/python-Blog/index.html","060ebfd1661dc5c1c03c0cf5b0300a45"],["/python-yeild/index.html","315f11aa933ca614e9d09a03a00d5ef0"],["/python爬虫教程/index.html","036a3fe5e01a470fc8bf4261777e8b97"],["/software-copyright/index.html","90556fc78e630d73e98f1fa148a2dcc7"],["/sw-register.js","57ada83c4c2bb142efc9ba6a9b884747"],["/tags/AI/index.html","d5a684f4c247f36195b9f97803162ff0"],["/tags/API/index.html","566e31450c2f1431d886f3515e869e9d"],["/tags/C-图书/index.html","27b60a5b49638e9b33e5fb4dd1777338"],["/tags/C/index.html","5a286f7f0629e128f7b55f4ce47cd35e"],["/tags/CNN/index.html","bcc3466975b7b164d1a5357c02c0a312"],["/tags/Chrome/index.html","2f87501476820851eb141c9c45a87057"],["/tags/C✙✙/index.html","e0b48109f541fa3fb60c283b7b8f6aff"],["/tags/C语言/index.html","658779516140c9edc77de5c24d6663ad"],["/tags/C语言图书/index.html","e41f102c8013c986ddf868df8dd3ce29"],["/tags/DSN/index.html","1f48f9ac08f5c1a2f96cc93148e51c42"],["/tags/Dll/index.html","37e0085492e0a811c6eb3682fb6cc096"],["/tags/ECCV/index.html","d8b53907b45a00037cf7bebba342d53b"],["/tags/EM算法/index.html","9be9bcfacd2ff1becdf977938a48f384"],["/tags/Eolink/index.html","078633d41b91bdaa02226a73c19ebfa1"],["/tags/Gitee/index.html","71606f32b87be01f91fdbb4edfe3ca4f"],["/tags/Go语言/index.html","19f3be92514a05e1b6eb679159b85b67"],["/tags/Graph/index.html","f4574d2bc8ad1d664b694530e38fefef"],["/tags/HTTPS/index.html","7bf7a7ad9ef8a2acc2579b72d1634e3c"],["/tags/ITK/index.html","e999dd98c45b373cdf7f301470fe573e"],["/tags/ItkVtkGlue/index.html","d034039393a4c5db02481c2844d8139e"],["/tags/JMM/index.html","8262e0a54b19a37c18328f3a70ec114d"],["/tags/JVM/index.html","48e06cae79974809dfddeb8e985a3392"],["/tags/Java/index.html","c2f41fe39b949adf0aa6aace6e5f509a"],["/tags/Java/page/2/index.html","2050e5d83cf2cd849d5564fcd3c22fed"],["/tags/Java/page/3/index.html","9b3c6c1df9c127e92719223ceb5d0aae"],["/tags/Java图书/index.html","b7030c9debd4c66616c24c23e112d1c8"],["/tags/Kaggle/index.html","eb0b384c2f925acbbdca1dbe7498a27e"],["/tags/Keras/index.html","5bb57bea346a99de55c939e5c76cad4e"],["/tags/Linux/index.html","80ef5eef73b5a1f7f7acc90a59cffc35"],["/tags/Linux图书/index.html","e0e9cb29f0c22e37b3a9487ac2082c4f"],["/tags/MEPP/index.html","8f47e2123f3cce812495cd64d13c60d0"],["/tags/Map/index.html","0e9df0883d2db286a8a8754f1dee8a3c"],["/tags/Matlab/index.html","123fdbdc8339708b933dbdff8753de50"],["/tags/MongoDB/index.html","85c2a63a54cd0aabd84e02d56a7b397e"],["/tags/MySQL/index.html","b1c5a71223b526a4a595ea74ce59cfc7"],["/tags/Parzen窗/index.html","3ee6e0d8760d33291f99887cbeed3ae8"],["/tags/PicGo/index.html","6b5d5ca5ff7bee525a1b9cab90c47740"],["/tags/Python/index.html","e5b76ffff330a36a63e8a47af00d8aaf"],["/tags/Python图书/index.html","bff599f6730fbb54740eb30d9785f5c9"],["/tags/SPHARM-PDM/index.html","26fefaacf74158c6d19b2cdcbd88d7bb"],["/tags/SVM/index.html","1e70b243b1c0ba619b683479f8403fef"],["/tags/Seata/index.html","e9eb2663c08a73f5a84e650654d17c45"],["/tags/Servlet/index.html","ad79d71b78ee7b3508bfea0f8807865b"],["/tags/Sping/index.html","4c09232d18b409e3e91549a8cfbffb7b"],["/tags/Struts/index.html","78ec0af01948886a4704d697179aedc1"],["/tags/TCP-IP/index.html","556ab861143be2846befbdfa896f4b71"],["/tags/Ubuntu/index.html","08d9f047c3f9241733139c1a248538b6"],["/tags/Unet/index.html","b71c4a4a423e94a03dd9309c058f49dc"],["/tags/VS/index.html","3fd1516ff23ac2b8972ed9ed0396c456"],["/tags/VTK/index.html","30dad76391482f54bac4fb61253b26d3"],["/tags/Windows/index.html","62d711185b0b49bf44f86d8dcacf3043"],["/tags/edit/index.html","797b1895ea793e90822f2c24032030d3"],["/tags/hibernate/index.html","8c8035fd83b9ba98dec2e84c094809f3"],["/tags/index.html","a214f89fddab2b7235fc2e180d5ee0d5"],["/tags/itext/index.html","d42ca8197d0b72ea51112aa57b2cbdef"],["/tags/jdk/index.html","093be6946714b2f43a2d32601f8a8afc"],["/tags/kmp/index.html","87dbc80acaebb25ca1e2388ab3a8c613"],["/tags/k最近邻估计/index.html","04e5b2bee0b4bd1af818793862d9d23d"],["/tags/lombok/index.html","1cbb04f6967264a0f46d6a67d63932fe"],["/tags/offer/index.html","5687db7ac14b9ddceefef249eed85c62"],["/tags/opencv/index.html","52eb22a8569125876e8959da69893768"],["/tags/pandas/index.html","ea34887cf0bb37b6a17511db76adf809"],["/tags/string/index.html","c857ffb9f79ff1fc15c9ce163b9251b7"],["/tags/vim/index.html","b8d8b206d7db08422823f5dbdf94d65a"],["/tags/vtkPolyData/index.html","eb500c53fd17228ef82a2d0179cc42a9"],["/tags/web/index.html","a804766a72559afdc29bbd0a7ad6da4f"],["/tags/xshell/index.html","bf06593f604cdbd61f3c2dfdc14cdc5b"],["/tags/yeild/index.html","a91d9482f7aed85113d36b9ff2336281"],["/tags/互联网/index.html","afad9245490c6b7785d7d19622eb4afc"],["/tags/人工智能/index.html","1b7c33dbeaa09a6e236c64b14fd1c7ae"],["/tags/体绘制/index.html","277131ec3041f94728e6fda469e6bf13"],["/tags/全卷积网络/index.html","869aca777fb66329fa548d3599abd61d"],["/tags/公众号/index.html","a866d183a3c6c8a662665132b4852a45"],["/tags/内存模型/index.html","dbf19928588221b92cc2de482b34b7c3"],["/tags/内推/index.html","f4557b833b561b6907e7badd04d76921"],["/tags/函数/index.html","76a6727ec1868d1b536611f6307ead75"],["/tags/分布式/index.html","b6030ca9ab3f8beb7e2fd9f49f6802b8"],["/tags/加密/index.html","526e869ad33e04364fa5db7f39904c57"],["/tags/医疗图像/index.html","3b7675698debd9d8f981041ca66fa59d"],["/tags/博客/index.html","3c750556d8f4128dc73b0b942f27f022"],["/tags/图像数据/index.html","d62e6f625528e85e3efed4f416dbe1b9"],["/tags/图谱分割/index.html","8947bb32f31f53df0d1a8882f9562ea5"],["/tags/垃圾回收/index.html","305ed77eb864af6313c9d06e6007995f"],["/tags/多线程/index.html","bdd5971cf0094f1805ebcf59e2de498f"],["/tags/字符串/index.html","c58480ed9b4eb260eab525c768ac1287"],["/tags/工具/index.html","2c357e94fd6d6f48ef93038b7f61db44"],["/tags/工具/page/2/index.html","4351a60e746844137d18046e3a0a71d1"],["/tags/弹性形变/index.html","7c03b2d74b4760aabff5b0ed53b189e9"],["/tags/排序/index.html","8186fbe0c9c570d649d9fa55d56aab80"],["/tags/搜狗/index.html","d1300747bb34e7d017d6216e2faa2781"],["/tags/操作系统/index.html","829cd48be5211f6b85adaa5ce3c39c73"],["/tags/数据库/index.html","41e7db0a8a61beef03c9b45488b0c935"],["/tags/数据类型/index.html","280fa3cce2aa383e6d439e976839c5de"],["/tags/数据结构/index.html","af99694739a295bf2b5977ef22ca0c04"],["/tags/最大似然/index.html","7f90ed21f64bb11e3e704af3e852d55e"],["/tags/机器学习/index.html","7b59c0271d3df8c3396dd8aa60e42521"],["/tags/机器学习/page/2/index.html","051cd47c89d2bd58587ee97def5329ac"],["/tags/机器学习/page/3/index.html","20213f41394939c577e8ad749c3d43e4"],["/tags/机器学习/page/4/index.html","84ab422c552aaa6b7646a4c7d5eb601d"],["/tags/机器学习/page/5/index.html","c589d3f23cd9ef61aba945d883c6f722"],["/tags/树/index.html","d2c8e4e4e8575d08f322cf707995176f"],["/tags/框架/index.html","fcf312427aff7af999891b7c1a44bd28"],["/tags/求职/index.html","8eeca4d63462999d597d1e0ca6145faa"],["/tags/汇编语言/index.html","70a5b876163808503f52038074e81c4e"],["/tags/深度学习/index.html","6ec41f26100de29849ee79751599f969"],["/tags/深度学习/page/2/index.html","860fa1bcfdcd63e1bc7cd58ab4fb42c7"],["/tags/深度学习/page/3/index.html","163217f58ba1a867ca3ea1b581d25b13"],["/tags/深度监督网络/index.html","c99e120cfc0e8d2018e75c641f23bb97"],["/tags/爬虫/index.html","7b06c9348060634979eb2c5ff5660330"],["/tags/电子书下载/index.html","b458d12e1a0c71a9cc5b8056f7428424"],["/tags/电子书下载/page/2/index.html","1efa83ffe999edaa8493a52d9bc849fc"],["/tags/程序员/index.html","d4e9f435514576c1c4ef7d3aeca6dbdf"],["/tags/程序员面试/index.html","749bc87480c2bcd3a09002e656f83447"],["/tags/简历/index.html","1f63f50162f8a7c4ccb9889954b35fc9"],["/tags/算法/index.html","e73670f84d934aa0a54295a53be34c1e"],["/tags/算法/page/2/index.html","1a97e6229cf1fd7a7e15d30c5a9ccccf"],["/tags/算法/page/3/index.html","4dc7c1b1fe9102ce8ffccb4757d4ffc6"],["/tags/线程/index.html","e094ee0e26407d9d6cbf058acfee4e79"],["/tags/结构学习/index.html","e63a813d4e1d5b4a18a6ef08c141eb0b"],["/tags/编程/index.html","b640df31e4ac35d6d4ee3c1f548923f1"],["/tags/网站/index.html","b28b0d8d5d24d230cd252c1f261eae5f"],["/tags/网站/page/2/index.html","6e2bdbfb703eaa3a1c7afdf2ff902a66"],["/tags/网络/index.html","b3a47e281222b17cff46e94c6e2d7af3"],["/tags/网络原理/index.html","c50403f558f525e74cd64a025b950594"],["/tags/肝脏分割/index.html","0d65f48850b9a67c2d57472db6f9b61f"],["/tags/计算机/index.html","b9148d7b4d0e57ed7bf35578dc9869df"],["/tags/计算机专业/index.html","73364ebe57143efd1024a946260c0cfb"],["/tags/计算机网络/index.html","81c2171effec73b0b898512d404522a7"],["/tags/设计模式/index.html","42d79361699b70e83ec3ab3f7b370e23"],["/tags/贝叶斯/index.html","22abfd61b9f70b6081785fa252602d77"],["/tags/迁移学习/index.html","2d68057ba80036006a7deec4f26afc44"],["/tags/面试/index.html","0781fda9c9dc5b531c96ec040ef441bd"],["/the-way-of-pragram/index.html","8cfbd91a529e86f88abdfbc19bc4f2b1"],["/untiypro XL安装/index.html","1dab6ad78be86511ba3c3e0fb337d42c"],["/video-websites/index.html","b5183ae471caf61a95b5e63e4f6e73b2"],["/wechat-fans/index.html","7e0ca7af5525e942d346ae45d2cc29a2"],["/window-run-VTK/index.html","3e11819527a8208eac601d3751afb696"],["/xshell-connect-Linux/index.html","a277c9b619466a9c1ea20399324f44ed"],["/‌Accessing-the-Open-Internet/index.html","747a396d16501575fff9982ceea70bd9"],["/《Java高并发编程详解》，去大厂必看！/index.html","4c928f0f4f5fa4ab2f4ce35e708cee87"],["/一分钟没了 1.5W 。。。/index.html","725ff72c62582bcc967a3a2f0a9dd609"],["/一条高产爆款内容生产线/index.html","75ab5bf814674f0e7e22d089694a3439"],["/为高考学子推荐的六个就业前景广阔的专业/index.html","44cefab4df02156fad4bafbe7c1047d7"],["/互联网赚钱机器---社群/index.html","b12d4ef0b920d7673ed24177c84f4671"],["/你们常用的工作方法和思考方式是什么？/index.html","6536521944d8431bb200e4d33a5e35c2"],["/关于环境配置的一些事/index.html","2c591960bfb22796fac305495997c7db"],["/准备了19w！搞事/index.html","6aeb5f0942cf6fe5dec60e8f892f7f71"],["/几个很重要的感悟/index.html","301a89739091cfd419dc40209aa09f2f"],["/分割ROI篇/index.html","18b349431e9abcc6180cb7736e7a2287"],["/分割精度说明/index.html","538ac5bb42d6ef3b71c4d8e96a636ea0"],["/分块程序执行/index.html","10bd906e432502872eb4611d8bb8e5eb"],["/加班公司黑名单！！！/index.html","affd99cc41318f53d4ad2aec6229931b"],["/卧槽，上知乎热搜了！/index.html","093a0c949eeeda64169e44e139143885"],["/卧槽，我的小破站爆了！/index.html","3c0ab588d2d56cfb7e3148bf631a5652"],["/卧槽，我被盗版了/index.html","2fe8b77559c5255ddd45b58043e6ce8b"],["/卧槽，还有985大学在大一上C语言课？？/index.html","a883c463ffbc83727e6f94891e61c376"],["/历年微软面试中出现的leetcode算法题/index.html","e0544480f6d51230308926c61d42ff0c"],["/去特斯拉试车了/index.html","8ae0968c28482d428fa2eff5521a99ae"],["/吃苦的三种境界/index.html","7d72c93bb9777da65fbe5709428a5bd1"],["/哪本书适合推荐给 Java 初学者？/index.html","3b9b49b7be98cef5ea2a3c45ea1ed446"],["/哪本入门级的学习数据库的书最值得推荐？/index.html","95b3c4f54460e1b853eaee66e6c3d6e2"],["/国内外常用的AIGC模型/index.html","a239c653db3b6b3f16584e4707b13e46"],["/国庆假期/index.html","9f417e39015742f273da817a418f5c44"],["/图谱程序字典/index.html","63ab2d0f89f08612166b93e6c7cad7b4"],["/图谱训练与分割/index.html","cd98587888ec2c08c36dadd00d3bc670"],["/宣布一件大事/index.html","4531cfeeb9173c750ddc217f66baa01f"],["/小鹏P7i试驾体验/index.html","6da90ec8df82badc1f2f1c64a2bceaa3"],["/微信PC版3.3.0内测更新，电脑可以刷朋友圈了/index.html","f12419ea1702a330549d5db9581960be"],["/怎么更快的赚钱？/index.html","c227ce3ba00526bd3c1c2861114efced"],["/我毕业了/index.html","96b9c02d69c5b9c937e1cf8b9593dfe0"],["/我！真！的！找到了！爱上学习！的方法！/index.html","b0d54763dafaea3d1ad083c48d67ce1e"],["/户口的意义/index.html","c66d5b8af050c139b84fed226f0f405b"],["/推荐两本经典算法书/index.html","998617218b77245ab0999b3b8a47ffba"],["/推荐几个在线学习SQL的网站！/index.html","4a5bf8f63491eb887530c76e5e74fe29"],["/搞了一个程序员成长晋级社群！/index.html","a8b11a3bec071e3f1f64c122ec15c949"],["/摘抄/index.html","c87791b32b7ba41988b92f55235f91d3"],["/暴跌30心态崩了/index.html","aa516022869a6c1df2e1222e1c696a42"],["/最近很火的ChatGPT到底该怎么玩？/index.html","d8b89fbfdee772b28e65d25429dd32d9"],["/有哪些好看的日历可以买？/index.html","0e2f11bd9316660d8a6e76566b0d3df4"],["/服务器有啥用/index.html","69f92f2398a4b7b2942e4eadae8c8388"],["/来长沙了！/index.html","0d41377304cac189c88ca2688cbc89f9"],["/校招污点公司名单/index.html","0366e82f75bc086555f15e9d52f37318"],["/梭哈200多万/index.html","5ac1c47406c54af72e2e4b9891eb10df"],["/梯形图入门/index.html","a87913073aaf2c0e507b736dbaab47c2"],["/橙心优选，凉凉了！/index.html","74b373b794b80496a453786d285bb5f4"],["/比亚迪汉试驾体验/index.html","dfb14e41a5f21966617f3cf52d76bf91"],["/清华转学成电，真的牛逼！/index.html","b5bdabe627af082288e37ea325f645b0"],["/滴滴程序员被亲戚鄙视：年薪八十万还不如二本教书的/index.html","e8066ceaed10cccf3bb33ea06b193f08"],["/社群！/index.html","e775d827e229ec620b048176f1a85efa"],["/科学上网之VPN篇/index.html","000cde8533c3f21aaf2c38513a4b0921"],["/程序员必备的几个技能！看完你也是大神/index.html","eaa1b7dd910a4aacf3402c62aa9e295b"],["/程序员绕不去的槛，Linux！！！/index.html","f57ec4c0f1b1fd948c6638fa2cb977d2"],["/蔚来ET5试驾体验/index.html","ba4e54b01e2339448f46bed2cbda4257"],["/蔚来，牛逼！/index.html","722cfbf19ba1d4851efebb4e179fe204"],["/被录取了/index.html","5a5592050c2e105d33032661d04ac33e"],["/被找事了！/index.html","99725deb75e75e4450edc4bbe6eae47e"],["/被拉黑了。。。/index.html","6f9f481ee2964cbc5de20464a180513e"],["/被车撞了！/index.html","ad1769d5e563de6bd32e58e4b9b14002"],["/该如何选购固态硬盘？/index.html","6246f41c85fb3fba518fb1385f6714a9"],["/这本书一定要看！/index.html","509379b76e061f1db5c55ba5a1eecc3e"],["/选Java还是C++？/index.html","7855115cb367895ba70e842181129b9f"],["/那些让你起飞的计算机基础知识/index.html","d3cea9baad2e93e76eae0df360a1bb6d"],["/靠这几本算法书，成功拿下大厂offer！/index.html","487f702d8b50dce9c5268660f13d6766"]];
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
