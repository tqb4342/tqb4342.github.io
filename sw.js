/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/0010-city/index.html","7a1386dc18cdc187fde279573a3507c1"],["/10-algorithm-book/index.html","cbe9fc061d1531eff85894802188085f"],["/10-website/index.html","54a522392356400b472b15b7392ad947"],["/100万的小目标/index.html","2ec02937ba082125eb00ea693286aa0a"],["/10w+YYDS！/index.html","93095dd36b522f24c5588f4dec9f37a2"],["/12-technical-tutorial-sites/index.html","4fa7c4e1719e1c19301d7eb6e868d101"],["/2 6 岁 了/index.html","9eb4e784cc17bfb9e2c572263bb966b7"],["/200万，啪，没了。。。。/index.html","fc66dd174dfde98d4dda6ee55a39f90d"],["/2018ECCV-Paper-DL/index.html","df657ddf7e724c5817805b0a76779728"],["/2021年固态硬盘选购最新攻略（小白避坑指南）/index.html","90dde1fd8f2cdcb631c45ae7dca2908a"],["/2021机械键盘推荐/index.html","cdfdebebc1a865fc3186dce6dcd9b896"],["/2025-07-15/index.html","9a8d2d0645cfbe4b1739be1712450dba"],["/27岁了/index.html","d870dc13d58a095b12b5bc55d9f19d92"],["/3D-Convolutional-Neural-Networks-for-Human-Action-Recognition/index.html","8f4f35b1cd4567f632c142479c4957c3"],["/3D-Deeply-Supervised-Network-for-Automatic-Liver-Segmentation-from-CT-Volumes/index.html","dd3ba26204493e9025b72ae3329f6e84"],["/3D-Unet-Experiment-notes/index.html","612dc0be555712ee43e28f20059a3cb0"],["/4-Software/index.html","b65a62058bf6acf9f66a687b818c0640"],["/6-website/index.html","b6be952b3b935bc485a5f5c508a9b120"],["/7-terminal-tools/index.html","219f6d87200fbde95083e68b102e13a1"],["/AIGC中典型的深度学习网络/index.html","8eab67725045a5b890cb7e6431f4b314"],["/Agency-model/index.html","87192c2eb15b7345cd0fc8ef72035e9a"],["/Algorithm-brush-notes/index.html","5e387cbda59041a4129a2a0e008012ea"],["/Ali-recruits/index.html","83a96a96102416eb4d00eba586339721"],["/Android-VPN/index.html","676241555b7644ec6ca6a70b2cc29cb1"],["/Android-open-internet/index.html","a64587558860b8f6698eccac8d8c2cd9"],["/Appearance-mode/index.html","521a57816803d07eeada7dfac51e5b2e"],["/Backtracking/index.html","eaa44ead212256b84ec217722f490c35"],["/Baidu-Sao-operation/index.html","e0b0dfe9b3f0adc422c3e476b28b501a"],["/Batch-Normalization/index.html","15ac87d01ff6d299b6ba374ace6aec71"],["/Best-AI-tools/index.html","ed0fa8d700edd02466dd7dc42fce4b76"],["/Bias-and-Variance/index.html","5cdf3a13e5cae422705d381bbfa51c28"],["/Binary-tree-traversal/index.html","9c1dbb6db5b52d6dc4e9bfac03559c9e"],["/Branch-and-bound/index.html","bee0a80f06c748849761e906b7dff8f8"],["/Buying-computer-for-the-first-time/index.html","dae6bed5a702755f1d9108afd81b0a4d"],["/B站向北邮道歉！/index.html","c7dab6c61d4597c9c4e559f475aaa44b"],["/C++-string-function/index.html","36466c4a4649bafe8f0629b623e927dd"],["/C-Java-DevelopTools/index.html","e91cb009748ec912cb0505b0fa574e35"],["/CS-Classic-Books/index.html","d965e0cdb78fb200a6f081881fa5a030"],["/CS-network/index.html","640d8d1bd966065a302c738bba83b5c9"],["/CSBook001/index.html","961254e6a8f58aa838f25c2c36ca50bf"],["/CSBook002/index.html","1e34199ff2ac36f7ae7583aa598bf500"],["/CSBook003/index.html","f332af38e8561f746bb9b55dc4da5a9e"],["/CSBook004/index.html","5c8718aa3683fdf1497daa8d6e197737"],["/CSBook005/index.html","8a267fc1e6be3b8ad2d3465caa0cc03b"],["/CSBook006/index.html","dffcfd4fa0ca15602001b22d1e84995f"],["/CSBook007/index.html","fbb264edcbeb30062f3857aa86db222e"],["/CSBook008/index.html","9ebd534cf9cd44ded2b0af73c210f23f"],["/CSBook009/index.html","74467364744fce57f2ba60febab70ac2"],["/CSBook010/index.html","b39ad67c8b4f29fb125d09052d10b6dc"],["/CSBook011/index.html","1b57935cc047c9c649934df2ff107c38"],["/CSBook012/index.html","a03f5559568638b8537496c30736321a"],["/Changsha-really-fragrant/index.html","c5a5d591815a7ec0cd5edcdae8eab819"],["/ChatGPT-VPN/index.html","5a46e639bc6480d819b468aa15a19d57"],["/ChatGPT/index.html","e782bb59c72cea4533b0fec1d009bdb3"],["/ChatGPT！王炸级更新！！！/index.html","7eaa141e8cfcbbe31fd66eb81938ec0b"],["/Chrome-crx/index.html","1418a2129d7e2cf91536a2a3e2fa2cf5"],["/ClashForWindows/index.html","c291aa0ed342b5a58ab9f91b86b8d21c"],["/Computer-Classic-Books/index.html","ec6d52e23987dbdba61c04664d9a484c"],["/Computer-for-another-major/index.html","99bea52c5c718edb81e246d04c50712c"],["/Conditional-confrontation-network/index.html","8cb0b80333a5617422fa4f950570eec2"],["/DNN/index.html","01d37ebdadbfe010e004c7329e7c06fe"],["/DSN-segmentation-liver-experiment-summary/index.html","64197766e042d1c037e4b9bafa80f47f"],["/Data-enhancement-elastic-deformation/index.html","7026c7de04e86094149024b4a58d0d00"],["/Decorative-pattern/index.html","ba2e8a978d764664cd8e4cf45af298a6"],["/Deep-Learning/index.html","9bf88883bcae6608c2ef4caa0613a584"],["/Deep-learning-and-medical-image-analysis/index.html","5d1e820cd4f21e66876ab037d14bae61"],["/Deeply-Supervised-Nets/index.html","04a3ad6477b8737d24719646fe12da8d"],["/Deformation-model-based-sparse-representation/index.html","222472e7056cbaef9b585a156f9d982e"],["/Discriminative-and-Generative-model/index.html","a8fcce67001462107149a02dad63949f"],["/Distributed-transaction/index.html","143245a05a8b564a5647a3f63ca7da27"],["/Divide-and-conquer-algorithm/index.html","da769740b64e673e612f0cc44157272f"],["/Dll/index.html","183302519d647910293364bcbae3c46a"],["/Dynamic-programming-algorithm/index.html","6cf5ea94a0de70ca854f64d7455d3506"],["/E-book-download-commonly-used-by-programmers/index.html","88a28f03d3758683bcde1d1a18bc80bc"],["/EditPlus软件的安装、激活和配置过程分享/index.html","32d086485dbddfb2c67ffb88bfd6dcab"],["/Eight-sorting-algorithms/index.html","fbc465d2e518e4cfc34546893409bb19"],["/Encryption-Algorithm/index.html","fba1139658a61866ac0854edfffbed6b"],["/Eolink/index.html","531f7858bc4e3d2f30635f761fa80a8e"],["/Factory-and-strategy-mode/index.html","add47da27b0d12e21acfbf87e57ac750"],["/Foreign-technology-blog-community/index.html","1638f73812e16e7da6feff10e6712fb7"],["/Functional-model/index.html","b77bf16ecc9236369437b82fe0cf594c"],["/Fund-type/index.html","415afb570007f2ec7a060153fe8f6ba3"],["/GPT-4o/index.html","15326aeb5e89951bcfd9f294b8dc52cd"],["/GPU-medical-image-processing/index.html","2688bb4cd74fcef22f501dd251c0f1b7"],["/Gemini/index.html","572f5ba743b984236763d115386ba795"],["/Generative-Model-of-Unsupervised-Learning/index.html","bee612d819b1e8cad2a126a0afbe3922"],["/Git-Learning/index.html","a6a56076948d8cd9619485bee4617e27"],["/GitHub-2FA/index.html","228ade85b2e4760787176aabdc0f3c9e"],["/GitHub万赞，程序员必看操作系统总结！/index.html","da0b04b9148e6bf9d30754bb2f0f17f0"],["/Golang-book-recommend/index.html","7a3587823be404166a2a1b5bbad68216"],["/Golang-learning/index.html","5fe2094ca04d2b4d5ed8d85f10358e09"],["/Gradient-descent-optimization/index.html","121bf6e454d2124e37248b04204d6edf"],["/Greedy-Algorithm/index.html","77db7ef8bf3d1b09e45e475c53939e1a"],["/HK-bank/index.html","2871d030080403a4fd66385abab15188"],["/Head-to-head/index.html","86dc77c3da19b599e803e06bde5221b3"],["/HexoPage/index.html","ca8543b6f4aa75f73e31da6dea340821"],["/HistCite-Pro/index.html","3be691bbb29a569a7b014bd45b8e1003"],["/How-does-the-program-run/index.html","832e53c5e78e33c3e6f452ebe9ae012c"],["/How-to-judge-whether-technologyisreliable/index.html","77f59f52434ef15ba4661a37c2cd88cf"],["/How-to-learn-design-patterns/index.html","0e604a5bcd7f472a81cc65617228da4f"],["/How-to-learn-design-patterns？/index.html","c212ac271ec442b3f6ab4f16205107cc"],["/How-to-teach-yourself-programming/index.html","b362e43fa1c21962f3fed747f51830e9"],["/How2learn-Python？/index.html","fa480dda54b680eedd653d41150fa886"],["/IDEA-shortcut-key/index.html","6a1254c5a0dabe8ffc1733ce1eb3febf"],["/IT-interview-basic/index.html","c62fd10611fd20b726f0ef01de01e564"],["/ITK-VS-install/index.html","a16a0cc823ad153291cb340efc27d7f2"],["/ITK-VTK-ItkVtkGlue/index.html","340209665dcfb270fbfad97c3599c76a"],["/Image-processing-plus-noise/index.html","445b7213cf5979aa6ea3ca56ca7e9437"],["/Inception-Going-Deeper-with-Convolution/index.html","51b4cbd2ec6a520e9f43e2398e1f9253"],["/Java-GC/index.html","00f810390ae7c2ed49ea474b5fd70e63"],["/Java-Servlet/index.html","5babb091b6663974496b175434e43120"],["/Java-array-and-collection-sorting/index.html","fbdeadd29c1b68cf0a033596b2e444b5"],["/Java-development-tools/index.html","90c3c21e16c6fc445bd5802fe04c420c"],["/Java-eight-data-types/index.html","5f3f061ce065a650f1b23e23380f28f7"],["/Java-interview01/index.html","d1534d7804fe7e59b8e372d70fa4ebdc"],["/Java-interview02/index.html","6e8104c7b1f2cab85f8d90e3eb3dbac6"],["/Java-interview03/index.html","a282c531c5202a4f89c821a3622f2d2a"],["/Java-learing-map/index.html","4b1c3dfd54286f14325d0cb2a6942dba"],["/Java-learning-route-map/index.html","fbd0e8881ffdc9ec5a87491bd2d4c7aa"],["/Java-memory-area/index.html","b2a217f04c4e252597aa89a9e08c7fcc"],["/Java-memory-model/index.html","b8b95f93084dca0f3b8222f14f45337b"],["/Java-multithreaded-learning/index.html","48d7708c882eac041eb69549cbe82844"],["/Java-project/index.html","80701bf69a5a5d9eaa01481c39298d19"],["/JavaWeb-Chinese-Garbled/index.html","c6033661544ffb58a8e0b0b47797fae4"],["/Java还是C++？/index.html","40e4784af5c76c1ae32ea480aba34270"],["/Kaggle5-step-guide/index.html","063e66412da576a5e447a9403c7ce4b1"],["/Knowledge-points-of-Java-garbage-collection/index.html","72995ae6d2397f2c435e5e90a9542f97"],["/Layoffs-and-Hiring/index.html","3535f1a6162b17c883a4dbf3131bf104"],["/Linear-regression-of-machine-learning/index.html","e717bcc4ec67d09c57a553fe39f4ae13"],["/Linux-Compile-C/index.html","60e1668be0529f26b7d1bb73046b7a26"],["/Linux-ITK/index.html","5b00e8d0f0af6b62a66a8a21827f5b8d"],["/Liver-segmentation-of-sparse-components/index.html","ef2f803f97c80e2cebdb67ac14e691c6"],["/ML-EBook-paper/index.html","d0dc3f0fa976d6188c2d6d7b401dcc45"],["/Map-uses-multiple-maps/index.html","8d83546b64aa161e9221ca14b8239929"],["/Matlab-Graph-cut/index.html","ef3f3e2563134292a19d0eee6ee31de0"],["/Maximum-Likelihood-to-EM-algorithm/index.html","337283d73bd410014e49b2f93635f147"],["/Mean filter and median filter denoising/index.html","181840467863a6c4585ce1e78567da4b"],["/Medical-Data-for-Machine-Learning/index.html","1087bc4df71709ba72bcdb0fc13a33f2"],["/Medical-image-analysis-deep-learning/index.html","fbcb0569c74ec7428ed0e98aa4bbd977"],["/Medical-scan-image-processing/index.html","99e174b9f55e8536f1e92329b29f880f"],["/Merge-sort-algorithm/index.html","47341c197c953b7bcb844164297bc804"],["/Monthly-income-2W/index.html","b47775ba3aa3c3b1a29241d94ab845d2"],["/Mysql-database/index.html","0d9db0fbbbd924ce40dbedbe32ffa0b6"],["/Neighbor-Embedding/index.html","009fdd55f6ca8b96fdd850929a1e063a"],["/Neighborhood-approximate-random-forest/index.html","6f1119e1dcbb0d1b1cefa0d2c6e5227c"],["/Net-and-official-documents/index.html","754522037414e2b2a4c6a1ee34563026"],["/Netflix-VPN/index.html","eea8fd9b13e24e6583fc3ff9c6b2955a"],["/Network-principle/index.html","59eddc00422528585cb068a029aa67e6"],["/New-Hong-Kong-stocks/index.html","b8d01170de157cd4dba9feafd3bbb6d3"],["/Nice-to-meet-you/index.html","0cf79b1993fe29b89094c3eeb07c2d03"],["/OS-processes-threads/index.html","b872711407f2881c65f10bbcc5fe86cb"],["/OS-run-environment/index.html","d835de7ed5171927eff69bff89265217"],["/Open-Internet/index.html","aca0f3ca4f02643e938fa790896050c2"],["/Open-Internet2/index.html","b6c32c4c942e46a890ca7610d0e72ac7"],["/Open-source-community-and-rewriting-website/index.html","d3de5954a6aae18ffff4695679920aa7"],["/Panoramic-image-stitching-based-on-SIFT-features/index.html","ad143f54229fbece656b9c8c2f879533"],["/Parzen-and-KNE/index.html","07cd8bab541c0499498b197f53a933d8"],["/Personal-technology-blog-site/index.html","df477c2e89f4e909d9d645f8752f2ec4"],["/PicGo-Gitee/index.html","534fe89a7d9a2fc622a069a4fd25e3a6"],["/Programmer-treasure-chest/index.html","551a682fa659267823a46ae09cc3d19f"],["/Prototype-mode/index.html","049834c1aa26324aaf98d0230ae19199"],["/Python-base/index.html","7e34e1d5036550b054fb905b1382bd00"],["/Python-crawler/index.html","7dabb99ca702cc0e54ba5474760fb782"],["/Resume-revision-suggestions/index.html","b231dd3aa0a1142ba2ee99eac0bca982"],["/SEO01/index.html","469d5a5da9d8a40038b7c5f363700cf5"],["/SEO02/index.html","a9394492915cf89119485f824560d16b"],["/SPHARMPDM-MEPP/index.html","36b4504faf9ea7328e8232d9dfa21794"],["/SVM/index.html","e308174e7ab6a5ef5642cfc5c7188dd1"],["/Seata/index.html","566cd68bad567dadfdeff5156e4207b2"],["/Semi-supervised-learning/index.html","333a07b96fcf037674b8bef70d1d0f71"],["/Sequential-model/index.html","0a32612329102301863ed1256db0932b"],["/Shape-Based-Human-Detection-and-Segmentation-via-Hierarchical-Part-TemplateMatching/index.html","21f288a2d7c37fd60e76a08a77a8b6ba"],["/Spring-basics/index.html","c662f0186ad13528b11be399a069eb6b"],["/Spring-integrates-hibernate-Struts/index.html","bb08b28c2e45b90824a298e47e4edfba"],["/Structure-learning/index.html","37f7cf5839382f07139ceb2ca9dd54e1"],["/Suggestions-for-self-study-of-computers/index.html","2b50b90021bd7d156dd9ed500083ceff"],["/Summaryof-HongKongStock-Account-Opening-Links/index.html","6688899d47fd7a03673e004067c7c088"],["/TCPIP-detailed/index.html","97e26289135c31c33ab8bf5414003499"],["/Telegram-VPN/index.html","d51cedbf3246b5ece9a46bcb243fd3f6"],["/The-essence-of-shopping-festival/index.html","8f3f85c78efee8b6c7b0d7f2d8bf8a80"],["/The-most-important-investment-in-life/index.html","0f13589607ed2f0b38bd6201703f5b6a"],["/The-most-successful-nvestment/index.html","9391908acff919681535795ff9edd8d5"],["/Transfer-Learning/index.html","b6936b6af5c64c00be0a0ee59ad29073"],["/Transfer-to-computer-major/index.html","d56f7f858567e1d4c7405de55b518e1d"],["/UNet-Convolutional-Networks-for-Biomedical-Image-Segmentation/index.html","59166e85493167067cb96e355f477e9f"],["/Ubuntu-install-sougou/index.html","8a9dcb465ddb0e0ffef1a3df0c055e55"],["/Understanding-of-paying-for-knowledge/index.html","0cbd9c68a85c13d827318b6948b4f4e7"],["/Unsupervised-Learning-Linear-Dimension-Reduction/index.html","fc84b27bb638e314d13ef88e2ada23df"],["/VPN-HELP/index.html","feb245298dfca1546731aef3e6ef66fd"],["/VPN2025/index.html","7083688d272eae90ed959e2b2443fe3f"],["/VTK01/index.html","93b40307f168cac79a20655c06e63b6d"],["/VTK02/index.html","ec5e40651fff35da0b8c644e01441e38"],["/VTK03/index.html","e4245c0e5c17bf07d3c5383d36695d9d"],["/VTKRead-write/index.html","842fddd5cfbf960f659d2ab730846561"],["/We-are-all-good-kids/index.html","34943a3517e2cac1c6a2751e34777efb"],["/WeChat-80/index.html","df7d8e4f8ada99ea8becd8f0abe8839b"],["/WeChat-red-envelope-cover/index.html","770109ec7be18d85fbada8bdf4692a0f"],["/What-is-crawler/index.html","626a76fde67f3da3b7e0274c4c6fb154"],["/Win-OpenInternet/index.html","ecf2d479e4df8aa63bfab86ce171c0d4"],["/Windows11-2kfans/index.html","c0eecd7368bd65067b2ec144bb6ddef7"],["/Word-Embedding/index.html","367a3970c1cff423473737a29adc1775"],["/YuanShikai-and-his-Beiyang/index.html","0d07d72d72b6f0231912616697fcfc10"],["/Zero-copy/index.html","cd72e4389e17dfd9136f3bf99ef5c17c"],["/about-keras-model/index.html","a5b41fd3c4f9714263729592128608d8"],["/about/index.html","f2275d2ba8a8e47c1b4905ef63fbfd36"],["/algorithm/index.html","97f31b0fbf56cabe99a88bc865934b60"],["/alibaba-Java/index.html","8a208ed7a4092b8ba5826cfd529dc856"],["/archives/2020/01/index.html","d6dfde6316a8fa3c792eedc1b95b6d08"],["/archives/2020/09/index.html","047c2a5024ebcc735a5d3d5f6dbb5e13"],["/archives/2020/10/index.html","c5145e4e0e86fc664ed48f1cef8c2d8e"],["/archives/2020/11/index.html","5d0ceffbb590ac2c86273b98e4a5b0f4"],["/archives/2020/11/page/2/index.html","b73af1e836a479182b1eeb02cb410920"],["/archives/2020/11/page/3/index.html","386483a47f2451cecb6bdea6ef34e3c3"],["/archives/2020/11/page/4/index.html","8bc6e068209ff317d410e7d2a3e1944a"],["/archives/2020/11/page/5/index.html","28f0edbe650644646fd406de4bf7cd0b"],["/archives/2020/11/page/6/index.html","62ee707178a6f8edbcbdf18788e01102"],["/archives/2020/12/index.html","5af5462d29245a76ff6d416baad67ef7"],["/archives/2020/12/page/2/index.html","a39108863df7f4855c657938c3c5f311"],["/archives/2020/12/page/3/index.html","ba5819114c3fe95070580956090f641b"],["/archives/2020/12/page/4/index.html","435208148ece329e8f03f77fae4269e5"],["/archives/2020/12/page/5/index.html","c89da6dfa070b022dc624c46a3d38434"],["/archives/2020/12/page/6/index.html","c1efbe98bff49873946e334cbaffa334"],["/archives/2020/12/page/7/index.html","71988a01e8518d0a727ca799c93b45cb"],["/archives/2020/12/page/8/index.html","0235ebf484bf546ab81ba7ded28fa85e"],["/archives/2020/index.html","77ee7d979444c01bbbc9590f3d5ce33a"],["/archives/2020/page/10/index.html","10a7c6a363af5f55b42161c23f580788"],["/archives/2020/page/11/index.html","ede762e4053d203ff3ff9294a2cc073e"],["/archives/2020/page/12/index.html","e7652f92570e21cbea33108f696f8fdc"],["/archives/2020/page/13/index.html","bcf4b3f73d92c93f5ad92cd8aab8b830"],["/archives/2020/page/14/index.html","f02e25977de8f2669d5566f5ef85fd3f"],["/archives/2020/page/2/index.html","d4ef7f0d42134a565d5f4bd27c3a5f76"],["/archives/2020/page/3/index.html","38e4a0a406857df4293d7a4ee7ec7d51"],["/archives/2020/page/4/index.html","f6f222ef4ae4ba1ace3bdfe774d205d7"],["/archives/2020/page/5/index.html","c210d13a336aa6d7331fd0d137d43cb8"],["/archives/2020/page/6/index.html","9e2dd3351146f10bc1bf8bb90859dcc8"],["/archives/2020/page/7/index.html","ad14b1fe7dea9686c95a42b1d9e9aa12"],["/archives/2020/page/8/index.html","3761cfec377324aba4340d0fa70ad491"],["/archives/2020/page/9/index.html","8f3892bd8072e4ed421719a25b16199e"],["/archives/2021/01/index.html","1d535d72b9547033ecad453081a93f7c"],["/archives/2021/01/page/2/index.html","534dbbee31c8b69b474519d23a5b4c31"],["/archives/2021/01/page/3/index.html","acda35de8d0a383be536f8ddffbe290f"],["/archives/2021/02/index.html","2fa515d5150cf5a94ebaec1c8784bc8e"],["/archives/2021/03/index.html","738b7fa5a1a20a20a3e73ec746dcabf6"],["/archives/2021/03/page/2/index.html","2d9c87f210c270123ffec482b9631308"],["/archives/2021/04/index.html","b8e768c8d8cf5c945e46d1e581f4ee1f"],["/archives/2021/05/index.html","0cfa2bd3d67e3a0f5353d5cd9f970162"],["/archives/2021/06/index.html","466f57f0722470e1e050424ac95c3147"],["/archives/2021/07/index.html","b963734c9ee118a4174d0fcff472337f"],["/archives/2021/08/index.html","748d17a77a1c908d80428bffc772599a"],["/archives/2021/09/index.html","36c6f3676f60b4d1a0c8704092560c69"],["/archives/2021/10/index.html","d53de09363f5b278e44233eb878f9e7f"],["/archives/2021/11/index.html","cbe311cfd0ca594ba50703107e40e709"],["/archives/2021/12/index.html","f71d8334852c8e870b0ec3655a68ee81"],["/archives/2021/index.html","bf3a699a34b3e8c7aef29eb701b8b062"],["/archives/2021/page/10/index.html","517bd238537690633a1c15b0cb087807"],["/archives/2021/page/11/index.html","7502c55ab94a7463ba7c1b6ea37cfb5d"],["/archives/2021/page/2/index.html","ac3fa94345a81abb21a47f49fd43b327"],["/archives/2021/page/3/index.html","0f128ad906cd36f1392eb9fee440db02"],["/archives/2021/page/4/index.html","a99bca534c85a5e7036606f80e9cb517"],["/archives/2021/page/5/index.html","3d7bf25c7db006e97ef6d40c81f93d23"],["/archives/2021/page/6/index.html","cdcb466a59418feb17d02f60ec4fafe1"],["/archives/2021/page/7/index.html","94340858613d108a2b5fde772edfab47"],["/archives/2021/page/8/index.html","1a4bab6f98c0e436dcc6d4695d91c530"],["/archives/2021/page/9/index.html","2bf30717e30567018a6405097a8efcc6"],["/archives/2022/01/index.html","c7995409ac88660cf66bf921380653af"],["/archives/2022/02/index.html","28b5b69487b0e0674bf1cf2bfe509aa8"],["/archives/2022/04/index.html","60abf4697c857aa8ec3c2a3d8d29dc29"],["/archives/2022/05/index.html","19211f1eba3c3262bbdd6badaaadc337"],["/archives/2022/12/index.html","b5795341770c12e91db284e73e456f6c"],["/archives/2022/index.html","8478a232a2386d49384dff520041ef52"],["/archives/2023/01/index.html","16f6377735396e9061ea62fced7a4da3"],["/archives/2023/02/index.html","0e12f7a3d5baf5563c8f99c6ed218dcb"],["/archives/2023/03/index.html","496d8e5c2bb3f6a5f435d12d39d89410"],["/archives/2023/04/index.html","0df80143019f85f8a51731b6db34ef6e"],["/archives/2023/06/index.html","7ad0d007bfb45e2f7116ee77facf78f6"],["/archives/2023/08/index.html","8faab24d96a39e5ba60646b5cb0efbe6"],["/archives/2023/10/index.html","0ba88882e85157544c5d46495b2ea007"],["/archives/2023/index.html","2febea3467de264881a3b540aec6fb25"],["/archives/2023/page/2/index.html","d648cc437426f4ee0590cb17279a0ade"],["/archives/2023/page/3/index.html","b21be671d5dc03c7f4898085b72f3708"],["/archives/2024/01/index.html","1b1981a8e778a9a051e5436802382b18"],["/archives/2024/02/index.html","a3f04cba0c71f869562543814f4413ee"],["/archives/2024/index.html","dbb255c2349224a7f5dc016d20e41381"],["/archives/2025/06/index.html","d3dfe08452a230777cd92965ec10436e"],["/archives/2025/07/index.html","b537aa2561647f8fba460fe03476a2d4"],["/archives/2025/08/index.html","4c34d120cbbb3617484a3dd315e2298b"],["/archives/2025/09/index.html","4bb43ab9ebb571b4a02f315f4db1351a"],["/archives/2025/10/index.html","229d06a94e4489961660bf29d84cf2a7"],["/archives/2025/11/index.html","94c87938af4dce5fe5d33479e4370ea2"],["/archives/2025/11/page/2/index.html","52c905dbd0e1e19c062ec79ff65ce253"],["/archives/2025/12/index.html","19997c07a02f49fca168fab2e3abee6f"],["/archives/2025/index.html","2c7e8a376b92aeacdf2820a3529a0d72"],["/archives/2025/page/2/index.html","d6a7cc63231702083f6c4479bd975f65"],["/archives/2025/page/3/index.html","2c7f8a9e2e0c25c83d74e7b450726f9e"],["/archives/2025/page/4/index.html","84b51b483e647fda755f5e78de10a465"],["/archives/2028/02/index.html","122836aee29c0f3f6633cf36f68e341b"],["/archives/2028/index.html","782b66b8cf489bf216afc1de4c55dd58"],["/archives/index.html","771777e3ead3aef7ee05881f9ea902d3"],["/archives/page/10/index.html","77d9fb156e31a9487c77c8bd0750a860"],["/archives/page/11/index.html","ad2e1952bf23bbb11d9cd562bc685a32"],["/archives/page/12/index.html","ca36683a1ee0c7a1ed94e0ff55f63e66"],["/archives/page/13/index.html","02e981be020b3663ca43574c0f787590"],["/archives/page/14/index.html","1c9de390ff1494afe529c162bed08312"],["/archives/page/15/index.html","4ed5bd3dd0b45e63f18dc92547b3e9f1"],["/archives/page/16/index.html","38599c0d920b3c0d2eabcf107afdef6d"],["/archives/page/17/index.html","47ea7bc8d49f0eb1d7d3570ba1e978e4"],["/archives/page/18/index.html","7323a0f0ef2ac801dac850f787e7ff6f"],["/archives/page/19/index.html","42bd3671eaabfa8a4e702500b5e67f0b"],["/archives/page/2/index.html","850b256bc11ec9696164ab0c1495a251"],["/archives/page/20/index.html","349af47d4afc9f2c24fa3b660e5f9e37"],["/archives/page/21/index.html","66472a9793de1270aecc22d5f5e14cdc"],["/archives/page/22/index.html","002dcdd48140490c80b587fa105d7e9e"],["/archives/page/23/index.html","b2a06d27465a83e67a78461dd350d516"],["/archives/page/24/index.html","06981f5b6f96d43e349f30f289a591e3"],["/archives/page/25/index.html","98ab12814601916febf45d57d48e70a3"],["/archives/page/26/index.html","80b6af3604ff3ff8edceecfd76f7487e"],["/archives/page/27/index.html","b85d065827f2a5e6439f0040f05b3361"],["/archives/page/28/index.html","562f34ba5c4ffef51f69f9631b99622a"],["/archives/page/29/index.html","ec59e8e745d0e45935cfb14e761b540e"],["/archives/page/3/index.html","dfaefd646eec9cd93fbba71cf5c818a7"],["/archives/page/30/index.html","7c1653ff78fdcbb5c3e570be62ac2e92"],["/archives/page/31/index.html","80cec6b960479a6c7b58d3fcbd74d1c1"],["/archives/page/32/index.html","46327631ead946f972ba71dda4b355f8"],["/archives/page/4/index.html","3068e1ebcdcc2cf6519cb67026c70709"],["/archives/page/5/index.html","875d7600aeff15099b3f38442be7ac9f"],["/archives/page/6/index.html","6d22a35cfc1bddac15984a52d46437ee"],["/archives/page/7/index.html","30f4fcb6d7ecf7a08f066d54e23f615e"],["/archives/page/8/index.html","efa39a7de1c89450d72273f77db52055"],["/archives/page/9/index.html","b39d1e4a731ca70d5de73df34bc3773b"],["/baidu-search/index.html","18ac4576043733ce4a32f4f65f7f64a5"],["/baidu_verify_code-Hh2fKNlEB1.html","51ef09c97517321903863d6b36f5f2e8"],["/be-a-programmer-instead-of-a-code-farmer/index.html","e1fd8d01b5b085c84c0128a779cdf489"],["/bought-a-house/index.html","21cd19c0783e250ce128faff3453985f"],["/categories/C与C✙✙/index.html","4ebc47f55283aba1c4257f9f3a148498"],["/categories/Go语言/index.html","33d4a79f8c88a7c241a3eb813369c314"],["/categories/ITK与VTK/index.html","19eeaf4bda14860d937620ed47474e5d"],["/categories/Java/index.html","4cd04c386b5b53a6110307940ee8f70b"],["/categories/Java/page/2/index.html","b2d01ad779a350c8d917cb79a49fe502"],["/categories/Java/page/3/index.html","9ed1225424238b0f3922a0b8b0a41e39"],["/categories/Linux/index.html","8ee8f5a89477b654f0c6cc2b6e5204d4"],["/categories/PLC/index.html","0c78056291a446c612f25cc3849d7bc3"],["/categories/Python/index.html","3fe7b7a49f0bbca92713339d575dedb2"],["/categories/SEO教程/index.html","2dbd96737d1de6683adf755dbe3c24f9"],["/categories/index.html","131c96ca0afc28229830238bd90bed27"],["/categories/图像处理与机器学习/index.html","9443a17bdda7bad31a97cf0da291ad78"],["/categories/图像处理与机器学习/page/2/index.html","1e73188cbacc57194248c961a4979314"],["/categories/图像处理与机器学习/page/3/index.html","53732af511cf41665542664eb3b2913d"],["/categories/图像处理与机器学习/page/4/index.html","8f05a33574a72bb73d8dbee9b1e76cbb"],["/categories/图像处理与机器学习/page/5/index.html","396f3f826a301ac4f12480fa67ad3abf"],["/categories/图像处理与机器学习/page/6/index.html","98ac84dc5a66ae8c091c1cc04c8e253b"],["/categories/工具/index.html","491ad50a8cd44bcb20a64f3318f99058"],["/categories/工具/page/2/index.html","3cecd4b078685f564fc0c2bd53372d79"],["/categories/技术以外/index.html","3401d0d67d27db8c2a6cea60efae8623"],["/categories/技术以外/page/2/index.html","d23d14959a3b9a6617c73a0b35cc093d"],["/categories/技术以外/page/3/index.html","e02b6b8e8c6df824f4ca8b8b65f66b05"],["/categories/技术以外/page/4/index.html","44a3c949f98587bc206d2007346edd1e"],["/categories/技术以外/page/5/index.html","fc5aa3eca37fa20cd13db5d4aba9b2ad"],["/categories/技术以外/page/6/index.html","8f255dfcee21debc6eeb17762bd88a23"],["/categories/技术以外/page/7/index.html","eec8766693c169ab354f16d04363a32b"],["/categories/技术以外/page/8/index.html","65d0a6b0adc3fdc19197d8b5128297fd"],["/categories/技术以外/page/9/index.html","4c7ecaac2c708ad8e6b076345d4bee80"],["/categories/数据结构与算法/index.html","36a6ca0b8ac91616cbe7e11ce8f6ca03"],["/categories/数据结构与算法/page/2/index.html","1dcf98017df1153628e025cda2c0f0ac"],["/categories/科学上网/index.html","0dda4bdbbd90d480db6c0323013b4853"],["/categories/科学上网/page/2/index.html","2917b603fdcec5bb02275cb53df938b4"],["/categories/科学上网/page/3/index.html","60600dd81ce29a8961f7db6afafc7005"],["/categories/编程经验/index.html","06c51ca98ec3fda1fba2711704d02e9e"],["/categories/编程资料/index.html","6c56303fc536a62e72a152d6a8a1ab2d"],["/categories/编程资料/page/2/index.html","698de46f9fd187fce5b023d47e42b6b9"],["/categories/编程资料/page/3/index.html","c483a1160f71b7f673307732659f5c8e"],["/categories/编程资料/page/4/index.html","44d9a9fb7a4711869e1379c6924dd2b2"],["/categories/计算机基础知识/index.html","06b53c668c72dba75f7771a996c11a0e"],["/categories/计算机基础知识/page/2/index.html","1c09ce7f3136a636fbb991c112640ded"],["/categories/设计模式/index.html","b218d3620049e0ec03963034e2b5530c"],["/choose/index.html","66b8fbd09146578fd0026fa8e228e568"],["/choose2/index.html","70cdab60b48e15fb1e627941dfde32ec"],["/chrome-crx-intruduce/index.html","818058d83cb94b8fa7a195bd3a024322"],["/clashvpn/index.html","fa25ae293c497c578a1dc9b90e3341be"],["/coder-blog-website/index.html","e035aa14b173de1c490d203308748dd7"],["/coder-source/index.html","d401993e2e221ec7e2b09bc6902207a8"],["/coder-videos-website/index.html","064c9afe6649f55649363c54b5fec532"],["/computer-book/index.html","1b6c01d960878686ff1d1bdf84e6de70"],["/computer-censorship/index.html","c55b57d66efeedbebe4b40e60da2d6c0"],["/computer-network01/index.html","094f026c6ebe8eb647d97328aabd6825"],["/computer-network02/index.html","c2f499b410b3fabaf88a767705e142cc"],["/css/main.css","bc32ad34ec4990d934c3c647bdb62f79"],["/database-Mysql/index.html","c9f540902f331b35bb695ba016b52eb7"],["/eclipse-lombok/index.html","aa773dac50abbb2d5be9daa20abbf75a"],["/fully-convolutional-networks-for-semantic-segmentation/index.html","f0100092872ec10eacf3d0f57f7634bd"],["/great-firewall/index.html","e17eafb5b0e64e45624a8b40252ace9f"],["/halfrost/index.html","eff9b2af39d55292641a89cb70a59e12"],["/how-to-signup-chatgpt/index.html","1be579f8d4e78a8ae929155b2ef1d208"],["/how-to-use-Gemini/index.html","4d70537c205a2cf42b4a7866bab8b820"],["/index.html","f16aa3fff8078e600f27ea8da4503f61"],["/ios-open-internet/index.html","5e4afbd8cd989bbe68624b273f63ccd2"],["/iphone-open-internet/index.html","5e6ecb335829ea5ee70c23f3a04e5ee4"],["/itext-makes-pdf-form/index.html","ae19bd38e779ced4fde917d7524944ae"],["/java-Set-Map/index.html","5b13578c1f1c57439bfd59335fc533c2"],["/javaweb-server-error-codes/index.html","66b4d95237d936575a4d5c6acbf2bdca"],["/javaweb-source-code/index.html","2d08ad4928f6d0533280ce6c5d9442f9"],["/js/lib/busuanzi.min.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/js/lib/lozad.min.js","47904d34a224931dd1b615c59a3dbe3b"],["/js/lib/prism/prism-coy.min.css","0ccad54d95845901ead59bfd3ecceb14"],["/js/lib/prism/prism-dark.min.css","a4711d2957d6605eb5682bdd228cf123"],["/js/lib/prism/prism-funky.min.css","efedcdccd7a9ab342d2d9cacd24920af"],["/js/lib/prism/prism-line-numbers.min.css","38e22e790c279bb56f9ec4b90a2a2d58"],["/js/lib/prism/prism-okaidia.min.css","5ac6f9de996fbec68aaa106dfb16e061"],["/js/lib/prism/prism-solarizedlight.min.css","ecc7e64d039873ffcf7fb27babdaeb5a"],["/js/lib/prism/prism-tomorrow.min.css","456af2a14ae4f5089939d5904ac40fe8"],["/js/lib/prism/prism-twilight.min.css","ebb5c355332a8cf9a1ce37a2a69d678f"],["/js/lib/prism/prism.min.css","a5234d614834658887cec6a9515890f8"],["/js/main.js","052d2b299d9c750afea8df0b802ab7c1"],["/keras+TensorBoard/index.html","01609ffc01b23e5af5b33b894a24818d"],["/keras-beginner-guide/index.html","46b9388ed08ce690c42ca585639a81b9"],["/kmp-algorithms/index.html","b36994135ed121a92f08351f0a21ec6e"],["/leetcode-Java/index.html","f825b435c1452b47b15588ba26757263"],["/links/index.html","77d72815e0c9036e1dd0fd40485bdc57"],["/linux-java-opencv/index.html","eedca0082dfba2cddcc454bdb29db80f"],["/msb-source/index.html","107c206411296ac1bdf475fabefce7de"],["/online-BUG！/index.html","89317295e3910ed6b995c53bfacf2df2"],["/open-app/index.html","8702297d7d3ad1c891abc7d5c3a5f035"],["/page/10/index.html","3eed8823fa9f8b4f9952e18dae7300e9"],["/page/11/index.html","3fcbb306dfb303a05d367b67e3faad1d"],["/page/12/index.html","15112d7314c6c8ac0221aa6cb86ddf9d"],["/page/13/index.html","bc17005dc8735a643d1ca64e7bb4ecae"],["/page/14/index.html","45fd4ba2a452d68d2768a41a6d677294"],["/page/15/index.html","9c31b71572bbdb95c76007af22d66a97"],["/page/16/index.html","395271ab35fbab7fd49f8193d28fa143"],["/page/17/index.html","35b2ece7ec0f1b71277f5b5c4a3cf80b"],["/page/18/index.html","d224d19ff1c3ce01f112d8a3528607a7"],["/page/19/index.html","7cd7f0bc3693dd8f8c102048d85fe934"],["/page/2/index.html","3ed7059a59bec62fa8b51c2a1e0805d2"],["/page/20/index.html","82dd7941cc13db90898a9ef5fa11746f"],["/page/21/index.html","ece6744382efc0f2a4ca6f42c7ee8e96"],["/page/22/index.html","57777014cab7fe602aa1c0f1347abaff"],["/page/23/index.html","45bf23c38b41dd582b1bbbf8fe2fa6fc"],["/page/24/index.html","86df97403bb2f14fb13bc049fc98f649"],["/page/25/index.html","fba558b759624d3e657183f7b03f977d"],["/page/26/index.html","0610b0100aba64275c8f049952e46f26"],["/page/27/index.html","e6340b6e8a86e168cd3e593e41c88387"],["/page/28/index.html","b5451cf8a3dac45d66edf601a0e6469c"],["/page/29/index.html","b7690661555373e00998c84a1e7af1fa"],["/page/3/index.html","a2a6d5429c1a6d0dc8be89afdc32b232"],["/page/30/index.html","19b1709852d70457c3ce6f468af46c15"],["/page/31/index.html","8eb76b6829f7fca8ae5b65d33dc6eb8a"],["/page/32/index.html","16239d0d55e4dc5c2341c826508cd28f"],["/page/4/index.html","8b6d823fa00bbfed97c8bbc43e5e9e91"],["/page/5/index.html","c191f10d8eb316fff61e242235f98f7e"],["/page/6/index.html","b103c17362029212dcce4d9beea87af9"],["/page/7/index.html","bf039133cec2d4fd807af7f4732f568a"],["/page/8/index.html","af481648b31167ab7fc0cd3db1cbb92f"],["/page/9/index.html","d5f28f53c83a42e1e2d1198555d98f8e"],["/pandas-data-preprocessing/index.html","b35473ed043f4e132b5e0a0bcc2dd761"],["/phone-win-open-Internet/index.html","000beccd0955da667f492357482a3030"],["/popcorn/index.html","416bdedfa49972fbe6c3e9fab5deecff"],["/python-Blog/index.html","517ffdcbae1373eb0c6920e807d502d5"],["/python-yeild/index.html","1843f26ed76cc0927247b96b72043554"],["/python爬虫教程/index.html","7d4443065b5920219f69d2cea46d41e6"],["/software-copyright/index.html","696f54f3c2cf9512158d20eef0b45640"],["/sw-register.js","0715dd5abc2a521eb89fb0ffc7eacf3c"],["/tags/AI/index.html","779fa481fddf0d7de5f4c5b179366378"],["/tags/API/index.html","133f0dc231d63a0c5e7b280090074179"],["/tags/C-图书/index.html","158554e8f3b8afd6860b74dfe80ef061"],["/tags/C/index.html","55361c78860079b90c43642d473f1cfd"],["/tags/CNN/index.html","8451ba84d65b1abe019b0435e917e99d"],["/tags/Chrome/index.html","099cc3facf4fe99c7ea689f4e03dc266"],["/tags/C✙✙/index.html","0482db30f99ed625f44a1300c290dfde"],["/tags/C语言/index.html","e832dd3092cee1fe8c3f82d33ffd9e76"],["/tags/C语言图书/index.html","a5b28062d0681cb4e16374e98c3f5aa5"],["/tags/DSN/index.html","23e78e6584c36b25acfe15749afbcaf7"],["/tags/Dll/index.html","2f89beb90596c15faf8f62f099154865"],["/tags/ECCV/index.html","48ea6607f6db5b8fce13afde8385dabf"],["/tags/EM算法/index.html","d0fada67be916f6f4656b4dafa102c5f"],["/tags/Eolink/index.html","e4a7a6488aadce0fae5bd2191bd0a970"],["/tags/Gitee/index.html","a16eae45e9c74ddac18a44f7cde9aa25"],["/tags/Go语言/index.html","20a688581d01cb3b4d72d169cb20b59d"],["/tags/Graph/index.html","473a0b40bbdf8a4181b17b41ea451a79"],["/tags/HTTPS/index.html","7fbf0df766ad22d473e8721a0b0c6789"],["/tags/ITK/index.html","aed3bbcc56ec7f3df2d6d5f0ab7cf1f0"],["/tags/ItkVtkGlue/index.html","3dfc2bef5b4c7046970ba10787b3aca2"],["/tags/JMM/index.html","19af959a789dcabff99022050e4ac132"],["/tags/JVM/index.html","9cfc906dd53d7f6d2a081f2cb5be9b05"],["/tags/Java/index.html","9da6bf6820a87d7b34438de237caf2fc"],["/tags/Java/page/2/index.html","cce1a00ebb9a526b299ccedc0ebe12af"],["/tags/Java/page/3/index.html","d6d559ae8c9d05585c3e361f230ced83"],["/tags/Java图书/index.html","62c71833ffa6336fe1fc6b0ef33d7dca"],["/tags/Kaggle/index.html","31bd7bc53a35117b1451185105702179"],["/tags/Keras/index.html","211e377b5cd5628a2a51deb4433d7800"],["/tags/Linux/index.html","3ea1b81f5238fe1b5447e6dd9240b339"],["/tags/Linux图书/index.html","31464450df89069d796acf1f2302c551"],["/tags/MEPP/index.html","d871b41517779894550d77c8a6e2fe44"],["/tags/Map/index.html","f3f93c68f11b4cb9ba5536189f170d9e"],["/tags/Matlab/index.html","74ebfff74b5d63d2969434eda601fd00"],["/tags/MongoDB/index.html","8361773f47fc6000350a1191c1aa0d91"],["/tags/MySQL/index.html","5b1e987d734f4e83fdf244b0849dd9da"],["/tags/Parzen窗/index.html","5c072e7649c7bd77b6af3bb1128bdd20"],["/tags/PicGo/index.html","2474be91921ea262cee7dcd499c75538"],["/tags/Python/index.html","93713c34fda23eab929a07b0ff7fcfc0"],["/tags/Python图书/index.html","29ce2f3786fe0e9ee02cbfc6cfd2c1c7"],["/tags/SPHARM-PDM/index.html","5d06451b5fb08bb47fd10be979bfae7e"],["/tags/SVM/index.html","458170ac14637c01400f13da0a82d265"],["/tags/Seata/index.html","f8085d55be2c6855ea9332491ca4fa75"],["/tags/Servlet/index.html","c53d5ff05a371543596a21a4d80240fc"],["/tags/Sping/index.html","4c047452a3e6027166dd001caaee1e4a"],["/tags/Struts/index.html","6a57aea03a8bf217395fe4261c8a4fcc"],["/tags/TCP-IP/index.html","7fcfec2f03e426013eec99fa2e6ff8a4"],["/tags/Ubuntu/index.html","48681e4e7d1dca3386e20249f211306c"],["/tags/Unet/index.html","588a46519d99e5a3b996a23d2b968f14"],["/tags/VS/index.html","5a0967485308c9aa8af1cb7fe9adba69"],["/tags/VTK/index.html","7d4a6bfb2d421ba27a5093c6f2ff7bf8"],["/tags/Windows/index.html","dcf8ef1a3483e17250858e8f2e12baed"],["/tags/edit/index.html","b2de4b6e694ef79af4c010bda6a27899"],["/tags/hibernate/index.html","774a28bea6b5346bd176a3d75f62cccb"],["/tags/index.html","2c7b4b0d2445fc6ee6d8190a72e6d2c3"],["/tags/itext/index.html","098ca63f8addc16ac73b676ccb57d9f6"],["/tags/jdk/index.html","d7c979875caeb19faace6678c9121a5f"],["/tags/kmp/index.html","793d899cc381f47218424fd6a8c7a220"],["/tags/k最近邻估计/index.html","0ce5f59ec9f96a9abc204da8a58926b7"],["/tags/lombok/index.html","8486dccb4dd704486e3f93ea37431554"],["/tags/offer/index.html","a5121ca405cf1aca43aad17f3b48ce8c"],["/tags/opencv/index.html","859d40b7e932785cccb15adad5b6fabe"],["/tags/pandas/index.html","61229045391a439d1d5f0adb114bddd8"],["/tags/string/index.html","4c8b8de71804361061f5195811639b4a"],["/tags/vim/index.html","fb173111a8531138fdf7b7b541fda3c5"],["/tags/vtkPolyData/index.html","450e6749e73809cd3dbece11d00eb43d"],["/tags/web/index.html","e042fa1502538ead68f830191df8ef62"],["/tags/xshell/index.html","0ae0a7eeea109927176f9b6f5ffb9a45"],["/tags/yeild/index.html","d6543e529ccf4eb15020ff5c35fc7cb4"],["/tags/互联网/index.html","5cfad323bb287c734b8bc8ce8de4eff3"],["/tags/人工智能/index.html","8d69703fc4a2651650a0b7ea74a5024d"],["/tags/体绘制/index.html","24f8286c9a927cff283df537928d7aaf"],["/tags/全卷积网络/index.html","79e32d0bde87fe39fe27fa8728acbf87"],["/tags/公众号/index.html","73ed5df8868b722516d3f0930e98c1dc"],["/tags/内存模型/index.html","5a0ac8124353ef2e5da014021c03a723"],["/tags/内推/index.html","b6e2cd17858da13572e9b9c63ba256c7"],["/tags/函数/index.html","a966a0b3e3177c1faba895a5287c1711"],["/tags/分布式/index.html","e82b2dfee4646cffdd95952f5ad26fcc"],["/tags/加密/index.html","67f3caab2354c7cbc326d54bd7c6406b"],["/tags/医疗图像/index.html","bf59b339cb2f5d567c58ffea8d6d5041"],["/tags/博客/index.html","360bd50b5df325dcb49f6c47e60bd539"],["/tags/图像数据/index.html","ddb7593872f6e1f9802382eff164202d"],["/tags/图谱分割/index.html","7e86165b16c4c9b0607e0ccaa2b5bcb6"],["/tags/垃圾回收/index.html","9d3de07150934c0124e6a4dc3e1920f0"],["/tags/多线程/index.html","537853f56f114bf537bfba2c98665ab9"],["/tags/字符串/index.html","8e4b3c0a1881394970dc4f3f359dab42"],["/tags/工具/index.html","2d25ead7003cc917dff3db11626dcc52"],["/tags/工具/page/2/index.html","64a1eedbd6d98c9f4445fb4b59c796dc"],["/tags/弹性形变/index.html","1a7e1e71f5b936d8ac8a3b9d31607d06"],["/tags/排序/index.html","76d66d7c80eb01b660165a5c849d1cc5"],["/tags/搜狗/index.html","db638b1e28b9942f954195ff66d52d9b"],["/tags/操作系统/index.html","f6db4bd233ec0e583806ed964a81ca23"],["/tags/数据库/index.html","79559ec5ceb64ee33ae8ca7d077241fb"],["/tags/数据类型/index.html","0119bff26546b760404aa676f5d223a2"],["/tags/数据结构/index.html","c75c9db3e416d007f11912c9185e0657"],["/tags/最大似然/index.html","7854f67eebc3ca1d0ecfda8c34fb2e1e"],["/tags/机器学习/index.html","e4929d401a2f172a35b144651089c194"],["/tags/机器学习/page/2/index.html","e5fde24fda7730adecfe7b94af25993f"],["/tags/机器学习/page/3/index.html","4db9e4b19f9cd6529ce97c0896494a97"],["/tags/机器学习/page/4/index.html","d26b8d5082d238b5bf752622ca0bbaeb"],["/tags/机器学习/page/5/index.html","0f9d0bddf532f12279f2ca8cad9e8b3e"],["/tags/树/index.html","cf04b151d7264c3e90b8734656c1a18f"],["/tags/框架/index.html","b2dd97abe1f797f06444774905544722"],["/tags/求职/index.html","55e2f33089847b3c32ed51a9705cf246"],["/tags/汇编语言/index.html","47729c22aa46f224271007e90c9a6926"],["/tags/深度学习/index.html","a1302b42766f876316ca92147ad61edf"],["/tags/深度学习/page/2/index.html","de5175275d39176e44dbb7857b2fd3a4"],["/tags/深度学习/page/3/index.html","d1aeab44f9b4275e39a77962541f540a"],["/tags/深度监督网络/index.html","7836f0ecc400113890c65c8bf8f0c292"],["/tags/爬虫/index.html","bad4227bfde877615d10c148e884021c"],["/tags/电子书下载/index.html","39ced44c934a2fc59e11266b95790be8"],["/tags/电子书下载/page/2/index.html","3ad4a4284058f7e7ee1439f226342015"],["/tags/程序员/index.html","7911cd66f1ffafb24416df643de1b63d"],["/tags/程序员面试/index.html","853e9d2e8009430149655204922d9088"],["/tags/简历/index.html","bde2f52ecd7d627a68b4889ac1967925"],["/tags/算法/index.html","9bfe6571939095c9a76a8b804155b066"],["/tags/算法/page/2/index.html","dcf1e95e1def28ca6909df5cdf41690a"],["/tags/算法/page/3/index.html","4018c64c0797befda84717532ce32450"],["/tags/线程/index.html","11cb087bfc4e38d6a31b17a921be4146"],["/tags/结构学习/index.html","3778280749906c46e5e26e0bf81b6aac"],["/tags/编程/index.html","a04f372d68803377f0fb38616b0c31a8"],["/tags/网站/index.html","1be8c1f7abb638165694caca7a0eb3ef"],["/tags/网站/page/2/index.html","3abeada18a09119655d5696eaa5ebbee"],["/tags/网络/index.html","023934ae31b04ea1695449273d7e793e"],["/tags/网络原理/index.html","ed5b2a6994f04617f37b6906d45a475e"],["/tags/肝脏分割/index.html","981675f0b3255eb0bc666ac6347c1f59"],["/tags/计算机/index.html","842c4a5991aca2d9d78d6575ab791ab6"],["/tags/计算机专业/index.html","2b6daa53167da8508e05377cd2ff0568"],["/tags/计算机网络/index.html","8202ddaf97e0800abb69a00b467928fd"],["/tags/设计模式/index.html","66e337fa76e9d937f434a8daee75a155"],["/tags/贝叶斯/index.html","c75f0d78b5a895b23e681fd65583e014"],["/tags/迁移学习/index.html","2abbbb8058386294a8c3cb871114ef2c"],["/tags/面试/index.html","63b4bcc79f6eb9f6edbc2edf99052b0d"],["/the-way-of-pragram/index.html","627c469094cc065a2c239a2844265e2a"],["/untiypro XL安装/index.html","837cabded3be376eddfa8a77e19425bb"],["/video-websites/index.html","6e964b6d01567c95884fd30605daedbe"],["/wechat-fans/index.html","2147ebcedf78c57262602e0d507cf2ed"],["/window-run-VTK/index.html","e9bfc07679037e6ad9bb208d53596a38"],["/xshell-connect-Linux/index.html","03ce42a50bc697e5b27b18d2356ba389"],["/‌Accessing-the-Open-Internet/index.html","66841a19425bb216ea1e32fdccff8909"],["/《Java高并发编程详解》，去大厂必看！/index.html","78378307fa77286d5c1ec14e476f35da"],["/一分钟没了 1.5W 。。。/index.html","bcc6afe35236ec134f103b592e84461b"],["/一条高产爆款内容生产线/index.html","f15dfbb042bd14872c50d0700a48a6bd"],["/为高考学子推荐的六个就业前景广阔的专业/index.html","3f8efd4b18b4a80af7fdec02a7552a30"],["/互联网赚钱机器---社群/index.html","9d6f594b75ba6b5e5203c1f1c7f5656b"],["/你们常用的工作方法和思考方式是什么？/index.html","23b3c291e1c884238e578a6aba333d98"],["/关于环境配置的一些事/index.html","dc7a1e86befe35223c04454888bd5028"],["/准备了19w！搞事/index.html","40228e47e51e908a4e54dc8c727e96f6"],["/几个很重要的感悟/index.html","56a42562b31d68982d0c9f66a2bfcc14"],["/分割ROI篇/index.html","10b8570bb11778ecb170cbbb4710a31b"],["/分割精度说明/index.html","c0e9ded1ac4abf8335e07fd84958b97d"],["/分块程序执行/index.html","a10435297b5c444b20f07049e2343bfb"],["/加班公司黑名单！！！/index.html","557d34ad09bc3a307ed8eb304b39b3fd"],["/卧槽，上知乎热搜了！/index.html","0b34a074186429f6222e5045d4c714e4"],["/卧槽，我的小破站爆了！/index.html","f33d4ba6c2db0cc19fafdfb4e1d895bd"],["/卧槽，我被盗版了/index.html","f6787a3cefea73d8ccaad2d4b747a4d2"],["/卧槽，还有985大学在大一上C语言课？？/index.html","bf6fa6080e5d638085ee31472ec3d1fb"],["/历年微软面试中出现的leetcode算法题/index.html","f390ed010cd14b2501889cdf36e62903"],["/去特斯拉试车了/index.html","119b4f9c8f4d7e60940cb6e7a01a1912"],["/吃苦的三种境界/index.html","9182e696daa6f41bb5b7352894e2e452"],["/哪本书适合推荐给 Java 初学者？/index.html","64d1a2e1067d44970f67356fa160af80"],["/哪本入门级的学习数据库的书最值得推荐？/index.html","1744fbca1526ed65cede75724bd8d820"],["/国内外常用的AIGC模型/index.html","3e5428888eb348e7fb3b9d56dbe5a548"],["/国庆假期/index.html","fbcfa31f09a92616d44e556fbdcd7b74"],["/图谱程序字典/index.html","bec36c354d6e3c64ba05c9759fce64e8"],["/图谱训练与分割/index.html","593a115c9ebf34eee3841d3c54965715"],["/宣布一件大事/index.html","1eb22539df5827bdcbf8cb4505304c96"],["/小鹏P7i试驾体验/index.html","563d1c8b1917cd52931f2d92228123d5"],["/微信PC版3.3.0内测更新，电脑可以刷朋友圈了/index.html","9faf9169275b224358d4f86248950fa3"],["/怎么更快的赚钱？/index.html","a725cc33d2b39240c050ce1d38d976eb"],["/我毕业了/index.html","a3d46ba18892afd18bd30423d1dc4077"],["/我！真！的！找到了！爱上学习！的方法！/index.html","8b6e04fc30e1871818f2925b6a1a720f"],["/户口的意义/index.html","fcd18e1e9f8b0a2e589a3ae0edf1f02a"],["/推荐两本经典算法书/index.html","8add9fc4fcea9737b588a08819e6c94b"],["/推荐几个在线学习SQL的网站！/index.html","56baf06c5115d9987775d4c547f1631c"],["/搞了一个程序员成长晋级社群！/index.html","cb4452813f93345092cb2404aed978ba"],["/摘抄/index.html","2e154edf35b2aca5caba831bc84cfaf1"],["/暴跌30心态崩了/index.html","10ab4a8675028ecb04bfe9a41199c06a"],["/最近很火的ChatGPT到底该怎么玩？/index.html","b812c6384b27c25853cbb80df9821403"],["/有哪些好看的日历可以买？/index.html","88a30ef00d7aaf058ff578ef9845f0ae"],["/服务器有啥用/index.html","1c4e32a05dc388ffc54b2f6958c0cd9e"],["/来长沙了！/index.html","318141d7c8371369e8fc2076cc5dd018"],["/校招污点公司名单/index.html","8df1650dddc25059ab5ffb580bc3d57f"],["/梭哈200多万/index.html","407f2e093e2b9d8d2efa73b99970a249"],["/梯形图入门/index.html","9c8c650fa1a0f15b52353ef06dabff25"],["/橙心优选，凉凉了！/index.html","84c22505fdc674291c32ba9273ab1019"],["/比亚迪汉试驾体验/index.html","2d778162fcfe211046e7364ab5a8a29b"],["/清华转学成电，真的牛逼！/index.html","fb8483a47adcbe640a4ea4e82d7ef0a4"],["/滴滴程序员被亲戚鄙视：年薪八十万还不如二本教书的/index.html","b8ec1e5c92f5569044cb7f1d1222bde8"],["/社群！/index.html","5d267cccbb110052d8229df9f034a5e8"],["/科学上网之VPN篇/index.html","5be0ab4529699460c7a3703c277b6678"],["/程序员必备的几个技能！看完你也是大神/index.html","8c9dc735a2d63206d1c28873ea2d0cf8"],["/程序员绕不去的槛，Linux！！！/index.html","885c5a6aaa16225e700963acc75dab80"],["/蔚来ET5试驾体验/index.html","2990789f97ee9d0edeb7d5ef2bc74757"],["/蔚来，牛逼！/index.html","5c165df182027da11bb6769afccfea35"],["/被录取了/index.html","04e8279bee616bc96e5e8823f9fd2064"],["/被找事了！/index.html","58e5ca4b8f5c8e8d8699b2b925651849"],["/被拉黑了。。。/index.html","3938db303e7dc0307a7cc95e5e0aa7a0"],["/被车撞了！/index.html","9fde76398e0e262ef354cfd5abf1a52d"],["/该如何选购固态硬盘？/index.html","1bac0631c866a69d852e668667a0225e"],["/这本书一定要看！/index.html","09960d92b611765f02c7bdf94bf30108"],["/选Java还是C++？/index.html","f0a934eb03e197cd8e189f486a9dd026"],["/那些让你起飞的计算机基础知识/index.html","e5bfeee5cad951317ab09c38304c855a"],["/靠这几本算法书，成功拿下大厂offer！/index.html","e4bbea514a80f3d3f71e65902c00e1f2"]];
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
