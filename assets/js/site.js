/* =========================================================
   BRYTLY CLEANING SERVICES
   Central Business Settings
   ========================================================= */

const COMPANY = {
  name: "BRYTLY CLEANING SERVICES",
  shortName: "BRYTLY",

  phone: "+2347072074599",
  displayPhone: "+234 707 207 4599",

  address: "13 Shangatedo, Lagos, Nigeria",

  whatsappMessage:
    "Hello BRYTLY CLEANING SERVICES, I would like to book a cleaning service. Please send me your available dates, prices and booking details.",

  googleReviewsUrl:
    "https://www.google.com/maps/search/?api=1&query=BRYTLY%20CLEANING%20SERVICES%2C%2013%20Shangatedo%2C%20Lagos%2C%20Nigeria"
};


/* =========================================================
   SOCIAL MEDIA LINKS
   Replace the # with BRYTLY's real social media links
   ========================================================= */

const SOCIALS = {
  facebook: "#",
  instagram: "#",
  tiktok: "#",
  youtube: "#",
  whatsapp: "#"
};


/* =========================================================
   WHATSAPP + PHONE
   ========================================================= */

const digits = COMPANY.phone.replace(/\D/g, "");

const waUrl =
  `https://wa.me/${digits}?text=${encodeURIComponent(
    COMPANY.whatsappMessage
  )}`;

const callUrl = `tel:${digits}`;


/* =========================================================
   HEADER
   ========================================================= */

function headerHTML() {

  return `

    <div class="brand-strip">
      <span>BRYTLY</span> — Bringing the Bright Back.
    </div>

    <header class="site-header">

      <div class="header-inner">

        <!-- LEFT: ADDRESS -->

        <div class="header-side left">

          <i class="fa-solid fa-location-dot header-icon"></i>

          <div class="address">

            <b>Our Address</b>

            <span>
              ${COMPANY.address}
            </span>

          </div>

        </div>


        <!-- CENTER LOGO -->

        <a class="logo" href="index.html">

          <img
            src="assets/brand_logo_secondary.svg"
            alt="BRYTLY Cleaning Services logo"
          >

          <span>
            BRYTLY
            <small>CLEANING SERVICES</small>
          </span>

        </a>


        <!-- RIGHT: PHONE -->

        <div class="header-side right">

          <div class="address">

            <b>
              <i class="fa-solid fa-phone"></i>
              Call us
            </b>

            <a
              class="phone"
              data-phone
              href="${callUrl}"
            >
              ${COMPANY.displayPhone}
            </a>

          </div>


          <a
            class="btn btn-primary"
            data-phone
            href="${callUrl}"
          >

            <i class="fa-solid fa-phone"></i>

            Call Us Now

          </a>

        </div>

      </div>


      <!-- NAVIGATION -->

      <nav class="nav">

        <a href="index.html">
          Home
        </a>

        <a href="services.html">
          Services &amp; Prices
        </a>

        <a href="about.html">
          About Us
        </a>

        <a href="blog.html">
          Our Work / Blog
        </a>

        <a href="contact.html">
          Contact
        </a>

      </nav>

    </header>

  `;
}


/* =========================================================
   FOOTER
   ========================================================= */

