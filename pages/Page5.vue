<template>
    <div>

        <!-- search bar  -->
        <div class="text-center my-3 mx-3 ">
            <div class="bg-slate-200 py-1 rounded-full">
                <i class="fa fa-search mr-2 pb-1 text-slate-600"></i>
                <input type="text" class=" bg-slate-200 w-60 outline-none" placeholder="Search Location">
            </div>
        </div>
        <!-- ---------- -->
       


        <div class="flex justify-around mx-2 my-3">
            <div>
                <img src="../assets/Shaniwaarwada_Pune.jpg" class="" style="width: 200px;" alt="">
            </div>
            <div class="mx-1 inline-flex ">
                <p class="text-sm text-justify px-3" style="  ">
                    1. By 1758, at least a thousand people lived in the fort. 
                </p>
                <i class="fa fa-angle-right mx-2 pt-3"></i>
            </div>
        </div>

        <div class="flex justify-around mx-2 my-3">
            <div>
                <img src="../assets/Shaniwaarwada_Pune.jpg" class="" style="width: 200px;" alt="">
            </div>
            <div class="mx-1 inline-flex ">
                <p class="text-sm text-justify px-3" style="  ">
                    1. By 1758, at least a thousand people lived in the fort. 
                </p>
                <i class="fa fa-angle-right mx-2 pt-3"></i>
            </div>
        </div>

        <div class="flex justify-around mx-2 my-3">
            <div>
                <img src="../assets/Shaniwaarwada_Pune.jpg" class="" style="width: 200px;" alt="">
            </div>
            <div class="mx-1 inline-flex ">
                <p class="text-sm text-justify px-3" style="  ">
                    1. By 1758, at least a thousand people lived in the fort. 
                </p>
                <i class="fa fa-angle-right mx-2 pt-3"></i>
            </div>
        </div>

        <!-- -------------- -->
        <div class="flex justify-around bg-cyan-800 text-white rounded-t-lg py-2">
            <div>
                <i class="fa fa-home ml-3"></i><br>
                <p> <NuxtLink to="/TGHomeP">Home</NuxtLink> </p>
            </div>
            <div>
                <i class="fa fa-map ml-2"></i>
                <p><NuxtLink to="/Map">Map</NuxtLink></p>
            </div>
        </div>
      

        <!-- ----------- -->
    </div>
</template>

<script setup lang="ts">
import { Ref } from 'nuxt/dist/app/compat/capi';




</script>

<style scoped>

</style>