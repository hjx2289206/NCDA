const imageData = [
  {
      bg: "linear-gradient( 180deg, rgba(119,28,23,0.2) 0%, #FFFFFF 58%)",
      // 可以使用 SVG 数据URL、外部SVG链接或普通图片
      imageUrl: "../../assets/images/sfq/1.svg",
      textConfig: {
          type: "simple-text",
          position: "bottom-center",
          elements: [
              { type: "description", text: "海盗爷经典秀场之一，西方浮夸张扬的视角重塑婉约含蓄的东方美学", style: "simple" }
          ],
          animation: "fade-in-up",
          delay: 0.3
      }
  },
  {
      bg: "linear-gradient( 180deg, #FCFCFC 36%, #7A7A83 100%)",
      imageUrl: "../../assets/images/sfq/2.svg",
      textConfig: {
        type: "two-columns-text", // 指定使用双栏布局
        position: "center",       // 居中显示
        elements: [
          { 
            type: "left-column",  // 左侧栏
            elements: [
              { type: "description", text: "融入西方设计后， ", style: "minimal" },
              { type: "description", text: "旗袍的剪裁更加贴合身材曲线", style: "minimal" },
            ]
          },
          { type: "divider", style: "ornamental" }, // 分隔线
          { 
            type: "right-column", // 右侧栏
            elements: [
              { type: "description", text: "袍身的开衩越来越高， ", style: "minimal" },
              { type: "description", text: "肩袖的设计也越来越大胆", style: "minimal" }
            ]
          }
        ],
        animation: "fade-in",
        delay: 0.3            
      }
  },
  {
      bg: "linear-gradient( 181deg, #FFFFFF 54%, rgba(211,101,172,0.52) 100%)",
      imageUrl: "../../assets/images/sfq/3.svg",
      textConfig: {
          type: "simple-text",
          position: "bottom-center",
          elements: [
              { type: "description", text: "将传统直纹改为斜纹，油纸伞、折扇作为秀场道具，", style: "simple" },
              { type: "description", text: "让秀场增加了一丝天马行空的浪漫主义的氛围", style: "simple" }
          ],
          animation: "fade-in-up",
          delay: 0.3
      }
  },
  {
    bg: "linear-gradient( 181deg, #FFFFFF 38%, #EACCE0 100%)",
    imageUrl: "../../assets/images/sfq/4.svg",
    textConfig: {
      type: "two-columns-text",
      position: "center", 
      elements: [
        { 
          type: "left-column",
          elements: [
            { type: "description", text: "运用丝绸、锦缎等传统面料，结合盘", style: "minimal" },
            { type: "description", text: "扣、立领、流苏、云肩等中国元素", style: "minimal" }
          ]
        },
        { type: "divider", style: "ornamental" },
        { 
          type: "right-column",
          elements: [
            { type: "description", text: "用西方浮夸张扬的视角重塑", style: "minimal" },
            { type: "description", text: "婉约含蓄的东方美学", style: "minimal" }
          ]
        }
      ],
      animation: "fade-in",
      delay: 0.3            
    }
  },
  {
      bg: "linear-gradient(181deg, #FFFFFF 26%, #F9F9D7 100%)",
      imageUrl: "../../assets/images/sfq/5.svg",
      textConfig: {
          type: "simple-text",
          position: "bottom-center",
          elements: [
              { type: "description", text: "这场秀的灵感来源于1930上海滩女子所穿的改良旗袍 ", style: "simple" },
              { type: "description", text: "与当时香烟、花露水等产品中带有旗袍女郎的广告海报", style: "simple" }
          ],
          animation: "fade-in-up",
          delay: 0.3
      }
  },
  {
    bg: "linear-gradient( 181deg, #4C0908 0%, rgba(255,255,255,0.68) 51%)",
    imageUrl: "../../assets/images/sfq/6.svg",
      textConfig: {
        type: "simple-text",
        position: "bottom-center",
        elements: [
            { type: "description", text: "这场作为Tom Ford在YSL 的告别秀，大量采用中国元素", style: "simple" }
        ],
        animation: "fade-in-up",
        delay: 0.3
    }
  },
  {
      bg: "linear-gradient(181deg, #4C0908 0%, rgba(255,255,255,0.68) 57%)",
      imageUrl: "../../assets/images/sfq/7.svg",
      textConfig: {
          type: "simple-text",
          position: "bottom-center",
          elements: [
              { type: "description", text: "将中国旗袍、刺绣、祥云、龙腾、盘扣 、", style: "simple" },
              { type: "description", text: "锦缎织锦等运用的极其奢华亮丽", style: "simple" }
          ],
          animation: "fade-in-up",
          delay: 0.3
      }
  },
  {
    bg: "linear-gradient(181deg, #4C0908 0%, rgba(255,255,255,0.68) 57%)",
    imageUrl: "../../assets/images/sfq/8.svg",
    textConfig: {
        type: "simple-text",
        position: "bottom-center",
        elements: [
            { type: "description", text: "将含蓄的东方风情与性感外放的西方元素完美结合", style: "simple" },
        ],
        animation: "fade-in-up",
        delay: 0.3
    }
  },
  {
      bg: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      imageUrl: "../../assets/images/sfq/9.svg",
      textConfig: {
          type: "simple-text",
          position: "bottom-center",
          elements: [
              { type: "description", text: "展现了国际化的浓郁中国风", style: "simple" }
          ],
          animation: "fade-in-up",
          delay: 0.3
      }
  },
  {
    bg: "linear-gradient( 181deg, #4C0908 0%, rgba(255,255,255,0.68) 51%)",
    imageUrl: "../../assets/images/sfq/10.svg",
    textConfig: {
      type: "two-columns-text",
      position: "center", 
      elements: [
        { 
          type: "left-column",
          elements: [
            { type: "description", text: "以 精致刺绣、盘扣、立领、旗袍式剪裁 为", style: "minimal" },
            { type: "description", text: "核心，结合 奢华丝绸、修身廓形和现代剪裁", style: "minimal" }
          ]
        },
        { type: "divider", style: "ornamental" },
        { 
          type: "right-column",
          elements: [
            { type: "description", text: "打造出性感又充满东方韵味的时装系列", style: "minimal" }
          ]
        }
      ],
      animation: "fade-in",
      delay: 0.3            
    }
  },
  {
    bg: "linear-gradient(181deg, #4C0908 0%, rgba(255,255,255,0.68) 57%)",
    imageUrl: "../../assets/images/sfq/11.svg",
    textConfig: {
        type: "simple-text",
        position: "bottom-center",
        elements: [
            { type: "description", text: "这场秀不仅展现了中国传统服饰元素，更通过西方视角的演绎，使其更加摩", style: "simple" },
            { type: "description", text: "登与性感，完美契合了 YSL 优雅、神秘、富有异国情调的品牌基因", style: "simple" }
        ],
        animation: "fade-in-up",
        delay: 0.3
    }
  },
  {
    bg: "linear-gradient(181deg, #4C0908 0%, rgba(255,255,255,0.68) 51%)",
    imageUrl: "../../assets/images/sfq/12.svg",
    textConfig: {
        type: "simple-text",
        position: "bottom-center",
        elements: [
            { type: "description", text: "这一季的 Roberto Cavalli 走出了不同的性感路线——", style: "simple" },
            { type: "description", text: "更柔软，更东方，也更神秘", style: "simple" }
        ],
        animation: "fade-in-up",
        delay: 0.3
    }
  },
  {
    bg: "linear-gradient(181deg, rgba(255,255,255,0.68) 37%, #884429 100%)",
    imageUrl: "../../assets/images/sfq/13.svg",
    textConfig: {
        type: "simple-text",
        position: "bottom-center",
        elements: [
            { type: "description", text: "在这场秀中，女人的美不是靠裸露来吸引目光，而是通过面", style: "simple" },
            { type: "description", text: "料、线条、文化的交错，塑造出耐人寻味的诱惑力。", style: "simple" }
        ],
        animation: "fade-in-up",
        delay: 0.3
    }
  },
  {
    bg: "linear-gradient(181deg, #FFFFFF 26%, rgba(82,88,57,0.53) 100%)",
    imageUrl: "../../assets/images/sfq/14.svg",
    textConfig: {
        type: "simple-text",
        position: "bottom-center",
        elements: [
            { type: "description", text: "用西方浮夸张扬的视角重塑婉约含蓄的东方美学。", style: "simple" }
        ],
        animation: "fade-in-up",
        delay: 0.3
    }
  },
  {
    bg: "linear-gradient(181deg, rgba(255,255,255,0.68) 51%, #B93E35 100%)",
    imageUrl: "../../assets/images/sfq/16.svg",
    textConfig: {
        type: "simple-text",
        position: "bottom-center",
        elements: [
            { type: "description", text: "刺绣与印花交错在轻盈的丝绸面料上，仿佛一场风情万种的东方梦境", style: "simple" }
        ],
        animation: "fade-in-up",
        delay: 0.3
    }
  },
  {
    bg: "linear-gradient(181deg, #DBE6D5 0%, rgba(255,255,255,0.68) 51%)",
    imageUrl: "../../assets/images/sfq/17.svg",
    textConfig: {
        type: "simple-text",
        position: "bottom-center",
        elements: [
            { type: "description", text: "这一季，最具代表性的设计莫过于旗袍式斜襟礼服", style: "simple" }
        ],
        animation: "fade-in-up",
        delay: 0.3
    }
  },
  {
    bg: "linear-gradient(180deg, #F5F5F5 32%, #D9D6C7 100%, #ADA47E 100%)",
    imageUrl: "../../assets/images/sfq/18.svg",
    textConfig: {
        type: "simple-text",
        position: "bottom-center",
        elements: [
            { type: "description", text: "中式刺绣元素在这一季也成为亮点，繁复的金线、花鸟纹样点缀在绸缎裙摆，配合 ", style: "simple" },
            { type: "description", text: "Roberto Cavalli最擅长的透视与镂空设计，使传统元素在不经意间透出性感的意味", style: "simple" }
        ],
        animation: "fade-in-up",
        delay: 0.3
    }
  },
  {
    bg: "linear-gradient(181deg, rgba(194,48,49,0.54) 0%, rgba(255,255,255,0.68) 51%)",
    imageUrl: "../../assets/images/sfq/19.svg",
    textConfig: {
        type: "simple-text",
        position: "bottom-center",
        elements: [
            { type: "description", text: "“这是性感的进化，是一场关于欲望的高级游戏。”", style: "simple" }
        ],
        animation: "fade-in-up",
        delay: 0.3
    }
  },
  {
    bg: "linear-gradient(181deg, #D4CCAF 0%, rgba(255,255,255,0.68) 51%)",
    imageUrl: "../../assets/images/sfq/20.svg",
    textConfig: {
        type: "simple-text",
        position: "bottom-center",
        elements: [
            { type: "description", text: "Cavalli 将他一贯的 girly 甜美风格，混合进 中式的收", style: "simple" },
            { type: "description", text: "敛与隐喻，让性感的表达变得更加有层次", style: "simple" }
        ],
        animation: "fade-in-up",
        delay: 0.3
    }
  },
  {
    bg: "linear-gradient(181deg, #9E9B8D 0%, rgba(255,255,255,0.68) 51%)",
    imageUrl: "../../assets/images/sfq/21.svg",
    textConfig: {
        type: "simple-text",
        position: "bottom-center",
        elements: [
            { type: "description", text: "刺绣的“点睛之笔”让旗袍从剪裁的轮廓升华为流动的艺术诗篇", style: "simple" }
        ],
        animation: "fade-in-up",
        delay: 0.3
    }
  },
  {
    bg: "linear-gradient( 181deg, rgba(255,255,255,0.68) 51%, #9A4F54 100%)",
    imageUrl: "../../assets/images/sfq/22.svg",
    textConfig: {
      type: "two-columns-text",
      position: "center", 
      elements: [
        { 
          type: "left-column",
          elements: [
            { type: "description", text: "丝绸作为旗袍的“灵魂载体”其柔", style: "minimal" },
            { type: "description", text: "滑的肌理与流光随剪裁贴合身形", style: "minimal" },
          ]
        },
        { type: "divider", style: "ornamental" },
        { 
          type: "right-column",
          elements: [
            { type: "description", text: "让旗袍在行走间流淌千年东", style: "minimal" },
            { type: "description", text: "方的温婉气质", style: "minimal" }
          ]
        }
      ],
      animation: "fade-in",
      delay: 0.3            
    }
  },
  {
    bg: "linear-gradient(181deg, #494E45 0%, rgba(255,255,255,0.68) 51%)",
    imageUrl: "../../assets/images/sfq/23.svg",
    textConfig: {
        type: "simple-text",
        position: "bottom-center",
        elements: [
            { type: "description", text: "以质朴的经纬织就日常的温度", style: "simple" }
        ],
        animation: "fade-in-up",
        delay: 0.3
    }
  },
  {
    bg: "linear-gradient(181deg, rgba(255,255,255,0.68) 51%, #AD4C45 100%)",
    imageUrl: "../../assets/images/sfq/24.svg",
    textConfig: {
        type: "simple-text",
        position: "bottom-center",
        elements: [
            { type: "description", text: "丝线是旗袍的“经纬灵魂”，以千针万缕织就衣袂间的传统脉搏", style: "simple" }
        ],
        animation: "fade-in-up",
        delay: 0.3
    }
  },
  {
    bg: "linear-gradient( 181deg, rgba(135,179,56,0.54) 0%, rgba(255,255,255,0.68) 51%)",
    imageUrl: "../../assets/images/sfq/25.svg",
    textConfig: {
      type: "two-columns-text",
      position: "center", 
      elements: [
        { 
          type: "left-column",
          elements: [
            { type: "description", text: "金丝线常被用于旗袍点缀，尤其在传统或华丽款中", style: "minimal" },
            { type: "description", text: "华丽款中", style: "minimal" },
          ]
        },
        { type: "divider", style: "ornamental" },
        { 
          type: "right-column",
          elements: [
            { type: "description", text: "以盘金绣工艺在领口、袖口勾勒纹样，让龙", style: "minimal" },
            { type: "description", text: "凤、牡丹等图案在绸缎上泛出暖金光泽", style: "minimal" }
          ]
        }
      ],
      animation: "fade-in",
      delay: 0.3            
    }
  },
  {
    bg: "linear-gradient(181deg, rgba(25,90,113,0.7) 0%, rgba(255,255,255,0.68) 51%)",
    imageUrl: "../../assets/images/sfq/26.svg",
    textConfig: {
        type: "simple-text",
        position: "bottom-center",
        elements: [
            { type: "description", text: "与金丝线交织，在开衩、滚边处织就明暗交错的金线脉络，", style: "simple" },
            { type: "description", text: "为旗袍增添贵气与层次感，是中式奢华美学的经典表达", style: "simple" }
        ],
        animation: "fade-in-up",
        delay: 0.3
    }
  },
  {
    bg: "linear-gradient(181deg, #4E3437 0%, rgba(255,255,255,0.68) 51%)",
    imageUrl: "../../assets/images/sfq/27.svg",
    textConfig: {
        type: "simple-text",
        position: "bottom-center",
        elements: [
            { type: "description", text: "纹路样式让旗袍更加鲜活生韵：无论是缠枝莲的连绵曲线、海水江崖的波浪纹理，让", style: "simple" },
            { type: "description", text: "旗袍在静态剪裁中生长出流动的故事感，成为穿在身上的传统纹样诗篇。", style: "simple" }
        ],
        animation: "fade-in-up",
        delay: 0.3
    }
  },
];

