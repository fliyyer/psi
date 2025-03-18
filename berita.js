document.addEventListener("DOMContentLoaded", function () {
  const filterItems = document.querySelectorAll(".filter-item");
  filterItems.forEach((item) => {
    item.addEventListener("click", function () {
      filterItems.forEach((i) => i.classList.remove("active"));
      this.classList.add("active");
      updateFilterStyle(this);
    });
  });

  function updateFilterStyle(selectedItem) {
    filterItems.forEach((item) => {
      if (item === selectedItem) {
        item.classList.add("text-[#14171F]", "bg-[#f2f2f2]", "font-medium");
        item.classList.remove("text-[#14171F]/70");
      } else {
        item.classList.remove("text-[#14171F]", "bg-[#f2f2f2]", "font-medium");
        item.classList.add("text-[#14171F]/70");
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const artikelContainer = document.getElementById("artikelContainer");
  const paginationContainer = document.getElementById("pagination");

  const artikelData = [
    {
      img: "/assets/artikel1.png",
      badge: "Opini",
      title: "Dewan Ingin Kearifan Lokal Betawi Semakin Dikenal Luas",
      date: "12 September, 2024",
    },
    {
      img: "/assets/artikel2.png",
      badge: "Politik dan Pemerintahan",
      title: "Penerima Bansos Disisir Lagi Dan Kudu Ber-KTP DKI",
      date: "25 November 2024",
    },
    {
      img: "/assets/artikel3.png",
      badge: "Kesejahteraan Sosial",
      title:
        "Cegah TBC, DPRD DKI Jakarta Ajak Masyarakat Jalani Pola Hidup Sehat...",
      date: "5 Desember 2024",
    },
    {
      img: "/assets/artikel4.png",
      badge: "Politik dan Pemerintahan",
      title: "Hepatitis Akut Misterius Masuk RI, PSI Desak Pemprov DKI Sigap",
      date: "25 Maret 2022",
    },
    {
      img: "/assets/artikel5.png",
      badge: "Politik dan Pemerintahan",
      title:
        "Soroti Kasus Hepatitis Akut, PSI Minta Pemprov DKI Jakarta Nyalakan Alarm",
      date: "25 Maret 2022",
    },
    {
      img: "/assets/artikel6.png",
      badge: "Politik dan Pemerintahan",
      title: "DTKS Dibuka, PSI Minta Pemprov DKI Benahi Website",
      date: "25 November 2024",
    },
    {
      img: "/assets/artikel6.png",
      badge: "Politik dan Pemerintahan",
      title: "DTKS Dibuka, PSI Minta Pemprov DKI Benahi Website",
      date: "25 November 2024",
    },
  ];

  const itemsPerPage = 6;
  let currentPage = 1;

  function renderArtikel(page = 1) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const slicedData = artikelData.slice(start, end);

    artikelContainer.innerHTML = slicedData
      .map(
        (artikel) => `
      <div class="p-4 flex flex-col rounded-xl bg-[#E51D26]">
        <img src="${artikel.img}" class="rounded-md w-full h-[220px] object-cover" alt="${artikel.title}" />
        <div class="text-black/50 mt-6 bg-[#F2F2F2] px-[10px] py-1 rounded-md flex items-center justify-center w-fit">
          ${artikel.badge}
        </div>
        <p class="text-2xl mt-4 min-h-[85px] leading-7 text-white font-medium">
          ${artikel.title}
        </p>
        <span class="text-white mt-5">${artikel.date}</span>
      </div>
    `
      )
      .join("");
  }

  function renderPagination() {
    const totalPages = Math.ceil(artikelData.length / itemsPerPage);
    paginationContainer.innerHTML = "";

    const prevButton = document.createElement("button");
    const prevIcon = document.createElement("i");
    prevIcon.classList.add("fa-solid", "fa-chevron-left");
    prevButton.appendChild(prevIcon);
    prevButton.classList.add(
      "px-3",
      "py-1",
      "text-black/70",
      "hover:text-black"
    );
    prevButton.disabled = currentPage === 1;
    prevButton.addEventListener("click", () => {
      if (currentPage > 1) {
        currentPage--;
        renderArtikel(currentPage);
        renderPagination();
      }
    });
    paginationContainer.appendChild(prevButton);

    for (let i = 1; i <= totalPages; i++) {
      const button = document.createElement("button");
      button.textContent = i;
      button.classList.add("px-3", "py-1", "text-black/70", "hover:text-black");

      if (i === currentPage) {
        button.classList.add("font-bold", "text-black");
      }

      button.addEventListener("click", () => {
        currentPage = i;
        renderArtikel(currentPage);
        renderPagination();
      });

      paginationContainer.appendChild(button);
    }

    const nextButton = document.createElement("button");
    const nextIcon = document.createElement("i");
    nextIcon.classList.add("fa-solid", "fa-chevron-right");
    nextButton.appendChild(nextIcon);
    nextButton.classList.add(
      "px-3",
      "py-1",
      "text-black/70",
      "hover:text-black"
    );
    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener("click", () => {
      if (currentPage < totalPages) {
        currentPage++;
        renderArtikel(currentPage);
        renderPagination();
      }
    });
    paginationContainer.appendChild(nextButton);
  }

  renderArtikel(currentPage);
  renderPagination();
});
