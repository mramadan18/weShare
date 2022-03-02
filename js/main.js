localStorage
  ? document
      .querySelector("body")
      .classList.add(`${localStorage.getItem("dark-mode")}`)
  : false;

// window.onload = function () {
//   document.querySelector(".loading").style.display = "none";
// };

setTimeout(() => {
  document.querySelector(".loading").style.display = "none";
}, 5000);

// SIDEBARx
const menuItems = document.querySelectorAll(".menu-item");

// MESSAGES
const messagesNotification = document.querySelector("#messages-notification");
const messages = document.querySelector(".messages");
const message = document.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");
const messageRequests = document.querySelector(".message-requests");
const category = document.querySelectorAll(".category h6");
const friendRequests = document.querySelector(".friend-requests");
const acceptBtns = document.querySelectorAll(".friend-requests .accept");
const declineBtns = document.querySelectorAll(".friend-requests .decline");

// THEME
const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme");
const fontSizes = document.querySelectorAll(".choose-size span");
let root = document.querySelector(":root");
const colorPalette = document.querySelectorAll(".choose-color span");
const colorBgs = document.querySelectorAll(".choose-bg > div");

// CREATE POST
const createPost = document.querySelector(".create-post input");
const createPostModal = document.querySelector(".create-posts");
const closeCreatePost = document.querySelector(".create-posts .head i");
const addFilesBtn = document.querySelector(".create-posts .add-files");
const inputFilePost = document.querySelector(
  ".create-posts input[type='file']"
);
const createPostBtn = document.querySelector(
  ".create-posts input[type='submit']"
);
const textarea = document.querySelector("textarea");
const fileTest = document.querySelector(".file-test");
// show icon for remove photo/video
const removeBtn = document.querySelector(".create-posts .file-test");

// global function for remove active class
const changeActiveItem = (items) => {
  items.forEach((item) => {
    item.classList.remove("active");
  });
};

// sidebar
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    changeActiveItem(menuItems);
    item.classList.add("active");
    if (item.id == "notifications") {
      document.querySelector(".notifications-popup").style.display = "block";
      document.querySelector(
        "#notifications .notifications-count"
      ).style.display = "none";
    } else {
      document.querySelector(".notifications-popup").style.display = "none";
    }

    if (item.id == "messages-notification") {
      document.querySelector(".right").classList.add("active");
    } else {
      document.querySelector(".right").classList.remove("active");
    }
  });
});

/**************************** MESSAGES ****************************/
// searchs chats
const searchMessage = () => {
  const val = messageSearch.value.toLowerCase();
  message.forEach((chat) => {
    let name = chat.querySelector("h5").textContent.toLowerCase();
    name.includes(val)
      ? (chat.style.display = "flex")
      : (chat.style.display = "none");
  });
};

// search chat
messageSearch.addEventListener("input", searchMessage);

// hightlight messages card when messages menu item is clicked
messagesNotification.addEventListener("click", () => {
  messages.style.boxShadow = "0 0 1rem var(--color-primary)";
  messagesNotification.querySelector(".notifications-count").style.display =
    "none";
  setTimeout(() => {
    messages.style.boxShadow = "none";
  }, 4000);
});

category.forEach((item) => {
  item.addEventListener("click", () => {
    changeActiveItem(category);
    item.classList.add("active");

    if (item.classList.contains("message-requests")) {
      item.style.color = "var(--color-dark)";
      document.querySelector(".friend-requests > div").style.boxShadow =
        "0 0 1rem var(--color-primary)";
      setTimeout(() => {
        document.querySelector(".friend-requests > div").style.boxShadow =
          "none";
      }, 4000);
      friendRequests.classList.add("active");
    } else {
      friendRequests.classList.remove("active");
    }
  });
});

// Remove request
const removeRequests = (target, parentTarget, message) => {
  target.classList.add("accept");
  target.querySelector(".text-muted").textContent = message;
  setTimeout(() => {
    document.querySelector(".message-requests span").textContent = `${
      parentTarget.length - 1
    }`;
    target.remove();
    parentTarget.length == "1" ? friendRequests.remove() : false;
  }, 500);
};

// Accept request
acceptBtns.forEach((acceptBtn) => {
  acceptBtn.addEventListener("click", () => {
    const request = acceptBtn.parentElement.parentElement;
    const requests = document.querySelectorAll(".friend-requests .request");
    removeRequests(request, requests, "Request Accepted");
    acceptBtn.parentElement.remove();
  });
});

