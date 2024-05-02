//function updateSlotTimings() {
//    const agentName = document.getElementById('agentName').value;
//    const slotTimings = document.getElementById('slotTimings').value;
//
//    fetch('http://localhost:5000/updateSlotTimings', {  // Update URL to point to Flask server
//        method: 'POST',
//        headers: {
//            'Content-Type': 'application/json',
//        },
//        body: JSON.stringify({ agentName, slotTimings }),
//    })
//    .then(response => response.json())
//    .then(data => {
//        alert(data.message);
//    })
//    .catch(error => {
//        console.error('Error:', error);
//    });
//}
//
//function markAgentUnavailable() {
//    const agentName = document.getElementById('agentNameUnavailable').value;
//
//    fetch('http://localhost:5000/markAgentUnavailable', {  // Update URL to point to Flask server
//        method: 'POST',
//        headers: {
//            'Content-Type': 'application/json',
//        },
//        body: JSON.stringify({ agentName }),
//    })
//    .then(response => response.json())
//    .then(data => {
//        alert(data.message);
//    })
//    .catch(error => {
//        console.error('Error:', error);
//    });
//}
//
//window.onload = function() {
//    // Fetch list of agents from backend API
//    fetch('http://localhost:5000/agents')  // Update URL to point to Flask server
//    .then(response => response.json())
//    .then(agents => {
//        // Display list of agents in agentsList container
//        const agentsListContainer = document.getElementById('agentsList');
//        agentsListContainer.innerHTML = '<h3>List of Agents</h3>';
//        agents.forEach(agent => {
//            agentsListContainer.innerHTML += `<p>${agent.name} - Slot Timings: ${agent.slot_timings} - Available: ${agent.available ? 'Yes' : 'No'}</p>`;
//        });
//    })
//    .catch(error => {
//        console.error('Error:', error);
//    });
//};

