/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/0010-city/index.html","5c7f2c5928ff7ec2e6264e6d722a030a"],["/10-algorithm-book/index.html","dfed7eb1d2e783ff7b236f0c1e195b67"],["/10-website/index.html","41324d0a24d410b0dd1afb071decef82"],["/100万的小目标/index.html","194705d0c17b5de5a8312134475e156b"],["/10w+YYDS！/index.html","9b6c2a524f5be9b6a750355029f37928"],["/10website/index.html","89e9f09ca2d6b538e5a0cd9fa265fb92"],["/12-technical-tutorial-sites/index.html","3e710d5e49599536b77a19d82746562d"],["/2 6 岁 了/index.html","5ed46c517492d3b233d5a9c4af04082c"],["/200万，啪，没了。。。。/index.html","e9c63d38ff74f8483191863425c467d5"],["/2018ECCV-Paper-DL/index.html","a544dd2c284a1e2a06bccac7cf578e55"],["/2021年固态硬盘选购最新攻略（小白避坑指南）/index.html","2db3beb6d783eb6a5ac1319241e1cd98"],["/2021机械键盘推荐/index.html","8163e23295df3ea7945cc8378a4f59c8"],["/2025-07-15/index.html","1aae5200e873cb77c0ad9dc715a7a7a3"],["/2025年终总结/index.html","25a8de5255b30e8eba46dc0ac8ff0fcf"],["/2026-Open-Internet/index.html","c45d4c495cd7075b3be166630ffce1f3"],["/2026-best-vpn/index.html","04918722a4769dee2975141f41cbce8c"],["/2026-clash-vpn/index.html","316857c1643a861adcab7ef410dcd5f3"],["/27岁了/index.html","fcab28dadc8525b07d9b0a66dca11738"],["/3D-Convolutional-Neural-Networks-for-Human-Action-Recognition/index.html","116991f56b4a58bdad4b52850f7bd259"],["/3D-Deeply-Supervised-Network-for-Automatic-Liver-Segmentation-from-CT-Volumes/index.html","923d120c6a1173fedf6c8ba3908516ad"],["/3D-Unet-Experiment-notes/index.html","b64b90c2c19034d7a80c3d1ac1fd9cc5"],["/4-Software/index.html","ac84dd6da62593da1abd67345bce32ae"],["/6-website/index.html","8e3443f1cc2c11e313a6b36b6a3aee73"],["/7-terminal-tools/index.html","7497af48b3fad27dcf5d13d33c7571a2"],["/AI-PPT/index.html","a1bc3264b4421c3d88beb00807680d15"],["/AIGC中典型的深度学习网络/index.html","e8fadecca48d6dca8c2c911d20057fd1"],["/Accessing-the-Open-Internet/index.html","74d4d3994b592db9d6d4148fd6d72af7"],["/Agency-model/index.html","fdebe2708c905cf699100e5a69945ad7"],["/Algorithm-brush-notes/index.html","c6340a48c83a1c578d0b4556bc3e7e0d"],["/Ali-recruits/index.html","8d3ca2b204eed575d4ea4279ab824029"],["/Android-VPN/index.html","69d4abab9b9ab18ff8622075d0ec7e58"],["/Android-open-internet/index.html","f1cd06cdb595478ff2a860ccbde9cf25"],["/Appearance-mode/index.html","a43d49ff75a541034a11dabdd1cbeac2"],["/Backtracking/index.html","ce535a35775a92e1d57723c602b812dd"],["/Baidu-Sao-operation/index.html","9ccce7ead5d2ab72a1b48a36d0efb710"],["/Batch-Normalization/index.html","644d4e8d627e3ffcc34eca824b723665"],["/Best-AI-tools/index.html","ef6732d9f6fc1d34b7a3f335f47c0d2f"],["/Bias-and-Variance/index.html","3781f747831367ac42f69f099f958584"],["/Binary-tree-traversal/index.html","99327e9d1ae4720f4eb741907fe66a30"],["/Branch-and-bound/index.html","27fb1ec57cbe05a8e9b068ea5fdc207d"],["/Buying-computer-for-the-first-time/index.html","02a670918bbabbd12e1fe64953f7c217"],["/B站向北邮道歉！/index.html","373598a1455c9d7e24d07a0a976e24cf"],["/C++-string-function/index.html","b3433fbb9a461ec2d4d395818902c3fd"],["/C-Java-DevelopTools/index.html","25599a897cadd71c465ce221efa534d7"],["/CS-Classic-Books/index.html","6b316c229e0f7978c42b932201b03d34"],["/CS-network/index.html","38cdf9d626cebb910a960b3f9b62a0f3"],["/CSBook001/index.html","d624a802acf9b2358bb38bb044860767"],["/CSBook002/index.html","f6427cd11795a702ab0c4f2168f6b930"],["/CSBook003/index.html","3eb211d71b0cf58dec36f4b42774ecb1"],["/CSBook004/index.html","d89ae1922524cefcb842f302325d2218"],["/CSBook005/index.html","7dd6d1bec1fbdf646d57e0dad1f50195"],["/CSBook006/index.html","f9fd8a34aa129d9d49586e27d78f47e1"],["/CSBook007/index.html","710fafb555dc94a6ec3460af6027d4f0"],["/CSBook008/index.html","c27d18dd3487a2e075295c023693a75c"],["/CSBook009/index.html","021b5ab4582427887860aed885cfc0a0"],["/CSBook010/index.html","06efca1080450c4d6b40727fce2b20f1"],["/CSBook011/index.html","e2e5ecfb41184793c54888554db938a8"],["/CSBook012/index.html","674d506b0d45f914af58ea5f4ce1add9"],["/Changsha-really-fragrant/index.html","b9aadbc9d526383e299747e39cff6da5"],["/ChatGPT-VPN/index.html","50ea0138a36c8d7b1e353a896042a5df"],["/ChatGPT/index.html","03015e8d293c6043227171e9cb36fb54"],["/ChatGPT！王炸级更新！！！/index.html","72aac2fa0891a83e859c4f05060616f7"],["/Chrome-crx/index.html","2f1dc87206f7d2500a6ae27124a0f50e"],["/Clash-Party/index.html","9f5c06dc5f87f659c4942e4fc74fd341"],["/Clash-VPS/index.html","9a13cbb6e10673460aa1962dbefa6a8f"],["/ClashForWindows/index.html","99691114d96cecadd9df00ee92731ee1"],["/Computer-Classic-Books/index.html","b49ec1abfe0921fc39cba280f32803f7"],["/Computer-for-another-major/index.html","abee187a5e255135805a63583d8ee164"],["/Conditional-confrontation-network/index.html","555153eaffed7e6255c3b6c7b14e4b1b"],["/DNN/index.html","fc3bc7146eb417a33b2d9a00c98adbcc"],["/DSN-segmentation-liver-experiment-summary/index.html","c11faace35bd6a6f7e26bdb5f57e1946"],["/Data-enhancement-elastic-deformation/index.html","2aad8152387617ec4f88244ca17df1cf"],["/Decorative-pattern/index.html","2bbd3ff0f19e87b8dc8fadb60463f753"],["/Deep-Learning/index.html","dda7feb6d7e6dcdc513a834c6a305b1d"],["/Deep-learning-and-medical-image-analysis/index.html","25e69ad30a38a08804e5eb229bce4eb8"],["/Deeply-Supervised-Nets/index.html","efb2c64a5589ee8f223096824a53e87d"],["/Deformation-model-based-sparse-representation/index.html","be6ec2cea651df66406c3c8812c1abcb"],["/Discriminative-and-Generative-model/index.html","58e7b531e131b5af80609542e64304d3"],["/Distributed-transaction/index.html","0158df52447c06a247cae772aa158bda"],["/Divide-and-conquer-algorithm/index.html","ffc19aa00988a73d9d17f581f557303a"],["/Dll/index.html","f390c8e2bcb527f0787a68a381f3a0bd"],["/Dynamic-programming-algorithm/index.html","19151c4c7a134bda5f128d95f9047445"],["/E-book-download-commonly-used-by-programmers/index.html","654bfea951425b93fbabb360f28c1e20"],["/EditPlus软件的安装、激活和配置过程分享/index.html","6ab2211e470a5328830a25533b38a733"],["/Eight-sorting-algorithms/index.html","1471c215ec852c06cfaae3332d900808"],["/Encryption-Algorithm/index.html","0c8467e0f9d188da4fe7a95b75648e7f"],["/Eolink/index.html","1630f35e1f0658d0d0ccbfdf879e4ed5"],["/Factory-and-strategy-mode/index.html","f97c46f06a37b33a668c664b90a73d6b"],["/Foreign-technology-blog-community/index.html","2131e5935b7f7c7a6328e5d0be322066"],["/Functional-model/index.html","2c2f1c7ecdff931fdd57976585636468"],["/Fund-type/index.html","0a5e74bfd54c2e0d37b7e49a72318f8c"],["/GPT-4o/index.html","43d63c026d3df6fa50bba94cb13b3266"],["/GPU-medical-image-processing/index.html","31536561042cccc5fe9efe22d02982ea"],["/Gemini-pro/index.html","997ca5190ecd036bcb8c7f9c1a42bc4c"],["/Gemini-vpn/index.html","d8a11574329bf4f2bec2e8a4ce1b269b"],["/Gemini/index.html","85c8369f3da0e068e75f8abed15c748a"],["/Generative-Model-of-Unsupervised-Learning/index.html","cdc63d021b68db3daa8f3339a26cfe48"],["/Git-Learning/index.html","c38e9f210ee39d56d6e45f0f653037ad"],["/GitHub-2FA/index.html","437303b9a527282c38a105c749fabb93"],["/GitHub万赞，程序员必看操作系统总结！/index.html","70bd2f21dd0805c8cc6433faa80f486d"],["/Golang-book-recommend/index.html","cdcc286fbcac3ed3493e4b162e6a3ba2"],["/Golang-learning/index.html","aae6f161a2e6f5f61b38f20d1a23243c"],["/Google-Gemini/index.html","89c6a5355b879ae0eb192acd14283adf"],["/Gradient-descent-optimization/index.html","a3a4acfa0905758e8db42cbcd8e03fa7"],["/Greedy-Algorithm/index.html","ee40d3b51f4e44e81c68a97697acd660"],["/HAND-User-Forum/index.html","91dca26029ab1ec302f117ddb57f1782"],["/HK-bank/index.html","21763928bf050505a9660195c917470a"],["/Head-to-head/index.html","f6c0c4d8305fb161a3e75a68d608b181"],["/HexoPage/index.html","756d5ddc1b9206716ca3d3d801e3c000"],["/HistCite-Pro/index.html","891887ae3c61d246fdf532dd33a69bfc"],["/How-does-the-program-run/index.html","6202f16d216063abc1dd271a42d1cfe6"],["/How-to-judge-whether-technologyisreliable/index.html","02af92e564955657dbfb24a74b179c6c"],["/How-to-learn-design-patterns/index.html","6d31c1762c28ecefa43edd0a25c59790"],["/How-to-learn-design-patterns？/index.html","733c08881ce6701cccadcab82c4b8940"],["/How-to-teach-yourself-programming/index.html","47dfb016924e1626b7652ac69125dce9"],["/How2learn-Python？/index.html","44dfbca7244f65a06cf6c336cbcd9650"],["/IDEA-shortcut-key/index.html","620be93448a2afb103a69ae403b4b7d8"],["/IT-interview-basic/index.html","2dc090c86359de9cce4b1c035146b0ba"],["/ITK-VS-install/index.html","7375589e41b1e05e83babde441d4f989"],["/ITK-VTK-ItkVtkGlue/index.html","7317cd3ccf4d2ccfc4cc00417d4fc742"],["/Image-processing-plus-noise/index.html","53dfc44b4775d785bed70a1421ceef7c"],["/Inception-Going-Deeper-with-Convolution/index.html","9c6a93467b8516042eb7152a2ffeadbf"],["/Information-Cocoon/index.html","c08db7398e01486afb7cd8d32fbf2812"],["/Java-GC/index.html","86c433f583b80bbdae3fda278dab8650"],["/Java-array-and-collection-sorting/index.html","8aebaddf84b24866a4408d2768331391"],["/Java-development-tools/index.html","d2cfb2ff672fca5416ee339b2e4788ac"],["/Java-eight-data-types/index.html","715406abbb49eda3f374585a49ea184c"],["/Java-interview01/index.html","a19a72bfd8aaf0df2fa608b5a1dac987"],["/Java-interview02/index.html","84c544826b55b24a6f62d11c674de8c9"],["/Java-learing-map/index.html","ea962fadc87b193d9f19e6aae2f8db1f"],["/LLM-DP-TP-EP/index.html","e3f35682b06ccb14197729fc0bc654d2"],["/Netflix-VPN/index.html","ef7dcdd26340cc37a7f78cc70a7115ed"],["/Open-Internet/index.html","ebd64de2cfe345068903ddc9ed8f974f"],["/Open-Internet2/index.html","e1891edf804a0eb624a845e8808620e4"],["/PicGo-Gitee/index.html","59ba8ece3de963ac82a8ed662650321e"],["/Seata/index.html","7c1eb585a6d6ea2062c2e77650450ff5"],["/Telegram-VPN/index.html","9e0ddbfebe0cdadf0f8d4004915c3949"],["/Telegram/index.html","89e24726a21a2c074d5978fc76c69037"],["/VPN-HELP/index.html","10507b50e5d45aa87471a5cc4f3caf6a"],["/VPN2025/index.html","ef19443be5eeac4d7a7814501af52fa0"],["/VPN2026/index.html","7653defbfee7b0e52fa4db7fe259cc03"],["/VPN202607/index.html","fc118b99c156e10659485cfdd48e9994"],["/Vertx-Java/index.html","b0a28aafde14eca8a9cdd0bb5eab2a75"],["/Vpn-OpenInternet/index.html","b18292e4cfcf98e707fddccb914ed510"],["/WeChat-red-envelope-cover/index.html","d1fdc35defe72fec79e82e686291170c"],["/Win-Internet/index.html","e02c06b13a1ad6a48024eacb64f93b16"],["/Win-Open-Internet/index.html","ce27381ef16b32bbac0ee0f5cc2c9df1"],["/Win-OpenInternet/index.html","a52832f2b2d7851c10bb25784fadef84"],["/Windows-Android-Apple/index.html","a4770968cc1fdeb194e4dbfafc8f53cb"],["/Windows11-2kfans/index.html","1b900f175e7cbf42ac3b75254a53b70f"],["/Word-Embedding/index.html","fd36afe4300c8c5688b50dc0e80b93b1"],["/YuanShikai-and-his-Beiyang/index.html","0082483697516ddd77558a6d41268a78"],["/Zero-copy/index.html","e3410c629d41c13840b2218ae0f4d47b"],["/about-keras-model/index.html","c95e4f30fcbe78c14ba207f8c3756158"],["/about/index.html","fca1059c83e8fe4d88237f836f761749"],["/accounts-google/index.html","8fb07204cfa5b13279f67280fcc0ff27"],["/ai-model-security/index.html","2e875bad7fed77b8a08836e2d675d1a5"],["/ai-tools-guide/index.html","020b48e2fa9e3847287e8992059a5737"],["/airport-rate-guide/index.html","c5eba1ec82eefb85702d6d85e73c2d37"],["/algorithm/index.html","c418491934db349f42504549a040f9ed"],["/alibaba-Java/index.html","fb88275f28f48a95177d1ab3a14fc788"],["/archived/index.html","ccfc5cba20702c215c5a9b63c6e1d96f"],["/archives/2020/09/index.html","d5536f4402ea1b6b017100e93e0461bf"],["/archives/2020/12/index.html","3d1a586a4153b4723a5ebbf88ffbf046"],["/archives/2020/12/page/2/index.html","7ccb15e446ab38fdab13cc9859fb34fc"],["/archives/2020/index.html","6b28dcfa85b8d5c36b27731af08b5b0c"],["/archives/2021/01/index.html","eaf26b368d7707894c5b9ad73dc51847"],["/archives/2021/02/index.html","46b74668c4bab069cc0e4e29eb03b426"],["/archives/2021/03/index.html","9922254ac7b122f79dec3bf4bdd6a64f"],["/archives/2021/04/index.html","16f6dadc51dcb3dbddd252eec3042fd5"],["/archives/2021/05/index.html","79f8e84167e52c71cf8cd5830a948459"],["/archives/2021/06/index.html","8f67795cbed0a5613e38c755830c6a92"],["/archives/2021/07/index.html","f19ea3c2a403ed80f142896212d6f98d"],["/archives/2021/08/index.html","40d7924fa4256861b6c60240157e8de1"],["/archives/2021/09/index.html","2bee6fdcdbfc9021c0c942d877a52197"],["/archives/2021/10/index.html","c1585583829c933c2499fe4dc31d4d65"],["/archives/2021/11/index.html","e0d6d02650855a0e07ef0041d11b7cbc"],["/archives/2021/12/index.html","065ea6498e31f420f6533055593c6923"],["/archives/2021/index.html","d1e8878299194be751e31fe5588e0428"],["/archives/2022/01/index.html","592bcf976fd0f0b2e13314abf234a87d"],["/archives/2022/02/index.html","abc5a989f83bc39166b9b3deb8e75895"],["/archives/2022/04/index.html","732a4cdb73be6a012f2bfe431e941c36"],["/archives/2022/05/index.html","ca83e968ee469a0476462ae676e111dd"],["/archives/2022/12/index.html","626c48363f0dee05a9cb1baf6481c4f7"],["/archives/2022/index.html","16d2762e67a49c2cc1b874d0d68e5649"],["/archives/2023/01/index.html","92756bece08cc27397ecd12893ffcb7c"],["/archives/2023/02/index.html","72bcaa23dace1feb2b9a7343e6d9c5e3"],["/archives/2023/03/index.html","248ff7b25f91881906d2570ff581b04a"],["/archives/2023/04/index.html","daebb8d4ca51b687b97312650102102d"],["/archives/2023/06/index.html","11c14b2b158c1a3fbecc76e9b6a8f92a"],["/archives/2023/08/index.html","3dac2785693e8d8d9e0a660a8d7f4282"],["/archives/2023/10/index.html","4e3e54406719a91759707bc72e27d503"],["/archives/2023/index.html","d406eed0e037a127632b787a26cda033"],["/archives/2024/01/index.html","35f38633eef81b20030f4e23d6bb6604"],["/archives/2024/02/index.html","aac37bbf8e7442282602ba3a791bc287"],["/archives/2024/index.html","6e12b365e89da4b6d711dd7e94a57153"],["/archives/2025/06/index.html","e503dcc4de0c11b4eac637e429ea4866"],["/archives/2025/07/index.html","74b9555dbe42e0ae404de3738be1b468"],["/archives/2025/08/index.html","51c283890cfc0f791f07e61e8cb93776"],["/archives/2025/09/index.html","248cbc1d34761b6f5f2596eb55aac893"],["/archives/2025/10/index.html","294941f6aaeae704807ffce137b9ad19"],["/archives/2025/11/index.html","3551216071accd70b893ee1e22eb5380"],["/archives/2025/12/index.html","d9d232f5ab361381e191ae3a9fed638a"],["/archives/2025/index.html","767fbb5b1e8184a707c26b01a883adfb"],["/archives/2026/01/index.html","7f6e3dc96dc76bc0d3b9cc7db9a972c7"],["/archives/2026/02/index.html","83a8d275009465d5e6cab81b84cdfdb2"],["/archives/2026/03/index.html","fa37623936932ad573efd9c1fbf075bb"],["/archives/2026/04/index.html","8257532b981c5e59f86749b7763903ad"],["/archives/2026/05/index.html","6c7caf44bbafb6c9b385f0e90f82425d"],["/archives/2026/06/index.html","f3255d20e5408dfc7987db3149a8d564"],["/archives/2026/07/index.html","299033648aa04f919fc70944984b7726"],["/archives/2026/08/index.html","f9870721c00e651c54cb60695e951573"],["/archives/2026/index.html","c9707343aadf2af64bc94a61e11782f7"],["/archives/2028/02/index.html","bbc1200569ae27cc57ca906a89eea328"],["/archives/2028/index.html","7695899738a7b9ffc5fcf44d3cfae10c"],["/archives/index.html","8753044a864137b03af803ed4ac0aecc"],["/baidu-search/index.html","028b0c6e6b84cfe7b24a1203c8604f09"],["/baidu_verify_code-Hh2fKNlEB1.html","5cb5990a376b723d5e97793000e9ba11"],["/be-a-programmer-instead-of-a-code-farmer/index.html","89bd49c5d04d7a12351c12ef1f13e6b3"],["/best-vpn/index.html","4c73af11f1ff4144a97a6910e4a583c3"],["/best-vps/index.html","b5865585eda729280744b00809490a6d"],["/bought-a-house/index.html","56a96c954b0c4557ef26b7263dac6b53"],["/categories/index.html","4e2a26bd61cf9799e28fbefd7586a00a"],["/categories/技术以外/index.html","37c221938829936962977fab1d9ca93d"],["/categories/科学上网/index.html","51db54f55ee5d1946543ae711d8bbf2d"],["/cfw-migration/index.html","1434dba2225e7b90f91d3878415671e3"],["/choose/index.html","3315ddf83928871de1e8036148e1b7fa"],["/choose2/index.html","0b238daf6cef1d1bab4251994c62b021"],["/chrome-crx-intruduce/index.html","f49ac869153cb5b38c33ce334e1d05c3"],["/clash-custom-rules/index.html","5e0ffbb90ee48fa4d8910bade682080a"],["/clash-dns-guide/index.html","8c85bb84474167a6796239ee9057809a"],["/clash-free/index.html","a6aff2683ae9d1c0fe63106451e499fd"],["/clash-guide/index.html","4f8bf0535532b8e3664952de0eb93fea"],["/clash-node-testing/index.html","ad537d0f0f7a17a0a96b71ab6c49d2d0"],["/clash-pro/index.html","f6204f465879c1cc1fb5b5530b5f25aa"],["/clash-subscribe-guide/index.html","3804132749284369501e7561101564c9"],["/clash-tun-mode/index.html","67b45ff0906bece40c433d7e0f9fdf18"],["/clash-verge/index.html","568e7c00acf4e110e6c43722eec26d98"],["/clashvpn/index.html","ab7acd7ee84d2c6cd8f3284ece600f2c"],["/claude-code/index.html","526a0a1e3c16023ef17c970c710b4fdc"],["/coder-blog-website/index.html","d54a61e713ddab55f0c4367c588c1c45"],["/coder-source/index.html","c797a8177bda4f91ae2d09c298c2b075"],["/coder-videos-website/index.html","789a87370ef93d01283d72b76cf57937"],["/computer-book/index.html","e5872112ff70735ac507f4cca5c14c33"],["/computer-censorship/index.html","9fca6c90a73be2f005cc99f6dcd5a58b"],["/computer-network01/index.html","20a9787c076ed353f0154a6507be49b0"],["/computer-network02/index.html","7224b466b323c569527b014bd4321456"],["/database-Mysql/index.html","1caa7d29aba0f2201775a3f92c27d2ab"],["/eclipse-lombok/index.html","c0e5d8f7e5d688dc7e8767c6be01cbff"],["/freego/index.html","a5c3c58139301c93b7c1e0cd4288ce7d"],["/great-firewall/index.html","11944233ba159e904fbcb06b905f975e"],["/halfrost/index.html","3d9a9b2374e7cbac2e178394542b3538"],["/hermes-agent-model-config/index.html","f59e752b9b43ec08b6da70e6cab22f56"],["/how-to-signup-chatgpt/index.html","547065d82a4d312ed72a1acd5ccfcbac"],["/how-to-use-Gemini/index.html","30abef92f89892770e30facef6b8e9b5"],["/idea-continue/index.html","fee5b5b9e7612e7e6199eebd8af5b7e4"],["/index.html","3423ee6d399ee2c46eec0d5e6acd3dc2"],["/internet-dir/index.html","47d1e416800c2b24402f20bee7c98ef5"],["/ios-open-internet/index.html","cf5ed6e72ecfd03a9bc2e1751363b077"],["/iphone-open-internet/index.html","49491b5850f0bac932a748970d6804cd"],["/itext-makes-pdf-form/index.html","42fe3d6f1f87ca859d9d50a250f8e657"],["/magic-internet/index.html","b70a177270fa1a6a99581448f772edcc"],["/magic-vpn/index.html","93cfec6e2c080d94bcfc7eece3705b0a"],["/mihomo-clash-difference/index.html","b6a84e8b68cffdf1bd495fe72fef8552"],["/mingci/index.html","8757d7a9d727c47a60f1c468d8bbf1d5"],["/mobile-vpn/index.html","d3e392b4439b02fb1e3ae8fe58389e5c"],["/open-app/index.html","bbc26d12783da3c9ffb6c043db0d4e19"],["/openclaw/index.html","46e321b87b3692397029934e542859e3"],["/opencode-guide/index.html","b14dbcf61e87f22a35e76fba1f016047"],["/openinternet/index.html","4388ae4f7132170d050c820f3fce6de0"],["/phone-win-open-Internet/index.html","0755a8d4440d67f761453b40d7b32023"],["/popcorn/index.html","28e49c48fd21c1fbc9ea5666aa6b9136"],["/protocol-cheatsheet/index.html","9944b47f70d334b54368a54b76dcaae9"],["/protocols/index.html","a069e011cec3c9fcce00f0caa59ee9ac"],["/rmux-agent/index.html","8a3646fbbcb066ff3f60f5d097f73d8c"],["/route/index.html","d8107abf8c538591aaaef2ddebe71803"],["/science-internet-guide/index.html","c5a605fbae1e6def76476e6d4240d5ad"],["/search-help/index.html","136237ac7533f1ef5880cb87be6413cb"],["/sing-box-guide/index.html","44f28bbb3d3d820a09844d347bd82c69"],["/software-copyright/index.html","112d0869a3dcd1a6a799c15050a5554f"],["/sw-register.js","a7ee4b0e678ce7ea7c5ca8986290677c"],["/tags/ECCV/index.html","d568785f966ad4e8e23747f0fac7d6c8"],["/tags/Java/index.html","9da4f2d395befc1dddbb09ebf7c78904"],["/tags/Java图书/index.html","886d45ff676f4a2282e35f50bfd9ab5b"],["/tags/Keras/index.html","2029a7c162456b78197068e33bdddaa2"],["/tags/Linux/index.html","3cc1fdfb86e9b8ae51151d87173a7c21"],["/tags/Linux图书/index.html","378f1fe3b14b71f83e55756fd87f27bb"],["/tags/MongoDB/index.html","fc8bb89bd06a8866752c95b71bc613fe"],["/tags/MySQL/index.html","192c2d7214ac19bc386bb54fc7cd3533"],["/tags/Python/index.html","9ad001f2a0d735fe3b5577c90d6708e6"],["/tags/Python图书/index.html","23752dff3450dff135ee48eaa0088be3"],["/tags/Servlet/index.html","dacfa7f2fe894d38e324d117850becae"],["/tags/Sping/index.html","cc2653f5a4bdb828b503a2a6e0087c00"],["/tags/TCP-IP/index.html","8507f9a0564c2f84354484014c6512c4"],["/tags/VPN/index.html","8a301f61fc91b2b4dad09a7abc3a1f9c"],["/tags/VS/index.html","686909ff7c09da12ea582d70f85903f6"],["/tags/VTK/index.html","2b7f8fa6380f0bf86d33adb5ccc9a56b"],["/tags/index.html","e4896dece8b451f6702020246a23af9b"],["/tags/offer/index.html","9cd35a9a7c147694351eae1fef0ce48c"],["/tags/string/index.html","1177ab709f8e0ce738698feba92e76b2"],["/tags/vim/index.html","06e5ec25253104ada43e309a17d1565f"],["/tags/互联网/index.html","7a3b772c41f0d35eb3f589bf5a8abff3"],["/tags/人工智能/index.html","eb575f4ebfc726285a63508b6ae4d4b6"],["/tags/体绘制/index.html","d8c0f8f40bdf04306b738ec3e7bbf95c"],["/tags/公众号/index.html","31b08499d7657b748f9455e00b0db776"],["/tags/内存模型/index.html","be346d6a83397937d87c2358f6aef8c3"],["/tags/内推/index.html","33281c77cdf2777cfadd094430882821"],["/tags/函数/index.html","7581bbba5d55902baa1b08f08c1dce26"],["/tags/分布式/index.html","756406390846e754bda38370e16f8712"],["/tags/加密/index.html","1f177eae6da2b5918a9bf4d603b41ef7"],["/tags/医疗图像/index.html","27a4af436e29688e27b4ae57e25924bc"],["/tags/图像数据/index.html","7a7ee74b2a96928598c7cf0f3afe2ceb"],["/tags/垃圾回收/index.html","ea323bbbf25afa8a2e59caf60aec2257"],["/tags/大模型/index.html","b617242a67f780755951b2d7ecdc7a9d"],["/tags/安卓翻墙/index.html","64a4d27e3d287112ac4fbcf58e007f1e"],["/tags/工具/index.html","57e6ee46c340086febff0c9d0c5e11ae"],["/tags/延迟/index.html","55b870cd2a4a93d38012823bb19ef32d"],["/tags/弹性形变/index.html","8b56543734c5d13028ffc99e8b3b6f3e"],["/tags/排序/index.html","1a72fd2871c74e920b1a6b589fdb2103"],["/tags/排障/index.html","8a744e5800cd818eed9d99f1a286889c"],["/tags/搜狗/index.html","965ee2cadb51d51db39323dba7f73b8d"],["/tags/操作系统/index.html","5b418e63b4c33b3625e896b1c2212e30"],["/tags/故障排查/index.html","ab1731a02ed1c01dcf63fc7cde25c859"],["/tags/数据库/index.html","3f400402d2dc71f242b06ef4eed34372"],["/tags/数据类型/index.html","ac84071bc2a0955a0558b07c62299f1d"],["/tags/数据结构/index.html","7109bd26c43fc75148885c7320dbe150"],["/tags/最大似然/index.html","3f93cb7461182ac5978f4f526fd64415"],["/tags/机器学习/index.html","e8140ecf700891989b6639cb889b3bf6"],["/tags/机场/index.html","f811f650833b5182980d4172139ff674"],["/tags/机场推荐/index.html","24b1b09c4ee63d8c45ab1d3af8dc137d"],["/tags/树/index.html","c3b0ec7daf23fc408d9b1a76c38229e8"],["/tags/框架/index.html","cb2a5f1196556bdd7d819ccc6f2ccaef"],["/tags/梯子/index.html","5a3470e69ee83b6d553cbea60149c1e2"],["/tags/梯子推荐/index.html","57f7e1cc9fa977c4de57d824e3719226"],["/tags/模型配置/index.html","2084ad8208b8be8d2ca18c0ae8fdf2d4"],["/tags/求职/index.html","2a59106fcb107e0d5aef07b8538e2e31"],["/tags/汇编语言/index.html","b4254bacaeba6f9d3c87a693cb8743c2"],["/tags/流量/index.html","af9d9ffd61f9dd8b5074a3b4938b5725"],["/tags/测速/index.html","17fbdb472a117e35ed65996741804a33"],["/tags/深度学习/index.html","ac7a2a8de92ef108b2f029ba517a2bad"],["/tags/深度监督网络/index.html","e6bd9b2a654e9ec3bf189b8823a75e20"],["/tags/游戏加速/index.html","b8a4661cd81ec8c4302bae0e80b0e67a"],["/tags/爬虫/index.html","ebc5f1f418bf76d6ff4d1edcfdaecb60"],["/tags/电子书下载/index.html","909842f9494be4860deb69ccb3f1352a"],["/tags/科学上网/index.html","fbb87f4ba9176a5d2f90c6923a21fde0"],["/tags/程序员/index.html","c9cead5d0633d6870809346b8e123078"],["/tags/程序员面试/index.html","85237caa9a80220d58d57dce71934e80"],["/tags/简历/index.html","8d598dc6172c5b44cbf81367a91c44d3"],["/tags/算法/index.html","c32e15956c15a284c8b75e507f624134"],["/tags/线程/index.html","3e716e88cb57fbd2ab7d63bfb3539c0a"],["/tags/经验/index.html","a0d1afb25708c5f51d582bce8bb881d2"],["/tags/结构学习/index.html","9a0773a104a69f6a6c2f2156e93c86ca"],["/tags/编程/index.html","b86f5c94aa790571cd82f67f0c606ed7"],["/tags/网站/index.html","2ea6b543689852569ce3d2c102582423"],["/tags/网络/index.html","6bb1cb5a61a244af8df7dca2786fad58"],["/tags/网络原理/index.html","9d338151c495545cc62f0dd5167ec16e"],["/tags/翻墙/index.html","3956161df18c901f95113ab423dc6f5e"],["/tags/肝脏分割/index.html","0c4830c073093999db884b01b24c54d6"],["/tags/节点/index.html","f83329de5e09c6b31a080602d69b5b2f"],["/tags/节点延迟/index.html","0ee74fccab84762490a3c5dd0ec934ce"],["/tags/节点测速/index.html","cebc5a509e4bafc0787388c543476f69"],["/tags/虚拟网卡/index.html","688eb761dfb192b407ff82e0b34bad38"],["/tags/规则/index.html","a75b6731ad81c0ce59e1bf14c9eb5f85"],["/tags/计算机/index.html","b4f395f9dd95140b43643986719d202f"],["/tags/计算机专业/index.html","13758376bcec74e6449ff1dade30ce8c"],["/tags/计算机网络/index.html","d9168e043a20b545e4d0045bea6786eb"],["/tags/计费/index.html","e8a6f7ab38cb926dad23669733d9c6a6"],["/tags/订阅/index.html","cd5652b572f880622711b86aba4a049a"],["/tags/订阅转换/index.html","3f3930bd4335968071c948da5f9083a1"],["/tags/订阅链接/index.html","13e218e79850ed385a84258a2b7e7325"],["/tags/设计模式/index.html","7194460f1dfe58a79bb10506bacdc458"],["/tags/贝叶斯/index.html","34e61c259b7caa434fcd3b75ea260798"],["/tags/迁移/index.html","f7dbe68e79d8406d709207e875e07e4c"],["/tags/迁移学习/index.html","83a6c92c88782a567314c3d6134e5d81"],["/tags/通用代理/index.html","30bf3f2a0a2ff5ea598711dc4b663bfb"],["/tags/面试/index.html","861eae49351da263b041b39c3c26c409"],["/telegram-search/index.html","0bcc18b28658d2f093243b6411cf5b2e"],["/the-meaning-of-reading/index.html","e7bf71ad1006fe98869a61e2fbce553a"],["/the-way-of-pragram/index.html","6c2bc4008ec8b932718d9ea06cfe84cf"],["/troubleshooting/index.html","9ea3da370df0f0d343905e1be6fb4b0d"],["/untiypro XL安装/index.html","84e4fe69f3f6217c5b7f73248bd70dba"],["/v2ex-eight-sorting-post/index.html","e8845b6a794fe166c847a7e7e54ad3cf"],["/video-websites/index.html","d4613677bad605bcdeda204f782f7c36"],["/vpn-freego/index.html","a0bcb626cb455cfc706cea8925d98d07"],["/waibao/index.html","5dbf8b0189fa8e04da2e4ad04393d9c6"],["/wechat-fans/index.html","d2d551f0a92a32cc989cdf5418b451d4"],["/win-kuaili/index.html","3a81bb47648d5fcac4cd79b23e7c0d14"],["/windows-science-internet/index.html","f9f65c9504d2aa9a3841b0539f6582d5"],["/yzhx-vpn/index.html","f9e14813f7736f1af0b382b961152b8b"],["/一分钟没了 1.5W 。。。/index.html","c0a22f7a5d8db131bb7669f99e10f078"],["/一条高产爆款内容生产线/index.html","f812a42eb7ee338a8913985a0bcdd7a8"],["/为高考学子推荐的六个就业前景广阔的专业/index.html","dc42a111bd3e144abea43c491942d09a"],["/互联网赚钱机器---社群/index.html","c0e7d58e43f41a66290e06fa83b0864d"],["/你们常用的工作方法和思考方式是什么？/index.html","e970b3a1baea215a9f072ec3d5bfe419"],["/准备了19w！搞事/index.html","f424dfcb4d1aa54a05b2d7400fb03d0a"],["/几个很重要的感悟/index.html","29a125b63268aaa970bc5732d7ce5f7f"],["/分割ROI篇/index.html","1b011f65a3a39e548d8b715166be6756"],["/分割精度说明/index.html","016ac3a75923f48743e21254137a93a4"],["/分块程序执行/index.html","8af0d611da412246caf46f2ac6a79ca3"],["/加班公司黑名单！！！/index.html","949f8074e50418f2e3a00e46e7fd3cc7"],["/卧槽，上知乎热搜了！/index.html","9da7f7d16236e88366ed589b370098b7"],["/卧槽，我的小破站爆了！/index.html","79c47a15652d232ee0a9846ff9453716"],["/卧槽，我被盗版了/index.html","b43cb2b9461b8d2368ff9d786a9473a5"],["/卧槽，还有985大学在大一上C语言课？？/index.html","6742b927344de4f43c0fc83e6f9dcfd8"],["/历年微软面试中出现的leetcode算法题/index.html","2ded20bed5b553541560e65c7e836076"],["/去特斯拉试车了/index.html","c9900bdeb2373d00fc23986c677d7817"],["/吃苦的三种境界/index.html","bcc9fcc7d59c00252e22fd5e7014cfca"],["/哪本入门级的学习数据库的书最值得推荐？/index.html","a4677965991998f3e7a8437adf742889"],["/国内外常用的AIGC模型/index.html","cbb7c00d8b6c387d806ba33525e6bf14"],["/国庆假期/index.html","1653975535dc224136700bd4180a4b38"],["/图谱程序字典/index.html","81c7905f3b268014a9e3ceda3fff78b3"],["/图谱训练与分割/index.html","f104274955fb09d592b6c63a991542a7"],["/宣布一件大事/index.html","2276871ab8f308d839641c01bfd73e4d"],["/小鹏P7i试驾体验/index.html","7044d8ce1b0271c6895f0385e94ba6b3"],["/微信PC版3.3.0内测更新，电脑可以刷朋友圈了/index.html","8dd2edec1b081f1fd8bbfe9b954245fd"],["/怎么更快的赚钱？/index.html","6fc1c7c85abad4032112a891892e32f9"],["/我毕业了/index.html","6862e8cbd613cd9390e722054fb84e2c"],["/我！真！的！找到了！爱上学习！的方法！/index.html","f03657862a1a9cb12f7cd7d9a2caaf7e"],["/户口的意义/index.html","cd1104e29c386fc19d78dd50b7b1d562"],["/推荐几个在线学习SQL的网站！/index.html","ff4377007c95bae187b7bb53373e455c"],["/搞了一个程序员成长晋级社群！/index.html","0ca221a983ee3fb5d6e02ade5d4ba45b"],["/摘抄/index.html","4eb8f28e9da895e7fe0c5c964441f294"],["/暴跌30心态崩了/index.html","8e9f459b358ff039c3856ce6785b9c4a"],["/最近很火的ChatGPT到底该怎么玩？/index.html","ed79e094e44dda4e62a1b00932d4e53e"],["/有哪些好看的日历可以买？/index.html","4252b29005da83e9bf4634199d814e56"],["/服务器有啥用/index.html","1c2c9ee2e6c41a614f2464531d80f113"],["/来长沙了！/index.html","8db04c508b21545c4814f136d3b33394"],["/校招污点公司名单/index.html","08bf78bdf0f9529578e4544eb150618b"],["/梭哈200多万/index.html","ac2029b206d13df76641cedc413c9a92"],["/梯形图入门/index.html","e5a52521c64e68b264e73002d3c5695b"],["/橙心优选，凉凉了！/index.html","58b016f6c1b6013e21f70efceef06380"],["/比亚迪汉试驾体验/index.html","716dd88f55568aebaa038146e02702ff"],["/清华转学成电，真的牛逼！/index.html","e4f35cc464f7d76e34002acbaa014296"],["/滴滴程序员被亲戚鄙视：年薪八十万还不如二本教书的/index.html","b948ff4de097b1cf7c881eff301694c0"],["/社群！/index.html","29f3c937ce1d2690c0b63097729e13d6"],["/科学上网之VPN篇/index.html","ed3b3f7fe7521f05a0e2959d2cb530e4"],["/程序员必备的几个技能！看完你也是大神/index.html","b2ca53ce431c15bf5b07d166ce5b53d6"],["/蔚来ET5试驾体验/index.html","6494d581e0256f15018d799bb8a4375c"],["/蔚来，牛逼！/index.html","8bcea378890366665bf82803a789ef40"],["/被录取了/index.html","245c42d592b74e2a0dd5f32089ce1b75"],["/被找事了！/index.html","ce4120ad5f24f2bcece5de6e80e9a054"],["/被拉黑了。。。/index.html","9e75ec507de4d9034d71d36298fb31ed"],["/被车撞了！/index.html","9c072496b026d28cc16b420b1c2f55e9"],["/该如何选购固态硬盘？/index.html","d532e49c93419634f4fcf49a3ba26feb"],["/这本书一定要看！/index.html","f050994048d2c5af752cfb8b6e8dc2c2"],["/选Java还是C++？/index.html","331661e87fbcf7e8942363c9978b0211"],["/那些让你起飞的计算机基础知识/index.html","5575d961ec833d8adf36501ded6f561e"],["/靠这几本算法书，成功拿下大厂offer！/index.html","dd475cebb5c5452c7f4213b88b615909"]];
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
