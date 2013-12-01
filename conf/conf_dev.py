# Development settings file. These settings override the base settings
# defined in conf.py

from os import path

DEBUG = True

PROJECT_PATH = path.abspath('')

STATIC_DIR = path.join(PROJECT_PATH, 'static/')

assert path.isdir(STATIC_DIR)
