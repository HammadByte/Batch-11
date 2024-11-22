var usernameInput = document.getElementById('username-input');
var fetchButton = document.getElementById('fetch-button');
var profileContainer = document.getElementById('profile-container');

fetchButton.addEventListener('click', fetchProfile);

function fetchProfile() {
   var username = usernameInput.value.trim();
    if (username) {
        fetch(`https://api.github.com/users/${username}`)
            .then(response => response.json())
            .then(data => {
                var profileHTML = `
                    <div class="profile-info">
                        <img src="${data.avatar_url}" alt="${data.login}">
                        <span>${data.name}</span>
                    </div>
                    <p>Username: ${data.login}</p>
                    <p>Bio: ${data.bio}</p>
                    <p>Location: ${data.location}</p>
                    <p>Followers: ${data.followers}</p>
                    <p>Following: ${data.following}</p>`;
                
                profileContainer.innerHTML = profileHTML;
            })
            .catch(error => console.error('Error:', error));
    }
}