#!/usr/bin/env sh

function semverParseInto() {
    local RE='[^0-9]*\([0-9]*\)[.]\([0-9]*\)[.]\([0-9]*\)\([0-9A-Za-z-]*\)'
    #MAJOR
    eval $2=`echo $1 | sed -e "s#$RE#\1#"`
    #MINOR
    eval $3=`echo $1 | sed -e "s#$RE#\2#"`
    #MINOR
    eval $4=`echo $1 | sed -e "s#$RE#\3#"`
}

if [ "___semver-parser.sh" == "___`basename $0`" ]; then

MAJOR=0
MINOR=0
PATCH=0

semverParseInto $1 MAJOR MINOR PATCH
#echo $MAJOR $MINOR $PATCH

echo export MAYOR=$MAJOR
echo export MINOR=$MINOR
echo export PATCH=$PATCH
fi