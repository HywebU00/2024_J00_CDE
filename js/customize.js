// 自行加入的JS請寫在這裡
$(function () {
  //sticky sidebar
  // if ($('.stickySidebar').length > 0) {
  //   var stickySidebar = new StickySidebar('.stickySidebar', {
  //     containerSelector: '.main',
  //     topSpacing: 93,
  //     bottomSpacing: 0,
  //     minWidth: 768,
  //     resizeSensor: true,
  //   });
  // }
  // 首頁輪播
  $('.mpSlider').slick({
    mobileFirst: true,
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    fade: true,
    lazyLoaded: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    pauseOnHover: false,
    pauseOnFocus: false,
    customPaging: function (slider, i) {
      var title = $(slider.$slides[i]).find('img').attr('alt').trim();
      return $('<button type="button" aria-label="' + title + '"/>').text(title);
    },
  });
  $('.mpSlider01').slick({
    dots: true,
    arrows: true,
    speed: 500,
    autoplay: false,
    fade: true,
    lazyLoaded: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    pauseOnHover: false,
    pauseOnFocus: false,
    adaptiveHeight: true,
    customPaging: function (slider, i) {
      var title = $(slider.$slides[i]).find('img').attr('alt')?.trim();
      return $('<button type="button" aria-label="' + title + '"/>').text(title);
    },
  });

  $('.mpSlider02').slick({
    dots: true,
    arrows: true,
    speed: 500,
    autoplay: false,
    fade: true,
    lazyLoaded: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    pauseOnHover: false,
    pauseOnFocus: false,
    customPaging: function (slider, i) {
      var title = $(slider.$slides[i]).find('img').attr('alt')?.trim();
      return $('<button type="button" aria-label="' + title + '"/>').text(title);
    },
  });
  // 廣告輪播
  $('.adSlider').slick({
    mobileFirst: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    arrow: true,
    lazyLoaded: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  });
  //燈箱slick+lightBox組合
  $('.cp_slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    pauseOnFocus: true,
    focusOnSelect: true,
    accessibility: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 545,
        settings: {
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });
  //
  $('.cppic_slider').slick({
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
    // pauseOnHover: true,
    // pauseOnFocus: true,
    // focusOnSelect: true,
    // accessibility: true,
    // lazyLoad: 'ondemand',
    // ease: 'ease',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 545,
        settings: {
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });
  // cp_photo
  $('.Slider-for').on('init reInit afterChange', function (event, slick, currentSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $('.controls').html(i + '/' + slick.slideCount);
  });
  $('.Slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    swipe: false,
    swipeToSlide: false,
    lazyLoad: 'ondemand',
    asNavFor: '.Slider-nav',
    infinite: true,
    adaptiveHeight: true,
  });

  //點選slick-slide時才開始切換
  let check = 0;
  $('.mp_annualreportsBlock .Slider-navall .Slider-nav').on('click', function () {
    check = 1;
  });

  $('.Slider-nav')
    .slick({
      slidesToShow: 10,
      slidesToScroll: 1,
      asNavFor: '.Slider-for',
      dots: true,
      arrows: true,
      lazyLoad: 'ondemand',
      focusOnSelect: true,
      infinite: true,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 8,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 6,
          },
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 5,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 630,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 530,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    })
    .on('beforeChange', (slick, direction) => {
      //slick切換前執行
      $('.mp_annualreportsBlock .introduction_nav').removeClass('slick-current');
      $('.mp_annualreportsBlock .introduction_for').hide();
      $('.mp_annualreportsBlock .Syncing_slider .Slider-forall .Slider-for').show();
      $('.mp_annualreportsBlock .Syncing_slider .Slider-forall .Slider-for').slick('refresh');
    })
    .on('breakpoint', (slick, direction) => {
      console.log(check);
      // 斷點時執行
      if (check === 0) {
        $('.mp_annualreportsBlock .introduction_nav').addClass('slick-current');
        $('.mp_annualreportsBlock .Slider-navall .Slider-nav .slick-slide').removeClass('slick-current').removeClass('slick-active');
        $('.mp_annualreportsBlock .Syncing_slider .Slider-forall .Slider-for').hide();
        $('.mp_annualreportsBlock .introduction_for').show();
      }
    });

  //初始化
  $('.mp_annualreportsBlock .Syncing_slider .Slider-forall .Slider-for').hide();
  $('.mp_annualreportsBlock .Slider-navall .Slider-nav .slick-slide').removeClass('slick-current').removeClass('slick-active');
  $('.mp_annualreportsBlock .introduction_nav').addClass('slick-current');

  //點選introduction時
  $('.mp_annualreportsBlock .introduction_nav').on('click', function () {
    check = 0;
    $('.mp_annualreportsBlock .Syncing_slider .Slider-forall .Slider-for').hide();
    $('.mp_annualreportsBlock .Slider-navall .Slider-nav .slick-slide').removeClass('slick-current').removeClass('slick-active');
    $('.mp_annualreportsBlock .introduction_nav').addClass('slick-current');
    $('.mp_annualreportsBlock .introduction_for').show();
  });
  // password_toggle
  var passShow = false;
  $('.password_toggle').each(function (index, el) {
    $(this)
      .find('.btn-icon')
      .off()
      .click(function (e) {
        if (!passShow) {
          $(this).children('i').removeClass().addClass('i_show');
          $(this).parents('.password_toggle').find('input[type="password"]').attr('type', 'text');
          passShow = true;
          // console.log(passShow);
        } else {
          $(this).children('i').removeClass().addClass('i_hide');
          $(this).parents('.password_toggle').find('input[type="text"]').attr('type', 'password');
          passShow = false;
          // console.log(passShow);
        }
        e.preventDefault();
      });
  });

  // font_size
  $('.fontsize_btn').click(function () {
    if ($('.font_size_list').is(':visible')) {
      $('.font_size_list').stop().slideUp();
    } else {
      $('.font_size_list').stop().slideDown();
      $('.searchcontent').stop().slideUp();
    }
  });

  // header search
  $('.searchblock .searchbtn').click(function () {
    if ($('.searchcontent').is(':visible')) {
      $('.searchcontent').stop().slideUp();
    } else {
      $('.searchcontent').stop().slideDown();
      $('.font_size_list').stop().slideUp();
    }
  });

  //內頁左欄上下開合
  var _leftnodemenu = $('.left_block .leftblock_nodemenu ul');
  _leftnodemenu.find('li').has('ul').addClass('hasChild');
  var _hasul = _leftnodemenu.find('.hasChild').children('a');
  $('<button type="button" class="arrow">箭頭</button>').insertAfter(_hasul);
  _leftnodemenu
    .children('li')
    .children('button')
    .click(function () {
      $(this).next('ul').stop().slideToggle();
      $(this).stop().toggleClass('open');
      $(this).parent('li').siblings('li').children('ul').stop().slideUp();
      $(this).parent('li').siblings('.hasChild').children('button').removeClass('open');
    });
  //  內頁左欄電腦版 左右收合
  $('.nodemenu_btn>a').click(function () {
    if ($('.innerpage .container .left_block').hasClass('hidden')) {
      $('.innerpage .container .left_block').removeClass('hidden');
      $(this).removeClass('open');
      $(this).text('次選單收合');
    } else {
      $('.innerpage .container .left_block').addClass('hidden');
      $(this).addClass('open');
      $(this).text('次選單展開');
    }
  });
  //  內頁左欄電腦版（英文版） 左右收合
  $('.nodemenu_btn_e>a').click(function () {
    if ($('.innerpage .container .left_block').hasClass('hidden')) {
      $('.innerpage .container .left_block').removeClass('hidden');
      $(this).removeClass('open');
      $(this).text('Close Submenu');
    } else {
      $('.innerpage .container .left_block').addClass('hidden');
      $(this).addClass('open');
      $(this).text('Open Submenu');
    }
  });
  //  內頁左欄手機版 左右收合
  $('.nodemenu_mobilebtn>a').click(function () {
    if ($(this).hasClass('open')) {
      $('.innerpage .container .left_block').stop().removeClass('open');
      $(this).stop().removeClass('open');
      $(this).text('次選單展開');
      $('body').removeClass('noscroll');
    } else {
      $('.innerpage .container .left_block').stop().addClass('open');
      $(this).stop().addClass('open');
      $(this).text('次選單收合');
      $('body').addClass('noscroll');
    }
  });

  //  內頁左欄手機版（英文版） 左右收合
  $('.nodemenu_mobilebtn_e>a').click(function () {
    if ($(this).hasClass('open')) {
      $('.innerpage .container .left_block').stop().removeClass('open');
      $(this).stop().removeClass('open');
      $(this).text('Open Submenu');
      $('body').removeClass('noscroll');
    } else {
      $('.innerpage .container .left_block').stop().addClass('open');
      $(this).stop().addClass('open');
      $(this).text('Close Submenu');
      $('body').addClass('noscroll');
    }
  });
  // 點擊其他地方，左欄收起
  $(document)
    .off('touchend click')
    .on('touchend click', function (e) {
      var container = $('.nodemenu_mobilebtn a, .left_block, .nodemenu_mobilebtn_e a '); //點這些以外的區塊
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        $('.nodemenu_mobilebtn>a, .nodemenu_mobilebtn_e>a').removeClass('open');
        $('.nodemenu_mobilebtn>a').text('次選單展開');
        $(' .nodemenu_mobilebtn_e>a').text('Open Submenu');
        $('.left_block').removeClass('open'); //要被收起來的區塊
        $('.left_block .leftblock_nodemenu ul ul').stop().slideUp();
        $('.left_block .leftblock_nodemenu ul li.hasChild button').removeClass('open');
        $('body').removeClass('noscroll');
      }
    });
});

