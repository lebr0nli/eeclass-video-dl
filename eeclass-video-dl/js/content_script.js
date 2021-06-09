var videoTag = document.querySelector("#fsPlayer > div.fs-videoWrap > video");
if (videoTag != null) {
    console.log("Video page detect");
    var videoLink = videoTag.src;
    console.log("Tag found: " + videoLink);
    var target = document.querySelector("#info-tabs-detail > div > div > dl");
    var description = document.createElement("dt");
    description.innerText = "Download Link";
    var downloadLink = document.createElement("a");
    downloadLink.href = videoLink;
    var filename = document.title.split("|")[0].replaceAll(/\.|\//g, "_").trim() + ".mp4";
    downloadLink.download = filename;
    downloadLink.innerText = filename;
    target.appendChild(description);
    target.appendChild(Object.assign(document.createElement('dd'), { innerHTML: downloadLink.outerHTML }));
} else if (document.querySelector("#fsPlayer") != null) {
    console.log("This may be a bug...\nPlease Contact author");
}