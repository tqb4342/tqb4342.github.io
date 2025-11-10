/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/0010-city/index.html","c0076aef819bb838eb71c632b018dedb"],["/10-algorithm-book/index.html","4b549ff683c41d8f9f8531c8bc09e003"],["/10-website/index.html","54998c13727e0268b4730218cac2a96e"],["/100万的小目标/index.html","2e243df0e4f66551c2a64ecb0362790a"],["/10w+YYDS！/index.html","7329b1d64b9515061bf8b5e13a82b511"],["/12-technical-tutorial-sites/index.html","2027f44394ee81b69d7b1b0446b09cc5"],["/2 6 岁 了/index.html","30eec8dac04440c1aa6a2947469e47dc"],["/200万，啪，没了。。。。/index.html","2dfbe3e83d7940cc6c092cb87f81836d"],["/2018ECCV-Paper-DL/index.html","c9bd13940b13b5dc5e5b7800df4057ed"],["/2021年固态硬盘选购最新攻略（小白避坑指南）/index.html","6a083544f8e92e975af7c6f3bcab8f2c"],["/2021机械键盘推荐/index.html","413d27d2f067889cfd32cea3f4312cee"],["/2025-07-15/index.html","7d9fbe254264e5245e62c334ee8ec49f"],["/27岁了/index.html","4080586d8b5c5ab3802b4548f33fe40f"],["/3D-Convolutional-Neural-Networks-for-Human-Action-Recognition/index.html","e237e2305ba3e62be44514c3308ad531"],["/3D-Deeply-Supervised-Network-for-Automatic-Liver-Segmentation-from-CT-Volumes/index.html","c771f72c9ab6d819ed9f0d17afa0ac6e"],["/3D-Unet-Experiment-notes/index.html","73c2953f7ee0bce5c1a2c924e1093c3e"],["/4-Software/index.html","db96ce051dafd2e24455035dd8fd7bce"],["/6-website/index.html","d4586f4041978abb62d426a0feb2fbf5"],["/7-terminal-tools/index.html","c4a9f3abab26f6b1008152bd27fc2a71"],["/AIGC中典型的深度学习网络/index.html","59fd6057dcbeb92ffac7cef28d296d37"],["/Agency-model/index.html","64935fb2d1969337bc40d85bcfd9aa6f"],["/Algorithm-brush-notes/index.html","8f43a62ba5e188aaad96cd1d23551552"],["/Ali-recruits/index.html","f881ee750f872c5d6fcf6a28fbe23783"],["/Android-open-internet/index.html","7321dd46ba00ee9fc175bcce27227eff"],["/Appearance-mode/index.html","89b154344585eb1ae0d66420abb1772b"],["/Backtracking/index.html","0c458e482eb6459c2b3427cf436e7f2e"],["/Baidu-Sao-operation/index.html","da48e86700e9ddec1d6f0809370aefa0"],["/Batch-Normalization/index.html","2c5d00ea3c8593102f9c67ccd6891342"],["/Best-AI-tools/index.html","d650ac02532904b5bf6107f79f567c74"],["/Bias-and-Variance/index.html","f9af84c7b3444a7ed9b036348983e564"],["/Binary-tree-traversal/index.html","a2cfe7f3c7677fbd54ac5e6cb3e59a57"],["/Branch-and-bound/index.html","5347e0e99e294ac0903064743afa2127"],["/Buying-computer-for-the-first-time/index.html","d241f6d59f62a87197802bd1ff3a7d13"],["/B站向北邮道歉！/index.html","aab57d1bcbacb5990ad9895530deef5f"],["/C++-string-function/index.html","f6ac95f9e659f6bbc8c8f7c84b655990"],["/C-Java-DevelopTools/index.html","6ac928b7eab373fda4f2390878eabd27"],["/CS-Classic-Books/index.html","849035539ada77ccf0456b0b9dbfa30e"],["/CS-network/index.html","0b466a069043338f41ef1c553bdc3352"],["/CSBook001/index.html","b93ed5a01f75ad8d6a1507322f25d3d9"],["/CSBook002/index.html","796f4a60e022081ef71fd54c70345abb"],["/CSBook003/index.html","5331301b79872a16848c6374d36fad39"],["/CSBook004/index.html","adff3f168b6ae1ffe31decf79a2e60c5"],["/CSBook005/index.html","8502d4807b6670f26e66a802807ea136"],["/CSBook006/index.html","87d4810c902d9b2b80d37bb17d0580fb"],["/CSBook007/index.html","329929580c183624678ec3dc0ec79b71"],["/CSBook008/index.html","6d92668c38774070d2f0f39a02d77c6d"],["/CSBook009/index.html","fa22c0019a320bc65e641d7d151e8659"],["/CSBook010/index.html","317fd94016031e1d4030aa6f51f388df"],["/CSBook011/index.html","8ed52ec2bd1f6f9db6c26007f1e2de86"],["/CSBook012/index.html","99273a4190fc0698626aff5212182472"],["/Changsha-really-fragrant/index.html","2050b9dda54b98d299a038b487cc36a4"],["/ChatGPT-VPN/index.html","b8f704a624aeae9b9dbf981e47c90cdf"],["/ChatGPT/index.html","8a2929ce2b5a23b82a1de0359f9ed341"],["/ChatGPT！王炸级更新！！！/index.html","960d24fcf0cd91c8ed042535a48ab845"],["/Chrome-crx/index.html","e377ef2ee453d5b7f82ccf6a5b13564e"],["/Computer-Classic-Books/index.html","3bf8c56ec7c652deaa7be24c50a13beb"],["/Computer-for-another-major/index.html","09d630ec427a4cd60eaeea1fde63778a"],["/Conditional-confrontation-network/index.html","d2805fd29cf3efafcb01e5bd92be9d44"],["/DNN/index.html","a571db7ca6ccfbb97befa2106a59c415"],["/DSN-segmentation-liver-experiment-summary/index.html","643cd0eac4b5c66fb05f13eed235b6a7"],["/Data-enhancement-elastic-deformation/index.html","63afd55b9b838ffdff26d921976ebb50"],["/Decorative-pattern/index.html","7ac9f763dc3085b2627e17fdd9e2b6f9"],["/Deep-Learning/index.html","94b7b98ae99b9314bad1a34f90a8abb5"],["/Deep-learning-and-medical-image-analysis/index.html","0b21aa5d478b9d4a2ceda706796b6a84"],["/Deeply-Supervised-Nets/index.html","91dffa182695b79cf69fc039fc02bd33"],["/Deformation-model-based-sparse-representation/index.html","f49eca73239087c0bd1e71046b522ff3"],["/Discriminative-and-Generative-model/index.html","0171ec4c0e6f0af1e73f3e65762f5bb5"],["/Distributed-transaction/index.html","4e70edfaefbdde0ac91e06e1c4b7a30b"],["/Divide-and-conquer-algorithm/index.html","27ab11f5521ce27e319ef61d6750f6fe"],["/Dll/index.html","93229fa991484868be660851a7a91405"],["/Dynamic-programming-algorithm/index.html","1fb71d5d20de487fd902416bdda03fdb"],["/E-book-download-commonly-used-by-programmers/index.html","d8d5e7868cbf454339b5187fb3a101fd"],["/EditPlus软件的安装、激活和配置过程分享/index.html","806269c1f98aa50c7639966108067145"],["/Eight-sorting-algorithms/index.html","7c7877d2b31c73d3db220c053f26d1f2"],["/Encryption-Algorithm/index.html","bf804b3b71f72233cb68e9166dcf6715"],["/Eolink/index.html","1f5a461a9a7dc039857307b1b3608abf"],["/Factory-and-strategy-mode/index.html","1768e9117416e35e0fbd95379cf5e497"],["/Foreign-technology-blog-community/index.html","dce3acf4485ab9f3089db54a64911710"],["/Functional-model/index.html","52d61f7fe2dfeb89bca4a7bf932719aa"],["/Fund-type/index.html","682056560168ec2ad79d87847f953db6"],["/GPU-medical-image-processing/index.html","f6c6d5e2ea0730134376dc013b141910"],["/Generative-Model-of-Unsupervised-Learning/index.html","5897f5606ac209cab14ea326be6fbf41"],["/Git-Learning/index.html","eae6b267dde54b104837b396fa760d40"],["/GitHub-2FA/index.html","ae766b0018e73fdb04f6b46362a15701"],["/GitHub万赞，程序员必看操作系统总结！/index.html","43a309681bc4d7aded3db959a5bd0136"],["/Golang-book-recommend/index.html","7953c4cadaf4103c71992ca64b9c4819"],["/Golang-learning/index.html","b699d9da38f27f45e4f034831a61c3ff"],["/Gradient-descent-optimization/index.html","20a325855e3aa9af168917704a744e25"],["/Greedy-Algorithm/index.html","e567f16ce4f3ff85664da1a2adbf86f6"],["/HK-bank/index.html","0f10e6260e764064c6ae1b1c7e0ecf6b"],["/Head-to-head/index.html","fbf0396f688bfa9f674e7cc4f649f163"],["/HistCite-Pro/index.html","95c60ef492b36ea74c314d9bf1e2f043"],["/How-does-the-program-run/index.html","b534d67258218c1cb3814b3061bf5ee6"],["/How-to-judge-whether-technologyisreliable/index.html","81443a988a632c368d2a1fff309ac4fb"],["/How-to-learn-design-patterns/index.html","b2073878966c116ec470c4a8abeb8532"],["/How-to-learn-design-patterns？/index.html","d85c3ff65b82607673fe6b3a1f360526"],["/How-to-teach-yourself-programming/index.html","b5aea23ca3d7878b431be358675eff1d"],["/How2learn-Python？/index.html","c4e8d0359401fb58bd5b82738e2ac9e5"],["/IDEA-shortcut-key/index.html","b507e016fa2eb058afa00611af1f6ba3"],["/IT-interview-basic/index.html","a2e327cd2f3d985b6bc6e23107014429"],["/ITK-VS-install/index.html","7d6bb1f4d28581f6df53536b5a319433"],["/ITK-VTK-ItkVtkGlue/index.html","d0675b7751541408e507dadc5b48bd24"],["/Image-Processing-Journal/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/Image-processing-plus-noise/index.html","f6c162c0d1ed7bfcec791bfc003fbc05"],["/Inception-Going-Deeper-with-Convolution/index.html","5a587a205106f283fa3594d278a520d5"],["/Java-GC/index.html","401d6a2199b70a5047f9053c4f9554c1"],["/Java-Servlet/index.html","45e94be58183b526e036ae702e8c27c8"],["/Java-array-and-collection-sorting/index.html","6b87b831044bb83f84750506ffb4797e"],["/Java-development-tools/index.html","451424de8007f783a5900d3a6fe28e58"],["/Java-eight-data-types/index.html","838b14e68061fd68d79a45db94614566"],["/Java-interview01/index.html","65bd9ce947af567cb1c8ea61a6a79ad1"],["/Java-interview02/index.html","06f606a0a978de064d93760eee4f851c"],["/Java-interview03/index.html","21b57273d75b67872f36e4eb2ea6c483"],["/Java-learing-map/index.html","6db6ca64f72f384150755eaa0c2efe6d"],["/Java-learning-route-map/index.html","689280bb712cf47dbe2f24d8b2b3ff9b"],["/Java-memory-area/index.html","cbd5a0ee1680d1e0314d36bd41384d7f"],["/Java-memory-model/index.html","eb79cd274a7eb99ea0851de91b5a027e"],["/Java-multithreaded-learning/index.html","3550837d8a2c913f486d073c6518ce0a"],["/Java-project/index.html","49c04193cd98c12eff68d4830772834f"],["/JavaWeb-Chinese-Garbled/index.html","d891689de67b92e538eec286e71e7d02"],["/Java还是C++？/index.html","1e630cc9d03c88df480e792c21a1d651"],["/Kaggle5-step-guide/index.html","43fccb981059fa0105e69bd40d9c0697"],["/Knowledge-points-of-Java-garbage-collection/index.html","c9c5e8f09bd8f03fc2b540064869ba80"],["/Layoffs-and-Hiring/index.html","d5a907158d4e55c5dc5afbf8d1eaa743"],["/Linear-regression-of-machine-learning/index.html","f7b611f68db7ecb3aa64f86ca563a370"],["/Linux-Compile-C/index.html","065463c430227e2a66a100dc8a2cb07e"],["/Linux-ITK/index.html","c342ae687e72ac11f15628909a745215"],["/Liver-segmentation-of-sparse-components/index.html","e6b67878cf8d4e7c2d0415696ccea0c9"],["/ML-EBook-paper/index.html","d08adf1f462c160373ca21c6744c23db"],["/Map-uses-multiple-maps/index.html","0a75a37811fd0d2b57e36b118e50dcf1"],["/Matlab-Graph-cut/index.html","6bb20d653ee189900d0e610495db0742"],["/Maximum-Likelihood-to-EM-algorithm/index.html","d6f08c8f26268b4fbdee233f142d7657"],["/Mean filter and median filter denoising/index.html","18d90a9ee181258f19c190cad48fa33d"],["/Medical-Data-for-Machine-Learning/index.html","5e1b58fe07dd6d6ad57bf65cd0cd2740"],["/Medical-image-analysis-deep-learning/index.html","d092bc1bfda3833eda19a86912a710c5"],["/Medical-scan-image-processing/index.html","e9f369314eeac408d39160a0fd38e204"],["/Merge-sort-algorithm/index.html","40ac9cf320cbf3c81d06e6c6ece4f798"],["/Monthly-income-2W/index.html","b9d74f1f2fcfc5e02e9c8de4ec041bc9"],["/Mysql-database/index.html","26213734b20fa4ecedebe32a1705a1ad"],["/Neighbor-Embedding/index.html","3228940c84abd089154189dd07e9646a"],["/Neighborhood-approximate-random-forest/index.html","f542f496fbed96ee854049a89f22c185"],["/Net-and-official-documents/index.html","a09b259ceff755e3e79936d3ce93f841"],["/Netflix-VPN/index.html","abbaab47bf290f89d341f35a87fba41e"],["/Network-principle/index.html","efe00ea0f2401fdacb8e238139f1410b"],["/New-Hong-Kong-stocks/index.html","50c7d11ba863732cf194b8812dd6b52f"],["/Nice-to-meet-you/index.html","482d51eef56aaad745b3f675290044f7"],["/OS-processes-threads/index.html","abb7f2f93919e085d82ea5f4f04fa8b4"],["/OS-run-environment/index.html","2073244e378e25814e9d6f5ebddd2ec3"],["/Open-Internet/index.html","33834ef14fd74236e21c520bcf0583e5"],["/Open-Internet2/index.html","7f1ff51779c5a574a13ff99b0df92ad5"],["/Open-source-community-and-rewriting-website/index.html","d9223a66cf964017f2c6d63aafc8a4f4"],["/Panoramic-image-stitching-based-on-SIFT-features/index.html","565717d903eafd605a174141a5a6c8d3"],["/Parzen-and-KNE/index.html","df15196cfe582ef322269913c4fbfcc7"],["/Personal-technology-blog-site/index.html","5558b7121d6a1ab34d23cdcecb99b202"],["/PicGo-Gitee/index.html","cdede4dd6cef5c51c4322febbd3b6083"],["/Programmer-treasure-chest/index.html","6878095735a3b2df15a31dba2ac25b42"],["/Prototype-mode/index.html","7a957aa1c97ee0581f2e356431a8ee45"],["/Python-base/index.html","e862b4bdd58dacf47f80751a6cf3ad67"],["/Python-crawler/index.html","37da85ef385dacffe11d2e7bf7cb6278"],["/Resume-revision-suggestions/index.html","61e98fe9389993495fff890ba3238fca"],["/SEO01/index.html","abf993e4405e27b2f19d5b853b5c3c57"],["/SEO02/index.html","f7d0de9693b927e2b28d1223f76c0fb9"],["/SPHARMPDM-MEPP/index.html","dfa887e8bcc524c34e795178b580c3e3"],["/SVM/index.html","9de8e3339dbfb3524abbb4454de35e42"],["/Semi-supervised-learning/index.html","8ed57c3844c81d9e72741425f8915a2d"],["/Sequential-model/index.html","024b08d1a848068ae4b23b385830c547"],["/Shape-Based-Human-Detection-and-Segmentation-via-Hierarchical-Part-TemplateMatching/index.html","f71674b45f15e76aae40dcb90d166b0f"],["/Spring-basics/index.html","bada53d39d868e415f96177fb75687d6"],["/Spring-integrates-hibernate-Struts/index.html","31da683428608b2531fe1655942e493b"],["/Structure-learning/index.html","48f751d9855e3ca6cda48f4996f05cf5"],["/Suggestions-for-self-study-of-computers/index.html","ae6e406dca0da1e73dcd77f6893b5015"],["/Summaryof-HongKongStock-Account-Opening-Links/index.html","b147a98c2643b19779c34689823f24f6"],["/TCPIP-detailed/index.html","7b91d523c83a59f83d921e7c774767cd"],["/Telegram-VPN/index.html","b17c9d1b07e855fc69f1761d352372fe"],["/The-essence-of-shopping-festival/index.html","03022cac73c61547062f4dc9235c7104"],["/The-most-important-investment-in-life/index.html","5771231cb5630130e1f9b233bf10848a"],["/The-most-successful-nvestment/index.html","480749f234b0884b13c838facdd8c000"],["/Transfer-Learning/index.html","223d950932373493fb971171ba4f8970"],["/Transfer-to-computer-major/index.html","0176b0d89274c8fdc6e55de729d2d201"],["/UNet-Convolutional-Networks-for-Biomedical-Image-Segmentation/index.html","6de53318a34e94cf59058ddb18323797"],["/URL-DNS/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/Ubuntu-install-sougou/index.html","4bcf0c65898d68bd63f419a8efd3d1ea"],["/Understanding-of-paying-for-knowledge/index.html","c6b9bc0a6d069898fcf29a3f8c479869"],["/Unsupervised-Learning-Linear-Dimension-Reduction/index.html","da72514398713beda6e516d49dcfea0b"],["/VPN2025/index.html","0ad51dad00c0ba65489fac83ac355fef"],["/VTK01/index.html","b19f22448a423e2cf94830bc63d6efe5"],["/VTK02/index.html","b6dbc49cc1696b0e884a2f3a56774b61"],["/VTK03/index.html","512a72bcbabd1cbf7f56fb03b887778c"],["/VTKRead-write/index.html","26e241f2549f47d6209588598a4394ae"],["/We-are-all-good-kids/index.html","3ccb836609361cf805dd08f20d822ba5"],["/WeChat-80/index.html","87c1ec9078fa47802f29ed1140635b14"],["/WeChat-red-envelope-cover/index.html","5b7852fe546b20e77d6748721939d6b7"],["/What-is-crawler/index.html","8605f08398c4712cc7ce40ca9be9d85f"],["/Win-OpenInternet/index.html","3e636e8db6fcead78bd408b83d4c29e9"],["/Windows11-2kfans/index.html","06c74e269dd56a15a42edd54bef0296f"],["/Word-Embedding/index.html","dc9ca25127fd3a30e7bfca8fe67a2427"],["/YuanShikai-and-his-Beiyang/index.html","ce489a7df23cc029cf8500c2b75f7502"],["/Zero-copy/index.html","19131bd16025c0059c70bf825e618220"],["/about-keras-model/index.html","01afbdf1c877870fe44e65a0fc04af03"],["/algorithm/index.html","6534725510f16560bb7e3e48492e9ef1"],["/alibaba-Java/index.html","609914be0c40b695fafdd19e2a1ea656"],["/archives/2020/01/index.html","0d97a1d8e18679b4452381216c7227fd"],["/archives/2020/09/index.html","645254e8da0afcd16a71778a11f50c23"],["/archives/2020/10/index.html","424d42ca813e32be662a6268889fddb7"],["/archives/2020/11/index.html","2d5961fadf1cb8a626a936ab6b614112"],["/archives/2020/11/page/2/index.html","7e8866c21b78f50a3973a57c025f2c44"],["/archives/2020/11/page/3/index.html","a8199fabe75ac44240659f7b2cba96fe"],["/archives/2020/11/page/4/index.html","2adf55ab299aced7ddc4476a0be77e55"],["/archives/2020/11/page/5/index.html","c0719c00a57dd1bfd82be4a504ae11c0"],["/archives/2020/11/page/6/index.html","8ff02f33536ef6cfa2d63126883bc009"],["/archives/2020/12/index.html","815bf8dd9ef249758286055a0ee1fc2b"],["/archives/2020/12/page/2/index.html","5d0cc59081a2ef58d014d509f0d1404f"],["/archives/2020/12/page/3/index.html","7af4f024f545380739a870a4c3ccdf6f"],["/archives/2020/12/page/4/index.html","6027a49d39b4f3db6f169d44b853807f"],["/archives/2020/12/page/5/index.html","5d2eabdaec9c1b505a4fa545685c3097"],["/archives/2020/12/page/6/index.html","91b6ecd6456d1259b443728096030e39"],["/archives/2020/12/page/7/index.html","57c3f5c575caaa98458d01e37c048235"],["/archives/2020/12/page/8/index.html","6e2b778ddf7bf444a12401a61ac3bb93"],["/archives/2020/index.html","879e597901444200cf059c87489950d6"],["/archives/2020/page/10/index.html","2b65f09baa0ea66eae8285572109d249"],["/archives/2020/page/11/index.html","432ca9969bd9030962a78a9c120a9b48"],["/archives/2020/page/12/index.html","a95fa4b80b125abf72fca049177c3bb7"],["/archives/2020/page/13/index.html","8671d440d0e31a67c00904fc295a7b72"],["/archives/2020/page/14/index.html","a034ee318b54873ed294c432a7c8717f"],["/archives/2020/page/2/index.html","b486e24d657cfc130e8da64adbedc56b"],["/archives/2020/page/3/index.html","3e55ea97f9678de7eb4d5c6dba90c713"],["/archives/2020/page/4/index.html","b9bf1921069828313ccb5f5aa8f49676"],["/archives/2020/page/5/index.html","fde1e7ffaad2a3b0ee1a1437187c7f70"],["/archives/2020/page/6/index.html","9db16649b004a11d9454f88cd6f1935c"],["/archives/2020/page/7/index.html","2087c5c56cf7049e6dad4af1fccca0f5"],["/archives/2020/page/8/index.html","5bd5d216225570bfb31e333514bba14d"],["/archives/2020/page/9/index.html","ddfb5470198fedd85468ac373672d57e"],["/archives/2021/01/index.html","a06996ba2239c3e8cbcaa4328e8d5161"],["/archives/2021/01/page/2/index.html","6472c43808543fadded2a9d851ebb212"],["/archives/2021/01/page/3/index.html","cf823091c4ffc2cdc24ebfd700cf29c4"],["/archives/2021/02/index.html","c238e0bf778751f50260ecfe08f19772"],["/archives/2021/03/index.html","325dd200fab24fc5615a212fd398a137"],["/archives/2021/03/page/2/index.html","0ccb11fe29f6bb547197a1872243ce6a"],["/archives/2021/04/index.html","d33882f6e8314aefa310d45cdcaf9894"],["/archives/2021/05/index.html","4ad0f365cab0b5169eda7ca4a0af5837"],["/archives/2021/06/index.html","ef824be00c8477bd92fe2eca9dcea373"],["/archives/2021/07/index.html","871538bdec4c7cf40d2b0865fc7a5498"],["/archives/2021/08/index.html","7781757a34c476ec8f221964cb2d3d2d"],["/archives/2021/09/index.html","5c5d2e346009c2a9681872be88088639"],["/archives/2021/10/index.html","8543d2789ea94dc3f7e59de5a1e20b6f"],["/archives/2021/11/index.html","b44d9000ea3a2d91415d0b2ea251b72a"],["/archives/2021/12/index.html","d49a41021e5d3611340f174b760935ea"],["/archives/2021/index.html","fbe2a9663a84f12b223012059309e9c3"],["/archives/2021/page/10/index.html","30cfaca1575bd1bc0603f87eaf642a7d"],["/archives/2021/page/11/index.html","d98ab512acdf8c5cbd3c40c7c61acb6a"],["/archives/2021/page/2/index.html","6710b978ec5403cfac8ff05d1d51b795"],["/archives/2021/page/3/index.html","4a8f05e62a4322f76c28932de79b6013"],["/archives/2021/page/4/index.html","d48712def19992065dd2630d1ed92c0d"],["/archives/2021/page/5/index.html","a5fca0ed2ea4ac4f236dc7d3eba2f2ca"],["/archives/2021/page/6/index.html","7e0d45824764488565aa8d78a8f03ab0"],["/archives/2021/page/7/index.html","0668921739264b4b6806aa77cc0e6a85"],["/archives/2021/page/8/index.html","63fd49c33e7f5cea9c40cdc577d4a8ea"],["/archives/2021/page/9/index.html","fbddf92153d23fac753525bfe5da639c"],["/archives/2022/01/index.html","d0a859b936495fa5bb0d23a83eb63536"],["/archives/2022/02/index.html","151fbfcb46bd35242a8f549cdd30ba72"],["/archives/2022/04/index.html","9c4547ee230892459e04ddbe65b77b14"],["/archives/2022/05/index.html","de02bf5ad043a3322870e5be4615cf5f"],["/archives/2022/12/index.html","e104fdc9ad1d8b6dbc1f729ab42c5fd1"],["/archives/2022/index.html","1bb7a7f184d7521a26f4329792578b14"],["/archives/2023/01/index.html","fb0c7fdfa88f8d9caa44eae429ad2aad"],["/archives/2023/02/index.html","28240ac299268f4c5e828f02ade97bfe"],["/archives/2023/03/index.html","5256007dc2d19f647d2e4f9c9fe5e420"],["/archives/2023/04/index.html","8a4802a0b83753274823e43fb9281187"],["/archives/2023/06/index.html","77fc5c2b8ab4df450536c82cc11ab2a6"],["/archives/2023/08/index.html","bb8c995b0bd8cf7006002c620ee68f4e"],["/archives/2023/10/index.html","11616edc47f7830514e4140302baf639"],["/archives/2023/index.html","8d274f726e0a0a5097d87db0255f0339"],["/archives/2023/page/2/index.html","301af330c6980ee3a6202efb6e96c890"],["/archives/2023/page/3/index.html","3a873e321e92b5543a795e440c45fb0b"],["/archives/2024/01/index.html","51fe6987809f41a92ee5a32819f12f3c"],["/archives/2024/02/index.html","9411cc8886e0480b9647d0f06894e117"],["/archives/2024/index.html","ee4c7bfe6c83e19e540f90723bb501c3"],["/archives/2025/06/index.html","854beae7894c43fc18cb2b5954eb3c60"],["/archives/2025/07/index.html","ec635a7376f7c4b276f251e2bbb59c26"],["/archives/2025/08/index.html","cf6c02ededa2c1140f97768267efce90"],["/archives/2025/09/index.html","5b3e16946709c8aa84ad6aec3f07fd5b"],["/archives/2025/10/index.html","56c532d7e63d02b24f9460251d938566"],["/archives/2025/11/index.html","244feb024a8cadd7f6aad51ca3e4cb5c"],["/archives/2025/index.html","56420fd5ea6c7adfdd295555375b1386"],["/archives/2025/page/2/index.html","4f4eb3dd676b151e95ceb51e1231ad49"],["/archives/2025/page/3/index.html","c8581d5d966edd2d0c9e77caae2c9df1"],["/archives/2028/02/index.html","6fa8b7e61f467347f47c448e7f15b525"],["/archives/2028/index.html","51093f8c99ce17ca1d0d667521e43d2f"],["/archives/index.html","28701e5bcfcf0dc5d1b8e8f40def0bc6"],["/archives/page/10/index.html","8220a19f497a0bb154d974eda3b2d677"],["/archives/page/11/index.html","d4104a80b6272ac440303beaac1068c9"],["/archives/page/12/index.html","1a2286c80b13d8fc596823b3f9954984"],["/archives/page/13/index.html","05779f7b85b5aaa9f7cae9395477f4ab"],["/archives/page/14/index.html","e13fb718ed84e122a92c10b946747e5d"],["/archives/page/15/index.html","61e6c194b59283235cb76e1c7a06d70c"],["/archives/page/16/index.html","6fa8f1884b37fc9d3801fa01e69ebb98"],["/archives/page/17/index.html","6011e769fdec5c1c96df56f9a97f76a4"],["/archives/page/18/index.html","f9e1d74d44bffec79933323227871b3a"],["/archives/page/19/index.html","a8f91618aed71a4b39be4b4e37bab252"],["/archives/page/2/index.html","2e70bf40924f3f0d1beb459885b59a91"],["/archives/page/20/index.html","c23f4fbab0ac3d0b23a822ddff5e1386"],["/archives/page/21/index.html","51ac109cdea756036e145851d8778d05"],["/archives/page/22/index.html","593bef4a3361011ca8df23da20b12c11"],["/archives/page/23/index.html","158892f65be8e55092806d24afa65f13"],["/archives/page/24/index.html","a2d4b5349b68ff6a54adf787d165f8e4"],["/archives/page/25/index.html","077c805722caa7c990c1ae7364cda0d6"],["/archives/page/26/index.html","e4b5ecf32f9096b341bfd88b798e6049"],["/archives/page/27/index.html","a689efb21a01be6a97a0beb6409fcaa6"],["/archives/page/28/index.html","0fe590796c4870f34abeebe1c9ef0ffe"],["/archives/page/29/index.html","2d3fdbdbc988218aa28f018f2c3d89e6"],["/archives/page/3/index.html","5e447b464ca0d56a9490c4bd0ab15af7"],["/archives/page/30/index.html","8ed62fec624dd480f35b4c5ba08ea3b0"],["/archives/page/31/index.html","636b1be1cab91363f8ea2058f38f0891"],["/archives/page/32/index.html","eb56d010ab77edccb8e420b863ba3acd"],["/archives/page/4/index.html","2d0cc44bbdb0e13d05fcdc81abed419b"],["/archives/page/5/index.html","cba628a8cab8bf7f7f89e9d224f5c7ed"],["/archives/page/6/index.html","09614439653ceb396cb034ecc342c6de"],["/archives/page/7/index.html","2377e4b90c339df0dbf3e2aa8315a421"],["/archives/page/8/index.html","0360c1e1c009d965d59607a0717397e7"],["/archives/page/9/index.html","2839fbd5a3890a0e8c6485c408fa2634"],["/baidu-search/index.html","87645e85cc21dba78bb23ab48ca23728"],["/baidu_verify_code-Hh2fKNlEB1.html","0acfe9bbb05c8f7d5cb37187d80e0992"],["/be-a-programmer-instead-of-a-code-farmer/index.html","b0a0953d4d33f07958421d702592fbc9"],["/bought-a-house/index.html","86ddcda7aa2527f1b86f6ac4284ae6fc"],["/categories/C与C✙✙/index.html","5ba4782c097b565cadb4832642ed6651"],["/categories/Go语言/index.html","9cb20fd4d368b90dd802709e861c9885"],["/categories/ITK与VTK/index.html","5586f712c3b3c45968dc1820844edb5f"],["/categories/Java/index.html","ae4322c42cbc8ab56afb50a65f25faf7"],["/categories/Java/page/2/index.html","8579d69395272980443877bedf4fba02"],["/categories/Java/page/3/index.html","c851d46a3754dbc5d4176992bfdb42ea"],["/categories/Linux/index.html","a58cc995758ffb41a8d79936cfb13d61"],["/categories/PLC/index.html","ae077fb5502ea23fd4b73ce7bed94abc"],["/categories/Python/index.html","96f147e3e45d0e36942665b7836ed782"],["/categories/SEO教程/index.html","8d403e4777494bb6a8809f3438fdf6c6"],["/categories/index.html","387a3e620c08adf6e7ce4f1cf755226c"],["/categories/图像处理与机器学习/index.html","2ac775acfc12f2175dc451c68484455c"],["/categories/图像处理与机器学习/page/2/index.html","9df7f422fab363a3165f6f9afe89649b"],["/categories/图像处理与机器学习/page/3/index.html","3868c5b0e0092951483c4ee6bd4dae1e"],["/categories/图像处理与机器学习/page/4/index.html","21d89bdd09190ea5d4bccc31c114b86f"],["/categories/图像处理与机器学习/page/5/index.html","3d03a37f6bfa437deb0fd52e65e97a00"],["/categories/图像处理与机器学习/page/6/index.html","78ff38ded1de68bd5e97fe8483034732"],["/categories/工具/index.html","bb4d58315142192b5de6995bf31f5643"],["/categories/工具/page/2/index.html","c2af671cc5b11c4a97e1c696058283cd"],["/categories/技术以外/index.html","ad7d7a9fc3355639210a24b73f90ed9c"],["/categories/技术以外/page/2/index.html","4b2beef61cfb14a6133ff9787f0d933d"],["/categories/技术以外/page/3/index.html","3af849bd8485bf6cd77924bed383367a"],["/categories/技术以外/page/4/index.html","837a768ef07819880200e43a2a6a5fa9"],["/categories/技术以外/page/5/index.html","4f1d18b56cfb7ba8488fbff0b8a44772"],["/categories/技术以外/page/6/index.html","590e4e003dbda335cf3d1a4551ff97de"],["/categories/技术以外/page/7/index.html","219c7d0bc1c549e8935f1b9904b9b061"],["/categories/技术以外/page/8/index.html","f48968614071dad4a0a69ddcd98511a6"],["/categories/技术以外/page/9/index.html","d9cb3ef9ab4289ffc372e30ebce976ee"],["/categories/数据结构与算法/index.html","0b432bb487fbab1e72d990f7f2396726"],["/categories/数据结构与算法/page/2/index.html","7e8d35a5ba1cf59a2c51067de1c5f685"],["/categories/科学上网/index.html","ea8a4000680a10bdb1e106544bc83d70"],["/categories/科学上网/page/2/index.html","ea19664f06b370432b0f6b8129bb2298"],["/categories/科学上网/page/3/index.html","fd47a4ccabb4c596105f170e5d13e5cc"],["/categories/编程经验/index.html","8e00c0b432d3aeebc80e03d0df96cf34"],["/categories/编程资料/index.html","fcfa46b0816a7860765001a9b8ce84da"],["/categories/编程资料/page/2/index.html","374ce391db6d7285548f6329eade8bf3"],["/categories/编程资料/page/3/index.html","34b3d9fe9ecfffaf9c9e3834835d4a95"],["/categories/编程资料/page/4/index.html","28f92f0c7c69b3ab4468157f29526eb5"],["/categories/计算机基础知识/index.html","9107b8c67a757b8f81a3f55783fba6da"],["/categories/计算机基础知识/page/2/index.html","5d9b6ae40d0f32e893533968b6bd71c7"],["/categories/设计模式/index.html","28cd7e7179797fabc9b053164268e830"],["/choose/index.html","ce9aeba42e4d3d27aea1b29635c0ecef"],["/choose2/index.html","ecd93725206328af078bd01309debba0"],["/chrome-crx-intruduce/index.html","38e122d3b12557d8a4617719f5e3488b"],["/clashvpn/index.html","d42daecaffee23ff29de56bd1f11156e"],["/coder-blog-website/index.html","1f10527526f977a8db2663a3246cae6e"],["/coder-source/index.html","a5457e60184e5e19123f3d94e5db9a2e"],["/coder-videos-website/index.html","91da68baecaebdf6db6be7eb919c0371"],["/computer-book/index.html","bdd13a6e58190a408adb7bd37eb222ce"],["/computer-censorship/index.html","9de5604b831baf7ea90a61256cdc8bde"],["/computer-network01/index.html","fec225b66ab7480d47bf96e53d096d1c"],["/computer-network02/index.html","9134c975c0305d574a2b499ba094af6f"],["/css/main.css","bc32ad34ec4990d934c3c647bdb62f79"],["/database-Mysql/index.html","4286fc4f60f66fac4ab85b80cc433bf1"],["/eclipse-lombok/index.html","210ffdd43e990502bf8df2c21ccc3b2e"],["/fully-convolutional-networks-for-semantic-segmentation/index.html","78d1d05108e1d96cd4721829d9eb0f7c"],["/great-firewall/index.html","0aeec28bbaae43acb4f3b13a93e9e6f4"],["/how-to-signup-chatgpt/index.html","8ad7adfd8380f070f5b06875233ec139"],["/how-to-use-Gemini/index.html","a815b51cc0c6677a786e730dbbda79e2"],["/img/logo.jpg","c5981efb8d4f0a9b518b24dbb6adca06"],["/img/vpn.png","bb9b93ba246d5428a02fc9523178da3a"],["/index.html","d49ef8bcb75a420015d148b0530db2f7"],["/ios-open-internet/index.html","b76a4d738a6b5c596701b9c1d2c73875"],["/iphone-open-internet/index.html","90ba1124925ddbc88f8cd2ae353c8068"],["/itext-makes-pdf-form/index.html","8839b2e05914b83705b489d2ae4af6b1"],["/java-Set-Map/index.html","9b3a12f3062c5eb8ce4acfd592824cac"],["/javaweb-server-error-codes/index.html","332853d710a115360887714ca8ee98c8"],["/javaweb-source-code/index.html","1e8a073c3f5ac49146b3a376cc1763a4"],["/js/lib/busuanzi.min.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/js/lib/lozad.min.js","47904d34a224931dd1b615c59a3dbe3b"],["/js/lib/prism/prism-coy.min.css","0ccad54d95845901ead59bfd3ecceb14"],["/js/lib/prism/prism-dark.min.css","a4711d2957d6605eb5682bdd228cf123"],["/js/lib/prism/prism-funky.min.css","efedcdccd7a9ab342d2d9cacd24920af"],["/js/lib/prism/prism-line-numbers.min.css","38e22e790c279bb56f9ec4b90a2a2d58"],["/js/lib/prism/prism-okaidia.min.css","5ac6f9de996fbec68aaa106dfb16e061"],["/js/lib/prism/prism-solarizedlight.min.css","ecc7e64d039873ffcf7fb27babdaeb5a"],["/js/lib/prism/prism-tomorrow.min.css","456af2a14ae4f5089939d5904ac40fe8"],["/js/lib/prism/prism-twilight.min.css","ebb5c355332a8cf9a1ce37a2a69d678f"],["/js/lib/prism/prism.min.css","a5234d614834658887cec6a9515890f8"],["/js/main.js","052d2b299d9c750afea8df0b802ab7c1"],["/keras+TensorBoard/index.html","0368ac2e89d5dd817b85edc24a7e01da"],["/keras-beginner-guide/index.html","413a55a94bc4207bcf7d1e6af155dd6b"],["/kmp-algorithms/index.html","255e3f34b524cf3400368a403af4ac03"],["/leetcode-Java/index.html","78da596419672f9ccc9430bb3919f1cb"],["/links/index.html","46529b945f610eecf7561879643f4f6f"],["/linux-java-opencv/index.html","1994ac59bb7dc4131959841765a21826"],["/msb-source/index.html","6ede76b70fb9c65cd8d90a6107d11a98"],["/online-BUG！/index.html","9a47381ca47b8717ff16cab2f39f0340"],["/open-app/index.html","51d8e2a15790ba13817919bb52977f56"],["/page/10/index.html","712aceb312b7fca40db60ef8b51c891f"],["/page/11/index.html","6de97a8155e7b5a647b5a4230e9f382a"],["/page/12/index.html","310fb7a8bc0313374c6be4b533cf9603"],["/page/13/index.html","447d1ff44bffe774d4295dd149aaa61b"],["/page/14/index.html","5951c101d93cf46276577c9b9e3a2c83"],["/page/15/index.html","2750efd4454cdb9971e78749ff0ad4d7"],["/page/16/index.html","2fd71c5cb8d25f9ab7195c428176ef3e"],["/page/17/index.html","6eb4a5e99e0db17808c09a7bc364e667"],["/page/18/index.html","cee554c8c13094bac2f859e174eec1de"],["/page/19/index.html","2e3ad3c441dc5c0e8d943204822924f0"],["/page/2/index.html","76a6ade12e6e9adc46aaf95bbc7cd64b"],["/page/20/index.html","7275bf11e5955bf73088bc5f320156cf"],["/page/21/index.html","00e7e5e578c99f978ad261a9078653d6"],["/page/22/index.html","401ac0e1a3fdc49c5bb98ca8e137752f"],["/page/23/index.html","3fa8be49353481c5b7b34e0067eb25b3"],["/page/24/index.html","b5abdfe01b4c017f1f4602e11a6bd68a"],["/page/25/index.html","9bcbb3db586cb12c674e03bf95eecaeb"],["/page/26/index.html","c65e3d66d1c2d3202b0bab39fd40d7db"],["/page/27/index.html","cfefebd705d0bfb267a78aebea0ec0df"],["/page/28/index.html","4278ee8bfbb8f79c6cb42091a6538d6e"],["/page/29/index.html","54152878f5fac0ae361cdc73bee58ba5"],["/page/3/index.html","0bea315e28ffbb12ff4661cb160d10ea"],["/page/30/index.html","97fd23806b8f64cc28f65955a4bc58be"],["/page/31/index.html","8f97d4eb2a206a637ef4976cdc4b6884"],["/page/32/index.html","c69344e8925d97b0e25b143dfbc56976"],["/page/4/index.html","5fd49f95280b33fe6fb730ebaa58f0e4"],["/page/5/index.html","5907c7456ec6e70e215a22be7aca9202"],["/page/6/index.html","68e1ee1f34eaa20a9e2a32d331998631"],["/page/7/index.html","2f23603cf60977911bd683f9d1c277ee"],["/page/8/index.html","1675910eda1412fa47005a13b7254208"],["/page/9/index.html","8f2ef6fc242d1ed0a653e88fe9b4c3d3"],["/pandas-data-preprocessing/index.html","b93208d6354fe14d4e189f1f2fa16071"],["/python-Blog/index.html","42ec0e05e0251c64d5c59ca4f14eaa7a"],["/python-yeild/index.html","cc2db8d2141325d1f3aa7af0dae72112"],["/python爬虫教程/index.html","51253ee4251706b1e96a2ee42b66f7c6"],["/software-copyright/index.html","81ac370100aef5715d2c8fa426e5a46e"],["/sw-register.js","962fd1e022ed999f18d3aa6efdebc191"],["/tags/AI/index.html","3071f129f5e40969f50da0dd87dbac3a"],["/tags/API/index.html","7c6769d4d0dfcad3a66baaf13cb8517c"],["/tags/C-图书/index.html","8c7231549452880faf384af8c14f8f7f"],["/tags/C/index.html","c262daeefe557d4d9e0c87cb0e51e8a6"],["/tags/CNN/index.html","50768d0f852baf9bb388560b0f552e19"],["/tags/Chrome/index.html","0ce948b699803e32a65d18fad997b764"],["/tags/C✙✙/index.html","3756185d4f7ae92578ca8867db88803f"],["/tags/C语言/index.html","05eafa619e6b2f93327704d456844264"],["/tags/C语言图书/index.html","86f2abed5db8848ab68a1be0738feb8c"],["/tags/DSN/index.html","1d3f24ce4165253332ae0720e13a911b"],["/tags/Dll/index.html","21e38c18e3924f093c79d34fbcaf6eca"],["/tags/ECCV/index.html","3ed472a1ff0ccee9c9c38af0cfab26fa"],["/tags/EM算法/index.html","29910e643f960ecf5006069e385d1bdc"],["/tags/Eolink/index.html","7161668a22dfe35528b8df672260cbc1"],["/tags/Gitee/index.html","ad63585a497da5f841ae37d6048ef6b1"],["/tags/Go语言/index.html","c6f6b6c64467d76a1d53b2200ea1735d"],["/tags/Graph/index.html","ccc822e919c7068349819563f9639310"],["/tags/HTTPS/index.html","b68ac6b86b07e6a362e00429e03abacd"],["/tags/ITK/index.html","11a56bc0bd5d06b8c57f18b2aecfd222"],["/tags/ItkVtkGlue/index.html","9ae563f7bd6317a9a7f97e0db4f5fadd"],["/tags/JMM/index.html","e1f9e2fc0d4b4abbbe15ff25f5ca0309"],["/tags/JVM/index.html","3ce87df4a228b93c00a819d0a63e29d9"],["/tags/Java/index.html","53e8c38597ba8c5dc6a953faad97e291"],["/tags/Java/page/2/index.html","97167cbabc8540321fbd348f8525296c"],["/tags/Java图书/index.html","26abb22ad49e04c2a4ea6498146dc447"],["/tags/Kaggle/index.html","f2022eb0de19c4cfc8fb5898372ad09b"],["/tags/Keras/index.html","596e44f8cad75ffe978b022f791fd1b7"],["/tags/Linux/index.html","1acf74232c1796f47cf5bf7017ae9cc7"],["/tags/Linux图书/index.html","f3aa952db0b87d2a3e3d6c20d0bf83c8"],["/tags/MEPP/index.html","a281c55d76e93bfb4f0711899e22e600"],["/tags/Map/index.html","bc9c7998ac3d523a2a3cc2752a921bae"],["/tags/Matlab/index.html","264b10665b353b9c0a0e35652c0e3eaf"],["/tags/MongoDB/index.html","7c51da26f6e2fd032533e6d8609043a0"],["/tags/MySQL/index.html","adca188ad3030cba3445297573db43a9"],["/tags/Parzen窗/index.html","c4f98fde8cc6c46bed1a4659aea055cb"],["/tags/PicGo/index.html","13fa9bbdfcac1f2f32f2870e20eab4ab"],["/tags/Python/index.html","c5e75662a9d0d8ef2dcc13aaea807c00"],["/tags/Python图书/index.html","a2b6525c2d8cce035ad0c61a22d462e0"],["/tags/SPHARM-PDM/index.html","c88d81c9e5595e84668127167acb25c3"],["/tags/SVM/index.html","7cd232ca97a044c63f87c5a5ef4daec5"],["/tags/Servlet/index.html","e1aa78baff3f0199ea68b7ba110fd912"],["/tags/Sping/index.html","63ce6cdaf2290d3faa0371b0755c04a8"],["/tags/Struts/index.html","025c7c29b24e3a81b460f58b1ac1dd31"],["/tags/TCP-IP/index.html","8dbc5a5bd51656dd9d21998ed48c8d74"],["/tags/Ubuntu/index.html","d22aa8020aed2f56e11ade3529e5d77a"],["/tags/Unet/index.html","c18f8418a05d80907c46a06bc8d215de"],["/tags/VS/index.html","f796222a176e961b0be1d6c476747276"],["/tags/VTK/index.html","cf6007bd80bb525035d5efa6180cb2a1"],["/tags/Windows/index.html","26bbe9a358693311bffe480bc799706d"],["/tags/edit/index.html","bfe334c729cd6617a35937b4d63999b4"],["/tags/hibernate/index.html","1fc2381e953c253fcab86e2241830041"],["/tags/index.html","df1a580a0bf1f9f7a9b654f411e42f56"],["/tags/itext/index.html","ee19a2ce4a5cb4276e86000d5a91e9d6"],["/tags/jdk/index.html","a35c96520fe7306feef3ed03167c3059"],["/tags/kmp/index.html","93df1f32b7c9f311a3abf940df3d0707"],["/tags/k最近邻估计/index.html","addf98a874a5982919204e2f9c105ad0"],["/tags/lombok/index.html","e4430163d42d6df589e87eb8bcb70204"],["/tags/offer/index.html","3fe28281c1e94957b8f63d251dd28eec"],["/tags/opencv/index.html","376ccc3e8b68fca5cdb2c2db510c8769"],["/tags/pandas/index.html","b80084179d80de6c214e48541e74c1db"],["/tags/string/index.html","118f328ffd69fad70743f09ec0288bf2"],["/tags/vim/index.html","ad1eac9cc29178a372e7ff0da1a62c09"],["/tags/vtkPolyData/index.html","48d50c3859ef91bf818c3da08984ddcc"],["/tags/web/index.html","ff554eb17a9aa2f1e03ebf35732b76d2"],["/tags/xshell/index.html","7480c96793b1e0ef7154b18233541fe0"],["/tags/yeild/index.html","a218f3c673a9a9110e09ff535eb917b2"],["/tags/互联网/index.html","93d38232ec36e3b7ff3e5c77d008657d"],["/tags/人工智能/index.html","6fd342af9808aa8aa597923cd5ca4e07"],["/tags/体绘制/index.html","0ef041f8f3c28bc6cb53c17a882a52b9"],["/tags/全卷积网络/index.html","9a28ad91b13bf72f661993eda1241f04"],["/tags/公众号/index.html","539f2318022092c05f834a5573e23400"],["/tags/内存模型/index.html","79ab150aebd21d57b1158ba49f73580b"],["/tags/内推/index.html","5ef1b5de56fb6d8c4751d4cbb1b6afdb"],["/tags/函数/index.html","68efc2fc8bf3ea53571442a6d1a10be0"],["/tags/分布式/index.html","d30008f8c8540b1a5a4465a92f51145c"],["/tags/加密/index.html","6bdc1a5f73ef3cd59cce8cb00b01d547"],["/tags/医疗图像/index.html","2e8ee796482cec408dcc279a7bbeced1"],["/tags/博客/index.html","525f5d0aaf29b4568311ea9ff75aab61"],["/tags/图像处理/index.html","dcbec05660e8a5fad3249f54c3c25497"],["/tags/图像数据/index.html","4b794f0d5c2dbc1aba1982d8ca307b76"],["/tags/图谱分割/index.html","6c0f38e60bd078955be6e832c75adef6"],["/tags/垃圾回收/index.html","d9077c6b2d0897068e3a066a875af467"],["/tags/多线程/index.html","4ead0b509bcc6e2f8deb4dd4423a5b49"],["/tags/字符串/index.html","794a26bf04abfe5f746685b7668ffd28"],["/tags/工具/index.html","6d656a41a69c389167b14fc3f43b7e7d"],["/tags/工具/page/2/index.html","f016191b295fbacb4d642325b94624ca"],["/tags/弹性形变/index.html","baf0f23d7efea1c0fecdae5eb59d8840"],["/tags/排序/index.html","e0b23c9f561ac05e11f8bc486a1de7e8"],["/tags/搜狗/index.html","23f8ceac5a187ecde11c79b066b9a5f0"],["/tags/操作系统/index.html","8a98adbc2bf8f52b7b3ea56d1cc15581"],["/tags/数据库/index.html","07b74ca430d17c90d6797e548b56a5be"],["/tags/数据类型/index.html","6424d92360cac9f86dd0323154e4c517"],["/tags/数据结构/index.html","767f69c2785032d3f4cbcb4ebbf0af53"],["/tags/最大似然/index.html","756485facefc4c74d5c269612c9613f3"],["/tags/期刊/index.html","678736fa5e5838592200c408385e2f57"],["/tags/机器学习/index.html","edeb553088a97c17c4bd2f8f67fb6df8"],["/tags/机器学习/page/2/index.html","413647afe97b70812678df007f8ad6f5"],["/tags/机器学习/page/3/index.html","b547aa8b55084cfe0b925c7e75dda62e"],["/tags/机器学习/page/4/index.html","78c5a48a857c1fc32ce8dd3240f1b230"],["/tags/机器学习/page/5/index.html","14f61247a2ff4638b47c7b65c26e1a8b"],["/tags/树/index.html","0aee7feb814072536a72cd4c2579badf"],["/tags/框架/index.html","08d175eeb60731ba9d6ccaa2fec11a56"],["/tags/求职/index.html","a6898bd60b47592c029702b48f1a5605"],["/tags/汇编语言/index.html","d815bc62c4b18cb945aa81c67b8dd9a1"],["/tags/深度学习/index.html","2f685730c60b4e929a2131bff58007e4"],["/tags/深度学习/page/2/index.html","b0c4184a44042057617bc08f3867acc1"],["/tags/深度学习/page/3/index.html","820f33b2fb7f8aa7cea6420297eb5538"],["/tags/深度监督网络/index.html","5cb612bf6fed66e12b64f77443207dd6"],["/tags/爬虫/index.html","07efd9cddce511c55c561c6dcb5e11d1"],["/tags/电子书下载/index.html","ecb6930945de3a2cdd79d333565d6dab"],["/tags/电子书下载/page/2/index.html","4659af802c881f4a4fdd0f457fabc20f"],["/tags/程序员/index.html","38f815b3358c1501b86acc87a12eaf5d"],["/tags/程序员面试/index.html","625fa2f1263fea620a0b397c94fba629"],["/tags/简历/index.html","408f348eba246e9fdb6157f8167dedef"],["/tags/算法/index.html","e76f76e1209e6967c27ec800569e8592"],["/tags/算法/page/2/index.html","18fb843397d64d89eabf6561659d30bc"],["/tags/算法/page/3/index.html","5943411ac508d8ba11b1311c2d4194f3"],["/tags/线程/index.html","4c837ac972c88cb26e5a287ee91ab555"],["/tags/结构学习/index.html","dc3791142354343261470f9410011f17"],["/tags/编程/index.html","367c496fd12a4cc82b5db76e6791d0b2"],["/tags/网站/index.html","68babaf3fea06389d0f07f697449983a"],["/tags/网站/page/2/index.html","ff3ad08d0a0b34f4c2b3dc1620561359"],["/tags/网络/index.html","6e2159abea02bd2faa594dd3bfae8671"],["/tags/网络原理/index.html","ebb92fc2be3dc68c201d5caec13cea21"],["/tags/肝脏分割/index.html","a7347c47d65e6e174044ca1b03435de4"],["/tags/计算机/index.html","bf3e9494eed3b39022136e721833d46f"],["/tags/计算机专业/index.html","5756d651214aeeeedf4e20f2b858fe67"],["/tags/计算机网络/index.html","83a0aee79f5ef4339813a69a0df45b13"],["/tags/设计模式/index.html","c8efba1e4ad90012e60c751f689b0530"],["/tags/贝叶斯/index.html","a76e8a4601f10c1423b5ea7828156c27"],["/tags/迁移学习/index.html","f5d7970eb6c35b9b18ad3775a95b22d3"],["/tags/面试/index.html","6d212ece7b211193d39f446a662f8ffc"],["/the-way-of-pragram/index.html","b3cd2d7d90e6b56b06655810bb583586"],["/untiypro XL安装/index.html","c15e66886fee3d381edddf0773dd974d"],["/video-websites/index.html","3d7ae1a0d5141e63d237405ce4e86389"],["/wechat-fans/index.html","6a7be8bf03c13481f6df253244cb359f"],["/window-run-VTK/index.html","ccc540f35423553d47334c9cb5bb8e56"],["/xshell-connect-Linux/index.html","68cc43ac205ac70c014587709d84ab8d"],["/‌Accessing-the-Open-Internet/index.html","9385051339dd210070b8b18d881b610d"],["/《Java高并发编程详解》，去大厂必看！/index.html","35416166ce3701412dc347d5cf996493"],["/一分钟没了 1.5W 。。。/index.html","82037b492f11dd8378724399d164ee6a"],["/一条高产爆款内容生产线/index.html","60d94bc8379cee4fac97643bdaf1cdc1"],["/为高考学子推荐的六个就业前景广阔的专业/index.html","468ce50567689f5f4610fcae6a9f2abb"],["/互联网赚钱机器---社群/index.html","fbdc15920dc4493d0fe16ad5ae93387a"],["/你们常用的工作方法和思考方式是什么？/index.html","99942cf7375f62e5cb3f8faa58f18222"],["/关于环境配置的一些事/index.html","2578141eeb186e493b9afa127d7b64f6"],["/准备了19w！搞事/index.html","f808800ab49bd52a192c38889207bd02"],["/几个很重要的感悟/index.html","4cd65e7e7f8c23e7516658ac83f7659d"],["/分割ROI篇/index.html","befc29c88523dbbbef5f60c40e7ac057"],["/分割精度说明/index.html","6f3a1bbbb6fb5dcbad7eade3fd452d73"],["/分块程序执行/index.html","7f64bcbc4b23df95f38c6c4fe1be47df"],["/加班公司黑名单！！！/index.html","67f431c6bd6fa09255bad5bf0213a8f6"],["/卧槽，上知乎热搜了！/index.html","b9cd3917980cc1e0035fc73b6fece5a1"],["/卧槽，我的小破站爆了！/index.html","b73106d278f76f0e0c41611d09823b70"],["/卧槽，我被盗版了/index.html","af47a83094ebe96bfbf4ef9a97544c62"],["/卧槽，还有985大学在大一上C语言课？？/index.html","d4b884911a0f97559ed464fe17b25dd4"],["/历年微软面试中出现的leetcode算法题/index.html","712799f35b86fb43d269cd6b60f51579"],["/去特斯拉试车了/index.html","cf42d49c434fb14e2ccd563d2e229c87"],["/吃苦的三种境界/index.html","baf3a603231a5fd8f65b995bc6315003"],["/哪本书适合推荐给 Java 初学者？/index.html","6bcc2aa11fc53bbaa6c0d952fa4762d5"],["/哪本入门级的学习数据库的书最值得推荐？/index.html","b8d6ef4274cb35afe00226b375f48244"],["/国内外常用的AIGC模型/index.html","95d209e9e0e21b2ff40402dad32d19f1"],["/国庆假期/index.html","cffae7696a50121b05faa49099b9f46a"],["/图谱程序字典/index.html","fdfdaca81482509c7277f958ec2363d0"],["/图谱训练与分割/index.html","a007de7efb6e765811573af1d8db4276"],["/宣布一件大事/index.html","771b48ea0831cf77ef981b7c77990720"],["/小鹏P7i试驾体验/index.html","43f6e9d979dc325c6f760290caa9afee"],["/微信PC版3.3.0内测更新，电脑可以刷朋友圈了/index.html","8de7f65a42209b71264fee51c662c15a"],["/怎么更快的赚钱？/index.html","40b7a8d226ac72502b90b262f3147e53"],["/我毕业了/index.html","0a6d73b9acd68d77fb5b026f35d2a466"],["/我！真！的！找到了！爱上学习！的方法！/index.html","6d653a74f0598765d1de898daed9d008"],["/户口的意义/index.html","35780b12a74f9d20adfb9ee54ae64b01"],["/推荐两本经典算法书/index.html","34ffb3fcfffd6aaaf7413ba42af3405a"],["/推荐几个在线学习SQL的网站！/index.html","34c2ff7bfdb784a5f8e370c8faa78212"],["/搞了一个程序员成长晋级社群！/index.html","16975ef7e7d7df72b045dcba34a9f113"],["/摘抄/index.html","d9c5dc77623d924ab9e436858257ebcd"],["/暴跌30心态崩了/index.html","09f52eedfd229df679adb47a0594d608"],["/最近很火的ChatGPT到底该怎么玩？/index.html","1f01c5816e8f3582c92f47d1ef022bc9"],["/有哪些好看的日历可以买？/index.html","5d1b9dddd8b66571c1422b05be27435b"],["/服务器有啥用/index.html","28074e7865f91c6187ea7d7dabcc5b2f"],["/来长沙了！/index.html","741c2b7a10ff7e0602a90b525d888811"],["/校招污点公司名单/index.html","c7e1fd3ba1b32149f5f879d16c74d5ea"],["/梭哈200多万/index.html","8b51c45638c1f7f9c6966dfacf60d111"],["/梯形图入门/index.html","9e034c98d11b94a5b0b40738b5ba6d32"],["/橙心优选，凉凉了！/index.html","b2835686c59b6658feae23504fc3d8cf"],["/比亚迪汉试驾体验/index.html","35dbd77c92c226741cacc47dfcdd1577"],["/清华转学成电，真的牛逼！/index.html","d0b088a911dbbc45218541f2497cae67"],["/滴滴程序员被亲戚鄙视：年薪八十万还不如二本教书的/index.html","cfc67e3e599d9d8052cd1b6321eda8a3"],["/社群！/index.html","f74a066273407fad5b47a909208c6f36"],["/科学上网之VPN篇/index.html","9c3d7be5912c09b5ee20137d23992fbf"],["/程序员必备的几个技能！看完你也是大神/index.html","755b980a16ceebc5766fb44adcbdf7a3"],["/程序员绕不去的槛，Linux！！！/index.html","17a17581bed171564cdb833c147af166"],["/蔚来ET5试驾体验/index.html","48f5790e8a13a6680fe51f199b42480c"],["/蔚来，牛逼！/index.html","6f044d2f3f0077abd977fba8386aea0b"],["/被录取了/index.html","2f2b6a2fc2b224458c0cb4d73882cfe9"],["/被找事了！/index.html","dae25795d40a457cf468d0ac880a0b25"],["/被拉黑了。。。/index.html","968f10e8268f667a26b060e9e62d13c7"],["/被车撞了！/index.html","5c89296f2f11be706e22d5af21b2563a"],["/该如何选购固态硬盘？/index.html","6d72e4d81a47d3d2038f5fe224d6e237"],["/这本书一定要看！/index.html","4428faa30db1466c97f5b45e6d7c6e57"],["/选Java还是C++？/index.html","515da170aaeaec3d9eb126b668b08df3"],["/那些让你起飞的计算机基础知识/index.html","6bdb609f241eb3f554ecba639d8dc103"],["/靠这几本算法书，成功拿下大厂offer！/index.html","6c47b8d3a5814f9a2f5d801714fd3a2e"]];
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