////////////////////////////////////////////////////////
$(function () {
  if ($('.slick12_5').length > 0) {
    $('.slick12_5').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      dots: false,
    });
  }
  if ($('.slick12_3').length > 0) {
    $('.slick12_3').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      dots: false,
    });
  }
  if ($('.slick12_4').length > 0) {
    $('.slick12_4').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
    });
  }
});

//c_iconBox_next_lv判斷數量大於6隱藏出現更多
$(window).on('load', function () {
  if (!$('.c_iconBox_next_lv .hoverBox').length) {
    return;
  }
  $('.c_iconBox_next_lv .hoverBox').each(function () {
    let countLi = $(this).find('li').length;
    if (countLi > 5) {
      $(this)
        .find('li')
        .each(function (index, el) {
          if (index > 4) {
            $(this).hide();
          }
        });
      $(this).find('.moreItem').show();
    }
  });
});

let outerWidth = 1300;
let width8 = (outerWidth / 12) * 8;
let width6 = (outerWidth / 12) * 6;
let width4 = (outerWidth / 12) * 4;

function checkOuter12_5() {
  const checkOuter12_5 = document.querySelectorAll('.checkOuter12_5');
  checkOuter12_5?.forEach((item) => {
    let elemWidth = item.offsetWidth;
    if (elemWidth <= width4) {
      item.setAttribute('col', 2);
    } else if (elemWidth <= width6) {
      item.setAttribute('col', 3);
    } else if (elemWidth <= width8) {
      item.setAttribute('col', 4);
    } else if (elemWidth > width8) {
      item.setAttribute('col', 5);
    }
  });
}

