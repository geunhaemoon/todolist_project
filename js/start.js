document.addEventListener("DOMContentLoaded", () => {
    const subSideContainer = document.querySelector(".sub-side-container");
    const listBtn = document.querySelector(".list-btn");
    const startText02 = document.querySelector(".start-text02");
    const startContainer = document.querySelector(".start-container");
    const writeContainer = document.querySelector(".write-container");
    const sidebarContainer = document.querySelector(".sidebar-container");

    listBtn.addEventListener("click", () => {
        subSideContainer.classList.toggle("sub-menu-close");
    });

    startText02.addEventListener("click", () => {
        // "start-text02"를 클릭하면 write-container와 sidebar-container만 보이게 하고, start-container는 숨깁니다.
        startContainer.classList.add("invisible");
        writeContainer.classList.remove("invisible");
        sidebarContainer.classList.remove("invisible");
    });

    const homeBtn = document.querySelector(".home-btn");

    homeBtn.addEventListener("click", () => {
        // 홈 버튼을 누를 때 start-container만 보이게 하고, 나머지 컨테이너는 숨깁니다.
        startContainer.classList.remove("invisible");
        writeContainer.classList.add("invisible");
        sidebarContainer.classList.add("invisible");
    });
});

// 페이지 로드시 초기 상태를 설정합니다.
document.addEventListener("DOMContentLoaded", () => {
    const startContainer = document.querySelector(".start-container");
    const writeContainer = document.querySelector(".write-container");
    const sidebarContainer = document.querySelector(".sidebar-container");

    // 페이지 로드시 start-container만 보이고, 나머지 컨테이너는 숨깁니다.
    startContainer.classList.remove("invisible");
    writeContainer.classList.add("invisible");
    sidebarContainer.classList.add("invisible");
});