// 初始化函数
function initAccordion() {
  const items = document.getElementById("items");
  const backgroundOverlay = document.getElementById("backgroundOverlay");
  
  // 生成图片元素
  items.innerHTML = imageData
    .map((data, index) => {
      // 使用imageData中定义的图片URL，如果没有则使用随机图片
      const imageUrl = data.imageUrl || `https://picsum.photos/400/600?random=${index + 1}`;
      return `<div class="item" style="background-image: url('${imageUrl}')" data-index="${index}"></div>`;
    })
    .join("");

  let isClickMode = false,
    currentTransform = window.innerWidth * 0.5,
    isDragging = false,
    startX = 0,
    isMoving = false,
    movingTimeout = null;

    function applyHoverEffect(center, idx, items) {
      // 重置所有项目
      items.forEach((item) => {
        item.style.transform = "";
        item.style.filter = "";
        item.style.zIndex = "";
      });
    
      // 中心项目效果
      center.style.filter = "inherit";
      center.style.transform = "translateZ(calc(var(--index) * 10))";
      center.style.zIndex = "10";
    
      // 定义统一的角度和深度配置
      const configs = [
        { z: 8.5, angle: 25, zIndex: 8 },   // 第1层
        { z: 5.6, angle: 35, zIndex: 6 },   // 第2层  
        { z: 2.5, angle: 45, zIndex: 4 },   // 第3层
        { z: 0.6, angle: 55, zIndex: 2 }    // 第4层
      ];
    
      // 右侧项目效果
      configs.forEach((config, i) => {
        const rightItem = items[idx + i + 1];
        if (rightItem) {
          rightItem.style.filter = "inherit";
          rightItem.style.transform = 
            `translateZ(calc(var(--index) * ${config.z})) rotateY(${config.angle}deg)`;
          rightItem.style.zIndex = config.zIndex - i; // 逐层递减
        }
      });
    
      // 左侧项目效果 - 使用相同的配置但角度取负值
      configs.forEach((config, i) => {
        const leftItem = items[idx - i - 1];
        if (leftItem) {
          leftItem.style.filter = "inherit";
          leftItem.style.transform = 
            `translateZ(calc(var(--index) * ${config.z})) rotateY(-${config.angle}deg)`;
          leftItem.style.zIndex = config.zIndex;
        }
      });
    }

  function setMovingState(moving) {
    if (isClickMode) return;
    
    clearTimeout(movingTimeout);
    
    if (moving) {
      isMoving = true;
      updateWaveEffect();
    } else {
      // 延迟清除效果，避免频繁切换
      movingTimeout = setTimeout(() => {
        isMoving = false;
        clearAllEffects();
      }, 150); // 减少延迟时间
    }
  }

  function updateWaveEffect() {
    if (isClickMode) return;

    const itemElements = [...document.querySelectorAll(".item")];
    const screenCenter = window.innerWidth / 2;

    let closestItem = null,
      closestDistance = Infinity,
      closestIndex = -1;

    itemElements.forEach((item, index) => {
      const rect = item.getBoundingClientRect();
      const itemCenter = rect.left + rect.width / 2;
      const distance = Math.abs(itemCenter - screenCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestItem = item;
        closestIndex = index;
      }
    });

    if (isMoving && closestItem && closestDistance < 300) { // 增加距离阈值
      itemElements.forEach(
        (item) => (item.style.transition = "all 0.15s ease")
      );
      applyHoverEffect(closestItem, closestIndex, itemElements);
    } else if (isMoving) {
      // 当没有足够近的项目时，清除效果
      clearAllEffects();
    }
  }

  function clearAllEffects() {
    document.querySelectorAll(".item").forEach((item) => {
      item.style.transform = "";
      item.style.filter = "";
      item.style.zIndex = "";
      item.style.transition =
        "transform 1.25s var(--transition), filter 3s var(--transition), width 1.25s var(--transition)";
    });
  }

  function enterClickMode(idx) {
    isClickMode = true;
    items.classList.add("click-mode");

    const itemElements = [...document.querySelectorAll(".item")];
    const currentData = imageData[idx];

    // 更新背景
    backgroundOverlay.style.background = currentData.bg;
    backgroundOverlay.classList.add("active");

    // 创建文字容器
    createTextContainer(currentData.textConfig, idx);

    // 清除所有现有的类名和样式
    itemElements.forEach((item, i) => {
      item.className = "item";
      item.style.transform = "";
      item.style.filter = "";
      item.style.zIndex = "";
    });

    // 添加新的类名
    itemElements.forEach((item, i) => {
      if (i === idx) {
        item.classList.add("clicked");
      } else if (i === idx - 1) {
        item.classList.add("left-1");
      } else if (i === idx - 2) {
        item.classList.add("left-2");
      } else if (i === idx + 1) {
        item.classList.add("right-1");
      } else if (i === idx + 2) {
        item.classList.add("right-2");
      }
    });
  }

  // 创建文字容器
  function createTextContainer(textConfig, idx) {
    // 移除旧的文字容器
    const oldContainer = document.querySelector(".text-container");
    if (oldContainer) {
      oldContainer.remove();
    }
  
    // 创建新容器
    const container = document.createElement("div");
    
    // 修复位置类名
    let positionClass = textConfig.position;
    if (positionClass === "center") {
      positionClass = "bottom-two-columns"; // 使用已定义的两栏位置类
    }
    
    container.className = `text-container ${textConfig.type} position-${positionClass}`;
  
    // 生成元素HTML - 特别处理两栏布局
    let elementsHTML = "";
    
    if (textConfig.type === "two-columns-text") {
      // 两栏布局的特殊处理
      elementsHTML = '<div class="two-columns-text">';
      
      textConfig.elements.forEach((element) => {
        switch (element.type) {
          case "left-column":
            elementsHTML += '<div class="left-column">';
            element.elements.forEach(subElement => {
              if (subElement.type === "description") {
                elementsHTML += `<p class="desc-${subElement.style}">${subElement.text}</p>`;
              } else if (subElement.type === "title") {
                elementsHTML += `<h3 class="title-${subElement.style}">${subElement.text}</h3>`;
              }
            });
            elementsHTML += '</div>';
            break;
            
          case "right-column":
            elementsHTML += '<div class="right-column">';
            element.elements.forEach(subElement => {
              if (subElement.type === "description") {
                elementsHTML += `<p class="desc-${subElement.style}">${subElement.text}</p>`;
              } else if (subElement.type === "title") {
                elementsHTML += `<h3 class="title-${subElement.style}">${subElement.text}</h3>`;
              }
            });
            elementsHTML += '</div>';
            break;
            
          case "divider":
            elementsHTML += `<div class="divider-${element.style}"></div>`;
            break;
        }
      });
      
      elementsHTML += '</div>';
    } else {
      // 单栏布局的原有逻辑
      textConfig.elements.forEach((element) => {
        switch (element.type) {
          case "title":
            elementsHTML += `<h3 class="title-${element.style}">${element.text}</h3>`;
            break;
          case "description":
            elementsHTML += `<p class="desc-${element.style}">${element.text}</p>`;
            break;
          case "divider":
            elementsHTML += `<div class="divider-${element.style}"></div>`;
            break;
          case "badge":
            elementsHTML += `<span class="badge-${element.style}">${element.text}</span>`;
            break;
          case "icon":
            elementsHTML += `<div class="icon-${element.style}">${element.name}</div>`;
            break;
          case "decorative":
            elementsHTML += `<div class="decorative-${element.style}"></div>`;
            break;
        }
      });
    }
  
    container.innerHTML = elementsHTML;
    document.body.appendChild(container);
  
    // 添加动画
    setTimeout(() => {
      container.classList.add("active");
      if (textConfig.animation) {
        container.classList.add(`animate-${textConfig.animation}`);
      }
    }, textConfig.delay * 1000 || 400);
  }

  function exitClickMode() {
    isClickMode = false;
    items.classList.remove("click-mode");

    // 隐藏背景
    backgroundOverlay.classList.remove("active");

    // 移除文字容器
    const textContainer = document.querySelector(".text-container");
    if (textContainer) {
      textContainer.classList.remove("active");
      setTimeout(() => {
        textContainer.remove();
      }, 300);
    }

    // 重置所有卡片
    document.querySelectorAll(".item").forEach((item) => {
      item.className = "item";
      item.style.transform = "";
      item.style.filter = "";
      item.style.zIndex = "";
    });

    // 恢复原始位置
    items.style.transform = `translateX(${currentTransform}px)`;
  }

  const wrapper = document.getElementById("wrapper");
  
  wrapper.addEventListener("wheel", (e) => {
    if (isClickMode) return;
    e.preventDefault();
    setMovingState(true);
    currentTransform = Math.max(
      -1500,
      Math.min(window.innerWidth * 0.8, currentTransform - e.deltaY * 2)
    );
    items.style.transition = "transform 0.1s ease";
    items.style.transform = `translateX(${currentTransform}px)`;
    updateWaveEffect();
    clearTimeout(movingTimeout);
    movingTimeout = setTimeout(() => setMovingState(false), 200);
  });

  wrapper.addEventListener("mousedown", (e) => {
    if (isClickMode) {
      if (!e.target.closest(".item")) {
        exitClickMode();
      }
      return;
    }
    if (e.target.closest(".item")) return;
    isDragging = true;
    startX = e.clientX;
    // 保存当前transform值，避免重置位置
    const matrix = getComputedStyle(items).transform;
    if (matrix !== "none") {
      currentTransform = parseFloat(
        matrix.match(/matrix.*\((.+)\)/)[1].split(", ")[4]
      );
    }
    items.style.cssText = `transition: none; animation: none; transform: translateX(${currentTransform}px);`;
    wrapper.style.cursor = "grabbing";
    setMovingState(true);
  });

  document.addEventListener("mousemove", (e) => {
    if (!isDragging || isClickMode) return;
    const newTransform = Math.max(
      -1500,
      Math.min(
        window.innerWidth * 0.8,
        currentTransform + e.clientX - startX
      )
    );
    items.style.transform = `translateX(${newTransform}px)`;
    updateWaveEffect();
  });

  document.addEventListener("mouseup", () => {
    if (isDragging) {
      isDragging = false;
      const matrix = getComputedStyle(items).transform;
      if (matrix !== "none")
        currentTransform = parseFloat(
          matrix.match(/matrix.*\((.+)\)/)[1].split(", ")[4]
        );
      items.style.transition = "transform 0.3s ease";
      wrapper.style.cursor = "grab";
      setMovingState(false);
    }
  });

  document.addEventListener("click", (e) => {
    const item = e.target.closest(".item");
    if (item && !isClickMode) {
      const index = parseInt(item.dataset.index);
      enterClickMode(index);
    }
  });

  document.addEventListener("contextmenu", (e) => e.preventDefault());
  document.addEventListener("selectstart", (e) => e.preventDefault());
  document.addEventListener("dragstart", (e) => e.preventDefault());
  document.addEventListener("keydown", (e) => {
    // 禁用常见的复制粘贴快捷键
    if (
      (e.ctrlKey || e.metaKey) &&
      ["c", "v", "x", "a", "s", "z", "y"].includes(e.key.toLowerCase())
    ) {
      e.preventDefault();
    }
    // ESC键退出特写模式
    if (e.key === "Escape" && isClickMode) {
      exitClickMode();
    }
  });

  // 触摸事件
  ["touchstart", "touchmove", "touchend"].forEach((event, i) => {
    (i ? document : wrapper).addEventListener(event, (e) => {
      if (i === 0) {
        // touchstart
        if (isClickMode) {
          if (!e.target.closest(".item")) {
            exitClickMode();
          }
          return;
        }
        if (e.target.closest(".item")) return;
        isDragging = true;
        startX = e.touches[0].clientX;
        // 保存当前transform值，避免重置位置
        const matrix = getComputedStyle(items).transform;
        if (matrix !== "none") {
          currentTransform = parseFloat(
            matrix.match(/matrix.*\((.+)\)/)[1].split(", ")[4]
          );
        }
        items.style.cssText = `transition: none; animation: none; transform: translateX(${currentTransform}px);`;
        setMovingState(true);
      } else if (i === 1 && isDragging && !isClickMode) {
        // touchmove
        const newTransform = Math.max(
          -1500,
          Math.min(
            window.innerWidth * 0.8,
            currentTransform + e.touches[0].clientX - startX
          )
        );
        items.style.transform = `translateX(${newTransform}px)`;
        updateWaveEffect();
      } else if (i === 2 && isDragging) {
        // touchend
        isDragging = false;
        const matrix = getComputedStyle(items).transform;
        if (matrix !== "none")
          currentTransform = parseFloat(
            matrix.match(/matrix.*\((.+)\)/)[1].split(", ")[4]
          );
        items.style.transition = "transform 0.3s ease";
        setMovingState(false);
      }
      if (i < 2) e.preventDefault();
    });
  });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', initAccordion);