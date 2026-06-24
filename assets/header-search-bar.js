theme.headerSearch = (function () {
  function expandableSearch() {
    const wrappers = document.querySelectorAll(".header-expand-search");

    wrappers.forEach((wrapper) => {
      const trigger = wrapper.querySelector(".header__actions_btn--search-expand");
      const input = wrapper.querySelector('input[type="search"]');

      if (!trigger || !input) return;

      const close = () => {
        wrapper.classList.remove("is-open");
        trigger.setAttribute("aria-expanded", "false");
      };

      trigger.addEventListener("click", (event) => {
        event.preventDefault();
        wrapper.classList.add("is-open");
        trigger.setAttribute("aria-expanded", "true");
        input.focus();
      });

      wrapper.addEventListener("keyup", (event) => {
        if (event.code === "Escape") {
          close();
          trigger.focus();
        }
      });

      document.addEventListener("click", (event) => {
        if (!wrapper.contains(event.target)) {
          close();
        }
      });
    });
  }

  function searchOverlay(e) {
    // Tranaprent header
    // const headerHeight = document.querySelector('.header__area');
    // document.documentElement.style.setProperty('--header-height', `${headerHeight.clientHeight}px`);

    let input = e.querySelector('input[type="search"]');

    let drawerAction = (trigger, closeTrigger, wrapper) => {
      let offcanvasSearchTrigger = document.querySelectorAll(trigger),
        offcanvasSidebarSearch = document.querySelector(wrapper),
        offcanvasSearchClose = document.getElementById(closeTrigger);

      offcanvasSearchTrigger.forEach((singleTrigger) => {
        if (singleTrigger) {
          singleTrigger.addEventListener("click", (event) => {
            event.preventDefault();
            offcanvasSidebarSearch.classList.add("active");
            document
              .querySelector("body")
              .classList.add("added__overlay_search");

            offcanvasSidebarSearch.addEventListener(
              "transitionend",
              () => {
                trapFocus(offcanvasSidebarSearch);
                trapFocus(input);
              },
              { once: true }
            );
          });

          offcanvasSidebarSearch.addEventListener("keyup", (evt) => {
            if (evt.code === "Escape") {
              offcanvasSidebarSearch.classList.remove("active");
              document
                .querySelector("body")
                .classList.remove("added__overlay_search");
              removeTrapFocus(singleTrigger);
            }
          });

          if (offcanvasSearchClose) {
            offcanvasSearchClose.addEventListener("click", (event) => {
              event.preventDefault();
              offcanvasSidebarSearch.classList.remove("active");
              document
                .querySelector("body")
                .classList.remove("added__overlay_search");
              removeTrapFocus(singleTrigger);
            });
          }
        }
      });

      if (offcanvasSidebarSearch) {
        document.addEventListener("click", function (event) {
          let eventTarget = event.target;
          if (
            !eventTarget.closest("#predictive__search_overlay") &&
            !eventTarget.closest(".header__actions_btn--search")
          ) {
            offcanvasSidebarSearch.classList.remove("active");
            document
              .querySelector("body")
              .classList.remove("added__overlay_search");
          }
        });
      }
    };

    drawerAction(
      ".header__actions_btn--search",
      "search__close_btn",
      "#predictive__search_overlay"
    );

    expandableSearch();
  }
  return searchOverlay;
})();
