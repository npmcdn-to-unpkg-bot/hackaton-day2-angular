#!/usr/bin/env bash

# install git
sudo apt-get update
sudo apt-get install -y git ant expect

# install java
sudo add-apt-repository ppa:webupd8team/java
sudo apt-get update
echo oracle-java8-installer shared/accepted-oracle-license-v1-1 select true | sudo /usr/bin/debconf-set-selections
sudo apt-get install -y oracle-java8-installer
sudo apt-get install -y oracle-java8-set-default

# install android SDK
ANDROID_SDK_FILENAME=android-sdk_r24.4.1-linux.tgz
ANDROID_SDK=http://dl.google.com/android/$ANDROID_SDK_FILENAME
curl -O $ANDROID_SDK
mv $ANDROID_SDK_FILENAME /home/vagrant
cd ~
tar -xzvf $ANDROID_SDK_FILENAME
sudo chown -R vagrant android-sdk-linux/
echo "ANDROID_HOME=~/android-sdk-linux" >> /home/vagrant/.bashrc
echo "PATH=\$PATH:~/android-sdk-linux/tools:~/android-sdk-linux/platform-tools" >> /home/vagrant/.bashrc

# install nvm
sudo apt-get install -y git-core curl
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.1/install.sh | bash
echo "source /home/vagrant/.nvm/nvm.sh" >> /home/vagrant/.profile
source /home/vagrant/.profile

# install node 4.4.5 LTS
nvm install 4.4.5
nvm alias default 4.4.5

# install cordova and ionic (beta version) globally
npm install -g cordova ionic@beta

# create a directory to store the data at and symlink it to home
cd /vagrant
mkdir -p hacks
cd ~
test -L hacks || ln -s /vagrant/hacks hacks

# add plugin to folder
cd hacks
git clone https://github.com/Cloudoki/ImageDetectionCordovaPlugin.git
# ionic start hackathon blank
# cd hackathon
# ionic plugin add https://github.com/Cloudoki/ImageDetectionCordovaPlugin.git
# ionic platform add android
