<template>
    <h1>Adicionar Piloto</h1>
    <div class="form-group">
        <div class="input-row">
            <div>
                <input id="firstName" class="form-control form-control-sm" placeholder="firstName">
            </div>
            <div>
                <input id="lastName" class="form-control form-control-sm" placeholder="lastName">
            </div>
            <div>
                <input id="shortName" class="form-control form-control-sm" placeholder="shortName">
            </div>
            <div>
                <input id="playerID" class="form-control form-control-sm" placeholder="playerID">
            </div>
            <div>
                <input id="nationality" class="form-control form-control-sm" placeholder="nationality" type="number" min="-1" max="999">
            </div>
            <div>
                <input id="driverCategory" class="form-control form-control-sm" placeholder="driverCategory" type="number" min="-1" max="999">
            </div>
            <div>
                <input id="raceNumber" class="form-control form-control-sm" placeholder="raceNumber" type="number" min="-1" max="999">
            </div>
            <div>
                <input id="defaultGridPosition" class="form-control form-control-sm" placeholder="defaultGridPosition" type="number" min="-1" max="999">
            </div>
            <div>
                <input id="forcedCarModel" class="form-control form-control-sm" placeholder="forcedCarModel" type="number" min="-1" max="999">
            </div>
            <div>
                <input id="overrideDriverInfo" class="form-control form-control-sm" placeholder="overrideDriverInfo" type="number" min="0" max="1">
            </div>
            <div>
                <input id="isServerAdmin" class="form-control form-control-sm" placeholder="isServerAdmin" type="number" min="0" max="1">
            </div>
            <div>
                <input id="overrideCarModelForCustomCar" class="form-control form-control-sm" placeholder="overrideCarModelForCustomCar" type="number" min="0" max="1">
            </div>
            <div>
                <input id="configVersion" class="form-control form-control-sm" placeholder="configVersion" type="number" min="0" max="1">
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
                "nationality": document.getElementById("nationality").value,
                "driverCategory": document.getElementById("driverCategory").value,
                "playerID": document.getElementById("playerID").value
        }
        ],
        "customCar": "",
        "raceNumber": document.getElementById("raceNumber").value,
        "defaultGridPosition": document.getElementById("defaultGridPosition").value,
        "forcedCarModel": document.getElementById("forcedCarModel").value,
        "overrideDriverInfo": document.getElementById("overrideDriverInfo").value,
        "isServerAdmin": document.getElementById("isServerAdmin").value,
        "overrideCarModelForCustomCar": document.getElementById("overrideCarModelForCustomCar").value,
        "configVersion": document.getElementById("configVersion").value
    }
    
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("shortName").value = "";
    document.getElementById("playerID").value = "";
    document.getElementById("nationality").value = "";
    document.getElementById("driverCategory").value = "";
    document.getElementById("forcedCarModel").value = "";
    document.getElementById("defaultGridPosition").value = "";
    document.getElementById("overrideDriverInfo").value = "";
    document.getElementById("isServerAdmin").value = "";
    document.getElementById("overrideCarModelForCustomCar").value = "";
    document.getElementById("configVersion").value = "";
    

    storage.addDriver(newData);
}
</script>