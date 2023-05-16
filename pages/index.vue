<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <div>

    <!-- header  -->
    <!-- <div>

          <div class="bg-red-500 grid grid-cols-4 text-white py-2 text-center">
              <div><i class="	fa fa-navicon" style="color: white;" @click="sidebar =! sidebar"></i></div>
              <div class="col-span-2"><p>Pune Audio Guids</p></div>
              <div><i class="fa fa-language" style="font-size:24px"></i></div>
          </div>
              
          <div class="mx-3 text-sm py-2 px-3 underline bg-slate-400 mb-5 rounded-b-md text-white" style="z-index: 1;">
              <span style="z-index: ; ">Powered by Sapttrini Software Solution pvt</span>
          </div>
          
           sidebar starts here  
          <Transition name="fade">
          <div class=" h-96 -mt-14 "  style="z-index: 2; float: left; position:sticky; " v-show="false">
           
            <div  style="">  

           <div class="bg-red-600 text-white pl-3 text-lg font-bold py-2" >
              <p>Settings</p>
           </div>   

           <div class="bg-white text-black shadow-lg">   
           <div class="text-md flex justify-between px-2 py-2"> 
              <div><p>Background Music</p></div>
              <div><input type="checkbox" class="toggle toggle-error" style="" checked /></div>
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
              <div><p>Autoplay</p></div>
              <div><input type="checkbox" class="toggle toggle-error" checked /></div>
              </div>
           </div>
            
           <hr>
           <div class="m-2">
              <p>Leave Feedback</p>
           </div>
           <hr>
           <div class="m-2">
              Exit Gunj India
           </div>
           <hr>
          </div>
      </div>
  </div>
</Transition>
         
      </div> -->
    <!-- -----------------the main page content starts here -------------------- -->

    <div class="flex">
      <div class="flex-1"></div>
      <div class="flex-2">
        <span>
          <img src="../assets/Shaniwaarwada_Pune.jpg" style="width: 200px;" alt="">
        </span>
      </div>
      <div class="flex-1"></div>
    </div>

    <div class="flex">
      <div class="flex-1"></div>
      <div class="flex-2">
        <div class="py-5 px-3 mx-3 rounded-b-lg bg-slate-500" style="">
          <p class="text-white my-3 mx-3">Shaniwarwada - Place where time stops</p>
          <div class="flex justify-between">
            <div> <button class="bg-red-600 text-white rounded-lg text-sm px-3 py-2">
                <a href="/HistoricD">Start Tour</a>
              </button></div>
            <div> <button class="bg-black opacity-2 text-white">00:00:00</button> </div>
          </div>
        </div>
      </div>
      <div class="flex-1"></div>
    </div>

    <!-- ----------------- -->
    <!-- <div class="my-4 mx-2 flex justify-between">
          <div> <button class="border-2 text-black rounded-lg text-sm px-2 py-1">Start Tour</button></div>
          <div> <button class="bg-blue-600 opacity-2 rounded-lg text-white px-2 py-1">Take a Selfie</button> </div>
      </div> -->

    <!-- ----------------- -->

    <div class="mx-2">
      <div class="inline-flex ">
        <i class="fa fa-user-circle-o" style="font-size:24px"></i>
        <p class="mx-2">Welcome</p>
      </div>
      <!-- paragraph  -->
      <p class="">Shaniwar Wada is a historical fortification in the city of Pune, India.
        Built in 1732,[1] it was the great seat of the Peshwas of the Maratha Empire until 1818. Following the rise
        of the Maratha Empire, the palace became the center of Indian politics in the 18th century.[2]
        The fort itself was largely destroyed in 1828 by an unexplained fire, but the surviving structures are now
        maintained as a tourist site.</p>
    </div>

    <!-- --------------- -->

    <!-- <div class="my-3">
          <button class="text-white rounded-full bg-blue-500  mx-2 my-1 px-3 py-2">Leave Feedback</button>
          <button class="text-black border-2 rounded-full  mx-2 my-1 px-3 py-2">
              <NuxtLink to="/TGHomeP"> Exit Gunj India</NuxtLink>
          </button>
      </div> -->

    <!-- -------footer-------- -->
    <div class="flex justify-around bg-cyan-800 text-white rounded-t-lg py-2">
      <div>
        <i class="fa fa-home ml-3"></i><br>
        <p>Home</p>
      </div><a href="/Map">
        <div>
          <i class="fa fa-map ml-2"></i>
          <p> Map</p>
        </div>
      </a>
    </div>

  </div>
</template>

<script setup lang="ts">
import { Ref } from 'nuxt/dist/app/compat/capi';

const sidebar: Ref<boolean> = ref(false);

</script>

<style>
.show {
  width: 250px;
  transition: 1s ease-in-out;
}

.hide {
  width: 0px;
  transition: 1s ease-in-out;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */
  {
  opacity: 0;
  /* transition: opacity .5s; */
}
</style>