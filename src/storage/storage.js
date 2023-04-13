var dataTemplate = {
    "entries": [],
    "configVersion": 1,
    "forceEntryList": 0
}

var data = {};

import { defineStore } from 'pinia'

export const Storage = defineStore({
    id: 'drivers',
    state: () => ({
      data: data
    }),
    getters: {
      getDrivers: (state) => state.data
    },
    actions: {
      loadDrivers(rawData) {
        this.data = rawData;
      },
      addDriver(driverData) {
        console.log("add driver " + driverData);
        if (!this.data.entries) {
          this.data = dataTemplate;
        }
        this.data.entries.push(driverData);
      },
      removeDriver(driverData) {
        console.log("remove driver " + driverData);
        const driversList = this.data.entries;
        driversList.splice(driversList.indexOf(driverData), 1);
      }
    }
  })
