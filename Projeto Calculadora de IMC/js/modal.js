//const modalWrapper = document.querySelector(".modalWrapper")
//const modalMessage = document.querySelector(".modal .title span")
//const modalBtnClose = document.querySelector(".modal button.close")

export const Modal = {
    wrapper: document.querySelector(".modalWrapper"),
    message: document.querySelector(".modal .title span"),
    buttonClose: document.querySelector(".modal button.close"),

    open: () => {Modal.wrapper.classList.add('open')},
    close(){Modal.wrapper.classList.remove("open")}
}


window.addEventListener('keydown', handleKeydown)
function handleKeydown(event) {
    if (event.key === 'Escape') {
        Modal.close()
    }
}
Modal.buttonClose.onclick = () => Modal.close()