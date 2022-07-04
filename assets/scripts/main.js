function createBlob(dataString, contentType) {
    const blob = new Blob([dataString], {
        type: contentType,
    });

    return blob;
}

function redirectToObjectURL(objectUrl, description) {
    const aElement = document.createElement("a");
    aElement.style = "display: none";
    aElement.href = objectUrl;
    aElement.download = description;

    document.body.appendChild(aElement);
    aElement.click();
    document.body.removeChild(aElement);
}

function processor(buttonElement, nameElement, addrElement) {
    // extract the value
    const name = nameElement.value;
    const addr = addrElement.value;

    // lock the button to prevent duplicated actions
    buttonElement.disabled = true;
    const RegPat = /https?:\/\/(?:www\.|(?!www))[a-zA-Z\d][a-zA-Z\d-]+[a-zA-Z\d]\.\S{2,}|www\.[a-zA-Z\d][a-zA-Z\d-]+[a-zA-Z\d]\.\S{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z\d]+\.\S{2,}|www\.[a-zA-Z\d]+\.\S{2,}|[a-zA-Z\d][a-zA-Z\d-]+[a-zA-Z\d]\.\S{2,}/gi
    if (!RegPat.test(document.getElementById("project-addr").value)) {
        window.alert("非許可連結 | INVAILDED LINK")
        buttonElement.disabled = false;
    }
    else {

        // create a blob
        const blob = createBlob(createPage(name, addr), "text/html");
        // and redirect users to the blob
        /// create the link
        const link = URL.createObjectURL(blob);
        /// redirect, and
        redirectToObjectURL(link, name);
        /// revoke the object url to release the memory
        URL.revokeObjectURL(link);

        // release the button
        buttonElement.disabled = false;
    }
}

function processorWrapper(buttonElement, nameElement, addrElement) {
    return () => processor(buttonElement, nameElement, addrElement);
}

function main() {
    const projectName = document.getElementById("project-name");
    const projectAddr = document.getElementById("project-addr");
    const downloadBtn = document.getElementById("download-code");

    downloadBtn.addEventListener("click", processorWrapper(downloadBtn, projectName, projectAddr));
    projectAddr.addEventListener("keypress", function(event) {
        // If the user presses the "Enter" key on the keyboard
        if (event.key === "Enter") {
          // Cancel the default action, if needed
          event.preventDefault();
          // Trigger the button element with a click
          document.getElementById("download-code").click();
        }
      });
}

main()
