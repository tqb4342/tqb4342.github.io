/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/0010-city/index.html","b10c19871dfc64d101ffef2ad4ffcc51"],["/10-algorithm-book/index.html","106436d93aa69312b71951c69ec860d4"],["/10-website/index.html","2747f049292e40f30770d1cd36856a84"],["/100万的小目标/index.html","ec64f619456077f8b4a4a81869085f48"],["/10w+YYDS！/index.html","d62c04ed1b5eecc53d1e8357de7731aa"],["/10website/index.html","917f755155c8e53a9170a6d0e19dd8fd"],["/12-technical-tutorial-sites/index.html","644b45e5f43c1868b2910bed5824378e"],["/2 6 岁 了/index.html","7d03fb4dd3d43d040395a0f3765a592d"],["/200万，啪，没了。。。。/index.html","afecc2ec8478ca1e827cefb224f7c19b"],["/2018ECCV-Paper-DL/index.html","7fadb56c27d90029efc1c03d02e0fc98"],["/2021年固态硬盘选购最新攻略（小白避坑指南）/index.html","811f632ad182b8326a6f99932fb7257b"],["/2021机械键盘推荐/index.html","cd2606d57dab07af0b3e3d776fd44cb2"],["/2025-07-15/index.html","d8d50809e3f127827de083c654436402"],["/2025年终总结/index.html","d0c6ab1bc9b1020297dd5fe9c875c8fc"],["/2026-Open-Internet/index.html","50f9be53ecccc0d3200a51c23e8397c9"],["/2026-best-vpn/index.html","dfc8dd152469da78ebab258374471c90"],["/2026-clash-vpn/index.html","514e26ce7e8ff55839c4573ba9efc274"],["/27岁了/index.html","4e9095e8a89b56cbe0d11bb4389a44f5"],["/3D-Convolutional-Neural-Networks-for-Human-Action-Recognition/index.html","34cabc44e6dedccaf771f8822fbeb4ab"],["/3D-Deeply-Supervised-Network-for-Automatic-Liver-Segmentation-from-CT-Volumes/index.html","1d6ebc53fa577d94a43f906af8d19ba7"],["/3D-Unet-Experiment-notes/index.html","836b8ab1e75abf451bccbfdf839ad81c"],["/4-Software/index.html","406ff489a7bd3b1233a2a7a33152b308"],["/6-website/index.html","48c6ea54b2360a293380dffc5a2b4f84"],["/7-terminal-tools/index.html","eb4a90625c72d893726bb5e5aa8fdde6"],["/AI-PPT/index.html","a69a0740b2b2cc598f9edc30e9a0d4d0"],["/AIGC中典型的深度学习网络/index.html","ad31fe5a6e84fbfc5cea3571b91880eb"],["/Agency-model/index.html","0536af40a4e24517448b9bc91dc31311"],["/Algorithm-brush-notes/index.html","5aebc4d797bac7b68abb05b90df3d704"],["/Ali-recruits/index.html","b926ba17d637017ce624d39f0521bd37"],["/Android-VPN/index.html","e92124b2ab15833e496d65f2503a8877"],["/Android-open-internet/index.html","a4a591c0341dd4f74ca121ce97be7bf3"],["/Appearance-mode/index.html","8ccb21f49d71496688cd6cfbd21d54e8"],["/Backtracking/index.html","4c9234b51e3ae7c3b034ebf1b074bfa9"],["/Baidu-Sao-operation/index.html","760b3caf8468d96da253997a3318248a"],["/Batch-Normalization/index.html","f3b97c733bc1358e7ecb5906f3dc393f"],["/Best-AI-tools/index.html","3373407db5ff7b49eb84022c4859bf9f"],["/Bias-and-Variance/index.html","005bf4f38a3276b2db6759078a4f4847"],["/Binary-tree-traversal/index.html","8142387f58b3ae3cc41058c24160b516"],["/Branch-and-bound/index.html","d327d0a5ca440db51200abada186c1dd"],["/Buying-computer-for-the-first-time/index.html","8a6da5fa1d2d3b71f4132fd32daf4c66"],["/B站向北邮道歉！/index.html","ac0507985ee694e8a11ae59b634210f6"],["/C++-string-function/index.html","1409759dcf94b94c21d5a0c029203b51"],["/C-Java-DevelopTools/index.html","23677982c6cb9727feb030a83cbfe8fb"],["/CS-Classic-Books/index.html","e23c04072242fecd3708cee46d574e45"],["/CS-network/index.html","243d2673acf5efe10722be1db0c62832"],["/CSBook001/index.html","9bd7069fd1eebd55f08754cb1a2cc290"],["/CSBook002/index.html","069b0579df7811421e258338d362cc5d"],["/CSBook003/index.html","414ce77b3314979b6885beaec0c349a6"],["/CSBook004/index.html","c41a8152985004c2a7dfcac83cc3fa80"],["/CSBook005/index.html","c196a21c067ed65a2a07ccd34780a320"],["/CSBook006/index.html","777b05c6c07ba4e621af74654985da0d"],["/CSBook007/index.html","738b85ebdc04a7e81cf4b7344d6997ba"],["/CSBook008/index.html","006add3b5330ba55b8929595985843ed"],["/CSBook009/index.html","ee4b7ce88e119b4e6bcb801e8bb5c034"],["/CSBook010/index.html","9272f56d5e15d4f101fa7045802c3191"],["/CSBook011/index.html","9344e289edc4a5928ab3d3183b5e3b4e"],["/CSBook012/index.html","0e97328a5a40fe571faa38a4cb649fa0"],["/Changsha-really-fragrant/index.html","d0b913794e7a0f6abd7dac5aba422faa"],["/ChatGPT-VPN/index.html","9784cef300ecf400ef779fbdbdc7e7d0"],["/ChatGPT/index.html","13fa77334bae3c578fa6084ed963a244"],["/ChatGPT！王炸级更新！！！/index.html","15f4d88b65d752c8d73456e10a11ae62"],["/Chrome-crx/index.html","86111c922c5eebace7b217b671aa9d29"],["/Clash-Party/index.html","c764293b5536b547688d620b8035fc3b"],["/Clash-VPS/index.html","6241414e2f861e3e4b8e01735f9f790a"],["/ClashForWindows/index.html","4fe981d6a0147c29339ca8885358e00d"],["/Computer-Classic-Books/index.html","2cfe66229c943f5b42f911942283dd92"],["/Computer-for-another-major/index.html","e4466f0ed4f6cbc9ad902b7280ecb077"],["/Conditional-confrontation-network/index.html","8c772bb4f25577e86dd397d3c55cdeb3"],["/DNN/index.html","55a118011f8fbd43077839717097a52b"],["/DSN-segmentation-liver-experiment-summary/index.html","6f9a6968c7532ce0414403a01f5b506c"],["/Data-enhancement-elastic-deformation/index.html","2b0d6ce5d8dc2001e93436f8b1ead68f"],["/Decorative-pattern/index.html","42bf6c69d5d4cdb7bd4457f3a4a8604c"],["/Deep-Learning/index.html","4485080d33a70117beec36df95ee9cee"],["/Deep-learning-and-medical-image-analysis/index.html","ad5ab368f0b4e15ce6cb2786ca92bce3"],["/Deeply-Supervised-Nets/index.html","605a18648d0e611b30cd77ef39fc3756"],["/Deformation-model-based-sparse-representation/index.html","5d4dda13dfde3f36fb089a9f4c5dd653"],["/Discriminative-and-Generative-model/index.html","5c3d84609dd7c927e305bf97f6200858"],["/Distributed-transaction/index.html","31340d432bae3b1148bc47dcb678fb94"],["/Divide-and-conquer-algorithm/index.html","dd8ebbce0ee0d9374feb5518541f0efe"],["/Dll/index.html","513f87d7bfffee5724d45caef9c484d4"],["/Dynamic-programming-algorithm/index.html","fe25f13c38bb0b5f86525f43358f7f56"],["/E-book-download-commonly-used-by-programmers/index.html","4714df3324b1bd8e2f3b099e5d65da87"],["/EditPlus软件的安装、激活和配置过程分享/index.html","735b74325591da7227d23a64208db350"],["/Eight-sorting-algorithms/index.html","ade11ff463caad1c0c7ca593c08290c1"],["/Encryption-Algorithm/index.html","87f802ab68b3f80d2bf82e07213f28ac"],["/Eolink/index.html","9585520a63913ef08ea0ce6113ce97ba"],["/Factory-and-strategy-mode/index.html","857326114b8c1a68123eda44bd425b68"],["/Foreign-technology-blog-community/index.html","40e040be052fc0b5ebacd8a69284c93d"],["/Functional-model/index.html","1a39fc4549c5c7ee7d3e9cf50637f266"],["/Fund-type/index.html","9ec9292a385c63c822208849fd20d385"],["/GPT-4o/index.html","08e267f9abfa4e4dd546617762c731f5"],["/GPU-medical-image-processing/index.html","85dd2249234599139adc10837cae3942"],["/Gemini-pro/index.html","2f6fee7a1512b2680e41021158586e59"],["/Gemini-vpn/index.html","a66f6390072e19e672af955453e454d1"],["/Gemini/index.html","433ebf88f633dcc578f2a24dba998561"],["/Generative-Model-of-Unsupervised-Learning/index.html","925f17c6bced169533996a0873b5ee5a"],["/Git-Learning/index.html","f631afb1026760be8f35938064fc7639"],["/GitHub-2FA/index.html","a33e4d716a30b52f5401c418a5e237b0"],["/GitHub万赞，程序员必看操作系统总结！/index.html","e33727d0359b3b8d9c8b70984e3a1c4c"],["/Golang-book-recommend/index.html","d7d5ad5d19916b20ab0ffc9108643505"],["/Golang-learning/index.html","dde0ccdddc5807d0bab098716433e9af"],["/Google-Gemini/index.html","ac447027feb7d8b5ed410b034ee3bea5"],["/Gradient-descent-optimization/index.html","752275335e9572232a1d38f572637149"],["/Greedy-Algorithm/index.html","1c17a23b71a1eedfa1710937368e6473"],["/HAND-User-Forum/index.html","53d2a404f97dc79029d47b830077b322"],["/HK-bank/index.html","5db4657897d52447328d65afeb6ca7e9"],["/Head-to-head/index.html","b4945db61b1c8b07d1f9784cd3e8428b"],["/HexoPage/index.html","ac29454d2a099daaf9efe0d83ca9e50c"],["/HistCite-Pro/index.html","43652eecc7f6ffb0de1d75e305e113a7"],["/How-does-the-program-run/index.html","947a57dec8bf88919966590f27213c90"],["/How-to-judge-whether-technologyisreliable/index.html","11c7fce1143a6b67bd9317928384e85c"],["/How-to-learn-design-patterns/index.html","c3567bbc9fe7b5875ddc70407f09b2af"],["/How-to-learn-design-patterns？/index.html","b3610dde408d7096058af95d43127e1c"],["/How-to-teach-yourself-programming/index.html","228dfca96bb32cbb81ab4760be9513ba"],["/How2learn-Python？/index.html","6810a137a27b86725fc079e1abe4bd99"],["/IDEA-shortcut-key/index.html","f5c58d3c9129062c5bd84e269517a21b"],["/IT-interview-basic/index.html","c9c249ea5e2a61f900450d11336e4126"],["/ITK-VS-install/index.html","ea1cd9159c6cdc66388c359d1a2ad91d"],["/ITK-VTK-ItkVtkGlue/index.html","12ec8323c7655e8075bcfe956ff3d760"],["/Image-processing-plus-noise/index.html","c93a89a322a40574f9571a16c75eacbf"],["/Inception-Going-Deeper-with-Convolution/index.html","d98bbd7e677ac30d719469aefd48a10d"],["/Information-Cocoon/index.html","d14ad8fa3618a2dd8ea24cb72997f990"],["/Java-GC/index.html","20df934b0064371827c4fa2dbf8dcd1c"],["/Java-Servlet/index.html","95e253b51857a17612aeca7927e909cf"],["/Java-array-and-collection-sorting/index.html","b115731785e39e491fb9543e718cd12c"],["/Java-development-tools/index.html","a94722d9a71dd7a34b051e96f8ac8475"],["/Java-eight-data-types/index.html","4658d9a58b39d73b8a0dd96f4da4b735"],["/Java-interview01/index.html","d0616369d1e84c55077cb5e4cfc88475"],["/Java-interview02/index.html","7f2583334ed3ecb144987a40d076f6ee"],["/Java-interview03/index.html","4d154ad845299a5365869050c73f780d"],["/Java-learing-map/index.html","c1c8d0713f420c2c01fd2daf5740faf5"],["/Java-learning-route-map/index.html","0296d123985af077167003eb5da4d4b1"],["/Java-memory-area/index.html","c54d50ccc1bfdac447b71a529e647f45"],["/Java-memory-model/index.html","0056b52e206805a7d761291f52e5afee"],["/Java-multithreaded-learning/index.html","7b54ff045fbfe343eb2d70bf715f5ceb"],["/Java-project/index.html","98fd51afaffd649dff675bc08a090a8c"],["/JavaWeb-Chinese-Garbled/index.html","3ee73c1182dba400839925cc20d47170"],["/Java还是C++？/index.html","248ede44533af4650bbc1f59dee45b58"],["/Kaggle5-step-guide/index.html","2c6fb12edf3e18806c7b63bbb9cc8337"],["/Knowledge-points-of-Java-garbage-collection/index.html","e4e159ca04ab2d1e3e2233f46f75a3cc"],["/LLM-DP-TP-EP/index.html","7d5e3c0b7420d5c304ff58dbb6884eb9"],["/Layoffs-Hiring/index.html","f1e22b5d57f316869f5b24ed112fce73"],["/Layoffs-and-Hiring/index.html","b5c673568d8042d78836d7eadef47612"],["/Linear-regression-of-machine-learning/index.html","480d1a7bcedc19257f73f01bec460206"],["/Linux-Compile-C/index.html","a13c3578fe675d97109ebb54173be8a5"],["/Linux-ITK/index.html","d207865b8d66f28c8705bbf6e4852658"],["/Liver-segmentation-of-sparse-components/index.html","b20921032b2159ce2a4efbff12c343c3"],["/ML-EBook-paper/index.html","e7b336621689c91edaa90adeb701f4dd"],["/Map-uses-multiple-maps/index.html","6cc316c85b082730559b308771cf54b2"],["/Marching-Cubes/index.html","934212ba4be5317528dd5e91583dde94"],["/Matlab-Graph-cut/index.html","d11c5bcc0c6c33072c943a273131747b"],["/Maximum-Likelihood-to-EM-algorithm/index.html","d454888d48bcc52697799ff35bf9e575"],["/Mean filter and median filter denoising/index.html","3595693eeb408f1e5141d14315285f8e"],["/Medical-Data-for-Machine-Learning/index.html","e013571424ced5e7836c38afe9459052"],["/Medical-image-analysis-deep-learning/index.html","848eb70b0e1dc15de86d2a4bc73ad24c"],["/Medical-scan-image-processing/index.html","a5e76b580e660c85afb38402e79f96bd"],["/Merge-sort-algorithm/index.html","cf78de77ddcd34d6db049acbe3301dc6"],["/Monthly-income-2W/index.html","0b0742ea689c270e9c9e70f73a3d9744"],["/Mysql-database/index.html","f5afd8b4c7b3eb912c20db75591bf2c5"],["/Neighbor-Embedding/index.html","ba3b8804513d20657229057e81b61661"],["/Neighborhood-approximate-random-forest/index.html","e49ce4188866670f603a19779c4e42db"],["/Net-and-official-documents/index.html","143f971c467181a9bd2a4bfcffd73d97"],["/Netflix-VPN/index.html","801c7d8cf5cecb8978e51ab6b1df8069"],["/Network-principle/index.html","70d4ebb6dcd5f61ef543f5e38ec9dc45"],["/New-Hong-Kong-stocks/index.html","7dd2fd1910d02e0392628b240c484c0b"],["/Nice-to-meet-you/index.html","9ba4a9d697661600a3afb35ba0d9c325"],["/OS-processes-threads/index.html","c019e4263b741e623557019fe10d4aae"],["/OS-run-environment/index.html","c80b2d49ffa60fa7c652d9f1c58a3f3e"],["/Open-Internet/index.html","7117b1912ce0f32861b209beda599d5d"],["/Open-Internet2/index.html","915fe82d94bd5416ca9789db519fd472"],["/Open-source-community-and-rewriting-website/index.html","8be18713bb44c32a60af2ba43757f64d"],["/Panoramic-image-stitching-based-on-SIFT-features/index.html","66e4845667f387995e4ee95e52050ab2"],["/Parzen-and-KNE/index.html","b788d70e7b08c107148a2c7a18714aef"],["/Personal-technology-blog-site/index.html","75ccacc5f2e6faca12c552428e229e1e"],["/PicGo-Gitee/index.html","7ea2fcfe488757fd38475541230866c1"],["/Programmer-treasure-chest/index.html","13eab31230cd7511c97465d6e1794ad0"],["/Prototype-mode/index.html","7f440087a9a66e8d9383d0887cb9a719"],["/Python-base/index.html","b0d70fec28658ee292ebb74a1483a7ee"],["/Python-crawler/index.html","f2dbe585832a42789e77851720a4148f"],["/Resume-revision-suggestions/index.html","6e0cf6d2adb88d677e235495af864cb1"],["/SEO01/index.html","b3ce4d5032575f0307cc0d43f12e9095"],["/SEO02/index.html","75b95214488a1fcd529e0792a00894e8"],["/SPHARMPDM-MEPP/index.html","dd19e75120f109cd5253ddbd8e8041ea"],["/SVM/index.html","7f800807248b8e079bd4c831a3ca04a7"],["/Seata/index.html","0c6cec4fae0fead34648b85d7baa4037"],["/Semi-supervised-learning/index.html","19883b8b97b328950ca46b332f87b3ad"],["/Sequential-model/index.html","263e1a9431b062834472021597813a63"],["/Shape-Based-Human-Detection-and-Segmentation-via-Hierarchical-Part-TemplateMatching/index.html","3a6a92d1901733377ad41b63b141a7b5"],["/Spring-basics/index.html","8fb56b0c4f8611afaffcfb2beb9eba99"],["/Spring-integrates-hibernate-Struts/index.html","a11d33073cf836b2764b1c506f3fe76e"],["/Structure-learning/index.html","f9a4a585d051085b5a06243f4b429352"],["/Suggestions-for-self-study-of-computers/index.html","5201ea59770d88cfcc16fdf36da0bbb6"],["/Summaryof-HongKongStock-Account-Opening-Links/index.html","ef8155ac8332edb1350c0514c85c0720"],["/TCPIP-detailed/index.html","3d1b38e1a474c3111aa8d8bfcbdd4e8c"],["/Telegram-VPN/index.html","1a5ac5f14aa9b5ce76cba3532129a939"],["/Telegram/index.html","b74ea64c71de7263aa5eae0d31c7233f"],["/The-essence-of-shopping-festival/index.html","bb29c552e9584a1c95b1aa51d51fba44"],["/The-most-important-investment-in-life/index.html","4854d2e3a101242bfc5992d467d43a69"],["/The-most-successful-nvestment/index.html","204d64d06f310d327a0d7ddba090ab26"],["/Transfer-Learning/index.html","f86c75851a0f13e9998abe40bf501327"],["/Transfer-to-computer-major/index.html","497be592a041ba0b5e0b824b7a5ee976"],["/UNet-Convolutional-Networks-for-Biomedical-Image-Segmentation/index.html","8a0dfa2b71495c4710bf01a58ca6108c"],["/Ubuntu-install-sougou/index.html","75c0ab03992a379bcd0cf3ade0eb8cf6"],["/Understanding-of-paying-for-knowledge/index.html","33e1b74253cb3801fda023a99e3f994e"],["/Unsupervised-Learning-Linear-Dimension-Reduction/index.html","f6ef40c92a75085318cfbbb59666796a"],["/VPN-HELP/index.html","ec6e39d7f354761c8a0b5cf4ec8461d0"],["/VPN2025/index.html","a90dff78307ea5aa4129aa4086413e3a"],["/VPN2026/index.html","d337bc6e6c985a3bd28dd384122ded92"],["/VTK01/index.html","a3ce9b805391085059cf918053846ab9"],["/VTK02/index.html","d7a2206098291d09d07d9853c9c3f95f"],["/VTK03/index.html","a99c7cff05821871eb37883ee2f3b0aa"],["/VTKRead-write/index.html","e7c473b486322282d005130d10d8267d"],["/Vertx-Java/index.html","ec5803052e2d9668db4f31d17e5917ec"],["/Vpn-OpenInternet/index.html","4ed5a061119f03a8de71f0ace8e920f4"],["/We-are-all-good-kids/index.html","dd8bcdb41f856654eb5ecdbe00b9d5b5"],["/WeChat-80/index.html","41f709b9b78ab029abe8d50a17824f02"],["/WeChat-red-envelope-cover/index.html","bc56cee3fdb52b2810aa9a5b6c46fd59"],["/What-is-crawler/index.html","eddadd551676fc323d5a9e8be0aa805e"],["/Win-Internet/index.html","4a60a98bb38a4271e72f92c511f95b96"],["/Win-Open-Internet/index.html","fc08e9393e616fe73e55300f2ce5069a"],["/Win-OpenInternet/index.html","ffe030146043303328a140558b4ea49f"],["/Windows11-2kfans/index.html","0dee6b3a148d230d1491b235101a2ed5"],["/Word-Embedding/index.html","2e16dd923c98cf0f5bc17775c63f9d6b"],["/YuanShikai-and-his-Beiyang/index.html","fac17a1f886b0a80c75bfb8a886724ee"],["/Zero-copy/index.html","5cf965c46d9752fb42d34af90308ece3"],["/about-keras-model/index.html","eac244fb94800e3bfc7d7e11aef7c15a"],["/accounts-google/index.html","e122493f80b3b75d2e1f4ffe5dd1cb20"],["/algorithm/index.html","23679a90fff63db30ad513425176487a"],["/alibaba-Java/index.html","e6b635ebb53b0bbc723fafa1e4379236"],["/archives/2020/01/index.html","a01695b2b6cab8b02b2c099057e807ab"],["/archives/2020/09/index.html","3866dcd5e8ae163c90b6cb29803a2f4d"],["/archives/2020/10/index.html","e4435d7d8768a6e3d2146b2c3f5d56f2"],["/archives/2020/11/index.html","f7de9044026c590663242423a61d013b"],["/archives/2020/12/index.html","5eef2b3e996e1c965d906d01624f4761"],["/archives/2020/12/page/2/index.html","fad5ae012f2a0c0b5c10fad912f93399"],["/archives/2020/index.html","9bb15ddd8c64e5d3489589b367488668"],["/archives/2020/page/2/index.html","ac211cdf048d4df75dac60e1e5604b6f"],["/archives/2020/page/3/index.html","e2206e671c68b8990f119074e4b5a99c"],["/archives/2021/01/index.html","347ddc79e304cb9766074b2c7a607917"],["/archives/2021/02/index.html","90a21054ad8c5fc8c21abe502f05cfe2"],["/archives/2021/03/index.html","7e7c3081c27b35b438ebc811ed71301e"],["/archives/2021/04/index.html","40aa6eaf256d6174a2a190446cf5541f"],["/archives/2021/05/index.html","438702a11b85e349326a0c49a65f9d73"],["/archives/2021/06/index.html","68f1208eebf589cf4aaf55467512bce6"],["/archives/2021/07/index.html","c52d437618215ffc917e78d44a7ded91"],["/archives/2021/08/index.html","5207672e6b4a52e8625e93746b482cb6"],["/archives/2021/09/index.html","2ecbe0b59716529554264f948976bbb0"],["/archives/2021/10/index.html","c96d559085cdf822f6dd2c06194b91fd"],["/archives/2021/11/index.html","ef54b8f08d14187089cf227044fa2da6"],["/archives/2021/12/index.html","2d883b05617bd23212bf70a77ca2e810"],["/archives/2021/index.html","96609f570712cca6010b7bd42093f75e"],["/archives/2021/page/2/index.html","0d2ec1783a32c116a08b958c7a09f266"],["/archives/2022/01/index.html","a606a230255ce1ba149470246c3a987d"],["/archives/2022/02/index.html","fcde5fd942a3079f77b73bb5c44f2b5d"],["/archives/2022/04/index.html","19b87fb4470aa3ddf5c988d7958286f3"],["/archives/2022/05/index.html","fd4698047e70fbc7ea58ef8b89341def"],["/archives/2022/12/index.html","b37c0307251b536b26db0fafdd83928e"],["/archives/2022/index.html","44dae23ffe4ff003b8004bff0a017e02"],["/archives/2023/01/index.html","73266e268f545bc5eaf34b471440b8a8"],["/archives/2023/02/index.html","a9fb8d03395746a2f86b4472e93f8ba9"],["/archives/2023/03/index.html","49e00da73375661347007e43f07ae697"],["/archives/2023/04/index.html","ee5714d446c9dbcbd5ef4901eb49c567"],["/archives/2023/06/index.html","aad6cfd0c9c17cade900e29ceefd5e10"],["/archives/2023/08/index.html","610b929663baee4ca4e95fa3865e4f98"],["/archives/2023/10/index.html","a3431197912da5c70a00c0da3d5bed4a"],["/archives/2023/index.html","5bb03914fb8204f80dd05fcabab5446a"],["/archives/2024/01/index.html","8f8502558d486ca8e9bbb07a1d7bcc32"],["/archives/2024/02/index.html","9e3a06cc4205a25be1b66f572908fabf"],["/archives/2024/index.html","14ef33f6cd9fb16f731a5f5f0b769887"],["/archives/2025/06/index.html","f5c4d6127cc825ca2085031955bacd42"],["/archives/2025/07/index.html","ad2abd46f64bef8db898c372a7af7617"],["/archives/2025/08/index.html","4af94b2e1ed242e7c76e0b0388599516"],["/archives/2025/09/index.html","bd14dd9c97222e76f01388fe40bafc49"],["/archives/2025/10/index.html","08a86307098da265e6e6c4bffae5e01e"],["/archives/2025/11/index.html","a37d1418fe83f2c6aa16e62f951a2518"],["/archives/2025/12/index.html","cc470835d9f2be8c8d39a539a17affeb"],["/archives/2025/index.html","c37964d1f4c891008a2f9bb49cfc1b56"],["/archives/2026/01/index.html","6f9eb52e2684318bdeaec22e5ba59323"],["/archives/2026/02/index.html","17bf9ad352469679a52101cd24e49974"],["/archives/2026/03/index.html","f6626baed76221abfda9b1ee19e363c5"],["/archives/2026/04/index.html","e2adbf2c9fe09ad5e98d214a9d35c145"],["/archives/2026/05/index.html","be044ea9be015fae780797dc48066eb0"],["/archives/2026/06/index.html","30b551374a524a54fcbc10bd41c22a0e"],["/archives/2026/07/index.html","a1eb2dd7b60657c30b6e486552e7d291"],["/archives/2026/index.html","002116e9d01541ff11818f9ac37e9df0"],["/archives/2028/02/index.html","b8221451c104d4486be0fdc1328c90c2"],["/archives/2028/index.html","ab015cfc03883ac2413d7197feb148f4"],["/archives/index.html","6521ed6690867811b57b6cdcee7f280f"],["/archives/page/2/index.html","a3b22b133d111054e1047553f7f17830"],["/archives/page/3/index.html","1481807ed67c7218e3c27ca6af8ace98"],["/archives/page/4/index.html","a48faddda4b837cc832c37bce55d3608"],["/archives/page/5/index.html","d9a3a65f15a31084b978d2a38a84e176"],["/archives/page/6/index.html","e5f27c67d4d40bc24d36da12e2daf7f7"],["/archives/page/7/index.html","77da799f73d823c31918fa1379e42e51"],["/baidu-search/index.html","1553d2ec0764d1385c44b63fe901ff9e"],["/baidu_verify_code-Hh2fKNlEB1.html","bc4e40637940d276c9c87653d2f6d3f7"],["/be-a-programmer-instead-of-a-code-farmer/index.html","c09308534d8c32304292dfd39e3cf337"],["/best-vpn/index.html","5260f14819066673bd731d3ee59a5ef2"],["/best-vps/index.html","e18236a06c010641a964fc50884d24ad"],["/bought-a-house/index.html","c553838d6b693992d726cfc7a9cc4375"],["/categories/AI大模型/index.html","5d975de8abf5616ef42341d68fb3c006"],["/categories/C与C✙✙/index.html","c3b9374d5f0716fdf82a40785f96e553"],["/categories/Go语言/index.html","6df3bef580e00b404c0856d01f2de4df"],["/categories/ITK与VTK/index.html","2782d24ca783df5c4596ba63957d0f06"],["/categories/Java/index.html","81c3bb97a776fda4c3d0a036d7719f27"],["/categories/Linux/index.html","804b7e86d9c9298969498010443566de"],["/categories/PLC/index.html","7067bcdc0cf3a21ce930f8c2c94fe58a"],["/categories/Python/index.html","81590570fb893c2e554f1b2341ecb966"],["/categories/SEO教程/index.html","d9548a124fa69614fddd25aede73e96e"],["/categories/index.html","8b511c0ad91301d6f74c14c1cb18206d"],["/categories/图像处理与机器学习/index.html","c66a6f0e90438026b6c7b189a5d814c6"],["/categories/工具/index.html","a971d0e2ae574cdc4474dd2b5262450f"],["/categories/技术以外/index.html","99b4e967ac4d8a92cf150cf0291ffcd6"],["/categories/技术以外/page/2/index.html","b66977c3d016f181c400c4ea8b204441"],["/categories/数据结构与算法/index.html","9846161b46549871144444aa6a12cd11"],["/categories/科学上网/index.html","b7e33284c5e5dff9fc480f5f72eff0a6"],["/categories/编程经验/index.html","00dabc444b457b131441657ed5796f92"],["/categories/编程资料/index.html","46fd2c59088bd92feb80b9289c8f0396"],["/categories/计算机基础知识/index.html","d79a6cf027976845ddabc881de5ae391"],["/categories/设计模式/index.html","6e9b277693502d09da2e6c70153d3288"],["/choose/index.html","3547cf006c65164132718ca6fe49d436"],["/choose2/index.html","2e383d220c4f8c016b39827f7c207069"],["/chrome-crx-intruduce/index.html","7b387a0bc55a00dc2c9c4c9aa3173447"],["/clash-free/index.html","7a94159399750cc7a5416d611e412df2"],["/clash-pro/index.html","b31a721ea54b8de8a0b998e7c7c6367b"],["/clash-verge/index.html","b511500fbf76b398439c3145edf5834c"],["/clashvpn/index.html","fd69f430356689cc8d7ccc35e22e52f5"],["/claude-code/index.html","f97bff5cb27e9398ec36da2da513c2d1"],["/coder-blog-website/index.html","47998c772bd82738d4d8f177ec3674be"],["/coder-source/index.html","54576660e950b421dec46e02b3a60e20"],["/coder-videos-website/index.html","24e42b3174f7c47290032e6a13a14632"],["/computer-book/index.html","77648fb4261dbfe8cca09060f7e20e57"],["/computer-censorship/index.html","e997f6326a84037e8e88a30013064e51"],["/computer-network01/index.html","dab25e0b41e1e1f31d1a43f214972831"],["/computer-network02/index.html","d345a3b4557b84dc2ce2ec7ad192c0ba"],["/css/main.css","bc32ad34ec4990d934c3c647bdb62f79"],["/database-Mysql/index.html","f6aa8004c01d36a477925d5d7ffbdeb5"],["/eclipse-lombok/index.html","59bf25460c007ff1d73fb020233ecdca"],["/freego/index.html","0ddd8045af6d9f1112e43a3284599708"],["/fully-convolutional-networks-for-semantic-segmentation/index.html","05831402317babc96d4a0c8a2dbf4ff7"],["/great-firewall/index.html","417eec13d79caed246158783da1da0ca"],["/halfrost/index.html","67d92105a3c37d42edb80f9d5b030aaf"],["/how-to-signup-chatgpt/index.html","8574fc9d41ab45a8352668e21a0ebb73"],["/how-to-use-Gemini/index.html","7fcf613c175f28cfc8609a4373413e63"],["/idea-continue/index.html","5d0d27261cdf987b7bb66a5f537a5ead"],["/index.html","d34da8354ffe2f1958f9ce32fc838dc2"],["/internet-dir/index.html","6e574c5b88dd97ef7a20d99f0649d2f6"],["/ios-open-internet/index.html","096dab4a2f7381f75e532076c256de84"],["/iphone-open-internet/index.html","9525e18d1fa2c19ee8750140224e4982"],["/itext-makes-pdf-form/index.html","ba2840db4f85d72e4299845ce66a7a9b"],["/java-Set-Map/index.html","ab445aeb8b666a495bafbd3aa0e4ed2f"],["/javaweb-server-error-codes/index.html","7b72ca7e7d91b3dc4f9df8c52e0b97f1"],["/javaweb-source-code/index.html","63c86d0e99761237956d1648efd06cd5"],["/js/lib/busuanzi.min.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/js/lib/lozad.min.js","47904d34a224931dd1b615c59a3dbe3b"],["/js/lib/prism/prism-coy.min.css","0ccad54d95845901ead59bfd3ecceb14"],["/js/lib/prism/prism-dark.min.css","a4711d2957d6605eb5682bdd228cf123"],["/js/lib/prism/prism-funky.min.css","efedcdccd7a9ab342d2d9cacd24920af"],["/js/lib/prism/prism-line-numbers.min.css","38e22e790c279bb56f9ec4b90a2a2d58"],["/js/lib/prism/prism-okaidia.min.css","5ac6f9de996fbec68aaa106dfb16e061"],["/js/lib/prism/prism-solarizedlight.min.css","ecc7e64d039873ffcf7fb27babdaeb5a"],["/js/lib/prism/prism-tomorrow.min.css","456af2a14ae4f5089939d5904ac40fe8"],["/js/lib/prism/prism-twilight.min.css","ebb5c355332a8cf9a1ce37a2a69d678f"],["/js/lib/prism/prism.min.css","a5234d614834658887cec6a9515890f8"],["/js/main.js","052d2b299d9c750afea8df0b802ab7c1"],["/keras+TensorBoard/index.html","918d47068bb3d3c5d2159aca754976c8"],["/keras-beginner-guide/index.html","6df38ced9fba66b34efb80e2fcbde955"],["/kimiclaw/index.html","a9ebf6a428fe41d10207598a80d2164a"],["/kmp-algorithms/index.html","b1095f1e57f5905a3a95ae92b529f79c"],["/leetcode-Java/index.html","3b45ac6fa570691e5219c34fcf94e3b6"],["/links/index.html","daacf713fbc4205af74891966d105944"],["/linux-java-opencv/index.html","a0b44f1469f5e22366f47f3fe8f655f5"],["/magic-internet/index.html","eaf86b81757686b7c334a6d32116d310"],["/magic-vpn/index.html","e5a2b4933c5f5400ef77b0971e4ef1c7"],["/mingci/index.html","ca3f6ab17d3116a12e7d1600a124b31d"],["/mobile-vpn/index.html","484f2cd868df0f6d3e3a20d837e6fc28"],["/msb-source/index.html","458da008e8ac1a92c9bf6c48e65a9f28"],["/online-BUG！/index.html","97c408f2f5163da6091683149b400ef9"],["/open-app/index.html","6da518346cbf420a18eb6f7cfd517ff3"],["/openclaw/index.html","39dc016a4fdba47fe320cc4d78f1cf21"],["/openinternet/index.html","c04bcfa31a1f6a5b02d7e5eba88ebb90"],["/page/2/index.html","b4d0b49627d97a8b302e8e964fccabaa"],["/page/3/index.html","0f597534826db80b8f6615ba5383342b"],["/page/4/index.html","c10b4c6140613e435a17091f83fe4d56"],["/page/5/index.html","9143093806138fc6f3677b05c8d73abe"],["/page/6/index.html","43b5d90c7ad279c03f5d71f1bc1145dc"],["/page/7/index.html","d096243ed6a68fe9f79d1d13594e917b"],["/pandas-data-preprocessing/index.html","c7780a5a6970de28bec76a32fe7d2b26"],["/phone-win-open-Internet/index.html","aa1d11cad943bd735bce461aebff6842"],["/popcorn/index.html","845b8180be662f4ccb00dbd01dd547b3"],["/protocols/index.html","c7722a7ffdfed697dc5e258f46b0fae9"],["/python-Blog/index.html","bc4c506fb494184a06f655c5a72e96aa"],["/python-yeild/index.html","543cd1caec6e1cb46eb1947c17dd3ee3"],["/python爬虫教程/index.html","0b26cf6b7cfd1526efb54caeeb0a1805"],["/route/index.html","cae7afd33231c81892da4a8b2dc1be80"],["/search-help/index.html","711cabf61bcac67868b55626792d71dc"],["/software-copyright/index.html","426955ecd151e40bb07d9fd461717463"],["/sw-register.js","69e7ab15d305298b86526d9e7e416fac"],["/tags/AI/index.html","554f44e71f21e8e5450cc08f325167dd"],["/tags/API/index.html","c7f9feac592850b9688582901a8e9ca3"],["/tags/C-图书/index.html","da7dfb2e796379d8f3bee2ee253af2d5"],["/tags/C/index.html","19685f92466ba498fec180c4dd64f9ad"],["/tags/CNN/index.html","fe5699d82fd0b7e89ebcd7fdaa6164d1"],["/tags/Chrome/index.html","f336638d115b7a9ae7b630e5410938ee"],["/tags/Clash机场/index.html","69614509fcce568c9aad03d078f456a6"],["/tags/C✙✙/index.html","b30630836303815407965fbe4db41dcb"],["/tags/C语言/index.html","3fa8f01c0b5da4f02e2715e5ef3f2b03"],["/tags/C语言图书/index.html","531831aa72a8220f8c69ee95bbfbfde4"],["/tags/DSN/index.html","85c128b8c54415fbd7048a5681c1c72d"],["/tags/Dll/index.html","97a29dd17f3f83f0a4e11ea242ae114a"],["/tags/ECCV/index.html","f23d574b9e02f4f9a96e60ff8afcf27e"],["/tags/EM算法/index.html","f8bfdb86e9f8d7656f9882ad040175b9"],["/tags/Eolink/index.html","1356f993c9eea188345914ced5e4bd11"],["/tags/Gitee/index.html","b04ba42d980ddfac2ee199b3b5bbe5a2"],["/tags/Google/index.html","c06557f3c51788c0eab0b5eab35b9be8"],["/tags/Go语言/index.html","ad066a57cd8d6088f2ef7109d252856b"],["/tags/Graph/index.html","db5b7d51293223b78e5edef18619f3d7"],["/tags/HTTPS/index.html","19cfa67bbf76775a8cbf7223b9135b61"],["/tags/ITK/index.html","6127e18b7c61322b8f9d8bc73568e093"],["/tags/ItkVtkGlue/index.html","02228769867500bdd90f50d8a96709e9"],["/tags/JMM/index.html","d9a0f0ad20fdd7f913fa5a0ce8598f71"],["/tags/JVM/index.html","f6c6d99f6981ddc72c90d33cdc2a9243"],["/tags/Java/index.html","0188146eef2faa86befa7e4705e9be8e"],["/tags/Java图书/index.html","abba69aae56fc4780f437e9c536703e7"],["/tags/Kaggle/index.html","86f1b260fbd138db4d7f1da5676553c1"],["/tags/Keras/index.html","e6ca39cdc520d6cc415695e48b79bd5e"],["/tags/Linux/index.html","88d506570b94cfc19052cc7814288165"],["/tags/Linux图书/index.html","459182f16aabf8fe2c98afd23dd2c31d"],["/tags/MEPP/index.html","8246c244741031da866db7f177d3a534"],["/tags/Map/index.html","45fabc3922a38c8018cf9f7509752db7"],["/tags/Matlab/index.html","4eed95956a19fe202c22840ddf10705a"],["/tags/MongoDB/index.html","3bb4e46f84f608ef84146bb862da4451"],["/tags/MySQL/index.html","d08b3ca49b652dbc7da269d0b9484a2d"],["/tags/OpenClaw/index.html","3656ee14a40c42a7d470baa68e1396e2"],["/tags/Parzen窗/index.html","5826d77254c38ccebf2dcda7ee9c3d63"],["/tags/PicGo/index.html","42021717f272e75cdbb1a0aec0b994ba"],["/tags/Python/index.html","1adc27be0466ce55da61cc1ea938c771"],["/tags/Python图书/index.html","ee25cafff124367f2df3ea2a10b113e2"],["/tags/SPHARM-PDM/index.html","c9b79a75847dfbf75dedcb09faa775ba"],["/tags/SVM/index.html","1e6d98d21202ee4cdb22bb336c113b96"],["/tags/Seata/index.html","8b9b19097abc2d47a8f7bb4e70d8c83d"],["/tags/Servlet/index.html","da6687afb549f2dab7a8da55f254689a"],["/tags/Sping/index.html","1e2ac01ab2da203a8fe93f77f71f5fb0"],["/tags/Struts/index.html","71fd9a0dc4e40770a7db7e86ab51289a"],["/tags/TCP-IP/index.html","332a7bcae4434a91824ab8af53ae1e6e"],["/tags/Ubuntu/index.html","531ed2908aa123dc78abc678460a5188"],["/tags/Unet/index.html","2675feb771bcbbf28c543119b6989027"],["/tags/VPN/index.html","4e7478148978dd6b47d77090b0c1c187"],["/tags/VS/index.html","93f6d80202d779a630669f8cd6c1292b"],["/tags/VTK/index.html","f82b5d9bb294b175fce41f1801ecb84d"],["/tags/Vertx/index.html","b984e3d9fce16c1453e98f13af2d70c3"],["/tags/Windows/index.html","4b9958128bc41823887dc91f45a7e7a5"],["/tags/claude/index.html","87e077a357f139b1daeb301e93101d52"],["/tags/edit/index.html","c30ed58602458faecade5418971aaa12"],["/tags/hibernate/index.html","c2b56b20d9a3ac6bc0b92ffddcfa3f7f"],["/tags/index.html","5e421de4cdf3b711ae0d9db10d26ed70"],["/tags/itext/index.html","73f6e8b9ab0bb7cd1e7bebc72d1aa4fe"],["/tags/jdk/index.html","679ab0f66d97fe2b3ab27369c8ee9c50"],["/tags/kmp/index.html","6be5e57e5d779abfca450cd3abe78989"],["/tags/k最近邻估计/index.html","005aac72c6253aae58a26329591e803f"],["/tags/lombok/index.html","7a93c8bc00b70f1517be3d6fb59f68a3"],["/tags/offer/index.html","0c78691237e5d318f44779ac53bbc93d"],["/tags/opencv/index.html","6bafdc250827ae75a29c617c2acbb039"],["/tags/pandas/index.html","1352a752a1e4ef6f60b77365b7c91189"],["/tags/string/index.html","3cdf95e2adb1059923762423e3ed1052"],["/tags/vim/index.html","1e5469705c54dcf4c0ca00e38d366a40"],["/tags/vtkPolyData/index.html","e9718b974b5f22d9f7ae3165c1f008cc"],["/tags/web/index.html","ef3bbe43355a5c3ac0a76287cf4a2080"],["/tags/xshell/index.html","db7fd33f3f073b36b8cbdbf2c63ef559"],["/tags/yeild/index.html","0aa8bee7ce262b48d6290232ccd7fb25"],["/tags/互联网/index.html","c7b1a614c0e779e69d8b39fef75b0239"],["/tags/人工智能/index.html","768c0aab01be99cc57830f6a416264b5"],["/tags/体绘制/index.html","6771b45f929e6b1911c152b5267a5d49"],["/tags/全卷积网络/index.html","372037f8459a4bc6414d77e1eaacb668"],["/tags/公众号/index.html","67284d4c0a6ab0887987a9aef1805ef2"],["/tags/内存模型/index.html","aa01864239b5a882cc0f72f503a09795"],["/tags/内推/index.html","a9c44d0c08808aec8edf80fd3fa27dd6"],["/tags/函数/index.html","2a272c9714cfff65a6bd04d42f6ed101"],["/tags/分布式/index.html","53aaac959981b74a9b18ac63f8a9165e"],["/tags/加密/index.html","c74dc53f3d8742fff9ebdff03104d6a1"],["/tags/医疗图像/index.html","97834b804b476a311f765caffda4129e"],["/tags/博客/index.html","acd10879d44f65373825951358363aaa"],["/tags/图像数据/index.html","3670d2e514f7fcb00b175ef1633de2d2"],["/tags/图谱分割/index.html","4b17252197de731a832536b0e84145fe"],["/tags/垃圾回收/index.html","596cb2ad8e07528ee6f0b4670eea537d"],["/tags/多线程/index.html","ecdada62cf5155f076858af4f9cccbb7"],["/tags/大模型/index.html","5e66e225580cb880a276595ca99a40ed"],["/tags/字符串/index.html","3534a447fe20805acf14c254e3c66cee"],["/tags/小龙虾/index.html","4131ec5b550f0865e0db19ef98b4c838"],["/tags/工具/index.html","a3cc31a1d638189f8e1726e88bd2a5a9"],["/tags/弹性形变/index.html","90dc40521441602124e7f59936ae39c5"],["/tags/排序/index.html","5ca143093a3bbc4cc73dd21c7ee83fa8"],["/tags/搜狗/index.html","6bf218d5e227e3d899c3928e0bbafc10"],["/tags/操作系统/index.html","c1025dee282fc124aa680d12dce4acbe"],["/tags/数据库/index.html","d41ac623c6f6e615c350b4ee5eb3f94d"],["/tags/数据类型/index.html","536235459c480cd9336ae51e786a5ece"],["/tags/数据结构/index.html","34153ebc46085b1705f07c6a4f3df7ec"],["/tags/最大似然/index.html","a85eb40404056af63a205c9c61642885"],["/tags/机器学习/index.html","563937a587f767dfd856f773b61ae35c"],["/tags/树/index.html","09b322928988537bfafac6117bbdd399"],["/tags/框架/index.html","02317510b9541f2eeb10f4cf835b0ee0"],["/tags/梯子推荐/index.html","5271e6a4703f719c603c642f296b6d03"],["/tags/求职/index.html","fb9ee8c0fae39869a303d25d3816b56d"],["/tags/汇编语言/index.html","d3220ea28935fe1ce45794122a9bd623"],["/tags/深度学习/index.html","e667b136e52e6c1d8b05505c6665134d"],["/tags/深度监督网络/index.html","fcf6dc43f3cb49861c93701b4382f6a3"],["/tags/爬虫/index.html","1b82eba903f5a720fda34a52a7df9f94"],["/tags/电子书下载/index.html","d610595a5a3a126162e53e7d69d7b44f"],["/tags/科学上网/index.html","180bcad384a63e3bec032feab9058ce9"],["/tags/程序员/index.html","52b3154e7bb303311a2030df09105e63"],["/tags/程序员面试/index.html","c7b45d78d8561a99929a36c250e46f54"],["/tags/简历/index.html","4e840f16211c35227731c6009981f0a9"],["/tags/算法/index.html","e247f12a3a9e2a0f6f42574df11a93b8"],["/tags/线程/index.html","beba579420f5336f1f936203e6ec28a3"],["/tags/经验/index.html","4f590d74e654cdb9e70ec767d6082f72"],["/tags/结构学习/index.html","bdaa89b0f2366748032bf8ae3e6a3cbe"],["/tags/编程/index.html","1d4275ff2c10d77e8811b53124476ddd"],["/tags/网站/index.html","2d174d188178a551bfd110f43bc0705e"],["/tags/网络/index.html","7c5a4badf15b4729063f15f43540d78c"],["/tags/网络原理/index.html","4871ac4e8c3859ef0eb255bf363177d4"],["/tags/翻墙/index.html","496d955dac81a4836b2a02fea5319e84"],["/tags/肝脏分割/index.html","f3a96a1227dde1aa8b5a575bd360700f"],["/tags/计算机/index.html","bbef0c66a9296c4e947dcda99c903f14"],["/tags/计算机专业/index.html","e2f5587db294879b59cc09b6c4977734"],["/tags/计算机网络/index.html","fccf212496b9e0df8113ae0851aabbf9"],["/tags/设计模式/index.html","4b552688f0be0806ae48cc555d57c25a"],["/tags/贝叶斯/index.html","dceebafe8cab97c9d7ea0ce0782353b7"],["/tags/迁移学习/index.html","2dc3ac9d37cc99987541fbafdde99403"],["/tags/面试/index.html","9a5c053b2a8846c96f0984c484af8e7f"],["/telegram-search/index.html","8d8123de3a4bf556c1d457e0befe2a5d"],["/the-meaning-of-reading/index.html","24331180a302af280a49df02e5da0901"],["/the-way-of-pragram/index.html","8b301c5202a2658ced6630dc1319f3b2"],["/troubleshooting/index.html","fb5febd5e2bfe84857ff506db003f503"],["/untiypro XL安装/index.html","dbebbcac358316dc743bcc2872fd075c"],["/video-websites/index.html","9484b6f4c4bb32dbb6c07e2967e7043c"],["/vpn-freego/index.html","03dfa538d88553118a4b2d0a136b623b"],["/waibao/index.html","12d2d01e2c061a1a020d80f6ece47882"],["/wechat-fans/index.html","0fe009bda00e0336e33ff9a2b6d36a0d"],["/window-run-VTK/index.html","69adc0cb01e78bed23e2e7a1488fa005"],["/windows-science-internet/index.html","9b0bc673c4f34f8c01569b2db17c66c9"],["/xshell-connect-Linux/index.html","53d967db7c5b5fff0f9ee6dbc793f81d"],["/yzhx-vpn/index.html","80ad99a5b51536c51af9c1865c4860d5"],["/‌Accessing-the-Open-Internet/index.html","5b293862634a9f71bb3116379525fc96"],["/《Java高并发编程详解》，去大厂必看！/index.html","4d7502d90ef45602c4e9b9bcc219b0b5"],["/一分钟没了 1.5W 。。。/index.html","29562f5c69c8ad0d0c6ca1271a00f2f1"],["/一条高产爆款内容生产线/index.html","9f5b40ddef6a71a35ff3c0aa6398ec9d"],["/为高考学子推荐的六个就业前景广阔的专业/index.html","79efb1907bbbbf9cf8097ce3ececa143"],["/互联网赚钱机器---社群/index.html","d0d7e4c2241cca8fb1d5f581562b56a7"],["/你们常用的工作方法和思考方式是什么？/index.html","bd41eab565bc1d29237043209074eaf3"],["/关于环境配置的一些事/index.html","93c41198a0948eb0059d6cfa9e17d91f"],["/准备了19w！搞事/index.html","39ce35cd8be53c4442481624ce82ecf8"],["/几个很重要的感悟/index.html","6cf046a749019d838d04d5340ce760a9"],["/分割ROI篇/index.html","f5d1c475a0d759dcb19b57c29e57bd5e"],["/分割精度说明/index.html","a053483fd4812ed77ccd784012b07776"],["/分块程序执行/index.html","b09f3fd2e55429e7fdbf1b1c576c63e8"],["/加班公司黑名单！！！/index.html","30c238a7bfb7e397e498d32736cb131e"],["/卧槽，上知乎热搜了！/index.html","5998a70ad6b1123ea0a53edff1ae1994"],["/卧槽，我的小破站爆了！/index.html","8e83e39b69c45883d831cb4ed7d83b1c"],["/卧槽，我被盗版了/index.html","59724112ee35c95cd8ea8541a57ea449"],["/卧槽，还有985大学在大一上C语言课？？/index.html","ea0ad0467d770ea16a7af5d411ec52b6"],["/历年微软面试中出现的leetcode算法题/index.html","ce2999a4a9bea7ab1752c290dda88179"],["/去特斯拉试车了/index.html","7414adadc341e6cca1d9a2632e006d78"],["/吃苦的三种境界/index.html","eaaf38bde945c807c148ef3bfd3b9edc"],["/哪本书适合推荐给 Java 初学者？/index.html","852c54dc6ea666de244578814b9ca2b2"],["/哪本入门级的学习数据库的书最值得推荐？/index.html","836d10566d6333d6c1ea970bb9882cb7"],["/国内外常用的AIGC模型/index.html","e65bf62d1e293de15d3cc4b505c15bfb"],["/国庆假期/index.html","8438346831a2c3c71150f882519bae16"],["/图谱程序字典/index.html","052611b674ba28d2469a60994b9b272f"],["/图谱训练与分割/index.html","b3c86c7deaf46d90df000d3f80f42a9d"],["/宣布一件大事/index.html","fe831bd507ba16c81f5481995083d164"],["/小鹏P7i试驾体验/index.html","e456f020230977727efa4db7b8855cf0"],["/微信PC版3.3.0内测更新，电脑可以刷朋友圈了/index.html","9b1d542662b403ad4f41f224882c5d1c"],["/怎么更快的赚钱？/index.html","9cd392448ffaa63983eae862fdfc058b"],["/我毕业了/index.html","dc063d6ffca9952685c1d932b06238e9"],["/我！真！的！找到了！爱上学习！的方法！/index.html","0b20ba2aacff0c899ad6c2aba37ba391"],["/户口的意义/index.html","aef77a0bd3602b4993c27fb0f308bbb1"],["/推荐两本经典算法书/index.html","3eb6ff57732b91a09ab8680b98ee93b0"],["/推荐几个在线学习SQL的网站！/index.html","67fa0b0de8b5dce87616a7e124a23e8d"],["/搞了一个程序员成长晋级社群！/index.html","2a8b5824f4d77dcf8eb232f4d3a31a29"],["/摘抄/index.html","8247d7193bf97813c409e2e890bad105"],["/暴跌30心态崩了/index.html","32a530011deaaf1d37a03d78de38a220"],["/最近很火的ChatGPT到底该怎么玩？/index.html","d13f2f3a6f5ff6d0e209f760051abac2"],["/有哪些好看的日历可以买？/index.html","fd75acae5982c02cf644fc5c57d6f901"],["/服务器有啥用/index.html","7ead03883030a9c751402ff3300f9e3f"],["/来长沙了！/index.html","33d6da47d3fb0725eabdb7cc1b744a05"],["/校招污点公司名单/index.html","719def333e19ea9daf6b93a0da980062"],["/梭哈200多万/index.html","19d2d14615264e27ffc36808f0a509b7"],["/梯形图入门/index.html","bb8c1595aabb043b0b08b604e6412a06"],["/橙心优选，凉凉了！/index.html","a279b1e6db3411022fd16888a8d35ff6"],["/比亚迪汉试驾体验/index.html","323d4dd511e67ed0a8f8364202336e5f"],["/清华转学成电，真的牛逼！/index.html","be9f05f2fe51d98aef9a3b80c43d37f8"],["/滴滴程序员被亲戚鄙视：年薪八十万还不如二本教书的/index.html","0031c1ec4120831363ab9585e9c527ac"],["/社群！/index.html","7b5ee5913674b271b5e25b6c6641ff10"],["/科学上网之VPN篇/index.html","dd07d322a7b47f3d363e555203643724"],["/程序员必备的几个技能！看完你也是大神/index.html","87403009b3dfd73fec89692c2bc66e57"],["/程序员绕不去的槛，Linux！！！/index.html","071971269d6f9f5a4b7b8442846c9cbb"],["/蔚来ET5试驾体验/index.html","29c9fcc94f29f1340cc40d0cea09ae70"],["/蔚来，牛逼！/index.html","c6dba420be5cc9939d093a7d080d9650"],["/被录取了/index.html","35e35b77aa2ef907adcf06c2eea9a392"],["/被找事了！/index.html","ca9d6752f5c5979f0fd91e5910edbaed"],["/被拉黑了。。。/index.html","d717b6d853198cbd1ea05fed5eda775c"],["/被车撞了！/index.html","3a735b5e3c9bc0b59dae6bd47d34f19e"],["/该如何选购固态硬盘？/index.html","5e26bc9cc6d66993b387c7ffe2bbc68d"],["/这本书一定要看！/index.html","9ffbef8f03f04fbeccb6cf80e241035d"],["/选Java还是C++？/index.html","868a1ebc1af11f8fd3c57835ae9ecc9e"],["/那些让你起飞的计算机基础知识/index.html","9523203f26c7fb54cfd45c035d969910"],["/靠这几本算法书，成功拿下大厂offer！/index.html","b97f158b9d83a3a6e6d1dd4b29678c68"]];
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