// Decline request
declineBtns.forEach((declineBtn) => {
  declineBtn.addEventListener("click", () => {
    const request = declineBtn.parentElement.parentElement;
    const requests = document.querySelectorAll(".friend-requests .request");
    removeRequests(request, requests, "Request Deleted");
    declineBtn.parentElement.remove();
  });
});

// THEME/DISPLAY CUSTOMIZATION

// open modal
theme.addEventListener("click", () => {
  themeModal.style.display = "grid";
});

// close modal
const closeThemeModal = (e) => {
  if (e.target.classList.contains("customize-theme")) {
    themeModal.style.display = "none";
    document
      .querySelector(".sidebar .menu-item:first-child")
      .classList.add("active");
    document.querySelector("#theme").classList.remove("active");
  }
};

themeModal.addEventListener("click", closeThemeModal);

/**************************** FONT ****************************/
fontSizes.forEach((size) => {
  size.addEventListener("click", () => {
    changeActiveItem(fontSizes);
    size.classList.add("active");

    let fontSize = size.getAttribute("data-size");

    // change font size of the root html element
    document.querySelector("html").style.fontSize = `${fontSize}`;
  });
});

/**************************** COLOR ****************************/
colorPalette.forEach((color) => {
  color.addEventListener("click", () => {
    changeActiveItem(colorPalette);
    color.classList.add("active");

    let primaryHue = color.getAttribute("data-color");

    root.style.setProperty("--primary-color-hue", primaryHue);
  });
});

/**************************** BACKGROUND ****************************/
colorBgs.forEach((bg) => {
  bg.addEventListener("click", () => {
    changeActiveItem(colorBgs);

    bg.classList.add("active");

    if (bg.classList.contains("bg-2")) {
      document.querySelector("body").classList.add("dark-theme-variables");
      localStorage.setItem("dark-mode", "dark-theme-variables");
    } else {
      document.querySelector("body").className = "";
      localStorage ? localStorage.removeItem("dark-mode") : false;
    }
  });
});

/**************************** STORIES ****************************/

const Stories = [
  {
    current: 1,
    order: 3,
    position: 0,
    nameProfile: "Mike Tyson",
    imgProfile: "images/profile-19.jpg",
    storyContent: "images/profile-19.jpg",
  },
  {
    current: 2,
    order: 4,
    position: -100,
    nameProfile: "Ernest Achiever",
    imgProfile: "images/profile-21.jpg",
    storyContent: "images/profile-21.jpg",
  },
  {
    current: 3,
    order: 5,
    position: -200,
    nameProfile: "Jackson Henry",
    imgProfile: "images/profile-22.jpg",
    storyContent: "images/profile-22.jpg",
  },
  {
    current: 4,
    order: 6,
    position: -300,
    nameProfile: "Sebastian Aiden",
    imgProfile: "images/profile-23.jpg",
    storyContent: "images/profile-23.jpg",
  },
  {
    current: 5,
    order: 7,
    position: -400,
    nameProfile: "Matthew Samuel",
    imgProfile: "images/profile-24.jpg",
    storyContent: "images/profile-24.jpg",
  },
  {
    current: 6,
    order: 8,
    position: -500,
    nameProfile: "David Carter",
    imgProfile: "images/profile-25.jpg",
    storyContent: "images/profile-25.jpg",
  },
  {
    current: 7,
    order: 9,
    position: -600,
    nameProfile: "Owen Jack",
    imgProfile: "images/profile-26.jpg",
    storyContent: "images/profile-26.jpg",
  },
  {
    current: 8,
    order: 10,
    position: -700,
    nameProfile: "Jayden Dylan",
    imgProfile: "images/profile-27.jpg",
    storyContent: "images/profile-27.jpg",
  },
];

