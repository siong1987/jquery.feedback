class window.Feedback
  _initialized = false
  @init: (options) ->
    feedback = new @
    opts = $.extend {}, feedback.default_options, options
    feedback.createFeedbackBox opts
    unless _initialized
      _initialized = true
      feedback.bindEvents opts
  
  default_options:
    placeholder: 'Feedback? Let us know here.'
    send_callback: ->
    thanks_message: """
<p>Thanks for your feedback!</p>
<div class="indent">
  - siong1987
</div>
    """
 
  createFeedbackBox: (opts) ->
    $('#feedback-anchor').html """
<div class="feedback-container">
  <div class="form">
    <textarea class="input" placeholder="#{opts.placeholder}"></textarea>
    <div class="actions">
      <button class="button submit">Send</button>
    </div>
  </div>
  <div class="success">#{opts.thanks_message}</div>
</div>
    """

  bindEvents: (opts) ->
    $(document).on 'focus', '#feedback-anchor textarea', ->
      $(@).closest('.feedback-container').addClass('expanded')

    # when clicking outside of the feedback-anchor, close it.
    $(document).mouseup (e) ->
      container = $("#feedback-anchor")
      container_textarea = container.find('textarea')

      if (container.has(e.target).length == 0)
        container_textarea.val('')
        container.find('.expanded').removeClass('expanded success-state')

    $(document).on 'click', '#feedback-anchor .button', ->
      container = $('.feedback-container')
      container_textarea = container.find('textarea')

      # check empty body
      if (container_textarea.val() != '')
        $(@).closest('.feedback-container').addClass('success-state')

        opts.send_callback(container_textarea.val())

        # timer to close the feedback box
        setTimeout ->
          container_textarea.val('')
          container.removeClass('success-state expanded')
        , 5000
