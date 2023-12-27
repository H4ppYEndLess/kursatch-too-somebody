(() => {

    const form = document.querySelector("#subscribe");
    const refs = {
        openModalBtn: document.querySelectorAll("[data-modal-open]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        modal: document.querySelector("[data-modal]"),
    };
  
    function disableScroll() {
        document.body.style.setProperty('overflow', 'hidden', 'important');
    }
  
    function enableScroll() {
        document.body.style.removeProperty('overflow');
    }
  
    function openModal() {
        refs.modal.classList.remove("is-hidden");
        disableScroll();
    }
  
    function closeModal() {
        refs.modal.classList.add("is-hidden");
        enableScroll();
    }

    refs.openModalBtn.forEach(element => {
        element.addEventListener("click", openModal);
    });
    refs.closeModalBtn.addEventListener("click", closeModal);

    form.addEventListener("submit", (e) => {
        e.preventDefault();
    
        var subscribe__email = document.getElementById("email").value;
        var subscribe__name = document.getElementById("name").value;
        var subscribe__phone = document.getElementById("phone").value;
    
        var subscribe = `New subscriber <b>${subscribe__name}</b> Email:<b>${subscribe__email}</b> Name: <b>${subscribe__name}</b>`
    
        var token = "6270391808:AAEeDST2kRZacIxzisJz-GBovp8C8uRHcY0";
        var chat_id = '658812116';
        var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${subscribe}&parse_mode=html`;
    
        let api = new XMLHttpRequest();
        api.open("GET", url, true);
        api.send();
    
        console.log("Subscribe successfully sended!");
        form.reset();
        closeModal();
    });
  })();