const createStoryElements = ({
  current,
  order,
  position,
  nameProfile,
  imgProfile,
  storyContent,
}) => {
  const storyDiv = document.createElement("div");
  storyDiv.className = "story";
  storyDiv.setAttribute("data-bg-story", storyContent);
  storyDiv.setAttribute("data-order", order);
  storyDiv.setAttribute("data-position", position);
  storyDiv.setAttribute("data-current", current);
  const story = `
    <div class="profile-photo">
      <img src="${imgProfile}" />
    </div>
    <p class="name">${nameProfile}</p>
  `;

  storyDiv.innerHTML = story;

  document.querySelector(".stories > div").appendChild(storyDiv);

  const storyShowDiv = document.createElement("div");
  storyShowDiv.className = "story";
  storyShowDiv.setAttribute("data-bg-story", storyContent);
  storyShowDiv.setAttribute("data-order", order);
  storyShowDiv.setAttribute("data-position", position);
  storyShowDiv.setAttribute("data-current", current);
  const storyShow = `
    <div class="head">
      <div class="time-story"></div>
    </div>
    <div class="info">
      <div class="img"><img src="${imgProfile}" /></div>
      <p class="name">${nameProfile}</p>
    </div>
    <img src="${storyContent}" />
  `;

  storyShowDiv.innerHTML = storyShow;

  document.querySelector(".show-stories .slider").appendChild(storyShowDiv);
};

Stories.forEach((story) => {
  createStoryElements(story);
});

// Var Stories
const prevBtn = document.querySelector(".slider .before");
const nextBtn = document.querySelector(".slider .after");
const slider = document.querySelector(".slider .stories");
const scrollStory = document.querySelector(".slider .stories > div");
const stories = document.querySelectorAll(".stories .story");

const handleStoriesInPage = (stories) => {
  stories.forEach((story) => {
    story.style.backgroundImage = `url(${story.getAttribute("data-bg-story")})`;
    story.style.order = `${story.getAttribute("data-order")}`;
    scrollStory.style.width = `${stories.length * 7.2972}rem`;

    story.addEventListener("click", (e) => {
      let target = e.target;

      document.querySelector(
        ".show-stories .slider"
      ).style.transform = `translateY(${target.getAttribute(
        "data-position"
      )}%)`;

      document
        .querySelector(
          `.show-stories .slider [data-position="${target.getAttribute(
            "data-position"
          )}"]`
        )
        .classList.add("active");

      document.querySelector(".show-stories").style.display = "flex";

      const showPrevStoy = document.querySelector(".show-stories .prev");
      const showNextStoy = document.querySelector(".show-stories .next");
      const sliderStory = document.querySelector(".show-stories .slider");
      const closeShowStory = document.querySelector(".show-stories .close");
      let currentSliider = parseInt(target.getAttribute("data-current"));
      let translate = parseInt(target.getAttribute("data-position"));
      let plus = 100;

      showPrevStoy.addEventListener("click", () => {
        if (currentSliider != 1) {
          currentSliider--;
          for (let i = 0; i < sliderStory.children.length; i++) {
            sliderStory.children[i].classList.remove("active");
          }
          translate += plus;
          sliderStory.style.transform = `translateY(${translate}%)`;
          sliderStory.children[currentSliider - 1].classList.add("active");
        }
      });

      showNextStoy.addEventListener("click", () => {
        if (currentSliider != sliderStory.children.length - 1) {
          currentSliider++;
          for (let i = 0; i < sliderStory.children.length; i++) {
            sliderStory.children[i].classList.remove("active");
          }
          translate -= plus;
          sliderStory.style.transform = `translateY(${translate}%)`;
          sliderStory.children[currentSliider - 1].classList.add("active");
        }
      });

      closeShowStory.addEventListener("click", () => {
        document.querySelector(".show-stories").style.display = "none";
      });
    });
  });
};

handleStoriesInPage(stories);

// Next stories
nextBtn.addEventListener("click", () => {
  slider.scrollBy({
    left: 116.8 * 4,
    behavior: "smooth",
  });
});

// Prev stories
prevBtn.addEventListener("click", () => {
  slider.scrollBy({
    left: -116.8 * 4,
    behavior: "smooth",
  });
});

/**************************** SHOW STORIES ****************************/

// Var Show Stories

/**************************** CREATE STORY ****************************/
const addStoryBtn = document.querySelector(".add-story");
const closeCreateStory = document.querySelector(".create-stories .head i");
const createStoryModal = document.querySelector(".create-stories");
const addFilesBtnToStory = document.querySelector(".create-stories .add-files");
const inputFileStory = document.querySelector(
  ".create-stories input[type='file']"
);
const fileTestStory = document.querySelector(".create-stories .file-test");
const removeBtnStory = document.querySelector(".create-stories .file-test");
const createStoryBtn = document.querySelector(
  ".create-stories input[type='submit']"
);