function footerHTML() {

  return `

    <footer class="site-footer">

      <div class="footer-grid">


        <!-- COMPANY -->

        <div class="footer-column">

          <h3>
            ${COMPANY.name}
          </h3>

          <p>
            You relax. We bring the bright back.
          </p>

          <p>
            Fresh spaces. Brighter days.
          </p>

          <a
            class="footer-whatsapp"
            data-whatsapp
            href="${waUrl}"
          >

            <i class="fa-brands fa-whatsapp"></i>

            WhatsApp us

          </a>

        </div>


        <!-- SERVICES -->

        <div class="footer-column">

          <h3>
            Services
          </h3>

          <p>
            <a href="services.html">
              Deep Cleaning
            </a>
          </p>

          <p>
            <a href="services.html">
              Home Cleaning
            </a>
          </p>

          <p>
            <a href="services.html">
              Office Cleaning
            </a>
          </p>

          <p>
            <a href="services.html">
              Move-in / Move-out
            </a>
          </p>

        </div>


        <!-- CONTACT -->

        <div class="footer-column">

          <h3>
            Contact
          </h3>

          <p>

            <i class="fa-solid fa-location-dot"></i>

            ${COMPANY.address}

          </p>

          <p>

            <i class="fa-solid fa-phone"></i>

            <a
              data-phone
              href="${callUrl}"
            >
              ${COMPANY.displayPhone}
            </a>

          </p>

          <p>

            <a href="contact.html">
              Contact us
            </a>

          </p>

        </div>


        <!-- REVIEWS + WORK -->

        <div class="footer-column">

          <h3>
            Reviews &amp; Work
          </h3>

          <p>

            <a
              href="${COMPANY.googleReviewsUrl}"
              target="_blank"
              rel="noopener"
            >

              <i class="fa-solid fa-star"></i>

              Google Reviews

            </a>

          </p>

          <p>

            <a href="blog.html">

              <i class="fa-regular fa-file-lines"></i>

              Cleaning videos

            </a>

          </p>

        </div>

      </div>


      <!-- =================================================
           SOCIAL MEDIA
           ================================================= -->

      <div class="footer-social">

        <h3>
          Follow BRYTLY
        </h3>

        <div class="social-icons">


          <a
            href="${SOCIALS.facebook}"
            target="_blank"
            rel="noopener"
            aria-label="BRYTLY on Facebook"
            class="social-icon facebook"
          >

            <i class="fa-brands fa-facebook-f"></i>

          </a>


          <a
            href="${SOCIALS.instagram}"
            target="_blank"
            rel="noopener"
            aria-label="BRYTLY on Instagram"
            class="social-icon instagram"
          >

            <i class="fa-brands fa-instagram"></i>

          </a>


          <a
            href="${SOCIALS.tiktok}"
            target="_blank"
            rel="noopener"
            aria-label="BRYTLY on TikTok"
            class="social-icon tiktok"
          >

            <i class="fa-brands fa-tiktok"></i>

          </a>


          <a
            href="${SOCIALS.youtube}"
            target="_blank"
            rel="noopener"
            aria-label="BRYTLY on YouTube"
            class="social-icon youtube"
          >

            <i class="fa-brands fa-youtube"></i>

          </a>


          <a
            href="${SOCIALS.whatsapp}"
            target="_blank"
            rel="noopener"
            aria-label="BRYTLY on WhatsApp"
            class="social-icon whatsapp"
          >

            <i class="fa-brands fa-whatsapp"></i>

          </a>

        </div>

      </div>


      <!-- COPYRIGHT -->

      <div class="copyright">

        © ${new Date().getFullYear()}
        ${COMPANY.name}.
        All rights reserved.

      </div>

    </footer>


    <!-- =================================================
         TRANSLATOR
         ================================================= -->

    <div class="translate-bar">

      <i class="fa-solid fa-globe"></i>

      <select
        id="languageSelect"
        aria-label="Choose language"
      >

        <option value="">
          Translate
        </option>

        <option value="en">
          English
        </option>

        <option value="fr">
          Français
        </option>

        <option value="es">
          Español
        </option>

        <option value="pt">
          Português
        </option>

        <option value="de">
          Deutsch
        </option>

        <option value="it">
          Italiano
        </option>

        <option value="ar">
          العربية
        </option>

        <option value="sw">
          Kiswahili
        </option>

        <option value="yo">
          Yorùbá
        </option>

        <option value="zh-CN">
          中文
        </option>

        <option value="ja">
          日本語
        </option>

        <option value="ko">
          한국어
        </option>

        <option value="hi">
          हिन्दी
        </option>

      </select>


      <button
        id="autoTranslateBtn"
        class="btn btn-outline"
        type="button"
      >
        Auto
      </button>

    </div>


    <div
      id="google_translate_element"
      style="display:none"
    ></div>


    <!-- =================================================
         FIXED WHATSAPP BOOKING BUTTON
         ================================================= -->

    <div class="bottom-book">

      <a
        class="btn btn-primary"
        data-whatsapp
        href="${waUrl}"
      >

        <i class="fa-brands fa-whatsapp"></i>

        Book Your Deep Cleaning Today

      </a>

    </div>


    <!-- =================================================
         SMARTSUUP SUPPORT CHAT
         =================================================

         IMPORTANT:
         SmartSuup is ONLY customer support chat.

         It is NOT a payment button.

         Paste the official SmartSuup chat/widget code
         supplied by the client/account below.
         ================================================= -->

    <div id="smartsuup-chat"></div>

  `;
}


/* =========================================================
   APPLY BUSINESS LINKS
   ========================================================= */

function applyLinks() {

  document
    .querySelectorAll("[data-whatsapp]")
    .forEach((a) => {

      a.href = waUrl;

    });


  document
    .querySelectorAll("[data-phone]")
    .forEach((a) => {

      a.href = callUrl;

    });


  document
    .querySelectorAll("[data-google-reviews]")
    .forEach((a) => {

      a.href = COMPANY.googleReviewsUrl;

    });

}


/* =========================================================
   GOOGLE TRANSLATE
   ========================================================= */

function loadGoogleTranslate() {

  if (
    document.getElementById(
      "google-translate-script"
    )
  ) {

    return;

  }


  const script =
    document.createElement("script");

  script.id =
    "google-translate-script";

  script.src =
    "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";

  script.async = true;

  document.body.appendChild(script);

}


