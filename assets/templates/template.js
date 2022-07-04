function createPage(projectName, projectAddress) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${projectName}</title>
    <!-- Generate with "Generate a redirector!" -->
    <style>
    body{
        text-align: center;
        font-family: Tahoma, Verdana, sans-serif;
    }
    </style>
</head>
<body>
    <p>如果未重新導向，請開啟 JavaScript 或直接存取以下連結。</p>
    <p>If it is not redirected, enable JavaScript or visit the following address.</p>
    <a href="${projectAddress}">${projectAddress}</a>
    <p><small>Generated with <a href="https://cytsai1008.github.io/generate-a-epf-redirector/">Generate a (EPF) redirector!</a>. <br \\>(C) 2021, pan93412 <br \\>(C) 2022, cytsai1008 Maintainced</small></p>

    <!-- compatible for every browsers, I thought. -->
    <script><!--
        window.location.href = \`${projectAddress}\`;
    --></script>
</body>
</html>`;
}
