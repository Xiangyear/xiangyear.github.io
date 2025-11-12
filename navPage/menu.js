/* ---------------------------
   菜单数据配置
---------------------------- */
const menuData = [
  { 
    title: "搜索引擎", 
    items: [
      { name: "Google", url: "https://www.google.com", type: "Search" },
      { name: "Bing", url: "https://www.bing.com", type: "Search" },
      { name: "DuckDuckGo", url: "https://duckduckgo.com", type: "Search" },
      { name: "百度", url: "https://www.baidu.com", type:"Search" },
      { name:"archive",url:"https://archive.org/",type:"BookSearch"},
    ] 
  },
  { 
    title: "社交媒体", 
    items: [
      { name: "Twitter", url: "https://www.twitter.com", type: "Social" },
      { name: "Facebook", url: "https://www.facebook.com", type: "Social" },
      { name: "Instagram", url: "https://www.instagram.com", type: "Social" },
      { name: "Bilibili",url:"https://www.bilibili.com",type:"Social"},
      { name: "YouTube",url:"https://www.youtube.com",type:"Social"}
    ] 
  },
  { 
    title: "开发工具", 
    items: [
      { name: "GitHub", url: "https://github.com", type: "Code" },
      { name: "Replit", url: "https://www.replit.com", type: "Code" },
      { name:"draw.io",url:"https://app.diagrams.net/",type:"Draw"},
      { name:"apifox",url:"https://apifox.com/",type:"Code"},


    ] 
  },
  { 
    title: "个人界面", 
    items: [
      { name: "Xiangyear Blog", url: "https://xiangyear.github.io/", type: "个人博客" },
      { name: "Xiangyear Bilibili",url:"https://space.bilibili.com/357088410",type:"个人B站"},
      { name: "Xiangyear Github",url:"https://github.com/Xiangyear",type:"个人仓库"},
    ] 
  },
  { 
    title: "游戏", 
    items: [
      { name: "雨世界中文维基", url: "https://rainworld.miraheze.org/wiki/Rain_World_Wiki/zh-hans", type: "RainWorld" },
      { name: "雨世界ModWiki", url: "https://rainworldmods.miraheze.org/wiki/Main_Page", type:"RainWorld"},
      { name: "RainDB",url:"https://andrewfm.github.io/RainDB/",type:"RainWorld"},
      { name: "雨世界房间开发",url:"https://solaristheworstcatever.github.io/Repo-Site/index.html#",type:"RainWorld"},
      { name: "雨世界TechWiki",url:"https://rwtechwiki.github.io/",type:"Rainworld"},
      { name: "Mc百科",url:"https://www.mcmod.cn/",type:"MineCraft"},
      { name: "P社游戏互助资源站",url:"https://share.paragames233.com/index.html",type:"Paradox"},
      { name: "SteamDB",url:"https://steamdb.info/",type:"Steam史低"},
      { name: "蔚蓝MiaoNet",url:"https://bbs.celemiao.com/",type:"Celeste"},
      { name:"SpeedRun",url:"https://www.speedrun.com/",type:"SpeedRun"},



    ] 
  },
  { 
    title: "开发手册", 
    items: [
      { name: "DevDocs",url:"https://devdocs.io/",type:"通用文档浏览器工具"},
      { name: "JavaSE17语言特性", url: "https://docs.oracle.com/javase/specs/jls/se17/html/index.html", type: "Java" },
      { name: "Python手册",url:"https://docs.python.org/zh-cn/3/",type:"Python"},
      { name: "Android开发手册",url:"https://developer.android.com",type:"Android"},
      { name: "高德地图AndroidSdk文档",url:"https://lbs.amap.com/api/android-sdk/gettingstarted",type:"高德地图Sdk"},
      { name: "X岛api文档",url:"https://github.com/TransparentLC/xdcmd/wiki/%E8%87%AA%E5%B7%B1%E6%95%B4%E7%90%86%E7%9A%84-X-%E5%B2%9B%E5%8C%BF%E5%90%8D%E7%89%88-API-%E6%96%87%E6%A1%A3",type:"X岛api文档"},
      { name: "阿里Java代码规范",url:"https://alibaba.github.io/Alibaba-Java-Coding-Guidelines/",type:"阿里代码规范"},
      { name:"阿里巴巴Android代码规范",url:"https://github.com/getActivity/AndroidCodeStandard/blob/master/%E9%98%BF%E9%87%8C%E5%B7%B4%E5%B7%B4Android%E5%BC%80%E5%8F%91%E6%89%8B%E5%86%8C.pdf",type:"阿里代码规范"},


    ] 
  },
  {
    title: "古典和语言学", 
    items: [
      { name: "TheLatinLibrary", url: "https://www.thelatinlibrary.com", type: "Latin" },
      { name:"latinlexicon",url:"https://latinlexicon.org/index.php",type: "Latin"},
      { name:"wheelockslatin",url:"http://www.wheelockslatin.com",type:"Latin"},
      { name:"Tyrtarion",url:"https://tyrtarion.net/",type:"classics"},
      { name:"DickinsonClassicsOnline",url:"https://dco.dickinson.edu/",type:"classics"},
      { name:"PerseusDigitalLibrary",url:"https://www.perseus.tufts.edu",type:"classics"},
      { name:"ColumbiaDigitalDante",url:"https://digitaldante.columbia.edu/dante/divine-comedy/",type:"Dante"},
      { name:"Corpus Thomisticum",url:"https://www.corpusthomisticum.org/",type:"St.Thomas"},



    ] 
  },
  {
    title:"AI工具",
    items:[
      { name:"ChatGPT",url:"https://www.chatgpt.com",type:"ChatGPT"},

    ]
  },
  {
    title:"其他",
    items:[
      { name:"x岛揭示版",url:"https://www.nmbxd1.com",type:"匿名版"},
      { name:"4chan",url:"https://www.4chan.org/",type:"匿名版"},
      { name:"Gmail",url:"https://mail.google.com/",type:"Email"},
      { name:"QQ邮箱",url:"https://mail.google.com/",type:"Email"},

      { name:"魔都",url:"https://cnmods.net/web/",type:"跑团"},
      { name:"魔都wiki",url:"https://wiki.cnmods.org/start",type:"跑团"},
      { name:"IT之家",url: "https://www.ithome.com",type: "中文科技新闻与资讯"},
      { name:"tooplate",url:"https://www.tooplate.com/",type:"模板网站"},
      { name:"看雪论坛",url:"https://bbs.kanxue.com/",type:"安全社区"}
    ]
  }
];

