fetch('/branches')
    .then(response => response.json())
    .then(data => {
        const branchesDiv = document.getElementById('branches');
        data.branches.forEach(branch => {
            const branchElement = document.createElement('div');
            branchElement.textContent = branch;
            branchesDiv.appendChild(branchElement);
        });
    })
    .catch(error => console.error('Error fetching branches:', error));
