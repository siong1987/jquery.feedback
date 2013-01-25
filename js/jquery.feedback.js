// Generated by CoffeeScript 1.4.0
(function() {

  window.Feedback = (function() {
    var _initialized;

    function Feedback() {}

    _initialized = false;

    Feedback.init = function(options) {
      var feedback, opts;
      feedback = new this;
      opts = $.extend({}, feedback.default_options, options);
      feedback.createFeedbackBox(opts);
      if (!_initialized) {
        _initialized = true;
        return feedback.bindEvents(opts);
      }
    };

    Feedback.prototype.default_options = {
      placeholder: 'Feedback? Let us know here.',
      send_callback: function() {},
      thanks_message: "<p>Thanks for your feedback!</p>\n<div class=\"indent\">\n  - siong1987\n</div>"
    };

    Feedback.prototype.createFeedbackBox = function(opts) {
      return $('#feedback-anchor').html("<div class=\"feedback-container\">\n  <div class=\"form\">\n    <textarea class=\"input\" placeholder=\"" + opts.placeholder + "\"></textarea>\n    <div class=\"actions\">\n      <button class=\"button submit\">Send</button>\n    </div>\n  </div>\n  <div class=\"success\">" + opts.thanks_message + "</div>\n</div>");
    };

    Feedback.prototype.bindEvents = function(opts) {
      $(document).on('focus', '#feedback-anchor textarea', function() {
        return $(this).closest('.feedback-container').addClass('expanded');
      });
      $(document).mouseup(function(e) {
        var container, container_textarea;
        container = $("#feedback-anchor");
        container_textarea = container.find('textarea');
        if (container.has(e.target).length === 0) {
          container_textarea.val('');
          return container.find('.expanded').removeClass('expanded success-state');
        }
      });
      return $(document).on('click', '#feedback-anchor .button', function() {
        var container, container_textarea;
        container = $('.feedback-container');
        container_textarea = container.find('textarea');
        if (container_textarea.val() !== '') {
          $(this).closest('.feedback-container').addClass('success-state');
          opts.send_callback(container_textarea.val());
          return setTimeout(function() {
            container_textarea.val('');
            return container.removeClass('success-state expanded');
          }, 5000);
        }
      });
    };

    return Feedback;

  })();

}).call(this);
