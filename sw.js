/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/0010-city/index.html","4733ad3b298489ca86ae02edd0864059"],["/10-algorithm-book/index.html","a4ca8ce1fdaeb1c058de9165a3441a18"],["/10-website/index.html","b546a93e9c00ee40aded7a602b76d993"],["/100万的小目标/index.html","890168a336e2aaa0cdfca54b83270ab2"],["/10w+YYDS！/index.html","0ca631b1a1d77b44efafb4123b2a0d07"],["/12-technical-tutorial-sites/index.html","181759690fd693fd45f2e8f41373db9a"],["/2 6 岁 了/index.html","530f57b4589f9bac5c326721561ab003"],["/200万，啪，没了。。。。/index.html","0fae03b1e32897c628232a929bf29a20"],["/2018ECCV-Paper-DL/index.html","3c4ac4d852010540d69163730434864c"],["/2021年固态硬盘选购最新攻略（小白避坑指南）/index.html","376631b5f47f21830b982331a3b280d6"],["/2021机械键盘推荐/index.html","168a9b8c079a88a45fba2e6978174b41"],["/2025-07-15/index.html","433c864160564791f43dfdfdd7ea9376"],["/27岁了/index.html","05228c99060fcbdf2105989489ac3e7b"],["/3D-Convolutional-Neural-Networks-for-Human-Action-Recognition/index.html","badc3fb99035549b8ff5cc758590d314"],["/3D-Deeply-Supervised-Network-for-Automatic-Liver-Segmentation-from-CT-Volumes/index.html","66faef397bd16b621bcff2d2db943b7e"],["/3D-Unet-Experiment-notes/index.html","6deeb7554988dc51547ca21909f5bc65"],["/4-Software/index.html","9f05f83c8f60440e19028456f0b4c9d7"],["/6-website/index.html","6b1c327aca27e20dfa0ff4196e9f0de1"],["/7-terminal-tools/index.html","34cd4b558a254c1aa71513254bf0b6df"],["/AIGC中典型的深度学习网络/index.html","0844de33b09158ca034fa2047a892429"],["/Agency-model/index.html","d26389a2e993c6422237d8de89267bab"],["/Algorithm-brush-notes/index.html","695acffc2af94236bad82258077962e5"],["/Ali-recruits/index.html","6c058df5975734677a37c1fa7bba39ac"],["/Android-VPN/index.html","8d1cd5104563d5b6a7351c5e63e97fce"],["/Android-open-internet/index.html","9ec944f2953dd53cda8523f162c41de2"],["/Appearance-mode/index.html","6b617d97d7c13d82fc9356e362c771e4"],["/Backtracking/index.html","df015925ae254a34cc8f0d8042ed88b9"],["/Baidu-Sao-operation/index.html","c14f313713a589c7b5b32c49f1a3e880"],["/Batch-Normalization/index.html","f5262a0d23bb5de4d4b0d7f57edb854f"],["/Best-AI-tools/index.html","23d607a53e4fc4db19f2bd39501c47b5"],["/Bias-and-Variance/index.html","6e549e823d562811673405a142a8b217"],["/Binary-tree-traversal/index.html","b0a75b913c9a16c207e5243200b55cbc"],["/Branch-and-bound/index.html","684b3071c4c5fb96330caef3cd10496a"],["/Buying-computer-for-the-first-time/index.html","f2e56ec5e832cc653d6d2cad26e30de7"],["/B站向北邮道歉！/index.html","63d1165f6c76b6859bbe07a946cb9338"],["/C++-string-function/index.html","a9e5a2a8dc618c2c8bb821a4236f8a92"],["/C-Java-DevelopTools/index.html","4fa63f138d73d420c6862477cb3de04a"],["/CS-Classic-Books/index.html","2ec79efeab3bd36aac9e44ac3c1889c4"],["/CS-network/index.html","7a779836304a27f86f22098ef39f35e9"],["/CSBook001/index.html","010d2137b384d2066008c2f7af5efbf5"],["/CSBook002/index.html","8e54030aa95096968e74e46a98cca757"],["/CSBook003/index.html","0c74b94360b71fbf6b8f16e5f0c6066a"],["/CSBook004/index.html","efafb6235b46418c43ae6fc2779aa1b1"],["/CSBook005/index.html","9bdd9381142eb5f9e193b04bf048d160"],["/CSBook006/index.html","67550d406c5a50b897185479db74d9ae"],["/CSBook007/index.html","b9bd9bda7bdbb1de027a7a2ac8cd7f78"],["/CSBook008/index.html","7fb4598662b632a8aaf17350ec54659d"],["/CSBook009/index.html","0c4056e39193350b87a927efea6e0cb4"],["/CSBook010/index.html","63e62b62208d1be326f96f61f1b8518e"],["/CSBook011/index.html","cbec174482c69bd606331bb79c95b556"],["/CSBook012/index.html","04a6606d982cdc36cd375490d55dacb6"],["/Changsha-really-fragrant/index.html","c8209d875a3d0d1395562a6e3df223b3"],["/ChatGPT-VPN/index.html","3332f9b95c6d2325d3df4d5cddf75a1f"],["/ChatGPT/index.html","8de82d9c1a9750c2de47e1cadbbf7ca8"],["/ChatGPT！王炸级更新！！！/index.html","0979187b5d3d318147aaae81a684c778"],["/Chrome-crx/index.html","6b1f694a0ca7bb411e2e027b87831062"],["/ClashForWindows/index.html","ce7741458c5e603ceba081a75e310c4f"],["/Computer-Classic-Books/index.html","953fefa62cc2034dc764a1a786970344"],["/Computer-for-another-major/index.html","14afbd69caf00b70c5a6eb917d433a28"],["/Conditional-confrontation-network/index.html","c1f7f09ec10ca92a4e092dcc714f1134"],["/DNN/index.html","d2a7a2e653590e738cb144b381524d0e"],["/DSN-segmentation-liver-experiment-summary/index.html","d95bfb635f85b93e6659ba532f5d60c3"],["/Data-enhancement-elastic-deformation/index.html","4d6dc4cde373ee5415bd040fb6f4eccb"],["/Decorative-pattern/index.html","ecfec2f19b7ca62b33d5c494769711fb"],["/Deep-Learning/index.html","c4f291798c7a5b2caad8a4c1556a1607"],["/Deep-learning-and-medical-image-analysis/index.html","880ca2bfe2b0a20f29663b23ba67d028"],["/Deeply-Supervised-Nets/index.html","8ff7a338e1709852f6c5c3220b33a7ec"],["/Deformation-model-based-sparse-representation/index.html","1bafd6e134b09a5596b203b536204be7"],["/Discriminative-and-Generative-model/index.html","4c3e41f082670453ebc068a6bd6be8b2"],["/Distributed-transaction/index.html","4b5b42aba139ac65815998bf34e8e6bb"],["/Divide-and-conquer-algorithm/index.html","fa761e82347250184d5ac379c87b11de"],["/Dll/index.html","7ff209f4f1bace6e40a34c9d7213343b"],["/Dynamic-programming-algorithm/index.html","1fbc9357cb82a965ba3d4711588f6c63"],["/E-book-download-commonly-used-by-programmers/index.html","92bed5c4d5954eb4c9d57204bd2451be"],["/EditPlus软件的安装、激活和配置过程分享/index.html","7bda7054d45cbbeffb2689e81f0fd8c7"],["/Eight-sorting-algorithms/index.html","f5e5bf8785e25a8bbe3ca19535fb50e1"],["/Encryption-Algorithm/index.html","c3302e60f0078018f9b0562c15ff3335"],["/Eolink/index.html","09c5fd519038e95d61fd3a6aa5e248ba"],["/Factory-and-strategy-mode/index.html","5627dafbfdec5f82d83e151e377996c0"],["/Foreign-technology-blog-community/index.html","a55d8e6a444872b4d42e28f9c5b54983"],["/Functional-model/index.html","2b2a063d901df10bc628e3510ccbf9f0"],["/Fund-type/index.html","d984863a7c3817fe9869afca772174c9"],["/GPT-4o/index.html","8f74094d1fa2a1198d1346f9d5bb73ee"],["/GPU-medical-image-processing/index.html","33deb44c9daed268df9a288a069ed134"],["/Gemini/index.html","20c784c444f7b8b3a94bf9daa8ecdc7d"],["/Generative-Model-of-Unsupervised-Learning/index.html","3f040f24c46388fe46a1acb164376446"],["/Git-Learning/index.html","8a85826542cf69f4d31cc59633395dcc"],["/GitHub-2FA/index.html","22b435b3cac885ea9eff531151537921"],["/GitHub万赞，程序员必看操作系统总结！/index.html","28d4c4216246f250c2329d3631890b4f"],["/Golang-book-recommend/index.html","544c3aea94032922caace781bfa31323"],["/Golang-learning/index.html","0b3b4539aa6acc74d6243886cd4abd98"],["/Gradient-descent-optimization/index.html","cb47ea476ddfb472fec65d5d2c3aee5f"],["/Greedy-Algorithm/index.html","af481db58cebeac342fc009b2d8f996d"],["/HK-bank/index.html","9ced66a8e63735aadb9b4ae601fb8af7"],["/Head-to-head/index.html","c88388d5c41896e3b7cd4aa4605823d6"],["/HexoPage/index.html","66b92b5ac3db48fd80b7407a84691773"],["/HistCite-Pro/index.html","9a338d9d32e19a137d341b43a3fc1532"],["/How-does-the-program-run/index.html","015befb19753953955b308d31ca382cf"],["/How-to-judge-whether-technologyisreliable/index.html","d7630f1312b09e4e10fa1a4f80e49600"],["/How-to-learn-design-patterns/index.html","4e945fa55764809604682ec7769238eb"],["/How-to-learn-design-patterns？/index.html","4481b2959f64db8575b962ce4256f1a6"],["/How-to-teach-yourself-programming/index.html","c4c069f4b93720ab4a19cb40e96c34d8"],["/How2learn-Python？/index.html","0e97a744b8537be65ee90e3ee5a02528"],["/IDEA-shortcut-key/index.html","e7c50dd6da54731591894d59308f5d5a"],["/IT-interview-basic/index.html","23d72f981bd739e7f47240823a4eaa2e"],["/ITK-VS-install/index.html","dc6c4b42a681750c8184d7a81876c936"],["/ITK-VTK-ItkVtkGlue/index.html","d0527a72ad184f9b96c85a30eba7e86a"],["/Image-processing-plus-noise/index.html","8d43fa52dcc4767aab054d4f797d879f"],["/Inception-Going-Deeper-with-Convolution/index.html","197814990daf04b0726704bc6fec38c0"],["/Java-GC/index.html","d898e3d43444bd17283b14f2979c04d1"],["/Java-Servlet/index.html","005fc12f58fce705ac42963201993c0a"],["/Java-array-and-collection-sorting/index.html","1072f9aa55527b6b958eedcb510ab7a7"],["/Java-development-tools/index.html","d4c56850b65f9c1a411f14a60081b317"],["/Java-eight-data-types/index.html","6a3b74ff1254bfffdbe4d015e5c7a725"],["/Java-interview01/index.html","132cd55d904c6c76dac8622ee089d472"],["/Java-interview02/index.html","86764793c8109cd5a1ee277b8aa00be6"],["/Java-interview03/index.html","1e04b6e59fc623bf17d7a4ba7a9ddb1e"],["/Java-learing-map/index.html","0f7bf3b9d08311b4b54f402b978b6ec7"],["/Java-learning-route-map/index.html","7a9805b5bcf51a3d5c45d53682111cae"],["/Java-memory-area/index.html","c0e1fbeb534963f0901aa2441623ddc9"],["/Java-memory-model/index.html","995d093044b6e901dd8aa16c93be5da8"],["/Java-multithreaded-learning/index.html","6a4d9f4da55b5f4c7fc139b003591744"],["/Java-project/index.html","ce1c920c03e5ac2ee1c3e8ed008f4c30"],["/JavaWeb-Chinese-Garbled/index.html","08998afb04b890231ee9b4b60394d543"],["/Java还是C++？/index.html","96a00fcb2b776dbdde980c0ab86048bd"],["/Kaggle5-step-guide/index.html","d969f4dddb6d14e662c98455572e1986"],["/Knowledge-points-of-Java-garbage-collection/index.html","ef9c904b0bef79904bfab8810eeebf93"],["/Layoffs-and-Hiring/index.html","2803df9bc867a45312dde5f39c09741e"],["/Linear-regression-of-machine-learning/index.html","60a21dae3b655085df5b7f4699305f4b"],["/Linux-Compile-C/index.html","61cf50bf1c491bfde3f1a01c8aa19a3f"],["/Linux-ITK/index.html","cce498c789e4d10d88d8251c2935062d"],["/Liver-segmentation-of-sparse-components/index.html","87a9f857ab742c30a3643852b76a133c"],["/ML-EBook-paper/index.html","ca1713c3d6bac6c2803fbe6f4874f381"],["/Map-uses-multiple-maps/index.html","1c84e0490f9683787397da0c88674078"],["/Matlab-Graph-cut/index.html","644a74d3d85e6eb47dd0574f8572794f"],["/Maximum-Likelihood-to-EM-algorithm/index.html","3071bcd71f233feb0c79f1fb049a7ce8"],["/Mean filter and median filter denoising/index.html","905caaa5b973cbf233f1d34289d4adcd"],["/Medical-Data-for-Machine-Learning/index.html","c82d39791451130b45f240d86861d4c0"],["/Medical-image-analysis-deep-learning/index.html","105e26c65e2c7136fc4bf6a2ebdd6d68"],["/Medical-scan-image-processing/index.html","62ff72d3e5ba52ddccaab12830e7d431"],["/Merge-sort-algorithm/index.html","c46bef89dff451d9e700301e265125bd"],["/Monthly-income-2W/index.html","6e079254c0cf4d5a61aab799fdbe26f4"],["/Mysql-database/index.html","2e69903b1c621e0b11d6414ba580195c"],["/Neighbor-Embedding/index.html","fcf925e1033150827abf31bb81141f5e"],["/Neighborhood-approximate-random-forest/index.html","c18ace6a8e472d8e798bfcc0eceac1a8"],["/Net-and-official-documents/index.html","bb7041404d6cb321d52801c58e8d4f2b"],["/Netflix-VPN/index.html","0a9e6cd4334f7dafb94b3a20094008ee"],["/Network-principle/index.html","8086dcc5cff973718d724b41a5e72137"],["/New-Hong-Kong-stocks/index.html","fe3f19afd7beac044371d3747766f064"],["/Nice-to-meet-you/index.html","9148c550da05227a1462f148d8b61ee5"],["/OS-processes-threads/index.html","4aaf152e11ba53d1d7733e1f3e2ba46d"],["/OS-run-environment/index.html","d08d49094ce90bf19c73c75645731204"],["/Open-Internet/index.html","ca5e505c8c6911f7199c0d6d4bb83cee"],["/Open-Internet2/index.html","0aaa486cefdb5e515a0fafa51a7c0e3d"],["/Open-source-community-and-rewriting-website/index.html","11da809c6d588de5b25287295f0de541"],["/Panoramic-image-stitching-based-on-SIFT-features/index.html","19a2b38c1390e086f46e6f1fe62877d6"],["/Parzen-and-KNE/index.html","7d4c80c521d7a98dadb2100bfb86ef9f"],["/Personal-technology-blog-site/index.html","742af3b630f36fed31f608d7c9724101"],["/PicGo-Gitee/index.html","22956211b9a7a5d1cf98ebebb5150cf6"],["/Programmer-treasure-chest/index.html","8f28aa8eeefee455dc63c8bb5a9e18b2"],["/Prototype-mode/index.html","dd7d179b4f196e59a7cdac0475d2d30f"],["/Python-base/index.html","c8f28242e7597227852329b8316f41d2"],["/Python-crawler/index.html","eb9a2d31628e19ee8a4054cdd65d7f49"],["/Resume-revision-suggestions/index.html","ba8f721d9c8d207d813ce1da9b4cfac2"],["/SEO01/index.html","bd8cefa209b62d55d0a0a9d7dcae2125"],["/SEO02/index.html","5d6a83528d5ff6afc4ee683cacd16c1f"],["/SPHARMPDM-MEPP/index.html","be5a3d8f7127c12bfd8f90de2a844cdb"],["/SVM/index.html","6199d22c8654629b18fa88148c0621ad"],["/Seata/index.html","44ec18ab498d541f14d7d092b9031c74"],["/Semi-supervised-learning/index.html","5723e408e0fa80fe785d702c4eb801c9"],["/Sequential-model/index.html","fb6c90659c261caf191e4009a1cdd3df"],["/Shape-Based-Human-Detection-and-Segmentation-via-Hierarchical-Part-TemplateMatching/index.html","691c72925b17e4b102d8dd6702829f23"],["/Spring-basics/index.html","07ed3971ee10b816d8418788e42f8fa0"],["/Spring-integrates-hibernate-Struts/index.html","6da29026df2fbf5b03b528f135190c84"],["/Structure-learning/index.html","627aba45060e52c59747f01c67444113"],["/Suggestions-for-self-study-of-computers/index.html","97022ee7a3fac7ee2eece38bd1ee2bc6"],["/Summaryof-HongKongStock-Account-Opening-Links/index.html","dd8100fc07eea716a0f28ed079c3c69a"],["/TCPIP-detailed/index.html","82eb8697751743aedeb2e2caf028d9dd"],["/Telegram-VPN/index.html","587d3d6e56268120ddb2fbbc049efd82"],["/The-essence-of-shopping-festival/index.html","7cbb4e1b1299e7ae6b68c9315b7ad4e2"],["/The-most-important-investment-in-life/index.html","4dac2a9d9ad8b7acae4a2d6dc1afed2f"],["/The-most-successful-nvestment/index.html","c70c3d8bd7e8c2a8d357c5888eac22ab"],["/Transfer-Learning/index.html","7805af8b9416d8dd1a4cbb0ff64ddeae"],["/Transfer-to-computer-major/index.html","d0a2f4b51bace69df590ff3eb8680357"],["/UNet-Convolutional-Networks-for-Biomedical-Image-Segmentation/index.html","2a556d3ccbf824db798a74967e8b51f0"],["/Ubuntu-install-sougou/index.html","cf70b6bf807163bc619f852931fd7e2e"],["/Understanding-of-paying-for-knowledge/index.html","21e044529d8df9f17f5c2d92bdbe762e"],["/Unsupervised-Learning-Linear-Dimension-Reduction/index.html","8add50f33b1d0e0cf0161285395a5b19"],["/VPN2025/index.html","2297bd02f756d542eecc2c0a86e6a667"],["/VTK01/index.html","a86961c0cf5efafdc576ce40bfe8b1d4"],["/VTK02/index.html","1441fe39e824b2c8eec56ae1c223762a"],["/VTK03/index.html","75fc0614189897e916e181503f698597"],["/VTKRead-write/index.html","43955badb66a66e675e9cc74f3c1b7af"],["/We-are-all-good-kids/index.html","1a0c636e95894c66253e925a88c95da3"],["/WeChat-80/index.html","97f5dbfdc24c551c1fd3ad13f39a61cd"],["/WeChat-red-envelope-cover/index.html","042b80df689b98e6e44921b21b979f18"],["/What-is-crawler/index.html","1d8f97d7b0433732512c37d3455f7749"],["/Win-OpenInternet/index.html","8d158100dca92e4fb7fcbf8659d40a97"],["/Windows11-2kfans/index.html","5b457e7bac0cfce6396b9753ae92ed17"],["/Word-Embedding/index.html","23f6e1135af4de71d899f16e8af601d6"],["/YuanShikai-and-his-Beiyang/index.html","b24d6679faa0a7396657a61eed3b7563"],["/Zero-copy/index.html","4c6d211f4e2edaab4b5cf6ad4cb05367"],["/about-keras-model/index.html","539b17fa52f1944f260e10392a927da0"],["/algorithm/index.html","13fd60ccf5756984d279ed557450505a"],["/alibaba-Java/index.html","d618f85c816c8c84325ebad9acb26778"],["/archives/2020/01/index.html","394a617bde413a99545bb01223deb45a"],["/archives/2020/09/index.html","8ed6cc7296f6202486e482188c1e55ad"],["/archives/2020/10/index.html","042b364e49931b816762c54e9018c4a8"],["/archives/2020/11/index.html","0634cfca145adb137661594ad78cf55e"],["/archives/2020/11/page/2/index.html","f772e039110215926471b56d388177b1"],["/archives/2020/11/page/3/index.html","86f07f8a8a77d81ec7a8accdb3c3d597"],["/archives/2020/11/page/4/index.html","dec372770f7bd6b1dba23b44b9b89da4"],["/archives/2020/11/page/5/index.html","be1bbf4d895aaeec56bc33442b897cc0"],["/archives/2020/11/page/6/index.html","752338718e60e8b218fb3e6cd071a2e2"],["/archives/2020/12/index.html","f6ca0af24e529611341083476fdd53cc"],["/archives/2020/12/page/2/index.html","d6ee54f8106cbabb251495727de94686"],["/archives/2020/12/page/3/index.html","ecfdbfee848981afc800ec31746dfa49"],["/archives/2020/12/page/4/index.html","de4ceee9104e3b6cd542c4615fd6690d"],["/archives/2020/12/page/5/index.html","3ab0642ddbd790bf10f900746130df96"],["/archives/2020/12/page/6/index.html","6d74e54c6d02ceb5aacc2ef0b4476510"],["/archives/2020/12/page/7/index.html","a8f73fff849346f502338c683a799590"],["/archives/2020/12/page/8/index.html","8607aefd83cef764b44c2e677903236a"],["/archives/2020/index.html","b4de8a431e22f77b76e9d3dcab60a5f4"],["/archives/2020/page/10/index.html","6d8e2a5f20f13d001c0678cbbb7d7794"],["/archives/2020/page/11/index.html","0d341d7bc0cf2e257b92b84d5a847c5a"],["/archives/2020/page/12/index.html","ed9bacf060864d994708b507b55e69ed"],["/archives/2020/page/13/index.html","0264b9edd4eecf84ada8dad39a7202d7"],["/archives/2020/page/14/index.html","176d741969b069340f814415a4455bf2"],["/archives/2020/page/2/index.html","5b6344b69cf8c898656aec1c559ad08c"],["/archives/2020/page/3/index.html","46bf3c0dfa94bdd52acce28e7c9babe5"],["/archives/2020/page/4/index.html","b90b1767ce0348b3627bcc2191bd07f7"],["/archives/2020/page/5/index.html","1bf7aa7057d431156c9b1743f1fb17c9"],["/archives/2020/page/6/index.html","dbd40b1699dc8d3d0ce876eda792c4cb"],["/archives/2020/page/7/index.html","9a5913b73c947ee0be606c48791fda98"],["/archives/2020/page/8/index.html","2637b7744c4fc45e8bddfefde40da7e3"],["/archives/2020/page/9/index.html","e8d53bd8f7b12d64cd2ca863a47834ef"],["/archives/2021/01/index.html","60d75bb886679e42e40452c99b8c7bf8"],["/archives/2021/01/page/2/index.html","9627a2c3f9f8789c2be26285d759f704"],["/archives/2021/01/page/3/index.html","2eb9fd3befdca7249468c3dfc48b5d3a"],["/archives/2021/02/index.html","619fd4576c5bbfa2512af85b555bf2e4"],["/archives/2021/03/index.html","c0b2bad3c5add73838a34994c5e818e3"],["/archives/2021/03/page/2/index.html","2fef2912f925f1ccbb39c65fa922a105"],["/archives/2021/04/index.html","4b74079ff91bb60d31e495e7988bf524"],["/archives/2021/05/index.html","49fb4824954466c177add3cf808e52f5"],["/archives/2021/06/index.html","089c4cd92db3d9d26542bc3720aeacfd"],["/archives/2021/07/index.html","01497f324eae173651b7c99d56b3612e"],["/archives/2021/08/index.html","4e48f034d7da41ae3761e60ade9e273e"],["/archives/2021/09/index.html","74af5df00e1b3d6c1cac6920666875fd"],["/archives/2021/10/index.html","44d9690fe4b5a9c95f7a05a4664dfe6d"],["/archives/2021/11/index.html","809e75d9fe96c0dc6cbd01cbbe3100c4"],["/archives/2021/12/index.html","3f434b8dabbcf51ffd72624acef9558a"],["/archives/2021/index.html","34249f03b1971c8a5837473e4743b2fe"],["/archives/2021/page/10/index.html","d4f884a2b6b0beeb79461b39f0f8e1ff"],["/archives/2021/page/11/index.html","2feb7a357ad6f068301fe9e17daf6c59"],["/archives/2021/page/2/index.html","bd34da3bb7e57dee2b1b26574e8514fc"],["/archives/2021/page/3/index.html","1077d45de55ba6043b3495b8447a65b6"],["/archives/2021/page/4/index.html","9721d6ab6afc6fd7ce2e63b357e52a41"],["/archives/2021/page/5/index.html","61da18920d9021a065cde941ce38c487"],["/archives/2021/page/6/index.html","9f0e38275f1c27e433d0b6675e36d47e"],["/archives/2021/page/7/index.html","3f3ac517217bd7b63201f9bef02e5426"],["/archives/2021/page/8/index.html","292c867b8f24bc02ae37a41ef9e1231d"],["/archives/2021/page/9/index.html","bcc61eb58eb708f19dff77103618c49b"],["/archives/2022/01/index.html","706a6d98a02c896af230cd127415f535"],["/archives/2022/02/index.html","650003cde1f3046d0dbad8aff9f3ff3f"],["/archives/2022/04/index.html","bb545fabcdce46f212cdf2c3470cdaad"],["/archives/2022/05/index.html","0ffa80e8a67bcd3ae908f0d089f7d3b7"],["/archives/2022/12/index.html","4b4acf0584a5077fbc122519ecb7ea64"],["/archives/2022/index.html","c642337b24cca1f6df6a02a3b8c797ec"],["/archives/2023/01/index.html","888dd1e353bdc153dbd1c69fbbe31186"],["/archives/2023/02/index.html","a66c8ccf4bb31f66d327a51084b81aed"],["/archives/2023/03/index.html","f951c7083fa6759fd265cfffe3c4798b"],["/archives/2023/04/index.html","26d01704b12128191dda8b1ca4a9db83"],["/archives/2023/06/index.html","0ace1f75418fdf9e803c3851bb2a6dd2"],["/archives/2023/08/index.html","2ff02ffdf0671f074cb08d477b9d3a70"],["/archives/2023/10/index.html","48d04c129ee892634170d1289a890826"],["/archives/2023/index.html","ddfece9a4cc01bfbb729d091107a398a"],["/archives/2023/page/2/index.html","5ca5927d540f278e521ed1f23217963a"],["/archives/2023/page/3/index.html","1fe71d368858a7e8918444c6acefc480"],["/archives/2024/01/index.html","3dbc762a61751ffdc31d9ecb3a4bec4e"],["/archives/2024/02/index.html","2c5b2306cec83d4f8cbd118440efdccc"],["/archives/2024/index.html","15e5758c3c630679d7c97e2341130784"],["/archives/2025/06/index.html","f482e994b25f628c525be2eb19273512"],["/archives/2025/07/index.html","d39a044f3cd8620618725f7f6f06e0dd"],["/archives/2025/08/index.html","164581ab65b95eea011907cb59fd0a34"],["/archives/2025/09/index.html","759f4736e6399ed4b5cf26dbfed4a9e4"],["/archives/2025/10/index.html","4dd7b40e878fb638999f16ea3cfccf90"],["/archives/2025/11/index.html","a4a18a61bcee856b1f4139992a4384d5"],["/archives/2025/11/page/2/index.html","5eba1c5e5bca479c99dfc126e86cd96e"],["/archives/2025/index.html","611a3fe566624ac1c8c60f0830074b26"],["/archives/2025/page/2/index.html","e428595ebd062f4a0a7117d97fe8f18f"],["/archives/2025/page/3/index.html","0ea2a59c72e91601723f00193957b3cb"],["/archives/2025/page/4/index.html","7e354bbcb9484b5f4602fbe336261df6"],["/archives/2028/02/index.html","65090a1ebfe9b4eaac0a744ca538f989"],["/archives/2028/index.html","8eb4bfd9b5fceb69e4e8850c5d658920"],["/archives/index.html","1c48be1b36101c2ded66abaf16a38239"],["/archives/page/10/index.html","e8aad64d0d9f43551ce27497a9df841a"],["/archives/page/11/index.html","79873c413b955066ec2aca70dbfa7a38"],["/archives/page/12/index.html","48ae6531c3c7070995bec8b45295f6e1"],["/archives/page/13/index.html","f7368ab71831a85b2f959aed4bab50ec"],["/archives/page/14/index.html","3709257b65c36e352e1d981af13c72dd"],["/archives/page/15/index.html","510b1e97a8a7bc6a6b333cd455f71e7d"],["/archives/page/16/index.html","50912eeead441e7c7777f53542cf77db"],["/archives/page/17/index.html","abec2308f67f46dc0db6a1688753828b"],["/archives/page/18/index.html","0a92b39b2726377834a05582a1537e88"],["/archives/page/19/index.html","8efe9b5ff1cf95c499202377e19cbbbf"],["/archives/page/2/index.html","eff76ff292b98ac7d8d8aaf378092346"],["/archives/page/20/index.html","65ead0ed9a78cc85fc78d274b1c53a5f"],["/archives/page/21/index.html","997f8a8e7655cc782e0e4b37ff2a61e9"],["/archives/page/22/index.html","7897c8a33d9af1511594e91a5fef1830"],["/archives/page/23/index.html","c46ce09dcff093df317fe6b0fc30ba74"],["/archives/page/24/index.html","d9356488be1735a0b3b23d64ecaabc35"],["/archives/page/25/index.html","55b97aa0e89a149f69b073ea91ff78c4"],["/archives/page/26/index.html","8d4393c0c7a845c829abf3e13c7e59f8"],["/archives/page/27/index.html","1730d67932a7b08b0ce16233132d85a7"],["/archives/page/28/index.html","2cf595c3cac75c9ae06a406c38e23c51"],["/archives/page/29/index.html","f853eb8b7385b72a9c33f9dfce027b90"],["/archives/page/3/index.html","18974ef447b8be097b12a31c8609d3fb"],["/archives/page/30/index.html","11341b137ca42c2e0c1761d2730f0f2c"],["/archives/page/31/index.html","69e8b5f275208a1f760b38d914b16dc1"],["/archives/page/32/index.html","fd85b1c20c85a03f126051f2d0628d04"],["/archives/page/4/index.html","431368e8c2aed7e52094512d89999a24"],["/archives/page/5/index.html","514164ef50664072d881ca8f88c540c9"],["/archives/page/6/index.html","ce1d26f431eb903025b0cb9e8cba8924"],["/archives/page/7/index.html","319ceb3a7e307a31b372329e5dbf453e"],["/archives/page/8/index.html","91a5a9dd0b57a1df8e7682f8ae92cb17"],["/archives/page/9/index.html","996110514f3d2fc6634b2dfafe700397"],["/baidu-search/index.html","b28c674526b362013c5804d60fe10c73"],["/baidu_verify_code-Hh2fKNlEB1.html","af4373adb699c2c0c6f279548af923a7"],["/be-a-programmer-instead-of-a-code-farmer/index.html","dc386f544da9d92514cf676aad7d9693"],["/bought-a-house/index.html","c406b05936b0946547d690b1b1e8eee7"],["/categories/C与C✙✙/index.html","11e11b7494d46b0599b98bc69fff262b"],["/categories/Go语言/index.html","35cf6c588066155fb17b28b5d39c7517"],["/categories/ITK与VTK/index.html","a78f5842d1e93b288cd082fca7cb8199"],["/categories/Java/index.html","614ed40a7824577a255a2efefe9eecd9"],["/categories/Java/page/2/index.html","04bcc8b82ed54ccf8ad3efbcd3adcc13"],["/categories/Java/page/3/index.html","83c759964975a31159d9aaf75439ee58"],["/categories/Linux/index.html","f872230768e9705a8727867531fbdad3"],["/categories/PLC/index.html","a3e2af3ddbe67b5822fd6cbad7dc1d2b"],["/categories/Python/index.html","99091623611b972946e78ca6a20d54d0"],["/categories/SEO教程/index.html","70c063fdf5bb144a2e9159cb0015afce"],["/categories/index.html","c89414fe3ee6f8890859bdbbaaea8fe1"],["/categories/图像处理与机器学习/index.html","ef50f87564187396785bb0bc9ba8c36b"],["/categories/图像处理与机器学习/page/2/index.html","d3e45b3c2d3ec6d05f94edb2319201f2"],["/categories/图像处理与机器学习/page/3/index.html","3f4474d51e57835720175b900972b2da"],["/categories/图像处理与机器学习/page/4/index.html","2118a8e662ccf8fc8376f49de7b9fb9e"],["/categories/图像处理与机器学习/page/5/index.html","dbce866680dcd3b77977502bb4d9192c"],["/categories/图像处理与机器学习/page/6/index.html","9257666b57b8c9ce8714e1bc6f2337e5"],["/categories/工具/index.html","dbeb38e70e66afc829a8e25c898db593"],["/categories/工具/page/2/index.html","36c226d33c3920fa8ac47741b63cc83f"],["/categories/技术以外/index.html","28c3507dc917c9779c67e108494798fc"],["/categories/技术以外/page/2/index.html","0cad4a60adcecae188400bd99ea654d8"],["/categories/技术以外/page/3/index.html","c9bc8b11c4d5c7b3aedd1ebdd3106764"],["/categories/技术以外/page/4/index.html","728369e767358deacdc4120efb1de275"],["/categories/技术以外/page/5/index.html","b9243e6aae18af77c65ec191462fd97e"],["/categories/技术以外/page/6/index.html","61e3fdef14ea4ff2eba42bd83cb065cc"],["/categories/技术以外/page/7/index.html","d2885d9641ecf02a911e319808402d9a"],["/categories/技术以外/page/8/index.html","7e639ec60f544e7718174ea58f3c4844"],["/categories/技术以外/page/9/index.html","d3d02d6a6b1ab3dc658e180fb7be9665"],["/categories/数据结构与算法/index.html","fd118e59d42654d1e6aa794b4ba1dd9c"],["/categories/数据结构与算法/page/2/index.html","da14b1efd493ce1b73c9db7b3b26c09c"],["/categories/科学上网/index.html","263102fd554b84b9b409483eb75b6636"],["/categories/科学上网/page/2/index.html","d74095b29787da8759213478d10fbc27"],["/categories/科学上网/page/3/index.html","502e80e1101b4bf8122ed5dfd3ac26cc"],["/categories/编程经验/index.html","578755829559443f011c9b8290865a4d"],["/categories/编程资料/index.html","029edaa7b02f2aaec615815aa3ed49bd"],["/categories/编程资料/page/2/index.html","1952c51347ada2e8f4ae7173b217a201"],["/categories/编程资料/page/3/index.html","476c23843a81d75c493d7dd0ea6c813d"],["/categories/编程资料/page/4/index.html","5121265dda0b98d7bcb341f3e58ccb8e"],["/categories/计算机基础知识/index.html","58a6b1ee845504ff9da45824aa731c83"],["/categories/计算机基础知识/page/2/index.html","f550545acb87b1df4b588dd97a3d8f86"],["/categories/设计模式/index.html","fcb4a883f1ffff3601965777d581c974"],["/choose/index.html","db46a2cddfb3bfa3d9e9b28600b6842b"],["/choose2/index.html","00b80023b6fbb0528d2686321a7f1273"],["/chrome-crx-intruduce/index.html","e3877bd4a4497f9ab2938ffc473a6696"],["/clashvpn/index.html","4d5c5cdc0389db764a182db5850e4540"],["/coder-blog-website/index.html","bf016b0a55be7c440d31bff8f4a4853c"],["/coder-source/index.html","eab0e13f8c22423d4b12b418a19cf63b"],["/coder-videos-website/index.html","290482577407b7871e3f37395363c9d3"],["/computer-book/index.html","d3c0697752cbb3032566885e156bcc40"],["/computer-censorship/index.html","a0f382927361d211295f894831d305b2"],["/computer-network01/index.html","15f1f4a75d27d767399c0e3cd48e6f0c"],["/computer-network02/index.html","83fdd8ac49e99a4be086350db7c6db09"],["/css/main.css","bc32ad34ec4990d934c3c647bdb62f79"],["/database-Mysql/index.html","f3f595d99b1fae2222fe355920284a3a"],["/eclipse-lombok/index.html","5bc261e88b62a9d3db2bf0ca331380e7"],["/fully-convolutional-networks-for-semantic-segmentation/index.html","5dcabe9c96c36dc275613ef5ed4827bf"],["/great-firewall/index.html","32ccf399998817e389a2d4d1519a27b3"],["/halfrost/index.html","0fd58a27c37517772d9930a8bcf17b62"],["/how-to-signup-chatgpt/index.html","e5a272f05d22da2f40d47d0ffca658a8"],["/how-to-use-Gemini/index.html","7d67907eb80c876f7d26bf06dcad4c2d"],["/index.html","9076176e4cf42aeacf67e9f19f41cc6c"],["/ios-open-internet/index.html","6db874f34d27486b240c3ae049e6eda5"],["/iphone-open-internet/index.html","b688c3d6504347ff0911fe29b465dcc6"],["/itext-makes-pdf-form/index.html","211e6a49560d25c81c1152f9e18c6f6c"],["/java-Set-Map/index.html","813f4f4c527a1ab76cd6b51e573b6958"],["/javaweb-server-error-codes/index.html","55e00548748c1d9375ec637310d2b995"],["/javaweb-source-code/index.html","1136d9c01c6985f7534d3ac91c858136"],["/js/lib/busuanzi.min.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/js/lib/lozad.min.js","47904d34a224931dd1b615c59a3dbe3b"],["/js/lib/prism/prism-coy.min.css","0ccad54d95845901ead59bfd3ecceb14"],["/js/lib/prism/prism-dark.min.css","a4711d2957d6605eb5682bdd228cf123"],["/js/lib/prism/prism-funky.min.css","efedcdccd7a9ab342d2d9cacd24920af"],["/js/lib/prism/prism-line-numbers.min.css","38e22e790c279bb56f9ec4b90a2a2d58"],["/js/lib/prism/prism-okaidia.min.css","5ac6f9de996fbec68aaa106dfb16e061"],["/js/lib/prism/prism-solarizedlight.min.css","ecc7e64d039873ffcf7fb27babdaeb5a"],["/js/lib/prism/prism-tomorrow.min.css","456af2a14ae4f5089939d5904ac40fe8"],["/js/lib/prism/prism-twilight.min.css","ebb5c355332a8cf9a1ce37a2a69d678f"],["/js/lib/prism/prism.min.css","a5234d614834658887cec6a9515890f8"],["/js/main.js","052d2b299d9c750afea8df0b802ab7c1"],["/keras+TensorBoard/index.html","b98d8e9c9a05cb8c7a544bfd620a4a40"],["/keras-beginner-guide/index.html","8f6259d498f458d34712864662cd99ef"],["/kmp-algorithms/index.html","46a0e1d117bee14601614a512a57fc76"],["/leetcode-Java/index.html","c59d032524caf59a09eced91054f3e6d"],["/links/index.html","128e96eee6a98e90cef12cdb363a0492"],["/linux-java-opencv/index.html","d98107a59538737dc7160e51f8f029e7"],["/msb-source/index.html","a68d062258856f80d4b25efb12e6f075"],["/online-BUG！/index.html","70ba0bc46caf2703fb983bd585d4c073"],["/open-app/index.html","5f7b94119fad7653e7ac6cae2617afb8"],["/page/10/index.html","2580e48bf4ffea9cd2ab105c0e7e99d6"],["/page/11/index.html","ac38ad518185d52eb37981c91027691b"],["/page/12/index.html","6a0e325d18a8a0e6cb80cbb23cee2594"],["/page/13/index.html","f7bc04d12399a4aa1f10c13c58613502"],["/page/14/index.html","7089f76b61ba22ff93fde86d58c76205"],["/page/15/index.html","14435a3545861fdbaab31cfb523237e5"],["/page/16/index.html","f3e8a247743d1f05d6e8cb0162175e94"],["/page/17/index.html","b0a1c7b7c0c02bd05ae38aa7e106702c"],["/page/18/index.html","5219041e5a8d101e177b60f55965eb28"],["/page/19/index.html","6287155a47ebe1236cfd63b73715562d"],["/page/2/index.html","6cb07a162d6b8c47a0d06844100ef243"],["/page/20/index.html","1af8aad53e4a4ac6d874ef311d4d6204"],["/page/21/index.html","9e5576e29057abe3fd1b6eaa7346745c"],["/page/22/index.html","b4bab285fd0c75ed822b79c907e597dd"],["/page/23/index.html","829071ff285ded7d07bf915965bd73e9"],["/page/24/index.html","5175eeaab456cf4477365de9369e7f22"],["/page/25/index.html","6d2670de40ebe68d639564801a81c07e"],["/page/26/index.html","3e9583cfe49f4e064db026996fe9d702"],["/page/27/index.html","77119609a533a225b81ec0cf08aa31fa"],["/page/28/index.html","c109a149498232a76a154d6f4fed3d7f"],["/page/29/index.html","77db19ca0d457d33314a710e96975c12"],["/page/3/index.html","5413f273e654206772c00e81bf8f7fa3"],["/page/30/index.html","7092df301cb1cf99bf1a472b8b40db78"],["/page/31/index.html","af5234044517fa7fc1f90e46123c09ce"],["/page/32/index.html","b6e517bc1ea2fe66d6e4e42c218369b5"],["/page/4/index.html","47164abab91aa137025f27f402ed3e46"],["/page/5/index.html","46d93b8f4840b1a0751f45e88282f1e9"],["/page/6/index.html","f4512962bb5eeeed51ae133c159f0b7f"],["/page/7/index.html","75c933af7219af07707b157872782c3d"],["/page/8/index.html","23559f3a80ab8ddebcb0ec3462052b47"],["/page/9/index.html","2b6e693783e2ffc55a92e096a93ccf12"],["/pandas-data-preprocessing/index.html","c8e6fa0728e1e32b435876dea00c11ff"],["/phone-win-open-Internet/index.html","c964cf249a06e139cc31095568356ce3"],["/popcorn/index.html","0b5b984e29faa71a3f00eecaea8aef79"],["/python-Blog/index.html","d092896e306c4bd79f5d43b6263cfc28"],["/python-yeild/index.html","f720df0bfa85bacad8ab1d23694a42fe"],["/python爬虫教程/index.html","fde3818f2a9c88e83375a418d87596f1"],["/software-copyright/index.html","9f238381f87a1684352718e9e92d4885"],["/sw-register.js","36fb7364110b390e56dc96d5a1bb818f"],["/tags/AI/index.html","1e2e857be189a92dcf5427686b5551b3"],["/tags/API/index.html","756777430e9460844f80a9c513c5ca2b"],["/tags/C-图书/index.html","56ad6cccb05963c8934de43ae8d2a357"],["/tags/C/index.html","c811fda8dfee4c13e453cf42b25322ef"],["/tags/CNN/index.html","f7bc66bdca9dbb2066e85bf3ddbb336a"],["/tags/Chrome/index.html","2b60423f3eb327f7c79f2975563f27c3"],["/tags/C✙✙/index.html","7b7f935adc9ccf42b1c10d23a1da98e2"],["/tags/C语言/index.html","d813657506ebdf18b1125001f7af6f3e"],["/tags/C语言图书/index.html","4e044a6c0eaa8a173aff7bb0180d101a"],["/tags/DSN/index.html","c4042faa87806b2e36c2af465fba3d22"],["/tags/Dll/index.html","e9259e9a6c69eef443401f11eac38f4f"],["/tags/ECCV/index.html","f2b279b8072e0b9109a1ca892b0034e1"],["/tags/EM算法/index.html","1e4a0bc0999d3fb0e803a0b2595a1323"],["/tags/Eolink/index.html","1c08f7640287d91f172430e10f921d21"],["/tags/Gitee/index.html","7c987d2deeb045b85e9634ccf9b7fd2d"],["/tags/Go语言/index.html","a2553999c49cf70f973d4994b7206ff5"],["/tags/Graph/index.html","baf59a3f97ae39e226d0c9dbf0be0835"],["/tags/HTTPS/index.html","be3c68074b17970d95c4cca364de071d"],["/tags/ITK/index.html","3c49229eb79f282674ca357d4de14559"],["/tags/ItkVtkGlue/index.html","6af67ff350fce0a7109b605d395be822"],["/tags/JMM/index.html","3254499cb06435b427468a09cdd5e7a7"],["/tags/JVM/index.html","3db1f9e5bfb9dfc3a353b712d97c9bc7"],["/tags/Java/index.html","88272c791a1d6d3f3585a6a1e132eb96"],["/tags/Java/page/2/index.html","f38f94dc06629e78c5a2f2a70cfc093e"],["/tags/Java/page/3/index.html","45f9ddf0729e20ea38c7c78fda9f7772"],["/tags/Java图书/index.html","12ce6e1844d7853775ff6ac6d957cfeb"],["/tags/Kaggle/index.html","fb393de4aa54d59f39ee8c3e3af1b512"],["/tags/Keras/index.html","97b067c9eebc6e3b4888fe666bac9ff4"],["/tags/Linux/index.html","4460ec775c22e64aac5f351c74575035"],["/tags/Linux图书/index.html","fb01c467f2d8f23326c4b24907e9a9b7"],["/tags/MEPP/index.html","779dd8f810b3f5dc622d8df52335bad8"],["/tags/Map/index.html","498674b1bb52ec7b4511dee7fe33fbbb"],["/tags/Matlab/index.html","3e93b400ca7e0e3b66daf7b091238132"],["/tags/MongoDB/index.html","b6fd41f7a6308e10259798bf581edd8a"],["/tags/MySQL/index.html","eb2b38b0e7dd8b7bc7af21cb95fbb139"],["/tags/Parzen窗/index.html","e2aa1203d1fe648c083344be67f1a1b2"],["/tags/PicGo/index.html","a7dad32b838ec3fab3ecc887e976b744"],["/tags/Python/index.html","6e7face3d775f90528b47fb54d9885f7"],["/tags/Python图书/index.html","4736cd5d205253351d12c38abee99ee1"],["/tags/SPHARM-PDM/index.html","8add2eb9f04cb14a5b1bfef4a0a06bd0"],["/tags/SVM/index.html","f7dd50a2d06ebf47a3b051a9ec69e86a"],["/tags/Seata/index.html","d3c2a1f23a90c50357563287989865b2"],["/tags/Servlet/index.html","a0b0e740f5df06021c5d83273047aef7"],["/tags/Sping/index.html","1c4f93d4981e403eec7d6e871598fd00"],["/tags/Struts/index.html","c32c88728542330e68d697b376188203"],["/tags/TCP-IP/index.html","d55b33b7dc1272b5a6b8130338e7ede6"],["/tags/Ubuntu/index.html","cf462f2dbc1a5f014fee079fa609ee7a"],["/tags/Unet/index.html","87b3f4bf7a551968aeb11da559488195"],["/tags/VS/index.html","7266115993de97cb06eec1878e65248f"],["/tags/VTK/index.html","8640a201549a5470ec81fc803d15b275"],["/tags/Windows/index.html","11338f61923d2d95e3df9e55bed1b41d"],["/tags/edit/index.html","40da20f5e1cfcf875e37495f54d0ada9"],["/tags/hibernate/index.html","ede352c73aa800778bb58e6d77f7eb39"],["/tags/index.html","6286511a676e143c6e271fef7e1fb58e"],["/tags/itext/index.html","5ea20243f8dc9370de6c4d55d338f1d2"],["/tags/jdk/index.html","d9289bc7c2414c85fcac746a50dd315b"],["/tags/kmp/index.html","8b92b03b17beb9111d9092ad22596039"],["/tags/k最近邻估计/index.html","ab8f443019879b1388ab00d6eb0444de"],["/tags/lombok/index.html","d8d0bea0c763bb74fe8f160cef0ee1d1"],["/tags/offer/index.html","f3798d7a5dc9347eba89eb16af1314de"],["/tags/opencv/index.html","8527eb7495aaa7ce5fd3ab7ed9f35512"],["/tags/pandas/index.html","eb3badad89b569cc5696cdb3201edab2"],["/tags/string/index.html","d51f6b63797b29aabfc78cc8cfb30039"],["/tags/vim/index.html","62cc16cc95c67a49eee354693a4f1cb8"],["/tags/vtkPolyData/index.html","4b48b7b7b96fd672bcee4432693fc2f6"],["/tags/web/index.html","91695bf22226844a6764c82e4afc2d03"],["/tags/xshell/index.html","838e415535f9c367062f2e22f1a86c88"],["/tags/yeild/index.html","04634a86317727c34d8502e706067762"],["/tags/互联网/index.html","153f47add652a46ea3751ed02068873a"],["/tags/人工智能/index.html","d57fb961a06b64009d7b82e978f3f87a"],["/tags/体绘制/index.html","9e10b0b6cc0b0714ccb440184d84003e"],["/tags/全卷积网络/index.html","359dc3b6bf5226ba824b89c7e6ad1941"],["/tags/公众号/index.html","7f23481d8e08e28c0c624d079542f5e5"],["/tags/内存模型/index.html","91a6ae65e1d2f33a849389135ef778a2"],["/tags/内推/index.html","16680892bab1f37b11f3158732d15ae1"],["/tags/函数/index.html","bf59cb3ae492a98a6f87a27280240ed8"],["/tags/分布式/index.html","bab12f31764e8bda8e0259661aa42339"],["/tags/加密/index.html","58880632397d0b843232b49b465aab6f"],["/tags/医疗图像/index.html","d87bf9ecb0bd056d0339fc15c90776bc"],["/tags/博客/index.html","f4a2a4ff2e6373ee31c1c5c914e5c8e6"],["/tags/图像数据/index.html","75a5bd35348f75e29159a1704ae4cbb8"],["/tags/图谱分割/index.html","b2ab481aeda21ad5900fb25cd76fecf2"],["/tags/垃圾回收/index.html","ef36f851cff4d90fd376a198803e8046"],["/tags/多线程/index.html","a8bffcc031d927e6518e493e1477b361"],["/tags/字符串/index.html","5d304c2f9dee67da2909c643491815b1"],["/tags/工具/index.html","457728253ba239497475b8c679ae2fe3"],["/tags/工具/page/2/index.html","e6f3c97144014624ff2e32be3b7565da"],["/tags/弹性形变/index.html","e3fecfc4087d9667f5e7cb72e63729eb"],["/tags/排序/index.html","6f7a0bec28aad3ab1a317895d9e920d3"],["/tags/搜狗/index.html","7485e3da22229984575656a65a5090fb"],["/tags/操作系统/index.html","1b1d5d85a351c1c8b8b10f290adcb02f"],["/tags/数据库/index.html","da2b8db3d200302a10ff0507a31f3efa"],["/tags/数据类型/index.html","1d19bb1886e693d34ef140551de836b9"],["/tags/数据结构/index.html","7ebe29973fbd449fe7c370423ff3e916"],["/tags/最大似然/index.html","d15cecec15d2ed4c743876850b9fcd5c"],["/tags/机器学习/index.html","d8df11b01197a60d12e43f9a211ddee0"],["/tags/机器学习/page/2/index.html","1fdd3cdaa9c618d6ac3903bf48b306cd"],["/tags/机器学习/page/3/index.html","78829a17b02cef225ed40428811fb612"],["/tags/机器学习/page/4/index.html","a2deac7d6b4c0385970d8c9adb397cef"],["/tags/机器学习/page/5/index.html","08625a935286c277d2883398703a22c5"],["/tags/树/index.html","2c723e0705ba36e7a3ebf1d86f22efd8"],["/tags/框架/index.html","3a4099029f02ad9a5916ebb67cfb19e9"],["/tags/求职/index.html","1b9a35074dff88f5abf1ed400e9703c4"],["/tags/汇编语言/index.html","f7ee6e10568d7fbdbc0d170649815067"],["/tags/深度学习/index.html","44ee7b84a3d334bbeebe8cecdfd46b30"],["/tags/深度学习/page/2/index.html","cbd9dba9b9b4b075bea8120a296f0e38"],["/tags/深度学习/page/3/index.html","97038ffa4be0c8dd8b127dd7ad9c8cda"],["/tags/深度监督网络/index.html","8eb4d9839070f09296adbbf091ab2df5"],["/tags/爬虫/index.html","eddcd32985a5fdaac6728a9acce756ca"],["/tags/电子书下载/index.html","efbf5d85d17cf26c32bd11a2962d76b0"],["/tags/电子书下载/page/2/index.html","71bf1898175a0027d85c7e82e8408f0c"],["/tags/程序员/index.html","6d00a263a3604f6cc116c4ee620aed25"],["/tags/程序员面试/index.html","501a7f5d73f4e276c631d2dc3fb8e45e"],["/tags/简历/index.html","ef9383729dc7474162903e49bdc985d3"],["/tags/算法/index.html","5373abc41fe3f984b43b039dd4587f44"],["/tags/算法/page/2/index.html","988a836daa391c8f997b83c737e9b058"],["/tags/算法/page/3/index.html","db830d9cfee097fa4218be2a79779b84"],["/tags/线程/index.html","33c750f14b25fa28ab9c472201b58470"],["/tags/结构学习/index.html","5475ec6b15e3378a79fdbce43e5966b6"],["/tags/编程/index.html","0ce14cb5f7bcec75b5751476f56297c9"],["/tags/网站/index.html","9ee4b9931a93c2ee69ee80827b0a9411"],["/tags/网站/page/2/index.html","b3356ea0c466e8a87e184fcc76ed1a48"],["/tags/网络/index.html","03245bb99c54cccad151e04d30115f71"],["/tags/网络原理/index.html","4acacc068e8968dc0b46b7de1c4dae3d"],["/tags/肝脏分割/index.html","c4f756b773138cd5a88133c8d8e2ee13"],["/tags/计算机/index.html","6cd947a7fe22d3645f9c9df31074f1cc"],["/tags/计算机专业/index.html","955842859dbbceca7bfcdddc2cc444f9"],["/tags/计算机网络/index.html","f15cc80bd47a5f5d190805631978fbbf"],["/tags/设计模式/index.html","efeef57b1cc8faa862f8b992e56c9a31"],["/tags/贝叶斯/index.html","a63394c080450e866e3cd85273182115"],["/tags/迁移学习/index.html","0d78f6b433aa8784fc7ef6170e528f54"],["/tags/面试/index.html","98767a7dd9a5973c4047f696db54bb36"],["/the-way-of-pragram/index.html","ee880c23e47f1da43c2bf2f772a806a9"],["/untiypro XL安装/index.html","04f61539fe39daddaf5a271f0794e90d"],["/video-websites/index.html","8d9609779bb27ef3861cf21477a08517"],["/wechat-fans/index.html","e10eadd431161f2eb8da678e2619e1ac"],["/window-run-VTK/index.html","42ee153e4fde8d930cd59e1ed18d7870"],["/xshell-connect-Linux/index.html","1326a39fd88038848c62e40a1c05f804"],["/‌Accessing-the-Open-Internet/index.html","8a101cb6d48e93ea087a07abebdcddb4"],["/《Java高并发编程详解》，去大厂必看！/index.html","a1ac22ee8cbb41bbb1f22176d84a4fa8"],["/一分钟没了 1.5W 。。。/index.html","c651145f36f0ab9a8c3b7e0f89dbc95a"],["/一条高产爆款内容生产线/index.html","f5e751d66d80306f5f11d34c49b15951"],["/为高考学子推荐的六个就业前景广阔的专业/index.html","b4b44a03f5f6327d2ff4e9f679334e60"],["/互联网赚钱机器---社群/index.html","b7e551615527b643e6ae9c68452e1c20"],["/你们常用的工作方法和思考方式是什么？/index.html","14477c93f8468e6ed012ca00ff114013"],["/关于环境配置的一些事/index.html","1c523c608a5b6a6b65dc1fc0d4c20cf0"],["/准备了19w！搞事/index.html","dd0b930e5efbc549d50838ae94e50046"],["/几个很重要的感悟/index.html","fdb70fcb9bfb0da9965fba5bb3e181b9"],["/分割ROI篇/index.html","77c6b8a9e4a595450e07b562a9a42df7"],["/分割精度说明/index.html","73c001be261b40d088eec5a85a688f40"],["/分块程序执行/index.html","a7aa5ee41d3118a0e7882ea0c906b31c"],["/加班公司黑名单！！！/index.html","c45600b1156bf7b6fb92f961b90ead7b"],["/卧槽，上知乎热搜了！/index.html","bcd3f95849d5a078cc91b3645653adc3"],["/卧槽，我的小破站爆了！/index.html","068c78d13060743f0e6e04370232e986"],["/卧槽，我被盗版了/index.html","ecc92d1c40fd9ae4628d80eea7bf7df9"],["/卧槽，还有985大学在大一上C语言课？？/index.html","3c83c5ce51e0d91701abf5328d6c519b"],["/历年微软面试中出现的leetcode算法题/index.html","d3fda4a93cce7c9570ec43dbe8ef1dd2"],["/去特斯拉试车了/index.html","d19e4f18c73f0ec12cbfe5b472b41da6"],["/吃苦的三种境界/index.html","2bfec9c46778c4cd835887101c7c78bf"],["/哪本书适合推荐给 Java 初学者？/index.html","4e14b899bd06419109523ad3cab82a47"],["/哪本入门级的学习数据库的书最值得推荐？/index.html","82c502f16cb9040b462e24a36d11f30e"],["/国内外常用的AIGC模型/index.html","580441f4577411bd46169b8f70e7e56f"],["/国庆假期/index.html","0a9c93154119d9e70aa430a97fc0be42"],["/图谱程序字典/index.html","f3f1cff950d52d5ba16a3246bc2702a1"],["/图谱训练与分割/index.html","9ce5fe037fc31cfe24c5504693dd9b53"],["/宣布一件大事/index.html","09ece50b8a5e2491290104cdfc71082c"],["/小鹏P7i试驾体验/index.html","89bb1f1c182755c24f7a301cf3a9c2b3"],["/微信PC版3.3.0内测更新，电脑可以刷朋友圈了/index.html","c5dcc24f49baf2ad5c8386c44b3339f9"],["/怎么更快的赚钱？/index.html","0a9248e30e838dddbc86e0989b5a8a8d"],["/我毕业了/index.html","e729d9512a9933ba7cfd4e2651ed8af5"],["/我！真！的！找到了！爱上学习！的方法！/index.html","efaedaad0b1b3bf585e9d89d10cc95ed"],["/户口的意义/index.html","386e30cd097ee50fdc8837a8fd49bc3a"],["/推荐两本经典算法书/index.html","07da688a4f17ff0ec192fe57a0c0f524"],["/推荐几个在线学习SQL的网站！/index.html","2dc80fb164934e7004223f155cd57f70"],["/搞了一个程序员成长晋级社群！/index.html","4401b9c52f3b0d6aa5c4918c507f644a"],["/摘抄/index.html","96f53c479eaa8286fb28f4deaa299b24"],["/暴跌30心态崩了/index.html","166c909af6c307086c689e576ad0d663"],["/最近很火的ChatGPT到底该怎么玩？/index.html","683fc4798f7fa32d3eeabbe090c540b4"],["/有哪些好看的日历可以买？/index.html","0ec0edbcee91ddaa3e04fc7658ff680e"],["/服务器有啥用/index.html","a6616e19ef287e61d0df111b15d69b4e"],["/来长沙了！/index.html","15cc83c24cb654edcdf41010333f36a9"],["/校招污点公司名单/index.html","20ff30b6b77ff2544d6fecc6b39a6037"],["/梭哈200多万/index.html","c67772c8f7a47bff2df817cd7bb97297"],["/梯形图入门/index.html","6e921f2105c76511eec5a83ea997e816"],["/橙心优选，凉凉了！/index.html","7bbf4bd5451df4c6a1994983896da6ff"],["/比亚迪汉试驾体验/index.html","22fd0cbdb6248332f7e880d413865030"],["/清华转学成电，真的牛逼！/index.html","9e699df5451fa83c5d9e5da0ca5aa674"],["/滴滴程序员被亲戚鄙视：年薪八十万还不如二本教书的/index.html","45bab9cccf0bdbefafb2f8d4fee1724a"],["/社群！/index.html","e55d7427c883010ef1a9e2bcb5a8cf65"],["/科学上网之VPN篇/index.html","8a8287e1274535e21835c4383c8dd358"],["/程序员必备的几个技能！看完你也是大神/index.html","4ec34eda3650196d714af6a618fb2185"],["/程序员绕不去的槛，Linux！！！/index.html","b2d0aa27f44902ef46cb6b7ee71cd459"],["/蔚来ET5试驾体验/index.html","50009340127a67310f792c5536a30578"],["/蔚来，牛逼！/index.html","129f92da11e3a66ab86e3ef3e230f961"],["/被录取了/index.html","3a6ccae345c0fb79ff0c03099921054b"],["/被找事了！/index.html","da5466d486256ee3e8d8d4bfdfbbe771"],["/被拉黑了。。。/index.html","310db97f02f742035c00b79fd9d4d95d"],["/被车撞了！/index.html","e27a0564eb1bfc4898da0ff7c8147ff5"],["/该如何选购固态硬盘？/index.html","12cdd57f3f06c971c7fe44d2803a6799"],["/这本书一定要看！/index.html","05a78ea248d36544bf427cb1d2ac4e61"],["/选Java还是C++？/index.html","4abc7ddd68cdaa66b2237550ffe7f677"],["/那些让你起飞的计算机基础知识/index.html","ea718b5ab83d77fa1a16c6f7fe365b34"],["/靠这几本算法书，成功拿下大厂offer！/index.html","6246103f576a92d0efab31b0a5736f8d"]];
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
