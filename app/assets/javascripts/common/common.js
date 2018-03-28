$(function() {



  var $window = $(window);
  var $document = $(document);
  var $sidebar = $('#sidebar');



  /* ==========================================================================
     commentBox タブボタンクリックイベント伝播キャンセル
     ========================================================================== */

  $document.on('click', '.commentBox', function(e) {
    e.stopPropagation();
  });



  /* ==========================================================================
     commentItem 本文展開
     ========================================================================== */

  $document.on('click', '.commentItem-body', function(e) {
    var isButtonsClick = $(e.target).parents('.toolButtons').length > 0;
    if (!isButtonsClick) {
      $(this).toggleClass('show');
    }
  });



  /* ==========================================================================
     sidebar commentBox フィルター
     ========================================================================== */

  (function() {
    var $box = $sidebar.find('.commentBox');
    var $buttons = $box.find('.nav .btn[data-toggle="filter"]');
    $buttons.on('click', function(e) {
      e.preventDefault();
      $box.attr('data-filter', $(this).attr('data-key'));
      $buttons.removeClass('active').filter(this).addClass('active');
    });
  })();



  /* ==========================================================================
     multipane トグルボタン領域拡大
     ========================================================================== */

  (function() {
    var $toggle = $('.multipane-toggle');
    $toggle.on('click', function(e) {
      if (e.target == this) {
        $(this).find('.btn').trigger('focus').trigger('click');
      }
    });
  })();



  /* ==========================================================================
     sidebar 開閉時リサイズトリガー
     ========================================================================== */

  (function() {
    $sidebar.on('webkitTransitionEnd oTransitionEnd otransitionend transitionend', function() {
      $window.trigger('resize');
    });
  })();



  /* ==========================================================================
     tableGroup ヘッダー固定
     ========================================================================== */

  (function() {
    $('.tableGroup-item').each(function() {
      var $tableWrapper = $(this);

      var $tableMaster = $tableWrapper.children('.table:not(.table-header)');
      var $tableMasterCells = $tableMaster.find('thead th');

      var $tableHeader = $tableWrapper.children('.table-header');
      var $tableHeaderCells = $tableHeader.find('thead th');

      $tableWrapper.on('scroll', function() {
        $tableHeader.css('transform', 'translateY(' + $tableWrapper.scrollTop() + 'px)');
      }).trigger('scroll');

      $window.on('resize', function() {
        $tableHeaderCells.each(function(i) {
          $(this).css('min-width', $tableMasterCells.eq(i).css('width'));
        });
      }).trigger('resize');
    });
  })();



});

function format_time(seconds) {
  var time;
  if (seconds >= 60) {
    time = (seconds%60) + '秒';
    var minutes = Math.floor(seconds/60);
    if (minutes >= 60) {
      return Math.floor(minutes/60) + '時間' + (minutes%60) + '分' + time;
    }
    else {
      return minutes + '分' + time;
    }
  }
  else {
    return seconds + '秒';
  }
}
