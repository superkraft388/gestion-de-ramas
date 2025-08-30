// Fetch the list of branches from the server
fetch('/branches')
    .then(response => response.json())
    .then(data => {
        // Get the div element where branches will be displayed
        const branchesDiv = document.getElementById('branches');
        // Iterate over each branch and create a new div element for it
        data.branches.forEach(branch => {
            const branchElement = document.createElement('div');
            branchElement.textContent = branch;
            branchesDiv.appendChild(branchElement);
        });
    })
    .catch(error => console.error('Error fetching branches:', error));