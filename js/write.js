// 삭제 버튼 클릭 이벤트 처리
document.addEventListener("click", (event) => {
    const target = event.target;

    if (target.classList.contains("delete-btn")) {
        // 삭제 버튼이 클릭된 경우

        // 삭제할 목록 아이템(li) 요소를 찾음
        const listItem = target.closest(".list-item");

        if (listItem) {
            // 목록 아이템이 찾아진 경우

            // 해당 아이템(li)을 목록에서 삭제
            listItem.remove();
        }
    }
});

// "아직" 버튼 클릭 시
document.addEventListener("click", function (event) {
    if (event.target && event.target.classList.contains("uncomplete-btn")) {
        const listItem = event.target.closest(".list-item");
        if (listItem) {
            const notfinList = document.querySelector(".notfin-list");
            // 아이템을 복사하여 새로운 위치에 추가
            const clonedItem = listItem.cloneNode(true);
            notfinList.appendChild(clonedItem);
        }
    }
});

// "끄읕" 버튼 클릭 시
document.addEventListener("click", function (event) {
    if (event.target && event.target.classList.contains("complete-btn")) {
        const listItem = event.target.closest(".list-item");
        if (listItem) {
            const finList = document.querySelector(".fin-list");
            // 아이템을 복사하여 새로운 위치에 추가
            const clonedItem = listItem.cloneNode(true);
            finList.appendChild(clonedItem);
        }
    }
});


// 모달 창 열기 트리거를 클릭할 때
document.addEventListener("click", function (event) {
    if (event.target && event.target.classList.contains("change-btn")) {
        const listItem = event.target.closest(".list-item");
        if (listItem) {
            const modal = document.getElementById("myModal");
            const editText = document.getElementById("editText");

            // 모달 창 열기
            modal.classList.remove("invisible");

            // 수정할 텍스트를 모달 창에 채우기
            editText.value = listItem.querySelector(".todolist-text").textContent;

            // 모달 창 저장 버튼 클릭 시
            const saveButton = document.getElementById("saveBtn");
            saveButton.addEventListener("click", () => {
                // 모달 창에서 수정된 텍스트 가져오기
                const updatedText = editText.value;

                // 리스트 아이템에 수정된 내용 반영
                listItem.querySelector(".todolist-text").textContent = updatedText;

                // 모달 창 닫기
                modal.classList.add("invisible");
            });

            // 모달 창 닫기 버튼 클릭 시
            const closeButton = document.querySelector(".close");
            closeButton.addEventListener("click", () => {
                // 모달 창 닫기
                modal.classList.add("invisible");
            });
        }
    }
});


// 사용자가 할 일을 추가할 때 호출되는 함수
function addTask() {
    // 입력한 내용과 선택한 날짜 가져오기
    var text = document.getElementById('content-input').value;
    var selectedDate = document.getElementById('date-input').value;

    // 선택한 날짜가 비어있는지 확인
    if (selectedDate === '') {
        // 선택한 날짜가 비어있는 경우 오늘 날짜로 설정
        var today = new Date();
        var year = today.getFullYear().toString().slice(-2);
        var month = String(today.getMonth() + 1).padStart(2, '0');
        var day = String(today.getDate()).padStart(2, '0');
        var formattedDate = year + '/' + month + '/' + day;
        selectedDate = formattedDate;
    }

    // 할 일 목록에 추가할 리스트 아이템 생성
    var todolist = document.getElementById('todolist');
    var listItem = document.createElement('li');

    var itemHTML = `
        <li class="list-item">
            <div class="list-item-left">
                <div class="todolist-date">${selectedDate}</div>
                <pre class="todolist-text">${text}</pre>
            </div>
            <div class="list-item-center">
                <div class="list-item-center-btn">
                    <button class="list-item-btn uncomplete-btn">아직</button>
                    <button class="list-item-btn complete-btn">끄읕</button>
                    <button class="list-item-btn change-btn">수정</button>
                    <button class="list-item-btn delete-btn">삭제</button>
                </div>
            </div>
        </li>
    `;

    // 생성한 HTML을 리스트 아이템에 추가
    listItem.innerHTML = itemHTML;

    // 리스트에 새로운 아이템 추가
    todolist.appendChild(listItem);

    // 입력 칸 비우기
    document.getElementById('content-input').value = '';
}