function checkOuter12_4() {
  const checkOuter12_4 = document.querySelectorAll('.checkOuter12_4');
  checkOuter12_4?.forEach((item) => {
    let elemWidth = item.offsetWidth;
    if (elemWidth <= width4) {
      item.setAttribute('col', 1);
    } else if (elemWidth <= width6) {
      item.setAttribute('col', 2);
    } else if (elemWidth <= width8) {
      item.setAttribute('col', 3);
    } else if (elemWidth > width8) {
      item.setAttribute('col', 4);
    }
  });
}

function checkOuter12_3() {
  const checkOuter12_3 = document.querySelectorAll('.checkOuter12_3');
  checkOuter12_3?.forEach((item) => {
    let elemWidth = item.offsetWidth;
    if (elemWidth <= width6) {
      item.setAttribute('col', 1);
    } else if (elemWidth <= width8) {
      item.setAttribute('col', 2);
    } else if (elemWidth > width8) {
      item.setAttribute('col', 3);
    }
  });
}

document.addEventListener('DOMContentLoaded', checkOuter12_5);
document.addEventListener('DOMContentLoaded', checkOuter12_4);
document.addEventListener('DOMContentLoaded', checkOuter12_3);
window.addEventListener('resize', checkOuter12_5);
window.addEventListener('resize', checkOuter12_4);
window.addEventListener('resize', checkOuter12_3);

