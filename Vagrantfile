# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = '2'

MEMORY=2048
CORES=2

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = 'hashicorp/precise64'
  config.vm.hostname = 'cmisutah'

  config.vm.network 'forwarded_port', guest: 8000, host: 8000

  config.ssh.forward_agent = true
  config.vm.provision 'shell', path: 'vagrant/setup.sh'
end
