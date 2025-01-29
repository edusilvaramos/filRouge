document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("employe-search");
    const employeeSelect = document.getElementById("form_employe");

    if (!searchInput || !employeeSelect) {
        console.error("Campos do formulário não encontrados!");
        return;
    }

    searchInput.addEventListener("input", function () {
        const query = searchInput.value.trim();

        if (query.length < 2) {
            employeeSelect.innerHTML = "<option value=''>Select an employee</option>";
            return;
        }

        fetch(`/search/employees?q=${encodeURIComponent(query)}`)
            .then(response => response.json())
            .then(data => {
                employeeSelect.innerHTML = ""; // Limpa opções
                data.forEach(employee => {
                    const option = document.createElement("option");
                    option.value = employee.id;
                    option.textContent = employee.nameUser; // Ajuste para o campo correto
                    employeeSelect.appendChild(option);
                });
            })
            .catch(error => console.error("Erro ao buscar empregados:", error));
    });
});
