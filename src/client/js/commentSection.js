const videoContainer = document.getElementById("videoContainer");
const form = document.getElementById("commentForm");
const delete_button = document.getElementById("delete__button");

const addComment = (text, id) => {
  const videoComments = document.querySelector(".video__comments ul");
  const newComment = document.createElement("li");
  newComment.dataset.id = id;
  newComment.className = "video__comment";
  const icon = document.createElement("i");
  icon.className = "fas fa-comment";
  const span = document.createElement("span");
  span.innerText = ` ${text}`;
  const button = document.createElement("button");
  button.style.border = 0;
  button.innerText = "❌";
  newComment.appendChild(icon);
  newComment.appendChild(span);
  newComment.appendChild(button);
  videoComments.prepend(newComment);
};

const handleSubmit = async (event) => {
  event.preventDefault();
  const textarea = form.querySelector("textarea");
  const text = textarea.value;
  const videoId = videoContainer.dataset.id;
  if (text === "") {
    return;
  }
  const response = await fetch(`/api/videos/${videoId}/comment`, {
    // const delete = await fetch(`/api/comments/${commentId}`)
    method: "POST", // method: "DELETE"
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });
  if (response.status === 201) {
    textarea.value = "";
    const { newCommentId } = await response.json();
    addComment(text, newCommentId);
  }
};

const deleteComment = async (event) => {
  event.preventDefault();
  const commentId = videoContainer.dataset.id;
  const deleteresponse = await fetch(`/api/comments/${commentId}`, {
    method: "DELETE",

    // method: "DELETE"
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ text }),
    // });
    // if (response.status === 201) {
    //   textarea.value = "";
    //   const { newCommentId } = await response.json();
    //   addComment(text, newCommentId);
    // }
  });
  console.log(deleteresponse);
};

if (form) {
  form.addEventListener("submit", handleSubmit);
}

if (delete_button) {
  delete_button.addEventListener("click", deleteComment);
}
// Router.delete("/dgeasdf",fdas)

// 프론트엔드 : 클릭에대한 이벤트리스너, delete request

// 백엔드 : url만들고 컨트롤러 만들어서 내가 댓글작성자인지 확인

// 댓글의 작성자에게만 보이게 하기 //
