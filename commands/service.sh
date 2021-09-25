systemctl start SERVICE # Use it to start a service. Does not persist after reboot
systemctl stop SERVICE # Use it to stop a service. Does not persist after reboot
systemctl restart SERVICE # Use it to restart a service
systemctl reload SERVICE # If the service supports it, it will reload the config files related to it without interrupting any process that is using the service.
systemctl status SERVICE # Shows the status of a service. Tells whether a service is currently running.
systemctl enable SERVICE # Turns the service on, on the next reboot or on the next start event. It persists after reboot.
systemctl disable SERVICE # Turns the service off on the next reboot or on the next stop event. It persists after reboot.
systemctl is-enabled SERVICE # Check if a service is currently configured to start or not on the next reboot.
systemctl is-active SERVICE # Check if a service is currently active.