// Open modal create story
addStoryBtn.addEventListener("click", () => {
  createStoryModal.style.display = "grid";
});

// close modal
const closeCreateStoryModal = (e) => {
  if (e.target.classList.contains("create-stories")) {
    createStoryModal.style.display = "none";
  }
};

// close createPostModal
closeCreateStory.addEventListener("click", () => {
  createStoryModal.style.display = "none";
});

createStoryModal.addEventListener("click", closeCreateStoryModal);

// choose photo/video
addFilesBtnToStory.addEventListener("click", () => {
  inputFileStory.click();
});

// Add photo/video to story
inputFileStory.addEventListener("change", (e) => {
  let input = e.target;
  let reader = new FileReader();
  reader.onload = function () {
    let dataURL = reader.result;

    removeBtnStory.classList.add("active");

    removeBtnStory.addEventListener("click", () => {
      removeBtnStory.classList.remove("active");
      document.querySelector(".create-stories .add-files").style.display =
        "flex";
      fileTestStory.innerHTML = "";
    });

    document.querySelector(".create-stories .add-files").style.display = "none";

    if (dataURL.includes("image")) {
      createPhotoOrVideo("img", dataURL, fileTestStory);
    } else {
      createPhotoOrVideo("video", dataURL, fileTestStory);
    }
  };
  reader.readAsDataURL(input.files[0]);
});

const createMyStoryElements = () => {
  // Start story
  let story = document.createElement("div");
  story.className = "story";
  story.setAttribute("data-bg-story", fileTestStory.querySelector("img").src);
  story.style.order = "2";

  let profile = document.createElement("div");
  profile.className = "profile-photo";

  let photo = document.createElement("img");
  photo.src = "images/profile-1.jpg";

  profile.appendChild(photo);

  story.appendChild(profile);

  let pragraph = document.createElement("p");
  pragraph.className = "name";
  pragraph.textContent = "Your Story";

  story.appendChild(pragraph);

  document.querySelector(".stories > div").appendChild(story);
  // End story
};

createStoryBtn.addEventListener("click", (e) => {
  e.preventDefault();
  createMyStoryElements();

  const stories = document.querySelectorAll(".stories .story");

  handleStoriesInPage(stories);

  removeBtnStory.classList.remove("active");
  document.querySelector(".create-stories .add-files").style.display = "flex";
  fileTestStory.innerHTML = "";
  createStoryModal.style.display = "none";
  fileTestStory.classList.remove("active");
});

/**************************** CREATE POST ****************************/
// open modal
createPost.addEventListener("focus", () => {
  createPostModal.style.display = "grid";
});

// close modal
const closeCreatePostModal = (e) => {
  if (e.target.classList.contains("create-posts")) {
    createPostModal.style.display = "none";
  }
};

// close createPostModal
closeCreatePost.addEventListener("click", () => {
  createPostModal.style.display = "none";
});

createPostModal.addEventListener("click", closeCreatePostModal);

// choose photo/video
addFilesBtn.addEventListener("click", () => {
  inputFilePost.click();
});

const createPhotoOrVideo = (typeFile, src, parent) => {
  let file = document.createElement(`${typeFile}`);
  file.src = `${src}`;

  parent.appendChild(file);
};

// add photo/video
inputFilePost.addEventListener("change", (e) => {
  let input = e.target;
  let reader = new FileReader();
  reader.onload = function () {
    let dataURL = reader.result;

    removeBtn.classList.add("active");

    removeBtn.addEventListener("click", () => {
      removeBtn.classList.remove("active");
      fileTest.innerHTML = "";
    });

    if (dataURL.includes("image")) {
      createPhotoOrVideo("img", dataURL, fileTest);
    } else {
      createPhotoOrVideo("video", dataURL, fileTest);
    }
  };
  reader.readAsDataURL(input.files[0]);
});

