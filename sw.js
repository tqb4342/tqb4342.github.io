/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/0010-city/index.html","ed06f935e345f5629377101f3b6b37c4"],["/10-algorithm-book/index.html","764b4f9446f2f81d5ae7fb2760f4276c"],["/10-website/index.html","86b57c51cc9473b11677357f0d3fe7b9"],["/100万的小目标/index.html","7ac0015dfbae919b1b6edbb4e31ea06b"],["/10w+YYDS！/index.html","fb4bc0bc7a5b4633b6ceddd4769c20f5"],["/12-technical-tutorial-sites/index.html","8ea9b8a1b5072d357686b61b4abcc130"],["/2 6 岁 了/index.html","f0cdd5a2594fd145d5eea9745dc30014"],["/200万，啪，没了。。。。/index.html","a4b438c9ca69f25aa3c98dd96a029ae1"],["/2018ECCV-Paper-DL/index.html","368d19b22793aee22ccaeb7b8da7ab82"],["/2021年固态硬盘选购最新攻略（小白避坑指南）/index.html","e5459ec2f8ec9cc66c26f75592470fbd"],["/2021机械键盘推荐/index.html","e041bde788701056cf5db8fc17cd5e10"],["/2025-07-15/index.html","8fc5f62082f55e9b1bbb1834ad896555"],["/27岁了/index.html","454a0ad86d07e85aa0e7600667cd61d5"],["/3D-Convolutional-Neural-Networks-for-Human-Action-Recognition/index.html","05ab8c29c065cf0843bab72c2bd07fa6"],["/3D-Deeply-Supervised-Network-for-Automatic-Liver-Segmentation-from-CT-Volumes/index.html","557fa627f8b871135b4ad7ae45f04726"],["/3D-Unet-Experiment-notes/index.html","9616be2e35124a7726b914a03675d7b0"],["/4-Software/index.html","52c44724a681f711794603f06d094d4e"],["/6-website/index.html","9f90194bf7d5dfca8a29e14cac45908d"],["/7-terminal-tools/index.html","afe47475bfeb5ca02e17a47b72bbbf12"],["/AIGC中典型的深度学习网络/index.html","9e541a8950c2992594ced5b7b8b0e9e1"],["/Agency-model/index.html","c94632cbaecf74432bb46340ac008e73"],["/Algorithm-brush-notes/index.html","c9c9d3954757ea36ec89d45582be12f3"],["/Ali-recruits/index.html","c81b4fb124356ed88f73ea02be2f7b86"],["/Android-VPN/index.html","412219f618d702728d3aa747b422c515"],["/Android-open-internet/index.html","f6ce879f876814730fe876ad01b9b20e"],["/Appearance-mode/index.html","5b729fbce26be2ba6471700e05a04f1a"],["/Backtracking/index.html","0202a9b0fb0be76e2e677023d7de69f0"],["/Baidu-Sao-operation/index.html","d77e1a55004e10f4f8a2b79f18d7e46b"],["/Batch-Normalization/index.html","22e616d451384555b8c49865422532d1"],["/Best-AI-tools/index.html","9cae654013dfee1f900f3e1c67584390"],["/Bias-and-Variance/index.html","80921ed6e83d11393ca2ba0c2ef4b90f"],["/Binary-tree-traversal/index.html","882a155adee62fd18bc6cc2e764d51de"],["/Branch-and-bound/index.html","ea9b0a1241302669d9317a446b762183"],["/Buying-computer-for-the-first-time/index.html","45bb2a2f40d96dd829e3d40d20b0ef14"],["/B站向北邮道歉！/index.html","041f07312ad27eef834ce6df95f8770f"],["/C++-string-function/index.html","fcaa78967ede58f02cabefd9aa6c19c3"],["/C-Java-DevelopTools/index.html","9e3ad30c7be727c990bb050c5f5fb57b"],["/CS-Classic-Books/index.html","009b09f69df4285419dbb22a1b5cdb82"],["/CS-network/index.html","1ce5803a5456dc63d4efe2471e6e22e6"],["/CSBook001/index.html","78715db76fea0f1f53d2c30a42ef1134"],["/CSBook002/index.html","1af3fe10c73347cf212602f97fb20562"],["/CSBook003/index.html","31bb909b5dba1a3e0c9af6165017a4f9"],["/CSBook004/index.html","6512a80b4d59c3495b746f24e0666efc"],["/CSBook005/index.html","e2a7f6d84b2c46d287ab304fe9252ab5"],["/CSBook006/index.html","72d8c07d1de35f3f91c8da59707df24f"],["/CSBook007/index.html","7c0b02bd98c18f8a84a1a18e68d3a4e0"],["/CSBook008/index.html","fd29879a5ba7411c971b4d479fc6eff3"],["/CSBook009/index.html","d9d27d2f227a6fa6769247f28b08a659"],["/CSBook010/index.html","d72250b7988f27dd8ddfb5eee346e4c1"],["/CSBook011/index.html","af2ef65d2f15ff54736134a62f65f763"],["/CSBook012/index.html","dfa4b6031ae9105fd7d1670d9cfe9244"],["/Changsha-really-fragrant/index.html","5768624ba47f1e993de6e04c05c67f4d"],["/ChatGPT-VPN/index.html","aa83310ed79ec3168a64d2efb6378ed8"],["/ChatGPT/index.html","ae4845df5e8cb424d2f2741ef4a75c9e"],["/ChatGPT！王炸级更新！！！/index.html","7f38a8d37c0aa2cc1a6c4922b593e458"],["/Chrome-crx/index.html","07b45a0e0c969978c14d92daee62a9f4"],["/ClashForWindows/index.html","d5bdab766e10fbac1e4205dcd8677d15"],["/Computer-Classic-Books/index.html","47456abb1804462f8ad92d4d5621d5a9"],["/Computer-for-another-major/index.html","b477b0d10c7bd565f2fecdb0739e33fb"],["/Conditional-confrontation-network/index.html","0a3f813e50517adf1ddb1b82573e8fc0"],["/DNN/index.html","5845d4bd1d015d3a9388e424d2127465"],["/DSN-segmentation-liver-experiment-summary/index.html","e12f3930eb650a7efa41c808ac6369c0"],["/Data-enhancement-elastic-deformation/index.html","5eb81bb85df2e26d11b3f649e8fbc6c7"],["/Decorative-pattern/index.html","b22fc2a71b83e686809d1077a5e429f2"],["/Deep-Learning/index.html","b5c2e600a8a02fc5b99595f022298dba"],["/Deep-learning-and-medical-image-analysis/index.html","f22ec83403c377148c9c838db1e3b577"],["/Deeply-Supervised-Nets/index.html","bb62b64258734b0c2307572fea8bd4c1"],["/Deformation-model-based-sparse-representation/index.html","cc5ebc34d5f53e792562bc97be804a66"],["/Discriminative-and-Generative-model/index.html","4820eb236e0ffb3a9f7a4f0d8290b632"],["/Distributed-transaction/index.html","59a39032f839b8951b26ed33483f4544"],["/Divide-and-conquer-algorithm/index.html","e6d6c20b9d4abcd51f81a84579234efc"],["/Dll/index.html","d146e60e20e2e149f2626a2399f3e526"],["/Dynamic-programming-algorithm/index.html","05a0c073d086e23c05c3b1ac4691b72d"],["/E-book-download-commonly-used-by-programmers/index.html","c9fd48c4866842a8f8e07411c0d90acf"],["/EditPlus软件的安装、激活和配置过程分享/index.html","20b05900fa215a17ee444b63e90eab11"],["/Eight-sorting-algorithms/index.html","6cd76fa6f5877c9d62e991b8e8af31cb"],["/Encryption-Algorithm/index.html","4e3d581c63c39aab3739ed1bb52b71aa"],["/Eolink/index.html","b16f76bc680f7dc6a89ae690a2a086c7"],["/Factory-and-strategy-mode/index.html","47f0179fa084be7e736e35521306f26f"],["/Foreign-technology-blog-community/index.html","553692727111c514fd294bf557735e77"],["/Functional-model/index.html","d19b562ed5057b214bad35c965d99c5d"],["/Fund-type/index.html","a16bf5b45e30d8f16bff742dc87a13aa"],["/GPT-4o/index.html","25e098fefc4f6a963eea91e38f59bd1d"],["/GPU-medical-image-processing/index.html","2afe9d076ac8a10bc156818ec87a13d9"],["/Gemini/index.html","410faa77a04b1e99f3794a0575c64fcb"],["/Generative-Model-of-Unsupervised-Learning/index.html","74fecf6640742d57ba786b8a7c96fbfd"],["/Git-Learning/index.html","7ff61577ddc62b190e6d32d6bbe69134"],["/GitHub-2FA/index.html","b9b924a6f9bad9cd06d9ca261a984b57"],["/GitHub万赞，程序员必看操作系统总结！/index.html","f653a66f5dfe2340282917c8d57ef430"],["/Golang-book-recommend/index.html","9c2ebb993669123e2e30321e34c31e8c"],["/Golang-learning/index.html","5a7e9199d6f0c19a592fe2e51aed9e55"],["/Gradient-descent-optimization/index.html","9fa4b3abd432106c765d095808651f53"],["/Greedy-Algorithm/index.html","ba5715f924e82716371b0509bb727f15"],["/HK-bank/index.html","68727760d43bf2b2854d479976a5947a"],["/Head-to-head/index.html","536321989b20fc2b08e1bd8446f91b07"],["/HexoPage/index.html","ab41593b7703f48528d5e72109be0f3b"],["/HistCite-Pro/index.html","766560a6498e119e31ce1364330853a9"],["/How-does-the-program-run/index.html","b9f4d9b725ab0f2444457d9b2e58c189"],["/How-to-judge-whether-technologyisreliable/index.html","4cf6cbb9540f011f2ef3469b870bfa97"],["/How-to-learn-design-patterns/index.html","b140fe33f885cdab9101d4d36a7f2c56"],["/How-to-learn-design-patterns？/index.html","f2c3f9bf6faec04c4cd56fb76735e06e"],["/How-to-teach-yourself-programming/index.html","60682dca99614565354adb3eeca65bca"],["/How2learn-Python？/index.html","0a1e9e3f54d3cb4402762bfa6d1eeb10"],["/IDEA-shortcut-key/index.html","be8c71946cfb18e6e45f2cc6975278ca"],["/IT-interview-basic/index.html","64ca76b16511fd9919f077ef530a74cf"],["/ITK-VS-install/index.html","57bdfe0c330154875ac3cc0cd359fc46"],["/ITK-VTK-ItkVtkGlue/index.html","dda66d00bbe23d48f5d44b2323ae27f7"],["/Image-processing-plus-noise/index.html","60a36eb9103cfe7ec06b4630d1ff23a0"],["/Inception-Going-Deeper-with-Convolution/index.html","e4b1ff0e954f0accf6b7178edf35664b"],["/Java-GC/index.html","d514e890cac2850a65381f60a5f44ba2"],["/Java-Servlet/index.html","765f228073c48895910e4808397a2b5b"],["/Java-array-and-collection-sorting/index.html","0e34d2132b9d977352e79dc789c42a3a"],["/Java-development-tools/index.html","61e508ee9777dde026b1abb87038f1fc"],["/Java-eight-data-types/index.html","931e73b70e20439ba013a2c6f57d0951"],["/Java-interview01/index.html","551904868e9c8a6dffb7d41781159e00"],["/Java-interview02/index.html","e0178fbcda819aab12f22768fed465ae"],["/Java-interview03/index.html","317153107064264dc8149cbc562d3744"],["/Java-learing-map/index.html","0a0cf0e036db96013441708785bbedc3"],["/Java-learning-route-map/index.html","cbf12c1ce34f287442cad6585c955c3d"],["/Java-memory-area/index.html","04d4b25ae33d3cbd55b13c946f8fe88d"],["/Java-memory-model/index.html","9a0b85d1d04f1592b1cb3b6ce540e2f5"],["/Java-multithreaded-learning/index.html","36652e947f6dafa32a2a869d3aeab5cf"],["/Java-project/index.html","76a45c0f6b5a02328544935cf035b6f9"],["/JavaWeb-Chinese-Garbled/index.html","9aab5d6e767311bef3bf716ad61c5e4e"],["/Java还是C++？/index.html","afe9e23a7ffa96bb64a34635b848fea7"],["/Kaggle5-step-guide/index.html","43e46995a0d7be464c3e89daa29ddf38"],["/Knowledge-points-of-Java-garbage-collection/index.html","84cd30e04fc972db01e03d217d21e745"],["/Layoffs-and-Hiring/index.html","2890a5c42d58ffb4a33204d77cca6cff"],["/Linear-regression-of-machine-learning/index.html","57ec95ec8833cc378f763b62debb54e2"],["/Linux-Compile-C/index.html","5ce0241041538e23a5e18be97225ea50"],["/Linux-ITK/index.html","da15c4273d6f675f407d0244f43419eb"],["/Liver-segmentation-of-sparse-components/index.html","9176b9a64349f391933617f361bff241"],["/ML-EBook-paper/index.html","49e0e34251385273a7f7b8d8ae1ddc9f"],["/Map-uses-multiple-maps/index.html","0f4ebb41d746326b225b22e595aa7618"],["/Matlab-Graph-cut/index.html","4c3a1256cf4e5c55238a95cda34ddd40"],["/Maximum-Likelihood-to-EM-algorithm/index.html","c06cdeaae753c31463626f03e970c357"],["/Mean filter and median filter denoising/index.html","be996c64a8936f7aef72532377d172b2"],["/Medical-Data-for-Machine-Learning/index.html","f681347ef1672c8b81d4ca0848df72a8"],["/Medical-image-analysis-deep-learning/index.html","66ab14047f6c98ce03907d3e8b2eaa7e"],["/Medical-scan-image-processing/index.html","dfa336957041fd6e3cc2bac9529624c4"],["/Merge-sort-algorithm/index.html","da0fb6ee7ec18b315dc1008dc7a5e6aa"],["/Monthly-income-2W/index.html","95f5a758941d17dcc64f7dd9875e6ef7"],["/Mysql-database/index.html","24770978194e7a10b62a13b85e3bdff0"],["/Neighbor-Embedding/index.html","28ed41d417d76b16da8b24354e00b948"],["/Neighborhood-approximate-random-forest/index.html","081c954c1527d1b8f4c3f446a8ceaa9f"],["/Net-and-official-documents/index.html","b63386f49bd243913d24dc592caaac57"],["/Netflix-VPN/index.html","251bfb6b3c604f1fec8b005f3cf7ffb1"],["/Network-principle/index.html","f72cf6d22d881dea377ad186a682feef"],["/New-Hong-Kong-stocks/index.html","d6ac749ce34e1ce50bf0ab7955829795"],["/Nice-to-meet-you/index.html","d462abc90f2b89c33101bf43c1805c75"],["/OS-processes-threads/index.html","0216514e1a9bf68d0b53da5953983f3a"],["/OS-run-environment/index.html","c17eea25b3a69016f4c337242ced410e"],["/Open-Internet/index.html","2e3e3946664145b67a3b90fbafb94682"],["/Open-Internet2/index.html","9ce4e67d690ebde0e42a73ca8c702602"],["/Open-source-community-and-rewriting-website/index.html","d27a038b66ab680aacaee51f42a6531f"],["/Panoramic-image-stitching-based-on-SIFT-features/index.html","4f2eca718794eeb4068f2b07a1d79919"],["/Parzen-and-KNE/index.html","e0691117ce9c33b06a8bb8052eadaaab"],["/Personal-technology-blog-site/index.html","0e6860d176d786d1e14db1adcf831047"],["/PicGo-Gitee/index.html","44548b2fcd3db3d34073d157e46a7d96"],["/Programmer-treasure-chest/index.html","05c285ca78fb8fd1f6a955ed002f3bed"],["/Prototype-mode/index.html","12be205811463ac1acdadd2b3397d72f"],["/Python-base/index.html","08e1ccf01bc72d0fc0298b72250596d6"],["/Python-crawler/index.html","a88ec7d0d63c12ecce9d22593c34576d"],["/Resume-revision-suggestions/index.html","461b0a9cff33493f3d38c9ec7ac1f73b"],["/SEO01/index.html","ddc2e3eece37511c8953d7ead8042604"],["/SEO02/index.html","875a05033d50eea25c13e058bd5a5267"],["/SPHARMPDM-MEPP/index.html","aa1b33dab32b744d309cb6564dda3b72"],["/SVM/index.html","b183dc1cd4210f6c7244f6a73fdcbf5d"],["/Seata/index.html","165fb5b2f66baf90a3cc2417b111c128"],["/Semi-supervised-learning/index.html","2d8d5f23eb95a46b85e659843ba16756"],["/Sequential-model/index.html","b66fe3407aa7698aa7758a3e66f11bd1"],["/Shape-Based-Human-Detection-and-Segmentation-via-Hierarchical-Part-TemplateMatching/index.html","82a960227416993cc34986c7bc68e252"],["/Spring-basics/index.html","c4930c088b7526626694c0244396325c"],["/Spring-integrates-hibernate-Struts/index.html","48e3e687851b004a4476d1541c77ec1c"],["/Structure-learning/index.html","e43a1970e3d38b8dbaa4eb8fe1a6fa02"],["/Suggestions-for-self-study-of-computers/index.html","ddb24b7a9191e1cd2b990bf40d8dea8b"],["/Summaryof-HongKongStock-Account-Opening-Links/index.html","bbe1c23ea4311d60bce773e19edd3a11"],["/TCPIP-detailed/index.html","b5105295d70266c02d0b38dd770cd0ec"],["/Telegram-VPN/index.html","ac3c2fd0301c774756bb5c91be181fa0"],["/The-essence-of-shopping-festival/index.html","86b5638175f331a60060adcc86423960"],["/The-most-important-investment-in-life/index.html","c4e155ad9ed9eab4f06c28a840a008cc"],["/The-most-successful-nvestment/index.html","7490e79e30e329c95c45dd18be84ce52"],["/Transfer-Learning/index.html","7a2c75ec18fcdd080e1b602f5aab1d2d"],["/Transfer-to-computer-major/index.html","f1dc1c24fb404f48cfd9c431ed534b9e"],["/UNet-Convolutional-Networks-for-Biomedical-Image-Segmentation/index.html","35cd0d3a2fcc7bf6d9893430e7246b01"],["/Ubuntu-install-sougou/index.html","75da922f6b46118daa90bca03579727a"],["/Understanding-of-paying-for-knowledge/index.html","335e5c5764a15e1bf47faf67c069ccda"],["/Unsupervised-Learning-Linear-Dimension-Reduction/index.html","0893cee91a82a326aa74d46d3bad3535"],["/VPN2025/index.html","cde34b32b3b1688ce80d6be962b45d24"],["/VTK01/index.html","372f58c81f9b981f040f181fe1816368"],["/VTK02/index.html","31f59282ff2fa63954865c1492aef607"],["/VTK03/index.html","5ffb2d4fb2fa9e6dfe95188e81eea2ac"],["/VTKRead-write/index.html","706d81584252754720fcecb0c92b6088"],["/We-are-all-good-kids/index.html","9c7ceb6bd46affec67ae23401690cdd0"],["/WeChat-80/index.html","61abff0a74054940355f219b08c3e51a"],["/WeChat-red-envelope-cover/index.html","d95a12c281ef1d55a5aa0649af42ae78"],["/What-is-crawler/index.html","d78f88fd133551979fe770b284a0f66d"],["/Win-OpenInternet/index.html","d7511d7d7eb32a6f32a3886dc0ad7f6b"],["/Windows11-2kfans/index.html","83ff8997bfbce4255972ebee30590cc2"],["/Word-Embedding/index.html","9f352a1c7327b3b18b1dafd55d7fdf60"],["/YuanShikai-and-his-Beiyang/index.html","c583b8426041637d14c73879e7690b0f"],["/Zero-copy/index.html","a2b2658c9db9f62e250760d1a43a366d"],["/about-keras-model/index.html","a6e496dc53d521493806fcc025a31dc4"],["/algorithm/index.html","cc05730a7d91b5ecbbaa0e78a1365a81"],["/alibaba-Java/index.html","f19f0e99f111bb2de4f519c80cc082d8"],["/archives/2020/01/index.html","ac4992c0f805c86f46d5e22c452bcf8f"],["/archives/2020/09/index.html","16544e9c5948cb82dc738ca4cbb699d2"],["/archives/2020/10/index.html","4a534ed088d8f8a1a22f545368bafaaf"],["/archives/2020/11/index.html","4523f66e7b45bf107f9e87aa1e9c754e"],["/archives/2020/11/page/2/index.html","e378901fe97999518848862e7722307f"],["/archives/2020/11/page/3/index.html","dffdee57d81a65fd5e0fcd09faf304cd"],["/archives/2020/11/page/4/index.html","67fb629e67aece0a6e93c96ed9b99eb4"],["/archives/2020/11/page/5/index.html","019cd8fa6e8d56ea60b3e4b961fac1f9"],["/archives/2020/11/page/6/index.html","ca643c34e934f6bbadf60efd3373fced"],["/archives/2020/12/index.html","50d28804461f86440a486036b9d585a6"],["/archives/2020/12/page/2/index.html","cf725c9113b71894b44533935fe2264b"],["/archives/2020/12/page/3/index.html","241d143948ce266c9fdb1653afad932e"],["/archives/2020/12/page/4/index.html","861943f73c1a61b2492897b2f3cd4400"],["/archives/2020/12/page/5/index.html","fce30a949e7d8521cd4eb0c434106eca"],["/archives/2020/12/page/6/index.html","9c33e01ad532afd33a67f084c16638ce"],["/archives/2020/12/page/7/index.html","0e5dc88b535e3fa80f33ac3d4eabd112"],["/archives/2020/12/page/8/index.html","f94946dc9b1cc61dd70753e7aadfafe7"],["/archives/2020/index.html","4d7d5ba13d7ca04bcb0708a9e0705f00"],["/archives/2020/page/10/index.html","07e21498b11d2a45f0322fe599b6cf08"],["/archives/2020/page/11/index.html","66181ae7db30e43d036f901f2bde4a84"],["/archives/2020/page/12/index.html","a1f16dbfccbd50751b2eddd447005b7a"],["/archives/2020/page/13/index.html","bb4bf382074f358ac362eb2aee5b6fd0"],["/archives/2020/page/14/index.html","9d5670ce6cba64d402395ad16bd9d261"],["/archives/2020/page/2/index.html","a42be3b2186980cd25b99ff10acc6e39"],["/archives/2020/page/3/index.html","3bc457770d1ff01deb42cb88a8ba0a4d"],["/archives/2020/page/4/index.html","82d10ff506ff69ed3a2eed3d2c19200e"],["/archives/2020/page/5/index.html","8ea20ad868622e2eab7c40aeba293831"],["/archives/2020/page/6/index.html","885de2864fb5f48141527cb4a533e3a4"],["/archives/2020/page/7/index.html","7c278fd072ebfccba81a887a64a216c9"],["/archives/2020/page/8/index.html","0f3982ce0de89afff22df2b5168e581f"],["/archives/2020/page/9/index.html","8e4645201d70282c55c92693621024d1"],["/archives/2021/01/index.html","3ff105b152cfcffa544ab92610293104"],["/archives/2021/01/page/2/index.html","37a29b4808448aa7c43195534018cc08"],["/archives/2021/01/page/3/index.html","b26d65de95d9b0d5e1789f81dbbef1ff"],["/archives/2021/02/index.html","fe904a734f660ff18a99528be88c034b"],["/archives/2021/03/index.html","4d56a9cbe7da73183e86ff04df1a35f6"],["/archives/2021/03/page/2/index.html","df840a4909da83f97e64d5366e81efcf"],["/archives/2021/04/index.html","cb74447e242fd34b4eb90c349184f95e"],["/archives/2021/05/index.html","9b011d59d55c6ecfaffd8dfbf1e5a650"],["/archives/2021/06/index.html","9b217aa581f5c3f95dabc3c3bf302402"],["/archives/2021/07/index.html","ef948ed5c3706840d1750215da276983"],["/archives/2021/08/index.html","1c910751da19b648c9f88033e1998d3e"],["/archives/2021/09/index.html","4a3a68d9afc0896c5e867a0779ce7168"],["/archives/2021/10/index.html","9d821b342150674182cede4594765081"],["/archives/2021/11/index.html","56fea133fa7e4bf8ac84aff9ad0ff28e"],["/archives/2021/12/index.html","d5bb2a5fca2de43ff985421c73e07a5c"],["/archives/2021/index.html","5cb7c071f7c9618e326c32a2cddeddb0"],["/archives/2021/page/10/index.html","ddd091e2e582cfdf296ba572a1b3d15e"],["/archives/2021/page/11/index.html","30a8719189bb25c662614f9ef2648d0b"],["/archives/2021/page/2/index.html","b238fb4815a62a455d4f2fb4815343f6"],["/archives/2021/page/3/index.html","56d2813cf6a3d753321c3a102bcb6fda"],["/archives/2021/page/4/index.html","855a6d9461f64828095a2248757bc96e"],["/archives/2021/page/5/index.html","78c7273b61558935f35ef014643d13f8"],["/archives/2021/page/6/index.html","368297f68588e3d908b58b22ae69b1be"],["/archives/2021/page/7/index.html","c2f0bb0efdd3d6074b1cde177c4c006f"],["/archives/2021/page/8/index.html","8be492af52044dc6cf3d960c82acf270"],["/archives/2021/page/9/index.html","6e1df2e9e50c597be9ad8cfdc5528173"],["/archives/2022/01/index.html","0838aca2d95b5e5bfb1063e8aac6fa4f"],["/archives/2022/02/index.html","f0941804a6c9e7b6f6ca6ca97d4fc6a8"],["/archives/2022/04/index.html","58fcf2cda7a4f65f8ffa079e0e8aaeb0"],["/archives/2022/05/index.html","7d6dc132f73d35f5d16afc0bbea83b54"],["/archives/2022/12/index.html","14f914eb5b26d7a423a01d2945f36029"],["/archives/2022/index.html","e657dda02e73aa921762388a7d2bcb37"],["/archives/2023/01/index.html","fd1ef94e2af78bd4bfe54676e923b4db"],["/archives/2023/02/index.html","28145294552dc6804e84074b444cb60e"],["/archives/2023/03/index.html","852f7538b014a4d045ea1e0498029658"],["/archives/2023/04/index.html","2701559589686f3acbbf2401e53c2796"],["/archives/2023/06/index.html","43cbf66436ccc0264de8c5bf475f8bec"],["/archives/2023/08/index.html","1039ad19d3f26e37afac6b6761bf31a1"],["/archives/2023/10/index.html","1122a2fa9649b145c9e5a3ba08cdb308"],["/archives/2023/index.html","59c76e9746af0423eba1893aff8e362b"],["/archives/2023/page/2/index.html","4de62d31ac02c880be6007d990852b81"],["/archives/2023/page/3/index.html","55e00285c58892e8b4cfe3f9c06de512"],["/archives/2024/01/index.html","efc77df6e62e6e5e8011b37d42478478"],["/archives/2024/02/index.html","4c449c191117fb28a52a92cdae0f0732"],["/archives/2024/index.html","2786d00e26492fbd65bc858017c28b08"],["/archives/2025/06/index.html","a8f3f2f6253cebf550a144bc5a8788a6"],["/archives/2025/07/index.html","d25beec8c153160d6b05dabb9a683c30"],["/archives/2025/08/index.html","b208f5229b63b5e1b1342d30881c0fd6"],["/archives/2025/09/index.html","858dd6f08e0e2b83a1a498d998ed81e2"],["/archives/2025/10/index.html","5aaf5c98aab72128e98d86822fe87bb1"],["/archives/2025/11/index.html","bba73191386660d1628f18eb9c804c21"],["/archives/2025/11/page/2/index.html","8b0361bfd632bf2795faafc43226cef7"],["/archives/2025/index.html","55bbfb280835ba51583fa845b78ca945"],["/archives/2025/page/2/index.html","f1c24085756778dc80244e4abb03651b"],["/archives/2025/page/3/index.html","911c9d72191abcd05646a942f8505ad2"],["/archives/2025/page/4/index.html","c7be1334106c35ad924b0b573ed93f07"],["/archives/2028/02/index.html","f9c64dc29143daace7e92041fcdfc193"],["/archives/2028/index.html","31516b3131f245b3e08f3ec57b2245c9"],["/archives/index.html","7bddcfa4243a968f959f2fe819780619"],["/archives/page/10/index.html","f0a58326a8679f9d6882c99218ff43a1"],["/archives/page/11/index.html","09bd731aaa93c61a4e30bed0401f4875"],["/archives/page/12/index.html","c737e9183c298a3dc2b823ab63847ca9"],["/archives/page/13/index.html","12112e70b1fcec86ab48bd7ed92f9a68"],["/archives/page/14/index.html","f309b720a7456a9d3e05d3c28938b5f4"],["/archives/page/15/index.html","241e6b80e7db733e090c2f2230cd4426"],["/archives/page/16/index.html","456d67c49c7b20dfbd018d37495fa0c8"],["/archives/page/17/index.html","4686013f36aaf03948b8f500ba0b4818"],["/archives/page/18/index.html","0ab883d2c835162e1183d667e826360d"],["/archives/page/19/index.html","fd71266f1f85b3ef3516144d208fc51f"],["/archives/page/2/index.html","37976619cdb82e60b65b17e0ae7d3cd8"],["/archives/page/20/index.html","75b6187a8dcc3b7ff9ab5fd531bf85b3"],["/archives/page/21/index.html","2d5b9a3712e57004fbed154b09701a07"],["/archives/page/22/index.html","708b7ff60ec4889b324e06f1a043f070"],["/archives/page/23/index.html","822943896ed3e2b0688593cb32763eae"],["/archives/page/24/index.html","08306b2788f3caa9a324b57aa46feb8b"],["/archives/page/25/index.html","0fc401d0f66cb78eebfbc248ac1aa4f5"],["/archives/page/26/index.html","3143ad5a62d540d1a739e6c02822fcb8"],["/archives/page/27/index.html","da2fb57c8c2f129c85f9e05bf6f7ac2e"],["/archives/page/28/index.html","73c4735ad3fc2b71d0c2156303764781"],["/archives/page/29/index.html","30b88b6805766d8f5edc21e7a959dd2c"],["/archives/page/3/index.html","84d7ff7cb088c16740e6200f3443f2ae"],["/archives/page/30/index.html","4f92ab64407319a94a3582268323dbc1"],["/archives/page/31/index.html","8142dfaead886c0ad94e21a1b8cf7a3b"],["/archives/page/32/index.html","1ca14c301ee8971bbf2527c8c3c5f36e"],["/archives/page/4/index.html","3d904053dc578e13769406817e5585c1"],["/archives/page/5/index.html","93c5a01e83d2f799ca8eb5f6bd7aa536"],["/archives/page/6/index.html","6b61ea298a9ea28c99148950af74d479"],["/archives/page/7/index.html","767bf0e427b11676f3354dc52174179f"],["/archives/page/8/index.html","f4c8e55c58ab4b6f3856c946fc0e2a32"],["/archives/page/9/index.html","2fce5eb320e7dc33e5a3a7d551246496"],["/baidu-search/index.html","df32e397423b82b2c18abd87ab87023c"],["/baidu_verify_code-Hh2fKNlEB1.html","2c6ba6543f4e62be53dd9a683c464cde"],["/be-a-programmer-instead-of-a-code-farmer/index.html","f7de93b48b1694b5be2f41eee79c0464"],["/bought-a-house/index.html","18f0d983b14b314255a7a3f62bbaf133"],["/categories/C与C✙✙/index.html","00ffe12c4447b053a2977be9cd5896a8"],["/categories/Go语言/index.html","ce80259ce32d490caaac95c9058d85cf"],["/categories/ITK与VTK/index.html","6342d240d2758331333f53ac22ba4665"],["/categories/Java/index.html","69f1491a455d8d4e7e70ea2ab45b7c1c"],["/categories/Java/page/2/index.html","b41edc2420913cdf88135cb1baedfb9a"],["/categories/Java/page/3/index.html","625def3c9462e5f29cc5fde9246d4682"],["/categories/Linux/index.html","504394c907bc33fbd0ca71377a9825eb"],["/categories/PLC/index.html","b45d8bbb33062e955553e5e43559b5fc"],["/categories/Python/index.html","15cd81bd9094c5627138d84c98f1ffee"],["/categories/SEO教程/index.html","7d1dff1007605dcb97389941ce52e0ba"],["/categories/index.html","3fcccc8f6c229dc1c6618999a0ec0b38"],["/categories/图像处理与机器学习/index.html","63ede99a3b36012c5e2a8ab0180c041f"],["/categories/图像处理与机器学习/page/2/index.html","1783f5527efabc19afc69beedc87c288"],["/categories/图像处理与机器学习/page/3/index.html","f8f6ca472f9f8ab4b64bd5df061cc487"],["/categories/图像处理与机器学习/page/4/index.html","efcfdfa86548ac9ae836d775b7de04a3"],["/categories/图像处理与机器学习/page/5/index.html","e630400aaaf07c6ddb60e85b0d7290a2"],["/categories/图像处理与机器学习/page/6/index.html","019f9a39c7bf6b639c32e6602bad4291"],["/categories/工具/index.html","748a9b3916dfe222228aeccb0af03155"],["/categories/工具/page/2/index.html","9e27952d4c2322895c8499ee9671d2fc"],["/categories/技术以外/index.html","833ded775e44176e3b1f28c67eadaab9"],["/categories/技术以外/page/2/index.html","9656251affff4e373f6fbda5db482f6e"],["/categories/技术以外/page/3/index.html","42804e5c9c83e2392680d1e97eb0b291"],["/categories/技术以外/page/4/index.html","ab15f94b841c43fedb7cc0dac992cfec"],["/categories/技术以外/page/5/index.html","ad8b0f709220c932c8e42270e8e6d18a"],["/categories/技术以外/page/6/index.html","52e59a75553fb02c1f31f919ebe65340"],["/categories/技术以外/page/7/index.html","a2469db8ddd8ca2fd2d24e8796fef9f3"],["/categories/技术以外/page/8/index.html","382fe57680b26a9aec049fbe034f1c58"],["/categories/技术以外/page/9/index.html","7cf0fd068f2371f3d7291f271b8ca803"],["/categories/数据结构与算法/index.html","de2b1767a25cba706aa5f261ba42ede7"],["/categories/数据结构与算法/page/2/index.html","6590653bd9c5a3c525ac0c757be023f9"],["/categories/科学上网/index.html","ed4b2454dcbdea521cfe9a71ab34968e"],["/categories/科学上网/page/2/index.html","98627ac6c0015a96a181bba51f9f08e9"],["/categories/科学上网/page/3/index.html","2d05222c969f757075597b98362e2b9b"],["/categories/编程经验/index.html","130cadfe18b294e824b8da674b2ed766"],["/categories/编程资料/index.html","6088492ecfa56b52542bd8b5ac9710df"],["/categories/编程资料/page/2/index.html","b9d141a0394e74f20299b95b602c544e"],["/categories/编程资料/page/3/index.html","26c842bcf8b4898361b34925c6288b89"],["/categories/编程资料/page/4/index.html","0e1cd2f8d322066df8ad222eb44f3dee"],["/categories/计算机基础知识/index.html","9f5b93ecf20a744c86785e1221e4d6c2"],["/categories/计算机基础知识/page/2/index.html","99e27bcb23a51ffab64636a5f5f5f6f0"],["/categories/设计模式/index.html","9586ef8c1b8372e4e16d32422e37aff7"],["/choose/index.html","f06c566bdcb64fb703949513aca1bcbc"],["/choose2/index.html","6f8e9a9575559d3a8239b9f5272f8921"],["/chrome-crx-intruduce/index.html","bf5b650026f020494001a342450c8f0a"],["/clashvpn/index.html","17bb56ff5522977b32dd55f11f31d73d"],["/coder-blog-website/index.html","391931d14cefe9d96245cdecbc20f5ba"],["/coder-source/index.html","5d7836324469078825c25eeb25457d3c"],["/coder-videos-website/index.html","3b6c7fa9aaf6bc48c4be61a5f1d3b2c8"],["/computer-book/index.html","8e280e84cdb1c3c6d5d40c2550d6612d"],["/computer-censorship/index.html","cd4282ef0da49353bc54558a37b8e379"],["/computer-network01/index.html","37557ae3c79d2a0d361c3ab8a4f3e463"],["/computer-network02/index.html","d24fc65aa86276a12c39c69e7a16c185"],["/css/main.css","bc32ad34ec4990d934c3c647bdb62f79"],["/database-Mysql/index.html","9a17148f7d6693ca4274a430321c714a"],["/eclipse-lombok/index.html","eb773e4fe41e9b14c405196a591ea56e"],["/fully-convolutional-networks-for-semantic-segmentation/index.html","9d31d383e89f855fc30568a4b9969de3"],["/great-firewall/index.html","10931217db0bab6d471a8eb13cdfdd6f"],["/halfrost/index.html","776cdcb20fc58a40e79f5e0e4d44845a"],["/how-to-signup-chatgpt/index.html","cda753253fcf4bea082aba70dd74aec9"],["/how-to-use-Gemini/index.html","8f4b3357a8a3e7cfbc0808795c791d78"],["/index.html","323ba3025820ec10f38af5acddd5c718"],["/ios-open-internet/index.html","b1edb8391ba32dc1e1d799e1d5cefc5b"],["/iphone-open-internet/index.html","4b3ef7eacf795a171bb99b7c3d5dbf01"],["/itext-makes-pdf-form/index.html","08600ea55b337ef4ddd638526e8942d1"],["/java-Set-Map/index.html","276635cd02a33661d5057180654e8d5e"],["/javaweb-server-error-codes/index.html","1cdf573a36d828d824570338e3d8e550"],["/javaweb-source-code/index.html","58fe8064191ee2b7cf1c60d440ef5076"],["/js/lib/busuanzi.min.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/js/lib/lozad.min.js","47904d34a224931dd1b615c59a3dbe3b"],["/js/lib/prism/prism-coy.min.css","0ccad54d95845901ead59bfd3ecceb14"],["/js/lib/prism/prism-dark.min.css","a4711d2957d6605eb5682bdd228cf123"],["/js/lib/prism/prism-funky.min.css","efedcdccd7a9ab342d2d9cacd24920af"],["/js/lib/prism/prism-line-numbers.min.css","38e22e790c279bb56f9ec4b90a2a2d58"],["/js/lib/prism/prism-okaidia.min.css","5ac6f9de996fbec68aaa106dfb16e061"],["/js/lib/prism/prism-solarizedlight.min.css","ecc7e64d039873ffcf7fb27babdaeb5a"],["/js/lib/prism/prism-tomorrow.min.css","456af2a14ae4f5089939d5904ac40fe8"],["/js/lib/prism/prism-twilight.min.css","ebb5c355332a8cf9a1ce37a2a69d678f"],["/js/lib/prism/prism.min.css","a5234d614834658887cec6a9515890f8"],["/js/main.js","052d2b299d9c750afea8df0b802ab7c1"],["/keras+TensorBoard/index.html","babf705391ff93991ab977d9fffb69c3"],["/keras-beginner-guide/index.html","36c8acac01281c147d226aac7ba4dfc2"],["/kmp-algorithms/index.html","3333199e1fc2e01cb3c388fb668cf1e8"],["/leetcode-Java/index.html","2235a7ad810966b6882ae501076c53b8"],["/links/index.html","4d97bc0276d99affb72a1a257552181a"],["/linux-java-opencv/index.html","0f05045e0a6dcbca3a5f0b5b5589ee32"],["/msb-source/index.html","c6cdcecdde0b7edd9e7a42eccd8a2daf"],["/online-BUG！/index.html","aca43ba8367f96bc6c7fa398a8a943b0"],["/open-app/index.html","f8fd105aa3ce294f37ea932a20b3d74a"],["/page/10/index.html","df507a952a9dfcf35136207166a97a45"],["/page/11/index.html","64eafbdcd634fa7f613032b3ea95a69b"],["/page/12/index.html","545b8afa76a94fbbfa414a22974531d4"],["/page/13/index.html","3728a26dd30fd8467e6cb680b3bdf1f7"],["/page/14/index.html","c9a9321e42e4bbe7509567d62340ca1a"],["/page/15/index.html","533b83ad029670043f0751d9c19646d6"],["/page/16/index.html","6307caae519f1a4435f8a5e9b6f995c7"],["/page/17/index.html","05c4776e5ab99da9a0c6b396ff938eea"],["/page/18/index.html","9c8b9bdfcda5bd8c40c1de37de5ea7f9"],["/page/19/index.html","bfee23c76d0c90e49128cbdb4575d7fb"],["/page/2/index.html","76fe932c1fdbaf5d5f76b573a2426203"],["/page/20/index.html","cb2498b034f37e24f99077efe91be715"],["/page/21/index.html","2ee9d349db4bcbb4ba894a0f6d4f51b7"],["/page/22/index.html","3cff99f1ede380da7db68275ebfde2c0"],["/page/23/index.html","994da23f40216fdfbee9ad77df36d40c"],["/page/24/index.html","e59baef5fc00178f97ce9b0aa070e13c"],["/page/25/index.html","054000fd2931b4a69b31ce16113b34ad"],["/page/26/index.html","c0bbbdeeb8bf0bad5f0d55430e0ea9d0"],["/page/27/index.html","e48078bb2a9a324d45d995739732f3a8"],["/page/28/index.html","7626b3b07062704ddf79e81f1d4a44f1"],["/page/29/index.html","d4e26999142e564884ca206f2e4660cf"],["/page/3/index.html","a797ea4df5aa21a13fb71d485be94824"],["/page/30/index.html","a683787f594dc6376c64f31563bf72c9"],["/page/31/index.html","ef479b51db5bb0a0a2ee2859f9178cc3"],["/page/32/index.html","afcd4d73d3c5538c3ddfef90198cd777"],["/page/4/index.html","61121d173d044458af84aecec9cce221"],["/page/5/index.html","8983a1d8d69f7e6f730736602052c0d0"],["/page/6/index.html","f1c95b442361b492638e8e2c481acbe2"],["/page/7/index.html","9b61f3d62e777fef56be80689afcb217"],["/page/8/index.html","8b33ab8e1266433d419af351fde00249"],["/page/9/index.html","82807a2ffc488758eb00fb0e5799ec58"],["/pandas-data-preprocessing/index.html","9c1b75416a6e7e0d292951a023af4258"],["/phone-win-open-Internet/index.html","02af8b7547c7e592285eedf5ae6b5047"],["/popcorn/index.html","7737faf39d8df787251caad2bc74c854"],["/python-Blog/index.html","96203d0924168d0687a31dc0ca130727"],["/python-yeild/index.html","be1920e078ee13c356d5aa77896aadc4"],["/python爬虫教程/index.html","ac38b067a4cc16d5dc1c34656fffd398"],["/software-copyright/index.html","8c3c073e42a666c2f2fcf3fdaa80ff3f"],["/sw-register.js","a9d3962af831a29bc1ab46bf9e138748"],["/tags/AI/index.html","30fccb4455d2a717cbaa8ec7d970f42c"],["/tags/API/index.html","69262f0422067d1cd6dad613c2e9fd3c"],["/tags/C-图书/index.html","5cc6bdde191842d637ccf7e9129b48a4"],["/tags/C/index.html","b8fea052e8949db7f22c62aa15de5dd2"],["/tags/CNN/index.html","18d409664db124a7730dd73ff1b3afe6"],["/tags/Chrome/index.html","eb4218f5e2cf2d360087c02fe4e6d742"],["/tags/C✙✙/index.html","e47976ff59bf3404e940a96090be0609"],["/tags/C语言/index.html","a699a9ff1ac166f48475aa6c7497131c"],["/tags/C语言图书/index.html","8f59e543b548c13ca26eb0b8b25970b3"],["/tags/DSN/index.html","359ea45a69ec07f394e0cc4e8f114d84"],["/tags/Dll/index.html","6cbed2c46ab6d8afdbe4c06165935721"],["/tags/ECCV/index.html","a2b9460b7554cf21c1ab57d2ed1a7be5"],["/tags/EM算法/index.html","b9fa88c68efd4f003c422d426a9a1d51"],["/tags/Eolink/index.html","520fc4158bf74c45973f5baa7babfcd0"],["/tags/Gitee/index.html","3d38cb5d40f2088c05f70130c3fc7b50"],["/tags/Go语言/index.html","0e1e6b226fcde3b943f8eb04c9472425"],["/tags/Graph/index.html","31bdc60c023ed4ba861259a352b6a227"],["/tags/HTTPS/index.html","ea0c2fed1acbfbf178bdf714e922434b"],["/tags/ITK/index.html","6ba252ae1962692f78e08283fd36b4a7"],["/tags/ItkVtkGlue/index.html","84a897fdddcc1b77ea3a2629c9a74473"],["/tags/JMM/index.html","39c309936c06689fc0eabf3154368048"],["/tags/JVM/index.html","7c37b949dd248586ad805fb6ff7d0f9d"],["/tags/Java/index.html","5f99eacf265461015aa4b8315a3f00ad"],["/tags/Java/page/2/index.html","9a8198ab5b0fd5c0dfbb757b480eddc8"],["/tags/Java/page/3/index.html","b8e2a9a58ffc21c8b80cdbdc20132fb8"],["/tags/Java图书/index.html","84c36902253a0989c028208d9c00d99a"],["/tags/Kaggle/index.html","b079ad61efc2460ca5d4dabac1f64dbf"],["/tags/Keras/index.html","961d639a498a8358dc7fc8e61d3c7040"],["/tags/Linux/index.html","57d84c31730a2e1676c23efee0fad9e4"],["/tags/Linux图书/index.html","835bef1a9c059af4e131223b2e797d17"],["/tags/MEPP/index.html","b489cc916e7875432190cd067c62be84"],["/tags/Map/index.html","c36d10ebccd2b78da5f6733a58c3f571"],["/tags/Matlab/index.html","64d25bfb5f8de2b8bc1dbab9f4b0ff87"],["/tags/MongoDB/index.html","c7ca58cd75fe8fa0920e7fbd5747667a"],["/tags/MySQL/index.html","2bf77c9fc225fafb1b47502b3b9336cd"],["/tags/Parzen窗/index.html","05f64ac73edf7d22136a0626ef990646"],["/tags/PicGo/index.html","bdf7ded1ed7c816ea2eb408a8a5d1d3d"],["/tags/Python/index.html","c11832fb7e64f061ca6e661a3f4ac502"],["/tags/Python图书/index.html","634ea4e8383e4dd6292d8d602028fde3"],["/tags/SPHARM-PDM/index.html","09c11ff6ed24d5f967c78972fee89107"],["/tags/SVM/index.html","1a307d3f97f5fac7e37591d589554fee"],["/tags/Seata/index.html","4991c3677bfc3fde21f174a3730baba2"],["/tags/Servlet/index.html","7db3deff304f4c6b05c108bb5895ed46"],["/tags/Sping/index.html","069d19ee0ff9f13b2cd06540b80db79e"],["/tags/Struts/index.html","d4fefaeb3d181559f0abdbdccea147ea"],["/tags/TCP-IP/index.html","f27c5cbe5aa4814226e9112db67f9499"],["/tags/Ubuntu/index.html","a9bb2baf2bae1c120fea7b37d26c100b"],["/tags/Unet/index.html","370fe121ba3aa0bf266d8fbdd6e8116e"],["/tags/VS/index.html","318efe4217dfe3749220df31170b5637"],["/tags/VTK/index.html","547a2c19173be070bd26ae8772df93b4"],["/tags/Windows/index.html","c69ef5c0f04b4f501eb7e5003fdcc37f"],["/tags/edit/index.html","8e20bb0e97f9c831692ffd8d79f25486"],["/tags/hibernate/index.html","2ece0bb10c3afc4c0cb34d3887b21204"],["/tags/index.html","f3d9e4d2959e41b7ea7a12f021b9941c"],["/tags/itext/index.html","865e34fb7dfcfa18f108e21cb237f649"],["/tags/jdk/index.html","0b74e158d6f6c04fbf6660d6eedfb93d"],["/tags/kmp/index.html","5b012931855a190baf504b9c208c45c2"],["/tags/k最近邻估计/index.html","197cda2b0e548d55e1c126919cea2146"],["/tags/lombok/index.html","da1d0a35c7199c01127a2cecd76a704f"],["/tags/offer/index.html","253c38e1082834cd3dd8448d732ef809"],["/tags/opencv/index.html","0c763998a12cf28ef1970d660aaa41e5"],["/tags/pandas/index.html","6cc6dff14fed8d31843590f17aaa0c2a"],["/tags/string/index.html","c02c50e9575d7c99cececbd7045f4e8c"],["/tags/vim/index.html","17fd9fd95980b15741ec678a7411fc4a"],["/tags/vtkPolyData/index.html","9d751477f3fcfbf107abcd5f6c022648"],["/tags/web/index.html","b53400ddd82746d498b01b894b94a13b"],["/tags/xshell/index.html","2fd747ee9643fedfa2e8504574eb420f"],["/tags/yeild/index.html","fa30cc55bb143012489dc4cb441833e1"],["/tags/互联网/index.html","4ff74414ed8a790edb7f484b52366c65"],["/tags/人工智能/index.html","a29e47058ea61fc74bed733b4250d282"],["/tags/体绘制/index.html","afffa6fa58fe155264f23ed95a1c0e32"],["/tags/全卷积网络/index.html","0c96e347dd8e0f6eb6de6fb77f57bcf8"],["/tags/公众号/index.html","93adff1763b0b5657dda1804b31afcba"],["/tags/内存模型/index.html","f99de22ec8c141be8597b6603f87ac31"],["/tags/内推/index.html","fa4d5785b8780fe601cb43a2dae401e7"],["/tags/函数/index.html","069a0356579b7d2911f43405c3266653"],["/tags/分布式/index.html","18721c3a4dd796e1a36ff2a43adb2fe1"],["/tags/加密/index.html","5b406a9dd76281a5322e63935e93c06f"],["/tags/医疗图像/index.html","e756fe2563177bb26317f3d7cd30d194"],["/tags/博客/index.html","7e033ac02756f07eda825397550a1dcc"],["/tags/图像数据/index.html","336386a1e5cfa7f657796262b640e27a"],["/tags/图谱分割/index.html","07b1c3c139beeb44aa7a4602cf4f27d1"],["/tags/垃圾回收/index.html","8bf8fe990b232ce1135e7dbb7f38a0e4"],["/tags/多线程/index.html","ae36220629dde800547472059de12815"],["/tags/字符串/index.html","1e2e47592fe2152d0f03a7827b82df0c"],["/tags/工具/index.html","83aad80ee4110b8565087552078127d4"],["/tags/工具/page/2/index.html","d5c00030b103bd6f0ad89b4dbd02081e"],["/tags/弹性形变/index.html","1e859cdeb8a1e8db994a901a48d60394"],["/tags/排序/index.html","b0caf2bd9a5e20eb2aa4be603ffd5cda"],["/tags/搜狗/index.html","51fd309ac35c2549a3983b84b011e940"],["/tags/操作系统/index.html","bfc2252b9b8ecb42f62a9e2594c07585"],["/tags/数据库/index.html","7bc2d2b3e0bd179780e32f86cee2b409"],["/tags/数据类型/index.html","e372608f5e7f1dad7a316c93e6c343a9"],["/tags/数据结构/index.html","c7679718eb48ee9881bfef2aaf1eeaac"],["/tags/最大似然/index.html","aae8879517445739551bc9ffb07cd186"],["/tags/机器学习/index.html","20adda460f139ee388b72a4e49c9ca47"],["/tags/机器学习/page/2/index.html","a29217890c3868eec688d592d416e059"],["/tags/机器学习/page/3/index.html","d384f5c52c846772b7698c2b9babcd70"],["/tags/机器学习/page/4/index.html","d974e9ac6895fae239a4acd56ebd47c1"],["/tags/机器学习/page/5/index.html","187fdb33cd613615ec29f0e99d20ebab"],["/tags/树/index.html","d68a6dc41022d001f852829aec98d691"],["/tags/框架/index.html","871b130ff7df4bf43e6cf3948c11e305"],["/tags/求职/index.html","afefed4fbbc1ce04b9df6044255d4c21"],["/tags/汇编语言/index.html","904214840ae3cd232c716b74fab7ee9d"],["/tags/深度学习/index.html","e8f578ca0a99f06d47211118d03eadf5"],["/tags/深度学习/page/2/index.html","5e1cfde2a3b834a2d29896bf076fa6c8"],["/tags/深度学习/page/3/index.html","6ce5406917e4b5a9947dad4b93e0882a"],["/tags/深度监督网络/index.html","a4dd81a02c799dd7ae744730fa14aecf"],["/tags/爬虫/index.html","6fbdaa3c7c6809d40afa1785f18b0510"],["/tags/电子书下载/index.html","1e1c53e1ad773ff4a4defd8714a3e6ec"],["/tags/电子书下载/page/2/index.html","52f262cbf697d8704a4a86db5566b073"],["/tags/程序员/index.html","7ac2699b642318ce37c5756eb5060e9d"],["/tags/程序员面试/index.html","42a77601e22c3f698478b7982092fbf7"],["/tags/简历/index.html","b391afa9f8f8f54c4f9657357cdc1b7c"],["/tags/算法/index.html","bda883581ef127da4e8c4dfb0d86ef66"],["/tags/算法/page/2/index.html","89d3b929e41f28c5157920de53c04f4d"],["/tags/算法/page/3/index.html","8035b08714d2c492731a1fcc3fb774d1"],["/tags/线程/index.html","df468d1c0c06e04ba7d2946befe81b9d"],["/tags/结构学习/index.html","7fb5eaece492f42f1b549f47fb92afd1"],["/tags/编程/index.html","750055c752e24abcb32f53f2207c66a3"],["/tags/网站/index.html","cc04e255d45c05005956c69fa69b5dbf"],["/tags/网站/page/2/index.html","7125d803d23a44a6da5316a6b2fdbc1f"],["/tags/网络/index.html","a9fa68632cb45c047e9bda57682f0c46"],["/tags/网络原理/index.html","e2cd563aa52baee3278fc87eef8e63cb"],["/tags/肝脏分割/index.html","1847756d40a6ea253ce4b618ebd0fce4"],["/tags/计算机/index.html","64b7f4a8c6ac39e2ff017856180b7958"],["/tags/计算机专业/index.html","bd35d463a73b0d1c71ec042bbddb2880"],["/tags/计算机网络/index.html","b5871b942d625281745907ec92cca990"],["/tags/设计模式/index.html","1c7a474348d34bef36b68350211ae4bb"],["/tags/贝叶斯/index.html","07d7f7ec81a9dc8db810e56bc5e06af6"],["/tags/迁移学习/index.html","841b50bbf0b91b04fdc84fc4eb245419"],["/tags/面试/index.html","a2963559ec5dc147d66bebf23163972c"],["/the-way-of-pragram/index.html","7946c7f7188f04638286f9ce827cdb66"],["/untiypro XL安装/index.html","63cd4c9543c2bd9e322bb6e79efc05eb"],["/video-websites/index.html","516d1892292b2f49f94137f48d0507d4"],["/wechat-fans/index.html","5fd9957a2da9871d258f5cbd75dadf34"],["/window-run-VTK/index.html","74383bce4e22f9a0c34878a79496ba0e"],["/xshell-connect-Linux/index.html","fe28955e4dee6eedbe5f21c040d3b5c1"],["/‌Accessing-the-Open-Internet/index.html","8f2af137bebdb71ffb53d625de1aaa0b"],["/《Java高并发编程详解》，去大厂必看！/index.html","d0d844a727622fdfcb04f35c27f517d7"],["/一分钟没了 1.5W 。。。/index.html","cc94956e5764345d826225c0ad11196b"],["/一条高产爆款内容生产线/index.html","4390a837f7b8770a8313b89a1b0ad958"],["/为高考学子推荐的六个就业前景广阔的专业/index.html","1ad1e7d8f66fa29ddf24268232c292ef"],["/互联网赚钱机器---社群/index.html","e6b7f0845eb498a81300f8edc4fc046d"],["/你们常用的工作方法和思考方式是什么？/index.html","0f8203fd4cde0bb388efe044cc290032"],["/关于环境配置的一些事/index.html","a1d95104e45e1b652e9c22c2d5de45f1"],["/准备了19w！搞事/index.html","9eea3c28acad44114eb01e1160f8eaf9"],["/几个很重要的感悟/index.html","4a3558e3530d466121a5728b645b96ff"],["/分割ROI篇/index.html","c2fa45734a18a3a5ee5d71ba27f41684"],["/分割精度说明/index.html","d613a91cdddef03d5d8ebde5facdce0c"],["/分块程序执行/index.html","f784d584647ab0bfc6508ca16bb9d0f2"],["/加班公司黑名单！！！/index.html","6a2549c1b5deb545f91f72c2caef3cf4"],["/卧槽，上知乎热搜了！/index.html","f867f187bb98fa09cbc0f2a7be91ab06"],["/卧槽，我的小破站爆了！/index.html","6a18b5a1622415cb4ccb7df3f9b7d4c3"],["/卧槽，我被盗版了/index.html","f79e93bb32d3003db036b17ff918d432"],["/卧槽，还有985大学在大一上C语言课？？/index.html","aedd36715cc6f1b8878d21c83c8535e9"],["/历年微软面试中出现的leetcode算法题/index.html","a5588a508e95f519c245c8365ad6e499"],["/去特斯拉试车了/index.html","6029aa0b29331c3a1f6e420e201de4cc"],["/吃苦的三种境界/index.html","904a3fef5bc5b1bda736850e7a54dcb5"],["/哪本书适合推荐给 Java 初学者？/index.html","54f324f683443cf711bb1ef1176d1e1a"],["/哪本入门级的学习数据库的书最值得推荐？/index.html","0db2a085d5275a8a4e7822fbeaf7744b"],["/国内外常用的AIGC模型/index.html","2101b7e0ee80122838b8fadcfa969b8a"],["/国庆假期/index.html","1f24eea715567ddb26eff91e3be4c4fa"],["/图谱程序字典/index.html","41bbaace88b4db5d665fda54b7fc3d1c"],["/图谱训练与分割/index.html","2ce1c806e8919a0573565f99dee600f0"],["/宣布一件大事/index.html","7203a4eb297e793ed94e3b6b1d3d342c"],["/小鹏P7i试驾体验/index.html","1d89572151ad329dd8e093aca2507043"],["/微信PC版3.3.0内测更新，电脑可以刷朋友圈了/index.html","29e5092a6b9fbcb84f3cf49c1b93bf89"],["/怎么更快的赚钱？/index.html","8d59eb057bfa2c3fe01b08cf4dc6373b"],["/我毕业了/index.html","489dec0a422af1b05b988c64bc9d5088"],["/我！真！的！找到了！爱上学习！的方法！/index.html","6c3b856b10ac027d6c0aa1baff8b4a86"],["/户口的意义/index.html","55cec1e0a16528e41bfe22a3bce57d2d"],["/推荐两本经典算法书/index.html","a2c2622e6807846b30918d04c905a4ee"],["/推荐几个在线学习SQL的网站！/index.html","022a2a8c5044a3c3675cc27aa88d87d6"],["/搞了一个程序员成长晋级社群！/index.html","149861985d9f0c7873b5199f6a3b4591"],["/摘抄/index.html","d35cec500edd011cc7152bd9919e0a06"],["/暴跌30心态崩了/index.html","98a9bd96ddd21260c13ddd9f2701200f"],["/最近很火的ChatGPT到底该怎么玩？/index.html","e8ca961195e4ee5c350581fd739f5436"],["/有哪些好看的日历可以买？/index.html","d0a2932c77972e777b6dfdb345f2a109"],["/服务器有啥用/index.html","cb923ae18863b47b65f4b370d054a516"],["/来长沙了！/index.html","e772e76ea269d6c4647d309d879cde21"],["/校招污点公司名单/index.html","fdcfd1522b9abd55a48707acba81543e"],["/梭哈200多万/index.html","572499c153734e11cd12d1d504da35bf"],["/梯形图入门/index.html","e9461308ef351fcf294dca7a25d0e60d"],["/橙心优选，凉凉了！/index.html","475e137ee9eedfc20cb1b988f314550a"],["/比亚迪汉试驾体验/index.html","b363d5ff3ae2af08e5f12da4ec7b1ae0"],["/清华转学成电，真的牛逼！/index.html","b5554ef5d4acdeb85d6c760959947258"],["/滴滴程序员被亲戚鄙视：年薪八十万还不如二本教书的/index.html","6a99b5693d46b7f0ad6df96dfa0931e6"],["/社群！/index.html","445ec0299a015effa4ad705341b797d2"],["/科学上网之VPN篇/index.html","f5e47f6401a6dfea664ba84cacedcfab"],["/程序员必备的几个技能！看完你也是大神/index.html","7f16a5e0214c7f36377df153093da1f9"],["/程序员绕不去的槛，Linux！！！/index.html","7def975095ec19ecf99c6ee3090019b1"],["/蔚来ET5试驾体验/index.html","b3bc2b5a5422bf62b3ac38b23617ee43"],["/蔚来，牛逼！/index.html","049d343992cba2e2bdfec44a3d0b5fb5"],["/被录取了/index.html","420d06ec18dc8e2d523aa8fabbb70543"],["/被找事了！/index.html","602548407bd23fdc2fb50b04962f5375"],["/被拉黑了。。。/index.html","9054e919e1911bec69205272bfd24269"],["/被车撞了！/index.html","6a92195e27963651e0a4b80031326e3c"],["/该如何选购固态硬盘？/index.html","72070f77c4dc7902e372168d13f8f3b9"],["/这本书一定要看！/index.html","0738aa4f2ac86e22362ca2fe705fae0a"],["/选Java还是C++？/index.html","53705d71528f939ea30ddcd46d361d6d"],["/那些让你起飞的计算机基础知识/index.html","637de18f6f91ed39384f0afc0fe20033"],["/靠这几本算法书，成功拿下大厂offer！/index.html","9fa2fe4a9ba98bd02a8e9e96804b9f8d"]];
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
