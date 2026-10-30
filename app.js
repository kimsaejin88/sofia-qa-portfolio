(() => {
  const grid = document.querySelector("#project-grid");
  const projects = window.portfolioProjects || [];

  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);

  const renderCaseStudy = (study) => {
    if (!study) return "";
    return `
      <details class="case-study">
        <summary>
          <span class="case-study-label">CASE STUDY</span>
          <span class="case-study-title">${escapeHtml(study.title)}</span>
          <span class="case-study-toggle" aria-hidden="true">+</span>
        </summary>
        <div class="case-study-content">
          <div class="case-row"><h4>Context</h4><p>${escapeHtml(study.context)}</p></div>
          <div class="case-row"><h4>Challenge</h4><p>${escapeHtml(study.challenge)}</p></div>
          <div class="case-row"><h4>My actions</h4><p>${escapeHtml(study.actions)}</p></div>
          <div class="case-row"><h4>Takeaway</h4><p>${escapeHtml(study.takeaway)}</p></div>
        </div>
      </details>`;
  };

  const renderProject = (project, index) => {
    const projectNumber = String(index + 1).padStart(2, "0");
    const platforms = project.platforms.map((platform) => `<li>${escapeHtml(platform)}</li>`).join("");
    const handheld = project.additionalExperience
      ? `<p class="device-note"><span>DEVICE WORKFLOW FAMILIARIZATION</span>${escapeHtml(project.additionalExperience)}</p>`
      : "";

    return `
      <article class="project-card ${project.featured ? "project-card-featured" : ""}" style="--card-accent:${escapeHtml(project.accent)}">
        <img class="project-art" src="${escapeHtml(project.image)}" alt="${escapeHtml(project.imageAlt || "")}" loading="lazy" decoding="async" />
        <div class="card-overlay" aria-hidden="true"></div>
        <div class="card-content">
          <div class="card-topline">
            <span class="project-number">${projectNumber}<span> / 08</span></span>
            ${project.featured ? '<span class="featured-badge"><span aria-hidden="true">✳</span> FEATURED</span>' : '<span class="project-stamp">PROJECT</span>'}
          </div>
          <div class="art-space" aria-hidden="true"></div>
          <div class="card-information">
            <h3>${escapeHtml(project.title)}</h3>
            <div class="role-period"><span>${escapeHtml(project.role)}</span><i aria-hidden="true"></i><span>${escapeHtml(project.period)}</span></div>
            <ul class="platform-list" aria-label="Platforms">${platforms}</ul>
            ${handheld}
            <div class="card-copy-block">
              <p class="block-label">PROJECT TYPE</p>
              <p class="project-type">${escapeHtml(project.projectType)}</p>
            </div>
            <div class="card-copy-block contribution-block">
              <p class="block-label">KEY CONTRIBUTION</p>
              <p class="project-contribution">${escapeHtml(project.contribution)}</p>
            </div>
            <div class="demonstrates-block">
              <span class="demonstrates-icon" aria-hidden="true">↗</span>
              <p><span class="block-label">WHAT THIS DEMONSTRATES</span>${escapeHtml(project.demonstrates)}</p>
            </div>
            ${renderCaseStudy(project.caseStudy)}
          </div>
        </div>
      </article>`;
  };

  if (grid) {
    grid.innerHTML = projects.map(renderProject).join("");

    const cards = [...grid.querySelectorAll(".project-card")];
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if ("IntersectionObserver" in window && !motionPreference.matches) {
      const observer = new IntersectionObserver((entries, activeObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in-view");
            activeObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.22 });
      cards.forEach((card) => observer.observe(card));
    }
  }

  const copyTimers = new WeakMap();

  const fallbackCopy = (value, button) => {
    const field = document.createElement("textarea");
    field.value = value;
    field.readOnly = true;
    field.tabIndex = -1;
    field.setAttribute("aria-hidden", "true");
    field.style.position = "fixed";
    field.style.top = "-1000px";
    field.style.opacity = "0";
    document.body.appendChild(field);
    field.focus();
    field.select();

    let copied = false;
    try {
      copied = document.execCommand("copy");
    } catch {
      copied = false;
    }
    field.remove();
    button.focus();
    return copied;
  };

  const copyEmail = async (value, button) => {
    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(value);
        return true;
      } catch {
        // Fall through to the legacy copy method when clipboard access is denied.
      }
    }
    return fallbackCopy(value, button);
  };

  document.addEventListener("click", async (event) => {
    const button = event.target.closest(".contact-copy");
    if (!button) return;

    const toast = button.querySelector(".copy-toast");
    const message = button.querySelector(".toast-message");
    const email = button.dataset.email;
    const originalLabel = button.dataset.originalLabel || button.getAttribute("aria-label");
    button.dataset.originalLabel = originalLabel;

    const copied = await copyEmail(email, button);
    message.textContent = copied ? "Email copied to clipboard!" : "Copy failed. Please copy the address manually.";
    toast.hidden = false;
    button.classList.toggle("is-copied", copied);
    button.setAttribute("aria-label", copied ? "Email copied to clipboard" : "Unable to copy email address");

    const previousTimer = copyTimers.get(button);
    if (previousTimer) window.clearTimeout(previousTimer);
    copyTimers.set(button, window.setTimeout(() => {
      toast.hidden = true;
      button.classList.remove("is-copied");
      button.setAttribute("aria-label", originalLabel);
      copyTimers.delete(button);
    }, 2000));
  });
})();
