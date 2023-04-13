<template>
    <h1>Adicionar Piloto</h1>
    <div class="form-group">
        <div class="input-row ">
            <div>
                <!-- <label>firstName</label> -->
                <input id="firstName" class="form-control form-control-sm" placeholder="firstName">
            </div>
            <div>
                <!-- <label>lastName</label> -->
                <input id="lastName" class="form-control form-control-sm" placeholder="lastName">
            </div>
            <div>
                <!-- <label>Shortname</label> -->
                <input id="shortName" class="form-control form-control-sm" placeholder="shortName">
            </div>
            <div>
                <!-- <label>playerID</label> -->
                <input id="playerID" class="form-control form-control-sm" placeholder="playerID">
            </div>

        </div>

        <div>
            <button id="add" type="submit" class="add btn btn-success" @click="addPilot">Adicionar</button>
        </div>

    </div>
</template>

<style>
    div {
      padding-bottom: 10px;
    }
    .output {
      width: 500px;
      height: 100px;
      background-color: lightgrey;
    }
    button.add {
      padding: 10px;
    }
</style>


<script setup>
import { Storage } from '../storage/storage.js'
const storage = Storage();


function addPilot() {
    var newData = {
        "drivers": [
            {
                "firstName": document.getElementById("firstName").value,
                "lastName": document.getElementById("lastName").value,
                "shortName": document.getElementById("shortName").value,
                "nationality": -1,
                "driverCategory": -1,
                "playerID": document.getElementById("playerID").value
        }
        ],
        "customCar": "",
        "raceNumber": -1,
        "defaultGridPosition": -1,
        "forcedCarModel": -1,
        "overrideDriverInfo": 0,
        "isServerAdmin": 0,
        "overrideCarModelForCustomCar": 1,
        "configVersion": 0
    }
    
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("shortName").value = "";
    document.getElementById("playerID").value = "";

    storage.addDriver(newData);
}
</script>