const rejectedBtn = document.getElementById('rejectedBtn')
const interviewBtn = document.getElementById('interviewBtn')
const allJobs = document.getElementById('allJobBtn')
let jobsCard = document.getElementById('jobsCard')
let totalCount = document.getElementById('totalCount')
let interviewCount = document.getElementById('interviewCount')
let rejectedCount = document.getElementById('rejectedCount')
let TotalJobs = document.getElementById('TotalJobs')
let interviewSection = document.getElementById('interviewSection')
let rejectedSection = document.getElementById('rejectedSection')
let interviewList = []
let rejectedList = []
let courrentStatus = 'All'
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
        interviewSection.classList.remove('hidden')
        rejectedSection.classList.add('hidden')
    }
    if (id === 'allJobBtn') {
        jobsCard.classList.remove('hidden')
        interviewSection.classList.add('hidden')
        rejectedSection.classList.add('hidden')
    }
    if (id === 'rejectedBtn') {
        jobsCard.classList.add('hidden')
        interviewSection.classList.add('hidden')
        rejectedSection.classList.remove('hidden')


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
        rejectedList = rejectedList.filter(item => item.jobName != cardInfo.jobName)
        console.log({ interviewList, rejectedList });

        counter()

        interviewRendering()
        rejectedRendering()
    }
    else if (event.target.classList.contains('rejectedBtn')) {
        const parent = event.target.parentNode.parentNode
        const jobName = parent.querySelector('.jobName').innerText
        const jobTitle = parent.querySelector('.jobTitle').innerText
        const jobInfo = parent.querySelector('.jobInfo').innerText
        const jobStatus = parent.querySelector('.jobStatus').innerText
        const jobDescrip = parent.querySelector('.jobDescrip').innerText
        parent.querySelector('.jobStatus').innerText = 'Rejected'


        const cardInfo = {
            jobName,
            jobTitle,
            jobInfo,
            jobStatus: 'Rejected',
            jobDescrip
        }

        const isExist = rejectedList.find(item => item.jobName === cardInfo.jobName)

        if (!isExist) {
            rejectedList.push(cardInfo)
        }
        interviewList = interviewList.filter(item => item.jobName != cardInfo.jobName)


        counter()

        rejectedRendering()
        interviewRendering()

    }

    if (event.target.classList.contains('deleteBtn')) {
        const jobCard = document.querySelector('.jobCard')
        jobCard.remove()

        const jobName = jobCard.querySelector('.jobName').innerText
        interviewList = interviewList.filter(item => item.jobName !== jobName)
        rejectedList = rejectedList.filter(item => item.jobName !== jobName)
        counter()
        rejectedRendering()
        interviewRendering()
    }

})
function interviewRendering() {

    if (interviewList.length === 0) {
        interviewSection.innerHTML = `
        <div class="flex flex-col items-center justify-center md:h-64 bg-gray-50 rounded-lg shadow-md">
                <!-- Icon -->
               <img src="assests/assignment_7959593 1.png" alt="">

                <!-- Heading -->
                <h2 class="text-gray-700 text-xl font-semibold mb-2">No jobs available</h2>

                <!-- Description -->
                <p class="text-gray-500 text-sm text-center">Check back soon for new job opportunities</p>
            </div>
        `
        return;
    }
    interviewSection.innerHTML = ''
    console.log(interviewList);

    for (const interview of interviewList) {
        // console.log(interview);

        const div = document.createElement('div')
        div.className = 'flex justify-between p-6 bg-white shadow jobCard'
        div.innerHTML = `
                <div  class="space-y-3 ">
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
                        <button class="btn btn-outline btn-success interviewBtn">INTERVIEW</button>
                        <button class="btn btn-outline btn-secondary rejectedBtn">REJECTED</button>

                    </div>
                </div>
                <div>
                    <i class="fa-solid fa-trash-can cursor-pointer deleteBtn"></i>
                </div>
            `
        interviewSection.appendChild(div)
    }
}
function rejectedRendering() {

    if (rejectedList.length === 0) {
        rejectedSection.innerHTML = `
        <div class="flex flex-col items-center justify-center md:h-64 bg-gray-50 rounded-lg shadow-md">
                <!-- Icon -->
               <img src="assests/assignment_7959593 1.png" alt="">

                <!-- Heading -->
                <h2 class="text-gray-700 text-xl font-semibold mb-2">No jobs available</h2>

                <!-- Description -->
                <p class="text-gray-500 text-sm text-center">Check back soon for new job opportunities</p>
            </div>
        `
        return;
    }
    rejectedSection.innerHTML = ''

    for (const rejected of rejectedList) {

        const div = document.createElement('div')
        div.className = 'flex justify-between p-6 bg-white shadow jobCard'
        div.innerHTML = `
                <div class="space-y-3">
                    <div>
                        <h1 class="text-xl font-bold jobName">${rejected.jobName}</h1>
                        <p class="text-semibold text-sm text-black/70 jobTitle">${rejected.jobTitle}</p>
                    </div>
                    <p class="text-semibold text-sm text-black/70 jobInfo">
                        ${rejected.jobInfo}
                    <div>
                        <p class="bg-gray-200 px-3 rounded-sm inline-block text-sm font-semibold jobStatus">${rejected.jobStatus}</p>
                        <p class="text-semibold text-sm text-black/70 jobDescrip">${rejected.jobDescrip}</p>
                    </div>
                    <div>
                        <button class="btn btn-outline btn-success interviewBtn">INTERVIEW</button>
                        <button class="btn btn-outline btn-secondary rejectedBtn">REJECTED</button>

                    </div>
                </div>
                <div>
                    <i class="fa-solid fa-trash-can cursor-pointer deleteBtn" ></i>
                </div>
            `
        rejectedSection.appendChild(div)
    }
}

