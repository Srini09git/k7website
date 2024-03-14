import React from 'react'

export const GoogleReview = () => {
    return (
        <div className=' bg-gradient-to-r from-gray-300 to-gray-400 p-10 md:p-20 flex items-center  justify-around'>
            <div class=" flex items-center justify-center gap-x-6">
                <div class="hidden sm:block -space-x-2 overflow-hidden">
                    <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" />
                    <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" />
                    <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2.25&amp;w=256&amp;h=256&amp;q=80" alt="" />
                    <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" />
                    <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" />
                </div>
                <div class="boder-none sm:border-l-2 border-black sm:pl-8">
                    <div class="flex justify-center sm:justify-start">
                        <h3 class="text-2xl font-semibold mr-2">4.6</h3>

                        <img class="w-5" src="https://www.svgrepo.com/show/513354/star.svg" alt="stars-icon" />
                    </div>
                    <div>
                        <h3 class="text-sm">Rated by 45
                        + on google.</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
