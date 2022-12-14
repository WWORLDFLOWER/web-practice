function doFirst(){
    // 先跟 HTML 產生關聯，再建事件聆聽功能
    document.getElementById('theFile').onchange = fileChange

} 
function fileChange(){
    let file = document.getElementById('theFile').files[0]

    let message = ``
    message += `File name: ${file.name}\n`
    message += `File type:${file.type}\n`
    message += `File size:${file.size} byte\n`
    message += `Last modified:${file.lastModifiedDate}\n`
    
    fileInfo.value = message


    // ==============
    let readFile = new FileReader()
    readFile.readAsDataURL(file)
    readFile.addEventListener('load',function(){
        // document.getElementById('image').src = readFile.result
        let image = document.getElementById('image')
        image.src = readFile.result
        image.style.maxWidth = '500px'
        image.style.maxHeight = '500px'
    })
}

window.addEventListener('load', doFirst)