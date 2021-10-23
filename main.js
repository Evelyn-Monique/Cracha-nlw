const linksSocialMedia = {
  github: 'Evelyn-Monique',
  instagram: 'evelyn_moonique',
  facebook: 'evelyn.monique.33449',
  youtube: 'channel/UCPI3RXKglcvYCH3jNOxKyEQ',
  twitter: 'mooique'
}
function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userPhoto.src = data.avatar_url
    })
}

getGitHubProfileInfos()