function checkSlick12_5() {
  const slick12_5 = document.querySelectorAll('.slick12_5');
  slick12_5?.forEach((item) => {
    let boxWidth = item.offsetWidth;
    if (boxWidth <= width4) {
      item.setAttribute('col', 2);
      $(item).hasClass('slick-initialized') ? $(item).slick('unslick') : null;
      $(item).slick({
        slidesToShow: 2,
        infinite: true,
        slidesToScroll: 1,
        dots: false,
      });
    } else if (boxWidth <= width6) {
      item.setAttribute('col', 3);
      $(item).hasClass('slick-initialized') ? $(item).slick('unslick') : null;
      $(item).slick({
        slidesToShow: 3,
        infinite: true,
        slidesToScroll: 1,
        dots: false,
      });
    } else if (boxWidth <= width8) {
      item.setAttribute('col', 4);
      $(item).hasClass('slick-initialized') ? $(item).slick('unslick') : null;
      $(item).slick({
        slidesToShow: 4,
        infinite: true,
        slidesToScroll: 1,
        dots: false,
      });
    } else if (boxWidth > width8) {
      item.setAttribute('col', 5);
      $(item).hasClass('slick-initialized') ? $(item).slick('unslick') : null;
      $(item).slick({
        slidesToShow: 5,
        infinite: true,
        slidesToScroll: 1,
        dots: false,
      });
    }
  });
}

function checkSlick12_4() {
  const slick12_4 = document.querySelectorAll('.slick12_4');
  slick12_4?.forEach((item) => {
    let boxWidth = item.offsetWidth;
    if (boxWidth <= width4) {
      item.setAttribute('col', 1);
      $(item).hasClass('slick-initialized') ? $(item).slick('unslick') : null;
      $(item).slick({
        slidesToShow: 1,
        infinite: true,
        slidesToScroll: 1,
        dots: false,
      });
    } else if (boxWidth <= width6) {
      item.setAttribute('col', 2);
      $(item).hasClass('slick-initialized') ? $(item).slick('unslick') : null;
      $(item).slick({
        slidesToShow: 2,
        infinite: true,
        slidesToScroll: 1,
        dots: false,
      });
    } else if (boxWidth <= width8) {
      item.setAttribute('col', 3);
      $(item).hasClass('slick-initialized') ? $(item).slick('unslick') : null;
      $(item).slick({
        slidesToShow: 3,
        infinite: true,
        slidesToScroll: 1,
        dots: false,
      });
    } else if (boxWidth > width8) {
      item.setAttribute('col', 4);
      $(item).hasClass('slick-initialized') ? $(item).slick('unslick') : null;
      $(item).slick({
        slidesToShow: 4,
        infinite: true,
        slidesToScroll: 1,
        dots: false,
      });
    }
  });
}