const createPostElements = () => {
  // START FEED
  let feed = document.createElement("div");
  feed.className = "feed";

  // START HEAD
  let head = document.createElement("div");
  head.className = "head";

  // START USER
  let user = document.createElement("div");
  user.className = "user";

  let profilePhoto = document.createElement("div");
  profilePhoto.className = "profile-photo";

  let img = document.createElement("img");
  img.src = "images/profile-1.jpg";

  profilePhoto.appendChild(img);

  user.appendChild(profilePhoto);

  let ingo = document.createElement("div");
  ingo.className = "ingo";

  let profileName = document.createElement("h3");
  profileName.textContent = "Mahmoud Ramadan";

  ingo.appendChild(profileName);

  let profileAddress = document.createElement("small");
  profileAddress.textContent = "Cairo, NOW";

  ingo.appendChild(profileAddress);

  user.appendChild(ingo);

  head.appendChild(user);
  // END USER

  // START EDIT POST
  let editIcon = document.createElement("span");
  editIcon.className = "edit";

  let icon = document.createElement("i");
  icon.className = "uil uil-ellipsis-h";

  editIcon.appendChild(icon);

  let listEdit = document.createElement("div");
  listEdit.className = "list-edit";

  let items = ["Delete", "Go to Post", "Shere to..", "Copy Link", "Cancel"];

  items.forEach((item, index) => {
    let div = document.createElement("div");
    div.className = "item";
    index == 0
      ? div.classList.add("warning")
      : index == items.length - 1
      ? div.classList.add("cancel")
      : false;
    div.textContent = item;

    listEdit.appendChild(div);
  });

  head.appendChild(editIcon);

  head.appendChild(listEdit);
  // END EDIT POST

  feed.appendChild(head);
  // END HEAD

  // STRAT MAIN PHOTO
  let mainPhoto = document.createElement("div");
  mainPhoto.className = "photo";

  let overlay = document.createElement("div");
  overlay.className = "overlay";

  let heartIcon = document.createElement("i");
  heartIcon.className = "icon-heart";

  overlay.appendChild(heartIcon);

  mainPhoto.appendChild(overlay);

  let photo = document.createElement(`${fileTest.firstElementChild.tagName}`);
  photo.src = fileTest.querySelector(
    `${fileTest.firstElementChild.tagName}`
  ).src;
  fileTest.firstElementChild.tagName == "VIDEO"
    ? photo.setAttribute("controls", "")
    : false;

  mainPhoto.appendChild(photo);

  feed.appendChild(mainPhoto);
  // END MAIN PHOTO

  // START ACTION BUTTONS
  let actionButtons = document.createElement("div");
  actionButtons.className = "action-buttons";

  let interActionButtons = document.createElement("div");
  interActionButtons.className = "interaction-buttons";

  let span1 = document.createElement("span");

  let heart = document.createElement("i");
  heart.className = "uil uil-heart";

  span1.appendChild(heart);

  let span2 = document.createElement("span");

  let comment = document.createElement("i");
  comment.className = "uil uil-comment";

  span2.appendChild(comment);

  let span3 = document.createElement("span");

  let share = document.createElement("i");
  share.className = "uil uil-share";

  span3.appendChild(share);

  interActionButtons.appendChild(span1);
  interActionButtons.appendChild(span2);
  interActionButtons.appendChild(span3);

  actionButtons.appendChild(interActionButtons);

  // START BOOKMARK
  let bookmarkDiv = document.createElement("div");
  bookmarkDiv.className = "bookmark";

  let span4 = document.createElement("span");

  let bookmarkIcon = document.createElement("i");
  bookmarkIcon.className = "uil uil-bookmark";

  span4.appendChild(bookmarkIcon);

  bookmarkDiv.appendChild(span4);

  actionButtons.appendChild(bookmarkDiv);
  // END BOOKMARK

  feed.appendChild(actionButtons);
  // END ACTION BUTTONS

  // START LIKED BY
  let likedBy = document.createElement("div");
  likedBy.className = "liked-by";

  let span5 = document.createElement("span");

  let likeImg1 = document.createElement("img");
  likeImg1.src = "images/profile-1.jpg";

  span5.appendChild(likeImg1);

  let span6 = document.createElement("span");

  let likeImg2 = document.createElement("img");
  likeImg2.src = "images/profile-1.jpg";

  span6.appendChild(likeImg2);

  let span7 = document.createElement("span");

  let likeImg3 = document.createElement("img");
  likeImg3.src = "images/profile-1.jpg";

  span7.appendChild(likeImg3);

  likedBy.appendChild(span5);
  likedBy.appendChild(span6);
  likedBy.appendChild(span7);

  let likeP = document.createElement("p");
  likeP.innerHTML = `Liked by <b>Ernest Achiever</b> and <b>2,323 others</b>`;

  likedBy.appendChild(likeP);

  feed.appendChild(likedBy);
  // END LIKED BY

  // START CAPTION
  let caption = document.createElement("div");
  caption.className = "caption";

  let pragraph = document.createElement("p");
  pragraph.innerHTML = `
    <b>Mahmoud Ramadan</b> ${textarea.value}
  `;

  caption.appendChild(pragraph);

  feed.appendChild(caption);
  // END CAPTION

  // START COMMENTS
  let allCommentsLink = document.createElement("div");
  allCommentsLink.className = "text-muted";

  allCommentsLink.textContent = "View all 277 comments";

  feed.appendChild(allCommentsLink);

  let commentsBox = document.createElement("div");
  commentsBox.className = "comments";

  feed.appendChild(commentsBox);

  let addCommentsBox = document.createElement("div");
  addCommentsBox.className = "add-comment";

  let inputComment = document.createElement("input");
  inputComment.className = "input";
  inputComment.type = "text";
  inputComment.placeholder = "Add a comment...";

  addCommentsBox.appendChild(inputComment);

  let addCommentBtn = document.createElement("i");
  addCommentBtn.className = "post uil uil-message";

  addCommentsBox.appendChild(addCommentBtn);

  feed.appendChild(addCommentsBox);
  // END COMMENTS

  document.querySelector(".feeds").prepend(feed);
  // END FEED
};

