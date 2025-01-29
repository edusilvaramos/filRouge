document.addEventListener('DOMContentLoaded', function () {
    let collectionHolder = document.querySelector('#employe-fields');
    let addButton = document.querySelector('#add-employe');

    addButton.addEventListener('click', function () {
        let prototype = collectionHolder.dataset.prototype;
        let index = collectionHolder.children.length;
        let newField = prototype.replace(/__name__/g, index);

        let div = document.createElement('div');
        div.classList.add('input-group', 'mb-2', 'employe-entry');
        div.innerHTML = newField + '<button type="button" class="btn btn-danger  remove-employe">Remover</button>';
        collectionHolder.appendChild(div);

        attachRemoveEvent(div);
    });

    function attachRemoveEvent(element) {
        let removeButton = element.querySelector('.remove-employe');
        if (removeButton) {
            removeButton.addEventListener('click', function () {
                element.remove();
            });
        }
    }

    document.querySelectorAll('.employe-entry').forEach(attachRemoveEvent);
});

