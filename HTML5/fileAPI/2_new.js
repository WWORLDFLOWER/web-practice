function doFirst(){
    // 先跟 HTML 產生關聯，再建事件聆聽功能
    document.getElementById('theFile').onchange = fileChange

} 
function fileChange(){
    let file = document.getElementById('theFile').files[0]
    // console.log(file)
    let message = ``
    message += `File name: ${file.name}\n`
    message += `File type:${file.type}\n`
    message += `File size:${file.size} byte\n`
    message += `Last modified:${file.lastModifiedDate}\n`

    // fileInfo.value = `File name: ${file.name}\nFile type:${file.type}\n`
    fileInfo.value = message
}

window.addEventListener('load', doFirst)