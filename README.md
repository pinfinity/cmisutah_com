CMISUtah.com
============
Source code for CMISUtah.com

## Getting Started
Everything runs on a Vagrant VM for development and demo purposes. Make sure you have the latest releases of Vagrant and Virtual Box:

* https://www.virtualbox.org/wiki/Downloads
* http://www.vagrantup.com/downloads.html

If this is your first time in the project, you'll need to cd into the project directory and fire up the Vagrant box for the first time:

    vagrant up

Which will run the full provisioning script to set up the box. If you're curious what is happening, check out the Vagrantfile and provisioning script at `vagrant/setup.sh`.

From time to time you may also need to update your box. Do this by running

    vagrant up --provision

instead of the usual `vagrant up`.

## Development
Starting the virtualbox with

    vagrant up

will start the dev server and automatically start Nginx and PHP5 FPM. All you'll need to do from that point is point your web browser to 'http://localhost:8000' and edit the project files from your favorite text editor (not from within the dev server, but on your own host machine).

## SSH access to the Dev Server
Fire up your VBox with

    vagrant up

from the root of the demo-dashbord project directory. Once it's up, you can log into it with

    vagrant ssh

However, logging into the virtualbox should rarely be needed.

## Notes
- To use the new theme you'll need to navigate to `_config/settings.yaml` on your machine and change the `_theme` to `utah` near line 33.
- Grunt runs from the  `_themes/foundation5/` directory.  `grunt clean` has been added to help deal with aggressive caching during development. It `clean` also runs during `grunt watch`.