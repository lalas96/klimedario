const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

btn.addEventListener("click", navToggle);

function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
}

document.querySelectorAll("#menu a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.add("hidden");
    menu.classList.remove("flex");
    btn.classList.remove("open");
  });
});

function openTab(evt, tabName, group) {
  document
    .querySelectorAll(`.tabcontent[data-tab-group="${group}"]`)
    .forEach(tc => tc.classList.add("hidden"));

  document
    .querySelectorAll(`[data-tab-group="${group}"] .btn-tab`)
    .forEach(btn => btn.classList.remove("active"));

  document.getElementById(tabName).classList.remove("hidden");
  evt.currentTarget.classList.add("active");
}

window.addEventListener("load", () => {
  const defaultBtn1 = document.getElementById("defaultOpen1");
  if (defaultBtn1) openTab({ currentTarget: defaultBtn1 }, "Tab1", "tabs1");

  
  const defaultBtn2 = document.getElementById("defaultOpen2");
  if (defaultBtn2) openTab({ currentTarget: defaultBtn2 }, "TabA", "tabs2");
});

document.querySelectorAll(".faq-item").forEach(item => {
  const header = item.querySelector(".faq-btn");
  const content = item.querySelector(".faq-content");
  const icon = item.querySelector(".faq-icon");

  header.addEventListener("click", () => {
    const isOpen = content.style.maxHeight && content.style.maxHeight !== "0px";

    // close all
    document.querySelectorAll(".faq-content").forEach(c => {
      c.style.maxHeight = "0px";
    });

    document.querySelectorAll(".faq-icon").forEach(i => {
      i.style.transform = "rotate(0deg)";
    });

    // open current
    if (!isOpen) {
      content.style.maxHeight = content.scrollHeight + "px";
      icon.style.transform = "rotate(180deg)";
    }
  });
});
