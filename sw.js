/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/0010-city/index.html","2e3f5f700f67393637076285fe2ff331"],["/10-algorithm-book/index.html","5b7ccc1c541abea4fb84ceafe752979d"],["/10-website/index.html","b4601b1b8bde5f4642cc8d8789012d2a"],["/100万的小目标/index.html","3de869637df4f527f5a3ecec14a0f12c"],["/10w+YYDS！/index.html","57cf30bb94672e6294924e53d99716c0"],["/12-technical-tutorial-sites/index.html","de1fe1e17b81e5fd384d6121dda8cfc8"],["/2 6 岁 了/index.html","22bd2b2c859f24a3a26f19138d512b10"],["/200万，啪，没了。。。。/index.html","9e40953a5bdac8c61545eff8fffb31a7"],["/2018ECCV-Paper-DL/index.html","47eec4553074ca346c26ea698707698d"],["/2021年固态硬盘选购最新攻略（小白避坑指南）/index.html","899a8d0b966de1c80f02e4cb34148225"],["/2021机械键盘推荐/index.html","9a90897128441f17bf4f3dd7275bedd9"],["/2025-07-15/index.html","95c511a26a8b389193baad243e318217"],["/27岁了/index.html","3ccbba4e182865abb1b4515a26e76f5a"],["/3D-Convolutional-Neural-Networks-for-Human-Action-Recognition/index.html","0a93b2cd5b088cfc9f7102eab484547a"],["/3D-Deeply-Supervised-Network-for-Automatic-Liver-Segmentation-from-CT-Volumes/index.html","d7ebc4c01cd887a5fa99e0cefd11feb5"],["/3D-Unet-Experiment-notes/index.html","0f7da9b4180c388871b613005db8a9e2"],["/4-Software/index.html","8d06fd157d2aee97ac83fc106e9a7f12"],["/6-website/index.html","c86aa4e3642002b4398125b10bce7fe2"],["/7-terminal-tools/index.html","6f91fd62c4519c177afbf75016df68ea"],["/AIGC中典型的深度学习网络/index.html","383622ab64ee9ed3c8ce7f5e52569708"],["/Agency-model/index.html","3708ac2dc28d6e241c2b0a2ffc011606"],["/Algorithm-brush-notes/index.html","5a1a22251805a650353d1157961a8086"],["/Ali-recruits/index.html","2d4a098bcca570d0f5df0a17297794bd"],["/Android-VPN/index.html","08453e1e0502a2272b5835e2b8ab365b"],["/Android-open-internet/index.html","ce83f2fbf25d744700907f5d367b6284"],["/Appearance-mode/index.html","b197b1399c84a333296fe0d98fb80642"],["/Backtracking/index.html","8dee78e307e930ee55126b0de20195fb"],["/Baidu-Sao-operation/index.html","19a1c405463d60948d2510ab188973bd"],["/Batch-Normalization/index.html","56b8d8e9cba4c96ff4f117e8f5543d29"],["/Best-AI-tools/index.html","2245ba752b8aa6b3ff0528ffe15e2fb2"],["/Bias-and-Variance/index.html","6232ca9ce909a1514177c32544a462d8"],["/Binary-tree-traversal/index.html","2e4b48162397a3b2dadf1492756d0960"],["/Branch-and-bound/index.html","907ef22dbe35ba5920b32b79b75221d2"],["/Buying-computer-for-the-first-time/index.html","edbb82f2d55d005267c4f98ee3851003"],["/B站向北邮道歉！/index.html","952075f3b6b25f36a0a74cb8242a7ff8"],["/C++-string-function/index.html","06b2e9e370844008a6d0a1fc9f9ef007"],["/C-Java-DevelopTools/index.html","8a7094e98b00ba73add3aa0428bea1e9"],["/CS-Classic-Books/index.html","bcbc263f9151f3991599992704a3bc4a"],["/CS-network/index.html","bc2bcce1b2a22df86836ea26fb597d0e"],["/CSBook001/index.html","fa7450178a55e0ecda55f33d9b3233ab"],["/CSBook002/index.html","f0689b93e519935bd8819755622dad80"],["/CSBook003/index.html","7cd3b9c1835f59543d2b0cd6f86faac1"],["/CSBook004/index.html","387d6917acf00f39f8ce6d30fd2d6bb2"],["/CSBook005/index.html","d74fdae55cf62fb1c24feac739b06d3e"],["/CSBook006/index.html","24d109bf958c0d4cf347b0d506e6b3d8"],["/CSBook007/index.html","a9c8e539de474112e0ff9acc04386e9d"],["/CSBook008/index.html","53aa2d7c786c97538427084393e01ba0"],["/CSBook009/index.html","694e04922992bcd29d53181c17ef3262"],["/CSBook010/index.html","77846f439e01e26a23c831937b045306"],["/CSBook011/index.html","cfb4c3b8869d17e75efe986a4be8c057"],["/CSBook012/index.html","7d60c9ee78b65604aa6a426ba4c15c76"],["/Changsha-really-fragrant/index.html","26037ef8f34679ddb294375726450792"],["/ChatGPT-VPN/index.html","8915340cde87af55a73e78d9933bbb10"],["/ChatGPT/index.html","d99eb25363fc2faba9121d529ccee46c"],["/ChatGPT！王炸级更新！！！/index.html","f4c6fdcdb02a023701249369a66bab09"],["/Chrome-crx/index.html","03739003fb3e88dcef62a32915d69f65"],["/ClashForWindows/index.html","550914798d14a96168330fb5f0bee0ed"],["/Computer-Classic-Books/index.html","5d965a9064dd0bf6fd2a27fe7ab43431"],["/Computer-for-another-major/index.html","6491d90e684a139c6c9ad630b189b0ea"],["/Conditional-confrontation-network/index.html","e14bdea775b7cf9b5359a61934c0799f"],["/DNN/index.html","da25daa11f866c168f949d68c2324667"],["/DSN-segmentation-liver-experiment-summary/index.html","0343dec8cab24b5d263f3c0e95b8c6d9"],["/Data-enhancement-elastic-deformation/index.html","8e9abe4ebd5ab6370e0cc264d36f9327"],["/Decorative-pattern/index.html","e56d9a43be13f8fbb60dc9d15e4a079e"],["/Deep-Learning/index.html","f71d05c11343b501e6b8d53f3140effc"],["/Deep-learning-and-medical-image-analysis/index.html","2dbb53bf01ec96765485af2cf6738c7c"],["/Deeply-Supervised-Nets/index.html","a3e2189d6eb3ef499e637dbae65b7892"],["/Deformation-model-based-sparse-representation/index.html","b579cc92346fd31b6be60cd0cd2243a4"],["/Discriminative-and-Generative-model/index.html","810e35111fafd7709455276da5500d8d"],["/Distributed-transaction/index.html","d4042fcaf9c8a9046f797523e698bd16"],["/Divide-and-conquer-algorithm/index.html","86a8e4c31f811a231ba9becd5d0cfd2b"],["/Dll/index.html","30b732833a1d4766d159914c5002905a"],["/Dynamic-programming-algorithm/index.html","6d122b89b95d2aa806cc12c29b247f7a"],["/E-book-download-commonly-used-by-programmers/index.html","368b0f4f4be1278f671e9e55e2361fb1"],["/EditPlus软件的安装、激活和配置过程分享/index.html","c326ff82285074187fb2aa524df7a51e"],["/Eight-sorting-algorithms/index.html","d388450f66cdbc27ceebbdffb2a6da3b"],["/Encryption-Algorithm/index.html","71d4dd2538cc4755d6eb89f00a603c46"],["/Eolink/index.html","ce3d59ad856ab1911ce8b63b72db7eab"],["/Factory-and-strategy-mode/index.html","29582a3859dcf3cf749e6b21a710c31a"],["/Foreign-technology-blog-community/index.html","c2435d206de5ffcbfd420be7817527a9"],["/Functional-model/index.html","baba76188055da7f4118b5204d95c46e"],["/Fund-type/index.html","0d2fd13951a4b2879e4363b1cb2b3f1c"],["/GPT-4o/index.html","cc87695979ce2db601adc1fee8fc0a6d"],["/GPU-medical-image-processing/index.html","4f6dc38a36f9e61d1d8e8474f60ca4bb"],["/Gemini/index.html","34ded0f58a3d283ec4b149850e416353"],["/Generative-Model-of-Unsupervised-Learning/index.html","c65ab43f2df6153e28d22918dfe280af"],["/Git-Learning/index.html","c58076d6f62de0e0cdaba4d539ba1719"],["/GitHub-2FA/index.html","e9da322e0a915c496cb5e1b7f44651ca"],["/GitHub万赞，程序员必看操作系统总结！/index.html","7296cb598ca3b126ac16af32beefde00"],["/Golang-book-recommend/index.html","6b9ad374cddf45c79c250ba0665749f6"],["/Golang-learning/index.html","9dd49228e103aa314713e4067f177ffe"],["/Gradient-descent-optimization/index.html","fcade05cd7dc34f3053cd018fbf5015d"],["/Greedy-Algorithm/index.html","a408b1e1a8b23712ab4998250cc7549d"],["/HK-bank/index.html","0b182a248af58169e5c08ed822209d14"],["/Head-to-head/index.html","88ad676f1bcfabb726da81a2161cca65"],["/HexoPage/index.html","fb2237bd75cda2eddfcf19c8e6acc271"],["/HistCite-Pro/index.html","7db4261827c3d1d4a98ba0fec31110ed"],["/How-does-the-program-run/index.html","0650bcdac3b0e85c30810002bf21a075"],["/How-to-judge-whether-technologyisreliable/index.html","abab63a9873a6a0e937b528413bc3dd6"],["/How-to-learn-design-patterns/index.html","7faefba5e787e2618d33cd4bed9c5f04"],["/How-to-learn-design-patterns？/index.html","9357bd83cf5f3267435311be6edeceaf"],["/How-to-teach-yourself-programming/index.html","c08778dedc49defe0eebf83eaaedf2f2"],["/How2learn-Python？/index.html","1bb704ae1b86ccb90153eb4666927c5f"],["/IDEA-shortcut-key/index.html","eacd822b49bc67922c59fe019d6c19a7"],["/IT-interview-basic/index.html","80a7ae99297dd768b68e75b10b661490"],["/ITK-VS-install/index.html","009d34af9340b711dbe9c6311430e610"],["/ITK-VTK-ItkVtkGlue/index.html","7ae589b3b172c3c7db2a7ce7ffee863d"],["/Image-processing-plus-noise/index.html","07ceb267ac55173cbbcfccd75646ef61"],["/Inception-Going-Deeper-with-Convolution/index.html","7b2c1a62be6ef2f431555b34a73d06a5"],["/Java-GC/index.html","1946e0b97cfdf882181f98c5bcb15684"],["/Java-Servlet/index.html","51e5a2997d524f05ffcdec1509d1be32"],["/Java-array-and-collection-sorting/index.html","bd45e06102c0053aa421ebb820d0a6be"],["/Java-development-tools/index.html","320958c01b5bb1efb49ac0100e1fe146"],["/Java-eight-data-types/index.html","5d927154cea27453ceb8da5b5617687b"],["/Java-interview01/index.html","b1c0251b27554ba77ef324ab14638059"],["/Java-interview02/index.html","5a4ff4d242c93d70be3c733df870ddf3"],["/Java-interview03/index.html","dde5f2590632fc0c7acb720adb543547"],["/Java-learing-map/index.html","6cecd7625e1ff0ea4dc00db0d717f166"],["/Java-learning-route-map/index.html","639e3cf584db400a9b69e0ba48556911"],["/Java-memory-area/index.html","a364de495acaa88072aeaffe66939039"],["/Java-memory-model/index.html","90830221ead6b7e58319ab49216be69b"],["/Java-multithreaded-learning/index.html","7ae352a013f31cc76580b759a27ac24d"],["/Java-project/index.html","8bfc2aae9d197ceae844c717b5f7ca24"],["/JavaWeb-Chinese-Garbled/index.html","2791c53a8b6c6a6e4a5e99c16e7af5fe"],["/Java还是C++？/index.html","5481df09ffbe4b8fac634a7a132502ad"],["/Kaggle5-step-guide/index.html","4d149c6de63778342570bac032989386"],["/Knowledge-points-of-Java-garbage-collection/index.html","10c11993ee1a1b7b10dcf0729dee1b4c"],["/Layoffs-and-Hiring/index.html","c00b47d22c2c57e25e776dfd4ef0bbb5"],["/Linear-regression-of-machine-learning/index.html","9c0fee9ddeda68e2a63ec99a5135e10c"],["/Linux-Compile-C/index.html","664b29c2a560274cc11a693af650df1a"],["/Linux-ITK/index.html","2e1c2e4e3248cda6317338b4c53260cf"],["/Liver-segmentation-of-sparse-components/index.html","be270ba287fb8c9916cfbdff3ae8d4f2"],["/ML-EBook-paper/index.html","d8aa5d542c480cee9f6e278250cb5c71"],["/Map-uses-multiple-maps/index.html","2cfea36afa8aaac0bd3787bcf89e3eb5"],["/Marching-Cubes/index.html","d72010f291db79a6ae9d08bac3c47fa9"],["/Matlab-Graph-cut/index.html","39860605db8987a5fcbf221ee1b7028b"],["/Maximum-Likelihood-to-EM-algorithm/index.html","d998eecd5b33b991b0332e7a3fe0f546"],["/Mean filter and median filter denoising/index.html","218a4ecba59b90c5d46be882d435c957"],["/Medical-Data-for-Machine-Learning/index.html","1d624d4b02102fac96c579d0074381bc"],["/Medical-image-analysis-deep-learning/index.html","9cad893fbc5fad207ff3d574fe746928"],["/Medical-scan-image-processing/index.html","b0e84bc3fff16a47a26bfb4193a01a0a"],["/Merge-sort-algorithm/index.html","2673c2fc014f651585f7199ef44c12e7"],["/Monthly-income-2W/index.html","09b91afe04a844723729f913a7363f46"],["/Mysql-database/index.html","d16ca3cb3e2cbc7f7fbb5be76fd0c837"],["/Neighbor-Embedding/index.html","9c966b72b0cf53552c09cea62be6b4c6"],["/Neighborhood-approximate-random-forest/index.html","525dbd1374d6da97d1a47ac4c0354e26"],["/Net-and-official-documents/index.html","0efbca4a495d7904f17b94c41872bdb5"],["/Netflix-VPN/index.html","fd05a6c96a61ae90223e46ba42f19cc5"],["/Network-principle/index.html","7e455bfc115707f8895845ff1deb12c9"],["/New-Hong-Kong-stocks/index.html","e5570ea7708ed1c92430cfa7174d4e39"],["/Nice-to-meet-you/index.html","1327d08fea90babd7332256bb1e74709"],["/OS-processes-threads/index.html","7987242d9350a8eb0a53b36da1f8e43e"],["/OS-run-environment/index.html","412f5ea508986edd18f48b388b843653"],["/Open-Internet/index.html","2368970bab2ba5d43045ff0e369b59a7"],["/Open-Internet2/index.html","6644accfdb0c37aaa43112cbefb0f572"],["/Open-source-community-and-rewriting-website/index.html","face7b693c734393252d771957ed7b2b"],["/Panoramic-image-stitching-based-on-SIFT-features/index.html","c115fbfac447d45bf87c78fbf011a09a"],["/Parzen-and-KNE/index.html","38a965943a4c0ae10d1a8c5d36d21509"],["/Personal-technology-blog-site/index.html","00100f3574138115459e67ee020e012e"],["/PicGo-Gitee/index.html","414b1e225b95deae80c86aa286ced5d0"],["/Programmer-treasure-chest/index.html","b43a74ff3d61857d90eea6077248e022"],["/Prototype-mode/index.html","af33869565d7d75bce9e054eb532c12f"],["/Python-base/index.html","b07f12fdc38b053b20576dd2605e69c0"],["/Python-crawler/index.html","128fe6b9825e33b43993a07713fd3135"],["/Resume-revision-suggestions/index.html","54de9e0b08d73e1883e85026210e6701"],["/SEO01/index.html","1db3dbb1c12ef5f23c5d55246a4ba594"],["/SEO02/index.html","107e7c96e4049bb99dbcdaa26873fa22"],["/SPHARMPDM-MEPP/index.html","7cce19b8902a81e9d3c889a8633ef8a3"],["/SVM/index.html","c0eaeb4f2418f96e11584b7cfca9594a"],["/Seata/index.html","2835675dac4eb5741378bfad902100b3"],["/Semi-supervised-learning/index.html","2ef46bc12f6599b8966d8601344e7d63"],["/Sequential-model/index.html","fef42fb2817d0eac56a0c9d68958f701"],["/Shape-Based-Human-Detection-and-Segmentation-via-Hierarchical-Part-TemplateMatching/index.html","5f088213aff8fea8b2465d361c082850"],["/Spring-basics/index.html","c981d8df1c8769b8123a0b603be07041"],["/Spring-integrates-hibernate-Struts/index.html","34cbeccd9ce7122544f6405f850de742"],["/Structure-learning/index.html","9d0c1a2ab6eb7bdff04614ccee99baa6"],["/Suggestions-for-self-study-of-computers/index.html","8e0ad8063ede99c548e79ba5fb3964cd"],["/Summaryof-HongKongStock-Account-Opening-Links/index.html","681d98049ae73df1936e2e1f738f9940"],["/TCPIP-detailed/index.html","7f4226fe957ab4c821e08be11c3f7385"],["/Telegram-VPN/index.html","4fb9795f8ffa2fe5fcea3f60a4219ef6"],["/The-essence-of-shopping-festival/index.html","5a1108eec934fd0f290d9bce099e0ca9"],["/The-most-important-investment-in-life/index.html","6bb08981978721d3b764f41082c90260"],["/The-most-successful-nvestment/index.html","b4401daf96d0b7f4bc55ca1abb398732"],["/Transfer-Learning/index.html","fd399addadba6660fa83c0ffaeab2932"],["/Transfer-to-computer-major/index.html","3b28b94bf74599a18ac58989f53d2955"],["/UNet-Convolutional-Networks-for-Biomedical-Image-Segmentation/index.html","a7fed19e90442c9c6e4eba705a3b7062"],["/Ubuntu-install-sougou/index.html","a96dab1a546aa1690c2866f3595dbedf"],["/Understanding-of-paying-for-knowledge/index.html","9c4bb7ebbe1d96f6cfee6a8e2f4af1d9"],["/Unsupervised-Learning-Linear-Dimension-Reduction/index.html","1a9094b3414e4df583d4a237d8aebb5e"],["/VPN-HELP/index.html","a3186198975c066c739eccc5870e3a47"],["/VPN2025/index.html","31440da1e7c9d296b6d5573d0182d457"],["/VPN2026/index.html","863d5575dcbdfb4083fbf9cfc38c6375"],["/VTK01/index.html","00ca6cf832a2337b4f100281801699c2"],["/VTK02/index.html","bf38709104bca1b4b60db14876d9e146"],["/VTK03/index.html","4ce45bd11fbba73fe0c32c61a51144da"],["/VTKRead-write/index.html","d8128fe0a283559db1c62d66ce117301"],["/We-are-all-good-kids/index.html","38498af68f4547836f8356557985a8cb"],["/WeChat-80/index.html","92e6fc2e4a3fda757b9e1ca637ec938c"],["/WeChat-red-envelope-cover/index.html","862a8d050589929c9fd6be8d1166ed33"],["/What-is-crawler/index.html","bbee652a3aa1c321c780ae550bb326bf"],["/Win-OpenInternet/index.html","112565a61ae46e96a52d92e2deaf34b9"],["/Windows11-2kfans/index.html","3cc5f9ac4eed990f5b401d38ebd0ac94"],["/Word-Embedding/index.html","2bbf7e3b7541b794f4f87b1678cafeba"],["/YuanShikai-and-his-Beiyang/index.html","f09ca6259c1e3f3960032805a19c30a0"],["/Zero-copy/index.html","859b5e2d84aa4fb07b062d3574645daf"],["/about-keras-model/index.html","720bf2f83275b60317f38f9d2b9da3de"],["/about/index.html","3cd990fe476c0a1f00d43889b2c5f5a8"],["/algorithm/index.html","cc5824b5ac09c00d3d45538e1a3d3e0c"],["/alibaba-Java/index.html","cc3025b3104d2c81e2aaba1a25240513"],["/archives/2020/01/index.html","4c3e835806c7ba5e4215bea4a4aa2e4d"],["/archives/2020/09/index.html","1535f89d4001191b2d6cd6e86a8e306b"],["/archives/2020/10/index.html","78730d3de1c0491c525c4e07ad3c6cb5"],["/archives/2020/11/index.html","ea8b577b5455b7624ba4808ecafb96c3"],["/archives/2020/11/page/2/index.html","97197d390056b91956ec664554f43707"],["/archives/2020/11/page/3/index.html","f8f2cd2c5d6b455b0b5d79f68e532401"],["/archives/2020/11/page/4/index.html","3abe1cdf83a96cb3ef5c8fab355af681"],["/archives/2020/11/page/5/index.html","7573e31b8cafb06238152296e2b6c3f2"],["/archives/2020/11/page/6/index.html","15b2b014fb57dcb0890f4fb9575239ea"],["/archives/2020/12/index.html","916499d06b7ec5ae6047cfca189e40a5"],["/archives/2020/12/page/2/index.html","1fda0ebf1473f2c0a81203b13bcbe871"],["/archives/2020/12/page/3/index.html","85fba7b7b2cb4209f3158339332a7ec7"],["/archives/2020/12/page/4/index.html","84616d4f45ac4cde165a215cd4c7064f"],["/archives/2020/12/page/5/index.html","8058f3db4b2234e1958828420de1dbf2"],["/archives/2020/12/page/6/index.html","d65312ac2ee30734b5f3c423e3a847cd"],["/archives/2020/12/page/7/index.html","5211038289078f9a103f359443732e86"],["/archives/2020/12/page/8/index.html","0529bce715730a522878bd3321be85f5"],["/archives/2020/index.html","82b5f87c78069f075e86cd25047d2cbd"],["/archives/2020/page/10/index.html","d82b412e871fff09139125a80d7afa49"],["/archives/2020/page/11/index.html","0d999f89f732247f2deca2f14cfd70e8"],["/archives/2020/page/12/index.html","71e10561036ed796642c5d5dc64cb4dc"],["/archives/2020/page/13/index.html","21e42168260f66841dbe409b960c60c5"],["/archives/2020/page/14/index.html","ee5dba4b1e6fa4dee3bc4d0b944d6e4e"],["/archives/2020/page/2/index.html","8f4fadee746668c69d28a5914df532ca"],["/archives/2020/page/3/index.html","eba15b0fcf345e5e2f8b09f4e827bec7"],["/archives/2020/page/4/index.html","4e205d070b9dbc23e28b98b0d234e745"],["/archives/2020/page/5/index.html","ee7883dbe7035d33699a1020ce5f5847"],["/archives/2020/page/6/index.html","4dda5d9666ade39b52139bace4d653df"],["/archives/2020/page/7/index.html","95dd754bb451cc253a5fbdcb765ad646"],["/archives/2020/page/8/index.html","6e992bf770f4f93d467323da1c532532"],["/archives/2020/page/9/index.html","ba21955ab35667e860dc5b0e8ae6cce3"],["/archives/2021/01/index.html","1747ec33fac560117cd8f9a30d79fe2c"],["/archives/2021/01/page/2/index.html","d89151cfa569224fd7b9b4179638eb08"],["/archives/2021/01/page/3/index.html","20c5a1913a339f25042eb58e2770e9a3"],["/archives/2021/02/index.html","b4b0f1df5e635dbf1defca2f10b08d8e"],["/archives/2021/03/index.html","62141b94c2bfff918ec4dbb508df73fa"],["/archives/2021/03/page/2/index.html","0a65859f46e0d55a859b7fd6173e8094"],["/archives/2021/04/index.html","f9d46fdf253274c6f489274e756b0973"],["/archives/2021/05/index.html","0c35bc40b5c09f29f3359a1b023d74c5"],["/archives/2021/06/index.html","3380067bb59b84d01c44d45bed6eace3"],["/archives/2021/07/index.html","ff27039b1dd87aaadae1f8bfb926b459"],["/archives/2021/08/index.html","36b7e268982ba01ce8dc19b4f833fae0"],["/archives/2021/09/index.html","f30c88b0784a28f3bb541e5bfa02335d"],["/archives/2021/10/index.html","6a29f8c3e5270b9202d894b9b0e7d277"],["/archives/2021/11/index.html","012621ae085269f076bb343b01dc36c0"],["/archives/2021/12/index.html","39ed73a13139340247a0e8c4cb967245"],["/archives/2021/index.html","15263e05c3f8c8e6e07a2fea40f6fb1b"],["/archives/2021/page/10/index.html","fa0bc380b3c2bba8233c407ed765cc5b"],["/archives/2021/page/11/index.html","dd1f40e04226f6200532535e78c4f6ee"],["/archives/2021/page/2/index.html","661b72b292ba37c53f727d17d5512f02"],["/archives/2021/page/3/index.html","2a98c11519d4673f5f4b961d0e05ede9"],["/archives/2021/page/4/index.html","06a245dae5eb066aa676850d4cabd2bf"],["/archives/2021/page/5/index.html","fbcc9871f021edbf45ff0211e37115d7"],["/archives/2021/page/6/index.html","23b19e617bb5b94e01fabe30a51bb65c"],["/archives/2021/page/7/index.html","0096d8b4f3a96a95b44a11ceba9ffb8b"],["/archives/2021/page/8/index.html","612bc59c63eee4e54d8beee6a0cb7f3e"],["/archives/2021/page/9/index.html","34e08394f8c3bc5264b078d8ffd3ba57"],["/archives/2022/01/index.html","b7dfb293cb323b19fe0038a1a32941e9"],["/archives/2022/02/index.html","8ca81aa450028c68250f6bb72d66db4c"],["/archives/2022/04/index.html","5b4de07521fbf4797b6cb48f39ef0acb"],["/archives/2022/05/index.html","a4203d3cec38ca254ead708676a7decb"],["/archives/2022/12/index.html","5d0ac60129bdb49b4ad445e2635e6140"],["/archives/2022/index.html","1b8d50e54f2ca6ea2461a15db6f2bea6"],["/archives/2023/01/index.html","c42da43b2ba14e8f132c84995ff518ea"],["/archives/2023/02/index.html","7a65b7e0625c12caf9111561b8b8f904"],["/archives/2023/03/index.html","2628df11602fbb66529a244d3a9665bf"],["/archives/2023/04/index.html","3d09761ad1848fcbf2f30c8e70291cc4"],["/archives/2023/06/index.html","bf2be791311e1c67496716db41478ee8"],["/archives/2023/08/index.html","2ec7161b14cec4c6343087c4dc334c21"],["/archives/2023/10/index.html","1762435fc4756c2dd2bacc8c691bc6f9"],["/archives/2023/index.html","5391b39b10ba55777cbd16f21d9024cb"],["/archives/2023/page/2/index.html","9b1a6d850ea85763469b199036a3dad7"],["/archives/2023/page/3/index.html","ca9770436a6fe49da532ffe659620bb3"],["/archives/2024/01/index.html","a31074e06521ffa81b279f1cc6e1095a"],["/archives/2024/02/index.html","803996beda32c6d520c9c2d38e62d782"],["/archives/2024/index.html","126b09f29bfcca7e5a970a920106568a"],["/archives/2025/06/index.html","6d9e27900bbe227de1558f5ec2b1ae8b"],["/archives/2025/07/index.html","48254c23f5f65946762130d7e8451b1e"],["/archives/2025/08/index.html","c765d26b885b4c7aa2027b60061ed631"],["/archives/2025/09/index.html","c9d07ff9b0b431ec84d67991eccf043d"],["/archives/2025/10/index.html","64836bd1582063b9809b8b2cae9eb803"],["/archives/2025/11/index.html","6e4fb769b94cd45b1c6ec9f1e04a63f0"],["/archives/2025/11/page/2/index.html","95b880b877ddb69e86e2072eb30ef5f3"],["/archives/2025/12/index.html","9ba3feb15e3ad84e3240c86c6cd7f56e"],["/archives/2025/index.html","3393fd6e5fe31631017c02be629a52db"],["/archives/2025/page/2/index.html","6fd86d34d646308d390ea82e00991e73"],["/archives/2025/page/3/index.html","2a1c789a4bf748e301261c44b0b36ee3"],["/archives/2025/page/4/index.html","f1788f854c8628090519d08b9a09bdfe"],["/archives/2025/page/5/index.html","9794ea94661a6ee98d13159ca391ca7d"],["/archives/2028/02/index.html","06820e07bc12bb338659670631b7c6b1"],["/archives/2028/index.html","b48cbf7aa0c8b1e2fb14f655510ddb6a"],["/archives/index.html","d0949944d12767167c124079271e0542"],["/archives/page/10/index.html","460352cd130ffec8f8e700226793b7a7"],["/archives/page/11/index.html","dddea7e952736497b796f4a0a2dbb263"],["/archives/page/12/index.html","3629536c85541c65d6a3be00e489d235"],["/archives/page/13/index.html","c958021a3ea6bca653bc2b28d4275b90"],["/archives/page/14/index.html","34eb533e4155c85ab666def843c623bb"],["/archives/page/15/index.html","63d350934bc35519e191a81addee217a"],["/archives/page/16/index.html","804a19059f28023e96a1ebe4fb27f828"],["/archives/page/17/index.html","4bbc4dfcf36f054adc9f752394d1609d"],["/archives/page/18/index.html","c3b297905c92084a2b7d1d9f602ee6cc"],["/archives/page/19/index.html","fe4dd45d848f93c3931f4093f9568f21"],["/archives/page/2/index.html","caeb9f103f419de7eb4478fddb17d4fb"],["/archives/page/20/index.html","88a7e76ebbd000e1a671d71fb8f862ad"],["/archives/page/21/index.html","abaf67d312ca86687d125a7ed11fef4c"],["/archives/page/22/index.html","bb251295af9d827d8da4d4a578b87b16"],["/archives/page/23/index.html","1e9658ff939bf44c75501ac60d5f7a17"],["/archives/page/24/index.html","8a84a9533e5138a84b1b3f07289bc2d5"],["/archives/page/25/index.html","e99ceac0318abf6e47353ba0af94ad7d"],["/archives/page/26/index.html","647e77a3f445d75f728c8e7acfc21b41"],["/archives/page/27/index.html","8b6daee35e44d6acac9f3514ce624c5f"],["/archives/page/28/index.html","448ac6da6bd2eea1c37228f7ffdda1e1"],["/archives/page/29/index.html","f9cc01ed76549258b552a9316e81a5c4"],["/archives/page/3/index.html","349603abd4473820a1624bfacb06b72f"],["/archives/page/30/index.html","e53c19b7e2388a3092f3502ef6172237"],["/archives/page/31/index.html","b46ab9122539c096bbd8ff948a25bb6b"],["/archives/page/32/index.html","8775a5d248ec684903e06f3158826c4a"],["/archives/page/33/index.html","3777b0cd30ae75fa75fbbd77efc5994b"],["/archives/page/4/index.html","063f0dc94fbcd090756733d271fd6cc8"],["/archives/page/5/index.html","79eafb377f5469dccaa009465824edf9"],["/archives/page/6/index.html","d0c63744c8531f491adc5931642d3f71"],["/archives/page/7/index.html","0b24dc4164c36cdb1e5ba512f18468a7"],["/archives/page/8/index.html","5184c7c7b4be4e682e75d0b4a733ffeb"],["/archives/page/9/index.html","6db2f297bb78c8ac8cc863c2ac97345c"],["/baidu-search/index.html","8ce0f0684a63619963228a55ae4b648b"],["/baidu_verify_code-Hh2fKNlEB1.html","05f846ccd9501f22b86dc67f5aa4b2a2"],["/be-a-programmer-instead-of-a-code-farmer/index.html","a9f4955e0e20c922edfc11ad25ca0eef"],["/bought-a-house/index.html","ed78341fe4626dedd2f4d8ebb463ce8a"],["/categories/C与C✙✙/index.html","fb4a2d32c6bcdbbe498bcbe28296cfcb"],["/categories/Go语言/index.html","c8993da8df405e1ae0c47239883768f5"],["/categories/ITK与VTK/index.html","f81207b4631a67a9789d0ea8755d1031"],["/categories/Java/index.html","59b629ebe07a7ecc42f47edb30711aeb"],["/categories/Java/page/2/index.html","b13239210242d1cca5b9c1faf0028bf0"],["/categories/Java/page/3/index.html","ad47dbe4e2a87b1ac8f53075dda932c1"],["/categories/Linux/index.html","ee6c1a7a98b339de81f731bea9a3ba50"],["/categories/PLC/index.html","e67f7a96383e2e313774b3b7080004bc"],["/categories/Python/index.html","7568463ba5913fe17285a4bfb64c1d30"],["/categories/SEO教程/index.html","4a784fc73da0b4b5a9d21af27705b8af"],["/categories/index.html","1cf87df78bee7b01c240195cc2cf428c"],["/categories/图像处理与机器学习/index.html","d1cc394f0e364fc2ea20024f82349752"],["/categories/图像处理与机器学习/page/2/index.html","8028df8b1d55adeda698bc785b07e6b8"],["/categories/图像处理与机器学习/page/3/index.html","e3bc7f100f9c90e612e7a66add7e5e14"],["/categories/图像处理与机器学习/page/4/index.html","7db0876f617e2ff8682467ddc2e830b4"],["/categories/图像处理与机器学习/page/5/index.html","09cf46103606967510c64e14406ad2c1"],["/categories/图像处理与机器学习/page/6/index.html","16f964889296d41d24d165d6d9e02483"],["/categories/工具/index.html","6d5da73fb011966023c13fbb1364f2b7"],["/categories/工具/page/2/index.html","858a933d3dc30ec115cfabdaa24454f3"],["/categories/技术以外/index.html","0d399d9d586ddc1471e06f2f75a56d8b"],["/categories/技术以外/page/2/index.html","16cc75e6a963640074db38cef1eedd33"],["/categories/技术以外/page/3/index.html","faf66fb0889b7e48c7d6a311ad95c690"],["/categories/技术以外/page/4/index.html","f5e986f688ec6e07da75a1a4c287c8d5"],["/categories/技术以外/page/5/index.html","b33db2c06fd50b4701bad5381749faa8"],["/categories/技术以外/page/6/index.html","0534188f626c5ef8b6defe093af5190b"],["/categories/技术以外/page/7/index.html","97978abe53fe5dc72843cf281276e32d"],["/categories/技术以外/page/8/index.html","200056f0dcd902a9db5181505c138ec7"],["/categories/技术以外/page/9/index.html","01960de21324b92ebfff51bdccbe9c9e"],["/categories/数据结构与算法/index.html","a08d4ee0d22ee87c8db571e0db5aea5a"],["/categories/数据结构与算法/page/2/index.html","1681ac1a1c443389f0c751657aa76ad4"],["/categories/科学上网/index.html","f5d5bf4444625549c60a15a97f7cf27e"],["/categories/科学上网/page/2/index.html","f0f4013a04c43b7605a048640113ceae"],["/categories/科学上网/page/3/index.html","cdd2a6df8434bb61f8557d5a8ff69ef3"],["/categories/科学上网/page/4/index.html","a270baf0995438ed2fb98d9e3a5514dc"],["/categories/编程经验/index.html","d981e99d7c39fe096aedb1c9ab60c765"],["/categories/编程资料/index.html","3f4f9fff5e6abff3f0430cf37f8006dc"],["/categories/编程资料/page/2/index.html","96f8e2a88569be270294dd921f9ea3bb"],["/categories/编程资料/page/3/index.html","f9ba9c0d1e0fefa70a2e0dc7be941f6f"],["/categories/编程资料/page/4/index.html","8e45eb319aae7ee8de34c6f33eba0314"],["/categories/计算机基础知识/index.html","19597b26fa66e428a2b1378ae80c0317"],["/categories/计算机基础知识/page/2/index.html","e23ccd2db7f11a7d8f07e15e3f98a4a9"],["/categories/设计模式/index.html","8665628c1cd0714bbce47d8b078d6355"],["/choose/index.html","003c6266927e57aa05b4f9dbd4f150d0"],["/choose2/index.html","9d8c4bce69d9f5d0fa80473a581195e1"],["/chrome-crx-intruduce/index.html","9911dcab31ba97a390cdc1c22f8d0fce"],["/clashvpn/index.html","ae4d5d8311561bcc2ada2a3383ea72f6"],["/coder-blog-website/index.html","7351cebeb6eea784ac14e565e0d61b33"],["/coder-source/index.html","76dda6bfc2ce9344d8094b195f5c4eea"],["/coder-videos-website/index.html","d7e0e83a3e6190220bcf4d328e9fd0a5"],["/computer-book/index.html","ca0d6cf1356b9476e3860aac906e9eec"],["/computer-censorship/index.html","b7c354dfee6eced8fe82b2f837392502"],["/computer-network01/index.html","f206e37374407fb41505071a88923701"],["/computer-network02/index.html","b2c533411d3f8efe4ed2051dc84ade68"],["/css/main.css","bc32ad34ec4990d934c3c647bdb62f79"],["/database-Mysql/index.html","e335acc9775ad4c2c737925ebe1430f2"],["/eclipse-lombok/index.html","d061cc5c71a844b1d1334ba2c9088226"],["/fully-convolutional-networks-for-semantic-segmentation/index.html","29cadf2ec8f5064d73f1b78f70fb6dfa"],["/great-firewall/index.html","55c1f977edce7332f35a47dab921bca0"],["/halfrost/index.html","9bad26fba21bfe7a5a5705eb4912d743"],["/how-to-signup-chatgpt/index.html","fc44171fa6e76265023ff54e0fe02616"],["/how-to-use-Gemini/index.html","83008da222f8da5b457aa44fef1cf71a"],["/index.html","edc23cbedd921641bca30ced44f52b2a"],["/ios-open-internet/index.html","8d7a8cb9cd7e9c5b5925fd45909732b9"],["/iphone-open-internet/index.html","367467c6b427ee66769f56defe006ea5"],["/itext-makes-pdf-form/index.html","e15017c095c611162eb5245e616c670b"],["/java-Set-Map/index.html","4278abdd8bad325eb491e4cf72c1905f"],["/javaweb-server-error-codes/index.html","9ab8be2753d8f10cfa7df9151c680ba8"],["/javaweb-source-code/index.html","22dea2aef7048533793fecbd45a6cc25"],["/js/lib/busuanzi.min.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/js/lib/lozad.min.js","47904d34a224931dd1b615c59a3dbe3b"],["/js/lib/prism/prism-coy.min.css","0ccad54d95845901ead59bfd3ecceb14"],["/js/lib/prism/prism-dark.min.css","a4711d2957d6605eb5682bdd228cf123"],["/js/lib/prism/prism-funky.min.css","efedcdccd7a9ab342d2d9cacd24920af"],["/js/lib/prism/prism-line-numbers.min.css","38e22e790c279bb56f9ec4b90a2a2d58"],["/js/lib/prism/prism-okaidia.min.css","5ac6f9de996fbec68aaa106dfb16e061"],["/js/lib/prism/prism-solarizedlight.min.css","ecc7e64d039873ffcf7fb27babdaeb5a"],["/js/lib/prism/prism-tomorrow.min.css","456af2a14ae4f5089939d5904ac40fe8"],["/js/lib/prism/prism-twilight.min.css","ebb5c355332a8cf9a1ce37a2a69d678f"],["/js/lib/prism/prism.min.css","a5234d614834658887cec6a9515890f8"],["/js/main.js","052d2b299d9c750afea8df0b802ab7c1"],["/keras+TensorBoard/index.html","a23035c20be975608fd76d5e0922567d"],["/keras-beginner-guide/index.html","de9cae525bc3eeaad308b72e85af34fe"],["/kmp-algorithms/index.html","45fb09d34034a3c41b7760f293d23576"],["/leetcode-Java/index.html","ca112d343bebb7da780751cf95c913c7"],["/links/index.html","e93fd2470d4ecdfea39a4edb2d2c03fe"],["/linux-java-opencv/index.html","fc008d520d7ae63d086b7e114a76e610"],["/msb-source/index.html","3fca6f1a2d9ba775652c7fefd1abb716"],["/online-BUG！/index.html","04c01dfa710ebc8a617c65b2999b88e9"],["/open-app/index.html","beae5ba330070e41b39d86924808dad2"],["/page/10/index.html","435c191ea0f99b4e677926004c7e5a07"],["/page/11/index.html","37fb7a33496a9ae7bc3cb522f9f33e24"],["/page/12/index.html","3f22f17b81fd9d717c1701086895cef5"],["/page/13/index.html","a5b2b6b1d26db3ef38f66b0601e323da"],["/page/14/index.html","f8f516da9050470e138253931f109364"],["/page/15/index.html","14a8557ed806ed27bf193fed64887182"],["/page/16/index.html","56bfa930b36a7fa07f47c42927645cd0"],["/page/17/index.html","89771a201ec711839591636d2a446acf"],["/page/18/index.html","760bc4323f62c36c48d07121d8dec05d"],["/page/19/index.html","d8e8d9870d219e230b08015412fac44d"],["/page/2/index.html","ca19c0c4f2f749600d9ba70786850ce4"],["/page/20/index.html","6adbc4ae6bf343f7f1f6bb89efb25021"],["/page/21/index.html","cc471ceee4334a1e7dd28e64b877d531"],["/page/22/index.html","4e358d634215f212248e09f191800b06"],["/page/23/index.html","83cb1f33a3c3d93d80df2507dff38b4f"],["/page/24/index.html","5ec60d5ad2521d46d3d43c02ac011e5e"],["/page/25/index.html","569850efc4b2ba43be5819d5ed8aa189"],["/page/26/index.html","9ba6ee5882f8822bc8165e7d1c58acce"],["/page/27/index.html","c1fd8e1148707c9bbd68d2f33c01c025"],["/page/28/index.html","e8280d13c2060f321779f0ec0206dcf1"],["/page/29/index.html","3acba07bc79ab94ecda53601048ad17f"],["/page/3/index.html","d3caae3f5800cc8821f54f2994cf8f3e"],["/page/30/index.html","ea9cde8504d40d35e73eaa5d89a49d4a"],["/page/31/index.html","a841d31c278078029380e54d05f60d57"],["/page/32/index.html","b5d2ea12de2bfd5def151777fe9f289a"],["/page/33/index.html","2da831fd5759090abe0ca6d08a7a8f6f"],["/page/4/index.html","edeacb76619f8d5930b92914064fa91d"],["/page/5/index.html","8e598d1dfc9741b083da22a87cd83578"],["/page/6/index.html","534946bca0896c85127eaab9550842fe"],["/page/7/index.html","333b38863a7b10c7d4afc4ceba6747db"],["/page/8/index.html","fa00d69f77c48e79b6ae6fb2f71f9f53"],["/page/9/index.html","d82de01e8ecb61fff296d1533cd8f98a"],["/pandas-data-preprocessing/index.html","51f339d303fef1ad447a05d3d263a67a"],["/phone-win-open-Internet/index.html","524d534b6d4f4be9f47044b15e3952b8"],["/popcorn/index.html","0b68d2fe928bb6468739aebfdd10b622"],["/python-Blog/index.html","50803820d81dc5b572bb2b2ea4aac083"],["/python-yeild/index.html","1a22e334292ee8673c629b951abd5e0c"],["/python爬虫教程/index.html","f1d8449ca411fc3da05e580afb4e72ff"],["/software-copyright/index.html","a0e0600ea8643a96afcb3ba42736d1e3"],["/sw-register.js","56a59a740fe603a0cadad909d1c691ef"],["/tags/AI/index.html","0ed643ec8476881089e52e504e495737"],["/tags/API/index.html","ce7863e5c7db0e8b89daba4c66edf86f"],["/tags/C-图书/index.html","3bcc8a11862a012cafcdbd53f30cffa7"],["/tags/C/index.html","85e9fdb3dbb8c991b6330f6d69f511a2"],["/tags/CNN/index.html","d271a3ae21d58528b3d1a82c86813653"],["/tags/Chrome/index.html","43d20420793b2d7c81223d07aa4ace7b"],["/tags/C✙✙/index.html","491d561fff755ffeebdc589f46ec6d9e"],["/tags/C语言/index.html","15f8c079681ed813c279f504462fec19"],["/tags/C语言图书/index.html","eae5a4e4036509a36d930462f7191d76"],["/tags/DSN/index.html","40d464a2cadcc6b67104d1ab02a21527"],["/tags/Dll/index.html","b0ac6807d5510e907da14bb397cdfe96"],["/tags/ECCV/index.html","e8ee66c9906303cee2c8822c40f1e1ba"],["/tags/EM算法/index.html","fbed75ba08abd210cfe8cfa66ed699b9"],["/tags/Eolink/index.html","377ed65c0b67ff2b0b2b7a4869f81d0e"],["/tags/Gitee/index.html","2960daf71718c932effcec47657099bf"],["/tags/Go语言/index.html","fad4867cfdb658341d0be0ea76796d51"],["/tags/Graph/index.html","3d085cb676afe8953c63cd4a8de75a5c"],["/tags/HTTPS/index.html","726168cc86248e5b40eac27adc998046"],["/tags/ITK/index.html","279a7ec1df3584df0c56324348efdf20"],["/tags/ItkVtkGlue/index.html","1338bd7c7091bddd9b40aadc549c5b73"],["/tags/JMM/index.html","b6aa174b47b64257ae1eaff67e903ae0"],["/tags/JVM/index.html","637225f52588475ebeffac007f81b089"],["/tags/Java/index.html","2662904f83819b5bf6cb70e1db83c45a"],["/tags/Java/page/2/index.html","77b683503ea064165f2c23ab0d080a20"],["/tags/Java/page/3/index.html","892b37f921d17390fe63d0d51235f55b"],["/tags/Java图书/index.html","240355f360f8d5debe96d26cd0941161"],["/tags/Kaggle/index.html","71484c107f7f24904067f2473c40c32a"],["/tags/Keras/index.html","1300f00435a7ecf18b3fab405448e741"],["/tags/Linux/index.html","e7b91ada9f5739fcbba3adf8eed893ca"],["/tags/Linux图书/index.html","fb825c7f5c41cbf9c42a58e3732c721d"],["/tags/MEPP/index.html","3fff45d741ecf7756e9b6c791e4a3f42"],["/tags/Map/index.html","f5013f0e79ed293792b84fa1b300200b"],["/tags/Matlab/index.html","efa5c2e45578bf4fed36a5adf8cc08fe"],["/tags/MongoDB/index.html","48272981f1200c8469ca985a97f9bad8"],["/tags/MySQL/index.html","b439469a95a0128a85b4d3a00019bcd3"],["/tags/Parzen窗/index.html","fa0b2c44e2bd9edbc1966e7973d67415"],["/tags/PicGo/index.html","49a5a16b3eec903fe309eb69cb2cee19"],["/tags/Python/index.html","148059273133af68bf779706fa8b28fa"],["/tags/Python图书/index.html","929aeb68f3c06384dab0d43e9e3a9747"],["/tags/SPHARM-PDM/index.html","69e66f03c878683539ef897982f1eb9a"],["/tags/SVM/index.html","8a9bf5430eef80eef2c610d65830c06d"],["/tags/Seata/index.html","e9ad9e0cf3d2c9ff5fbcbc0ec9014ec8"],["/tags/Servlet/index.html","e5174f268041d7743b273f16613e5ac3"],["/tags/Sping/index.html","3066a22263bd621746475dfda294d711"],["/tags/Struts/index.html","9ebfaab5c8e145e4e27ddec336585b85"],["/tags/TCP-IP/index.html","2adb26805b2db572303d115670b6ead2"],["/tags/Ubuntu/index.html","67a790b6f2cb8b33d95d00df9e14401e"],["/tags/Unet/index.html","b9b77b73f50a447fc6cfae855a9f37cb"],["/tags/VS/index.html","0d03f17c29af97b9816937eb8a9b293c"],["/tags/VTK/index.html","a4201c3edb3aef2b8be926ca8dd504f2"],["/tags/Windows/index.html","bddfffcc584fc2af4374eca4d843d37f"],["/tags/edit/index.html","9b17d5d6034bae3d162bd2667d772ae7"],["/tags/hibernate/index.html","ccb7669fe784abd283b8eb60504b10ca"],["/tags/index.html","e511b0b022cbe2524eae01ab59dd7d78"],["/tags/itext/index.html","24945e583b18770516e20103e94415df"],["/tags/jdk/index.html","65ea85ca972b691116f6b0aaab87273d"],["/tags/kmp/index.html","58ad98046b1ed538b2dc1f8ac6bcdec6"],["/tags/k最近邻估计/index.html","b774147ce3aac785049148d97915bba1"],["/tags/lombok/index.html","1127d77cad5d8bbdb559859a24e1f84d"],["/tags/offer/index.html","389135cc3028c45673bee1e8c77feceb"],["/tags/opencv/index.html","b1446742d98e8185113c8010c8075096"],["/tags/pandas/index.html","a3e9d898edb2e799fc0437dae6b5d67c"],["/tags/string/index.html","fe301dcda74d19646062efa8d50cb9b5"],["/tags/vim/index.html","d5d284e1841b6b9f0a9859f85b4d1044"],["/tags/vtkPolyData/index.html","cd50996da468e459044ff31b935d81cb"],["/tags/web/index.html","16f49b287b383fe156ffea6251d1a563"],["/tags/xshell/index.html","8ef2a500fe6e23e8c4d5e88889983954"],["/tags/yeild/index.html","c8ed3d7e54f4ce02d4869f436a2a7092"],["/tags/互联网/index.html","39fc07209764f537d5892411f93267d8"],["/tags/人工智能/index.html","83e75a72eda864defa0eea9f7f2119a0"],["/tags/体绘制/index.html","d875c52b2d63bb0370dcd38340342245"],["/tags/全卷积网络/index.html","3fbd30a38991767004cd13efa48d89dd"],["/tags/公众号/index.html","c12d4142870425b787bc9afb8d09ee98"],["/tags/内存模型/index.html","fa27de5d608c71383ba450947c597fd8"],["/tags/内推/index.html","88f1faafd4a330eeeb8454c8c2236dec"],["/tags/函数/index.html","7d7b7e4eb487bf067482436904fa4cd4"],["/tags/分布式/index.html","4a34cb8770244f05a8deddaf752c70d6"],["/tags/加密/index.html","c2a3a0c1d4aff405f37f0e34b6edda67"],["/tags/医疗图像/index.html","23ab04b5258c68393fa2695a5c236219"],["/tags/博客/index.html","1ca24548b808ef482890bb4ac50350b0"],["/tags/图像数据/index.html","c98349a4f88edfe552f13ff42a6721d0"],["/tags/图谱分割/index.html","4d33d0d29414c6b5696243cadd9e19b2"],["/tags/垃圾回收/index.html","de6f9362b21c049968c7a8e587c1d84d"],["/tags/多线程/index.html","95856bfd188d99bb95aae14609d73203"],["/tags/字符串/index.html","0dd99c7d6f64c4f4b5195ecbe96d2a27"],["/tags/工具/index.html","9488beeaf07961dd15e2169e1d1325f2"],["/tags/工具/page/2/index.html","0f4a269d1a45a7db4e5ddc998b27661a"],["/tags/弹性形变/index.html","2df3125477f3a3c98001fa5eedce087e"],["/tags/排序/index.html","7687beea7bd5fe4cdc06271df8f27ea2"],["/tags/搜狗/index.html","d28c66e48f80704b0ac30bbe658c06fa"],["/tags/操作系统/index.html","d371f42ebe7f37338bd30af21a7cd1f5"],["/tags/数据库/index.html","c0528515a46fe8cf2322abfa952f7ca4"],["/tags/数据类型/index.html","0002fd6d52f464e24da3bbe875672289"],["/tags/数据结构/index.html","8dd81ef4a0ecc78a8c92261411160fba"],["/tags/最大似然/index.html","22f6889696a49890c625b2c4cf2b3300"],["/tags/机器学习/index.html","23d41c661db53679eccf046ebb28e4b8"],["/tags/机器学习/page/2/index.html","9831d0b5786e353fc6d3adff22cd224f"],["/tags/机器学习/page/3/index.html","3fc82b1a40ff46d264f8994d69ff1ec5"],["/tags/机器学习/page/4/index.html","a79f020df6d3213d05d7dc120c7e65a0"],["/tags/机器学习/page/5/index.html","d080394e8005b211829e0704e742961a"],["/tags/树/index.html","01c347cdfd82792c1f8d86f4a55c8630"],["/tags/框架/index.html","db3ae513b7355f98d206fc8f52f02567"],["/tags/求职/index.html","c9c51e82da6a1667f4bc75347587524d"],["/tags/汇编语言/index.html","6f8a09008bc2b70fe7585c9ddb4c7bc5"],["/tags/深度学习/index.html","ff1e585b9109ab1fd2cf35295a8ea085"],["/tags/深度学习/page/2/index.html","94c06931d5e6ca07af811e23eff84626"],["/tags/深度学习/page/3/index.html","bcdbe0f2851ff1c333e65699939a8d49"],["/tags/深度监督网络/index.html","9da64fc483fc1995d7a8017d9810e243"],["/tags/爬虫/index.html","0e550a39be048399d237c346518ec17b"],["/tags/电子书下载/index.html","1e14695007aa96c79286dd706dba5ba9"],["/tags/电子书下载/page/2/index.html","7f0fccd12bc06577f9ad6604e90efefc"],["/tags/程序员/index.html","337d8a4f79fc63ed760601e73002dbfc"],["/tags/程序员面试/index.html","a9874417c74fd75515c82de0dd9f63c3"],["/tags/简历/index.html","6dfb0b710e14f2a737698e91d140fd91"],["/tags/算法/index.html","43f51f3375a37313e775e8a54f551935"],["/tags/算法/page/2/index.html","a577ac76b4aafd598c55a95684024f4a"],["/tags/算法/page/3/index.html","66d486330350c53a683bafb5463fd2f8"],["/tags/线程/index.html","23d3f76a88b630ad99f84945df1d72c0"],["/tags/结构学习/index.html","93307d8da29f6260b9eef5897d529099"],["/tags/编程/index.html","335fcb8f02f0e2257aab0b8c88cd8561"],["/tags/网站/index.html","bbfff9e26dcd10234275f62abf584335"],["/tags/网站/page/2/index.html","7bb5d55229218dcc25d1d8c348c6da82"],["/tags/网络/index.html","c0945cfef6b5dbe7fa56991d1454bb5f"],["/tags/网络原理/index.html","5c851587e1428af8374bbb19b0a8b487"],["/tags/肝脏分割/index.html","8be1ca1637ac860cd821a5fffd10d4ad"],["/tags/计算机/index.html","634de7a4edceb89c89e7f0e82d82fd4e"],["/tags/计算机专业/index.html","ecf782a1e0209ff8ff960f50f979fb9b"],["/tags/计算机网络/index.html","37d7e134c056a79bb0c8d46c7c59b6a1"],["/tags/设计模式/index.html","f85253248919f1a475e630ecfced925a"],["/tags/贝叶斯/index.html","962027b363b19b2cdcb152f48ad6fc58"],["/tags/迁移学习/index.html","974609f4747bbba3bab6ac24f79cd037"],["/tags/面试/index.html","fc2e7d1121fc64cf57e9f6f26d59a157"],["/the-way-of-pragram/index.html","42ffd5c9c9e0737434931fac4658bf67"],["/untiypro XL安装/index.html","ce7aaeb0bf0a495c2e56a3dd6ae34c54"],["/video-websites/index.html","0546e0cba3d0b2c2ff33fb9e5e1ac002"],["/wechat-fans/index.html","24d9a2e3bdff6b8ace50a67ef797479a"],["/window-run-VTK/index.html","76198a9e17443eada89d64b07d64d5d9"],["/xshell-connect-Linux/index.html","e0f1ccb22b0ad8f9bd7591871396880d"],["/‌Accessing-the-Open-Internet/index.html","9be93d8d44b426d22de5bedc647ffac8"],["/《Java高并发编程详解》，去大厂必看！/index.html","929bfb16df9b2efb89a384883f4def52"],["/一分钟没了 1.5W 。。。/index.html","9d26eddc5f9063b3501d66161b0f1ffe"],["/一条高产爆款内容生产线/index.html","6a90b9ccc3f9af45431e50191b42a77a"],["/为高考学子推荐的六个就业前景广阔的专业/index.html","79497bb5a9c6c837ae97b79035a7955f"],["/互联网赚钱机器---社群/index.html","dbd83f6e640750b1728e9e960ed0e9f3"],["/你们常用的工作方法和思考方式是什么？/index.html","e6e81ac1c0e3c502027f465c4fe3bd54"],["/关于环境配置的一些事/index.html","36f34067be40d2ebe26c2a0da5c3b123"],["/准备了19w！搞事/index.html","2233be9e0abef0abab176aefb38b79dd"],["/几个很重要的感悟/index.html","27e15b05ded3e07f959dc85dc7b4f662"],["/分割ROI篇/index.html","f939d17860b639102ba34a46e9a41d14"],["/分割精度说明/index.html","735f7940cbb815833c89a86a01b793dc"],["/分块程序执行/index.html","f6a683601d7d94eedc5295d15e616cfb"],["/加班公司黑名单！！！/index.html","5ee01389c77373850bd0976dea31fc2a"],["/卧槽，上知乎热搜了！/index.html","a1bd3a9724557047d9de82f0f0ba40cd"],["/卧槽，我的小破站爆了！/index.html","90980cdc570192d150ff451d540be672"],["/卧槽，我被盗版了/index.html","18ba84e12886d2c5f896d364fdad1ffc"],["/卧槽，还有985大学在大一上C语言课？？/index.html","b839595a637a6c3286462d6fbe349264"],["/历年微软面试中出现的leetcode算法题/index.html","1444375384ebede68e938508c72a9694"],["/去特斯拉试车了/index.html","be419a858eef03ec6e3c01d1044b8966"],["/吃苦的三种境界/index.html","b7cb246b556235d3c8d33e932fdb1aa7"],["/哪本书适合推荐给 Java 初学者？/index.html","ab35b33839f9829c952bd0b684a46231"],["/哪本入门级的学习数据库的书最值得推荐？/index.html","9cc898b354e01ad09e76402a0c6f64e0"],["/国内外常用的AIGC模型/index.html","974607622b119b6cf5c013c02781cf77"],["/国庆假期/index.html","c9ec59f7ea1875f69910964e464c0622"],["/图谱程序字典/index.html","78396236f662641e1d01026daadb3357"],["/图谱训练与分割/index.html","b72fc0d9a51696eb8d30e3f8f7b284c4"],["/宣布一件大事/index.html","3e65576bdb5bfe12b11a331de19627d0"],["/小鹏P7i试驾体验/index.html","694ac1cf5a2c0e6edfda582fa4ee5be4"],["/微信PC版3.3.0内测更新，电脑可以刷朋友圈了/index.html","e17e9de0919ba891f48cad1d55435807"],["/怎么更快的赚钱？/index.html","1427b1abdc5ae199b28e4dc5d0b67f22"],["/我毕业了/index.html","46e860a73fccdc1358de70c1e976787f"],["/我！真！的！找到了！爱上学习！的方法！/index.html","50f6f09d39864416d7d7a2ed0de59a28"],["/户口的意义/index.html","5bd28f96ec196674f2a86fd3f6ca9145"],["/推荐两本经典算法书/index.html","dfb682c90215418853a97bdd3a3f80a6"],["/推荐几个在线学习SQL的网站！/index.html","876112e889fb15db0369db2b7b1db03b"],["/搞了一个程序员成长晋级社群！/index.html","37397593d1ddb14b97e16b464db54750"],["/摘抄/index.html","bb145c2677e78a3aed02eee839e3408b"],["/暴跌30心态崩了/index.html","8d9eabc2fbf782fab19dcd691dcf5307"],["/最近很火的ChatGPT到底该怎么玩？/index.html","c4be8f00a21cafef857e3c868cbf129e"],["/有哪些好看的日历可以买？/index.html","44edd4f3832c1fd9a7699195f7d4a3fa"],["/服务器有啥用/index.html","6fdcc5ff06a7889820cbb6dcf660f9a2"],["/来长沙了！/index.html","5e323c20d706e71f06e655256c78f04d"],["/校招污点公司名单/index.html","164627deb0894e632dd66c2934593d6e"],["/梭哈200多万/index.html","851161760a6a0e39be7ed0581fddbaed"],["/梯形图入门/index.html","4b6ce7eb2f8e45f0cd0dff85ad64bb45"],["/橙心优选，凉凉了！/index.html","93863dde7136f447b45f9c8487a2ddcc"],["/比亚迪汉试驾体验/index.html","803b4fc55e3f97b823e1ae695cf681b1"],["/清华转学成电，真的牛逼！/index.html","c66f90a63d7c42d5f050d611a667197b"],["/滴滴程序员被亲戚鄙视：年薪八十万还不如二本教书的/index.html","bc1f2e14d78e2c5f0f9a729843f707b7"],["/社群！/index.html","10059d0681cc5b6df0f0f1c3a3647ca6"],["/科学上网之VPN篇/index.html","69321df5c3c4abfd14f1f16b17502492"],["/程序员必备的几个技能！看完你也是大神/index.html","486d5cac53653d01d345601735d90aec"],["/程序员绕不去的槛，Linux！！！/index.html","c33bee69e6b58b50c784182199a2d6c9"],["/蔚来ET5试驾体验/index.html","b7e026fa2591f8ed4a4aa3ffffba7929"],["/蔚来，牛逼！/index.html","b2431f03e4facf458378eb39b795c5dd"],["/被录取了/index.html","d056899146aac27ca8164cb780ae224b"],["/被找事了！/index.html","8d4ad5f98d718386af81fce17b81da76"],["/被拉黑了。。。/index.html","228b96f5dcf80dc3276b74ce4e4d73e8"],["/被车撞了！/index.html","6684af722104e454aae6d9d49c82dac8"],["/该如何选购固态硬盘？/index.html","8d7df3e625bfc9c980ffa40f9970cf72"],["/这本书一定要看！/index.html","10211bdcc0b4aa0a0502b7ff7cd49531"],["/选Java还是C++？/index.html","715d287380bba79c55cf75a24c27e197"],["/那些让你起飞的计算机基础知识/index.html","761d5da3287c8d78b04b7989a5fb6989"],["/靠这几本算法书，成功拿下大厂offer！/index.html","073ce6a1e1d36f5cb8ff19520f8add2e"]];
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
