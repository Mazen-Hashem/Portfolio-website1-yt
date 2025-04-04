/* ===== start header ===== */
header();
function header() {
  // select elements
  const navListBtn = document.querySelector("header .nav_list_btn");
  const navList = document.querySelector("header .nav_list");
  const searchBtn = document.querySelector("header .search_btn");
  const searchInput = document.querySelector("header .search_input");

  navListBtn.addEventListener("click", e => {
    active(e, navList, searchInput);
  });
  searchBtn.addEventListener("click", e => {
    active(e, searchInput, navList);
  });

  function active(btn, currentBox, otherBox) {
    // make btn and his child one e
    btn.stopPropagation();
    // remove & add active from current box of the btn
    currentBox.classList.toggle("active");
    // remove active from other box
    otherBox.classList.remove("active");
    // remove active from current box if the clicked target not it
    document.addEventListener("click", e => {
      if (e.target !== currentBox) {
        currentBox.classList.remove("active");
      };
    });
  };
};
/* ===== end header ===== */

/* ===== start main ===== */
main();
function main() {
  /* start home section */
  // select elements
  const imgsBox = document.querySelector("main .home_section .imgs_box");
  const imgs = Array.from(document.querySelectorAll("main .home_section .imgs_box .img"));
  const leftArrowBtn = document.querySelector("main .home_section .left_arrow_btn");
  const rightArrowBtn = document.querySelector("main .home_section .right_arrow_btn");
  const bulletsBox = document.querySelector("main .home_section .bullets_box");

  // array of numbers for translateY
  let transform = [];
  // moving between array's indexs by it
  let transformIndex = 0;
  // animation's time of moving between images
  let duration = 5000;

  createData();
  function createData() {
    for (let i = 0; i < imgs.length; i++) {
      // create transform number for every image dynamicly
      let translateY = numb => 100 * numb;
      transform.push(translateY(i));
  
      // create buttons for every image dynamicly
      const button = document.createElement("button");
      button.classList.add("bullet_btn");
      button.title = `Image ${i + 1}`;
      button.ariaLabel = `Image ${i + 1}`;
      bulletsBox.appendChild(button);
    };
    activeIndex();
    clickBullets();
    activeRightSlid();
  };

  // click on left arrow => -1 and take action for the new index
  leftArrowBtn.addEventListener("click", _ => {
    transformIndex--;
    activeIndex();
  });
  // click on left arrow => +1 and take action for the new index
  rightArrowBtn.addEventListener("click", _ => {
    transformIndex++;
    activeIndex();
  });
  function clickBullets() {
    // select created button element
    const bulletBtn = Array.from(document.querySelectorAll("main .home_section .bullets_box .bullet_btn"));
    bulletBtn.forEach(btn => {
      // click on any bullet button => print its index and take action for this new index
      btn.addEventListener("click", e => {
        transformIndex = bulletBtn.indexOf(e.target);
        activeIndex();
      });
    });
  };

  function activeIndex() {
    // select created button element
    const bulletBtn = Array.from(document.querySelectorAll("main .home_section .bullets_box .bullet_btn"));
    checkIndex();
    // print the current image
    imgsBox.style.cssText = `transform: translateX(-${transform[transformIndex]}%);`;
    unactiveIndex(bulletBtn);
    // active the current button
    bulletBtn[transformIndex].classList.add("active");
  };

  function checkIndex() {
    // check if this is the first image
    if (transformIndex === 0) {
      leftArrowBtn.classList.remove("active");
      rightArrowBtn.classList.add("active");
      // check if this is the last image
    } else if (transformIndex === imgs.length - 1) {
      leftArrowBtn.classList.add("active");
      rightArrowBtn.classList.remove("active");
      // check if this is a middle image
    } else {
      leftArrowBtn.classList.add("active");
      rightArrowBtn.classList.add("active");
    };
    // check if there is only one image
    if (imgs.length === 1) {
      leftArrowBtn.classList.remove("active");
      rightArrowBtn.classList.remove("active");
    };
  };

  function unactiveIndex(btns) {
    // remove all active from bullet buttons
    btns.forEach(btn => {
      btn.classList.remove("active");
    });
  };

  // moving right every 5s
  function activeRightSlid() {
    let rightSlid = setInterval(() => {
      // check if its last image
      if (transformIndex === imgs.length - 1) {
        // stop animation
        clearInterval(rightSlid);
        // run moving left animation
        activeLeftSlid();
      } else {
        // +1 and take action for the new index
        transformIndex++;
        activeIndex();
      }
    }, duration);
  }
  // moving left every 5s
  function activeLeftSlid() {
    let leftSlid = setInterval(() => {
      // check if its first image
      if (transformIndex === 0) {
        // stop animation
        clearInterval(leftSlid);
        // run moving right animation
        activeRightSlid();
      } else {
        // -1 and take action for the new index
        transformIndex--;
        activeIndex();
      }
    }, duration);
  }
  /* end home section */
  /* start portfolio section */
  // select elements
  const shuffleBox = document.querySelector("main .portfolio_section .shuffle_box");
  const imageContainer = document.querySelector("main .portfolio_section .image_container");
  const moreBtn = document.querySelector("main .portfolio_section .more_btn");

  // portfolio data buttons
  let portfolioBtns = ["All", "New", "Old", "Classic", "Modern"];
  // portfolio data images
  let portfolioData = [ "classic-01-new-01.jpg", "classic-02-new-02.jpg", "classic-03-new-03.png", "classic-04-new-04.jpg",
                        "classic-05-new-05.jpg", "classic-06-new-06.jpg", "classic-07-new-07.jpg", "classic-08-new-08.jpg",
                        "classic-09-new-09.jpg", "classic-10-new-10.jpg", "classic-11-new-11.jpg", "classic-12-new-12.jpg",
                        "classic-13-new-13.jpg", "classic-14-new-14.jpg", "classic-15-new-15.jpg", "classic-16-new-16.jpg",
                        "classic-17-new-17.jpg", "classic-18-new-18.jpg", "classic-19-new-19.jpg", "classic-20-new-20.jpg",
                        "classic-21-old-01.jpg", "classic-22-old-02.jpg", "classic-23-old-03.jpg", "classic-24-old-04.jpg",
                        "classic-25-old-05.jpg", "classic-26-old-06.jpg", "classic-27-old-07.jpg", "classic-28-old-08.jpg",
                        "classic-29-old-09.jpg", "classic-30-old-10.jpg", "classic-31-old-11.jpg", "classic-32-old-12.jpg",
                        "classic-33-old-13.jpg", "classic-34-old-14.jpg", "classic-35-old-15.jpg", "classic-36-old-16.jpg",
                        "classic-37-old-17.jpg", "classic-38-old-18.jpg", "classic-39-old-19.jpg", "classic-40-old-20.jpg",
                        "classic-41-old-21.jpg", "classic-42-old-22.jpg", "classic-43-old-23.jpg", "classic-44-old-24.jpg",
                        "classic-45-old-25.jpg", "classic-46-old-26.jpg", "classic-47-old-27.jpg", "classic-48-old-28.jpg",
                        "classic-49-old-29.jpg", "classic-50-old-30.png", "modern-01-new-21.jpg", "modern-02-new-22.jpg",
                        "modern-03-new-23.jpg", "modern-04-new-24.jpg", "modern-05-new-25.jpg", "modern-06-new-26.jpg",
                        "modern-07-new-27.jpg", "modern-08-new-28.jpg", "modern-09-new-29.jpg", "modern-10-new-30.jpg",
                        "modern-11-old-31.jpg", "modern-12-old-32.jpg", "modern-13-old-33.jpg", "modern-14-old-34.jpg",
                        "modern-15-old-35.jpg", "modern-16-old-36.jpg", "modern-17-old-37.jpg", "modern-18-old-38.jpg",
                        "modern-19-old-39.jpg", "modern-20-old-40.jpg", "modern-21-old-41.jpg", "modern-22-old-42.jpg",
                        "modern-23-old-43.jpg", "modern-24-old-44.jpg", "modern-25-old-45.jpg", "modern-26-old-46.jpg",
                        "modern-27-old-47.jpg", "modern-28-old-48.jpg", "modern-29-old-49.jpg", "modern-30-old-50.jpg"
                      ];

  createBtns();
  function createBtns() {
    // create ul element
    const ul = document.createElement("ul");
    ul.classList.add("list");

    for (let i = 0; i < portfolioBtns.length; i++) {
      // create li element
      const li = document.createElement("li");
      li.classList.add("item");
      ul.appendChild(li);

      // create button element
      const button = document.createElement("button");
      button.classList.add("btn");
      button.setAttribute("data-shuffle", portfolioBtns[i]);
      button.title = `${portfolioBtns[i]} Portfolio`;
      button.ariaLabel = `${portfolioBtns[i]} Portfolio Work`;
      button.innerHTML =  portfolioBtns[i];
      li.appendChild(button);
    };

    // print ul on page
    shuffleBox.appendChild(ul);

    handleBtns();
  };

  function handleBtns() {
    // select created buttons
    const btns = Array.from(document.querySelectorAll("main .portfolio_section .shuffle_box .btn"));
    
    btns.forEach(btn => {
      btn.addEventListener("click", e => {
        activeBtn(e.target, btns);
        filterData(e.target.dataset.shuffle.toLowerCase());
      });
    });

    // active btn as default
    activeBtn(btns[0], btns)
    // print all images as default
    filterData("all");
  };

  function activeBtn(e, btns) {
    // remove active from all btn
    btns.forEach(btn => {
      btn.classList.remove("active");
    });
    // add active for the clicked target
    e.classList.add("active");
  };

  // filter images depeds on button data
  function filterData(chosenImgs) {
    let chosenData;
    if (chosenImgs === "all") {
      chosenData = portfolioData;
    } else {
      chosenData = portfolioData.filter(data => data.includes(chosenImgs)? data: "");
    };
    createImgs(chosenData);
  };

  function createImgs(imgs) {
    // empty before print the new data
    imageContainer.innerHTML = "";

    for (let i = 0; i < imgs.length; i++) {
      let captionData = imgs[i].match(/\w+(?=-)/ig);
      
      // create figure element
      const figure = document.createElement("figure");
      figure.classList.add("img_box");

      // create img element
      const img = document.createElement("img");
      img.classList.add("img");
      img.src = `static/image/shuffle-${imgs[i]}`;
      img.loading = "lazy";
      figure.appendChild(img);

      // create figcaption element
      const figcaption = document.createElement("figcaption");
      figcaption.classList.add("img_content");
      figure.appendChild(figcaption);

      // create h4 element
      const h4 = document.createElement("h4");
      h4.classList.add("title");
      h4.innerHTML = `${captionData[0][0].toUpperCase() + captionData[0].slice(1)} Image`; // classic|modern
      figcaption.appendChild(h4);

      // create p element
      const p = document.createElement("p");
      p.classList.add("paragraph");
      p.innerHTML = captionData[2][0].toUpperCase() + captionData[2].slice(1); // old|new
      figcaption.appendChild(p);

      // print figure on page
      imageContainer.appendChild(figure);
    };

    // all img boxs is display none, by default display block some of them
    handleDisplay();
  };

  moreBtn.addEventListener("click", handleDisplay);

  function handleDisplay() {
    // the printed boxs
    const imgBoxs = Array.from(document.querySelectorAll("main .portfolio_section .image_container .img_box"));
    // array from unactive boxs
    const unActiveImgBoxs = imgBoxs.filter(box => box.classList.contains("active")? "": box);
    // number of active boxs per function run
    let activeBoxs = 8;

    // check if those are the last elements or not
    if (unActiveImgBoxs.length > activeBoxs) {
      activeImgs(activeBoxs);
    } else {
      activeImgs(unActiveImgBoxs.length);
    };

    // display block the specific number of img boxs
    function activeImgs(indexs) {
      for (let i = 0; i < indexs; i++) {
        unActiveImgBoxs[i].classList.add("active");
      };
      checkBtn();
    };

    // check if those are the last elements to hide the button
    function checkBtn() {
      if (unActiveImgBoxs.length > activeBoxs) {
        moreBtn.classList.add("active");
      } else {
        moreBtn.classList.remove("active");
      };
    };
  };
  /* end portfolio section */
  /* start about section */
  // select elements
  const statsBox = document.querySelector("main .about_section .stats_box");
  const numbs = [...document.querySelectorAll("main .about_section .stats_box .stats_item .numb")];
  // to make the animation one time only
  let startCount = true;
  // before reach the box by 200px
  window.addEventListener("scroll", _ => {
    if (window.scrollY >= statsBox.offsetTop - 200) {
      if (startCount) {
        numbs.forEach(numb => numbsCount(numb));
      };
      startCount = false;
    };
  });
  function numbsCount(num) {
    let numbData = num.dataset.numb;
    // increase numb until dataset numb in 2s
    let setCounter = setInterval(() => {
      num.innerHTML++;
      num.innerHTML === numbData? clearInterval(setCounter): false;
    }, 2000 / numbData);
  };
  /* end about section */
  /* start skills section */
  // testimonials
  // select elements
  const testContainer = document.querySelector("main .our_skills .test_container");
  const testBulletsBox = document.querySelector("main .our_skills .test_bullets_box");

  // create testimonials data
  let testCont = [
    [
      {
        personalImage: "skills-01.jpg",
        personalName: "John Doe, CEO",
        personalComment: "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt."
      },
      {
        personalImage: "skills-02.jpg",
        personalName: "Mark Jon, MIS",
        personalComment: "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt."
      }
    ],
    [
      {
        personalImage: "skills-03.png",
        personalName: "Tom Cary, CAM",
        personalComment: "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt."
      },
      {
        personalImage: "skills-04.png",
        personalName: "Drake Mark, CBAP",
        personalComment: "porttitor at sem. Mauris blandit aliquet elit, eget tincidunt Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt."
      }
    ],
    [
      {
        personalImage: "skills-05.png",
        personalName: "Diego Giovanni, CCNA",
        personalComment: "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt."
      },
      {
        personalImage: "skills-06.png",
        personalName: "Javier Mark, CCNP",
        personalComment: "porttitor at sem. Mauris blandit aliquet elit, eget tincidunt Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit."
      }
    ],
    [
      {
        personalImage: "skills-07.png",
        personalName: "Tom Cary, CAM",
        personalComment: "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit."
      },
      {
        personalImage: "skills-08.png",
        personalName: "Aidan Tom, CCST",
        personalComment: "eget tincidunt Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit."
      }
    ],
    [
      {
        personalImage: "skills-09.png",
        personalName: "John Doe, CEO",
        personalComment: "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, porttitor at sem. Mauris blandit aliquet elit."
      },
      {
        personalImage: "skills-10.png",
        personalName: "Elena Tom, CFA",
        personalComment: "eget tincidunt Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit."
      }
    ],
    [
      {
        personalImage: "skills-11.png",
        personalName: "Diego Giovanni, CCNA",
        personalComment: "porttitor at sem. Mauris blandit aliquet elit."
      },
      {
        personalImage: "skills-12.png",
        personalName: "Francesca Diego, CILT",
        personalComment: "eget tincidunt Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit eget tincidunt Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit."
      }
    ],
    [
      {
        personalImage: "skills-13.png",
        personalName: "Silvia Giovanni, CCNA",
        personalComment: "porttitor at sem. Mauris blandit aliquet elit porttitor at sem. Mauris blandit aliquet elit."
      },
      {
        personalImage: "skills-01.jpg",
        personalName: "John Diego, CIPD",
        personalComment: "eget tincidunt Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit eget tincidunt."
      }
    ]
  ];

  // position of comment box
  let comTransformNum = 100;
  let comTransform = [];

  // position of comment bullet
  let comBulTransformNum = 45;
  let comBulTransform = [];

  createComments();
  function createComments() {
    for (let i = 0; i < testCont.length; i++) {
      // ccreate div element (box)
      const testBox = document.createElement("div");
      testBox.classList.add("test_box");

      for (let j = 0; j < testCont[i].length; j++) {
        // create div element (comment)
        const testComment = document.createElement("div");
        testComment.classList.add("test_comment");
        testBox.appendChild(testComment);

        // create img element (personal image)
        const commentImg = document.createElement("img");
        commentImg.classList.add("comment_img");
        commentImg.src = `static/image/${testCont[i][j].personalImage}`;
        testComment.appendChild(commentImg);

        // create div element (personal content)
        const commentContent = document.createElement("div");
        commentContent.classList.add("comment_content");
        testComment.appendChild(commentContent);

        // create p element (personal comment)
        const text = document.createElement("p");
        text.classList.add("text");
        text.innerHTML = testCont[i][j].personalComment;
        commentContent.appendChild(text);

        // create span element (personal name)
        const name = document.createElement("span");
        name.classList.add("name");
        name.innerHTML = testCont[i][j].personalName;
        commentContent.appendChild(name);
      };

      // print comment box in the page
      testContainer.appendChild(testBox);

      createComBullets(i);
      
      comTransform.push(comTranslate(i));

      comBulTransform.push(comBulTranslate());
    };
    handleComBullets();
  };

  function createComBullets(index) {
    // create button element (box bullet)
    const testBtn = document.createElement("button");
    testBtn.classList.add("test_btn");
    testBtn.title = `Comment Box ${index + 1}`;
    testBtn.ariaLabel = `Comment Box ${index + 1}`;
    testBulletsBox.appendChild(testBtn);
  };

  // make position for the new comment box
  function comTranslate(numb) {
    return comTransformNum * numb;
  };

  // make position for the new comment bullet
  function comBulTranslate() {
    return comBulTransformNum -= 15;
  };

  function handleComBullets() {
    // array of created bullets
    const testBtns = [...document.querySelectorAll("main .our_skills .test_btn")];

    // active content as default
    activeCom(testBtns[0], 0, testBtns);

    // active content depeds on clicked bullet
    testBtns.forEach(btn => {
      btn.addEventListener("click", e => {
        activeCom(e.target, testBtns.indexOf(e.target), testBtns);
      });
    });
  };

  function activeCom(e, i, btns) {
    // remove active from all bullets
    btns.forEach(btn => {
      btn.classList.remove("active");
    });
    // active the current bullet
    e.classList.add("active");

    // use the current translate position on comments container and bullets box
    testContainer.style.cssText = `transform: translateX(-${comTransform[i]}%);`;
    testBulletsBox.style.cssText = `transform: translateX(${comBulTransform[i]}px);`;
  };

  // skills
  // select elemets
  const skillsContainer = document.querySelector("main .our_skills .skills");
  const percentLines = [...document.querySelectorAll("main .our_skills .percent_line")];
  const percentNumbs = [...document.querySelectorAll("main .our_skills .percent_numb")];
  // to make the animation one time only
  let startProgres = true;
  // before reach the box by 100px
  window.addEventListener("scroll", _ => {
    if (window.scrollY >= skillsContainer.offsetTop - 100) {
      if (startProgres) {
        // for every span and its p
        percentLines.forEach((prog, index) => {
          progress(prog, percentNumbs[index]);
        });
      };
      startProgres = false;
    };
  });

  function progress(prog, perEle) {
    let dataProg = prog.dataset.progres;
    let transDuration = 2;
    let increaseDuration = 1000;

    // increate progress width from 0 to active width
    prog.style.transition = `width ${transDuration}s`;
    prog.classList.add("active");
    
    progressPercent(perEle, dataProg, increaseDuration);
  };

  function progressPercent(pE, dP, iD) {
    // increase numb until dataset numb in 1s
    let perCount = setInterval(() => {
      pE.innerHTML++;
      if (pE.innerHTML === dP) {
        clearInterval(perCount);
      };
    }, iD / dP);
  };
  /* end skills section */
};
/* ===== end main ===== */
