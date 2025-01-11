/**
 *  自定义网站配置 
 */
const config = {
  title: "冰宝路导航站",                 //write your website title
  subtitle: "Bingbao Road Navigation Station", //write your website subtitle
  logo_icon: "sitemap",               //select your logo by semantic-ui icon (you can get more msg in:https://semantic-ui.com/elements/icon.html)
  search:true,                        //enable search function
  search_engine:[                     //choose search engine which you use
    {
      name:"百 度",
      template:"https://www.baidu.com/s?wd=$s"
    },
    {
      name:"谷 歌",
      template:"https://www.google.com/search?q=$s"
    },
    {
      name:"必 应",
      template:"https://www.bing.com/search?q=$s"
    },
    {
      name:"搜 狗",
      template:"https://www.sogou.com/web?query=$s"
    }
  ],
  lists: [                            //Url list
    {
      name:"常用网站",
      icon:"code",
      list:[
        {
          url:"https://www.cloudflare-cn.com/",
          name:"cloudflare",
          desc:"科赋锐信息科技"
        },
        {
          url:"https://github.com/",
          name:"GitHub",
          desc:"GitHub项目部署"
        },
        {
          url:"https://gitee.com/",
          name:"Gitee",
          desc:"国内代码部署"
        },
        {
          url:"https://www.youxiaohou.com/",
          name:"油小猴",
          desc:"一个汇聚了各种黑科技的小站"
        },
        {
          url:"https://youtube.com/",
          name:"YouTube",
          desc:"油管视频"
        },
        {
          url:"https://www.52pojie.cn/",
          name:"吾爱破解",
          desc:"吾爱破解论坛"
        },
        {
          url:"https://loader.fo/en/",
          name:"YouTube视频下载",
          desc:"油管视频下载"
        },
        {
          url:"https://www.netflix.com/de/",
          name:"奈飞",
          desc:"奈飞视频"
        },
        {
          url:"https://www.disneyplus.com/",
          name:"迪士尼",
          desc:"迪士尼视频"
        },
        {
          url:"https://cn.wordpress.org/download/releases/",
          name:"Wordpress中文包",
          desc:""
        },
        {
          url:"https://www.bt.cn/",
          name:"国内流行宝塔运维面板",
          desc:""
        },
        {
          url:"https://www.aapanel.com/new/index.html/",
          name:"宝塔面板国际版",
          desc:""
        },
        {
          url:"https://www.apkmirror.com/",
          name:"APK镜像",
          desc:""
        },
        {
          url:"https://docs.google.com/",
          name:"Google 文档",
          desc:""
        },
        {
          url:"https://www.dalipan.com/",
          name:"大力盘",
          desc:""
        },
        {
          url:"https://bks.thefuture.top/",
          name:"网盘搜索",
          desc:""
        },
        {
          url:"https://v2rayse.com/node-convert/",
          name:"节点转换工具",
          desc:""
        },
        {
          url:"https://htmlcolorcodes.com/zh/",
          name:"HTML颜色代码",
          desc:""
        },
        {
          url:"https://cli.im/",
          name:"草料二维码生成器",
          desc:""
        },
      ]
    },
    {
      name:"在线翻译",
      icon:"trophy",
      list:[
        {
          url:"https://www.deepl.com/zh/translator/",
          name:"DeepL翻译",
          desc:""
        },
        {
          url:"https://www.bing.com/translator/",
          name:"必应翻译",
          desc:""
        },
        {
          url:"https://transmart.qq.com/",
          name:"腾讯翻译",
          desc:""
        },
        {
          url:"https://fanyi.youdao.com/",
          name:"有道翻译",
          desc:""
        },
        {
          url:"https://translate.alibaba.com/",
          name:"阿里翻译",
          desc:""
        },
        {
          url:"https://translate.volcengine.com/",
          name:"火山翻译",
          desc:""
        },
        {
          url:"https://translate.google.com/",
          name:"谷歌翻译",
          desc:""
        },
        {
          url:"https://fanyi.xfyun.cn/console/trans/text/",
          name:"讯飞文本翻译",
          desc:""
        },
        {
          url:"https://fanyi.baidu.com/",
          name:"百度翻译",
          desc:""
        },
        {
          url:"https://fanyi.caiyunapp.com/",
          name:"彩云小译",
          desc:""
        },
        {
          url:"https://fanyi.sogou.com/",
          name:"搜狗翻译",
          desc:""
        },
      ]
    },
    {
      name:"网速检测",
      icon:"wifi",
      list:[
        {
          url:"https://fast.com/",
          name:"fast测速",
          desc:""
        },
        {
          url:"https://www.speedtest.net/",
          name:"Speedtest",
          desc:""
        },
        {
          url:"https://www.browserscan.net/zh/speed-test/",
          name:"Browser Scan",
          desc:""
        },
        {
          url:"https://www.speedtest.cn/",
          name:"测速网",
          desc:""
        },
        {
          url:"https://www.librespeed.cn/",
          name:"LibreSpeed",
          desc:""
        },
        {
          url:"https://www.mfisp.com/speedtest/",
          name:"梦飞测速网",
          desc:""
        },
        {
          url:"https://test.ustc.edu.cn/",
          name:"中国科学技术大学测速",
          desc:""
        },
        {
          url:"https://speed.neu.edu.cn/",
          name:"东北大学测速",
          desc:""
        },
        {
          url:"https://us.speedtest.hostxen.com/",
          name:"美国洛杉矶",
          desc:""
        },
      ]
    },
    {
      name:"梦幻西游",
      icon:"cog",
      list:[
        {
          url:"https://175dt.com/",
          name:"175DT答题器",
          desc:""
        },
        {
          url:"https://xyq.cbg.163.com/",
          name:"梦幻藏宝阁",
          desc:""
        },
        {
          url:"https://xyq.163.com/tools/index.html/",
          name:"网页版工具箱",
          desc:""
        },
        {
          url:"https://xyq.163.com/dj020_4.html/",
          name:"符石组合",
          desc:""
        },
        {
          url:"https://xyq.163.com/2021/jingmai/",
          name:"奇经八脉",
          desc:""
        },
        {
          url:"https://xyq.gm.163.com/",
          name:"梦幻客服专区",
          desc:""
        },
        {
          url:"https://ds.163.com/article/5fe484a0517f0f149bb1300f/",
          name:"动物套属性",
          desc:""
        },
        {
          url:"https://www.3733.com/news/361710.html/",
          name:"钟灵石属性",
          desc:""
        },
        {
          url:"https://ds.163.com/article/5fa9c9f57c87224d9e4260ac/",
          name:"法宝介绍",
          desc:""
        },
        {
          url:"https://box.175dt.com/12/",
          name:"法宝加灵气",
          desc:""
        },
      ]
    },
    {
      name:"AI工具",
      icon:"id card",
      list:[
        {
          url:"https://chatgpt.com/",
          name:"ChatGPT",
          desc:""
        },
        {
          url:"https://chatgptchatapp.com/",
          name:"ChatGPT 4o",
          desc:""
        },
        {
          url:"https://chat.doltrans.com/",
          name:"ChatGAi",
          desc:""
        },
        {
          url:"https://hzc1chat.skybyte.me/",
          name:"ChatBot",
          desc:""
        },
        {
          url:"https://copilot.microsoft.com/onboarding/",
          name:"Copilot",
          desc:""
        },
        {
          url:"https://uuu.mygpt.bid/",
          name:"AI_TOOL00",
          desc:""
        },
        {
          url:"https://ai.ninebotai.com/",
          name:"NineBot AI（汇总）",
          desc:""
        },
        {
          url:"https://ai.codawise.com/",
          name:"AI创作助手国内版",
          desc:""
        },
      ]
    },
    {
      name:"接码平台",
      icon:"heart",
      list:[
        {
          url:"https://yunjiema.net/",
          name:"YunJieMa",
          desc:""
        },
        {
          url:"https://www.zusms.com/",
          name:"zusms",
          desc:""
        },
        {
          url:"https://yunduanxin.net/",
          name:"yunduanxin",
          desc:""
        },
        {
          url:"https://www.mianfeisms.xyz/",
          name:"mianfeisms",
          desc:""
        },
        {
          url:"https://jiemahao.com/",
          name:"jiemahao",
          desc:""
        },
        {
          url:"https://sms-activate.guru/en/",
          name:"sms-activate",
          desc:""
        },
        {
          url:"https://wetalkapp.com/receive-sms/",
          name:"wetalk",
          desc:""
        },
        {
          url:"https://us-phone-number.com/",
          name:"US-Phone-Number",
          desc:""
        },
      ]
    },
    {
      name:"IP干净度检测",
      icon:"fax",
      list:[
        {
          url:"https://dnschecker.org/ip-location.php/",
          name:"Scamalytics",
          desc:""
        },
        {
          url:"https://www.ip-score.com/",
          name:"IP-Score",
          desc:""
        },
        {
          url:"https://www.ipaddress.com/what-is-my-ip-address/",
          name:"MY IP Lookup",
          desc:""
        },
        {
          url:"https://ipleak.com/full-report/",
          name:"Whatismyipaddress",
          desc:""
        },
      ]
    },
    {
      name:"IP地址检测",
      icon:"microphone",
      list:[
        {
          url:"https://whoer.net/zh/",
          name:"IP地址检测",
          desc:""
        },
        {
          url:"https://ip.900cha.com/",
          name:"IP地址查询",
          desc:""
        },
        {
          url:"https://iplark.com/",
          name:"查看本机IP地址",
          desc:""
        },
        {
          url:"https://iplocation.io/",
          name:"IP Address",
          desc:""
        },
        {
          url:"https://dnschecker.org/ip-location.php",
          name:"IP Address Lookup",
          desc:""
        },
        {
          url:"https://whatismyipaddress.com/",
          name:"My IP Address",
          desc:""
        },
        {
          url:"https://www.ipaddress.com/what-is-my-ip-address/",
          name:"ipaddress",
          desc:""
        },
        {
          url:"https://www.ipvoid.com/ip-blacklist-check/",
          name:"IP VOID",
          desc:""
        },
        {
          url:"https://ipleak.com/full-report/",
          name:"IP Leak",
          desc:""
        },
      ]
    },
    {
      name:"系统下载",
      icon:"shield alternate",
      list:[
        {
          url:"https://www.winos.me/",
          name:"WINOS",
          desc:""
        },
        {
          url:"https://www.imsdn.cn/",
          name:"MSDN原版系统",
          desc:""
        },
        {
          url:"http://www.xitongiso.com/",
          name:"系统镜像",
          desc:""
        },
        {
          url:"https://www.dadighost.com/",
          name:"大地系统",
          desc:""
        },
        {
          url:"https://www.xitongzhijia.net/",
          name:"系统之家",
          desc:""
        },
        {
          url:"http://www.chunjingxitong.com/",
          name:"纯净系统",
          desc:""
        },
        {
          url:"http://www.cjbxt.com/",
          name:"纯净系统基地",
          desc:""
        },
        {
          url:"https://msdn.itellyou.cn/",
          name:"MSDN, 我告诉你",
          desc:""
        },
        {
          url:"https://www.xitongku.com/",
          name:"MSDN系统库",
          desc:""
        },
      ]
    },
    {
      name:"图片编辑",
      icon:"audio description",
      list:[
        {
          url:"https://www.iloveimg.com/zh-cn/",
          name:"iloveimg",
          desc:""
        },
        {
          url:"https://cdkm.com/cn/png-to-svg/",
          name:"图片转换",
          desc:""
        },
        {
          url:"https://www.photopea.com/",
          name:"Photopea在线",
          desc:""
        },
        {
          url:"https://www.lanren.work/",
          name:"懒人办公",
          desc:""
        },
        {
          url:"https://www.fotor.com/cn/",
          name:"免费编辑图片",
          desc:""
        },
        {
          url:"https://www.gaitubao.com/",
          name:"改图宝",
          desc:""
        },
        {
          url:"https://web.baimiaoapp.com/",
          name:"图片转文字",
          desc:""
        },
        {
          url:"https://www.favicon.vip/",
          name:"图标获取Api接口",
          desc:""
        },
        {
          url:"https://toolb.cn/favicon",
          name:"网站图标获取",
          desc:""
        },
        {
          url:"https://gonglue.qinggl.com/app/img/icon.jsp",
          name:"网页图标抓取",
          desc:""
        },
        {
          url:"https://avatarmaker.com/",
          name:"虚拟头像",
          desc:""
        },
        {
          url:"https://www.meiguodizhi.com",
          name:"美国地址生成",
          desc:""
        },
        {
          url:"https://ratenn.com/american.html",
          name:"美国地址生成器",
          desc:""
        },
        {
          url:"https://edu.chatgpt.org.uk/",
          name:"【假证生成器】",
          desc:""
        },
      ]
    },
    {
      name:"免费图床",
      icon:"low vision",
      list:[
        {
          url:"https://imgse.com/",
          name:"imgse",
          desc:""
        },
        {
          url:"https://imgur.com/",
          name:"imgur",
          desc:""
        },
        {
          url:"https://www.imagehub.cc/",
          name:"imagehub",
          desc:""
        },
        {
          url:"https://imgbb.com/",
          name:"imgbb",
          desc:""
        },
        {
          url:"https://postimages.org/",
          name:"postimages",
          desc:""
        },
        {
          url:"https://www.imgurl.org/",
          name:"imgurl",
          desc:""
        },
        {
          url:"https://z4a.net/",
          name:"z4a",
          desc:""
        },
        {
          url:"https://smms.app/",
          name:"sm.ms",
          desc:""
        },
      ]
    },
    {
      name:"邮箱分享",
      icon:"closed captioning",
      list:[
        {
          url:"https://www.emailnator.com/",
          name:"Gmail 临时邮箱",
          desc:""
        },
        {
          url:"https://www.linshiguge.com/",
          name:"临时邮箱",
          desc:""
        },
        {
          url:"https://outlook.live.com/mail/",
          name:"outlook邮箱",
          desc:""
        },
        {
          url:"https://www.google.com/intl/zh-CN_cn/gmail/about/",
          name:"Google邮箱",
          desc:""
        },
        {
          url:"https://account.proton.me/zh-cn/mail/signup/",
          name:"Proton邮箱",
          desc:""
        },
        {
          url:"https://mail.163.com/",
          name:"163邮箱",
          desc:""
        },
        {
          url:"https://mail.126.com/",
          name:"126邮箱",
          desc:""
        },
        {
          url:"https://www.yeah.net/",
          name:"Yeah邮箱",
          desc:""
        },
        {
          url:"https://mail.qq.com/",
          name:"QQ邮箱",
          desc:""
        },
        {
          url:"https://mail.yahoo.com/",
          name:"Yahoo邮箱",
          desc:""
        },
      ]
    },
    {
      name:"网盘分享",
      icon:"universal access",
      list:[
        {
          url:"https://www.123pan.com/",
          name:"123云盘",
          desc:""
        },
        {
          url:"https://www.feijipan.com/",
          name:"小飞机云盘",
          desc:""
        },
        {
          url:"https://www.alipan.com/",
          name:"阿里云盘",
          desc:""
        },
        {
          url:"https://www.ctfile.com/p/login/",
          name:"城通网盘",
          desc:""
        },
        {
          url:"https://pc.woozooo.com/account.php/",
          name:"蓝泰云",
          desc:""
        },
        {
          url:"https://cloud.189.cn/web/login.html/",
          name:"天翼云盘",
          desc:""
        },
        {
          url:"https://www.microsoft.com/en-us/microsoft-365/onedrive/online-cloud-storage/",
          name:"微软云盘",
          desc:""
        },
        {
          url:"https://workspace.google.com/products/drive/",
          name:"谷歌云盘",
          desc:""
        },
        {
          url:"https://www.icloud.com/",
          name:"苹果云盘",
          desc:""
        },
        {
          url:"https://www.mediafire.com/",
          name:"MediaFir",
          desc:""
        },
        {
          url:"https://infini-cloud.net/en/",
          name:"infini-cloud",
          desc:""
        },
        {
          url:"https://www.backblaze.com/",
          name:"B2云存储",
          desc:""
        },
        {
          url:"https://mega.io/",
          name:"mega网盘",
          desc:""
        },
        {
          url:"https://u.pcloud.com/#page=login/",
          name:"pcloud网盘",
          desc:""
        },
      ]
    },
    {
      name:"节点工具",
      icon:"deaf",
      list:[
        {
          url:"https://stock.hostmonit.com/CloudFlareYes/",
          name:"优选IP",
          desc:"全球主机监控 - 国内外VPS"
        },
        {
          url:"https://cloudflare-scanner.vercel.app/",
          name:"Cloudflare Scanner",
          desc:"Cloudflare 优选IP"
        },
        {
          url:"https://yangleiily.yangleiily.workers.dev/",
          name:"节点池",
          desc:"自建节点池"
        },
        {
          url:"https://clashgithub.com/",
          name:"免费Clash节点",
          desc:"免费节点每日分享"
        },
        {
          url:"https://xconfig.pages.dev/index2/",
          name:"Configs List",
          desc:"github网站制作节点"
        },
      ]
    },
    {
      name:"免费机场",
      icon:"wheelchair",
      list:[
        {
          url:"https://zero.2c.lol/#/register?code=ThFYPVVY/",
          name:"Free机场",
          desc:"优惠码：free7 free加月份"
        },
        {
          url:"https://cloudcat.top/#/register?code=UOyClGbi/",
          name:"云猫机场",
          desc:"优惠码：cloudcat7   cloudcat加月份"
        },
        {
          url:"https://gov.ninecloud.co/#/login/",
          name:"ninecloud",
          desc:"优惠吗：c"
        },
        {
          url:"https://bplink.xyz/#/dashboard/store/plan/2/",
          name:"白嫖机场",
          desc:"优惠吗：@bplikxyz"
        },
        {
          url:"https://alice.sale/#/register?code=4xOhUNj8/",
          name:"Alice Network",
          desc:"优惠吗：happyalice"
        },
        {
          url:"https://www.31465.cfd/#/register?code=5RV0pkqh/",
          name:"绝绝子",
          desc:"优惠吗：绝绝子开业大吉"
        },
        {
          url:"https://pkq.xlm.plus/#/register?code=lmzWUdrh/",
          name:"蓝焰云",
          desc:""
        },
        {
          url:"https://free.colacloud.free.hr/#/register?code=ZMUXeW38/",
          name:"免费空气",
          desc:""
        },
        {
          url:"https://xn--l6qx3lcvp58x.com/#/register?code=MeSlgmAK/",
          name:"养老机场",
          desc:""
        },
        {
          url:"https://1vpn.sbs/#/register/",
          name:"一元云",
          desc:""
        },
        {
          url:"https://console.marsix.net/#/login/",
          name:"火星互联网交换中心",
          desc:""
        },
        {
          url:"https://dash.henet.uk/",
          name:"Helium Network",
          desc:""
        },
        {
          url:"https://ikuuu.pw/auth/login/",
          name:"IKUUU VPN",
          desc:""
        },
      ]
    },
    {
      name:"云服务器",
      icon:"coffee",
      list:[
        {
          url:"https://www.oracle.com/cn/cloud/free/",
          name:"甲骨文云",
          desc:"永久免费的服务器"
        },
        {
          url:"https://portal.aws.amazon.com/billing/signup#/start/email/",
          name:"亚马逊云",
          desc:"免费一年EC2,三个月轻量"
        },
        {
          url:"https://azure.microsoft.com/zh-cn/free/",
          name:"微软云",
          desc:"免费一个月"
        },
        {
          url:"https://cloud.google.com/?authuser=1/",
          name:"谷歌云",
          desc:"免费三个月"
        },
        {
          url:"https://gcore.com/",
          name:"Gcore",
          desc:"云平台3欧元每月"
        },
        {
          url:"https://www.ovhcloud.com/en-sg/",
          name:"OVHcloud",
          desc:"老牌法国厂商"
        },
        {
          url:"https://v.ps/",
          name:"V.PS",
          desc:"有软银线路的机器6刀一个月"
        },
        {
          url:"https://hosteons.com/",
          name:"HostEONS",
          desc:"老牌厂商12美元一年"
        },
        {
          url:"https://www.layerstack.com/",
          name:"Layerstack",
          desc:"东亚北美主机有GIA线路"
        },
        {
          url:"https://bandwagonhost.com/",
          name:"bandwagonhost",
          desc:"搬瓦工CN2GIA代表"
        },
        {
          url:"https://www.dmit.io/",
          name:"DMIT",
          desc:"优质VPS服务商"
        },
        {
          url:"https://my.racknerd.com/aff.php?aff=5334/",
          name:"RackNerd",
          desc:"9.89美元一年服务器"
        },
        {
          url:"https://justhost.ru/zh/",
          name:"JustHost.ru",
          desc:"俄罗斯三网CN2 11RMB每月"
        },
        {
          url:"https://www.lightnode.com/",
          name:"LightNode",
          desc:"埃及土耳其巴铁VPS"
        },
        {
          url:"https://cloud.hosthatch.com/signup/",
          name:"HostHatch",
          desc:"性价比大鸡VPS"
        },
        {
          url:"https://www.rcp.net/zh-hans/",
          name:"RCP",
          desc:"日本优质线路"
        },
        {
          url:"https://liteserver.nl/",
          name:"LiteServer",
          desc:"荷兰大盘鸡"
        },
        {
          url:"https://www.netcup.eu/",
          name:"netcup",
          desc:"欧洲大盘鸡3刀每月"
        },
        {
          url:"https://www.hetzner.com/",
          name:"Hetzner",
          desc:"芬兰德国强机3刀每月"
        },
        {
          url:"https://cloud.atlantic.net/",
          name:"atlantic",
          desc:"大西洋可白嫖一年"
        },
        {
          url:"https://ion.krypt.asia/",
          name:"iON Cloud",
          desc:"国区优化线路"
        },
        {
          url:"https://spartanhost.org/",
          name:"Spartan host",
          desc:"斯巴达美国机CN2GIA"
        },
        {
          url:"https://cloud.fuzzypn.me/",
          name:"fuzzypn",
          desc:"越南VPS移动优化"
        },
        {
          url:"https://console.scaleway.com/",
          name:"scaleway",
          desc:"星尘IPv6特价服务器"
        },
        {
          url:"https://www.digitalocean.com/",
          name:"DigitalOcean",
          desc:"简称D0可白嫖200美元"
        },
        {
          url:"https://www.linode.com/",
          name:"Linode",
          desc:"100美金2个月"
        },
        {
          url:"https://app.cloudcone.com/?ref=10734/",
          name:"CloudCone",
          desc:"9.9美元1年"
        },
        {
          url:"https://www.vultr.com/?ref=8981695/",
          name:"Vultr",
          desc:"老牌VPS服务商"
        },
      ]
    },
    {
      name:"虚拟主机",
      icon:"bug",
      list:[
        {
          url:"https://www.infinityfree.com/",
          name:"infinityfree",
          desc:""
        },
        {
          url:"https://panel7.serv00.com",
          name:"serv00",
          desc:""
        },
        {
          url:"https://nowhosting.kr/",
          name:"韩国主机",
          desc:""
        },
        {
          url:"https://www.biz.nf/",
          name:"BIZ.NF",
          desc:""
        },
        {
          url:"https://www.freehostia.com/free-cloud-hosting/",
          name:"Freehostia",
          desc:""
        },
        {
          url:"https://cklghost.in/",
          name:"cklghost.in",
          desc:""
        },
        {
          url:"http://evai.pl/",
          name:"evai.pl",
          desc:""
        },
        {
          url:"https://www.alchosting.net/free-hosting/",
          name:"alchosting",
          desc:""
        },
        {
          url:"https://beget.com/en/hosting/free/",
          name:"beget",
          desc:""
        },
      ]
    },
    {
      name:"域名分享",
      icon:"hospital symbol",
      list:[
        {
          url:"https://www.cloudns.net/",
          name:"clouDNS",
          desc:""
        },
        {
          url:"https://x10hosting.com/login/",
          name:"x10 hosting",
          desc:""
        },
        {
          url:"https://nic.ua/",
          name:"pp.ua",
          desc:""
        },
        {
          url:"https://nic.us.kg/",
          name:"us.kg",
          desc:""
        },
        {
          url:"https://nic.eu.org/",
          name:"eu.org",
          desc:""
        },
        {
          url:"https://secure.nom.za/",
          name:"nom.za",
          desc:""
        },
        {
          url:"https://home.obl.ong/",
          name:"obl.ong",
          desc:""
        },
        {
          url:"https://www.l53.net/",
          name:"153域名",
          desc:""
        },
        {
          url:"https://www.onamae.com/",
          name:"onamae",
          desc:""
        },
        {
          url:"https://www.dynu.com/",
          name:"dynu",
          desc:""
        },
        {
          url:"https://dynv6.com/",
          name:"dynv6",
          desc:""
        },
        {
          url:"https://www.site.ac/",
          name:"site.ac",
          desc:""
        },
      ]
    },
    {
      name:"JavBus视频",
      icon:"play circle",
      list:[
        {
          url:"https://www.javbus.com/",
          name:"javbus.com",
          desc:""
        },
        {
          url:"https://www.buscdn.help/",
          name:"buscdn.help",
          desc:""
        },
        {
          url:"https://javbus.help/",
          name:"javbus.help",
          desc:""
        },
        {
          url:"https://busfan.help/",
          name:"busfan.help",
          desc:""
        },
        {
          url:"http://fanbus.help/",
          name:"fanbus.help",
          desc:""
        },
        {
          url:"http://seejav.help/",
          name:"seejav.help",
          desc:""
        },
      ]
    },
    {
      name:"磁力网站",
      icon:"stop circle",
      list:[
        {
          url:"https://javmulu.net/",
          name:"Jav目录",
          desc:""
        },
        {
          url:"https://javdb521.com/",
          name:"Jav DB",
          desc:""
        },
        {
          url:"https://www.javlibrary.com/cn/",
          name:"JAV Library",
          desc:""
        },
        {
          url:"https://attackers.net/",
          name:"ATTACKERS.NET",
          desc:""
        },
        {
          url:"https://ero.memo.wiki/d/ATTACKERS/",
          name:"ATTACKERS",
          desc:""
        },
      ]
    },
    {
      name:"导航网站",
      icon:"text height",
      list:[
        {
          url:"https://pipigou805.top/",
          name:"站点导航",
          desc:""
        },
        {
          url:"https://ssguide.xyz/",
          name:"S.S.G.導航",
          desc:""
        },
        {
          url:"https://141jj.com/",
          name:"141JJ最全成人",
          desc:""
        },
        {
          url:"https://jubt.top",
          name:"聚BT - 磁力资源",
          desc:""
        },
        {
          url:"https://biglist.xyz/",
          name:"文尼导航",
          desc:""
        },
        {
          url:"https://txscz.com/",
          name:"同学导航",
          desc:""
        },
        {
          url:"https://yycdh30.com:56701/",
          name:"夜夜草",
          desc:""
        },
        {
          url:"https://jiao.se/",
          name:"娇色导航",
          desc:""
        },
      ]
    },
    {
      name:"在线网站",
      icon:"text width",
      list:[
        {
          url:"https://freejavbt02.com/",
          name:"JAV目錄大全",
          desc:""
        },
        {
          url:"https://netflav.com/",
          name:"Netflav",
          desc:""
        },
        {
          url:"https://lbvjiuawc.buzz/",
          name:"久爱网",
          desc:""
        },
        {
          url:"https://awjqub.icu/",
          name:"暗网禁区",
          desc:""
        },
        {
          url:"https://www.fld81.com/",
          name:"浴室少女",
          desc:""
        },
        {
          url:"https://mjv001.com/",
          name:"18 AV",
          desc:""
        },
        {
          url:"https://jable.tv/",
          name:"Joble TV",
          desc:""
        },
        {
          url:"https://goodav17.com/",
          name:"正妹 AV",
          desc:""
        },
        {
          url:"https://gogo.pipigou805.top/",
          name:"狗狗 AV",
          desc:""
        },
        {
          url:"https://thisav.com/dm10/cn/",
          name:"Tiss AV",
          desc:""
        },
        {
          url:"https://missav.com/dm10/cn/",
          name:"Miss AV",
          desc:""
        },
        {
          url:"https://japanhub.net/",
          name:"Japnhub",
          desc:""
        },
        {
          url:"https://highporn.net/",
          name:"HighPorn",
          desc:""
        },
      ]
    },
    {
      name:"个人导航",
      icon:"certificate",
      list:[
        {
          url:"https://yangleiily.icoc.vc/",
          name:"杨磊的网站",
          desc:"个人网站"
        },
        {
          url:"https://blog520.freeddns.org/",
          name:"杨磊的博客",
          desc:"hashnode"
        },
        {
          url:"https://blog110.us.kg/",
          name:"杨磊的分享博客",
          desc:"infinityfree"
        },
        {
          url:"https://www.blog520.us.kg/",
          name:"杨磊博客",
          desc:"Blogger"
        },
        {
          url:"https://dhz520.github.io/",
          name:"仓鼠个人镜像导航",
          desc:"Github"
        },
        {
          url:"https://dh520.us.kg/",
          name:"冰淇淋导航",
          desc:"自建导航"
        },
      ]
    }
  ]
}
const el = (tag, attrs, content) => `<${tag} ${attrs.join(" ")}>${content}</${tag}>`;

