#!/usr/bin/env bash
echo "************************************************************"
echo "Updating packages..."
echo "************************************************************"
sudo apt-get update

echo "************************************************************"
echo "Installing apt-add-repository"
echo "************************************************************"
sudo apt-get install -y python-software-properties

echo "************************************************************"
echo "Installing good-to-have packages"
echo "************************************************************"
sudo apt-get install -y build-essential git-core vim curl wget

echo "************************************************************"
echo "Adding ppa:nginx/stable ppa:chris-lea/node.js"
echo "************************************************************"
sudo apt-add-repository -y ppa:nginx/stable
sudo apt-add-repository -y ppa:chris-lea/node.js

echo "************************************************************"
echo "Updating packages again ..."
echo "************************************************************"
sudo apt-get update

echo "************************************************************"
echo "Installing nodejs"
echo "************************************************************"
sudo apt-get install -y nodejs
sudo npm install -g grunt-cli bower

echo "************************************************************"
echo "Installing nginx"
echo "************************************************************"
sudo apt-get install -y nginx

echo "************************************************************"
echo "Installing PHP5 FPM"
echo "************************************************************"
sudo apt-get install -y \
php5 \
php5-fpm \
php5-common \
php5-dev \
php5-gd \
php5-xcache \
php5-mcrypt \
php5-pspell \
php5-snmp \
php5-xsl \
php5-imap \
php5-geoip \
php5-curl \
php5-cli
if [ ! -d /var/run/php5-fpm ]; then
  sudo mkdir /var/run/php5-fpm
fi

echo "************************************************************"
echo "Cleaning up ..."
echo "************************************************************"
sudo apt-get autoremove
sudo apt-get autoclean

echo "************************************************************"
echo "Installing .bash_profile"
echo "************************************************************"
cp /vagrant/vagrant/.bash_profile /home/vagrant/.bash_profile
chown vagrant:vagrant /home/vagrant/.bash_profile

echo "************************************************************"
echo "Configuring PHP5 FPM"
echo "************************************************************"
sudo cp /vagrant/vagrant/default_nginx.conf /etc/php5/fpm/pool.d/default_nginx.conf
sudo cp /vagrant/vagrant/cmisutah_com.conf /etc/php5/fpm/pool.d/cmisutah_com.conf
sudo cp /vagrant/vagrant/index.php /usr/share/nginx/html/index.php

echo "************************************************************"
echo "Configuring Nginx site"
echo "************************************************************"
sudo cp /vagrant/vagrant/nginx_default /etc/nginx/sites-available/default
sudo cp /vagrant/vagrant/cmisutah_com /etc/nginx/sites-enabled/cmisutah_com
sudo cp /vagrant/vagrant/nginx.conf /etc/nginx/nginx.conf


echo "************************************************************"
echo "Restarting services ..."
echo "************************************************************"
sudo service php5-fpm restart
sudo service nginx restart

echo "************************************************************"
echo "Installing RVM and newer Ruby..."
echo "************************************************************"
curl -sSL https://get.rvm.io | bash -s stable --ruby

echo "************************************************************"
echo "Correct ownership of the FPM socket ..."
echo "************************************************************"
sudo chown vagrant:www-data /var/run/php5-fpm-cmisutah_com.socket
