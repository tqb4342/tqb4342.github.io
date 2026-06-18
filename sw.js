/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/0010-city/index.html","b032572da6dcd3ff7efe6991da963340"],["/10-algorithm-book/index.html","9712c82d73af6fc194f768d04ce47876"],["/10-website/index.html","bc05be90185b0f3678ecadc62559bb7d"],["/100万的小目标/index.html","e0dc6f9d7a9510efe274af788488fbb8"],["/10w+YYDS！/index.html","5d636167f76094d12bec401fd8a61a3b"],["/10website/index.html","7dbe00b1249f0a58f3bfda43b66316f5"],["/12-technical-tutorial-sites/index.html","01808e29d7357036427f4390ef24461d"],["/2 6 岁 了/index.html","562ab7dfe74c11eb627ec6588617b9ce"],["/200万，啪，没了。。。。/index.html","c65fc1ecc0f6ca8850e1ad9cba50b819"],["/2018ECCV-Paper-DL/index.html","a8a74e51f2776cd459e39698637d9136"],["/2021年固态硬盘选购最新攻略（小白避坑指南）/index.html","f765c7a63cc9f19aa88da3a56115dcac"],["/2021机械键盘推荐/index.html","9204e626c63190e0880f20c83ba94730"],["/2025-07-15/index.html","7ecdac5075909ac50d0abd83d43869fa"],["/2025年终总结/index.html","e4a0352b35561ebe81a8ff9533206b42"],["/2026-Open-Internet/index.html","0846e9522d1a3ac7802c4a104919d4f3"],["/2026-best-vpn/index.html","cfd9c1214767e088e9c546d8829d897b"],["/2026-clash-vpn/index.html","d8b9d198fa6cb14f0ba125bdf17f222c"],["/27岁了/index.html","4585c03b8ab11879f217719fc4b7aec6"],["/3D-Convolutional-Neural-Networks-for-Human-Action-Recognition/index.html","0b6c42ca2159af1d5af9b8588a0437dd"],["/3D-Deeply-Supervised-Network-for-Automatic-Liver-Segmentation-from-CT-Volumes/index.html","e76fc898d7c6c81c4a754ffc6f633195"],["/3D-Unet-Experiment-notes/index.html","7247e1f2769d5fe64e91e97d6fa4b1e3"],["/4-Software/index.html","614b0ce858a3e051f248c2f3fc993c7a"],["/6-website/index.html","4dc3478c97128623ad4cd699521192e1"],["/7-terminal-tools/index.html","5167ec213d1ad384d0b98020108f91e5"],["/AI-PPT/index.html","396fd1dd584959d8881c564ae1613d73"],["/AIGC中典型的深度学习网络/index.html","0130963bc1bfbdd9ead0465f19047837"],["/Agency-model/index.html","d100ed34bcc82e3d399eb6e54d464a49"],["/Algorithm-brush-notes/index.html","60a1fa4c417da2261fca0e089fc84aba"],["/Ali-recruits/index.html","8c387d121e7dbed62fb0ca4694484045"],["/Android-VPN/index.html","02b79ef857f1e910537587cbad4b1f3a"],["/Android-open-internet/index.html","70198e8b766382e0f8044de778bf81dd"],["/Appearance-mode/index.html","ab24492c9cb92a0f0086f5b9ac0e62e1"],["/Backtracking/index.html","104662a43942fc5b7c1746415ad267d9"],["/Baidu-Sao-operation/index.html","3e1e88777de07e7d7ba46048c5a1b257"],["/Batch-Normalization/index.html","58945cd58d6739e78ddd302d162a1166"],["/Best-AI-tools/index.html","8aa4c055ecb7a3ee051e866f82c8e466"],["/Bias-and-Variance/index.html","c3c4f83ae236f3f2bc03ad3cf06009cd"],["/Binary-tree-traversal/index.html","787b891ddc7801006ea8818be50939d7"],["/Branch-and-bound/index.html","78ab7c4a13b7099da0aa566bfb6986e6"],["/Buying-computer-for-the-first-time/index.html","6bc01fb91685a115774f7c109d6d385c"],["/B站向北邮道歉！/index.html","871e23305265ce64585bbcc0883b23a8"],["/C++-string-function/index.html","403b62f33b1e6dfcffc29fa836e7938e"],["/C-Java-DevelopTools/index.html","a050854554ad808519f0ed29b319f4bc"],["/CS-Classic-Books/index.html","5a07cd5c310dc3b3d88cae995a71a72a"],["/CS-network/index.html","f1bb2e2e5e9595252cdb72398f8d8ccf"],["/CSBook001/index.html","ba37b479b87cecd1857e923a8f386294"],["/CSBook002/index.html","dd35a6238ce3e8b419ff5f23b057923f"],["/CSBook003/index.html","27c2599deda2a2b717d7b1a99ae39e06"],["/CSBook004/index.html","557cd0fcae57b692aaf915df8d71eaac"],["/CSBook005/index.html","861af8d25bb2fd8ef912d367cabee024"],["/CSBook006/index.html","1df6291ff5dd28ec0b99f01b37712b34"],["/CSBook007/index.html","72aa0b0df5d494db5da6dc6babde066d"],["/CSBook008/index.html","351953404c8b1fd9a0c1c1e6365991c1"],["/CSBook009/index.html","ddf8217c022f3cc27b7b5ea29f50d15a"],["/CSBook010/index.html","07dd7009bb08ead0a905c1df411cab1d"],["/CSBook011/index.html","bac34f97fcb1cc9e3aec825a851a6e02"],["/CSBook012/index.html","a4baacb856add209e003d876c783cc6c"],["/Changsha-really-fragrant/index.html","075074d5de2ae52833eacffa53678ae3"],["/ChatGPT-VPN/index.html","f99a4f94c1d403207a1aba1562928a49"],["/ChatGPT/index.html","8d511e332225a735e5882f05a0253eb9"],["/ChatGPT！王炸级更新！！！/index.html","638d7c93ca010e7da5d450003189931b"],["/Chrome-crx/index.html","e661e9a10bc25e2baefd50e4fa6ac6f4"],["/Clash-VPS/index.html","2cf95d1fbd4048b06d2c2ab4edc56f1f"],["/ClashForWindows/index.html","90b2c106a8fb556d5f9b00b345b9c196"],["/Computer-Classic-Books/index.html","2778e79fa0f71350a92e42439cb5bd4f"],["/Computer-for-another-major/index.html","9e9180fcd314c652de5948dfd69e0bb6"],["/Conditional-confrontation-network/index.html","b23d867c121a0d11ee1b06edf83a2836"],["/DNN/index.html","fee9fc872112eb1ae342014d2163c5db"],["/DSN-segmentation-liver-experiment-summary/index.html","69e0e18ccf7aec489fcf2659744db0a2"],["/Data-enhancement-elastic-deformation/index.html","3ff79867d5f0bd3e02cd020632b03176"],["/Decorative-pattern/index.html","d6d65afd1b800d32e5755cc7ef65ca99"],["/Deep-Learning/index.html","d1044cc4c0437fd4f0906dfd0e6316ec"],["/Deep-learning-and-medical-image-analysis/index.html","a4afda1f9300cd11cc9b20e448b66825"],["/Deeply-Supervised-Nets/index.html","91db7cdca49c7f60020e827c78bded8c"],["/Deformation-model-based-sparse-representation/index.html","0b48edc02f88a35445d832d2ec44bab3"],["/Discriminative-and-Generative-model/index.html","9c65dfd9a389324e17d15cd967a98a6d"],["/Distributed-transaction/index.html","cb5f15b2340b56e684d0e5cc35377bc9"],["/Divide-and-conquer-algorithm/index.html","8a97041a08cdffa8a1b714e3a44b26af"],["/Dll/index.html","bacdeaf81d896b020b0ac76d56768465"],["/Dynamic-programming-algorithm/index.html","6418354737d2c01d27c0a7373f6d77f2"],["/E-book-download-commonly-used-by-programmers/index.html","584feb0532e8f9996d1464ba91c877bd"],["/EditPlus软件的安装、激活和配置过程分享/index.html","b5eeafb09b3c58748026fd16992b6367"],["/Eight-sorting-algorithms/index.html","d94e3c25e0f01b5c11493557ebaea6cb"],["/Encryption-Algorithm/index.html","9f1732b07d733400daa23772789c8350"],["/Eolink/index.html","15ce653ee2ebcbf9a3ddd6964146bd3d"],["/Factory-and-strategy-mode/index.html","c8e51fcb60ee7aad5337dcb2960c2b8e"],["/Foreign-technology-blog-community/index.html","6a8b086281246ab12595b26b059bc7eb"],["/Functional-model/index.html","8585c869c1d3a6d1853a1a7eb7c46791"],["/Fund-type/index.html","535a24056bb1204f7e4d759ca94d5489"],["/GPT-4o/index.html","c27111245f4874dda98ba995ed7e066f"],["/GPU-medical-image-processing/index.html","65aab8995b6ecbaf710c70c568463b8b"],["/Gemini-pro/index.html","19839acc060e4c59f7f6eb058e297845"],["/Gemini-vpn/index.html","e53e963f050e54f9a268d553b5844d2d"],["/Gemini/index.html","c9e35cc59c1a79a8a81adfa4a9f056bd"],["/Generative-Model-of-Unsupervised-Learning/index.html","9d22ec262e33465538d6f0759e44f119"],["/Git-Learning/index.html","fb703b5969a3612e071eea6a7bc082a8"],["/GitHub-2FA/index.html","5efafa4ea7b766349c656ee80f39bb83"],["/GitHub万赞，程序员必看操作系统总结！/index.html","1c820d9c98c2a4282584d9ec9b391a61"],["/Golang-book-recommend/index.html","182ff22097a1b044626af27d8f24232c"],["/Golang-learning/index.html","79f153e35b46a978c188950c65fbb8f1"],["/Google-Gemini/index.html","262a79d75380d4ce1c62ebdf41f2711b"],["/Gradient-descent-optimization/index.html","a89b87aebf361a8668ff2e2029e0a579"],["/Greedy-Algorithm/index.html","beecca1aad72f05e1cec3810e0a5a867"],["/HAND-User-Forum/index.html","08f60cb14b77b5098b07ef1c24a94d8a"],["/HK-bank/index.html","33e26f6fdc3033f73fe5aa7a9b60c54b"],["/Head-to-head/index.html","1154187aa524018cc57657ba563fd154"],["/HexoPage/index.html","5363079be975dd4d1e34a7d8bd77182f"],["/HistCite-Pro/index.html","caf182c6d30a3d0b7554b8997f6df815"],["/How-does-the-program-run/index.html","84ff1c6c68d0111a82f5596b5832f542"],["/How-to-judge-whether-technologyisreliable/index.html","17e5a19b3ec997fbc4258ff7a6f6858c"],["/How-to-learn-design-patterns/index.html","359f8e6ddc023ba7f71003e49abb75c1"],["/How-to-learn-design-patterns？/index.html","ef3fd16030c479d6459be30d81cd4513"],["/How-to-teach-yourself-programming/index.html","1db6924180513a211d89164104bed1ab"],["/How2learn-Python？/index.html","ef59c55246a52a30c512b2eb8b463c65"],["/IDEA-shortcut-key/index.html","2bebe519efe9759a041524fa6774c661"],["/IT-interview-basic/index.html","58eae46429621de4c63c2cef1e09d1f2"],["/ITK-VS-install/index.html","16f2949ba8f22e38e90e1e0158b31feb"],["/ITK-VTK-ItkVtkGlue/index.html","798abca909410c7435ffeede98dece56"],["/Image-processing-plus-noise/index.html","1d7dfea53d509908cc309299ab7bd525"],["/Inception-Going-Deeper-with-Convolution/index.html","2fb8ce4d2f13b142ef210a65c85273d3"],["/Information-Cocoon/index.html","27d1d18bf87014e53c55d9d120712f01"],["/Java-GC/index.html","2ceadae22950c26c368aa777726194c5"],["/Java-Servlet/index.html","4be770240eb9210868abf748edc32848"],["/Java-array-and-collection-sorting/index.html","54c354e0118cba44c6121babb6f34e3a"],["/Java-development-tools/index.html","97dda62ef15a2bbf881998344703800d"],["/Java-eight-data-types/index.html","c5f450edee8280b5ee6659a14dc6aa54"],["/Java-interview01/index.html","52a9f84f2b59708b28885c56441c6182"],["/Java-interview02/index.html","459d61e73aa0d853e8e14c24c72a41a7"],["/Java-interview03/index.html","098dd608145aeefd6b2cec3295c8b460"],["/Java-learing-map/index.html","c06cd3d47552d9e5036df157552e0df3"],["/Java-learning-route-map/index.html","9ba9f96b934f4c473dc6dd8568c242e8"],["/Java-memory-area/index.html","4cd08469cea4fc217df69d4cc35e8141"],["/Java-memory-model/index.html","5938eac0273d5424db0d784b3eb0d2f5"],["/Java-multithreaded-learning/index.html","641afc3d0f8c5c2c1f3a8a7bc6135f03"],["/Java-project/index.html","34cc9a1d80b2746eb4fb0ee19cea3943"],["/JavaWeb-Chinese-Garbled/index.html","ea645501266d3e0e50c471bb9356f521"],["/Java还是C++？/index.html","3232885fb79b0f896c4a3df6d03e44df"],["/Kaggle5-step-guide/index.html","21fea4e6019beacec1c40188a26d11e1"],["/Knowledge-points-of-Java-garbage-collection/index.html","385b30bafb39188c7f82f5c5d43f9296"],["/Layoffs-Hiring/index.html","29fb4852219097143ef1b53456c1ee52"],["/Layoffs-and-Hiring/index.html","42dc6ea824bfc87f8b4e0be05aa31675"],["/Linear-regression-of-machine-learning/index.html","f1dce121d0849c8b7328b1311b70cfad"],["/Linux-Compile-C/index.html","a775745e3662b12406f318c08427d6f1"],["/Linux-ITK/index.html","512ee9c3f1b26b5db20211c231d17061"],["/Liver-segmentation-of-sparse-components/index.html","07873e37c0b1b6840f8fdc0253424337"],["/ML-EBook-paper/index.html","b651c8f3a6f671070a3ec1dd09a1b224"],["/Map-uses-multiple-maps/index.html","ba42e56513c7ca0dfc51a2edca280ef7"],["/Marching-Cubes/index.html","105639e77d62f8e86b71f0e3fbe536a3"],["/Matlab-Graph-cut/index.html","05a88c48cc00bfc51da45b0ea220957d"],["/Maximum-Likelihood-to-EM-algorithm/index.html","0b160dff56c3397c2315d0956ceefa8d"],["/Mean filter and median filter denoising/index.html","93071a1ad5d1803090118e977233a94c"],["/Medical-Data-for-Machine-Learning/index.html","8618edb3ee71ae464ed82957c5a0aaf5"],["/Medical-image-analysis-deep-learning/index.html","35eea3ac42f049ce33fbb95d66556f79"],["/Medical-scan-image-processing/index.html","0c10536ad543d6f6ae340ad8e2a3de39"],["/Merge-sort-algorithm/index.html","0a48100071f9786cfb1aba25506087e4"],["/Monthly-income-2W/index.html","ec1cf99228886a4194c701b2b30978b4"],["/Mysql-database/index.html","5acb0f7974b0dcbeec26310dd13e9f4c"],["/Neighbor-Embedding/index.html","c553c7cbd5c14f870ffd57cc7f6aa50c"],["/Neighborhood-approximate-random-forest/index.html","80b41a4421680a7dd98a2a9bf23b4b88"],["/Net-and-official-documents/index.html","9624ea1feab23103680a814202f6733c"],["/Netflix-VPN/index.html","376f683619b8082ab49e4ade23afb141"],["/Network-principle/index.html","5400d9102f7e1c9a605b8660aa9c6733"],["/New-Hong-Kong-stocks/index.html","382df887c5e2d293d9f9bde3de1e5de1"],["/Nice-to-meet-you/index.html","906deb5ec4a81d7c048db8f5979ddf8d"],["/OS-processes-threads/index.html","7556b11edd6c091e87123745b09f0af6"],["/OS-run-environment/index.html","31c58cff56665da35c80a4a5ae44e4c9"],["/Open-Internet/index.html","0fd9731a97f52605ccbc96c34280a07c"],["/Open-Internet2/index.html","d3639a66e572139c0447fda9aa09eca4"],["/Open-source-community-and-rewriting-website/index.html","93e45cea49fd203a73edf75283d538fb"],["/Panoramic-image-stitching-based-on-SIFT-features/index.html","2a3ff3948594aaf8b1436607b53dd7ef"],["/Parzen-and-KNE/index.html","14b348fd691fbf130b33b6d77c2d5a9a"],["/Personal-technology-blog-site/index.html","0bf62dfee695141aaa16e618d31ad5f0"],["/PicGo-Gitee/index.html","82c0cfd1cadb914f07caa73fa2ab4d24"],["/Programmer-treasure-chest/index.html","85d67851fee93e8ca8830122241d1893"],["/Prototype-mode/index.html","fa89184660001a33c7eec197b3612366"],["/Python-base/index.html","bb307eb82a11dec6a8eb025a14c04377"],["/Python-crawler/index.html","f26dd0d32ace1a2253f95594784a03d3"],["/Resume-revision-suggestions/index.html","818e5841b6b2c5a60cb2c9ac608e6543"],["/SEO01/index.html","c451f8951b2b1eca2dc9188029327d46"],["/SEO02/index.html","1ce759e52ba6d711ea96c33ab9464b17"],["/SPHARMPDM-MEPP/index.html","d852a890fba4d047719967012091f911"],["/SVM/index.html","9698478b14abbd0da5d9d9d3f1f81961"],["/Seata/index.html","048e50786a667e903c6781a5bce3eb9a"],["/Semi-supervised-learning/index.html","dfce804f3ce4af24263c57355655165b"],["/Sequential-model/index.html","9217e682527be4d3d5be128433d330c3"],["/Shape-Based-Human-Detection-and-Segmentation-via-Hierarchical-Part-TemplateMatching/index.html","0c6b287045bcaf6cd95bd1ed63c33393"],["/Spring-basics/index.html","4814c35aa86f690d59892eceff177e77"],["/Spring-integrates-hibernate-Struts/index.html","acee7f2fef4061cc803e2160324dd0cc"],["/Structure-learning/index.html","fc37980c67fc8038c05ea09dcb35771f"],["/Suggestions-for-self-study-of-computers/index.html","7abed50ff0aaab90be2d4ae5783036e9"],["/Summaryof-HongKongStock-Account-Opening-Links/index.html","1b2001ab358939dfc0afffc13c454f3e"],["/TCPIP-detailed/index.html","467b5d1580b612b9295ca5efa72c7c7e"],["/Telegram-VPN/index.html","8741e6dabc16154b8f2d16895196b8c5"],["/Telegram/index.html","afdb5d4a435c36315a0de126a16e9537"],["/The-essence-of-shopping-festival/index.html","d3fc53b68f51ae0f9e8287b8dbc27c84"],["/The-most-important-investment-in-life/index.html","d9f51dd0cd3d3cfb7aee97054468c594"],["/The-most-successful-nvestment/index.html","4d6361d28248b1e5600de4cb27f2a480"],["/Transfer-Learning/index.html","bf5d3f2d611df1c5cc8c2fbd7a46b0d2"],["/Transfer-to-computer-major/index.html","258bacdaebdc7c925ca61317c0ef2c4c"],["/UNet-Convolutional-Networks-for-Biomedical-Image-Segmentation/index.html","235d9f274b715717bc96126155cc56f1"],["/Ubuntu-install-sougou/index.html","d50486660bcc3fc37450ebf79b3436ae"],["/Understanding-of-paying-for-knowledge/index.html","764e1477a6755037854e0f8e07e5bf58"],["/Unsupervised-Learning-Linear-Dimension-Reduction/index.html","6a650acc8ed659f3db5a0fcfc1a0c8b6"],["/VPN-HELP/index.html","46540ab345eb17cc37ced04e57052d0a"],["/VPN2025/index.html","d296d1872f8e959e5c966490886c8550"],["/VPN2026/index.html","34839d327bdf250bf10dbbb678eb76be"],["/VTK01/index.html","31d34fbd0f7f223881cb86a9de17b43b"],["/VTK02/index.html","d0809d476a2bb311d5c77500e3fa4c24"],["/VTK03/index.html","3e14de8c3ae300557899d4f851903805"],["/VTKRead-write/index.html","48ed8228201fe28bec42f4043d6e3c37"],["/Vertx-Java/index.html","08db7c73c56e81c92faf36d3945f4f2f"],["/Vpn-OpenInternet/index.html","2fcf1e4c62f314c287c325ef0caf4ed6"],["/We-are-all-good-kids/index.html","79f1461b95cefebe84f85dc93f1d10ea"],["/WeChat-80/index.html","56bed0b68960495ab41277f24a080681"],["/WeChat-red-envelope-cover/index.html","85e9a9f612e0c2966ff7a450f8a8ca56"],["/What-is-crawler/index.html","7872c8df441f6be43bb56bcf5040b5e9"],["/Win-Open-Internet/index.html","9ad728121359aae8beaa306bdd98f69e"],["/Win-OpenInternet/index.html","415ac3766a146192c83c53c35856e7a4"],["/Windows11-2kfans/index.html","e2a0426b78869425256ba2488d152c4c"],["/Word-Embedding/index.html","03113a842af197961b593a6cd7afe113"],["/YuanShikai-and-his-Beiyang/index.html","5754ac8573d8019144c64b67f47ad7b6"],["/Zero-copy/index.html","a5f7b220668b8505cc0d4523cc130f3b"],["/about-keras-model/index.html","d49c4cb4767602bfc134bd47da922e35"],["/accounts-google/index.html","8ee76d837968060609edbd08c97892fb"],["/algorithm/index.html","d0324679d3a3f8d353349d13d89fe96d"],["/alibaba-Java/index.html","30abc511f84a4caced9605e39488e48e"],["/archives/2020/01/index.html","9a68b128fdeba96d51ae0a602165a0ab"],["/archives/2020/09/index.html","da3242062baf0409d4bf14bf4d1cddfa"],["/archives/2020/10/index.html","7cda5f0af35c13979c7807f8aac18e30"],["/archives/2020/11/index.html","1e49a6287c78fd5a1a50c078a98e6479"],["/archives/2020/12/index.html","d3edca116e90ff41985a5945fe92cf8b"],["/archives/2020/12/page/2/index.html","95b91c1d1dc985475b759197f2901c9d"],["/archives/2020/index.html","71d41f9a3ff0a64c4fb6e4823031c728"],["/archives/2020/page/2/index.html","1e5bc17013746dfa18a72d788abc2bba"],["/archives/2020/page/3/index.html","6ae9112d1e3c060795c273b125635ccf"],["/archives/2021/01/index.html","cbfd8c645ac23854bb5bc8139ac82b0b"],["/archives/2021/02/index.html","ddc0e41b976b989c9b076584202fffec"],["/archives/2021/03/index.html","f62e7b0bec9c3d8e48059a902f3f5e0e"],["/archives/2021/04/index.html","f9e5cbf5fda6025600de40cad3239ba0"],["/archives/2021/05/index.html","e3418119e9f50d092ac565ae985c707a"],["/archives/2021/06/index.html","2bfd4458ccdacdc1bcaeacfca950ef67"],["/archives/2021/07/index.html","18f2c43ac9624d8ae304d437733cf79c"],["/archives/2021/08/index.html","997536c51999f880ee8574038a043ec8"],["/archives/2021/09/index.html","7ce67abc61fb1b2df82288eff7bc406f"],["/archives/2021/10/index.html","fcc8d4ef754761472ad67656890dbcba"],["/archives/2021/11/index.html","aae320bbfc50bf7dfffd262039d02e59"],["/archives/2021/12/index.html","1f5878b06d9bddff1c5016dc65f57b15"],["/archives/2021/index.html","e0b4403e30ae68fbaf610aeb6b00f507"],["/archives/2021/page/2/index.html","308754d4d5ef011026f0e102ecbb82fc"],["/archives/2022/01/index.html","028218370c1da6a35c34b38b8d9ddd24"],["/archives/2022/02/index.html","bcd1e20e4f31d9c6eb5d26ffb20142a4"],["/archives/2022/04/index.html","eaf8b523aa4343c93359ed8347ac5e6b"],["/archives/2022/05/index.html","40c2c593b0d4f6723c339aa803b7d237"],["/archives/2022/12/index.html","989ee360565ee1c5623f6d067268a2bd"],["/archives/2022/index.html","2826ce03eedee18ef908374395710e74"],["/archives/2023/01/index.html","8ee6fb5f3421823177866cd569189fb1"],["/archives/2023/02/index.html","ea1279d1d83b0fb810ba68a81e70d942"],["/archives/2023/03/index.html","640d2cc1a000a43be8d1c564d0b032aa"],["/archives/2023/04/index.html","9167bc317823849aa03cd607b5d5d77d"],["/archives/2023/06/index.html","5fdf9dab6b036d8bd3a7b45de2850e1d"],["/archives/2023/08/index.html","ee653a7b3623f83c62ed10f2276b4e26"],["/archives/2023/10/index.html","8bff869f96ee2c2418638f072bf7f176"],["/archives/2023/index.html","d55b933e78d3f1cf1910cac4a1a41b58"],["/archives/2024/01/index.html","afafec760383eeb514e91802d1363383"],["/archives/2024/02/index.html","dd6d2ce5b19611cce05f27a181716a39"],["/archives/2024/index.html","a7d0c84d93dbf14bc8fd5b18e4ffe96e"],["/archives/2025/06/index.html","b0ee22d4098e8ca24118972325b3ec97"],["/archives/2025/07/index.html","c758c6eb30e3ae8a7e651ec196a548ec"],["/archives/2025/08/index.html","4ebe2b8ba7ca23629be1a351f5a44062"],["/archives/2025/09/index.html","acd4546ac79a1c81c450885e8d516a40"],["/archives/2025/10/index.html","51f851d4f45b93f7c924f8c6a3fe0c52"],["/archives/2025/11/index.html","977a91915b182e24ba4bd774c8a81396"],["/archives/2025/12/index.html","4f50dad80c749721a08e963bdd2ab55c"],["/archives/2025/index.html","efb5aeadf481a604fe10eb4a8634a501"],["/archives/2026/01/index.html","b3d30cfe013e68456076621bd78cb7a5"],["/archives/2026/02/index.html","34a8e1141b91156e877682e6408c37cc"],["/archives/2026/03/index.html","b836f7c8f79af156de5226c5a9c0dc4e"],["/archives/2026/04/index.html","9467bcead9d962fc2e25a7297130b2f1"],["/archives/2026/05/index.html","510eb3871c33dbb7e5135a2f0ec97f75"],["/archives/2026/06/index.html","e22b9002c857e112a9898b18140d28c5"],["/archives/2026/index.html","6c8e8bf5b495b406f2a7511b33b3d101"],["/archives/2028/02/index.html","4236dc864c59504263fb42414c73297a"],["/archives/2028/index.html","5074e8656b27724525475aa0b1c03e21"],["/archives/index.html","ec6071c77b3f1a02a3550c0f61a069d5"],["/archives/page/2/index.html","98317a413495a7e81e6857ca5a183e2c"],["/archives/page/3/index.html","553d0aefe8d4638f5c3dd5561cf8ff1e"],["/archives/page/4/index.html","427aadc0ef1e859bf081ba5d1922751c"],["/archives/page/5/index.html","7b947c57bd184c2409af8fe01adeb4bd"],["/archives/page/6/index.html","0f6417c40af46515c17528a657fd45e5"],["/archives/page/7/index.html","6a7c4980ff11a82188cbf370d33a92f6"],["/baidu-search/index.html","f0d9d7d035093ced21cd8cc6db01a437"],["/baidu_verify_code-Hh2fKNlEB1.html","d6d028cc14c1eedb223dbeb3a664c8d2"],["/be-a-programmer-instead-of-a-code-farmer/index.html","2adfb6f6deafbbc442f8b1bfec8a9a69"],["/best-vpn/index.html","e8581739bc0b4d1fe94af236c5222438"],["/best-vps/index.html","154b9c731449ac4c50ece922746bd4ea"],["/bought-a-house/index.html","f5f6fd049e53cfc12d7b6595c247352e"],["/categories/C与C✙✙/index.html","fe5de60e8d70d26d4d931382c6533693"],["/categories/Go语言/index.html","dfafc0f519891604271bc43acd33a433"],["/categories/ITK与VTK/index.html","03b9f321b46f5321c60427f84667d606"],["/categories/Java/index.html","fabb98cb1700e8f7b7b2dbc655c9e4a3"],["/categories/Linux/index.html","4d0e3bad6711ee0db7a679e57650fac1"],["/categories/PLC/index.html","42b1c7ede2b4c1d2447c97a4ce74e7d8"],["/categories/Python/index.html","4a502137caa5d2a7e04bc3b850c4ae81"],["/categories/SEO教程/index.html","b92b4063427a1a0f4262802a5a1ceebe"],["/categories/index.html","1c4e75914278e4cc09a69fbfb89f122d"],["/categories/图像处理与机器学习/index.html","d1689ea5c95b091987daeb4c433d4d59"],["/categories/工具/index.html","7050da92b63bf39cd2bca808ec2e504a"],["/categories/技术以外/index.html","63949579579c0669e8a85cbd84608e8d"],["/categories/技术以外/page/2/index.html","67c5dbfacf019b899d4c83e92e5cb144"],["/categories/数据结构与算法/index.html","f80bca086ac23fe6ded1dd384d02e2fd"],["/categories/科学上网/index.html","b92c61949346d2353c9979a1500da176"],["/categories/编程经验/index.html","2121daa7ee8e1cf229e47e9e914d95fc"],["/categories/编程资料/index.html","98ef45bf47f817c01d1bfb6eaedc2405"],["/categories/计算机基础知识/index.html","b20c68e4cd09ebfb91a58f0f6d4406c0"],["/categories/设计模式/index.html","7d07df2fea80f3f4a987bcf943b024dc"],["/choose/index.html","a26797bb1d1d904214cb4551329f57c9"],["/choose2/index.html","12389cb8dd05dc776f934b03c7e0fbcb"],["/chrome-crx-intruduce/index.html","664d811cae57d804b0e946ce447a2d3c"],["/clash-free/index.html","819512a62f27faa84de7f6ad8754df7a"],["/clash-pro/index.html","ecb5660abd73d6212b8894cad04792e3"],["/clashvpn/index.html","cc3267415e2f5fe893b1d634ea31e24d"],["/claude-code/index.html","06d457487f3be5115efb9678d8cc9a44"],["/coder-blog-website/index.html","d9a683b6161ea07aafb7ec9f95062267"],["/coder-source/index.html","169a4892c187ba43754a833680fbbf5b"],["/coder-videos-website/index.html","734cdfcfdc5cd2dab3f0f1e799e50874"],["/computer-book/index.html","0bf99315a5ab586ca88bb0577107dbac"],["/computer-censorship/index.html","c45f914456693dc7ed8ba97b26973dd8"],["/computer-network01/index.html","0a82ee136adc8a9a59c3ffe24263aa7c"],["/computer-network02/index.html","2406a43834c1473379a5f3c33310e4a4"],["/css/main.css","bc32ad34ec4990d934c3c647bdb62f79"],["/database-Mysql/index.html","0e92d00f00b4f0e6e7065bce577701c8"],["/eclipse-lombok/index.html","ddcc035fbd8b7b98fa51fb57e55a3e72"],["/freego/index.html","a32f593f8594943cc2ad54920ef0c720"],["/fully-convolutional-networks-for-semantic-segmentation/index.html","2804f39254d0c6e744a53a0f9ec937a5"],["/great-firewall/index.html","e00516b25e69630acf590a15485d73b6"],["/halfrost/index.html","6bd9eefa7e3259a04c49a8aefb25bc7d"],["/how-to-signup-chatgpt/index.html","131f7806e31ae439db76fb18755a9af5"],["/how-to-use-Gemini/index.html","9b47194b9e1696f5a2e0239984004417"],["/idea-continue/index.html","feff4ff0287ab5441288eeee464cd769"],["/index.html","3342405cd040e614c01cadc2f76578b2"],["/internet-dir/index.html","fa6e7a09d0124b535e8c3fd873f5a15f"],["/ios-open-internet/index.html","9ce9b66a269b81748c4858336de16830"],["/iphone-open-internet/index.html","12012ac557467f36dc9f83ff1374dfa8"],["/itext-makes-pdf-form/index.html","8bd9a8ea1555f08f5750ffde48fc8a45"],["/java-Set-Map/index.html","590db108e6c8423d490df0059091ebf1"],["/javaweb-server-error-codes/index.html","7660e7c209d51161bc7d96ffb5b3173c"],["/javaweb-source-code/index.html","b8f380fd2c53b7037ae13d3f9baa8949"],["/js/lib/busuanzi.min.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/js/lib/lozad.min.js","47904d34a224931dd1b615c59a3dbe3b"],["/js/lib/prism/prism-coy.min.css","0ccad54d95845901ead59bfd3ecceb14"],["/js/lib/prism/prism-dark.min.css","a4711d2957d6605eb5682bdd228cf123"],["/js/lib/prism/prism-funky.min.css","efedcdccd7a9ab342d2d9cacd24920af"],["/js/lib/prism/prism-line-numbers.min.css","38e22e790c279bb56f9ec4b90a2a2d58"],["/js/lib/prism/prism-okaidia.min.css","5ac6f9de996fbec68aaa106dfb16e061"],["/js/lib/prism/prism-solarizedlight.min.css","ecc7e64d039873ffcf7fb27babdaeb5a"],["/js/lib/prism/prism-tomorrow.min.css","456af2a14ae4f5089939d5904ac40fe8"],["/js/lib/prism/prism-twilight.min.css","ebb5c355332a8cf9a1ce37a2a69d678f"],["/js/lib/prism/prism.min.css","a5234d614834658887cec6a9515890f8"],["/js/main.js","052d2b299d9c750afea8df0b802ab7c1"],["/keras+TensorBoard/index.html","3b916b393276a9fd1ef1fcc7f47bfed2"],["/keras-beginner-guide/index.html","a7d4d557a151292d698b36bbdba3ecfb"],["/kimiclaw/index.html","bdd41e9a3e88a87cda9f314977715beb"],["/kmp-algorithms/index.html","d37af2cf5d20664d63fd631fda501b95"],["/leetcode-Java/index.html","93960589bc637333dfb80625db430c76"],["/links/index.html","82a75dc8e48cf3611e0621e888d66dc5"],["/linux-java-opencv/index.html","fd0853fd2d39269c7f85a9477de4aba5"],["/magic-internet/index.html","de9c4652369e43b868c1c083cfc26ba5"],["/magic-vpn/index.html","a9befe5f22657846af7da48b6362c3b5"],["/mingci/index.html","eff10989bbf033c1906fe39a291a0f0c"],["/mobile-vpn/index.html","9b484e0691a8cd601bbe394183feaaa8"],["/msb-source/index.html","02c6fc4619d81ec3a919f51d90714552"],["/online-BUG！/index.html","ab99c19637cad290d1ed598d8c94c514"],["/open-app/index.html","02cf4efc7aefa170ac7bb3ac509e5dd0"],["/openclaw/index.html","9655b83038f7c902735c9a8768a0182a"],["/openinternet/index.html","2c6d78f20a82fe8a78fe73fb01b4e429"],["/page/2/index.html","fdb7f48088acb7a2b13c38868c524f69"],["/page/3/index.html","850fdaa637417802ac926f027a467b3c"],["/page/4/index.html","642835f251d89d863c7fcfc5dcf6e708"],["/page/5/index.html","6e66f43e7584e9c99cb14df1c87cb72c"],["/page/6/index.html","22340fb399fd6699dddab5045b02d4c1"],["/page/7/index.html","0c992983f0ed8942a2d20f594589ee7d"],["/pandas-data-preprocessing/index.html","f88617d2488b065ef0158dbe7e318b11"],["/phone-win-open-Internet/index.html","5fdb5bba6ba3bd82329ccf9b10b37ad4"],["/popcorn/index.html","80ee9d13f3fc8846ef1c841f1c175a4c"],["/protocols/index.html","7b9da3045ca3ea7edd3b32f45ee360ac"],["/python-Blog/index.html","332d3098f2ff07583004a4c77591ac8c"],["/python-yeild/index.html","d9223f480ed7672e46ddb9297262eb50"],["/python爬虫教程/index.html","5712e5071589b4b869dae0149285dae3"],["/route/index.html","50eba0a57fc49635e3b38946bbfa70a1"],["/search-help/index.html","37e5f24967501bbe753d56e0d29b4d59"],["/software-copyright/index.html","795dfc76eecae9fc0688bae825962888"],["/sw-register.js","7544960f3c7282f9a9fa85bcbe5e12a3"],["/tags/AI/index.html","bef35d2da07cd89dd43f88c35c3d581c"],["/tags/API/index.html","a1e5519c32533f145a5addbf808c927c"],["/tags/C-图书/index.html","072835def6fde8f3d2a213f8432a3fa8"],["/tags/C/index.html","0cbba16ec1542cbb195d65c72030cad1"],["/tags/CNN/index.html","c3750052bce5d6acbde3ec2553e692a8"],["/tags/Chrome/index.html","19c89ebd64bb7057b12aa9450142d926"],["/tags/C✙✙/index.html","23b45e468e5edb912c235fa83cedf3c8"],["/tags/C语言/index.html","518c0c745744287acab370cbb4414d22"],["/tags/C语言图书/index.html","63a5c5a58fd7f00216e3297da9ba649a"],["/tags/DSN/index.html","efe4918f7369a86d08fd32d366fce77b"],["/tags/Dll/index.html","3a0d774eafd60d59b161845a35127ae7"],["/tags/ECCV/index.html","e3bb2a7947389203d34d01aba0c164db"],["/tags/EM算法/index.html","a4485743a6b9a983d227e5c52a207dc4"],["/tags/Eolink/index.html","0ed221c5e5928076b835555ee33d35c1"],["/tags/Gitee/index.html","33a19186d3439793620a06dd14c03b64"],["/tags/Google/index.html","b5adc66b956adf3a8da9fcf1dc09fd86"],["/tags/Go语言/index.html","d704cbe4c50a2aebe5e9630f7e70b872"],["/tags/Graph/index.html","4a726c53dd7033dfdafbb256c0922a71"],["/tags/HTTPS/index.html","6923c1e047dbeb1ee0668a6c0f1b29b0"],["/tags/ITK/index.html","11dd45dbc9bd492ff1fa8055830303b5"],["/tags/ItkVtkGlue/index.html","bf1f79f8bd028bf262d1462ad563e39f"],["/tags/JMM/index.html","7c19c42a7f68cc178851678654b0af97"],["/tags/JVM/index.html","46927fdc912fe0e9eaea8124e839904f"],["/tags/Java/index.html","25320d3c7d028349fb4fa816796d1f9e"],["/tags/Java图书/index.html","713297a6a6e5c2667d5d8554429137c6"],["/tags/Kaggle/index.html","476e3ecd06fcd34245400f332672266a"],["/tags/Keras/index.html","8fc198febc43fcf9b97bbaa0ba971de8"],["/tags/Linux/index.html","9984d10413211736905e527c36ef1d28"],["/tags/Linux图书/index.html","a1dcde272cd3e3386063a7c22c99f1be"],["/tags/MEPP/index.html","43438871e78ed544b183a3f2d75a0831"],["/tags/Map/index.html","0788e799c48598953fbd6a2686468f65"],["/tags/Matlab/index.html","6bf7f64e9a6d3df0b3b4a9ed57e2975c"],["/tags/MongoDB/index.html","c01bbc84df9055f728715f2640016600"],["/tags/MySQL/index.html","641738b4d74a88f530d4851fb6206d0d"],["/tags/OpenClaw/index.html","2c291afe4bb0e1c5f73b4c04146bb126"],["/tags/Parzen窗/index.html","5cabf79b33df5c61532ccbfc4b6011dd"],["/tags/PicGo/index.html","6abd1ca72c6cde31d5790d7193ec431f"],["/tags/Python/index.html","1f2e32bb36d7fb1a6d7d1054fe9dae71"],["/tags/Python图书/index.html","9a8ad8b1835895962b894f844bacbef9"],["/tags/SPHARM-PDM/index.html","d098f5019ca6e50b01a834c7a677b834"],["/tags/SVM/index.html","d482ca58557bce39d7de4477b3814621"],["/tags/Seata/index.html","107dd6c357db5862b219b36b24fc1d80"],["/tags/Servlet/index.html","35d65537e6bf021cf8c71ee8da104fdc"],["/tags/Sping/index.html","bbba4ee4f2c792de336c253ece0edf23"],["/tags/Struts/index.html","40aa705763f6f666c09c1d5ab2fe87d1"],["/tags/TCP-IP/index.html","2f5a91f4b67b5632da7fe1213692311c"],["/tags/Ubuntu/index.html","86c8f54fbc51cbce5844c1015c74cb28"],["/tags/Unet/index.html","72c52bfa6f95fa99b4294bd850e1793a"],["/tags/VPN/index.html","24fa6ac15f02ceb9f8fdc0197d99195a"],["/tags/VS/index.html","12b4fd8de6608a8df2d70fafd52e797a"],["/tags/VTK/index.html","d714ecd3703426673e73e9ba64de20a1"],["/tags/Vertx/index.html","eff14368f4e9ab6de75f1dd872656189"],["/tags/Windows/index.html","79441c0cef250d852c08de508c315be9"],["/tags/claude/index.html","8f23267ef476011fa7120caab69a0273"],["/tags/edit/index.html","1dd98709ec4a1f53d57852d033503d77"],["/tags/hibernate/index.html","acd4f1dc4140cd154fb265d35a16b714"],["/tags/index.html","05e4ba2fb25b26c8d72882b175a497a9"],["/tags/itext/index.html","2afdd14dab2015d23ef0d1999c987e2b"],["/tags/jdk/index.html","1bc989728673297f4a5323d80ea8194f"],["/tags/kmp/index.html","01fb09883c351659ba735801e9585875"],["/tags/k最近邻估计/index.html","2910d21b028ae823aa56ae98cfb2f09a"],["/tags/lombok/index.html","d4aa1eafbcd13a4b7548e2b8d2fabec2"],["/tags/offer/index.html","e42ab79c319d436e95ea4e7a0f4a920c"],["/tags/opencv/index.html","18dccaa9505755ad279c12660e447dcd"],["/tags/pandas/index.html","72645bbbb6a8dcc2793d0088f5a07a16"],["/tags/string/index.html","fbc1459c0118d3f59e4a19286d9a3919"],["/tags/vim/index.html","a3400689072da9e296daa29502ecaaa5"],["/tags/vtkPolyData/index.html","d582aec9f7fb90390c80274f5acd82e7"],["/tags/web/index.html","3603e6c30cf4e216a7ba098d3d5c58bd"],["/tags/xshell/index.html","3912a51d9c110b5d50b670601bc24d8f"],["/tags/yeild/index.html","bdd9bde70f23bb3da5a0510c7b819c74"],["/tags/互联网/index.html","4293318ae823a03782d7dc717bc95a13"],["/tags/人工智能/index.html","2162c6a0a4b23fd9a3f3c43d76cf6937"],["/tags/体绘制/index.html","a87d2b37ecb774f9fcb3b11f138ec18a"],["/tags/全卷积网络/index.html","fa1a4bdd4bbfe987bf2f25cea8c8e436"],["/tags/公众号/index.html","7de7171ca85a1af0c766a56068a6f973"],["/tags/内存模型/index.html","49804b17d5ff5a2eb4908a287a89643a"],["/tags/内推/index.html","827727828af0e488e1630cd746d56e12"],["/tags/函数/index.html","506834f7dd7fc480fa10a9518c860692"],["/tags/分布式/index.html","4332cc9670beab3454922475a94b08bb"],["/tags/加密/index.html","136332927f43c66dc74ab96558501517"],["/tags/医疗图像/index.html","a6786d3a221cc6c3cea999689797e00a"],["/tags/博客/index.html","be9c0e1025467ede9cfc45aedb10343c"],["/tags/图像数据/index.html","d71073bbcd9b91c3a17acefa14dba793"],["/tags/图谱分割/index.html","3b4beb8276ecfcc28a4dfac8bbda8bbc"],["/tags/垃圾回收/index.html","8cc18a3482481b17d3e6e98e6d4eea2f"],["/tags/多线程/index.html","1df415a1b3026dfd5ad7ad019cddf2fe"],["/tags/字符串/index.html","52c53552d0da7578625fc3cf67c51600"],["/tags/小龙虾/index.html","4c10842cc16da1adf2bffc63434d27fb"],["/tags/工具/index.html","44de3d59160b6fee35bd1a6184c0c56b"],["/tags/弹性形变/index.html","25536d27fed6fa04bd93a02ce1bd6a26"],["/tags/排序/index.html","eec350def9045d7bd76eb1e9b8bb5dc9"],["/tags/搜狗/index.html","990ce0261109846c804a8ba40d1e515e"],["/tags/操作系统/index.html","2c23c647d135c52658846448ac56705d"],["/tags/数据库/index.html","1d163b7a4a46e6fe13aeb5a0b4fd27a6"],["/tags/数据类型/index.html","2c185e8f7194012e06bc9abed32d9dc1"],["/tags/数据结构/index.html","6941d0603d43e8df80d24105d42b1a38"],["/tags/最大似然/index.html","6da15b86a271b0548154bb85290603cf"],["/tags/机器学习/index.html","583f1dca5f163fc327aab7d075f3fa14"],["/tags/树/index.html","a33f2e8f34bfec0864155a9f6310310b"],["/tags/框架/index.html","722dafac01039a6087da28d87c981431"],["/tags/求职/index.html","c1ab924d7d15557bc7cc3bb5715e53b1"],["/tags/汇编语言/index.html","8971b7ba8be4a7785fd5096891fd9431"],["/tags/深度学习/index.html","58842d6283c29a4a111123cf46b2600a"],["/tags/深度监督网络/index.html","4a6d85e4854470147808d25b3dcbc994"],["/tags/爬虫/index.html","270b1a7cb040b435ff4770c6d91933ce"],["/tags/电子书下载/index.html","07a3c8e1e0903b1b015df2f8640f174e"],["/tags/科学上网/index.html","c5dd18d50bf77e6fb489bd4b5e46ab32"],["/tags/程序员/index.html","37e5d6b9cf7b7620061cff474c08db01"],["/tags/程序员面试/index.html","b8695a31b9913c07bdd8dbcea47326ac"],["/tags/简历/index.html","9e1b4ebcc0ef3ba807d104ef50b3cd9f"],["/tags/算法/index.html","86ff4907a59f098365ba76c39bf878e1"],["/tags/线程/index.html","57fd9eca0f27b3e8c30d3384d404088f"],["/tags/经验/index.html","e2e877600cc5bad3dbb1843e4aae35dc"],["/tags/结构学习/index.html","531cb61c6b30b1625c12b20728c2d16b"],["/tags/编程/index.html","c04cb1b68e6d72148c80639029d17bc6"],["/tags/网站/index.html","c7d9e9eac9caf231caf30643960b6f16"],["/tags/网络/index.html","a7675588b583acf539ed3e08684d71dc"],["/tags/网络原理/index.html","48aac3c09f5759aa67604fa874e39205"],["/tags/翻墙/index.html","f20e875f27459406934771b3ef55adfe"],["/tags/肝脏分割/index.html","c5b971b1cdd43b8d4fe454e9f7607d93"],["/tags/计算机/index.html","e256143e9573b818c9ec24d6bb211fab"],["/tags/计算机专业/index.html","edd0b78e72be46554e105ecd5ab1372a"],["/tags/计算机网络/index.html","e575836b95084258a12bf2865023c8f1"],["/tags/设计模式/index.html","aebf80869fc631eec211564cc30a13f2"],["/tags/贝叶斯/index.html","df487781c8af3a0217cfbb4df1ca02bd"],["/tags/迁移学习/index.html","278488a105422b50c68057eb2ba99341"],["/tags/面试/index.html","3598d5f4992ac97264c043ff97c58e92"],["/the-meaning-of-reading/index.html","a4841f971e769f55bd54e88e440b084a"],["/the-way-of-pragram/index.html","2a45bbd2f86910a1cd10d833b2b1eccf"],["/troubleshooting/index.html","304831ab43cb41dcf84da16588b2aac8"],["/untiypro XL安装/index.html","9c86b9737b2d6dbf79293021aa1ec9c7"],["/video-websites/index.html","5f7d1ea704098c67bd5148113235d208"],["/waibao/index.html","31cbffebe1fc588df94d11e871543535"],["/wechat-fans/index.html","ac1c5d247865cee58997624740749904"],["/window-run-VTK/index.html","50c537cabd65032ac1794dfc03852825"],["/windows-science-internet/index.html","27b3e423555fcdb1dca86554003f4dd3"],["/xshell-connect-Linux/index.html","1c68be445aeddf49bcec728373c07bcd"],["/yzhx-vpn/index.html","b02bb90796ffa2b8a8151649d0e14f6b"],["/‌Accessing-the-Open-Internet/index.html","3124296b15e95b57a6431cd903c4fcdf"],["/《Java高并发编程详解》，去大厂必看！/index.html","7ed18c731b438aa338b6bbe2ba62c796"],["/一分钟没了 1.5W 。。。/index.html","ce59d02fdf556ecb3541dfb9defb47af"],["/一条高产爆款内容生产线/index.html","1bec57e3d9746c5d26c5ea6eb060fbc6"],["/为高考学子推荐的六个就业前景广阔的专业/index.html","48f7c592ea8f4d80cf391680133b96f3"],["/互联网赚钱机器---社群/index.html","1b79abab9aa88616d92545bae0ecab7a"],["/你们常用的工作方法和思考方式是什么？/index.html","817f453f74570072d261c6df5d3fb5c7"],["/关于环境配置的一些事/index.html","c7a1020e008341cdf4a447b7470335b0"],["/准备了19w！搞事/index.html","3ee1ac1793c455bd3e7fa8fddb89060a"],["/几个很重要的感悟/index.html","6293e69cfc8e1cf6ddf8dc4f0efd9e16"],["/分割ROI篇/index.html","cbfe399c2ebd69933beef2113422cdd5"],["/分割精度说明/index.html","ec448fb24d4115cc6c14f86576b32037"],["/分块程序执行/index.html","de503bf43e82f875c42e559b0e43502d"],["/加班公司黑名单！！！/index.html","a861ba51ca94da2a0a1d86a2240abf26"],["/卧槽，上知乎热搜了！/index.html","ce1fa543610119210afa3252a7f24cad"],["/卧槽，我的小破站爆了！/index.html","c04acc084500c133bcec39cd41e5aef0"],["/卧槽，我被盗版了/index.html","98274feaa5f4db4504292380ea25d198"],["/卧槽，还有985大学在大一上C语言课？？/index.html","e2e8ef516266d34aa7f52e6c452b2054"],["/历年微软面试中出现的leetcode算法题/index.html","1de40170f0e295a8de59fb49e8d2c9cb"],["/去特斯拉试车了/index.html","6bacd466eb273b3935a5efcf2426ac4f"],["/吃苦的三种境界/index.html","4a31895c70dd69b9714b87c1a9e1cb49"],["/哪本书适合推荐给 Java 初学者？/index.html","ce9e4b1f48d747f0215b6a12dea0e3a9"],["/哪本入门级的学习数据库的书最值得推荐？/index.html","7918ef42cbef700356fb76ad2c5c63e0"],["/国内外常用的AIGC模型/index.html","8908eb2545d230738b6a39665e881326"],["/国庆假期/index.html","e2edd2acca37e3cf4f24405ee8c3186f"],["/图谱程序字典/index.html","bbdec5ba44f60a4bc50551be8a8be5c1"],["/图谱训练与分割/index.html","10e350d3182a21cf0065332249a3181e"],["/宣布一件大事/index.html","48ddc07fffa3725ef53b96c7527ecbf8"],["/小鹏P7i试驾体验/index.html","b9bcae328e70202dec6608a0a2c73cb2"],["/微信PC版3.3.0内测更新，电脑可以刷朋友圈了/index.html","23cbc1edf56c48541f0db8cbec18b769"],["/怎么更快的赚钱？/index.html","a5b3c2eb650c13b9f51e2b754554c595"],["/我毕业了/index.html","2073b3e8c199ce0563a46143ea438eef"],["/我！真！的！找到了！爱上学习！的方法！/index.html","949a98864261f63072d87ca690927e96"],["/户口的意义/index.html","2db5db4b6292594e0bdebb16bc94e180"],["/推荐两本经典算法书/index.html","10da047dde3bd879accb1679cb864825"],["/推荐几个在线学习SQL的网站！/index.html","205b6bd5c1e68945cdded56d5c9642ab"],["/搞了一个程序员成长晋级社群！/index.html","28e86f8343a82393aaa925009ad38577"],["/摘抄/index.html","bd29015b88852fc5248eb1579aa174c0"],["/暴跌30心态崩了/index.html","c5439530c442f4faa79518a8bd546955"],["/最近很火的ChatGPT到底该怎么玩？/index.html","df468e7f90feafbd8711ee2649b8d7a9"],["/有哪些好看的日历可以买？/index.html","488e136c288a830bbd03d0c2002b0bd8"],["/服务器有啥用/index.html","3afc2c6ece88346af3ebed2ba796af85"],["/来长沙了！/index.html","874e89419389e07cea926f2aac0e59f8"],["/校招污点公司名单/index.html","54f820f5b9af1590c3bd8043e5833b0f"],["/梭哈200多万/index.html","67b25e47cf0c8f53dd5b987e0fcfb41e"],["/梯形图入门/index.html","8cc98a6fe163484d3117b04cc791ebe1"],["/橙心优选，凉凉了！/index.html","c7e91ab1968741a21accd33baa138ac2"],["/比亚迪汉试驾体验/index.html","617f0d19777a11b5467528268264edfe"],["/清华转学成电，真的牛逼！/index.html","97135d787b7e18a37deec85a9a5da430"],["/滴滴程序员被亲戚鄙视：年薪八十万还不如二本教书的/index.html","3293b0080f12492ba68f8c05dcb49829"],["/社群！/index.html","672aaa387c50446ac589faf1ab046fe3"],["/科学上网之VPN篇/index.html","25aa6ffd8e0e77a2c97e70eddc36d813"],["/程序员必备的几个技能！看完你也是大神/index.html","e92d579c65e76af398b0c59d87498212"],["/程序员绕不去的槛，Linux！！！/index.html","2205d10c22c4830da2e33c6f8c9866f2"],["/蔚来ET5试驾体验/index.html","5e09e296d4996961d613cae9f0b23db8"],["/蔚来，牛逼！/index.html","f60cc036e6a35fb6df24b68614728277"],["/被录取了/index.html","5f44758ec7ca04b2dec7ad5f23e056e3"],["/被找事了！/index.html","13f901103cd2afb178e3f3dbe7aad121"],["/被拉黑了。。。/index.html","05852b54df01a2c18546cbf35774c211"],["/被车撞了！/index.html","ccc5cd4681cf9528ac47a4ab743a1cc1"],["/该如何选购固态硬盘？/index.html","58a633398b4a30197ed3e84c61682619"],["/这本书一定要看！/index.html","f97652af35631ac9bff0cc3570f9d806"],["/选Java还是C++？/index.html","daea834faeed1735643845a04fdd1d91"],["/那些让你起飞的计算机基础知识/index.html","d13ed6a30026129f3bed0d34ff787e0c"],["/靠这几本算法书，成功拿下大厂offer！/index.html","e46f27d4017d46b98f508b3d04a821f5"]];
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
