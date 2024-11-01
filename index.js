/**
 *  自定义网站配置 
 */
const config = {
  title: "杨磊的导航网站",                 //write your website title
  subtitle: "Yang Lei Navigated Stand", //write your website subtitle
  logo_icon: "zoom-out",               //select your logo by semantic-ui icon (you can get more msg in:https://semantic-ui.com/elements/icon.html)
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
  selling_ads: true,                  //Selling your domain or not.(turning on may be helpful for selling this domain by showing some ads.)
  sell_info:{
    domain:"example.com",
    price:500,                        //domain price
    mon_unit:"yen sign",              //monetary unit 
    contact:[                         //how to contact you
      {
        type:"envelope",               //contact type ("weixin","qq","telegram plane","envelope" or "phone")
        content:"info@example.com"
      }
    ]                        
  },
  lists: [                            //Url list
    {
      name:"网站分享",
      icon:"code",
      list:[
        {
          url:"https://175dt.com/",
          name:"梦幻题库",
          desc:"梦幻西游答题哭"
        },
        {
          url:"https://yangleiily.icoc.vc/",
          name:"杨磊的网站",
          desc:"个人网站"
        },
        {
          url:"https://loader.fo/en/",
          name:"YouTube视频下载",
          desc:"视频下载平台"
        },
        {
          url:"https://www.yangleiily.us.kg/",
          name:"杨磊的导航网站",
          desc:"常用搜索引擎与网站分享"
        },
      ]
    },
    {
      name:"科学上网",
      icon:"rss",
      list:[
        {
          url:"https://www.cloudflare-cn.com/",
          name:"cloudflare",
          desc:"随时随地连接、保护和构建"
        },
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
          desc:"自己搭建节点池"
        },
      ]
    },
      name:"节点分享",
      icon:"wifi",
      list:[
        {
          url:"https://www.freeclashnode.com/",
          name:"FreeClashNode",
          desc:"每日更新SSR、V2ray和Clash等节点"
        },
        {
          url:"https://clashgithub.com/",
          name:"免费Clash节点",
          desc:"免费节点每日分享"
        },
        {
          url:"https://xconfig.pages.dev/index2/",
          name:"Configs List",
          desc:"github网站制作"
        },
        {
          url:"https://itsyebekhe.github.io/HiN-VPN/",
          name:"HiN VPN",
          desc:"可选国家、协议等"
        },
      ]
    },
    {
      name:"博客网站",
      icon:"graduation cap",
      list:[
        {
          url:"https://yanglei.nyc.mn/",
          name:"杨磊的博客",
          desc:"hashnode"
        },
        {
          url:"https://blog520.000.pe/",
          name:"杨磊的分享博客",
          desc:"infinityfree"
        },
        {
          url:"https://www.yanglei.us.kg/",
          name:"杨磊博客",
          desc:"Blogger"
        },
        {
          url:"http://www.blog520.us.kg/",
          name:"杨磊的GitHub博客",
          desc:"github"
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
  const footer = el('footer',[],el('div',['class="footer"'],'杨磊导航站' + el('a',['class="ui label"','https://github.com/yangleiily520/CF-Worker-Dir"','target="_blank"'],el('i',['class="github icon"'],"") + 'Cf-Worker-Dir') + ' &copy; Base on ' + el('a',['class="ui label"'],el('i',['class="balance scale icon"'],"") + 'yangleiily@gmail.com')));
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
