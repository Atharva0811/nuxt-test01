<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <div>

        <NuxtLayout name="custome">
            <div>
                <!-- header one  -->
                <div class="sticky top-0">

                    <!-- <div class="bg-red-700 py-3 text-center text-white">
                        <p>Local Audio Guides</p>
                    </div> -->
                    <!-- header two  -->
                    <div class="grid grid-cols-4 text-white bg-red-500 py-2">
                        <!-- 1st div  -->
                        <div class="flex"><a href="/Map">
                                <i class="fa fa-angle-left px-2 mt-1"></i>
                                <p>Back</p>
                            </a>
                        </div>

                        <!-- 2nd div  -->
                        <div class="col-span-2 mr-2 text-sm">

                            <span @click="content = !content">Shaniwarwada (शनिवार</span>
                            <span v-if="content ? '' : 'display'">...</span>
                            <span v-show="content">वाडा)</span>
                        </div>

                        <!-- 3rd div  -->
                        <!-- <div class="flex">
                            <p>Selfie</p>
                            <i class="fa fa-camera mx-2 mt-1" style="font-size:15px"></i>
                        </div> -->
                    </div>
                </div>
                <!-- image section -->
                <div class="my-3 mx-2">
                    <div class="w-92 carousel rounded-box">
                        <div class="carousel-item w-full">
                            <img src="../assets/Shaniwaarwada_Pune.jpg" class="w-full"
                                alt="Tailwind CSS Carousel component" />
                        </div>
                        <div class="carousel-item w-full">
                            <img src="../assets/Shaniwar-wada_600.jpg" class="w-full"
                                alt="Tailwind CSS Carousel component" />
                        </div>

                    </div>
                </div>

                <!-- image content -->
                <div class="mx-2 flex">
                    <div class="flex-1"></div>
                    <div>
                        <table class="border-2 flex-1">
                            <tr>
                                <th>General</th>
                                <td>18373373383,<br>636373777373</td>
                            </tr>
                            <tr>
                                <th>Name</th>
                                <td>Shaniwarwada (शनिवार वाडा)</td>
                            </tr>
                            <tr>
                                <th>Category</th>
                                <td>Heritage Walk</td>
                            </tr>
                        </table>
                    </div>
                    <div class="flex-1"></div>
                </div>
                <!-- a sticky footer starts here  -->
                <div style="position: sticky; bottom: 0;">
                    <div class="mx-1 my-2 bg-slate-400  px-2 py-2 rounded-md " style="opacity: 20px;">
                        <div class="px-5 bg-white rounded-full  ">
                            <audio controls autoplay class="-ml-6" style="width: 303px;">
                                <source src="../assets/Audio.mp3" />
                            </audio>

                        </div>

                    </div>
                </div>
            </div>
        </NuxtLayout>

    </div>
</template>

<script setup lang="ts">
import { Ref } from 'nuxt/dist/app/compat/capi';
// definePageMeta({
//     default: 'custome'
// })

const content: Ref<boolean> = ref(false)

</script>

<style>
table th {
    padding-inline: 8px;
    text-align: left;
    font-size: small;
    padding-block: 2px;
}

table td {
    padding-inline: 10px;
    text-align: left;
    font-size: small;
    padding-block: 2px;
}
</style>