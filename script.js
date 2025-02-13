(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json";

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();

const messages = [
    "Em chắc chưa?",
    "Em thực sự chắc chứ??",
    "Em khum đồng ý được à?",
    "Đồng ý đi maàa...",
    "Em suy nghĩ lại đi!",
    "Em mà chọn Không, thì anh rất buồn đấy...",
    "Anh sẽ rất buồn đấy...",
    "Anh sẽ rất rất buồn đấyyyyyy...",
    "Ok fine, anh không hỏi em nữa...",
    "Anh đùa thui, làm ơn chọn Có đi mà, anh năn nỉ! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    document.getElementById('location-button-container').style.display = 'block';
    // Hide the original buttons if desired
    document.querySelector('.buttons').style.display = 'none';
}

function showLocation() {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
}

// Close modal when clicking on X
document.querySelector('.close').onclick = function() {
    document.getElementById('modal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
