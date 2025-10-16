
document.addEventListener("DOMContentLoaded", () => {
 
  const initialCards = [
    {
      name: "Vale de Yosemite",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    },
    {
      name: "Lago Louise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    },
    {
      name: "Montanhas Carecas",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
    },
    {
      name: "Latemar",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
    },
    {
      name: "Parque Nacional Vanoise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
    },
    {
      name: "Lago di Braies",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
    },
  ];


  function handleEscClose(evt) {
    if (evt.key === "Escape") {
      const opened = document.querySelector(".popup.popup_is-opened");
      if (opened) closeModal(opened);
    }
  }

  function handleOverlayClose(evt) {

    if (evt.target.classList.contains("popup")) {
      closeModal(evt.currentTarget);
    }
  }

  function openModal(modal) {
    modal.classList.add("popup_is-opened");
    document.addEventListener("keydown", handleEscClose);
    modal.addEventListener("mousedown", handleOverlayClose);
  }

  function closeModal(modal) {
    modal.classList.remove("popup_is-opened");
    document.removeEventListener("keydown", handleEscClose);
    modal.removeEventListener("mousedown", handleOverlayClose);
  }


  const editButton = document.querySelector(".profile__edit-button");
  const editPopup = document.querySelector("#edit-popup");
  const closeEditBtn = editPopup.querySelector(".popup__close");
  const profileTitle = document.querySelector(".profile__title");
  const profileDescription = document.querySelector(".profile__description");
  const editForm = document.querySelector("#edit-profile-form");
  const nameInput = editPopup.querySelector(".popup__input_type_name");
  const descInput = editPopup.querySelector(".popup__input_type_description");

  function fillProfileForm() {
    nameInput.value = profileTitle.textContent;
    descInput.value = profileDescription.textContent;
  }

  function handleOpenEditModal() {
    fillProfileForm();
    openModal(editPopup);
  }

  function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    const name = nameInput.value.trim();
    const about = descInput.value.trim();
    if (!name || !about) return;
    profileTitle.textContent = name;
    profileDescription.textContent = about;
    closeModal(editPopup);
  }

  editButton.addEventListener("click", handleOpenEditModal);
  closeEditBtn.addEventListener("click", () => closeModal(editPopup));
  editForm.addEventListener("submit", handleProfileFormSubmit);


  const cardsList = document.querySelector(".cards__list");
  const cardTemplate = document.querySelector("#card-template");

 
  const imagePopup = document.querySelector("#image-popup");
  const imagePopupCloseBtn = imagePopup.querySelector(".popup__close");
  const previewImg = imagePopup.querySelector(".popup__image");
  const previewCaption = imagePopup.querySelector(".popup__caption");

  function openImagePreview(name, link) {
    previewImg.src = link;
    previewImg.alt = name;
    previewCaption.textContent = name;
    openModal(imagePopup);
  }
  imagePopupCloseBtn.addEventListener("click", () => closeModal(imagePopup));

  
  function getCardElement(
    name = "Lugar sem nome",
    link = "./images/placeholder.jpg"
  ) {
    const cardElement = cardTemplate.content
      .querySelector(".card")
      .cloneNode(true);
    const imageEl = cardElement.querySelector(".card__image");
    const titleEl = cardElement.querySelector(".card__title");
    const likeBtn = cardElement.querySelector(".card__like-button");
    const delBtn = cardElement.querySelector(".card__delete-button");

    titleEl.textContent = name;
    imageEl.src = link;
    imageEl.alt = name;

    likeBtn.addEventListener("click", () => {
      likeBtn.classList.toggle("card__like-button_is-active");
    });

    delBtn.addEventListener("click", () => {
      cardElement.remove();
    });

    imageEl.addEventListener("click", () => {
      openImagePreview(name, link);
    });

    return cardElement;
  }

  function renderCard(name, link, container) {
    const el = getCardElement(name, link);
    container.prepend(el);
  }

  
  initialCards.forEach(({ name, link }) => renderCard(name, link, cardsList));


  const addPopup = document.querySelector("#new-card-popup");
  const addOpenBtn = document.querySelector(".profile__add-button");
  const addCloseBtn = addPopup.querySelector(".popup__close");
  const addForm = document.querySelector("#new-card-form");


  function getAddInputs() {
    const form = document.querySelector("#new-card-form");
    const title = form?.elements["place-name"]; // name="place-name"
    const link = form?.elements["link"]; // name="link"
    return { form, title, link };
  }

  function clearAddForm() {
    const { title, link } = getAddInputs();
    if (title) title.value = "";
    if (link) link.value = "";
  }

  function handleOpenAddModal() {
    clearAddForm();
    openModal(addPopup);
  }

  function handleCardFormSubmit(evt) {
    evt.preventDefault();
    const { title, link } = getAddInputs();
    if (!title || !link) return;

    const name = title.value.trim();
    const url = link.value.trim();
    if (!name || !url) return;

    renderCard(name, url, cardsList);
    closeModal(addPopup);
    clearAddForm();
  }

  addOpenBtn.addEventListener("click", handleOpenAddModal);
  addCloseBtn.addEventListener("click", () => closeModal(addPopup));
  addForm.addEventListener("submit", handleCardFormSubmit);
});
