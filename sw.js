/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/0010-city/index.html","833e575c7dea45ac45cfe9d484b3e152"],["/10-algorithm-book/index.html","c2d9e2ec0f40f8d67b3d80efeedcc16f"],["/10-website/index.html","80cb7e5d6c038f93bcf7f6bea5d3a6f8"],["/100万的小目标/index.html","58b81ccc3e4fa2bf8f7441a04c83c310"],["/10w+YYDS！/index.html","15846d9a6f08a1f231414b101a6cb001"],["/12-technical-tutorial-sites/index.html","f03323c1ff43f1a0486b0742c6af0026"],["/2 6 岁 了/index.html","c76e6341cf0fa94b6231e468a162b590"],["/200万，啪，没了。。。。/index.html","ec8f84db923a85f0b57ce2136d44a439"],["/2018ECCV-Paper-DL/index.html","6e00195b5925160fe03417820a4385cd"],["/2021年固态硬盘选购最新攻略（小白避坑指南）/index.html","31d08ff2134548da72c2102e8bb9c8c8"],["/2021机械键盘推荐/index.html","c22272734fc080c44719560e193e45ff"],["/2025-07-15/index.html","797d30b5d6ab772e0c535762b063c960"],["/27岁了/index.html","8512c1f3f7d23c232726752fd8044e65"],["/3D-Convolutional-Neural-Networks-for-Human-Action-Recognition/index.html","22b476e35f47f836e804ce55c3d2623a"],["/3D-Deeply-Supervised-Network-for-Automatic-Liver-Segmentation-from-CT-Volumes/index.html","e4b8eb01aa31169937b3871eb6b86ebf"],["/3D-Unet-Experiment-notes/index.html","b9716e1175d133aac792179fc77a6eba"],["/4-Software/index.html","e7a7c984023ca5f98da0dbc716b163d6"],["/6-website/index.html","e332f6d4e8323acc4d73138d08df2bd8"],["/7-terminal-tools/index.html","f616348a4836c7b3630330a06a5c354c"],["/AIGC中典型的深度学习网络/index.html","447034230a6d4514817a12f60608d019"],["/Agency-model/index.html","ffcd40695cfcee228e528f1a439ca6d0"],["/Algorithm-brush-notes/index.html","c3e29ed981181506e4fbadf504c6b228"],["/Ali-recruits/index.html","a1e71a26c57fd6cde50fdb7a6c862aa4"],["/Android-open-internet/index.html","713994a7438ee533a9bf95a093d0eb2b"],["/Appearance-mode/index.html","1305a28e2f879f4886c1218b58774fb5"],["/Backtracking/index.html","0cc83f5d0603045452e3fe7e89c74792"],["/Baidu-Sao-operation/index.html","4d5461d3ab3e1c4be841f0c31b5dd6c7"],["/Batch-Normalization/index.html","6fbbab1428c22d28ce25b034734bbc40"],["/Best-AI-tools/index.html","76fc2d6c17e1908ce02fb8bd897c98cf"],["/Bias-and-Variance/index.html","407770faee2bc8a114d04957e78daf04"],["/Binary-tree-traversal/index.html","596fd69addeab008aa8d8dabbc1e3d6f"],["/Branch-and-bound/index.html","eaa12b31ecf97e030add9309e6193c96"],["/Buying-computer-for-the-first-time/index.html","f3c13f1e82d7b2980259da0fbcb25e7a"],["/B站向北邮道歉！/index.html","0d0988c9c59316f995d34077f14d41da"],["/C++-string-function/index.html","5d717138f418615da4e05c882f7b9f62"],["/C-Java-DevelopTools/index.html","eb890ca06d19cb568d9826df28fc840c"],["/CS-Classic-Books/index.html","83bb2687f553932e7533d5328c0e51c4"],["/CS-network/index.html","17c6b9ae0610d7bc3c47972a667e34fc"],["/CSBook001/index.html","d14a0756019ee22e8d90945ca7d419df"],["/CSBook002/index.html","1e099d5afbc1eed3dd3cf7313181682d"],["/CSBook003/index.html","3c2361c4d504c545c291a38c2b46d02b"],["/CSBook004/index.html","a9728d5050b342e0b1f519f86d0c70de"],["/CSBook005/index.html","f4748b4220338223159365c571fbf457"],["/CSBook006/index.html","aacc694d5e000bad0f39dd45a34ea34e"],["/CSBook007/index.html","2c054b6ed85d7f585ff38dba6e73266e"],["/CSBook008/index.html","b25007dbcf54f0224c1a3c378f4b40f2"],["/CSBook009/index.html","2ffaca1e2469d57c40101182869cd39f"],["/CSBook010/index.html","62d9c9d7341ef01068067ed81c2d1495"],["/CSBook011/index.html","74f2f0cba4c6a0d2cf6d06ca7c93ee96"],["/CSBook012/index.html","ce3996144b232579d0c86d5aed46dacf"],["/Changsha-really-fragrant/index.html","0b5603b358e7e241c03f83bf0af7212f"],["/ChatGPT-VPN/index.html","5ec9225cc1148497d79357832a51df05"],["/ChatGPT/index.html","6bde77318eaea39129978a942c9c6598"],["/ChatGPT！王炸级更新！！！/index.html","72c02677e0efaf9e4491b1d81b55ecca"],["/Chrome-crx/index.html","cf0fc6f8474e7745391b0112067a4ee3"],["/ClashForWindows/index.html","b45eff5fabe3c7a657958bb07d096e05"],["/Computer-Classic-Books/index.html","a3540ae9da8f504949ce984779f26f4f"],["/Computer-for-another-major/index.html","52bbba901dd112215f533303429d77aa"],["/Conditional-confrontation-network/index.html","d7ca5548d12aa5052e47a426046410d4"],["/DNN/index.html","d762d57be0e24e6f4d9fa07fdaa9859b"],["/DSN-segmentation-liver-experiment-summary/index.html","914326e22e693a5b76d42891f29ed39c"],["/Data-enhancement-elastic-deformation/index.html","cf463509b6207924381256bece955836"],["/Decorative-pattern/index.html","e5b0ee51e6b2a57beb91befd7627a036"],["/Deep-Learning/index.html","3d0d489ac07727ecdb14678740e3d773"],["/Deep-learning-and-medical-image-analysis/index.html","5d9f48df6bc411642b0242adcfeb18a7"],["/Deeply-Supervised-Nets/index.html","a2366f60caf937c38d18764a6723455c"],["/Deformation-model-based-sparse-representation/index.html","0c6a76c9947171543a62d75c72f59eeb"],["/Discriminative-and-Generative-model/index.html","ef9b97633646fb6ef3aaa9a4fc7bb8ba"],["/Distributed-transaction/index.html","065c83776a12e03aa0bb7819794d329f"],["/Divide-and-conquer-algorithm/index.html","3eeeed395f95ad4a52397c653b36eb07"],["/Dll/index.html","269a99e3df6552c491b9fa7137a1056d"],["/Dynamic-programming-algorithm/index.html","dde12da2fc35b2c25721b2274e28d951"],["/E-book-download-commonly-used-by-programmers/index.html","fc4077e5f8af85ef05fc52d59bd4a4eb"],["/EditPlus软件的安装、激活和配置过程分享/index.html","8ad0791f8ae3163220923bf6bf83a630"],["/Eight-sorting-algorithms/index.html","5ddba04254795d372da36895c1a6923d"],["/Encryption-Algorithm/index.html","d13f020b28213147645365dc5dfd382d"],["/Eolink/index.html","1861ba39ec2c054ed751a79b7c2b4e96"],["/Factory-and-strategy-mode/index.html","613519d9e68c568ca233fcce93462cec"],["/Foreign-technology-blog-community/index.html","79e121ef424a4e37e7f884c2e5afcadc"],["/Functional-model/index.html","6928ee014048ba47f75013ecad7177bd"],["/Fund-type/index.html","2200e91de934b841587ca40016ba02ce"],["/GPT-4o/index.html","5ad5a0e4e556bc8317eeebdd56ac16f8"],["/GPU-medical-image-processing/index.html","ee77924b469dbe4d799640e901a07352"],["/Generative-Model-of-Unsupervised-Learning/index.html","5549e489349c364f8145e25ba70f7a5e"],["/Git-Learning/index.html","c432f4feafe25bde4bdf3750716282b0"],["/GitHub-2FA/index.html","a8d5ab52d960bfd1f90689bbc78453cb"],["/GitHub万赞，程序员必看操作系统总结！/index.html","944ebadfb8c7d7f9ff068b09a1aba4e4"],["/Golang-book-recommend/index.html","356737b2b116436b55c62be13911647f"],["/Golang-learning/index.html","e87781d0ddb219536366aee915841548"],["/Gradient-descent-optimization/index.html","6723b2570a5385ff50eb5e9fab80c479"],["/Greedy-Algorithm/index.html","e2db5b07354487b41d164d1c1fe1900c"],["/HK-bank/index.html","10217f0528adc9128d81e656670c6696"],["/Head-to-head/index.html","586867ab6c259896112f6af9d753c9cb"],["/HexoPage/index.html","4ba82d55bba1bf100e00d32d868620e7"],["/HistCite-Pro/index.html","b7b4a0d6ca1008901e50f2615edff085"],["/How-does-the-program-run/index.html","20ab13ea7c80d1bfc277e0834a2368fc"],["/How-to-judge-whether-technologyisreliable/index.html","ecd0b88afc36ccf26a046cd8607976b2"],["/How-to-learn-design-patterns/index.html","33ea53bc5d85eb2adc7a51cd012b2c96"],["/How-to-learn-design-patterns？/index.html","de4f35603aa23570d835ee64bb684988"],["/How-to-teach-yourself-programming/index.html","05532ee16e43c78eec01bfc657f884d9"],["/How2learn-Python？/index.html","bfd309a25ba3ef9ac33ac3877418212c"],["/IDEA-shortcut-key/index.html","7f8567a3fff51c1f74279198c5cc049e"],["/IT-interview-basic/index.html","30773f97ec53668be1e08b378b150961"],["/ITK-VS-install/index.html","098e8c81cef42ed0800654649dac63c6"],["/ITK-VTK-ItkVtkGlue/index.html","b28ec9b882963c860a493d1fd8104864"],["/Image-processing-plus-noise/index.html","05f0e15deadd1d1b8a78494ead67caf6"],["/Inception-Going-Deeper-with-Convolution/index.html","9f55abfe5c95cee13b540252e5dbf0ed"],["/Java-GC/index.html","1a3847df381e64f36fb19ea53a298cf2"],["/Java-Servlet/index.html","02a843447cfc15958ef1087356f20a6c"],["/Java-array-and-collection-sorting/index.html","6aea228146192d25747cd83906fa60cc"],["/Java-development-tools/index.html","5a8a77df9019a7aa051e04133396cbd1"],["/Java-eight-data-types/index.html","956947856c83241be86656e35004964e"],["/Java-interview01/index.html","b00f2185940c5881ef20f9db3816a8c1"],["/Java-interview02/index.html","8afc0deb9cd920567cf4567b17b560aa"],["/Java-interview03/index.html","325a3d935d10288cf2e29e138f52cac9"],["/Java-learing-map/index.html","9313477801b3e4dc8e2c3c43cc3fc9fc"],["/Java-learning-route-map/index.html","c2b13a8febe6a922571ec821d5bbac07"],["/Java-memory-area/index.html","a923d6d9631f9dfb6c396615a0122e25"],["/Java-memory-model/index.html","4d47de917b6c98e65a76977112c54be1"],["/Java-multithreaded-learning/index.html","f3e6fc804d9eb4e5eb9a21cd0b2256da"],["/Java-project/index.html","6a5d8243e260d1ddd6665ca7f4be1510"],["/JavaWeb-Chinese-Garbled/index.html","363b6e745158cc772122ce96a2d98111"],["/Java还是C++？/index.html","81afd30fca824792e1aa6ddcc8b8afc8"],["/Kaggle5-step-guide/index.html","f2e32127dc84f2b4a2763bdf956c0646"],["/Knowledge-points-of-Java-garbage-collection/index.html","a2549c4e6ef1d4965011465b14d5d03f"],["/Layoffs-and-Hiring/index.html","d8dccc06194621c9672995389d52094b"],["/Linear-regression-of-machine-learning/index.html","28b1ee99f3529b4bc00677b93006da12"],["/Linux-Compile-C/index.html","62ddc0f50572473116879d9530aea222"],["/Linux-ITK/index.html","84c232f15aed9fd529a0fe0f46d1c2d4"],["/Liver-segmentation-of-sparse-components/index.html","f37eecf1600f65cd8693a63a85c92ffa"],["/ML-EBook-paper/index.html","e646d0bca97a741529e916a98fc415f3"],["/Map-uses-multiple-maps/index.html","3eb37401f883741432f6f9ca6ec17286"],["/Matlab-Graph-cut/index.html","63c39ea7451d96668b4fbf9a1c10fe55"],["/Maximum-Likelihood-to-EM-algorithm/index.html","252072b44f1386e2005a6370b52a2896"],["/Mean filter and median filter denoising/index.html","31edbb8209e1bdd58628ab77767f5fc6"],["/Medical-Data-for-Machine-Learning/index.html","71a3d4d8ada7570a6f8a0e4383094b3d"],["/Medical-image-analysis-deep-learning/index.html","2c4b025d82ae10745b8296b53d0618e1"],["/Medical-scan-image-processing/index.html","0cc713a4d4f9a3f954a4f3ea8d40d060"],["/Merge-sort-algorithm/index.html","9cdb6136f2c89bf3bc3ee1bcedd9207d"],["/Monthly-income-2W/index.html","de5f769bdbf69c18aa4aa2dbb6e68bf1"],["/Mysql-database/index.html","35f129f7b5ec8a0e161f2a4a2aae1180"],["/Neighbor-Embedding/index.html","e66773bc8c1b21b9b620e3aa2e2cd1b1"],["/Neighborhood-approximate-random-forest/index.html","b5400080124bd2c113640dfb5c94972e"],["/Net-and-official-documents/index.html","5635d7ebabe3a21dcc2c9fb66093cdde"],["/Netflix-VPN/index.html","d8a8e8b26666ff06648ca0542d103409"],["/Network-principle/index.html","434bd158fb08323bd5ab59d39e9de048"],["/New-Hong-Kong-stocks/index.html","08b7acb2c6873fd0423bc783f46530a1"],["/Nice-to-meet-you/index.html","49da66ca3f3700ab28a3af3a3f1ec3b0"],["/OS-processes-threads/index.html","6da9d0f08349fbe7c944c74a32aa728a"],["/OS-run-environment/index.html","c8beeb13f1fa859ce2774ed93f98cbf1"],["/Open-Internet/index.html","3049d900e1de936acd7ae6317ef98139"],["/Open-Internet2/index.html","04c27bb94884ded04f759c596eedfad9"],["/Open-source-community-and-rewriting-website/index.html","adb174dfe4febb995d193f757c00a797"],["/Panoramic-image-stitching-based-on-SIFT-features/index.html","e38150cb37154322254bc222e8f8e195"],["/Parzen-and-KNE/index.html","958870b36ba34c14105c6a7d26516ed6"],["/Personal-technology-blog-site/index.html","ec3793df23313c156242dd1b28d63de0"],["/PicGo-Gitee/index.html","11def1e0b23123e4713ec7a69209237e"],["/Programmer-treasure-chest/index.html","8d4a73cd6d5841c6010cc901aea37d6f"],["/Prototype-mode/index.html","11a21e9ca8da114fca05b2b2d37bfd1c"],["/Python-base/index.html","4a00a72f1d9be5775d7916e1472f89db"],["/Python-crawler/index.html","a207bfb990135fce19ccb14fc455c42e"],["/Resume-revision-suggestions/index.html","42c56e737b9758cbadf192816743ee86"],["/SEO01/index.html","adb9fc4dced0034ce0806da1d57d54e5"],["/SEO02/index.html","525233500b6be4cfa476abc055a2eda3"],["/SPHARMPDM-MEPP/index.html","f0a667f11fd0eed5df03e9e0d188b8a7"],["/SVM/index.html","0271021388f1f17d4b49c6e1c089e84a"],["/Semi-supervised-learning/index.html","f62628dede0f8e9881269f449df20538"],["/Sequential-model/index.html","0e4cfcab1a91d3b8c9b34319a9ed0018"],["/Shape-Based-Human-Detection-and-Segmentation-via-Hierarchical-Part-TemplateMatching/index.html","1ec149126493e0d022db23dbb4d7dd80"],["/Spring-basics/index.html","86eefc51d172e0104d5639ae2a5ccb75"],["/Spring-integrates-hibernate-Struts/index.html","3542e4b783d2c1748c25a8f823f7196c"],["/Structure-learning/index.html","f8385d5d831844c00ff29260234c7f8f"],["/Suggestions-for-self-study-of-computers/index.html","5983b94bdbaf4ec84d40d19709fcdc5a"],["/Summaryof-HongKongStock-Account-Opening-Links/index.html","b1f4f49c6143d89e3964048d391908bf"],["/TCPIP-detailed/index.html","826cc8a975369f4d12e7ac07a1259e77"],["/Telegram-VPN/index.html","129343dd9ed437d0c315a655da26e2b1"],["/The-essence-of-shopping-festival/index.html","dbe5bda548559c9d7bbad3819bb03a74"],["/The-most-important-investment-in-life/index.html","40ff074ffed165044db4150457fd02e2"],["/The-most-successful-nvestment/index.html","fbfd1cb209afe1f6239c5606330bafb3"],["/Transfer-Learning/index.html","3a17d1bc0deb7b7ad7e016407182b63a"],["/Transfer-to-computer-major/index.html","4a9e681a52706e4c3d08134f79723fde"],["/UNet-Convolutional-Networks-for-Biomedical-Image-Segmentation/index.html","40fff387a068af0bef43038106f19c3c"],["/Ubuntu-install-sougou/index.html","2442fcdb4a58e0a25080fd145763eef5"],["/Understanding-of-paying-for-knowledge/index.html","cab98e87074b6fbf761751dfce80c5ef"],["/Unsupervised-Learning-Linear-Dimension-Reduction/index.html","ead5863cf4ec63ffc385251a062a2d24"],["/VPN2025/index.html","001a0e30102cfad9f50014f0005a5c27"],["/VTK01/index.html","d13b1689e1eee5d0c5d440d8a453bd0c"],["/VTK02/index.html","70bc58e57195d6c732763d4cf4394e74"],["/VTK03/index.html","aea1f95194204dd7cc67fe0eaad9732c"],["/VTKRead-write/index.html","65b17ed97592acb9f2a88f8c0d4c4ee4"],["/We-are-all-good-kids/index.html","69344df373233ad8117c8c888fb2f90d"],["/WeChat-80/index.html","3b0e471b75cbf584c1ff340cea95041a"],["/WeChat-red-envelope-cover/index.html","55cb2f9190d30a6ed286be378f14d9dd"],["/What-is-crawler/index.html","6953ec1113c88ef84770be4888b55f81"],["/Win-OpenInternet/index.html","26e1cdba07f27a9bd2fa221127e87e40"],["/Windows11-2kfans/index.html","049142c7c4cfa4fa07dd3479aa8df979"],["/Word-Embedding/index.html","cbf48ef6669e1b4df92451ab40f865b1"],["/YuanShikai-and-his-Beiyang/index.html","b9f00bc5e1691590310b9d61af881690"],["/Zero-copy/index.html","ea3ec60ad01238111ee5c91a9d0ce614"],["/about-keras-model/index.html","a9e374b808f5540d8db02f5d34f11794"],["/algorithm/index.html","131ebfe734baf5e6ea2de3d61243746e"],["/alibaba-Java/index.html","76bf34d4a14a32f58fbcfaed6e2ceb0f"],["/archives/2020/01/index.html","b84b05dd85272597fb4bcc88bb93af61"],["/archives/2020/09/index.html","fc79b7e56d34f03d51782497903bce77"],["/archives/2020/10/index.html","884e18f4ffa1268a5d558d776e0e3298"],["/archives/2020/11/index.html","4dfe8f17798760e04e3d8980065f1b11"],["/archives/2020/11/page/2/index.html","c1705e65d26cc8f4be0f679ac4188e52"],["/archives/2020/11/page/3/index.html","9cce9f57aa1517a33f2dc9bee4465ecf"],["/archives/2020/11/page/4/index.html","b398e548788b4d9a47e93ec1ad62a3aa"],["/archives/2020/11/page/5/index.html","be2514daf2cdf40cf50564210c09b360"],["/archives/2020/11/page/6/index.html","113110286319f798bd9ac619965d73dd"],["/archives/2020/12/index.html","a3196f20099392b5c778b3969a6794f9"],["/archives/2020/12/page/2/index.html","bc761e8dd5a64397683bffeb67de4de4"],["/archives/2020/12/page/3/index.html","932284812f58f5f57b33b6ff44218399"],["/archives/2020/12/page/4/index.html","513f2d9c4e0502bc66cb3bd1d1408b37"],["/archives/2020/12/page/5/index.html","43bf66cb9b170616e041de89c8fcc3bb"],["/archives/2020/12/page/6/index.html","96a3d34b7aa3f245ed448657bc046c71"],["/archives/2020/12/page/7/index.html","ab8e18500bf61f35b46dcad58c8131cb"],["/archives/2020/12/page/8/index.html","2732e01185e36c0883faa06fdf2006d2"],["/archives/2020/index.html","f1c3ed49135ad019f53c6e1d18eae2a7"],["/archives/2020/page/10/index.html","8de056f8929bd3220486191d9687be15"],["/archives/2020/page/11/index.html","5ab0e307e122404b534267169d2708ce"],["/archives/2020/page/12/index.html","58ed822f3954addbcc6dccd4628b4275"],["/archives/2020/page/13/index.html","0426bda22978011f357d950ffa80d726"],["/archives/2020/page/14/index.html","eacf1b7d715dc77ad94a6c3cc2178273"],["/archives/2020/page/2/index.html","38ef9216ef52ac41ec77ac69a0e3d099"],["/archives/2020/page/3/index.html","970e39e2e03630c075d8e07437099d66"],["/archives/2020/page/4/index.html","5d1388c4900ba7ee5e3f777b421e8a91"],["/archives/2020/page/5/index.html","88e2f58dfcf275176364eef3554d98db"],["/archives/2020/page/6/index.html","22a23752c22bd26faf909350d80254ef"],["/archives/2020/page/7/index.html","5907a0afc570200035b0fc8bb21f6978"],["/archives/2020/page/8/index.html","ee962e3fef3618fd4c31e69d2ddf118b"],["/archives/2020/page/9/index.html","88485d605c5ceb9e4c7b1b16ce4fd98c"],["/archives/2021/01/index.html","6584314c1d6f2d3a07b0a9347b12576d"],["/archives/2021/01/page/2/index.html","d186fe04ad107f7f0b8796aa3e2ced02"],["/archives/2021/01/page/3/index.html","b354b228fa1eb48583f8e113292e87ba"],["/archives/2021/02/index.html","74ed1ec2100dce07b2d27cf6ee79dfff"],["/archives/2021/03/index.html","f3ce1f830198de0c18a4421b260677be"],["/archives/2021/03/page/2/index.html","f4b6c4748b49d354e8836f6e44ccc9bb"],["/archives/2021/04/index.html","1d5946d0cc3c822eb41fc1ac95d4d1d0"],["/archives/2021/05/index.html","4f0d97336f8151b7ff9859cb9f2db6ba"],["/archives/2021/06/index.html","2dfb0df8a366859575fa86e6fba0c4c3"],["/archives/2021/07/index.html","f57699d06dbdd23e4c6df5586336f9e3"],["/archives/2021/08/index.html","b511e4c6c5c544012cf259709a465652"],["/archives/2021/09/index.html","9dcd7cf493cd3faa52db53cea8658c69"],["/archives/2021/10/index.html","0b0ccc9133ff292d6d1eecdd83a67bbc"],["/archives/2021/11/index.html","d0de418e07da7d5e026e9d79402dd5a8"],["/archives/2021/12/index.html","001922cb0fdb72a4b2fc631819f6b5e5"],["/archives/2021/index.html","c9be669c12c3d71eec4ec28aae688548"],["/archives/2021/page/10/index.html","83e25d7f4d0efff825499e85e86997c3"],["/archives/2021/page/11/index.html","c398310b6c293b5dd68ed04acb7153a6"],["/archives/2021/page/2/index.html","d422bba46f2716881559d4d1f73d6a9a"],["/archives/2021/page/3/index.html","953e0aff1262096ab3b948219fe0f4ef"],["/archives/2021/page/4/index.html","4d60defb65cb4f53944f32c597a4eee6"],["/archives/2021/page/5/index.html","f5db2bdc7878d70a52309cf74114c90e"],["/archives/2021/page/6/index.html","9644515c2eb0c48a8fd743f3efa9476b"],["/archives/2021/page/7/index.html","76ff267a8c1039164fcc1ccbab5119f8"],["/archives/2021/page/8/index.html","fea1b7a797d128406fee54c6067bc3ae"],["/archives/2021/page/9/index.html","c9ed15a175f7aacf225ffc1d5cd6e97d"],["/archives/2022/01/index.html","51d166da8eea39f3a5968e90fd5e6da8"],["/archives/2022/02/index.html","67f3fbfd1071b60024c05afae4fa174b"],["/archives/2022/04/index.html","03a1f1737dfbdad41a482af39b500009"],["/archives/2022/05/index.html","b2d4800746a15b896e67c92bb9356ccd"],["/archives/2022/12/index.html","87ed0fdba3d5e960dc7864660ed5aaab"],["/archives/2022/index.html","0bc0d86e46b006b289c1ef5972482912"],["/archives/2023/01/index.html","8e34e7e9a87084376fc4324cb989e4d3"],["/archives/2023/02/index.html","0ccbe361c424dfc0bb6d0486c9935f5c"],["/archives/2023/03/index.html","2e3a4784a3e6d555d9aebc87fa546589"],["/archives/2023/04/index.html","b287c165418e05fa7cb17b9b092374ce"],["/archives/2023/06/index.html","24409b8a2ce847c860ae6bcf8d4bf2e5"],["/archives/2023/08/index.html","bd6610b2b656232e231ef76ec4cf1f2b"],["/archives/2023/10/index.html","bfcff1a6d237f6db8f4a34d1d2516f39"],["/archives/2023/index.html","229f78106b3d959b4c2d6c97db803a29"],["/archives/2023/page/2/index.html","1e5ab7d900133a84f5e3e9c417ee7174"],["/archives/2023/page/3/index.html","aa2da59b861b96f1fea9baa29611bd8e"],["/archives/2024/01/index.html","dbbee5a8081d86a87b734358ca14f668"],["/archives/2024/02/index.html","121bdabd1f7042563dec4a698bcf271d"],["/archives/2024/index.html","696bb9ec8b1fe2db71c4344f0514d57a"],["/archives/2025/06/index.html","63c472a91776f689d13c4ffcd7a1c11c"],["/archives/2025/07/index.html","a3c8d35c350148a0c0b66d055617a6b4"],["/archives/2025/08/index.html","8d04ec65cd568fe29a850246005eef70"],["/archives/2025/09/index.html","49b706ea48bc0256b23743fdc18f14f6"],["/archives/2025/10/index.html","6bfe1ed997171e936729e9686601fa4d"],["/archives/2025/11/index.html","834c9b706a16d5077769a2a6c80bf9fb"],["/archives/2025/index.html","55b08d60341354aa8a48164475015f03"],["/archives/2025/page/2/index.html","9523356e0b065f2b4275cafb20884c7f"],["/archives/2025/page/3/index.html","72b682157bf40c1380b7671a2eeaee1f"],["/archives/2025/page/4/index.html","dd0d65a433d8838601222d4e8e100622"],["/archives/2028/02/index.html","1d7fbe0a25536d657d972b0a3eb87db3"],["/archives/2028/index.html","bf475a9cadde3c40f8c4e1a28c2587a1"],["/archives/index.html","47b7fe0216466d9cbb7bcaea69892676"],["/archives/page/10/index.html","9aac4cb445512432d93ac991e8ef9b13"],["/archives/page/11/index.html","d87e9cb8520a586577adfff670633b09"],["/archives/page/12/index.html","bf18219f39245de0562ae4a967ba58b2"],["/archives/page/13/index.html","2f150aabc2375eed0ce48280ebae6bfd"],["/archives/page/14/index.html","07c774e69f04c0dbf985486253cb1426"],["/archives/page/15/index.html","096c1e0c2faffaba5633f5a05b4acaa3"],["/archives/page/16/index.html","508d7fe7630e02734c1cb399188f4aad"],["/archives/page/17/index.html","356414fc7fefb0c01f21827b27699180"],["/archives/page/18/index.html","22739be4da9af1dc4932b964c54d4bb7"],["/archives/page/19/index.html","443fdef610a42d0cc94edac016cd12ba"],["/archives/page/2/index.html","493c132131ac44f333edb2ec6ff80617"],["/archives/page/20/index.html","cc48724008be19942b3dc3e8965f3bbe"],["/archives/page/21/index.html","c4d29b3b5baadfa0d213e7fa8a59bac6"],["/archives/page/22/index.html","a317f1f2352e78f50fa343ca8cf53b57"],["/archives/page/23/index.html","a500769d2d99ffbc806ad93f017caf5f"],["/archives/page/24/index.html","e1119a4c772c6f5809134bdd370f69d1"],["/archives/page/25/index.html","1dcbd6f0746e9276757e2ef2304c04f9"],["/archives/page/26/index.html","96812708a6e18ec943bfc66d015ae82f"],["/archives/page/27/index.html","86acd5ad0d721d8c0dfe2411006826af"],["/archives/page/28/index.html","0aa2bc73ec3c4b2d066547d004764b74"],["/archives/page/29/index.html","d3a3123a43aa60a678d8d4176b03099f"],["/archives/page/3/index.html","9d9b0c8082ae37347dfc5475a666d739"],["/archives/page/30/index.html","709afce15fc06d8dd5b8cd3ea2415bc9"],["/archives/page/31/index.html","672278c7be92f6ab1756baacf1110aed"],["/archives/page/32/index.html","5788b3f5ed96fb311b72ac3c82691251"],["/archives/page/4/index.html","cb2352a0c4342eda8bf0957eaff88bfc"],["/archives/page/5/index.html","dcca4e982519d6bf64812dec49b56f3b"],["/archives/page/6/index.html","5406095768e7f4387ab4ab987d052636"],["/archives/page/7/index.html","65388b3f837f103068fd14430f4d8b40"],["/archives/page/8/index.html","2ad6794d4ecaf15bfec78677d1c57d85"],["/archives/page/9/index.html","42ef32d5523c28b5d1edcd610a51ae71"],["/baidu-search/index.html","351023c54e3858d9c1c5446295b7f1e8"],["/baidu_verify_code-Hh2fKNlEB1.html","b40d6f40a675fda680fcfb14786f03aa"],["/be-a-programmer-instead-of-a-code-farmer/index.html","0cffab683bdcd540fc866abf544dae50"],["/bought-a-house/index.html","0cc0022a52a62596c924f2bfa7986b4a"],["/categories/C与C✙✙/index.html","359e10d99dde63395e907a48d73b6ddb"],["/categories/Go语言/index.html","14ae061e6b9d84247d952534d502924d"],["/categories/ITK与VTK/index.html","a1fe88bc84f20383983eefdcf06c2e31"],["/categories/Java/index.html","f5d3051c2aedd967c42c8a81c9ff98da"],["/categories/Java/page/2/index.html","74b45b41749377c1c6cba0eb533cc79e"],["/categories/Java/page/3/index.html","69f7f84c4790636d2d5366427016d213"],["/categories/Linux/index.html","5cc2deec9b777b292d4fcb4032553f8b"],["/categories/PLC/index.html","9797e3f45ebcc291accf972f32f4d787"],["/categories/Python/index.html","53e39f855dbaacac54b22c196d01ff2a"],["/categories/SEO教程/index.html","b6bea0af63782f819fb08f4baa8df983"],["/categories/index.html","98f79d818469658f3bfd70bd0029604c"],["/categories/图像处理与机器学习/index.html","b601ffae7ae099b8999c099cfb742c5b"],["/categories/图像处理与机器学习/page/2/index.html","0e642e2c933912bdbb12e9e9f8c8e143"],["/categories/图像处理与机器学习/page/3/index.html","53fd49fc41b39faa574b97c98cecd539"],["/categories/图像处理与机器学习/page/4/index.html","5fcdb30343e9a2050264b535f0633e7a"],["/categories/图像处理与机器学习/page/5/index.html","ed52740023693488598a305c454216bf"],["/categories/图像处理与机器学习/page/6/index.html","1deb36a0c5e2dee50e28cc1a6c1a2cb4"],["/categories/工具/index.html","0200adda4be33e30ea21797e3125ef4a"],["/categories/工具/page/2/index.html","c836546e4c7127876911d536455b70a1"],["/categories/技术以外/index.html","8b5f272cd4f55317a598e03cb75ff36b"],["/categories/技术以外/page/2/index.html","b633a0e8b8b1f71c588ab82aaffdac84"],["/categories/技术以外/page/3/index.html","d3ffe66e3ba97a941768ce3fd30cf398"],["/categories/技术以外/page/4/index.html","6102bf992eb4bc52457ff84e08accd2b"],["/categories/技术以外/page/5/index.html","4a68c70fdcc645b01c6f4dd07db9ca44"],["/categories/技术以外/page/6/index.html","27e64a88190b0fe0fa668b240857fc8e"],["/categories/技术以外/page/7/index.html","b71d9fe2a039bc903377a1651b28d4f6"],["/categories/技术以外/page/8/index.html","31bb0a5016e0e272808bc9f7d7c68bae"],["/categories/技术以外/page/9/index.html","94d633c73f753e2e048f532466280a1f"],["/categories/数据结构与算法/index.html","5025337934569f2509cf31c98c0ad7c2"],["/categories/数据结构与算法/page/2/index.html","7767eb1a96189726f21dfd8eeeab5b5e"],["/categories/科学上网/index.html","9fe6dc5c6c0d2e3ae8918e2e278e07ab"],["/categories/科学上网/page/2/index.html","5a44aad5999091b32b26a937c2b63e33"],["/categories/科学上网/page/3/index.html","7ee294d5e2a6c1e377825c1ba2434bc7"],["/categories/编程经验/index.html","12efea884b32e460d8aa1b8c369c09e8"],["/categories/编程资料/index.html","0c7dbd68fd3330d2e322087caf6c2f44"],["/categories/编程资料/page/2/index.html","997f83c2433e99876db14c7772a6b0c2"],["/categories/编程资料/page/3/index.html","8ef346c6cc8356c4ef6bf55013990ee8"],["/categories/编程资料/page/4/index.html","0cf48e979ca7237c9683c8868adbf080"],["/categories/计算机基础知识/index.html","a086ae53c1e9bef0bc2b40d53794b591"],["/categories/计算机基础知识/page/2/index.html","c55cfdb6b392847212858dd99c12e159"],["/categories/设计模式/index.html","e79f2f291865083157768840f9edb459"],["/choose/index.html","8842df4fb0138317ab4d2c40d961b506"],["/choose2/index.html","f9729057ec1ad9654290f11ae305163b"],["/chrome-crx-intruduce/index.html","c0372e77230165fab9b29be74a166896"],["/clashvpn/index.html","10b94116b5ff7a1ab600a260aa57aac2"],["/coder-blog-website/index.html","883bf5f2d12e87a4f464ff7af45ded3f"],["/coder-source/index.html","9d3d167a2b64e2b28b5e0aa7124cc227"],["/coder-videos-website/index.html","749cf137346e243b9d6f530201bedf62"],["/computer-book/index.html","009b9be617bdc3692d836c6526a7316b"],["/computer-censorship/index.html","d3b64849bc67f3f50e4657b89816dbb1"],["/computer-network01/index.html","809e551a45d43407ee944c6b06281f17"],["/computer-network02/index.html","c8df1f9600d51d047bedda93abd5e6e5"],["/css/main.css","bc32ad34ec4990d934c3c647bdb62f79"],["/database-Mysql/index.html","05c0744314ee323478e6c1ad40fd73cc"],["/eclipse-lombok/index.html","19209766a93578faf7b236df6b964e69"],["/fully-convolutional-networks-for-semantic-segmentation/index.html","3c4899a9d38ecae7e5efe615c62251e5"],["/great-firewall/index.html","0e79f37af75b5f1958f776053f464c49"],["/halfrost/index.html","fc1bf8c1ebe819458f22c1a822b340cb"],["/how-to-signup-chatgpt/index.html","b8fd6546e9ce168d7401a7fe92fe147a"],["/how-to-use-Gemini/index.html","83a66c78b8a70e46deedbfe91ffc8c7b"],["/index.html","47dc362ef1b6020f0d074b56976a7377"],["/ios-open-internet/index.html","75db93a6b186b9e25bbb3a9900f5793c"],["/iphone-open-internet/index.html","27882960c04fbbaf860347dc15385802"],["/itext-makes-pdf-form/index.html","bd4883a63b4b390cb46db0f06e0b646c"],["/java-Set-Map/index.html","8fcfdb9b7b5093a485e53a7866475b91"],["/javaweb-server-error-codes/index.html","5a459133c8a801faec63fbc046a14c08"],["/javaweb-source-code/index.html","115fbe18540edb0f16e102eb9d841aab"],["/js/lib/busuanzi.min.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/js/lib/lozad.min.js","47904d34a224931dd1b615c59a3dbe3b"],["/js/lib/prism/prism-coy.min.css","0ccad54d95845901ead59bfd3ecceb14"],["/js/lib/prism/prism-dark.min.css","a4711d2957d6605eb5682bdd228cf123"],["/js/lib/prism/prism-funky.min.css","efedcdccd7a9ab342d2d9cacd24920af"],["/js/lib/prism/prism-line-numbers.min.css","38e22e790c279bb56f9ec4b90a2a2d58"],["/js/lib/prism/prism-okaidia.min.css","5ac6f9de996fbec68aaa106dfb16e061"],["/js/lib/prism/prism-solarizedlight.min.css","ecc7e64d039873ffcf7fb27babdaeb5a"],["/js/lib/prism/prism-tomorrow.min.css","456af2a14ae4f5089939d5904ac40fe8"],["/js/lib/prism/prism-twilight.min.css","ebb5c355332a8cf9a1ce37a2a69d678f"],["/js/lib/prism/prism.min.css","a5234d614834658887cec6a9515890f8"],["/js/main.js","052d2b299d9c750afea8df0b802ab7c1"],["/keras+TensorBoard/index.html","96e3e7d8fe16ad3b34e3ca39b7341271"],["/keras-beginner-guide/index.html","1bc8cf74c8183ff7d1537cc509de3f42"],["/kmp-algorithms/index.html","d0e9f8ff8e7458657fe897779b0f6720"],["/leetcode-Java/index.html","9d5aedd1c2c0208eb7db996fb8dc68ff"],["/links/index.html","fc555a5eb76d4a1041880f5243b0d062"],["/linux-java-opencv/index.html","aa832add5dc48f8c04deb43cba1fa2be"],["/msb-source/index.html","a9d980b71106b801031fbfab9f8732d9"],["/online-BUG！/index.html","ec354df2d764509eefbe8231dc15db60"],["/open-app/index.html","9af449cbb5ba10a8c676be85b34c3e03"],["/page/10/index.html","b2ea0b9c41264ddec212ea719887823c"],["/page/11/index.html","5be13e9d2e54bb6fa528f986f5992b23"],["/page/12/index.html","5489be2706500f7d38c614754bdf03ab"],["/page/13/index.html","92f7a15fd1554d292b0516ff0ee47297"],["/page/14/index.html","86a6d44361521fd2012d25b3156af585"],["/page/15/index.html","ae3c6abfa5ec1596ced97474ff20e39f"],["/page/16/index.html","37782337c5accebc4197f06337c4bbb6"],["/page/17/index.html","27011d4a14dbefc1a0272939ce6fa86e"],["/page/18/index.html","86e404f07deebec9adff128abd846a62"],["/page/19/index.html","864104b46a9c30c6dd8364675dce8cdd"],["/page/2/index.html","9de5fe020e9f61e48524c0cb26080572"],["/page/20/index.html","37b69d3493469781dd7ca2b861a7e6f3"],["/page/21/index.html","4786f39d08cb5d09d6e694131e198555"],["/page/22/index.html","daa7686c3e1889beef710b95b6ab0e19"],["/page/23/index.html","c2dbaa52c6bc4bcbf93728797caf2e82"],["/page/24/index.html","94dfe3e13f5a2ea8db7154b7811fdbe4"],["/page/25/index.html","790b9f1449ef6a9f668056d74e2f7050"],["/page/26/index.html","1e8659031a03807e8099b08c53771fcd"],["/page/27/index.html","454bfb3621cebde82355cb9122643ccd"],["/page/28/index.html","6d4c83c06ff6981d2ccc3b458a8af4cc"],["/page/29/index.html","6572af159c1c99a9b71ca5e919b10473"],["/page/3/index.html","2be86bd3b20906f0e256a73d529434b8"],["/page/30/index.html","b77edb0a54002c0fe1e1b0db2d4bbe1e"],["/page/31/index.html","5fe4e24c16f7540fd9f5046bd15ef031"],["/page/32/index.html","01e175e0b7b80ee95166bf3111e3da7e"],["/page/4/index.html","dd44c948a853252feb753cc2c2afc605"],["/page/5/index.html","af658adab98a0a34bfcee9efe1188067"],["/page/6/index.html","c554db6b39b33e5e10658de9a5f3ab00"],["/page/7/index.html","6f3870088089d1c96382703712bb49c4"],["/page/8/index.html","c54787fbca15bcf479352220f64a9459"],["/page/9/index.html","910e20bf283ded3d31b206d5a03e48a6"],["/pandas-data-preprocessing/index.html","dc1f4135da6037f144f2e741de70270b"],["/popcorn/index.html","a212601f9a1490b029b54098de8ec613"],["/python-Blog/index.html","e443af580f6439e962a40f6c9f2d8db2"],["/python-yeild/index.html","9af607ecee0671e52a16f09d723219a8"],["/python爬虫教程/index.html","a431fbaff9c3227439975c780d13239e"],["/software-copyright/index.html","3846d98ce636a8c6e3b724fda7fbba1a"],["/sw-register.js","a0178402f51f50bcef6ed82ab730a809"],["/tags/AI/index.html","96f61af9a0a57a1db76361d46b076d3d"],["/tags/API/index.html","15c4165bdbce3343b9138edb102a93ae"],["/tags/C-图书/index.html","7f6d4af7462722ee2057ad7d36e7f3ab"],["/tags/C/index.html","601fa04ebad0b3ed37084e5980e1f138"],["/tags/CNN/index.html","cf8d9e353656e7c8741f375077a1ae04"],["/tags/Chrome/index.html","330bef4ce7d4784b85cf85997a9381c5"],["/tags/C✙✙/index.html","77ac928547b1dce5709b241e17b26ff0"],["/tags/C语言/index.html","11377ad48a197e859de33b51b332f62b"],["/tags/C语言图书/index.html","4196599341bc76e6b791b5c67ddb2b1d"],["/tags/DSN/index.html","803c433e08b870f38231a87b6290d07a"],["/tags/Dll/index.html","43f112634cb8369fe0e307911d311c5c"],["/tags/ECCV/index.html","9da54878dafeae43503c2b68274c2dd0"],["/tags/EM算法/index.html","46524fb5c7fb685b436e58bf26147b24"],["/tags/Eolink/index.html","d0ba8bb9465d44673943c02d73191753"],["/tags/Gitee/index.html","72efca330c23439fcdbc550925553393"],["/tags/Go语言/index.html","1bdfea4fcf8337873a812bc4a39328e4"],["/tags/Graph/index.html","048759128a5102a00c3c9c22a6f5a544"],["/tags/HTTPS/index.html","e401f55ae381d1408cd575f02fc52130"],["/tags/ITK/index.html","404ff4996f0c0dbaeff186f718207378"],["/tags/ItkVtkGlue/index.html","0a48440774dfee8ec8cf9702c4a14615"],["/tags/JMM/index.html","ed6ed121f98ef2102edecb2ef5bd15bc"],["/tags/JVM/index.html","7e1110f910e84f5021255842ad8b4908"],["/tags/Java/index.html","fde89a33a65581cf2291e398193d1dbc"],["/tags/Java/page/2/index.html","dc838f9dfe9e7dc9a8c093616cb01bb3"],["/tags/Java图书/index.html","05abce33d85c7eb53bc241383eb7eda3"],["/tags/Kaggle/index.html","47c68bcf98872cc81e518ea3d1267c23"],["/tags/Keras/index.html","60a07779de8c5dcd2886cb913afef4eb"],["/tags/Linux/index.html","deff1910707c5d075d980368e231d4e4"],["/tags/Linux图书/index.html","4116196a64ba60296124b8851c89bcfa"],["/tags/MEPP/index.html","5dced1c987e6c86d992e3f48f1837298"],["/tags/Map/index.html","0a092ed68ed9dfbfe929ecd99a06a9e8"],["/tags/Matlab/index.html","ed1094992f28741dce9f04763cb3b74c"],["/tags/MongoDB/index.html","61cf1ba43662f621d53abf4beb9a70c5"],["/tags/MySQL/index.html","061d7d6b2236d8c6f5ce934cebd29c13"],["/tags/Parzen窗/index.html","e1785450a9a1eb6d8faca6febcbce12f"],["/tags/PicGo/index.html","12d5ce2bfde5a19dd0b9190f9c95a68f"],["/tags/Python/index.html","9f478b93cd0cd7d25572926f5874cf66"],["/tags/Python图书/index.html","21d556fcf94e27237d2255abe2a7544e"],["/tags/SPHARM-PDM/index.html","c09ecbd896a77e936bb9ae02226d3586"],["/tags/SVM/index.html","b0673cd5830a20a1c82c96018bc3c6ca"],["/tags/Servlet/index.html","613f85d9c6f0b15255ebeb995b4a7bcf"],["/tags/Sping/index.html","c931622d280c029393382ca9051a9576"],["/tags/Struts/index.html","dc7976993c6891409a87e29f08b54c79"],["/tags/TCP-IP/index.html","89c1f07de0fc042818f8479fecbda230"],["/tags/Ubuntu/index.html","80395733cacfec9fae73e3f4831ce43a"],["/tags/Unet/index.html","4e0b9047cbec3cf29dcf5beaf9f1a53f"],["/tags/VS/index.html","e34a2c839254e71d137edfc66369d059"],["/tags/VTK/index.html","939753036330de97f0d99d641df841e0"],["/tags/Windows/index.html","b7ad51fbc997e0846fb7463f9804261b"],["/tags/edit/index.html","a0228b6acfa35fae8f2c586956e21e5b"],["/tags/hibernate/index.html","0a29c4e8961d7ba5a640018a53ac2faa"],["/tags/index.html","26603eeb6739ffeda478d67c30db7a1a"],["/tags/itext/index.html","1ef441390bb71c2960c402fb5ff08e47"],["/tags/jdk/index.html","688ae5572a6ea8c329cec60ccb0587da"],["/tags/kmp/index.html","beb7d41c0e1fc615857e2500b8ce3cd5"],["/tags/k最近邻估计/index.html","47a075717d889ed13daea7abbd36e3ec"],["/tags/lombok/index.html","d7ac6a82120449757ed6618d42814fea"],["/tags/offer/index.html","8659d42206ea3589d075d7ae6c326dd2"],["/tags/opencv/index.html","5dc60faa9021a478b25a917c7e890d58"],["/tags/pandas/index.html","f2fb98535accf7f2f963ceac8fbf95be"],["/tags/string/index.html","24d246d768c70a0a2e7992b78e5081d8"],["/tags/vim/index.html","b79f4d1ded11f1f37dcd9b661aa9a30f"],["/tags/vtkPolyData/index.html","e53f50e3d8abbeb0f72bd8ef62f4d9ac"],["/tags/web/index.html","06217c0a40b7a33cf3830302094fb551"],["/tags/xshell/index.html","1089b1089e115848a722a8042bad4e1e"],["/tags/yeild/index.html","0e7a741a450ab7bc1ef788a511875823"],["/tags/互联网/index.html","0091bb7509e5c18bdb63910ce4fc45e1"],["/tags/人工智能/index.html","bdce4afb451dfdb9c3cb9c97ed671d9a"],["/tags/体绘制/index.html","de469b0caea69d6018a876a2fcba31a5"],["/tags/全卷积网络/index.html","62bba91faf2eb16e594c74188aecb0dc"],["/tags/公众号/index.html","721564d40a74d821c83609e2e3b4ae06"],["/tags/内存模型/index.html","83b80ebcab9f592e6fc86efb71a4ceb4"],["/tags/内推/index.html","c0527e66d1731d1154459b90ab20163f"],["/tags/函数/index.html","646a5f41f456e8b11797c2d4f4d9f627"],["/tags/分布式/index.html","5b4109e1f461f4af470ba092a9900e33"],["/tags/加密/index.html","945ddee03729342633c16030c70f9427"],["/tags/医疗图像/index.html","d63aaadfc49f981d896a263054f73db4"],["/tags/博客/index.html","2fb83ad67d56c1e626f3fe6e199c4d90"],["/tags/图像数据/index.html","17c3f991f14cb5107d5655d442354f2f"],["/tags/图谱分割/index.html","1373cdc6c632dc84f7f20124a10df1e5"],["/tags/垃圾回收/index.html","b23a996c2520b8faffaec4588a4ac3c9"],["/tags/多线程/index.html","8a99b2349592816c52e20c86cf672dbc"],["/tags/字符串/index.html","aebf20a85ffc05b64806c6652dcf61bf"],["/tags/工具/index.html","ac51b60e377dbbb1d3b45f35d68c0c42"],["/tags/工具/page/2/index.html","bd0c4e64357b7cad62406d60de683e9c"],["/tags/弹性形变/index.html","e116119629e4f3f7a8baec130fa2c0cc"],["/tags/排序/index.html","4d1c47f12af10e8726c70f617542a73a"],["/tags/搜狗/index.html","3faf1bac62050ea55595e43a8479a028"],["/tags/操作系统/index.html","1a2f8611918dd70db2d99b3347e9b8a2"],["/tags/数据库/index.html","141100dbddd9dcf9a0d9132748a03bb9"],["/tags/数据类型/index.html","b64e4a5d3defae1ddf296d164a43e123"],["/tags/数据结构/index.html","995966641764163b62fbe39cedc7bc7e"],["/tags/最大似然/index.html","d2091395c2617d72da48b2afdb74cbf1"],["/tags/机器学习/index.html","cb54235d4aeef54f3100c991e96bdfdc"],["/tags/机器学习/page/2/index.html","23cdee69cc1d782fefdb7f8099e2c7a8"],["/tags/机器学习/page/3/index.html","003a6ef6df81166c0ac870ac5d913577"],["/tags/机器学习/page/4/index.html","635b7d8275b778712e7dfa86f4befc77"],["/tags/机器学习/page/5/index.html","bfa82b7973f9915908e42955355ea27e"],["/tags/树/index.html","9b78eb7318a85461bb213c89ae7bb70d"],["/tags/框架/index.html","db62b77b5ba6060fad3882ceddcb6eb2"],["/tags/求职/index.html","c2333c99273449271b58783cddc29946"],["/tags/汇编语言/index.html","665e6d815932e5b7c5626373da4e6612"],["/tags/深度学习/index.html","8a3e9e5d16f35763e4482c9ef563870a"],["/tags/深度学习/page/2/index.html","f54588158f4c7578a67e986f3bd059ae"],["/tags/深度学习/page/3/index.html","75b0e69c7466a0ba94b3ed22658d7016"],["/tags/深度监督网络/index.html","559e128d14cb0c857e0ce999466d9c23"],["/tags/爬虫/index.html","c786be116b3078f5cdf68bbc6ef0361c"],["/tags/电子书下载/index.html","3ca42e12bbb385ba6914e7b8b2d20237"],["/tags/电子书下载/page/2/index.html","a7aa88d3ce93f4727f2fe8557e768015"],["/tags/程序员/index.html","f8eabc88156180cead4f73bd330db050"],["/tags/程序员面试/index.html","66ea22cf33efe172732ac6db8a623204"],["/tags/简历/index.html","773497840253e542115e546404e45e9c"],["/tags/算法/index.html","f3cec86907fc6d67684f8ce2401f8e83"],["/tags/算法/page/2/index.html","592ccbb0af2781dad34f174b3b39baaf"],["/tags/算法/page/3/index.html","fee6f54385b0d695b8da6cfd5dcd45d1"],["/tags/线程/index.html","a5028880d644d92d7eb93828d9aaf01f"],["/tags/结构学习/index.html","1049a7cbe5c32e03b0f1d23344e63311"],["/tags/编程/index.html","4a098ef6542ac59e89870ab06e4938ec"],["/tags/网站/index.html","5fc35b16dbbdb8c7f4cfa4831509aeac"],["/tags/网站/page/2/index.html","3378dfbb19bd76b4e9ed7e3520680040"],["/tags/网络/index.html","81a7fb5e0db4bc0414651df951c3e1bc"],["/tags/网络原理/index.html","7297fd698589db2f35872e1be7e7e148"],["/tags/肝脏分割/index.html","35885fec3f2938956cbaacf960ac5734"],["/tags/计算机/index.html","1c38bb9f2dba5593a08be84510fd9bb6"],["/tags/计算机专业/index.html","3f509e34fcbb66b734393c2d00ace681"],["/tags/计算机网络/index.html","358c332f1eeacbc28b1d66e073a3d205"],["/tags/设计模式/index.html","0cbe59d881dde9da6eae81cb1d6f7d3b"],["/tags/贝叶斯/index.html","2d42aff514ea5d92a9a7a8bb05b366c4"],["/tags/迁移学习/index.html","709299e0bf5338eed618665ba1788bfb"],["/tags/面试/index.html","d46a8644f40c2280fa13b2a3bf1909c4"],["/the-way-of-pragram/index.html","92c189c0e60e1e2b753ec50127f2d86b"],["/untiypro XL安装/index.html","01375fe380a2688061a77a4b162d717b"],["/video-websites/index.html","88012a90b98be25cf3a13bf387b58f0f"],["/wechat-fans/index.html","43916e8f3993a904bf5eec4fc56f522f"],["/window-run-VTK/index.html","4d24ec442e5f8d206aa2af1a602cc593"],["/xshell-connect-Linux/index.html","563e974c834235e067bf60d5eb4ae3c1"],["/‌Accessing-the-Open-Internet/index.html","4691c01015ba3ffc87a32ef87d122d42"],["/《Java高并发编程详解》，去大厂必看！/index.html","00a020656a923c707aaac345520d76b9"],["/一分钟没了 1.5W 。。。/index.html","dfc2d3ae297e7780f2216f7da3b14d7d"],["/一条高产爆款内容生产线/index.html","8ddd4735331e9fe54b85cf5e861cb87c"],["/为高考学子推荐的六个就业前景广阔的专业/index.html","606a2ad0a7d8a87ff2d7a8d4183a7773"],["/互联网赚钱机器---社群/index.html","13a07a7e71e2a13c1c896aa60f5ceca9"],["/你们常用的工作方法和思考方式是什么？/index.html","8da2a9f0749d62868cb76102d2f8d3e2"],["/关于环境配置的一些事/index.html","8186ef754d6a3925255a3a03e87c4f1e"],["/准备了19w！搞事/index.html","e1ccf49369c76fda187358e951c681a7"],["/几个很重要的感悟/index.html","d4e2e8bf34eb7abcf6807b66b87308f1"],["/分割ROI篇/index.html","29f654a53d1b5b62957c9b0209e5a8bf"],["/分割精度说明/index.html","910cee71e1cebadf42629ddf91f5cf87"],["/分块程序执行/index.html","71a7757ff4f1a7ab4b54a13a6f6d802f"],["/加班公司黑名单！！！/index.html","16ec0da7e857304747e512cb78c7ea5c"],["/卧槽，上知乎热搜了！/index.html","84a8a7aa9fae1c30b0830b82a51aec5a"],["/卧槽，我的小破站爆了！/index.html","e269b67589f23a24dcef7b533d9384a7"],["/卧槽，我被盗版了/index.html","df73815da630fc57919e190c05519d81"],["/卧槽，还有985大学在大一上C语言课？？/index.html","5fffc3d4af87958462945bff4c414999"],["/历年微软面试中出现的leetcode算法题/index.html","5b50445a5988882a4e61f919b740b9b9"],["/去特斯拉试车了/index.html","4e1702b12cb3e88b0903763d09b1e61d"],["/吃苦的三种境界/index.html","2df0fe6c5cc70fffc5f56fb8ecadd551"],["/哪本书适合推荐给 Java 初学者？/index.html","435ae8cd1141f1b63b0b558286a9f6d0"],["/哪本入门级的学习数据库的书最值得推荐？/index.html","4ab39a593a46252c89c950bbe79372f4"],["/国内外常用的AIGC模型/index.html","180676739901dafd482118cf2d54181a"],["/国庆假期/index.html","4557e605f2fbb961263c99cdcacd3714"],["/图谱程序字典/index.html","4d334f07203be0fd5e21002183e0914f"],["/图谱训练与分割/index.html","4d50979057b8319d3fe927007043d158"],["/宣布一件大事/index.html","a7feb5bd18baf0efdcea156e60a13a28"],["/小鹏P7i试驾体验/index.html","27c3614291343814e5e170f97f4b88b5"],["/微信PC版3.3.0内测更新，电脑可以刷朋友圈了/index.html","915be0879b8ece3435af9a36b1d7be0d"],["/怎么更快的赚钱？/index.html","4addd618fa8926fcee25e036dc7d1502"],["/我毕业了/index.html","e5aa799c1e58ee8ba1f3731edb933ae4"],["/我！真！的！找到了！爱上学习！的方法！/index.html","f9551ccea0b9e805ec8c8e642c90308d"],["/户口的意义/index.html","19ef6ef146ea3402c25d08d9428e08e6"],["/推荐两本经典算法书/index.html","999cfbfeaa46a08ce021b048b481883a"],["/推荐几个在线学习SQL的网站！/index.html","12abd13a512a9f3181c0e4130958f650"],["/搞了一个程序员成长晋级社群！/index.html","07320be4a6bb43fa6a1527150ff27d01"],["/摘抄/index.html","9d7fd1de1bf70052d4c89984d154377e"],["/暴跌30心态崩了/index.html","591ceb425d62af46e9ce836fc6bdb503"],["/最近很火的ChatGPT到底该怎么玩？/index.html","ba9fc5c5f2e769c26cdff3ea2460d437"],["/有哪些好看的日历可以买？/index.html","b42e62c803d5a7e583b213b535b5a987"],["/服务器有啥用/index.html","3b8dd8a05e845da1b923176368bdee27"],["/来长沙了！/index.html","9ca05543ed2d5b20481e35f949ed5f03"],["/校招污点公司名单/index.html","f06d3cae21dba711595b15b552bb7856"],["/梭哈200多万/index.html","9339c4078dbab6e697f953a19dad53b1"],["/梯形图入门/index.html","7242554cd5464d731a38991a94f3d327"],["/橙心优选，凉凉了！/index.html","9954ebb74ba6cdf8a70632065bfaa9d9"],["/比亚迪汉试驾体验/index.html","e645a475535f23e18cfda9f283ab46ab"],["/清华转学成电，真的牛逼！/index.html","0c41ba534e3877446d5490168124bed7"],["/滴滴程序员被亲戚鄙视：年薪八十万还不如二本教书的/index.html","f7736025c9e43af4b9680e1a06e289ad"],["/社群！/index.html","6c8e1a4ba9e9acbe53a57b58b2cadce2"],["/科学上网之VPN篇/index.html","14f5be14f4fa62454a9945f20fb53cf3"],["/程序员必备的几个技能！看完你也是大神/index.html","0bdec27935460e57f5f3a3efb2ba9757"],["/程序员绕不去的槛，Linux！！！/index.html","cf1134e351f7d88fdb94dc787757a7e1"],["/蔚来ET5试驾体验/index.html","97e61e24aff9d33ea328e581625297f5"],["/蔚来，牛逼！/index.html","48d14c0e57ecb657bd02b7a0eec733b6"],["/被录取了/index.html","032d4075ed57423ad0cd2881eeb09124"],["/被找事了！/index.html","b82a7426fd30950d59d88abb10ed0d4a"],["/被拉黑了。。。/index.html","7c0f95148c13a5ea03f1f634bdec5e17"],["/被车撞了！/index.html","235007a61bd2bef77342cf51ffbfb477"],["/该如何选购固态硬盘？/index.html","66c59dcdaa6d561fc7085bfff0956b77"],["/这本书一定要看！/index.html","d1882bca5d59a4341340ac5fc2ceb5d4"],["/选Java还是C++？/index.html","cdd704bf94ead4486b558ca9ecb61d5f"],["/那些让你起飞的计算机基础知识/index.html","1dddea1eace14a25fccbe24c3e4e0d62"],["/靠这几本算法书，成功拿下大厂offer！/index.html","5fc53b1935c69c1f76b645308974e919"]];
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
