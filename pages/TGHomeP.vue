<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div>
    
        <!-- header  -->
        <div>
            <div class="bg-red-500 text-white py-2 text-center">
                <p>Pune Audio Guids</p>
            </div>
                <div class="mx-3 text-sm py-2 px-3 underline bg-slate-400 mb-5 rounded-b-md text-white">
                    <span>Powered by Sapttrini Software Solution pvt</span>
                </div>
        </div>

        <!-- img  -->
        <div>
            <div class="mx-5">
            <img src="../assets/Shaniwaarwada_Pune.jpg" alt="">
            </div>
        </div>
         <br>
         <br>
        <!-- form  -->
        <div class="px-2">
           
        <div class="flex justify-between pt-4 ">
           
        <div><p>Audio Guide Language</p></div>  
        <div class="">   
            <select name="" id="" style="outline: none;">
                <option value="">Marathi</option>
                <option value="">Hindi</option>
                <option value="">English</option>
            </select>
        </div>   
           
        </div>
        
           <hr>
           <br>
           <input type="text" placeholder="Name" class="w-full border-b-2 mb-3 outline-none">
           <br>
           <input type="number" placeholder="Mobile No. (+91)" class="w-full border-b-2 outline-none">
        </div>
       

          <br>

         <!-- footer  -->
         <div class="text-center">
            <div>
                <button class="bg-red-600 text-white text-xl px-4 py-2 rounded-full"> 
                    <i class="fa fa-ticket" style="font-size:20px"></i>
                     <NuxtLink to="/secondpage">ACTIVATE TICKET</NuxtLink>
                </button>
            </div>
            <br>
            <hr>
            <p class="text-red-500 mb-3"><b>Free Sample Audio</b></p>

         </div>
       
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: false
})

</script>

<style>
select, option{
   padding-inline: 10px;
   
}


</style>