package com.alienslab.permissionsettings;

import android.content.Context;
import android.support.v4.app.NotificationManagerCompat;

/**
 * Created by applepc on 26/09/2017.
 */

public class NotificationsUtils {
    public static boolean isNotificationEnabled(Context context) {
        return NotificationManagerCompat.from(context).areNotificationsEnabled();
    }
}
