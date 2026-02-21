const rejectedBtn = document.getElementById('rejectedBtn')
const interviewBtn = document.getElementById('interviewBtn')
const allJobs = document.getElementById('allJobBtn')
let jobsCard = document.getElementById('jobsCard')
let totalCount = document.getElementById('totalCount')
let interviewCount = document.getElementById('interviewCount')
let rejectedCount = document.getElementById('rejectedCount')
let TotalJobs = document.getElementById('TotalJobs')
let filteredSection = document.getElementById('filteredSection')
let interviewList = []
let rejectedList = []

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

    if (id === 'interviewBtn') {
        jobsCard.classList.add('hidden')
        filteredSection.classList.remove('hidden')
    }
    if (id === 'allJobBtn') {
        jobsCard.classList.remove('hidden')
        filteredSection.classList.add('hidden')
    }
}




function counter() {
    totalCount.innerText = jobsCard.children.length
    TotalJobs.innerText = jobsCard.children.length
    interviewCount.innerText = interviewList.length
    rejectedCount.innerText = rejectedList.length

}
counter()

const mainContainer = document.querySelector('main')
mainContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('interviewBtn')) {
        const parent = event.target.parentNode.parentNode
        const jobName = parent.querySelector('.jobName').innerText
        const jobTitle = parent.querySelector('.jobTitle').innerText
        const jobInfo = parent.querySelector('.jobInfo').innerText
        const jobStatus = parent.querySelector('.jobStatus').innerText
        const jobDescrip = parent.querySelector('.jobDescrip').innerText
        parent.querySelector('.jobStatus').innerText = 'Interviewed'


        const cardInfo = {
            jobName,
            jobTitle,
            jobInfo,
            jobStatus: 'Interviewed',
            jobDescrip
        }

        const isExist = interviewList.find(item => item.jobName === cardInfo.jobName)

        if (!isExist) {
            interviewList.push(cardInfo)
        }
        counter()
        function interviewRendering() {
            filteredSection.innerHTML = ''

            for (const interview of interviewList) {
                console.log(interview);

                const div = document.createElement('div')
                div.className = 'flex justify-between p-6 bg-white shadow'
                div.innerHTML = `
                <div class="space-y-3">
                    <div>
                        <h1 class="text-xl font-bold jobName">${interview.jobName}</h1>
                        <p class="text-semibold text-sm text-black/70 jobTitle">${interview.jobTitle}</p>
                    </div>
                    <p class="text-semibold text-sm text-black/70 jobInfo">
                        ${interview.jobInfo}
                    <div>
                        <p class="bg-gray-200 px-3 rounded-sm inline-block text-sm font-semibold jobStatus">${interview.jobStatus}</p>
                        <p class="text-semibold text-sm text-black/70 jobDescrip">${interview.jobDescrip}</p>
                    </div>
                    <div>
                        <button class="btn btn-outline btn-success">INTERVIEW</button>
                        <button class="btn btn-outline btn-secondary">REJECTED</button>

                    </div>
                </div>
                <div>
                    <i class="fa-solid fa-trash-can cursor-pointer"></i>
                </div>
            `
                filteredSection.appendChild(div)
            }
        }
        interviewRendering()
    }
    else if (event.target.classList.contains('rejectedBtn')) {
        const parent = event.target.parentNode.parentNode
        const jobName = parent.querySelector('.jobName').innerText
        const jobTitle = parent.querySelector('.jobTitle').innerText
        const jobInfo = parent.querySelector('.jobInfo').innerText
        const jobStatus = parent.querySelector('.jobStatus').innerText
        const jobDescrip = parent.querySelector('.jobDescrip').innerText
        parent.querySelector('.jobStatus').innerText = 'Interviewed'


        const cardInfo = {
            jobName,
            jobTitle,
            jobInfo,
            jobStatus: 'Interviewed',
            jobDescrip
        }

        const isExist = interviewList.find(item => item.jobName === cardInfo.jobName)

        if (!isExist) {
            interviewList.push(cardInfo)
        }
        counter()
        function interviewRendering() {
            filteredSection.innerHTML = ''

            for (const interview of interviewList) {
                console.log(interview);

                const div = document.createElement('div')
                div.className = 'flex justify-between p-6 bg-white shadow'
                div.innerHTML = `
                <div class="space-y-3">
                    <div>
                        <h1 class="text-xl font-bold jobName">${interview.jobName}</h1>
                        <p class="text-semibold text-sm text-black/70 jobTitle">${interview.jobTitle}</p>
                    </div>
                    <p class="text-semibold text-sm text-black/70 jobInfo">
                        ${interview.jobInfo}
                    <div>
                        <p class="bg-gray-200 px-3 rounded-sm inline-block text-sm font-semibold jobStatus">${interview.jobStatus}</p>
                        <p class="text-semibold text-sm text-black/70 jobDescrip">${interview.jobDescrip}</p>
                    </div>
                    <div>
                        <button class="btn btn-outline btn-success">INTERVIEW</button>
                        <button class="btn btn-outline btn-secondary">REJECTED</button>

                    </div>
                </div>
                <div>
                    <i class="fa-solid fa-trash-can cursor-pointer"></i>
                </div>
            `
                filteredSection.appendChild(div)
            }
        }
        interviewRendering()
    }

})

document.getElementById('jobsCard')
    .addEventListener('click', function (event) {
        if (event.target.classList.contains('deleteBtn')) {
            const jobCard = document.querySelector('.jobCard')
            jobCard.remove()
            totalCount.innerText = jobsCard.children.length
        }
    })