function checkSlick12_3() {
  const slick12_3 = document.querySelectorAll('.slick12_3');
  slick12_3?.forEach((item) => {
    let boxWidth = item.offsetWidth - 30;
    if (boxWidth <= width4) {
      item.setAttribute('col', 1);
      $(item).hasClass('slick-initialized') ? $(item).slick('unslick') : null;
      $(item).slick({
        slidesToShow: 1,
        infinite: true,
        slidesToScroll: 1,
        dots: false,
      });
    } else if (boxWidth <= width6) {
      item.setAttribute('col', 1);
      $(item).hasClass('slick-initialized') ? $(item).slick('unslick') : null;
      $(item).slick({
        slidesToShow: 1,
        infinite: true,
        slidesToScroll: 1,
        dots: false,
      });
    } else if (boxWidth <= width8) {
      item.setAttribute('col', 2);
      $(item).hasClass('slick-initialized') ? $(item).slick('unslick') : null;
      $(item).slick({
        slidesToShow: 2,
        infinite: true,
        slidesToScroll: 1,
        dots: false,
      });
    } else if (boxWidth > width8) {
      item.setAttribute('col', 3);
      $(item).hasClass('slick-initialized') ? $(item).slick('unslick') : null;
      $(item).slick({
        slidesToShow: 3,
        infinite: true,
        slidesToScroll: 1,
        dots: false,
      });
    }
  });
}

document.addEventListener('DOMContentLoaded', checkSlick12_5);
document.addEventListener('DOMContentLoaded', checkSlick12_4);
document.addEventListener('DOMContentLoaded', checkSlick12_3);
window.addEventListener('resize', checkSlick12_5);
window.addEventListener('resize', checkSlick12_4);
window.addEventListener('resize', checkSlick12_3);

function animateNumber(element, start, stop, duration, ease) {
  let startTime = null;
  const isCountdown = start > stop;

  function numberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  function animationStep(timestamp) {
    if (!startTime) {
      startTime = timestamp;
    }
    const elapsedTime = timestamp - startTime;
    const progress = elapsedTime / duration;
    let currentValue;
    if (isCountdown) {
      currentValue = Math.floor(start - (start - stop) * progress);
    } else {
      currentValue = Math.floor(start + (stop - start) * progress);
    }
    element.textContent = numberWithCommas(currentValue);
    if (progress < 1) {
      requestAnimationFrame(animationStep);
    } else {
      element.textContent = numberWithCommas(stop);
    }
  }
  requestAnimationFrame(animationStep);
}

function animateChart(elem, start, stop, max, duration) {
  let element = typeof elem === 'string' ? document.querySelector(elem) : elem;
  let startTime = null;
  const isCountdown = start > stop;
  let p = max === undefined ? 100 : (stop / max) * 100;

  function numberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  function animationStep(timestamp) {
    if (!startTime) {
      startTime = timestamp;
    }
    const elapsedTime = timestamp - startTime;
    const progress = elapsedTime / (p * 50);
    let currentValue;
    let currentValueP;
    if (isCountdown) {
      currentValue = Math.floor(start - (start - stop) * progress);
    } else {
      currentValue = Math.floor(start + (stop - start) * progress);
    }

    if (isCountdown) {
      currentValueP = Math.floor(start - (start - p) * progress);
    } else {
      currentValueP = Math.floor(start + (p - start) * progress);
    }

    element.style.width = `calc(${currentValueP}%)`;
    element.nextElementSibling.textContent = numberWithCommas(currentValue);
    if (progress < 1) {
      requestAnimationFrame(animationStep);
    } else {
      element.nextElementSibling.textContent = numberWithCommas(stop);
    }
  }
  requestAnimationFrame(animationStep);
}