window.googleTranslateElementInit =
  function () {

    new google.translate.TranslateElement(

      {
        pageLanguage: "en",
        autoDisplay: false,

        includedLanguages:
          "en,fr,es,pt,de,it,ar,sw,yo,zh-CN,ja,ko,hi"

      },

      "google_translate_element"

    );

  };


/* =========================================================
   VIDEO CAROUSEL
   ========================================================= */

function initCarousel() {

  const track =
    document.querySelector(".media-track");

  const next =
    document.getElementById("mediaNext");

  const prev =
    document.getElementById("mediaPrev");


  if (!track || !next || !prev) {

    return;

  }


  let index = 0;

  let startX = 0;

  let dragging = false;


  function perView() {

    if (window.innerWidth <= 850) {

      return 1;

    }

    if (window.innerWidth <= 1050) {

      return 2;

    }

    return 3;

  }


  function update() {

    const cards =
      [...track.querySelectorAll(".video-card")];

    if (!cards.length) {

      return;

    }


    const visible =
      perView();


    const maxIndex =
      Math.max(
        0,
        cards.length - visible
      );


    index =
      Math.min(
        index,
        maxIndex
      );


    const gap = 20;


    const step =
      cards[0].getBoundingClientRect().width
      + gap;


    track.style.transform =
      `translate3d(-${index * step}px,0,0)`;

  }


  next.addEventListener(
    "click",
    () => {

      const maxIndex =
        Math.max(
          0,
          track.children.length - perView()
        );


      index =
        Math.min(
          index + 1,
          maxIndex
        );


      update();

    }
  );


  prev.addEventListener(
    "click",
    () => {

      index =
        Math.max(
          0,
          index - 1
        );


      update();

    }
  );


  /* TOUCH / MOUSE DRAG */

  track.addEventListener(
    "pointerdown",
    (event) => {

      dragging = true;

      startX = event.clientX;

      track.setPointerCapture(
        event.pointerId
      );

    }
  );


  track.addEventListener(
    "pointerup",
    (event) => {

      if (!dragging) {

        return;

      }


      dragging = false;


      const difference =
        event.clientX - startX;


      if (Math.abs(difference) > 50) {

        if (difference < 0) {

          next.click();

        } else {

          prev.click();

        }

      }

    }
  );


  track.addEventListener(
    "pointercancel",
    () => {

      dragging = false;

    }
  );


  window.addEventListener(
    "resize",
    update
  );


  update();

}


/* =========================================================
   CONTACT FORM → WHATSAPP
   ========================================================= */

function initContactForm() {

  const form =
    document.getElementById(
      "contactForm"
    );


  if (!form) {

    return;

  }


  form.addEventListener(
    "submit",
    (event) => {

      event.preventDefault();


      const data =
        new FormData(form);


      const message =

        `Hello ${COMPANY.name}, I would like a cleaning quote.

Name: ${data.get("name") || ""}

Phone: ${data.get("phone") || ""}

Service: ${data.get("service") || ""}

Message:
${data.get("message") || ""}`;


      window.location.href =
        `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;

    }
  );

}


/* =========================================================
   START WEBSITE
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    /* HEADER */

    const header =
      document.getElementById(
        "site-header"
      );


    if (header) {

      header.innerHTML =
        headerHTML();

    }


    /* FOOTER */

    const footer =
      document.getElementById(
        "site-footer"
      );


    if (footer) {

      footer.innerHTML =
        footerHTML();

    }


    /* LINKS */

    applyLinks();


    /* CAROUSEL */

    initCarousel();


    /* CONTACT */

    initContactForm();


    /* =================================================
       LANGUAGE SELECTOR
       ================================================= */

    const languageSelect =
      document.getElementById(
        "languageSelect"
      );


    languageSelect?.addEventListener(
      "change",
      () => {

        const language =
          languageSelect.value;


        if (!language) {

          return;

        }


        loadGoogleTranslate();


        const chooseLanguage =
          () => {

            const combo =
              document.querySelector(
                ".goog-te-combo"
              );


            if (combo) {

              combo.value =
                language;


              combo.dispatchEvent(
                new Event("change")
              );

            } else {

              setTimeout(
                chooseLanguage,
                250
              );

            }

          };


        chooseLanguage();

      }
    );


    /* =================================================
       AUTO TRANSLATE
       ================================================= */

    document
      .getElementById(
        "autoTranslateBtn"
      )
      ?.addEventListener(
        "click",
        () => {

          loadGoogleTranslate();


          setTimeout(
            () => {

              const combo =
                document.querySelector(
                  ".goog-te-combo"
                );


              if (combo) {

                combo.value = "";

                combo.dispatchEvent(
                  new Event("change")
                );

              }

            },
            1200
          );

        }
      );

  }
);