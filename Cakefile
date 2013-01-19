#
# Inspired by Peepcode screencast 'Meet Coffescript'
# http://peepcode.com/products/coffeescript
#
{spawn, exec} = require 'child_process'

task 'watch', 'Watch source files and build JS', (options) ->
  exec 'coffee --watch --compile --output js/ src/ ', (err, stdout, stderr) ->
    throw err if err
    console.log stdout + stderr