  (function() {
    // 1) Helper to load a script and return a Promise
    function loadScript(src) {
      return new Promise(function(resolve, reject) {
        var s = document.createElement('script');
        s.src = src;
        s.onload = resolve;
        s.onerror = reject;
        document.head.appendChild(s);
      });
    }

    // 2) Chain the loads, then run your plugin code
    loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js')
      .then(function() {
        return loadScript('https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/velocity.min.js');
      })
      .then(function() {
        // 3) Paste in your morphingModal definition here
        (function($) {
          var modalWindow = $('.morph-modal');
          function morphingModal(element, trigger) {
            this.element = element;
            this.trigger = trigger;
            this.morphBg = this.element.children('.morph-background');
            this.closeButton = this.element.children('.close-modal');
            this.bindEvents();
          }
          morphingModal.prototype.bindEvents = function() {
            var self = this;
            this.trigger.on('click', function(e) {
              e.preventDefault();
              self.open();
            });
            this.closeButton.on('click', this.close.bind(this));
            $(document).keyup(function(e) {
              if (e.keyCode === 27 && self.element.hasClass('modal-visible')) {
                self.close();
              }
            });
          };
          morphingModal.prototype.open = function() {
            var self = this;
            this.element.addClass('open-modal');
            // disable page scroll:
            document.body.classList.add('modal-open');
            var pos = getElementPosition(this.trigger);
            var scale = evaluateScale(this.morphBg, pos);
            this.morphBg.css({
              top:  pos[0] + 'px',
              left: pos[1] + 'px',
              transform: 'scaleX(' + scale[1] + ') scaleY(' + scale[0] + ')'
            }).one('transitionend', function() {
              self.element.addClass('modal-visible');
            });
          };
          morphingModal.prototype.close = function() {
            var self = this;
            this.element.removeClass('modal-visible');
            // re‑enable page scroll:
            document.body.classList.remove('modal-open');
            this.morphBg.css({ transform: 'scaleX(1) scaleY(1)' })
              .one('transitionend', function() {
                self.element.removeClass('open-modal');
              });
          };
          function getElementPosition(trigger) {
            return [
              trigger.offset().top - $(window).scrollTop(),
              trigger.offset().left
            ];
          }
          function evaluateScale(el, pos) {
            return [
              scaleValue(pos[0], el.innerHeight(), $(window).height()),
              scaleValue(pos[1], el.innerWidth(),  $(window).width())
            ];
          }
          function scaleValue(coord, dim, win) {
            var other = win - coord - dim;
            var maxC  = Math.max(coord, other);
            return Math.ceil(((maxC * 2 + dim) / dim) * 10) / 10;
          }
          // initialize
          var objs = [];
          modalWindow.each(function() {
            var $m = $(this);
            var $t = $('a[href="#' + $m.attr('id') + '"]');
            objs.push(new morphingModal($m, $t));
          });
        })(jQuery);
      })
      .catch(function(err) {
        console.error('Script load failed:', err);
      });
  })();
