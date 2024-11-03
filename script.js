const search = document.getElementById('search');
const button = document.getElementById('button');
let userCard = document.createElement('div');
async function profile(){
    const searches = search.value.trim().toLowerCase();
    try{
    const response = await fetch(`https://api.github.com/users/${searches}`);
    if(!response.ok){
        throw new Error(`can't find`);
    }
    const data = await response.json();
    userCard.innerHTML = '';
    const {avatar_url, name, bio, following, followers, repos_url} = data;
    userCard.className = "userCard";
    userCard.innerHTML = `
    <div class="avatar"><img src="${avatar_url}"></div>
    <div class="name">${name}</div> 
    <div class="repos">${repos_url}</div>
    <div class="follows">
    <div class="followers">Followers: ${followers}</div>
    <div class="following">Following: ${following}</div>
    </div>
    <div class="bio">${bio}</div>
    `;
    document.body.append(userCard);
    }catch(error){
       console.error(error);
       userCard.innerHTML = `
       <div class="name">Can't Find this user</div> 
       `
    }
    
}
button.addEventListener('click', profile);