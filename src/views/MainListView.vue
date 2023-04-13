<script>
import DriversList from '../components/DriversList.vue'
import Download from '../components/Download.vue'

import { Storage } from '../storage/storage.js'

export default {

    components: {
        DriversList,
        Download
    },

    data() {
        return Storage().state
    },
    
    methods : {
        readFile() {
            var file = this.$refs.file.files[0];
            const reader = new FileReader();
            reader.onload = (res) => {
                console.log("load file");
                var content = JSON.parse(res.target.result);
                
                const storage = Storage()
                storage.loadDrivers(content);
            };
            reader.onerror = (error) => {
                console.log(error);
                alert(error);
            }
            reader.readAsText(file);
        }
    }
}
</script>

<template>
    <div>
        
        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text">Upload</span>
            </div>
            <div class="custom-file">
                <input type="file" class="custom-file-inpug" ref="file" id="inputGroupFile01" @change="readFile()" />
                <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
            </div>
        </div>
        
        
        <p>
            <Download />
        </p>
        
        <p>
            <DriversList />
        </p>

    </div>
    
</template>

<style>
</style>