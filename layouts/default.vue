<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div>

        <div class="drawer">
            <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
            <div class="flex flex-col drawer-content ">
                <!-- Navbar -->
                <div class="w-full navbar bg-red-500 text-white">
                    <div class="flex-none lg:hidden">
                        <label for="my-drawer-3" class="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                class="inline-block w-6 h-6 stroke-current">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </label>
                    </div>
                    <div class="flex-2 px-2 mx-2">Local Audio Guides</div>
                    <!-- <div class="flex-1">
                        <div class="ml-10"> <i class="fa fa-language" style="font-size:24px"></i></div>
                    </div> -->
                </div>
                <!-- Page content here -->
                <slot></slot>
            </div>
            <div class="drawer-side">
                <label for="my-drawer-3" class="drawer-overlay"></label>
                <div class="p-4 menu bg-base-100" style="width: 220px;">
                    <div class=" h-96 ">

                        <div style="">

                            <div class="bg-red-600 text-white pl-3 text-sm font-bold py-2">
                                <p>Settings</p>
                            </div>

                            <!-- <div class="bg-white text-black shadow-lg">
                                <div class="text-md flex justify-between px-2 py-2">
                                    <div>
                                        <p>Background Music</p>
                                    </div>
                                    <div><input type="checkbox" class="toggle toggle-error" style=";" checked /></div>
                                </div>
                                <hr>
                                <div class="px-2 py-2">
                                    <p class="text-md">Background Music Track</p>
                                    <br>
                                    <span class="inline-flex pb-3">
                                        <input type="radio" name="radio-1" class="radio" />
                                        <p class="mx-2">Dhol Lezim</p>
                                    </span>
                                    <br>
                                    <span class="inline-flex pb-3">
                                        <input type="radio" name="radio-1" class="radio" />
                                        <p class="mx-2">Indian</p>
                                    </span>
                                    <br>
                                    <span class="inline-flex pb-3">
                                        <input type="radio" name="radio-1" class="radio" />
                                        <p class="mx-2">Jazz</p>
                                    </span>
                                </div>
                                <hr>
                         
                                <div>
                                    <div class="flex justify-between m-2">
                                        <div>
                                            <p>Autoplay</p>
                                        </div>
                                        <div><input type="checkbox" class="toggle toggle-error" checked /></div>
                                    </div>
                                </div> 
                                <hr>
                                <div class="m-2">
                                    <p>Leave Feedback</p>
                                </div>
                                <hr> -->
                            <div class="m-2">
                                <a href="https://www.saapttrini.com/"> Saapttrini Software Solution</a>
                            </div>
                            <hr>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script setup>


</script>