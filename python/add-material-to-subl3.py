#!/bin/python

import json
import os

home_path = os.path.expanduser('~')
config_file = home_path + "/.config/sublime-text-3/Packages/User/Preferences.sublime-settings"

with open(config_file) as data_file:    
    data = json.load(data_file)

data["color_scheme"] = "Packages/Material Theme/schemes/OLD/Material-Theme-Darker.tmTheme"
data["theme"] = "Material-Theme-Darker.sublime-theme"

with open(config_file, 'w') as data_file:
    json.dump(data, data_file)

os.system("killall subl3 && subl3 &")
