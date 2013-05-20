# jQuery.Feedback

I create this clone of the [Branch][1]'s feedback widget on the site.
It is also being used at [CupidWithFriends][2].

## Demo

![Demo](https://raw.github.com/siong1987/jquery.feedback/master/images/jquery.feedback.gif)

## Usage

First, you have to include both `js/jquery.feedback.js` and
`css/jquery.feedback.css` files on your page.

Then, create a dom with id `feedback-anchor` on your page:

```html
<div id="feedback-anchor"></div>
```

Then, you can initialize the Feedback widget on your page via:

```coffeescript
Feedback.init
  placeholder: 'Feedback? Let us know here.'
  send_callback: ->
  thanks_message: ""
  button_name: 'Send'
<p>Thanks for your feedback!</p>
<div class="indent">
  - siong1987
</div>
    """
```

* `placeholder`: the placeholder message when user sees the Feedback
widget.
* `send_callback(text)`: the callback function after the user clicks on the
Send button by returning the text in the form.
* `thanks_message`: the message the user sees after the feedback message
is sent.
* `button_name`: the send button's name.  It doesn't have to be 'Send', right?

## Help/Issues

The code is extremely simple. Just read the source code if you have any
questions. Or, you can create a GitHub issue, I will look at them as
soon as I have the time.

## Contact

Let me know if you want to talk to me about this plugin. You can email
me siong(1900+87) (at) gmail (dot) com.

## LICENSE

(The MIT License)

Copyright (c) 2013 Teng Siong Ong

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[1]: http://branch.com/
[2]: http://www.cupidwithfriends.com/