/* ---------------------------
   动态生成菜单
---------------------------- */
const container = document.querySelector(".menu-container");
menuData.forEach(cat => {
    const catDiv = document.createElement("div");
    catDiv.className = "menu-category";

    const h3 = document.createElement("h3");
    h3.textContent = cat.title;
    catDiv.appendChild(h3);

    const ul = document.createElement("ul");
    ul.className = "menu-list";

    cat.items.forEach(item => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = item.url;
        a.target = "_blank";

        const nameSpan = document.createElement("span");
        nameSpan.className = "menu-item-name";
        nameSpan.textContent = item.name;

        const typeSpan = document.createElement("span");
        typeSpan.className = "menu-item-price";
        typeSpan.textContent = item.type;

        a.appendChild(nameSpan);
        a.appendChild(typeSpan);
        li.appendChild(a);
        ul.appendChild(li);
    });

    catDiv.appendChild(ul);
    container.appendChild(catDiv);
});

/* ---------------------------
   移动端菜单切换
---------------------------- */
function toggleMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
}

// 点击导航关闭菜单
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
   anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
   });
});

// 高亮当前导航
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.clientHeight;
        if (window.pageYOffset >= top - 200) current = section.id;
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) link.classList.add('active');
    });
});

// 菜单悬浮效果
document.querySelectorAll('.menu-list li').forEach(item => {
    item.addEventListener('mousemove', (e) => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const link = item.querySelector('a');
        if (link) {
            link.style.background = `linear-gradient(90deg, rgba(109,63,179,0.1) 0%, rgba(109,63,179,0.05) ${x/rect.width*100}%, transparent 100%)`;
        }
    });
    item.addEventListener('mouseleave', () => {
        const link = item.querySelector('a');
        if (link) link.style.background = 'transparent';
    });
});
