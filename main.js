const linksSocialMedia = {
  github: 'leiaoliver',
  facebook: 'profile.php?id=100025848767273',
  instagram: 'leiaoliver388',
  twitter: 'LeiaOliverr'
}

//redes sociais
function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

//gitHub
function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url) //resposta
    .then(Response => Response.json()) //retorno do fetch, transformando em json
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
