'use strict';
import { NativeModules } from 'react-native';
const { PermissionSettings } = NativeModules;

class AndroidNotificationsPermission {
  
  areNotificationsEnabled() {
    return new Promise((resolve, reject) => {
      PermissionSettings.areNotificationsEnabled((isEnable, error) => {
        if (error) {
          reject(error);
        } else {
          resolve(isEnable);
        }
      });
    })
  }
}

module.exports = new AndroidNotificationsPermission();
