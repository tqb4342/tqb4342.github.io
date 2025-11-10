/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/0010-city/index.html","a00dfe91d91fe16123e94e63fc67d340"],["/10-algorithm-book/index.html","e7adca4f909b63cd376cca4203352872"],["/10-website/index.html","2079d38187fa3f6f8fa59669fc5843c0"],["/100万的小目标/index.html","d0323465f5b2bd2d6ca10d6745465b56"],["/10w+YYDS！/index.html","e39254880ade6e7179ed75a574ec2332"],["/12-technical-tutorial-sites/index.html","caa308010f7b0821c0ea5360372ff1a5"],["/2 6 岁 了/index.html","95a08ea89d66bf33fcb3f868f63bd88c"],["/200万，啪，没了。。。。/index.html","021440c8b6f5ecae33186ebbd2d55c2f"],["/2018ECCV-Paper-DL/index.html","f59d8dc5764a856a77d2b99f9df0c7eb"],["/2021年固态硬盘选购最新攻略（小白避坑指南）/index.html","90d660e275bd3cd4c29f141e3b9483d0"],["/2021机械键盘推荐/index.html","0bf5e29fda075f21c599bbffc5bbf01a"],["/2025-07-15/index.html","f31ed00190d836e09a99cf424eab9f28"],["/27岁了/index.html","9d6403d505f97ee7fb221e6605d7955d"],["/3D-Convolutional-Neural-Networks-for-Human-Action-Recognition/index.html","ac464232d8394088658d50f5c8e68422"],["/3D-Deeply-Supervised-Network-for-Automatic-Liver-Segmentation-from-CT-Volumes/index.html","3d555487fd80bd551da00505e1164e6e"],["/3D-Unet-Experiment-notes/index.html","2a41a6ab2d519debcb3551d80f0081c1"],["/4-Software/index.html","7c7b2199ef0b857203eb516ad37cb044"],["/6-website/index.html","51f69eb936be19cdf781fb4e13d7c815"],["/7-terminal-tools/index.html","6197b3f99c02f8ad3e6da502f6d47991"],["/AIGC中典型的深度学习网络/index.html","2769a74a0af5809f334f6e695a788d61"],["/Agency-model/index.html","214dad81993a4a08ee474028264d6783"],["/Algorithm-brush-notes/index.html","fdbbe0ffe2eca37587e1337b2946ff10"],["/Ali-recruits/index.html","f2df73f595f4cb22edce3e10872d30a2"],["/Android-open-internet/index.html","723825a9ee07a5a27d6430bb69b56303"],["/Appearance-mode/index.html","35661eb39b8fadf2f81c2e871a262a3c"],["/Backtracking/index.html","ec0ca198c5d5738f5e6b5b710412b6b6"],["/Baidu-Sao-operation/index.html","aaa764b6b1606ae2dbed95b8c86b2a16"],["/Batch-Normalization/index.html","6e5c6cd2ed0fac6640f77d05d2de26cb"],["/Best-AI-tools/index.html","e2a36f5ee91b329d711332af9579e4fe"],["/Bias-and-Variance/index.html","460f08ee02983501659cd2b9c9e74054"],["/Binary-tree-traversal/index.html","87fb03356d2ad6ac063d2b59f8670e57"],["/Branch-and-bound/index.html","72bd89b63480432c9dcaafc05f8ec92d"],["/Buying-computer-for-the-first-time/index.html","b46da669c3b1c4d26150922510f733a1"],["/B站向北邮道歉！/index.html","a9de138d96c91e5c61c2d9ec36c8784a"],["/C++-string-function/index.html","0209ba140fce352bef6e38f40762a23e"],["/C-Java-DevelopTools/index.html","aab2edc0a3f166cbfdc54ddeb3dbc43d"],["/CS-Classic-Books/index.html","ae3265e0a5a7cfa7bc6bda299ccff128"],["/CS-network/index.html","cb3bfb54c8052cd5d7f533823d8beaeb"],["/CSBook001/index.html","c55aa3aa43521a6f7ba074fc48146d96"],["/CSBook002/index.html","c586c43e96752c7ccb68628144a374a2"],["/CSBook003/index.html","11906d9b690c456291781862df89113a"],["/CSBook004/index.html","d194c7335c8877ed230b4f9771a73f7f"],["/CSBook005/index.html","db5bcbf44f7a1b835d29f2f5c2e2715a"],["/CSBook006/index.html","6f3d2b93718c23f8306c6fb302462fcc"],["/CSBook007/index.html","fc7dd51749e4989ae78973a71aea0a11"],["/CSBook008/index.html","f8eeb4f2e09a1c2043494962ed93e3b6"],["/CSBook009/index.html","986bcb97e1a7f0a6c6dbd59ad3f75c38"],["/CSBook010/index.html","ad602b0ec6f5ca4063c28845d944accc"],["/CSBook011/index.html","6567b999f94db2004d17b73c3cb4f637"],["/CSBook012/index.html","b183f06d51a8d1367ed36e1bf5d74522"],["/Changsha-really-fragrant/index.html","4a6a0e32136cd726a6b173fb1521051b"],["/ChatGPT-VPN/index.html","d3dcea138bd06906b063025e8ad53fd7"],["/ChatGPT/index.html","14eb19a18ca631fa7f05172e5589d203"],["/ChatGPT！王炸级更新！！！/index.html","1c5cd5fa3d40856be2337bf4771fa474"],["/Chrome-crx/index.html","4e24cf000dd1bbe136ab6e929e01474b"],["/Computer-Classic-Books/index.html","f47f5c545c91ebe0291f0a8c06e805e9"],["/Computer-for-another-major/index.html","97c89f559d4e6daf132e1e4fb6cc16d2"],["/Conditional-confrontation-network/index.html","95fd20abdf15a8187dd6f90c35ad9ccf"],["/DNN/index.html","1d82c4e29164924a6ef44f1704a020f4"],["/DSN-segmentation-liver-experiment-summary/index.html","6ca36c046e9a551be7b48564886f2fef"],["/Data-enhancement-elastic-deformation/index.html","d529ffcd8b8335658686cc3d9f6e5aba"],["/Decorative-pattern/index.html","79e4152f80383e7370fa0e9ca73aed01"],["/Deep-Learning/index.html","26161df3c2eea796eeddb4aad4661755"],["/Deep-learning-and-medical-image-analysis/index.html","52f73f4ac28e67c19224bc591171516e"],["/Deeply-Supervised-Nets/index.html","0579b2b7c156b70a5e22d08b73d2512b"],["/Deformation-model-based-sparse-representation/index.html","ead50c650dae06e645094b5cfa401a35"],["/Discriminative-and-Generative-model/index.html","9823b6da4853f1cd53ed31b5c6fd52fb"],["/Distributed-transaction/index.html","25fa7ebc17751127a5f5f4ec7a17427e"],["/Divide-and-conquer-algorithm/index.html","f1babd28d37a9a9677a032c1725ed5a3"],["/Dll/index.html","5e2606a9caf3f352e73952bffe9104c3"],["/Dynamic-programming-algorithm/index.html","9fcfcc09848072517898d4a006734c98"],["/E-book-download-commonly-used-by-programmers/index.html","e05566e3fc7dee7b704df339a1029317"],["/EditPlus软件的安装、激活和配置过程分享/index.html","7b736802d828dbb295703780e67962fd"],["/Eight-sorting-algorithms/index.html","a95fe4078723436e6e66cc09ea33181e"],["/Encryption-Algorithm/index.html","3c7f31d44bb086031937c5b2705c0189"],["/Eolink/index.html","13867442c7cfd55298167acdfaff830f"],["/Factory-and-strategy-mode/index.html","f3454399d8e0d243a3fd2ad13f147205"],["/Foreign-technology-blog-community/index.html","4d4b59d68fc1f7ce5bf71ba1939a7efc"],["/Functional-model/index.html","98731ecb62f0afb8c690e2f9984c10b6"],["/Fund-type/index.html","938b45fbef4aa95f3aa7f0de14052719"],["/GPU-medical-image-processing/index.html","198d0574fe9640934803765a2ab42bc4"],["/Generative-Model-of-Unsupervised-Learning/index.html","2fe27f3812cca55667d64237ea0082e8"],["/Git-Learning/index.html","454df4f43860806c12989ed6e8fffa65"],["/GitHub-2FA/index.html","0f5d71ccea9cb7d57c42edda4a991adc"],["/GitHub万赞，程序员必看操作系统总结！/index.html","d3b1fb0239d0679d27e144f68789a163"],["/Golang-book-recommend/index.html","1a4f0d5987e50b813fa2ca1127f5c2a5"],["/Golang-learning/index.html","a092bc6f76b1173adaf9094349457359"],["/Gradient-descent-optimization/index.html","e5919b1e5cfdf60eceb2f1a89b188dd6"],["/Greedy-Algorithm/index.html","46e9719b76e4b31bb8294bb9007ca218"],["/HK-bank/index.html","b115e08fc767689162303cd0cc6abc62"],["/Head-to-head/index.html","3865cfee7803ee97e735d4a656fad7e7"],["/HistCite-Pro/index.html","cc9c715fc56947b5a2dbf1c2f7926c31"],["/How-does-the-program-run/index.html","b9a7bcfb0d57a1ceeb83202e5fd2efdd"],["/How-to-judge-whether-technologyisreliable/index.html","fd1bf499054d7e700dc68c1223385b22"],["/How-to-learn-design-patterns/index.html","c9d6f4aa5b2f353e95a8b88ac3450cae"],["/How-to-learn-design-patterns？/index.html","764816ad38b70682513780b4ca860a5c"],["/How-to-teach-yourself-programming/index.html","29a29164139898d7173cc40a2c5e261d"],["/How2learn-Python？/index.html","9d5539640e2a9a8249460a8ee94b2b47"],["/IDEA-shortcut-key/index.html","5bcf035c638ed598aec6e82fcc82efd4"],["/IT-interview-basic/index.html","23900c00b4e0f89976d6eab15eeb82ed"],["/ITK-VS-install/index.html","f0bb9d8d54f0556bf97f3ae672c87ce0"],["/ITK-VTK-ItkVtkGlue/index.html","9c1cc830581fe7b2ea9b44a20bca3535"],["/Image-processing-plus-noise/index.html","9ca9851c3334acc774d77da158bc3f39"],["/Inception-Going-Deeper-with-Convolution/index.html","d64948c35883131195ef84b2c17f759b"],["/Java-GC/index.html","a43a62aa59334c49fd1e9ef9519b0d3a"],["/Java-Servlet/index.html","8411d87112c1f7c6f4f620d954e0f589"],["/Java-array-and-collection-sorting/index.html","ab387a312eedca1539791b5a8d6803dc"],["/Java-development-tools/index.html","f0c8da94bbf0ab7193c2cca3583a2390"],["/Java-eight-data-types/index.html","5c8d0c9f122cd4a0b8af994a41c4f76e"],["/Java-interview01/index.html","6760b2d1f62ed1ca206845ffdaaabdbc"],["/Java-interview02/index.html","b4173e92d5d5a9957db11bc51aed79c7"],["/Java-interview03/index.html","f12d735eecb0a4598576910040d9ddd1"],["/Java-learing-map/index.html","46593fb086283fb73e95d2242a36a37f"],["/Java-learning-route-map/index.html","d226f8501f8020179fd0643dccf1de46"],["/Java-memory-area/index.html","333785dc7e060ad767f29f665be28313"],["/Java-memory-model/index.html","1ac4f454b5abe8f6919f965d806e3ce5"],["/Java-multithreaded-learning/index.html","16ffd8190eb4cf8d715a370a3c2056df"],["/Java-project/index.html","62ae90559b6fb43acfa05094049c5be8"],["/JavaWeb-Chinese-Garbled/index.html","779e82eea0311e2fdbc4f9101b0f3af5"],["/Java还是C++？/index.html","7d51ff84478e070f764f004d473739a4"],["/Kaggle5-step-guide/index.html","52c5102785b7aae2a3883d8fc56437fc"],["/Knowledge-points-of-Java-garbage-collection/index.html","381a03c784551f028a695655dde5d44d"],["/Layoffs-and-Hiring/index.html","d3cec250fb856060f02de8bf203e3139"],["/Linear-regression-of-machine-learning/index.html","4476210f2bb6a9936ab6fa0584b0b729"],["/Linux-Compile-C/index.html","b53992e4799040c279e39392919cfc24"],["/Linux-ITK/index.html","b4823ab67e0eb496795e34c80703be28"],["/Liver-segmentation-of-sparse-components/index.html","5e57aa45111a0fda8d2fe34953c9442b"],["/ML-EBook-paper/index.html","c69e60135861c38a5ba5a44dd91bde69"],["/Map-uses-multiple-maps/index.html","02c968707d71ff554c01f66f051c65e1"],["/Matlab-Graph-cut/index.html","e6de12b4629b6eb65ad28471cef95f0c"],["/Maximum-Likelihood-to-EM-algorithm/index.html","bb8a3dd753888173ca413fd36c49b7fb"],["/Mean filter and median filter denoising/index.html","80b1d6bdb8af743b0602487921d9d20c"],["/Medical-Data-for-Machine-Learning/index.html","0e67be3ddc2acd35da1b16d4d9199ece"],["/Medical-image-analysis-deep-learning/index.html","643d61665d36912d6f36096f5fd8026f"],["/Medical-scan-image-processing/index.html","db85016c1480188d948f8e018e07961d"],["/Merge-sort-algorithm/index.html","bdf04500a3edb6c777710d6850eee92a"],["/Monthly-income-2W/index.html","fae0f153e2edef093c10eba60975c186"],["/Mysql-database/index.html","90198b3da499e0e52871724b92d8a14c"],["/Neighbor-Embedding/index.html","4ab85b389e7cc640d4f5597d1342c020"],["/Neighborhood-approximate-random-forest/index.html","93c6125f4046842a119710ba00f4198c"],["/Net-and-official-documents/index.html","a9bd3dda5b4ca989512bbf4dc14d49f4"],["/Netflix-VPN/index.html","19abd0572dfc1c4f4ccae56240e94ed2"],["/Network-principle/index.html","1b715a039d4f2b488e3b8cde1b36bada"],["/New-Hong-Kong-stocks/index.html","c4f484aefa6f7d02a42790f1981c10f1"],["/Nice-to-meet-you/index.html","16875142ae4bd779c5bd24487b27ef4b"],["/OS-processes-threads/index.html","6552d35bb5c292671aedae56bd4559d9"],["/OS-run-environment/index.html","ac4c64150d93e9408d9a2689704f0c67"],["/Open-Internet/index.html","ab71d174a636c8b8431e23f01875d98a"],["/Open-Internet2/index.html","6a0c0c21b6e828ad72ea1f5407ad9420"],["/Open-source-community-and-rewriting-website/index.html","ac9875f0a761bd0fdbbed2c3a6794745"],["/Panoramic-image-stitching-based-on-SIFT-features/index.html","a470baba6e77af2ba7fb7dfd294f28fc"],["/Parzen-and-KNE/index.html","3e2bc9f00dcb5cb6eced205355289541"],["/Personal-technology-blog-site/index.html","5ec2bba999fa6a0031bb1ccaa99cdfde"],["/PicGo-Gitee/index.html","4a8d74a14bbe11944e5c46d9c802cc16"],["/Programmer-treasure-chest/index.html","3164c1e35980d49f52c89162bdebb9c5"],["/Prototype-mode/index.html","fb5563ff7b4861d62a6f0ec63583effd"],["/Python-base/index.html","c515ae4fe5b607e8e94240edc79a9658"],["/Python-crawler/index.html","d2bc6a5f570d31c05e7d475fcb482016"],["/Resume-revision-suggestions/index.html","fea4f6fcd626b24947671563d2f7b2c9"],["/SEO01/index.html","8e70fb85c8da91d361f5e6c2d9ff2735"],["/SEO02/index.html","2e6f5a9a7e45942685373fbc96c70c7b"],["/SPHARMPDM-MEPP/index.html","072a0dfdef71c064199652174d461826"],["/SVM/index.html","de2030e688298ba454843c002ef6c03f"],["/Semi-supervised-learning/index.html","9c932159e35b929002bd2c3268ebbc80"],["/Sequential-model/index.html","8270b2cdfc0a17dd59ec94b207db75ab"],["/Shape-Based-Human-Detection-and-Segmentation-via-Hierarchical-Part-TemplateMatching/index.html","523c79d8dcdbebc839a3b5068b53f40d"],["/Spring-basics/index.html","04c56bb3d55aef46bc5d3b60277b2992"],["/Spring-integrates-hibernate-Struts/index.html","7c1f22cec605c42f4be32670e513cf43"],["/Structure-learning/index.html","ed8b65b9dacf3b6810042e4debeff761"],["/Suggestions-for-self-study-of-computers/index.html","3c073e692845f9900b8f85e51876926c"],["/Summaryof-HongKongStock-Account-Opening-Links/index.html","504550124c2767c2a7ef72031d5f4668"],["/TCPIP-detailed/index.html","1d4690423785c972d53f50556abe5bfb"],["/Telegram-VPN/index.html","c04a0d8248559003e6b87672f6e87eb8"],["/The-essence-of-shopping-festival/index.html","b9f1cb8f0828d0ad4a2d078c180db7c4"],["/The-most-important-investment-in-life/index.html","6727855536c1f2cee3d224bb8e6bb6f7"],["/The-most-successful-nvestment/index.html","fc71557c564c11a6af00f5a1a4b15bcc"],["/Transfer-Learning/index.html","d299b4e71a7e36e22905e5d862618ec8"],["/Transfer-to-computer-major/index.html","f8ebaec9547e702bbf5fb24b643fd201"],["/UNet-Convolutional-Networks-for-Biomedical-Image-Segmentation/index.html","550151a9f01fc503166699a023c24f3a"],["/Ubuntu-install-sougou/index.html","cc8f3369213c136159fea39ee0b94029"],["/Understanding-of-paying-for-knowledge/index.html","39c8e9eb5ec17decaa4adc20b6be95b7"],["/Unsupervised-Learning-Linear-Dimension-Reduction/index.html","df2f9783c60f4bd7c10346a376d8bbf3"],["/VPN2025/index.html","fb8e41a5d7c95b92e5fd6e9f01138f16"],["/VTK01/index.html","5d79994b5009da3c3779b4a900408d4f"],["/VTK02/index.html","1ae36b97df28e9bf925ab8b7855967a4"],["/VTK03/index.html","39e01cdf37de27fee7181f64bf40d0f3"],["/VTKRead-write/index.html","24c15b71f6a785133ee101cd1934bb55"],["/We-are-all-good-kids/index.html","4494ec536ea9c2a3fb36d0ae6ad333ed"],["/WeChat-80/index.html","c94c6c4d79d50066c76bd15f016879fc"],["/WeChat-red-envelope-cover/index.html","92b766a819e5c725cfe22c937e34d9bc"],["/What-is-crawler/index.html","f86b77063e439b282bbd50c0c13afeac"],["/Win-OpenInternet/index.html","95bce5f430d721cd01cbe53acec5e118"],["/Windows11-2kfans/index.html","c760fee964cbedc8d843df3043a0042e"],["/Word-Embedding/index.html","d00074c9a3a051569a6e6798b85b27f3"],["/YuanShikai-and-his-Beiyang/index.html","d29043ffef92627074b6afa1c1bbac05"],["/Zero-copy/index.html","3b29cb39c146c309aa3c40d77268200f"],["/about-keras-model/index.html","8af43ac322e7488680d4995b6ad9d7ee"],["/algorithm/index.html","63ad4897674cceacea47bda2e04f5f87"],["/alibaba-Java/index.html","2ba684882a23564f4881a20df410c559"],["/archives/2020/01/index.html","14828f5cde7ccdac1e14efb893c922bc"],["/archives/2020/09/index.html","dddcfc8282eaa37c96e12fda99f70ebd"],["/archives/2020/10/index.html","af9d7dc9fe80355d5d08dbb523b25dcb"],["/archives/2020/11/index.html","6389d45daf90076cebab8e2b7ed5ce51"],["/archives/2020/11/page/2/index.html","2abe83391843d469e02a7e41d8361002"],["/archives/2020/11/page/3/index.html","06493c19625f86df30e1de8842c6d9a7"],["/archives/2020/11/page/4/index.html","f2aa24a72c35238ed8768bf58dffb1ca"],["/archives/2020/11/page/5/index.html","55f192ebaf55a51bddea5ce89ce5e3a9"],["/archives/2020/11/page/6/index.html","1ca91b752858220412769aae65d5bd2b"],["/archives/2020/12/index.html","8c7ba5b5ba2f1f54dada779238d39e82"],["/archives/2020/12/page/2/index.html","bbb5014ad1e0a9f2b7a0cfb40ff472cb"],["/archives/2020/12/page/3/index.html","7af3fe19c05562921939e8fcc6eff027"],["/archives/2020/12/page/4/index.html","015e8e7d30b78d4fe6ca781ada2be739"],["/archives/2020/12/page/5/index.html","13c36940b96918c123569507c860b799"],["/archives/2020/12/page/6/index.html","b0517ddcfb7c12088f2fa91ea1647326"],["/archives/2020/12/page/7/index.html","b8c5a5578dca8faf43fe868dfb9e8b22"],["/archives/2020/12/page/8/index.html","e1194f3e2bb7cdd0430a839f3024effa"],["/archives/2020/index.html","562f2c724ebcf245ef3229433a3c3939"],["/archives/2020/page/10/index.html","0ea6aaa17055446aaa33f8ef9b6548b6"],["/archives/2020/page/11/index.html","7ed6f768466e384c8e909b9d69b38fe6"],["/archives/2020/page/12/index.html","2a0b1ba0f0eb35adc5d3a57f7bae7442"],["/archives/2020/page/13/index.html","f72bba4301665e34248fbc7f72ceeaf0"],["/archives/2020/page/14/index.html","f3f6c9efa782d57a83a6834c80aff344"],["/archives/2020/page/2/index.html","2e798961c7bc6e5d529bac28b3044368"],["/archives/2020/page/3/index.html","1b66b97c9b81a0039f66ad8359ce0220"],["/archives/2020/page/4/index.html","480f102a26594fa086013852f68dce73"],["/archives/2020/page/5/index.html","2f42623a760c91cb691cb0594fc1c4f3"],["/archives/2020/page/6/index.html","ec3c1b1c9ab7aabb40ebff28599a1c13"],["/archives/2020/page/7/index.html","2adeb73032c3cc4f1ab54aa67f05bae1"],["/archives/2020/page/8/index.html","f4a192730ac85d311c9f5218e2b9a6d6"],["/archives/2020/page/9/index.html","63d017c7324532eb7c384cb0286d9aab"],["/archives/2021/01/index.html","c708ea75d1ca857482c0836ad26e48ea"],["/archives/2021/01/page/2/index.html","e31ef00eb002022bf4e16ce0d3c0b8b0"],["/archives/2021/01/page/3/index.html","532c6a33c385a9841a7d915a83508071"],["/archives/2021/02/index.html","d6330828cdc64ffd5b530332a2ae6a06"],["/archives/2021/03/index.html","4301b0a9c0c36826b98eb64c9a3218f8"],["/archives/2021/03/page/2/index.html","9e9150b42a5e830c88c97b6c17c6cd78"],["/archives/2021/04/index.html","d011e24edb58d071e68ae686fb76d018"],["/archives/2021/05/index.html","ad3b259ca3502dadb51d502240ce79f2"],["/archives/2021/06/index.html","1556855b6e120a6724e12a15589ae29a"],["/archives/2021/07/index.html","c5f48894290bb53841b36cb2267bba6c"],["/archives/2021/08/index.html","0d963dd04bb08e8c4cbe6313b07039ce"],["/archives/2021/09/index.html","817971dff75a5e1df0bb1b88a2de2844"],["/archives/2021/10/index.html","934103c6e01c21aa6859b60ef5b04aa6"],["/archives/2021/11/index.html","d53f7fd665566b657941c11c5b11c0db"],["/archives/2021/12/index.html","34c79f26a7005e6dd755df06d36b9431"],["/archives/2021/index.html","88eac7d9188e5dd9d3cca330e9a9b68c"],["/archives/2021/page/10/index.html","ecdf9ac808fd66b85d95748696e1ee7b"],["/archives/2021/page/11/index.html","217eff196acb79d4e68f5dd610ca19a9"],["/archives/2021/page/2/index.html","a3c187bc74d8131a11d9bfddef91d8f0"],["/archives/2021/page/3/index.html","86e032aee730e455bbce5b57f6d494cb"],["/archives/2021/page/4/index.html","a71cc9442087a7443caa043e90f24a35"],["/archives/2021/page/5/index.html","0109d45760b1d911a0a8c85f9197603e"],["/archives/2021/page/6/index.html","6771f7ac908a7fe180e246b91f992f49"],["/archives/2021/page/7/index.html","363218d6fd14989db0c7e33373d503ee"],["/archives/2021/page/8/index.html","7b7cda43b6efa0ff319691ed5330b8e7"],["/archives/2021/page/9/index.html","6c9e6541118462593728672e6410a647"],["/archives/2022/01/index.html","c2c2e811576491eebb5d0314f419e91a"],["/archives/2022/02/index.html","23f113dafef0b06c9a2a953ffaf4d022"],["/archives/2022/04/index.html","60de9ed50b26e79bc93daab9d749ab6a"],["/archives/2022/05/index.html","c9ead2eb0e05f05ebe79cac5dc6f20c0"],["/archives/2022/12/index.html","e9c76a92e577cf13a0df4e4696b9d46f"],["/archives/2022/index.html","3d2a5dd027c84ae0bb612c2f18f4f5f8"],["/archives/2023/01/index.html","2eda9ea158c3615c243089b29ee86a35"],["/archives/2023/02/index.html","011be759096f7e4e890e05c8fcbef7a2"],["/archives/2023/03/index.html","27ba6f8ea6bd855a726c343030bd7685"],["/archives/2023/04/index.html","cb264e4739513db4db68753798e98085"],["/archives/2023/06/index.html","ccd87b765d0045edaed1f61ee90ba767"],["/archives/2023/08/index.html","1049123030a04624e92ff1135244b6f7"],["/archives/2023/10/index.html","153931118860211823c8d5a978796a06"],["/archives/2023/index.html","3a370e58e1ec3f98dddc3e54ca2bd873"],["/archives/2023/page/2/index.html","5a29ce42e435fd58e653e895963da6a6"],["/archives/2023/page/3/index.html","3f2a9827f898bf6f1b50ac98e00a50a7"],["/archives/2024/01/index.html","ca7f23c510f1ad5ea3d59a7ffc1e786c"],["/archives/2024/02/index.html","8e05259564d5cf0be7fb870b95a31217"],["/archives/2024/index.html","160332c2014fc9825e37d4849e1e0392"],["/archives/2025/06/index.html","5eb0006a77a8cee7985aa93397218262"],["/archives/2025/07/index.html","3013bb9dc0ec8565e93e0dbe67991616"],["/archives/2025/08/index.html","786776def9b9917846f0d9b2e2fb4eaf"],["/archives/2025/09/index.html","b0827f1ea020bbf382cdc59a4d5369fe"],["/archives/2025/10/index.html","5f3a1b87e7c47b6c136c73f7036ec174"],["/archives/2025/11/index.html","33119457f2e9387ab000d7ef9c9ea306"],["/archives/2025/index.html","0969478e42573e10eba4877b2d2b47e0"],["/archives/2025/page/2/index.html","ed47650068636bb637c6a3564bd061fa"],["/archives/2025/page/3/index.html","069e307cf909f7f11f94ee9c23dc4bcc"],["/archives/2028/02/index.html","8f2d06f6f39787f5ee451098587a92e2"],["/archives/2028/index.html","105e9d4a62aebcb35d9b97986abd2412"],["/archives/index.html","c5f29542df3b974cc42731f52f9a7a3b"],["/archives/page/10/index.html","ce9e870613c8fc403b137dcf538f8508"],["/archives/page/11/index.html","01cb0c529c11dfbc1aad2fcb888f2a5e"],["/archives/page/12/index.html","ec16fabf49735e9c6f125d9a2c0a97a7"],["/archives/page/13/index.html","88729bd38bc627640eb0bef3540a3d97"],["/archives/page/14/index.html","6ef94732de2204d6e1915953e21d4587"],["/archives/page/15/index.html","991eeda49333d01a560c77b80a1e3bb9"],["/archives/page/16/index.html","757cf97043131d8eabb9f119045396e5"],["/archives/page/17/index.html","4ce4a6d5b21cc5baaef35076b9a53c91"],["/archives/page/18/index.html","3a82f4d13390f6c1695eb7dbae2277e9"],["/archives/page/19/index.html","2a6797d40549a5a1bd6760fc5b8a75c7"],["/archives/page/2/index.html","ac6abd2d3de28f3d663477ae594c24ef"],["/archives/page/20/index.html","7dae68d85f50e580ba5c65097e492a06"],["/archives/page/21/index.html","f9136db79b12f98b467633a317371aac"],["/archives/page/22/index.html","c7f5b6df4b46aace46b3643df53ef250"],["/archives/page/23/index.html","5d0a568abcdfec32f235ea3b04bdb67c"],["/archives/page/24/index.html","e2b188cc22b240e7bc7380eae1f6114f"],["/archives/page/25/index.html","5f9c774ac7104b800824a6d1fdd8e459"],["/archives/page/26/index.html","61c3c0ba10b1a7df911630370ed0ab92"],["/archives/page/27/index.html","4cb05af18cb2e57974bab0bf8317a888"],["/archives/page/28/index.html","7cce328ca8039cb62c02f60ed2a368c0"],["/archives/page/29/index.html","114ef5cd2ee6cc7e2df9b82e86e5ef4d"],["/archives/page/3/index.html","546330cbcb2500e664e78d5d9f72e3c4"],["/archives/page/30/index.html","2c76a12ee4d5f54a42de38681919677d"],["/archives/page/31/index.html","9f2db2370d53c07204cc9f3df894e1cf"],["/archives/page/4/index.html","1bbd7e7bc1e1a0c5bbe2905db36e8b08"],["/archives/page/5/index.html","740d3e26bbd46f231e9de489664c0fa1"],["/archives/page/6/index.html","a395edc30b4459d0d21743c167d6361b"],["/archives/page/7/index.html","dc729de350a0e7ea02e2ee54a4aadae0"],["/archives/page/8/index.html","f81075419f08f89f653e8196dcaeefd1"],["/archives/page/9/index.html","4bf2f8c191ddc71467b3d7072c3b56f7"],["/baidu-search/index.html","0ae0065231fdcb25407de8cb674cc2ba"],["/baidu_verify_code-Hh2fKNlEB1.html","20625a15ce542ac6047ca536339348a1"],["/be-a-programmer-instead-of-a-code-farmer/index.html","e77b904ee539bd921b30bd2c90e49f24"],["/bought-a-house/index.html","2fcc85359142e82f1357513fe2542f01"],["/categories/C与C✙✙/index.html","4d9eb4923f477ed88ec28cf8fbb085c0"],["/categories/Go语言/index.html","45953a4320d5b44d1252e29d7e6e9669"],["/categories/ITK与VTK/index.html","1ae4db207161af8230140f67fce52f85"],["/categories/Java/index.html","1400891b178911db17e60122378c9a5a"],["/categories/Java/page/2/index.html","a465726ee3a60b4c77ca8d98a896b1a1"],["/categories/Java/page/3/index.html","a58009c80db518bf067e9a17262e3391"],["/categories/Linux/index.html","93759103e3843d0cd0881e317d37f9ca"],["/categories/PLC/index.html","97e37886b944c764b86e06f7212d35ca"],["/categories/Python/index.html","96b0a9739590c190ecc242504c7f42ae"],["/categories/SEO教程/index.html","2d885d9c58c84cb75425abff9eef1b2f"],["/categories/index.html","0c527db891aca8cd4cd836027eef75b5"],["/categories/图像处理与机器学习/index.html","7c23137aa1b07b0efb2a2088b579715b"],["/categories/图像处理与机器学习/page/2/index.html","75310a71f9e9c85d0dd67b484504c144"],["/categories/图像处理与机器学习/page/3/index.html","46ae42e174acbe16f8d5edfcb15475cd"],["/categories/图像处理与机器学习/page/4/index.html","a3d0a975f6b9e55dd3014fa32da6c3b0"],["/categories/图像处理与机器学习/page/5/index.html","e72587f0ac5ce1296a7e8b1615ae2423"],["/categories/图像处理与机器学习/page/6/index.html","a8c1c2b18fbedebae59dfdffb30f6bf4"],["/categories/工具/index.html","d5ff1d24784afcafe27ef0e405c36b93"],["/categories/工具/page/2/index.html","9d6f58ab770e92eda43c774f5313d1f9"],["/categories/技术以外/index.html","2c9f0d0f54a7ba2e38cefc86332429f7"],["/categories/技术以外/page/2/index.html","db4b2aec0799fcf5dd429bd22b6e73e2"],["/categories/技术以外/page/3/index.html","34ff148a98f3130e129777b1be844cb6"],["/categories/技术以外/page/4/index.html","7dd79a3569ca26e6f515013da3341684"],["/categories/技术以外/page/5/index.html","58f4a6979b234f3d09c75a76f461e434"],["/categories/技术以外/page/6/index.html","0d5fd58fb400b4f70c4f1d431e4b6dd6"],["/categories/技术以外/page/7/index.html","d0132162e1e24d9523bc2fd49bf01e6b"],["/categories/技术以外/page/8/index.html","6a8dc134295c2f23b7c0ea10c74cb0ff"],["/categories/技术以外/page/9/index.html","2eaae59ac2c2cf70722b0a950faab001"],["/categories/数据结构与算法/index.html","8e6941dafc892f7b987554777b9a2375"],["/categories/数据结构与算法/page/2/index.html","ff081b9f2ef728a9d7af6a4169c3bbf8"],["/categories/科学上网/index.html","24abbea576aa804872508297a87fd898"],["/categories/科学上网/page/2/index.html","41ef90a9e6221df46045d063c31a8524"],["/categories/科学上网/page/3/index.html","a7afc24c49ff8aba1d263ceacb9bb405"],["/categories/编程经验/index.html","4edcc00660fa74fa4b838b471aca9a8e"],["/categories/编程资料/index.html","106fe530b9d479a1d961f4b8e0c01c17"],["/categories/编程资料/page/2/index.html","5ed518d9e97736662adb4e6feb33eba8"],["/categories/编程资料/page/3/index.html","8cb24d173f4168716c445cf7f7c79262"],["/categories/编程资料/page/4/index.html","ce85bfea7aab583bb0242db942474de3"],["/categories/计算机基础知识/index.html","dc385ed107053717a81402424d10bae3"],["/categories/计算机基础知识/page/2/index.html","ca377387594f5711575371ba1a702c5a"],["/categories/设计模式/index.html","7cdacfc6b5dcca7b8119dd9367b2a8d7"],["/choose/index.html","0b1081c501c2a9e7c59a22dc2558dfa8"],["/choose2/index.html","dbd83a82b05f6862299bf34d70519b60"],["/chrome-crx-intruduce/index.html","133e8f269d6ad92052a86437eef1e660"],["/clashvpn/index.html","9ad2e32f3ddcf145ed19295b862b6a24"],["/coder-blog-website/index.html","504dbe6ac93e65c1dd23919337afad09"],["/coder-source/index.html","c11b5cb5b441295b2757a7aa8bbe8631"],["/coder-videos-website/index.html","1110bd6b74944efa7481a68ed4e1843c"],["/computer-book/index.html","7236c9a304ca44a341b7879782dd7e75"],["/computer-censorship/index.html","9ef9633aa56b751729fca5f6e97881b7"],["/computer-network01/index.html","0438064cf8b83cf6fe75f2b82df7bb5a"],["/computer-network02/index.html","779f120d294cf648cf3af03547959f0f"],["/css/main.css","bc32ad34ec4990d934c3c647bdb62f79"],["/database-Mysql/index.html","91a3b844cf8d4648e0405bf5e4eeab85"],["/eclipse-lombok/index.html","f4e82d891e5ec829977a4da41afd1ff2"],["/fully-convolutional-networks-for-semantic-segmentation/index.html","8a0c06f725204e103aa399878469fb9c"],["/great-firewall/index.html","4235e7ea7bb73b8ed3d6a3b40b1dacbe"],["/how-to-signup-chatgpt/index.html","ab36ee37185cc523785a26325e982adc"],["/how-to-use-Gemini/index.html","2bd548e275a91d4a2b455fc6079bd978"],["/img/logo.jpg","c5981efb8d4f0a9b518b24dbb6adca06"],["/img/vpn.png","bb9b93ba246d5428a02fc9523178da3a"],["/index.html","74bb1596e85baa43c165851c7c9a11f4"],["/ios-open-internet/index.html","7c5a9e3447656b0efabe9d86e2cda427"],["/iphone-open-internet/index.html","12d03a0e78c65ede4ce8b932001b88ad"],["/itext-makes-pdf-form/index.html","75e56b312f8864241f5ab5218ac8b2b7"],["/java-Set-Map/index.html","66e4b11eb58f8dd7bba576e756bf14ed"],["/javaweb-server-error-codes/index.html","6c1da581c770b9bd2762fbf8261be44f"],["/javaweb-source-code/index.html","e283707a70b98c82ced6366d3f3c1c9c"],["/js/lib/busuanzi.min.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/js/lib/lozad.min.js","47904d34a224931dd1b615c59a3dbe3b"],["/js/lib/prism/prism-coy.min.css","0ccad54d95845901ead59bfd3ecceb14"],["/js/lib/prism/prism-dark.min.css","a4711d2957d6605eb5682bdd228cf123"],["/js/lib/prism/prism-funky.min.css","efedcdccd7a9ab342d2d9cacd24920af"],["/js/lib/prism/prism-line-numbers.min.css","38e22e790c279bb56f9ec4b90a2a2d58"],["/js/lib/prism/prism-okaidia.min.css","5ac6f9de996fbec68aaa106dfb16e061"],["/js/lib/prism/prism-solarizedlight.min.css","ecc7e64d039873ffcf7fb27babdaeb5a"],["/js/lib/prism/prism-tomorrow.min.css","456af2a14ae4f5089939d5904ac40fe8"],["/js/lib/prism/prism-twilight.min.css","ebb5c355332a8cf9a1ce37a2a69d678f"],["/js/lib/prism/prism.min.css","a5234d614834658887cec6a9515890f8"],["/js/main.js","052d2b299d9c750afea8df0b802ab7c1"],["/keras+TensorBoard/index.html","b5e174645fdcad6a79374c7472e875e3"],["/keras-beginner-guide/index.html","07be678863262ca4f871ed6d2e988c8b"],["/kmp-algorithms/index.html","36018baf920ec720473bfc3c68925f8e"],["/leetcode-Java/index.html","342cfdd52fe50f2ca73e04ba43118b52"],["/links/index.html","e256e058855c5511540ccea91ecf9a50"],["/linux-java-opencv/index.html","4c2a4b56c9579ddd06a3228f440ef9b7"],["/msb-source/index.html","9b0aea7bd28740e8b58aac5bd54f3e35"],["/online-BUG！/index.html","256b80822b524fca5938cbc467dfeff3"],["/open-app/index.html","89121d220861abe4f7300d088cb66fd1"],["/page/10/index.html","8d722034bb04d2644d6b63a734c9d758"],["/page/11/index.html","edce2efcb0222074c0a76f4cb8438f6f"],["/page/12/index.html","b37cec6610a748220c81c6512a7c1e48"],["/page/13/index.html","1fb369b3d796ba89a9299cd3c456fa15"],["/page/14/index.html","d61f32bc47e0f027c5b0f496f6a6b074"],["/page/15/index.html","37a1592f93ec1016269dd843a9c05fa9"],["/page/16/index.html","54f470ffd540673563396bc978ea75c9"],["/page/17/index.html","cdb65631dd735daa9a8390c1d502fe2d"],["/page/18/index.html","9ed4206851ddbc5fe629581458e45c8c"],["/page/19/index.html","e1cd4bd4d08cc4e177a3edd142a9b40d"],["/page/2/index.html","b56b196da010a38dfed70edf2e3c6e37"],["/page/20/index.html","d01280dc86e7b19204dd943c02203ec8"],["/page/21/index.html","e910a5b04acff1272dd73b735b48c8e6"],["/page/22/index.html","3456987f348de3dd5e0f31cac82425ae"],["/page/23/index.html","44281b073218836cb70c84619132c6ae"],["/page/24/index.html","7dbc093e0f0880d82947734f25503231"],["/page/25/index.html","8c34e115937f0ccd7f45da8217b3fd70"],["/page/26/index.html","6d6feee8b162f2ea25fd6413d535d19d"],["/page/27/index.html","a9571eec8ce0ef894d02883cf57dbc2d"],["/page/28/index.html","71e9be452e3b7bdcc83fa0a20f2127fc"],["/page/29/index.html","8e226af1d38392f58ec38dbbc1d68ec4"],["/page/3/index.html","7b5f504ed766b1a6b8563edbd73bf782"],["/page/30/index.html","8b8878b22301546ffdc0302923b36959"],["/page/31/index.html","11b4c502de95a32625d61553dd7c8972"],["/page/4/index.html","2b481bcbcb2c3b89f70974b1b12c6077"],["/page/5/index.html","73868b891f8b3845171e9b626f46a10a"],["/page/6/index.html","31be9c4daa9fab924d0e1783af812032"],["/page/7/index.html","75b734dffbc6fa3940fc239cb2d56798"],["/page/8/index.html","7d0a3f540c6398137178d438e775046e"],["/page/9/index.html","8857811785560d01bb875efe8686da26"],["/pandas-data-preprocessing/index.html","52189a0115658ec9d5148207eb068d24"],["/python-Blog/index.html","9ab6433ab5c66cddd318c924b01caaa1"],["/python-yeild/index.html","7e2679d813e455c9fb29cdfcbf5b9d6f"],["/python爬虫教程/index.html","f93f0f4f85d1425bc7597b456122465d"],["/software-copyright/index.html","83438993e374dc4540d4438be55fb11d"],["/sw-register.js","809e29275b812d5206ef3a9b922f8081"],["/tags/AI/index.html","0442466c7701ea7a7e054f8f8d5fb669"],["/tags/API/index.html","ed4e0dc6555bd05edc3588c580ef4fb5"],["/tags/C-图书/index.html","d25b69b4f6bf4bd00d3fb81782dc9d4c"],["/tags/C/index.html","2b7dbdae0edaa32676e226903484197f"],["/tags/CNN/index.html","e7609f94c32c10836adc666407f35eac"],["/tags/Chrome/index.html","f5d1d5437a3dd9a68c3fa593ff86de92"],["/tags/C✙✙/index.html","32e8bbf15f5eba16d5624364dd0678d0"],["/tags/C语言/index.html","d4f10c85eac7acac64a9820e76e4ba53"],["/tags/C语言图书/index.html","8dec93324a29056e52168dc6636b77b8"],["/tags/DSN/index.html","2b4065962cb3afabadca3154a3c7d460"],["/tags/Dll/index.html","ba769a67d14246311964dd875fa169d5"],["/tags/ECCV/index.html","5b6125348af8ef2e5b26b7a3de3b2bca"],["/tags/EM算法/index.html","c0d2eb341a2427c5843104443241d279"],["/tags/Eolink/index.html","c5fbf627b7265b03a25199e88e64e478"],["/tags/Gitee/index.html","acb56b10677ae6435ba1c4c90e9a33bf"],["/tags/Go语言/index.html","e0c9b9ac3331f94978e88c423d01113a"],["/tags/Graph/index.html","cafcf1182a539d264284d7e9abf76449"],["/tags/HTTPS/index.html","eeeffe5d4e04745fefc8e215a5523bec"],["/tags/ITK/index.html","3207feb03195ff66b3a7af168ee83c08"],["/tags/ItkVtkGlue/index.html","4e36263a6441efa74c71c90dfabf8bd5"],["/tags/JMM/index.html","d45edaac96160e486db90ed4497e187b"],["/tags/JVM/index.html","95cc51097900314526ef24cdedb9bb0b"],["/tags/Java/index.html","a323d502b18d62894baa03f87458f525"],["/tags/Java/page/2/index.html","839270bf06916dde1e38aa16730eaab0"],["/tags/Java图书/index.html","79f2c5a5efc7c310a6b08e4fe646e490"],["/tags/Kaggle/index.html","c9e0980288233c2ef6a2a1e4ab963e8a"],["/tags/Keras/index.html","7035f2665845adfb317531201c0da761"],["/tags/Linux/index.html","3099923f68d454129a94a986772d1256"],["/tags/Linux图书/index.html","0cf7e1a1bfea214674e806469fc9176a"],["/tags/MEPP/index.html","506b86ae3011e223b21a4f0620219c97"],["/tags/Map/index.html","0b1fd55a2edcc1865a02f75e4f3e6bd9"],["/tags/Matlab/index.html","d89e6755cafceef3c48d9ec7cddd83a8"],["/tags/MongoDB/index.html","e889bcb991a4303fb6b28e85ad2937f5"],["/tags/MySQL/index.html","532f5a73c3ade2da5793547a8729b8ce"],["/tags/Parzen窗/index.html","501f1e691b6ef732943aaa2e79c99b36"],["/tags/PicGo/index.html","9fb8716660490cd3e7812a294a9cf5c4"],["/tags/Python/index.html","a54d7db616ffc3c89651c7da59f5fd32"],["/tags/Python图书/index.html","f90b3cdf9f6b6a89fe68dc3a33dcd65d"],["/tags/SPHARM-PDM/index.html","5534d5f160fe68400b4591c8d3d1799b"],["/tags/SVM/index.html","ab7b1ae21775d79cf4b2da78934b9ae3"],["/tags/Servlet/index.html","6e817736e8605c3db465406e927ef608"],["/tags/Sping/index.html","679be0f640b85ab09924f82f58bbf30b"],["/tags/Struts/index.html","699375583b33cea8a3cc2ab4b810a772"],["/tags/TCP-IP/index.html","dcd242bc990de67e48948a5675874d32"],["/tags/Ubuntu/index.html","3b972f0d6d918ab35b95d2f6c3d5cd2f"],["/tags/Unet/index.html","b4683da2a69b0783dc6433f956fb410e"],["/tags/VS/index.html","de624ce7fe282cbfb7c858e0b8d4887f"],["/tags/VTK/index.html","8da17498078c941a97ca46633e758067"],["/tags/Windows/index.html","9db6654838cece03f437e952b659ef94"],["/tags/edit/index.html","1a577110b9df24b95d88681e73875d8b"],["/tags/hibernate/index.html","1505c79e3f72ac950b62f31a6236d5eb"],["/tags/index.html","77a85050208a3980e4782185d61e5fde"],["/tags/itext/index.html","c027190b2aea8f6d738de465d6ae5459"],["/tags/jdk/index.html","d399624ed57d381133a36e60c6a2da47"],["/tags/kmp/index.html","3b724f48267c7fb6f4b93e37156da167"],["/tags/k最近邻估计/index.html","f860460a966d636fcaa42c5facd1a1d5"],["/tags/lombok/index.html","e73a7d777823d021d70e554d9437d837"],["/tags/offer/index.html","3e1d8f70199214401ccca2e75421d94e"],["/tags/opencv/index.html","7f0ed750d382e10dffe4a888de57fde3"],["/tags/pandas/index.html","9bba12d3c696411c6ce8da64e1c75a89"],["/tags/string/index.html","1145dd76f5c97d2a087aace9753ff681"],["/tags/vim/index.html","edcf916018cde68e623d187b9228644b"],["/tags/vtkPolyData/index.html","e41de55f95e486bc0eae76d0a32eebcb"],["/tags/web/index.html","ec389bdb142fee94363eaf7fb32346c5"],["/tags/xshell/index.html","a1e6bc2b5dbd79d5aa21447871c379a4"],["/tags/yeild/index.html","ca983371ddd29287ae62325c7b88db16"],["/tags/互联网/index.html","7c4d0f933eab82e3ac63b2ac95447b86"],["/tags/人工智能/index.html","5d4d9d78a10373ae9799fef97ebeeb5f"],["/tags/体绘制/index.html","bec9f335aa05f9be26ccae2c435cf1b1"],["/tags/全卷积网络/index.html","ad25db8a6f5dd647362d8a6002df85c2"],["/tags/公众号/index.html","b816ff87324f5745a5eb3c39cc29dd13"],["/tags/内存模型/index.html","8fe08bd36e89132dc7c32b141ada5d69"],["/tags/内推/index.html","b68b45bed14e6456c42affe0d86041fc"],["/tags/函数/index.html","aaeb6f4548f560713a529e6c9a0af9c2"],["/tags/分布式/index.html","303fb2c30b5fefc6d8d7591a65c554df"],["/tags/加密/index.html","10d8ec8410bd30911b681db3b95c6b77"],["/tags/医疗图像/index.html","26753c2be51de0ab9912a4ffda64879b"],["/tags/博客/index.html","722b5854dbd97fc2ca696deb5b35b318"],["/tags/图像数据/index.html","1e6ba6e2084da7b2b37a34b413a2a88a"],["/tags/图谱分割/index.html","33740af58551d4c36e1eedb5680d67c0"],["/tags/垃圾回收/index.html","acd078d882c55695d042bc85218aef09"],["/tags/多线程/index.html","db111e27d5df10f8b785e79d4e2a2480"],["/tags/字符串/index.html","74edf7f421b6be4bef617c52ba9a0e68"],["/tags/工具/index.html","2f5820c50de4509c1f92cee247c24d26"],["/tags/工具/page/2/index.html","ee6fbe53ce76fa7bfe2ff8e39ec22764"],["/tags/弹性形变/index.html","1c8bcea23f23261fa13c1c203c2e8f89"],["/tags/排序/index.html","da038ee446a1b89794605e58b0b6533f"],["/tags/搜狗/index.html","f69cb8329e27c3f7d2e84c650247e32b"],["/tags/操作系统/index.html","428aa763876a4980f30bb69049d16836"],["/tags/数据库/index.html","44221bf418f8787e5333218dff1c3c67"],["/tags/数据类型/index.html","3a7e5482414dbc18ae000c6c821fdd53"],["/tags/数据结构/index.html","d1736cd8a5f32874bc5310eb3f3f3785"],["/tags/最大似然/index.html","05f7ad40cc4a28514149d60f3824e538"],["/tags/机器学习/index.html","19645ffb73ad0953696be1281ba2af35"],["/tags/机器学习/page/2/index.html","5028503cb02c5557cf63695b66332995"],["/tags/机器学习/page/3/index.html","efc2f6783fed7da8b7aad163e7dd52a5"],["/tags/机器学习/page/4/index.html","cac3c29f0c757e88dc5a87275e20bc60"],["/tags/机器学习/page/5/index.html","215d802842c6792e128244dda09c514c"],["/tags/树/index.html","bc9914bb33dac4c2588c09f4ab3e2fc5"],["/tags/框架/index.html","512e4468c3da875ee2feb4f876d40988"],["/tags/求职/index.html","15d2dc20c3b9a038724d146afc3fb01d"],["/tags/汇编语言/index.html","351666ac4ef0425c8c25d8d3fabca906"],["/tags/深度学习/index.html","d82a76731154ec72cbb98a4891b708bf"],["/tags/深度学习/page/2/index.html","fb478e41b9d2a34248a13f6dfd9226bc"],["/tags/深度学习/page/3/index.html","692d43bc32770d29ad531c2dfab31362"],["/tags/深度监督网络/index.html","4d8bd31b6e37b7817f4326c751dd3b26"],["/tags/爬虫/index.html","c64f4e702f95e20c831dfbf40f045c73"],["/tags/电子书下载/index.html","8ab25cefdcc46634d9353b76643cfd8a"],["/tags/电子书下载/page/2/index.html","a3891d9c5817c43d73e7486130e12b9a"],["/tags/程序员/index.html","86484b8bb118b9f1570db80fffa5bc60"],["/tags/程序员面试/index.html","97b2169109de755ac52e140502b0f37d"],["/tags/简历/index.html","e82f8e49db88c548e5f73d3b0f40c896"],["/tags/算法/index.html","b8ab05e57595554c8b0219d50dd98153"],["/tags/算法/page/2/index.html","f0e8042c6409721cd4e5d70a32e7f67b"],["/tags/算法/page/3/index.html","469c80b0be152dd28fd2b98eb1bde425"],["/tags/线程/index.html","a38383ff0ea5bb71602696d094403c1f"],["/tags/结构学习/index.html","dd7734ed4140ffd7c90d421f4497f5f7"],["/tags/编程/index.html","2f0ddc2ed4eded8512ee3a21a59fce03"],["/tags/网站/index.html","b6f31cb91e870bfd1bbccd6c1ba12619"],["/tags/网站/page/2/index.html","29b63dead209180c400bfe7766209faf"],["/tags/网络/index.html","89771825d36e594ac6b3c6d2bb01695d"],["/tags/网络原理/index.html","d6fbf83044497b81c85294a9540f98e0"],["/tags/肝脏分割/index.html","60a50a1569ba8bc3d10b2e9636669f12"],["/tags/计算机/index.html","951c92b4d10a6691ef7f12d6b52133f1"],["/tags/计算机专业/index.html","9f2c7de2e1dabf025921d101b4c2d798"],["/tags/计算机网络/index.html","d2d7670627ebf79a73aa12d623ed6dfb"],["/tags/设计模式/index.html","656a3f9fd589a3586d70d8fb6fe8dadc"],["/tags/贝叶斯/index.html","88a1e1452e09e763d28836aa17e5b446"],["/tags/迁移学习/index.html","2fc1c7b0508b5e4f769cab1e9e039d8d"],["/tags/面试/index.html","449ae6e2e50816d837d909b8f7157691"],["/the-way-of-pragram/index.html","11f6e0d2dc7ce554e9d0351dfe8b03b0"],["/untiypro XL安装/index.html","b464f9882ca2f4ebf96b8cf2a8ccb97c"],["/video-websites/index.html","c5a146bc3e3c066350468022b0b95122"],["/wechat-fans/index.html","e21c149f5414a8a1cb0253a87502ad18"],["/window-run-VTK/index.html","cc03d3871a7073189c6af2eb320535ed"],["/xshell-connect-Linux/index.html","93a47afe3c798b988efd77de5ced47ba"],["/‌Accessing-the-Open-Internet/index.html","8d0ac8434ad088fa234e19643ac12810"],["/《Java高并发编程详解》，去大厂必看！/index.html","2c5582078cba32d0f16d5aaf8b8f1d12"],["/一分钟没了 1.5W 。。。/index.html","17047492582d4c04ee1cd9417c3eee00"],["/一条高产爆款内容生产线/index.html","afb4f6b2b798279e17d41a27dda83395"],["/为高考学子推荐的六个就业前景广阔的专业/index.html","afe5b2488b5f6593daf28994b3542bd6"],["/互联网赚钱机器---社群/index.html","b6dd48a61b4db4a77fa63e270ee88351"],["/你们常用的工作方法和思考方式是什么？/index.html","4980d9bdee78f4a3851fec94b6d29172"],["/关于环境配置的一些事/index.html","94303d0aee7044abbb554e25cdc419b3"],["/准备了19w！搞事/index.html","ac9620ddd1af50c5a83972334821ff0a"],["/几个很重要的感悟/index.html","9aa867a33680c3bb4c7d7709ef63490b"],["/分割ROI篇/index.html","6084ac13eed222a1b04a6193c234d357"],["/分割精度说明/index.html","87ac970d675c640b1a3078da20a2e5db"],["/分块程序执行/index.html","91f48cd5d9e08213bb8738566ce1eef8"],["/加班公司黑名单！！！/index.html","333c43c5caeb5d3daed7d6ab8bc5b74e"],["/卧槽，上知乎热搜了！/index.html","ffe475ee24038b45519d7a1802e1265e"],["/卧槽，我的小破站爆了！/index.html","5802bb07b1b2a7aabce0aac76fd3af33"],["/卧槽，我被盗版了/index.html","3c2b63b9ede5152052f2b9cf134e119e"],["/卧槽，还有985大学在大一上C语言课？？/index.html","112271a7ba5dff3245e16609a155708a"],["/历年微软面试中出现的leetcode算法题/index.html","9629582cb59b815d32f1e83b57ac7681"],["/去特斯拉试车了/index.html","645540397697a8ba4b1e46bb20bb4df7"],["/吃苦的三种境界/index.html","5e2b15238efd88ea16fa4226d5ff899c"],["/哪本书适合推荐给 Java 初学者？/index.html","cb6d9268b81df02cdb0f0f0cba47da6e"],["/哪本入门级的学习数据库的书最值得推荐？/index.html","1ae3eedc8cb27d4e6e3223ded4db0533"],["/国内外常用的AIGC模型/index.html","1bab0cd784211dc4974aa8f1e0d8d17c"],["/国庆假期/index.html","c1416036f3e43bedec1bcc309cdf5d02"],["/图谱程序字典/index.html","e72a9f0ddd0457dbfd75a359adff19c2"],["/图谱训练与分割/index.html","b18abe2d3e729d9d4e4e799eeb1ce328"],["/宣布一件大事/index.html","0096c1a3197e803a390485534f99d1d5"],["/小鹏P7i试驾体验/index.html","47fe688c728d7da61cc15eeaeba55824"],["/微信PC版3.3.0内测更新，电脑可以刷朋友圈了/index.html","9efe9e4de4e13ed44ba3f2c4e3f687f6"],["/怎么更快的赚钱？/index.html","13aa2fa6d6fa358b54e0c87c31fcab89"],["/我毕业了/index.html","359f1270256cd77d426117ad85d6b9ea"],["/我！真！的！找到了！爱上学习！的方法！/index.html","7b42037cc4f24a4c4e91d91834ec4c56"],["/户口的意义/index.html","6f2700bd50c8d15cdb2c24266d8a1a00"],["/推荐两本经典算法书/index.html","4b822d846c99a31209a5ffbe40c482f0"],["/推荐几个在线学习SQL的网站！/index.html","81e0fa73c24cd47cfbd68816ac92a875"],["/搞了一个程序员成长晋级社群！/index.html","4a846544a60701ed6638edf51ed79293"],["/摘抄/index.html","090ae520d068bd15d831213a68ead4c6"],["/暴跌30心态崩了/index.html","ee6581df6bd4ec70df2d57047202b583"],["/最近很火的ChatGPT到底该怎么玩？/index.html","678e6b6874964827b04917ca31255391"],["/有哪些好看的日历可以买？/index.html","b73ff0fd20180a3a07fe0bbb766fbfcf"],["/服务器有啥用/index.html","22edb0a7958321661f64d0ee4531263e"],["/来长沙了！/index.html","3d1002c1e4628809720b932cb4509ca4"],["/校招污点公司名单/index.html","92d9b41cbff270f565fd8911bbafbbd0"],["/梭哈200多万/index.html","cbc249ae4d737e7e06e65091f2aaa774"],["/梯形图入门/index.html","deb3dd8faca3ab5c23db9c98a6ee7dae"],["/橙心优选，凉凉了！/index.html","e1292fc13b2789900e5a2b111cc9f2d8"],["/比亚迪汉试驾体验/index.html","e0ba08e0fd658373fd5b5c201f6d14dd"],["/清华转学成电，真的牛逼！/index.html","e181071c37de9f6e50f4e08ffb5ce187"],["/滴滴程序员被亲戚鄙视：年薪八十万还不如二本教书的/index.html","5727d958bae543bb7123f9070b4b207e"],["/社群！/index.html","5c9179acb4d6afb94f03ea19b2a915b9"],["/科学上网之VPN篇/index.html","d8265a5ac1b0cb163926821af044ef74"],["/程序员必备的几个技能！看完你也是大神/index.html","bce184c5f1f98cf735af2b97d07490f1"],["/程序员绕不去的槛，Linux！！！/index.html","77a148a1a748197cc710e292f89fb51b"],["/蔚来ET5试驾体验/index.html","610396aeeb4b8c200a5caad164f4a1f4"],["/蔚来，牛逼！/index.html","3495e34448925f1ef52b8d3c0b5c87ee"],["/被录取了/index.html","bbbf1d826896341280b7c8653b410706"],["/被找事了！/index.html","f7fc59b4c586da169fcb55c1fb427b42"],["/被拉黑了。。。/index.html","cbd8d27213ce6b2922a139ed238c3503"],["/被车撞了！/index.html","54602e3f536ca10df2437e057b04139f"],["/该如何选购固态硬盘？/index.html","acd80773ec92381e9189cdbeab1f5659"],["/这本书一定要看！/index.html","baa3c50993cace0eafcaecb268f79740"],["/选Java还是C++？/index.html","e2f075525c441f858982d268a1a19798"],["/那些让你起飞的计算机基础知识/index.html","35c67dd4a5d32d97bf79599c5b885c31"],["/靠这几本算法书，成功拿下大厂offer！/index.html","5c267c1ebd3c49a1c4a4a1c8caab1da3"]];
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
