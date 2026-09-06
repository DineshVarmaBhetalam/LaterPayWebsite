/*
  Fluid — SaaS Landing Page Template
  HTML template by TemplatesJungle (https://templatesjungle.com)
*/
(function () {
  "use strict";

  // Footer current year
  var yearEls = document.querySelectorAll(".currentYear");
  yearEls.forEach(function (el) { el.textContent = new Date().getFullYear(); });

  // Navbar shadow on scroll
  var navbar = document.querySelector(".navbar-fluid");
  var backToTop = document.querySelector(".back-to-top");

  function onScroll() {
    var scrolled = window.scrollY > 40;
    if (navbar) {
      navbar.classList.toggle("shadow-sm", scrolled);
    }
    if (backToTop) {
      backToTop.classList.toggle("show", window.scrollY > 500);
    }
  }
  document.addEventListener("scroll", onScroll);
  onScroll();

  if (backToTop) {
    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Bootstrap tooltips (if any are added)
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.forEach(function (el) {
    if (window.bootstrap && window.bootstrap.Tooltip) {
      new window.bootstrap.Tooltip(el);
    }
  });

  // Contact form: client-side validation + async submit to contact.php
  var contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      event.stopPropagation();

      var statusBox = document.getElementById("contactFormStatus");

      if (!contactForm.checkValidity()) {
        contactForm.classList.add("was-validated");
        return;
      }

      var submitBtn = contactForm.querySelector('button[type="submit"]');
      var originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = "Sending...";

      var formData = new FormData(contactForm);

      fetch(contactForm.getAttribute("action") || "contact.php", {
        method: "POST",
        body: formData,
        headers: { "X-Requested-With": "XMLHttpRequest" }
      })
        .then(function (res) { return res.json().catch(function () { return { success: res.ok }; }); })
        .then(function (data) {
          if (statusBox) {
            statusBox.classList.remove("d-none", "alert-danger", "alert-success");
            if (data && data.success) {
              statusBox.classList.add("alert-success");
              statusBox.textContent = data.message || "Thanks! Your message has been sent successfully.";
              contactForm.reset();
              contactForm.classList.remove("was-validated");
            } else {
              statusBox.classList.add("alert-danger");
              statusBox.textContent = (data && data.message) || "Something went wrong. Please try again.";
            }
          }
        })
        .catch(function () {
          if (statusBox) {
            statusBox.classList.remove("d-none", "alert-success");
            statusBox.classList.add("alert-danger");
            statusBox.textContent = "This form requires a PHP-enabled server to send email. Please upload the template to a PHP host, or connect the form to your preferred email service.";
          }
        })
        .finally(function () {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        });
    }, false);
  }

  // Generic Bootstrap form validation styles for other forms (newsletter, auth, etc.)
  var validatedForms = document.querySelectorAll(".needs-validation");
  Array.prototype.slice.call(validatedForms).forEach(function (form) {
    if (form.id === "contactForm") return; // handled above
    form.addEventListener("submit", function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add("was-validated");
    }, false);
  });
})();