function chartFn(elem, chartData) {
  const indexChart = document.querySelectorAll(elem);
  if (indexChart.length > 0) {
    indexChart.forEach((item) => {
      // 創建tab架構
      const tabBox = document.createElement('div');
      tabBox.classList.add('tabBox');
      const tab = document.createElement('div');
      tab.classList.add('tab');
      const contentBox = document.createElement('div');
      contentBox.classList.add('contentBox');
      tabBox.appendChild(tab);
      tabBox.appendChild(contentBox);
      item.prepend(tabBox);

      chartData?.forEach((chart, index) => {
        // 創建頁籤按鈕
        const tabButton = document.createElement('button');
        tabButton.textContent = chart.title;
        tab.appendChild(tabButton);
        // 啟動第一筆資料
        index === 0 ? tabButton.classList.add('active') : null;

        // 創建頁籤內容框架
        const content = document.createElement('div');
        content.classList.add('content');
        contentBox.appendChild(content);
        // 啟動第一筆資料
        index === 0 ? content.classList.add('active') : null;

        // 新增圖表資料 直
        chart.data.forEach((data, i) => {
          const itemElem = document.createElement('div');
          itemElem.classList.add('item');

          const titleElem = document.createElement('div');
          titleElem.classList.add('title');
          titleElem.textContent = data.title;
          itemElem.appendChild(titleElem);

          const lineBox = document.createElement('div');
          lineBox.classList.add('lineBox');
          lineBox.classList.add(`line${i + 1}`);

          const span = document.createElement('span');
          lineBox.appendChild(span);

          const countElem = document.createElement('div');
          countElem.classList.add('count');
          countElem.dataset.count = data.value;
          lineBox.appendChild(countElem);
          itemElem.appendChild(lineBox);
          content.appendChild(itemElem);
        });

        // 新增圖表資料 橫
        const infoElem = document.createElement('div');
        infoElem.classList.add('infoBox');
        infoElem.dataset.first = chart.info[0];
        for (let i = 1; i < chart.info[2] + 1; i++) {
          const block = document.createElement('div');
          block.classList.add('block');
          block.textContent = (chart.info[1] / chart.info[2]) * i;
          block.style.width = `${100 / chart.info[2]}%`;
          infoElem.appendChild(block);
        }
        content.appendChild(infoElem);
      });

      // 執行跑動效果

      // 頁籤切換時重新執行跑動效果
      const allContent = contentBox.querySelectorAll('.content');
      function runLine() {
        chartData?.forEach((chart, index) => {
          const max = chart.info[1];

          const allItem = allContent[index].querySelectorAll('.item');
          allItem.forEach((item) => {
            animateChart(item.querySelector('span'), 0, Number(item.querySelector('.count').dataset.count), max);
          });
        });
      }

      // 判斷圖表是否已經出現在畫面
      setTimeout(() => {
        let indexScrollCheck = false;

        function handleChartAnimation() {
          if (isObjectTBVisible(item) && !indexScrollCheck) {
            runLine();
            indexScrollCheck = true;
          }
        }

        // 初始執行
        handleChartAnimation();
        // 捲動範圍時執行
        window.addEventListener('scroll', handleChartAnimation);
        // 切換其他頁籤時執行
        checkObj(handleChartAnimation);
      }, 100);

      // tab切換功能
      const tabButton = tab.querySelectorAll('button');
      tabButton.forEach((button, index) => {
        button.addEventListener('click', function () {
          tabButton.forEach((item) => item.classList.remove('active'));
          allContent.forEach((item) => item.classList.remove('active'));
          button.classList.add('active');
          allContent[index].classList.add('active');
          runLine();
        });
      });
    });

    function checkObj(handleChartAnimation) {
      const callback = (mutation) => {
        handleChartAnimation();
      };

      const observer = new MutationObserver(callback);

      const element = document.querySelector(elem);
      const options = {
        childList: true,
        attributes: true,
      };

      observer.observe(element, options);
    }

    function isObjectTBVisible(object) {
      let windowHeight = window.innerHeight;

      let objectRect = object?.getBoundingClientRect();
      let objectTop = objectRect?.top;
      let objectBottom = objectRect?.bottom;

      let isFullyVisible = (objectTop - windowHeight + 100 <= 0 && objectBottom > 0) || (objectTop <= 0 && objectBottom.bottom - 100 > 0);
      return isFullyVisible;
    }
  }
}

