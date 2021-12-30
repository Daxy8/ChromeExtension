# ChromeExtension
Chrome Extension that will remove div by id

I get: "Error handling response: TypeError: Cannot read properties of null (reading 'parentNode')". 
What I found out, that it has perhaps something to do with not loaded DOM. This however doesn't make sense, 
if I use "document.addEventListene ('DOMContentLoaded', function(event)".
