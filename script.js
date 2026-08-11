document.addEventListener("DOMContentLoaded", () => {

  const card = document.getElementById("card");
  const revealTargets = card.querySelectorAll(
    ".profile-wrap, .name, .role, .tagline, .contact-pill, .about, .qr-wrap, .social-icon"
  );

  revealTargets.forEach((el, index) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(12px)";
    el.style.transition = "opacity 0.55s ease, transform 0.55s cubic-bezier(0.22,1,0.36,1)";
    setTimeout(() => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 350 + index * 70);
  });


  const qrImage = document.getElementById("qrImage");
  const qrShimmer = document.getElementById("qrShimmer");

  const finishQrLoad = () => {
    qrImage.classList.add("is-loaded");
    qrShimmer.classList.add("is-done");
  };

  if (qrImage.complete && qrImage.naturalWidth !== 0) {
    finishQrLoad();
  } else {
    qrImage.addEventListener("load", finishQrLoad);
    qrImage.addEventListener("error", finishQrLoad);
  }


  const profilePhoto = document.querySelector(".profile-photo");
  profilePhoto.addEventListener("click", () => {
    profilePhoto.classList.toggle("is-tapped");
  });


  const socialIcons = document.querySelectorAll(".social-icon");

  socialIcons.forEach((icon) => {
    icon.style.position = "relative";
    icon.style.overflow = "hidden";

    icon.addEventListener("click", () => {
      const burst = document.createElement("span");
      burst.style.position = "absolute";
      burst.style.inset = "0";
      burst.style.borderRadius = "50%";
      burst.style.background = "rgba(227, 189, 119, 0.55)";
      burst.style.transform = "scale(0)";
      burst.style.transition = "transform 0.5s ease, opacity 0.5s ease";
      burst.style.pointerEvents = "none";

      icon.appendChild(burst);

      requestAnimationFrame(() => {
        burst.style.transform = "scale(1.6)";
        burst.style.opacity = "0";
      });

      setTimeout(() => burst.remove(), 500);
    });
  });
});