const createCommentElement = (where, comment) => {
  let commentBox = document.createElement("div");
  commentBox.className = "comment";

  let commentText = document.createElement("p");
  commentText.innerHTML = `<b>Mahmoud Ramadan</b> ${comment}`;

  commentBox.appendChild(commentText);

  where.append(commentBox);
};

createPostBtn.addEventListener("click", (e) => {
  e.preventDefault();

  createPostElements();

  createPostModal.style.display = "none";
  textarea.value = "";
  fileTest.innerHTML = "";
  fileTest.classList.remove("active");
  fixPageAfterCreatePosts();
});

function fixPageAfterCreatePosts() {
  const feeds = document.querySelectorAll(".feeds .feed");

  feeds.forEach((feed) => {
    const loveBtn = feed.querySelector(".interaction-buttons span:first-child");
    loveBtn.addEventListener("click", () => {
      if (loveBtn.querySelector("i").classList.contains("uil-heart")) {
        loveBtn.querySelector("i").className = "";
        loveBtn.querySelector("i").className = "icon-heart";
      } else {
        loveBtn.querySelector("i").className = "";
        loveBtn.querySelector("i").className = "uil uil-heart";
      }
    });
  });

  const posts = document.querySelectorAll(".feeds .feed .photo");

  posts.forEach((post) => {
    post.addEventListener("dblclick", () => {
      post.querySelector(".overlay i").style.display = "block";
      post.querySelector(".overlay i").classList.add("animate__heartBeat");

      setTimeout(() => {
        post.querySelector(".overlay i").style.display = "none";
      }, 1300);

      post.parentElement.querySelector(
        ".interaction-buttons span:first-child i"
      ).className = "icon-heart";
    });
  });

  const editPostBtn = document.querySelectorAll(".feed .head .edit");

  editPostBtn.forEach((editBtn) => {
    editBtn.addEventListener("click", () => {
      editBtn.parentElement.querySelector(".list-edit").style.display = "block";
    });

    editBtn.parentElement
      .querySelector(".list-edit .cancel")
      .addEventListener("click", () => {
        editBtn.parentElement.querySelector(".list-edit").style.display =
          "none";
      });
  });

  const videos = document.querySelectorAll("video");

  window.addEventListener("scroll", () => {
    videos.forEach((video) => {
      let videoPosition = video.getBoundingClientRect().top;
      let screenPosition = window.innerHeight;

      if (screenPosition > videoPosition + 350 && videoPosition > 0) {
        video.play();
      } else {
        video.pause();
      }
    });
  });

  const addCommentBtn = document.querySelectorAll(".feed .add-comment .post");

  addCommentBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      let commentText = btn.parentElement.querySelector(".input").value;
      if (commentText != "") {
        createCommentElement(
          btn.parentElement.parentElement.querySelector(".comments"),
          commentText
        );
      }

      btn.parentElement.querySelector("input").value = "";
      btn.parentElement.querySelector(".emojionearea-editor").innerHTML = "";
    });
  });

  $(document).ready(function () {
    $(
      ".feed .add-comment input.input, .create-posts textarea.input"
    ).emojioneArea({
      pickerPosition: "left-top ",
      search: false,
      recentEmojis: false,
      tones: false,
    });
  });
}

