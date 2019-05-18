
module.exports = `
<!DOCTYPE html>
<html>
    <head>
        <title><%= projectName %></title>
        <link rel="stylesheet" type="text/css" href="<%= cssPath %>" />
    </head>
    <body>
        <div id="root"></div>
    </body>
    <script src="/project/<%= jsPath %>"></script>
</html>
`