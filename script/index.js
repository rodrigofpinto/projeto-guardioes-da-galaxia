const members = [
  { name: 'Peter Quill', id: 'peter' },
  { name: 'Gamora Titan', id: 'gamora' },
  { name: 'Drax o Destruidor', id: 'drax' },
  { name: 'Mantis', id: 'mantis' },
  { name: 'Rocket Raccoon', id: 'rocket' },
  { name: 'I am Groot', id: 'groot' },
]

let activeMember = 0
const images = document.getElementById("images")
const menu = document.getElementById("menu")

const memberName = document.getElementById("member-name")

function changeStatusButtons() {
  const prev = document.getElementById("button-prev")
  const isFirst = activeMember == 0
  prev.disabled = isFirst

  const next = document.getElementById("button-next")
  const isLast = activeMember == members.length - 1
  next.disabled = isLast
}

function navigationMember(direction) {
  activeMember = activeMember + direction

  const member = members[activeMember]

  images.style.transform = `translateY(-${100 * activeMember}vh)`
  memberName.classList = member.id

  changeName(members.name)
  changeStatusButtons()
}
function changeMenu() {
  menu.classList.toggle("active")
}