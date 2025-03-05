document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
  
  const sections = document.querySelectorAll("section");
  const options = {
    threshold: 0.3,
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, options);
  
  sections.forEach((section) => {
    observer.observe(section);
  });
  
  const cursor = document.querySelector(".cursor");
  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
  });
  
  document.querySelectorAll("a, button").forEach((elem) => {
    elem.addEventListener("mouseenter", () => cursor.classList.add("hover"));
    elem.addEventListener("mouseleave", () => cursor.classList.remove("hover"));
  });