function updateSlotTimings() {
    const selectedSlotTiming = document.getElementById('slotTimings').value;
    const agentName = document.getElementById('agentName').value;
    const slotTimings = document.getElementById('slotTimings').value;

    fetch('http://localhost:5000/updateSlotTimings', {  // Update URL to point to Flask server
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ agentName, slotTimings }),
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function markAgentUnavailable() {
    const agentName = document.getElementById('agentNameAvailability').value;

    fetch('http://localhost:5000/markAgentUnavailable', {  // Update URL to point to Flask server
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ agentName }),
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function markAgentAvailable() {
    const agentName = document.getElementById('agentNameAvailability').value;

    fetch('http://localhost:5000/markAgentAvailable', {  // Update URL to point to Flask server
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ agentName }),
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

window.onload = function() {
    // Fetch list of agents from backend API
    fetch('http://localhost:5000/agents')  // Update URL to point to Flask server
    .then(response => response.json())
    .then(agents => {
        // Populate datalist for agent names input
        const agentNamesList = document.getElementById('agentNames');
        const agentNamesListAvailability = document.getElementById('agentNamesAvailability');

        agents.forEach(agent => {
            const option = document.createElement('option');
            option.value = agent.name;
            agentNamesList.appendChild(option);
            agentNamesListAvailability.appendChild(option.cloneNode(true));
        });

        // Create table to display agent details
        const agentsTable = document.createElement('table');
        agentsTable.innerHTML = `
            <tr>
                <th>Agent Name</th>
                <th>Slot Timings</th>
                <th>Availability</th>
            </tr>
        `;
        agents.forEach(agent => {
            const agentRow = document.createElement('tr');
            agentRow.innerHTML = `
                <td>${agent.name}</td>
                <td>${agent.slot_timings}</td>
                <td>${agent.available ? 'Yes' : 'No'}</td>
            `;
            agentsTable.appendChild(agentRow);
        });

        // Append the table to the agentsList container
        const agentsListContainer = document.getElementById('agentsTable');
        agentsListContainer.appendChild(agentsTable);
    })
    .catch(error => {
        console.error('Error:', error);
    });
};

//
//// Function to fetch agents data from JSON file
//function fetchAgentsData() {
//    return fetch('https://github.hpe.com/gaurav-shukla/case-allocation.github.io/blob/main/agents.json', {
//        headers: {
//            Authorization: 'Token_1',
//        },
//    })
//    .then(response => response.json())
//    .then(data => {
//        // Decode the content from base64
//        const decodedContent = atob(data.content);
//        return JSON.parse(decodedContent);
//    })
//    .catch(error => {
//        console.error('Error fetching agents data:', error);
//        throw error; // Rethrow the error to handle it elsewhere
//    });
//}
//
//// Function to update slot timings
//function updateSlotTimings() {
//    const agentName = document.getElementById('agentName').value;
//    const slotTimings = document.getElementById('slotTimings').value;
//
//    // Fetch the SHA hash of the existing file
//    fetch('https://github.hpe.com/gaurav-shukla/case-allocation.github.io/blob/main/agents.json')
//        .then(response => response.json())
//        .then(data => {
//            const sha = data.sha;
//
//            // Use the SHA hash when making the update request
//            fetch('https://github.hpe.com/gaurav-shukla/case-allocation.github.io/blob/main/agents.json', {
//                method: 'PUT',
//                headers: {
//                    Authorization: 'Token_1',
//                    'Content-Type': 'application/json',
//                },
//                body: JSON.stringify({
//                    message: 'Update file',
//                    content: btoa(JSON.stringify({ agentName, slotTimings })),
//                    sha: sha,
//                }),
//            })
//            .then(response => response.json())
//            .then(data => {
//                alert(data.message);
//            })
//            .catch(error => {
//                console.error('Error:', error);
//            });
//        })
//        .catch(error => {
//            console.error('Error fetching file information:', error);
//        });
//}
//
//
//// Function to mark agent as unavailable
//function markAgentUnavailable() {
//    const agentName = document.getElementById('agentNameAvailability').value;
//
//    // Construct the URL to update the file on GitHub
//    const githubUrl = 'https://github.hpe.com/gaurav-shukla/case-allocation.github.io/blob/main/agents.json';
//
//    // Fetch the SHA hash of the existing file before making the update request
//    fetch(githubUrl)
//        .then(response => response.json())
//        .then(data => {
//            const sha = data.sha;
//
//            // Make the update request to GitHub
//            fetch(githubUrl, {
//                method: 'PUT',
//                headers: {
//                    Authorization: 'Token_1',
//                    'Content-Type': 'application/json',
//                },
//                body: JSON.stringify({
//                    message: 'Update file',
//                    content: btoa(JSON.stringify({ agentName, available: false })), // Set available to false
//                    sha: sha,
//                }),
//            })
//            .then(response => response.json())
//            .then(data => {
//                alert(data.message);
//            })
//            .catch(error => {
//                console.error('Error:', error);
//            });
//        })
//        .catch(error => {
//            console.error('Error fetching file information:', error);
//        });
//}
//
//
//// Function to mark agent as available
//function markAgentAvailable() {
//    const agentName = document.getElementById('agentNameAvailability').value;
//
//    // Construct the URL to update the file on GitHub
//    const githubUrl = 'https://github.hpe.com/gaurav-shukla/case-allocation.github.io/blob/main/agents.json';
//
//    // Fetch the SHA hash of the existing file before making the update request
//    fetch(githubUrl)
//        .then(response => response.json())
//        .then(data => {
//            const sha = data.sha;
//
//            // Make the update request to GitHub
//            fetch(githubUrl, {
//                method: 'PUT',
//                headers: {
//                    Authorization: 'Token_1',
//                    'Content-Type': 'application/json',
//                },
//                body: JSON.stringify({
//                    message: 'Update file',
//                    content: btoa(JSON.stringify({ agentName, available: true })), // Set available to true
//                    sha: sha,
//                }),
//            })
//            .then(response => response.json())
//            .then(data => {
//                alert(data.message);
//            })
//            .catch(error => {
//                console.error('Error:', error);
//            });
//        })
//        .catch(error => {
//            console.error('Error fetching file information:', error);
//        });
//}
//
//
//// Function to populate agents list
//function populateAgentsList(agents) {
//    const agentNamesList = document.getElementById('agentNames');
//    const agentNamesListAvailability = document.getElementById('agentNamesAvailability');
//
//    agents.forEach(agent => {
//        const option = document.createElement('option');
//        option.value = agent.name;
//        agentNamesList.appendChild(option);
//        agentNamesListAvailability.appendChild(option.cloneNode(true));
//    });
//}
//
//window.onload = function() {
//    // Fetch list of agents from JSON file
//    fetchAgentsData()
//        .then(agents => {
//            // Display list of agents in agentsList container
//            populateAgentsList(agents);
//        })
//        .catch(error => {
//            console.error('Error:', error);
//        });
//};
//
//
//
