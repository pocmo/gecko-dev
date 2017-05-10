#!/usr/bin/env bash

./mach boostrap
./mach configure

git clone https://github.com/glandium/git-cinnabar
export PATH=$PATH:./git-cinnabar/
git cinnabar download

git remote set-url origin hg::https://hg.mozilla.org/mozilla-central
git -c cinnabar.graft=true remote update