function tabUse(elem) {
  $(elem).each(function () {
    let _target = $(this).children('.tabBox')[0];
    $(_target).children('.tab').find('button').eq(0).addClass('active');
    $(_target).find('.contentBox > .content').eq(0).addClass('active');

    $(this)
      .find('.tab > button')
      .on('click', function (e) {
        let index = $(this).index();
        let content = $(this).parent().siblings('.contentBox').children('.content');
        console.log(content);
        content.eq(index).find('.c_chart').toggleClass('check');

        $(this).siblings('button').removeClass('active');
        $(this).addClass('active');
        content.removeClass('active');
        content.eq(index).addClass('active');

        content.find('.tab button').removeClass('active');
        content.find('.content').removeClass('active');
        content.eq(index).find('.tab button').eq(0).addClass('active');
        content.eq(index).find('.content').eq(0).addClass('active');

        $('.c_tabSelect .tab').slideUp('fast');
        $('.c_tabSelect .switchBtn').removeClass('active');

        checkSlick12_3();
        checkSlick12_4();
        checkSlick12_5();
        $(_target).find('.slick12_3').slick('refresh');
        $(_target).find('.slick12_4').slick('refresh');
        $(_target).find('.slick12_5').slick('refresh');
      });
  });
}

// 頁籤
tabUse('.c_tab');
tabUse('.c_tabDouble');
tabUse('.c_tabLeft');
tabUse('.c_newsCardTab');

// tab select
$('.c_tabSelect').each(function () {
  $(this)
    .find('.switchBtn')
    .on('click', function () {
      $(this).toggleClass('active');
      $(this).siblings().find('.tab').stop().slideToggle('fast');
    });
});

function faq(elem) {
  $(elem)
    .off()
    .on('click', 'button.title', function () {
      console.log($(this).parent('.item').siblings('.item'));
      $(this).parent('.item').siblings('.item').find('.aBox').slideUp('fast');
      $(this).parent('.item').siblings('.item').find('.title').removeClass('active');
      $(this).toggleClass('active');
      $(this).siblings('.aBox').slideToggle('fast');
    });
}
faq('.c_faq');

//業務成果 跑數字
// $(function () {
//   let num01 = document.querySelector('.num01');
//   animateNumber(num01, 0, 117, 2000);
//   let num02 = document.querySelector('.num02');
//   animateNumber(num02, 0, 39, 2000);
//   let num03 = document.querySelector('.num03');
//   animateNumber(num03, 0, 628, 2000);
//   let num04 = document.querySelector('.num04');
//   animateNumber(num04, 0, 320, 2000);

//   let amount01 = document.querySelector('.amount01');
//   animateNumber(amount01, 0, 27, 2000);
//   let amount02 = document.querySelector('.amount02');
//   animateNumber(amount02, 0, 2, 500);
//   let amount03 = document.querySelector('.amount03');
//   animateNumber(amount03, 0, 412, 2000);
//   let amount04 = document.querySelector('.amount04');
//   animateNumber(amount04, 0, 30, 2000);
//   let amount05 = document.querySelector('.amount05');
//   animateNumber(amount05, 0, 382, 2000);
//   let amount06 = document.querySelector('.amount06');
//   animateNumber(amount06, 0, 216, 2000);
//   let amount07 = document.querySelector('.amount07');
//   animateNumber(amount07, 0, 18, 2000);
//   let amount08 = document.querySelector('.amount08');
//   animateNumber(amount08, 0, 5, 2000);
//   let amount09 = document.querySelector('.amount09');
//   animateNumber(amount09, 0, 216, 2000);
// });
$(function () {
  let num01 = document.querySelector('.num01');
  let num02 = document.querySelector('.num02');
  let num03 = document.querySelector('.num03');
  let num04 = document.querySelector('.num04');
  let amount01 = document.querySelector('.amount01');
  let amount02 = document.querySelector('.amount02');
  let amount03 = document.querySelector('.amount03');
  let amount04 = document.querySelector('.amount04');
  let amount05 = document.querySelector('.amount05');
  let amount06 = document.querySelector('.amount06');
  let amount07 = document.querySelector('.amount07');
  let amount08 = document.querySelector('.amount08');
  let amount09 = document.querySelector('.amount09');

  const check = document.querySelector('.achievement_slider');
  const options = {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.2,
  };
  const callback = (entries, observer) => {
    if (entries[0].isIntersecting && !check.classList.contains('active')) {
      check.classList.add('active');
      setTimeout(() => {
        animateNumber(num01, 0, 117, 2000);
        animateNumber(num02, 0, 39, 2000);
        animateNumber(num03, 0, 628, 2000);
        animateNumber(num04, 0, 320, 2000);
        animateNumber(amount01, 0, 27, 2000);
        animateNumber(amount02, 0, 2, 500);
        animateNumber(amount03, 0, 412, 2000);
        animateNumber(amount04, 0, 30, 2000);
        animateNumber(amount05, 0, 382, 2000);
        animateNumber(amount06, 0, 216, 2000);
        animateNumber(amount07, 0, 18, 2000);
        animateNumber(amount08, 0, 5, 2000);
        animateNumber(amount09, 0, 216, 2000);
      }, 500);
    }
  };

  const observer = new IntersectionObserver(callback, options);
  check ? observer.observe(check) : null;
});

