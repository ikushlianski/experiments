Debugging web applications that listen to some port (like Express)

- launch node with a flag `node --inspect index.js`. It will start a node debugger that'll listen to port 9229
- choose `edit configurations` in webstorm and pick `Attack to Chrome/Node`. Do not change the default port which is also 9229
- set debugger breakpoints in the IDE
- start the webstorm debugger by clicking on the green bug icon
- send a request to Express and it will stop on your desired point (Webstorm's window will be focused if needed)
