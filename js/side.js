document.addEventListener("DOMContentLoaded", () => {
    const writeBtn = document.querySelector(".write-btn");
    const notfinBtn = document.querySelector(".notfin-btn");
    const finBtn = document.querySelector(".fin-btn");
    const listBtn = document.querySelector(".list-btn"); // 추가된 부분
    const writeContainer = document.querySelector(".write-container");
    const incompleteContainer = document.querySelector(".incomplete-container");
    const completeContainer = document.querySelector(".complete-container");
    const sidebarContainer = document.querySelector(".sidebar-container");

    // "할 일 적기" 버튼 클릭 시
    writeBtn.addEventListener("click", () => {
        writeContainer.classList.remove("invisible");
        incompleteContainer.classList.add("invisible");
        completeContainer.classList.add("invisible");
        sidebarContainer.classList.remove("invisible");
    });

    // "아직" 버튼 클릭 시
    notfinBtn.addEventListener("click", () => {
        writeContainer.classList.add("invisible");
        incompleteContainer.classList.remove("invisible");
        completeContainer.classList.add("invisible");
        sidebarContainer.classList.remove("invisible");
    });

    // "끄읕" 버튼 클릭 시
    finBtn.addEventListener("click", () => {
        writeContainer.classList.add("invisible");
        incompleteContainer.classList.add("invisible");
        completeContainer.classList.remove("invisible");
        sidebarContainer.classList.remove("invisible");
    });

        // 홈 버튼 클릭 시
    const homeBtn = document.querySelector(".home-btn");
    homeBtn.addEventListener("click", () => {
        // 모든 컨테이너를 숨김
        const containers = document.querySelectorAll(".main-board-container > div");
        containers.forEach(container => {
            container.classList.add("invisible");
        });

        // 메인 화면 컨테이너만 보임
        const startContainer = document.querySelector(".start-container");
        startContainer.classList.remove("invisible");
    });


});