//業務成果
$(function () {
  $('.achievement_slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },

      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});
$(function () {
  $('.searchblockbtn').click(function () {
    $('.conditional_searchblock').slideToggle();
  });
});
$(function () {
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 180) {
      $('.nodemenu_btn').addClass('nodemenu_btnfixed');
    } else {
      $('.nodemenu_btn').removeClass('nodemenu_btnfixed');
    }
  });
});
$(function () {
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 180) {
      $('.nodemenu_btn_e').addClass('nodemenu_btnfixed');
    } else {
      $('.nodemenu_btn_e').removeClass('nodemenu_btnfixed');
    }
  });
});
$(function () {
  $('.vacancies td a.vacanciesbtn').click(function () {
    // $(this).stop().toggleClass('open');
    // $(this).parents('tr').next('tr').find('.cp_table').stop().slideToggle();
    if ($(this).parents('tr').next('tr').find('.cp_table').is(':hidden')) {
      $(this).parents('tr').siblings('tr').removeClass('here').removeClass('nexthere');
      $(this).parents('tr').addClass('here');
      $(this).parents('tr').next('tr').addClass('nexthere');

      $(this).parents('tr').siblings('tr').find('.cp_table').stop().slideUp();
      $(this).parents('tr').siblings('tr').find('a').stop().removeClass('open');
      $(this).parents('tr').next('tr').find('.cp_table').stop().slideDown();
      $(this).stop().addClass('open');
    } else {
      $(this).parents('tr').next('tr').find('.cp_table').stop().slideUp();
      $(this).stop().removeClass('open');
      $(this).parents('tr').removeClass('here');
      $(this).parents('tr').siblings('tr').removeClass('here').removeClass('nexthere');
    }
  });
});
$(function () {
  $('.vacancies td button.details_btn').click(function () {
    // $(this).stop().toggleClass('open');
    // $(this).parents('tr').next('tr').find('.cp_table').stop().slideToggle();
    if ($(this).parents('tr').next('tr').find('.cp_table').is(':hidden')) {
      $(this).parents('tr').siblings('tr').removeClass('here').removeClass('nexthere');
      $(this).parents('tr').addClass('here');
      $(this).parents('tr').next('tr').addClass('nexthere');

      $(this).parents('tr').siblings('tr').find('.cp_table').stop().slideUp();
      $(this).parents('tr').siblings('tr').find('a').stop().removeClass('open');
      $(this).parents('tr').next('tr').find('.cp_table').stop().slideDown();
      $(this).parent('td').siblings('td').find('a').stop().addClass('open');
    } else {
      $(this).parents('tr').next('tr').find('.cp_table').stop().slideUp();
      $(this).stop().removeClass('open');
      $(this).parent('td').siblings('td').find('a').stop().removeClass('open');
      $(this).parents('tr').removeClass('here');
      $(this).parents('tr').siblings('tr').removeClass('here').removeClass('nexthere');
    }
  });
});
