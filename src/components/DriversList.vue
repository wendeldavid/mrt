<script setup>
import { Storage } from '../storage/storage'

const storage = Storage();

</script>

<template>
    <div class="container">
        <h3 class="p-3 text-center">Lista de Pilotos</h3>
        <table class="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Remover</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Short Name</th>
                    <th>Player ID</th>
                    <th>nationality</th>
                    <th>driverCategory</th>
                    <th>raceNumber</th>
                    <th>defaultGridPosition</th>
                    <th>forcedCarModel</th>
                    <th>overrideDriverInfo</th>
                    <th>isServerAdmin</th>
                    <th>overrideCarModelForCustomCar</th>
                    <th>configVersion</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="entry in storage.getDrivers.entries" :key="entry">
                    <td><button type="button" class="btn btn-danger btn-sm" @click="storage.removeDriver(entry)">Remover</button></td>
                    <td>{{entry.drivers[0].firstName}}</td>
                    <td>{{entry.drivers[0].lastName}}</td>
                    <td>{{entry.drivers[0].shortName}}</td>
                    <td>{{entry.drivers[0].playerID}}</td>
                    <td>{{entry.drivers[0].nationality}}</td>
                    <td>{{entry.drivers[0].driverCategory}}</td>
                    <td>{{entry.raceNumber}}</td>
                    <td>{{entry.defaultGridPosition}}</td>
                    <td>{{entry.forcedCarModel}}</td>
                    <td>{{entry.overrideDriverInfo}}</td>
                    <td>{{entry.isServerAdmin}}</td>
                    <td>{{entry.overrideCarModelForCustomCar}}</td>
                    <td>{{entry.configVersion}}</td>
                </tr>

            </tbody>
        </table>
    </div>    
</template>

<style>
.table {
    color: white;
}
</style>