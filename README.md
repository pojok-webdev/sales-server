** Server for Sales team **

nano /etc/init/node-app.conf

start on filesystem and started networking
respawn
chdir /home/deploy/node-app
env NODE_ENV=production #change this to staging if this is a staging server
env PORT=3000
exec /usr/local/bin/node bin/www

start node-app
stop node-app
restart node-app #performs a stop and start. This is all we need for deployments

echo "deploy ALL=(root) NOPASSWD: /sbin/restart node-app" >> /etc/sudoers


working solution:
in ubuntu dist > 15.04 they uses systemd instead of upstart so my solution was

log to root
su

nano /lib/systemd/system/<service name>.service

and write this

[Unit]
Description=Start <appname> node.js app

[Service]
ExecStart=/usr/local/bin/node /home/deploy/<app name>/bin/www
Restart=always

to start and stop service use

service <service name> start
service <service name> stop

to make it start with boot

cd /lib/systemd/system/
sudo systemctl enable <service name>
systemctl add-wants multi-user.target <servicename>.service
@manuelgomezo
