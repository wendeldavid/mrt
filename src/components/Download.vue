<script setup>

import { Storage } from '../storage/storage.js'

const storage = Storage();

function downloadFile() {
    console.log("download file");

    // const data = storage.getDrivers();
    // const jsonData = JSON.stringify(data);
    const jsonData = document.getElementById("downloadGambi").innerHTML;

    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(jsonData));
    element.setAttribute('download', "entrylist.json");

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);

}

</script>

<template>
    <div>
        <button type="button" class="btn btn-primary" @click="downloadFile">Download</button>
        <label id="downloadGambi" class="invisible">{{storage.getDrivers}}</label>
    </div>
    
</template>

<style>
.download-component {
  display: block;
  margin: 10px;
}
label.invisible {
    display: none;
}
</style>