fixPageAfterCreatePosts();

// editPostBtn.addEventListener("click", () => {
//   listEditPost.style.display = "block";
// });

// videos.forEach((video) => {
//   console.log(`${video.getBoundingClientRect().top} => ${window.innerHeight}`);
// });

// END
// 179
// 210

// const openThemeModal = () => {
//   themeModal.style.display = "grid";
// };

// Bg1.addEventListener("click", () => {
//   // add active class
//   Bg1.classList.add("active");
//   // remove active class from the others
//   Bg2.classList.remove("active");
//   Bg3.classList.remove("active");
//   changeBG();
//   window.location.reload();
// });

// Bg2.addEventListener("click", () => {
//   darkColorLightness = "95%";
//   whiteColorLightness = "20%";
//   lightColorLightness = "15%";

//   // add active class
//   Bg2.classList.add("active");
//   // remove active class from the others
//   Bg1.classList.remove("active");
//   Bg3.classList.remove("active");
//   changeBG();
// });

// Bg3.addEventListener("click", () => {
//   darkColorLightness = "95%";
//   whiteColorLightness = "10%";
//   lightColorLightness = "0%";

//   // add active class
//   Bg3.classList.add("active");
//   // remove active class from the others
//   Bg1.classList.remove("active");
//   Bg2.classList.remove("active");
//   changeBG();
// });

// remove active class from colors
// const changeActiveColorClass = () => {
//   colorPalette.forEach((colorPicker) => {
//     colorPicker.classList.remove("active");
//   });
// };

// // remove active class from spans or font size selectors
// const removeSizeSelector = () => {
//   fontSizes.forEach((size) => {
//     size.classList.remove("active");
//   });
// };

// const Bg1 = document.querySelector(".bg-1");
// const Bg2 = document.querySelector(".bg-2");
// const Bg3 = document.querySelector(".bg-3");

// if (size.classList.contains("font-size-1")) {
//   fontSize = "10px";
//   root.style.setProperty("--sticky-top-left", "5.4rem");
//   root.style.setProperty("--sticky-top-right", "5.4rem");
// } else if (size.classList.contains("font-size-2")) {
//   fontSize = "13px";
//   root.style.setProperty("--sticky-top-left", "5.4rem");
//   root.style.setProperty("--sticky-top-right", "-7rem");
// } else if (size.classList.contains("font-size-3")) {
//   fontSize = "16px";
//   root.style.setProperty("--sticky-top-left", "-2rem");
//   root.style.setProperty("--sticky-top-right", "-17rem");
// } else if (size.classList.contains("font-size-4")) {
//   fontSize = "19px";
//   root.style.setProperty("--sticky-top-left", "-5rem");
//   root.style.setProperty("--sticky-top-right", "-25rem");
// } else if (size.classList.contains("font-size-5")) {
//   fontSize = "22px";
//   root.style.setProperty("--sticky-top-left", "-12rem");
//   root.style.setProperty("--sticky-top-right", "-35rem");
// }

// if (color.classList.contains("color-1")) {
//   primaryHue = 252;
// } else if (color.classList.contains("color-2")) {
//   primaryHue = 52;
// } else if (color.classList.contains("color-3")) {
//   primaryHue = 352;
// } else if (color.classList.contains("color-4")) {
//   primaryHue = 152;
// } else if (color.classList.contains("color-5")) {
//   primaryHue = 202;
// }

// // theme BACKGROUND values
// let lightColorLightness;
// let whiteColorLightness;
// let darkColorLightness;

// // changes background color
// const changeBG = () => {
//   root.style.setProperty("--light-color-lightness", lightColorLightness);
//   root.style.setProperty("--white-color-lightness", whiteColorLightness);
//   root.style.setProperty("--dark-color-lightness", darkColorLightness);
// };

// if (bg.classList.contains("bg-1")) {
//   changeBG();
//   window.location.reload();
// } else if (bg.classList.contains("bg-2")) {
//   darkColorLightness = "95%";
//   whiteColorLightness = "20%";
//   lightColorLightness = "15%";
//   changeBG();
// } else if (bg.classList.contains("bg-3")) {
//   darkColorLightness = "95%";
//   whiteColorLightness = "10%";
//   lightColorLightness = "0%";
//   changeBG();
// }
