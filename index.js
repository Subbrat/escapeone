{
    const countE0 = document.getElementById('count');
    updateVisitCount();

    function updateVisitCount() {
        fetch('https://api.countapi.xyz/update/subbrat/escapegame/?amount=+1')
            // fetch('https://api.countapi.xyz/get/subbrat/escapegame/')
            .then(res => res.json())
            .then(res => {
                countE0.innerHTML = res.value;
            })
    }
}