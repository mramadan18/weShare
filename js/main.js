// SIDEBAR
const menuItems = document.querySelectorAll(".menu-item");

// MESSAGES
const messagesNotification = document.querySelector("#messages-notification");
const messages = document.querySelector(".messages");
const message = document.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");
const messageRequests = document.querySelector(".message-requests");
const category = document.querySelectorAll(".category h6");
const friendRequests = document.querySelector(".friend-requests");

// THEME
const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme");
const fontSizes = document.querySelectorAll(".choose-size span");
let root = document.querySelector(":root");
const colorPalette = document.querySelectorAll(".choose-color span");
const colorBgs = document.querySelectorAll(".choose-bg > div");

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
  messageSearch.focus();
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
      friendRequests.classList.add("active");
    } else {
      friendRequests.classList.remove("active");
    }
  });
});

// messageRequests.addEventListener("click", () => {
//   messageRequests.style.color = "var(--color-dark)";
//   friendRequests.classList.add("active");
// });

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

    root.style.setProperty(
      "--white-color-lightness",
      bg.getAttribute("data-white-bg")
    );
    root.style.setProperty(
      "--light-color-lightness",
      bg.getAttribute("data-light-bg")
    );
    root.style.setProperty(
      "--dark-color-lightness",
      bg.getAttribute("data-dark-bg")
    );
  });
});

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