async function handleRequest(request) {
  const init = {
    headers: {
      'content-type': 'text/html;charset=UTF-8',
    },
  }
  return new Response(renderHTML(renderIndex(),config.selling_ads? renderSeller() :null), init);
}
addEventListener('fetch', event => {
  return event.respondWith(handleRequest(event.request))
})

/*通过分析链接 实时获取favicon
* @url 需要分析的Url地址
*/
function getFavicon(url) {
  const domain = url.replace(/^https?:\/\//, '').split('/')[0];
  return `https://icons.duckduckgo.com/ip3/${domain}.ico`;
}

/** Render Functions
 *  渲染模块函数
 */

function renderIndex(){
  const footer = el('footer',[],el('div',['class="footer"'],'冰宝路导航站' + el('a',['class="ui label"','href="https://github.com/yangleiily520/CF-Worker-Dir"','target="_blank"'],el('i',['class="github icon"'],"") + 'Cf-Worker-Dir') + ' &copy; Base on ' + el('a',['class="ui label"'],el('i',['class="balance scale icon"'],"") + 'yangleiily@gmail.com')));
  return renderHeader() + renderMain() + footer;
}

function renderHeader(){
  const item = (template,name) => el('a',['class="item"',`data-url="${template}"`],name);

  var nav = el('div',['class="ui large secondary inverted menu"'],el('div',['class="item"'],el('p',['id="hitokoto"'],'条条大路通罗马')))
  var title = el('h1',['class="ui inverted header"'],el('i',[`class="${config.logo_icon} icon"`],"") + el('div',['class="content"'],config.title + el('div',['class="sub header"'],config.subtitle)));
  var menu = el('div',['id="sengine"','class="ui bottom attached tabular inverted secondary menu"'],el('div',['class="header item"'],'&nbsp;') + config.search_engine.map((link,key) =>{
    if(key == 0){
      return el('a',['class="active item"',`data-url="${link.template}"`],link.name);
    }else{
      return item(link.template,link.name);
    }
  }).join(""))
  var input = el('div',['class="ui left corner labeled right icon fluid large input"'],el('div',['class="ui left corner label"'],el('img',['id="search-fav"','class="left floated avatar ui image"','src="https://www.baidu.com/favicon.ico"'],"")) + el('input',['id="searchinput"','type="search"','placeholder="搜索你想要知道的……"','autocomplete="off"'],"") + el('i',['class="inverted circular search link icon"'],""));
  return el('header',[],el('div',['id="head"','class="ui inverted vertical masthead center aligned segment"'],(config.hitokoto ? el('div',['id="nav"','class="ui container"'],nav) : "") + el('div',['id="title"','class="ui text container"'],title + (config.search ? input + menu :"") + `${config.selling_ads ? '<div><a id="menubtn" class="red ui icon inverted button"><i class="heart icon"></i> 喜欢此域名 </a></div>' : ''}`)))
}

function renderMain() {
  var main = config.lists.map((item) => {
    const card = (url,name,desc)=> el('a',['class="card"',`href=${url}`,'target="_blank"'],el('div',['class="content"'],el('img',['class="left floated avatar ui image"',`src=${getFavicon(url)}`],"") + el('div',['class="header"'],name) + el('div',['class="meta"'],desc)));
    const divider = el('h4',['class="ui horizontal divider header"'],el('i',[`class="${item.icon} icon"`],"")+item.name);

    var content = el('div',['class="ui four stackable cards"'],item.list.map((link) =>{
      return card(link.url,link.name,link.desc);
    }).join(""));

    return el('div',['class="ui basic segment"'],divider + content);
  }).join("");
  
  return el('main',[],el('div',['class="ui container"'],main));
}

function renderHTML(index,seller) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>${config.title} - ${config.subtitle}</title>
      <link href="https://cdn.jsdelivr.net/npm/semantic-ui-css@2.4.1/semantic.min.css" rel="stylesheet">
      <link href="https://cdn.jsdelivr.net/gh/sleepwood/cf-worker-dir@0.1.1/style.css" rel="stylesheet">
      <script src="https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/semantic-ui-css@2.4.1/semantic.min.js"></script>
  </head>
  <body>
    ${index}
    ${config.selling_ads ? seller : ''}
    <script src="https://v1.hitokoto.cn/?encode=js&select=%23hitokoto" defer></script>
    <script>
      $('#sengine a').on('click', function (e) {
        $('#sengine a.active').toggleClass('active');
        $(e.target).toggleClass('active');
        $('#search-fav').attr('src',$(e.target).data('url').match(`+/https{0,1}:\/\/\S+\//+`)[0] + '/favicon.ico') ;
      });
      $('.search').on('click', function (e) {
          var url = $('#sengine a.active').data('url');
          url = url.replace(`+/\$s/+`,$('#searchinput').val());
          window.open(url);
      });
      /* 鼠标聚焦时，回车事件 */
      $("#searchinput").bind("keypress", function(){
          if (event.keyCode == 13){
          // 触发需要调用的方法
          $(".search").click();
          }
      });
      $('#menubtn').on('click', function (e) {
          $('#seller').modal('show');
      });
    </script>
  </body>

  </html>`
}
