// 28张图片数据，包含标题、描述、背景色和文字位置
const imageData = [
  {
      bg: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      // 可以使用 SVG 数据URL、外部SVG链接或普通图片
      imageUrl: "https://picsum.photos/400/600?random=1", // 或者 "data:image/svg+xml;base64,..." 或 "path/to/your.svg"
      textConfig: {
          type: "simple-text",
          position: "bottom-center",
          elements: [
              { type: "description", text: "雄伟壮丽的自然风光", style: "simple" }
          ],
          animation: "fade-in-up",
          delay: 0.3
      }
  },
  {
      bg: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      imageUrl: "https://picsum.photos/400/600?random=2",
      textConfig: {
          type: "simple-text",
          position: "bottom-center",
          elements: [
              { type: "description", text: "深邃蔚蓝的海洋世界", style: "simple" }
          ],
          animation: "fade-in-up",
          delay: 0.3
      }
  },
  {
      bg: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      imageUrl: "https://picsum.photos/400/600?random=3",
      textConfig: {
          type: "simple-text",
          position: "bottom-center",
          elements: [
              { type: "description", text: "神秘幽深的绿色天堂", style: "simple" }
          ],
          animation: "fade-in-up",
          delay: 0.3
      }
  },
  {
      bg: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      imageUrl: "https://picsum.photos/400/600?random=4",
      textConfig: {
          type: "simple-text",
          position: "bottom-center",
          elements: [
              { type: "description", text: "金色沙海的无尽魅力", style: "simple" }
          ],
          animation: "fade-in-up",
          delay: 0.3
      }
  },
  {
      bg: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      imageUrl: "https://picsum.photos/400/600?random=5",
      textConfig: {
          type: "simple-text",
          position: "bottom-center",
          elements: [
              { type: "description", text: "霓虹闪烁的都市之光", style: "simple" }
          ],
          animation: "fade-in-up",
          delay: 0.3
      }
  }
  
];

// 初始化函数
function initAccordion() {
  const items = document.getElementById("items");
  const backgroundOverlay = document.getElementById("backgroundOverlay");
  
  // 生成图片元素
  items.innerHTML = imageData
    .map((data, index) => {
      // 使用Unsplash随机图片，每张都不同
      const imageUrl = `https://picsum.photos/400/600?random=${index + 1}`;
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

    // 右侧项目效果
    if (items[idx + 1]) {
      items[idx + 1].style.filter = "inherit";
      items[idx + 1].style.transform =
        "translateZ(calc(var(--index) * 8.5)) rotateY(35deg)";
      items[idx + 1].style.zIndex = "-1";
    }
    if (items[idx + 2]) {
      items[idx + 2].style.filter = "inherit";
      items[idx + 2].style.transform =
        "translateZ(calc(var(--index) * 5.6)) rotateY(40deg)";
      items[idx + 2].style.zIndex = "-2";
    }
    if (items[idx + 3]) {
      items[idx + 3].style.filter = "inherit";
      items[idx + 3].style.transform =
        "translateZ(calc(var(--index) * 2.5)) rotateY(30deg)";
      items[idx + 3].style.zIndex = "-3";
    }
    if (items[idx + 4]) {
      items[idx + 4].style.filter = "inherit";
      items[idx + 4].style.transform =
        "translateZ(calc(var(--index) * 0.6)) rotateY(15deg)";
      items[idx + 4].style.zIndex = "-4";
    }

    // 左侧项目效果
    if (items[idx - 1]) {
      items[idx - 1].style.filter = "inherit";
      items[idx - 1].style.transform =
        "translateZ(calc(var(--index) * 8.5)) rotateY(-35deg)";
      items[idx - 1].style.zIndex = "8";
    }
    if (items[idx - 2]) {
      items[idx - 2].style.filter = "inherit";
      items[idx - 2].style.transform =
        "translateZ(calc(var(--index) * 5.6)) rotateY(-40deg)";
      items[idx - 2].style.zIndex = "6";
    }
    if (items[idx - 3]) {
      items[idx - 3].style.filter = "inherit";
      items[idx - 3].style.transform =
        "translateZ(calc(var(--index) * 2.5)) rotateY(-30deg)";
      items[idx - 3].style.zIndex = "4";
    }
    if (items[idx - 4]) {
      items[idx - 4].style.filter = "inherit";
      items[idx - 4].style.transform =
        "translateZ(calc(var(--index) * 0.6)) rotateY(-15deg)";
      items[idx - 4].style.zIndex = "2";
    }
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
    container.className = `text-container ${textConfig.type} position-${textConfig.position}`;

    // 生成元素HTML
    let elementsHTML = "";
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