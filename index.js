const links = {
  github: 'Nikaelson',
  instagram: 'kael.passos'
}
function GetInfosGit() {
  const url = `https://api.github.com/users/${links.github}`

  fetch(url)
    .then(response => response.json())
    .then(date => {
      UserName.textContent = date.name
      bio.textContent = date.bio
      UserPhoto.src = date.avatar_url
      UserLink.href = date.html_url
      User.textContent = date.login
    })
}
GetInfosGit()
