const rejectedBtn = document.getElementById('rejectedBtn')
const interviewBtn = document.getElementById('interviewBtn')
const allJobs = document.getElementById('allJobBtn')

function changeActiveColor(id) {
    rejectedBtn.classList.remove('bg-blue-600', 'text-white')
    interviewBtn.classList.remove('bg-blue-600', 'text-white')
    allJobs.classList.remove('bg-blue-600', 'text-white')

    rejectedBtn.classList.add('bg-white', 'text-black')
    interviewBtn.classList.add('bg-white', 'text-black')
    allJobs.classList.add('bg-white', 'text-black')

   const selected = document.getElementById(id)
   selected.classList.remove('bg-white', 'text-black')
   selected.classList.add('bg-blue-600', 'text-white')
}